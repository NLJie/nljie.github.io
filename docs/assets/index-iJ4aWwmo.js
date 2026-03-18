function T1(a,l){for(var r=0;r<l.length;r++){const o=l[r];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in a)){const u=Object.getOwnPropertyDescriptor(o,s);u&&Object.defineProperty(a,s,u.get?u:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(s){if(s.ep)return;s.ep=!0;const u=r(s);fetch(s.href,u)}})();function Cy(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Vu={exports:{}},qi={};var tg;function R1(){if(tg)return qi;tg=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function r(o,s,u){var d=null;if(u!==void 0&&(d=""+u),s.key!==void 0&&(d=""+s.key),"key"in s){u={};for(var h in s)h!=="key"&&(u[h]=s[h])}else u=s;return s=u.ref,{$$typeof:a,type:o,key:d,ref:s!==void 0?s:null,props:u}}return qi.Fragment=l,qi.jsx=r,qi.jsxs=r,qi}var ng;function A1(){return ng||(ng=1,Vu.exports=R1()),Vu.exports}var b=A1(),Pu={exports:{}},ye={};var ag;function N1(){if(ag)return ye;ag=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),w=Symbol.iterator;function C(N){return N===null||typeof N!="object"?null:(N=w&&N[w]||N["@@iterator"],typeof N=="function"?N:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function _(N,q,F){this.props=N,this.context=q,this.refs=T,this.updater=F||R}_.prototype.isReactComponent={},_.prototype.setState=function(N,q){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,q,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function M(){}M.prototype=_.prototype;function z(N,q,F){this.props=N,this.context=q,this.refs=T,this.updater=F||R}var V=z.prototype=new M;V.constructor=z,E(V,_.prototype),V.isPureReactComponent=!0;var G=Array.isArray;function Z(){}var P={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function W(N,q,F){var J=F.ref;return{$$typeof:a,type:N,key:q,ref:J!==void 0?J:null,props:F}}function ee(N,q){return W(N.type,q,N.props)}function ne(N){return typeof N=="object"&&N!==null&&N.$$typeof===a}function te(N){var q={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(F){return q[F]})}var oe=/\/+/g;function re(N,q){return typeof N=="object"&&N!==null&&N.key!=null?te(""+N.key):q.toString(36)}function ue(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(Z,Z):(N.status="pending",N.then(function(q){N.status==="pending"&&(N.status="fulfilled",N.value=q)},function(q){N.status==="pending"&&(N.status="rejected",N.reason=q)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function j(N,q,F,J,de){var me=typeof N;(me==="undefined"||me==="boolean")&&(N=null);var Q=!1;if(N===null)Q=!0;else switch(me){case"bigint":case"string":case"number":Q=!0;break;case"object":switch(N.$$typeof){case a:case l:Q=!0;break;case x:return Q=N._init,j(Q(N._payload),q,F,J,de)}}if(Q)return de=de(N),Q=J===""?"."+re(N,0):J,G(de)?(F="",Q!=null&&(F=Q.replace(oe,"$&/")+"/"),j(de,q,F,"",function(Te){return Te})):de!=null&&(ne(de)&&(de=ee(de,F+(de.key==null||N&&N.key===de.key?"":(""+de.key).replace(oe,"$&/")+"/")+Q)),q.push(de)),1;Q=0;var be=J===""?".":J+":";if(G(N))for(var ve=0;ve<N.length;ve++)J=N[ve],me=be+re(J,ve),Q+=j(J,q,F,me,de);else if(ve=C(N),typeof ve=="function")for(N=ve.call(N),ve=0;!(J=N.next()).done;)J=J.value,me=be+re(J,ve++),Q+=j(J,q,F,me,de);else if(me==="object"){if(typeof N.then=="function")return j(ue(N),q,F,J,de);throw q=String(N),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return Q}function K(N,q,F){if(N==null)return N;var J=[],de=0;return j(N,J,"","",function(me){return q.call(F,me,de++)}),J}function H(N){if(N._status===-1){var q=N._result;q=q(),q.then(function(F){(N._status===0||N._status===-1)&&(N._status=1,N._result=F)},function(F){(N._status===0||N._status===-1)&&(N._status=2,N._result=F)}),N._status===-1&&(N._status=0,N._result=q)}if(N._status===1)return N._result.default;throw N._result}var se=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},pe={map:K,forEach:function(N,q,F){K(N,function(){q.apply(this,arguments)},F)},count:function(N){var q=0;return K(N,function(){q++}),q},toArray:function(N){return K(N,function(q){return q})||[]},only:function(N){if(!ne(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ye.Activity=y,ye.Children=pe,ye.Component=_,ye.Fragment=r,ye.Profiler=s,ye.PureComponent=z,ye.StrictMode=o,ye.Suspense=p,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ye.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},ye.cache=function(N){return function(){return N.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(N,q,F){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var J=E({},N.props),de=N.key;if(q!=null)for(me in q.key!==void 0&&(de=""+q.key),q)!$.call(q,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&q.ref===void 0||(J[me]=q[me]);var me=arguments.length-2;if(me===1)J.children=F;else if(1<me){for(var Q=Array(me),be=0;be<me;be++)Q[be]=arguments[be+2];J.children=Q}return W(N.type,de,J)},ye.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},ye.createElement=function(N,q,F){var J,de={},me=null;if(q!=null)for(J in q.key!==void 0&&(me=""+q.key),q)$.call(q,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(de[J]=q[J]);var Q=arguments.length-2;if(Q===1)de.children=F;else if(1<Q){for(var be=Array(Q),ve=0;ve<Q;ve++)be[ve]=arguments[ve+2];de.children=be}if(N&&N.defaultProps)for(J in Q=N.defaultProps,Q)de[J]===void 0&&(de[J]=Q[J]);return W(N,me,de)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(N){return{$$typeof:h,render:N}},ye.isValidElement=ne,ye.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:H}},ye.memo=function(N,q){return{$$typeof:m,type:N,compare:q===void 0?null:q}},ye.startTransition=function(N){var q=P.T,F={};P.T=F;try{var J=N(),de=P.S;de!==null&&de(F,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(Z,se)}catch(me){se(me)}finally{q!==null&&F.types!==null&&(q.types=F.types),P.T=q}},ye.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ye.use=function(N){return P.H.use(N)},ye.useActionState=function(N,q,F){return P.H.useActionState(N,q,F)},ye.useCallback=function(N,q){return P.H.useCallback(N,q)},ye.useContext=function(N){return P.H.useContext(N)},ye.useDebugValue=function(){},ye.useDeferredValue=function(N,q){return P.H.useDeferredValue(N,q)},ye.useEffect=function(N,q){return P.H.useEffect(N,q)},ye.useEffectEvent=function(N){return P.H.useEffectEvent(N)},ye.useId=function(){return P.H.useId()},ye.useImperativeHandle=function(N,q,F){return P.H.useImperativeHandle(N,q,F)},ye.useInsertionEffect=function(N,q){return P.H.useInsertionEffect(N,q)},ye.useLayoutEffect=function(N,q){return P.H.useLayoutEffect(N,q)},ye.useMemo=function(N,q){return P.H.useMemo(N,q)},ye.useOptimistic=function(N,q){return P.H.useOptimistic(N,q)},ye.useReducer=function(N,q,F){return P.H.useReducer(N,q,F)},ye.useRef=function(N){return P.H.useRef(N)},ye.useState=function(N){return P.H.useState(N)},ye.useSyncExternalStore=function(N,q,F){return P.H.useSyncExternalStore(N,q,F)},ye.useTransition=function(){return P.H.useTransition()},ye.version="19.2.3",ye}var lg;function ls(){return lg||(lg=1,Pu.exports=N1()),Pu.exports}var v=ls();const fa=Cy(v),jf=T1({__proto__:null,default:fa},[v]);var Gu={exports:{}},Yi={},qu={exports:{}},Yu={};var ig;function O1(){return ig||(ig=1,(function(a){function l(j,K){var H=j.length;j.push(K);e:for(;0<H;){var se=H-1>>>1,pe=j[se];if(0<s(pe,K))j[se]=K,j[H]=pe,H=se;else break e}}function r(j){return j.length===0?null:j[0]}function o(j){if(j.length===0)return null;var K=j[0],H=j.pop();if(H!==K){j[0]=H;e:for(var se=0,pe=j.length,N=pe>>>1;se<N;){var q=2*(se+1)-1,F=j[q],J=q+1,de=j[J];if(0>s(F,H))J<pe&&0>s(de,F)?(j[se]=de,j[J]=H,se=J):(j[se]=F,j[q]=H,se=q);else if(J<pe&&0>s(de,H))j[se]=de,j[J]=H,se=J;else break e}}return K}function s(j,K){var H=j.sortIndex-K.sortIndex;return H!==0?H:j.id-K.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();a.unstable_now=function(){return d.now()-h}}var p=[],m=[],x=1,y=null,w=3,C=!1,R=!1,E=!1,T=!1,_=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function V(j){for(var K=r(m);K!==null;){if(K.callback===null)o(m);else if(K.startTime<=j)o(m),K.sortIndex=K.expirationTime,l(p,K);else break;K=r(m)}}function G(j){if(E=!1,V(j),!R)if(r(p)!==null)R=!0,Z||(Z=!0,te());else{var K=r(m);K!==null&&ue(G,K.startTime-j)}}var Z=!1,P=-1,$=5,W=-1;function ee(){return T?!0:!(a.unstable_now()-W<$)}function ne(){if(T=!1,Z){var j=a.unstable_now();W=j;var K=!0;try{e:{R=!1,E&&(E=!1,M(P),P=-1),C=!0;var H=w;try{t:{for(V(j),y=r(p);y!==null&&!(y.expirationTime>j&&ee());){var se=y.callback;if(typeof se=="function"){y.callback=null,w=y.priorityLevel;var pe=se(y.expirationTime<=j);if(j=a.unstable_now(),typeof pe=="function"){y.callback=pe,V(j),K=!0;break t}y===r(p)&&o(p),V(j)}else o(p);y=r(p)}if(y!==null)K=!0;else{var N=r(m);N!==null&&ue(G,N.startTime-j),K=!1}}break e}finally{y=null,w=H,C=!1}K=void 0}}finally{K?te():Z=!1}}}var te;if(typeof z=="function")te=function(){z(ne)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,re=oe.port2;oe.port1.onmessage=ne,te=function(){re.postMessage(null)}}else te=function(){_(ne,0)};function ue(j,K){P=_(function(){j(a.unstable_now())},K)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(j){j.callback=null},a.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<j?Math.floor(1e3/j):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_next=function(j){switch(w){case 1:case 2:case 3:var K=3;break;default:K=w}var H=w;w=K;try{return j()}finally{w=H}},a.unstable_requestPaint=function(){T=!0},a.unstable_runWithPriority=function(j,K){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var H=w;w=j;try{return K()}finally{w=H}},a.unstable_scheduleCallback=function(j,K,H){var se=a.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?se+H:se):H=se,j){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=H+pe,j={id:x++,callback:K,priorityLevel:j,startTime:H,expirationTime:pe,sortIndex:-1},H>se?(j.sortIndex=H,l(m,j),r(p)===null&&j===r(m)&&(E?(M(P),P=-1):E=!0,ue(G,H-se))):(j.sortIndex=pe,l(p,j),R||C||(R=!0,Z||(Z=!0,te()))),j},a.unstable_shouldYield=ee,a.unstable_wrapCallback=function(j){var K=w;return function(){var H=w;w=K;try{return j.apply(this,arguments)}finally{w=H}}}})(Yu)),Yu}var rg;function M1(){return rg||(rg=1,qu.exports=O1()),qu.exports}var Ku={exports:{}},dt={};var og;function _1(){if(og)return dt;og=1;var a=ls();function l(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(l(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(p,m,x){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:y==null?null:""+y,children:p,containerInfo:m,implementation:x}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,dt.createPortal=function(p,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(l(299));return u(p,m,null,x)},dt.flushSync=function(p){var m=d.T,x=o.p;try{if(d.T=null,o.p=2,p)return p()}finally{d.T=m,o.p=x,o.d.f()}},dt.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(p,m))},dt.prefetchDNS=function(p){typeof p=="string"&&o.d.D(p)},dt.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var x=m.as,y=h(x,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,C=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?o.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:w,fetchPriority:C}):x==="script"&&o.d.X(p,{crossOrigin:y,integrity:w,fetchPriority:C,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},dt.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=h(m.as,m.crossOrigin);o.d.M(p,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(p)},dt.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,y=h(x,m.crossOrigin);o.d.L(p,x,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},dt.preloadModule=function(p,m){if(typeof p=="string")if(m){var x=h(m.as,m.crossOrigin);o.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(p)},dt.requestFormReset=function(p){o.d.r(p)},dt.unstable_batchedUpdates=function(p,m){return p(m)},dt.useFormState=function(p,m,x){return d.H.useFormState(p,m,x)},dt.useFormStatus=function(){return d.H.useHostTransitionStatus()},dt.version="19.2.3",dt}var sg;function Ty(){if(sg)return Ku.exports;sg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Ku.exports=_1(),Ku.exports}var cg;function j1(){if(cg)return Yi;cg=1;var a=M1(),l=ls(),r=Ty();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var c=n.return;if(c===null)break;var f=c.alternate;if(f===null){if(i=c.return,i!==null){n=i;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===n)return p(c),e;if(f===i)return p(c),t;f=f.sibling}throw Error(o(188))}if(n.return!==i.return)n=c,i=f;else{for(var g=!1,S=c.child;S;){if(S===n){g=!0,n=c,i=f;break}if(S===i){g=!0,i=c,n=f;break}S=S.sibling}if(!g){for(S=f.child;S;){if(S===n){g=!0,n=f,i=c;break}if(S===i){g=!0,i=f,n=c;break}S=S.sibling}if(!g)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,w=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),z=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),W=Symbol.for("react.activity"),ee=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Symbol.for("react.client.reference");function re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case _:return"Profiler";case T:return"StrictMode";case G:return"Suspense";case Z:return"SuspenseList";case W:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case z:return e.displayName||"Context";case M:return(e._context.displayName||"Context")+".Consumer";case V:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return t=e.displayName||null,t!==null?t:re(e.type)||"Memo";case $:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var ue=Array.isArray,j=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},se=[],pe=-1;function N(e){return{current:e}}function q(e){0>pe||(e.current=se[pe],se[pe]=null,pe--)}function F(e,t){pe++,se[pe]=e.current,e.current=t}var J=N(null),de=N(null),me=N(null),Q=N(null);function be(e,t){switch(F(me,t),F(de,e),F(J,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Cm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Cm(t),e=Tm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(J),F(J,e)}function ve(){q(J),q(de),q(me)}function Te(e){e.memoizedState!==null&&F(Q,e);var t=J.current,n=Tm(t,e.type);t!==n&&(F(de,e),F(J,n))}function Me(e){de.current===e&&(q(J),q(de)),Q.current===e&&(q(Q),Bi._currentValue=H)}var ze,mt;function gt(e){if(ze===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ze=t&&t[1]||"",mt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ze+e+mt}var xa=!1;function ba(e,t){if(!e||xa)return"";xa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(B){var U=B}Reflect.construct(e,[],I)}else{try{I.call()}catch(B){U=B}e.call(I.prototype)}}else{try{throw Error()}catch(B){U=B}(I=e())&&typeof I.catch=="function"&&I.catch(function(){})}}catch(B){if(B&&U&&typeof B.stack=="string")return[B.stack,U.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=i.DetermineComponentFrameRoot(),g=f[0],S=f[1];if(g&&S){var A=g.split(`
`),k=S.split(`
`);for(c=i=0;i<A.length&&!A[i].includes("DetermineComponentFrameRoot");)i++;for(;c<k.length&&!k[c].includes("DetermineComponentFrameRoot");)c++;if(i===A.length||c===k.length)for(i=A.length-1,c=k.length-1;1<=i&&0<=c&&A[i]!==k[c];)c--;for(;1<=i&&0<=c;i--,c--)if(A[i]!==k[c]){if(i!==1||c!==1)do if(i--,c--,0>c||A[i]!==k[c]){var Y=`
`+A[i].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=i&&0<=c);break}}}finally{xa=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?gt(n):""}function Ql(e,t){switch(e.tag){case 26:case 27:case 5:return gt(e.type);case 16:return gt("Lazy");case 13:return e.child!==t&&t!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return ba(e.type,!1);case 11:return ba(e.type.render,!1);case 1:return ba(e.type,!0);case 31:return gt("Activity");default:return""}}function td(e){try{var t="",n=null;do t+=Ql(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ts=Object.prototype.hasOwnProperty,Rs=a.unstable_scheduleCallback,As=a.unstable_cancelCallback,ax=a.unstable_shouldYield,lx=a.unstable_requestPaint,Tt=a.unstable_now,ix=a.unstable_getCurrentPriorityLevel,nd=a.unstable_ImmediatePriority,ad=a.unstable_UserBlockingPriority,ur=a.unstable_NormalPriority,rx=a.unstable_LowPriority,ld=a.unstable_IdlePriority,ox=a.log,sx=a.unstable_setDisableYieldValue,Zl=null,Rt=null;function Bn(e){if(typeof ox=="function"&&sx(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Zl,e)}catch{}}var At=Math.clz32?Math.clz32:fx,cx=Math.log,ux=Math.LN2;function fx(e){return e>>>=0,e===0?32:31-(cx(e)/ux|0)|0}var fr=256,dr=262144,hr=4194304;function Sa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pr(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var c=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var S=i&134217727;return S!==0?(i=S&~f,i!==0?c=Sa(i):(g&=S,g!==0?c=Sa(g):n||(n=S&~e,n!==0&&(c=Sa(n))))):(S=i&~f,S!==0?c=Sa(S):g!==0?c=Sa(g):n||(n=i&~e,n!==0&&(c=Sa(n)))),c===0?0:t!==0&&t!==c&&(t&f)===0&&(f=c&-c,n=t&-t,f>=n||f===32&&(n&4194048)!==0)?t:c}function Jl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function dx(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function id(){var e=hr;return hr<<=1,(hr&62914560)===0&&(hr=4194304),e}function Ns(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function hx(e,t,n,i,c,f){var g=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var S=e.entanglements,A=e.expirationTimes,k=e.hiddenUpdates;for(n=g&~n;0<n;){var Y=31-At(n),I=1<<Y;S[Y]=0,A[Y]=-1;var U=k[Y];if(U!==null)for(k[Y]=null,Y=0;Y<U.length;Y++){var B=U[Y];B!==null&&(B.lane&=-536870913)}n&=~I}i!==0&&rd(e,i,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~t))}function rd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-At(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function od(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-At(n),c=1<<i;c&t|e[i]&t&&(e[i]|=t),n&=~c}}function sd(e,t){var n=t&-t;return n=(n&42)!==0?1:Os(n),(n&(e.suspendedLanes|t))!==0?0:n}function Os(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ms(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function cd(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:$m(e.type))}function ud(e,t){var n=K.p;try{return K.p=e,t()}finally{K.p=n}}var Vn=Math.random().toString(36).slice(2),ot="__reactFiber$"+Vn,vt="__reactProps$"+Vn,Ia="__reactContainer$"+Vn,_s="__reactEvents$"+Vn,px="__reactListeners$"+Vn,mx="__reactHandles$"+Vn,fd="__reactResources$"+Vn,ei="__reactMarker$"+Vn;function js(e){delete e[ot],delete e[vt],delete e[_s],delete e[px],delete e[mx]}function $a(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ia]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=jm(e);e!==null;){if(n=e[ot])return n;e=jm(e)}return t}e=n,n=e.parentNode}return null}function Fa(e){if(e=e[ot]||e[Ia]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ti(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Qa(e){var t=e[fd];return t||(t=e[fd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function it(e){e[ei]=!0}var dd=new Set,hd={};function Ea(e,t){Za(e,t),Za(e+"Capture",t)}function Za(e,t){for(hd[e]=t,e=0;e<t.length;e++)dd.add(t[e])}var gx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pd={},md={};function yx(e){return Ts.call(md,e)?!0:Ts.call(pd,e)?!1:gx.test(e)?md[e]=!0:(pd[e]=!0,!1)}function mr(e,t,n){if(yx(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function gr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function yn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Ht(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vx(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,f=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(g){n=""+g,f.call(this,g)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(g){n=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ds(e){if(!e._valueTracker){var t=gd(e)?"checked":"value";e._valueTracker=vx(e,t,""+e[t])}}function yd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=gd(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function yr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xx=/[\n"\\]/g;function Bt(e){return e.replace(xx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function zs(e,t,n,i,c,f,g,S){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ht(t)):e.value!==""+Ht(t)&&(e.value=""+Ht(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?Ls(e,g,Ht(t)):n!=null?Ls(e,g,Ht(n)):i!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.name=""+Ht(S):e.removeAttribute("name")}function vd(e,t,n,i,c,f,g,S){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||n!=null){if(!(f!=="submit"&&f!=="reset"||t!=null)){Ds(e);return}n=n!=null?""+Ht(n):"",t=t!=null?""+Ht(t):n,S||t===e.value||(e.value=t),e.defaultValue=t}i=i??c,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=S?e.checked:!!i,e.defaultChecked=!!i,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Ds(e)}function Ls(e,t,n){t==="number"&&yr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ja(e,t,n,i){if(e=e.options,t){t={};for(var c=0;c<n.length;c++)t["$"+n[c]]=!0;for(n=0;n<e.length;n++)c=t.hasOwnProperty("$"+e[n].value),e[n].selected!==c&&(e[n].selected=c),c&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ht(n),t=null,c=0;c<e.length;c++){if(e[c].value===n){e[c].selected=!0,i&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function xd(e,t,n){if(t!=null&&(t=""+Ht(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ht(n):""}function bd(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(ue(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ht(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Ds(e)}function Wa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var bx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sd(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||bx.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ed(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var c in t)i=t[c],t.hasOwnProperty(c)&&n[c]!==i&&Sd(e,c,i)}else for(var f in t)t.hasOwnProperty(f)&&Sd(e,f,t[f])}function ks(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ex=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vr(e){return Ex.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function vn(){}var Us=null;function Hs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var el=null,tl=null;function wd(e){var t=Fa(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;e:switch(e=t.stateNode,t.type){case"input":if(zs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Bt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var c=i[vt]||null;if(!c)throw Error(o(90));zs(i,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&yd(i)}break e;case"textarea":xd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ja(e,!!n.multiple,t,!1)}}}var Bs=!1;function Cd(e,t,n){if(Bs)return e(t,n);Bs=!0;try{var i=e(t);return i}finally{if(Bs=!1,(el!==null||tl!==null)&&(io(),el&&(t=el,e=tl,tl=el=null,wd(t),e)))for(t=0;t<e.length;t++)wd(e[t])}}function ni(e,t){var n=e.stateNode;if(n===null)return null;var i=n[vt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vs=!1;if(xn)try{var ai={};Object.defineProperty(ai,"passive",{get:function(){Vs=!0}}),window.addEventListener("test",ai,ai),window.removeEventListener("test",ai,ai)}catch{Vs=!1}var Pn=null,Ps=null,xr=null;function Td(){if(xr)return xr;var e,t=Ps,n=t.length,i,c="value"in Pn?Pn.value:Pn.textContent,f=c.length;for(e=0;e<n&&t[e]===c[e];e++);var g=n-e;for(i=1;i<=g&&t[n-i]===c[f-i];i++);return xr=c.slice(e,1<i?1-i:void 0)}function br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function Rd(){return!1}function xt(e){function t(n,i,c,f,g){this._reactName=n,this._targetInst=c,this.type=i,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(n=e[S],this[S]=n?n(f):f[S]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Sr:Rd,this.isPropagationStopped=Rd,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Er=xt(wa),li=y({},wa,{view:0,detail:0}),wx=xt(li),Gs,qs,ii,wr=y({},li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ks,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ii&&(ii&&e.type==="mousemove"?(Gs=e.screenX-ii.screenX,qs=e.screenY-ii.screenY):qs=Gs=0,ii=e),Gs)},movementY:function(e){return"movementY"in e?e.movementY:qs}}),Ad=xt(wr),Cx=y({},wr,{dataTransfer:0}),Tx=xt(Cx),Rx=y({},li,{relatedTarget:0}),Ys=xt(Rx),Ax=y({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Nx=xt(Ax),Ox=y({},wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mx=xt(Ox),_x=y({},wa,{data:0}),Nd=xt(_x),jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zx[e])?!!t[e]:!1}function Ks(){return Lx}var kx=y({},li,{key:function(e){if(e.key){var t=jx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ks,charCode:function(e){return e.type==="keypress"?br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ux=xt(kx),Hx=y({},wr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Od=xt(Hx),Bx=y({},li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ks}),Vx=xt(Bx),Px=y({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gx=xt(Px),qx=y({},wr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=xt(qx),Kx=y({},wa,{newState:0,oldState:0}),Xx=xt(Kx),Ix=[9,13,27,32],Xs=xn&&"CompositionEvent"in window,ri=null;xn&&"documentMode"in document&&(ri=document.documentMode);var $x=xn&&"TextEvent"in window&&!ri,Md=xn&&(!Xs||ri&&8<ri&&11>=ri),_d=" ",jd=!1;function Dd(e,t){switch(e){case"keyup":return Ix.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nl=!1;function Fx(e,t){switch(e){case"compositionend":return zd(t);case"keypress":return t.which!==32?null:(jd=!0,_d);case"textInput":return e=t.data,e===_d&&jd?null:e;default:return null}}function Qx(e,t){if(nl)return e==="compositionend"||!Xs&&Dd(e,t)?(e=Td(),xr=Ps=Pn=null,nl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Md&&t.locale!=="ko"?null:t.data;default:return null}}var Zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zx[e.type]:t==="textarea"}function kd(e,t,n,i){el?tl?tl.push(i):tl=[i]:el=i,t=ho(t,"onChange"),0<t.length&&(n=new Er("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var oi=null,si=null;function Jx(e){vm(e,0)}function Cr(e){var t=ti(e);if(yd(t))return e}function Ud(e,t){if(e==="change")return t}var Hd=!1;if(xn){var Is;if(xn){var $s="oninput"in document;if(!$s){var Bd=document.createElement("div");Bd.setAttribute("oninput","return;"),$s=typeof Bd.oninput=="function"}Is=$s}else Is=!1;Hd=Is&&(!document.documentMode||9<document.documentMode)}function Vd(){oi&&(oi.detachEvent("onpropertychange",Pd),si=oi=null)}function Pd(e){if(e.propertyName==="value"&&Cr(si)){var t=[];kd(t,si,e,Hs(e)),Cd(Jx,t)}}function Wx(e,t,n){e==="focusin"?(Vd(),oi=t,si=n,oi.attachEvent("onpropertychange",Pd)):e==="focusout"&&Vd()}function eb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cr(si)}function tb(e,t){if(e==="click")return Cr(t)}function nb(e,t){if(e==="input"||e==="change")return Cr(t)}function ab(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:ab;function ci(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var c=n[i];if(!Ts.call(t,c)||!Nt(e[c],t[c]))return!1}return!0}function Gd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qd(e,t){var n=Gd(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gd(n)}}function Yd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=yr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yr(e.document)}return t}function Fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var lb=xn&&"documentMode"in document&&11>=document.documentMode,al=null,Qs=null,ui=null,Zs=!1;function Xd(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zs||al==null||al!==yr(i)||(i=al,"selectionStart"in i&&Fs(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ui&&ci(ui,i)||(ui=i,i=ho(Qs,"onSelect"),0<i.length&&(t=new Er("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=al)))}function Ca(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ll={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},Js={},Id={};xn&&(Id=document.createElement("div").style,"AnimationEvent"in window||(delete ll.animationend.animation,delete ll.animationiteration.animation,delete ll.animationstart.animation),"TransitionEvent"in window||delete ll.transitionend.transition);function Ta(e){if(Js[e])return Js[e];if(!ll[e])return e;var t=ll[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Id)return Js[e]=t[n];return e}var $d=Ta("animationend"),Fd=Ta("animationiteration"),Qd=Ta("animationstart"),ib=Ta("transitionrun"),rb=Ta("transitionstart"),ob=Ta("transitioncancel"),Zd=Ta("transitionend"),Jd=new Map,Ws="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ws.push("scrollEnd");function Qt(e,t){Jd.set(e,t),Ea(t,[e])}var Tr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Vt=[],il=0,ec=0;function Rr(){for(var e=il,t=ec=il=0;t<e;){var n=Vt[t];Vt[t++]=null;var i=Vt[t];Vt[t++]=null;var c=Vt[t];Vt[t++]=null;var f=Vt[t];if(Vt[t++]=null,i!==null&&c!==null){var g=i.pending;g===null?c.next=c:(c.next=g.next,g.next=c),i.pending=c}f!==0&&Wd(n,c,f)}}function Ar(e,t,n,i){Vt[il++]=e,Vt[il++]=t,Vt[il++]=n,Vt[il++]=i,ec|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function tc(e,t,n,i){return Ar(e,t,n,i),Nr(e)}function Ra(e,t){return Ar(e,null,null,t),Nr(e)}function Wd(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var c=!1,f=e.return;f!==null;)f.childLanes|=n,i=f.alternate,i!==null&&(i.childLanes|=n),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&t!==null&&(c=31-At(n),e=f.hiddenUpdates,i=e[c],i===null?e[c]=[t]:i.push(t),t.lane=n|536870912),f):null}function Nr(e){if(50<ji)throw ji=0,uu=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var rl={};function sb(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,i){return new sb(e,t,n,i)}function nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function eh(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Or(e,t,n,i,c,f){var g=0;if(i=e,typeof e=="function")nc(e)&&(g=1);else if(typeof e=="string")g=h1(e,n,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case W:return e=Ot(31,n,t,c),e.elementType=W,e.lanes=f,e;case E:return Aa(n.children,c,f,t);case T:g=8,c|=24;break;case _:return e=Ot(12,n,t,c|2),e.elementType=_,e.lanes=f,e;case G:return e=Ot(13,n,t,c),e.elementType=G,e.lanes=f,e;case Z:return e=Ot(19,n,t,c),e.elementType=Z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z:g=10;break e;case M:g=9;break e;case V:g=11;break e;case P:g=14;break e;case $:g=16,i=null;break e}g=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Ot(g,n,t,c),t.elementType=e,t.type=i,t.lanes=f,t}function Aa(e,t,n,i){return e=Ot(7,e,i,t),e.lanes=n,e}function ac(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function th(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function lc(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var nh=new WeakMap;function Pt(e,t){if(typeof e=="object"&&e!==null){var n=nh.get(e);return n!==void 0?n:(t={value:e,source:t,stack:td(t)},nh.set(e,t),t)}return{value:e,source:t,stack:td(t)}}var ol=[],sl=0,Mr=null,fi=0,Gt=[],qt=0,Gn=null,ln=1,rn="";function Sn(e,t){ol[sl++]=fi,ol[sl++]=Mr,Mr=e,fi=t}function ah(e,t,n){Gt[qt++]=ln,Gt[qt++]=rn,Gt[qt++]=Gn,Gn=e;var i=ln;e=rn;var c=32-At(i)-1;i&=~(1<<c),n+=1;var f=32-At(t)+c;if(30<f){var g=c-c%5;f=(i&(1<<g)-1).toString(32),i>>=g,c-=g,ln=1<<32-At(t)+c|n<<c|i,rn=f+e}else ln=1<<f|n<<c|i,rn=e}function ic(e){e.return!==null&&(Sn(e,1),ah(e,1,0))}function rc(e){for(;e===Mr;)Mr=ol[--sl],ol[sl]=null,fi=ol[--sl],ol[sl]=null;for(;e===Gn;)Gn=Gt[--qt],Gt[qt]=null,rn=Gt[--qt],Gt[qt]=null,ln=Gt[--qt],Gt[qt]=null}function lh(e,t){Gt[qt++]=ln,Gt[qt++]=rn,Gt[qt++]=Gn,ln=t.id,rn=t.overflow,Gn=e}var st=null,Ge=null,Ne=!1,qn=null,Yt=!1,oc=Error(o(519));function Yn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw di(Pt(t,e)),oc}function ih(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[ot]=e,t[vt]=i,n){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(n=0;n<zi.length;n++)Ce(zi[n],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),vd(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),bd(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Em(t.textContent,n)?(i.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),i.onScroll!=null&&Ce("scroll",t),i.onScrollEnd!=null&&Ce("scrollend",t),i.onClick!=null&&(t.onclick=vn),t=!0):t=!1,t||Yn(e,!0)}function rh(e){for(st=e.return;st;)switch(st.tag){case 5:case 31:case 13:Yt=!1;return;case 27:case 3:Yt=!0;return;default:st=st.return}}function cl(e){if(e!==st)return!1;if(!Ne)return rh(e),Ne=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Tu(e.type,e.memoizedProps)),n=!n),n&&Ge&&Yn(e),rh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ge=_m(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ge=_m(e)}else t===27?(t=Ge,la(e.type)?(e=Mu,Mu=null,Ge=e):Ge=t):Ge=st?Xt(e.stateNode.nextSibling):null;return!0}function Na(){Ge=st=null,Ne=!1}function sc(){var e=qn;return e!==null&&(wt===null?wt=e:wt.push.apply(wt,e),qn=null),e}function di(e){qn===null?qn=[e]:qn.push(e)}var cc=N(null),Oa=null,En=null;function Kn(e,t,n){F(cc,t._currentValue),t._currentValue=n}function wn(e){e._currentValue=cc.current,q(cc)}function uc(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function fc(e,t,n,i){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;e:for(;f!==null;){var S=f;f=c;for(var A=0;A<t.length;A++)if(S.context===t[A]){f.lanes|=n,S=f.alternate,S!==null&&(S.lanes|=n),uc(f.return,n,e),i||(g=null);break e}f=S.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(o(341));g.lanes|=n,f=g.alternate,f!==null&&(f.lanes|=n),uc(g,n,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function ul(e,t,n,i){e=null;for(var c=t,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(o(387));if(g=g.memoizedProps,g!==null){var S=c.type;Nt(c.pendingProps.value,g.value)||(e!==null?e.push(S):e=[S])}}else if(c===Q.current){if(g=c.alternate,g===null)throw Error(o(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Bi):e=[Bi])}c=c.return}e!==null&&fc(t,e,n,i),t.flags|=262144}function _r(e){for(e=e.firstContext;e!==null;){if(!Nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ma(e){Oa=e,En=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ct(e){return oh(Oa,e)}function jr(e,t){return Oa===null&&Ma(e),oh(e,t)}function oh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},En===null){if(e===null)throw Error(o(308));En=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else En=En.next=t;return n}var cb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},ub=a.unstable_scheduleCallback,fb=a.unstable_NormalPriority,Je={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dc(){return{controller:new cb,data:new Map,refCount:0}}function hi(e){e.refCount--,e.refCount===0&&ub(fb,function(){e.controller.abort()})}var pi=null,hc=0,fl=0,dl=null;function db(e,t){if(pi===null){var n=pi=[];hc=0,fl=gu(),dl={status:"pending",value:void 0,then:function(i){n.push(i)}}}return hc++,t.then(sh,sh),t}function sh(){if(--hc===0&&pi!==null){dl!==null&&(dl.status="fulfilled");var e=pi;pi=null,fl=0,dl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function hb(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var c=0;c<n.length;c++)(0,n[c])(t)},function(c){for(i.status="rejected",i.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),i}var ch=j.S;j.S=function(e,t){Xp=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&db(e,t),ch!==null&&ch(e,t)};var _a=N(null);function pc(){var e=_a.current;return e!==null?e:Ve.pooledCache}function Dr(e,t){t===null?F(_a,_a.current):F(_a,t.pool)}function uh(){var e=pc();return e===null?null:{parent:Je._currentValue,pool:e}}var hl=Error(o(460)),mc=Error(o(474)),zr=Error(o(542)),Lr={then:function(){}};function fh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function dh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(vn,vn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ph(e),e;default:if(typeof t.status=="string")t.then(vn,vn);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=i}},function(i){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ph(e),e}throw Da=t,hl}}function ja(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Da=n,hl):n}}var Da=null;function hh(){if(Da===null)throw Error(o(459));var e=Da;return Da=null,e}function ph(e){if(e===hl||e===zr)throw Error(o(483))}var pl=null,mi=0;function kr(e){var t=mi;return mi+=1,pl===null&&(pl=[]),dh(pl,e,t)}function gi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ur(e,t){throw t.$$typeof===w?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function mh(e){function t(D,O){if(e){var L=D.deletions;L===null?(D.deletions=[O],D.flags|=16):L.push(O)}}function n(D,O){if(!e)return null;for(;O!==null;)t(D,O),O=O.sibling;return null}function i(D){for(var O=new Map;D!==null;)D.key!==null?O.set(D.key,D):O.set(D.index,D),D=D.sibling;return O}function c(D,O){return D=bn(D,O),D.index=0,D.sibling=null,D}function f(D,O,L){return D.index=L,e?(L=D.alternate,L!==null?(L=L.index,L<O?(D.flags|=67108866,O):L):(D.flags|=67108866,O)):(D.flags|=1048576,O)}function g(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function S(D,O,L,X){return O===null||O.tag!==6?(O=ac(L,D.mode,X),O.return=D,O):(O=c(O,L),O.return=D,O)}function A(D,O,L,X){var fe=L.type;return fe===E?Y(D,O,L.props.children,X,L.key):O!==null&&(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===$&&ja(fe)===O.type)?(O=c(O,L.props),gi(O,L),O.return=D,O):(O=Or(L.type,L.key,L.props,null,D.mode,X),gi(O,L),O.return=D,O)}function k(D,O,L,X){return O===null||O.tag!==4||O.stateNode.containerInfo!==L.containerInfo||O.stateNode.implementation!==L.implementation?(O=lc(L,D.mode,X),O.return=D,O):(O=c(O,L.children||[]),O.return=D,O)}function Y(D,O,L,X,fe){return O===null||O.tag!==7?(O=Aa(L,D.mode,X,fe),O.return=D,O):(O=c(O,L),O.return=D,O)}function I(D,O,L){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=ac(""+O,D.mode,L),O.return=D,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case C:return L=Or(O.type,O.key,O.props,null,D.mode,L),gi(L,O),L.return=D,L;case R:return O=lc(O,D.mode,L),O.return=D,O;case $:return O=ja(O),I(D,O,L)}if(ue(O)||te(O))return O=Aa(O,D.mode,L,null),O.return=D,O;if(typeof O.then=="function")return I(D,kr(O),L);if(O.$$typeof===z)return I(D,jr(D,O),L);Ur(D,O)}return null}function U(D,O,L,X){var fe=O!==null?O.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return fe!==null?null:S(D,O,""+L,X);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case C:return L.key===fe?A(D,O,L,X):null;case R:return L.key===fe?k(D,O,L,X):null;case $:return L=ja(L),U(D,O,L,X)}if(ue(L)||te(L))return fe!==null?null:Y(D,O,L,X,null);if(typeof L.then=="function")return U(D,O,kr(L),X);if(L.$$typeof===z)return U(D,O,jr(D,L),X);Ur(D,L)}return null}function B(D,O,L,X,fe){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return D=D.get(L)||null,S(O,D,""+X,fe);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case C:return D=D.get(X.key===null?L:X.key)||null,A(O,D,X,fe);case R:return D=D.get(X.key===null?L:X.key)||null,k(O,D,X,fe);case $:return X=ja(X),B(D,O,L,X,fe)}if(ue(X)||te(X))return D=D.get(L)||null,Y(O,D,X,fe,null);if(typeof X.then=="function")return B(D,O,L,kr(X),fe);if(X.$$typeof===z)return B(D,O,L,jr(O,X),fe);Ur(O,X)}return null}function ae(D,O,L,X){for(var fe=null,_e=null,ce=O,Se=O=0,Ae=null;ce!==null&&Se<L.length;Se++){ce.index>Se?(Ae=ce,ce=null):Ae=ce.sibling;var je=U(D,ce,L[Se],X);if(je===null){ce===null&&(ce=Ae);break}e&&ce&&je.alternate===null&&t(D,ce),O=f(je,O,Se),_e===null?fe=je:_e.sibling=je,_e=je,ce=Ae}if(Se===L.length)return n(D,ce),Ne&&Sn(D,Se),fe;if(ce===null){for(;Se<L.length;Se++)ce=I(D,L[Se],X),ce!==null&&(O=f(ce,O,Se),_e===null?fe=ce:_e.sibling=ce,_e=ce);return Ne&&Sn(D,Se),fe}for(ce=i(ce);Se<L.length;Se++)Ae=B(ce,D,Se,L[Se],X),Ae!==null&&(e&&Ae.alternate!==null&&ce.delete(Ae.key===null?Se:Ae.key),O=f(Ae,O,Se),_e===null?fe=Ae:_e.sibling=Ae,_e=Ae);return e&&ce.forEach(function(ca){return t(D,ca)}),Ne&&Sn(D,Se),fe}function he(D,O,L,X){if(L==null)throw Error(o(151));for(var fe=null,_e=null,ce=O,Se=O=0,Ae=null,je=L.next();ce!==null&&!je.done;Se++,je=L.next()){ce.index>Se?(Ae=ce,ce=null):Ae=ce.sibling;var ca=U(D,ce,je.value,X);if(ca===null){ce===null&&(ce=Ae);break}e&&ce&&ca.alternate===null&&t(D,ce),O=f(ca,O,Se),_e===null?fe=ca:_e.sibling=ca,_e=ca,ce=Ae}if(je.done)return n(D,ce),Ne&&Sn(D,Se),fe;if(ce===null){for(;!je.done;Se++,je=L.next())je=I(D,je.value,X),je!==null&&(O=f(je,O,Se),_e===null?fe=je:_e.sibling=je,_e=je);return Ne&&Sn(D,Se),fe}for(ce=i(ce);!je.done;Se++,je=L.next())je=B(ce,D,Se,je.value,X),je!==null&&(e&&je.alternate!==null&&ce.delete(je.key===null?Se:je.key),O=f(je,O,Se),_e===null?fe=je:_e.sibling=je,_e=je);return e&&ce.forEach(function(C1){return t(D,C1)}),Ne&&Sn(D,Se),fe}function Be(D,O,L,X){if(typeof L=="object"&&L!==null&&L.type===E&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case C:e:{for(var fe=L.key;O!==null;){if(O.key===fe){if(fe=L.type,fe===E){if(O.tag===7){n(D,O.sibling),X=c(O,L.props.children),X.return=D,D=X;break e}}else if(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===$&&ja(fe)===O.type){n(D,O.sibling),X=c(O,L.props),gi(X,L),X.return=D,D=X;break e}n(D,O);break}else t(D,O);O=O.sibling}L.type===E?(X=Aa(L.props.children,D.mode,X,L.key),X.return=D,D=X):(X=Or(L.type,L.key,L.props,null,D.mode,X),gi(X,L),X.return=D,D=X)}return g(D);case R:e:{for(fe=L.key;O!==null;){if(O.key===fe)if(O.tag===4&&O.stateNode.containerInfo===L.containerInfo&&O.stateNode.implementation===L.implementation){n(D,O.sibling),X=c(O,L.children||[]),X.return=D,D=X;break e}else{n(D,O);break}else t(D,O);O=O.sibling}X=lc(L,D.mode,X),X.return=D,D=X}return g(D);case $:return L=ja(L),Be(D,O,L,X)}if(ue(L))return ae(D,O,L,X);if(te(L)){if(fe=te(L),typeof fe!="function")throw Error(o(150));return L=fe.call(L),he(D,O,L,X)}if(typeof L.then=="function")return Be(D,O,kr(L),X);if(L.$$typeof===z)return Be(D,O,jr(D,L),X);Ur(D,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,O!==null&&O.tag===6?(n(D,O.sibling),X=c(O,L),X.return=D,D=X):(n(D,O),X=ac(L,D.mode,X),X.return=D,D=X),g(D)):n(D,O)}return function(D,O,L,X){try{mi=0;var fe=Be(D,O,L,X);return pl=null,fe}catch(ce){if(ce===hl||ce===zr)throw ce;var _e=Ot(29,ce,null,D.mode);return _e.lanes=X,_e.return=D,_e}}}var za=mh(!0),gh=mh(!1),Xn=!1;function gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function In(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $n(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(De&2)!==0){var c=i.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),i.pending=t,t=Nr(e),Wd(e,null,n),t}return Ar(e,i,t,n),Nr(e)}function yi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,od(e,n)}}function vc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var c=null,f=null;if(n=n.firstBaseUpdate,n!==null){do{var g={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,n=n.next}while(n!==null);f===null?c=f=t:f=f.next=t}else c=f=t;n={baseState:i.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var xc=!1;function vi(){if(xc){var e=dl;if(e!==null)throw e}}function xi(e,t,n,i){xc=!1;var c=e.updateQueue;Xn=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,S=c.shared.pending;if(S!==null){c.shared.pending=null;var A=S,k=A.next;A.next=null,g===null?f=k:g.next=k,g=A;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,S=Y.lastBaseUpdate,S!==g&&(S===null?Y.firstBaseUpdate=k:S.next=k,Y.lastBaseUpdate=A))}if(f!==null){var I=c.baseState;g=0,Y=k=A=null,S=f;do{var U=S.lane&-536870913,B=U!==S.lane;if(B?(Re&U)===U:(i&U)===U){U!==0&&U===fl&&(xc=!0),Y!==null&&(Y=Y.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var ae=e,he=S;U=t;var Be=n;switch(he.tag){case 1:if(ae=he.payload,typeof ae=="function"){I=ae.call(Be,I,U);break e}I=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=he.payload,U=typeof ae=="function"?ae.call(Be,I,U):ae,U==null)break e;I=y({},I,U);break e;case 2:Xn=!0}}U=S.callback,U!==null&&(e.flags|=64,B&&(e.flags|=8192),B=c.callbacks,B===null?c.callbacks=[U]:B.push(U))}else B={lane:U,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Y===null?(k=Y=B,A=I):Y=Y.next=B,g|=U;if(S=S.next,S===null){if(S=c.shared.pending,S===null)break;B=S,S=B.next,B.next=null,c.lastBaseUpdate=B,c.shared.pending=null}}while(!0);Y===null&&(A=I),c.baseState=A,c.firstBaseUpdate=k,c.lastBaseUpdate=Y,f===null&&(c.shared.lanes=0),Wn|=g,e.lanes=g,e.memoizedState=I}}function yh(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function vh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)yh(n[e],t)}var ml=N(null),Hr=N(0);function xh(e,t){e=jn,F(Hr,e),F(ml,t),jn=e|t.baseLanes}function bc(){F(Hr,jn),F(ml,ml.current)}function Sc(){jn=Hr.current,q(ml),q(Hr)}var Mt=N(null),Kt=null;function Fn(e){var t=e.alternate;F(Fe,Fe.current&1),F(Mt,e),Kt===null&&(t===null||ml.current!==null||t.memoizedState!==null)&&(Kt=e)}function Ec(e){F(Fe,Fe.current),F(Mt,e),Kt===null&&(Kt=e)}function bh(e){e.tag===22?(F(Fe,Fe.current),F(Mt,e),Kt===null&&(Kt=e)):Qn()}function Qn(){F(Fe,Fe.current),F(Mt,Mt.current)}function _t(e){q(Mt),Kt===e&&(Kt=null),q(Fe)}var Fe=N(0);function Br(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Nu(n)||Ou(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cn=0,xe=null,Ue=null,We=null,Vr=!1,gl=!1,La=!1,Pr=0,bi=0,yl=null,pb=0;function Xe(){throw Error(o(321))}function wc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nt(e[n],t[n]))return!1;return!0}function Cc(e,t,n,i,c,f){return Cn=f,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?ap:Bc,La=!1,f=n(i,c),La=!1,gl&&(f=Eh(t,n,i,c)),Sh(e),f}function Sh(e){j.H=wi;var t=Ue!==null&&Ue.next!==null;if(Cn=0,We=Ue=xe=null,Vr=!1,bi=0,yl=null,t)throw Error(o(300));e===null||et||(e=e.dependencies,e!==null&&_r(e)&&(et=!0))}function Eh(e,t,n,i){xe=e;var c=0;do{if(gl&&(yl=null),bi=0,gl=!1,25<=c)throw Error(o(301));if(c+=1,We=Ue=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}j.H=lp,f=t(n,i)}while(gl);return f}function mb(){var e=j.H,t=e.useState()[0];return t=typeof t.then=="function"?Si(t):t,e=e.useState()[0],(Ue!==null?Ue.memoizedState:null)!==e&&(xe.flags|=1024),t}function Tc(){var e=Pr!==0;return Pr=0,e}function Rc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ac(e){if(Vr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Vr=!1}Cn=0,We=Ue=xe=null,gl=!1,bi=Pr=0,yl=null}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?xe.memoizedState=We=e:We=We.next=e,We}function Qe(){if(Ue===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=We===null?xe.memoizedState:We.next;if(t!==null)We=t,Ue=e;else{if(e===null)throw xe.alternate===null?Error(o(467)):Error(o(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},We===null?xe.memoizedState=We=e:We=We.next=e}return We}function Gr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Si(e){var t=bi;return bi+=1,yl===null&&(yl=[]),e=dh(yl,e,t),t=xe,(We===null?t.memoizedState:We.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?ap:Bc),e}function qr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Si(e);if(e.$$typeof===z)return ct(e)}throw Error(o(438,String(e)))}function Nc(e){var t=null,n=xe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=xe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Gr(),xe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ee;return t.index++,n}function Tn(e,t){return typeof t=="function"?t(e):t}function Yr(e){var t=Qe();return Oc(t,Ue,e)}function Oc(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var c=e.baseQueue,f=i.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}t.baseQueue=c=f,i.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{t=c.next;var S=g=null,A=null,k=t,Y=!1;do{var I=k.lane&-536870913;if(I!==k.lane?(Re&I)===I:(Cn&I)===I){var U=k.revertLane;if(U===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),I===fl&&(Y=!0);else if((Cn&U)===U){k=k.next,U===fl&&(Y=!0);continue}else I={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},A===null?(S=A=I,g=f):A=A.next=I,xe.lanes|=U,Wn|=U;I=k.action,La&&n(f,I),f=k.hasEagerState?k.eagerState:n(f,I)}else U={lane:I,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},A===null?(S=A=U,g=f):A=A.next=U,xe.lanes|=I,Wn|=I;k=k.next}while(k!==null&&k!==t);if(A===null?g=f:A.next=S,!Nt(f,e.memoizedState)&&(et=!0,Y&&(n=dl,n!==null)))throw n;e.memoizedState=f,e.baseState=g,e.baseQueue=A,i.lastRenderedState=f}return c===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Mc(e){var t=Qe(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,c=n.pending,f=t.memoizedState;if(c!==null){n.pending=null;var g=c=c.next;do f=e(f,g.action),g=g.next;while(g!==c);Nt(f,t.memoizedState)||(et=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),n.lastRenderedState=f}return[f,i]}function wh(e,t,n){var i=xe,c=Qe(),f=Ne;if(f){if(n===void 0)throw Error(o(407));n=n()}else n=t();var g=!Nt((Ue||c).memoizedState,n);if(g&&(c.memoizedState=n,et=!0),c=c.queue,Dc(Rh.bind(null,i,c,e),[e]),c.getSnapshot!==t||g||We!==null&&We.memoizedState.tag&1){if(i.flags|=2048,vl(9,{destroy:void 0},Th.bind(null,i,c,n,t),null),Ve===null)throw Error(o(349));f||(Cn&127)!==0||Ch(i,t,n)}return n}function Ch(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t=Gr(),xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Th(e,t,n,i){t.value=n,t.getSnapshot=i,Ah(t)&&Nh(e)}function Rh(e,t,n){return n(function(){Ah(t)&&Nh(e)})}function Ah(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nt(e,n)}catch{return!0}}function Nh(e){var t=Ra(e,2);t!==null&&Ct(t,e,2)}function _c(e){var t=yt();if(typeof e=="function"){var n=e;if(e=n(),La){Bn(!0);try{n()}finally{Bn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:e},t}function Oh(e,t,n,i){return e.baseState=n,Oc(e,Ue,typeof i=="function"?i:Tn)}function gb(e,t,n,i,c){if(Ir(e))throw Error(o(485));if(e=t.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};j.T!==null?n(!0):f.isTransition=!1,i(f),n=t.pending,n===null?(f.next=t.pending=f,Mh(t,f)):(f.next=n.next,t.pending=n.next=f)}}function Mh(e,t){var n=t.action,i=t.payload,c=e.state;if(t.isTransition){var f=j.T,g={};j.T=g;try{var S=n(c,i),A=j.S;A!==null&&A(g,S),_h(e,t,S)}catch(k){jc(e,t,k)}finally{f!==null&&g.types!==null&&(f.types=g.types),j.T=f}}else try{f=n(c,i),_h(e,t,f)}catch(k){jc(e,t,k)}}function _h(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){jh(e,t,i)},function(i){return jc(e,t,i)}):jh(e,t,n)}function jh(e,t,n){t.status="fulfilled",t.value=n,Dh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Mh(e,n)))}function jc(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Dh(t),t=t.next;while(t!==i)}e.action=null}function Dh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function zh(e,t){return t}function Lh(e,t){if(Ne){var n=Ve.formState;if(n!==null){e:{var i=xe;if(Ne){if(Ge){t:{for(var c=Ge,f=Yt;c.nodeType!==8;){if(!f){c=null;break t}if(c=Xt(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ge=Xt(c.nextSibling),i=c.data==="F!";break e}}Yn(i)}i=!1}i&&(t=n[0])}}return n=yt(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zh,lastRenderedState:t},n.queue=i,n=ep.bind(null,xe,i),i.dispatch=n,i=_c(!1),f=Hc.bind(null,xe,!1,i.queue),i=yt(),c={state:t,dispatch:null,action:e,pending:null},i.queue=c,n=gb.bind(null,xe,c,f,n),c.dispatch=n,i.memoizedState=e,[t,n,!1]}function kh(e){var t=Qe();return Uh(t,Ue,e)}function Uh(e,t,n){if(t=Oc(e,t,zh)[0],e=Yr(Tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Si(t)}catch(g){throw g===hl?zr:g}else i=t;t=Qe();var c=t.queue,f=c.dispatch;return n!==t.memoizedState&&(xe.flags|=2048,vl(9,{destroy:void 0},yb.bind(null,c,n),null)),[i,f,e]}function yb(e,t){e.action=t}function Hh(e){var t=Qe(),n=Ue;if(n!==null)return Uh(t,n,e);Qe(),t=t.memoizedState,n=Qe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function vl(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=xe.updateQueue,t===null&&(t=Gr(),xe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Bh(){return Qe().memoizedState}function Kr(e,t,n,i){var c=yt();xe.flags|=e,c.memoizedState=vl(1|t,{destroy:void 0},n,i===void 0?null:i)}function Xr(e,t,n,i){var c=Qe();i=i===void 0?null:i;var f=c.memoizedState.inst;Ue!==null&&i!==null&&wc(i,Ue.memoizedState.deps)?c.memoizedState=vl(t,f,n,i):(xe.flags|=e,c.memoizedState=vl(1|t,f,n,i))}function Vh(e,t){Kr(8390656,8,e,t)}function Dc(e,t){Xr(2048,8,e,t)}function vb(e){xe.flags|=4;var t=xe.updateQueue;if(t===null)t=Gr(),xe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ph(e){var t=Qe().memoizedState;return vb({ref:t,nextImpl:e}),function(){if((De&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Gh(e,t){return Xr(4,2,e,t)}function qh(e,t){return Xr(4,4,e,t)}function Yh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kh(e,t,n){n=n!=null?n.concat([e]):null,Xr(4,4,Yh.bind(null,t,e),n)}function zc(){}function Xh(e,t){var n=Qe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&wc(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Ih(e,t){var n=Qe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&wc(t,i[1]))return i[0];if(i=e(),La){Bn(!0);try{e()}finally{Bn(!1)}}return n.memoizedState=[i,t],i}function Lc(e,t,n){return n===void 0||(Cn&1073741824)!==0&&(Re&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=$p(),xe.lanes|=e,Wn|=e,n)}function $h(e,t,n,i){return Nt(n,t)?n:ml.current!==null?(e=Lc(e,n,i),Nt(e,t)||(et=!0),e):(Cn&42)===0||(Cn&1073741824)!==0&&(Re&261930)===0?(et=!0,e.memoizedState=n):(e=$p(),xe.lanes|=e,Wn|=e,t)}function Fh(e,t,n,i,c){var f=K.p;K.p=f!==0&&8>f?f:8;var g=j.T,S={};j.T=S,Hc(e,!1,t,n);try{var A=c(),k=j.S;if(k!==null&&k(S,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var Y=hb(A,i);Ei(e,t,Y,zt(e))}else Ei(e,t,i,zt(e))}catch(I){Ei(e,t,{then:function(){},status:"rejected",reason:I},zt())}finally{K.p=f,g!==null&&S.types!==null&&(g.types=S.types),j.T=g}}function xb(){}function kc(e,t,n,i){if(e.tag!==5)throw Error(o(476));var c=Qh(e).queue;Fh(e,c,t,H,n===null?xb:function(){return Zh(e),n(i)})}function Qh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:H},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Zh(e){var t=Qh(e);t.next===null&&(t=e.alternate.memoizedState),Ei(e,t.next.queue,{},zt())}function Uc(){return ct(Bi)}function Jh(){return Qe().memoizedState}function Wh(){return Qe().memoizedState}function bb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=zt();e=In(n);var i=$n(t,e,n);i!==null&&(Ct(i,t,n),yi(i,t,n)),t={cache:dc()},e.payload=t;return}t=t.return}}function Sb(e,t,n){var i=zt();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ir(e)?tp(t,n):(n=tc(e,t,n,i),n!==null&&(Ct(n,e,i),np(n,t,i)))}function ep(e,t,n){var i=zt();Ei(e,t,n,i)}function Ei(e,t,n,i){var c={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ir(e))tp(t,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var g=t.lastRenderedState,S=f(g,n);if(c.hasEagerState=!0,c.eagerState=S,Nt(S,g))return Ar(e,t,c,0),Ve===null&&Rr(),!1}catch{}if(n=tc(e,t,c,i),n!==null)return Ct(n,e,i),np(n,t,i),!0}return!1}function Hc(e,t,n,i){if(i={lane:2,revertLane:gu(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ir(e)){if(t)throw Error(o(479))}else t=tc(e,n,i,2),t!==null&&Ct(t,e,2)}function Ir(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function tp(e,t){gl=Vr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function np(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,od(e,n)}}var wi={readContext:ct,use:qr,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};wi.useEffectEvent=Xe;var ap={readContext:ct,use:qr,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:Vh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Kr(4194308,4,Yh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Kr(4194308,4,e,t)},useInsertionEffect:function(e,t){Kr(4,2,e,t)},useMemo:function(e,t){var n=yt();t=t===void 0?null:t;var i=e();if(La){Bn(!0);try{e()}finally{Bn(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=yt();if(n!==void 0){var c=n(t);if(La){Bn(!0);try{n(t)}finally{Bn(!1)}}}else c=t;return i.memoizedState=i.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},i.queue=e,e=e.dispatch=Sb.bind(null,xe,e),[i.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:function(e){e=_c(e);var t=e.queue,n=ep.bind(null,xe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:zc,useDeferredValue:function(e,t){var n=yt();return Lc(n,e,t)},useTransition:function(){var e=_c(!1);return e=Fh.bind(null,xe,e.queue,!0,!1),yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=xe,c=yt();if(Ne){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ve===null)throw Error(o(349));(Re&127)!==0||Ch(i,t,n)}c.memoizedState=n;var f={value:n,getSnapshot:t};return c.queue=f,Vh(Rh.bind(null,i,f,e),[e]),i.flags|=2048,vl(9,{destroy:void 0},Th.bind(null,i,f,n,t),null),n},useId:function(){var e=yt(),t=Ve.identifierPrefix;if(Ne){var n=rn,i=ln;n=(i&~(1<<32-At(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Pr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=pb++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Uc,useFormState:Lh,useActionState:Lh,useOptimistic:function(e){var t=yt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Hc.bind(null,xe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Nc,useCacheRefresh:function(){return yt().memoizedState=bb.bind(null,xe)},useEffectEvent:function(e){var t=yt(),n={impl:e};return t.memoizedState=n,function(){if((De&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Bc={readContext:ct,use:qr,useCallback:Xh,useContext:ct,useEffect:Dc,useImperativeHandle:Kh,useInsertionEffect:Gh,useLayoutEffect:qh,useMemo:Ih,useReducer:Yr,useRef:Bh,useState:function(){return Yr(Tn)},useDebugValue:zc,useDeferredValue:function(e,t){var n=Qe();return $h(n,Ue.memoizedState,e,t)},useTransition:function(){var e=Yr(Tn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Si(e),t]},useSyncExternalStore:wh,useId:Jh,useHostTransitionStatus:Uc,useFormState:kh,useActionState:kh,useOptimistic:function(e,t){var n=Qe();return Oh(n,Ue,e,t)},useMemoCache:Nc,useCacheRefresh:Wh};Bc.useEffectEvent=Ph;var lp={readContext:ct,use:qr,useCallback:Xh,useContext:ct,useEffect:Dc,useImperativeHandle:Kh,useInsertionEffect:Gh,useLayoutEffect:qh,useMemo:Ih,useReducer:Mc,useRef:Bh,useState:function(){return Mc(Tn)},useDebugValue:zc,useDeferredValue:function(e,t){var n=Qe();return Ue===null?Lc(n,e,t):$h(n,Ue.memoizedState,e,t)},useTransition:function(){var e=Mc(Tn)[0],t=Qe().memoizedState;return[typeof e=="boolean"?e:Si(e),t]},useSyncExternalStore:wh,useId:Jh,useHostTransitionStatus:Uc,useFormState:Hh,useActionState:Hh,useOptimistic:function(e,t){var n=Qe();return Ue!==null?Oh(n,Ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Nc,useCacheRefresh:Wh};lp.useEffectEvent=Ph;function Vc(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pc={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=zt(),c=In(i);c.payload=t,n!=null&&(c.callback=n),t=$n(e,c,i),t!==null&&(Ct(t,e,i),yi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=zt(),c=In(i);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=$n(e,c,i),t!==null&&(Ct(t,e,i),yi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zt(),i=In(n);i.tag=2,t!=null&&(i.callback=t),t=$n(e,i,n),t!==null&&(Ct(t,e,n),yi(t,e,n))}};function ip(e,t,n,i,c,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,f,g):t.prototype&&t.prototype.isPureReactComponent?!ci(n,i)||!ci(c,f):!0}function rp(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Pc.enqueueReplaceState(t,t.state,null)}function ka(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var c in e)n[c]===void 0&&(n[c]=e[c])}return n}function op(e){Tr(e)}function sp(e){console.error(e)}function cp(e){Tr(e)}function $r(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function up(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Gc(e,t,n){return n=In(n),n.tag=3,n.payload={element:null},n.callback=function(){$r(e,t)},n}function fp(e){return e=In(e),e.tag=3,e}function dp(e,t,n,i){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;e.payload=function(){return c(f)},e.callback=function(){up(t,n,i)}}var g=n.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){up(t,n,i),typeof c!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var S=i.stack;this.componentDidCatch(i.value,{componentStack:S!==null?S:""})})}function Eb(e,t,n,i,c){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ul(t,n,c,!0),n=Mt.current,n!==null){switch(n.tag){case 31:case 13:return Kt===null?ro():n.alternate===null&&Ie===0&&(Ie=3),n.flags&=-257,n.flags|=65536,n.lanes=c,i===Lr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),hu(e,i,c)),!1;case 22:return n.flags|=65536,i===Lr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),hu(e,i,c)),!1}throw Error(o(435,n.tag))}return hu(e,i,c),ro(),!1}if(Ne)return t=Mt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,i!==oc&&(e=Error(o(422),{cause:i}),di(Pt(e,n)))):(i!==oc&&(t=Error(o(423),{cause:i}),di(Pt(t,n))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,i=Pt(i,n),c=Gc(e.stateNode,i,c),vc(e,c),Ie!==4&&(Ie=2)),!1;var f=Error(o(520),{cause:i});if(f=Pt(f,n),_i===null?_i=[f]:_i.push(f),Ie!==4&&(Ie=2),t===null)return!0;i=Pt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=c&-c,n.lanes|=e,e=Gc(n.stateNode,i,e),vc(n,e),!1;case 1:if(t=n.type,f=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ea===null||!ea.has(f))))return n.flags|=65536,c&=-c,n.lanes|=c,c=fp(c),dp(c,e,n,i),vc(n,c),!1}n=n.return}while(n!==null);return!1}var qc=Error(o(461)),et=!1;function ut(e,t,n,i){t.child=e===null?gh(t,null,n,i):za(t,e.child,n,i)}function hp(e,t,n,i,c){n=n.render;var f=t.ref;if("ref"in i){var g={};for(var S in i)S!=="ref"&&(g[S]=i[S])}else g=i;return Ma(t),i=Cc(e,t,n,g,f,c),S=Tc(),e!==null&&!et?(Rc(e,t,c),Rn(e,t,c)):(Ne&&S&&ic(t),t.flags|=1,ut(e,t,i,c),t.child)}function pp(e,t,n,i,c){if(e===null){var f=n.type;return typeof f=="function"&&!nc(f)&&f.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=f,mp(e,t,f,i,c)):(e=Or(n.type,null,i,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!Zc(e,c)){var g=f.memoizedProps;if(n=n.compare,n=n!==null?n:ci,n(g,i)&&e.ref===t.ref)return Rn(e,t,c)}return t.flags|=1,e=bn(f,i),e.ref=t.ref,e.return=t,t.child=e}function mp(e,t,n,i,c){if(e!==null){var f=e.memoizedProps;if(ci(f,i)&&e.ref===t.ref)if(et=!1,t.pendingProps=i=f,Zc(e,c))(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,Rn(e,t,c)}return Yc(e,t,n,i,c)}function gp(e,t,n,i){var c=i.children,f=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(f=f!==null?f.baseLanes|n:n,e!==null){for(i=t.child=e.child,c=0;i!==null;)c=c|i.lanes|i.childLanes,i=i.sibling;i=c&~f}else i=0,t.child=null;return yp(e,t,f,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Dr(t,f!==null?f.cachePool:null),f!==null?xh(t,f):bc(),bh(t);else return i=t.lanes=536870912,yp(e,t,f!==null?f.baseLanes|n:n,n,i)}else f!==null?(Dr(t,f.cachePool),xh(t,f),Qn(),t.memoizedState=null):(e!==null&&Dr(t,null),bc(),Qn());return ut(e,t,c,n),t.child}function Ci(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function yp(e,t,n,i,c){var f=pc();return f=f===null?null:{parent:Je._currentValue,pool:f},t.memoizedState={baseLanes:n,cachePool:f},e!==null&&Dr(t,null),bc(),bh(t),e!==null&&ul(e,t,i,!0),t.childLanes=c,null}function Fr(e,t){return t=Zr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function vp(e,t,n){return za(t,e.child,null,n),e=Fr(t,t.pendingProps),e.flags|=2,_t(t),t.memoizedState=null,e}function wb(e,t,n){var i=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ne){if(i.mode==="hidden")return e=Fr(t,i),t.lanes=536870912,Ci(null,e);if(Ec(t),(e=Ge)?(e=Mm(e,Yt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:ln,overflow:rn}:null,retryLane:536870912,hydrationErrors:null},n=th(e),n.return=t,t.child=n,st=t,Ge=null)):e=null,e===null)throw Yn(t);return t.lanes=536870912,null}return Fr(t,i)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(Ec(t),c)if(t.flags&256)t.flags&=-257,t=vp(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(et||ul(e,t,n,!1),c=(n&e.childLanes)!==0,et||c){if(i=Ve,i!==null&&(g=sd(i,n),g!==0&&g!==f.retryLane))throw f.retryLane=g,Ra(e,g),Ct(i,e,g),qc;ro(),t=vp(e,t,n)}else e=f.treeContext,Ge=Xt(g.nextSibling),st=t,Ne=!0,qn=null,Yt=!1,e!==null&&lh(t,e),t=Fr(t,i),t.flags|=4096;return t}return e=bn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Qr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Yc(e,t,n,i,c){return Ma(t),n=Cc(e,t,n,i,void 0,c),i=Tc(),e!==null&&!et?(Rc(e,t,c),Rn(e,t,c)):(Ne&&i&&ic(t),t.flags|=1,ut(e,t,n,c),t.child)}function xp(e,t,n,i,c,f){return Ma(t),t.updateQueue=null,n=Eh(t,i,n,c),Sh(e),i=Tc(),e!==null&&!et?(Rc(e,t,f),Rn(e,t,f)):(Ne&&i&&ic(t),t.flags|=1,ut(e,t,n,f),t.child)}function bp(e,t,n,i,c){if(Ma(t),t.stateNode===null){var f=rl,g=n.contextType;typeof g=="object"&&g!==null&&(f=ct(g)),f=new n(i,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Pc,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=i,f.state=t.memoizedState,f.refs={},gc(t),g=n.contextType,f.context=typeof g=="object"&&g!==null?ct(g):rl,f.state=t.memoizedState,g=n.getDerivedStateFromProps,typeof g=="function"&&(Vc(t,n,g,i),f.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Pc.enqueueReplaceState(f,f.state,null),xi(t,i,f,c),vi(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){f=t.stateNode;var S=t.memoizedProps,A=ka(n,S);f.props=A;var k=f.context,Y=n.contextType;g=rl,typeof Y=="object"&&Y!==null&&(g=ct(Y));var I=n.getDerivedStateFromProps;Y=typeof I=="function"||typeof f.getSnapshotBeforeUpdate=="function",S=t.pendingProps!==S,Y||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S||k!==g)&&rp(t,f,i,g),Xn=!1;var U=t.memoizedState;f.state=U,xi(t,i,f,c),vi(),k=t.memoizedState,S||U!==k||Xn?(typeof I=="function"&&(Vc(t,n,I,i),k=t.memoizedState),(A=Xn||ip(t,n,A,i,U,k,g))?(Y||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=k),f.props=i,f.state=k,f.context=g,i=A):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{f=t.stateNode,yc(e,t),g=t.memoizedProps,Y=ka(n,g),f.props=Y,I=t.pendingProps,U=f.context,k=n.contextType,A=rl,typeof k=="object"&&k!==null&&(A=ct(k)),S=n.getDerivedStateFromProps,(k=typeof S=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==I||U!==A)&&rp(t,f,i,A),Xn=!1,U=t.memoizedState,f.state=U,xi(t,i,f,c),vi();var B=t.memoizedState;g!==I||U!==B||Xn||e!==null&&e.dependencies!==null&&_r(e.dependencies)?(typeof S=="function"&&(Vc(t,n,S,i),B=t.memoizedState),(Y=Xn||ip(t,n,Y,i,U,B,A)||e!==null&&e.dependencies!==null&&_r(e.dependencies))?(k||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(i,B,A),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(i,B,A)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=B),f.props=i,f.state=B,f.context=A,i=Y):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),i=!1)}return f=i,Qr(e,t),i=(t.flags&128)!==0,f||i?(f=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&i?(t.child=za(t,e.child,null,c),t.child=za(t,null,n,c)):ut(e,t,n,c),t.memoizedState=f.state,e=t.child):e=Rn(e,t,c),e}function Sp(e,t,n,i){return Na(),t.flags|=256,ut(e,t,n,i),t.child}var Kc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xc(e){return{baseLanes:e,cachePool:uh()}}function Ic(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Dt),e}function Ep(e,t,n){var i=t.pendingProps,c=!1,f=(t.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(Fe.current&2)!==0),g&&(c=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ne){if(c?Fn(t):Qn(),(e=Ge)?(e=Mm(e,Yt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:ln,overflow:rn}:null,retryLane:536870912,hydrationErrors:null},n=th(e),n.return=t,t.child=n,st=t,Ge=null)):e=null,e===null)throw Yn(t);return Ou(e)?t.lanes=32:t.lanes=536870912,null}var S=i.children;return i=i.fallback,c?(Qn(),c=t.mode,S=Zr({mode:"hidden",children:S},c),i=Aa(i,c,n,null),S.return=t,i.return=t,S.sibling=i,t.child=S,i=t.child,i.memoizedState=Xc(n),i.childLanes=Ic(e,g,n),t.memoizedState=Kc,Ci(null,i)):(Fn(t),$c(t,S))}var A=e.memoizedState;if(A!==null&&(S=A.dehydrated,S!==null)){if(f)t.flags&256?(Fn(t),t.flags&=-257,t=Fc(e,t,n)):t.memoizedState!==null?(Qn(),t.child=e.child,t.flags|=128,t=null):(Qn(),S=i.fallback,c=t.mode,i=Zr({mode:"visible",children:i.children},c),S=Aa(S,c,n,null),S.flags|=2,i.return=t,S.return=t,i.sibling=S,t.child=i,za(t,e.child,null,n),i=t.child,i.memoizedState=Xc(n),i.childLanes=Ic(e,g,n),t.memoizedState=Kc,t=Ci(null,i));else if(Fn(t),Ou(S)){if(g=S.nextSibling&&S.nextSibling.dataset,g)var k=g.dgst;g=k,i=Error(o(419)),i.stack="",i.digest=g,di({value:i,source:null,stack:null}),t=Fc(e,t,n)}else if(et||ul(e,t,n,!1),g=(n&e.childLanes)!==0,et||g){if(g=Ve,g!==null&&(i=sd(g,n),i!==0&&i!==A.retryLane))throw A.retryLane=i,Ra(e,i),Ct(g,e,i),qc;Nu(S)||ro(),t=Fc(e,t,n)}else Nu(S)?(t.flags|=192,t.child=e.child,t=null):(e=A.treeContext,Ge=Xt(S.nextSibling),st=t,Ne=!0,qn=null,Yt=!1,e!==null&&lh(t,e),t=$c(t,i.children),t.flags|=4096);return t}return c?(Qn(),S=i.fallback,c=t.mode,A=e.child,k=A.sibling,i=bn(A,{mode:"hidden",children:i.children}),i.subtreeFlags=A.subtreeFlags&65011712,k!==null?S=bn(k,S):(S=Aa(S,c,n,null),S.flags|=2),S.return=t,i.return=t,i.sibling=S,t.child=i,Ci(null,i),i=t.child,S=e.child.memoizedState,S===null?S=Xc(n):(c=S.cachePool,c!==null?(A=Je._currentValue,c=c.parent!==A?{parent:A,pool:A}:c):c=uh(),S={baseLanes:S.baseLanes|n,cachePool:c}),i.memoizedState=S,i.childLanes=Ic(e,g,n),t.memoizedState=Kc,Ci(e.child,i)):(Fn(t),n=e.child,e=n.sibling,n=bn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=n,t.memoizedState=null,n)}function $c(e,t){return t=Zr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Zr(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function Fc(e,t,n){return za(t,e.child,null,n),e=$c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wp(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),uc(e.return,t,n)}function Qc(e,t,n,i,c,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:c,treeForkCount:f}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=i,g.tail=n,g.tailMode=c,g.treeForkCount=f)}function Cp(e,t,n){var i=t.pendingProps,c=i.revealOrder,f=i.tail;i=i.children;var g=Fe.current,S=(g&2)!==0;if(S?(g=g&1|2,t.flags|=128):g&=1,F(Fe,g),ut(e,t,i,n),i=Ne?fi:0,!S&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wp(e,n,t);else if(e.tag===19)wp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(n=t.child,c=null;n!==null;)e=n.alternate,e!==null&&Br(e)===null&&(c=n),n=n.sibling;n=c,n===null?(c=t.child,t.child=null):(c=n.sibling,n.sibling=null),Qc(t,!1,c,n,f,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&Br(e)===null){t.child=c;break}e=c.sibling,c.sibling=n,n=c,c=e}Qc(t,!0,n,null,f,i);break;case"together":Qc(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function Rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ul(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=bn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&_r(e)))}function Cb(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),Kn(t,Je,e.memoizedState.cache),Na();break;case 27:case 5:Te(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:Kn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ec(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Fn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ep(e,t,n):(Fn(t),e=Rn(e,t,n),e!==null?e.sibling:null);Fn(t);break;case 19:var c=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ul(e,t,n,!1),i=(n&t.childLanes)!==0),c){if(i)return Cp(e,t,n);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),F(Fe,Fe.current),i)break;return null;case 22:return t.lanes=0,gp(e,t,n,t.pendingProps);case 24:Kn(t,Je,e.memoizedState.cache)}return Rn(e,t,n)}function Tp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)et=!0;else{if(!Zc(e,n)&&(t.flags&128)===0)return et=!1,Cb(e,t,n);et=(e.flags&131072)!==0}else et=!1,Ne&&(t.flags&1048576)!==0&&ah(t,fi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ja(t.elementType),t.type=e,typeof e=="function")nc(e)?(i=ka(e,i),t.tag=1,t=bp(null,t,e,i,n)):(t.tag=0,t=Yc(null,t,e,i,n));else{if(e!=null){var c=e.$$typeof;if(c===V){t.tag=11,t=hp(null,t,e,i,n);break e}else if(c===P){t.tag=14,t=pp(null,t,e,i,n);break e}}throw t=re(e)||e,Error(o(306,t,""))}}return t;case 0:return Yc(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,c=ka(i,t.pendingProps),bp(e,t,i,c,n);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var f=t.memoizedState;c=f.element,yc(e,t),xi(t,i,null,n);var g=t.memoizedState;if(i=g.cache,Kn(t,Je,i),i!==f.cache&&fc(t,[Je],n,!0),vi(),i=g.element,f.isDehydrated)if(f={element:i,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=Sp(e,t,i,n);break e}else if(i!==c){c=Pt(Error(o(424)),t),di(c),t=Sp(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ge=Xt(e.firstChild),st=t,Ne=!0,qn=null,Yt=!0,n=gh(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Na(),i===c){t=Rn(e,t,n);break e}ut(e,t,i,n)}t=t.child}return t;case 26:return Qr(e,t),e===null?(n=km(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ne||(n=t.type,e=t.pendingProps,i=po(me.current).createElement(n),i[ot]=t,i[vt]=e,ft(i,n,e),it(i),t.stateNode=i):t.memoizedState=km(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Te(t),e===null&&Ne&&(i=t.stateNode=Dm(t.type,t.pendingProps,me.current),st=t,Yt=!0,c=Ge,la(t.type)?(Mu=c,Ge=Xt(i.firstChild)):Ge=c),ut(e,t,t.pendingProps.children,n),Qr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ne&&((c=i=Ge)&&(i=e1(i,t.type,t.pendingProps,Yt),i!==null?(t.stateNode=i,st=t,Ge=Xt(i.firstChild),Yt=!1,c=!0):c=!1),c||Yn(t)),Te(t),c=t.type,f=t.pendingProps,g=e!==null?e.memoizedProps:null,i=f.children,Tu(c,f)?i=null:g!==null&&Tu(c,g)&&(t.flags|=32),t.memoizedState!==null&&(c=Cc(e,t,mb,null,null,n),Bi._currentValue=c),Qr(e,t),ut(e,t,i,n),t.child;case 6:return e===null&&Ne&&((e=n=Ge)&&(n=t1(n,t.pendingProps,Yt),n!==null?(t.stateNode=n,st=t,Ge=null,e=!0):e=!1),e||Yn(t)),null;case 13:return Ep(e,t,n);case 4:return be(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=za(t,null,i,n):ut(e,t,i,n),t.child;case 11:return hp(e,t,t.type,t.pendingProps,n);case 7:return ut(e,t,t.pendingProps,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Kn(t,t.type,i.value),ut(e,t,i.children,n),t.child;case 9:return c=t.type._context,i=t.pendingProps.children,Ma(t),c=ct(c),i=i(c),t.flags|=1,ut(e,t,i,n),t.child;case 14:return pp(e,t,t.type,t.pendingProps,n);case 15:return mp(e,t,t.type,t.pendingProps,n);case 19:return Cp(e,t,n);case 31:return wb(e,t,n);case 22:return gp(e,t,n,t.pendingProps);case 24:return Ma(t),i=ct(Je),e===null?(c=pc(),c===null&&(c=Ve,f=dc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=n),c=f),t.memoizedState={parent:i,cache:c},gc(t),Kn(t,Je,c)):((e.lanes&n)!==0&&(yc(e,t),xi(t,null,null,n),vi()),c=e.memoizedState,f=t.memoizedState,c.parent!==i?(c={parent:i,cache:i},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),Kn(t,Je,i)):(i=f.cache,Kn(t,Je,i),i!==c.cache&&fc(t,[Je],n,!0))),ut(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function An(e){e.flags|=4}function Jc(e,t,n,i,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Jp())e.flags|=8192;else throw Da=Lr,mc}else e.flags&=-16777217}function Rp(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Pm(t))if(Jp())e.flags|=8192;else throw Da=Lr,mc}function Jr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?id():536870912,e.lanes|=t,El|=t)}function Ti(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var c=e.child;c!==null;)n|=c.lanes|c.childLanes,i|=c.subtreeFlags&65011712,i|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)n|=c.lanes|c.childLanes,i|=c.subtreeFlags,i|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Tb(e,t,n){var i=t.pendingProps;switch(rc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return qe(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),wn(Je),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(cl(t)?An(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,sc())),qe(t),null;case 26:var c=t.type,f=t.memoizedState;return e===null?(An(t),f!==null?(qe(t),Rp(t,f)):(qe(t),Jc(t,c,null,i,n))):f?f!==e.memoizedState?(An(t),qe(t),Rp(t,f)):(qe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&An(t),qe(t),Jc(t,c,e,i,n)),null;case 27:if(Me(t),n=me.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&An(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return qe(t),null}e=J.current,cl(t)?ih(t):(e=Dm(c,i,n),t.stateNode=e,An(t))}return qe(t),null;case 5:if(Me(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&An(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return qe(t),null}if(f=J.current,cl(t))ih(t);else{var g=po(me.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof i.is=="string"?g.createElement("select",{is:i.is}):g.createElement("select"),i.multiple?f.multiple=!0:i.size&&(f.size=i.size);break;default:f=typeof i.is=="string"?g.createElement(c,{is:i.is}):g.createElement(c)}}f[ot]=t,f[vt]=i;e:for(g=t.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}t.stateNode=f;e:switch(ft(f,c,i),c){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&An(t)}}return qe(t),Jc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&An(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=me.current,cl(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,c=st,c!==null)switch(c.tag){case 27:case 5:i=c.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Em(e.nodeValue,n)),e||Yn(t,!0)}else e=po(e).createTextNode(i),e[ot]=t,t.stateNode=e}return qe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=cl(t),n!==null){if(e===null){if(!i)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[ot]=t}else Na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),e=!1}else n=sc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_t(t),t):(_t(t),null);if((t.flags&128)!==0)throw Error(o(558))}return qe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=cl(t),i!==null&&i.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[ot]=t}else Na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),c=!1}else c=sc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(_t(t),t):(_t(t),null)}return _t(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,c=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(c=i.alternate.memoizedState.cachePool.pool),f=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(f=i.memoizedState.cachePool.pool),f!==c&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Jr(t,t.updateQueue),qe(t),null);case 4:return ve(),e===null&&bu(t.stateNode.containerInfo),qe(t),null;case 10:return wn(t.type),qe(t),null;case 19:if(q(Fe),i=t.memoizedState,i===null)return qe(t),null;if(c=(t.flags&128)!==0,f=i.rendering,f===null)if(c)Ti(i,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=Br(e),f!==null){for(t.flags|=128,Ti(i,!1),e=f.updateQueue,t.updateQueue=e,Jr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)eh(n,e),n=n.sibling;return F(Fe,Fe.current&1|2),Ne&&Sn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Tt()>ao&&(t.flags|=128,c=!0,Ti(i,!1),t.lanes=4194304)}else{if(!c)if(e=Br(f),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,Jr(t,e),Ti(i,!0),i.tail===null&&i.tailMode==="hidden"&&!f.alternate&&!Ne)return qe(t),null}else 2*Tt()-i.renderingStartTime>ao&&n!==536870912&&(t.flags|=128,c=!0,Ti(i,!1),t.lanes=4194304);i.isBackwards?(f.sibling=t.child,t.child=f):(e=i.last,e!==null?e.sibling=f:t.child=f,i.last=f)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Tt(),e.sibling=null,n=Fe.current,F(Fe,c?n&1|2:n&1),Ne&&Sn(t,i.treeForkCount),e):(qe(t),null);case 22:case 23:return _t(t),Sc(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),n=t.updateQueue,n!==null&&Jr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&q(_a),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),wn(Je),qe(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Rb(e,t){switch(rc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wn(Je),ve(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Me(t),null;case 31:if(t.memoizedState!==null){if(_t(t),t.alternate===null)throw Error(o(340));Na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_t(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(Fe),null;case 4:return ve(),null;case 10:return wn(t.type),null;case 22:case 23:return _t(t),Sc(),e!==null&&q(_a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return wn(Je),null;case 25:return null;default:return null}}function Ap(e,t){switch(rc(t),t.tag){case 3:wn(Je),ve();break;case 26:case 27:case 5:Me(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&_t(t);break;case 13:_t(t);break;case 19:q(Fe);break;case 10:wn(t.type);break;case 22:case 23:_t(t),Sc(),e!==null&&q(_a);break;case 24:wn(Je)}}function Ri(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var c=i.next;n=c;do{if((n.tag&e)===e){i=void 0;var f=n.create,g=n.inst;i=f(),g.destroy=i}n=n.next}while(n!==c)}}catch(S){ke(t,t.return,S)}}function Zn(e,t,n){try{var i=t.updateQueue,c=i!==null?i.lastEffect:null;if(c!==null){var f=c.next;i=f;do{if((i.tag&e)===e){var g=i.inst,S=g.destroy;if(S!==void 0){g.destroy=void 0,c=t;var A=n,k=S;try{k()}catch(Y){ke(c,A,Y)}}}i=i.next}while(i!==f)}}catch(Y){ke(t,t.return,Y)}}function Np(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{vh(t,n)}catch(i){ke(e,e.return,i)}}}function Op(e,t,n){n.props=ka(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ke(e,t,i)}}function Ai(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(c){ke(e,t,c)}}function on(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(c){ke(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){ke(e,t,c)}else n.current=null}function Mp(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(c){ke(e,e.return,c)}}function Wc(e,t,n){try{var i=e.stateNode;$b(i,e.type,n,t),i[vt]=t}catch(c){ke(e,e.return,c)}}function _p(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&la(e.type)||e.tag===4}function eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_p(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&la(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vn));else if(i!==4&&(i===27&&la(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tu(e,t,n),e=e.sibling;e!==null;)tu(e,t,n),e=e.sibling}function Wr(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&la(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Wr(e,t,n),e=e.sibling;e!==null;)Wr(e,t,n),e=e.sibling}function jp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);ft(t,i,n),t[ot]=e,t[vt]=n}catch(f){ke(e,e.return,f)}}var Nn=!1,tt=!1,nu=!1,Dp=typeof WeakSet=="function"?WeakSet:Set,rt=null;function Ab(e,t){if(e=e.containerInfo,wu=So,e=Kd(e),Fs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var c=i.anchorOffset,f=i.focusNode;i=i.focusOffset;try{n.nodeType,f.nodeType}catch{n=null;break e}var g=0,S=-1,A=-1,k=0,Y=0,I=e,U=null;t:for(;;){for(var B;I!==n||c!==0&&I.nodeType!==3||(S=g+c),I!==f||i!==0&&I.nodeType!==3||(A=g+i),I.nodeType===3&&(g+=I.nodeValue.length),(B=I.firstChild)!==null;)U=I,I=B;for(;;){if(I===e)break t;if(U===n&&++k===c&&(S=g),U===f&&++Y===i&&(A=g),(B=I.nextSibling)!==null)break;I=U,U=I.parentNode}I=B}n=S===-1||A===-1?null:{start:S,end:A}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cu={focusedElem:e,selectionRange:n},So=!1,rt=t;rt!==null;)if(t=rt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,rt=e;else for(;rt!==null;){switch(t=rt,f=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)c=e[n],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,n=t,c=f.memoizedProps,f=f.memoizedState,i=n.stateNode;try{var ae=ka(n.type,c);e=i.getSnapshotBeforeUpdate(ae,f),i.__reactInternalSnapshotBeforeUpdate=e}catch(he){ke(n,n.return,he)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Au(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Au(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,rt=e;break}rt=t.return}}function zp(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Mn(e,n),i&4&&Ri(5,n);break;case 1:if(Mn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(g){ke(n,n.return,g)}else{var c=ka(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){ke(n,n.return,g)}}i&64&&Np(n),i&512&&Ai(n,n.return);break;case 3:if(Mn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{vh(e,t)}catch(g){ke(n,n.return,g)}}break;case 27:t===null&&i&4&&jp(n);case 26:case 5:Mn(e,n),t===null&&i&4&&Mp(n),i&512&&Ai(n,n.return);break;case 12:Mn(e,n);break;case 31:Mn(e,n),i&4&&Up(e,n);break;case 13:Mn(e,n),i&4&&Hp(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=kb.bind(null,n),n1(e,n))));break;case 22:if(i=n.memoizedState!==null||Nn,!i){t=t!==null&&t.memoizedState!==null||tt,c=Nn;var f=tt;Nn=i,(tt=t)&&!f?_n(e,n,(n.subtreeFlags&8772)!==0):Mn(e,n),Nn=c,tt=f}break;case 30:break;default:Mn(e,n)}}function Lp(e){var t=e.alternate;t!==null&&(e.alternate=null,Lp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&js(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,bt=!1;function On(e,t,n){for(n=n.child;n!==null;)kp(e,t,n),n=n.sibling}function kp(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Zl,n)}catch{}switch(n.tag){case 26:tt||on(n,t),On(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tt||on(n,t);var i=Ye,c=bt;la(n.type)&&(Ye=n.stateNode,bt=!1),On(e,t,n),ki(n.stateNode),Ye=i,bt=c;break;case 5:tt||on(n,t);case 6:if(i=Ye,c=bt,Ye=null,On(e,t,n),Ye=i,bt=c,Ye!==null)if(bt)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(n.stateNode)}catch(f){ke(n,t,f)}else try{Ye.removeChild(n.stateNode)}catch(f){ke(n,t,f)}break;case 18:Ye!==null&&(bt?(e=Ye,Nm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ml(e)):Nm(Ye,n.stateNode));break;case 4:i=Ye,c=bt,Ye=n.stateNode.containerInfo,bt=!0,On(e,t,n),Ye=i,bt=c;break;case 0:case 11:case 14:case 15:Zn(2,n,t),tt||Zn(4,n,t),On(e,t,n);break;case 1:tt||(on(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Op(n,t,i)),On(e,t,n);break;case 21:On(e,t,n);break;case 22:tt=(i=tt)||n.memoizedState!==null,On(e,t,n),tt=i;break;default:On(e,t,n)}}function Up(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ml(e)}catch(n){ke(t,t.return,n)}}}function Hp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ml(e)}catch(n){ke(t,t.return,n)}}function Nb(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Dp),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Dp),t;default:throw Error(o(435,e.tag))}}function eo(e,t){var n=Nb(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var c=Ub.bind(null,e,i);i.then(c,c)}})}function St(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var c=n[i],f=e,g=t,S=g;e:for(;S!==null;){switch(S.tag){case 27:if(la(S.type)){Ye=S.stateNode,bt=!1;break e}break;case 5:Ye=S.stateNode,bt=!1;break e;case 3:case 4:Ye=S.stateNode.containerInfo,bt=!0;break e}S=S.return}if(Ye===null)throw Error(o(160));kp(f,g,c),Ye=null,bt=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Bp(t,e),t=t.sibling}var Zt=null;function Bp(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:St(t,e),Et(e),i&4&&(Zn(3,e,e.return),Ri(3,e),Zn(5,e,e.return));break;case 1:St(t,e),Et(e),i&512&&(tt||n===null||on(n,n.return)),i&64&&Nn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var c=Zt;if(St(t,e),Et(e),i&512&&(tt||n===null||on(n,n.return)),i&4){var f=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,c=c.ownerDocument||c;t:switch(i){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ei]||f[ot]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(i),c.head.insertBefore(f,c.querySelector("head > title"))),ft(f,i,n),f[ot]=e,it(f),i=f;break e;case"link":var g=Bm("link","href",c).get(i+(n.href||""));if(g){for(var S=0;S<g.length;S++)if(f=g[S],f.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&f.getAttribute("rel")===(n.rel==null?null:n.rel)&&f.getAttribute("title")===(n.title==null?null:n.title)&&f.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){g.splice(S,1);break t}}f=c.createElement(i),ft(f,i,n),c.head.appendChild(f);break;case"meta":if(g=Bm("meta","content",c).get(i+(n.content||""))){for(S=0;S<g.length;S++)if(f=g[S],f.getAttribute("content")===(n.content==null?null:""+n.content)&&f.getAttribute("name")===(n.name==null?null:n.name)&&f.getAttribute("property")===(n.property==null?null:n.property)&&f.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&f.getAttribute("charset")===(n.charSet==null?null:n.charSet)){g.splice(S,1);break t}}f=c.createElement(i),ft(f,i,n),c.head.appendChild(f);break;default:throw Error(o(468,i))}f[ot]=e,it(f),i=f}e.stateNode=i}else Vm(c,e.type,e.stateNode);else e.stateNode=Hm(c,i,e.memoizedProps);else f!==i?(f===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):f.count--,i===null?Vm(c,e.type,e.stateNode):Hm(c,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Wc(e,e.memoizedProps,n.memoizedProps)}break;case 27:St(t,e),Et(e),i&512&&(tt||n===null||on(n,n.return)),n!==null&&i&4&&Wc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(St(t,e),Et(e),i&512&&(tt||n===null||on(n,n.return)),e.flags&32){c=e.stateNode;try{Wa(c,"")}catch(ae){ke(e,e.return,ae)}}i&4&&e.stateNode!=null&&(c=e.memoizedProps,Wc(e,c,n!==null?n.memoizedProps:c)),i&1024&&(nu=!0);break;case 6:if(St(t,e),Et(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(ae){ke(e,e.return,ae)}}break;case 3:if(yo=null,c=Zt,Zt=mo(t.containerInfo),St(t,e),Zt=c,Et(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ml(t.containerInfo)}catch(ae){ke(e,e.return,ae)}nu&&(nu=!1,Vp(e));break;case 4:i=Zt,Zt=mo(e.stateNode.containerInfo),St(t,e),Et(e),Zt=i;break;case 12:St(t,e),Et(e);break;case 31:St(t,e),Et(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,eo(e,i)));break;case 13:St(t,e),Et(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(no=Tt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,eo(e,i)));break;case 22:c=e.memoizedState!==null;var A=n!==null&&n.memoizedState!==null,k=Nn,Y=tt;if(Nn=k||c,tt=Y||A,St(t,e),tt=Y,Nn=k,Et(e),i&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(n===null||A||Nn||tt||Ua(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){A=n=t;try{if(f=A.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{S=A.stateNode;var I=A.memoizedProps.style,U=I!=null&&I.hasOwnProperty("display")?I.display:null;S.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(ae){ke(A,A.return,ae)}}}else if(t.tag===6){if(n===null){A=t;try{A.stateNode.nodeValue=c?"":A.memoizedProps}catch(ae){ke(A,A.return,ae)}}}else if(t.tag===18){if(n===null){A=t;try{var B=A.stateNode;c?Om(B,!0):Om(A.stateNode,!1)}catch(ae){ke(A,A.return,ae)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,eo(e,n))));break;case 19:St(t,e),Et(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,eo(e,i)));break;case 30:break;case 21:break;default:St(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(_p(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var c=n.stateNode,f=eu(e);Wr(e,f,c);break;case 5:var g=n.stateNode;n.flags&32&&(Wa(g,""),n.flags&=-33);var S=eu(e);Wr(e,S,g);break;case 3:case 4:var A=n.stateNode.containerInfo,k=eu(e);tu(e,k,A);break;default:throw Error(o(161))}}catch(Y){ke(e,e.return,Y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Vp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Mn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)zp(e,t.alternate,t),t=t.sibling}function Ua(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Zn(4,t,t.return),Ua(t);break;case 1:on(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Op(t,t.return,n),Ua(t);break;case 27:ki(t.stateNode);case 26:case 5:on(t,t.return),Ua(t);break;case 22:t.memoizedState===null&&Ua(t);break;case 30:Ua(t);break;default:Ua(t)}e=e.sibling}}function _n(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,c=e,f=t,g=f.flags;switch(f.tag){case 0:case 11:case 15:_n(c,f,n),Ri(4,f);break;case 1:if(_n(c,f,n),i=f,c=i.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(k){ke(i,i.return,k)}if(i=f,c=i.updateQueue,c!==null){var S=i.stateNode;try{var A=c.shared.hiddenCallbacks;if(A!==null)for(c.shared.hiddenCallbacks=null,c=0;c<A.length;c++)yh(A[c],S)}catch(k){ke(i,i.return,k)}}n&&g&64&&Np(f),Ai(f,f.return);break;case 27:jp(f);case 26:case 5:_n(c,f,n),n&&i===null&&g&4&&Mp(f),Ai(f,f.return);break;case 12:_n(c,f,n);break;case 31:_n(c,f,n),n&&g&4&&Up(c,f);break;case 13:_n(c,f,n),n&&g&4&&Hp(c,f);break;case 22:f.memoizedState===null&&_n(c,f,n),Ai(f,f.return);break;case 30:break;default:_n(c,f,n)}t=t.sibling}}function au(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&hi(n))}function lu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hi(e))}function Jt(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Pp(e,t,n,i),t=t.sibling}function Pp(e,t,n,i){var c=t.flags;switch(t.tag){case 0:case 11:case 15:Jt(e,t,n,i),c&2048&&Ri(9,t);break;case 1:Jt(e,t,n,i);break;case 3:Jt(e,t,n,i),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&hi(e)));break;case 12:if(c&2048){Jt(e,t,n,i),e=t.stateNode;try{var f=t.memoizedProps,g=f.id,S=f.onPostCommit;typeof S=="function"&&S(g,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){ke(t,t.return,A)}}else Jt(e,t,n,i);break;case 31:Jt(e,t,n,i);break;case 13:Jt(e,t,n,i);break;case 23:break;case 22:f=t.stateNode,g=t.alternate,t.memoizedState!==null?f._visibility&2?Jt(e,t,n,i):Ni(e,t):f._visibility&2?Jt(e,t,n,i):(f._visibility|=2,xl(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),c&2048&&au(g,t);break;case 24:Jt(e,t,n,i),c&2048&&lu(t.alternate,t);break;default:Jt(e,t,n,i)}}function xl(e,t,n,i,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var f=e,g=t,S=n,A=i,k=g.flags;switch(g.tag){case 0:case 11:case 15:xl(f,g,S,A,c),Ri(8,g);break;case 23:break;case 22:var Y=g.stateNode;g.memoizedState!==null?Y._visibility&2?xl(f,g,S,A,c):Ni(f,g):(Y._visibility|=2,xl(f,g,S,A,c)),c&&k&2048&&au(g.alternate,g);break;case 24:xl(f,g,S,A,c),c&&k&2048&&lu(g.alternate,g);break;default:xl(f,g,S,A,c)}t=t.sibling}}function Ni(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,c=i.flags;switch(i.tag){case 22:Ni(n,i),c&2048&&au(i.alternate,i);break;case 24:Ni(n,i),c&2048&&lu(i.alternate,i);break;default:Ni(n,i)}t=t.sibling}}var Oi=8192;function bl(e,t,n){if(e.subtreeFlags&Oi)for(e=e.child;e!==null;)Gp(e,t,n),e=e.sibling}function Gp(e,t,n){switch(e.tag){case 26:bl(e,t,n),e.flags&Oi&&e.memoizedState!==null&&p1(n,Zt,e.memoizedState,e.memoizedProps);break;case 5:bl(e,t,n);break;case 3:case 4:var i=Zt;Zt=mo(e.stateNode.containerInfo),bl(e,t,n),Zt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Oi,Oi=16777216,bl(e,t,n),Oi=i):bl(e,t,n));break;default:bl(e,t,n)}}function qp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Mi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];rt=i,Kp(i,e)}qp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yp(e),e=e.sibling}function Yp(e){switch(e.tag){case 0:case 11:case 15:Mi(e),e.flags&2048&&Zn(9,e,e.return);break;case 3:Mi(e);break;case 12:Mi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,to(e)):Mi(e);break;default:Mi(e)}}function to(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];rt=i,Kp(i,e)}qp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Zn(8,t,t.return),to(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,to(t));break;default:to(t)}e=e.sibling}}function Kp(e,t){for(;rt!==null;){var n=rt;switch(n.tag){case 0:case 11:case 15:Zn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:hi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,rt=i;else e:for(n=e;rt!==null;){i=rt;var c=i.sibling,f=i.return;if(Lp(i),i===n){rt=null;break e}if(c!==null){c.return=f,rt=c;break e}rt=f}}}var Ob={getCacheForType:function(e){var t=ct(Je),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ct(Je).controller.signal}},Mb=typeof WeakMap=="function"?WeakMap:Map,De=0,Ve=null,we=null,Re=0,Le=0,jt=null,Jn=!1,Sl=!1,iu=!1,jn=0,Ie=0,Wn=0,Ha=0,ru=0,Dt=0,El=0,_i=null,wt=null,ou=!1,no=0,Xp=0,ao=1/0,lo=null,ea=null,at=0,ta=null,wl=null,Dn=0,su=0,cu=null,Ip=null,ji=0,uu=null;function zt(){return(De&2)!==0&&Re!==0?Re&-Re:j.T!==null?gu():cd()}function $p(){if(Dt===0)if((Re&536870912)===0||Ne){var e=dr;dr<<=1,(dr&3932160)===0&&(dr=262144),Dt=e}else Dt=536870912;return e=Mt.current,e!==null&&(e.flags|=32),Dt}function Ct(e,t,n){(e===Ve&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(Cl(e,0),na(e,Re,Dt,!1)),Wl(e,n),((De&2)===0||e!==Ve)&&(e===Ve&&((De&2)===0&&(Ha|=n),Ie===4&&na(e,Re,Dt,!1)),sn(e))}function Fp(e,t,n){if((De&6)!==0)throw Error(o(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Jl(e,t),c=i?Db(e,t):du(e,t,!0),f=i;do{if(c===0){Sl&&!i&&na(e,t,0,!1);break}else{if(n=e.current.alternate,f&&!_b(n)){c=du(e,t,!1),f=!1;continue}if(c===2){if(f=t,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var S=e;c=_i;var A=S.current.memoizedState.isDehydrated;if(A&&(Cl(S,g).flags|=256),g=du(S,g,!1),g!==2){if(iu&&!A){S.errorRecoveryDisabledLanes|=f,Ha|=f,c=4;break e}f=wt,wt=c,f!==null&&(wt===null?wt=f:wt.push.apply(wt,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){Cl(e,0),na(e,t,0,!0);break}e:{switch(i=e,f=c,f){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:na(i,t,Dt,!Jn);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(c=no+300-Tt(),10<c)){if(na(i,t,Dt,!Jn),pr(i,0,!0)!==0)break e;Dn=t,i.timeoutHandle=Rm(Qp.bind(null,i,n,wt,lo,ou,t,Dt,Ha,El,Jn,f,"Throttled",-0,0),c);break e}Qp(i,n,wt,lo,ou,t,Dt,Ha,El,Jn,f,null,-0,0)}}break}while(!0);sn(e)}function Qp(e,t,n,i,c,f,g,S,A,k,Y,I,U,B){if(e.timeoutHandle=-1,I=t.subtreeFlags,I&8192||(I&16785408)===16785408){I={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:vn},Gp(t,f,I);var ae=(f&62914560)===f?no-Tt():(f&4194048)===f?Xp-Tt():0;if(ae=m1(I,ae),ae!==null){Dn=f,e.cancelPendingCommit=ae(lm.bind(null,e,t,f,n,i,c,g,S,A,Y,I,null,U,B)),na(e,f,g,!k);return}}lm(e,t,f,n,i,c,g,S,A)}function _b(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var c=n[i],f=c.getSnapshot;c=c.value;try{if(!Nt(f(),c))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t,n,i){t&=~ru,t&=~Ha,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var c=t;0<c;){var f=31-At(c),g=1<<f;i[f]=-1,c&=~g}n!==0&&rd(e,n,t)}function io(){return(De&6)===0?(Di(0),!1):!0}function fu(){if(we!==null){if(Le===0)var e=we.return;else e=we,En=Oa=null,Ac(e),pl=null,mi=0,e=we;for(;e!==null;)Ap(e.alternate,e),e=e.return;we=null}}function Cl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Zb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Dn=0,fu(),Ve=e,we=n=bn(e.current,null),Re=t,Le=0,jt=null,Jn=!1,Sl=Jl(e,t),iu=!1,El=Dt=ru=Ha=Wn=Ie=0,wt=_i=null,ou=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var c=31-At(i),f=1<<c;t|=e[c],i&=~f}return jn=t,Rr(),n}function Zp(e,t){xe=null,j.H=wi,t===hl||t===zr?(t=hh(),Le=3):t===mc?(t=hh(),Le=4):Le=t===qc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jt=t,we===null&&(Ie=1,$r(e,Pt(t,e.current)))}function Jp(){var e=Mt.current;return e===null?!0:(Re&4194048)===Re?Kt===null:(Re&62914560)===Re||(Re&536870912)!==0?e===Kt:!1}function Wp(){var e=j.H;return j.H=wi,e===null?wi:e}function em(){var e=j.A;return j.A=Ob,e}function ro(){Ie=4,Jn||(Re&4194048)!==Re&&Mt.current!==null||(Sl=!0),(Wn&134217727)===0&&(Ha&134217727)===0||Ve===null||na(Ve,Re,Dt,!1)}function du(e,t,n){var i=De;De|=2;var c=Wp(),f=em();(Ve!==e||Re!==t)&&(lo=null,Cl(e,t)),t=!1;var g=Ie;e:do try{if(Le!==0&&we!==null){var S=we,A=jt;switch(Le){case 8:fu(),g=6;break e;case 3:case 2:case 9:case 6:Mt.current===null&&(t=!0);var k=Le;if(Le=0,jt=null,Tl(e,S,A,k),n&&Sl){g=0;break e}break;default:k=Le,Le=0,jt=null,Tl(e,S,A,k)}}jb(),g=Ie;break}catch(Y){Zp(e,Y)}while(!0);return t&&e.shellSuspendCounter++,En=Oa=null,De=i,j.H=c,j.A=f,we===null&&(Ve=null,Re=0,Rr()),g}function jb(){for(;we!==null;)tm(we)}function Db(e,t){var n=De;De|=2;var i=Wp(),c=em();Ve!==e||Re!==t?(lo=null,ao=Tt()+500,Cl(e,t)):Sl=Jl(e,t);e:do try{if(Le!==0&&we!==null){t=we;var f=jt;t:switch(Le){case 1:Le=0,jt=null,Tl(e,t,f,1);break;case 2:case 9:if(fh(f)){Le=0,jt=null,nm(t);break}t=function(){Le!==2&&Le!==9||Ve!==e||(Le=7),sn(e)},f.then(t,t);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:fh(f)?(Le=0,jt=null,nm(t)):(Le=0,jt=null,Tl(e,t,f,7));break;case 5:var g=null;switch(we.tag){case 26:g=we.memoizedState;case 5:case 27:var S=we;if(g?Pm(g):S.stateNode.complete){Le=0,jt=null;var A=S.sibling;if(A!==null)we=A;else{var k=S.return;k!==null?(we=k,oo(k)):we=null}break t}}Le=0,jt=null,Tl(e,t,f,5);break;case 6:Le=0,jt=null,Tl(e,t,f,6);break;case 8:fu(),Ie=6;break e;default:throw Error(o(462))}}zb();break}catch(Y){Zp(e,Y)}while(!0);return En=Oa=null,j.H=i,j.A=c,De=n,we!==null?0:(Ve=null,Re=0,Rr(),Ie)}function zb(){for(;we!==null&&!ax();)tm(we)}function tm(e){var t=Tp(e.alternate,e,jn);e.memoizedProps=e.pendingProps,t===null?oo(e):we=t}function nm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=xp(n,t,t.pendingProps,t.type,void 0,Re);break;case 11:t=xp(n,t,t.pendingProps,t.type.render,t.ref,Re);break;case 5:Ac(t);default:Ap(n,t),t=we=eh(t,jn),t=Tp(n,t,jn)}e.memoizedProps=e.pendingProps,t===null?oo(e):we=t}function Tl(e,t,n,i){En=Oa=null,Ac(t),pl=null,mi=0;var c=t.return;try{if(Eb(e,c,t,n,Re)){Ie=1,$r(e,Pt(n,e.current)),we=null;return}}catch(f){if(c!==null)throw we=c,f;Ie=1,$r(e,Pt(n,e.current)),we=null;return}t.flags&32768?(Ne||i===1?e=!0:Sl||(Re&536870912)!==0?e=!1:(Jn=e=!0,(i===2||i===9||i===3||i===6)&&(i=Mt.current,i!==null&&i.tag===13&&(i.flags|=16384))),am(t,e)):oo(t)}function oo(e){var t=e;do{if((t.flags&32768)!==0){am(t,Jn);return}e=t.return;var n=Tb(t.alternate,t,jn);if(n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Ie===0&&(Ie=5)}function am(e,t){do{var n=Rb(e.alternate,e);if(n!==null){n.flags&=32767,we=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){we=e;return}we=e=n}while(e!==null);Ie=6,we=null}function lm(e,t,n,i,c,f,g,S,A){e.cancelPendingCommit=null;do so();while(at!==0);if((De&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(f=t.lanes|t.childLanes,f|=ec,hx(e,n,f,g,S,A),e===Ve&&(we=Ve=null,Re=0),wl=t,ta=e,Dn=n,su=f,cu=c,Ip=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hb(ur,function(){return cm(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=j.T,j.T=null,c=K.p,K.p=2,g=De,De|=4;try{Ab(e,t,n)}finally{De=g,K.p=c,j.T=i}}at=1,im(),rm(),om()}}function im(){if(at===1){at=0;var e=ta,t=wl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=j.T,j.T=null;var i=K.p;K.p=2;var c=De;De|=4;try{Bp(t,e);var f=Cu,g=Kd(e.containerInfo),S=f.focusedElem,A=f.selectionRange;if(g!==S&&S&&S.ownerDocument&&Yd(S.ownerDocument.documentElement,S)){if(A!==null&&Fs(S)){var k=A.start,Y=A.end;if(Y===void 0&&(Y=k),"selectionStart"in S)S.selectionStart=k,S.selectionEnd=Math.min(Y,S.value.length);else{var I=S.ownerDocument||document,U=I&&I.defaultView||window;if(U.getSelection){var B=U.getSelection(),ae=S.textContent.length,he=Math.min(A.start,ae),Be=A.end===void 0?he:Math.min(A.end,ae);!B.extend&&he>Be&&(g=Be,Be=he,he=g);var D=qd(S,he),O=qd(S,Be);if(D&&O&&(B.rangeCount!==1||B.anchorNode!==D.node||B.anchorOffset!==D.offset||B.focusNode!==O.node||B.focusOffset!==O.offset)){var L=I.createRange();L.setStart(D.node,D.offset),B.removeAllRanges(),he>Be?(B.addRange(L),B.extend(O.node,O.offset)):(L.setEnd(O.node,O.offset),B.addRange(L))}}}}for(I=[],B=S;B=B.parentNode;)B.nodeType===1&&I.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<I.length;S++){var X=I[S];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}So=!!wu,Cu=wu=null}finally{De=c,K.p=i,j.T=n}}e.current=t,at=2}}function rm(){if(at===2){at=0;var e=ta,t=wl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=j.T,j.T=null;var i=K.p;K.p=2;var c=De;De|=4;try{zp(e,t.alternate,t)}finally{De=c,K.p=i,j.T=n}}at=3}}function om(){if(at===4||at===3){at=0,lx();var e=ta,t=wl,n=Dn,i=Ip;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?at=5:(at=0,wl=ta=null,sm(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ea=null),Ms(n),t=t.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Zl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=j.T,c=K.p,K.p=2,j.T=null;try{for(var f=e.onRecoverableError,g=0;g<i.length;g++){var S=i[g];f(S.value,{componentStack:S.stack})}}finally{j.T=t,K.p=c}}(Dn&3)!==0&&so(),sn(e),c=e.pendingLanes,(n&261930)!==0&&(c&42)!==0?e===uu?ji++:(ji=0,uu=e):ji=0,Di(0)}}function sm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,hi(t)))}function so(){return im(),rm(),om(),cm()}function cm(){if(at!==5)return!1;var e=ta,t=su;su=0;var n=Ms(Dn),i=j.T,c=K.p;try{K.p=32>n?32:n,j.T=null,n=cu,cu=null;var f=ta,g=Dn;if(at=0,wl=ta=null,Dn=0,(De&6)!==0)throw Error(o(331));var S=De;if(De|=4,Yp(f.current),Pp(f,f.current,g,n),De=S,Di(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Zl,f)}catch{}return!0}finally{K.p=c,j.T=i,sm(e,t)}}function um(e,t,n){t=Pt(n,t),t=Gc(e.stateNode,t,2),e=$n(e,t,2),e!==null&&(Wl(e,2),sn(e))}function ke(e,t,n){if(e.tag===3)um(e,e,n);else for(;t!==null;){if(t.tag===3){um(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ea===null||!ea.has(i))){e=Pt(n,e),n=fp(2),i=$n(t,n,2),i!==null&&(dp(n,i,t,e),Wl(i,2),sn(i));break}}t=t.return}}function hu(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Mb;var c=new Set;i.set(t,c)}else c=i.get(t),c===void 0&&(c=new Set,i.set(t,c));c.has(n)||(iu=!0,c.add(n),e=Lb.bind(null,e,t,n),t.then(e,e))}function Lb(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ve===e&&(Re&n)===n&&(Ie===4||Ie===3&&(Re&62914560)===Re&&300>Tt()-no?(De&2)===0&&Cl(e,0):ru|=n,El===Re&&(El=0)),sn(e)}function fm(e,t){t===0&&(t=id()),e=Ra(e,t),e!==null&&(Wl(e,t),sn(e))}function kb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fm(e,n)}function Ub(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,c=e.memoizedState;c!==null&&(n=c.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),fm(e,n)}function Hb(e,t){return Rs(e,t)}var co=null,Rl=null,pu=!1,uo=!1,mu=!1,aa=0;function sn(e){e!==Rl&&e.next===null&&(Rl===null?co=Rl=e:Rl=Rl.next=e),uo=!0,pu||(pu=!0,Vb())}function Di(e,t){if(!mu&&uo){mu=!0;do for(var n=!1,i=co;i!==null;){if(e!==0){var c=i.pendingLanes;if(c===0)var f=0;else{var g=i.suspendedLanes,S=i.pingedLanes;f=(1<<31-At(42|e)+1)-1,f&=c&~(g&~S),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(n=!0,mm(i,f))}else f=Re,f=pr(i,i===Ve?f:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(f&3)===0||Jl(i,f)||(n=!0,mm(i,f));i=i.next}while(n);mu=!1}}function Bb(){dm()}function dm(){uo=pu=!1;var e=0;aa!==0&&Qb()&&(e=aa);for(var t=Tt(),n=null,i=co;i!==null;){var c=i.next,f=hm(i,t);f===0?(i.next=null,n===null?co=c:n.next=c,c===null&&(Rl=n)):(n=i,(e!==0||(f&3)!==0)&&(uo=!0)),i=c}at!==0&&at!==5||Di(e),aa!==0&&(aa=0)}function hm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-At(f),S=1<<g,A=c[g];A===-1?((S&n)===0||(S&i)!==0)&&(c[g]=dx(S,t)):A<=t&&(e.expiredLanes|=S),f&=~S}if(t=Ve,n=Re,n=pr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&As(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Jl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&As(i),Ms(n)){case 2:case 8:n=ad;break;case 32:n=ur;break;case 268435456:n=ld;break;default:n=ur}return i=pm.bind(null,e),n=Rs(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&As(i),e.callbackPriority=2,e.callbackNode=null,2}function pm(e,t){if(at!==0&&at!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(so()&&e.callbackNode!==n)return null;var i=Re;return i=pr(e,e===Ve?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Fp(e,i,t),hm(e,Tt()),e.callbackNode!=null&&e.callbackNode===n?pm.bind(null,e):null)}function mm(e,t){if(so())return null;Fp(e,t,!0)}function Vb(){Jb(function(){(De&6)!==0?Rs(nd,Bb):dm()})}function gu(){if(aa===0){var e=fl;e===0&&(e=fr,fr<<=1,(fr&261888)===0&&(fr=256)),aa=e}return aa}function gm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vr(""+e)}function ym(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Pb(e,t,n,i,c){if(t==="submit"&&n&&n.stateNode===c){var f=gm((c[vt]||null).action),g=i.submitter;g&&(t=(t=g[vt]||null)?gm(t.formAction):g.getAttribute("formAction"),t!==null&&(f=t,g=null));var S=new Er("action","action",null,i,c);e.push({event:S,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(aa!==0){var A=g?ym(c,g):new FormData(c);kc(n,{pending:!0,data:A,method:c.method,action:f},null,A)}}else typeof f=="function"&&(S.preventDefault(),A=g?ym(c,g):new FormData(c),kc(n,{pending:!0,data:A,method:c.method,action:f},f,A))},currentTarget:c}]})}}for(var yu=0;yu<Ws.length;yu++){var vu=Ws[yu],Gb=vu.toLowerCase(),qb=vu[0].toUpperCase()+vu.slice(1);Qt(Gb,"on"+qb)}Qt($d,"onAnimationEnd"),Qt(Fd,"onAnimationIteration"),Qt(Qd,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(ib,"onTransitionRun"),Qt(rb,"onTransitionStart"),Qt(ob,"onTransitionCancel"),Qt(Zd,"onTransitionEnd"),Za("onMouseEnter",["mouseout","mouseover"]),Za("onMouseLeave",["mouseout","mouseover"]),Za("onPointerEnter",["pointerout","pointerover"]),Za("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zi));function vm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],c=i.event;i=i.listeners;e:{var f=void 0;if(t)for(var g=i.length-1;0<=g;g--){var S=i[g],A=S.instance,k=S.currentTarget;if(S=S.listener,A!==f&&c.isPropagationStopped())break e;f=S,c.currentTarget=k;try{f(c)}catch(Y){Tr(Y)}c.currentTarget=null,f=A}else for(g=0;g<i.length;g++){if(S=i[g],A=S.instance,k=S.currentTarget,S=S.listener,A!==f&&c.isPropagationStopped())break e;f=S,c.currentTarget=k;try{f(c)}catch(Y){Tr(Y)}c.currentTarget=null,f=A}}}}function Ce(e,t){var n=t[_s];n===void 0&&(n=t[_s]=new Set);var i=e+"__bubble";n.has(i)||(xm(t,e,2,!1),n.add(i))}function xu(e,t,n){var i=0;t&&(i|=4),xm(n,e,i,t)}var fo="_reactListening"+Math.random().toString(36).slice(2);function bu(e){if(!e[fo]){e[fo]=!0,dd.forEach(function(n){n!=="selectionchange"&&(Yb.has(n)||xu(n,!1,e),xu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fo]||(t[fo]=!0,xu("selectionchange",!1,t))}}function xm(e,t,n,i){switch($m(t)){case 2:var c=v1;break;case 8:c=x1;break;default:c=Lu}n=c.bind(null,t,n,e),c=void 0,!Vs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),i?c!==void 0?e.addEventListener(t,n,{capture:!0,passive:c}):e.addEventListener(t,n,!0):c!==void 0?e.addEventListener(t,n,{passive:c}):e.addEventListener(t,n,!1)}function Su(e,t,n,i,c){var f=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var g=i.tag;if(g===3||g===4){var S=i.stateNode.containerInfo;if(S===c)break;if(g===4)for(g=i.return;g!==null;){var A=g.tag;if((A===3||A===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;S!==null;){if(g=$a(S),g===null)return;if(A=g.tag,A===5||A===6||A===26||A===27){i=f=g;continue e}S=S.parentNode}}i=i.return}Cd(function(){var k=f,Y=Hs(n),I=[];e:{var U=Jd.get(e);if(U!==void 0){var B=Er,ae=e;switch(e){case"keypress":if(br(n)===0)break e;case"keydown":case"keyup":B=Ux;break;case"focusin":ae="focus",B=Ys;break;case"focusout":ae="blur",B=Ys;break;case"beforeblur":case"afterblur":B=Ys;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Vx;break;case $d:case Fd:case Qd:B=Nx;break;case Zd:B=Gx;break;case"scroll":case"scrollend":B=wx;break;case"wheel":B=Yx;break;case"copy":case"cut":case"paste":B=Mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Od;break;case"toggle":case"beforetoggle":B=Xx}var he=(t&4)!==0,Be=!he&&(e==="scroll"||e==="scrollend"),D=he?U!==null?U+"Capture":null:U;he=[];for(var O=k,L;O!==null;){var X=O;if(L=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||L===null||D===null||(X=ni(O,D),X!=null&&he.push(Li(O,X,L))),Be)break;O=O.return}0<he.length&&(U=new B(U,ae,null,n,Y),I.push({event:U,listeners:he}))}}if((t&7)===0){e:{if(U=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",U&&n!==Us&&(ae=n.relatedTarget||n.fromElement)&&($a(ae)||ae[Ia]))break e;if((B||U)&&(U=Y.window===Y?Y:(U=Y.ownerDocument)?U.defaultView||U.parentWindow:window,B?(ae=n.relatedTarget||n.toElement,B=k,ae=ae?$a(ae):null,ae!==null&&(Be=u(ae),he=ae.tag,ae!==Be||he!==5&&he!==27&&he!==6)&&(ae=null)):(B=null,ae=k),B!==ae)){if(he=Ad,X="onMouseLeave",D="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(he=Od,X="onPointerLeave",D="onPointerEnter",O="pointer"),Be=B==null?U:ti(B),L=ae==null?U:ti(ae),U=new he(X,O+"leave",B,n,Y),U.target=Be,U.relatedTarget=L,X=null,$a(Y)===k&&(he=new he(D,O+"enter",ae,n,Y),he.target=L,he.relatedTarget=Be,X=he),Be=X,B&&ae)t:{for(he=Kb,D=B,O=ae,L=0,X=D;X;X=he(X))L++;X=0;for(var fe=O;fe;fe=he(fe))X++;for(;0<L-X;)D=he(D),L--;for(;0<X-L;)O=he(O),X--;for(;L--;){if(D===O||O!==null&&D===O.alternate){he=D;break t}D=he(D),O=he(O)}he=null}else he=null;B!==null&&bm(I,U,B,he,!1),ae!==null&&Be!==null&&bm(I,Be,ae,he,!0)}}e:{if(U=k?ti(k):window,B=U.nodeName&&U.nodeName.toLowerCase(),B==="select"||B==="input"&&U.type==="file")var _e=Ud;else if(Ld(U))if(Hd)_e=nb;else{_e=eb;var ce=Wx}else B=U.nodeName,!B||B.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?k&&ks(k.elementType)&&(_e=Ud):_e=tb;if(_e&&(_e=_e(e,k))){kd(I,_e,n,Y);break e}ce&&ce(e,U,k),e==="focusout"&&k&&U.type==="number"&&k.memoizedProps.value!=null&&Ls(U,"number",U.value)}switch(ce=k?ti(k):window,e){case"focusin":(Ld(ce)||ce.contentEditable==="true")&&(al=ce,Qs=k,ui=null);break;case"focusout":ui=Qs=al=null;break;case"mousedown":Zs=!0;break;case"contextmenu":case"mouseup":case"dragend":Zs=!1,Xd(I,n,Y);break;case"selectionchange":if(lb)break;case"keydown":case"keyup":Xd(I,n,Y)}var Se;if(Xs)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else nl?Dd(e,n)&&(Ae="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ae="onCompositionStart");Ae&&(Md&&n.locale!=="ko"&&(nl||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&nl&&(Se=Td()):(Pn=Y,Ps="value"in Pn?Pn.value:Pn.textContent,nl=!0)),ce=ho(k,Ae),0<ce.length&&(Ae=new Nd(Ae,e,null,n,Y),I.push({event:Ae,listeners:ce}),Se?Ae.data=Se:(Se=zd(n),Se!==null&&(Ae.data=Se)))),(Se=$x?Fx(e,n):Qx(e,n))&&(Ae=ho(k,"onBeforeInput"),0<Ae.length&&(ce=new Nd("onBeforeInput","beforeinput",null,n,Y),I.push({event:ce,listeners:Ae}),ce.data=Se)),Pb(I,e,k,n,Y)}vm(I,t)})}function Li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ho(e,t){for(var n=t+"Capture",i=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=ni(e,n),c!=null&&i.unshift(Li(e,c,f)),c=ni(e,t),c!=null&&i.push(Li(e,c,f))),e.tag===3)return i;e=e.return}return[]}function Kb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function bm(e,t,n,i,c){for(var f=t._reactName,g=[];n!==null&&n!==i;){var S=n,A=S.alternate,k=S.stateNode;if(S=S.tag,A!==null&&A===i)break;S!==5&&S!==26&&S!==27||k===null||(A=k,c?(k=ni(n,f),k!=null&&g.unshift(Li(n,k,A))):c||(k=ni(n,f),k!=null&&g.push(Li(n,k,A)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var Xb=/\r\n?/g,Ib=/\u0000|\uFFFD/g;function Sm(e){return(typeof e=="string"?e:""+e).replace(Xb,`
`).replace(Ib,"")}function Em(e,t){return t=Sm(t),Sm(e)===t}function He(e,t,n,i,c,f){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Wa(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Wa(e,""+i);break;case"className":gr(e,"class",i);break;case"tabIndex":gr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":gr(e,n,i);break;case"style":Ed(e,i,f);break;case"data":if(t!=="object"){gr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=vr(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(n==="formAction"?(t!=="input"&&He(e,t,"name",c.name,c,null),He(e,t,"formEncType",c.formEncType,c,null),He(e,t,"formMethod",c.formMethod,c,null),He(e,t,"formTarget",c.formTarget,c,null)):(He(e,t,"encType",c.encType,c,null),He(e,t,"method",c.method,c,null),He(e,t,"target",c.target,c,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=vr(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=vn);break;case"onScroll":i!=null&&Ce("scroll",e);break;case"onScrollEnd":i!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=vr(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),mr(e,"popover",i);break;case"xlinkActuate":yn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":yn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":yn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":yn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":yn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":yn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":yn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":yn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":yn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":mr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Sx.get(n)||n,mr(e,n,i))}}function Eu(e,t,n,i,c,f){switch(n){case"style":Ed(e,i,f);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Wa(e,i):(typeof i=="number"||typeof i=="bigint")&&Wa(e,""+i);break;case"onScroll":i!=null&&Ce("scroll",e);break;case"onScrollEnd":i!=null&&Ce("scrollend",e);break;case"onClick":i!=null&&(e.onclick=vn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!hd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),t=n.slice(2,c?n.length-7:void 0),f=e[vt]||null,f=f!=null?f[n]:null,typeof f=="function"&&e.removeEventListener(t,f,c),typeof i=="function")){typeof f!="function"&&f!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,c);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):mr(e,n,i)}}}function ft(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var i=!1,c=!1,f;for(f in n)if(n.hasOwnProperty(f)){var g=n[f];if(g!=null)switch(f){case"src":i=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:He(e,t,f,g,n,null)}}c&&He(e,t,"srcSet",n.srcSet,n,null),i&&He(e,t,"src",n.src,n,null);return;case"input":Ce("invalid",e);var S=f=g=c=null,A=null,k=null;for(i in n)if(n.hasOwnProperty(i)){var Y=n[i];if(Y!=null)switch(i){case"name":c=Y;break;case"type":g=Y;break;case"checked":A=Y;break;case"defaultChecked":k=Y;break;case"value":f=Y;break;case"defaultValue":S=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(o(137,t));break;default:He(e,t,i,Y,n,null)}}vd(e,f,S,A,k,g,c,!1);return;case"select":Ce("invalid",e),i=g=f=null;for(c in n)if(n.hasOwnProperty(c)&&(S=n[c],S!=null))switch(c){case"value":f=S;break;case"defaultValue":g=S;break;case"multiple":i=S;default:He(e,t,c,S,n,null)}t=f,n=g,e.multiple=!!i,t!=null?Ja(e,!!i,t,!1):n!=null&&Ja(e,!!i,n,!0);return;case"textarea":Ce("invalid",e),f=c=i=null;for(g in n)if(n.hasOwnProperty(g)&&(S=n[g],S!=null))switch(g){case"value":i=S;break;case"defaultValue":c=S;break;case"children":f=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(o(91));break;default:He(e,t,g,S,n,null)}bd(e,i,c,f);return;case"option":for(A in n)n.hasOwnProperty(A)&&(i=n[A],i!=null)&&(A==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":He(e,t,A,i,n,null));return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(i=0;i<zi.length;i++)Ce(zi[i],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in n)if(n.hasOwnProperty(k)&&(i=n[k],i!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:He(e,t,k,i,n,null)}return;default:if(ks(t)){for(Y in n)n.hasOwnProperty(Y)&&(i=n[Y],i!==void 0&&Eu(e,t,Y,i,n,void 0));return}}for(S in n)n.hasOwnProperty(S)&&(i=n[S],i!=null&&He(e,t,S,i,n,null))}function $b(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,S=null,A=null,k=null,Y=null;for(B in n){var I=n[B];if(n.hasOwnProperty(B)&&I!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":A=I;default:i.hasOwnProperty(B)||He(e,t,B,null,i,I)}}for(var U in i){var B=i[U];if(I=n[U],i.hasOwnProperty(U)&&(B!=null||I!=null))switch(U){case"type":f=B;break;case"name":c=B;break;case"checked":k=B;break;case"defaultChecked":Y=B;break;case"value":g=B;break;case"defaultValue":S=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(o(137,t));break;default:B!==I&&He(e,t,U,B,i,I)}}zs(e,g,S,A,k,Y,f,c);return;case"select":B=g=S=U=null;for(f in n)if(A=n[f],n.hasOwnProperty(f)&&A!=null)switch(f){case"value":break;case"multiple":B=A;default:i.hasOwnProperty(f)||He(e,t,f,null,i,A)}for(c in i)if(f=i[c],A=n[c],i.hasOwnProperty(c)&&(f!=null||A!=null))switch(c){case"value":U=f;break;case"defaultValue":S=f;break;case"multiple":g=f;default:f!==A&&He(e,t,c,f,i,A)}t=S,n=g,i=B,U!=null?Ja(e,!!n,U,!1):!!i!=!!n&&(t!=null?Ja(e,!!n,t,!0):Ja(e,!!n,n?[]:"",!1));return;case"textarea":B=U=null;for(S in n)if(c=n[S],n.hasOwnProperty(S)&&c!=null&&!i.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:He(e,t,S,null,i,c)}for(g in i)if(c=i[g],f=n[g],i.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":U=c;break;case"defaultValue":B=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:c!==f&&He(e,t,g,c,i,f)}xd(e,U,B);return;case"option":for(var ae in n)U=n[ae],n.hasOwnProperty(ae)&&U!=null&&!i.hasOwnProperty(ae)&&(ae==="selected"?e.selected=!1:He(e,t,ae,null,i,U));for(A in i)U=i[A],B=n[A],i.hasOwnProperty(A)&&U!==B&&(U!=null||B!=null)&&(A==="selected"?e.selected=U&&typeof U!="function"&&typeof U!="symbol":He(e,t,A,U,i,B));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in n)U=n[he],n.hasOwnProperty(he)&&U!=null&&!i.hasOwnProperty(he)&&He(e,t,he,null,i,U);for(k in i)if(U=i[k],B=n[k],i.hasOwnProperty(k)&&U!==B&&(U!=null||B!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,t));break;default:He(e,t,k,U,i,B)}return;default:if(ks(t)){for(var Be in n)U=n[Be],n.hasOwnProperty(Be)&&U!==void 0&&!i.hasOwnProperty(Be)&&Eu(e,t,Be,void 0,i,U);for(Y in i)U=i[Y],B=n[Y],!i.hasOwnProperty(Y)||U===B||U===void 0&&B===void 0||Eu(e,t,Y,U,i,B);return}}for(var D in n)U=n[D],n.hasOwnProperty(D)&&U!=null&&!i.hasOwnProperty(D)&&He(e,t,D,null,i,U);for(I in i)U=i[I],B=n[I],!i.hasOwnProperty(I)||U===B||U==null&&B==null||He(e,t,I,U,i,B)}function wm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var c=n[i],f=c.transferSize,g=c.initiatorType,S=c.duration;if(f&&S&&wm(g)){for(g=0,S=c.responseEnd,i+=1;i<n.length;i++){var A=n[i],k=A.startTime;if(k>S)break;var Y=A.transferSize,I=A.initiatorType;Y&&wm(I)&&(A=A.responseEnd,g+=Y*(A<S?1:(S-k)/(A-k)))}if(--i,t+=8*(f+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wu=null,Cu=null;function po(e){return e.nodeType===9?e:e.ownerDocument}function Cm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Tu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ru=null;function Qb(){var e=window.event;return e&&e.type==="popstate"?e===Ru?!1:(Ru=e,!0):(Ru=null,!1)}var Rm=typeof setTimeout=="function"?setTimeout:void 0,Zb=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,Jb=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(e){return Am.resolve(null).then(e).catch(Wb)}:Rm;function Wb(e){setTimeout(function(){throw e})}function la(e){return e==="head"}function Nm(e,t){var n=t,i=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(c),Ml(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")ki(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ki(n);for(var f=n.firstChild;f;){var g=f.nextSibling,S=f.nodeName;f[ei]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=g}}else n==="body"&&ki(e.ownerDocument.body);n=c}while(n);Ml(t)}function Om(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Au(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Au(n),js(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function e1(e,t,n,i){for(;e.nodeType===1;){var c=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[ei])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Xt(e.nextSibling),e===null)break}return null}function t1(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Xt(e.nextSibling),e===null))return null;return e}function Mm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Xt(e.nextSibling),e===null))return null;return e}function Nu(e){return e.data==="$?"||e.data==="$~"}function Ou(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function n1(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Mu=null;function _m(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Xt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function jm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Dm(e,t,n){switch(t=po(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function ki(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);js(e)}var It=new Map,zm=new Set;function mo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var zn=K.d;K.d={f:a1,r:l1,D:i1,C:r1,L:o1,m:s1,X:u1,S:c1,M:f1};function a1(){var e=zn.f(),t=io();return e||t}function l1(e){var t=Fa(e);t!==null&&t.tag===5&&t.type==="form"?Zh(t):zn.r(e)}var Al=typeof document>"u"?null:document;function Lm(e,t,n){var i=Al;if(i&&typeof t=="string"&&t){var c=Bt(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),zm.has(c)||(zm.add(c),e={rel:e,crossOrigin:n,href:t},i.querySelector(c)===null&&(t=i.createElement("link"),ft(t,"link",e),it(t),i.head.appendChild(t)))}}function i1(e){zn.D(e),Lm("dns-prefetch",e,null)}function r1(e,t){zn.C(e,t),Lm("preconnect",e,t)}function o1(e,t,n){zn.L(e,t,n);var i=Al;if(i&&e&&t){var c='link[rel="preload"][as="'+Bt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+Bt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+Bt(n.imageSizes)+'"]')):c+='[href="'+Bt(e)+'"]';var f=c;switch(t){case"style":f=Nl(e);break;case"script":f=Ol(e)}It.has(f)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),It.set(f,e),i.querySelector(c)!==null||t==="style"&&i.querySelector(Ui(f))||t==="script"&&i.querySelector(Hi(f))||(t=i.createElement("link"),ft(t,"link",e),it(t),i.head.appendChild(t)))}}function s1(e,t){zn.m(e,t);var n=Al;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Bt(i)+'"][href="'+Bt(e)+'"]',f=c;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ol(e)}if(!It.has(f)&&(e=y({rel:"modulepreload",href:e},t),It.set(f,e),n.querySelector(c)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Hi(f)))return}i=n.createElement("link"),ft(i,"link",e),it(i),n.head.appendChild(i)}}}function c1(e,t,n){zn.S(e,t,n);var i=Al;if(i&&e){var c=Qa(i).hoistableStyles,f=Nl(e);t=t||"default";var g=c.get(f);if(!g){var S={loading:0,preload:null};if(g=i.querySelector(Ui(f)))S.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=It.get(f))&&_u(e,n);var A=g=i.createElement("link");it(A),ft(A,"link",e),A._p=new Promise(function(k,Y){A.onload=k,A.onerror=Y}),A.addEventListener("load",function(){S.loading|=1}),A.addEventListener("error",function(){S.loading|=2}),S.loading|=4,go(g,t,i)}g={type:"stylesheet",instance:g,count:1,state:S},c.set(f,g)}}}function u1(e,t){zn.X(e,t);var n=Al;if(n&&e){var i=Qa(n).hoistableScripts,c=Ol(e),f=i.get(c);f||(f=n.querySelector(Hi(c)),f||(e=y({src:e,async:!0},t),(t=It.get(c))&&ju(e,t),f=n.createElement("script"),it(f),ft(f,"link",e),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},i.set(c,f))}}function f1(e,t){zn.M(e,t);var n=Al;if(n&&e){var i=Qa(n).hoistableScripts,c=Ol(e),f=i.get(c);f||(f=n.querySelector(Hi(c)),f||(e=y({src:e,async:!0,type:"module"},t),(t=It.get(c))&&ju(e,t),f=n.createElement("script"),it(f),ft(f,"link",e),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},i.set(c,f))}}function km(e,t,n,i){var c=(c=me.current)?mo(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Nl(n.href),n=Qa(c).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Nl(n.href);var f=Qa(c).hoistableStyles,g=f.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=c.querySelector(Ui(e)))&&!f._p&&(g.instance=f,g.state.loading=5),It.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},It.set(e,n),f||d1(c,e,n,g.state))),t&&i===null)throw Error(o(528,""));return g}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ol(n),n=Qa(c).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Nl(e){return'href="'+Bt(e)+'"'}function Ui(e){return'link[rel="stylesheet"]['+e+"]"}function Um(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function d1(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ft(t,"link",n),it(t),e.head.appendChild(t))}function Ol(e){return'[src="'+Bt(e)+'"]'}function Hi(e){return"script[async]"+e}function Hm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Bt(n.href)+'"]');if(i)return t.instance=i,it(i),i;var c=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),it(i),ft(i,"style",c),go(i,n.precedence,e),t.instance=i;case"stylesheet":c=Nl(n.href);var f=e.querySelector(Ui(c));if(f)return t.state.loading|=4,t.instance=f,it(f),f;i=Um(n),(c=It.get(c))&&_u(i,c),f=(e.ownerDocument||e).createElement("link"),it(f);var g=f;return g._p=new Promise(function(S,A){g.onload=S,g.onerror=A}),ft(f,"link",i),t.state.loading|=4,go(f,n.precedence,e),t.instance=f;case"script":return f=Ol(n.src),(c=e.querySelector(Hi(f)))?(t.instance=c,it(c),c):(i=n,(c=It.get(f))&&(i=y({},n),ju(i,c)),e=e.ownerDocument||e,c=e.createElement("script"),it(c),ft(c,"link",i),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,go(i,n.precedence,e));return t.instance}function go(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=i.length?i[i.length-1]:null,f=c,g=0;g<i.length;g++){var S=i[g];if(S.dataset.precedence===t)f=S;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function _u(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ju(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var yo=null;function Bm(e,t,n){if(yo===null){var i=new Map,c=yo=new Map;c.set(n,i)}else c=yo,i=c.get(n),i||(i=new Map,c.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),c=0;c<n.length;c++){var f=n[c];if(!(f[ei]||f[ot]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(t)||"";g=e+g;var S=i.get(g);S?S.push(f):i.set(g,[f])}}return i}function Vm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function h1(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Pm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function p1(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Nl(i.href),f=t.querySelector(Ui(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=vo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=f,it(f);return}f=t.ownerDocument||t,i=Um(i),(c=It.get(c))&&_u(i,c),f=f.createElement("link"),it(f);var g=f;g._p=new Promise(function(S,A){g.onload=S,g.onerror=A}),ft(f,"link",i),n.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=vo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Du=0;function m1(e,t){return e.stylesheets&&e.count===0&&bo(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&bo(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+t);0<e.imgBytes&&Du===0&&(Du=62500*Fb());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&bo(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Du?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(c)}}:null}function vo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)bo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xo=null;function bo(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xo=new Map,t.forEach(g1,e),xo=null,vo.call(e))}function g1(e,t){if(!(t.state.loading&4)){var n=xo.get(e);if(n)var i=n.get(null);else{n=new Map,xo.set(e,n);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(n.set(g.dataset.precedence,g),i=g)}i&&n.set(null,i)}c=t.instance,g=c.getAttribute("data-precedence"),f=n.get(g)||i,f===i&&n.set(null,c),n.set(g,c),this.count++,i=vo.bind(this),c.addEventListener("load",i),c.addEventListener("error",i),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Bi={$$typeof:z,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function y1(e,t,n,i,c,f,g,S,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ns(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ns(0),this.hiddenUpdates=Ns(null),this.identifierPrefix=i,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Gm(e,t,n,i,c,f,g,S,A,k,Y,I){return e=new y1(e,t,n,g,A,k,Y,I,S),t=1,f===!0&&(t|=24),f=Ot(3,null,null,t),e.current=f,f.stateNode=e,t=dc(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:i,isDehydrated:n,cache:t},gc(f),e}function qm(e){return e?(e=rl,e):rl}function Ym(e,t,n,i,c,f){c=qm(c),i.context===null?i.context=c:i.pendingContext=c,i=In(t),i.payload={element:n},f=f===void 0?null:f,f!==null&&(i.callback=f),n=$n(e,i,t),n!==null&&(Ct(n,e,t),yi(n,e,t))}function Km(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zu(e,t){Km(e,t),(e=e.alternate)&&Km(e,t)}function Xm(e){if(e.tag===13||e.tag===31){var t=Ra(e,67108864);t!==null&&Ct(t,e,67108864),zu(e,67108864)}}function Im(e){if(e.tag===13||e.tag===31){var t=zt();t=Os(t);var n=Ra(e,t);n!==null&&Ct(n,e,t),zu(e,t)}}var So=!0;function v1(e,t,n,i){var c=j.T;j.T=null;var f=K.p;try{K.p=2,Lu(e,t,n,i)}finally{K.p=f,j.T=c}}function x1(e,t,n,i){var c=j.T;j.T=null;var f=K.p;try{K.p=8,Lu(e,t,n,i)}finally{K.p=f,j.T=c}}function Lu(e,t,n,i){if(So){var c=ku(i);if(c===null)Su(e,t,i,Eo,n),Fm(e,i);else if(S1(c,e,t,n,i))i.stopPropagation();else if(Fm(e,i),t&4&&-1<b1.indexOf(e)){for(;c!==null;){var f=Fa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Sa(f.pendingLanes);if(g!==0){var S=f;for(S.pendingLanes|=2,S.entangledLanes|=2;g;){var A=1<<31-At(g);S.entanglements[1]|=A,g&=~A}sn(f),(De&6)===0&&(ao=Tt()+500,Di(0))}}break;case 31:case 13:S=Ra(f,2),S!==null&&Ct(S,f,2),io(),zu(f,2)}if(f=ku(i),f===null&&Su(e,t,i,Eo,n),f===c)break;c=f}c!==null&&i.stopPropagation()}else Su(e,t,i,null,n)}}function ku(e){return e=Hs(e),Uu(e)}var Eo=null;function Uu(e){if(Eo=null,e=$a(e),e!==null){var t=u(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=d(t),e!==null)return e;e=null}else if(n===31){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Eo=e,null}function $m(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ix()){case nd:return 2;case ad:return 8;case ur:case rx:return 32;case ld:return 268435456;default:return 32}default:return 32}}var Hu=!1,ia=null,ra=null,oa=null,Vi=new Map,Pi=new Map,sa=[],b1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fm(e,t){switch(e){case"focusin":case"focusout":ia=null;break;case"dragenter":case"dragleave":ra=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":Vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pi.delete(t.pointerId)}}function Gi(e,t,n,i,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:f,targetContainers:[c]},t!==null&&(t=Fa(t),t!==null&&Xm(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function S1(e,t,n,i,c){switch(t){case"focusin":return ia=Gi(ia,e,t,n,i,c),!0;case"dragenter":return ra=Gi(ra,e,t,n,i,c),!0;case"mouseover":return oa=Gi(oa,e,t,n,i,c),!0;case"pointerover":var f=c.pointerId;return Vi.set(f,Gi(Vi.get(f)||null,e,t,n,i,c)),!0;case"gotpointercapture":return f=c.pointerId,Pi.set(f,Gi(Pi.get(f)||null,e,t,n,i,c)),!0}return!1}function Qm(e){var t=$a(e.target);if(t!==null){var n=u(t);if(n!==null){if(t=n.tag,t===13){if(t=d(n),t!==null){e.blockedOn=t,ud(e.priority,function(){Im(n)});return}}else if(t===31){if(t=h(n),t!==null){e.blockedOn=t,ud(e.priority,function(){Im(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ku(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Us=i,n.target.dispatchEvent(i),Us=null}else return t=Fa(n),t!==null&&Xm(t),e.blockedOn=n,!1;t.shift()}return!0}function Zm(e,t,n){wo(e)&&n.delete(t)}function E1(){Hu=!1,ia!==null&&wo(ia)&&(ia=null),ra!==null&&wo(ra)&&(ra=null),oa!==null&&wo(oa)&&(oa=null),Vi.forEach(Zm),Pi.forEach(Zm)}function Co(e,t){e.blockedOn===t&&(e.blockedOn=null,Hu||(Hu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,E1)))}var To=null;function Jm(e){To!==e&&(To=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){To===e&&(To=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],c=e[t+2];if(typeof i!="function"){if(Uu(i||n)===null)continue;break}var f=Fa(n);f!==null&&(e.splice(t,3),t-=3,kc(f,{pending:!0,data:c,method:n.method,action:i},i,c))}}))}function Ml(e){function t(A){return Co(A,e)}ia!==null&&Co(ia,e),ra!==null&&Co(ra,e),oa!==null&&Co(oa,e),Vi.forEach(t),Pi.forEach(t);for(var n=0;n<sa.length;n++){var i=sa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<sa.length&&(n=sa[0],n.blockedOn===null);)Qm(n),n.blockedOn===null&&sa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var c=n[i],f=n[i+1],g=c[vt]||null;if(typeof f=="function")g||Jm(n);else if(g){var S=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[vt]||null)S=g.formAction;else if(Uu(c)!==null)continue}else S=g.action;typeof S=="function"?n[i+1]=S:(n.splice(i,3),i-=3),Jm(n)}}}function Wm(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function Bu(e){this._internalRoot=e}Ro.prototype.render=Bu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=zt();Ym(n,i,e,t,null,null)},Ro.prototype.unmount=Bu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ym(e.current,2,null,e,null,null),io(),t[Ia]=null}};function Ro(e){this._internalRoot=e}Ro.prototype.unstable_scheduleHydration=function(e){if(e){var t=cd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sa.length&&t!==0&&t<sa[n].priority;n++);sa.splice(n,0,e),n===0&&Qm(e)}};var eg=l.version;if(eg!=="19.2.3")throw Error(o(527,eg,"19.2.3"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var w1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:j,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ao.isDisabled&&Ao.supportsFiber)try{Zl=Ao.inject(w1),Rt=Ao}catch{}}return Yi.createRoot=function(e,t){if(!s(e))throw Error(o(299));var n=!1,i="",c=op,f=sp,g=cp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError)),t=Gm(e,1,!1,null,null,n,i,null,c,f,g,Wm),e[Ia]=t.current,bu(e),new Bu(t)},Yi.hydrateRoot=function(e,t,n){if(!s(e))throw Error(o(299));var i=!1,c="",f=op,g=sp,S=cp,A=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(g=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.formState!==void 0&&(A=n.formState)),t=Gm(e,1,!0,t,n??null,i,c,A,f,g,S,Wm),t.context=qm(null),n=t.current,i=zt(),i=Os(i),c=In(i),c.callback=null,$n(n,c,i),n=i,t.current.lanes=n,Wl(t,n),sn(t),e[Ia]=t.current,bu(e),new Ro(t)},Yi.version="19.2.3",Yi}var ug;function D1(){if(ug)return Gu.exports;ug=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(l){console.error(l)}}return a(),Gu.exports=j1(),Gu.exports}var z1=D1();var fg="popstate";function dg(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function L1(a={}){function l(o,s){let u=s.state?.masked,{pathname:d,search:h,hash:p}=u||o.location;return hf("",{pathname:d,search:h,hash:p},s.state&&s.state.usr||null,s.state&&s.state.key||"default",u?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function r(o,s){return typeof s=="string"?s:Wi(s)}return U1(l,r,null,a)}function Ke(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function en(a,l){if(!a){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function k1(){return Math.random().toString(36).substring(2,10)}function hg(a,l){return{usr:a.state,key:a.key,idx:l,masked:a.unstable_mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function hf(a,l,r=null,o,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof l=="string"?Pl(l):l,state:r,key:l&&l.key||o||k1(),unstable_mask:s}}function Wi({pathname:a="/",search:l="",hash:r=""}){return l&&l!=="?"&&(a+=l.charAt(0)==="?"?l:"?"+l),r&&r!=="#"&&(a+=r.charAt(0)==="#"?r:"#"+r),a}function Pl(a){let l={};if(a){let r=a.indexOf("#");r>=0&&(l.hash=a.substring(r),a=a.substring(0,r));let o=a.indexOf("?");o>=0&&(l.search=a.substring(o),a=a.substring(0,o)),a&&(l.pathname=a)}return l}function U1(a,l,r,o={}){let{window:s=document.defaultView,v5Compat:u=!1}=o,d=s.history,h="POP",p=null,m=x();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function x(){return(d.state||{idx:null}).idx}function y(){h="POP";let T=x(),_=T==null?null:T-m;m=T,p&&p({action:h,location:E.location,delta:_})}function w(T,_){h="PUSH";let M=dg(T)?T:hf(E.location,T,_);m=x()+1;let z=hg(M,m),V=E.createHref(M.unstable_mask||M);try{d.pushState(z,"",V)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;s.location.assign(V)}u&&p&&p({action:h,location:E.location,delta:1})}function C(T,_){h="REPLACE";let M=dg(T)?T:hf(E.location,T,_);m=x();let z=hg(M,m),V=E.createHref(M.unstable_mask||M);d.replaceState(z,"",V),u&&p&&p({action:h,location:E.location,delta:0})}function R(T){return H1(T)}let E={get action(){return h},get location(){return a(s,d)},listen(T){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(fg,y),p=T,()=>{s.removeEventListener(fg,y),p=null}},createHref(T){return l(s,T)},createURL:R,encodeLocation(T){let _=R(T);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:w,replace:C,go(T){return d.go(T)}};return E}function H1(a,l=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Ke(r,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Wi(a);return o=o.replace(/ $/,"%20"),!l&&o.startsWith("//")&&(o=r+o),new URL(o,r)}function Ry(a,l,r="/"){return B1(a,l,r,!1)}function B1(a,l,r,o){let s=typeof l=="string"?Pl(l):l,u=kn(s.pathname||"/",r);if(u==null)return null;let d=Ay(a);V1(d);let h=null;for(let p=0;h==null&&p<d.length;++p){let m=Z1(u);h=F1(d[p],m,o)}return h}function Ay(a,l=[],r=[],o="",s=!1){let u=(d,h,p=s,m)=>{let x={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(o)&&p)return;Ke(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length)}let y=dn([o,x.relativePath]),w=r.concat(x);d.children&&d.children.length>0&&(Ke(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Ay(d.children,l,w,y,p)),!(d.path==null&&!d.index)&&l.push({path:y,score:I1(y,d.index),routesMeta:w})};return a.forEach((d,h)=>{if(d.path===""||!d.path?.includes("?"))u(d,h);else for(let p of Ny(d.path))u(d,h,!0,p)}),l}function Ny(a){let l=a.split("/");if(l.length===0)return[];let[r,...o]=l,s=r.endsWith("?"),u=r.replace(/\?$/,"");if(o.length===0)return s?[u,""]:[u];let d=Ny(o.join("/")),h=[];return h.push(...d.map(p=>p===""?u:[u,p].join("/"))),s&&h.push(...d),h.map(p=>a.startsWith("/")&&p===""?"/":p)}function V1(a){a.sort((l,r)=>l.score!==r.score?r.score-l.score:$1(l.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}var P1=/^:[\w-]+$/,G1=3,q1=2,Y1=1,K1=10,X1=-2,pg=a=>a==="*";function I1(a,l){let r=a.split("/"),o=r.length;return r.some(pg)&&(o+=X1),l&&(o+=q1),r.filter(s=>!pg(s)).reduce((s,u)=>s+(P1.test(u)?G1:u===""?Y1:K1),o)}function $1(a,l){return a.length===l.length&&a.slice(0,-1).every((o,s)=>o===l[s])?a[a.length-1]-l[l.length-1]:0}function F1(a,l,r=!1){let{routesMeta:o}=a,s={},u="/",d=[];for(let h=0;h<o.length;++h){let p=o[h],m=h===o.length-1,x=u==="/"?l:l.slice(u.length)||"/",y=qo({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},x),w=p.route;if(!y&&m&&r&&!o[o.length-1].route.index&&(y=qo({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},x)),!y)return null;Object.assign(s,y.params),d.push({params:s,pathname:dn([u,y.pathname]),pathnameBase:tS(dn([u,y.pathnameBase])),route:w}),y.pathnameBase!=="/"&&(u=dn([u,y.pathnameBase]))}return d}function qo(a,l){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[r,o]=Q1(a.path,a.caseSensitive,a.end),s=l.match(r);if(!s)return null;let u=s[0],d=u.replace(/(.)\/+$/,"$1"),h=s.slice(1);return{params:o.reduce((m,{paramName:x,isOptional:y},w)=>{if(x==="*"){let R=h[w]||"";d=u.slice(0,u.length-R.length).replace(/(.)\/+$/,"$1")}const C=h[w];return y&&!C?m[x]=void 0:m[x]=(C||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:d,pattern:a}}function Q1(a,l=!1,r=!0){en(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],s="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,p,m,x)=>{if(o.push({paramName:h,isOptional:p!=null}),p){let y=x.charAt(m+d.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),s+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":a!==""&&a!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,l?void 0:"i"),o]}function Z1(a){try{return a.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return en(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`),a}}function kn(a,l){if(l==="/")return a;if(!a.toLowerCase().startsWith(l.toLowerCase()))return null;let r=l.endsWith("/")?l.length-1:l.length,o=a.charAt(r);return o&&o!=="/"?null:a.slice(r)||"/"}var J1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function W1(a,l="/"){let{pathname:r,search:o="",hash:s=""}=typeof a=="string"?Pl(a):a,u;return r?(r=r.replace(/\/\/+/g,"/"),r.startsWith("/")?u=mg(r.substring(1),"/"):u=mg(r,l)):u=l,{pathname:u,search:nS(o),hash:aS(s)}}function mg(a,l){let r=l.replace(/\/+$/,"").split("/");return a.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function Xu(a,l,r,o){return`Cannot include a '${a}' character in a manually specified \`to.${l}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function eS(a){return a.filter((l,r)=>r===0||l.route.path&&l.route.path.length>0)}function Df(a){let l=eS(a);return l.map((r,o)=>o===l.length-1?r.pathname:r.pathnameBase)}function is(a,l,r,o=!1){let s;typeof a=="string"?s=Pl(a):(s={...a},Ke(!s.pathname||!s.pathname.includes("?"),Xu("?","pathname","search",s)),Ke(!s.pathname||!s.pathname.includes("#"),Xu("#","pathname","hash",s)),Ke(!s.search||!s.search.includes("#"),Xu("#","search","hash",s)));let u=a===""||s.pathname==="",d=u?"/":s.pathname,h;if(d==null)h=r;else{let y=l.length-1;if(!o&&d.startsWith("..")){let w=d.split("/");for(;w[0]==="..";)w.shift(),y-=1;s.pathname=w.join("/")}h=y>=0?l[y]:"/"}let p=W1(s,h),m=d&&d!=="/"&&d.endsWith("/"),x=(u||d===".")&&r.endsWith("/");return!p.pathname.endsWith("/")&&(m||x)&&(p.pathname+="/"),p}var dn=a=>a.join("/").replace(/\/\/+/g,"/"),tS=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),nS=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,aS=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,lS=class{constructor(a,l,r,o=!1){this.status=a,this.statusText=l||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function iS(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function rS(a){return a.map(l=>l.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Oy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function My(a,l){let r=a;if(typeof r!="string"||!J1.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let o=r,s=!1;if(Oy)try{let u=new URL(window.location.href),d=r.startsWith("//")?new URL(u.protocol+r):new URL(r),h=kn(d.pathname,l);d.origin===u.origin&&h!=null?r=h+d.search+d.hash:s=!0}catch{en(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:s,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var _y=["POST","PUT","PATCH","DELETE"];new Set(_y);var oS=["GET",..._y];new Set(oS);var Gl=v.createContext(null);Gl.displayName="DataRouter";var rs=v.createContext(null);rs.displayName="DataRouterState";var sS=v.createContext(!1),jy=v.createContext({isTransitioning:!1});jy.displayName="ViewTransition";var cS=v.createContext(new Map);cS.displayName="Fetchers";var uS=v.createContext(null);uS.displayName="Await";var Ut=v.createContext(null);Ut.displayName="Navigation";var lr=v.createContext(null);lr.displayName="Location";var an=v.createContext({outlet:null,matches:[],isDataRoute:!1});an.displayName="Route";var zf=v.createContext(null);zf.displayName="RouteError";var Dy="REACT_ROUTER_ERROR",fS="REDIRECT",dS="ROUTE_ERROR_RESPONSE";function hS(a){if(a.startsWith(`${Dy}:${fS}:{`))try{let l=JSON.parse(a.slice(28));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.location=="string"&&typeof l.reloadDocument=="boolean"&&typeof l.replace=="boolean")return l}catch{}}function pS(a){if(a.startsWith(`${Dy}:${dS}:{`))try{let l=JSON.parse(a.slice(40));if(typeof l=="object"&&l&&typeof l.status=="number"&&typeof l.statusText=="string")return new lS(l.status,l.statusText,l.data)}catch{}}function mS(a,{relative:l}={}){Ke(ql(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=v.useContext(Ut),{hash:s,pathname:u,search:d}=ir(a,{relative:l}),h=u;return r!=="/"&&(h=u==="/"?r:dn([r,u])),o.createHref({pathname:h,search:d,hash:s})}function ql(){return v.useContext(lr)!=null}function mn(){return Ke(ql(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(lr).location}var zy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ly(a){v.useContext(Ut).static||v.useLayoutEffect(a)}function ky(){let{isDataRoute:a}=v.useContext(an);return a?NS():gS()}function gS(){Ke(ql(),"useNavigate() may be used only in the context of a <Router> component.");let a=v.useContext(Gl),{basename:l,navigator:r}=v.useContext(Ut),{matches:o}=v.useContext(an),{pathname:s}=mn(),u=JSON.stringify(Df(o)),d=v.useRef(!1);return Ly(()=>{d.current=!0}),v.useCallback((p,m={})=>{if(en(d.current,zy),!d.current)return;if(typeof p=="number"){r.go(p);return}let x=is(p,JSON.parse(u),s,m.relative==="path");a==null&&l!=="/"&&(x.pathname=x.pathname==="/"?l:dn([l,x.pathname])),(m.replace?r.replace:r.push)(x,m.state,m)},[l,r,u,s,a])}v.createContext(null);function Uy(){let{matches:a}=v.useContext(an),l=a[a.length-1];return l?l.params:{}}function ir(a,{relative:l}={}){let{matches:r}=v.useContext(an),{pathname:o}=mn(),s=JSON.stringify(Df(r));return v.useMemo(()=>is(a,JSON.parse(s),o,l==="path"),[a,s,o,l])}function yS(a,l){return Hy(a,l)}function Hy(a,l,r){Ke(ql(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=v.useContext(Ut),{matches:s}=v.useContext(an),u=s[s.length-1],d=u?u.params:{},h=u?u.pathname:"/",p=u?u.pathnameBase:"/",m=u&&u.route;{let T=m&&m.path||"";Vy(h,!m||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let x=mn(),y;if(l){let T=typeof l=="string"?Pl(l):l;Ke(p==="/"||T.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${T.pathname}" was given in the \`location\` prop.`),y=T}else y=x;let w=y.pathname||"/",C=w;if(p!=="/"){let T=p.replace(/^\//,"").split("/");C="/"+w.replace(/^\//,"").split("/").slice(T.length).join("/")}let R=Ry(a,{pathname:C});en(m||R!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),en(R==null||R[R.length-1].route.element!==void 0||R[R.length-1].route.Component!==void 0||R[R.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=ES(R&&R.map(T=>Object.assign({},T,{params:Object.assign({},d,T.params),pathname:dn([p,o.encodeLocation?o.encodeLocation(T.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?p:dn([p,o.encodeLocation?o.encodeLocation(T.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathnameBase])})),s,r);return l&&E?v.createElement(lr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...y},navigationType:"POP"}},E):E}function vS(){let a=AS(),l=iS(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),r=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},u={padding:"2px 4px",backgroundColor:o},d=null;return console.error("Error handled by React Router default ErrorBoundary:",a),d=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:u},"ErrorBoundary")," or"," ",v.createElement("code",{style:u},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},l),r?v.createElement("pre",{style:s},r):null,d)}var xS=v.createElement(vS,null),By=class extends v.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,l){return l.location!==a.location||l.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:l.error,location:l.location,revalidation:a.revalidation||l.revalidation}}componentDidCatch(a,l){this.props.onError?this.props.onError(a,l):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const r=pS(a.digest);r&&(a=r)}let l=a!==void 0?v.createElement(an.Provider,{value:this.props.routeContext},v.createElement(zf.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?v.createElement(bS,{error:a},l):l}};By.contextType=sS;var Iu=new WeakMap;function bS({children:a,error:l}){let{basename:r}=v.useContext(Ut);if(typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){let o=hS(l.digest);if(o){let s=Iu.get(l);if(s)throw s;let u=My(o.location,r);if(Oy&&!Iu.get(l))if(u.isExternal||o.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:o.replace}));throw Iu.set(l,d),d}return v.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return a}function SS({routeContext:a,match:l,children:r}){let o=v.useContext(Gl);return o&&o.static&&o.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=l.route.id),v.createElement(an.Provider,{value:a},r)}function ES(a,l=[],r){let o=r?.state;if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(l.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let s=a,u=o?.errors;if(u!=null){let x=s.findIndex(y=>y.route.id&&u?.[y.route.id]!==void 0);Ke(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),s=s.slice(0,Math.min(s.length,x+1))}let d=!1,h=-1;if(r&&o){d=o.renderFallback;for(let x=0;x<s.length;x++){let y=s[x];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(h=x),y.route.id){let{loaderData:w,errors:C}=o,R=y.route.loader&&!w.hasOwnProperty(y.route.id)&&(!C||C[y.route.id]===void 0);if(y.route.lazy||R){r.isStatic&&(d=!0),h>=0?s=s.slice(0,h+1):s=[s[0]];break}}}}let p=r?.onError,m=o&&p?(x,y)=>{p(x,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:rS(o.matches),errorInfo:y})}:void 0;return s.reduceRight((x,y,w)=>{let C,R=!1,E=null,T=null;o&&(C=u&&y.route.id?u[y.route.id]:void 0,E=y.route.errorElement||xS,d&&(h<0&&w===0?(Vy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,T=null):h===w&&(R=!0,T=y.route.hydrateFallbackElement||null)));let _=l.concat(s.slice(0,w+1)),M=()=>{let z;return C?z=E:R?z=T:y.route.Component?z=v.createElement(y.route.Component,null):y.route.element?z=y.route.element:z=x,v.createElement(SS,{match:y,routeContext:{outlet:x,matches:_,isDataRoute:o!=null},children:z})};return o&&(y.route.ErrorBoundary||y.route.errorElement||w===0)?v.createElement(By,{location:o.location,revalidation:o.revalidation,component:E,error:C,children:M(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:m}):M()},null)}function Lf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wS(a){let l=v.useContext(Gl);return Ke(l,Lf(a)),l}function CS(a){let l=v.useContext(rs);return Ke(l,Lf(a)),l}function TS(a){let l=v.useContext(an);return Ke(l,Lf(a)),l}function kf(a){let l=TS(a),r=l.matches[l.matches.length-1];return Ke(r.route.id,`${a} can only be used on routes that contain a unique "id"`),r.route.id}function RS(){return kf("useRouteId")}function AS(){let a=v.useContext(zf),l=CS("useRouteError"),r=kf("useRouteError");return a!==void 0?a:l.errors?.[r]}function NS(){let{router:a}=wS("useNavigate"),l=kf("useNavigate"),r=v.useRef(!1);return Ly(()=>{r.current=!0}),v.useCallback(async(s,u={})=>{en(r.current,zy),r.current&&(typeof s=="number"?await a.navigate(s):await a.navigate(s,{fromRouteId:l,...u}))},[a,l])}var gg={};function Vy(a,l,r){!l&&!gg[a]&&(gg[a]=!0,en(!1,r))}v.memo(OS);function OS({routes:a,future:l,state:r,isStatic:o,onError:s}){return Hy(a,void 0,{state:r,isStatic:o,onError:s})}function Py({to:a,replace:l,state:r,relative:o}){Ke(ql(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=v.useContext(Ut);en(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=v.useContext(an),{pathname:d}=mn(),h=ky(),p=is(a,Df(u),d,o==="path"),m=JSON.stringify(p);return v.useEffect(()=>{h(JSON.parse(m),{replace:l,state:r,relative:o})},[h,m,o,l,r]),null}function $i(a){Ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function MS({basename:a="/",children:l=null,location:r,navigationType:o="POP",navigator:s,static:u=!1,unstable_useTransitions:d}){Ke(!ql(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=a.replace(/^\/*/,"/"),p=v.useMemo(()=>({basename:h,navigator:s,static:u,unstable_useTransitions:d,future:{}}),[h,s,u,d]);typeof r=="string"&&(r=Pl(r));let{pathname:m="/",search:x="",hash:y="",state:w=null,key:C="default",unstable_mask:R}=r,E=v.useMemo(()=>{let T=kn(m,h);return T==null?null:{location:{pathname:T,search:x,hash:y,state:w,key:C,unstable_mask:R},navigationType:o}},[h,m,x,y,w,C,o,R]);return en(E!=null,`<Router basename="${h}"> is not able to match the URL "${m}${x}${y}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:v.createElement(Ut.Provider,{value:p},v.createElement(lr.Provider,{children:l,value:E}))}function _S({children:a,location:l}){return yS(pf(a),l)}function pf(a,l=[]){let r=[];return v.Children.forEach(a,(o,s)=>{if(!v.isValidElement(o))return;let u=[...l,s];if(o.type===v.Fragment){r.push.apply(r,pf(o.props.children,u));return}Ke(o.type===$i,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ke(!o.props.index||!o.props.children,"An index route cannot have child routes.");let d={id:o.props.id||u.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=pf(o.props.children,u)),r.push(d)}),r}var Ho="get",Bo="application/x-www-form-urlencoded";function os(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function jS(a){return os(a)&&a.tagName.toLowerCase()==="button"}function DS(a){return os(a)&&a.tagName.toLowerCase()==="form"}function zS(a){return os(a)&&a.tagName.toLowerCase()==="input"}function LS(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function kS(a,l){return a.button===0&&(!l||l==="_self")&&!LS(a)}var No=null;function US(){if(No===null)try{new FormData(document.createElement("form"),0),No=!1}catch{No=!0}return No}var HS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $u(a){return a!=null&&!HS.has(a)?(en(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bo}"`),null):a}function BS(a,l){let r,o,s,u,d;if(DS(a)){let h=a.getAttribute("action");o=h?kn(h,l):null,r=a.getAttribute("method")||Ho,s=$u(a.getAttribute("enctype"))||Bo,u=new FormData(a)}else if(jS(a)||zS(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||h.getAttribute("action");if(o=p?kn(p,l):null,r=a.getAttribute("formmethod")||h.getAttribute("method")||Ho,s=$u(a.getAttribute("formenctype"))||$u(h.getAttribute("enctype"))||Bo,u=new FormData(h,a),!US()){let{name:m,type:x,value:y}=a;if(x==="image"){let w=m?`${m}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else m&&u.append(m,y)}}else{if(os(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Ho,o=null,s=Bo,d=a}return u&&s==="text/plain"&&(d=u,u=void 0),{action:o,method:r.toLowerCase(),encType:s,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Uf(a,l){if(a===!1||a===null||typeof a>"u")throw new Error(l)}function VS(a,l,r,o){let s=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return r?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${o}`:s.pathname=`${s.pathname}.${o}`:s.pathname==="/"?s.pathname=`_root.${o}`:l&&kn(s.pathname,l)==="/"?s.pathname=`${l.replace(/\/$/,"")}/_root.${o}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${o}`,s}async function PS(a,l){if(a.id in l)return l[a.id];try{let r=await import(a.module);return l[a.id]=r,r}catch(r){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function GS(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function qS(a,l,r){let o=await Promise.all(a.map(async s=>{let u=l.routes[s.route.id];if(u){let d=await PS(u,r);return d.links?d.links():[]}return[]}));return IS(o.flat(1).filter(GS).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function yg(a,l,r,o,s,u){let d=(p,m)=>r[m]?p.route.id!==r[m].route.id:!0,h=(p,m)=>r[m].pathname!==p.pathname||r[m].route.path?.endsWith("*")&&r[m].params["*"]!==p.params["*"];return u==="assets"?l.filter((p,m)=>d(p,m)||h(p,m)):u==="data"?l.filter((p,m)=>{let x=o.routes[p.route.id];if(!x||!x.hasLoader)return!1;if(d(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let y=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function YS(a,l,{includeHydrateFallback:r}={}){return KS(a.map(o=>{let s=l.routes[o.route.id];if(!s)return[];let u=[s.module];return s.clientActionModule&&(u=u.concat(s.clientActionModule)),s.clientLoaderModule&&(u=u.concat(s.clientLoaderModule)),r&&s.hydrateFallbackModule&&(u=u.concat(s.hydrateFallbackModule)),s.imports&&(u=u.concat(s.imports)),u}).flat(1))}function KS(a){return[...new Set(a)]}function XS(a){let l={},r=Object.keys(a).sort();for(let o of r)l[o]=a[o];return l}function IS(a,l){let r=new Set;return new Set(l),a.reduce((o,s)=>{let u=JSON.stringify(XS(s));return r.has(u)||(r.add(u),o.push({key:u,link:s})),o},[])}function Gy(){let a=v.useContext(Gl);return Uf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function $S(){let a=v.useContext(rs);return Uf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Hf=v.createContext(void 0);Hf.displayName="FrameworkContext";function qy(){let a=v.useContext(Hf);return Uf(a,"You must render this element inside a <HydratedRouter> element"),a}function FS(a,l){let r=v.useContext(Hf),[o,s]=v.useState(!1),[u,d]=v.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:x,onTouchStart:y}=l,w=v.useRef(null);v.useEffect(()=>{if(a==="render"&&d(!0),a==="viewport"){let E=_=>{_.forEach(M=>{d(M.isIntersecting)})},T=new IntersectionObserver(E,{threshold:.5});return w.current&&T.observe(w.current),()=>{T.disconnect()}}},[a]),v.useEffect(()=>{if(o){let E=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(E)}}},[o]);let C=()=>{s(!0)},R=()=>{s(!1),d(!1)};return r?a!=="intent"?[u,w,{}]:[u,w,{onFocus:Ki(h,C),onBlur:Ki(p,R),onMouseEnter:Ki(m,C),onMouseLeave:Ki(x,R),onTouchStart:Ki(y,C)}]:[!1,w,{}]}function Ki(a,l){return r=>{a&&a(r),r.defaultPrevented||l(r)}}function QS({page:a,...l}){let{router:r}=Gy(),o=v.useMemo(()=>Ry(r.routes,a,r.basename),[r.routes,a,r.basename]);return o?v.createElement(JS,{page:a,matches:o,...l}):null}function ZS(a){let{manifest:l,routeModules:r}=qy(),[o,s]=v.useState([]);return v.useEffect(()=>{let u=!1;return qS(a,l,r).then(d=>{u||s(d)}),()=>{u=!0}},[a,l,r]),o}function JS({page:a,matches:l,...r}){let o=mn(),{future:s,manifest:u,routeModules:d}=qy(),{basename:h}=Gy(),{loaderData:p,matches:m}=$S(),x=v.useMemo(()=>yg(a,l,m,u,o,"data"),[a,l,m,u,o]),y=v.useMemo(()=>yg(a,l,m,u,o,"assets"),[a,l,m,u,o]),w=v.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let E=new Set,T=!1;if(l.forEach(M=>{let z=u.routes[M.route.id];!z||!z.hasLoader||(!x.some(V=>V.route.id===M.route.id)&&M.route.id in p&&d[M.route.id]?.shouldRevalidate||z.hasClientLoader?T=!0:E.add(M.route.id))}),E.size===0)return[];let _=VS(a,h,s.unstable_trailingSlashAwareDataRequests,"data");return T&&E.size>0&&_.searchParams.set("_routes",l.filter(M=>E.has(M.route.id)).map(M=>M.route.id).join(",")),[_.pathname+_.search]},[h,s.unstable_trailingSlashAwareDataRequests,p,o,u,x,l,a,d]),C=v.useMemo(()=>YS(y,u),[y,u]),R=ZS(y);return v.createElement(v.Fragment,null,w.map(E=>v.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...r})),C.map(E=>v.createElement("link",{key:E,rel:"modulepreload",href:E,...r})),R.map(({key:E,link:T})=>v.createElement("link",{key:E,nonce:r.nonce,...T,crossOrigin:T.crossOrigin??r.crossOrigin})))}function WS(...a){return l=>{a.forEach(r=>{typeof r=="function"?r(l):r!=null&&(r.current=l)})}}var eE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{eE&&(window.__reactRouterVersion="7.13.1")}catch{}function tE({basename:a,children:l,unstable_useTransitions:r,window:o}){let s=v.useRef();s.current==null&&(s.current=L1({window:o,v5Compat:!0}));let u=s.current,[d,h]=v.useState({action:u.action,location:u.location}),p=v.useCallback(m=>{r===!1?h(m):v.startTransition(()=>h(m))},[r]);return v.useLayoutEffect(()=>u.listen(p),[u,p]),v.createElement(MS,{basename:a,children:l,location:d.location,navigationType:d.action,navigator:u,unstable_useTransitions:r})}var Yy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ze=v.forwardRef(function({onClick:l,discover:r="render",prefetch:o="none",relative:s,reloadDocument:u,replace:d,unstable_mask:h,state:p,target:m,to:x,preventScrollReset:y,viewTransition:w,unstable_defaultShouldRevalidate:C,...R},E){let{basename:T,navigator:_,unstable_useTransitions:M}=v.useContext(Ut),z=typeof x=="string"&&Yy.test(x),V=My(x,T);x=V.to;let G=mS(x,{relative:s}),Z=mn(),P=null;if(h){let ue=is(h,[],Z.unstable_mask?Z.unstable_mask.pathname:"/",!0);T!=="/"&&(ue.pathname=ue.pathname==="/"?T:dn([T,ue.pathname])),P=_.createHref(ue)}let[$,W,ee]=FS(o,R),ne=iE(x,{replace:d,unstable_mask:h,state:p,target:m,preventScrollReset:y,relative:s,viewTransition:w,unstable_defaultShouldRevalidate:C,unstable_useTransitions:M});function te(ue){l&&l(ue),ue.defaultPrevented||ne(ue)}let oe=!(V.isExternal||u),re=v.createElement("a",{...R,...ee,href:(oe?P:void 0)||V.absoluteURL||G,onClick:oe?te:l,ref:WS(E,W),target:m,"data-discover":!z&&r==="render"?"true":void 0});return $&&!z?v.createElement(v.Fragment,null,re,v.createElement(QS,{page:G})):re});Ze.displayName="Link";var nE=v.forwardRef(function({"aria-current":l="page",caseSensitive:r=!1,className:o="",end:s=!1,style:u,to:d,viewTransition:h,children:p,...m},x){let y=ir(d,{relative:m.relative}),w=mn(),C=v.useContext(rs),{navigator:R,basename:E}=v.useContext(Ut),T=C!=null&&uE(y)&&h===!0,_=R.encodeLocation?R.encodeLocation(y).pathname:y.pathname,M=w.pathname,z=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;r||(M=M.toLowerCase(),z=z?z.toLowerCase():null,_=_.toLowerCase()),z&&E&&(z=kn(z,E)||z);const V=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let G=M===_||!s&&M.startsWith(_)&&M.charAt(V)==="/",Z=z!=null&&(z===_||!s&&z.startsWith(_)&&z.charAt(_.length)==="/"),P={isActive:G,isPending:Z,isTransitioning:T},$=G?l:void 0,W;typeof o=="function"?W=o(P):W=[o,G?"active":null,Z?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let ee=typeof u=="function"?u(P):u;return v.createElement(Ze,{...m,"aria-current":$,className:W,ref:x,style:ee,to:d,viewTransition:h},typeof p=="function"?p(P):p)});nE.displayName="NavLink";var aE=v.forwardRef(({discover:a="render",fetcherKey:l,navigate:r,reloadDocument:o,replace:s,state:u,method:d=Ho,action:h,onSubmit:p,relative:m,preventScrollReset:x,viewTransition:y,unstable_defaultShouldRevalidate:w,...C},R)=>{let{unstable_useTransitions:E}=v.useContext(Ut),T=sE(),_=cE(h,{relative:m}),M=d.toLowerCase()==="get"?"get":"post",z=typeof h=="string"&&Yy.test(h),V=G=>{if(p&&p(G),G.defaultPrevented)return;G.preventDefault();let Z=G.nativeEvent.submitter,P=Z?.getAttribute("formmethod")||d,$=()=>T(Z||G.currentTarget,{fetcherKey:l,method:P,navigate:r,replace:s,state:u,relative:m,preventScrollReset:x,viewTransition:y,unstable_defaultShouldRevalidate:w});E&&r!==!1?v.startTransition(()=>$()):$()};return v.createElement("form",{ref:R,method:M,action:_,onSubmit:o?p:V,...C,"data-discover":!z&&a==="render"?"true":void 0})});aE.displayName="Form";function lE(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ky(a){let l=v.useContext(Gl);return Ke(l,lE(a)),l}function iE(a,{target:l,replace:r,unstable_mask:o,state:s,preventScrollReset:u,relative:d,viewTransition:h,unstable_defaultShouldRevalidate:p,unstable_useTransitions:m}={}){let x=ky(),y=mn(),w=ir(a,{relative:d});return v.useCallback(C=>{if(kS(C,l)){C.preventDefault();let R=r!==void 0?r:Wi(y)===Wi(w),E=()=>x(a,{replace:R,unstable_mask:o,state:s,preventScrollReset:u,relative:d,viewTransition:h,unstable_defaultShouldRevalidate:p});m?v.startTransition(()=>E()):E()}},[y,x,w,r,o,s,l,a,u,d,h,p,m])}var rE=0,oE=()=>`__${String(++rE)}__`;function sE(){let{router:a}=Ky("useSubmit"),{basename:l}=v.useContext(Ut),r=RS(),o=a.fetch,s=a.navigate;return v.useCallback(async(u,d={})=>{let{action:h,method:p,encType:m,formData:x,body:y}=BS(u,l);if(d.navigate===!1){let w=d.fetcherKey||oE();await o(w,r,d.action||h,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:x,body:y,formMethod:d.method||p,formEncType:d.encType||m,flushSync:d.flushSync})}else await s(d.action||h,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:x,body:y,formMethod:d.method||p,formEncType:d.encType||m,replace:d.replace,state:d.state,fromRouteId:r,flushSync:d.flushSync,viewTransition:d.viewTransition})},[o,s,l,r])}function cE(a,{relative:l}={}){let{basename:r}=v.useContext(Ut),o=v.useContext(an);Ke(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),u={...ir(a||".",{relative:l})},d=mn();if(a==null){u.search=d.search;let h=new URLSearchParams(u.search),p=h.getAll("index");if(p.some(x=>x==="")){h.delete("index"),p.filter(y=>y).forEach(y=>h.append("index",y));let x=h.toString();u.search=x?`?${x}`:""}}return(!a||a===".")&&s.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(u.pathname=u.pathname==="/"?r:dn([r,u.pathname])),Wi(u)}function uE(a,{relative:l}={}){let r=v.useContext(jy);Ke(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Ky("useViewTransitionState"),s=ir(a,{relative:l});if(!r.isTransitioning)return!1;let u=kn(r.currentLocation.pathname,o)||r.currentLocation.pathname,d=kn(r.nextLocation.pathname,o)||r.nextLocation.pathname;return qo(s.pathname,d)!=null||qo(s.pathname,u)!=null}var rr=Ty();const fE=Cy(rr),ge=a=>typeof a=="string",Xi=()=>{let a,l;const r=new Promise((o,s)=>{a=o,l=s});return r.resolve=a,r.reject=l,r},vg=a=>a==null?"":""+a,dE=(a,l,r)=>{a.forEach(o=>{l[o]&&(r[o]=l[o])})},hE=/###/g,xg=a=>a&&a.indexOf("###")>-1?a.replace(hE,"."):a,bg=a=>!a||ge(a),Qi=(a,l,r)=>{const o=ge(l)?l.split("."):l;let s=0;for(;s<o.length-1;){if(bg(a))return{};const u=xg(o[s]);!a[u]&&r&&(a[u]=new r),Object.prototype.hasOwnProperty.call(a,u)?a=a[u]:a={},++s}return bg(a)?{}:{obj:a,k:xg(o[s])}},Sg=(a,l,r)=>{const{obj:o,k:s}=Qi(a,l,Object);if(o!==void 0||l.length===1){o[s]=r;return}let u=l[l.length-1],d=l.slice(0,l.length-1),h=Qi(a,d,Object);for(;h.obj===void 0&&d.length;)u=`${d[d.length-1]}.${u}`,d=d.slice(0,d.length-1),h=Qi(a,d,Object),h?.obj&&typeof h.obj[`${h.k}.${u}`]<"u"&&(h.obj=void 0);h.obj[`${h.k}.${u}`]=r},pE=(a,l,r,o)=>{const{obj:s,k:u}=Qi(a,l,Object);s[u]=s[u]||[],s[u].push(r)},Yo=(a,l)=>{const{obj:r,k:o}=Qi(a,l);if(r&&Object.prototype.hasOwnProperty.call(r,o))return r[o]},mE=(a,l,r)=>{const o=Yo(a,r);return o!==void 0?o:Yo(l,r)},Xy=(a,l,r)=>{for(const o in l)o!=="__proto__"&&o!=="constructor"&&(o in a?ge(a[o])||a[o]instanceof String||ge(l[o])||l[o]instanceof String?r&&(a[o]=l[o]):Xy(a[o],l[o],r):a[o]=l[o]);return a},Ba=a=>a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var gE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const yE=a=>ge(a)?a.replace(/[&<>"'\/]/g,l=>gE[l]):a;class vE{constructor(l){this.capacity=l,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(l){const r=this.regExpMap.get(l);if(r!==void 0)return r;const o=new RegExp(l);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(l,o),this.regExpQueue.push(l),o}}const xE=[" ",",","?","!",";"],bE=new vE(20),SE=(a,l,r)=>{l=l||"",r=r||"";const o=xE.filter(d=>l.indexOf(d)<0&&r.indexOf(d)<0);if(o.length===0)return!0;const s=bE.getRegExp(`(${o.map(d=>d==="?"?"\\?":d).join("|")})`);let u=!s.test(a);if(!u){const d=a.indexOf(r);d>0&&!s.test(a.substring(0,d))&&(u=!0)}return u},mf=(a,l,r=".")=>{if(!a)return;if(a[l])return Object.prototype.hasOwnProperty.call(a,l)?a[l]:void 0;const o=l.split(r);let s=a;for(let u=0;u<o.length;){if(!s||typeof s!="object")return;let d,h="";for(let p=u;p<o.length;++p)if(p!==u&&(h+=r),h+=o[p],d=s[h],d!==void 0){if(["string","number","boolean"].indexOf(typeof d)>-1&&p<o.length-1)continue;u+=p-u+1;break}s=d}return s},er=a=>a?.replace(/_/g,"-"),EE={type:"logger",log(a){this.output("log",a)},warn(a){this.output("warn",a)},error(a){this.output("error",a)},output(a,l){console?.[a]?.apply?.(console,l)}};class Ko{constructor(l,r={}){this.init(l,r)}init(l,r={}){this.prefix=r.prefix||"i18next:",this.logger=l||EE,this.options=r,this.debug=r.debug}log(...l){return this.forward(l,"log","",!0)}warn(...l){return this.forward(l,"warn","",!0)}error(...l){return this.forward(l,"error","")}deprecate(...l){return this.forward(l,"warn","WARNING DEPRECATED: ",!0)}forward(l,r,o,s){return s&&!this.debug?null:(ge(l[0])&&(l[0]=`${o}${this.prefix} ${l[0]}`),this.logger[r](l))}create(l){return new Ko(this.logger,{prefix:`${this.prefix}:${l}:`,...this.options})}clone(l){return l=l||this.options,l.prefix=l.prefix||this.prefix,new Ko(this.logger,l)}}var un=new Ko;class ss{constructor(){this.observers={}}on(l,r){return l.split(" ").forEach(o=>{this.observers[o]||(this.observers[o]=new Map);const s=this.observers[o].get(r)||0;this.observers[o].set(r,s+1)}),this}off(l,r){if(this.observers[l]){if(!r){delete this.observers[l];return}this.observers[l].delete(r)}}emit(l,...r){this.observers[l]&&Array.from(this.observers[l].entries()).forEach(([s,u])=>{for(let d=0;d<u;d++)s(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([s,u])=>{for(let d=0;d<u;d++)s.apply(s,[l,...r])})}}class Eg extends ss{constructor(l,r={ns:["translation"],defaultNS:"translation"}){super(),this.data=l||{},this.options=r,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(l){this.options.ns.indexOf(l)<0&&this.options.ns.push(l)}removeNamespaces(l){const r=this.options.ns.indexOf(l);r>-1&&this.options.ns.splice(r,1)}getResource(l,r,o,s={}){const u=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,d=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let h;l.indexOf(".")>-1?h=l.split("."):(h=[l,r],o&&(Array.isArray(o)?h.push(...o):ge(o)&&u?h.push(...o.split(u)):h.push(o)));const p=Yo(this.data,h);return!p&&!r&&!o&&l.indexOf(".")>-1&&(l=h[0],r=h[1],o=h.slice(2).join(".")),p||!d||!ge(o)?p:mf(this.data?.[l]?.[r],o,u)}addResource(l,r,o,s,u={silent:!1}){const d=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator;let h=[l,r];o&&(h=h.concat(d?o.split(d):o)),l.indexOf(".")>-1&&(h=l.split("."),s=r,r=h[1]),this.addNamespaces(r),Sg(this.data,h,s),u.silent||this.emit("added",l,r,o,s)}addResources(l,r,o,s={silent:!1}){for(const u in o)(ge(o[u])||Array.isArray(o[u]))&&this.addResource(l,r,u,o[u],{silent:!0});s.silent||this.emit("added",l,r,o)}addResourceBundle(l,r,o,s,u,d={silent:!1,skipCopy:!1}){let h=[l,r];l.indexOf(".")>-1&&(h=l.split("."),s=o,o=r,r=h[1]),this.addNamespaces(r);let p=Yo(this.data,h)||{};d.skipCopy||(o=JSON.parse(JSON.stringify(o))),s?Xy(p,o,u):p={...p,...o},Sg(this.data,h,p),d.silent||this.emit("added",l,r,o)}removeResourceBundle(l,r){this.hasResourceBundle(l,r)&&delete this.data[l][r],this.removeNamespaces(r),this.emit("removed",l,r)}hasResourceBundle(l,r){return this.getResource(l,r)!==void 0}getResourceBundle(l,r){return r||(r=this.options.defaultNS),this.getResource(l,r)}getDataByLanguage(l){return this.data[l]}hasLanguageSomeTranslations(l){const r=this.getDataByLanguage(l);return!!(r&&Object.keys(r)||[]).find(s=>r[s]&&Object.keys(r[s]).length>0)}toJSON(){return this.data}}var Iy={processors:{},addPostProcessor(a){this.processors[a.name]=a},handle(a,l,r,o,s){return a.forEach(u=>{l=this.processors[u]?.process(l,r,o,s)??l}),l}};const $y=Symbol("i18next/PATH_KEY");function wE(){const a=[],l=Object.create(null);let r;return l.get=(o,s)=>(r?.revoke?.(),s===$y?a:(a.push(s),r=Proxy.revocable(o,l),r.proxy)),Proxy.revocable(Object.create(null),l).proxy}function Zi(a,l){const{[$y]:r}=a(wE()),o=l?.keySeparator??".",s=l?.nsSeparator??":";if(r.length>1&&s){const u=l?.ns;if((u?Array.isArray(u)?u:[u]:[]).includes(r[0]))return`${r[0]}${s}${r.slice(1).join(o)}`}return r.join(o)}const wg={},Fu=a=>!ge(a)&&typeof a!="boolean"&&typeof a!="number";class Xo extends ss{constructor(l,r={}){super(),dE(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],l,this),this.options=r,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=un.create("translator")}changeLanguage(l){l&&(this.language=l)}exists(l,r={interpolation:{}}){const o={...r};if(l==null)return!1;const s=this.resolve(l,o);if(s?.res===void 0)return!1;const u=Fu(s.res);return!(o.returnObjects===!1&&u)}extractFromKey(l,r){let o=r.nsSeparator!==void 0?r.nsSeparator:this.options.nsSeparator;o===void 0&&(o=":");const s=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let u=r.ns||this.options.defaultNS||[];const d=o&&l.indexOf(o)>-1,h=!this.options.userDefinedKeySeparator&&!r.keySeparator&&!this.options.userDefinedNsSeparator&&!r.nsSeparator&&!SE(l,o,s);if(d&&!h){const p=l.match(this.interpolator.nestingRegexp);if(p&&p.length>0)return{key:l,namespaces:ge(u)?[u]:u};const m=l.split(o);(o!==s||o===s&&this.options.ns.indexOf(m[0])>-1)&&(u=m.shift()),l=m.join(s)}return{key:l,namespaces:ge(u)?[u]:u}}translate(l,r,o){let s=typeof r=="object"?{...r}:r;if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),l==null)return"";typeof l=="function"&&(l=Zi(l,{...this.options,...s})),Array.isArray(l)||(l=[String(l)]),l=l.map(oe=>typeof oe=="function"?Zi(oe,{...this.options,...s}):String(oe));const u=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,d=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:h,namespaces:p}=this.extractFromKey(l[l.length-1],s),m=p[p.length-1];let x=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;x===void 0&&(x=":");const y=s.lng||this.language,w=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(y?.toLowerCase()==="cimode")return w?u?{res:`${m}${x}${h}`,usedKey:h,exactUsedKey:h,usedLng:y,usedNS:m,usedParams:this.getUsedParamsDetails(s)}:`${m}${x}${h}`:u?{res:h,usedKey:h,exactUsedKey:h,usedLng:y,usedNS:m,usedParams:this.getUsedParamsDetails(s)}:h;const C=this.resolve(l,s);let R=C?.res;const E=C?.usedKey||h,T=C?.exactUsedKey||h,_=["[object Number]","[object Function]","[object RegExp]"],M=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,z=!this.i18nFormat||this.i18nFormat.handleAsObject,V=s.count!==void 0&&!ge(s.count),G=Xo.hasDefaultValue(s),Z=V?this.pluralResolver.getSuffix(y,s.count,s):"",P=s.ordinal&&V?this.pluralResolver.getSuffix(y,s.count,{ordinal:!1}):"",$=V&&!s.ordinal&&s.count===0,W=$&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${Z}`]||s[`defaultValue${P}`]||s.defaultValue;let ee=R;z&&!R&&G&&(ee=W);const ne=Fu(ee),te=Object.prototype.toString.apply(ee);if(z&&ee&&ne&&_.indexOf(te)<0&&!(ge(M)&&Array.isArray(ee))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const oe=this.options.returnedObjectHandler?this.options.returnedObjectHandler(E,ee,{...s,ns:p}):`key '${h} (${this.language})' returned an object instead of string.`;return u?(C.res=oe,C.usedParams=this.getUsedParamsDetails(s),C):oe}if(d){const oe=Array.isArray(ee),re=oe?[]:{},ue=oe?T:E;for(const j in ee)if(Object.prototype.hasOwnProperty.call(ee,j)){const K=`${ue}${d}${j}`;G&&!R?re[j]=this.translate(K,{...s,defaultValue:Fu(W)?W[j]:void 0,joinArrays:!1,ns:p}):re[j]=this.translate(K,{...s,joinArrays:!1,ns:p}),re[j]===K&&(re[j]=ee[j])}R=re}}else if(z&&ge(M)&&Array.isArray(R))R=R.join(M),R&&(R=this.extendTranslation(R,l,s,o));else{let oe=!1,re=!1;!this.isValidLookup(R)&&G&&(oe=!0,R=W),this.isValidLookup(R)||(re=!0,R=h);const j=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&re?void 0:R,K=G&&W!==R&&this.options.updateMissing;if(re||oe||K){if(this.logger.log(K?"updateKey":"missingKey",y,m,h,K?W:R),d){const N=this.resolve(h,{...s,keySeparator:!1});N&&N.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let H=[];const se=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&se&&se[0])for(let N=0;N<se.length;N++)H.push(se[N]);else this.options.saveMissingTo==="all"?H=this.languageUtils.toResolveHierarchy(s.lng||this.language):H.push(s.lng||this.language);const pe=(N,q,F)=>{const J=G&&F!==R?F:j;this.options.missingKeyHandler?this.options.missingKeyHandler(N,m,q,J,K,s):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(N,m,q,J,K,s),this.emit("missingKey",N,m,q,R)};this.options.saveMissing&&(this.options.saveMissingPlurals&&V?H.forEach(N=>{const q=this.pluralResolver.getSuffixes(N,s);$&&s[`defaultValue${this.options.pluralSeparator}zero`]&&q.indexOf(`${this.options.pluralSeparator}zero`)<0&&q.push(`${this.options.pluralSeparator}zero`),q.forEach(F=>{pe([N],h+F,s[`defaultValue${F}`]||W)})}):pe(H,h,W))}R=this.extendTranslation(R,l,s,C,o),re&&R===h&&this.options.appendNamespaceToMissingKey&&(R=`${m}${x}${h}`),(re||oe)&&this.options.parseMissingKeyHandler&&(R=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${m}${x}${h}`:h,oe?R:void 0,s))}return u?(C.res=R,C.usedParams=this.getUsedParamsDetails(s),C):R}extendTranslation(l,r,o,s,u){if(this.i18nFormat?.parse)l=this.i18nFormat.parse(l,{...this.options.interpolation.defaultVariables,...o},o.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init({...o,interpolation:{...this.options.interpolation,...o.interpolation}});const p=ge(l)&&(o?.interpolation?.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let m;if(p){const y=l.match(this.interpolator.nestingRegexp);m=y&&y.length}let x=o.replace&&!ge(o.replace)?o.replace:o;if(this.options.interpolation.defaultVariables&&(x={...this.options.interpolation.defaultVariables,...x}),l=this.interpolator.interpolate(l,x,o.lng||this.language||s.usedLng,o),p){const y=l.match(this.interpolator.nestingRegexp),w=y&&y.length;m<w&&(o.nest=!1)}!o.lng&&s&&s.res&&(o.lng=this.language||s.usedLng),o.nest!==!1&&(l=this.interpolator.nest(l,(...y)=>u?.[0]===y[0]&&!o.context?(this.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${r[0]}`),null):this.translate(...y,r),o)),o.interpolation&&this.interpolator.reset()}const d=o.postProcess||this.options.postProcess,h=ge(d)?[d]:d;return l!=null&&h?.length&&o.applyPostProcessor!==!1&&(l=Iy.handle(h,l,r,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(o)},...o}:o,this)),l}resolve(l,r={}){let o,s,u,d,h;return ge(l)&&(l=[l]),Array.isArray(l)&&(l=l.map(p=>typeof p=="function"?Zi(p,{...this.options,...r}):p)),l.forEach(p=>{if(this.isValidLookup(o))return;const m=this.extractFromKey(p,r),x=m.key;s=x;let y=m.namespaces;this.options.fallbackNS&&(y=y.concat(this.options.fallbackNS));const w=r.count!==void 0&&!ge(r.count),C=w&&!r.ordinal&&r.count===0,R=r.context!==void 0&&(ge(r.context)||typeof r.context=="number")&&r.context!=="",E=r.lngs?r.lngs:this.languageUtils.toResolveHierarchy(r.lng||this.language,r.fallbackLng);y.forEach(T=>{this.isValidLookup(o)||(h=T,!wg[`${E[0]}-${T}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(h)&&(wg[`${E[0]}-${T}`]=!0,this.logger.warn(`key "${s}" for languages "${E.join(", ")}" won't get resolved as namespace "${h}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),E.forEach(_=>{if(this.isValidLookup(o))return;d=_;const M=[x];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(M,x,_,T,r);else{let V;w&&(V=this.pluralResolver.getSuffix(_,r.count,r));const G=`${this.options.pluralSeparator}zero`,Z=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(w&&(r.ordinal&&V.indexOf(Z)===0&&M.push(x+V.replace(Z,this.options.pluralSeparator)),M.push(x+V),C&&M.push(x+G)),R){const P=`${x}${this.options.contextSeparator||"_"}${r.context}`;M.push(P),w&&(r.ordinal&&V.indexOf(Z)===0&&M.push(P+V.replace(Z,this.options.pluralSeparator)),M.push(P+V),C&&M.push(P+G))}}let z;for(;z=M.pop();)this.isValidLookup(o)||(u=z,o=this.getResource(_,T,z,r))}))})}),{res:o,usedKey:s,exactUsedKey:u,usedLng:d,usedNS:h}}isValidLookup(l){return l!==void 0&&!(!this.options.returnNull&&l===null)&&!(!this.options.returnEmptyString&&l==="")}getResource(l,r,o,s={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(l,r,o,s):this.resourceStore.getResource(l,r,o,s)}getUsedParamsDetails(l={}){const r=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=l.replace&&!ge(l.replace);let s=o?l.replace:l;if(o&&typeof l.count<"u"&&(s.count=l.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!o){s={...s};for(const u of r)delete s[u]}return s}static hasDefaultValue(l){const r="defaultValue";for(const o in l)if(Object.prototype.hasOwnProperty.call(l,o)&&r===o.substring(0,r.length)&&l[o]!==void 0)return!0;return!1}}class Cg{constructor(l){this.options=l,this.supportedLngs=this.options.supportedLngs||!1,this.logger=un.create("languageUtils")}getScriptPartFromCode(l){if(l=er(l),!l||l.indexOf("-")<0)return null;const r=l.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}getLanguagePartFromCode(l){if(l=er(l),!l||l.indexOf("-")<0)return l;const r=l.split("-");return this.formatLanguageCode(r[0])}formatLanguageCode(l){if(ge(l)&&l.indexOf("-")>-1){let r;try{r=Intl.getCanonicalLocales(l)[0]}catch{}return r&&this.options.lowerCaseLng&&(r=r.toLowerCase()),r||(this.options.lowerCaseLng?l.toLowerCase():l)}return this.options.cleanCode||this.options.lowerCaseLng?l.toLowerCase():l}isSupportedCode(l){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(l=this.getLanguagePartFromCode(l)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(l)>-1}getBestMatchFromCodes(l){if(!l)return null;let r;return l.forEach(o=>{if(r)return;const s=this.formatLanguageCode(o);(!this.options.supportedLngs||this.isSupportedCode(s))&&(r=s)}),!r&&this.options.supportedLngs&&l.forEach(o=>{if(r)return;const s=this.getScriptPartFromCode(o);if(this.isSupportedCode(s))return r=s;const u=this.getLanguagePartFromCode(o);if(this.isSupportedCode(u))return r=u;r=this.options.supportedLngs.find(d=>{if(d===u)return d;if(!(d.indexOf("-")<0&&u.indexOf("-")<0)&&(d.indexOf("-")>0&&u.indexOf("-")<0&&d.substring(0,d.indexOf("-"))===u||d.indexOf(u)===0&&u.length>1))return d})}),r||(r=this.getFallbackCodes(this.options.fallbackLng)[0]),r}getFallbackCodes(l,r){if(!l)return[];if(typeof l=="function"&&(l=l(r)),ge(l)&&(l=[l]),Array.isArray(l))return l;if(!r)return l.default||[];let o=l[r];return o||(o=l[this.getScriptPartFromCode(r)]),o||(o=l[this.formatLanguageCode(r)]),o||(o=l[this.getLanguagePartFromCode(r)]),o||(o=l.default),o||[]}toResolveHierarchy(l,r){const o=this.getFallbackCodes((r===!1?[]:r)||this.options.fallbackLng||[],l),s=[],u=d=>{d&&(this.isSupportedCode(d)?s.push(d):this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`))};return ge(l)&&(l.indexOf("-")>-1||l.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(l)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(l)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(l))):ge(l)&&u(this.formatLanguageCode(l)),o.forEach(d=>{s.indexOf(d)<0&&u(this.formatLanguageCode(d))}),s}}const Tg={zero:0,one:1,two:2,few:3,many:4,other:5},Rg={select:a=>a===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class CE{constructor(l,r={}){this.languageUtils=l,this.options=r,this.logger=un.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(l,r={}){const o=er(l==="dev"?"en":l),s=r.ordinal?"ordinal":"cardinal",u=JSON.stringify({cleanedCode:o,type:s});if(u in this.pluralRulesCache)return this.pluralRulesCache[u];let d;try{d=new Intl.PluralRules(o,{type:s})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),Rg;if(!l.match(/-|_/))return Rg;const p=this.languageUtils.getLanguagePartFromCode(l);d=this.getRule(p,r)}return this.pluralRulesCache[u]=d,d}needsPlural(l,r={}){let o=this.getRule(l,r);return o||(o=this.getRule("dev",r)),o?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(l,r,o={}){return this.getSuffixes(l,o).map(s=>`${r}${s}`)}getSuffixes(l,r={}){let o=this.getRule(l,r);return o||(o=this.getRule("dev",r)),o?o.resolvedOptions().pluralCategories.sort((s,u)=>Tg[s]-Tg[u]).map(s=>`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(l,r,o={}){const s=this.getRule(l,o);return s?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${s.select(r)}`:(this.logger.warn(`no plural rule found for: ${l}`),this.getSuffix("dev",r,o))}}const Ag=(a,l,r,o=".",s=!0)=>{let u=mE(a,l,r);return!u&&s&&ge(r)&&(u=mf(a,r,o),u===void 0&&(u=mf(l,r,o))),u},Qu=a=>a.replace(/\$/g,"$$$$");class Ng{constructor(l={}){this.logger=un.create("interpolator"),this.options=l,this.format=l?.interpolation?.format||(r=>r),this.init(l)}init(l={}){l.interpolation||(l.interpolation={escapeValue:!0});const{escape:r,escapeValue:o,useRawValueToEscape:s,prefix:u,prefixEscaped:d,suffix:h,suffixEscaped:p,formatSeparator:m,unescapeSuffix:x,unescapePrefix:y,nestingPrefix:w,nestingPrefixEscaped:C,nestingSuffix:R,nestingSuffixEscaped:E,nestingOptionsSeparator:T,maxReplaces:_,alwaysFormat:M}=l.interpolation;this.escape=r!==void 0?r:yE,this.escapeValue=o!==void 0?o:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=u?Ba(u):d||"{{",this.suffix=h?Ba(h):p||"}}",this.formatSeparator=m||",",this.unescapePrefix=x?"":y||"-",this.unescapeSuffix=this.unescapePrefix?"":x||"",this.nestingPrefix=w?Ba(w):C||Ba("$t("),this.nestingSuffix=R?Ba(R):E||Ba(")"),this.nestingOptionsSeparator=T||",",this.maxReplaces=_||1e3,this.alwaysFormat=M!==void 0?M:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const l=(r,o)=>r?.source===o?(r.lastIndex=0,r):new RegExp(o,"g");this.regexp=l(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=l(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=l(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(l,r,o,s){let u,d,h;const p=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},m=C=>{if(C.indexOf(this.formatSeparator)<0){const _=Ag(r,p,C,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(_,void 0,o,{...s,...r,interpolationkey:C}):_}const R=C.split(this.formatSeparator),E=R.shift().trim(),T=R.join(this.formatSeparator).trim();return this.format(Ag(r,p,E,this.options.keySeparator,this.options.ignoreJSONStructure),T,o,{...s,...r,interpolationkey:E})};this.resetRegExp();const x=s?.missingInterpolationHandler||this.options.missingInterpolationHandler,y=s?.interpolation?.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:C=>Qu(C)},{regex:this.regexp,safeValue:C=>this.escapeValue?Qu(this.escape(C)):Qu(C)}].forEach(C=>{for(h=0;u=C.regex.exec(l);){const R=u[1].trim();if(d=m(R),d===void 0)if(typeof x=="function"){const T=x(l,u,s);d=ge(T)?T:""}else if(s&&Object.prototype.hasOwnProperty.call(s,R))d="";else if(y){d=u[0];continue}else this.logger.warn(`missed to pass in variable ${R} for interpolating ${l}`),d="";else!ge(d)&&!this.useRawValueToEscape&&(d=vg(d));const E=C.safeValue(d);if(l=l.replace(u[0],E),y?(C.regex.lastIndex+=d.length,C.regex.lastIndex-=u[0].length):C.regex.lastIndex=0,h++,h>=this.maxReplaces)break}}),l}nest(l,r,o={}){let s,u,d;const h=(p,m)=>{const x=this.nestingOptionsSeparator;if(p.indexOf(x)<0)return p;const y=p.split(new RegExp(`${Ba(x)}[ ]*{`));let w=`{${y[1]}`;p=y[0],w=this.interpolate(w,d);const C=w.match(/'/g),R=w.match(/"/g);((C?.length??0)%2===0&&!R||(R?.length??0)%2!==0)&&(w=w.replace(/'/g,'"'));try{d=JSON.parse(w),m&&(d={...m,...d})}catch(E){return this.logger.warn(`failed parsing options string in nesting for key ${p}`,E),`${p}${x}${w}`}return d.defaultValue&&d.defaultValue.indexOf(this.prefix)>-1&&delete d.defaultValue,p};for(;s=this.nestingRegexp.exec(l);){let p=[];d={...o},d=d.replace&&!ge(d.replace)?d.replace:d,d.applyPostProcessor=!1,delete d.defaultValue;const m=/{.*}/.test(s[1])?s[1].lastIndexOf("}")+1:s[1].indexOf(this.formatSeparator);if(m!==-1&&(p=s[1].slice(m).split(this.formatSeparator).map(x=>x.trim()).filter(Boolean),s[1]=s[1].slice(0,m)),u=r(h.call(this,s[1].trim(),d),d),u&&s[0]===l&&!ge(u))return u;ge(u)||(u=vg(u)),u||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${l}`),u=""),p.length&&(u=p.reduce((x,y)=>this.format(x,y,o.lng,{...o,interpolationkey:s[1].trim()}),u.trim())),l=l.replace(s[0],u),this.regexp.lastIndex=0}return l}}const TE=a=>{let l=a.toLowerCase().trim();const r={};if(a.indexOf("(")>-1){const o=a.split("(");l=o[0].toLowerCase().trim();const s=o[1].substring(0,o[1].length-1);l==="currency"&&s.indexOf(":")<0?r.currency||(r.currency=s.trim()):l==="relativetime"&&s.indexOf(":")<0?r.range||(r.range=s.trim()):s.split(";").forEach(d=>{if(d){const[h,...p]=d.split(":"),m=p.join(":").trim().replace(/^'+|'+$/g,""),x=h.trim();r[x]||(r[x]=m),m==="false"&&(r[x]=!1),m==="true"&&(r[x]=!0),isNaN(m)||(r[x]=parseInt(m,10))}})}return{formatName:l,formatOptions:r}},Og=a=>{const l={};return(r,o,s)=>{let u=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(u={...u,[s.interpolationkey]:void 0});const d=o+JSON.stringify(u);let h=l[d];return h||(h=a(er(o),s),l[d]=h),h(r)}},RE=a=>(l,r,o)=>a(er(r),o)(l);class AE{constructor(l={}){this.logger=un.create("formatter"),this.options=l,this.init(l)}init(l,r={interpolation:{}}){this.formatSeparator=r.interpolation.formatSeparator||",";const o=r.cacheInBuiltFormats?Og:RE;this.formats={number:o((s,u)=>{const d=new Intl.NumberFormat(s,{...u});return h=>d.format(h)}),currency:o((s,u)=>{const d=new Intl.NumberFormat(s,{...u,style:"currency"});return h=>d.format(h)}),datetime:o((s,u)=>{const d=new Intl.DateTimeFormat(s,{...u});return h=>d.format(h)}),relativetime:o((s,u)=>{const d=new Intl.RelativeTimeFormat(s,{...u});return h=>d.format(h,u.range||"day")}),list:o((s,u)=>{const d=new Intl.ListFormat(s,{...u});return h=>d.format(h)})}}add(l,r){this.formats[l.toLowerCase().trim()]=r}addCached(l,r){this.formats[l.toLowerCase().trim()]=Og(r)}format(l,r,o,s={}){const u=r.split(this.formatSeparator);if(u.length>1&&u[0].indexOf("(")>1&&u[0].indexOf(")")<0&&u.find(h=>h.indexOf(")")>-1)){const h=u.findIndex(p=>p.indexOf(")")>-1);u[0]=[u[0],...u.splice(1,h)].join(this.formatSeparator)}return u.reduce((h,p)=>{const{formatName:m,formatOptions:x}=TE(p);if(this.formats[m]){let y=h;try{const w=s?.formatParams?.[s.interpolationkey]||{},C=w.locale||w.lng||s.locale||s.lng||o;y=this.formats[m](h,C,{...x,...s,...w})}catch(w){this.logger.warn(w)}return y}else this.logger.warn(`there was no format function for ${m}`);return h},l)}}const NE=(a,l)=>{a.pending[l]!==void 0&&(delete a.pending[l],a.pendingCount--)};class OE extends ss{constructor(l,r,o,s={}){super(),this.backend=l,this.store=r,this.services=o,this.languageUtils=o.languageUtils,this.options=s,this.logger=un.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(o,s.backend,s)}queueLoad(l,r,o,s){const u={},d={},h={},p={};return l.forEach(m=>{let x=!0;r.forEach(y=>{const w=`${m}|${y}`;!o.reload&&this.store.hasResourceBundle(m,y)?this.state[w]=2:this.state[w]<0||(this.state[w]===1?d[w]===void 0&&(d[w]=!0):(this.state[w]=1,x=!1,d[w]===void 0&&(d[w]=!0),u[w]===void 0&&(u[w]=!0),p[y]===void 0&&(p[y]=!0)))}),x||(h[m]=!0)}),(Object.keys(u).length||Object.keys(d).length)&&this.queue.push({pending:d,pendingCount:Object.keys(d).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(u),pending:Object.keys(d),toLoadLanguages:Object.keys(h),toLoadNamespaces:Object.keys(p)}}loaded(l,r,o){const s=l.split("|"),u=s[0],d=s[1];r&&this.emit("failedLoading",u,d,r),!r&&o&&this.store.addResourceBundle(u,d,o,void 0,void 0,{skipCopy:!0}),this.state[l]=r?-1:2,r&&o&&(this.state[l]=0);const h={};this.queue.forEach(p=>{pE(p.loaded,[u],d),NE(p,l),r&&p.errors.push(r),p.pendingCount===0&&!p.done&&(Object.keys(p.loaded).forEach(m=>{h[m]||(h[m]={});const x=p.loaded[m];x.length&&x.forEach(y=>{h[m][y]===void 0&&(h[m][y]=!0)})}),p.done=!0,p.errors.length?p.callback(p.errors):p.callback())}),this.emit("loaded",h),this.queue=this.queue.filter(p=>!p.done)}read(l,r,o,s=0,u=this.retryTimeout,d){if(!l.length)return d(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:l,ns:r,fcName:o,tried:s,wait:u,callback:d});return}this.readingCalls++;const h=(m,x)=>{if(this.readingCalls--,this.waitingReads.length>0){const y=this.waitingReads.shift();this.read(y.lng,y.ns,y.fcName,y.tried,y.wait,y.callback)}if(m&&x&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,l,r,o,s+1,u*2,d)},u);return}d(m,x)},p=this.backend[o].bind(this.backend);if(p.length===2){try{const m=p(l,r);m&&typeof m.then=="function"?m.then(x=>h(null,x)).catch(h):h(null,m)}catch(m){h(m)}return}return p(l,r,h)}prepareLoading(l,r,o={},s){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();ge(l)&&(l=this.languageUtils.toResolveHierarchy(l)),ge(r)&&(r=[r]);const u=this.queueLoad(l,r,o,s);if(!u.toLoad.length)return u.pending.length||s(),null;u.toLoad.forEach(d=>{this.loadOne(d)})}load(l,r,o){this.prepareLoading(l,r,{},o)}reload(l,r,o){this.prepareLoading(l,r,{reload:!0},o)}loadOne(l,r=""){const o=l.split("|"),s=o[0],u=o[1];this.read(s,u,"read",void 0,void 0,(d,h)=>{d&&this.logger.warn(`${r}loading namespace ${u} for language ${s} failed`,d),!d&&h&&this.logger.log(`${r}loaded namespace ${u} for language ${s}`,h),this.loaded(l,d,h)})}saveMissing(l,r,o,s,u,d={},h=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(r)){this.logger.warn(`did not save key "${o}" as the namespace "${r}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(o==null||o==="")){if(this.backend?.create){const p={...d,isUpdate:u},m=this.backend.create.bind(this.backend);if(m.length<6)try{let x;m.length===5?x=m(l,r,o,s,p):x=m(l,r,o,s),x&&typeof x.then=="function"?x.then(y=>h(null,y)).catch(h):h(null,x)}catch(x){h(x)}else m(l,r,o,s,h,p)}!l||!l[0]||this.store.addResource(l[0],r,o,s)}}}const Zu=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:a=>{let l={};if(typeof a[1]=="object"&&(l=a[1]),ge(a[1])&&(l.defaultValue=a[1]),ge(a[2])&&(l.tDescription=a[2]),typeof a[2]=="object"||typeof a[3]=="object"){const r=a[3]||a[2];Object.keys(r).forEach(o=>{l[o]=r[o]})}return l},interpolation:{escapeValue:!0,format:a=>a,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Mg=a=>(ge(a.ns)&&(a.ns=[a.ns]),ge(a.fallbackLng)&&(a.fallbackLng=[a.fallbackLng]),ge(a.fallbackNS)&&(a.fallbackNS=[a.fallbackNS]),a.supportedLngs?.indexOf?.("cimode")<0&&(a.supportedLngs=a.supportedLngs.concat(["cimode"])),typeof a.initImmediate=="boolean"&&(a.initAsync=a.initImmediate),a),Oo=()=>{},ME=a=>{Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach(r=>{typeof a[r]=="function"&&(a[r]=a[r].bind(a))})},Fy="__i18next_supportNoticeShown",_E=()=>typeof globalThis<"u"&&!!globalThis[Fy],jE=()=>{typeof globalThis<"u"&&(globalThis[Fy]=!0)},DE=a=>!!(a?.modules?.backend?.name?.indexOf("Locize")>0||a?.modules?.backend?.constructor?.name?.indexOf("Locize")>0||a?.options?.backend?.backends&&a.options.backend.backends.some(l=>l?.name?.indexOf("Locize")>0||l?.constructor?.name?.indexOf("Locize")>0)||a?.options?.backend?.projectId||a?.options?.backend?.backendOptions&&a.options.backend.backendOptions.some(l=>l?.projectId));class Ji extends ss{constructor(l={},r){if(super(),this.options=Mg(l),this.services={},this.logger=un,this.modules={external:[]},ME(this),r&&!this.isInitialized&&!l.isClone){if(!this.options.initAsync)return this.init(l,r),this;setTimeout(()=>{this.init(l,r)},0)}}init(l={},r){this.isInitializing=!0,typeof l=="function"&&(r=l,l={}),l.defaultNS==null&&l.ns&&(ge(l.ns)?l.defaultNS=l.ns:l.ns.indexOf("translation")<0&&(l.defaultNS=l.ns[0]));const o=Zu();this.options={...o,...this.options,...Mg(l)},this.options.interpolation={...o.interpolation,...this.options.interpolation},l.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=l.keySeparator),l.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=l.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=o.overloadTranslationOptionHandler),this.options.showSupportNotice!==!1&&!DE(this)&&!_E()&&(typeof console<"u"&&typeof console.info<"u"&&console.info("🌐 i18next is made possible by our own product, Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙"),jE());const s=m=>m?typeof m=="function"?new m:m:null;if(!this.options.isClone){this.modules.logger?un.init(s(this.modules.logger),this.options):un.init(null,this.options);let m;this.modules.formatter?m=this.modules.formatter:m=AE;const x=new Cg(this.options);this.store=new Eg(this.options.resources,this.options);const y=this.services;y.logger=un,y.resourceStore=this.store,y.languageUtils=x,y.pluralResolver=new CE(x,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==o.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),m&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(y.formatter=s(m),y.formatter.init&&y.formatter.init(y,this.options),this.options.interpolation.format=y.formatter.format.bind(y.formatter)),y.interpolator=new Ng(this.options),y.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},y.backendConnector=new OE(s(this.modules.backend),y.resourceStore,y,this.options),y.backendConnector.on("*",(C,...R)=>{this.emit(C,...R)}),this.modules.languageDetector&&(y.languageDetector=s(this.modules.languageDetector),y.languageDetector.init&&y.languageDetector.init(y,this.options.detection,this.options)),this.modules.i18nFormat&&(y.i18nFormat=s(this.modules.i18nFormat),y.i18nFormat.init&&y.i18nFormat.init(this)),this.translator=new Xo(this.services,this.options),this.translator.on("*",(C,...R)=>{this.emit(C,...R)}),this.modules.external.forEach(C=>{C.init&&C.init(this)})}if(this.format=this.options.interpolation.format,r||(r=Oo),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const m=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);m.length>0&&m[0]!=="dev"&&(this.options.lng=m[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(m=>{this[m]=(...x)=>this.store[m](...x)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(m=>{this[m]=(...x)=>(this.store[m](...x),this)});const h=Xi(),p=()=>{const m=(x,y)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),h.resolve(y),r(x,y)};if(this.languages&&!this.isInitialized)return m(null,this.t.bind(this));this.changeLanguage(this.options.lng,m)};return this.options.resources||!this.options.initAsync?p():setTimeout(p,0),h}loadResources(l,r=Oo){let o=r;const s=ge(l)?l:this.language;if(typeof l=="function"&&(o=l),!this.options.resources||this.options.partialBundledLanguages){if(s?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return o();const u=[],d=h=>{if(!h||h==="cimode")return;this.services.languageUtils.toResolveHierarchy(h).forEach(m=>{m!=="cimode"&&u.indexOf(m)<0&&u.push(m)})};s?d(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(p=>d(p)),this.options.preload?.forEach?.(h=>d(h)),this.services.backendConnector.load(u,this.options.ns,h=>{!h&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),o(h)})}else o(null)}reloadResources(l,r,o){const s=Xi();return typeof l=="function"&&(o=l,l=void 0),typeof r=="function"&&(o=r,r=void 0),l||(l=this.languages),r||(r=this.options.ns),o||(o=Oo),this.services.backendConnector.reload(l,r,u=>{s.resolve(),o(u)}),s}use(l){if(!l)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!l.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return l.type==="backend"&&(this.modules.backend=l),(l.type==="logger"||l.log&&l.warn&&l.error)&&(this.modules.logger=l),l.type==="languageDetector"&&(this.modules.languageDetector=l),l.type==="i18nFormat"&&(this.modules.i18nFormat=l),l.type==="postProcessor"&&Iy.addPostProcessor(l),l.type==="formatter"&&(this.modules.formatter=l),l.type==="3rdParty"&&this.modules.external.push(l),this}setResolvedLanguage(l){if(!(!l||!this.languages)&&!(["cimode","dev"].indexOf(l)>-1)){for(let r=0;r<this.languages.length;r++){const o=this.languages[r];if(!(["cimode","dev"].indexOf(o)>-1)&&this.store.hasLanguageSomeTranslations(o)){this.resolvedLanguage=o;break}}!this.resolvedLanguage&&this.languages.indexOf(l)<0&&this.store.hasLanguageSomeTranslations(l)&&(this.resolvedLanguage=l,this.languages.unshift(l))}}changeLanguage(l,r){this.isLanguageChangingTo=l;const o=Xi();this.emit("languageChanging",l);const s=h=>{this.language=h,this.languages=this.services.languageUtils.toResolveHierarchy(h),this.resolvedLanguage=void 0,this.setResolvedLanguage(h)},u=(h,p)=>{p?this.isLanguageChangingTo===l&&(s(p),this.translator.changeLanguage(p),this.isLanguageChangingTo=void 0,this.emit("languageChanged",p),this.logger.log("languageChanged",p)):this.isLanguageChangingTo=void 0,o.resolve((...m)=>this.t(...m)),r&&r(h,(...m)=>this.t(...m))},d=h=>{!l&&!h&&this.services.languageDetector&&(h=[]);const p=ge(h)?h:h&&h[0],m=this.store.hasLanguageSomeTranslations(p)?p:this.services.languageUtils.getBestMatchFromCodes(ge(h)?[h]:h);m&&(this.language||s(m),this.translator.language||this.translator.changeLanguage(m),this.services.languageDetector?.cacheUserLanguage?.(m)),this.loadResources(m,x=>{u(x,m)})};return!l&&this.services.languageDetector&&!this.services.languageDetector.async?d(this.services.languageDetector.detect()):!l&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(d):this.services.languageDetector.detect(d):d(l),o}getFixedT(l,r,o){const s=(u,d,...h)=>{let p;typeof d!="object"?p=this.options.overloadTranslationOptionHandler([u,d].concat(h)):p={...d},p.lng=p.lng||s.lng,p.lngs=p.lngs||s.lngs,p.ns=p.ns||s.ns,p.keyPrefix!==""&&(p.keyPrefix=p.keyPrefix||o||s.keyPrefix);const m=this.options.keySeparator||".";let x;return p.keyPrefix&&Array.isArray(u)?x=u.map(y=>(typeof y=="function"&&(y=Zi(y,{...this.options,...d})),`${p.keyPrefix}${m}${y}`)):(typeof u=="function"&&(u=Zi(u,{...this.options,...d})),x=p.keyPrefix?`${p.keyPrefix}${m}${u}`:u),this.t(x,p)};return ge(l)?s.lng=l:s.lngs=l,s.ns=r,s.keyPrefix=o,s}t(...l){return this.translator?.translate(...l)}exists(...l){return this.translator?.exists(...l)}setDefaultNamespace(l){this.options.defaultNS=l}hasLoadedNamespace(l,r={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=r.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,u=this.languages[this.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const d=(h,p)=>{const m=this.services.backendConnector.state[`${h}|${p}`];return m===-1||m===0||m===2};if(r.precheck){const h=r.precheck(this,d);if(h!==void 0)return h}return!!(this.hasResourceBundle(o,l)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||d(o,l)&&(!s||d(u,l)))}loadNamespaces(l,r){const o=Xi();return this.options.ns?(ge(l)&&(l=[l]),l.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{o.resolve(),r&&r(s)}),o):(r&&r(),Promise.resolve())}loadLanguages(l,r){const o=Xi();ge(l)&&(l=[l]);const s=this.options.preload||[],u=l.filter(d=>s.indexOf(d)<0&&this.services.languageUtils.isSupportedCode(d));return u.length?(this.options.preload=s.concat(u),this.loadResources(d=>{o.resolve(),r&&r(d)}),o):(r&&r(),Promise.resolve())}dir(l){if(l||(l=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!l)return"rtl";try{const s=new Intl.Locale(l);if(s&&s.getTextInfo){const u=s.getTextInfo();if(u&&u.direction)return u.direction}}catch{}const r=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],o=this.services?.languageUtils||new Cg(Zu());return l.toLowerCase().indexOf("-latn")>1?"ltr":r.indexOf(o.getLanguagePartFromCode(l))>-1||l.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(l={},r){const o=new Ji(l,r);return o.createInstance=Ji.createInstance,o}cloneInstance(l={},r=Oo){const o=l.forkResourceStore;o&&delete l.forkResourceStore;const s={...this.options,...l,isClone:!0},u=new Ji(s);if((l.debug!==void 0||l.prefix!==void 0)&&(u.logger=u.logger.clone(l)),["store","services","language"].forEach(h=>{u[h]=this[h]}),u.services={...this.services},u.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},o){const h=Object.keys(this.store.data).reduce((p,m)=>(p[m]={...this.store.data[m]},p[m]=Object.keys(p[m]).reduce((x,y)=>(x[y]={...p[m][y]},x),p[m]),p),{});u.store=new Eg(h,s),u.services.resourceStore=u.store}if(l.interpolation){const p={...Zu().interpolation,...this.options.interpolation,...l.interpolation},m={...s,interpolation:p};u.services.interpolator=new Ng(m)}return u.translator=new Xo(u.services,s),u.translator.on("*",(h,...p)=>{u.emit(h,...p)}),u.init(s,r),u.translator.options=s,u.translator.backendConnector.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},u}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const pt=Ji.createInstance();pt.createInstance;pt.dir;pt.init;pt.loadResources;pt.reloadResources;pt.use;pt.changeLanguage;pt.getFixedT;pt.t;pt.exists;pt.setDefaultNamespace;pt.hasLoadedNamespace;pt.loadNamespaces;pt.loadLanguages;const zE=(a,l,r,o)=>{const s=[r,{code:l,...o||{}}];if(a?.services?.logger?.forward)return a.services.logger.forward(s,"warn","react-i18next::",!0);Pa(s[0])&&(s[0]=`react-i18next:: ${s[0]}`),a?.services?.logger?.warn?a.services.logger.warn(...s):console?.warn&&console.warn(...s)},_g={},Qy=(a,l,r,o)=>{Pa(r)&&_g[r]||(Pa(r)&&(_g[r]=new Date),zE(a,l,r,o))},Zy=(a,l)=>()=>{if(a.isInitialized)l();else{const r=()=>{setTimeout(()=>{a.off("initialized",r)},0),l()};a.on("initialized",r)}},gf=(a,l,r)=>{a.loadNamespaces(l,Zy(a,r))},jg=(a,l,r,o)=>{if(Pa(r)&&(r=[r]),a.options.preload&&a.options.preload.indexOf(l)>-1)return gf(a,r,o);r.forEach(s=>{a.options.ns.indexOf(s)<0&&a.options.ns.push(s)}),a.loadLanguages(l,Zy(a,o))},LE=(a,l,r={})=>!l.languages||!l.languages.length?(Qy(l,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:l.languages}),!0):l.hasLoadedNamespace(a,{lng:r.lng,precheck:(o,s)=>{if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!s(o.isLanguageChangingTo,a))return!1}}),Pa=a=>typeof a=="string",kE=a=>typeof a=="object"&&a!==null,UE=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,HE={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},BE=a=>HE[a],VE=a=>a.replace(UE,BE);let yf={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:VE,transDefaultProps:void 0};const PE=(a={})=>{yf={...yf,...a}},GE=()=>yf;let Jy;const qE=a=>{Jy=a},YE=()=>Jy,KE={type:"3rdParty",init(a){PE(a.options.react),qE(a)}},Wy=v.createContext();class XE{constructor(){this.usedNamespaces={}}addUsedNamespaces(l){l.forEach(r=>{this.usedNamespaces[r]||(this.usedNamespaces[r]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var Ju={exports:{}},Wu={};var Dg;function IE(){if(Dg)return Wu;Dg=1;var a=ls();function l(y,w){return y===w&&(y!==0||1/y===1/w)||y!==y&&w!==w}var r=typeof Object.is=="function"?Object.is:l,o=a.useState,s=a.useEffect,u=a.useLayoutEffect,d=a.useDebugValue;function h(y,w){var C=w(),R=o({inst:{value:C,getSnapshot:w}}),E=R[0].inst,T=R[1];return u(function(){E.value=C,E.getSnapshot=w,p(E)&&T({inst:E})},[y,C,w]),s(function(){return p(E)&&T({inst:E}),y(function(){p(E)&&T({inst:E})})},[y]),d(C),C}function p(y){var w=y.getSnapshot;y=y.value;try{var C=w();return!r(y,C)}catch{return!0}}function m(y,w){return w()}var x=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?m:h;return Wu.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:x,Wu}var zg;function $E(){return zg||(zg=1,Ju.exports=IE()),Ju.exports}var FE=$E();const QE=(a,l)=>{if(Pa(l))return l;if(kE(l)&&Pa(l.defaultValue))return l.defaultValue;if(typeof a=="function")return"";if(Array.isArray(a)){const r=a[a.length-1];return typeof r=="function"?"":r}return a},ZE={t:QE,ready:!1},JE=()=>()=>{},Yl=(a,l={})=>{const{i18n:r}=l,{i18n:o,defaultNS:s}=v.useContext(Wy)||{},u=r||o||YE();u&&!u.reportNamespaces&&(u.reportNamespaces=new XE),u||Qy(u,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const d=v.useMemo(()=>({...GE(),...u?.options?.react,...l}),[u,l]),{useSuspense:h,keyPrefix:p}=d,m=s||u?.options?.defaultNS,x=Pa(m)?[m]:m||["translation"],y=v.useMemo(()=>x,x);u?.reportNamespaces?.addUsedNamespaces?.(y);const w=v.useRef(0),C=v.useCallback(W=>{if(!u)return JE;const{bindI18n:ee,bindI18nStore:ne}=d,te=()=>{w.current+=1,W()};return ee&&u.on(ee,te),ne&&u.store.on(ne,te),()=>{ee&&ee.split(" ").forEach(oe=>u.off(oe,te)),ne&&ne.split(" ").forEach(oe=>u.store.off(oe,te))}},[u,d]),R=v.useRef(),E=v.useCallback(()=>{if(!u)return ZE;const W=!!(u.isInitialized||u.initializedStoreOnce)&&y.every(ue=>LE(ue,u,d)),ee=l.lng||u.language,ne=w.current,te=R.current;if(te&&te.ready===W&&te.lng===ee&&te.keyPrefix===p&&te.revision===ne)return te;const re={t:u.getFixedT(ee,d.nsMode==="fallback"?y:y[0],p),ready:W,lng:ee,keyPrefix:p,revision:ne};return R.current=re,re},[u,y,p,d,l.lng]),[T,_]=v.useState(0),{t:M,ready:z}=FE.useSyncExternalStore(C,E,E);v.useEffect(()=>{if(u&&!z&&!h){const W=()=>_(ee=>ee+1);l.lng?jg(u,l.lng,y,W):gf(u,y,W)}},[u,l.lng,y,z,h,T]);const V=u||{},G=v.useRef(null),Z=v.useRef(),P=W=>{const ee=Object.getOwnPropertyDescriptors(W);ee.__original&&delete ee.__original;const ne=Object.create(Object.getPrototypeOf(W),ee);if(!Object.prototype.hasOwnProperty.call(ne,"__original"))try{Object.defineProperty(ne,"__original",{value:W,writable:!1,enumerable:!1,configurable:!1})}catch{}return ne},$=v.useMemo(()=>{const W=V,ee=W?.language;let ne=W;W&&(G.current&&G.current.__original===W?Z.current!==ee?(ne=P(W),G.current=ne,Z.current=ee):ne=G.current:(ne=P(W),G.current=ne,Z.current=ee));const te=[M,ne,z];return te.t=M,te.i18n=ne,te.ready=z,te},[M,V,z,V.resolvedLanguage,V.language,V.languages]);if(u&&h&&!z)throw new Promise(W=>{const ee=()=>W();l.lng?jg(u,l.lng,y,ee):gf(u,y,ee)});return $};function WE({i18n:a,defaultNS:l,children:r}){const o=v.useMemo(()=>({i18n:a,defaultNS:l}),[a,l]);return v.createElement(Wy.Provider,{value:o},r)}const ew={zh:{translation:{nav:{home:"首页",notes:"笔记",about:"关于"},home:{title:"技术笔记",subtitle:"记录学习，分享知识",description:"这里是我整理的技术笔记，涵盖前端、后端、AI、DevOps 等多个领域。",viewAll:"查看全部笔记",latestNotes:"最新笔记",categories:"分类浏览"},notes:{title:"全部笔记",search:"搜索笔记...",filterByCategory:"按分类筛选",allCategories:"全部分类",readMore:"阅读更多",noNotes:"暂无笔记",publishedOn:"发布于",updatedOn:"更新于",viewMode:"视图",cardView:"卡片视图",listView:"列表视图",sortBy:"排序",newest:"最新发布",oldest:"最早发布",sortTitle:"标题",recentlyUpdated:"最近更新"},note:{backToList:"返回列表",tags:"标签",relatedNotes:"相关笔记"},categories:{title:"分类",viewNotes:"查看笔记",noteCount:"{{count}} 篇笔记"},footer:{copyright:"© 2024 技术笔记. All rights reserved.",poweredBy:"Powered by React + Vite"},language:{zh:"中文",en:"English",switch:"切换语言"}}},en:{translation:{nav:{home:"Home",notes:"Notes",about:"About"},home:{title:"Tech Notes",subtitle:"Learn, Record, Share",description:"Here are my organized technical notes covering frontend, backend, AI, DevOps and more.",viewAll:"View All Notes",latestNotes:"Latest Notes",categories:"Browse by Category"},notes:{title:"All Notes",search:"Search notes...",filterByCategory:"Filter by Category",allCategories:"All Categories",readMore:"Read More",noNotes:"No notes yet",publishedOn:"Published on",updatedOn:"Updated on",viewMode:"View",cardView:"Card View",listView:"List View",sortBy:"Sort by",newest:"Newest First",oldest:"Oldest First",sortTitle:"Title",recentlyUpdated:"Recently Updated"},note:{backToList:"Back to List",tags:"Tags",relatedNotes:"Related Notes"},categories:{title:"Categories",viewNotes:"View Notes",noteCount:"{{count}} notes"},footer:{copyright:"© 2024 Tech Notes. All rights reserved.",poweredBy:"Powered by React + Vite"},language:{zh:"中文",en:"English",switch:"Switch Language"}}}};pt.use(KE).init({resources:ew,lng:"zh",fallbackLng:"zh",interpolation:{escapeValue:!1}});function Lg(a,l){if(typeof a=="function")return a(l);a!=null&&(a.current=l)}function or(...a){return l=>{let r=!1;const o=a.map(s=>{const u=Lg(s,l);return!r&&typeof u=="function"&&(r=!0),u});if(r)return()=>{for(let s=0;s<o.length;s++){const u=o[s];typeof u=="function"?u():Lg(a[s],null)}}}}function nt(...a){return v.useCallback(or(...a),a)}var tw=Symbol.for("react.lazy"),Io=jf[" use ".trim().toString()];function nw(a){return typeof a=="object"&&a!==null&&"then"in a}function ev(a){return a!=null&&typeof a=="object"&&"$$typeof"in a&&a.$$typeof===tw&&"_payload"in a&&nw(a._payload)}function aw(a){const l=lw(a),r=v.forwardRef((o,s)=>{let{children:u,...d}=o;ev(u)&&typeof Io=="function"&&(u=Io(u._payload));const h=v.Children.toArray(u),p=h.find(rw);if(p){const m=p.props.children,x=h.map(y=>y===p?v.Children.count(m)>1?v.Children.only(null):v.isValidElement(m)?m.props.children:null:y);return b.jsx(l,{...d,ref:s,children:v.isValidElement(m)?v.cloneElement(m,void 0,x):null})}return b.jsx(l,{...d,ref:s,children:u})});return r.displayName=`${a}.Slot`,r}var tv=aw("Slot");function lw(a){const l=v.forwardRef((r,o)=>{let{children:s,...u}=r;if(ev(s)&&typeof Io=="function"&&(s=Io(s._payload)),v.isValidElement(s)){const d=sw(s),h=ow(u,s.props);return s.type!==v.Fragment&&(h.ref=o?or(o,d):d),v.cloneElement(s,h)}return v.Children.count(s)>1?v.Children.only(null):null});return l.displayName=`${a}.SlotClone`,l}var iw=Symbol("radix.slottable");function rw(a){return v.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===iw}function ow(a,l){const r={...l};for(const o in l){const s=a[o],u=l[o];/^on[A-Z]/.test(o)?s&&u?r[o]=(...h)=>{const p=u(...h);return s(...h),p}:s&&(r[o]=s):o==="style"?r[o]={...s,...u}:o==="className"&&(r[o]=[s,u].filter(Boolean).join(" "))}return{...a,...r}}function sw(a){let l=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,r=l&&"isReactWarning"in l&&l.isReactWarning;return r?a.ref:(l=Object.getOwnPropertyDescriptor(a,"ref")?.get,r=l&&"isReactWarning"in l&&l.isReactWarning,r?a.props.ref:a.props.ref||a.ref)}function nv(a){var l,r,o="";if(typeof a=="string"||typeof a=="number")o+=a;else if(typeof a=="object")if(Array.isArray(a)){var s=a.length;for(l=0;l<s;l++)a[l]&&(r=nv(a[l]))&&(o&&(o+=" "),o+=r)}else for(r in a)a[r]&&(o&&(o+=" "),o+=r);return o}function av(){for(var a,l,r=0,o="",s=arguments.length;r<s;r++)(a=arguments[r])&&(l=nv(a))&&(o&&(o+=" "),o+=l);return o}const kg=a=>typeof a=="boolean"?`${a}`:a===0?"0":a,Ug=av,lv=(a,l)=>r=>{var o;if(l?.variants==null)return Ug(a,r?.class,r?.className);const{variants:s,defaultVariants:u}=l,d=Object.keys(s).map(m=>{const x=r?.[m],y=u?.[m];if(x===null)return null;const w=kg(x)||kg(y);return s[m][w]}),h=r&&Object.entries(r).reduce((m,x)=>{let[y,w]=x;return w===void 0||(m[y]=w),m},{}),p=l==null||(o=l.compoundVariants)===null||o===void 0?void 0:o.reduce((m,x)=>{let{class:y,className:w,...C}=x;return Object.entries(C).every(R=>{let[E,T]=R;return Array.isArray(T)?T.includes({...u,...h}[E]):{...u,...h}[E]===T})?[...m,y,w]:m},[]);return Ug(a,d,p,r?.class,r?.className)},cw=(a,l)=>{const r=new Array(a.length+l.length);for(let o=0;o<a.length;o++)r[o]=a[o];for(let o=0;o<l.length;o++)r[a.length+o]=l[o];return r},uw=(a,l)=>({classGroupId:a,validator:l}),iv=(a=new Map,l=null,r)=>({nextPart:a,validators:l,classGroupId:r}),$o="-",Hg=[],fw="arbitrary..",dw=a=>{const l=pw(a),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=a;return{getClassGroupId:d=>{if(d.startsWith("[")&&d.endsWith("]"))return hw(d);const h=d.split($o),p=h[0]===""&&h.length>1?1:0;return rv(h,p,l)},getConflictingClassGroupIds:(d,h)=>{if(h){const p=o[d],m=r[d];return p?m?cw(m,p):p:m||Hg}return r[d]||Hg}}},rv=(a,l,r)=>{if(a.length-l===0)return r.classGroupId;const s=a[l],u=r.nextPart.get(s);if(u){const m=rv(a,l+1,u);if(m)return m}const d=r.validators;if(d===null)return;const h=l===0?a.join($o):a.slice(l).join($o),p=d.length;for(let m=0;m<p;m++){const x=d[m];if(x.validator(h))return x.classGroupId}},hw=a=>a.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const l=a.slice(1,-1),r=l.indexOf(":"),o=l.slice(0,r);return o?fw+o:void 0})(),pw=a=>{const{theme:l,classGroups:r}=a;return mw(r,l)},mw=(a,l)=>{const r=iv();for(const o in a){const s=a[o];Bf(s,r,o,l)}return r},Bf=(a,l,r,o)=>{const s=a.length;for(let u=0;u<s;u++){const d=a[u];gw(d,l,r,o)}},gw=(a,l,r,o)=>{if(typeof a=="string"){yw(a,l,r);return}if(typeof a=="function"){vw(a,l,r,o);return}xw(a,l,r,o)},yw=(a,l,r)=>{const o=a===""?l:ov(l,a);o.classGroupId=r},vw=(a,l,r,o)=>{if(bw(a)){Bf(a(o),l,r,o);return}l.validators===null&&(l.validators=[]),l.validators.push(uw(r,a))},xw=(a,l,r,o)=>{const s=Object.entries(a),u=s.length;for(let d=0;d<u;d++){const[h,p]=s[d];Bf(p,ov(l,h),r,o)}},ov=(a,l)=>{let r=a;const o=l.split($o),s=o.length;for(let u=0;u<s;u++){const d=o[u];let h=r.nextPart.get(d);h||(h=iv(),r.nextPart.set(d,h)),r=h}return r},bw=a=>"isThemeGetter"in a&&a.isThemeGetter===!0,Sw=a=>{if(a<1)return{get:()=>{},set:()=>{}};let l=0,r=Object.create(null),o=Object.create(null);const s=(u,d)=>{r[u]=d,l++,l>a&&(l=0,o=r,r=Object.create(null))};return{get(u){let d=r[u];if(d!==void 0)return d;if((d=o[u])!==void 0)return s(u,d),d},set(u,d){u in r?r[u]=d:s(u,d)}}},vf="!",Bg=":",Ew=[],Vg=(a,l,r,o,s)=>({modifiers:a,hasImportantModifier:l,baseClassName:r,maybePostfixModifierPosition:o,isExternal:s}),ww=a=>{const{prefix:l,experimentalParseClassName:r}=a;let o=s=>{const u=[];let d=0,h=0,p=0,m;const x=s.length;for(let E=0;E<x;E++){const T=s[E];if(d===0&&h===0){if(T===Bg){u.push(s.slice(p,E)),p=E+1;continue}if(T==="/"){m=E;continue}}T==="["?d++:T==="]"?d--:T==="("?h++:T===")"&&h--}const y=u.length===0?s:s.slice(p);let w=y,C=!1;y.endsWith(vf)?(w=y.slice(0,-1),C=!0):y.startsWith(vf)&&(w=y.slice(1),C=!0);const R=m&&m>p?m-p:void 0;return Vg(u,C,w,R)};if(l){const s=l+Bg,u=o;o=d=>d.startsWith(s)?u(d.slice(s.length)):Vg(Ew,!1,d,void 0,!0)}if(r){const s=o;o=u=>r({className:u,parseClassName:s})}return o},Cw=a=>{const l=new Map;return a.orderSensitiveModifiers.forEach((r,o)=>{l.set(r,1e6+o)}),r=>{const o=[];let s=[];for(let u=0;u<r.length;u++){const d=r[u],h=d[0]==="[",p=l.has(d);h||p?(s.length>0&&(s.sort(),o.push(...s),s=[]),o.push(d)):s.push(d)}return s.length>0&&(s.sort(),o.push(...s)),o}},Tw=a=>({cache:Sw(a.cacheSize),parseClassName:ww(a),sortModifiers:Cw(a),...dw(a)}),Rw=/\s+/,Aw=(a,l)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:s,sortModifiers:u}=l,d=[],h=a.trim().split(Rw);let p="";for(let m=h.length-1;m>=0;m-=1){const x=h[m],{isExternal:y,modifiers:w,hasImportantModifier:C,baseClassName:R,maybePostfixModifierPosition:E}=r(x);if(y){p=x+(p.length>0?" "+p:p);continue}let T=!!E,_=o(T?R.substring(0,E):R);if(!_){if(!T){p=x+(p.length>0?" "+p:p);continue}if(_=o(R),!_){p=x+(p.length>0?" "+p:p);continue}T=!1}const M=w.length===0?"":w.length===1?w[0]:u(w).join(":"),z=C?M+vf:M,V=z+_;if(d.indexOf(V)>-1)continue;d.push(V);const G=s(_,T);for(let Z=0;Z<G.length;++Z){const P=G[Z];d.push(z+P)}p=x+(p.length>0?" "+p:p)}return p},Nw=(...a)=>{let l=0,r,o,s="";for(;l<a.length;)(r=a[l++])&&(o=sv(r))&&(s&&(s+=" "),s+=o);return s},sv=a=>{if(typeof a=="string")return a;let l,r="";for(let o=0;o<a.length;o++)a[o]&&(l=sv(a[o]))&&(r&&(r+=" "),r+=l);return r},Ow=(a,...l)=>{let r,o,s,u;const d=p=>{const m=l.reduce((x,y)=>y(x),a());return r=Tw(m),o=r.cache.get,s=r.cache.set,u=h,h(p)},h=p=>{const m=o(p);if(m)return m;const x=Aw(p,r);return s(p,x),x};return u=d,(...p)=>u(Nw(...p))},Mw=[],lt=a=>{const l=r=>r[a]||Mw;return l.isThemeGetter=!0,l},cv=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,uv=/^\((?:(\w[\w-]*):)?(.+)\)$/i,_w=/^\d+\/\d+$/,jw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Dw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,zw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Lw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,kw=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,_l=a=>_w.test(a),Ee=a=>!!a&&!Number.isNaN(Number(a)),ua=a=>!!a&&Number.isInteger(Number(a)),ef=a=>a.endsWith("%")&&Ee(a.slice(0,-1)),Ln=a=>jw.test(a),Uw=()=>!0,Hw=a=>Dw.test(a)&&!zw.test(a),fv=()=>!1,Bw=a=>Lw.test(a),Vw=a=>kw.test(a),Pw=a=>!le(a)&&!ie(a),Gw=a=>Kl(a,pv,fv),le=a=>cv.test(a),Va=a=>Kl(a,mv,Hw),tf=a=>Kl(a,Iw,Ee),Pg=a=>Kl(a,dv,fv),qw=a=>Kl(a,hv,Vw),Mo=a=>Kl(a,gv,Bw),ie=a=>uv.test(a),Ii=a=>Xl(a,mv),Yw=a=>Xl(a,$w),Gg=a=>Xl(a,dv),Kw=a=>Xl(a,pv),Xw=a=>Xl(a,hv),_o=a=>Xl(a,gv,!0),Kl=(a,l,r)=>{const o=cv.exec(a);return o?o[1]?l(o[1]):r(o[2]):!1},Xl=(a,l,r=!1)=>{const o=uv.exec(a);return o?o[1]?l(o[1]):r:!1},dv=a=>a==="position"||a==="percentage",hv=a=>a==="image"||a==="url",pv=a=>a==="length"||a==="size"||a==="bg-size",mv=a=>a==="length",Iw=a=>a==="number",$w=a=>a==="family-name",gv=a=>a==="shadow",Fw=()=>{const a=lt("color"),l=lt("font"),r=lt("text"),o=lt("font-weight"),s=lt("tracking"),u=lt("leading"),d=lt("breakpoint"),h=lt("container"),p=lt("spacing"),m=lt("radius"),x=lt("shadow"),y=lt("inset-shadow"),w=lt("text-shadow"),C=lt("drop-shadow"),R=lt("blur"),E=lt("perspective"),T=lt("aspect"),_=lt("ease"),M=lt("animate"),z=()=>["auto","avoid","all","avoid-page","page","left","right","column"],V=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],G=()=>[...V(),ie,le],Z=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto","contain","none"],$=()=>[ie,le,p],W=()=>[_l,"full","auto",...$()],ee=()=>[ua,"none","subgrid",ie,le],ne=()=>["auto",{span:["full",ua,ie,le]},ua,ie,le],te=()=>[ua,"auto",ie,le],oe=()=>["auto","min","max","fr",ie,le],re=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ue=()=>["start","end","center","stretch","center-safe","end-safe"],j=()=>["auto",...$()],K=()=>[_l,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...$()],H=()=>[a,ie,le],se=()=>[...V(),Gg,Pg,{position:[ie,le]}],pe=()=>["no-repeat",{repeat:["","x","y","space","round"]}],N=()=>["auto","cover","contain",Kw,Gw,{size:[ie,le]}],q=()=>[ef,Ii,Va],F=()=>["","none","full",m,ie,le],J=()=>["",Ee,Ii,Va],de=()=>["solid","dashed","dotted","double"],me=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Q=()=>[Ee,ef,Gg,Pg],be=()=>["","none",R,ie,le],ve=()=>["none",Ee,ie,le],Te=()=>["none",Ee,ie,le],Me=()=>[Ee,ie,le],ze=()=>[_l,"full",...$()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ln],breakpoint:[Ln],color:[Uw],container:[Ln],"drop-shadow":[Ln],ease:["in","out","in-out"],font:[Pw],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ln],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ln],shadow:[Ln],spacing:["px",Ee],text:[Ln],"text-shadow":[Ln],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",_l,le,ie,T]}],container:["container"],columns:[{columns:[Ee,le,ie,h]}],"break-after":[{"break-after":z()}],"break-before":[{"break-before":z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:G()}],overflow:[{overflow:Z()}],"overflow-x":[{"overflow-x":Z()}],"overflow-y":[{"overflow-y":Z()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:W()}],"inset-x":[{"inset-x":W()}],"inset-y":[{"inset-y":W()}],start:[{start:W()}],end:[{end:W()}],top:[{top:W()}],right:[{right:W()}],bottom:[{bottom:W()}],left:[{left:W()}],visibility:["visible","invisible","collapse"],z:[{z:[ua,"auto",ie,le]}],basis:[{basis:[_l,"full","auto",h,...$()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ee,_l,"auto","initial","none",le]}],grow:[{grow:["",Ee,ie,le]}],shrink:[{shrink:["",Ee,ie,le]}],order:[{order:[ua,"first","last","none",ie,le]}],"grid-cols":[{"grid-cols":ee()}],"col-start-end":[{col:ne()}],"col-start":[{"col-start":te()}],"col-end":[{"col-end":te()}],"grid-rows":[{"grid-rows":ee()}],"row-start-end":[{row:ne()}],"row-start":[{"row-start":te()}],"row-end":[{"row-end":te()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":oe()}],"auto-rows":[{"auto-rows":oe()}],gap:[{gap:$()}],"gap-x":[{"gap-x":$()}],"gap-y":[{"gap-y":$()}],"justify-content":[{justify:[...re(),"normal"]}],"justify-items":[{"justify-items":[...ue(),"normal"]}],"justify-self":[{"justify-self":["auto",...ue()]}],"align-content":[{content:["normal",...re()]}],"align-items":[{items:[...ue(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ue(),{baseline:["","last"]}]}],"place-content":[{"place-content":re()}],"place-items":[{"place-items":[...ue(),"baseline"]}],"place-self":[{"place-self":["auto",...ue()]}],p:[{p:$()}],px:[{px:$()}],py:[{py:$()}],ps:[{ps:$()}],pe:[{pe:$()}],pt:[{pt:$()}],pr:[{pr:$()}],pb:[{pb:$()}],pl:[{pl:$()}],m:[{m:j()}],mx:[{mx:j()}],my:[{my:j()}],ms:[{ms:j()}],me:[{me:j()}],mt:[{mt:j()}],mr:[{mr:j()}],mb:[{mb:j()}],ml:[{ml:j()}],"space-x":[{"space-x":$()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":$()}],"space-y-reverse":["space-y-reverse"],size:[{size:K()}],w:[{w:[h,"screen",...K()]}],"min-w":[{"min-w":[h,"screen","none",...K()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[d]},...K()]}],h:[{h:["screen","lh",...K()]}],"min-h":[{"min-h":["screen","lh","none",...K()]}],"max-h":[{"max-h":["screen","lh",...K()]}],"font-size":[{text:["base",r,Ii,Va]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,ie,tf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ef,le]}],"font-family":[{font:[Yw,le,l]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,ie,le]}],"line-clamp":[{"line-clamp":[Ee,"none",ie,tf]}],leading:[{leading:[u,...$()]}],"list-image":[{"list-image":["none",ie,le]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ie,le]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:H()}],"text-color":[{text:H()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...de(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ee,"from-font","auto",ie,Va]}],"text-decoration-color":[{decoration:H()}],"underline-offset":[{"underline-offset":[Ee,"auto",ie,le]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:$()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ie,le]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ie,le]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:se()}],"bg-repeat":[{bg:pe()}],"bg-size":[{bg:N()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ua,ie,le],radial:["",ie,le],conic:[ua,ie,le]},Xw,qw]}],"bg-color":[{bg:H()}],"gradient-from-pos":[{from:q()}],"gradient-via-pos":[{via:q()}],"gradient-to-pos":[{to:q()}],"gradient-from":[{from:H()}],"gradient-via":[{via:H()}],"gradient-to":[{to:H()}],rounded:[{rounded:F()}],"rounded-s":[{"rounded-s":F()}],"rounded-e":[{"rounded-e":F()}],"rounded-t":[{"rounded-t":F()}],"rounded-r":[{"rounded-r":F()}],"rounded-b":[{"rounded-b":F()}],"rounded-l":[{"rounded-l":F()}],"rounded-ss":[{"rounded-ss":F()}],"rounded-se":[{"rounded-se":F()}],"rounded-ee":[{"rounded-ee":F()}],"rounded-es":[{"rounded-es":F()}],"rounded-tl":[{"rounded-tl":F()}],"rounded-tr":[{"rounded-tr":F()}],"rounded-br":[{"rounded-br":F()}],"rounded-bl":[{"rounded-bl":F()}],"border-w":[{border:J()}],"border-w-x":[{"border-x":J()}],"border-w-y":[{"border-y":J()}],"border-w-s":[{"border-s":J()}],"border-w-e":[{"border-e":J()}],"border-w-t":[{"border-t":J()}],"border-w-r":[{"border-r":J()}],"border-w-b":[{"border-b":J()}],"border-w-l":[{"border-l":J()}],"divide-x":[{"divide-x":J()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":J()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...de(),"hidden","none"]}],"divide-style":[{divide:[...de(),"hidden","none"]}],"border-color":[{border:H()}],"border-color-x":[{"border-x":H()}],"border-color-y":[{"border-y":H()}],"border-color-s":[{"border-s":H()}],"border-color-e":[{"border-e":H()}],"border-color-t":[{"border-t":H()}],"border-color-r":[{"border-r":H()}],"border-color-b":[{"border-b":H()}],"border-color-l":[{"border-l":H()}],"divide-color":[{divide:H()}],"outline-style":[{outline:[...de(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ee,ie,le]}],"outline-w":[{outline:["",Ee,Ii,Va]}],"outline-color":[{outline:H()}],shadow:[{shadow:["","none",x,_o,Mo]}],"shadow-color":[{shadow:H()}],"inset-shadow":[{"inset-shadow":["none",y,_o,Mo]}],"inset-shadow-color":[{"inset-shadow":H()}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:H()}],"ring-offset-w":[{"ring-offset":[Ee,Va]}],"ring-offset-color":[{"ring-offset":H()}],"inset-ring-w":[{"inset-ring":J()}],"inset-ring-color":[{"inset-ring":H()}],"text-shadow":[{"text-shadow":["none",w,_o,Mo]}],"text-shadow-color":[{"text-shadow":H()}],opacity:[{opacity:[Ee,ie,le]}],"mix-blend":[{"mix-blend":[...me(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":me()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ee]}],"mask-image-linear-from-pos":[{"mask-linear-from":Q()}],"mask-image-linear-to-pos":[{"mask-linear-to":Q()}],"mask-image-linear-from-color":[{"mask-linear-from":H()}],"mask-image-linear-to-color":[{"mask-linear-to":H()}],"mask-image-t-from-pos":[{"mask-t-from":Q()}],"mask-image-t-to-pos":[{"mask-t-to":Q()}],"mask-image-t-from-color":[{"mask-t-from":H()}],"mask-image-t-to-color":[{"mask-t-to":H()}],"mask-image-r-from-pos":[{"mask-r-from":Q()}],"mask-image-r-to-pos":[{"mask-r-to":Q()}],"mask-image-r-from-color":[{"mask-r-from":H()}],"mask-image-r-to-color":[{"mask-r-to":H()}],"mask-image-b-from-pos":[{"mask-b-from":Q()}],"mask-image-b-to-pos":[{"mask-b-to":Q()}],"mask-image-b-from-color":[{"mask-b-from":H()}],"mask-image-b-to-color":[{"mask-b-to":H()}],"mask-image-l-from-pos":[{"mask-l-from":Q()}],"mask-image-l-to-pos":[{"mask-l-to":Q()}],"mask-image-l-from-color":[{"mask-l-from":H()}],"mask-image-l-to-color":[{"mask-l-to":H()}],"mask-image-x-from-pos":[{"mask-x-from":Q()}],"mask-image-x-to-pos":[{"mask-x-to":Q()}],"mask-image-x-from-color":[{"mask-x-from":H()}],"mask-image-x-to-color":[{"mask-x-to":H()}],"mask-image-y-from-pos":[{"mask-y-from":Q()}],"mask-image-y-to-pos":[{"mask-y-to":Q()}],"mask-image-y-from-color":[{"mask-y-from":H()}],"mask-image-y-to-color":[{"mask-y-to":H()}],"mask-image-radial":[{"mask-radial":[ie,le]}],"mask-image-radial-from-pos":[{"mask-radial-from":Q()}],"mask-image-radial-to-pos":[{"mask-radial-to":Q()}],"mask-image-radial-from-color":[{"mask-radial-from":H()}],"mask-image-radial-to-color":[{"mask-radial-to":H()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":V()}],"mask-image-conic-pos":[{"mask-conic":[Ee]}],"mask-image-conic-from-pos":[{"mask-conic-from":Q()}],"mask-image-conic-to-pos":[{"mask-conic-to":Q()}],"mask-image-conic-from-color":[{"mask-conic-from":H()}],"mask-image-conic-to-color":[{"mask-conic-to":H()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:se()}],"mask-repeat":[{mask:pe()}],"mask-size":[{mask:N()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ie,le]}],filter:[{filter:["","none",ie,le]}],blur:[{blur:be()}],brightness:[{brightness:[Ee,ie,le]}],contrast:[{contrast:[Ee,ie,le]}],"drop-shadow":[{"drop-shadow":["","none",C,_o,Mo]}],"drop-shadow-color":[{"drop-shadow":H()}],grayscale:[{grayscale:["",Ee,ie,le]}],"hue-rotate":[{"hue-rotate":[Ee,ie,le]}],invert:[{invert:["",Ee,ie,le]}],saturate:[{saturate:[Ee,ie,le]}],sepia:[{sepia:["",Ee,ie,le]}],"backdrop-filter":[{"backdrop-filter":["","none",ie,le]}],"backdrop-blur":[{"backdrop-blur":be()}],"backdrop-brightness":[{"backdrop-brightness":[Ee,ie,le]}],"backdrop-contrast":[{"backdrop-contrast":[Ee,ie,le]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ee,ie,le]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ee,ie,le]}],"backdrop-invert":[{"backdrop-invert":["",Ee,ie,le]}],"backdrop-opacity":[{"backdrop-opacity":[Ee,ie,le]}],"backdrop-saturate":[{"backdrop-saturate":[Ee,ie,le]}],"backdrop-sepia":[{"backdrop-sepia":["",Ee,ie,le]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":$()}],"border-spacing-x":[{"border-spacing-x":$()}],"border-spacing-y":[{"border-spacing-y":$()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ie,le]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ee,"initial",ie,le]}],ease:[{ease:["linear","initial",_,ie,le]}],delay:[{delay:[Ee,ie,le]}],animate:[{animate:["none",M,ie,le]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[E,ie,le]}],"perspective-origin":[{"perspective-origin":G()}],rotate:[{rotate:ve()}],"rotate-x":[{"rotate-x":ve()}],"rotate-y":[{"rotate-y":ve()}],"rotate-z":[{"rotate-z":ve()}],scale:[{scale:Te()}],"scale-x":[{"scale-x":Te()}],"scale-y":[{"scale-y":Te()}],"scale-z":[{"scale-z":Te()}],"scale-3d":["scale-3d"],skew:[{skew:Me()}],"skew-x":[{"skew-x":Me()}],"skew-y":[{"skew-y":Me()}],transform:[{transform:[ie,le,"","none","gpu","cpu"]}],"transform-origin":[{origin:G()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ze()}],"translate-x":[{"translate-x":ze()}],"translate-y":[{"translate-y":ze()}],"translate-z":[{"translate-z":ze()}],"translate-none":["translate-none"],accent:[{accent:H()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:H()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ie,le]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":$()}],"scroll-mx":[{"scroll-mx":$()}],"scroll-my":[{"scroll-my":$()}],"scroll-ms":[{"scroll-ms":$()}],"scroll-me":[{"scroll-me":$()}],"scroll-mt":[{"scroll-mt":$()}],"scroll-mr":[{"scroll-mr":$()}],"scroll-mb":[{"scroll-mb":$()}],"scroll-ml":[{"scroll-ml":$()}],"scroll-p":[{"scroll-p":$()}],"scroll-px":[{"scroll-px":$()}],"scroll-py":[{"scroll-py":$()}],"scroll-ps":[{"scroll-ps":$()}],"scroll-pe":[{"scroll-pe":$()}],"scroll-pt":[{"scroll-pt":$()}],"scroll-pr":[{"scroll-pr":$()}],"scroll-pb":[{"scroll-pb":$()}],"scroll-pl":[{"scroll-pl":$()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ie,le]}],fill:[{fill:["none",...H()]}],"stroke-w":[{stroke:[Ee,Ii,Va,tf]}],stroke:[{stroke:["none",...H()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Qw=Ow(Fw);function Ft(...a){return Qw(av(a))}const Zw=lv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function $t({className:a,variant:l="default",size:r="default",asChild:o=!1,...s}){const u=o?tv:"button";return b.jsx(u,{"data-slot":"button","data-variant":l,"data-size":r,className:Ft(Zw({variant:l,size:r,className:a})),...s})}const Jw=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ww=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,r,o)=>o?o.toUpperCase():r.toLowerCase()),qg=a=>{const l=Ww(a);return l.charAt(0).toUpperCase()+l.slice(1)},yv=(...a)=>a.filter((l,r,o)=>!!l&&l.trim()!==""&&o.indexOf(l)===r).join(" ").trim(),e2=a=>{for(const l in a)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};var t2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const n2=v.forwardRef(({color:a="currentColor",size:l=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:s="",children:u,iconNode:d,...h},p)=>v.createElement("svg",{ref:p,...t2,width:l,height:l,stroke:a,strokeWidth:o?Number(r)*24/Number(l):r,className:yv("lucide",s),...!u&&!e2(h)&&{"aria-hidden":"true"},...h},[...d.map(([m,x])=>v.createElement(m,x)),...Array.isArray(u)?u:[u]]));const Oe=(a,l)=>{const r=v.forwardRef(({className:o,...s},u)=>v.createElement(n2,{ref:u,iconNode:l,className:yv(`lucide-${Jw(qg(a))}`,`lucide-${a}`,o),...s}));return r.displayName=qg(a),r};const a2=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],vv=Oe("arrow-left",a2);const l2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Yg=Oe("arrow-right",l2);const i2=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],r2=Oe("arrow-up-down",i2);const o2=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Fo=Oe("book-open",o2);const s2=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],xv=Oe("calculator",s2);const c2=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],cs=Oe("calendar",c2);const u2=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],bv=Oe("car",u2);const f2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],d2=Oe("check",f2);const h2=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Sv=Oe("chevron-down",h2);const p2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],kl=Oe("chevron-right",p2);const m2=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],g2=Oe("chevron-up",m2);const y2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]],Ev=Oe("circuit-board",y2);const v2=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],wv=Oe("clock",v2);const x2=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Qo=Oe("code",x2);const b2=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Cv=Oe("cpu",b2);const S2=[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",key:"1iv0i2"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Tv=Oe("factory",S2);const E2=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],Rv=Oe("file-code",E2);const w2=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Av=Oe("folder-open",w2);const C2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Kg=Oe("globe",C2);const T2=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Nv=Oe("grid-3x3",T2);const R2=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],A2=Oe("house",R2);const N2=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],O2=Oe("layout-grid",N2);const M2=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],_2=Oe("list",M2);const j2=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],D2=Oe("menu",j2);const z2=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 17h4",key:"pvmtpo"}],["path",{d:"M10 7h4",key:"1vgcok"}],["path",{d:"M18 12h2",key:"quuxs7"}],["path",{d:"M18 18h2",key:"4scel"}],["path",{d:"M18 6h2",key:"1ptzki"}],["path",{d:"M4 12h2",key:"1ltxp0"}],["path",{d:"M4 18h2",key:"1xrofg"}],["path",{d:"M4 6h2",key:"1cx33n"}],["rect",{x:"6",y:"2",width:"12",height:"20",rx:"2",key:"749fme"}]],Zo=Oe("microchip",z2);const L2=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Ov=Oe("network",L2);const k2=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Mv=Oe("radio",k2);const U2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],H2=Oe("search",U2);const B2=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Vf=Oe("tag",B2);const V2=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],_v=Oe("terminal",V2);const P2=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],jv=Oe("timer",P2);const G2=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],Dv=Oe("wifi",G2);const q2=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Jo=Oe("wrench",q2);const Y2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],K2=Oe("x",Y2);function X2(){const{t:a,i18n:l}=Yl(),r=mn(),[o,s]=v.useState(!1),u=()=>{const p=l.language==="zh"?"en":"zh";l.changeLanguage(p)},d=[{path:"/",label:a("nav.home"),icon:A2},{path:"/notes",label:a("nav.notes"),icon:Fo}],h=p=>p==="/"?r.pathname==="/":r.pathname.startsWith(p);return b.jsx("nav",{className:"sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200",children:b.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[b.jsxs("div",{className:"flex items-center justify-between h-16",children:[b.jsxs(Ze,{to:"/",className:"flex items-center gap-2",children:[b.jsx("div",{className:"w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center",children:b.jsx(Fo,{className:"w-5 h-5 text-white"})}),b.jsx("span",{className:"text-xl font-bold text-slate-800",children:a("home.title")})]}),b.jsx("div",{className:"hidden md:flex items-center gap-1",children:d.map(p=>b.jsx(Ze,{to:p.path,children:b.jsxs($t,{variant:h(p.path)?"default":"ghost",className:h(p.path)?"bg-indigo-500 hover:bg-indigo-600":"",children:[b.jsx(p.icon,{className:"w-4 h-4 mr-2"}),p.label]})},p.path))}),b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsxs($t,{variant:"ghost",size:"sm",onClick:u,className:"hidden md:flex items-center gap-2",children:[b.jsx(Kg,{className:"w-4 h-4"}),b.jsx("span",{children:l.language==="zh"?"EN":"中文"})]}),b.jsx($t,{variant:"ghost",size:"icon",className:"md:hidden",onClick:()=>s(!o),children:o?b.jsx(K2,{className:"w-5 h-5"}):b.jsx(D2,{className:"w-5 h-5"})})]})]}),o&&b.jsx("div",{className:"md:hidden py-4 border-t border-slate-100",children:b.jsxs("div",{className:"flex flex-col gap-2",children:[d.map(p=>b.jsx(Ze,{to:p.path,onClick:()=>s(!1),children:b.jsxs($t,{variant:h(p.path)?"default":"ghost",className:`w-full justify-start ${h(p.path)?"bg-indigo-500 hover:bg-indigo-600":""}`,children:[b.jsx(p.icon,{className:"w-4 h-4 mr-2"}),p.label]})},p.path)),b.jsxs($t,{variant:"ghost",className:"w-full justify-start",onClick:()=>{u(),s(!1)},children:[b.jsx(Kg,{className:"w-4 h-4 mr-2"}),a("language.switch")," (",l.language==="zh"?"EN":"中文",")"]})]})})]})})}function I2(){const{t:a}=Yl();return b.jsx("footer",{className:"bg-white border-t border-slate-200",children:b.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:b.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[b.jsx("p",{className:"text-sm text-slate-500",children:a("footer.copyright")}),b.jsx("p",{className:"text-sm text-slate-400",children:a("footer.poweredBy")})]})})})}function $2({children:a}){return b.jsxs("div",{className:"min-h-screen flex flex-col bg-slate-50",children:[b.jsx(X2,{}),b.jsx("main",{className:"flex-1",children:a}),b.jsx(I2,{})]})}function ha({className:a,...l}){return b.jsx("div",{"data-slot":"card",className:Ft("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",a),...l})}function pa({className:a,...l}){return b.jsx("div",{"data-slot":"card-content",className:Ft("px-6",a),...l})}const F2=lv("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function us({className:a,variant:l,asChild:r=!1,...o}){const s=r?tv:"span";return b.jsx(s,{"data-slot":"badge",className:Ft(F2({variant:l}),a),...o})}const Q2=`## useState 使用技巧

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
`,Z2=`## useState Tips

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
`,J2=`## 事件循环优化

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
`,W2=`## Event Loop Optimization

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
`,eC=`# Git 工作流最佳实践

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
`,tC=`# Git Workflow Best Practices

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
`,nC=`# CSS Flexbox 布局完全指南

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
`,aC=`# CSS Flexbox Complete Guide

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
`,lC=`# TypeScript 高级用法

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
`,iC=`# TypeScript Advanced Usage

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
`,rC=`# RESTful API 设计最佳实践

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
`,oC=`# RESTful API Design Best Practices

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
`,sC=`# 数据库性能优化指南

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
`,cC=`# Database Performance Optimization Guide

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
`,zv=[{id:"1",slug:"react-hooks-best-practices",status:"published",category:"frontend",tags:["React","Hooks","Best Practices"],createdAt:"2024-03-15",updatedAt:"2024-03-18",zh:{title:"React Hooks 最佳实践",summary:"深入理解 React Hooks 的使用模式，包括 useState、useEffect、useCallback 和 useMemo 的正确用法。",content:Q2},en:{title:"React Hooks Best Practices",summary:"Deep dive into React Hooks usage patterns, including proper usage of useState, useEffect, useCallback, and useMemo.",content:Z2}},{id:"2",slug:"nodejs-performance-optimization",status:"published",category:"backend",tags:["Node.js","Performance","Optimization"],createdAt:"2024-03-10",updatedAt:"2024-03-12",zh:{title:"Node.js 性能优化指南",summary:"从事件循环、内存管理到集群部署，全面提升 Node.js 应用性能。",content:J2},en:{title:"Node.js Performance Optimization Guide",summary:"From event loop, memory management to cluster deployment, comprehensively improve Node.js application performance.",content:W2}},{id:"3",slug:"llm-prompt-engineering",status:"published",category:"ai",tags:["LLM","Prompt Engineering","AI"],createdAt:"2024-03-05",updatedAt:"2024-03-08",zh:{title:"大语言模型提示工程",summary:"掌握提示工程技巧，让 LLM 输出更准确、更有用的结果。",content:`## 基础技巧

### 清晰明确的指令

\`\`\`
不好的提示：
"写一些关于狗的东西"

好的提示：
"写一篇 300 字的博客文章，介绍金毛寻回犬的性格特点，
适合有小孩的家庭饲养的原因。"
\`\`\`

### 使用分隔符

\`\`\`
请总结以下文本，用 3 个要点：
"""
[长文本内容]
"""
\`\`\`

## 高级技巧

### Chain-of-Thought 思维链

引导模型逐步思考：

\`\`\`
问题：一个农场有鸡和兔子，共有 35 个头和 94 只脚。
鸡和兔子各有多少只？

请一步步思考并解决这个问题。
\`\`\`

### Few-Shot 示例

提供示例让模型学习模式：

\`\`\`
将以下中文翻译成英文：

中文：你好
英文：Hello

中文：谢谢
英文：Thank you

中文：很高兴见到你
英文：
\`\`\`

## 最佳实践

1. **迭代优化**：根据输出不断调整提示
2. **版本控制**：记录不同版本的提示效果
3. **测试覆盖**：用多种输入测试提示的鲁棒性`},en:{title:"LLM Prompt Engineering",summary:"Master prompt engineering techniques to get more accurate and useful results from LLMs.",content:`## Basic Techniques

### Clear and Specific Instructions

\`\`\`
Bad prompt:
"Write something about dogs"

Good prompt:
"Write a 300-word blog post about Golden Retriever personality traits
and why they are suitable for families with children."
\`\`\`

### Use Delimiters

\`\`\`
Please summarize the following text in 3 bullet points:
"""
[Long text content]
"""
\`\`\`

## Advanced Techniques

### Chain-of-Thought

Guide the model to think step by step:

\`\`\`
Problem: A farm has chickens and rabbits, with 35 heads and 94 legs total.
How many chickens and rabbits are there?

Please think step by step and solve this problem.
\`\`\`

### Few-Shot Examples

Provide examples for the model to learn patterns:

\`\`\`
Translate the following Chinese to English:

Chinese: 你好
English: Hello

Chinese: 谢谢
English: Thank you

Chinese: 很高兴见到你
English:
\`\`\`

## Best Practices

1. **Iterative Optimization**: Continuously adjust prompts based on outputs
2. **Version Control**: Record the effectiveness of different prompt versions
3. **Test Coverage**: Test prompt robustness with various inputs`}},{id:"4",slug:"docker-kubernetes-basics",status:"published",category:"devops",tags:["Docker","Kubernetes","Container"],createdAt:"2024-02-28",updatedAt:"2024-03-01",zh:{title:"Docker 与 Kubernetes 入门",summary:"容器化技术入门指南，从 Docker 基础到 K8s 编排。",content:`## Docker 基础

### 什么是容器

容器是轻量级、可移植、自包含的软件运行环境。

### Dockerfile 示例

\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

### 常用命令

\`\`\`bash
# 构建镜像
docker build -t myapp:1.0 .

# 运行容器
docker run -d -p 3000:3000 myapp:1.0

# 查看运行中的容器
docker ps

# 停止容器
docker stop <container-id>
\`\`\`

## Kubernetes 入门

### 核心概念

- **Pod**: 最小的部署单元
- **Service**: 暴露应用的网络服务
- **Deployment**: 管理 Pod 的副本和更新
- **ConfigMap/Secret**: 配置管理

### Deployment 示例

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:1.0
        ports:
        - containerPort: 3000
\`\`\``},en:{title:"Docker and Kubernetes Basics",summary:"Containerization technology guide, from Docker basics to K8s orchestration.",content:`## Docker Basics

### What is a Container

A container is a lightweight, portable, self-contained software runtime environment.

### Dockerfile Example

\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

### Common Commands

\`\`\`bash
# Build image
docker build -t myapp:1.0 .

# Run container
docker run -d -p 3000:3000 myapp:1.0

# View running containers
docker ps

# Stop container
docker stop <container-id>
\`\`\`

## Kubernetes Basics

### Core Concepts

- **Pod**: Smallest deployment unit
- **Service**: Expose application network services
- **Deployment**: Manage Pod replicas and updates
- **ConfigMap/Secret**: Configuration management

### Deployment Example

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:1.0
        ports:
        - containerPort: 3000
\`\`\``}},{id:"5",slug:"microservices-design-patterns",status:"draft",category:"architecture",tags:["Microservices","Design Patterns","Architecture"],createdAt:"2024-02-20",updatedAt:"2024-02-25",zh:{title:"微服务设计模式",summary:"微服务架构的核心设计模式，包括服务发现、熔断、网关等。",content:`## 核心模式

### 服务发现

服务实例需要能够相互发现，常见方案：
- **客户端发现**：客户端直接查询服务注册中心
- **服务端发现**：通过负载均衡器转发请求

### 熔断器模式

防止故障级联，保护系统稳定性：

\`\`\`
Closed -> Open -> Half-Open
\`\`\`

### API 网关

统一入口，处理横切关注点：
- 认证授权
- 请求路由
- 限流熔断
- 协议转换

## 数据管理

### 数据库 per Service

每个服务拥有自己的数据库，确保服务独立性。

### Saga 模式

处理分布式事务，通过补偿操作保证最终一致性。`},en:{title:"Microservices Design Patterns",summary:"Core design patterns for microservices architecture, including service discovery, circuit breaker, gateway, etc.",content:`## Core Patterns

### Service Discovery

Service instances need to discover each other:
- **Client-side discovery**: Client queries service registry directly
- **Server-side discovery**: Requests forwarded through load balancer

### Circuit Breaker Pattern

Prevent cascading failures and protect system stability:

\`\`\`
Closed -> Open -> Half-Open
\`\`\`

### API Gateway

Unified entry point for cross-cutting concerns:
- Authentication and authorization
- Request routing
- Rate limiting and circuit breaking
- Protocol translation

## Data Management

### Database per Service

Each service has its own database to ensure independence.

### Saga Pattern

Handle distributed transactions through compensating operations for eventual consistency.`}},{id:"6",slug:"git-workflow",status:"published",category:"devops",tags:["Git","Workflow","DevOps"],createdAt:"2024-03-20",updatedAt:"2024-03-20",zh:{title:"Git 工作流最佳实践",summary:"团队协作中 Git 分支管理策略与提交规范详解。",content:eC},en:{title:"Git Workflow Best Practices",summary:"Branch management strategies and commit conventions for team collaboration.",content:tC}},{id:"7",slug:"css-flexbox",status:"published",category:"frontend",tags:["CSS","Flexbox","Layout"],createdAt:"2024-03-22",updatedAt:"2024-03-22",zh:{title:"CSS Flexbox 布局完全指南",summary:"从基础概念到实战技巧，全面掌握 Flexbox 弹性布局。",content:nC},en:{title:"CSS Flexbox Complete Guide",summary:"From basics to practical techniques, master Flexbox layout.",content:aC}},{id:"8",slug:"typescript-advanced",status:"published",category:"frontend",tags:["TypeScript","JavaScript","Frontend"],createdAt:"2024-03-25",updatedAt:"2024-03-25",zh:{title:"TypeScript 高级用法",summary:"深入理解泛型、条件类型、映射类型等 TypeScript 高级特性。",content:lC},en:{title:"TypeScript Advanced Usage",summary:"Deep dive into generics, conditional types, mapped types and other advanced TypeScript features.",content:iC}},{id:"9",slug:"restful-api-design",status:"published",category:"backend",tags:["API","REST","Backend"],createdAt:"2024-03-26",updatedAt:"2024-03-26",zh:{title:"RESTful API 设计最佳实践",summary:"从 URL 设计到状态码规范，构建高质量的 RESTful API。",content:rC},en:{title:"RESTful API Design Best Practices",summary:"From URL design to status code conventions, build high-quality RESTful APIs.",content:oC}},{id:"10",slug:"database-optimization",status:"published",category:"backend",tags:["Database","Performance","SQL"],createdAt:"2024-03-28",updatedAt:"2024-03-28",zh:{title:"数据库性能优化指南",summary:"索引优化、查询优化、缓存策略，全面提升数据库性能。",content:sC},en:{title:"Database Performance Optimization Guide",summary:"Index optimization, query optimization, caching strategies for comprehensive database performance.",content:cC}}];function fs(){return zv.filter(a=>a.status==="published")}function uC(a){return zv.find(l=>l.slug===a)}function fC(a){return fs().filter(l=>l.category===a)}const Xa=[{id:"mcu",slug:"mcu",icon:"Cpu",zh:{name:"单片机/MCU",description:"STM32、ESP32、Arduino、树莓派 Pico 等微控制器开发"},en:{name:"MCU",description:"STM32, ESP32, Arduino, Raspberry Pi Pico development"}},{id:"mpu",slug:"mpu",icon:"Microchip",zh:{name:"嵌入式处理器",description:"ARM Cortex-A、RISC-V、树莓派、全志、瑞芯微等 Linux 嵌入式平台"},en:{name:"Embedded MPU",description:"ARM Cortex-A, RISC-V, Raspberry Pi, Allwinner, Rockchip Linux platforms"}},{id:"fpga",slug:"fpga",icon:"Grid3x3",zh:{name:"FPGA/Verilog",description:"Xilinx、Altera、Lattice FPGA 开发，Verilog/VHDL 数字电路设计"},en:{name:"FPGA/Verilog",description:"Xilinx, Altera, Lattice FPGA, Verilog/VHDL digital design"}},{id:"rtos",slug:"rtos",icon:"Timer",zh:{name:"实时操作系统",description:"FreeRTOS、RT-Thread、Zephyr、μC/OS 等 RTOS 原理与移植"},en:{name:"RTOS",description:"FreeRTOS, RT-Thread, Zephyr, μC/OS principles and porting"}},{id:"embedded-linux",slug:"embedded-linux",icon:"Terminal",zh:{name:"嵌入式 Linux",description:"Linux 内核移植、驱动开发、Buildroot/Yocto、设备树"},en:{name:"Embedded Linux",description:"Linux kernel porting, driver development, Buildroot/Yocto, device tree"}},{id:"firmware",slug:"firmware",icon:"FileCode",zh:{name:"固件开发",description:"Bare-metal 编程、启动代码、链接脚本、Bootloader"},en:{name:"Firmware",description:"Bare-metal programming, startup code, linker scripts, Bootloader"}},{id:"protocols",slug:"protocols",icon:"Network",zh:{name:"通信协议",description:"CAN/CANFD、Modbus、RS485、I2C、SPI、UART、USB、Ethernet、BLE、LoRa"},en:{name:"Protocols",description:"CAN/CANFD, Modbus, RS485, I2C, SPI, UART, USB, Ethernet, BLE, LoRa"}},{id:"network",slug:"network",icon:"Wifi",zh:{name:"网络通信",description:"TCP/IP、MQTT、CoAP、HTTP、Socket、LwIP、网络栈配置"},en:{name:"Networking",description:"TCP/IP, MQTT, CoAP, HTTP, Socket, LwIP, network stack"}},{id:"tools",slug:"tools",icon:"Wrench",zh:{name:"开发工具",description:"Keil、IAR、VS Code、PlatformIO、OpenOCD、JTAG/SWD 调试"},en:{name:"Tools",description:"Keil, IAR, VS Code, PlatformIO, OpenOCD, JTAG/SWD debugging"}},{id:"hardware-design",slug:"hardware-design",icon:"CircuitBoard",zh:{name:"硬件设计",description:"Altium Designer、KiCad、PCB Layout、电路设计、信号完整性"},en:{name:"Hardware Design",description:"Altium Designer, KiCad, PCB Layout, circuit design, signal integrity"}},{id:"automotive",slug:"automotive",icon:"Car",zh:{name:"汽车电子",description:"汽车总线、ECU、功能安全、Autosar、诊断协议 UDS"},en:{name:"Automotive",description:"Automotive bus, ECU, functional safety, Autosar, UDS diagnostics"}},{id:"iot",slug:"iot",icon:"Radio",zh:{name:"物联网/IoT",description:"传感器、边缘计算、云平台对接、OTA升级、低功耗设计"},en:{name:"IoT",description:"Sensors, edge computing, cloud integration, OTA, low power design"}},{id:"industrial",slug:"industrial",icon:"Factory",zh:{name:"工业控制",description:"PLC、运动控制、PID算法、工业以太网、机器视觉"},en:{name:"Industrial",description:"PLC, motion control, PID algorithms, industrial Ethernet, machine vision"}},{id:"embedded-c",slug:"embedded-c",icon:"Code",zh:{name:"嵌入式 C/C++",description:"嵌入式编程规范、内存管理、中断处理、代码优化"},en:{name:"Embedded C/C++",description:"Embedded coding standards, memory management, interrupts, optimization"}},{id:"algorithms",slug:"algorithms",icon:"Calculator",zh:{name:"算法与数据结构",description:"滤波算法、数字信号处理、控制算法、常用数据结构"},en:{name:"Algorithms",description:"Filter algorithms, DSP, control algorithms, data structures"}}],dC=a=>Xa.find(l=>l.slug===a),hC={mcu:Cv,mpu:Zo,fpga:Nv,rtos:jv,"embedded-linux":_v,firmware:Rv,protocols:Ov,network:Dv,tools:Jo,"hardware-design":Ev,automotive:bv,iot:Mv,industrial:Tv,"embedded-c":Qo,algorithms:xv,frontend:Qo,backend:Zo,devops:Jo};function pC(){const{t:a,i18n:l}=Yl(),r=l.language,o=fs().slice(0,6);return b.jsxs("div",{children:[b.jsxs("section",{className:"relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white py-20 md:py-32",children:[b.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"}),b.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[b.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:a("home.title")}),b.jsx("p",{className:"text-xl md:text-2xl text-indigo-100 mb-4",children:a("home.subtitle")}),b.jsx("p",{className:"text-lg text-indigo-200 mb-8 max-w-2xl mx-auto",children:a("home.description")}),b.jsx(Ze,{to:"/notes",children:b.jsxs($t,{size:"lg",className:"bg-white text-indigo-600 hover:bg-indigo-50",children:[a("home.viewAll"),b.jsx(Yg,{className:"w-4 h-4 ml-2"})]})})]})]}),b.jsx("section",{className:"py-16 bg-white",children:b.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[b.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center",children:a("home.categories")}),b.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:Xa.map(s=>{const u=hC[s.slug]||Fo;return b.jsx(Ze,{to:`/category/${s.slug}`,children:b.jsx(ha,{className:"h-full hover:shadow-lg transition-shadow cursor-pointer group",children:b.jsx(pa,{className:"p-6",children:b.jsxs("div",{className:"flex items-start gap-4",children:[b.jsx("div",{className:"w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-500 transition-colors",children:b.jsx(u,{className:"w-6 h-6 text-indigo-500 group-hover:text-white transition-colors"})}),b.jsxs("div",{children:[b.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-1",children:s[r].name}),b.jsx("p",{className:"text-sm text-slate-500",children:s[r].description})]})]})})})},s.id)})})]})}),b.jsx("section",{className:"py-16 bg-slate-50",children:b.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[b.jsxs("div",{className:"flex items-center justify-between mb-8",children:[b.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-slate-800",children:a("home.latestNotes")}),b.jsx(Ze,{to:"/notes",children:b.jsxs($t,{variant:"ghost",className:"text-indigo-600",children:[a("home.viewAll"),b.jsx(Yg,{className:"w-4 h-4 ml-1"})]})})]}),b.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:o.map(s=>b.jsx(mC,{note:s,lang:r},s.id))})]})})]})}function mC({note:a,lang:l}){const r=Xa.find(o=>o.slug===a.category);return b.jsx(Ze,{to:`/notes/${a.slug}`,children:b.jsx(ha,{className:"h-full hover:shadow-lg transition-shadow cursor-pointer",children:b.jsxs(pa,{className:"p-6",children:[b.jsx("div",{className:"flex items-center gap-2 mb-3",children:b.jsx(us,{variant:"secondary",className:"text-xs",children:r?.[l].name})}),b.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-2 line-clamp-2",children:a[l].title}),b.jsx("p",{className:"text-sm text-slate-500 mb-4 line-clamp-3",children:a[l].summary}),b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsx("div",{className:"flex flex-wrap gap-1",children:a.tags.slice(0,2).map(o=>b.jsxs("span",{className:"text-xs text-slate-400",children:["#",o]},o))}),b.jsx("span",{className:"text-xs text-slate-400",children:a.createdAt})]})]})})})}function gC({className:a,type:l,...r}){return b.jsx("input",{type:l,"data-slot":"input",className:Ft("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",a),...r})}function Xg(a,[l,r]){return Math.min(r,Math.max(l,a))}function Pe(a,l,{checkForDefaultPrevented:r=!0}={}){return function(s){if(a?.(s),r===!1||!s.defaultPrevented)return l?.(s)}}function ds(a,l=[]){let r=[];function o(u,d){const h=v.createContext(d),p=r.length;r=[...r,d];const m=y=>{const{scope:w,children:C,...R}=y,E=w?.[a]?.[p]||h,T=v.useMemo(()=>R,Object.values(R));return b.jsx(E.Provider,{value:T,children:C})};m.displayName=u+"Provider";function x(y,w){const C=w?.[a]?.[p]||h,R=v.useContext(C);if(R)return R;if(d!==void 0)return d;throw new Error(`\`${y}\` must be used within \`${u}\``)}return[m,x]}const s=()=>{const u=r.map(d=>v.createContext(d));return function(h){const p=h?.[a]||u;return v.useMemo(()=>({[`__scope${a}`]:{...h,[a]:p}}),[h,p])}};return s.scopeName=a,[o,yC(s,...l)]}function yC(...a){const l=a[0];if(a.length===1)return l;const r=()=>{const o=a.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(u){const d=o.reduce((h,{useScope:p,scopeName:m})=>{const y=p(u)[`__scope${m}`];return{...h,...y}},{});return v.useMemo(()=>({[`__scope${l.scopeName}`]:d}),[d])}};return r.scopeName=l.scopeName,r}function Ig(a){const l=vC(a),r=v.forwardRef((o,s)=>{const{children:u,...d}=o,h=v.Children.toArray(u),p=h.find(bC);if(p){const m=p.props.children,x=h.map(y=>y===p?v.Children.count(m)>1?v.Children.only(null):v.isValidElement(m)?m.props.children:null:y);return b.jsx(l,{...d,ref:s,children:v.isValidElement(m)?v.cloneElement(m,void 0,x):null})}return b.jsx(l,{...d,ref:s,children:u})});return r.displayName=`${a}.Slot`,r}function vC(a){const l=v.forwardRef((r,o)=>{const{children:s,...u}=r;if(v.isValidElement(s)){const d=EC(s),h=SC(u,s.props);return s.type!==v.Fragment&&(h.ref=o?or(o,d):d),v.cloneElement(s,h)}return v.Children.count(s)>1?v.Children.only(null):null});return l.displayName=`${a}.SlotClone`,l}var xC=Symbol("radix.slottable");function bC(a){return v.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===xC}function SC(a,l){const r={...l};for(const o in l){const s=a[o],u=l[o];/^on[A-Z]/.test(o)?s&&u?r[o]=(...h)=>{const p=u(...h);return s(...h),p}:s&&(r[o]=s):o==="style"?r[o]={...s,...u}:o==="className"&&(r[o]=[s,u].filter(Boolean).join(" "))}return{...a,...r}}function EC(a){let l=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,r=l&&"isReactWarning"in l&&l.isReactWarning;return r?a.ref:(l=Object.getOwnPropertyDescriptor(a,"ref")?.get,r=l&&"isReactWarning"in l&&l.isReactWarning,r?a.props.ref:a.props.ref||a.ref)}function wC(a){const l=a+"CollectionProvider",[r,o]=ds(l),[s,u]=r(l,{collectionRef:{current:null},itemMap:new Map}),d=E=>{const{scope:T,children:_}=E,M=fa.useRef(null),z=fa.useRef(new Map).current;return b.jsx(s,{scope:T,itemMap:z,collectionRef:M,children:_})};d.displayName=l;const h=a+"CollectionSlot",p=Ig(h),m=fa.forwardRef((E,T)=>{const{scope:_,children:M}=E,z=u(h,_),V=nt(T,z.collectionRef);return b.jsx(p,{ref:V,children:M})});m.displayName=h;const x=a+"CollectionItemSlot",y="data-radix-collection-item",w=Ig(x),C=fa.forwardRef((E,T)=>{const{scope:_,children:M,...z}=E,V=fa.useRef(null),G=nt(T,V),Z=u(x,_);return fa.useEffect(()=>(Z.itemMap.set(V,{ref:V,...z}),()=>{Z.itemMap.delete(V)})),b.jsx(w,{[y]:"",ref:G,children:M})});C.displayName=x;function R(E){const T=u(a+"CollectionConsumer",E);return fa.useCallback(()=>{const M=T.collectionRef.current;if(!M)return[];const z=Array.from(M.querySelectorAll(`[${y}]`));return Array.from(T.itemMap.values()).sort((Z,P)=>z.indexOf(Z.ref.current)-z.indexOf(P.ref.current))},[T.collectionRef,T.itemMap])}return[{Provider:d,Slot:m,ItemSlot:C},R,o]}var CC=v.createContext(void 0);function TC(a){const l=v.useContext(CC);return a||l||"ltr"}function RC(a){const l=AC(a),r=v.forwardRef((o,s)=>{const{children:u,...d}=o,h=v.Children.toArray(u),p=h.find(OC);if(p){const m=p.props.children,x=h.map(y=>y===p?v.Children.count(m)>1?v.Children.only(null):v.isValidElement(m)?m.props.children:null:y);return b.jsx(l,{...d,ref:s,children:v.isValidElement(m)?v.cloneElement(m,void 0,x):null})}return b.jsx(l,{...d,ref:s,children:u})});return r.displayName=`${a}.Slot`,r}function AC(a){const l=v.forwardRef((r,o)=>{const{children:s,...u}=r;if(v.isValidElement(s)){const d=_C(s),h=MC(u,s.props);return s.type!==v.Fragment&&(h.ref=o?or(o,d):d),v.cloneElement(s,h)}return v.Children.count(s)>1?v.Children.only(null):null});return l.displayName=`${a}.SlotClone`,l}var NC=Symbol("radix.slottable");function OC(a){return v.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===NC}function MC(a,l){const r={...l};for(const o in l){const s=a[o],u=l[o];/^on[A-Z]/.test(o)?s&&u?r[o]=(...h)=>{const p=u(...h);return s(...h),p}:s&&(r[o]=s):o==="style"?r[o]={...s,...u}:o==="className"&&(r[o]=[s,u].filter(Boolean).join(" "))}return{...a,...r}}function _C(a){let l=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,r=l&&"isReactWarning"in l&&l.isReactWarning;return r?a.ref:(l=Object.getOwnPropertyDescriptor(a,"ref")?.get,r=l&&"isReactWarning"in l&&l.isReactWarning,r?a.props.ref:a.props.ref||a.ref)}var jC=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],$e=jC.reduce((a,l)=>{const r=RC(`Primitive.${l}`),o=v.forwardRef((s,u)=>{const{asChild:d,...h}=s,p=d?r:l;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),b.jsx(p,{...h,ref:u})});return o.displayName=`Primitive.${l}`,{...a,[l]:o}},{});function DC(a,l){a&&rr.flushSync(()=>a.dispatchEvent(l))}function Ga(a){const l=v.useRef(a);return v.useEffect(()=>{l.current=a}),v.useMemo(()=>(...r)=>l.current?.(...r),[])}function zC(a,l=globalThis?.document){const r=Ga(a);v.useEffect(()=>{const o=s=>{s.key==="Escape"&&r(s)};return l.addEventListener("keydown",o,{capture:!0}),()=>l.removeEventListener("keydown",o,{capture:!0})},[r,l])}var LC="DismissableLayer",xf="dismissableLayer.update",kC="dismissableLayer.pointerDownOutside",UC="dismissableLayer.focusOutside",$g,Lv=v.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Pf=v.forwardRef((a,l)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:u,onInteractOutside:d,onDismiss:h,...p}=a,m=v.useContext(Lv),[x,y]=v.useState(null),w=x?.ownerDocument??globalThis?.document,[,C]=v.useState({}),R=nt(l,P=>y(P)),E=Array.from(m.layers),[T]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),_=E.indexOf(T),M=x?E.indexOf(x):-1,z=m.layersWithOutsidePointerEventsDisabled.size>0,V=M>=_,G=VC(P=>{const $=P.target,W=[...m.branches].some(ee=>ee.contains($));!V||W||(s?.(P),d?.(P),P.defaultPrevented||h?.())},w),Z=PC(P=>{const $=P.target;[...m.branches].some(ee=>ee.contains($))||(u?.(P),d?.(P),P.defaultPrevented||h?.())},w);return zC(P=>{M===m.layers.size-1&&(o?.(P),!P.defaultPrevented&&h&&(P.preventDefault(),h()))},w),v.useEffect(()=>{if(x)return r&&(m.layersWithOutsidePointerEventsDisabled.size===0&&($g=w.body.style.pointerEvents,w.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(x)),m.layers.add(x),Fg(),()=>{r&&m.layersWithOutsidePointerEventsDisabled.size===1&&(w.body.style.pointerEvents=$g)}},[x,w,r,m]),v.useEffect(()=>()=>{x&&(m.layers.delete(x),m.layersWithOutsidePointerEventsDisabled.delete(x),Fg())},[x,m]),v.useEffect(()=>{const P=()=>C({});return document.addEventListener(xf,P),()=>document.removeEventListener(xf,P)},[]),b.jsx($e.div,{...p,ref:R,style:{pointerEvents:z?V?"auto":"none":void 0,...a.style},onFocusCapture:Pe(a.onFocusCapture,Z.onFocusCapture),onBlurCapture:Pe(a.onBlurCapture,Z.onBlurCapture),onPointerDownCapture:Pe(a.onPointerDownCapture,G.onPointerDownCapture)})});Pf.displayName=LC;var HC="DismissableLayerBranch",BC=v.forwardRef((a,l)=>{const r=v.useContext(Lv),o=v.useRef(null),s=nt(l,o);return v.useEffect(()=>{const u=o.current;if(u)return r.branches.add(u),()=>{r.branches.delete(u)}},[r.branches]),b.jsx($e.div,{...a,ref:s})});BC.displayName=HC;function VC(a,l=globalThis?.document){const r=Ga(a),o=v.useRef(!1),s=v.useRef(()=>{});return v.useEffect(()=>{const u=h=>{if(h.target&&!o.current){let p=function(){kv(kC,r,m,{discrete:!0})};const m={originalEvent:h};h.pointerType==="touch"?(l.removeEventListener("click",s.current),s.current=p,l.addEventListener("click",s.current,{once:!0})):p()}else l.removeEventListener("click",s.current);o.current=!1},d=window.setTimeout(()=>{l.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(d),l.removeEventListener("pointerdown",u),l.removeEventListener("click",s.current)}},[l,r]),{onPointerDownCapture:()=>o.current=!0}}function PC(a,l=globalThis?.document){const r=Ga(a),o=v.useRef(!1);return v.useEffect(()=>{const s=u=>{u.target&&!o.current&&kv(UC,r,{originalEvent:u},{discrete:!1})};return l.addEventListener("focusin",s),()=>l.removeEventListener("focusin",s)},[l,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function Fg(){const a=new CustomEvent(xf);document.dispatchEvent(a)}function kv(a,l,r,{discrete:o}){const s=r.originalEvent.target,u=new CustomEvent(a,{bubbles:!1,cancelable:!0,detail:r});l&&s.addEventListener(a,l,{once:!0}),o?DC(s,u):s.dispatchEvent(u)}var nf=0;function GC(){v.useEffect(()=>{const a=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",a[0]??Qg()),document.body.insertAdjacentElement("beforeend",a[1]??Qg()),nf++,()=>{nf===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(l=>l.remove()),nf--}},[])}function Qg(){const a=document.createElement("span");return a.setAttribute("data-radix-focus-guard",""),a.tabIndex=0,a.style.outline="none",a.style.opacity="0",a.style.position="fixed",a.style.pointerEvents="none",a}var af="focusScope.autoFocusOnMount",lf="focusScope.autoFocusOnUnmount",Zg={bubbles:!1,cancelable:!0},qC="FocusScope",Uv=v.forwardRef((a,l)=>{const{loop:r=!1,trapped:o=!1,onMountAutoFocus:s,onUnmountAutoFocus:u,...d}=a,[h,p]=v.useState(null),m=Ga(s),x=Ga(u),y=v.useRef(null),w=nt(l,E=>p(E)),C=v.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;v.useEffect(()=>{if(o){let E=function(z){if(C.paused||!h)return;const V=z.target;h.contains(V)?y.current=V:da(y.current,{select:!0})},T=function(z){if(C.paused||!h)return;const V=z.relatedTarget;V!==null&&(h.contains(V)||da(y.current,{select:!0}))},_=function(z){if(document.activeElement===document.body)for(const G of z)G.removedNodes.length>0&&da(h)};document.addEventListener("focusin",E),document.addEventListener("focusout",T);const M=new MutationObserver(_);return h&&M.observe(h,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",E),document.removeEventListener("focusout",T),M.disconnect()}}},[o,h,C.paused]),v.useEffect(()=>{if(h){Wg.add(C);const E=document.activeElement;if(!h.contains(E)){const _=new CustomEvent(af,Zg);h.addEventListener(af,m),h.dispatchEvent(_),_.defaultPrevented||(YC(FC(Hv(h)),{select:!0}),document.activeElement===E&&da(h))}return()=>{h.removeEventListener(af,m),setTimeout(()=>{const _=new CustomEvent(lf,Zg);h.addEventListener(lf,x),h.dispatchEvent(_),_.defaultPrevented||da(E??document.body,{select:!0}),h.removeEventListener(lf,x),Wg.remove(C)},0)}}},[h,m,x,C]);const R=v.useCallback(E=>{if(!r&&!o||C.paused)return;const T=E.key==="Tab"&&!E.altKey&&!E.ctrlKey&&!E.metaKey,_=document.activeElement;if(T&&_){const M=E.currentTarget,[z,V]=KC(M);z&&V?!E.shiftKey&&_===V?(E.preventDefault(),r&&da(z,{select:!0})):E.shiftKey&&_===z&&(E.preventDefault(),r&&da(V,{select:!0})):_===M&&E.preventDefault()}},[r,o,C.paused]);return b.jsx($e.div,{tabIndex:-1,...d,ref:w,onKeyDown:R})});Uv.displayName=qC;function YC(a,{select:l=!1}={}){const r=document.activeElement;for(const o of a)if(da(o,{select:l}),document.activeElement!==r)return}function KC(a){const l=Hv(a),r=Jg(l,a),o=Jg(l.reverse(),a);return[r,o]}function Hv(a){const l=[],r=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const s=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||s?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)l.push(r.currentNode);return l}function Jg(a,l){for(const r of a)if(!XC(r,{upTo:l}))return r}function XC(a,{upTo:l}){if(getComputedStyle(a).visibility==="hidden")return!0;for(;a;){if(l!==void 0&&a===l)return!1;if(getComputedStyle(a).display==="none")return!0;a=a.parentElement}return!1}function IC(a){return a instanceof HTMLInputElement&&"select"in a}function da(a,{select:l=!1}={}){if(a&&a.focus){const r=document.activeElement;a.focus({preventScroll:!0}),a!==r&&IC(a)&&l&&a.select()}}var Wg=$C();function $C(){let a=[];return{add(l){const r=a[0];l!==r&&r?.pause(),a=ey(a,l),a.unshift(l)},remove(l){a=ey(a,l),a[0]?.resume()}}}function ey(a,l){const r=[...a],o=r.indexOf(l);return o!==-1&&r.splice(o,1),r}function FC(a){return a.filter(l=>l.tagName!=="A")}var ht=globalThis?.document?v.useLayoutEffect:()=>{},QC=jf[" useId ".trim().toString()]||(()=>{}),ZC=0;function hs(a){const[l,r]=v.useState(QC());return ht(()=>{r(o=>o??String(ZC++))},[a]),a||(l?`radix-${l}`:"")}const JC=["top","right","bottom","left"],ma=Math.min,Lt=Math.max,Wo=Math.round,jo=Math.floor,hn=a=>({x:a,y:a}),WC={left:"right",right:"left",bottom:"top",top:"bottom"},eT={start:"end",end:"start"};function bf(a,l,r){return Lt(a,ma(l,r))}function Un(a,l){return typeof a=="function"?a(l):a}function Hn(a){return a.split("-")[0]}function Il(a){return a.split("-")[1]}function Gf(a){return a==="x"?"y":"x"}function qf(a){return a==="y"?"height":"width"}const tT=new Set(["top","bottom"]);function fn(a){return tT.has(Hn(a))?"y":"x"}function Yf(a){return Gf(fn(a))}function nT(a,l,r){r===void 0&&(r=!1);const o=Il(a),s=Yf(a),u=qf(s);let d=s==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return l.reference[u]>l.floating[u]&&(d=es(d)),[d,es(d)]}function aT(a){const l=es(a);return[Sf(a),l,Sf(l)]}function Sf(a){return a.replace(/start|end/g,l=>eT[l])}const ty=["left","right"],ny=["right","left"],lT=["top","bottom"],iT=["bottom","top"];function rT(a,l,r){switch(a){case"top":case"bottom":return r?l?ny:ty:l?ty:ny;case"left":case"right":return l?lT:iT;default:return[]}}function oT(a,l,r,o){const s=Il(a);let u=rT(Hn(a),r==="start",o);return s&&(u=u.map(d=>d+"-"+s),l&&(u=u.concat(u.map(Sf)))),u}function es(a){return a.replace(/left|right|bottom|top/g,l=>WC[l])}function sT(a){return{top:0,right:0,bottom:0,left:0,...a}}function Bv(a){return typeof a!="number"?sT(a):{top:a,right:a,bottom:a,left:a}}function ts(a){const{x:l,y:r,width:o,height:s}=a;return{width:o,height:s,top:r,left:l,right:l+o,bottom:r+s,x:l,y:r}}function ay(a,l,r){let{reference:o,floating:s}=a;const u=fn(l),d=Yf(l),h=qf(d),p=Hn(l),m=u==="y",x=o.x+o.width/2-s.width/2,y=o.y+o.height/2-s.height/2,w=o[h]/2-s[h]/2;let C;switch(p){case"top":C={x,y:o.y-s.height};break;case"bottom":C={x,y:o.y+o.height};break;case"right":C={x:o.x+o.width,y};break;case"left":C={x:o.x-s.width,y};break;default:C={x:o.x,y:o.y}}switch(Il(l)){case"start":C[d]-=w*(r&&m?-1:1);break;case"end":C[d]+=w*(r&&m?-1:1);break}return C}const cT=async(a,l,r)=>{const{placement:o="bottom",strategy:s="absolute",middleware:u=[],platform:d}=r,h=u.filter(Boolean),p=await(d.isRTL==null?void 0:d.isRTL(l));let m=await d.getElementRects({reference:a,floating:l,strategy:s}),{x,y}=ay(m,o,p),w=o,C={},R=0;for(let E=0;E<h.length;E++){const{name:T,fn:_}=h[E],{x:M,y:z,data:V,reset:G}=await _({x,y,initialPlacement:o,placement:w,strategy:s,middlewareData:C,rects:m,platform:d,elements:{reference:a,floating:l}});x=M??x,y=z??y,C={...C,[T]:{...C[T],...V}},G&&R<=50&&(R++,typeof G=="object"&&(G.placement&&(w=G.placement),G.rects&&(m=G.rects===!0?await d.getElementRects({reference:a,floating:l,strategy:s}):G.rects),{x,y}=ay(m,w,p)),E=-1)}return{x,y,placement:w,strategy:s,middlewareData:C}};async function tr(a,l){var r;l===void 0&&(l={});const{x:o,y:s,platform:u,rects:d,elements:h,strategy:p}=a,{boundary:m="clippingAncestors",rootBoundary:x="viewport",elementContext:y="floating",altBoundary:w=!1,padding:C=0}=Un(l,a),R=Bv(C),T=h[w?y==="floating"?"reference":"floating":y],_=ts(await u.getClippingRect({element:(r=await(u.isElement==null?void 0:u.isElement(T)))==null||r?T:T.contextElement||await(u.getDocumentElement==null?void 0:u.getDocumentElement(h.floating)),boundary:m,rootBoundary:x,strategy:p})),M=y==="floating"?{x:o,y:s,width:d.floating.width,height:d.floating.height}:d.reference,z=await(u.getOffsetParent==null?void 0:u.getOffsetParent(h.floating)),V=await(u.isElement==null?void 0:u.isElement(z))?await(u.getScale==null?void 0:u.getScale(z))||{x:1,y:1}:{x:1,y:1},G=ts(u.convertOffsetParentRelativeRectToViewportRelativeRect?await u.convertOffsetParentRelativeRectToViewportRelativeRect({elements:h,rect:M,offsetParent:z,strategy:p}):M);return{top:(_.top-G.top+R.top)/V.y,bottom:(G.bottom-_.bottom+R.bottom)/V.y,left:(_.left-G.left+R.left)/V.x,right:(G.right-_.right+R.right)/V.x}}const uT=a=>({name:"arrow",options:a,async fn(l){const{x:r,y:o,placement:s,rects:u,platform:d,elements:h,middlewareData:p}=l,{element:m,padding:x=0}=Un(a,l)||{};if(m==null)return{};const y=Bv(x),w={x:r,y:o},C=Yf(s),R=qf(C),E=await d.getDimensions(m),T=C==="y",_=T?"top":"left",M=T?"bottom":"right",z=T?"clientHeight":"clientWidth",V=u.reference[R]+u.reference[C]-w[C]-u.floating[R],G=w[C]-u.reference[C],Z=await(d.getOffsetParent==null?void 0:d.getOffsetParent(m));let P=Z?Z[z]:0;(!P||!await(d.isElement==null?void 0:d.isElement(Z)))&&(P=h.floating[z]||u.floating[R]);const $=V/2-G/2,W=P/2-E[R]/2-1,ee=ma(y[_],W),ne=ma(y[M],W),te=ee,oe=P-E[R]-ne,re=P/2-E[R]/2+$,ue=bf(te,re,oe),j=!p.arrow&&Il(s)!=null&&re!==ue&&u.reference[R]/2-(re<te?ee:ne)-E[R]/2<0,K=j?re<te?re-te:re-oe:0;return{[C]:w[C]+K,data:{[C]:ue,centerOffset:re-ue-K,...j&&{alignmentOffset:K}},reset:j}}}),fT=function(a){return a===void 0&&(a={}),{name:"flip",options:a,async fn(l){var r,o;const{placement:s,middlewareData:u,rects:d,initialPlacement:h,platform:p,elements:m}=l,{mainAxis:x=!0,crossAxis:y=!0,fallbackPlacements:w,fallbackStrategy:C="bestFit",fallbackAxisSideDirection:R="none",flipAlignment:E=!0,...T}=Un(a,l);if((r=u.arrow)!=null&&r.alignmentOffset)return{};const _=Hn(s),M=fn(h),z=Hn(h)===h,V=await(p.isRTL==null?void 0:p.isRTL(m.floating)),G=w||(z||!E?[es(h)]:aT(h)),Z=R!=="none";!w&&Z&&G.push(...oT(h,E,R,V));const P=[h,...G],$=await tr(l,T),W=[];let ee=((o=u.flip)==null?void 0:o.overflows)||[];if(x&&W.push($[_]),y){const re=nT(s,d,V);W.push($[re[0]],$[re[1]])}if(ee=[...ee,{placement:s,overflows:W}],!W.every(re=>re<=0)){var ne,te;const re=(((ne=u.flip)==null?void 0:ne.index)||0)+1,ue=P[re];if(ue&&(!(y==="alignment"?M!==fn(ue):!1)||ee.every(H=>fn(H.placement)===M?H.overflows[0]>0:!0)))return{data:{index:re,overflows:ee},reset:{placement:ue}};let j=(te=ee.filter(K=>K.overflows[0]<=0).sort((K,H)=>K.overflows[1]-H.overflows[1])[0])==null?void 0:te.placement;if(!j)switch(C){case"bestFit":{var oe;const K=(oe=ee.filter(H=>{if(Z){const se=fn(H.placement);return se===M||se==="y"}return!0}).map(H=>[H.placement,H.overflows.filter(se=>se>0).reduce((se,pe)=>se+pe,0)]).sort((H,se)=>H[1]-se[1])[0])==null?void 0:oe[0];K&&(j=K);break}case"initialPlacement":j=h;break}if(s!==j)return{reset:{placement:j}}}return{}}}};function ly(a,l){return{top:a.top-l.height,right:a.right-l.width,bottom:a.bottom-l.height,left:a.left-l.width}}function iy(a){return JC.some(l=>a[l]>=0)}const dT=function(a){return a===void 0&&(a={}),{name:"hide",options:a,async fn(l){const{rects:r}=l,{strategy:o="referenceHidden",...s}=Un(a,l);switch(o){case"referenceHidden":{const u=await tr(l,{...s,elementContext:"reference"}),d=ly(u,r.reference);return{data:{referenceHiddenOffsets:d,referenceHidden:iy(d)}}}case"escaped":{const u=await tr(l,{...s,altBoundary:!0}),d=ly(u,r.floating);return{data:{escapedOffsets:d,escaped:iy(d)}}}default:return{}}}}},Vv=new Set(["left","top"]);async function hT(a,l){const{placement:r,platform:o,elements:s}=a,u=await(o.isRTL==null?void 0:o.isRTL(s.floating)),d=Hn(r),h=Il(r),p=fn(r)==="y",m=Vv.has(d)?-1:1,x=u&&p?-1:1,y=Un(l,a);let{mainAxis:w,crossAxis:C,alignmentAxis:R}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:{mainAxis:y.mainAxis||0,crossAxis:y.crossAxis||0,alignmentAxis:y.alignmentAxis};return h&&typeof R=="number"&&(C=h==="end"?R*-1:R),p?{x:C*x,y:w*m}:{x:w*m,y:C*x}}const pT=function(a){return a===void 0&&(a=0),{name:"offset",options:a,async fn(l){var r,o;const{x:s,y:u,placement:d,middlewareData:h}=l,p=await hT(l,a);return d===((r=h.offset)==null?void 0:r.placement)&&(o=h.arrow)!=null&&o.alignmentOffset?{}:{x:s+p.x,y:u+p.y,data:{...p,placement:d}}}}},mT=function(a){return a===void 0&&(a={}),{name:"shift",options:a,async fn(l){const{x:r,y:o,placement:s}=l,{mainAxis:u=!0,crossAxis:d=!1,limiter:h={fn:T=>{let{x:_,y:M}=T;return{x:_,y:M}}},...p}=Un(a,l),m={x:r,y:o},x=await tr(l,p),y=fn(Hn(s)),w=Gf(y);let C=m[w],R=m[y];if(u){const T=w==="y"?"top":"left",_=w==="y"?"bottom":"right",M=C+x[T],z=C-x[_];C=bf(M,C,z)}if(d){const T=y==="y"?"top":"left",_=y==="y"?"bottom":"right",M=R+x[T],z=R-x[_];R=bf(M,R,z)}const E=h.fn({...l,[w]:C,[y]:R});return{...E,data:{x:E.x-r,y:E.y-o,enabled:{[w]:u,[y]:d}}}}}},gT=function(a){return a===void 0&&(a={}),{options:a,fn(l){const{x:r,y:o,placement:s,rects:u,middlewareData:d}=l,{offset:h=0,mainAxis:p=!0,crossAxis:m=!0}=Un(a,l),x={x:r,y:o},y=fn(s),w=Gf(y);let C=x[w],R=x[y];const E=Un(h,l),T=typeof E=="number"?{mainAxis:E,crossAxis:0}:{mainAxis:0,crossAxis:0,...E};if(p){const z=w==="y"?"height":"width",V=u.reference[w]-u.floating[z]+T.mainAxis,G=u.reference[w]+u.reference[z]-T.mainAxis;C<V?C=V:C>G&&(C=G)}if(m){var _,M;const z=w==="y"?"width":"height",V=Vv.has(Hn(s)),G=u.reference[y]-u.floating[z]+(V&&((_=d.offset)==null?void 0:_[y])||0)+(V?0:T.crossAxis),Z=u.reference[y]+u.reference[z]+(V?0:((M=d.offset)==null?void 0:M[y])||0)-(V?T.crossAxis:0);R<G?R=G:R>Z&&(R=Z)}return{[w]:C,[y]:R}}}},yT=function(a){return a===void 0&&(a={}),{name:"size",options:a,async fn(l){var r,o;const{placement:s,rects:u,platform:d,elements:h}=l,{apply:p=()=>{},...m}=Un(a,l),x=await tr(l,m),y=Hn(s),w=Il(s),C=fn(s)==="y",{width:R,height:E}=u.floating;let T,_;y==="top"||y==="bottom"?(T=y,_=w===(await(d.isRTL==null?void 0:d.isRTL(h.floating))?"start":"end")?"left":"right"):(_=y,T=w==="end"?"top":"bottom");const M=E-x.top-x.bottom,z=R-x.left-x.right,V=ma(E-x[T],M),G=ma(R-x[_],z),Z=!l.middlewareData.shift;let P=V,$=G;if((r=l.middlewareData.shift)!=null&&r.enabled.x&&($=z),(o=l.middlewareData.shift)!=null&&o.enabled.y&&(P=M),Z&&!w){const ee=Lt(x.left,0),ne=Lt(x.right,0),te=Lt(x.top,0),oe=Lt(x.bottom,0);C?$=R-2*(ee!==0||ne!==0?ee+ne:Lt(x.left,x.right)):P=E-2*(te!==0||oe!==0?te+oe:Lt(x.top,x.bottom))}await p({...l,availableWidth:$,availableHeight:P});const W=await d.getDimensions(h.floating);return R!==W.width||E!==W.height?{reset:{rects:!0}}:{}}}};function ps(){return typeof window<"u"}function $l(a){return Pv(a)?(a.nodeName||"").toLowerCase():"#document"}function kt(a){var l;return(a==null||(l=a.ownerDocument)==null?void 0:l.defaultView)||window}function gn(a){var l;return(l=(Pv(a)?a.ownerDocument:a.document)||window.document)==null?void 0:l.documentElement}function Pv(a){return ps()?a instanceof Node||a instanceof kt(a).Node:!1}function tn(a){return ps()?a instanceof Element||a instanceof kt(a).Element:!1}function pn(a){return ps()?a instanceof HTMLElement||a instanceof kt(a).HTMLElement:!1}function ry(a){return!ps()||typeof ShadowRoot>"u"?!1:a instanceof ShadowRoot||a instanceof kt(a).ShadowRoot}const vT=new Set(["inline","contents"]);function sr(a){const{overflow:l,overflowX:r,overflowY:o,display:s}=nn(a);return/auto|scroll|overlay|hidden|clip/.test(l+o+r)&&!vT.has(s)}const xT=new Set(["table","td","th"]);function bT(a){return xT.has($l(a))}const ST=[":popover-open",":modal"];function ms(a){return ST.some(l=>{try{return a.matches(l)}catch{return!1}})}const ET=["transform","translate","scale","rotate","perspective"],wT=["transform","translate","scale","rotate","perspective","filter"],CT=["paint","layout","strict","content"];function Kf(a){const l=Xf(),r=tn(a)?nn(a):a;return ET.some(o=>r[o]?r[o]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!l&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!l&&(r.filter?r.filter!=="none":!1)||wT.some(o=>(r.willChange||"").includes(o))||CT.some(o=>(r.contain||"").includes(o))}function TT(a){let l=ga(a);for(;pn(l)&&!Bl(l);){if(Kf(l))return l;if(ms(l))return null;l=ga(l)}return null}function Xf(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const RT=new Set(["html","body","#document"]);function Bl(a){return RT.has($l(a))}function nn(a){return kt(a).getComputedStyle(a)}function gs(a){return tn(a)?{scrollLeft:a.scrollLeft,scrollTop:a.scrollTop}:{scrollLeft:a.scrollX,scrollTop:a.scrollY}}function ga(a){if($l(a)==="html")return a;const l=a.assignedSlot||a.parentNode||ry(a)&&a.host||gn(a);return ry(l)?l.host:l}function Gv(a){const l=ga(a);return Bl(l)?a.ownerDocument?a.ownerDocument.body:a.body:pn(l)&&sr(l)?l:Gv(l)}function nr(a,l,r){var o;l===void 0&&(l=[]),r===void 0&&(r=!0);const s=Gv(a),u=s===((o=a.ownerDocument)==null?void 0:o.body),d=kt(s);if(u){const h=Ef(d);return l.concat(d,d.visualViewport||[],sr(s)?s:[],h&&r?nr(h):[])}return l.concat(s,nr(s,[],r))}function Ef(a){return a.parent&&Object.getPrototypeOf(a.parent)?a.frameElement:null}function qv(a){const l=nn(a);let r=parseFloat(l.width)||0,o=parseFloat(l.height)||0;const s=pn(a),u=s?a.offsetWidth:r,d=s?a.offsetHeight:o,h=Wo(r)!==u||Wo(o)!==d;return h&&(r=u,o=d),{width:r,height:o,$:h}}function If(a){return tn(a)?a:a.contextElement}function Ul(a){const l=If(a);if(!pn(l))return hn(1);const r=l.getBoundingClientRect(),{width:o,height:s,$:u}=qv(l);let d=(u?Wo(r.width):r.width)/o,h=(u?Wo(r.height):r.height)/s;return(!d||!Number.isFinite(d))&&(d=1),(!h||!Number.isFinite(h))&&(h=1),{x:d,y:h}}const AT=hn(0);function Yv(a){const l=kt(a);return!Xf()||!l.visualViewport?AT:{x:l.visualViewport.offsetLeft,y:l.visualViewport.offsetTop}}function NT(a,l,r){return l===void 0&&(l=!1),!r||l&&r!==kt(a)?!1:l}function qa(a,l,r,o){l===void 0&&(l=!1),r===void 0&&(r=!1);const s=a.getBoundingClientRect(),u=If(a);let d=hn(1);l&&(o?tn(o)&&(d=Ul(o)):d=Ul(a));const h=NT(u,r,o)?Yv(u):hn(0);let p=(s.left+h.x)/d.x,m=(s.top+h.y)/d.y,x=s.width/d.x,y=s.height/d.y;if(u){const w=kt(u),C=o&&tn(o)?kt(o):o;let R=w,E=Ef(R);for(;E&&o&&C!==R;){const T=Ul(E),_=E.getBoundingClientRect(),M=nn(E),z=_.left+(E.clientLeft+parseFloat(M.paddingLeft))*T.x,V=_.top+(E.clientTop+parseFloat(M.paddingTop))*T.y;p*=T.x,m*=T.y,x*=T.x,y*=T.y,p+=z,m+=V,R=kt(E),E=Ef(R)}}return ts({width:x,height:y,x:p,y:m})}function ys(a,l){const r=gs(a).scrollLeft;return l?l.left+r:qa(gn(a)).left+r}function Kv(a,l){const r=a.getBoundingClientRect(),o=r.left+l.scrollLeft-ys(a,r),s=r.top+l.scrollTop;return{x:o,y:s}}function OT(a){let{elements:l,rect:r,offsetParent:o,strategy:s}=a;const u=s==="fixed",d=gn(o),h=l?ms(l.floating):!1;if(o===d||h&&u)return r;let p={scrollLeft:0,scrollTop:0},m=hn(1);const x=hn(0),y=pn(o);if((y||!y&&!u)&&(($l(o)!=="body"||sr(d))&&(p=gs(o)),pn(o))){const C=qa(o);m=Ul(o),x.x=C.x+o.clientLeft,x.y=C.y+o.clientTop}const w=d&&!y&&!u?Kv(d,p):hn(0);return{width:r.width*m.x,height:r.height*m.y,x:r.x*m.x-p.scrollLeft*m.x+x.x+w.x,y:r.y*m.y-p.scrollTop*m.y+x.y+w.y}}function MT(a){return Array.from(a.getClientRects())}function _T(a){const l=gn(a),r=gs(a),o=a.ownerDocument.body,s=Lt(l.scrollWidth,l.clientWidth,o.scrollWidth,o.clientWidth),u=Lt(l.scrollHeight,l.clientHeight,o.scrollHeight,o.clientHeight);let d=-r.scrollLeft+ys(a);const h=-r.scrollTop;return nn(o).direction==="rtl"&&(d+=Lt(l.clientWidth,o.clientWidth)-s),{width:s,height:u,x:d,y:h}}const oy=25;function jT(a,l){const r=kt(a),o=gn(a),s=r.visualViewport;let u=o.clientWidth,d=o.clientHeight,h=0,p=0;if(s){u=s.width,d=s.height;const x=Xf();(!x||x&&l==="fixed")&&(h=s.offsetLeft,p=s.offsetTop)}const m=ys(o);if(m<=0){const x=o.ownerDocument,y=x.body,w=getComputedStyle(y),C=x.compatMode==="CSS1Compat"&&parseFloat(w.marginLeft)+parseFloat(w.marginRight)||0,R=Math.abs(o.clientWidth-y.clientWidth-C);R<=oy&&(u-=R)}else m<=oy&&(u+=m);return{width:u,height:d,x:h,y:p}}const DT=new Set(["absolute","fixed"]);function zT(a,l){const r=qa(a,!0,l==="fixed"),o=r.top+a.clientTop,s=r.left+a.clientLeft,u=pn(a)?Ul(a):hn(1),d=a.clientWidth*u.x,h=a.clientHeight*u.y,p=s*u.x,m=o*u.y;return{width:d,height:h,x:p,y:m}}function sy(a,l,r){let o;if(l==="viewport")o=jT(a,r);else if(l==="document")o=_T(gn(a));else if(tn(l))o=zT(l,r);else{const s=Yv(a);o={x:l.x-s.x,y:l.y-s.y,width:l.width,height:l.height}}return ts(o)}function Xv(a,l){const r=ga(a);return r===l||!tn(r)||Bl(r)?!1:nn(r).position==="fixed"||Xv(r,l)}function LT(a,l){const r=l.get(a);if(r)return r;let o=nr(a,[],!1).filter(h=>tn(h)&&$l(h)!=="body"),s=null;const u=nn(a).position==="fixed";let d=u?ga(a):a;for(;tn(d)&&!Bl(d);){const h=nn(d),p=Kf(d);!p&&h.position==="fixed"&&(s=null),(u?!p&&!s:!p&&h.position==="static"&&!!s&&DT.has(s.position)||sr(d)&&!p&&Xv(a,d))?o=o.filter(x=>x!==d):s=h,d=ga(d)}return l.set(a,o),o}function kT(a){let{element:l,boundary:r,rootBoundary:o,strategy:s}=a;const d=[...r==="clippingAncestors"?ms(l)?[]:LT(l,this._c):[].concat(r),o],h=d[0],p=d.reduce((m,x)=>{const y=sy(l,x,s);return m.top=Lt(y.top,m.top),m.right=ma(y.right,m.right),m.bottom=ma(y.bottom,m.bottom),m.left=Lt(y.left,m.left),m},sy(l,h,s));return{width:p.right-p.left,height:p.bottom-p.top,x:p.left,y:p.top}}function UT(a){const{width:l,height:r}=qv(a);return{width:l,height:r}}function HT(a,l,r){const o=pn(l),s=gn(l),u=r==="fixed",d=qa(a,!0,u,l);let h={scrollLeft:0,scrollTop:0};const p=hn(0);function m(){p.x=ys(s)}if(o||!o&&!u)if(($l(l)!=="body"||sr(s))&&(h=gs(l)),o){const C=qa(l,!0,u,l);p.x=C.x+l.clientLeft,p.y=C.y+l.clientTop}else s&&m();u&&!o&&s&&m();const x=s&&!o&&!u?Kv(s,h):hn(0),y=d.left+h.scrollLeft-p.x-x.x,w=d.top+h.scrollTop-p.y-x.y;return{x:y,y:w,width:d.width,height:d.height}}function rf(a){return nn(a).position==="static"}function cy(a,l){if(!pn(a)||nn(a).position==="fixed")return null;if(l)return l(a);let r=a.offsetParent;return gn(a)===r&&(r=r.ownerDocument.body),r}function Iv(a,l){const r=kt(a);if(ms(a))return r;if(!pn(a)){let s=ga(a);for(;s&&!Bl(s);){if(tn(s)&&!rf(s))return s;s=ga(s)}return r}let o=cy(a,l);for(;o&&bT(o)&&rf(o);)o=cy(o,l);return o&&Bl(o)&&rf(o)&&!Kf(o)?r:o||TT(a)||r}const BT=async function(a){const l=this.getOffsetParent||Iv,r=this.getDimensions,o=await r(a.floating);return{reference:HT(a.reference,await l(a.floating),a.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function VT(a){return nn(a).direction==="rtl"}const PT={convertOffsetParentRelativeRectToViewportRelativeRect:OT,getDocumentElement:gn,getClippingRect:kT,getOffsetParent:Iv,getElementRects:BT,getClientRects:MT,getDimensions:UT,getScale:Ul,isElement:tn,isRTL:VT};function $v(a,l){return a.x===l.x&&a.y===l.y&&a.width===l.width&&a.height===l.height}function GT(a,l){let r=null,o;const s=gn(a);function u(){var h;clearTimeout(o),(h=r)==null||h.disconnect(),r=null}function d(h,p){h===void 0&&(h=!1),p===void 0&&(p=1),u();const m=a.getBoundingClientRect(),{left:x,top:y,width:w,height:C}=m;if(h||l(),!w||!C)return;const R=jo(y),E=jo(s.clientWidth-(x+w)),T=jo(s.clientHeight-(y+C)),_=jo(x),z={rootMargin:-R+"px "+-E+"px "+-T+"px "+-_+"px",threshold:Lt(0,ma(1,p))||1};let V=!0;function G(Z){const P=Z[0].intersectionRatio;if(P!==p){if(!V)return d();P?d(!1,P):o=setTimeout(()=>{d(!1,1e-7)},1e3)}P===1&&!$v(m,a.getBoundingClientRect())&&d(),V=!1}try{r=new IntersectionObserver(G,{...z,root:s.ownerDocument})}catch{r=new IntersectionObserver(G,z)}r.observe(a)}return d(!0),u}function qT(a,l,r,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:u=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:h=typeof IntersectionObserver=="function",animationFrame:p=!1}=o,m=If(a),x=s||u?[...m?nr(m):[],...nr(l)]:[];x.forEach(_=>{s&&_.addEventListener("scroll",r,{passive:!0}),u&&_.addEventListener("resize",r)});const y=m&&h?GT(m,r):null;let w=-1,C=null;d&&(C=new ResizeObserver(_=>{let[M]=_;M&&M.target===m&&C&&(C.unobserve(l),cancelAnimationFrame(w),w=requestAnimationFrame(()=>{var z;(z=C)==null||z.observe(l)})),r()}),m&&!p&&C.observe(m),C.observe(l));let R,E=p?qa(a):null;p&&T();function T(){const _=qa(a);E&&!$v(E,_)&&r(),E=_,R=requestAnimationFrame(T)}return r(),()=>{var _;x.forEach(M=>{s&&M.removeEventListener("scroll",r),u&&M.removeEventListener("resize",r)}),y?.(),(_=C)==null||_.disconnect(),C=null,p&&cancelAnimationFrame(R)}}const YT=pT,KT=mT,XT=fT,IT=yT,$T=dT,uy=uT,FT=gT,QT=(a,l,r)=>{const o=new Map,s={platform:PT,...r},u={...s.platform,_c:o};return cT(a,l,{...s,platform:u})};var ZT=typeof document<"u",JT=function(){},Vo=ZT?v.useLayoutEffect:JT;function ns(a,l){if(a===l)return!0;if(typeof a!=typeof l)return!1;if(typeof a=="function"&&a.toString()===l.toString())return!0;let r,o,s;if(a&&l&&typeof a=="object"){if(Array.isArray(a)){if(r=a.length,r!==l.length)return!1;for(o=r;o--!==0;)if(!ns(a[o],l[o]))return!1;return!0}if(s=Object.keys(a),r=s.length,r!==Object.keys(l).length)return!1;for(o=r;o--!==0;)if(!{}.hasOwnProperty.call(l,s[o]))return!1;for(o=r;o--!==0;){const u=s[o];if(!(u==="_owner"&&a.$$typeof)&&!ns(a[u],l[u]))return!1}return!0}return a!==a&&l!==l}function Fv(a){return typeof window>"u"?1:(a.ownerDocument.defaultView||window).devicePixelRatio||1}function fy(a,l){const r=Fv(a);return Math.round(l*r)/r}function of(a){const l=v.useRef(a);return Vo(()=>{l.current=a}),l}function WT(a){a===void 0&&(a={});const{placement:l="bottom",strategy:r="absolute",middleware:o=[],platform:s,elements:{reference:u,floating:d}={},transform:h=!0,whileElementsMounted:p,open:m}=a,[x,y]=v.useState({x:0,y:0,strategy:r,placement:l,middlewareData:{},isPositioned:!1}),[w,C]=v.useState(o);ns(w,o)||C(o);const[R,E]=v.useState(null),[T,_]=v.useState(null),M=v.useCallback(H=>{H!==Z.current&&(Z.current=H,E(H))},[]),z=v.useCallback(H=>{H!==P.current&&(P.current=H,_(H))},[]),V=u||R,G=d||T,Z=v.useRef(null),P=v.useRef(null),$=v.useRef(x),W=p!=null,ee=of(p),ne=of(s),te=of(m),oe=v.useCallback(()=>{if(!Z.current||!P.current)return;const H={placement:l,strategy:r,middleware:w};ne.current&&(H.platform=ne.current),QT(Z.current,P.current,H).then(se=>{const pe={...se,isPositioned:te.current!==!1};re.current&&!ns($.current,pe)&&($.current=pe,rr.flushSync(()=>{y(pe)}))})},[w,l,r,ne,te]);Vo(()=>{m===!1&&$.current.isPositioned&&($.current.isPositioned=!1,y(H=>({...H,isPositioned:!1})))},[m]);const re=v.useRef(!1);Vo(()=>(re.current=!0,()=>{re.current=!1}),[]),Vo(()=>{if(V&&(Z.current=V),G&&(P.current=G),V&&G){if(ee.current)return ee.current(V,G,oe);oe()}},[V,G,oe,ee,W]);const ue=v.useMemo(()=>({reference:Z,floating:P,setReference:M,setFloating:z}),[M,z]),j=v.useMemo(()=>({reference:V,floating:G}),[V,G]),K=v.useMemo(()=>{const H={position:r,left:0,top:0};if(!j.floating)return H;const se=fy(j.floating,x.x),pe=fy(j.floating,x.y);return h?{...H,transform:"translate("+se+"px, "+pe+"px)",...Fv(j.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:se,top:pe}},[r,h,j.floating,x.x,x.y]);return v.useMemo(()=>({...x,update:oe,refs:ue,elements:j,floatingStyles:K}),[x,oe,ue,j,K])}const eR=a=>{function l(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:a,fn(r){const{element:o,padding:s}=typeof a=="function"?a(r):a;return o&&l(o)?o.current!=null?uy({element:o.current,padding:s}).fn(r):{}:o?uy({element:o,padding:s}).fn(r):{}}}},tR=(a,l)=>({...YT(a),options:[a,l]}),nR=(a,l)=>({...KT(a),options:[a,l]}),aR=(a,l)=>({...FT(a),options:[a,l]}),lR=(a,l)=>({...XT(a),options:[a,l]}),iR=(a,l)=>({...IT(a),options:[a,l]}),rR=(a,l)=>({...$T(a),options:[a,l]}),oR=(a,l)=>({...eR(a),options:[a,l]});var sR="Arrow",Qv=v.forwardRef((a,l)=>{const{children:r,width:o=10,height:s=5,...u}=a;return b.jsx($e.svg,{...u,ref:l,width:o,height:s,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:a.asChild?r:b.jsx("polygon",{points:"0,0 30,0 15,10"})})});Qv.displayName=sR;var cR=Qv;function uR(a){const[l,r]=v.useState(void 0);return ht(()=>{if(a){r({width:a.offsetWidth,height:a.offsetHeight});const o=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const u=s[0];let d,h;if("borderBoxSize"in u){const p=u.borderBoxSize,m=Array.isArray(p)?p[0]:p;d=m.inlineSize,h=m.blockSize}else d=a.offsetWidth,h=a.offsetHeight;r({width:d,height:h})});return o.observe(a,{box:"border-box"}),()=>o.unobserve(a)}else r(void 0)},[a]),l}var $f="Popper",[Zv,vs]=ds($f),[fR,Jv]=Zv($f),Wv=a=>{const{__scopePopper:l,children:r}=a,[o,s]=v.useState(null);return b.jsx(fR,{scope:l,anchor:o,onAnchorChange:s,children:r})};Wv.displayName=$f;var e0="PopperAnchor",t0=v.forwardRef((a,l)=>{const{__scopePopper:r,virtualRef:o,...s}=a,u=Jv(e0,r),d=v.useRef(null),h=nt(l,d),p=v.useRef(null);return v.useEffect(()=>{const m=p.current;p.current=o?.current||d.current,m!==p.current&&u.onAnchorChange(p.current)}),o?null:b.jsx($e.div,{...s,ref:h})});t0.displayName=e0;var Ff="PopperContent",[dR,hR]=Zv(Ff),n0=v.forwardRef((a,l)=>{const{__scopePopper:r,side:o="bottom",sideOffset:s=0,align:u="center",alignOffset:d=0,arrowPadding:h=0,avoidCollisions:p=!0,collisionBoundary:m=[],collisionPadding:x=0,sticky:y="partial",hideWhenDetached:w=!1,updatePositionStrategy:C="optimized",onPlaced:R,...E}=a,T=Jv(Ff,r),[_,M]=v.useState(null),z=nt(l,Q=>M(Q)),[V,G]=v.useState(null),Z=uR(V),P=Z?.width??0,$=Z?.height??0,W=o+(u!=="center"?"-"+u:""),ee=typeof x=="number"?x:{top:0,right:0,bottom:0,left:0,...x},ne=Array.isArray(m)?m:[m],te=ne.length>0,oe={padding:ee,boundary:ne.filter(mR),altBoundary:te},{refs:re,floatingStyles:ue,placement:j,isPositioned:K,middlewareData:H}=WT({strategy:"fixed",placement:W,whileElementsMounted:(...Q)=>qT(...Q,{animationFrame:C==="always"}),elements:{reference:T.anchor},middleware:[tR({mainAxis:s+$,alignmentAxis:d}),p&&nR({mainAxis:!0,crossAxis:!1,limiter:y==="partial"?aR():void 0,...oe}),p&&lR({...oe}),iR({...oe,apply:({elements:Q,rects:be,availableWidth:ve,availableHeight:Te})=>{const{width:Me,height:ze}=be.reference,mt=Q.floating.style;mt.setProperty("--radix-popper-available-width",`${ve}px`),mt.setProperty("--radix-popper-available-height",`${Te}px`),mt.setProperty("--radix-popper-anchor-width",`${Me}px`),mt.setProperty("--radix-popper-anchor-height",`${ze}px`)}}),V&&oR({element:V,padding:h}),gR({arrowWidth:P,arrowHeight:$}),w&&rR({strategy:"referenceHidden",...oe})]}),[se,pe]=i0(j),N=Ga(R);ht(()=>{K&&N?.()},[K,N]);const q=H.arrow?.x,F=H.arrow?.y,J=H.arrow?.centerOffset!==0,[de,me]=v.useState();return ht(()=>{_&&me(window.getComputedStyle(_).zIndex)},[_]),b.jsx("div",{ref:re.setFloating,"data-radix-popper-content-wrapper":"",style:{...ue,transform:K?ue.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:de,"--radix-popper-transform-origin":[H.transformOrigin?.x,H.transformOrigin?.y].join(" "),...H.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:a.dir,children:b.jsx(dR,{scope:r,placedSide:se,onArrowChange:G,arrowX:q,arrowY:F,shouldHideArrow:J,children:b.jsx($e.div,{"data-side":se,"data-align":pe,...E,ref:z,style:{...E.style,animation:K?void 0:"none"}})})})});n0.displayName=Ff;var a0="PopperArrow",pR={top:"bottom",right:"left",bottom:"top",left:"right"},l0=v.forwardRef(function(l,r){const{__scopePopper:o,...s}=l,u=hR(a0,o),d=pR[u.placedSide];return b.jsx("span",{ref:u.onArrowChange,style:{position:"absolute",left:u.arrowX,top:u.arrowY,[d]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[u.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[u.placedSide],visibility:u.shouldHideArrow?"hidden":void 0},children:b.jsx(cR,{...s,ref:r,style:{...s.style,display:"block"}})})});l0.displayName=a0;function mR(a){return a!==null}var gR=a=>({name:"transformOrigin",options:a,fn(l){const{placement:r,rects:o,middlewareData:s}=l,d=s.arrow?.centerOffset!==0,h=d?0:a.arrowWidth,p=d?0:a.arrowHeight,[m,x]=i0(r),y={start:"0%",center:"50%",end:"100%"}[x],w=(s.arrow?.x??0)+h/2,C=(s.arrow?.y??0)+p/2;let R="",E="";return m==="bottom"?(R=d?y:`${w}px`,E=`${-p}px`):m==="top"?(R=d?y:`${w}px`,E=`${o.floating.height+p}px`):m==="right"?(R=`${-p}px`,E=d?y:`${C}px`):m==="left"&&(R=`${o.floating.width+p}px`,E=d?y:`${C}px`),{data:{x:R,y:E}}}});function i0(a){const[l,r="center"]=a.split("-");return[l,r]}var r0=Wv,o0=t0,s0=n0,c0=l0,yR="Portal",Qf=v.forwardRef((a,l)=>{const{container:r,...o}=a,[s,u]=v.useState(!1);ht(()=>u(!0),[]);const d=r||s&&globalThis?.document?.body;return d?fE.createPortal(b.jsx($e.div,{...o,ref:l}),d):null});Qf.displayName=yR;function vR(a){const l=xR(a),r=v.forwardRef((o,s)=>{const{children:u,...d}=o,h=v.Children.toArray(u),p=h.find(SR);if(p){const m=p.props.children,x=h.map(y=>y===p?v.Children.count(m)>1?v.Children.only(null):v.isValidElement(m)?m.props.children:null:y);return b.jsx(l,{...d,ref:s,children:v.isValidElement(m)?v.cloneElement(m,void 0,x):null})}return b.jsx(l,{...d,ref:s,children:u})});return r.displayName=`${a}.Slot`,r}function xR(a){const l=v.forwardRef((r,o)=>{const{children:s,...u}=r;if(v.isValidElement(s)){const d=wR(s),h=ER(u,s.props);return s.type!==v.Fragment&&(h.ref=o?or(o,d):d),v.cloneElement(s,h)}return v.Children.count(s)>1?v.Children.only(null):null});return l.displayName=`${a}.SlotClone`,l}var bR=Symbol("radix.slottable");function SR(a){return v.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===bR}function ER(a,l){const r={...l};for(const o in l){const s=a[o],u=l[o];/^on[A-Z]/.test(o)?s&&u?r[o]=(...h)=>{const p=u(...h);return s(...h),p}:s&&(r[o]=s):o==="style"?r[o]={...s,...u}:o==="className"&&(r[o]=[s,u].filter(Boolean).join(" "))}return{...a,...r}}function wR(a){let l=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,r=l&&"isReactWarning"in l&&l.isReactWarning;return r?a.ref:(l=Object.getOwnPropertyDescriptor(a,"ref")?.get,r=l&&"isReactWarning"in l&&l.isReactWarning,r?a.props.ref:a.props.ref||a.ref)}var CR=jf[" useInsertionEffect ".trim().toString()]||ht;function wf({prop:a,defaultProp:l,onChange:r=()=>{},caller:o}){const[s,u,d]=TR({defaultProp:l,onChange:r}),h=a!==void 0,p=h?a:s;{const x=v.useRef(a!==void 0);v.useEffect(()=>{const y=x.current;y!==h&&console.warn(`${o} is changing from ${y?"controlled":"uncontrolled"} to ${h?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),x.current=h},[h,o])}const m=v.useCallback(x=>{if(h){const y=RR(x)?x(a):x;y!==a&&d.current?.(y)}else u(x)},[h,a,u,d]);return[p,m]}function TR({defaultProp:a,onChange:l}){const[r,o]=v.useState(a),s=v.useRef(r),u=v.useRef(l);return CR(()=>{u.current=l},[l]),v.useEffect(()=>{s.current!==r&&(u.current?.(r),s.current=r)},[r,s]),[r,o,u]}function RR(a){return typeof a=="function"}function AR(a){const l=v.useRef({value:a,previous:a});return v.useMemo(()=>(l.current.value!==a&&(l.current.previous=l.current.value,l.current.value=a),l.current.previous),[a])}var u0=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),NR="VisuallyHidden",f0=v.forwardRef((a,l)=>b.jsx($e.span,{...a,ref:l,style:{...u0,...a.style}}));f0.displayName=NR;var OR=f0,MR=function(a){if(typeof document>"u")return null;var l=Array.isArray(a)?a[0]:a;return l.ownerDocument.body},jl=new WeakMap,Do=new WeakMap,zo={},sf=0,d0=function(a){return a&&(a.host||d0(a.parentNode))},_R=function(a,l){return l.map(function(r){if(a.contains(r))return r;var o=d0(r);return o&&a.contains(o)?o:(console.error("aria-hidden",r,"in not contained inside",a,". Doing nothing"),null)}).filter(function(r){return!!r})},jR=function(a,l,r,o){var s=_R(l,Array.isArray(a)?a:[a]);zo[r]||(zo[r]=new WeakMap);var u=zo[r],d=[],h=new Set,p=new Set(s),m=function(y){!y||h.has(y)||(h.add(y),m(y.parentNode))};s.forEach(m);var x=function(y){!y||p.has(y)||Array.prototype.forEach.call(y.children,function(w){if(h.has(w))x(w);else try{var C=w.getAttribute(o),R=C!==null&&C!=="false",E=(jl.get(w)||0)+1,T=(u.get(w)||0)+1;jl.set(w,E),u.set(w,T),d.push(w),E===1&&R&&Do.set(w,!0),T===1&&w.setAttribute(r,"true"),R||w.setAttribute(o,"true")}catch(_){console.error("aria-hidden: cannot operate on ",w,_)}})};return x(l),h.clear(),sf++,function(){d.forEach(function(y){var w=jl.get(y)-1,C=u.get(y)-1;jl.set(y,w),u.set(y,C),w||(Do.has(y)||y.removeAttribute(o),Do.delete(y)),C||y.removeAttribute(r)}),sf--,sf||(jl=new WeakMap,jl=new WeakMap,Do=new WeakMap,zo={})}},DR=function(a,l,r){r===void 0&&(r="data-aria-hidden");var o=Array.from(Array.isArray(a)?a:[a]),s=MR(a);return s?(o.push.apply(o,Array.from(s.querySelectorAll("[aria-live], script"))),jR(o,s,r,"aria-hidden")):function(){return null}},cn=function(){return cn=Object.assign||function(l){for(var r,o=1,s=arguments.length;o<s;o++){r=arguments[o];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(l[u]=r[u])}return l},cn.apply(this,arguments)};function h0(a,l){var r={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&l.indexOf(o)<0&&(r[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(a);s<o.length;s++)l.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(a,o[s])&&(r[o[s]]=a[o[s]]);return r}function zR(a,l,r){if(r||arguments.length===2)for(var o=0,s=l.length,u;o<s;o++)(u||!(o in l))&&(u||(u=Array.prototype.slice.call(l,0,o)),u[o]=l[o]);return a.concat(u||Array.prototype.slice.call(l))}var Po="right-scroll-bar-position",Go="width-before-scroll-bar",LR="with-scroll-bars-hidden",kR="--removed-body-scroll-bar-size";function cf(a,l){return typeof a=="function"?a(l):a&&(a.current=l),a}function UR(a,l){var r=v.useState(function(){return{value:a,callback:l,facade:{get current(){return r.value},set current(o){var s=r.value;s!==o&&(r.value=o,r.callback(o,s))}}}})[0];return r.callback=l,r.facade}var HR=typeof window<"u"?v.useLayoutEffect:v.useEffect,dy=new WeakMap;function BR(a,l){var r=UR(null,function(o){return a.forEach(function(s){return cf(s,o)})});return HR(function(){var o=dy.get(r);if(o){var s=new Set(o),u=new Set(a),d=r.current;s.forEach(function(h){u.has(h)||cf(h,null)}),u.forEach(function(h){s.has(h)||cf(h,d)})}dy.set(r,a)},[a]),r}function VR(a){return a}function PR(a,l){l===void 0&&(l=VR);var r=[],o=!1,s={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:a},useMedium:function(u){var d=l(u,o);return r.push(d),function(){r=r.filter(function(h){return h!==d})}},assignSyncMedium:function(u){for(o=!0;r.length;){var d=r;r=[],d.forEach(u)}r={push:function(h){return u(h)},filter:function(){return r}}},assignMedium:function(u){o=!0;var d=[];if(r.length){var h=r;r=[],h.forEach(u),d=r}var p=function(){var x=d;d=[],x.forEach(u)},m=function(){return Promise.resolve().then(p)};m(),r={push:function(x){d.push(x),m()},filter:function(x){return d=d.filter(x),r}}}};return s}function GR(a){a===void 0&&(a={});var l=PR(null);return l.options=cn({async:!0,ssr:!1},a),l}var p0=function(a){var l=a.sideCar,r=h0(a,["sideCar"]);if(!l)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=l.read();if(!o)throw new Error("Sidecar medium not found");return v.createElement(o,cn({},r))};p0.isSideCarExport=!0;function qR(a,l){return a.useMedium(l),p0}var m0=GR(),uf=function(){},xs=v.forwardRef(function(a,l){var r=v.useRef(null),o=v.useState({onScrollCapture:uf,onWheelCapture:uf,onTouchMoveCapture:uf}),s=o[0],u=o[1],d=a.forwardProps,h=a.children,p=a.className,m=a.removeScrollBar,x=a.enabled,y=a.shards,w=a.sideCar,C=a.noRelative,R=a.noIsolation,E=a.inert,T=a.allowPinchZoom,_=a.as,M=_===void 0?"div":_,z=a.gapMode,V=h0(a,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),G=w,Z=BR([r,l]),P=cn(cn({},V),s);return v.createElement(v.Fragment,null,x&&v.createElement(G,{sideCar:m0,removeScrollBar:m,shards:y,noRelative:C,noIsolation:R,inert:E,setCallbacks:u,allowPinchZoom:!!T,lockRef:r,gapMode:z}),d?v.cloneElement(v.Children.only(h),cn(cn({},P),{ref:Z})):v.createElement(M,cn({},P,{className:p,ref:Z}),h))});xs.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};xs.classNames={fullWidth:Go,zeroRight:Po};var YR=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function KR(){if(!document)return null;var a=document.createElement("style");a.type="text/css";var l=YR();return l&&a.setAttribute("nonce",l),a}function XR(a,l){a.styleSheet?a.styleSheet.cssText=l:a.appendChild(document.createTextNode(l))}function IR(a){var l=document.head||document.getElementsByTagName("head")[0];l.appendChild(a)}var $R=function(){var a=0,l=null;return{add:function(r){a==0&&(l=KR())&&(XR(l,r),IR(l)),a++},remove:function(){a--,!a&&l&&(l.parentNode&&l.parentNode.removeChild(l),l=null)}}},FR=function(){var a=$R();return function(l,r){v.useEffect(function(){return a.add(l),function(){a.remove()}},[l&&r])}},g0=function(){var a=FR(),l=function(r){var o=r.styles,s=r.dynamic;return a(o,s),null};return l},QR={left:0,top:0,right:0,gap:0},ff=function(a){return parseInt(a||"",10)||0},ZR=function(a){var l=window.getComputedStyle(document.body),r=l[a==="padding"?"paddingLeft":"marginLeft"],o=l[a==="padding"?"paddingTop":"marginTop"],s=l[a==="padding"?"paddingRight":"marginRight"];return[ff(r),ff(o),ff(s)]},JR=function(a){if(a===void 0&&(a="margin"),typeof window>"u")return QR;var l=ZR(a),r=document.documentElement.clientWidth,o=window.innerWidth;return{left:l[0],top:l[1],right:l[2],gap:Math.max(0,o-r+l[2]-l[0])}},WR=g0(),Hl="data-scroll-locked",eA=function(a,l,r,o){var s=a.left,u=a.top,d=a.right,h=a.gap;return r===void 0&&(r="margin"),`
  .`.concat(LR,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(h,"px ").concat(o,`;
  }
  body[`).concat(Hl,`] {
    overflow: hidden `).concat(o,`;
    overscroll-behavior: contain;
    `).concat([l&&"position: relative ".concat(o,";"),r==="margin"&&`
    padding-left: `.concat(s,`px;
    padding-top: `).concat(u,`px;
    padding-right: `).concat(d,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(h,"px ").concat(o,`;
    `),r==="padding"&&"padding-right: ".concat(h,"px ").concat(o,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Po,` {
    right: `).concat(h,"px ").concat(o,`;
  }
  
  .`).concat(Go,` {
    margin-right: `).concat(h,"px ").concat(o,`;
  }
  
  .`).concat(Po," .").concat(Po,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(Go," .").concat(Go,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(Hl,`] {
    `).concat(kR,": ").concat(h,`px;
  }
`)},hy=function(){var a=parseInt(document.body.getAttribute(Hl)||"0",10);return isFinite(a)?a:0},tA=function(){v.useEffect(function(){return document.body.setAttribute(Hl,(hy()+1).toString()),function(){var a=hy()-1;a<=0?document.body.removeAttribute(Hl):document.body.setAttribute(Hl,a.toString())}},[])},nA=function(a){var l=a.noRelative,r=a.noImportant,o=a.gapMode,s=o===void 0?"margin":o;tA();var u=v.useMemo(function(){return JR(s)},[s]);return v.createElement(WR,{styles:eA(u,!l,s,r?"":"!important")})},Cf=!1;if(typeof window<"u")try{var Lo=Object.defineProperty({},"passive",{get:function(){return Cf=!0,!0}});window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{Cf=!1}var Dl=Cf?{passive:!1}:!1,aA=function(a){return a.tagName==="TEXTAREA"},y0=function(a,l){if(!(a instanceof Element))return!1;var r=window.getComputedStyle(a);return r[l]!=="hidden"&&!(r.overflowY===r.overflowX&&!aA(a)&&r[l]==="visible")},lA=function(a){return y0(a,"overflowY")},iA=function(a){return y0(a,"overflowX")},py=function(a,l){var r=l.ownerDocument,o=l;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var s=v0(a,o);if(s){var u=x0(a,o),d=u[1],h=u[2];if(d>h)return!0}o=o.parentNode}while(o&&o!==r.body);return!1},rA=function(a){var l=a.scrollTop,r=a.scrollHeight,o=a.clientHeight;return[l,r,o]},oA=function(a){var l=a.scrollLeft,r=a.scrollWidth,o=a.clientWidth;return[l,r,o]},v0=function(a,l){return a==="v"?lA(l):iA(l)},x0=function(a,l){return a==="v"?rA(l):oA(l)},sA=function(a,l){return a==="h"&&l==="rtl"?-1:1},cA=function(a,l,r,o,s){var u=sA(a,window.getComputedStyle(l).direction),d=u*o,h=r.target,p=l.contains(h),m=!1,x=d>0,y=0,w=0;do{if(!h)break;var C=x0(a,h),R=C[0],E=C[1],T=C[2],_=E-T-u*R;(R||_)&&v0(a,h)&&(y+=_,w+=R);var M=h.parentNode;h=M&&M.nodeType===Node.DOCUMENT_FRAGMENT_NODE?M.host:M}while(!p&&h!==document.body||p&&(l.contains(h)||l===h));return(x&&Math.abs(y)<1||!x&&Math.abs(w)<1)&&(m=!0),m},ko=function(a){return"changedTouches"in a?[a.changedTouches[0].clientX,a.changedTouches[0].clientY]:[0,0]},my=function(a){return[a.deltaX,a.deltaY]},gy=function(a){return a&&"current"in a?a.current:a},uA=function(a,l){return a[0]===l[0]&&a[1]===l[1]},fA=function(a){return`
  .block-interactivity-`.concat(a,` {pointer-events: none;}
  .allow-interactivity-`).concat(a,` {pointer-events: all;}
`)},dA=0,zl=[];function hA(a){var l=v.useRef([]),r=v.useRef([0,0]),o=v.useRef(),s=v.useState(dA++)[0],u=v.useState(g0)[0],d=v.useRef(a);v.useEffect(function(){d.current=a},[a]),v.useEffect(function(){if(a.inert){document.body.classList.add("block-interactivity-".concat(s));var E=zR([a.lockRef.current],(a.shards||[]).map(gy),!0).filter(Boolean);return E.forEach(function(T){return T.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),E.forEach(function(T){return T.classList.remove("allow-interactivity-".concat(s))})}}},[a.inert,a.lockRef.current,a.shards]);var h=v.useCallback(function(E,T){if("touches"in E&&E.touches.length===2||E.type==="wheel"&&E.ctrlKey)return!d.current.allowPinchZoom;var _=ko(E),M=r.current,z="deltaX"in E?E.deltaX:M[0]-_[0],V="deltaY"in E?E.deltaY:M[1]-_[1],G,Z=E.target,P=Math.abs(z)>Math.abs(V)?"h":"v";if("touches"in E&&P==="h"&&Z.type==="range")return!1;var $=window.getSelection(),W=$&&$.anchorNode,ee=W?W===Z||W.contains(Z):!1;if(ee)return!1;var ne=py(P,Z);if(!ne)return!0;if(ne?G=P:(G=P==="v"?"h":"v",ne=py(P,Z)),!ne)return!1;if(!o.current&&"changedTouches"in E&&(z||V)&&(o.current=G),!G)return!0;var te=o.current||G;return cA(te,T,E,te==="h"?z:V)},[]),p=v.useCallback(function(E){var T=E;if(!(!zl.length||zl[zl.length-1]!==u)){var _="deltaY"in T?my(T):ko(T),M=l.current.filter(function(G){return G.name===T.type&&(G.target===T.target||T.target===G.shadowParent)&&uA(G.delta,_)})[0];if(M&&M.should){T.cancelable&&T.preventDefault();return}if(!M){var z=(d.current.shards||[]).map(gy).filter(Boolean).filter(function(G){return G.contains(T.target)}),V=z.length>0?h(T,z[0]):!d.current.noIsolation;V&&T.cancelable&&T.preventDefault()}}},[]),m=v.useCallback(function(E,T,_,M){var z={name:E,delta:T,target:_,should:M,shadowParent:pA(_)};l.current.push(z),setTimeout(function(){l.current=l.current.filter(function(V){return V!==z})},1)},[]),x=v.useCallback(function(E){r.current=ko(E),o.current=void 0},[]),y=v.useCallback(function(E){m(E.type,my(E),E.target,h(E,a.lockRef.current))},[]),w=v.useCallback(function(E){m(E.type,ko(E),E.target,h(E,a.lockRef.current))},[]);v.useEffect(function(){return zl.push(u),a.setCallbacks({onScrollCapture:y,onWheelCapture:y,onTouchMoveCapture:w}),document.addEventListener("wheel",p,Dl),document.addEventListener("touchmove",p,Dl),document.addEventListener("touchstart",x,Dl),function(){zl=zl.filter(function(E){return E!==u}),document.removeEventListener("wheel",p,Dl),document.removeEventListener("touchmove",p,Dl),document.removeEventListener("touchstart",x,Dl)}},[]);var C=a.removeScrollBar,R=a.inert;return v.createElement(v.Fragment,null,R?v.createElement(u,{styles:fA(s)}):null,C?v.createElement(nA,{noRelative:a.noRelative,gapMode:a.gapMode}):null)}function pA(a){for(var l=null;a!==null;)a instanceof ShadowRoot&&(l=a.host,a=a.host),a=a.parentNode;return l}const mA=qR(m0,hA);var b0=v.forwardRef(function(a,l){return v.createElement(xs,cn({},a,{ref:l,sideCar:mA}))});b0.classNames=xs.classNames;var gA=[" ","Enter","ArrowUp","ArrowDown"],yA=[" ","Enter"],Ya="Select",[bs,Ss,vA]=wC(Ya),[Fl]=ds(Ya,[vA,vs]),Es=vs(),[xA,ya]=Fl(Ya),[bA,SA]=Fl(Ya),S0=a=>{const{__scopeSelect:l,children:r,open:o,defaultOpen:s,onOpenChange:u,value:d,defaultValue:h,onValueChange:p,dir:m,name:x,autoComplete:y,disabled:w,required:C,form:R}=a,E=Es(l),[T,_]=v.useState(null),[M,z]=v.useState(null),[V,G]=v.useState(!1),Z=TC(m),[P,$]=wf({prop:o,defaultProp:s??!1,onChange:u,caller:Ya}),[W,ee]=wf({prop:d,defaultProp:h,onChange:p,caller:Ya}),ne=v.useRef(null),te=T?R||!!T.closest("form"):!0,[oe,re]=v.useState(new Set),ue=Array.from(oe).map(j=>j.props.value).join(";");return b.jsx(r0,{...E,children:b.jsxs(xA,{required:C,scope:l,trigger:T,onTriggerChange:_,valueNode:M,onValueNodeChange:z,valueNodeHasChildren:V,onValueNodeHasChildrenChange:G,contentId:hs(),value:W,onValueChange:ee,open:P,onOpenChange:$,dir:Z,triggerPointerDownPosRef:ne,disabled:w,children:[b.jsx(bs.Provider,{scope:l,children:b.jsx(bA,{scope:a.__scopeSelect,onNativeOptionAdd:v.useCallback(j=>{re(K=>new Set(K).add(j))},[]),onNativeOptionRemove:v.useCallback(j=>{re(K=>{const H=new Set(K);return H.delete(j),H})},[]),children:r})}),te?b.jsxs(q0,{"aria-hidden":!0,required:C,tabIndex:-1,name:x,autoComplete:y,value:W,onChange:j=>ee(j.target.value),disabled:w,form:R,children:[W===void 0?b.jsx("option",{value:""}):null,Array.from(oe)]},ue):null]})})};S0.displayName=Ya;var E0="SelectTrigger",w0=v.forwardRef((a,l)=>{const{__scopeSelect:r,disabled:o=!1,...s}=a,u=Es(r),d=ya(E0,r),h=d.disabled||o,p=nt(l,d.onTriggerChange),m=Ss(r),x=v.useRef("touch"),[y,w,C]=K0(E=>{const T=m().filter(z=>!z.disabled),_=T.find(z=>z.value===d.value),M=X0(T,E,_);M!==void 0&&d.onValueChange(M.value)}),R=E=>{h||(d.onOpenChange(!0),C()),E&&(d.triggerPointerDownPosRef.current={x:Math.round(E.pageX),y:Math.round(E.pageY)})};return b.jsx(o0,{asChild:!0,...u,children:b.jsx($e.button,{type:"button",role:"combobox","aria-controls":d.contentId,"aria-expanded":d.open,"aria-required":d.required,"aria-autocomplete":"none",dir:d.dir,"data-state":d.open?"open":"closed",disabled:h,"data-disabled":h?"":void 0,"data-placeholder":Y0(d.value)?"":void 0,...s,ref:p,onClick:Pe(s.onClick,E=>{E.currentTarget.focus(),x.current!=="mouse"&&R(E)}),onPointerDown:Pe(s.onPointerDown,E=>{x.current=E.pointerType;const T=E.target;T.hasPointerCapture(E.pointerId)&&T.releasePointerCapture(E.pointerId),E.button===0&&E.ctrlKey===!1&&E.pointerType==="mouse"&&(R(E),E.preventDefault())}),onKeyDown:Pe(s.onKeyDown,E=>{const T=y.current!=="";!(E.ctrlKey||E.altKey||E.metaKey)&&E.key.length===1&&w(E.key),!(T&&E.key===" ")&&gA.includes(E.key)&&(R(),E.preventDefault())})})})});w0.displayName=E0;var C0="SelectValue",T0=v.forwardRef((a,l)=>{const{__scopeSelect:r,className:o,style:s,children:u,placeholder:d="",...h}=a,p=ya(C0,r),{onValueNodeHasChildrenChange:m}=p,x=u!==void 0,y=nt(l,p.onValueNodeChange);return ht(()=>{m(x)},[m,x]),b.jsx($e.span,{...h,ref:y,style:{pointerEvents:"none"},children:Y0(p.value)?b.jsx(b.Fragment,{children:d}):u})});T0.displayName=C0;var EA="SelectIcon",R0=v.forwardRef((a,l)=>{const{__scopeSelect:r,children:o,...s}=a;return b.jsx($e.span,{"aria-hidden":!0,...s,ref:l,children:o||"▼"})});R0.displayName=EA;var wA="SelectPortal",A0=a=>b.jsx(Qf,{asChild:!0,...a});A0.displayName=wA;var Ka="SelectContent",N0=v.forwardRef((a,l)=>{const r=ya(Ka,a.__scopeSelect),[o,s]=v.useState();if(ht(()=>{s(new DocumentFragment)},[]),!r.open){const u=o;return u?rr.createPortal(b.jsx(O0,{scope:a.__scopeSelect,children:b.jsx(bs.Slot,{scope:a.__scopeSelect,children:b.jsx("div",{children:a.children})})}),u):null}return b.jsx(M0,{...a,ref:l})});N0.displayName=Ka;var Wt=10,[O0,va]=Fl(Ka),CA="SelectContentImpl",TA=vR("SelectContent.RemoveScroll"),M0=v.forwardRef((a,l)=>{const{__scopeSelect:r,position:o="item-aligned",onCloseAutoFocus:s,onEscapeKeyDown:u,onPointerDownOutside:d,side:h,sideOffset:p,align:m,alignOffset:x,arrowPadding:y,collisionBoundary:w,collisionPadding:C,sticky:R,hideWhenDetached:E,avoidCollisions:T,..._}=a,M=ya(Ka,r),[z,V]=v.useState(null),[G,Z]=v.useState(null),P=nt(l,Q=>V(Q)),[$,W]=v.useState(null),[ee,ne]=v.useState(null),te=Ss(r),[oe,re]=v.useState(!1),ue=v.useRef(!1);v.useEffect(()=>{if(z)return DR(z)},[z]),GC();const j=v.useCallback(Q=>{const[be,...ve]=te().map(ze=>ze.ref.current),[Te]=ve.slice(-1),Me=document.activeElement;for(const ze of Q)if(ze===Me||(ze?.scrollIntoView({block:"nearest"}),ze===be&&G&&(G.scrollTop=0),ze===Te&&G&&(G.scrollTop=G.scrollHeight),ze?.focus(),document.activeElement!==Me))return},[te,G]),K=v.useCallback(()=>j([$,z]),[j,$,z]);v.useEffect(()=>{oe&&K()},[oe,K]);const{onOpenChange:H,triggerPointerDownPosRef:se}=M;v.useEffect(()=>{if(z){let Q={x:0,y:0};const be=Te=>{Q={x:Math.abs(Math.round(Te.pageX)-(se.current?.x??0)),y:Math.abs(Math.round(Te.pageY)-(se.current?.y??0))}},ve=Te=>{Q.x<=10&&Q.y<=10?Te.preventDefault():z.contains(Te.target)||H(!1),document.removeEventListener("pointermove",be),se.current=null};return se.current!==null&&(document.addEventListener("pointermove",be),document.addEventListener("pointerup",ve,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",be),document.removeEventListener("pointerup",ve,{capture:!0})}}},[z,H,se]),v.useEffect(()=>{const Q=()=>H(!1);return window.addEventListener("blur",Q),window.addEventListener("resize",Q),()=>{window.removeEventListener("blur",Q),window.removeEventListener("resize",Q)}},[H]);const[pe,N]=K0(Q=>{const be=te().filter(Me=>!Me.disabled),ve=be.find(Me=>Me.ref.current===document.activeElement),Te=X0(be,Q,ve);Te&&setTimeout(()=>Te.ref.current.focus())}),q=v.useCallback((Q,be,ve)=>{const Te=!ue.current&&!ve;(M.value!==void 0&&M.value===be||Te)&&(W(Q),Te&&(ue.current=!0))},[M.value]),F=v.useCallback(()=>z?.focus(),[z]),J=v.useCallback((Q,be,ve)=>{const Te=!ue.current&&!ve;(M.value!==void 0&&M.value===be||Te)&&ne(Q)},[M.value]),de=o==="popper"?Tf:_0,me=de===Tf?{side:h,sideOffset:p,align:m,alignOffset:x,arrowPadding:y,collisionBoundary:w,collisionPadding:C,sticky:R,hideWhenDetached:E,avoidCollisions:T}:{};return b.jsx(O0,{scope:r,content:z,viewport:G,onViewportChange:Z,itemRefCallback:q,selectedItem:$,onItemLeave:F,itemTextRefCallback:J,focusSelectedItem:K,selectedItemText:ee,position:o,isPositioned:oe,searchRef:pe,children:b.jsx(b0,{as:TA,allowPinchZoom:!0,children:b.jsx(Uv,{asChild:!0,trapped:M.open,onMountAutoFocus:Q=>{Q.preventDefault()},onUnmountAutoFocus:Pe(s,Q=>{M.trigger?.focus({preventScroll:!0}),Q.preventDefault()}),children:b.jsx(Pf,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:Q=>Q.preventDefault(),onDismiss:()=>M.onOpenChange(!1),children:b.jsx(de,{role:"listbox",id:M.contentId,"data-state":M.open?"open":"closed",dir:M.dir,onContextMenu:Q=>Q.preventDefault(),..._,...me,onPlaced:()=>re(!0),ref:P,style:{display:"flex",flexDirection:"column",outline:"none",..._.style},onKeyDown:Pe(_.onKeyDown,Q=>{const be=Q.ctrlKey||Q.altKey||Q.metaKey;if(Q.key==="Tab"&&Q.preventDefault(),!be&&Q.key.length===1&&N(Q.key),["ArrowUp","ArrowDown","Home","End"].includes(Q.key)){let Te=te().filter(Me=>!Me.disabled).map(Me=>Me.ref.current);if(["ArrowUp","End"].includes(Q.key)&&(Te=Te.slice().reverse()),["ArrowUp","ArrowDown"].includes(Q.key)){const Me=Q.target,ze=Te.indexOf(Me);Te=Te.slice(ze+1)}setTimeout(()=>j(Te)),Q.preventDefault()}})})})})})})});M0.displayName=CA;var RA="SelectItemAlignedPosition",_0=v.forwardRef((a,l)=>{const{__scopeSelect:r,onPlaced:o,...s}=a,u=ya(Ka,r),d=va(Ka,r),[h,p]=v.useState(null),[m,x]=v.useState(null),y=nt(l,P=>x(P)),w=Ss(r),C=v.useRef(!1),R=v.useRef(!0),{viewport:E,selectedItem:T,selectedItemText:_,focusSelectedItem:M}=d,z=v.useCallback(()=>{if(u.trigger&&u.valueNode&&h&&m&&E&&T&&_){const P=u.trigger.getBoundingClientRect(),$=m.getBoundingClientRect(),W=u.valueNode.getBoundingClientRect(),ee=_.getBoundingClientRect();if(u.dir!=="rtl"){const Me=ee.left-$.left,ze=W.left-Me,mt=P.left-ze,gt=P.width+mt,xa=Math.max(gt,$.width),ba=window.innerWidth-Wt,Ql=Xg(ze,[Wt,Math.max(Wt,ba-xa)]);h.style.minWidth=gt+"px",h.style.left=Ql+"px"}else{const Me=$.right-ee.right,ze=window.innerWidth-W.right-Me,mt=window.innerWidth-P.right-ze,gt=P.width+mt,xa=Math.max(gt,$.width),ba=window.innerWidth-Wt,Ql=Xg(ze,[Wt,Math.max(Wt,ba-xa)]);h.style.minWidth=gt+"px",h.style.right=Ql+"px"}const ne=w(),te=window.innerHeight-Wt*2,oe=E.scrollHeight,re=window.getComputedStyle(m),ue=parseInt(re.borderTopWidth,10),j=parseInt(re.paddingTop,10),K=parseInt(re.borderBottomWidth,10),H=parseInt(re.paddingBottom,10),se=ue+j+oe+H+K,pe=Math.min(T.offsetHeight*5,se),N=window.getComputedStyle(E),q=parseInt(N.paddingTop,10),F=parseInt(N.paddingBottom,10),J=P.top+P.height/2-Wt,de=te-J,me=T.offsetHeight/2,Q=T.offsetTop+me,be=ue+j+Q,ve=se-be;if(be<=J){const Me=ne.length>0&&T===ne[ne.length-1].ref.current;h.style.bottom="0px";const ze=m.clientHeight-E.offsetTop-E.offsetHeight,mt=Math.max(de,me+(Me?F:0)+ze+K),gt=be+mt;h.style.height=gt+"px"}else{const Me=ne.length>0&&T===ne[0].ref.current;h.style.top="0px";const mt=Math.max(J,ue+E.offsetTop+(Me?q:0)+me)+ve;h.style.height=mt+"px",E.scrollTop=be-J+E.offsetTop}h.style.margin=`${Wt}px 0`,h.style.minHeight=pe+"px",h.style.maxHeight=te+"px",o?.(),requestAnimationFrame(()=>C.current=!0)}},[w,u.trigger,u.valueNode,h,m,E,T,_,u.dir,o]);ht(()=>z(),[z]);const[V,G]=v.useState();ht(()=>{m&&G(window.getComputedStyle(m).zIndex)},[m]);const Z=v.useCallback(P=>{P&&R.current===!0&&(z(),M?.(),R.current=!1)},[z,M]);return b.jsx(NA,{scope:r,contentWrapper:h,shouldExpandOnScrollRef:C,onScrollButtonChange:Z,children:b.jsx("div",{ref:p,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:V},children:b.jsx($e.div,{...s,ref:y,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}})})})});_0.displayName=RA;var AA="SelectPopperPosition",Tf=v.forwardRef((a,l)=>{const{__scopeSelect:r,align:o="start",collisionPadding:s=Wt,...u}=a,d=Es(r);return b.jsx(s0,{...d,...u,ref:l,align:o,collisionPadding:s,style:{boxSizing:"border-box",...u.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Tf.displayName=AA;var[NA,Zf]=Fl(Ka,{}),Rf="SelectViewport",j0=v.forwardRef((a,l)=>{const{__scopeSelect:r,nonce:o,...s}=a,u=va(Rf,r),d=Zf(Rf,r),h=nt(l,u.onViewportChange),p=v.useRef(0);return b.jsxs(b.Fragment,{children:[b.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),b.jsx(bs.Slot,{scope:r,children:b.jsx($e.div,{"data-radix-select-viewport":"",role:"presentation",...s,ref:h,style:{position:"relative",flex:1,overflow:"hidden auto",...s.style},onScroll:Pe(s.onScroll,m=>{const x=m.currentTarget,{contentWrapper:y,shouldExpandOnScrollRef:w}=d;if(w?.current&&y){const C=Math.abs(p.current-x.scrollTop);if(C>0){const R=window.innerHeight-Wt*2,E=parseFloat(y.style.minHeight),T=parseFloat(y.style.height),_=Math.max(E,T);if(_<R){const M=_+C,z=Math.min(R,M),V=M-z;y.style.height=z+"px",y.style.bottom==="0px"&&(x.scrollTop=V>0?V:0,y.style.justifyContent="flex-end")}}}p.current=x.scrollTop})})})]})});j0.displayName=Rf;var D0="SelectGroup",[OA,MA]=Fl(D0),_A=v.forwardRef((a,l)=>{const{__scopeSelect:r,...o}=a,s=hs();return b.jsx(OA,{scope:r,id:s,children:b.jsx($e.div,{role:"group","aria-labelledby":s,...o,ref:l})})});_A.displayName=D0;var z0="SelectLabel",jA=v.forwardRef((a,l)=>{const{__scopeSelect:r,...o}=a,s=MA(z0,r);return b.jsx($e.div,{id:s.id,...o,ref:l})});jA.displayName=z0;var as="SelectItem",[DA,L0]=Fl(as),k0=v.forwardRef((a,l)=>{const{__scopeSelect:r,value:o,disabled:s=!1,textValue:u,...d}=a,h=ya(as,r),p=va(as,r),m=h.value===o,[x,y]=v.useState(u??""),[w,C]=v.useState(!1),R=nt(l,M=>p.itemRefCallback?.(M,o,s)),E=hs(),T=v.useRef("touch"),_=()=>{s||(h.onValueChange(o),h.onOpenChange(!1))};if(o==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return b.jsx(DA,{scope:r,value:o,disabled:s,textId:E,isSelected:m,onItemTextChange:v.useCallback(M=>{y(z=>z||(M?.textContent??"").trim())},[]),children:b.jsx(bs.ItemSlot,{scope:r,value:o,disabled:s,textValue:x,children:b.jsx($e.div,{role:"option","aria-labelledby":E,"data-highlighted":w?"":void 0,"aria-selected":m&&w,"data-state":m?"checked":"unchecked","aria-disabled":s||void 0,"data-disabled":s?"":void 0,tabIndex:s?void 0:-1,...d,ref:R,onFocus:Pe(d.onFocus,()=>C(!0)),onBlur:Pe(d.onBlur,()=>C(!1)),onClick:Pe(d.onClick,()=>{T.current!=="mouse"&&_()}),onPointerUp:Pe(d.onPointerUp,()=>{T.current==="mouse"&&_()}),onPointerDown:Pe(d.onPointerDown,M=>{T.current=M.pointerType}),onPointerMove:Pe(d.onPointerMove,M=>{T.current=M.pointerType,s?p.onItemLeave?.():T.current==="mouse"&&M.currentTarget.focus({preventScroll:!0})}),onPointerLeave:Pe(d.onPointerLeave,M=>{M.currentTarget===document.activeElement&&p.onItemLeave?.()}),onKeyDown:Pe(d.onKeyDown,M=>{p.searchRef?.current!==""&&M.key===" "||(yA.includes(M.key)&&_(),M.key===" "&&M.preventDefault())})})})})});k0.displayName=as;var Fi="SelectItemText",U0=v.forwardRef((a,l)=>{const{__scopeSelect:r,className:o,style:s,...u}=a,d=ya(Fi,r),h=va(Fi,r),p=L0(Fi,r),m=SA(Fi,r),[x,y]=v.useState(null),w=nt(l,_=>y(_),p.onItemTextChange,_=>h.itemTextRefCallback?.(_,p.value,p.disabled)),C=x?.textContent,R=v.useMemo(()=>b.jsx("option",{value:p.value,disabled:p.disabled,children:C},p.value),[p.disabled,p.value,C]),{onNativeOptionAdd:E,onNativeOptionRemove:T}=m;return ht(()=>(E(R),()=>T(R)),[E,T,R]),b.jsxs(b.Fragment,{children:[b.jsx($e.span,{id:p.textId,...u,ref:w}),p.isSelected&&d.valueNode&&!d.valueNodeHasChildren?rr.createPortal(u.children,d.valueNode):null]})});U0.displayName=Fi;var H0="SelectItemIndicator",B0=v.forwardRef((a,l)=>{const{__scopeSelect:r,...o}=a;return L0(H0,r).isSelected?b.jsx($e.span,{"aria-hidden":!0,...o,ref:l}):null});B0.displayName=H0;var Af="SelectScrollUpButton",V0=v.forwardRef((a,l)=>{const r=va(Af,a.__scopeSelect),o=Zf(Af,a.__scopeSelect),[s,u]=v.useState(!1),d=nt(l,o.onScrollButtonChange);return ht(()=>{if(r.viewport&&r.isPositioned){let h=function(){const m=p.scrollTop>0;u(m)};const p=r.viewport;return h(),p.addEventListener("scroll",h),()=>p.removeEventListener("scroll",h)}},[r.viewport,r.isPositioned]),s?b.jsx(G0,{...a,ref:d,onAutoScroll:()=>{const{viewport:h,selectedItem:p}=r;h&&p&&(h.scrollTop=h.scrollTop-p.offsetHeight)}}):null});V0.displayName=Af;var Nf="SelectScrollDownButton",P0=v.forwardRef((a,l)=>{const r=va(Nf,a.__scopeSelect),o=Zf(Nf,a.__scopeSelect),[s,u]=v.useState(!1),d=nt(l,o.onScrollButtonChange);return ht(()=>{if(r.viewport&&r.isPositioned){let h=function(){const m=p.scrollHeight-p.clientHeight,x=Math.ceil(p.scrollTop)<m;u(x)};const p=r.viewport;return h(),p.addEventListener("scroll",h),()=>p.removeEventListener("scroll",h)}},[r.viewport,r.isPositioned]),s?b.jsx(G0,{...a,ref:d,onAutoScroll:()=>{const{viewport:h,selectedItem:p}=r;h&&p&&(h.scrollTop=h.scrollTop+p.offsetHeight)}}):null});P0.displayName=Nf;var G0=v.forwardRef((a,l)=>{const{__scopeSelect:r,onAutoScroll:o,...s}=a,u=va("SelectScrollButton",r),d=v.useRef(null),h=Ss(r),p=v.useCallback(()=>{d.current!==null&&(window.clearInterval(d.current),d.current=null)},[]);return v.useEffect(()=>()=>p(),[p]),ht(()=>{h().find(x=>x.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[h]),b.jsx($e.div,{"aria-hidden":!0,...s,ref:l,style:{flexShrink:0,...s.style},onPointerDown:Pe(s.onPointerDown,()=>{d.current===null&&(d.current=window.setInterval(o,50))}),onPointerMove:Pe(s.onPointerMove,()=>{u.onItemLeave?.(),d.current===null&&(d.current=window.setInterval(o,50))}),onPointerLeave:Pe(s.onPointerLeave,()=>{p()})})}),zA="SelectSeparator",LA=v.forwardRef((a,l)=>{const{__scopeSelect:r,...o}=a;return b.jsx($e.div,{"aria-hidden":!0,...o,ref:l})});LA.displayName=zA;var Of="SelectArrow",kA=v.forwardRef((a,l)=>{const{__scopeSelect:r,...o}=a,s=Es(r),u=ya(Of,r),d=va(Of,r);return u.open&&d.position==="popper"?b.jsx(c0,{...s,...o,ref:l}):null});kA.displayName=Of;var UA="SelectBubbleInput",q0=v.forwardRef(({__scopeSelect:a,value:l,...r},o)=>{const s=v.useRef(null),u=nt(o,s),d=AR(l);return v.useEffect(()=>{const h=s.current;if(!h)return;const p=window.HTMLSelectElement.prototype,x=Object.getOwnPropertyDescriptor(p,"value").set;if(d!==l&&x){const y=new Event("change",{bubbles:!0});x.call(h,l),h.dispatchEvent(y)}},[d,l]),b.jsx($e.select,{...r,style:{...u0,...r.style},ref:u,defaultValue:l})});q0.displayName=UA;function Y0(a){return a===""||a===void 0}function K0(a){const l=Ga(a),r=v.useRef(""),o=v.useRef(0),s=v.useCallback(d=>{const h=r.current+d;l(h),(function p(m){r.current=m,window.clearTimeout(o.current),m!==""&&(o.current=window.setTimeout(()=>p(""),1e3))})(h)},[l]),u=v.useCallback(()=>{r.current="",window.clearTimeout(o.current)},[]);return v.useEffect(()=>()=>window.clearTimeout(o.current),[]),[r,s,u]}function X0(a,l,r){const s=l.length>1&&Array.from(l).every(m=>m===l[0])?l[0]:l,u=r?a.indexOf(r):-1;let d=HA(a,Math.max(u,0));s.length===1&&(d=d.filter(m=>m!==r));const p=d.find(m=>m.textValue.toLowerCase().startsWith(s.toLowerCase()));return p!==r?p:void 0}function HA(a,l){return a.map((r,o)=>a[(l+o)%a.length])}var BA=S0,VA=w0,PA=T0,GA=R0,qA=A0,YA=N0,KA=j0,XA=k0,IA=U0,$A=B0,FA=V0,QA=P0;function yy({...a}){return b.jsx(BA,{"data-slot":"select",...a})}function vy({...a}){return b.jsx(PA,{"data-slot":"select-value",...a})}function xy({className:a,size:l="default",children:r,...o}){return b.jsxs(VA,{"data-slot":"select-trigger","data-size":l,className:Ft("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",a),...o,children:[r,b.jsx(GA,{asChild:!0,children:b.jsx(Sv,{className:"size-4 opacity-50"})})]})}function by({className:a,children:l,position:r="item-aligned",align:o="center",...s}){return b.jsx(qA,{children:b.jsxs(YA,{"data-slot":"select-content",className:Ft("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",r==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:r,align:o,...s,children:[b.jsx(ZA,{}),b.jsx(KA,{className:Ft("p-1",r==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:l}),b.jsx(JA,{})]})})}function df({className:a,children:l,...r}){return b.jsxs(XA,{"data-slot":"select-item",className:Ft("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",a),...r,children:[b.jsx("span",{"data-slot":"select-item-indicator",className:"absolute right-2 flex size-3.5 items-center justify-center",children:b.jsx($A,{children:b.jsx(d2,{className:"size-4"})})}),b.jsx(IA,{children:l})]})}function ZA({className:a,...l}){return b.jsx(FA,{"data-slot":"select-scroll-up-button",className:Ft("flex cursor-default items-center justify-center py-1",a),...l,children:b.jsx(g2,{className:"size-4"})})}function JA({className:a,...l}){return b.jsx(QA,{"data-slot":"select-scroll-down-button",className:Ft("flex cursor-default items-center justify-center py-1",a),...l,children:b.jsx(Sv,{className:"size-4"})})}function WA(a,l){return v.useReducer((r,o)=>l[r][o]??r,a)}var Jf=a=>{const{present:l,children:r}=a,o=eN(l),s=typeof r=="function"?r({present:o.isPresent}):v.Children.only(r),u=nt(o.ref,tN(s));return typeof r=="function"||o.isPresent?v.cloneElement(s,{ref:u}):null};Jf.displayName="Presence";function eN(a){const[l,r]=v.useState(),o=v.useRef(null),s=v.useRef(a),u=v.useRef("none"),d=a?"mounted":"unmounted",[h,p]=WA(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return v.useEffect(()=>{const m=Uo(o.current);u.current=h==="mounted"?m:"none"},[h]),ht(()=>{const m=o.current,x=s.current;if(x!==a){const w=u.current,C=Uo(m);a?p("MOUNT"):C==="none"||m?.display==="none"?p("UNMOUNT"):p(x&&w!==C?"ANIMATION_OUT":"UNMOUNT"),s.current=a}},[a,p]),ht(()=>{if(l){let m;const x=l.ownerDocument.defaultView??window,y=C=>{const E=Uo(o.current).includes(CSS.escape(C.animationName));if(C.target===l&&E&&(p("ANIMATION_END"),!s.current)){const T=l.style.animationFillMode;l.style.animationFillMode="forwards",m=x.setTimeout(()=>{l.style.animationFillMode==="forwards"&&(l.style.animationFillMode=T)})}},w=C=>{C.target===l&&(u.current=Uo(o.current))};return l.addEventListener("animationstart",w),l.addEventListener("animationcancel",y),l.addEventListener("animationend",y),()=>{x.clearTimeout(m),l.removeEventListener("animationstart",w),l.removeEventListener("animationcancel",y),l.removeEventListener("animationend",y)}}else p("ANIMATION_END")},[l,p]),{isPresent:["mounted","unmountSuspended"].includes(h),ref:v.useCallback(m=>{o.current=m?getComputedStyle(m):null,r(m)},[])}}function Uo(a){return a?.animationName||"none"}function tN(a){let l=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,r=l&&"isReactWarning"in l&&l.isReactWarning;return r?a.ref:(l=Object.getOwnPropertyDescriptor(a,"ref")?.get,r=l&&"isReactWarning"in l&&l.isReactWarning,r?a.props.ref:a.props.ref||a.ref)}var nN=Symbol("radix.slottable");function aN(a){const l=({children:r})=>b.jsx(b.Fragment,{children:r});return l.displayName=`${a}.Slottable`,l.__radixId=nN,l}var[ws]=ds("Tooltip",[vs]),Cs=vs(),I0="TooltipProvider",lN=700,Mf="tooltip.open",[iN,Wf]=ws(I0),$0=a=>{const{__scopeTooltip:l,delayDuration:r=lN,skipDelayDuration:o=300,disableHoverableContent:s=!1,children:u}=a,d=v.useRef(!0),h=v.useRef(!1),p=v.useRef(0);return v.useEffect(()=>{const m=p.current;return()=>window.clearTimeout(m)},[]),b.jsx(iN,{scope:l,isOpenDelayedRef:d,delayDuration:r,onOpen:v.useCallback(()=>{window.clearTimeout(p.current),d.current=!1},[]),onClose:v.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>d.current=!0,o)},[o]),isPointerInTransitRef:h,onPointerInTransitChange:v.useCallback(m=>{h.current=m},[]),disableHoverableContent:s,children:u})};$0.displayName=I0;var ar="Tooltip",[rN,cr]=ws(ar),F0=a=>{const{__scopeTooltip:l,children:r,open:o,defaultOpen:s,onOpenChange:u,disableHoverableContent:d,delayDuration:h}=a,p=Wf(ar,a.__scopeTooltip),m=Cs(l),[x,y]=v.useState(null),w=hs(),C=v.useRef(0),R=d??p.disableHoverableContent,E=h??p.delayDuration,T=v.useRef(!1),[_,M]=wf({prop:o,defaultProp:s??!1,onChange:P=>{P?(p.onOpen(),document.dispatchEvent(new CustomEvent(Mf))):p.onClose(),u?.(P)},caller:ar}),z=v.useMemo(()=>_?T.current?"delayed-open":"instant-open":"closed",[_]),V=v.useCallback(()=>{window.clearTimeout(C.current),C.current=0,T.current=!1,M(!0)},[M]),G=v.useCallback(()=>{window.clearTimeout(C.current),C.current=0,M(!1)},[M]),Z=v.useCallback(()=>{window.clearTimeout(C.current),C.current=window.setTimeout(()=>{T.current=!0,M(!0),C.current=0},E)},[E,M]);return v.useEffect(()=>()=>{C.current&&(window.clearTimeout(C.current),C.current=0)},[]),b.jsx(r0,{...m,children:b.jsx(rN,{scope:l,contentId:w,open:_,stateAttribute:z,trigger:x,onTriggerChange:y,onTriggerEnter:v.useCallback(()=>{p.isOpenDelayedRef.current?Z():V()},[p.isOpenDelayedRef,Z,V]),onTriggerLeave:v.useCallback(()=>{R?G():(window.clearTimeout(C.current),C.current=0)},[G,R]),onOpen:V,onClose:G,disableHoverableContent:R,children:r})})};F0.displayName=ar;var _f="TooltipTrigger",Q0=v.forwardRef((a,l)=>{const{__scopeTooltip:r,...o}=a,s=cr(_f,r),u=Wf(_f,r),d=Cs(r),h=v.useRef(null),p=nt(l,h,s.onTriggerChange),m=v.useRef(!1),x=v.useRef(!1),y=v.useCallback(()=>m.current=!1,[]);return v.useEffect(()=>()=>document.removeEventListener("pointerup",y),[y]),b.jsx(o0,{asChild:!0,...d,children:b.jsx($e.button,{"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute,...o,ref:p,onPointerMove:Pe(a.onPointerMove,w=>{w.pointerType!=="touch"&&!x.current&&!u.isPointerInTransitRef.current&&(s.onTriggerEnter(),x.current=!0)}),onPointerLeave:Pe(a.onPointerLeave,()=>{s.onTriggerLeave(),x.current=!1}),onPointerDown:Pe(a.onPointerDown,()=>{s.open&&s.onClose(),m.current=!0,document.addEventListener("pointerup",y,{once:!0})}),onFocus:Pe(a.onFocus,()=>{m.current||s.onOpen()}),onBlur:Pe(a.onBlur,s.onClose),onClick:Pe(a.onClick,s.onClose)})})});Q0.displayName=_f;var ed="TooltipPortal",[oN,sN]=ws(ed,{forceMount:void 0}),Z0=a=>{const{__scopeTooltip:l,forceMount:r,children:o,container:s}=a,u=cr(ed,l);return b.jsx(oN,{scope:l,forceMount:r,children:b.jsx(Jf,{present:r||u.open,children:b.jsx(Qf,{asChild:!0,container:s,children:o})})})};Z0.displayName=ed;var Vl="TooltipContent",J0=v.forwardRef((a,l)=>{const r=sN(Vl,a.__scopeTooltip),{forceMount:o=r.forceMount,side:s="top",...u}=a,d=cr(Vl,a.__scopeTooltip);return b.jsx(Jf,{present:o||d.open,children:d.disableHoverableContent?b.jsx(W0,{side:s,...u,ref:l}):b.jsx(cN,{side:s,...u,ref:l})})}),cN=v.forwardRef((a,l)=>{const r=cr(Vl,a.__scopeTooltip),o=Wf(Vl,a.__scopeTooltip),s=v.useRef(null),u=nt(l,s),[d,h]=v.useState(null),{trigger:p,onClose:m}=r,x=s.current,{onPointerInTransitChange:y}=o,w=v.useCallback(()=>{h(null),y(!1)},[y]),C=v.useCallback((R,E)=>{const T=R.currentTarget,_={x:R.clientX,y:R.clientY},M=hN(_,T.getBoundingClientRect()),z=pN(_,M),V=mN(E.getBoundingClientRect()),G=yN([...z,...V]);h(G),y(!0)},[y]);return v.useEffect(()=>()=>w(),[w]),v.useEffect(()=>{if(p&&x){const R=T=>C(T,x),E=T=>C(T,p);return p.addEventListener("pointerleave",R),x.addEventListener("pointerleave",E),()=>{p.removeEventListener("pointerleave",R),x.removeEventListener("pointerleave",E)}}},[p,x,C,w]),v.useEffect(()=>{if(d){const R=E=>{const T=E.target,_={x:E.clientX,y:E.clientY},M=p?.contains(T)||x?.contains(T),z=!gN(_,d);M?w():z&&(w(),m())};return document.addEventListener("pointermove",R),()=>document.removeEventListener("pointermove",R)}},[p,x,d,m,w]),b.jsx(W0,{...a,ref:u})}),[uN,fN]=ws(ar,{isInside:!1}),dN=aN("TooltipContent"),W0=v.forwardRef((a,l)=>{const{__scopeTooltip:r,children:o,"aria-label":s,onEscapeKeyDown:u,onPointerDownOutside:d,...h}=a,p=cr(Vl,r),m=Cs(r),{onClose:x}=p;return v.useEffect(()=>(document.addEventListener(Mf,x),()=>document.removeEventListener(Mf,x)),[x]),v.useEffect(()=>{if(p.trigger){const y=w=>{w.target?.contains(p.trigger)&&x()};return window.addEventListener("scroll",y,{capture:!0}),()=>window.removeEventListener("scroll",y,{capture:!0})}},[p.trigger,x]),b.jsx(Pf,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:y=>y.preventDefault(),onDismiss:x,children:b.jsxs(s0,{"data-state":p.stateAttribute,...m,...h,ref:l,style:{...h.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[b.jsx(dN,{children:o}),b.jsx(uN,{scope:r,isInside:!0,children:b.jsx(OR,{id:p.contentId,role:"tooltip",children:s||o})})]})})});J0.displayName=Vl;var ex="TooltipArrow",tx=v.forwardRef((a,l)=>{const{__scopeTooltip:r,...o}=a,s=Cs(r);return fN(ex,r).isInside?null:b.jsx(c0,{...s,...o,ref:l})});tx.displayName=ex;function hN(a,l){const r=Math.abs(l.top-a.y),o=Math.abs(l.bottom-a.y),s=Math.abs(l.right-a.x),u=Math.abs(l.left-a.x);switch(Math.min(r,o,s,u)){case u:return"left";case s:return"right";case r:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function pN(a,l,r=5){const o=[];switch(l){case"top":o.push({x:a.x-r,y:a.y+r},{x:a.x+r,y:a.y+r});break;case"bottom":o.push({x:a.x-r,y:a.y-r},{x:a.x+r,y:a.y-r});break;case"left":o.push({x:a.x+r,y:a.y-r},{x:a.x+r,y:a.y+r});break;case"right":o.push({x:a.x-r,y:a.y-r},{x:a.x-r,y:a.y+r});break}return o}function mN(a){const{top:l,right:r,bottom:o,left:s}=a;return[{x:s,y:l},{x:r,y:l},{x:r,y:o},{x:s,y:o}]}function gN(a,l){const{x:r,y:o}=a;let s=!1;for(let u=0,d=l.length-1;u<l.length;d=u++){const h=l[u],p=l[d],m=h.x,x=h.y,y=p.x,w=p.y;x>o!=w>o&&r<(y-m)*(o-x)/(w-x)+m&&(s=!s)}return s}function yN(a){const l=a.slice();return l.sort((r,o)=>r.x<o.x?-1:r.x>o.x?1:r.y<o.y?-1:r.y>o.y?1:0),vN(l)}function vN(a){if(a.length<=1)return a.slice();const l=[];for(let o=0;o<a.length;o++){const s=a[o];for(;l.length>=2;){const u=l[l.length-1],d=l[l.length-2];if((u.x-d.x)*(s.y-d.y)>=(u.y-d.y)*(s.x-d.x))l.pop();else break}l.push(s)}l.pop();const r=[];for(let o=a.length-1;o>=0;o--){const s=a[o];for(;r.length>=2;){const u=r[r.length-1],d=r[r.length-2];if((u.x-d.x)*(s.y-d.y)>=(u.y-d.y)*(s.x-d.x))r.pop();else break}r.push(s)}return r.pop(),l.length===1&&r.length===1&&l[0].x===r[0].x&&l[0].y===r[0].y?l:l.concat(r)}var xN=$0,bN=F0,SN=Q0,EN=Z0,wN=J0,CN=tx;function nx({delayDuration:a=0,...l}){return b.jsx(xN,{"data-slot":"tooltip-provider",delayDuration:a,...l})}function Sy({...a}){return b.jsx(nx,{children:b.jsx(bN,{"data-slot":"tooltip",...a})})}function Ey({...a}){return b.jsx(SN,{"data-slot":"tooltip-trigger",...a})}function wy({className:a,sideOffset:l=0,children:r,...o}){return b.jsx(EN,{children:b.jsxs(wN,{"data-slot":"tooltip-content",sideOffset:l,className:Ft("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",a),...o,children:[r,b.jsx(CN,{className:"bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"})]})})}function TN(){const{t:a,i18n:l}=Yl(),r=l.language,[o,s]=v.useState(""),[u,d]=v.useState("all"),[h,p]=v.useState("card"),[m,x]=v.useState("newest"),y=fs(),w=[{value:"newest",label:a("notes.newest")},{value:"oldest",label:a("notes.oldest")},{value:"title",label:a("notes.title")},{value:"updated",label:a("notes.recentlyUpdated")}],C=v.useMemo(()=>{let R=y.filter(E=>{const T=E[r].title.toLowerCase().includes(o.toLowerCase())||E[r].summary.toLowerCase().includes(o.toLowerCase())||E.tags.some(M=>M.toLowerCase().includes(o.toLowerCase())),_=u==="all"||E.category===u;return T&&_});return R=[...R].sort((E,T)=>{switch(m){case"newest":return new Date(T.createdAt).getTime()-new Date(E.createdAt).getTime();case"oldest":return new Date(E.createdAt).getTime()-new Date(T.createdAt).getTime();case"title":return E[r].title.localeCompare(T[r].title,r);case"updated":return new Date(T.updatedAt).getTime()-new Date(E.updatedAt).getTime();default:return 0}}),R},[y,o,u,m,r]);return b.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[b.jsxs("div",{className:"mb-8",children:[b.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-slate-800 mb-4",children:a("notes.title")}),b.jsxs("div",{className:"flex flex-col lg:flex-row gap-4",children:[b.jsxs("div",{className:"relative flex-1",children:[b.jsx(H2,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"}),b.jsx(gC,{placeholder:a("notes.search"),value:o,onChange:R=>s(R.target.value),className:"pl-10"})]}),b.jsxs(yy,{value:u,onValueChange:d,children:[b.jsx(xy,{className:"w-full lg:w-48",children:b.jsx(vy,{placeholder:a("notes.filterByCategory")})}),b.jsxs(by,{children:[b.jsx(df,{value:"all",children:a("notes.allCategories")}),Xa.map(R=>b.jsx(df,{value:R.slug,children:R[r].name},R.id))]})]}),b.jsxs(yy,{value:m,onValueChange:R=>x(R),children:[b.jsxs(xy,{className:"w-full lg:w-44",children:[b.jsx(r2,{className:"w-4 h-4 mr-2"}),b.jsx(vy,{placeholder:a("notes.sortBy")})]}),b.jsx(by,{children:w.map(R=>b.jsx(df,{value:R.value,children:R.label},R.value))})]}),b.jsx(nx,{children:b.jsxs("div",{className:"flex items-center gap-1 border rounded-lg p-1 bg-white",children:[b.jsxs(Sy,{children:[b.jsx(Ey,{asChild:!0,children:b.jsx($t,{variant:h==="card"?"default":"ghost",size:"icon",className:"h-9 w-9",onClick:()=>p("card"),children:b.jsx(O2,{className:"w-4 h-4"})})}),b.jsx(wy,{children:b.jsx("p",{children:a("notes.cardView")})})]}),b.jsxs(Sy,{children:[b.jsx(Ey,{asChild:!0,children:b.jsx($t,{variant:h==="list"?"default":"ghost",size:"icon",className:"h-9 w-9",onClick:()=>p("list"),children:b.jsx(_2,{className:"w-4 h-4"})})}),b.jsx(wy,{children:b.jsx("p",{children:a("notes.listView")})})]})]})})]}),b.jsxs("div",{className:"mt-4 text-sm text-slate-500",children:[C.length," ",r==="zh"?"篇笔记":"notes"]})]}),C.length===0?b.jsx("div",{className:"text-center py-16",children:b.jsx("p",{className:"text-slate-400 text-lg",children:a("notes.noNotes")})}):b.jsx("div",{className:h==="card"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6":"flex flex-col gap-4",children:C.map(R=>h==="card"?b.jsx(RN,{note:R,lang:r},R.id):b.jsx(AN,{note:R,lang:r},R.id))})]})}function RN({note:a,lang:l}){const r=Xa.find(o=>o.slug===a.category);return b.jsx(Ze,{to:`/notes/${a.slug}`,children:b.jsx(ha,{className:"h-full hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1",children:b.jsxs(pa,{className:"p-6",children:[b.jsx("div",{className:"flex items-center gap-2 mb-3",children:b.jsx(us,{className:"bg-indigo-100 text-indigo-700 hover:bg-indigo-100",children:r?.[l].name})}),b.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-3 line-clamp-2",children:a[l].title}),b.jsx("p",{className:"text-sm text-slate-500 mb-4 line-clamp-3",children:a[l].summary}),b.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-slate-100",children:[b.jsx("div",{className:"flex items-center gap-4 text-xs text-slate-400",children:b.jsxs("span",{className:"flex items-center gap-1",children:[b.jsx(cs,{className:"w-3 h-3"}),a.createdAt]})}),b.jsx("div",{className:"flex gap-1",children:a.tags.slice(0,2).map(o=>b.jsxs("span",{className:"text-xs text-slate-400 flex items-center gap-0.5",children:[b.jsx(Vf,{className:"w-3 h-3"}),o]},o))})]})]})})})}function AN({note:a,lang:l}){const r=Xa.find(o=>o.slug===a.category);return b.jsx(Ze,{to:`/notes/${a.slug}`,children:b.jsx(ha,{className:"hover:shadow-md transition-all cursor-pointer group",children:b.jsx(pa,{className:"p-4",children:b.jsxs("div",{className:"flex items-center gap-4",children:[b.jsx("div",{className:"flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center",children:b.jsx("span",{className:"text-xs font-medium text-indigo-600",children:r?.[l].name.slice(0,2)})}),b.jsxs("div",{className:"flex-1 min-w-0",children:[b.jsx("h3",{className:"text-base font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors",children:a[l].title}),b.jsx("p",{className:"text-sm text-slate-500 line-clamp-1 mt-1",children:a[l].summary})]}),b.jsxs("div",{className:"hidden sm:flex flex-col items-end gap-1 text-xs text-slate-400",children:[b.jsxs("span",{className:"flex items-center gap-1",children:[b.jsx(cs,{className:"w-3 h-3"}),a.createdAt]}),b.jsxs("span",{className:"flex items-center gap-1",children:[b.jsx(wv,{className:"w-3 h-3"}),a.updatedAt]})]}),b.jsx("div",{className:"hidden md:flex flex-wrap gap-1 max-w-[150px] justify-end",children:a.tags.map(o=>b.jsx(us,{variant:"outline",className:"text-xs",children:o},o))}),b.jsx(kl,{className:"w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-colors"})]})})})})}function NN({content:a}){const l=a.split(`
`),r=[];let o=!1,s="";return l.forEach((u,d)=>{if(u.startsWith("```")){o?(r.push(b.jsx("pre",{className:"bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto my-4",children:b.jsx("code",{className:"text-sm font-mono",children:s.trim()})},`code-${d}`)),s="",o=!1):o=!0;return}if(o){s+=u+`
`;return}if(u.startsWith("# ")){r.push(b.jsx("h1",{className:"text-3xl font-bold text-slate-800 mt-8 mb-4",children:Ll(u.slice(2))},d));return}if(u.startsWith("## ")){r.push(b.jsx("h2",{className:"text-2xl font-semibold text-slate-800 mt-6 mb-3",children:Ll(u.slice(3))},d));return}if(u.startsWith("### ")){r.push(b.jsx("h3",{className:"text-xl font-semibold text-slate-800 mt-5 mb-2",children:Ll(u.slice(4))},d));return}if(u.startsWith("- ")||u.startsWith("* ")){r.push(b.jsx("li",{className:"ml-6 text-slate-700 leading-relaxed list-disc",children:Ll(u.slice(2))},d));return}const h=u.match(/^(\d+)\.\s(.+)$/);if(h){r.push(b.jsx("li",{className:"ml-6 text-slate-700 leading-relaxed list-decimal",children:Ll(h[2])},d));return}const p=u.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);if(p){const m=p[1],x=p[2];r.push(b.jsx("img",{src:x,alt:m,className:"w-full rounded-lg my-6 shadow-md",loading:"lazy"},`img-${d}`));return}if(u.trim()===""){r.push(b.jsx("div",{className:"h-4"},d));return}r.push(b.jsx("p",{className:"text-slate-700 leading-relaxed mb-4",children:Ll(u)},d))}),b.jsx(b.Fragment,{children:r})}function Ll(a){const l=[];let r=0;const o=/(\*\*|\*|`)(.+?)\1/g;let s;for(;(s=o.exec(a))!==null;){s.index>r&&l.push(a.slice(r,s.index));const u=s[1],d=s[2];u==="**"?l.push(b.jsx("strong",{className:"font-semibold text-slate-800",children:d},s.index)):u==="*"?l.push(b.jsx("em",{className:"italic",children:d},s.index)):u==="`"&&l.push(b.jsx("code",{className:"bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono",children:d},s.index)),r=s.index+s[0].length}return r<a.length&&l.push(a.slice(r)),b.jsx(b.Fragment,{children:l})}function ON(){const{slug:a}=Uy(),{t:l,i18n:r}=Yl(),o=r.language,s=a?uC(a):void 0;if(!s||s.status!=="published")return b.jsx(Py,{to:"/notes",replace:!0});const u=Xa.find(h=>h.slug===s.category),d=fs().filter(h=>h.category===s.category&&h.id!==s.id).slice(0,3);return b.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[b.jsxs("nav",{className:"flex items-center gap-2 text-sm text-slate-500 mb-6",children:[b.jsx(Ze,{to:"/",className:"hover:text-indigo-600",children:l("nav.home")}),b.jsx(kl,{className:"w-4 h-4"}),b.jsx(Ze,{to:"/notes",className:"hover:text-indigo-600",children:l("nav.notes")}),b.jsx(kl,{className:"w-4 h-4"}),b.jsx("span",{className:"text-slate-800",children:s[o].title})]}),b.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[b.jsx("div",{className:"lg:col-span-3",children:b.jsx(ha,{children:b.jsxs(pa,{className:"p-8",children:[b.jsxs("div",{className:"mb-8",children:[b.jsx(Ze,{to:`/category/${s.category}`,children:b.jsxs(us,{className:"mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200",children:[b.jsx(Av,{className:"w-3 h-3 mr-1"}),u?.[o].name]})}),b.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-slate-800 mb-4",children:s[o].title}),b.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-sm text-slate-500",children:[b.jsxs("span",{className:"flex items-center gap-1",children:[b.jsx(cs,{className:"w-4 h-4"}),l("notes.publishedOn")," ",s.createdAt]}),b.jsxs("span",{className:"flex items-center gap-1",children:[b.jsx(wv,{className:"w-4 h-4"}),l("notes.updatedOn")," ",s.updatedAt]})]}),b.jsx("div",{className:"flex flex-wrap gap-2 mt-4",children:s.tags.map(h=>b.jsxs("span",{className:"inline-flex items-center gap-1 text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded",children:[b.jsx(Vf,{className:"w-3 h-3"}),h]},h))})]}),b.jsx("div",{className:"prose prose-slate max-w-none",children:b.jsx(NN,{content:s[o].content||""})}),b.jsx("div",{className:"mt-12 pt-8 border-t border-slate-100",children:b.jsx(Ze,{to:"/notes",children:b.jsxs($t,{variant:"outline",children:[b.jsx(vv,{className:"w-4 h-4 mr-2"}),l("note.backToList")]})})})]})})}),b.jsx("div",{className:"lg:col-span-1",children:b.jsxs("div",{className:"sticky top-24 space-y-6",children:[d.length>0&&b.jsx(ha,{children:b.jsxs(pa,{className:"p-4",children:[b.jsx("h3",{className:"font-semibold text-slate-800 mb-4",children:l("note.relatedNotes")}),b.jsx("div",{className:"space-y-3",children:d.map(h=>b.jsxs(Ze,{to:`/notes/${h.slug}`,className:"block p-3 rounded-lg hover:bg-slate-50 transition-colors",children:[b.jsx("p",{className:"text-sm font-medium text-slate-700 line-clamp-2",children:h[o].title}),b.jsx("p",{className:"text-xs text-slate-400 mt-1",children:h.createdAt})]},h.id))})]})}),b.jsx(ha,{children:b.jsxs(pa,{className:"p-4",children:[b.jsx("h3",{className:"font-semibold text-slate-800 mb-2",children:u?.[o].name}),b.jsx("p",{className:"text-sm text-slate-500",children:u?.[o].description}),b.jsx(Ze,{to:`/category/${s.category}`,children:b.jsxs($t,{variant:"ghost",size:"sm",className:"mt-3 text-indigo-600",children:[l("categories.viewNotes"),b.jsx(kl,{className:"w-4 h-4 ml-1"})]})})]})})]})})]})]})}const MN={mcu:Cv,mpu:Zo,fpga:Nv,rtos:jv,"embedded-linux":_v,firmware:Rv,protocols:Ov,network:Dv,tools:Jo,"hardware-design":Ev,automotive:bv,iot:Mv,industrial:Tv,"embedded-c":Qo,algorithms:xv,frontend:Qo,backend:Zo,devops:Jo};function _N(){const{slug:a}=Uy(),{t:l,i18n:r}=Yl(),o=r.language,s=a?dC(a):void 0;if(!s)return b.jsx(Py,{to:"/notes",replace:!0});const u=fC(a),d=MN[s.slug]||Av;return b.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[b.jsxs("nav",{className:"flex items-center gap-2 text-sm text-slate-500 mb-6",children:[b.jsx(Ze,{to:"/",className:"hover:text-indigo-600",children:l("nav.home")}),b.jsx(kl,{className:"w-4 h-4"}),b.jsx(Ze,{to:"/notes",className:"hover:text-indigo-600",children:l("nav.notes")}),b.jsx(kl,{className:"w-4 h-4"}),b.jsx("span",{className:"text-slate-800",children:s[o].name})]}),b.jsxs("div",{className:"mb-8",children:[b.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[b.jsx("div",{className:"w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center",children:b.jsx(d,{className:"w-7 h-7 text-indigo-500"})}),b.jsxs("div",{children:[b.jsx("h1",{className:"text-3xl font-bold text-slate-800",children:s[o].name}),b.jsx("p",{className:"text-slate-500 mt-1",children:s[o].description})]})]}),b.jsx("div",{className:"flex items-center gap-4 text-sm text-slate-500",children:b.jsxs("span",{className:"flex items-center gap-1",children:[b.jsx(Fo,{className:"w-4 h-4"}),l("categories.noteCount",{count:u.length})]})})]}),u.length===0?b.jsx("div",{className:"text-center py-16",children:b.jsx("p",{className:"text-slate-400 text-lg",children:l("notes.noNotes")})}):b.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:u.map(h=>b.jsx(jN,{note:h,lang:o},h.id))}),b.jsx("div",{className:"mt-12",children:b.jsx(Ze,{to:"/notes",children:b.jsxs($t,{variant:"outline",children:[b.jsx(vv,{className:"w-4 h-4 mr-2"}),l("note.backToList")]})})})]})}function jN({note:a,lang:l}){return b.jsx(Ze,{to:`/notes/${a.slug}`,children:b.jsx(ha,{className:"h-full hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1",children:b.jsxs(pa,{className:"p-6",children:[b.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-3 line-clamp-2",children:a[l].title}),b.jsx("p",{className:"text-sm text-slate-500 mb-4 line-clamp-3",children:a[l].summary}),b.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-slate-100",children:[b.jsx("div",{className:"flex items-center gap-4 text-xs text-slate-400",children:b.jsxs("span",{className:"flex items-center gap-1",children:[b.jsx(cs,{className:"w-3 h-3"}),a.createdAt]})}),b.jsx("div",{className:"flex gap-1",children:a.tags.slice(0,2).map(r=>b.jsxs("span",{className:"text-xs text-slate-400 flex items-center gap-0.5",children:[b.jsx(Vf,{className:"w-3 h-3"}),r]},r))})]})]})})})}function DN(){return b.jsx(WE,{i18n:pt,children:b.jsx(tE,{children:b.jsx($2,{children:b.jsxs(_S,{children:[b.jsx($i,{path:"/",element:b.jsx(pC,{})}),b.jsx($i,{path:"/notes",element:b.jsx(TN,{})}),b.jsx($i,{path:"/notes/:slug",element:b.jsx(ON,{})}),b.jsx($i,{path:"/category/:slug",element:b.jsx(_N,{})})]})})})})}z1.createRoot(document.getElementById("root")).render(b.jsx(v.StrictMode,{children:b.jsx(DN,{})}));
