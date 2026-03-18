function Ab(a,i){for(var r=0;r<i.length;r++){const o=i[r];if(typeof o!="string"&&!Array.isArray(o)){for(const s in o)if(s!=="default"&&!(s in a)){const u=Object.getOwnPropertyDescriptor(o,s);u&&Object.defineProperty(a,s,u.get?u:{enumerable:!0,get:()=>o[s]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(s){if(s.ep)return;s.ep=!0;const u=r(s);fetch(s.href,u)}})();function Ey(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Uu={exports:{}},Vl={};var tg;function wb(){if(tg)return Vl;tg=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(o,s,u){var d=null;if(u!==void 0&&(d=""+u),s.key!==void 0&&(d=""+s.key),"key"in s){u={};for(var p in s)p!=="key"&&(u[p]=s[p])}else u=s;return s=u.ref,{$$typeof:a,type:o,key:d,ref:s!==void 0?s:null,props:u}}return Vl.Fragment=i,Vl.jsx=r,Vl.jsxs=r,Vl}var ng;function Rb(){return ng||(ng=1,Uu.exports=wb()),Uu.exports}var S=Rb(),Bu={exports:{}},ye={};var ag;function _b(){if(ag)return ye;ag=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),T=Symbol.iterator;function E(_){return _===null||typeof _!="object"?null:(_=T&&_[T]||_["@@iterator"],typeof _=="function"?_:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,A={};function M(_,V,Q){this.props=_,this.context=V,this.refs=A,this.updater=Q||w}M.prototype.isReactComponent={},M.prototype.setState=function(_,V){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,V,"setState")},M.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function N(){}N.prototype=M.prototype;function j(_,V,Q){this.props=_,this.context=V,this.refs=A,this.updater=Q||w}var U=j.prototype=new N;U.constructor=j,C(U,M.prototype),U.isPureReactComponent=!0;var G=Array.isArray;function Z(){}var B={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function J(_,V,Q){var W=Q.ref;return{$$typeof:a,type:_,key:V,ref:W!==void 0?W:null,props:Q}}function ee(_,V){return J(_.type,V,_.props)}function ne(_){return typeof _=="object"&&_!==null&&_.$$typeof===a}function te(_){var V={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(Q){return V[Q]})}var oe=/\/+/g;function re(_,V){return typeof _=="object"&&_!==null&&_.key!=null?te(""+_.key):V.toString(36)}function ue(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(Z,Z):(_.status="pending",_.then(function(V){_.status==="pending"&&(_.status="fulfilled",_.value=V)},function(V){_.status==="pending"&&(_.status="rejected",_.reason=V)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function D(_,V,Q,W,de){var me=typeof _;(me==="undefined"||me==="boolean")&&(_=null);var $=!1;if(_===null)$=!0;else switch(me){case"bigint":case"string":case"number":$=!0;break;case"object":switch(_.$$typeof){case a:case i:$=!0;break;case x:return $=_._init,D($(_._payload),V,Q,W,de)}}if($)return de=de(_),$=W===""?"."+re(_,0):W,G(de)?(Q="",$!=null&&(Q=$.replace(oe,"$&/")+"/"),D(de,V,Q,"",function(Ae){return Ae})):de!=null&&(ne(de)&&(de=ee(de,Q+(de.key==null||_&&_.key===de.key?"":(""+de.key).replace(oe,"$&/")+"/")+$)),V.push(de)),1;$=0;var Se=W===""?".":W+":";if(G(_))for(var ve=0;ve<_.length;ve++)W=_[ve],me=Se+re(W,ve),$+=D(W,V,Q,me,de);else if(ve=E(_),typeof ve=="function")for(_=ve.call(_),ve=0;!(W=_.next()).done;)W=W.value,me=Se+re(W,ve++),$+=D(W,V,Q,me,de);else if(me==="object"){if(typeof _.then=="function")return D(ue(_),V,Q,W,de);throw V=String(_),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return $}function q(_,V,Q){if(_==null)return _;var W=[],de=0;return D(_,W,"","",function(me){return V.call(Q,me,de++)}),W}function I(_){if(_._status===-1){var V=_._result;V=V(),V.then(function(Q){(_._status===0||_._status===-1)&&(_._status=1,_._result=Q)},function(Q){(_._status===0||_._status===-1)&&(_._status=2,_._result=Q)}),_._status===-1&&(_._status=0,_._result=V)}if(_._status===1)return _._result.default;throw _._result}var se=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)},he={map:q,forEach:function(_,V,Q){q(_,function(){V.apply(this,arguments)},Q)},count:function(_){var V=0;return q(_,function(){V++}),V},toArray:function(_){return q(_,function(V){return V})||[]},only:function(_){if(!ne(_))throw Error("React.Children.only expected to receive a single React element child.");return _}};return ye.Activity=y,ye.Children=he,ye.Component=M,ye.Fragment=r,ye.Profiler=s,ye.PureComponent=j,ye.StrictMode=o,ye.Suspense=h,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ye.__COMPILER_RUNTIME={__proto__:null,c:function(_){return B.H.useMemoCache(_)}},ye.cache=function(_){return function(){return _.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(_,V,Q){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var W=C({},_.props),de=_.key;if(V!=null)for(me in V.key!==void 0&&(de=""+V.key),V)!X.call(V,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&V.ref===void 0||(W[me]=V[me]);var me=arguments.length-2;if(me===1)W.children=Q;else if(1<me){for(var $=Array(me),Se=0;Se<me;Se++)$[Se]=arguments[Se+2];W.children=$}return J(_.type,de,W)},ye.createContext=function(_){return _={$$typeof:d,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:u,_context:_},_},ye.createElement=function(_,V,Q){var W,de={},me=null;if(V!=null)for(W in V.key!==void 0&&(me=""+V.key),V)X.call(V,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(de[W]=V[W]);var $=arguments.length-2;if($===1)de.children=Q;else if(1<$){for(var Se=Array($),ve=0;ve<$;ve++)Se[ve]=arguments[ve+2];de.children=Se}if(_&&_.defaultProps)for(W in $=_.defaultProps,$)de[W]===void 0&&(de[W]=$[W]);return J(_,me,de)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(_){return{$$typeof:p,render:_}},ye.isValidElement=ne,ye.lazy=function(_){return{$$typeof:x,_payload:{_status:-1,_result:_},_init:I}},ye.memo=function(_,V){return{$$typeof:m,type:_,compare:V===void 0?null:V}},ye.startTransition=function(_){var V=B.T,Q={};B.T=Q;try{var W=_(),de=B.S;de!==null&&de(Q,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(Z,se)}catch(me){se(me)}finally{V!==null&&Q.types!==null&&(V.types=Q.types),B.T=V}},ye.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ye.use=function(_){return B.H.use(_)},ye.useActionState=function(_,V,Q){return B.H.useActionState(_,V,Q)},ye.useCallback=function(_,V){return B.H.useCallback(_,V)},ye.useContext=function(_){return B.H.useContext(_)},ye.useDebugValue=function(){},ye.useDeferredValue=function(_,V){return B.H.useDeferredValue(_,V)},ye.useEffect=function(_,V){return B.H.useEffect(_,V)},ye.useEffectEvent=function(_){return B.H.useEffectEvent(_)},ye.useId=function(){return B.H.useId()},ye.useImperativeHandle=function(_,V,Q){return B.H.useImperativeHandle(_,V,Q)},ye.useInsertionEffect=function(_,V){return B.H.useInsertionEffect(_,V)},ye.useLayoutEffect=function(_,V){return B.H.useLayoutEffect(_,V)},ye.useMemo=function(_,V){return B.H.useMemo(_,V)},ye.useOptimistic=function(_,V){return B.H.useOptimistic(_,V)},ye.useReducer=function(_,V,Q){return B.H.useReducer(_,V,Q)},ye.useRef=function(_){return B.H.useRef(_)},ye.useState=function(_){return B.H.useState(_)},ye.useSyncExternalStore=function(_,V,Q){return B.H.useSyncExternalStore(_,V,Q)},ye.useTransition=function(){return B.H.useTransition()},ye.version="19.2.3",ye}var ig;function is(){return ig||(ig=1,Bu.exports=_b()),Bu.exports}var v=is();const fa=Ey(v),Df=Ab({__proto__:null,default:fa},[v]);var Gu={exports:{}},Fl={},Vu={exports:{}},Fu={};var lg;function Ob(){return lg||(lg=1,(function(a){function i(D,q){var I=D.length;D.push(q);e:for(;0<I;){var se=I-1>>>1,he=D[se];if(0<s(he,q))D[se]=q,D[I]=he,I=se;else break e}}function r(D){return D.length===0?null:D[0]}function o(D){if(D.length===0)return null;var q=D[0],I=D.pop();if(I!==q){D[0]=I;e:for(var se=0,he=D.length,_=he>>>1;se<_;){var V=2*(se+1)-1,Q=D[V],W=V+1,de=D[W];if(0>s(Q,I))W<he&&0>s(de,Q)?(D[se]=de,D[W]=I,se=W):(D[se]=Q,D[V]=I,se=V);else if(W<he&&0>s(de,I))D[se]=de,D[W]=I,se=W;else break e}}return q}function s(D,q){var I=D.sortIndex-q.sortIndex;return I!==0?I:D.id-q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();a.unstable_now=function(){return d.now()-p}}var h=[],m=[],x=1,y=null,T=3,E=!1,w=!1,C=!1,A=!1,M=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;function U(D){for(var q=r(m);q!==null;){if(q.callback===null)o(m);else if(q.startTime<=D)o(m),q.sortIndex=q.expirationTime,i(h,q);else break;q=r(m)}}function G(D){if(C=!1,U(D),!w)if(r(h)!==null)w=!0,Z||(Z=!0,te());else{var q=r(m);q!==null&&ue(G,q.startTime-D)}}var Z=!1,B=-1,X=5,J=-1;function ee(){return A?!0:!(a.unstable_now()-J<X)}function ne(){if(A=!1,Z){var D=a.unstable_now();J=D;var q=!0;try{e:{w=!1,C&&(C=!1,N(B),B=-1),E=!0;var I=T;try{t:{for(U(D),y=r(h);y!==null&&!(y.expirationTime>D&&ee());){var se=y.callback;if(typeof se=="function"){y.callback=null,T=y.priorityLevel;var he=se(y.expirationTime<=D);if(D=a.unstable_now(),typeof he=="function"){y.callback=he,U(D),q=!0;break t}y===r(h)&&o(h),U(D)}else o(h);y=r(h)}if(y!==null)q=!0;else{var _=r(m);_!==null&&ue(G,_.startTime-D),q=!1}}break e}finally{y=null,T=I,E=!1}q=void 0}}finally{q?te():Z=!1}}}var te;if(typeof j=="function")te=function(){j(ne)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,re=oe.port2;oe.port1.onmessage=ne,te=function(){re.postMessage(null)}}else te=function(){M(ne,0)};function ue(D,q){B=M(function(){D(a.unstable_now())},q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(D){D.callback=null},a.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<D?Math.floor(1e3/D):5},a.unstable_getCurrentPriorityLevel=function(){return T},a.unstable_next=function(D){switch(T){case 1:case 2:case 3:var q=3;break;default:q=T}var I=T;T=q;try{return D()}finally{T=I}},a.unstable_requestPaint=function(){A=!0},a.unstable_runWithPriority=function(D,q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var I=T;T=D;try{return q()}finally{T=I}},a.unstable_scheduleCallback=function(D,q,I){var se=a.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?se+I:se):I=se,D){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=I+he,D={id:x++,callback:q,priorityLevel:D,startTime:I,expirationTime:he,sortIndex:-1},I>se?(D.sortIndex=I,i(m,D),r(h)===null&&D===r(m)&&(C?(N(B),B=-1):C=!0,ue(G,I-se))):(D.sortIndex=he,i(h,D),w||E||(w=!0,Z||(Z=!0,te()))),D},a.unstable_shouldYield=ee,a.unstable_wrapCallback=function(D){var q=T;return function(){var I=T;T=q;try{return D.apply(this,arguments)}finally{T=I}}}})(Fu)),Fu}var rg;function Nb(){return rg||(rg=1,Vu.exports=Ob()),Vu.exports}var qu={exports:{}},dt={};var og;function Mb(){if(og)return dt;og=1;var a=is();function i(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(h,m,x){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:y==null?null:""+y,children:h,containerInfo:m,implementation:x}}var d=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,dt.createPortal=function(h,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return u(h,m,null,x)},dt.flushSync=function(h){var m=d.T,x=o.p;try{if(d.T=null,o.p=2,h)return h()}finally{d.T=m,o.p=x,o.d.f()}},dt.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(h,m))},dt.prefetchDNS=function(h){typeof h=="string"&&o.d.D(h)},dt.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var x=m.as,y=p(x,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,E=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?o.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:T,fetchPriority:E}):x==="script"&&o.d.X(h,{crossOrigin:y,integrity:T,fetchPriority:E,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},dt.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=p(m.as,m.crossOrigin);o.d.M(h,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(h)},dt.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,y=p(x,m.crossOrigin);o.d.L(h,x,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},dt.preloadModule=function(h,m){if(typeof h=="string")if(m){var x=p(m.as,m.crossOrigin);o.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(h)},dt.requestFormReset=function(h){o.d.r(h)},dt.unstable_batchedUpdates=function(h,m){return h(m)},dt.useFormState=function(h,m,x){return d.H.useFormState(h,m,x)},dt.useFormStatus=function(){return d.H.useHostTransitionStatus()},dt.version="19.2.3",dt}var sg;function Ay(){if(sg)return qu.exports;sg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),qu.exports=Mb(),qu.exports}var cg;function Db(){if(cg)return Fl;cg=1;var a=Nb(),i=is(),r=Ay();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,l=t;;){var c=n.return;if(c===null)break;var f=c.alternate;if(f===null){if(l=c.return,l!==null){n=l;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===n)return h(c),e;if(f===l)return h(c),t;f=f.sibling}throw Error(o(188))}if(n.return!==l.return)n=c,l=f;else{for(var g=!1,b=c.child;b;){if(b===n){g=!0,n=c,l=f;break}if(b===l){g=!0,l=c,n=f;break}b=b.sibling}if(!g){for(b=f.child;b;){if(b===n){g=!0,n=f,l=c;break}if(b===l){g=!0,l=f,n=c;break}b=b.sibling}if(!g)throw Error(o(189))}}if(n.alternate!==l)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),j=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),ee=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Symbol.for("react.client.reference");function re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case M:return"Profiler";case A:return"StrictMode";case G:return"Suspense";case Z:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case j:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case U:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return t=e.displayName||null,t!==null?t:re(e.type)||"Memo";case X:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var ue=Array.isArray,D=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},se=[],he=-1;function _(e){return{current:e}}function V(e){0>he||(e.current=se[he],se[he]=null,he--)}function Q(e,t){he++,se[he]=e.current,e.current=t}var W=_(null),de=_(null),me=_(null),$=_(null);function Se(e,t){switch(Q(me,t),Q(de,e),Q(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Em(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Em(t),e=Am(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(W),Q(W,e)}function ve(){V(W),V(de),V(me)}function Ae(e){e.memoizedState!==null&&Q($,e);var t=W.current,n=Am(t,e.type);t!==n&&(Q(de,e),Q(W,n))}function Ne(e){de.current===e&&(V(W),V(de)),$.current===e&&(V($),Pl._currentValue=I)}var je,mt;function gt(e){if(je===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);je=t&&t[1]||"",mt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+je+e+mt}var xa=!1;function Sa(e,t){if(!e||xa)return"";xa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(P){var H=P}Reflect.construct(e,[],K)}else{try{K.call()}catch(P){H=P}e.call(K.prototype)}}else{try{throw Error()}catch(P){H=P}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(P){if(P&&H&&typeof P.stack=="string")return[P.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),g=f[0],b=f[1];if(g&&b){var R=g.split(`
`),k=b.split(`
`);for(c=l=0;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;for(;c<k.length&&!k[c].includes("DetermineComponentFrameRoot");)c++;if(l===R.length||c===k.length)for(l=R.length-1,c=k.length-1;1<=l&&0<=c&&R[l]!==k[c];)c--;for(;1<=l&&0<=c;l--,c--)if(R[l]!==k[c]){if(l!==1||c!==1)do if(l--,c--,0>c||R[l]!==k[c]){var F=`
`+R[l].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=l&&0<=c);break}}}finally{xa=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?gt(n):""}function $i(e,t){switch(e.tag){case 26:case 27:case 5:return gt(e.type);case 16:return gt("Lazy");case 13:return e.child!==t&&t!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return Sa(e.type,!1);case 11:return Sa(e.type.render,!1);case 1:return Sa(e.type,!0);case 31:return gt("Activity");default:return""}}function td(e){try{var t="",n=null;do t+=$i(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var As=Object.prototype.hasOwnProperty,ws=a.unstable_scheduleCallback,Rs=a.unstable_cancelCallback,ax=a.unstable_shouldYield,ix=a.unstable_requestPaint,At=a.unstable_now,lx=a.unstable_getCurrentPriorityLevel,nd=a.unstable_ImmediatePriority,ad=a.unstable_UserBlockingPriority,ur=a.unstable_NormalPriority,rx=a.unstable_LowPriority,id=a.unstable_IdlePriority,ox=a.log,sx=a.unstable_setDisableYieldValue,Zi=null,wt=null;function Pn(e){if(typeof ox=="function"&&sx(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(Zi,e)}catch{}}var Rt=Math.clz32?Math.clz32:fx,cx=Math.log,ux=Math.LN2;function fx(e){return e>>>=0,e===0?32:31-(cx(e)/ux|0)|0}var fr=256,dr=262144,pr=4194304;function ba(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hr(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var c=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~f,l!==0?c=ba(l):(g&=b,g!==0?c=ba(g):n||(n=b&~e,n!==0&&(c=ba(n))))):(b=l&~f,b!==0?c=ba(b):g!==0?c=ba(g):n||(n=l&~e,n!==0&&(c=ba(n)))),c===0?0:t!==0&&t!==c&&(t&f)===0&&(f=c&-c,n=t&-t,f>=n||f===32&&(n&4194048)!==0)?t:c}function Wi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function dx(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ld(){var e=pr;return pr<<=1,(pr&62914560)===0&&(pr=4194304),e}function _s(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ji(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function px(e,t,n,l,c,f){var g=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,R=e.expirationTimes,k=e.hiddenUpdates;for(n=g&~n;0<n;){var F=31-Rt(n),K=1<<F;b[F]=0,R[F]=-1;var H=k[F];if(H!==null)for(k[F]=null,F=0;F<H.length;F++){var P=H[F];P!==null&&(P.lane&=-536870913)}n&=~K}l!==0&&rd(e,l,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~t))}function rd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Rt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function od(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Rt(n),c=1<<l;c&t|e[l]&t&&(e[l]|=t),n&=~c}}function sd(e,t){var n=t&-t;return n=(n&42)!==0?1:Os(n),(n&(e.suspendedLanes|t))!==0?0:n}function Os(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ns(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function cd(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Xm(e.type))}function ud(e,t){var n=q.p;try{return q.p=e,t()}finally{q.p=n}}var Un=Math.random().toString(36).slice(2),ot="__reactFiber$"+Un,vt="__reactProps$"+Un,Ka="__reactContainer$"+Un,Ms="__reactEvents$"+Un,hx="__reactListeners$"+Un,mx="__reactHandles$"+Un,fd="__reactResources$"+Un,el="__reactMarker$"+Un;function Ds(e){delete e[ot],delete e[vt],delete e[Ms],delete e[hx],delete e[mx]}function Xa(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ka]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dm(e);e!==null;){if(n=e[ot])return n;e=Dm(e)}return t}e=n,n=e.parentNode}return null}function Qa(e){if(e=e[ot]||e[Ka]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function tl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function $a(e){var t=e[fd];return t||(t=e[fd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function lt(e){e[el]=!0}var dd=new Set,pd={};function Ca(e,t){Za(e,t),Za(e+"Capture",t)}function Za(e,t){for(pd[e]=t,e=0;e<t.length;e++)dd.add(t[e])}var gx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hd={},md={};function yx(e){return As.call(md,e)?!0:As.call(hd,e)?!1:gx.test(e)?md[e]=!0:(hd[e]=!0,!1)}function mr(e,t,n){if(yx(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function gr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function yn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function It(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vx(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var c=l.get,f=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(g){n=""+g,f.call(this,g)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(g){n=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ls(e){if(!e._valueTracker){var t=gd(e)?"checked":"value";e._valueTracker=vx(e,t,""+e[t])}}function yd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=gd(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function yr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xx=/[\n"\\]/g;function Pt(e){return e.replace(xx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function js(e,t,n,l,c,f,g,b){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+It(t)):e.value!==""+It(t)&&(e.value=""+It(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?zs(e,g,It(t)):n!=null?zs(e,g,It(n)):l!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+It(b):e.removeAttribute("name")}function vd(e,t,n,l,c,f,g,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||n!=null){if(!(f!=="submit"&&f!=="reset"||t!=null)){Ls(e);return}n=n!=null?""+It(n):"",t=t!=null?""+It(t):n,b||t===e.value||(e.value=t),e.defaultValue=t}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Ls(e)}function zs(e,t,n){t==="number"&&yr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Wa(e,t,n,l){if(e=e.options,t){t={};for(var c=0;c<n.length;c++)t["$"+n[c]]=!0;for(n=0;n<e.length;n++)c=t.hasOwnProperty("$"+e[n].value),e[n].selected!==c&&(e[n].selected=c),c&&l&&(e[n].defaultSelected=!0)}else{for(n=""+It(n),t=null,c=0;c<e.length;c++){if(e[c].value===n){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function xd(e,t,n){if(t!=null&&(t=""+It(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+It(n):""}function Sd(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(o(92));if(ue(l)){if(1<l.length)throw Error(o(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=It(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Ls(e)}function Ja(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bd(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||Sx.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Cd(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var c in t)l=t[c],t.hasOwnProperty(c)&&n[c]!==l&&bd(e,c,l)}else for(var f in t)t.hasOwnProperty(f)&&bd(e,f,t[f])}function ks(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vr(e){return Cx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function vn(){}var Hs=null;function Is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ei=null,ti=null;function Td(e){var t=Qa(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;e:switch(e=t.stateNode,t.type){case"input":if(js(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Pt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var c=l[vt]||null;if(!c)throw Error(o(90));js(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&yd(l)}break e;case"textarea":xd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Wa(e,!!n.multiple,t,!1)}}}var Ps=!1;function Ed(e,t,n){if(Ps)return e(t,n);Ps=!0;try{var l=e(t);return l}finally{if(Ps=!1,(ei!==null||ti!==null)&&(lo(),ei&&(t=ei,e=ti,ti=ei=null,Td(t),e)))for(t=0;t<e.length;t++)Td(e[t])}}function nl(e,t){var n=e.stateNode;if(n===null)return null;var l=n[vt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Us=!1;if(xn)try{var al={};Object.defineProperty(al,"passive",{get:function(){Us=!0}}),window.addEventListener("test",al,al),window.removeEventListener("test",al,al)}catch{Us=!1}var Bn=null,Bs=null,xr=null;function Ad(){if(xr)return xr;var e,t=Bs,n=t.length,l,c="value"in Bn?Bn.value:Bn.textContent,f=c.length;for(e=0;e<n&&t[e]===c[e];e++);var g=n-e;for(l=1;l<=g&&t[n-l]===c[f-l];l++);return xr=c.slice(e,1<l?1-l:void 0)}function Sr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function wd(){return!1}function xt(e){function t(n,l,c,f,g){this._reactName=n,this._targetInst=c,this.type=l,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?br:wd,this.isPropagationStopped=wd,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),t}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cr=xt(Ta),il=y({},Ta,{view:0,detail:0}),Tx=xt(il),Gs,Vs,ll,Tr=y({},il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ll&&(ll&&e.type==="mousemove"?(Gs=e.screenX-ll.screenX,Vs=e.screenY-ll.screenY):Vs=Gs=0,ll=e),Gs)},movementY:function(e){return"movementY"in e?e.movementY:Vs}}),Rd=xt(Tr),Ex=y({},Tr,{dataTransfer:0}),Ax=xt(Ex),wx=y({},il,{relatedTarget:0}),Fs=xt(wx),Rx=y({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),_x=xt(Rx),Ox=y({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nx=xt(Ox),Mx=y({},Ta,{data:0}),_d=xt(Mx),Dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jx[e])?!!t[e]:!1}function qs(){return zx}var kx=y({},il,{key:function(e){if(e.key){var t=Dx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qs,charCode:function(e){return e.type==="keypress"?Sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hx=xt(kx),Ix=y({},Tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Od=xt(Ix),Px=y({},il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qs}),Ux=xt(Px),Bx=y({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gx=xt(Bx),Vx=y({},Tr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fx=xt(Vx),qx=y({},Ta,{newState:0,oldState:0}),Yx=xt(qx),Kx=[9,13,27,32],Ys=xn&&"CompositionEvent"in window,rl=null;xn&&"documentMode"in document&&(rl=document.documentMode);var Xx=xn&&"TextEvent"in window&&!rl,Nd=xn&&(!Ys||rl&&8<rl&&11>=rl),Md=" ",Dd=!1;function Ld(e,t){switch(e){case"keyup":return Kx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ni=!1;function Qx(e,t){switch(e){case"compositionend":return jd(t);case"keypress":return t.which!==32?null:(Dd=!0,Md);case"textInput":return e=t.data,e===Md&&Dd?null:e;default:return null}}function $x(e,t){if(ni)return e==="compositionend"||!Ys&&Ld(e,t)?(e=Ad(),xr=Bs=Bn=null,ni=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nd&&t.locale!=="ko"?null:t.data;default:return null}}var Zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zx[e.type]:t==="textarea"}function kd(e,t,n,l){ei?ti?ti.push(l):ti=[l]:ei=l,t=po(t,"onChange"),0<t.length&&(n=new Cr("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var ol=null,sl=null;function Wx(e){vm(e,0)}function Er(e){var t=tl(e);if(yd(t))return e}function Hd(e,t){if(e==="change")return t}var Id=!1;if(xn){var Ks;if(xn){var Xs="oninput"in document;if(!Xs){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),Xs=typeof Pd.oninput=="function"}Ks=Xs}else Ks=!1;Id=Ks&&(!document.documentMode||9<document.documentMode)}function Ud(){ol&&(ol.detachEvent("onpropertychange",Bd),sl=ol=null)}function Bd(e){if(e.propertyName==="value"&&Er(sl)){var t=[];kd(t,sl,e,Is(e)),Ed(Wx,t)}}function Jx(e,t,n){e==="focusin"?(Ud(),ol=t,sl=n,ol.attachEvent("onpropertychange",Bd)):e==="focusout"&&Ud()}function eS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Er(sl)}function tS(e,t){if(e==="click")return Er(t)}function nS(e,t){if(e==="input"||e==="change")return Er(t)}function aS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:aS;function cl(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var c=n[l];if(!As.call(t,c)||!_t(e[c],t[c]))return!1}return!0}function Gd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vd(e,t){var n=Gd(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gd(n)}}function Fd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=yr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yr(e.document)}return t}function Qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var iS=xn&&"documentMode"in document&&11>=document.documentMode,ai=null,$s=null,ul=null,Zs=!1;function Yd(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zs||ai==null||ai!==yr(l)||(l=ai,"selectionStart"in l&&Qs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ul&&cl(ul,l)||(ul=l,l=po($s,"onSelect"),0<l.length&&(t=new Cr("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=ai)))}function Ea(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ii={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionrun:Ea("Transition","TransitionRun"),transitionstart:Ea("Transition","TransitionStart"),transitioncancel:Ea("Transition","TransitionCancel"),transitionend:Ea("Transition","TransitionEnd")},Ws={},Kd={};xn&&(Kd=document.createElement("div").style,"AnimationEvent"in window||(delete ii.animationend.animation,delete ii.animationiteration.animation,delete ii.animationstart.animation),"TransitionEvent"in window||delete ii.transitionend.transition);function Aa(e){if(Ws[e])return Ws[e];if(!ii[e])return e;var t=ii[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kd)return Ws[e]=t[n];return e}var Xd=Aa("animationend"),Qd=Aa("animationiteration"),$d=Aa("animationstart"),lS=Aa("transitionrun"),rS=Aa("transitionstart"),oS=Aa("transitioncancel"),Zd=Aa("transitionend"),Wd=new Map,Js="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Js.push("scrollEnd");function $t(e,t){Wd.set(e,t),Ca(t,[e])}var Ar=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ut=[],li=0,ec=0;function wr(){for(var e=li,t=ec=li=0;t<e;){var n=Ut[t];Ut[t++]=null;var l=Ut[t];Ut[t++]=null;var c=Ut[t];Ut[t++]=null;var f=Ut[t];if(Ut[t++]=null,l!==null&&c!==null){var g=l.pending;g===null?c.next=c:(c.next=g.next,g.next=c),l.pending=c}f!==0&&Jd(n,c,f)}}function Rr(e,t,n,l){Ut[li++]=e,Ut[li++]=t,Ut[li++]=n,Ut[li++]=l,ec|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function tc(e,t,n,l){return Rr(e,t,n,l),_r(e)}function wa(e,t){return Rr(e,null,null,t),_r(e)}function Jd(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var c=!1,f=e.return;f!==null;)f.childLanes|=n,l=f.alternate,l!==null&&(l.childLanes|=n),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&t!==null&&(c=31-Rt(n),e=f.hiddenUpdates,l=e[c],l===null?e[c]=[t]:l.push(t),t.lane=n|536870912),f):null}function _r(e){if(50<Dl)throw Dl=0,uu=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ri={};function sS(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(e,t,n,l){return new sS(e,t,n,l)}function nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sn(e,t){var n=e.alternate;return n===null?(n=Ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ep(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Or(e,t,n,l,c,f){var g=0;if(l=e,typeof e=="function")nc(e)&&(g=1);else if(typeof e=="string")g=pb(e,n,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case J:return e=Ot(31,n,t,c),e.elementType=J,e.lanes=f,e;case C:return Ra(n.children,c,f,t);case A:g=8,c|=24;break;case M:return e=Ot(12,n,t,c|2),e.elementType=M,e.lanes=f,e;case G:return e=Ot(13,n,t,c),e.elementType=G,e.lanes=f,e;case Z:return e=Ot(19,n,t,c),e.elementType=Z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case j:g=10;break e;case N:g=9;break e;case U:g=11;break e;case B:g=14;break e;case X:g=16,l=null;break e}g=29,n=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=Ot(g,n,t,c),t.elementType=e,t.type=l,t.lanes=f,t}function Ra(e,t,n,l){return e=Ot(7,e,l,t),e.lanes=n,e}function ac(e,t,n){return e=Ot(6,e,null,t),e.lanes=n,e}function tp(e){var t=Ot(18,null,null,0);return t.stateNode=e,t}function ic(e,t,n){return t=Ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var np=new WeakMap;function Bt(e,t){if(typeof e=="object"&&e!==null){var n=np.get(e);return n!==void 0?n:(t={value:e,source:t,stack:td(t)},np.set(e,t),t)}return{value:e,source:t,stack:td(t)}}var oi=[],si=0,Nr=null,fl=0,Gt=[],Vt=0,Gn=null,ln=1,rn="";function bn(e,t){oi[si++]=fl,oi[si++]=Nr,Nr=e,fl=t}function ap(e,t,n){Gt[Vt++]=ln,Gt[Vt++]=rn,Gt[Vt++]=Gn,Gn=e;var l=ln;e=rn;var c=32-Rt(l)-1;l&=~(1<<c),n+=1;var f=32-Rt(t)+c;if(30<f){var g=c-c%5;f=(l&(1<<g)-1).toString(32),l>>=g,c-=g,ln=1<<32-Rt(t)+c|n<<c|l,rn=f+e}else ln=1<<f|n<<c|l,rn=e}function lc(e){e.return!==null&&(bn(e,1),ap(e,1,0))}function rc(e){for(;e===Nr;)Nr=oi[--si],oi[si]=null,fl=oi[--si],oi[si]=null;for(;e===Gn;)Gn=Gt[--Vt],Gt[Vt]=null,rn=Gt[--Vt],Gt[Vt]=null,ln=Gt[--Vt],Gt[Vt]=null}function ip(e,t){Gt[Vt++]=ln,Gt[Vt++]=rn,Gt[Vt++]=Gn,ln=t.id,rn=t.overflow,Gn=e}var st=null,Ge=null,_e=!1,Vn=null,Ft=!1,oc=Error(o(519));function Fn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw dl(Bt(t,e)),oc}function lp(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[ot]=e,t[vt]=l,n){case"dialog":Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":case"embed":Ee("load",t);break;case"video":case"audio":for(n=0;n<jl.length;n++)Ee(jl[n],t);break;case"source":Ee("error",t);break;case"img":case"image":case"link":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"input":Ee("invalid",t),vd(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ee("invalid",t);break;case"textarea":Ee("invalid",t),Sd(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Cm(t.textContent,n)?(l.popover!=null&&(Ee("beforetoggle",t),Ee("toggle",t)),l.onScroll!=null&&Ee("scroll",t),l.onScrollEnd!=null&&Ee("scrollend",t),l.onClick!=null&&(t.onclick=vn),t=!0):t=!1,t||Fn(e,!0)}function rp(e){for(st=e.return;st;)switch(st.tag){case 5:case 31:case 13:Ft=!1;return;case 27:case 3:Ft=!0;return;default:st=st.return}}function ci(e){if(e!==st)return!1;if(!_e)return rp(e),_e=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Au(e.type,e.memoizedProps)),n=!n),n&&Ge&&Fn(e),rp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ge=Mm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));Ge=Mm(e)}else t===27?(t=Ge,ia(e.type)?(e=Nu,Nu=null,Ge=e):Ge=t):Ge=st?Yt(e.stateNode.nextSibling):null;return!0}function _a(){Ge=st=null,_e=!1}function sc(){var e=Vn;return e!==null&&(Tt===null?Tt=e:Tt.push.apply(Tt,e),Vn=null),e}function dl(e){Vn===null?Vn=[e]:Vn.push(e)}var cc=_(null),Oa=null,Cn=null;function qn(e,t,n){Q(cc,t._currentValue),t._currentValue=n}function Tn(e){e._currentValue=cc.current,V(cc)}function uc(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function fc(e,t,n,l){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;e:for(;f!==null;){var b=f;f=c;for(var R=0;R<t.length;R++)if(b.context===t[R]){f.lanes|=n,b=f.alternate,b!==null&&(b.lanes|=n),uc(f.return,n,e),l||(g=null);break e}f=b.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(o(341));g.lanes|=n,f=g.alternate,f!==null&&(f.lanes|=n),uc(g,n,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function ui(e,t,n,l){e=null;for(var c=t,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(o(387));if(g=g.memoizedProps,g!==null){var b=c.type;_t(c.pendingProps.value,g.value)||(e!==null?e.push(b):e=[b])}}else if(c===$.current){if(g=c.alternate,g===null)throw Error(o(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Pl):e=[Pl])}c=c.return}e!==null&&fc(t,e,n,l),t.flags|=262144}function Mr(e){for(e=e.firstContext;e!==null;){if(!_t(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Na(e){Oa=e,Cn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ct(e){return op(Oa,e)}function Dr(e,t){return Oa===null&&Na(e),op(e,t)}function op(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Cn===null){if(e===null)throw Error(o(308));Cn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Cn=Cn.next=t;return n}var cS=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},uS=a.unstable_scheduleCallback,fS=a.unstable_NormalPriority,We={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function dc(){return{controller:new cS,data:new Map,refCount:0}}function pl(e){e.refCount--,e.refCount===0&&uS(fS,function(){e.controller.abort()})}var hl=null,pc=0,fi=0,di=null;function dS(e,t){if(hl===null){var n=hl=[];pc=0,fi=gu(),di={status:"pending",value:void 0,then:function(l){n.push(l)}}}return pc++,t.then(sp,sp),t}function sp(){if(--pc===0&&hl!==null){di!==null&&(di.status="fulfilled");var e=hl;hl=null,fi=0,di=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function pS(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var c=0;c<n.length;c++)(0,n[c])(t)},function(c){for(l.status="rejected",l.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),l}var cp=D.S;D.S=function(e,t){Yh=At(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&dS(e,t),cp!==null&&cp(e,t)};var Ma=_(null);function hc(){var e=Ma.current;return e!==null?e:Ue.pooledCache}function Lr(e,t){t===null?Q(Ma,Ma.current):Q(Ma,t.pool)}function up(){var e=hc();return e===null?null:{parent:We._currentValue,pool:e}}var pi=Error(o(460)),mc=Error(o(474)),jr=Error(o(542)),zr={then:function(){}};function fp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function dp(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(vn,vn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hp(e),e;default:if(typeof t.status=="string")t.then(vn,vn);else{if(e=Ue,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=l}},function(l){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,hp(e),e}throw La=t,pi}}function Da(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(La=n,pi):n}}var La=null;function pp(){if(La===null)throw Error(o(459));var e=La;return La=null,e}function hp(e){if(e===pi||e===jr)throw Error(o(483))}var hi=null,ml=0;function kr(e){var t=ml;return ml+=1,hi===null&&(hi=[]),dp(hi,e,t)}function gl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Hr(e,t){throw t.$$typeof===T?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function mp(e){function t(L,O){if(e){var z=L.deletions;z===null?(L.deletions=[O],L.flags|=16):z.push(O)}}function n(L,O){if(!e)return null;for(;O!==null;)t(L,O),O=O.sibling;return null}function l(L){for(var O=new Map;L!==null;)L.key!==null?O.set(L.key,L):O.set(L.index,L),L=L.sibling;return O}function c(L,O){return L=Sn(L,O),L.index=0,L.sibling=null,L}function f(L,O,z){return L.index=z,e?(z=L.alternate,z!==null?(z=z.index,z<O?(L.flags|=67108866,O):z):(L.flags|=67108866,O)):(L.flags|=1048576,O)}function g(L){return e&&L.alternate===null&&(L.flags|=67108866),L}function b(L,O,z,Y){return O===null||O.tag!==6?(O=ac(z,L.mode,Y),O.return=L,O):(O=c(O,z),O.return=L,O)}function R(L,O,z,Y){var fe=z.type;return fe===C?F(L,O,z.props.children,Y,z.key):O!==null&&(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===X&&Da(fe)===O.type)?(O=c(O,z.props),gl(O,z),O.return=L,O):(O=Or(z.type,z.key,z.props,null,L.mode,Y),gl(O,z),O.return=L,O)}function k(L,O,z,Y){return O===null||O.tag!==4||O.stateNode.containerInfo!==z.containerInfo||O.stateNode.implementation!==z.implementation?(O=ic(z,L.mode,Y),O.return=L,O):(O=c(O,z.children||[]),O.return=L,O)}function F(L,O,z,Y,fe){return O===null||O.tag!==7?(O=Ra(z,L.mode,Y,fe),O.return=L,O):(O=c(O,z),O.return=L,O)}function K(L,O,z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=ac(""+O,L.mode,z),O.return=L,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case E:return z=Or(O.type,O.key,O.props,null,L.mode,z),gl(z,O),z.return=L,z;case w:return O=ic(O,L.mode,z),O.return=L,O;case X:return O=Da(O),K(L,O,z)}if(ue(O)||te(O))return O=Ra(O,L.mode,z,null),O.return=L,O;if(typeof O.then=="function")return K(L,kr(O),z);if(O.$$typeof===j)return K(L,Dr(L,O),z);Hr(L,O)}return null}function H(L,O,z,Y){var fe=O!==null?O.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return fe!==null?null:b(L,O,""+z,Y);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case E:return z.key===fe?R(L,O,z,Y):null;case w:return z.key===fe?k(L,O,z,Y):null;case X:return z=Da(z),H(L,O,z,Y)}if(ue(z)||te(z))return fe!==null?null:F(L,O,z,Y,null);if(typeof z.then=="function")return H(L,O,kr(z),Y);if(z.$$typeof===j)return H(L,O,Dr(L,z),Y);Hr(L,z)}return null}function P(L,O,z,Y,fe){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return L=L.get(z)||null,b(O,L,""+Y,fe);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case E:return L=L.get(Y.key===null?z:Y.key)||null,R(O,L,Y,fe);case w:return L=L.get(Y.key===null?z:Y.key)||null,k(O,L,Y,fe);case X:return Y=Da(Y),P(L,O,z,Y,fe)}if(ue(Y)||te(Y))return L=L.get(z)||null,F(O,L,Y,fe,null);if(typeof Y.then=="function")return P(L,O,z,kr(Y),fe);if(Y.$$typeof===j)return P(L,O,z,Dr(O,Y),fe);Hr(O,Y)}return null}function ae(L,O,z,Y){for(var fe=null,Me=null,ce=O,be=O=0,Re=null;ce!==null&&be<z.length;be++){ce.index>be?(Re=ce,ce=null):Re=ce.sibling;var De=H(L,ce,z[be],Y);if(De===null){ce===null&&(ce=Re);break}e&&ce&&De.alternate===null&&t(L,ce),O=f(De,O,be),Me===null?fe=De:Me.sibling=De,Me=De,ce=Re}if(be===z.length)return n(L,ce),_e&&bn(L,be),fe;if(ce===null){for(;be<z.length;be++)ce=K(L,z[be],Y),ce!==null&&(O=f(ce,O,be),Me===null?fe=ce:Me.sibling=ce,Me=ce);return _e&&bn(L,be),fe}for(ce=l(ce);be<z.length;be++)Re=P(ce,L,be,z[be],Y),Re!==null&&(e&&Re.alternate!==null&&ce.delete(Re.key===null?be:Re.key),O=f(Re,O,be),Me===null?fe=Re:Me.sibling=Re,Me=Re);return e&&ce.forEach(function(ca){return t(L,ca)}),_e&&bn(L,be),fe}function pe(L,O,z,Y){if(z==null)throw Error(o(151));for(var fe=null,Me=null,ce=O,be=O=0,Re=null,De=z.next();ce!==null&&!De.done;be++,De=z.next()){ce.index>be?(Re=ce,ce=null):Re=ce.sibling;var ca=H(L,ce,De.value,Y);if(ca===null){ce===null&&(ce=Re);break}e&&ce&&ca.alternate===null&&t(L,ce),O=f(ca,O,be),Me===null?fe=ca:Me.sibling=ca,Me=ca,ce=Re}if(De.done)return n(L,ce),_e&&bn(L,be),fe;if(ce===null){for(;!De.done;be++,De=z.next())De=K(L,De.value,Y),De!==null&&(O=f(De,O,be),Me===null?fe=De:Me.sibling=De,Me=De);return _e&&bn(L,be),fe}for(ce=l(ce);!De.done;be++,De=z.next())De=P(ce,L,be,De.value,Y),De!==null&&(e&&De.alternate!==null&&ce.delete(De.key===null?be:De.key),O=f(De,O,be),Me===null?fe=De:Me.sibling=De,Me=De);return e&&ce.forEach(function(Eb){return t(L,Eb)}),_e&&bn(L,be),fe}function Pe(L,O,z,Y){if(typeof z=="object"&&z!==null&&z.type===C&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case E:e:{for(var fe=z.key;O!==null;){if(O.key===fe){if(fe=z.type,fe===C){if(O.tag===7){n(L,O.sibling),Y=c(O,z.props.children),Y.return=L,L=Y;break e}}else if(O.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===X&&Da(fe)===O.type){n(L,O.sibling),Y=c(O,z.props),gl(Y,z),Y.return=L,L=Y;break e}n(L,O);break}else t(L,O);O=O.sibling}z.type===C?(Y=Ra(z.props.children,L.mode,Y,z.key),Y.return=L,L=Y):(Y=Or(z.type,z.key,z.props,null,L.mode,Y),gl(Y,z),Y.return=L,L=Y)}return g(L);case w:e:{for(fe=z.key;O!==null;){if(O.key===fe)if(O.tag===4&&O.stateNode.containerInfo===z.containerInfo&&O.stateNode.implementation===z.implementation){n(L,O.sibling),Y=c(O,z.children||[]),Y.return=L,L=Y;break e}else{n(L,O);break}else t(L,O);O=O.sibling}Y=ic(z,L.mode,Y),Y.return=L,L=Y}return g(L);case X:return z=Da(z),Pe(L,O,z,Y)}if(ue(z))return ae(L,O,z,Y);if(te(z)){if(fe=te(z),typeof fe!="function")throw Error(o(150));return z=fe.call(z),pe(L,O,z,Y)}if(typeof z.then=="function")return Pe(L,O,kr(z),Y);if(z.$$typeof===j)return Pe(L,O,Dr(L,z),Y);Hr(L,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,O!==null&&O.tag===6?(n(L,O.sibling),Y=c(O,z),Y.return=L,L=Y):(n(L,O),Y=ac(z,L.mode,Y),Y.return=L,L=Y),g(L)):n(L,O)}return function(L,O,z,Y){try{ml=0;var fe=Pe(L,O,z,Y);return hi=null,fe}catch(ce){if(ce===pi||ce===jr)throw ce;var Me=Ot(29,ce,null,L.mode);return Me.lanes=Y,Me.return=L,Me}}}var ja=mp(!0),gp=mp(!1),Yn=!1;function gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Kn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Le&2)!==0){var c=l.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),l.pending=t,t=_r(e),Jd(e,null,n),t}return Rr(e,l,t,n),_r(e)}function yl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,od(e,n)}}function vc(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var c=null,f=null;if(n=n.firstBaseUpdate,n!==null){do{var g={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,n=n.next}while(n!==null);f===null?c=f=t:f=f.next=t}else c=f=t;n={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var xc=!1;function vl(){if(xc){var e=di;if(e!==null)throw e}}function xl(e,t,n,l){xc=!1;var c=e.updateQueue;Yn=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var R=b,k=R.next;R.next=null,g===null?f=k:g.next=k,g=R;var F=e.alternate;F!==null&&(F=F.updateQueue,b=F.lastBaseUpdate,b!==g&&(b===null?F.firstBaseUpdate=k:b.next=k,F.lastBaseUpdate=R))}if(f!==null){var K=c.baseState;g=0,F=k=R=null,b=f;do{var H=b.lane&-536870913,P=H!==b.lane;if(P?(we&H)===H:(l&H)===H){H!==0&&H===fi&&(xc=!0),F!==null&&(F=F.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ae=e,pe=b;H=t;var Pe=n;switch(pe.tag){case 1:if(ae=pe.payload,typeof ae=="function"){K=ae.call(Pe,K,H);break e}K=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=pe.payload,H=typeof ae=="function"?ae.call(Pe,K,H):ae,H==null)break e;K=y({},K,H);break e;case 2:Yn=!0}}H=b.callback,H!==null&&(e.flags|=64,P&&(e.flags|=8192),P=c.callbacks,P===null?c.callbacks=[H]:P.push(H))}else P={lane:H,tag:b.tag,payload:b.payload,callback:b.callback,next:null},F===null?(k=F=P,R=K):F=F.next=P,g|=H;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;P=b,b=P.next,P.next=null,c.lastBaseUpdate=P,c.shared.pending=null}}while(!0);F===null&&(R=K),c.baseState=R,c.firstBaseUpdate=k,c.lastBaseUpdate=F,f===null&&(c.shared.lanes=0),Jn|=g,e.lanes=g,e.memoizedState=K}}function yp(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function vp(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)yp(n[e],t)}var mi=_(null),Ir=_(0);function xp(e,t){e=Dn,Q(Ir,e),Q(mi,t),Dn=e|t.baseLanes}function Sc(){Q(Ir,Dn),Q(mi,mi.current)}function bc(){Dn=Ir.current,V(mi),V(Ir)}var Nt=_(null),qt=null;function Qn(e){var t=e.alternate;Q(Qe,Qe.current&1),Q(Nt,e),qt===null&&(t===null||mi.current!==null||t.memoizedState!==null)&&(qt=e)}function Cc(e){Q(Qe,Qe.current),Q(Nt,e),qt===null&&(qt=e)}function Sp(e){e.tag===22?(Q(Qe,Qe.current),Q(Nt,e),qt===null&&(qt=e)):$n()}function $n(){Q(Qe,Qe.current),Q(Nt,Nt.current)}function Mt(e){V(Nt),qt===e&&(qt=null),V(Qe)}var Qe=_(0);function Pr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||_u(n)||Ou(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var En=0,xe=null,He=null,Je=null,Ur=!1,gi=!1,za=!1,Br=0,Sl=0,yi=null,hS=0;function Ye(){throw Error(o(321))}function Tc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function Ec(e,t,n,l,c,f){return En=f,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?ah:Pc,za=!1,f=n(l,c),za=!1,gi&&(f=Cp(t,n,l,c)),bp(e),f}function bp(e){D.H=Tl;var t=He!==null&&He.next!==null;if(En=0,Je=He=xe=null,Ur=!1,Sl=0,yi=null,t)throw Error(o(300));e===null||et||(e=e.dependencies,e!==null&&Mr(e)&&(et=!0))}function Cp(e,t,n,l){xe=e;var c=0;do{if(gi&&(yi=null),Sl=0,gi=!1,25<=c)throw Error(o(301));if(c+=1,Je=He=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}D.H=ih,f=t(n,l)}while(gi);return f}function mS(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?bl(t):t,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(xe.flags|=1024),t}function Ac(){var e=Br!==0;return Br=0,e}function wc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Rc(e){if(Ur){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ur=!1}En=0,Je=He=xe=null,gi=!1,Sl=Br=0,yi=null}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?xe.memoizedState=Je=e:Je=Je.next=e,Je}function $e(){if(He===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=Je===null?xe.memoizedState:Je.next;if(t!==null)Je=t,He=e;else{if(e===null)throw xe.alternate===null?Error(o(467)):Error(o(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Je===null?xe.memoizedState=Je=e:Je=Je.next=e}return Je}function Gr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bl(e){var t=Sl;return Sl+=1,yi===null&&(yi=[]),e=dp(yi,e,t),t=xe,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?ah:Pc),e}function Vr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bl(e);if(e.$$typeof===j)return ct(e)}throw Error(o(438,String(e)))}function _c(e){var t=null,n=xe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=xe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Gr(),xe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=ee;return t.index++,n}function An(e,t){return typeof t=="function"?t(e):t}function Fr(e){var t=$e();return Oc(t,He,e)}function Oc(e,t,n){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=n;var c=e.baseQueue,f=l.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}t.baseQueue=c=f,l.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{t=c.next;var b=g=null,R=null,k=t,F=!1;do{var K=k.lane&-536870913;if(K!==k.lane?(we&K)===K:(En&K)===K){var H=k.revertLane;if(H===0)R!==null&&(R=R.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),K===fi&&(F=!0);else if((En&H)===H){k=k.next,H===fi&&(F=!0);continue}else K={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},R===null?(b=R=K,g=f):R=R.next=K,xe.lanes|=H,Jn|=H;K=k.action,za&&n(f,K),f=k.hasEagerState?k.eagerState:n(f,K)}else H={lane:K,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},R===null?(b=R=H,g=f):R=R.next=H,xe.lanes|=K,Jn|=K;k=k.next}while(k!==null&&k!==t);if(R===null?g=f:R.next=b,!_t(f,e.memoizedState)&&(et=!0,F&&(n=di,n!==null)))throw n;e.memoizedState=f,e.baseState=g,e.baseQueue=R,l.lastRenderedState=f}return c===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Nc(e){var t=$e(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var l=n.dispatch,c=n.pending,f=t.memoizedState;if(c!==null){n.pending=null;var g=c=c.next;do f=e(f,g.action),g=g.next;while(g!==c);_t(f,t.memoizedState)||(et=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),n.lastRenderedState=f}return[f,l]}function Tp(e,t,n){var l=xe,c=$e(),f=_e;if(f){if(n===void 0)throw Error(o(407));n=n()}else n=t();var g=!_t((He||c).memoizedState,n);if(g&&(c.memoizedState=n,et=!0),c=c.queue,Lc(wp.bind(null,l,c,e),[e]),c.getSnapshot!==t||g||Je!==null&&Je.memoizedState.tag&1){if(l.flags|=2048,vi(9,{destroy:void 0},Ap.bind(null,l,c,n,t),null),Ue===null)throw Error(o(349));f||(En&127)!==0||Ep(l,t,n)}return n}function Ep(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t=Gr(),xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ap(e,t,n,l){t.value=n,t.getSnapshot=l,Rp(t)&&_p(e)}function wp(e,t,n){return n(function(){Rp(t)&&_p(e)})}function Rp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function _p(e){var t=wa(e,2);t!==null&&Et(t,e,2)}function Mc(e){var t=yt();if(typeof e=="function"){var n=e;if(e=n(),za){Pn(!0);try{n()}finally{Pn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function Op(e,t,n,l){return e.baseState=n,Oc(e,He,typeof l=="function"?l:An)}function gS(e,t,n,l,c){if(Kr(e))throw Error(o(485));if(e=t.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};D.T!==null?n(!0):f.isTransition=!1,l(f),n=t.pending,n===null?(f.next=t.pending=f,Np(t,f)):(f.next=n.next,t.pending=n.next=f)}}function Np(e,t){var n=t.action,l=t.payload,c=e.state;if(t.isTransition){var f=D.T,g={};D.T=g;try{var b=n(c,l),R=D.S;R!==null&&R(g,b),Mp(e,t,b)}catch(k){Dc(e,t,k)}finally{f!==null&&g.types!==null&&(f.types=g.types),D.T=f}}else try{f=n(c,l),Mp(e,t,f)}catch(k){Dc(e,t,k)}}function Mp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Dp(e,t,l)},function(l){return Dc(e,t,l)}):Dp(e,t,n)}function Dp(e,t,n){t.status="fulfilled",t.value=n,Lp(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Np(e,n)))}function Dc(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Lp(t),t=t.next;while(t!==l)}e.action=null}function Lp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function jp(e,t){return t}function zp(e,t){if(_e){var n=Ue.formState;if(n!==null){e:{var l=xe;if(_e){if(Ge){t:{for(var c=Ge,f=Ft;c.nodeType!==8;){if(!f){c=null;break t}if(c=Yt(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ge=Yt(c.nextSibling),l=c.data==="F!";break e}}Fn(l)}l=!1}l&&(t=n[0])}}return n=yt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jp,lastRenderedState:t},n.queue=l,n=eh.bind(null,xe,l),l.dispatch=n,l=Mc(!1),f=Ic.bind(null,xe,!1,l.queue),l=yt(),c={state:t,dispatch:null,action:e,pending:null},l.queue=c,n=gS.bind(null,xe,c,f,n),c.dispatch=n,l.memoizedState=e,[t,n,!1]}function kp(e){var t=$e();return Hp(t,He,e)}function Hp(e,t,n){if(t=Oc(e,t,jp)[0],e=Fr(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=bl(t)}catch(g){throw g===pi?jr:g}else l=t;t=$e();var c=t.queue,f=c.dispatch;return n!==t.memoizedState&&(xe.flags|=2048,vi(9,{destroy:void 0},yS.bind(null,c,n),null)),[l,f,e]}function yS(e,t){e.action=t}function Ip(e){var t=$e(),n=He;if(n!==null)return Hp(t,n,e);$e(),t=t.memoizedState,n=$e();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function vi(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=xe.updateQueue,t===null&&(t=Gr(),xe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function Pp(){return $e().memoizedState}function qr(e,t,n,l){var c=yt();xe.flags|=e,c.memoizedState=vi(1|t,{destroy:void 0},n,l===void 0?null:l)}function Yr(e,t,n,l){var c=$e();l=l===void 0?null:l;var f=c.memoizedState.inst;He!==null&&l!==null&&Tc(l,He.memoizedState.deps)?c.memoizedState=vi(t,f,n,l):(xe.flags|=e,c.memoizedState=vi(1|t,f,n,l))}function Up(e,t){qr(8390656,8,e,t)}function Lc(e,t){Yr(2048,8,e,t)}function vS(e){xe.flags|=4;var t=xe.updateQueue;if(t===null)t=Gr(),xe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Bp(e){var t=$e().memoizedState;return vS({ref:t,nextImpl:e}),function(){if((Le&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Gp(e,t){return Yr(4,2,e,t)}function Vp(e,t){return Yr(4,4,e,t)}function Fp(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function qp(e,t,n){n=n!=null?n.concat([e]):null,Yr(4,4,Fp.bind(null,t,e),n)}function jc(){}function Yp(e,t){var n=$e();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Tc(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Kp(e,t){var n=$e();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Tc(t,l[1]))return l[0];if(l=e(),za){Pn(!0);try{e()}finally{Pn(!1)}}return n.memoizedState=[l,t],l}function zc(e,t,n){return n===void 0||(En&1073741824)!==0&&(we&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Xh(),xe.lanes|=e,Jn|=e,n)}function Xp(e,t,n,l){return _t(n,t)?n:mi.current!==null?(e=zc(e,n,l),_t(e,t)||(et=!0),e):(En&42)===0||(En&1073741824)!==0&&(we&261930)===0?(et=!0,e.memoizedState=n):(e=Xh(),xe.lanes|=e,Jn|=e,t)}function Qp(e,t,n,l,c){var f=q.p;q.p=f!==0&&8>f?f:8;var g=D.T,b={};D.T=b,Ic(e,!1,t,n);try{var R=c(),k=D.S;if(k!==null&&k(b,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var F=pS(R,l);Cl(e,t,F,jt(e))}else Cl(e,t,l,jt(e))}catch(K){Cl(e,t,{then:function(){},status:"rejected",reason:K},jt())}finally{q.p=f,g!==null&&b.types!==null&&(g.types=b.types),D.T=g}}function xS(){}function kc(e,t,n,l){if(e.tag!==5)throw Error(o(476));var c=$p(e).queue;Qp(e,c,t,I,n===null?xS:function(){return Zp(e),n(l)})}function $p(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:I},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Zp(e){var t=$p(e);t.next===null&&(t=e.alternate.memoizedState),Cl(e,t.next.queue,{},jt())}function Hc(){return ct(Pl)}function Wp(){return $e().memoizedState}function Jp(){return $e().memoizedState}function SS(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jt();e=Kn(n);var l=Xn(t,e,n);l!==null&&(Et(l,t,n),yl(l,t,n)),t={cache:dc()},e.payload=t;return}t=t.return}}function bS(e,t,n){var l=jt();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Kr(e)?th(t,n):(n=tc(e,t,n,l),n!==null&&(Et(n,e,l),nh(n,t,l)))}function eh(e,t,n){var l=jt();Cl(e,t,n,l)}function Cl(e,t,n,l){var c={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kr(e))th(t,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var g=t.lastRenderedState,b=f(g,n);if(c.hasEagerState=!0,c.eagerState=b,_t(b,g))return Rr(e,t,c,0),Ue===null&&wr(),!1}catch{}if(n=tc(e,t,c,l),n!==null)return Et(n,e,l),nh(n,t,l),!0}return!1}function Ic(e,t,n,l){if(l={lane:2,revertLane:gu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Kr(e)){if(t)throw Error(o(479))}else t=tc(e,n,l,2),t!==null&&Et(t,e,2)}function Kr(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function th(e,t){gi=Ur=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function nh(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,od(e,n)}}var Tl={readContext:ct,use:Vr,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye};Tl.useEffectEvent=Ye;var ah={readContext:ct,use:Vr,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:Up,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,qr(4194308,4,Fp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return qr(4194308,4,e,t)},useInsertionEffect:function(e,t){qr(4,2,e,t)},useMemo:function(e,t){var n=yt();t=t===void 0?null:t;var l=e();if(za){Pn(!0);try{e()}finally{Pn(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=yt();if(n!==void 0){var c=n(t);if(za){Pn(!0);try{n(t)}finally{Pn(!1)}}}else c=t;return l.memoizedState=l.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},l.queue=e,e=e.dispatch=bS.bind(null,xe,e),[l.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:function(e){e=Mc(e);var t=e.queue,n=eh.bind(null,xe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:jc,useDeferredValue:function(e,t){var n=yt();return zc(n,e,t)},useTransition:function(){var e=Mc(!1);return e=Qp.bind(null,xe,e.queue,!0,!1),yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=xe,c=yt();if(_e){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Ue===null)throw Error(o(349));(we&127)!==0||Ep(l,t,n)}c.memoizedState=n;var f={value:n,getSnapshot:t};return c.queue=f,Up(wp.bind(null,l,f,e),[e]),l.flags|=2048,vi(9,{destroy:void 0},Ap.bind(null,l,f,n,t),null),n},useId:function(){var e=yt(),t=Ue.identifierPrefix;if(_e){var n=rn,l=ln;n=(l&~(1<<32-Rt(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Br++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=hS++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Hc,useFormState:zp,useActionState:zp,useOptimistic:function(e){var t=yt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ic.bind(null,xe,!0,n),n.dispatch=t,[e,t]},useMemoCache:_c,useCacheRefresh:function(){return yt().memoizedState=SS.bind(null,xe)},useEffectEvent:function(e){var t=yt(),n={impl:e};return t.memoizedState=n,function(){if((Le&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Pc={readContext:ct,use:Vr,useCallback:Yp,useContext:ct,useEffect:Lc,useImperativeHandle:qp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:Kp,useReducer:Fr,useRef:Pp,useState:function(){return Fr(An)},useDebugValue:jc,useDeferredValue:function(e,t){var n=$e();return Xp(n,He.memoizedState,e,t)},useTransition:function(){var e=Fr(An)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:bl(e),t]},useSyncExternalStore:Tp,useId:Wp,useHostTransitionStatus:Hc,useFormState:kp,useActionState:kp,useOptimistic:function(e,t){var n=$e();return Op(n,He,e,t)},useMemoCache:_c,useCacheRefresh:Jp};Pc.useEffectEvent=Bp;var ih={readContext:ct,use:Vr,useCallback:Yp,useContext:ct,useEffect:Lc,useImperativeHandle:qp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:Kp,useReducer:Nc,useRef:Pp,useState:function(){return Nc(An)},useDebugValue:jc,useDeferredValue:function(e,t){var n=$e();return He===null?zc(n,e,t):Xp(n,He.memoizedState,e,t)},useTransition:function(){var e=Nc(An)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:bl(e),t]},useSyncExternalStore:Tp,useId:Wp,useHostTransitionStatus:Hc,useFormState:Ip,useActionState:Ip,useOptimistic:function(e,t){var n=$e();return He!==null?Op(n,He,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:_c,useCacheRefresh:Jp};ih.useEffectEvent=Bp;function Uc(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bc={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=jt(),c=Kn(l);c.payload=t,n!=null&&(c.callback=n),t=Xn(e,c,l),t!==null&&(Et(t,e,l),yl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=jt(),c=Kn(l);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=Xn(e,c,l),t!==null&&(Et(t,e,l),yl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jt(),l=Kn(n);l.tag=2,t!=null&&(l.callback=t),t=Xn(e,l,n),t!==null&&(Et(t,e,n),yl(t,e,n))}};function lh(e,t,n,l,c,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,g):t.prototype&&t.prototype.isPureReactComponent?!cl(n,l)||!cl(c,f):!0}function rh(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Bc.enqueueReplaceState(t,t.state,null)}function ka(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var c in e)n[c]===void 0&&(n[c]=e[c])}return n}function oh(e){Ar(e)}function sh(e){console.error(e)}function ch(e){Ar(e)}function Xr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function uh(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Gc(e,t,n){return n=Kn(n),n.tag=3,n.payload={element:null},n.callback=function(){Xr(e,t)},n}function fh(e){return e=Kn(e),e.tag=3,e}function dh(e,t,n,l){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=l.value;e.payload=function(){return c(f)},e.callback=function(){uh(t,n,l)}}var g=n.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){uh(t,n,l),typeof c!="function"&&(ea===null?ea=new Set([this]):ea.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function CS(e,t,n,l,c){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&ui(t,n,c,!0),n=Nt.current,n!==null){switch(n.tag){case 31:case 13:return qt===null?ro():n.alternate===null&&Ke===0&&(Ke=3),n.flags&=-257,n.flags|=65536,n.lanes=c,l===zr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),pu(e,l,c)),!1;case 22:return n.flags|=65536,l===zr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),pu(e,l,c)),!1}throw Error(o(435,n.tag))}return pu(e,l,c),ro(),!1}if(_e)return t=Nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,l!==oc&&(e=Error(o(422),{cause:l}),dl(Bt(e,n)))):(l!==oc&&(t=Error(o(423),{cause:l}),dl(Bt(t,n))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,l=Bt(l,n),c=Gc(e.stateNode,l,c),vc(e,c),Ke!==4&&(Ke=2)),!1;var f=Error(o(520),{cause:l});if(f=Bt(f,n),Ml===null?Ml=[f]:Ml.push(f),Ke!==4&&(Ke=2),t===null)return!0;l=Bt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=c&-c,n.lanes|=e,e=Gc(n.stateNode,l,e),vc(n,e),!1;case 1:if(t=n.type,f=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ea===null||!ea.has(f))))return n.flags|=65536,c&=-c,n.lanes|=c,c=fh(c),dh(c,e,n,l),vc(n,c),!1}n=n.return}while(n!==null);return!1}var Vc=Error(o(461)),et=!1;function ut(e,t,n,l){t.child=e===null?gp(t,null,n,l):ja(t,e.child,n,l)}function ph(e,t,n,l,c){n=n.render;var f=t.ref;if("ref"in l){var g={};for(var b in l)b!=="ref"&&(g[b]=l[b])}else g=l;return Na(t),l=Ec(e,t,n,g,f,c),b=Ac(),e!==null&&!et?(wc(e,t,c),wn(e,t,c)):(_e&&b&&lc(t),t.flags|=1,ut(e,t,l,c),t.child)}function hh(e,t,n,l,c){if(e===null){var f=n.type;return typeof f=="function"&&!nc(f)&&f.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=f,mh(e,t,f,l,c)):(e=Or(n.type,null,l,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!Zc(e,c)){var g=f.memoizedProps;if(n=n.compare,n=n!==null?n:cl,n(g,l)&&e.ref===t.ref)return wn(e,t,c)}return t.flags|=1,e=Sn(f,l),e.ref=t.ref,e.return=t,t.child=e}function mh(e,t,n,l,c){if(e!==null){var f=e.memoizedProps;if(cl(f,l)&&e.ref===t.ref)if(et=!1,t.pendingProps=l=f,Zc(e,c))(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,wn(e,t,c)}return Fc(e,t,n,l,c)}function gh(e,t,n,l){var c=l.children,f=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(f=f!==null?f.baseLanes|n:n,e!==null){for(l=t.child=e.child,c=0;l!==null;)c=c|l.lanes|l.childLanes,l=l.sibling;l=c&~f}else l=0,t.child=null;return yh(e,t,f,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Lr(t,f!==null?f.cachePool:null),f!==null?xp(t,f):Sc(),Sp(t);else return l=t.lanes=536870912,yh(e,t,f!==null?f.baseLanes|n:n,n,l)}else f!==null?(Lr(t,f.cachePool),xp(t,f),$n(),t.memoizedState=null):(e!==null&&Lr(t,null),Sc(),$n());return ut(e,t,c,n),t.child}function El(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function yh(e,t,n,l,c){var f=hc();return f=f===null?null:{parent:We._currentValue,pool:f},t.memoizedState={baseLanes:n,cachePool:f},e!==null&&Lr(t,null),Sc(),Sp(t),e!==null&&ui(e,t,l,!0),t.childLanes=c,null}function Qr(e,t){return t=Zr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function vh(e,t,n){return ja(t,e.child,null,n),e=Qr(t,t.pendingProps),e.flags|=2,Mt(t),t.memoizedState=null,e}function TS(e,t,n){var l=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(_e){if(l.mode==="hidden")return e=Qr(t,l),t.lanes=536870912,El(null,e);if(Cc(t),(e=Ge)?(e=Nm(e,Ft),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:ln,overflow:rn}:null,retryLane:536870912,hydrationErrors:null},n=tp(e),n.return=t,t.child=n,st=t,Ge=null)):e=null,e===null)throw Fn(t);return t.lanes=536870912,null}return Qr(t,l)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(Cc(t),c)if(t.flags&256)t.flags&=-257,t=vh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(et||ui(e,t,n,!1),c=(n&e.childLanes)!==0,et||c){if(l=Ue,l!==null&&(g=sd(l,n),g!==0&&g!==f.retryLane))throw f.retryLane=g,wa(e,g),Et(l,e,g),Vc;ro(),t=vh(e,t,n)}else e=f.treeContext,Ge=Yt(g.nextSibling),st=t,_e=!0,Vn=null,Ft=!1,e!==null&&ip(t,e),t=Qr(t,l),t.flags|=4096;return t}return e=Sn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function $r(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Fc(e,t,n,l,c){return Na(t),n=Ec(e,t,n,l,void 0,c),l=Ac(),e!==null&&!et?(wc(e,t,c),wn(e,t,c)):(_e&&l&&lc(t),t.flags|=1,ut(e,t,n,c),t.child)}function xh(e,t,n,l,c,f){return Na(t),t.updateQueue=null,n=Cp(t,l,n,c),bp(e),l=Ac(),e!==null&&!et?(wc(e,t,f),wn(e,t,f)):(_e&&l&&lc(t),t.flags|=1,ut(e,t,n,f),t.child)}function Sh(e,t,n,l,c){if(Na(t),t.stateNode===null){var f=ri,g=n.contextType;typeof g=="object"&&g!==null&&(f=ct(g)),f=new n(l,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Bc,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=l,f.state=t.memoizedState,f.refs={},gc(t),g=n.contextType,f.context=typeof g=="object"&&g!==null?ct(g):ri,f.state=t.memoizedState,g=n.getDerivedStateFromProps,typeof g=="function"&&(Uc(t,n,g,l),f.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Bc.enqueueReplaceState(f,f.state,null),xl(t,l,f,c),vl(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){f=t.stateNode;var b=t.memoizedProps,R=ka(n,b);f.props=R;var k=f.context,F=n.contextType;g=ri,typeof F=="object"&&F!==null&&(g=ct(F));var K=n.getDerivedStateFromProps;F=typeof K=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=t.pendingProps!==b,F||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||k!==g)&&rh(t,f,l,g),Yn=!1;var H=t.memoizedState;f.state=H,xl(t,l,f,c),vl(),k=t.memoizedState,b||H!==k||Yn?(typeof K=="function"&&(Uc(t,n,K,l),k=t.memoizedState),(R=Yn||lh(t,n,R,l,H,k,g))?(F||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=k),f.props=l,f.state=k,f.context=g,l=R):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{f=t.stateNode,yc(e,t),g=t.memoizedProps,F=ka(n,g),f.props=F,K=t.pendingProps,H=f.context,k=n.contextType,R=ri,typeof k=="object"&&k!==null&&(R=ct(k)),b=n.getDerivedStateFromProps,(k=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==K||H!==R)&&rh(t,f,l,R),Yn=!1,H=t.memoizedState,f.state=H,xl(t,l,f,c),vl();var P=t.memoizedState;g!==K||H!==P||Yn||e!==null&&e.dependencies!==null&&Mr(e.dependencies)?(typeof b=="function"&&(Uc(t,n,b,l),P=t.memoizedState),(F=Yn||lh(t,n,F,l,H,P,R)||e!==null&&e.dependencies!==null&&Mr(e.dependencies))?(k||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,P,R),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,P,R)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=P),f.props=l,f.state=P,f.context=R,l=F):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),l=!1)}return f=l,$r(e,t),l=(t.flags&128)!==0,f||l?(f=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&l?(t.child=ja(t,e.child,null,c),t.child=ja(t,null,n,c)):ut(e,t,n,c),t.memoizedState=f.state,e=t.child):e=wn(e,t,c),e}function bh(e,t,n,l){return _a(),t.flags|=256,ut(e,t,n,l),t.child}var qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yc(e){return{baseLanes:e,cachePool:up()}}function Kc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Lt),e}function Ch(e,t,n){var l=t.pendingProps,c=!1,f=(t.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),g&&(c=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(_e){if(c?Qn(t):$n(),(e=Ge)?(e=Nm(e,Ft),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Gn!==null?{id:ln,overflow:rn}:null,retryLane:536870912,hydrationErrors:null},n=tp(e),n.return=t,t.child=n,st=t,Ge=null)):e=null,e===null)throw Fn(t);return Ou(e)?t.lanes=32:t.lanes=536870912,null}var b=l.children;return l=l.fallback,c?($n(),c=t.mode,b=Zr({mode:"hidden",children:b},c),l=Ra(l,c,n,null),b.return=t,l.return=t,b.sibling=l,t.child=b,l=t.child,l.memoizedState=Yc(n),l.childLanes=Kc(e,g,n),t.memoizedState=qc,El(null,l)):(Qn(t),Xc(t,b))}var R=e.memoizedState;if(R!==null&&(b=R.dehydrated,b!==null)){if(f)t.flags&256?(Qn(t),t.flags&=-257,t=Qc(e,t,n)):t.memoizedState!==null?($n(),t.child=e.child,t.flags|=128,t=null):($n(),b=l.fallback,c=t.mode,l=Zr({mode:"visible",children:l.children},c),b=Ra(b,c,n,null),b.flags|=2,l.return=t,b.return=t,l.sibling=b,t.child=l,ja(t,e.child,null,n),l=t.child,l.memoizedState=Yc(n),l.childLanes=Kc(e,g,n),t.memoizedState=qc,t=El(null,l));else if(Qn(t),Ou(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var k=g.dgst;g=k,l=Error(o(419)),l.stack="",l.digest=g,dl({value:l,source:null,stack:null}),t=Qc(e,t,n)}else if(et||ui(e,t,n,!1),g=(n&e.childLanes)!==0,et||g){if(g=Ue,g!==null&&(l=sd(g,n),l!==0&&l!==R.retryLane))throw R.retryLane=l,wa(e,l),Et(g,e,l),Vc;_u(b)||ro(),t=Qc(e,t,n)}else _u(b)?(t.flags|=192,t.child=e.child,t=null):(e=R.treeContext,Ge=Yt(b.nextSibling),st=t,_e=!0,Vn=null,Ft=!1,e!==null&&ip(t,e),t=Xc(t,l.children),t.flags|=4096);return t}return c?($n(),b=l.fallback,c=t.mode,R=e.child,k=R.sibling,l=Sn(R,{mode:"hidden",children:l.children}),l.subtreeFlags=R.subtreeFlags&65011712,k!==null?b=Sn(k,b):(b=Ra(b,c,n,null),b.flags|=2),b.return=t,l.return=t,l.sibling=b,t.child=l,El(null,l),l=t.child,b=e.child.memoizedState,b===null?b=Yc(n):(c=b.cachePool,c!==null?(R=We._currentValue,c=c.parent!==R?{parent:R,pool:R}:c):c=up(),b={baseLanes:b.baseLanes|n,cachePool:c}),l.memoizedState=b,l.childLanes=Kc(e,g,n),t.memoizedState=qc,El(e.child,l)):(Qn(t),n=e.child,e=n.sibling,n=Sn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=n,t.memoizedState=null,n)}function Xc(e,t){return t=Zr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Zr(e,t){return e=Ot(22,e,null,t),e.lanes=0,e}function Qc(e,t,n){return ja(t,e.child,null,n),e=Xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Th(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),uc(e.return,t,n)}function $c(e,t,n,l,c,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:c,treeForkCount:f}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=n,g.tailMode=c,g.treeForkCount=f)}function Eh(e,t,n){var l=t.pendingProps,c=l.revealOrder,f=l.tail;l=l.children;var g=Qe.current,b=(g&2)!==0;if(b?(g=g&1|2,t.flags|=128):g&=1,Q(Qe,g),ut(e,t,l,n),l=_e?fl:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Th(e,n,t);else if(e.tag===19)Th(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(n=t.child,c=null;n!==null;)e=n.alternate,e!==null&&Pr(e)===null&&(c=n),n=n.sibling;n=c,n===null?(c=t.child,t.child=null):(c=n.sibling,n.sibling=null),$c(t,!1,c,n,f,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&Pr(e)===null){t.child=c;break}e=c.sibling,c.sibling=n,n=c,c=e}$c(t,!0,n,null,f,l);break;case"together":$c(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ui(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Mr(e)))}function ES(e,t,n){switch(t.tag){case 3:Se(t,t.stateNode.containerInfo),qn(t,We,e.memoizedState.cache),_a();break;case 27:case 5:Ae(t);break;case 4:Se(t,t.stateNode.containerInfo);break;case 10:qn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Cc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Qn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ch(e,t,n):(Qn(t),e=wn(e,t,n),e!==null?e.sibling:null);Qn(t);break;case 19:var c=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(ui(e,t,n,!1),l=(n&t.childLanes)!==0),c){if(l)return Eh(e,t,n);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Q(Qe,Qe.current),l)break;return null;case 22:return t.lanes=0,gh(e,t,n,t.pendingProps);case 24:qn(t,We,e.memoizedState.cache)}return wn(e,t,n)}function Ah(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)et=!0;else{if(!Zc(e,n)&&(t.flags&128)===0)return et=!1,ES(e,t,n);et=(e.flags&131072)!==0}else et=!1,_e&&(t.flags&1048576)!==0&&ap(t,fl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Da(t.elementType),t.type=e,typeof e=="function")nc(e)?(l=ka(e,l),t.tag=1,t=Sh(null,t,e,l,n)):(t.tag=0,t=Fc(null,t,e,l,n));else{if(e!=null){var c=e.$$typeof;if(c===U){t.tag=11,t=ph(null,t,e,l,n);break e}else if(c===B){t.tag=14,t=hh(null,t,e,l,n);break e}}throw t=re(e)||e,Error(o(306,t,""))}}return t;case 0:return Fc(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,c=ka(l,t.pendingProps),Sh(e,t,l,c,n);case 3:e:{if(Se(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var f=t.memoizedState;c=f.element,yc(e,t),xl(t,l,null,n);var g=t.memoizedState;if(l=g.cache,qn(t,We,l),l!==f.cache&&fc(t,[We],n,!0),vl(),l=g.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=bh(e,t,l,n);break e}else if(l!==c){c=Bt(Error(o(424)),t),dl(c),t=bh(e,t,l,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ge=Yt(e.firstChild),st=t,_e=!0,Vn=null,Ft=!0,n=gp(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_a(),l===c){t=wn(e,t,n);break e}ut(e,t,l,n)}t=t.child}return t;case 26:return $r(e,t),e===null?(n=km(t.type,null,t.pendingProps,null))?t.memoizedState=n:_e||(n=t.type,e=t.pendingProps,l=ho(me.current).createElement(n),l[ot]=t,l[vt]=e,ft(l,n,e),lt(l),t.stateNode=l):t.memoizedState=km(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ae(t),e===null&&_e&&(l=t.stateNode=Lm(t.type,t.pendingProps,me.current),st=t,Ft=!0,c=Ge,ia(t.type)?(Nu=c,Ge=Yt(l.firstChild)):Ge=c),ut(e,t,t.pendingProps.children,n),$r(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&_e&&((c=l=Ge)&&(l=eb(l,t.type,t.pendingProps,Ft),l!==null?(t.stateNode=l,st=t,Ge=Yt(l.firstChild),Ft=!1,c=!0):c=!1),c||Fn(t)),Ae(t),c=t.type,f=t.pendingProps,g=e!==null?e.memoizedProps:null,l=f.children,Au(c,f)?l=null:g!==null&&Au(c,g)&&(t.flags|=32),t.memoizedState!==null&&(c=Ec(e,t,mS,null,null,n),Pl._currentValue=c),$r(e,t),ut(e,t,l,n),t.child;case 6:return e===null&&_e&&((e=n=Ge)&&(n=tb(n,t.pendingProps,Ft),n!==null?(t.stateNode=n,st=t,Ge=null,e=!0):e=!1),e||Fn(t)),null;case 13:return Ch(e,t,n);case 4:return Se(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ja(t,null,l,n):ut(e,t,l,n),t.child;case 11:return ph(e,t,t.type,t.pendingProps,n);case 7:return ut(e,t,t.pendingProps,n),t.child;case 8:return ut(e,t,t.pendingProps.children,n),t.child;case 12:return ut(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,qn(t,t.type,l.value),ut(e,t,l.children,n),t.child;case 9:return c=t.type._context,l=t.pendingProps.children,Na(t),c=ct(c),l=l(c),t.flags|=1,ut(e,t,l,n),t.child;case 14:return hh(e,t,t.type,t.pendingProps,n);case 15:return mh(e,t,t.type,t.pendingProps,n);case 19:return Eh(e,t,n);case 31:return TS(e,t,n);case 22:return gh(e,t,n,t.pendingProps);case 24:return Na(t),l=ct(We),e===null?(c=hc(),c===null&&(c=Ue,f=dc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=n),c=f),t.memoizedState={parent:l,cache:c},gc(t),qn(t,We,c)):((e.lanes&n)!==0&&(yc(e,t),xl(t,null,null,n),vl()),c=e.memoizedState,f=t.memoizedState,c.parent!==l?(c={parent:l,cache:l},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),qn(t,We,l)):(l=f.cache,qn(t,We,l),l!==c.cache&&fc(t,[We],n,!0))),ut(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Rn(e){e.flags|=4}function Wc(e,t,n,l,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Wh())e.flags|=8192;else throw La=zr,mc}else e.flags&=-16777217}function wh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Bm(t))if(Wh())e.flags|=8192;else throw La=zr,mc}function Wr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ld():536870912,e.lanes|=t,Ci|=t)}function Al(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var c=e.child;c!==null;)n|=c.lanes|c.childLanes,l|=c.subtreeFlags&65011712,l|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)n|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function AS(e,t,n){var l=t.pendingProps;switch(rc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Tn(We),ve(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ci(t)?Rn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,sc())),Ve(t),null;case 26:var c=t.type,f=t.memoizedState;return e===null?(Rn(t),f!==null?(Ve(t),wh(t,f)):(Ve(t),Wc(t,c,null,l,n))):f?f!==e.memoizedState?(Rn(t),Ve(t),wh(t,f)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Rn(t),Ve(t),Wc(t,c,e,l,n)),null;case 27:if(Ne(t),n=me.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Rn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Ve(t),null}e=W.current,ci(t)?lp(t):(e=Lm(c,l,n),t.stateNode=e,Rn(t))}return Ve(t),null;case 5:if(Ne(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Rn(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return Ve(t),null}if(f=W.current,ci(t))lp(t);else{var g=ho(me.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof l.is=="string"?g.createElement("select",{is:l.is}):g.createElement("select"),l.multiple?f.multiple=!0:l.size&&(f.size=l.size);break;default:f=typeof l.is=="string"?g.createElement(c,{is:l.is}):g.createElement(c)}}f[ot]=t,f[vt]=l;e:for(g=t.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}t.stateNode=f;e:switch(ft(f,c,l),c){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Rn(t)}}return Ve(t),Wc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Rn(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=me.current,ci(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,c=st,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}e[ot]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Cm(e.nodeValue,n)),e||Fn(t,!0)}else e=ho(e).createTextNode(l),e[ot]=t,t.stateNode=e}return Ve(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=ci(t),n!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[ot]=t}else _a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else n=sc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Mt(t),t):(Mt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Ve(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ci(t),l!==null&&l.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[ot]=t}else _a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),c=!1}else c=sc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(Mt(t),t):(Mt(t),null)}return Mt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool),f=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==c&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Wr(t,t.updateQueue),Ve(t),null);case 4:return ve(),e===null&&Su(t.stateNode.containerInfo),Ve(t),null;case 10:return Tn(t.type),Ve(t),null;case 19:if(V(Qe),l=t.memoizedState,l===null)return Ve(t),null;if(c=(t.flags&128)!==0,f=l.rendering,f===null)if(c)Al(l,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=Pr(e),f!==null){for(t.flags|=128,Al(l,!1),e=f.updateQueue,t.updateQueue=e,Wr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ep(n,e),n=n.sibling;return Q(Qe,Qe.current&1|2),_e&&bn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&At()>ao&&(t.flags|=128,c=!0,Al(l,!1),t.lanes=4194304)}else{if(!c)if(e=Pr(f),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,Wr(t,e),Al(l,!0),l.tail===null&&l.tailMode==="hidden"&&!f.alternate&&!_e)return Ve(t),null}else 2*At()-l.renderingStartTime>ao&&n!==536870912&&(t.flags|=128,c=!0,Al(l,!1),t.lanes=4194304);l.isBackwards?(f.sibling=t.child,t.child=f):(e=l.last,e!==null?e.sibling=f:t.child=f,l.last=f)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=At(),e.sibling=null,n=Qe.current,Q(Qe,c?n&1|2:n&1),_e&&bn(t,l.treeForkCount),e):(Ve(t),null);case 22:case 23:return Mt(t),bc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),n=t.updateQueue,n!==null&&Wr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&V(Ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Tn(We),Ve(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function wS(e,t){switch(rc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(We),ve(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ne(t),null;case 31:if(t.memoizedState!==null){if(Mt(t),t.alternate===null)throw Error(o(340));_a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Mt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));_a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Qe),null;case 4:return ve(),null;case 10:return Tn(t.type),null;case 22:case 23:return Mt(t),bc(),e!==null&&V(Ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Tn(We),null;case 25:return null;default:return null}}function Rh(e,t){switch(rc(t),t.tag){case 3:Tn(We),ve();break;case 26:case 27:case 5:Ne(t);break;case 4:ve();break;case 31:t.memoizedState!==null&&Mt(t);break;case 13:Mt(t);break;case 19:V(Qe);break;case 10:Tn(t.type);break;case 22:case 23:Mt(t),bc(),e!==null&&V(Ma);break;case 24:Tn(We)}}function wl(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var c=l.next;n=c;do{if((n.tag&e)===e){l=void 0;var f=n.create,g=n.inst;l=f(),g.destroy=l}n=n.next}while(n!==c)}}catch(b){ke(t,t.return,b)}}function Zn(e,t,n){try{var l=t.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var f=c.next;l=f;do{if((l.tag&e)===e){var g=l.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,c=t;var R=n,k=b;try{k()}catch(F){ke(c,R,F)}}}l=l.next}while(l!==f)}}catch(F){ke(t,t.return,F)}}function _h(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{vp(t,n)}catch(l){ke(e,e.return,l)}}}function Oh(e,t,n){n.props=ka(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){ke(e,t,l)}}function Rl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(c){ke(e,t,c)}}function on(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(c){ke(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){ke(e,t,c)}else n.current=null}function Nh(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(c){ke(e,e.return,c)}}function Jc(e,t,n){try{var l=e.stateNode;XS(l,e.type,n,t),l[vt]=t}catch(c){ke(e,e.return,c)}}function Mh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ia(e.type)||e.tag===4}function eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tu(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vn));else if(l!==4&&(l===27&&ia(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tu(e,t,n),e=e.sibling;e!==null;)tu(e,t,n),e=e.sibling}function Jr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&ia(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Jr(e,t,n),e=e.sibling;e!==null;)Jr(e,t,n),e=e.sibling}function Dh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);ft(t,l,n),t[ot]=e,t[vt]=n}catch(f){ke(e,e.return,f)}}var _n=!1,tt=!1,nu=!1,Lh=typeof WeakSet=="function"?WeakSet:Set,rt=null;function RS(e,t){if(e=e.containerInfo,Tu=bo,e=qd(e),Qs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var c=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{n.nodeType,f.nodeType}catch{n=null;break e}var g=0,b=-1,R=-1,k=0,F=0,K=e,H=null;t:for(;;){for(var P;K!==n||c!==0&&K.nodeType!==3||(b=g+c),K!==f||l!==0&&K.nodeType!==3||(R=g+l),K.nodeType===3&&(g+=K.nodeValue.length),(P=K.firstChild)!==null;)H=K,K=P;for(;;){if(K===e)break t;if(H===n&&++k===c&&(b=g),H===f&&++F===l&&(R=g),(P=K.nextSibling)!==null)break;K=H,H=K.parentNode}K=P}n=b===-1||R===-1?null:{start:b,end:R}}else n=null}n=n||{start:0,end:0}}else n=null;for(Eu={focusedElem:e,selectionRange:n},bo=!1,rt=t;rt!==null;)if(t=rt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,rt=e;else for(;rt!==null;){switch(t=rt,f=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)c=e[n],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,n=t,c=f.memoizedProps,f=f.memoizedState,l=n.stateNode;try{var ae=ka(n.type,c);e=l.getSnapshotBeforeUpdate(ae,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(pe){ke(n,n.return,pe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ru(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ru(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,rt=e;break}rt=t.return}}function jh(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Nn(e,n),l&4&&wl(5,n);break;case 1:if(Nn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(g){ke(n,n.return,g)}else{var c=ka(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){ke(n,n.return,g)}}l&64&&_h(n),l&512&&Rl(n,n.return);break;case 3:if(Nn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{vp(e,t)}catch(g){ke(n,n.return,g)}}break;case 27:t===null&&l&4&&Dh(n);case 26:case 5:Nn(e,n),t===null&&l&4&&Nh(n),l&512&&Rl(n,n.return);break;case 12:Nn(e,n);break;case 31:Nn(e,n),l&4&&Hh(e,n);break;case 13:Nn(e,n),l&4&&Ih(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=kS.bind(null,n),nb(e,n))));break;case 22:if(l=n.memoizedState!==null||_n,!l){t=t!==null&&t.memoizedState!==null||tt,c=_n;var f=tt;_n=l,(tt=t)&&!f?Mn(e,n,(n.subtreeFlags&8772)!==0):Nn(e,n),_n=c,tt=f}break;case 30:break;default:Nn(e,n)}}function zh(e){var t=e.alternate;t!==null&&(e.alternate=null,zh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ds(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Fe=null,St=!1;function On(e,t,n){for(n=n.child;n!==null;)kh(e,t,n),n=n.sibling}function kh(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Zi,n)}catch{}switch(n.tag){case 26:tt||on(n,t),On(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tt||on(n,t);var l=Fe,c=St;ia(n.type)&&(Fe=n.stateNode,St=!1),On(e,t,n),kl(n.stateNode),Fe=l,St=c;break;case 5:tt||on(n,t);case 6:if(l=Fe,c=St,Fe=null,On(e,t,n),Fe=l,St=c,Fe!==null)if(St)try{(Fe.nodeType===9?Fe.body:Fe.nodeName==="HTML"?Fe.ownerDocument.body:Fe).removeChild(n.stateNode)}catch(f){ke(n,t,f)}else try{Fe.removeChild(n.stateNode)}catch(f){ke(n,t,f)}break;case 18:Fe!==null&&(St?(e=Fe,_m(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ni(e)):_m(Fe,n.stateNode));break;case 4:l=Fe,c=St,Fe=n.stateNode.containerInfo,St=!0,On(e,t,n),Fe=l,St=c;break;case 0:case 11:case 14:case 15:Zn(2,n,t),tt||Zn(4,n,t),On(e,t,n);break;case 1:tt||(on(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Oh(n,t,l)),On(e,t,n);break;case 21:On(e,t,n);break;case 22:tt=(l=tt)||n.memoizedState!==null,On(e,t,n),tt=l;break;default:On(e,t,n)}}function Hh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ni(e)}catch(n){ke(t,t.return,n)}}}function Ih(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ni(e)}catch(n){ke(t,t.return,n)}}function _S(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Lh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Lh),t;default:throw Error(o(435,e.tag))}}function eo(e,t){var n=_S(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var c=HS.bind(null,e,l);l.then(c,c)}})}function bt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var c=n[l],f=e,g=t,b=g;e:for(;b!==null;){switch(b.tag){case 27:if(ia(b.type)){Fe=b.stateNode,St=!1;break e}break;case 5:Fe=b.stateNode,St=!1;break e;case 3:case 4:Fe=b.stateNode.containerInfo,St=!0;break e}b=b.return}if(Fe===null)throw Error(o(160));kh(f,g,c),Fe=null,St=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ph(t,e),t=t.sibling}var Zt=null;function Ph(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:bt(t,e),Ct(e),l&4&&(Zn(3,e,e.return),wl(3,e),Zn(5,e,e.return));break;case 1:bt(t,e),Ct(e),l&512&&(tt||n===null||on(n,n.return)),l&64&&_n&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var c=Zt;if(bt(t,e),Ct(e),l&512&&(tt||n===null||on(n,n.return)),l&4){var f=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,c=c.ownerDocument||c;t:switch(l){case"title":f=c.getElementsByTagName("title")[0],(!f||f[el]||f[ot]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(l),c.head.insertBefore(f,c.querySelector("head > title"))),ft(f,l,n),f[ot]=e,lt(f),l=f;break e;case"link":var g=Pm("link","href",c).get(l+(n.href||""));if(g){for(var b=0;b<g.length;b++)if(f=g[b],f.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&f.getAttribute("rel")===(n.rel==null?null:n.rel)&&f.getAttribute("title")===(n.title==null?null:n.title)&&f.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){g.splice(b,1);break t}}f=c.createElement(l),ft(f,l,n),c.head.appendChild(f);break;case"meta":if(g=Pm("meta","content",c).get(l+(n.content||""))){for(b=0;b<g.length;b++)if(f=g[b],f.getAttribute("content")===(n.content==null?null:""+n.content)&&f.getAttribute("name")===(n.name==null?null:n.name)&&f.getAttribute("property")===(n.property==null?null:n.property)&&f.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&f.getAttribute("charset")===(n.charSet==null?null:n.charSet)){g.splice(b,1);break t}}f=c.createElement(l),ft(f,l,n),c.head.appendChild(f);break;default:throw Error(o(468,l))}f[ot]=e,lt(f),l=f}e.stateNode=l}else Um(c,e.type,e.stateNode);else e.stateNode=Im(c,l,e.memoizedProps);else f!==l?(f===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):f.count--,l===null?Um(c,e.type,e.stateNode):Im(c,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps)}break;case 27:bt(t,e),Ct(e),l&512&&(tt||n===null||on(n,n.return)),n!==null&&l&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(bt(t,e),Ct(e),l&512&&(tt||n===null||on(n,n.return)),e.flags&32){c=e.stateNode;try{Ja(c,"")}catch(ae){ke(e,e.return,ae)}}l&4&&e.stateNode!=null&&(c=e.memoizedProps,Jc(e,c,n!==null?n.memoizedProps:c)),l&1024&&(nu=!0);break;case 6:if(bt(t,e),Ct(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(ae){ke(e,e.return,ae)}}break;case 3:if(yo=null,c=Zt,Zt=mo(t.containerInfo),bt(t,e),Zt=c,Ct(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Ni(t.containerInfo)}catch(ae){ke(e,e.return,ae)}nu&&(nu=!1,Uh(e));break;case 4:l=Zt,Zt=mo(e.stateNode.containerInfo),bt(t,e),Ct(e),Zt=l;break;case 12:bt(t,e),Ct(e);break;case 31:bt(t,e),Ct(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,eo(e,l)));break;case 13:bt(t,e),Ct(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(no=At()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,eo(e,l)));break;case 22:c=e.memoizedState!==null;var R=n!==null&&n.memoizedState!==null,k=_n,F=tt;if(_n=k||c,tt=F||R,bt(t,e),tt=F,_n=k,Ct(e),l&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(n===null||R||_n||tt||Ha(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){R=n=t;try{if(f=R.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=R.stateNode;var K=R.memoizedProps.style,H=K!=null&&K.hasOwnProperty("display")?K.display:null;b.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(ae){ke(R,R.return,ae)}}}else if(t.tag===6){if(n===null){R=t;try{R.stateNode.nodeValue=c?"":R.memoizedProps}catch(ae){ke(R,R.return,ae)}}}else if(t.tag===18){if(n===null){R=t;try{var P=R.stateNode;c?Om(P,!0):Om(R.stateNode,!1)}catch(ae){ke(R,R.return,ae)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,eo(e,n))));break;case 19:bt(t,e),Ct(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,eo(e,l)));break;case 30:break;case 21:break;default:bt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Mh(l)){n=l;break}l=l.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var c=n.stateNode,f=eu(e);Jr(e,f,c);break;case 5:var g=n.stateNode;n.flags&32&&(Ja(g,""),n.flags&=-33);var b=eu(e);Jr(e,b,g);break;case 3:case 4:var R=n.stateNode.containerInfo,k=eu(e);tu(e,k,R);break;default:throw Error(o(161))}}catch(F){ke(e,e.return,F)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Uh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Uh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Nn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)jh(e,t.alternate,t),t=t.sibling}function Ha(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Zn(4,t,t.return),Ha(t);break;case 1:on(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Oh(t,t.return,n),Ha(t);break;case 27:kl(t.stateNode);case 26:case 5:on(t,t.return),Ha(t);break;case 22:t.memoizedState===null&&Ha(t);break;case 30:Ha(t);break;default:Ha(t)}e=e.sibling}}function Mn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,c=e,f=t,g=f.flags;switch(f.tag){case 0:case 11:case 15:Mn(c,f,n),wl(4,f);break;case 1:if(Mn(c,f,n),l=f,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(k){ke(l,l.return,k)}if(l=f,c=l.updateQueue,c!==null){var b=l.stateNode;try{var R=c.shared.hiddenCallbacks;if(R!==null)for(c.shared.hiddenCallbacks=null,c=0;c<R.length;c++)yp(R[c],b)}catch(k){ke(l,l.return,k)}}n&&g&64&&_h(f),Rl(f,f.return);break;case 27:Dh(f);case 26:case 5:Mn(c,f,n),n&&l===null&&g&4&&Nh(f),Rl(f,f.return);break;case 12:Mn(c,f,n);break;case 31:Mn(c,f,n),n&&g&4&&Hh(c,f);break;case 13:Mn(c,f,n),n&&g&4&&Ih(c,f);break;case 22:f.memoizedState===null&&Mn(c,f,n),Rl(f,f.return);break;case 30:break;default:Mn(c,f,n)}t=t.sibling}}function au(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pl(n))}function iu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pl(e))}function Wt(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Bh(e,t,n,l),t=t.sibling}function Bh(e,t,n,l){var c=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,n,l),c&2048&&wl(9,t);break;case 1:Wt(e,t,n,l);break;case 3:Wt(e,t,n,l),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pl(e)));break;case 12:if(c&2048){Wt(e,t,n,l),e=t.stateNode;try{var f=t.memoizedProps,g=f.id,b=f.onPostCommit;typeof b=="function"&&b(g,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(R){ke(t,t.return,R)}}else Wt(e,t,n,l);break;case 31:Wt(e,t,n,l);break;case 13:Wt(e,t,n,l);break;case 23:break;case 22:f=t.stateNode,g=t.alternate,t.memoizedState!==null?f._visibility&2?Wt(e,t,n,l):_l(e,t):f._visibility&2?Wt(e,t,n,l):(f._visibility|=2,xi(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),c&2048&&au(g,t);break;case 24:Wt(e,t,n,l),c&2048&&iu(t.alternate,t);break;default:Wt(e,t,n,l)}}function xi(e,t,n,l,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var f=e,g=t,b=n,R=l,k=g.flags;switch(g.tag){case 0:case 11:case 15:xi(f,g,b,R,c),wl(8,g);break;case 23:break;case 22:var F=g.stateNode;g.memoizedState!==null?F._visibility&2?xi(f,g,b,R,c):_l(f,g):(F._visibility|=2,xi(f,g,b,R,c)),c&&k&2048&&au(g.alternate,g);break;case 24:xi(f,g,b,R,c),c&&k&2048&&iu(g.alternate,g);break;default:xi(f,g,b,R,c)}t=t.sibling}}function _l(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,c=l.flags;switch(l.tag){case 22:_l(n,l),c&2048&&au(l.alternate,l);break;case 24:_l(n,l),c&2048&&iu(l.alternate,l);break;default:_l(n,l)}t=t.sibling}}var Ol=8192;function Si(e,t,n){if(e.subtreeFlags&Ol)for(e=e.child;e!==null;)Gh(e,t,n),e=e.sibling}function Gh(e,t,n){switch(e.tag){case 26:Si(e,t,n),e.flags&Ol&&e.memoizedState!==null&&hb(n,Zt,e.memoizedState,e.memoizedProps);break;case 5:Si(e,t,n);break;case 3:case 4:var l=Zt;Zt=mo(e.stateNode.containerInfo),Si(e,t,n),Zt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ol,Ol=16777216,Si(e,t,n),Ol=l):Si(e,t,n));break;default:Si(e,t,n)}}function Vh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Nl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];rt=l,qh(l,e)}Vh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fh(e),e=e.sibling}function Fh(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Zn(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,to(e)):Nl(e);break;default:Nl(e)}}function to(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];rt=l,qh(l,e)}Vh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Zn(8,t,t.return),to(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,to(t));break;default:to(t)}e=e.sibling}}function qh(e,t){for(;rt!==null;){var n=rt;switch(n.tag){case 0:case 11:case 15:Zn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:pl(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,rt=l;else e:for(n=e;rt!==null;){l=rt;var c=l.sibling,f=l.return;if(zh(l),l===n){rt=null;break e}if(c!==null){c.return=f,rt=c;break e}rt=f}}}var OS={getCacheForType:function(e){var t=ct(We),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ct(We).controller.signal}},NS=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ue=null,Te=null,we=0,ze=0,Dt=null,Wn=!1,bi=!1,lu=!1,Dn=0,Ke=0,Jn=0,Ia=0,ru=0,Lt=0,Ci=0,Ml=null,Tt=null,ou=!1,no=0,Yh=0,ao=1/0,io=null,ea=null,at=0,ta=null,Ti=null,Ln=0,su=0,cu=null,Kh=null,Dl=0,uu=null;function jt(){return(Le&2)!==0&&we!==0?we&-we:D.T!==null?gu():cd()}function Xh(){if(Lt===0)if((we&536870912)===0||_e){var e=dr;dr<<=1,(dr&3932160)===0&&(dr=262144),Lt=e}else Lt=536870912;return e=Nt.current,e!==null&&(e.flags|=32),Lt}function Et(e,t,n){(e===Ue&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(Ei(e,0),na(e,we,Lt,!1)),Ji(e,n),((Le&2)===0||e!==Ue)&&(e===Ue&&((Le&2)===0&&(Ia|=n),Ke===4&&na(e,we,Lt,!1)),sn(e))}function Qh(e,t,n){if((Le&6)!==0)throw Error(o(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Wi(e,t),c=l?LS(e,t):du(e,t,!0),f=l;do{if(c===0){bi&&!l&&na(e,t,0,!1);break}else{if(n=e.current.alternate,f&&!MS(n)){c=du(e,t,!1),f=!1;continue}if(c===2){if(f=t,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var b=e;c=Ml;var R=b.current.memoizedState.isDehydrated;if(R&&(Ei(b,g).flags|=256),g=du(b,g,!1),g!==2){if(lu&&!R){b.errorRecoveryDisabledLanes|=f,Ia|=f,c=4;break e}f=Tt,Tt=c,f!==null&&(Tt===null?Tt=f:Tt.push.apply(Tt,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){Ei(e,0),na(e,t,0,!0);break}e:{switch(l=e,f=c,f){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:na(l,t,Lt,!Wn);break e;case 2:Tt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(c=no+300-At(),10<c)){if(na(l,t,Lt,!Wn),hr(l,0,!0)!==0)break e;Ln=t,l.timeoutHandle=wm($h.bind(null,l,n,Tt,io,ou,t,Lt,Ia,Ci,Wn,f,"Throttled",-0,0),c);break e}$h(l,n,Tt,io,ou,t,Lt,Ia,Ci,Wn,f,null,-0,0)}}break}while(!0);sn(e)}function $h(e,t,n,l,c,f,g,b,R,k,F,K,H,P){if(e.timeoutHandle=-1,K=t.subtreeFlags,K&8192||(K&16785408)===16785408){K={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:vn},Gh(t,f,K);var ae=(f&62914560)===f?no-At():(f&4194048)===f?Yh-At():0;if(ae=mb(K,ae),ae!==null){Ln=f,e.cancelPendingCommit=ae(im.bind(null,e,t,f,n,l,c,g,b,R,F,K,null,H,P)),na(e,f,g,!k);return}}im(e,t,f,n,l,c,g,b,R)}function MS(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var c=n[l],f=c.getSnapshot;c=c.value;try{if(!_t(f(),c))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t,n,l){t&=~ru,t&=~Ia,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var c=t;0<c;){var f=31-Rt(c),g=1<<f;l[f]=-1,c&=~g}n!==0&&rd(e,n,t)}function lo(){return(Le&6)===0?(Ll(0),!1):!0}function fu(){if(Te!==null){if(ze===0)var e=Te.return;else e=Te,Cn=Oa=null,Rc(e),hi=null,ml=0,e=Te;for(;e!==null;)Rh(e.alternate,e),e=e.return;Te=null}}function Ei(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,ZS(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ln=0,fu(),Ue=e,Te=n=Sn(e.current,null),we=t,ze=0,Dt=null,Wn=!1,bi=Wi(e,t),lu=!1,Ci=Lt=ru=Ia=Jn=Ke=0,Tt=Ml=null,ou=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var c=31-Rt(l),f=1<<c;t|=e[c],l&=~f}return Dn=t,wr(),n}function Zh(e,t){xe=null,D.H=Tl,t===pi||t===jr?(t=pp(),ze=3):t===mc?(t=pp(),ze=4):ze=t===Vc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,Te===null&&(Ke=1,Xr(e,Bt(t,e.current)))}function Wh(){var e=Nt.current;return e===null?!0:(we&4194048)===we?qt===null:(we&62914560)===we||(we&536870912)!==0?e===qt:!1}function Jh(){var e=D.H;return D.H=Tl,e===null?Tl:e}function em(){var e=D.A;return D.A=OS,e}function ro(){Ke=4,Wn||(we&4194048)!==we&&Nt.current!==null||(bi=!0),(Jn&134217727)===0&&(Ia&134217727)===0||Ue===null||na(Ue,we,Lt,!1)}function du(e,t,n){var l=Le;Le|=2;var c=Jh(),f=em();(Ue!==e||we!==t)&&(io=null,Ei(e,t)),t=!1;var g=Ke;e:do try{if(ze!==0&&Te!==null){var b=Te,R=Dt;switch(ze){case 8:fu(),g=6;break e;case 3:case 2:case 9:case 6:Nt.current===null&&(t=!0);var k=ze;if(ze=0,Dt=null,Ai(e,b,R,k),n&&bi){g=0;break e}break;default:k=ze,ze=0,Dt=null,Ai(e,b,R,k)}}DS(),g=Ke;break}catch(F){Zh(e,F)}while(!0);return t&&e.shellSuspendCounter++,Cn=Oa=null,Le=l,D.H=c,D.A=f,Te===null&&(Ue=null,we=0,wr()),g}function DS(){for(;Te!==null;)tm(Te)}function LS(e,t){var n=Le;Le|=2;var l=Jh(),c=em();Ue!==e||we!==t?(io=null,ao=At()+500,Ei(e,t)):bi=Wi(e,t);e:do try{if(ze!==0&&Te!==null){t=Te;var f=Dt;t:switch(ze){case 1:ze=0,Dt=null,Ai(e,t,f,1);break;case 2:case 9:if(fp(f)){ze=0,Dt=null,nm(t);break}t=function(){ze!==2&&ze!==9||Ue!==e||(ze=7),sn(e)},f.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:fp(f)?(ze=0,Dt=null,nm(t)):(ze=0,Dt=null,Ai(e,t,f,7));break;case 5:var g=null;switch(Te.tag){case 26:g=Te.memoizedState;case 5:case 27:var b=Te;if(g?Bm(g):b.stateNode.complete){ze=0,Dt=null;var R=b.sibling;if(R!==null)Te=R;else{var k=b.return;k!==null?(Te=k,oo(k)):Te=null}break t}}ze=0,Dt=null,Ai(e,t,f,5);break;case 6:ze=0,Dt=null,Ai(e,t,f,6);break;case 8:fu(),Ke=6;break e;default:throw Error(o(462))}}jS();break}catch(F){Zh(e,F)}while(!0);return Cn=Oa=null,D.H=l,D.A=c,Le=n,Te!==null?0:(Ue=null,we=0,wr(),Ke)}function jS(){for(;Te!==null&&!ax();)tm(Te)}function tm(e){var t=Ah(e.alternate,e,Dn);e.memoizedProps=e.pendingProps,t===null?oo(e):Te=t}function nm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=xh(n,t,t.pendingProps,t.type,void 0,we);break;case 11:t=xh(n,t,t.pendingProps,t.type.render,t.ref,we);break;case 5:Rc(t);default:Rh(n,t),t=Te=ep(t,Dn),t=Ah(n,t,Dn)}e.memoizedProps=e.pendingProps,t===null?oo(e):Te=t}function Ai(e,t,n,l){Cn=Oa=null,Rc(t),hi=null,ml=0;var c=t.return;try{if(CS(e,c,t,n,we)){Ke=1,Xr(e,Bt(n,e.current)),Te=null;return}}catch(f){if(c!==null)throw Te=c,f;Ke=1,Xr(e,Bt(n,e.current)),Te=null;return}t.flags&32768?(_e||l===1?e=!0:bi||(we&536870912)!==0?e=!1:(Wn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Nt.current,l!==null&&l.tag===13&&(l.flags|=16384))),am(t,e)):oo(t)}function oo(e){var t=e;do{if((t.flags&32768)!==0){am(t,Wn);return}e=t.return;var n=AS(t.alternate,t,Dn);if(n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Ke===0&&(Ke=5)}function am(e,t){do{var n=wS(e.alternate,e);if(n!==null){n.flags&=32767,Te=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Te=e;return}Te=e=n}while(e!==null);Ke=6,Te=null}function im(e,t,n,l,c,f,g,b,R){e.cancelPendingCommit=null;do so();while(at!==0);if((Le&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(f=t.lanes|t.childLanes,f|=ec,px(e,n,f,g,b,R),e===Ue&&(Te=Ue=null,we=0),Ti=t,ta=e,Ln=n,su=f,cu=c,Kh=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,IS(ur,function(){return cm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,c=q.p,q.p=2,g=Le,Le|=4;try{RS(e,t,n)}finally{Le=g,q.p=c,D.T=l}}at=1,lm(),rm(),om()}}function lm(){if(at===1){at=0;var e=ta,t=Ti,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var l=q.p;q.p=2;var c=Le;Le|=4;try{Ph(t,e);var f=Eu,g=qd(e.containerInfo),b=f.focusedElem,R=f.selectionRange;if(g!==b&&b&&b.ownerDocument&&Fd(b.ownerDocument.documentElement,b)){if(R!==null&&Qs(b)){var k=R.start,F=R.end;if(F===void 0&&(F=k),"selectionStart"in b)b.selectionStart=k,b.selectionEnd=Math.min(F,b.value.length);else{var K=b.ownerDocument||document,H=K&&K.defaultView||window;if(H.getSelection){var P=H.getSelection(),ae=b.textContent.length,pe=Math.min(R.start,ae),Pe=R.end===void 0?pe:Math.min(R.end,ae);!P.extend&&pe>Pe&&(g=Pe,Pe=pe,pe=g);var L=Vd(b,pe),O=Vd(b,Pe);if(L&&O&&(P.rangeCount!==1||P.anchorNode!==L.node||P.anchorOffset!==L.offset||P.focusNode!==O.node||P.focusOffset!==O.offset)){var z=K.createRange();z.setStart(L.node,L.offset),P.removeAllRanges(),pe>Pe?(P.addRange(z),P.extend(O.node,O.offset)):(z.setEnd(O.node,O.offset),P.addRange(z))}}}}for(K=[],P=b;P=P.parentNode;)P.nodeType===1&&K.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<K.length;b++){var Y=K[b];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}bo=!!Tu,Eu=Tu=null}finally{Le=c,q.p=l,D.T=n}}e.current=t,at=2}}function rm(){if(at===2){at=0;var e=ta,t=Ti,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var l=q.p;q.p=2;var c=Le;Le|=4;try{jh(e,t.alternate,t)}finally{Le=c,q.p=l,D.T=n}}at=3}}function om(){if(at===4||at===3){at=0,ix();var e=ta,t=Ti,n=Ln,l=Kh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?at=5:(at=0,Ti=ta=null,sm(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ea=null),Ns(n),t=t.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Zi,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=D.T,c=q.p,q.p=2,D.T=null;try{for(var f=e.onRecoverableError,g=0;g<l.length;g++){var b=l[g];f(b.value,{componentStack:b.stack})}}finally{D.T=t,q.p=c}}(Ln&3)!==0&&so(),sn(e),c=e.pendingLanes,(n&261930)!==0&&(c&42)!==0?e===uu?Dl++:(Dl=0,uu=e):Dl=0,Ll(0)}}function sm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pl(t)))}function so(){return lm(),rm(),om(),cm()}function cm(){if(at!==5)return!1;var e=ta,t=su;su=0;var n=Ns(Ln),l=D.T,c=q.p;try{q.p=32>n?32:n,D.T=null,n=cu,cu=null;var f=ta,g=Ln;if(at=0,Ti=ta=null,Ln=0,(Le&6)!==0)throw Error(o(331));var b=Le;if(Le|=4,Fh(f.current),Bh(f,f.current,g,n),Le=b,Ll(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Zi,f)}catch{}return!0}finally{q.p=c,D.T=l,sm(e,t)}}function um(e,t,n){t=Bt(n,t),t=Gc(e.stateNode,t,2),e=Xn(e,t,2),e!==null&&(Ji(e,2),sn(e))}function ke(e,t,n){if(e.tag===3)um(e,e,n);else for(;t!==null;){if(t.tag===3){um(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ea===null||!ea.has(l))){e=Bt(n,e),n=fh(2),l=Xn(t,n,2),l!==null&&(dh(n,l,t,e),Ji(l,2),sn(l));break}}t=t.return}}function pu(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new NS;var c=new Set;l.set(t,c)}else c=l.get(t),c===void 0&&(c=new Set,l.set(t,c));c.has(n)||(lu=!0,c.add(n),e=zS.bind(null,e,t,n),t.then(e,e))}function zS(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ue===e&&(we&n)===n&&(Ke===4||Ke===3&&(we&62914560)===we&&300>At()-no?(Le&2)===0&&Ei(e,0):ru|=n,Ci===we&&(Ci=0)),sn(e)}function fm(e,t){t===0&&(t=ld()),e=wa(e,t),e!==null&&(Ji(e,t),sn(e))}function kS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fm(e,n)}function HS(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(n=c.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),fm(e,n)}function IS(e,t){return ws(e,t)}var co=null,wi=null,hu=!1,uo=!1,mu=!1,aa=0;function sn(e){e!==wi&&e.next===null&&(wi===null?co=wi=e:wi=wi.next=e),uo=!0,hu||(hu=!0,US())}function Ll(e,t){if(!mu&&uo){mu=!0;do for(var n=!1,l=co;l!==null;){if(e!==0){var c=l.pendingLanes;if(c===0)var f=0;else{var g=l.suspendedLanes,b=l.pingedLanes;f=(1<<31-Rt(42|e)+1)-1,f&=c&~(g&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(n=!0,mm(l,f))}else f=we,f=hr(l,l===Ue?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||Wi(l,f)||(n=!0,mm(l,f));l=l.next}while(n);mu=!1}}function PS(){dm()}function dm(){uo=hu=!1;var e=0;aa!==0&&$S()&&(e=aa);for(var t=At(),n=null,l=co;l!==null;){var c=l.next,f=pm(l,t);f===0?(l.next=null,n===null?co=c:n.next=c,c===null&&(wi=n)):(n=l,(e!==0||(f&3)!==0)&&(uo=!0)),l=c}at!==0&&at!==5||Ll(e),aa!==0&&(aa=0)}function pm(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Rt(f),b=1<<g,R=c[g];R===-1?((b&n)===0||(b&l)!==0)&&(c[g]=dx(b,t)):R<=t&&(e.expiredLanes|=b),f&=~b}if(t=Ue,n=we,n=hr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Rs(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Wi(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&Rs(l),Ns(n)){case 2:case 8:n=ad;break;case 32:n=ur;break;case 268435456:n=id;break;default:n=ur}return l=hm.bind(null,e),n=ws(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&Rs(l),e.callbackPriority=2,e.callbackNode=null,2}function hm(e,t){if(at!==0&&at!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(so()&&e.callbackNode!==n)return null;var l=we;return l=hr(e,e===Ue?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Qh(e,l,t),pm(e,At()),e.callbackNode!=null&&e.callbackNode===n?hm.bind(null,e):null)}function mm(e,t){if(so())return null;Qh(e,t,!0)}function US(){WS(function(){(Le&6)!==0?ws(nd,PS):dm()})}function gu(){if(aa===0){var e=fi;e===0&&(e=fr,fr<<=1,(fr&261888)===0&&(fr=256)),aa=e}return aa}function gm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vr(""+e)}function ym(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function BS(e,t,n,l,c){if(t==="submit"&&n&&n.stateNode===c){var f=gm((c[vt]||null).action),g=l.submitter;g&&(t=(t=g[vt]||null)?gm(t.formAction):g.getAttribute("formAction"),t!==null&&(f=t,g=null));var b=new Cr("action","action",null,l,c);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(aa!==0){var R=g?ym(c,g):new FormData(c);kc(n,{pending:!0,data:R,method:c.method,action:f},null,R)}}else typeof f=="function"&&(b.preventDefault(),R=g?ym(c,g):new FormData(c),kc(n,{pending:!0,data:R,method:c.method,action:f},f,R))},currentTarget:c}]})}}for(var yu=0;yu<Js.length;yu++){var vu=Js[yu],GS=vu.toLowerCase(),VS=vu[0].toUpperCase()+vu.slice(1);$t(GS,"on"+VS)}$t(Xd,"onAnimationEnd"),$t(Qd,"onAnimationIteration"),$t($d,"onAnimationStart"),$t("dblclick","onDoubleClick"),$t("focusin","onFocus"),$t("focusout","onBlur"),$t(lS,"onTransitionRun"),$t(rS,"onTransitionStart"),$t(oS,"onTransitionCancel"),$t(Zd,"onTransitionEnd"),Za("onMouseEnter",["mouseout","mouseover"]),Za("onMouseLeave",["mouseout","mouseover"]),Za("onPointerEnter",["pointerout","pointerover"]),Za("onPointerLeave",["pointerout","pointerover"]),Ca("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ca("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ca("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ca("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ca("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jl));function vm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],c=l.event;l=l.listeners;e:{var f=void 0;if(t)for(var g=l.length-1;0<=g;g--){var b=l[g],R=b.instance,k=b.currentTarget;if(b=b.listener,R!==f&&c.isPropagationStopped())break e;f=b,c.currentTarget=k;try{f(c)}catch(F){Ar(F)}c.currentTarget=null,f=R}else for(g=0;g<l.length;g++){if(b=l[g],R=b.instance,k=b.currentTarget,b=b.listener,R!==f&&c.isPropagationStopped())break e;f=b,c.currentTarget=k;try{f(c)}catch(F){Ar(F)}c.currentTarget=null,f=R}}}}function Ee(e,t){var n=t[Ms];n===void 0&&(n=t[Ms]=new Set);var l=e+"__bubble";n.has(l)||(xm(t,e,2,!1),n.add(l))}function xu(e,t,n){var l=0;t&&(l|=4),xm(n,e,l,t)}var fo="_reactListening"+Math.random().toString(36).slice(2);function Su(e){if(!e[fo]){e[fo]=!0,dd.forEach(function(n){n!=="selectionchange"&&(FS.has(n)||xu(n,!1,e),xu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fo]||(t[fo]=!0,xu("selectionchange",!1,t))}}function xm(e,t,n,l){switch(Xm(t)){case 2:var c=vb;break;case 8:c=xb;break;default:c=zu}n=c.bind(null,t,n,e),c=void 0,!Us||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(t,n,{capture:!0,passive:c}):e.addEventListener(t,n,!0):c!==void 0?e.addEventListener(t,n,{passive:c}):e.addEventListener(t,n,!1)}function bu(e,t,n,l,c){var f=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var b=l.stateNode.containerInfo;if(b===c)break;if(g===4)for(g=l.return;g!==null;){var R=g.tag;if((R===3||R===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;b!==null;){if(g=Xa(b),g===null)return;if(R=g.tag,R===5||R===6||R===26||R===27){l=f=g;continue e}b=b.parentNode}}l=l.return}Ed(function(){var k=f,F=Is(n),K=[];e:{var H=Wd.get(e);if(H!==void 0){var P=Cr,ae=e;switch(e){case"keypress":if(Sr(n)===0)break e;case"keydown":case"keyup":P=Hx;break;case"focusin":ae="focus",P=Fs;break;case"focusout":ae="blur",P=Fs;break;case"beforeblur":case"afterblur":P=Fs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=Ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Ux;break;case Xd:case Qd:case $d:P=_x;break;case Zd:P=Gx;break;case"scroll":case"scrollend":P=Tx;break;case"wheel":P=Fx;break;case"copy":case"cut":case"paste":P=Nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Od;break;case"toggle":case"beforetoggle":P=Yx}var pe=(t&4)!==0,Pe=!pe&&(e==="scroll"||e==="scrollend"),L=pe?H!==null?H+"Capture":null:H;pe=[];for(var O=k,z;O!==null;){var Y=O;if(z=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||z===null||L===null||(Y=nl(O,L),Y!=null&&pe.push(zl(O,Y,z))),Pe)break;O=O.return}0<pe.length&&(H=new P(H,ae,null,n,F),K.push({event:H,listeners:pe}))}}if((t&7)===0){e:{if(H=e==="mouseover"||e==="pointerover",P=e==="mouseout"||e==="pointerout",H&&n!==Hs&&(ae=n.relatedTarget||n.fromElement)&&(Xa(ae)||ae[Ka]))break e;if((P||H)&&(H=F.window===F?F:(H=F.ownerDocument)?H.defaultView||H.parentWindow:window,P?(ae=n.relatedTarget||n.toElement,P=k,ae=ae?Xa(ae):null,ae!==null&&(Pe=u(ae),pe=ae.tag,ae!==Pe||pe!==5&&pe!==27&&pe!==6)&&(ae=null)):(P=null,ae=k),P!==ae)){if(pe=Rd,Y="onMouseLeave",L="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(pe=Od,Y="onPointerLeave",L="onPointerEnter",O="pointer"),Pe=P==null?H:tl(P),z=ae==null?H:tl(ae),H=new pe(Y,O+"leave",P,n,F),H.target=Pe,H.relatedTarget=z,Y=null,Xa(F)===k&&(pe=new pe(L,O+"enter",ae,n,F),pe.target=z,pe.relatedTarget=Pe,Y=pe),Pe=Y,P&&ae)t:{for(pe=qS,L=P,O=ae,z=0,Y=L;Y;Y=pe(Y))z++;Y=0;for(var fe=O;fe;fe=pe(fe))Y++;for(;0<z-Y;)L=pe(L),z--;for(;0<Y-z;)O=pe(O),Y--;for(;z--;){if(L===O||O!==null&&L===O.alternate){pe=L;break t}L=pe(L),O=pe(O)}pe=null}else pe=null;P!==null&&Sm(K,H,P,pe,!1),ae!==null&&Pe!==null&&Sm(K,Pe,ae,pe,!0)}}e:{if(H=k?tl(k):window,P=H.nodeName&&H.nodeName.toLowerCase(),P==="select"||P==="input"&&H.type==="file")var Me=Hd;else if(zd(H))if(Id)Me=nS;else{Me=eS;var ce=Jx}else P=H.nodeName,!P||P.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?k&&ks(k.elementType)&&(Me=Hd):Me=tS;if(Me&&(Me=Me(e,k))){kd(K,Me,n,F);break e}ce&&ce(e,H,k),e==="focusout"&&k&&H.type==="number"&&k.memoizedProps.value!=null&&zs(H,"number",H.value)}switch(ce=k?tl(k):window,e){case"focusin":(zd(ce)||ce.contentEditable==="true")&&(ai=ce,$s=k,ul=null);break;case"focusout":ul=$s=ai=null;break;case"mousedown":Zs=!0;break;case"contextmenu":case"mouseup":case"dragend":Zs=!1,Yd(K,n,F);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":Yd(K,n,F)}var be;if(Ys)e:{switch(e){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else ni?Ld(e,n)&&(Re="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Re="onCompositionStart");Re&&(Nd&&n.locale!=="ko"&&(ni||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&ni&&(be=Ad()):(Bn=F,Bs="value"in Bn?Bn.value:Bn.textContent,ni=!0)),ce=po(k,Re),0<ce.length&&(Re=new _d(Re,e,null,n,F),K.push({event:Re,listeners:ce}),be?Re.data=be:(be=jd(n),be!==null&&(Re.data=be)))),(be=Xx?Qx(e,n):$x(e,n))&&(Re=po(k,"onBeforeInput"),0<Re.length&&(ce=new _d("onBeforeInput","beforeinput",null,n,F),K.push({event:ce,listeners:Re}),ce.data=be)),BS(K,e,k,n,F)}vm(K,t)})}function zl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function po(e,t){for(var n=t+"Capture",l=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=nl(e,n),c!=null&&l.unshift(zl(e,c,f)),c=nl(e,t),c!=null&&l.push(zl(e,c,f))),e.tag===3)return l;e=e.return}return[]}function qS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sm(e,t,n,l,c){for(var f=t._reactName,g=[];n!==null&&n!==l;){var b=n,R=b.alternate,k=b.stateNode;if(b=b.tag,R!==null&&R===l)break;b!==5&&b!==26&&b!==27||k===null||(R=k,c?(k=nl(n,f),k!=null&&g.unshift(zl(n,k,R))):c||(k=nl(n,f),k!=null&&g.push(zl(n,k,R)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var YS=/\r\n?/g,KS=/\u0000|\uFFFD/g;function bm(e){return(typeof e=="string"?e:""+e).replace(YS,`
`).replace(KS,"")}function Cm(e,t){return t=bm(t),bm(e)===t}function Ie(e,t,n,l,c,f){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ja(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ja(e,""+l);break;case"className":gr(e,"class",l);break;case"tabIndex":gr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":gr(e,n,l);break;case"style":Cd(e,l,f);break;case"data":if(t!=="object"){gr(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=vr(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(n==="formAction"?(t!=="input"&&Ie(e,t,"name",c.name,c,null),Ie(e,t,"formEncType",c.formEncType,c,null),Ie(e,t,"formMethod",c.formMethod,c,null),Ie(e,t,"formTarget",c.formTarget,c,null)):(Ie(e,t,"encType",c.encType,c,null),Ie(e,t,"method",c.method,c,null),Ie(e,t,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=vr(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=vn);break;case"onScroll":l!=null&&Ee("scroll",e);break;case"onScrollEnd":l!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=vr(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),mr(e,"popover",l);break;case"xlinkActuate":yn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":yn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":yn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":yn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":yn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":yn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":yn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":yn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":yn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":mr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=bx.get(n)||n,mr(e,n,l))}}function Cu(e,t,n,l,c,f){switch(n){case"style":Cd(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(n=l.__html,n!=null){if(c.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Ja(e,l):(typeof l=="number"||typeof l=="bigint")&&Ja(e,""+l);break;case"onScroll":l!=null&&Ee("scroll",e);break;case"onScrollEnd":l!=null&&Ee("scrollend",e);break;case"onClick":l!=null&&(e.onclick=vn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),t=n.slice(2,c?n.length-7:void 0),f=e[vt]||null,f=f!=null?f[n]:null,typeof f=="function"&&e.removeEventListener(t,f,c),typeof l=="function")){typeof f!="function"&&f!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,c);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):mr(e,n,l)}}}function ft(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var l=!1,c=!1,f;for(f in n)if(n.hasOwnProperty(f)){var g=n[f];if(g!=null)switch(f){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ie(e,t,f,g,n,null)}}c&&Ie(e,t,"srcSet",n.srcSet,n,null),l&&Ie(e,t,"src",n.src,n,null);return;case"input":Ee("invalid",e);var b=f=g=c=null,R=null,k=null;for(l in n)if(n.hasOwnProperty(l)){var F=n[l];if(F!=null)switch(l){case"name":c=F;break;case"type":g=F;break;case"checked":R=F;break;case"defaultChecked":k=F;break;case"value":f=F;break;case"defaultValue":b=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(o(137,t));break;default:Ie(e,t,l,F,n,null)}}vd(e,f,b,R,k,g,c,!1);return;case"select":Ee("invalid",e),l=g=f=null;for(c in n)if(n.hasOwnProperty(c)&&(b=n[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":g=b;break;case"multiple":l=b;default:Ie(e,t,c,b,n,null)}t=f,n=g,e.multiple=!!l,t!=null?Wa(e,!!l,t,!1):n!=null&&Wa(e,!!l,n,!0);return;case"textarea":Ee("invalid",e),f=c=l=null;for(g in n)if(n.hasOwnProperty(g)&&(b=n[g],b!=null))switch(g){case"value":l=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(91));break;default:Ie(e,t,g,b,n,null)}Sd(e,l,c,f);return;case"option":for(R in n)n.hasOwnProperty(R)&&(l=n[R],l!=null)&&(R==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ie(e,t,R,l,n,null));return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(l=0;l<jl.length;l++)Ee(jl[l],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in n)if(n.hasOwnProperty(k)&&(l=n[k],l!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ie(e,t,k,l,n,null)}return;default:if(ks(t)){for(F in n)n.hasOwnProperty(F)&&(l=n[F],l!==void 0&&Cu(e,t,F,l,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(l=n[b],l!=null&&Ie(e,t,b,l,n,null))}function XS(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,b=null,R=null,k=null,F=null;for(P in n){var K=n[P];if(n.hasOwnProperty(P)&&K!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":R=K;default:l.hasOwnProperty(P)||Ie(e,t,P,null,l,K)}}for(var H in l){var P=l[H];if(K=n[H],l.hasOwnProperty(H)&&(P!=null||K!=null))switch(H){case"type":f=P;break;case"name":c=P;break;case"checked":k=P;break;case"defaultChecked":F=P;break;case"value":g=P;break;case"defaultValue":b=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(o(137,t));break;default:P!==K&&Ie(e,t,H,P,l,K)}}js(e,g,b,R,k,F,f,c);return;case"select":P=g=b=H=null;for(f in n)if(R=n[f],n.hasOwnProperty(f)&&R!=null)switch(f){case"value":break;case"multiple":P=R;default:l.hasOwnProperty(f)||Ie(e,t,f,null,l,R)}for(c in l)if(f=l[c],R=n[c],l.hasOwnProperty(c)&&(f!=null||R!=null))switch(c){case"value":H=f;break;case"defaultValue":b=f;break;case"multiple":g=f;default:f!==R&&Ie(e,t,c,f,l,R)}t=b,n=g,l=P,H!=null?Wa(e,!!n,H,!1):!!l!=!!n&&(t!=null?Wa(e,!!n,t,!0):Wa(e,!!n,n?[]:"",!1));return;case"textarea":P=H=null;for(b in n)if(c=n[b],n.hasOwnProperty(b)&&c!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ie(e,t,b,null,l,c)}for(g in l)if(c=l[g],f=n[g],l.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":H=c;break;case"defaultValue":P=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:c!==f&&Ie(e,t,g,c,l,f)}xd(e,H,P);return;case"option":for(var ae in n)H=n[ae],n.hasOwnProperty(ae)&&H!=null&&!l.hasOwnProperty(ae)&&(ae==="selected"?e.selected=!1:Ie(e,t,ae,null,l,H));for(R in l)H=l[R],P=n[R],l.hasOwnProperty(R)&&H!==P&&(H!=null||P!=null)&&(R==="selected"?e.selected=H&&typeof H!="function"&&typeof H!="symbol":Ie(e,t,R,H,l,P));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in n)H=n[pe],n.hasOwnProperty(pe)&&H!=null&&!l.hasOwnProperty(pe)&&Ie(e,t,pe,null,l,H);for(k in l)if(H=l[k],P=n[k],l.hasOwnProperty(k)&&H!==P&&(H!=null||P!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(o(137,t));break;default:Ie(e,t,k,H,l,P)}return;default:if(ks(t)){for(var Pe in n)H=n[Pe],n.hasOwnProperty(Pe)&&H!==void 0&&!l.hasOwnProperty(Pe)&&Cu(e,t,Pe,void 0,l,H);for(F in l)H=l[F],P=n[F],!l.hasOwnProperty(F)||H===P||H===void 0&&P===void 0||Cu(e,t,F,H,l,P);return}}for(var L in n)H=n[L],n.hasOwnProperty(L)&&H!=null&&!l.hasOwnProperty(L)&&Ie(e,t,L,null,l,H);for(K in l)H=l[K],P=n[K],!l.hasOwnProperty(K)||H===P||H==null&&P==null||Ie(e,t,K,H,l,P)}function Tm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function QS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var c=n[l],f=c.transferSize,g=c.initiatorType,b=c.duration;if(f&&b&&Tm(g)){for(g=0,b=c.responseEnd,l+=1;l<n.length;l++){var R=n[l],k=R.startTime;if(k>b)break;var F=R.transferSize,K=R.initiatorType;F&&Tm(K)&&(R=R.responseEnd,g+=F*(R<b?1:(b-k)/(R-k)))}if(--l,t+=8*(f+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Tu=null,Eu=null;function ho(e){return e.nodeType===9?e:e.ownerDocument}function Em(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Am(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Au(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wu=null;function $S(){var e=window.event;return e&&e.type==="popstate"?e===wu?!1:(wu=e,!0):(wu=null,!1)}var wm=typeof setTimeout=="function"?setTimeout:void 0,ZS=typeof clearTimeout=="function"?clearTimeout:void 0,Rm=typeof Promise=="function"?Promise:void 0,WS=typeof queueMicrotask=="function"?queueMicrotask:typeof Rm<"u"?function(e){return Rm.resolve(null).then(e).catch(JS)}:wm;function JS(e){setTimeout(function(){throw e})}function ia(e){return e==="head"}function _m(e,t){var n=t,l=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(c),Ni(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")kl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,kl(n);for(var f=n.firstChild;f;){var g=f.nextSibling,b=f.nodeName;f[el]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||n.removeChild(f),f=g}}else n==="body"&&kl(e.ownerDocument.body);n=c}while(n);Ni(t)}function Om(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function Ru(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ru(n),Ds(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function eb(e,t,n,l){for(;e.nodeType===1;){var c=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[el])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Yt(e.nextSibling),e===null)break}return null}function tb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Yt(e.nextSibling),e===null))return null;return e}function Nm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Yt(e.nextSibling),e===null))return null;return e}function _u(e){return e.data==="$?"||e.data==="$~"}function Ou(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function nb(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Nu=null;function Mm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Yt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Dm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Lm(e,t,n){switch(t=ho(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function kl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ds(e)}var Kt=new Map,jm=new Set;function mo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var jn=q.d;q.d={f:ab,r:ib,D:lb,C:rb,L:ob,m:sb,X:ub,S:cb,M:fb};function ab(){var e=jn.f(),t=lo();return e||t}function ib(e){var t=Qa(e);t!==null&&t.tag===5&&t.type==="form"?Zp(t):jn.r(e)}var Ri=typeof document>"u"?null:document;function zm(e,t,n){var l=Ri;if(l&&typeof t=="string"&&t){var c=Pt(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),jm.has(c)||(jm.add(c),e={rel:e,crossOrigin:n,href:t},l.querySelector(c)===null&&(t=l.createElement("link"),ft(t,"link",e),lt(t),l.head.appendChild(t)))}}function lb(e){jn.D(e),zm("dns-prefetch",e,null)}function rb(e,t){jn.C(e,t),zm("preconnect",e,t)}function ob(e,t,n){jn.L(e,t,n);var l=Ri;if(l&&e&&t){var c='link[rel="preload"][as="'+Pt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+Pt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+Pt(n.imageSizes)+'"]')):c+='[href="'+Pt(e)+'"]';var f=c;switch(t){case"style":f=_i(e);break;case"script":f=Oi(e)}Kt.has(f)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Kt.set(f,e),l.querySelector(c)!==null||t==="style"&&l.querySelector(Hl(f))||t==="script"&&l.querySelector(Il(f))||(t=l.createElement("link"),ft(t,"link",e),lt(t),l.head.appendChild(t)))}}function sb(e,t){jn.m(e,t);var n=Ri;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Pt(l)+'"][href="'+Pt(e)+'"]',f=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Oi(e)}if(!Kt.has(f)&&(e=y({rel:"modulepreload",href:e},t),Kt.set(f,e),n.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Il(f)))return}l=n.createElement("link"),ft(l,"link",e),lt(l),n.head.appendChild(l)}}}function cb(e,t,n){jn.S(e,t,n);var l=Ri;if(l&&e){var c=$a(l).hoistableStyles,f=_i(e);t=t||"default";var g=c.get(f);if(!g){var b={loading:0,preload:null};if(g=l.querySelector(Hl(f)))b.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Kt.get(f))&&Mu(e,n);var R=g=l.createElement("link");lt(R),ft(R,"link",e),R._p=new Promise(function(k,F){R.onload=k,R.onerror=F}),R.addEventListener("load",function(){b.loading|=1}),R.addEventListener("error",function(){b.loading|=2}),b.loading|=4,go(g,t,l)}g={type:"stylesheet",instance:g,count:1,state:b},c.set(f,g)}}}function ub(e,t){jn.X(e,t);var n=Ri;if(n&&e){var l=$a(n).hoistableScripts,c=Oi(e),f=l.get(c);f||(f=n.querySelector(Il(c)),f||(e=y({src:e,async:!0},t),(t=Kt.get(c))&&Du(e,t),f=n.createElement("script"),lt(f),ft(f,"link",e),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(c,f))}}function fb(e,t){jn.M(e,t);var n=Ri;if(n&&e){var l=$a(n).hoistableScripts,c=Oi(e),f=l.get(c);f||(f=n.querySelector(Il(c)),f||(e=y({src:e,async:!0,type:"module"},t),(t=Kt.get(c))&&Du(e,t),f=n.createElement("script"),lt(f),ft(f,"link",e),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(c,f))}}function km(e,t,n,l){var c=(c=me.current)?mo(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=_i(n.href),n=$a(c).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=_i(n.href);var f=$a(c).hoistableStyles,g=f.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=c.querySelector(Hl(e)))&&!f._p&&(g.instance=f,g.state.loading=5),Kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Kt.set(e,n),f||db(c,e,n,g.state))),t&&l===null)throw Error(o(528,""));return g}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Oi(n),n=$a(c).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function _i(e){return'href="'+Pt(e)+'"'}function Hl(e){return'link[rel="stylesheet"]['+e+"]"}function Hm(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function db(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ft(t,"link",n),lt(t),e.head.appendChild(t))}function Oi(e){return'[src="'+Pt(e)+'"]'}function Il(e){return"script[async]"+e}function Im(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Pt(n.href)+'"]');if(l)return t.instance=l,lt(l),l;var c=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),lt(l),ft(l,"style",c),go(l,n.precedence,e),t.instance=l;case"stylesheet":c=_i(n.href);var f=e.querySelector(Hl(c));if(f)return t.state.loading|=4,t.instance=f,lt(f),f;l=Hm(n),(c=Kt.get(c))&&Mu(l,c),f=(e.ownerDocument||e).createElement("link"),lt(f);var g=f;return g._p=new Promise(function(b,R){g.onload=b,g.onerror=R}),ft(f,"link",l),t.state.loading|=4,go(f,n.precedence,e),t.instance=f;case"script":return f=Oi(n.src),(c=e.querySelector(Il(f)))?(t.instance=c,lt(c),c):(l=n,(c=Kt.get(f))&&(l=y({},n),Du(l,c)),e=e.ownerDocument||e,c=e.createElement("script"),lt(c),ft(c,"link",l),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,go(l,n.precedence,e));return t.instance}function go(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,f=c,g=0;g<l.length;g++){var b=l[g];if(b.dataset.precedence===t)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Mu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Du(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var yo=null;function Pm(e,t,n){if(yo===null){var l=new Map,c=yo=new Map;c.set(n,l)}else c=yo,l=c.get(n),l||(l=new Map,c.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),c=0;c<n.length;c++){var f=n[c];if(!(f[el]||f[ot]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(t)||"";g=e+g;var b=l.get(g);b?b.push(f):l.set(g,[f])}}return l}function Um(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function pb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Bm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hb(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=_i(l.href),f=t.querySelector(Hl(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=vo.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=f,lt(f);return}f=t.ownerDocument||t,l=Hm(l),(c=Kt.get(c))&&Mu(l,c),f=f.createElement("link"),lt(f);var g=f;g._p=new Promise(function(b,R){g.onload=b,g.onerror=R}),ft(f,"link",l),n.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=vo.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Lu=0;function mb(e,t){return e.stylesheets&&e.count===0&&So(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&So(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+t);0<e.imgBytes&&Lu===0&&(Lu=62500*QS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&So(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Lu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(c)}}:null}function vo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)So(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xo=null;function So(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xo=new Map,t.forEach(gb,e),xo=null,vo.call(e))}function gb(e,t){if(!(t.state.loading&4)){var n=xo.get(e);if(n)var l=n.get(null);else{n=new Map,xo.set(e,n);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(n.set(g.dataset.precedence,g),l=g)}l&&n.set(null,l)}c=t.instance,g=c.getAttribute("data-precedence"),f=n.get(g)||l,f===l&&n.set(null,c),n.set(g,c),this.count++,l=vo.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Pl={$$typeof:j,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function yb(e,t,n,l,c,f,g,b,R){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_s(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_s(0),this.hiddenUpdates=_s(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function Gm(e,t,n,l,c,f,g,b,R,k,F,K){return e=new yb(e,t,n,g,R,k,F,K,b),t=1,f===!0&&(t|=24),f=Ot(3,null,null,t),e.current=f,f.stateNode=e,t=dc(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:l,isDehydrated:n,cache:t},gc(f),e}function Vm(e){return e?(e=ri,e):ri}function Fm(e,t,n,l,c,f){c=Vm(c),l.context===null?l.context=c:l.pendingContext=c,l=Kn(t),l.payload={element:n},f=f===void 0?null:f,f!==null&&(l.callback=f),n=Xn(e,l,t),n!==null&&(Et(n,e,t),yl(n,e,t))}function qm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ju(e,t){qm(e,t),(e=e.alternate)&&qm(e,t)}function Ym(e){if(e.tag===13||e.tag===31){var t=wa(e,67108864);t!==null&&Et(t,e,67108864),ju(e,67108864)}}function Km(e){if(e.tag===13||e.tag===31){var t=jt();t=Os(t);var n=wa(e,t);n!==null&&Et(n,e,t),ju(e,t)}}var bo=!0;function vb(e,t,n,l){var c=D.T;D.T=null;var f=q.p;try{q.p=2,zu(e,t,n,l)}finally{q.p=f,D.T=c}}function xb(e,t,n,l){var c=D.T;D.T=null;var f=q.p;try{q.p=8,zu(e,t,n,l)}finally{q.p=f,D.T=c}}function zu(e,t,n,l){if(bo){var c=ku(l);if(c===null)bu(e,t,l,Co,n),Qm(e,l);else if(bb(c,e,t,n,l))l.stopPropagation();else if(Qm(e,l),t&4&&-1<Sb.indexOf(e)){for(;c!==null;){var f=Qa(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=ba(f.pendingLanes);if(g!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var R=1<<31-Rt(g);b.entanglements[1]|=R,g&=~R}sn(f),(Le&6)===0&&(ao=At()+500,Ll(0))}}break;case 31:case 13:b=wa(f,2),b!==null&&Et(b,f,2),lo(),ju(f,2)}if(f=ku(l),f===null&&bu(e,t,l,Co,n),f===c)break;c=f}c!==null&&l.stopPropagation()}else bu(e,t,l,null,n)}}function ku(e){return e=Is(e),Hu(e)}var Co=null;function Hu(e){if(Co=null,e=Xa(e),e!==null){var t=u(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=d(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Co=e,null}function Xm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(lx()){case nd:return 2;case ad:return 8;case ur:case rx:return 32;case id:return 268435456;default:return 32}default:return 32}}var Iu=!1,la=null,ra=null,oa=null,Ul=new Map,Bl=new Map,sa=[],Sb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qm(e,t){switch(e){case"focusin":case"focusout":la=null;break;case"dragenter":case"dragleave":ra=null;break;case"mouseover":case"mouseout":oa=null;break;case"pointerover":case"pointerout":Ul.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bl.delete(t.pointerId)}}function Gl(e,t,n,l,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:f,targetContainers:[c]},t!==null&&(t=Qa(t),t!==null&&Ym(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function bb(e,t,n,l,c){switch(t){case"focusin":return la=Gl(la,e,t,n,l,c),!0;case"dragenter":return ra=Gl(ra,e,t,n,l,c),!0;case"mouseover":return oa=Gl(oa,e,t,n,l,c),!0;case"pointerover":var f=c.pointerId;return Ul.set(f,Gl(Ul.get(f)||null,e,t,n,l,c)),!0;case"gotpointercapture":return f=c.pointerId,Bl.set(f,Gl(Bl.get(f)||null,e,t,n,l,c)),!0}return!1}function $m(e){var t=Xa(e.target);if(t!==null){var n=u(t);if(n!==null){if(t=n.tag,t===13){if(t=d(n),t!==null){e.blockedOn=t,ud(e.priority,function(){Km(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,ud(e.priority,function(){Km(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function To(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ku(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Hs=l,n.target.dispatchEvent(l),Hs=null}else return t=Qa(n),t!==null&&Ym(t),e.blockedOn=n,!1;t.shift()}return!0}function Zm(e,t,n){To(e)&&n.delete(t)}function Cb(){Iu=!1,la!==null&&To(la)&&(la=null),ra!==null&&To(ra)&&(ra=null),oa!==null&&To(oa)&&(oa=null),Ul.forEach(Zm),Bl.forEach(Zm)}function Eo(e,t){e.blockedOn===t&&(e.blockedOn=null,Iu||(Iu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Cb)))}var Ao=null;function Wm(e){Ao!==e&&(Ao=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Ao===e&&(Ao=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],c=e[t+2];if(typeof l!="function"){if(Hu(l||n)===null)continue;break}var f=Qa(n);f!==null&&(e.splice(t,3),t-=3,kc(f,{pending:!0,data:c,method:n.method,action:l},l,c))}}))}function Ni(e){function t(R){return Eo(R,e)}la!==null&&Eo(la,e),ra!==null&&Eo(ra,e),oa!==null&&Eo(oa,e),Ul.forEach(t),Bl.forEach(t);for(var n=0;n<sa.length;n++){var l=sa[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<sa.length&&(n=sa[0],n.blockedOn===null);)$m(n),n.blockedOn===null&&sa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var c=n[l],f=n[l+1],g=c[vt]||null;if(typeof f=="function")g||Wm(n);else if(g){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[vt]||null)b=g.formAction;else if(Hu(c)!==null)continue}else b=g.action;typeof b=="function"?n[l+1]=b:(n.splice(l,3),l-=3),Wm(n)}}}function Jm(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function Pu(e){this._internalRoot=e}wo.prototype.render=Pu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,l=jt();Fm(n,l,e,t,null,null)},wo.prototype.unmount=Pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fm(e.current,2,null,e,null,null),lo(),t[Ka]=null}};function wo(e){this._internalRoot=e}wo.prototype.unstable_scheduleHydration=function(e){if(e){var t=cd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sa.length&&t!==0&&t<sa[n].priority;n++);sa.splice(n,0,e),n===0&&$m(e)}};var eg=i.version;if(eg!=="19.2.3")throw Error(o(527,eg,"19.2.3"));q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Tb={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{Zi=Ro.inject(Tb),wt=Ro}catch{}}return Fl.createRoot=function(e,t){if(!s(e))throw Error(o(299));var n=!1,l="",c=oh,f=sh,g=ch;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError)),t=Gm(e,1,!1,null,null,n,l,null,c,f,g,Jm),e[Ka]=t.current,Su(e),new Pu(t)},Fl.hydrateRoot=function(e,t,n){if(!s(e))throw Error(o(299));var l=!1,c="",f=oh,g=sh,b=ch,R=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(g=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(R=n.formState)),t=Gm(e,1,!0,t,n??null,l,c,R,f,g,b,Jm),t.context=Vm(null),n=t.current,l=jt(),l=Os(l),c=Kn(l),c.callback=null,Xn(n,c,l),n=l,t.current.lanes=n,Ji(t,n),sn(t),e[Ka]=t.current,Su(e),new wo(t)},Fl.version="19.2.3",Fl}var ug;function Lb(){if(ug)return Gu.exports;ug=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Gu.exports=Db(),Gu.exports}var jb=Lb();var fg="popstate";function dg(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function zb(a={}){function i(o,s){let u=s.state?.masked,{pathname:d,search:p,hash:h}=u||o.location;return pf("",{pathname:d,search:p,hash:h},s.state&&s.state.usr||null,s.state&&s.state.key||"default",u?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function r(o,s){return typeof s=="string"?s:Jl(s)}return Hb(i,r,null,a)}function qe(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function en(a,i){if(!a){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function kb(){return Math.random().toString(36).substring(2,10)}function pg(a,i){return{usr:a.state,key:a.key,idx:i,masked:a.unstable_mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function pf(a,i,r=null,o,s){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof i=="string"?Bi(i):i,state:r,key:i&&i.key||o||kb(),unstable_mask:s}}function Jl({pathname:a="/",search:i="",hash:r=""}){return i&&i!=="?"&&(a+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(a+=r.charAt(0)==="#"?r:"#"+r),a}function Bi(a){let i={};if(a){let r=a.indexOf("#");r>=0&&(i.hash=a.substring(r),a=a.substring(0,r));let o=a.indexOf("?");o>=0&&(i.search=a.substring(o),a=a.substring(0,o)),a&&(i.pathname=a)}return i}function Hb(a,i,r,o={}){let{window:s=document.defaultView,v5Compat:u=!1}=o,d=s.history,p="POP",h=null,m=x();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function x(){return(d.state||{idx:null}).idx}function y(){p="POP";let A=x(),M=A==null?null:A-m;m=A,h&&h({action:p,location:C.location,delta:M})}function T(A,M){p="PUSH";let N=dg(A)?A:pf(C.location,A,M);m=x()+1;let j=pg(N,m),U=C.createHref(N.unstable_mask||N);try{d.pushState(j,"",U)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;s.location.assign(U)}u&&h&&h({action:p,location:C.location,delta:1})}function E(A,M){p="REPLACE";let N=dg(A)?A:pf(C.location,A,M);m=x();let j=pg(N,m),U=C.createHref(N.unstable_mask||N);d.replaceState(j,"",U),u&&h&&h({action:p,location:C.location,delta:0})}function w(A){return Ib(A)}let C={get action(){return p},get location(){return a(s,d)},listen(A){if(h)throw new Error("A history only accepts one active listener");return s.addEventListener(fg,y),h=A,()=>{s.removeEventListener(fg,y),h=null}},createHref(A){return i(s,A)},createURL:w,encodeLocation(A){let M=w(A);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:T,replace:E,go(A){return d.go(A)}};return C}function Ib(a,i=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),qe(r,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Jl(a);return o=o.replace(/ $/,"%20"),!i&&o.startsWith("//")&&(o=r+o),new URL(o,r)}function wy(a,i,r="/"){return Pb(a,i,r,!1)}function Pb(a,i,r,o){let s=typeof i=="string"?Bi(i):i,u=kn(s.pathname||"/",r);if(u==null)return null;let d=Ry(a);Ub(d);let p=null;for(let h=0;p==null&&h<d.length;++h){let m=Zb(u);p=Qb(d[h],m,o)}return p}function Ry(a,i=[],r=[],o="",s=!1){let u=(d,p,h=s,m)=>{let x={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(o)&&h)return;qe(x.relativePath.startsWith(o),`Absolute route path "${x.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(o.length)}let y=dn([o,x.relativePath]),T=r.concat(x);d.children&&d.children.length>0&&(qe(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Ry(d.children,i,T,y,h)),!(d.path==null&&!d.index)&&i.push({path:y,score:Kb(y,d.index),routesMeta:T})};return a.forEach((d,p)=>{if(d.path===""||!d.path?.includes("?"))u(d,p);else for(let h of _y(d.path))u(d,p,!0,h)}),i}function _y(a){let i=a.split("/");if(i.length===0)return[];let[r,...o]=i,s=r.endsWith("?"),u=r.replace(/\?$/,"");if(o.length===0)return s?[u,""]:[u];let d=_y(o.join("/")),p=[];return p.push(...d.map(h=>h===""?u:[u,h].join("/"))),s&&p.push(...d),p.map(h=>a.startsWith("/")&&h===""?"/":h)}function Ub(a){a.sort((i,r)=>i.score!==r.score?r.score-i.score:Xb(i.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}var Bb=/^:[\w-]+$/,Gb=3,Vb=2,Fb=1,qb=10,Yb=-2,hg=a=>a==="*";function Kb(a,i){let r=a.split("/"),o=r.length;return r.some(hg)&&(o+=Yb),i&&(o+=Vb),r.filter(s=>!hg(s)).reduce((s,u)=>s+(Bb.test(u)?Gb:u===""?Fb:qb),o)}function Xb(a,i){return a.length===i.length&&a.slice(0,-1).every((o,s)=>o===i[s])?a[a.length-1]-i[i.length-1]:0}function Qb(a,i,r=!1){let{routesMeta:o}=a,s={},u="/",d=[];for(let p=0;p<o.length;++p){let h=o[p],m=p===o.length-1,x=u==="/"?i:i.slice(u.length)||"/",y=Vo({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},x),T=h.route;if(!y&&m&&r&&!o[o.length-1].route.index&&(y=Vo({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},x)),!y)return null;Object.assign(s,y.params),d.push({params:s,pathname:dn([u,y.pathname]),pathnameBase:t1(dn([u,y.pathnameBase])),route:T}),y.pathnameBase!=="/"&&(u=dn([u,y.pathnameBase]))}return d}function Vo(a,i){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[r,o]=$b(a.path,a.caseSensitive,a.end),s=i.match(r);if(!s)return null;let u=s[0],d=u.replace(/(.)\/+$/,"$1"),p=s.slice(1);return{params:o.reduce((m,{paramName:x,isOptional:y},T)=>{if(x==="*"){let w=p[T]||"";d=u.slice(0,u.length-w.length).replace(/(.)\/+$/,"$1")}const E=p[T];return y&&!E?m[x]=void 0:m[x]=(E||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:d,pattern:a}}function $b(a,i=!1,r=!0){en(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let o=[],s="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,h,m,x)=>{if(o.push({paramName:p,isOptional:h!=null}),h){let y=x.charAt(m+d.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(o.push({paramName:"*"}),s+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":a!==""&&a!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,i?void 0:"i"),o]}function Zb(a){try{return a.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return en(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),a}}function kn(a,i){if(i==="/")return a;if(!a.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,o=a.charAt(r);return o&&o!=="/"?null:a.slice(r)||"/"}var Wb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Jb(a,i="/"){let{pathname:r,search:o="",hash:s=""}=typeof a=="string"?Bi(a):a,u;return r?(r=r.replace(/\/\/+/g,"/"),r.startsWith("/")?u=mg(r.substring(1),"/"):u=mg(r,i)):u=i,{pathname:u,search:n1(o),hash:a1(s)}}function mg(a,i){let r=i.replace(/\/+$/,"").split("/");return a.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function Yu(a,i,r,o){return`Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function e1(a){return a.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function Lf(a){let i=e1(a);return i.map((r,o)=>o===i.length-1?r.pathname:r.pathnameBase)}function ls(a,i,r,o=!1){let s;typeof a=="string"?s=Bi(a):(s={...a},qe(!s.pathname||!s.pathname.includes("?"),Yu("?","pathname","search",s)),qe(!s.pathname||!s.pathname.includes("#"),Yu("#","pathname","hash",s)),qe(!s.search||!s.search.includes("#"),Yu("#","search","hash",s)));let u=a===""||s.pathname==="",d=u?"/":s.pathname,p;if(d==null)p=r;else{let y=i.length-1;if(!o&&d.startsWith("..")){let T=d.split("/");for(;T[0]==="..";)T.shift(),y-=1;s.pathname=T.join("/")}p=y>=0?i[y]:"/"}let h=Jb(s,p),m=d&&d!=="/"&&d.endsWith("/"),x=(u||d===".")&&r.endsWith("/");return!h.pathname.endsWith("/")&&(m||x)&&(h.pathname+="/"),h}var dn=a=>a.join("/").replace(/\/\/+/g,"/"),t1=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),n1=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,a1=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,i1=class{constructor(a,i,r,o=!1){this.status=a,this.statusText=i||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function l1(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function r1(a){return a.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Oy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ny(a,i){let r=a;if(typeof r!="string"||!Wb.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let o=r,s=!1;if(Oy)try{let u=new URL(window.location.href),d=r.startsWith("//")?new URL(u.protocol+r):new URL(r),p=kn(d.pathname,i);d.origin===u.origin&&p!=null?r=p+d.search+d.hash:s=!0}catch{en(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:s,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var My=["POST","PUT","PATCH","DELETE"];new Set(My);var o1=["GET",...My];new Set(o1);var Gi=v.createContext(null);Gi.displayName="DataRouter";var rs=v.createContext(null);rs.displayName="DataRouterState";var s1=v.createContext(!1),Dy=v.createContext({isTransitioning:!1});Dy.displayName="ViewTransition";var c1=v.createContext(new Map);c1.displayName="Fetchers";var u1=v.createContext(null);u1.displayName="Await";var Ht=v.createContext(null);Ht.displayName="Navigation";var ir=v.createContext(null);ir.displayName="Location";var an=v.createContext({outlet:null,matches:[],isDataRoute:!1});an.displayName="Route";var jf=v.createContext(null);jf.displayName="RouteError";var Ly="REACT_ROUTER_ERROR",f1="REDIRECT",d1="ROUTE_ERROR_RESPONSE";function p1(a){if(a.startsWith(`${Ly}:${f1}:{`))try{let i=JSON.parse(a.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function h1(a){if(a.startsWith(`${Ly}:${d1}:{`))try{let i=JSON.parse(a.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new i1(i.status,i.statusText,i.data)}catch{}}function m1(a,{relative:i}={}){qe(Vi(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=v.useContext(Ht),{hash:s,pathname:u,search:d}=lr(a,{relative:i}),p=u;return r!=="/"&&(p=u==="/"?r:dn([r,u])),o.createHref({pathname:p,search:d,hash:s})}function Vi(){return v.useContext(ir)!=null}function mn(){return qe(Vi(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(ir).location}var jy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function zy(a){v.useContext(Ht).static||v.useLayoutEffect(a)}function ky(){let{isDataRoute:a}=v.useContext(an);return a?_1():g1()}function g1(){qe(Vi(),"useNavigate() may be used only in the context of a <Router> component.");let a=v.useContext(Gi),{basename:i,navigator:r}=v.useContext(Ht),{matches:o}=v.useContext(an),{pathname:s}=mn(),u=JSON.stringify(Lf(o)),d=v.useRef(!1);return zy(()=>{d.current=!0}),v.useCallback((h,m={})=>{if(en(d.current,jy),!d.current)return;if(typeof h=="number"){r.go(h);return}let x=ls(h,JSON.parse(u),s,m.relative==="path");a==null&&i!=="/"&&(x.pathname=x.pathname==="/"?i:dn([i,x.pathname])),(m.replace?r.replace:r.push)(x,m.state,m)},[i,r,u,s,a])}v.createContext(null);function Hy(){let{matches:a}=v.useContext(an),i=a[a.length-1];return i?i.params:{}}function lr(a,{relative:i}={}){let{matches:r}=v.useContext(an),{pathname:o}=mn(),s=JSON.stringify(Lf(r));return v.useMemo(()=>ls(a,JSON.parse(s),o,i==="path"),[a,s,o,i])}function y1(a,i){return Iy(a,i)}function Iy(a,i,r){qe(Vi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=v.useContext(Ht),{matches:s}=v.useContext(an),u=s[s.length-1],d=u?u.params:{},p=u?u.pathname:"/",h=u?u.pathnameBase:"/",m=u&&u.route;{let A=m&&m.path||"";Uy(p,!m||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let x=mn(),y;if(i){let A=typeof i=="string"?Bi(i):i;qe(h==="/"||A.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${A.pathname}" was given in the \`location\` prop.`),y=A}else y=x;let T=y.pathname||"/",E=T;if(h!=="/"){let A=h.replace(/^\//,"").split("/");E="/"+T.replace(/^\//,"").split("/").slice(A.length).join("/")}let w=wy(a,{pathname:E});en(m||w!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),en(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=C1(w&&w.map(A=>Object.assign({},A,{params:Object.assign({},d,A.params),pathname:dn([h,o.encodeLocation?o.encodeLocation(A.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?h:dn([h,o.encodeLocation?o.encodeLocation(A.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathnameBase])})),s,r);return i&&C?v.createElement(ir.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...y},navigationType:"POP"}},C):C}function v1(){let a=R1(),i=l1(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),r=a instanceof Error?a.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},u={padding:"2px 4px",backgroundColor:o},d=null;return console.error("Error handled by React Router default ErrorBoundary:",a),d=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:u},"ErrorBoundary")," or"," ",v.createElement("code",{style:u},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},i),r?v.createElement("pre",{style:s},r):null,d)}var x1=v.createElement(v1,null),Py=class extends v.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,i){return i.location!==a.location||i.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:i.error,location:i.location,revalidation:a.revalidation||i.revalidation}}componentDidCatch(a,i){this.props.onError?this.props.onError(a,i):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const r=h1(a.digest);r&&(a=r)}let i=a!==void 0?v.createElement(an.Provider,{value:this.props.routeContext},v.createElement(jf.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?v.createElement(S1,{error:a},i):i}};Py.contextType=s1;var Ku=new WeakMap;function S1({children:a,error:i}){let{basename:r}=v.useContext(Ht);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let o=p1(i.digest);if(o){let s=Ku.get(i);if(s)throw s;let u=Ny(o.location,r);if(Oy&&!Ku.get(i))if(u.isExternal||o.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:o.replace}));throw Ku.set(i,d),d}return v.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return a}function b1({routeContext:a,match:i,children:r}){let o=v.useContext(Gi);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),v.createElement(an.Provider,{value:a},r)}function C1(a,i=[],r){let o=r?.state;if(a==null){if(!o)return null;if(o.errors)a=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)a=o.matches;else return null}let s=a,u=o?.errors;if(u!=null){let x=s.findIndex(y=>y.route.id&&u?.[y.route.id]!==void 0);qe(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),s=s.slice(0,Math.min(s.length,x+1))}let d=!1,p=-1;if(r&&o){d=o.renderFallback;for(let x=0;x<s.length;x++){let y=s[x];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(p=x),y.route.id){let{loaderData:T,errors:E}=o,w=y.route.loader&&!T.hasOwnProperty(y.route.id)&&(!E||E[y.route.id]===void 0);if(y.route.lazy||w){r.isStatic&&(d=!0),p>=0?s=s.slice(0,p+1):s=[s[0]];break}}}}let h=r?.onError,m=o&&h?(x,y)=>{h(x,{location:o.location,params:o.matches?.[0]?.params??{},unstable_pattern:r1(o.matches),errorInfo:y})}:void 0;return s.reduceRight((x,y,T)=>{let E,w=!1,C=null,A=null;o&&(E=u&&y.route.id?u[y.route.id]:void 0,C=y.route.errorElement||x1,d&&(p<0&&T===0?(Uy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,A=null):p===T&&(w=!0,A=y.route.hydrateFallbackElement||null)));let M=i.concat(s.slice(0,T+1)),N=()=>{let j;return E?j=C:w?j=A:y.route.Component?j=v.createElement(y.route.Component,null):y.route.element?j=y.route.element:j=x,v.createElement(b1,{match:y,routeContext:{outlet:x,matches:M,isDataRoute:o!=null},children:j})};return o&&(y.route.ErrorBoundary||y.route.errorElement||T===0)?v.createElement(Py,{location:o.location,revalidation:o.revalidation,component:C,error:E,children:N(),routeContext:{outlet:null,matches:M,isDataRoute:!0},onError:m}):N()},null)}function zf(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function T1(a){let i=v.useContext(Gi);return qe(i,zf(a)),i}function E1(a){let i=v.useContext(rs);return qe(i,zf(a)),i}function A1(a){let i=v.useContext(an);return qe(i,zf(a)),i}function kf(a){let i=A1(a),r=i.matches[i.matches.length-1];return qe(r.route.id,`${a} can only be used on routes that contain a unique "id"`),r.route.id}function w1(){return kf("useRouteId")}function R1(){let a=v.useContext(jf),i=E1("useRouteError"),r=kf("useRouteError");return a!==void 0?a:i.errors?.[r]}function _1(){let{router:a}=T1("useNavigate"),i=kf("useNavigate"),r=v.useRef(!1);return zy(()=>{r.current=!0}),v.useCallback(async(s,u={})=>{en(r.current,jy),r.current&&(typeof s=="number"?await a.navigate(s):await a.navigate(s,{fromRouteId:i,...u}))},[a,i])}var gg={};function Uy(a,i,r){!i&&!gg[a]&&(gg[a]=!0,en(!1,r))}v.memo(O1);function O1({routes:a,future:i,state:r,isStatic:o,onError:s}){return Iy(a,void 0,{state:r,isStatic:o,onError:s})}function By({to:a,replace:i,state:r,relative:o}){qe(Vi(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=v.useContext(Ht);en(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=v.useContext(an),{pathname:d}=mn(),p=ky(),h=ls(a,Lf(u),d,o==="path"),m=JSON.stringify(h);return v.useEffect(()=>{p(JSON.parse(m),{replace:i,state:r,relative:o})},[p,m,o,i,r]),null}function Xl(a){qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function N1({basename:a="/",children:i=null,location:r,navigationType:o="POP",navigator:s,static:u=!1,unstable_useTransitions:d}){qe(!Vi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=a.replace(/^\/*/,"/"),h=v.useMemo(()=>({basename:p,navigator:s,static:u,unstable_useTransitions:d,future:{}}),[p,s,u,d]);typeof r=="string"&&(r=Bi(r));let{pathname:m="/",search:x="",hash:y="",state:T=null,key:E="default",unstable_mask:w}=r,C=v.useMemo(()=>{let A=kn(m,p);return A==null?null:{location:{pathname:A,search:x,hash:y,state:T,key:E,unstable_mask:w},navigationType:o}},[p,m,x,y,T,E,o,w]);return en(C!=null,`<Router basename="${p}"> is not able to match the URL "${m}${x}${y}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:v.createElement(Ht.Provider,{value:h},v.createElement(ir.Provider,{children:i,value:C}))}function M1({children:a,location:i}){return y1(hf(a),i)}function hf(a,i=[]){let r=[];return v.Children.forEach(a,(o,s)=>{if(!v.isValidElement(o))return;let u=[...i,s];if(o.type===v.Fragment){r.push.apply(r,hf(o.props.children,u));return}qe(o.type===Xl,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),qe(!o.props.index||!o.props.children,"An index route cannot have child routes.");let d={id:o.props.id||u.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=hf(o.props.children,u)),r.push(d)}),r}var Io="get",Po="application/x-www-form-urlencoded";function os(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function D1(a){return os(a)&&a.tagName.toLowerCase()==="button"}function L1(a){return os(a)&&a.tagName.toLowerCase()==="form"}function j1(a){return os(a)&&a.tagName.toLowerCase()==="input"}function z1(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function k1(a,i){return a.button===0&&(!i||i==="_self")&&!z1(a)}var _o=null;function H1(){if(_o===null)try{new FormData(document.createElement("form"),0),_o=!1}catch{_o=!0}return _o}var I1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xu(a){return a!=null&&!I1.has(a)?(en(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Po}"`),null):a}function P1(a,i){let r,o,s,u,d;if(L1(a)){let p=a.getAttribute("action");o=p?kn(p,i):null,r=a.getAttribute("method")||Io,s=Xu(a.getAttribute("enctype"))||Po,u=new FormData(a)}else if(D1(a)||j1(a)&&(a.type==="submit"||a.type==="image")){let p=a.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=a.getAttribute("formaction")||p.getAttribute("action");if(o=h?kn(h,i):null,r=a.getAttribute("formmethod")||p.getAttribute("method")||Io,s=Xu(a.getAttribute("formenctype"))||Xu(p.getAttribute("enctype"))||Po,u=new FormData(p,a),!H1()){let{name:m,type:x,value:y}=a;if(x==="image"){let T=m?`${m}.`:"";u.append(`${T}x`,"0"),u.append(`${T}y`,"0")}else m&&u.append(m,y)}}else{if(os(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Io,o=null,s=Po,d=a}return u&&s==="text/plain"&&(d=u,u=void 0),{action:o,method:r.toLowerCase(),encType:s,formData:u,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Hf(a,i){if(a===!1||a===null||typeof a>"u")throw new Error(i)}function U1(a,i,r,o){let s=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return r?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${o}`:s.pathname=`${s.pathname}.${o}`:s.pathname==="/"?s.pathname=`_root.${o}`:i&&kn(s.pathname,i)==="/"?s.pathname=`${i.replace(/\/$/,"")}/_root.${o}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${o}`,s}async function B1(a,i){if(a.id in i)return i[a.id];try{let r=await import(a.module);return i[a.id]=r,r}catch(r){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function G1(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function V1(a,i,r){let o=await Promise.all(a.map(async s=>{let u=i.routes[s.route.id];if(u){let d=await B1(u,r);return d.links?d.links():[]}return[]}));return K1(o.flat(1).filter(G1).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function yg(a,i,r,o,s,u){let d=(h,m)=>r[m]?h.route.id!==r[m].route.id:!0,p=(h,m)=>r[m].pathname!==h.pathname||r[m].route.path?.endsWith("*")&&r[m].params["*"]!==h.params["*"];return u==="assets"?i.filter((h,m)=>d(h,m)||p(h,m)):u==="data"?i.filter((h,m)=>{let x=o.routes[h.route.id];if(!x||!x.hasLoader)return!1;if(d(h,m)||p(h,m))return!0;if(h.route.shouldRevalidate){let y=h.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function F1(a,i,{includeHydrateFallback:r}={}){return q1(a.map(o=>{let s=i.routes[o.route.id];if(!s)return[];let u=[s.module];return s.clientActionModule&&(u=u.concat(s.clientActionModule)),s.clientLoaderModule&&(u=u.concat(s.clientLoaderModule)),r&&s.hydrateFallbackModule&&(u=u.concat(s.hydrateFallbackModule)),s.imports&&(u=u.concat(s.imports)),u}).flat(1))}function q1(a){return[...new Set(a)]}function Y1(a){let i={},r=Object.keys(a).sort();for(let o of r)i[o]=a[o];return i}function K1(a,i){let r=new Set;return new Set(i),a.reduce((o,s)=>{let u=JSON.stringify(Y1(s));return r.has(u)||(r.add(u),o.push({key:u,link:s})),o},[])}function Gy(){let a=v.useContext(Gi);return Hf(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function X1(){let a=v.useContext(rs);return Hf(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var If=v.createContext(void 0);If.displayName="FrameworkContext";function Vy(){let a=v.useContext(If);return Hf(a,"You must render this element inside a <HydratedRouter> element"),a}function Q1(a,i){let r=v.useContext(If),[o,s]=v.useState(!1),[u,d]=v.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:m,onMouseLeave:x,onTouchStart:y}=i,T=v.useRef(null);v.useEffect(()=>{if(a==="render"&&d(!0),a==="viewport"){let C=M=>{M.forEach(N=>{d(N.isIntersecting)})},A=new IntersectionObserver(C,{threshold:.5});return T.current&&A.observe(T.current),()=>{A.disconnect()}}},[a]),v.useEffect(()=>{if(o){let C=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(C)}}},[o]);let E=()=>{s(!0)},w=()=>{s(!1),d(!1)};return r?a!=="intent"?[u,T,{}]:[u,T,{onFocus:ql(p,E),onBlur:ql(h,w),onMouseEnter:ql(m,E),onMouseLeave:ql(x,w),onTouchStart:ql(y,E)}]:[!1,T,{}]}function ql(a,i){return r=>{a&&a(r),r.defaultPrevented||i(r)}}function $1({page:a,...i}){let{router:r}=Gy(),o=v.useMemo(()=>wy(r.routes,a,r.basename),[r.routes,a,r.basename]);return o?v.createElement(W1,{page:a,matches:o,...i}):null}function Z1(a){let{manifest:i,routeModules:r}=Vy(),[o,s]=v.useState([]);return v.useEffect(()=>{let u=!1;return V1(a,i,r).then(d=>{u||s(d)}),()=>{u=!0}},[a,i,r]),o}function W1({page:a,matches:i,...r}){let o=mn(),{future:s,manifest:u,routeModules:d}=Vy(),{basename:p}=Gy(),{loaderData:h,matches:m}=X1(),x=v.useMemo(()=>yg(a,i,m,u,o,"data"),[a,i,m,u,o]),y=v.useMemo(()=>yg(a,i,m,u,o,"assets"),[a,i,m,u,o]),T=v.useMemo(()=>{if(a===o.pathname+o.search+o.hash)return[];let C=new Set,A=!1;if(i.forEach(N=>{let j=u.routes[N.route.id];!j||!j.hasLoader||(!x.some(U=>U.route.id===N.route.id)&&N.route.id in h&&d[N.route.id]?.shouldRevalidate||j.hasClientLoader?A=!0:C.add(N.route.id))}),C.size===0)return[];let M=U1(a,p,s.unstable_trailingSlashAwareDataRequests,"data");return A&&C.size>0&&M.searchParams.set("_routes",i.filter(N=>C.has(N.route.id)).map(N=>N.route.id).join(",")),[M.pathname+M.search]},[p,s.unstable_trailingSlashAwareDataRequests,h,o,u,x,i,a,d]),E=v.useMemo(()=>F1(y,u),[y,u]),w=Z1(y);return v.createElement(v.Fragment,null,T.map(C=>v.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...r})),E.map(C=>v.createElement("link",{key:C,rel:"modulepreload",href:C,...r})),w.map(({key:C,link:A})=>v.createElement("link",{key:C,nonce:r.nonce,...A,crossOrigin:A.crossOrigin??r.crossOrigin})))}function J1(...a){return i=>{a.forEach(r=>{typeof r=="function"?r(i):r!=null&&(r.current=i)})}}var eC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{eC&&(window.__reactRouterVersion="7.13.1")}catch{}function tC({basename:a,children:i,unstable_useTransitions:r,window:o}){let s=v.useRef();s.current==null&&(s.current=zb({window:o,v5Compat:!0}));let u=s.current,[d,p]=v.useState({action:u.action,location:u.location}),h=v.useCallback(m=>{r===!1?p(m):v.startTransition(()=>p(m))},[r]);return v.useLayoutEffect(()=>u.listen(h),[u,h]),v.createElement(N1,{basename:a,children:i,location:d.location,navigationType:d.action,navigator:u,unstable_useTransitions:r})}var Fy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ze=v.forwardRef(function({onClick:i,discover:r="render",prefetch:o="none",relative:s,reloadDocument:u,replace:d,unstable_mask:p,state:h,target:m,to:x,preventScrollReset:y,viewTransition:T,unstable_defaultShouldRevalidate:E,...w},C){let{basename:A,navigator:M,unstable_useTransitions:N}=v.useContext(Ht),j=typeof x=="string"&&Fy.test(x),U=Ny(x,A);x=U.to;let G=m1(x,{relative:s}),Z=mn(),B=null;if(p){let ue=ls(p,[],Z.unstable_mask?Z.unstable_mask.pathname:"/",!0);A!=="/"&&(ue.pathname=ue.pathname==="/"?A:dn([A,ue.pathname])),B=M.createHref(ue)}let[X,J,ee]=Q1(o,w),ne=lC(x,{replace:d,unstable_mask:p,state:h,target:m,preventScrollReset:y,relative:s,viewTransition:T,unstable_defaultShouldRevalidate:E,unstable_useTransitions:N});function te(ue){i&&i(ue),ue.defaultPrevented||ne(ue)}let oe=!(U.isExternal||u),re=v.createElement("a",{...w,...ee,href:(oe?B:void 0)||U.absoluteURL||G,onClick:oe?te:i,ref:J1(C,J),target:m,"data-discover":!j&&r==="render"?"true":void 0});return X&&!j?v.createElement(v.Fragment,null,re,v.createElement($1,{page:G})):re});Ze.displayName="Link";var nC=v.forwardRef(function({"aria-current":i="page",caseSensitive:r=!1,className:o="",end:s=!1,style:u,to:d,viewTransition:p,children:h,...m},x){let y=lr(d,{relative:m.relative}),T=mn(),E=v.useContext(rs),{navigator:w,basename:C}=v.useContext(Ht),A=E!=null&&uC(y)&&p===!0,M=w.encodeLocation?w.encodeLocation(y).pathname:y.pathname,N=T.pathname,j=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;r||(N=N.toLowerCase(),j=j?j.toLowerCase():null,M=M.toLowerCase()),j&&C&&(j=kn(j,C)||j);const U=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let G=N===M||!s&&N.startsWith(M)&&N.charAt(U)==="/",Z=j!=null&&(j===M||!s&&j.startsWith(M)&&j.charAt(M.length)==="/"),B={isActive:G,isPending:Z,isTransitioning:A},X=G?i:void 0,J;typeof o=="function"?J=o(B):J=[o,G?"active":null,Z?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let ee=typeof u=="function"?u(B):u;return v.createElement(Ze,{...m,"aria-current":X,className:J,ref:x,style:ee,to:d,viewTransition:p},typeof h=="function"?h(B):h)});nC.displayName="NavLink";var aC=v.forwardRef(({discover:a="render",fetcherKey:i,navigate:r,reloadDocument:o,replace:s,state:u,method:d=Io,action:p,onSubmit:h,relative:m,preventScrollReset:x,viewTransition:y,unstable_defaultShouldRevalidate:T,...E},w)=>{let{unstable_useTransitions:C}=v.useContext(Ht),A=sC(),M=cC(p,{relative:m}),N=d.toLowerCase()==="get"?"get":"post",j=typeof p=="string"&&Fy.test(p),U=G=>{if(h&&h(G),G.defaultPrevented)return;G.preventDefault();let Z=G.nativeEvent.submitter,B=Z?.getAttribute("formmethod")||d,X=()=>A(Z||G.currentTarget,{fetcherKey:i,method:B,navigate:r,replace:s,state:u,relative:m,preventScrollReset:x,viewTransition:y,unstable_defaultShouldRevalidate:T});C&&r!==!1?v.startTransition(()=>X()):X()};return v.createElement("form",{ref:w,method:N,action:M,onSubmit:o?h:U,...E,"data-discover":!j&&a==="render"?"true":void 0})});aC.displayName="Form";function iC(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qy(a){let i=v.useContext(Gi);return qe(i,iC(a)),i}function lC(a,{target:i,replace:r,unstable_mask:o,state:s,preventScrollReset:u,relative:d,viewTransition:p,unstable_defaultShouldRevalidate:h,unstable_useTransitions:m}={}){let x=ky(),y=mn(),T=lr(a,{relative:d});return v.useCallback(E=>{if(k1(E,i)){E.preventDefault();let w=r!==void 0?r:Jl(y)===Jl(T),C=()=>x(a,{replace:w,unstable_mask:o,state:s,preventScrollReset:u,relative:d,viewTransition:p,unstable_defaultShouldRevalidate:h});m?v.startTransition(()=>C()):C()}},[y,x,T,r,o,s,i,a,u,d,p,h,m])}var rC=0,oC=()=>`__${String(++rC)}__`;function sC(){let{router:a}=qy("useSubmit"),{basename:i}=v.useContext(Ht),r=w1(),o=a.fetch,s=a.navigate;return v.useCallback(async(u,d={})=>{let{action:p,method:h,encType:m,formData:x,body:y}=P1(u,i);if(d.navigate===!1){let T=d.fetcherKey||oC();await o(T,r,d.action||p,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:x,body:y,formMethod:d.method||h,formEncType:d.encType||m,flushSync:d.flushSync})}else await s(d.action||p,{unstable_defaultShouldRevalidate:d.unstable_defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:x,body:y,formMethod:d.method||h,formEncType:d.encType||m,replace:d.replace,state:d.state,fromRouteId:r,flushSync:d.flushSync,viewTransition:d.viewTransition})},[o,s,i,r])}function cC(a,{relative:i}={}){let{basename:r}=v.useContext(Ht),o=v.useContext(an);qe(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),u={...lr(a||".",{relative:i})},d=mn();if(a==null){u.search=d.search;let p=new URLSearchParams(u.search),h=p.getAll("index");if(h.some(x=>x==="")){p.delete("index"),h.filter(y=>y).forEach(y=>p.append("index",y));let x=p.toString();u.search=x?`?${x}`:""}}return(!a||a===".")&&s.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(u.pathname=u.pathname==="/"?r:dn([r,u.pathname])),Jl(u)}function uC(a,{relative:i}={}){let r=v.useContext(Dy);qe(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=qy("useViewTransitionState"),s=lr(a,{relative:i});if(!r.isTransitioning)return!1;let u=kn(r.currentLocation.pathname,o)||r.currentLocation.pathname,d=kn(r.nextLocation.pathname,o)||r.nextLocation.pathname;return Vo(s.pathname,d)!=null||Vo(s.pathname,u)!=null}var rr=Ay();const fC=Ey(rr),ge=a=>typeof a=="string",Yl=()=>{let a,i;const r=new Promise((o,s)=>{a=o,i=s});return r.resolve=a,r.reject=i,r},vg=a=>a==null?"":""+a,dC=(a,i,r)=>{a.forEach(o=>{i[o]&&(r[o]=i[o])})},pC=/###/g,xg=a=>a&&a.indexOf("###")>-1?a.replace(pC,"."):a,Sg=a=>!a||ge(a),$l=(a,i,r)=>{const o=ge(i)?i.split("."):i;let s=0;for(;s<o.length-1;){if(Sg(a))return{};const u=xg(o[s]);!a[u]&&r&&(a[u]=new r),Object.prototype.hasOwnProperty.call(a,u)?a=a[u]:a={},++s}return Sg(a)?{}:{obj:a,k:xg(o[s])}},bg=(a,i,r)=>{const{obj:o,k:s}=$l(a,i,Object);if(o!==void 0||i.length===1){o[s]=r;return}let u=i[i.length-1],d=i.slice(0,i.length-1),p=$l(a,d,Object);for(;p.obj===void 0&&d.length;)u=`${d[d.length-1]}.${u}`,d=d.slice(0,d.length-1),p=$l(a,d,Object),p?.obj&&typeof p.obj[`${p.k}.${u}`]<"u"&&(p.obj=void 0);p.obj[`${p.k}.${u}`]=r},hC=(a,i,r,o)=>{const{obj:s,k:u}=$l(a,i,Object);s[u]=s[u]||[],s[u].push(r)},Fo=(a,i)=>{const{obj:r,k:o}=$l(a,i);if(r&&Object.prototype.hasOwnProperty.call(r,o))return r[o]},mC=(a,i,r)=>{const o=Fo(a,r);return o!==void 0?o:Fo(i,r)},Yy=(a,i,r)=>{for(const o in i)o!=="__proto__"&&o!=="constructor"&&(o in a?ge(a[o])||a[o]instanceof String||ge(i[o])||i[o]instanceof String?r&&(a[o]=i[o]):Yy(a[o],i[o],r):a[o]=i[o]);return a},Pa=a=>a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var gC={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const yC=a=>ge(a)?a.replace(/[&<>"'\/]/g,i=>gC[i]):a;class vC{constructor(i){this.capacity=i,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(i){const r=this.regExpMap.get(i);if(r!==void 0)return r;const o=new RegExp(i);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(i,o),this.regExpQueue.push(i),o}}const xC=[" ",",","?","!",";"],SC=new vC(20),bC=(a,i,r)=>{i=i||"",r=r||"";const o=xC.filter(d=>i.indexOf(d)<0&&r.indexOf(d)<0);if(o.length===0)return!0;const s=SC.getRegExp(`(${o.map(d=>d==="?"?"\\?":d).join("|")})`);let u=!s.test(a);if(!u){const d=a.indexOf(r);d>0&&!s.test(a.substring(0,d))&&(u=!0)}return u},mf=(a,i,r=".")=>{if(!a)return;if(a[i])return Object.prototype.hasOwnProperty.call(a,i)?a[i]:void 0;const o=i.split(r);let s=a;for(let u=0;u<o.length;){if(!s||typeof s!="object")return;let d,p="";for(let h=u;h<o.length;++h)if(h!==u&&(p+=r),p+=o[h],d=s[p],d!==void 0){if(["string","number","boolean"].indexOf(typeof d)>-1&&h<o.length-1)continue;u+=h-u+1;break}s=d}return s},er=a=>a?.replace(/_/g,"-"),CC={type:"logger",log(a){this.output("log",a)},warn(a){this.output("warn",a)},error(a){this.output("error",a)},output(a,i){console?.[a]?.apply?.(console,i)}};class qo{constructor(i,r={}){this.init(i,r)}init(i,r={}){this.prefix=r.prefix||"i18next:",this.logger=i||CC,this.options=r,this.debug=r.debug}log(...i){return this.forward(i,"log","",!0)}warn(...i){return this.forward(i,"warn","",!0)}error(...i){return this.forward(i,"error","")}deprecate(...i){return this.forward(i,"warn","WARNING DEPRECATED: ",!0)}forward(i,r,o,s){return s&&!this.debug?null:(ge(i[0])&&(i[0]=`${o}${this.prefix} ${i[0]}`),this.logger[r](i))}create(i){return new qo(this.logger,{prefix:`${this.prefix}:${i}:`,...this.options})}clone(i){return i=i||this.options,i.prefix=i.prefix||this.prefix,new qo(this.logger,i)}}var un=new qo;class ss{constructor(){this.observers={}}on(i,r){return i.split(" ").forEach(o=>{this.observers[o]||(this.observers[o]=new Map);const s=this.observers[o].get(r)||0;this.observers[o].set(r,s+1)}),this}off(i,r){if(this.observers[i]){if(!r){delete this.observers[i];return}this.observers[i].delete(r)}}emit(i,...r){this.observers[i]&&Array.from(this.observers[i].entries()).forEach(([s,u])=>{for(let d=0;d<u;d++)s(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([s,u])=>{for(let d=0;d<u;d++)s.apply(s,[i,...r])})}}class Cg extends ss{constructor(i,r={ns:["translation"],defaultNS:"translation"}){super(),this.data=i||{},this.options=r,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(i){this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}removeNamespaces(i){const r=this.options.ns.indexOf(i);r>-1&&this.options.ns.splice(r,1)}getResource(i,r,o,s={}){const u=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,d=s.ignoreJSONStructure!==void 0?s.ignoreJSONStructure:this.options.ignoreJSONStructure;let p;i.indexOf(".")>-1?p=i.split("."):(p=[i,r],o&&(Array.isArray(o)?p.push(...o):ge(o)&&u?p.push(...o.split(u)):p.push(o)));const h=Fo(this.data,p);return!h&&!r&&!o&&i.indexOf(".")>-1&&(i=p[0],r=p[1],o=p.slice(2).join(".")),h||!d||!ge(o)?h:mf(this.data?.[i]?.[r],o,u)}addResource(i,r,o,s,u={silent:!1}){const d=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator;let p=[i,r];o&&(p=p.concat(d?o.split(d):o)),i.indexOf(".")>-1&&(p=i.split("."),s=r,r=p[1]),this.addNamespaces(r),bg(this.data,p,s),u.silent||this.emit("added",i,r,o,s)}addResources(i,r,o,s={silent:!1}){for(const u in o)(ge(o[u])||Array.isArray(o[u]))&&this.addResource(i,r,u,o[u],{silent:!0});s.silent||this.emit("added",i,r,o)}addResourceBundle(i,r,o,s,u,d={silent:!1,skipCopy:!1}){let p=[i,r];i.indexOf(".")>-1&&(p=i.split("."),s=o,o=r,r=p[1]),this.addNamespaces(r);let h=Fo(this.data,p)||{};d.skipCopy||(o=JSON.parse(JSON.stringify(o))),s?Yy(h,o,u):h={...h,...o},bg(this.data,p,h),d.silent||this.emit("added",i,r,o)}removeResourceBundle(i,r){this.hasResourceBundle(i,r)&&delete this.data[i][r],this.removeNamespaces(r),this.emit("removed",i,r)}hasResourceBundle(i,r){return this.getResource(i,r)!==void 0}getResourceBundle(i,r){return r||(r=this.options.defaultNS),this.getResource(i,r)}getDataByLanguage(i){return this.data[i]}hasLanguageSomeTranslations(i){const r=this.getDataByLanguage(i);return!!(r&&Object.keys(r)||[]).find(s=>r[s]&&Object.keys(r[s]).length>0)}toJSON(){return this.data}}var Ky={processors:{},addPostProcessor(a){this.processors[a.name]=a},handle(a,i,r,o,s){return a.forEach(u=>{i=this.processors[u]?.process(i,r,o,s)??i}),i}};const Xy=Symbol("i18next/PATH_KEY");function TC(){const a=[],i=Object.create(null);let r;return i.get=(o,s)=>(r?.revoke?.(),s===Xy?a:(a.push(s),r=Proxy.revocable(o,i),r.proxy)),Proxy.revocable(Object.create(null),i).proxy}function Zl(a,i){const{[Xy]:r}=a(TC()),o=i?.keySeparator??".",s=i?.nsSeparator??":";if(r.length>1&&s){const u=i?.ns;if((u?Array.isArray(u)?u:[u]:[]).includes(r[0]))return`${r[0]}${s}${r.slice(1).join(o)}`}return r.join(o)}const Tg={},Qu=a=>!ge(a)&&typeof a!="boolean"&&typeof a!="number";class Yo extends ss{constructor(i,r={}){super(),dC(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],i,this),this.options=r,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=un.create("translator")}changeLanguage(i){i&&(this.language=i)}exists(i,r={interpolation:{}}){const o={...r};if(i==null)return!1;const s=this.resolve(i,o);if(s?.res===void 0)return!1;const u=Qu(s.res);return!(o.returnObjects===!1&&u)}extractFromKey(i,r){let o=r.nsSeparator!==void 0?r.nsSeparator:this.options.nsSeparator;o===void 0&&(o=":");const s=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let u=r.ns||this.options.defaultNS||[];const d=o&&i.indexOf(o)>-1,p=!this.options.userDefinedKeySeparator&&!r.keySeparator&&!this.options.userDefinedNsSeparator&&!r.nsSeparator&&!bC(i,o,s);if(d&&!p){const h=i.match(this.interpolator.nestingRegexp);if(h&&h.length>0)return{key:i,namespaces:ge(u)?[u]:u};const m=i.split(o);(o!==s||o===s&&this.options.ns.indexOf(m[0])>-1)&&(u=m.shift()),i=m.join(s)}return{key:i,namespaces:ge(u)?[u]:u}}translate(i,r,o){let s=typeof r=="object"?{...r}:r;if(typeof s!="object"&&this.options.overloadTranslationOptionHandler&&(s=this.options.overloadTranslationOptionHandler(arguments)),typeof s=="object"&&(s={...s}),s||(s={}),i==null)return"";typeof i=="function"&&(i=Zl(i,{...this.options,...s})),Array.isArray(i)||(i=[String(i)]),i=i.map(oe=>typeof oe=="function"?Zl(oe,{...this.options,...s}):String(oe));const u=s.returnDetails!==void 0?s.returnDetails:this.options.returnDetails,d=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator,{key:p,namespaces:h}=this.extractFromKey(i[i.length-1],s),m=h[h.length-1];let x=s.nsSeparator!==void 0?s.nsSeparator:this.options.nsSeparator;x===void 0&&(x=":");const y=s.lng||this.language,T=s.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(y?.toLowerCase()==="cimode")return T?u?{res:`${m}${x}${p}`,usedKey:p,exactUsedKey:p,usedLng:y,usedNS:m,usedParams:this.getUsedParamsDetails(s)}:`${m}${x}${p}`:u?{res:p,usedKey:p,exactUsedKey:p,usedLng:y,usedNS:m,usedParams:this.getUsedParamsDetails(s)}:p;const E=this.resolve(i,s);let w=E?.res;const C=E?.usedKey||p,A=E?.exactUsedKey||p,M=["[object Number]","[object Function]","[object RegExp]"],N=s.joinArrays!==void 0?s.joinArrays:this.options.joinArrays,j=!this.i18nFormat||this.i18nFormat.handleAsObject,U=s.count!==void 0&&!ge(s.count),G=Yo.hasDefaultValue(s),Z=U?this.pluralResolver.getSuffix(y,s.count,s):"",B=s.ordinal&&U?this.pluralResolver.getSuffix(y,s.count,{ordinal:!1}):"",X=U&&!s.ordinal&&s.count===0,J=X&&s[`defaultValue${this.options.pluralSeparator}zero`]||s[`defaultValue${Z}`]||s[`defaultValue${B}`]||s.defaultValue;let ee=w;j&&!w&&G&&(ee=J);const ne=Qu(ee),te=Object.prototype.toString.apply(ee);if(j&&ee&&ne&&M.indexOf(te)<0&&!(ge(N)&&Array.isArray(ee))){if(!s.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const oe=this.options.returnedObjectHandler?this.options.returnedObjectHandler(C,ee,{...s,ns:h}):`key '${p} (${this.language})' returned an object instead of string.`;return u?(E.res=oe,E.usedParams=this.getUsedParamsDetails(s),E):oe}if(d){const oe=Array.isArray(ee),re=oe?[]:{},ue=oe?A:C;for(const D in ee)if(Object.prototype.hasOwnProperty.call(ee,D)){const q=`${ue}${d}${D}`;G&&!w?re[D]=this.translate(q,{...s,defaultValue:Qu(J)?J[D]:void 0,joinArrays:!1,ns:h}):re[D]=this.translate(q,{...s,joinArrays:!1,ns:h}),re[D]===q&&(re[D]=ee[D])}w=re}}else if(j&&ge(N)&&Array.isArray(w))w=w.join(N),w&&(w=this.extendTranslation(w,i,s,o));else{let oe=!1,re=!1;!this.isValidLookup(w)&&G&&(oe=!0,w=J),this.isValidLookup(w)||(re=!0,w=p);const D=(s.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&re?void 0:w,q=G&&J!==w&&this.options.updateMissing;if(re||oe||q){if(this.logger.log(q?"updateKey":"missingKey",y,m,p,q?J:w),d){const _=this.resolve(p,{...s,keySeparator:!1});_&&_.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let I=[];const se=this.languageUtils.getFallbackCodes(this.options.fallbackLng,s.lng||this.language);if(this.options.saveMissingTo==="fallback"&&se&&se[0])for(let _=0;_<se.length;_++)I.push(se[_]);else this.options.saveMissingTo==="all"?I=this.languageUtils.toResolveHierarchy(s.lng||this.language):I.push(s.lng||this.language);const he=(_,V,Q)=>{const W=G&&Q!==w?Q:D;this.options.missingKeyHandler?this.options.missingKeyHandler(_,m,V,W,q,s):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(_,m,V,W,q,s),this.emit("missingKey",_,m,V,w)};this.options.saveMissing&&(this.options.saveMissingPlurals&&U?I.forEach(_=>{const V=this.pluralResolver.getSuffixes(_,s);X&&s[`defaultValue${this.options.pluralSeparator}zero`]&&V.indexOf(`${this.options.pluralSeparator}zero`)<0&&V.push(`${this.options.pluralSeparator}zero`),V.forEach(Q=>{he([_],p+Q,s[`defaultValue${Q}`]||J)})}):he(I,p,J))}w=this.extendTranslation(w,i,s,E,o),re&&w===p&&this.options.appendNamespaceToMissingKey&&(w=`${m}${x}${p}`),(re||oe)&&this.options.parseMissingKeyHandler&&(w=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${m}${x}${p}`:p,oe?w:void 0,s))}return u?(E.res=w,E.usedParams=this.getUsedParamsDetails(s),E):w}extendTranslation(i,r,o,s,u){if(this.i18nFormat?.parse)i=this.i18nFormat.parse(i,{...this.options.interpolation.defaultVariables,...o},o.lng||this.language||s.usedLng,s.usedNS,s.usedKey,{resolved:s});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init({...o,interpolation:{...this.options.interpolation,...o.interpolation}});const h=ge(i)&&(o?.interpolation?.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let m;if(h){const y=i.match(this.interpolator.nestingRegexp);m=y&&y.length}let x=o.replace&&!ge(o.replace)?o.replace:o;if(this.options.interpolation.defaultVariables&&(x={...this.options.interpolation.defaultVariables,...x}),i=this.interpolator.interpolate(i,x,o.lng||this.language||s.usedLng,o),h){const y=i.match(this.interpolator.nestingRegexp),T=y&&y.length;m<T&&(o.nest=!1)}!o.lng&&s&&s.res&&(o.lng=this.language||s.usedLng),o.nest!==!1&&(i=this.interpolator.nest(i,(...y)=>u?.[0]===y[0]&&!o.context?(this.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${r[0]}`),null):this.translate(...y,r),o)),o.interpolation&&this.interpolator.reset()}const d=o.postProcess||this.options.postProcess,p=ge(d)?[d]:d;return i!=null&&p?.length&&o.applyPostProcessor!==!1&&(i=Ky.handle(p,i,r,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...s,usedParams:this.getUsedParamsDetails(o)},...o}:o,this)),i}resolve(i,r={}){let o,s,u,d,p;return ge(i)&&(i=[i]),Array.isArray(i)&&(i=i.map(h=>typeof h=="function"?Zl(h,{...this.options,...r}):h)),i.forEach(h=>{if(this.isValidLookup(o))return;const m=this.extractFromKey(h,r),x=m.key;s=x;let y=m.namespaces;this.options.fallbackNS&&(y=y.concat(this.options.fallbackNS));const T=r.count!==void 0&&!ge(r.count),E=T&&!r.ordinal&&r.count===0,w=r.context!==void 0&&(ge(r.context)||typeof r.context=="number")&&r.context!=="",C=r.lngs?r.lngs:this.languageUtils.toResolveHierarchy(r.lng||this.language,r.fallbackLng);y.forEach(A=>{this.isValidLookup(o)||(p=A,!Tg[`${C[0]}-${A}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(p)&&(Tg[`${C[0]}-${A}`]=!0,this.logger.warn(`key "${s}" for languages "${C.join(", ")}" won't get resolved as namespace "${p}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),C.forEach(M=>{if(this.isValidLookup(o))return;d=M;const N=[x];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(N,x,M,A,r);else{let U;T&&(U=this.pluralResolver.getSuffix(M,r.count,r));const G=`${this.options.pluralSeparator}zero`,Z=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(T&&(r.ordinal&&U.indexOf(Z)===0&&N.push(x+U.replace(Z,this.options.pluralSeparator)),N.push(x+U),E&&N.push(x+G)),w){const B=`${x}${this.options.contextSeparator||"_"}${r.context}`;N.push(B),T&&(r.ordinal&&U.indexOf(Z)===0&&N.push(B+U.replace(Z,this.options.pluralSeparator)),N.push(B+U),E&&N.push(B+G))}}let j;for(;j=N.pop();)this.isValidLookup(o)||(u=j,o=this.getResource(M,A,j,r))}))})}),{res:o,usedKey:s,exactUsedKey:u,usedLng:d,usedNS:p}}isValidLookup(i){return i!==void 0&&!(!this.options.returnNull&&i===null)&&!(!this.options.returnEmptyString&&i==="")}getResource(i,r,o,s={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(i,r,o,s):this.resourceStore.getResource(i,r,o,s)}getUsedParamsDetails(i={}){const r=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=i.replace&&!ge(i.replace);let s=o?i.replace:i;if(o&&typeof i.count<"u"&&(s.count=i.count),this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),!o){s={...s};for(const u of r)delete s[u]}return s}static hasDefaultValue(i){const r="defaultValue";for(const o in i)if(Object.prototype.hasOwnProperty.call(i,o)&&r===o.substring(0,r.length)&&i[o]!==void 0)return!0;return!1}}class Eg{constructor(i){this.options=i,this.supportedLngs=this.options.supportedLngs||!1,this.logger=un.create("languageUtils")}getScriptPartFromCode(i){if(i=er(i),!i||i.indexOf("-")<0)return null;const r=i.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}getLanguagePartFromCode(i){if(i=er(i),!i||i.indexOf("-")<0)return i;const r=i.split("-");return this.formatLanguageCode(r[0])}formatLanguageCode(i){if(ge(i)&&i.indexOf("-")>-1){let r;try{r=Intl.getCanonicalLocales(i)[0]}catch{}return r&&this.options.lowerCaseLng&&(r=r.toLowerCase()),r||(this.options.lowerCaseLng?i.toLowerCase():i)}return this.options.cleanCode||this.options.lowerCaseLng?i.toLowerCase():i}isSupportedCode(i){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(i=this.getLanguagePartFromCode(i)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(i)>-1}getBestMatchFromCodes(i){if(!i)return null;let r;return i.forEach(o=>{if(r)return;const s=this.formatLanguageCode(o);(!this.options.supportedLngs||this.isSupportedCode(s))&&(r=s)}),!r&&this.options.supportedLngs&&i.forEach(o=>{if(r)return;const s=this.getScriptPartFromCode(o);if(this.isSupportedCode(s))return r=s;const u=this.getLanguagePartFromCode(o);if(this.isSupportedCode(u))return r=u;r=this.options.supportedLngs.find(d=>{if(d===u)return d;if(!(d.indexOf("-")<0&&u.indexOf("-")<0)&&(d.indexOf("-")>0&&u.indexOf("-")<0&&d.substring(0,d.indexOf("-"))===u||d.indexOf(u)===0&&u.length>1))return d})}),r||(r=this.getFallbackCodes(this.options.fallbackLng)[0]),r}getFallbackCodes(i,r){if(!i)return[];if(typeof i=="function"&&(i=i(r)),ge(i)&&(i=[i]),Array.isArray(i))return i;if(!r)return i.default||[];let o=i[r];return o||(o=i[this.getScriptPartFromCode(r)]),o||(o=i[this.formatLanguageCode(r)]),o||(o=i[this.getLanguagePartFromCode(r)]),o||(o=i.default),o||[]}toResolveHierarchy(i,r){const o=this.getFallbackCodes((r===!1?[]:r)||this.options.fallbackLng||[],i),s=[],u=d=>{d&&(this.isSupportedCode(d)?s.push(d):this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`))};return ge(i)&&(i.indexOf("-")>-1||i.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&u(this.formatLanguageCode(i)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&u(this.getScriptPartFromCode(i)),this.options.load!=="currentOnly"&&u(this.getLanguagePartFromCode(i))):ge(i)&&u(this.formatLanguageCode(i)),o.forEach(d=>{s.indexOf(d)<0&&u(this.formatLanguageCode(d))}),s}}const Ag={zero:0,one:1,two:2,few:3,many:4,other:5},wg={select:a=>a===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class EC{constructor(i,r={}){this.languageUtils=i,this.options=r,this.logger=un.create("pluralResolver"),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(i,r={}){const o=er(i==="dev"?"en":i),s=r.ordinal?"ordinal":"cardinal",u=JSON.stringify({cleanedCode:o,type:s});if(u in this.pluralRulesCache)return this.pluralRulesCache[u];let d;try{d=new Intl.PluralRules(o,{type:s})}catch{if(typeof Intl>"u")return this.logger.error("No Intl support, please use an Intl polyfill!"),wg;if(!i.match(/-|_/))return wg;const h=this.languageUtils.getLanguagePartFromCode(i);d=this.getRule(h,r)}return this.pluralRulesCache[u]=d,d}needsPlural(i,r={}){let o=this.getRule(i,r);return o||(o=this.getRule("dev",r)),o?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(i,r,o={}){return this.getSuffixes(i,o).map(s=>`${r}${s}`)}getSuffixes(i,r={}){let o=this.getRule(i,r);return o||(o=this.getRule("dev",r)),o?o.resolvedOptions().pluralCategories.sort((s,u)=>Ag[s]-Ag[u]).map(s=>`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${s}`):[]}getSuffix(i,r,o={}){const s=this.getRule(i,o);return s?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${s.select(r)}`:(this.logger.warn(`no plural rule found for: ${i}`),this.getSuffix("dev",r,o))}}const Rg=(a,i,r,o=".",s=!0)=>{let u=mC(a,i,r);return!u&&s&&ge(r)&&(u=mf(a,r,o),u===void 0&&(u=mf(i,r,o))),u},$u=a=>a.replace(/\$/g,"$$$$");class _g{constructor(i={}){this.logger=un.create("interpolator"),this.options=i,this.format=i?.interpolation?.format||(r=>r),this.init(i)}init(i={}){i.interpolation||(i.interpolation={escapeValue:!0});const{escape:r,escapeValue:o,useRawValueToEscape:s,prefix:u,prefixEscaped:d,suffix:p,suffixEscaped:h,formatSeparator:m,unescapeSuffix:x,unescapePrefix:y,nestingPrefix:T,nestingPrefixEscaped:E,nestingSuffix:w,nestingSuffixEscaped:C,nestingOptionsSeparator:A,maxReplaces:M,alwaysFormat:N}=i.interpolation;this.escape=r!==void 0?r:yC,this.escapeValue=o!==void 0?o:!0,this.useRawValueToEscape=s!==void 0?s:!1,this.prefix=u?Pa(u):d||"{{",this.suffix=p?Pa(p):h||"}}",this.formatSeparator=m||",",this.unescapePrefix=x?"":y||"-",this.unescapeSuffix=this.unescapePrefix?"":x||"",this.nestingPrefix=T?Pa(T):E||Pa("$t("),this.nestingSuffix=w?Pa(w):C||Pa(")"),this.nestingOptionsSeparator=A||",",this.maxReplaces=M||1e3,this.alwaysFormat=N!==void 0?N:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const i=(r,o)=>r?.source===o?(r.lastIndex=0,r):new RegExp(o,"g");this.regexp=i(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=i(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=i(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(i,r,o,s){let u,d,p;const h=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},m=E=>{if(E.indexOf(this.formatSeparator)<0){const M=Rg(r,h,E,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(M,void 0,o,{...s,...r,interpolationkey:E}):M}const w=E.split(this.formatSeparator),C=w.shift().trim(),A=w.join(this.formatSeparator).trim();return this.format(Rg(r,h,C,this.options.keySeparator,this.options.ignoreJSONStructure),A,o,{...s,...r,interpolationkey:C})};this.resetRegExp();const x=s?.missingInterpolationHandler||this.options.missingInterpolationHandler,y=s?.interpolation?.skipOnVariables!==void 0?s.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:E=>$u(E)},{regex:this.regexp,safeValue:E=>this.escapeValue?$u(this.escape(E)):$u(E)}].forEach(E=>{for(p=0;u=E.regex.exec(i);){const w=u[1].trim();if(d=m(w),d===void 0)if(typeof x=="function"){const A=x(i,u,s);d=ge(A)?A:""}else if(s&&Object.prototype.hasOwnProperty.call(s,w))d="";else if(y){d=u[0];continue}else this.logger.warn(`missed to pass in variable ${w} for interpolating ${i}`),d="";else!ge(d)&&!this.useRawValueToEscape&&(d=vg(d));const C=E.safeValue(d);if(i=i.replace(u[0],C),y?(E.regex.lastIndex+=d.length,E.regex.lastIndex-=u[0].length):E.regex.lastIndex=0,p++,p>=this.maxReplaces)break}}),i}nest(i,r,o={}){let s,u,d;const p=(h,m)=>{const x=this.nestingOptionsSeparator;if(h.indexOf(x)<0)return h;const y=h.split(new RegExp(`${Pa(x)}[ ]*{`));let T=`{${y[1]}`;h=y[0],T=this.interpolate(T,d);const E=T.match(/'/g),w=T.match(/"/g);((E?.length??0)%2===0&&!w||(w?.length??0)%2!==0)&&(T=T.replace(/'/g,'"'));try{d=JSON.parse(T),m&&(d={...m,...d})}catch(C){return this.logger.warn(`failed parsing options string in nesting for key ${h}`,C),`${h}${x}${T}`}return d.defaultValue&&d.defaultValue.indexOf(this.prefix)>-1&&delete d.defaultValue,h};for(;s=this.nestingRegexp.exec(i);){let h=[];d={...o},d=d.replace&&!ge(d.replace)?d.replace:d,d.applyPostProcessor=!1,delete d.defaultValue;const m=/{.*}/.test(s[1])?s[1].lastIndexOf("}")+1:s[1].indexOf(this.formatSeparator);if(m!==-1&&(h=s[1].slice(m).split(this.formatSeparator).map(x=>x.trim()).filter(Boolean),s[1]=s[1].slice(0,m)),u=r(p.call(this,s[1].trim(),d),d),u&&s[0]===i&&!ge(u))return u;ge(u)||(u=vg(u)),u||(this.logger.warn(`missed to resolve ${s[1]} for nesting ${i}`),u=""),h.length&&(u=h.reduce((x,y)=>this.format(x,y,o.lng,{...o,interpolationkey:s[1].trim()}),u.trim())),i=i.replace(s[0],u),this.regexp.lastIndex=0}return i}}const AC=a=>{let i=a.toLowerCase().trim();const r={};if(a.indexOf("(")>-1){const o=a.split("(");i=o[0].toLowerCase().trim();const s=o[1].substring(0,o[1].length-1);i==="currency"&&s.indexOf(":")<0?r.currency||(r.currency=s.trim()):i==="relativetime"&&s.indexOf(":")<0?r.range||(r.range=s.trim()):s.split(";").forEach(d=>{if(d){const[p,...h]=d.split(":"),m=h.join(":").trim().replace(/^'+|'+$/g,""),x=p.trim();r[x]||(r[x]=m),m==="false"&&(r[x]=!1),m==="true"&&(r[x]=!0),isNaN(m)||(r[x]=parseInt(m,10))}})}return{formatName:i,formatOptions:r}},Og=a=>{const i={};return(r,o,s)=>{let u=s;s&&s.interpolationkey&&s.formatParams&&s.formatParams[s.interpolationkey]&&s[s.interpolationkey]&&(u={...u,[s.interpolationkey]:void 0});const d=o+JSON.stringify(u);let p=i[d];return p||(p=a(er(o),s),i[d]=p),p(r)}},wC=a=>(i,r,o)=>a(er(r),o)(i);class RC{constructor(i={}){this.logger=un.create("formatter"),this.options=i,this.init(i)}init(i,r={interpolation:{}}){this.formatSeparator=r.interpolation.formatSeparator||",";const o=r.cacheInBuiltFormats?Og:wC;this.formats={number:o((s,u)=>{const d=new Intl.NumberFormat(s,{...u});return p=>d.format(p)}),currency:o((s,u)=>{const d=new Intl.NumberFormat(s,{...u,style:"currency"});return p=>d.format(p)}),datetime:o((s,u)=>{const d=new Intl.DateTimeFormat(s,{...u});return p=>d.format(p)}),relativetime:o((s,u)=>{const d=new Intl.RelativeTimeFormat(s,{...u});return p=>d.format(p,u.range||"day")}),list:o((s,u)=>{const d=new Intl.ListFormat(s,{...u});return p=>d.format(p)})}}add(i,r){this.formats[i.toLowerCase().trim()]=r}addCached(i,r){this.formats[i.toLowerCase().trim()]=Og(r)}format(i,r,o,s={}){const u=r.split(this.formatSeparator);if(u.length>1&&u[0].indexOf("(")>1&&u[0].indexOf(")")<0&&u.find(p=>p.indexOf(")")>-1)){const p=u.findIndex(h=>h.indexOf(")")>-1);u[0]=[u[0],...u.splice(1,p)].join(this.formatSeparator)}return u.reduce((p,h)=>{const{formatName:m,formatOptions:x}=AC(h);if(this.formats[m]){let y=p;try{const T=s?.formatParams?.[s.interpolationkey]||{},E=T.locale||T.lng||s.locale||s.lng||o;y=this.formats[m](p,E,{...x,...s,...T})}catch(T){this.logger.warn(T)}return y}else this.logger.warn(`there was no format function for ${m}`);return p},i)}}const _C=(a,i)=>{a.pending[i]!==void 0&&(delete a.pending[i],a.pendingCount--)};class OC extends ss{constructor(i,r,o,s={}){super(),this.backend=i,this.store=r,this.services=o,this.languageUtils=o.languageUtils,this.options=s,this.logger=un.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=s.maxParallelReads||10,this.readingCalls=0,this.maxRetries=s.maxRetries>=0?s.maxRetries:5,this.retryTimeout=s.retryTimeout>=1?s.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(o,s.backend,s)}queueLoad(i,r,o,s){const u={},d={},p={},h={};return i.forEach(m=>{let x=!0;r.forEach(y=>{const T=`${m}|${y}`;!o.reload&&this.store.hasResourceBundle(m,y)?this.state[T]=2:this.state[T]<0||(this.state[T]===1?d[T]===void 0&&(d[T]=!0):(this.state[T]=1,x=!1,d[T]===void 0&&(d[T]=!0),u[T]===void 0&&(u[T]=!0),h[y]===void 0&&(h[y]=!0)))}),x||(p[m]=!0)}),(Object.keys(u).length||Object.keys(d).length)&&this.queue.push({pending:d,pendingCount:Object.keys(d).length,loaded:{},errors:[],callback:s}),{toLoad:Object.keys(u),pending:Object.keys(d),toLoadLanguages:Object.keys(p),toLoadNamespaces:Object.keys(h)}}loaded(i,r,o){const s=i.split("|"),u=s[0],d=s[1];r&&this.emit("failedLoading",u,d,r),!r&&o&&this.store.addResourceBundle(u,d,o,void 0,void 0,{skipCopy:!0}),this.state[i]=r?-1:2,r&&o&&(this.state[i]=0);const p={};this.queue.forEach(h=>{hC(h.loaded,[u],d),_C(h,i),r&&h.errors.push(r),h.pendingCount===0&&!h.done&&(Object.keys(h.loaded).forEach(m=>{p[m]||(p[m]={});const x=h.loaded[m];x.length&&x.forEach(y=>{p[m][y]===void 0&&(p[m][y]=!0)})}),h.done=!0,h.errors.length?h.callback(h.errors):h.callback())}),this.emit("loaded",p),this.queue=this.queue.filter(h=>!h.done)}read(i,r,o,s=0,u=this.retryTimeout,d){if(!i.length)return d(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:i,ns:r,fcName:o,tried:s,wait:u,callback:d});return}this.readingCalls++;const p=(m,x)=>{if(this.readingCalls--,this.waitingReads.length>0){const y=this.waitingReads.shift();this.read(y.lng,y.ns,y.fcName,y.tried,y.wait,y.callback)}if(m&&x&&s<this.maxRetries){setTimeout(()=>{this.read.call(this,i,r,o,s+1,u*2,d)},u);return}d(m,x)},h=this.backend[o].bind(this.backend);if(h.length===2){try{const m=h(i,r);m&&typeof m.then=="function"?m.then(x=>p(null,x)).catch(p):p(null,m)}catch(m){p(m)}return}return h(i,r,p)}prepareLoading(i,r,o={},s){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();ge(i)&&(i=this.languageUtils.toResolveHierarchy(i)),ge(r)&&(r=[r]);const u=this.queueLoad(i,r,o,s);if(!u.toLoad.length)return u.pending.length||s(),null;u.toLoad.forEach(d=>{this.loadOne(d)})}load(i,r,o){this.prepareLoading(i,r,{},o)}reload(i,r,o){this.prepareLoading(i,r,{reload:!0},o)}loadOne(i,r=""){const o=i.split("|"),s=o[0],u=o[1];this.read(s,u,"read",void 0,void 0,(d,p)=>{d&&this.logger.warn(`${r}loading namespace ${u} for language ${s} failed`,d),!d&&p&&this.logger.log(`${r}loaded namespace ${u} for language ${s}`,p),this.loaded(i,d,p)})}saveMissing(i,r,o,s,u,d={},p=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(r)){this.logger.warn(`did not save key "${o}" as the namespace "${r}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(o==null||o==="")){if(this.backend?.create){const h={...d,isUpdate:u},m=this.backend.create.bind(this.backend);if(m.length<6)try{let x;m.length===5?x=m(i,r,o,s,h):x=m(i,r,o,s),x&&typeof x.then=="function"?x.then(y=>p(null,y)).catch(p):p(null,x)}catch(x){p(x)}else m(i,r,o,s,p,h)}!i||!i[0]||this.store.addResource(i[0],r,o,s)}}}const Zu=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:a=>{let i={};if(typeof a[1]=="object"&&(i=a[1]),ge(a[1])&&(i.defaultValue=a[1]),ge(a[2])&&(i.tDescription=a[2]),typeof a[2]=="object"||typeof a[3]=="object"){const r=a[3]||a[2];Object.keys(r).forEach(o=>{i[o]=r[o]})}return i},interpolation:{escapeValue:!0,format:a=>a,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Ng=a=>(ge(a.ns)&&(a.ns=[a.ns]),ge(a.fallbackLng)&&(a.fallbackLng=[a.fallbackLng]),ge(a.fallbackNS)&&(a.fallbackNS=[a.fallbackNS]),a.supportedLngs?.indexOf?.("cimode")<0&&(a.supportedLngs=a.supportedLngs.concat(["cimode"])),typeof a.initImmediate=="boolean"&&(a.initAsync=a.initImmediate),a),Oo=()=>{},NC=a=>{Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach(r=>{typeof a[r]=="function"&&(a[r]=a[r].bind(a))})},Qy="__i18next_supportNoticeShown",MC=()=>typeof globalThis<"u"&&!!globalThis[Qy],DC=()=>{typeof globalThis<"u"&&(globalThis[Qy]=!0)},LC=a=>!!(a?.modules?.backend?.name?.indexOf("Locize")>0||a?.modules?.backend?.constructor?.name?.indexOf("Locize")>0||a?.options?.backend?.backends&&a.options.backend.backends.some(i=>i?.name?.indexOf("Locize")>0||i?.constructor?.name?.indexOf("Locize")>0)||a?.options?.backend?.projectId||a?.options?.backend?.backendOptions&&a.options.backend.backendOptions.some(i=>i?.projectId));class Wl extends ss{constructor(i={},r){if(super(),this.options=Ng(i),this.services={},this.logger=un,this.modules={external:[]},NC(this),r&&!this.isInitialized&&!i.isClone){if(!this.options.initAsync)return this.init(i,r),this;setTimeout(()=>{this.init(i,r)},0)}}init(i={},r){this.isInitializing=!0,typeof i=="function"&&(r=i,i={}),i.defaultNS==null&&i.ns&&(ge(i.ns)?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));const o=Zu();this.options={...o,...this.options,...Ng(i)},this.options.interpolation={...o.interpolation,...this.options.interpolation},i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator),typeof this.options.overloadTranslationOptionHandler!="function"&&(this.options.overloadTranslationOptionHandler=o.overloadTranslationOptionHandler),this.options.showSupportNotice!==!1&&!LC(this)&&!MC()&&(typeof console<"u"&&typeof console.info<"u"&&console.info("🌐 i18next is made possible by our own product, Locize — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙"),DC());const s=m=>m?typeof m=="function"?new m:m:null;if(!this.options.isClone){this.modules.logger?un.init(s(this.modules.logger),this.options):un.init(null,this.options);let m;this.modules.formatter?m=this.modules.formatter:m=RC;const x=new Eg(this.options);this.store=new Cg(this.options.resources,this.options);const y=this.services;y.logger=un,y.resourceStore=this.store,y.languageUtils=x,y.pluralResolver=new EC(x,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==o.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),m&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(y.formatter=s(m),y.formatter.init&&y.formatter.init(y,this.options),this.options.interpolation.format=y.formatter.format.bind(y.formatter)),y.interpolator=new _g(this.options),y.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},y.backendConnector=new OC(s(this.modules.backend),y.resourceStore,y,this.options),y.backendConnector.on("*",(E,...w)=>{this.emit(E,...w)}),this.modules.languageDetector&&(y.languageDetector=s(this.modules.languageDetector),y.languageDetector.init&&y.languageDetector.init(y,this.options.detection,this.options)),this.modules.i18nFormat&&(y.i18nFormat=s(this.modules.i18nFormat),y.i18nFormat.init&&y.i18nFormat.init(this)),this.translator=new Yo(this.services,this.options),this.translator.on("*",(E,...w)=>{this.emit(E,...w)}),this.modules.external.forEach(E=>{E.init&&E.init(this)})}if(this.format=this.options.interpolation.format,r||(r=Oo),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const m=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);m.length>0&&m[0]!=="dev"&&(this.options.lng=m[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(m=>{this[m]=(...x)=>this.store[m](...x)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(m=>{this[m]=(...x)=>(this.store[m](...x),this)});const p=Yl(),h=()=>{const m=(x,y)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),p.resolve(y),r(x,y)};if(this.languages&&!this.isInitialized)return m(null,this.t.bind(this));this.changeLanguage(this.options.lng,m)};return this.options.resources||!this.options.initAsync?h():setTimeout(h,0),p}loadResources(i,r=Oo){let o=r;const s=ge(i)?i:this.language;if(typeof i=="function"&&(o=i),!this.options.resources||this.options.partialBundledLanguages){if(s?.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return o();const u=[],d=p=>{if(!p||p==="cimode")return;this.services.languageUtils.toResolveHierarchy(p).forEach(m=>{m!=="cimode"&&u.indexOf(m)<0&&u.push(m)})};s?d(s):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(h=>d(h)),this.options.preload?.forEach?.(p=>d(p)),this.services.backendConnector.load(u,this.options.ns,p=>{!p&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),o(p)})}else o(null)}reloadResources(i,r,o){const s=Yl();return typeof i=="function"&&(o=i,i=void 0),typeof r=="function"&&(o=r,r=void 0),i||(i=this.languages),r||(r=this.options.ns),o||(o=Oo),this.services.backendConnector.reload(i,r,u=>{s.resolve(),o(u)}),s}use(i){if(!i)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!i.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return i.type==="backend"&&(this.modules.backend=i),(i.type==="logger"||i.log&&i.warn&&i.error)&&(this.modules.logger=i),i.type==="languageDetector"&&(this.modules.languageDetector=i),i.type==="i18nFormat"&&(this.modules.i18nFormat=i),i.type==="postProcessor"&&Ky.addPostProcessor(i),i.type==="formatter"&&(this.modules.formatter=i),i.type==="3rdParty"&&this.modules.external.push(i),this}setResolvedLanguage(i){if(!(!i||!this.languages)&&!(["cimode","dev"].indexOf(i)>-1)){for(let r=0;r<this.languages.length;r++){const o=this.languages[r];if(!(["cimode","dev"].indexOf(o)>-1)&&this.store.hasLanguageSomeTranslations(o)){this.resolvedLanguage=o;break}}!this.resolvedLanguage&&this.languages.indexOf(i)<0&&this.store.hasLanguageSomeTranslations(i)&&(this.resolvedLanguage=i,this.languages.unshift(i))}}changeLanguage(i,r){this.isLanguageChangingTo=i;const o=Yl();this.emit("languageChanging",i);const s=p=>{this.language=p,this.languages=this.services.languageUtils.toResolveHierarchy(p),this.resolvedLanguage=void 0,this.setResolvedLanguage(p)},u=(p,h)=>{h?this.isLanguageChangingTo===i&&(s(h),this.translator.changeLanguage(h),this.isLanguageChangingTo=void 0,this.emit("languageChanged",h),this.logger.log("languageChanged",h)):this.isLanguageChangingTo=void 0,o.resolve((...m)=>this.t(...m)),r&&r(p,(...m)=>this.t(...m))},d=p=>{!i&&!p&&this.services.languageDetector&&(p=[]);const h=ge(p)?p:p&&p[0],m=this.store.hasLanguageSomeTranslations(h)?h:this.services.languageUtils.getBestMatchFromCodes(ge(p)?[p]:p);m&&(this.language||s(m),this.translator.language||this.translator.changeLanguage(m),this.services.languageDetector?.cacheUserLanguage?.(m)),this.loadResources(m,x=>{u(x,m)})};return!i&&this.services.languageDetector&&!this.services.languageDetector.async?d(this.services.languageDetector.detect()):!i&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(d):this.services.languageDetector.detect(d):d(i),o}getFixedT(i,r,o){const s=(u,d,...p)=>{let h;typeof d!="object"?h=this.options.overloadTranslationOptionHandler([u,d].concat(p)):h={...d},h.lng=h.lng||s.lng,h.lngs=h.lngs||s.lngs,h.ns=h.ns||s.ns,h.keyPrefix!==""&&(h.keyPrefix=h.keyPrefix||o||s.keyPrefix);const m=this.options.keySeparator||".";let x;return h.keyPrefix&&Array.isArray(u)?x=u.map(y=>(typeof y=="function"&&(y=Zl(y,{...this.options,...d})),`${h.keyPrefix}${m}${y}`)):(typeof u=="function"&&(u=Zl(u,{...this.options,...d})),x=h.keyPrefix?`${h.keyPrefix}${m}${u}`:u),this.t(x,h)};return ge(i)?s.lng=i:s.lngs=i,s.ns=r,s.keyPrefix=o,s}t(...i){return this.translator?.translate(...i)}exists(...i){return this.translator?.exists(...i)}setDefaultNamespace(i){this.options.defaultNS=i}hasLoadedNamespace(i,r={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=r.lng||this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,u=this.languages[this.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const d=(p,h)=>{const m=this.services.backendConnector.state[`${p}|${h}`];return m===-1||m===0||m===2};if(r.precheck){const p=r.precheck(this,d);if(p!==void 0)return p}return!!(this.hasResourceBundle(o,i)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||d(o,i)&&(!s||d(u,i)))}loadNamespaces(i,r){const o=Yl();return this.options.ns?(ge(i)&&(i=[i]),i.forEach(s=>{this.options.ns.indexOf(s)<0&&this.options.ns.push(s)}),this.loadResources(s=>{o.resolve(),r&&r(s)}),o):(r&&r(),Promise.resolve())}loadLanguages(i,r){const o=Yl();ge(i)&&(i=[i]);const s=this.options.preload||[],u=i.filter(d=>s.indexOf(d)<0&&this.services.languageUtils.isSupportedCode(d));return u.length?(this.options.preload=s.concat(u),this.loadResources(d=>{o.resolve(),r&&r(d)}),o):(r&&r(),Promise.resolve())}dir(i){if(i||(i=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!i)return"rtl";try{const s=new Intl.Locale(i);if(s&&s.getTextInfo){const u=s.getTextInfo();if(u&&u.direction)return u.direction}}catch{}const r=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],o=this.services?.languageUtils||new Eg(Zu());return i.toLowerCase().indexOf("-latn")>1?"ltr":r.indexOf(o.getLanguagePartFromCode(i))>-1||i.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(i={},r){const o=new Wl(i,r);return o.createInstance=Wl.createInstance,o}cloneInstance(i={},r=Oo){const o=i.forkResourceStore;o&&delete i.forkResourceStore;const s={...this.options,...i,isClone:!0},u=new Wl(s);if((i.debug!==void 0||i.prefix!==void 0)&&(u.logger=u.logger.clone(i)),["store","services","language"].forEach(p=>{u[p]=this[p]}),u.services={...this.services},u.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},o){const p=Object.keys(this.store.data).reduce((h,m)=>(h[m]={...this.store.data[m]},h[m]=Object.keys(h[m]).reduce((x,y)=>(x[y]={...h[m][y]},x),h[m]),h),{});u.store=new Cg(p,s),u.services.resourceStore=u.store}if(i.interpolation){const h={...Zu().interpolation,...this.options.interpolation,...i.interpolation},m={...s,interpolation:h};u.services.interpolator=new _g(m)}return u.translator=new Yo(u.services,s),u.translator.on("*",(p,...h)=>{u.emit(p,...h)}),u.init(s,r),u.translator.options=s,u.translator.backendConnector.services.utils={hasLoadedNamespace:u.hasLoadedNamespace.bind(u)},u}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const ht=Wl.createInstance();ht.createInstance;ht.dir;ht.init;ht.loadResources;ht.reloadResources;ht.use;ht.changeLanguage;ht.getFixedT;ht.t;ht.exists;ht.setDefaultNamespace;ht.hasLoadedNamespace;ht.loadNamespaces;ht.loadLanguages;const jC=(a,i,r,o)=>{const s=[r,{code:i,...o||{}}];if(a?.services?.logger?.forward)return a.services.logger.forward(s,"warn","react-i18next::",!0);Ba(s[0])&&(s[0]=`react-i18next:: ${s[0]}`),a?.services?.logger?.warn?a.services.logger.warn(...s):console?.warn&&console.warn(...s)},Mg={},$y=(a,i,r,o)=>{Ba(r)&&Mg[r]||(Ba(r)&&(Mg[r]=new Date),jC(a,i,r,o))},Zy=(a,i)=>()=>{if(a.isInitialized)i();else{const r=()=>{setTimeout(()=>{a.off("initialized",r)},0),i()};a.on("initialized",r)}},gf=(a,i,r)=>{a.loadNamespaces(i,Zy(a,r))},Dg=(a,i,r,o)=>{if(Ba(r)&&(r=[r]),a.options.preload&&a.options.preload.indexOf(i)>-1)return gf(a,r,o);r.forEach(s=>{a.options.ns.indexOf(s)<0&&a.options.ns.push(s)}),a.loadLanguages(i,Zy(a,o))},zC=(a,i,r={})=>!i.languages||!i.languages.length?($y(i,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:i.languages}),!0):i.hasLoadedNamespace(a,{lng:r.lng,precheck:(o,s)=>{if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&o.services.backendConnector.backend&&o.isLanguageChangingTo&&!s(o.isLanguageChangingTo,a))return!1}}),Ba=a=>typeof a=="string",kC=a=>typeof a=="object"&&a!==null,HC=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,IC={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},PC=a=>IC[a],UC=a=>a.replace(HC,PC);let yf={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:UC,transDefaultProps:void 0};const BC=(a={})=>{yf={...yf,...a}},GC=()=>yf;let Wy;const VC=a=>{Wy=a},FC=()=>Wy,qC={type:"3rdParty",init(a){BC(a.options.react),VC(a)}},Jy=v.createContext();class YC{constructor(){this.usedNamespaces={}}addUsedNamespaces(i){i.forEach(r=>{this.usedNamespaces[r]||(this.usedNamespaces[r]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}var Wu={exports:{}},Ju={};var Lg;function KC(){if(Lg)return Ju;Lg=1;var a=is();function i(y,T){return y===T&&(y!==0||1/y===1/T)||y!==y&&T!==T}var r=typeof Object.is=="function"?Object.is:i,o=a.useState,s=a.useEffect,u=a.useLayoutEffect,d=a.useDebugValue;function p(y,T){var E=T(),w=o({inst:{value:E,getSnapshot:T}}),C=w[0].inst,A=w[1];return u(function(){C.value=E,C.getSnapshot=T,h(C)&&A({inst:C})},[y,E,T]),s(function(){return h(C)&&A({inst:C}),y(function(){h(C)&&A({inst:C})})},[y]),d(E),E}function h(y){var T=y.getSnapshot;y=y.value;try{var E=T();return!r(y,E)}catch{return!0}}function m(y,T){return T()}var x=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?m:p;return Ju.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:x,Ju}var jg;function XC(){return jg||(jg=1,Wu.exports=KC()),Wu.exports}var QC=XC();const $C=(a,i)=>{if(Ba(i))return i;if(kC(i)&&Ba(i.defaultValue))return i.defaultValue;if(typeof a=="function")return"";if(Array.isArray(a)){const r=a[a.length-1];return typeof r=="function"?"":r}return a},ZC={t:$C,ready:!1},WC=()=>()=>{},Fi=(a,i={})=>{const{i18n:r}=i,{i18n:o,defaultNS:s}=v.useContext(Jy)||{},u=r||o||FC();u&&!u.reportNamespaces&&(u.reportNamespaces=new YC),u||$y(u,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const d=v.useMemo(()=>({...GC(),...u?.options?.react,...i}),[u,i]),{useSuspense:p,keyPrefix:h}=d,m=s||u?.options?.defaultNS,x=Ba(m)?[m]:m||["translation"],y=v.useMemo(()=>x,x);u?.reportNamespaces?.addUsedNamespaces?.(y);const T=v.useRef(0),E=v.useCallback(J=>{if(!u)return WC;const{bindI18n:ee,bindI18nStore:ne}=d,te=()=>{T.current+=1,J()};return ee&&u.on(ee,te),ne&&u.store.on(ne,te),()=>{ee&&ee.split(" ").forEach(oe=>u.off(oe,te)),ne&&ne.split(" ").forEach(oe=>u.store.off(oe,te))}},[u,d]),w=v.useRef(),C=v.useCallback(()=>{if(!u)return ZC;const J=!!(u.isInitialized||u.initializedStoreOnce)&&y.every(ue=>zC(ue,u,d)),ee=i.lng||u.language,ne=T.current,te=w.current;if(te&&te.ready===J&&te.lng===ee&&te.keyPrefix===h&&te.revision===ne)return te;const re={t:u.getFixedT(ee,d.nsMode==="fallback"?y:y[0],h),ready:J,lng:ee,keyPrefix:h,revision:ne};return w.current=re,re},[u,y,h,d,i.lng]),[A,M]=v.useState(0),{t:N,ready:j}=QC.useSyncExternalStore(E,C,C);v.useEffect(()=>{if(u&&!j&&!p){const J=()=>M(ee=>ee+1);i.lng?Dg(u,i.lng,y,J):gf(u,y,J)}},[u,i.lng,y,j,p,A]);const U=u||{},G=v.useRef(null),Z=v.useRef(),B=J=>{const ee=Object.getOwnPropertyDescriptors(J);ee.__original&&delete ee.__original;const ne=Object.create(Object.getPrototypeOf(J),ee);if(!Object.prototype.hasOwnProperty.call(ne,"__original"))try{Object.defineProperty(ne,"__original",{value:J,writable:!1,enumerable:!1,configurable:!1})}catch{}return ne},X=v.useMemo(()=>{const J=U,ee=J?.language;let ne=J;J&&(G.current&&G.current.__original===J?Z.current!==ee?(ne=B(J),G.current=ne,Z.current=ee):ne=G.current:(ne=B(J),G.current=ne,Z.current=ee));const te=[N,ne,j];return te.t=N,te.i18n=ne,te.ready=j,te},[N,U,j,U.resolvedLanguage,U.language,U.languages]);if(u&&p&&!j)throw new Promise(J=>{const ee=()=>J();i.lng?Dg(u,i.lng,y,ee):gf(u,y,ee)});return X};function JC({i18n:a,defaultNS:i,children:r}){const o=v.useMemo(()=>({i18n:a,defaultNS:i}),[a,i]);return v.createElement(Jy.Provider,{value:o},r)}const eT={zh:{translation:{nav:{home:"首页",notes:"笔记",about:"关于"},home:{title:"技术笔记",subtitle:"记录学习，分享知识",description:"这里是我整理的技术笔记，涵盖前端、后端、AI、DevOps 等多个领域。",viewAll:"查看全部笔记",latestNotes:"最新笔记",categories:"分类浏览"},notes:{title:"全部笔记",search:"搜索笔记...",filterByCategory:"按分类筛选",allCategories:"全部分类",readMore:"阅读更多",noNotes:"暂无笔记",publishedOn:"发布于",updatedOn:"更新于",viewMode:"视图",cardView:"卡片视图",listView:"列表视图",sortBy:"排序",newest:"最新发布",oldest:"最早发布",sortTitle:"标题",recentlyUpdated:"最近更新"},note:{backToList:"返回列表",tags:"标签",relatedNotes:"相关笔记"},categories:{title:"分类",viewNotes:"查看笔记",noteCount:"{{count}} 篇笔记"},footer:{copyright:"© 2024 技术笔记. All rights reserved.",poweredBy:"Powered by React + Vite"},language:{zh:"中文",en:"English",switch:"切换语言"}}},en:{translation:{nav:{home:"Home",notes:"Notes",about:"About"},home:{title:"Tech Notes",subtitle:"Learn, Record, Share",description:"Here are my organized technical notes covering frontend, backend, AI, DevOps and more.",viewAll:"View All Notes",latestNotes:"Latest Notes",categories:"Browse by Category"},notes:{title:"All Notes",search:"Search notes...",filterByCategory:"Filter by Category",allCategories:"All Categories",readMore:"Read More",noNotes:"No notes yet",publishedOn:"Published on",updatedOn:"Updated on",viewMode:"View",cardView:"Card View",listView:"List View",sortBy:"Sort by",newest:"Newest First",oldest:"Oldest First",sortTitle:"Title",recentlyUpdated:"Recently Updated"},note:{backToList:"Back to List",tags:"Tags",relatedNotes:"Related Notes"},categories:{title:"Categories",viewNotes:"View Notes",noteCount:"{{count}} notes"},footer:{copyright:"© 2024 Tech Notes. All rights reserved.",poweredBy:"Powered by React + Vite"},language:{zh:"中文",en:"English",switch:"Switch Language"}}}};ht.use(qC).init({resources:eT,lng:"zh",fallbackLng:"zh",interpolation:{escapeValue:!1}});function zg(a,i){if(typeof a=="function")return a(i);a!=null&&(a.current=i)}function or(...a){return i=>{let r=!1;const o=a.map(s=>{const u=zg(s,i);return!r&&typeof u=="function"&&(r=!0),u});if(r)return()=>{for(let s=0;s<o.length;s++){const u=o[s];typeof u=="function"?u():zg(a[s],null)}}}}function nt(...a){return v.useCallback(or(...a),a)}var tT=Symbol.for("react.lazy"),Ko=Df[" use ".trim().toString()];function nT(a){return typeof a=="object"&&a!==null&&"then"in a}function ev(a){return a!=null&&typeof a=="object"&&"$$typeof"in a&&a.$$typeof===tT&&"_payload"in a&&nT(a._payload)}function aT(a){const i=iT(a),r=v.forwardRef((o,s)=>{let{children:u,...d}=o;ev(u)&&typeof Ko=="function"&&(u=Ko(u._payload));const p=v.Children.toArray(u),h=p.find(rT);if(h){const m=h.props.children,x=p.map(y=>y===h?v.Children.count(m)>1?v.Children.only(null):v.isValidElement(m)?m.props.children:null:y);return S.jsx(i,{...d,ref:s,children:v.isValidElement(m)?v.cloneElement(m,void 0,x):null})}return S.jsx(i,{...d,ref:s,children:u})});return r.displayName=`${a}.Slot`,r}var tv=aT("Slot");function iT(a){const i=v.forwardRef((r,o)=>{let{children:s,...u}=r;if(ev(s)&&typeof Ko=="function"&&(s=Ko(s._payload)),v.isValidElement(s)){const d=sT(s),p=oT(u,s.props);return s.type!==v.Fragment&&(p.ref=o?or(o,d):d),v.cloneElement(s,p)}return v.Children.count(s)>1?v.Children.only(null):null});return i.displayName=`${a}.SlotClone`,i}var lT=Symbol("radix.slottable");function rT(a){return v.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===lT}function oT(a,i){const r={...i};for(const o in i){const s=a[o],u=i[o];/^on[A-Z]/.test(o)?s&&u?r[o]=(...p)=>{const h=u(...p);return s(...p),h}:s&&(r[o]=s):o==="style"?r[o]={...s,...u}:o==="className"&&(r[o]=[s,u].filter(Boolean).join(" "))}return{...a,...r}}function sT(a){let i=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning;return r?a.ref:(i=Object.getOwnPropertyDescriptor(a,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning,r?a.props.ref:a.props.ref||a.ref)}function nv(a){var i,r,o="";if(typeof a=="string"||typeof a=="number")o+=a;else if(typeof a=="object")if(Array.isArray(a)){var s=a.length;for(i=0;i<s;i++)a[i]&&(r=nv(a[i]))&&(o&&(o+=" "),o+=r)}else for(r in a)a[r]&&(o&&(o+=" "),o+=r);return o}function av(){for(var a,i,r=0,o="",s=arguments.length;r<s;r++)(a=arguments[r])&&(i=nv(a))&&(o&&(o+=" "),o+=i);return o}const kg=a=>typeof a=="boolean"?`${a}`:a===0?"0":a,Hg=av,iv=(a,i)=>r=>{var o;if(i?.variants==null)return Hg(a,r?.class,r?.className);const{variants:s,defaultVariants:u}=i,d=Object.keys(s).map(m=>{const x=r?.[m],y=u?.[m];if(x===null)return null;const T=kg(x)||kg(y);return s[m][T]}),p=r&&Object.entries(r).reduce((m,x)=>{let[y,T]=x;return T===void 0||(m[y]=T),m},{}),h=i==null||(o=i.compoundVariants)===null||o===void 0?void 0:o.reduce((m,x)=>{let{class:y,className:T,...E}=x;return Object.entries(E).every(w=>{let[C,A]=w;return Array.isArray(A)?A.includes({...u,...p}[C]):{...u,...p}[C]===A})?[...m,y,T]:m},[]);return Hg(a,d,h,r?.class,r?.className)},cT=(a,i)=>{const r=new Array(a.length+i.length);for(let o=0;o<a.length;o++)r[o]=a[o];for(let o=0;o<i.length;o++)r[a.length+o]=i[o];return r},uT=(a,i)=>({classGroupId:a,validator:i}),lv=(a=new Map,i=null,r)=>({nextPart:a,validators:i,classGroupId:r}),Xo="-",Ig=[],fT="arbitrary..",dT=a=>{const i=hT(a),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=a;return{getClassGroupId:d=>{if(d.startsWith("[")&&d.endsWith("]"))return pT(d);const p=d.split(Xo),h=p[0]===""&&p.length>1?1:0;return rv(p,h,i)},getConflictingClassGroupIds:(d,p)=>{if(p){const h=o[d],m=r[d];return h?m?cT(m,h):h:m||Ig}return r[d]||Ig}}},rv=(a,i,r)=>{if(a.length-i===0)return r.classGroupId;const s=a[i],u=r.nextPart.get(s);if(u){const m=rv(a,i+1,u);if(m)return m}const d=r.validators;if(d===null)return;const p=i===0?a.join(Xo):a.slice(i).join(Xo),h=d.length;for(let m=0;m<h;m++){const x=d[m];if(x.validator(p))return x.classGroupId}},pT=a=>a.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const i=a.slice(1,-1),r=i.indexOf(":"),o=i.slice(0,r);return o?fT+o:void 0})(),hT=a=>{const{theme:i,classGroups:r}=a;return mT(r,i)},mT=(a,i)=>{const r=lv();for(const o in a){const s=a[o];Pf(s,r,o,i)}return r},Pf=(a,i,r,o)=>{const s=a.length;for(let u=0;u<s;u++){const d=a[u];gT(d,i,r,o)}},gT=(a,i,r,o)=>{if(typeof a=="string"){yT(a,i,r);return}if(typeof a=="function"){vT(a,i,r,o);return}xT(a,i,r,o)},yT=(a,i,r)=>{const o=a===""?i:ov(i,a);o.classGroupId=r},vT=(a,i,r,o)=>{if(ST(a)){Pf(a(o),i,r,o);return}i.validators===null&&(i.validators=[]),i.validators.push(uT(r,a))},xT=(a,i,r,o)=>{const s=Object.entries(a),u=s.length;for(let d=0;d<u;d++){const[p,h]=s[d];Pf(h,ov(i,p),r,o)}},ov=(a,i)=>{let r=a;const o=i.split(Xo),s=o.length;for(let u=0;u<s;u++){const d=o[u];let p=r.nextPart.get(d);p||(p=lv(),r.nextPart.set(d,p)),r=p}return r},ST=a=>"isThemeGetter"in a&&a.isThemeGetter===!0,bT=a=>{if(a<1)return{get:()=>{},set:()=>{}};let i=0,r=Object.create(null),o=Object.create(null);const s=(u,d)=>{r[u]=d,i++,i>a&&(i=0,o=r,r=Object.create(null))};return{get(u){let d=r[u];if(d!==void 0)return d;if((d=o[u])!==void 0)return s(u,d),d},set(u,d){u in r?r[u]=d:s(u,d)}}},vf="!",Pg=":",CT=[],Ug=(a,i,r,o,s)=>({modifiers:a,hasImportantModifier:i,baseClassName:r,maybePostfixModifierPosition:o,isExternal:s}),TT=a=>{const{prefix:i,experimentalParseClassName:r}=a;let o=s=>{const u=[];let d=0,p=0,h=0,m;const x=s.length;for(let C=0;C<x;C++){const A=s[C];if(d===0&&p===0){if(A===Pg){u.push(s.slice(h,C)),h=C+1;continue}if(A==="/"){m=C;continue}}A==="["?d++:A==="]"?d--:A==="("?p++:A===")"&&p--}const y=u.length===0?s:s.slice(h);let T=y,E=!1;y.endsWith(vf)?(T=y.slice(0,-1),E=!0):y.startsWith(vf)&&(T=y.slice(1),E=!0);const w=m&&m>h?m-h:void 0;return Ug(u,E,T,w)};if(i){const s=i+Pg,u=o;o=d=>d.startsWith(s)?u(d.slice(s.length)):Ug(CT,!1,d,void 0,!0)}if(r){const s=o;o=u=>r({className:u,parseClassName:s})}return o},ET=a=>{const i=new Map;return a.orderSensitiveModifiers.forEach((r,o)=>{i.set(r,1e6+o)}),r=>{const o=[];let s=[];for(let u=0;u<r.length;u++){const d=r[u],p=d[0]==="[",h=i.has(d);p||h?(s.length>0&&(s.sort(),o.push(...s),s=[]),o.push(d)):s.push(d)}return s.length>0&&(s.sort(),o.push(...s)),o}},AT=a=>({cache:bT(a.cacheSize),parseClassName:TT(a),sortModifiers:ET(a),...dT(a)}),wT=/\s+/,RT=(a,i)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:s,sortModifiers:u}=i,d=[],p=a.trim().split(wT);let h="";for(let m=p.length-1;m>=0;m-=1){const x=p[m],{isExternal:y,modifiers:T,hasImportantModifier:E,baseClassName:w,maybePostfixModifierPosition:C}=r(x);if(y){h=x+(h.length>0?" "+h:h);continue}let A=!!C,M=o(A?w.substring(0,C):w);if(!M){if(!A){h=x+(h.length>0?" "+h:h);continue}if(M=o(w),!M){h=x+(h.length>0?" "+h:h);continue}A=!1}const N=T.length===0?"":T.length===1?T[0]:u(T).join(":"),j=E?N+vf:N,U=j+M;if(d.indexOf(U)>-1)continue;d.push(U);const G=s(M,A);for(let Z=0;Z<G.length;++Z){const B=G[Z];d.push(j+B)}h=x+(h.length>0?" "+h:h)}return h},_T=(...a)=>{let i=0,r,o,s="";for(;i<a.length;)(r=a[i++])&&(o=sv(r))&&(s&&(s+=" "),s+=o);return s},sv=a=>{if(typeof a=="string")return a;let i,r="";for(let o=0;o<a.length;o++)a[o]&&(i=sv(a[o]))&&(r&&(r+=" "),r+=i);return r},OT=(a,...i)=>{let r,o,s,u;const d=h=>{const m=i.reduce((x,y)=>y(x),a());return r=AT(m),o=r.cache.get,s=r.cache.set,u=p,p(h)},p=h=>{const m=o(h);if(m)return m;const x=RT(h,r);return s(h,x),x};return u=d,(...h)=>u(_T(...h))},NT=[],it=a=>{const i=r=>r[a]||NT;return i.isThemeGetter=!0,i},cv=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,uv=/^\((?:(\w[\w-]*):)?(.+)\)$/i,MT=/^\d+\/\d+$/,DT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,LT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,jT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,zT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,kT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Mi=a=>MT.test(a),Ce=a=>!!a&&!Number.isNaN(Number(a)),ua=a=>!!a&&Number.isInteger(Number(a)),ef=a=>a.endsWith("%")&&Ce(a.slice(0,-1)),zn=a=>DT.test(a),HT=()=>!0,IT=a=>LT.test(a)&&!jT.test(a),fv=()=>!1,PT=a=>zT.test(a),UT=a=>kT.test(a),BT=a=>!ie(a)&&!le(a),GT=a=>qi(a,hv,fv),ie=a=>cv.test(a),Ua=a=>qi(a,mv,IT),tf=a=>qi(a,KT,Ce),Bg=a=>qi(a,dv,fv),VT=a=>qi(a,pv,UT),No=a=>qi(a,gv,PT),le=a=>uv.test(a),Kl=a=>Yi(a,mv),FT=a=>Yi(a,XT),Gg=a=>Yi(a,dv),qT=a=>Yi(a,hv),YT=a=>Yi(a,pv),Mo=a=>Yi(a,gv,!0),qi=(a,i,r)=>{const o=cv.exec(a);return o?o[1]?i(o[1]):r(o[2]):!1},Yi=(a,i,r=!1)=>{const o=uv.exec(a);return o?o[1]?i(o[1]):r:!1},dv=a=>a==="position"||a==="percentage",pv=a=>a==="image"||a==="url",hv=a=>a==="length"||a==="size"||a==="bg-size",mv=a=>a==="length",KT=a=>a==="number",XT=a=>a==="family-name",gv=a=>a==="shadow",QT=()=>{const a=it("color"),i=it("font"),r=it("text"),o=it("font-weight"),s=it("tracking"),u=it("leading"),d=it("breakpoint"),p=it("container"),h=it("spacing"),m=it("radius"),x=it("shadow"),y=it("inset-shadow"),T=it("text-shadow"),E=it("drop-shadow"),w=it("blur"),C=it("perspective"),A=it("aspect"),M=it("ease"),N=it("animate"),j=()=>["auto","avoid","all","avoid-page","page","left","right","column"],U=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],G=()=>[...U(),le,ie],Z=()=>["auto","hidden","clip","visible","scroll"],B=()=>["auto","contain","none"],X=()=>[le,ie,h],J=()=>[Mi,"full","auto",...X()],ee=()=>[ua,"none","subgrid",le,ie],ne=()=>["auto",{span:["full",ua,le,ie]},ua,le,ie],te=()=>[ua,"auto",le,ie],oe=()=>["auto","min","max","fr",le,ie],re=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ue=()=>["start","end","center","stretch","center-safe","end-safe"],D=()=>["auto",...X()],q=()=>[Mi,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...X()],I=()=>[a,le,ie],se=()=>[...U(),Gg,Bg,{position:[le,ie]}],he=()=>["no-repeat",{repeat:["","x","y","space","round"]}],_=()=>["auto","cover","contain",qT,GT,{size:[le,ie]}],V=()=>[ef,Kl,Ua],Q=()=>["","none","full",m,le,ie],W=()=>["",Ce,Kl,Ua],de=()=>["solid","dashed","dotted","double"],me=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],$=()=>[Ce,ef,Gg,Bg],Se=()=>["","none",w,le,ie],ve=()=>["none",Ce,le,ie],Ae=()=>["none",Ce,le,ie],Ne=()=>[Ce,le,ie],je=()=>[Mi,"full",...X()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[zn],breakpoint:[zn],color:[HT],container:[zn],"drop-shadow":[zn],ease:["in","out","in-out"],font:[BT],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[zn],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[zn],shadow:[zn],spacing:["px",Ce],text:[zn],"text-shadow":[zn],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Mi,ie,le,A]}],container:["container"],columns:[{columns:[Ce,ie,le,p]}],"break-after":[{"break-after":j()}],"break-before":[{"break-before":j()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:G()}],overflow:[{overflow:Z()}],"overflow-x":[{"overflow-x":Z()}],"overflow-y":[{"overflow-y":Z()}],overscroll:[{overscroll:B()}],"overscroll-x":[{"overscroll-x":B()}],"overscroll-y":[{"overscroll-y":B()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:J()}],"inset-x":[{"inset-x":J()}],"inset-y":[{"inset-y":J()}],start:[{start:J()}],end:[{end:J()}],top:[{top:J()}],right:[{right:J()}],bottom:[{bottom:J()}],left:[{left:J()}],visibility:["visible","invisible","collapse"],z:[{z:[ua,"auto",le,ie]}],basis:[{basis:[Mi,"full","auto",p,...X()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ce,Mi,"auto","initial","none",ie]}],grow:[{grow:["",Ce,le,ie]}],shrink:[{shrink:["",Ce,le,ie]}],order:[{order:[ua,"first","last","none",le,ie]}],"grid-cols":[{"grid-cols":ee()}],"col-start-end":[{col:ne()}],"col-start":[{"col-start":te()}],"col-end":[{"col-end":te()}],"grid-rows":[{"grid-rows":ee()}],"row-start-end":[{row:ne()}],"row-start":[{"row-start":te()}],"row-end":[{"row-end":te()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":oe()}],"auto-rows":[{"auto-rows":oe()}],gap:[{gap:X()}],"gap-x":[{"gap-x":X()}],"gap-y":[{"gap-y":X()}],"justify-content":[{justify:[...re(),"normal"]}],"justify-items":[{"justify-items":[...ue(),"normal"]}],"justify-self":[{"justify-self":["auto",...ue()]}],"align-content":[{content:["normal",...re()]}],"align-items":[{items:[...ue(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ue(),{baseline:["","last"]}]}],"place-content":[{"place-content":re()}],"place-items":[{"place-items":[...ue(),"baseline"]}],"place-self":[{"place-self":["auto",...ue()]}],p:[{p:X()}],px:[{px:X()}],py:[{py:X()}],ps:[{ps:X()}],pe:[{pe:X()}],pt:[{pt:X()}],pr:[{pr:X()}],pb:[{pb:X()}],pl:[{pl:X()}],m:[{m:D()}],mx:[{mx:D()}],my:[{my:D()}],ms:[{ms:D()}],me:[{me:D()}],mt:[{mt:D()}],mr:[{mr:D()}],mb:[{mb:D()}],ml:[{ml:D()}],"space-x":[{"space-x":X()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":X()}],"space-y-reverse":["space-y-reverse"],size:[{size:q()}],w:[{w:[p,"screen",...q()]}],"min-w":[{"min-w":[p,"screen","none",...q()]}],"max-w":[{"max-w":[p,"screen","none","prose",{screen:[d]},...q()]}],h:[{h:["screen","lh",...q()]}],"min-h":[{"min-h":["screen","lh","none",...q()]}],"max-h":[{"max-h":["screen","lh",...q()]}],"font-size":[{text:["base",r,Kl,Ua]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,le,tf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ef,ie]}],"font-family":[{font:[FT,ie,i]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,le,ie]}],"line-clamp":[{"line-clamp":[Ce,"none",le,tf]}],leading:[{leading:[u,...X()]}],"list-image":[{"list-image":["none",le,ie]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",le,ie]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:I()}],"text-color":[{text:I()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...de(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ce,"from-font","auto",le,Ua]}],"text-decoration-color":[{decoration:I()}],"underline-offset":[{"underline-offset":[Ce,"auto",le,ie]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:X()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",le,ie]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",le,ie]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:se()}],"bg-repeat":[{bg:he()}],"bg-size":[{bg:_()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ua,le,ie],radial:["",le,ie],conic:[ua,le,ie]},YT,VT]}],"bg-color":[{bg:I()}],"gradient-from-pos":[{from:V()}],"gradient-via-pos":[{via:V()}],"gradient-to-pos":[{to:V()}],"gradient-from":[{from:I()}],"gradient-via":[{via:I()}],"gradient-to":[{to:I()}],rounded:[{rounded:Q()}],"rounded-s":[{"rounded-s":Q()}],"rounded-e":[{"rounded-e":Q()}],"rounded-t":[{"rounded-t":Q()}],"rounded-r":[{"rounded-r":Q()}],"rounded-b":[{"rounded-b":Q()}],"rounded-l":[{"rounded-l":Q()}],"rounded-ss":[{"rounded-ss":Q()}],"rounded-se":[{"rounded-se":Q()}],"rounded-ee":[{"rounded-ee":Q()}],"rounded-es":[{"rounded-es":Q()}],"rounded-tl":[{"rounded-tl":Q()}],"rounded-tr":[{"rounded-tr":Q()}],"rounded-br":[{"rounded-br":Q()}],"rounded-bl":[{"rounded-bl":Q()}],"border-w":[{border:W()}],"border-w-x":[{"border-x":W()}],"border-w-y":[{"border-y":W()}],"border-w-s":[{"border-s":W()}],"border-w-e":[{"border-e":W()}],"border-w-t":[{"border-t":W()}],"border-w-r":[{"border-r":W()}],"border-w-b":[{"border-b":W()}],"border-w-l":[{"border-l":W()}],"divide-x":[{"divide-x":W()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":W()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...de(),"hidden","none"]}],"divide-style":[{divide:[...de(),"hidden","none"]}],"border-color":[{border:I()}],"border-color-x":[{"border-x":I()}],"border-color-y":[{"border-y":I()}],"border-color-s":[{"border-s":I()}],"border-color-e":[{"border-e":I()}],"border-color-t":[{"border-t":I()}],"border-color-r":[{"border-r":I()}],"border-color-b":[{"border-b":I()}],"border-color-l":[{"border-l":I()}],"divide-color":[{divide:I()}],"outline-style":[{outline:[...de(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ce,le,ie]}],"outline-w":[{outline:["",Ce,Kl,Ua]}],"outline-color":[{outline:I()}],shadow:[{shadow:["","none",x,Mo,No]}],"shadow-color":[{shadow:I()}],"inset-shadow":[{"inset-shadow":["none",y,Mo,No]}],"inset-shadow-color":[{"inset-shadow":I()}],"ring-w":[{ring:W()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:I()}],"ring-offset-w":[{"ring-offset":[Ce,Ua]}],"ring-offset-color":[{"ring-offset":I()}],"inset-ring-w":[{"inset-ring":W()}],"inset-ring-color":[{"inset-ring":I()}],"text-shadow":[{"text-shadow":["none",T,Mo,No]}],"text-shadow-color":[{"text-shadow":I()}],opacity:[{opacity:[Ce,le,ie]}],"mix-blend":[{"mix-blend":[...me(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":me()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ce]}],"mask-image-linear-from-pos":[{"mask-linear-from":$()}],"mask-image-linear-to-pos":[{"mask-linear-to":$()}],"mask-image-linear-from-color":[{"mask-linear-from":I()}],"mask-image-linear-to-color":[{"mask-linear-to":I()}],"mask-image-t-from-pos":[{"mask-t-from":$()}],"mask-image-t-to-pos":[{"mask-t-to":$()}],"mask-image-t-from-color":[{"mask-t-from":I()}],"mask-image-t-to-color":[{"mask-t-to":I()}],"mask-image-r-from-pos":[{"mask-r-from":$()}],"mask-image-r-to-pos":[{"mask-r-to":$()}],"mask-image-r-from-color":[{"mask-r-from":I()}],"mask-image-r-to-color":[{"mask-r-to":I()}],"mask-image-b-from-pos":[{"mask-b-from":$()}],"mask-image-b-to-pos":[{"mask-b-to":$()}],"mask-image-b-from-color":[{"mask-b-from":I()}],"mask-image-b-to-color":[{"mask-b-to":I()}],"mask-image-l-from-pos":[{"mask-l-from":$()}],"mask-image-l-to-pos":[{"mask-l-to":$()}],"mask-image-l-from-color":[{"mask-l-from":I()}],"mask-image-l-to-color":[{"mask-l-to":I()}],"mask-image-x-from-pos":[{"mask-x-from":$()}],"mask-image-x-to-pos":[{"mask-x-to":$()}],"mask-image-x-from-color":[{"mask-x-from":I()}],"mask-image-x-to-color":[{"mask-x-to":I()}],"mask-image-y-from-pos":[{"mask-y-from":$()}],"mask-image-y-to-pos":[{"mask-y-to":$()}],"mask-image-y-from-color":[{"mask-y-from":I()}],"mask-image-y-to-color":[{"mask-y-to":I()}],"mask-image-radial":[{"mask-radial":[le,ie]}],"mask-image-radial-from-pos":[{"mask-radial-from":$()}],"mask-image-radial-to-pos":[{"mask-radial-to":$()}],"mask-image-radial-from-color":[{"mask-radial-from":I()}],"mask-image-radial-to-color":[{"mask-radial-to":I()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":U()}],"mask-image-conic-pos":[{"mask-conic":[Ce]}],"mask-image-conic-from-pos":[{"mask-conic-from":$()}],"mask-image-conic-to-pos":[{"mask-conic-to":$()}],"mask-image-conic-from-color":[{"mask-conic-from":I()}],"mask-image-conic-to-color":[{"mask-conic-to":I()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:se()}],"mask-repeat":[{mask:he()}],"mask-size":[{mask:_()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",le,ie]}],filter:[{filter:["","none",le,ie]}],blur:[{blur:Se()}],brightness:[{brightness:[Ce,le,ie]}],contrast:[{contrast:[Ce,le,ie]}],"drop-shadow":[{"drop-shadow":["","none",E,Mo,No]}],"drop-shadow-color":[{"drop-shadow":I()}],grayscale:[{grayscale:["",Ce,le,ie]}],"hue-rotate":[{"hue-rotate":[Ce,le,ie]}],invert:[{invert:["",Ce,le,ie]}],saturate:[{saturate:[Ce,le,ie]}],sepia:[{sepia:["",Ce,le,ie]}],"backdrop-filter":[{"backdrop-filter":["","none",le,ie]}],"backdrop-blur":[{"backdrop-blur":Se()}],"backdrop-brightness":[{"backdrop-brightness":[Ce,le,ie]}],"backdrop-contrast":[{"backdrop-contrast":[Ce,le,ie]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ce,le,ie]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ce,le,ie]}],"backdrop-invert":[{"backdrop-invert":["",Ce,le,ie]}],"backdrop-opacity":[{"backdrop-opacity":[Ce,le,ie]}],"backdrop-saturate":[{"backdrop-saturate":[Ce,le,ie]}],"backdrop-sepia":[{"backdrop-sepia":["",Ce,le,ie]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":X()}],"border-spacing-x":[{"border-spacing-x":X()}],"border-spacing-y":[{"border-spacing-y":X()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",le,ie]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ce,"initial",le,ie]}],ease:[{ease:["linear","initial",M,le,ie]}],delay:[{delay:[Ce,le,ie]}],animate:[{animate:["none",N,le,ie]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[C,le,ie]}],"perspective-origin":[{"perspective-origin":G()}],rotate:[{rotate:ve()}],"rotate-x":[{"rotate-x":ve()}],"rotate-y":[{"rotate-y":ve()}],"rotate-z":[{"rotate-z":ve()}],scale:[{scale:Ae()}],"scale-x":[{"scale-x":Ae()}],"scale-y":[{"scale-y":Ae()}],"scale-z":[{"scale-z":Ae()}],"scale-3d":["scale-3d"],skew:[{skew:Ne()}],"skew-x":[{"skew-x":Ne()}],"skew-y":[{"skew-y":Ne()}],transform:[{transform:[le,ie,"","none","gpu","cpu"]}],"transform-origin":[{origin:G()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:je()}],"translate-x":[{"translate-x":je()}],"translate-y":[{"translate-y":je()}],"translate-z":[{"translate-z":je()}],"translate-none":["translate-none"],accent:[{accent:I()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:I()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",le,ie]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":X()}],"scroll-mx":[{"scroll-mx":X()}],"scroll-my":[{"scroll-my":X()}],"scroll-ms":[{"scroll-ms":X()}],"scroll-me":[{"scroll-me":X()}],"scroll-mt":[{"scroll-mt":X()}],"scroll-mr":[{"scroll-mr":X()}],"scroll-mb":[{"scroll-mb":X()}],"scroll-ml":[{"scroll-ml":X()}],"scroll-p":[{"scroll-p":X()}],"scroll-px":[{"scroll-px":X()}],"scroll-py":[{"scroll-py":X()}],"scroll-ps":[{"scroll-ps":X()}],"scroll-pe":[{"scroll-pe":X()}],"scroll-pt":[{"scroll-pt":X()}],"scroll-pr":[{"scroll-pr":X()}],"scroll-pb":[{"scroll-pb":X()}],"scroll-pl":[{"scroll-pl":X()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",le,ie]}],fill:[{fill:["none",...I()]}],"stroke-w":[{stroke:[Ce,Kl,Ua,tf]}],stroke:[{stroke:["none",...I()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},$T=OT(QT);function Qt(...a){return $T(av(a))}const ZT=iv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function Xt({className:a,variant:i="default",size:r="default",asChild:o=!1,...s}){const u=o?tv:"button";return S.jsx(u,{"data-slot":"button","data-variant":i,"data-size":r,className:Qt(ZT({variant:i,size:r,className:a})),...s})}const WT=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),JT=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,r,o)=>o?o.toUpperCase():r.toLowerCase()),Vg=a=>{const i=JT(a);return i.charAt(0).toUpperCase()+i.slice(1)},yv=(...a)=>a.filter((i,r,o)=>!!i&&i.trim()!==""&&o.indexOf(i)===r).join(" ").trim(),eE=a=>{for(const i in a)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};var tE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const nE=v.forwardRef(({color:a="currentColor",size:i=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:s="",children:u,iconNode:d,...p},h)=>v.createElement("svg",{ref:h,...tE,width:i,height:i,stroke:a,strokeWidth:o?Number(r)*24/Number(i):r,className:yv("lucide",s),...!u&&!eE(p)&&{"aria-hidden":"true"},...p},[...d.map(([m,x])=>v.createElement(m,x)),...Array.isArray(u)?u:[u]]));const Oe=(a,i)=>{const r=v.forwardRef(({className:o,...s},u)=>v.createElement(nE,{ref:u,iconNode:i,className:yv(`lucide-${WT(Vg(a))}`,`lucide-${a}`,o),...s}));return r.displayName=Vg(a),r};const aE=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],vv=Oe("arrow-left",aE);const iE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Fg=Oe("arrow-right",iE);const lE=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],rE=Oe("arrow-up-down",lE);const oE=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Qo=Oe("book-open",oE);const sE=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],xv=Oe("calculator",sE);const cE=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],cs=Oe("calendar",cE);const uE=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],Sv=Oe("car",uE);const fE=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],dE=Oe("check",fE);const pE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],bv=Oe("chevron-down",pE);const hE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ki=Oe("chevron-right",hE);const mE=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],gE=Oe("chevron-up",mE);const yE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]],Cv=Oe("circuit-board",yE);const vE=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Tv=Oe("clock",vE);const xE=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],$o=Oe("code",xE);const SE=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Ev=Oe("cpu",SE);const bE=[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",key:"1iv0i2"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Av=Oe("factory",bE);const CE=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],wv=Oe("file-code",CE);const TE=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Rv=Oe("folder-open",TE);const EE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],qg=Oe("globe",EE);const AE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],_v=Oe("grid-3x3",AE);const wE=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],RE=Oe("house",wE);const _E=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],OE=Oe("layout-grid",_E);const NE=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],ME=Oe("list",NE);const DE=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],LE=Oe("menu",DE);const jE=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 17h4",key:"pvmtpo"}],["path",{d:"M10 7h4",key:"1vgcok"}],["path",{d:"M18 12h2",key:"quuxs7"}],["path",{d:"M18 18h2",key:"4scel"}],["path",{d:"M18 6h2",key:"1ptzki"}],["path",{d:"M4 12h2",key:"1ltxp0"}],["path",{d:"M4 18h2",key:"1xrofg"}],["path",{d:"M4 6h2",key:"1cx33n"}],["rect",{x:"6",y:"2",width:"12",height:"20",rx:"2",key:"749fme"}]],Zo=Oe("microchip",jE);const zE=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Ov=Oe("network",zE);const kE=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Nv=Oe("radio",kE);const HE=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],IE=Oe("search",HE);const PE=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Uf=Oe("tag",PE);const UE=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Mv=Oe("terminal",UE);const BE=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Dv=Oe("timer",BE);const GE=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],Lv=Oe("wifi",GE);const VE=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Wo=Oe("wrench",VE);const FE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],qE=Oe("x",FE);function YE(){const{t:a,i18n:i}=Fi(),r=mn(),[o,s]=v.useState(!1),u=()=>{const h=i.language==="zh"?"en":"zh";i.changeLanguage(h)},d=[{path:"/",label:a("nav.home"),icon:RE},{path:"/notes",label:a("nav.notes"),icon:Qo}],p=h=>h==="/"?r.pathname==="/":r.pathname.startsWith(h);return S.jsx("nav",{className:"sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200",children:S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[S.jsxs("div",{className:"flex items-center justify-between h-16",children:[S.jsxs(Ze,{to:"/",className:"flex items-center gap-2",children:[S.jsx("div",{className:"w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center",children:S.jsx(Qo,{className:"w-5 h-5 text-white"})}),S.jsx("span",{className:"text-xl font-bold text-slate-800",children:a("home.title")})]}),S.jsx("div",{className:"hidden md:flex items-center gap-1",children:d.map(h=>S.jsx(Ze,{to:h.path,children:S.jsxs(Xt,{variant:p(h.path)?"default":"ghost",className:p(h.path)?"bg-indigo-500 hover:bg-indigo-600":"",children:[S.jsx(h.icon,{className:"w-4 h-4 mr-2"}),h.label]})},h.path))}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsxs(Xt,{variant:"ghost",size:"sm",onClick:u,className:"hidden md:flex items-center gap-2",children:[S.jsx(qg,{className:"w-4 h-4"}),S.jsx("span",{children:i.language==="zh"?"EN":"中文"})]}),S.jsx(Xt,{variant:"ghost",size:"icon",className:"md:hidden",onClick:()=>s(!o),children:o?S.jsx(qE,{className:"w-5 h-5"}):S.jsx(LE,{className:"w-5 h-5"})})]})]}),o&&S.jsx("div",{className:"md:hidden py-4 border-t border-slate-100",children:S.jsxs("div",{className:"flex flex-col gap-2",children:[d.map(h=>S.jsx(Ze,{to:h.path,onClick:()=>s(!1),children:S.jsxs(Xt,{variant:p(h.path)?"default":"ghost",className:`w-full justify-start ${p(h.path)?"bg-indigo-500 hover:bg-indigo-600":""}`,children:[S.jsx(h.icon,{className:"w-4 h-4 mr-2"}),h.label]})},h.path)),S.jsxs(Xt,{variant:"ghost",className:"w-full justify-start",onClick:()=>{u(),s(!1)},children:[S.jsx(qg,{className:"w-4 h-4 mr-2"}),a("language.switch")," (",i.language==="zh"?"EN":"中文",")"]})]})})]})})}function KE(){const{t:a}=Fi();return S.jsx("footer",{className:"bg-white border-t border-slate-200",children:S.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:S.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[S.jsx("p",{className:"text-sm text-slate-500",children:a("footer.copyright")}),S.jsx("p",{className:"text-sm text-slate-400",children:a("footer.poweredBy")})]})})})}function XE({children:a}){return S.jsxs("div",{className:"min-h-screen flex flex-col bg-slate-50",children:[S.jsx(YE,{}),S.jsx("main",{className:"flex-1",children:a}),S.jsx(KE,{})]})}function pa({className:a,...i}){return S.jsx("div",{"data-slot":"card",className:Qt("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",a),...i})}function ha({className:a,...i}){return S.jsx("div",{"data-slot":"card-content",className:Qt("px-6",a),...i})}const QE=iv("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function us({className:a,variant:i,asChild:r=!1,...o}){const s=r?tv:"span";return S.jsx(s,{"data-slot":"badge",className:Qt(QE({variant:i}),a),...o})}const $E=`## useState 使用技巧

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
`,ZE=`## useState Tips

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
`,WE=`## 事件循环优化

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
`,JE=`## Event Loop Optimization

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
`,e2=`# Git 工作流最佳实践

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
`,t2=`# Git Workflow Best Practices

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
`,n2=`# CSS Flexbox 布局完全指南

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
`,a2=`# CSS Flexbox Complete Guide

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
`,i2=`# TypeScript 高级用法

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
`,l2=`# TypeScript Advanced Usage

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
`,r2=`# RESTful API 设计最佳实践

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
`,o2=`# RESTful API Design Best Practices

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
`,s2=`# 数据库性能优化指南

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
`,c2=`# Database Performance Optimization Guide

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
`,u2=`# STM32 入门完全指南

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
`,f2=`# STM32 Getting Started Guide

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
`,d2=`# FreeRTOS 实时操作系统入门

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
`,p2=`# FreeRTOS Real-Time Operating System Basics

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
`,h2=`# CAN 总线协议详解

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
`,m2=`# CAN Bus Protocol Detailed Guide

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
`,g2=`# PCB 设计实战指南

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
`,y2=`# PCB Design Practical Guide

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
`,jv=[{id:"1",slug:"react-hooks-best-practices",status:"published",category:"frontend",tags:["React","Hooks","Best Practices"],createdAt:"2026-03-15",updatedAt:"2026-03-18",zh:{title:"React Hooks 最佳实践",summary:"深入理解 React Hooks 的使用模式，包括 useState、useEffect、useCallback 和 useMemo 的正确用法。",content:$E},en:{title:"React Hooks Best Practices",summary:"Deep dive into React Hooks usage patterns, including proper usage of useState, useEffect, useCallback, and useMemo.",content:ZE}},{id:"2",slug:"nodejs-performance-optimization",status:"published",category:"backend",tags:["Node.js","Performance","Optimization"],createdAt:"2026-03-10",updatedAt:"2026-03-12",zh:{title:"Node.js 性能优化指南",summary:"从事件循环、内存管理到集群部署，全面提升 Node.js 应用性能。",content:WE},en:{title:"Node.js Performance Optimization Guide",summary:"From event loop, memory management to cluster deployment, comprehensively improve Node.js application performance.",content:JE}},{id:"6",slug:"git-workflow",status:"published",category:"devops",tags:["Git","Workflow","DevOps"],createdAt:"2026-03-20",updatedAt:"2026-03-20",zh:{title:"Git 工作流最佳实践",summary:"团队协作中 Git 分支管理策略与提交规范详解。",content:e2},en:{title:"Git Workflow Best Practices",summary:"Branch management strategies and commit conventions for team collaboration.",content:t2}},{id:"7",slug:"css-flexbox",status:"published",category:"frontend",tags:["CSS","Flexbox","Layout"],createdAt:"2026-03-22",updatedAt:"2026-03-22",zh:{title:"CSS Flexbox 布局完全指南",summary:"从基础概念到实战技巧，全面掌握 Flexbox 弹性布局。",content:n2},en:{title:"CSS Flexbox Complete Guide",summary:"From basics to practical techniques, master Flexbox layout.",content:a2}},{id:"8",slug:"typescript-advanced",status:"published",category:"frontend",tags:["TypeScript","JavaScript","Frontend"],createdAt:"2026-03-25",updatedAt:"2026-03-25",zh:{title:"TypeScript 高级用法",summary:"深入理解泛型、条件类型、映射类型等 TypeScript 高级特性。",content:i2},en:{title:"TypeScript Advanced Usage",summary:"Deep dive into generics, conditional types, mapped types and other advanced TypeScript features.",content:l2}},{id:"9",slug:"restful-api-design",status:"published",category:"backend",tags:["API","REST","Backend"],createdAt:"2026-03-26",updatedAt:"2026-03-26",zh:{title:"RESTful API 设计最佳实践",summary:"从 URL 设计到状态码规范，构建高质量的 RESTful API。",content:r2},en:{title:"RESTful API Design Best Practices",summary:"From URL design to status code conventions, build high-quality RESTful APIs.",content:o2}},{id:"10",slug:"database-optimization",status:"published",category:"backend",tags:["Database","Performance","SQL"],createdAt:"2026-03-28",updatedAt:"2026-03-28",zh:{title:"数据库性能优化指南",summary:"索引优化、查询优化、缓存策略，全面提升数据库性能。",content:s2},en:{title:"Database Performance Optimization Guide",summary:"Index optimization, query optimization, caching strategies for comprehensive database performance.",content:c2}},{id:"11",slug:"stm32-getting-started",status:"published",category:"mcu",tags:["STM32","ARM","Embedded"],createdAt:"2026-03-30",updatedAt:"2026-03-30",zh:{title:"STM32 入门完全指南",summary:"从开发环境搭建到第一个程序，STM32 单片机入门教程。",content:u2},en:{title:"STM32 Getting Started Guide",summary:"From environment setup to first program, STM32 microcontroller tutorial.",content:f2}},{id:"12",slug:"freertos-basics",status:"published",category:"rtos",tags:["FreeRTOS","RTOS","Embedded"],createdAt:"2026-04-02",updatedAt:"2026-04-02",zh:{title:"FreeRTOS 实时操作系统入门",summary:"任务管理、信号量、队列通信，FreeRTOS 核心概念详解。",content:d2},en:{title:"FreeRTOS Real-Time Operating System Basics",summary:"Task management, semaphores, queue communication, FreeRTOS core concepts.",content:p2}},{id:"13",slug:"can-bus-protocol",status:"published",category:"protocols",tags:["CAN","Automotive","Communication"],createdAt:"2026-04-05",updatedAt:"2026-04-05",zh:{title:"CAN 总线协议详解",summary:"从物理层到应用层，CAN 总线原理与 STM32 编程实战。",content:h2},en:{title:"CAN Bus Protocol Detailed Guide",summary:"From physical to application layer, CAN bus principles and STM32 programming.",content:m2}},{id:"14",slug:"pcb-design-guide",status:"published",category:"hardware-design",tags:["PCB","Hardware","Design"],createdAt:"2026-04-08",updatedAt:"2026-04-08",zh:{title:"PCB 设计实战指南",summary:"布局布线、电源完整性、EMC 设计，高质量 PCB 设计要点。",content:g2},en:{title:"PCB Design Practical Guide",summary:"Layout routing, power integrity, EMC design, high-quality PCB design essentials.",content:y2}}];function fs(){return jv.filter(a=>a.status==="published")}function v2(a){return jv.find(i=>i.slug===a)}function x2(a){return fs().filter(i=>i.category===a)}const Ya=[{id:"mcu",slug:"mcu",icon:"Cpu",zh:{name:"单片机/MCU",description:"STM32、ESP32、Arduino、树莓派 Pico 等微控制器开发"},en:{name:"MCU",description:"STM32, ESP32, Arduino, Raspberry Pi Pico development"}},{id:"mpu",slug:"mpu",icon:"Microchip",zh:{name:"嵌入式处理器",description:"ARM Cortex-A、RISC-V、树莓派、全志、瑞芯微等 Linux 嵌入式平台"},en:{name:"Embedded MPU",description:"ARM Cortex-A, RISC-V, Raspberry Pi, Allwinner, Rockchip Linux platforms"}},{id:"fpga",slug:"fpga",icon:"Grid3x3",zh:{name:"FPGA/Verilog",description:"Xilinx、Altera、Lattice FPGA 开发，Verilog/VHDL 数字电路设计"},en:{name:"FPGA/Verilog",description:"Xilinx, Altera, Lattice FPGA, Verilog/VHDL digital design"}},{id:"rtos",slug:"rtos",icon:"Timer",zh:{name:"实时操作系统",description:"FreeRTOS、RT-Thread、Zephyr、μC/OS 等 RTOS 原理与移植"},en:{name:"RTOS",description:"FreeRTOS, RT-Thread, Zephyr, μC/OS principles and porting"}},{id:"embedded-linux",slug:"embedded-linux",icon:"Terminal",zh:{name:"嵌入式 Linux",description:"Linux 内核移植、驱动开发、Buildroot/Yocto、设备树"},en:{name:"Embedded Linux",description:"Linux kernel porting, driver development, Buildroot/Yocto, device tree"}},{id:"firmware",slug:"firmware",icon:"FileCode",zh:{name:"固件开发",description:"Bare-metal 编程、启动代码、链接脚本、Bootloader"},en:{name:"Firmware",description:"Bare-metal programming, startup code, linker scripts, Bootloader"}},{id:"protocols",slug:"protocols",icon:"Network",zh:{name:"通信协议",description:"CAN/CANFD、Modbus、RS485、I2C、SPI、UART、USB、Ethernet、BLE、LoRa"},en:{name:"Protocols",description:"CAN/CANFD, Modbus, RS485, I2C, SPI, UART, USB, Ethernet, BLE, LoRa"}},{id:"network",slug:"network",icon:"Wifi",zh:{name:"网络通信",description:"TCP/IP、MQTT、CoAP、HTTP、Socket、LwIP、网络栈配置"},en:{name:"Networking",description:"TCP/IP, MQTT, CoAP, HTTP, Socket, LwIP, network stack"}},{id:"tools",slug:"tools",icon:"Wrench",zh:{name:"开发工具",description:"Keil、IAR、VS Code、PlatformIO、OpenOCD、JTAG/SWD 调试"},en:{name:"Tools",description:"Keil, IAR, VS Code, PlatformIO, OpenOCD, JTAG/SWD debugging"}},{id:"hardware-design",slug:"hardware-design",icon:"CircuitBoard",zh:{name:"硬件设计",description:"Altium Designer、KiCad、PCB Layout、电路设计、信号完整性"},en:{name:"Hardware Design",description:"Altium Designer, KiCad, PCB Layout, circuit design, signal integrity"}},{id:"automotive",slug:"automotive",icon:"Car",zh:{name:"汽车电子",description:"汽车总线、ECU、功能安全、Autosar、诊断协议 UDS"},en:{name:"Automotive",description:"Automotive bus, ECU, functional safety, Autosar, UDS diagnostics"}},{id:"iot",slug:"iot",icon:"Radio",zh:{name:"物联网/IoT",description:"传感器、边缘计算、云平台对接、OTA升级、低功耗设计"},en:{name:"IoT",description:"Sensors, edge computing, cloud integration, OTA, low power design"}},{id:"industrial",slug:"industrial",icon:"Factory",zh:{name:"工业控制",description:"PLC、运动控制、PID算法、工业以太网、机器视觉"},en:{name:"Industrial",description:"PLC, motion control, PID algorithms, industrial Ethernet, machine vision"}},{id:"embedded-c",slug:"embedded-c",icon:"Code",zh:{name:"嵌入式 C/C++",description:"嵌入式编程规范、内存管理、中断处理、代码优化"},en:{name:"Embedded C/C++",description:"Embedded coding standards, memory management, interrupts, optimization"}},{id:"algorithms",slug:"algorithms",icon:"Calculator",zh:{name:"算法与数据结构",description:"滤波算法、数字信号处理、控制算法、常用数据结构"},en:{name:"Algorithms",description:"Filter algorithms, DSP, control algorithms, data structures"}}],S2=a=>Ya.find(i=>i.slug===a),b2={mcu:Ev,mpu:Zo,fpga:_v,rtos:Dv,"embedded-linux":Mv,firmware:wv,protocols:Ov,network:Lv,tools:Wo,"hardware-design":Cv,automotive:Sv,iot:Nv,industrial:Av,"embedded-c":$o,algorithms:xv,frontend:$o,backend:Zo,devops:Wo};function C2(){const{t:a,i18n:i}=Fi(),r=i.language,o=fs().slice(0,6);return S.jsxs("div",{children:[S.jsxs("section",{className:"relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white py-20 md:py-32",children:[S.jsx("div",{className:"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20"}),S.jsxs("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[S.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-6",children:a("home.title")}),S.jsx("p",{className:"text-xl md:text-2xl text-indigo-100 mb-4",children:a("home.subtitle")}),S.jsx("p",{className:"text-lg text-indigo-200 mb-8 max-w-2xl mx-auto",children:a("home.description")}),S.jsx(Ze,{to:"/notes",children:S.jsxs(Xt,{size:"lg",className:"bg-white text-indigo-600 hover:bg-indigo-50",children:[a("home.viewAll"),S.jsx(Fg,{className:"w-4 h-4 ml-2"})]})})]})]}),S.jsx("section",{className:"py-16 bg-white",children:S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[S.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center",children:a("home.categories")}),S.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:Ya.map(s=>{const u=b2[s.slug]||Qo;return S.jsx(Ze,{to:`/category/${s.slug}`,children:S.jsx(pa,{className:"h-full hover:shadow-lg transition-shadow cursor-pointer group",children:S.jsx(ha,{className:"p-6",children:S.jsxs("div",{className:"flex items-start gap-4",children:[S.jsx("div",{className:"w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-500 transition-colors",children:S.jsx(u,{className:"w-6 h-6 text-indigo-500 group-hover:text-white transition-colors"})}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-1",children:s[r].name}),S.jsx("p",{className:"text-sm text-slate-500",children:s[r].description})]})]})})})},s.id)})})]})}),S.jsx("section",{className:"py-16 bg-slate-50",children:S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[S.jsxs("div",{className:"flex items-center justify-between mb-8",children:[S.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-slate-800",children:a("home.latestNotes")}),S.jsx(Ze,{to:"/notes",children:S.jsxs(Xt,{variant:"ghost",className:"text-indigo-600",children:[a("home.viewAll"),S.jsx(Fg,{className:"w-4 h-4 ml-1"})]})})]}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:o.map(s=>S.jsx(T2,{note:s,lang:r},s.id))})]})})]})}function T2({note:a,lang:i}){const r=Ya.find(o=>o.slug===a.category);return S.jsx(Ze,{to:`/notes/${a.slug}`,children:S.jsx(pa,{className:"h-full hover:shadow-lg transition-shadow cursor-pointer",children:S.jsxs(ha,{className:"p-6",children:[S.jsx("div",{className:"flex items-center gap-2 mb-3",children:S.jsx(us,{variant:"secondary",className:"text-xs",children:r?.[i].name})}),S.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-2 line-clamp-2",children:a[i].title}),S.jsx("p",{className:"text-sm text-slate-500 mb-4 line-clamp-3",children:a[i].summary}),S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsx("div",{className:"flex flex-wrap gap-1",children:a.tags.slice(0,2).map(o=>S.jsxs("span",{className:"text-xs text-slate-400",children:["#",o]},o))}),S.jsx("span",{className:"text-xs text-slate-400",children:a.createdAt})]})]})})})}function E2({className:a,type:i,...r}){return S.jsx("input",{type:i,"data-slot":"input",className:Qt("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",a),...r})}function Yg(a,[i,r]){return Math.min(r,Math.max(i,a))}function Be(a,i,{checkForDefaultPrevented:r=!0}={}){return function(s){if(a?.(s),r===!1||!s.defaultPrevented)return i?.(s)}}function ds(a,i=[]){let r=[];function o(u,d){const p=v.createContext(d),h=r.length;r=[...r,d];const m=y=>{const{scope:T,children:E,...w}=y,C=T?.[a]?.[h]||p,A=v.useMemo(()=>w,Object.values(w));return S.jsx(C.Provider,{value:A,children:E})};m.displayName=u+"Provider";function x(y,T){const E=T?.[a]?.[h]||p,w=v.useContext(E);if(w)return w;if(d!==void 0)return d;throw new Error(`\`${y}\` must be used within \`${u}\``)}return[m,x]}const s=()=>{const u=r.map(d=>v.createContext(d));return function(p){const h=p?.[a]||u;return v.useMemo(()=>({[`__scope${a}`]:{...p,[a]:h}}),[p,h])}};return s.scopeName=a,[o,A2(s,...i)]}function A2(...a){const i=a[0];if(a.length===1)return i;const r=()=>{const o=a.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(u){const d=o.reduce((p,{useScope:h,scopeName:m})=>{const y=h(u)[`__scope${m}`];return{...p,...y}},{});return v.useMemo(()=>({[`__scope${i.scopeName}`]:d}),[d])}};return r.scopeName=i.scopeName,r}function Kg(a){const i=w2(a),r=v.forwardRef((o,s)=>{const{children:u,...d}=o,p=v.Children.toArray(u),h=p.find(_2);if(h){const m=h.props.children,x=p.map(y=>y===h?v.Children.count(m)>1?v.Children.only(null):v.isValidElement(m)?m.props.children:null:y);return S.jsx(i,{...d,ref:s,children:v.isValidElement(m)?v.cloneElement(m,void 0,x):null})}return S.jsx(i,{...d,ref:s,children:u})});return r.displayName=`${a}.Slot`,r}function w2(a){const i=v.forwardRef((r,o)=>{const{children:s,...u}=r;if(v.isValidElement(s)){const d=N2(s),p=O2(u,s.props);return s.type!==v.Fragment&&(p.ref=o?or(o,d):d),v.cloneElement(s,p)}return v.Children.count(s)>1?v.Children.only(null):null});return i.displayName=`${a}.SlotClone`,i}var R2=Symbol("radix.slottable");function _2(a){return v.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===R2}function O2(a,i){const r={...i};for(const o in i){const s=a[o],u=i[o];/^on[A-Z]/.test(o)?s&&u?r[o]=(...p)=>{const h=u(...p);return s(...p),h}:s&&(r[o]=s):o==="style"?r[o]={...s,...u}:o==="className"&&(r[o]=[s,u].filter(Boolean).join(" "))}return{...a,...r}}function N2(a){let i=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning;return r?a.ref:(i=Object.getOwnPropertyDescriptor(a,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning,r?a.props.ref:a.props.ref||a.ref)}function M2(a){const i=a+"CollectionProvider",[r,o]=ds(i),[s,u]=r(i,{collectionRef:{current:null},itemMap:new Map}),d=C=>{const{scope:A,children:M}=C,N=fa.useRef(null),j=fa.useRef(new Map).current;return S.jsx(s,{scope:A,itemMap:j,collectionRef:N,children:M})};d.displayName=i;const p=a+"CollectionSlot",h=Kg(p),m=fa.forwardRef((C,A)=>{const{scope:M,children:N}=C,j=u(p,M),U=nt(A,j.collectionRef);return S.jsx(h,{ref:U,children:N})});m.displayName=p;const x=a+"CollectionItemSlot",y="data-radix-collection-item",T=Kg(x),E=fa.forwardRef((C,A)=>{const{scope:M,children:N,...j}=C,U=fa.useRef(null),G=nt(A,U),Z=u(x,M);return fa.useEffect(()=>(Z.itemMap.set(U,{ref:U,...j}),()=>{Z.itemMap.delete(U)})),S.jsx(T,{[y]:"",ref:G,children:N})});E.displayName=x;function w(C){const A=u(a+"CollectionConsumer",C);return fa.useCallback(()=>{const N=A.collectionRef.current;if(!N)return[];const j=Array.from(N.querySelectorAll(`[${y}]`));return Array.from(A.itemMap.values()).sort((Z,B)=>j.indexOf(Z.ref.current)-j.indexOf(B.ref.current))},[A.collectionRef,A.itemMap])}return[{Provider:d,Slot:m,ItemSlot:E},w,o]}var D2=v.createContext(void 0);function L2(a){const i=v.useContext(D2);return a||i||"ltr"}function j2(a){const i=z2(a),r=v.forwardRef((o,s)=>{const{children:u,...d}=o,p=v.Children.toArray(u),h=p.find(H2);if(h){const m=h.props.children,x=p.map(y=>y===h?v.Children.count(m)>1?v.Children.only(null):v.isValidElement(m)?m.props.children:null:y);return S.jsx(i,{...d,ref:s,children:v.isValidElement(m)?v.cloneElement(m,void 0,x):null})}return S.jsx(i,{...d,ref:s,children:u})});return r.displayName=`${a}.Slot`,r}function z2(a){const i=v.forwardRef((r,o)=>{const{children:s,...u}=r;if(v.isValidElement(s)){const d=P2(s),p=I2(u,s.props);return s.type!==v.Fragment&&(p.ref=o?or(o,d):d),v.cloneElement(s,p)}return v.Children.count(s)>1?v.Children.only(null):null});return i.displayName=`${a}.SlotClone`,i}var k2=Symbol("radix.slottable");function H2(a){return v.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===k2}function I2(a,i){const r={...i};for(const o in i){const s=a[o],u=i[o];/^on[A-Z]/.test(o)?s&&u?r[o]=(...p)=>{const h=u(...p);return s(...p),h}:s&&(r[o]=s):o==="style"?r[o]={...s,...u}:o==="className"&&(r[o]=[s,u].filter(Boolean).join(" "))}return{...a,...r}}function P2(a){let i=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning;return r?a.ref:(i=Object.getOwnPropertyDescriptor(a,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning,r?a.props.ref:a.props.ref||a.ref)}var U2=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Xe=U2.reduce((a,i)=>{const r=j2(`Primitive.${i}`),o=v.forwardRef((s,u)=>{const{asChild:d,...p}=s,h=d?r:i;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),S.jsx(h,{...p,ref:u})});return o.displayName=`Primitive.${i}`,{...a,[i]:o}},{});function B2(a,i){a&&rr.flushSync(()=>a.dispatchEvent(i))}function Ga(a){const i=v.useRef(a);return v.useEffect(()=>{i.current=a}),v.useMemo(()=>(...r)=>i.current?.(...r),[])}function G2(a,i=globalThis?.document){const r=Ga(a);v.useEffect(()=>{const o=s=>{s.key==="Escape"&&r(s)};return i.addEventListener("keydown",o,{capture:!0}),()=>i.removeEventListener("keydown",o,{capture:!0})},[r,i])}var V2="DismissableLayer",xf="dismissableLayer.update",F2="dismissableLayer.pointerDownOutside",q2="dismissableLayer.focusOutside",Xg,zv=v.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Bf=v.forwardRef((a,i)=>{const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:u,onInteractOutside:d,onDismiss:p,...h}=a,m=v.useContext(zv),[x,y]=v.useState(null),T=x?.ownerDocument??globalThis?.document,[,E]=v.useState({}),w=nt(i,B=>y(B)),C=Array.from(m.layers),[A]=[...m.layersWithOutsidePointerEventsDisabled].slice(-1),M=C.indexOf(A),N=x?C.indexOf(x):-1,j=m.layersWithOutsidePointerEventsDisabled.size>0,U=N>=M,G=X2(B=>{const X=B.target,J=[...m.branches].some(ee=>ee.contains(X));!U||J||(s?.(B),d?.(B),B.defaultPrevented||p?.())},T),Z=Q2(B=>{const X=B.target;[...m.branches].some(ee=>ee.contains(X))||(u?.(B),d?.(B),B.defaultPrevented||p?.())},T);return G2(B=>{N===m.layers.size-1&&(o?.(B),!B.defaultPrevented&&p&&(B.preventDefault(),p()))},T),v.useEffect(()=>{if(x)return r&&(m.layersWithOutsidePointerEventsDisabled.size===0&&(Xg=T.body.style.pointerEvents,T.body.style.pointerEvents="none"),m.layersWithOutsidePointerEventsDisabled.add(x)),m.layers.add(x),Qg(),()=>{r&&m.layersWithOutsidePointerEventsDisabled.size===1&&(T.body.style.pointerEvents=Xg)}},[x,T,r,m]),v.useEffect(()=>()=>{x&&(m.layers.delete(x),m.layersWithOutsidePointerEventsDisabled.delete(x),Qg())},[x,m]),v.useEffect(()=>{const B=()=>E({});return document.addEventListener(xf,B),()=>document.removeEventListener(xf,B)},[]),S.jsx(Xe.div,{...h,ref:w,style:{pointerEvents:j?U?"auto":"none":void 0,...a.style},onFocusCapture:Be(a.onFocusCapture,Z.onFocusCapture),onBlurCapture:Be(a.onBlurCapture,Z.onBlurCapture),onPointerDownCapture:Be(a.onPointerDownCapture,G.onPointerDownCapture)})});Bf.displayName=V2;var Y2="DismissableLayerBranch",K2=v.forwardRef((a,i)=>{const r=v.useContext(zv),o=v.useRef(null),s=nt(i,o);return v.useEffect(()=>{const u=o.current;if(u)return r.branches.add(u),()=>{r.branches.delete(u)}},[r.branches]),S.jsx(Xe.div,{...a,ref:s})});K2.displayName=Y2;function X2(a,i=globalThis?.document){const r=Ga(a),o=v.useRef(!1),s=v.useRef(()=>{});return v.useEffect(()=>{const u=p=>{if(p.target&&!o.current){let h=function(){kv(F2,r,m,{discrete:!0})};const m={originalEvent:p};p.pointerType==="touch"?(i.removeEventListener("click",s.current),s.current=h,i.addEventListener("click",s.current,{once:!0})):h()}else i.removeEventListener("click",s.current);o.current=!1},d=window.setTimeout(()=>{i.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(d),i.removeEventListener("pointerdown",u),i.removeEventListener("click",s.current)}},[i,r]),{onPointerDownCapture:()=>o.current=!0}}function Q2(a,i=globalThis?.document){const r=Ga(a),o=v.useRef(!1);return v.useEffect(()=>{const s=u=>{u.target&&!o.current&&kv(q2,r,{originalEvent:u},{discrete:!1})};return i.addEventListener("focusin",s),()=>i.removeEventListener("focusin",s)},[i,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}function Qg(){const a=new CustomEvent(xf);document.dispatchEvent(a)}function kv(a,i,r,{discrete:o}){const s=r.originalEvent.target,u=new CustomEvent(a,{bubbles:!1,cancelable:!0,detail:r});i&&s.addEventListener(a,i,{once:!0}),o?B2(s,u):s.dispatchEvent(u)}var nf=0;function $2(){v.useEffect(()=>{const a=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",a[0]??$g()),document.body.insertAdjacentElement("beforeend",a[1]??$g()),nf++,()=>{nf===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(i=>i.remove()),nf--}},[])}function $g(){const a=document.createElement("span");return a.setAttribute("data-radix-focus-guard",""),a.tabIndex=0,a.style.outline="none",a.style.opacity="0",a.style.position="fixed",a.style.pointerEvents="none",a}var af="focusScope.autoFocusOnMount",lf="focusScope.autoFocusOnUnmount",Zg={bubbles:!1,cancelable:!0},Z2="FocusScope",Hv=v.forwardRef((a,i)=>{const{loop:r=!1,trapped:o=!1,onMountAutoFocus:s,onUnmountAutoFocus:u,...d}=a,[p,h]=v.useState(null),m=Ga(s),x=Ga(u),y=v.useRef(null),T=nt(i,C=>h(C)),E=v.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;v.useEffect(()=>{if(o){let C=function(j){if(E.paused||!p)return;const U=j.target;p.contains(U)?y.current=U:da(y.current,{select:!0})},A=function(j){if(E.paused||!p)return;const U=j.relatedTarget;U!==null&&(p.contains(U)||da(y.current,{select:!0}))},M=function(j){if(document.activeElement===document.body)for(const G of j)G.removedNodes.length>0&&da(p)};document.addEventListener("focusin",C),document.addEventListener("focusout",A);const N=new MutationObserver(M);return p&&N.observe(p,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",C),document.removeEventListener("focusout",A),N.disconnect()}}},[o,p,E.paused]),v.useEffect(()=>{if(p){Jg.add(E);const C=document.activeElement;if(!p.contains(C)){const M=new CustomEvent(af,Zg);p.addEventListener(af,m),p.dispatchEvent(M),M.defaultPrevented||(W2(aA(Iv(p)),{select:!0}),document.activeElement===C&&da(p))}return()=>{p.removeEventListener(af,m),setTimeout(()=>{const M=new CustomEvent(lf,Zg);p.addEventListener(lf,x),p.dispatchEvent(M),M.defaultPrevented||da(C??document.body,{select:!0}),p.removeEventListener(lf,x),Jg.remove(E)},0)}}},[p,m,x,E]);const w=v.useCallback(C=>{if(!r&&!o||E.paused)return;const A=C.key==="Tab"&&!C.altKey&&!C.ctrlKey&&!C.metaKey,M=document.activeElement;if(A&&M){const N=C.currentTarget,[j,U]=J2(N);j&&U?!C.shiftKey&&M===U?(C.preventDefault(),r&&da(j,{select:!0})):C.shiftKey&&M===j&&(C.preventDefault(),r&&da(U,{select:!0})):M===N&&C.preventDefault()}},[r,o,E.paused]);return S.jsx(Xe.div,{tabIndex:-1,...d,ref:T,onKeyDown:w})});Hv.displayName=Z2;function W2(a,{select:i=!1}={}){const r=document.activeElement;for(const o of a)if(da(o,{select:i}),document.activeElement!==r)return}function J2(a){const i=Iv(a),r=Wg(i,a),o=Wg(i.reverse(),a);return[r,o]}function Iv(a){const i=[],r=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const s=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||s?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)i.push(r.currentNode);return i}function Wg(a,i){for(const r of a)if(!eA(r,{upTo:i}))return r}function eA(a,{upTo:i}){if(getComputedStyle(a).visibility==="hidden")return!0;for(;a;){if(i!==void 0&&a===i)return!1;if(getComputedStyle(a).display==="none")return!0;a=a.parentElement}return!1}function tA(a){return a instanceof HTMLInputElement&&"select"in a}function da(a,{select:i=!1}={}){if(a&&a.focus){const r=document.activeElement;a.focus({preventScroll:!0}),a!==r&&tA(a)&&i&&a.select()}}var Jg=nA();function nA(){let a=[];return{add(i){const r=a[0];i!==r&&r?.pause(),a=ey(a,i),a.unshift(i)},remove(i){a=ey(a,i),a[0]?.resume()}}}function ey(a,i){const r=[...a],o=r.indexOf(i);return o!==-1&&r.splice(o,1),r}function aA(a){return a.filter(i=>i.tagName!=="A")}var pt=globalThis?.document?v.useLayoutEffect:()=>{},iA=Df[" useId ".trim().toString()]||(()=>{}),lA=0;function ps(a){const[i,r]=v.useState(iA());return pt(()=>{r(o=>o??String(lA++))},[a]),a||(i?`radix-${i}`:"")}const rA=["top","right","bottom","left"],ma=Math.min,zt=Math.max,Jo=Math.round,Do=Math.floor,pn=a=>({x:a,y:a}),oA={left:"right",right:"left",bottom:"top",top:"bottom"},sA={start:"end",end:"start"};function Sf(a,i,r){return zt(a,ma(i,r))}function Hn(a,i){return typeof a=="function"?a(i):a}function In(a){return a.split("-")[0]}function Ki(a){return a.split("-")[1]}function Gf(a){return a==="x"?"y":"x"}function Vf(a){return a==="y"?"height":"width"}const cA=new Set(["top","bottom"]);function fn(a){return cA.has(In(a))?"y":"x"}function Ff(a){return Gf(fn(a))}function uA(a,i,r){r===void 0&&(r=!1);const o=Ki(a),s=Ff(a),u=Vf(s);let d=s==="x"?o===(r?"end":"start")?"right":"left":o==="start"?"bottom":"top";return i.reference[u]>i.floating[u]&&(d=es(d)),[d,es(d)]}function fA(a){const i=es(a);return[bf(a),i,bf(i)]}function bf(a){return a.replace(/start|end/g,i=>sA[i])}const ty=["left","right"],ny=["right","left"],dA=["top","bottom"],pA=["bottom","top"];function hA(a,i,r){switch(a){case"top":case"bottom":return r?i?ny:ty:i?ty:ny;case"left":case"right":return i?dA:pA;default:return[]}}function mA(a,i,r,o){const s=Ki(a);let u=hA(In(a),r==="start",o);return s&&(u=u.map(d=>d+"-"+s),i&&(u=u.concat(u.map(bf)))),u}function es(a){return a.replace(/left|right|bottom|top/g,i=>oA[i])}function gA(a){return{top:0,right:0,bottom:0,left:0,...a}}function Pv(a){return typeof a!="number"?gA(a):{top:a,right:a,bottom:a,left:a}}function ts(a){const{x:i,y:r,width:o,height:s}=a;return{width:o,height:s,top:r,left:i,right:i+o,bottom:r+s,x:i,y:r}}function ay(a,i,r){let{reference:o,floating:s}=a;const u=fn(i),d=Ff(i),p=Vf(d),h=In(i),m=u==="y",x=o.x+o.width/2-s.width/2,y=o.y+o.height/2-s.height/2,T=o[p]/2-s[p]/2;let E;switch(h){case"top":E={x,y:o.y-s.height};break;case"bottom":E={x,y:o.y+o.height};break;case"right":E={x:o.x+o.width,y};break;case"left":E={x:o.x-s.width,y};break;default:E={x:o.x,y:o.y}}switch(Ki(i)){case"start":E[d]-=T*(r&&m?-1:1);break;case"end":E[d]+=T*(r&&m?-1:1);break}return E}const yA=async(a,i,r)=>{const{placement:o="bottom",strategy:s="absolute",middleware:u=[],platform:d}=r,p=u.filter(Boolean),h=await(d.isRTL==null?void 0:d.isRTL(i));let m=await d.getElementRects({reference:a,floating:i,strategy:s}),{x,y}=ay(m,o,h),T=o,E={},w=0;for(let C=0;C<p.length;C++){const{name:A,fn:M}=p[C],{x:N,y:j,data:U,reset:G}=await M({x,y,initialPlacement:o,placement:T,strategy:s,middlewareData:E,rects:m,platform:d,elements:{reference:a,floating:i}});x=N??x,y=j??y,E={...E,[A]:{...E[A],...U}},G&&w<=50&&(w++,typeof G=="object"&&(G.placement&&(T=G.placement),G.rects&&(m=G.rects===!0?await d.getElementRects({reference:a,floating:i,strategy:s}):G.rects),{x,y}=ay(m,T,h)),C=-1)}return{x,y,placement:T,strategy:s,middlewareData:E}};async function tr(a,i){var r;i===void 0&&(i={});const{x:o,y:s,platform:u,rects:d,elements:p,strategy:h}=a,{boundary:m="clippingAncestors",rootBoundary:x="viewport",elementContext:y="floating",altBoundary:T=!1,padding:E=0}=Hn(i,a),w=Pv(E),A=p[T?y==="floating"?"reference":"floating":y],M=ts(await u.getClippingRect({element:(r=await(u.isElement==null?void 0:u.isElement(A)))==null||r?A:A.contextElement||await(u.getDocumentElement==null?void 0:u.getDocumentElement(p.floating)),boundary:m,rootBoundary:x,strategy:h})),N=y==="floating"?{x:o,y:s,width:d.floating.width,height:d.floating.height}:d.reference,j=await(u.getOffsetParent==null?void 0:u.getOffsetParent(p.floating)),U=await(u.isElement==null?void 0:u.isElement(j))?await(u.getScale==null?void 0:u.getScale(j))||{x:1,y:1}:{x:1,y:1},G=ts(u.convertOffsetParentRelativeRectToViewportRelativeRect?await u.convertOffsetParentRelativeRectToViewportRelativeRect({elements:p,rect:N,offsetParent:j,strategy:h}):N);return{top:(M.top-G.top+w.top)/U.y,bottom:(G.bottom-M.bottom+w.bottom)/U.y,left:(M.left-G.left+w.left)/U.x,right:(G.right-M.right+w.right)/U.x}}const vA=a=>({name:"arrow",options:a,async fn(i){const{x:r,y:o,placement:s,rects:u,platform:d,elements:p,middlewareData:h}=i,{element:m,padding:x=0}=Hn(a,i)||{};if(m==null)return{};const y=Pv(x),T={x:r,y:o},E=Ff(s),w=Vf(E),C=await d.getDimensions(m),A=E==="y",M=A?"top":"left",N=A?"bottom":"right",j=A?"clientHeight":"clientWidth",U=u.reference[w]+u.reference[E]-T[E]-u.floating[w],G=T[E]-u.reference[E],Z=await(d.getOffsetParent==null?void 0:d.getOffsetParent(m));let B=Z?Z[j]:0;(!B||!await(d.isElement==null?void 0:d.isElement(Z)))&&(B=p.floating[j]||u.floating[w]);const X=U/2-G/2,J=B/2-C[w]/2-1,ee=ma(y[M],J),ne=ma(y[N],J),te=ee,oe=B-C[w]-ne,re=B/2-C[w]/2+X,ue=Sf(te,re,oe),D=!h.arrow&&Ki(s)!=null&&re!==ue&&u.reference[w]/2-(re<te?ee:ne)-C[w]/2<0,q=D?re<te?re-te:re-oe:0;return{[E]:T[E]+q,data:{[E]:ue,centerOffset:re-ue-q,...D&&{alignmentOffset:q}},reset:D}}}),xA=function(a){return a===void 0&&(a={}),{name:"flip",options:a,async fn(i){var r,o;const{placement:s,middlewareData:u,rects:d,initialPlacement:p,platform:h,elements:m}=i,{mainAxis:x=!0,crossAxis:y=!0,fallbackPlacements:T,fallbackStrategy:E="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:C=!0,...A}=Hn(a,i);if((r=u.arrow)!=null&&r.alignmentOffset)return{};const M=In(s),N=fn(p),j=In(p)===p,U=await(h.isRTL==null?void 0:h.isRTL(m.floating)),G=T||(j||!C?[es(p)]:fA(p)),Z=w!=="none";!T&&Z&&G.push(...mA(p,C,w,U));const B=[p,...G],X=await tr(i,A),J=[];let ee=((o=u.flip)==null?void 0:o.overflows)||[];if(x&&J.push(X[M]),y){const re=uA(s,d,U);J.push(X[re[0]],X[re[1]])}if(ee=[...ee,{placement:s,overflows:J}],!J.every(re=>re<=0)){var ne,te;const re=(((ne=u.flip)==null?void 0:ne.index)||0)+1,ue=B[re];if(ue&&(!(y==="alignment"?N!==fn(ue):!1)||ee.every(I=>fn(I.placement)===N?I.overflows[0]>0:!0)))return{data:{index:re,overflows:ee},reset:{placement:ue}};let D=(te=ee.filter(q=>q.overflows[0]<=0).sort((q,I)=>q.overflows[1]-I.overflows[1])[0])==null?void 0:te.placement;if(!D)switch(E){case"bestFit":{var oe;const q=(oe=ee.filter(I=>{if(Z){const se=fn(I.placement);return se===N||se==="y"}return!0}).map(I=>[I.placement,I.overflows.filter(se=>se>0).reduce((se,he)=>se+he,0)]).sort((I,se)=>I[1]-se[1])[0])==null?void 0:oe[0];q&&(D=q);break}case"initialPlacement":D=p;break}if(s!==D)return{reset:{placement:D}}}return{}}}};function iy(a,i){return{top:a.top-i.height,right:a.right-i.width,bottom:a.bottom-i.height,left:a.left-i.width}}function ly(a){return rA.some(i=>a[i]>=0)}const SA=function(a){return a===void 0&&(a={}),{name:"hide",options:a,async fn(i){const{rects:r}=i,{strategy:o="referenceHidden",...s}=Hn(a,i);switch(o){case"referenceHidden":{const u=await tr(i,{...s,elementContext:"reference"}),d=iy(u,r.reference);return{data:{referenceHiddenOffsets:d,referenceHidden:ly(d)}}}case"escaped":{const u=await tr(i,{...s,altBoundary:!0}),d=iy(u,r.floating);return{data:{escapedOffsets:d,escaped:ly(d)}}}default:return{}}}}},Uv=new Set(["left","top"]);async function bA(a,i){const{placement:r,platform:o,elements:s}=a,u=await(o.isRTL==null?void 0:o.isRTL(s.floating)),d=In(r),p=Ki(r),h=fn(r)==="y",m=Uv.has(d)?-1:1,x=u&&h?-1:1,y=Hn(i,a);let{mainAxis:T,crossAxis:E,alignmentAxis:w}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:{mainAxis:y.mainAxis||0,crossAxis:y.crossAxis||0,alignmentAxis:y.alignmentAxis};return p&&typeof w=="number"&&(E=p==="end"?w*-1:w),h?{x:E*x,y:T*m}:{x:T*m,y:E*x}}const CA=function(a){return a===void 0&&(a=0),{name:"offset",options:a,async fn(i){var r,o;const{x:s,y:u,placement:d,middlewareData:p}=i,h=await bA(i,a);return d===((r=p.offset)==null?void 0:r.placement)&&(o=p.arrow)!=null&&o.alignmentOffset?{}:{x:s+h.x,y:u+h.y,data:{...h,placement:d}}}}},TA=function(a){return a===void 0&&(a={}),{name:"shift",options:a,async fn(i){const{x:r,y:o,placement:s}=i,{mainAxis:u=!0,crossAxis:d=!1,limiter:p={fn:A=>{let{x:M,y:N}=A;return{x:M,y:N}}},...h}=Hn(a,i),m={x:r,y:o},x=await tr(i,h),y=fn(In(s)),T=Gf(y);let E=m[T],w=m[y];if(u){const A=T==="y"?"top":"left",M=T==="y"?"bottom":"right",N=E+x[A],j=E-x[M];E=Sf(N,E,j)}if(d){const A=y==="y"?"top":"left",M=y==="y"?"bottom":"right",N=w+x[A],j=w-x[M];w=Sf(N,w,j)}const C=p.fn({...i,[T]:E,[y]:w});return{...C,data:{x:C.x-r,y:C.y-o,enabled:{[T]:u,[y]:d}}}}}},EA=function(a){return a===void 0&&(a={}),{options:a,fn(i){const{x:r,y:o,placement:s,rects:u,middlewareData:d}=i,{offset:p=0,mainAxis:h=!0,crossAxis:m=!0}=Hn(a,i),x={x:r,y:o},y=fn(s),T=Gf(y);let E=x[T],w=x[y];const C=Hn(p,i),A=typeof C=="number"?{mainAxis:C,crossAxis:0}:{mainAxis:0,crossAxis:0,...C};if(h){const j=T==="y"?"height":"width",U=u.reference[T]-u.floating[j]+A.mainAxis,G=u.reference[T]+u.reference[j]-A.mainAxis;E<U?E=U:E>G&&(E=G)}if(m){var M,N;const j=T==="y"?"width":"height",U=Uv.has(In(s)),G=u.reference[y]-u.floating[j]+(U&&((M=d.offset)==null?void 0:M[y])||0)+(U?0:A.crossAxis),Z=u.reference[y]+u.reference[j]+(U?0:((N=d.offset)==null?void 0:N[y])||0)-(U?A.crossAxis:0);w<G?w=G:w>Z&&(w=Z)}return{[T]:E,[y]:w}}}},AA=function(a){return a===void 0&&(a={}),{name:"size",options:a,async fn(i){var r,o;const{placement:s,rects:u,platform:d,elements:p}=i,{apply:h=()=>{},...m}=Hn(a,i),x=await tr(i,m),y=In(s),T=Ki(s),E=fn(s)==="y",{width:w,height:C}=u.floating;let A,M;y==="top"||y==="bottom"?(A=y,M=T===(await(d.isRTL==null?void 0:d.isRTL(p.floating))?"start":"end")?"left":"right"):(M=y,A=T==="end"?"top":"bottom");const N=C-x.top-x.bottom,j=w-x.left-x.right,U=ma(C-x[A],N),G=ma(w-x[M],j),Z=!i.middlewareData.shift;let B=U,X=G;if((r=i.middlewareData.shift)!=null&&r.enabled.x&&(X=j),(o=i.middlewareData.shift)!=null&&o.enabled.y&&(B=N),Z&&!T){const ee=zt(x.left,0),ne=zt(x.right,0),te=zt(x.top,0),oe=zt(x.bottom,0);E?X=w-2*(ee!==0||ne!==0?ee+ne:zt(x.left,x.right)):B=C-2*(te!==0||oe!==0?te+oe:zt(x.top,x.bottom))}await h({...i,availableWidth:X,availableHeight:B});const J=await d.getDimensions(p.floating);return w!==J.width||C!==J.height?{reset:{rects:!0}}:{}}}};function hs(){return typeof window<"u"}function Xi(a){return Bv(a)?(a.nodeName||"").toLowerCase():"#document"}function kt(a){var i;return(a==null||(i=a.ownerDocument)==null?void 0:i.defaultView)||window}function gn(a){var i;return(i=(Bv(a)?a.ownerDocument:a.document)||window.document)==null?void 0:i.documentElement}function Bv(a){return hs()?a instanceof Node||a instanceof kt(a).Node:!1}function tn(a){return hs()?a instanceof Element||a instanceof kt(a).Element:!1}function hn(a){return hs()?a instanceof HTMLElement||a instanceof kt(a).HTMLElement:!1}function ry(a){return!hs()||typeof ShadowRoot>"u"?!1:a instanceof ShadowRoot||a instanceof kt(a).ShadowRoot}const wA=new Set(["inline","contents"]);function sr(a){const{overflow:i,overflowX:r,overflowY:o,display:s}=nn(a);return/auto|scroll|overlay|hidden|clip/.test(i+o+r)&&!wA.has(s)}const RA=new Set(["table","td","th"]);function _A(a){return RA.has(Xi(a))}const OA=[":popover-open",":modal"];function ms(a){return OA.some(i=>{try{return a.matches(i)}catch{return!1}})}const NA=["transform","translate","scale","rotate","perspective"],MA=["transform","translate","scale","rotate","perspective","filter"],DA=["paint","layout","strict","content"];function qf(a){const i=Yf(),r=tn(a)?nn(a):a;return NA.some(o=>r[o]?r[o]!=="none":!1)||(r.containerType?r.containerType!=="normal":!1)||!i&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!i&&(r.filter?r.filter!=="none":!1)||MA.some(o=>(r.willChange||"").includes(o))||DA.some(o=>(r.contain||"").includes(o))}function LA(a){let i=ga(a);for(;hn(i)&&!Pi(i);){if(qf(i))return i;if(ms(i))return null;i=ga(i)}return null}function Yf(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const jA=new Set(["html","body","#document"]);function Pi(a){return jA.has(Xi(a))}function nn(a){return kt(a).getComputedStyle(a)}function gs(a){return tn(a)?{scrollLeft:a.scrollLeft,scrollTop:a.scrollTop}:{scrollLeft:a.scrollX,scrollTop:a.scrollY}}function ga(a){if(Xi(a)==="html")return a;const i=a.assignedSlot||a.parentNode||ry(a)&&a.host||gn(a);return ry(i)?i.host:i}function Gv(a){const i=ga(a);return Pi(i)?a.ownerDocument?a.ownerDocument.body:a.body:hn(i)&&sr(i)?i:Gv(i)}function nr(a,i,r){var o;i===void 0&&(i=[]),r===void 0&&(r=!0);const s=Gv(a),u=s===((o=a.ownerDocument)==null?void 0:o.body),d=kt(s);if(u){const p=Cf(d);return i.concat(d,d.visualViewport||[],sr(s)?s:[],p&&r?nr(p):[])}return i.concat(s,nr(s,[],r))}function Cf(a){return a.parent&&Object.getPrototypeOf(a.parent)?a.frameElement:null}function Vv(a){const i=nn(a);let r=parseFloat(i.width)||0,o=parseFloat(i.height)||0;const s=hn(a),u=s?a.offsetWidth:r,d=s?a.offsetHeight:o,p=Jo(r)!==u||Jo(o)!==d;return p&&(r=u,o=d),{width:r,height:o,$:p}}function Kf(a){return tn(a)?a:a.contextElement}function Hi(a){const i=Kf(a);if(!hn(i))return pn(1);const r=i.getBoundingClientRect(),{width:o,height:s,$:u}=Vv(i);let d=(u?Jo(r.width):r.width)/o,p=(u?Jo(r.height):r.height)/s;return(!d||!Number.isFinite(d))&&(d=1),(!p||!Number.isFinite(p))&&(p=1),{x:d,y:p}}const zA=pn(0);function Fv(a){const i=kt(a);return!Yf()||!i.visualViewport?zA:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function kA(a,i,r){return i===void 0&&(i=!1),!r||i&&r!==kt(a)?!1:i}function Va(a,i,r,o){i===void 0&&(i=!1),r===void 0&&(r=!1);const s=a.getBoundingClientRect(),u=Kf(a);let d=pn(1);i&&(o?tn(o)&&(d=Hi(o)):d=Hi(a));const p=kA(u,r,o)?Fv(u):pn(0);let h=(s.left+p.x)/d.x,m=(s.top+p.y)/d.y,x=s.width/d.x,y=s.height/d.y;if(u){const T=kt(u),E=o&&tn(o)?kt(o):o;let w=T,C=Cf(w);for(;C&&o&&E!==w;){const A=Hi(C),M=C.getBoundingClientRect(),N=nn(C),j=M.left+(C.clientLeft+parseFloat(N.paddingLeft))*A.x,U=M.top+(C.clientTop+parseFloat(N.paddingTop))*A.y;h*=A.x,m*=A.y,x*=A.x,y*=A.y,h+=j,m+=U,w=kt(C),C=Cf(w)}}return ts({width:x,height:y,x:h,y:m})}function ys(a,i){const r=gs(a).scrollLeft;return i?i.left+r:Va(gn(a)).left+r}function qv(a,i){const r=a.getBoundingClientRect(),o=r.left+i.scrollLeft-ys(a,r),s=r.top+i.scrollTop;return{x:o,y:s}}function HA(a){let{elements:i,rect:r,offsetParent:o,strategy:s}=a;const u=s==="fixed",d=gn(o),p=i?ms(i.floating):!1;if(o===d||p&&u)return r;let h={scrollLeft:0,scrollTop:0},m=pn(1);const x=pn(0),y=hn(o);if((y||!y&&!u)&&((Xi(o)!=="body"||sr(d))&&(h=gs(o)),hn(o))){const E=Va(o);m=Hi(o),x.x=E.x+o.clientLeft,x.y=E.y+o.clientTop}const T=d&&!y&&!u?qv(d,h):pn(0);return{width:r.width*m.x,height:r.height*m.y,x:r.x*m.x-h.scrollLeft*m.x+x.x+T.x,y:r.y*m.y-h.scrollTop*m.y+x.y+T.y}}function IA(a){return Array.from(a.getClientRects())}function PA(a){const i=gn(a),r=gs(a),o=a.ownerDocument.body,s=zt(i.scrollWidth,i.clientWidth,o.scrollWidth,o.clientWidth),u=zt(i.scrollHeight,i.clientHeight,o.scrollHeight,o.clientHeight);let d=-r.scrollLeft+ys(a);const p=-r.scrollTop;return nn(o).direction==="rtl"&&(d+=zt(i.clientWidth,o.clientWidth)-s),{width:s,height:u,x:d,y:p}}const oy=25;function UA(a,i){const r=kt(a),o=gn(a),s=r.visualViewport;let u=o.clientWidth,d=o.clientHeight,p=0,h=0;if(s){u=s.width,d=s.height;const x=Yf();(!x||x&&i==="fixed")&&(p=s.offsetLeft,h=s.offsetTop)}const m=ys(o);if(m<=0){const x=o.ownerDocument,y=x.body,T=getComputedStyle(y),E=x.compatMode==="CSS1Compat"&&parseFloat(T.marginLeft)+parseFloat(T.marginRight)||0,w=Math.abs(o.clientWidth-y.clientWidth-E);w<=oy&&(u-=w)}else m<=oy&&(u+=m);return{width:u,height:d,x:p,y:h}}const BA=new Set(["absolute","fixed"]);function GA(a,i){const r=Va(a,!0,i==="fixed"),o=r.top+a.clientTop,s=r.left+a.clientLeft,u=hn(a)?Hi(a):pn(1),d=a.clientWidth*u.x,p=a.clientHeight*u.y,h=s*u.x,m=o*u.y;return{width:d,height:p,x:h,y:m}}function sy(a,i,r){let o;if(i==="viewport")o=UA(a,r);else if(i==="document")o=PA(gn(a));else if(tn(i))o=GA(i,r);else{const s=Fv(a);o={x:i.x-s.x,y:i.y-s.y,width:i.width,height:i.height}}return ts(o)}function Yv(a,i){const r=ga(a);return r===i||!tn(r)||Pi(r)?!1:nn(r).position==="fixed"||Yv(r,i)}function VA(a,i){const r=i.get(a);if(r)return r;let o=nr(a,[],!1).filter(p=>tn(p)&&Xi(p)!=="body"),s=null;const u=nn(a).position==="fixed";let d=u?ga(a):a;for(;tn(d)&&!Pi(d);){const p=nn(d),h=qf(d);!h&&p.position==="fixed"&&(s=null),(u?!h&&!s:!h&&p.position==="static"&&!!s&&BA.has(s.position)||sr(d)&&!h&&Yv(a,d))?o=o.filter(x=>x!==d):s=p,d=ga(d)}return i.set(a,o),o}function FA(a){let{element:i,boundary:r,rootBoundary:o,strategy:s}=a;const d=[...r==="clippingAncestors"?ms(i)?[]:VA(i,this._c):[].concat(r),o],p=d[0],h=d.reduce((m,x)=>{const y=sy(i,x,s);return m.top=zt(y.top,m.top),m.right=ma(y.right,m.right),m.bottom=ma(y.bottom,m.bottom),m.left=zt(y.left,m.left),m},sy(i,p,s));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function qA(a){const{width:i,height:r}=Vv(a);return{width:i,height:r}}function YA(a,i,r){const o=hn(i),s=gn(i),u=r==="fixed",d=Va(a,!0,u,i);let p={scrollLeft:0,scrollTop:0};const h=pn(0);function m(){h.x=ys(s)}if(o||!o&&!u)if((Xi(i)!=="body"||sr(s))&&(p=gs(i)),o){const E=Va(i,!0,u,i);h.x=E.x+i.clientLeft,h.y=E.y+i.clientTop}else s&&m();u&&!o&&s&&m();const x=s&&!o&&!u?qv(s,p):pn(0),y=d.left+p.scrollLeft-h.x-x.x,T=d.top+p.scrollTop-h.y-x.y;return{x:y,y:T,width:d.width,height:d.height}}function rf(a){return nn(a).position==="static"}function cy(a,i){if(!hn(a)||nn(a).position==="fixed")return null;if(i)return i(a);let r=a.offsetParent;return gn(a)===r&&(r=r.ownerDocument.body),r}function Kv(a,i){const r=kt(a);if(ms(a))return r;if(!hn(a)){let s=ga(a);for(;s&&!Pi(s);){if(tn(s)&&!rf(s))return s;s=ga(s)}return r}let o=cy(a,i);for(;o&&_A(o)&&rf(o);)o=cy(o,i);return o&&Pi(o)&&rf(o)&&!qf(o)?r:o||LA(a)||r}const KA=async function(a){const i=this.getOffsetParent||Kv,r=this.getDimensions,o=await r(a.floating);return{reference:YA(a.reference,await i(a.floating),a.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function XA(a){return nn(a).direction==="rtl"}const QA={convertOffsetParentRelativeRectToViewportRelativeRect:HA,getDocumentElement:gn,getClippingRect:FA,getOffsetParent:Kv,getElementRects:KA,getClientRects:IA,getDimensions:qA,getScale:Hi,isElement:tn,isRTL:XA};function Xv(a,i){return a.x===i.x&&a.y===i.y&&a.width===i.width&&a.height===i.height}function $A(a,i){let r=null,o;const s=gn(a);function u(){var p;clearTimeout(o),(p=r)==null||p.disconnect(),r=null}function d(p,h){p===void 0&&(p=!1),h===void 0&&(h=1),u();const m=a.getBoundingClientRect(),{left:x,top:y,width:T,height:E}=m;if(p||i(),!T||!E)return;const w=Do(y),C=Do(s.clientWidth-(x+T)),A=Do(s.clientHeight-(y+E)),M=Do(x),j={rootMargin:-w+"px "+-C+"px "+-A+"px "+-M+"px",threshold:zt(0,ma(1,h))||1};let U=!0;function G(Z){const B=Z[0].intersectionRatio;if(B!==h){if(!U)return d();B?d(!1,B):o=setTimeout(()=>{d(!1,1e-7)},1e3)}B===1&&!Xv(m,a.getBoundingClientRect())&&d(),U=!1}try{r=new IntersectionObserver(G,{...j,root:s.ownerDocument})}catch{r=new IntersectionObserver(G,j)}r.observe(a)}return d(!0),u}function ZA(a,i,r,o){o===void 0&&(o={});const{ancestorScroll:s=!0,ancestorResize:u=!0,elementResize:d=typeof ResizeObserver=="function",layoutShift:p=typeof IntersectionObserver=="function",animationFrame:h=!1}=o,m=Kf(a),x=s||u?[...m?nr(m):[],...nr(i)]:[];x.forEach(M=>{s&&M.addEventListener("scroll",r,{passive:!0}),u&&M.addEventListener("resize",r)});const y=m&&p?$A(m,r):null;let T=-1,E=null;d&&(E=new ResizeObserver(M=>{let[N]=M;N&&N.target===m&&E&&(E.unobserve(i),cancelAnimationFrame(T),T=requestAnimationFrame(()=>{var j;(j=E)==null||j.observe(i)})),r()}),m&&!h&&E.observe(m),E.observe(i));let w,C=h?Va(a):null;h&&A();function A(){const M=Va(a);C&&!Xv(C,M)&&r(),C=M,w=requestAnimationFrame(A)}return r(),()=>{var M;x.forEach(N=>{s&&N.removeEventListener("scroll",r),u&&N.removeEventListener("resize",r)}),y?.(),(M=E)==null||M.disconnect(),E=null,h&&cancelAnimationFrame(w)}}const WA=CA,JA=TA,ew=xA,tw=AA,nw=SA,uy=vA,aw=EA,iw=(a,i,r)=>{const o=new Map,s={platform:QA,...r},u={...s.platform,_c:o};return yA(a,i,{...s,platform:u})};var lw=typeof document<"u",rw=function(){},Uo=lw?v.useLayoutEffect:rw;function ns(a,i){if(a===i)return!0;if(typeof a!=typeof i)return!1;if(typeof a=="function"&&a.toString()===i.toString())return!0;let r,o,s;if(a&&i&&typeof a=="object"){if(Array.isArray(a)){if(r=a.length,r!==i.length)return!1;for(o=r;o--!==0;)if(!ns(a[o],i[o]))return!1;return!0}if(s=Object.keys(a),r=s.length,r!==Object.keys(i).length)return!1;for(o=r;o--!==0;)if(!{}.hasOwnProperty.call(i,s[o]))return!1;for(o=r;o--!==0;){const u=s[o];if(!(u==="_owner"&&a.$$typeof)&&!ns(a[u],i[u]))return!1}return!0}return a!==a&&i!==i}function Qv(a){return typeof window>"u"?1:(a.ownerDocument.defaultView||window).devicePixelRatio||1}function fy(a,i){const r=Qv(a);return Math.round(i*r)/r}function of(a){const i=v.useRef(a);return Uo(()=>{i.current=a}),i}function ow(a){a===void 0&&(a={});const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:s,elements:{reference:u,floating:d}={},transform:p=!0,whileElementsMounted:h,open:m}=a,[x,y]=v.useState({x:0,y:0,strategy:r,placement:i,middlewareData:{},isPositioned:!1}),[T,E]=v.useState(o);ns(T,o)||E(o);const[w,C]=v.useState(null),[A,M]=v.useState(null),N=v.useCallback(I=>{I!==Z.current&&(Z.current=I,C(I))},[]),j=v.useCallback(I=>{I!==B.current&&(B.current=I,M(I))},[]),U=u||w,G=d||A,Z=v.useRef(null),B=v.useRef(null),X=v.useRef(x),J=h!=null,ee=of(h),ne=of(s),te=of(m),oe=v.useCallback(()=>{if(!Z.current||!B.current)return;const I={placement:i,strategy:r,middleware:T};ne.current&&(I.platform=ne.current),iw(Z.current,B.current,I).then(se=>{const he={...se,isPositioned:te.current!==!1};re.current&&!ns(X.current,he)&&(X.current=he,rr.flushSync(()=>{y(he)}))})},[T,i,r,ne,te]);Uo(()=>{m===!1&&X.current.isPositioned&&(X.current.isPositioned=!1,y(I=>({...I,isPositioned:!1})))},[m]);const re=v.useRef(!1);Uo(()=>(re.current=!0,()=>{re.current=!1}),[]),Uo(()=>{if(U&&(Z.current=U),G&&(B.current=G),U&&G){if(ee.current)return ee.current(U,G,oe);oe()}},[U,G,oe,ee,J]);const ue=v.useMemo(()=>({reference:Z,floating:B,setReference:N,setFloating:j}),[N,j]),D=v.useMemo(()=>({reference:U,floating:G}),[U,G]),q=v.useMemo(()=>{const I={position:r,left:0,top:0};if(!D.floating)return I;const se=fy(D.floating,x.x),he=fy(D.floating,x.y);return p?{...I,transform:"translate("+se+"px, "+he+"px)",...Qv(D.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:se,top:he}},[r,p,D.floating,x.x,x.y]);return v.useMemo(()=>({...x,update:oe,refs:ue,elements:D,floatingStyles:q}),[x,oe,ue,D,q])}const sw=a=>{function i(r){return{}.hasOwnProperty.call(r,"current")}return{name:"arrow",options:a,fn(r){const{element:o,padding:s}=typeof a=="function"?a(r):a;return o&&i(o)?o.current!=null?uy({element:o.current,padding:s}).fn(r):{}:o?uy({element:o,padding:s}).fn(r):{}}}},cw=(a,i)=>({...WA(a),options:[a,i]}),uw=(a,i)=>({...JA(a),options:[a,i]}),fw=(a,i)=>({...aw(a),options:[a,i]}),dw=(a,i)=>({...ew(a),options:[a,i]}),pw=(a,i)=>({...tw(a),options:[a,i]}),hw=(a,i)=>({...nw(a),options:[a,i]}),mw=(a,i)=>({...sw(a),options:[a,i]});var gw="Arrow",$v=v.forwardRef((a,i)=>{const{children:r,width:o=10,height:s=5,...u}=a;return S.jsx(Xe.svg,{...u,ref:i,width:o,height:s,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:a.asChild?r:S.jsx("polygon",{points:"0,0 30,0 15,10"})})});$v.displayName=gw;var yw=$v;function vw(a){const[i,r]=v.useState(void 0);return pt(()=>{if(a){r({width:a.offsetWidth,height:a.offsetHeight});const o=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const u=s[0];let d,p;if("borderBoxSize"in u){const h=u.borderBoxSize,m=Array.isArray(h)?h[0]:h;d=m.inlineSize,p=m.blockSize}else d=a.offsetWidth,p=a.offsetHeight;r({width:d,height:p})});return o.observe(a,{box:"border-box"}),()=>o.unobserve(a)}else r(void 0)},[a]),i}var Xf="Popper",[Zv,vs]=ds(Xf),[xw,Wv]=Zv(Xf),Jv=a=>{const{__scopePopper:i,children:r}=a,[o,s]=v.useState(null);return S.jsx(xw,{scope:i,anchor:o,onAnchorChange:s,children:r})};Jv.displayName=Xf;var e0="PopperAnchor",t0=v.forwardRef((a,i)=>{const{__scopePopper:r,virtualRef:o,...s}=a,u=Wv(e0,r),d=v.useRef(null),p=nt(i,d),h=v.useRef(null);return v.useEffect(()=>{const m=h.current;h.current=o?.current||d.current,m!==h.current&&u.onAnchorChange(h.current)}),o?null:S.jsx(Xe.div,{...s,ref:p})});t0.displayName=e0;var Qf="PopperContent",[Sw,bw]=Zv(Qf),n0=v.forwardRef((a,i)=>{const{__scopePopper:r,side:o="bottom",sideOffset:s=0,align:u="center",alignOffset:d=0,arrowPadding:p=0,avoidCollisions:h=!0,collisionBoundary:m=[],collisionPadding:x=0,sticky:y="partial",hideWhenDetached:T=!1,updatePositionStrategy:E="optimized",onPlaced:w,...C}=a,A=Wv(Qf,r),[M,N]=v.useState(null),j=nt(i,$=>N($)),[U,G]=v.useState(null),Z=vw(U),B=Z?.width??0,X=Z?.height??0,J=o+(u!=="center"?"-"+u:""),ee=typeof x=="number"?x:{top:0,right:0,bottom:0,left:0,...x},ne=Array.isArray(m)?m:[m],te=ne.length>0,oe={padding:ee,boundary:ne.filter(Tw),altBoundary:te},{refs:re,floatingStyles:ue,placement:D,isPositioned:q,middlewareData:I}=ow({strategy:"fixed",placement:J,whileElementsMounted:(...$)=>ZA(...$,{animationFrame:E==="always"}),elements:{reference:A.anchor},middleware:[cw({mainAxis:s+X,alignmentAxis:d}),h&&uw({mainAxis:!0,crossAxis:!1,limiter:y==="partial"?fw():void 0,...oe}),h&&dw({...oe}),pw({...oe,apply:({elements:$,rects:Se,availableWidth:ve,availableHeight:Ae})=>{const{width:Ne,height:je}=Se.reference,mt=$.floating.style;mt.setProperty("--radix-popper-available-width",`${ve}px`),mt.setProperty("--radix-popper-available-height",`${Ae}px`),mt.setProperty("--radix-popper-anchor-width",`${Ne}px`),mt.setProperty("--radix-popper-anchor-height",`${je}px`)}}),U&&mw({element:U,padding:p}),Ew({arrowWidth:B,arrowHeight:X}),T&&hw({strategy:"referenceHidden",...oe})]}),[se,he]=l0(D),_=Ga(w);pt(()=>{q&&_?.()},[q,_]);const V=I.arrow?.x,Q=I.arrow?.y,W=I.arrow?.centerOffset!==0,[de,me]=v.useState();return pt(()=>{M&&me(window.getComputedStyle(M).zIndex)},[M]),S.jsx("div",{ref:re.setFloating,"data-radix-popper-content-wrapper":"",style:{...ue,transform:q?ue.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:de,"--radix-popper-transform-origin":[I.transformOrigin?.x,I.transformOrigin?.y].join(" "),...I.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:a.dir,children:S.jsx(Sw,{scope:r,placedSide:se,onArrowChange:G,arrowX:V,arrowY:Q,shouldHideArrow:W,children:S.jsx(Xe.div,{"data-side":se,"data-align":he,...C,ref:j,style:{...C.style,animation:q?void 0:"none"}})})})});n0.displayName=Qf;var a0="PopperArrow",Cw={top:"bottom",right:"left",bottom:"top",left:"right"},i0=v.forwardRef(function(i,r){const{__scopePopper:o,...s}=i,u=bw(a0,o),d=Cw[u.placedSide];return S.jsx("span",{ref:u.onArrowChange,style:{position:"absolute",left:u.arrowX,top:u.arrowY,[d]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[u.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[u.placedSide],visibility:u.shouldHideArrow?"hidden":void 0},children:S.jsx(yw,{...s,ref:r,style:{...s.style,display:"block"}})})});i0.displayName=a0;function Tw(a){return a!==null}var Ew=a=>({name:"transformOrigin",options:a,fn(i){const{placement:r,rects:o,middlewareData:s}=i,d=s.arrow?.centerOffset!==0,p=d?0:a.arrowWidth,h=d?0:a.arrowHeight,[m,x]=l0(r),y={start:"0%",center:"50%",end:"100%"}[x],T=(s.arrow?.x??0)+p/2,E=(s.arrow?.y??0)+h/2;let w="",C="";return m==="bottom"?(w=d?y:`${T}px`,C=`${-h}px`):m==="top"?(w=d?y:`${T}px`,C=`${o.floating.height+h}px`):m==="right"?(w=`${-h}px`,C=d?y:`${E}px`):m==="left"&&(w=`${o.floating.width+h}px`,C=d?y:`${E}px`),{data:{x:w,y:C}}}});function l0(a){const[i,r="center"]=a.split("-");return[i,r]}var r0=Jv,o0=t0,s0=n0,c0=i0,Aw="Portal",$f=v.forwardRef((a,i)=>{const{container:r,...o}=a,[s,u]=v.useState(!1);pt(()=>u(!0),[]);const d=r||s&&globalThis?.document?.body;return d?fC.createPortal(S.jsx(Xe.div,{...o,ref:i}),d):null});$f.displayName=Aw;function ww(a){const i=Rw(a),r=v.forwardRef((o,s)=>{const{children:u,...d}=o,p=v.Children.toArray(u),h=p.find(Ow);if(h){const m=h.props.children,x=p.map(y=>y===h?v.Children.count(m)>1?v.Children.only(null):v.isValidElement(m)?m.props.children:null:y);return S.jsx(i,{...d,ref:s,children:v.isValidElement(m)?v.cloneElement(m,void 0,x):null})}return S.jsx(i,{...d,ref:s,children:u})});return r.displayName=`${a}.Slot`,r}function Rw(a){const i=v.forwardRef((r,o)=>{const{children:s,...u}=r;if(v.isValidElement(s)){const d=Mw(s),p=Nw(u,s.props);return s.type!==v.Fragment&&(p.ref=o?or(o,d):d),v.cloneElement(s,p)}return v.Children.count(s)>1?v.Children.only(null):null});return i.displayName=`${a}.SlotClone`,i}var _w=Symbol("radix.slottable");function Ow(a){return v.isValidElement(a)&&typeof a.type=="function"&&"__radixId"in a.type&&a.type.__radixId===_w}function Nw(a,i){const r={...i};for(const o in i){const s=a[o],u=i[o];/^on[A-Z]/.test(o)?s&&u?r[o]=(...p)=>{const h=u(...p);return s(...p),h}:s&&(r[o]=s):o==="style"?r[o]={...s,...u}:o==="className"&&(r[o]=[s,u].filter(Boolean).join(" "))}return{...a,...r}}function Mw(a){let i=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning;return r?a.ref:(i=Object.getOwnPropertyDescriptor(a,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning,r?a.props.ref:a.props.ref||a.ref)}var Dw=Df[" useInsertionEffect ".trim().toString()]||pt;function Tf({prop:a,defaultProp:i,onChange:r=()=>{},caller:o}){const[s,u,d]=Lw({defaultProp:i,onChange:r}),p=a!==void 0,h=p?a:s;{const x=v.useRef(a!==void 0);v.useEffect(()=>{const y=x.current;y!==p&&console.warn(`${o} is changing from ${y?"controlled":"uncontrolled"} to ${p?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),x.current=p},[p,o])}const m=v.useCallback(x=>{if(p){const y=jw(x)?x(a):x;y!==a&&d.current?.(y)}else u(x)},[p,a,u,d]);return[h,m]}function Lw({defaultProp:a,onChange:i}){const[r,o]=v.useState(a),s=v.useRef(r),u=v.useRef(i);return Dw(()=>{u.current=i},[i]),v.useEffect(()=>{s.current!==r&&(u.current?.(r),s.current=r)},[r,s]),[r,o,u]}function jw(a){return typeof a=="function"}function zw(a){const i=v.useRef({value:a,previous:a});return v.useMemo(()=>(i.current.value!==a&&(i.current.previous=i.current.value,i.current.value=a),i.current.previous),[a])}var u0=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),kw="VisuallyHidden",f0=v.forwardRef((a,i)=>S.jsx(Xe.span,{...a,ref:i,style:{...u0,...a.style}}));f0.displayName=kw;var Hw=f0,Iw=function(a){if(typeof document>"u")return null;var i=Array.isArray(a)?a[0]:a;return i.ownerDocument.body},Di=new WeakMap,Lo=new WeakMap,jo={},sf=0,d0=function(a){return a&&(a.host||d0(a.parentNode))},Pw=function(a,i){return i.map(function(r){if(a.contains(r))return r;var o=d0(r);return o&&a.contains(o)?o:(console.error("aria-hidden",r,"in not contained inside",a,". Doing nothing"),null)}).filter(function(r){return!!r})},Uw=function(a,i,r,o){var s=Pw(i,Array.isArray(a)?a:[a]);jo[r]||(jo[r]=new WeakMap);var u=jo[r],d=[],p=new Set,h=new Set(s),m=function(y){!y||p.has(y)||(p.add(y),m(y.parentNode))};s.forEach(m);var x=function(y){!y||h.has(y)||Array.prototype.forEach.call(y.children,function(T){if(p.has(T))x(T);else try{var E=T.getAttribute(o),w=E!==null&&E!=="false",C=(Di.get(T)||0)+1,A=(u.get(T)||0)+1;Di.set(T,C),u.set(T,A),d.push(T),C===1&&w&&Lo.set(T,!0),A===1&&T.setAttribute(r,"true"),w||T.setAttribute(o,"true")}catch(M){console.error("aria-hidden: cannot operate on ",T,M)}})};return x(i),p.clear(),sf++,function(){d.forEach(function(y){var T=Di.get(y)-1,E=u.get(y)-1;Di.set(y,T),u.set(y,E),T||(Lo.has(y)||y.removeAttribute(o),Lo.delete(y)),E||y.removeAttribute(r)}),sf--,sf||(Di=new WeakMap,Di=new WeakMap,Lo=new WeakMap,jo={})}},Bw=function(a,i,r){r===void 0&&(r="data-aria-hidden");var o=Array.from(Array.isArray(a)?a:[a]),s=Iw(a);return s?(o.push.apply(o,Array.from(s.querySelectorAll("[aria-live], script"))),Uw(o,s,r,"aria-hidden")):function(){return null}},cn=function(){return cn=Object.assign||function(i){for(var r,o=1,s=arguments.length;o<s;o++){r=arguments[o];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(i[u]=r[u])}return i},cn.apply(this,arguments)};function p0(a,i){var r={};for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&i.indexOf(o)<0&&(r[o]=a[o]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(a);s<o.length;s++)i.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(a,o[s])&&(r[o[s]]=a[o[s]]);return r}function Gw(a,i,r){if(r||arguments.length===2)for(var o=0,s=i.length,u;o<s;o++)(u||!(o in i))&&(u||(u=Array.prototype.slice.call(i,0,o)),u[o]=i[o]);return a.concat(u||Array.prototype.slice.call(i))}var Bo="right-scroll-bar-position",Go="width-before-scroll-bar",Vw="with-scroll-bars-hidden",Fw="--removed-body-scroll-bar-size";function cf(a,i){return typeof a=="function"?a(i):a&&(a.current=i),a}function qw(a,i){var r=v.useState(function(){return{value:a,callback:i,facade:{get current(){return r.value},set current(o){var s=r.value;s!==o&&(r.value=o,r.callback(o,s))}}}})[0];return r.callback=i,r.facade}var Yw=typeof window<"u"?v.useLayoutEffect:v.useEffect,dy=new WeakMap;function Kw(a,i){var r=qw(null,function(o){return a.forEach(function(s){return cf(s,o)})});return Yw(function(){var o=dy.get(r);if(o){var s=new Set(o),u=new Set(a),d=r.current;s.forEach(function(p){u.has(p)||cf(p,null)}),u.forEach(function(p){s.has(p)||cf(p,d)})}dy.set(r,a)},[a]),r}function Xw(a){return a}function Qw(a,i){i===void 0&&(i=Xw);var r=[],o=!1,s={read:function(){if(o)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:a},useMedium:function(u){var d=i(u,o);return r.push(d),function(){r=r.filter(function(p){return p!==d})}},assignSyncMedium:function(u){for(o=!0;r.length;){var d=r;r=[],d.forEach(u)}r={push:function(p){return u(p)},filter:function(){return r}}},assignMedium:function(u){o=!0;var d=[];if(r.length){var p=r;r=[],p.forEach(u),d=r}var h=function(){var x=d;d=[],x.forEach(u)},m=function(){return Promise.resolve().then(h)};m(),r={push:function(x){d.push(x),m()},filter:function(x){return d=d.filter(x),r}}}};return s}function $w(a){a===void 0&&(a={});var i=Qw(null);return i.options=cn({async:!0,ssr:!1},a),i}var h0=function(a){var i=a.sideCar,r=p0(a,["sideCar"]);if(!i)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var o=i.read();if(!o)throw new Error("Sidecar medium not found");return v.createElement(o,cn({},r))};h0.isSideCarExport=!0;function Zw(a,i){return a.useMedium(i),h0}var m0=$w(),uf=function(){},xs=v.forwardRef(function(a,i){var r=v.useRef(null),o=v.useState({onScrollCapture:uf,onWheelCapture:uf,onTouchMoveCapture:uf}),s=o[0],u=o[1],d=a.forwardProps,p=a.children,h=a.className,m=a.removeScrollBar,x=a.enabled,y=a.shards,T=a.sideCar,E=a.noRelative,w=a.noIsolation,C=a.inert,A=a.allowPinchZoom,M=a.as,N=M===void 0?"div":M,j=a.gapMode,U=p0(a,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),G=T,Z=Kw([r,i]),B=cn(cn({},U),s);return v.createElement(v.Fragment,null,x&&v.createElement(G,{sideCar:m0,removeScrollBar:m,shards:y,noRelative:E,noIsolation:w,inert:C,setCallbacks:u,allowPinchZoom:!!A,lockRef:r,gapMode:j}),d?v.cloneElement(v.Children.only(p),cn(cn({},B),{ref:Z})):v.createElement(N,cn({},B,{className:h,ref:Z}),p))});xs.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};xs.classNames={fullWidth:Go,zeroRight:Bo};var Ww=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Jw(){if(!document)return null;var a=document.createElement("style");a.type="text/css";var i=Ww();return i&&a.setAttribute("nonce",i),a}function eR(a,i){a.styleSheet?a.styleSheet.cssText=i:a.appendChild(document.createTextNode(i))}function tR(a){var i=document.head||document.getElementsByTagName("head")[0];i.appendChild(a)}var nR=function(){var a=0,i=null;return{add:function(r){a==0&&(i=Jw())&&(eR(i,r),tR(i)),a++},remove:function(){a--,!a&&i&&(i.parentNode&&i.parentNode.removeChild(i),i=null)}}},aR=function(){var a=nR();return function(i,r){v.useEffect(function(){return a.add(i),function(){a.remove()}},[i&&r])}},g0=function(){var a=aR(),i=function(r){var o=r.styles,s=r.dynamic;return a(o,s),null};return i},iR={left:0,top:0,right:0,gap:0},ff=function(a){return parseInt(a||"",10)||0},lR=function(a){var i=window.getComputedStyle(document.body),r=i[a==="padding"?"paddingLeft":"marginLeft"],o=i[a==="padding"?"paddingTop":"marginTop"],s=i[a==="padding"?"paddingRight":"marginRight"];return[ff(r),ff(o),ff(s)]},rR=function(a){if(a===void 0&&(a="margin"),typeof window>"u")return iR;var i=lR(a),r=document.documentElement.clientWidth,o=window.innerWidth;return{left:i[0],top:i[1],right:i[2],gap:Math.max(0,o-r+i[2]-i[0])}},oR=g0(),Ii="data-scroll-locked",sR=function(a,i,r,o){var s=a.left,u=a.top,d=a.right,p=a.gap;return r===void 0&&(r="margin"),`
  .`.concat(Vw,` {
   overflow: hidden `).concat(o,`;
   padding-right: `).concat(p,"px ").concat(o,`;
  }
  body[`).concat(Ii,`] {
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
  
  .`).concat(Bo,` {
    right: `).concat(p,"px ").concat(o,`;
  }
  
  .`).concat(Go,` {
    margin-right: `).concat(p,"px ").concat(o,`;
  }
  
  .`).concat(Bo," .").concat(Bo,` {
    right: 0 `).concat(o,`;
  }
  
  .`).concat(Go," .").concat(Go,` {
    margin-right: 0 `).concat(o,`;
  }
  
  body[`).concat(Ii,`] {
    `).concat(Fw,": ").concat(p,`px;
  }
`)},py=function(){var a=parseInt(document.body.getAttribute(Ii)||"0",10);return isFinite(a)?a:0},cR=function(){v.useEffect(function(){return document.body.setAttribute(Ii,(py()+1).toString()),function(){var a=py()-1;a<=0?document.body.removeAttribute(Ii):document.body.setAttribute(Ii,a.toString())}},[])},uR=function(a){var i=a.noRelative,r=a.noImportant,o=a.gapMode,s=o===void 0?"margin":o;cR();var u=v.useMemo(function(){return rR(s)},[s]);return v.createElement(oR,{styles:sR(u,!i,s,r?"":"!important")})},Ef=!1;if(typeof window<"u")try{var zo=Object.defineProperty({},"passive",{get:function(){return Ef=!0,!0}});window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{Ef=!1}var Li=Ef?{passive:!1}:!1,fR=function(a){return a.tagName==="TEXTAREA"},y0=function(a,i){if(!(a instanceof Element))return!1;var r=window.getComputedStyle(a);return r[i]!=="hidden"&&!(r.overflowY===r.overflowX&&!fR(a)&&r[i]==="visible")},dR=function(a){return y0(a,"overflowY")},pR=function(a){return y0(a,"overflowX")},hy=function(a,i){var r=i.ownerDocument,o=i;do{typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&(o=o.host);var s=v0(a,o);if(s){var u=x0(a,o),d=u[1],p=u[2];if(d>p)return!0}o=o.parentNode}while(o&&o!==r.body);return!1},hR=function(a){var i=a.scrollTop,r=a.scrollHeight,o=a.clientHeight;return[i,r,o]},mR=function(a){var i=a.scrollLeft,r=a.scrollWidth,o=a.clientWidth;return[i,r,o]},v0=function(a,i){return a==="v"?dR(i):pR(i)},x0=function(a,i){return a==="v"?hR(i):mR(i)},gR=function(a,i){return a==="h"&&i==="rtl"?-1:1},yR=function(a,i,r,o,s){var u=gR(a,window.getComputedStyle(i).direction),d=u*o,p=r.target,h=i.contains(p),m=!1,x=d>0,y=0,T=0;do{if(!p)break;var E=x0(a,p),w=E[0],C=E[1],A=E[2],M=C-A-u*w;(w||M)&&v0(a,p)&&(y+=M,T+=w);var N=p.parentNode;p=N&&N.nodeType===Node.DOCUMENT_FRAGMENT_NODE?N.host:N}while(!h&&p!==document.body||h&&(i.contains(p)||i===p));return(x&&Math.abs(y)<1||!x&&Math.abs(T)<1)&&(m=!0),m},ko=function(a){return"changedTouches"in a?[a.changedTouches[0].clientX,a.changedTouches[0].clientY]:[0,0]},my=function(a){return[a.deltaX,a.deltaY]},gy=function(a){return a&&"current"in a?a.current:a},vR=function(a,i){return a[0]===i[0]&&a[1]===i[1]},xR=function(a){return`
  .block-interactivity-`.concat(a,` {pointer-events: none;}
  .allow-interactivity-`).concat(a,` {pointer-events: all;}
`)},SR=0,ji=[];function bR(a){var i=v.useRef([]),r=v.useRef([0,0]),o=v.useRef(),s=v.useState(SR++)[0],u=v.useState(g0)[0],d=v.useRef(a);v.useEffect(function(){d.current=a},[a]),v.useEffect(function(){if(a.inert){document.body.classList.add("block-interactivity-".concat(s));var C=Gw([a.lockRef.current],(a.shards||[]).map(gy),!0).filter(Boolean);return C.forEach(function(A){return A.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),C.forEach(function(A){return A.classList.remove("allow-interactivity-".concat(s))})}}},[a.inert,a.lockRef.current,a.shards]);var p=v.useCallback(function(C,A){if("touches"in C&&C.touches.length===2||C.type==="wheel"&&C.ctrlKey)return!d.current.allowPinchZoom;var M=ko(C),N=r.current,j="deltaX"in C?C.deltaX:N[0]-M[0],U="deltaY"in C?C.deltaY:N[1]-M[1],G,Z=C.target,B=Math.abs(j)>Math.abs(U)?"h":"v";if("touches"in C&&B==="h"&&Z.type==="range")return!1;var X=window.getSelection(),J=X&&X.anchorNode,ee=J?J===Z||J.contains(Z):!1;if(ee)return!1;var ne=hy(B,Z);if(!ne)return!0;if(ne?G=B:(G=B==="v"?"h":"v",ne=hy(B,Z)),!ne)return!1;if(!o.current&&"changedTouches"in C&&(j||U)&&(o.current=G),!G)return!0;var te=o.current||G;return yR(te,A,C,te==="h"?j:U)},[]),h=v.useCallback(function(C){var A=C;if(!(!ji.length||ji[ji.length-1]!==u)){var M="deltaY"in A?my(A):ko(A),N=i.current.filter(function(G){return G.name===A.type&&(G.target===A.target||A.target===G.shadowParent)&&vR(G.delta,M)})[0];if(N&&N.should){A.cancelable&&A.preventDefault();return}if(!N){var j=(d.current.shards||[]).map(gy).filter(Boolean).filter(function(G){return G.contains(A.target)}),U=j.length>0?p(A,j[0]):!d.current.noIsolation;U&&A.cancelable&&A.preventDefault()}}},[]),m=v.useCallback(function(C,A,M,N){var j={name:C,delta:A,target:M,should:N,shadowParent:CR(M)};i.current.push(j),setTimeout(function(){i.current=i.current.filter(function(U){return U!==j})},1)},[]),x=v.useCallback(function(C){r.current=ko(C),o.current=void 0},[]),y=v.useCallback(function(C){m(C.type,my(C),C.target,p(C,a.lockRef.current))},[]),T=v.useCallback(function(C){m(C.type,ko(C),C.target,p(C,a.lockRef.current))},[]);v.useEffect(function(){return ji.push(u),a.setCallbacks({onScrollCapture:y,onWheelCapture:y,onTouchMoveCapture:T}),document.addEventListener("wheel",h,Li),document.addEventListener("touchmove",h,Li),document.addEventListener("touchstart",x,Li),function(){ji=ji.filter(function(C){return C!==u}),document.removeEventListener("wheel",h,Li),document.removeEventListener("touchmove",h,Li),document.removeEventListener("touchstart",x,Li)}},[]);var E=a.removeScrollBar,w=a.inert;return v.createElement(v.Fragment,null,w?v.createElement(u,{styles:xR(s)}):null,E?v.createElement(uR,{noRelative:a.noRelative,gapMode:a.gapMode}):null)}function CR(a){for(var i=null;a!==null;)a instanceof ShadowRoot&&(i=a.host,a=a.host),a=a.parentNode;return i}const TR=Zw(m0,bR);var S0=v.forwardRef(function(a,i){return v.createElement(xs,cn({},a,{ref:i,sideCar:TR}))});S0.classNames=xs.classNames;var ER=[" ","Enter","ArrowUp","ArrowDown"],AR=[" ","Enter"],Fa="Select",[Ss,bs,wR]=M2(Fa),[Qi]=ds(Fa,[wR,vs]),Cs=vs(),[RR,ya]=Qi(Fa),[_R,OR]=Qi(Fa),b0=a=>{const{__scopeSelect:i,children:r,open:o,defaultOpen:s,onOpenChange:u,value:d,defaultValue:p,onValueChange:h,dir:m,name:x,autoComplete:y,disabled:T,required:E,form:w}=a,C=Cs(i),[A,M]=v.useState(null),[N,j]=v.useState(null),[U,G]=v.useState(!1),Z=L2(m),[B,X]=Tf({prop:o,defaultProp:s??!1,onChange:u,caller:Fa}),[J,ee]=Tf({prop:d,defaultProp:p,onChange:h,caller:Fa}),ne=v.useRef(null),te=A?w||!!A.closest("form"):!0,[oe,re]=v.useState(new Set),ue=Array.from(oe).map(D=>D.props.value).join(";");return S.jsx(r0,{...C,children:S.jsxs(RR,{required:E,scope:i,trigger:A,onTriggerChange:M,valueNode:N,onValueNodeChange:j,valueNodeHasChildren:U,onValueNodeHasChildrenChange:G,contentId:ps(),value:J,onValueChange:ee,open:B,onOpenChange:X,dir:Z,triggerPointerDownPosRef:ne,disabled:T,children:[S.jsx(Ss.Provider,{scope:i,children:S.jsx(_R,{scope:a.__scopeSelect,onNativeOptionAdd:v.useCallback(D=>{re(q=>new Set(q).add(D))},[]),onNativeOptionRemove:v.useCallback(D=>{re(q=>{const I=new Set(q);return I.delete(D),I})},[]),children:r})}),te?S.jsxs(V0,{"aria-hidden":!0,required:E,tabIndex:-1,name:x,autoComplete:y,value:J,onChange:D=>ee(D.target.value),disabled:T,form:w,children:[J===void 0?S.jsx("option",{value:""}):null,Array.from(oe)]},ue):null]})})};b0.displayName=Fa;var C0="SelectTrigger",T0=v.forwardRef((a,i)=>{const{__scopeSelect:r,disabled:o=!1,...s}=a,u=Cs(r),d=ya(C0,r),p=d.disabled||o,h=nt(i,d.onTriggerChange),m=bs(r),x=v.useRef("touch"),[y,T,E]=q0(C=>{const A=m().filter(j=>!j.disabled),M=A.find(j=>j.value===d.value),N=Y0(A,C,M);N!==void 0&&d.onValueChange(N.value)}),w=C=>{p||(d.onOpenChange(!0),E()),C&&(d.triggerPointerDownPosRef.current={x:Math.round(C.pageX),y:Math.round(C.pageY)})};return S.jsx(o0,{asChild:!0,...u,children:S.jsx(Xe.button,{type:"button",role:"combobox","aria-controls":d.contentId,"aria-expanded":d.open,"aria-required":d.required,"aria-autocomplete":"none",dir:d.dir,"data-state":d.open?"open":"closed",disabled:p,"data-disabled":p?"":void 0,"data-placeholder":F0(d.value)?"":void 0,...s,ref:h,onClick:Be(s.onClick,C=>{C.currentTarget.focus(),x.current!=="mouse"&&w(C)}),onPointerDown:Be(s.onPointerDown,C=>{x.current=C.pointerType;const A=C.target;A.hasPointerCapture(C.pointerId)&&A.releasePointerCapture(C.pointerId),C.button===0&&C.ctrlKey===!1&&C.pointerType==="mouse"&&(w(C),C.preventDefault())}),onKeyDown:Be(s.onKeyDown,C=>{const A=y.current!=="";!(C.ctrlKey||C.altKey||C.metaKey)&&C.key.length===1&&T(C.key),!(A&&C.key===" ")&&ER.includes(C.key)&&(w(),C.preventDefault())})})})});T0.displayName=C0;var E0="SelectValue",A0=v.forwardRef((a,i)=>{const{__scopeSelect:r,className:o,style:s,children:u,placeholder:d="",...p}=a,h=ya(E0,r),{onValueNodeHasChildrenChange:m}=h,x=u!==void 0,y=nt(i,h.onValueNodeChange);return pt(()=>{m(x)},[m,x]),S.jsx(Xe.span,{...p,ref:y,style:{pointerEvents:"none"},children:F0(h.value)?S.jsx(S.Fragment,{children:d}):u})});A0.displayName=E0;var NR="SelectIcon",w0=v.forwardRef((a,i)=>{const{__scopeSelect:r,children:o,...s}=a;return S.jsx(Xe.span,{"aria-hidden":!0,...s,ref:i,children:o||"▼"})});w0.displayName=NR;var MR="SelectPortal",R0=a=>S.jsx($f,{asChild:!0,...a});R0.displayName=MR;var qa="SelectContent",_0=v.forwardRef((a,i)=>{const r=ya(qa,a.__scopeSelect),[o,s]=v.useState();if(pt(()=>{s(new DocumentFragment)},[]),!r.open){const u=o;return u?rr.createPortal(S.jsx(O0,{scope:a.__scopeSelect,children:S.jsx(Ss.Slot,{scope:a.__scopeSelect,children:S.jsx("div",{children:a.children})})}),u):null}return S.jsx(N0,{...a,ref:i})});_0.displayName=qa;var Jt=10,[O0,va]=Qi(qa),DR="SelectContentImpl",LR=ww("SelectContent.RemoveScroll"),N0=v.forwardRef((a,i)=>{const{__scopeSelect:r,position:o="item-aligned",onCloseAutoFocus:s,onEscapeKeyDown:u,onPointerDownOutside:d,side:p,sideOffset:h,align:m,alignOffset:x,arrowPadding:y,collisionBoundary:T,collisionPadding:E,sticky:w,hideWhenDetached:C,avoidCollisions:A,...M}=a,N=ya(qa,r),[j,U]=v.useState(null),[G,Z]=v.useState(null),B=nt(i,$=>U($)),[X,J]=v.useState(null),[ee,ne]=v.useState(null),te=bs(r),[oe,re]=v.useState(!1),ue=v.useRef(!1);v.useEffect(()=>{if(j)return Bw(j)},[j]),$2();const D=v.useCallback($=>{const[Se,...ve]=te().map(je=>je.ref.current),[Ae]=ve.slice(-1),Ne=document.activeElement;for(const je of $)if(je===Ne||(je?.scrollIntoView({block:"nearest"}),je===Se&&G&&(G.scrollTop=0),je===Ae&&G&&(G.scrollTop=G.scrollHeight),je?.focus(),document.activeElement!==Ne))return},[te,G]),q=v.useCallback(()=>D([X,j]),[D,X,j]);v.useEffect(()=>{oe&&q()},[oe,q]);const{onOpenChange:I,triggerPointerDownPosRef:se}=N;v.useEffect(()=>{if(j){let $={x:0,y:0};const Se=Ae=>{$={x:Math.abs(Math.round(Ae.pageX)-(se.current?.x??0)),y:Math.abs(Math.round(Ae.pageY)-(se.current?.y??0))}},ve=Ae=>{$.x<=10&&$.y<=10?Ae.preventDefault():j.contains(Ae.target)||I(!1),document.removeEventListener("pointermove",Se),se.current=null};return se.current!==null&&(document.addEventListener("pointermove",Se),document.addEventListener("pointerup",ve,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",Se),document.removeEventListener("pointerup",ve,{capture:!0})}}},[j,I,se]),v.useEffect(()=>{const $=()=>I(!1);return window.addEventListener("blur",$),window.addEventListener("resize",$),()=>{window.removeEventListener("blur",$),window.removeEventListener("resize",$)}},[I]);const[he,_]=q0($=>{const Se=te().filter(Ne=>!Ne.disabled),ve=Se.find(Ne=>Ne.ref.current===document.activeElement),Ae=Y0(Se,$,ve);Ae&&setTimeout(()=>Ae.ref.current.focus())}),V=v.useCallback(($,Se,ve)=>{const Ae=!ue.current&&!ve;(N.value!==void 0&&N.value===Se||Ae)&&(J($),Ae&&(ue.current=!0))},[N.value]),Q=v.useCallback(()=>j?.focus(),[j]),W=v.useCallback(($,Se,ve)=>{const Ae=!ue.current&&!ve;(N.value!==void 0&&N.value===Se||Ae)&&ne($)},[N.value]),de=o==="popper"?Af:M0,me=de===Af?{side:p,sideOffset:h,align:m,alignOffset:x,arrowPadding:y,collisionBoundary:T,collisionPadding:E,sticky:w,hideWhenDetached:C,avoidCollisions:A}:{};return S.jsx(O0,{scope:r,content:j,viewport:G,onViewportChange:Z,itemRefCallback:V,selectedItem:X,onItemLeave:Q,itemTextRefCallback:W,focusSelectedItem:q,selectedItemText:ee,position:o,isPositioned:oe,searchRef:he,children:S.jsx(S0,{as:LR,allowPinchZoom:!0,children:S.jsx(Hv,{asChild:!0,trapped:N.open,onMountAutoFocus:$=>{$.preventDefault()},onUnmountAutoFocus:Be(s,$=>{N.trigger?.focus({preventScroll:!0}),$.preventDefault()}),children:S.jsx(Bf,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:$=>$.preventDefault(),onDismiss:()=>N.onOpenChange(!1),children:S.jsx(de,{role:"listbox",id:N.contentId,"data-state":N.open?"open":"closed",dir:N.dir,onContextMenu:$=>$.preventDefault(),...M,...me,onPlaced:()=>re(!0),ref:B,style:{display:"flex",flexDirection:"column",outline:"none",...M.style},onKeyDown:Be(M.onKeyDown,$=>{const Se=$.ctrlKey||$.altKey||$.metaKey;if($.key==="Tab"&&$.preventDefault(),!Se&&$.key.length===1&&_($.key),["ArrowUp","ArrowDown","Home","End"].includes($.key)){let Ae=te().filter(Ne=>!Ne.disabled).map(Ne=>Ne.ref.current);if(["ArrowUp","End"].includes($.key)&&(Ae=Ae.slice().reverse()),["ArrowUp","ArrowDown"].includes($.key)){const Ne=$.target,je=Ae.indexOf(Ne);Ae=Ae.slice(je+1)}setTimeout(()=>D(Ae)),$.preventDefault()}})})})})})})});N0.displayName=DR;var jR="SelectItemAlignedPosition",M0=v.forwardRef((a,i)=>{const{__scopeSelect:r,onPlaced:o,...s}=a,u=ya(qa,r),d=va(qa,r),[p,h]=v.useState(null),[m,x]=v.useState(null),y=nt(i,B=>x(B)),T=bs(r),E=v.useRef(!1),w=v.useRef(!0),{viewport:C,selectedItem:A,selectedItemText:M,focusSelectedItem:N}=d,j=v.useCallback(()=>{if(u.trigger&&u.valueNode&&p&&m&&C&&A&&M){const B=u.trigger.getBoundingClientRect(),X=m.getBoundingClientRect(),J=u.valueNode.getBoundingClientRect(),ee=M.getBoundingClientRect();if(u.dir!=="rtl"){const Ne=ee.left-X.left,je=J.left-Ne,mt=B.left-je,gt=B.width+mt,xa=Math.max(gt,X.width),Sa=window.innerWidth-Jt,$i=Yg(je,[Jt,Math.max(Jt,Sa-xa)]);p.style.minWidth=gt+"px",p.style.left=$i+"px"}else{const Ne=X.right-ee.right,je=window.innerWidth-J.right-Ne,mt=window.innerWidth-B.right-je,gt=B.width+mt,xa=Math.max(gt,X.width),Sa=window.innerWidth-Jt,$i=Yg(je,[Jt,Math.max(Jt,Sa-xa)]);p.style.minWidth=gt+"px",p.style.right=$i+"px"}const ne=T(),te=window.innerHeight-Jt*2,oe=C.scrollHeight,re=window.getComputedStyle(m),ue=parseInt(re.borderTopWidth,10),D=parseInt(re.paddingTop,10),q=parseInt(re.borderBottomWidth,10),I=parseInt(re.paddingBottom,10),se=ue+D+oe+I+q,he=Math.min(A.offsetHeight*5,se),_=window.getComputedStyle(C),V=parseInt(_.paddingTop,10),Q=parseInt(_.paddingBottom,10),W=B.top+B.height/2-Jt,de=te-W,me=A.offsetHeight/2,$=A.offsetTop+me,Se=ue+D+$,ve=se-Se;if(Se<=W){const Ne=ne.length>0&&A===ne[ne.length-1].ref.current;p.style.bottom="0px";const je=m.clientHeight-C.offsetTop-C.offsetHeight,mt=Math.max(de,me+(Ne?Q:0)+je+q),gt=Se+mt;p.style.height=gt+"px"}else{const Ne=ne.length>0&&A===ne[0].ref.current;p.style.top="0px";const mt=Math.max(W,ue+C.offsetTop+(Ne?V:0)+me)+ve;p.style.height=mt+"px",C.scrollTop=Se-W+C.offsetTop}p.style.margin=`${Jt}px 0`,p.style.minHeight=he+"px",p.style.maxHeight=te+"px",o?.(),requestAnimationFrame(()=>E.current=!0)}},[T,u.trigger,u.valueNode,p,m,C,A,M,u.dir,o]);pt(()=>j(),[j]);const[U,G]=v.useState();pt(()=>{m&&G(window.getComputedStyle(m).zIndex)},[m]);const Z=v.useCallback(B=>{B&&w.current===!0&&(j(),N?.(),w.current=!1)},[j,N]);return S.jsx(kR,{scope:r,contentWrapper:p,shouldExpandOnScrollRef:E,onScrollButtonChange:Z,children:S.jsx("div",{ref:h,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:U},children:S.jsx(Xe.div,{...s,ref:y,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}})})})});M0.displayName=jR;var zR="SelectPopperPosition",Af=v.forwardRef((a,i)=>{const{__scopeSelect:r,align:o="start",collisionPadding:s=Jt,...u}=a,d=Cs(r);return S.jsx(s0,{...d,...u,ref:i,align:o,collisionPadding:s,style:{boxSizing:"border-box",...u.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Af.displayName=zR;var[kR,Zf]=Qi(qa,{}),wf="SelectViewport",D0=v.forwardRef((a,i)=>{const{__scopeSelect:r,nonce:o,...s}=a,u=va(wf,r),d=Zf(wf,r),p=nt(i,u.onViewportChange),h=v.useRef(0);return S.jsxs(S.Fragment,{children:[S.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),S.jsx(Ss.Slot,{scope:r,children:S.jsx(Xe.div,{"data-radix-select-viewport":"",role:"presentation",...s,ref:p,style:{position:"relative",flex:1,overflow:"hidden auto",...s.style},onScroll:Be(s.onScroll,m=>{const x=m.currentTarget,{contentWrapper:y,shouldExpandOnScrollRef:T}=d;if(T?.current&&y){const E=Math.abs(h.current-x.scrollTop);if(E>0){const w=window.innerHeight-Jt*2,C=parseFloat(y.style.minHeight),A=parseFloat(y.style.height),M=Math.max(C,A);if(M<w){const N=M+E,j=Math.min(w,N),U=N-j;y.style.height=j+"px",y.style.bottom==="0px"&&(x.scrollTop=U>0?U:0,y.style.justifyContent="flex-end")}}}h.current=x.scrollTop})})})]})});D0.displayName=wf;var L0="SelectGroup",[HR,IR]=Qi(L0),PR=v.forwardRef((a,i)=>{const{__scopeSelect:r,...o}=a,s=ps();return S.jsx(HR,{scope:r,id:s,children:S.jsx(Xe.div,{role:"group","aria-labelledby":s,...o,ref:i})})});PR.displayName=L0;var j0="SelectLabel",UR=v.forwardRef((a,i)=>{const{__scopeSelect:r,...o}=a,s=IR(j0,r);return S.jsx(Xe.div,{id:s.id,...o,ref:i})});UR.displayName=j0;var as="SelectItem",[BR,z0]=Qi(as),k0=v.forwardRef((a,i)=>{const{__scopeSelect:r,value:o,disabled:s=!1,textValue:u,...d}=a,p=ya(as,r),h=va(as,r),m=p.value===o,[x,y]=v.useState(u??""),[T,E]=v.useState(!1),w=nt(i,N=>h.itemRefCallback?.(N,o,s)),C=ps(),A=v.useRef("touch"),M=()=>{s||(p.onValueChange(o),p.onOpenChange(!1))};if(o==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return S.jsx(BR,{scope:r,value:o,disabled:s,textId:C,isSelected:m,onItemTextChange:v.useCallback(N=>{y(j=>j||(N?.textContent??"").trim())},[]),children:S.jsx(Ss.ItemSlot,{scope:r,value:o,disabled:s,textValue:x,children:S.jsx(Xe.div,{role:"option","aria-labelledby":C,"data-highlighted":T?"":void 0,"aria-selected":m&&T,"data-state":m?"checked":"unchecked","aria-disabled":s||void 0,"data-disabled":s?"":void 0,tabIndex:s?void 0:-1,...d,ref:w,onFocus:Be(d.onFocus,()=>E(!0)),onBlur:Be(d.onBlur,()=>E(!1)),onClick:Be(d.onClick,()=>{A.current!=="mouse"&&M()}),onPointerUp:Be(d.onPointerUp,()=>{A.current==="mouse"&&M()}),onPointerDown:Be(d.onPointerDown,N=>{A.current=N.pointerType}),onPointerMove:Be(d.onPointerMove,N=>{A.current=N.pointerType,s?h.onItemLeave?.():A.current==="mouse"&&N.currentTarget.focus({preventScroll:!0})}),onPointerLeave:Be(d.onPointerLeave,N=>{N.currentTarget===document.activeElement&&h.onItemLeave?.()}),onKeyDown:Be(d.onKeyDown,N=>{h.searchRef?.current!==""&&N.key===" "||(AR.includes(N.key)&&M(),N.key===" "&&N.preventDefault())})})})})});k0.displayName=as;var Ql="SelectItemText",H0=v.forwardRef((a,i)=>{const{__scopeSelect:r,className:o,style:s,...u}=a,d=ya(Ql,r),p=va(Ql,r),h=z0(Ql,r),m=OR(Ql,r),[x,y]=v.useState(null),T=nt(i,M=>y(M),h.onItemTextChange,M=>p.itemTextRefCallback?.(M,h.value,h.disabled)),E=x?.textContent,w=v.useMemo(()=>S.jsx("option",{value:h.value,disabled:h.disabled,children:E},h.value),[h.disabled,h.value,E]),{onNativeOptionAdd:C,onNativeOptionRemove:A}=m;return pt(()=>(C(w),()=>A(w)),[C,A,w]),S.jsxs(S.Fragment,{children:[S.jsx(Xe.span,{id:h.textId,...u,ref:T}),h.isSelected&&d.valueNode&&!d.valueNodeHasChildren?rr.createPortal(u.children,d.valueNode):null]})});H0.displayName=Ql;var I0="SelectItemIndicator",P0=v.forwardRef((a,i)=>{const{__scopeSelect:r,...o}=a;return z0(I0,r).isSelected?S.jsx(Xe.span,{"aria-hidden":!0,...o,ref:i}):null});P0.displayName=I0;var Rf="SelectScrollUpButton",U0=v.forwardRef((a,i)=>{const r=va(Rf,a.__scopeSelect),o=Zf(Rf,a.__scopeSelect),[s,u]=v.useState(!1),d=nt(i,o.onScrollButtonChange);return pt(()=>{if(r.viewport&&r.isPositioned){let p=function(){const m=h.scrollTop>0;u(m)};const h=r.viewport;return p(),h.addEventListener("scroll",p),()=>h.removeEventListener("scroll",p)}},[r.viewport,r.isPositioned]),s?S.jsx(G0,{...a,ref:d,onAutoScroll:()=>{const{viewport:p,selectedItem:h}=r;p&&h&&(p.scrollTop=p.scrollTop-h.offsetHeight)}}):null});U0.displayName=Rf;var _f="SelectScrollDownButton",B0=v.forwardRef((a,i)=>{const r=va(_f,a.__scopeSelect),o=Zf(_f,a.__scopeSelect),[s,u]=v.useState(!1),d=nt(i,o.onScrollButtonChange);return pt(()=>{if(r.viewport&&r.isPositioned){let p=function(){const m=h.scrollHeight-h.clientHeight,x=Math.ceil(h.scrollTop)<m;u(x)};const h=r.viewport;return p(),h.addEventListener("scroll",p),()=>h.removeEventListener("scroll",p)}},[r.viewport,r.isPositioned]),s?S.jsx(G0,{...a,ref:d,onAutoScroll:()=>{const{viewport:p,selectedItem:h}=r;p&&h&&(p.scrollTop=p.scrollTop+h.offsetHeight)}}):null});B0.displayName=_f;var G0=v.forwardRef((a,i)=>{const{__scopeSelect:r,onAutoScroll:o,...s}=a,u=va("SelectScrollButton",r),d=v.useRef(null),p=bs(r),h=v.useCallback(()=>{d.current!==null&&(window.clearInterval(d.current),d.current=null)},[]);return v.useEffect(()=>()=>h(),[h]),pt(()=>{p().find(x=>x.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[p]),S.jsx(Xe.div,{"aria-hidden":!0,...s,ref:i,style:{flexShrink:0,...s.style},onPointerDown:Be(s.onPointerDown,()=>{d.current===null&&(d.current=window.setInterval(o,50))}),onPointerMove:Be(s.onPointerMove,()=>{u.onItemLeave?.(),d.current===null&&(d.current=window.setInterval(o,50))}),onPointerLeave:Be(s.onPointerLeave,()=>{h()})})}),GR="SelectSeparator",VR=v.forwardRef((a,i)=>{const{__scopeSelect:r,...o}=a;return S.jsx(Xe.div,{"aria-hidden":!0,...o,ref:i})});VR.displayName=GR;var Of="SelectArrow",FR=v.forwardRef((a,i)=>{const{__scopeSelect:r,...o}=a,s=Cs(r),u=ya(Of,r),d=va(Of,r);return u.open&&d.position==="popper"?S.jsx(c0,{...s,...o,ref:i}):null});FR.displayName=Of;var qR="SelectBubbleInput",V0=v.forwardRef(({__scopeSelect:a,value:i,...r},o)=>{const s=v.useRef(null),u=nt(o,s),d=zw(i);return v.useEffect(()=>{const p=s.current;if(!p)return;const h=window.HTMLSelectElement.prototype,x=Object.getOwnPropertyDescriptor(h,"value").set;if(d!==i&&x){const y=new Event("change",{bubbles:!0});x.call(p,i),p.dispatchEvent(y)}},[d,i]),S.jsx(Xe.select,{...r,style:{...u0,...r.style},ref:u,defaultValue:i})});V0.displayName=qR;function F0(a){return a===""||a===void 0}function q0(a){const i=Ga(a),r=v.useRef(""),o=v.useRef(0),s=v.useCallback(d=>{const p=r.current+d;i(p),(function h(m){r.current=m,window.clearTimeout(o.current),m!==""&&(o.current=window.setTimeout(()=>h(""),1e3))})(p)},[i]),u=v.useCallback(()=>{r.current="",window.clearTimeout(o.current)},[]);return v.useEffect(()=>()=>window.clearTimeout(o.current),[]),[r,s,u]}function Y0(a,i,r){const s=i.length>1&&Array.from(i).every(m=>m===i[0])?i[0]:i,u=r?a.indexOf(r):-1;let d=YR(a,Math.max(u,0));s.length===1&&(d=d.filter(m=>m!==r));const h=d.find(m=>m.textValue.toLowerCase().startsWith(s.toLowerCase()));return h!==r?h:void 0}function YR(a,i){return a.map((r,o)=>a[(i+o)%a.length])}var KR=b0,XR=T0,QR=A0,$R=w0,ZR=R0,WR=_0,JR=D0,e_=k0,t_=H0,n_=P0,a_=U0,i_=B0;function yy({...a}){return S.jsx(KR,{"data-slot":"select",...a})}function vy({...a}){return S.jsx(QR,{"data-slot":"select-value",...a})}function xy({className:a,size:i="default",children:r,...o}){return S.jsxs(XR,{"data-slot":"select-trigger","data-size":i,className:Qt("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",a),...o,children:[r,S.jsx($R,{asChild:!0,children:S.jsx(bv,{className:"size-4 opacity-50"})})]})}function Sy({className:a,children:i,position:r="item-aligned",align:o="center",...s}){return S.jsx(ZR,{children:S.jsxs(WR,{"data-slot":"select-content",className:Qt("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",r==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",a),position:r,align:o,...s,children:[S.jsx(l_,{}),S.jsx(JR,{className:Qt("p-1",r==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:i}),S.jsx(r_,{})]})})}function df({className:a,children:i,...r}){return S.jsxs(e_,{"data-slot":"select-item",className:Qt("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",a),...r,children:[S.jsx("span",{"data-slot":"select-item-indicator",className:"absolute right-2 flex size-3.5 items-center justify-center",children:S.jsx(n_,{children:S.jsx(dE,{className:"size-4"})})}),S.jsx(t_,{children:i})]})}function l_({className:a,...i}){return S.jsx(a_,{"data-slot":"select-scroll-up-button",className:Qt("flex cursor-default items-center justify-center py-1",a),...i,children:S.jsx(gE,{className:"size-4"})})}function r_({className:a,...i}){return S.jsx(i_,{"data-slot":"select-scroll-down-button",className:Qt("flex cursor-default items-center justify-center py-1",a),...i,children:S.jsx(bv,{className:"size-4"})})}function o_(a,i){return v.useReducer((r,o)=>i[r][o]??r,a)}var Wf=a=>{const{present:i,children:r}=a,o=s_(i),s=typeof r=="function"?r({present:o.isPresent}):v.Children.only(r),u=nt(o.ref,c_(s));return typeof r=="function"||o.isPresent?v.cloneElement(s,{ref:u}):null};Wf.displayName="Presence";function s_(a){const[i,r]=v.useState(),o=v.useRef(null),s=v.useRef(a),u=v.useRef("none"),d=a?"mounted":"unmounted",[p,h]=o_(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return v.useEffect(()=>{const m=Ho(o.current);u.current=p==="mounted"?m:"none"},[p]),pt(()=>{const m=o.current,x=s.current;if(x!==a){const T=u.current,E=Ho(m);a?h("MOUNT"):E==="none"||m?.display==="none"?h("UNMOUNT"):h(x&&T!==E?"ANIMATION_OUT":"UNMOUNT"),s.current=a}},[a,h]),pt(()=>{if(i){let m;const x=i.ownerDocument.defaultView??window,y=E=>{const C=Ho(o.current).includes(CSS.escape(E.animationName));if(E.target===i&&C&&(h("ANIMATION_END"),!s.current)){const A=i.style.animationFillMode;i.style.animationFillMode="forwards",m=x.setTimeout(()=>{i.style.animationFillMode==="forwards"&&(i.style.animationFillMode=A)})}},T=E=>{E.target===i&&(u.current=Ho(o.current))};return i.addEventListener("animationstart",T),i.addEventListener("animationcancel",y),i.addEventListener("animationend",y),()=>{x.clearTimeout(m),i.removeEventListener("animationstart",T),i.removeEventListener("animationcancel",y),i.removeEventListener("animationend",y)}}else h("ANIMATION_END")},[i,h]),{isPresent:["mounted","unmountSuspended"].includes(p),ref:v.useCallback(m=>{o.current=m?getComputedStyle(m):null,r(m)},[])}}function Ho(a){return a?.animationName||"none"}function c_(a){let i=Object.getOwnPropertyDescriptor(a.props,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning;return r?a.ref:(i=Object.getOwnPropertyDescriptor(a,"ref")?.get,r=i&&"isReactWarning"in i&&i.isReactWarning,r?a.props.ref:a.props.ref||a.ref)}var u_=Symbol("radix.slottable");function f_(a){const i=({children:r})=>S.jsx(S.Fragment,{children:r});return i.displayName=`${a}.Slottable`,i.__radixId=u_,i}var[Ts]=ds("Tooltip",[vs]),Es=vs(),K0="TooltipProvider",d_=700,Nf="tooltip.open",[p_,Jf]=Ts(K0),X0=a=>{const{__scopeTooltip:i,delayDuration:r=d_,skipDelayDuration:o=300,disableHoverableContent:s=!1,children:u}=a,d=v.useRef(!0),p=v.useRef(!1),h=v.useRef(0);return v.useEffect(()=>{const m=h.current;return()=>window.clearTimeout(m)},[]),S.jsx(p_,{scope:i,isOpenDelayedRef:d,delayDuration:r,onOpen:v.useCallback(()=>{window.clearTimeout(h.current),d.current=!1},[]),onClose:v.useCallback(()=>{window.clearTimeout(h.current),h.current=window.setTimeout(()=>d.current=!0,o)},[o]),isPointerInTransitRef:p,onPointerInTransitChange:v.useCallback(m=>{p.current=m},[]),disableHoverableContent:s,children:u})};X0.displayName=K0;var ar="Tooltip",[h_,cr]=Ts(ar),Q0=a=>{const{__scopeTooltip:i,children:r,open:o,defaultOpen:s,onOpenChange:u,disableHoverableContent:d,delayDuration:p}=a,h=Jf(ar,a.__scopeTooltip),m=Es(i),[x,y]=v.useState(null),T=ps(),E=v.useRef(0),w=d??h.disableHoverableContent,C=p??h.delayDuration,A=v.useRef(!1),[M,N]=Tf({prop:o,defaultProp:s??!1,onChange:B=>{B?(h.onOpen(),document.dispatchEvent(new CustomEvent(Nf))):h.onClose(),u?.(B)},caller:ar}),j=v.useMemo(()=>M?A.current?"delayed-open":"instant-open":"closed",[M]),U=v.useCallback(()=>{window.clearTimeout(E.current),E.current=0,A.current=!1,N(!0)},[N]),G=v.useCallback(()=>{window.clearTimeout(E.current),E.current=0,N(!1)},[N]),Z=v.useCallback(()=>{window.clearTimeout(E.current),E.current=window.setTimeout(()=>{A.current=!0,N(!0),E.current=0},C)},[C,N]);return v.useEffect(()=>()=>{E.current&&(window.clearTimeout(E.current),E.current=0)},[]),S.jsx(r0,{...m,children:S.jsx(h_,{scope:i,contentId:T,open:M,stateAttribute:j,trigger:x,onTriggerChange:y,onTriggerEnter:v.useCallback(()=>{h.isOpenDelayedRef.current?Z():U()},[h.isOpenDelayedRef,Z,U]),onTriggerLeave:v.useCallback(()=>{w?G():(window.clearTimeout(E.current),E.current=0)},[G,w]),onOpen:U,onClose:G,disableHoverableContent:w,children:r})})};Q0.displayName=ar;var Mf="TooltipTrigger",$0=v.forwardRef((a,i)=>{const{__scopeTooltip:r,...o}=a,s=cr(Mf,r),u=Jf(Mf,r),d=Es(r),p=v.useRef(null),h=nt(i,p,s.onTriggerChange),m=v.useRef(!1),x=v.useRef(!1),y=v.useCallback(()=>m.current=!1,[]);return v.useEffect(()=>()=>document.removeEventListener("pointerup",y),[y]),S.jsx(o0,{asChild:!0,...d,children:S.jsx(Xe.button,{"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute,...o,ref:h,onPointerMove:Be(a.onPointerMove,T=>{T.pointerType!=="touch"&&!x.current&&!u.isPointerInTransitRef.current&&(s.onTriggerEnter(),x.current=!0)}),onPointerLeave:Be(a.onPointerLeave,()=>{s.onTriggerLeave(),x.current=!1}),onPointerDown:Be(a.onPointerDown,()=>{s.open&&s.onClose(),m.current=!0,document.addEventListener("pointerup",y,{once:!0})}),onFocus:Be(a.onFocus,()=>{m.current||s.onOpen()}),onBlur:Be(a.onBlur,s.onClose),onClick:Be(a.onClick,s.onClose)})})});$0.displayName=Mf;var ed="TooltipPortal",[m_,g_]=Ts(ed,{forceMount:void 0}),Z0=a=>{const{__scopeTooltip:i,forceMount:r,children:o,container:s}=a,u=cr(ed,i);return S.jsx(m_,{scope:i,forceMount:r,children:S.jsx(Wf,{present:r||u.open,children:S.jsx($f,{asChild:!0,container:s,children:o})})})};Z0.displayName=ed;var Ui="TooltipContent",W0=v.forwardRef((a,i)=>{const r=g_(Ui,a.__scopeTooltip),{forceMount:o=r.forceMount,side:s="top",...u}=a,d=cr(Ui,a.__scopeTooltip);return S.jsx(Wf,{present:o||d.open,children:d.disableHoverableContent?S.jsx(J0,{side:s,...u,ref:i}):S.jsx(y_,{side:s,...u,ref:i})})}),y_=v.forwardRef((a,i)=>{const r=cr(Ui,a.__scopeTooltip),o=Jf(Ui,a.__scopeTooltip),s=v.useRef(null),u=nt(i,s),[d,p]=v.useState(null),{trigger:h,onClose:m}=r,x=s.current,{onPointerInTransitChange:y}=o,T=v.useCallback(()=>{p(null),y(!1)},[y]),E=v.useCallback((w,C)=>{const A=w.currentTarget,M={x:w.clientX,y:w.clientY},N=b_(M,A.getBoundingClientRect()),j=C_(M,N),U=T_(C.getBoundingClientRect()),G=A_([...j,...U]);p(G),y(!0)},[y]);return v.useEffect(()=>()=>T(),[T]),v.useEffect(()=>{if(h&&x){const w=A=>E(A,x),C=A=>E(A,h);return h.addEventListener("pointerleave",w),x.addEventListener("pointerleave",C),()=>{h.removeEventListener("pointerleave",w),x.removeEventListener("pointerleave",C)}}},[h,x,E,T]),v.useEffect(()=>{if(d){const w=C=>{const A=C.target,M={x:C.clientX,y:C.clientY},N=h?.contains(A)||x?.contains(A),j=!E_(M,d);N?T():j&&(T(),m())};return document.addEventListener("pointermove",w),()=>document.removeEventListener("pointermove",w)}},[h,x,d,m,T]),S.jsx(J0,{...a,ref:u})}),[v_,x_]=Ts(ar,{isInside:!1}),S_=f_("TooltipContent"),J0=v.forwardRef((a,i)=>{const{__scopeTooltip:r,children:o,"aria-label":s,onEscapeKeyDown:u,onPointerDownOutside:d,...p}=a,h=cr(Ui,r),m=Es(r),{onClose:x}=h;return v.useEffect(()=>(document.addEventListener(Nf,x),()=>document.removeEventListener(Nf,x)),[x]),v.useEffect(()=>{if(h.trigger){const y=T=>{T.target?.contains(h.trigger)&&x()};return window.addEventListener("scroll",y,{capture:!0}),()=>window.removeEventListener("scroll",y,{capture:!0})}},[h.trigger,x]),S.jsx(Bf,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:y=>y.preventDefault(),onDismiss:x,children:S.jsxs(s0,{"data-state":h.stateAttribute,...m,...p,ref:i,style:{...p.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[S.jsx(S_,{children:o}),S.jsx(v_,{scope:r,isInside:!0,children:S.jsx(Hw,{id:h.contentId,role:"tooltip",children:s||o})})]})})});W0.displayName=Ui;var ex="TooltipArrow",tx=v.forwardRef((a,i)=>{const{__scopeTooltip:r,...o}=a,s=Es(r);return x_(ex,r).isInside?null:S.jsx(c0,{...s,...o,ref:i})});tx.displayName=ex;function b_(a,i){const r=Math.abs(i.top-a.y),o=Math.abs(i.bottom-a.y),s=Math.abs(i.right-a.x),u=Math.abs(i.left-a.x);switch(Math.min(r,o,s,u)){case u:return"left";case s:return"right";case r:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function C_(a,i,r=5){const o=[];switch(i){case"top":o.push({x:a.x-r,y:a.y+r},{x:a.x+r,y:a.y+r});break;case"bottom":o.push({x:a.x-r,y:a.y-r},{x:a.x+r,y:a.y-r});break;case"left":o.push({x:a.x+r,y:a.y-r},{x:a.x+r,y:a.y+r});break;case"right":o.push({x:a.x-r,y:a.y-r},{x:a.x-r,y:a.y+r});break}return o}function T_(a){const{top:i,right:r,bottom:o,left:s}=a;return[{x:s,y:i},{x:r,y:i},{x:r,y:o},{x:s,y:o}]}function E_(a,i){const{x:r,y:o}=a;let s=!1;for(let u=0,d=i.length-1;u<i.length;d=u++){const p=i[u],h=i[d],m=p.x,x=p.y,y=h.x,T=h.y;x>o!=T>o&&r<(y-m)*(o-x)/(T-x)+m&&(s=!s)}return s}function A_(a){const i=a.slice();return i.sort((r,o)=>r.x<o.x?-1:r.x>o.x?1:r.y<o.y?-1:r.y>o.y?1:0),w_(i)}function w_(a){if(a.length<=1)return a.slice();const i=[];for(let o=0;o<a.length;o++){const s=a[o];for(;i.length>=2;){const u=i[i.length-1],d=i[i.length-2];if((u.x-d.x)*(s.y-d.y)>=(u.y-d.y)*(s.x-d.x))i.pop();else break}i.push(s)}i.pop();const r=[];for(let o=a.length-1;o>=0;o--){const s=a[o];for(;r.length>=2;){const u=r[r.length-1],d=r[r.length-2];if((u.x-d.x)*(s.y-d.y)>=(u.y-d.y)*(s.x-d.x))r.pop();else break}r.push(s)}return r.pop(),i.length===1&&r.length===1&&i[0].x===r[0].x&&i[0].y===r[0].y?i:i.concat(r)}var R_=X0,__=Q0,O_=$0,N_=Z0,M_=W0,D_=tx;function nx({delayDuration:a=0,...i}){return S.jsx(R_,{"data-slot":"tooltip-provider",delayDuration:a,...i})}function by({...a}){return S.jsx(nx,{children:S.jsx(__,{"data-slot":"tooltip",...a})})}function Cy({...a}){return S.jsx(O_,{"data-slot":"tooltip-trigger",...a})}function Ty({className:a,sideOffset:i=0,children:r,...o}){return S.jsx(N_,{children:S.jsxs(M_,{"data-slot":"tooltip-content",sideOffset:i,className:Qt("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",a),...o,children:[r,S.jsx(D_,{className:"bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"})]})})}function L_(){const{t:a,i18n:i}=Fi(),r=i.language,[o,s]=v.useState(""),[u,d]=v.useState("all"),[p,h]=v.useState("card"),[m,x]=v.useState("newest"),y=fs(),T=[{value:"newest",label:a("notes.newest")},{value:"oldest",label:a("notes.oldest")},{value:"title",label:a("notes.title")},{value:"updated",label:a("notes.recentlyUpdated")}],E=v.useMemo(()=>{let w=y.filter(C=>{const A=C[r].title.toLowerCase().includes(o.toLowerCase())||C[r].summary.toLowerCase().includes(o.toLowerCase())||C.tags.some(N=>N.toLowerCase().includes(o.toLowerCase())),M=u==="all"||C.category===u;return A&&M});return w=[...w].sort((C,A)=>{switch(m){case"newest":return new Date(A.createdAt).getTime()-new Date(C.createdAt).getTime();case"oldest":return new Date(C.createdAt).getTime()-new Date(A.createdAt).getTime();case"title":return C[r].title.localeCompare(A[r].title,r);case"updated":return new Date(A.updatedAt).getTime()-new Date(C.updatedAt).getTime();default:return 0}}),w},[y,o,u,m,r]);return S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[S.jsxs("div",{className:"mb-8",children:[S.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-slate-800 mb-4",children:a("notes.title")}),S.jsxs("div",{className:"flex flex-col lg:flex-row gap-4",children:[S.jsxs("div",{className:"relative flex-1",children:[S.jsx(IE,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"}),S.jsx(E2,{placeholder:a("notes.search"),value:o,onChange:w=>s(w.target.value),className:"pl-10"})]}),S.jsxs(yy,{value:u,onValueChange:d,children:[S.jsx(xy,{className:"w-full lg:w-48",children:S.jsx(vy,{placeholder:a("notes.filterByCategory")})}),S.jsxs(Sy,{children:[S.jsx(df,{value:"all",children:a("notes.allCategories")}),Ya.map(w=>S.jsx(df,{value:w.slug,children:w[r].name},w.id))]})]}),S.jsxs(yy,{value:m,onValueChange:w=>x(w),children:[S.jsxs(xy,{className:"w-full lg:w-44",children:[S.jsx(rE,{className:"w-4 h-4 mr-2"}),S.jsx(vy,{placeholder:a("notes.sortBy")})]}),S.jsx(Sy,{children:T.map(w=>S.jsx(df,{value:w.value,children:w.label},w.value))})]}),S.jsx(nx,{children:S.jsxs("div",{className:"flex items-center gap-1 border rounded-lg p-1 bg-white",children:[S.jsxs(by,{children:[S.jsx(Cy,{asChild:!0,children:S.jsx(Xt,{variant:p==="card"?"default":"ghost",size:"icon",className:"h-9 w-9",onClick:()=>h("card"),children:S.jsx(OE,{className:"w-4 h-4"})})}),S.jsx(Ty,{children:S.jsx("p",{children:a("notes.cardView")})})]}),S.jsxs(by,{children:[S.jsx(Cy,{asChild:!0,children:S.jsx(Xt,{variant:p==="list"?"default":"ghost",size:"icon",className:"h-9 w-9",onClick:()=>h("list"),children:S.jsx(ME,{className:"w-4 h-4"})})}),S.jsx(Ty,{children:S.jsx("p",{children:a("notes.listView")})})]})]})})]}),S.jsxs("div",{className:"mt-4 text-sm text-slate-500",children:[E.length," ",r==="zh"?"篇笔记":"notes"]})]}),E.length===0?S.jsx("div",{className:"text-center py-16",children:S.jsx("p",{className:"text-slate-400 text-lg",children:a("notes.noNotes")})}):S.jsx("div",{className:p==="card"?"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6":"flex flex-col gap-4",children:E.map(w=>p==="card"?S.jsx(j_,{note:w,lang:r},w.id):S.jsx(z_,{note:w,lang:r},w.id))})]})}function j_({note:a,lang:i}){const r=Ya.find(o=>o.slug===a.category);return S.jsx(Ze,{to:`/notes/${a.slug}`,children:S.jsx(pa,{className:"h-full hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1",children:S.jsxs(ha,{className:"p-6",children:[S.jsx("div",{className:"flex items-center gap-2 mb-3",children:S.jsx(us,{className:"bg-indigo-100 text-indigo-700 hover:bg-indigo-100",children:r?.[i].name})}),S.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-3 line-clamp-2",children:a[i].title}),S.jsx("p",{className:"text-sm text-slate-500 mb-4 line-clamp-3",children:a[i].summary}),S.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-slate-100",children:[S.jsx("div",{className:"flex items-center gap-4 text-xs text-slate-400",children:S.jsxs("span",{className:"flex items-center gap-1",children:[S.jsx(cs,{className:"w-3 h-3"}),a.createdAt]})}),S.jsx("div",{className:"flex gap-1",children:a.tags.slice(0,2).map(o=>S.jsxs("span",{className:"text-xs text-slate-400 flex items-center gap-0.5",children:[S.jsx(Uf,{className:"w-3 h-3"}),o]},o))})]})]})})})}function z_({note:a,lang:i}){const r=Ya.find(o=>o.slug===a.category);return S.jsx(Ze,{to:`/notes/${a.slug}`,children:S.jsx(pa,{className:"hover:shadow-md transition-all cursor-pointer group",children:S.jsx(ha,{className:"p-4",children:S.jsxs("div",{className:"flex items-center gap-4",children:[S.jsx("div",{className:"flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center",children:S.jsx("span",{className:"text-xs font-medium text-indigo-600",children:r?.[i].name.slice(0,2)})}),S.jsxs("div",{className:"flex-1 min-w-0",children:[S.jsx("h3",{className:"text-base font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors",children:a[i].title}),S.jsx("p",{className:"text-sm text-slate-500 line-clamp-1 mt-1",children:a[i].summary})]}),S.jsxs("div",{className:"hidden sm:flex flex-col items-end gap-1 text-xs text-slate-400",children:[S.jsxs("span",{className:"flex items-center gap-1",children:[S.jsx(cs,{className:"w-3 h-3"}),a.createdAt]}),S.jsxs("span",{className:"flex items-center gap-1",children:[S.jsx(Tv,{className:"w-3 h-3"}),a.updatedAt]})]}),S.jsx("div",{className:"hidden md:flex flex-wrap gap-1 max-w-[150px] justify-end",children:a.tags.map(o=>S.jsx(us,{variant:"outline",className:"text-xs",children:o},o))}),S.jsx(ki,{className:"w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-colors"})]})})})})}function k_({content:a}){const i=a.split(`
`),r=[];let o=!1,s="";return i.forEach((u,d)=>{if(u.startsWith("```")){o?(r.push(S.jsx("pre",{className:"bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto my-4",children:S.jsx("code",{className:"text-sm font-mono",children:s.trim()})},`code-${d}`)),s="",o=!1):o=!0;return}if(o){s+=u+`
`;return}if(u.startsWith("# ")){r.push(S.jsx("h1",{className:"text-3xl font-bold text-slate-800 mt-8 mb-4",children:zi(u.slice(2))},d));return}if(u.startsWith("## ")){r.push(S.jsx("h2",{className:"text-2xl font-semibold text-slate-800 mt-6 mb-3",children:zi(u.slice(3))},d));return}if(u.startsWith("### ")){r.push(S.jsx("h3",{className:"text-xl font-semibold text-slate-800 mt-5 mb-2",children:zi(u.slice(4))},d));return}if(u.startsWith("- ")||u.startsWith("* ")){r.push(S.jsx("li",{className:"ml-6 text-slate-700 leading-relaxed list-disc",children:zi(u.slice(2))},d));return}const p=u.match(/^(\d+)\.\s(.+)$/);if(p){r.push(S.jsx("li",{className:"ml-6 text-slate-700 leading-relaxed list-decimal",children:zi(p[2])},d));return}const h=u.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);if(h){const m=h[1],x=h[2];r.push(S.jsx("img",{src:x,alt:m,className:"w-full rounded-lg my-6 shadow-md",loading:"lazy"},`img-${d}`));return}if(u.trim()===""){r.push(S.jsx("div",{className:"h-4"},d));return}r.push(S.jsx("p",{className:"text-slate-700 leading-relaxed mb-4",children:zi(u)},d))}),S.jsx(S.Fragment,{children:r})}function zi(a){const i=[];let r=0;const o=/(\*\*|\*|`)(.+?)\1/g;let s;for(;(s=o.exec(a))!==null;){s.index>r&&i.push(a.slice(r,s.index));const u=s[1],d=s[2];u==="**"?i.push(S.jsx("strong",{className:"font-semibold text-slate-800",children:d},s.index)):u==="*"?i.push(S.jsx("em",{className:"italic",children:d},s.index)):u==="`"&&i.push(S.jsx("code",{className:"bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono",children:d},s.index)),r=s.index+s[0].length}return r<a.length&&i.push(a.slice(r)),S.jsx(S.Fragment,{children:i})}function H_(){const{slug:a}=Hy(),{t:i,i18n:r}=Fi(),o=r.language,s=a?v2(a):void 0;if(!s||s.status!=="published")return S.jsx(By,{to:"/notes",replace:!0});const u=Ya.find(p=>p.slug===s.category),d=fs().filter(p=>p.category===s.category&&p.id!==s.id).slice(0,3);return S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[S.jsxs("nav",{className:"flex items-center gap-2 text-sm text-slate-500 mb-6",children:[S.jsx(Ze,{to:"/",className:"hover:text-indigo-600",children:i("nav.home")}),S.jsx(ki,{className:"w-4 h-4"}),S.jsx(Ze,{to:"/notes",className:"hover:text-indigo-600",children:i("nav.notes")}),S.jsx(ki,{className:"w-4 h-4"}),S.jsx("span",{className:"text-slate-800",children:s[o].title})]}),S.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8",children:[S.jsx("div",{className:"lg:col-span-3",children:S.jsx(pa,{children:S.jsxs(ha,{className:"p-8",children:[S.jsxs("div",{className:"mb-8",children:[S.jsx(Ze,{to:`/category/${s.category}`,children:S.jsxs(us,{className:"mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200",children:[S.jsx(Rv,{className:"w-3 h-3 mr-1"}),u?.[o].name]})}),S.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-slate-800 mb-4",children:s[o].title}),S.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-sm text-slate-500",children:[S.jsxs("span",{className:"flex items-center gap-1",children:[S.jsx(cs,{className:"w-4 h-4"}),i("notes.publishedOn")," ",s.createdAt]}),S.jsxs("span",{className:"flex items-center gap-1",children:[S.jsx(Tv,{className:"w-4 h-4"}),i("notes.updatedOn")," ",s.updatedAt]})]}),S.jsx("div",{className:"flex flex-wrap gap-2 mt-4",children:s.tags.map(p=>S.jsxs("span",{className:"inline-flex items-center gap-1 text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded",children:[S.jsx(Uf,{className:"w-3 h-3"}),p]},p))})]}),S.jsx("div",{className:"prose prose-slate max-w-none",children:S.jsx(k_,{content:s[o].content||""})}),S.jsx("div",{className:"mt-12 pt-8 border-t border-slate-100",children:S.jsx(Ze,{to:"/notes",children:S.jsxs(Xt,{variant:"outline",children:[S.jsx(vv,{className:"w-4 h-4 mr-2"}),i("note.backToList")]})})})]})})}),S.jsx("div",{className:"lg:col-span-1",children:S.jsxs("div",{className:"sticky top-24 space-y-6",children:[d.length>0&&S.jsx(pa,{children:S.jsxs(ha,{className:"p-4",children:[S.jsx("h3",{className:"font-semibold text-slate-800 mb-4",children:i("note.relatedNotes")}),S.jsx("div",{className:"space-y-3",children:d.map(p=>S.jsxs(Ze,{to:`/notes/${p.slug}`,className:"block p-3 rounded-lg hover:bg-slate-50 transition-colors",children:[S.jsx("p",{className:"text-sm font-medium text-slate-700 line-clamp-2",children:p[o].title}),S.jsx("p",{className:"text-xs text-slate-400 mt-1",children:p.createdAt})]},p.id))})]})}),S.jsx(pa,{children:S.jsxs(ha,{className:"p-4",children:[S.jsx("h3",{className:"font-semibold text-slate-800 mb-2",children:u?.[o].name}),S.jsx("p",{className:"text-sm text-slate-500",children:u?.[o].description}),S.jsx(Ze,{to:`/category/${s.category}`,children:S.jsxs(Xt,{variant:"ghost",size:"sm",className:"mt-3 text-indigo-600",children:[i("categories.viewNotes"),S.jsx(ki,{className:"w-4 h-4 ml-1"})]})})]})})]})})]})]})}const I_={mcu:Ev,mpu:Zo,fpga:_v,rtos:Dv,"embedded-linux":Mv,firmware:wv,protocols:Ov,network:Lv,tools:Wo,"hardware-design":Cv,automotive:Sv,iot:Nv,industrial:Av,"embedded-c":$o,algorithms:xv,frontend:$o,backend:Zo,devops:Wo};function P_(){const{slug:a}=Hy(),{t:i,i18n:r}=Fi(),o=r.language,s=a?S2(a):void 0;if(!s)return S.jsx(By,{to:"/notes",replace:!0});const u=x2(a),d=I_[s.slug]||Rv;return S.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[S.jsxs("nav",{className:"flex items-center gap-2 text-sm text-slate-500 mb-6",children:[S.jsx(Ze,{to:"/",className:"hover:text-indigo-600",children:i("nav.home")}),S.jsx(ki,{className:"w-4 h-4"}),S.jsx(Ze,{to:"/notes",className:"hover:text-indigo-600",children:i("nav.notes")}),S.jsx(ki,{className:"w-4 h-4"}),S.jsx("span",{className:"text-slate-800",children:s[o].name})]}),S.jsxs("div",{className:"mb-8",children:[S.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[S.jsx("div",{className:"w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center",children:S.jsx(d,{className:"w-7 h-7 text-indigo-500"})}),S.jsxs("div",{children:[S.jsx("h1",{className:"text-3xl font-bold text-slate-800",children:s[o].name}),S.jsx("p",{className:"text-slate-500 mt-1",children:s[o].description})]})]}),S.jsx("div",{className:"flex items-center gap-4 text-sm text-slate-500",children:S.jsxs("span",{className:"flex items-center gap-1",children:[S.jsx(Qo,{className:"w-4 h-4"}),i("categories.noteCount",{count:u.length})]})})]}),u.length===0?S.jsx("div",{className:"text-center py-16",children:S.jsx("p",{className:"text-slate-400 text-lg",children:i("notes.noNotes")})}):S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:u.map(p=>S.jsx(U_,{note:p,lang:o},p.id))}),S.jsx("div",{className:"mt-12",children:S.jsx(Ze,{to:"/notes",children:S.jsxs(Xt,{variant:"outline",children:[S.jsx(vv,{className:"w-4 h-4 mr-2"}),i("note.backToList")]})})})]})}function U_({note:a,lang:i}){return S.jsx(Ze,{to:`/notes/${a.slug}`,children:S.jsx(pa,{className:"h-full hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1",children:S.jsxs(ha,{className:"p-6",children:[S.jsx("h3",{className:"text-lg font-semibold text-slate-800 mb-3 line-clamp-2",children:a[i].title}),S.jsx("p",{className:"text-sm text-slate-500 mb-4 line-clamp-3",children:a[i].summary}),S.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-slate-100",children:[S.jsx("div",{className:"flex items-center gap-4 text-xs text-slate-400",children:S.jsxs("span",{className:"flex items-center gap-1",children:[S.jsx(cs,{className:"w-3 h-3"}),a.createdAt]})}),S.jsx("div",{className:"flex gap-1",children:a.tags.slice(0,2).map(r=>S.jsxs("span",{className:"text-xs text-slate-400 flex items-center gap-0.5",children:[S.jsx(Uf,{className:"w-3 h-3"}),r]},r))})]})]})})})}function B_(){return S.jsx(JC,{i18n:ht,children:S.jsx(tC,{children:S.jsx(XE,{children:S.jsxs(M1,{children:[S.jsx(Xl,{path:"/",element:S.jsx(C2,{})}),S.jsx(Xl,{path:"/notes",element:S.jsx(L_,{})}),S.jsx(Xl,{path:"/notes/:slug",element:S.jsx(H_,{})}),S.jsx(Xl,{path:"/category/:slug",element:S.jsx(P_,{})})]})})})})}jb.createRoot(document.getElementById("root")).render(S.jsx(v.StrictMode,{children:S.jsx(B_,{})}));
