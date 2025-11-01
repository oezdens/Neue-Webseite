(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var Ru={exports:{}},Uo={},Pu={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function O0(){if($p)return yt;$p=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function y(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function S(k,te,me){this.props=k,this.context=te,this.refs=A,this.updater=me||M}S.prototype.isReactComponent={},S.prototype.setState=function(k,te){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,te,"setState")},S.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function _(){}_.prototype=S.prototype;function U(k,te,me){this.props=k,this.context=te,this.refs=A,this.updater=me||M}var L=U.prototype=new _;L.constructor=U,T(L,S.prototype),L.isPureReactComponent=!0;var P=Array.isArray,z=Object.prototype.hasOwnProperty,F={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function B(k,te,me){var Ce,Ue={},J=null,re=null;if(te!=null)for(Ce in te.ref!==void 0&&(re=te.ref),te.key!==void 0&&(J=""+te.key),te)z.call(te,Ce)&&!V.hasOwnProperty(Ce)&&(Ue[Ce]=te[Ce]);var xe=arguments.length-2;if(xe===1)Ue.children=me;else if(1<xe){for(var Re=Array(xe),De=0;De<xe;De++)Re[De]=arguments[De+2];Ue.children=Re}if(k&&k.defaultProps)for(Ce in xe=k.defaultProps,xe)Ue[Ce]===void 0&&(Ue[Ce]=xe[Ce]);return{$$typeof:s,type:k,key:J,ref:re,props:Ue,_owner:F.current}}function D(k,te){return{$$typeof:s,type:k.type,key:te,ref:k.ref,props:k.props,_owner:k._owner}}function R(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function G(k){var te={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(me){return te[me]})}var Z=/\/+/g;function oe(k,te){return typeof k=="object"&&k!==null&&k.key!=null?G(""+k.key):te.toString(36)}function ie(k,te,me,Ce,Ue){var J=typeof k;(J==="undefined"||J==="boolean")&&(k=null);var re=!1;if(k===null)re=!0;else switch(J){case"string":case"number":re=!0;break;case"object":switch(k.$$typeof){case s:case e:re=!0}}if(re)return re=k,Ue=Ue(re),k=Ce===""?"."+oe(re,0):Ce,P(Ue)?(me="",k!=null&&(me=k.replace(Z,"$&/")+"/"),ie(Ue,te,me,"",function(De){return De})):Ue!=null&&(R(Ue)&&(Ue=D(Ue,me+(!Ue.key||re&&re.key===Ue.key?"":(""+Ue.key).replace(Z,"$&/")+"/")+k)),te.push(Ue)),1;if(re=0,Ce=Ce===""?".":Ce+":",P(k))for(var xe=0;xe<k.length;xe++){J=k[xe];var Re=Ce+oe(J,xe);re+=ie(J,te,me,Re,Ue)}else if(Re=y(k),typeof Re=="function")for(k=Re.call(k),xe=0;!(J=k.next()).done;)J=J.value,Re=Ce+oe(J,xe++),re+=ie(J,te,me,Re,Ue);else if(J==="object")throw te=String(k),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return re}function fe(k,te,me){if(k==null)return k;var Ce=[],Ue=0;return ie(k,Ce,"","",function(J){return te.call(me,J,Ue++)}),Ce}function Q(k){if(k._status===-1){var te=k._result;te=te(),te.then(function(me){(k._status===0||k._status===-1)&&(k._status=1,k._result=me)},function(me){(k._status===0||k._status===-1)&&(k._status=2,k._result=me)}),k._status===-1&&(k._status=0,k._result=te)}if(k._status===1)return k._result.default;throw k._result}var pe={current:null},N={transition:null},de={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:N,ReactCurrentOwner:F};function ue(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:fe,forEach:function(k,te,me){fe(k,function(){te.apply(this,arguments)},me)},count:function(k){var te=0;return fe(k,function(){te++}),te},toArray:function(k){return fe(k,function(te){return te})||[]},only:function(k){if(!R(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},yt.Component=S,yt.Fragment=n,yt.Profiler=a,yt.PureComponent=U,yt.StrictMode=r,yt.Suspense=p,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,yt.act=ue,yt.cloneElement=function(k,te,me){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Ce=T({},k.props),Ue=k.key,J=k.ref,re=k._owner;if(te!=null){if(te.ref!==void 0&&(J=te.ref,re=F.current),te.key!==void 0&&(Ue=""+te.key),k.type&&k.type.defaultProps)var xe=k.type.defaultProps;for(Re in te)z.call(te,Re)&&!V.hasOwnProperty(Re)&&(Ce[Re]=te[Re]===void 0&&xe!==void 0?xe[Re]:te[Re])}var Re=arguments.length-2;if(Re===1)Ce.children=me;else if(1<Re){xe=Array(Re);for(var De=0;De<Re;De++)xe[De]=arguments[De+2];Ce.children=xe}return{$$typeof:s,type:k.type,key:Ue,ref:J,props:Ce,_owner:re}},yt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},yt.createElement=B,yt.createFactory=function(k){var te=B.bind(null,k);return te.type=k,te},yt.createRef=function(){return{current:null}},yt.forwardRef=function(k){return{$$typeof:d,render:k}},yt.isValidElement=R,yt.lazy=function(k){return{$$typeof:x,_payload:{_status:-1,_result:k},_init:Q}},yt.memo=function(k,te){return{$$typeof:h,type:k,compare:te===void 0?null:te}},yt.startTransition=function(k){var te=N.transition;N.transition={};try{k()}finally{N.transition=te}},yt.unstable_act=ue,yt.useCallback=function(k,te){return pe.current.useCallback(k,te)},yt.useContext=function(k){return pe.current.useContext(k)},yt.useDebugValue=function(){},yt.useDeferredValue=function(k){return pe.current.useDeferredValue(k)},yt.useEffect=function(k,te){return pe.current.useEffect(k,te)},yt.useId=function(){return pe.current.useId()},yt.useImperativeHandle=function(k,te,me){return pe.current.useImperativeHandle(k,te,me)},yt.useInsertionEffect=function(k,te){return pe.current.useInsertionEffect(k,te)},yt.useLayoutEffect=function(k,te){return pe.current.useLayoutEffect(k,te)},yt.useMemo=function(k,te){return pe.current.useMemo(k,te)},yt.useReducer=function(k,te,me){return pe.current.useReducer(k,te,me)},yt.useRef=function(k){return pe.current.useRef(k)},yt.useState=function(k){return pe.current.useState(k)},yt.useSyncExternalStore=function(k,te,me){return pe.current.useSyncExternalStore(k,te,me)},yt.useTransition=function(){return pe.current.useTransition()},yt.version="18.3.1",yt}var Kp;function pf(){return Kp||(Kp=1,Pu.exports=O0()),Pu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function z0(){if(Zp)return Uo;Zp=1;var s=pf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,h){var x,v={},y=null,M=null;h!==void 0&&(y=""+h),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(M=p.ref);for(x in p)r.call(p,x)&&!l.hasOwnProperty(x)&&(v[x]=p[x]);if(d&&d.defaultProps)for(x in p=d.defaultProps,p)v[x]===void 0&&(v[x]=p[x]);return{$$typeof:e,type:d,key:y,ref:M,props:v,_owner:a.current}}return Uo.Fragment=n,Uo.jsx=u,Uo.jsxs=u,Uo}var Qp;function B0(){return Qp||(Qp=1,Ru.exports=z0()),Ru.exports}var m=B0(),ol={},Du={exports:{}},In={},Nu={exports:{}},Lu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function H0(){return Jp||(Jp=1,(function(s){function e(N,de){var ue=N.length;N.push(de);e:for(;0<ue;){var k=ue-1>>>1,te=N[k];if(0<a(te,de))N[k]=de,N[ue]=te,ue=k;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var de=N[0],ue=N.pop();if(ue!==de){N[0]=ue;e:for(var k=0,te=N.length,me=te>>>1;k<me;){var Ce=2*(k+1)-1,Ue=N[Ce],J=Ce+1,re=N[J];if(0>a(Ue,ue))J<te&&0>a(re,Ue)?(N[k]=re,N[J]=ue,k=J):(N[k]=Ue,N[Ce]=ue,k=Ce);else if(J<te&&0>a(re,ue))N[k]=re,N[J]=ue,k=J;else break e}}return de}function a(N,de){var ue=N.sortIndex-de.sortIndex;return ue!==0?ue:N.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],h=[],x=1,v=null,y=3,M=!1,T=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(N){for(var de=n(h);de!==null;){if(de.callback===null)r(h);else if(de.startTime<=N)r(h),de.sortIndex=de.expirationTime,e(p,de);else break;de=n(h)}}function P(N){if(A=!1,L(N),!T)if(n(p)!==null)T=!0,Q(z);else{var de=n(h);de!==null&&pe(P,de.startTime-N)}}function z(N,de){T=!1,A&&(A=!1,_(B),B=-1),M=!0;var ue=y;try{for(L(de),v=n(p);v!==null&&(!(v.expirationTime>de)||N&&!G());){var k=v.callback;if(typeof k=="function"){v.callback=null,y=v.priorityLevel;var te=k(v.expirationTime<=de);de=s.unstable_now(),typeof te=="function"?v.callback=te:v===n(p)&&r(p),L(de)}else r(p);v=n(p)}if(v!==null)var me=!0;else{var Ce=n(h);Ce!==null&&pe(P,Ce.startTime-de),me=!1}return me}finally{v=null,y=ue,M=!1}}var F=!1,V=null,B=-1,D=5,R=-1;function G(){return!(s.unstable_now()-R<D)}function Z(){if(V!==null){var N=s.unstable_now();R=N;var de=!0;try{de=V(!0,N)}finally{de?oe():(F=!1,V=null)}}else F=!1}var oe;if(typeof U=="function")oe=function(){U(Z)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,fe=ie.port2;ie.port1.onmessage=Z,oe=function(){fe.postMessage(null)}}else oe=function(){S(Z,0)};function Q(N){V=N,F||(F=!0,oe())}function pe(N,de){B=S(function(){N(s.unstable_now())},de)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(N){N.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,Q(z))},s.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<N?Math.floor(1e3/N):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(N){switch(y){case 1:case 2:case 3:var de=3;break;default:de=y}var ue=y;y=de;try{return N()}finally{y=ue}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(N,de){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ue=y;y=N;try{return de()}finally{y=ue}},s.unstable_scheduleCallback=function(N,de,ue){var k=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?k+ue:k):ue=k,N){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=ue+te,N={id:x++,callback:de,priorityLevel:N,startTime:ue,expirationTime:te,sortIndex:-1},ue>k?(N.sortIndex=ue,e(h,N),n(p)===null&&N===n(h)&&(A?(_(B),B=-1):A=!0,pe(P,ue-k))):(N.sortIndex=te,e(p,N),T||M||(T=!0,Q(z))),N},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(N){var de=y;return function(){var ue=y;y=de;try{return N.apply(this,arguments)}finally{y=ue}}}})(Lu)),Lu}var em;function V0(){return em||(em=1,Nu.exports=H0()),Nu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function G0(){if(tm)return In;tm=1;var s=pf(),e=V0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function y(t){return p.call(v,t)?!0:p.call(x,t)?!1:h.test(t)?v[t]=!0:(x[t]=!0,!1)}function M(t,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,c){if(i===null||typeof i>"u"||M(t,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,o,c,f,g,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=g,this.removeEmptyString=b}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,U);S[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,U);S[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,U);S[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,c){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,f,c)&&(o=null),c||f===null?y(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?t.setAttributeNS(c,i,o):t.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),F=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),G=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),N=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=N&&t[N]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,k;function te(t){if(k===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+t}var me=!1;function Ce(t,i){if(!t||me)return"";me=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var c=ne}Reflect.construct(t,[],i)}else{try{i.call()}catch(ne){c=ne}t.call(i.prototype)}else{try{throw Error()}catch(ne){c=ne}t()}}catch(ne){if(ne&&c&&typeof ne.stack=="string"){for(var f=ne.stack.split(`
`),g=c.stack.split(`
`),b=f.length-1,I=g.length-1;1<=b&&0<=I&&f[b]!==g[I];)I--;for(;1<=b&&0<=I;b--,I--)if(f[b]!==g[I]){if(b!==1||I!==1)do if(b--,I--,0>I||f[b]!==g[I]){var H=`
`+f[b].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=b&&0<=I);break}}}finally{me=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?te(t):""}function Ue(t){switch(t.tag){case 5:return te(t.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return t=Ce(t.type,!1),t;case 11:return t=Ce(t.type.render,!1),t;case 1:return t=Ce(t.type,!0),t;default:return""}}function J(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case F:return"Portal";case D:return"Profiler";case B:return"StrictMode";case oe:return"Suspense";case ie:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case G:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case Z:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fe:return i=t.displayName||null,i!==null?i:J(t.type)||"Memo";case Q:i=t._payload,t=t._init;try{return J(t(i))}catch{}}return null}function re(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(i);case 8:return i===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function xe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function De(t){var i=Re(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,g=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){c=""+b,g.call(this,b)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function pt(t){t._valueTracker||(t._valueTracker=De(t))}function Ht(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return t&&(c=Re(t)?t.checked?"true":"false":t.value),t=c,t!==o?(i.setValue(t),!0):!1}function O(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nt(t,i){var o=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function lt(t,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=xe(i.value!=null?i.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function tt(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function He(t,i){tt(t,i);var o=xe(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ze(t,i.type,o):i.hasOwnProperty("defaultValue")&&ze(t,i.type,xe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function wt(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ze(t,i,o){(i!=="number"||O(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var ct=Array.isArray;function kt(t,i,o,c){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&c&&(t[o].defaultSelected=!0)}else{for(o=""+xe(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function nt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function E(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(ct(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:xe(o)}}function w(t,i){var o=xe(i.value),c=xe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function j(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ee(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ee(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var le,qe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,c,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(le=le||document.createElement("div"),le.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=le.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ye(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qe=["Webkit","ms","Moz","O"];Object.keys(Ve).forEach(function(t){Qe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ve[i]=Ve[t]})});function be(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ve.hasOwnProperty(t)&&Ve[t]?(""+i).trim():i+"px"}function Ie(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=be(o,i[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,f):t[o]=f}}var ot=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(t,i){if(i){if(ot[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Pe(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mt=null;function W(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ee=null,Ae=null,ke=null;function Me(t){if(t=yo(t)){if(typeof Ee!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Sa(i),Ee(t.stateNode,t.type,i))}}function ge(t){Ae?ke?ke.push(t):ke=[t]:Ae=t}function Ye(){if(Ae){var t=Ae,i=ke;if(ke=Ae=null,Me(t),i)for(t=0;t<i.length;t++)Me(i[t])}}function ht(t,i){return t(i)}function It(){}var bt=!1;function qn(t,i,o){if(bt)return t(i,o);bt=!0;try{return ht(t,i,o)}finally{bt=!1,(Ae!==null||ke!==null)&&(It(),Ye())}}function pn(t,i){var o=t.stateNode;if(o===null)return null;var c=Sa(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var is=!1;if(d)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){is=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{is=!1}function no(t,i,o,c,f,g,b,I,H){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(o,ne)}catch(_e){this.onError(_e)}}var $i=!1,Ar=null,bi=!1,rs=null,ss={onError:function(t){$i=!0,Ar=t}};function ea(t,i,o,c,f,g,b,I,H){$i=!1,Ar=null,no.apply(ss,arguments)}function ta(t,i,o,c,f,g,b,I,H){if(ea.apply(this,arguments),$i){if($i){var ne=Ar;$i=!1,Ar=null}else throw Error(n(198));bi||(bi=!0,rs=ne)}}function Ti(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function na(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ia(t){if(Ti(t)!==t)throw Error(n(188))}function Ql(t){var i=t.alternate;if(!i){if(i=Ti(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,c=i;;){var f=o.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===o)return ia(f),t;if(g===c)return ia(f),i;g=g.sibling}throw Error(n(188))}if(o.return!==c.return)o=f,c=g;else{for(var b=!1,I=f.child;I;){if(I===o){b=!0,o=f,c=g;break}if(I===c){b=!0,c=f,o=g;break}I=I.sibling}if(!b){for(I=g.child;I;){if(I===o){b=!0,o=g,c=f;break}if(I===c){b=!0,c=g,o=f;break}I=I.sibling}if(!b)throw Error(n(189))}}if(o.alternate!==c)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function ra(t){return t=Ql(t),t!==null?sa(t):null}function sa(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=sa(t);if(i!==null)return i;t=t.sibling}return null}var C=e.unstable_scheduleCallback,Y=e.unstable_cancelCallback,ae=e.unstable_shouldYield,ce=e.unstable_requestPaint,q=e.unstable_now,we=e.unstable_getCurrentPriorityLevel,Ne=e.unstable_ImmediatePriority,Ge=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,st=e.unstable_LowPriority,at=e.unstable_IdlePriority,Je=null,ut=null;function Lt(t){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Je,t,void 0,(t.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:et,zt=Math.log,Ut=Math.LN2;function et(t){return t>>>=0,t===0?32:31-(zt(t)/Ut|0)|0}var Ft=64,St=4194304;function tn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ri(t,i){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes,b=o&268435455;if(b!==0){var I=b&~f;I!==0?c=tn(I):(g&=b,g!==0&&(c=tn(g)))}else b=o&~f,b!==0?c=tn(b):g!==0&&(c=tn(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,g=i&-i,f>=g||f===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)o=31-Tt(i),f=1<<o,c|=t[o],i&=~f;return c}function En(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cr(t,i){for(var o=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,g=t.pendingLanes;0<g;){var b=31-Tt(g),I=1<<b,H=f[b];H===-1?((I&o)===0||(I&c)!==0)&&(f[b]=En(I,i)):H<=i&&(t.expiredLanes|=I),g&=~I}}function Bt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wn(){var t=Ft;return Ft<<=1,(Ft&4194240)===0&&(Ft=64),t}function mn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Kt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Tt(i),t[i]=o}function gn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-Tt(o),g=1<<f;i[f]=0,c[f]=-1,t[f]=-1,o&=~g}}function Rr(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var c=31-Tt(o),f=1<<c;f&i|t[c]&i&&(t[c]|=i),o&=~f}}var Mt=0;function Af(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Cf,Jl,Rf,Pf,Df,ec=!1,oa=[],Ki=null,Zi=null,Qi=null,io=new Map,ro=new Map,Ji=[],ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nf(t,i){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":io.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(i.pointerId)}}function so(t,i,o,c,f,g){return t===null||t.nativeEvent!==g?(t={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},i!==null&&(i=yo(i),i!==null&&Jl(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function av(t,i,o,c,f){switch(i){case"focusin":return Ki=so(Ki,t,i,o,c,f),!0;case"dragenter":return Zi=so(Zi,t,i,o,c,f),!0;case"mouseover":return Qi=so(Qi,t,i,o,c,f),!0;case"pointerover":var g=f.pointerId;return io.set(g,so(io.get(g)||null,t,i,o,c,f)),!0;case"gotpointercapture":return g=f.pointerId,ro.set(g,so(ro.get(g)||null,t,i,o,c,f)),!0}return!1}function Lf(t){var i=Pr(t.target);if(i!==null){var o=Ti(i);if(o!==null){if(i=o.tag,i===13){if(i=na(o),i!==null){t.blockedOn=i,Df(t.priority,function(){Rf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function aa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=nc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);mt=c,o.target.dispatchEvent(c),mt=null}else return i=yo(o),i!==null&&Jl(i),t.blockedOn=o,!1;i.shift()}return!0}function If(t,i,o){aa(t)&&o.delete(i)}function lv(){ec=!1,Ki!==null&&aa(Ki)&&(Ki=null),Zi!==null&&aa(Zi)&&(Zi=null),Qi!==null&&aa(Qi)&&(Qi=null),io.forEach(If),ro.forEach(If)}function oo(t,i){t.blockedOn===i&&(t.blockedOn=null,ec||(ec=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,lv)))}function ao(t){function i(f){return oo(f,t)}if(0<oa.length){oo(oa[0],t);for(var o=1;o<oa.length;o++){var c=oa[o];c.blockedOn===t&&(c.blockedOn=null)}}for(Ki!==null&&oo(Ki,t),Zi!==null&&oo(Zi,t),Qi!==null&&oo(Qi,t),io.forEach(i),ro.forEach(i),o=0;o<Ji.length;o++)c=Ji[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<Ji.length&&(o=Ji[0],o.blockedOn===null);)Lf(o),o.blockedOn===null&&Ji.shift()}var os=P.ReactCurrentBatchConfig,la=!0;function cv(t,i,o,c){var f=Mt,g=os.transition;os.transition=null;try{Mt=1,tc(t,i,o,c)}finally{Mt=f,os.transition=g}}function uv(t,i,o,c){var f=Mt,g=os.transition;os.transition=null;try{Mt=4,tc(t,i,o,c)}finally{Mt=f,os.transition=g}}function tc(t,i,o,c){if(la){var f=nc(t,i,o,c);if(f===null)_c(t,i,c,ca,o),Nf(t,c);else if(av(f,t,i,o,c))c.stopPropagation();else if(Nf(t,c),i&4&&-1<ov.indexOf(t)){for(;f!==null;){var g=yo(f);if(g!==null&&Cf(g),g=nc(t,i,o,c),g===null&&_c(t,i,c,ca,o),g===f)break;f=g}f!==null&&c.stopPropagation()}else _c(t,i,c,null,o)}}var ca=null;function nc(t,i,o,c){if(ca=null,t=W(c),t=Pr(t),t!==null)if(i=Ti(t),i===null)t=null;else if(o=i.tag,o===13){if(t=na(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ca=t,null}function Uf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(we()){case Ne:return 1;case Ge:return 4;case Fe:case st:return 16;case at:return 536870912;default:return 16}default:return 16}}var er=null,ic=null,ua=null;function kf(){if(ua)return ua;var t,i=ic,o=i.length,c,f="value"in er?er.value:er.textContent,g=f.length;for(t=0;t<o&&i[t]===f[t];t++);var b=o-t;for(c=1;c<=b&&i[o-c]===f[g-c];c++);return ua=f.slice(t,1<c?1-c:void 0)}function da(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function fa(){return!0}function Ff(){return!1}function Bn(t){function i(o,c,f,g,b){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=b,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(o=t[I],this[I]=o?o(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?fa:Ff,this.isPropagationStopped=Ff,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=fa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=fa)},persist:function(){},isPersistent:fa}),i}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=Bn(as),lo=ue({},as,{view:0,detail:0}),dv=Bn(lo),sc,oc,co,ha=ue({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==co&&(co&&t.type==="mousemove"?(sc=t.screenX-co.screenX,oc=t.screenY-co.screenY):oc=sc=0,co=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),Of=Bn(ha),fv=ue({},ha,{dataTransfer:0}),hv=Bn(fv),pv=ue({},lo,{relatedTarget:0}),ac=Bn(pv),mv=ue({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),gv=Bn(mv),vv=ue({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xv=Bn(vv),_v=ue({},as,{data:0}),zf=Bn(_v),yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ev(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Mv[t])?!!i[t]:!1}function lc(){return Ev}var wv=ue({},lo,{key:function(t){if(t.key){var i=yv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=da(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(t){return t.type==="keypress"?da(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?da(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bv=Bn(wv),Tv=ue({},ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bf=Bn(Tv),Av=ue({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),Cv=Bn(Av),Rv=ue({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pv=Bn(Rv),Dv=ue({},ha,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=Bn(Dv),Lv=[9,13,27,32],cc=d&&"CompositionEvent"in window,uo=null;d&&"documentMode"in document&&(uo=document.documentMode);var Iv=d&&"TextEvent"in window&&!uo,Hf=d&&(!cc||uo&&8<uo&&11>=uo),Vf=" ",Gf=!1;function jf(t,i){switch(t){case"keyup":return Lv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function Uv(t,i){switch(t){case"compositionend":return Wf(i);case"keypress":return i.which!==32?null:(Gf=!0,Vf);case"textInput":return t=i.data,t===Vf&&Gf?null:t;default:return null}}function kv(t,i){if(ls)return t==="compositionend"||!cc&&jf(t,i)?(t=kf(),ua=ic=er=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Hf&&i.locale!=="ko"?null:i.data;default:return null}}var Fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Fv[t.type]:i==="textarea"}function qf(t,i,o,c){ge(c),i=xa(i,"onChange"),0<i.length&&(o=new rc("onChange","change",null,o,c),t.push({event:o,listeners:i}))}var fo=null,ho=null;function Ov(t){dh(t,0)}function pa(t){var i=hs(t);if(Ht(i))return t}function zv(t,i){if(t==="change")return i}var Yf=!1;if(d){var uc;if(d){var dc="oninput"in document;if(!dc){var $f=document.createElement("div");$f.setAttribute("oninput","return;"),dc=typeof $f.oninput=="function"}uc=dc}else uc=!1;Yf=uc&&(!document.documentMode||9<document.documentMode)}function Kf(){fo&&(fo.detachEvent("onpropertychange",Zf),ho=fo=null)}function Zf(t){if(t.propertyName==="value"&&pa(ho)){var i=[];qf(i,ho,t,W(t)),qn(Ov,i)}}function Bv(t,i,o){t==="focusin"?(Kf(),fo=i,ho=o,fo.attachEvent("onpropertychange",Zf)):t==="focusout"&&Kf()}function Hv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pa(ho)}function Vv(t,i){if(t==="click")return pa(i)}function Gv(t,i){if(t==="input"||t==="change")return pa(i)}function jv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var si=typeof Object.is=="function"?Object.is:jv;function po(t,i){if(si(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!p.call(i,f)||!si(t[f],i[f]))return!1}return!0}function Qf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jf(t,i){var o=Qf(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=i&&c>=i)return{node:o,offset:i-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Qf(o)}}function eh(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?eh(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function th(){for(var t=window,i=O();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=O(t.document)}return i}function fc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Wv(t){var i=th(),o=t.focusedElem,c=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&eh(o.ownerDocument.documentElement,o)){if(c!==null&&fc(o)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!t.extend&&g>c&&(f=c,c=g,g=f),f=Jf(o,g);var b=Jf(o,c);f&&b&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==b.node||t.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),g>c?(t.addRange(i),t.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Xv=d&&"documentMode"in document&&11>=document.documentMode,cs=null,hc=null,mo=null,pc=!1;function nh(t,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;pc||cs==null||cs!==O(c)||(c=cs,"selectionStart"in c&&fc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),mo&&po(mo,c)||(mo=c,c=xa(hc,"onSelect"),0<c.length&&(i=new rc("onSelect","select",null,i,o),t.push({event:i,listeners:c}),i.target=cs)))}function ma(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var us={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},mc={},ih={};d&&(ih=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function ga(t){if(mc[t])return mc[t];if(!us[t])return t;var i=us[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in ih)return mc[t]=i[o];return t}var rh=ga("animationend"),sh=ga("animationiteration"),oh=ga("animationstart"),ah=ga("transitionend"),lh=new Map,ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,i){lh.set(t,i),l(i,[t])}for(var gc=0;gc<ch.length;gc++){var vc=ch[gc],qv=vc.toLowerCase(),Yv=vc[0].toUpperCase()+vc.slice(1);tr(qv,"on"+Yv)}tr(rh,"onAnimationEnd"),tr(sh,"onAnimationIteration"),tr(oh,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(ah,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$v=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function uh(t,i,o){var c=t.type||"unknown-event";t.currentTarget=o,ta(c,i,void 0,t),t.currentTarget=null}function dh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],f=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var b=c.length-1;0<=b;b--){var I=c[b],H=I.instance,ne=I.currentTarget;if(I=I.listener,H!==g&&f.isPropagationStopped())break e;uh(f,I,ne),g=H}else for(b=0;b<c.length;b++){if(I=c[b],H=I.instance,ne=I.currentTarget,I=I.listener,H!==g&&f.isPropagationStopped())break e;uh(f,I,ne),g=H}}}if(bi)throw t=rs,bi=!1,rs=null,t}function Gt(t,i){var o=i[bc];o===void 0&&(o=i[bc]=new Set);var c=t+"__bubble";o.has(c)||(fh(i,t,2,!1),o.add(c))}function xc(t,i,o){var c=0;i&&(c|=4),fh(o,t,c,i)}var va="_reactListening"+Math.random().toString(36).slice(2);function vo(t){if(!t[va]){t[va]=!0,r.forEach(function(o){o!=="selectionchange"&&($v.has(o)||xc(o,!1,t),xc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[va]||(i[va]=!0,xc("selectionchange",!1,i))}}function fh(t,i,o,c){switch(Uf(i)){case 1:var f=cv;break;case 4:f=uv;break;default:f=tc}o=f.bind(null,i,o,t),f=void 0,!is||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function _c(t,i,o,c,f){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var I=c.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(b===4)for(b=c.return;b!==null;){var H=b.tag;if((H===3||H===4)&&(H=b.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;b=b.return}for(;I!==null;){if(b=Pr(I),b===null)return;if(H=b.tag,H===5||H===6){c=g=b;continue e}I=I.parentNode}}c=c.return}qn(function(){var ne=g,_e=W(o),Se=[];e:{var ve=lh.get(t);if(ve!==void 0){var Oe=rc,je=t;switch(t){case"keypress":if(da(o)===0)break e;case"keydown":case"keyup":Oe=bv;break;case"focusin":je="focus",Oe=ac;break;case"focusout":je="blur",Oe=ac;break;case"beforeblur":case"afterblur":Oe=ac;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=hv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=Cv;break;case rh:case sh:case oh:Oe=gv;break;case ah:Oe=Pv;break;case"scroll":Oe=dv;break;case"wheel":Oe=Nv;break;case"copy":case"cut":case"paste":Oe=xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=Bf}var $e=(i&4)!==0,Zt=!$e&&t==="scroll",$=$e?ve!==null?ve+"Capture":null:ve;$e=[];for(var X=ne,K;X!==null;){K=X;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,$!==null&&(Te=pn(X,$),Te!=null&&$e.push(xo(X,Te,K)))),Zt)break;X=X.return}0<$e.length&&(ve=new Oe(ve,je,null,o,_e),Se.push({event:ve,listeners:$e}))}}if((i&7)===0){e:{if(ve=t==="mouseover"||t==="pointerover",Oe=t==="mouseout"||t==="pointerout",ve&&o!==mt&&(je=o.relatedTarget||o.fromElement)&&(Pr(je)||je[Ai]))break e;if((Oe||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,Oe?(je=o.relatedTarget||o.toElement,Oe=ne,je=je?Pr(je):null,je!==null&&(Zt=Ti(je),je!==Zt||je.tag!==5&&je.tag!==6)&&(je=null)):(Oe=null,je=ne),Oe!==je)){if($e=Of,Te="onMouseLeave",$="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&($e=Bf,Te="onPointerLeave",$="onPointerEnter",X="pointer"),Zt=Oe==null?ve:hs(Oe),K=je==null?ve:hs(je),ve=new $e(Te,X+"leave",Oe,o,_e),ve.target=Zt,ve.relatedTarget=K,Te=null,Pr(_e)===ne&&($e=new $e($,X+"enter",je,o,_e),$e.target=K,$e.relatedTarget=Zt,Te=$e),Zt=Te,Oe&&je)t:{for($e=Oe,$=je,X=0,K=$e;K;K=ds(K))X++;for(K=0,Te=$;Te;Te=ds(Te))K++;for(;0<X-K;)$e=ds($e),X--;for(;0<K-X;)$=ds($),K--;for(;X--;){if($e===$||$!==null&&$e===$.alternate)break t;$e=ds($e),$=ds($)}$e=null}else $e=null;Oe!==null&&hh(Se,ve,Oe,$e,!1),je!==null&&Zt!==null&&hh(Se,Zt,je,$e,!0)}}e:{if(ve=ne?hs(ne):window,Oe=ve.nodeName&&ve.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ve.type==="file")var Ze=zv;else if(Xf(ve))if(Yf)Ze=Gv;else{Ze=Hv;var it=Bv}else(Oe=ve.nodeName)&&Oe.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ze=Vv);if(Ze&&(Ze=Ze(t,ne))){qf(Se,Ze,o,_e);break e}it&&it(t,ve,ne),t==="focusout"&&(it=ve._wrapperState)&&it.controlled&&ve.type==="number"&&ze(ve,"number",ve.value)}switch(it=ne?hs(ne):window,t){case"focusin":(Xf(it)||it.contentEditable==="true")&&(cs=it,hc=ne,mo=null);break;case"focusout":mo=hc=cs=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,nh(Se,o,_e);break;case"selectionchange":if(Xv)break;case"keydown":case"keyup":nh(Se,o,_e)}var rt;if(cc)e:{switch(t){case"compositionstart":var dt="onCompositionStart";break e;case"compositionend":dt="onCompositionEnd";break e;case"compositionupdate":dt="onCompositionUpdate";break e}dt=void 0}else ls?jf(t,o)&&(dt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(dt="onCompositionStart");dt&&(Hf&&o.locale!=="ko"&&(ls||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&ls&&(rt=kf()):(er=_e,ic="value"in er?er.value:er.textContent,ls=!0)),it=xa(ne,dt),0<it.length&&(dt=new zf(dt,t,null,o,_e),Se.push({event:dt,listeners:it}),rt?dt.data=rt:(rt=Wf(o),rt!==null&&(dt.data=rt)))),(rt=Iv?Uv(t,o):kv(t,o))&&(ne=xa(ne,"onBeforeInput"),0<ne.length&&(_e=new zf("onBeforeInput","beforeinput",null,o,_e),Se.push({event:_e,listeners:ne}),_e.data=rt))}dh(Se,i)})}function xo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function xa(t,i){for(var o=i+"Capture",c=[];t!==null;){var f=t,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=pn(t,o),g!=null&&c.unshift(xo(t,g,f)),g=pn(t,i),g!=null&&c.push(xo(t,g,f))),t=t.return}return c}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hh(t,i,o,c,f){for(var g=i._reactName,b=[];o!==null&&o!==c;){var I=o,H=I.alternate,ne=I.stateNode;if(H!==null&&H===c)break;I.tag===5&&ne!==null&&(I=ne,f?(H=pn(o,g),H!=null&&b.unshift(xo(o,H,I))):f||(H=pn(o,g),H!=null&&b.push(xo(o,H,I)))),o=o.return}b.length!==0&&t.push({event:i,listeners:b})}var Kv=/\r\n?/g,Zv=/\u0000|\uFFFD/g;function ph(t){return(typeof t=="string"?t:""+t).replace(Kv,`
`).replace(Zv,"")}function _a(t,i,o){if(i=ph(i),ph(t)!==i&&o)throw Error(n(425))}function ya(){}var yc=null,Sc=null;function Mc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,Jv=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(t){return mh.resolve(null).then(t).catch(e0)}:Ec;function e0(t){setTimeout(function(){throw t})}function wc(t,i){var o=i,c=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){t.removeChild(f),ao(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);ao(i)}function nr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function gh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),xi="__reactFiber$"+fs,_o="__reactProps$"+fs,Ai="__reactContainer$"+fs,bc="__reactEvents$"+fs,t0="__reactListeners$"+fs,n0="__reactHandles$"+fs;function Pr(t){var i=t[xi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ai]||o[xi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=gh(t);t!==null;){if(o=t[xi])return o;t=gh(t)}return i}t=o,o=t.parentNode}return null}function yo(t){return t=t[xi]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Sa(t){return t[_o]||null}var Tc=[],ps=-1;function ir(t){return{current:t}}function jt(t){0>ps||(t.current=Tc[ps],Tc[ps]=null,ps--)}function Vt(t,i){ps++,Tc[ps]=t.current,t.current=i}var rr={},vn=ir(rr),Rn=ir(!1),Dr=rr;function ms(t,i){var o=t.type.contextTypes;if(!o)return rr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in o)f[g]=i[g];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Pn(t){return t=t.childContextTypes,t!=null}function Ma(){jt(Rn),jt(vn)}function vh(t,i,o){if(vn.current!==rr)throw Error(n(168));Vt(vn,i),Vt(Rn,o)}function xh(t,i,o){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(n(108,re(t)||"Unknown",f));return ue({},o,c)}function Ea(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Dr=vn.current,Vt(vn,t),Vt(Rn,Rn.current),!0}function _h(t,i,o){var c=t.stateNode;if(!c)throw Error(n(169));o?(t=xh(t,i,Dr),c.__reactInternalMemoizedMergedChildContext=t,jt(Rn),jt(vn),Vt(vn,t)):jt(Rn),Vt(Rn,o)}var Ci=null,wa=!1,Ac=!1;function yh(t){Ci===null?Ci=[t]:Ci.push(t)}function i0(t){wa=!0,yh(t)}function sr(){if(!Ac&&Ci!==null){Ac=!0;var t=0,i=Mt;try{var o=Ci;for(Mt=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}Ci=null,wa=!1}catch(f){throw Ci!==null&&(Ci=Ci.slice(t+1)),C(Ne,sr),f}finally{Mt=i,Ac=!1}}return null}var gs=[],vs=0,ba=null,Ta=0,Yn=[],$n=0,Nr=null,Ri=1,Pi="";function Lr(t,i){gs[vs++]=Ta,gs[vs++]=ba,ba=t,Ta=i}function Sh(t,i,o){Yn[$n++]=Ri,Yn[$n++]=Pi,Yn[$n++]=Nr,Nr=t;var c=Ri;t=Pi;var f=32-Tt(c)-1;c&=~(1<<f),o+=1;var g=32-Tt(i)+f;if(30<g){var b=f-f%5;g=(c&(1<<b)-1).toString(32),c>>=b,f-=b,Ri=1<<32-Tt(i)+f|o<<f|c,Pi=g+t}else Ri=1<<g|o<<f|c,Pi=t}function Cc(t){t.return!==null&&(Lr(t,1),Sh(t,1,0))}function Rc(t){for(;t===ba;)ba=gs[--vs],gs[vs]=null,Ta=gs[--vs],gs[vs]=null;for(;t===Nr;)Nr=Yn[--$n],Yn[$n]=null,Pi=Yn[--$n],Yn[$n]=null,Ri=Yn[--$n],Yn[$n]=null}var Hn=null,Vn=null,Wt=!1,oi=null;function Mh(t,i){var o=Jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Eh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Hn=t,Vn=nr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Hn=t,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Nr!==null?{id:Ri,overflow:Pi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Jn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Hn=t,Vn=null,!0):!1;default:return!1}}function Pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dc(t){if(Wt){var i=Vn;if(i){var o=i;if(!Eh(t,i)){if(Pc(t))throw Error(n(418));i=nr(o.nextSibling);var c=Hn;i&&Eh(t,i)?Mh(c,o):(t.flags=t.flags&-4097|2,Wt=!1,Hn=t)}}else{if(Pc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Wt=!1,Hn=t}}}function wh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Hn=t}function Aa(t){if(t!==Hn)return!1;if(!Wt)return wh(t),Wt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Mc(t.type,t.memoizedProps)),i&&(i=Vn)){if(Pc(t))throw bh(),Error(n(418));for(;i;)Mh(t,i),i=nr(i.nextSibling)}if(wh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Vn=nr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Vn=null}}else Vn=Hn?nr(t.stateNode.nextSibling):null;return!0}function bh(){for(var t=Vn;t;)t=nr(t.nextSibling)}function xs(){Vn=Hn=null,Wt=!1}function Nc(t){oi===null?oi=[t]:oi.push(t)}var r0=P.ReactCurrentBatchConfig;function So(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var c=o.stateNode}if(!c)throw Error(n(147,t));var f=c,g=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(b){var I=f.refs;b===null?delete I[g]:I[g]=b},i._stringRef=g,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ca(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Th(t){var i=t._init;return i(t._payload)}function Ah(t){function i($,X){if(t){var K=$.deletions;K===null?($.deletions=[X],$.flags|=16):K.push(X)}}function o($,X){if(!t)return null;for(;X!==null;)i($,X),X=X.sibling;return null}function c($,X){for($=new Map;X!==null;)X.key!==null?$.set(X.key,X):$.set(X.index,X),X=X.sibling;return $}function f($,X){return $=hr($,X),$.index=0,$.sibling=null,$}function g($,X,K){return $.index=K,t?(K=$.alternate,K!==null?(K=K.index,K<X?($.flags|=2,X):K):($.flags|=2,X)):($.flags|=1048576,X)}function b($){return t&&$.alternate===null&&($.flags|=2),$}function I($,X,K,Te){return X===null||X.tag!==6?(X=Eu(K,$.mode,Te),X.return=$,X):(X=f(X,K),X.return=$,X)}function H($,X,K,Te){var Ze=K.type;return Ze===V?_e($,X,K.props.children,Te,K.key):X!==null&&(X.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Q&&Th(Ze)===X.type)?(Te=f(X,K.props),Te.ref=So($,X,K),Te.return=$,Te):(Te=Qa(K.type,K.key,K.props,null,$.mode,Te),Te.ref=So($,X,K),Te.return=$,Te)}function ne($,X,K,Te){return X===null||X.tag!==4||X.stateNode.containerInfo!==K.containerInfo||X.stateNode.implementation!==K.implementation?(X=wu(K,$.mode,Te),X.return=$,X):(X=f(X,K.children||[]),X.return=$,X)}function _e($,X,K,Te,Ze){return X===null||X.tag!==7?(X=Hr(K,$.mode,Te,Ze),X.return=$,X):(X=f(X,K),X.return=$,X)}function Se($,X,K){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Eu(""+X,$.mode,K),X.return=$,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case z:return K=Qa(X.type,X.key,X.props,null,$.mode,K),K.ref=So($,null,X),K.return=$,K;case F:return X=wu(X,$.mode,K),X.return=$,X;case Q:var Te=X._init;return Se($,Te(X._payload),K)}if(ct(X)||de(X))return X=Hr(X,$.mode,K,null),X.return=$,X;Ca($,X)}return null}function ve($,X,K,Te){var Ze=X!==null?X.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ze!==null?null:I($,X,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case z:return K.key===Ze?H($,X,K,Te):null;case F:return K.key===Ze?ne($,X,K,Te):null;case Q:return Ze=K._init,ve($,X,Ze(K._payload),Te)}if(ct(K)||de(K))return Ze!==null?null:_e($,X,K,Te,null);Ca($,K)}return null}function Oe($,X,K,Te,Ze){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return $=$.get(K)||null,I(X,$,""+Te,Ze);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case z:return $=$.get(Te.key===null?K:Te.key)||null,H(X,$,Te,Ze);case F:return $=$.get(Te.key===null?K:Te.key)||null,ne(X,$,Te,Ze);case Q:var it=Te._init;return Oe($,X,K,it(Te._payload),Ze)}if(ct(Te)||de(Te))return $=$.get(K)||null,_e(X,$,Te,Ze,null);Ca(X,Te)}return null}function je($,X,K,Te){for(var Ze=null,it=null,rt=X,dt=X=0,un=null;rt!==null&&dt<K.length;dt++){rt.index>dt?(un=rt,rt=null):un=rt.sibling;var Ct=ve($,rt,K[dt],Te);if(Ct===null){rt===null&&(rt=un);break}t&&rt&&Ct.alternate===null&&i($,rt),X=g(Ct,X,dt),it===null?Ze=Ct:it.sibling=Ct,it=Ct,rt=un}if(dt===K.length)return o($,rt),Wt&&Lr($,dt),Ze;if(rt===null){for(;dt<K.length;dt++)rt=Se($,K[dt],Te),rt!==null&&(X=g(rt,X,dt),it===null?Ze=rt:it.sibling=rt,it=rt);return Wt&&Lr($,dt),Ze}for(rt=c($,rt);dt<K.length;dt++)un=Oe(rt,$,dt,K[dt],Te),un!==null&&(t&&un.alternate!==null&&rt.delete(un.key===null?dt:un.key),X=g(un,X,dt),it===null?Ze=un:it.sibling=un,it=un);return t&&rt.forEach(function(pr){return i($,pr)}),Wt&&Lr($,dt),Ze}function $e($,X,K,Te){var Ze=de(K);if(typeof Ze!="function")throw Error(n(150));if(K=Ze.call(K),K==null)throw Error(n(151));for(var it=Ze=null,rt=X,dt=X=0,un=null,Ct=K.next();rt!==null&&!Ct.done;dt++,Ct=K.next()){rt.index>dt?(un=rt,rt=null):un=rt.sibling;var pr=ve($,rt,Ct.value,Te);if(pr===null){rt===null&&(rt=un);break}t&&rt&&pr.alternate===null&&i($,rt),X=g(pr,X,dt),it===null?Ze=pr:it.sibling=pr,it=pr,rt=un}if(Ct.done)return o($,rt),Wt&&Lr($,dt),Ze;if(rt===null){for(;!Ct.done;dt++,Ct=K.next())Ct=Se($,Ct.value,Te),Ct!==null&&(X=g(Ct,X,dt),it===null?Ze=Ct:it.sibling=Ct,it=Ct);return Wt&&Lr($,dt),Ze}for(rt=c($,rt);!Ct.done;dt++,Ct=K.next())Ct=Oe(rt,$,dt,Ct.value,Te),Ct!==null&&(t&&Ct.alternate!==null&&rt.delete(Ct.key===null?dt:Ct.key),X=g(Ct,X,dt),it===null?Ze=Ct:it.sibling=Ct,it=Ct);return t&&rt.forEach(function(F0){return i($,F0)}),Wt&&Lr($,dt),Ze}function Zt($,X,K,Te){if(typeof K=="object"&&K!==null&&K.type===V&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case z:e:{for(var Ze=K.key,it=X;it!==null;){if(it.key===Ze){if(Ze=K.type,Ze===V){if(it.tag===7){o($,it.sibling),X=f(it,K.props.children),X.return=$,$=X;break e}}else if(it.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Q&&Th(Ze)===it.type){o($,it.sibling),X=f(it,K.props),X.ref=So($,it,K),X.return=$,$=X;break e}o($,it);break}else i($,it);it=it.sibling}K.type===V?(X=Hr(K.props.children,$.mode,Te,K.key),X.return=$,$=X):(Te=Qa(K.type,K.key,K.props,null,$.mode,Te),Te.ref=So($,X,K),Te.return=$,$=Te)}return b($);case F:e:{for(it=K.key;X!==null;){if(X.key===it)if(X.tag===4&&X.stateNode.containerInfo===K.containerInfo&&X.stateNode.implementation===K.implementation){o($,X.sibling),X=f(X,K.children||[]),X.return=$,$=X;break e}else{o($,X);break}else i($,X);X=X.sibling}X=wu(K,$.mode,Te),X.return=$,$=X}return b($);case Q:return it=K._init,Zt($,X,it(K._payload),Te)}if(ct(K))return je($,X,K,Te);if(de(K))return $e($,X,K,Te);Ca($,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,X!==null&&X.tag===6?(o($,X.sibling),X=f(X,K),X.return=$,$=X):(o($,X),X=Eu(K,$.mode,Te),X.return=$,$=X),b($)):o($,X)}return Zt}var _s=Ah(!0),Ch=Ah(!1),Ra=ir(null),Pa=null,ys=null,Lc=null;function Ic(){Lc=ys=Pa=null}function Uc(t){var i=Ra.current;jt(Ra),t._currentValue=i}function kc(t,i,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===o)break;t=t.return}}function Ss(t,i){Pa=t,Lc=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Dn=!0),t.firstContext=null)}function Kn(t){var i=t._currentValue;if(Lc!==t)if(t={context:t,memoizedValue:i,next:null},ys===null){if(Pa===null)throw Error(n(308));ys=t,Pa.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return i}var Ir=null;function Fc(t){Ir===null?Ir=[t]:Ir.push(t)}function Rh(t,i,o,c){var f=i.interleaved;return f===null?(o.next=o,Fc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Di(t,c)}function Di(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var or=!1;function Oc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ar(t,i,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(At&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Di(t,o)}return f=c.interleaved,f===null?(i.next=i,Fc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Di(t,o)}function Da(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Rr(t,o)}}function Dh(t,i){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var b={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?f=g=b:g=g.next=b,o=o.next}while(o!==null);g===null?f=g=i:g=g.next=i}else f=g=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Na(t,i,o,c){var f=t.updateQueue;or=!1;var g=f.firstBaseUpdate,b=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var H=I,ne=H.next;H.next=null,b===null?g=ne:b.next=ne,b=H;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==b&&(I===null?_e.firstBaseUpdate=ne:I.next=ne,_e.lastBaseUpdate=H))}if(g!==null){var Se=f.baseState;b=0,_e=ne=H=null,I=g;do{var ve=I.lane,Oe=I.eventTime;if((c&ve)===ve){_e!==null&&(_e=_e.next={eventTime:Oe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var je=t,$e=I;switch(ve=i,Oe=o,$e.tag){case 1:if(je=$e.payload,typeof je=="function"){Se=je.call(Oe,Se,ve);break e}Se=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=$e.payload,ve=typeof je=="function"?je.call(Oe,Se,ve):je,ve==null)break e;Se=ue({},Se,ve);break e;case 2:or=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ve=f.effects,ve===null?f.effects=[I]:ve.push(I))}else Oe={eventTime:Oe,lane:ve,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(ne=_e=Oe,H=Se):_e=_e.next=Oe,b|=ve;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;ve=I,I=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);if(_e===null&&(H=Se),f.baseState=H,f.firstBaseUpdate=ne,f.lastBaseUpdate=_e,i=f.shared.interleaved,i!==null){f=i;do b|=f.lane,f=f.next;while(f!==i)}else g===null&&(f.shared.lanes=0);Fr|=b,t.lanes=b,t.memoizedState=Se}}function Nh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(n(191,f));f.call(c)}}}var Mo={},_i=ir(Mo),Eo=ir(Mo),wo=ir(Mo);function Ur(t){if(t===Mo)throw Error(n(174));return t}function zc(t,i){switch(Vt(wo,i),Vt(Eo,t),Vt(_i,Mo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:he(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=he(i,t)}jt(_i),Vt(_i,i)}function Ms(){jt(_i),jt(Eo),jt(wo)}function Lh(t){Ur(wo.current);var i=Ur(_i.current),o=he(i,t.type);i!==o&&(Vt(Eo,t),Vt(_i,o))}function Bc(t){Eo.current===t&&(jt(_i),jt(Eo))}var Xt=ir(0);function La(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hc=[];function Vc(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var Ia=P.ReactCurrentDispatcher,Gc=P.ReactCurrentBatchConfig,kr=0,qt=null,nn=null,ln=null,Ua=!1,bo=!1,To=0,s0=0;function xn(){throw Error(n(321))}function jc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!si(t[o],i[o]))return!1;return!0}function Wc(t,i,o,c,f,g){if(kr=g,qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ia.current=t===null||t.memoizedState===null?c0:u0,t=o(c,f),bo){g=0;do{if(bo=!1,To=0,25<=g)throw Error(n(301));g+=1,ln=nn=null,i.updateQueue=null,Ia.current=d0,t=o(c,f)}while(bo)}if(Ia.current=Oa,i=nn!==null&&nn.next!==null,kr=0,ln=nn=qt=null,Ua=!1,i)throw Error(n(300));return t}function Xc(){var t=To!==0;return To=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?qt.memoizedState=ln=t:ln=ln.next=t,ln}function Zn(){if(nn===null){var t=qt.alternate;t=t!==null?t.memoizedState:null}else t=nn.next;var i=ln===null?qt.memoizedState:ln.next;if(i!==null)ln=i,nn=t;else{if(t===null)throw Error(n(310));nn=t,t={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},ln===null?qt.memoizedState=ln=t:ln=ln.next=t}return ln}function Ao(t,i){return typeof i=="function"?i(t):i}function qc(t){var i=Zn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=nn,f=c.baseQueue,g=o.pending;if(g!==null){if(f!==null){var b=f.next;f.next=g.next,g.next=b}c.baseQueue=f=g,o.pending=null}if(f!==null){g=f.next,c=c.baseState;var I=b=null,H=null,ne=g;do{var _e=ne.lane;if((kr&_e)===_e)H!==null&&(H=H.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),c=ne.hasEagerState?ne.eagerState:t(c,ne.action);else{var Se={lane:_e,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};H===null?(I=H=Se,b=c):H=H.next=Se,qt.lanes|=_e,Fr|=_e}ne=ne.next}while(ne!==null&&ne!==g);H===null?b=c:H.next=I,si(c,i.memoizedState)||(Dn=!0),i.memoizedState=c,i.baseState=b,i.baseQueue=H,o.lastRenderedState=c}if(t=o.interleaved,t!==null){f=t;do g=f.lane,qt.lanes|=g,Fr|=g,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Yc(t){var i=Zn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=o.dispatch,f=o.pending,g=i.memoizedState;if(f!==null){o.pending=null;var b=f=f.next;do g=t(g,b.action),b=b.next;while(b!==f);si(g,i.memoizedState)||(Dn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,c]}function Ih(){}function Uh(t,i){var o=qt,c=Zn(),f=i(),g=!si(c.memoizedState,f);if(g&&(c.memoizedState=f,Dn=!0),c=c.queue,$c(Oh.bind(null,o,c,t),[t]),c.getSnapshot!==i||g||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,Co(9,Fh.bind(null,o,c,f,i),void 0,null),cn===null)throw Error(n(349));(kr&30)!==0||kh(o,i,f)}return f}function kh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Fh(t,i,o,c){i.value=o,i.getSnapshot=c,zh(i)&&Bh(t)}function Oh(t,i,o){return o(function(){zh(i)&&Bh(t)})}function zh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!si(t,o)}catch{return!0}}function Bh(t){var i=Di(t,1);i!==null&&ui(i,t,1,-1)}function Hh(t){var i=yi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:t},i.queue=t,t=t.dispatch=l0.bind(null,qt,t),[i.memoizedState,t]}function Co(t,i,o,c){return t={tag:t,create:i,destroy:o,deps:c,next:null},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,i.lastEffect=t)),t}function Vh(){return Zn().memoizedState}function ka(t,i,o,c){var f=yi();qt.flags|=t,f.memoizedState=Co(1|i,o,void 0,c===void 0?null:c)}function Fa(t,i,o,c){var f=Zn();c=c===void 0?null:c;var g=void 0;if(nn!==null){var b=nn.memoizedState;if(g=b.destroy,c!==null&&jc(c,b.deps)){f.memoizedState=Co(i,o,g,c);return}}qt.flags|=t,f.memoizedState=Co(1|i,o,g,c)}function Gh(t,i){return ka(8390656,8,t,i)}function $c(t,i){return Fa(2048,8,t,i)}function jh(t,i){return Fa(4,2,t,i)}function Wh(t,i){return Fa(4,4,t,i)}function Xh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function qh(t,i,o){return o=o!=null?o.concat([t]):null,Fa(4,4,Xh.bind(null,i,t),o)}function Kc(){}function Yh(t,i){var o=Zn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&jc(i,c[1])?c[0]:(o.memoizedState=[t,i],t)}function $h(t,i){var o=Zn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&jc(i,c[1])?c[0]:(t=t(),o.memoizedState=[t,i],t)}function Kh(t,i,o){return(kr&21)===0?(t.baseState&&(t.baseState=!1,Dn=!0),t.memoizedState=o):(si(o,i)||(o=wn(),qt.lanes|=o,Fr|=o,t.baseState=!0),i)}function o0(t,i){var o=Mt;Mt=o!==0&&4>o?o:4,t(!0);var c=Gc.transition;Gc.transition={};try{t(!1),i()}finally{Mt=o,Gc.transition=c}}function Zh(){return Zn().memoizedState}function a0(t,i,o){var c=dr(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Qh(t))Jh(i,o);else if(o=Rh(t,i,o,c),o!==null){var f=Tn();ui(o,t,c,f),ep(o,i,c)}}function l0(t,i,o){var c=dr(t),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Qh(t))Jh(i,f);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var b=i.lastRenderedState,I=g(b,o);if(f.hasEagerState=!0,f.eagerState=I,si(I,b)){var H=i.interleaved;H===null?(f.next=f,Fc(i)):(f.next=H.next,H.next=f),i.interleaved=f;return}}catch{}finally{}o=Rh(t,i,f,c),o!==null&&(f=Tn(),ui(o,t,c,f),ep(o,i,c))}}function Qh(t){var i=t.alternate;return t===qt||i!==null&&i===qt}function Jh(t,i){bo=Ua=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function ep(t,i,o){if((o&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Rr(t,o)}}var Oa={readContext:Kn,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},c0={readContext:Kn,useCallback:function(t,i){return yi().memoizedState=[t,i===void 0?null:i],t},useContext:Kn,useEffect:Gh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,ka(4194308,4,Xh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return ka(4194308,4,t,i)},useInsertionEffect:function(t,i){return ka(4,2,t,i)},useMemo:function(t,i){var o=yi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var c=yi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=a0.bind(null,qt,t),[c.memoizedState,t]},useRef:function(t){var i=yi();return t={current:t},i.memoizedState=t},useState:Hh,useDebugValue:Kc,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=Hh(!1),i=t[0];return t=o0.bind(null,t[1]),yi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var c=qt,f=yi();if(Wt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),cn===null)throw Error(n(349));(kr&30)!==0||kh(c,i,o)}f.memoizedState=o;var g={value:o,getSnapshot:i};return f.queue=g,Gh(Oh.bind(null,c,g,t),[t]),c.flags|=2048,Co(9,Fh.bind(null,c,g,o,i),void 0,null),o},useId:function(){var t=yi(),i=cn.identifierPrefix;if(Wt){var o=Pi,c=Ri;o=(c&~(1<<32-Tt(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=To++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=s0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},u0={readContext:Kn,useCallback:Yh,useContext:Kn,useEffect:$c,useImperativeHandle:qh,useInsertionEffect:jh,useLayoutEffect:Wh,useMemo:$h,useReducer:qc,useRef:Vh,useState:function(){return qc(Ao)},useDebugValue:Kc,useDeferredValue:function(t){var i=Zn();return Kh(i,nn.memoizedState,t)},useTransition:function(){var t=qc(Ao)[0],i=Zn().memoizedState;return[t,i]},useMutableSource:Ih,useSyncExternalStore:Uh,useId:Zh,unstable_isNewReconciler:!1},d0={readContext:Kn,useCallback:Yh,useContext:Kn,useEffect:$c,useImperativeHandle:qh,useInsertionEffect:jh,useLayoutEffect:Wh,useMemo:$h,useReducer:Yc,useRef:Vh,useState:function(){return Yc(Ao)},useDebugValue:Kc,useDeferredValue:function(t){var i=Zn();return nn===null?i.memoizedState=t:Kh(i,nn.memoizedState,t)},useTransition:function(){var t=Yc(Ao)[0],i=Zn().memoizedState;return[t,i]},useMutableSource:Ih,useSyncExternalStore:Uh,useId:Zh,unstable_isNewReconciler:!1};function ai(t,i){if(t&&t.defaultProps){i=ue({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Zc(t,i,o,c){i=t.memoizedState,o=o(c,i),o=o==null?i:ue({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var za={isMounted:function(t){return(t=t._reactInternals)?Ti(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var c=Tn(),f=dr(t),g=Ni(c,f);g.payload=i,o!=null&&(g.callback=o),i=ar(t,g,f),i!==null&&(ui(i,t,f,c),Da(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var c=Tn(),f=dr(t),g=Ni(c,f);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=ar(t,g,f),i!==null&&(ui(i,t,f,c),Da(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Tn(),c=dr(t),f=Ni(o,c);f.tag=2,i!=null&&(f.callback=i),i=ar(t,f,c),i!==null&&(ui(i,t,c,o),Da(i,t,c))}};function tp(t,i,o,c,f,g,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,g,b):i.prototype&&i.prototype.isPureReactComponent?!po(o,c)||!po(f,g):!0}function np(t,i,o){var c=!1,f=rr,g=i.contextType;return typeof g=="object"&&g!==null?g=Kn(g):(f=Pn(i)?Dr:vn.current,c=i.contextTypes,g=(c=c!=null)?ms(t,f):rr),i=new i(o,g),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=za,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=g),i}function ip(t,i,o,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==t&&za.enqueueReplaceState(i,i.state,null)}function Qc(t,i,o,c){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},Oc(t);var g=i.contextType;typeof g=="object"&&g!==null?f.context=Kn(g):(g=Pn(i)?Dr:vn.current,f.context=ms(t,g)),f.state=t.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Zc(t,i,g,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&za.enqueueReplaceState(f,f.state,null),Na(t,o,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Es(t,i){try{var o="",c=i;do o+=Ue(c),c=c.return;while(c);var f=o}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:t,source:i,stack:f,digest:null}}function Jc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function eu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var f0=typeof WeakMap=="function"?WeakMap:Map;function rp(t,i,o){o=Ni(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Xa||(Xa=!0,mu=c),eu(t,i)},o}function sp(t,i,o){o=Ni(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){eu(t,i)}}var g=t.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){eu(t,i),typeof c!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),o}function op(t,i,o){var c=t.pingCache;if(c===null){c=t.pingCache=new f0;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),t=T0.bind(null,t,i,o),i.then(t,t))}function ap(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function lp(t,i,o,c,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ni(-1,1),i.tag=2,ar(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var h0=P.ReactCurrentOwner,Dn=!1;function bn(t,i,o,c){i.child=t===null?Ch(i,null,o,c):_s(i,t.child,o,c)}function cp(t,i,o,c,f){o=o.render;var g=i.ref;return Ss(i,f),c=Wc(t,i,o,c,g,f),o=Xc(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Li(t,i,f)):(Wt&&o&&Cc(i),i.flags|=1,bn(t,i,c,f),i.child)}function up(t,i,o,c,f){if(t===null){var g=o.type;return typeof g=="function"&&!Mu(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,dp(t,i,g,c,f)):(t=Qa(o.type,null,c,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(g=t.child,(t.lanes&f)===0){var b=g.memoizedProps;if(o=o.compare,o=o!==null?o:po,o(b,c)&&t.ref===i.ref)return Li(t,i,f)}return i.flags|=1,t=hr(g,c),t.ref=i.ref,t.return=i,i.child=t}function dp(t,i,o,c,f){if(t!==null){var g=t.memoizedProps;if(po(g,c)&&t.ref===i.ref)if(Dn=!1,i.pendingProps=c=g,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Dn=!0);else return i.lanes=t.lanes,Li(t,i,f)}return tu(t,i,o,c,f)}function fp(t,i,o){var c=i.pendingProps,f=c.children,g=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(bs,Gn),Gn|=o;else{if((o&1073741824)===0)return t=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Vt(bs,Gn),Gn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:o,Vt(bs,Gn),Gn|=c}else g!==null?(c=g.baseLanes|o,i.memoizedState=null):c=o,Vt(bs,Gn),Gn|=c;return bn(t,i,f,o),i.child}function hp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function tu(t,i,o,c,f){var g=Pn(o)?Dr:vn.current;return g=ms(i,g),Ss(i,f),o=Wc(t,i,o,c,g,f),c=Xc(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Li(t,i,f)):(Wt&&c&&Cc(i),i.flags|=1,bn(t,i,o,f),i.child)}function pp(t,i,o,c,f){if(Pn(o)){var g=!0;Ea(i)}else g=!1;if(Ss(i,f),i.stateNode===null)Ha(t,i),np(i,o,c),Qc(i,o,c,f),c=!0;else if(t===null){var b=i.stateNode,I=i.memoizedProps;b.props=I;var H=b.context,ne=o.contextType;typeof ne=="object"&&ne!==null?ne=Kn(ne):(ne=Pn(o)?Dr:vn.current,ne=ms(i,ne));var _e=o.getDerivedStateFromProps,Se=typeof _e=="function"||typeof b.getSnapshotBeforeUpdate=="function";Se||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==c||H!==ne)&&ip(i,b,c,ne),or=!1;var ve=i.memoizedState;b.state=ve,Na(i,c,b,f),H=i.memoizedState,I!==c||ve!==H||Rn.current||or?(typeof _e=="function"&&(Zc(i,o,_e,c),H=i.memoizedState),(I=or||tp(i,o,I,c,ve,H,ne))?(Se||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),b.props=c,b.state=H,b.context=ne,c=I):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{b=i.stateNode,Ph(t,i),I=i.memoizedProps,ne=i.type===i.elementType?I:ai(i.type,I),b.props=ne,Se=i.pendingProps,ve=b.context,H=o.contextType,typeof H=="object"&&H!==null?H=Kn(H):(H=Pn(o)?Dr:vn.current,H=ms(i,H));var Oe=o.getDerivedStateFromProps;(_e=typeof Oe=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==Se||ve!==H)&&ip(i,b,c,H),or=!1,ve=i.memoizedState,b.state=ve,Na(i,c,b,f);var je=i.memoizedState;I!==Se||ve!==je||Rn.current||or?(typeof Oe=="function"&&(Zc(i,o,Oe,c),je=i.memoizedState),(ne=or||tp(i,o,ne,c,ve,je,H)||!1)?(_e||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,je,H),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,je,H)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=je),b.props=c,b.state=je,b.context=H,c=ne):(typeof b.componentDidUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ve===t.memoizedState||(i.flags|=1024),c=!1)}return nu(t,i,o,c,g,f)}function nu(t,i,o,c,f,g){hp(t,i);var b=(i.flags&128)!==0;if(!c&&!b)return f&&_h(i,o,!1),Li(t,i,g);c=i.stateNode,h0.current=i;var I=b&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&b?(i.child=_s(i,t.child,null,g),i.child=_s(i,null,I,g)):bn(t,i,I,g),i.memoizedState=c.state,f&&_h(i,o,!0),i.child}function mp(t){var i=t.stateNode;i.pendingContext?vh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&vh(t,i.context,!1),zc(t,i.containerInfo)}function gp(t,i,o,c,f){return xs(),Nc(f),i.flags|=256,bn(t,i,o,c),i.child}var iu={dehydrated:null,treeContext:null,retryLane:0};function ru(t){return{baseLanes:t,cachePool:null,transitions:null}}function vp(t,i,o){var c=i.pendingProps,f=Xt.current,g=!1,b=(i.flags&128)!==0,I;if((I=b)||(I=t!==null&&t.memoizedState===null?!1:(f&2)!==0),I?(g=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Vt(Xt,f&1),t===null)return Dc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=c.children,t=c.fallback,g?(c=i.mode,g=i.child,b={mode:"hidden",children:b},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=b):g=Ja(b,c,0,null),t=Hr(t,c,o,null),g.return=i,t.return=i,g.sibling=t,i.child=g,i.child.memoizedState=ru(o),i.memoizedState=iu,t):su(i,b));if(f=t.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return p0(t,i,b,c,I,f,o);if(g){g=c.fallback,b=i.mode,f=t.child,I=f.sibling;var H={mode:"hidden",children:c.children};return(b&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=hr(f,H),c.subtreeFlags=f.subtreeFlags&14680064),I!==null?g=hr(I,g):(g=Hr(g,b,o,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,b=t.child.memoizedState,b=b===null?ru(o):{baseLanes:b.baseLanes|o,cachePool:null,transitions:b.transitions},g.memoizedState=b,g.childLanes=t.childLanes&~o,i.memoizedState=iu,c}return g=t.child,t=g.sibling,c=hr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=c,i.memoizedState=null,c}function su(t,i){return i=Ja({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ba(t,i,o,c){return c!==null&&Nc(c),_s(i,t.child,null,o),t=su(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function p0(t,i,o,c,f,g,b){if(o)return i.flags&256?(i.flags&=-257,c=Jc(Error(n(422))),Ba(t,i,b,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(g=c.fallback,f=i.mode,c=Ja({mode:"visible",children:c.children},f,0,null),g=Hr(g,f,b,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&_s(i,t.child,null,b),i.child.memoizedState=ru(b),i.memoizedState=iu,g);if((i.mode&1)===0)return Ba(t,i,b,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var I=c.dgst;return c=I,g=Error(n(419)),c=Jc(g,c,void 0),Ba(t,i,b,c)}if(I=(b&t.childLanes)!==0,Dn||I){if(c=cn,c!==null){switch(b&-b){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|b))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Di(t,f),ui(c,t,f,-1))}return Su(),c=Jc(Error(n(421))),Ba(t,i,b,c)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=A0.bind(null,t),f._reactRetry=i,null):(t=g.treeContext,Vn=nr(f.nextSibling),Hn=i,Wt=!0,oi=null,t!==null&&(Yn[$n++]=Ri,Yn[$n++]=Pi,Yn[$n++]=Nr,Ri=t.id,Pi=t.overflow,Nr=i),i=su(i,c.children),i.flags|=4096,i)}function xp(t,i,o){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),kc(t.return,i,o)}function ou(t,i,o,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=f)}function _p(t,i,o){var c=i.pendingProps,f=c.revealOrder,g=c.tail;if(bn(t,i,c.children,o),c=Xt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xp(t,o,i);else if(t.tag===19)xp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Vt(Xt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&La(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),ou(i,!1,f,o,g);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&La(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}ou(i,!0,o,null,g);break;case"together":ou(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ha(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Li(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Fr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=hr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=hr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function m0(t,i,o){switch(i.tag){case 3:mp(i),xs();break;case 5:Lh(i);break;case 1:Pn(i.type)&&Ea(i);break;case 4:zc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Vt(Ra,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Vt(Xt,Xt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?vp(t,i,o):(Vt(Xt,Xt.current&1),t=Li(t,i,o),t!==null?t.sibling:null);Vt(Xt,Xt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(t.flags&128)!==0){if(c)return _p(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Vt(Xt,Xt.current),c)break;return null;case 22:case 23:return i.lanes=0,fp(t,i,o)}return Li(t,i,o)}var yp,au,Sp,Mp;yp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},au=function(){},Sp=function(t,i,o,c){var f=t.memoizedProps;if(f!==c){t=i.stateNode,Ur(_i.current);var g=null;switch(o){case"input":f=Nt(t,f),c=Nt(t,c),g=[];break;case"select":f=ue({},f,{value:void 0}),c=ue({},c,{value:void 0}),g=[];break;case"textarea":f=nt(t,f),c=nt(t,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=ya)}Ke(o,c);var b;o=null;for(ne in f)if(!c.hasOwnProperty(ne)&&f.hasOwnProperty(ne)&&f[ne]!=null)if(ne==="style"){var I=f[ne];for(b in I)I.hasOwnProperty(b)&&(o||(o={}),o[b]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?g||(g=[]):(g=g||[]).push(ne,null));for(ne in c){var H=c[ne];if(I=f?.[ne],c.hasOwnProperty(ne)&&H!==I&&(H!=null||I!=null))if(ne==="style")if(I){for(b in I)!I.hasOwnProperty(b)||H&&H.hasOwnProperty(b)||(o||(o={}),o[b]="");for(b in H)H.hasOwnProperty(b)&&I[b]!==H[b]&&(o||(o={}),o[b]=H[b])}else o||(g||(g=[]),g.push(ne,o)),o=H;else ne==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(g=g||[]).push(ne,H)):ne==="children"?typeof H!="string"&&typeof H!="number"||(g=g||[]).push(ne,""+H):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(H!=null&&ne==="onScroll"&&Gt("scroll",t),g||I===H||(g=[])):(g=g||[]).push(ne,H))}o&&(g=g||[]).push("style",o);var ne=g;(i.updateQueue=ne)&&(i.flags|=4)}},Mp=function(t,i,o,c){o!==c&&(i.flags|=4)};function Ro(t,i){if(!Wt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function _n(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=o,i}function g0(t,i,o){var c=i.pendingProps;switch(Rc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(i),null;case 1:return Pn(i.type)&&Ma(),_n(i),null;case 3:return c=i.stateNode,Ms(),jt(Rn),jt(vn),Vc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Aa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,oi!==null&&(xu(oi),oi=null))),au(t,i),_n(i),null;case 5:Bc(i);var f=Ur(wo.current);if(o=i.type,t!==null&&i.stateNode!=null)Sp(t,i,o,c,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return _n(i),null}if(t=Ur(_i.current),Aa(i)){c=i.stateNode,o=i.type;var g=i.memoizedProps;switch(c[xi]=i,c[_o]=g,t=(i.mode&1)!==0,o){case"dialog":Gt("cancel",c),Gt("close",c);break;case"iframe":case"object":case"embed":Gt("load",c);break;case"video":case"audio":for(f=0;f<go.length;f++)Gt(go[f],c);break;case"source":Gt("error",c);break;case"img":case"image":case"link":Gt("error",c),Gt("load",c);break;case"details":Gt("toggle",c);break;case"input":lt(c,g),Gt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Gt("invalid",c);break;case"textarea":E(c,g),Gt("invalid",c)}Ke(o,g),f=null;for(var b in g)if(g.hasOwnProperty(b)){var I=g[b];b==="children"?typeof I=="string"?c.textContent!==I&&(g.suppressHydrationWarning!==!0&&_a(c.textContent,I,t),f=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&_a(c.textContent,I,t),f=["children",""+I]):a.hasOwnProperty(b)&&I!=null&&b==="onScroll"&&Gt("scroll",c)}switch(o){case"input":pt(c),wt(c,g,!0);break;case"textarea":pt(c),j(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=ya)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{b=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ee(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=b.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=b.createElement(o,{is:c.is}):(t=b.createElement(o),o==="select"&&(b=t,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):t=b.createElementNS(t,o),t[xi]=i,t[_o]=c,yp(t,i,!1,!1),i.stateNode=t;e:{switch(b=Pe(o,c),o){case"dialog":Gt("cancel",t),Gt("close",t),f=c;break;case"iframe":case"object":case"embed":Gt("load",t),f=c;break;case"video":case"audio":for(f=0;f<go.length;f++)Gt(go[f],t);f=c;break;case"source":Gt("error",t),f=c;break;case"img":case"image":case"link":Gt("error",t),Gt("load",t),f=c;break;case"details":Gt("toggle",t),f=c;break;case"input":lt(t,c),f=Nt(t,c),Gt("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=ue({},c,{value:void 0}),Gt("invalid",t);break;case"textarea":E(t,c),f=nt(t,c),Gt("invalid",t);break;default:f=c}Ke(o,f),I=f;for(g in I)if(I.hasOwnProperty(g)){var H=I[g];g==="style"?Ie(t,H):g==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&qe(t,H)):g==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&ye(t,H):typeof H=="number"&&ye(t,""+H):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?H!=null&&g==="onScroll"&&Gt("scroll",t):H!=null&&L(t,g,H,b))}switch(o){case"input":pt(t),wt(t,c,!1);break;case"textarea":pt(t),j(t);break;case"option":c.value!=null&&t.setAttribute("value",""+xe(c.value));break;case"select":t.multiple=!!c.multiple,g=c.value,g!=null?kt(t,!!c.multiple,g,!1):c.defaultValue!=null&&kt(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=ya)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return _n(i),null;case 6:if(t&&i.stateNode!=null)Mp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(o=Ur(wo.current),Ur(_i.current),Aa(i)){if(c=i.stateNode,o=i.memoizedProps,c[xi]=i,(g=c.nodeValue!==o)&&(t=Hn,t!==null))switch(t.tag){case 3:_a(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_a(c.nodeValue,o,(t.mode&1)!==0)}g&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[xi]=i,i.stateNode=c}return _n(i),null;case 13:if(jt(Xt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Wt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bh(),xs(),i.flags|=98560,g=!1;else if(g=Aa(i),c!==null&&c.dehydrated!==null){if(t===null){if(!g)throw Error(n(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(n(317));g[xi]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;_n(i),g=!1}else oi!==null&&(xu(oi),oi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Xt.current&1)!==0?rn===0&&(rn=3):Su())),i.updateQueue!==null&&(i.flags|=4),_n(i),null);case 4:return Ms(),au(t,i),t===null&&vo(i.stateNode.containerInfo),_n(i),null;case 10:return Uc(i.type._context),_n(i),null;case 17:return Pn(i.type)&&Ma(),_n(i),null;case 19:if(jt(Xt),g=i.memoizedState,g===null)return _n(i),null;if(c=(i.flags&128)!==0,b=g.rendering,b===null)if(c)Ro(g,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(b=La(t),b!==null){for(i.flags|=128,Ro(g,!1),c=b.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)g=o,t=c,g.flags&=14680066,b=g.alternate,b===null?(g.childLanes=0,g.lanes=t,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=b.childLanes,g.lanes=b.lanes,g.child=b.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=b.memoizedProps,g.memoizedState=b.memoizedState,g.updateQueue=b.updateQueue,g.type=b.type,t=b.dependencies,g.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Vt(Xt,Xt.current&1|2),i.child}t=t.sibling}g.tail!==null&&q()>Ts&&(i.flags|=128,c=!0,Ro(g,!1),i.lanes=4194304)}else{if(!c)if(t=La(b),t!==null){if(i.flags|=128,c=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ro(g,!0),g.tail===null&&g.tailMode==="hidden"&&!b.alternate&&!Wt)return _n(i),null}else 2*q()-g.renderingStartTime>Ts&&o!==1073741824&&(i.flags|=128,c=!0,Ro(g,!1),i.lanes=4194304);g.isBackwards?(b.sibling=i.child,i.child=b):(o=g.last,o!==null?o.sibling=b:i.child=b,g.last=b)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=q(),i.sibling=null,o=Xt.current,Vt(Xt,c?o&1|2:o&1),i):(_n(i),null);case 22:case 23:return yu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(_n(i),i.subtreeFlags&6&&(i.flags|=8192)):_n(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function v0(t,i){switch(Rc(i),i.tag){case 1:return Pn(i.type)&&Ma(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ms(),jt(Rn),jt(vn),Vc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Bc(i),null;case 13:if(jt(Xt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));xs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return jt(Xt),null;case 4:return Ms(),null;case 10:return Uc(i.type._context),null;case 22:case 23:return yu(),null;case 24:return null;default:return null}}var Va=!1,yn=!1,x0=typeof WeakSet=="function"?WeakSet:Set,Be=null;function ws(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Yt(t,i,c)}else o.current=null}function lu(t,i,o){try{o()}catch(c){Yt(t,i,c)}}var Ep=!1;function _0(t,i){if(yc=la,t=th(),fc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var b=0,I=-1,H=-1,ne=0,_e=0,Se=t,ve=null;t:for(;;){for(var Oe;Se!==o||f!==0&&Se.nodeType!==3||(I=b+f),Se!==g||c!==0&&Se.nodeType!==3||(H=b+c),Se.nodeType===3&&(b+=Se.nodeValue.length),(Oe=Se.firstChild)!==null;)ve=Se,Se=Oe;for(;;){if(Se===t)break t;if(ve===o&&++ne===f&&(I=b),ve===g&&++_e===c&&(H=b),(Oe=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Oe}o=I===-1||H===-1?null:{start:I,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(Sc={focusedElem:t,selectionRange:o},la=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var $e=je.memoizedProps,Zt=je.memoizedState,$=i.stateNode,X=$.getSnapshotBeforeUpdate(i.elementType===i.type?$e:ai(i.type,$e),Zt);$.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Yt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return je=Ep,Ep=!1,je}function Po(t,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var g=f.destroy;f.destroy=void 0,g!==void 0&&lu(i,o,g)}f=f.next}while(f!==c)}}function Ga(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function cu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function wp(t){var i=t.alternate;i!==null&&(t.alternate=null,wp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[xi],delete i[_o],delete i[bc],delete i[t0],delete i[n0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bp(t){return t.tag===5||t.tag===3||t.tag===4}function Tp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uu(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ya));else if(c!==4&&(t=t.child,t!==null))for(uu(t,i,o),t=t.sibling;t!==null;)uu(t,i,o),t=t.sibling}function du(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(du(t,i,o),t=t.sibling;t!==null;)du(t,i,o),t=t.sibling}var fn=null,li=!1;function lr(t,i,o){for(o=o.child;o!==null;)Ap(t,i,o),o=o.sibling}function Ap(t,i,o){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Je,o)}catch{}switch(o.tag){case 5:yn||ws(o,i);case 6:var c=fn,f=li;fn=null,lr(t,i,o),fn=c,li=f,fn!==null&&(li?(t=fn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):fn.removeChild(o.stateNode));break;case 18:fn!==null&&(li?(t=fn,o=o.stateNode,t.nodeType===8?wc(t.parentNode,o):t.nodeType===1&&wc(t,o),ao(t)):wc(fn,o.stateNode));break;case 4:c=fn,f=li,fn=o.stateNode.containerInfo,li=!0,lr(t,i,o),fn=c,li=f;break;case 0:case 11:case 14:case 15:if(!yn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,b=g.destroy;g=g.tag,b!==void 0&&((g&2)!==0||(g&4)!==0)&&lu(o,i,b),f=f.next}while(f!==c)}lr(t,i,o);break;case 1:if(!yn&&(ws(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(I){Yt(o,i,I)}lr(t,i,o);break;case 21:lr(t,i,o);break;case 22:o.mode&1?(yn=(c=yn)||o.memoizedState!==null,lr(t,i,o),yn=c):lr(t,i,o);break;default:lr(t,i,o)}}function Cp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new x0),i.forEach(function(c){var f=C0.bind(null,t,c);o.has(c)||(o.add(c),c.then(f,f))})}}function ci(t,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var g=t,b=i,I=b;e:for(;I!==null;){switch(I.tag){case 5:fn=I.stateNode,li=!1;break e;case 3:fn=I.stateNode.containerInfo,li=!0;break e;case 4:fn=I.stateNode.containerInfo,li=!0;break e}I=I.return}if(fn===null)throw Error(n(160));Ap(g,b,f),fn=null,li=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(ne){Yt(f,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Rp(i,t),i=i.sibling}function Rp(t,i){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ci(i,t),Si(t),c&4){try{Po(3,t,t.return),Ga(3,t)}catch($e){Yt(t,t.return,$e)}try{Po(5,t,t.return)}catch($e){Yt(t,t.return,$e)}}break;case 1:ci(i,t),Si(t),c&512&&o!==null&&ws(o,o.return);break;case 5:if(ci(i,t),Si(t),c&512&&o!==null&&ws(o,o.return),t.flags&32){var f=t.stateNode;try{ye(f,"")}catch($e){Yt(t,t.return,$e)}}if(c&4&&(f=t.stateNode,f!=null)){var g=t.memoizedProps,b=o!==null?o.memoizedProps:g,I=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&tt(f,g),Pe(I,b);var ne=Pe(I,g);for(b=0;b<H.length;b+=2){var _e=H[b],Se=H[b+1];_e==="style"?Ie(f,Se):_e==="dangerouslySetInnerHTML"?qe(f,Se):_e==="children"?ye(f,Se):L(f,_e,Se,ne)}switch(I){case"input":He(f,g);break;case"textarea":w(f,g);break;case"select":var ve=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var Oe=g.value;Oe!=null?kt(f,!!g.multiple,Oe,!1):ve!==!!g.multiple&&(g.defaultValue!=null?kt(f,!!g.multiple,g.defaultValue,!0):kt(f,!!g.multiple,g.multiple?[]:"",!1))}f[_o]=g}catch($e){Yt(t,t.return,$e)}}break;case 6:if(ci(i,t),Si(t),c&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,g=t.memoizedProps;try{f.nodeValue=g}catch($e){Yt(t,t.return,$e)}}break;case 3:if(ci(i,t),Si(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ao(i.containerInfo)}catch($e){Yt(t,t.return,$e)}break;case 4:ci(i,t),Si(t);break;case 13:ci(i,t),Si(t),f=t.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(pu=q())),c&4&&Cp(t);break;case 22:if(_e=o!==null&&o.memoizedState!==null,t.mode&1?(yn=(ne=yn)||_e,ci(i,t),yn=ne):ci(i,t),Si(t),c&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!_e&&(t.mode&1)!==0)for(Be=t,_e=t.child;_e!==null;){for(Se=Be=_e;Be!==null;){switch(ve=Be,Oe=ve.child,ve.tag){case 0:case 11:case 14:case 15:Po(4,ve,ve.return);break;case 1:ws(ve,ve.return);var je=ve.stateNode;if(typeof je.componentWillUnmount=="function"){c=ve,o=ve.return;try{i=c,je.props=i.memoizedProps,je.state=i.memoizedState,je.componentWillUnmount()}catch($e){Yt(c,o,$e)}}break;case 5:ws(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Np(Se);continue}}Oe!==null?(Oe.return=ve,Be=Oe):Np(Se)}_e=_e.sibling}e:for(_e=null,Se=t;;){if(Se.tag===5){if(_e===null){_e=Se;try{f=Se.stateNode,ne?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=Se.stateNode,H=Se.memoizedProps.style,b=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=be("display",b))}catch($e){Yt(t,t.return,$e)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=ne?"":Se.memoizedProps}catch($e){Yt(t,t.return,$e)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ci(i,t),Si(t),c&4&&Cp(t);break;case 21:break;default:ci(i,t),Si(t)}}function Si(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(bp(o)){var c=o;break e}o=o.return}throw Error(n(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(ye(f,""),c.flags&=-33);var g=Tp(t);du(t,g,f);break;case 3:case 4:var b=c.stateNode.containerInfo,I=Tp(t);uu(t,I,b);break;default:throw Error(n(161))}}catch(H){Yt(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function y0(t,i,o){Be=t,Pp(t)}function Pp(t,i,o){for(var c=(t.mode&1)!==0;Be!==null;){var f=Be,g=f.child;if(f.tag===22&&c){var b=f.memoizedState!==null||Va;if(!b){var I=f.alternate,H=I!==null&&I.memoizedState!==null||yn;I=Va;var ne=yn;if(Va=b,(yn=H)&&!ne)for(Be=f;Be!==null;)b=Be,H=b.child,b.tag===22&&b.memoizedState!==null?Lp(f):H!==null?(H.return=b,Be=H):Lp(f);for(;g!==null;)Be=g,Pp(g),g=g.sibling;Be=f,Va=I,yn=ne}Dp(t)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,Be=g):Dp(t)}}function Dp(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:yn||Ga(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!yn)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ai(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Nh(i,g,c);break;case 3:var b=i.updateQueue;if(b!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Nh(i,b,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var _e=ne.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&ao(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}yn||i.flags&512&&cu(i)}catch(ve){Yt(i,i.return,ve)}}if(i===t){Be=null;break}if(o=i.sibling,o!==null){o.return=i.return,Be=o;break}Be=i.return}}function Np(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Be=o;break}Be=i.return}}function Lp(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ga(4,i)}catch(H){Yt(i,o,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(H){Yt(i,f,H)}}var g=i.return;try{cu(i)}catch(H){Yt(i,g,H)}break;case 5:var b=i.return;try{cu(i)}catch(H){Yt(i,b,H)}}}catch(H){Yt(i,i.return,H)}if(i===t){Be=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Be=I;break}Be=i.return}}var S0=Math.ceil,ja=P.ReactCurrentDispatcher,fu=P.ReactCurrentOwner,Qn=P.ReactCurrentBatchConfig,At=0,cn=null,Qt=null,hn=0,Gn=0,bs=ir(0),rn=0,Do=null,Fr=0,Wa=0,hu=0,No=null,Nn=null,pu=0,Ts=1/0,Ii=null,Xa=!1,mu=null,cr=null,qa=!1,ur=null,Ya=0,Lo=0,gu=null,$a=-1,Ka=0;function Tn(){return(At&6)!==0?q():$a!==-1?$a:$a=q()}function dr(t){return(t.mode&1)===0?1:(At&2)!==0&&hn!==0?hn&-hn:r0.transition!==null?(Ka===0&&(Ka=wn()),Ka):(t=Mt,t!==0||(t=window.event,t=t===void 0?16:Uf(t.type)),t)}function ui(t,i,o,c){if(50<Lo)throw Lo=0,gu=null,Error(n(185));Kt(t,o,c),((At&2)===0||t!==cn)&&(t===cn&&((At&2)===0&&(Wa|=o),rn===4&&fr(t,hn)),Ln(t,c),o===1&&At===0&&(i.mode&1)===0&&(Ts=q()+500,wa&&sr()))}function Ln(t,i){var o=t.callbackNode;Cr(t,i);var c=ri(t,t===cn?hn:0);if(c===0)o!==null&&Y(o),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(o!=null&&Y(o),i===1)t.tag===0?i0(Up.bind(null,t)):yh(Up.bind(null,t)),Jv(function(){(At&6)===0&&sr()}),o=null;else{switch(Af(c)){case 1:o=Ne;break;case 4:o=Ge;break;case 16:o=Fe;break;case 536870912:o=at;break;default:o=Fe}o=Gp(o,Ip.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Ip(t,i){if($a=-1,Ka=0,(At&6)!==0)throw Error(n(327));var o=t.callbackNode;if(As()&&t.callbackNode!==o)return null;var c=ri(t,t===cn?hn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Za(t,c);else{i=c;var f=At;At|=2;var g=Fp();(cn!==t||hn!==i)&&(Ii=null,Ts=q()+500,zr(t,i));do try{w0();break}catch(I){kp(t,I)}while(!0);Ic(),ja.current=g,At=f,Qt!==null?i=0:(cn=null,hn=0,i=rn)}if(i!==0){if(i===2&&(f=Bt(t),f!==0&&(c=f,i=vu(t,f))),i===1)throw o=Do,zr(t,0),fr(t,c),Ln(t,q()),o;if(i===6)fr(t,c);else{if(f=t.current.alternate,(c&30)===0&&!M0(f)&&(i=Za(t,c),i===2&&(g=Bt(t),g!==0&&(c=g,i=vu(t,g))),i===1))throw o=Do,zr(t,0),fr(t,c),Ln(t,q()),o;switch(t.finishedWork=f,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Br(t,Nn,Ii);break;case 3:if(fr(t,c),(c&130023424)===c&&(i=pu+500-q(),10<i)){if(ri(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){Tn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Ec(Br.bind(null,t,Nn,Ii),i);break}Br(t,Nn,Ii);break;case 4:if(fr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,f=-1;0<c;){var b=31-Tt(c);g=1<<b,b=i[b],b>f&&(f=b),c&=~g}if(c=f,c=q()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*S0(c/1960))-c,10<c){t.timeoutHandle=Ec(Br.bind(null,t,Nn,Ii),c);break}Br(t,Nn,Ii);break;case 5:Br(t,Nn,Ii);break;default:throw Error(n(329))}}}return Ln(t,q()),t.callbackNode===o?Ip.bind(null,t):null}function vu(t,i){var o=No;return t.current.memoizedState.isDehydrated&&(zr(t,i).flags|=256),t=Za(t,i),t!==2&&(i=Nn,Nn=o,i!==null&&xu(i)),t}function xu(t){Nn===null?Nn=t:Nn.push.apply(Nn,t)}function M0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],g=f.getSnapshot;f=f.value;try{if(!si(g(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(t,i){for(i&=~hu,i&=~Wa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Tt(i),c=1<<o;t[o]=-1,i&=~c}}function Up(t){if((At&6)!==0)throw Error(n(327));As();var i=ri(t,0);if((i&1)===0)return Ln(t,q()),null;var o=Za(t,i);if(t.tag!==0&&o===2){var c=Bt(t);c!==0&&(i=c,o=vu(t,c))}if(o===1)throw o=Do,zr(t,0),fr(t,i),Ln(t,q()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Br(t,Nn,Ii),Ln(t,q()),null}function _u(t,i){var o=At;At|=1;try{return t(i)}finally{At=o,At===0&&(Ts=q()+500,wa&&sr())}}function Or(t){ur!==null&&ur.tag===0&&(At&6)===0&&As();var i=At;At|=1;var o=Qn.transition,c=Mt;try{if(Qn.transition=null,Mt=1,t)return t()}finally{Mt=c,Qn.transition=o,At=i,(At&6)===0&&sr()}}function yu(){Gn=bs.current,jt(bs)}function zr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Qv(o)),Qt!==null)for(o=Qt.return;o!==null;){var c=o;switch(Rc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ma();break;case 3:Ms(),jt(Rn),jt(vn),Vc();break;case 5:Bc(c);break;case 4:Ms();break;case 13:jt(Xt);break;case 19:jt(Xt);break;case 10:Uc(c.type._context);break;case 22:case 23:yu()}o=o.return}if(cn=t,Qt=t=hr(t.current,null),hn=Gn=i,rn=0,Do=null,hu=Wa=Fr=0,Nn=No=null,Ir!==null){for(i=0;i<Ir.length;i++)if(o=Ir[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,g=o.pending;if(g!==null){var b=g.next;g.next=f,c.next=b}o.pending=c}Ir=null}return t}function kp(t,i){do{var o=Qt;try{if(Ic(),Ia.current=Oa,Ua){for(var c=qt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Ua=!1}if(kr=0,ln=nn=qt=null,bo=!1,To=0,fu.current=null,o===null||o.return===null){rn=1,Do=i,Qt=null;break}e:{var g=t,b=o.return,I=o,H=i;if(i=hn,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ne=H,_e=I,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Oe=ap(b);if(Oe!==null){Oe.flags&=-257,lp(Oe,b,I,g,i),Oe.mode&1&&op(g,ne,i),i=Oe,H=ne;var je=i.updateQueue;if(je===null){var $e=new Set;$e.add(H),i.updateQueue=$e}else je.add(H);break e}else{if((i&1)===0){op(g,ne,i),Su();break e}H=Error(n(426))}}else if(Wt&&I.mode&1){var Zt=ap(b);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),lp(Zt,b,I,g,i),Nc(Es(H,I));break e}}g=H=Es(H,I),rn!==4&&(rn=2),No===null?No=[g]:No.push(g),g=b;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var $=rp(g,H,i);Dh(g,$);break e;case 1:I=H;var X=g.type,K=g.stateNode;if((g.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(cr===null||!cr.has(K)))){g.flags|=65536,i&=-i,g.lanes|=i;var Te=sp(g,I,i);Dh(g,Te);break e}}g=g.return}while(g!==null)}zp(o)}catch(Ze){i=Ze,Qt===o&&o!==null&&(Qt=o=o.return);continue}break}while(!0)}function Fp(){var t=ja.current;return ja.current=Oa,t===null?Oa:t}function Su(){(rn===0||rn===3||rn===2)&&(rn=4),cn===null||(Fr&268435455)===0&&(Wa&268435455)===0||fr(cn,hn)}function Za(t,i){var o=At;At|=2;var c=Fp();(cn!==t||hn!==i)&&(Ii=null,zr(t,i));do try{E0();break}catch(f){kp(t,f)}while(!0);if(Ic(),At=o,ja.current=c,Qt!==null)throw Error(n(261));return cn=null,hn=0,rn}function E0(){for(;Qt!==null;)Op(Qt)}function w0(){for(;Qt!==null&&!ae();)Op(Qt)}function Op(t){var i=Vp(t.alternate,t,Gn);t.memoizedProps=t.pendingProps,i===null?zp(t):Qt=i,fu.current=null}function zp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=g0(o,i,Gn),o!==null){Qt=o;return}}else{if(o=v0(o,i),o!==null){o.flags&=32767,Qt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rn=6,Qt=null;return}}if(i=i.sibling,i!==null){Qt=i;return}Qt=i=t}while(i!==null);rn===0&&(rn=5)}function Br(t,i,o){var c=Mt,f=Qn.transition;try{Qn.transition=null,Mt=1,b0(t,i,o,c)}finally{Qn.transition=f,Mt=c}return null}function b0(t,i,o,c){do As();while(ur!==null);if((At&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var g=o.lanes|o.childLanes;if(gn(t,g),t===cn&&(Qt=cn=null,hn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||qa||(qa=!0,Gp(Fe,function(){return As(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=Qn.transition,Qn.transition=null;var b=Mt;Mt=1;var I=At;At|=4,fu.current=null,_0(t,o),Rp(o,t),Wv(Sc),la=!!yc,Sc=yc=null,t.current=o,y0(o),ce(),At=I,Mt=b,Qn.transition=g}else t.current=o;if(qa&&(qa=!1,ur=t,Ya=f),g=t.pendingLanes,g===0&&(cr=null),Lt(o.stateNode),Ln(t,q()),i!==null)for(c=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(Xa)throw Xa=!1,t=mu,mu=null,t;return(Ya&1)!==0&&t.tag!==0&&As(),g=t.pendingLanes,(g&1)!==0?t===gu?Lo++:(Lo=0,gu=t):Lo=0,sr(),null}function As(){if(ur!==null){var t=Af(Ya),i=Qn.transition,o=Mt;try{if(Qn.transition=null,Mt=16>t?16:t,ur===null)var c=!1;else{if(t=ur,ur=null,Ya=0,(At&6)!==0)throw Error(n(331));var f=At;for(At|=4,Be=t.current;Be!==null;){var g=Be,b=g.child;if((Be.flags&16)!==0){var I=g.deletions;if(I!==null){for(var H=0;H<I.length;H++){var ne=I[H];for(Be=ne;Be!==null;){var _e=Be;switch(_e.tag){case 0:case 11:case 15:Po(8,_e,g)}var Se=_e.child;if(Se!==null)Se.return=_e,Be=Se;else for(;Be!==null;){_e=Be;var ve=_e.sibling,Oe=_e.return;if(wp(_e),_e===ne){Be=null;break}if(ve!==null){ve.return=Oe,Be=ve;break}Be=Oe}}}var je=g.alternate;if(je!==null){var $e=je.child;if($e!==null){je.child=null;do{var Zt=$e.sibling;$e.sibling=null,$e=Zt}while($e!==null)}}Be=g}}if((g.subtreeFlags&2064)!==0&&b!==null)b.return=g,Be=b;else e:for(;Be!==null;){if(g=Be,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Po(9,g,g.return)}var $=g.sibling;if($!==null){$.return=g.return,Be=$;break e}Be=g.return}}var X=t.current;for(Be=X;Be!==null;){b=Be;var K=b.child;if((b.subtreeFlags&2064)!==0&&K!==null)K.return=b,Be=K;else e:for(b=X;Be!==null;){if(I=Be,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ga(9,I)}}catch(Ze){Yt(I,I.return,Ze)}if(I===b){Be=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,Be=Te;break e}Be=I.return}}if(At=f,sr(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Je,t)}catch{}c=!0}return c}finally{Mt=o,Qn.transition=i}}return!1}function Bp(t,i,o){i=Es(o,i),i=rp(t,i,1),t=ar(t,i,1),i=Tn(),t!==null&&(Kt(t,1,i),Ln(t,i))}function Yt(t,i,o){if(t.tag===3)Bp(t,t,o);else for(;i!==null;){if(i.tag===3){Bp(i,t,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(cr===null||!cr.has(c))){t=Es(o,t),t=sp(i,t,1),i=ar(i,t,1),t=Tn(),i!==null&&(Kt(i,1,t),Ln(i,t));break}}i=i.return}}function T0(t,i,o){var c=t.pingCache;c!==null&&c.delete(i),i=Tn(),t.pingedLanes|=t.suspendedLanes&o,cn===t&&(hn&o)===o&&(rn===4||rn===3&&(hn&130023424)===hn&&500>q()-pu?zr(t,0):hu|=o),Ln(t,i)}function Hp(t,i){i===0&&((t.mode&1)===0?i=1:(i=St,St<<=1,(St&130023424)===0&&(St=4194304)));var o=Tn();t=Di(t,i),t!==null&&(Kt(t,i,o),Ln(t,o))}function A0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Hp(t,o)}function C0(t,i){var o=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Hp(t,o)}var Vp;Vp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Rn.current)Dn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Dn=!1,m0(t,i,o);Dn=(t.flags&131072)!==0}else Dn=!1,Wt&&(i.flags&1048576)!==0&&Sh(i,Ta,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ha(t,i),t=i.pendingProps;var f=ms(i,vn.current);Ss(i,o),f=Wc(null,i,c,t,f,o);var g=Xc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(c)?(g=!0,Ea(i)):g=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Oc(i),f.updater=za,i.stateNode=f,f._reactInternals=i,Qc(i,c,t,o),i=nu(null,i,c,!0,g,o)):(i.tag=0,Wt&&g&&Cc(i),bn(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Ha(t,i),t=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=P0(c),t=ai(c,t),f){case 0:i=tu(null,i,c,t,o);break e;case 1:i=pp(null,i,c,t,o);break e;case 11:i=cp(null,i,c,t,o);break e;case 14:i=up(null,i,c,ai(c.type,t),o);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ai(c,f),tu(t,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ai(c,f),pp(t,i,c,f,o);case 3:e:{if(mp(i),t===null)throw Error(n(387));c=i.pendingProps,g=i.memoizedState,f=g.element,Ph(t,i),Na(i,c,null,o);var b=i.memoizedState;if(c=b.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){f=Es(Error(n(423)),i),i=gp(t,i,c,o,f);break e}else if(c!==f){f=Es(Error(n(424)),i),i=gp(t,i,c,o,f);break e}else for(Vn=nr(i.stateNode.containerInfo.firstChild),Hn=i,Wt=!0,oi=null,o=Ch(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(xs(),c===f){i=Li(t,i,o);break e}bn(t,i,c,o)}i=i.child}return i;case 5:return Lh(i),t===null&&Dc(i),c=i.type,f=i.pendingProps,g=t!==null?t.memoizedProps:null,b=f.children,Mc(c,f)?b=null:g!==null&&Mc(c,g)&&(i.flags|=32),hp(t,i),bn(t,i,b,o),i.child;case 6:return t===null&&Dc(i),null;case 13:return vp(t,i,o);case 4:return zc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=_s(i,null,c,o):bn(t,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ai(c,f),cp(t,i,c,f,o);case 7:return bn(t,i,i.pendingProps,o),i.child;case 8:return bn(t,i,i.pendingProps.children,o),i.child;case 12:return bn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,g=i.memoizedProps,b=f.value,Vt(Ra,c._currentValue),c._currentValue=b,g!==null)if(si(g.value,b)){if(g.children===f.children&&!Rn.current){i=Li(t,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var I=g.dependencies;if(I!==null){b=g.child;for(var H=I.firstContext;H!==null;){if(H.context===c){if(g.tag===1){H=Ni(-1,o&-o),H.tag=2;var ne=g.updateQueue;if(ne!==null){ne=ne.shared;var _e=ne.pending;_e===null?H.next=H:(H.next=_e.next,_e.next=H),ne.pending=H}}g.lanes|=o,H=g.alternate,H!==null&&(H.lanes|=o),kc(g.return,o,i),I.lanes|=o;break}H=H.next}}else if(g.tag===10)b=g.type===i.type?null:g.child;else if(g.tag===18){if(b=g.return,b===null)throw Error(n(341));b.lanes|=o,I=b.alternate,I!==null&&(I.lanes|=o),kc(b,o,i),b=g.sibling}else b=g.child;if(b!==null)b.return=g;else for(b=g;b!==null;){if(b===i){b=null;break}if(g=b.sibling,g!==null){g.return=b.return,b=g;break}b=b.return}g=b}bn(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Ss(i,o),f=Kn(f),c=c(f),i.flags|=1,bn(t,i,c,o),i.child;case 14:return c=i.type,f=ai(c,i.pendingProps),f=ai(c.type,f),up(t,i,c,f,o);case 15:return dp(t,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ai(c,f),Ha(t,i),i.tag=1,Pn(c)?(t=!0,Ea(i)):t=!1,Ss(i,o),np(i,c,f),Qc(i,c,f,o),nu(null,i,c,!0,t,o);case 19:return _p(t,i,o);case 22:return fp(t,i,o)}throw Error(n(156,i.tag))};function Gp(t,i){return C(t,i)}function R0(t,i,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,i,o,c){return new R0(t,i,o,c)}function Mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function P0(t){if(typeof t=="function")return Mu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Z)return 11;if(t===fe)return 14}return 2}function hr(t,i){var o=t.alternate;return o===null?(o=Jn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Qa(t,i,o,c,f,g){var b=2;if(c=t,typeof t=="function")Mu(t)&&(b=1);else if(typeof t=="string")b=5;else e:switch(t){case V:return Hr(o.children,f,g,i);case B:b=8,f|=8;break;case D:return t=Jn(12,o,i,f|2),t.elementType=D,t.lanes=g,t;case oe:return t=Jn(13,o,i,f),t.elementType=oe,t.lanes=g,t;case ie:return t=Jn(19,o,i,f),t.elementType=ie,t.lanes=g,t;case pe:return Ja(o,f,g,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:b=10;break e;case G:b=9;break e;case Z:b=11;break e;case fe:b=14;break e;case Q:b=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Jn(b,o,i,f),i.elementType=t,i.type=c,i.lanes=g,i}function Hr(t,i,o,c){return t=Jn(7,t,c,i),t.lanes=o,t}function Ja(t,i,o,c){return t=Jn(22,t,c,i),t.elementType=pe,t.lanes=o,t.stateNode={isHidden:!1},t}function Eu(t,i,o){return t=Jn(6,t,null,i),t.lanes=o,t}function wu(t,i,o){return i=Jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function D0(t,i,o,c,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function bu(t,i,o,c,f,g,b,I,H){return t=new D0(t,i,o,I,H),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Jn(3,null,null,i),t.current=g,g.stateNode=t,g.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oc(g),t}function N0(t,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:t,containerInfo:i,implementation:o}}function jp(t){if(!t)return rr;t=t._reactInternals;e:{if(Ti(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Pn(o))return xh(t,o,i)}return i}function Wp(t,i,o,c,f,g,b,I,H){return t=bu(o,c,!0,t,f,g,b,I,H),t.context=jp(null),o=t.current,c=Tn(),f=dr(o),g=Ni(c,f),g.callback=i??null,ar(o,g,f),t.current.lanes=f,Kt(t,f,c),Ln(t,c),t}function el(t,i,o,c){var f=i.current,g=Tn(),b=dr(f);return o=jp(o),i.context===null?i.context=o:i.pendingContext=o,i=Ni(g,b),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=ar(f,i,b),t!==null&&(ui(t,f,b,g),Da(t,f,b)),b}function tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function Tu(t,i){Xp(t,i),(t=t.alternate)&&Xp(t,i)}function L0(){return null}var qp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Au(t){this._internalRoot=t}nl.prototype.render=Au.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));el(t,i,null,null)},nl.prototype.unmount=Au.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Or(function(){el(null,t,null,null)}),i[Ai]=null}};function nl(t){this._internalRoot=t}nl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Pf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Ji.length&&i!==0&&i<Ji[o].priority;o++);Ji.splice(o,0,t),o===0&&Lf(t)}};function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function I0(t,i,o,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var ne=tl(b);g.call(ne)}}var b=Wp(i,c,t,0,null,!1,!1,"",Yp);return t._reactRootContainer=b,t[Ai]=b.current,vo(t.nodeType===8?t.parentNode:t),Or(),b}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var I=c;c=function(){var ne=tl(H);I.call(ne)}}var H=bu(t,0,!1,null,null,!1,!1,"",Yp);return t._reactRootContainer=H,t[Ai]=H.current,vo(t.nodeType===8?t.parentNode:t),Or(function(){el(i,H,o,c)}),H}function rl(t,i,o,c,f){var g=o._reactRootContainer;if(g){var b=g;if(typeof f=="function"){var I=f;f=function(){var H=tl(b);I.call(H)}}el(i,b,t,f)}else b=I0(o,i,t,f,c);return tl(b)}Cf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=tn(i.pendingLanes);o!==0&&(Rr(i,o|1),Ln(i,q()),(At&6)===0&&(Ts=q()+500,sr()))}break;case 13:Or(function(){var c=Di(t,1);if(c!==null){var f=Tn();ui(c,t,1,f)}}),Tu(t,1)}},Jl=function(t){if(t.tag===13){var i=Di(t,134217728);if(i!==null){var o=Tn();ui(i,t,134217728,o)}Tu(t,134217728)}},Rf=function(t){if(t.tag===13){var i=dr(t),o=Di(t,i);if(o!==null){var c=Tn();ui(o,t,i,c)}Tu(t,i)}},Pf=function(){return Mt},Df=function(t,i){var o=Mt;try{return Mt=t,i()}finally{Mt=o}},Ee=function(t,i,o){switch(i){case"input":if(He(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==t&&c.form===t.form){var f=Sa(c);if(!f)throw Error(n(90));Ht(c),He(c,f)}}}break;case"textarea":w(t,o);break;case"select":i=o.value,i!=null&&kt(t,!!o.multiple,i,!1)}},ht=_u,It=Or;var U0={usingClientEntryPoint:!1,Events:[yo,hs,Sa,ge,Ye,_u]},Io={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k0={bundleType:Io.bundleType,version:Io.version,rendererPackageName:Io.rendererPackageName,rendererConfig:Io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ra(t),t===null?null:t.stateNode},findFiberByHostInstance:Io.findFiberByHostInstance||L0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{Je=sl.inject(k0),ut=sl}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U0,In.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cu(i))throw Error(n(200));return N0(t,i,null,o)},In.createRoot=function(t,i){if(!Cu(t))throw Error(n(299));var o=!1,c="",f=qp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=bu(t,1,!1,null,null,o,!1,c,f),t[Ai]=i.current,vo(t.nodeType===8?t.parentNode:t),new Au(i)},In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ra(i),t=t===null?null:t.stateNode,t},In.flushSync=function(t){return Or(t)},In.hydrate=function(t,i,o){if(!il(i))throw Error(n(200));return rl(null,t,i,!0,o)},In.hydrateRoot=function(t,i,o){if(!Cu(t))throw Error(n(405));var c=o!=null&&o.hydratedSources||null,f=!1,g="",b=qp;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(b=o.onRecoverableError)),i=Wp(i,null,t,1,o??null,f,!1,g,b),t[Ai]=i.current,vo(t),c)for(t=0;t<c.length;t++)o=c[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new nl(i)},In.render=function(t,i,o){if(!il(i))throw Error(n(200));return rl(null,t,i,!1,o)},In.unmountComponentAtNode=function(t){if(!il(t))throw Error(n(40));return t._reactRootContainer?(Or(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1},In.unstable_batchedUpdates=_u,In.unstable_renderSubtreeIntoContainer=function(t,i,o,c){if(!il(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return rl(t,i,o,!1,c)},In.version="18.3.1-next-f1338f8080-20240426",In}var nm;function j0(){if(nm)return Du.exports;nm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Du.exports=G0(),Du.exports}var im;function W0(){if(im)return ol;im=1;var s=j0();return ol.createRoot=s.createRoot,ol.hydrateRoot=s.hydrateRoot,ol}var X0=W0(),ft=pf();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Y0=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),rm=s=>{const e=Y0(s);return e.charAt(0).toUpperCase()+e.slice(1)},pg=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=ft.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:u,...d},p)=>ft.createElement("svg",{ref:p,...$0,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:pg("lucide",a),...d},[...u.map(([h,x])=>ft.createElement(h,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=(s,e)=>{const n=ft.forwardRef(({className:r,...a},l)=>ft.createElement(K0,{ref:l,iconNode:e,className:pg(`lucide-${q0(rm(s))}`,`lucide-${s}`,r),...a}));return n.displayName=rm(s),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]],Q0=Pt("accessibility",Z0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],ex=Pt("award",J0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],nx=Pt("check",tx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],rx=Pt("chevron-down",ix);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],ox=Pt("circle-check-big",sx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],mf=Pt("code-xml",ax);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]],_d=Pt("cookie",lx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ux=Pt("database",cx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",key:"1dfaln"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",key:"1qnva7"}]],fx=Pt("ear",dx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],mg=Pt("eye",hx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],mx=Pt("github",px);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],vx=Pt("heart",gx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],sm=Pt("keyboard",xx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],yx=Pt("linkedin",_x);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Mx=Pt("lock",Sx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],gf=Pt("mail",Ex);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],gg=Pt("map-pin",wx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],Tx=Pt("message-circle",bx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Cx=Pt("monitor",Ax);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],vg=Pt("palette",Rx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Dx=Pt("phone",Px);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],Vl=Pt("rocket",Nx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],Ix=Pt("scale",Lx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],kx=Pt("send",Ux);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Ox=Pt("shield",Fx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],Bx=Pt("smartphone",zx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],om=Pt("sparkles",Hx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Gx=Pt("trending-up",Vx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]],Wx=Pt("user-check",jx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],qx=Pt("users",Xx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],$x=Pt("x",Yx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Zx=Pt("zap",Kx);function al(){const[s,e]=ft.useState("home"),n=r=>{const a=document.getElementById(r);if(a){const l=document.querySelector("header"),u=l?l.offsetHeight:120,d=a.getBoundingClientRect().top+window.scrollY;let p;r==="kontakt"?p=Math.max(0,d-u+8):p=Math.max(0,d-u-16),window.scrollTo({top:p,behavior:"smooth"}),e(r);return}r==="home"?window.location.href="/":(e(r),window.location.href=`/#${r}`)};return ft.useEffect(()=>{const r=["home","leistungen","ueber-mich","ablauf","kontakt"],a=new IntersectionObserver(l=>{const u=l.filter(p=>p.isIntersecting);if(u.length>0){u.sort((h,x)=>x.intersectionRatio-h.intersectionRatio);const p=u[0].target.id;e(h=>h===p?h:p);return}const d=l.slice().sort((p,h)=>Math.abs(p.boundingClientRect.top)-Math.abs(h.boundingClientRect.top));if(d.length){const p=d[0].target.id;e(h=>h===p?h:p)}},{root:null,rootMargin:"-40% 0px -40% 0px",threshold:[0,.25,.5,.75,1]});return r.forEach(l=>{const u=document.getElementById(l);u&&a.observe(u)}),()=>a.disconnect()},[]),ft.useEffect(()=>{let r=!1;const a=()=>{r||(r=!0,requestAnimationFrame(()=>{window.scrollY<=72&&e(l=>l==="home"?l:"home"),r=!1}))};return window.addEventListener("scroll",a,{passive:!0}),window.scrollY<=72&&e("home"),()=>window.removeEventListener("scroll",a)},[]),m.jsxs("header",{className:"fixed top-0 left-0 w-full z-50 flex justify-center items-center py-4 bg-transparent",children:[m.jsx("style",{children:`@keyframes blinkPulse {
            0% {
              transform: translateY(0) scale(1);
              opacity: 1;
              box-shadow: 0 0 0 rgba(0,0,0,0);
              filter: none;
            }
            50% {
              /* gentler movement and glow */
              transform: translateY(-2px) scale(1.02);
              opacity: 0.98;
              box-shadow: 0 8px 20px rgba(99,102,241,0.12), 0 2px 6px rgba(99,102,241,0.04);
              filter: drop-shadow(0 6px 12px rgba(99,102,241,0.06));
            }
            100% {
              transform: translateY(0) scale(1);
              opacity: 1;
              box-shadow: 0 0 0 rgba(0,0,0,0);
              filter: none;
            }
          }
          .blink {
            animation: blinkPulse 1.3s cubic-bezier(.2,.9,.25,1) infinite;
            will-change: transform, box-shadow, opacity;
          }
          @media (prefers-reduced-motion: reduce) { .blink { animation: none; transform: none; box-shadow: none; } }
        `}),m.jsxs("div",{className:"w-[98%] max-w-7xl bg-slate-950/30 backdrop-blur-2xl border border-purple-500/20 rounded-full px-8 py-3.5 shadow-xl flex items-center justify-between",children:[m.jsxs("a",{href:"/",className:"flex items-center gap-2","aria-label":"Startseite",children:[m.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center",children:m.jsx(mf,{className:"w-5 h-5"})}),m.jsx("span",{className:"font-bold text-lg",children:"oezdens"})]}),m.jsxs("nav",{className:"flex items-center gap-14 text-sm",children:[m.jsxs("button",{onClick:()=>n("home"),className:`relative group pb-1 transition-all duration-300 ${s==="home"?"text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold":"text-slate-300 hover:text-white"}`,children:["Home",m.jsx("span",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${s==="home"?"w-full":"w-0 group-hover:w-full"}`})]}),m.jsxs("a",{href:"/#leistungen",onClick:r=>{r.preventDefault(),n("leistungen")},className:`relative group pb-1 transition-all duration-300 ${s==="leistungen"?"text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold":"text-slate-300 hover:text-white"}`,children:["Leistungen",m.jsx("span",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${s==="leistungen"?"w-full":"w-0 group-hover:w-full"}`})]}),m.jsxs("a",{href:"/#ueber-mich",onClick:r=>{r.preventDefault(),n("ueber-mich")},className:`relative group pb-1 transition-all duration-300 ${s==="ueber-mich"?"text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold":"text-slate-300 hover:text-white"}`,children:["Über mich",m.jsx("span",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${s==="ueber-mich"?"w-full":"w-0 group-hover:w-full"}`})]}),m.jsxs("a",{href:"/#ablauf",onClick:r=>{r.preventDefault(),n("ablauf")},className:`relative group pb-1 transition-all duration-300 ${s==="ablauf"?"text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold":"text-slate-300 hover:text-white"}`,children:["Ablauf",m.jsx("span",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${s==="ablauf"?"w-full":"w-0 group-hover:w-full"}`})]}),m.jsx("a",{href:"/#kontakt",onClick:r=>{r.preventDefault(),n("kontakt")},className:`bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-1.5 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm font-medium ${s==="kontakt"?"blink":""}`,"aria-label":"Kontakt",children:"Kontakt"})]})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vf="180",Qx=0,am=1,Jx=2,xg=1,e_=2,Hi=3,br=0,Fn=1,Vi=2,Er=0,js=1,yd=2,lm=3,cm=4,t_=5,Zr=100,n_=101,i_=102,r_=103,s_=104,o_=200,a_=201,l_=202,c_=203,Sd=204,Md=205,u_=206,d_=207,f_=208,h_=209,p_=210,m_=211,g_=212,v_=213,x_=214,Ed=0,wd=1,bd=2,Xs=3,Td=4,Ad=5,Cd=6,Rd=7,_g=0,__=1,y_=2,wr=0,S_=1,M_=2,E_=3,w_=4,b_=5,T_=6,A_=7,yg=300,qs=301,Ys=302,Pd=303,Dd=304,$l=306,Nd=1e3,gi=1001,Ld=1002,Xn=1003,C_=1004,ll=1005,kn=1006,Iu=1007,Jr=1008,Wi=1009,Sg=1010,Mg=1011,jo=1012,xf=1013,ts=1014,Ei=1015,Zs=1016,_f=1017,yf=1018,Wo=1020,Eg=35902,wg=35899,bg=1021,Tg=1022,ni=1023,Xo=1026,qo=1027,Ag=1028,Sf=1029,Cg=1030,Mf=1031,Ef=1033,Fl=33776,Ol=33777,zl=33778,Bl=33779,Id=35840,Ud=35841,kd=35842,Fd=35843,Od=36196,zd=37492,Bd=37496,Hd=37808,Vd=37809,Gd=37810,jd=37811,Wd=37812,Xd=37813,qd=37814,Yd=37815,$d=37816,Kd=37817,Zd=37818,Qd=37819,Jd=37820,ef=37821,tf=36492,nf=36494,rf=36495,sf=36283,of=36284,af=36285,lf=36286,R_=3200,P_=3201,D_=0,N_=1,Mr="",ti="srgb",$s="srgb-linear",Gl="linear",Ot="srgb",Cs=7680,um=519,L_=512,I_=513,U_=514,Rg=515,k_=516,F_=517,O_=518,z_=519,dm=35044,fm="300 es",wi=2e3,jl=2001;class Qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=Math.PI/180,cf=180/Math.PI;function $o(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[n&63|128]+Sn[n>>8&255]+"-"+Sn[n>>16&255]+Sn[n>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function Et(s,e,n){return Math.max(e,Math.min(n,s))}function B_(s,e){return(s%e+e)%e}function ku(s,e,n){return(1-n)*s+n*e}function ko(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,n=0){gt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ko{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,u,d){let p=r[a+0],h=r[a+1],x=r[a+2],v=r[a+3];const y=l[u+0],M=l[u+1],T=l[u+2],A=l[u+3];if(d===0){e[n+0]=p,e[n+1]=h,e[n+2]=x,e[n+3]=v;return}if(d===1){e[n+0]=y,e[n+1]=M,e[n+2]=T,e[n+3]=A;return}if(v!==A||p!==y||h!==M||x!==T){let S=1-d;const _=p*y+h*M+x*T+v*A,U=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const z=Math.sqrt(L),F=Math.atan2(z,_*U);S=Math.sin(S*F)/z,d=Math.sin(d*F)/z}const P=d*U;if(p=p*S+y*P,h=h*S+M*P,x=x*S+T*P,v=v*S+A*P,S===1-d){const z=1/Math.sqrt(p*p+h*h+x*x+v*v);p*=z,h*=z,x*=z,v*=z}}e[n]=p,e[n+1]=h,e[n+2]=x,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,l,u){const d=r[a],p=r[a+1],h=r[a+2],x=r[a+3],v=l[u],y=l[u+1],M=l[u+2],T=l[u+3];return e[n]=d*T+x*v+p*M-h*y,e[n+1]=p*T+x*y+h*v-d*M,e[n+2]=h*T+x*M+d*y-p*v,e[n+3]=x*T-d*v-p*y-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,u=e._order,d=Math.cos,p=Math.sin,h=d(r/2),x=d(a/2),v=d(l/2),y=p(r/2),M=p(a/2),T=p(l/2);switch(u){case"XYZ":this._x=y*x*v+h*M*T,this._y=h*M*v-y*x*T,this._z=h*x*T+y*M*v,this._w=h*x*v-y*M*T;break;case"YXZ":this._x=y*x*v+h*M*T,this._y=h*M*v-y*x*T,this._z=h*x*T-y*M*v,this._w=h*x*v+y*M*T;break;case"ZXY":this._x=y*x*v-h*M*T,this._y=h*M*v+y*x*T,this._z=h*x*T+y*M*v,this._w=h*x*v-y*M*T;break;case"ZYX":this._x=y*x*v-h*M*T,this._y=h*M*v+y*x*T,this._z=h*x*T-y*M*v,this._w=h*x*v+y*M*T;break;case"YZX":this._x=y*x*v+h*M*T,this._y=h*M*v+y*x*T,this._z=h*x*T-y*M*v,this._w=h*x*v-y*M*T;break;case"XZY":this._x=y*x*v-h*M*T,this._y=h*M*v-y*x*T,this._z=h*x*T+y*M*v,this._w=h*x*v+y*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],u=n[1],d=n[5],p=n[9],h=n[2],x=n[6],v=n[10],y=r+d+v;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(x-p)*M,this._y=(l-h)*M,this._z=(u-a)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(x-p)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(l+h)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(l-h)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(p+x)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(u-a)/M,this._x=(l+h)/M,this._y=(p+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,u=e._w,d=n._x,p=n._y,h=n._z,x=n._w;return this._x=r*x+u*d+a*h-l*p,this._y=a*x+u*p+l*d-r*h,this._z=l*x+u*h+r*p-a*d,this._w=u*x-r*d-a*p-l*h,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=a,this._z=l,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-n;return this._w=M*u+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*l+n*this._z,this.normalize(),this}const h=Math.sqrt(p),x=Math.atan2(h,d),v=Math.sin((1-n)*x)/h,y=Math.sin(n*x)/h;return this._w=u*v+this._w*y,this._x=r*v+this._x*y,this._y=a*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,n=0,r=0){se.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(hm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(hm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,u=e.y,d=e.z,p=e.w,h=2*(u*a-d*r),x=2*(d*n-l*a),v=2*(l*r-u*n);return this.x=n+p*h+u*v-d*x,this.y=r+p*x+d*h-l*v,this.z=a+p*v+l*x-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,u=n.x,d=n.y,p=n.z;return this.x=a*p-l*d,this.y=l*u-r*p,this.z=r*d-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Fu.copy(this).projectOnVector(e),this.sub(Fu)}reflect(e){return this.sub(Fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fu=new se,hm=new Ko;class vt{constructor(e,n,r,a,l,u,d,p,h){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,u,d,p,h)}set(e,n,r,a,l,u,d,p,h){const x=this.elements;return x[0]=e,x[1]=a,x[2]=d,x[3]=n,x[4]=l,x[5]=p,x[6]=r,x[7]=u,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,u=r[0],d=r[3],p=r[6],h=r[1],x=r[4],v=r[7],y=r[2],M=r[5],T=r[8],A=a[0],S=a[3],_=a[6],U=a[1],L=a[4],P=a[7],z=a[2],F=a[5],V=a[8];return l[0]=u*A+d*U+p*z,l[3]=u*S+d*L+p*F,l[6]=u*_+d*P+p*V,l[1]=h*A+x*U+v*z,l[4]=h*S+x*L+v*F,l[7]=h*_+x*P+v*V,l[2]=y*A+M*U+T*z,l[5]=y*S+M*L+T*F,l[8]=y*_+M*P+T*V,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],p=e[6],h=e[7],x=e[8];return n*u*x-n*d*h-r*l*x+r*d*p+a*l*h-a*u*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],p=e[6],h=e[7],x=e[8],v=x*u-d*h,y=d*p-x*l,M=h*l-u*p,T=n*v+r*y+a*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(a*h-x*r)*A,e[2]=(d*r-a*u)*A,e[3]=y*A,e[4]=(x*n-a*p)*A,e[5]=(a*l-d*n)*A,e[6]=M*A,e[7]=(r*p-h*n)*A,e[8]=(u*n-r*l)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,u,d){const p=Math.cos(l),h=Math.sin(l);return this.set(r*p,r*h,-r*(p*u+h*d)+u+e,-a*h,a*p,-a*(-h*u+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Ou.makeScale(e,n)),this}rotate(e){return this.premultiply(Ou.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ou.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ou=new vt;function Pg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Wl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function H_(){const s=Wl("canvas");return s.style.display="block",s}const pm={};function Yo(s){s in pm||(pm[s]=!0,console.warn(s))}function V_(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const mm=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gm=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function G_(){const s={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ot&&(a.r=Gi(a.r),a.g=Gi(a.g),a.b=Gi(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ot&&(a.r=Ws(a.r),a.g=Ws(a.g),a.b=Ws(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Mr?Gl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Yo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Yo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[$s]:{primaries:e,whitePoint:r,transfer:Gl,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:r,transfer:Ot,toXYZ:mm,fromXYZ:gm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),s}const Rt=G_();function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Rs;class j_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Rs===void 0&&(Rs=Wl("canvas")),Rs.width=e.width,Rs.height=e.height;const a=Rs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Rs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Gi(l[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Gi(n[r]/255)*255):n[r]=Gi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let W_=0;class wf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?l.push(zu(a[u].image)):l.push(zu(a[u]))}else l=zu(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function zu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?j_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let X_=0;const Bu=new se;class Cn extends Qs{constructor(e=Cn.DEFAULT_IMAGE,n=Cn.DEFAULT_MAPPING,r=gi,a=gi,l=kn,u=Jr,d=ni,p=Wi,h=Cn.DEFAULT_ANISOTROPY,x=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=$o(),this.name="",this.source=new wf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=p,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bu).x}get height(){return this.source.getSize(Bu).y}get depth(){return this.source.getSize(Bu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nd:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case Ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nd:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case Ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=yg;Cn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,n=0,r=0,a=1){$t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const p=e.elements,h=p[0],x=p[4],v=p[8],y=p[1],M=p[5],T=p[9],A=p[2],S=p[6],_=p[10];if(Math.abs(x-y)<.01&&Math.abs(v-A)<.01&&Math.abs(T-S)<.01){if(Math.abs(x+y)<.1&&Math.abs(v+A)<.1&&Math.abs(T+S)<.1&&Math.abs(h+M+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(h+1)/2,P=(M+1)/2,z=(_+1)/2,F=(x+y)/4,V=(v+A)/4,B=(T+S)/4;return L>P&&L>z?L<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(L),a=F/r,l=V/r):P>z?P<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),r=F/a,l=B/a):z<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(z),r=V/l,a=B/l),this.set(r,a,l,n),this}let U=Math.sqrt((S-T)*(S-T)+(v-A)*(v-A)+(y-x)*(y-x));return Math.abs(U)<.001&&(U=1),this.x=(S-T)/U,this.y=(v-A)/U,this.z=(y-x)/U,this.w=Math.acos((h+M+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this.w=Et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this.w=Et(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q_ extends Qs{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n);const a={width:e,height:n,depth:r.depth},l=new Cn(a);this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new wf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends q_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Dg extends Cn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Y_ extends Cn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo{constructor(e=new se(1/0,1/0,1/0),n=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,di):di.fromBufferAttribute(l,u),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),cl.copy(r.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),ul.subVectors(this.max,Fo),Ps.subVectors(e.a,Fo),Ds.subVectors(e.b,Fo),Ns.subVectors(e.c,Fo),mr.subVectors(Ds,Ps),gr.subVectors(Ns,Ds),Vr.subVectors(Ps,Ns);let n=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Vr.z,Vr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Vr.z,0,-Vr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Vr.y,Vr.x,0];return!Hu(n,Ps,Ds,Ns,ul)||(n=[1,0,0,0,1,0,0,0,1],!Hu(n,Ps,Ds,Ns,ul))?!1:(dl.crossVectors(mr,gr),n=[dl.x,dl.y,dl.z],Hu(n,Ps,Ds,Ns,ul))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ui=[new se,new se,new se,new se,new se,new se,new se,new se],di=new se,cl=new Zo,Ps=new se,Ds=new se,Ns=new se,mr=new se,gr=new se,Vr=new se,Fo=new se,ul=new se,dl=new se,Gr=new se;function Hu(s,e,n,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){Gr.fromArray(s,l);const d=a.x*Math.abs(Gr.x)+a.y*Math.abs(Gr.y)+a.z*Math.abs(Gr.z),p=e.dot(Gr),h=n.dot(Gr),x=r.dot(Gr);if(Math.max(-Math.max(p,h,x),Math.min(p,h,x))>d)return!1}return!0}const $_=new Zo,Oo=new se,Vu=new se;class Kl{constructor(e=new se,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):$_.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);const n=Oo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Oo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(Vu)),this.expandByPoint(Oo.copy(e.center).sub(Vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ki=new se,Gu=new se,fl=new se,vr=new se,ju=new se,hl=new se,Wu=new se;class Ng{constructor(e=new se,n=new se(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Gu.copy(e).add(n).multiplyScalar(.5),fl.copy(n).sub(e).normalize(),vr.copy(this.origin).sub(Gu);const l=e.distanceTo(n)*.5,u=-this.direction.dot(fl),d=vr.dot(this.direction),p=-vr.dot(fl),h=vr.lengthSq(),x=Math.abs(1-u*u);let v,y,M,T;if(x>0)if(v=u*p-d,y=u*d-p,T=l*x,v>=0)if(y>=-T)if(y<=T){const A=1/x;v*=A,y*=A,M=v*(v+u*y+2*d)+y*(u*v+y+2*p)+h}else y=l,v=Math.max(0,-(u*y+d)),M=-v*v+y*(y+2*p)+h;else y=-l,v=Math.max(0,-(u*y+d)),M=-v*v+y*(y+2*p)+h;else y<=-T?(v=Math.max(0,-(-u*l+d)),y=v>0?-l:Math.min(Math.max(-l,-p),l),M=-v*v+y*(y+2*p)+h):y<=T?(v=0,y=Math.min(Math.max(-l,-p),l),M=y*(y+2*p)+h):(v=Math.max(0,-(u*l+d)),y=v>0?l:Math.min(Math.max(-l,-p),l),M=-v*v+y*(y+2*p)+h);else y=u>0?-l:l,v=Math.max(0,-(u*y+d)),M=-v*v+y*(y+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Gu).addScaledVector(fl,y),M}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),a=ki.dot(ki)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,u,d,p;const h=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,y=this.origin;return h>=0?(r=(e.min.x-y.x)*h,a=(e.max.x-y.x)*h):(r=(e.max.x-y.x)*h,a=(e.min.x-y.x)*h),x>=0?(l=(e.min.y-y.y)*x,u=(e.max.y-y.y)*x):(l=(e.max.y-y.y)*x,u=(e.min.y-y.y)*x),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),v>=0?(d=(e.min.z-y.z)*v,p=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,p=(e.min.z-y.z)*v),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,r,a,l){ju.subVectors(n,e),hl.subVectors(r,e),Wu.crossVectors(ju,hl);let u=this.direction.dot(Wu),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;vr.subVectors(this.origin,e);const p=d*this.direction.dot(hl.crossVectors(vr,hl));if(p<0)return null;const h=d*this.direction.dot(ju.cross(vr));if(h<0||p+h>u)return null;const x=-d*vr.dot(Wu);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,n,r,a,l,u,d,p,h,x,v,y,M,T,A,S){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,u,d,p,h,x,v,y,M,T,A,S)}set(e,n,r,a,l,u,d,p,h,x,v,y,M,T,A,S){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=l,_[5]=u,_[9]=d,_[13]=p,_[2]=h,_[6]=x,_[10]=v,_[14]=y,_[3]=M,_[7]=T,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ls.setFromMatrixColumn(e,0).length(),l=1/Ls.setFromMatrixColumn(e,1).length(),u=1/Ls.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(a),h=Math.sin(a),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=u*x,M=u*v,T=d*x,A=d*v;n[0]=p*x,n[4]=-p*v,n[8]=h,n[1]=M+T*h,n[5]=y-A*h,n[9]=-d*p,n[2]=A-y*h,n[6]=T+M*h,n[10]=u*p}else if(e.order==="YXZ"){const y=p*x,M=p*v,T=h*x,A=h*v;n[0]=y+A*d,n[4]=T*d-M,n[8]=u*h,n[1]=u*v,n[5]=u*x,n[9]=-d,n[2]=M*d-T,n[6]=A+y*d,n[10]=u*p}else if(e.order==="ZXY"){const y=p*x,M=p*v,T=h*x,A=h*v;n[0]=y-A*d,n[4]=-u*v,n[8]=T+M*d,n[1]=M+T*d,n[5]=u*x,n[9]=A-y*d,n[2]=-u*h,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const y=u*x,M=u*v,T=d*x,A=d*v;n[0]=p*x,n[4]=T*h-M,n[8]=y*h+A,n[1]=p*v,n[5]=A*h+y,n[9]=M*h-T,n[2]=-h,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const y=u*p,M=u*h,T=d*p,A=d*h;n[0]=p*x,n[4]=A-y*v,n[8]=T*v+M,n[1]=v,n[5]=u*x,n[9]=-d*x,n[2]=-h*x,n[6]=M*v+T,n[10]=y-A*v}else if(e.order==="XZY"){const y=u*p,M=u*h,T=d*p,A=d*h;n[0]=p*x,n[4]=-v,n[8]=h*x,n[1]=y*v+A,n[5]=u*x,n[9]=M*v-T,n[2]=T*v-M,n[6]=d*x,n[10]=A*v+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(K_,e,Z_)}lookAt(e,n,r){const a=this.elements;return jn.subVectors(e,n),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),xr.crossVectors(r,jn),xr.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),xr.crossVectors(r,jn)),xr.normalize(),pl.crossVectors(jn,xr),a[0]=xr.x,a[4]=pl.x,a[8]=jn.x,a[1]=xr.y,a[5]=pl.y,a[9]=jn.y,a[2]=xr.z,a[6]=pl.z,a[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,u=r[0],d=r[4],p=r[8],h=r[12],x=r[1],v=r[5],y=r[9],M=r[13],T=r[2],A=r[6],S=r[10],_=r[14],U=r[3],L=r[7],P=r[11],z=r[15],F=a[0],V=a[4],B=a[8],D=a[12],R=a[1],G=a[5],Z=a[9],oe=a[13],ie=a[2],fe=a[6],Q=a[10],pe=a[14],N=a[3],de=a[7],ue=a[11],k=a[15];return l[0]=u*F+d*R+p*ie+h*N,l[4]=u*V+d*G+p*fe+h*de,l[8]=u*B+d*Z+p*Q+h*ue,l[12]=u*D+d*oe+p*pe+h*k,l[1]=x*F+v*R+y*ie+M*N,l[5]=x*V+v*G+y*fe+M*de,l[9]=x*B+v*Z+y*Q+M*ue,l[13]=x*D+v*oe+y*pe+M*k,l[2]=T*F+A*R+S*ie+_*N,l[6]=T*V+A*G+S*fe+_*de,l[10]=T*B+A*Z+S*Q+_*ue,l[14]=T*D+A*oe+S*pe+_*k,l[3]=U*F+L*R+P*ie+z*N,l[7]=U*V+L*G+P*fe+z*de,l[11]=U*B+L*Z+P*Q+z*ue,l[15]=U*D+L*oe+P*pe+z*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],u=e[1],d=e[5],p=e[9],h=e[13],x=e[2],v=e[6],y=e[10],M=e[14],T=e[3],A=e[7],S=e[11],_=e[15];return T*(+l*p*v-a*h*v-l*d*y+r*h*y+a*d*M-r*p*M)+A*(+n*p*M-n*h*y+l*u*y-a*u*M+a*h*x-l*p*x)+S*(+n*h*v-n*d*M-l*u*v+r*u*M+l*d*x-r*h*x)+_*(-a*d*x-n*p*v+n*d*y+a*u*v-r*u*y+r*p*x)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],p=e[6],h=e[7],x=e[8],v=e[9],y=e[10],M=e[11],T=e[12],A=e[13],S=e[14],_=e[15],U=v*S*h-A*y*h+A*p*M-d*S*M-v*p*_+d*y*_,L=T*y*h-x*S*h-T*p*M+u*S*M+x*p*_-u*y*_,P=x*A*h-T*v*h+T*d*M-u*A*M-x*d*_+u*v*_,z=T*v*p-x*A*p-T*d*y+u*A*y+x*d*S-u*v*S,F=n*U+r*L+a*P+l*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/F;return e[0]=U*V,e[1]=(A*y*l-v*S*l-A*a*M+r*S*M+v*a*_-r*y*_)*V,e[2]=(d*S*l-A*p*l+A*a*h-r*S*h-d*a*_+r*p*_)*V,e[3]=(v*p*l-d*y*l-v*a*h+r*y*h+d*a*M-r*p*M)*V,e[4]=L*V,e[5]=(x*S*l-T*y*l+T*a*M-n*S*M-x*a*_+n*y*_)*V,e[6]=(T*p*l-u*S*l-T*a*h+n*S*h+u*a*_-n*p*_)*V,e[7]=(u*y*l-x*p*l+x*a*h-n*y*h-u*a*M+n*p*M)*V,e[8]=P*V,e[9]=(T*v*l-x*A*l-T*r*M+n*A*M+x*r*_-n*v*_)*V,e[10]=(u*A*l-T*d*l+T*r*h-n*A*h-u*r*_+n*d*_)*V,e[11]=(x*d*l-u*v*l-x*r*h+n*v*h+u*r*M-n*d*M)*V,e[12]=z*V,e[13]=(x*A*a-T*v*a+T*r*y-n*A*y-x*r*S+n*v*S)*V,e[14]=(T*d*a-u*A*a-T*r*p+n*A*p+u*r*S-n*d*S)*V,e[15]=(u*v*a-x*d*a+x*r*p-n*v*p-u*r*y+n*d*y)*V,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,u=e.x,d=e.y,p=e.z,h=l*u,x=l*d;return this.set(h*u+r,h*d-a*p,h*p+a*d,0,h*d+a*p,x*d+r,x*p-a*u,0,h*p-a*d,x*p+a*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,u=n._y,d=n._z,p=n._w,h=l+l,x=u+u,v=d+d,y=l*h,M=l*x,T=l*v,A=u*x,S=u*v,_=d*v,U=p*h,L=p*x,P=p*v,z=r.x,F=r.y,V=r.z;return a[0]=(1-(A+_))*z,a[1]=(M+P)*z,a[2]=(T-L)*z,a[3]=0,a[4]=(M-P)*F,a[5]=(1-(y+_))*F,a[6]=(S+U)*F,a[7]=0,a[8]=(T+L)*V,a[9]=(S-U)*V,a[10]=(1-(y+A))*V,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Ls.set(a[0],a[1],a[2]).length();const u=Ls.set(a[4],a[5],a[6]).length(),d=Ls.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],fi.copy(this);const h=1/l,x=1/u,v=1/d;return fi.elements[0]*=h,fi.elements[1]*=h,fi.elements[2]*=h,fi.elements[4]*=x,fi.elements[5]*=x,fi.elements[6]*=x,fi.elements[8]*=v,fi.elements[9]*=v,fi.elements[10]*=v,n.setFromRotationMatrix(fi),r.x=l,r.y=u,r.z=d,this}makePerspective(e,n,r,a,l,u,d=wi,p=!1){const h=this.elements,x=2*l/(n-e),v=2*l/(r-a),y=(n+e)/(n-e),M=(r+a)/(r-a);let T,A;if(p)T=l/(u-l),A=u*l/(u-l);else if(d===wi)T=-(u+l)/(u-l),A=-2*u*l/(u-l);else if(d===jl)T=-u/(u-l),A=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=x,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=v,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,u,d=wi,p=!1){const h=this.elements,x=2/(n-e),v=2/(r-a),y=-(n+e)/(n-e),M=-(r+a)/(r-a);let T,A;if(p)T=1/(u-l),A=u/(u-l);else if(d===wi)T=-2/(u-l),A=-(u+l)/(u-l);else if(d===jl)T=-1/(u-l),A=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=x,h[4]=0,h[8]=0,h[12]=y,h[1]=0,h[5]=v,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=T,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ls=new se,fi=new en,K_=new se(0,0,0),Z_=new se(1,1,1),xr=new se,pl=new se,jn=new se,vm=new en,xm=new Ko;class Xi{constructor(e=0,n=0,r=0,a=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],d=a[8],p=a[1],h=a[5],x=a[9],v=a[2],y=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Et(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,h),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xm.setFromEuler(this),this.setFromQuaternion(xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class Lg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Q_=0;const _m=new se,Is=new Ko,Fi=new en,ml=new se,zo=new se,J_=new se,ey=new Ko,ym=new se(1,0,0),Sm=new se(0,1,0),Mm=new se(0,0,1),Em={type:"added"},ty={type:"removed"},Us={type:"childadded",child:null},Xu={type:"childremoved",child:null};class On extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new se,n=new Xi,r=new Ko,a=new se(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new en},normalMatrix:{value:new vt}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(ym,e)}rotateY(e){return this.rotateOnAxis(Sm,e)}rotateZ(e){return this.rotateOnAxis(Mm,e)}translateOnAxis(e,n){return _m.copy(e).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ym,e)}translateY(e){return this.translateOnAxis(Sm,e)}translateZ(e){return this.translateOnAxis(Mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?ml.copy(e):ml.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(zo,ml,this.up):Fi.lookAt(ml,zo,this.up),this.quaternion.setFromRotationMatrix(Fi),a&&(Fi.extractRotation(a.matrixWorld),Is.setFromRotationMatrix(Fi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Em),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ty),Xu.child=e,this.dispatchEvent(Xu),Xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Em),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,J_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,ey,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let h=0,x=p.length;h<x;h++){const v=p[h];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,h=this.material.length;p<h;p++)d.push(l(e.materials,this.material[p]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(l(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),h=u(e.textures),x=u(e.images),v=u(e.shapes),y=u(e.skeletons),M=u(e.animations),T=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=a,r;function u(d){const p=[];for(const h in d){const x=d[h];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}On.DEFAULT_UP=new se(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new se,Oi=new se,qu=new se,zi=new se,ks=new se,Fs=new se,wm=new se,Yu=new se,$u=new se,Ku=new se,Zu=new $t,Qu=new $t,Ju=new $t;class mi{constructor(e=new se,n=new se,r=new se){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),hi.subVectors(e,n),a.cross(hi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){hi.subVectors(a,n),Oi.subVectors(r,n),qu.subVectors(e,n);const u=hi.dot(hi),d=hi.dot(Oi),p=hi.dot(qu),h=Oi.dot(Oi),x=Oi.dot(qu),v=u*h-d*d;if(v===0)return l.set(0,0,0),null;const y=1/v,M=(h*p-d*x)*y,T=(u*x-d*p)*y;return l.set(1-M-T,T,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,n,r,a,l,u,d,p){return this.getBarycoord(e,n,r,a,zi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,zi.x),p.addScaledVector(u,zi.y),p.addScaledVector(d,zi.z),p)}static getInterpolatedAttribute(e,n,r,a,l,u){return Zu.setScalar(0),Qu.setScalar(0),Ju.setScalar(0),Zu.fromBufferAttribute(e,n),Qu.fromBufferAttribute(e,r),Ju.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Zu,l.x),u.addScaledVector(Qu,l.y),u.addScaledVector(Ju,l.z),u}static isFrontFacing(e,n,r,a){return hi.subVectors(r,n),Oi.subVectors(e,n),hi.cross(Oi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),hi.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return mi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return mi.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let u,d;ks.subVectors(a,r),Fs.subVectors(l,r),Yu.subVectors(e,r);const p=ks.dot(Yu),h=Fs.dot(Yu);if(p<=0&&h<=0)return n.copy(r);$u.subVectors(e,a);const x=ks.dot($u),v=Fs.dot($u);if(x>=0&&v<=x)return n.copy(a);const y=p*v-x*h;if(y<=0&&p>=0&&x<=0)return u=p/(p-x),n.copy(r).addScaledVector(ks,u);Ku.subVectors(e,l);const M=ks.dot(Ku),T=Fs.dot(Ku);if(T>=0&&M<=T)return n.copy(l);const A=M*h-p*T;if(A<=0&&h>=0&&T<=0)return d=h/(h-T),n.copy(r).addScaledVector(Fs,d);const S=x*T-M*v;if(S<=0&&v-x>=0&&M-T>=0)return wm.subVectors(l,a),d=(v-x)/(v-x+(M-T)),n.copy(a).addScaledVector(wm,d);const _=1/(S+A+y);return u=A*_,d=y*_,n.copy(r).addScaledVector(ks,u).addScaledVector(Fs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},gl={h:0,s:0,l:0};function ed(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Dt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,a=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Rt.colorSpaceToWorking(this,a),this}setHSL(e,n,r,a=Rt.workingColorSpace){if(e=B_(e,1),n=Et(n,0,1),r=Et(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=ed(u,l,e+1/3),this.g=ed(u,l,e),this.b=ed(u,l,e-1/3)}return Rt.colorSpaceToWorking(this,a),this}setStyle(e,n=ti){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ti){const r=Ig[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Rt.workingToColorSpace(Mn.copy(this),e),Math.round(Et(Mn.r*255,0,255))*65536+Math.round(Et(Mn.g*255,0,255))*256+Math.round(Et(Mn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.workingToColorSpace(Mn.copy(this),n);const r=Mn.r,a=Mn.g,l=Mn.b,u=Math.max(r,a,l),d=Math.min(r,a,l);let p,h;const x=(d+u)/2;if(d===u)p=0,h=0;else{const v=u-d;switch(h=x<=.5?v/(u+d):v/(2-u-d),u){case r:p=(a-l)/v+(a<l?6:0);break;case a:p=(l-r)/v+2;break;case l:p=(r-a)/v+4;break}p/=6}return e.h=p,e.s=h,e.l=x,e}getRGB(e,n=Rt.workingColorSpace){return Rt.workingToColorSpace(Mn.copy(this),n),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ti){Rt.workingToColorSpace(Mn.copy(this),e);const n=Mn.r,r=Mn.g,a=Mn.b;return e!==ti?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+n,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(_r),e.getHSL(gl);const r=ku(_r.h,gl.h,n),a=ku(_r.s,gl.s,n),l=ku(_r.l,gl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Dt;Dt.NAMES=Ig;let ny=0;class Qo extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=js,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=Md,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==br&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Sd&&(r.blendSrc=this.blendSrc),this.blendDst!==Md&&(r.blendDst=this.blendDst),this.blendEquation!==Zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==um&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}if(n){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ug extends Qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=_g,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new se,vl=new gt;let iy=0;class vi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iy++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=dm,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)vl.fromBufferAttribute(this,n),vl.applyMatrix3(e),this.setXY(n,vl.x,vl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix3(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix4(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Jt.fromBufferAttribute(this,n),Jt.applyNormalMatrix(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Jt.fromBufferAttribute(this,n),Jt.transformDirection(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ko(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ko(n,this.array)),n}setX(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ko(n,this.array)),n}setY(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ko(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ko(n,this.array)),n}setW(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array),a=Un(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array),a=Un(a,this.array),l=Un(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dm&&(e.usage=this.usage),e}}class kg extends vi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Fg extends vi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ji extends vi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let ry=0;const ei=new en,td=new On,Os=new se,Wn=new Zo,Bo=new Zo,dn=new se;class Yi extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pg(e)?Fg:kg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,n,r){return ei.makeTranslation(e,n,r),this.applyMatrix4(ei),this}scale(e,n,r){return ei.makeScale(e,n,r),this.applyMatrix4(ei),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ji(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Wn.setFromBufferAttribute(l),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const d=n[l];Bo.setFromBufferAttribute(d),this.morphTargetsRelative?(dn.addVectors(Wn.min,Bo.min),Wn.expandByPoint(dn),dn.addVectors(Wn.max,Bo.max),Wn.expandByPoint(dn)):(Wn.expandByPoint(Bo.min),Wn.expandByPoint(Bo.max))}Wn.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)dn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(dn));if(n)for(let l=0,u=n.length;l<u;l++){const d=n[l],p=this.morphTargetsRelative;for(let h=0,x=d.count;h<x;h++)dn.fromBufferAttribute(d,h),p&&(Os.fromBufferAttribute(e,h),dn.add(Os)),a=Math.max(a,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let B=0;B<r.count;B++)d[B]=new se,p[B]=new se;const h=new se,x=new se,v=new se,y=new gt,M=new gt,T=new gt,A=new se,S=new se;function _(B,D,R){h.fromBufferAttribute(r,B),x.fromBufferAttribute(r,D),v.fromBufferAttribute(r,R),y.fromBufferAttribute(l,B),M.fromBufferAttribute(l,D),T.fromBufferAttribute(l,R),x.sub(h),v.sub(h),M.sub(y),T.sub(y);const G=1/(M.x*T.y-T.x*M.y);isFinite(G)&&(A.copy(x).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(G),S.copy(v).multiplyScalar(M.x).addScaledVector(x,-T.x).multiplyScalar(G),d[B].add(A),d[D].add(A),d[R].add(A),p[B].add(S),p[D].add(S),p[R].add(S))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let B=0,D=U.length;B<D;++B){const R=U[B],G=R.start,Z=R.count;for(let oe=G,ie=G+Z;oe<ie;oe+=3)_(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const L=new se,P=new se,z=new se,F=new se;function V(B){z.fromBufferAttribute(a,B),F.copy(z);const D=d[B];L.copy(D),L.sub(z.multiplyScalar(z.dot(D))).normalize(),P.crossVectors(F,D);const G=P.dot(p[B])<0?-1:1;u.setXYZW(B,L.x,L.y,L.z,G)}for(let B=0,D=U.length;B<D;++B){const R=U[B],G=R.start,Z=R.count;for(let oe=G,ie=G+Z;oe<ie;oe+=3)V(e.getX(oe+0)),V(e.getX(oe+1)),V(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const a=new se,l=new se,u=new se,d=new se,p=new se,h=new se,x=new se,v=new se;if(e)for(let y=0,M=e.count;y<M;y+=3){const T=e.getX(y+0),A=e.getX(y+1),S=e.getX(y+2);a.fromBufferAttribute(n,T),l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),x.subVectors(u,l),v.subVectors(a,l),x.cross(v),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,A),h.fromBufferAttribute(r,S),d.add(x),p.add(x),h.add(x),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let y=0,M=n.count;y<M;y+=3)a.fromBufferAttribute(n,y+0),l.fromBufferAttribute(n,y+1),u.fromBufferAttribute(n,y+2),x.subVectors(u,l),v.subVectors(a,l),x.cross(v),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)dn.fromBufferAttribute(e,n),dn.normalize(),e.setXYZ(n,dn.x,dn.y,dn.z)}toNonIndexed(){function e(d,p){const h=d.array,x=d.itemSize,v=d.normalized,y=new h.constructor(p.length*x);let M=0,T=0;for(let A=0,S=p.length;A<S;A++){d.isInterleavedBufferAttribute?M=p[A]*d.data.stride+d.offset:M=p[A]*x;for(let _=0;_<x;_++)y[T++]=h[M++]}return new vi(y,x,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yi,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],h=e(p,r);n.setAttribute(d,h)}const l=this.morphAttributes;for(const d in l){const p=[],h=l[d];for(let x=0,v=h.length;x<v;x++){const y=h[x],M=e(y,r);p.push(M)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const h=u[d];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],x=[];for(let v=0,y=h.length;v<y;v++){const M=h[v];x.push(M.toJSON(e.data))}x.length>0&&(a[p]=x,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const h in a){const x=a[h];this.setAttribute(h,x.clone(n))}const l=e.morphAttributes;for(const h in l){const x=[],v=l[h];for(let y=0,M=v.length;y<M;y++)x.push(v[y].clone(n));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,x=u.length;h<x;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bm=new en,jr=new Ng,xl=new Kl,Tm=new se,_l=new se,yl=new se,Sl=new se,nd=new se,Ml=new se,Am=new se,El=new se;class ii extends On{constructor(e=new Yi,n=new Ug){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){Ml.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const x=d[p],v=l[p];x!==0&&(nd.fromBufferAttribute(v,e),u?Ml.addScaledVector(nd,x):Ml.addScaledVector(nd.sub(n),x))}n.add(Ml)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xl.copy(r.boundingSphere),xl.applyMatrix4(l),jr.copy(e.ray).recast(e.near),!(xl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(xl,Tm)===null||jr.origin.distanceToSquared(Tm)>(e.far-e.near)**2))&&(bm.copy(l).invert(),jr.copy(e.ray).applyMatrix4(bm),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,u=this.material,d=l.index,p=l.attributes.position,h=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,y=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let T=0,A=y.length;T<A;T++){const S=y[T],_=u[S.materialIndex],U=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let P=U,z=L;P<z;P+=3){const F=d.getX(P),V=d.getX(P+1),B=d.getX(P+2);a=wl(this,_,e,r,h,x,v,F,V,B),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const T=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let S=T,_=A;S<_;S+=3){const U=d.getX(S),L=d.getX(S+1),P=d.getX(S+2);a=wl(this,u,e,r,h,x,v,U,L,P),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let T=0,A=y.length;T<A;T++){const S=y[T],_=u[S.materialIndex],U=Math.max(S.start,M.start),L=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let P=U,z=L;P<z;P+=3){const F=P,V=P+1,B=P+2;a=wl(this,_,e,r,h,x,v,F,V,B),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const T=Math.max(0,M.start),A=Math.min(p.count,M.start+M.count);for(let S=T,_=A;S<_;S+=3){const U=S,L=S+1,P=S+2;a=wl(this,u,e,r,h,x,v,U,L,P),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function sy(s,e,n,r,a,l,u,d){let p;if(e.side===Fn?p=r.intersectTriangle(u,l,a,!0,d):p=r.intersectTriangle(a,l,u,e.side===br,d),p===null)return null;El.copy(d),El.applyMatrix4(s.matrixWorld);const h=n.ray.origin.distanceTo(El);return h<n.near||h>n.far?null:{distance:h,point:El.clone(),object:s}}function wl(s,e,n,r,a,l,u,d,p,h){s.getVertexPosition(d,_l),s.getVertexPosition(p,yl),s.getVertexPosition(h,Sl);const x=sy(s,e,n,r,_l,yl,Sl,Am);if(x){const v=new se;mi.getBarycoord(Am,_l,yl,Sl,v),a&&(x.uv=mi.getInterpolatedAttribute(a,d,p,h,v,new gt)),l&&(x.uv1=mi.getInterpolatedAttribute(l,d,p,h,v,new gt)),u&&(x.normal=mi.getInterpolatedAttribute(u,d,p,h,v,new se),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:d,b:p,c:h,normal:new se,materialIndex:0};mi.getNormal(_l,yl,Sl,y.normal),x.face=y,x.barycoord=v}return x}class Jo extends Yi{constructor(e=1,n=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const d=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const p=[],h=[],x=[],v=[];let y=0,M=0;T("z","y","x",-1,-1,r,n,e,u,l,0),T("z","y","x",1,-1,r,n,-e,u,l,1),T("x","z","y",1,1,e,r,n,a,u,2),T("x","z","y",1,-1,e,r,-n,a,u,3),T("x","y","z",1,-1,e,n,r,a,l,4),T("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(p),this.setAttribute("position",new ji(h,3)),this.setAttribute("normal",new ji(x,3)),this.setAttribute("uv",new ji(v,2));function T(A,S,_,U,L,P,z,F,V,B,D){const R=P/V,G=z/B,Z=P/2,oe=z/2,ie=F/2,fe=V+1,Q=B+1;let pe=0,N=0;const de=new se;for(let ue=0;ue<Q;ue++){const k=ue*G-oe;for(let te=0;te<fe;te++){const me=te*R-Z;de[A]=me*U,de[S]=k*L,de[_]=ie,h.push(de.x,de.y,de.z),de[A]=0,de[S]=0,de[_]=F>0?1:-1,x.push(de.x,de.y,de.z),v.push(te/V),v.push(1-ue/B),pe+=1}}for(let ue=0;ue<B;ue++)for(let k=0;k<V;k++){const te=y+k+fe*ue,me=y+k+fe*(ue+1),Ce=y+(k+1)+fe*(ue+1),Ue=y+(k+1)+fe*ue;p.push(te,me,Ue),p.push(me,Ce,Ue),N+=6}d.addGroup(M,N,D),M+=N,y+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function An(s){const e={};for(let n=0;n<s.length;n++){const r=Ks(s[n]);for(const a in r)e[a]=r[a]}return e}function oy(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Og(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const ay={clone:Ks,merge:An};var ly=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ly,this.fragmentShader=cy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=oy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Xl extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new se,Cm=new gt,Rm=new gt;class pi extends Xl{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=cf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cf*2*Math.atan(Math.tan(Uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,n){return this.getViewBounds(e,Cm,Rm),n.subVectors(Rm,Cm)}setViewOffset(e,n,r,a,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Uu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;l+=u.offsetX*a/p,n-=u.offsetY*r/h,a*=u.width/p,r*=u.height/h}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zs=-90,Bs=1;class uy extends On{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new pi(zs,Bs,e,n);a.layers=this.layers,this.add(a);const l=new pi(zs,Bs,e,n);l.layers=this.layers,this.add(l);const u=new pi(zs,Bs,e,n);u.layers=this.layers,this.add(u);const d=new pi(zs,Bs,e,n);d.layers=this.layers,this.add(d);const p=new pi(zs,Bs,e,n);p.layers=this.layers,this.add(p);const h=new pi(zs,Bs,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,u,d,p]=n;for(const h of n)this.remove(h);if(e===wi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===jl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,p,h,x]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,u),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,h),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,a),e.render(n,x),e.setRenderTarget(v,y,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class zg extends Cn{constructor(e=[],n=qs,r,a,l,u,d,p,h,x){super(e,n,r,a,l,u,d,p,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dy extends Tr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new zg(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Jo(5,5,5),l=new qi({name:"CubemapFromEquirect",uniforms:Ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Er});l.uniforms.tEquirect.value=n;const u=new ii(a,l),d=n.minFilter;return n.minFilter===Jr&&(n.minFilter=kn),new uy(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(l)}}class bl extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fy={type:"move"};class id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,u=null;const d=this._targetRay,p=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const A of e.hand.values()){const S=n.getJointPose(A,r),_=this._getHandJoint(h,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const x=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],y=x.position.distanceTo(v.position),M=.02,T=.005;h.inputState.pinching&&y>M+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&y<=M-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(fy)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new bl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Pm extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class hy extends Cn{constructor(e=null,n=1,r=1,a,l,u,d,p,h=Xn,x=Xn,v,y){super(null,u,d,p,h,x,a,l,v,y),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rd=new se,py=new se,my=new vt;class $r{constructor(e=new se(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=rd.subVectors(r,n).cross(py.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(rd),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||my.getNormalMatrix(e),a=this.coplanarPoint(rd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wr=new Kl,gy=new gt(.5,.5),Tl=new se;class Bg{constructor(e=new $r,n=new $r,r=new $r,a=new $r,l=new $r,u=new $r){this.planes=[e,n,r,a,l,u]}set(e,n,r,a,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=wi,r=!1){const a=this.planes,l=e.elements,u=l[0],d=l[1],p=l[2],h=l[3],x=l[4],v=l[5],y=l[6],M=l[7],T=l[8],A=l[9],S=l[10],_=l[11],U=l[12],L=l[13],P=l[14],z=l[15];if(a[0].setComponents(h-u,M-x,_-T,z-U).normalize(),a[1].setComponents(h+u,M+x,_+T,z+U).normalize(),a[2].setComponents(h+d,M+v,_+A,z+L).normalize(),a[3].setComponents(h-d,M-v,_-A,z-L).normalize(),r)a[4].setComponents(p,y,S,P).normalize(),a[5].setComponents(h-p,M-y,_-S,z-P).normalize();else if(a[4].setComponents(h-p,M-y,_-S,z-P).normalize(),n===wi)a[5].setComponents(h+p,M+y,_+S,z+P).normalize();else if(n===jl)a[5].setComponents(p,y,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){Wr.center.set(0,0,0);const n=gy.distanceTo(e.center);return Wr.radius=.7071067811865476+n,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Tl.x=a.normal.x>0?e.max.x:e.min.x,Tl.y=a.normal.y>0?e.max.y:e.min.y,Tl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vy extends Qo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ql=new se,Yl=new se,Dm=new en,Ho=new Ng,Al=new Kl,sd=new se,Nm=new se;class xy extends On{constructor(e=new Yi,n=new vy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,l=n.count;a<l;a++)ql.fromBufferAttribute(n,a-1),Yl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=ql.distanceTo(Yl);e.setAttribute("lineDistance",new ji(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Al.copy(r.boundingSphere),Al.applyMatrix4(a),Al.radius+=l,e.ray.intersectsSphere(Al)===!1)return;Dm.copy(a).invert(),Ho.copy(e.ray).applyMatrix4(Dm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,h=this.isLineSegments?2:1,x=r.index,y=r.attributes.position;if(x!==null){const M=Math.max(0,u.start),T=Math.min(x.count,u.start+u.count);for(let A=M,S=T-1;A<S;A+=h){const _=x.getX(A),U=x.getX(A+1),L=Cl(this,e,Ho,p,_,U,A);L&&n.push(L)}if(this.isLineLoop){const A=x.getX(T-1),S=x.getX(M),_=Cl(this,e,Ho,p,A,S,T-1);_&&n.push(_)}}else{const M=Math.max(0,u.start),T=Math.min(y.count,u.start+u.count);for(let A=M,S=T-1;A<S;A+=h){const _=Cl(this,e,Ho,p,A,A+1,A);_&&n.push(_)}if(this.isLineLoop){const A=Cl(this,e,Ho,p,T-1,M,T-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Cl(s,e,n,r,a,l,u){const d=s.geometry.attributes.position;if(ql.fromBufferAttribute(d,a),Yl.fromBufferAttribute(d,l),n.distanceSqToSegment(ql,Yl,sd,Nm)>r)return;sd.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(sd);if(!(h<e.near||h>e.far))return{distance:h,point:Nm.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const Lm=new se,Im=new se;class _y extends xy{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,l=n.count;a<l;a+=2)Lm.fromBufferAttribute(n,a),Im.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Lm.distanceTo(Im);e.setAttribute("lineDistance",new ji(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hg extends Cn{constructor(e,n,r=ts,a,l,u,d=Xn,p=Xn,h,x=Xo,v=1){if(x!==Xo&&x!==qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:n,depth:v};super(y,a,l,u,d,p,x,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Vg extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class es extends Yi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,u=n/2,d=Math.floor(r),p=Math.floor(a),h=d+1,x=p+1,v=e/d,y=n/p,M=[],T=[],A=[],S=[];for(let _=0;_<x;_++){const U=_*y-u;for(let L=0;L<h;L++){const P=L*v-l;T.push(P,-U,0),A.push(0,0,1),S.push(L/d),S.push(1-_/p)}}for(let _=0;_<p;_++)for(let U=0;U<d;U++){const L=U+h*_,P=U+h*(_+1),z=U+1+h*(_+1),F=U+1+h*_;M.push(L,P,F),M.push(P,z,F)}this.setIndex(M),this.setAttribute("position",new ji(T,3)),this.setAttribute("normal",new ji(A,3)),this.setAttribute("uv",new ji(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rl extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yy extends Qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=R_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sy extends Qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class My extends Xl{constructor(e=-1,n=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ey extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Um(s,e,n,r){const a=by(r);switch(n){case bg:return s*e;case Ag:return s*e/a.components*a.byteLength;case Sf:return s*e/a.components*a.byteLength;case Cg:return s*e*2/a.components*a.byteLength;case Mf:return s*e*2/a.components*a.byteLength;case Tg:return s*e*3/a.components*a.byteLength;case ni:return s*e*4/a.components*a.byteLength;case Ef:return s*e*4/a.components*a.byteLength;case Fl:case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zl:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ud:case Fd:return Math.max(s,16)*Math.max(e,8)/4;case Id:case kd:return Math.max(s,8)*Math.max(e,8)/2;case Od:case zd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case jd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case qd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case $d:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ef:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case tf:case nf:case rf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case sf:case of:return Math.ceil(s/4)*Math.ceil(e/4)*8;case af:case lf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function by(s){switch(s){case Wi:case Sg:return{byteLength:1,components:1};case jo:case Mg:case Zs:return{byteLength:2,components:1};case _f:case yf:return{byteLength:2,components:4};case ts:case xf:case Ei:return{byteLength:4,components:1};case Eg:case wg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gg(){let s=null,e=!1,n=null,r=null;function a(l,u){n(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function Ty(s){const e=new WeakMap;function n(d,p){const h=d.array,x=d.usage,v=h.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,h,x),d.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,h){const x=p.array,v=p.updateRanges;if(s.bindBuffer(h,d),v.length===0)s.bufferSubData(h,0,x);else{v.sort((M,T)=>M.start-T.start);let y=0;for(let M=1;M<v.length;M++){const T=v[y],A=v[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++y,v[y]=A)}v.length=y+1;for(let M=0,T=v.length;M<T;M++){const A=v[M];s.bufferSubData(h,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,n(d,p));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,p),h.version=d.version}}return{get:a,remove:l,update:u}}var Ay=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ry=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ny=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ly=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ky=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Oy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,By=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ky=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iS="gl_FragColor = linearToOutputTexel( gl_FragColor );",rS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_S=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ES=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,AS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,CS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,US=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,HS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,WS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$S=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,KS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_M=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,WM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,YM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$M=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,t1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,r1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:Ay,alphahash_pars_fragment:Cy,alphamap_fragment:Ry,alphamap_pars_fragment:Py,alphatest_fragment:Dy,alphatest_pars_fragment:Ny,aomap_fragment:Ly,aomap_pars_fragment:Iy,batching_pars_vertex:Uy,batching_vertex:ky,begin_vertex:Fy,beginnormal_vertex:Oy,bsdfs:zy,iridescence_fragment:By,bumpmap_pars_fragment:Hy,clipping_planes_fragment:Vy,clipping_planes_pars_fragment:Gy,clipping_planes_pars_vertex:jy,clipping_planes_vertex:Wy,color_fragment:Xy,color_pars_fragment:qy,color_pars_vertex:Yy,color_vertex:$y,common:Ky,cube_uv_reflection_fragment:Zy,defaultnormal_vertex:Qy,displacementmap_pars_vertex:Jy,displacementmap_vertex:eS,emissivemap_fragment:tS,emissivemap_pars_fragment:nS,colorspace_fragment:iS,colorspace_pars_fragment:rS,envmap_fragment:sS,envmap_common_pars_fragment:oS,envmap_pars_fragment:aS,envmap_pars_vertex:lS,envmap_physical_pars_fragment:_S,envmap_vertex:cS,fog_vertex:uS,fog_pars_vertex:dS,fog_fragment:fS,fog_pars_fragment:hS,gradientmap_pars_fragment:pS,lightmap_pars_fragment:mS,lights_lambert_fragment:gS,lights_lambert_pars_fragment:vS,lights_pars_begin:xS,lights_toon_fragment:yS,lights_toon_pars_fragment:SS,lights_phong_fragment:MS,lights_phong_pars_fragment:ES,lights_physical_fragment:wS,lights_physical_pars_fragment:bS,lights_fragment_begin:TS,lights_fragment_maps:AS,lights_fragment_end:CS,logdepthbuf_fragment:RS,logdepthbuf_pars_fragment:PS,logdepthbuf_pars_vertex:DS,logdepthbuf_vertex:NS,map_fragment:LS,map_pars_fragment:IS,map_particle_fragment:US,map_particle_pars_fragment:kS,metalnessmap_fragment:FS,metalnessmap_pars_fragment:OS,morphinstance_vertex:zS,morphcolor_vertex:BS,morphnormal_vertex:HS,morphtarget_pars_vertex:VS,morphtarget_vertex:GS,normal_fragment_begin:jS,normal_fragment_maps:WS,normal_pars_fragment:XS,normal_pars_vertex:qS,normal_vertex:YS,normalmap_pars_fragment:$S,clearcoat_normal_fragment_begin:KS,clearcoat_normal_fragment_maps:ZS,clearcoat_pars_fragment:QS,iridescence_pars_fragment:JS,opaque_fragment:eM,packing:tM,premultiplied_alpha_fragment:nM,project_vertex:iM,dithering_fragment:rM,dithering_pars_fragment:sM,roughnessmap_fragment:oM,roughnessmap_pars_fragment:aM,shadowmap_pars_fragment:lM,shadowmap_pars_vertex:cM,shadowmap_vertex:uM,shadowmask_pars_fragment:dM,skinbase_vertex:fM,skinning_pars_vertex:hM,skinning_vertex:pM,skinnormal_vertex:mM,specularmap_fragment:gM,specularmap_pars_fragment:vM,tonemapping_fragment:xM,tonemapping_pars_fragment:_M,transmission_fragment:yM,transmission_pars_fragment:SM,uv_pars_fragment:MM,uv_pars_vertex:EM,uv_vertex:wM,worldpos_vertex:bM,background_vert:TM,background_frag:AM,backgroundCube_vert:CM,backgroundCube_frag:RM,cube_vert:PM,cube_frag:DM,depth_vert:NM,depth_frag:LM,distanceRGBA_vert:IM,distanceRGBA_frag:UM,equirect_vert:kM,equirect_frag:FM,linedashed_vert:OM,linedashed_frag:zM,meshbasic_vert:BM,meshbasic_frag:HM,meshlambert_vert:VM,meshlambert_frag:GM,meshmatcap_vert:jM,meshmatcap_frag:WM,meshnormal_vert:XM,meshnormal_frag:qM,meshphong_vert:YM,meshphong_frag:$M,meshphysical_vert:KM,meshphysical_frag:ZM,meshtoon_vert:QM,meshtoon_frag:JM,points_vert:e1,points_frag:t1,shadow_vert:n1,shadow_frag:i1,sprite_vert:r1,sprite_frag:s1},Le={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Mi={basic:{uniforms:An([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:An([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Dt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:An([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:An([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:An([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Dt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:An([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:An([Le.points,Le.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:An([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:An([Le.common,Le.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:An([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:An([Le.sprite,Le.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:An([Le.common,Le.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:An([Le.lights,Le.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Mi.physical={uniforms:An([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Pl={r:0,b:0,g:0},Xr=new Xi,o1=new en;function a1(s,e,n,r,a,l,u){const d=new Dt(0);let p=l===!0?0:1,h,x,v=null,y=0,M=null;function T(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?n:e).get(P)),P}function A(L){let P=!1;const z=T(L);z===null?_(d,p):z&&z.isColor&&(_(z,1),P=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(L,P){const z=T(P);z&&(z.isCubeTexture||z.mapping===$l)?(x===void 0&&(x=new ii(new Jo(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Ks(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(F,V,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(x)),Xr.copy(P.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),x.material.uniforms.envMap.value=z,x.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(o1.makeRotationFromEuler(Xr)),x.material.toneMapped=Rt.getTransfer(z.colorSpace)!==Ot,(v!==z||y!==z.version||M!==s.toneMapping)&&(x.material.needsUpdate=!0,v=z,y=z.version,M=s.toneMapping),x.layers.enableAll(),L.unshift(x,x.geometry,x.material,0,0,null)):z&&z.isTexture&&(h===void 0&&(h=new ii(new es(2,2),new qi({name:"BackgroundMaterial",uniforms:Ks(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(h)),h.material.uniforms.t2D.value=z,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(z.colorSpace)!==Ot,z.matrixAutoUpdate===!0&&z.updateMatrix(),h.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||y!==z.version||M!==s.toneMapping)&&(h.material.needsUpdate=!0,v=z,y=z.version,M=s.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function _(L,P){L.getRGB(Pl,Og(s)),r.buffers.color.setClear(Pl.r,Pl.g,Pl.b,P,u)}function U(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,P=1){d.set(L),p=P,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,_(d,p)},render:A,addToRenderList:S,dispose:U}}function l1(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=y(null);let l=a,u=!1;function d(R,G,Z,oe,ie){let fe=!1;const Q=v(oe,Z,G);l!==Q&&(l=Q,h(l.object)),fe=M(R,oe,Z,ie),fe&&T(R,oe,Z,ie),ie!==null&&e.update(ie,s.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,P(R,G,Z,oe),ie!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function p(){return s.createVertexArray()}function h(R){return s.bindVertexArray(R)}function x(R){return s.deleteVertexArray(R)}function v(R,G,Z){const oe=Z.wireframe===!0;let ie=r[R.id];ie===void 0&&(ie={},r[R.id]=ie);let fe=ie[G.id];fe===void 0&&(fe={},ie[G.id]=fe);let Q=fe[oe];return Q===void 0&&(Q=y(p()),fe[oe]=Q),Q}function y(R){const G=[],Z=[],oe=[];for(let ie=0;ie<n;ie++)G[ie]=0,Z[ie]=0,oe[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:oe,object:R,attributes:{},index:null}}function M(R,G,Z,oe){const ie=l.attributes,fe=G.attributes;let Q=0;const pe=Z.getAttributes();for(const N in pe)if(pe[N].location>=0){const ue=ie[N];let k=fe[N];if(k===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(k=R.instanceColor)),ue===void 0||ue.attribute!==k||k&&ue.data!==k.data)return!0;Q++}return l.attributesNum!==Q||l.index!==oe}function T(R,G,Z,oe){const ie={},fe=G.attributes;let Q=0;const pe=Z.getAttributes();for(const N in pe)if(pe[N].location>=0){let ue=fe[N];ue===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor));const k={};k.attribute=ue,ue&&ue.data&&(k.data=ue.data),ie[N]=k,Q++}l.attributes=ie,l.attributesNum=Q,l.index=oe}function A(){const R=l.newAttributes;for(let G=0,Z=R.length;G<Z;G++)R[G]=0}function S(R){_(R,0)}function _(R,G){const Z=l.newAttributes,oe=l.enabledAttributes,ie=l.attributeDivisors;Z[R]=1,oe[R]===0&&(s.enableVertexAttribArray(R),oe[R]=1),ie[R]!==G&&(s.vertexAttribDivisor(R,G),ie[R]=G)}function U(){const R=l.newAttributes,G=l.enabledAttributes;for(let Z=0,oe=G.length;Z<oe;Z++)G[Z]!==R[Z]&&(s.disableVertexAttribArray(Z),G[Z]=0)}function L(R,G,Z,oe,ie,fe,Q){Q===!0?s.vertexAttribIPointer(R,G,Z,ie,fe):s.vertexAttribPointer(R,G,Z,oe,ie,fe)}function P(R,G,Z,oe){A();const ie=oe.attributes,fe=Z.getAttributes(),Q=G.defaultAttributeValues;for(const pe in fe){const N=fe[pe];if(N.location>=0){let de=ie[pe];if(de===void 0&&(pe==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),pe==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){const ue=de.normalized,k=de.itemSize,te=e.get(de);if(te===void 0)continue;const me=te.buffer,Ce=te.type,Ue=te.bytesPerElement,J=Ce===s.INT||Ce===s.UNSIGNED_INT||de.gpuType===xf;if(de.isInterleavedBufferAttribute){const re=de.data,xe=re.stride,Re=de.offset;if(re.isInstancedInterleavedBuffer){for(let De=0;De<N.locationSize;De++)_(N.location+De,re.meshPerAttribute);R.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let De=0;De<N.locationSize;De++)S(N.location+De);s.bindBuffer(s.ARRAY_BUFFER,me);for(let De=0;De<N.locationSize;De++)L(N.location+De,k/N.locationSize,Ce,ue,xe*Ue,(Re+k/N.locationSize*De)*Ue,J)}else{if(de.isInstancedBufferAttribute){for(let re=0;re<N.locationSize;re++)_(N.location+re,de.meshPerAttribute);R.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let re=0;re<N.locationSize;re++)S(N.location+re);s.bindBuffer(s.ARRAY_BUFFER,me);for(let re=0;re<N.locationSize;re++)L(N.location+re,k/N.locationSize,Ce,ue,k*Ue,k/N.locationSize*re*Ue,J)}}else if(Q!==void 0){const ue=Q[pe];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(N.location,ue);break;case 3:s.vertexAttrib3fv(N.location,ue);break;case 4:s.vertexAttrib4fv(N.location,ue);break;default:s.vertexAttrib1fv(N.location,ue)}}}}U()}function z(){B();for(const R in r){const G=r[R];for(const Z in G){const oe=G[Z];for(const ie in oe)x(oe[ie].object),delete oe[ie];delete G[Z]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const G=r[R.id];for(const Z in G){const oe=G[Z];for(const ie in oe)x(oe[ie].object),delete oe[ie];delete G[Z]}delete r[R.id]}function V(R){for(const G in r){const Z=r[G];if(Z[R.id]===void 0)continue;const oe=Z[R.id];for(const ie in oe)x(oe[ie].object),delete oe[ie];delete Z[R.id]}}function B(){D(),u=!0,l!==a&&(l=a,h(l.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:B,resetDefaultState:D,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfProgram:V,initAttributes:A,enableAttribute:S,disableUnusedAttributes:U}}function c1(s,e,n){let r;function a(h){r=h}function l(h,x){s.drawArrays(r,h,x),n.update(x,r,1)}function u(h,x,v){v!==0&&(s.drawArraysInstanced(r,h,x,v),n.update(x,r,v))}function d(h,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,x,0,v);let M=0;for(let T=0;T<v;T++)M+=x[T];n.update(M,r,1)}function p(h,x,v,y){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<h.length;T++)u(h[T],x[T],y[T]);else{M.multiDrawArraysInstancedWEBGL(r,h,0,x,0,y,0,v);let T=0;for(let A=0;A<v;A++)T+=x[A]*y[A];n.update(T,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function u1(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(V){return!(V!==ni&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(V){const B=V===Zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==Wi&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Ei&&!B)}function p(V){if(V==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const x=p(h);x!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const v=n.logarithmicDepthBuffer===!0,y=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=T>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:P,vertexTextures:z,maxSamples:F}}function d1(s){const e=this;let n=null,r=0,a=!1,l=!1;const u=new $r,d=new vt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const M=v.length!==0||y||r!==0||a;return a=y,r=v.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){n=x(v,y,0)},this.setState=function(v,y,M){const T=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,_=s.get(v);if(!a||T===null||T.length===0||l&&!S)l?x(null):h();else{const U=l?0:r,L=U*4;let P=_.clippingState||null;p.value=P,P=x(T,y,L,M);for(let z=0;z!==L;++z)P[z]=n[z];_.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function h(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,y,M,T){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=p.value,T!==!0||S===null){const _=M+A*4,U=y.matrixWorldInverse;d.getNormalMatrix(U),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,P=M;L!==A;++L,P+=4)u.copy(v[L]).applyMatrix4(U,d),u.normal.toArray(S,P),S[P+3]=u.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function f1(s){let e=new WeakMap;function n(u,d){return d===Pd?u.mapping=qs:d===Dd&&(u.mapping=Ys),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Pd||d===Dd)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const h=new dy(p.height);return h.fromEquirectangularTexture(s,u),e.set(u,h),u.addEventListener("dispose",a),n(h.texture,u.mapping)}else return null}}return u}function a(u){const d=u.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Gs=4,km=[.125,.215,.35,.446,.526,.582],Qr=20,od=new My,Fm=new Dt;let ad=null,ld=0,cd=0,ud=!1;const Kr=(1+Math.sqrt(5))/2,Hs=1/Kr,Om=[new se(-Kr,Hs,0),new se(Kr,Hs,0),new se(-Hs,0,Kr),new se(Hs,0,Kr),new se(0,Kr,-Hs),new se(0,Kr,Hs),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)],h1=new se;class zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,l={}){const{size:u=256,position:d=h1}=l;ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,a,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,ld,cd),this._renderer.xr.enabled=ud,e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Zs,format:ni,colorSpace:$s,depthBuffer:!1},a=Bm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p1(l)),this._blurMaterial=m1(l,e,n)}return a}_compileMaterial(e){const n=new ii(this._lodPlanes[0],e);this._renderer.compile(n,od)}_sceneToCubeUV(e,n,r,a,l){const p=new pi(90,1,n,r),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,M=v.toneMapping;v.getClearColor(Fm),v.toneMapping=wr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(a),v.clearDepth(),v.setRenderTarget(null));const A=new Ug({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),S=new ii(new Jo,A);let _=!1;const U=e.background;U?U.isColor&&(A.color.copy(U),e.background=null,_=!0):(A.color.copy(Fm),_=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(p.up.set(0,h[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+x[L],l.y,l.z)):P===1?(p.up.set(0,0,h[L]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+x[L],l.z)):(p.up.set(0,h[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+x[L]));const z=this._cubeSize;Dl(a,P*z,L>2?z:0,z,z),v.setRenderTarget(a),_&&v.render(S,p),v.render(e,p)}S.geometry.dispose(),S.material.dispose(),v.toneMapping=M,v.autoClear=y,e.background=U}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===qs||e.mapping===Ys;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hm());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new ii(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;Dl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,od)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Om[(a-l-1)%Om.length];this._blur(e,l-1,l,u,d)}n.autoClear=r}_blur(e,n,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,u,d){const p=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,v=new ii(this._lodPlanes[a],h),y=h.uniforms,M=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Qr-1),A=l/T,S=isFinite(l)?1+Math.floor(x*A):Qr;S>Qr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Qr}`);const _=[];let U=0;for(let V=0;V<Qr;++V){const B=V/A,D=Math.exp(-B*B/2);_.push(D),V===0?U+=D:V<S&&(U+=2*D)}for(let V=0;V<_.length;V++)_[V]=_[V]/U;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=T,y.mipInt.value=L-r;const P=this._sizeLods[a],z=3*P*(a>L-Gs?a-L+Gs:0),F=4*(this._cubeSize-P);Dl(n,z,F,3*P,2*P),p.setRenderTarget(n),p.render(v,od)}}function p1(s){const e=[],n=[],r=[];let a=s;const l=s-Gs+1+km.length;for(let u=0;u<l;u++){const d=Math.pow(2,a);n.push(d);let p=1/d;u>s-Gs?p=km[u-s+Gs-1]:u===0&&(p=0),r.push(p);const h=1/(d-2),x=-h,v=1+h,y=[x,x,v,x,v,v,x,x,v,v,x,v],M=6,T=6,A=3,S=2,_=1,U=new Float32Array(A*T*M),L=new Float32Array(S*T*M),P=new Float32Array(_*T*M);for(let F=0;F<M;F++){const V=F%3*2/3-1,B=F>2?0:-1,D=[V,B,0,V+2/3,B,0,V+2/3,B+1,0,V,B,0,V+2/3,B+1,0,V,B+1,0];U.set(D,A*T*F),L.set(y,S*T*F);const R=[F,F,F,F,F,F];P.set(R,_*T*F)}const z=new Yi;z.setAttribute("position",new vi(U,A)),z.setAttribute("uv",new vi(L,S)),z.setAttribute("faceIndex",new vi(P,_)),e.push(z),a>Gs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Bm(s,e,n){const r=new Tr(s,e,n);return r.texture.mapping=$l,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Dl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function m1(s,e,n){const r=new Float32Array(Qr),a=new se(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Hm(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Vm(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function bf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function g1(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,h=p===Pd||p===Dd,x=p===qs||p===Ys;if(h||x){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new zm(s)),v=h?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return h&&M&&M.height>0||x&&M&&a(M)?(n===null&&(n=new zm(s)),v=h?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function a(d){let p=0;const h=6;for(let x=0;x<h;x++)d[x]!==void 0&&p++;return p===h}function l(d){const p=d.target;p.removeEventListener("dispose",l);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function v1(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Yo("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function x1(s,e,n,r){const a={},l=new WeakMap;function u(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);y.removeEventListener("dispose",u),delete a[y.id];const M=l.get(y);M&&(e.remove(M),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function d(v,y){return a[y.id]===!0||(y.addEventListener("dispose",u),a[y.id]=!0,n.memory.geometries++),y}function p(v){const y=v.attributes;for(const M in y)e.update(y[M],s.ARRAY_BUFFER)}function h(v){const y=[],M=v.index,T=v.attributes.position;let A=0;if(M!==null){const U=M.array;A=M.version;for(let L=0,P=U.length;L<P;L+=3){const z=U[L+0],F=U[L+1],V=U[L+2];y.push(z,F,F,V,V,z)}}else if(T!==void 0){const U=T.array;A=T.version;for(let L=0,P=U.length/3-1;L<P;L+=3){const z=L+0,F=L+1,V=L+2;y.push(z,F,F,V,V,z)}}else return;const S=new(Pg(y)?Fg:kg)(y,1);S.version=A;const _=l.get(v);_&&e.remove(_),l.set(v,S)}function x(v){const y=l.get(v);if(y){const M=v.index;M!==null&&y.version<M.version&&h(v)}else h(v);return l.get(v)}return{get:d,update:p,getWireframeAttribute:x}}function _1(s,e,n){let r;function a(y){r=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function p(y,M){s.drawElements(r,M,l,y*u),n.update(M,r,1)}function h(y,M,T){T!==0&&(s.drawElementsInstanced(r,M,l,y*u,T),n.update(M,r,T))}function x(y,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,y,0,T);let S=0;for(let _=0;_<T;_++)S+=M[_];n.update(S,r,1)}function v(y,M,T,A){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)h(y[_]/u,M[_],A[_]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,l,y,0,A,0,T);let _=0;for(let U=0;U<T;U++)_+=M[U]*A[U];n.update(_,r,1)}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function y1(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function S1(s,e,n){const r=new WeakMap,a=new $t;function l(u,d,p){const h=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let y=r.get(d);if(y===void 0||y.count!==v){let D=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",D)};y!==void 0&&y.texture.dispose();const M=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],_=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let L=0;M===!0&&(L=1),T===!0&&(L=2),A===!0&&(L=3);let P=d.attributes.position.count*L,z=1;P>e.maxTextureSize&&(z=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*z*4*v),V=new Dg(F,P,z,v);V.type=Ei,V.needsUpdate=!0;const B=L*4;for(let R=0;R<v;R++){const G=S[R],Z=_[R],oe=U[R],ie=P*z*4*R;for(let fe=0;fe<G.count;fe++){const Q=fe*B;M===!0&&(a.fromBufferAttribute(G,fe),F[ie+Q+0]=a.x,F[ie+Q+1]=a.y,F[ie+Q+2]=a.z,F[ie+Q+3]=0),T===!0&&(a.fromBufferAttribute(Z,fe),F[ie+Q+4]=a.x,F[ie+Q+5]=a.y,F[ie+Q+6]=a.z,F[ie+Q+7]=0),A===!0&&(a.fromBufferAttribute(oe,fe),F[ie+Q+8]=a.x,F[ie+Q+9]=a.y,F[ie+Q+10]=a.z,F[ie+Q+11]=oe.itemSize===4?a.w:1)}}y={count:v,texture:V,size:new gt(P,z)},r.set(d,y),d.addEventListener("dispose",D)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let M=0;for(let A=0;A<h.length;A++)M+=h[A];const T=d.morphTargetsRelative?1:1-M;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",h)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function M1(s,e,n,r){let a=new WeakMap;function l(p){const h=r.render.frame,x=p.geometry,v=e.get(p,x);if(a.get(v)!==h&&(e.update(v),a.set(v,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==h&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,h))),p.isSkinnedMesh){const y=p.skeleton;a.get(y)!==h&&(y.update(),a.set(y,h))}return v}function u(){a=new WeakMap}function d(p){const h=p.target;h.removeEventListener("dispose",d),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:l,dispose:u}}const jg=new Cn,Gm=new Hg(1,1),Wg=new Dg,Xg=new Y_,qg=new zg,jm=[],Wm=[],Xm=new Float32Array(16),qm=new Float32Array(9),Ym=new Float32Array(4);function Js(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=jm[a];if(l===void 0&&(l=new Float32Array(a),jm[a]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(l,d)}return l}function on(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function an(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Zl(s,e){let n=Wm[e];n===void 0&&(n=new Int32Array(e),Wm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function E1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function w1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;s.uniform2fv(this.addr,e),an(n,e)}}function b1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(on(n,e))return;s.uniform3fv(this.addr,e),an(n,e)}}function T1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;s.uniform4fv(this.addr,e),an(n,e)}}function A1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(on(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(n,e)}else{if(on(n,r))return;Ym.set(r),s.uniformMatrix2fv(this.addr,!1,Ym),an(n,r)}}function C1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(on(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(n,e)}else{if(on(n,r))return;qm.set(r),s.uniformMatrix3fv(this.addr,!1,qm),an(n,r)}}function R1(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(on(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(n,e)}else{if(on(n,r))return;Xm.set(r),s.uniformMatrix4fv(this.addr,!1,Xm),an(n,r)}}function P1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function D1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;s.uniform2iv(this.addr,e),an(n,e)}}function N1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(on(n,e))return;s.uniform3iv(this.addr,e),an(n,e)}}function L1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;s.uniform4iv(this.addr,e),an(n,e)}}function I1(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function U1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;s.uniform2uiv(this.addr,e),an(n,e)}}function k1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(on(n,e))return;s.uniform3uiv(this.addr,e),an(n,e)}}function F1(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;s.uniform4uiv(this.addr,e),an(n,e)}}function O1(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Gm.compareFunction=Rg,l=Gm):l=jg,n.setTexture2D(e||l,a)}function z1(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Xg,a)}function B1(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||qg,a)}function H1(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Wg,a)}function V1(s){switch(s){case 5126:return E1;case 35664:return w1;case 35665:return b1;case 35666:return T1;case 35674:return A1;case 35675:return C1;case 35676:return R1;case 5124:case 35670:return P1;case 35667:case 35671:return D1;case 35668:case 35672:return N1;case 35669:case 35673:return L1;case 5125:return I1;case 36294:return U1;case 36295:return k1;case 36296:return F1;case 35678:case 36198:case 36298:case 36306:case 35682:return O1;case 35679:case 36299:case 36307:return z1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return H1}}function G1(s,e){s.uniform1fv(this.addr,e)}function j1(s,e){const n=Js(e,this.size,2);s.uniform2fv(this.addr,n)}function W1(s,e){const n=Js(e,this.size,3);s.uniform3fv(this.addr,n)}function X1(s,e){const n=Js(e,this.size,4);s.uniform4fv(this.addr,n)}function q1(s,e){const n=Js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function Y1(s,e){const n=Js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function $1(s,e){const n=Js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function K1(s,e){s.uniform1iv(this.addr,e)}function Z1(s,e){s.uniform2iv(this.addr,e)}function Q1(s,e){s.uniform3iv(this.addr,e)}function J1(s,e){s.uniform4iv(this.addr,e)}function eE(s,e){s.uniform1uiv(this.addr,e)}function tE(s,e){s.uniform2uiv(this.addr,e)}function nE(s,e){s.uniform3uiv(this.addr,e)}function iE(s,e){s.uniform4uiv(this.addr,e)}function rE(s,e,n){const r=this.cache,a=e.length,l=Zl(n,a);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||jg,l[u])}function sE(s,e,n){const r=this.cache,a=e.length,l=Zl(n,a);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||Xg,l[u])}function oE(s,e,n){const r=this.cache,a=e.length,l=Zl(n,a);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||qg,l[u])}function aE(s,e,n){const r=this.cache,a=e.length,l=Zl(n,a);on(r,l)||(s.uniform1iv(this.addr,l),an(r,l));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||Wg,l[u])}function lE(s){switch(s){case 5126:return G1;case 35664:return j1;case 35665:return W1;case 35666:return X1;case 35674:return q1;case 35675:return Y1;case 35676:return $1;case 5124:case 35670:return K1;case 35667:case 35671:return Z1;case 35668:case 35672:return Q1;case 35669:case 35673:return J1;case 5125:return eE;case 36294:return tE;case 36295:return nE;case 36296:return iE;case 35678:case 36198:case 36298:case 36306:case 35682:return rE;case 35679:case 36299:case 36307:return sE;case 35680:case 36300:case 36308:case 36293:return oE;case 36289:case 36303:case 36311:case 36292:return aE}}class cE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=V1(n.type)}}class uE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lE(n.type)}}class dE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const d=a[l];d.setValue(e,n[d.id],r)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function $m(s,e){s.seq.push(e),s.map[e.id]=e}function fE(s,e,n){const r=s.name,a=r.length;for(dd.lastIndex=0;;){const l=dd.exec(r),u=dd.lastIndex;let d=l[1];const p=l[2]==="]",h=l[3];if(p&&(d=d|0),h===void 0||h==="["&&u+2===a){$m(n,h===void 0?new cE(d,s,e):new uE(d,s,e));break}else{let v=n.map[d];v===void 0&&(v=new dE(d),$m(n,v)),n=v}}}class Hl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),u=e.getUniformLocation(n,l.name);fE(l,u,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,u=n.length;l!==u;++l){const d=n[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function Km(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const hE=37297;let pE=0;function mE(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=a;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Zm=new vt;function gE(s){Rt._getMatrix(Zm,Rt.workingColorSpace,s);const e=`mat3( ${Zm.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(s)){case Gl:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Qm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+mE(s.getShaderSource(e),d)}else return l}function vE(s,e){const n=gE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function xE(s,e){let n;switch(e){case S_:n="Linear";break;case M_:n="Reinhard";break;case E_:n="Cineon";break;case w_:n="ACESFilmic";break;case T_:n="AgX";break;case A_:n="Neutral";break;case b_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nl=new se;function _E(){Rt.getLuminanceCoefficients(Nl);const s=Nl.x.toFixed(4),e=Nl.y.toFixed(4),n=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function SE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function ME(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function Go(s){return s!==""}function Jm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EE=/^[ \t]*#include +<([\w\d./]+)>/gm;function uf(s){return s.replace(EE,bE)}const wE=new Map;function bE(s,e){let n=xt[e];if(n===void 0){const r=wE.get(e);if(r!==void 0)n=xt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return uf(n)}const TE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tg(s){return s.replace(TE,AE)}function AE(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function ng(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===e_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function RE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qs:case Ys:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function DE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _g:e="ENVMAP_BLENDING_MULTIPLY";break;case __:e="ENVMAP_BLENDING_MIX";break;case y_:e="ENVMAP_BLENDING_ADD";break}return e}function NE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function LE(s,e,n,r){const a=s.getContext(),l=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=CE(n),h=RE(n),x=PE(n),v=DE(n),y=NE(n),M=yE(n),T=SE(l),A=a.createProgram();let S,_,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Go).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Go).join(`
`),_.length>0&&(_+=`
`)):(S=[ng(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),_=[ng(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+x:"",n.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wr?"#define TONE_MAPPING":"",n.toneMapping!==wr?xt.tonemapping_pars_fragment:"",n.toneMapping!==wr?xE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,vE("linearToOutputTexel",n.outputColorSpace),_E(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Go).join(`
`)),u=uf(u),u=Jm(u,n),u=eg(u,n),d=uf(d),d=Jm(d,n),d=eg(d,n),u=tg(u),d=tg(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",n.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=U+S+u,P=U+_+d,z=Km(a,a.VERTEX_SHADER,L),F=Km(a,a.FRAGMENT_SHADER,P);a.attachShader(A,z),a.attachShader(A,F),n.index0AttributeName!==void 0?a.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(A,0,"position"),a.linkProgram(A);function V(G){if(s.debug.checkShaderErrors){const Z=a.getProgramInfoLog(A)||"",oe=a.getShaderInfoLog(z)||"",ie=a.getShaderInfoLog(F)||"",fe=Z.trim(),Q=oe.trim(),pe=ie.trim();let N=!0,de=!0;if(a.getProgramParameter(A,a.LINK_STATUS)===!1)if(N=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,A,z,F);else{const ue=Qm(a,z,"vertex"),k=Qm(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(A,a.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+fe+`
`+ue+`
`+k)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(Q===""||pe==="")&&(de=!1);de&&(G.diagnostics={runnable:N,programLog:fe,vertexShader:{log:Q,prefix:S},fragmentShader:{log:pe,prefix:_}})}a.deleteShader(z),a.deleteShader(F),B=new Hl(a,A),D=ME(a,A)}let B;this.getUniforms=function(){return B===void 0&&V(this),B};let D;this.getAttributes=function(){return D===void 0&&V(this),D};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(A,hE)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pE++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=z,this.fragmentShader=F,this}let IE=0;class UE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new kE(e),n.set(e,r)),r}}class kE{constructor(e){this.id=IE++,this.code=e,this.usedTimes=0}}function FE(s,e,n,r,a,l,u){const d=new Lg,p=new UE,h=new Set,x=[],v=a.logarithmicDepthBuffer,y=a.vertexTextures;let M=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return h.add(D),D===0?"uv":`uv${D}`}function S(D,R,G,Z,oe){const ie=Z.fog,fe=oe.geometry,Q=D.isMeshStandardMaterial?Z.environment:null,pe=(D.isMeshStandardMaterial?n:e).get(D.envMap||Q),N=pe&&pe.mapping===$l?pe.image.height:null,de=T[D.type];D.precision!==null&&(M=a.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const ue=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,k=ue!==void 0?ue.length:0;let te=0;fe.morphAttributes.position!==void 0&&(te=1),fe.morphAttributes.normal!==void 0&&(te=2),fe.morphAttributes.color!==void 0&&(te=3);let me,Ce,Ue,J;if(de){const bt=Mi[de];me=bt.vertexShader,Ce=bt.fragmentShader}else me=D.vertexShader,Ce=D.fragmentShader,p.update(D),Ue=p.getVertexShaderID(D),J=p.getFragmentShaderID(D);const re=s.getRenderTarget(),xe=s.state.buffers.depth.getReversed(),Re=oe.isInstancedMesh===!0,De=oe.isBatchedMesh===!0,pt=!!D.map,Ht=!!D.matcap,O=!!pe,Nt=!!D.aoMap,lt=!!D.lightMap,tt=!!D.bumpMap,He=!!D.normalMap,wt=!!D.displacementMap,ze=!!D.emissiveMap,ct=!!D.metalnessMap,kt=!!D.roughnessMap,nt=D.anisotropy>0,E=D.clearcoat>0,w=D.dispersion>0,j=D.iridescence>0,ee=D.sheen>0,he=D.transmission>0,le=nt&&!!D.anisotropyMap,qe=E&&!!D.clearcoatMap,ye=E&&!!D.clearcoatNormalMap,Ve=E&&!!D.clearcoatRoughnessMap,Qe=j&&!!D.iridescenceMap,be=j&&!!D.iridescenceThicknessMap,Ie=ee&&!!D.sheenColorMap,ot=ee&&!!D.sheenRoughnessMap,Ke=!!D.specularMap,Pe=!!D.specularColorMap,mt=!!D.specularIntensityMap,W=he&&!!D.transmissionMap,Ee=he&&!!D.thicknessMap,Ae=!!D.gradientMap,ke=!!D.alphaMap,Me=D.alphaTest>0,ge=!!D.alphaHash,Ye=!!D.extensions;let ht=wr;D.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ht=s.toneMapping);const It={shaderID:de,shaderType:D.type,shaderName:D.name,vertexShader:me,fragmentShader:Ce,defines:D.defines,customVertexShaderID:Ue,customFragmentShaderID:J,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:De,batchingColor:De&&oe._colorsTexture!==null,instancing:Re,instancingColor:Re&&oe.instanceColor!==null,instancingMorph:Re&&oe.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:$s,alphaToCoverage:!!D.alphaToCoverage,map:pt,matcap:Ht,envMap:O,envMapMode:O&&pe.mapping,envMapCubeUVHeight:N,aoMap:Nt,lightMap:lt,bumpMap:tt,normalMap:He,displacementMap:y&&wt,emissiveMap:ze,normalMapObjectSpace:He&&D.normalMapType===N_,normalMapTangentSpace:He&&D.normalMapType===D_,metalnessMap:ct,roughnessMap:kt,anisotropy:nt,anisotropyMap:le,clearcoat:E,clearcoatMap:qe,clearcoatNormalMap:ye,clearcoatRoughnessMap:Ve,dispersion:w,iridescence:j,iridescenceMap:Qe,iridescenceThicknessMap:be,sheen:ee,sheenColorMap:Ie,sheenRoughnessMap:ot,specularMap:Ke,specularColorMap:Pe,specularIntensityMap:mt,transmission:he,transmissionMap:W,thicknessMap:Ee,gradientMap:Ae,opaque:D.transparent===!1&&D.blending===js&&D.alphaToCoverage===!1,alphaMap:ke,alphaTest:Me,alphaHash:ge,combine:D.combine,mapUv:pt&&A(D.map.channel),aoMapUv:Nt&&A(D.aoMap.channel),lightMapUv:lt&&A(D.lightMap.channel),bumpMapUv:tt&&A(D.bumpMap.channel),normalMapUv:He&&A(D.normalMap.channel),displacementMapUv:wt&&A(D.displacementMap.channel),emissiveMapUv:ze&&A(D.emissiveMap.channel),metalnessMapUv:ct&&A(D.metalnessMap.channel),roughnessMapUv:kt&&A(D.roughnessMap.channel),anisotropyMapUv:le&&A(D.anisotropyMap.channel),clearcoatMapUv:qe&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:ye&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:be&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:ot&&A(D.sheenRoughnessMap.channel),specularMapUv:Ke&&A(D.specularMap.channel),specularColorMapUv:Pe&&A(D.specularColorMap.channel),specularIntensityMapUv:mt&&A(D.specularIntensityMap.channel),transmissionMapUv:W&&A(D.transmissionMap.channel),thicknessMapUv:Ee&&A(D.thicknessMap.channel),alphaMapUv:ke&&A(D.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(He||nt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!fe.attributes.uv&&(pt||ke),fog:!!ie,useFog:D.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:xe,skinning:oe.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,decodeVideoTexture:pt&&D.map.isVideoTexture===!0&&Rt.getTransfer(D.map.colorSpace)===Ot,decodeVideoTextureEmissive:ze&&D.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(D.emissiveMap.colorSpace)===Ot,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Vi,flipSided:D.side===Fn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ye&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&D.extensions.multiDraw===!0||De)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return It.vertexUv1s=h.has(1),It.vertexUv2s=h.has(2),It.vertexUv3s=h.has(3),h.clear(),It}function _(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)R.push(G),R.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(U(R,D),L(R,D),R.push(s.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function U(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function L(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function P(D){const R=T[D.type];let G;if(R){const Z=Mi[R];G=ay.clone(Z.uniforms)}else G=D.uniforms;return G}function z(D,R){let G;for(let Z=0,oe=x.length;Z<oe;Z++){const ie=x[Z];if(ie.cacheKey===R){G=ie,++G.usedTimes;break}}return G===void 0&&(G=new LE(s,R,D,l),x.push(G)),G}function F(D){if(--D.usedTimes===0){const R=x.indexOf(D);x[R]=x[x.length-1],x.pop(),D.destroy()}}function V(D){p.remove(D)}function B(){p.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:P,acquireProgram:z,releaseProgram:F,releaseShaderCache:V,programs:x,dispose:B}}function OE(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function a(u,d,p){s.get(u)[d]=p}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function zE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ig(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function rg(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function u(v,y,M,T,A,S){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:M,groupOrder:T,renderOrder:v.renderOrder,z:A,group:S},s[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=M,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=A,_.group=S),e++,_}function d(v,y,M,T,A,S){const _=u(v,y,M,T,A,S);M.transmission>0?r.push(_):M.transparent===!0?a.push(_):n.push(_)}function p(v,y,M,T,A,S){const _=u(v,y,M,T,A,S);M.transmission>0?r.unshift(_):M.transparent===!0?a.unshift(_):n.unshift(_)}function h(v,y){n.length>1&&n.sort(v||zE),r.length>1&&r.sort(y||ig),a.length>1&&a.sort(y||ig)}function x(){for(let v=e,y=s.length;v<y;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:d,unshift:p,finish:x,sort:h}}function BE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new rg,s.set(r,[u])):a>=l.length?(u=new rg,l.push(u)):u=l[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function HE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new se,color:new Dt};break;case"SpotLight":n={position:new se,direction:new se,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new se,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new se,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":n={color:new Dt,position:new se,halfWidth:new se,halfHeight:new se};break}return s[e.id]=n,n}}}function VE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let GE=0;function jE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function WE(s){const e=new HE,n=VE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new se);const a=new se,l=new en,u=new en;function d(h){let x=0,v=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,T=0,A=0,S=0,_=0,U=0,L=0,P=0,z=0,F=0,V=0;h.sort(jE);for(let D=0,R=h.length;D<R;D++){const G=h[D],Z=G.color,oe=G.intensity,ie=G.distance,fe=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)x+=Z.r*oe,v+=Z.g*oe,y+=Z.b*oe;else if(G.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(G.sh.coefficients[Q],oe);V++}else if(G.isDirectionalLight){const Q=e.get(G);if(Q.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const pe=G.shadow,N=n.get(G);N.shadowIntensity=pe.intensity,N.shadowBias=pe.bias,N.shadowNormalBias=pe.normalBias,N.shadowRadius=pe.radius,N.shadowMapSize=pe.mapSize,r.directionalShadow[M]=N,r.directionalShadowMap[M]=fe,r.directionalShadowMatrix[M]=G.shadow.matrix,U++}r.directional[M]=Q,M++}else if(G.isSpotLight){const Q=e.get(G);Q.position.setFromMatrixPosition(G.matrixWorld),Q.color.copy(Z).multiplyScalar(oe),Q.distance=ie,Q.coneCos=Math.cos(G.angle),Q.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),Q.decay=G.decay,r.spot[A]=Q;const pe=G.shadow;if(G.map&&(r.spotLightMap[z]=G.map,z++,pe.updateMatrices(G),G.castShadow&&F++),r.spotLightMatrix[A]=pe.matrix,G.castShadow){const N=n.get(G);N.shadowIntensity=pe.intensity,N.shadowBias=pe.bias,N.shadowNormalBias=pe.normalBias,N.shadowRadius=pe.radius,N.shadowMapSize=pe.mapSize,r.spotShadow[A]=N,r.spotShadowMap[A]=fe,P++}A++}else if(G.isRectAreaLight){const Q=e.get(G);Q.color.copy(Z).multiplyScalar(oe),Q.halfWidth.set(G.width*.5,0,0),Q.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=Q,S++}else if(G.isPointLight){const Q=e.get(G);if(Q.color.copy(G.color).multiplyScalar(G.intensity),Q.distance=G.distance,Q.decay=G.decay,G.castShadow){const pe=G.shadow,N=n.get(G);N.shadowIntensity=pe.intensity,N.shadowBias=pe.bias,N.shadowNormalBias=pe.normalBias,N.shadowRadius=pe.radius,N.shadowMapSize=pe.mapSize,N.shadowCameraNear=pe.camera.near,N.shadowCameraFar=pe.camera.far,r.pointShadow[T]=N,r.pointShadowMap[T]=fe,r.pointShadowMatrix[T]=G.shadow.matrix,L++}r.point[T]=Q,T++}else if(G.isHemisphereLight){const Q=e.get(G);Q.skyColor.copy(G.color).multiplyScalar(oe),Q.groundColor.copy(G.groundColor).multiplyScalar(oe),r.hemi[_]=Q,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=y;const B=r.hash;(B.directionalLength!==M||B.pointLength!==T||B.spotLength!==A||B.rectAreaLength!==S||B.hemiLength!==_||B.numDirectionalShadows!==U||B.numPointShadows!==L||B.numSpotShadows!==P||B.numSpotMaps!==z||B.numLightProbes!==V)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=S,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=P+z-F,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=V,B.directionalLength=M,B.pointLength=T,B.spotLength=A,B.rectAreaLength=S,B.hemiLength=_,B.numDirectionalShadows=U,B.numPointShadows=L,B.numSpotShadows=P,B.numSpotMaps=z,B.numLightProbes=V,r.version=GE++)}function p(h,x){let v=0,y=0,M=0,T=0,A=0;const S=x.matrixWorldInverse;for(let _=0,U=h.length;_<U;_++){const L=h[_];if(L.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),v++}else if(L.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),u.identity(),l.copy(L.matrixWorld),l.premultiply(S),u.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),T++}else if(L.isPointLight){const P=r.point[y];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const P=r.hemi[A];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(S),A++}}}return{setup:d,setupView:p,state:r}}function sg(s){const e=new WE(s),n=[],r=[];function a(x){h.camera=x,n.length=0,r.length=0}function l(x){n.push(x)}function u(x){r.push(x)}function d(){e.setup(n)}function p(x){e.setupView(n,x)}const h={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:u}}function XE(s){let e=new WeakMap;function n(a,l=0){const u=e.get(a);let d;return u===void 0?(d=new sg(s),e.set(a,[d])):l>=u.length?(d=new sg(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const qE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $E(s,e,n){let r=new Bg;const a=new gt,l=new gt,u=new $t,d=new yy({depthPacking:P_}),p=new Sy,h={},x=n.maxTextureSize,v={[br]:Fn,[Fn]:br,[Vi]:Vi},y=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:qE,fragmentShader:YE}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const T=new Yi;T.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ii(T,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xg;let _=this.type;this.render=function(F,V,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const D=s.getRenderTarget(),R=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Er),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const oe=_!==Hi&&this.type===Hi,ie=_===Hi&&this.type!==Hi;for(let fe=0,Q=F.length;fe<Q;fe++){const pe=F[fe],N=pe.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;a.copy(N.mapSize);const de=N.getFrameExtents();if(a.multiply(de),l.copy(N.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(l.x=Math.floor(x/de.x),a.x=l.x*de.x,N.mapSize.x=l.x),a.y>x&&(l.y=Math.floor(x/de.y),a.y=l.y*de.y,N.mapSize.y=l.y)),N.map===null||oe===!0||ie===!0){const k=this.type!==Hi?{minFilter:Xn,magFilter:Xn}:{};N.map!==null&&N.map.dispose(),N.map=new Tr(a.x,a.y,k),N.map.texture.name=pe.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();const ue=N.getViewportCount();for(let k=0;k<ue;k++){const te=N.getViewport(k);u.set(l.x*te.x,l.y*te.y,l.x*te.z,l.y*te.w),Z.viewport(u),N.updateMatrices(pe,k),r=N.getFrustum(),P(V,B,N.camera,pe,this.type)}N.isPointLightShadow!==!0&&this.type===Hi&&U(N,B),N.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(D,R,G)};function U(F,V){const B=e.update(A);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Tr(a.x,a.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(V,null,B,y,A,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(V,null,B,M,A,null)}function L(F,V,B,D){let R=null;const G=B.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)R=G;else if(R=B.isPointLight===!0?p:d,s.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const Z=R.uuid,oe=V.uuid;let ie=h[Z];ie===void 0&&(ie={},h[Z]=ie);let fe=ie[oe];fe===void 0&&(fe=R.clone(),ie[oe]=fe,V.addEventListener("dispose",z)),R=fe}if(R.visible=V.visible,R.wireframe=V.wireframe,D===Hi?R.side=V.shadowSide!==null?V.shadowSide:V.side:R.side=V.shadowSide!==null?V.shadowSide:v[V.side],R.alphaMap=V.alphaMap,R.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,R.map=V.map,R.clipShadows=V.clipShadows,R.clippingPlanes=V.clippingPlanes,R.clipIntersection=V.clipIntersection,R.displacementMap=V.displacementMap,R.displacementScale=V.displacementScale,R.displacementBias=V.displacementBias,R.wireframeLinewidth=V.wireframeLinewidth,R.linewidth=V.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Z=s.properties.get(R);Z.light=B}return R}function P(F,V,B,D,R){if(F.visible===!1)return;if(F.layers.test(V.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Hi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,F.matrixWorld);const oe=e.update(F),ie=F.material;if(Array.isArray(ie)){const fe=oe.groups;for(let Q=0,pe=fe.length;Q<pe;Q++){const N=fe[Q],de=ie[N.materialIndex];if(de&&de.visible){const ue=L(F,de,D,R);F.onBeforeShadow(s,F,V,B,oe,ue,N),s.renderBufferDirect(B,null,oe,ue,F,N),F.onAfterShadow(s,F,V,B,oe,ue,N)}}}else if(ie.visible){const fe=L(F,ie,D,R);F.onBeforeShadow(s,F,V,B,oe,fe,null),s.renderBufferDirect(B,null,oe,fe,F,null),F.onAfterShadow(s,F,V,B,oe,fe,null)}}const Z=F.children;for(let oe=0,ie=Z.length;oe<ie;oe++)P(Z[oe],V,B,D,R)}function z(F){F.target.removeEventListener("dispose",z);for(const B in h){const D=h[B],R=F.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const KE={[Ed]:wd,[bd]:Cd,[Td]:Rd,[Xs]:Ad,[wd]:Ed,[Cd]:bd,[Rd]:Td,[Ad]:Xs};function ZE(s,e){function n(){let W=!1;const Ee=new $t;let Ae=null;const ke=new $t(0,0,0,0);return{setMask:function(Me){Ae!==Me&&!W&&(s.colorMask(Me,Me,Me,Me),Ae=Me)},setLocked:function(Me){W=Me},setClear:function(Me,ge,Ye,ht,It){It===!0&&(Me*=ht,ge*=ht,Ye*=ht),Ee.set(Me,ge,Ye,ht),ke.equals(Ee)===!1&&(s.clearColor(Me,ge,Ye,ht),ke.copy(Ee))},reset:function(){W=!1,Ae=null,ke.set(-1,0,0,0)}}}function r(){let W=!1,Ee=!1,Ae=null,ke=null,Me=null;return{setReversed:function(ge){if(Ee!==ge){const Ye=e.get("EXT_clip_control");ge?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Ee=ge;const ht=Me;Me=null,this.setClear(ht)}},getReversed:function(){return Ee},setTest:function(ge){ge?re(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(ge){Ae!==ge&&!W&&(s.depthMask(ge),Ae=ge)},setFunc:function(ge){if(Ee&&(ge=KE[ge]),ke!==ge){switch(ge){case Ed:s.depthFunc(s.NEVER);break;case wd:s.depthFunc(s.ALWAYS);break;case bd:s.depthFunc(s.LESS);break;case Xs:s.depthFunc(s.LEQUAL);break;case Td:s.depthFunc(s.EQUAL);break;case Ad:s.depthFunc(s.GEQUAL);break;case Cd:s.depthFunc(s.GREATER);break;case Rd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ke=ge}},setLocked:function(ge){W=ge},setClear:function(ge){Me!==ge&&(Ee&&(ge=1-ge),s.clearDepth(ge),Me=ge)},reset:function(){W=!1,Ae=null,ke=null,Me=null,Ee=!1}}}function a(){let W=!1,Ee=null,Ae=null,ke=null,Me=null,ge=null,Ye=null,ht=null,It=null;return{setTest:function(bt){W||(bt?re(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(bt){Ee!==bt&&!W&&(s.stencilMask(bt),Ee=bt)},setFunc:function(bt,qn,pn){(Ae!==bt||ke!==qn||Me!==pn)&&(s.stencilFunc(bt,qn,pn),Ae=bt,ke=qn,Me=pn)},setOp:function(bt,qn,pn){(ge!==bt||Ye!==qn||ht!==pn)&&(s.stencilOp(bt,qn,pn),ge=bt,Ye=qn,ht=pn)},setLocked:function(bt){W=bt},setClear:function(bt){It!==bt&&(s.clearStencil(bt),It=bt)},reset:function(){W=!1,Ee=null,Ae=null,ke=null,Me=null,ge=null,Ye=null,ht=null,It=null}}}const l=new n,u=new r,d=new a,p=new WeakMap,h=new WeakMap;let x={},v={},y=new WeakMap,M=[],T=null,A=!1,S=null,_=null,U=null,L=null,P=null,z=null,F=null,V=new Dt(0,0,0),B=0,D=!1,R=null,G=null,Z=null,oe=null,ie=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,pe=0;const N=s.getParameter(s.VERSION);N.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(N)[1]),Q=pe>=1):N.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),Q=pe>=2);let de=null,ue={};const k=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),me=new $t().fromArray(k),Ce=new $t().fromArray(te);function Ue(W,Ee,Ae,ke){const Me=new Uint8Array(4),ge=s.createTexture();s.bindTexture(W,ge),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<Ae;Ye++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ee,0,s.RGBA,1,1,ke,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(Ee+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return ge}const J={};J[s.TEXTURE_2D]=Ue(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),re(s.DEPTH_TEST),u.setFunc(Xs),tt(!1),He(am),re(s.CULL_FACE),Nt(Er);function re(W){x[W]!==!0&&(s.enable(W),x[W]=!0)}function xe(W){x[W]!==!1&&(s.disable(W),x[W]=!1)}function Re(W,Ee){return v[W]!==Ee?(s.bindFramebuffer(W,Ee),v[W]=Ee,W===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ee),W===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ee),!0):!1}function De(W,Ee){let Ae=M,ke=!1;if(W){Ae=y.get(Ee),Ae===void 0&&(Ae=[],y.set(Ee,Ae));const Me=W.textures;if(Ae.length!==Me.length||Ae[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,Ye=Me.length;ge<Ye;ge++)Ae[ge]=s.COLOR_ATTACHMENT0+ge;Ae.length=Me.length,ke=!0}}else Ae[0]!==s.BACK&&(Ae[0]=s.BACK,ke=!0);ke&&s.drawBuffers(Ae)}function pt(W){return T!==W?(s.useProgram(W),T=W,!0):!1}const Ht={[Zr]:s.FUNC_ADD,[n_]:s.FUNC_SUBTRACT,[i_]:s.FUNC_REVERSE_SUBTRACT};Ht[r_]=s.MIN,Ht[s_]=s.MAX;const O={[o_]:s.ZERO,[a_]:s.ONE,[l_]:s.SRC_COLOR,[Sd]:s.SRC_ALPHA,[p_]:s.SRC_ALPHA_SATURATE,[f_]:s.DST_COLOR,[u_]:s.DST_ALPHA,[c_]:s.ONE_MINUS_SRC_COLOR,[Md]:s.ONE_MINUS_SRC_ALPHA,[h_]:s.ONE_MINUS_DST_COLOR,[d_]:s.ONE_MINUS_DST_ALPHA,[m_]:s.CONSTANT_COLOR,[g_]:s.ONE_MINUS_CONSTANT_COLOR,[v_]:s.CONSTANT_ALPHA,[x_]:s.ONE_MINUS_CONSTANT_ALPHA};function Nt(W,Ee,Ae,ke,Me,ge,Ye,ht,It,bt){if(W===Er){A===!0&&(xe(s.BLEND),A=!1);return}if(A===!1&&(re(s.BLEND),A=!0),W!==t_){if(W!==S||bt!==D){if((_!==Zr||P!==Zr)&&(s.blendEquation(s.FUNC_ADD),_=Zr,P=Zr),bt)switch(W){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yd:s.blendFunc(s.ONE,s.ONE);break;case lm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case cm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case yd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case lm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}U=null,L=null,z=null,F=null,V.set(0,0,0),B=0,S=W,D=bt}return}Me=Me||Ee,ge=ge||Ae,Ye=Ye||ke,(Ee!==_||Me!==P)&&(s.blendEquationSeparate(Ht[Ee],Ht[Me]),_=Ee,P=Me),(Ae!==U||ke!==L||ge!==z||Ye!==F)&&(s.blendFuncSeparate(O[Ae],O[ke],O[ge],O[Ye]),U=Ae,L=ke,z=ge,F=Ye),(ht.equals(V)===!1||It!==B)&&(s.blendColor(ht.r,ht.g,ht.b,It),V.copy(ht),B=It),S=W,D=!1}function lt(W,Ee){W.side===Vi?xe(s.CULL_FACE):re(s.CULL_FACE);let Ae=W.side===Fn;Ee&&(Ae=!Ae),tt(Ae),W.blending===js&&W.transparent===!1?Nt(Er):Nt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const ke=W.stencilWrite;d.setTest(ke),ke&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ze(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function tt(W){R!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),R=W)}function He(W){W!==Qx?(re(s.CULL_FACE),W!==G&&(W===am?s.cullFace(s.BACK):W===Jx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),G=W}function wt(W){W!==Z&&(Q&&s.lineWidth(W),Z=W)}function ze(W,Ee,Ae){W?(re(s.POLYGON_OFFSET_FILL),(oe!==Ee||ie!==Ae)&&(s.polygonOffset(Ee,Ae),oe=Ee,ie=Ae)):xe(s.POLYGON_OFFSET_FILL)}function ct(W){W?re(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function kt(W){W===void 0&&(W=s.TEXTURE0+fe-1),de!==W&&(s.activeTexture(W),de=W)}function nt(W,Ee,Ae){Ae===void 0&&(de===null?Ae=s.TEXTURE0+fe-1:Ae=de);let ke=ue[Ae];ke===void 0&&(ke={type:void 0,texture:void 0},ue[Ae]=ke),(ke.type!==W||ke.texture!==Ee)&&(de!==Ae&&(s.activeTexture(Ae),de=Ae),s.bindTexture(W,Ee||J[W]),ke.type=W,ke.texture=Ee)}function E(){const W=ue[de];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function j(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ee(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Qe(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(W){me.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),me.copy(W))}function ot(W){Ce.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Ce.copy(W))}function Ke(W,Ee){let Ae=h.get(Ee);Ae===void 0&&(Ae=new WeakMap,h.set(Ee,Ae));let ke=Ae.get(W);ke===void 0&&(ke=s.getUniformBlockIndex(Ee,W.name),Ae.set(W,ke))}function Pe(W,Ee){const ke=h.get(Ee).get(W);p.get(Ee)!==ke&&(s.uniformBlockBinding(Ee,ke,W.__bindingPointIndex),p.set(Ee,ke))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},de=null,ue={},v={},y=new WeakMap,M=[],T=null,A=!1,S=null,_=null,U=null,L=null,P=null,z=null,F=null,V=new Dt(0,0,0),B=0,D=!1,R=null,G=null,Z=null,oe=null,ie=null,me.set(0,0,s.canvas.width,s.canvas.height),Ce.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:re,disable:xe,bindFramebuffer:Re,drawBuffers:De,useProgram:pt,setBlending:Nt,setMaterial:lt,setFlipSided:tt,setCullFace:He,setLineWidth:wt,setPolygonOffset:ze,setScissorTest:ct,activeTexture:kt,bindTexture:nt,unbindTexture:E,compressedTexImage2D:w,compressedTexImage3D:j,texImage2D:Qe,texImage3D:be,updateUBOMapping:Ke,uniformBlockBinding:Pe,texStorage2D:ye,texStorage3D:Ve,texSubImage2D:ee,texSubImage3D:he,compressedTexSubImage2D:le,compressedTexSubImage3D:qe,scissor:Ie,viewport:ot,reset:mt}}function QE(s,e,n,r,a,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new gt,x=new WeakMap;let v;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(E,w){return M?new OffscreenCanvas(E,w):Wl("canvas")}function A(E,w,j){let ee=1;const he=nt(E);if((he.width>j||he.height>j)&&(ee=j/Math.max(he.width,he.height)),ee<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const le=Math.floor(ee*he.width),qe=Math.floor(ee*he.height);v===void 0&&(v=T(le,qe));const ye=w?T(le,qe):v;return ye.width=le,ye.height=qe,ye.getContext("2d").drawImage(E,0,0,le,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+le+"x"+qe+")."),ye}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),E;return E}function S(E){return E.generateMipmaps}function _(E){s.generateMipmap(E)}function U(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(E,w,j,ee,he=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le=w;if(w===s.RED&&(j===s.FLOAT&&(le=s.R32F),j===s.HALF_FLOAT&&(le=s.R16F),j===s.UNSIGNED_BYTE&&(le=s.R8)),w===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(le=s.R8UI),j===s.UNSIGNED_SHORT&&(le=s.R16UI),j===s.UNSIGNED_INT&&(le=s.R32UI),j===s.BYTE&&(le=s.R8I),j===s.SHORT&&(le=s.R16I),j===s.INT&&(le=s.R32I)),w===s.RG&&(j===s.FLOAT&&(le=s.RG32F),j===s.HALF_FLOAT&&(le=s.RG16F),j===s.UNSIGNED_BYTE&&(le=s.RG8)),w===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(le=s.RG8UI),j===s.UNSIGNED_SHORT&&(le=s.RG16UI),j===s.UNSIGNED_INT&&(le=s.RG32UI),j===s.BYTE&&(le=s.RG8I),j===s.SHORT&&(le=s.RG16I),j===s.INT&&(le=s.RG32I)),w===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(le=s.RGB8UI),j===s.UNSIGNED_SHORT&&(le=s.RGB16UI),j===s.UNSIGNED_INT&&(le=s.RGB32UI),j===s.BYTE&&(le=s.RGB8I),j===s.SHORT&&(le=s.RGB16I),j===s.INT&&(le=s.RGB32I)),w===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(le=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(le=s.RGBA16UI),j===s.UNSIGNED_INT&&(le=s.RGBA32UI),j===s.BYTE&&(le=s.RGBA8I),j===s.SHORT&&(le=s.RGBA16I),j===s.INT&&(le=s.RGBA32I)),w===s.RGB&&(j===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(le=s.R11F_G11F_B10F)),w===s.RGBA){const qe=he?Gl:Rt.getTransfer(ee);j===s.FLOAT&&(le=s.RGBA32F),j===s.HALF_FLOAT&&(le=s.RGBA16F),j===s.UNSIGNED_BYTE&&(le=qe===Ot?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function P(E,w){let j;return E?w===null||w===ts||w===Wo?j=s.DEPTH24_STENCIL8:w===Ei?j=s.DEPTH32F_STENCIL8:w===jo&&(j=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ts||w===Wo?j=s.DEPTH_COMPONENT24:w===Ei?j=s.DEPTH_COMPONENT32F:w===jo&&(j=s.DEPTH_COMPONENT16),j}function z(E,w){return S(E)===!0||E.isFramebufferTexture&&E.minFilter!==Xn&&E.minFilter!==kn?Math.log2(Math.max(w.width,w.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?w.mipmaps.length:1}function F(E){const w=E.target;w.removeEventListener("dispose",F),B(w),w.isVideoTexture&&x.delete(w)}function V(E){const w=E.target;w.removeEventListener("dispose",V),R(w)}function B(E){const w=r.get(E);if(w.__webglInit===void 0)return;const j=E.source,ee=y.get(j);if(ee){const he=ee[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&D(E),Object.keys(ee).length===0&&y.delete(j)}r.remove(E)}function D(E){const w=r.get(E);s.deleteTexture(w.__webglTexture);const j=E.source,ee=y.get(j);delete ee[w.__cacheKey],u.memory.textures--}function R(E){const w=r.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),r.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let he=0;he<w.__webglFramebuffer[ee].length;he++)s.deleteFramebuffer(w.__webglFramebuffer[ee][he]);else s.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)s.deleteFramebuffer(w.__webglFramebuffer[ee]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const j=E.textures;for(let ee=0,he=j.length;ee<he;ee++){const le=r.get(j[ee]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),u.memory.textures--),r.remove(j[ee])}r.remove(E)}let G=0;function Z(){G=0}function oe(){const E=G;return E>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+a.maxTextures),G+=1,E}function ie(E){const w=[];return w.push(E.wrapS),w.push(E.wrapT),w.push(E.wrapR||0),w.push(E.magFilter),w.push(E.minFilter),w.push(E.anisotropy),w.push(E.internalFormat),w.push(E.format),w.push(E.type),w.push(E.generateMipmaps),w.push(E.premultiplyAlpha),w.push(E.flipY),w.push(E.unpackAlignment),w.push(E.colorSpace),w.join()}function fe(E,w){const j=r.get(E);if(E.isVideoTexture&&ct(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&j.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(j,E,w);return}}else E.isExternalTexture&&(j.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+w)}function Q(E,w){const j=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&j.__version!==E.version){J(j,E,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+w)}function pe(E,w){const j=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&j.__version!==E.version){J(j,E,w);return}n.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+w)}function N(E,w){const j=r.get(E);if(E.version>0&&j.__version!==E.version){re(j,E,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+w)}const de={[Nd]:s.REPEAT,[gi]:s.CLAMP_TO_EDGE,[Ld]:s.MIRRORED_REPEAT},ue={[Xn]:s.NEAREST,[C_]:s.NEAREST_MIPMAP_NEAREST,[ll]:s.NEAREST_MIPMAP_LINEAR,[kn]:s.LINEAR,[Iu]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},k={[L_]:s.NEVER,[z_]:s.ALWAYS,[I_]:s.LESS,[Rg]:s.LEQUAL,[U_]:s.EQUAL,[O_]:s.GEQUAL,[k_]:s.GREATER,[F_]:s.NOTEQUAL};function te(E,w){if(w.type===Ei&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===kn||w.magFilter===Iu||w.magFilter===ll||w.magFilter===Jr||w.minFilter===kn||w.minFilter===Iu||w.minFilter===ll||w.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,de[w.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,de[w.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,de[w.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ue[w.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ue[w.minFilter]),w.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,k[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Xn||w.minFilter!==ll&&w.minFilter!==Jr||w.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function me(E,w){let j=!1;E.__webglInit===void 0&&(E.__webglInit=!0,w.addEventListener("dispose",F));const ee=w.source;let he=y.get(ee);he===void 0&&(he={},y.set(ee,he));const le=ie(w);if(le!==E.__cacheKey){he[le]===void 0&&(he[le]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,j=!0),he[le].usedTimes++;const qe=he[E.__cacheKey];qe!==void 0&&(he[E.__cacheKey].usedTimes--,qe.usedTimes===0&&D(w)),E.__cacheKey=le,E.__webglTexture=he[le].texture}return j}function Ce(E,w,j){return Math.floor(Math.floor(E/j)/w)}function Ue(E,w,j,ee){const le=E.updateRanges;if(le.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,j,ee,w.data);else{le.sort((be,Ie)=>be.start-Ie.start);let qe=0;for(let be=1;be<le.length;be++){const Ie=le[qe],ot=le[be],Ke=Ie.start+Ie.count,Pe=Ce(ot.start,w.width,4),mt=Ce(Ie.start,w.width,4);ot.start<=Ke+1&&Pe===mt&&Ce(ot.start+ot.count-1,w.width,4)===Pe?Ie.count=Math.max(Ie.count,ot.start+ot.count-Ie.start):(++qe,le[qe]=ot)}le.length=qe+1;const ye=s.getParameter(s.UNPACK_ROW_LENGTH),Ve=s.getParameter(s.UNPACK_SKIP_PIXELS),Qe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let be=0,Ie=le.length;be<Ie;be++){const ot=le[be],Ke=Math.floor(ot.start/4),Pe=Math.ceil(ot.count/4),mt=Ke%w.width,W=Math.floor(Ke/w.width),Ee=Pe,Ae=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,mt),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),n.texSubImage2D(s.TEXTURE_2D,0,mt,W,Ee,Ae,j,ee,w.data)}E.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ye),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,Qe)}}function J(E,w,j){let ee=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=s.TEXTURE_3D);const he=me(E,w),le=w.source;n.bindTexture(ee,E.__webglTexture,s.TEXTURE0+j);const qe=r.get(le);if(le.version!==qe.__version||he===!0){n.activeTexture(s.TEXTURE0+j);const ye=Rt.getPrimaries(Rt.workingColorSpace),Ve=w.colorSpace===Mr?null:Rt.getPrimaries(w.colorSpace),Qe=w.colorSpace===Mr||ye===Ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let be=A(w.image,!1,a.maxTextureSize);be=kt(w,be);const Ie=l.convert(w.format,w.colorSpace),ot=l.convert(w.type);let Ke=L(w.internalFormat,Ie,ot,w.colorSpace,w.isVideoTexture);te(ee,w);let Pe;const mt=w.mipmaps,W=w.isVideoTexture!==!0,Ee=qe.__version===void 0||he===!0,Ae=le.dataReady,ke=z(w,be);if(w.isDepthTexture)Ke=P(w.format===qo,w.type),Ee&&(W?n.texStorage2D(s.TEXTURE_2D,1,Ke,be.width,be.height):n.texImage2D(s.TEXTURE_2D,0,Ke,be.width,be.height,0,Ie,ot,null));else if(w.isDataTexture)if(mt.length>0){W&&Ee&&n.texStorage2D(s.TEXTURE_2D,ke,Ke,mt[0].width,mt[0].height);for(let Me=0,ge=mt.length;Me<ge;Me++)Pe=mt[Me],W?Ae&&n.texSubImage2D(s.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Ie,ot,Pe.data):n.texImage2D(s.TEXTURE_2D,Me,Ke,Pe.width,Pe.height,0,Ie,ot,Pe.data);w.generateMipmaps=!1}else W?(Ee&&n.texStorage2D(s.TEXTURE_2D,ke,Ke,be.width,be.height),Ae&&Ue(w,be,Ie,ot)):n.texImage2D(s.TEXTURE_2D,0,Ke,be.width,be.height,0,Ie,ot,be.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){W&&Ee&&n.texStorage3D(s.TEXTURE_2D_ARRAY,ke,Ke,mt[0].width,mt[0].height,be.depth);for(let Me=0,ge=mt.length;Me<ge;Me++)if(Pe=mt[Me],w.format!==ni)if(Ie!==null)if(W){if(Ae)if(w.layerUpdates.size>0){const Ye=Um(Pe.width,Pe.height,w.format,w.type);for(const ht of w.layerUpdates){const It=Pe.data.subarray(ht*Ye/Pe.data.BYTES_PER_ELEMENT,(ht+1)*Ye/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,ht,Pe.width,Pe.height,1,Ie,It)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,be.depth,Ie,Pe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Me,Ke,Pe.width,Pe.height,be.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ae&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,be.depth,Ie,ot,Pe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Me,Ke,Pe.width,Pe.height,be.depth,0,Ie,ot,Pe.data)}else{W&&Ee&&n.texStorage2D(s.TEXTURE_2D,ke,Ke,mt[0].width,mt[0].height);for(let Me=0,ge=mt.length;Me<ge;Me++)Pe=mt[Me],w.format!==ni?Ie!==null?W?Ae&&n.compressedTexSubImage2D(s.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Ie,Pe.data):n.compressedTexImage2D(s.TEXTURE_2D,Me,Ke,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ae&&n.texSubImage2D(s.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Ie,ot,Pe.data):n.texImage2D(s.TEXTURE_2D,Me,Ke,Pe.width,Pe.height,0,Ie,ot,Pe.data)}else if(w.isDataArrayTexture)if(W){if(Ee&&n.texStorage3D(s.TEXTURE_2D_ARRAY,ke,Ke,be.width,be.height,be.depth),Ae)if(w.layerUpdates.size>0){const Me=Um(be.width,be.height,w.format,w.type);for(const ge of w.layerUpdates){const Ye=be.data.subarray(ge*Me/be.data.BYTES_PER_ELEMENT,(ge+1)*Me/be.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,be.width,be.height,1,Ie,ot,Ye)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ie,ot,be.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Ke,be.width,be.height,be.depth,0,Ie,ot,be.data);else if(w.isData3DTexture)W?(Ee&&n.texStorage3D(s.TEXTURE_3D,ke,Ke,be.width,be.height,be.depth),Ae&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ie,ot,be.data)):n.texImage3D(s.TEXTURE_3D,0,Ke,be.width,be.height,be.depth,0,Ie,ot,be.data);else if(w.isFramebufferTexture){if(Ee)if(W)n.texStorage2D(s.TEXTURE_2D,ke,Ke,be.width,be.height);else{let Me=be.width,ge=be.height;for(let Ye=0;Ye<ke;Ye++)n.texImage2D(s.TEXTURE_2D,Ye,Ke,Me,ge,0,Ie,ot,null),Me>>=1,ge>>=1}}else if(mt.length>0){if(W&&Ee){const Me=nt(mt[0]);n.texStorage2D(s.TEXTURE_2D,ke,Ke,Me.width,Me.height)}for(let Me=0,ge=mt.length;Me<ge;Me++)Pe=mt[Me],W?Ae&&n.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ie,ot,Pe):n.texImage2D(s.TEXTURE_2D,Me,Ke,Ie,ot,Pe);w.generateMipmaps=!1}else if(W){if(Ee){const Me=nt(be);n.texStorage2D(s.TEXTURE_2D,ke,Ke,Me.width,Me.height)}Ae&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,ot,be)}else n.texImage2D(s.TEXTURE_2D,0,Ke,Ie,ot,be);S(w)&&_(ee),qe.__version=le.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function re(E,w,j){if(w.image.length!==6)return;const ee=me(E,w),he=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+j);const le=r.get(he);if(he.version!==le.__version||ee===!0){n.activeTexture(s.TEXTURE0+j);const qe=Rt.getPrimaries(Rt.workingColorSpace),ye=w.colorSpace===Mr?null:Rt.getPrimaries(w.colorSpace),Ve=w.colorSpace===Mr||qe===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Qe=w.isCompressedTexture||w.image[0].isCompressedTexture,be=w.image[0]&&w.image[0].isDataTexture,Ie=[];for(let ge=0;ge<6;ge++)!Qe&&!be?Ie[ge]=A(w.image[ge],!0,a.maxCubemapSize):Ie[ge]=be?w.image[ge].image:w.image[ge],Ie[ge]=kt(w,Ie[ge]);const ot=Ie[0],Ke=l.convert(w.format,w.colorSpace),Pe=l.convert(w.type),mt=L(w.internalFormat,Ke,Pe,w.colorSpace),W=w.isVideoTexture!==!0,Ee=le.__version===void 0||ee===!0,Ae=he.dataReady;let ke=z(w,ot);te(s.TEXTURE_CUBE_MAP,w);let Me;if(Qe){W&&Ee&&n.texStorage2D(s.TEXTURE_CUBE_MAP,ke,mt,ot.width,ot.height);for(let ge=0;ge<6;ge++){Me=Ie[ge].mipmaps;for(let Ye=0;Ye<Me.length;Ye++){const ht=Me[Ye];w.format!==ni?Ke!==null?W?Ae&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye,0,0,ht.width,ht.height,Ke,ht.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye,mt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ae&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye,0,0,ht.width,ht.height,Ke,Pe,ht.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye,mt,ht.width,ht.height,0,Ke,Pe,ht.data)}}}else{if(Me=w.mipmaps,W&&Ee){Me.length>0&&ke++;const ge=nt(Ie[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,ke,mt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(be){W?Ae&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ie[ge].width,Ie[ge].height,Ke,Pe,Ie[ge].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,mt,Ie[ge].width,Ie[ge].height,0,Ke,Pe,Ie[ge].data);for(let Ye=0;Ye<Me.length;Ye++){const It=Me[Ye].image[ge].image;W?Ae&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye+1,0,0,It.width,It.height,Ke,Pe,It.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye+1,mt,It.width,It.height,0,Ke,Pe,It.data)}}else{W?Ae&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ke,Pe,Ie[ge]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,mt,Ke,Pe,Ie[ge]);for(let Ye=0;Ye<Me.length;Ye++){const ht=Me[Ye];W?Ae&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye+1,0,0,Ke,Pe,ht.image[ge]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye+1,mt,Ke,Pe,ht.image[ge])}}}S(w)&&_(s.TEXTURE_CUBE_MAP),le.__version=he.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function xe(E,w,j,ee,he,le){const qe=l.convert(j.format,j.colorSpace),ye=l.convert(j.type),Ve=L(j.internalFormat,qe,ye,j.colorSpace),Qe=r.get(w),be=r.get(j);if(be.__renderTarget=w,!Qe.__hasExternalTextures){const Ie=Math.max(1,w.width>>le),ot=Math.max(1,w.height>>le);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?n.texImage3D(he,le,Ve,Ie,ot,w.depth,0,qe,ye,null):n.texImage2D(he,le,Ve,Ie,ot,0,qe,ye,null)}n.bindFramebuffer(s.FRAMEBUFFER,E),ze(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,he,be.__webglTexture,0,wt(w)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,he,be.__webglTexture,le),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(E,w,j){if(s.bindRenderbuffer(s.RENDERBUFFER,E),w.depthBuffer){const ee=w.depthTexture,he=ee&&ee.isDepthTexture?ee.type:null,le=P(w.stencilBuffer,he),qe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=wt(w);ze(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,le,w.width,w.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,le,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,le,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,E)}else{const ee=w.textures;for(let he=0;he<ee.length;he++){const le=ee[he],qe=l.convert(le.format,le.colorSpace),ye=l.convert(le.type),Ve=L(le.internalFormat,qe,ye,le.colorSpace),Qe=wt(w);j&&ze(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Ve,w.width,w.height):ze(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe,Ve,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ve,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(E,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,E),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=r.get(w.depthTexture);ee.__renderTarget=w,(!ee.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),fe(w.depthTexture,0);const he=ee.__webglTexture,le=wt(w);if(w.depthTexture.format===Xo)ze(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0);else if(w.depthTexture.format===qo)ze(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function pt(E){const w=r.get(E),j=E.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==E.depthTexture){const ee=E.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ee){const he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ee.removeEventListener("dispose",he)};ee.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=ee}if(E.depthTexture&&!w.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");const ee=E.texture.mipmaps;ee&&ee.length>0?De(w.__webglFramebuffer[0],E):De(w.__webglFramebuffer,E)}else if(j){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]===void 0)w.__webglDepthbuffer[ee]=s.createRenderbuffer(),Re(w.__webglDepthbuffer[ee],E,!1);else{const he=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=w.__webglDepthbuffer[ee];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,le)}}else{const ee=E.texture.mipmaps;if(ee&&ee.length>0?n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Re(w.__webglDepthbuffer,E,!1);else{const he=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,le)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(E,w,j){const ee=r.get(E);w!==void 0&&xe(ee.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&pt(E)}function O(E){const w=E.texture,j=r.get(E),ee=r.get(w);E.addEventListener("dispose",V);const he=E.textures,le=E.isWebGLCubeRenderTarget===!0,qe=he.length>1;if(qe||(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=w.version,u.memory.textures++),le){j.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer[ye]=[];for(let Ve=0;Ve<w.mipmaps.length;Ve++)j.__webglFramebuffer[ye][Ve]=s.createFramebuffer()}else j.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer=[];for(let ye=0;ye<w.mipmaps.length;ye++)j.__webglFramebuffer[ye]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(qe)for(let ye=0,Ve=he.length;ye<Ve;ye++){const Qe=r.get(he[ye]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=s.createTexture(),u.memory.textures++)}if(E.samples>0&&ze(E)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ye=0;ye<he.length;ye++){const Ve=he[ye];j.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[ye]);const Qe=l.convert(Ve.format,Ve.colorSpace),be=l.convert(Ve.type),Ie=L(Ve.internalFormat,Qe,be,Ve.colorSpace,E.isXRRenderTarget===!0),ot=wt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,Ie,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,j.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(j.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){n.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),te(s.TEXTURE_CUBE_MAP,w);for(let ye=0;ye<6;ye++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ve=0;Ve<w.mipmaps.length;Ve++)xe(j.__webglFramebuffer[ye][Ve],E,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve);else xe(j.__webglFramebuffer[ye],E,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);S(w)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qe){for(let ye=0,Ve=he.length;ye<Ve;ye++){const Qe=he[ye],be=r.get(Qe);let Ie=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Ie=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ie,be.__webglTexture),te(Ie,Qe),xe(j.__webglFramebuffer,E,Qe,s.COLOR_ATTACHMENT0+ye,Ie,0),S(Qe)&&_(Ie)}n.unbindTexture()}else{let ye=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ye=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(ye,ee.__webglTexture),te(ye,w),w.mipmaps&&w.mipmaps.length>0)for(let Ve=0;Ve<w.mipmaps.length;Ve++)xe(j.__webglFramebuffer[Ve],E,w,s.COLOR_ATTACHMENT0,ye,Ve);else xe(j.__webglFramebuffer,E,w,s.COLOR_ATTACHMENT0,ye,0);S(w)&&_(ye),n.unbindTexture()}E.depthBuffer&&pt(E)}function Nt(E){const w=E.textures;for(let j=0,ee=w.length;j<ee;j++){const he=w[j];if(S(he)){const le=U(E),qe=r.get(he).__webglTexture;n.bindTexture(le,qe),_(le),n.unbindTexture()}}}const lt=[],tt=[];function He(E){if(E.samples>0){if(ze(E)===!1){const w=E.textures,j=E.width,ee=E.height;let he=s.COLOR_BUFFER_BIT;const le=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(E),ye=w.length>1;if(ye)for(let Qe=0;Qe<w.length;Qe++)n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Ve=E.texture.mipmaps;Ve&&Ve.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Qe=0;Qe<w.length;Qe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),ye){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Qe]);const be=r.get(w[Qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,be,0)}s.blitFramebuffer(0,0,j,ee,0,0,j,ee,he,s.NEAREST),p===!0&&(lt.length=0,tt.length=0,lt.push(s.COLOR_ATTACHMENT0+Qe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(lt.push(le),tt.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,tt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let Qe=0;Qe<w.length;Qe++){n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Qe]);const be=r.get(w[Qe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,be,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&p){const w=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function wt(E){return Math.min(a.maxSamples,E.samples)}function ze(E){const w=r.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ct(E){const w=u.render.frame;x.get(E)!==w&&(x.set(E,w),E.update())}function kt(E,w){const j=E.colorSpace,ee=E.format,he=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||j!==$s&&j!==Mr&&(Rt.getTransfer(j)===Ot?(ee!==ni||he!==Wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),w}function nt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(h.width=E.naturalWidth||E.width,h.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(h.width=E.displayWidth,h.height=E.displayHeight):(h.width=E.width,h.height=E.height),h}this.allocateTextureUnit=oe,this.resetTextureUnits=Z,this.setTexture2D=fe,this.setTexture2DArray=Q,this.setTexture3D=pe,this.setTextureCube=N,this.rebindTextures=Ht,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ze}function JE(s,e){function n(r,a=Mr){let l;const u=Rt.getTransfer(a);if(r===Wi)return s.UNSIGNED_BYTE;if(r===_f)return s.UNSIGNED_SHORT_4_4_4_4;if(r===yf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Eg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===wg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Sg)return s.BYTE;if(r===Mg)return s.SHORT;if(r===jo)return s.UNSIGNED_SHORT;if(r===xf)return s.INT;if(r===ts)return s.UNSIGNED_INT;if(r===Ei)return s.FLOAT;if(r===Zs)return s.HALF_FLOAT;if(r===bg)return s.ALPHA;if(r===Tg)return s.RGB;if(r===ni)return s.RGBA;if(r===Xo)return s.DEPTH_COMPONENT;if(r===qo)return s.DEPTH_STENCIL;if(r===Ag)return s.RED;if(r===Sf)return s.RED_INTEGER;if(r===Cg)return s.RG;if(r===Mf)return s.RG_INTEGER;if(r===Ef)return s.RGBA_INTEGER;if(r===Fl||r===Ol||r===zl||r===Bl)if(u===Ot)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Fl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Fl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Id||r===Ud||r===kd||r===Fd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Id)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ud)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Od||r===zd||r===Bd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Od||r===zd)return u===Ot?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Bd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Hd||r===Vd||r===Gd||r===jd||r===Wd||r===Xd||r===qd||r===Yd||r===$d||r===Kd||r===Zd||r===Qd||r===Jd||r===ef)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Hd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$d)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Jd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ef)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tf||r===nf||r===rf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===tf)return u===Ot?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===nf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sf||r===of||r===af||r===lf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===sf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===of)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===af)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const ew=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Vg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new qi({vertexShader:ew,fragmentShader:tw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ii(new es(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iw extends Qs{constructor(e,n){super();const r=this;let a=null,l=1,u=null,d="local-floor",p=1,h=null,x=null,v=null,y=null,M=null,T=null;const A=typeof XRWebGLBinding<"u",S=new nw,_={},U=n.getContextAttributes();let L=null,P=null;const z=[],F=[],V=new gt;let B=null;const D=new pi;D.viewport=new $t;const R=new pi;R.viewport=new $t;const G=[D,R],Z=new Ey;let oe=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let re=z[J];return re===void 0&&(re=new id,z[J]=re),re.getTargetRaySpace()},this.getControllerGrip=function(J){let re=z[J];return re===void 0&&(re=new id,z[J]=re),re.getGripSpace()},this.getHand=function(J){let re=z[J];return re===void 0&&(re=new id,z[J]=re),re.getHandSpace()};function fe(J){const re=F.indexOf(J.inputSource);if(re===-1)return;const xe=z[re];xe!==void 0&&(xe.update(J.inputSource,J.frame,h||u),xe.dispatchEvent({type:J.type,data:J.inputSource}))}function Q(){a.removeEventListener("select",fe),a.removeEventListener("selectstart",fe),a.removeEventListener("selectend",fe),a.removeEventListener("squeeze",fe),a.removeEventListener("squeezestart",fe),a.removeEventListener("squeezeend",fe),a.removeEventListener("end",Q),a.removeEventListener("inputsourceschange",pe);for(let J=0;J<z.length;J++){const re=F[J];re!==null&&(F[J]=null,z[J].disconnect(re))}oe=null,ie=null,S.reset();for(const J in _)delete _[J];e.setRenderTarget(L),M=null,y=null,v=null,a=null,P=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(a,n)),v},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(L=e.getRenderTarget(),a.addEventListener("select",fe),a.addEventListener("selectstart",fe),a.addEventListener("selectend",fe),a.addEventListener("squeeze",fe),a.addEventListener("squeezestart",fe),a.addEventListener("squeezeend",fe),a.addEventListener("end",Q),a.addEventListener("inputsourceschange",pe),U.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(V),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Re=null,De=null;U.depth&&(De=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xe=U.stencil?qo:Xo,Re=U.stencil?Wo:ts);const pt={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:l};v=this.getBinding(),y=v.createProjectionLayer(pt),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),P=new Tr(y.textureWidth,y.textureHeight,{format:ni,type:Wi,depthTexture:new Hg(y.textureWidth,y.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const xe={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,n,xe),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Tr(M.framebufferWidth,M.framebufferHeight,{format:ni,type:Wi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await a.requestReferenceSpace(d),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function pe(J){for(let re=0;re<J.removed.length;re++){const xe=J.removed[re],Re=F.indexOf(xe);Re>=0&&(F[Re]=null,z[Re].disconnect(xe))}for(let re=0;re<J.added.length;re++){const xe=J.added[re];let Re=F.indexOf(xe);if(Re===-1){for(let pt=0;pt<z.length;pt++)if(pt>=F.length){F.push(xe),Re=pt;break}else if(F[pt]===null){F[pt]=xe,Re=pt;break}if(Re===-1)break}const De=z[Re];De&&De.connect(xe)}}const N=new se,de=new se;function ue(J,re,xe){N.setFromMatrixPosition(re.matrixWorld),de.setFromMatrixPosition(xe.matrixWorld);const Re=N.distanceTo(de),De=re.projectionMatrix.elements,pt=xe.projectionMatrix.elements,Ht=De[14]/(De[10]-1),O=De[14]/(De[10]+1),Nt=(De[9]+1)/De[5],lt=(De[9]-1)/De[5],tt=(De[8]-1)/De[0],He=(pt[8]+1)/pt[0],wt=Ht*tt,ze=Ht*He,ct=Re/(-tt+He),kt=ct*-tt;if(re.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(kt),J.translateZ(ct),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),De[10]===-1)J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const nt=Ht+ct,E=O+ct,w=wt-kt,j=ze+(Re-kt),ee=Nt*O/E*nt,he=lt*O/E*nt;J.projectionMatrix.makePerspective(w,j,ee,he,nt,E),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function k(J,re){re===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(re.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let re=J.near,xe=J.far;S.texture!==null&&(S.depthNear>0&&(re=S.depthNear),S.depthFar>0&&(xe=S.depthFar)),Z.near=R.near=D.near=re,Z.far=R.far=D.far=xe,(oe!==Z.near||ie!==Z.far)&&(a.updateRenderState({depthNear:Z.near,depthFar:Z.far}),oe=Z.near,ie=Z.far),Z.layers.mask=J.layers.mask|6,D.layers.mask=Z.layers.mask&3,R.layers.mask=Z.layers.mask&5;const Re=J.parent,De=Z.cameras;k(Z,Re);for(let pt=0;pt<De.length;pt++)k(De[pt],Re);De.length===2?ue(Z,D,R):Z.projectionMatrix.copy(D.projectionMatrix),te(J,Z,Re)};function te(J,re,xe){xe===null?J.matrix.copy(re.matrixWorld):(J.matrix.copy(xe.matrixWorld),J.matrix.invert(),J.matrix.multiply(re.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=cf*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(J){p=J,y!==null&&(y.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(J){return _[J]};let me=null;function Ce(J,re){if(x=re.getViewerPose(h||u),T=re,x!==null){const xe=x.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Re=!1;xe.length!==Z.cameras.length&&(Z.cameras.length=0,Re=!0);for(let O=0;O<xe.length;O++){const Nt=xe[O];let lt=null;if(M!==null)lt=M.getViewport(Nt);else{const He=v.getViewSubImage(y,Nt);lt=He.viewport,O===0&&(e.setRenderTargetTextures(P,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(P))}let tt=G[O];tt===void 0&&(tt=new pi,tt.layers.enable(O),tt.viewport=new $t,G[O]=tt),tt.matrix.fromArray(Nt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Nt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(lt.x,lt.y,lt.width,lt.height),O===0&&(Z.matrix.copy(tt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Re===!0&&Z.cameras.push(tt)}const De=a.enabledFeatures;if(De&&De.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const O=v.getDepthInformation(xe[0]);O&&O.isValid&&O.texture&&S.init(O,a.renderState)}if(De&&De.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let O=0;O<xe.length;O++){const Nt=xe[O].camera;if(Nt){let lt=_[Nt];lt||(lt=new Vg,_[Nt]=lt);const tt=v.getCameraImage(Nt);lt.sourceTexture=tt}}}}for(let xe=0;xe<z.length;xe++){const Re=F[xe],De=z[xe];Re!==null&&De!==void 0&&De.update(Re,re,h||u)}me&&me(J,re),re.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:re}),T=null}const Ue=new Gg;Ue.setAnimationLoop(Ce),this.setAnimationLoop=function(J){me=J},this.dispose=function(){}}}const qr=new Xi,rw=new en;function sw(s,e){function n(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,Og(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function a(S,_,U,L,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(S,_):_.isMeshToonMaterial?(l(S,_),v(S,_)):_.isMeshPhongMaterial?(l(S,_),x(S,_)):_.isMeshStandardMaterial?(l(S,_),y(S,_),_.isMeshPhysicalMaterial&&M(S,_,P)):_.isMeshMatcapMaterial?(l(S,_),T(S,_)):_.isMeshDepthMaterial?l(S,_):_.isMeshDistanceMaterial?(l(S,_),A(S,_)):_.isMeshNormalMaterial?l(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?p(S,_,U,L):_.isSpriteMaterial?h(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,n(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Fn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,n(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Fn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,n(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,n(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const U=e.get(_),L=U.envMap,P=U.envMapRotation;L&&(S.envMap.value=L,qr.copy(P),qr.x*=-1,qr.y*=-1,qr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),S.envMapRotation.value.setFromMatrix4(rw.makeRotationFromEuler(qr)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function p(S,_,U,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*U,S.scale.value=L*.5,_.map&&(S.map.value=_.map,n(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function x(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,U){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=U.texture,S.transmissionSamplerSize.value.set(U.width,U.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const U=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(U.matrixWorld),S.nearDistance.value=U.shadow.camera.near,S.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function ow(s,e,n,r){let a={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,L){const P=L.program;r.uniformBlockBinding(U,P)}function h(U,L){let P=a[U.id];P===void 0&&(T(U),P=x(U),a[U.id]=P,U.addEventListener("dispose",S));const z=L.program;r.updateUBOMapping(U,z);const F=e.render.frame;l[U.id]!==F&&(y(U),l[U.id]=F)}function x(U){const L=v();U.__bindingPointIndex=L;const P=s.createBuffer(),z=U.__size,F=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,z,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,P),P}function v(){for(let U=0;U<d;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const L=a[U.id],P=U.uniforms,z=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let F=0,V=P.length;F<V;F++){const B=Array.isArray(P[F])?P[F]:[P[F]];for(let D=0,R=B.length;D<R;D++){const G=B[D];if(M(G,F,D,z)===!0){const Z=G.__offset,oe=Array.isArray(G.value)?G.value:[G.value];let ie=0;for(let fe=0;fe<oe.length;fe++){const Q=oe[fe],pe=A(Q);typeof Q=="number"||typeof Q=="boolean"?(G.__data[0]=Q,s.bufferSubData(s.UNIFORM_BUFFER,Z+ie,G.__data)):Q.isMatrix3?(G.__data[0]=Q.elements[0],G.__data[1]=Q.elements[1],G.__data[2]=Q.elements[2],G.__data[3]=0,G.__data[4]=Q.elements[3],G.__data[5]=Q.elements[4],G.__data[6]=Q.elements[5],G.__data[7]=0,G.__data[8]=Q.elements[6],G.__data[9]=Q.elements[7],G.__data[10]=Q.elements[8],G.__data[11]=0):(Q.toArray(G.__data,ie),ie+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(U,L,P,z){const F=U.value,V=L+"_"+P;if(z[V]===void 0)return typeof F=="number"||typeof F=="boolean"?z[V]=F:z[V]=F.clone(),!0;{const B=z[V];if(typeof F=="number"||typeof F=="boolean"){if(B!==F)return z[V]=F,!0}else if(B.equals(F)===!1)return B.copy(F),!0}return!1}function T(U){const L=U.uniforms;let P=0;const z=16;for(let V=0,B=L.length;V<B;V++){const D=Array.isArray(L[V])?L[V]:[L[V]];for(let R=0,G=D.length;R<G;R++){const Z=D[R],oe=Array.isArray(Z.value)?Z.value:[Z.value];for(let ie=0,fe=oe.length;ie<fe;ie++){const Q=oe[ie],pe=A(Q),N=P%z,de=N%pe.boundary,ue=N+de;P+=de,ue!==0&&z-ue<pe.storage&&(P+=z-ue),Z.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=P,P+=pe.storage}}}const F=P%z;return F>0&&(P+=z-F),U.__size=P,U.__cache={},this}function A(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function S(U){const L=U.target;L.removeEventListener("dispose",S);const P=u.indexOf(L.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function _(){for(const U in a)s.deleteBuffer(a[U]);u=[],a={},l={}}return{bind:p,update:h,dispose:_}}class aw{constructor(e={}){const{canvas:n=H_(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const T=new Uint32Array(4),A=new Int32Array(4);let S=null,_=null;const U=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let z=!1;this._outputColorSpace=ti;let F=0,V=0,B=null,D=-1,R=null;const G=new $t,Z=new $t;let oe=null;const ie=new Dt(0);let fe=0,Q=n.width,pe=n.height,N=1,de=null,ue=null;const k=new $t(0,0,Q,pe),te=new $t(0,0,Q,pe);let me=!1;const Ce=new Bg;let Ue=!1,J=!1;const re=new en,xe=new se,Re=new $t,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Ht(){return B===null?N:1}let O=r;function Nt(C,Y){return n.getContext(C,Y)}try{const C={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vf}`),n.addEventListener("webglcontextlost",Ae,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",Me,!1),O===null){const Y="webgl2";if(O=Nt(Y,C),O===null)throw Nt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let lt,tt,He,wt,ze,ct,kt,nt,E,w,j,ee,he,le,qe,ye,Ve,Qe,be,Ie,ot,Ke,Pe,mt;function W(){lt=new v1(O),lt.init(),Ke=new JE(O,lt),tt=new u1(O,lt,e,Ke),He=new ZE(O,lt),tt.reversedDepthBuffer&&y&&He.buffers.depth.setReversed(!0),wt=new y1(O),ze=new OE,ct=new QE(O,lt,He,ze,tt,Ke,wt),kt=new f1(P),nt=new g1(P),E=new Ty(O),Pe=new l1(O,E),w=new x1(O,E,wt,Pe),j=new M1(O,w,E,wt),be=new S1(O,tt,ct),ye=new d1(ze),ee=new FE(P,kt,nt,lt,tt,Pe,ye),he=new sw(P,ze),le=new BE,qe=new XE(lt),Qe=new a1(P,kt,nt,He,j,M,p),Ve=new $E(P,j,tt),mt=new ow(O,wt,tt,He),Ie=new c1(O,lt,wt),ot=new _1(O,lt,wt),wt.programs=ee.programs,P.capabilities=tt,P.extensions=lt,P.properties=ze,P.renderLists=le,P.shadowMap=Ve,P.state=He,P.info=wt}W();const Ee=new iw(P,O);this.xr=Ee,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=lt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=lt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(C){C!==void 0&&(N=C,this.setSize(Q,pe,!1))},this.getSize=function(C){return C.set(Q,pe)},this.setSize=function(C,Y,ae=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=C,pe=Y,n.width=Math.floor(C*N),n.height=Math.floor(Y*N),ae===!0&&(n.style.width=C+"px",n.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(Q*N,pe*N).floor()},this.setDrawingBufferSize=function(C,Y,ae){Q=C,pe=Y,N=ae,n.width=Math.floor(C*ae),n.height=Math.floor(Y*ae),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(k)},this.setViewport=function(C,Y,ae,ce){C.isVector4?k.set(C.x,C.y,C.z,C.w):k.set(C,Y,ae,ce),He.viewport(G.copy(k).multiplyScalar(N).round())},this.getScissor=function(C){return C.copy(te)},this.setScissor=function(C,Y,ae,ce){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,Y,ae,ce),He.scissor(Z.copy(te).multiplyScalar(N).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(C){He.setScissorTest(me=C)},this.setOpaqueSort=function(C){de=C},this.setTransparentSort=function(C){ue=C},this.getClearColor=function(C){return C.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,ae=!0){let ce=0;if(C){let q=!1;if(B!==null){const we=B.texture.format;q=we===Ef||we===Mf||we===Sf}if(q){const we=B.texture.type,Ne=we===Wi||we===ts||we===jo||we===Wo||we===_f||we===yf,Ge=Qe.getClearColor(),Fe=Qe.getClearAlpha(),st=Ge.r,at=Ge.g,Je=Ge.b;Ne?(T[0]=st,T[1]=at,T[2]=Je,T[3]=Fe,O.clearBufferuiv(O.COLOR,0,T)):(A[0]=st,A[1]=at,A[2]=Je,A[3]=Fe,O.clearBufferiv(O.COLOR,0,A))}else ce|=O.COLOR_BUFFER_BIT}Y&&(ce|=O.DEPTH_BUFFER_BIT),ae&&(ce|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ae,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),Qe.dispose(),le.dispose(),qe.dispose(),ze.dispose(),kt.dispose(),nt.dispose(),j.dispose(),Pe.dispose(),mt.dispose(),ee.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",pn),Ee.removeEventListener("sessionend",is),zn.stop()};function Ae(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const C=wt.autoReset,Y=Ve.enabled,ae=Ve.autoUpdate,ce=Ve.needsUpdate,q=Ve.type;W(),wt.autoReset=C,Ve.enabled=Y,Ve.autoUpdate=ae,Ve.needsUpdate=ce,Ve.type=q}function Me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ge(C){const Y=C.target;Y.removeEventListener("dispose",ge),Ye(Y)}function Ye(C){ht(C),ze.remove(C)}function ht(C){const Y=ze.get(C).programs;Y!==void 0&&(Y.forEach(function(ae){ee.releaseProgram(ae)}),C.isShaderMaterial&&ee.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,ae,ce,q,we){Y===null&&(Y=De);const Ne=q.isMesh&&q.matrixWorld.determinant()<0,Ge=Ti(C,Y,ae,ce,q);He.setMaterial(ce,Ne);let Fe=ae.index,st=1;if(ce.wireframe===!0){if(Fe=w.getWireframeAttribute(ae),Fe===void 0)return;st=2}const at=ae.drawRange,Je=ae.attributes.position;let ut=at.start*st,Lt=(at.start+at.count)*st;we!==null&&(ut=Math.max(ut,we.start*st),Lt=Math.min(Lt,(we.start+we.count)*st)),Fe!==null?(ut=Math.max(ut,0),Lt=Math.min(Lt,Fe.count)):Je!=null&&(ut=Math.max(ut,0),Lt=Math.min(Lt,Je.count));const Tt=Lt-ut;if(Tt<0||Tt===1/0)return;Pe.setup(q,ce,Ge,ae,Fe);let zt,Ut=Ie;if(Fe!==null&&(zt=E.get(Fe),Ut=ot,Ut.setIndex(zt)),q.isMesh)ce.wireframe===!0?(He.setLineWidth(ce.wireframeLinewidth*Ht()),Ut.setMode(O.LINES)):Ut.setMode(O.TRIANGLES);else if(q.isLine){let et=ce.linewidth;et===void 0&&(et=1),He.setLineWidth(et*Ht()),q.isLineSegments?Ut.setMode(O.LINES):q.isLineLoop?Ut.setMode(O.LINE_LOOP):Ut.setMode(O.LINE_STRIP)}else q.isPoints?Ut.setMode(O.POINTS):q.isSprite&&Ut.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Yo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const et=q._multiDrawStarts,Ft=q._multiDrawCounts,St=q._multiDrawCount,tn=Fe?E.get(Fe).bytesPerElement:1,ri=ze.get(ce).currentProgram.getUniforms();for(let En=0;En<St;En++)ri.setValue(O,"_gl_DrawID",En),Ut.render(et[En]/tn,Ft[En])}else if(q.isInstancedMesh)Ut.renderInstances(ut,Tt,q.count);else if(ae.isInstancedBufferGeometry){const et=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Ft=Math.min(ae.instanceCount,et);Ut.renderInstances(ut,Tt,Ft)}else Ut.render(ut,Tt)};function It(C,Y,ae){C.transparent===!0&&C.side===Vi&&C.forceSinglePass===!1?(C.side=Fn,C.needsUpdate=!0,ss(C,Y,ae),C.side=br,C.needsUpdate=!0,ss(C,Y,ae),C.side=Vi):ss(C,Y,ae)}this.compile=function(C,Y,ae=null){ae===null&&(ae=C),_=qe.get(ae),_.init(Y),L.push(_),ae.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),C!==ae&&C.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights();const ce=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const we=q.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){const Ge=we[Ne];It(Ge,ae,q),ce.add(Ge)}else It(we,ae,q),ce.add(we)}),_=L.pop(),ce},this.compileAsync=function(C,Y,ae=null){const ce=this.compile(C,Y,ae);return new Promise(q=>{function we(){if(ce.forEach(function(Ne){ze.get(Ne).currentProgram.isReady()&&ce.delete(Ne)}),ce.size===0){q(C);return}setTimeout(we,10)}lt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let bt=null;function qn(C){bt&&bt(C)}function pn(){zn.stop()}function is(){zn.start()}const zn=new Gg;zn.setAnimationLoop(qn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(C){bt=C,Ee.setAnimationLoop(C),C===null?zn.stop():zn.start()},Ee.addEventListener("sessionstart",pn),Ee.addEventListener("sessionend",is),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(Y),Y=Ee.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,Y,B),_=qe.get(C,L.length),_.init(Y),L.push(_),re.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ce.setFromProjectionMatrix(re,wi,Y.reversedDepth),J=this.localClippingEnabled,Ue=ye.init(this.clippingPlanes,J),S=le.get(C,U.length),S.init(),U.push(S),Ee.enabled===!0&&Ee.isPresenting===!0){const we=P.xr.getDepthSensingMesh();we!==null&&no(we,Y,-1/0,P.sortObjects)}no(C,Y,0,P.sortObjects),S.finish(),P.sortObjects===!0&&S.sort(de,ue),pt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,pt&&Qe.addToRenderList(S,C),this.info.render.frame++,Ue===!0&&ye.beginShadows();const ae=_.state.shadowsArray;Ve.render(ae,C,Y),Ue===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=S.opaque,q=S.transmissive;if(_.setupLights(),Y.isArrayCamera){const we=Y.cameras;if(q.length>0)for(let Ne=0,Ge=we.length;Ne<Ge;Ne++){const Fe=we[Ne];Ar(ce,q,C,Fe)}pt&&Qe.render(C);for(let Ne=0,Ge=we.length;Ne<Ge;Ne++){const Fe=we[Ne];$i(S,C,Fe,Fe.viewport)}}else q.length>0&&Ar(ce,q,C,Y),pt&&Qe.render(C),$i(S,C,Y);B!==null&&V===0&&(ct.updateMultisampleRenderTarget(B),ct.updateRenderTargetMipmap(B)),C.isScene===!0&&C.onAfterRender(P,C,Y),Pe.resetDefaultState(),D=-1,R=null,L.pop(),L.length>0?(_=L[L.length-1],Ue===!0&&ye.setGlobalState(P.clippingPlanes,_.state.camera)):_=null,U.pop(),U.length>0?S=U[U.length-1]:S=null};function no(C,Y,ae,ce){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ce.intersectsSprite(C)){ce&&Re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(re);const Ne=j.update(C),Ge=C.material;Ge.visible&&S.push(C,Ne,Ge,ae,Re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ce.intersectsObject(C))){const Ne=j.update(C),Ge=C.material;if(ce&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Re.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Re.copy(Ne.boundingSphere.center)),Re.applyMatrix4(C.matrixWorld).applyMatrix4(re)),Array.isArray(Ge)){const Fe=Ne.groups;for(let st=0,at=Fe.length;st<at;st++){const Je=Fe[st],ut=Ge[Je.materialIndex];ut&&ut.visible&&S.push(C,Ne,ut,ae,Re.z,Je)}}else Ge.visible&&S.push(C,Ne,Ge,ae,Re.z,null)}}const we=C.children;for(let Ne=0,Ge=we.length;Ne<Ge;Ne++)no(we[Ne],Y,ae,ce)}function $i(C,Y,ae,ce){const q=C.opaque,we=C.transmissive,Ne=C.transparent;_.setupLightsView(ae),Ue===!0&&ye.setGlobalState(P.clippingPlanes,ae),ce&&He.viewport(G.copy(ce)),q.length>0&&bi(q,Y,ae),we.length>0&&bi(we,Y,ae),Ne.length>0&&bi(Ne,Y,ae),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Ar(C,Y,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ce.id]===void 0&&(_.state.transmissionRenderTarget[ce.id]=new Tr(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Zs:Wi,minFilter:Jr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const we=_.state.transmissionRenderTarget[ce.id],Ne=ce.viewport||G;we.setSize(Ne.z*P.transmissionResolutionScale,Ne.w*P.transmissionResolutionScale);const Ge=P.getRenderTarget(),Fe=P.getActiveCubeFace(),st=P.getActiveMipmapLevel();P.setRenderTarget(we),P.getClearColor(ie),fe=P.getClearAlpha(),fe<1&&P.setClearColor(16777215,.5),P.clear(),pt&&Qe.render(ae);const at=P.toneMapping;P.toneMapping=wr;const Je=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),_.setupLightsView(ce),Ue===!0&&ye.setGlobalState(P.clippingPlanes,ce),bi(C,ae,ce),ct.updateMultisampleRenderTarget(we),ct.updateRenderTargetMipmap(we),lt.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Lt=0,Tt=Y.length;Lt<Tt;Lt++){const zt=Y[Lt],Ut=zt.object,et=zt.geometry,Ft=zt.material,St=zt.group;if(Ft.side===Vi&&Ut.layers.test(ce.layers)){const tn=Ft.side;Ft.side=Fn,Ft.needsUpdate=!0,rs(Ut,ae,ce,et,Ft,St),Ft.side=tn,Ft.needsUpdate=!0,ut=!0}}ut===!0&&(ct.updateMultisampleRenderTarget(we),ct.updateRenderTargetMipmap(we))}P.setRenderTarget(Ge,Fe,st),P.setClearColor(ie,fe),Je!==void 0&&(ce.viewport=Je),P.toneMapping=at}function bi(C,Y,ae){const ce=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,we=C.length;q<we;q++){const Ne=C[q],Ge=Ne.object,Fe=Ne.geometry,st=Ne.group;let at=Ne.material;at.allowOverride===!0&&ce!==null&&(at=ce),Ge.layers.test(ae.layers)&&rs(Ge,Y,ae,Fe,at,st)}}function rs(C,Y,ae,ce,q,we){C.onBeforeRender(P,Y,ae,ce,q,we),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(P,Y,ae,ce,C,we),q.transparent===!0&&q.side===Vi&&q.forceSinglePass===!1?(q.side=Fn,q.needsUpdate=!0,P.renderBufferDirect(ae,Y,ce,q,C,we),q.side=br,q.needsUpdate=!0,P.renderBufferDirect(ae,Y,ce,q,C,we),q.side=Vi):P.renderBufferDirect(ae,Y,ce,q,C,we),C.onAfterRender(P,Y,ae,ce,q,we)}function ss(C,Y,ae){Y.isScene!==!0&&(Y=De);const ce=ze.get(C),q=_.state.lights,we=_.state.shadowsArray,Ne=q.state.version,Ge=ee.getParameters(C,q.state,we,Y,ae),Fe=ee.getProgramCacheKey(Ge);let st=ce.programs;ce.environment=C.isMeshStandardMaterial?Y.environment:null,ce.fog=Y.fog,ce.envMap=(C.isMeshStandardMaterial?nt:kt).get(C.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,st===void 0&&(C.addEventListener("dispose",ge),st=new Map,ce.programs=st);let at=st.get(Fe);if(at!==void 0){if(ce.currentProgram===at&&ce.lightsStateVersion===Ne)return ta(C,Ge),at}else Ge.uniforms=ee.getUniforms(C),C.onBeforeCompile(Ge,P),at=ee.acquireProgram(Ge,Fe),st.set(Fe,at),ce.uniforms=Ge.uniforms;const Je=ce.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Je.clippingPlanes=ye.uniform),ta(C,Ge),ce.needsLights=ia(C),ce.lightsStateVersion=Ne,ce.needsLights&&(Je.ambientLightColor.value=q.state.ambient,Je.lightProbe.value=q.state.probe,Je.directionalLights.value=q.state.directional,Je.directionalLightShadows.value=q.state.directionalShadow,Je.spotLights.value=q.state.spot,Je.spotLightShadows.value=q.state.spotShadow,Je.rectAreaLights.value=q.state.rectArea,Je.ltc_1.value=q.state.rectAreaLTC1,Je.ltc_2.value=q.state.rectAreaLTC2,Je.pointLights.value=q.state.point,Je.pointLightShadows.value=q.state.pointShadow,Je.hemisphereLights.value=q.state.hemi,Je.directionalShadowMap.value=q.state.directionalShadowMap,Je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Je.spotShadowMap.value=q.state.spotShadowMap,Je.spotLightMatrix.value=q.state.spotLightMatrix,Je.spotLightMap.value=q.state.spotLightMap,Je.pointShadowMap.value=q.state.pointShadowMap,Je.pointShadowMatrix.value=q.state.pointShadowMatrix),ce.currentProgram=at,ce.uniformsList=null,at}function ea(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=Hl.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function ta(C,Y){const ae=ze.get(C);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function Ti(C,Y,ae,ce,q){Y.isScene!==!0&&(Y=De),ct.resetTextureUnits();const we=Y.fog,Ne=ce.isMeshStandardMaterial?Y.environment:null,Ge=B===null?P.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:$s,Fe=(ce.isMeshStandardMaterial?nt:kt).get(ce.envMap||Ne),st=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,at=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Je=!!ae.morphAttributes.position,ut=!!ae.morphAttributes.normal,Lt=!!ae.morphAttributes.color;let Tt=wr;ce.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Tt=P.toneMapping);const zt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ut=zt!==void 0?zt.length:0,et=ze.get(ce),Ft=_.state.lights;if(Ue===!0&&(J===!0||C!==R)){const Kt=C===R&&ce.id===D;ye.setState(ce,C,Kt)}let St=!1;ce.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Ft.state.version||et.outputColorSpace!==Ge||q.isBatchedMesh&&et.batching===!1||!q.isBatchedMesh&&et.batching===!0||q.isBatchedMesh&&et.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&et.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&et.instancing===!1||!q.isInstancedMesh&&et.instancing===!0||q.isSkinnedMesh&&et.skinning===!1||!q.isSkinnedMesh&&et.skinning===!0||q.isInstancedMesh&&et.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&et.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&et.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&et.instancingMorph===!1&&q.morphTexture!==null||et.envMap!==Fe||ce.fog===!0&&et.fog!==we||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ye.numPlanes||et.numIntersection!==ye.numIntersection)||et.vertexAlphas!==st||et.vertexTangents!==at||et.morphTargets!==Je||et.morphNormals!==ut||et.morphColors!==Lt||et.toneMapping!==Tt||et.morphTargetsCount!==Ut)&&(St=!0):(St=!0,et.__version=ce.version);let tn=et.currentProgram;St===!0&&(tn=ss(ce,Y,q));let ri=!1,En=!1,Cr=!1;const Bt=tn.getUniforms(),wn=et.uniforms;if(He.useProgram(tn.program)&&(ri=!0,En=!0,Cr=!0),ce.id!==D&&(D=ce.id,En=!0),ri||R!==C){He.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Bt.setValue(O,"projectionMatrix",C.projectionMatrix),Bt.setValue(O,"viewMatrix",C.matrixWorldInverse);const gn=Bt.map.cameraPosition;gn!==void 0&&gn.setValue(O,xe.setFromMatrixPosition(C.matrixWorld)),tt.logarithmicDepthBuffer&&Bt.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Bt.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,En=!0,Cr=!0)}if(q.isSkinnedMesh){Bt.setOptional(O,q,"bindMatrix"),Bt.setOptional(O,q,"bindMatrixInverse");const Kt=q.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Bt.setValue(O,"boneTexture",Kt.boneTexture,ct))}q.isBatchedMesh&&(Bt.setOptional(O,q,"batchingTexture"),Bt.setValue(O,"batchingTexture",q._matricesTexture,ct),Bt.setOptional(O,q,"batchingIdTexture"),Bt.setValue(O,"batchingIdTexture",q._indirectTexture,ct),Bt.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&Bt.setValue(O,"batchingColorTexture",q._colorsTexture,ct));const mn=ae.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&be.update(q,ae,tn),(En||et.receiveShadow!==q.receiveShadow)&&(et.receiveShadow=q.receiveShadow,Bt.setValue(O,"receiveShadow",q.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(wn.envMap.value=Fe,wn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&Y.environment!==null&&(wn.envMapIntensity.value=Y.environmentIntensity),En&&(Bt.setValue(O,"toneMappingExposure",P.toneMappingExposure),et.needsLights&&na(wn,Cr),we&&ce.fog===!0&&he.refreshFogUniforms(wn,we),he.refreshMaterialUniforms(wn,ce,N,pe,_.state.transmissionRenderTarget[C.id]),Hl.upload(O,ea(et),wn,ct)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Hl.upload(O,ea(et),wn,ct),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Bt.setValue(O,"center",q.center),Bt.setValue(O,"modelViewMatrix",q.modelViewMatrix),Bt.setValue(O,"normalMatrix",q.normalMatrix),Bt.setValue(O,"modelMatrix",q.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Kt=ce.uniformsGroups;for(let gn=0,Rr=Kt.length;gn<Rr;gn++){const Mt=Kt[gn];mt.update(Mt,tn),mt.bind(Mt,tn)}}return tn}function na(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function ia(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,Y,ae){const ce=ze.get(C);ce.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),ze.get(C.texture).__webglTexture=Y,ze.get(C.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:ae,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const ae=ze.get(C);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0};const Ql=O.createFramebuffer();this.setRenderTarget=function(C,Y=0,ae=0){B=C,F=Y,V=ae;let ce=!0,q=null,we=!1,Ne=!1;if(C){const Fe=ze.get(C);if(Fe.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(O.FRAMEBUFFER,null),ce=!1;else if(Fe.__webglFramebuffer===void 0)ct.setupRenderTarget(C);else if(Fe.__hasExternalTextures)ct.rebindTextures(C,ze.get(C.texture).__webglTexture,ze.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Je=C.depthTexture;if(Fe.__boundDepthTexture!==Je){if(Je!==null&&ze.has(Je)&&(C.width!==Je.image.width||C.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(C)}}const st=C.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Ne=!0);const at=ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(at[Y])?q=at[Y][ae]:q=at[Y],we=!0):C.samples>0&&ct.useMultisampledRTT(C)===!1?q=ze.get(C).__webglMultisampledFramebuffer:Array.isArray(at)?q=at[ae]:q=at,G.copy(C.viewport),Z.copy(C.scissor),oe=C.scissorTest}else G.copy(k).multiplyScalar(N).floor(),Z.copy(te).multiplyScalar(N).floor(),oe=me;if(ae!==0&&(q=Ql),He.bindFramebuffer(O.FRAMEBUFFER,q)&&ce&&He.drawBuffers(C,q),He.viewport(G),He.scissor(Z),He.setScissorTest(oe),we){const Fe=ze.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,ae)}else if(Ne){const Fe=Y;for(let st=0;st<C.textures.length;st++){const at=ze.get(C.textures[st]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+st,at.__webglTexture,ae,Fe)}}else if(C!==null&&ae!==0){const Fe=ze.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Fe.__webglTexture,ae)}D=-1},this.readRenderTargetPixels=function(C,Y,ae,ce,q,we,Ne,Ge=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){He.bindFramebuffer(O.FRAMEBUFFER,Fe);try{const st=C.textures[Ge],at=st.format,Je=st.type;if(!tt.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-ce&&ae>=0&&ae<=C.height-q&&(C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ge),O.readPixels(Y,ae,ce,q,Ke.convert(at),Ke.convert(Je),we))}finally{const st=B!==null?ze.get(B).__webglFramebuffer:null;He.bindFramebuffer(O.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(C,Y,ae,ce,q,we,Ne,Ge=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe)if(Y>=0&&Y<=C.width-ce&&ae>=0&&ae<=C.height-q){He.bindFramebuffer(O.FRAMEBUFFER,Fe);const st=C.textures[Ge],at=st.format,Je=st.type;if(!tt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ut),O.bufferData(O.PIXEL_PACK_BUFFER,we.byteLength,O.STREAM_READ),C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ge),O.readPixels(Y,ae,ce,q,Ke.convert(at),Ke.convert(Je),0);const Lt=B!==null?ze.get(B).__webglFramebuffer:null;He.bindFramebuffer(O.FRAMEBUFFER,Lt);const Tt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await V_(O,Tt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ut),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,we),O.deleteBuffer(ut),O.deleteSync(Tt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,ae=0){const ce=Math.pow(2,-ae),q=Math.floor(C.image.width*ce),we=Math.floor(C.image.height*ce),Ne=Y!==null?Y.x:0,Ge=Y!==null?Y.y:0;ct.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,ae,0,0,Ne,Ge,q,we),He.unbindTexture()};const ra=O.createFramebuffer(),sa=O.createFramebuffer();this.copyTextureToTexture=function(C,Y,ae=null,ce=null,q=0,we=null){we===null&&(q!==0?(Yo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=q,q=0):we=0);let Ne,Ge,Fe,st,at,Je,ut,Lt,Tt;const zt=C.isCompressedTexture?C.mipmaps[we]:C.image;if(ae!==null)Ne=ae.max.x-ae.min.x,Ge=ae.max.y-ae.min.y,Fe=ae.isBox3?ae.max.z-ae.min.z:1,st=ae.min.x,at=ae.min.y,Je=ae.isBox3?ae.min.z:0;else{const mn=Math.pow(2,-q);Ne=Math.floor(zt.width*mn),Ge=Math.floor(zt.height*mn),C.isDataArrayTexture?Fe=zt.depth:C.isData3DTexture?Fe=Math.floor(zt.depth*mn):Fe=1,st=0,at=0,Je=0}ce!==null?(ut=ce.x,Lt=ce.y,Tt=ce.z):(ut=0,Lt=0,Tt=0);const Ut=Ke.convert(Y.format),et=Ke.convert(Y.type);let Ft;Y.isData3DTexture?(ct.setTexture3D(Y,0),Ft=O.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ct.setTexture2DArray(Y,0),Ft=O.TEXTURE_2D_ARRAY):(ct.setTexture2D(Y,0),Ft=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const St=O.getParameter(O.UNPACK_ROW_LENGTH),tn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ri=O.getParameter(O.UNPACK_SKIP_PIXELS),En=O.getParameter(O.UNPACK_SKIP_ROWS),Cr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,zt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,zt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,st),O.pixelStorei(O.UNPACK_SKIP_ROWS,at),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Je);const Bt=C.isDataArrayTexture||C.isData3DTexture,wn=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const mn=ze.get(C),Kt=ze.get(Y),gn=ze.get(mn.__renderTarget),Rr=ze.get(Kt.__renderTarget);He.bindFramebuffer(O.READ_FRAMEBUFFER,gn.__webglFramebuffer),He.bindFramebuffer(O.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let Mt=0;Mt<Fe;Mt++)Bt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.get(C).__webglTexture,q,Je+Mt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.get(Y).__webglTexture,we,Tt+Mt)),O.blitFramebuffer(st,at,Ne,Ge,ut,Lt,Ne,Ge,O.DEPTH_BUFFER_BIT,O.NEAREST);He.bindFramebuffer(O.READ_FRAMEBUFFER,null),He.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||ze.has(C)){const mn=ze.get(C),Kt=ze.get(Y);He.bindFramebuffer(O.READ_FRAMEBUFFER,ra),He.bindFramebuffer(O.DRAW_FRAMEBUFFER,sa);for(let gn=0;gn<Fe;gn++)Bt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,mn.__webglTexture,q,Je+gn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,mn.__webglTexture,q),wn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Kt.__webglTexture,we,Tt+gn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Kt.__webglTexture,we),q!==0?O.blitFramebuffer(st,at,Ne,Ge,ut,Lt,Ne,Ge,O.COLOR_BUFFER_BIT,O.NEAREST):wn?O.copyTexSubImage3D(Ft,we,ut,Lt,Tt+gn,st,at,Ne,Ge):O.copyTexSubImage2D(Ft,we,ut,Lt,st,at,Ne,Ge);He.bindFramebuffer(O.READ_FRAMEBUFFER,null),He.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else wn?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(Ft,we,ut,Lt,Tt,Ne,Ge,Fe,Ut,et,zt.data):Y.isCompressedArrayTexture?O.compressedTexSubImage3D(Ft,we,ut,Lt,Tt,Ne,Ge,Fe,Ut,zt.data):O.texSubImage3D(Ft,we,ut,Lt,Tt,Ne,Ge,Fe,Ut,et,zt):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,we,ut,Lt,Ne,Ge,Ut,et,zt.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,we,ut,Lt,zt.width,zt.height,Ut,zt.data):O.texSubImage2D(O.TEXTURE_2D,we,ut,Lt,Ne,Ge,Ut,et,zt);O.pixelStorei(O.UNPACK_ROW_LENGTH,St),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ri),O.pixelStorei(O.UNPACK_SKIP_ROWS,En),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Cr),we===0&&Y.generateMipmaps&&O.generateMipmap(Ft),He.unbindTexture()},this.initRenderTarget=function(C){ze.get(C).__webglFramebuffer===void 0&&ct.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ct.setTextureCube(C,0):C.isData3DTexture?ct.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ct.setTexture2DArray(C,0):ct.setTexture2D(C,0),He.unbindTexture()},this.resetState=function(){F=0,V=0,B=null,He.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}}function lw({mouseForce:s=20,cursorSize:e=100,isViscous:n=!1,viscous:r=30,iterationsViscous:a=32,iterationsPoisson:l=32,dt:u=.014,BFECC:d=!0,resolution:p=.5,isBounce:h=!1,colors:x=["#5227FF","#FF9FFC","#B19EEF"],style:v={},className:y="",autoDemo:M=!0,autoSpeed:T=.5,autoIntensity:A=2.2,takeoverDuration:S=.25,autoResumeDelay:_=1e3,autoRampDuration:U=.6}){const L=ft.useRef(null),P=ft.useRef(null),z=ft.useRef(null),F=ft.useRef(null),V=ft.useRef(null),B=ft.useRef(!0),D=ft.useRef(null);return ft.useEffect(()=>{if(!L.current)return;function R(nt){let E;Array.isArray(nt)&&nt.length>0?nt.length===1?E=[nt[0],nt[0]]:E=nt:E=["#ffffff","#ffffff"];const w=E.length,j=new Uint8Array(w*4);for(let he=0;he<w;he++){const le=new Dt(E[he]);j[he*4+0]=Math.round(le.r*255),j[he*4+1]=Math.round(le.g*255),j[he*4+2]=Math.round(le.b*255),j[he*4+3]=255}const ee=new hy(j,w,1,ni);return ee.magFilter=kn,ee.minFilter=kn,ee.wrapS=gi,ee.wrapT=gi,ee.generateMipmaps=!1,ee.needsUpdate=!0,ee}const G=R(x),Z=new $t(0,0,0,0);class oe{width=0;height=0;aspect=1;pixelRatio=1;isMobile=!1;breakpoint=768;fboWidth=null;fboHeight=null;time=0;delta=0;container=null;renderer=null;clock=null;init(E){this.container=E,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new aw({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Dt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new wy,this.clock.start()}resize(){if(!this.container)return;const E=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(E.width)),this.height=Math.max(1,Math.floor(E.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.clock&&(this.delta=this.clock.getDelta(),this.time+=this.delta)}}const ie=new oe;class fe{mouseMoved=!1;coords=new gt;coords_old=new gt;diff=new gt;timer=null;hasUserTimer=null;container=null;_onMouseMove=null;_onTouchStart=null;_onTouchMove=null;_onMouseEnter=null;_onMouseLeave=null;_onTouchEnd=null;isHoverInside=!1;hasUserControl=!1;isAutoActive=!1;autoIntensity=2;takeoverActive=!1;takeoverStartTime=0;takeoverDuration=.25;takeoverFrom=new gt;takeoverTo=new gt;onInteract=null;init(E){this.container=E,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),E.addEventListener("mousemove",this._onMouseMove,!1),E.addEventListener("touchstart",this._onTouchStart,!1),E.addEventListener("touchmove",this._onTouchMove,!1),E.addEventListener("mouseenter",this._onMouseEnter,!1),E.addEventListener("mouseleave",this._onMouseLeave,!1),E.addEventListener("touchend",this._onTouchEnd,!1)}dispose(){this.container&&(this.container.removeEventListener("mousemove",this._onMouseMove,!1),this.container.removeEventListener("touchstart",this._onTouchStart,!1),this.container.removeEventListener("touchmove",this._onTouchMove,!1),this.container.removeEventListener("mouseenter",this._onMouseEnter,!1),this.container.removeEventListener("mouseleave",this._onMouseLeave,!1),this.container.removeEventListener("touchend",this._onTouchEnd,!1))}setCoords(E,w){if(!this.container)return;this.timer&&clearTimeout(this.timer),this.hasUserTimer&&clearTimeout(this.hasUserTimer);const j=this.container.getBoundingClientRect(),ee=(E-j.left)/j.width,he=(w-j.top)/j.height;this.coords.set(ee*2-1,-(he*2-1)),this.mouseMoved=!0,this.hasUserControl=!0,this.timer=setTimeout(()=>{this.mouseMoved=!1},100),this.hasUserTimer=setTimeout(()=>{this.hasUserControl=!1},300)}setNormalized(E,w){this.coords.set(E,w),this.mouseMoved=!0,this.hasUserControl=!0,this.hasUserTimer&&clearTimeout(this.hasUserTimer),this.hasUserTimer=setTimeout(()=>{this.hasUserControl=!1},300)}onDocumentMouseMove(E){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){const w=this.container.getBoundingClientRect(),j=(E.clientX-w.left)/w.width,ee=(E.clientY-w.top)/w.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(j*2-1,-(ee*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.takeoverDuration=Math.min(this.takeoverDuration||.05,.05),this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(E.clientX,E.clientY),this.hasUserControl=!0}onDocumentTouchStart(E){if(E.touches.length===1){const w=E.touches[0];this.onInteract&&this.onInteract(),this.setCoords(w.pageX,w.pageY),this.hasUserControl=!0}}onDocumentTouchMove(E){if(E.touches.length===1){const w=E.touches[0];this.onInteract&&this.onInteract(),this.setCoords(w.pageX,w.pageY)}}onTouchEnd(){this.isHoverInside=!1,this.hasUserControl=!1,this.hasUserTimer&&(clearTimeout(this.hasUserTimer),this.hasUserTimer=null)}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1,this.hasUserControl=!1,this.hasUserTimer&&(clearTimeout(this.hasUserTimer),this.hasUserTimer=null)}update(){if(this.takeoverActive){const E=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(E>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const w=E*E*(3-2*E);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,w)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const Q=new fe;class pe{mouse;manager;enabled;speed;resumeDelay;rampDurationMs;active=!1;current=new gt(0,0);target=new gt;lastTime=performance.now();activationTime=0;margin=.2;_tmpDir=new gt;constructor(E,w,j){this.mouse=E,this.manager=w,this.enabled=j.enabled,this.speed=j.speed,this.resumeDelay=j.resumeDelay||3e3,this.rampDurationMs=(j.rampDuration||0)*1e3,this.pickNewTarget()}pickNewTarget(){const E=Math.random;this.target.set((E()*2-1)*(1-this.margin),(E()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const E=performance.now();this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=E,this.activationTime=E),this.mouse.isAutoActive=!0;let w=(E-this.lastTime)/1e3;this.lastTime=E,w>.2&&(w=.016);const j=this._tmpDir.subVectors(this.target,this.current),ee=j.length();if(ee<.01){this.pickNewTarget();return}j.normalize();let he=1;if(this.rampDurationMs>0){const ye=Math.min(1,(E-this.activationTime)/this.rampDurationMs);he=ye*ye*(3-2*ye)}const le=this.speed*w*he,qe=Math.min(le,ee);this.current.addScaledVector(j,qe),this.mouse.setNormalized(this.current.x,this.current.y)}}const N=`
	attribute vec3 position;
	uniform vec2 px;
	uniform vec2 boundarySpace;
	varying vec2 uv;
	precision highp float;
	void main(){
	vec3 pos = position;
	vec2 scale = 1.0 - boundarySpace * 2.0;
	pos.xy = pos.xy * scale;
	uv = vec2(0.5)+(pos.xy)*0.5;
	gl_Position = vec4(pos, 1.0);
}
`,de=`
	attribute vec3 position;
	uniform vec2 px;
	precision highp float;
	varying vec2 uv;
	void main(){
	vec3 pos = position;
	uv = 0.5 + pos.xy * 0.5;
	vec2 n = sign(pos.xy);
	pos.xy = abs(pos.xy) - px * 1.0;
	pos.xy *= n;
	gl_Position = vec4(pos, 1.0);
}
`,ue=`
		precision highp float;
		attribute vec3 position;
		attribute vec2 uv;
		uniform vec2 center;
		uniform vec2 scale;
		uniform vec2 px;
		varying vec2 vUv;
		void main(){
		vec2 pos = position.xy * scale * 2.0 * px + center;
		vUv = uv;
		gl_Position = vec4(pos, 0.0, 1.0);
}
`,k=`
		precision highp float;
		uniform sampler2D velocity;
		uniform float dt;
		uniform bool isBFECC;
		uniform vec2 fboSize;
		uniform vec2 px;
		varying vec2 uv;
		void main(){
		vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
		if(isBFECC == false){
				vec2 vel = texture2D(velocity, uv).xy;
				vec2 uv2 = uv - vel * dt * ratio;
				vec2 newVel = texture2D(velocity, uv2).xy;
				gl_FragColor = vec4(newVel, 0.0, 0.0);
		} else {
				vec2 spot_new = uv;
				vec2 vel_old = texture2D(velocity, uv).xy;
				vec2 spot_old = spot_new - vel_old * dt * ratio;
				vec2 vel_new1 = texture2D(velocity, spot_old).xy;
				vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
				vec2 error = spot_new2 - spot_new;
				vec2 spot_new3 = spot_new - error / 2.0;
				vec2 vel_2 = texture2D(velocity, spot_new3).xy;
				vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
				vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
				gl_FragColor = vec4(newVel2, 0.0, 0.0);
		}
}
`,te=`
		precision highp float;
		uniform sampler2D velocity;
		uniform sampler2D palette;
		uniform vec4 bgColor;
		varying vec2 uv;
		void main(){
		vec2 vel = texture2D(velocity, uv).xy;
		float lenv = clamp(length(vel), 0.0, 1.0);
		vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
		vec3 outRGB = mix(bgColor.rgb, c, lenv);
		float outA = mix(bgColor.a, 1.0, lenv);
		gl_FragColor = vec4(outRGB, outA);
}
`,me=`
		precision highp float;
		uniform sampler2D velocity;
		uniform float dt;
		uniform vec2 px;
		varying vec2 uv;
		void main(){
		float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
		float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
		float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
		float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
		float divergence = (x1 - x0 + y1 - y0) / 2.0;
		gl_FragColor = vec4(divergence / dt);
}
`,Ce=`
		precision highp float;
		uniform vec2 force;
		uniform vec2 center;
		uniform vec2 scale;
		uniform vec2 px;
		varying vec2 vUv;
		void main(){
		vec2 circle = (vUv - 0.5) * 2.0;
		float d = 1.0 - min(length(circle), 1.0);
		d *= d;
		gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Ue=`
		precision highp float;
		uniform sampler2D pressure;
		uniform sampler2D divergence;
		uniform vec2 px;
		varying vec2 uv;
		void main(){
		float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
		float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
		float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
		float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
		float div = texture2D(divergence, uv).r;
		float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
		gl_FragColor = vec4(newP);
}
`,J=`
		precision highp float;
		uniform sampler2D pressure;
		uniform sampler2D velocity;
		uniform vec2 px;
		uniform float dt;
		varying vec2 uv;
		void main(){
		float step = 1.0;
		float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
		float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
		float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
		float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
		vec2 v = texture2D(velocity, uv).xy;
		vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
		v = v - gradP * dt;
		gl_FragColor = vec4(v, 0.0, 1.0);
}
`,re=`
		precision highp float;
		uniform sampler2D velocity;
		uniform sampler2D velocity_new;
		uniform float v;
		uniform vec2 px;
		uniform float dt;
		varying vec2 uv;
		void main(){
		vec2 old = texture2D(velocity, uv).xy;
		vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
		vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
		vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
		vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
		vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
		newv /= 4.0 * (1.0 + v * dt);
		gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class xe{props;uniforms;scene;camera;material;geometry;plane;constructor(E){this.props=E||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Pm,this.camera=new Xl,this.uniforms&&(this.material=new Rl(this.props.material),this.geometry=new es(2,2),this.plane=new ii(this.geometry,this.material),this.scene.add(this.plane))}update(){ie.renderer.setRenderTarget(this.props.output||null),ie.renderer.render(this.scene,this.camera),ie.renderer.setRenderTarget(null)}}class Re extends xe{line;constructor(E){super({material:{vertexShader:N,fragmentShader:k,uniforms:{boundarySpace:{value:E.cellScale},px:{value:E.cellScale},fboSize:{value:E.fboSize},velocity:{value:E.src.texture},dt:{value:E.dt},isBFECC:{value:!0}}},output:E.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const E=new Yi,w=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);E.setAttribute("position",new vi(w,3));const j=new Rl({vertexShader:de,fragmentShader:k,uniforms:this.uniforms});this.line=new _y(E,j),this.scene.add(this.line)}update({dt:E,isBounce:w,BFECC:j}){this.uniforms.dt.value=E,this.line.visible=w,this.uniforms.isBFECC.value=j,super.update()}}class De extends xe{mouse;constructor(E){super({output:E.dst}),this.init(E)}init(E){super.init();const w=new es(1,1),j=new Rl({vertexShader:ue,fragmentShader:Ce,blending:yd,depthWrite:!1,uniforms:{px:{value:E.cellScale},force:{value:new gt(0,0)},center:{value:new gt(0,0)},scale:{value:new gt(E.cursor_size,E.cursor_size)}}});this.mouse=new ii(w,j),this.scene.add(this.mouse)}update(E){const w=Q.diff.x/2*E.mouse_force,j=Q.diff.y/2*E.mouse_force,ee=E.cursor_size*E.cellScale.x,he=E.cursor_size*E.cellScale.y,le=Math.min(Math.max(Q.coords.x,-1+ee+E.cellScale.x*2),1-ee-E.cellScale.x*2),qe=Math.min(Math.max(Q.coords.y,-1+he+E.cellScale.y*2),1-he-E.cellScale.y*2),ye=this.mouse.material.uniforms;ye.force.value.set(w,j),ye.center.value.set(le,qe),ye.scale.value.set(E.cursor_size,E.cursor_size),super.update()}}class pt extends xe{constructor(E){super({material:{vertexShader:N,fragmentShader:re,uniforms:{boundarySpace:{value:E.boundarySpace},velocity:{value:E.src.texture},velocity_new:{value:E.dst_.texture},v:{value:E.viscous},px:{value:E.cellScale},dt:{value:E.dt}}},output:E.dst,output0:E.dst_,output1:E.dst}),this.init()}update({viscous:E,iterations:w,dt:j}){let ee,he;this.uniforms.v.value=E;for(let le=0;le<w;le++)le%2===0?(ee=this.props.output0,he=this.props.output1):(ee=this.props.output1,he=this.props.output0),this.uniforms.velocity_new.value=ee.texture,this.props.output=he,this.uniforms.dt.value=j,super.update();return he}}class Ht extends xe{constructor(E){super({material:{vertexShader:N,fragmentShader:me,uniforms:{boundarySpace:{value:E.boundarySpace},velocity:{value:E.src.texture},px:{value:E.cellScale},dt:{value:E.dt}}},output:E.dst}),this.init()}update({vel:E}){this.uniforms.velocity.value=E.texture,super.update()}}class O extends xe{constructor(E){super({material:{vertexShader:N,fragmentShader:Ue,uniforms:{boundarySpace:{value:E.boundarySpace},pressure:{value:E.dst_.texture},divergence:{value:E.src.texture},px:{value:E.cellScale}}},output:E.dst,output0:E.dst_,output1:E.dst}),this.init()}update({iterations:E}){let w,j;for(let ee=0;ee<E;ee++)ee%2===0?(w=this.props.output0,j=this.props.output1):(w=this.props.output1,j=this.props.output0),this.uniforms.pressure.value=w.texture,this.props.output=j,super.update();return j}}class Nt extends xe{constructor(E){super({material:{vertexShader:N,fragmentShader:J,uniforms:{boundarySpace:{value:E.boundarySpace},pressure:{value:E.src_p.texture},velocity:{value:E.src_v.texture},px:{value:E.cellScale},dt:{value:E.dt}}},output:E.dst}),this.init()}update({vel:E,pressure:w}){this.uniforms.velocity.value=E.texture,this.uniforms.pressure.value=w.texture,super.update()}}class lt{options;fbos;fboSize;cellScale;boundarySpace;constructor(E={}){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...E},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new gt,this.cellScale=new gt,this.boundarySpace=new gt,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Zs:Ei}createAllFBO(){const w={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:kn,magFilter:kn,wrapS:gi,wrapT:gi};for(let j in this.fbos)this.fbos[j]=new Tr(this.fboSize.x,this.fboSize.y,w)}createShaderPass(){this.advection=new Re({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new De({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new pt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Ht({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new O({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Nt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const E=Math.max(1,Math.round(this.options.resolution*ie.width)),w=Math.max(1,Math.round(this.options.resolution*ie.height)),j=1/E,ee=1/w;this.cellScale.set(j,ee),this.fboSize.set(E,w)}resize(){this.calcSize();for(let E in this.fbos)this.fbos[E].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let E=this.fbos.vel_1;this.options.isViscous&&(E=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:E});const w=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:E,pressure:w})}}class tt{simulation;scene;camera;output;constructor(){this.init()}init(){this.simulation=new lt,this.scene=new Pm,this.camera=new Xl,this.output=new ii(new es(2,2),new Rl({vertexShader:N,fragmentShader:te,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new gt},palette:{value:G},bgColor:{value:Z}}})),this.scene.add(this.output)}addScene(E){this.scene.add(E)}resize(){this.simulation.resize()}render(){ie.renderer.setRenderTarget(null),ie.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class He{props;lastUserInteraction=performance.now();autoDriver=null;_loop=null;_resize=null;_onVisibility=null;running=!1;output;constructor(E){this.props=E,ie.init(E.$wrapper),Q.init(E.$wrapper),Q.autoIntensity=E.autoIntensity,Q.takeoverDuration=Math.min(E.takeoverDuration||.25,.05),this.lastUserInteraction=performance.now(),Q.onInteract=()=>{this.lastUserInteraction=performance.now()},this.autoDriver=new pe(Q,this,{enabled:E.autoDemo,speed:E.autoSpeed,resumeDelay:E.autoResumeDelay,rampDuration:E.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():B.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ie.renderer.domElement),this.output=new tt}resize(){ie.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),Q.update(),ie.update(),this.output.update()}loop(){this.running&&(this.render(),F.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,F.current&&(cancelAnimationFrame(F.current),F.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),Q.dispose(),ie.renderer){const E=ie.renderer.domElement;E&&E.parentNode&&E.parentNode.removeChild(E),ie.renderer.dispose()}}catch{}}}const wt=L.current;wt.style.position=wt.style.position||"relative",wt.style.overflow=wt.style.overflow||"hidden";const ze=new He({$wrapper:wt,autoDemo:M,autoSpeed:T,autoIntensity:A,takeoverDuration:S,autoResumeDelay:_,autoRampDuration:U});P.current=ze,(()=>{if(!P.current)return;const nt=P.current.output?.simulation;if(!nt)return;const E=nt.options.resolution;Object.assign(nt.options,{mouse_force:s,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:a,iterations_poisson:l,dt:u,BFECC:d,resolution:p,isBounce:h}),p!==E&&nt.resize()})(),ze.start();const kt=new ResizeObserver(()=>{P.current&&(D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{P.current&&P.current.resize()}))});return kt.observe(wt),z.current=kt,()=>{if(F.current&&cancelAnimationFrame(F.current),z.current)try{z.current.disconnect()}catch{}if(V.current)try{V.current.disconnect()}catch{}P.current&&P.current.dispose(),P.current=null}},[d,e,u,h,n,l,a,s,p,r,x,M,T,A,S,_,U]),ft.useEffect(()=>{const R=P.current;if(!R)return;const G=R.output?.simulation;if(!G)return;const Z=G.options.resolution;Object.assign(G.options,{mouse_force:s,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:a,iterations_poisson:l,dt:u,BFECC:d,resolution:p,isBounce:h}),R.autoDriver&&(R.autoDriver.enabled=M,R.autoDriver.speed=T,R.autoDriver.resumeDelay=_,R.autoDriver.rampDurationMs=U*1e3,R.autoDriver.mouse&&(R.autoDriver.mouse.autoIntensity=A,R.autoDriver.mouse.takeoverDuration=S)),p!==Z&&G.resize()},[s,e,n,r,a,l,u,d,p,h,M,T,A,S,_,U]),m.jsx("div",{ref:L,className:`liquid-ether-container ${y||""}`,style:v})}function cw(){const[s,e]=ft.useState(!1);ft.useEffect(()=>{const r=setTimeout(()=>e(!0),20);return()=>clearTimeout(r)},[]);const n=()=>{const r=document.getElementById("leistungen");if(r){const a=document.querySelector("header"),l=a?a.offsetHeight:120,u=r.getBoundingClientRect().top+window.scrollY,d=Math.max(0,u-l+8);window.scrollTo({top:d,behavior:"smooth"});return}window.location.href="/#leistungen"};return m.jsxs("section",{id:"home",className:"pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden",children:[m.jsx("style",{children:`
          /* slide down from above */
          @keyframes slideInDown {
            from { opacity: 0; transform: translateY(-18px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* base hidden state for words/lines */
          .word, .line { opacity: 0; transform: translateY(-18px); display: inline-block; }

          /* when container has .animate-words we start the animation; use longhand so delays remain */
          .animate-words .word,
          .animate-words .line {
            animation-name: slideInDown;
            /* slower, smoother entrance */
            /* increased duration to slow the reveal as requested */
            animation-duration: 0.6s;
            animation-timing-function: cubic-bezier(.2,.9,.25,1);
            animation-fill-mode: both;
          }

          /* scroll indicator dot: gentle down/up loop */
          @keyframes scrollDot {
            0% { top: 5px; opacity: 1; }
            50% { top: 24px; opacity: 0.6; }
            100% { top: 5px; opacity: 1; }
          }

          .scroll-dot {
            animation: scrollDot 1.6s ease-in-out infinite;
          }

          /* respect reduced motion preferences */
          @media (prefers-reduced-motion: reduce) {
            .scroll-dot { animation: none; }
            .animate-words .word, .animate-words .line { animation: none; opacity: 1; transform: none; }
          }

          /* staggered delays top->down (words first left→right, then lines) */
          .delay-1 { animation-delay: 0s; }
          .delay-2 { animation-delay: 0.16s; }
          .delay-3 { animation-delay: 0.32s; }
          .delay-4 { animation-delay: 0.48s; }
          .delay-5 { animation-delay: 0.64s; }
          .line-delay-6 { animation-delay: 0.88s; }
          .line-delay-7 { animation-delay: 1.12s; }
        `}),m.jsx("div",{className:"absolute inset-0 z-0",children:m.jsx(lw,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:24,cursorSize:100,isViscous:!1,viscous:30,autoSpeed:.25,autoIntensity:3,takeoverDuration:.15,autoResumeDelay:500,autoRampDuration:.6})}),m.jsx("div",{className:"container mx-auto text-center relative z-10 "+(s?"animate-words":""),children:m.jsxs("div",{className:"relative max-w-4xl mx-auto mb-6",children:[m.jsx("span",{"aria-hidden":"true",className:"absolute inset-0 mx-auto text-5xl md:text-7xl leading-tight -z-20 pointer-events-none",style:{background:"linear-gradient(90deg, rgba(130,87,229,0.18), rgba(255,121,198,0.14))",WebkitBackgroundClip:"text",color:"transparent",opacity:.95,transform:"scale(1.02)"},children:"Von der Vision zur Website"}),m.jsx("span",{"aria-hidden":"true",className:"absolute inset-0 mx-auto text-5xl md:text-7xl leading-tight -z-10 pointer-events-none",style:{color:"#ffffff",opacity:.12,transform:"scale(1.01)"},children:"Von der Vision zur Website"}),m.jsxs("h1",{className:"relative text-5xl md:text-7xl text-white leading-tight",children:[m.jsx("span",{className:"word delay-1",children:"Von"})," ",m.jsx("span",{className:"word delay-2",children:"der"})," ",m.jsx("span",{className:"word delay-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400",children:"Vision"})," ",m.jsx("span",{className:"word delay-4",children:"zur"})," ",m.jsx("span",{className:"word delay-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400",children:"Website"})]}),m.jsx("p",{className:"text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-6 line line-delay-6",children:"Hochwertiges Webdesign und strategische Umsetzung für Ihren nachhaltigen Unternehmenserfolg"}),m.jsx("div",{className:"flex justify-center items-center mt-6 mb-12",children:m.jsx("a",{href:"#leistungen",onClick:r=>{r.preventDefault(),n()},className:"line line-delay-7 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm font-medium",children:"Meine Leistungen"})})]})}),m.jsxs("div",{className:`
          absolute z-10 
          bottom-10           
          left-1/2 -translate-x-1/2 
          flex flex-col items-center`,children:[m.jsx("p",{className:"text-slate-200 text-lg mb-3",children:"Mehr entdecken"}),m.jsx("div",{className:"w-[25px] h-[45px] border-2 border-slate-200 rounded-full relative overflow-hidden",children:m.jsx("div",{className:"w-1.5 h-1.5 bg-slate-400 rounded-full absolute top-[5px] left-1/2 -translate-x-1/2 scroll-dot"})})]})]})}function uw(){const s=[{number:"01",title:"Kostenloses Gespräch",description:"Erzähle uns von deiner Vision und deinen Zielen für deine Webseite.",icon:Tx,features:["30 Min. Beratung","Unverbindlich","Individuelle Strategie"]},{number:"02",title:"Kostenloser Entwurf",description:"Wir erstellen einen maßgeschneiderten Entwurf, der deine Marke perfekt repräsentiert.",icon:vg,features:["Design-Konzept","2 Revisionen","Responsive Layout"]},{number:"03",title:"Feinschliff & Go-Live",icon:Vl,features:["Finalisierung","Testing","Launch Support"]}];return m.jsxs(m.Fragment,{children:[m.jsx("style",{children:`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}),m.jsxs("div",{className:"min-h-screen bg-slate-950 relative overflow-hidden",children:[m.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[m.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"}),m.jsx("div",{className:"absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse",style:{animationDelay:"1s"}}),m.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"})]}),m.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6 py-20",children:[m.jsxs("div",{id:"ablauf",className:"text-center mb-20",children:[m.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-6",children:[m.jsx(Zx,{className:"w-4 h-4 text-yellow-400"}),m.jsx("span",{className:"text-purple-300 text-sm font-medium",children:"Schnell. Professionell. Transparent."})]}),m.jsxs("h1",{className:"text-5xl md:text-4xl mb-6 text-white font-medium leading-tight",children:["Von der ",m.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient",children:"Idee"})," zur"," ",m.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 animate-gradient",children:"Webseite"})]}),m.jsx("p",{className:"text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed",children:"Deine professionelle Webseite in nur 3 einfachen Schritten"})]}),m.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20",children:s.map((e,n)=>m.jsx("div",{className:"group relative",style:{animationDelay:`${n*150}ms`},children:m.jsxs("div",{className:"relative h-full bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2",children:[m.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),m.jsxs("div",{className:"relative flex items-start justify-between mb-6",children:[m.jsx("div",{className:"px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30",children:m.jsxs("span",{className:"text-purple-300 font-medium",children:["Schritt ",e.number]})}),m.jsx("div",{className:"p-3 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:scale-110 transition-transform duration-300",children:m.jsx(e.icon,{className:"w-8 h-8 text-purple-400",strokeWidth:1.5})})]}),m.jsxs("div",{className:"relative space-y-4",children:[m.jsx("h3",{className:"text-white text-2xl font-medium leading-tight",children:e.title}),m.jsx("p",{className:"text-slate-400 leading-relaxed",children:e.description}),m.jsx("ul",{className:"space-y-2 pt-4",children:e.features.map((r,a)=>m.jsxs("li",{className:"flex items-center gap-2 text-slate-300 text-sm",children:[m.jsx("div",{className:"w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0",children:m.jsx(nx,{className:"w-3 h-3 text-purple-400",strokeWidth:3})}),r]},a))})]}),n<s.length-1&&m.jsx("div",{className:"hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20",children:m.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50",children:m.jsx("div",{className:"w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-white"})})})]})},e.number))}),m.jsxs("div",{className:"text-center",children:[m.jsxs("div",{className:"inline-flex flex-col sm:flex-row gap-4 items-center",children:[m.jsxs("button",{className:"group relative px-8 py-4 rounded-full overflow-hidden font-medium",children:[m.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] animate-gradient"}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"}),m.jsxs("span",{className:"relative text-white flex items-center gap-2",children:["Jetzt kostenlos starten",m.jsx(Vl,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})]}),m.jsx("button",{onClick:()=>{const e=document.getElementById("kontakt");if(e){const n=document.querySelector("header"),r=n?n.offsetHeight:120,a=e.getBoundingClientRect().top+window.scrollY,l=Math.max(0,a-r-8);window.scrollTo({top:l,behavior:"smooth"});return}window.location.href="/#kontakt"},className:"px-8 py-4 rounded-full border-2 border-slate-700 text-slate-300 hover:border-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm font-medium",children:"Kontakt aufnehmen"})]}),m.jsx("p",{className:"mt-8 text-slate-500 text-sm",children:"✓ Keine versteckten Kosten · ✓ 100% Transparent · ✓ Persönlicher Support"})]})]})]})]})}function og(s,e){if(typeof s=="function")return s(e);s!=null&&(s.current=e)}function dw(...s){return e=>{let n=!1;const r=s.map(a=>{const l=og(a,e);return!n&&typeof l=="function"&&(n=!0),l});if(n)return()=>{for(let a=0;a<r.length;a++){const l=r[a];typeof l=="function"?l():og(s[a],null)}}}}function fw(s){const e=pw(s),n=ft.forwardRef((r,a)=>{const{children:l,...u}=r,d=ft.Children.toArray(l),p=d.find(gw);if(p){const h=p.props.children,x=d.map(v=>v===p?ft.Children.count(h)>1?ft.Children.only(null):ft.isValidElement(h)?h.props.children:null:v);return m.jsx(e,{...u,ref:a,children:ft.isValidElement(h)?ft.cloneElement(h,void 0,x):null})}return m.jsx(e,{...u,ref:a,children:l})});return n.displayName=`${s}.Slot`,n}var hw=fw("Slot");function pw(s){const e=ft.forwardRef((n,r)=>{const{children:a,...l}=n;if(ft.isValidElement(a)){const u=xw(a),d=vw(l,a.props);return a.type!==ft.Fragment&&(d.ref=r?dw(r,u):u),ft.cloneElement(a,d)}return ft.Children.count(a)>1?ft.Children.only(null):null});return e.displayName=`${s}.SlotClone`,e}var mw=Symbol("radix.slottable");function gw(s){return ft.isValidElement(s)&&typeof s.type=="function"&&"__radixId"in s.type&&s.type.__radixId===mw}function vw(s,e){const n={...e};for(const r in e){const a=s[r],l=e[r];/^on[A-Z]/.test(r)?a&&l?n[r]=(...d)=>{const p=l(...d);return a(...d),p}:a&&(n[r]=a):r==="style"?n[r]={...a,...l}:r==="className"&&(n[r]=[a,l].filter(Boolean).join(" "))}return{...s,...n}}function xw(s){let e=Object.getOwnPropertyDescriptor(s.props,"ref")?.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?s.ref:(e=Object.getOwnPropertyDescriptor(s,"ref")?.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?s.props.ref:s.props.ref||s.ref)}function Yg(s){var e,n,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(e=0;e<a;e++)s[e]&&(n=Yg(s[e]))&&(r&&(r+=" "),r+=n)}else for(n in s)s[n]&&(r&&(r+=" "),r+=n);return r}function $g(){for(var s,e,n=0,r="",a=arguments.length;n<a;n++)(s=arguments[n])&&(e=Yg(s))&&(r&&(r+=" "),r+=e);return r}const ag=s=>typeof s=="boolean"?`${s}`:s===0?"0":s,lg=$g,_w=(s,e)=>n=>{var r;if(e?.variants==null)return lg(s,n?.class,n?.className);const{variants:a,defaultVariants:l}=e,u=Object.keys(a).map(h=>{const x=n?.[h],v=l?.[h];if(x===null)return null;const y=ag(x)||ag(v);return a[h][y]}),d=n&&Object.entries(n).reduce((h,x)=>{let[v,y]=x;return y===void 0||(h[v]=y),h},{}),p=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((h,x)=>{let{class:v,className:y,...M}=x;return Object.entries(M).every(T=>{let[A,S]=T;return Array.isArray(S)?S.includes({...l,...d}[A]):{...l,...d}[A]===S})?[...h,v,y]:h},[]);return lg(s,u,p,n?.class,n?.className)},Tf="-",yw=s=>{const e=Mw(s),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=s;return{getClassGroupId:u=>{const d=u.split(Tf);return d[0]===""&&d.length!==1&&d.shift(),Kg(d,e)||Sw(u)},getConflictingClassGroupIds:(u,d)=>{const p=n[u]||[];return d&&r[u]?[...p,...r[u]]:p}}},Kg=(s,e)=>{if(s.length===0)return e.classGroupId;const n=s[0],r=e.nextPart.get(n),a=r?Kg(s.slice(1),r):void 0;if(a)return a;if(e.validators.length===0)return;const l=s.join(Tf);return e.validators.find(({validator:u})=>u(l))?.classGroupId},cg=/^\[(.+)\]$/,Sw=s=>{if(cg.test(s)){const e=cg.exec(s)[1],n=e?.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},Mw=s=>{const{theme:e,classGroups:n}=s,r={nextPart:new Map,validators:[]};for(const a in n)df(n[a],r,a,e);return r},df=(s,e,n,r)=>{s.forEach(a=>{if(typeof a=="string"){const l=a===""?e:ug(e,a);l.classGroupId=n;return}if(typeof a=="function"){if(Ew(a)){df(a(r),e,n,r);return}e.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([l,u])=>{df(u,ug(e,l),n,r)})})},ug=(s,e)=>{let n=s;return e.split(Tf).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Ew=s=>s.isThemeGetter,ww=s=>{if(s<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const a=(l,u)=>{n.set(l,u),e++,e>s&&(e=0,r=n,n=new Map)};return{get(l){let u=n.get(l);if(u!==void 0)return u;if((u=r.get(l))!==void 0)return a(l,u),u},set(l,u){n.has(l)?n.set(l,u):a(l,u)}}},ff="!",hf=":",bw=hf.length,Tw=s=>{const{prefix:e,experimentalParseClassName:n}=s;let r=a=>{const l=[];let u=0,d=0,p=0,h;for(let T=0;T<a.length;T++){let A=a[T];if(u===0&&d===0){if(A===hf){l.push(a.slice(p,T)),p=T+bw;continue}if(A==="/"){h=T;continue}}A==="["?u++:A==="]"?u--:A==="("?d++:A===")"&&d--}const x=l.length===0?a:a.substring(p),v=Aw(x),y=v!==x,M=h&&h>p?h-p:void 0;return{modifiers:l,hasImportantModifier:y,baseClassName:v,maybePostfixModifierPosition:M}};if(e){const a=e+hf,l=r;r=u=>u.startsWith(a)?l(u.substring(a.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:u,maybePostfixModifierPosition:void 0}}if(n){const a=r;r=l=>n({className:l,parseClassName:a})}return r},Aw=s=>s.endsWith(ff)?s.substring(0,s.length-1):s.startsWith(ff)?s.substring(1):s,Cw=s=>{const e=Object.fromEntries(s.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const a=[];let l=[];return r.forEach(u=>{u[0]==="["||e[u]?(a.push(...l.sort(),u),l=[]):l.push(u)}),a.push(...l.sort()),a}},Rw=s=>({cache:ww(s.cacheSize),parseClassName:Tw(s),sortModifiers:Cw(s),...yw(s)}),Pw=/\s+/,Dw=(s,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:l}=e,u=[],d=s.trim().split(Pw);let p="";for(let h=d.length-1;h>=0;h-=1){const x=d[h],{isExternal:v,modifiers:y,hasImportantModifier:M,baseClassName:T,maybePostfixModifierPosition:A}=n(x);if(v){p=x+(p.length>0?" "+p:p);continue}let S=!!A,_=r(S?T.substring(0,A):T);if(!_){if(!S){p=x+(p.length>0?" "+p:p);continue}if(_=r(T),!_){p=x+(p.length>0?" "+p:p);continue}S=!1}const U=l(y).join(":"),L=M?U+ff:U,P=L+_;if(u.includes(P))continue;u.push(P);const z=a(_,S);for(let F=0;F<z.length;++F){const V=z[F];u.push(L+V)}p=x+(p.length>0?" "+p:p)}return p};function Nw(){let s=0,e,n,r="";for(;s<arguments.length;)(e=arguments[s++])&&(n=Zg(e))&&(r&&(r+=" "),r+=n);return r}const Zg=s=>{if(typeof s=="string")return s;let e,n="";for(let r=0;r<s.length;r++)s[r]&&(e=Zg(s[r]))&&(n&&(n+=" "),n+=e);return n};function Lw(s,...e){let n,r,a,l=u;function u(p){const h=e.reduce((x,v)=>v(x),s());return n=Rw(h),r=n.cache.get,a=n.cache.set,l=d,d(p)}function d(p){const h=r(p);if(h)return h;const x=Dw(p,n);return a(p,x),x}return function(){return l(Nw.apply(null,arguments))}}const sn=s=>{const e=n=>n[s]||[];return e.isThemeGetter=!0,e},Qg=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Jg=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Iw=/^\d+\/\d+$/,Uw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,kw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Fw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Ow=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,zw=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Vs=s=>Iw.test(s),_t=s=>!!s&&!Number.isNaN(Number(s)),Sr=s=>!!s&&Number.isInteger(Number(s)),fd=s=>s.endsWith("%")&&_t(s.slice(0,-1)),Bi=s=>Uw.test(s),Bw=()=>!0,Hw=s=>kw.test(s)&&!Fw.test(s),ev=()=>!1,Vw=s=>Ow.test(s),Gw=s=>zw.test(s),jw=s=>!We(s)&&!Xe(s),Ww=s=>eo(s,iv,ev),We=s=>Qg.test(s),Yr=s=>eo(s,rv,Hw),hd=s=>eo(s,Kw,_t),dg=s=>eo(s,tv,ev),Xw=s=>eo(s,nv,Gw),Ll=s=>eo(s,sv,Vw),Xe=s=>Jg.test(s),Vo=s=>to(s,rv),qw=s=>to(s,Zw),fg=s=>to(s,tv),Yw=s=>to(s,iv),$w=s=>to(s,nv),Il=s=>to(s,sv,!0),eo=(s,e,n)=>{const r=Qg.exec(s);return r?r[1]?e(r[1]):n(r[2]):!1},to=(s,e,n=!1)=>{const r=Jg.exec(s);return r?r[1]?e(r[1]):n:!1},tv=s=>s==="position"||s==="percentage",nv=s=>s==="image"||s==="url",iv=s=>s==="length"||s==="size"||s==="bg-size",rv=s=>s==="length",Kw=s=>s==="number",Zw=s=>s==="family-name",sv=s=>s==="shadow",Qw=()=>{const s=sn("color"),e=sn("font"),n=sn("text"),r=sn("font-weight"),a=sn("tracking"),l=sn("leading"),u=sn("breakpoint"),d=sn("container"),p=sn("spacing"),h=sn("radius"),x=sn("shadow"),v=sn("inset-shadow"),y=sn("text-shadow"),M=sn("drop-shadow"),T=sn("blur"),A=sn("perspective"),S=sn("aspect"),_=sn("ease"),U=sn("animate"),L=()=>["auto","avoid","all","avoid-page","page","left","right","column"],P=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],z=()=>[...P(),Xe,We],F=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto","contain","none"],B=()=>[Xe,We,p],D=()=>[Vs,"full","auto",...B()],R=()=>[Sr,"none","subgrid",Xe,We],G=()=>["auto",{span:["full",Sr,Xe,We]},Sr,Xe,We],Z=()=>[Sr,"auto",Xe,We],oe=()=>["auto","min","max","fr",Xe,We],ie=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],fe=()=>["start","end","center","stretch","center-safe","end-safe"],Q=()=>["auto",...B()],pe=()=>[Vs,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...B()],N=()=>[s,Xe,We],de=()=>[...P(),fg,dg,{position:[Xe,We]}],ue=()=>["no-repeat",{repeat:["","x","y","space","round"]}],k=()=>["auto","cover","contain",Yw,Ww,{size:[Xe,We]}],te=()=>[fd,Vo,Yr],me=()=>["","none","full",h,Xe,We],Ce=()=>["",_t,Vo,Yr],Ue=()=>["solid","dashed","dotted","double"],J=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],re=()=>[_t,fd,fg,dg],xe=()=>["","none",T,Xe,We],Re=()=>["none",_t,Xe,We],De=()=>["none",_t,Xe,We],pt=()=>[_t,Xe,We],Ht=()=>[Vs,"full",...B()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Bi],breakpoint:[Bi],color:[Bw],container:[Bi],"drop-shadow":[Bi],ease:["in","out","in-out"],font:[jw],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Bi],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Bi],shadow:[Bi],spacing:["px",_t],text:[Bi],"text-shadow":[Bi],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Vs,We,Xe,S]}],container:["container"],columns:[{columns:[_t,We,Xe,d]}],"break-after":[{"break-after":L()}],"break-before":[{"break-before":L()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:z()}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:D()}],"inset-x":[{"inset-x":D()}],"inset-y":[{"inset-y":D()}],start:[{start:D()}],end:[{end:D()}],top:[{top:D()}],right:[{right:D()}],bottom:[{bottom:D()}],left:[{left:D()}],visibility:["visible","invisible","collapse"],z:[{z:[Sr,"auto",Xe,We]}],basis:[{basis:[Vs,"full","auto",d,...B()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[_t,Vs,"auto","initial","none",We]}],grow:[{grow:["",_t,Xe,We]}],shrink:[{shrink:["",_t,Xe,We]}],order:[{order:[Sr,"first","last","none",Xe,We]}],"grid-cols":[{"grid-cols":R()}],"col-start-end":[{col:G()}],"col-start":[{"col-start":Z()}],"col-end":[{"col-end":Z()}],"grid-rows":[{"grid-rows":R()}],"row-start-end":[{row:G()}],"row-start":[{"row-start":Z()}],"row-end":[{"row-end":Z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":oe()}],"auto-rows":[{"auto-rows":oe()}],gap:[{gap:B()}],"gap-x":[{"gap-x":B()}],"gap-y":[{"gap-y":B()}],"justify-content":[{justify:[...ie(),"normal"]}],"justify-items":[{"justify-items":[...fe(),"normal"]}],"justify-self":[{"justify-self":["auto",...fe()]}],"align-content":[{content:["normal",...ie()]}],"align-items":[{items:[...fe(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...fe(),{baseline:["","last"]}]}],"place-content":[{"place-content":ie()}],"place-items":[{"place-items":[...fe(),"baseline"]}],"place-self":[{"place-self":["auto",...fe()]}],p:[{p:B()}],px:[{px:B()}],py:[{py:B()}],ps:[{ps:B()}],pe:[{pe:B()}],pt:[{pt:B()}],pr:[{pr:B()}],pb:[{pb:B()}],pl:[{pl:B()}],m:[{m:Q()}],mx:[{mx:Q()}],my:[{my:Q()}],ms:[{ms:Q()}],me:[{me:Q()}],mt:[{mt:Q()}],mr:[{mr:Q()}],mb:[{mb:Q()}],ml:[{ml:Q()}],"space-x":[{"space-x":B()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":B()}],"space-y-reverse":["space-y-reverse"],size:[{size:pe()}],w:[{w:[d,"screen",...pe()]}],"min-w":[{"min-w":[d,"screen","none",...pe()]}],"max-w":[{"max-w":[d,"screen","none","prose",{screen:[u]},...pe()]}],h:[{h:["screen","lh",...pe()]}],"min-h":[{"min-h":["screen","lh","none",...pe()]}],"max-h":[{"max-h":["screen","lh",...pe()]}],"font-size":[{text:["base",n,Vo,Yr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Xe,hd]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",fd,We]}],"font-family":[{font:[qw,We,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,Xe,We]}],"line-clamp":[{"line-clamp":[_t,"none",Xe,hd]}],leading:[{leading:[l,...B()]}],"list-image":[{"list-image":["none",Xe,We]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Xe,We]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:N()}],"text-color":[{text:N()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Ue(),"wavy"]}],"text-decoration-thickness":[{decoration:[_t,"from-font","auto",Xe,Yr]}],"text-decoration-color":[{decoration:N()}],"underline-offset":[{"underline-offset":[_t,"auto",Xe,We]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:B()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Xe,We]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Xe,We]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:de()}],"bg-repeat":[{bg:ue()}],"bg-size":[{bg:k()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Sr,Xe,We],radial:["",Xe,We],conic:[Sr,Xe,We]},$w,Xw]}],"bg-color":[{bg:N()}],"gradient-from-pos":[{from:te()}],"gradient-via-pos":[{via:te()}],"gradient-to-pos":[{to:te()}],"gradient-from":[{from:N()}],"gradient-via":[{via:N()}],"gradient-to":[{to:N()}],rounded:[{rounded:me()}],"rounded-s":[{"rounded-s":me()}],"rounded-e":[{"rounded-e":me()}],"rounded-t":[{"rounded-t":me()}],"rounded-r":[{"rounded-r":me()}],"rounded-b":[{"rounded-b":me()}],"rounded-l":[{"rounded-l":me()}],"rounded-ss":[{"rounded-ss":me()}],"rounded-se":[{"rounded-se":me()}],"rounded-ee":[{"rounded-ee":me()}],"rounded-es":[{"rounded-es":me()}],"rounded-tl":[{"rounded-tl":me()}],"rounded-tr":[{"rounded-tr":me()}],"rounded-br":[{"rounded-br":me()}],"rounded-bl":[{"rounded-bl":me()}],"border-w":[{border:Ce()}],"border-w-x":[{"border-x":Ce()}],"border-w-y":[{"border-y":Ce()}],"border-w-s":[{"border-s":Ce()}],"border-w-e":[{"border-e":Ce()}],"border-w-t":[{"border-t":Ce()}],"border-w-r":[{"border-r":Ce()}],"border-w-b":[{"border-b":Ce()}],"border-w-l":[{"border-l":Ce()}],"divide-x":[{"divide-x":Ce()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Ce()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Ue(),"hidden","none"]}],"divide-style":[{divide:[...Ue(),"hidden","none"]}],"border-color":[{border:N()}],"border-color-x":[{"border-x":N()}],"border-color-y":[{"border-y":N()}],"border-color-s":[{"border-s":N()}],"border-color-e":[{"border-e":N()}],"border-color-t":[{"border-t":N()}],"border-color-r":[{"border-r":N()}],"border-color-b":[{"border-b":N()}],"border-color-l":[{"border-l":N()}],"divide-color":[{divide:N()}],"outline-style":[{outline:[...Ue(),"none","hidden"]}],"outline-offset":[{"outline-offset":[_t,Xe,We]}],"outline-w":[{outline:["",_t,Vo,Yr]}],"outline-color":[{outline:N()}],shadow:[{shadow:["","none",x,Il,Ll]}],"shadow-color":[{shadow:N()}],"inset-shadow":[{"inset-shadow":["none",v,Il,Ll]}],"inset-shadow-color":[{"inset-shadow":N()}],"ring-w":[{ring:Ce()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:N()}],"ring-offset-w":[{"ring-offset":[_t,Yr]}],"ring-offset-color":[{"ring-offset":N()}],"inset-ring-w":[{"inset-ring":Ce()}],"inset-ring-color":[{"inset-ring":N()}],"text-shadow":[{"text-shadow":["none",y,Il,Ll]}],"text-shadow-color":[{"text-shadow":N()}],opacity:[{opacity:[_t,Xe,We]}],"mix-blend":[{"mix-blend":[...J(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":J()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[_t]}],"mask-image-linear-from-pos":[{"mask-linear-from":re()}],"mask-image-linear-to-pos":[{"mask-linear-to":re()}],"mask-image-linear-from-color":[{"mask-linear-from":N()}],"mask-image-linear-to-color":[{"mask-linear-to":N()}],"mask-image-t-from-pos":[{"mask-t-from":re()}],"mask-image-t-to-pos":[{"mask-t-to":re()}],"mask-image-t-from-color":[{"mask-t-from":N()}],"mask-image-t-to-color":[{"mask-t-to":N()}],"mask-image-r-from-pos":[{"mask-r-from":re()}],"mask-image-r-to-pos":[{"mask-r-to":re()}],"mask-image-r-from-color":[{"mask-r-from":N()}],"mask-image-r-to-color":[{"mask-r-to":N()}],"mask-image-b-from-pos":[{"mask-b-from":re()}],"mask-image-b-to-pos":[{"mask-b-to":re()}],"mask-image-b-from-color":[{"mask-b-from":N()}],"mask-image-b-to-color":[{"mask-b-to":N()}],"mask-image-l-from-pos":[{"mask-l-from":re()}],"mask-image-l-to-pos":[{"mask-l-to":re()}],"mask-image-l-from-color":[{"mask-l-from":N()}],"mask-image-l-to-color":[{"mask-l-to":N()}],"mask-image-x-from-pos":[{"mask-x-from":re()}],"mask-image-x-to-pos":[{"mask-x-to":re()}],"mask-image-x-from-color":[{"mask-x-from":N()}],"mask-image-x-to-color":[{"mask-x-to":N()}],"mask-image-y-from-pos":[{"mask-y-from":re()}],"mask-image-y-to-pos":[{"mask-y-to":re()}],"mask-image-y-from-color":[{"mask-y-from":N()}],"mask-image-y-to-color":[{"mask-y-to":N()}],"mask-image-radial":[{"mask-radial":[Xe,We]}],"mask-image-radial-from-pos":[{"mask-radial-from":re()}],"mask-image-radial-to-pos":[{"mask-radial-to":re()}],"mask-image-radial-from-color":[{"mask-radial-from":N()}],"mask-image-radial-to-color":[{"mask-radial-to":N()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":P()}],"mask-image-conic-pos":[{"mask-conic":[_t]}],"mask-image-conic-from-pos":[{"mask-conic-from":re()}],"mask-image-conic-to-pos":[{"mask-conic-to":re()}],"mask-image-conic-from-color":[{"mask-conic-from":N()}],"mask-image-conic-to-color":[{"mask-conic-to":N()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:de()}],"mask-repeat":[{mask:ue()}],"mask-size":[{mask:k()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Xe,We]}],filter:[{filter:["","none",Xe,We]}],blur:[{blur:xe()}],brightness:[{brightness:[_t,Xe,We]}],contrast:[{contrast:[_t,Xe,We]}],"drop-shadow":[{"drop-shadow":["","none",M,Il,Ll]}],"drop-shadow-color":[{"drop-shadow":N()}],grayscale:[{grayscale:["",_t,Xe,We]}],"hue-rotate":[{"hue-rotate":[_t,Xe,We]}],invert:[{invert:["",_t,Xe,We]}],saturate:[{saturate:[_t,Xe,We]}],sepia:[{sepia:["",_t,Xe,We]}],"backdrop-filter":[{"backdrop-filter":["","none",Xe,We]}],"backdrop-blur":[{"backdrop-blur":xe()}],"backdrop-brightness":[{"backdrop-brightness":[_t,Xe,We]}],"backdrop-contrast":[{"backdrop-contrast":[_t,Xe,We]}],"backdrop-grayscale":[{"backdrop-grayscale":["",_t,Xe,We]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[_t,Xe,We]}],"backdrop-invert":[{"backdrop-invert":["",_t,Xe,We]}],"backdrop-opacity":[{"backdrop-opacity":[_t,Xe,We]}],"backdrop-saturate":[{"backdrop-saturate":[_t,Xe,We]}],"backdrop-sepia":[{"backdrop-sepia":["",_t,Xe,We]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":B()}],"border-spacing-x":[{"border-spacing-x":B()}],"border-spacing-y":[{"border-spacing-y":B()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Xe,We]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[_t,"initial",Xe,We]}],ease:[{ease:["linear","initial",_,Xe,We]}],delay:[{delay:[_t,Xe,We]}],animate:[{animate:["none",U,Xe,We]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[A,Xe,We]}],"perspective-origin":[{"perspective-origin":z()}],rotate:[{rotate:Re()}],"rotate-x":[{"rotate-x":Re()}],"rotate-y":[{"rotate-y":Re()}],"rotate-z":[{"rotate-z":Re()}],scale:[{scale:De()}],"scale-x":[{"scale-x":De()}],"scale-y":[{"scale-y":De()}],"scale-z":[{"scale-z":De()}],"scale-3d":["scale-3d"],skew:[{skew:pt()}],"skew-x":[{"skew-x":pt()}],"skew-y":[{"skew-y":pt()}],transform:[{transform:[Xe,We,"","none","gpu","cpu"]}],"transform-origin":[{origin:z()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ht()}],"translate-x":[{"translate-x":Ht()}],"translate-y":[{"translate-y":Ht()}],"translate-z":[{"translate-z":Ht()}],"translate-none":["translate-none"],accent:[{accent:N()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:N()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Xe,We]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":B()}],"scroll-mx":[{"scroll-mx":B()}],"scroll-my":[{"scroll-my":B()}],"scroll-ms":[{"scroll-ms":B()}],"scroll-me":[{"scroll-me":B()}],"scroll-mt":[{"scroll-mt":B()}],"scroll-mr":[{"scroll-mr":B()}],"scroll-mb":[{"scroll-mb":B()}],"scroll-ml":[{"scroll-ml":B()}],"scroll-p":[{"scroll-p":B()}],"scroll-px":[{"scroll-px":B()}],"scroll-py":[{"scroll-py":B()}],"scroll-ps":[{"scroll-ps":B()}],"scroll-pe":[{"scroll-pe":B()}],"scroll-pt":[{"scroll-pt":B()}],"scroll-pr":[{"scroll-pr":B()}],"scroll-pb":[{"scroll-pb":B()}],"scroll-pl":[{"scroll-pl":B()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Xe,We]}],fill:[{fill:["none",...N()]}],"stroke-w":[{stroke:[_t,Vo,Yr,hd]}],stroke:[{stroke:["none",...N()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Jw=Lw(Qw);function ns(...s){return Jw($g(s))}const eb=_w("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function tb({className:s,variant:e,size:n,asChild:r=!1,...a}){const l=r?hw:"button";return m.jsx(l,{"data-slot":"button",className:ns(eb({variant:e,size:n,className:s})),...a})}function pd({className:s,type:e,...n}){return m.jsx("input",{type:e,"data-slot":"input",className:ns("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",s),...n})}function nb({className:s,...e}){return m.jsx("textarea",{"data-slot":"textarea",className:ns("resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),...e})}function md({className:s,...e}){return m.jsx("div",{"data-slot":"card",className:ns("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",s),...e})}function gd({className:s,...e}){return m.jsx("div",{"data-slot":"card-header",className:ns("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",s),...e})}function vd({className:s,...e}){return m.jsx("h4",{"data-slot":"card-title",className:ns("leading-none",s),...e})}function xd({className:s,...e}){return m.jsx("div",{"data-slot":"card-content",className:ns("px-6 [&:last-child]:pb-6",s),...e})}function ib(){const s=e=>{e.preventDefault(),alert("Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen melden.")};return m.jsx("section",{id:"kontakt",className:"py-20 px-6",children:m.jsxs("div",{className:"container mx-auto",children:[m.jsxs("div",{className:"text-center mb-16",children:[m.jsxs("h2",{className:"text-3xl md:text-5xl mb-4 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent",children:[m.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400",children:"Kontakt"})," aufnehmen"]}),m.jsx("p",{className:"text-slate-400 text-lg max-w-2xl mx-auto",children:"Haben Sie ein Projekt im Kopf? Lassen Sie uns darüber sprechen!"})]}),m.jsxs("div",{className:"grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto",children:[m.jsxs("div",{className:"space-y-6",children:[m.jsxs(md,{className:"bg-slate-900/50 border-purple-500/20",children:[m.jsxs(gd,{children:[m.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center mb-2",children:m.jsx(gf,{className:"w-6 h-6"})}),m.jsx(vd,{className:"text-white",children:"E-Mail"})]}),m.jsx(xd,{children:m.jsx("p",{className:"text-slate-400",children:"info@webdev-pro.de"})})]}),m.jsxs(md,{className:"bg-slate-900/50 border-purple-500/20",children:[m.jsxs(gd,{children:[m.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center mb-2",children:m.jsx(gg,{className:"w-6 h-6"})}),m.jsx(vd,{className:"text-white",children:"Standort"})]}),m.jsx(xd,{children:m.jsx("p",{className:"text-slate-400",children:"Heilbronn, Deutschland"})})]})]}),m.jsx("div",{className:"lg:col-span-2",children:m.jsxs(md,{className:"bg-slate-900/50 border-purple-500/20",children:[m.jsx(gd,{children:m.jsx(vd,{className:"text-white",children:"Nachricht senden"})}),m.jsx(xd,{children:m.jsxs("form",{onSubmit:s,className:"space-y-6",children:[m.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[m.jsxs("div",{className:"space-y-2",children:[m.jsx("label",{htmlFor:"name",className:"text-slate-300",children:"Name"}),m.jsx(pd,{id:"name",placeholder:"Ihr Name",required:!0,className:"bg-slate-800/50 border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-500/50"})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsx("label",{htmlFor:"email",className:"text-slate-300",children:"E-Mail"}),m.jsx(pd,{id:"email",type:"email",placeholder:"ihre@email.de",required:!0,className:"bg-slate-800/50 border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-500/50"})]})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsx("label",{htmlFor:"subject",className:"text-slate-300",children:"Betreff"}),m.jsx(pd,{id:"subject",placeholder:"Worum geht es?",required:!0,className:"bg-slate-800/50 border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-500/50"})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsx("label",{htmlFor:"message",className:"text-slate-300",children:"Nachricht"}),m.jsx(nb,{id:"message",placeholder:"Erzählen Sie mir von Ihrem Projekt...",required:!0,rows:6,className:"bg-slate-800/50 border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-500/50"})]}),m.jsxs(tb,{type:"submit",className:"w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 border-0",children:[m.jsx(kx,{className:"w-4 h-4 mr-2"}),"Nachricht senden"]})]})})]})})]})]})})}const rb=[{icon:mx,href:"#",name:"GitHub"},{icon:yx,href:"https://www.linkedin.com/in/serhat-%C3%B6zden-958130361/",name:"LinkedIn",target:"_blank",rel:"noopener noreferrer"},{icon:gf,href:"#",name:"Email"}];function Ul(){const s=new Date().getFullYear();return m.jsx("footer",{className:"bg-slate-950/80 backdrop-blur-md border-t border-purple-500/20 mt-20 pt-12 pb-6",children:m.jsxs("div",{className:"max-w-6xl mx-auto px-6 sm:px-8 lg:px-12",children:[m.jsxs("div",{className:"flex gap-8 flex-nowrap justify-between items-start",children:[m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[m.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center",children:m.jsx(mf,{className:"w-5 h-5 text-white"})}),m.jsx("span",{className:"font-bold text-xl text-white",children:"oezdens"})]}),m.jsx("p",{className:"text-slate-400 text-sm",children:"Moderne Webentwicklung & Design, spezialisiert auf reaktive Oberflächen."})]}),m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Navigation"}),m.jsxs("ul",{className:"space-y-2 text-sm",children:[m.jsx("li",{children:m.jsx("a",{href:"#home",className:"text-slate-400 hover:text-purple-400 transition-colors",children:"Home"})}),m.jsx("li",{children:m.jsx("a",{href:"#leistungen",className:"text-slate-400 hover:text-purple-400 transition-colors",children:"Leistungen"})}),m.jsx("li",{children:m.jsx("a",{href:"#ueber-mich",className:"text-slate-400 hover:text-purple-400 transition-colors",children:"Über mich"})})]})]}),m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Services"}),m.jsxs("ul",{className:"space-y-2 text-sm",children:[m.jsx("li",{children:m.jsx("a",{href:"#",className:"text-slate-400 hover:text-purple-400 transition-colors",children:"UI/UX Design"})}),m.jsx("li",{children:m.jsx("a",{href:"#",className:"text-slate-400 hover:text-purple-400 transition-colors",children:"Front-end Development"})}),m.jsx("li",{children:m.jsx("a",{href:"#",className:"text-slate-400 hover:text-purple-400 transition-colors",children:"SEO Optimierung"})})]})]}),m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Kontakt"}),m.jsx("a",{href:"#kontakt",onClick:e=>{e.preventDefault();const n=document.getElementById("kontakt");if(n){const r=document.querySelector("header"),a=r?r.offsetHeight:120,l=n.getBoundingClientRect().top+window.scrollY,u=Math.max(0,l-a-16);window.scrollTo({top:u,behavior:"smooth"});return}window.location.href="/#kontakt"},className:"inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity text-sm font-medium mb-4",children:"Jetzt Kontakt aufnehmen"}),m.jsx("div",{className:"flex space-x-4",children:rb.map(e=>m.jsx("a",{href:e.href,"aria-label":e.name,className:"text-slate-400 hover:text-purple-400 transition-colors",target:e.target,rel:e.rel,children:m.jsx(e.icon,{className:"w-6 h-6"})},e.name))})]})]}),m.jsx("hr",{className:"my-8 border-purple-500/10"}),m.jsxs("div",{className:"flex justify-between items-center text-sm text-slate-500",children:[m.jsxs("p",{children:["© ",s," oezdens. Alle Rechte vorbehalten."]}),m.jsxs("div",{className:"flex space-x-4",children:[m.jsx("a",{href:"/impressum1",className:"hover:text-purple-400 transition-colors",children:"Impressum"}),m.jsx("a",{href:"/datenschutz",className:"hover:text-purple-400 transition-colors",children:"Datenschutz"}),m.jsx("a",{href:"/barrierefreiheit",className:"hover:text-purple-400 transition-colors",children:"Barrierefreiheit"})]})]})]})})}function hg({checked:s,onChange:e,disabled:n}){const r={position:"relative",display:"inline-flex",width:"44px",height:"24px",borderRadius:"12px",backgroundColor:s?"#db2777":"rgba(148, 163, 184, 0.3)",border:"none",cursor:n?"not-allowed":"pointer",transition:"background-color 0.2s",opacity:n?.5:1,padding:0},a={position:"absolute",top:"2px",left:s?"22px":"2px",width:"20px",height:"20px",borderRadius:"10px",backgroundColor:"#fff",transition:"left 0.2s",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"};return m.jsx("button",{type:"button",style:r,onClick:()=>!n&&e(!s),disabled:n,children:m.jsx("span",{style:a})})}function kl({children:s,onClick:e,variant:n="primary",style:r}){const[a,l]=ft.useState(!1),u={padding:"10px 20px",borderRadius:"8px",cursor:"pointer",fontSize:"14px",fontWeight:"500",transition:"all 0.2s",fontFamily:"inherit",...r},p=n==="primary"?{...u,background:"linear-gradient(90deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%)",color:"#fff",border:"none",boxShadow:a?"0 14px 40px rgba(109,40,217,0.18), 0 6px 20px rgba(124,58,237,0.08)":"0 6px 18px rgba(99,102,241,0.06)",transform:a?"translateY(-2px)":void 0}:{...u,backgroundColor:a?"#1e293b":"transparent",color:a?"#fff":"#e2e8f0",border:"1px solid #475569"};return m.jsx("button",{style:p,onClick:e,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:s})}function sb(){const[s,e]=ft.useState(!1),[n,r]=ft.useState(!1),[a,l]=ft.useState(!1),[u,d]=ft.useState({necessary:!0,analytics:!1,marketing:!1,preferences:!1}),[p,h]=ft.useState(!1),[x,v]=ft.useState(!1),[y,M]=ft.useState(!1),[T,A]=ft.useState(!1);ft.useEffect(()=>{localStorage.getItem("cookieConsent")||setTimeout(()=>{e(!0),h(!0)},100)},[]);const S=()=>{const me={necessary:!0,analytics:!0,marketing:!0,preferences:!0};localStorage.setItem("cookieConsent",JSON.stringify(me)),h(!1),setTimeout(()=>e(!1),300)},_=()=>{const me={necessary:!0,analytics:!1,marketing:!1,preferences:!1};localStorage.setItem("cookieConsent",JSON.stringify(me)),h(!1),setTimeout(()=>e(!1),300)},U=()=>{localStorage.setItem("cookieConsent",JSON.stringify(u)),h(!1),setTimeout(()=>e(!1),300)},L=me=>{me!=="necessary"&&d(Ce=>({...Ce,[me]:!Ce[me]}))};if(!s)return null;const P=[{id:"necessary",name:"Notwendige Cookies",description:"Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.",required:!0},{id:"analytics",name:"Analytische Cookies",description:"Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln.",required:!1},{id:"marketing",name:"Marketing Cookies",description:"Diese Cookies werden verwendet, um Besuchern relevante Werbung und Marketingkampagnen bereitzustellen.",required:!1},{id:"preferences",name:"Präferenz Cookies",description:"Diese Cookies ermöglichen es der Website, sich Ihre Einstellungen zu merken und ein verbessertes, persönlicheres Erlebnis zu bieten.",required:!1}],z={position:"fixed",inset:"0",zIndex:9999,display:"flex",alignItems:"flex-end",justifyContent:"center",padding:"16px",backgroundColor:"rgba(0, 0, 0, 0.5)",opacity:p?1:0,transition:"opacity 0.3s"},F={position:"relative",width:"100%",maxWidth:"672px",backgroundColor:"#0b1220",backgroundImage:"linear-gradient(135deg, rgba(139,92,246,0.06), rgba(124,58,237,0.03))",borderRadius:"16px",boxShadow:"0 20px 40px -10px rgba(16, 24, 40, 0.6), 0 6px 18px rgba(124,58,237,0.06)",overflow:"hidden",margin:"0",transform:p?"translateY(0)":"translateY(150px)",opacity:p?1:0,transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"},V={padding:"14px"},B={display:"flex",alignItems:"flex-start",gap:"16px",marginBottom:"16px"},D={flexShrink:0,width:"32px",height:"32px",backgroundColor:"rgba(219, 39, 119, 0.2)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},R={color:"#fff",fontSize:"16px",fontWeight:"600",marginBottom:"8px",lineHeight:"1.4"},G={color:"#cbd5e1",fontSize:"12px",lineHeight:"1.6"},Z={width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px",borderRadius:"8px",border:"1px solid #334155",backgroundColor:"transparent",cursor:"pointer",marginBottom:"16px",transition:"border-color 0.2s",fontFamily:"inherit",borderColor:x?"#475569":"#334155"},oe={padding:"8px",backgroundColor:"rgba(30, 41, 59, 0.5)",borderRadius:"8px",border:"1px solid #334155",marginBottom:"12px"},ie={display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"16px"},fe={color:"#fff",fontSize:"12px",fontWeight:"500",marginBottom:"4px",display:"flex",alignItems:"center",gap:"8px"},Q={padding:"2px 8px",backgroundColor:"#334155",borderRadius:"4px",fontSize:"12px",color:"#cbd5e1"},pe={color:"#94a3b8",fontSize:"11px",lineHeight:"1.4"},N={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(90px, 1fr))",gap:"8px"},de={backgroundColor:"rgba(2, 6, 23, 0.5)",padding:"10px 12px",display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:"1px solid #1e293b",flexWrap:"wrap",gap:"12px"},ue={color:y?"#cbd5e1":"#94a3b8",fontSize:"14px",textDecoration:"none",transition:"color 0.2s"},k={color:T?"#cbd5e1":"#64748b",backgroundColor:"transparent",border:"none",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center",justifyContent:"center",transition:"color 0.2s"},te={marginBottom:"12px",maxHeight:"160px",overflowY:"auto",paddingRight:"8px"};return m.jsx("div",{style:z,children:m.jsxs("div",{style:F,onClick:me=>me.stopPropagation(),children:[m.jsxs("div",{style:V,children:[m.jsxs("div",{style:B,children:[m.jsx("div",{style:D,children:m.jsx(_d,{style:{width:"20px",height:"20px",color:"#ec4899"}})}),m.jsxs("div",{style:{flex:1},children:[m.jsx("h2",{style:R,children:"Cookie-Einstellungen"}),m.jsx("p",{style:G,children:"Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern und personalisierte Inhalte bereitzustellen."})]})]}),m.jsxs("button",{style:Z,onClick:()=>{const me=!n;r(me),me&&l(!1)},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),children:[m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[m.jsx("div",{style:{width:"20px",height:"20px",borderRadius:"4px",border:"2px solid #64748b",display:"flex",alignItems:"center",justifyContent:"center"},children:m.jsx(_d,{style:{width:"12px",height:"12px",color:"#94a3b8"}})}),m.jsx("span",{style:{color:"#e2e8f0",fontSize:"14px"},children:"Cookie-Details anzeigen"})]}),m.jsx(rx,{style:{width:"20px",height:"20px",color:"#94a3b8",transform:n?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s"}})]}),n&&m.jsx("div",{style:te,children:P.map(me=>m.jsx("div",{style:oe,children:m.jsxs("div",{style:ie,children:[m.jsxs("div",{style:{flex:1},children:[m.jsxs("div",{style:fe,children:[m.jsx("span",{children:me.name}),me.required&&m.jsx("span",{style:Q,children:"Erforderlich"})]}),m.jsx("p",{style:pe,children:me.description})]}),m.jsx(hg,{checked:u[me.id],onChange:()=>L(me.id),disabled:me.required})]})},me.id))}),a&&m.jsxs("div",{style:te,children:[P.map(me=>m.jsx("div",{style:oe,children:m.jsxs("div",{style:ie,children:[m.jsxs("div",{style:{flex:1},children:[m.jsxs("div",{style:fe,children:[m.jsx("span",{children:me.name}),me.required&&m.jsx("span",{style:Q,children:"Erforderlich"})]}),m.jsx("p",{style:pe,children:me.description})]}),m.jsx(hg,{checked:u[me.id],onChange:()=>L(me.id),disabled:me.required})]})},me.id)),m.jsx(kl,{onClick:U,style:{width:"100%"},children:"Auswahl speichern"})]}),!a&&m.jsxs("div",{style:N,children:[m.jsx(kl,{onClick:S,children:"Alle akzeptieren"}),m.jsx(kl,{onClick:()=>{l(!0),r(!1)},variant:"outline",children:"Anpassen"}),m.jsx(kl,{onClick:_,variant:"outline",children:"Nur notwendige"})]})]}),m.jsxs("div",{style:de,children:[m.jsx("a",{href:"#",style:ue,onMouseEnter:()=>M(!0),onMouseLeave:()=>M(!1),children:"Weitere Informationen in unserer Datenschutzerklärung"}),m.jsx("button",{style:k,onClick:()=>{h(!1),setTimeout(()=>e(!1),300)},onMouseEnter:()=>A(!0),onMouseLeave:()=>A(!1),children:m.jsx($x,{style:{width:"20px",height:"20px"}})})]})]})})}const ob="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function ab(s){const[e,n]=ft.useState(!1),r=()=>{n(!0)},{src:a,alt:l,style:u,className:d,...p}=s;return e?m.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${d??""}`,style:u,children:m.jsx("div",{className:"flex items-center justify-center w-full h-full",children:m.jsx("img",{src:ob,alt:"Error loading image",...p,"data-original-url":a})})}):m.jsx("img",{src:a,alt:l,className:d,style:u,...p,onError:r})}const lb=""+new URL("ich-CFswyXwc.jpg",import.meta.url).href;function cb(){const s=[{number:"30+",label:"Projekte",icon:Vl},{number:"9+",label:"Jahre",icon:ex},{number:"100%",label:"Zufriedenheit",icon:Gx},{number:"24/7",label:"Support",icon:qx}],e=[{title:"Website Entwicklung",icon:mf,description:"Moderne und performante Webseiten mit React, Next.js und neuesten Web-Technologien."},{title:"Mobile-First Design",icon:Bx,description:"Responsive Designs, die auf allen Geräten perfekt aussehen und funktionieren."},{title:"UI/UX Design",icon:vg,description:"Benutzerfreundliche Interfaces mit Fokus auf optimale User Experience."}],n={animation:"aboutme-float 6s ease-in-out infinite"},r=()=>{const l=document.getElementById("ablauf");if(l){const u=document.querySelector("header"),d=u?u.offsetHeight:120,p=l.getBoundingClientRect().top+window.scrollY,h=Math.max(0,p-d-16);window.scrollTo({top:h,behavior:"smooth"});return}window.location.href="/#ablauf"},a=()=>{const l=document.getElementById("leistungen");if(l){const u=document.querySelector("header"),d=u?u.offsetHeight:120,p=l.getBoundingClientRect().top+window.scrollY,h=Math.max(0,p-d-16);window.scrollTo({top:h,behavior:"smooth"});return}window.location.href="/#leistungen"};return m.jsxs(m.Fragment,{children:[m.jsx("style",{children:`
        @keyframes aboutme-gradient-xy {
          0%, 100% { 
            background-position: 0% 50%; 
            transform: scale(1);
          }
          50% { 
            background-position: 100% 50%; 
            transform: scale(1.05);
          }
        }
        
        @keyframes aboutme-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}),m.jsxs("div",{className:"min-h-screen bg-slate-950 relative overflow-hidden",children:[m.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[m.jsx("div",{className:"absolute top-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"}),m.jsx("div",{className:"absolute top-40 right-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse",style:{animationDelay:"2s"}}),m.jsx("div",{className:"absolute bottom-40 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse",style:{animationDelay:"4s"}}),m.jsx("div",{className:"absolute bottom-20 right-1/4 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl",style:n})]}),m.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6 py-20",children:[m.jsxs("div",{id:"leistungen",className:"mb-32 md:mb-[30rem]",children:[m.jsxs("div",{className:"text-center mb-16",children:[m.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-6",children:[m.jsx(om,{className:"w-4 h-4 text-yellow-400"}),m.jsx("span",{className:"text-purple-300 text-sm",children:"Leistungen"})]}),m.jsxs("h2",{className:"text-4xl md:text-5xl text-white mb-4",children:["Meine ",m.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400",children:"Leistungen"})]})]}),m.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:e.map((l,u)=>m.jsxs("div",{className:"group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2",children:[m.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),m.jsxs("div",{className:"relative",children:[m.jsx("div",{className:"mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 group-hover:scale-110 transition-transform duration-300",children:m.jsx(l.icon,{className:"w-8 h-8 text-purple-400",strokeWidth:1.5})}),m.jsx("h3",{className:"text-2xl text-white mb-4",children:l.title}),m.jsx("p",{className:"text-slate-400 leading-relaxed",children:l.description})]})]},u))})]}),m.jsx("div",{id:"ueber-mich",className:"mt-12 md:mt-[10rem] mb-12",children:m.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[m.jsxs("div",{className:"space-y-8",children:[m.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm",children:[m.jsx(om,{className:"w-4 h-4 text-yellow-400"}),m.jsx("span",{className:"text-purple-300 text-sm",children:"IT Webentwickler"})]}),m.jsxs("div",{children:[m.jsxs("h1",{className:"text-5xl md:text-7xl mb-6 text-white",children:["Hallo, ich bin"," ",m.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400",children:"dein Entwickler"})]}),m.jsx("p",{className:"text-lg text-slate-400 leading-relaxed mb-6",children:"Als studierter Informatiker mit über 9 Jahren Berufserfahrung und hauptberuflichem Teamleiter verbinde ich fundiertes technisches Know-how in Apps, Automation und KI mit der Kreativität eines leidenschaftlichen Webentwicklers, um Ihre digitalen Visionen in maßgeschneiderte, hervorragend funktionierende Webseiten umzusetzen, die garantiert 50% günstiger sind als Agenturen."}),m.jsxs("p",{className:"text-lg text-slate-500",children:["Spezialisiert auf ",m.jsx("span",{className:"text-purple-400",children:"React"}),",",m.jsx("span",{className:"text-pink-400",children:" TypeScript"})," und",m.jsx("span",{className:"text-blue-400",children:" moderne Web-Technologien"}),"."]})]}),m.jsxs("div",{className:"flex flex-wrap gap-4",children:[m.jsxs("button",{onClick:()=>r(),className:"group relative px-8 py-4 rounded-full overflow-hidden",children:[m.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%]",style:{animation:"aboutme-gradient-xy 3s ease infinite"}}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"}),m.jsxs("span",{className:"relative text-white flex items-center gap-2",children:["Projekt starten",m.jsx(Vl,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})]}),m.jsx("button",{onClick:()=>a(),className:"px-8 py-4 rounded-full border-2 border-slate-700 text-slate-300 hover:border-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm",children:"Meine Leistungen"})]})]}),m.jsxs("div",{className:"relative group",children:[m.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"}),m.jsxs("div",{className:"relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-4 overflow-hidden",children:[m.jsx("div",{className:"aspect-square rounded-2xl overflow-hidden",children:m.jsx(ab,{src:lb,alt:"Developer Workspace",className:"w-full h-full object-cover"})}),m.jsx("div",{className:"absolute bottom-8 left-8 px-6 py-3 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-purple-500/30",style:n,children:m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full animate-pulse"}),m.jsx("span",{className:"text-white",children:"Verfügbar für Projekte"})]})})]})]})]})}),m.jsx("div",{children:m.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-6",children:s.map((l,u)=>m.jsxs("div",{className:"group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2",children:[m.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),m.jsxs("div",{className:"relative",children:[m.jsx(l.icon,{className:"w-8 h-8 text-purple-400 mb-4",strokeWidth:1.5}),m.jsx("div",{className:"text-4xl text-white mb-2",children:l.number}),m.jsx("div",{className:"text-slate-400",children:l.label})]})]},u))})})]})]})]})}function ub(){const s={minHeight:"100vh",backgroundColor:"#0f172a",color:"#f1f5f9",padding:"140px 16px 64px"},e={maxWidth:"896px",margin:"0 auto"},n={marginBottom:"48px",scrollMarginTop:"120px"},r={display:"inline-flex",alignItems:"center",justifyContent:"center",width:"64px",height:"64px",backgroundColor:"rgba(219, 39, 119, 0.2)",borderRadius:"16px",marginBottom:"24px"},a={fontSize:"36px",fontWeight:"700",marginBottom:"16px",color:"#ffffff",lineHeight:"1.2"},l={fontSize:"18px",color:"#94a3b8",lineHeight:"1.6"},u={backgroundColor:"rgba(30, 41, 59, 0.5)",borderRadius:"16px",padding:"32px",border:"1px solid #334155",marginBottom:"32px"},d={fontSize:"24px",fontWeight:"600",marginBottom:"24px",color:"#ffffff",lineHeight:"1.3"},p={fontSize:"18px",fontWeight:"500",marginBottom:"8px",color:"#ffffff",lineHeight:"1.4"},h={color:"#cbd5e1",lineHeight:"1.6",marginBottom:"12px"},x={fontSize:"14px",color:"#cbd5e1",lineHeight:"1.6"},v={color:"#94a3b8"},y={display:"flex",alignItems:"flex-start",gap:"16px",marginBottom:"16px"},M={display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",backgroundColor:"rgba(219, 39, 119, 0.2)",borderRadius:"8px",flexShrink:0},T={color:"#cbd5e1",textDecoration:"none",transition:"color 0.2s"},A={color:"#ec4899"},S={color:"#ec4899",textDecoration:"underline",transition:"color 0.2s"},_={marginTop:"48px",textAlign:"center",fontSize:"14px",color:"#64748b"};return ft.useEffect(()=>{const U=document.getElementById("page-header");U&&setTimeout(()=>{const L=document.querySelector("header"),P=L?L.offsetHeight:120,z=U.getBoundingClientRect().top+window.scrollY,F=Math.max(0,z-P-16);window.scrollTo({top:F,behavior:"smooth"})},50)},[]),m.jsx("div",{style:s,children:m.jsxs("div",{style:e,children:[m.jsxs("div",{id:"page-header",style:n,children:[m.jsx("div",{style:r,children:m.jsx(Ix,{style:{width:"32px",height:"32px",color:"#ec4899"}})}),m.jsx("h1",{style:a,children:"Impressum"}),m.jsx("p",{style:l,children:"Angaben gemäß § 5 TMG"})]}),m.jsxs("div",{children:[m.jsxs("section",{style:u,children:[m.jsx("h2",{style:d,children:"Anbieter"}),m.jsxs("div",{style:{marginBottom:"12px"},children:[m.jsx("p",{style:{...h,fontSize:"18px"},children:"Musterfirma GmbH"}),m.jsx("p",{style:h,children:"Geschäftsführer: Max Mustermann"}),m.jsxs("p",{style:{...h,paddingTop:"16px"},children:[m.jsx("span",{style:v,children:"Handelsregister:"})," HRB 12345"]}),m.jsxs("p",{style:h,children:[m.jsx("span",{style:v,children:"Registergericht:"})," Amtsgericht München"]}),m.jsxs("p",{style:h,children:[m.jsx("span",{style:v,children:"USt-IdNr.:"})," DE123456789"]})]})]}),m.jsxs("section",{style:u,children:[m.jsx("h2",{style:d,children:"Kontakt"}),m.jsxs("div",{children:[m.jsxs("div",{style:y,children:[m.jsx("div",{style:M,children:m.jsx(gg,{style:{width:"20px",height:"20px",color:"#ec4899"}})}),m.jsxs("div",{style:h,children:[m.jsx("p",{style:{marginBottom:"4px"},children:"Musterstraße 123"}),m.jsx("p",{style:{marginBottom:"4px"},children:"80333 München"}),m.jsx("p",{children:"Deutschland"})]})]}),m.jsxs("div",{style:y,children:[m.jsx("div",{style:M,children:m.jsx(Dx,{style:{width:"20px",height:"20px",color:"#ec4899"}})}),m.jsx("a",{href:"tel:+4989123456789",style:T,onMouseEnter:U=>Object.assign(U.currentTarget.style,A),onMouseLeave:U=>Object.assign(U.currentTarget.style,T),children:"+49 (0) 89 / 12 34 56 - 789"})]}),m.jsxs("div",{style:y,children:[m.jsx("div",{style:M,children:m.jsx(gf,{style:{width:"20px",height:"20px",color:"#ec4899"}})}),m.jsx("a",{href:"mailto:info@musterfirma.de",style:T,onMouseEnter:U=>Object.assign(U.currentTarget.style,A),onMouseLeave:U=>Object.assign(U.currentTarget.style,T),children:"info@musterfirma.de"})]})]})]}),m.jsxs("section",{style:u,children:[m.jsx("h2",{style:d,children:"Verantwortlich für den Inhalt"}),m.jsxs("div",{style:h,children:[m.jsx("p",{style:{marginBottom:"8px"},children:"gemäß § 55 Abs. 2 RStV:"}),m.jsx("p",{style:{paddingTop:"8px",marginBottom:"4px"},children:"Max Mustermann"}),m.jsx("p",{style:{marginBottom:"4px"},children:"Musterstraße 123"}),m.jsx("p",{children:"80333 München"})]})]}),m.jsxs("section",{style:u,children:[m.jsx("h2",{style:d,children:"EU-Streitschlichtung"}),m.jsxs("div",{style:h,children:[m.jsx("p",{style:{marginBottom:"16px"},children:"Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:"}),m.jsx("a",{href:"https://ec.europa.eu/consumers/odr/",target:"_blank",rel:"noopener noreferrer",style:S,children:"https://ec.europa.eu/consumers/odr/"}),m.jsx("p",{style:{paddingTop:"16px"},children:"Unsere E-Mail-Adresse finden Sie oben im Impressum."})]})]}),m.jsxs("section",{style:u,children:[m.jsx("h2",{style:d,children:"Verbraucherstreitbeilegung / Universalschlichtungsstelle"}),m.jsx("p",{style:h,children:"Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."})]}),m.jsxs("section",{style:u,children:[m.jsx("h2",{style:d,children:"Haftungsausschluss"}),m.jsxs("div",{style:{marginBottom:"24px"},children:[m.jsx("h3",{style:p,children:"Haftung für Inhalte"}),m.jsx("p",{style:x,children:"Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."})]}),m.jsxs("div",{style:{marginBottom:"24px"},children:[m.jsx("h3",{style:p,children:"Haftung für Links"}),m.jsx("p",{style:x,children:"Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich."})]}),m.jsxs("div",{children:[m.jsx("h3",{style:p,children:"Urheberrecht"}),m.jsx("p",{style:x,children:"Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers."})]})]})]}),m.jsx("div",{style:_,children:m.jsx("p",{children:"Stand: Oktober 2024"})})]})})}function db(){const s={minHeight:"100vh",backgroundColor:"#0f172a",color:"#f1f5f9",padding:"140px 16px 64px"},e={maxWidth:"896px",margin:"0 auto"},n={marginBottom:"48px",scrollMarginTop:"120px"},r={display:"inline-flex",alignItems:"center",justifyContent:"center",width:"64px",height:"64px",backgroundColor:"rgba(219, 39, 119, 0.2)",borderRadius:"16px",marginBottom:"24px"},a={fontSize:"36px",fontWeight:"700",marginBottom:"16px",color:"#ffffff",lineHeight:"1.2"},l={fontSize:"18px",color:"#94a3b8",lineHeight:"1.6"},u={backgroundColor:"rgba(30, 41, 59, 0.5)",borderRadius:"16px",padding:"32px",border:"1px solid #334155",marginBottom:"32px"},d={fontSize:"24px",fontWeight:"600",marginBottom:"24px",color:"#ffffff",lineHeight:"1.3",display:"flex",alignItems:"center",gap:"12px"},p={fontSize:"18px",fontWeight:"500",marginBottom:"12px",color:"#ffffff",lineHeight:"1.4"},h={color:"#cbd5e1",lineHeight:"1.6",marginBottom:"16px"},x={paddingLeft:"20px",marginBottom:"16px"},v={color:"#cbd5e1",marginBottom:"8px",lineHeight:"1.6"},y={backgroundColor:"rgba(219, 39, 119, 0.1)",border:"1px solid rgba(219, 39, 119, 0.3)",borderRadius:"8px",padding:"16px",marginBottom:"16px"},M={color:"#ec4899",textDecoration:"underline",transition:"color 0.2s"},T={marginTop:"48px",textAlign:"center",fontSize:"14px",color:"#64748b"};ft.useEffect(()=>{const S=document.getElementById("page-header");S&&setTimeout(()=>{const _=document.querySelector("header"),U=_?_.offsetHeight:120,L=S.getBoundingClientRect().top+window.scrollY,P=Math.max(0,L-U-16);window.scrollTo({top:P,behavior:"smooth"})},50)},[]);const A={width:"24px",height:"24px",color:"#ec4899"};return m.jsx("div",{style:s,children:m.jsxs("div",{style:e,children:[m.jsxs("div",{id:"page-header",style:n,children:[m.jsx("div",{style:r,children:m.jsx(Ox,{style:{width:"32px",height:"32px",color:"#ec4899"}})}),m.jsx("h1",{style:a,children:"Datenschutzerklärung"}),m.jsx("p",{style:l,children:"Informationen über die Verarbeitung Ihrer personenbezogenen Daten"})]}),m.jsxs("div",{children:[m.jsxs("section",{style:u,children:[m.jsxs("h2",{style:d,children:[m.jsx(Mx,{style:A}),"Allgemeine Hinweise"]}),m.jsx("p",{style:h,children:"Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können."}),m.jsx("div",{style:y,children:m.jsxs("p",{style:{color:"#cbd5e1",margin:0},children:[m.jsx("strong",{style:{color:"#ffffff"},children:"Verantwortliche Stelle:"})," Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist die Musterfirma GmbH. Weitere Informationen finden Sie im Impressum."]})})]}),m.jsxs("section",{style:u,children:[m.jsxs("h2",{style:d,children:[m.jsx(ux,{style:A}),"Datenerfassung auf dieser Website"]}),m.jsxs("div",{style:{marginBottom:"24px"},children:[m.jsx("h3",{style:p,children:"Wer ist verantwortlich für die Datenerfassung?"}),m.jsx("p",{style:h,children:"Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen."})]}),m.jsxs("div",{style:{marginBottom:"24px"},children:[m.jsx("h3",{style:p,children:"Wie erfassen wir Ihre Daten?"}),m.jsx("p",{style:h,children:"Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben."}),m.jsx("p",{style:h,children:"Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs)."})]}),m.jsxs("div",{children:[m.jsx("h3",{style:p,children:"Wofür nutzen wir Ihre Daten?"}),m.jsx("p",{style:h,children:"Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden."})]})]}),m.jsxs("section",{style:u,children:[m.jsxs("h2",{style:d,children:[m.jsx(mg,{style:A}),"Server-Log-Dateien"]}),m.jsx("p",{style:h,children:"Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:"}),m.jsxs("ul",{style:x,children:[m.jsx("li",{style:v,children:"Browsertyp und Browserversion"}),m.jsx("li",{style:v,children:"Verwendetes Betriebssystem"}),m.jsx("li",{style:v,children:"Referrer URL"}),m.jsx("li",{style:v,children:"Hostname des zugreifenden Rechners"}),m.jsx("li",{style:v,children:"Uhrzeit der Serveranfrage"}),m.jsx("li",{style:v,children:"IP-Adresse"})]}),m.jsx("p",{style:h,children:"Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO."})]}),m.jsxs("section",{style:u,children:[m.jsxs("h2",{style:d,children:[m.jsx(_d,{style:A}),"Cookies"]}),m.jsx("p",{style:h,children:'Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.'}),m.jsxs("div",{style:{marginBottom:"24px"},children:[m.jsx("h3",{style:p,children:"Arten von Cookies:"}),m.jsxs("ul",{style:x,children:[m.jsxs("li",{style:v,children:[m.jsx("strong",{style:{color:"#ffffff"},children:"Notwendige Cookies:"})," Erforderlich für den Betrieb der Website"]}),m.jsxs("li",{style:v,children:[m.jsx("strong",{style:{color:"#ffffff"},children:"Analytische Cookies:"})," Helfen uns, die Nutzung der Website zu verstehen"]}),m.jsxs("li",{style:v,children:[m.jsx("strong",{style:{color:"#ffffff"},children:"Marketing Cookies:"})," Werden verwendet, um relevante Werbung bereitzustellen"]}),m.jsxs("li",{style:v,children:[m.jsx("strong",{style:{color:"#ffffff"},children:"Präferenz Cookies:"})," Speichern Ihre Einstellungen und Präferenzen"]})]})]}),m.jsx("div",{style:y,children:m.jsx("p",{style:{color:"#cbd5e1",margin:0},children:"Sie können Ihre Cookie-Einstellungen jederzeit über unser Cookie-Banner anpassen."})})]}),m.jsxs("section",{style:u,children:[m.jsxs("h2",{style:d,children:[m.jsx(Wx,{style:A}),"Kontaktformular"]}),m.jsx("p",{style:h,children:"Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert."}),m.jsx("p",{style:h,children:"Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist."})]}),m.jsxs("section",{style:u,children:[m.jsx("h2",{style:d,children:"Ihre Rechte"}),m.jsx("p",{style:h,children:"Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten."}),m.jsxs("div",{style:{marginBottom:"24px"},children:[m.jsx("h3",{style:p,children:"Ihre Rechte im Überblick:"}),m.jsxs("ul",{style:x,children:[m.jsxs("li",{style:v,children:[m.jsx("strong",{style:{color:"#ffffff"},children:"Auskunftsrecht:"})," Sie können Auskunft über Ihre bei uns gespeicherten Daten verlangen"]}),m.jsxs("li",{style:v,children:[m.jsx("strong",{style:{color:"#ffffff"},children:"Berichtigungsrecht:"})," Sie können die Berichtigung unrichtiger Daten verlangen"]}),m.jsxs("li",{style:v,children:[m.jsx("strong",{style:{color:"#ffffff"},children:"Löschungsrecht:"})," Sie können die Löschung Ihrer Daten verlangen"]}),m.jsxs("li",{style:v,children:[m.jsx("strong",{style:{color:"#ffffff"},children:"Einschränkung der Verarbeitung:"})," Sie können die Einschränkung der Verarbeitung verlangen"]}),m.jsxs("li",{style:v,children:[m.jsx("strong",{style:{color:"#ffffff"},children:"Datenübertragbarkeit:"})," Sie haben das Recht auf Datenübertragbarkeit"]}),m.jsxs("li",{style:v,children:[m.jsx("strong",{style:{color:"#ffffff"},children:"Widerspruchsrecht:"})," Sie können der Verarbeitung Ihrer Daten widersprechen"]}),m.jsxs("li",{style:v,children:[m.jsx("strong",{style:{color:"#ffffff"},children:"Beschwerderecht:"})," Sie können sich bei einer Aufsichtsbehörde beschweren"]})]})]}),m.jsx("div",{style:y,children:m.jsxs("p",{style:{color:"#cbd5e1",margin:0},children:[m.jsx("strong",{style:{color:"#ffffff"},children:"Kontakt:"})," Für Fragen zum Datenschutz wenden Sie sich bitte an: ",m.jsx("a",{href:"mailto:datenschutz@musterfirma.de",style:M,children:"datenschutz@musterfirma.de"})]})})]}),m.jsxs("section",{style:u,children:[m.jsx("h2",{style:d,children:"SSL- bzw. TLS-Verschlüsselung"}),m.jsx("p",{style:h,children:"Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung."}),m.jsx("p",{style:h,children:'Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.'})]}),m.jsxs("section",{style:u,children:[m.jsx("h2",{style:d,children:"Speicherdauer"}),m.jsx("p",{style:h,children:"Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt."}),m.jsx("p",{style:h,children:"Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben."})]})]}),m.jsx("div",{style:T,children:m.jsx("p",{children:"Stand: Oktober 2024"})})]})})}function fb(){const s={minHeight:"100vh",backgroundColor:"#0f172a",color:"#f1f5f9",padding:"140px 16px 64px"},e={maxWidth:"896px",margin:"0 auto"},n={marginBottom:"48px",scrollMarginTop:"120px"},r={display:"inline-flex",alignItems:"center",justifyContent:"center",width:"64px",height:"64px",backgroundColor:"rgba(219, 39, 119, 0.2)",borderRadius:"16px",marginBottom:"24px"},a={fontSize:"36px",fontWeight:"700",marginBottom:"16px",color:"#ffffff",lineHeight:"1.2"},l={fontSize:"18px",color:"#94a3b8",lineHeight:"1.6"},u={backgroundColor:"rgba(30, 41, 59, 0.5)",borderRadius:"16px",padding:"32px",border:"1px solid #334155",marginBottom:"32px"},d={fontSize:"24px",fontWeight:"600",marginBottom:"24px",color:"#ffffff",lineHeight:"1.3",display:"flex",alignItems:"center",gap:"12px"},p={fontSize:"18px",fontWeight:"500",marginBottom:"12px",color:"#ffffff",lineHeight:"1.4"},h={color:"#cbd5e1",lineHeight:"1.6",marginBottom:"16px"},x={paddingLeft:"20px",marginBottom:"16px"},v={color:"#cbd5e1",marginBottom:"8px",lineHeight:"1.6"},y={backgroundColor:"rgba(219, 39, 119, 0.1)",border:"1px solid rgba(219, 39, 119, 0.3)",borderRadius:"8px",padding:"16px",marginBottom:"16px"},M={backgroundColor:"rgba(15, 23, 42, 0.5)",border:"1px solid #334155",borderRadius:"12px",padding:"20px",marginBottom:"16px"},T={display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"},A={display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",backgroundColor:"rgba(219, 39, 119, 0.2)",borderRadius:"8px",flexShrink:0},S={color:"#ec4899",textDecoration:"underline",transition:"color 0.2s"},_={marginTop:"48px",textAlign:"center",fontSize:"14px",color:"#64748b"};ft.useEffect(()=>{const P=document.getElementById("page-header");P&&setTimeout(()=>{const z=document.querySelector("header"),F=z?z.offsetHeight:120,V=P.getBoundingClientRect().top+window.scrollY,B=Math.max(0,V-F-16);window.scrollTo({top:B,behavior:"smooth"})},50)},[]);const U={width:"24px",height:"24px",color:"#ec4899"},L={width:"20px",height:"20px",color:"#ec4899"};return m.jsx("div",{style:s,children:m.jsxs("div",{style:e,children:[m.jsxs("div",{id:"page-header",style:n,children:[m.jsx("div",{style:r,children:m.jsx(Q0,{style:{width:"32px",height:"32px",color:"#ec4899"}})}),m.jsx("h1",{style:a,children:"Barrierefreiheit"}),m.jsx("p",{style:l,children:"Unser Engagement für eine zugängliche Website für alle Nutzer"})]}),m.jsxs("div",{children:[m.jsxs("section",{style:u,children:[m.jsxs("h2",{style:d,children:[m.jsx(vx,{style:U}),"Unser Versprechen"]}),m.jsx("p",{style:h,children:"Wir sind bestrebt, unsere Website für alle Menschen zugänglich zu machen, unabhängig von ihren Fähigkeiten oder der verwendeten Technologie. Wir arbeiten kontinuierlich daran, die Benutzerfreundlichkeit und Zugänglichkeit unserer Website zu verbessern und halten uns dabei an die relevanten Standards und Best Practices."}),m.jsx("div",{style:y,children:m.jsxs("p",{style:{color:"#cbd5e1",margin:0},children:[m.jsx("strong",{style:{color:"#ffffff"},children:"Unser Ziel:"})," Wir orientieren uns an den Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, um eine barrierefreie Website zu gewährleisten."]})})]}),m.jsxs("section",{style:u,children:[m.jsxs("h2",{style:d,children:[m.jsx(ox,{style:U}),"Barrierefreiheits-Funktionen"]}),m.jsx("p",{style:h,children:"Unsere Website bietet verschiedene Funktionen, um die Zugänglichkeit zu verbessern:"}),m.jsxs("div",{style:M,children:[m.jsxs("div",{style:T,children:[m.jsx("div",{style:A,children:m.jsx(mg,{style:L})}),m.jsx("h3",{style:{...p,marginBottom:0},children:"Visuelle Barrierefreiheit"})]}),m.jsxs("ul",{style:x,children:[m.jsx("li",{style:v,children:"Hohe Kontrastverhältnisse für bessere Lesbarkeit"}),m.jsx("li",{style:v,children:"Skalierbare Schriftgrößen"}),m.jsx("li",{style:v,children:"Alternative Texte für alle Bilder und Grafiken"}),m.jsx("li",{style:v,children:"Klare und konsistente Navigationsstruktur"}),m.jsx("li",{style:v,children:"Keine ausschließliche Informationsvermittlung durch Farbe"})]})]}),m.jsxs("div",{style:M,children:[m.jsxs("div",{style:T,children:[m.jsx("div",{style:A,children:m.jsx(sm,{style:L})}),m.jsx("h3",{style:{...p,marginBottom:0},children:"Tastaturnavigation"})]}),m.jsxs("ul",{style:x,children:[m.jsx("li",{style:v,children:"Vollständige Bedienbarkeit mit der Tastatur"}),m.jsx("li",{style:v,children:"Sichtbare Fokus-Indikatoren"}),m.jsx("li",{style:v,children:"Logische Tab-Reihenfolge"}),m.jsx("li",{style:v,children:"Skip-Links zum Überspringen von Navigationselementen"})]})]}),m.jsxs("div",{style:M,children:[m.jsxs("div",{style:T,children:[m.jsx("div",{style:A,children:m.jsx(fx,{style:L})}),m.jsx("h3",{style:{...p,marginBottom:0},children:"Screenreader-Kompatibilität"})]}),m.jsxs("ul",{style:x,children:[m.jsx("li",{style:v,children:"Semantisches HTML für bessere Struktur"}),m.jsx("li",{style:v,children:"ARIA-Labels und -Attribute wo erforderlich"}),m.jsx("li",{style:v,children:"Beschreibende Link-Texte"}),m.jsx("li",{style:v,children:"Korrekte Überschriftenhierarchie"})]})]}),m.jsxs("div",{style:M,children:[m.jsxs("div",{style:T,children:[m.jsx("div",{style:A,children:m.jsx(Cx,{style:L})}),m.jsx("h3",{style:{...p,marginBottom:0},children:"Responsive Design"})]}),m.jsxs("ul",{style:x,children:[m.jsx("li",{style:v,children:"Optimiert für verschiedene Bildschirmgrößen"}),m.jsx("li",{style:v,children:"Touch-freundliche Schaltflächen und Bedienelemente"}),m.jsx("li",{style:v,children:"Zoom-Unterstützung bis 200% ohne Funktionsverlust"}),m.jsx("li",{style:v,children:"Lesbare Inhalte auf mobilen Geräten"})]})]})]}),m.jsxs("section",{style:u,children:[m.jsx("h2",{style:d,children:"Konformität mit Standards"}),m.jsx("p",{style:h,children:"Unsere Website wurde unter Berücksichtigung der folgenden Standards entwickelt:"}),m.jsxs("ul",{style:x,children:[m.jsxs("li",{style:v,children:[m.jsx("strong",{style:{color:"#ffffff"},children:"WCAG 2.1 Level AA:"})," Web Content Accessibility Guidelines des W3C"]}),m.jsxs("li",{style:v,children:[m.jsx("strong",{style:{color:"#ffffff"},children:"BITV 2.0:"})," Barrierefreie Informationstechnik-Verordnung"]}),m.jsxs("li",{style:v,children:[m.jsx("strong",{style:{color:"#ffffff"},children:"EN 301 549:"})," Europäischer Standard für digitale Barrierefreiheit"]})]})]}),m.jsxs("section",{style:u,children:[m.jsxs("h2",{style:d,children:[m.jsx(sm,{style:U}),"Tastaturkürzel"]}),m.jsx("p",{style:h,children:"Die folgenden Tastaturkürzel stehen auf unserer Website zur Verfügung:"}),m.jsxs("div",{style:{display:"grid",gap:"12px"},children:[m.jsx("div",{style:M,children:m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("span",{style:{color:"#cbd5e1"},children:"Navigation öffnen/schließen"}),m.jsx("code",{style:{backgroundColor:"#1e293b",padding:"4px 12px",borderRadius:"6px",color:"#ec4899",fontSize:"14px"},children:"Alt + N"})]})}),m.jsx("div",{style:M,children:m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("span",{style:{color:"#cbd5e1"},children:"Zum Hauptinhalt springen"}),m.jsx("code",{style:{backgroundColor:"#1e293b",padding:"4px 12px",borderRadius:"6px",color:"#ec4899",fontSize:"14px"},children:"Alt + M"})]})}),m.jsx("div",{style:M,children:m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("span",{style:{color:"#cbd5e1"},children:"Suche öffnen"}),m.jsx("code",{style:{backgroundColor:"#1e293b",padding:"4px 12px",borderRadius:"6px",color:"#ec4899",fontSize:"14px"},children:"Alt + S"})]})})]})]}),m.jsxs("section",{style:u,children:[m.jsx("h2",{style:d,children:"Browser- und Technologiekompatibilität"}),m.jsx("p",{style:h,children:"Unsere Website ist mit folgenden Technologien kompatibel:"}),m.jsxs("div",{style:{marginBottom:"24px"},children:[m.jsx("h3",{style:p,children:"Unterstützte Browser:"}),m.jsxs("ul",{style:x,children:[m.jsx("li",{style:v,children:"Google Chrome (aktuelle Version)"}),m.jsx("li",{style:v,children:"Mozilla Firefox (aktuelle Version)"}),m.jsx("li",{style:v,children:"Safari (aktuelle Version)"}),m.jsx("li",{style:v,children:"Microsoft Edge (aktuelle Version)"})]})]}),m.jsxs("div",{children:[m.jsx("h3",{style:p,children:"Unterstützte Screenreader:"}),m.jsxs("ul",{style:x,children:[m.jsx("li",{style:v,children:"JAWS (aktuelle Version)"}),m.jsx("li",{style:v,children:"NVDA (aktuelle Version)"}),m.jsx("li",{style:v,children:"VoiceOver (macOS/iOS)"}),m.jsx("li",{style:v,children:"TalkBack (Android)"})]})]})]}),m.jsxs("section",{style:u,children:[m.jsx("h2",{style:d,children:"Bekannte Einschränkungen"}),m.jsx("p",{style:h,children:"Trotz unserer Bemühungen können einige Bereiche unserer Website möglicherweise noch nicht vollständig barrierefrei sein. Wir arbeiten kontinuierlich an Verbesserungen:"}),m.jsxs("ul",{style:x,children:[m.jsx("li",{style:v,children:"Einige PDF-Dokumente entsprechen möglicherweise noch nicht vollständig den Barrierefreiheitsstandards"}),m.jsx("li",{style:v,children:"Externe eingebettete Inhalte von Drittanbietern sind möglicherweise nicht vollständig barrierefrei"}),m.jsx("li",{style:v,children:"Wir arbeiten an der Verbesserung der Barrierefreiheit älterer Inhalte"})]})]}),m.jsxs("section",{style:u,children:[m.jsx("h2",{style:d,children:"Feedback und Kontakt"}),m.jsx("p",{style:h,children:"Ihre Meinung ist uns wichtig! Wenn Sie auf Barrierefreiheitsprobleme stoßen oder Verbesserungsvorschläge haben, kontaktieren Sie uns bitte:"}),m.jsxs("div",{style:y,children:[m.jsxs("div",{style:{marginBottom:"12px"},children:[m.jsx("strong",{style:{color:"#ffffff"},children:"E-Mail:"}),m.jsx("a",{href:"mailto:barrierefreiheit@musterfirma.de",style:{...S,marginLeft:"8px"},children:"barrierefreiheit@musterfirma.de"})]}),m.jsxs("div",{style:{marginBottom:"12px"},children:[m.jsx("strong",{style:{color:"#ffffff"},children:"Telefon:"}),m.jsx("span",{style:{color:"#cbd5e1",marginLeft:"8px"},children:"+49 (0) 89 / 12 34 56 - 789"})]}),m.jsxs("div",{children:[m.jsx("strong",{style:{color:"#ffffff"},children:"Postanschrift:"}),m.jsx("span",{style:{color:"#cbd5e1",marginLeft:"8px"},children:"Musterfirma GmbH, Musterstraße 123, 80333 München"})]})]}),m.jsx("p",{style:h,children:"Wir bemühen uns, alle Anfragen innerhalb von 5 Werktagen zu beantworten."})]}),m.jsxs("section",{style:u,children:[m.jsx("h2",{style:d,children:"Inhalte von Drittanbietern"}),m.jsx("p",{style:h,children:"Einige Inhalte auf unserer Website werden von Drittanbietern bereitgestellt. Wir haben nur begrenzte Kontrolle über die Barrierefreiheit dieser Inhalte, arbeiten aber mit unseren Partnern zusammen, um die bestmögliche Zugänglichkeit sicherzustellen."})]}),m.jsxs("section",{style:u,children:[m.jsx("h2",{style:d,children:"Kontinuierliche Verbesserung"}),m.jsx("p",{style:h,children:"Barrierefreiheit ist ein fortlaufender Prozess. Wir überprüfen und aktualisieren unsere Website regelmäßig, um sicherzustellen, dass sie für alle Nutzer zugänglich bleibt. Zu unseren laufenden Bemühungen gehören:"}),m.jsxs("ul",{style:x,children:[m.jsx("li",{style:v,children:"Regelmäßige Barrierefreiheitstests und Audits"}),m.jsx("li",{style:v,children:"Schulungen für unser Entwicklungsteam"}),m.jsx("li",{style:v,children:"Einbeziehung von Nutzerfeedback in Verbesserungen"}),m.jsx("li",{style:v,children:"Aktualisierung gemäß neuer Standards und Best Practices"})]})]})]}),m.jsx("div",{style:_,children:m.jsx("p",{children:"Stand: Oktober 2024 | Letzte Überprüfung: Oktober 2024"})})]})})}function hb(){const s=typeof window<"u"?window.location.pathname:"/";return s==="/impressum1"?m.jsxs("div",{className:"min-h-screen bg-slate-950 text-white",children:[m.jsx(al,{}),m.jsx(ub,{}),m.jsx(Ul,{})]}):s==="/datenschutz"?m.jsxs("div",{className:"min-h-screen bg-slate-950 text-white",children:[m.jsx(al,{}),m.jsx(db,{}),m.jsx(Ul,{})]}):s==="/barrierefreiheit"?m.jsxs("div",{className:"min-h-screen bg-slate-950 text-white",children:[m.jsx(al,{}),m.jsx(fb,{}),m.jsx(Ul,{})]}):m.jsxs("div",{className:"min-h-screen bg-slate-950 text-white",children:[m.jsx(al,{}),m.jsx(cw,{}),m.jsx(cb,{}),m.jsx(uw,{}),m.jsx(ib,{}),m.jsx(sb,{}),m.jsx(Ul,{})]})}X0.createRoot(document.getElementById("root")).render(m.jsx(hb,{}));
