function X1(n,i){for(var r=0;r<i.length;r++){const l=i[r];if(typeof l!="string"&&!Array.isArray(l)){for(const s in l)if(s!=="default"&&!(s in n)){const u=Object.getOwnPropertyDescriptor(l,s);u&&Object.defineProperty(n,s,u.get?u:{enumerable:!0,get:()=>l[s]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(s){if(s.ep)return;s.ep=!0;const u=r(s);fetch(s.href,u)}})();function by(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var sf={exports:{}},eo={};var Zg;function Q1(){if(Zg)return eo;Zg=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(l,s,u){var d=null;if(u!==void 0&&(d=""+u),s.key!==void 0&&(d=""+s.key),"key"in s){u={};for(var p in s)p!=="key"&&(u[p]=s[p])}else u=s;return s=u.ref,{$$typeof:n,type:l,key:d,ref:s!==void 0?s:null,props:u}}return eo.Fragment=i,eo.jsx=r,eo.jsxs=r,eo}var Wg;function Z1(){return Wg||(Wg=1,sf.exports=Q1()),sf.exports}var x=Z1(),cf={exports:{}},xe={};var Jg;function W1(){if(Jg)return xe;Jg=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),C=Symbol.iterator;function E(R){return R===null||typeof R!="object"?null:(R=C&&R[C]||R["@@iterator"],typeof R=="function"?R:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,_={};function N(R,V,Q){this.props=R,this.context=V,this.refs=_,this.updater=Q||w}N.prototype.isReactComponent={},N.prototype.setState=function(R,V){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,V,"setState")},N.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function M(){}M.prototype=N.prototype;function D(R,V,Q){this.props=R,this.context=V,this.refs=_,this.updater=Q||w}var H=D.prototype=new M;H.constructor=D,T(H,N.prototype),H.isPureReactComponent=!0;var G=Array.isArray;function W(){}var U={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function J(R,V,Q){var ee=Q.ref;return{$$typeof:n,type:R,key:V,ref:ee!==void 0?ee:null,props:Q}}function te(R,V){return J(R.type,V,R.props)}function ae(R){return typeof R=="object"&&R!==null&&R.$$typeof===n}function ne(R){var V={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(Q){return V[Q]})}var re=/\/+/g;function ie(R,V){return typeof R=="object"&&R!==null&&R.key!=null?ne(""+R.key):V.toString(36)}function ue(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(W,W):(R.status="pending",R.then(function(V){R.status==="pending"&&(R.status="fulfilled",R.value=V)},function(V){R.status==="pending"&&(R.status="rejected",R.reason=V)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function L(R,V,Q,ee,fe){var me=typeof R;(me==="undefined"||me==="boolean")&&(R=null);var X=!1;if(R===null)X=!0;else switch(me){case"bigint":case"string":case"number":X=!0;break;case"object":switch(R.$$typeof){case n:case i:X=!0;break;case b:return X=R._init,L(X(R._payload),V,Q,ee,fe)}}if(X)return fe=fe(R),X=ee===""?"."+ie(R,0):ee,G(fe)?(Q="",X!=null&&(Q=X.replace(re,"$&/")+"/"),L(fe,V,Q,"",function(_e){return _e})):fe!=null&&(ae(fe)&&(fe=te(fe,Q+(fe.key==null||R&&R.key===fe.key?"":(""+fe.key).replace(re,"$&/")+"/")+X)),V.push(fe)),1;X=0;var ye=ee===""?".":ee+":";if(G(R))for(var be=0;be<R.length;be++)ee=R[be],me=ye+ie(ee,be),X+=L(ee,V,Q,me,fe);else if(be=E(R),typeof be=="function")for(R=be.call(R),be=0;!(ee=R.next()).done;)ee=ee.value,me=ye+ie(ee,be++),X+=L(ee,V,Q,me,fe);else if(me==="object"){if(typeof R.then=="function")return L(ue(R),V,Q,ee,fe);throw V=String(R),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return X}function K(R,V,Q){if(R==null)return R;var ee=[],fe=0;return L(R,ee,"","",function(me){return V.call(Q,me,fe++)}),ee}function z(R){if(R._status===-1){var V=R._result;V=V(),V.then(function(Q){(R._status===0||R._status===-1)&&(R._status=1,R._result=Q)},function(Q){(R._status===0||R._status===-1)&&(R._status=2,R._result=Q)}),R._status===-1&&(R._status=0,R._result=V)}if(R._status===1)return R._result.default;throw R._result}var Z=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},pe={map:K,forEach:function(R,V,Q){K(R,function(){V.apply(this,arguments)},Q)},count:function(R){var V=0;return K(R,function(){V++}),V},toArray:function(R){return K(R,function(V){return V})||[]},only:function(R){if(!ae(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return xe.Activity=v,xe.Children=pe,xe.Component=N,xe.Fragment=r,xe.Profiler=s,xe.PureComponent=D,xe.StrictMode=l,xe.Suspense=h,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,xe.__COMPILER_RUNTIME={__proto__:null,c:function(R){return U.H.useMemoCache(R)}},xe.cache=function(R){return function(){return R.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(R,V,Q){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var ee=T({},R.props),fe=R.key;if(V!=null)for(me in V.key!==void 0&&(fe=""+V.key),V)!Y.call(V,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&V.ref===void 0||(ee[me]=V[me]);var me=arguments.length-2;if(me===1)ee.children=Q;else if(1<me){for(var X=Array(me),ye=0;ye<me;ye++)X[ye]=arguments[ye+2];ee.children=X}return J(R.type,fe,ee)},xe.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:u,_context:R},R},xe.createElement=function(R,V,Q){var ee,fe={},me=null;if(V!=null)for(ee in V.key!==void 0&&(me=""+V.key),V)Y.call(V,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(fe[ee]=V[ee]);var X=arguments.length-2;if(X===1)fe.children=Q;else if(1<X){for(var ye=Array(X),be=0;be<X;be++)ye[be]=arguments[be+2];fe.children=ye}if(R&&R.defaultProps)for(ee in X=R.defaultProps,X)fe[ee]===void 0&&(fe[ee]=X[ee]);return J(R,me,fe)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(R){return{$$typeof:p,render:R}},xe.isValidElement=ae,xe.lazy=function(R){return{$$typeof:b,_payload:{_status:-1,_result:R},_init:z}},xe.memo=function(R,V){return{$$typeof:m,type:R,compare:V===void 0?null:V}},xe.startTransition=function(R){var V=U.T,Q={};U.T=Q;try{var ee=R(),fe=U.S;fe!==null&&fe(Q,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(W,Z)}catch(me){Z(me)}finally{V!==null&&Q.types!==null&&(V.types=Q.types),U.T=V}},xe.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},xe.use=function(R){return U.H.use(R)},xe.useActionState=function(R,V,Q){return U.H.useActionState(R,V,Q)},xe.useCallback=function(R,V){return U.H.useCallback(R,V)},xe.useContext=function(R){return U.H.useContext(R)},xe.useDebugValue=function(){},xe.useDeferredValue=function(R,V){return U.H.useDeferredValue(R,V)},xe.useEffect=function(R,V){return U.H.useEffect(R,V)},xe.useEffectEvent=function(R){return U.H.useEffectEvent(R)},xe.useId=function(){return U.H.useId()},xe.useImperativeHandle=function(R,V,Q){return U.H.useImperativeHandle(R,V,Q)},xe.useInsertionEffect=function(R,V){return U.H.useInsertionEffect(R,V)},xe.useLayoutEffect=function(R,V){return U.H.useLayoutEffect(R,V)},xe.useMemo=function(R,V){return U.H.useMemo(R,V)},xe.useOptimistic=function(R,V){return U.H.useOptimistic(R,V)},xe.useReducer=function(R,V,Q){return U.H.useReducer(R,V,Q)},xe.useRef=function(R){return U.H.useRef(R)},xe.useState=function(R){return U.H.useState(R)},xe.useSyncExternalStore=function(R,V,Q){return U.H.useSyncExternalStore(R,V,Q)},xe.useTransition=function(){return U.H.useTransition()},xe.version="19.2.3",xe}var ev;function Cs(){return ev||(ev=1,cf.exports=W1()),cf.exports}var g=Cs();const ma=by(g),id=X1({__proto__:null,default:ma},[g]);var uf={exports:{}},to={},ff={exports:{}},df={};var tv;function J1(){return tv||(tv=1,(function(n){function i(L,K){var z=L.length;L.push(K);e:for(;0<z;){var Z=z-1>>>1,pe=L[Z];if(0<s(pe,K))L[Z]=K,L[z]=pe,z=Z;else break e}}function r(L){return L.length===0?null:L[0]}function l(L){if(L.length===0)return null;var K=L[0],z=L.pop();if(z!==K){L[0]=z;e:for(var Z=0,pe=L.length,R=pe>>>1;Z<R;){var V=2*(Z+1)-1,Q=L[V],ee=V+1,fe=L[ee];if(0>s(Q,z))ee<pe&&0>s(fe,Q)?(L[Z]=fe,L[ee]=z,Z=ee):(L[Z]=Q,L[V]=z,Z=V);else if(ee<pe&&0>s(fe,z))L[Z]=fe,L[ee]=z,Z=ee;else break e}}return K}function s(L,K){var z=L.sortIndex-K.sortIndex;return z!==0?z:L.id-K.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();n.unstable_now=function(){return d.now()-p}}var h=[],m=[],b=1,v=null,C=3,E=!1,w=!1,T=!1,_=!1,N=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function H(L){for(var K=r(m);K!==null;){if(K.callback===null)l(m);else if(K.startTime<=L)l(m),K.sortIndex=K.expirationTime,i(h,K);else break;K=r(m)}}function G(L){if(T=!1,H(L),!w)if(r(h)!==null)w=!0,W||(W=!0,ne());else{var K=r(m);K!==null&&ue(G,K.startTime-L)}}var W=!1,U=-1,Y=5,J=-1;function te(){return _?!0:!(n.unstable_now()-J<Y)}function ae(){if(_=!1,W){var L=n.unstable_now();J=L;var K=!0;try{e:{w=!1,T&&(T=!1,M(U),U=-1),E=!0;var z=C;try{t:{for(H(L),v=r(h);v!==null&&!(v.expirationTime>L&&te());){var Z=v.callback;if(typeof Z=="function"){v.callback=null,C=v.priorityLevel;var pe=Z(v.expirationTime<=L);if(L=n.unstable_now(),typeof pe=="function"){v.callback=pe,H(L),K=!0;break t}v===r(h)&&l(h),H(L)}else l(h);v=r(h)}if(v!==null)K=!0;else{var R=r(m);R!==null&&ue(G,R.startTime-L),K=!1}}break e}finally{v=null,C=z,E=!1}K=void 0}}finally{K?ne():W=!1}}}var ne;if(typeof D=="function")ne=function(){D(ae)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=ae,ne=function(){ie.postMessage(null)}}else ne=function(){N(ae,0)};function ue(L,K){U=N(function(){L(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return C},n.unstable_next=function(L){switch(C){case 1:case 2:case 3:var K=3;break;default:K=C}var z=C;C=K;try{return L()}finally{C=z}},n.unstable_requestPaint=function(){_=!0},n.unstable_runWithPriority=function(L,K){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var z=C;C=L;try{return K()}finally{C=z}},n.unstable_scheduleCallback=function(L,K,z){var Z=n.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Z+z:Z):z=Z,L){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=z+pe,L={id:b++,callback:K,priorityLevel:L,startTime:z,expirationTime:pe,sortIndex:-1},z>Z?(L.sortIndex=z,i(m,L),r(h)===null&&L===r(m)&&(T?(M(U),U=-1):T=!0,ue(G,z-Z))):(L.sortIndex=pe,i(h,L),w||E||(w=!0,W||(W=!0,ne()))),L},n.unstable_shouldYield=te,n.unstable_wrapCallback=function(L){var K=C;return function(){var z=C;C=K;try{return L.apply(this,arguments)}finally{C=z}}}})(df)),df}var nv;function eC(){return nv||(nv=1,ff.exports=J1()),ff.exports}var pf={exports:{}},pt={};var av;function tC(){if(av)return pt;av=1;var n=Cs();function i(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)m+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var l={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(h,m,b){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:h,containerInfo:m,implementation:b}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,pt.createPortal=function(h,m){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return u(h,m,null,b)},pt.flushSync=function(h){var m=d.T,b=l.p;try{if(d.T=null,l.p=2,h)return h()}finally{d.T=m,l.p=b,l.d.f()}},pt.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,l.d.C(h,m))},pt.prefetchDNS=function(h){typeof h=="string"&&l.d.D(h)},pt.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var b=m.as,v=p(b,m.crossOrigin),C=typeof m.integrity=="string"?m.integrity:void 0,E=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;b==="style"?l.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:C,fetchPriority:E}):b==="script"&&l.d.X(h,{crossOrigin:v,integrity:C,fetchPriority:E,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},pt.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var b=p(m.as,m.crossOrigin);l.d.M(h,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&l.d.M(h)},pt.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var b=m.as,v=p(b,m.crossOrigin);l.d.L(h,b,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},pt.preloadModule=function(h,m){if(typeof h=="string")if(m){var b=p(m.as,m.crossOrigin);l.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else l.d.m(h)},pt.requestFormReset=function(h){l.d.r(h)},pt.unstable_batchedUpdates=function(h,m){return h(m)},pt.useFormState=function(h,m,b){return d.H.useFormState(h,m,b)},pt.useFormStatus=function(){return d.H.useHostTransitionStatus()},pt.version="19.2.3",pt}var iv;function Sy(){if(iv)return pf.exports;iv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),pf.exports=tC(),pf.exports}var rv;function nC(){if(rv)return to;rv=1;var n=eC(),i=Cs(),r=Sy();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(l(188))}function m(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(l(188));return t!==e?null:e}for(var a=e,o=t;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),e;if(f===o)return h(c),t;f=f.sibling}throw Error(l(188))}if(a.return!==o.return)a=c,o=f;else{for(var y=!1,S=c.child;S;){if(S===a){y=!0,a=c,o=f;break}if(S===o){y=!0,o=c,a=f;break}S=S.sibling}if(!y){for(S=f.child;S;){if(S===a){y=!0,a=f,o=c;break}if(S===o){y=!0,o=f,a=c;break}S=S.sibling}if(!y)throw Error(l(189))}}if(a.alternate!==o)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,C=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),D=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),te=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=ae&&e[ae]||e["@@iterator"],typeof e=="function"?e:null)}var re=Symbol.for("react.client.reference");function ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case N:return"Profiler";case _:return"StrictMode";case G:return"Suspense";case W:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case D:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case H:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case Y:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}var ue=Array.isArray,L=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},Z=[],pe=-1;function R(e){return{current:e}}function V(e){0>pe||(e.current=Z[pe],Z[pe]=null,pe--)}function Q(e,t){pe++,Z[pe]=e.current,e.current=t}var ee=R(null),fe=R(null),me=R(null),X=R(null);function ye(e,t){switch(Q(me,t),Q(fe,e),Q(ee,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?bg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=bg(t),e=Sg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(ee),Q(ee,e)}function be(){V(ee),V(fe),V(me)}function _e(e){e.memoizedState!==null&&Q(X,e);var t=ee.current,a=Sg(t,e.type);t!==a&&(Q(fe,e),Q(ee,a))}function Me(e){fe.current===e&&(V(ee),V(fe)),X.current===e&&(V(X),Qr._currentValue=z)}var Ie,yt;function xt(e){if(Ie===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ie=t&&t[1]||"",yt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ie+e+yt}var wa=!1;function _a(e,t){if(!e||wa)return"";wa=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(B){var P=B}Reflect.construct(e,[],$)}else{try{$.call()}catch(B){P=B}e.call($.prototype)}}else{try{throw Error()}catch(B){P=B}($=e())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(B){if(B&&P&&typeof B.stack=="string")return[B.stack,P.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],S=f[1];if(y&&S){var A=y.split(`
`),I=S.split(`
`);for(c=o=0;o<A.length&&!A[o].includes("DetermineComponentFrameRoot");)o++;for(;c<I.length&&!I[c].includes("DetermineComponentFrameRoot");)c++;if(o===A.length||c===I.length)for(o=A.length-1,c=I.length-1;1<=o&&0<=c&&A[o]!==I[c];)c--;for(;1<=o&&0<=c;o--,c--)if(A[o]!==I[c]){if(o!==1||c!==1)do if(o--,c--,0>c||A[o]!==I[c]){var F=`
`+A[o].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=o&&0<=c);break}}}finally{wa=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?xt(a):""}function lr(e,t){switch(e.tag){case 26:case 27:case 5:return xt(e.type);case 16:return xt("Lazy");case 13:return e.child!==t&&t!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return _a(e.type,!1);case 11:return _a(e.type.render,!1);case 1:return _a(e.type,!0);case 31:return xt("Activity");default:return""}}function Zd(e){try{var t="",a=null;do t+=lr(e,a),a=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ys=Object.prototype.hasOwnProperty,qs=n.unstable_scheduleCallback,$s=n.unstable_cancelCallback,Rb=n.unstable_shouldYield,Ab=n.unstable_requestPaint,At=n.unstable_now,Nb=n.unstable_getCurrentPriorityLevel,Wd=n.unstable_ImmediatePriority,Jd=n.unstable_UserBlockingPriority,Mo=n.unstable_NormalPriority,Ob=n.unstable_LowPriority,ep=n.unstable_IdlePriority,Mb=n.log,Db=n.unstable_setDisableYieldValue,sr=null,Nt=null;function Vn(e){if(typeof Mb=="function"&&Db(e),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(sr,e)}catch{}}var Ot=Math.clz32?Math.clz32:kb,Lb=Math.log,jb=Math.LN2;function kb(e){return e>>>=0,e===0?32:31-(Lb(e)/jb|0)|0}var Do=256,Lo=262144,jo=4194304;function Ra(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ko(e,t,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var S=o&134217727;return S!==0?(o=S&~f,o!==0?c=Ra(o):(y&=S,y!==0?c=Ra(y):a||(a=S&~e,a!==0&&(c=Ra(a))))):(S=o&~f,S!==0?c=Ra(S):y!==0?c=Ra(y):a||(a=o&~e,a!==0&&(c=Ra(a)))),c===0?0:t!==0&&t!==c&&(t&f)===0&&(f=c&-c,a=t&-t,f>=a||f===32&&(a&4194048)!==0)?t:c}function cr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ib(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tp(){var e=jo;return jo<<=1,(jo&62914560)===0&&(jo=4194304),e}function Xs(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ur(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function zb(e,t,a,o,c,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var S=e.entanglements,A=e.expirationTimes,I=e.hiddenUpdates;for(a=y&~a;0<a;){var F=31-Ot(a),$=1<<F;S[F]=0,A[F]=-1;var P=I[F];if(P!==null)for(I[F]=null,F=0;F<P.length;F++){var B=P[F];B!==null&&(B.lane&=-536870913)}a&=~$}o!==0&&np(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~t))}function np(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Ot(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ap(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var o=31-Ot(a),c=1<<o;c&t|e[o]&t&&(e[o]|=t),a&=~c}}function ip(e,t){var a=t&-t;return a=(a&42)!==0?1:Qs(a),(a&(e.suspendedLanes|t))!==0?0:a}function Qs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rp(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Fg(e.type))}function op(e,t){var a=K.p;try{return K.p=e,t()}finally{K.p=a}}var Fn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Fn,St="__reactProps$"+Fn,ni="__reactContainer$"+Fn,Ws="__reactEvents$"+Fn,Pb="__reactListeners$"+Fn,Hb="__reactHandles$"+Fn,lp="__reactResources$"+Fn,fr="__reactMarker$"+Fn;function Js(e){delete e[lt],delete e[St],delete e[Ws],delete e[Pb],delete e[Hb]}function ai(e){var t=e[lt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ni]||a[lt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Ag(e);e!==null;){if(a=e[lt])return a;e=Ag(e)}return t}e=a,a=e.parentNode}return null}function ii(e){if(e=e[lt]||e[ni]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function dr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function ri(e){var t=e[lp];return t||(t=e[lp]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function rt(e){e[fr]=!0}var sp=new Set,cp={};function Aa(e,t){oi(e,t),oi(e+"Capture",t)}function oi(e,t){for(cp[e]=t,e=0;e<t.length;e++)sp.add(t[e])}var Ub=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),up={},fp={};function Bb(e){return Ys.call(fp,e)?!0:Ys.call(up,e)?!1:Ub.test(e)?fp[e]=!0:(up[e]=!0,!1)}function Io(e,t,a){if(Bb(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function zo(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function bn(e,t,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+o)}}function Bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function dp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gb(e,t,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ec(e){if(!e._valueTracker){var t=dp(e)?"checked":"value";e._valueTracker=Gb(e,t,""+e[t])}}function pp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),o="";return e&&(o=dp(e)?e.checked?"true":"false":e.value),e=o,e!==a?(t.setValue(e),!0):!1}function Po(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vb=/[\n"\\]/g;function Gt(e){return e.replace(Vb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function tc(e,t,a,o,c,f,y,S){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),t!=null?y==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Bt(t)):e.value!==""+Bt(t)&&(e.value=""+Bt(t)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),t!=null?nc(e,y,Bt(t)):a!=null?nc(e,y,Bt(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.name=""+Bt(S):e.removeAttribute("name")}function hp(e,t,a,o,c,f,y,S){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||t!=null)){ec(e);return}a=a!=null?""+Bt(a):"",t=t!=null?""+Bt(t):a,S||t===e.value||(e.value=t),e.defaultValue=t}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=S?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),ec(e)}function nc(e,t,a){t==="number"&&Po(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function li(e,t,a,o){if(e=e.options,t){t={};for(var c=0;c<a.length;c++)t["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=t.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Bt(a),t=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function mp(e,t,a){if(t!=null&&(t=""+Bt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Bt(a):""}function gp(e,t,a,o){if(t==null){if(o!=null){if(a!=null)throw Error(l(92));if(ue(o)){if(1<o.length)throw Error(l(93));o=o[0]}a=o}a==null&&(a=""),t=a}a=Bt(t),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),ec(e)}function si(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Fb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vp(e,t,a){var o=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,a):typeof a!="number"||a===0||Fb.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function yp(e,t,a){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in t)o=t[c],t.hasOwnProperty(c)&&a[c]!==o&&vp(e,c,o)}else for(var f in t)t.hasOwnProperty(f)&&vp(e,f,t[f])}function ac(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Yb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ho(e){return Yb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Sn(){}var ic=null;function rc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ci=null,ui=null;function xp(e){var t=ii(e);if(t&&(e=t.stateNode)){var a=e[St]||null;e:switch(e=t.stateNode,t.type){case"input":if(tc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Gt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var o=a[t];if(o!==e&&o.form===e.form){var c=o[St]||null;if(!c)throw Error(l(90));tc(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<a.length;t++)o=a[t],o.form===e.form&&pp(o)}break e;case"textarea":mp(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&li(e,!!a.multiple,t,!1)}}}var oc=!1;function bp(e,t,a){if(oc)return e(t,a);oc=!0;try{var o=e(t);return o}finally{if(oc=!1,(ci!==null||ui!==null)&&(_l(),ci&&(t=ci,e=ui,ui=ci=null,xp(t),e)))for(t=0;t<e.length;t++)xp(e[t])}}function pr(e,t){var a=e.stateNode;if(a===null)return null;var o=a[St]||null;if(o===null)return null;a=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(l(231,t,typeof a));return a}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lc=!1;if(Cn)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){lc=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{lc=!1}var Kn=null,sc=null,Uo=null;function Sp(){if(Uo)return Uo;var e,t=sc,a=t.length,o,c="value"in Kn?Kn.value:Kn.textContent,f=c.length;for(e=0;e<a&&t[e]===c[e];e++);var y=a-e;for(o=1;o<=y&&t[a-o]===c[f-o];o++);return Uo=c.slice(e,1<o?1-o:void 0)}function Bo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Go(){return!0}function Cp(){return!1}function Ct(e){function t(a,o,c,f,y){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(a=e[S],this[S]=a?a(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Go:Cp,this.isPropagationStopped=Cp,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),t}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vo=Ct(Na),mr=v({},Na,{view:0,detail:0}),qb=Ct(mr),cc,uc,gr,Fo=v({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(cc=e.screenX-gr.screenX,uc=e.screenY-gr.screenY):uc=cc=0,gr=e),cc)},movementY:function(e){return"movementY"in e?e.movementY:uc}}),Tp=Ct(Fo),$b=v({},Fo,{dataTransfer:0}),Xb=Ct($b),Qb=v({},mr,{relatedTarget:0}),fc=Ct(Qb),Zb=v({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),Wb=Ct(Zb),Jb=v({},Na,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eS=Ct(Jb),tS=v({},Na,{data:0}),Ep=Ct(tS),nS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=iS[e])?!!t[e]:!1}function dc(){return rS}var oS=v({},mr,{key:function(e){if(e.key){var t=nS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?aS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(e){return e.type==="keypress"?Bo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lS=Ct(oS),sS=v({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=Ct(sS),cS=v({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),uS=Ct(cS),fS=v({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),dS=Ct(fS),pS=v({},Fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hS=Ct(pS),mS=v({},Na,{newState:0,oldState:0}),gS=Ct(mS),vS=[9,13,27,32],pc=Cn&&"CompositionEvent"in window,vr=null;Cn&&"documentMode"in document&&(vr=document.documentMode);var yS=Cn&&"TextEvent"in window&&!vr,_p=Cn&&(!pc||vr&&8<vr&&11>=vr),Rp=" ",Ap=!1;function Np(e,t){switch(e){case"keyup":return vS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fi=!1;function xS(e,t){switch(e){case"compositionend":return Op(t);case"keypress":return t.which!==32?null:(Ap=!0,Rp);case"textInput":return e=t.data,e===Rp&&Ap?null:e;default:return null}}function bS(e,t){if(fi)return e==="compositionend"||!pc&&Np(e,t)?(e=Sp(),Uo=sc=Kn=null,fi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _p&&t.locale!=="ko"?null:t.data;default:return null}}var SS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!SS[e.type]:t==="textarea"}function Dp(e,t,a,o){ci?ui?ui.push(o):ui=[o]:ci=o,t=Ll(t,"onChange"),0<t.length&&(a=new Vo("onChange","change",null,a,o),e.push({event:a,listeners:t}))}var yr=null,xr=null;function CS(e){hg(e,0)}function Ko(e){var t=dr(e);if(pp(t))return e}function Lp(e,t){if(e==="change")return t}var jp=!1;if(Cn){var hc;if(Cn){var mc="oninput"in document;if(!mc){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),mc=typeof kp.oninput=="function"}hc=mc}else hc=!1;jp=hc&&(!document.documentMode||9<document.documentMode)}function Ip(){yr&&(yr.detachEvent("onpropertychange",zp),xr=yr=null)}function zp(e){if(e.propertyName==="value"&&Ko(xr)){var t=[];Dp(t,xr,e,rc(e)),bp(CS,t)}}function TS(e,t,a){e==="focusin"?(Ip(),yr=t,xr=a,yr.attachEvent("onpropertychange",zp)):e==="focusout"&&Ip()}function ES(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ko(xr)}function wS(e,t){if(e==="click")return Ko(t)}function _S(e,t){if(e==="input"||e==="change")return Ko(t)}function RS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:RS;function br(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ys.call(t,c)||!Mt(e[c],t[c]))return!1}return!0}function Pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hp(e,t){var a=Pp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=t&&o>=t)return{node:a,offset:t-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pp(a)}}function Up(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Up(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Po(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Po(e.document)}return t}function gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var AS=Cn&&"documentMode"in document&&11>=document.documentMode,di=null,vc=null,Sr=null,yc=!1;function Gp(e,t,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yc||di==null||di!==Po(o)||(o=di,"selectionStart"in o&&gc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Sr&&br(Sr,o)||(Sr=o,o=Ll(vc,"onSelect"),0<o.length&&(t=new Vo("onSelect","select",null,t,a),e.push({event:t,listeners:o}),t.target=di)))}function Oa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var pi={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionrun:Oa("Transition","TransitionRun"),transitionstart:Oa("Transition","TransitionStart"),transitioncancel:Oa("Transition","TransitionCancel"),transitionend:Oa("Transition","TransitionEnd")},xc={},Vp={};Cn&&(Vp=document.createElement("div").style,"AnimationEvent"in window||(delete pi.animationend.animation,delete pi.animationiteration.animation,delete pi.animationstart.animation),"TransitionEvent"in window||delete pi.transitionend.transition);function Ma(e){if(xc[e])return xc[e];if(!pi[e])return e;var t=pi[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Vp)return xc[e]=t[a];return e}var Fp=Ma("animationend"),Kp=Ma("animationiteration"),Yp=Ma("animationstart"),NS=Ma("transitionrun"),OS=Ma("transitionstart"),MS=Ma("transitioncancel"),qp=Ma("transitionend"),$p=new Map,bc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bc.push("scrollEnd");function Wt(e,t){$p.set(e,t),Aa(t,[e])}var Yo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vt=[],hi=0,Sc=0;function qo(){for(var e=hi,t=Sc=hi=0;t<e;){var a=Vt[t];Vt[t++]=null;var o=Vt[t];Vt[t++]=null;var c=Vt[t];Vt[t++]=null;var f=Vt[t];if(Vt[t++]=null,o!==null&&c!==null){var y=o.pending;y===null?c.next=c:(c.next=y.next,y.next=c),o.pending=c}f!==0&&Xp(a,c,f)}}function $o(e,t,a,o){Vt[hi++]=e,Vt[hi++]=t,Vt[hi++]=a,Vt[hi++]=o,Sc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Cc(e,t,a,o){return $o(e,t,a,o),Xo(e)}function Da(e,t){return $o(e,null,null,t),Xo(e)}function Xp(e,t,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&t!==null&&(c=31-Ot(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[t]:o.push(t),t.lane=a|536870912),f):null}function Xo(e){if(50<Vr)throw Vr=0,Mu=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function DS(e,t,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(e,t,a,o){return new DS(e,t,a,o)}function Tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tn(e,t){var a=e.alternate;return a===null?(a=Dt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Qp(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qo(e,t,a,o,c,f){var y=0;if(o=e,typeof e=="function")Tc(e)&&(y=1);else if(typeof e=="string")y=z1(e,a,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case J:return e=Dt(31,a,t,c),e.elementType=J,e.lanes=f,e;case T:return La(a.children,c,f,t);case _:y=8,c|=24;break;case N:return e=Dt(12,a,t,c|2),e.elementType=N,e.lanes=f,e;case G:return e=Dt(13,a,t,c),e.elementType=G,e.lanes=f,e;case W:return e=Dt(19,a,t,c),e.elementType=W,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:y=10;break e;case M:y=9;break e;case H:y=11;break e;case U:y=14;break e;case Y:y=16,o=null;break e}y=29,a=Error(l(130,e===null?"null":typeof e,"")),o=null}return t=Dt(y,a,t,c),t.elementType=e,t.type=o,t.lanes=f,t}function La(e,t,a,o){return e=Dt(7,e,o,t),e.lanes=a,e}function Ec(e,t,a){return e=Dt(6,e,null,t),e.lanes=a,e}function Zp(e){var t=Dt(18,null,null,0);return t.stateNode=e,t}function wc(e,t,a){return t=Dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wp=new WeakMap;function Ft(e,t){if(typeof e=="object"&&e!==null){var a=Wp.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Zd(t)},Wp.set(e,t),t)}return{value:e,source:t,stack:Zd(t)}}var gi=[],vi=0,Zo=null,Cr=0,Kt=[],Yt=0,Yn=null,sn=1,cn="";function En(e,t){gi[vi++]=Cr,gi[vi++]=Zo,Zo=e,Cr=t}function Jp(e,t,a){Kt[Yt++]=sn,Kt[Yt++]=cn,Kt[Yt++]=Yn,Yn=e;var o=sn;e=cn;var c=32-Ot(o)-1;o&=~(1<<c),a+=1;var f=32-Ot(t)+c;if(30<f){var y=c-c%5;f=(o&(1<<y)-1).toString(32),o>>=y,c-=y,sn=1<<32-Ot(t)+c|a<<c|o,cn=f+e}else sn=1<<f|a<<c|o,cn=e}function _c(e){e.return!==null&&(En(e,1),Jp(e,1,0))}function Rc(e){for(;e===Zo;)Zo=gi[--vi],gi[vi]=null,Cr=gi[--vi],gi[vi]=null;for(;e===Yn;)Yn=Kt[--Yt],Kt[Yt]=null,cn=Kt[--Yt],Kt[Yt]=null,sn=Kt[--Yt],Kt[Yt]=null}function eh(e,t){Kt[Yt++]=sn,Kt[Yt++]=cn,Kt[Yt++]=Yn,sn=t.id,cn=t.overflow,Yn=e}var st=null,Ke=null,Oe=!1,qn=null,qt=!1,Ac=Error(l(519));function $n(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Tr(Ft(t,e)),Ac}function th(e){var t=e.stateNode,a=e.type,o=e.memoizedProps;switch(t[lt]=e,t[St]=o,a){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(a=0;a<Kr.length;a++)we(Kr[a],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":we("invalid",t),hp(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":we("invalid",t);break;case"textarea":we("invalid",t),gp(t,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||o.suppressHydrationWarning===!0||yg(t.textContent,a)?(o.popover!=null&&(we("beforetoggle",t),we("toggle",t)),o.onScroll!=null&&we("scroll",t),o.onScrollEnd!=null&&we("scrollend",t),o.onClick!=null&&(t.onclick=Sn),t=!0):t=!1,t||$n(e,!0)}function nh(e){for(st=e.return;st;)switch(st.tag){case 5:case 31:case 13:qt=!1;return;case 27:case 3:qt=!0;return;default:st=st.return}}function yi(e){if(e!==st)return!1;if(!Oe)return nh(e),Oe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Yu(e.type,e.memoizedProps)),a=!a),a&&Ke&&$n(e),nh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ke=Rg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ke=Rg(e)}else t===27?(t=Ke,sa(e.type)?(e=Zu,Zu=null,Ke=e):Ke=t):Ke=st?Xt(e.stateNode.nextSibling):null;return!0}function ja(){Ke=st=null,Oe=!1}function Nc(){var e=qn;return e!==null&&(_t===null?_t=e:_t.push.apply(_t,e),qn=null),e}function Tr(e){qn===null?qn=[e]:qn.push(e)}var Oc=R(null),ka=null,wn=null;function Xn(e,t,a){Q(Oc,t._currentValue),t._currentValue=a}function _n(e){e._currentValue=Oc.current,V(Oc)}function Mc(e,t,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===a)break;e=e.return}}function Dc(e,t,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;e:for(;f!==null;){var S=f;f=c;for(var A=0;A<t.length;A++)if(S.context===t[A]){f.lanes|=a,S=f.alternate,S!==null&&(S.lanes|=a),Mc(f.return,a,e),o||(y=null);break e}f=S.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(l(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Mc(y,a,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function xi(e,t,a,o){e=null;for(var c=t,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(l(387));if(y=y.memoizedProps,y!==null){var S=c.type;Mt(c.pendingProps.value,y.value)||(e!==null?e.push(S):e=[S])}}else if(c===X.current){if(y=c.alternate,y===null)throw Error(l(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Qr):e=[Qr])}c=c.return}e!==null&&Dc(t,e,a,o),t.flags|=262144}function Wo(e){for(e=e.firstContext;e!==null;){if(!Mt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ia(e){ka=e,wn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ct(e){return ah(ka,e)}function Jo(e,t){return ka===null&&Ia(e),ah(e,t)}function ah(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},wn===null){if(e===null)throw Error(l(308));wn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else wn=wn.next=t;return a}var LS=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},jS=n.unstable_scheduleCallback,kS=n.unstable_NormalPriority,Je={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lc(){return{controller:new LS,data:new Map,refCount:0}}function Er(e){e.refCount--,e.refCount===0&&jS(kS,function(){e.controller.abort()})}var wr=null,jc=0,bi=0,Si=null;function IS(e,t){if(wr===null){var a=wr=[];jc=0,bi=zu(),Si={status:"pending",value:void 0,then:function(o){a.push(o)}}}return jc++,t.then(ih,ih),t}function ih(){if(--jc===0&&wr!==null){Si!==null&&(Si.status="fulfilled");var e=wr;wr=null,bi=0,Si=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function zS(e,t){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var c=0;c<a.length;c++)(0,a[c])(t)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var rh=L.S;L.S=function(e,t){Gm=At(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&IS(e,t),rh!==null&&rh(e,t)};var za=R(null);function kc(){var e=za.current;return e!==null?e:Ve.pooledCache}function el(e,t){t===null?Q(za,za.current):Q(za,t.pool)}function oh(){var e=kc();return e===null?null:{parent:Je._currentValue,pool:e}}var Ci=Error(l(460)),Ic=Error(l(474)),tl=Error(l(542)),nl={then:function(){}};function lh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sh(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Sn,Sn),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uh(e),e;default:if(typeof t.status=="string")t.then(Sn,Sn);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=o}},function(o){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,uh(e),e}throw Ha=t,Ci}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ha=a,Ci):a}}var Ha=null;function ch(){if(Ha===null)throw Error(l(459));var e=Ha;return Ha=null,e}function uh(e){if(e===Ci||e===tl)throw Error(l(483))}var Ti=null,_r=0;function al(e){var t=_r;return _r+=1,Ti===null&&(Ti=[]),sh(Ti,e,t)}function Rr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function il(e,t){throw t.$$typeof===C?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function fh(e){function t(j,O){if(e){var k=j.deletions;k===null?(j.deletions=[O],j.flags|=16):k.push(O)}}function a(j,O){if(!e)return null;for(;O!==null;)t(j,O),O=O.sibling;return null}function o(j){for(var O=new Map;j!==null;)j.key!==null?O.set(j.key,j):O.set(j.index,j),j=j.sibling;return O}function c(j,O){return j=Tn(j,O),j.index=0,j.sibling=null,j}function f(j,O,k){return j.index=k,e?(k=j.alternate,k!==null?(k=k.index,k<O?(j.flags|=67108866,O):k):(j.flags|=67108866,O)):(j.flags|=1048576,O)}function y(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function S(j,O,k,q){return O===null||O.tag!==6?(O=Ec(k,j.mode,q),O.return=j,O):(O=c(O,k),O.return=j,O)}function A(j,O,k,q){var he=k.type;return he===T?F(j,O,k.props.children,q,k.key):O!==null&&(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Y&&Pa(he)===O.type)?(O=c(O,k.props),Rr(O,k),O.return=j,O):(O=Qo(k.type,k.key,k.props,null,j.mode,q),Rr(O,k),O.return=j,O)}function I(j,O,k,q){return O===null||O.tag!==4||O.stateNode.containerInfo!==k.containerInfo||O.stateNode.implementation!==k.implementation?(O=wc(k,j.mode,q),O.return=j,O):(O=c(O,k.children||[]),O.return=j,O)}function F(j,O,k,q,he){return O===null||O.tag!==7?(O=La(k,j.mode,q,he),O.return=j,O):(O=c(O,k),O.return=j,O)}function $(j,O,k){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Ec(""+O,j.mode,k),O.return=j,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case E:return k=Qo(O.type,O.key,O.props,null,j.mode,k),Rr(k,O),k.return=j,k;case w:return O=wc(O,j.mode,k),O.return=j,O;case Y:return O=Pa(O),$(j,O,k)}if(ue(O)||ne(O))return O=La(O,j.mode,k,null),O.return=j,O;if(typeof O.then=="function")return $(j,al(O),k);if(O.$$typeof===D)return $(j,Jo(j,O),k);il(j,O)}return null}function P(j,O,k,q){var he=O!==null?O.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return he!==null?null:S(j,O,""+k,q);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case E:return k.key===he?A(j,O,k,q):null;case w:return k.key===he?I(j,O,k,q):null;case Y:return k=Pa(k),P(j,O,k,q)}if(ue(k)||ne(k))return he!==null?null:F(j,O,k,q,null);if(typeof k.then=="function")return P(j,O,al(k),q);if(k.$$typeof===D)return P(j,O,Jo(j,k),q);il(j,k)}return null}function B(j,O,k,q,he){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return j=j.get(k)||null,S(O,j,""+q,he);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case E:return j=j.get(q.key===null?k:q.key)||null,A(O,j,q,he);case w:return j=j.get(q.key===null?k:q.key)||null,I(O,j,q,he);case Y:return q=Pa(q),B(j,O,k,q,he)}if(ue(q)||ne(q))return j=j.get(k)||null,F(O,j,q,he,null);if(typeof q.then=="function")return B(j,O,k,al(q),he);if(q.$$typeof===D)return B(j,O,k,Jo(O,q),he);il(O,q)}return null}function oe(j,O,k,q){for(var he=null,De=null,ce=O,Ce=O=0,Ae=null;ce!==null&&Ce<k.length;Ce++){ce.index>Ce?(Ae=ce,ce=null):Ae=ce.sibling;var Le=P(j,ce,k[Ce],q);if(Le===null){ce===null&&(ce=Ae);break}e&&ce&&Le.alternate===null&&t(j,ce),O=f(Le,O,Ce),De===null?he=Le:De.sibling=Le,De=Le,ce=Ae}if(Ce===k.length)return a(j,ce),Oe&&En(j,Ce),he;if(ce===null){for(;Ce<k.length;Ce++)ce=$(j,k[Ce],q),ce!==null&&(O=f(ce,O,Ce),De===null?he=ce:De.sibling=ce,De=ce);return Oe&&En(j,Ce),he}for(ce=o(ce);Ce<k.length;Ce++)Ae=B(ce,j,Ce,k[Ce],q),Ae!==null&&(e&&Ae.alternate!==null&&ce.delete(Ae.key===null?Ce:Ae.key),O=f(Ae,O,Ce),De===null?he=Ae:De.sibling=Ae,De=Ae);return e&&ce.forEach(function(pa){return t(j,pa)}),Oe&&En(j,Ce),he}function ge(j,O,k,q){if(k==null)throw Error(l(151));for(var he=null,De=null,ce=O,Ce=O=0,Ae=null,Le=k.next();ce!==null&&!Le.done;Ce++,Le=k.next()){ce.index>Ce?(Ae=ce,ce=null):Ae=ce.sibling;var pa=P(j,ce,Le.value,q);if(pa===null){ce===null&&(ce=Ae);break}e&&ce&&pa.alternate===null&&t(j,ce),O=f(pa,O,Ce),De===null?he=pa:De.sibling=pa,De=pa,ce=Ae}if(Le.done)return a(j,ce),Oe&&En(j,Ce),he;if(ce===null){for(;!Le.done;Ce++,Le=k.next())Le=$(j,Le.value,q),Le!==null&&(O=f(Le,O,Ce),De===null?he=Le:De.sibling=Le,De=Le);return Oe&&En(j,Ce),he}for(ce=o(ce);!Le.done;Ce++,Le=k.next())Le=B(ce,j,Ce,Le.value,q),Le!==null&&(e&&Le.alternate!==null&&ce.delete(Le.key===null?Ce:Le.key),O=f(Le,O,Ce),De===null?he=Le:De.sibling=Le,De=Le);return e&&ce.forEach(function($1){return t(j,$1)}),Oe&&En(j,Ce),he}function Be(j,O,k,q){if(typeof k=="object"&&k!==null&&k.type===T&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case E:e:{for(var he=k.key;O!==null;){if(O.key===he){if(he=k.type,he===T){if(O.tag===7){a(j,O.sibling),q=c(O,k.props.children),q.return=j,j=q;break e}}else if(O.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Y&&Pa(he)===O.type){a(j,O.sibling),q=c(O,k.props),Rr(q,k),q.return=j,j=q;break e}a(j,O);break}else t(j,O);O=O.sibling}k.type===T?(q=La(k.props.children,j.mode,q,k.key),q.return=j,j=q):(q=Qo(k.type,k.key,k.props,null,j.mode,q),Rr(q,k),q.return=j,j=q)}return y(j);case w:e:{for(he=k.key;O!==null;){if(O.key===he)if(O.tag===4&&O.stateNode.containerInfo===k.containerInfo&&O.stateNode.implementation===k.implementation){a(j,O.sibling),q=c(O,k.children||[]),q.return=j,j=q;break e}else{a(j,O);break}else t(j,O);O=O.sibling}q=wc(k,j.mode,q),q.return=j,j=q}return y(j);case Y:return k=Pa(k),Be(j,O,k,q)}if(ue(k))return oe(j,O,k,q);if(ne(k)){if(he=ne(k),typeof he!="function")throw Error(l(150));return k=he.call(k),ge(j,O,k,q)}if(typeof k.then=="function")return Be(j,O,al(k),q);if(k.$$typeof===D)return Be(j,O,Jo(j,k),q);il(j,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,O!==null&&O.tag===6?(a(j,O.sibling),q=c(O,k),q.return=j,j=q):(a(j,O),q=Ec(k,j.mode,q),q.return=j,j=q),y(j)):a(j,O)}return function(j,O,k,q){try{_r=0;var he=Be(j,O,k,q);return Ti=null,he}catch(ce){if(ce===Ci||ce===tl)throw ce;var De=Dt(29,ce,null,j.mode);return De.lanes=q,De.return=j,De}}}var Ua=fh(!0),dh=fh(!1),Qn=!1;function zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Zn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(e,t,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(je&2)!==0){var c=o.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),o.pending=t,t=Xo(e),Xp(e,null,a),t}return $o(e,o,t,a),Xo(e)}function Ar(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,ap(e,a)}}function Hc(e,t){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=t:f=f.next=t}else c=f=t;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Uc=!1;function Nr(){if(Uc){var e=Si;if(e!==null)throw e}}function Or(e,t,a,o){Uc=!1;var c=e.updateQueue;Qn=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,S=c.shared.pending;if(S!==null){c.shared.pending=null;var A=S,I=A.next;A.next=null,y===null?f=I:y.next=I,y=A;var F=e.alternate;F!==null&&(F=F.updateQueue,S=F.lastBaseUpdate,S!==y&&(S===null?F.firstBaseUpdate=I:S.next=I,F.lastBaseUpdate=A))}if(f!==null){var $=c.baseState;y=0,F=I=A=null,S=f;do{var P=S.lane&-536870913,B=P!==S.lane;if(B?(Re&P)===P:(o&P)===P){P!==0&&P===bi&&(Uc=!0),F!==null&&(F=F.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var oe=e,ge=S;P=t;var Be=a;switch(ge.tag){case 1:if(oe=ge.payload,typeof oe=="function"){$=oe.call(Be,$,P);break e}$=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ge.payload,P=typeof oe=="function"?oe.call(Be,$,P):oe,P==null)break e;$=v({},$,P);break e;case 2:Qn=!0}}P=S.callback,P!==null&&(e.flags|=64,B&&(e.flags|=8192),B=c.callbacks,B===null?c.callbacks=[P]:B.push(P))}else B={lane:P,tag:S.tag,payload:S.payload,callback:S.callback,next:null},F===null?(I=F=B,A=$):F=F.next=B,y|=P;if(S=S.next,S===null){if(S=c.shared.pending,S===null)break;B=S,S=B.next,B.next=null,c.lastBaseUpdate=B,c.shared.pending=null}}while(!0);F===null&&(A=$),c.baseState=A,c.firstBaseUpdate=I,c.lastBaseUpdate=F,f===null&&(c.shared.lanes=0),aa|=y,e.lanes=y,e.memoizedState=$}}function ph(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function hh(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ph(a[e],t)}var Ei=R(null),rl=R(0);function mh(e,t){e=kn,Q(rl,e),Q(Ei,t),kn=e|t.baseLanes}function Bc(){Q(rl,kn),Q(Ei,Ei.current)}function Gc(){kn=rl.current,V(Ei),V(rl)}var Lt=R(null),$t=null;function Jn(e){var t=e.alternate;Q(Ze,Ze.current&1),Q(Lt,e),$t===null&&(t===null||Ei.current!==null||t.memoizedState!==null)&&($t=e)}function Vc(e){Q(Ze,Ze.current),Q(Lt,e),$t===null&&($t=e)}function gh(e){e.tag===22?(Q(Ze,Ze.current),Q(Lt,e),$t===null&&($t=e)):ea()}function ea(){Q(Ze,Ze.current),Q(Lt,Lt.current)}function jt(e){V(Lt),$t===e&&($t=null),V(Ze)}var Ze=R(0);function ol(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Xu(a)||Qu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rn=0,Se=null,He=null,et=null,ll=!1,wi=!1,Ba=!1,sl=0,Mr=0,_i=null,PS=0;function Xe(){throw Error(l(321))}function Fc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Mt(e[a],t[a]))return!1;return!0}function Kc(e,t,a,o,c,f){return Rn=f,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?Jh:ou,Ba=!1,f=a(o,c),Ba=!1,wi&&(f=yh(t,a,o,c)),vh(e),f}function vh(e){L.H=jr;var t=He!==null&&He.next!==null;if(Rn=0,et=He=Se=null,ll=!1,Mr=0,_i=null,t)throw Error(l(300));e===null||tt||(e=e.dependencies,e!==null&&Wo(e)&&(tt=!0))}function yh(e,t,a,o){Se=e;var c=0;do{if(wi&&(_i=null),Mr=0,wi=!1,25<=c)throw Error(l(301));if(c+=1,et=He=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=em,f=t(a,o)}while(wi);return f}function HS(){var e=L.H,t=e.useState()[0];return t=typeof t.then=="function"?Dr(t):t,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(Se.flags|=1024),t}function Yc(){var e=sl!==0;return sl=0,e}function qc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function $c(e){if(ll){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ll=!1}Rn=0,et=He=Se=null,wi=!1,Mr=sl=0,_i=null}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Se.memoizedState=et=e:et=et.next=e,et}function We(){if(He===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=et===null?Se.memoizedState:et.next;if(t!==null)et=t,He=e;else{if(e===null)throw Se.alternate===null?Error(l(467)):Error(l(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},et===null?Se.memoizedState=et=e:et=et.next=e}return et}function cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dr(e){var t=Mr;return Mr+=1,_i===null&&(_i=[]),e=sh(_i,e,t),t=Se,(et===null?t.memoizedState:et.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?Jh:ou),e}function ul(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Dr(e);if(e.$$typeof===D)return ct(e)}throw Error(l(438,String(e)))}function Xc(e){var t=null,a=Se.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var o=Se.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=cl(),Se.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),o=0;o<e;o++)a[o]=te;return t.index++,a}function An(e,t){return typeof t=="function"?t(e):t}function fl(e){var t=We();return Qc(t,He,e)}function Qc(e,t,a){var o=e.queue;if(o===null)throw Error(l(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}t.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{t=c.next;var S=y=null,A=null,I=t,F=!1;do{var $=I.lane&-536870913;if($!==I.lane?(Re&$)===$:(Rn&$)===$){var P=I.revertLane;if(P===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),$===bi&&(F=!0);else if((Rn&P)===P){I=I.next,P===bi&&(F=!0);continue}else $={lane:0,revertLane:I.revertLane,gesture:null,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},A===null?(S=A=$,y=f):A=A.next=$,Se.lanes|=P,aa|=P;$=I.action,Ba&&a(f,$),f=I.hasEagerState?I.eagerState:a(f,$)}else P={lane:$,revertLane:I.revertLane,gesture:I.gesture,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},A===null?(S=A=P,y=f):A=A.next=P,Se.lanes|=$,aa|=$;I=I.next}while(I!==null&&I!==t);if(A===null?y=f:A.next=S,!Mt(f,e.memoizedState)&&(tt=!0,F&&(a=Si,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=A,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Zc(e){var t=We(),a=t.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=t.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);Mt(f,t.memoizedState)||(tt=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),a.lastRenderedState=f}return[f,o]}function xh(e,t,a){var o=Se,c=We(),f=Oe;if(f){if(a===void 0)throw Error(l(407));a=a()}else a=t();var y=!Mt((He||c).memoizedState,a);if(y&&(c.memoizedState=a,tt=!0),c=c.queue,eu(Ch.bind(null,o,c,e),[e]),c.getSnapshot!==t||y||et!==null&&et.memoizedState.tag&1){if(o.flags|=2048,Ri(9,{destroy:void 0},Sh.bind(null,o,c,a,t),null),Ve===null)throw Error(l(349));f||(Rn&127)!==0||bh(o,t,a)}return a}function bh(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Se.updateQueue,t===null?(t=cl(),Se.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Sh(e,t,a,o){t.value=a,t.getSnapshot=o,Th(t)&&Eh(e)}function Ch(e,t,a){return a(function(){Th(t)&&Eh(e)})}function Th(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Mt(e,a)}catch{return!0}}function Eh(e){var t=Da(e,2);t!==null&&Rt(t,e,2)}function Wc(e){var t=bt();if(typeof e=="function"){var a=e;if(e=a(),Ba){Vn(!0);try{a()}finally{Vn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function wh(e,t,a,o){return e.baseState=a,Qc(e,He,typeof o=="function"?o:An)}function US(e,t,a,o,c){if(hl(e))throw Error(l(485));if(e=t.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};L.T!==null?a(!0):f.isTransition=!1,o(f),a=t.pending,a===null?(f.next=t.pending=f,_h(t,f)):(f.next=a.next,t.pending=a.next=f)}}function _h(e,t){var a=t.action,o=t.payload,c=e.state;if(t.isTransition){var f=L.T,y={};L.T=y;try{var S=a(c,o),A=L.S;A!==null&&A(y,S),Rh(e,t,S)}catch(I){Jc(e,t,I)}finally{f!==null&&y.types!==null&&(f.types=y.types),L.T=f}}else try{f=a(c,o),Rh(e,t,f)}catch(I){Jc(e,t,I)}}function Rh(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Ah(e,t,o)},function(o){return Jc(e,t,o)}):Ah(e,t,a)}function Ah(e,t,a){t.status="fulfilled",t.value=a,Nh(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,_h(e,a)))}function Jc(e,t,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=a,Nh(t),t=t.next;while(t!==o)}e.action=null}function Nh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Oh(e,t){return t}function Mh(e,t){if(Oe){var a=Ve.formState;if(a!==null){e:{var o=Se;if(Oe){if(Ke){t:{for(var c=Ke,f=qt;c.nodeType!==8;){if(!f){c=null;break t}if(c=Xt(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ke=Xt(c.nextSibling),o=c.data==="F!";break e}}$n(o)}o=!1}o&&(t=a[0])}}return a=bt(),a.memoizedState=a.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oh,lastRenderedState:t},a.queue=o,a=Qh.bind(null,Se,o),o.dispatch=a,o=Wc(!1),f=ru.bind(null,Se,!1,o.queue),o=bt(),c={state:t,dispatch:null,action:e,pending:null},o.queue=c,a=US.bind(null,Se,c,f,a),c.dispatch=a,o.memoizedState=e,[t,a,!1]}function Dh(e){var t=We();return Lh(t,He,e)}function Lh(e,t,a){if(t=Qc(e,t,Oh)[0],e=fl(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Dr(t)}catch(y){throw y===Ci?tl:y}else o=t;t=We();var c=t.queue,f=c.dispatch;return a!==t.memoizedState&&(Se.flags|=2048,Ri(9,{destroy:void 0},BS.bind(null,c,a),null)),[o,f,e]}function BS(e,t){e.action=t}function jh(e){var t=We(),a=He;if(a!==null)return Lh(t,a,e);We(),t=t.memoizedState,a=We();var o=a.queue.dispatch;return a.memoizedState=e,[t,o,!1]}function Ri(e,t,a,o){return e={tag:e,create:a,deps:o,inst:t,next:null},t=Se.updateQueue,t===null&&(t=cl(),Se.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,t.lastEffect=e),e}function kh(){return We().memoizedState}function dl(e,t,a,o){var c=bt();Se.flags|=e,c.memoizedState=Ri(1|t,{destroy:void 0},a,o===void 0?null:o)}function pl(e,t,a,o){var c=We();o=o===void 0?null:o;var f=c.memoizedState.inst;He!==null&&o!==null&&Fc(o,He.memoizedState.deps)?c.memoizedState=Ri(t,f,a,o):(Se.flags|=e,c.memoizedState=Ri(1|t,f,a,o))}function Ih(e,t){dl(8390656,8,e,t)}function eu(e,t){pl(2048,8,e,t)}function GS(e){Se.flags|=4;var t=Se.updateQueue;if(t===null)t=cl(),Se.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function zh(e){var t=We().memoizedState;return GS({ref:t,nextImpl:e}),function(){if((je&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function Ph(e,t){return pl(4,2,e,t)}function Hh(e,t){return pl(4,4,e,t)}function Uh(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bh(e,t,a){a=a!=null?a.concat([e]):null,pl(4,4,Uh.bind(null,t,e),a)}function tu(){}function Gh(e,t){var a=We();t=t===void 0?null:t;var o=a.memoizedState;return t!==null&&Fc(t,o[1])?o[0]:(a.memoizedState=[e,t],e)}function Vh(e,t){var a=We();t=t===void 0?null:t;var o=a.memoizedState;if(t!==null&&Fc(t,o[1]))return o[0];if(o=e(),Ba){Vn(!0);try{e()}finally{Vn(!1)}}return a.memoizedState=[o,t],o}function nu(e,t,a){return a===void 0||(Rn&1073741824)!==0&&(Re&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Fm(),Se.lanes|=e,aa|=e,a)}function Fh(e,t,a,o){return Mt(a,t)?a:Ei.current!==null?(e=nu(e,a,o),Mt(e,t)||(tt=!0),e):(Rn&42)===0||(Rn&1073741824)!==0&&(Re&261930)===0?(tt=!0,e.memoizedState=a):(e=Fm(),Se.lanes|=e,aa|=e,t)}function Kh(e,t,a,o,c){var f=K.p;K.p=f!==0&&8>f?f:8;var y=L.T,S={};L.T=S,ru(e,!1,t,a);try{var A=c(),I=L.S;if(I!==null&&I(S,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var F=zS(A,o);Lr(e,t,F,zt(e))}else Lr(e,t,o,zt(e))}catch($){Lr(e,t,{then:function(){},status:"rejected",reason:$},zt())}finally{K.p=f,y!==null&&S.types!==null&&(y.types=S.types),L.T=y}}function VS(){}function au(e,t,a,o){if(e.tag!==5)throw Error(l(476));var c=Yh(e).queue;Kh(e,c,t,z,a===null?VS:function(){return qh(e),a(o)})}function Yh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:z},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function qh(e){var t=Yh(e);t.next===null&&(t=e.alternate.memoizedState),Lr(e,t.next.queue,{},zt())}function iu(){return ct(Qr)}function $h(){return We().memoizedState}function Xh(){return We().memoizedState}function FS(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=zt();e=Zn(a);var o=Wn(t,e,a);o!==null&&(Rt(o,t,a),Ar(o,t,a)),t={cache:Lc()},e.payload=t;return}t=t.return}}function KS(e,t,a){var o=zt();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},hl(e)?Zh(t,a):(a=Cc(e,t,a,o),a!==null&&(Rt(a,e,o),Wh(a,t,o)))}function Qh(e,t,a){var o=zt();Lr(e,t,a,o)}function Lr(e,t,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(e))Zh(t,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var y=t.lastRenderedState,S=f(y,a);if(c.hasEagerState=!0,c.eagerState=S,Mt(S,y))return $o(e,t,c,0),Ve===null&&qo(),!1}catch{}if(a=Cc(e,t,c,o),a!==null)return Rt(a,e,o),Wh(a,t,o),!0}return!1}function ru(e,t,a,o){if(o={lane:2,revertLane:zu(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},hl(e)){if(t)throw Error(l(479))}else t=Cc(e,a,o,2),t!==null&&Rt(t,e,2)}function hl(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function Zh(e,t){wi=ll=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Wh(e,t,a){if((a&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,a|=o,t.lanes=a,ap(e,a)}}var jr={readContext:ct,use:ul,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};jr.useEffectEvent=Xe;var Jh={readContext:ct,use:ul,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:Ih,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,dl(4194308,4,Uh.bind(null,t,e),a)},useLayoutEffect:function(e,t){return dl(4194308,4,e,t)},useInsertionEffect:function(e,t){dl(4,2,e,t)},useMemo:function(e,t){var a=bt();t=t===void 0?null:t;var o=e();if(Ba){Vn(!0);try{e()}finally{Vn(!1)}}return a.memoizedState=[o,t],o},useReducer:function(e,t,a){var o=bt();if(a!==void 0){var c=a(t);if(Ba){Vn(!0);try{a(t)}finally{Vn(!1)}}}else c=t;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=KS.bind(null,Se,e),[o.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:function(e){e=Wc(e);var t=e.queue,a=Qh.bind(null,Se,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:tu,useDeferredValue:function(e,t){var a=bt();return nu(a,e,t)},useTransition:function(){var e=Wc(!1);return e=Kh.bind(null,Se,e.queue,!0,!1),bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var o=Se,c=bt();if(Oe){if(a===void 0)throw Error(l(407));a=a()}else{if(a=t(),Ve===null)throw Error(l(349));(Re&127)!==0||bh(o,t,a)}c.memoizedState=a;var f={value:a,getSnapshot:t};return c.queue=f,Ih(Ch.bind(null,o,f,e),[e]),o.flags|=2048,Ri(9,{destroy:void 0},Sh.bind(null,o,f,a,t),null),a},useId:function(){var e=bt(),t=Ve.identifierPrefix;if(Oe){var a=cn,o=sn;a=(o&~(1<<32-Ot(o)-1)).toString(32)+a,t="_"+t+"R_"+a,a=sl++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=PS++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:iu,useFormState:Mh,useActionState:Mh,useOptimistic:function(e){var t=bt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ru.bind(null,Se,!0,a),a.dispatch=t,[e,t]},useMemoCache:Xc,useCacheRefresh:function(){return bt().memoizedState=FS.bind(null,Se)},useEffectEvent:function(e){var t=bt(),a={impl:e};return t.memoizedState=a,function(){if((je&2)!==0)throw Error(l(440));return a.impl.apply(void 0,arguments)}}},ou={readContext:ct,use:ul,useCallback:Gh,useContext:ct,useEffect:eu,useImperativeHandle:Bh,useInsertionEffect:Ph,useLayoutEffect:Hh,useMemo:Vh,useReducer:fl,useRef:kh,useState:function(){return fl(An)},useDebugValue:tu,useDeferredValue:function(e,t){var a=We();return Fh(a,He.memoizedState,e,t)},useTransition:function(){var e=fl(An)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Dr(e),t]},useSyncExternalStore:xh,useId:$h,useHostTransitionStatus:iu,useFormState:Dh,useActionState:Dh,useOptimistic:function(e,t){var a=We();return wh(a,He,e,t)},useMemoCache:Xc,useCacheRefresh:Xh};ou.useEffectEvent=zh;var em={readContext:ct,use:ul,useCallback:Gh,useContext:ct,useEffect:eu,useImperativeHandle:Bh,useInsertionEffect:Ph,useLayoutEffect:Hh,useMemo:Vh,useReducer:Zc,useRef:kh,useState:function(){return Zc(An)},useDebugValue:tu,useDeferredValue:function(e,t){var a=We();return He===null?nu(a,e,t):Fh(a,He.memoizedState,e,t)},useTransition:function(){var e=Zc(An)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Dr(e),t]},useSyncExternalStore:xh,useId:$h,useHostTransitionStatus:iu,useFormState:jh,useActionState:jh,useOptimistic:function(e,t){var a=We();return He!==null?wh(a,He,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Xc,useCacheRefresh:Xh};em.useEffectEvent=zh;function lu(e,t,a,o){t=e.memoizedState,a=a(o,t),a=a==null?t:v({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var su={enqueueSetState:function(e,t,a){e=e._reactInternals;var o=zt(),c=Zn(o);c.payload=t,a!=null&&(c.callback=a),t=Wn(e,c,o),t!==null&&(Rt(t,e,o),Ar(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var o=zt(),c=Zn(o);c.tag=1,c.payload=t,a!=null&&(c.callback=a),t=Wn(e,c,o),t!==null&&(Rt(t,e,o),Ar(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=zt(),o=Zn(a);o.tag=2,t!=null&&(o.callback=t),t=Wn(e,o,a),t!==null&&(Rt(t,e,a),Ar(t,e,a))}};function tm(e,t,a,o,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):t.prototype&&t.prototype.isPureReactComponent?!br(a,o)||!br(c,f):!0}function nm(e,t,a,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,o),t.state!==e&&su.enqueueReplaceState(t,t.state,null)}function Ga(e,t){var a=t;if("ref"in t){a={};for(var o in t)o!=="ref"&&(a[o]=t[o])}if(e=e.defaultProps){a===t&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function am(e){Yo(e)}function im(e){console.error(e)}function rm(e){Yo(e)}function ml(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function om(e,t,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function cu(e,t,a){return a=Zn(a),a.tag=3,a.payload={element:null},a.callback=function(){ml(e,t)},a}function lm(e){return e=Zn(e),e.tag=3,e}function sm(e,t,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){om(t,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){om(t,a,o),typeof c!="function"&&(ia===null?ia=new Set([this]):ia.add(this));var S=o.stack;this.componentDidCatch(o.value,{componentStack:S!==null?S:""})})}function YS(e,t,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=a.alternate,t!==null&&xi(t,a,c,!0),a=Lt.current,a!==null){switch(a.tag){case 31:case 13:return $t===null?Rl():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===nl?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([o]):t.add(o),ju(e,o,c)),!1;case 22:return a.flags|=65536,o===nl?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([o]):a.add(o)),ju(e,o,c)),!1}throw Error(l(435,a.tag))}return ju(e,o,c),Rl(),!1}if(Oe)return t=Lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,o!==Ac&&(e=Error(l(422),{cause:o}),Tr(Ft(e,a)))):(o!==Ac&&(t=Error(l(423),{cause:o}),Tr(Ft(t,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Ft(o,a),c=cu(e.stateNode,o,c),Hc(e,c),Qe!==4&&(Qe=2)),!1;var f=Error(l(520),{cause:o});if(f=Ft(f,a),Gr===null?Gr=[f]:Gr.push(f),Qe!==4&&(Qe=2),t===null)return!0;o=Ft(o,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=cu(a.stateNode,o,e),Hc(a,e),!1;case 1:if(t=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ia===null||!ia.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=lm(c),sm(c,e,a,o),Hc(a,c),!1}a=a.return}while(a!==null);return!1}var uu=Error(l(461)),tt=!1;function ut(e,t,a,o){t.child=e===null?dh(t,null,a,o):Ua(t,e.child,a,o)}function cm(e,t,a,o,c){a=a.render;var f=t.ref;if("ref"in o){var y={};for(var S in o)S!=="ref"&&(y[S]=o[S])}else y=o;return Ia(t),o=Kc(e,t,a,y,f,c),S=Yc(),e!==null&&!tt?(qc(e,t,c),Nn(e,t,c)):(Oe&&S&&_c(t),t.flags|=1,ut(e,t,o,c),t.child)}function um(e,t,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!Tc(f)&&f.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=f,fm(e,t,f,o,c)):(e=Qo(a.type,null,o,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!yu(e,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:br,a(y,o)&&e.ref===t.ref)return Nn(e,t,c)}return t.flags|=1,e=Tn(f,o),e.ref=t.ref,e.return=t,t.child=e}function fm(e,t,a,o,c){if(e!==null){var f=e.memoizedProps;if(br(f,o)&&e.ref===t.ref)if(tt=!1,t.pendingProps=o=f,yu(e,c))(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,Nn(e,t,c)}return fu(e,t,a,o,c)}function dm(e,t,a,o){var c=o.children,f=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=t.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,t.child=null;return pm(e,t,f,a,o)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&el(t,f!==null?f.cachePool:null),f!==null?mh(t,f):Bc(),gh(t);else return o=t.lanes=536870912,pm(e,t,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(el(t,f.cachePool),mh(t,f),ea(),t.memoizedState=null):(e!==null&&el(t,null),Bc(),ea());return ut(e,t,c,a),t.child}function kr(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pm(e,t,a,o,c){var f=kc();return f=f===null?null:{parent:Je._currentValue,pool:f},t.memoizedState={baseLanes:a,cachePool:f},e!==null&&el(t,null),Bc(),gh(t),e!==null&&xi(e,t,o,!0),t.childLanes=c,null}function gl(e,t){return t=yl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hm(e,t,a){return Ua(t,e.child,null,a),e=gl(t,t.pendingProps),e.flags|=2,jt(t),t.memoizedState=null,e}function qS(e,t,a){var o=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Oe){if(o.mode==="hidden")return e=gl(t,o),t.lanes=536870912,kr(null,e);if(Vc(t),(e=Ke)?(e=_g(e,qt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:sn,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},a=Zp(e),a.return=t,t.child=a,st=t,Ke=null)):e=null,e===null)throw $n(t);return t.lanes=536870912,null}return gl(t,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(Vc(t),c)if(t.flags&256)t.flags&=-257,t=hm(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(tt||xi(e,t,a,!1),c=(a&e.childLanes)!==0,tt||c){if(o=Ve,o!==null&&(y=ip(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,Da(e,y),Rt(o,e,y),uu;Rl(),t=hm(e,t,a)}else e=f.treeContext,Ke=Xt(y.nextSibling),st=t,Oe=!0,qn=null,qt=!1,e!==null&&eh(t,e),t=gl(t,o),t.flags|=4096;return t}return e=Tn(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function fu(e,t,a,o,c){return Ia(t),a=Kc(e,t,a,o,void 0,c),o=Yc(),e!==null&&!tt?(qc(e,t,c),Nn(e,t,c)):(Oe&&o&&_c(t),t.flags|=1,ut(e,t,a,c),t.child)}function mm(e,t,a,o,c,f){return Ia(t),t.updateQueue=null,a=yh(t,o,a,c),vh(e),o=Yc(),e!==null&&!tt?(qc(e,t,f),Nn(e,t,f)):(Oe&&o&&_c(t),t.flags|=1,ut(e,t,a,f),t.child)}function gm(e,t,a,o,c){if(Ia(t),t.stateNode===null){var f=mi,y=a.contextType;typeof y=="object"&&y!==null&&(f=ct(y)),f=new a(o,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=su,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=o,f.state=t.memoizedState,f.refs={},zc(t),y=a.contextType,f.context=typeof y=="object"&&y!==null?ct(y):mi,f.state=t.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(lu(t,a,y,o),f.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&su.enqueueReplaceState(f,f.state,null),Or(t,o,f,c),Nr(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){f=t.stateNode;var S=t.memoizedProps,A=Ga(a,S);f.props=A;var I=f.context,F=a.contextType;y=mi,typeof F=="object"&&F!==null&&(y=ct(F));var $=a.getDerivedStateFromProps;F=typeof $=="function"||typeof f.getSnapshotBeforeUpdate=="function",S=t.pendingProps!==S,F||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S||I!==y)&&nm(t,f,o,y),Qn=!1;var P=t.memoizedState;f.state=P,Or(t,o,f,c),Nr(),I=t.memoizedState,S||P!==I||Qn?(typeof $=="function"&&(lu(t,a,$,o),I=t.memoizedState),(A=Qn||tm(t,a,A,o,P,I,y))?(F||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=I),f.props=o,f.state=I,f.context=y,o=A):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{f=t.stateNode,Pc(e,t),y=t.memoizedProps,F=Ga(a,y),f.props=F,$=t.pendingProps,P=f.context,I=a.contextType,A=mi,typeof I=="object"&&I!==null&&(A=ct(I)),S=a.getDerivedStateFromProps,(I=typeof S=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==$||P!==A)&&nm(t,f,o,A),Qn=!1,P=t.memoizedState,f.state=P,Or(t,o,f,c),Nr();var B=t.memoizedState;y!==$||P!==B||Qn||e!==null&&e.dependencies!==null&&Wo(e.dependencies)?(typeof S=="function"&&(lu(t,a,S,o),B=t.memoizedState),(F=Qn||tm(t,a,F,o,P,B,A)||e!==null&&e.dependencies!==null&&Wo(e.dependencies))?(I||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,B,A),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,B,A)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=B),f.props=o,f.state=B,f.context=A,o=F):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),o=!1)}return f=o,vl(e,t),o=(t.flags&128)!==0,f||o?(f=t.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&o?(t.child=Ua(t,e.child,null,c),t.child=Ua(t,null,a,c)):ut(e,t,a,c),t.memoizedState=f.state,e=t.child):e=Nn(e,t,c),e}function vm(e,t,a,o){return ja(),t.flags|=256,ut(e,t,a,o),t.child}var du={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pu(e){return{baseLanes:e,cachePool:oh()}}function hu(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=It),e}function ym(e,t,a){var o=t.pendingProps,c=!1,f=(t.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),y&&(c=!0,t.flags&=-129),y=(t.flags&32)!==0,t.flags&=-33,e===null){if(Oe){if(c?Jn(t):ea(),(e=Ke)?(e=_g(e,qt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Yn!==null?{id:sn,overflow:cn}:null,retryLane:536870912,hydrationErrors:null},a=Zp(e),a.return=t,t.child=a,st=t,Ke=null)):e=null,e===null)throw $n(t);return Qu(e)?t.lanes=32:t.lanes=536870912,null}var S=o.children;return o=o.fallback,c?(ea(),c=t.mode,S=yl({mode:"hidden",children:S},c),o=La(o,c,a,null),S.return=t,o.return=t,S.sibling=o,t.child=S,o=t.child,o.memoizedState=pu(a),o.childLanes=hu(e,y,a),t.memoizedState=du,kr(null,o)):(Jn(t),mu(t,S))}var A=e.memoizedState;if(A!==null&&(S=A.dehydrated,S!==null)){if(f)t.flags&256?(Jn(t),t.flags&=-257,t=gu(e,t,a)):t.memoizedState!==null?(ea(),t.child=e.child,t.flags|=128,t=null):(ea(),S=o.fallback,c=t.mode,o=yl({mode:"visible",children:o.children},c),S=La(S,c,a,null),S.flags|=2,o.return=t,S.return=t,o.sibling=S,t.child=o,Ua(t,e.child,null,a),o=t.child,o.memoizedState=pu(a),o.childLanes=hu(e,y,a),t.memoizedState=du,t=kr(null,o));else if(Jn(t),Qu(S)){if(y=S.nextSibling&&S.nextSibling.dataset,y)var I=y.dgst;y=I,o=Error(l(419)),o.stack="",o.digest=y,Tr({value:o,source:null,stack:null}),t=gu(e,t,a)}else if(tt||xi(e,t,a,!1),y=(a&e.childLanes)!==0,tt||y){if(y=Ve,y!==null&&(o=ip(y,a),o!==0&&o!==A.retryLane))throw A.retryLane=o,Da(e,o),Rt(y,e,o),uu;Xu(S)||Rl(),t=gu(e,t,a)}else Xu(S)?(t.flags|=192,t.child=e.child,t=null):(e=A.treeContext,Ke=Xt(S.nextSibling),st=t,Oe=!0,qn=null,qt=!1,e!==null&&eh(t,e),t=mu(t,o.children),t.flags|=4096);return t}return c?(ea(),S=o.fallback,c=t.mode,A=e.child,I=A.sibling,o=Tn(A,{mode:"hidden",children:o.children}),o.subtreeFlags=A.subtreeFlags&65011712,I!==null?S=Tn(I,S):(S=La(S,c,a,null),S.flags|=2),S.return=t,o.return=t,o.sibling=S,t.child=o,kr(null,o),o=t.child,S=e.child.memoizedState,S===null?S=pu(a):(c=S.cachePool,c!==null?(A=Je._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=oh(),S={baseLanes:S.baseLanes|a,cachePool:c}),o.memoizedState=S,o.childLanes=hu(e,y,a),t.memoizedState=du,kr(e.child,o)):(Jn(t),a=e.child,e=a.sibling,a=Tn(a,{mode:"visible",children:o.children}),a.return=t,a.sibling=null,e!==null&&(y=t.deletions,y===null?(t.deletions=[e],t.flags|=16):y.push(e)),t.child=a,t.memoizedState=null,a)}function mu(e,t){return t=yl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function yl(e,t){return e=Dt(22,e,null,t),e.lanes=0,e}function gu(e,t,a){return Ua(t,e.child,null,a),e=mu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xm(e,t,a){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Mc(e.return,t,a)}function vu(e,t,a,o,c,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(y.isBackwards=t,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=c,y.treeForkCount=f)}function bm(e,t,a){var o=t.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var y=Ze.current,S=(y&2)!==0;if(S?(y=y&1|2,t.flags|=128):y&=1,Q(Ze,y),ut(e,t,o,a),o=Oe?Cr:0,!S&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xm(e,a,t);else if(e.tag===19)xm(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=t.child,c=null;a!==null;)e=a.alternate,e!==null&&ol(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=t.child,t.child=null):(c=a.sibling,a.sibling=null),vu(t,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&ol(e)===null){t.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}vu(t,!0,a,null,f,o);break;case"together":vu(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function Nn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),aa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(xi(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,a=Tn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Tn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function yu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Wo(e)))}function $S(e,t,a){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),Xn(t,Je,e.memoizedState.cache),ja();break;case 27:case 5:_e(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:Xn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Vc(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Jn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?ym(e,t,a):(Jn(t),e=Nn(e,t,a),e!==null?e.sibling:null);Jn(t);break;case 19:var c=(e.flags&128)!==0;if(o=(a&t.childLanes)!==0,o||(xi(e,t,a,!1),o=(a&t.childLanes)!==0),c){if(o)return bm(e,t,a);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Q(Ze,Ze.current),o)break;return null;case 22:return t.lanes=0,dm(e,t,a,t.pendingProps);case 24:Xn(t,Je,e.memoizedState.cache)}return Nn(e,t,a)}function Sm(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)tt=!0;else{if(!yu(e,a)&&(t.flags&128)===0)return tt=!1,$S(e,t,a);tt=(e.flags&131072)!==0}else tt=!1,Oe&&(t.flags&1048576)!==0&&Jp(t,Cr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e=="function")Tc(e)?(o=Ga(e,o),t.tag=1,t=gm(null,t,e,o,a)):(t.tag=0,t=fu(null,t,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===H){t.tag=11,t=cm(null,t,e,o,a);break e}else if(c===U){t.tag=14,t=um(null,t,e,o,a);break e}}throw t=ie(e)||e,Error(l(306,t,""))}}return t;case 0:return fu(e,t,t.type,t.pendingProps,a);case 1:return o=t.type,c=Ga(o,t.pendingProps),gm(e,t,o,c,a);case 3:e:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(l(387));o=t.pendingProps;var f=t.memoizedState;c=f.element,Pc(e,t),Or(t,o,null,a);var y=t.memoizedState;if(o=y.cache,Xn(t,Je,o),o!==f.cache&&Dc(t,[Je],a,!0),Nr(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=vm(e,t,o,a);break e}else if(o!==c){c=Ft(Error(l(424)),t),Tr(c),t=vm(e,t,o,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ke=Xt(e.firstChild),st=t,Oe=!0,qn=null,qt=!0,a=dh(t,null,o,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ja(),o===c){t=Nn(e,t,a);break e}ut(e,t,o,a)}t=t.child}return t;case 26:return vl(e,t),e===null?(a=Dg(t.type,null,t.pendingProps,null))?t.memoizedState=a:Oe||(a=t.type,e=t.pendingProps,o=jl(me.current).createElement(a),o[lt]=t,o[St]=e,ft(o,a,e),rt(o),t.stateNode=o):t.memoizedState=Dg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _e(t),e===null&&Oe&&(o=t.stateNode=Ng(t.type,t.pendingProps,me.current),st=t,qt=!0,c=Ke,sa(t.type)?(Zu=c,Ke=Xt(o.firstChild)):Ke=c),ut(e,t,t.pendingProps.children,a),vl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Oe&&((c=o=Ke)&&(o=E1(o,t.type,t.pendingProps,qt),o!==null?(t.stateNode=o,st=t,Ke=Xt(o.firstChild),qt=!1,c=!0):c=!1),c||$n(t)),_e(t),c=t.type,f=t.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,Yu(c,f)?o=null:y!==null&&Yu(c,y)&&(t.flags|=32),t.memoizedState!==null&&(c=Kc(e,t,HS,null,null,a),Qr._currentValue=c),vl(e,t),ut(e,t,o,a),t.child;case 6:return e===null&&Oe&&((e=a=Ke)&&(a=w1(a,t.pendingProps,qt),a!==null?(t.stateNode=a,st=t,Ke=null,e=!0):e=!1),e||$n(t)),null;case 13:return ym(e,t,a);case 4:return ye(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Ua(t,null,o,a):ut(e,t,o,a),t.child;case 11:return cm(e,t,t.type,t.pendingProps,a);case 7:return ut(e,t,t.pendingProps,a),t.child;case 8:return ut(e,t,t.pendingProps.children,a),t.child;case 12:return ut(e,t,t.pendingProps.children,a),t.child;case 10:return o=t.pendingProps,Xn(t,t.type,o.value),ut(e,t,o.children,a),t.child;case 9:return c=t.type._context,o=t.pendingProps.children,Ia(t),c=ct(c),o=o(c),t.flags|=1,ut(e,t,o,a),t.child;case 14:return um(e,t,t.type,t.pendingProps,a);case 15:return fm(e,t,t.type,t.pendingProps,a);case 19:return bm(e,t,a);case 31:return qS(e,t,a);case 22:return dm(e,t,a,t.pendingProps);case 24:return Ia(t),o=ct(Je),e===null?(c=kc(),c===null&&(c=Ve,f=Lc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),t.memoizedState={parent:o,cache:c},zc(t),Xn(t,Je,c)):((e.lanes&a)!==0&&(Pc(e,t),Or(t,null,null,a),Nr()),c=e.memoizedState,f=t.memoizedState,c.parent!==o?(c={parent:o,cache:o},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),Xn(t,Je,o)):(o=f.cache,Xn(t,Je,o),o!==c.cache&&Dc(t,[Je],a,!0))),ut(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function On(e){e.flags|=4}function xu(e,t,a,o,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if($m())e.flags|=8192;else throw Ha=nl,Ic}else e.flags&=-16777217}function Cm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zg(t))if($m())e.flags|=8192;else throw Ha=nl,Ic}function xl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?tp():536870912,e.lanes|=t,Mi|=t)}function Ir(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(t)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,t}function XS(e,t,a){var o=t.pendingProps;switch(Rc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return Ye(t),null;case 3:return a=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),_n(Je),be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(yi(t)?On(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nc())),Ye(t),null;case 26:var c=t.type,f=t.memoizedState;return e===null?(On(t),f!==null?(Ye(t),Cm(t,f)):(Ye(t),xu(t,c,null,o,a))):f?f!==e.memoizedState?(On(t),Ye(t),Cm(t,f)):(Ye(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&On(t),Ye(t),xu(t,c,e,o,a)),null;case 27:if(Me(t),a=me.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&On(t);else{if(!o){if(t.stateNode===null)throw Error(l(166));return Ye(t),null}e=ee.current,yi(t)?th(t):(e=Ng(c,o,a),t.stateNode=e,On(t))}return Ye(t),null;case 5:if(Me(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&On(t);else{if(!o){if(t.stateNode===null)throw Error(l(166));return Ye(t),null}if(f=ee.current,yi(t))th(t);else{var y=jl(me.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(c,{is:o.is}):y.createElement(c)}}f[lt]=t,f[St]=o;e:for(y=t.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}t.stateNode=f;e:switch(ft(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&On(t)}}return Ye(t),xu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&On(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(l(166));if(e=me.current,yi(t)){if(e=t.stateNode,a=t.memoizedProps,o=null,c=st,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[lt]=t,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||yg(e.nodeValue,a)),e||$n(t,!0)}else e=jl(e).createTextNode(o),e[lt]=t,t.stateNode=e}return Ye(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(o=yi(t),a!==null){if(e===null){if(!o)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[lt]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),e=!1}else a=Nc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(jt(t),t):(jt(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Ye(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=yi(t),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(l(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[lt]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),c=!1}else c=Nc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(jt(t),t):(jt(t),null)}return jt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=t.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),xl(t,t.updateQueue),Ye(t),null);case 4:return be(),e===null&&Bu(t.stateNode.containerInfo),Ye(t),null;case 10:return _n(t.type),Ye(t),null;case 19:if(V(Ze),o=t.memoizedState,o===null)return Ye(t),null;if(c=(t.flags&128)!==0,f=o.rendering,f===null)if(c)Ir(o,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=ol(e),f!==null){for(t.flags|=128,Ir(o,!1),e=f.updateQueue,t.updateQueue=e,xl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Qp(a,e),a=a.sibling;return Q(Ze,Ze.current&1|2),Oe&&En(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&At()>El&&(t.flags|=128,c=!0,Ir(o,!1),t.lanes=4194304)}else{if(!c)if(e=ol(f),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,xl(t,e),Ir(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Oe)return Ye(t),null}else 2*At()-o.renderingStartTime>El&&a!==536870912&&(t.flags|=128,c=!0,Ir(o,!1),t.lanes=4194304);o.isBackwards?(f.sibling=t.child,t.child=f):(e=o.last,e!==null?e.sibling=f:t.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=At(),e.sibling=null,a=Ze.current,Q(Ze,c?a&1|2:a&1),Oe&&En(t,o.treeForkCount),e):(Ye(t),null);case 22:case 23:return jt(t),Gc(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(a&536870912)!==0&&(t.flags&128)===0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),a=t.updateQueue,a!==null&&xl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==a&&(t.flags|=2048),e!==null&&V(za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),_n(Je),Ye(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function QS(e,t){switch(Rc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(Je),be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Me(t),null;case 31:if(t.memoizedState!==null){if(jt(t),t.alternate===null)throw Error(l(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(jt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Ze),null;case 4:return be(),null;case 10:return _n(t.type),null;case 22:case 23:return jt(t),Gc(),e!==null&&V(za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _n(Je),null;case 25:return null;default:return null}}function Tm(e,t){switch(Rc(t),t.tag){case 3:_n(Je),be();break;case 26:case 27:case 5:Me(t);break;case 4:be();break;case 31:t.memoizedState!==null&&jt(t);break;case 13:jt(t);break;case 19:V(Ze);break;case 10:_n(t.type);break;case 22:case 23:jt(t),Gc(),e!==null&&V(za);break;case 24:_n(Je)}}function zr(e,t){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==c)}}catch(S){Pe(t,t.return,S)}}function ta(e,t,a){try{var o=t.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var y=o.inst,S=y.destroy;if(S!==void 0){y.destroy=void 0,c=t;var A=a,I=S;try{I()}catch(F){Pe(c,A,F)}}}o=o.next}while(o!==f)}}catch(F){Pe(t,t.return,F)}}function Em(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{hh(t,a)}catch(o){Pe(e,e.return,o)}}}function wm(e,t,a){a.props=Ga(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Pe(e,t,o)}}function Pr(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Pe(e,t,c)}}function un(e,t){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Pe(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(e,t,c)}else a.current=null}function _m(e){var t=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Pe(e,e.return,c)}}function bu(e,t,a){try{var o=e.stateNode;y1(o,e.type,a,t),o[St]=t}catch(c){Pe(e,e.return,c)}}function Rm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sa(e.type)||e.tag===4}function Su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cu(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Sn));else if(o!==4&&(o===27&&sa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Cu(e,t,a),e=e.sibling;e!==null;)Cu(e,t,a),e=e.sibling}function bl(e,t,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(o!==4&&(o===27&&sa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(bl(e,t,a),e=e.sibling;e!==null;)bl(e,t,a),e=e.sibling}function Am(e){var t=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);ft(t,o,a),t[lt]=e,t[St]=a}catch(f){Pe(e,e.return,f)}}var Mn=!1,nt=!1,Tu=!1,Nm=typeof WeakSet=="function"?WeakSet:Set,ot=null;function ZS(e,t){if(e=e.containerInfo,Fu=Bl,e=Bp(e),gc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var y=0,S=-1,A=-1,I=0,F=0,$=e,P=null;t:for(;;){for(var B;$!==a||c!==0&&$.nodeType!==3||(S=y+c),$!==f||o!==0&&$.nodeType!==3||(A=y+o),$.nodeType===3&&(y+=$.nodeValue.length),(B=$.firstChild)!==null;)P=$,$=B;for(;;){if($===e)break t;if(P===a&&++I===c&&(S=y),P===f&&++F===o&&(A=y),(B=$.nextSibling)!==null)break;$=P,P=$.parentNode}$=B}a=S===-1||A===-1?null:{start:S,end:A}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ku={focusedElem:e,selectionRange:a},Bl=!1,ot=t;ot!==null;)if(t=ot,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ot=e;else for(;ot!==null;){switch(t=ot,f=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=t,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var oe=Ga(a.type,c);e=o.getSnapshotBeforeUpdate(oe,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ge){Pe(a,a.return,ge)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)$u(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$u(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,ot=e;break}ot=t.return}}function Om(e,t,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ln(e,a),o&4&&zr(5,a);break;case 1:if(Ln(e,a),o&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(y){Pe(a,a.return,y)}else{var c=Ga(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Pe(a,a.return,y)}}o&64&&Em(a),o&512&&Pr(a,a.return);break;case 3:if(Ln(e,a),o&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{hh(e,t)}catch(y){Pe(a,a.return,y)}}break;case 27:t===null&&o&4&&Am(a);case 26:case 5:Ln(e,a),t===null&&o&4&&_m(a),o&512&&Pr(a,a.return);break;case 12:Ln(e,a);break;case 31:Ln(e,a),o&4&&Lm(e,a);break;case 13:Ln(e,a),o&4&&jm(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=o1.bind(null,a),_1(e,a))));break;case 22:if(o=a.memoizedState!==null||Mn,!o){t=t!==null&&t.memoizedState!==null||nt,c=Mn;var f=nt;Mn=o,(nt=t)&&!f?jn(e,a,(a.subtreeFlags&8772)!==0):Ln(e,a),Mn=c,nt=f}break;case 30:break;default:Ln(e,a)}}function Mm(e){var t=e.alternate;t!==null&&(e.alternate=null,Mm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Js(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,Tt=!1;function Dn(e,t,a){for(a=a.child;a!==null;)Dm(e,t,a),a=a.sibling}function Dm(e,t,a){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(sr,a)}catch{}switch(a.tag){case 26:nt||un(a,t),Dn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nt||un(a,t);var o=qe,c=Tt;sa(a.type)&&(qe=a.stateNode,Tt=!1),Dn(e,t,a),qr(a.stateNode),qe=o,Tt=c;break;case 5:nt||un(a,t);case 6:if(o=qe,c=Tt,qe=null,Dn(e,t,a),qe=o,Tt=c,qe!==null)if(Tt)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){Pe(a,t,f)}else try{qe.removeChild(a.stateNode)}catch(f){Pe(a,t,f)}break;case 18:qe!==null&&(Tt?(e=qe,Eg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Hi(e)):Eg(qe,a.stateNode));break;case 4:o=qe,c=Tt,qe=a.stateNode.containerInfo,Tt=!0,Dn(e,t,a),qe=o,Tt=c;break;case 0:case 11:case 14:case 15:ta(2,a,t),nt||ta(4,a,t),Dn(e,t,a);break;case 1:nt||(un(a,t),o=a.stateNode,typeof o.componentWillUnmount=="function"&&wm(a,t,o)),Dn(e,t,a);break;case 21:Dn(e,t,a);break;case 22:nt=(o=nt)||a.memoizedState!==null,Dn(e,t,a),nt=o;break;default:Dn(e,t,a)}}function Lm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hi(e)}catch(a){Pe(t,t.return,a)}}}function jm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hi(e)}catch(a){Pe(t,t.return,a)}}function WS(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Nm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Nm),t;default:throw Error(l(435,e.tag))}}function Sl(e,t){var a=WS(e);t.forEach(function(o){if(!a.has(o)){a.add(o);var c=l1.bind(null,e,o);o.then(c,c)}})}function Et(e,t){var a=t.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,y=t,S=y;e:for(;S!==null;){switch(S.tag){case 27:if(sa(S.type)){qe=S.stateNode,Tt=!1;break e}break;case 5:qe=S.stateNode,Tt=!1;break e;case 3:case 4:qe=S.stateNode.containerInfo,Tt=!0;break e}S=S.return}if(qe===null)throw Error(l(160));Dm(f,y,c),qe=null,Tt=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)km(t,e),t=t.sibling}var Jt=null;function km(e,t){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Et(t,e),wt(e),o&4&&(ta(3,e,e.return),zr(3,e),ta(5,e,e.return));break;case 1:Et(t,e),wt(e),o&512&&(nt||a===null||un(a,a.return)),o&64&&Mn&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Jt;if(Et(t,e),wt(e),o&512&&(nt||a===null||un(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[fr]||f[lt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),ft(f,o,a),f[lt]=e,rt(f),o=f;break e;case"link":var y=kg("link","href",c).get(o+(a.href||""));if(y){for(var S=0;S<y.length;S++)if(f=y[S],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(S,1);break t}}f=c.createElement(o),ft(f,o,a),c.head.appendChild(f);break;case"meta":if(y=kg("meta","content",c).get(o+(a.content||""))){for(S=0;S<y.length;S++)if(f=y[S],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(S,1);break t}}f=c.createElement(o),ft(f,o,a),c.head.appendChild(f);break;default:throw Error(l(468,o))}f[lt]=e,rt(f),o=f}e.stateNode=o}else Ig(c,e.type,e.stateNode);else e.stateNode=jg(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Ig(c,e.type,e.stateNode):jg(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&bu(e,e.memoizedProps,a.memoizedProps)}break;case 27:Et(t,e),wt(e),o&512&&(nt||a===null||un(a,a.return)),a!==null&&o&4&&bu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Et(t,e),wt(e),o&512&&(nt||a===null||un(a,a.return)),e.flags&32){c=e.stateNode;try{si(c,"")}catch(oe){Pe(e,e.return,oe)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,bu(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Tu=!0);break;case 6:if(Et(t,e),wt(e),o&4){if(e.stateNode===null)throw Error(l(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(oe){Pe(e,e.return,oe)}}break;case 3:if(zl=null,c=Jt,Jt=kl(t.containerInfo),Et(t,e),Jt=c,wt(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Hi(t.containerInfo)}catch(oe){Pe(e,e.return,oe)}Tu&&(Tu=!1,Im(e));break;case 4:o=Jt,Jt=kl(e.stateNode.containerInfo),Et(t,e),wt(e),Jt=o;break;case 12:Et(t,e),wt(e);break;case 31:Et(t,e),wt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Sl(e,o)));break;case 13:Et(t,e),wt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Tl=At()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Sl(e,o)));break;case 22:c=e.memoizedState!==null;var A=a!==null&&a.memoizedState!==null,I=Mn,F=nt;if(Mn=I||c,nt=F||A,Et(t,e),nt=F,Mn=I,wt(e),o&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(a===null||A||Mn||nt||Va(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){A=a=t;try{if(f=A.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{S=A.stateNode;var $=A.memoizedProps.style,P=$!=null&&$.hasOwnProperty("display")?$.display:null;S.style.display=P==null||typeof P=="boolean"?"":(""+P).trim()}}catch(oe){Pe(A,A.return,oe)}}}else if(t.tag===6){if(a===null){A=t;try{A.stateNode.nodeValue=c?"":A.memoizedProps}catch(oe){Pe(A,A.return,oe)}}}else if(t.tag===18){if(a===null){A=t;try{var B=A.stateNode;c?wg(B,!0):wg(A.stateNode,!1)}catch(oe){Pe(A,A.return,oe)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Sl(e,a))));break;case 19:Et(t,e),wt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Sl(e,o)));break;case 30:break;case 21:break;default:Et(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{for(var a,o=e.return;o!==null;){if(Rm(o)){a=o;break}o=o.return}if(a==null)throw Error(l(160));switch(a.tag){case 27:var c=a.stateNode,f=Su(e);bl(e,f,c);break;case 5:var y=a.stateNode;a.flags&32&&(si(y,""),a.flags&=-33);var S=Su(e);bl(e,S,y);break;case 3:case 4:var A=a.stateNode.containerInfo,I=Su(e);Cu(e,I,A);break;default:throw Error(l(161))}}catch(F){Pe(e,e.return,F)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Im(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Im(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ln(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Om(e,t.alternate,t),t=t.sibling}function Va(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ta(4,t,t.return),Va(t);break;case 1:un(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&wm(t,t.return,a),Va(t);break;case 27:qr(t.stateNode);case 26:case 5:un(t,t.return),Va(t);break;case 22:t.memoizedState===null&&Va(t);break;case 30:Va(t);break;default:Va(t)}e=e.sibling}}function jn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,c=e,f=t,y=f.flags;switch(f.tag){case 0:case 11:case 15:jn(c,f,a),zr(4,f);break;case 1:if(jn(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(I){Pe(o,o.return,I)}if(o=f,c=o.updateQueue,c!==null){var S=o.stateNode;try{var A=c.shared.hiddenCallbacks;if(A!==null)for(c.shared.hiddenCallbacks=null,c=0;c<A.length;c++)ph(A[c],S)}catch(I){Pe(o,o.return,I)}}a&&y&64&&Em(f),Pr(f,f.return);break;case 27:Am(f);case 26:case 5:jn(c,f,a),a&&o===null&&y&4&&_m(f),Pr(f,f.return);break;case 12:jn(c,f,a);break;case 31:jn(c,f,a),a&&y&4&&Lm(c,f);break;case 13:jn(c,f,a),a&&y&4&&jm(c,f);break;case 22:f.memoizedState===null&&jn(c,f,a),Pr(f,f.return);break;case 30:break;default:jn(c,f,a)}t=t.sibling}}function Eu(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Er(a))}function wu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Er(e))}function en(e,t,a,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zm(e,t,a,o),t=t.sibling}function zm(e,t,a,o){var c=t.flags;switch(t.tag){case 0:case 11:case 15:en(e,t,a,o),c&2048&&zr(9,t);break;case 1:en(e,t,a,o);break;case 3:en(e,t,a,o),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Er(e)));break;case 12:if(c&2048){en(e,t,a,o),e=t.stateNode;try{var f=t.memoizedProps,y=f.id,S=f.onPostCommit;typeof S=="function"&&S(y,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){Pe(t,t.return,A)}}else en(e,t,a,o);break;case 31:en(e,t,a,o);break;case 13:en(e,t,a,o);break;case 23:break;case 22:f=t.stateNode,y=t.alternate,t.memoizedState!==null?f._visibility&2?en(e,t,a,o):Hr(e,t):f._visibility&2?en(e,t,a,o):(f._visibility|=2,Ai(e,t,a,o,(t.subtreeFlags&10256)!==0||!1)),c&2048&&Eu(y,t);break;case 24:en(e,t,a,o),c&2048&&wu(t.alternate,t);break;default:en(e,t,a,o)}}function Ai(e,t,a,o,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var f=e,y=t,S=a,A=o,I=y.flags;switch(y.tag){case 0:case 11:case 15:Ai(f,y,S,A,c),zr(8,y);break;case 23:break;case 22:var F=y.stateNode;y.memoizedState!==null?F._visibility&2?Ai(f,y,S,A,c):Hr(f,y):(F._visibility|=2,Ai(f,y,S,A,c)),c&&I&2048&&Eu(y.alternate,y);break;case 24:Ai(f,y,S,A,c),c&&I&2048&&wu(y.alternate,y);break;default:Ai(f,y,S,A,c)}t=t.sibling}}function Hr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,o=t,c=o.flags;switch(o.tag){case 22:Hr(a,o),c&2048&&Eu(o.alternate,o);break;case 24:Hr(a,o),c&2048&&wu(o.alternate,o);break;default:Hr(a,o)}t=t.sibling}}var Ur=8192;function Ni(e,t,a){if(e.subtreeFlags&Ur)for(e=e.child;e!==null;)Pm(e,t,a),e=e.sibling}function Pm(e,t,a){switch(e.tag){case 26:Ni(e,t,a),e.flags&Ur&&e.memoizedState!==null&&P1(a,Jt,e.memoizedState,e.memoizedProps);break;case 5:Ni(e,t,a);break;case 3:case 4:var o=Jt;Jt=kl(e.stateNode.containerInfo),Ni(e,t,a),Jt=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Ur,Ur=16777216,Ni(e,t,a),Ur=o):Ni(e,t,a));break;default:Ni(e,t,a)}}function Hm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Br(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];ot=o,Bm(o,e)}Hm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Um(e),e=e.sibling}function Um(e){switch(e.tag){case 0:case 11:case 15:Br(e),e.flags&2048&&ta(9,e,e.return);break;case 3:Br(e);break;case 12:Br(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Cl(e)):Br(e);break;default:Br(e)}}function Cl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];ot=o,Bm(o,e)}Hm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ta(8,t,t.return),Cl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Cl(t));break;default:Cl(t)}e=e.sibling}}function Bm(e,t){for(;ot!==null;){var a=ot;switch(a.tag){case 0:case 11:case 15:ta(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Er(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,ot=o;else e:for(a=e;ot!==null;){o=ot;var c=o.sibling,f=o.return;if(Mm(o),o===a){ot=null;break e}if(c!==null){c.return=f,ot=c;break e}ot=f}}}var JS={getCacheForType:function(e){var t=ct(Je),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return ct(Je).controller.signal}},e1=typeof WeakMap=="function"?WeakMap:Map,je=0,Ve=null,Ee=null,Re=0,ze=0,kt=null,na=!1,Oi=!1,_u=!1,kn=0,Qe=0,aa=0,Fa=0,Ru=0,It=0,Mi=0,Gr=null,_t=null,Au=!1,Tl=0,Gm=0,El=1/0,wl=null,ia=null,at=0,ra=null,Di=null,In=0,Nu=0,Ou=null,Vm=null,Vr=0,Mu=null;function zt(){return(je&2)!==0&&Re!==0?Re&-Re:L.T!==null?zu():rp()}function Fm(){if(It===0)if((Re&536870912)===0||Oe){var e=Lo;Lo<<=1,(Lo&3932160)===0&&(Lo=262144),It=e}else It=536870912;return e=Lt.current,e!==null&&(e.flags|=32),It}function Rt(e,t,a){(e===Ve&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(Li(e,0),oa(e,Re,It,!1)),ur(e,a),((je&2)===0||e!==Ve)&&(e===Ve&&((je&2)===0&&(Fa|=a),Qe===4&&oa(e,Re,It,!1)),fn(e))}function Km(e,t,a){if((je&6)!==0)throw Error(l(327));var o=!a&&(t&127)===0&&(t&e.expiredLanes)===0||cr(e,t),c=o?a1(e,t):Lu(e,t,!0),f=o;do{if(c===0){Oi&&!o&&oa(e,t,0,!1);break}else{if(a=e.current.alternate,f&&!t1(a)){c=Lu(e,t,!1),f=!1;continue}if(c===2){if(f=t,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){t=y;e:{var S=e;c=Gr;var A=S.current.memoizedState.isDehydrated;if(A&&(Li(S,y).flags|=256),y=Lu(S,y,!1),y!==2){if(_u&&!A){S.errorRecoveryDisabledLanes|=f,Fa|=f,c=4;break e}f=_t,_t=c,f!==null&&(_t===null?_t=f:_t.push.apply(_t,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){Li(e,0),oa(e,t,0,!0);break}e:{switch(o=e,f=c,f){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:oa(o,t,It,!na);break e;case 2:_t=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(c=Tl+300-At(),10<c)){if(oa(o,t,It,!na),ko(o,0,!0)!==0)break e;In=t,o.timeoutHandle=Cg(Ym.bind(null,o,a,_t,wl,Au,t,It,Fa,Mi,na,f,"Throttled",-0,0),c);break e}Ym(o,a,_t,wl,Au,t,It,Fa,Mi,na,f,null,-0,0)}}break}while(!0);fn(e)}function Ym(e,t,a,o,c,f,y,S,A,I,F,$,P,B){if(e.timeoutHandle=-1,$=t.subtreeFlags,$&8192||($&16785408)===16785408){$={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Sn},Pm(t,f,$);var oe=(f&62914560)===f?Tl-At():(f&4194048)===f?Gm-At():0;if(oe=H1($,oe),oe!==null){In=f,e.cancelPendingCommit=oe(eg.bind(null,e,t,f,a,o,c,y,S,A,F,$,null,P,B)),oa(e,f,y,!I);return}}eg(e,t,f,a,o,c,y,S,A)}function t1(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Mt(f(),c))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function oa(e,t,a,o){t&=~Ru,t&=~Fa,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var c=t;0<c;){var f=31-Ot(c),y=1<<f;o[f]=-1,c&=~y}a!==0&&np(e,a,t)}function _l(){return(je&6)===0?(Fr(0),!1):!0}function Du(){if(Ee!==null){if(ze===0)var e=Ee.return;else e=Ee,wn=ka=null,$c(e),Ti=null,_r=0,e=Ee;for(;e!==null;)Tm(e.alternate,e),e=e.return;Ee=null}}function Li(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,S1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),In=0,Du(),Ve=e,Ee=a=Tn(e.current,null),Re=t,ze=0,kt=null,na=!1,Oi=cr(e,t),_u=!1,Mi=It=Ru=Fa=aa=Qe=0,_t=Gr=null,Au=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var c=31-Ot(o),f=1<<c;t|=e[c],o&=~f}return kn=t,qo(),a}function qm(e,t){Se=null,L.H=jr,t===Ci||t===tl?(t=ch(),ze=3):t===Ic?(t=ch(),ze=4):ze=t===uu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,kt=t,Ee===null&&(Qe=1,ml(e,Ft(t,e.current)))}function $m(){var e=Lt.current;return e===null?!0:(Re&4194048)===Re?$t===null:(Re&62914560)===Re||(Re&536870912)!==0?e===$t:!1}function Xm(){var e=L.H;return L.H=jr,e===null?jr:e}function Qm(){var e=L.A;return L.A=JS,e}function Rl(){Qe=4,na||(Re&4194048)!==Re&&Lt.current!==null||(Oi=!0),(aa&134217727)===0&&(Fa&134217727)===0||Ve===null||oa(Ve,Re,It,!1)}function Lu(e,t,a){var o=je;je|=2;var c=Xm(),f=Qm();(Ve!==e||Re!==t)&&(wl=null,Li(e,t)),t=!1;var y=Qe;e:do try{if(ze!==0&&Ee!==null){var S=Ee,A=kt;switch(ze){case 8:Du(),y=6;break e;case 3:case 2:case 9:case 6:Lt.current===null&&(t=!0);var I=ze;if(ze=0,kt=null,ji(e,S,A,I),a&&Oi){y=0;break e}break;default:I=ze,ze=0,kt=null,ji(e,S,A,I)}}n1(),y=Qe;break}catch(F){qm(e,F)}while(!0);return t&&e.shellSuspendCounter++,wn=ka=null,je=o,L.H=c,L.A=f,Ee===null&&(Ve=null,Re=0,qo()),y}function n1(){for(;Ee!==null;)Zm(Ee)}function a1(e,t){var a=je;je|=2;var o=Xm(),c=Qm();Ve!==e||Re!==t?(wl=null,El=At()+500,Li(e,t)):Oi=cr(e,t);e:do try{if(ze!==0&&Ee!==null){t=Ee;var f=kt;t:switch(ze){case 1:ze=0,kt=null,ji(e,t,f,1);break;case 2:case 9:if(lh(f)){ze=0,kt=null,Wm(t);break}t=function(){ze!==2&&ze!==9||Ve!==e||(ze=7),fn(e)},f.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:lh(f)?(ze=0,kt=null,Wm(t)):(ze=0,kt=null,ji(e,t,f,7));break;case 5:var y=null;switch(Ee.tag){case 26:y=Ee.memoizedState;case 5:case 27:var S=Ee;if(y?zg(y):S.stateNode.complete){ze=0,kt=null;var A=S.sibling;if(A!==null)Ee=A;else{var I=S.return;I!==null?(Ee=I,Al(I)):Ee=null}break t}}ze=0,kt=null,ji(e,t,f,5);break;case 6:ze=0,kt=null,ji(e,t,f,6);break;case 8:Du(),Qe=6;break e;default:throw Error(l(462))}}i1();break}catch(F){qm(e,F)}while(!0);return wn=ka=null,L.H=o,L.A=c,je=a,Ee!==null?0:(Ve=null,Re=0,qo(),Qe)}function i1(){for(;Ee!==null&&!Rb();)Zm(Ee)}function Zm(e){var t=Sm(e.alternate,e,kn);e.memoizedProps=e.pendingProps,t===null?Al(e):Ee=t}function Wm(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=mm(a,t,t.pendingProps,t.type,void 0,Re);break;case 11:t=mm(a,t,t.pendingProps,t.type.render,t.ref,Re);break;case 5:$c(t);default:Tm(a,t),t=Ee=Qp(t,kn),t=Sm(a,t,kn)}e.memoizedProps=e.pendingProps,t===null?Al(e):Ee=t}function ji(e,t,a,o){wn=ka=null,$c(t),Ti=null,_r=0;var c=t.return;try{if(YS(e,c,t,a,Re)){Qe=1,ml(e,Ft(a,e.current)),Ee=null;return}}catch(f){if(c!==null)throw Ee=c,f;Qe=1,ml(e,Ft(a,e.current)),Ee=null;return}t.flags&32768?(Oe||o===1?e=!0:Oi||(Re&536870912)!==0?e=!1:(na=e=!0,(o===2||o===9||o===3||o===6)&&(o=Lt.current,o!==null&&o.tag===13&&(o.flags|=16384))),Jm(t,e)):Al(t)}function Al(e){var t=e;do{if((t.flags&32768)!==0){Jm(t,na);return}e=t.return;var a=XS(t.alternate,t,kn);if(a!==null){Ee=a;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Qe===0&&(Qe=5)}function Jm(e,t){do{var a=QS(e.alternate,e);if(a!==null){a.flags&=32767,Ee=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=a}while(e!==null);Qe=6,Ee=null}function eg(e,t,a,o,c,f,y,S,A){e.cancelPendingCommit=null;do Nl();while(at!==0);if((je&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(f=t.lanes|t.childLanes,f|=Sc,zb(e,a,f,y,S,A),e===Ve&&(Ee=Ve=null,Re=0),Di=t,ra=e,In=a,Nu=f,Ou=c,Vm=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,s1(Mo,function(){return rg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=L.T,L.T=null,c=K.p,K.p=2,y=je,je|=4;try{ZS(e,t,a)}finally{je=y,K.p=c,L.T=o}}at=1,tg(),ng(),ag()}}function tg(){if(at===1){at=0;var e=ra,t=Di,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var o=K.p;K.p=2;var c=je;je|=4;try{km(t,e);var f=Ku,y=Bp(e.containerInfo),S=f.focusedElem,A=f.selectionRange;if(y!==S&&S&&S.ownerDocument&&Up(S.ownerDocument.documentElement,S)){if(A!==null&&gc(S)){var I=A.start,F=A.end;if(F===void 0&&(F=I),"selectionStart"in S)S.selectionStart=I,S.selectionEnd=Math.min(F,S.value.length);else{var $=S.ownerDocument||document,P=$&&$.defaultView||window;if(P.getSelection){var B=P.getSelection(),oe=S.textContent.length,ge=Math.min(A.start,oe),Be=A.end===void 0?ge:Math.min(A.end,oe);!B.extend&&ge>Be&&(y=Be,Be=ge,ge=y);var j=Hp(S,ge),O=Hp(S,Be);if(j&&O&&(B.rangeCount!==1||B.anchorNode!==j.node||B.anchorOffset!==j.offset||B.focusNode!==O.node||B.focusOffset!==O.offset)){var k=$.createRange();k.setStart(j.node,j.offset),B.removeAllRanges(),ge>Be?(B.addRange(k),B.extend(O.node,O.offset)):(k.setEnd(O.node,O.offset),B.addRange(k))}}}}for($=[],B=S;B=B.parentNode;)B.nodeType===1&&$.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<$.length;S++){var q=$[S];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Bl=!!Fu,Ku=Fu=null}finally{je=c,K.p=o,L.T=a}}e.current=t,at=2}}function ng(){if(at===2){at=0;var e=ra,t=Di,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var o=K.p;K.p=2;var c=je;je|=4;try{Om(e,t.alternate,t)}finally{je=c,K.p=o,L.T=a}}at=3}}function ag(){if(at===4||at===3){at=0,Ab();var e=ra,t=Di,a=In,o=Vm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?at=5:(at=0,Di=ra=null,ig(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ia=null),Zs(a),t=t.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(sr,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=L.T,c=K.p,K.p=2,L.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var S=o[y];f(S.value,{componentStack:S.stack})}}finally{L.T=t,K.p=c}}(In&3)!==0&&Nl(),fn(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Mu?Vr++:(Vr=0,Mu=e):Vr=0,Fr(0)}}function ig(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Er(t)))}function Nl(){return tg(),ng(),ag(),rg()}function rg(){if(at!==5)return!1;var e=ra,t=Nu;Nu=0;var a=Zs(In),o=L.T,c=K.p;try{K.p=32>a?32:a,L.T=null,a=Ou,Ou=null;var f=ra,y=In;if(at=0,Di=ra=null,In=0,(je&6)!==0)throw Error(l(331));var S=je;if(je|=4,Um(f.current),zm(f,f.current,y,a),je=S,Fr(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(sr,f)}catch{}return!0}finally{K.p=c,L.T=o,ig(e,t)}}function og(e,t,a){t=Ft(a,t),t=cu(e.stateNode,t,2),e=Wn(e,t,2),e!==null&&(ur(e,2),fn(e))}function Pe(e,t,a){if(e.tag===3)og(e,e,a);else for(;t!==null;){if(t.tag===3){og(t,e,a);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ia===null||!ia.has(o))){e=Ft(a,e),a=lm(2),o=Wn(t,a,2),o!==null&&(sm(a,o,t,e),ur(o,2),fn(o));break}}t=t.return}}function ju(e,t,a){var o=e.pingCache;if(o===null){o=e.pingCache=new e1;var c=new Set;o.set(t,c)}else c=o.get(t),c===void 0&&(c=new Set,o.set(t,c));c.has(a)||(_u=!0,c.add(a),e=r1.bind(null,e,t,a),t.then(e,e))}function r1(e,t,a){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(Re&a)===a&&(Qe===4||Qe===3&&(Re&62914560)===Re&&300>At()-Tl?(je&2)===0&&Li(e,0):Ru|=a,Mi===Re&&(Mi=0)),fn(e)}function lg(e,t){t===0&&(t=tp()),e=Da(e,t),e!==null&&(ur(e,t),fn(e))}function o1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),lg(e,a)}function l1(e,t){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(l(314))}o!==null&&o.delete(t),lg(e,a)}function s1(e,t){return qs(e,t)}var Ol=null,ki=null,ku=!1,Ml=!1,Iu=!1,la=0;function fn(e){e!==ki&&e.next===null&&(ki===null?Ol=ki=e:ki=ki.next=e),Ml=!0,ku||(ku=!0,u1())}function Fr(e,t){if(!Iu&&Ml){Iu=!0;do for(var a=!1,o=Ol;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var y=o.suspendedLanes,S=o.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=c&~(y&~S),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,fg(o,f))}else f=Re,f=ko(o,o===Ve?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||cr(o,f)||(a=!0,fg(o,f));o=o.next}while(a);Iu=!1}}function c1(){sg()}function sg(){Ml=ku=!1;var e=0;la!==0&&b1()&&(e=la);for(var t=At(),a=null,o=Ol;o!==null;){var c=o.next,f=cg(o,t);f===0?(o.next=null,a===null?Ol=c:a.next=c,c===null&&(ki=a)):(a=o,(e!==0||(f&3)!==0)&&(Ml=!0)),o=c}at!==0&&at!==5||Fr(e),la!==0&&(la=0)}function cg(e,t){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Ot(f),S=1<<y,A=c[y];A===-1?((S&a)===0||(S&o)!==0)&&(c[y]=Ib(S,t)):A<=t&&(e.expiredLanes|=S),f&=~S}if(t=Ve,a=Re,a=ko(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&$s(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||cr(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(o!==null&&$s(o),Zs(a)){case 2:case 8:a=Jd;break;case 32:a=Mo;break;case 268435456:a=ep;break;default:a=Mo}return o=ug.bind(null,e),a=qs(a,o),e.callbackPriority=t,e.callbackNode=a,t}return o!==null&&o!==null&&$s(o),e.callbackPriority=2,e.callbackNode=null,2}function ug(e,t){if(at!==0&&at!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Nl()&&e.callbackNode!==a)return null;var o=Re;return o=ko(e,e===Ve?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Km(e,o,t),cg(e,At()),e.callbackNode!=null&&e.callbackNode===a?ug.bind(null,e):null)}function fg(e,t){if(Nl())return null;Km(e,t,!0)}function u1(){C1(function(){(je&6)!==0?qs(Wd,c1):sg()})}function zu(){if(la===0){var e=bi;e===0&&(e=Do,Do<<=1,(Do&261888)===0&&(Do=256)),la=e}return la}function dg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ho(""+e)}function pg(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function f1(e,t,a,o,c){if(t==="submit"&&a&&a.stateNode===c){var f=dg((c[St]||null).action),y=o.submitter;y&&(t=(t=y[St]||null)?dg(t.formAction):y.getAttribute("formAction"),t!==null&&(f=t,y=null));var S=new Vo("action","action",null,o,c);e.push({event:S,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(la!==0){var A=y?pg(c,y):new FormData(c);au(a,{pending:!0,data:A,method:c.method,action:f},null,A)}}else typeof f=="function"&&(S.preventDefault(),A=y?pg(c,y):new FormData(c),au(a,{pending:!0,data:A,method:c.method,action:f},f,A))},currentTarget:c}]})}}for(var Pu=0;Pu<bc.length;Pu++){var Hu=bc[Pu],d1=Hu.toLowerCase(),p1=Hu[0].toUpperCase()+Hu.slice(1);Wt(d1,"on"+p1)}Wt(Fp,"onAnimationEnd"),Wt(Kp,"onAnimationIteration"),Wt(Yp,"onAnimationStart"),Wt("dblclick","onDoubleClick"),Wt("focusin","onFocus"),Wt("focusout","onBlur"),Wt(NS,"onTransitionRun"),Wt(OS,"onTransitionStart"),Wt(MS,"onTransitionCancel"),Wt(qp,"onTransitionEnd"),oi("onMouseEnter",["mouseout","mouseover"]),oi("onMouseLeave",["mouseout","mouseover"]),oi("onPointerEnter",["pointerout","pointerover"]),oi("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Kr));function hg(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;e:{var f=void 0;if(t)for(var y=o.length-1;0<=y;y--){var S=o[y],A=S.instance,I=S.currentTarget;if(S=S.listener,A!==f&&c.isPropagationStopped())break e;f=S,c.currentTarget=I;try{f(c)}catch(F){Yo(F)}c.currentTarget=null,f=A}else for(y=0;y<o.length;y++){if(S=o[y],A=S.instance,I=S.currentTarget,S=S.listener,A!==f&&c.isPropagationStopped())break e;f=S,c.currentTarget=I;try{f(c)}catch(F){Yo(F)}c.currentTarget=null,f=A}}}}function we(e,t){var a=t[Ws];a===void 0&&(a=t[Ws]=new Set);var o=e+"__bubble";a.has(o)||(mg(t,e,2,!1),a.add(o))}function Uu(e,t,a){var o=0;t&&(o|=4),mg(a,e,o,t)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function Bu(e){if(!e[Dl]){e[Dl]=!0,sp.forEach(function(a){a!=="selectionchange"&&(h1.has(a)||Uu(a,!1,e),Uu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dl]||(t[Dl]=!0,Uu("selectionchange",!1,t))}}function mg(e,t,a,o){switch(Fg(t)){case 2:var c=G1;break;case 8:c=V1;break;default:c=nf}a=c.bind(null,t,a,e),c=void 0,!lc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(t,a,{capture:!0,passive:c}):e.addEventListener(t,a,!0):c!==void 0?e.addEventListener(t,a,{passive:c}):e.addEventListener(t,a,!1)}function Gu(e,t,a,o,c){var f=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var S=o.stateNode.containerInfo;if(S===c)break;if(y===4)for(y=o.return;y!==null;){var A=y.tag;if((A===3||A===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;S!==null;){if(y=ai(S),y===null)return;if(A=y.tag,A===5||A===6||A===26||A===27){o=f=y;continue e}S=S.parentNode}}o=o.return}bp(function(){var I=f,F=rc(a),$=[];e:{var P=$p.get(e);if(P!==void 0){var B=Vo,oe=e;switch(e){case"keypress":if(Bo(a)===0)break e;case"keydown":case"keyup":B=lS;break;case"focusin":oe="focus",B=fc;break;case"focusout":oe="blur",B=fc;break;case"beforeblur":case"afterblur":B=fc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Xb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=uS;break;case Fp:case Kp:case Yp:B=Wb;break;case qp:B=dS;break;case"scroll":case"scrollend":B=qb;break;case"wheel":B=hS;break;case"copy":case"cut":case"paste":B=eS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=wp;break;case"toggle":case"beforetoggle":B=gS}var ge=(t&4)!==0,Be=!ge&&(e==="scroll"||e==="scrollend"),j=ge?P!==null?P+"Capture":null:P;ge=[];for(var O=I,k;O!==null;){var q=O;if(k=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||k===null||j===null||(q=pr(O,j),q!=null&&ge.push(Yr(O,q,k))),Be)break;O=O.return}0<ge.length&&(P=new B(P,oe,null,a,F),$.push({event:P,listeners:ge}))}}if((t&7)===0){e:{if(P=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",P&&a!==ic&&(oe=a.relatedTarget||a.fromElement)&&(ai(oe)||oe[ni]))break e;if((B||P)&&(P=F.window===F?F:(P=F.ownerDocument)?P.defaultView||P.parentWindow:window,B?(oe=a.relatedTarget||a.toElement,B=I,oe=oe?ai(oe):null,oe!==null&&(Be=u(oe),ge=oe.tag,oe!==Be||ge!==5&&ge!==27&&ge!==6)&&(oe=null)):(B=null,oe=I),B!==oe)){if(ge=Tp,q="onMouseLeave",j="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(ge=wp,q="onPointerLeave",j="onPointerEnter",O="pointer"),Be=B==null?P:dr(B),k=oe==null?P:dr(oe),P=new ge(q,O+"leave",B,a,F),P.target=Be,P.relatedTarget=k,q=null,ai(F)===I&&(ge=new ge(j,O+"enter",oe,a,F),ge.target=k,ge.relatedTarget=Be,q=ge),Be=q,B&&oe)t:{for(ge=m1,j=B,O=oe,k=0,q=j;q;q=ge(q))k++;q=0;for(var he=O;he;he=ge(he))q++;for(;0<k-q;)j=ge(j),k--;for(;0<q-k;)O=ge(O),q--;for(;k--;){if(j===O||O!==null&&j===O.alternate){ge=j;break t}j=ge(j),O=ge(O)}ge=null}else ge=null;B!==null&&gg($,P,B,ge,!1),oe!==null&&Be!==null&&gg($,Be,oe,ge,!0)}}e:{if(P=I?dr(I):window,B=P.nodeName&&P.nodeName.toLowerCase(),B==="select"||B==="input"&&P.type==="file")var De=Lp;else if(Mp(P))if(jp)De=_S;else{De=ES;var ce=TS}else B=P.nodeName,!B||B.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?I&&ac(I.elementType)&&(De=Lp):De=wS;if(De&&(De=De(e,I))){Dp($,De,a,F);break e}ce&&ce(e,P,I),e==="focusout"&&I&&P.type==="number"&&I.memoizedProps.value!=null&&nc(P,"number",P.value)}switch(ce=I?dr(I):window,e){case"focusin":(Mp(ce)||ce.contentEditable==="true")&&(di=ce,vc=I,Sr=null);break;case"focusout":Sr=vc=di=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,Gp($,a,F);break;case"selectionchange":if(AS)break;case"keydown":case"keyup":Gp($,a,F)}var Ce;if(pc)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else fi?Np(e,a)&&(Ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(_p&&a.locale!=="ko"&&(fi||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&fi&&(Ce=Sp()):(Kn=F,sc="value"in Kn?Kn.value:Kn.textContent,fi=!0)),ce=Ll(I,Ae),0<ce.length&&(Ae=new Ep(Ae,e,null,a,F),$.push({event:Ae,listeners:ce}),Ce?Ae.data=Ce:(Ce=Op(a),Ce!==null&&(Ae.data=Ce)))),(Ce=yS?xS(e,a):bS(e,a))&&(Ae=Ll(I,"onBeforeInput"),0<Ae.length&&(ce=new Ep("onBeforeInput","beforeinput",null,a,F),$.push({event:ce,listeners:Ae}),ce.data=Ce)),f1($,e,I,a,F)}hg($,t)})}function Yr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ll(e,t){for(var a=t+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=pr(e,a),c!=null&&o.unshift(Yr(e,c,f)),c=pr(e,t),c!=null&&o.push(Yr(e,c,f))),e.tag===3)return o;e=e.return}return[]}function m1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gg(e,t,a,o,c){for(var f=t._reactName,y=[];a!==null&&a!==o;){var S=a,A=S.alternate,I=S.stateNode;if(S=S.tag,A!==null&&A===o)break;S!==5&&S!==26&&S!==27||I===null||(A=I,c?(I=pr(a,f),I!=null&&y.unshift(Yr(a,I,A))):c||(I=pr(a,f),I!=null&&y.push(Yr(a,I,A)))),a=a.return}y.length!==0&&e.push({event:t,listeners:y})}var g1=/\r\n?/g,v1=/\u0000|\uFFFD/g;function vg(e){return(typeof e=="string"?e:""+e).replace(g1,`
`).replace(v1,"")}function yg(e,t){return t=vg(t),vg(e)===t}function Ue(e,t,a,o,c,f){switch(a){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||si(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&si(e,""+o);break;case"className":zo(e,"class",o);break;case"tabIndex":zo(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":zo(e,a,o);break;case"style":yp(e,o,f);break;case"data":if(t!=="object"){zo(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ho(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(t!=="input"&&Ue(e,t,"name",c.name,c,null),Ue(e,t,"formEncType",c.formEncType,c,null),Ue(e,t,"formMethod",c.formMethod,c,null),Ue(e,t,"formTarget",c.formTarget,c,null)):(Ue(e,t,"encType",c.encType,c,null),Ue(e,t,"method",c.method,c,null),Ue(e,t,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ho(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Sn);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ho(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":we("beforetoggle",e),we("toggle",e),Io(e,"popover",o);break;case"xlinkActuate":bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":bn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":bn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":bn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":bn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Io(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Kb.get(a)||a,Io(e,a,o))}}function Vu(e,t,a,o,c,f){switch(a){case"style":yp(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(l(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"children":typeof o=="string"?si(e,o):(typeof o=="number"||typeof o=="bigint")&&si(e,""+o);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Sn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cp.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),t=a.slice(2,c?a.length-7:void 0),f=e[St]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(t,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,o,c);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Io(e,a,o)}}}function ft(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ue(e,t,f,y,a,null)}}c&&Ue(e,t,"srcSet",a.srcSet,a,null),o&&Ue(e,t,"src",a.src,a,null);return;case"input":we("invalid",e);var S=f=y=c=null,A=null,I=null;for(o in a)if(a.hasOwnProperty(o)){var F=a[o];if(F!=null)switch(o){case"name":c=F;break;case"type":y=F;break;case"checked":A=F;break;case"defaultChecked":I=F;break;case"value":f=F;break;case"defaultValue":S=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(l(137,t));break;default:Ue(e,t,o,F,a,null)}}hp(e,f,S,A,I,y,c,!1);return;case"select":we("invalid",e),o=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(S=a[c],S!=null))switch(c){case"value":f=S;break;case"defaultValue":y=S;break;case"multiple":o=S;default:Ue(e,t,c,S,a,null)}t=f,a=y,e.multiple=!!o,t!=null?li(e,!!o,t,!1):a!=null&&li(e,!!o,a,!0);return;case"textarea":we("invalid",e),f=c=o=null;for(y in a)if(a.hasOwnProperty(y)&&(S=a[y],S!=null))switch(y){case"value":o=S;break;case"defaultValue":c=S;break;case"children":f=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(l(91));break;default:Ue(e,t,y,S,a,null)}gp(e,o,c,f);return;case"option":for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null)&&(A==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ue(e,t,A,o,a,null));return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(o=0;o<Kr.length;o++)we(Kr[o],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Ue(e,t,I,o,a,null)}return;default:if(ac(t)){for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!==void 0&&Vu(e,t,F,o,a,void 0));return}}for(S in a)a.hasOwnProperty(S)&&(o=a[S],o!=null&&Ue(e,t,S,o,a,null))}function y1(e,t,a,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,S=null,A=null,I=null,F=null;for(B in a){var $=a[B];if(a.hasOwnProperty(B)&&$!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":A=$;default:o.hasOwnProperty(B)||Ue(e,t,B,null,o,$)}}for(var P in o){var B=o[P];if($=a[P],o.hasOwnProperty(P)&&(B!=null||$!=null))switch(P){case"type":f=B;break;case"name":c=B;break;case"checked":I=B;break;case"defaultChecked":F=B;break;case"value":y=B;break;case"defaultValue":S=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(l(137,t));break;default:B!==$&&Ue(e,t,P,B,o,$)}}tc(e,y,S,A,I,F,f,c);return;case"select":B=y=S=P=null;for(f in a)if(A=a[f],a.hasOwnProperty(f)&&A!=null)switch(f){case"value":break;case"multiple":B=A;default:o.hasOwnProperty(f)||Ue(e,t,f,null,o,A)}for(c in o)if(f=o[c],A=a[c],o.hasOwnProperty(c)&&(f!=null||A!=null))switch(c){case"value":P=f;break;case"defaultValue":S=f;break;case"multiple":y=f;default:f!==A&&Ue(e,t,c,f,o,A)}t=S,a=y,o=B,P!=null?li(e,!!a,P,!1):!!o!=!!a&&(t!=null?li(e,!!a,t,!0):li(e,!!a,a?[]:"",!1));return;case"textarea":B=P=null;for(S in a)if(c=a[S],a.hasOwnProperty(S)&&c!=null&&!o.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:Ue(e,t,S,null,o,c)}for(y in o)if(c=o[y],f=a[y],o.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":P=c;break;case"defaultValue":B=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(l(91));break;default:c!==f&&Ue(e,t,y,c,o,f)}mp(e,P,B);return;case"option":for(var oe in a)P=a[oe],a.hasOwnProperty(oe)&&P!=null&&!o.hasOwnProperty(oe)&&(oe==="selected"?e.selected=!1:Ue(e,t,oe,null,o,P));for(A in o)P=o[A],B=a[A],o.hasOwnProperty(A)&&P!==B&&(P!=null||B!=null)&&(A==="selected"?e.selected=P&&typeof P!="function"&&typeof P!="symbol":Ue(e,t,A,P,o,B));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in a)P=a[ge],a.hasOwnProperty(ge)&&P!=null&&!o.hasOwnProperty(ge)&&Ue(e,t,ge,null,o,P);for(I in o)if(P=o[I],B=a[I],o.hasOwnProperty(I)&&P!==B&&(P!=null||B!=null))switch(I){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(l(137,t));break;default:Ue(e,t,I,P,o,B)}return;default:if(ac(t)){for(var Be in a)P=a[Be],a.hasOwnProperty(Be)&&P!==void 0&&!o.hasOwnProperty(Be)&&Vu(e,t,Be,void 0,o,P);for(F in o)P=o[F],B=a[F],!o.hasOwnProperty(F)||P===B||P===void 0&&B===void 0||Vu(e,t,F,P,o,B);return}}for(var j in a)P=a[j],a.hasOwnProperty(j)&&P!=null&&!o.hasOwnProperty(j)&&Ue(e,t,j,null,o,P);for($ in o)P=o[$],B=a[$],!o.hasOwnProperty($)||P===B||P==null&&B==null||Ue(e,t,$,P,o,B)}function xg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function x1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,y=c.initiatorType,S=c.duration;if(f&&S&&xg(y)){for(y=0,S=c.responseEnd,o+=1;o<a.length;o++){var A=a[o],I=A.startTime;if(I>S)break;var F=A.transferSize,$=A.initiatorType;F&&xg($)&&(A=A.responseEnd,y+=F*(A<S?1:(S-I)/(A-I)))}if(--o,t+=8*(f+y)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Fu=null,Ku=null;function jl(e){return e.nodeType===9?e:e.ownerDocument}function bg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Yu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qu=null;function b1(){var e=window.event;return e&&e.type==="popstate"?e===qu?!1:(qu=e,!0):(qu=null,!1)}var Cg=typeof setTimeout=="function"?setTimeout:void 0,S1=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,C1=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(e){return Tg.resolve(null).then(e).catch(T1)}:Cg;function T1(e){setTimeout(function(){throw e})}function sa(e){return e==="head"}function Eg(e,t){var a=t,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),Hi(t);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")qr(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,qr(a);for(var f=a.firstChild;f;){var y=f.nextSibling,S=f.nodeName;f[fr]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&qr(e.ownerDocument.body);a=c}while(a);Hi(t)}function wg(e,t){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function $u(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$u(a),Js(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function E1(e,t,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[fr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Xt(e.nextSibling),e===null)break}return null}function w1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Xt(e.nextSibling),e===null))return null;return e}function _g(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Xt(e.nextSibling),e===null))return null;return e}function Xu(e){return e.data==="$?"||e.data==="$~"}function Qu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _1(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var o=function(){t(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Zu=null;function Rg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Xt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Ag(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Ng(e,t,a){switch(t=jl(a),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function qr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Js(e)}var Qt=new Map,Og=new Set;function kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var zn=K.d;K.d={f:R1,r:A1,D:N1,C:O1,L:M1,m:D1,X:j1,S:L1,M:k1};function R1(){var e=zn.f(),t=_l();return e||t}function A1(e){var t=ii(e);t!==null&&t.tag===5&&t.type==="form"?qh(t):zn.r(e)}var Ii=typeof document>"u"?null:document;function Mg(e,t,a){var o=Ii;if(o&&typeof t=="string"&&t){var c=Gt(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Og.has(c)||(Og.add(c),e={rel:e,crossOrigin:a,href:t},o.querySelector(c)===null&&(t=o.createElement("link"),ft(t,"link",e),rt(t),o.head.appendChild(t)))}}function N1(e){zn.D(e),Mg("dns-prefetch",e,null)}function O1(e,t){zn.C(e,t),Mg("preconnect",e,t)}function M1(e,t,a){zn.L(e,t,a);var o=Ii;if(o&&e&&t){var c='link[rel="preload"][as="'+Gt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Gt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Gt(a.imageSizes)+'"]')):c+='[href="'+Gt(e)+'"]';var f=c;switch(t){case"style":f=zi(e);break;case"script":f=Pi(e)}Qt.has(f)||(e=v({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Qt.set(f,e),o.querySelector(c)!==null||t==="style"&&o.querySelector($r(f))||t==="script"&&o.querySelector(Xr(f))||(t=o.createElement("link"),ft(t,"link",e),rt(t),o.head.appendChild(t)))}}function D1(e,t){zn.m(e,t);var a=Ii;if(a&&e){var o=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Gt(o)+'"][href="'+Gt(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Pi(e)}if(!Qt.has(f)&&(e=v({rel:"modulepreload",href:e},t),Qt.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Xr(f)))return}o=a.createElement("link"),ft(o,"link",e),rt(o),a.head.appendChild(o)}}}function L1(e,t,a){zn.S(e,t,a);var o=Ii;if(o&&e){var c=ri(o).hoistableStyles,f=zi(e);t=t||"default";var y=c.get(f);if(!y){var S={loading:0,preload:null};if(y=o.querySelector($r(f)))S.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Qt.get(f))&&Wu(e,a);var A=y=o.createElement("link");rt(A),ft(A,"link",e),A._p=new Promise(function(I,F){A.onload=I,A.onerror=F}),A.addEventListener("load",function(){S.loading|=1}),A.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Il(y,t,o)}y={type:"stylesheet",instance:y,count:1,state:S},c.set(f,y)}}}function j1(e,t){zn.X(e,t);var a=Ii;if(a&&e){var o=ri(a).hoistableScripts,c=Pi(e),f=o.get(c);f||(f=a.querySelector(Xr(c)),f||(e=v({src:e,async:!0},t),(t=Qt.get(c))&&Ju(e,t),f=a.createElement("script"),rt(f),ft(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function k1(e,t){zn.M(e,t);var a=Ii;if(a&&e){var o=ri(a).hoistableScripts,c=Pi(e),f=o.get(c);f||(f=a.querySelector(Xr(c)),f||(e=v({src:e,async:!0,type:"module"},t),(t=Qt.get(c))&&Ju(e,t),f=a.createElement("script"),rt(f),ft(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Dg(e,t,a,o){var c=(c=me.current)?kl(c):null;if(!c)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=zi(a.href),a=ri(c).hoistableStyles,o=a.get(t),o||(o={type:"style",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=zi(a.href);var f=ri(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector($r(e)))&&!f._p&&(y.instance=f,y.state.loading=5),Qt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Qt.set(e,a),f||I1(c,e,a,y.state))),t&&o===null)throw Error(l(528,""));return y}if(t&&o!==null)throw Error(l(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Pi(a),a=ri(c).hoistableScripts,o=a.get(t),o||(o={type:"script",instance:null,count:0,state:null},a.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function zi(e){return'href="'+Gt(e)+'"'}function $r(e){return'link[rel="stylesheet"]['+e+"]"}function Lg(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function I1(e,t,a,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),ft(t,"link",a),rt(t),e.head.appendChild(t))}function Pi(e){return'[src="'+Gt(e)+'"]'}function Xr(e){return"script[async]"+e}function jg(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Gt(a.href)+'"]');if(o)return t.instance=o,rt(o),o;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),rt(o),ft(o,"style",c),Il(o,a.precedence,e),t.instance=o;case"stylesheet":c=zi(a.href);var f=e.querySelector($r(c));if(f)return t.state.loading|=4,t.instance=f,rt(f),f;o=Lg(a),(c=Qt.get(c))&&Wu(o,c),f=(e.ownerDocument||e).createElement("link"),rt(f);var y=f;return y._p=new Promise(function(S,A){y.onload=S,y.onerror=A}),ft(f,"link",o),t.state.loading|=4,Il(f,a.precedence,e),t.instance=f;case"script":return f=Pi(a.src),(c=e.querySelector(Xr(f)))?(t.instance=c,rt(c),c):(o=a,(c=Qt.get(f))&&(o=v({},a),Ju(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),rt(c),ft(c,"link",o),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,Il(o,a.precedence,e));return t.instance}function Il(e,t,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,y=0;y<o.length;y++){var S=o[y];if(S.dataset.precedence===t)f=S;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Wu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ju(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var zl=null;function kg(e,t,a){if(zl===null){var o=new Map,c=zl=new Map;c.set(a,o)}else c=zl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[fr]||f[lt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(t)||"";y=e+y;var S=o.get(y);S?S.push(f):o.set(y,[f])}}return o}function Ig(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function z1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function zg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function P1(e,t,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=zi(o.href),f=t.querySelector($r(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Pl.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=f,rt(f);return}f=t.ownerDocument||t,o=Lg(o),(c=Qt.get(c))&&Wu(o,c),f=f.createElement("link"),rt(f);var y=f;y._p=new Promise(function(S,A){y.onload=S,y.onerror=A}),ft(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Pl.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var ef=0;function H1(e,t){return e.stylesheets&&e.count===0&&Ul(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ul(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+t);0<e.imgBytes&&ef===0&&(ef=62500*x1());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ul(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>ef?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function Pl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ul(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Hl=null;function Ul(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hl=new Map,t.forEach(U1,e),Hl=null,Pl.call(e))}function U1(e,t){if(!(t.state.loading&4)){var a=Hl.get(e);if(a)var o=a.get(null);else{a=new Map,Hl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}c=t.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,c),a.set(y,c),this.count++,o=Pl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Qr={$$typeof:D,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function B1(e,t,a,o,c,f,y,S,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xs(0),this.hiddenUpdates=Xs(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Pg(e,t,a,o,c,f,y,S,A,I,F,$){return e=new B1(e,t,a,y,A,I,F,$,S),t=1,f===!0&&(t|=24),f=Dt(3,null,null,t),e.current=f,f.stateNode=e,t=Lc(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:t},zc(f),e}function Hg(e){return e?(e=mi,e):mi}function Ug(e,t,a,o,c,f){c=Hg(c),o.context===null?o.context=c:o.pendingContext=c,o=Zn(t),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Wn(e,o,t),a!==null&&(Rt(a,e,t),Ar(a,e,t))}function Bg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function tf(e,t){Bg(e,t),(e=e.alternate)&&Bg(e,t)}function Gg(e){if(e.tag===13||e.tag===31){var t=Da(e,67108864);t!==null&&Rt(t,e,67108864),tf(e,67108864)}}function Vg(e){if(e.tag===13||e.tag===31){var t=zt();t=Qs(t);var a=Da(e,t);a!==null&&Rt(a,e,t),tf(e,t)}}var Bl=!0;function G1(e,t,a,o){var c=L.T;L.T=null;var f=K.p;try{K.p=2,nf(e,t,a,o)}finally{K.p=f,L.T=c}}function V1(e,t,a,o){var c=L.T;L.T=null;var f=K.p;try{K.p=8,nf(e,t,a,o)}finally{K.p=f,L.T=c}}function nf(e,t,a,o){if(Bl){var c=af(o);if(c===null)Gu(e,t,o,Gl,a),Kg(e,o);else if(K1(c,e,t,a,o))o.stopPropagation();else if(Kg(e,o),t&4&&-1<F1.indexOf(e)){for(;c!==null;){var f=ii(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Ra(f.pendingLanes);if(y!==0){var S=f;for(S.pendingLanes|=2,S.entangledLanes|=2;y;){var A=1<<31-Ot(y);S.entanglements[1]|=A,y&=~A}fn(f),(je&6)===0&&(El=At()+500,Fr(0))}}break;case 31:case 13:S=Da(f,2),S!==null&&Rt(S,f,2),_l(),tf(f,2)}if(f=af(o),f===null&&Gu(e,t,o,Gl,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Gu(e,t,o,null,a)}}function af(e){return e=rc(e),rf(e)}var Gl=null;function rf(e){if(Gl=null,e=ai(e),e!==null){var t=u(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=d(t),e!==null)return e;e=null}else if(a===31){if(e=p(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Gl=e,null}function Fg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nb()){case Wd:return 2;case Jd:return 8;case Mo:case Ob:return 32;case ep:return 268435456;default:return 32}default:return 32}}var of=!1,ca=null,ua=null,fa=null,Zr=new Map,Wr=new Map,da=[],F1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kg(e,t){switch(e){case"focusin":case"focusout":ca=null;break;case"dragenter":case"dragleave":ua=null;break;case"mouseover":case"mouseout":fa=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function Jr(e,t,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},t!==null&&(t=ii(t),t!==null&&Gg(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function K1(e,t,a,o,c){switch(t){case"focusin":return ca=Jr(ca,e,t,a,o,c),!0;case"dragenter":return ua=Jr(ua,e,t,a,o,c),!0;case"mouseover":return fa=Jr(fa,e,t,a,o,c),!0;case"pointerover":var f=c.pointerId;return Zr.set(f,Jr(Zr.get(f)||null,e,t,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Wr.set(f,Jr(Wr.get(f)||null,e,t,a,o,c)),!0}return!1}function Yg(e){var t=ai(e.target);if(t!==null){var a=u(t);if(a!==null){if(t=a.tag,t===13){if(t=d(a),t!==null){e.blockedOn=t,op(e.priority,function(){Vg(a)});return}}else if(t===31){if(t=p(a),t!==null){e.blockedOn=t,op(e.priority,function(){Vg(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=af(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ic=o,a.target.dispatchEvent(o),ic=null}else return t=ii(a),t!==null&&Gg(t),e.blockedOn=a,!1;t.shift()}return!0}function qg(e,t,a){Vl(e)&&a.delete(t)}function Y1(){of=!1,ca!==null&&Vl(ca)&&(ca=null),ua!==null&&Vl(ua)&&(ua=null),fa!==null&&Vl(fa)&&(fa=null),Zr.forEach(qg),Wr.forEach(qg)}function Fl(e,t){e.blockedOn===t&&(e.blockedOn=null,of||(of=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Y1)))}var Kl=null;function $g(e){Kl!==e&&(Kl=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Kl===e&&(Kl=null);for(var t=0;t<e.length;t+=3){var a=e[t],o=e[t+1],c=e[t+2];if(typeof o!="function"){if(rf(o||a)===null)continue;break}var f=ii(a);f!==null&&(e.splice(t,3),t-=3,au(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Hi(e){function t(A){return Fl(A,e)}ca!==null&&Fl(ca,e),ua!==null&&Fl(ua,e),fa!==null&&Fl(fa,e),Zr.forEach(t),Wr.forEach(t);for(var a=0;a<da.length;a++){var o=da[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<da.length&&(a=da[0],a.blockedOn===null);)Yg(a),a.blockedOn===null&&da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],y=c[St]||null;if(typeof f=="function")y||$g(a);else if(y){var S=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[St]||null)S=y.formAction;else if(rf(c)!==null)continue}else S=y.action;typeof S=="function"?a[o+1]=S:(a.splice(o,3),o-=3),$g(a)}}}function Xg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function lf(e){this._internalRoot=e}Yl.prototype.render=lf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var a=t.current,o=zt();Ug(a,o,e,t,null,null)},Yl.prototype.unmount=lf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ug(e.current,2,null,e,null,null),_l(),t[ni]=null}};function Yl(e){this._internalRoot=e}Yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=rp();e={blockedOn:null,target:e,priority:t};for(var a=0;a<da.length&&t!==0&&t<da[a].priority;a++);da.splice(a,0,e),a===0&&Yg(e)}};var Qg=i.version;if(Qg!=="19.2.3")throw Error(l(527,Qg,"19.2.3"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=m(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var q1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{sr=ql.inject(q1),Nt=ql}catch{}}return to.createRoot=function(e,t){if(!s(e))throw Error(l(299));var a=!1,o="",c=am,f=im,y=rm;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError)),t=Pg(e,1,!1,null,null,a,o,null,c,f,y,Xg),e[ni]=t.current,Bu(e),new lf(t)},to.hydrateRoot=function(e,t,a){if(!s(e))throw Error(l(299));var o=!1,c="",f=am,y=im,S=rm,A=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError),a.formState!==void 0&&(A=a.formState)),t=Pg(e,1,!0,t,a??null,o,c,A,f,y,S,Xg),t.context=Hg(null),a=t.current,o=zt(),o=Qs(o),c=Zn(o),c.callback=null,Wn(a,c,o),a=o,t.current.lanes=a,ur(t,a),fn(t),e[ni]=t.current,Bu(e),new Yl(t)},to.version="19.2.3",to}var ov;function aC(){if(ov)return uf.exports;ov=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),uf.exports=nC(),uf.exports}var iC=aC();var lv="popstate";function sv(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function rC(n={}){function i(l,s){let u=s.state?.masked,{pathname:d,search:p,hash:h}=u||l.location;return kf("",{pathname:d,search:p,hash:h},s.state&&s.state.usr||null,s.state&&s.state.key||"default",u?{pathname:l.location.pathname,search:l.location.search,hash:l.location.hash}:void 0)}function r(l,s){return typeof s=="string"?s:fo(s)}return lC(i,r,null,n)}function $e(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function nn(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function oC(){return Math.random().toString(36).substring(2,10)}function cv(n,i){return{usr:n.state,key:n.key,idx:i,masked:n.unstable_mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function kf(n,i,r=null,l,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?Zi(i):i,state:r,key:i&&i.key||l||oC(),unstable_mask:s}}function fo({pathname:n="/",search:i="",hash:r=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Zi(n){let i={};if(n){let r=n.indexOf("#");r>=0&&(i.hash=n.substring(r),n=n.substring(0,r));let l=n.indexOf("?");l>=0&&(i.search=n.substring(l),n=n.substring(0,l)),n&&(i.pathname=n)}return i}function lC(n,i,r,l={}){let{window:s=document.defaultView,v5Compat:u=!1}=l,d=s.history,p="POP",h=null,m=b();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function b(){return(d.state||{idx:null}).idx}function v(){p="POP";let _=b(),N=_==null?null:_-m;m=_,h&&h({action:p,location:T.location,delta:N})}function C(_,N){p="PUSH";let M=sv(_)?_:kf(T.location,_,N);m=b()+1;let D=cv(M,m),H=T.createHref(M.unstable_mask||M);try{d.pushState(D,"",H)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;s.location.assign(H)}u&&h&&h({action:p,location:T.location,delta:1})}function E(_,N){p="REPLACE";let M=sv(_)?_:kf(T.location,_,N);m=b();let D=cv(M,m),H=T.createHref(M.unstable_mask||M);d.replaceState(D,"",H),u&&h&&h({action:p,location:T.location,delta:0})}function w(_){return sC(_)}let T={get action(){return p},get location(){return n(s,d)},listen(_){if(h)throw new Error("A history only accepts one active listener");return s.addEventListener(lv,v),h=_,()=>{s.removeEventListener(lv,v),h=null}},createHref(_){return i(s,_)},createURL:w,encodeLocation(_){let N=w(_);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:C,replace:E,go(_){return d.go(_)}};return T}function sC(n,i=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),$e(r,"No window.location.(origin|href) available to create URL");let l=typeof n=="string"?n:fo(n);return l=l.replace(/ $/,"%20"),!i&&l.startsWith("//")&&(l=r+l),new URL(l,r)}function Cy(n,i,r="/"){return cC(n,i,r,!1)}function cC(n,i,r,l){let s=typeof i=="string"?Zi(i):i,u=Hn(s.pathname||"/",r);if(u==null)return null;let d=Ty(n);uC(d);let p=null;for(let h=0;p==null&&h<d.length;++h){let m=SC(u);p=xC(d[h],m,l)}return p}function Ty(n,i=[],r=[],l="",s=!1){let u=(d,p,h=s,m)=>{let b={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};if(b.relativePath.startsWith("/")){if(!b.relativePath.startsWith(l)&&h)return;$e(b.relativePath.startsWith(l),`Absolute route path "${b.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(l.length)}let v=mn([l,b.relativePath]),C=r.concat(b);d.children&&d.children.length>0&&($e(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Ty(d.children,i,C,v,h)),!(d.path==null&&!d.index)&&i.push({path:v,score:vC(v,d.index),routesMeta:C})};return n.forEach((d,p)=>{if(d.path===""||!d.path?.includes("?"))u(d,p);else for(let h of Ey(d.path))u(d,p,!0,h)}),i}function Ey(n){let i=n.split("/");if(i.length===0)return[];let[r,...l]=i,s=r.endsWith("?"),u=r.replace(/\?$/,"");if(l.length===0)return s?[u,""]:[u];let d=Ey(l.join("/")),p=[];return p.push(...d.map(h=>h===""?u:[u,h].join("/"))),s&&p.push(...d),p.map(h=>n.startsWith("/")&&h===""?"/":h)}function uC(n){n.sort((i,r)=>i.score!==r.score?r.score-i.score:yC(i.routesMeta.map(l=>l.childrenIndex),r.routesMeta.map(l=>l.childrenIndex)))}var fC=/^:[\w-]+$/,dC=3,pC=2,hC=1,mC=10,gC=-2,uv=n=>n==="*";function vC(n,i){let r=n.split("/"),l=r.length;return r.some(uv)&&(l+=gC),i&&(l+=pC),r.filter(s=>!uv(s)).reduce((s,u)=>s+(fC.test(u)?dC:u===""?hC:mC),l)}function yC(n,i){return n.length===i.length&&n.slice(0,-1).every((l,s)=>l===i[s])?n[n.length-1]-i[i.length-1]:0}function xC(n,i,r=!1){let{routesMeta:l}=n,s={},u="/",d=[];for(let p=0;p<l.length;++p){let h=l[p],m=p===l.length-1,b=u==="/"?i:i.slice(u.length)||"/",v=cs({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},b),C=h.route;if(!v&&m&&r&&!l[l.length-1].route.index&&(v=cs({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},b)),!v)return null;Object.assign(s,v.params),d.push({params:s,pathname:mn([u,v.pathname]),pathnameBase:wC(mn([u,v.pathnameBase])),route:C}),v.pathnameBase!=="/"&&(u=mn([u,v.pathnameBase]))}return d}function cs(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,l]=bC(n.path,n.caseSensitive,n.end),s=i.match(r);if(!s)return null;let u=s[0],d=u.replace(/(.)\/+$/,"$1"),p=s.slice(1);return{params:l.reduce((m,{paramName:b,isOptional:v},C)=>{if(b==="*"){let w=p[C]||"";d=u.slice(0,u.length-w.length).replace(/(.)\/+$/,"$1")}const E=p[C];return v&&!E?m[b]=void 0:m[b]=(E||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:d,pattern:n}}function bC(n,i=!1,r=!0){nn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,h,m,b)=>{if(l.push({paramName:p,isOptional:h!=null}),h){let v=b.charAt(m+d.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(l.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,i?void 0:"i"),l]}function SC(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return nn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function Hn(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,l=n.charAt(r);return l&&l!=="/"?null:n.slice(r)||"/"}var CC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function TC(n,i="/"){let{pathname:r,search:l="",hash:s=""}=typeof n=="string"?Zi(n):n,u;return r?(r=r.replace(/\/\/+/g,"/"),r.startsWith("/")?u=fv(r.substring(1),"/"):u=fv(r,i)):u=i,{pathname:u,search:_C(l),hash:RC(s)}}function fv(n,i){let r=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function hf(n,i,r,l){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function EC(n){return n.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function rd(n){let i=EC(n);return i.map((r,l)=>l===i.length-1?r.pathname:r.pathnameBase)}function Ts(n,i,r,l=!1){let s;typeof n=="string"?s=Zi(n):(s={...n},$e(!s.pathname||!s.pathname.includes("?"),hf("?","pathname","search",s)),$e(!s.pathname||!s.pathname.includes("#"),hf("#","pathname","hash",s)),$e(!s.search||!s.search.includes("#"),hf("#","search","hash",s)));let u=n===""||s.pathname==="",d=u?"/":s.pathname,p;if(d==null)p=r;else{let v=i.length-1;if(!l&&d.startsWith("..")){let C=d.split("/");for(;C[0]==="..";)C.shift(),v-=1;s.pathname=C.join("/")}p=v>=0?i[v]:"/"}let h=TC(s,p),m=d&&d!=="/"&&d.endsWith("/"),b=(u||d===".")&&r.endsWith("/");return!h.pathname.endsWith("/")&&(m||b)&&(h.pathname+="/"),h}var mn=n=>n.join("/").replace(/\/\/+/g,"/"),wC=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),_C=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,RC=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,AC=class{constructor(n,i,r,l=!1){this.status=n,this.statusText=i||"",this.internal=l,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function NC(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function OC(n){return n.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var wy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function _y(n,i){let r=n;if(typeof r!="string"||!CC.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let l=r,s=!1;if(wy)try{let u=new URL(window.location.href),d=r.startsWith("//")?new URL(u.protocol+r):new URL(r),p=Hn(d.pathname,i);d.origin===u.origin&&p!=null?r=p+d.search+d.hash:s=!0}catch{nn(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:s,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ry=["POST","PUT","PATCH","DELETE"];new Set(Ry);var MC=["GET",...Ry];new Set(MC);var Wi=g.createContext(null);Wi.displayName="DataRouter";var Es=g.createContext(null);Es.displayName="DataRouterState";var DC=g.createContext(!1),Ay=g.createContext({isTransitioning:!1});Ay.displayName="ViewTransition";var LC=g.createContext(new Map);LC.displayName="Fetchers";var jC=g.createContext(null);jC.displayName="Await";var Ut=g.createContext(null);Ut.displayName="Navigation";var Co=g.createContext(null);Co.displayName="Location";var ln=g.createContext({outlet:null,matches:[],isDataRoute:!1});ln.displayName="Route";var od=g.createContext(null);od.displayName="RouteError";var Ny="REACT_ROUTER_ERROR",kC="REDIRECT",IC="ROUTE_ERROR_RESPONSE";function zC(n){if(n.startsWith(`${Ny}:${kC}:{`))try{let i=JSON.parse(n.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function PC(n){if(n.startsWith(`${Ny}:${IC}:{`))try{let i=JSON.parse(n.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new AC(i.status,i.statusText,i.data)}catch{}}function HC(n,{relative:i}={}){$e(Ji(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:l}=g.useContext(Ut),{hash:s,pathname:u,search:d}=To(n,{relative:i}),p=u;return r!=="/"&&(p=u==="/"?r:mn([r,u])),l.createHref({pathname:p,search:d,hash:s})}function Ji(){return g.useContext(Co)!=null}function yn(){return $e(Ji(),"useLocation() may be used only in the context of a <Router> component."),g.useContext(Co).location}var Oy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function My(n){g.useContext(Ut).static||g.useLayoutEffect(n)}function Dy(){let{isDataRoute:n}=g.useContext(ln);return n?WC():UC()}function UC(){$e(Ji(),"useNavigate() may be used only in the context of a <Router> component.");let n=g.useContext(Wi),{basename:i,navigator:r}=g.useContext(Ut),{matches:l}=g.useContext(ln),{pathname:s}=yn(),u=JSON.stringify(rd(l)),d=g.useRef(!1);return My(()=>{d.current=!0}),g.useCallback((h,m={})=>{if(nn(d.current,Oy),!d.current)return;if(typeof h=="number"){r.go(h);return}let b=Ts(h,JSON.parse(u),s,m.relative==="path");n==null&&i!=="/"&&(b.pathname=b.pathname==="/"?i:mn([i,b.pathname])),(m.replace?r.replace:r.push)(b,m.state,m)},[i,r,u,s,n])}g.createContext(null);function Ly(){let{matches:n}=g.useContext(ln),i=n[n.length-1];return i?i.params:{}}function To(n,{relative:i}={}){let{matches:r}=g.useContext(ln),{pathname:l}=yn(),s=JSON.stringify(rd(r));return g.useMemo(()=>Ts(n,JSON.parse(s),l,i==="path"),[n,s,l,i])}function BC(n,i){return jy(n,i)}function jy(n,i,r){$e(Ji(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=g.useContext(Ut),{matches:s}=g.useContext(ln),u=s[s.length-1],d=u?u.params:{},p=u?u.pathname:"/",h=u?u.pathnameBase:"/",m=u&&u.route;{let _=m&&m.path||"";Iy(p,!m||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let b=yn(),v;if(i){let _=typeof i=="string"?Zi(i):i;$e(h==="/"||_.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${_.pathname}" was given in the \`location\` prop.`),v=_}else v=b;let C=v.pathname||"/",E=C;if(h!=="/"){let _=h.replace(/^\//,"").split("/");E="/"+C.replace(/^\//,"").split("/").slice(_.length).join("/")}let w=Cy(n,{pathname:E});nn(m||w!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),nn(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=YC(w&&w.map(_=>Object.assign({},_,{params:Object.assign({},d,_.params),pathname:mn([h,l.encodeLocation?l.encodeLocation(_.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?h:mn([h,l.encodeLocation?l.encodeLocation(_.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),s,r);return i&&T?g.createElement(Co.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},T):T}function GC(){let n=ZC(),i=NC(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:l},u={padding:"2px 4px",backgroundColor:l},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=g.createElement(g.Fragment,null,g.createElement("p",null,"💿 Hey developer 👋"),g.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",g.createElement("code",{style:u},"ErrorBoundary")," or"," ",g.createElement("code",{style:u},"errorElement")," prop on your route.")),g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},i),r?g.createElement("pre",{style:s},r):null,d)}var VC=g.createElement(GC,null),ky=class extends g.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){this.props.onError?this.props.onError(n,i):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const r=PC(n.digest);r&&(n=r)}let i=n!==void 0?g.createElement(ln.Provider,{value:this.props.routeContext},g.createElement(od.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?g.createElement(FC,{error:n},i):i}};ky.contextType=DC;var mf=new WeakMap;function FC({children:n,error:i}){let{basename:r}=g.useContext(Ut);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let l=zC(i.digest);if(l){let s=mf.get(i);if(s)throw s;let u=_y(l.location,r);if(wy&&!mf.get(i))if(u.isExternal||l.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:l.replace}));throw mf.set(i,d),d}return g.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return n}function KC({routeContext:n,match:i,children:r}){let l=g.useContext(Wi);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),g.createElement(ln.Provider,{value:n},r)}function YC(n,i=[],r){let l=r?.state;if(n==null){if(!l)return null;if(l.errors)n=l.matches;else if(i.length===0&&!l.initialized&&l.matches.length>0)n=l.matches;else return null}let s=n,u=l?.errors;if(u!=null){let b=s.findIndex(v=>v.route.id&&u?.[v.route.id]!==void 0);$e(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),s=s.slice(0,Math.min(s.length,b+1))}let d=!1,p=-1;if(r&&l){d=l.renderFallback;for(let b=0;b<s.length;b++){let v=s[b];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=b),v.route.id){let{loaderData:C,errors:E}=l,w=v.route.loader&&!C.hasOwnProperty(v.route.id)&&(!E||E[v.route.id]===void 0);if(v.route.lazy||w){r.isStatic&&(d=!0),p>=0?s=s.slice(0,p+1):s=[s[0]];break}}}}let h=r?.onError,m=l&&h?(b,v)=>{h(b,{location:l.location,params:l.matches?.[0]?.params??{},unstable_pattern:OC(l.matches),errorInfo:v})}:void 0;return s.reduceRight((b,v,C)=>{let E,w=!1,T=null,_=null;l&&(E=u&&v.route.id?u[v.route.id]:void 0,T=v.route.errorElement||VC,d&&(p<0&&C===0?(Iy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,_=null):p===C&&(w=!0,_=v.route.hydrateFallbackElement||null)));let N=i.concat(s.slice(0,C+1)),M=()=>{let D;return E?D=T:w?D=_:v.route.Component?D=g.createElement(v.route.Component,null):v.route.element?D=v.route.element:D=b,g.createElement(KC,{match:v,routeContext:{outlet:b,matches:N,isDataRoute:l!=null},children:D})};return l&&(v.route.ErrorBoundary||v.route.errorElement||C===0)?g.createElement(ky,{location:l.location,revalidation:l.revalidation,component:T,error:E,children:M(),routeContext:{outlet:null,matches:N,isDataRoute:!0},onError:m}):M()},null)}function ld(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qC(n){let i=g.useContext(Wi);return $e(i,ld(n)),i}function $C(n){let i=g.useContext(Es);return $e(i,ld(n)),i}function XC(n){let i=g.useContext(ln);return $e(i,ld(n)),i}function sd(n){let i=XC(n),r=i.matches[i.matches.length-1];return $e(r.route.id,`${n} can only be used on routes that contain a unique "id"`),r.route.id}function QC(){return sd("useRouteId")}function ZC(){let n=g.useContext(od),i=$C("useRouteError"),r=sd("useRouteError");return n!==void 0?n:i.errors?.[r]}function WC(){let{router:n}=qC("useNavigate"),i=sd("useNavigate"),r=g.useRef(!1);return My(()=>{r.current=!0}),g.useCallback(async(s,u={})=>{nn(r.current,Oy),r.current&&(typeof s=="number"?await n.navigate(s):await n.navigate(s,{fromRouteId:i,...u}))},[n,i])}var dv={};function Iy(n,i,r){!i&&!dv[n]&&(dv[n]=!0,nn(!1,r))}g.memo(JC);function JC({routes:n,future:i,state:r,isStatic:l,onError:s}){return jy(n,void 0,{state:r,isStatic:l,onError:s})}function zy({to:n,replace:i,state:r,relative:l}){$e(Ji(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=g.useContext(Ut);nn(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=g.useContext(ln),{pathname:d}=yn(),p=Dy(),h=Ts(n,rd(u),d,l==="path"),m=JSON.stringify(h);return g.useEffect(()=>{p(JSON.parse(m),{replace:i,state:r,relative:l})},[p,m,l,i,r]),null}function ro(n){$e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function eT({basename:n="/",children:i=null,location:r,navigationType:l="POP",navigator:s,static:u=!1,unstable_useTransitions:d}){$e(!Ji(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=n.replace(/^\/*/,"/"),h=g.useMemo(()=>({basename:p,navigator:s,static:u,unstable_useTransitions:d,future:{}}),[p,s,u,d]);typeof r=="string"&&(r=Zi(r));let{pathname:m="/",search:b="",hash:v="",state:C=null,key:E="default",unstable_mask:w}=r,T=g.useMemo(()=>{let _=Hn(m,p);return _==null?null:{location:{pathname:_,search:b,hash:v,state:C,key:E,unstable_mask:w},navigationType:l}},[p,m,b,v,C,E,l,w]);return nn(T!=null,`<Router basename="${p}"> is not able to match the URL "${m}${b}${v}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:g.createElement(Ut.Provider,{value:h},g.createElement(Co.Provider,{children:i,value:T}))}function tT({children:n,location:i}){return BC(If(n),i)}function If(n,i=[]){let r=[];return g.Children.forEach(n,(l,s)=>{if(!g.isValidElement(l))return;let u=[...i,s];if(l.type===g.Fragment){r.push.apply(r,If(l.props.children,u));return}$e(l.type===ro,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$e(!l.props.index||!l.props.children,"An index route cannot have child routes.");let d={id:l.props.id||u.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(d.children=If(l.props.children,u)),r.push(d)}),r}var is="get",rs="application/x-www-form-urlencoded";function ws(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function nT(n){return ws(n)&&n.tagName.toLowerCase()==="button"}function aT(n){return ws(n)&&n.tagName.toLowerCase()==="form"}function iT(n){return ws(n)&&n.tagName.toLowerCase()==="input"}function rT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function oT(n,i){return n.button===0&&(!i||i==="_self")&&!rT(n)}var $l=null;function lT(){if($l===null)try{new FormData(document.createElement("form"),0),$l=!1}catch{$l=!0}return $l}var sT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gf(n){return n!=null&&!sT.has(n)?(nn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rs}"`),null):n}function cT(n,i){let r,l,s,u,d;if(aT(n)){let p=n.getAttribute("action");l=p?Hn(p,i):null,r=n.getAttribute("method")||is,s=gf(n.getAttribute("enctype"))||rs,u=new FormData(n)}else if(nT(n)||iT(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||p.getAttribute("action");if(l=h?Hn(h,i):null,r=n.getAttribute("formmethod")||p.getAttribute("method")||is,s=gf(n.getAttribute("formenctype"))||gf(p.getAttribute("enctype"))||rs,u=new FormData(p,n),!lT()){let{name:m,type:b,value:v}=n;if(b==="image"){let C=m?`${m}.`:"";u.append(`${C}x`,"0"),u.append(`${C}y`,"0")}else m&&u.append(m,v)}}else{if(ws(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=is,l=null,s=rs,d=n}return u&&s==="text/plain"&&(d=u,u=void 0),{action:l,method:r.toLowerCase(),encType:s,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function cd(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function uT(n,i,r,l){let s=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${l}`:s.pathname=`${s.pathname}.${l}`:s.pathname==="/"?s.pathname=`_root.${l}`:i&&Hn(s.pathname,i)==="/"?s.pathname=`${i.replace(/\/$/,"")}/_root.${l}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${l}`,s}async function fT(n,i){if(n.id in i)return i[n.id];try{let r=await import(n.module);return i[n.id]=r,r}catch(r){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function dT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function pT(n,i,r){let l=await Promise.all(n.map(async s=>{let u=i.routes[s.route.id];if(u){let d=await fT(u,r);return d.links?d.links():[]}return[]}));return vT(l.flat(1).filter(dT).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function pv(n,i,r,l,s,u){let d=(h,m)=>r[m]?h.route.id!==r[m].route.id:!0,p=(h,m)=>r[m].pathname!==h.pathname||r[m].route.path?.endsWith("*")&&r[m].params["*"]!==h.params["*"];return u==="assets"?i.filter((h,m)=>d(h,m)||p(h,m)):u==="data"?i.filter((h,m)=>{let b=l.routes[h.route.id];if(!b||!b.hasLoader)return!1;if(d(h,m)||p(h,m))return!0;if(h.route.shouldRevalidate){let v=h.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function hT(n,i,{includeHydrateFallback:r}={}){return mT(n.map(l=>{let s=i.routes[l.route.id];if(!s)return[];let u=[s.module];return s.clientActionModule&&(u=u.concat(s.clientActionModule)),s.clientLoaderModule&&(u=u.concat(s.clientLoaderModule)),r&&s.hydrateFallbackModule&&(u=u.concat(s.hydrateFallbackModule)),s.imports&&(u=u.concat(s.imports)),u}).flat(1))}function mT(n){return[...new Set(n)]}function gT(n){let i={},r=Object.keys(n).sort();for(let l of r)i[l]=n[l];return i}function vT(n,i){let r=new Set;return new Set(i),n.reduce((l,s)=>{let u=JSON.stringify(gT(s));return r.has(u)||(r.add(u),l.push({key:u,link:s})),l},[])}function Py(){let n=g.useContext(Wi);return cd(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function yT(){let n=g.useContext(Es);return cd(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var ud=g.createContext(void 0);ud.displayName="FrameworkContext";function Hy(){let n=g.useContext(ud);return cd(n,"You must render this element inside a <HydratedRouter> element"),n}function xT(n,i){let r=g.useContext(ud),[l,s]=g.useState(!1),[u,d]=g.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:m,onMouseLeave:b,onTouchStart:v}=i,C=g.useRef(null);g.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let T=N=>{N.forEach(M=>{d(M.isIntersecting)})},_=new IntersectionObserver(T,{threshold:.5});return C.current&&_.observe(C.current),()=>{_.disconnect()}}},[n]),g.useEffect(()=>{if(l){let T=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(T)}}},[l]);let E=()=>{s(!0)},w=()=>{s(!1),d(!1)};return r?n!=="intent"?[u,C,{}]:[u,C,{onFocus:no(p,E),onBlur:no(h,w),onMouseEnter:no(m,E),onMouseLeave:no(b,w),onTouchStart:no(v,E)}]:[!1,C,{}]}function no(n,i){return r=>{n&&n(r),r.defaultPrevented||i(r)}}function bT({page:n,...i}){let{router:r}=Py(),l=g.useMemo(()=>Cy(r.routes,n,r.basename),[r.routes,n,r.basename]);return l?g.createElement(CT,{page:n,matches:l,...i}):null}function ST(n){let{manifest:i,routeModules:r}=Hy(),[l,s]=g.useState([]);return g.useEffect(()=>{let u=!1;return pT(n,i,r).then(d=>{u||s(d)}),()=>{u=!0}},[n,i,r]),l}function CT({page:n,matches:i,...r}){let l=yn(),{future:s,manifest:u,routeModules:d}=Hy(),{basename:p}=Py(),{loaderData:h,matches:m}=yT(),b=g.useMemo(()=>pv(n,i,m,u,l,"data"),[n,i,m,u,l]),v=g.useMemo(()=>pv(n,i,m,u,l,"assets"),[n,i,m,u,l]),C=g.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let T=new Set,_=!1;if(i.forEach(M=>{let D=u.routes[M.route.id];!D||!D.hasLoader||(!b.some(H=>H.route.id===M.route.id)&&M.route.id in h&&d[M.route.id]?.shouldRevalidate||D.hasClientLoader?_=!0:T.add(M.route.id))}),T.size===0)return[];let N=uT(n,p,s.unstable_trailingSlashAwareDataRequests,"data");return _&&T.size>0&&N.searchParams.set("_routes",i.filter(M=>T.has(M.route.id)).map(M=>M.route.id).join(",")),[N.pathname+N.search]},[p,s.unstable_trailingSlashAwareDataRequests,h,l,u,b,i,n,d]),E=g.useMemo(()=>hT(v,u),[v,u]),w=ST(v);return g.createElement(g.Fragment,null,C.map(T=>g.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...r})),E.map(T=>g.createElement("link",{key:T,rel:"modulepreload",href:T,...r})),w.map(({key:T,link:_})=>g.createElement("link",{key:T,nonce:r.nonce,..._,crossOrigin:_.crossOrigin??r.crossOrigin})))}function TT(...n){return i=>{n.forEach(r=>{typeof r=="function"?r(i):r!=null&&(r.current=i)})}}var ET=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ET&&(window.__reactRouterVersion="7.13.1")}catch{}function wT({basename:n,children:i,unstable_useTransitions:r,window:l}){let s=g.useRef();s.current==null&&(s.current=rC({window:l,v5Compat:!0}));let u=s.current,[d,p]=g.useState({action:u.action,location:u.location}),h=g.useCallback(m=>{r===!1?p(m):g.startTransition(()=>p(m))},[r]);return g.useLayoutEffect(()=>u.listen(h),[u,h]),g.createElement(eT,{basename:n,children:i,location:d.location,navigationType:d.action,navigator:u,unstable_useTransitions:r})}var Uy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ge=g.forwardRef(function({onClick:i,discover:r="render",prefetch:l="none",relative:s,reloadDocument:u,replace:d,unstable_mask:p,state:h,target:m,to:b,preventScrollReset:v,viewTransition:C,unstable_defaultShouldRevalidate:E,...w},T){let{basename:_,navigator:N,unstable_useTransitions:M}=g.useContext(Ut),D=typeof b=="string"&&Uy.test(b),H=_y(b,_);b=H.to;let G=HC(b,{relative:s}),W=yn(),U=null;if(p){let ue=Ts(p,[],W.unstable_mask?W.unstable_mask.pathname:"/",!0);_!=="/"&&(ue.pathname=ue.pathname==="/"?_:mn([_,ue.pathname])),U=N.createHref(ue)}let[Y,J,te]=xT(l,w),ae=NT(b,{replace:d,unstable_mask:p,state:h,target:m,preventScrollReset:v,relative:s,viewTransition:C,unstable_defaultShouldRevalidate:E,unstable_useTransitions:M});function ne(ue){i&&i(ue),ue.defaultPrevented||ae(ue)}let re=!(H.isExternal||u),ie=g.createElement("a",{...w,...te,href:(re?U:void 0)||H.absoluteURL||G,onClick:re?ne:i,ref:TT(T,J),target:m,"data-discover":!D&&r==="render"?"true":void 0});return Y&&!D?g.createElement(g.Fragment,null,ie,g.createElement(bT,{page:G})):ie});Ge.displayName="Link";var _T=g.forwardRef(function({"aria-current":i="page",caseSensitive:r=!1,className:l="",end:s=!1,style:u,to:d,viewTransition:p,children:h,...m},b){let v=To(d,{relative:m.relative}),C=yn(),E=g.useContext(Es),{navigator:w,basename:T}=g.useContext(Ut),_=E!=null&&jT(v)&&p===!0,N=w.encodeLocation?w.encodeLocation(v).pathname:v.pathname,M=C.pathname,D=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;r||(M=M.toLowerCase(),D=D?D.toLowerCase():null,N=N.toLowerCase()),D&&T&&(D=Hn(D,T)||D);const H=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let G=M===N||!s&&M.startsWith(N)&&M.charAt(H)==="/",W=D!=null&&(D===N||!s&&D.startsWith(N)&&D.charAt(N.length)==="/"),U={isActive:G,isPending:W,isTransitioning:_},Y=G?i:void 0,J;typeof l=="function"?J=l(U):J=[l,G?"active":null,W?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let te=typeof u=="function"?u(U):u;return g.createElement(Ge,{...m,"aria-current":Y,className:J,ref:b,style:te,to:d,viewTransition:p},typeof h=="function"?h(U):h)});_T.displayName="NavLink";var RT=g.forwardRef(({discover:n="render",fetcherKey:i,navigate:r,reloadDocument:l,replace:s,state:u,method:d=is,action:p,onSubmit:h,relative:m,preventScrollReset:b,viewTransition:v,unstable_defaultShouldRevalidate:C,...E},w)=>{let{unstable_useTransitions:T}=g.useContext(Ut),_=DT(),N=LT(p,{relative:m}),M=d.toLowerCase()==="get"?"get":"post",D=typeof p=="string"&&Uy.test(p),H=G=>{if(h&&h(G),G.defaultPrevented)return;G.preventDefault();let W=G.nativeEvent.submitter,U=W?.getAttribute("formmethod")||d,Y=()=>_(W||G.currentTarget,{fetcherKey:i,method:U,navigate:r,replace:s,state:u,relative:m,preventScrollReset:b,viewTransition:v,unstable_defaultShouldRevalidate:C});T&&r!==!1?g.startTransition(()=>Y()):Y()};return g.createElement("form",{ref:w,method:M,action:N,onSubmit:l?h:H,...E,"data-discover":!D&&n==="render"?"true":void 0})});RT.displayName="Form";function AT(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function By(n){let i=g.useContext(Wi);return $e(i,AT(n)),i}function NT(n,{target:i,replace:r,unstable_mask:l,state:s,preventScrollReset:u,relative:d,viewTransition:p,unstable_defaultShouldRevalidate:h,unstable_useTransitions:m}={}){let b=Dy(),v=yn(),C=To(n,{relative:d});return g.useCallback(E=>{if(oT(E,i)){E.preventDefault();let w=r!==void 0?r:fo(v)===fo(C),T=()=>b(n,{replace:w,unstable_mask:l,state:s,preventScrollReset:u,relative:d,viewTransition:p,unstable_defaultShouldRevalidate:h});m?g.startTransition(()=>T()):T()}},[v,b,C,r,l,s,i,n,u,d,p,h,m])}var OT=0,MT=()=>`__${String(++OT)}__`;function DT(){let{router:n}=By("useSubmit"),{basename:i}=g.useContext(Ut),r=QC(),l=n.fetch,s=n.navigate;return g.useCallback(async(u,d={})=>{let{action:p,method:h,encType:m,formData:b,body:v}=cT(u,i);if(d.navigate===!1){let C=d.fetcherKey||MT();await l(C,r,d.action||p,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:b,body:v,formMethod:d.method||h,formEncType:d.encType||m,flushSync:d.flushSync})}else await s(d.action||p,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:b,body:v,formMethod:d.method||h,formEncType:d.encType||m,replace:d.replace,state:d.state,fromRouteId:r,flushSync:d.flushSync,viewTransition:d.viewTransition})},[l,s,i,r])}function LT(n,{relative:i}={}){let{basename:r}=g.useContext(Ut),l=g.useContext(ln);$e(l,"useFormAction must be used inside a RouteContext");let[s]=l.matches.slice(-1),u={...To(n||".",{relative:i})},d=yn();if(n==null){u.search=d.search;let p=new URLSearchParams(u.search),h=p.getAll("index");if(h.some(b=>b==="")){p.delete("index"),h.filter(v=>v).forEach(v=>p.append("index",v));let b=p.toString();u.search=b?`?${b}`:""}}return(!n||n===".")&&s.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(u.pathname=u.pathname==="/"?r:mn([r,u.pathname])),fo(u)}function jT(n,{relative:i}={}){let r=g.useContext(Ay);$e(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=By("useViewTransitionState"),s=To(n,{relative:i});if(!r.isTransitioning)return!1;let u=Hn(r.currentLocation.pathname,l)||r.currentLocation.pathname,d=Hn(r.nextLocation.pathname,l)||r.nextLocation.pathname;return cs(s.pathname,d)!=null||cs(s.pathname,u)!=null}var Eo=Sy();const kT=by(Eo),ve=n=>typeof n=="string",ao=()=>{let n,i;const r=new Promise((l,s)=>{n=l,i=s});return r.resolve=n,r.reject=i,r},hv=n=>n==null?"":""+n,IT=(n,i,r)=>{n.forEach(l=>{i[l]&&(r[l]=i[l])})},zT=/###/g,mv=n=>n&&n.indexOf("###")>-1?n.replace(zT,"."):n,gv=n=>!n||ve(n),so=(n,i,r)=>{const l=ve(i)?i.split("."):i;let s=0;for(;s<l.length-1;){if(gv(n))return{};const u=mv(l[s]);!n[u]&&r&&(n[u]=new r),Object.prototype.hasOwnProperty.call(n,u)?n=n[u]:n={},++s}return gv(n)?{}:{obj:n,k:mv(l[s])}},vv=(n,i,r)=>{const{obj:l,k:s}=so(n,i,Object);if(l!==void 0||i.length===1){l[s]=r;return}let u=i[i.length-1],d=i.slice(0,i.length-1),p=so(n,d,Object);for(;p.obj===void 0&&d.length;)u=`${d[d.length-1]}.${u}`,d=d.slice(0,d.length-1),p=so(n,d,Object),p?.obj&&typeof p.obj[`${p.k}.${u}`]<"u"&&(p.obj=void 0);p.obj[`${p.k}.${u}`]=r},PT=(n,i,r,l)=>{const{obj:s,k:u}=so(n,i,Object);s[u]=s[u]||[],s[u].push(r)},us=(n,i)=>{const{obj:r,k:l}=so(n,i);if(r&&Object.prototype.hasOwnProperty.call(r,l))return r[l]},HT=(n,i,r)=>{const l=us(n,r);return l!==void 0?l:us(i,r)},Gy=(n,i,r)=>{for(const l in i)l!=="__proto__"&&l!=="constructor"&&(l in n?ve(n[l])||n[l]instanceof String||ve(i[l])||i[l]instanceof String?r&&(n[l]=i[l]):Gy(n[l],i[l],r):n[l]=i[l]);return n},Ka=n=>n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var UT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const BT=n=>ve(n)?n.replace(/[&<>"'\/]/g,i=>UT[i]):n;class GT{constructor(i){this.capacity=i,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(i){const r=this.regExpMap.get(i);if(r!==void 0)return r;const l=new RegExp(i);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(i,l),this.regExpQueue.push(i),l}}const VT=[" ",",","?","!",";"],FT=new GT(20),KT=(n,i,r)=>{i=i||"",r=r||"";const l=VT.filter(d=>i.indexOf(d)<0&&r.indexOf(d)<0);if(l.length===0)return!0;const s=FT.getRegExp(`(${l.map(d=>d==="?"?"\\?":d).join("|")})`);let u=!s.test(n);if(!u){const d=n.indexOf(r);d>0&&!s.test(n.substring(0,d))&&(u=!0)}return u},zf=(n,i,r=".")=>{if(!n)return;if(n[i])return Object.prototype.hasOwnProperty.call(n,i)?n[i]:void 0;const l=i.split(r);let s=n;for(let u=0;u<l.length;){if(!s||typeof s!="object")return;let d,p="";for(let h=u;h<l.length;++h)if(h!==u&&(p+=r),p+=l[h],d=s[p],d!==void 0){if(["string","number","boolean"].indexOf(typeof d)>-1&&h<l.length-1)continue;u+=h-u+1;break}s=d}return s},po=n=>n?.replace(/_/g,"-"),YT={type:"logger",log(n){this.output("log",n)},warn(n){this.output("warn",n)},error(n){this.output("error",n)},output(n,i){console?.[n]?.apply?.(console,i)}};class fs{constructor(i,r={}){this.init(i,r)}init(i,r={}){this.prefix=r.prefix||"i18next:",this.logger=i||YT,this.options=r,this.debug=r.debug}log(...i){return this.forward(i,"log","",!0)}warn(...i){return this.forward(i,"warn","",!0)}error(...i){return this.forward(i,"error","")}deprecate(...i){return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(i,r,l,s){return s&&!this.debug?null:(ve(i[0])&&(i[0]=`${l}${this.prefix} ${i[0]}`),this.logger[r](i))}create(i){return new fs(this.logger,{prefix:`${this.prefix}:${i}:`,...this.options})}clone(i){return i=i||this.options,i.prefix=i.prefix||this.prefix,new fs(this.logger,i)}}var pn=new fs;class _s{constructor(){this.observers={}}on(i,r){return i.split(" ").forEach(l=>{this.observers[l]||(this.observers[l]=new Map);const s=this.observers[l].get(r)||0;this.observers[l].set(r,s+1)}),this}off(i,r){if(this.observers[i]){if(!r){delete this.observers[i];return}this.observers[i].delete(r)}}emit(i,...r){this.observers[i]&&Array.from(this.observers[i].entries()).forEach(([s,u])=>{for(let d=0;d<u;d++)s(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([s,u])=>{for(let d=0;d<u;d++)s.apply(s,[i,...r])})}}class yv extends _s{constructor(i,r={ns:["translation"],defaultNS:"translation"}){super(),this.data=i||{},this.options=r,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(i){this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}removeNamespaces(i){const r=this.options.ns.indexOf(i);r>-1&&this.options.ns.splice(r,1)}getResource(i,r,l,s={}){const u=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,d=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let p;i.indexOf(".")>-1?p=i.split("."):(p=[i,r],l&&(Array.isArray(l)?p.push(...l):ve(l)&&u?p.push(...l.split(u)):p.push(l)));const h=us(this.data,p);return!h&&!r&&!l&&i.indexOf(".")>-1&&(i=p[0],r=p[1],l=p.slice(2).join(".")),h||!d||!ve(l)?h:zf(this.data?.[i]?.[r],l,u)}addResource(i,r,l,s,u={silent:!1}){const d=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator;let p=[i,r];l&&(p=p.concat(d?l.split(d):l)),i.indexOf(".")>-1&&(p=i.split("."),s=r,r=p[1]),this.addNamespaces(r),vv(this.data,p,s),u.silent||this.emit("added",i,r,l,s)}addResources(i,r,l,s={silent:!1}){for(const u in l)(ve(l[u])||Array.isArray(l[u]))&&this.addResource(i,r,u,l[u],{silent:!0});s.silent||this.emit("added",i,r,l)}addResourceBundle(i,r,l,s,u,d={silent:!1,skipCopy:!1}){let p=[i,r];i.indexOf(".")>-1&&(p=i.split("."),s=l,l=r,r=p[1]),this.addNamespaces(r);let h=us(this.data,p)||{};d.skipCopy||(l=JSON.parse(JSON.stringify(l))),s?Gy(h,l,u):h={...h,...l},vv(this.data,p,h),d.silent||this.emit("added",i,r,l)}removeResourceBundle(i,r){this.hasResourceBundle(i,r)&&delete this.data[i][r],this.removeNamespaces(r),this.emit("removed",i,r)}hasResourceBundle(i,r){return this.getResource(i,r)!==void 0}getResourceBundle(i,r){return r||(r=this.options.defaultNS),this.getResource(i,r)}getDataByLanguage(i){return this.data[i]}hasLanguageSomeTranslations(i){const r=this.getDataByLanguage(i);return!!(r&&Object.keys(r)||[]).find(s=>r[s]&&Object.keys(r[s]).length>0)}toJSON(){return this.data}}var Vy={processors:{},addPostProcessor(n){this.processors[n.name]=n},handle(n,i,r,l,s){return n.forEach(u=>{i=this.processors[u]?.process(i,r,l,s)??i}),i}};const Fy=Symbol("i18next/PATH_KEY");function qT(){const n=[],i=Object.create(null);let r;return i.get=(l,s)=>(r?.revoke?.(),s===Fy?n:(n.push(s),r=Proxy.revocable(l,i),r.proxy)),Proxy.revocable(Object.create(null),i).proxy}function co(n,i){const{[Fy]:r}=n(qT()),l=i?.keySeparator??".",s=i?.nsSeparator??":";if(r.length>1&&s){const u=i?.ns;if((u?Array.isArray(u)?u:[u]:[]).includes(r[0]))return`${r[0]}${s}${r.slice(1).join(l)}`}return r.join(l)}const xv={},vf=n=>!ve(n)&&typeof n!="boolean"&&typeof n!="number";class ds extends _s{constructor(i,r={}){super(),IT(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],i,this),this.options=r,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=pn.create("translator")}changeLanguage(i){i&&(this.language=i)}exists(i,r={interpolation:{}}){const l={...r};if(i==null)return!1;const s=this.resolve(i,l);if(s?.res===void 0)return!1;const u=vf(s.res);return!(l.returnObjects===!1&&u)}extractFromKey(i,r){let l=r.nsSeparator!==void 0?r.nsSeparator:this.options.nsSeparator;l===void 0&&(l=":");const s=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let u=r.ns||this.options.defaultNS||[];const d=l&&i.indexOf(l)>-1,p=!this.options.userDefinedKeySeparator&&!r.keySeparator&&!this.options.userDefinedNsSeparator&&!r.nsSeparator&&!KT(i,l,s);if(d&&!p){const h=i.match(this.interpolator.nestingRegexp);if(h&&h.length>0)return{key:i,namespaces:ve(u)?[u]:u};const m=i.split(l);(l!==s||l===s&&this.options.ns.indexOf(m[0])>-1)&&(u=m.shift()),i=m.join(s)}return{key:i,namespaces:ve(u)?[u]:u}}translate(i,r,l){let s=typeof r=="object"?{...r}:r;if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),i==null)return"";typeof i=="function"&&(i=co(i,{...this.options,...s})),Array.isArray(i)||(i=[String(i)]),i=i.map(re=>typeof re=="function"?co(re,{...this.options,...s}):String(re));const u=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,d=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:p,namespaces:h}=this.extractFromKey(i[i.length-1],s),m=h[h.length-1];let b=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;b===void 0&&(b=":");const v=s.lng||this.language,C=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(v?.toLowerCase()==="cimode")return C?u?{res:`${m}${b}${p}`,usedKey:p,exactUsedKey:p,usedLng:v,usedNS:m,usedParams:this.getUsedParamsDetails(s)}:`${m}${b}${p}`:u?{res:p,usedKey:p,exactUsedKey:p,usedLng:v,usedNS:m,usedParams:this.getUsedParamsDetails(s)}:p;const E=this.resolve(i,s);let w=E?.res;const T=E?.usedKey||p,_=E?.exactUsedKey||p,N=["[object Number]","[object Function]","[object RegExp]"],M=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,D=!this.i18nFormat||this.i18nFormat.handleAsObject,H=s.count!==void 0&&!ve(s.count),G=ds.hasDefaultValue(s),W=H?this.pluralResolver.getSuffix(v,s.count,s):"",U=s.ordinal&&H?this.pluralResolver.getSuffix(v,s.count,{ordinal:!1}):"",Y=H&&!s.ordinal&&s.count===0,J=Y&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${W}`]||s[`defaultValue${U}`]||s.defaultValue;let te=w;D&&!w&&G&&(te=J);const ae=vf(te),ne=Object.prototype.toString.apply(te);if(D&&te&&ae&&N.indexOf(ne)<0&&!(ve(M)&&Array.isArray(te))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const re=this.options.returnedObjectHandler?this.options.returnedObjectHandler(T,te,{...s,ns:h}):`key '${p} (${this.language})' returned an object instead of string.`;return u?(E.res=re,E.usedParams=this.getUsedParamsDetails(s),E):re}if(d){const re=Array.isArray(te),ie=re?[]:{},ue=re?_:T;for(const L in te)if(Object.prototype.hasOwnProperty.call(te,L)){const K=`${ue}${d}${L}`;G&&!w?ie[L]=this.translate(K,{...s,defaultValue:vf(J)?J[L]:void 0,joinArrays:!1,ns:h}):ie[L]=this.translate(K,{...s,joinArrays:!1,ns:h}),ie[L]===K&&(ie[L]=te[L])}w=ie}}else if(D&&ve(M)&&Array.isArray(w))w=w.join(M),w&&(w=this.extendTranslation(w,i,s,l));else{let re=!1,ie=!1;!this.isValidLookup(w)&&G&&(re=!0,w=J),this.isValidLookup(w)||(ie=!0,w=p);const L=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&ie?void 0:w,K=G&&J!==w&&this.options.updateMissing;if(ie||re||K){if(this.logger.log(K?"updateKey":"missingKey",v,m,p,K?J:w),d){const R=this.resolve(p,{...s,keySeparator:!1});R&&R.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let z=[];const Z=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Z&&Z[0])for(let R=0;R<Z.length;R++)z.push(Z[R]);else this.options.saveMissingTo==="all"?z=this.languageUtils.toResolveHierarchy(s.lng||this.language):z.push(s.lng||this.language);const pe=(R,V,Q)=>{const ee=G&&Q!==w?Q:L;this.options.missingKeyHandler?this.options.missingKeyHandler(R,m,V,ee,K,s):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(R,m,V,ee,K,s),this.emit("missingKey",R,m,V,w)};this.options.saveMissing&&(this.options.saveMissingPlurals&&H?z.forEach(R=>{const V=this.pluralResolver.getSuffixes(R,s);Y&&s[`defaultValue${this.options.pluralSeparator}zero`]&&V.indexOf(`${this.options.pluralSeparator}zero`)<0&&V.push(`${this.options.pluralSeparator}zero`),V.forEach(Q=>{pe([R],p+Q,s[`defaultValue${Q}`]||J)})}):pe(z,p,J))}w=this.extendTranslation(w,i,s,E,l),ie&&w===p&&this.options.appendNamespaceToMissingKey&&(w=`${m}${b}${p}`),(ie||re)&&this.options.parseMissingKeyHandler&&(w=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${m}${b}${p}`:p,re?w:void 0,s))}return u?(E.res=w,E.usedParams=this.getUsedParamsDetails(s),E):w}extendTranslation(i,r,l,s,u){if(this.i18nFormat?.parse)i=this.i18nFormat.parse(i,{...this.options.interpolation.defaultVariables,...l},l.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!l.skipInterpolation){l.interpolation&&this.interpolator.init({...l,interpolation:{...this.options.interpolation,...l.interpolation}});const h=ve(i)&&(l?.interpolation?.skipOnVariables!==void 0?l.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let m;if(h){const v=i.match(this.interpolator.nestingRegexp);m=v&&v.length}let b=l.replace&&!ve(l.replace)?l.replace:l;if(this.options.interpolation.defaultVariables&&(b={...this.options.interpolation.defaultVariables,...b}),i=this.interpolator.interpolate(i,b,l.lng||this.language||s.usedLng,l),h){const v=i.match(this.interpolator.nestingRegexp),C=v&&v.length;m<C&&(l.nest=!1)}!l.lng&&s&&s.res&&(l.lng=this.language||s.usedLng),l.nest!==!1&&(i=this.interpolator.nest(i,(...v)=>u?.[0]===v[0]&&!l.context?(this.logger.warn(`It seems you are nesting recursively key: ${v[0]} in key: ${r[0]}`),null):this.translate(...v,r),l)),l.interpolation&&this.interpolator.reset()}const d=l.postProcess||this.options.postProcess,p=ve(d)?[d]:d;return i!=null&&p?.length&&l.applyPostProcessor!==!1&&(i=Vy.handle(p,i,r,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(l)},...l}:l,this)),i}resolve(i,r={}){let l,s,u,d,p;return ve(i)&&(i=[i]),Array.isArray(i)&&(i=i.map(h=>typeof h=="function"?co(h,{...this.options,...r}):h)),i.forEach(h=>{if(this.isValidLookup(l))return;const m=this.extractFromKey(h,r),b=m.key;s=b;let v=m.namespaces;this.options.fallbackNS&&(v=v.concat(this.options.fallbackNS));const C=r.count!==void 0&&!ve(r.count),E=C&&!r.ordinal&&r.count===0,w=r.context!==void 0&&(ve(r.context)||typeof r.context=="number")&&r.context!=="",T=r.lngs?r.lngs:this.languageUtils.toResolveHierarchy(r.lng||this.language,r.fallbackLng);v.forEach(_=>{this.isValidLookup(l)||(p=_,!xv[`${T[0]}-${_}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(p)&&(xv[`${T[0]}-${_}`]=!0,this.logger.warn(`key "${s}" for languages "${T.join(", ")}" won't get resolved as namespace "${p}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),T.forEach(N=>{if(this.isValidLookup(l))return;d=N;const M=[b];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(M,b,N,_,r);else{let H;C&&(H=this.pluralResolver.getSuffix(N,r.count,r));const G=`${this.options.pluralSeparator}zero`,W=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(C&&(r.ordinal&&H.indexOf(W)===0&&M.push(b+H.replace(W,this.options.pluralSeparator)),M.push(b+H),E&&M.push(b+G)),w){const U=`${b}${this.options.contextSeparator||"_"}${r.context}`;M.push(U),C&&(r.ordinal&&H.indexOf(W)===0&&M.push(U+H.replace(W,this.options.pluralSeparator)),M.push(U+H),E&&M.push(U+G))}}let D;for(;D=M.pop();)this.isValidLookup(l)||(u=D,l=this.getResource(N,_,D,r))}))})}),{res:l,usedKey:s,exactUsedKey:u,usedLng:d,usedNS:p}}isValidLookup(i){return i!==void 0&&!(!this.options.returnNull&&i===null)&&!(!this.options.returnEmptyString&&i==="")}getResource(i,r,l,s={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(i,r,l,s):this.resourceStore.getResource(i,r,l,s)}getUsedParamsDetails(i={}){const r=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],l=i.replace&&!ve(i.replace);let s=l?i.replace:i;if(l&&typeof i.count<"u"&&(s.count=i.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!l){s={...s};for(const u of r)delete s[u]}return s}static hasDefaultValue(i){const r="defaultValue";for(const l in i)if(Object.prototype.hasOwnProperty.call(i,l)&&r===l.substring(0,r.length)&&i[l]!==void 0)return!0;return!1}}class bv{constructor(i){this.options=i,this.supportedLngs=this.options.supportedLngs||!1,this.logger=pn.create("languageUtils")}getScriptPartFromCode(i){if(i=po(i),!i||i.indexOf("-")<0)return null;const r=i.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}getLanguagePartFromCode(i){if(i=po(i),!i||i.indexOf("-")<0)return i;const r=i.split("-");return this.formatLanguageCode(r[0])}formatLanguageCode(i){if(ve(i)&&i.indexOf("-")>-1){let r;try{r=Intl.getCanonicalLocales(i)[0]}catch{}return r&&this.options.lowerCaseLng&&(r=r.toLowerCase()),r||(this.options.lowerCaseLng?i.toLowerCase():i)}return this.options.cleanCode||this.options.lowerCaseLng?i.toLowerCase():i}isSupportedCode(i){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(i=this.getLanguagePartFromCode(i)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(i)>-1}getBestMatchFromCodes(i){if(!i)return null;let r;return i.forEach(l=>{if(r)return;const s=this.formatLanguageCode(l);(!this.options.supportedLngs||this.isSupportedCode(s))&&(r=s)}),!r&&this.options.supportedLngs&&i.forEach(l=>{if(r)return;const s=this.getScriptPartFromCode(l);if(this.isSupportedCode(s))return r=s;const u=this.getLanguagePartFromCode(l);if(this.isSupportedCode(u))return r=u;r=this.options.supportedLngs.find(d=>{if(d===u)return d;if(!(d.indexOf("-")<0&&u.indexOf("-")<0)&&(d.indexOf("-")>0&&u.indexOf("-")<0&&d.substring(0,d.indexOf("-"))===u||d.indexOf(u)===0&&u.length>1))return d})}),r||(r=this.getFallbackCodes(this.options.fallbackLng)[0]),r}getFallbackCodes(i,r){if(!i)return[];if(typeof i=="function"&&(i=i(r)),ve(i)&&(i=[i]),Array.isArray(i))return i;if(!r)return i.default||[];let l=i[r];return l||(l=i[this.getScriptPartFromCode(r)]),l||(l=i[this.formatLanguageCode(r)]),l||(l=i[this.getLanguagePartFromCode(r)]),l||(l=i.default),l||[]}toResolveHierarchy(i,r){const l=this.getFallbackCodes((r===!1?[]:r)||this.options.fallbackLng||[],i),s=[],u=d=>{d&&(this.isSupportedCode(d)?s.push(d):this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`))};return ve(i)&&(i.indexOf("-")>-1||i.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(i)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(i)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(i))):ve(i)&&u(this.formatLanguageCode(i)),l.forEach(d=>{s.indexOf(d)<0&&u(this.formatLanguageCode(d))}),s}}const Sv={zero:0,one:1,two:2,few:3,many:4,other:5},Cv={select:n=>n===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class $T{constructor(i,r={}){this.languageUtils=i,this.options=r,this.logger=pn.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(i,r={}){const l=po(i==="dev"?"en":i),s=r.ordinal?"ordinal":"cardinal",u=JSON.stringify({cleanedCode:l,type:s});if(u in this.pluralRulesCache)return this.pluralRulesCache[u];let d;try{d=new Intl.PluralRules(l,{type:s})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),Cv;if(!i.match(/-|_/))return Cv;const h=this.languageUtils.getLanguagePartFromCode(i);d=this.getRule(h,r)}return this.pluralRulesCache[u]=d,d}needsPlural(i,r={}){let l=this.getRule(i,r);return l||(l=this.getRule("dev",r)),l?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(i,r,l={}){return this.getSuffixes(i,l).map(s=>`${r}${s}`)}getSuffixes(i,r={}){let l=this.getRule(i,r);return l||(l=this.getRule("dev",r)),l?l.resolvedOptions().pluralCategories.sort((s,u)=>Sv[s]-Sv[u]).map(s=>`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(i,r,l={}){const s=this.getRule(i,l);return s?`${this.options.prepend}${l.ordinal?`ordinal${this.options.prepend}`:""}${s.select(r)}`:(this.logger.warn(`no plural rule found for: ${i}`),this.getSuffix("dev",r,l))}}const Tv=(n,i,r,l=".",s=!0)=>{let u=HT(n,i,r);return!u&&s&&ve(r)&&(u=zf(n,r,l),u===void 0&&(u=zf(i,r,l))),u},yf=n=>n.replace(/\$/g,"$$$$");class Ev{constructor(i={}){this.logger=pn.create("interpolator"),this.options=i,this.format=i?.interpolation?.format||(r=>r),this.init(i)}init(i={}){i.interpolation||(i.interpolation={escapeValue:!0});const{escape:r,escapeValue:l,useRawValueToEscape:s,prefix:u,prefixEscaped:d,suffix:p,suffixEscaped:h,formatSeparator:m,unescapeSuffix:b,unescapePrefix:v,nestingPrefix:C,nestingPrefixEscaped:E,nestingSuffix:w,nestingSuffixEscaped:T,nestingOptionsSeparator:_,maxReplaces:N,alwaysFormat:M}=i.interpolation;this.escape=r!==void 0?r:BT,this.escapeValue=l!==void 0?l:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=u?Ka(u):d||"{{",this.suffix=p?Ka(p):h||"}}",this.formatSeparator=m||",",this.unescapePrefix=b?"":v||"-",this.unescapeSuffix=this.unescapePrefix?"":b||"",this.nestingPrefix=C?Ka(C):E||Ka("$t("),this.nestingSuffix=w?Ka(w):T||Ka(")"),this.nestingOptionsSeparator=_||",",this.maxReplaces=N||1e3,this.alwaysFormat=M!==void 0?M:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const i=(r,l)=>r?.source===l?(r.lastIndex=0,r):new RegExp(l,"g");this.regexp=i(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=i(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=i(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(i,r,l,s){let u,d,p;const h=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},m=E=>{if(E.indexOf(this.formatSeparator)<0){const N=Tv(r,h,E,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(N,void 0,l,{...s,...r,interpolationkey:E}):N}const w=E.split(this.formatSeparator),T=w.shift().trim(),_=w.join(this.formatSeparator).trim();return this.format(Tv(r,h,T,this.options.keySeparator,this.options.ignoreJSONStructure),_,l,{...s,...r,interpolationkey:T})};this.resetRegExp();const b=s?.missingInterpolationHandler||this.options.missingInterpolationHandler,v=s?.interpolation?.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:E=>yf(E)},{regex:this.regexp,safeValue:E=>this.escapeValue?yf(this.escape(E)):yf(E)}].forEach(E=>{for(p=0;u=E.regex.exec(i);){const w=u[1].trim();if(d=m(w),d===void 0)if(typeof b=="function"){const _=b(i,u,s);d=ve(_)?_:""}else if(s&&Object.prototype.hasOwnProperty.call(s,w))d="";else if(v){d=u[0];continue}else this.logger.warn(`missed to pass in variable ${w} for interpolating ${i}`),d="";else!ve(d)&&!this.useRawValueToEscape&&(d=hv(d));const T=E.safeValue(d);if(i=i.replace(u[0],T),v?(E.regex.lastIndex+=d.length,E.regex.lastIndex-=u[0].length):E.regex.lastIndex=0,p++,p>=this.maxReplaces)break}}),i}nest(i,r,l={}){let s,u,d;const p=(h,m)=>{const b=this.nestingOptionsSeparator;if(h.indexOf(b)<0)return h;const v=h.split(new RegExp(`${Ka(b)}[ ]*{`));let C=`{${v[1]}`;h=v[0],C=this.interpolate(C,d);const E=C.match(/'/g),w=C.match(/"/g);((E?.length??0)%2===0&&!w||(w?.length??0)%2!==0)&&(C=C.replace(/'/g,'"'));try{d=JSON.parse(C),m&&(d={...m,...d})}catch(T){return this.logger.warn(`failed parsing options string in nesting for key ${h}`,T),`${h}${b}${C}`}return d.defaultValue&&d.defaultValue.indexOf(this.prefix)>-1&&delete d.defaultValue,h};for(;s=this.nestingRegexp.exec(i);){let h=[];d={...l},d=d.replace&&!ve(d.replace)?d.replace:d,d.applyPostProcessor=!1,delete d.defaultValue;const m=/{.*}/.test(s[1])?s[1].lastIndexOf("}")+1:s[1].indexOf(this.formatSeparator);if(m!==-1&&(h=s[1].slice(m).split(this.formatSeparator).map(b=>b.trim()).filter(Boolean),s[1]=s[1].slice(0,m)),u=r(p.call(this,s[1].trim(),d),d),u&&s[0]===i&&!ve(u))return u;ve(u)||(u=hv(u)),u||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${i}`),u=""),h.length&&(u=h.reduce((b,v)=>this.format(b,v,l.lng,{...l,interpolationkey:s[1].trim()}),u.trim())),i=i.replace(s[0],u),this.regexp.lastIndex=0}return i}}const XT=n=>{let i=n.toLowerCase().trim();const r={};if(n.indexOf("(")>-1){const l=n.split("(");i=l[0].toLowerCase().trim();const s=l[1].substring(0,l[1].length-1);i==="currency"&&s.indexOf(":")<0?r.currency||(r.currency=s.trim()):i==="relativetime"&&s.indexOf(":")<0?r.range||(r.range=s.trim()):s.split(";").forEach(d=>{if(d){const[p,...h]=d.split(":"),m=h.join(":").trim().replace(/^'+|'+$/g,""),b=p.trim();r[b]||(r[b]=m),m==="false"&&(r[b]=!1),m==="true"&&(r[b]=!0),isNaN(m)||(r[b]=parseInt(m,10))}})}return{formatName:i,formatOptions:r}},wv=n=>{const i={};return(r,l,s)=>{let u=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(u={...u,[s.interpolationkey]:void 0});const d=l+JSON.stringify(u);let p=i[d];return p||(p=n(po(l),s),i[d]=p),p(r)}},QT=n=>(i,r,l)=>n(po(r),l)(i);class ZT{constructor(i={}){this.logger=pn.create("formatter"),this.options=i,this.init(i)}init(i,r={interpolation:{}}){this.formatSeparator=r.interpolation.formatSeparator||",";const l=r.cacheInBuiltFormats?wv:QT;this.formats={number:l((s,u)=>{const d=new Intl.NumberFormat(s,{...u});return p=>d.format(p)}),currency:l((s,u)=>{const d=new Intl.NumberFormat(s,{...u,style:"currency"});return p=>d.format(p)}),datetime:l((s,u)=>{const d=new Intl.DateTimeFormat(s,{...u});return p=>d.format(p)}),relativetime:l((s,u)=>{const d=new Intl.RelativeTimeFormat(s,{...u});return p=>d.format(p,u.range||"day")}),list:l((s,u)=>{const d=new Intl.ListFormat(s,{...u});return p=>d.format(p)})}}add(i,r){this.formats[i.toLowerCase().trim()]=r}addCached(i,r){this.formats[i.toLowerCase().trim()]=wv(r)}format(i,r,l,s={}){const u=r.split(this.formatSeparator);if(u.length>1&&u[0].indexOf("(")>1&&u[0].indexOf(")")<0&&u.find(p=>p.indexOf(")")>-1)){const p=u.findIndex(h=>h.indexOf(")")>-1);u[0]=[u[0],...u.splice(1,p)].join(this.formatSeparator)}return u.reduce((p,h)=>{const{formatName:m,formatOptions:b}=XT(h);if(this.formats[m]){let v=p;try{const C=s?.formatParams?.[s.interpolationkey]||{},E=C.locale||C.lng||s.locale||s.lng||l;v=this.formats[m](p,E,{...b,...s,...C})}catch(C){this.logger.warn(C)}return v}else this.logger.warn(`there was no format function for ${m}`);return p},i)}}const WT=(n,i)=>{n.pending[i]!==void 0&&(delete n.pending[i],n.pendingCount--)};class JT extends _s{constructor(i,r,l,s={}){super(),this.backend=i,this.store=r,this.services=l,this.languageUtils=l.languageUtils,this.options=s,this.logger=pn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(l,s.backend,s)}queueLoad(i,r,l,s){const u={},d={},p={},h={};return i.forEach(m=>{let b=!0;r.forEach(v=>{const C=`${m}|${v}`;!l.reload&&this.store.hasResourceBundle(m,v)?this.state[C]=2:this.state[C]<0||(this.state[C]===1?d[C]===void 0&&(d[C]=!0):(this.state[C]=1,b=!1,d[C]===void 0&&(d[C]=!0),u[C]===void 0&&(u[C]=!0),h[v]===void 0&&(h[v]=!0)))}),b||(p[m]=!0)}),(Object.keys(u).length||Object.keys(d).length)&&this.queue.push({pending:d,pendingCount:Object.keys(d).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(u),pending:Object.keys(d),toLoadLanguages:Object.keys(p),toLoadNamespaces:Object.keys(h)}}loaded(i,r,l){const s=i.split("|"),u=s[0],d=s[1];r&&this.emit("failedLoading",u,d,r),!r&&l&&this.store.addResourceBundle(u,d,l,void 0,void 0,{skipCopy:!0}),this.state[i]=r?-1:2,r&&l&&(this.state[i]=0);const p={};this.queue.forEach(h=>{PT(h.loaded,[u],d),WT(h,i),r&&h.errors.push(r),h.pendingCount===0&&!h.done&&(Object.keys(h.loaded).forEach(m=>{p[m]||(p[m]={});const b=h.loaded[m];b.length&&b.forEach(v=>{p[m][v]===void 0&&(p[m][v]=!0)})}),h.done=!0,h.errors.length?h.callback(h.errors):h.callback())}),this.emit("loaded",p),this.queue=this.queue.filter(h=>!h.done)}read(i,r,l,s=0,u=this.retryTimeout,d){if(!i.length)return d(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:i,ns:r,fcName:l,tried:s,wait:u,callback:d});return}this.readingCalls++;const p=(m,b)=>{if(this.readingCalls--,this.waitingReads.length>0){const v=this.waitingReads.shift();this.read(v.lng,v.ns,v.fcName,v.tried,v.wait,v.callback)}if(m&&b&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,i,r,l,s+1,u*2,d)},u);return}d(m,b)},h=this.backend[l].bind(this.backend);if(h.length===2){try{const m=h(i,r);m&&typeof m.then=="function"?m.then(b=>p(null,b)).catch(p):p(null,m)}catch(m){p(m)}return}return h(i,r,p)}prepareLoading(i,r,l={},s){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();ve(i)&&(i=this.languageUtils.toResolveHierarchy(i)),ve(r)&&(r=[r]);const u=this.queueLoad(i,r,l,s);if(!u.toLoad.length)return u.pending.length||s(),null;u.toLoad.forEach(d=>{this.loadOne(d)})}load(i,r,l){this.prepareLoading(i,r,{},l)}reload(i,r,l){this.prepareLoading(i,r,{reload:!0},l)}loadOne(i,r=""){const l=i.split("|"),s=l[0],u=l[1];this.read(s,u,"read",void 0,void 0,(d,p)=>{d&&this.logger.warn(`${r}loading namespace ${u} for language ${s} failed`,d),!d&&p&&this.logger.log(`${r}loaded namespace ${u} for language ${s}`,p),this.loaded(i,d,p)})}saveMissing(i,r,l,s,u,d={},p=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(r)){this.logger.warn(`did not save key "${l}" as the namespace "${r}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(l==null||l==="")){if(this.backend?.create){const h={...d,isUpdate:u},m=this.backend.create.bind(this.backend);if(m.length<6)try{let b;m.length===5?b=m(i,r,l,s,h):b=m(i,r,l,s),b&&typeof b.then=="function"?b.then(v=>p(null,v)).catch(p):p(null,b)}catch(b){p(b)}else m(i,r,l,s,p,h)}!i||!i[0]||this.store.addResource(i[0],r,l,s)}}}const xf=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:n=>{let i={};if(typeof n[1]=="object"&&(i=n[1]),ve(n[1])&&(i.defaultValue=n[1]),ve(n[2])&&(i.tDescription=n[2]),typeof n[2]=="object"||typeof n[3]=="object"){const r=n[3]||n[2];Object.keys(r).forEach(l=>{i[l]=r[l]})}return i},interpolation:{escapeValue:!0,format:n=>n,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),_v=n=>(ve(n.ns)&&(n.ns=[n.ns]),ve(n.fallbackLng)&&(n.fallbackLng=[n.fallbackLng]),ve(n.fallbackNS)&&(n.fallbackNS=[n.fallbackNS]),n.supportedLngs?.indexOf?.("cimode")<0&&(n.supportedLngs=n.supportedLngs.concat(["cimode"])),typeof n.initImmediate=="boolean"&&(n.initAsync=n.initImmediate),n),Xl=()=>{},eE=n=>{Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(r=>{typeof n[r]=="function"&&(n[r]=n[r].bind(n))})},Ky="__i18next_supportNoticeShown",tE=()=>typeof globalThis<"u"&&!!globalThis[Ky],nE=()=>{typeof globalThis<"u"&&(globalThis[Ky]=!0)},aE=n=>!!(n?.modules?.backend?.name?.indexOf("Locize")>0||n?.modules?.backend?.constructor?.name?.indexOf("Locize")>0||n?.options?.backend?.backends&&n.options.backend.backends.some(i=>i?.name?.indexOf("Locize")>0||i?.constructor?.name?.indexOf("Locize")>0)||n?.options?.backend?.projectId||n?.options?.backend?.backendOptions&&n.options.backend.backendOptions.some(i=>i?.projectId));class uo extends _s{constructor(i={},r){if(super(),this.options=_v(i),this.services={},this.logger=pn,this.modules={external:[]},eE(this),r&&!this.isInitialized&&!i.isClone){if(!this.options.initAsync)return this.init(i,r),this;setTimeout(()=>{this.init(i,r)},0)}}init(i={},r){this.isInitializing=!0,typeof i=="function"&&(r=i,i={}),i.defaultNS==null&&i.ns&&(ve(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const l=xf();this.options={...l,...this.options,..._v(i)},this.options.interpolation={...l.interpolation,...this.options.interpolation},i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=l.overloadTranslationOptionHandler),this.options.showSupportNotice!==!1&&!aE(this)&&!tE()&&(typeof console<"u"&&typeof console.info<"u"&&console.info("🌐 i18next is made possible by our own product, Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙"),nE());const s=m=>m?typeof m=="function"?new m:m:null;if(!this.options.isClone){this.modules.logger?pn.init(s(this.modules.logger),this.options):pn.init(null,this.options);let m;this.modules.formatter?m=this.modules.formatter:m=ZT;const b=new bv(this.options);this.store=new yv(this.options.resources,this.options);const v=this.services;v.logger=pn,v.resourceStore=this.store,v.languageUtils=b,v.pluralResolver=new $T(b,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==l.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),m&&(!this.options.interpolation.format||this.options.interpolation.format===l.interpolation.format)&&(v.formatter=s(m),v.formatter.init&&v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new Ev(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new JT(s(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",(E,...w)=>{this.emit(E,...w)}),this.modules.languageDetector&&(v.languageDetector=s(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=s(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new ds(this.services,this.options),this.translator.on("*",(E,...w)=>{this.emit(E,...w)}),this.modules.external.forEach(E=>{E.init&&E.init(this)})}if(this.format=this.options.interpolation.format,r||(r=Xl),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const m=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);m.length>0&&m[0]!=="dev"&&(this.options.lng=m[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(m=>{this[m]=(...b)=>this.store[m](...b)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(m=>{this[m]=(...b)=>(this.store[m](...b),this)});const p=ao(),h=()=>{const m=(b,v)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),p.resolve(v),r(b,v)};if(this.languages&&!this.isInitialized)return m(null,this.t.bind(this));this.changeLanguage(this.options.lng,m)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),p}loadResources(i,r=Xl){let l=r;const s=ve(i)?i:this.language;if(typeof i=="function"&&(l=i),!this.options.resources||this.options.partialBundledLanguages){if(s?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return l();const u=[],d=p=>{if(!p||p==="cimode")return;this.services.languageUtils.toResolveHierarchy(p).forEach(m=>{m!=="cimode"&&u.indexOf(m)<0&&u.push(m)})};s?d(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(h=>d(h)),this.options.preload?.forEach?.(p=>d(p)),this.services.backendConnector.load(u,this.options.ns,p=>{!p&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),l(p)})}else l(null)}reloadResources(i,r,l){const s=ao();return typeof i=="function"&&(l=i,i=void 0),typeof r=="function"&&(l=r,r=void 0),i||(i=this.languages),r||(r=this.options.ns),l||(l=Xl),this.services.backendConnector.reload(i,r,u=>{s.resolve(),l(u)}),s}use(i){if(!i)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!i.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return i.type==="backend"&&(this.modules.backend=i),(i.type==="logger"||i.log&&i.warn&&i.error)&&(this.modules.logger=i),i.type==="languageDetector"&&(this.modules.languageDetector=i),i.type==="i18nFormat"&&(this.modules.i18nFormat=i),i.type==="postProcessor"&&Vy.addPostProcessor(i),i.type==="formatter"&&(this.modules.formatter=i),i.type==="3rdParty"&&this.modules.external.push(i),this}setResolvedLanguage(i){if(!(!i||!this.languages)&&!(["cimode","dev"].indexOf(i)>-1)){for(let r=0;r<this.languages.length;r++){const l=this.languages[r];if(!(["cimode","dev"].indexOf(l)>-1)&&this.store.hasLanguageSomeTranslations(l)){this.resolvedLanguage=l;break}}!this.resolvedLanguage&&this.languages.indexOf(i)<0&&this.store.hasLanguageSomeTranslations(i)&&(this.resolvedLanguage=i,this.languages.unshift(i))}}changeLanguage(i,r){this.isLanguageChangingTo=i;const l=ao();this.emit("languageChanging",i);const s=p=>{this.language=p,this.languages=this.services.languageUtils.toResolveHierarchy(p),this.resolvedLanguage=void 0,this.setResolvedLanguage(p)},u=(p,h)=>{h?this.isLanguageChangingTo===i&&(s(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,l.resolve((...m)=>this.t(...m)),r&&r(p,(...m)=>this.t(...m))},d=p=>{!i&&!p&&this.services.languageDetector&&(p=[]);const h=ve(p)?p:p&&p[0],m=this.store.hasLanguageSomeTranslations(h)?h:this.services.languageUtils.getBestMatchFromCodes(ve(p)?[p]:p);m&&(this.language||s(m),this.translator.language||this.translator.changeLanguage(m),this.services.languageDetector?.cacheUserLanguage?.(m)),this.loadResources(m,b=>{u(b,m)})};return!i&&this.services.languageDetector&&!this.services.languageDetector.async?d(this.services.languageDetector.detect()):!i&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(d):this.services.languageDetector.detect(d):d(i),l}getFixedT(i,r,l){const s=(u,d,...p)=>{let h;typeof d!="object"?h=this.options.overloadTranslationOptionHandler([u,d].concat(p)):h={...d},h.lng=h.lng||s.lng,h.lngs=h.lngs||s.lngs,h.ns=h.ns||s.ns,h.keyPrefix!==""&&(h.keyPrefix=h.keyPrefix||l||s.keyPrefix);const m=this.options.keySeparator||".";let b;return h.keyPrefix&&Array.isArray(u)?b=u.map(v=>(typeof v=="function"&&(v=co(v,{...this.options,...d})),`${h.keyPrefix}${m}${v}`)):(typeof u=="function"&&(u=co(u,{...this.options,...d})),b=h.keyPrefix?`${h.keyPrefix}${m}${u}`:u),this.t(b,h)};return ve(i)?s.lng=i:s.lngs=i,s.ns=r,s.keyPrefix=l,s}t(...i){return this.translator?.translate(...i)}exists(...i){return this.translator?.exists(...i)}setDefaultNamespace(i){this.options.defaultNS=i}hasLoadedNamespace(i,r={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const l=r.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,u=this.languages[this.languages.length-1];if(l.toLowerCase()==="cimode")return!0;const d=(p,h)=>{const m=this.services.backendConnector.state[`${p}|${h}`];return m===-1||m===0||m===2};if(r.precheck){const p=r.precheck(this,d);if(p!==void 0)return p}return!!(this.hasResourceBundle(l,i)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||d(l,i)&&(!s||d(u,i)))}loadNamespaces(i,r){const l=ao();return this.options.ns?(ve(i)&&(i=[i]),i.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{l.resolve(),r&&r(s)}),l):(r&&r(),Promise.resolve())}loadLanguages(i,r){const l=ao();ve(i)&&(i=[i]);const s=this.options.preload||[],u=i.filter(d=>s.indexOf(d)<0&&this.services.languageUtils.isSupportedCode(d));return u.length?(this.options.preload=s.concat(u),this.loadResources(d=>{l.resolve(),r&&r(d)}),l):(r&&r(),Promise.resolve())}dir(i){if(i||(i=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!i)return"rtl";try{const s=new Intl.Locale(i);if(s&&s.getTextInfo){const u=s.getTextInfo();if(u&&u.direction)return u.direction}}catch{}const r=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],l=this.services?.languageUtils||new bv(xf());return i.toLowerCase().indexOf("-latn")>1?"ltr":r.indexOf(l.getLanguagePartFromCode(i))>-1||i.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(i={},r){const l=new uo(i,r);return l.createInstance=uo.createInstance,l}cloneInstance(i={},r=Xl){const l=i.forkResourceStore;l&&delete i.forkResourceStore;const s={...this.options,...i,isClone:!0},u=new uo(s);if((i.debug!==void 0||i.prefix!==void 0)&&(u.logger=u.logger.clone(i)),["store","services","language"].forEach(p=>{u[p]=this[p]}),u.services={...this.services},u.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},l){const p=Object.keys(this.store.data).reduce((h,m)=>(h[m]={...this.store.data[m]},h[m]=Object.keys(h[m]).reduce((b,v)=>(b[v]={...h[m][v]},b),h[m]),h),{});u.store=new yv(p,s),u.services.resourceStore=u.store}if(i.interpolation){const h={...xf().interpolation,...this.options.interpolation,...i.interpolation},m={...s,interpolation:h};u.services.interpolator=new Ev(m)}return u.translator=new ds(u.services,s),u.translator.on("*",(p,...h)=>{u.emit(p,...h)}),u.init(s,r),u.translator.options=s,u.translator.backendConnector.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},u}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const gt=uo.createInstance();gt.createInstance;gt.dir;gt.init;gt.loadResources;gt.reloadResources;gt.use;gt.changeLanguage;gt.getFixedT;gt.t;gt.exists;gt.setDefaultNamespace;gt.hasLoadedNamespace;gt.loadNamespaces;gt.loadLanguages;const iE=(n,i,r,l)=>{const s=[r,{code:i,...l||{}}];if(n?.services?.logger?.forward)return n.services.logger.forward(s,"warn","react-i18next::",!0);$a(s[0])&&(s[0]=`react-i18next:: ${s[0]}`),n?.services?.logger?.warn?n.services.logger.warn(...s):console?.warn&&console.warn(...s)},Rv={},Yy=(n,i,r,l)=>{$a(r)&&Rv[r]||($a(r)&&(Rv[r]=new Date),iE(n,i,r,l))},qy=(n,i)=>()=>{if(n.isInitialized)i();else{const r=()=>{setTimeout(()=>{n.off("initialized",r)},0),i()};n.on("initialized",r)}},Pf=(n,i,r)=>{n.loadNamespaces(i,qy(n,r))},Av=(n,i,r,l)=>{if($a(r)&&(r=[r]),n.options.preload&&n.options.preload.indexOf(i)>-1)return Pf(n,r,l);r.forEach(s=>{n.options.ns.indexOf(s)<0&&n.options.ns.push(s)}),n.loadLanguages(i,qy(n,l))},rE=(n,i,r={})=>!i.languages||!i.languages.length?(Yy(i,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:i.languages}),!0):i.hasLoadedNamespace(n,{lng:r.lng,precheck:(l,s)=>{if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&l.services.backendConnector.backend&&l.isLanguageChangingTo&&!s(l.isLanguageChangingTo,n))return!1}}),$a=n=>typeof n=="string",oE=n=>typeof n=="object"&&n!==null,lE=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,sE={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},cE=n=>sE[n],uE=n=>n.replace(lE,cE);let Hf={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:uE,transDefaultProps:void 0};const fE=(n={})=>{Hf={...Hf,...n}},dE=()=>Hf;let $y;const pE=n=>{$y=n},hE=()=>$y,mE={type:"3rdParty",init(n){fE(n.options.react),pE(n)}},Xy=g.createContext();class gE{constructor(){this.usedNamespaces={}}addUsedNamespaces(i){i.forEach(r=>{this.usedNamespaces[r]||(this.usedNamespaces[r]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var bf={exports:{}},Sf={};var Nv;function vE(){if(Nv)return Sf;Nv=1;var n=Cs();function i(v,C){return v===C&&(v!==0||1/v===1/C)||v!==v&&C!==C}var r=typeof Object.is=="function"?Object.is:i,l=n.useState,s=n.useEffect,u=n.useLayoutEffect,d=n.useDebugValue;function p(v,C){var E=C(),w=l({inst:{value:E,getSnapshot:C}}),T=w[0].inst,_=w[1];return u(function(){T.value=E,T.getSnapshot=C,h(T)&&_({inst:T})},[v,E,C]),s(function(){return h(T)&&_({inst:T}),v(function(){h(T)&&_({inst:T})})},[v]),d(E),E}function h(v){var C=v.getSnapshot;v=v.value;try{var E=C();return!r(v,E)}catch{return!0}}function m(v,C){return C()}var b=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?m:p;return Sf.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:b,Sf}var Ov;function yE(){return Ov||(Ov=1,bf.exports=vE()),bf.exports}var xE=yE();const bE=(n,i)=>{if($a(i))return i;if(oE(i)&&$a(i.defaultValue))return i.defaultValue;if(typeof n=="function")return"";if(Array.isArray(n)){const r=n[n.length-1];return typeof r=="function"?"":r}return n},SE={t:bE,ready:!1},CE=()=>()=>{},er=(n,i={})=>{const{i18n:r}=i,{i18n:l,defaultNS:s}=g.useContext(Xy)||{},u=r||l||hE();u&&!u.reportNamespaces&&(u.reportNamespaces=new gE),u||Yy(u,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const d=g.useMemo(()=>({...dE(),...u?.options?.react,...i}),[u,i]),{useSuspense:p,keyPrefix:h}=d,m=s||u?.options?.defaultNS,b=$a(m)?[m]:m||["translation"],v=g.useMemo(()=>b,b);u?.reportNamespaces?.addUsedNamespaces?.(v);const C=g.useRef(0),E=g.useCallback(J=>{if(!u)return CE;const{bindI18n:te,bindI18nStore:ae}=d,ne=()=>{C.current+=1,J()};return te&&u.on(te,ne),ae&&u.store.on(ae,ne),()=>{te&&te.split(" ").forEach(re=>u.off(re,ne)),ae&&ae.split(" ").forEach(re=>u.store.off(re,ne))}},[u,d]),w=g.useRef(),T=g.useCallback(()=>{if(!u)return SE;const J=!!(u.isInitialized||u.initializedStoreOnce)&&v.every(ue=>rE(ue,u,d)),te=i.lng||u.language,ae=C.current,ne=w.current;if(ne&&ne.ready===J&&ne.lng===te&&ne.keyPrefix===h&&ne.revision===ae)return ne;const ie={t:u.getFixedT(te,d.nsMode==="fallback"?v:v[0],h),ready:J,lng:te,keyPrefix:h,revision:ae};return w.current=ie,ie},[u,v,h,d,i.lng]),[_,N]=g.useState(0),{t:M,ready:D}=xE.useSyncExternalStore(E,T,T);g.useEffect(()=>{if(u&&!D&&!p){const J=()=>N(te=>te+1);i.lng?Av(u,i.lng,v,J):Pf(u,v,J)}},[u,i.lng,v,D,p,_]);const H=u||{},G=g.useRef(null),W=g.useRef(),U=J=>{const te=Object.getOwnPropertyDescriptors(J);te.__original&&delete te.__original;const ae=Object.create(Object.getPrototypeOf(J),te);if(!Object.prototype.hasOwnProperty.call(ae,"__original"))try{Object.defineProperty(ae,"__original",{value:J,writable:!1,enumerable:!1,configurable:!1})}catch{}return ae},Y=g.useMemo(()=>{const J=H,te=J?.language;let ae=J;J&&(G.current&&G.current.__original===J?W.current!==te?(ae=U(J),G.current=ae,W.current=te):ae=G.current:(ae=U(J),G.current=ae,W.current=te));const ne=[M,ae,D];return ne.t=M,ne.i18n=ae,ne.ready=D,ne},[M,H,D,H.resolvedLanguage,H.language,H.languages]);if(u&&p&&!D)throw new Promise(J=>{const te=()=>J();i.lng?Av(u,i.lng,v,te):Pf(u,v,te)});return Y};function TE({i18n:n,defaultNS:i,children:r}){const l=g.useMemo(()=>({i18n:n,defaultNS:i}),[n,i]);return g.createElement(Xy.Provider,{value:l},r)}const EE={zh:{translation:{nav:{home:"首页",notes:"笔记",about:"关于"},home:{title:"技术笔记",subtitle:"记录学习，分享知识",description:"这里是我整理的技术笔记，涵盖前端、后端、AI、DevOps 等多个领域。",viewAll:"查看全部笔记",latestNotes:"最新笔记",categories:"分类浏览"},notes:{title:"全部笔记",search:"搜索笔记...",filterByCategory:"按分类筛选",allCategories:"全部分类",readMore:"阅读更多",noNotes:"暂无笔记",publishedOn:"发布于",updatedOn:"更新于",viewMode:"视图",cardView:"卡片视图",listView:"列表视图",sortBy:"排序",newest:"最新发布",oldest:"最早发布",sortTitle:"标题",recentlyUpdated:"最近更新"},note:{backToList:"返回列表",tags:"标签",relatedNotes:"相关笔记"},categories:{title:"分类",viewNotes:"查看笔记",noteCount:"{{count}} 篇笔记"},footer:{copyright:"© 2024 技术笔记. All rights reserved.",poweredBy:"Powered by React + Vite"},language:{zh:"中文",en:"English",switch:"切换语言"}}},en:{translation:{nav:{home:"Home",notes:"Notes",about:"About"},home:{title:"Tech Notes",subtitle:"Learn, Record, Share",description:"Here are my organized technical notes covering frontend, backend, AI, DevOps and more.",viewAll:"View All Notes",latestNotes:"Latest Notes",categories:"Browse by Category"},notes:{title:"All Notes",search:"Search notes...",filterByCategory:"Filter by Category",allCategories:"All Categories",readMore:"Read More",noNotes:"No notes yet",publishedOn:"Published on",updatedOn:"Updated on",viewMode:"View",cardView:"Card View",listView:"List View",sortBy:"Sort by",newest:"Newest First",oldest:"Oldest First",sortTitle:"Title",recentlyUpdated:"Recently Updated"},note:{backToList:"Back to List",tags:"Tags",relatedNotes:"Related Notes"},categories:{title:"Categories",viewNotes:"View Notes",noteCount:"{{count}} notes"},footer:{copyright:"© 2024 Tech Notes. All rights reserved.",poweredBy:"Powered by React + Vite"},language:{zh:"中文",en:"English",switch:"Switch Language"}}}};gt.use(mE).init({resources:EE,lng:"zh",fallbackLng:"zh",interpolation:{escapeValue:!1}});function Mv(n,i){if(typeof n=="function")return n(i);n!=null&&(n.current=i)}function Sa(...n){return i=>{let r=!1;const l=n.map(s=>{const u=Mv(s,i);return!r&&typeof u=="function"&&(r=!0),u});if(r)return()=>{for(let s=0;s<l.length;s++){const u=l[s];typeof u=="function"?u():Mv(n[s],null)}}}}function Fe(...n){return g.useCallback(Sa(...n),n)}var wE=Symbol.for("react.lazy"),ps=id[" use ".trim().toString()];function _E(n){return typeof n=="object"&&n!==null&&"then"in n}function Qy(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===wE&&"_payload"in n&&_E(n._payload)}function RE(n){const i=AE(n),r=g.forwardRef((l,s)=>{let{children:u,...d}=l;Qy(u)&&typeof ps=="function"&&(u=ps(u._payload));const p=g.Children.toArray(u),h=p.find(OE);if(h){const m=h.props.children,b=p.map(v=>v===h?g.Children.count(m)>1?g.Children.only(null):g.isValidElement(m)?m.props.children:null:v);return x.jsx(i,{...d,ref:s,children:g.isValidElement(m)?g.cloneElement(m,void 0,b):null})}return x.jsx(i,{...d,ref:s,children:u})});return r.displayName=`${n}.Slot`,r}var Zy=RE("Slot");function AE(n){const i=g.forwardRef((r,l)=>{let{children:s,...u}=r;if(Qy(s)&&typeof ps=="function"&&(s=ps(s._payload)),g.isValidElement(s)){const d=DE(s),p=ME(u,s.props);return s.type!==g.Fragment&&(p.ref=l?Sa(l,d):d),g.cloneElement(s,p)}return g.Children.count(s)>1?g.Children.only(null):null});return i.displayName=`${n}.SlotClone`,i}var NE=Symbol("radix.slottable");function OE(n){return g.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===NE}function ME(n,i){const r={...i};for(const l in i){const s=n[l],u=i[l];/^on[A-Z]/.test(l)?s&&u?r[l]=(...p)=>{const h=u(...p);return s(...p),h}:s&&(r[l]=s):l==="style"?r[l]={...s,...u}:l==="className"&&(r[l]=[s,u].filter(Boolean).join(" "))}return{...n,...r}}function DE(n){let i=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning;return r?n.ref:(i=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}function Wy(n){var i,r,l="";if(typeof n=="string"||typeof n=="number")l+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(i=0;i<s;i++)n[i]&&(r=Wy(n[i]))&&(l&&(l+=" "),l+=r)}else for(r in n)n[r]&&(l&&(l+=" "),l+=r);return l}function Jy(){for(var n,i,r=0,l="",s=arguments.length;r<s;r++)(n=arguments[r])&&(i=Wy(n))&&(l&&(l+=" "),l+=i);return l}const Dv=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,Lv=Jy,e0=(n,i)=>r=>{var l;if(i?.variants==null)return Lv(n,r?.class,r?.className);const{variants:s,defaultVariants:u}=i,d=Object.keys(s).map(m=>{const b=r?.[m],v=u?.[m];if(b===null)return null;const C=Dv(b)||Dv(v);return s[m][C]}),p=r&&Object.entries(r).reduce((m,b)=>{let[v,C]=b;return C===void 0||(m[v]=C),m},{}),h=i==null||(l=i.compoundVariants)===null||l===void 0?void 0:l.reduce((m,b)=>{let{class:v,className:C,...E}=b;return Object.entries(E).every(w=>{let[T,_]=w;return Array.isArray(_)?_.includes({...u,...p}[T]):{...u,...p}[T]===_})?[...m,v,C]:m},[]);return Lv(n,d,h,r?.class,r?.className)},LE=(n,i)=>{const r=new Array(n.length+i.length);for(let l=0;l<n.length;l++)r[l]=n[l];for(let l=0;l<i.length;l++)r[n.length+l]=i[l];return r},jE=(n,i)=>({classGroupId:n,validator:i}),t0=(n=new Map,i=null,r)=>({nextPart:n,validators:i,classGroupId:r}),hs="-",jv=[],kE="arbitrary..",IE=n=>{const i=PE(n),{conflictingClassGroups:r,conflictingClassGroupModifiers:l}=n;return{getClassGroupId:d=>{if(d.startsWith("[")&&d.endsWith("]"))return zE(d);const p=d.split(hs),h=p[0]===""&&p.length>1?1:0;return n0(p,h,i)},getConflictingClassGroupIds:(d,p)=>{if(p){const h=l[d],m=r[d];return h?m?LE(m,h):h:m||jv}return r[d]||jv}}},n0=(n,i,r)=>{if(n.length-i===0)return r.classGroupId;const s=n[i],u=r.nextPart.get(s);if(u){const m=n0(n,i+1,u);if(m)return m}const d=r.validators;if(d===null)return;const p=i===0?n.join(hs):n.slice(i).join(hs),h=d.length;for(let m=0;m<h;m++){const b=d[m];if(b.validator(p))return b.classGroupId}},zE=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const i=n.slice(1,-1),r=i.indexOf(":"),l=i.slice(0,r);return l?kE+l:void 0})(),PE=n=>{const{theme:i,classGroups:r}=n;return HE(r,i)},HE=(n,i)=>{const r=t0();for(const l in n){const s=n[l];fd(s,r,l,i)}return r},fd=(n,i,r,l)=>{const s=n.length;for(let u=0;u<s;u++){const d=n[u];UE(d,i,r,l)}},UE=(n,i,r,l)=>{if(typeof n=="string"){BE(n,i,r);return}if(typeof n=="function"){GE(n,i,r,l);return}VE(n,i,r,l)},BE=(n,i,r)=>{const l=n===""?i:a0(i,n);l.classGroupId=r},GE=(n,i,r,l)=>{if(FE(n)){fd(n(l),i,r,l);return}i.validators===null&&(i.validators=[]),i.validators.push(jE(r,n))},VE=(n,i,r,l)=>{const s=Object.entries(n),u=s.length;for(let d=0;d<u;d++){const[p,h]=s[d];fd(h,a0(i,p),r,l)}},a0=(n,i)=>{let r=n;const l=i.split(hs),s=l.length;for(let u=0;u<s;u++){const d=l[u];let p=r.nextPart.get(d);p||(p=t0(),r.nextPart.set(d,p)),r=p}return r},FE=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,KE=n=>{if(n<1)return{get:()=>{},set:()=>{}};let i=0,r=Object.create(null),l=Object.create(null);const s=(u,d)=>{r[u]=d,i++,i>n&&(i=0,l=r,r=Object.create(null))};return{get(u){let d=r[u];if(d!==void 0)return d;if((d=l[u])!==void 0)return s(u,d),d},set(u,d){u in r?r[u]=d:s(u,d)}}},Uf="!",kv=":",YE=[],Iv=(n,i,r,l,s)=>({modifiers:n,hasImportantModifier:i,baseClassName:r,maybePostfixModifierPosition:l,isExternal:s}),qE=n=>{const{prefix:i,experimentalParseClassName:r}=n;let l=s=>{const u=[];let d=0,p=0,h=0,m;const b=s.length;for(let T=0;T<b;T++){const _=s[T];if(d===0&&p===0){if(_===kv){u.push(s.slice(h,T)),h=T+1;continue}if(_==="/"){m=T;continue}}_==="["?d++:_==="]"?d--:_==="("?p++:_===")"&&p--}const v=u.length===0?s:s.slice(h);let C=v,E=!1;v.endsWith(Uf)?(C=v.slice(0,-1),E=!0):v.startsWith(Uf)&&(C=v.slice(1),E=!0);const w=m&&m>h?m-h:void 0;return Iv(u,E,C,w)};if(i){const s=i+kv,u=l;l=d=>d.startsWith(s)?u(d.slice(s.length)):Iv(YE,!1,d,void 0,!0)}if(r){const s=l;l=u=>r({className:u,parseClassName:s})}return l},$E=n=>{const i=new Map;return n.orderSensitiveModifiers.forEach((r,l)=>{i.set(r,1e6+l)}),r=>{const l=[];let s=[];for(let u=0;u<r.length;u++){const d=r[u],p=d[0]==="[",h=i.has(d);p||h?(s.length>0&&(s.sort(),l.push(...s),s=[]),l.push(d)):s.push(d)}return s.length>0&&(s.sort(),l.push(...s)),l}},XE=n=>({cache:KE(n.cacheSize),parseClassName:qE(n),sortModifiers:$E(n),...IE(n)}),QE=/\s+/,ZE=(n,i)=>{const{parseClassName:r,getClassGroupId:l,getConflictingClassGroupIds:s,sortModifiers:u}=i,d=[],p=n.trim().split(QE);let h="";for(let m=p.length-1;m>=0;m-=1){const b=p[m],{isExternal:v,modifiers:C,hasImportantModifier:E,baseClassName:w,maybePostfixModifierPosition:T}=r(b);if(v){h=b+(h.length>0?" "+h:h);continue}let _=!!T,N=l(_?w.substring(0,T):w);if(!N){if(!_){h=b+(h.length>0?" "+h:h);continue}if(N=l(w),!N){h=b+(h.length>0?" "+h:h);continue}_=!1}const M=C.length===0?"":C.length===1?C[0]:u(C).join(":"),D=E?M+Uf:M,H=D+N;if(d.indexOf(H)>-1)continue;d.push(H);const G=s(N,_);for(let W=0;W<G.length;++W){const U=G[W];d.push(D+U)}h=b+(h.length>0?" "+h:h)}return h},WE=(...n)=>{let i=0,r,l,s="";for(;i<n.length;)(r=n[i++])&&(l=i0(r))&&(s&&(s+=" "),s+=l);return s},i0=n=>{if(typeof n=="string")return n;let i,r="";for(let l=0;l<n.length;l++)n[l]&&(i=i0(n[l]))&&(r&&(r+=" "),r+=i);return r},JE=(n,...i)=>{let r,l,s,u;const d=h=>{const m=i.reduce((b,v)=>v(b),n());return r=XE(m),l=r.cache.get,s=r.cache.set,u=p,p(h)},p=h=>{const m=l(h);if(m)return m;const b=ZE(h,r);return s(h,b),b};return u=d,(...h)=>u(WE(...h))},ew=[],it=n=>{const i=r=>r[n]||ew;return i.isThemeGetter=!0,i},r0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,o0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,tw=/^\d+\/\d+$/,nw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,aw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,iw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,rw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ow=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ui=n=>tw.test(n),Te=n=>!!n&&!Number.isNaN(Number(n)),ha=n=>!!n&&Number.isInteger(Number(n)),Cf=n=>n.endsWith("%")&&Te(n.slice(0,-1)),Pn=n=>nw.test(n),lw=()=>!0,sw=n=>aw.test(n)&&!iw.test(n),l0=()=>!1,cw=n=>rw.test(n),uw=n=>ow.test(n),fw=n=>!le(n)&&!se(n),dw=n=>tr(n,u0,l0),le=n=>r0.test(n),Ya=n=>tr(n,f0,sw),Tf=n=>tr(n,vw,Te),zv=n=>tr(n,s0,l0),pw=n=>tr(n,c0,uw),Ql=n=>tr(n,d0,cw),se=n=>o0.test(n),io=n=>nr(n,f0),hw=n=>nr(n,yw),Pv=n=>nr(n,s0),mw=n=>nr(n,u0),gw=n=>nr(n,c0),Zl=n=>nr(n,d0,!0),tr=(n,i,r)=>{const l=r0.exec(n);return l?l[1]?i(l[1]):r(l[2]):!1},nr=(n,i,r=!1)=>{const l=o0.exec(n);return l?l[1]?i(l[1]):r:!1},s0=n=>n==="position"||n==="percentage",c0=n=>n==="image"||n==="url",u0=n=>n==="length"||n==="size"||n==="bg-size",f0=n=>n==="length",vw=n=>n==="number",yw=n=>n==="family-name",d0=n=>n==="shadow",xw=()=>{const n=it("color"),i=it("font"),r=it("text"),l=it("font-weight"),s=it("tracking"),u=it("leading"),d=it("breakpoint"),p=it("container"),h=it("spacing"),m=it("radius"),b=it("shadow"),v=it("inset-shadow"),C=it("text-shadow"),E=it("drop-shadow"),w=it("blur"),T=it("perspective"),_=it("aspect"),N=it("ease"),M=it("animate"),D=()=>["auto","avoid","all","avoid-page","page","left","right","column"],H=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],G=()=>[...H(),se,le],W=()=>["auto","hidden","clip","visible","scroll"],U=()=>["auto","contain","none"],Y=()=>[se,le,h],J=()=>[Ui,"full","auto",...Y()],te=()=>[ha,"none","subgrid",se,le],ae=()=>["auto",{span:["full",ha,se,le]},ha,se,le],ne=()=>[ha,"auto",se,le],re=()=>["auto","min","max","fr",se,le],ie=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ue=()=>["start","end","center","stretch","center-safe","end-safe"],L=()=>["auto",...Y()],K=()=>[Ui,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...Y()],z=()=>[n,se,le],Z=()=>[...H(),Pv,zv,{position:[se,le]}],pe=()=>["no-repeat",{repeat:["","x","y","space","round"]}],R=()=>["auto","cover","contain",mw,dw,{size:[se,le]}],V=()=>[Cf,io,Ya],Q=()=>["","none","full",m,se,le],ee=()=>["",Te,io,Ya],fe=()=>["solid","dashed","dotted","double"],me=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],X=()=>[Te,Cf,Pv,zv],ye=()=>["","none",w,se,le],be=()=>["none",Te,se,le],_e=()=>["none",Te,se,le],Me=()=>[Te,se,le],Ie=()=>[Ui,"full",...Y()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Pn],breakpoint:[Pn],color:[lw],container:[Pn],"drop-shadow":[Pn],ease:["in","out","in-out"],font:[fw],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Pn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Pn],shadow:[Pn],spacing:["px",Te],text:[Pn],"text-shadow":[Pn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ui,le,se,_]}],container:["container"],columns:[{columns:[Te,le,se,p]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:G()}],overflow:[{overflow:W()}],"overflow-x":[{"overflow-x":W()}],"overflow-y":[{"overflow-y":W()}],overscroll:[{overscroll:U()}],"overscroll-x":[{"overscroll-x":U()}],"overscroll-y":[{"overscroll-y":U()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:J()}],"inset-x":[{"inset-x":J()}],"inset-y":[{"inset-y":J()}],start:[{start:J()}],end:[{end:J()}],top:[{top:J()}],right:[{right:J()}],bottom:[{bottom:J()}],left:[{left:J()}],visibility:["visible","invisible","collapse"],z:[{z:[ha,"auto",se,le]}],basis:[{basis:[Ui,"full","auto",p,...Y()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Te,Ui,"auto","initial","none",le]}],grow:[{grow:["",Te,se,le]}],shrink:[{shrink:["",Te,se,le]}],order:[{order:[ha,"first","last","none",se,le]}],"grid-cols":[{"grid-cols":te()}],"col-start-end":[{col:ae()}],"col-start":[{"col-start":ne()}],"col-end":[{"col-end":ne()}],"grid-rows":[{"grid-rows":te()}],"row-start-end":[{row:ae()}],"row-start":[{"row-start":ne()}],"row-end":[{"row-end":ne()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":re()}],"auto-rows":[{"auto-rows":re()}],gap:[{gap:Y()}],"gap-x":[{"gap-x":Y()}],"gap-y":[{"gap-y":Y()}],"justify-content":[{justify:[...ie(),"normal"]}],"justify-items":[{"justify-items":[...ue(),"normal"]}],"justify-self":[{"justify-self":["auto",...ue()]}],"align-content":[{content:["normal",...ie()]}],"align-items":[{items:[...ue(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ue(),{baseline:["","last"]}]}],"place-content":[{"place-content":ie()}],"place-items":[{"place-items":[...ue(),"baseline"]}],"place-self":[{"place-self":["auto",...ue()]}],p:[{p:Y()}],px:[{px:Y()}],py:[{py:Y()}],ps:[{ps:Y()}],pe:[{pe:Y()}],pt:[{pt:Y()}],pr:[{pr:Y()}],pb:[{pb:Y()}],pl:[{pl:Y()}],m:[{m:L()}],mx:[{mx:L()}],my:[{my:L()}],ms:[{ms:L()}],me:[{me:L()}],mt:[{mt:L()}],mr:[{mr:L()}],mb:[{mb:L()}],ml:[{ml:L()}],"space-x":[{"space-x":Y()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":Y()}],"space-y-reverse":["space-y-reverse"],size:[{size:K()}],w:[{w:[p,"screen",...K()]}],"min-w":[{"min-w":[p,"screen","none",...K()]}],"max-w":[{"max-w":[p,"screen","none","prose",{screen:[d]},...K()]}],h:[{h:["screen","lh",...K()]}],"min-h":[{"min-h":["screen","lh","none",...K()]}],"max-h":[{"max-h":["screen","lh",...K()]}],"font-size":[{text:["base",r,io,Ya]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[l,se,Tf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Cf,le]}],"font-family":[{font:[hw,le,i]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,se,le]}],"line-clamp":[{"line-clamp":[Te,"none",se,Tf]}],leading:[{leading:[u,...Y()]}],"list-image":[{"list-image":["none",se,le]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",se,le]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:z()}],"text-color":[{text:z()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...fe(),"wavy"]}],"text-decoration-thickness":[{decoration:[Te,"from-font","auto",se,Ya]}],"text-decoration-color":[{decoration:z()}],"underline-offset":[{"underline-offset":[Te,"auto",se,le]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:Y()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",se,le]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",se,le]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Z()}],"bg-repeat":[{bg:pe()}],"bg-size":[{bg:R()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ha,se,le],radial:["",se,le],conic:[ha,se,le]},gw,pw]}],"bg-color":[{bg:z()}],"gradient-from-pos":[{from:V()}],"gradient-via-pos":[{via:V()}],"gradient-to-pos":[{to:V()}],"gradient-from":[{from:z()}],"gradient-via":[{via:z()}],"gradient-to":[{to:z()}],rounded:[{rounded:Q()}],"rounded-s":[{"rounded-s":Q()}],"rounded-e":[{"rounded-e":Q()}],"rounded-t":[{"rounded-t":Q()}],"rounded-r":[{"rounded-r":Q()}],"rounded-b":[{"rounded-b":Q()}],"rounded-l":[{"rounded-l":Q()}],"rounded-ss":[{"rounded-ss":Q()}],"rounded-se":[{"rounded-se":Q()}],"rounded-ee":[{"rounded-ee":Q()}],"rounded-es":[{"rounded-es":Q()}],"rounded-tl":[{"rounded-tl":Q()}],"rounded-tr":[{"rounded-tr":Q()}],"rounded-br":[{"rounded-br":Q()}],"rounded-bl":[{"rounded-bl":Q()}],"border-w":[{border:ee()}],"border-w-x":[{"border-x":ee()}],"border-w-y":[{"border-y":ee()}],"border-w-s":[{"border-s":ee()}],"border-w-e":[{"border-e":ee()}],"border-w-t":[{"border-t":ee()}],"border-w-r":[{"border-r":ee()}],"border-w-b":[{"border-b":ee()}],"border-w-l":[{"border-l":ee()}],"divide-x":[{"divide-x":ee()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":ee()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...fe(),"hidden","none"]}],"divide-style":[{divide:[...fe(),"hidden","none"]}],"border-color":[{border:z()}],"border-color-x":[{"border-x":z()}],"border-color-y":[{"border-y":z()}],"border-color-s":[{"border-s":z()}],"border-color-e":[{"border-e":z()}],"border-color-t":[{"border-t":z()}],"border-color-r":[{"border-r":z()}],"border-color-b":[{"border-b":z()}],"border-color-l":[{"border-l":z()}],"divide-color":[{divide:z()}],"outline-style":[{outline:[...fe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Te,se,le]}],"outline-w":[{outline:["",Te,io,Ya]}],"outline-color":[{outline:z()}],shadow:[{shadow:["","none",b,Zl,Ql]}],"shadow-color":[{shadow:z()}],"inset-shadow":[{"inset-shadow":["none",v,Zl,Ql]}],"inset-shadow-color":[{"inset-shadow":z()}],"ring-w":[{ring:ee()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:z()}],"ring-offset-w":[{"ring-offset":[Te,Ya]}],"ring-offset-color":[{"ring-offset":z()}],"inset-ring-w":[{"inset-ring":ee()}],"inset-ring-color":[{"inset-ring":z()}],"text-shadow":[{"text-shadow":["none",C,Zl,Ql]}],"text-shadow-color":[{"text-shadow":z()}],opacity:[{opacity:[Te,se,le]}],"mix-blend":[{"mix-blend":[...me(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":me()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Te]}],"mask-image-linear-from-pos":[{"mask-linear-from":X()}],"mask-image-linear-to-pos":[{"mask-linear-to":X()}],"mask-image-linear-from-color":[{"mask-linear-from":z()}],"mask-image-linear-to-color":[{"mask-linear-to":z()}],"mask-image-t-from-pos":[{"mask-t-from":X()}],"mask-image-t-to-pos":[{"mask-t-to":X()}],"mask-image-t-from-color":[{"mask-t-from":z()}],"mask-image-t-to-color":[{"mask-t-to":z()}],"mask-image-r-from-pos":[{"mask-r-from":X()}],"mask-image-r-to-pos":[{"mask-r-to":X()}],"mask-image-r-from-color":[{"mask-r-from":z()}],"mask-image-r-to-color":[{"mask-r-to":z()}],"mask-image-b-from-pos":[{"mask-b-from":X()}],"mask-image-b-to-pos":[{"mask-b-to":X()}],"mask-image-b-from-color":[{"mask-b-from":z()}],"mask-image-b-to-color":[{"mask-b-to":z()}],"mask-image-l-from-pos":[{"mask-l-from":X()}],"mask-image-l-to-pos":[{"mask-l-to":X()}],"mask-image-l-from-color":[{"mask-l-from":z()}],"mask-image-l-to-color":[{"mask-l-to":z()}],"mask-image-x-from-pos":[{"mask-x-from":X()}],"mask-image-x-to-pos":[{"mask-x-to":X()}],"mask-image-x-from-color":[{"mask-x-from":z()}],"mask-image-x-to-color":[{"mask-x-to":z()}],"mask-image-y-from-pos":[{"mask-y-from":X()}],"mask-image-y-to-pos":[{"mask-y-to":X()}],"mask-image-y-from-color":[{"mask-y-from":z()}],"mask-image-y-to-color":[{"mask-y-to":z()}],"mask-image-radial":[{"mask-radial":[se,le]}],"mask-image-radial-from-pos":[{"mask-radial-from":X()}],"mask-image-radial-to-pos":[{"mask-radial-to":X()}],"mask-image-radial-from-color":[{"mask-radial-from":z()}],"mask-image-radial-to-color":[{"mask-radial-to":z()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":H()}],"mask-image-conic-pos":[{"mask-conic":[Te]}],"mask-image-conic-from-pos":[{"mask-conic-from":X()}],"mask-image-conic-to-pos":[{"mask-conic-to":X()}],"mask-image-conic-from-color":[{"mask-conic-from":z()}],"mask-image-conic-to-color":[{"mask-conic-to":z()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Z()}],"mask-repeat":[{mask:pe()}],"mask-size":[{mask:R()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",se,le]}],filter:[{filter:["","none",se,le]}],blur:[{blur:ye()}],brightness:[{brightness:[Te,se,le]}],contrast:[{contrast:[Te,se,le]}],"drop-shadow":[{"drop-shadow":["","none",E,Zl,Ql]}],"drop-shadow-color":[{"drop-shadow":z()}],grayscale:[{grayscale:["",Te,se,le]}],"hue-rotate":[{"hue-rotate":[Te,se,le]}],invert:[{invert:["",Te,se,le]}],saturate:[{saturate:[Te,se,le]}],sepia:[{sepia:["",Te,se,le]}],"backdrop-filter":[{"backdrop-filter":["","none",se,le]}],"backdrop-blur":[{"backdrop-blur":ye()}],"backdrop-brightness":[{"backdrop-brightness":[Te,se,le]}],"backdrop-contrast":[{"backdrop-contrast":[Te,se,le]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Te,se,le]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Te,se,le]}],"backdrop-invert":[{"backdrop-invert":["",Te,se,le]}],"backdrop-opacity":[{"backdrop-opacity":[Te,se,le]}],"backdrop-saturate":[{"backdrop-saturate":[Te,se,le]}],"backdrop-sepia":[{"backdrop-sepia":["",Te,se,le]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":Y()}],"border-spacing-x":[{"border-spacing-x":Y()}],"border-spacing-y":[{"border-spacing-y":Y()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",se,le]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Te,"initial",se,le]}],ease:[{ease:["linear","initial",N,se,le]}],delay:[{delay:[Te,se,le]}],animate:[{animate:["none",M,se,le]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[T,se,le]}],"perspective-origin":[{"perspective-origin":G()}],rotate:[{rotate:be()}],"rotate-x":[{"rotate-x":be()}],"rotate-y":[{"rotate-y":be()}],"rotate-z":[{"rotate-z":be()}],scale:[{scale:_e()}],"scale-x":[{"scale-x":_e()}],"scale-y":[{"scale-y":_e()}],"scale-z":[{"scale-z":_e()}],"scale-3d":["scale-3d"],skew:[{skew:Me()}],"skew-x":[{"skew-x":Me()}],"skew-y":[{"skew-y":Me()}],transform:[{transform:[se,le,"","none","gpu","cpu"]}],"transform-origin":[{origin:G()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ie()}],"translate-x":[{"translate-x":Ie()}],"translate-y":[{"translate-y":Ie()}],"translate-z":[{"translate-z":Ie()}],"translate-none":["translate-none"],accent:[{accent:z()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:z()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",se,le]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":Y()}],"scroll-mx":[{"scroll-mx":Y()}],"scroll-my":[{"scroll-my":Y()}],"scroll-ms":[{"scroll-ms":Y()}],"scroll-me":[{"scroll-me":Y()}],"scroll-mt":[{"scroll-mt":Y()}],"scroll-mr":[{"scroll-mr":Y()}],"scroll-mb":[{"scroll-mb":Y()}],"scroll-ml":[{"scroll-ml":Y()}],"scroll-p":[{"scroll-p":Y()}],"scroll-px":[{"scroll-px":Y()}],"scroll-py":[{"scroll-py":Y()}],"scroll-ps":[{"scroll-ps":Y()}],"scroll-pe":[{"scroll-pe":Y()}],"scroll-pt":[{"scroll-pt":Y()}],"scroll-pr":[{"scroll-pr":Y()}],"scroll-pb":[{"scroll-pb":Y()}],"scroll-pl":[{"scroll-pl":Y()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",se,le]}],fill:[{fill:["none",...z()]}],"stroke-w":[{stroke:[Te,io,Ya,Tf]}],stroke:[{stroke:["none",...z()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},bw=JE(xw);function ht(...n){return bw(Jy(n))}const Sw=e0("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function dt({className:n,variant:i="default",size:r="default",asChild:l=!1,...s}){const u=l?Zy:"button";return x.jsx(u,{"data-slot":"button","data-variant":i,"data-size":r,className:ht(Sw({variant:i,size:r,className:n})),...s})}function de(n,i,{checkForDefaultPrevented:r=!0}={}){return function(s){if(n?.(s),r===!1||!s.defaultPrevented)return i?.(s)}}function Wa(n,i=[]){let r=[];function l(u,d){const p=g.createContext(d),h=r.length;r=[...r,d];const m=v=>{const{scope:C,children:E,...w}=v,T=C?.[n]?.[h]||p,_=g.useMemo(()=>w,Object.values(w));return x.jsx(T.Provider,{value:_,children:E})};m.displayName=u+"Provider";function b(v,C){const E=C?.[n]?.[h]||p,w=g.useContext(E);if(w)return w;if(d!==void 0)return d;throw new Error(`\`${v}\` must be used within \`${u}\``)}return[m,b]}const s=()=>{const u=r.map(d=>g.createContext(d));return function(p){const h=p?.[n]||u;return g.useMemo(()=>({[`__scope${n}`]:{...p,[n]:h}}),[p,h])}};return s.scopeName=n,[l,Cw(s,...i)]}function Cw(...n){const i=n[0];if(n.length===1)return i;const r=()=>{const l=n.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(u){const d=l.reduce((p,{useScope:h,scopeName:m})=>{const v=h(u)[`__scope${m}`];return{...p,...v}},{});return g.useMemo(()=>({[`__scope${i.scopeName}`]:d}),[d])}};return r.scopeName=i.scopeName,r}var mt=globalThis?.document?g.useLayoutEffect:()=>{},Tw=id[" useInsertionEffect ".trim().toString()]||mt;function qi({prop:n,defaultProp:i,onChange:r=()=>{},caller:l}){const[s,u,d]=Ew({defaultProp:i,onChange:r}),p=n!==void 0,h=p?n:s;{const b=g.useRef(n!==void 0);g.useEffect(()=>{const v=b.current;v!==p&&console.warn(`${l} is changing from ${v?"controlled":"uncontrolled"} to ${p?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),b.current=p},[p,l])}const m=g.useCallback(b=>{if(p){const v=ww(b)?b(n):b;v!==n&&d.current?.(v)}else u(b)},[p,n,u,d]);return[h,m]}function Ew({defaultProp:n,onChange:i}){const[r,l]=g.useState(n),s=g.useRef(r),u=g.useRef(i);return Tw(()=>{u.current=i},[i]),g.useEffect(()=>{s.current!==r&&(u.current?.(r),s.current=r)},[r,s]),[r,l,u]}function ww(n){return typeof n=="function"}function _w(n){const i=Rw(n),r=g.forwardRef((l,s)=>{const{children:u,...d}=l,p=g.Children.toArray(u),h=p.find(Nw);if(h){const m=h.props.children,b=p.map(v=>v===h?g.Children.count(m)>1?g.Children.only(null):g.isValidElement(m)?m.props.children:null:v);return x.jsx(i,{...d,ref:s,children:g.isValidElement(m)?g.cloneElement(m,void 0,b):null})}return x.jsx(i,{...d,ref:s,children:u})});return r.displayName=`${n}.Slot`,r}function Rw(n){const i=g.forwardRef((r,l)=>{const{children:s,...u}=r;if(g.isValidElement(s)){const d=Mw(s),p=Ow(u,s.props);return s.type!==g.Fragment&&(p.ref=l?Sa(l,d):d),g.cloneElement(s,p)}return g.Children.count(s)>1?g.Children.only(null):null});return i.displayName=`${n}.SlotClone`,i}var Aw=Symbol("radix.slottable");function Nw(n){return g.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===Aw}function Ow(n,i){const r={...i};for(const l in i){const s=n[l],u=i[l];/^on[A-Z]/.test(l)?s&&u?r[l]=(...p)=>{const h=u(...p);return s(...p),h}:s&&(r[l]=s):l==="style"?r[l]={...s,...u}:l==="className"&&(r[l]=[s,u].filter(Boolean).join(" "))}return{...n,...r}}function Mw(n){let i=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning;return r?n.ref:(i=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}var Dw=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],ke=Dw.reduce((n,i)=>{const r=_w(`Primitive.${i}`),l=g.forwardRef((s,u)=>{const{asChild:d,...p}=s,h=d?r:i;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),x.jsx(h,{...p,ref:u})});return l.displayName=`Primitive.${i}`,{...n,[i]:l}},{});function p0(n,i){n&&Eo.flushSync(()=>n.dispatchEvent(i))}function Hv(n){const i=Lw(n),r=g.forwardRef((l,s)=>{const{children:u,...d}=l,p=g.Children.toArray(u),h=p.find(kw);if(h){const m=h.props.children,b=p.map(v=>v===h?g.Children.count(m)>1?g.Children.only(null):g.isValidElement(m)?m.props.children:null:v);return x.jsx(i,{...d,ref:s,children:g.isValidElement(m)?g.cloneElement(m,void 0,b):null})}return x.jsx(i,{...d,ref:s,children:u})});return r.displayName=`${n}.Slot`,r}function Lw(n){const i=g.forwardRef((r,l)=>{const{children:s,...u}=r;if(g.isValidElement(s)){const d=zw(s),p=Iw(u,s.props);return s.type!==g.Fragment&&(p.ref=l?Sa(l,d):d),g.cloneElement(s,p)}return g.Children.count(s)>1?g.Children.only(null):null});return i.displayName=`${n}.SlotClone`,i}var jw=Symbol("radix.slottable");function kw(n){return g.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===jw}function Iw(n,i){const r={...i};for(const l in i){const s=n[l],u=i[l];/^on[A-Z]/.test(l)?s&&u?r[l]=(...p)=>{const h=u(...p);return s(...p),h}:s&&(r[l]=s):l==="style"?r[l]={...s,...u}:l==="className"&&(r[l]=[s,u].filter(Boolean).join(" "))}return{...n,...r}}function zw(n){let i=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning;return r?n.ref:(i=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}function dd(n){const i=n+"CollectionProvider",[r,l]=Wa(i),[s,u]=r(i,{collectionRef:{current:null},itemMap:new Map}),d=T=>{const{scope:_,children:N}=T,M=ma.useRef(null),D=ma.useRef(new Map).current;return x.jsx(s,{scope:_,itemMap:D,collectionRef:M,children:N})};d.displayName=i;const p=n+"CollectionSlot",h=Hv(p),m=ma.forwardRef((T,_)=>{const{scope:N,children:M}=T,D=u(p,N),H=Fe(_,D.collectionRef);return x.jsx(h,{ref:H,children:M})});m.displayName=p;const b=n+"CollectionItemSlot",v="data-radix-collection-item",C=Hv(b),E=ma.forwardRef((T,_)=>{const{scope:N,children:M,...D}=T,H=ma.useRef(null),G=Fe(_,H),W=u(b,N);return ma.useEffect(()=>(W.itemMap.set(H,{ref:H,...D}),()=>{W.itemMap.delete(H)})),x.jsx(C,{[v]:"",ref:G,children:M})});E.displayName=b;function w(T){const _=u(n+"CollectionConsumer",T);return ma.useCallback(()=>{const M=_.collectionRef.current;if(!M)return[];const D=Array.from(M.querySelectorAll(`[${v}]`));return Array.from(_.itemMap.values()).sort((W,U)=>D.indexOf(W.ref.current)-D.indexOf(U.ref.current))},[_.collectionRef,_.itemMap])}return[{Provider:d,Slot:m,ItemSlot:E},w,l]}var Pw=g.createContext(void 0);function pd(n){const i=g.useContext(Pw);return n||i||"ltr"}function an(n){const i=g.useRef(n);return g.useEffect(()=>{i.current=n}),g.useMemo(()=>(...r)=>i.current?.(...r),[])}function Hw(n,i=globalThis?.document){const r=an(n);g.useEffect(()=>{const l=s=>{s.key==="Escape"&&r(s)};return i.addEventListener("keydown",l,{capture:!0}),()=>i.removeEventListener("keydown",l,{capture:!0})},[r,i])}var Uw="DismissableLayer",Bf="dismissableLayer.update",Bw="dismissableLayer.pointerDownOutside",Gw="dismissableLayer.focusOutside",Uv,h0=g.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Rs=g.forwardRef((n,i)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:l,onPointerDownOutside:s,onFocusOutside:u,onInteractOutside:d,onDismiss:p,...h}=n,m=g.useContext(h0),[b,v]=g.useState(null),C=b?.ownerDocument??globalThis?.document,[,E]=g.useState({}),w=Fe(i,U=>v(U)),T=Array.from(m.layers),[_]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),N=T.indexOf(_),M=b?T.indexOf(b):-1,D=m.layersWithOutsidePointerEventsDisabled.size>0,H=M>=N,G=Kw(U=>{const Y=U.target,J=[...m.branches].some(te=>te.contains(Y));!H||J||(s?.(U),d?.(U),U.defaultPrevented||p?.())},C),W=Yw(U=>{const Y=U.target;[...m.branches].some(te=>te.contains(Y))||(u?.(U),d?.(U),U.defaultPrevented||p?.())},C);return Hw(U=>{M===m.layers.size-1&&(l?.(U),!U.defaultPrevented&&p&&(U.preventDefault(),p()))},C),g.useEffect(()=>{if(b)return r&&(m.layersWithOutsidePointerEventsDisabled.size===0&&(Uv=C.body.style.pointerEvents,C.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(b)),m.layers.add(b),Bv(),()=>{r&&m.layersWithOutsidePointerEventsDisabled.size===1&&(C.body.style.pointerEvents=Uv)}},[b,C,r,m]),g.useEffect(()=>()=>{b&&(m.layers.delete(b),m.layersWithOutsidePointerEventsDisabled.delete(b),Bv())},[b,m]),g.useEffect(()=>{const U=()=>E({});return document.addEventListener(Bf,U),()=>document.removeEventListener(Bf,U)},[]),x.jsx(ke.div,{...h,ref:w,style:{pointerEvents:D?H?"auto":"none":void 0,...n.style},onFocusCapture:de(n.onFocusCapture,W.onFocusCapture),onBlurCapture:de(n.onBlurCapture,W.onBlurCapture),onPointerDownCapture:de(n.onPointerDownCapture,G.onPointerDownCapture)})});Rs.displayName=Uw;var Vw="DismissableLayerBranch",Fw=g.forwardRef((n,i)=>{const r=g.useContext(h0),l=g.useRef(null),s=Fe(i,l);return g.useEffect(()=>{const u=l.current;if(u)return r.branches.add(u),()=>{r.branches.delete(u)}},[r.branches]),x.jsx(ke.div,{...n,ref:s})});Fw.displayName=Vw;function Kw(n,i=globalThis?.document){const r=an(n),l=g.useRef(!1),s=g.useRef(()=>{});return g.useEffect(()=>{const u=p=>{if(p.target&&!l.current){let h=function(){m0(Bw,r,m,{discrete:!0})};const m={originalEvent:p};p.pointerType==="touch"?(i.removeEventListener("click",s.current),s.current=h,i.addEventListener("click",s.current,{once:!0})):h()}else i.removeEventListener("click",s.current);l.current=!1},d=window.setTimeout(()=>{i.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(d),i.removeEventListener("pointerdown",u),i.removeEventListener("click",s.current)}},[i,r]),{onPointerDownCapture:()=>l.current=!0}}function Yw(n,i=globalThis?.document){const r=an(n),l=g.useRef(!1);return g.useEffect(()=>{const s=u=>{u.target&&!l.current&&m0(Gw,r,{originalEvent:u},{discrete:!1})};return i.addEventListener("focusin",s),()=>i.removeEventListener("focusin",s)},[i,r]),{onFocusCapture:()=>l.current=!0,onBlurCapture:()=>l.current=!1}}function Bv(){const n=new CustomEvent(Bf);document.dispatchEvent(n)}function m0(n,i,r,{discrete:l}){const s=r.originalEvent.target,u=new CustomEvent(n,{bubbles:!1,cancelable:!0,detail:r});i&&s.addEventListener(n,i,{once:!0}),l?p0(s,u):s.dispatchEvent(u)}var Ef=0;function g0(){g.useEffect(()=>{const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",n[0]??Gv()),document.body.insertAdjacentElement("beforeend",n[1]??Gv()),Ef++,()=>{Ef===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(i=>i.remove()),Ef--}},[])}function Gv(){const n=document.createElement("span");return n.setAttribute("data-radix-focus-guard",""),n.tabIndex=0,n.style.outline="none",n.style.opacity="0",n.style.position="fixed",n.style.pointerEvents="none",n}var wf="focusScope.autoFocusOnMount",_f="focusScope.autoFocusOnUnmount",Vv={bubbles:!1,cancelable:!0},qw="FocusScope",hd=g.forwardRef((n,i)=>{const{loop:r=!1,trapped:l=!1,onMountAutoFocus:s,onUnmountAutoFocus:u,...d}=n,[p,h]=g.useState(null),m=an(s),b=an(u),v=g.useRef(null),C=Fe(i,T=>h(T)),E=g.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;g.useEffect(()=>{if(l){let T=function(D){if(E.paused||!p)return;const H=D.target;p.contains(H)?v.current=H:ga(v.current,{select:!0})},_=function(D){if(E.paused||!p)return;const H=D.relatedTarget;H!==null&&(p.contains(H)||ga(v.current,{select:!0}))},N=function(D){if(document.activeElement===document.body)for(const G of D)G.removedNodes.length>0&&ga(p)};document.addEventListener("focusin",T),document.addEventListener("focusout",_);const M=new MutationObserver(N);return p&&M.observe(p,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",T),document.removeEventListener("focusout",_),M.disconnect()}}},[l,p,E.paused]),g.useEffect(()=>{if(p){Kv.add(E);const T=document.activeElement;if(!p.contains(T)){const N=new CustomEvent(wf,Vv);p.addEventListener(wf,m),p.dispatchEvent(N),N.defaultPrevented||($w(Jw(v0(p)),{select:!0}),document.activeElement===T&&ga(p))}return()=>{p.removeEventListener(wf,m),setTimeout(()=>{const N=new CustomEvent(_f,Vv);p.addEventListener(_f,b),p.dispatchEvent(N),N.defaultPrevented||ga(T??document.body,{select:!0}),p.removeEventListener(_f,b),Kv.remove(E)},0)}}},[p,m,b,E]);const w=g.useCallback(T=>{if(!r&&!l||E.paused)return;const _=T.key==="Tab"&&!T.altKey&&!T.ctrlKey&&!T.metaKey,N=document.activeElement;if(_&&N){const M=T.currentTarget,[D,H]=Xw(M);D&&H?!T.shiftKey&&N===H?(T.preventDefault(),r&&ga(D,{select:!0})):T.shiftKey&&N===D&&(T.preventDefault(),r&&ga(H,{select:!0})):N===M&&T.preventDefault()}},[r,l,E.paused]);return x.jsx(ke.div,{tabIndex:-1,...d,ref:C,onKeyDown:w})});hd.displayName=qw;function $w(n,{select:i=!1}={}){const r=document.activeElement;for(const l of n)if(ga(l,{select:i}),document.activeElement!==r)return}function Xw(n){const i=v0(n),r=Fv(i,n),l=Fv(i.reverse(),n);return[r,l]}function v0(n){const i=[],r=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:l=>{const s=l.tagName==="INPUT"&&l.type==="hidden";return l.disabled||l.hidden||s?NodeFilter.FILTER_SKIP:l.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)i.push(r.currentNode);return i}function Fv(n,i){for(const r of n)if(!Qw(r,{upTo:i}))return r}function Qw(n,{upTo:i}){if(getComputedStyle(n).visibility==="hidden")return!0;for(;n;){if(i!==void 0&&n===i)return!1;if(getComputedStyle(n).display==="none")return!0;n=n.parentElement}return!1}function Zw(n){return n instanceof HTMLInputElement&&"select"in n}function ga(n,{select:i=!1}={}){if(n&&n.focus){const r=document.activeElement;n.focus({preventScroll:!0}),n!==r&&Zw(n)&&i&&n.select()}}var Kv=Ww();function Ww(){let n=[];return{add(i){const r=n[0];i!==r&&r?.pause(),n=Yv(n,i),n.unshift(i)},remove(i){n=Yv(n,i),n[0]?.resume()}}}function Yv(n,i){const r=[...n],l=r.indexOf(i);return l!==-1&&r.splice(l,1),r}function Jw(n){return n.filter(i=>i.tagName!=="A")}var e_=id[" useId ".trim().toString()]||(()=>{}),t_=0;function Un(n){const[i,r]=g.useState(e_());return mt(()=>{r(l=>l??String(t_++))},[n]),n||(i?`radix-${i}`:"")}const n_=["top","right","bottom","left"],xa=Math.min,Pt=Math.max,ms=Math.round,Wl=Math.floor,gn=n=>({x:n,y:n}),a_={left:"right",right:"left",bottom:"top",top:"bottom"},i_={start:"end",end:"start"};function Gf(n,i,r){return Pt(n,xa(i,r))}function Bn(n,i){return typeof n=="function"?n(i):n}function Gn(n){return n.split("-")[0]}function ar(n){return n.split("-")[1]}function md(n){return n==="x"?"y":"x"}function gd(n){return n==="y"?"height":"width"}const r_=new Set(["top","bottom"]);function hn(n){return r_.has(Gn(n))?"y":"x"}function vd(n){return md(hn(n))}function o_(n,i,r){r===void 0&&(r=!1);const l=ar(n),s=vd(n),u=gd(s);let d=s==="x"?l===(r?"end":"start")?"right":"left":l==="start"?"bottom":"top";return i.reference[u]>i.floating[u]&&(d=gs(d)),[d,gs(d)]}function l_(n){const i=gs(n);return[Vf(n),i,Vf(i)]}function Vf(n){return n.replace(/start|end/g,i=>i_[i])}const qv=["left","right"],$v=["right","left"],s_=["top","bottom"],c_=["bottom","top"];function u_(n,i,r){switch(n){case"top":case"bottom":return r?i?$v:qv:i?qv:$v;case"left":case"right":return i?s_:c_;default:return[]}}function f_(n,i,r,l){const s=ar(n);let u=u_(Gn(n),r==="start",l);return s&&(u=u.map(d=>d+"-"+s),i&&(u=u.concat(u.map(Vf)))),u}function gs(n){return n.replace(/left|right|bottom|top/g,i=>a_[i])}function d_(n){return{top:0,right:0,bottom:0,left:0,...n}}function y0(n){return typeof n!="number"?d_(n):{top:n,right:n,bottom:n,left:n}}function vs(n){const{x:i,y:r,width:l,height:s}=n;return{width:l,height:s,top:r,left:i,right:i+l,bottom:r+s,x:i,y:r}}function Xv(n,i,r){let{reference:l,floating:s}=n;const u=hn(i),d=vd(i),p=gd(d),h=Gn(i),m=u==="y",b=l.x+l.width/2-s.width/2,v=l.y+l.height/2-s.height/2,C=l[p]/2-s[p]/2;let E;switch(h){case"top":E={x:b,y:l.y-s.height};break;case"bottom":E={x:b,y:l.y+l.height};break;case"right":E={x:l.x+l.width,y:v};break;case"left":E={x:l.x-s.width,y:v};break;default:E={x:l.x,y:l.y}}switch(ar(i)){case"start":E[d]-=C*(r&&m?-1:1);break;case"end":E[d]+=C*(r&&m?-1:1);break}return E}const p_=async(n,i,r)=>{const{placement:l="bottom",strategy:s="absolute",middleware:u=[],platform:d}=r,p=u.filter(Boolean),h=await(d.isRTL==null?void 0:d.isRTL(i));let m=await d.getElementRects({reference:n,floating:i,strategy:s}),{x:b,y:v}=Xv(m,l,h),C=l,E={},w=0;for(let T=0;T<p.length;T++){const{name:_,fn:N}=p[T],{x:M,y:D,data:H,reset:G}=await N({x:b,y:v,initialPlacement:l,placement:C,strategy:s,middlewareData:E,rects:m,platform:d,elements:{reference:n,floating:i}});b=M??b,v=D??v,E={...E,[_]:{...E[_],...H}},G&&w<=50&&(w++,typeof G=="object"&&(G.placement&&(C=G.placement),G.rects&&(m=G.rects===!0?await d.getElementRects({reference:n,floating:i,strategy:s}):G.rects),{x:b,y:v}=Xv(m,C,h)),T=-1)}return{x:b,y:v,placement:C,strategy:s,middlewareData:E}};async function ho(n,i){var r;i===void 0&&(i={});const{x:l,y:s,platform:u,rects:d,elements:p,strategy:h}=n,{boundary:m="clippingAncestors",rootBoundary:b="viewport",elementContext:v="floating",altBoundary:C=!1,padding:E=0}=Bn(i,n),w=y0(E),_=p[C?v==="floating"?"reference":"floating":v],N=vs(await u.getClippingRect({element:(r=await(u.isElement==null?void 0:u.isElement(_)))==null||r?_:_.contextElement||await(u.getDocumentElement==null?void 0:u.getDocumentElement(p.floating)),boundary:m,rootBoundary:b,strategy:h})),M=v==="floating"?{x:l,y:s,width:d.floating.width,height:d.floating.height}:d.reference,D=await(u.getOffsetParent==null?void 0:u.getOffsetParent(p.floating)),H=await(u.isElement==null?void 0:u.isElement(D))?await(u.getScale==null?void 0:u.getScale(D))||{x:1,y:1}:{x:1,y:1},G=vs(u.convertOffsetParentRelativeRectToViewportRelativeRect?await u.convertOffsetParentRelativeRectToViewportRelativeRect({elements:p,rect:M,offsetParent:D,strategy:h}):M);return{top:(N.top-G.top+w.top)/H.y,bottom:(G.bottom-N.bottom+w.bottom)/H.y,left:(N.left-G.left+w.left)/H.x,right:(G.right-N.right+w.right)/H.x}}const h_=n=>({name:"arrow",options:n,async fn(i){const{x:r,y:l,placement:s,rects:u,platform:d,elements:p,middlewareData:h}=i,{element:m,padding:b=0}=Bn(n,i)||{};if(m==null)return{};const v=y0(b),C={x:r,y:l},E=vd(s),w=gd(E),T=await d.getDimensions(m),_=E==="y",N=_?"top":"left",M=_?"bottom":"right",D=_?"clientHeight":"clientWidth",H=u.reference[w]+u.reference[E]-C[E]-u.floating[w],G=C[E]-u.reference[E],W=await(d.getOffsetParent==null?void 0:d.getOffsetParent(m));let U=W?W[D]:0;(!U||!await(d.isElement==null?void 0:d.isElement(W)))&&(U=p.floating[D]||u.floating[w]);const Y=H/2-G/2,J=U/2-T[w]/2-1,te=xa(v[N],J),ae=xa(v[M],J),ne=te,re=U-T[w]-ae,ie=U/2-T[w]/2+Y,ue=Gf(ne,ie,re),L=!h.arrow&&ar(s)!=null&&ie!==ue&&u.reference[w]/2-(ie<ne?te:ae)-T[w]/2<0,K=L?ie<ne?ie-ne:ie-re:0;return{[E]:C[E]+K,data:{[E]:ue,centerOffset:ie-ue-K,...L&&{alignmentOffset:K}},reset:L}}}),m_=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(i){var r,l;const{placement:s,middlewareData:u,rects:d,initialPlacement:p,platform:h,elements:m}=i,{mainAxis:b=!0,crossAxis:v=!0,fallbackPlacements:C,fallbackStrategy:E="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:T=!0,..._}=Bn(n,i);if((r=u.arrow)!=null&&r.alignmentOffset)return{};const N=Gn(s),M=hn(p),D=Gn(p)===p,H=await(h.isRTL==null?void 0:h.isRTL(m.floating)),G=C||(D||!T?[gs(p)]:l_(p)),W=w!=="none";!C&&W&&G.push(...f_(p,T,w,H));const U=[p,...G],Y=await ho(i,_),J=[];let te=((l=u.flip)==null?void 0:l.overflows)||[];if(b&&J.push(Y[N]),v){const ie=o_(s,d,H);J.push(Y[ie[0]],Y[ie[1]])}if(te=[...te,{placement:s,overflows:J}],!J.every(ie=>ie<=0)){var ae,ne;const ie=(((ae=u.flip)==null?void 0:ae.index)||0)+1,ue=U[ie];if(ue&&(!(v==="alignment"?M!==hn(ue):!1)||te.every(z=>hn(z.placement)===M?z.overflows[0]>0:!0)))return{data:{index:ie,overflows:te},reset:{placement:ue}};let L=(ne=te.filter(K=>K.overflows[0]<=0).sort((K,z)=>K.overflows[1]-z.overflows[1])[0])==null?void 0:ne.placement;if(!L)switch(E){case"bestFit":{var re;const K=(re=te.filter(z=>{if(W){const Z=hn(z.placement);return Z===M||Z==="y"}return!0}).map(z=>[z.placement,z.overflows.filter(Z=>Z>0).reduce((Z,pe)=>Z+pe,0)]).sort((z,Z)=>z[1]-Z[1])[0])==null?void 0:re[0];K&&(L=K);break}case"initialPlacement":L=p;break}if(s!==L)return{reset:{placement:L}}}return{}}}};function Qv(n,i){return{top:n.top-i.height,right:n.right-i.width,bottom:n.bottom-i.height,left:n.left-i.width}}function Zv(n){return n_.some(i=>n[i]>=0)}const g_=function(n){return n===void 0&&(n={}),{name:"hide",options:n,async fn(i){const{rects:r}=i,{strategy:l="referenceHidden",...s}=Bn(n,i);switch(l){case"referenceHidden":{const u=await ho(i,{...s,elementContext:"reference"}),d=Qv(u,r.reference);return{data:{referenceHiddenOffsets:d,referenceHidden:Zv(d)}}}case"escaped":{const u=await ho(i,{...s,altBoundary:!0}),d=Qv(u,r.floating);return{data:{escapedOffsets:d,escaped:Zv(d)}}}default:return{}}}}},x0=new Set(["left","top"]);async function v_(n,i){const{placement:r,platform:l,elements:s}=n,u=await(l.isRTL==null?void 0:l.isRTL(s.floating)),d=Gn(r),p=ar(r),h=hn(r)==="y",m=x0.has(d)?-1:1,b=u&&h?-1:1,v=Bn(i,n);let{mainAxis:C,crossAxis:E,alignmentAxis:w}=typeof v=="number"?{mainAxis:v,crossAxis:0,alignmentAxis:null}:{mainAxis:v.mainAxis||0,crossAxis:v.crossAxis||0,alignmentAxis:v.alignmentAxis};return p&&typeof w=="number"&&(E=p==="end"?w*-1:w),h?{x:E*b,y:C*m}:{x:C*m,y:E*b}}const y_=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(i){var r,l;const{x:s,y:u,placement:d,middlewareData:p}=i,h=await v_(i,n);return d===((r=p.offset)==null?void 0:r.placement)&&(l=p.arrow)!=null&&l.alignmentOffset?{}:{x:s+h.x,y:u+h.y,data:{...h,placement:d}}}}},x_=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(i){const{x:r,y:l,placement:s}=i,{mainAxis:u=!0,crossAxis:d=!1,limiter:p={fn:_=>{let{x:N,y:M}=_;return{x:N,y:M}}},...h}=Bn(n,i),m={x:r,y:l},b=await ho(i,h),v=hn(Gn(s)),C=md(v);let E=m[C],w=m[v];if(u){const _=C==="y"?"top":"left",N=C==="y"?"bottom":"right",M=E+b[_],D=E-b[N];E=Gf(M,E,D)}if(d){const _=v==="y"?"top":"left",N=v==="y"?"bottom":"right",M=w+b[_],D=w-b[N];w=Gf(M,w,D)}const T=p.fn({...i,[C]:E,[v]:w});return{...T,data:{x:T.x-r,y:T.y-l,enabled:{[C]:u,[v]:d}}}}}},b_=function(n){return n===void 0&&(n={}),{options:n,fn(i){const{x:r,y:l,placement:s,rects:u,middlewareData:d}=i,{offset:p=0,mainAxis:h=!0,crossAxis:m=!0}=Bn(n,i),b={x:r,y:l},v=hn(s),C=md(v);let E=b[C],w=b[v];const T=Bn(p,i),_=typeof T=="number"?{mainAxis:T,crossAxis:0}:{mainAxis:0,crossAxis:0,...T};if(h){const D=C==="y"?"height":"width",H=u.reference[C]-u.floating[D]+_.mainAxis,G=u.reference[C]+u.reference[D]-_.mainAxis;E<H?E=H:E>G&&(E=G)}if(m){var N,M;const D=C==="y"?"width":"height",H=x0.has(Gn(s)),G=u.reference[v]-u.floating[D]+(H&&((N=d.offset)==null?void 0:N[v])||0)+(H?0:_.crossAxis),W=u.reference[v]+u.reference[D]+(H?0:((M=d.offset)==null?void 0:M[v])||0)-(H?_.crossAxis:0);w<G?w=G:w>W&&(w=W)}return{[C]:E,[v]:w}}}},S_=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(i){var r,l;const{placement:s,rects:u,platform:d,elements:p}=i,{apply:h=()=>{},...m}=Bn(n,i),b=await ho(i,m),v=Gn(s),C=ar(s),E=hn(s)==="y",{width:w,height:T}=u.floating;let _,N;v==="top"||v==="bottom"?(_=v,N=C===(await(d.isRTL==null?void 0:d.isRTL(p.floating))?"start":"end")?"left":"right"):(N=v,_=C==="end"?"top":"bottom");const M=T-b.top-b.bottom,D=w-b.left-b.right,H=xa(T-b[_],M),G=xa(w-b[N],D),W=!i.middlewareData.shift;let U=H,Y=G;if((r=i.middlewareData.shift)!=null&&r.enabled.x&&(Y=D),(l=i.middlewareData.shift)!=null&&l.enabled.y&&(U=M),W&&!C){const te=Pt(b.left,0),ae=Pt(b.right,0),ne=Pt(b.top,0),re=Pt(b.bottom,0);E?Y=w-2*(te!==0||ae!==0?te+ae:Pt(b.left,b.right)):U=T-2*(ne!==0||re!==0?ne+re:Pt(b.top,b.bottom))}await h({...i,availableWidth:Y,availableHeight:U});const J=await d.getDimensions(p.floating);return w!==J.width||T!==J.height?{reset:{rects:!0}}:{}}}};function As(){return typeof window<"u"}function ir(n){return b0(n)?(n.nodeName||"").toLowerCase():"#document"}function Ht(n){var i;return(n==null||(i=n.ownerDocument)==null?void 0:i.defaultView)||window}function xn(n){var i;return(i=(b0(n)?n.ownerDocument:n.document)||window.document)==null?void 0:i.documentElement}function b0(n){return As()?n instanceof Node||n instanceof Ht(n).Node:!1}function rn(n){return As()?n instanceof Element||n instanceof Ht(n).Element:!1}function vn(n){return As()?n instanceof HTMLElement||n instanceof Ht(n).HTMLElement:!1}function Wv(n){return!As()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof Ht(n).ShadowRoot}const C_=new Set(["inline","contents"]);function wo(n){const{overflow:i,overflowX:r,overflowY:l,display:s}=on(n);return/auto|scroll|overlay|hidden|clip/.test(i+l+r)&&!C_.has(s)}const T_=new Set(["table","td","th"]);function E_(n){return T_.has(ir(n))}const w_=[":popover-open",":modal"];function Ns(n){return w_.some(i=>{try{return n.matches(i)}catch{return!1}})}const __=["transform","translate","scale","rotate","perspective"],R_=["transform","translate","scale","rotate","perspective","filter"],A_=["paint","layout","strict","content"];function yd(n){const i=xd(),r=rn(n)?on(n):n;return __.some(l=>r[l]?r[l]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!i&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!i&&(r.filter?r.filter!=="none":!1)||R_.some(l=>(r.willChange||"").includes(l))||A_.some(l=>(r.contain||"").includes(l))}function N_(n){let i=ba(n);for(;vn(i)&&!$i(i);){if(yd(i))return i;if(Ns(i))return null;i=ba(i)}return null}function xd(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const O_=new Set(["html","body","#document"]);function $i(n){return O_.has(ir(n))}function on(n){return Ht(n).getComputedStyle(n)}function Os(n){return rn(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function ba(n){if(ir(n)==="html")return n;const i=n.assignedSlot||n.parentNode||Wv(n)&&n.host||xn(n);return Wv(i)?i.host:i}function S0(n){const i=ba(n);return $i(i)?n.ownerDocument?n.ownerDocument.body:n.body:vn(i)&&wo(i)?i:S0(i)}function mo(n,i,r){var l;i===void 0&&(i=[]),r===void 0&&(r=!0);const s=S0(n),u=s===((l=n.ownerDocument)==null?void 0:l.body),d=Ht(s);if(u){const p=Ff(d);return i.concat(d,d.visualViewport||[],wo(s)?s:[],p&&r?mo(p):[])}return i.concat(s,mo(s,[],r))}function Ff(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function C0(n){const i=on(n);let r=parseFloat(i.width)||0,l=parseFloat(i.height)||0;const s=vn(n),u=s?n.offsetWidth:r,d=s?n.offsetHeight:l,p=ms(r)!==u||ms(l)!==d;return p&&(r=u,l=d),{width:r,height:l,$:p}}function bd(n){return rn(n)?n:n.contextElement}function Ki(n){const i=bd(n);if(!vn(i))return gn(1);const r=i.getBoundingClientRect(),{width:l,height:s,$:u}=C0(i);let d=(u?ms(r.width):r.width)/l,p=(u?ms(r.height):r.height)/s;return(!d||!Number.isFinite(d))&&(d=1),(!p||!Number.isFinite(p))&&(p=1),{x:d,y:p}}const M_=gn(0);function T0(n){const i=Ht(n);return!xd()||!i.visualViewport?M_:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function D_(n,i,r){return i===void 0&&(i=!1),!r||i&&r!==Ht(n)?!1:i}function Xa(n,i,r,l){i===void 0&&(i=!1),r===void 0&&(r=!1);const s=n.getBoundingClientRect(),u=bd(n);let d=gn(1);i&&(l?rn(l)&&(d=Ki(l)):d=Ki(n));const p=D_(u,r,l)?T0(u):gn(0);let h=(s.left+p.x)/d.x,m=(s.top+p.y)/d.y,b=s.width/d.x,v=s.height/d.y;if(u){const C=Ht(u),E=l&&rn(l)?Ht(l):l;let w=C,T=Ff(w);for(;T&&l&&E!==w;){const _=Ki(T),N=T.getBoundingClientRect(),M=on(T),D=N.left+(T.clientLeft+parseFloat(M.paddingLeft))*_.x,H=N.top+(T.clientTop+parseFloat(M.paddingTop))*_.y;h*=_.x,m*=_.y,b*=_.x,v*=_.y,h+=D,m+=H,w=Ht(T),T=Ff(w)}}return vs({width:b,height:v,x:h,y:m})}function Ms(n,i){const r=Os(n).scrollLeft;return i?i.left+r:Xa(xn(n)).left+r}function E0(n,i){const r=n.getBoundingClientRect(),l=r.left+i.scrollLeft-Ms(n,r),s=r.top+i.scrollTop;return{x:l,y:s}}function L_(n){let{elements:i,rect:r,offsetParent:l,strategy:s}=n;const u=s==="fixed",d=xn(l),p=i?Ns(i.floating):!1;if(l===d||p&&u)return r;let h={scrollLeft:0,scrollTop:0},m=gn(1);const b=gn(0),v=vn(l);if((v||!v&&!u)&&((ir(l)!=="body"||wo(d))&&(h=Os(l)),vn(l))){const E=Xa(l);m=Ki(l),b.x=E.x+l.clientLeft,b.y=E.y+l.clientTop}const C=d&&!v&&!u?E0(d,h):gn(0);return{width:r.width*m.x,height:r.height*m.y,x:r.x*m.x-h.scrollLeft*m.x+b.x+C.x,y:r.y*m.y-h.scrollTop*m.y+b.y+C.y}}function j_(n){return Array.from(n.getClientRects())}function k_(n){const i=xn(n),r=Os(n),l=n.ownerDocument.body,s=Pt(i.scrollWidth,i.clientWidth,l.scrollWidth,l.clientWidth),u=Pt(i.scrollHeight,i.clientHeight,l.scrollHeight,l.clientHeight);let d=-r.scrollLeft+Ms(n);const p=-r.scrollTop;return on(l).direction==="rtl"&&(d+=Pt(i.clientWidth,l.clientWidth)-s),{width:s,height:u,x:d,y:p}}const Jv=25;function I_(n,i){const r=Ht(n),l=xn(n),s=r.visualViewport;let u=l.clientWidth,d=l.clientHeight,p=0,h=0;if(s){u=s.width,d=s.height;const b=xd();(!b||b&&i==="fixed")&&(p=s.offsetLeft,h=s.offsetTop)}const m=Ms(l);if(m<=0){const b=l.ownerDocument,v=b.body,C=getComputedStyle(v),E=b.compatMode==="CSS1Compat"&&parseFloat(C.marginLeft)+parseFloat(C.marginRight)||0,w=Math.abs(l.clientWidth-v.clientWidth-E);w<=Jv&&(u-=w)}else m<=Jv&&(u+=m);return{width:u,height:d,x:p,y:h}}const z_=new Set(["absolute","fixed"]);function P_(n,i){const r=Xa(n,!0,i==="fixed"),l=r.top+n.clientTop,s=r.left+n.clientLeft,u=vn(n)?Ki(n):gn(1),d=n.clientWidth*u.x,p=n.clientHeight*u.y,h=s*u.x,m=l*u.y;return{width:d,height:p,x:h,y:m}}function ey(n,i,r){let l;if(i==="viewport")l=I_(n,r);else if(i==="document")l=k_(xn(n));else if(rn(i))l=P_(i,r);else{const s=T0(n);l={x:i.x-s.x,y:i.y-s.y,width:i.width,height:i.height}}return vs(l)}function w0(n,i){const r=ba(n);return r===i||!rn(r)||$i(r)?!1:on(r).position==="fixed"||w0(r,i)}function H_(n,i){const r=i.get(n);if(r)return r;let l=mo(n,[],!1).filter(p=>rn(p)&&ir(p)!=="body"),s=null;const u=on(n).position==="fixed";let d=u?ba(n):n;for(;rn(d)&&!$i(d);){const p=on(d),h=yd(d);!h&&p.position==="fixed"&&(s=null),(u?!h&&!s:!h&&p.position==="static"&&!!s&&z_.has(s.position)||wo(d)&&!h&&w0(n,d))?l=l.filter(b=>b!==d):s=p,d=ba(d)}return i.set(n,l),l}function U_(n){let{element:i,boundary:r,rootBoundary:l,strategy:s}=n;const d=[...r==="clippingAncestors"?Ns(i)?[]:H_(i,this._c):[].concat(r),l],p=d[0],h=d.reduce((m,b)=>{const v=ey(i,b,s);return m.top=Pt(v.top,m.top),m.right=xa(v.right,m.right),m.bottom=xa(v.bottom,m.bottom),m.left=Pt(v.left,m.left),m},ey(i,p,s));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function B_(n){const{width:i,height:r}=C0(n);return{width:i,height:r}}function G_(n,i,r){const l=vn(i),s=xn(i),u=r==="fixed",d=Xa(n,!0,u,i);let p={scrollLeft:0,scrollTop:0};const h=gn(0);function m(){h.x=Ms(s)}if(l||!l&&!u)if((ir(i)!=="body"||wo(s))&&(p=Os(i)),l){const E=Xa(i,!0,u,i);h.x=E.x+i.clientLeft,h.y=E.y+i.clientTop}else s&&m();u&&!l&&s&&m();const b=s&&!l&&!u?E0(s,p):gn(0),v=d.left+p.scrollLeft-h.x-b.x,C=d.top+p.scrollTop-h.y-b.y;return{x:v,y:C,width:d.width,height:d.height}}function Rf(n){return on(n).position==="static"}function ty(n,i){if(!vn(n)||on(n).position==="fixed")return null;if(i)return i(n);let r=n.offsetParent;return xn(n)===r&&(r=r.ownerDocument.body),r}function _0(n,i){const r=Ht(n);if(Ns(n))return r;if(!vn(n)){let s=ba(n);for(;s&&!$i(s);){if(rn(s)&&!Rf(s))return s;s=ba(s)}return r}let l=ty(n,i);for(;l&&E_(l)&&Rf(l);)l=ty(l,i);return l&&$i(l)&&Rf(l)&&!yd(l)?r:l||N_(n)||r}const V_=async function(n){const i=this.getOffsetParent||_0,r=this.getDimensions,l=await r(n.floating);return{reference:G_(n.reference,await i(n.floating),n.strategy),floating:{x:0,y:0,width:l.width,height:l.height}}};function F_(n){return on(n).direction==="rtl"}const K_={convertOffsetParentRelativeRectToViewportRelativeRect:L_,getDocumentElement:xn,getClippingRect:U_,getOffsetParent:_0,getElementRects:V_,getClientRects:j_,getDimensions:B_,getScale:Ki,isElement:rn,isRTL:F_};function R0(n,i){return n.x===i.x&&n.y===i.y&&n.width===i.width&&n.height===i.height}function Y_(n,i){let r=null,l;const s=xn(n);function u(){var p;clearTimeout(l),(p=r)==null||p.disconnect(),r=null}function d(p,h){p===void 0&&(p=!1),h===void 0&&(h=1),u();const m=n.getBoundingClientRect(),{left:b,top:v,width:C,height:E}=m;if(p||i(),!C||!E)return;const w=Wl(v),T=Wl(s.clientWidth-(b+C)),_=Wl(s.clientHeight-(v+E)),N=Wl(b),D={rootMargin:-w+"px "+-T+"px "+-_+"px "+-N+"px",threshold:Pt(0,xa(1,h))||1};let H=!0;function G(W){const U=W[0].intersectionRatio;if(U!==h){if(!H)return d();U?d(!1,U):l=setTimeout(()=>{d(!1,1e-7)},1e3)}U===1&&!R0(m,n.getBoundingClientRect())&&d(),H=!1}try{r=new IntersectionObserver(G,{...D,root:s.ownerDocument})}catch{r=new IntersectionObserver(G,D)}r.observe(n)}return d(!0),u}function q_(n,i,r,l){l===void 0&&(l={});const{ancestorScroll:s=!0,ancestorResize:u=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:p=typeof IntersectionObserver=="function",animationFrame:h=!1}=l,m=bd(n),b=s||u?[...m?mo(m):[],...mo(i)]:[];b.forEach(N=>{s&&N.addEventListener("scroll",r,{passive:!0}),u&&N.addEventListener("resize",r)});const v=m&&p?Y_(m,r):null;let C=-1,E=null;d&&(E=new ResizeObserver(N=>{let[M]=N;M&&M.target===m&&E&&(E.unobserve(i),cancelAnimationFrame(C),C=requestAnimationFrame(()=>{var D;(D=E)==null||D.observe(i)})),r()}),m&&!h&&E.observe(m),E.observe(i));let w,T=h?Xa(n):null;h&&_();function _(){const N=Xa(n);T&&!R0(T,N)&&r(),T=N,w=requestAnimationFrame(_)}return r(),()=>{var N;b.forEach(M=>{s&&M.removeEventListener("scroll",r),u&&M.removeEventListener("resize",r)}),v?.(),(N=E)==null||N.disconnect(),E=null,h&&cancelAnimationFrame(w)}}const $_=y_,X_=x_,Q_=m_,Z_=S_,W_=g_,ny=h_,J_=b_,eR=(n,i,r)=>{const l=new Map,s={platform:K_,...r},u={...s.platform,_c:l};return p_(n,i,{...s,platform:u})};var tR=typeof document<"u",nR=function(){},os=tR?g.useLayoutEffect:nR;function ys(n,i){if(n===i)return!0;if(typeof n!=typeof i)return!1;if(typeof n=="function"&&n.toString()===i.toString())return!0;let r,l,s;if(n&&i&&typeof n=="object"){if(Array.isArray(n)){if(r=n.length,r!==i.length)return!1;for(l=r;l--!==0;)if(!ys(n[l],i[l]))return!1;return!0}if(s=Object.keys(n),r=s.length,r!==Object.keys(i).length)return!1;for(l=r;l--!==0;)if(!{}.hasOwnProperty.call(i,s[l]))return!1;for(l=r;l--!==0;){const u=s[l];if(!(u==="_owner"&&n.$$typeof)&&!ys(n[u],i[u]))return!1}return!0}return n!==n&&i!==i}function A0(n){return typeof window>"u"?1:(n.ownerDocument.defaultView||window).devicePixelRatio||1}function ay(n,i){const r=A0(n);return Math.round(i*r)/r}function Af(n){const i=g.useRef(n);return os(()=>{i.current=n}),i}function aR(n){n===void 0&&(n={});const{placement:i="bottom",strategy:r="absolute",middleware:l=[],platform:s,elements:{reference:u,floating:d}={},transform:p=!0,whileElementsMounted:h,open:m}=n,[b,v]=g.useState({x:0,y:0,strategy:r,placement:i,middlewareData:{},isPositioned:!1}),[C,E]=g.useState(l);ys(C,l)||E(l);const[w,T]=g.useState(null),[_,N]=g.useState(null),M=g.useCallback(z=>{z!==W.current&&(W.current=z,T(z))},[]),D=g.useCallback(z=>{z!==U.current&&(U.current=z,N(z))},[]),H=u||w,G=d||_,W=g.useRef(null),U=g.useRef(null),Y=g.useRef(b),J=h!=null,te=Af(h),ae=Af(s),ne=Af(m),re=g.useCallback(()=>{if(!W.current||!U.current)return;const z={placement:i,strategy:r,middleware:C};ae.current&&(z.platform=ae.current),eR(W.current,U.current,z).then(Z=>{const pe={...Z,isPositioned:ne.current!==!1};ie.current&&!ys(Y.current,pe)&&(Y.current=pe,Eo.flushSync(()=>{v(pe)}))})},[C,i,r,ae,ne]);os(()=>{m===!1&&Y.current.isPositioned&&(Y.current.isPositioned=!1,v(z=>({...z,isPositioned:!1})))},[m]);const ie=g.useRef(!1);os(()=>(ie.current=!0,()=>{ie.current=!1}),[]),os(()=>{if(H&&(W.current=H),G&&(U.current=G),H&&G){if(te.current)return te.current(H,G,re);re()}},[H,G,re,te,J]);const ue=g.useMemo(()=>({reference:W,floating:U,setReference:M,setFloating:D}),[M,D]),L=g.useMemo(()=>({reference:H,floating:G}),[H,G]),K=g.useMemo(()=>{const z={position:r,left:0,top:0};if(!L.floating)return z;const Z=ay(L.floating,b.x),pe=ay(L.floating,b.y);return p?{...z,transform:"translate("+Z+"px, "+pe+"px)",...A0(L.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:Z,top:pe}},[r,p,L.floating,b.x,b.y]);return g.useMemo(()=>({...b,update:re,refs:ue,elements:L,floatingStyles:K}),[b,re,ue,L,K])}const iR=n=>{function i(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:n,fn(r){const{element:l,padding:s}=typeof n=="function"?n(r):n;return l&&i(l)?l.current!=null?ny({element:l.current,padding:s}).fn(r):{}:l?ny({element:l,padding:s}).fn(r):{}}}},rR=(n,i)=>({...$_(n),options:[n,i]}),oR=(n,i)=>({...X_(n),options:[n,i]}),lR=(n,i)=>({...J_(n),options:[n,i]}),sR=(n,i)=>({...Q_(n),options:[n,i]}),cR=(n,i)=>({...Z_(n),options:[n,i]}),uR=(n,i)=>({...W_(n),options:[n,i]}),fR=(n,i)=>({...iR(n),options:[n,i]});var dR="Arrow",N0=g.forwardRef((n,i)=>{const{children:r,width:l=10,height:s=5,...u}=n;return x.jsx(ke.svg,{...u,ref:i,width:l,height:s,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:n.asChild?r:x.jsx("polygon",{points:"0,0 30,0 15,10"})})});N0.displayName=dR;var pR=N0;function hR(n){const[i,r]=g.useState(void 0);return mt(()=>{if(n){r({width:n.offsetWidth,height:n.offsetHeight});const l=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const u=s[0];let d,p;if("borderBoxSize"in u){const h=u.borderBoxSize,m=Array.isArray(h)?h[0]:h;d=m.inlineSize,p=m.blockSize}else d=n.offsetWidth,p=n.offsetHeight;r({width:d,height:p})});return l.observe(n,{box:"border-box"}),()=>l.unobserve(n)}else r(void 0)},[n]),i}var Sd="Popper",[O0,rr]=Wa(Sd),[mR,M0]=O0(Sd),D0=n=>{const{__scopePopper:i,children:r}=n,[l,s]=g.useState(null);return x.jsx(mR,{scope:i,anchor:l,onAnchorChange:s,children:r})};D0.displayName=Sd;var L0="PopperAnchor",j0=g.forwardRef((n,i)=>{const{__scopePopper:r,virtualRef:l,...s}=n,u=M0(L0,r),d=g.useRef(null),p=Fe(i,d),h=g.useRef(null);return g.useEffect(()=>{const m=h.current;h.current=l?.current||d.current,m!==h.current&&u.onAnchorChange(h.current)}),l?null:x.jsx(ke.div,{...s,ref:p})});j0.displayName=L0;var Cd="PopperContent",[gR,vR]=O0(Cd),k0=g.forwardRef((n,i)=>{const{__scopePopper:r,side:l="bottom",sideOffset:s=0,align:u="center",alignOffset:d=0,arrowPadding:p=0,avoidCollisions:h=!0,collisionBoundary:m=[],collisionPadding:b=0,sticky:v="partial",hideWhenDetached:C=!1,updatePositionStrategy:E="optimized",onPlaced:w,...T}=n,_=M0(Cd,r),[N,M]=g.useState(null),D=Fe(i,X=>M(X)),[H,G]=g.useState(null),W=hR(H),U=W?.width??0,Y=W?.height??0,J=l+(u!=="center"?"-"+u:""),te=typeof b=="number"?b:{top:0,right:0,bottom:0,left:0,...b},ae=Array.isArray(m)?m:[m],ne=ae.length>0,re={padding:te,boundary:ae.filter(xR),altBoundary:ne},{refs:ie,floatingStyles:ue,placement:L,isPositioned:K,middlewareData:z}=aR({strategy:"fixed",placement:J,whileElementsMounted:(...X)=>q_(...X,{animationFrame:E==="always"}),elements:{reference:_.anchor},middleware:[rR({mainAxis:s+Y,alignmentAxis:d}),h&&oR({mainAxis:!0,crossAxis:!1,limiter:v==="partial"?lR():void 0,...re}),h&&sR({...re}),cR({...re,apply:({elements:X,rects:ye,availableWidth:be,availableHeight:_e})=>{const{width:Me,height:Ie}=ye.reference,yt=X.floating.style;yt.setProperty("--radix-popper-available-width",`${be}px`),yt.setProperty("--radix-popper-available-height",`${_e}px`),yt.setProperty("--radix-popper-anchor-width",`${Me}px`),yt.setProperty("--radix-popper-anchor-height",`${Ie}px`)}}),H&&fR({element:H,padding:p}),bR({arrowWidth:U,arrowHeight:Y}),C&&uR({strategy:"referenceHidden",...re})]}),[Z,pe]=P0(L),R=an(w);mt(()=>{K&&R?.()},[K,R]);const V=z.arrow?.x,Q=z.arrow?.y,ee=z.arrow?.centerOffset!==0,[fe,me]=g.useState();return mt(()=>{N&&me(window.getComputedStyle(N).zIndex)},[N]),x.jsx("div",{ref:ie.setFloating,"data-radix-popper-content-wrapper":"",style:{...ue,transform:K?ue.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:fe,"--radix-popper-transform-origin":[z.transformOrigin?.x,z.transformOrigin?.y].join(" "),...z.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:n.dir,children:x.jsx(gR,{scope:r,placedSide:Z,onArrowChange:G,arrowX:V,arrowY:Q,shouldHideArrow:ee,children:x.jsx(ke.div,{"data-side":Z,"data-align":pe,...T,ref:D,style:{...T.style,animation:K?void 0:"none"}})})})});k0.displayName=Cd;var I0="PopperArrow",yR={top:"bottom",right:"left",bottom:"top",left:"right"},z0=g.forwardRef(function(i,r){const{__scopePopper:l,...s}=i,u=vR(I0,l),d=yR[u.placedSide];return x.jsx("span",{ref:u.onArrowChange,style:{position:"absolute",left:u.arrowX,top:u.arrowY,[d]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[u.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[u.placedSide],visibility:u.shouldHideArrow?"hidden":void 0},children:x.jsx(pR,{...s,ref:r,style:{...s.style,display:"block"}})})});z0.displayName=I0;function xR(n){return n!==null}var bR=n=>({name:"transformOrigin",options:n,fn(i){const{placement:r,rects:l,middlewareData:s}=i,d=s.arrow?.centerOffset!==0,p=d?0:n.arrowWidth,h=d?0:n.arrowHeight,[m,b]=P0(r),v={start:"0%",center:"50%",end:"100%"}[b],C=(s.arrow?.x??0)+p/2,E=(s.arrow?.y??0)+h/2;let w="",T="";return m==="bottom"?(w=d?v:`${C}px`,T=`${-h}px`):m==="top"?(w=d?v:`${C}px`,T=`${l.floating.height+h}px`):m==="right"?(w=`${-h}px`,T=d?v:`${E}px`):m==="left"&&(w=`${l.floating.width+h}px`,T=d?v:`${E}px`),{data:{x:w,y:T}}}});function P0(n){const[i,r="center"]=n.split("-");return[i,r]}var Ds=D0,Td=j0,Ed=k0,wd=z0,SR="Portal",Ls=g.forwardRef((n,i)=>{const{container:r,...l}=n,[s,u]=g.useState(!1);mt(()=>u(!0),[]);const d=r||s&&globalThis?.document?.body;return d?kT.createPortal(x.jsx(ke.div,{...l,ref:i}),d):null});Ls.displayName=SR;function CR(n,i){return g.useReducer((r,l)=>i[r][l]??r,n)}var Ja=n=>{const{present:i,children:r}=n,l=TR(i),s=typeof r=="function"?r({present:l.isPresent}):g.Children.only(r),u=Fe(l.ref,ER(s));return typeof r=="function"||l.isPresent?g.cloneElement(s,{ref:u}):null};Ja.displayName="Presence";function TR(n){const[i,r]=g.useState(),l=g.useRef(null),s=g.useRef(n),u=g.useRef("none"),d=n?"mounted":"unmounted",[p,h]=CR(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return g.useEffect(()=>{const m=Jl(l.current);u.current=p==="mounted"?m:"none"},[p]),mt(()=>{const m=l.current,b=s.current;if(b!==n){const C=u.current,E=Jl(m);n?h("MOUNT"):E==="none"||m?.display==="none"?h("UNMOUNT"):h(b&&C!==E?"ANIMATION_OUT":"UNMOUNT"),s.current=n}},[n,h]),mt(()=>{if(i){let m;const b=i.ownerDocument.defaultView??window,v=E=>{const T=Jl(l.current).includes(CSS.escape(E.animationName));if(E.target===i&&T&&(h("ANIMATION_END"),!s.current)){const _=i.style.animationFillMode;i.style.animationFillMode="forwards",m=b.setTimeout(()=>{i.style.animationFillMode==="forwards"&&(i.style.animationFillMode=_)})}},C=E=>{E.target===i&&(u.current=Jl(l.current))};return i.addEventListener("animationstart",C),i.addEventListener("animationcancel",v),i.addEventListener("animationend",v),()=>{b.clearTimeout(m),i.removeEventListener("animationstart",C),i.removeEventListener("animationcancel",v),i.removeEventListener("animationend",v)}}else h("ANIMATION_END")},[i,h]),{isPresent:["mounted","unmountSuspended"].includes(p),ref:g.useCallback(m=>{l.current=m?getComputedStyle(m):null,r(m)},[])}}function Jl(n){return n?.animationName||"none"}function ER(n){let i=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning;return r?n.ref:(i=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}var Nf="rovingFocusGroup.onEntryFocus",wR={bubbles:!1,cancelable:!0},_o="RovingFocusGroup",[Kf,H0,_R]=dd(_o),[RR,U0]=Wa(_o,[_R]),[AR,NR]=RR(_o),B0=g.forwardRef((n,i)=>x.jsx(Kf.Provider,{scope:n.__scopeRovingFocusGroup,children:x.jsx(Kf.Slot,{scope:n.__scopeRovingFocusGroup,children:x.jsx(OR,{...n,ref:i})})}));B0.displayName=_o;var OR=g.forwardRef((n,i)=>{const{__scopeRovingFocusGroup:r,orientation:l,loop:s=!1,dir:u,currentTabStopId:d,defaultCurrentTabStopId:p,onCurrentTabStopIdChange:h,onEntryFocus:m,preventScrollOnEntryFocus:b=!1,...v}=n,C=g.useRef(null),E=Fe(i,C),w=pd(u),[T,_]=qi({prop:d,defaultProp:p??null,onChange:h,caller:_o}),[N,M]=g.useState(!1),D=an(m),H=H0(r),G=g.useRef(!1),[W,U]=g.useState(0);return g.useEffect(()=>{const Y=C.current;if(Y)return Y.addEventListener(Nf,D),()=>Y.removeEventListener(Nf,D)},[D]),x.jsx(AR,{scope:r,orientation:l,dir:w,loop:s,currentTabStopId:T,onItemFocus:g.useCallback(Y=>_(Y),[_]),onItemShiftTab:g.useCallback(()=>M(!0),[]),onFocusableItemAdd:g.useCallback(()=>U(Y=>Y+1),[]),onFocusableItemRemove:g.useCallback(()=>U(Y=>Y-1),[]),children:x.jsx(ke.div,{tabIndex:N||W===0?-1:0,"data-orientation":l,...v,ref:E,style:{outline:"none",...n.style},onMouseDown:de(n.onMouseDown,()=>{G.current=!0}),onFocus:de(n.onFocus,Y=>{const J=!G.current;if(Y.target===Y.currentTarget&&J&&!N){const te=new CustomEvent(Nf,wR);if(Y.currentTarget.dispatchEvent(te),!te.defaultPrevented){const ae=H().filter(L=>L.focusable),ne=ae.find(L=>L.active),re=ae.find(L=>L.id===T),ue=[ne,re,...ae].filter(Boolean).map(L=>L.ref.current);F0(ue,b)}}G.current=!1}),onBlur:de(n.onBlur,()=>M(!1))})})}),G0="RovingFocusGroupItem",V0=g.forwardRef((n,i)=>{const{__scopeRovingFocusGroup:r,focusable:l=!0,active:s=!1,tabStopId:u,children:d,...p}=n,h=Un(),m=u||h,b=NR(G0,r),v=b.currentTabStopId===m,C=H0(r),{onFocusableItemAdd:E,onFocusableItemRemove:w,currentTabStopId:T}=b;return g.useEffect(()=>{if(l)return E(),()=>w()},[l,E,w]),x.jsx(Kf.ItemSlot,{scope:r,id:m,focusable:l,active:s,children:x.jsx(ke.span,{tabIndex:v?0:-1,"data-orientation":b.orientation,...p,ref:i,onMouseDown:de(n.onMouseDown,_=>{l?b.onItemFocus(m):_.preventDefault()}),onFocus:de(n.onFocus,()=>b.onItemFocus(m)),onKeyDown:de(n.onKeyDown,_=>{if(_.key==="Tab"&&_.shiftKey){b.onItemShiftTab();return}if(_.target!==_.currentTarget)return;const N=LR(_,b.orientation,b.dir);if(N!==void 0){if(_.metaKey||_.ctrlKey||_.altKey||_.shiftKey)return;_.preventDefault();let D=C().filter(H=>H.focusable).map(H=>H.ref.current);if(N==="last")D.reverse();else if(N==="prev"||N==="next"){N==="prev"&&D.reverse();const H=D.indexOf(_.currentTarget);D=b.loop?jR(D,H+1):D.slice(H+1)}setTimeout(()=>F0(D))}}),children:typeof d=="function"?d({isCurrentTabStop:v,hasTabStop:T!=null}):d})})});V0.displayName=G0;var MR={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function DR(n,i){return i!=="rtl"?n:n==="ArrowLeft"?"ArrowRight":n==="ArrowRight"?"ArrowLeft":n}function LR(n,i,r){const l=DR(n.key,r);if(!(i==="vertical"&&["ArrowLeft","ArrowRight"].includes(l))&&!(i==="horizontal"&&["ArrowUp","ArrowDown"].includes(l)))return MR[l]}function F0(n,i=!1){const r=document.activeElement;for(const l of n)if(l===r||(l.focus({preventScroll:i}),document.activeElement!==r))return}function jR(n,i){return n.map((r,l)=>n[(i+l)%n.length])}var kR=B0,IR=V0;function zR(n){const i=PR(n),r=g.forwardRef((l,s)=>{const{children:u,...d}=l,p=g.Children.toArray(u),h=p.find(UR);if(h){const m=h.props.children,b=p.map(v=>v===h?g.Children.count(m)>1?g.Children.only(null):g.isValidElement(m)?m.props.children:null:v);return x.jsx(i,{...d,ref:s,children:g.isValidElement(m)?g.cloneElement(m,void 0,b):null})}return x.jsx(i,{...d,ref:s,children:u})});return r.displayName=`${n}.Slot`,r}function PR(n){const i=g.forwardRef((r,l)=>{const{children:s,...u}=r;if(g.isValidElement(s)){const d=GR(s),p=BR(u,s.props);return s.type!==g.Fragment&&(p.ref=l?Sa(l,d):d),g.cloneElement(s,p)}return g.Children.count(s)>1?g.Children.only(null):null});return i.displayName=`${n}.SlotClone`,i}var HR=Symbol("radix.slottable");function UR(n){return g.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===HR}function BR(n,i){const r={...i};for(const l in i){const s=n[l],u=i[l];/^on[A-Z]/.test(l)?s&&u?r[l]=(...p)=>{const h=u(...p);return s(...p),h}:s&&(r[l]=s):l==="style"?r[l]={...s,...u}:l==="className"&&(r[l]=[s,u].filter(Boolean).join(" "))}return{...n,...r}}function GR(n){let i=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning;return r?n.ref:(i=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}var VR=function(n){if(typeof document>"u")return null;var i=Array.isArray(n)?n[0]:n;return i.ownerDocument.body},Bi=new WeakMap,es=new WeakMap,ts={},Of=0,K0=function(n){return n&&(n.host||K0(n.parentNode))},FR=function(n,i){return i.map(function(r){if(n.contains(r))return r;var l=K0(r);return l&&n.contains(l)?l:(console.error("aria-hidden",r,"in not contained inside",n,". Doing nothing"),null)}).filter(function(r){return!!r})},KR=function(n,i,r,l){var s=FR(i,Array.isArray(n)?n:[n]);ts[r]||(ts[r]=new WeakMap);var u=ts[r],d=[],p=new Set,h=new Set(s),m=function(v){!v||p.has(v)||(p.add(v),m(v.parentNode))};s.forEach(m);var b=function(v){!v||h.has(v)||Array.prototype.forEach.call(v.children,function(C){if(p.has(C))b(C);else try{var E=C.getAttribute(l),w=E!==null&&E!=="false",T=(Bi.get(C)||0)+1,_=(u.get(C)||0)+1;Bi.set(C,T),u.set(C,_),d.push(C),T===1&&w&&es.set(C,!0),_===1&&C.setAttribute(r,"true"),w||C.setAttribute(l,"true")}catch(N){console.error("aria-hidden: cannot operate on ",C,N)}})};return b(i),p.clear(),Of++,function(){d.forEach(function(v){var C=Bi.get(v)-1,E=u.get(v)-1;Bi.set(v,C),u.set(v,E),C||(es.has(v)||v.removeAttribute(l),es.delete(v)),E||v.removeAttribute(r)}),Of--,Of||(Bi=new WeakMap,Bi=new WeakMap,es=new WeakMap,ts={})}},Y0=function(n,i,r){r===void 0&&(r="data-aria-hidden");var l=Array.from(Array.isArray(n)?n:[n]),s=VR(n);return s?(l.push.apply(l,Array.from(s.querySelectorAll("[aria-live], script"))),KR(l,s,r,"aria-hidden")):function(){return null}},dn=function(){return dn=Object.assign||function(i){for(var r,l=1,s=arguments.length;l<s;l++){r=arguments[l];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(i[u]=r[u])}return i},dn.apply(this,arguments)};function q0(n,i){var r={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&i.indexOf(l)<0&&(r[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,l=Object.getOwnPropertySymbols(n);s<l.length;s++)i.indexOf(l[s])<0&&Object.prototype.propertyIsEnumerable.call(n,l[s])&&(r[l[s]]=n[l[s]]);return r}function YR(n,i,r){if(r||arguments.length===2)for(var l=0,s=i.length,u;l<s;l++)(u||!(l in i))&&(u||(u=Array.prototype.slice.call(i,0,l)),u[l]=i[l]);return n.concat(u||Array.prototype.slice.call(i))}var ls="right-scroll-bar-position",ss="width-before-scroll-bar",qR="with-scroll-bars-hidden",$R="--removed-body-scroll-bar-size";function Mf(n,i){return typeof n=="function"?n(i):n&&(n.current=i),n}function XR(n,i){var r=g.useState(function(){return{value:n,callback:i,facade:{get current(){return r.value},set current(l){var s=r.value;s!==l&&(r.value=l,r.callback(l,s))}}}})[0];return r.callback=i,r.facade}var QR=typeof window<"u"?g.useLayoutEffect:g.useEffect,iy=new WeakMap;function ZR(n,i){var r=XR(null,function(l){return n.forEach(function(s){return Mf(s,l)})});return QR(function(){var l=iy.get(r);if(l){var s=new Set(l),u=new Set(n),d=r.current;s.forEach(function(p){u.has(p)||Mf(p,null)}),u.forEach(function(p){s.has(p)||Mf(p,d)})}iy.set(r,n)},[n]),r}function WR(n){return n}function JR(n,i){i===void 0&&(i=WR);var r=[],l=!1,s={read:function(){if(l)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:n},useMedium:function(u){var d=i(u,l);return r.push(d),function(){r=r.filter(function(p){return p!==d})}},assignSyncMedium:function(u){for(l=!0;r.length;){var d=r;r=[],d.forEach(u)}r={push:function(p){return u(p)},filter:function(){return r}}},assignMedium:function(u){l=!0;var d=[];if(r.length){var p=r;r=[],p.forEach(u),d=r}var h=function(){var b=d;d=[],b.forEach(u)},m=function(){return Promise.resolve().then(h)};m(),r={push:function(b){d.push(b),m()},filter:function(b){return d=d.filter(b),r}}}};return s}function e2(n){n===void 0&&(n={});var i=JR(null);return i.options=dn({async:!0,ssr:!1},n),i}var $0=function(n){var i=n.sideCar,r=q0(n,["sideCar"]);if(!i)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var l=i.read();if(!l)throw new Error("Sidecar medium not found");return g.createElement(l,dn({},r))};$0.isSideCarExport=!0;function t2(n,i){return n.useMedium(i),$0}var X0=e2(),Df=function(){},js=g.forwardRef(function(n,i){var r=g.useRef(null),l=g.useState({onScrollCapture:Df,onWheelCapture:Df,onTouchMoveCapture:Df}),s=l[0],u=l[1],d=n.forwardProps,p=n.children,h=n.className,m=n.removeScrollBar,b=n.enabled,v=n.shards,C=n.sideCar,E=n.noRelative,w=n.noIsolation,T=n.inert,_=n.allowPinchZoom,N=n.as,M=N===void 0?"div":N,D=n.gapMode,H=q0(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),G=C,W=ZR([r,i]),U=dn(dn({},H),s);return g.createElement(g.Fragment,null,b&&g.createElement(G,{sideCar:X0,removeScrollBar:m,shards:v,noRelative:E,noIsolation:w,inert:T,setCallbacks:u,allowPinchZoom:!!_,lockRef:r,gapMode:D}),d?g.cloneElement(g.Children.only(p),dn(dn({},U),{ref:W})):g.createElement(M,dn({},U,{className:h,ref:W}),p))});js.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};js.classNames={fullWidth:ss,zeroRight:ls};var n2=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function a2(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var i=n2();return i&&n.setAttribute("nonce",i),n}function i2(n,i){n.styleSheet?n.styleSheet.cssText=i:n.appendChild(document.createTextNode(i))}function r2(n){var i=document.head||document.getElementsByTagName("head")[0];i.appendChild(n)}var o2=function(){var n=0,i=null;return{add:function(r){n==0&&(i=a2())&&(i2(i,r),r2(i)),n++},remove:function(){n--,!n&&i&&(i.parentNode&&i.parentNode.removeChild(i),i=null)}}},l2=function(){var n=o2();return function(i,r){g.useEffect(function(){return n.add(i),function(){n.remove()}},[i&&r])}},Q0=function(){var n=l2(),i=function(r){var l=r.styles,s=r.dynamic;return n(l,s),null};return i},s2={left:0,top:0,right:0,gap:0},Lf=function(n){return parseInt(n||"",10)||0},c2=function(n){var i=window.getComputedStyle(document.body),r=i[n==="padding"?"paddingLeft":"marginLeft"],l=i[n==="padding"?"paddingTop":"marginTop"],s=i[n==="padding"?"paddingRight":"marginRight"];return[Lf(r),Lf(l),Lf(s)]},u2=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return s2;var i=c2(n),r=document.documentElement.clientWidth,l=window.innerWidth;return{left:i[0],top:i[1],right:i[2],gap:Math.max(0,l-r+i[2]-i[0])}},f2=Q0(),Yi="data-scroll-locked",d2=function(n,i,r,l){var s=n.left,u=n.top,d=n.right,p=n.gap;return r===void 0&&(r="margin"),`
  .`.concat(qR,` {
   overflow: hidden `).concat(l,`;
   padding-right: `).concat(p,"px ").concat(l,`;
  }
  body[`).concat(Yi,`] {
    overflow: hidden `).concat(l,`;
    overscroll-behavior: contain;
    `).concat([i&&"position: relative ".concat(l,";"),r==="margin"&&`
    padding-left: `.concat(s,`px;
    padding-top: `).concat(u,`px;
    padding-right: `).concat(d,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(p,"px ").concat(l,`;
    `),r==="padding"&&"padding-right: ".concat(p,"px ").concat(l,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ls,` {
    right: `).concat(p,"px ").concat(l,`;
  }
  
  .`).concat(ss,` {
    margin-right: `).concat(p,"px ").concat(l,`;
  }
  
  .`).concat(ls," .").concat(ls,` {
    right: 0 `).concat(l,`;
  }
  
  .`).concat(ss," .").concat(ss,` {
    margin-right: 0 `).concat(l,`;
  }
  
  body[`).concat(Yi,`] {
    `).concat($R,": ").concat(p,`px;
  }
`)},ry=function(){var n=parseInt(document.body.getAttribute(Yi)||"0",10);return isFinite(n)?n:0},p2=function(){g.useEffect(function(){return document.body.setAttribute(Yi,(ry()+1).toString()),function(){var n=ry()-1;n<=0?document.body.removeAttribute(Yi):document.body.setAttribute(Yi,n.toString())}},[])},h2=function(n){var i=n.noRelative,r=n.noImportant,l=n.gapMode,s=l===void 0?"margin":l;p2();var u=g.useMemo(function(){return u2(s)},[s]);return g.createElement(f2,{styles:d2(u,!i,s,r?"":"!important")})},Yf=!1;if(typeof window<"u")try{var ns=Object.defineProperty({},"passive",{get:function(){return Yf=!0,!0}});window.addEventListener("test",ns,ns),window.removeEventListener("test",ns,ns)}catch{Yf=!1}var Gi=Yf?{passive:!1}:!1,m2=function(n){return n.tagName==="TEXTAREA"},Z0=function(n,i){if(!(n instanceof Element))return!1;var r=window.getComputedStyle(n);return r[i]!=="hidden"&&!(r.overflowY===r.overflowX&&!m2(n)&&r[i]==="visible")},g2=function(n){return Z0(n,"overflowY")},v2=function(n){return Z0(n,"overflowX")},oy=function(n,i){var r=i.ownerDocument,l=i;do{typeof ShadowRoot<"u"&&l instanceof ShadowRoot&&(l=l.host);var s=W0(n,l);if(s){var u=J0(n,l),d=u[1],p=u[2];if(d>p)return!0}l=l.parentNode}while(l&&l!==r.body);return!1},y2=function(n){var i=n.scrollTop,r=n.scrollHeight,l=n.clientHeight;return[i,r,l]},x2=function(n){var i=n.scrollLeft,r=n.scrollWidth,l=n.clientWidth;return[i,r,l]},W0=function(n,i){return n==="v"?g2(i):v2(i)},J0=function(n,i){return n==="v"?y2(i):x2(i)},b2=function(n,i){return n==="h"&&i==="rtl"?-1:1},S2=function(n,i,r,l,s){var u=b2(n,window.getComputedStyle(i).direction),d=u*l,p=r.target,h=i.contains(p),m=!1,b=d>0,v=0,C=0;do{if(!p)break;var E=J0(n,p),w=E[0],T=E[1],_=E[2],N=T-_-u*w;(w||N)&&W0(n,p)&&(v+=N,C+=w);var M=p.parentNode;p=M&&M.nodeType===Node.DOCUMENT_FRAGMENT_NODE?M.host:M}while(!h&&p!==document.body||h&&(i.contains(p)||i===p));return(b&&Math.abs(v)<1||!b&&Math.abs(C)<1)&&(m=!0),m},as=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},ly=function(n){return[n.deltaX,n.deltaY]},sy=function(n){return n&&"current"in n?n.current:n},C2=function(n,i){return n[0]===i[0]&&n[1]===i[1]},T2=function(n){return`
  .block-interactivity-`.concat(n,` {pointer-events: none;}
  .allow-interactivity-`).concat(n,` {pointer-events: all;}
`)},E2=0,Vi=[];function w2(n){var i=g.useRef([]),r=g.useRef([0,0]),l=g.useRef(),s=g.useState(E2++)[0],u=g.useState(Q0)[0],d=g.useRef(n);g.useEffect(function(){d.current=n},[n]),g.useEffect(function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(s));var T=YR([n.lockRef.current],(n.shards||[]).map(sy),!0).filter(Boolean);return T.forEach(function(_){return _.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),T.forEach(function(_){return _.classList.remove("allow-interactivity-".concat(s))})}}},[n.inert,n.lockRef.current,n.shards]);var p=g.useCallback(function(T,_){if("touches"in T&&T.touches.length===2||T.type==="wheel"&&T.ctrlKey)return!d.current.allowPinchZoom;var N=as(T),M=r.current,D="deltaX"in T?T.deltaX:M[0]-N[0],H="deltaY"in T?T.deltaY:M[1]-N[1],G,W=T.target,U=Math.abs(D)>Math.abs(H)?"h":"v";if("touches"in T&&U==="h"&&W.type==="range")return!1;var Y=window.getSelection(),J=Y&&Y.anchorNode,te=J?J===W||J.contains(W):!1;if(te)return!1;var ae=oy(U,W);if(!ae)return!0;if(ae?G=U:(G=U==="v"?"h":"v",ae=oy(U,W)),!ae)return!1;if(!l.current&&"changedTouches"in T&&(D||H)&&(l.current=G),!G)return!0;var ne=l.current||G;return S2(ne,_,T,ne==="h"?D:H)},[]),h=g.useCallback(function(T){var _=T;if(!(!Vi.length||Vi[Vi.length-1]!==u)){var N="deltaY"in _?ly(_):as(_),M=i.current.filter(function(G){return G.name===_.type&&(G.target===_.target||_.target===G.shadowParent)&&C2(G.delta,N)})[0];if(M&&M.should){_.cancelable&&_.preventDefault();return}if(!M){var D=(d.current.shards||[]).map(sy).filter(Boolean).filter(function(G){return G.contains(_.target)}),H=D.length>0?p(_,D[0]):!d.current.noIsolation;H&&_.cancelable&&_.preventDefault()}}},[]),m=g.useCallback(function(T,_,N,M){var D={name:T,delta:_,target:N,should:M,shadowParent:_2(N)};i.current.push(D),setTimeout(function(){i.current=i.current.filter(function(H){return H!==D})},1)},[]),b=g.useCallback(function(T){r.current=as(T),l.current=void 0},[]),v=g.useCallback(function(T){m(T.type,ly(T),T.target,p(T,n.lockRef.current))},[]),C=g.useCallback(function(T){m(T.type,as(T),T.target,p(T,n.lockRef.current))},[]);g.useEffect(function(){return Vi.push(u),n.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:C}),document.addEventListener("wheel",h,Gi),document.addEventListener("touchmove",h,Gi),document.addEventListener("touchstart",b,Gi),function(){Vi=Vi.filter(function(T){return T!==u}),document.removeEventListener("wheel",h,Gi),document.removeEventListener("touchmove",h,Gi),document.removeEventListener("touchstart",b,Gi)}},[]);var E=n.removeScrollBar,w=n.inert;return g.createElement(g.Fragment,null,w?g.createElement(u,{styles:T2(s)}):null,E?g.createElement(h2,{noRelative:n.noRelative,gapMode:n.gapMode}):null)}function _2(n){for(var i=null;n!==null;)n instanceof ShadowRoot&&(i=n.host,n=n.host),n=n.parentNode;return i}const R2=t2(X0,w2);var _d=g.forwardRef(function(n,i){return g.createElement(js,dn({},n,{ref:i,sideCar:R2}))});_d.classNames=js.classNames;var qf=["Enter"," "],A2=["ArrowDown","PageUp","Home"],ex=["ArrowUp","PageDown","End"],N2=[...A2,...ex],O2={ltr:[...qf,"ArrowRight"],rtl:[...qf,"ArrowLeft"]},M2={ltr:["ArrowLeft"],rtl:["ArrowRight"]},Ro="Menu",[go,D2,L2]=dd(Ro),[ei,tx]=Wa(Ro,[L2,rr,U0]),Ao=rr(),nx=U0(),[ax,Ca]=ei(Ro),[j2,No]=ei(Ro),ix=n=>{const{__scopeMenu:i,open:r=!1,children:l,dir:s,onOpenChange:u,modal:d=!0}=n,p=Ao(i),[h,m]=g.useState(null),b=g.useRef(!1),v=an(u),C=pd(s);return g.useEffect(()=>{const E=()=>{b.current=!0,document.addEventListener("pointerdown",w,{capture:!0,once:!0}),document.addEventListener("pointermove",w,{capture:!0,once:!0})},w=()=>b.current=!1;return document.addEventListener("keydown",E,{capture:!0}),()=>{document.removeEventListener("keydown",E,{capture:!0}),document.removeEventListener("pointerdown",w,{capture:!0}),document.removeEventListener("pointermove",w,{capture:!0})}},[]),x.jsx(Ds,{...p,children:x.jsx(ax,{scope:i,open:r,onOpenChange:v,content:h,onContentChange:m,children:x.jsx(j2,{scope:i,onClose:g.useCallback(()=>v(!1),[v]),isUsingKeyboardRef:b,dir:C,modal:d,children:l})})})};ix.displayName=Ro;var k2="MenuAnchor",Rd=g.forwardRef((n,i)=>{const{__scopeMenu:r,...l}=n,s=Ao(r);return x.jsx(Td,{...s,...l,ref:i})});Rd.displayName=k2;var Ad="MenuPortal",[I2,rx]=ei(Ad,{forceMount:void 0}),ox=n=>{const{__scopeMenu:i,forceMount:r,children:l,container:s}=n,u=Ca(Ad,i);return x.jsx(I2,{scope:i,forceMount:r,children:x.jsx(Ja,{present:r||u.open,children:x.jsx(Ls,{asChild:!0,container:s,children:l})})})};ox.displayName=Ad;var Zt="MenuContent",[z2,Nd]=ei(Zt),lx=g.forwardRef((n,i)=>{const r=rx(Zt,n.__scopeMenu),{forceMount:l=r.forceMount,...s}=n,u=Ca(Zt,n.__scopeMenu),d=No(Zt,n.__scopeMenu);return x.jsx(go.Provider,{scope:n.__scopeMenu,children:x.jsx(Ja,{present:l||u.open,children:x.jsx(go.Slot,{scope:n.__scopeMenu,children:d.modal?x.jsx(P2,{...s,ref:i}):x.jsx(H2,{...s,ref:i})})})})}),P2=g.forwardRef((n,i)=>{const r=Ca(Zt,n.__scopeMenu),l=g.useRef(null),s=Fe(i,l);return g.useEffect(()=>{const u=l.current;if(u)return Y0(u)},[]),x.jsx(Od,{...n,ref:s,trapFocus:r.open,disableOutsidePointerEvents:r.open,disableOutsideScroll:!0,onFocusOutside:de(n.onFocusOutside,u=>u.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>r.onOpenChange(!1)})}),H2=g.forwardRef((n,i)=>{const r=Ca(Zt,n.__scopeMenu);return x.jsx(Od,{...n,ref:i,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>r.onOpenChange(!1)})}),U2=zR("MenuContent.ScrollLock"),Od=g.forwardRef((n,i)=>{const{__scopeMenu:r,loop:l=!1,trapFocus:s,onOpenAutoFocus:u,onCloseAutoFocus:d,disableOutsidePointerEvents:p,onEntryFocus:h,onEscapeKeyDown:m,onPointerDownOutside:b,onFocusOutside:v,onInteractOutside:C,onDismiss:E,disableOutsideScroll:w,...T}=n,_=Ca(Zt,r),N=No(Zt,r),M=Ao(r),D=nx(r),H=D2(r),[G,W]=g.useState(null),U=g.useRef(null),Y=Fe(i,U,_.onContentChange),J=g.useRef(0),te=g.useRef(""),ae=g.useRef(0),ne=g.useRef(null),re=g.useRef("right"),ie=g.useRef(0),ue=w?_d:g.Fragment,L=w?{as:U2,allowPinchZoom:!0}:void 0,K=Z=>{const pe=te.current+Z,R=H().filter(X=>!X.disabled),V=document.activeElement,Q=R.find(X=>X.ref.current===V)?.textValue,ee=R.map(X=>X.textValue),fe=W2(ee,pe,Q),me=R.find(X=>X.textValue===fe)?.ref.current;(function X(ye){te.current=ye,window.clearTimeout(J.current),ye!==""&&(J.current=window.setTimeout(()=>X(""),1e3))})(pe),me&&setTimeout(()=>me.focus())};g.useEffect(()=>()=>window.clearTimeout(J.current),[]),g0();const z=g.useCallback(Z=>re.current===ne.current?.side&&eA(Z,ne.current?.area),[]);return x.jsx(z2,{scope:r,searchRef:te,onItemEnter:g.useCallback(Z=>{z(Z)&&Z.preventDefault()},[z]),onItemLeave:g.useCallback(Z=>{z(Z)||(U.current?.focus(),W(null))},[z]),onTriggerLeave:g.useCallback(Z=>{z(Z)&&Z.preventDefault()},[z]),pointerGraceTimerRef:ae,onPointerGraceIntentChange:g.useCallback(Z=>{ne.current=Z},[]),children:x.jsx(ue,{...L,children:x.jsx(hd,{asChild:!0,trapped:s,onMountAutoFocus:de(u,Z=>{Z.preventDefault(),U.current?.focus({preventScroll:!0})}),onUnmountAutoFocus:d,children:x.jsx(Rs,{asChild:!0,disableOutsidePointerEvents:p,onEscapeKeyDown:m,onPointerDownOutside:b,onFocusOutside:v,onInteractOutside:C,onDismiss:E,children:x.jsx(kR,{asChild:!0,...D,dir:N.dir,orientation:"vertical",loop:l,currentTabStopId:G,onCurrentTabStopIdChange:W,onEntryFocus:de(h,Z=>{N.isUsingKeyboardRef.current||Z.preventDefault()}),preventScrollOnEntryFocus:!0,children:x.jsx(Ed,{role:"menu","aria-orientation":"vertical","data-state":Ex(_.open),"data-radix-menu-content":"",dir:N.dir,...M,...T,ref:Y,style:{outline:"none",...T.style},onKeyDown:de(T.onKeyDown,Z=>{const R=Z.target.closest("[data-radix-menu-content]")===Z.currentTarget,V=Z.ctrlKey||Z.altKey||Z.metaKey,Q=Z.key.length===1;R&&(Z.key==="Tab"&&Z.preventDefault(),!V&&Q&&K(Z.key));const ee=U.current;if(Z.target!==ee||!N2.includes(Z.key))return;Z.preventDefault();const me=H().filter(X=>!X.disabled).map(X=>X.ref.current);ex.includes(Z.key)&&me.reverse(),Q2(me)}),onBlur:de(n.onBlur,Z=>{Z.currentTarget.contains(Z.target)||(window.clearTimeout(J.current),te.current="")}),onPointerMove:de(n.onPointerMove,vo(Z=>{const pe=Z.target,R=ie.current!==Z.clientX;if(Z.currentTarget.contains(pe)&&R){const V=Z.clientX>ie.current?"right":"left";re.current=V,ie.current=Z.clientX}}))})})})})})})});lx.displayName=Zt;var B2="MenuGroup",Md=g.forwardRef((n,i)=>{const{__scopeMenu:r,...l}=n;return x.jsx(ke.div,{role:"group",...l,ref:i})});Md.displayName=B2;var G2="MenuLabel",sx=g.forwardRef((n,i)=>{const{__scopeMenu:r,...l}=n;return x.jsx(ke.div,{...l,ref:i})});sx.displayName=G2;var xs="MenuItem",cy="menu.itemSelect",ks=g.forwardRef((n,i)=>{const{disabled:r=!1,onSelect:l,...s}=n,u=g.useRef(null),d=No(xs,n.__scopeMenu),p=Nd(xs,n.__scopeMenu),h=Fe(i,u),m=g.useRef(!1),b=()=>{const v=u.current;if(!r&&v){const C=new CustomEvent(cy,{bubbles:!0,cancelable:!0});v.addEventListener(cy,E=>l?.(E),{once:!0}),p0(v,C),C.defaultPrevented?m.current=!1:d.onClose()}};return x.jsx(cx,{...s,ref:h,disabled:r,onClick:de(n.onClick,b),onPointerDown:v=>{n.onPointerDown?.(v),m.current=!0},onPointerUp:de(n.onPointerUp,v=>{m.current||v.currentTarget?.click()}),onKeyDown:de(n.onKeyDown,v=>{const C=p.searchRef.current!=="";r||C&&v.key===" "||qf.includes(v.key)&&(v.currentTarget.click(),v.preventDefault())})})});ks.displayName=xs;var cx=g.forwardRef((n,i)=>{const{__scopeMenu:r,disabled:l=!1,textValue:s,...u}=n,d=Nd(xs,r),p=nx(r),h=g.useRef(null),m=Fe(i,h),[b,v]=g.useState(!1),[C,E]=g.useState("");return g.useEffect(()=>{const w=h.current;w&&E((w.textContent??"").trim())},[u.children]),x.jsx(go.ItemSlot,{scope:r,disabled:l,textValue:s??C,children:x.jsx(IR,{asChild:!0,...p,focusable:!l,children:x.jsx(ke.div,{role:"menuitem","data-highlighted":b?"":void 0,"aria-disabled":l||void 0,"data-disabled":l?"":void 0,...u,ref:m,onPointerMove:de(n.onPointerMove,vo(w=>{l?d.onItemLeave(w):(d.onItemEnter(w),w.defaultPrevented||w.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:de(n.onPointerLeave,vo(w=>d.onItemLeave(w))),onFocus:de(n.onFocus,()=>v(!0)),onBlur:de(n.onBlur,()=>v(!1))})})})}),V2="MenuCheckboxItem",ux=g.forwardRef((n,i)=>{const{checked:r=!1,onCheckedChange:l,...s}=n;return x.jsx(mx,{scope:n.__scopeMenu,checked:r,children:x.jsx(ks,{role:"menuitemcheckbox","aria-checked":bs(r)?"mixed":r,...s,ref:i,"data-state":jd(r),onSelect:de(s.onSelect,()=>l?.(bs(r)?!0:!r),{checkForDefaultPrevented:!1})})})});ux.displayName=V2;var fx="MenuRadioGroup",[F2,K2]=ei(fx,{value:void 0,onValueChange:()=>{}}),dx=g.forwardRef((n,i)=>{const{value:r,onValueChange:l,...s}=n,u=an(l);return x.jsx(F2,{scope:n.__scopeMenu,value:r,onValueChange:u,children:x.jsx(Md,{...s,ref:i})})});dx.displayName=fx;var px="MenuRadioItem",hx=g.forwardRef((n,i)=>{const{value:r,...l}=n,s=K2(px,n.__scopeMenu),u=r===s.value;return x.jsx(mx,{scope:n.__scopeMenu,checked:u,children:x.jsx(ks,{role:"menuitemradio","aria-checked":u,...l,ref:i,"data-state":jd(u),onSelect:de(l.onSelect,()=>s.onValueChange?.(r),{checkForDefaultPrevented:!1})})})});hx.displayName=px;var Dd="MenuItemIndicator",[mx,Y2]=ei(Dd,{checked:!1}),gx=g.forwardRef((n,i)=>{const{__scopeMenu:r,forceMount:l,...s}=n,u=Y2(Dd,r);return x.jsx(Ja,{present:l||bs(u.checked)||u.checked===!0,children:x.jsx(ke.span,{...s,ref:i,"data-state":jd(u.checked)})})});gx.displayName=Dd;var q2="MenuSeparator",vx=g.forwardRef((n,i)=>{const{__scopeMenu:r,...l}=n;return x.jsx(ke.div,{role:"separator","aria-orientation":"horizontal",...l,ref:i})});vx.displayName=q2;var $2="MenuArrow",yx=g.forwardRef((n,i)=>{const{__scopeMenu:r,...l}=n,s=Ao(r);return x.jsx(wd,{...s,...l,ref:i})});yx.displayName=$2;var Ld="MenuSub",[X2,xx]=ei(Ld),bx=n=>{const{__scopeMenu:i,children:r,open:l=!1,onOpenChange:s}=n,u=Ca(Ld,i),d=Ao(i),[p,h]=g.useState(null),[m,b]=g.useState(null),v=an(s);return g.useEffect(()=>(u.open===!1&&v(!1),()=>v(!1)),[u.open,v]),x.jsx(Ds,{...d,children:x.jsx(ax,{scope:i,open:l,onOpenChange:v,content:m,onContentChange:b,children:x.jsx(X2,{scope:i,contentId:Un(),triggerId:Un(),trigger:p,onTriggerChange:h,children:r})})})};bx.displayName=Ld;var oo="MenuSubTrigger",Sx=g.forwardRef((n,i)=>{const r=Ca(oo,n.__scopeMenu),l=No(oo,n.__scopeMenu),s=xx(oo,n.__scopeMenu),u=Nd(oo,n.__scopeMenu),d=g.useRef(null),{pointerGraceTimerRef:p,onPointerGraceIntentChange:h}=u,m={__scopeMenu:n.__scopeMenu},b=g.useCallback(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return g.useEffect(()=>b,[b]),g.useEffect(()=>{const v=p.current;return()=>{window.clearTimeout(v),h(null)}},[p,h]),x.jsx(Rd,{asChild:!0,...m,children:x.jsx(cx,{id:s.triggerId,"aria-haspopup":"menu","aria-expanded":r.open,"aria-controls":s.contentId,"data-state":Ex(r.open),...n,ref:Sa(i,s.onTriggerChange),onClick:v=>{n.onClick?.(v),!(n.disabled||v.defaultPrevented)&&(v.currentTarget.focus(),r.open||r.onOpenChange(!0))},onPointerMove:de(n.onPointerMove,vo(v=>{u.onItemEnter(v),!v.defaultPrevented&&!n.disabled&&!r.open&&!d.current&&(u.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{r.onOpenChange(!0),b()},100))})),onPointerLeave:de(n.onPointerLeave,vo(v=>{b();const C=r.content?.getBoundingClientRect();if(C){const E=r.content?.dataset.side,w=E==="right",T=w?-5:5,_=C[w?"left":"right"],N=C[w?"right":"left"];u.onPointerGraceIntentChange({area:[{x:v.clientX+T,y:v.clientY},{x:_,y:C.top},{x:N,y:C.top},{x:N,y:C.bottom},{x:_,y:C.bottom}],side:E}),window.clearTimeout(p.current),p.current=window.setTimeout(()=>u.onPointerGraceIntentChange(null),300)}else{if(u.onTriggerLeave(v),v.defaultPrevented)return;u.onPointerGraceIntentChange(null)}})),onKeyDown:de(n.onKeyDown,v=>{const C=u.searchRef.current!=="";n.disabled||C&&v.key===" "||O2[l.dir].includes(v.key)&&(r.onOpenChange(!0),r.content?.focus(),v.preventDefault())})})})});Sx.displayName=oo;var Cx="MenuSubContent",Tx=g.forwardRef((n,i)=>{const r=rx(Zt,n.__scopeMenu),{forceMount:l=r.forceMount,...s}=n,u=Ca(Zt,n.__scopeMenu),d=No(Zt,n.__scopeMenu),p=xx(Cx,n.__scopeMenu),h=g.useRef(null),m=Fe(i,h);return x.jsx(go.Provider,{scope:n.__scopeMenu,children:x.jsx(Ja,{present:l||u.open,children:x.jsx(go.Slot,{scope:n.__scopeMenu,children:x.jsx(Od,{id:p.contentId,"aria-labelledby":p.triggerId,...s,ref:m,align:"start",side:d.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:b=>{d.isUsingKeyboardRef.current&&h.current?.focus(),b.preventDefault()},onCloseAutoFocus:b=>b.preventDefault(),onFocusOutside:de(n.onFocusOutside,b=>{b.target!==p.trigger&&u.onOpenChange(!1)}),onEscapeKeyDown:de(n.onEscapeKeyDown,b=>{d.onClose(),b.preventDefault()}),onKeyDown:de(n.onKeyDown,b=>{const v=b.currentTarget.contains(b.target),C=M2[d.dir].includes(b.key);v&&C&&(u.onOpenChange(!1),p.trigger?.focus(),b.preventDefault())})})})})})});Tx.displayName=Cx;function Ex(n){return n?"open":"closed"}function bs(n){return n==="indeterminate"}function jd(n){return bs(n)?"indeterminate":n?"checked":"unchecked"}function Q2(n){const i=document.activeElement;for(const r of n)if(r===i||(r.focus(),document.activeElement!==i))return}function Z2(n,i){return n.map((r,l)=>n[(i+l)%n.length])}function W2(n,i,r){const s=i.length>1&&Array.from(i).every(m=>m===i[0])?i[0]:i,u=r?n.indexOf(r):-1;let d=Z2(n,Math.max(u,0));s.length===1&&(d=d.filter(m=>m!==r));const h=d.find(m=>m.toLowerCase().startsWith(s.toLowerCase()));return h!==r?h:void 0}function J2(n,i){const{x:r,y:l}=n;let s=!1;for(let u=0,d=i.length-1;u<i.length;d=u++){const p=i[u],h=i[d],m=p.x,b=p.y,v=h.x,C=h.y;b>l!=C>l&&r<(v-m)*(l-b)/(C-b)+m&&(s=!s)}return s}function eA(n,i){if(!i)return!1;const r={x:n.clientX,y:n.clientY};return J2(r,i)}function vo(n){return i=>i.pointerType==="mouse"?n(i):void 0}var tA=ix,nA=Rd,aA=ox,iA=lx,rA=Md,oA=sx,lA=ks,sA=ux,cA=dx,uA=hx,fA=gx,dA=vx,pA=yx,hA=bx,mA=Sx,gA=Tx,Is="DropdownMenu",[vA]=Wa(Is,[tx]),vt=tx(),[yA,wx]=vA(Is),_x=n=>{const{__scopeDropdownMenu:i,children:r,dir:l,open:s,defaultOpen:u,onOpenChange:d,modal:p=!0}=n,h=vt(i),m=g.useRef(null),[b,v]=qi({prop:s,defaultProp:u??!1,onChange:d,caller:Is});return x.jsx(yA,{scope:i,triggerId:Un(),triggerRef:m,contentId:Un(),open:b,onOpenChange:v,onOpenToggle:g.useCallback(()=>v(C=>!C),[v]),modal:p,children:x.jsx(tA,{...h,open:b,onOpenChange:v,dir:l,modal:p,children:r})})};_x.displayName=Is;var Rx="DropdownMenuTrigger",Ax=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,disabled:l=!1,...s}=n,u=wx(Rx,r),d=vt(r);return x.jsx(nA,{asChild:!0,...d,children:x.jsx(ke.button,{type:"button",id:u.triggerId,"aria-haspopup":"menu","aria-expanded":u.open,"aria-controls":u.open?u.contentId:void 0,"data-state":u.open?"open":"closed","data-disabled":l?"":void 0,disabled:l,...s,ref:Sa(i,u.triggerRef),onPointerDown:de(n.onPointerDown,p=>{!l&&p.button===0&&p.ctrlKey===!1&&(u.onOpenToggle(),u.open||p.preventDefault())}),onKeyDown:de(n.onKeyDown,p=>{l||(["Enter"," "].includes(p.key)&&u.onOpenToggle(),p.key==="ArrowDown"&&u.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(p.key)&&p.preventDefault())})})})});Ax.displayName=Rx;var xA="DropdownMenuPortal",Nx=n=>{const{__scopeDropdownMenu:i,...r}=n,l=vt(i);return x.jsx(aA,{...l,...r})};Nx.displayName=xA;var Ox="DropdownMenuContent",Mx=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...l}=n,s=wx(Ox,r),u=vt(r),d=g.useRef(!1);return x.jsx(iA,{id:s.contentId,"aria-labelledby":s.triggerId,...u,...l,ref:i,onCloseAutoFocus:de(n.onCloseAutoFocus,p=>{d.current||s.triggerRef.current?.focus(),d.current=!1,p.preventDefault()}),onInteractOutside:de(n.onInteractOutside,p=>{const h=p.detail.originalEvent,m=h.button===0&&h.ctrlKey===!0,b=h.button===2||m;(!s.modal||b)&&(d.current=!0)}),style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Mx.displayName=Ox;var bA="DropdownMenuGroup",SA=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...l}=n,s=vt(r);return x.jsx(rA,{...s,...l,ref:i})});SA.displayName=bA;var CA="DropdownMenuLabel",TA=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...l}=n,s=vt(r);return x.jsx(oA,{...s,...l,ref:i})});TA.displayName=CA;var EA="DropdownMenuItem",Dx=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...l}=n,s=vt(r);return x.jsx(lA,{...s,...l,ref:i})});Dx.displayName=EA;var wA="DropdownMenuCheckboxItem",_A=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...l}=n,s=vt(r);return x.jsx(sA,{...s,...l,ref:i})});_A.displayName=wA;var RA="DropdownMenuRadioGroup",AA=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...l}=n,s=vt(r);return x.jsx(cA,{...s,...l,ref:i})});AA.displayName=RA;var NA="DropdownMenuRadioItem",OA=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...l}=n,s=vt(r);return x.jsx(uA,{...s,...l,ref:i})});OA.displayName=NA;var MA="DropdownMenuItemIndicator",DA=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...l}=n,s=vt(r);return x.jsx(fA,{...s,...l,ref:i})});DA.displayName=MA;var LA="DropdownMenuSeparator",jA=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...l}=n,s=vt(r);return x.jsx(dA,{...s,...l,ref:i})});jA.displayName=LA;var kA="DropdownMenuArrow",IA=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...l}=n,s=vt(r);return x.jsx(pA,{...s,...l,ref:i})});IA.displayName=kA;var zA=n=>{const{__scopeDropdownMenu:i,children:r,open:l,onOpenChange:s,defaultOpen:u}=n,d=vt(i),[p,h]=qi({prop:l,defaultProp:u??!1,onChange:s,caller:"DropdownMenuSub"});return x.jsx(hA,{...d,open:p,onOpenChange:h,children:r})},PA="DropdownMenuSubTrigger",Lx=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...l}=n,s=vt(r);return x.jsx(mA,{...s,...l,ref:i})});Lx.displayName=PA;var HA="DropdownMenuSubContent",jx=g.forwardRef((n,i)=>{const{__scopeDropdownMenu:r,...l}=n,s=vt(r);return x.jsx(gA,{...s,...l,ref:i,style:{...n.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});jx.displayName=HA;var UA=_x,BA=Ax,GA=Nx,VA=Mx,FA=Dx,KA=zA,YA=Lx,qA=jx;const $A=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),XA=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,r,l)=>l?l.toUpperCase():r.toLowerCase()),uy=n=>{const i=XA(n);return i.charAt(0).toUpperCase()+i.slice(1)},kx=(...n)=>n.filter((i,r,l)=>!!i&&i.trim()!==""&&l.indexOf(i)===r).join(" ").trim(),QA=n=>{for(const i in n)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};var ZA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const WA=g.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:r=2,absoluteStrokeWidth:l,className:s="",children:u,iconNode:d,...p},h)=>g.createElement("svg",{ref:h,...ZA,width:i,height:i,stroke:n,strokeWidth:l?Number(r)*24/Number(i):r,className:kx("lucide",s),...!u&&!QA(p)&&{"aria-hidden":"true"},...p},[...d.map(([m,b])=>g.createElement(m,b)),...Array.isArray(u)?u:[u]]));const Ne=(n,i)=>{const r=g.forwardRef(({className:l,...s},u)=>g.createElement(WA,{ref:u,iconNode:i,className:kx(`lucide-${$A(uy(n))}`,`lucide-${n}`,l),...s}));return r.displayName=uy(n),r};const JA=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ix=Ne("arrow-left",JA);const eN=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],fy=Ne("arrow-right",eN);const tN=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],nN=Ne("arrow-up-down",tN);const aN=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Xi=Ne("book-open",aN);const iN=[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]],rN=Ne("bug",iN);const oN=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],kd=Ne("calculator",oN);const lN=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],zs=Ne("calendar",lN);const sN=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],Id=Ne("car",sN);const cN=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],uN=Ne("check",cN);const fN=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],zd=Ne("chevron-down",fN);const dN=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],qa=Ne("chevron-right",dN);const pN=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],hN=Ne("chevron-up",pN);const mN=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]],Pd=Ne("circuit-board",mN);const gN=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],zx=Ne("clock",gN);const vN=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],yo=Ne("code",vN);const yN=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Ps=Ne("cpu",yN);const xN=[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",key:"1iv0i2"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Hd=Ne("factory",xN);const bN=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],Ud=Ne("file-code",bN);const SN=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Px=Ne("folder-open",SN);const CN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],$f=Ne("globe",CN);const TN=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Bd=Ne("grid-3x3",TN);const EN=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],Xf=Ne("house",EN);const wN=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],_N=Ne("layout-grid",wN);const RN=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],AN=Ne("list",RN);const NN=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],ON=Ne("menu",NN);const MN=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 17h4",key:"pvmtpo"}],["path",{d:"M10 7h4",key:"1vgcok"}],["path",{d:"M18 12h2",key:"quuxs7"}],["path",{d:"M18 18h2",key:"4scel"}],["path",{d:"M18 6h2",key:"1ptzki"}],["path",{d:"M4 12h2",key:"1ltxp0"}],["path",{d:"M4 18h2",key:"1xrofg"}],["path",{d:"M4 6h2",key:"1cx33n"}],["rect",{x:"6",y:"2",width:"12",height:"20",rx:"2",key:"749fme"}]],xo=Ne("microchip",MN);const DN=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Gd=Ne("network",DN);const LN=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],jN=Ne("panels-top-left",LN);const kN=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Vd=Ne("radio",kN);const IN=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],zN=Ne("search",IN);const PN=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Fd=Ne("tag",PN);const HN=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Kd=Ne("terminal",HN);const UN=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Yd=Ne("timer",UN);const BN=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],qd=Ne("wifi",BN);const GN=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],bo=Ne("wrench",GN);const VN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],FN=Ne("x",VN);function KN({...n}){return x.jsx(UA,{"data-slot":"dropdown-menu",...n})}function YN({...n}){return x.jsx(BA,{"data-slot":"dropdown-menu-trigger",...n})}function qN({className:n,sideOffset:i=4,...r}){return x.jsx(GA,{children:x.jsx(VA,{"data-slot":"dropdown-menu-content",sideOffset:i,className:ht("bg-popover text-popover-foreground z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",n),...r})})}function Qf({className:n,inset:i,variant:r="default",...l}){return x.jsx(FA,{"data-slot":"dropdown-menu-item","data-inset":i,"data-variant":r,className:ht("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...l})}function $N({...n}){return x.jsx(KA,{"data-slot":"dropdown-menu-sub",...n})}function XN({className:n,inset:i,children:r,...l}){return x.jsxs(YA,{"data-slot":"dropdown-menu-sub-trigger","data-inset":i,className:ht("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...l,children:[r,x.jsx(qa,{className:"ml-auto size-4"})]})}function QN({className:n,...i}){return x.jsx(qA,{"data-slot":"dropdown-menu-sub-content",className:ht("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",n),...i})}const Hx=[{id:"hardware",slug:"hardware",icon:"Cpu",order:1,zh:{name:"硬件",description:"硬件平台与芯片"},en:{name:"Hardware",description:"Hardware platforms and chips"},children:[{id:"mcu",slug:"mcu",icon:"Cpu",parentId:"hardware",order:1,zh:{name:"单片机/MCU",description:"STM32、ESP32、Arduino 等微控制器"},en:{name:"MCU",description:"STM32, ESP32, Arduino microcontrollers"},children:[{id:"stm32",slug:"stm32",icon:"Cpu",parentId:"mcu",order:1,zh:{name:"STM32",description:"意法半导体 ARM Cortex-M"},en:{name:"STM32",description:"ST ARM Cortex-M"}},{id:"esp32",slug:"esp32",icon:"Wifi",parentId:"mcu",order:2,zh:{name:"ESP32",description:"乐鑫 WiFi/蓝牙芯片"},en:{name:"ESP32",description:"Espressif WiFi/Bluetooth"}},{id:"gd32",slug:"gd32",icon:"Microchip",parentId:"mcu",order:3,zh:{name:"GD32",description:"兆易创新 MCU"},en:{name:"GD32",description:"GigaDevice MCU"}}]},{id:"mpu",slug:"mpu",icon:"Microchip",parentId:"hardware",order:2,zh:{name:"嵌入式处理器",description:"ARM Cortex-A、RISC-V Linux 平台"},en:{name:"MPU",description:"ARM Cortex-A, RISC-V Linux platforms"},children:[{id:"raspberry-pi",slug:"raspberry-pi",icon:"CircuitBoard",parentId:"mpu",order:1,zh:{name:"树莓派",description:"Raspberry Pi 开发"},en:{name:"Raspberry Pi",description:"Raspberry Pi development"}},{id:"rockchip",slug:"rockchip",icon:"Microchip",parentId:"mpu",order:2,zh:{name:"瑞芯微",description:"RK3566/RK3588 等"},en:{name:"Rockchip",description:"RK3566/RK3588 etc."}}]},{id:"fpga",slug:"fpga",icon:"Grid3x3",parentId:"hardware",order:3,zh:{name:"FPGA",description:"Xilinx、Altera 可编程逻辑"},en:{name:"FPGA",description:"Xilinx, Altera programmable logic"}}]},{id:"software",slug:"software",icon:"Code",order:2,zh:{name:"软件",description:"嵌入式软件开发"},en:{name:"Software",description:"Embedded software development"},children:[{id:"rtos",slug:"rtos",icon:"Timer",parentId:"software",order:1,zh:{name:"实时操作系统",description:"FreeRTOS、RT-Thread、Zephyr"},en:{name:"RTOS",description:"FreeRTOS, RT-Thread, Zephyr"},children:[{id:"freertos",slug:"freertos",icon:"Timer",parentId:"rtos",order:1,zh:{name:"FreeRTOS",description:"开源实时操作系统"},en:{name:"FreeRTOS",description:"Open source RTOS"}},{id:"rt-thread",slug:"rt-thread",icon:"Timer",parentId:"rtos",order:2,zh:{name:"RT-Thread",description:"国产实时操作系统"},en:{name:"RT-Thread",description:"Chinese RTOS"}}]},{id:"embedded-linux",slug:"embedded-linux",icon:"Terminal",parentId:"software",order:2,zh:{name:"嵌入式 Linux",description:"内核、驱动、Yocto"},en:{name:"Embedded Linux",description:"Kernel, drivers, Yocto"},children:[{id:"linux-kernel",slug:"linux-kernel",icon:"Terminal",parentId:"embedded-linux",order:1,zh:{name:"内核移植",description:"Linux 内核裁剪与移植"},en:{name:"Kernel Porting",description:"Linux kernel customization"}},{id:"linux-driver",slug:"linux-driver",icon:"Terminal",parentId:"embedded-linux",order:2,zh:{name:"驱动开发",description:"字符设备、块设备、网络驱动"},en:{name:"Driver Dev",description:"Character, block, network drivers"}}]},{id:"firmware",slug:"firmware",icon:"FileCode",parentId:"software",order:3,zh:{name:"固件开发",description:"Bare-metal、Bootloader"},en:{name:"Firmware",description:"Bare-metal, Bootloader"}}]},{id:"protocols",slug:"protocols",icon:"Network",order:3,zh:{name:"协议",description:"通信协议与接口"},en:{name:"Protocols",description:"Communication protocols"},children:[{id:"fieldbus",slug:"fieldbus",icon:"Network",parentId:"protocols",order:1,zh:{name:"现场总线",description:"CAN、Modbus、RS485"},en:{name:"Fieldbus",description:"CAN, Modbus, RS485"},children:[{id:"can",slug:"can",icon:"Network",parentId:"fieldbus",order:1,zh:{name:"CAN 总线",description:"控制器局域网通信"},en:{name:"CAN Bus",description:"Controller Area Network"}},{id:"modbus",slug:"modbus",icon:"Network",parentId:"fieldbus",order:2,zh:{name:"Modbus",description:"工业通信协议"},en:{name:"Modbus",description:"Industrial protocol"}}]},{id:"wireless",slug:"wireless",icon:"Wifi",parentId:"protocols",order:2,zh:{name:"无线通信",description:"BLE、LoRa、Zigbee"},en:{name:"Wireless",description:"BLE, LoRa, Zigbee"}},{id:"network-stack",slug:"network-stack",icon:"Globe",parentId:"protocols",order:3,zh:{name:"网络协议",description:"TCP/IP、MQTT、LwIP"},en:{name:"Network",description:"TCP/IP, MQTT, LwIP"}}]},{id:"tools",slug:"tools",icon:"Wrench",order:4,zh:{name:"工具",description:"开发工具与调试"},en:{name:"Tools",description:"Development tools"},children:[{id:"ide",slug:"ide",icon:"Code",parentId:"tools",order:1,zh:{name:"IDE",description:"Keil、IAR、VS Code"},en:{name:"IDE",description:"Keil, IAR, VS Code"}},{id:"debug",slug:"debug",icon:"Bug",parentId:"tools",order:2,zh:{name:"调试工具",description:"JTAG、SWD、逻辑分析仪"},en:{name:"Debug",description:"JTAG, SWD, Logic Analyzer"}}]},{id:"hardware-design",slug:"hardware-design",icon:"CircuitBoard",order:5,zh:{name:"硬件设计",description:"PCB 与电路设计"},en:{name:"Hardware Design",description:"PCB and circuit design"},children:[{id:"pcb",slug:"pcb",icon:"CircuitBoard",parentId:"hardware-design",order:1,zh:{name:"PCB 设计",description:"Layout、布线、信号完整性"},en:{name:"PCB Design",description:"Layout, routing, SI"}},{id:"eda",slug:"eda",icon:"Layout",parentId:"hardware-design",order:2,zh:{name:"EDA 工具",description:"Altium、KiCad、Cadence"},en:{name:"EDA Tools",description:"Altium, KiCad, Cadence"}}]},{id:"application",slug:"application",icon:"Factory",order:6,zh:{name:"应用",description:"行业应用方案"},en:{name:"Applications",description:"Industry solutions"},children:[{id:"automotive",slug:"automotive",icon:"Car",parentId:"application",order:1,zh:{name:"汽车电子",description:"CAN、UDS、AutoSAR"},en:{name:"Automotive",description:"CAN, UDS, AutoSAR"}},{id:"iot",slug:"iot",icon:"Radio",parentId:"application",order:2,zh:{name:"物联网",description:"传感器、边缘计算、OTA"},en:{name:"IoT",description:"Sensors, edge computing, OTA"}},{id:"industrial",slug:"industrial",icon:"Factory",parentId:"application",order:3,zh:{name:"工业控制",description:"PLC、运动控制、PID"},en:{name:"Industrial",description:"PLC, motion control, PID"}}]}];function ZN(n){const i=[];function r(l){for(const s of l)i.push(s),s.children&&r(s.children)}return r(n),i}const ti=ZN(Hx),WN=n=>ti.find(i=>i.slug===n),JN=()=>Hx.sort((n,i)=>(n.order||0)-(i.order||0)),eO={Cpu:Ps,Microchip:xo,Grid3x3:Bd,Timer:Yd,Terminal:Kd,FileCode:Ud,Network:Gd,Wifi:qd,Wrench:bo,CircuitBoard:Pd,Car:Id,Radio:Vd,Factory:Hd,Code:yo,Calculator:kd,Globe:$f,Bug:rN,Layout:jN,BookOpen:Xi,Home:Xf};function tO(n){return eO[n]||Xi}function Ux({category:n,lang:i,onNavigate:r}){const l=tO(n.icon);return n.children&&n.children.length>0?x.jsxs($N,{children:[x.jsxs(XN,{className:"flex items-center gap-2 cursor-pointer",children:[x.jsx(l,{className:"w-4 h-4"}),x.jsx("span",{children:n[i].name})]}),x.jsxs(QN,{className:"w-48",children:[x.jsx(Qf,{asChild:!0,onClick:r,children:x.jsx(Ge,{to:`/category/${n.slug}`,className:"flex items-center gap-2 font-medium",children:x.jsxs("span",{children:["查看全部 ",n[i].name]})})}),x.jsx("div",{className:"h-px bg-slate-200 my-1"}),n.children?.map(u=>x.jsx(Ux,{category:u,lang:i,onNavigate:r},u.id))]})]}):x.jsx(Qf,{asChild:!0,onClick:r,children:x.jsxs(Ge,{to:`/category/${n.slug}`,className:"flex items-center gap-2",children:[x.jsx(l,{className:"w-4 h-4"}),x.jsx("span",{children:n[i].name})]})})}function nO(){const{t:n,i18n:i}=er(),r=yn(),[l,s]=g.useState(!1),u=()=>{const m=i.language==="zh"?"en":"zh";i.changeLanguage(m)},d=i.language,p=JN(),h=m=>m==="/"?r.pathname==="/":r.pathname.startsWith(m);return x.jsx("nav",{className:"sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200",children:x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[x.jsxs("div",{className:"flex items-center justify-between h-16",children:[x.jsxs(Ge,{to:"/",className:"flex items-center gap-2",children:[x.jsx("div",{className:"w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center",children:x.jsx(Ps,{className:"w-5 h-5 text-white"})}),x.jsx("span",{className:"text-xl font-bold text-slate-800 hidden sm:block",children:n("home.title")})]}),x.jsxs("div",{className:"hidden lg:flex items-center gap-1",children:[x.jsx(Ge,{to:"/",children:x.jsxs(dt,{variant:h("/")?"default":"ghost",className:h("/")?"bg-indigo-500 hover:bg-indigo-600":"",size:"sm",children:[x.jsx(Xf,{className:"w-4 h-4 mr-1"}),n("nav.home")]})}),p.map(m=>x.jsxs(KN,{children:[x.jsx(YN,{asChild:!0,children:x.jsxs(dt,{variant:h(`/category/${m.slug}`)?"default":"ghost",className:h(`/category/${m.slug}`)?"bg-indigo-500 hover:bg-indigo-600":"",size:"sm",children:[m[d].name,x.jsx(zd,{className:"w-3 h-3 ml-1"})]})}),x.jsxs(qN,{className:"w-48",align:"start",children:[x.jsx(Qf,{asChild:!0,children:x.jsxs(Ge,{to:`/category/${m.slug}`,className:"font-medium",children:["全部 ",m[d].name]})}),x.jsx("div",{className:"h-px bg-slate-200 my-1"}),m.children?.map(b=>x.jsx(Ux,{category:b,lang:d,onNavigate:()=>{}},b.id))]})]},m.id)),x.jsx(Ge,{to:"/notes",children:x.jsxs(dt,{variant:h("/notes")?"default":"ghost",className:h("/notes")?"bg-indigo-500 hover:bg-indigo-600":"",size:"sm",children:[x.jsx(Xi,{className:"w-4 h-4 mr-1"}),n("nav.notes")]})})]}),x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsxs(dt,{variant:"ghost",size:"sm",onClick:u,className:"hidden md:flex items-center gap-2",children:[x.jsx($f,{className:"w-4 h-4"}),x.jsx("span",{children:i.language==="zh"?"EN":"中文"})]}),x.jsx(dt,{variant:"ghost",size:"icon",className:"lg:hidden",onClick:()=>s(!l),children:l?x.jsx(FN,{className:"w-5 h-5"}):x.jsx(ON,{className:"w-5 h-5"})})]})]}),l&&x.jsx("div",{className:"lg:hidden py-4 border-t border-slate-100",children:x.jsxs("div",{className:"flex flex-col gap-2",children:[x.jsx(Ge,{to:"/",onClick:()=>s(!1),children:x.jsxs(dt,{variant:h("/")?"default":"ghost",className:`w-full justify-start ${h("/")?"bg-indigo-500 hover:bg-indigo-600":""}`,children:[x.jsx(Xf,{className:"w-4 h-4 mr-2"}),n("nav.home")]})}),p.map(m=>x.jsxs("div",{className:"space-y-1",children:[x.jsx(Ge,{to:`/category/${m.slug}`,onClick:()=>s(!1),children:x.jsx(dt,{variant:"ghost",className:"w-full justify-start font-medium",children:m[d].name})}),m.children?.map(b=>x.jsx(Ge,{to:`/category/${b.slug}`,onClick:()=>s(!1),children:x.jsx(dt,{variant:"ghost",className:"w-full justify-start pl-8 text-sm text-slate-600",children:b[d].name})},b.id))]},m.id)),x.jsx(Ge,{to:"/notes",onClick:()=>s(!1),children:x.jsxs(dt,{variant:h("/notes")?"default":"ghost",className:`w-full justify-start ${h("/notes")?"bg-indigo-500 hover:bg-indigo-600":""}`,children:[x.jsx(Xi,{className:"w-4 h-4 mr-2"}),n("nav.notes")]})}),x.jsxs(dt,{variant:"ghost",className:"w-full justify-start",onClick:()=>{u(),s(!1)},children:[x.jsx($f,{className:"w-4 h-4 mr-2"}),n("language.switch")," (",i.language==="zh"?"EN":"中文",")"]})]})})]})})}function aO(){const{t:n}=er();return x.jsx("footer",{className:"bg-white border-t border-slate-200",children:x.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:x.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[x.jsx("p",{className:"text-sm text-slate-500",children:n("footer.copyright")}),x.jsx("p",{className:"text-sm text-slate-400",children:n("footer.poweredBy")})]})})})}function iO({children:n}){return x.jsxs("div",{className:"min-h-screen flex flex-col bg-slate-50",children:[x.jsx(nO,{}),x.jsx("main",{className:"flex-1",children:n}),x.jsx(aO,{})]})}function va({className:n,...i}){return x.jsx("div",{"data-slot":"card",className:ht("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",n),...i})}function ya({className:n,...i}){return x.jsx("div",{"data-slot":"card-content",className:ht("px-6",n),...i})}const rO=e0("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function Hs({className:n,variant:i,asChild:r=!1,...l}){const s=r?Zy:"span";return x.jsx(s,{"data-slot":"badge",className:ht(rO({variant:i}),n),...l})}const oO=`# CSS Flexbox Complete Guide

## What is Flexbox

Flexbox (Flexible Box Layout) is a one-dimensional layout model introduced in CSS3, designed specifically for laying out page components and handling alignment.

![Flexbox Diagram](https://picsum.photos/800/400?random=4)

## Core Concepts

### Main Axis and Cross Axis

Flexbox has two axes:

- **Main Axis**: Defined by \`flex-direction\`
- **Cross Axis**: Perpendicular to the main axis

\`\`\`css
.container {
  display: flex;
  flex-direction: row; /* Main axis is horizontal */
}
\`\`\`

![Axis Diagram](https://picsum.photos/600/300?random=5)

## Container Properties

### 1. display

\`\`\`css
.container {
  display: flex;        /* Block-level flex container */
  display: inline-flex; /* Inline flex container */
}
\`\`\`

### 2. flex-direction

Controls the direction of the main axis:

\`\`\`css
.container {
  flex-direction: row;            /* Horizontal, left to right */
  flex-direction: row-reverse;    /* Horizontal, right to left */
  flex-direction: column;         /* Vertical, top to bottom */
  flex-direction: column-reverse; /* Vertical, bottom to top */
}
\`\`\`

![Direction Diagram](https://picsum.photos/700/350?random=6)

### 3. justify-content

Defines alignment along the main axis:

\`\`\`css
.container {
  justify-content: flex-start;   /* Default, left align */
  justify-content: flex-end;     /* Right align */
  justify-content: center;       /* Center */
  justify-content: space-between;/* Space between */
  justify-content: space-around; /* Equal space around */
  justify-content: space-evenly; /* Completely even */
}
\`\`\`

### 4. align-items

Defines alignment along the cross axis:

\`\`\`css
.container {
  align-items: stretch;     /* Default, stretch to fill */
  align-items: flex-start;  /* Align to top */
  align-items: flex-end;    /* Align to bottom */
  align-items: center;      /* Vertical center */
  align-items: baseline;    /* Text baseline align */
}
\`\`\`

![Alignment](https://picsum.photos/800/400?random=7)

## Item Properties

### 1. flex-grow

Defines the growth factor:

\`\`\`css
.item {
  flex-grow: 0; /* Default, don't grow */
  flex-grow: 1; /* Equal distribution */
}

.item-double {
  flex-grow: 2; /* Take double space */
}
\`\`\`

### 2. flex-shrink

Defines the shrink factor:

\`\`\`css
.item {
  flex-shrink: 1; /* Default, shrink if needed */
  flex-shrink: 0; /* Don't shrink */
}
\`\`\`

### 3. flex-basis

Defines the initial size before distribution:

\`\`\`css
.item {
  flex-basis: auto;   /* Based on content */
  flex-basis: 200px;  /* Fixed width */
  flex-basis: 20%;    /* Percentage */
}
\`\`\`

### 4. flex Shorthand

\`\`\`css
.item {
  flex: 1;              /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
  flex: 0 0 200px;      /* No grow, no shrink, fixed 200px */
  flex: 1 1 auto;       /* Can grow, can shrink, content-based */
}
\`\`\`

## Practical Examples

### Horizontal and Vertical Center

\`\`\`css
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
\`\`\`

![Center Effect](https://picsum.photos/400/400?random=8)

### Responsive Navbar

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }
}
\`\`\`

### Equal Height Cards

\`\`\`css
.card-container {
  display: flex;
  gap: 1rem;
}

.card {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-content {
  flex: 1; /* Fill remaining space for equal height */
}
\`\`\`

![Card Layout](https://picsum.photos/800/350?random=9)

## Common Issues

### 1. Unequal Item Heights

Use \`align-items: stretch\` (default) or set \`height: 100%\` on items.

### 2. Last Row Left Alignment

Use \`justify-content: flex-start\` with \`margin\`:

\`\`\`css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.item {
  flex: 0 0 calc(33.333% - 1rem);
}
\`\`\`

### 3. Fixed Sidebar + Flexible Content

\`\`\`css
.layout {
  display: flex;
}

.sidebar {
  flex: 0 0 250px; /* Fixed width */
}

.main {
  flex: 1; /* Take remaining space */
}
\`\`\`

## Browser Compatibility

Flexbox support:

| Browser | Version |
|---------|---------|
| Chrome | 29+ |
| Firefox | 28+ |
| Safari | 9+ |
| Edge | 12+ |
| IE | 11 (partial) |

## Summary

Flexbox is suitable for:

- ✅ One-dimensional layouts (single row or column)
- ✅ Component internal alignment
- ✅ Responsive layouts
- ✅ Equal height layouts

Not suitable for:

- ❌ Two-dimensional grid layouts (use Grid)
- ❌ Complex overall page layouts
`,lO=`# CSS Flexbox 布局完全指南

## 什么是 Flexbox

Flexbox（弹性盒子布局）是 CSS3 引入的一种一维布局模型，专为解决页面组件布局和对齐问题而设计。

![Flexbox 示意图](https://picsum.photos/800/400?random=4)

## 核心概念

### 主轴与交叉轴

Flexbox 有两个轴：

- **主轴（Main Axis）**：由 \`flex-direction\` 定义
- **交叉轴（Cross Axis）**：垂直于主轴

\`\`\`css
.container {
  display: flex;
  flex-direction: row; /* 主轴为水平方向 */
}
\`\`\`

![轴示意图](https://picsum.photos/600/300?random=5)

## 容器属性

### 1. display

\`\`\`css
.container {
  display: flex;        /* 块级弹性容器 */
  display: inline-flex; /* 行内弹性容器 */
}
\`\`\`

### 2. flex-direction

控制主轴方向：

\`\`\`css
.container {
  flex-direction: row;           /* 水平，左到右 */
  flex-direction: row-reverse;   /* 水平，右到左 */
  flex-direction: column;        /* 垂直，上到下 */
  flex-direction: column-reverse;/* 垂直，下到上 */
}
\`\`\`

![方向示意图](https://picsum.photos/700/350?random=6)

### 3. justify-content

定义项目在主轴上的对齐方式：

\`\`\`css
.container {
  justify-content: flex-start;  /* 默认值，左对齐 */
  justify-content: flex-end;    /* 右对齐 */
  justify-content: center;      /* 居中 */
  justify-content: space-between;/* 两端对齐 */
  justify-content: space-around; /* 间隔相等 */
  justify-content: space-evenly; /* 完全等距 */
}
\`\`\`

### 4. align-items

定义项目在交叉轴上的对齐方式：

\`\`\`css
.container {
  align-items: stretch;     /* 默认值，拉伸填满 */
  align-items: flex-start;  /* 顶部对齐 */
  align-items: flex-end;    /* 底部对齐 */
  align-items: center;      /* 垂直居中 */
  align-items: baseline;    /* 文字基线对齐 */
}
\`\`\`

![对齐方式](https://picsum.photos/800/400?random=7)

## 项目属性

### 1. flex-grow

定义项目的放大比例：

\`\`\`css
.item {
  flex-grow: 0; /* 默认值，不放大 */
  flex-grow: 1; /* 等分剩余空间 */
}

.item-double {
  flex-grow: 2; /* 占两份 */
}
\`\`\`

### 2. flex-shrink

定义项目的缩小比例：

\`\`\`css
.item {
  flex-shrink: 1; /* 默认值，空间不足时缩小 */
  flex-shrink: 0; /* 不缩小 */
}
\`\`\`

### 3. flex-basis

定义项目在分配空间前的初始大小：

\`\`\`css
.item {
  flex-basis: auto;   /* 根据内容决定 */
  flex-basis: 200px;  /* 固定宽度 */
  flex-basis: 20%;    /* 百分比 */
}
\`\`\`

### 4. flex 简写

\`\`\`css
.item {
  flex: 1;              /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
  flex: 0 0 200px;      /* 不放大、不缩小、固定200px */
  flex: 1 1 auto;       /* 可放大、可缩小、基于内容 */
}
\`\`\`

## 实用布局示例

### 水平垂直居中

\`\`\`css
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
\`\`\`

![居中效果](https://picsum.photos/400/400?random=8)

### 响应式导航栏

\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }
}
\`\`\`

### 等高卡片布局

\`\`\`css
.card-container {
  display: flex;
  gap: 1rem;
}

.card {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-content {
  flex: 1; /* 填充剩余空间，实现等高 */
}
\`\`\`

![卡片布局](https://picsum.photos/800/350?random=9)

## 常见问题

### 1. Flex 项目高度不一致

使用 \`align-items: stretch\`（默认值）或给项目设置 \`height: 100%\`。

### 2. 最后一行左对齐

使用 \`justify-content: flex-start\` 配合 \`margin\`：

\`\`\`css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.item {
  flex: 0 0 calc(33.333% - 1rem);
}
\`\`\`

### 3. 固定侧边栏 + 自适应内容

\`\`\`css
.layout {
  display: flex;
}

.sidebar {
  flex: 0 0 250px; /* 固定宽度 */
}

.main {
  flex: 1; /* 占据剩余空间 */
}
\`\`\`

## 浏览器兼容性

Flexbox 支持情况：

| 浏览器 | 版本 |
|--------|------|
| Chrome | 29+ |
| Firefox | 28+ |
| Safari | 9+ |
| Edge | 12+ |
| IE | 11（部分支持）|

## 总结

Flexbox 适合的场景：

- ✅ 一维布局（单行或单列）
- ✅ 组件内部对齐
- ✅ 响应式布局
- ✅ 等高布局

不适合的场景：

- ❌ 二维网格布局（用 Grid）
- ❌ 复杂页面整体布局
`,sO=`# Database Performance Optimization Guide

## Why Database Optimization Matters

The database is the core component of applications; performance issues directly impact user experience and business operations.

![Database Architecture](/images/database.jpg)

## Index Optimization

### Index Basics

Indexes are like book directories, enabling quick data location:

\`\`\`sql
-- Create single-column index
CREATE INDEX idx_users_email ON users(email);

-- Create composite index
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- Create unique index
CREATE UNIQUE INDEX idx_users_username ON users(username);
\`\`\`

### Index Best Practices

\`\`\`sql
-- ✅ Suitable for indexing
-- 1. Columns in WHERE clause
SELECT * FROM users WHERE email = 'xxx';

-- 2. Columns in JOIN conditions
SELECT * FROM orders o 
JOIN users u ON o.user_id = u.id;

-- 3. ORDER BY / GROUP BY columns
SELECT * FROM orders ORDER BY created_at DESC;

-- ❌ Avoid indexing
-- 1. Small tables
-- 2. Frequently updated columns
-- 3. Low cardinality columns (e.g., gender)
\`\`\`

![Index Structure](/images/database.jpg)

## Query Optimization

### EXPLAIN Analysis

\`\`\`sql
EXPLAIN ANALYZE
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id;

-- Key metrics:
-- - Seq Scan vs Index Scan
-- - Rows Removed by Filter
-- - Execution Time
\`\`\`

### Avoid SELECT *

\`\`\`sql
-- ❌ Not recommended
SELECT * FROM users WHERE id = 1;

-- ✅ Recommended
SELECT id, name, email FROM users WHERE id = 1;
\`\`\`

### Batch Operations

\`\`\`sql
-- ❌ Individual inserts (slow)
INSERT INTO logs (message) VALUES ('log1');
INSERT INTO logs (message) VALUES ('log2');
INSERT INTO logs (message) VALUES ('log3');

-- ✅ Batch insert (fast)
INSERT INTO logs (message) VALUES 
  ('log1'), ('log2'), ('log3');
\`\`\`

## Table Structure Optimization

### Choose Appropriate Data Types

| Scenario | Recommended | Avoid |
|----------|-------------|-------|
| Primary key | INT/BIGINT | VARCHAR |
| Boolean | BOOLEAN | TINYINT |
| Timestamp | TIMESTAMP | VARCHAR |
| Currency | DECIMAL | FLOAT |
| IP Address | INT UNSIGNED | VARCHAR |

### Normalization vs Denormalization

**Third Normal Form (3NF):**
- Reduce data redundancy
- Ensure data consistency
- Suitable for write-heavy workloads

**Denormalization:**
- Reduce JOIN queries
- Improve read performance
- Suitable for read-heavy workloads

\`\`\`sql
-- Denormalization example: Store user name redundantly
CREATE TABLE orders (
  id BIGINT PRIMARY KEY,
  user_id BIGINT,
  user_name VARCHAR(100),  -- Redundant field
  total_amount DECIMAL(10,2),
  created_at TIMESTAMP
);
\`\`\`

![Table Design](/images/database.jpg)

## Connection Pool Optimization

### Configuration

\`\`\`javascript
// Node.js pg-pool example
const pool = new Pool({
  host: 'localhost',
  database: 'myapp',
  user: 'dbuser',
  password: 'dbpass',
  
  // Pool configuration
  min: 5,           // Minimum connections
  max: 20,          // Maximum connections
  idleTimeoutMillis: 30000,  // Idle timeout
  connectionTimeoutMillis: 2000,  // Connection timeout
});
\`\`\`

### Monitoring Metrics

- **Active Connections** - Currently used connections
- **Waiting Queue** - Requests waiting for connections
- **Connection Leaks** - Connections not properly released

## Caching Strategy

### Query Cache

\`\`\`javascript
// Redis cache example
async function getUserById(id) {
  // 1. Check cache first
  const cacheKey = \`user:\${id}\`;
  let user = await redis.get(cacheKey);
  
  if (user) {
    return JSON.parse(user);
  }
  
  // 2. Cache miss, query database
  user = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  
  // 3. Write to cache (with expiration)
  await redis.setex(cacheKey, 3600, JSON.stringify(user));
  
  return user;
}
\`\`\`

### Cache Update Strategies

| Strategy | Description | Use Case |
|----------|-------------|----------|
| Cache Aside | Delete cache first, then update DB | Read-heavy |
| Read Through | Auto-load when cache miss | High consistency |
| Write Through | Update both cache and DB | Strong consistency |
| Write Behind | Async DB update | High performance |

![Cache Architecture](/images/database.jpg)

## Partitioning and Sharding

### Horizontal Partitioning (Sharding)

\`\`\`sql
-- Shard by user ID
-- user_0: id % 4 = 0
-- user_1: id % 4 = 1
-- user_2: id % 4 = 2
-- user_3: id % 4 = 3

-- Application routing
function getTableName(userId) {
  return \`user_\${userId % 4}\`;
}
\`\`\`

### Vertical Partitioning

\`\`\`sql
-- Separate large fields
-- Main table
CREATE TABLE articles (
  id BIGINT PRIMARY KEY,
  title VARCHAR(200),
  summary TEXT,
  author_id BIGINT,
  created_at TIMESTAMP
);

-- Content table (less frequently accessed)
CREATE TABLE article_contents (
  article_id BIGINT PRIMARY KEY,
  content LONGTEXT
);
\`\`\`

## Monitoring and Alerting

### Key Metrics

\`\`\`sql
-- Slow query log
SHOW VARIABLES LIKE 'slow_query_log';
SHOW VARIABLES LIKE 'long_query_time';

-- Performance stats
SHOW STATUS LIKE 'Threads_connected';
SHOW STATUS LIKE 'Queries';
SHOW STATUS LIKE 'Innodb_buffer_pool_read_requests';
\`\`\`

### Common Alert Rules

- Slow queries > 10/minute
- Connections > 80% max connections
- QPS spike > 200%
- Disk usage > 85%

## Summary

Database optimization layers:

1. **SQL Optimization** - Indexes, query statements
2. **Schema Optimization** - Data types, normalization
3. **Architecture Optimization** - Caching, read-write separation
4. **Scaling Optimization** - Partitioning, sharding

Remember: **Identify bottlenecks first, then optimize accordingly!**
`,cO=`# 数据库性能优化指南

## 为什么数据库优化很重要

数据库是应用的核心组件，性能问题会直接影响用户体验和业务运行。

![数据库架构](/images/database.jpg)

## 索引优化

### 索引基础

索引就像书的目录，能快速定位数据：

\`\`\`sql
-- 创建单列索引
CREATE INDEX idx_users_email ON users(email);

-- 创建复合索引
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- 创建唯一索引
CREATE UNIQUE INDEX idx_users_username ON users(username);
\`\`\`

### 索引最佳实践

\`\`\`sql
-- ✅ 适合创建索引的场景
-- 1. WHERE 子句中的列
SELECT * FROM users WHERE email = 'xxx';

-- 2. JOIN 条件中的列
SELECT * FROM orders o 
JOIN users u ON o.user_id = u.id;

-- 3. ORDER BY / GROUP BY 列
SELECT * FROM orders ORDER BY created_at DESC;

-- ❌ 避免创建索引的场景
-- 1. 数据量小的表
-- 2. 经常更新的列
-- 3. 区分度低的列（如性别）
\`\`\`

![索引结构](/images/database.jpg)

## 查询优化

### EXPLAIN 分析

\`\`\`sql
EXPLAIN ANALYZE
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id;

-- 关注指标：
-- - Seq Scan vs Index Scan
-- - Rows Removed by Filter
-- - Execution Time
\`\`\`

### 避免 SELECT *

\`\`\`sql
-- ❌ 不推荐
SELECT * FROM users WHERE id = 1;

-- ✅ 推荐
SELECT id, name, email FROM users WHERE id = 1;
\`\`\`

### 批量操作

\`\`\`sql
-- ❌ 逐条插入（慢）
INSERT INTO logs (message) VALUES ('log1');
INSERT INTO logs (message) VALUES ('log2');
INSERT INTO logs (message) VALUES ('log3');

-- ✅ 批量插入（快）
INSERT INTO logs (message) VALUES 
  ('log1'), ('log2'), ('log3');
\`\`\`

## 表结构优化

### 选择合适的数据类型

| 场景 | 推荐类型 | 避免 |
|------|---------|------|
| 主键 | INT/BIGINT | VARCHAR |
| 布尔值 | BOOLEAN | TINYINT |
| 时间 | TIMESTAMP | VARCHAR |
| 金额 | DECIMAL | FLOAT |
| IP 地址 | INT UNSIGNED | VARCHAR |

### 规范化 vs 反规范化

**第三范式（3NF）：**
- 减少数据冗余
- 保证数据一致性
- 适合写多读少

**反规范化：**
- 减少 JOIN 查询
- 提高读取性能
- 适合读多写少

\`\`\`sql
-- 反规范化示例：冗余存储用户名称
CREATE TABLE orders (
  id BIGINT PRIMARY KEY,
  user_id BIGINT,
  user_name VARCHAR(100),  -- 冗余字段
  total_amount DECIMAL(10,2),
  created_at TIMESTAMP
);
\`\`\`

![表结构设计](/images/database.jpg)

## 连接池优化

### 配置参数

\`\`\`javascript
// Node.js pg-pool 示例
const pool = new Pool({
  host: 'localhost',
  database: 'myapp',
  user: 'dbuser',
  password: 'dbpass',
  
  // 连接池配置
  min: 5,           // 最小连接数
  max: 20,          // 最大连接数
  idleTimeoutMillis: 30000,  // 空闲超时
  connectionTimeoutMillis: 2000,  // 连接超时
});
\`\`\`

### 监控指标

- **活跃连接数** - 当前使用的连接
- **等待队列** - 等待连接的请求
- **连接泄漏** - 未正确释放的连接

## 缓存策略

### 查询缓存

\`\`\`javascript
// Redis 缓存示例
async function getUserById(id) {
  // 1. 先查缓存
  const cacheKey = \`user:\${id}\`;
  let user = await redis.get(cacheKey);
  
  if (user) {
    return JSON.parse(user);
  }
  
  // 2. 缓存未命中，查数据库
  user = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  
  // 3. 写入缓存（设置过期时间）
  await redis.setex(cacheKey, 3600, JSON.stringify(user));
  
  return user;
}
\`\`\`

### 缓存更新策略

| 策略 | 说明 | 适用场景 |
|------|------|---------|
| Cache Aside | 先删缓存，再更新DB | 读多写少 |
| Read Through | 缓存不存在时自动加载 | 一致性要求高 |
| Write Through | 同时更新缓存和DB | 强一致性 |
| Write Behind | 异步更新DB | 高性能要求 |

![缓存架构](/images/database.jpg)

## 分区与分表

### 水平分区（Sharding）

\`\`\`sql
-- 按用户 ID 分表
-- user_0: id % 4 = 0
-- user_1: id % 4 = 1
-- user_2: id % 4 = 2
-- user_3: id % 4 = 3

-- 应用层路由
function getTableName(userId) {
  return \`user_\${userId % 4}\`;
}
\`\`\`

### 垂直分区

\`\`\`sql
-- 将大字段分离
-- 主表
CREATE TABLE articles (
  id BIGINT PRIMARY KEY,
  title VARCHAR(200),
  summary TEXT,
  author_id BIGINT,
  created_at TIMESTAMP
);

-- 内容表（访问频率低）
CREATE TABLE article_contents (
  article_id BIGINT PRIMARY KEY,
  content LONGTEXT
);
\`\`\`

## 监控与告警

### 关键指标

\`\`\`sql
-- 慢查询日志
SHOW VARIABLES LIKE 'slow_query_log';
SHOW VARIABLES LIKE 'long_query_time';

-- 性能统计
SHOW STATUS LIKE 'Threads_connected';
SHOW STATUS LIKE 'Queries';
SHOW STATUS LIKE 'Innodb_buffer_pool_read_requests';
\`\`\`

### 常见告警规则

- 慢查询数量 > 10/分钟
- 连接数 > 80% 最大连接数
- QPS 突增 > 200%
- 磁盘使用率 > 85%

## 总结

数据库优化层次：

1. **SQL 优化** - 索引、查询语句
2. **表结构优化** - 数据类型、范式
3. **架构优化** - 缓存、读写分离
4. **扩展优化** - 分区、分库分表

记住：**先定位瓶颈，再针对性优化！**
`,uO=`# Git Workflow Best Practices

## Why You Need a Standardized Workflow

In team collaboration, a standardized Git workflow helps:

- Reduce code conflicts
- Improve code quality
- Facilitate code review
- Support continuous integration

![Git Workflow Diagram](https://picsum.photos/800/400?random=1)

## Common Workflow Patterns

### 1. Git Flow

Git Flow is the most classic branch management model:

\`\`\`bash
# Create feature branch
git checkout -b feature/user-auth develop

# Merge back to develop after completion
git checkout develop
git merge --no-ff feature/user-auth
\`\`\`

**Main Branches:**

- \`main\` - Production code
- \`develop\` - Development code
- \`feature/*\` - Feature branches
- \`release/*\` - Release branches
- \`hotfix/*\` - Hotfix branches

![Branch Model](https://picsum.photos/800/400?random=2)

### 2. GitHub Flow

A simplified workflow suitable for continuous deployment:

1. Create feature branch from \`main\`
2. Commit changes
3. Create Pull Request
4. Code review
5. Merge to \`main\`

\`\`\`bash
# 1. Create branch
git checkout -b feature/new-ui

# 2. Commit code
git add .
git commit -m "feat: add new UI component"

# 3. Push branch
git push origin feature/new-ui
\`\`\`

## Commit Convention

Use **Conventional Commits**:

\`\`\`
<type>(<scope>): <subject>

<body>

<footer>
\`\`\`

**Type Reference:**

| Type | Description |
|------|-------------|
| feat | New feature |
| fix | Bug fix |
| docs | Documentation |
| style | Code style changes |
| refactor | Refactoring |
| test | Testing |
| chore | Build/tools |

**Example:**

\`\`\`bash
feat(auth): add user login feature

- Implement JWT Token verification
- Add login page
- Integrate third-party login

Closes #123
\`\`\`

![Commit History](https://picsum.photos/800/300?random=3)

## Code Review Checklist

Before submitting PR:

- [ ] All tests pass
- [ ] New code has tests
- [ ] Documentation updated
- [ ] No debug code (console.log)
- [ ] Follows team coding standards

## Summary

Choose the right workflow for your team:

- **Small team/fast iteration** → GitHub Flow
- **Large team/versioned releases** → Git Flow
- **Continuous deployment** → Trunk-based
`,fO=`# Git 工作流最佳实践

## 为什么需要规范的工作流

团队协作中，Git 工作流的规范化可以：

- 减少代码冲突
- 提高代码质量
- 便于代码审查
- 支持持续集成

![Git 工作流示意图](https://picsum.photos/800/400?random=1)

## 常见工作流模式

### 1. Git Flow

Git Flow 是最经典的分支管理模式：

\`\`\`bash
# 创建功能分支
git checkout -b feature/user-auth develop

# 完成功能后合并回 develop
git checkout develop
git merge --no-ff feature/user-auth
\`\`\`

**主要分支：**

- \`main\` - 生产环境代码
- \`develop\` - 开发环境代码
- \`feature/*\` - 功能分支
- \`release/*\` - 发布分支
- \`hotfix/*\` - 热修复分支

![分支模型](https://picsum.photos/800/400?random=2)

### 2. GitHub Flow

更简化的工作流，适合持续部署：

1. 从 \`main\` 创建功能分支
2. 提交更改
3. 创建 Pull Request
4. 代码审查
5. 合并到 \`main\`

\`\`\`bash
# 1. 创建分支
git checkout -b feature/new-ui

# 2. 提交代码
git add .
git commit -m "feat: 添加新UI组件"

# 3. 推送分支
git push origin feature/new-ui
\`\`\`

## 提交规范

使用 **Conventional Commits** 规范：

\`\`\`
<type>(<scope>): <subject>

<body>

<footer>
\`\`\`

**类型说明：**

| 类型 | 说明 |
|------|------|
| feat | 新功能 |
| fix | Bug 修复 |
| docs | 文档更新 |
| style | 代码格式调整 |
| refactor | 重构 |
| test | 测试相关 |
| chore | 构建/工具相关 |

**示例：**

\`\`\`bash
feat(auth): 添加用户登录功能

- 实现 JWT Token 验证
- 添加登录页面
- 集成第三方登录

Closes #123
\`\`\`

![提交历史](https://picsum.photos/800/300?random=3)

## 代码审查清单

提交 PR 前自查：

- [ ] 代码通过所有测试
- [ ] 新增代码有对应测试
- [ ] 文档已更新
- [ ] 无 console.log 等调试代码
- [ ] 代码符合团队规范

## 总结

选择适合团队的工作流：

- **小团队/快速迭代** → GitHub Flow
- **大团队/版本发布** → Git Flow
- **持续部署** → Trunk-based
`,dO=`# PCB Design Practical Guide

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
`,pO=`# PCB 设计实战指南

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
`,hO=`# STM32 Getting Started Guide

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
`,mO=`# STM32 入门完全指南

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
`,gO=`## Event Loop Optimization

The event loop is the core of Node.js, and understanding it is crucial for performance optimization:

### Avoid Blocking the Event Loop

\`\`\`javascript
// Bad practice
app.get('/slow', (req, res) => {
  for (let i = 0; i < 1e9; i++) {} // Blocking!
  res.send('Done');
});

// Good practice
app.get('/fast', async (req, res) => {
  await someAsyncOperation();
  res.send('Done');
});
\`\`\`

## Memory Management

### Monitor Memory Usage

\`\`\`javascript
const usage = process.memoryUsage();
console.log('Heap used:', usage.heapUsed / 1024 / 1024, 'MB');
\`\`\`

### Avoid Memory Leaks

- Clean up event listeners promptly
- Watch for references in closures
- Use WeakMap/WeakSet for caching

## Cluster Deployment

Utilize multi-core CPUs:

\`\`\`javascript
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  require('./app');
}
\`\`\`
`,vO=`## 事件循环优化

Node.js 的核心是事件循环，理解它对于性能优化至关重要：

### 避免阻塞事件循环

\`\`\`javascript
// 不好的做法
app.get('/slow', (req, res) => {
  for (let i = 0; i < 1e9; i++) {} // 阻塞！
  res.send('Done');
});

// 好的做法
app.get('/fast', async (req, res) => {
  await someAsyncOperation();
  res.send('Done');
});
\`\`\`

## 内存管理

### 监控内存使用

\`\`\`javascript
const usage = process.memoryUsage();
console.log('Heap used:', usage.heapUsed / 1024 / 1024, 'MB');
\`\`\`

### 避免内存泄漏

- 及时清理事件监听器
- 注意闭包中的引用
- 使用 WeakMap/WeakSet 管理缓存

## 集群部署

利用多核 CPU：

\`\`\`javascript
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  require('./app');
}
\`\`\`
`,yO=`# CAN Bus Protocol Detailed Guide

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
`,xO=`# CAN 总线协议详解

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
`,bO=`## useState Tips

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
`,SO=`## useState 使用技巧

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
`,CO=`# RESTful API Design Best Practices

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
`,TO=`# RESTful API 设计最佳实践

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
`,EO=`# FreeRTOS Real-Time Operating System Basics

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
`,wO=`# FreeRTOS 实时操作系统入门

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
`,_O=`# TypeScript Advanced Usage

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
`,RO=`# TypeScript 高级用法

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
`,Bx=Object.assign({"./markdown/css-flexbox.en.md":oO,"./markdown/css-flexbox.zh.md":lO,"./markdown/database-optimization.en.md":sO,"./markdown/database-optimization.zh.md":cO,"./markdown/git-workflow.en.md":uO,"./markdown/git-workflow.zh.md":fO,"./markdown/hardware-design/pcb/pcb-design-guide.en.md":dO,"./markdown/hardware-design/pcb/pcb-design-guide.zh.md":pO,"./markdown/mcu/stm32/stm32-getting-started.en.md":hO,"./markdown/mcu/stm32/stm32-getting-started.zh.md":mO,"./markdown/nodejs-performance.en.md":gO,"./markdown/nodejs-performance.zh.md":vO,"./markdown/protocols/can/can-bus-protocol.en.md":yO,"./markdown/protocols/can/can-bus-protocol.zh.md":xO,"./markdown/react-hooks.en.md":bO,"./markdown/react-hooks.zh.md":SO,"./markdown/restful-api.en.md":CO,"./markdown/restful-api.zh.md":TO,"./markdown/rtos/freertos/freertos-basics.en.md":EO,"./markdown/rtos/freertos/freertos-basics.zh.md":wO,"./markdown/typescript-advanced.en.md":_O,"./markdown/typescript-advanced.zh.md":RO});console.log("📄 扫描到的 Markdown 文件:",Object.keys(Bx));function AO(n,i){const r=n.match(/^\.\/markdown\/(.+)\.([a-z]{2})\.md$/);if(!r)return null;const l=r[1],s=r[2],u=l.split("/"),d=u[u.length-1];let p="uncategorized";if(u.length>=1){const h=u[0];p={mcu:"mcu",rtos:"rtos",protocols:"protocols","hardware-design":"hardware-design",tools:"tools","embedded-linux":"embedded-linux",automotive:"automotive",iot:"iot",industrial:"industrial","embedded-c":"embedded-c",algorithms:"algorithms"}[h]||h}return{path:n,slug:d,lang:s,category:p,subCategory:u.length>2?u[1]:void 0,content:i}}function NO(){const n=new Map;for(const[l,s]of Object.entries(Bx)){const d=AO(l,s);if(!d)continue;n.has(d.slug)||n.set(d.slug,{});const p=n.get(d.slug);p[d.lang]=d}const i=[];let r=1;for(const[l,{zh:s,en:u}]of n){if(!s){console.warn(`⚠️ 跳过 ${l}: 缺少中文版本`);continue}const d=s.content.match(/^#\s+(.+)$/m),p=d?d[1].trim():l,h=s.content.match(/^#\s+.+\n+(.+?)(?:\n\n|\n#{1,6}\s)/s),m=h?h[1].replace(/\n/g," ").substring(0,100)+"...":"暂无摘要";i.push({id:String(r++),slug:l,status:"published",category:s.category,tags:[s.category,s.subCategory].filter(Boolean),createdAt:new Date().toISOString().split("T")[0],updatedAt:new Date().toISOString().split("T")[0],zh:{title:p,summary:m,content:s.content},en:{title:u&&u.content.match(/^#\s+(.+)$/m)?.[1].trim()||p,summary:u&&u.content.match(/^#\s+.+\n+(.+?)(?:\n\n|\n#{1,6}\s)/s)?.[1].replace(/\n/g," ").substring(0,100)+"..."||m,content:u?.content||s.content}})}return console.log(`✅ 自动生成 ${i.length} 篇笔记`),i}const Gx=NO();function Us(){return Gx.filter(n=>n.status==="published")}function OO(n){return Gx.find(i=>i.slug===n)}function MO(n){return Us().filter(i=>i.category===n)}const DO={mcu:Ps,mpu:xo,fpga:Bd,rtos:Yd,"embedded-linux":Kd,firmware:Ud,protocols:Gd,network:qd,tools:bo,"hardware-design":Pd,automotive:Id,iot:Vd,industrial:Hd,"embedded-c":yo,algorithms:kd,frontend:yo,backend:xo,devops:bo};function LO(){const{t:n,i18n:i}=er(),r=i.language,l=Us().slice(0,6);return x.jsxs("div",{children:[x.jsxs("section",{className:"relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white py-20 md:py-32",children:[x.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"}),x.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[x.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:n("home.title")}),x.jsx("p",{className:"text-xl md:text-2xl text-indigo-100 mb-4",children:n("home.subtitle")}),x.jsx("p",{className:"text-lg text-indigo-200 mb-8 max-w-2xl mx-auto",children:n("home.description")}),x.jsx(Ge,{to:"/notes",children:x.jsxs(dt,{size:"lg",className:"bg-white text-indigo-600 hover:bg-indigo-50",children:[n("home.viewAll"),x.jsx(fy,{className:"w-4 h-4 ml-2"})]})})]})]}),x.jsx("section",{className:"py-16 bg-white",children:x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[x.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center",children:n("home.categories")}),x.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:ti.map(s=>{const u=DO[s.slug]||Xi;return x.jsx(Ge,{to:`/category/${s.slug}`,children:x.jsx(va,{className:"h-full hover:shadow-lg transition-shadow cursor-pointer group",children:x.jsx(ya,{className:"p-6",children:x.jsxs("div",{className:"flex items-start gap-4",children:[x.jsx("div",{className:"w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-500 transition-colors",children:x.jsx(u,{className:"w-6 h-6 text-indigo-500 group-hover:text-white transition-colors"})}),x.jsxs("div",{children:[x.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-1",children:s[r].name}),x.jsx("p",{className:"text-sm text-slate-500",children:s[r].description})]})]})})})},s.id)})})]})}),x.jsx("section",{className:"py-16 bg-slate-50",children:x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[x.jsxs("div",{className:"flex items-center justify-between mb-8",children:[x.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-slate-800",children:n("home.latestNotes")}),x.jsx(Ge,{to:"/notes",children:x.jsxs(dt,{variant:"ghost",className:"text-indigo-600",children:[n("home.viewAll"),x.jsx(fy,{className:"w-4 h-4 ml-1"})]})})]}),x.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:l.map(s=>x.jsx(jO,{note:s,lang:r},s.id))})]})})]})}function jO({note:n,lang:i}){const r=ti.find(l=>l.slug===n.category);return x.jsx(Ge,{to:`/notes/${n.slug}`,children:x.jsx(va,{className:"h-full hover:shadow-lg transition-shadow cursor-pointer",children:x.jsxs(ya,{className:"p-6",children:[x.jsx("div",{className:"flex items-center gap-2 mb-3",children:x.jsx(Hs,{variant:"secondary",className:"text-xs",children:r?.[i].name})}),x.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-2 line-clamp-2",children:n[i].title}),x.jsx("p",{className:"text-sm text-slate-500 mb-4 line-clamp-3",children:n[i].summary}),x.jsxs("div",{className:"flex items-center justify-between",children:[x.jsx("div",{className:"flex flex-wrap gap-1",children:n.tags.slice(0,2).map(l=>x.jsxs("span",{className:"text-xs text-slate-400",children:["#",l]},l))}),x.jsx("span",{className:"text-xs text-slate-400",children:n.createdAt})]})]})})})}function kO({className:n,type:i,...r}){return x.jsx("input",{type:i,"data-slot":"input",className:ht("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",n),...r})}function dy(n,[i,r]){return Math.min(r,Math.max(i,n))}function IO(n){const i=zO(n),r=g.forwardRef((l,s)=>{const{children:u,...d}=l,p=g.Children.toArray(u),h=p.find(HO);if(h){const m=h.props.children,b=p.map(v=>v===h?g.Children.count(m)>1?g.Children.only(null):g.isValidElement(m)?m.props.children:null:v);return x.jsx(i,{...d,ref:s,children:g.isValidElement(m)?g.cloneElement(m,void 0,b):null})}return x.jsx(i,{...d,ref:s,children:u})});return r.displayName=`${n}.Slot`,r}function zO(n){const i=g.forwardRef((r,l)=>{const{children:s,...u}=r;if(g.isValidElement(s)){const d=BO(s),p=UO(u,s.props);return s.type!==g.Fragment&&(p.ref=l?Sa(l,d):d),g.cloneElement(s,p)}return g.Children.count(s)>1?g.Children.only(null):null});return i.displayName=`${n}.SlotClone`,i}var PO=Symbol("radix.slottable");function HO(n){return g.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===PO}function UO(n,i){const r={...i};for(const l in i){const s=n[l],u=i[l];/^on[A-Z]/.test(l)?s&&u?r[l]=(...p)=>{const h=u(...p);return s(...p),h}:s&&(r[l]=s):l==="style"?r[l]={...s,...u}:l==="className"&&(r[l]=[s,u].filter(Boolean).join(" "))}return{...n,...r}}function BO(n){let i=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning;return r?n.ref:(i=Object.getOwnPropertyDescriptor(n,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning,r?n.props.ref:n.props.ref||n.ref)}function GO(n){const i=g.useRef({value:n,previous:n});return g.useMemo(()=>(i.current.value!==n&&(i.current.previous=i.current.value,i.current.value=n),i.current.previous),[n])}var Vx=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),VO="VisuallyHidden",Fx=g.forwardRef((n,i)=>x.jsx(ke.span,{...n,ref:i,style:{...Vx,...n.style}}));Fx.displayName=VO;var FO=Fx,KO=[" ","Enter","ArrowUp","ArrowDown"],YO=[" ","Enter"],Qa="Select",[Bs,Gs,qO]=dd(Qa),[or]=Wa(Qa,[qO,rr]),Vs=rr(),[$O,Ta]=or(Qa),[XO,QO]=or(Qa),Kx=n=>{const{__scopeSelect:i,children:r,open:l,defaultOpen:s,onOpenChange:u,value:d,defaultValue:p,onValueChange:h,dir:m,name:b,autoComplete:v,disabled:C,required:E,form:w}=n,T=Vs(i),[_,N]=g.useState(null),[M,D]=g.useState(null),[H,G]=g.useState(!1),W=pd(m),[U,Y]=qi({prop:l,defaultProp:s??!1,onChange:u,caller:Qa}),[J,te]=qi({prop:d,defaultProp:p,onChange:h,caller:Qa}),ae=g.useRef(null),ne=_?w||!!_.closest("form"):!0,[re,ie]=g.useState(new Set),ue=Array.from(re).map(L=>L.props.value).join(";");return x.jsx(Ds,{...T,children:x.jsxs($O,{required:E,scope:i,trigger:_,onTriggerChange:N,valueNode:M,onValueNodeChange:D,valueNodeHasChildren:H,onValueNodeHasChildrenChange:G,contentId:Un(),value:J,onValueChange:te,open:U,onOpenChange:Y,dir:W,triggerPointerDownPosRef:ae,disabled:C,children:[x.jsx(Bs.Provider,{scope:i,children:x.jsx(XO,{scope:n.__scopeSelect,onNativeOptionAdd:g.useCallback(L=>{ie(K=>new Set(K).add(L))},[]),onNativeOptionRemove:g.useCallback(L=>{ie(K=>{const z=new Set(K);return z.delete(L),z})},[]),children:r})}),ne?x.jsxs(pb,{"aria-hidden":!0,required:E,tabIndex:-1,name:b,autoComplete:v,value:J,onChange:L=>te(L.target.value),disabled:C,form:w,children:[J===void 0?x.jsx("option",{value:""}):null,Array.from(re)]},ue):null]})})};Kx.displayName=Qa;var Yx="SelectTrigger",qx=g.forwardRef((n,i)=>{const{__scopeSelect:r,disabled:l=!1,...s}=n,u=Vs(r),d=Ta(Yx,r),p=d.disabled||l,h=Fe(i,d.onTriggerChange),m=Gs(r),b=g.useRef("touch"),[v,C,E]=mb(T=>{const _=m().filter(D=>!D.disabled),N=_.find(D=>D.value===d.value),M=gb(_,T,N);M!==void 0&&d.onValueChange(M.value)}),w=T=>{p||(d.onOpenChange(!0),E()),T&&(d.triggerPointerDownPosRef.current={x:Math.round(T.pageX),y:Math.round(T.pageY)})};return x.jsx(Td,{asChild:!0,...u,children:x.jsx(ke.button,{type:"button",role:"combobox","aria-controls":d.contentId,"aria-expanded":d.open,"aria-required":d.required,"aria-autocomplete":"none",dir:d.dir,"data-state":d.open?"open":"closed",disabled:p,"data-disabled":p?"":void 0,"data-placeholder":hb(d.value)?"":void 0,...s,ref:h,onClick:de(s.onClick,T=>{T.currentTarget.focus(),b.current!=="mouse"&&w(T)}),onPointerDown:de(s.onPointerDown,T=>{b.current=T.pointerType;const _=T.target;_.hasPointerCapture(T.pointerId)&&_.releasePointerCapture(T.pointerId),T.button===0&&T.ctrlKey===!1&&T.pointerType==="mouse"&&(w(T),T.preventDefault())}),onKeyDown:de(s.onKeyDown,T=>{const _=v.current!=="";!(T.ctrlKey||T.altKey||T.metaKey)&&T.key.length===1&&C(T.key),!(_&&T.key===" ")&&KO.includes(T.key)&&(w(),T.preventDefault())})})})});qx.displayName=Yx;var $x="SelectValue",Xx=g.forwardRef((n,i)=>{const{__scopeSelect:r,className:l,style:s,children:u,placeholder:d="",...p}=n,h=Ta($x,r),{onValueNodeHasChildrenChange:m}=h,b=u!==void 0,v=Fe(i,h.onValueNodeChange);return mt(()=>{m(b)},[m,b]),x.jsx(ke.span,{...p,ref:v,style:{pointerEvents:"none"},children:hb(h.value)?x.jsx(x.Fragment,{children:d}):u})});Xx.displayName=$x;var ZO="SelectIcon",Qx=g.forwardRef((n,i)=>{const{__scopeSelect:r,children:l,...s}=n;return x.jsx(ke.span,{"aria-hidden":!0,...s,ref:i,children:l||"▼"})});Qx.displayName=ZO;var WO="SelectPortal",Zx=n=>x.jsx(Ls,{asChild:!0,...n});Zx.displayName=WO;var Za="SelectContent",Wx=g.forwardRef((n,i)=>{const r=Ta(Za,n.__scopeSelect),[l,s]=g.useState();if(mt(()=>{s(new DocumentFragment)},[]),!r.open){const u=l;return u?Eo.createPortal(x.jsx(Jx,{scope:n.__scopeSelect,children:x.jsx(Bs.Slot,{scope:n.__scopeSelect,children:x.jsx("div",{children:n.children})})}),u):null}return x.jsx(eb,{...n,ref:i})});Wx.displayName=Za;var tn=10,[Jx,Ea]=or(Za),JO="SelectContentImpl",eM=IO("SelectContent.RemoveScroll"),eb=g.forwardRef((n,i)=>{const{__scopeSelect:r,position:l="item-aligned",onCloseAutoFocus:s,onEscapeKeyDown:u,onPointerDownOutside:d,side:p,sideOffset:h,align:m,alignOffset:b,arrowPadding:v,collisionBoundary:C,collisionPadding:E,sticky:w,hideWhenDetached:T,avoidCollisions:_,...N}=n,M=Ta(Za,r),[D,H]=g.useState(null),[G,W]=g.useState(null),U=Fe(i,X=>H(X)),[Y,J]=g.useState(null),[te,ae]=g.useState(null),ne=Gs(r),[re,ie]=g.useState(!1),ue=g.useRef(!1);g.useEffect(()=>{if(D)return Y0(D)},[D]),g0();const L=g.useCallback(X=>{const[ye,...be]=ne().map(Ie=>Ie.ref.current),[_e]=be.slice(-1),Me=document.activeElement;for(const Ie of X)if(Ie===Me||(Ie?.scrollIntoView({block:"nearest"}),Ie===ye&&G&&(G.scrollTop=0),Ie===_e&&G&&(G.scrollTop=G.scrollHeight),Ie?.focus(),document.activeElement!==Me))return},[ne,G]),K=g.useCallback(()=>L([Y,D]),[L,Y,D]);g.useEffect(()=>{re&&K()},[re,K]);const{onOpenChange:z,triggerPointerDownPosRef:Z}=M;g.useEffect(()=>{if(D){let X={x:0,y:0};const ye=_e=>{X={x:Math.abs(Math.round(_e.pageX)-(Z.current?.x??0)),y:Math.abs(Math.round(_e.pageY)-(Z.current?.y??0))}},be=_e=>{X.x<=10&&X.y<=10?_e.preventDefault():D.contains(_e.target)||z(!1),document.removeEventListener("pointermove",ye),Z.current=null};return Z.current!==null&&(document.addEventListener("pointermove",ye),document.addEventListener("pointerup",be,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ye),document.removeEventListener("pointerup",be,{capture:!0})}}},[D,z,Z]),g.useEffect(()=>{const X=()=>z(!1);return window.addEventListener("blur",X),window.addEventListener("resize",X),()=>{window.removeEventListener("blur",X),window.removeEventListener("resize",X)}},[z]);const[pe,R]=mb(X=>{const ye=ne().filter(Me=>!Me.disabled),be=ye.find(Me=>Me.ref.current===document.activeElement),_e=gb(ye,X,be);_e&&setTimeout(()=>_e.ref.current.focus())}),V=g.useCallback((X,ye,be)=>{const _e=!ue.current&&!be;(M.value!==void 0&&M.value===ye||_e)&&(J(X),_e&&(ue.current=!0))},[M.value]),Q=g.useCallback(()=>D?.focus(),[D]),ee=g.useCallback((X,ye,be)=>{const _e=!ue.current&&!be;(M.value!==void 0&&M.value===ye||_e)&&ae(X)},[M.value]),fe=l==="popper"?Zf:tb,me=fe===Zf?{side:p,sideOffset:h,align:m,alignOffset:b,arrowPadding:v,collisionBoundary:C,collisionPadding:E,sticky:w,hideWhenDetached:T,avoidCollisions:_}:{};return x.jsx(Jx,{scope:r,content:D,viewport:G,onViewportChange:W,itemRefCallback:V,selectedItem:Y,onItemLeave:Q,itemTextRefCallback:ee,focusSelectedItem:K,selectedItemText:te,position:l,isPositioned:re,searchRef:pe,children:x.jsx(_d,{as:eM,allowPinchZoom:!0,children:x.jsx(hd,{asChild:!0,trapped:M.open,onMountAutoFocus:X=>{X.preventDefault()},onUnmountAutoFocus:de(s,X=>{M.trigger?.focus({preventScroll:!0}),X.preventDefault()}),children:x.jsx(Rs,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:X=>X.preventDefault(),onDismiss:()=>M.onOpenChange(!1),children:x.jsx(fe,{role:"listbox",id:M.contentId,"data-state":M.open?"open":"closed",dir:M.dir,onContextMenu:X=>X.preventDefault(),...N,...me,onPlaced:()=>ie(!0),ref:U,style:{display:"flex",flexDirection:"column",outline:"none",...N.style},onKeyDown:de(N.onKeyDown,X=>{const ye=X.ctrlKey||X.altKey||X.metaKey;if(X.key==="Tab"&&X.preventDefault(),!ye&&X.key.length===1&&R(X.key),["ArrowUp","ArrowDown","Home","End"].includes(X.key)){let _e=ne().filter(Me=>!Me.disabled).map(Me=>Me.ref.current);if(["ArrowUp","End"].includes(X.key)&&(_e=_e.slice().reverse()),["ArrowUp","ArrowDown"].includes(X.key)){const Me=X.target,Ie=_e.indexOf(Me);_e=_e.slice(Ie+1)}setTimeout(()=>L(_e)),X.preventDefault()}})})})})})})});eb.displayName=JO;var tM="SelectItemAlignedPosition",tb=g.forwardRef((n,i)=>{const{__scopeSelect:r,onPlaced:l,...s}=n,u=Ta(Za,r),d=Ea(Za,r),[p,h]=g.useState(null),[m,b]=g.useState(null),v=Fe(i,U=>b(U)),C=Gs(r),E=g.useRef(!1),w=g.useRef(!0),{viewport:T,selectedItem:_,selectedItemText:N,focusSelectedItem:M}=d,D=g.useCallback(()=>{if(u.trigger&&u.valueNode&&p&&m&&T&&_&&N){const U=u.trigger.getBoundingClientRect(),Y=m.getBoundingClientRect(),J=u.valueNode.getBoundingClientRect(),te=N.getBoundingClientRect();if(u.dir!=="rtl"){const Me=te.left-Y.left,Ie=J.left-Me,yt=U.left-Ie,xt=U.width+yt,wa=Math.max(xt,Y.width),_a=window.innerWidth-tn,lr=dy(Ie,[tn,Math.max(tn,_a-wa)]);p.style.minWidth=xt+"px",p.style.left=lr+"px"}else{const Me=Y.right-te.right,Ie=window.innerWidth-J.right-Me,yt=window.innerWidth-U.right-Ie,xt=U.width+yt,wa=Math.max(xt,Y.width),_a=window.innerWidth-tn,lr=dy(Ie,[tn,Math.max(tn,_a-wa)]);p.style.minWidth=xt+"px",p.style.right=lr+"px"}const ae=C(),ne=window.innerHeight-tn*2,re=T.scrollHeight,ie=window.getComputedStyle(m),ue=parseInt(ie.borderTopWidth,10),L=parseInt(ie.paddingTop,10),K=parseInt(ie.borderBottomWidth,10),z=parseInt(ie.paddingBottom,10),Z=ue+L+re+z+K,pe=Math.min(_.offsetHeight*5,Z),R=window.getComputedStyle(T),V=parseInt(R.paddingTop,10),Q=parseInt(R.paddingBottom,10),ee=U.top+U.height/2-tn,fe=ne-ee,me=_.offsetHeight/2,X=_.offsetTop+me,ye=ue+L+X,be=Z-ye;if(ye<=ee){const Me=ae.length>0&&_===ae[ae.length-1].ref.current;p.style.bottom="0px";const Ie=m.clientHeight-T.offsetTop-T.offsetHeight,yt=Math.max(fe,me+(Me?Q:0)+Ie+K),xt=ye+yt;p.style.height=xt+"px"}else{const Me=ae.length>0&&_===ae[0].ref.current;p.style.top="0px";const yt=Math.max(ee,ue+T.offsetTop+(Me?V:0)+me)+be;p.style.height=yt+"px",T.scrollTop=ye-ee+T.offsetTop}p.style.margin=`${tn}px 0`,p.style.minHeight=pe+"px",p.style.maxHeight=ne+"px",l?.(),requestAnimationFrame(()=>E.current=!0)}},[C,u.trigger,u.valueNode,p,m,T,_,N,u.dir,l]);mt(()=>D(),[D]);const[H,G]=g.useState();mt(()=>{m&&G(window.getComputedStyle(m).zIndex)},[m]);const W=g.useCallback(U=>{U&&w.current===!0&&(D(),M?.(),w.current=!1)},[D,M]);return x.jsx(aM,{scope:r,contentWrapper:p,shouldExpandOnScrollRef:E,onScrollButtonChange:W,children:x.jsx("div",{ref:h,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:H},children:x.jsx(ke.div,{...s,ref:v,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}})})})});tb.displayName=tM;var nM="SelectPopperPosition",Zf=g.forwardRef((n,i)=>{const{__scopeSelect:r,align:l="start",collisionPadding:s=tn,...u}=n,d=Vs(r);return x.jsx(Ed,{...d,...u,ref:i,align:l,collisionPadding:s,style:{boxSizing:"border-box",...u.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Zf.displayName=nM;var[aM,$d]=or(Za,{}),Wf="SelectViewport",nb=g.forwardRef((n,i)=>{const{__scopeSelect:r,nonce:l,...s}=n,u=Ea(Wf,r),d=$d(Wf,r),p=Fe(i,u.onViewportChange),h=g.useRef(0);return x.jsxs(x.Fragment,{children:[x.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:l}),x.jsx(Bs.Slot,{scope:r,children:x.jsx(ke.div,{"data-radix-select-viewport":"",role:"presentation",...s,ref:p,style:{position:"relative",flex:1,overflow:"hidden auto",...s.style},onScroll:de(s.onScroll,m=>{const b=m.currentTarget,{contentWrapper:v,shouldExpandOnScrollRef:C}=d;if(C?.current&&v){const E=Math.abs(h.current-b.scrollTop);if(E>0){const w=window.innerHeight-tn*2,T=parseFloat(v.style.minHeight),_=parseFloat(v.style.height),N=Math.max(T,_);if(N<w){const M=N+E,D=Math.min(w,M),H=M-D;v.style.height=D+"px",v.style.bottom==="0px"&&(b.scrollTop=H>0?H:0,v.style.justifyContent="flex-end")}}}h.current=b.scrollTop})})})]})});nb.displayName=Wf;var ab="SelectGroup",[iM,rM]=or(ab),oM=g.forwardRef((n,i)=>{const{__scopeSelect:r,...l}=n,s=Un();return x.jsx(iM,{scope:r,id:s,children:x.jsx(ke.div,{role:"group","aria-labelledby":s,...l,ref:i})})});oM.displayName=ab;var ib="SelectLabel",lM=g.forwardRef((n,i)=>{const{__scopeSelect:r,...l}=n,s=rM(ib,r);return x.jsx(ke.div,{id:s.id,...l,ref:i})});lM.displayName=ib;var Ss="SelectItem",[sM,rb]=or(Ss),ob=g.forwardRef((n,i)=>{const{__scopeSelect:r,value:l,disabled:s=!1,textValue:u,...d}=n,p=Ta(Ss,r),h=Ea(Ss,r),m=p.value===l,[b,v]=g.useState(u??""),[C,E]=g.useState(!1),w=Fe(i,M=>h.itemRefCallback?.(M,l,s)),T=Un(),_=g.useRef("touch"),N=()=>{s||(p.onValueChange(l),p.onOpenChange(!1))};if(l==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return x.jsx(sM,{scope:r,value:l,disabled:s,textId:T,isSelected:m,onItemTextChange:g.useCallback(M=>{v(D=>D||(M?.textContent??"").trim())},[]),children:x.jsx(Bs.ItemSlot,{scope:r,value:l,disabled:s,textValue:b,children:x.jsx(ke.div,{role:"option","aria-labelledby":T,"data-highlighted":C?"":void 0,"aria-selected":m&&C,"data-state":m?"checked":"unchecked","aria-disabled":s||void 0,"data-disabled":s?"":void 0,tabIndex:s?void 0:-1,...d,ref:w,onFocus:de(d.onFocus,()=>E(!0)),onBlur:de(d.onBlur,()=>E(!1)),onClick:de(d.onClick,()=>{_.current!=="mouse"&&N()}),onPointerUp:de(d.onPointerUp,()=>{_.current==="mouse"&&N()}),onPointerDown:de(d.onPointerDown,M=>{_.current=M.pointerType}),onPointerMove:de(d.onPointerMove,M=>{_.current=M.pointerType,s?h.onItemLeave?.():_.current==="mouse"&&M.currentTarget.focus({preventScroll:!0})}),onPointerLeave:de(d.onPointerLeave,M=>{M.currentTarget===document.activeElement&&h.onItemLeave?.()}),onKeyDown:de(d.onKeyDown,M=>{h.searchRef?.current!==""&&M.key===" "||(YO.includes(M.key)&&N(),M.key===" "&&M.preventDefault())})})})})});ob.displayName=Ss;var lo="SelectItemText",lb=g.forwardRef((n,i)=>{const{__scopeSelect:r,className:l,style:s,...u}=n,d=Ta(lo,r),p=Ea(lo,r),h=rb(lo,r),m=QO(lo,r),[b,v]=g.useState(null),C=Fe(i,N=>v(N),h.onItemTextChange,N=>p.itemTextRefCallback?.(N,h.value,h.disabled)),E=b?.textContent,w=g.useMemo(()=>x.jsx("option",{value:h.value,disabled:h.disabled,children:E},h.value),[h.disabled,h.value,E]),{onNativeOptionAdd:T,onNativeOptionRemove:_}=m;return mt(()=>(T(w),()=>_(w)),[T,_,w]),x.jsxs(x.Fragment,{children:[x.jsx(ke.span,{id:h.textId,...u,ref:C}),h.isSelected&&d.valueNode&&!d.valueNodeHasChildren?Eo.createPortal(u.children,d.valueNode):null]})});lb.displayName=lo;var sb="SelectItemIndicator",cb=g.forwardRef((n,i)=>{const{__scopeSelect:r,...l}=n;return rb(sb,r).isSelected?x.jsx(ke.span,{"aria-hidden":!0,...l,ref:i}):null});cb.displayName=sb;var Jf="SelectScrollUpButton",ub=g.forwardRef((n,i)=>{const r=Ea(Jf,n.__scopeSelect),l=$d(Jf,n.__scopeSelect),[s,u]=g.useState(!1),d=Fe(i,l.onScrollButtonChange);return mt(()=>{if(r.viewport&&r.isPositioned){let p=function(){const m=h.scrollTop>0;u(m)};const h=r.viewport;return p(),h.addEventListener("scroll",p),()=>h.removeEventListener("scroll",p)}},[r.viewport,r.isPositioned]),s?x.jsx(db,{...n,ref:d,onAutoScroll:()=>{const{viewport:p,selectedItem:h}=r;p&&h&&(p.scrollTop=p.scrollTop-h.offsetHeight)}}):null});ub.displayName=Jf;var ed="SelectScrollDownButton",fb=g.forwardRef((n,i)=>{const r=Ea(ed,n.__scopeSelect),l=$d(ed,n.__scopeSelect),[s,u]=g.useState(!1),d=Fe(i,l.onScrollButtonChange);return mt(()=>{if(r.viewport&&r.isPositioned){let p=function(){const m=h.scrollHeight-h.clientHeight,b=Math.ceil(h.scrollTop)<m;u(b)};const h=r.viewport;return p(),h.addEventListener("scroll",p),()=>h.removeEventListener("scroll",p)}},[r.viewport,r.isPositioned]),s?x.jsx(db,{...n,ref:d,onAutoScroll:()=>{const{viewport:p,selectedItem:h}=r;p&&h&&(p.scrollTop=p.scrollTop+h.offsetHeight)}}):null});fb.displayName=ed;var db=g.forwardRef((n,i)=>{const{__scopeSelect:r,onAutoScroll:l,...s}=n,u=Ea("SelectScrollButton",r),d=g.useRef(null),p=Gs(r),h=g.useCallback(()=>{d.current!==null&&(window.clearInterval(d.current),d.current=null)},[]);return g.useEffect(()=>()=>h(),[h]),mt(()=>{p().find(b=>b.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[p]),x.jsx(ke.div,{"aria-hidden":!0,...s,ref:i,style:{flexShrink:0,...s.style},onPointerDown:de(s.onPointerDown,()=>{d.current===null&&(d.current=window.setInterval(l,50))}),onPointerMove:de(s.onPointerMove,()=>{u.onItemLeave?.(),d.current===null&&(d.current=window.setInterval(l,50))}),onPointerLeave:de(s.onPointerLeave,()=>{h()})})}),cM="SelectSeparator",uM=g.forwardRef((n,i)=>{const{__scopeSelect:r,...l}=n;return x.jsx(ke.div,{"aria-hidden":!0,...l,ref:i})});uM.displayName=cM;var td="SelectArrow",fM=g.forwardRef((n,i)=>{const{__scopeSelect:r,...l}=n,s=Vs(r),u=Ta(td,r),d=Ea(td,r);return u.open&&d.position==="popper"?x.jsx(wd,{...s,...l,ref:i}):null});fM.displayName=td;var dM="SelectBubbleInput",pb=g.forwardRef(({__scopeSelect:n,value:i,...r},l)=>{const s=g.useRef(null),u=Fe(l,s),d=GO(i);return g.useEffect(()=>{const p=s.current;if(!p)return;const h=window.HTMLSelectElement.prototype,b=Object.getOwnPropertyDescriptor(h,"value").set;if(d!==i&&b){const v=new Event("change",{bubbles:!0});b.call(p,i),p.dispatchEvent(v)}},[d,i]),x.jsx(ke.select,{...r,style:{...Vx,...r.style},ref:u,defaultValue:i})});pb.displayName=dM;function hb(n){return n===""||n===void 0}function mb(n){const i=an(n),r=g.useRef(""),l=g.useRef(0),s=g.useCallback(d=>{const p=r.current+d;i(p),(function h(m){r.current=m,window.clearTimeout(l.current),m!==""&&(l.current=window.setTimeout(()=>h(""),1e3))})(p)},[i]),u=g.useCallback(()=>{r.current="",window.clearTimeout(l.current)},[]);return g.useEffect(()=>()=>window.clearTimeout(l.current),[]),[r,s,u]}function gb(n,i,r){const s=i.length>1&&Array.from(i).every(m=>m===i[0])?i[0]:i,u=r?n.indexOf(r):-1;let d=pM(n,Math.max(u,0));s.length===1&&(d=d.filter(m=>m!==r));const h=d.find(m=>m.textValue.toLowerCase().startsWith(s.toLowerCase()));return h!==r?h:void 0}function pM(n,i){return n.map((r,l)=>n[(i+l)%n.length])}var hM=Kx,mM=qx,gM=Xx,vM=Qx,yM=Zx,xM=Wx,bM=nb,SM=ob,CM=lb,TM=cb,EM=ub,wM=fb;function py({...n}){return x.jsx(hM,{"data-slot":"select",...n})}function hy({...n}){return x.jsx(gM,{"data-slot":"select-value",...n})}function my({className:n,size:i="default",children:r,...l}){return x.jsxs(mM,{"data-slot":"select-trigger","data-size":i,className:ht("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",n),...l,children:[r,x.jsx(vM,{asChild:!0,children:x.jsx(zd,{className:"size-4 opacity-50"})})]})}function gy({className:n,children:i,position:r="item-aligned",align:l="center",...s}){return x.jsx(yM,{children:x.jsxs(xM,{"data-slot":"select-content",className:ht("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",r==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",n),position:r,align:l,...s,children:[x.jsx(_M,{}),x.jsx(bM,{className:ht("p-1",r==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:i}),x.jsx(RM,{})]})})}function jf({className:n,children:i,...r}){return x.jsxs(SM,{"data-slot":"select-item",className:ht("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",n),...r,children:[x.jsx("span",{"data-slot":"select-item-indicator",className:"absolute right-2 flex size-3.5 items-center justify-center",children:x.jsx(TM,{children:x.jsx(uN,{className:"size-4"})})}),x.jsx(CM,{children:i})]})}function _M({className:n,...i}){return x.jsx(EM,{"data-slot":"select-scroll-up-button",className:ht("flex cursor-default items-center justify-center py-1",n),...i,children:x.jsx(hN,{className:"size-4"})})}function RM({className:n,...i}){return x.jsx(wM,{"data-slot":"select-scroll-down-button",className:ht("flex cursor-default items-center justify-center py-1",n),...i,children:x.jsx(zd,{className:"size-4"})})}var AM=Symbol("radix.slottable");function NM(n){const i=({children:r})=>x.jsx(x.Fragment,{children:r});return i.displayName=`${n}.Slottable`,i.__radixId=AM,i}var[Fs]=Wa("Tooltip",[rr]),Ks=rr(),vb="TooltipProvider",OM=700,nd="tooltip.open",[MM,Xd]=Fs(vb),yb=n=>{const{__scopeTooltip:i,delayDuration:r=OM,skipDelayDuration:l=300,disableHoverableContent:s=!1,children:u}=n,d=g.useRef(!0),p=g.useRef(!1),h=g.useRef(0);return g.useEffect(()=>{const m=h.current;return()=>window.clearTimeout(m)},[]),x.jsx(MM,{scope:i,isOpenDelayedRef:d,delayDuration:r,onOpen:g.useCallback(()=>{window.clearTimeout(h.current),d.current=!1},[]),onClose:g.useCallback(()=>{window.clearTimeout(h.current),h.current=window.setTimeout(()=>d.current=!0,l)},[l]),isPointerInTransitRef:p,onPointerInTransitChange:g.useCallback(m=>{p.current=m},[]),disableHoverableContent:s,children:u})};yb.displayName=vb;var So="Tooltip",[DM,Oo]=Fs(So),xb=n=>{const{__scopeTooltip:i,children:r,open:l,defaultOpen:s,onOpenChange:u,disableHoverableContent:d,delayDuration:p}=n,h=Xd(So,n.__scopeTooltip),m=Ks(i),[b,v]=g.useState(null),C=Un(),E=g.useRef(0),w=d??h.disableHoverableContent,T=p??h.delayDuration,_=g.useRef(!1),[N,M]=qi({prop:l,defaultProp:s??!1,onChange:U=>{U?(h.onOpen(),document.dispatchEvent(new CustomEvent(nd))):h.onClose(),u?.(U)},caller:So}),D=g.useMemo(()=>N?_.current?"delayed-open":"instant-open":"closed",[N]),H=g.useCallback(()=>{window.clearTimeout(E.current),E.current=0,_.current=!1,M(!0)},[M]),G=g.useCallback(()=>{window.clearTimeout(E.current),E.current=0,M(!1)},[M]),W=g.useCallback(()=>{window.clearTimeout(E.current),E.current=window.setTimeout(()=>{_.current=!0,M(!0),E.current=0},T)},[T,M]);return g.useEffect(()=>()=>{E.current&&(window.clearTimeout(E.current),E.current=0)},[]),x.jsx(Ds,{...m,children:x.jsx(DM,{scope:i,contentId:C,open:N,stateAttribute:D,trigger:b,onTriggerChange:v,onTriggerEnter:g.useCallback(()=>{h.isOpenDelayedRef.current?W():H()},[h.isOpenDelayedRef,W,H]),onTriggerLeave:g.useCallback(()=>{w?G():(window.clearTimeout(E.current),E.current=0)},[G,w]),onOpen:H,onClose:G,disableHoverableContent:w,children:r})})};xb.displayName=So;var ad="TooltipTrigger",bb=g.forwardRef((n,i)=>{const{__scopeTooltip:r,...l}=n,s=Oo(ad,r),u=Xd(ad,r),d=Ks(r),p=g.useRef(null),h=Fe(i,p,s.onTriggerChange),m=g.useRef(!1),b=g.useRef(!1),v=g.useCallback(()=>m.current=!1,[]);return g.useEffect(()=>()=>document.removeEventListener("pointerup",v),[v]),x.jsx(Td,{asChild:!0,...d,children:x.jsx(ke.button,{"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute,...l,ref:h,onPointerMove:de(n.onPointerMove,C=>{C.pointerType!=="touch"&&!b.current&&!u.isPointerInTransitRef.current&&(s.onTriggerEnter(),b.current=!0)}),onPointerLeave:de(n.onPointerLeave,()=>{s.onTriggerLeave(),b.current=!1}),onPointerDown:de(n.onPointerDown,()=>{s.open&&s.onClose(),m.current=!0,document.addEventListener("pointerup",v,{once:!0})}),onFocus:de(n.onFocus,()=>{m.current||s.onOpen()}),onBlur:de(n.onBlur,s.onClose),onClick:de(n.onClick,s.onClose)})})});bb.displayName=ad;var Qd="TooltipPortal",[LM,jM]=Fs(Qd,{forceMount:void 0}),Sb=n=>{const{__scopeTooltip:i,forceMount:r,children:l,container:s}=n,u=Oo(Qd,i);return x.jsx(LM,{scope:i,forceMount:r,children:x.jsx(Ja,{present:r||u.open,children:x.jsx(Ls,{asChild:!0,container:s,children:l})})})};Sb.displayName=Qd;var Qi="TooltipContent",Cb=g.forwardRef((n,i)=>{const r=jM(Qi,n.__scopeTooltip),{forceMount:l=r.forceMount,side:s="top",...u}=n,d=Oo(Qi,n.__scopeTooltip);return x.jsx(Ja,{present:l||d.open,children:d.disableHoverableContent?x.jsx(Tb,{side:s,...u,ref:i}):x.jsx(kM,{side:s,...u,ref:i})})}),kM=g.forwardRef((n,i)=>{const r=Oo(Qi,n.__scopeTooltip),l=Xd(Qi,n.__scopeTooltip),s=g.useRef(null),u=Fe(i,s),[d,p]=g.useState(null),{trigger:h,onClose:m}=r,b=s.current,{onPointerInTransitChange:v}=l,C=g.useCallback(()=>{p(null),v(!1)},[v]),E=g.useCallback((w,T)=>{const _=w.currentTarget,N={x:w.clientX,y:w.clientY},M=HM(N,_.getBoundingClientRect()),D=UM(N,M),H=BM(T.getBoundingClientRect()),G=VM([...D,...H]);p(G),v(!0)},[v]);return g.useEffect(()=>()=>C(),[C]),g.useEffect(()=>{if(h&&b){const w=_=>E(_,b),T=_=>E(_,h);return h.addEventListener("pointerleave",w),b.addEventListener("pointerleave",T),()=>{h.removeEventListener("pointerleave",w),b.removeEventListener("pointerleave",T)}}},[h,b,E,C]),g.useEffect(()=>{if(d){const w=T=>{const _=T.target,N={x:T.clientX,y:T.clientY},M=h?.contains(_)||b?.contains(_),D=!GM(N,d);M?C():D&&(C(),m())};return document.addEventListener("pointermove",w),()=>document.removeEventListener("pointermove",w)}},[h,b,d,m,C]),x.jsx(Tb,{...n,ref:u})}),[IM,zM]=Fs(So,{isInside:!1}),PM=NM("TooltipContent"),Tb=g.forwardRef((n,i)=>{const{__scopeTooltip:r,children:l,"aria-label":s,onEscapeKeyDown:u,onPointerDownOutside:d,...p}=n,h=Oo(Qi,r),m=Ks(r),{onClose:b}=h;return g.useEffect(()=>(document.addEventListener(nd,b),()=>document.removeEventListener(nd,b)),[b]),g.useEffect(()=>{if(h.trigger){const v=C=>{C.target?.contains(h.trigger)&&b()};return window.addEventListener("scroll",v,{capture:!0}),()=>window.removeEventListener("scroll",v,{capture:!0})}},[h.trigger,b]),x.jsx(Rs,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:v=>v.preventDefault(),onDismiss:b,children:x.jsxs(Ed,{"data-state":h.stateAttribute,...m,...p,ref:i,style:{...p.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[x.jsx(PM,{children:l}),x.jsx(IM,{scope:r,isInside:!0,children:x.jsx(FO,{id:h.contentId,role:"tooltip",children:s||l})})]})})});Cb.displayName=Qi;var Eb="TooltipArrow",wb=g.forwardRef((n,i)=>{const{__scopeTooltip:r,...l}=n,s=Ks(r);return zM(Eb,r).isInside?null:x.jsx(wd,{...s,...l,ref:i})});wb.displayName=Eb;function HM(n,i){const r=Math.abs(i.top-n.y),l=Math.abs(i.bottom-n.y),s=Math.abs(i.right-n.x),u=Math.abs(i.left-n.x);switch(Math.min(r,l,s,u)){case u:return"left";case s:return"right";case r:return"top";case l:return"bottom";default:throw new Error("unreachable")}}function UM(n,i,r=5){const l=[];switch(i){case"top":l.push({x:n.x-r,y:n.y+r},{x:n.x+r,y:n.y+r});break;case"bottom":l.push({x:n.x-r,y:n.y-r},{x:n.x+r,y:n.y-r});break;case"left":l.push({x:n.x+r,y:n.y-r},{x:n.x+r,y:n.y+r});break;case"right":l.push({x:n.x-r,y:n.y-r},{x:n.x-r,y:n.y+r});break}return l}function BM(n){const{top:i,right:r,bottom:l,left:s}=n;return[{x:s,y:i},{x:r,y:i},{x:r,y:l},{x:s,y:l}]}function GM(n,i){const{x:r,y:l}=n;let s=!1;for(let u=0,d=i.length-1;u<i.length;d=u++){const p=i[u],h=i[d],m=p.x,b=p.y,v=h.x,C=h.y;b>l!=C>l&&r<(v-m)*(l-b)/(C-b)+m&&(s=!s)}return s}function VM(n){const i=n.slice();return i.sort((r,l)=>r.x<l.x?-1:r.x>l.x?1:r.y<l.y?-1:r.y>l.y?1:0),FM(i)}function FM(n){if(n.length<=1)return n.slice();const i=[];for(let l=0;l<n.length;l++){const s=n[l];for(;i.length>=2;){const u=i[i.length-1],d=i[i.length-2];if((u.x-d.x)*(s.y-d.y)>=(u.y-d.y)*(s.x-d.x))i.pop();else break}i.push(s)}i.pop();const r=[];for(let l=n.length-1;l>=0;l--){const s=n[l];for(;r.length>=2;){const u=r[r.length-1],d=r[r.length-2];if((u.x-d.x)*(s.y-d.y)>=(u.y-d.y)*(s.x-d.x))r.pop();else break}r.push(s)}return r.pop(),i.length===1&&r.length===1&&i[0].x===r[0].x&&i[0].y===r[0].y?i:i.concat(r)}var KM=yb,YM=xb,qM=bb,$M=Sb,XM=Cb,QM=wb;function _b({delayDuration:n=0,...i}){return x.jsx(KM,{"data-slot":"tooltip-provider",delayDuration:n,...i})}function vy({...n}){return x.jsx(_b,{children:x.jsx(YM,{"data-slot":"tooltip",...n})})}function yy({...n}){return x.jsx(qM,{"data-slot":"tooltip-trigger",...n})}function xy({className:n,sideOffset:i=0,children:r,...l}){return x.jsx($M,{children:x.jsxs(XM,{"data-slot":"tooltip-content",sideOffset:i,className:ht("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",n),...l,children:[r,x.jsx(QM,{className:"bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"})]})})}function ZM(){const{t:n,i18n:i}=er(),r=i.language,[l,s]=g.useState(""),[u,d]=g.useState("all"),[p,h]=g.useState("card"),[m,b]=g.useState("newest"),v=Us(),C=[{value:"newest",label:n("notes.newest")},{value:"oldest",label:n("notes.oldest")},{value:"title",label:n("notes.title")},{value:"updated",label:n("notes.recentlyUpdated")}],E=g.useMemo(()=>{let w=v.filter(T=>{const _=T[r].title.toLowerCase().includes(l.toLowerCase())||T[r].summary.toLowerCase().includes(l.toLowerCase())||T.tags.some(M=>M.toLowerCase().includes(l.toLowerCase())),N=u==="all"||T.category===u;return _&&N});return w=[...w].sort((T,_)=>{switch(m){case"newest":return new Date(_.createdAt).getTime()-new Date(T.createdAt).getTime();case"oldest":return new Date(T.createdAt).getTime()-new Date(_.createdAt).getTime();case"title":return T[r].title.localeCompare(_[r].title,r);case"updated":return new Date(_.updatedAt).getTime()-new Date(T.updatedAt).getTime();default:return 0}}),w},[v,l,u,m,r]);return x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[x.jsxs("div",{className:"mb-8",children:[x.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-slate-800 mb-4",children:n("notes.title")}),x.jsxs("div",{className:"flex flex-col lg:flex-row gap-4",children:[x.jsxs("div",{className:"relative flex-1",children:[x.jsx(zN,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"}),x.jsx(kO,{placeholder:n("notes.search"),value:l,onChange:w=>s(w.target.value),className:"pl-10"})]}),x.jsxs(py,{value:u,onValueChange:d,children:[x.jsx(my,{className:"w-full lg:w-48",children:x.jsx(hy,{placeholder:n("notes.filterByCategory")})}),x.jsxs(gy,{children:[x.jsx(jf,{value:"all",children:n("notes.allCategories")}),ti.map(w=>x.jsx(jf,{value:w.slug,children:w[r].name},w.id))]})]}),x.jsxs(py,{value:m,onValueChange:w=>b(w),children:[x.jsxs(my,{className:"w-full lg:w-44",children:[x.jsx(nN,{className:"w-4 h-4 mr-2"}),x.jsx(hy,{placeholder:n("notes.sortBy")})]}),x.jsx(gy,{children:C.map(w=>x.jsx(jf,{value:w.value,children:w.label},w.value))})]}),x.jsx(_b,{children:x.jsxs("div",{className:"flex items-center gap-1 border rounded-lg p-1 bg-white",children:[x.jsxs(vy,{children:[x.jsx(yy,{asChild:!0,children:x.jsx(dt,{variant:p==="card"?"default":"ghost",size:"icon",className:"h-9 w-9",onClick:()=>h("card"),children:x.jsx(_N,{className:"w-4 h-4"})})}),x.jsx(xy,{children:x.jsx("p",{children:n("notes.cardView")})})]}),x.jsxs(vy,{children:[x.jsx(yy,{asChild:!0,children:x.jsx(dt,{variant:p==="list"?"default":"ghost",size:"icon",className:"h-9 w-9",onClick:()=>h("list"),children:x.jsx(AN,{className:"w-4 h-4"})})}),x.jsx(xy,{children:x.jsx("p",{children:n("notes.listView")})})]})]})})]}),x.jsxs("div",{className:"mt-4 text-sm text-slate-500",children:[E.length," ",r==="zh"?"篇笔记":"notes"]})]}),E.length===0?x.jsx("div",{className:"text-center py-16",children:x.jsx("p",{className:"text-slate-400 text-lg",children:n("notes.noNotes")})}):x.jsx("div",{className:p==="card"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6":"flex flex-col gap-4",children:E.map(w=>p==="card"?x.jsx(WM,{note:w,lang:r},w.id):x.jsx(JM,{note:w,lang:r},w.id))})]})}function WM({note:n,lang:i}){const r=ti.find(l=>l.slug===n.category);return x.jsx(Ge,{to:`/notes/${n.slug}`,children:x.jsx(va,{className:"h-full hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1",children:x.jsxs(ya,{className:"p-6",children:[x.jsx("div",{className:"flex items-center gap-2 mb-3",children:x.jsx(Hs,{className:"bg-indigo-100 text-indigo-700 hover:bg-indigo-100",children:r?.[i].name})}),x.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-3 line-clamp-2",children:n[i].title}),x.jsx("p",{className:"text-sm text-slate-500 mb-4 line-clamp-3",children:n[i].summary}),x.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-slate-100",children:[x.jsx("div",{className:"flex items-center gap-4 text-xs text-slate-400",children:x.jsxs("span",{className:"flex items-center gap-1",children:[x.jsx(zs,{className:"w-3 h-3"}),n.createdAt]})}),x.jsx("div",{className:"flex gap-1",children:n.tags.slice(0,2).map(l=>x.jsxs("span",{className:"text-xs text-slate-400 flex items-center gap-0.5",children:[x.jsx(Fd,{className:"w-3 h-3"}),l]},l))})]})]})})})}function JM({note:n,lang:i}){const r=ti.find(l=>l.slug===n.category);return x.jsx(Ge,{to:`/notes/${n.slug}`,children:x.jsx(va,{className:"hover:shadow-md transition-all cursor-pointer group",children:x.jsx(ya,{className:"p-4",children:x.jsxs("div",{className:"flex items-center gap-4",children:[x.jsx("div",{className:"flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center",children:x.jsx("span",{className:"text-xs font-medium text-indigo-600",children:r?.[i].name.slice(0,2)})}),x.jsxs("div",{className:"flex-1 min-w-0",children:[x.jsx("h3",{className:"text-base font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors",children:n[i].title}),x.jsx("p",{className:"text-sm text-slate-500 line-clamp-1 mt-1",children:n[i].summary})]}),x.jsxs("div",{className:"hidden sm:flex flex-col items-end gap-1 text-xs text-slate-400",children:[x.jsxs("span",{className:"flex items-center gap-1",children:[x.jsx(zs,{className:"w-3 h-3"}),n.createdAt]}),x.jsxs("span",{className:"flex items-center gap-1",children:[x.jsx(zx,{className:"w-3 h-3"}),n.updatedAt]})]}),x.jsx("div",{className:"hidden md:flex flex-wrap gap-1 max-w-[150px] justify-end",children:n.tags.map(l=>x.jsx(Hs,{variant:"outline",className:"text-xs",children:l},l))}),x.jsx(qa,{className:"w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-colors"})]})})})})}function eD({content:n}){const i=n.split(`
`),r=[];let l=!1,s="";return i.forEach((u,d)=>{if(u.startsWith("```")){l?(r.push(x.jsx("pre",{className:"bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto my-4",children:x.jsx("code",{className:"text-sm font-mono",children:s.trim()})},`code-${d}`)),s="",l=!1):l=!0;return}if(l){s+=u+`
`;return}if(u.startsWith("# ")){r.push(x.jsx("h1",{className:"text-3xl font-bold text-slate-800 mt-8 mb-4",children:Fi(u.slice(2))},d));return}if(u.startsWith("## ")){r.push(x.jsx("h2",{className:"text-2xl font-semibold text-slate-800 mt-6 mb-3",children:Fi(u.slice(3))},d));return}if(u.startsWith("### ")){r.push(x.jsx("h3",{className:"text-xl font-semibold text-slate-800 mt-5 mb-2",children:Fi(u.slice(4))},d));return}if(u.startsWith("- ")||u.startsWith("* ")){r.push(x.jsx("li",{className:"ml-6 text-slate-700 leading-relaxed list-disc",children:Fi(u.slice(2))},d));return}const p=u.match(/^(\d+)\.\s(.+)$/);if(p){r.push(x.jsx("li",{className:"ml-6 text-slate-700 leading-relaxed list-decimal",children:Fi(p[2])},d));return}const h=u.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);if(h){const m=h[1],b=h[2];r.push(x.jsx("img",{src:b,alt:m,className:"w-full rounded-lg my-6 shadow-md",loading:"lazy"},`img-${d}`));return}if(u.trim()===""){r.push(x.jsx("div",{className:"h-4"},d));return}r.push(x.jsx("p",{className:"text-slate-700 leading-relaxed mb-4",children:Fi(u)},d))}),x.jsx(x.Fragment,{children:r})}function Fi(n){const i=[];let r=0;const l=/(\*\*|\*|`)(.+?)\1/g;let s;for(;(s=l.exec(n))!==null;){s.index>r&&i.push(n.slice(r,s.index));const u=s[1],d=s[2];u==="**"?i.push(x.jsx("strong",{className:"font-semibold text-slate-800",children:d},s.index)):u==="*"?i.push(x.jsx("em",{className:"italic",children:d},s.index)):u==="`"&&i.push(x.jsx("code",{className:"bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono",children:d},s.index)),r=s.index+s[0].length}return r<n.length&&i.push(n.slice(r)),x.jsx(x.Fragment,{children:i})}function tD(){const{slug:n}=Ly(),{t:i,i18n:r}=er(),l=r.language,s=n?OO(n):void 0;if(!s||s.status!=="published")return x.jsx(zy,{to:"/notes",replace:!0});const u=ti.find(p=>p.slug===s.category),d=Us().filter(p=>p.category===s.category&&p.id!==s.id).slice(0,3);return x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[x.jsxs("nav",{className:"flex items-center gap-2 text-sm text-slate-500 mb-6",children:[x.jsx(Ge,{to:"/",className:"hover:text-indigo-600",children:i("nav.home")}),x.jsx(qa,{className:"w-4 h-4"}),x.jsx(Ge,{to:"/notes",className:"hover:text-indigo-600",children:i("nav.notes")}),x.jsx(qa,{className:"w-4 h-4"}),x.jsx("span",{className:"text-slate-800",children:s[l].title})]}),x.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[x.jsx("div",{className:"lg:col-span-3",children:x.jsx(va,{children:x.jsxs(ya,{className:"p-8",children:[x.jsxs("div",{className:"mb-8",children:[x.jsx(Ge,{to:`/category/${s.category}`,children:x.jsxs(Hs,{className:"mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200",children:[x.jsx(Px,{className:"w-3 h-3 mr-1"}),u?.[l].name]})}),x.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-slate-800 mb-4",children:s[l].title}),x.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-sm text-slate-500",children:[x.jsxs("span",{className:"flex items-center gap-1",children:[x.jsx(zs,{className:"w-4 h-4"}),i("notes.publishedOn")," ",s.createdAt]}),x.jsxs("span",{className:"flex items-center gap-1",children:[x.jsx(zx,{className:"w-4 h-4"}),i("notes.updatedOn")," ",s.updatedAt]})]}),x.jsx("div",{className:"flex flex-wrap gap-2 mt-4",children:s.tags.map(p=>x.jsxs("span",{className:"inline-flex items-center gap-1 text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded",children:[x.jsx(Fd,{className:"w-3 h-3"}),p]},p))})]}),x.jsx("div",{className:"prose prose-slate max-w-none",children:x.jsx(eD,{content:s[l].content||""})}),x.jsx("div",{className:"mt-12 pt-8 border-t border-slate-100",children:x.jsx(Ge,{to:"/notes",children:x.jsxs(dt,{variant:"outline",children:[x.jsx(Ix,{className:"w-4 h-4 mr-2"}),i("note.backToList")]})})})]})})}),x.jsx("div",{className:"lg:col-span-1",children:x.jsxs("div",{className:"sticky top-24 space-y-6",children:[d.length>0&&x.jsx(va,{children:x.jsxs(ya,{className:"p-4",children:[x.jsx("h3",{className:"font-semibold text-slate-800 mb-4",children:i("note.relatedNotes")}),x.jsx("div",{className:"space-y-3",children:d.map(p=>x.jsxs(Ge,{to:`/notes/${p.slug}`,className:"block p-3 rounded-lg hover:bg-slate-50 transition-colors",children:[x.jsx("p",{className:"text-sm font-medium text-slate-700 line-clamp-2",children:p[l].title}),x.jsx("p",{className:"text-xs text-slate-400 mt-1",children:p.createdAt})]},p.id))})]})}),x.jsx(va,{children:x.jsxs(ya,{className:"p-4",children:[x.jsx("h3",{className:"font-semibold text-slate-800 mb-2",children:u?.[l].name}),x.jsx("p",{className:"text-sm text-slate-500",children:u?.[l].description}),x.jsx(Ge,{to:`/category/${s.category}`,children:x.jsxs(dt,{variant:"ghost",size:"sm",className:"mt-3 text-indigo-600",children:[i("categories.viewNotes"),x.jsx(qa,{className:"w-4 h-4 ml-1"})]})})]})})]})})]})]})}const nD={mcu:Ps,mpu:xo,fpga:Bd,rtos:Yd,"embedded-linux":Kd,firmware:Ud,protocols:Gd,network:qd,tools:bo,"hardware-design":Pd,automotive:Id,iot:Vd,industrial:Hd,"embedded-c":yo,algorithms:kd,frontend:yo,backend:xo,devops:bo};function aD(){const{slug:n}=Ly(),{t:i,i18n:r}=er(),l=r.language,s=n?WN(n):void 0;if(!s)return x.jsx(zy,{to:"/notes",replace:!0});const u=MO(n),d=nD[s.slug]||Px;return x.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[x.jsxs("nav",{className:"flex items-center gap-2 text-sm text-slate-500 mb-6",children:[x.jsx(Ge,{to:"/",className:"hover:text-indigo-600",children:i("nav.home")}),x.jsx(qa,{className:"w-4 h-4"}),x.jsx(Ge,{to:"/notes",className:"hover:text-indigo-600",children:i("nav.notes")}),x.jsx(qa,{className:"w-4 h-4"}),x.jsx("span",{className:"text-slate-800",children:s[l].name})]}),x.jsxs("div",{className:"mb-8",children:[x.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[x.jsx("div",{className:"w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center",children:x.jsx(d,{className:"w-7 h-7 text-indigo-500"})}),x.jsxs("div",{children:[x.jsx("h1",{className:"text-3xl font-bold text-slate-800",children:s[l].name}),x.jsx("p",{className:"text-slate-500 mt-1",children:s[l].description})]})]}),x.jsx("div",{className:"flex items-center gap-4 text-sm text-slate-500",children:x.jsxs("span",{className:"flex items-center gap-1",children:[x.jsx(Xi,{className:"w-4 h-4"}),i("categories.noteCount",{count:u.length})]})})]}),u.length===0?x.jsx("div",{className:"text-center py-16",children:x.jsx("p",{className:"text-slate-400 text-lg",children:i("notes.noNotes")})}):x.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:u.map(p=>x.jsx(iD,{note:p,lang:l},p.id))}),x.jsx("div",{className:"mt-12",children:x.jsx(Ge,{to:"/notes",children:x.jsxs(dt,{variant:"outline",children:[x.jsx(Ix,{className:"w-4 h-4 mr-2"}),i("note.backToList")]})})})]})}function iD({note:n,lang:i}){return x.jsx(Ge,{to:`/notes/${n.slug}`,children:x.jsx(va,{className:"h-full hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1",children:x.jsxs(ya,{className:"p-6",children:[x.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-3 line-clamp-2",children:n[i].title}),x.jsx("p",{className:"text-sm text-slate-500 mb-4 line-clamp-3",children:n[i].summary}),x.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-slate-100",children:[x.jsx("div",{className:"flex items-center gap-4 text-xs text-slate-400",children:x.jsxs("span",{className:"flex items-center gap-1",children:[x.jsx(zs,{className:"w-3 h-3"}),n.createdAt]})}),x.jsx("div",{className:"flex gap-1",children:n.tags.slice(0,2).map(r=>x.jsxs("span",{className:"text-xs text-slate-400 flex items-center gap-0.5",children:[x.jsx(Fd,{className:"w-3 h-3"}),r]},r))})]})]})})})}function rD(){return x.jsx(TE,{i18n:gt,children:x.jsx(wT,{children:x.jsx(iO,{children:x.jsxs(tT,{children:[x.jsx(ro,{path:"/",element:x.jsx(LO,{})}),x.jsx(ro,{path:"/notes",element:x.jsx(ZM,{})}),x.jsx(ro,{path:"/notes/:slug",element:x.jsx(tD,{})}),x.jsx(ro,{path:"/category/:slug",element:x.jsx(aD,{})})]})})})})}iC.createRoot(document.getElementById("root")).render(x.jsx(g.StrictMode,{children:x.jsx(rD,{})}));
