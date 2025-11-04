(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function la(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var qu={exports:{}},Wo={},Yu={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function Lx(){if(Cm)return St;Cm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,w={};function S(U,te,me){this.props=U,this.context=te,this.refs=w,this.updater=me||M}S.prototype.isReactComponent={},S.prototype.setState=function(U,te){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,te,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=S.prototype;function I(U,te,me){this.props=U,this.context=te,this.refs=w,this.updater=me||M}var N=I.prototype=new _;N.constructor=I,A(N,S.prototype),N.isPureReactComponent=!0;var P=Array.isArray,z=Object.prototype.hasOwnProperty,F={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function B(U,te,me){var Ce,ke={},J=null,re=null;if(te!=null)for(Ce in te.ref!==void 0&&(re=te.ref),te.key!==void 0&&(J=""+te.key),te)z.call(te,Ce)&&!V.hasOwnProperty(Ce)&&(ke[Ce]=te[Ce]);var xe=arguments.length-2;if(xe===1)ke.children=me;else if(1<xe){for(var Re=Array(xe),De=0;De<xe;De++)Re[De]=arguments[De+2];ke.children=Re}if(U&&U.defaultProps)for(Ce in xe=U.defaultProps,xe)ke[Ce]===void 0&&(ke[Ce]=xe[Ce]);return{$$typeof:s,type:U,key:J,ref:re,props:ke,_owner:F.current}}function D(U,te){return{$$typeof:s,type:U.type,key:te,ref:U.ref,props:U.props,_owner:U._owner}}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function j(U){var te={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(me){return te[me]})}var Z=/\/+/g;function oe(U,te){return typeof U=="object"&&U!==null&&U.key!=null?j(""+U.key):te.toString(36)}function ie(U,te,me,Ce,ke){var J=typeof U;(J==="undefined"||J==="boolean")&&(U=null);var re=!1;if(U===null)re=!0;else switch(J){case"string":case"number":re=!0;break;case"object":switch(U.$$typeof){case s:case e:re=!0}}if(re)return re=U,ke=ke(re),U=Ce===""?"."+oe(re,0):Ce,P(ke)?(me="",U!=null&&(me=U.replace(Z,"$&/")+"/"),ie(ke,te,me,"",function(De){return De})):ke!=null&&(R(ke)&&(ke=D(ke,me+(!ke.key||re&&re.key===ke.key?"":(""+ke.key).replace(Z,"$&/")+"/")+U)),te.push(ke)),1;if(re=0,Ce=Ce===""?".":Ce+":",P(U))for(var xe=0;xe<U.length;xe++){J=U[xe];var Re=Ce+oe(J,xe);re+=ie(J,te,me,Re,ke)}else if(Re=y(U),typeof Re=="function")for(U=Re.call(U),xe=0;!(J=U.next()).done;)J=J.value,Re=Ce+oe(J,xe++),re+=ie(J,te,me,Re,ke);else if(J==="object")throw te=String(U),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return re}function fe(U,te,me){if(U==null)return U;var Ce=[],ke=0;return ie(U,Ce,"","",function(J){return te.call(me,J,ke++)}),Ce}function Q(U){if(U._status===-1){var te=U._result;te=te(),te.then(function(me){(U._status===0||U._status===-1)&&(U._status=1,U._result=me)},function(me){(U._status===0||U._status===-1)&&(U._status=2,U._result=me)}),U._status===-1&&(U._status=0,U._result=te)}if(U._status===1)return U._result.default;throw U._result}var pe={current:null},L={transition:null},de={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:L,ReactCurrentOwner:F};function ue(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:fe,forEach:function(U,te,me){fe(U,function(){te.apply(this,arguments)},me)},count:function(U){var te=0;return fe(U,function(){te++}),te},toArray:function(U){return fe(U,function(te){return te})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},St.Component=S,St.Fragment=t,St.Profiler=a,St.PureComponent=I,St.StrictMode=r,St.Suspense=h,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,St.act=ue,St.cloneElement=function(U,te,me){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Ce=A({},U.props),ke=U.key,J=U.ref,re=U._owner;if(te!=null){if(te.ref!==void 0&&(J=te.ref,re=F.current),te.key!==void 0&&(ke=""+te.key),U.type&&U.type.defaultProps)var xe=U.type.defaultProps;for(Re in te)z.call(te,Re)&&!V.hasOwnProperty(Re)&&(Ce[Re]=te[Re]===void 0&&xe!==void 0?xe[Re]:te[Re])}var Re=arguments.length-2;if(Re===1)Ce.children=me;else if(1<Re){xe=Array(Re);for(var De=0;De<Re;De++)xe[De]=arguments[De+2];Ce.children=xe}return{$$typeof:s,type:U.type,key:ke,ref:J,props:Ce,_owner:re}},St.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},St.createElement=B,St.createFactory=function(U){var te=B.bind(null,U);return te.type=U,te},St.createRef=function(){return{current:null}},St.forwardRef=function(U){return{$$typeof:d,render:U}},St.isValidElement=R,St.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:Q}},St.memo=function(U,te){return{$$typeof:m,type:U,compare:te===void 0?null:te}},St.startTransition=function(U){var te=L.transition;L.transition={};try{U()}finally{L.transition=te}},St.unstable_act=ue,St.useCallback=function(U,te){return pe.current.useCallback(U,te)},St.useContext=function(U){return pe.current.useContext(U)},St.useDebugValue=function(){},St.useDeferredValue=function(U){return pe.current.useDeferredValue(U)},St.useEffect=function(U,te){return pe.current.useEffect(U,te)},St.useId=function(){return pe.current.useId()},St.useImperativeHandle=function(U,te,me){return pe.current.useImperativeHandle(U,te,me)},St.useInsertionEffect=function(U,te){return pe.current.useInsertionEffect(U,te)},St.useLayoutEffect=function(U,te){return pe.current.useLayoutEffect(U,te)},St.useMemo=function(U,te){return pe.current.useMemo(U,te)},St.useReducer=function(U,te,me){return pe.current.useReducer(U,te,me)},St.useRef=function(U){return pe.current.useRef(U)},St.useState=function(U){return pe.current.useState(U)},St.useSyncExternalStore=function(U,te,me){return pe.current.useSyncExternalStore(U,te,me)},St.useTransition=function(){return pe.current.useTransition()},St.version="18.3.1",St}var Rm;function Wf(){return Rm||(Rm=1,Yu.exports=Lx()),Yu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function Ix(){if(Pm)return Wo;Pm=1;var s=Wf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,m){var x,v={},y=null,M=null;m!==void 0&&(y=""+m),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(M=h.ref);for(x in h)r.call(h,x)&&!l.hasOwnProperty(x)&&(v[x]=h[x]);if(d&&d.defaultProps)for(x in h=d.defaultProps,h)v[x]===void 0&&(v[x]=h[x]);return{$$typeof:e,type:d,key:y,ref:M,props:v,_owner:a.current}}return Wo.Fragment=t,Wo.jsx=u,Wo.jsxs=u,Wo}var Dm;function kx(){return Dm||(Dm=1,qu.exports=Ix()),qu.exports}var p=kx(),yl={},$u={exports:{}},Fn={},Ku={exports:{}},Zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function Ux(){return Nm||(Nm=1,(function(s){function e(L,de){var ue=L.length;L.push(de);e:for(;0<ue;){var U=ue-1>>>1,te=L[U];if(0<a(te,de))L[U]=de,L[ue]=te,ue=U;else break e}}function t(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var de=L[0],ue=L.pop();if(ue!==de){L[0]=ue;e:for(var U=0,te=L.length,me=te>>>1;U<me;){var Ce=2*(U+1)-1,ke=L[Ce],J=Ce+1,re=L[J];if(0>a(ke,ue))J<te&&0>a(re,ke)?(L[U]=re,L[J]=ue,U=J):(L[U]=ke,L[Ce]=ue,U=Ce);else if(J<te&&0>a(re,ue))L[U]=re,L[J]=ue,U=J;else break e}}return de}function a(L,de){var ue=L.sortIndex-de.sortIndex;return ue!==0?ue:L.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],m=[],x=1,v=null,y=3,M=!1,A=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(L){for(var de=t(m);de!==null;){if(de.callback===null)r(m);else if(de.startTime<=L)r(m),de.sortIndex=de.expirationTime,e(h,de);else break;de=t(m)}}function P(L){if(w=!1,N(L),!A)if(t(h)!==null)A=!0,Q(z);else{var de=t(m);de!==null&&pe(P,de.startTime-L)}}function z(L,de){A=!1,w&&(w=!1,_(B),B=-1),M=!0;var ue=y;try{for(N(de),v=t(h);v!==null&&(!(v.expirationTime>de)||L&&!j());){var U=v.callback;if(typeof U=="function"){v.callback=null,y=v.priorityLevel;var te=U(v.expirationTime<=de);de=s.unstable_now(),typeof te=="function"?v.callback=te:v===t(h)&&r(h),N(de)}else r(h);v=t(h)}if(v!==null)var me=!0;else{var Ce=t(m);Ce!==null&&pe(P,Ce.startTime-de),me=!1}return me}finally{v=null,y=ue,M=!1}}var F=!1,V=null,B=-1,D=5,R=-1;function j(){return!(s.unstable_now()-R<D)}function Z(){if(V!==null){var L=s.unstable_now();R=L;var de=!0;try{de=V(!0,L)}finally{de?oe():(F=!1,V=null)}}else F=!1}var oe;if(typeof I=="function")oe=function(){I(Z)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,fe=ie.port2;ie.port1.onmessage=Z,oe=function(){fe.postMessage(null)}}else oe=function(){S(Z,0)};function Q(L){V=L,F||(F=!0,oe())}function pe(L,de){B=S(function(){L(s.unstable_now())},de)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(L){L.callback=null},s.unstable_continueExecution=function(){A||M||(A=!0,Q(z))},s.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<L?Math.floor(1e3/L):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(L){switch(y){case 1:case 2:case 3:var de=3;break;default:de=y}var ue=y;y=de;try{return L()}finally{y=ue}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(L,de){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ue=y;y=L;try{return de()}finally{y=ue}},s.unstable_scheduleCallback=function(L,de,ue){var U=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?U+ue:U):ue=U,L){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=ue+te,L={id:x++,callback:de,priorityLevel:L,startTime:ue,expirationTime:te,sortIndex:-1},ue>U?(L.sortIndex=ue,e(m,L),t(h)===null&&L===t(m)&&(w?(_(B),B=-1):w=!0,pe(P,ue-U))):(L.sortIndex=te,e(h,L),A||M||(A=!0,Q(z))),L},s.unstable_shouldYield=j,s.unstable_wrapCallback=function(L){var de=y;return function(){var ue=y;y=de;try{return L.apply(this,arguments)}finally{y=ue}}}})(Zu)),Zu}var Lm;function Fx(){return Lm||(Lm=1,Ku.exports=Ux()),Ku.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function Ox(){if(Im)return Fn;Im=1;var s=Wf(),e=Fx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function y(n){return h.call(v,n)?!0:h.call(x,n)?!1:m.test(n)?v[n]=!0:(x[n]=!0,!1)}function M(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function A(n,i,o,c){if(i===null||typeof i>"u"||M(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,o,c,f,g,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,I);S[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,I);S[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,I);S[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,i,o,c){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,o,f,c)&&(o=null),c||f===null?y(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),F=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),j=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),L=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=L&&n[L]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Object.assign,U;function te(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var me=!1;function Ce(n,i){if(!n||me)return"";me=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var c=ne}Reflect.construct(n,[],i)}else{try{i.call()}catch(ne){c=ne}n.call(i.prototype)}else{try{throw Error()}catch(ne){c=ne}n()}}catch(ne){if(ne&&c&&typeof ne.stack=="string"){for(var f=ne.stack.split(`
`),g=c.stack.split(`
`),T=f.length-1,k=g.length-1;1<=T&&0<=k&&f[T]!==g[k];)k--;for(;1<=T&&0<=k;T--,k--)if(f[T]!==g[k]){if(T!==1||k!==1)do if(T--,k--,0>k||f[T]!==g[k]){var H=`
`+f[T].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=T&&0<=k);break}}}finally{me=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?te(n):""}function ke(n){switch(n.tag){case 5:return te(n.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return n=Ce(n.type,!1),n;case 11:return n=Ce(n.type.render,!1),n;case 1:return n=Ce(n.type,!0),n;default:return""}}function J(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case V:return"Fragment";case F:return"Portal";case D:return"Profiler";case B:return"StrictMode";case oe:return"Suspense";case ie:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case j:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case Z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fe:return i=n.displayName||null,i!==null?i:J(n.type)||"Memo";case Q:i=n._payload,n=n._init;try{return J(n(i))}catch{}}return null}function re(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(i);case 8:return i===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function xe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Re(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function De(n){var i=Re(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,g=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function mt(n){n._valueTracker||(n._valueTracker=De(n))}function jt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Re(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function O(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function It(n,i){var o=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ut(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=xe(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function nt(n,i){i=i.checked,i!=null&&N(n,"checked",i,!1)}function He(n,i){nt(n,i);var o=xe(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ze(n,i.type,o):i.hasOwnProperty("defaultValue")&&ze(n,i.type,xe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function At(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function ze(n,i,o){(i!=="number"||O(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var dt=Array.isArray;function Ot(n,i,o,c){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+xe(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function it(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function E(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(dt(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:xe(o)}}function b(n,i){var o=xe(i.value),c=xe(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function G(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ee(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ee(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var le,qe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(le=le||document.createElement("div"),le.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=le.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ye(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qe=["Webkit","ms","Moz","O"];Object.keys(Ve).forEach(function(n){Qe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ve[i]=Ve[n]})});function we(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ve.hasOwnProperty(n)&&Ve[n]?(""+i).trim():i+"px"}function Ie(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=we(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,f):n[o]=f}}var at=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(n,i){if(i){if(at[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Pe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gt=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ee=null,Ae=null,Ue=null;function Me(n){if(n=Po(n)){if(typeof Ee!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ka(i),Ee(n.stateNode,n.type,i))}}function ge(n){Ae?Ue?Ue.push(n):Ue=[n]:Ae=n}function Ye(){if(Ae){var n=Ae,i=Ue;if(Ue=Ae=null,Me(n),i)for(n=0;n<i.length;n++)Me(i[n])}}function pt(n,i){return n(i)}function Ut(){}var Ct=!1;function Kn(n,i,o){if(Ct)return n(i,o);Ct=!0;try{return pt(n,i,o)}finally{Ct=!1,(Ae!==null||Ue!==null)&&(Ut(),Ye())}}function vn(n,i){var o=n.stateNode;if(o===null)return null;var c=ka(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var us=!1;if(d)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){us=!0}}),window.addEventListener("test",Vn,Vn),window.removeEventListener("test",Vn,Vn)}catch{us=!1}function ho(n,i,o,c,f,g,T,k,H){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(o,ne)}catch(_e){this.onError(_e)}}var er=!1,Lr=null,Ri=!1,ds=null,fs={onError:function(n){er=!0,Lr=n}};function pa(n,i,o,c,f,g,T,k,H){er=!1,Lr=null,ho.apply(fs,arguments)}function ma(n,i,o,c,f,g,T,k,H){if(pa.apply(this,arguments),er){if(er){var ne=Lr;er=!1,Lr=null}else throw Error(t(198));Ri||(Ri=!0,ds=ne)}}function Pi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ga(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function va(n){if(Pi(n)!==n)throw Error(t(188))}function gc(n){var i=n.alternate;if(!i){if(i=Pi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var f=o.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===o)return va(f),n;if(g===c)return va(f),i;g=g.sibling}throw Error(t(188))}if(o.return!==c.return)o=f,c=g;else{for(var T=!1,k=f.child;k;){if(k===o){T=!0,o=f,c=g;break}if(k===c){T=!0,c=f,o=g;break}k=k.sibling}if(!T){for(k=g.child;k;){if(k===o){T=!0,o=g,c=f;break}if(k===c){T=!0,c=g,o=f;break}k=k.sibling}if(!T)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function xa(n){return n=gc(n),n!==null?_a(n):null}function _a(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=_a(n);if(i!==null)return i;n=n.sibling}return null}var C=e.unstable_scheduleCallback,Y=e.unstable_cancelCallback,ae=e.unstable_shouldYield,ce=e.unstable_requestPaint,q=e.unstable_now,be=e.unstable_getCurrentPriorityLevel,Ne=e.unstable_ImmediatePriority,je=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,ot=e.unstable_LowPriority,lt=e.unstable_IdlePriority,Je=null,ft=null;function kt(n){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Je,n,void 0,(n.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:tt,Ht=Math.log,Ft=Math.LN2;function tt(n){return n>>>=0,n===0?32:31-(Ht(n)/Ft|0)|0}var zt=64,Mt=4194304;function sn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function li(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,f=n.suspendedLanes,g=n.pingedLanes,T=o&268435455;if(T!==0){var k=T&~f;k!==0?c=sn(k):(g&=T,g!==0&&(c=sn(g)))}else T=o&~f,T!==0?c=sn(T):g!==0&&(c=sn(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,g=i&-i,f>=g||f===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-Rt(i),f=1<<o,c|=n[o],i&=~f;return c}function Tn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ir(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var T=31-Rt(g),k=1<<T,H=f[T];H===-1?((k&o)===0||(k&c)!==0)&&(f[T]=Tn(k,i)):H<=i&&(n.expiredLanes|=k),g&=~k}}function Vt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function An(){var n=zt;return zt<<=1,(zt&4194240)===0&&(zt=64),n}function xn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Qt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Rt(i),n[i]=o}function _n(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-Rt(o),g=1<<f;i[f]=0,c[f]=-1,n[f]=-1,o&=~g}}function kr(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-Rt(o),f=1<<c;f&i|n[c]&i&&(n[c]|=i),o&=~f}}var Et=0;function oh(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ah,vc,lh,ch,uh,xc=!1,ya=[],tr=null,nr=null,ir=null,po=new Map,mo=new Map,rr=[],tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dh(n,i){switch(n){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":po.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(i.pointerId)}}function go(n,i,o,c,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},i!==null&&(i=Po(i),i!==null&&vc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function nv(n,i,o,c,f){switch(i){case"focusin":return tr=go(tr,n,i,o,c,f),!0;case"dragenter":return nr=go(nr,n,i,o,c,f),!0;case"mouseover":return ir=go(ir,n,i,o,c,f),!0;case"pointerover":var g=f.pointerId;return po.set(g,go(po.get(g)||null,n,i,o,c,f)),!0;case"gotpointercapture":return g=f.pointerId,mo.set(g,go(mo.get(g)||null,n,i,o,c,f)),!0}return!1}function fh(n){var i=Ur(n.target);if(i!==null){var o=Pi(i);if(o!==null){if(i=o.tag,i===13){if(i=ga(o),i!==null){n.blockedOn=i,uh(n.priority,function(){lh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Sa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=yc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);gt=c,o.target.dispatchEvent(c),gt=null}else return i=Po(o),i!==null&&vc(i),n.blockedOn=o,!1;i.shift()}return!0}function hh(n,i,o){Sa(n)&&o.delete(i)}function iv(){xc=!1,tr!==null&&Sa(tr)&&(tr=null),nr!==null&&Sa(nr)&&(nr=null),ir!==null&&Sa(ir)&&(ir=null),po.forEach(hh),mo.forEach(hh)}function vo(n,i){n.blockedOn===i&&(n.blockedOn=null,xc||(xc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,iv)))}function xo(n){function i(f){return vo(f,n)}if(0<ya.length){vo(ya[0],n);for(var o=1;o<ya.length;o++){var c=ya[o];c.blockedOn===n&&(c.blockedOn=null)}}for(tr!==null&&vo(tr,n),nr!==null&&vo(nr,n),ir!==null&&vo(ir,n),po.forEach(i),mo.forEach(i),o=0;o<rr.length;o++)c=rr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<rr.length&&(o=rr[0],o.blockedOn===null);)fh(o),o.blockedOn===null&&rr.shift()}var hs=P.ReactCurrentBatchConfig,Ma=!0;function rv(n,i,o,c){var f=Et,g=hs.transition;hs.transition=null;try{Et=1,_c(n,i,o,c)}finally{Et=f,hs.transition=g}}function sv(n,i,o,c){var f=Et,g=hs.transition;hs.transition=null;try{Et=4,_c(n,i,o,c)}finally{Et=f,hs.transition=g}}function _c(n,i,o,c){if(Ma){var f=yc(n,i,o,c);if(f===null)Fc(n,i,c,Ea,o),dh(n,c);else if(nv(f,n,i,o,c))c.stopPropagation();else if(dh(n,c),i&4&&-1<tv.indexOf(n)){for(;f!==null;){var g=Po(f);if(g!==null&&ah(g),g=yc(n,i,o,c),g===null&&Fc(n,i,c,Ea,o),g===f)break;f=g}f!==null&&c.stopPropagation()}else Fc(n,i,c,null,o)}}var Ea=null;function yc(n,i,o,c){if(Ea=null,n=W(c),n=Ur(n),n!==null)if(i=Pi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ga(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ea=n,null}function ph(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(be()){case Ne:return 1;case je:return 4;case Fe:case ot:return 16;case lt:return 536870912;default:return 16}default:return 16}}var sr=null,Sc=null,ba=null;function mh(){if(ba)return ba;var n,i=Sc,o=i.length,c,f="value"in sr?sr.value:sr.textContent,g=f.length;for(n=0;n<o&&i[n]===f[n];n++);var T=o-n;for(c=1;c<=T&&i[o-c]===f[g-c];c++);return ba=f.slice(n,1<c?1-c:void 0)}function wa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ta(){return!0}function gh(){return!1}function jn(n){function i(o,c,f,g,T){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(o=n[k],this[k]=o?o(g):g[k]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ta:gh,this.isPropagationStopped=gh,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ta)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ta)},persist:function(){},isPersistent:Ta}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mc=jn(ps),_o=ue({},ps,{view:0,detail:0}),ov=jn(_o),Ec,bc,yo,Aa=ue({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==yo&&(yo&&n.type==="mousemove"?(Ec=n.screenX-yo.screenX,bc=n.screenY-yo.screenY):bc=Ec=0,yo=n),Ec)},movementY:function(n){return"movementY"in n?n.movementY:bc}}),vh=jn(Aa),av=ue({},Aa,{dataTransfer:0}),lv=jn(av),cv=ue({},_o,{relatedTarget:0}),wc=jn(cv),uv=ue({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),dv=jn(uv),fv=ue({},ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),hv=jn(fv),pv=ue({},ps,{data:0}),xh=jn(pv),mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=vv[n])?!!i[n]:!1}function Tc(){return xv}var _v=ue({},_o,{key:function(n){if(n.key){var i=mv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=wa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?gv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(n){return n.type==="keypress"?wa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),yv=jn(_v),Sv=ue({},Aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_h=jn(Sv),Mv=ue({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),Ev=jn(Mv),bv=ue({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),wv=jn(bv),Tv=ue({},Aa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Av=jn(Tv),Cv=[9,13,27,32],Ac=d&&"CompositionEvent"in window,So=null;d&&"documentMode"in document&&(So=document.documentMode);var Rv=d&&"TextEvent"in window&&!So,yh=d&&(!Ac||So&&8<So&&11>=So),Sh=" ",Mh=!1;function Eh(n,i){switch(n){case"keyup":return Cv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function Pv(n,i){switch(n){case"compositionend":return bh(i);case"keypress":return i.which!==32?null:(Mh=!0,Sh);case"textInput":return n=i.data,n===Sh&&Mh?null:n;default:return null}}function Dv(n,i){if(ms)return n==="compositionend"||!Ac&&Eh(n,i)?(n=mh(),ba=Sc=sr=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return yh&&i.locale!=="ko"?null:i.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Nv[n.type]:i==="textarea"}function Th(n,i,o,c){ge(c),i=Na(i,"onChange"),0<i.length&&(o=new Mc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var Mo=null,Eo=null;function Lv(n){Gh(n,0)}function Ca(n){var i=ys(n);if(jt(i))return n}function Iv(n,i){if(n==="change")return i}var Ah=!1;if(d){var Cc;if(d){var Rc="oninput"in document;if(!Rc){var Ch=document.createElement("div");Ch.setAttribute("oninput","return;"),Rc=typeof Ch.oninput=="function"}Cc=Rc}else Cc=!1;Ah=Cc&&(!document.documentMode||9<document.documentMode)}function Rh(){Mo&&(Mo.detachEvent("onpropertychange",Ph),Eo=Mo=null)}function Ph(n){if(n.propertyName==="value"&&Ca(Eo)){var i=[];Th(i,Eo,n,W(n)),Kn(Lv,i)}}function kv(n,i,o){n==="focusin"?(Rh(),Mo=i,Eo=o,Mo.attachEvent("onpropertychange",Ph)):n==="focusout"&&Rh()}function Uv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ca(Eo)}function Fv(n,i){if(n==="click")return Ca(i)}function Ov(n,i){if(n==="input"||n==="change")return Ca(i)}function zv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ci=typeof Object.is=="function"?Object.is:zv;function bo(n,i){if(ci(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!h.call(i,f)||!ci(n[f],i[f]))return!1}return!0}function Dh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Nh(n,i){var o=Dh(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Dh(o)}}function Lh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Lh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ih(){for(var n=window,i=O();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=O(n.document)}return i}function Pc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Bv(n){var i=Ih(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Lh(o.ownerDocument.documentElement,o)){if(c!==null&&Pc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!n.extend&&g>c&&(f=c,c=g,g=f),f=Nh(o,g);var T=Nh(o,c);f&&T&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Hv=d&&"documentMode"in document&&11>=document.documentMode,gs=null,Dc=null,wo=null,Nc=!1;function kh(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Nc||gs==null||gs!==O(c)||(c=gs,"selectionStart"in c&&Pc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),wo&&bo(wo,c)||(wo=c,c=Na(Dc,"onSelect"),0<c.length&&(i=new Mc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=gs)))}function Ra(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var vs={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},Lc={},Uh={};d&&(Uh=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Pa(n){if(Lc[n])return Lc[n];if(!vs[n])return n;var i=vs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Uh)return Lc[n]=i[o];return n}var Fh=Pa("animationend"),Oh=Pa("animationiteration"),zh=Pa("animationstart"),Bh=Pa("transitionend"),Hh=new Map,Vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(n,i){Hh.set(n,i),l(i,[n])}for(var Ic=0;Ic<Vh.length;Ic++){var kc=Vh[Ic],Vv=kc.toLowerCase(),jv=kc[0].toUpperCase()+kc.slice(1);or(Vv,"on"+jv)}or(Fh,"onAnimationEnd"),or(Oh,"onAnimationIteration"),or(zh,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(Bh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function jh(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,ma(c,i,void 0,n),n.currentTarget=null}function Gh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var T=c.length-1;0<=T;T--){var k=c[T],H=k.instance,ne=k.currentTarget;if(k=k.listener,H!==g&&f.isPropagationStopped())break e;jh(f,k,ne),g=H}else for(T=0;T<c.length;T++){if(k=c[T],H=k.instance,ne=k.currentTarget,k=k.listener,H!==g&&f.isPropagationStopped())break e;jh(f,k,ne),g=H}}}if(Ri)throw n=ds,Ri=!1,ds=null,n}function Wt(n,i){var o=i[jc];o===void 0&&(o=i[jc]=new Set);var c=n+"__bubble";o.has(c)||(Wh(i,n,2,!1),o.add(c))}function Uc(n,i,o){var c=0;i&&(c|=4),Wh(o,n,c,i)}var Da="_reactListening"+Math.random().toString(36).slice(2);function Ao(n){if(!n[Da]){n[Da]=!0,r.forEach(function(o){o!=="selectionchange"&&(Gv.has(o)||Uc(o,!1,n),Uc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Da]||(i[Da]=!0,Uc("selectionchange",!1,i))}}function Wh(n,i,o,c){switch(ph(i)){case 1:var f=rv;break;case 4:f=sv;break;default:f=_c}o=f.bind(null,i,o,n),f=void 0,!us||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function Fc(n,i,o,c,f){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var k=c.stateNode.containerInfo;if(k===f||k.nodeType===8&&k.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var H=T.tag;if((H===3||H===4)&&(H=T.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;T=T.return}for(;k!==null;){if(T=Ur(k),T===null)return;if(H=T.tag,H===5||H===6){c=g=T;continue e}k=k.parentNode}}c=c.return}Kn(function(){var ne=g,_e=W(o),Se=[];e:{var ve=Hh.get(n);if(ve!==void 0){var Oe=Mc,Ge=n;switch(n){case"keypress":if(wa(o)===0)break e;case"keydown":case"keyup":Oe=yv;break;case"focusin":Ge="focus",Oe=wc;break;case"focusout":Ge="blur",Oe=wc;break;case"beforeblur":case"afterblur":Oe=wc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=Ev;break;case Fh:case Oh:case zh:Oe=dv;break;case Bh:Oe=wv;break;case"scroll":Oe=ov;break;case"wheel":Oe=Av;break;case"copy":case"cut":case"paste":Oe=hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=_h}var $e=(i&4)!==0,Jt=!$e&&n==="scroll",$=$e?ve!==null?ve+"Capture":null:ve;$e=[];for(var X=ne,K;X!==null;){K=X;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,$!==null&&(Te=vn(X,$),Te!=null&&$e.push(Co(X,Te,K)))),Jt)break;X=X.return}0<$e.length&&(ve=new Oe(ve,Ge,null,o,_e),Se.push({event:ve,listeners:$e}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Oe=n==="mouseout"||n==="pointerout",ve&&o!==gt&&(Ge=o.relatedTarget||o.fromElement)&&(Ur(Ge)||Ge[Di]))break e;if((Oe||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,Oe?(Ge=o.relatedTarget||o.toElement,Oe=ne,Ge=Ge?Ur(Ge):null,Ge!==null&&(Jt=Pi(Ge),Ge!==Jt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Oe=null,Ge=ne),Oe!==Ge)){if($e=vh,Te="onMouseLeave",$="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&($e=_h,Te="onPointerLeave",$="onPointerEnter",X="pointer"),Jt=Oe==null?ve:ys(Oe),K=Ge==null?ve:ys(Ge),ve=new $e(Te,X+"leave",Oe,o,_e),ve.target=Jt,ve.relatedTarget=K,Te=null,Ur(_e)===ne&&($e=new $e($,X+"enter",Ge,o,_e),$e.target=K,$e.relatedTarget=Jt,Te=$e),Jt=Te,Oe&&Ge)t:{for($e=Oe,$=Ge,X=0,K=$e;K;K=xs(K))X++;for(K=0,Te=$;Te;Te=xs(Te))K++;for(;0<X-K;)$e=xs($e),X--;for(;0<K-X;)$=xs($),K--;for(;X--;){if($e===$||$!==null&&$e===$.alternate)break t;$e=xs($e),$=xs($)}$e=null}else $e=null;Oe!==null&&Xh(Se,ve,Oe,$e,!1),Ge!==null&&Jt!==null&&Xh(Se,Jt,Ge,$e,!0)}}e:{if(ve=ne?ys(ne):window,Oe=ve.nodeName&&ve.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ve.type==="file")var Ze=Iv;else if(wh(ve))if(Ah)Ze=Ov;else{Ze=Uv;var rt=kv}else(Oe=ve.nodeName)&&Oe.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ze=Fv);if(Ze&&(Ze=Ze(n,ne))){Th(Se,Ze,o,_e);break e}rt&&rt(n,ve,ne),n==="focusout"&&(rt=ve._wrapperState)&&rt.controlled&&ve.type==="number"&&ze(ve,"number",ve.value)}switch(rt=ne?ys(ne):window,n){case"focusin":(wh(rt)||rt.contentEditable==="true")&&(gs=rt,Dc=ne,wo=null);break;case"focusout":wo=Dc=gs=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,kh(Se,o,_e);break;case"selectionchange":if(Hv)break;case"keydown":case"keyup":kh(Se,o,_e)}var st;if(Ac)e:{switch(n){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else ms?Eh(n,o)&&(ht="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ht="onCompositionStart");ht&&(yh&&o.locale!=="ko"&&(ms||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&ms&&(st=mh()):(sr=_e,Sc="value"in sr?sr.value:sr.textContent,ms=!0)),rt=Na(ne,ht),0<rt.length&&(ht=new xh(ht,n,null,o,_e),Se.push({event:ht,listeners:rt}),st?ht.data=st:(st=bh(o),st!==null&&(ht.data=st)))),(st=Rv?Pv(n,o):Dv(n,o))&&(ne=Na(ne,"onBeforeInput"),0<ne.length&&(_e=new xh("onBeforeInput","beforeinput",null,o,_e),Se.push({event:_e,listeners:ne}),_e.data=st))}Gh(Se,i)})}function Co(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Na(n,i){for(var o=i+"Capture",c=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=vn(n,o),g!=null&&c.unshift(Co(n,g,f)),g=vn(n,i),g!=null&&c.push(Co(n,g,f))),n=n.return}return c}function xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xh(n,i,o,c,f){for(var g=i._reactName,T=[];o!==null&&o!==c;){var k=o,H=k.alternate,ne=k.stateNode;if(H!==null&&H===c)break;k.tag===5&&ne!==null&&(k=ne,f?(H=vn(o,g),H!=null&&T.unshift(Co(o,H,k))):f||(H=vn(o,g),H!=null&&T.push(Co(o,H,k)))),o=o.return}T.length!==0&&n.push({event:i,listeners:T})}var Wv=/\r\n?/g,Xv=/\u0000|\uFFFD/g;function qh(n){return(typeof n=="string"?n:""+n).replace(Wv,`
`).replace(Xv,"")}function La(n,i,o){if(i=qh(i),qh(n)!==i&&o)throw Error(t(425))}function Ia(){}var Oc=null,zc=null;function Bc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Hc=typeof setTimeout=="function"?setTimeout:void 0,qv=typeof clearTimeout=="function"?clearTimeout:void 0,Yh=typeof Promise=="function"?Promise:void 0,Yv=typeof queueMicrotask=="function"?queueMicrotask:typeof Yh<"u"?function(n){return Yh.resolve(null).then(n).catch($v)}:Hc;function $v(n){setTimeout(function(){throw n})}function Vc(n,i){var o=i,c=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){n.removeChild(f),xo(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);xo(i)}function ar(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function $h(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var _s=Math.random().toString(36).slice(2),Mi="__reactFiber$"+_s,Ro="__reactProps$"+_s,Di="__reactContainer$"+_s,jc="__reactEvents$"+_s,Kv="__reactListeners$"+_s,Zv="__reactHandles$"+_s;function Ur(n){var i=n[Mi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Di]||o[Mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=$h(n);n!==null;){if(o=n[Mi])return o;n=$h(n)}return i}n=o,o=n.parentNode}return null}function Po(n){return n=n[Mi]||n[Di],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ka(n){return n[Ro]||null}var Gc=[],Ss=-1;function lr(n){return{current:n}}function Xt(n){0>Ss||(n.current=Gc[Ss],Gc[Ss]=null,Ss--)}function Gt(n,i){Ss++,Gc[Ss]=n.current,n.current=i}var cr={},yn=lr(cr),Nn=lr(!1),Fr=cr;function Ms(n,i){var o=n.type.contextTypes;if(!o)return cr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in o)f[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Ln(n){return n=n.childContextTypes,n!=null}function Ua(){Xt(Nn),Xt(yn)}function Kh(n,i,o){if(yn.current!==cr)throw Error(t(168));Gt(yn,i),Gt(Nn,o)}function Zh(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,re(n)||"Unknown",f));return ue({},o,c)}function Fa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||cr,Fr=yn.current,Gt(yn,n),Gt(Nn,Nn.current),!0}function Qh(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Zh(n,i,Fr),c.__reactInternalMemoizedMergedChildContext=n,Xt(Nn),Xt(yn),Gt(yn,n)):Xt(Nn),Gt(Nn,o)}var Ni=null,Oa=!1,Wc=!1;function Jh(n){Ni===null?Ni=[n]:Ni.push(n)}function Qv(n){Oa=!0,Jh(n)}function ur(){if(!Wc&&Ni!==null){Wc=!0;var n=0,i=Et;try{var o=Ni;for(Et=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Ni=null,Oa=!1}catch(f){throw Ni!==null&&(Ni=Ni.slice(n+1)),C(Ne,ur),f}finally{Et=i,Wc=!1}}return null}var Es=[],bs=0,za=null,Ba=0,Zn=[],Qn=0,Or=null,Li=1,Ii="";function zr(n,i){Es[bs++]=Ba,Es[bs++]=za,za=n,Ba=i}function ep(n,i,o){Zn[Qn++]=Li,Zn[Qn++]=Ii,Zn[Qn++]=Or,Or=n;var c=Li;n=Ii;var f=32-Rt(c)-1;c&=~(1<<f),o+=1;var g=32-Rt(i)+f;if(30<g){var T=f-f%5;g=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Li=1<<32-Rt(i)+f|o<<f|c,Ii=g+n}else Li=1<<g|o<<f|c,Ii=n}function Xc(n){n.return!==null&&(zr(n,1),ep(n,1,0))}function qc(n){for(;n===za;)za=Es[--bs],Es[bs]=null,Ba=Es[--bs],Es[bs]=null;for(;n===Or;)Or=Zn[--Qn],Zn[Qn]=null,Ii=Zn[--Qn],Zn[Qn]=null,Li=Zn[--Qn],Zn[Qn]=null}var Gn=null,Wn=null,qt=!1,ui=null;function tp(n,i){var o=ni(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function np(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Gn=n,Wn=ar(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Gn=n,Wn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Or!==null?{id:Li,overflow:Ii}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ni(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Gn=n,Wn=null,!0):!1;default:return!1}}function Yc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function $c(n){if(qt){var i=Wn;if(i){var o=i;if(!np(n,i)){if(Yc(n))throw Error(t(418));i=ar(o.nextSibling);var c=Gn;i&&np(n,i)?tp(c,o):(n.flags=n.flags&-4097|2,qt=!1,Gn=n)}}else{if(Yc(n))throw Error(t(418));n.flags=n.flags&-4097|2,qt=!1,Gn=n}}}function ip(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Gn=n}function Ha(n){if(n!==Gn)return!1;if(!qt)return ip(n),qt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Bc(n.type,n.memoizedProps)),i&&(i=Wn)){if(Yc(n))throw rp(),Error(t(418));for(;i;)tp(n,i),i=ar(i.nextSibling)}if(ip(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Wn=ar(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Wn=null}}else Wn=Gn?ar(n.stateNode.nextSibling):null;return!0}function rp(){for(var n=Wn;n;)n=ar(n.nextSibling)}function ws(){Wn=Gn=null,qt=!1}function Kc(n){ui===null?ui=[n]:ui.push(n)}var Jv=P.ReactCurrentBatchConfig;function Do(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var f=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(T){var k=f.refs;T===null?delete k[g]:k[g]=T},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Va(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function sp(n){var i=n._init;return i(n._payload)}function op(n){function i($,X){if(n){var K=$.deletions;K===null?($.deletions=[X],$.flags|=16):K.push(X)}}function o($,X){if(!n)return null;for(;X!==null;)i($,X),X=X.sibling;return null}function c($,X){for($=new Map;X!==null;)X.key!==null?$.set(X.key,X):$.set(X.index,X),X=X.sibling;return $}function f($,X){return $=xr($,X),$.index=0,$.sibling=null,$}function g($,X,K){return $.index=K,n?(K=$.alternate,K!==null?(K=K.index,K<X?($.flags|=2,X):K):($.flags|=2,X)):($.flags|=1048576,X)}function T($){return n&&$.alternate===null&&($.flags|=2),$}function k($,X,K,Te){return X===null||X.tag!==6?(X=Hu(K,$.mode,Te),X.return=$,X):(X=f(X,K),X.return=$,X)}function H($,X,K,Te){var Ze=K.type;return Ze===V?_e($,X,K.props.children,Te,K.key):X!==null&&(X.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Q&&sp(Ze)===X.type)?(Te=f(X,K.props),Te.ref=Do($,X,K),Te.return=$,Te):(Te=fl(K.type,K.key,K.props,null,$.mode,Te),Te.ref=Do($,X,K),Te.return=$,Te)}function ne($,X,K,Te){return X===null||X.tag!==4||X.stateNode.containerInfo!==K.containerInfo||X.stateNode.implementation!==K.implementation?(X=Vu(K,$.mode,Te),X.return=$,X):(X=f(X,K.children||[]),X.return=$,X)}function _e($,X,K,Te,Ze){return X===null||X.tag!==7?(X=qr(K,$.mode,Te,Ze),X.return=$,X):(X=f(X,K),X.return=$,X)}function Se($,X,K){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Hu(""+X,$.mode,K),X.return=$,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case z:return K=fl(X.type,X.key,X.props,null,$.mode,K),K.ref=Do($,null,X),K.return=$,K;case F:return X=Vu(X,$.mode,K),X.return=$,X;case Q:var Te=X._init;return Se($,Te(X._payload),K)}if(dt(X)||de(X))return X=qr(X,$.mode,K,null),X.return=$,X;Va($,X)}return null}function ve($,X,K,Te){var Ze=X!==null?X.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ze!==null?null:k($,X,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case z:return K.key===Ze?H($,X,K,Te):null;case F:return K.key===Ze?ne($,X,K,Te):null;case Q:return Ze=K._init,ve($,X,Ze(K._payload),Te)}if(dt(K)||de(K))return Ze!==null?null:_e($,X,K,Te,null);Va($,K)}return null}function Oe($,X,K,Te,Ze){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return $=$.get(K)||null,k(X,$,""+Te,Ze);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case z:return $=$.get(Te.key===null?K:Te.key)||null,H(X,$,Te,Ze);case F:return $=$.get(Te.key===null?K:Te.key)||null,ne(X,$,Te,Ze);case Q:var rt=Te._init;return Oe($,X,K,rt(Te._payload),Ze)}if(dt(Te)||de(Te))return $=$.get(K)||null,_e(X,$,Te,Ze,null);Va(X,Te)}return null}function Ge($,X,K,Te){for(var Ze=null,rt=null,st=X,ht=X=0,hn=null;st!==null&&ht<K.length;ht++){st.index>ht?(hn=st,st=null):hn=st.sibling;var Dt=ve($,st,K[ht],Te);if(Dt===null){st===null&&(st=hn);break}n&&st&&Dt.alternate===null&&i($,st),X=g(Dt,X,ht),rt===null?Ze=Dt:rt.sibling=Dt,rt=Dt,st=hn}if(ht===K.length)return o($,st),qt&&zr($,ht),Ze;if(st===null){for(;ht<K.length;ht++)st=Se($,K[ht],Te),st!==null&&(X=g(st,X,ht),rt===null?Ze=st:rt.sibling=st,rt=st);return qt&&zr($,ht),Ze}for(st=c($,st);ht<K.length;ht++)hn=Oe(st,$,ht,K[ht],Te),hn!==null&&(n&&hn.alternate!==null&&st.delete(hn.key===null?ht:hn.key),X=g(hn,X,ht),rt===null?Ze=hn:rt.sibling=hn,rt=hn);return n&&st.forEach(function(_r){return i($,_r)}),qt&&zr($,ht),Ze}function $e($,X,K,Te){var Ze=de(K);if(typeof Ze!="function")throw Error(t(150));if(K=Ze.call(K),K==null)throw Error(t(151));for(var rt=Ze=null,st=X,ht=X=0,hn=null,Dt=K.next();st!==null&&!Dt.done;ht++,Dt=K.next()){st.index>ht?(hn=st,st=null):hn=st.sibling;var _r=ve($,st,Dt.value,Te);if(_r===null){st===null&&(st=hn);break}n&&st&&_r.alternate===null&&i($,st),X=g(_r,X,ht),rt===null?Ze=_r:rt.sibling=_r,rt=_r,st=hn}if(Dt.done)return o($,st),qt&&zr($,ht),Ze;if(st===null){for(;!Dt.done;ht++,Dt=K.next())Dt=Se($,Dt.value,Te),Dt!==null&&(X=g(Dt,X,ht),rt===null?Ze=Dt:rt.sibling=Dt,rt=Dt);return qt&&zr($,ht),Ze}for(st=c($,st);!Dt.done;ht++,Dt=K.next())Dt=Oe(st,$,ht,Dt.value,Te),Dt!==null&&(n&&Dt.alternate!==null&&st.delete(Dt.key===null?ht:Dt.key),X=g(Dt,X,ht),rt===null?Ze=Dt:rt.sibling=Dt,rt=Dt);return n&&st.forEach(function(Nx){return i($,Nx)}),qt&&zr($,ht),Ze}function Jt($,X,K,Te){if(typeof K=="object"&&K!==null&&K.type===V&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case z:e:{for(var Ze=K.key,rt=X;rt!==null;){if(rt.key===Ze){if(Ze=K.type,Ze===V){if(rt.tag===7){o($,rt.sibling),X=f(rt,K.props.children),X.return=$,$=X;break e}}else if(rt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Q&&sp(Ze)===rt.type){o($,rt.sibling),X=f(rt,K.props),X.ref=Do($,rt,K),X.return=$,$=X;break e}o($,rt);break}else i($,rt);rt=rt.sibling}K.type===V?(X=qr(K.props.children,$.mode,Te,K.key),X.return=$,$=X):(Te=fl(K.type,K.key,K.props,null,$.mode,Te),Te.ref=Do($,X,K),Te.return=$,$=Te)}return T($);case F:e:{for(rt=K.key;X!==null;){if(X.key===rt)if(X.tag===4&&X.stateNode.containerInfo===K.containerInfo&&X.stateNode.implementation===K.implementation){o($,X.sibling),X=f(X,K.children||[]),X.return=$,$=X;break e}else{o($,X);break}else i($,X);X=X.sibling}X=Vu(K,$.mode,Te),X.return=$,$=X}return T($);case Q:return rt=K._init,Jt($,X,rt(K._payload),Te)}if(dt(K))return Ge($,X,K,Te);if(de(K))return $e($,X,K,Te);Va($,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,X!==null&&X.tag===6?(o($,X.sibling),X=f(X,K),X.return=$,$=X):(o($,X),X=Hu(K,$.mode,Te),X.return=$,$=X),T($)):o($,X)}return Jt}var Ts=op(!0),ap=op(!1),ja=lr(null),Ga=null,As=null,Zc=null;function Qc(){Zc=As=Ga=null}function Jc(n){var i=ja.current;Xt(ja),n._currentValue=i}function eu(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Cs(n,i){Ga=n,Zc=As=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(In=!0),n.firstContext=null)}function Jn(n){var i=n._currentValue;if(Zc!==n)if(n={context:n,memoizedValue:i,next:null},As===null){if(Ga===null)throw Error(t(308));As=n,Ga.dependencies={lanes:0,firstContext:n}}else As=As.next=n;return i}var Br=null;function tu(n){Br===null?Br=[n]:Br.push(n)}function lp(n,i,o,c){var f=i.interleaved;return f===null?(o.next=o,tu(i)):(o.next=f.next,f.next=o),i.interleaved=o,ki(n,c)}function ki(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var dr=!1;function nu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function fr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Pt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,ki(n,o)}return f=c.interleaved,f===null?(i.next=i,tu(c)):(i.next=f.next,f.next=i),c.interleaved=i,ki(n,o)}function Wa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,kr(n,o)}}function up(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?f=g=T:g=g.next=T,o=o.next}while(o!==null);g===null?f=g=i:g=g.next=i}else f=g=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Xa(n,i,o,c){var f=n.updateQueue;dr=!1;var g=f.firstBaseUpdate,T=f.lastBaseUpdate,k=f.shared.pending;if(k!==null){f.shared.pending=null;var H=k,ne=H.next;H.next=null,T===null?g=ne:T.next=ne,T=H;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,k=_e.lastBaseUpdate,k!==T&&(k===null?_e.firstBaseUpdate=ne:k.next=ne,_e.lastBaseUpdate=H))}if(g!==null){var Se=f.baseState;T=0,_e=ne=H=null,k=g;do{var ve=k.lane,Oe=k.eventTime;if((c&ve)===ve){_e!==null&&(_e=_e.next={eventTime:Oe,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Ge=n,$e=k;switch(ve=i,Oe=o,$e.tag){case 1:if(Ge=$e.payload,typeof Ge=="function"){Se=Ge.call(Oe,Se,ve);break e}Se=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=$e.payload,ve=typeof Ge=="function"?Ge.call(Oe,Se,ve):Ge,ve==null)break e;Se=ue({},Se,ve);break e;case 2:dr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,ve=f.effects,ve===null?f.effects=[k]:ve.push(k))}else Oe={eventTime:Oe,lane:ve,tag:k.tag,payload:k.payload,callback:k.callback,next:null},_e===null?(ne=_e=Oe,H=Se):_e=_e.next=Oe,T|=ve;if(k=k.next,k===null){if(k=f.shared.pending,k===null)break;ve=k,k=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);if(_e===null&&(H=Se),f.baseState=H,f.firstBaseUpdate=ne,f.lastBaseUpdate=_e,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else g===null&&(f.shared.lanes=0);jr|=T,n.lanes=T,n.memoizedState=Se}}function dp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var No={},Ei=lr(No),Lo=lr(No),Io=lr(No);function Hr(n){if(n===No)throw Error(t(174));return n}function iu(n,i){switch(Gt(Io,i),Gt(Lo,n),Gt(Ei,No),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:he(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=he(i,n)}Xt(Ei),Gt(Ei,i)}function Rs(){Xt(Ei),Xt(Lo),Xt(Io)}function fp(n){Hr(Io.current);var i=Hr(Ei.current),o=he(i,n.type);i!==o&&(Gt(Lo,n),Gt(Ei,o))}function ru(n){Lo.current===n&&(Xt(Ei),Xt(Lo))}var Yt=lr(0);function qa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var su=[];function ou(){for(var n=0;n<su.length;n++)su[n]._workInProgressVersionPrimary=null;su.length=0}var Ya=P.ReactCurrentDispatcher,au=P.ReactCurrentBatchConfig,Vr=0,$t=null,on=null,dn=null,$a=!1,ko=!1,Uo=0,ex=0;function Sn(){throw Error(t(321))}function lu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ci(n[o],i[o]))return!1;return!0}function cu(n,i,o,c,f,g){if(Vr=g,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ya.current=n===null||n.memoizedState===null?rx:sx,n=o(c,f),ko){g=0;do{if(ko=!1,Uo=0,25<=g)throw Error(t(301));g+=1,dn=on=null,i.updateQueue=null,Ya.current=ox,n=o(c,f)}while(ko)}if(Ya.current=Qa,i=on!==null&&on.next!==null,Vr=0,dn=on=$t=null,$a=!1,i)throw Error(t(300));return n}function uu(){var n=Uo!==0;return Uo=0,n}function bi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?$t.memoizedState=dn=n:dn=dn.next=n,dn}function ei(){if(on===null){var n=$t.alternate;n=n!==null?n.memoizedState:null}else n=on.next;var i=dn===null?$t.memoizedState:dn.next;if(i!==null)dn=i,on=n;else{if(n===null)throw Error(t(310));on=n,n={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},dn===null?$t.memoizedState=dn=n:dn=dn.next=n}return dn}function Fo(n,i){return typeof i=="function"?i(n):i}function du(n){var i=ei(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=on,f=c.baseQueue,g=o.pending;if(g!==null){if(f!==null){var T=f.next;f.next=g.next,g.next=T}c.baseQueue=f=g,o.pending=null}if(f!==null){g=f.next,c=c.baseState;var k=T=null,H=null,ne=g;do{var _e=ne.lane;if((Vr&_e)===_e)H!==null&&(H=H.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),c=ne.hasEagerState?ne.eagerState:n(c,ne.action);else{var Se={lane:_e,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};H===null?(k=H=Se,T=c):H=H.next=Se,$t.lanes|=_e,jr|=_e}ne=ne.next}while(ne!==null&&ne!==g);H===null?T=c:H.next=k,ci(c,i.memoizedState)||(In=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=H,o.lastRenderedState=c}if(n=o.interleaved,n!==null){f=n;do g=f.lane,$t.lanes|=g,jr|=g,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function fu(n){var i=ei(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,g=i.memoizedState;if(f!==null){o.pending=null;var T=f=f.next;do g=n(g,T.action),T=T.next;while(T!==f);ci(g,i.memoizedState)||(In=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,c]}function hp(){}function pp(n,i){var o=$t,c=ei(),f=i(),g=!ci(c.memoizedState,f);if(g&&(c.memoizedState=f,In=!0),c=c.queue,hu(vp.bind(null,o,c,n),[n]),c.getSnapshot!==i||g||dn!==null&&dn.memoizedState.tag&1){if(o.flags|=2048,Oo(9,gp.bind(null,o,c,f,i),void 0,null),fn===null)throw Error(t(349));(Vr&30)!==0||mp(o,i,f)}return f}function mp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function gp(n,i,o,c){i.value=o,i.getSnapshot=c,xp(i)&&_p(n)}function vp(n,i,o){return o(function(){xp(i)&&_p(n)})}function xp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ci(n,o)}catch{return!0}}function _p(n){var i=ki(n,1);i!==null&&pi(i,n,1,-1)}function yp(n){var i=bi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:n},i.queue=n,n=n.dispatch=ix.bind(null,$t,n),[i.memoizedState,n]}function Oo(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Sp(){return ei().memoizedState}function Ka(n,i,o,c){var f=bi();$t.flags|=n,f.memoizedState=Oo(1|i,o,void 0,c===void 0?null:c)}function Za(n,i,o,c){var f=ei();c=c===void 0?null:c;var g=void 0;if(on!==null){var T=on.memoizedState;if(g=T.destroy,c!==null&&lu(c,T.deps)){f.memoizedState=Oo(i,o,g,c);return}}$t.flags|=n,f.memoizedState=Oo(1|i,o,g,c)}function Mp(n,i){return Ka(8390656,8,n,i)}function hu(n,i){return Za(2048,8,n,i)}function Ep(n,i){return Za(4,2,n,i)}function bp(n,i){return Za(4,4,n,i)}function wp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Tp(n,i,o){return o=o!=null?o.concat([n]):null,Za(4,4,wp.bind(null,i,n),o)}function pu(){}function Ap(n,i){var o=ei();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&lu(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Cp(n,i){var o=ei();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&lu(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Rp(n,i,o){return(Vr&21)===0?(n.baseState&&(n.baseState=!1,In=!0),n.memoizedState=o):(ci(o,i)||(o=An(),$t.lanes|=o,jr|=o,n.baseState=!0),i)}function tx(n,i){var o=Et;Et=o!==0&&4>o?o:4,n(!0);var c=au.transition;au.transition={};try{n(!1),i()}finally{Et=o,au.transition=c}}function Pp(){return ei().memoizedState}function nx(n,i,o){var c=gr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Dp(n))Np(i,o);else if(o=lp(n,i,o,c),o!==null){var f=Rn();pi(o,n,c,f),Lp(o,i,c)}}function ix(n,i,o){var c=gr(n),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Dp(n))Np(i,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var T=i.lastRenderedState,k=g(T,o);if(f.hasEagerState=!0,f.eagerState=k,ci(k,T)){var H=i.interleaved;H===null?(f.next=f,tu(i)):(f.next=H.next,H.next=f),i.interleaved=f;return}}catch{}finally{}o=lp(n,i,f,c),o!==null&&(f=Rn(),pi(o,n,c,f),Lp(o,i,c))}}function Dp(n){var i=n.alternate;return n===$t||i!==null&&i===$t}function Np(n,i){ko=$a=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Lp(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,kr(n,o)}}var Qa={readContext:Jn,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},rx={readContext:Jn,useCallback:function(n,i){return bi().memoizedState=[n,i===void 0?null:i],n},useContext:Jn,useEffect:Mp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ka(4194308,4,wp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ka(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ka(4,2,n,i)},useMemo:function(n,i){var o=bi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=bi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=nx.bind(null,$t,n),[c.memoizedState,n]},useRef:function(n){var i=bi();return n={current:n},i.memoizedState=n},useState:yp,useDebugValue:pu,useDeferredValue:function(n){return bi().memoizedState=n},useTransition:function(){var n=yp(!1),i=n[0];return n=tx.bind(null,n[1]),bi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=$t,f=bi();if(qt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),fn===null)throw Error(t(349));(Vr&30)!==0||mp(c,i,o)}f.memoizedState=o;var g={value:o,getSnapshot:i};return f.queue=g,Mp(vp.bind(null,c,g,n),[n]),c.flags|=2048,Oo(9,gp.bind(null,c,g,o,i),void 0,null),o},useId:function(){var n=bi(),i=fn.identifierPrefix;if(qt){var o=Ii,c=Li;o=(c&~(1<<32-Rt(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Uo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=ex++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},sx={readContext:Jn,useCallback:Ap,useContext:Jn,useEffect:hu,useImperativeHandle:Tp,useInsertionEffect:Ep,useLayoutEffect:bp,useMemo:Cp,useReducer:du,useRef:Sp,useState:function(){return du(Fo)},useDebugValue:pu,useDeferredValue:function(n){var i=ei();return Rp(i,on.memoizedState,n)},useTransition:function(){var n=du(Fo)[0],i=ei().memoizedState;return[n,i]},useMutableSource:hp,useSyncExternalStore:pp,useId:Pp,unstable_isNewReconciler:!1},ox={readContext:Jn,useCallback:Ap,useContext:Jn,useEffect:hu,useImperativeHandle:Tp,useInsertionEffect:Ep,useLayoutEffect:bp,useMemo:Cp,useReducer:fu,useRef:Sp,useState:function(){return fu(Fo)},useDebugValue:pu,useDeferredValue:function(n){var i=ei();return on===null?i.memoizedState=n:Rp(i,on.memoizedState,n)},useTransition:function(){var n=fu(Fo)[0],i=ei().memoizedState;return[n,i]},useMutableSource:hp,useSyncExternalStore:pp,useId:Pp,unstable_isNewReconciler:!1};function di(n,i){if(n&&n.defaultProps){i=ue({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function mu(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:ue({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Ja={isMounted:function(n){return(n=n._reactInternals)?Pi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Rn(),f=gr(n),g=Ui(c,f);g.payload=i,o!=null&&(g.callback=o),i=fr(n,g,f),i!==null&&(pi(i,n,f,c),Wa(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Rn(),f=gr(n),g=Ui(c,f);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=fr(n,g,f),i!==null&&(pi(i,n,f,c),Wa(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Rn(),c=gr(n),f=Ui(o,c);f.tag=2,i!=null&&(f.callback=i),i=fr(n,f,c),i!==null&&(pi(i,n,c,o),Wa(i,n,c))}};function Ip(n,i,o,c,f,g,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,T):i.prototype&&i.prototype.isPureReactComponent?!bo(o,c)||!bo(f,g):!0}function kp(n,i,o){var c=!1,f=cr,g=i.contextType;return typeof g=="object"&&g!==null?g=Jn(g):(f=Ln(i)?Fr:yn.current,c=i.contextTypes,g=(c=c!=null)?Ms(n,f):cr),i=new i(o,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ja,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),i}function Up(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&Ja.enqueueReplaceState(i,i.state,null)}function gu(n,i,o,c){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},nu(n);var g=i.contextType;typeof g=="object"&&g!==null?f.context=Jn(g):(g=Ln(i)?Fr:yn.current,f.context=Ms(n,g)),f.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(mu(n,i,g,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Ja.enqueueReplaceState(f,f.state,null),Xa(n,o,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ps(n,i){try{var o="",c=i;do o+=ke(c),c=c.return;while(c);var f=o}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:f,digest:null}}function vu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function xu(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var ax=typeof WeakMap=="function"?WeakMap:Map;function Fp(n,i,o){o=Ui(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){ol||(ol=!0,Lu=c),xu(n,i)},o}function Op(n,i,o){o=Ui(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){xu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){xu(n,i),typeof c!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),o}function zp(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new ax;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),n=Sx.bind(null,n,i,o),i.then(n,n))}function Bp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Hp(n,i,o,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ui(-1,1),i.tag=2,fr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var lx=P.ReactCurrentOwner,In=!1;function Cn(n,i,o,c){i.child=n===null?ap(i,null,o,c):Ts(i,n.child,o,c)}function Vp(n,i,o,c,f){o=o.render;var g=i.ref;return Cs(i,f),c=cu(n,i,o,c,g,f),o=uu(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Fi(n,i,f)):(qt&&o&&Xc(i),i.flags|=1,Cn(n,i,c,f),i.child)}function jp(n,i,o,c,f){if(n===null){var g=o.type;return typeof g=="function"&&!Bu(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,Gp(n,i,g,c,f)):(n=fl(o.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&f)===0){var T=g.memoizedProps;if(o=o.compare,o=o!==null?o:bo,o(T,c)&&n.ref===i.ref)return Fi(n,i,f)}return i.flags|=1,n=xr(g,c),n.ref=i.ref,n.return=i,i.child=n}function Gp(n,i,o,c,f){if(n!==null){var g=n.memoizedProps;if(bo(g,c)&&n.ref===i.ref)if(In=!1,i.pendingProps=c=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&(In=!0);else return i.lanes=n.lanes,Fi(n,i,f)}return _u(n,i,o,c,f)}function Wp(n,i,o){var c=i.pendingProps,f=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Ns,Xn),Xn|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Gt(Ns,Xn),Xn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:o,Gt(Ns,Xn),Xn|=c}else g!==null?(c=g.baseLanes|o,i.memoizedState=null):c=o,Gt(Ns,Xn),Xn|=c;return Cn(n,i,f,o),i.child}function Xp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function _u(n,i,o,c,f){var g=Ln(o)?Fr:yn.current;return g=Ms(i,g),Cs(i,f),o=cu(n,i,o,c,g,f),c=uu(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Fi(n,i,f)):(qt&&c&&Xc(i),i.flags|=1,Cn(n,i,o,f),i.child)}function qp(n,i,o,c,f){if(Ln(o)){var g=!0;Fa(i)}else g=!1;if(Cs(i,f),i.stateNode===null)tl(n,i),kp(i,o,c),gu(i,o,c,f),c=!0;else if(n===null){var T=i.stateNode,k=i.memoizedProps;T.props=k;var H=T.context,ne=o.contextType;typeof ne=="object"&&ne!==null?ne=Jn(ne):(ne=Ln(o)?Fr:yn.current,ne=Ms(i,ne));var _e=o.getDerivedStateFromProps,Se=typeof _e=="function"||typeof T.getSnapshotBeforeUpdate=="function";Se||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==c||H!==ne)&&Up(i,T,c,ne),dr=!1;var ve=i.memoizedState;T.state=ve,Xa(i,c,T,f),H=i.memoizedState,k!==c||ve!==H||Nn.current||dr?(typeof _e=="function"&&(mu(i,o,_e,c),H=i.memoizedState),(k=dr||Ip(i,o,k,c,ve,H,ne))?(Se||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),T.props=c,T.state=H,T.context=ne,c=k):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,cp(n,i),k=i.memoizedProps,ne=i.type===i.elementType?k:di(i.type,k),T.props=ne,Se=i.pendingProps,ve=T.context,H=o.contextType,typeof H=="object"&&H!==null?H=Jn(H):(H=Ln(o)?Fr:yn.current,H=Ms(i,H));var Oe=o.getDerivedStateFromProps;(_e=typeof Oe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==Se||ve!==H)&&Up(i,T,c,H),dr=!1,ve=i.memoizedState,T.state=ve,Xa(i,c,T,f);var Ge=i.memoizedState;k!==Se||ve!==Ge||Nn.current||dr?(typeof Oe=="function"&&(mu(i,o,Oe,c),Ge=i.memoizedState),(ne=dr||Ip(i,o,ne,c,ve,Ge,H)||!1)?(_e||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Ge,H),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Ge,H)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ge),T.props=c,T.state=Ge,T.context=H,c=ne):(typeof T.componentDidUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),c=!1)}return yu(n,i,o,c,g,f)}function yu(n,i,o,c,f,g){Xp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return f&&Qh(i,o,!1),Fi(n,i,g);c=i.stateNode,lx.current=i;var k=T&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Ts(i,n.child,null,g),i.child=Ts(i,null,k,g)):Cn(n,i,k,g),i.memoizedState=c.state,f&&Qh(i,o,!0),i.child}function Yp(n){var i=n.stateNode;i.pendingContext?Kh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Kh(n,i.context,!1),iu(n,i.containerInfo)}function $p(n,i,o,c,f){return ws(),Kc(f),i.flags|=256,Cn(n,i,o,c),i.child}var Su={dehydrated:null,treeContext:null,retryLane:0};function Mu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Kp(n,i,o){var c=i.pendingProps,f=Yt.current,g=!1,T=(i.flags&128)!==0,k;if((k=T)||(k=n!==null&&n.memoizedState===null?!1:(f&2)!==0),k?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Gt(Yt,f&1),n===null)return $c(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,g?(c=i.mode,g=i.child,T={mode:"hidden",children:T},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=T):g=hl(T,c,0,null),n=qr(n,c,o,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Mu(o),i.memoizedState=Su,n):Eu(i,T));if(f=n.memoizedState,f!==null&&(k=f.dehydrated,k!==null))return cx(n,i,T,c,k,f,o);if(g){g=c.fallback,T=i.mode,f=n.child,k=f.sibling;var H={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=xr(f,H),c.subtreeFlags=f.subtreeFlags&14680064),k!==null?g=xr(k,g):(g=qr(g,T,o,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,T=n.child.memoizedState,T=T===null?Mu(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},g.memoizedState=T,g.childLanes=n.childLanes&~o,i.memoizedState=Su,c}return g=n.child,n=g.sibling,c=xr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function Eu(n,i){return i=hl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function el(n,i,o,c){return c!==null&&Kc(c),Ts(i,n.child,null,o),n=Eu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function cx(n,i,o,c,f,g,T){if(o)return i.flags&256?(i.flags&=-257,c=vu(Error(t(422))),el(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,f=i.mode,c=hl({mode:"visible",children:c.children},f,0,null),g=qr(g,f,T,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Ts(i,n.child,null,T),i.child.memoizedState=Mu(T),i.memoizedState=Su,g);if((i.mode&1)===0)return el(n,i,T,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var k=c.dgst;return c=k,g=Error(t(419)),c=vu(g,c,void 0),el(n,i,T,c)}if(k=(T&n.childLanes)!==0,In||k){if(c=fn,c!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|T))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,ki(n,f),pi(c,n,f,-1))}return zu(),c=vu(Error(t(421))),el(n,i,T,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=Mx.bind(null,n),f._reactRetry=i,null):(n=g.treeContext,Wn=ar(f.nextSibling),Gn=i,qt=!0,ui=null,n!==null&&(Zn[Qn++]=Li,Zn[Qn++]=Ii,Zn[Qn++]=Or,Li=n.id,Ii=n.overflow,Or=i),i=Eu(i,c.children),i.flags|=4096,i)}function Zp(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),eu(n.return,i,o)}function bu(n,i,o,c,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=f)}function Qp(n,i,o){var c=i.pendingProps,f=c.revealOrder,g=c.tail;if(Cn(n,i,c.children,o),c=Yt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Zp(n,o,i);else if(n.tag===19)Zp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Gt(Yt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&qa(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),bu(i,!1,f,o,g);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&qa(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}bu(i,!0,o,null,g);break;case"together":bu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function tl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Fi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),jr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=xr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=xr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function ux(n,i,o){switch(i.tag){case 3:Yp(i),ws();break;case 5:fp(i);break;case 1:Ln(i.type)&&Fa(i);break;case 4:iu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Gt(ja,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Gt(Yt,Yt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Kp(n,i,o):(Gt(Yt,Yt.current&1),n=Fi(n,i,o),n!==null?n.sibling:null);Gt(Yt,Yt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Qp(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Gt(Yt,Yt.current),c)break;return null;case 22:case 23:return i.lanes=0,Wp(n,i,o)}return Fi(n,i,o)}var Jp,wu,em,tm;Jp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},wu=function(){},em=function(n,i,o,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Hr(Ei.current);var g=null;switch(o){case"input":f=It(n,f),c=It(n,c),g=[];break;case"select":f=ue({},f,{value:void 0}),c=ue({},c,{value:void 0}),g=[];break;case"textarea":f=it(n,f),c=it(n,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ia)}Ke(o,c);var T;o=null;for(ne in f)if(!c.hasOwnProperty(ne)&&f.hasOwnProperty(ne)&&f[ne]!=null)if(ne==="style"){var k=f[ne];for(T in k)k.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?g||(g=[]):(g=g||[]).push(ne,null));for(ne in c){var H=c[ne];if(k=f?.[ne],c.hasOwnProperty(ne)&&H!==k&&(H!=null||k!=null))if(ne==="style")if(k){for(T in k)!k.hasOwnProperty(T)||H&&H.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in H)H.hasOwnProperty(T)&&k[T]!==H[T]&&(o||(o={}),o[T]=H[T])}else o||(g||(g=[]),g.push(ne,o)),o=H;else ne==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,k=k?k.__html:void 0,H!=null&&k!==H&&(g=g||[]).push(ne,H)):ne==="children"?typeof H!="string"&&typeof H!="number"||(g=g||[]).push(ne,""+H):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(H!=null&&ne==="onScroll"&&Wt("scroll",n),g||k===H||(g=[])):(g=g||[]).push(ne,H))}o&&(g=g||[]).push("style",o);var ne=g;(i.updateQueue=ne)&&(i.flags|=4)}},tm=function(n,i,o,c){o!==c&&(i.flags|=4)};function zo(n,i){if(!qt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function dx(n,i,o){var c=i.pendingProps;switch(qc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(i),null;case 1:return Ln(i.type)&&Ua(),Mn(i),null;case 3:return c=i.stateNode,Rs(),Xt(Nn),Xt(yn),ou(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ha(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ui!==null&&(Uu(ui),ui=null))),wu(n,i),Mn(i),null;case 5:ru(i);var f=Hr(Io.current);if(o=i.type,n!==null&&i.stateNode!=null)em(n,i,o,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Mn(i),null}if(n=Hr(Ei.current),Ha(i)){c=i.stateNode,o=i.type;var g=i.memoizedProps;switch(c[Mi]=i,c[Ro]=g,n=(i.mode&1)!==0,o){case"dialog":Wt("cancel",c),Wt("close",c);break;case"iframe":case"object":case"embed":Wt("load",c);break;case"video":case"audio":for(f=0;f<To.length;f++)Wt(To[f],c);break;case"source":Wt("error",c);break;case"img":case"image":case"link":Wt("error",c),Wt("load",c);break;case"details":Wt("toggle",c);break;case"input":ut(c,g),Wt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Wt("invalid",c);break;case"textarea":E(c,g),Wt("invalid",c)}Ke(o,g),f=null;for(var T in g)if(g.hasOwnProperty(T)){var k=g[T];T==="children"?typeof k=="string"?c.textContent!==k&&(g.suppressHydrationWarning!==!0&&La(c.textContent,k,n),f=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(g.suppressHydrationWarning!==!0&&La(c.textContent,k,n),f=["children",""+k]):a.hasOwnProperty(T)&&k!=null&&T==="onScroll"&&Wt("scroll",c)}switch(o){case"input":mt(c),At(c,g,!0);break;case"textarea":mt(c),G(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Ia)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ee(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(o,{is:c.is}):(n=T.createElement(o),o==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,o),n[Mi]=i,n[Ro]=c,Jp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Pe(o,c),o){case"dialog":Wt("cancel",n),Wt("close",n),f=c;break;case"iframe":case"object":case"embed":Wt("load",n),f=c;break;case"video":case"audio":for(f=0;f<To.length;f++)Wt(To[f],n);f=c;break;case"source":Wt("error",n),f=c;break;case"img":case"image":case"link":Wt("error",n),Wt("load",n),f=c;break;case"details":Wt("toggle",n),f=c;break;case"input":ut(n,c),f=It(n,c),Wt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=ue({},c,{value:void 0}),Wt("invalid",n);break;case"textarea":E(n,c),f=it(n,c),Wt("invalid",n);break;default:f=c}Ke(o,f),k=f;for(g in k)if(k.hasOwnProperty(g)){var H=k[g];g==="style"?Ie(n,H):g==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&qe(n,H)):g==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&ye(n,H):typeof H=="number"&&ye(n,""+H):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?H!=null&&g==="onScroll"&&Wt("scroll",n):H!=null&&N(n,g,H,T))}switch(o){case"input":mt(n),At(n,c,!1);break;case"textarea":mt(n),G(n);break;case"option":c.value!=null&&n.setAttribute("value",""+xe(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Ot(n,!!c.multiple,g,!1):c.defaultValue!=null&&Ot(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Ia)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mn(i),null;case 6:if(n&&i.stateNode!=null)tm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Hr(Io.current),Hr(Ei.current),Ha(i)){if(c=i.stateNode,o=i.memoizedProps,c[Mi]=i,(g=c.nodeValue!==o)&&(n=Gn,n!==null))switch(n.tag){case 3:La(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&La(c.nodeValue,o,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Mi]=i,i.stateNode=c}return Mn(i),null;case 13:if(Xt(Yt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(qt&&Wn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)rp(),ws(),i.flags|=98560,g=!1;else if(g=Ha(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Mi]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mn(i),g=!1}else ui!==null&&(Uu(ui),ui=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Yt.current&1)!==0?an===0&&(an=3):zu())),i.updateQueue!==null&&(i.flags|=4),Mn(i),null);case 4:return Rs(),wu(n,i),n===null&&Ao(i.stateNode.containerInfo),Mn(i),null;case 10:return Jc(i.type._context),Mn(i),null;case 17:return Ln(i.type)&&Ua(),Mn(i),null;case 19:if(Xt(Yt),g=i.memoizedState,g===null)return Mn(i),null;if(c=(i.flags&128)!==0,T=g.rendering,T===null)if(c)zo(g,!1);else{if(an!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=qa(n),T!==null){for(i.flags|=128,zo(g,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)g=o,n=c,g.flags&=14680066,T=g.alternate,T===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=T.childLanes,g.lanes=T.lanes,g.child=T.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=T.memoizedProps,g.memoizedState=T.memoizedState,g.updateQueue=T.updateQueue,g.type=T.type,n=T.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Gt(Yt,Yt.current&1|2),i.child}n=n.sibling}g.tail!==null&&q()>Ls&&(i.flags|=128,c=!0,zo(g,!1),i.lanes=4194304)}else{if(!c)if(n=qa(T),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),zo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!T.alternate&&!qt)return Mn(i),null}else 2*q()-g.renderingStartTime>Ls&&o!==1073741824&&(i.flags|=128,c=!0,zo(g,!1),i.lanes=4194304);g.isBackwards?(T.sibling=i.child,i.child=T):(o=g.last,o!==null?o.sibling=T:i.child=T,g.last=T)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=q(),i.sibling=null,o=Yt.current,Gt(Yt,c?o&1|2:o&1),i):(Mn(i),null);case 22:case 23:return Ou(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Xn&1073741824)!==0&&(Mn(i),i.subtreeFlags&6&&(i.flags|=8192)):Mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function fx(n,i){switch(qc(i),i.tag){case 1:return Ln(i.type)&&Ua(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Rs(),Xt(Nn),Xt(yn),ou(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ru(i),null;case 13:if(Xt(Yt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ws()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Xt(Yt),null;case 4:return Rs(),null;case 10:return Jc(i.type._context),null;case 22:case 23:return Ou(),null;case 24:return null;default:return null}}var nl=!1,En=!1,hx=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Ds(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Kt(n,i,c)}else o.current=null}function Tu(n,i,o){try{o()}catch(c){Kt(n,i,c)}}var nm=!1;function px(n,i){if(Oc=Ma,n=Ih(),Pc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var T=0,k=-1,H=-1,ne=0,_e=0,Se=n,ve=null;t:for(;;){for(var Oe;Se!==o||f!==0&&Se.nodeType!==3||(k=T+f),Se!==g||c!==0&&Se.nodeType!==3||(H=T+c),Se.nodeType===3&&(T+=Se.nodeValue.length),(Oe=Se.firstChild)!==null;)ve=Se,Se=Oe;for(;;){if(Se===n)break t;if(ve===o&&++ne===f&&(k=T),ve===g&&++_e===c&&(H=T),(Oe=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Oe}o=k===-1||H===-1?null:{start:k,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(zc={focusedElem:n,selectionRange:o},Ma=!1,Be=i;Be!==null;)if(i=Be,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Be=n;else for(;Be!==null;){i=Be;try{var Ge=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var $e=Ge.memoizedProps,Jt=Ge.memoizedState,$=i.stateNode,X=$.getSnapshotBeforeUpdate(i.elementType===i.type?$e:di(i.type,$e),Jt);$.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Kt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Be=n;break}Be=i.return}return Ge=nm,nm=!1,Ge}function Bo(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&Tu(i,o,g)}f=f.next}while(f!==c)}}function il(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function Au(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function im(n){var i=n.alternate;i!==null&&(n.alternate=null,im(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Mi],delete i[Ro],delete i[jc],delete i[Kv],delete i[Zv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function rm(n){return n.tag===5||n.tag===3||n.tag===4}function sm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||rm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Cu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ia));else if(c!==4&&(n=n.child,n!==null))for(Cu(n,i,o),n=n.sibling;n!==null;)Cu(n,i,o),n=n.sibling}function Ru(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ru(n,i,o),n=n.sibling;n!==null;)Ru(n,i,o),n=n.sibling}var mn=null,fi=!1;function hr(n,i,o){for(o=o.child;o!==null;)om(n,i,o),o=o.sibling}function om(n,i,o){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Je,o)}catch{}switch(o.tag){case 5:En||Ds(o,i);case 6:var c=mn,f=fi;mn=null,hr(n,i,o),mn=c,fi=f,mn!==null&&(fi?(n=mn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):mn.removeChild(o.stateNode));break;case 18:mn!==null&&(fi?(n=mn,o=o.stateNode,n.nodeType===8?Vc(n.parentNode,o):n.nodeType===1&&Vc(n,o),xo(n)):Vc(mn,o.stateNode));break;case 4:c=mn,f=fi,mn=o.stateNode.containerInfo,fi=!0,hr(n,i,o),mn=c,fi=f;break;case 0:case 11:case 14:case 15:if(!En&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,T=g.destroy;g=g.tag,T!==void 0&&((g&2)!==0||(g&4)!==0)&&Tu(o,i,T),f=f.next}while(f!==c)}hr(n,i,o);break;case 1:if(!En&&(Ds(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(k){Kt(o,i,k)}hr(n,i,o);break;case 21:hr(n,i,o);break;case 22:o.mode&1?(En=(c=En)||o.memoizedState!==null,hr(n,i,o),En=c):hr(n,i,o);break;default:hr(n,i,o)}}function am(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new hx),i.forEach(function(c){var f=Ex.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}}function hi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var g=n,T=i,k=T;e:for(;k!==null;){switch(k.tag){case 5:mn=k.stateNode,fi=!1;break e;case 3:mn=k.stateNode.containerInfo,fi=!0;break e;case 4:mn=k.stateNode.containerInfo,fi=!0;break e}k=k.return}if(mn===null)throw Error(t(160));om(g,T,f),mn=null,fi=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(ne){Kt(f,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)lm(i,n),i=i.sibling}function lm(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(hi(i,n),wi(n),c&4){try{Bo(3,n,n.return),il(3,n)}catch($e){Kt(n,n.return,$e)}try{Bo(5,n,n.return)}catch($e){Kt(n,n.return,$e)}}break;case 1:hi(i,n),wi(n),c&512&&o!==null&&Ds(o,o.return);break;case 5:if(hi(i,n),wi(n),c&512&&o!==null&&Ds(o,o.return),n.flags&32){var f=n.stateNode;try{ye(f,"")}catch($e){Kt(n,n.return,$e)}}if(c&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,T=o!==null?o.memoizedProps:g,k=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{k==="input"&&g.type==="radio"&&g.name!=null&&nt(f,g),Pe(k,T);var ne=Pe(k,g);for(T=0;T<H.length;T+=2){var _e=H[T],Se=H[T+1];_e==="style"?Ie(f,Se):_e==="dangerouslySetInnerHTML"?qe(f,Se):_e==="children"?ye(f,Se):N(f,_e,Se,ne)}switch(k){case"input":He(f,g);break;case"textarea":b(f,g);break;case"select":var ve=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var Oe=g.value;Oe!=null?Ot(f,!!g.multiple,Oe,!1):ve!==!!g.multiple&&(g.defaultValue!=null?Ot(f,!!g.multiple,g.defaultValue,!0):Ot(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ro]=g}catch($e){Kt(n,n.return,$e)}}break;case 6:if(hi(i,n),wi(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch($e){Kt(n,n.return,$e)}}break;case 3:if(hi(i,n),wi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{xo(i.containerInfo)}catch($e){Kt(n,n.return,$e)}break;case 4:hi(i,n),wi(n);break;case 13:hi(i,n),wi(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Nu=q())),c&4&&am(n);break;case 22:if(_e=o!==null&&o.memoizedState!==null,n.mode&1?(En=(ne=En)||_e,hi(i,n),En=ne):hi(i,n),wi(n),c&8192){if(ne=n.memoizedState!==null,(n.stateNode.isHidden=ne)&&!_e&&(n.mode&1)!==0)for(Be=n,_e=n.child;_e!==null;){for(Se=Be=_e;Be!==null;){switch(ve=Be,Oe=ve.child,ve.tag){case 0:case 11:case 14:case 15:Bo(4,ve,ve.return);break;case 1:Ds(ve,ve.return);var Ge=ve.stateNode;if(typeof Ge.componentWillUnmount=="function"){c=ve,o=ve.return;try{i=c,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch($e){Kt(c,o,$e)}}break;case 5:Ds(ve,ve.return);break;case 22:if(ve.memoizedState!==null){dm(Se);continue}}Oe!==null?(Oe.return=ve,Be=Oe):dm(Se)}_e=_e.sibling}e:for(_e=null,Se=n;;){if(Se.tag===5){if(_e===null){_e=Se;try{f=Se.stateNode,ne?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(k=Se.stateNode,H=Se.memoizedProps.style,T=H!=null&&H.hasOwnProperty("display")?H.display:null,k.style.display=we("display",T))}catch($e){Kt(n,n.return,$e)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=ne?"":Se.memoizedProps}catch($e){Kt(n,n.return,$e)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:hi(i,n),wi(n),c&4&&am(n);break;case 21:break;default:hi(i,n),wi(n)}}function wi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(rm(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(ye(f,""),c.flags&=-33);var g=sm(n);Ru(n,g,f);break;case 3:case 4:var T=c.stateNode.containerInfo,k=sm(n);Cu(n,k,T);break;default:throw Error(t(161))}}catch(H){Kt(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function mx(n,i,o){Be=n,cm(n)}function cm(n,i,o){for(var c=(n.mode&1)!==0;Be!==null;){var f=Be,g=f.child;if(f.tag===22&&c){var T=f.memoizedState!==null||nl;if(!T){var k=f.alternate,H=k!==null&&k.memoizedState!==null||En;k=nl;var ne=En;if(nl=T,(En=H)&&!ne)for(Be=f;Be!==null;)T=Be,H=T.child,T.tag===22&&T.memoizedState!==null?fm(f):H!==null?(H.return=T,Be=H):fm(f);for(;g!==null;)Be=g,cm(g),g=g.sibling;Be=f,nl=k,En=ne}um(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,Be=g):um(n)}}function um(n){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:En||il(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!En)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:di(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&dp(i,g,c);break;case 3:var T=i.updateQueue;if(T!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}dp(i,T,o)}break;case 5:var k=i.stateNode;if(o===null&&i.flags&4){o=k;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var _e=ne.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&xo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}En||i.flags&512&&Au(i)}catch(ve){Kt(i,i.return,ve)}}if(i===n){Be=null;break}if(o=i.sibling,o!==null){o.return=i.return,Be=o;break}Be=i.return}}function dm(n){for(;Be!==null;){var i=Be;if(i===n){Be=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Be=o;break}Be=i.return}}function fm(n){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{il(4,i)}catch(H){Kt(i,o,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(H){Kt(i,f,H)}}var g=i.return;try{Au(i)}catch(H){Kt(i,g,H)}break;case 5:var T=i.return;try{Au(i)}catch(H){Kt(i,T,H)}}}catch(H){Kt(i,i.return,H)}if(i===n){Be=null;break}var k=i.sibling;if(k!==null){k.return=i.return,Be=k;break}Be=i.return}}var gx=Math.ceil,rl=P.ReactCurrentDispatcher,Pu=P.ReactCurrentOwner,ti=P.ReactCurrentBatchConfig,Pt=0,fn=null,tn=null,gn=0,Xn=0,Ns=lr(0),an=0,Ho=null,jr=0,sl=0,Du=0,Vo=null,kn=null,Nu=0,Ls=1/0,Oi=null,ol=!1,Lu=null,pr=null,al=!1,mr=null,ll=0,jo=0,Iu=null,cl=-1,ul=0;function Rn(){return(Pt&6)!==0?q():cl!==-1?cl:cl=q()}function gr(n){return(n.mode&1)===0?1:(Pt&2)!==0&&gn!==0?gn&-gn:Jv.transition!==null?(ul===0&&(ul=An()),ul):(n=Et,n!==0||(n=window.event,n=n===void 0?16:ph(n.type)),n)}function pi(n,i,o,c){if(50<jo)throw jo=0,Iu=null,Error(t(185));Qt(n,o,c),((Pt&2)===0||n!==fn)&&(n===fn&&((Pt&2)===0&&(sl|=o),an===4&&vr(n,gn)),Un(n,c),o===1&&Pt===0&&(i.mode&1)===0&&(Ls=q()+500,Oa&&ur()))}function Un(n,i){var o=n.callbackNode;Ir(n,i);var c=li(n,n===fn?gn:0);if(c===0)o!==null&&Y(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&Y(o),i===1)n.tag===0?Qv(pm.bind(null,n)):Jh(pm.bind(null,n)),Yv(function(){(Pt&6)===0&&ur()}),o=null;else{switch(oh(c)){case 1:o=Ne;break;case 4:o=je;break;case 16:o=Fe;break;case 536870912:o=lt;break;default:o=Fe}o=Mm(o,hm.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function hm(n,i){if(cl=-1,ul=0,(Pt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Is()&&n.callbackNode!==o)return null;var c=li(n,n===fn?gn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=dl(n,c);else{i=c;var f=Pt;Pt|=2;var g=gm();(fn!==n||gn!==i)&&(Oi=null,Ls=q()+500,Wr(n,i));do try{_x();break}catch(k){mm(n,k)}while(!0);Qc(),rl.current=g,Pt=f,tn!==null?i=0:(fn=null,gn=0,i=an)}if(i!==0){if(i===2&&(f=Vt(n),f!==0&&(c=f,i=ku(n,f))),i===1)throw o=Ho,Wr(n,0),vr(n,c),Un(n,q()),o;if(i===6)vr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!vx(f)&&(i=dl(n,c),i===2&&(g=Vt(n),g!==0&&(c=g,i=ku(n,g))),i===1))throw o=Ho,Wr(n,0),vr(n,c),Un(n,q()),o;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Xr(n,kn,Oi);break;case 3:if(vr(n,c),(c&130023424)===c&&(i=Nu+500-q(),10<i)){if(li(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Rn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Hc(Xr.bind(null,n,kn,Oi),i);break}Xr(n,kn,Oi);break;case 4:if(vr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var T=31-Rt(c);g=1<<T,T=i[T],T>f&&(f=T),c&=~g}if(c=f,c=q()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*gx(c/1960))-c,10<c){n.timeoutHandle=Hc(Xr.bind(null,n,kn,Oi),c);break}Xr(n,kn,Oi);break;case 5:Xr(n,kn,Oi);break;default:throw Error(t(329))}}}return Un(n,q()),n.callbackNode===o?hm.bind(null,n):null}function ku(n,i){var o=Vo;return n.current.memoizedState.isDehydrated&&(Wr(n,i).flags|=256),n=dl(n,i),n!==2&&(i=kn,kn=o,i!==null&&Uu(i)),n}function Uu(n){kn===null?kn=n:kn.push.apply(kn,n)}function vx(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],g=f.getSnapshot;f=f.value;try{if(!ci(g(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function vr(n,i){for(i&=~Du,i&=~sl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Rt(i),c=1<<o;n[o]=-1,i&=~c}}function pm(n){if((Pt&6)!==0)throw Error(t(327));Is();var i=li(n,0);if((i&1)===0)return Un(n,q()),null;var o=dl(n,i);if(n.tag!==0&&o===2){var c=Vt(n);c!==0&&(i=c,o=ku(n,c))}if(o===1)throw o=Ho,Wr(n,0),vr(n,i),Un(n,q()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Xr(n,kn,Oi),Un(n,q()),null}function Fu(n,i){var o=Pt;Pt|=1;try{return n(i)}finally{Pt=o,Pt===0&&(Ls=q()+500,Oa&&ur())}}function Gr(n){mr!==null&&mr.tag===0&&(Pt&6)===0&&Is();var i=Pt;Pt|=1;var o=ti.transition,c=Et;try{if(ti.transition=null,Et=1,n)return n()}finally{Et=c,ti.transition=o,Pt=i,(Pt&6)===0&&ur()}}function Ou(){Xn=Ns.current,Xt(Ns)}function Wr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,qv(o)),tn!==null)for(o=tn.return;o!==null;){var c=o;switch(qc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ua();break;case 3:Rs(),Xt(Nn),Xt(yn),ou();break;case 5:ru(c);break;case 4:Rs();break;case 13:Xt(Yt);break;case 19:Xt(Yt);break;case 10:Jc(c.type._context);break;case 22:case 23:Ou()}o=o.return}if(fn=n,tn=n=xr(n.current,null),gn=Xn=i,an=0,Ho=null,Du=sl=jr=0,kn=Vo=null,Br!==null){for(i=0;i<Br.length;i++)if(o=Br[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,g=o.pending;if(g!==null){var T=g.next;g.next=f,c.next=T}o.pending=c}Br=null}return n}function mm(n,i){do{var o=tn;try{if(Qc(),Ya.current=Qa,$a){for(var c=$t.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}$a=!1}if(Vr=0,dn=on=$t=null,ko=!1,Uo=0,Pu.current=null,o===null||o.return===null){an=1,Ho=i,tn=null;break}e:{var g=n,T=o.return,k=o,H=i;if(i=gn,k.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ne=H,_e=k,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Oe=Bp(T);if(Oe!==null){Oe.flags&=-257,Hp(Oe,T,k,g,i),Oe.mode&1&&zp(g,ne,i),i=Oe,H=ne;var Ge=i.updateQueue;if(Ge===null){var $e=new Set;$e.add(H),i.updateQueue=$e}else Ge.add(H);break e}else{if((i&1)===0){zp(g,ne,i),zu();break e}H=Error(t(426))}}else if(qt&&k.mode&1){var Jt=Bp(T);if(Jt!==null){(Jt.flags&65536)===0&&(Jt.flags|=256),Hp(Jt,T,k,g,i),Kc(Ps(H,k));break e}}g=H=Ps(H,k),an!==4&&(an=2),Vo===null?Vo=[g]:Vo.push(g),g=T;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var $=Fp(g,H,i);up(g,$);break e;case 1:k=H;var X=g.type,K=g.stateNode;if((g.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(pr===null||!pr.has(K)))){g.flags|=65536,i&=-i,g.lanes|=i;var Te=Op(g,k,i);up(g,Te);break e}}g=g.return}while(g!==null)}xm(o)}catch(Ze){i=Ze,tn===o&&o!==null&&(tn=o=o.return);continue}break}while(!0)}function gm(){var n=rl.current;return rl.current=Qa,n===null?Qa:n}function zu(){(an===0||an===3||an===2)&&(an=4),fn===null||(jr&268435455)===0&&(sl&268435455)===0||vr(fn,gn)}function dl(n,i){var o=Pt;Pt|=2;var c=gm();(fn!==n||gn!==i)&&(Oi=null,Wr(n,i));do try{xx();break}catch(f){mm(n,f)}while(!0);if(Qc(),Pt=o,rl.current=c,tn!==null)throw Error(t(261));return fn=null,gn=0,an}function xx(){for(;tn!==null;)vm(tn)}function _x(){for(;tn!==null&&!ae();)vm(tn)}function vm(n){var i=Sm(n.alternate,n,Xn);n.memoizedProps=n.pendingProps,i===null?xm(n):tn=i,Pu.current=null}function xm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=dx(o,i,Xn),o!==null){tn=o;return}}else{if(o=fx(o,i),o!==null){o.flags&=32767,tn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{an=6,tn=null;return}}if(i=i.sibling,i!==null){tn=i;return}tn=i=n}while(i!==null);an===0&&(an=5)}function Xr(n,i,o){var c=Et,f=ti.transition;try{ti.transition=null,Et=1,yx(n,i,o,c)}finally{ti.transition=f,Et=c}return null}function yx(n,i,o,c){do Is();while(mr!==null);if((Pt&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(_n(n,g),n===fn&&(tn=fn=null,gn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||al||(al=!0,Mm(Fe,function(){return Is(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=ti.transition,ti.transition=null;var T=Et;Et=1;var k=Pt;Pt|=4,Pu.current=null,px(n,o),lm(o,n),Bv(zc),Ma=!!Oc,zc=Oc=null,n.current=o,mx(o),ce(),Pt=k,Et=T,ti.transition=g}else n.current=o;if(al&&(al=!1,mr=n,ll=f),g=n.pendingLanes,g===0&&(pr=null),kt(o.stateNode),Un(n,q()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(ol)throw ol=!1,n=Lu,Lu=null,n;return(ll&1)!==0&&n.tag!==0&&Is(),g=n.pendingLanes,(g&1)!==0?n===Iu?jo++:(jo=0,Iu=n):jo=0,ur(),null}function Is(){if(mr!==null){var n=oh(ll),i=ti.transition,o=Et;try{if(ti.transition=null,Et=16>n?16:n,mr===null)var c=!1;else{if(n=mr,mr=null,ll=0,(Pt&6)!==0)throw Error(t(331));var f=Pt;for(Pt|=4,Be=n.current;Be!==null;){var g=Be,T=g.child;if((Be.flags&16)!==0){var k=g.deletions;if(k!==null){for(var H=0;H<k.length;H++){var ne=k[H];for(Be=ne;Be!==null;){var _e=Be;switch(_e.tag){case 0:case 11:case 15:Bo(8,_e,g)}var Se=_e.child;if(Se!==null)Se.return=_e,Be=Se;else for(;Be!==null;){_e=Be;var ve=_e.sibling,Oe=_e.return;if(im(_e),_e===ne){Be=null;break}if(ve!==null){ve.return=Oe,Be=ve;break}Be=Oe}}}var Ge=g.alternate;if(Ge!==null){var $e=Ge.child;if($e!==null){Ge.child=null;do{var Jt=$e.sibling;$e.sibling=null,$e=Jt}while($e!==null)}}Be=g}}if((g.subtreeFlags&2064)!==0&&T!==null)T.return=g,Be=T;else e:for(;Be!==null;){if(g=Be,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Bo(9,g,g.return)}var $=g.sibling;if($!==null){$.return=g.return,Be=$;break e}Be=g.return}}var X=n.current;for(Be=X;Be!==null;){T=Be;var K=T.child;if((T.subtreeFlags&2064)!==0&&K!==null)K.return=T,Be=K;else e:for(T=X;Be!==null;){if(k=Be,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:il(9,k)}}catch(Ze){Kt(k,k.return,Ze)}if(k===T){Be=null;break e}var Te=k.sibling;if(Te!==null){Te.return=k.return,Be=Te;break e}Be=k.return}}if(Pt=f,ur(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Je,n)}catch{}c=!0}return c}finally{Et=o,ti.transition=i}}return!1}function _m(n,i,o){i=Ps(o,i),i=Fp(n,i,1),n=fr(n,i,1),i=Rn(),n!==null&&(Qt(n,1,i),Un(n,i))}function Kt(n,i,o){if(n.tag===3)_m(n,n,o);else for(;i!==null;){if(i.tag===3){_m(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(pr===null||!pr.has(c))){n=Ps(o,n),n=Op(i,n,1),i=fr(i,n,1),n=Rn(),i!==null&&(Qt(i,1,n),Un(i,n));break}}i=i.return}}function Sx(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Rn(),n.pingedLanes|=n.suspendedLanes&o,fn===n&&(gn&o)===o&&(an===4||an===3&&(gn&130023424)===gn&&500>q()-Nu?Wr(n,0):Du|=o),Un(n,i)}function ym(n,i){i===0&&((n.mode&1)===0?i=1:(i=Mt,Mt<<=1,(Mt&130023424)===0&&(Mt=4194304)));var o=Rn();n=ki(n,i),n!==null&&(Qt(n,i,o),Un(n,o))}function Mx(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),ym(n,o)}function Ex(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),ym(n,o)}var Sm;Sm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Nn.current)In=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return In=!1,ux(n,i,o);In=(n.flags&131072)!==0}else In=!1,qt&&(i.flags&1048576)!==0&&ep(i,Ba,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;tl(n,i),n=i.pendingProps;var f=Ms(i,yn.current);Cs(i,o),f=cu(null,i,c,n,f,o);var g=uu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(c)?(g=!0,Fa(i)):g=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,nu(i),f.updater=Ja,i.stateNode=f,f._reactInternals=i,gu(i,c,n,o),i=yu(null,i,c,!0,g,o)):(i.tag=0,qt&&g&&Xc(i),Cn(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch(tl(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=wx(c),n=di(c,n),f){case 0:i=_u(null,i,c,n,o);break e;case 1:i=qp(null,i,c,n,o);break e;case 11:i=Vp(null,i,c,n,o);break e;case 14:i=jp(null,i,c,di(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:di(c,f),_u(n,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:di(c,f),qp(n,i,c,f,o);case 3:e:{if(Yp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,f=g.element,cp(n,i),Xa(i,c,null,o);var T=i.memoizedState;if(c=T.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){f=Ps(Error(t(423)),i),i=$p(n,i,c,o,f);break e}else if(c!==f){f=Ps(Error(t(424)),i),i=$p(n,i,c,o,f);break e}else for(Wn=ar(i.stateNode.containerInfo.firstChild),Gn=i,qt=!0,ui=null,o=ap(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ws(),c===f){i=Fi(n,i,o);break e}Cn(n,i,c,o)}i=i.child}return i;case 5:return fp(i),n===null&&$c(i),c=i.type,f=i.pendingProps,g=n!==null?n.memoizedProps:null,T=f.children,Bc(c,f)?T=null:g!==null&&Bc(c,g)&&(i.flags|=32),Xp(n,i),Cn(n,i,T,o),i.child;case 6:return n===null&&$c(i),null;case 13:return Kp(n,i,o);case 4:return iu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ts(i,null,c,o):Cn(n,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:di(c,f),Vp(n,i,c,f,o);case 7:return Cn(n,i,i.pendingProps,o),i.child;case 8:return Cn(n,i,i.pendingProps.children,o),i.child;case 12:return Cn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,g=i.memoizedProps,T=f.value,Gt(ja,c._currentValue),c._currentValue=T,g!==null)if(ci(g.value,T)){if(g.children===f.children&&!Nn.current){i=Fi(n,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var k=g.dependencies;if(k!==null){T=g.child;for(var H=k.firstContext;H!==null;){if(H.context===c){if(g.tag===1){H=Ui(-1,o&-o),H.tag=2;var ne=g.updateQueue;if(ne!==null){ne=ne.shared;var _e=ne.pending;_e===null?H.next=H:(H.next=_e.next,_e.next=H),ne.pending=H}}g.lanes|=o,H=g.alternate,H!==null&&(H.lanes|=o),eu(g.return,o,i),k.lanes|=o;break}H=H.next}}else if(g.tag===10)T=g.type===i.type?null:g.child;else if(g.tag===18){if(T=g.return,T===null)throw Error(t(341));T.lanes|=o,k=T.alternate,k!==null&&(k.lanes|=o),eu(T,o,i),T=g.sibling}else T=g.child;if(T!==null)T.return=g;else for(T=g;T!==null;){if(T===i){T=null;break}if(g=T.sibling,g!==null){g.return=T.return,T=g;break}T=T.return}g=T}Cn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Cs(i,o),f=Jn(f),c=c(f),i.flags|=1,Cn(n,i,c,o),i.child;case 14:return c=i.type,f=di(c,i.pendingProps),f=di(c.type,f),jp(n,i,c,f,o);case 15:return Gp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:di(c,f),tl(n,i),i.tag=1,Ln(c)?(n=!0,Fa(i)):n=!1,Cs(i,o),kp(i,c,f),gu(i,c,f,o),yu(null,i,c,!0,n,o);case 19:return Qp(n,i,o);case 22:return Wp(n,i,o)}throw Error(t(156,i.tag))};function Mm(n,i){return C(n,i)}function bx(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(n,i,o,c){return new bx(n,i,o,c)}function Bu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function wx(n){if(typeof n=="function")return Bu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===fe)return 14}return 2}function xr(n,i){var o=n.alternate;return o===null?(o=ni(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function fl(n,i,o,c,f,g){var T=2;if(c=n,typeof n=="function")Bu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case V:return qr(o.children,f,g,i);case B:T=8,f|=8;break;case D:return n=ni(12,o,i,f|2),n.elementType=D,n.lanes=g,n;case oe:return n=ni(13,o,i,f),n.elementType=oe,n.lanes=g,n;case ie:return n=ni(19,o,i,f),n.elementType=ie,n.lanes=g,n;case pe:return hl(o,f,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:T=10;break e;case j:T=9;break e;case Z:T=11;break e;case fe:T=14;break e;case Q:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ni(T,o,i,f),i.elementType=n,i.type=c,i.lanes=g,i}function qr(n,i,o,c){return n=ni(7,n,c,i),n.lanes=o,n}function hl(n,i,o,c){return n=ni(22,n,c,i),n.elementType=pe,n.lanes=o,n.stateNode={isHidden:!1},n}function Hu(n,i,o){return n=ni(6,n,null,i),n.lanes=o,n}function Vu(n,i,o){return i=ni(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Tx(n,i,o,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xn(0),this.expirationTimes=xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function ju(n,i,o,c,f,g,T,k,H){return n=new Tx(n,i,o,k,H),i===1?(i=1,g===!0&&(i|=8)):i=0,g=ni(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},nu(g),n}function Ax(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function Em(n){if(!n)return cr;n=n._reactInternals;e:{if(Pi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Ln(o))return Zh(n,o,i)}return i}function bm(n,i,o,c,f,g,T,k,H){return n=ju(o,c,!0,n,f,g,T,k,H),n.context=Em(null),o=n.current,c=Rn(),f=gr(o),g=Ui(c,f),g.callback=i??null,fr(o,g,f),n.current.lanes=f,Qt(n,f,c),Un(n,c),n}function pl(n,i,o,c){var f=i.current,g=Rn(),T=gr(f);return o=Em(o),i.context===null?i.context=o:i.pendingContext=o,i=Ui(g,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=fr(f,i,T),n!==null&&(pi(n,f,T,g),Wa(n,f,T)),T}function ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function wm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Gu(n,i){wm(n,i),(n=n.alternate)&&wm(n,i)}function Cx(){return null}var Tm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wu(n){this._internalRoot=n}gl.prototype.render=Wu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));pl(n,i,null,null)},gl.prototype.unmount=Wu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Gr(function(){pl(null,n,null,null)}),i[Di]=null}};function gl(n){this._internalRoot=n}gl.prototype.unstable_scheduleHydration=function(n){if(n){var i=ch();n={blockedOn:null,target:n,priority:i};for(var o=0;o<rr.length&&i!==0&&i<rr[o].priority;o++);rr.splice(o,0,n),o===0&&fh(n)}};function Xu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function vl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Am(){}function Rx(n,i,o,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var ne=ml(T);g.call(ne)}}var T=bm(i,c,n,0,null,!1,!1,"",Am);return n._reactRootContainer=T,n[Di]=T.current,Ao(n.nodeType===8?n.parentNode:n),Gr(),T}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var k=c;c=function(){var ne=ml(H);k.call(ne)}}var H=ju(n,0,!1,null,null,!1,!1,"",Am);return n._reactRootContainer=H,n[Di]=H.current,Ao(n.nodeType===8?n.parentNode:n),Gr(function(){pl(i,H,o,c)}),H}function xl(n,i,o,c,f){var g=o._reactRootContainer;if(g){var T=g;if(typeof f=="function"){var k=f;f=function(){var H=ml(T);k.call(H)}}pl(i,T,n,f)}else T=Rx(o,i,n,f,c);return ml(T)}ah=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=sn(i.pendingLanes);o!==0&&(kr(i,o|1),Un(i,q()),(Pt&6)===0&&(Ls=q()+500,ur()))}break;case 13:Gr(function(){var c=ki(n,1);if(c!==null){var f=Rn();pi(c,n,1,f)}}),Gu(n,1)}},vc=function(n){if(n.tag===13){var i=ki(n,134217728);if(i!==null){var o=Rn();pi(i,n,134217728,o)}Gu(n,134217728)}},lh=function(n){if(n.tag===13){var i=gr(n),o=ki(n,i);if(o!==null){var c=Rn();pi(o,n,i,c)}Gu(n,i)}},ch=function(){return Et},uh=function(n,i){var o=Et;try{return Et=n,i()}finally{Et=o}},Ee=function(n,i,o){switch(i){case"input":if(He(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var f=ka(c);if(!f)throw Error(t(90));jt(c),He(c,f)}}}break;case"textarea":b(n,o);break;case"select":i=o.value,i!=null&&Ot(n,!!o.multiple,i,!1)}},pt=Fu,Ut=Gr;var Px={usingClientEntryPoint:!1,Events:[Po,ys,ka,ge,Ye,Fu]},Go={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dx={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=xa(n),n===null?null:n.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||Cx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{Je=_l.inject(Dx),ft=_l}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Px,Fn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xu(i))throw Error(t(200));return Ax(n,i,null,o)},Fn.createRoot=function(n,i){if(!Xu(n))throw Error(t(299));var o=!1,c="",f=Tm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=ju(n,1,!1,null,null,o,!1,c,f),n[Di]=i.current,Ao(n.nodeType===8?n.parentNode:n),new Wu(i)},Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=xa(i),n=n===null?null:n.stateNode,n},Fn.flushSync=function(n){return Gr(n)},Fn.hydrate=function(n,i,o){if(!vl(i))throw Error(t(200));return xl(null,n,i,!0,o)},Fn.hydrateRoot=function(n,i,o){if(!Xu(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,f=!1,g="",T=Tm;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),i=bm(i,null,n,1,o??null,f,!1,g,T),n[Di]=i.current,Ao(n),c)for(n=0;n<c.length;n++)o=c[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new gl(i)},Fn.render=function(n,i,o){if(!vl(i))throw Error(t(200));return xl(null,n,i,!1,o)},Fn.unmountComponentAtNode=function(n){if(!vl(n))throw Error(t(40));return n._reactRootContainer?(Gr(function(){xl(null,null,n,!1,function(){n._reactRootContainer=null,n[Di]=null})}),!0):!1},Fn.unstable_batchedUpdates=Fu,Fn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!vl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return xl(n,i,o,!1,c)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var km;function zx(){if(km)return $u.exports;km=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),$u.exports=Ox(),$u.exports}var Um;function Bx(){if(Um)return yl;Um=1;var s=zx();return yl.createRoot=s.createRoot,yl.hydrateRoot=s.hydrateRoot,yl}var Hx=Bx(),et=Wf();const Cr=la(et);var Qu={exports:{}},Ju,Fm;function Vx(){if(Fm)return Ju;Fm=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ju=s,Ju}var ed,Om;function jx(){if(Om)return ed;Om=1;var s=Vx();function e(){}function t(){}return t.resetWarningCache=e,ed=function(){function r(u,d,h,m,x,v){if(v!==s){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}r.isRequired=r;function a(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},ed}var zm;function Gx(){return zm||(zm=1,Qu.exports=jx()()),Qu.exports}var Wx=Gx();const wt=la(Wx);var td,Bm;function Xx(){if(Bm)return td;Bm=1;var s=typeof Element<"u",e=typeof Map=="function",t=typeof Set=="function",r=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function a(l,u){if(l===u)return!0;if(l&&u&&typeof l=="object"&&typeof u=="object"){if(l.constructor!==u.constructor)return!1;var d,h,m;if(Array.isArray(l)){if(d=l.length,d!=u.length)return!1;for(h=d;h--!==0;)if(!a(l[h],u[h]))return!1;return!0}var x;if(e&&l instanceof Map&&u instanceof Map){if(l.size!==u.size)return!1;for(x=l.entries();!(h=x.next()).done;)if(!u.has(h.value[0]))return!1;for(x=l.entries();!(h=x.next()).done;)if(!a(h.value[1],u.get(h.value[0])))return!1;return!0}if(t&&l instanceof Set&&u instanceof Set){if(l.size!==u.size)return!1;for(x=l.entries();!(h=x.next()).done;)if(!u.has(h.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(l)&&ArrayBuffer.isView(u)){if(d=l.length,d!=u.length)return!1;for(h=d;h--!==0;)if(l[h]!==u[h])return!1;return!0}if(l.constructor===RegExp)return l.source===u.source&&l.flags===u.flags;if(l.valueOf!==Object.prototype.valueOf&&typeof l.valueOf=="function"&&typeof u.valueOf=="function")return l.valueOf()===u.valueOf();if(l.toString!==Object.prototype.toString&&typeof l.toString=="function"&&typeof u.toString=="function")return l.toString()===u.toString();if(m=Object.keys(l),d=m.length,d!==Object.keys(u).length)return!1;for(h=d;h--!==0;)if(!Object.prototype.hasOwnProperty.call(u,m[h]))return!1;if(s&&l instanceof Element)return!1;for(h=d;h--!==0;)if(!((m[h]==="_owner"||m[h]==="__v"||m[h]==="__o")&&l.$$typeof)&&!a(l[m[h]],u[m[h]]))return!1;return!0}return l!==l&&u!==u}return td=function(u,d){try{return a(u,d)}catch(h){if((h.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw h}},td}var qx=Xx();const Yx=la(qx);var nd,Hm;function $x(){if(Hm)return nd;Hm=1;var s=function(e,t,r,a,l,u,d,h){if(!e){var m;if(t===void 0)m=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var x=[r,a,l,u,d,h],v=0;m=new Error(t.replace(/%s/g,function(){return x[v++]})),m.name="Invariant Violation"}throw m.framesToPop=1,m}};return nd=s,nd}var Kx=$x();const Vm=la(Kx);var id,jm;function Zx(){return jm||(jm=1,id=function(e,t,r,a){var l=r?r.call(a,e,t):void 0;if(l!==void 0)return!!l;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;var u=Object.keys(e),d=Object.keys(t);if(u.length!==d.length)return!1;for(var h=Object.prototype.hasOwnProperty.bind(t),m=0;m<u.length;m++){var x=u[m];if(!h(x))return!1;var v=e[x],y=t[x];if(l=r?r.call(a,v,y,x):void 0,l===!1||l===void 0&&v!==y)return!1}return!0}),id}var Qx=Zx();const Jx=la(Qx);function en(){return en=Object.assign||function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},en.apply(this,arguments)}function Xf(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,qd(s,e)}function qd(s,e){return qd=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t},qd(s,e)}function Gm(s,e){if(s==null)return{};var t,r,a={},l=Object.keys(s);for(r=0;r<l.length;r++)e.indexOf(t=l[r])>=0||(a[t]=s[t]);return a}var ct={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},e_={rel:["amphtml","canonical","alternate"]},t_={type:["application/ld+json"]},n_={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},Wm=Object.keys(ct).map(function(s){return ct[s]}),rc={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},i_=Object.keys(rc).reduce(function(s,e){return s[rc[e]]=e,s},{}),Js=function(s,e){for(var t=s.length-1;t>=0;t-=1){var r=s[t];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},r_=function(s){var e=Js(s,ct.TITLE),t=Js(s,"titleTemplate");if(Array.isArray(e)&&(e=e.join("")),t&&e)return t.replace(/%s/g,function(){return e});var r=Js(s,"defaultTitle");return e||r||void 0},s_=function(s){return Js(s,"onChangeClientState")||function(){}},rd=function(s,e){return e.filter(function(t){return t[s]!==void 0}).map(function(t){return t[s]}).reduce(function(t,r){return en({},t,r)},{})},o_=function(s,e){return e.filter(function(t){return t[ct.BASE]!==void 0}).map(function(t){return t[ct.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var a=Object.keys(r),l=0;l<a.length;l+=1){var u=a[l].toLowerCase();if(s.indexOf(u)!==-1&&r[u])return t.concat(r)}return t},[])},Xo=function(s,e,t){var r={};return t.filter(function(a){return!!Array.isArray(a[s])||(a[s]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+s+' should be of type "Array". Instead found type "'+typeof a[s]+'"'),!1)}).map(function(a){return a[s]}).reverse().reduce(function(a,l){var u={};l.filter(function(v){for(var y,M=Object.keys(v),A=0;A<M.length;A+=1){var w=M[A],S=w.toLowerCase();e.indexOf(S)===-1||y==="rel"&&v[y].toLowerCase()==="canonical"||S==="rel"&&v[S].toLowerCase()==="stylesheet"||(y=S),e.indexOf(w)===-1||w!=="innerHTML"&&w!=="cssText"&&w!=="itemprop"||(y=w)}if(!y||!v[y])return!1;var _=v[y].toLowerCase();return r[y]||(r[y]={}),u[y]||(u[y]={}),!r[y][_]&&(u[y][_]=!0,!0)}).reverse().forEach(function(v){return a.push(v)});for(var d=Object.keys(u),h=0;h<d.length;h+=1){var m=d[h],x=en({},r[m],u[m]);r[m]=x}return a},[]).reverse()},a_=function(s,e){if(Array.isArray(s)&&s.length){for(var t=0;t<s.length;t+=1)if(s[t][e])return!0}return!1},a0=function(s){return Array.isArray(s)?s.join(""):s},sd=function(s,e){return Array.isArray(s)?s.reduce(function(t,r){return(function(a,l){for(var u=Object.keys(a),d=0;d<u.length;d+=1)if(l[u[d]]&&l[u[d]].includes(a[u[d]]))return!0;return!1})(r,e)?t.priority.push(r):t.default.push(r),t},{priority:[],default:[]}):{default:s}},Xm=function(s,e){var t;return en({},s,((t={})[e]=void 0,t))},l_=[ct.NOSCRIPT,ct.SCRIPT,ct.STYLE],od=function(s,e){return e===void 0&&(e=!0),e===!1?String(s):String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},qm=function(s){return Object.keys(s).reduce(function(e,t){var r=s[t]!==void 0?t+'="'+s[t]+'"':""+t;return e?e+" "+r:r},"")},Ym=function(s,e){return e===void 0&&(e={}),Object.keys(s).reduce(function(t,r){return t[rc[r]||r]=s[r],t},e)},Ql=function(s,e){return e.map(function(t,r){var a,l=((a={key:r})["data-rh"]=!0,a);return Object.keys(t).forEach(function(u){var d=rc[u]||u;d==="innerHTML"||d==="cssText"?l.dangerouslySetInnerHTML={__html:t.innerHTML||t.cssText}:l[d]=t[u]}),Cr.createElement(s,l)})},ii=function(s,e,t){switch(s){case ct.TITLE:return{toComponent:function(){return a=e.titleAttributes,(l={key:r=e.title})["data-rh"]=!0,u=Ym(a,l),[Cr.createElement(ct.TITLE,u,r)];var r,a,l,u},toString:function(){return(function(r,a,l,u){var d=qm(l),h=a0(a);return d?"<"+r+' data-rh="true" '+d+">"+od(h,u)+"</"+r+">":"<"+r+' data-rh="true">'+od(h,u)+"</"+r+">"})(s,e.title,e.titleAttributes,t)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return Ym(e)},toString:function(){return qm(e)}};default:return{toComponent:function(){return Ql(s,e)},toString:function(){return(function(r,a,l){return a.reduce(function(u,d){var h=Object.keys(d).filter(function(v){return!(v==="innerHTML"||v==="cssText")}).reduce(function(v,y){var M=d[y]===void 0?y:y+'="'+od(d[y],l)+'"';return v?v+" "+M:M},""),m=d.innerHTML||d.cssText||"",x=l_.indexOf(r)===-1;return u+"<"+r+' data-rh="true" '+h+(x?"/>":">"+m+"</"+r+">")},"")})(s,e,t)}}}},Yd=function(s){var e=s.baseTag,t=s.bodyAttributes,r=s.encode,a=s.htmlAttributes,l=s.noscriptTags,u=s.styleTags,d=s.title,h=d===void 0?"":d,m=s.titleAttributes,x=s.linkTags,v=s.metaTags,y=s.scriptTags,M={toComponent:function(){},toString:function(){return""}};if(s.prioritizeSeoTags){var A=(function(w){var S=w.linkTags,_=w.scriptTags,I=w.encode,N=sd(w.metaTags,n_),P=sd(S,e_),z=sd(_,t_);return{priorityMethods:{toComponent:function(){return[].concat(Ql(ct.META,N.priority),Ql(ct.LINK,P.priority),Ql(ct.SCRIPT,z.priority))},toString:function(){return ii(ct.META,N.priority,I)+" "+ii(ct.LINK,P.priority,I)+" "+ii(ct.SCRIPT,z.priority,I)}},metaTags:N.default,linkTags:P.default,scriptTags:z.default}})(s);M=A.priorityMethods,x=A.linkTags,v=A.metaTags,y=A.scriptTags}return{priority:M,base:ii(ct.BASE,e,r),bodyAttributes:ii("bodyAttributes",t,r),htmlAttributes:ii("htmlAttributes",a,r),link:ii(ct.LINK,x,r),meta:ii(ct.META,v,r),noscript:ii(ct.NOSCRIPT,l,r),script:ii(ct.SCRIPT,y,r),style:ii(ct.STYLE,u,r),title:ii(ct.TITLE,{title:h,titleAttributes:m},r)}},Sl=[],$d=function(s,e){var t=this;e===void 0&&(e=typeof document<"u"),this.instances=[],this.value={setHelmet:function(r){t.context.helmet=r},helmetInstances:{get:function(){return t.canUseDOM?Sl:t.instances},add:function(r){(t.canUseDOM?Sl:t.instances).push(r)},remove:function(r){var a=(t.canUseDOM?Sl:t.instances).indexOf(r);(t.canUseDOM?Sl:t.instances).splice(a,1)}}},this.context=s,this.canUseDOM=e,e||(s.helmet=Yd({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},l0=Cr.createContext({}),c_=wt.shape({setHelmet:wt.func,helmetInstances:wt.shape({get:wt.func,add:wt.func,remove:wt.func})}),u_=typeof document<"u",Zs=(function(s){function e(t){var r;return(r=s.call(this,t)||this).helmetData=new $d(r.props.context,e.canUseDOM),r}return Xf(e,s),e.prototype.render=function(){return Cr.createElement(l0.Provider,{value:this.helmetData.value},this.props.children)},e})(et.Component);Zs.canUseDOM=u_,Zs.propTypes={context:wt.shape({helmet:wt.shape()}),children:wt.node.isRequired},Zs.defaultProps={context:{}},Zs.displayName="HelmetProvider";var ks=function(s,e){var t,r=document.head||document.querySelector(ct.HEAD),a=r.querySelectorAll(s+"[data-rh]"),l=[].slice.call(a),u=[];return e&&e.length&&e.forEach(function(d){var h=document.createElement(s);for(var m in d)Object.prototype.hasOwnProperty.call(d,m)&&(m==="innerHTML"?h.innerHTML=d.innerHTML:m==="cssText"?h.styleSheet?h.styleSheet.cssText=d.cssText:h.appendChild(document.createTextNode(d.cssText)):h.setAttribute(m,d[m]===void 0?"":d[m]));h.setAttribute("data-rh","true"),l.some(function(x,v){return t=v,h.isEqualNode(x)})?l.splice(t,1):u.push(h)}),l.forEach(function(d){return d.parentNode.removeChild(d)}),u.forEach(function(d){return r.appendChild(d)}),{oldTags:l,newTags:u}},ad=function(s,e){var t=document.getElementsByTagName(s)[0];if(t){for(var r=t.getAttribute("data-rh"),a=r?r.split(","):[],l=[].concat(a),u=Object.keys(e),d=0;d<u.length;d+=1){var h=u[d],m=e[h]||"";t.getAttribute(h)!==m&&t.setAttribute(h,m),a.indexOf(h)===-1&&a.push(h);var x=l.indexOf(h);x!==-1&&l.splice(x,1)}for(var v=l.length-1;v>=0;v-=1)t.removeAttribute(l[v]);a.length===l.length?t.removeAttribute("data-rh"):t.getAttribute("data-rh")!==u.join(",")&&t.setAttribute("data-rh",u.join(","))}},$m=function(s,e){var t=s.baseTag,r=s.htmlAttributes,a=s.linkTags,l=s.metaTags,u=s.noscriptTags,d=s.onChangeClientState,h=s.scriptTags,m=s.styleTags,x=s.title,v=s.titleAttributes;ad(ct.BODY,s.bodyAttributes),ad(ct.HTML,r),(function(w,S){w!==void 0&&document.title!==w&&(document.title=a0(w)),ad(ct.TITLE,S)})(x,v);var y={baseTag:ks(ct.BASE,t),linkTags:ks(ct.LINK,a),metaTags:ks(ct.META,l),noscriptTags:ks(ct.NOSCRIPT,u),scriptTags:ks(ct.SCRIPT,h),styleTags:ks(ct.STYLE,m)},M={},A={};Object.keys(y).forEach(function(w){var S=y[w],_=S.newTags,I=S.oldTags;_.length&&(M[w]=_),I.length&&(A[w]=y[w].oldTags)}),e&&e(),d(s,M,A)},qo=null,sc=(function(s){function e(){for(var r,a=arguments.length,l=new Array(a),u=0;u<a;u++)l[u]=arguments[u];return(r=s.call.apply(s,[this].concat(l))||this).rendered=!1,r}Xf(e,s);var t=e.prototype;return t.shouldComponentUpdate=function(r){return!Jx(r,this.props)},t.componentDidUpdate=function(){this.emitChange()},t.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},t.emitChange=function(){var r,a,l=this.props.context,u=l.setHelmet,d=null,h=(r=l.helmetInstances.get().map(function(m){var x=en({},m.props);return delete x.context,x}),{baseTag:o_(["href"],r),bodyAttributes:rd("bodyAttributes",r),defer:Js(r,"defer"),encode:Js(r,"encodeSpecialCharacters"),htmlAttributes:rd("htmlAttributes",r),linkTags:Xo(ct.LINK,["rel","href"],r),metaTags:Xo(ct.META,["name","charset","http-equiv","property","itemprop"],r),noscriptTags:Xo(ct.NOSCRIPT,["innerHTML"],r),onChangeClientState:s_(r),scriptTags:Xo(ct.SCRIPT,["src","innerHTML"],r),styleTags:Xo(ct.STYLE,["cssText"],r),title:r_(r),titleAttributes:rd("titleAttributes",r),prioritizeSeoTags:a_(r,"prioritizeSeoTags")});Zs.canUseDOM?(a=h,qo&&cancelAnimationFrame(qo),a.defer?qo=requestAnimationFrame(function(){$m(a,function(){qo=null})}):($m(a),qo=null)):Yd&&(d=Yd(h)),u(d)},t.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},t.render=function(){return this.init(),null},e})(et.Component);sc.propTypes={context:c_.isRequired},sc.displayName="HelmetDispatcher";var d_=["children"],f_=["children"],os=(function(s){function e(){return s.apply(this,arguments)||this}Xf(e,s);var t=e.prototype;return t.shouldComponentUpdate=function(r){return!Yx(Xm(this.props,"helmetData"),Xm(r,"helmetData"))},t.mapNestedChildrenToProps=function(r,a){if(!a)return null;switch(r.type){case ct.SCRIPT:case ct.NOSCRIPT:return{innerHTML:a};case ct.STYLE:return{cssText:a};default:throw new Error("<"+r.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},t.flattenArrayTypeChildren=function(r){var a,l=r.child,u=r.arrayTypeChildren;return en({},u,((a={})[l.type]=[].concat(u[l.type]||[],[en({},r.newChildProps,this.mapNestedChildrenToProps(l,r.nestedChildren))]),a))},t.mapObjectTypeChildren=function(r){var a,l,u=r.child,d=r.newProps,h=r.newChildProps,m=r.nestedChildren;switch(u.type){case ct.TITLE:return en({},d,((a={})[u.type]=m,a.titleAttributes=en({},h),a));case ct.BODY:return en({},d,{bodyAttributes:en({},h)});case ct.HTML:return en({},d,{htmlAttributes:en({},h)});default:return en({},d,((l={})[u.type]=en({},h),l))}},t.mapArrayTypeChildrenToProps=function(r,a){var l=en({},a);return Object.keys(r).forEach(function(u){var d;l=en({},l,((d={})[u]=r[u],d))}),l},t.warnOnInvalidChildren=function(r,a){return Vm(Wm.some(function(l){return r.type===l}),typeof r.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+Wm.join(", ")+" are allowed. Helmet does not support rendering <"+r.type+"> elements. Refer to our API for more information."),Vm(!a||typeof a=="string"||Array.isArray(a)&&!a.some(function(l){return typeof l!="string"}),"Helmet expects a string as a child of <"+r.type+">. Did you forget to wrap your children in braces? ( <"+r.type+">{``}</"+r.type+"> ) Refer to our API for more information."),!0},t.mapChildrenToProps=function(r,a){var l=this,u={};return Cr.Children.forEach(r,function(d){if(d&&d.props){var h=d.props,m=h.children,x=Gm(h,d_),v=Object.keys(x).reduce(function(M,A){return M[i_[A]||A]=x[A],M},{}),y=d.type;switch(typeof y=="symbol"?y=y.toString():l.warnOnInvalidChildren(d,m),y){case ct.FRAGMENT:a=l.mapChildrenToProps(m,a);break;case ct.LINK:case ct.META:case ct.NOSCRIPT:case ct.SCRIPT:case ct.STYLE:u=l.flattenArrayTypeChildren({child:d,arrayTypeChildren:u,newChildProps:v,nestedChildren:m});break;default:a=l.mapObjectTypeChildren({child:d,newProps:a,newChildProps:v,nestedChildren:m})}}}),this.mapArrayTypeChildrenToProps(u,a)},t.render=function(){var r=this.props,a=r.children,l=Gm(r,f_),u=en({},l),d=l.helmetData;return a&&(u=this.mapChildrenToProps(a,u)),!d||d instanceof $d||(d=new $d(d.context,d.instances)),d?Cr.createElement(sc,en({},u,{context:d.value,helmetData:void 0})):Cr.createElement(l0.Consumer,null,function(h){return Cr.createElement(sc,en({},u,{context:h}))})},e})(et.Component);os.propTypes={base:wt.object,bodyAttributes:wt.object,children:wt.oneOfType([wt.arrayOf(wt.node),wt.node]),defaultTitle:wt.string,defer:wt.bool,encodeSpecialCharacters:wt.bool,htmlAttributes:wt.object,link:wt.arrayOf(wt.object),meta:wt.arrayOf(wt.object),noscript:wt.arrayOf(wt.object),onChangeClientState:wt.func,script:wt.arrayOf(wt.object),style:wt.arrayOf(wt.object),title:wt.string,titleAttributes:wt.object,titleTemplate:wt.string,prioritizeSeoTags:wt.bool,helmetData:wt.object},os.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},os.displayName="Helmet";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),p_=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),Km=s=>{const e=p_(s);return e.charAt(0).toUpperCase()+e.slice(1)},c0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=et.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:u,...d},h)=>et.createElement("svg",{ref:h,...m_,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:c0("lucide",a),...d},[...u.map(([m,x])=>et.createElement(m,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=(s,e)=>{const t=et.forwardRef(({className:r,...a},l)=>et.createElement(g_,{ref:l,iconNode:e,className:c0(`lucide-${h_(Km(s))}`,`lucide-${s}`,r),...a}));return t.displayName=Km(s),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]],x_=bt("accessibility",v_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Zm=bt("arrow-right",__);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],S_=bt("award",y_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ta=bt("check",M_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],b_=bt("chevron-down",E_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],T_=bt("circle-check-big",w_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],C_=bt("cloud",A_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],qf=bt("code-xml",R_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]],Kd=bt("cookie",P_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],N_=bt("database",D_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",key:"1dfaln"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",key:"1qnva7"}]],I_=bt("ear",L_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],u0=bt("eye",k_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],F_=bt("heart",U_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]],z_=bt("keyboard",O_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],H_=bt("linkedin",B_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],j_=bt("lock",V_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Yf=bt("mail",G_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],d0=bt("map-pin",W_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],q_=bt("menu",X_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],$_=bt("message-circle",Y_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],Qm=bt("message-square",K_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Q_=bt("monitor",Z_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],f0=bt("palette",J_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],ty=bt("phone",ey);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],oc=bt("rocket",ny);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],ry=bt("scale",iy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],oy=bt("send",sy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],ly=bt("shield",ay);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],uy=bt("smartphone",cy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Jm=bt("sparkles",dy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],hy=bt("star",fy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],my=bt("trending-up",py);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]],vy=bt("user-check",gy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],_y=bt("users",xy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],$f=bt("x",yy);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],My=bt("zap",Sy),Ey={home:"/Startseite",leistungen:"/leistungen","ueber-mich":"/ueber-mich",ablauf:"/ablauf",preise:"/preise",kontakt:"/kontakt"};function Xi(s){const e=document.getElementById(s),t=Ey[s]??`/${s}`;if(e){const r=document.querySelector("header"),a=r?r.offsetHeight:120,l=e.getBoundingClientRect().top+window.scrollY,u=s==="kontakt"?Math.max(0,l-a+8):Math.max(0,l-a-16);window.scrollTo({top:u,behavior:"smooth"});try{window.history.pushState({},"",t)}catch{}return!0}return window.location.href=t,!1}function Ml(){const[s,e]=et.useState("home"),[t,r]=et.useState(!1),[a,l]=et.useState(!1),u=d=>{Xi(d),e(d),r(!1)};return et.useEffect(()=>{const d=window.matchMedia("(max-width: 767px)"),h=A=>{const w="matches"in A?A.matches:d.matches;l(!!w),!w&&t&&r(!1)};h(d),typeof d.addEventListener=="function"?d.addEventListener("change",h):typeof d.addListener=="function"&&d.addListener(h);const m=["home","leistungen","ueber-mich","ablauf","preise","kontakt"],x=new IntersectionObserver(A=>{if(A.find(I=>I.target.id==="kontakt"&&I.isIntersecting)){e("kontakt");return}const S=A.filter(I=>I.isIntersecting);if(S.length>0){S.sort((N,P)=>P.intersectionRatio-N.intersectionRatio);const I=S[0].target.id;e(I);return}const _=A.slice().sort((I,N)=>Math.abs(I.boundingClientRect.top)-Math.abs(N.boundingClientRect.top));if(_.length){const I=_[0].target.id;e(I)}},{root:null,rootMargin:"-40% 0px -40% 0px",threshold:[0,.25,.5,.75,1]}),v=new Set,y=()=>{m.forEach(A=>{if(!v.has(A)){const w=document.getElementById(A);w&&(x.observe(w),v.add(A))}})};y();const M=new MutationObserver(()=>{y(),v.size===m.length&&M.disconnect()});return M.observe(document.body,{childList:!0,subtree:!0}),()=>{x.disconnect(),M.disconnect(),typeof d.removeEventListener=="function"?d.removeEventListener("change",h):typeof d.removeListener=="function"&&d.removeListener(h)}},[]),et.useEffect(()=>{let d=!1;const h=["home","leistungen","ueber-mich","ablauf","preise","kontakt"],m=()=>{d||(d=!0,requestAnimationFrame(()=>{try{if(window.scrollY<=72){e("home"),d=!1;return}const x=document.getElementById("kontakt");if(x){const S=x.getBoundingClientRect();if(S.top<window.innerHeight&&S.bottom>0){e("kontakt"),d=!1;return}}const v=document.querySelector("header"),M=(v?v.offsetHeight:96)+24;let A=null,w=1/0;h.forEach(S=>{const _=document.getElementById(S);if(!_)return;const I=_.getBoundingClientRect();if(I.bottom<0||I.top>window.innerHeight)return;const N=Math.abs(I.top-M);N<w&&(w=N,A=S)}),A&&e(A)}catch{}d=!1}))};return window.addEventListener("scroll",m,{passive:!0}),m(),()=>window.removeEventListener("scroll",m)},[]),p.jsxs("header",{className:"fixed top-0 left-0 w-full z-50 flex justify-center items-center py-4 bg-transparent",children:[p.jsx("style",{children:`@keyframes blinkPulse {
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

          /* Animated gradient used by the logo mark and text */
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .logo-mark {
            background-size: 200% 200%;
            animation: gradientShift 6s linear infinite;
          }

          .logo-text {
            background-size: 200% 200%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: gradientShift 6s linear infinite;
          }

          @media (prefers-reduced-motion: reduce) { .logo-mark, .logo-text { animation: none; } }
        `}),p.jsxs("div",{className:"w-full max-w-7xl mx-4 sm:mx-auto bg-slate-950/30 backdrop-blur-2xl border border-purple-500/20 rounded-full px-3 sm:px-8 py-3.5 shadow-xl flex items-center justify-between overflow-hidden",children:[p.jsxs("a",{href:"/",className:"flex items-center gap-2","aria-label":"Startseite",children:[p.jsx("div",{className:"logo-mark w-8 h-8 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 rounded-lg flex items-center justify-center",children:p.jsx(qf,{className:"w-5 h-5"})}),p.jsx("span",{className:"logo-text font-bold text-lg bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400",children:"oezdens"})]}),!a&&p.jsxs("nav",{className:"flex items-center gap-14 text-sm",children:[p.jsxs("button",{onClick:()=>u("home"),className:`relative group pb-1 transition-all duration-300 ${s==="home"?"text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold":"text-slate-300 hover:text-white"}`,children:["Home",p.jsx("span",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${s==="home"?"w-full":"w-0 group-hover:w-full"}`})]}),p.jsxs("a",{href:"/#leistungen",onClick:d=>{d.preventDefault(),u("leistungen")},className:`relative group pb-1 transition-all duration-300 ${s==="leistungen"?"text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold":"text-slate-300 hover:text-white"}`,children:["Leistungen",p.jsx("span",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${s==="leistungen"?"w-full":"w-0 group-hover:w-full"}`})]}),p.jsxs("a",{href:"/#ueber-mich",onClick:d=>{d.preventDefault(),u("ueber-mich")},className:`relative group pb-1 transition-all duration-300 ${s==="ueber-mich"?"text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold":"text-slate-300 hover:text-white"}`,children:["Über mich",p.jsx("span",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${s==="ueber-mich"?"w-full":"w-0 group-hover:w-full"}`})]}),p.jsxs("a",{href:"/#ablauf",onClick:d=>{d.preventDefault(),u("ablauf")},className:`relative group pb-1 transition-all duration-300 ${s==="ablauf"?"text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold":"text-slate-300 hover:text-white"}`,children:["Ablauf",p.jsx("span",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${s==="ablauf"?"w-full":"w-0 group-hover:w-full"}`})]}),p.jsxs("a",{href:"/#preise",onClick:d=>{d.preventDefault(),u("preise")},className:`relative group pb-1 transition-all duration-300 ${s==="preise"?"text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold":"text-slate-300 hover:text-white"}`,children:["Preise",p.jsx("span",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${s==="preise"?"w-full":"w-0 group-hover:w-full"}`})]}),p.jsx("a",{href:"/#kontakt",onClick:d=>{d.preventDefault(),u("kontakt")},className:`bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-1.5 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm font-medium ${s==="kontakt"?"blink":""}`,"aria-label":"Kontakt",children:"Kontakt"})]}),a&&p.jsx("div",{className:"md:hidden flex items-center ml-2",children:p.jsx("button",{"aria-label":t?"Menü schließen":"Menü öffnen",onClick:()=>r(d=>!d),className:"p-2 rounded-md text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 -mr-1",children:t?p.jsx($f,{className:"w-6 h-6"}):p.jsx(q_,{className:"w-6 h-6"})})})]}),a&&t&&p.jsx("div",{className:"md:hidden fixed inset-x-4 top-[72px] z-40 bg-slate-950/95 backdrop-blur-md rounded-xl p-4 shadow-xl mx-4",children:p.jsxs("nav",{className:"flex flex-col gap-3 text-base",children:[p.jsx("button",{onClick:()=>u("home"),className:`text-left pb-1 transition-all duration-200 ${s==="home"?"text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold":"text-slate-300 hover:text-white"}`,children:"Home"}),p.jsx("button",{onClick:()=>u("leistungen"),className:`text-left pb-1 transition-all duration-200 ${s==="leistungen"?"text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold":"text-slate-300 hover:text-white"}`,children:"Leistungen"}),p.jsx("button",{onClick:()=>u("ueber-mich"),className:`text-left pb-1 transition-all duration-200 ${s==="ueber-mich"?"text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold":"text-slate-300 hover:text-white"}`,children:"Über mich"}),p.jsx("button",{onClick:()=>u("ablauf"),className:`text-left pb-1 transition-all duration-200 ${s==="ablauf"?"text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold":"text-slate-300 hover:text-white"}`,children:"Ablauf"}),p.jsx("button",{onClick:()=>u("preise"),className:`text-left pb-1 transition-all duration-200 ${s==="preise"?"text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold":"text-slate-300 hover:text-white"}`,children:"Preise"}),p.jsx("button",{onClick:()=>u("kontakt"),className:`mt-2 text-left bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm font-medium ${s==="kontakt"?"blink":""}`,children:"Kontakt"})]})})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kf="180",by=0,eg=1,wy=2,h0=1,Ty=2,Wi=3,Dr=0,Bn=1,qi=2,Rr=0,eo=1,Zd=2,tg=3,ng=4,Ay=5,is=100,Cy=101,Ry=102,Py=103,Dy=104,Ny=200,Ly=201,Iy=202,ky=203,Qd=204,Jd=205,Uy=206,Fy=207,Oy=208,zy=209,By=210,Hy=211,Vy=212,jy=213,Gy=214,ef=0,tf=1,nf=2,no=3,rf=4,sf=5,of=6,af=7,p0=0,Wy=1,Xy=2,Pr=0,qy=1,Yy=2,$y=3,Ky=4,Zy=5,Qy=6,Jy=7,m0=300,io=301,ro=302,lf=303,cf=304,hc=306,uf=1e3,yi=1001,df=1002,$n=1003,eS=1004,El=1005,zn=1006,ld=1007,ss=1008,Ki=1009,g0=1010,v0=1011,ia=1012,Zf=1013,ls=1014,Ai=1015,ao=1016,Qf=1017,Jf=1018,ra=1020,x0=35902,_0=35899,y0=1021,S0=1022,oi=1023,sa=1026,oa=1027,M0=1028,eh=1029,E0=1030,th=1031,nh=1033,Jl=33776,ec=33777,tc=33778,nc=33779,ff=35840,hf=35841,pf=35842,mf=35843,gf=36196,vf=37492,xf=37496,_f=37808,yf=37809,Sf=37810,Mf=37811,Ef=37812,bf=37813,wf=37814,Tf=37815,Af=37816,Cf=37817,Rf=37818,Pf=37819,Df=37820,Nf=37821,Lf=36492,If=36494,kf=36495,Uf=36283,Ff=36284,Of=36285,zf=36286,tS=3200,nS=3201,iS=0,rS=1,Ar="",si="srgb",so="srgb-linear",ac="linear",Bt="srgb",Us=7680,ig=519,sS=512,oS=513,aS=514,b0=515,lS=516,cS=517,uS=518,dS=519,rg=35044,sg="300 es",Ci=2e3,lc=2001;class lo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=Math.PI/180,Bf=180/Math.PI;function ca(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function Tt(s,e,t){return Math.max(e,Math.min(t,s))}function fS(s,e){return(s%e+e)%e}function ud(s,e,t){return(1-t)*s+t*e}function Yo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ua{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,d){let h=r[a+0],m=r[a+1],x=r[a+2],v=r[a+3];const y=l[u+0],M=l[u+1],A=l[u+2],w=l[u+3];if(d===0){e[t+0]=h,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(d===1){e[t+0]=y,e[t+1]=M,e[t+2]=A,e[t+3]=w;return}if(v!==w||h!==y||m!==M||x!==A){let S=1-d;const _=h*y+m*M+x*A+v*w,I=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const z=Math.sqrt(N),F=Math.atan2(z,_*I);S=Math.sin(S*F)/z,d=Math.sin(d*F)/z}const P=d*I;if(h=h*S+y*P,m=m*S+M*P,x=x*S+A*P,v=v*S+w*P,S===1-d){const z=1/Math.sqrt(h*h+m*m+x*x+v*v);h*=z,m*=z,x*=z,v*=z}}e[t]=h,e[t+1]=m,e[t+2]=x,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,a,l,u){const d=r[a],h=r[a+1],m=r[a+2],x=r[a+3],v=l[u],y=l[u+1],M=l[u+2],A=l[u+3];return e[t]=d*A+x*v+h*M-m*y,e[t+1]=h*A+x*y+m*v-d*M,e[t+2]=m*A+x*M+d*y-h*v,e[t+3]=x*A-d*v-h*y-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,m=d(r/2),x=d(a/2),v=d(l/2),y=h(r/2),M=h(a/2),A=h(l/2);switch(u){case"XYZ":this._x=y*x*v+m*M*A,this._y=m*M*v-y*x*A,this._z=m*x*A+y*M*v,this._w=m*x*v-y*M*A;break;case"YXZ":this._x=y*x*v+m*M*A,this._y=m*M*v-y*x*A,this._z=m*x*A-y*M*v,this._w=m*x*v+y*M*A;break;case"ZXY":this._x=y*x*v-m*M*A,this._y=m*M*v+y*x*A,this._z=m*x*A+y*M*v,this._w=m*x*v-y*M*A;break;case"ZYX":this._x=y*x*v-m*M*A,this._y=m*M*v+y*x*A,this._z=m*x*A-y*M*v,this._w=m*x*v+y*M*A;break;case"YZX":this._x=y*x*v+m*M*A,this._y=m*M*v+y*x*A,this._z=m*x*A-y*M*v,this._w=m*x*v-y*M*A;break;case"XZY":this._x=y*x*v-m*M*A,this._y=m*M*v-y*x*A,this._z=m*x*A+y*M*v,this._w=m*x*v+y*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],d=t[5],h=t[9],m=t[2],x=t[6],v=t[10],y=r+d+v;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(x-h)*M,this._y=(l-m)*M,this._z=(u-a)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(x-h)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(l+m)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(l-m)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(h+x)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(u-a)/M,this._x=(l+m)/M,this._y=(h+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,d=t._x,h=t._y,m=t._z,x=t._w;return this._x=r*x+u*d+a*m-l*h,this._y=a*x+u*h+l*d-r*m,this._z=l*x+u*m+r*h-a*d,this._w=u*x-r*d-a*h-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=a,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*r+t*this._x,this._y=M*a+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const m=Math.sqrt(h),x=Math.atan2(m,d),v=Math.sin((1-t)*x)/m,y=Math.sin(t*x)/m;return this._w=u*v+this._w*y,this._x=r*v+this._x*y,this._y=a*v+this._y*y,this._z=l*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,r=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(og.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(og.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,d=e.z,h=e.w,m=2*(u*a-d*r),x=2*(d*t-l*a),v=2*(l*r-u*t);return this.x=t+h*m+u*v-d*x,this.y=r+h*x+d*m-l*v,this.z=a+h*v+l*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,d=t.y,h=t.z;return this.x=a*h-l*d,this.y=l*u-r*h,this.z=r*d-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return dd.copy(this).projectOnVector(e),this.sub(dd)}reflect(e){return this.sub(dd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dd=new se,og=new ua;class xt{constructor(e,t,r,a,l,u,d,h,m){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,d,h,m)}set(e,t,r,a,l,u,d,h,m){const x=this.elements;return x[0]=e,x[1]=a,x[2]=d,x[3]=t,x[4]=l,x[5]=h,x[6]=r,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],d=r[3],h=r[6],m=r[1],x=r[4],v=r[7],y=r[2],M=r[5],A=r[8],w=a[0],S=a[3],_=a[6],I=a[1],N=a[4],P=a[7],z=a[2],F=a[5],V=a[8];return l[0]=u*w+d*I+h*z,l[3]=u*S+d*N+h*F,l[6]=u*_+d*P+h*V,l[1]=m*w+x*I+v*z,l[4]=m*S+x*N+v*F,l[7]=m*_+x*P+v*V,l[2]=y*w+M*I+A*z,l[5]=y*S+M*N+A*F,l[8]=y*_+M*P+A*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],x=e[8];return t*u*x-t*d*m-r*l*x+r*d*h+a*l*m-a*u*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],x=e[8],v=x*u-d*m,y=d*h-x*l,M=m*l-u*h,A=t*v+r*y+a*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=v*w,e[1]=(a*m-x*r)*w,e[2]=(d*r-a*u)*w,e[3]=y*w,e[4]=(x*t-a*h)*w,e[5]=(a*l-d*t)*w,e[6]=M*w,e[7]=(r*h-m*t)*w,e[8]=(u*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,d){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*u+m*d)+u+e,-a*m,a*h,-a*(-m*u+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(fd.makeScale(e,t)),this}rotate(e){return this.premultiply(fd.makeRotation(-e)),this}translate(e,t){return this.premultiply(fd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fd=new xt;function w0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function cc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hS(){const s=cc("canvas");return s.style.display="block",s}const ag={};function aa(s){s in ag||(ag[s]=!0,console.warn(s))}function pS(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const lg=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cg=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mS(){const s={enabled:!0,workingColorSpace:so,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Bt&&(a.r=Yi(a.r),a.g=Yi(a.g),a.b=Yi(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Bt&&(a.r=to(a.r),a.g=to(a.g),a.b=to(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ar?ac:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return aa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return aa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[so]:{primaries:e,whitePoint:r,transfer:ac,toXYZ:lg,fromXYZ:cg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:r,transfer:Bt,toXYZ:lg,fromXYZ:cg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const Nt=mS();function Yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function to(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fs;class gS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Fs===void 0&&(Fs=cc("canvas")),Fs.width=e.width,Fs.height=e.height;const a=Fs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Fs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Yi(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Yi(t[r]/255)*255):t[r]=Yi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vS=0;class ih{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=ca(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?l.push(hd(a[u].image)):l.push(hd(a[u]))}else l=hd(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function hd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xS=0;const pd=new se;class Dn extends lo{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,r=yi,a=yi,l=zn,u=ss,d=oi,h=Ki,m=Dn.DEFAULT_ANISOTROPY,x=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=ca(),this.name="",this.source=new ih(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pd).x}get height(){return this.source.getSize(pd).y}get depth(){return this.source.getSize(pd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uf:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case df:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uf:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case df:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=m0;Dn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,r=0,a=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,m=h[0],x=h[4],v=h[8],y=h[1],M=h[5],A=h[9],w=h[2],S=h[6],_=h[10];if(Math.abs(x-y)<.01&&Math.abs(v-w)<.01&&Math.abs(A-S)<.01){if(Math.abs(x+y)<.1&&Math.abs(v+w)<.1&&Math.abs(A+S)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(m+1)/2,P=(M+1)/2,z=(_+1)/2,F=(x+y)/4,V=(v+w)/4,B=(A+S)/4;return N>P&&N>z?N<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(N),a=F/r,l=V/r):P>z?P<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),r=F/a,l=B/a):z<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(z),r=V/l,a=B/l),this.set(r,a,l,t),this}let I=Math.sqrt((S-A)*(S-A)+(v-w)*(v-w)+(y-x)*(y-x));return Math.abs(I)<.001&&(I=1),this.x=(S-A)/I,this.y=(v-w)/I,this.z=(y-x)/I,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _S extends lo{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);const a={width:e,height:t,depth:r.depth},l=new Dn(a);this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new ih(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends _S{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class T0 extends Dn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=$n,this.minFilter=$n,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yS extends Dn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=$n,this.minFilter=$n,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class da{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,mi):mi.fromBufferAttribute(l,u),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),bl.copy(r.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),wl.subVectors(this.max,$o),Os.subVectors(e.a,$o),zs.subVectors(e.b,$o),Bs.subVectors(e.c,$o),yr.subVectors(zs,Os),Sr.subVectors(Bs,zs),Yr.subVectors(Os,Bs);let t=[0,-yr.z,yr.y,0,-Sr.z,Sr.y,0,-Yr.z,Yr.y,yr.z,0,-yr.x,Sr.z,0,-Sr.x,Yr.z,0,-Yr.x,-yr.y,yr.x,0,-Sr.y,Sr.x,0,-Yr.y,Yr.x,0];return!md(t,Os,zs,Bs,wl)||(t=[1,0,0,0,1,0,0,0,1],!md(t,Os,zs,Bs,wl))?!1:(Tl.crossVectors(yr,Sr),t=[Tl.x,Tl.y,Tl.z],md(t,Os,zs,Bs,wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zi=[new se,new se,new se,new se,new se,new se,new se,new se],mi=new se,bl=new da,Os=new se,zs=new se,Bs=new se,yr=new se,Sr=new se,Yr=new se,$o=new se,wl=new se,Tl=new se,$r=new se;function md(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){$r.fromArray(s,l);const d=a.x*Math.abs($r.x)+a.y*Math.abs($r.y)+a.z*Math.abs($r.z),h=e.dot($r),m=t.dot($r),x=r.dot($r);if(Math.max(-Math.max(h,m,x),Math.min(h,m,x))>d)return!1}return!0}const SS=new da,Ko=new se,gd=new se;class pc{constructor(e=new se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):SS.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const t=Ko.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Ko,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(gd)),this.expandByPoint(Ko.copy(e.center).sub(gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Bi=new se,vd=new se,Al=new se,Mr=new se,xd=new se,Cl=new se,_d=new se;class A0{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){vd.copy(e).add(t).multiplyScalar(.5),Al.copy(t).sub(e).normalize(),Mr.copy(this.origin).sub(vd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Al),d=Mr.dot(this.direction),h=-Mr.dot(Al),m=Mr.lengthSq(),x=Math.abs(1-u*u);let v,y,M,A;if(x>0)if(v=u*h-d,y=u*d-h,A=l*x,v>=0)if(y>=-A)if(y<=A){const w=1/x;v*=w,y*=w,M=v*(v+u*y+2*d)+y*(u*v+y+2*h)+m}else y=l,v=Math.max(0,-(u*y+d)),M=-v*v+y*(y+2*h)+m;else y=-l,v=Math.max(0,-(u*y+d)),M=-v*v+y*(y+2*h)+m;else y<=-A?(v=Math.max(0,-(-u*l+d)),y=v>0?-l:Math.min(Math.max(-l,-h),l),M=-v*v+y*(y+2*h)+m):y<=A?(v=0,y=Math.min(Math.max(-l,-h),l),M=y*(y+2*h)+m):(v=Math.max(0,-(u*l+d)),y=v>0?l:Math.min(Math.max(-l,-h),l),M=-v*v+y*(y+2*h)+m);else y=u>0?-l:l,v=Math.max(0,-(u*y+d)),M=-v*v+y*(y+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(vd).addScaledVector(Al,y),M}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);const r=Bi.dot(this.direction),a=Bi.dot(Bi)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,d,h;const m=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,a=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,a=(e.min.x-y.x)*m),x>=0?(l=(e.min.y-y.y)*x,u=(e.max.y-y.y)*x):(l=(e.max.y-y.y)*x,u=(e.min.y-y.y)*x),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),v>=0?(d=(e.min.z-y.z)*v,h=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,h=(e.min.z-y.z)*v),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,r,a,l){xd.subVectors(t,e),Cl.subVectors(r,e),_d.crossVectors(xd,Cl);let u=this.direction.dot(_d),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Mr.subVectors(this.origin,e);const h=d*this.direction.dot(Cl.crossVectors(Mr,Cl));if(h<0)return null;const m=d*this.direction.dot(xd.cross(Mr));if(m<0||h+m>u)return null;const x=-d*Mr.dot(_d);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(e,t,r,a,l,u,d,h,m,x,v,y,M,A,w,S){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,d,h,m,x,v,y,M,A,w,S)}set(e,t,r,a,l,u,d,h,m,x,v,y,M,A,w,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=a,_[1]=l,_[5]=u,_[9]=d,_[13]=h,_[2]=m,_[6]=x,_[10]=v,_[14]=y,_[3]=M,_[7]=A,_[11]=w,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Hs.setFromMatrixColumn(e,0).length(),l=1/Hs.setFromMatrixColumn(e,1).length(),u=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(a),m=Math.sin(a),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=u*x,M=u*v,A=d*x,w=d*v;t[0]=h*x,t[4]=-h*v,t[8]=m,t[1]=M+A*m,t[5]=y-w*m,t[9]=-d*h,t[2]=w-y*m,t[6]=A+M*m,t[10]=u*h}else if(e.order==="YXZ"){const y=h*x,M=h*v,A=m*x,w=m*v;t[0]=y+w*d,t[4]=A*d-M,t[8]=u*m,t[1]=u*v,t[5]=u*x,t[9]=-d,t[2]=M*d-A,t[6]=w+y*d,t[10]=u*h}else if(e.order==="ZXY"){const y=h*x,M=h*v,A=m*x,w=m*v;t[0]=y-w*d,t[4]=-u*v,t[8]=A+M*d,t[1]=M+A*d,t[5]=u*x,t[9]=w-y*d,t[2]=-u*m,t[6]=d,t[10]=u*h}else if(e.order==="ZYX"){const y=u*x,M=u*v,A=d*x,w=d*v;t[0]=h*x,t[4]=A*m-M,t[8]=y*m+w,t[1]=h*v,t[5]=w*m+y,t[9]=M*m-A,t[2]=-m,t[6]=d*h,t[10]=u*h}else if(e.order==="YZX"){const y=u*h,M=u*m,A=d*h,w=d*m;t[0]=h*x,t[4]=w-y*v,t[8]=A*v+M,t[1]=v,t[5]=u*x,t[9]=-d*x,t[2]=-m*x,t[6]=M*v+A,t[10]=y-w*v}else if(e.order==="XZY"){const y=u*h,M=u*m,A=d*h,w=d*m;t[0]=h*x,t[4]=-v,t[8]=m*x,t[1]=y*v+w,t[5]=u*x,t[9]=M*v-A,t[2]=A*v-M,t[6]=d*x,t[10]=w*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MS,e,ES)}lookAt(e,t,r){const a=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Er.crossVectors(r,qn),Er.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Er.crossVectors(r,qn)),Er.normalize(),Rl.crossVectors(qn,Er),a[0]=Er.x,a[4]=Rl.x,a[8]=qn.x,a[1]=Er.y,a[5]=Rl.y,a[9]=qn.y,a[2]=Er.z,a[6]=Rl.z,a[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],d=r[4],h=r[8],m=r[12],x=r[1],v=r[5],y=r[9],M=r[13],A=r[2],w=r[6],S=r[10],_=r[14],I=r[3],N=r[7],P=r[11],z=r[15],F=a[0],V=a[4],B=a[8],D=a[12],R=a[1],j=a[5],Z=a[9],oe=a[13],ie=a[2],fe=a[6],Q=a[10],pe=a[14],L=a[3],de=a[7],ue=a[11],U=a[15];return l[0]=u*F+d*R+h*ie+m*L,l[4]=u*V+d*j+h*fe+m*de,l[8]=u*B+d*Z+h*Q+m*ue,l[12]=u*D+d*oe+h*pe+m*U,l[1]=x*F+v*R+y*ie+M*L,l[5]=x*V+v*j+y*fe+M*de,l[9]=x*B+v*Z+y*Q+M*ue,l[13]=x*D+v*oe+y*pe+M*U,l[2]=A*F+w*R+S*ie+_*L,l[6]=A*V+w*j+S*fe+_*de,l[10]=A*B+w*Z+S*Q+_*ue,l[14]=A*D+w*oe+S*pe+_*U,l[3]=I*F+N*R+P*ie+z*L,l[7]=I*V+N*j+P*fe+z*de,l[11]=I*B+N*Z+P*Q+z*ue,l[15]=I*D+N*oe+P*pe+z*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],d=e[5],h=e[9],m=e[13],x=e[2],v=e[6],y=e[10],M=e[14],A=e[3],w=e[7],S=e[11],_=e[15];return A*(+l*h*v-a*m*v-l*d*y+r*m*y+a*d*M-r*h*M)+w*(+t*h*M-t*m*y+l*u*y-a*u*M+a*m*x-l*h*x)+S*(+t*m*v-t*d*M-l*u*v+r*u*M+l*d*x-r*m*x)+_*(-a*d*x-t*h*v+t*d*y+a*u*v-r*u*y+r*h*x)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],m=e[7],x=e[8],v=e[9],y=e[10],M=e[11],A=e[12],w=e[13],S=e[14],_=e[15],I=v*S*m-w*y*m+w*h*M-d*S*M-v*h*_+d*y*_,N=A*y*m-x*S*m-A*h*M+u*S*M+x*h*_-u*y*_,P=x*w*m-A*v*m+A*d*M-u*w*M-x*d*_+u*v*_,z=A*v*h-x*w*h-A*d*y+u*w*y+x*d*S-u*v*S,F=t*I+r*N+a*P+l*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/F;return e[0]=I*V,e[1]=(w*y*l-v*S*l-w*a*M+r*S*M+v*a*_-r*y*_)*V,e[2]=(d*S*l-w*h*l+w*a*m-r*S*m-d*a*_+r*h*_)*V,e[3]=(v*h*l-d*y*l-v*a*m+r*y*m+d*a*M-r*h*M)*V,e[4]=N*V,e[5]=(x*S*l-A*y*l+A*a*M-t*S*M-x*a*_+t*y*_)*V,e[6]=(A*h*l-u*S*l-A*a*m+t*S*m+u*a*_-t*h*_)*V,e[7]=(u*y*l-x*h*l+x*a*m-t*y*m-u*a*M+t*h*M)*V,e[8]=P*V,e[9]=(A*v*l-x*w*l-A*r*M+t*w*M+x*r*_-t*v*_)*V,e[10]=(u*w*l-A*d*l+A*r*m-t*w*m-u*r*_+t*d*_)*V,e[11]=(x*d*l-u*v*l-x*r*m+t*v*m+u*r*M-t*d*M)*V,e[12]=z*V,e[13]=(x*w*a-A*v*a+A*r*y-t*w*y-x*r*S+t*v*S)*V,e[14]=(A*d*a-u*w*a-A*r*h+t*w*h+u*r*S-t*d*S)*V,e[15]=(u*v*a-x*d*a+x*r*h-t*v*h-u*r*y+t*d*y)*V,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,d=e.y,h=e.z,m=l*u,x=l*d;return this.set(m*u+r,m*d-a*h,m*h+a*d,0,m*d+a*h,x*d+r,x*h-a*u,0,m*h-a*d,x*h+a*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,d=t._z,h=t._w,m=l+l,x=u+u,v=d+d,y=l*m,M=l*x,A=l*v,w=u*x,S=u*v,_=d*v,I=h*m,N=h*x,P=h*v,z=r.x,F=r.y,V=r.z;return a[0]=(1-(w+_))*z,a[1]=(M+P)*z,a[2]=(A-N)*z,a[3]=0,a[4]=(M-P)*F,a[5]=(1-(y+_))*F,a[6]=(S+I)*F,a[7]=0,a[8]=(A+N)*V,a[9]=(S-I)*V,a[10]=(1-(y+w))*V,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Hs.set(a[0],a[1],a[2]).length();const u=Hs.set(a[4],a[5],a[6]).length(),d=Hs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],gi.copy(this);const m=1/l,x=1/u,v=1/d;return gi.elements[0]*=m,gi.elements[1]*=m,gi.elements[2]*=m,gi.elements[4]*=x,gi.elements[5]*=x,gi.elements[6]*=x,gi.elements[8]*=v,gi.elements[9]*=v,gi.elements[10]*=v,t.setFromRotationMatrix(gi),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,a,l,u,d=Ci,h=!1){const m=this.elements,x=2*l/(t-e),v=2*l/(r-a),y=(t+e)/(t-e),M=(r+a)/(r-a);let A,w;if(h)A=l/(u-l),w=u*l/(u-l);else if(d===Ci)A=-(u+l)/(u-l),w=-2*u*l/(u-l);else if(d===lc)A=-u/(u-l),w=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=v,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=A,m[14]=w,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,a,l,u,d=Ci,h=!1){const m=this.elements,x=2/(t-e),v=2/(r-a),y=-(t+e)/(t-e),M=-(r+a)/(r-a);let A,w;if(h)A=1/(u-l),w=u/(u-l);else if(d===Ci)A=-2/(u-l),w=-(u+l)/(u-l);else if(d===lc)A=-1/(u-l),w=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=v,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=A,m[14]=w,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Hs=new se,gi=new rn,MS=new se(0,0,0),ES=new se(1,1,1),Er=new se,Rl=new se,qn=new se,ug=new rn,dg=new ua;class Zi{constructor(e=0,t=0,r=0,a=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],d=a[8],h=a[1],m=a[5],x=a[9],v=a[2],y=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Tt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return ug.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ug,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dg.setFromEuler(this),this.setFromQuaternion(dg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class C0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bS=0;const fg=new se,Vs=new ua,Hi=new rn,Pl=new se,Zo=new se,wS=new se,TS=new ua,hg=new se(1,0,0),pg=new se(0,1,0),mg=new se(0,0,1),gg={type:"added"},AS={type:"removed"},js={type:"childadded",child:null},yd={type:"childremoved",child:null};class Hn extends lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new se,t=new Zi,r=new ua,a=new se(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new rn},normalMatrix:{value:new xt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new C0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(hg,e)}rotateY(e){return this.rotateOnAxis(pg,e)}rotateZ(e){return this.rotateOnAxis(mg,e)}translateOnAxis(e,t){return fg.copy(e).applyQuaternion(this.quaternion),this.position.add(fg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hg,e)}translateY(e){return this.translateOnAxis(pg,e)}translateZ(e){return this.translateOnAxis(mg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Pl.copy(e):Pl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Zo,Pl,this.up):Hi.lookAt(Pl,Zo,this.up),this.quaternion.setFromRotationMatrix(Hi),a&&(Hi.extractRotation(a.matrixWorld),Vs.setFromRotationMatrix(Hi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gg),js.child=e,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(AS),yd.child=e,this.dispatchEvent(yd),yd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gg),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,wS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,TS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,x=h.length;m<x;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(t){const d=u(e.geometries),h=u(e.materials),m=u(e.textures),x=u(e.images),v=u(e.shapes),y=u(e.skeletons),M=u(e.animations),A=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=a,r;function u(d){const h=[];for(const m in d){const x=d[m];delete x.metadata,h.push(x)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Hn.DEFAULT_UP=new se(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new se,Vi=new se,Sd=new se,ji=new se,Gs=new se,Ws=new se,vg=new se,Md=new se,Ed=new se,bd=new se,wd=new Zt,Td=new Zt,Ad=new Zt;class _i{constructor(e=new se,t=new se,r=new se){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),vi.subVectors(e,t),a.cross(vi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){vi.subVectors(a,t),Vi.subVectors(r,t),Sd.subVectors(e,t);const u=vi.dot(vi),d=vi.dot(Vi),h=vi.dot(Sd),m=Vi.dot(Vi),x=Vi.dot(Sd),v=u*m-d*d;if(v===0)return l.set(0,0,0),null;const y=1/v,M=(m*h-d*x)*y,A=(u*x-d*h)*y;return l.set(1-M-A,A,M)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,r,a,l,u,d,h){return this.getBarycoord(e,t,r,a,ji)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,ji.x),h.addScaledVector(u,ji.y),h.addScaledVector(d,ji.z),h)}static getInterpolatedAttribute(e,t,r,a,l,u){return wd.setScalar(0),Td.setScalar(0),Ad.setScalar(0),wd.fromBufferAttribute(e,t),Td.fromBufferAttribute(e,r),Ad.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(wd,l.x),u.addScaledVector(Td,l.y),u.addScaledVector(Ad,l.z),u}static isFrontFacing(e,t,r,a){return vi.subVectors(r,t),Vi.subVectors(e,t),vi.cross(Vi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),vi.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return _i.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,d;Gs.subVectors(a,r),Ws.subVectors(l,r),Md.subVectors(e,r);const h=Gs.dot(Md),m=Ws.dot(Md);if(h<=0&&m<=0)return t.copy(r);Ed.subVectors(e,a);const x=Gs.dot(Ed),v=Ws.dot(Ed);if(x>=0&&v<=x)return t.copy(a);const y=h*v-x*m;if(y<=0&&h>=0&&x<=0)return u=h/(h-x),t.copy(r).addScaledVector(Gs,u);bd.subVectors(e,l);const M=Gs.dot(bd),A=Ws.dot(bd);if(A>=0&&M<=A)return t.copy(l);const w=M*m-h*A;if(w<=0&&m>=0&&A<=0)return d=m/(m-A),t.copy(r).addScaledVector(Ws,d);const S=x*A-M*v;if(S<=0&&v-x>=0&&M-A>=0)return vg.subVectors(l,a),d=(v-x)/(v-x+(M-A)),t.copy(a).addScaledVector(vg,d);const _=1/(S+w+y);return u=w*_,d=y*_,t.copy(r).addScaledVector(Gs,u).addScaledVector(Ws,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const R0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},Dl={h:0,s:0,l:0};function Cd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Lt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Nt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Nt.workingColorSpace){if(e=fS(e,1),t=Tt(t,0,1),r=Tt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Cd(u,l,e+1/3),this.g=Cd(u,l,e),this.b=Cd(u,l,e-1/3)}return Nt.colorSpaceToWorking(this,a),this}setStyle(e,t=si){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){const r=R0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Nt.workingToColorSpace(wn.copy(this),e),Math.round(Tt(wn.r*255,0,255))*65536+Math.round(Tt(wn.g*255,0,255))*256+Math.round(Tt(wn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.workingToColorSpace(wn.copy(this),t);const r=wn.r,a=wn.g,l=wn.b,u=Math.max(r,a,l),d=Math.min(r,a,l);let h,m;const x=(d+u)/2;if(d===u)h=0,m=0;else{const v=u-d;switch(m=x<=.5?v/(u+d):v/(2-u-d),u){case r:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-r)/v+2;break;case l:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=x,e}getRGB(e,t=Nt.workingColorSpace){return Nt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=si){Nt.workingToColorSpace(wn.copy(this),e);const t=wn.r,r=wn.g,a=wn.b;return e!==si?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(Dl);const r=ud(br.h,Dl.h,t),a=ud(br.s,Dl.s,t),l=ud(br.l,Dl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Lt;Lt.NAMES=R0;let CS=0;class fa extends lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=ca(),this.name="",this.type="Material",this.blending=eo,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=Jd,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(r.blending=this.blending),this.side!==Dr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Qd&&(r.blendSrc=this.blendSrc),this.blendDst!==Jd&&(r.blendDst=this.blendDst),this.blendEquation!==is&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ig&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class P0 extends fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=p0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new se,Nl=new vt;let RS=0;class Si{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=rg,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Nl.fromBufferAttribute(this,t),Nl.applyMatrix3(e),this.setXY(t,Nl.x,Nl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Yo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yo(t,this.array)),t}setX(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yo(t,this.array)),t}setY(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yo(t,this.array)),t}setW(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),r=On(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),r=On(r,this.array),a=On(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),r=On(r,this.array),a=On(a,this.array),l=On(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rg&&(e.usage=this.usage),e}}class D0 extends Si{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class N0 extends Si{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class $i extends Si{constructor(e,t,r){super(new Float32Array(e),t,r)}}let PS=0;const ri=new rn,Rd=new Hn,Xs=new se,Yn=new da,Qo=new da,pn=new se;class Ji extends lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(w0(e)?N0:D0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new xt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,r){return ri.makeTranslation(e,t,r),this.applyMatrix4(ri),this}scale(e,t,r){return ri.makeScale(e,t,r),this.applyMatrix4(ri),this}lookAt(e){return Rd.lookAt(e),Rd.updateMatrix(),this.applyMatrix4(Rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new $i(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Yn.setFromBufferAttribute(l),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(e){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Qo.setFromBufferAttribute(d),this.morphTargetsRelative?(pn.addVectors(Yn.min,Qo.min),Yn.expandByPoint(pn),pn.addVectors(Yn.max,Qo.max),Yn.expandByPoint(pn)):(Yn.expandByPoint(Qo.min),Yn.expandByPoint(Qo.max))}Yn.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)pn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(pn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],h=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)pn.fromBufferAttribute(d,m),h&&(Xs.fromBufferAttribute(e,m),pn.add(Xs)),a=Math.max(a,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let B=0;B<r.count;B++)d[B]=new se,h[B]=new se;const m=new se,x=new se,v=new se,y=new vt,M=new vt,A=new vt,w=new se,S=new se;function _(B,D,R){m.fromBufferAttribute(r,B),x.fromBufferAttribute(r,D),v.fromBufferAttribute(r,R),y.fromBufferAttribute(l,B),M.fromBufferAttribute(l,D),A.fromBufferAttribute(l,R),x.sub(m),v.sub(m),M.sub(y),A.sub(y);const j=1/(M.x*A.y-A.x*M.y);isFinite(j)&&(w.copy(x).multiplyScalar(A.y).addScaledVector(v,-M.y).multiplyScalar(j),S.copy(v).multiplyScalar(M.x).addScaledVector(x,-A.x).multiplyScalar(j),d[B].add(w),d[D].add(w),d[R].add(w),h[B].add(S),h[D].add(S),h[R].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let B=0,D=I.length;B<D;++B){const R=I[B],j=R.start,Z=R.count;for(let oe=j,ie=j+Z;oe<ie;oe+=3)_(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const N=new se,P=new se,z=new se,F=new se;function V(B){z.fromBufferAttribute(a,B),F.copy(z);const D=d[B];N.copy(D),N.sub(z.multiplyScalar(z.dot(D))).normalize(),P.crossVectors(F,D);const j=P.dot(h[B])<0?-1:1;u.setXYZW(B,N.x,N.y,N.z,j)}for(let B=0,D=I.length;B<D;++B){const R=I[B],j=R.start,Z=R.count;for(let oe=j,ie=j+Z;oe<ie;oe+=3)V(e.getX(oe+0)),V(e.getX(oe+1)),V(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const a=new se,l=new se,u=new se,d=new se,h=new se,m=new se,x=new se,v=new se;if(e)for(let y=0,M=e.count;y<M;y+=3){const A=e.getX(y+0),w=e.getX(y+1),S=e.getX(y+2);a.fromBufferAttribute(t,A),l.fromBufferAttribute(t,w),u.fromBufferAttribute(t,S),x.subVectors(u,l),v.subVectors(a,l),x.cross(v),d.fromBufferAttribute(r,A),h.fromBufferAttribute(r,w),m.fromBufferAttribute(r,S),d.add(x),h.add(x),m.add(x),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,M=t.count;y<M;y+=3)a.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),x.subVectors(u,l),v.subVectors(a,l),x.cross(v),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(d,h){const m=d.array,x=d.itemSize,v=d.normalized,y=new m.constructor(h.length*x);let M=0,A=0;for(let w=0,S=h.length;w<S;w++){d.isInterleavedBufferAttribute?M=h[w]*d.data.stride+d.offset:M=h[w]*x;for(let _=0;_<x;_++)y[A++]=m[M++]}return new Si(y,x,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ji,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let x=0,v=m.length;x<v;x++){const y=m[x],M=e(y,r);h.push(M)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const m=u[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],x=[];for(let v=0,y=m.length;v<y;v++){const M=m[v];x.push(M.toJSON(e.data))}x.length>0&&(a[h]=x,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const x=a[m];this.setAttribute(m,x.clone(t))}const l=e.morphAttributes;for(const m in l){const x=[],v=l[m];for(let y=0,M=v.length;y<M;y++)x.push(v[y].clone(t));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xg=new rn,Kr=new A0,Ll=new pc,_g=new se,Il=new se,kl=new se,Ul=new se,Pd=new se,Fl=new se,yg=new se,Ol=new se;class ai extends Hn{constructor(e=new Ji,t=new P0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){Fl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const x=d[h],v=l[h];x!==0&&(Pd.fromBufferAttribute(v,e),u?Fl.addScaledVector(Pd,x):Fl.addScaledVector(Pd.sub(t),x))}t.add(Fl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ll.copy(r.boundingSphere),Ll.applyMatrix4(l),Kr.copy(e.ray).recast(e.near),!(Ll.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Ll,_g)===null||Kr.origin.distanceToSquared(_g)>(e.far-e.near)**2))&&(xg.copy(l).invert(),Kr.copy(e.ray).applyMatrix4(xg),!(r.boundingBox!==null&&Kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,y=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let A=0,w=y.length;A<w;A++){const S=y[A],_=u[S.materialIndex],I=Math.max(S.start,M.start),N=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let P=I,z=N;P<z;P+=3){const F=d.getX(P),V=d.getX(P+1),B=d.getX(P+2);a=zl(this,_,e,r,m,x,v,F,V,B),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const A=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let S=A,_=w;S<_;S+=3){const I=d.getX(S),N=d.getX(S+1),P=d.getX(S+2);a=zl(this,u,e,r,m,x,v,I,N,P),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let A=0,w=y.length;A<w;A++){const S=y[A],_=u[S.materialIndex],I=Math.max(S.start,M.start),N=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let P=I,z=N;P<z;P+=3){const F=P,V=P+1,B=P+2;a=zl(this,_,e,r,m,x,v,F,V,B),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const A=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let S=A,_=w;S<_;S+=3){const I=S,N=S+1,P=S+2;a=zl(this,u,e,r,m,x,v,I,N,P),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function DS(s,e,t,r,a,l,u,d){let h;if(e.side===Bn?h=r.intersectTriangle(u,l,a,!0,d):h=r.intersectTriangle(a,l,u,e.side===Dr,d),h===null)return null;Ol.copy(d),Ol.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Ol);return m<t.near||m>t.far?null:{distance:m,point:Ol.clone(),object:s}}function zl(s,e,t,r,a,l,u,d,h,m){s.getVertexPosition(d,Il),s.getVertexPosition(h,kl),s.getVertexPosition(m,Ul);const x=DS(s,e,t,r,Il,kl,Ul,yg);if(x){const v=new se;_i.getBarycoord(yg,Il,kl,Ul,v),a&&(x.uv=_i.getInterpolatedAttribute(a,d,h,m,v,new vt)),l&&(x.uv1=_i.getInterpolatedAttribute(l,d,h,m,v,new vt)),u&&(x.normal=_i.getInterpolatedAttribute(u,d,h,m,v,new se),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:d,b:h,c:m,normal:new se,materialIndex:0};_i.getNormal(Il,kl,Ul,y.normal),x.face=y,x.barycoord=v}return x}class ha extends Ji{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const d=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],m=[],x=[],v=[];let y=0,M=0;A("z","y","x",-1,-1,r,t,e,u,l,0),A("z","y","x",1,-1,r,t,-e,u,l,1),A("x","z","y",1,1,e,r,t,a,u,2),A("x","z","y",1,-1,e,r,-t,a,u,3),A("x","y","z",1,-1,e,t,r,a,l,4),A("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new $i(m,3)),this.setAttribute("normal",new $i(x,3)),this.setAttribute("uv",new $i(v,2));function A(w,S,_,I,N,P,z,F,V,B,D){const R=P/V,j=z/B,Z=P/2,oe=z/2,ie=F/2,fe=V+1,Q=B+1;let pe=0,L=0;const de=new se;for(let ue=0;ue<Q;ue++){const U=ue*j-oe;for(let te=0;te<fe;te++){const me=te*R-Z;de[w]=me*I,de[S]=U*N,de[_]=ie,m.push(de.x,de.y,de.z),de[w]=0,de[S]=0,de[_]=F>0?1:-1,x.push(de.x,de.y,de.z),v.push(te/V),v.push(1-ue/B),pe+=1}}for(let ue=0;ue<B;ue++)for(let U=0;U<V;U++){const te=y+U+fe*ue,me=y+U+fe*(ue+1),Ce=y+(U+1)+fe*(ue+1),ke=y+(U+1)+fe*ue;h.push(te,me,ke),h.push(me,Ce,ke),L+=6}d.addGroup(M,L,D),M+=L,y+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function Pn(s){const e={};for(let t=0;t<s.length;t++){const r=oo(s[t]);for(const a in r)e[a]=r[a]}return e}function NS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function L0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const LS={clone:oo,merge:Pn};var IS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IS,this.fragmentShader=kS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=NS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class uc extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wr=new se,Sg=new vt,Mg=new vt;class xi extends uc{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bf*2*Math.atan(Math.tan(cd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,t){return this.getViewBounds(e,Sg,Mg),t.subVectors(Mg,Sg)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cd*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;l+=u.offsetX*a/h,t-=u.offsetY*r/m,a*=u.width/h,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qs=-90,Ys=1;class US extends Hn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new xi(qs,Ys,e,t);a.layers=this.layers,this.add(a);const l=new xi(qs,Ys,e,t);l.layers=this.layers,this.add(l);const u=new xi(qs,Ys,e,t);u.layers=this.layers,this.add(u);const d=new xi(qs,Ys,e,t);d.layers=this.layers,this.add(d);const h=new xi(qs,Ys,e,t);h.layers=this.layers,this.add(h);const m=new xi(qs,Ys,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,d,h]=t;for(const m of t)this.remove(m);if(e===Ci)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===lc)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,m,x]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,u),e.setRenderTarget(r,2,a),e.render(t,d),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,a),e.render(t,x),e.setRenderTarget(v,y,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class I0 extends Dn{constructor(e=[],t=io,r,a,l,u,d,h,m,x){super(e,t,r,a,l,u,d,h,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class FS extends Nr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new I0(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ha(5,5,5),l=new Qi({name:"CubemapFromEquirect",uniforms:oo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Rr});l.uniforms.tEquirect.value=t;const u=new ai(a,l),d=t.minFilter;return t.minFilter===ss&&(t.minFilter=zn),new US(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}class Bl extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OS={type:"move"};class Dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const w of e.hand.values()){const S=t.getJointPose(w,r),_=this._getHandJoint(m,w);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const x=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=x.position.distanceTo(v.position),M=.02,A=.005;m.inputState.pinching&&y>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(OS)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Bl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Eg extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zS extends Dn{constructor(e=null,t=1,r=1,a,l,u,d,h,m=$n,x=$n,v,y){super(null,u,d,h,m,x,a,l,v,y),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nd=new se,BS=new se,HS=new xt;class ts{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Nd.subVectors(r,t).cross(BS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Nd),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||HS.getNormalMatrix(e),a=this.coplanarPoint(Nd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new pc,VS=new vt(.5,.5),Hl=new se;class k0{constructor(e=new ts,t=new ts,r=new ts,a=new ts,l=new ts,u=new ts){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ci,r=!1){const a=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],x=l[4],v=l[5],y=l[6],M=l[7],A=l[8],w=l[9],S=l[10],_=l[11],I=l[12],N=l[13],P=l[14],z=l[15];if(a[0].setComponents(m-u,M-x,_-A,z-I).normalize(),a[1].setComponents(m+u,M+x,_+A,z+I).normalize(),a[2].setComponents(m+d,M+v,_+w,z+N).normalize(),a[3].setComponents(m-d,M-v,_-w,z-N).normalize(),r)a[4].setComponents(h,y,S,P).normalize(),a[5].setComponents(m-h,M-y,_-S,z-P).normalize();else if(a[4].setComponents(m-h,M-y,_-S,z-P).normalize(),t===Ci)a[5].setComponents(m+h,M+y,_+S,z+P).normalize();else if(t===lc)a[5].setComponents(h,y,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){Zr.center.set(0,0,0);const t=VS.distanceTo(e.center);return Zr.radius=.7071067811865476+t,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Hl.x=a.normal.x>0?e.max.x:e.min.x,Hl.y=a.normal.y>0?e.max.y:e.min.y,Hl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jS extends fa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dc=new se,fc=new se,bg=new rn,Jo=new A0,Vl=new pc,Ld=new se,wg=new se;class GS extends Hn{constructor(e=new Ji,t=new jS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)dc.fromBufferAttribute(t,a-1),fc.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=dc.distanceTo(fc);e.setAttribute("lineDistance",new $i(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vl.copy(r.boundingSphere),Vl.applyMatrix4(a),Vl.radius+=l,e.ray.intersectsSphere(Vl)===!1)return;bg.copy(a).invert(),Jo.copy(e.ray).applyMatrix4(bg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,m=this.isLineSegments?2:1,x=r.index,y=r.attributes.position;if(x!==null){const M=Math.max(0,u.start),A=Math.min(x.count,u.start+u.count);for(let w=M,S=A-1;w<S;w+=m){const _=x.getX(w),I=x.getX(w+1),N=jl(this,e,Jo,h,_,I,w);N&&t.push(N)}if(this.isLineLoop){const w=x.getX(A-1),S=x.getX(M),_=jl(this,e,Jo,h,w,S,A-1);_&&t.push(_)}}else{const M=Math.max(0,u.start),A=Math.min(y.count,u.start+u.count);for(let w=M,S=A-1;w<S;w+=m){const _=jl(this,e,Jo,h,w,w+1,w);_&&t.push(_)}if(this.isLineLoop){const w=jl(this,e,Jo,h,A-1,M,A-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function jl(s,e,t,r,a,l,u){const d=s.geometry.attributes.position;if(dc.fromBufferAttribute(d,a),fc.fromBufferAttribute(d,l),t.distanceSqToSegment(dc,fc,Ld,wg)>r)return;Ld.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(Ld);if(!(m<e.near||m>e.far))return{distance:m,point:wg.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const Tg=new se,Ag=new se;class WS extends GS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let a=0,l=t.count;a<l;a+=2)Tg.fromBufferAttribute(t,a),Ag.fromBufferAttribute(t,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Tg.distanceTo(Ag);e.setAttribute("lineDistance",new $i(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class U0 extends Dn{constructor(e,t,r=ls,a,l,u,d=$n,h=$n,m,x=sa,v=1){if(x!==sa&&x!==oa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:t,depth:v};super(y,a,l,u,d,h,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ih(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class F0 extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class as extends Ji{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,d=Math.floor(r),h=Math.floor(a),m=d+1,x=h+1,v=e/d,y=t/h,M=[],A=[],w=[],S=[];for(let _=0;_<x;_++){const I=_*y-u;for(let N=0;N<m;N++){const P=N*v-l;A.push(P,-I,0),w.push(0,0,1),S.push(N/d),S.push(1-_/h)}}for(let _=0;_<h;_++)for(let I=0;I<d;I++){const N=I+m*_,P=I+m*(_+1),z=I+1+m*(_+1),F=I+1+m*_;M.push(N,P,F),M.push(P,z,F)}this.setIndex(M),this.setAttribute("position",new $i(A,3)),this.setAttribute("normal",new $i(w,3)),this.setAttribute("uv",new $i(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gl extends Qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class XS extends fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qS extends fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class YS extends uc{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=x*this.view.offsetY,h=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $S extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class KS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Cg(s,e,t,r){const a=ZS(r);switch(t){case y0:return s*e;case M0:return s*e/a.components*a.byteLength;case eh:return s*e/a.components*a.byteLength;case E0:return s*e*2/a.components*a.byteLength;case th:return s*e*2/a.components*a.byteLength;case S0:return s*e*3/a.components*a.byteLength;case oi:return s*e*4/a.components*a.byteLength;case nh:return s*e*4/a.components*a.byteLength;case Jl:case ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case tc:case nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hf:case mf:return Math.max(s,16)*Math.max(e,8)/4;case ff:case pf:return Math.max(s,8)*Math.max(e,8)/2;case gf:case vf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _f:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case wf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Af:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Df:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Nf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Lf:case If:case kf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Uf:case Ff:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Of:case zf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ZS(s){switch(s){case Ki:case g0:return{byteLength:1,components:1};case ia:case v0:case ao:return{byteLength:2,components:1};case Qf:case Jf:return{byteLength:2,components:4};case ls:case Zf:case Ai:return{byteLength:4,components:1};case x0:case _0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function O0(){let s=null,e=!1,t=null,r=null;function a(l,u){t(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function QS(s){const e=new WeakMap;function t(d,h){const m=d.array,x=d.usage,v=m.byteLength,y=s.createBuffer();s.bindBuffer(h,y),s.bufferData(h,m,x),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,h,m){const x=h.array,v=h.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,x);else{v.sort((M,A)=>M.start-A.start);let y=0;for(let M=1;M<v.length;M++){const A=v[y],w=v[M];w.start<=A.start+A.count+1?A.count=Math.max(A.count,w.start+w.count-A.start):(++y,v[y]=w)}v.length=y+1;for(let M=0,A=v.length;M<A;M++){const w=v[M];s.bufferSubData(m,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:a,remove:l,update:u}}var JS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e1=`#ifdef USE_ALPHAHASH
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
#endif`,t1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s1=`#ifdef USE_AOMAP
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
#endif`,o1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a1=`#ifdef USE_BATCHING
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
#endif`,l1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,f1=`#ifdef USE_IRIDESCENCE
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
#endif`,h1=`#ifdef USE_BUMPMAP
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
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,S1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,M1=`#define PI 3.141592653589793
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
} // validated`,E1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,b1=`vec3 transformedNormal = objectNormal;
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
#endif`,w1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R1="gl_FragColor = linearToOutputTexel( gl_FragColor );",P1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D1=`#ifdef USE_ENVMAP
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
#endif`,N1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L1=`#ifdef USE_ENVMAP
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
#endif`,I1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k1=`#ifdef USE_ENVMAP
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
#endif`,U1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B1=`#ifdef USE_GRADIENTMAP
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
}`,H1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G1=`uniform bool receiveShadow;
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
#endif`,W1=`#ifdef USE_ENVMAP
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
#endif`,X1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K1=`PhysicalMaterial material;
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
#endif`,Z1=`struct PhysicalMaterial {
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
}`,Q1=`
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
#endif`,J1=`#if defined( RE_IndirectDiffuse )
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
#endif`,eM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lM=`#if defined( USE_POINTS_UV )
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
#endif`,cM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pM=`#ifdef USE_MORPHTARGETS
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
#endif`,mM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SM=`#ifdef USE_NORMALMAP
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
#endif`,MM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,CM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FM=`float getShadowMask() {
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
}`,OM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zM=`#ifdef USE_SKINNING
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
#endif`,BM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HM=`#ifdef USE_SKINNING
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
#endif`,VM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XM=`#ifdef USE_TRANSMISSION
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
#endif`,qM=`#ifdef USE_TRANSMISSION
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
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JM=`uniform sampler2D t2D;
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
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`#include <common>
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
}`,sE=`#if DEPTH_PACKING == 3200
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
}`,oE=`#define DISTANCE
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
}`,aE=`#define DISTANCE
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
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`uniform float scale;
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
}`,dE=`uniform vec3 diffuse;
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
}`,fE=`#include <common>
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
}`,hE=`uniform vec3 diffuse;
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
}`,pE=`#define LAMBERT
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
}`,mE=`#define LAMBERT
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
}`,gE=`#define MATCAP
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
}`,vE=`#define MATCAP
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
}`,xE=`#define NORMAL
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
}`,_E=`#define NORMAL
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
}`,yE=`#define PHONG
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
}`,SE=`#define PHONG
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
}`,ME=`#define STANDARD
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
}`,EE=`#define STANDARD
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
}`,bE=`#define TOON
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
}`,wE=`#define TOON
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
}`,TE=`uniform float size;
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
}`,AE=`uniform vec3 diffuse;
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
}`,CE=`#include <common>
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
}`,RE=`uniform vec3 color;
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
}`,PE=`uniform float rotation;
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
}`,DE=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:JS,alphahash_pars_fragment:e1,alphamap_fragment:t1,alphamap_pars_fragment:n1,alphatest_fragment:i1,alphatest_pars_fragment:r1,aomap_fragment:s1,aomap_pars_fragment:o1,batching_pars_vertex:a1,batching_vertex:l1,begin_vertex:c1,beginnormal_vertex:u1,bsdfs:d1,iridescence_fragment:f1,bumpmap_pars_fragment:h1,clipping_planes_fragment:p1,clipping_planes_pars_fragment:m1,clipping_planes_pars_vertex:g1,clipping_planes_vertex:v1,color_fragment:x1,color_pars_fragment:_1,color_pars_vertex:y1,color_vertex:S1,common:M1,cube_uv_reflection_fragment:E1,defaultnormal_vertex:b1,displacementmap_pars_vertex:w1,displacementmap_vertex:T1,emissivemap_fragment:A1,emissivemap_pars_fragment:C1,colorspace_fragment:R1,colorspace_pars_fragment:P1,envmap_fragment:D1,envmap_common_pars_fragment:N1,envmap_pars_fragment:L1,envmap_pars_vertex:I1,envmap_physical_pars_fragment:W1,envmap_vertex:k1,fog_vertex:U1,fog_pars_vertex:F1,fog_fragment:O1,fog_pars_fragment:z1,gradientmap_pars_fragment:B1,lightmap_pars_fragment:H1,lights_lambert_fragment:V1,lights_lambert_pars_fragment:j1,lights_pars_begin:G1,lights_toon_fragment:X1,lights_toon_pars_fragment:q1,lights_phong_fragment:Y1,lights_phong_pars_fragment:$1,lights_physical_fragment:K1,lights_physical_pars_fragment:Z1,lights_fragment_begin:Q1,lights_fragment_maps:J1,lights_fragment_end:eM,logdepthbuf_fragment:tM,logdepthbuf_pars_fragment:nM,logdepthbuf_pars_vertex:iM,logdepthbuf_vertex:rM,map_fragment:sM,map_pars_fragment:oM,map_particle_fragment:aM,map_particle_pars_fragment:lM,metalnessmap_fragment:cM,metalnessmap_pars_fragment:uM,morphinstance_vertex:dM,morphcolor_vertex:fM,morphnormal_vertex:hM,morphtarget_pars_vertex:pM,morphtarget_vertex:mM,normal_fragment_begin:gM,normal_fragment_maps:vM,normal_pars_fragment:xM,normal_pars_vertex:_M,normal_vertex:yM,normalmap_pars_fragment:SM,clearcoat_normal_fragment_begin:MM,clearcoat_normal_fragment_maps:EM,clearcoat_pars_fragment:bM,iridescence_pars_fragment:wM,opaque_fragment:TM,packing:AM,premultiplied_alpha_fragment:CM,project_vertex:RM,dithering_fragment:PM,dithering_pars_fragment:DM,roughnessmap_fragment:NM,roughnessmap_pars_fragment:LM,shadowmap_pars_fragment:IM,shadowmap_pars_vertex:kM,shadowmap_vertex:UM,shadowmask_pars_fragment:FM,skinbase_vertex:OM,skinning_pars_vertex:zM,skinning_vertex:BM,skinnormal_vertex:HM,specularmap_fragment:VM,specularmap_pars_fragment:jM,tonemapping_fragment:GM,tonemapping_pars_fragment:WM,transmission_fragment:XM,transmission_pars_fragment:qM,uv_pars_fragment:YM,uv_pars_vertex:$M,uv_vertex:KM,worldpos_vertex:ZM,background_vert:QM,background_frag:JM,backgroundCube_vert:eE,backgroundCube_frag:tE,cube_vert:nE,cube_frag:iE,depth_vert:rE,depth_frag:sE,distanceRGBA_vert:oE,distanceRGBA_frag:aE,equirect_vert:lE,equirect_frag:cE,linedashed_vert:uE,linedashed_frag:dE,meshbasic_vert:fE,meshbasic_frag:hE,meshlambert_vert:pE,meshlambert_frag:mE,meshmatcap_vert:gE,meshmatcap_frag:vE,meshnormal_vert:xE,meshnormal_frag:_E,meshphong_vert:yE,meshphong_frag:SE,meshphysical_vert:ME,meshphysical_frag:EE,meshtoon_vert:bE,meshtoon_frag:wE,points_vert:TE,points_frag:AE,shadow_vert:CE,shadow_frag:RE,sprite_vert:PE,sprite_frag:DE},Le={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Ti={basic:{uniforms:Pn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Pn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Lt(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Pn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Pn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Pn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Lt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Pn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Pn([Le.points,Le.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Pn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Pn([Le.common,Le.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Pn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Pn([Le.sprite,Le.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:Pn([Le.common,Le.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:Pn([Le.lights,Le.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ti.physical={uniforms:Pn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Wl={r:0,b:0,g:0},Qr=new Zi,NE=new rn;function LE(s,e,t,r,a,l,u){const d=new Lt(0);let h=l===!0?0:1,m,x,v=null,y=0,M=null;function A(N){let P=N.isScene===!0?N.background:null;return P&&P.isTexture&&(P=(N.backgroundBlurriness>0?t:e).get(P)),P}function w(N){let P=!1;const z=A(N);z===null?_(d,h):z&&z.isColor&&(_(z,1),P=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(N,P){const z=A(P);z&&(z.isCubeTexture||z.mapping===hc)?(x===void 0&&(x=new ai(new ha(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:oo(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(F,V,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(x)),Qr.copy(P.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),x.material.uniforms.envMap.value=z,x.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(NE.makeRotationFromEuler(Qr)),x.material.toneMapped=Nt.getTransfer(z.colorSpace)!==Bt,(v!==z||y!==z.version||M!==s.toneMapping)&&(x.material.needsUpdate=!0,v=z,y=z.version,M=s.toneMapping),x.layers.enableAll(),N.unshift(x,x.geometry,x.material,0,0,null)):z&&z.isTexture&&(m===void 0&&(m=new ai(new as(2,2),new Qi({name:"BackgroundMaterial",uniforms:oo(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=z,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Nt.getTransfer(z.colorSpace)!==Bt,z.matrixAutoUpdate===!0&&z.updateMatrix(),m.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||y!==z.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,v=z,y=z.version,M=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function _(N,P){N.getRGB(Wl,L0(s)),r.buffers.color.setClear(Wl.r,Wl.g,Wl.b,P,u)}function I(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,P=1){d.set(N),h=P,_(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,_(d,h)},render:w,addToRenderList:S,dispose:I}}function IE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=y(null);let l=a,u=!1;function d(R,j,Z,oe,ie){let fe=!1;const Q=v(oe,Z,j);l!==Q&&(l=Q,m(l.object)),fe=M(R,oe,Z,ie),fe&&A(R,oe,Z,ie),ie!==null&&e.update(ie,s.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,P(R,j,Z,oe),ie!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function h(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function x(R){return s.deleteVertexArray(R)}function v(R,j,Z){const oe=Z.wireframe===!0;let ie=r[R.id];ie===void 0&&(ie={},r[R.id]=ie);let fe=ie[j.id];fe===void 0&&(fe={},ie[j.id]=fe);let Q=fe[oe];return Q===void 0&&(Q=y(h()),fe[oe]=Q),Q}function y(R){const j=[],Z=[],oe=[];for(let ie=0;ie<t;ie++)j[ie]=0,Z[ie]=0,oe[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:Z,attributeDivisors:oe,object:R,attributes:{},index:null}}function M(R,j,Z,oe){const ie=l.attributes,fe=j.attributes;let Q=0;const pe=Z.getAttributes();for(const L in pe)if(pe[L].location>=0){const ue=ie[L];let U=fe[L];if(U===void 0&&(L==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),L==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),ue===void 0||ue.attribute!==U||U&&ue.data!==U.data)return!0;Q++}return l.attributesNum!==Q||l.index!==oe}function A(R,j,Z,oe){const ie={},fe=j.attributes;let Q=0;const pe=Z.getAttributes();for(const L in pe)if(pe[L].location>=0){let ue=fe[L];ue===void 0&&(L==="instanceMatrix"&&R.instanceMatrix&&(ue=R.instanceMatrix),L==="instanceColor"&&R.instanceColor&&(ue=R.instanceColor));const U={};U.attribute=ue,ue&&ue.data&&(U.data=ue.data),ie[L]=U,Q++}l.attributes=ie,l.attributesNum=Q,l.index=oe}function w(){const R=l.newAttributes;for(let j=0,Z=R.length;j<Z;j++)R[j]=0}function S(R){_(R,0)}function _(R,j){const Z=l.newAttributes,oe=l.enabledAttributes,ie=l.attributeDivisors;Z[R]=1,oe[R]===0&&(s.enableVertexAttribArray(R),oe[R]=1),ie[R]!==j&&(s.vertexAttribDivisor(R,j),ie[R]=j)}function I(){const R=l.newAttributes,j=l.enabledAttributes;for(let Z=0,oe=j.length;Z<oe;Z++)j[Z]!==R[Z]&&(s.disableVertexAttribArray(Z),j[Z]=0)}function N(R,j,Z,oe,ie,fe,Q){Q===!0?s.vertexAttribIPointer(R,j,Z,ie,fe):s.vertexAttribPointer(R,j,Z,oe,ie,fe)}function P(R,j,Z,oe){w();const ie=oe.attributes,fe=Z.getAttributes(),Q=j.defaultAttributeValues;for(const pe in fe){const L=fe[pe];if(L.location>=0){let de=ie[pe];if(de===void 0&&(pe==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),pe==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){const ue=de.normalized,U=de.itemSize,te=e.get(de);if(te===void 0)continue;const me=te.buffer,Ce=te.type,ke=te.bytesPerElement,J=Ce===s.INT||Ce===s.UNSIGNED_INT||de.gpuType===Zf;if(de.isInterleavedBufferAttribute){const re=de.data,xe=re.stride,Re=de.offset;if(re.isInstancedInterleavedBuffer){for(let De=0;De<L.locationSize;De++)_(L.location+De,re.meshPerAttribute);R.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let De=0;De<L.locationSize;De++)S(L.location+De);s.bindBuffer(s.ARRAY_BUFFER,me);for(let De=0;De<L.locationSize;De++)N(L.location+De,U/L.locationSize,Ce,ue,xe*ke,(Re+U/L.locationSize*De)*ke,J)}else{if(de.isInstancedBufferAttribute){for(let re=0;re<L.locationSize;re++)_(L.location+re,de.meshPerAttribute);R.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let re=0;re<L.locationSize;re++)S(L.location+re);s.bindBuffer(s.ARRAY_BUFFER,me);for(let re=0;re<L.locationSize;re++)N(L.location+re,U/L.locationSize,Ce,ue,U*ke,U/L.locationSize*re*ke,J)}}else if(Q!==void 0){const ue=Q[pe];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(L.location,ue);break;case 3:s.vertexAttrib3fv(L.location,ue);break;case 4:s.vertexAttrib4fv(L.location,ue);break;default:s.vertexAttrib1fv(L.location,ue)}}}}I()}function z(){B();for(const R in r){const j=r[R];for(const Z in j){const oe=j[Z];for(const ie in oe)x(oe[ie].object),delete oe[ie];delete j[Z]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const j=r[R.id];for(const Z in j){const oe=j[Z];for(const ie in oe)x(oe[ie].object),delete oe[ie];delete j[Z]}delete r[R.id]}function V(R){for(const j in r){const Z=r[j];if(Z[R.id]===void 0)continue;const oe=Z[R.id];for(const ie in oe)x(oe[ie].object),delete oe[ie];delete Z[R.id]}}function B(){D(),u=!0,l!==a&&(l=a,m(l.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:B,resetDefaultState:D,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfProgram:V,initAttributes:w,enableAttribute:S,disableUnusedAttributes:I}}function kE(s,e,t){let r;function a(m){r=m}function l(m,x){s.drawArrays(r,m,x),t.update(x,r,1)}function u(m,x,v){v!==0&&(s.drawArraysInstanced(r,m,x,v),t.update(x,r,v))}function d(m,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,x,0,v);let M=0;for(let A=0;A<v;A++)M+=x[A];t.update(M,r,1)}function h(m,x,v,y){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<m.length;A++)u(m[A],x[A],y[A]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,x,0,y,0,v);let A=0;for(let w=0;w<v;w++)A+=x[w]*y[w];t.update(A,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function UE(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(V){return!(V!==oi&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(V){const B=V===ao&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==Ki&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Ai&&!B)}function h(V){if(V==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const x=h(m);x!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const v=t.logarithmicDepthBuffer===!0,y=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=A>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:A,maxTextureSize:w,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:I,maxVaryings:N,maxFragmentUniforms:P,vertexTextures:z,maxSamples:F}}function FE(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new ts,d=new xt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const M=v.length!==0||y||r!==0||a;return a=y,r=v.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=x(v,y,0)},this.setState=function(v,y,M){const A=v.clippingPlanes,w=v.clipIntersection,S=v.clipShadows,_=s.get(v);if(!a||A===null||A.length===0||l&&!S)l?x(null):m();else{const I=l?0:r,N=I*4;let P=_.clippingState||null;h.value=P,P=x(A,y,N,M);for(let z=0;z!==N;++z)P[z]=t[z];_.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,y,M,A){const w=v!==null?v.length:0;let S=null;if(w!==0){if(S=h.value,A!==!0||S===null){const _=M+w*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(S===null||S.length<_)&&(S=new Float32Array(_));for(let N=0,P=M;N!==w;++N,P+=4)u.copy(v[N]).applyMatrix4(I,d),u.normal.toArray(S,P),S[P+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function OE(s){let e=new WeakMap;function t(u,d){return d===lf?u.mapping=io:d===cf&&(u.mapping=ro),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===lf||d===cf)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new FS(h.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",a),t(m.texture,u.mapping)}else return null}}return u}function a(u){const d=u.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Qs=4,Rg=[.125,.215,.35,.446,.526,.582],rs=20,Id=new YS,Pg=new Lt;let kd=null,Ud=0,Fd=0,Od=!1;const ns=(1+Math.sqrt(5))/2,$s=1/ns,Dg=[new se(-ns,$s,0),new se(ns,$s,0),new se(-$s,0,ns),new se($s,0,ns),new se(0,ns,-$s),new se(0,ns,$s),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)],zE=new se;class Ng{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100,l={}){const{size:u=256,position:d=zE}=l;kd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kd,Ud,Fd),this._renderer.xr.enabled=Od,e.scissorTest=!1,Xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===io||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ao,format:oi,colorSpace:so,depthBuffer:!1},a=Lg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lg(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BE(l)),this._blurMaterial=HE(l,e,t)}return a}_compileMaterial(e){const t=new ai(this._lodPlanes[0],e);this._renderer.compile(t,Id)}_sceneToCubeUV(e,t,r,a,l){const h=new xi(90,1,t,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,M=v.toneMapping;v.getClearColor(Pg),v.toneMapping=Pr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(a),v.clearDepth(),v.setRenderTarget(null));const w=new P0({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),S=new ai(new ha,w);let _=!1;const I=e.background;I?I.isColor&&(w.color.copy(I),e.background=null,_=!0):(w.color.copy(Pg),_=!0);for(let N=0;N<6;N++){const P=N%3;P===0?(h.up.set(0,m[N],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+x[N],l.y,l.z)):P===1?(h.up.set(0,0,m[N]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+x[N],l.z)):(h.up.set(0,m[N],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+x[N]));const z=this._cubeSize;Xl(a,P*z,N>2?z:0,z,z),v.setRenderTarget(a),_&&v.render(S,h),v.render(e,h)}S.geometry.dispose(),S.material.dispose(),v.toneMapping=M,v.autoClear=y,e.background=I}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===io||e.mapping===ro;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ig());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new ai(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;Xl(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,Id)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Dg[(a-l-1)%Dg.length];this._blur(e,l-1,l,u,d)}t.autoClear=r}_blur(e,t,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,u,d){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,v=new ai(this._lodPlanes[a],m),y=m.uniforms,M=this._sizeLods[r]-1,A=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*rs-1),w=l/A,S=isFinite(l)?1+Math.floor(x*w):rs;S>rs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${rs}`);const _=[];let I=0;for(let V=0;V<rs;++V){const B=V/w,D=Math.exp(-B*B/2);_.push(D),V===0?I+=D:V<S&&(I+=2*D)}for(let V=0;V<_.length;V++)_[V]=_[V]/I;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:N}=this;y.dTheta.value=A,y.mipInt.value=N-r;const P=this._sizeLods[a],z=3*P*(a>N-Qs?a-N+Qs:0),F=4*(this._cubeSize-P);Xl(t,z,F,3*P,2*P),h.setRenderTarget(t),h.render(v,Id)}}function BE(s){const e=[],t=[],r=[];let a=s;const l=s-Qs+1+Rg.length;for(let u=0;u<l;u++){const d=Math.pow(2,a);t.push(d);let h=1/d;u>s-Qs?h=Rg[u-s+Qs-1]:u===0&&(h=0),r.push(h);const m=1/(d-2),x=-m,v=1+m,y=[x,x,v,x,v,v,x,x,v,v,x,v],M=6,A=6,w=3,S=2,_=1,I=new Float32Array(w*A*M),N=new Float32Array(S*A*M),P=new Float32Array(_*A*M);for(let F=0;F<M;F++){const V=F%3*2/3-1,B=F>2?0:-1,D=[V,B,0,V+2/3,B,0,V+2/3,B+1,0,V,B,0,V+2/3,B+1,0,V,B+1,0];I.set(D,w*A*F),N.set(y,S*A*F);const R=[F,F,F,F,F,F];P.set(R,_*A*F)}const z=new Ji;z.setAttribute("position",new Si(I,w)),z.setAttribute("uv",new Si(N,S)),z.setAttribute("faceIndex",new Si(P,_)),e.push(z),a>Qs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Lg(s,e,t){const r=new Nr(s,e,t);return r.texture.mapping=hc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Xl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function HE(s,e,t){const r=new Float32Array(rs),a=new se(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:rh(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Ig(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function kg(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function rh(){return`

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
	`}function VE(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===lf||h===cf,x=h===io||h===ro;if(m||x){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new Ng(s)),v=m?t.fromEquirectangular(d,v):t.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return m&&M&&M.height>0||x&&M&&a(M)?(t===null&&(t=new Ng(s)),v=m?t.fromEquirectangular(d):t.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function a(d){let h=0;const m=6;for(let x=0;x<m;x++)d[x]!==void 0&&h++;return h===m}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function jE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&aa("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function GE(s,e,t,r){const a={},l=new WeakMap;function u(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const A in y.attributes)e.remove(y.attributes[A]);y.removeEventListener("dispose",u),delete a[y.id];const M=l.get(y);M&&(e.remove(M),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(v,y){return a[y.id]===!0||(y.addEventListener("dispose",u),a[y.id]=!0,t.memory.geometries++),y}function h(v){const y=v.attributes;for(const M in y)e.update(y[M],s.ARRAY_BUFFER)}function m(v){const y=[],M=v.index,A=v.attributes.position;let w=0;if(M!==null){const I=M.array;w=M.version;for(let N=0,P=I.length;N<P;N+=3){const z=I[N+0],F=I[N+1],V=I[N+2];y.push(z,F,F,V,V,z)}}else if(A!==void 0){const I=A.array;w=A.version;for(let N=0,P=I.length/3-1;N<P;N+=3){const z=N+0,F=N+1,V=N+2;y.push(z,F,F,V,V,z)}}else return;const S=new(w0(y)?N0:D0)(y,1);S.version=w;const _=l.get(v);_&&e.remove(_),l.set(v,S)}function x(v){const y=l.get(v);if(y){const M=v.index;M!==null&&y.version<M.version&&m(v)}else m(v);return l.get(v)}return{get:d,update:h,getWireframeAttribute:x}}function WE(s,e,t){let r;function a(y){r=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function h(y,M){s.drawElements(r,M,l,y*u),t.update(M,r,1)}function m(y,M,A){A!==0&&(s.drawElementsInstanced(r,M,l,y*u,A),t.update(M,r,A))}function x(y,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,y,0,A);let S=0;for(let _=0;_<A;_++)S+=M[_];t.update(S,r,1)}function v(y,M,A,w){if(A===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)m(y[_]/u,M[_],w[_]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,l,y,0,w,0,A);let _=0;for(let I=0;I<A;I++)_+=M[I]*w[I];t.update(_,r,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function XE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function qE(s,e,t){const r=new WeakMap,a=new Zt;function l(u,d,h){const m=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let y=r.get(d);if(y===void 0||y.count!==v){let D=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",D)};y!==void 0&&y.texture.dispose();const M=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],_=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let N=0;M===!0&&(N=1),A===!0&&(N=2),w===!0&&(N=3);let P=d.attributes.position.count*N,z=1;P>e.maxTextureSize&&(z=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const F=new Float32Array(P*z*4*v),V=new T0(F,P,z,v);V.type=Ai,V.needsUpdate=!0;const B=N*4;for(let R=0;R<v;R++){const j=S[R],Z=_[R],oe=I[R],ie=P*z*4*R;for(let fe=0;fe<j.count;fe++){const Q=fe*B;M===!0&&(a.fromBufferAttribute(j,fe),F[ie+Q+0]=a.x,F[ie+Q+1]=a.y,F[ie+Q+2]=a.z,F[ie+Q+3]=0),A===!0&&(a.fromBufferAttribute(Z,fe),F[ie+Q+4]=a.x,F[ie+Q+5]=a.y,F[ie+Q+6]=a.z,F[ie+Q+7]=0),w===!0&&(a.fromBufferAttribute(oe,fe),F[ie+Q+8]=a.x,F[ie+Q+9]=a.y,F[ie+Q+10]=a.z,F[ie+Q+11]=oe.itemSize===4?a.w:1)}}y={count:v,texture:V,size:new vt(P,z)},r.set(d,y),d.addEventListener("dispose",D)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let w=0;w<m.length;w++)M+=m[w];const A=d.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",A),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function YE(s,e,t,r){let a=new WeakMap;function l(h){const m=r.render.frame,x=h.geometry,v=e.get(h,x);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==m&&(y.update(),a.set(y,m))}return v}function u(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:u}}const z0=new Dn,Ug=new U0(1,1),B0=new T0,H0=new yS,V0=new I0,Fg=[],Og=[],zg=new Float32Array(16),Bg=new Float32Array(9),Hg=new Float32Array(4);function co(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Fg[a];if(l===void 0&&(l=new Float32Array(a),Fg[a]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function cn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function un(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function mc(s,e){let t=Og[e];t===void 0&&(t=new Int32Array(e),Og[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function $E(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function KE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2fv(this.addr,e),un(t,e)}}function ZE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;s.uniform3fv(this.addr,e),un(t,e)}}function QE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4fv(this.addr,e),un(t,e)}}function JE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(cn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,r))return;Hg.set(r),s.uniformMatrix2fv(this.addr,!1,Hg),un(t,r)}}function eb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(cn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,r))return;Bg.set(r),s.uniformMatrix3fv(this.addr,!1,Bg),un(t,r)}}function tb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(cn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,r))return;zg.set(r),s.uniformMatrix4fv(this.addr,!1,zg),un(t,r)}}function nb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ib(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2iv(this.addr,e),un(t,e)}}function rb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3iv(this.addr,e),un(t,e)}}function sb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4iv(this.addr,e),un(t,e)}}function ob(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ab(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2uiv(this.addr,e),un(t,e)}}function lb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3uiv(this.addr,e),un(t,e)}}function cb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4uiv(this.addr,e),un(t,e)}}function ub(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Ug.compareFunction=b0,l=Ug):l=z0,t.setTexture2D(e||l,a)}function db(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||H0,a)}function fb(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||V0,a)}function hb(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||B0,a)}function pb(s){switch(s){case 5126:return $E;case 35664:return KE;case 35665:return ZE;case 35666:return QE;case 35674:return JE;case 35675:return eb;case 35676:return tb;case 5124:case 35670:return nb;case 35667:case 35671:return ib;case 35668:case 35672:return rb;case 35669:case 35673:return sb;case 5125:return ob;case 36294:return ab;case 36295:return lb;case 36296:return cb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return fb;case 36289:case 36303:case 36311:case 36292:return hb}}function mb(s,e){s.uniform1fv(this.addr,e)}function gb(s,e){const t=co(e,this.size,2);s.uniform2fv(this.addr,t)}function vb(s,e){const t=co(e,this.size,3);s.uniform3fv(this.addr,t)}function xb(s,e){const t=co(e,this.size,4);s.uniform4fv(this.addr,t)}function _b(s,e){const t=co(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function yb(s,e){const t=co(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Sb(s,e){const t=co(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Mb(s,e){s.uniform1iv(this.addr,e)}function Eb(s,e){s.uniform2iv(this.addr,e)}function bb(s,e){s.uniform3iv(this.addr,e)}function wb(s,e){s.uniform4iv(this.addr,e)}function Tb(s,e){s.uniform1uiv(this.addr,e)}function Ab(s,e){s.uniform2uiv(this.addr,e)}function Cb(s,e){s.uniform3uiv(this.addr,e)}function Rb(s,e){s.uniform4uiv(this.addr,e)}function Pb(s,e,t){const r=this.cache,a=e.length,l=mc(t,a);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||z0,l[u])}function Db(s,e,t){const r=this.cache,a=e.length,l=mc(t,a);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||H0,l[u])}function Nb(s,e,t){const r=this.cache,a=e.length,l=mc(t,a);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||V0,l[u])}function Lb(s,e,t){const r=this.cache,a=e.length,l=mc(t,a);cn(r,l)||(s.uniform1iv(this.addr,l),un(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||B0,l[u])}function Ib(s){switch(s){case 5126:return mb;case 35664:return gb;case 35665:return vb;case 35666:return xb;case 35674:return _b;case 35675:return yb;case 35676:return Sb;case 5124:case 35670:return Mb;case 35667:case 35671:return Eb;case 35668:case 35672:return bb;case 35669:case 35673:return wb;case 5125:return Tb;case 36294:return Ab;case 36295:return Cb;case 36296:return Rb;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Nb;case 36289:case 36303:case 36311:case 36292:return Lb}}class kb{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=pb(t.type)}}class Ub{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ib(t.type)}}class Fb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const d=a[l];d.setValue(e,t[d.id],r)}}}const zd=/(\w+)(\])?(\[|\.)?/g;function Vg(s,e){s.seq.push(e),s.map[e.id]=e}function Ob(s,e,t){const r=s.name,a=r.length;for(zd.lastIndex=0;;){const l=zd.exec(r),u=zd.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&u+2===a){Vg(t,m===void 0?new kb(d,s,e):new Ub(d,s,e));break}else{let v=t.map[d];v===void 0&&(v=new Fb(d),Vg(t,v)),t=v}}}class ic{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),u=e.getUniformLocation(t,l.name);Ob(l,u,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const d=t[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function jg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const zb=37297;let Bb=0;function Hb(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const Gg=new xt;function Vb(s){Nt._getMatrix(Gg,Nt.workingColorSpace,s);const e=`mat3( ${Gg.elements.map(t=>t.toFixed(4))} )`;switch(Nt.getTransfer(s)){case ac:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Wg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+Hb(s.getShaderSource(e),d)}else return l}function jb(s,e){const t=Vb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gb(s,e){let t;switch(e){case qy:t="Linear";break;case Yy:t="Reinhard";break;case $y:t="Cineon";break;case Ky:t="ACESFilmic";break;case Qy:t="AgX";break;case Jy:t="Neutral";break;case Zy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ql=new se;function Wb(){Nt.getLuminanceCoefficients(ql);const s=ql.x.toFixed(4),e=ql.y.toFixed(4),t=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function qb(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Yb(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function na(s){return s!==""}function Xg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $b=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hf(s){return s.replace($b,Zb)}const Kb=new Map;function Zb(s,e){let t=_t[e];if(t===void 0){const r=Kb.get(e);if(r!==void 0)t=_t[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Hf(t)}const Qb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yg(s){return s.replace(Qb,Jb)}function Jb(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function $g(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function ew(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===h0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ty?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function tw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case io:case ro:e="ENVMAP_TYPE_CUBE";break;case hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function iw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case p0:e="ENVMAP_BLENDING_MULTIPLY";break;case Wy:e="ENVMAP_BLENDING_MIX";break;case Xy:e="ENVMAP_BLENDING_ADD";break}return e}function rw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function sw(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const h=ew(t),m=tw(t),x=nw(t),v=iw(t),y=rw(t),M=Xb(t),A=qb(l),w=a.createProgram();let S,_,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(na).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A].filter(na).join(`
`),_.length>0&&(_+=`
`)):(S=[$g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),_=[$g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,A,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pr?"#define TONE_MAPPING":"",t.toneMapping!==Pr?_t.tonemapping_pars_fragment:"",t.toneMapping!==Pr?Gb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,jb("linearToOutputTexel",t.outputColorSpace),Wb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),u=Hf(u),u=Xg(u,t),u=qg(u,t),d=Hf(d),d=Xg(d,t),d=qg(d,t),u=Yg(u),d=Yg(d),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===sg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=I+S+u,P=I+_+d,z=jg(a,a.VERTEX_SHADER,N),F=jg(a,a.FRAGMENT_SHADER,P);a.attachShader(w,z),a.attachShader(w,F),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function V(j){if(s.debug.checkShaderErrors){const Z=a.getProgramInfoLog(w)||"",oe=a.getShaderInfoLog(z)||"",ie=a.getShaderInfoLog(F)||"",fe=Z.trim(),Q=oe.trim(),pe=ie.trim();let L=!0,de=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(L=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,w,z,F);else{const ue=Wg(a,z,"vertex"),U=Wg(a,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+fe+`
`+ue+`
`+U)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(Q===""||pe==="")&&(de=!1);de&&(j.diagnostics={runnable:L,programLog:fe,vertexShader:{log:Q,prefix:S},fragmentShader:{log:pe,prefix:_}})}a.deleteShader(z),a.deleteShader(F),B=new ic(a,w),D=Yb(a,w)}let B;this.getUniforms=function(){return B===void 0&&V(this),B};let D;this.getAttributes=function(){return D===void 0&&V(this),D};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(w,zb)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bb++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=z,this.fragmentShader=F,this}let ow=0;class aw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new lw(e),t.set(e,r)),r}}class lw{constructor(e){this.id=ow++,this.code=e,this.usedTimes=0}}function cw(s,e,t,r,a,l,u){const d=new C0,h=new aw,m=new Set,x=[],v=a.logarithmicDepthBuffer,y=a.vertexTextures;let M=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(D){return m.add(D),D===0?"uv":`uv${D}`}function S(D,R,j,Z,oe){const ie=Z.fog,fe=oe.geometry,Q=D.isMeshStandardMaterial?Z.environment:null,pe=(D.isMeshStandardMaterial?t:e).get(D.envMap||Q),L=pe&&pe.mapping===hc?pe.image.height:null,de=A[D.type];D.precision!==null&&(M=a.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const ue=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=ue!==void 0?ue.length:0;let te=0;fe.morphAttributes.position!==void 0&&(te=1),fe.morphAttributes.normal!==void 0&&(te=2),fe.morphAttributes.color!==void 0&&(te=3);let me,Ce,ke,J;if(de){const Ct=Ti[de];me=Ct.vertexShader,Ce=Ct.fragmentShader}else me=D.vertexShader,Ce=D.fragmentShader,h.update(D),ke=h.getVertexShaderID(D),J=h.getFragmentShaderID(D);const re=s.getRenderTarget(),xe=s.state.buffers.depth.getReversed(),Re=oe.isInstancedMesh===!0,De=oe.isBatchedMesh===!0,mt=!!D.map,jt=!!D.matcap,O=!!pe,It=!!D.aoMap,ut=!!D.lightMap,nt=!!D.bumpMap,He=!!D.normalMap,At=!!D.displacementMap,ze=!!D.emissiveMap,dt=!!D.metalnessMap,Ot=!!D.roughnessMap,it=D.anisotropy>0,E=D.clearcoat>0,b=D.dispersion>0,G=D.iridescence>0,ee=D.sheen>0,he=D.transmission>0,le=it&&!!D.anisotropyMap,qe=E&&!!D.clearcoatMap,ye=E&&!!D.clearcoatNormalMap,Ve=E&&!!D.clearcoatRoughnessMap,Qe=G&&!!D.iridescenceMap,we=G&&!!D.iridescenceThicknessMap,Ie=ee&&!!D.sheenColorMap,at=ee&&!!D.sheenRoughnessMap,Ke=!!D.specularMap,Pe=!!D.specularColorMap,gt=!!D.specularIntensityMap,W=he&&!!D.transmissionMap,Ee=he&&!!D.thicknessMap,Ae=!!D.gradientMap,Ue=!!D.alphaMap,Me=D.alphaTest>0,ge=!!D.alphaHash,Ye=!!D.extensions;let pt=Pr;D.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(pt=s.toneMapping);const Ut={shaderID:de,shaderType:D.type,shaderName:D.name,vertexShader:me,fragmentShader:Ce,defines:D.defines,customVertexShaderID:ke,customFragmentShaderID:J,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:De,batchingColor:De&&oe._colorsTexture!==null,instancing:Re,instancingColor:Re&&oe.instanceColor!==null,instancingMorph:Re&&oe.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:so,alphaToCoverage:!!D.alphaToCoverage,map:mt,matcap:jt,envMap:O,envMapMode:O&&pe.mapping,envMapCubeUVHeight:L,aoMap:It,lightMap:ut,bumpMap:nt,normalMap:He,displacementMap:y&&At,emissiveMap:ze,normalMapObjectSpace:He&&D.normalMapType===rS,normalMapTangentSpace:He&&D.normalMapType===iS,metalnessMap:dt,roughnessMap:Ot,anisotropy:it,anisotropyMap:le,clearcoat:E,clearcoatMap:qe,clearcoatNormalMap:ye,clearcoatRoughnessMap:Ve,dispersion:b,iridescence:G,iridescenceMap:Qe,iridescenceThicknessMap:we,sheen:ee,sheenColorMap:Ie,sheenRoughnessMap:at,specularMap:Ke,specularColorMap:Pe,specularIntensityMap:gt,transmission:he,transmissionMap:W,thicknessMap:Ee,gradientMap:Ae,opaque:D.transparent===!1&&D.blending===eo&&D.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Me,alphaHash:ge,combine:D.combine,mapUv:mt&&w(D.map.channel),aoMapUv:It&&w(D.aoMap.channel),lightMapUv:ut&&w(D.lightMap.channel),bumpMapUv:nt&&w(D.bumpMap.channel),normalMapUv:He&&w(D.normalMap.channel),displacementMapUv:At&&w(D.displacementMap.channel),emissiveMapUv:ze&&w(D.emissiveMap.channel),metalnessMapUv:dt&&w(D.metalnessMap.channel),roughnessMapUv:Ot&&w(D.roughnessMap.channel),anisotropyMapUv:le&&w(D.anisotropyMap.channel),clearcoatMapUv:qe&&w(D.clearcoatMap.channel),clearcoatNormalMapUv:ye&&w(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&w(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&w(D.iridescenceMap.channel),iridescenceThicknessMapUv:we&&w(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&w(D.sheenColorMap.channel),sheenRoughnessMapUv:at&&w(D.sheenRoughnessMap.channel),specularMapUv:Ke&&w(D.specularMap.channel),specularColorMapUv:Pe&&w(D.specularColorMap.channel),specularIntensityMapUv:gt&&w(D.specularIntensityMap.channel),transmissionMapUv:W&&w(D.transmissionMap.channel),thicknessMapUv:Ee&&w(D.thicknessMap.channel),alphaMapUv:Ue&&w(D.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(He||it),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!fe.attributes.uv&&(mt||Ue),fog:!!ie,useFog:D.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:xe,skinning:oe.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:pt,decodeVideoTexture:mt&&D.map.isVideoTexture===!0&&Nt.getTransfer(D.map.colorSpace)===Bt,decodeVideoTextureEmissive:ze&&D.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(D.emissiveMap.colorSpace)===Bt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===qi,flipSided:D.side===Bn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ye&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&D.extensions.multiDraw===!0||De)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ut.vertexUv1s=m.has(1),Ut.vertexUv2s=m.has(2),Ut.vertexUv3s=m.has(3),m.clear(),Ut}function _(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const j in D.defines)R.push(j),R.push(D.defines[j]);return D.isRawShaderMaterial===!1&&(I(R,D),N(R,D),R.push(s.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function I(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function N(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function P(D){const R=A[D.type];let j;if(R){const Z=Ti[R];j=LS.clone(Z.uniforms)}else j=D.uniforms;return j}function z(D,R){let j;for(let Z=0,oe=x.length;Z<oe;Z++){const ie=x[Z];if(ie.cacheKey===R){j=ie,++j.usedTimes;break}}return j===void 0&&(j=new sw(s,R,D,l),x.push(j)),j}function F(D){if(--D.usedTimes===0){const R=x.indexOf(D);x[R]=x[x.length-1],x.pop(),D.destroy()}}function V(D){h.remove(D)}function B(){h.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:P,acquireProgram:z,releaseProgram:F,releaseShaderCache:V,programs:x,dispose:B}}function uw(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function a(u,d,h){s.get(u)[d]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function dw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Kg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Zg(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(v,y,M,A,w,S){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:M,groupOrder:A,renderOrder:v.renderOrder,z:w,group:S},s[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=M,_.groupOrder=A,_.renderOrder=v.renderOrder,_.z=w,_.group=S),e++,_}function d(v,y,M,A,w,S){const _=u(v,y,M,A,w,S);M.transmission>0?r.push(_):M.transparent===!0?a.push(_):t.push(_)}function h(v,y,M,A,w,S){const _=u(v,y,M,A,w,S);M.transmission>0?r.unshift(_):M.transparent===!0?a.unshift(_):t.unshift(_)}function m(v,y){t.length>1&&t.sort(v||dw),r.length>1&&r.sort(y||Kg),a.length>1&&a.sort(y||Kg)}function x(){for(let v=e,y=s.length;v<y;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:d,unshift:h,finish:x,sort:m}}function fw(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new Zg,s.set(r,[u])):a>=l.length?(u=new Zg,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function hw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new Lt};break;case"SpotLight":t={position:new se,direction:new se,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":t={color:new Lt,position:new se,halfWidth:new se,halfHeight:new se};break}return s[e.id]=t,t}}}function pw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let mw=0;function gw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function vw(s){const e=new hw,t=pw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new se);const a=new se,l=new rn,u=new rn;function d(m){let x=0,v=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,A=0,w=0,S=0,_=0,I=0,N=0,P=0,z=0,F=0,V=0;m.sort(gw);for(let D=0,R=m.length;D<R;D++){const j=m[D],Z=j.color,oe=j.intensity,ie=j.distance,fe=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)x+=Z.r*oe,v+=Z.g*oe,y+=Z.b*oe;else if(j.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(j.sh.coefficients[Q],oe);V++}else if(j.isDirectionalLight){const Q=e.get(j);if(Q.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const pe=j.shadow,L=t.get(j);L.shadowIntensity=pe.intensity,L.shadowBias=pe.bias,L.shadowNormalBias=pe.normalBias,L.shadowRadius=pe.radius,L.shadowMapSize=pe.mapSize,r.directionalShadow[M]=L,r.directionalShadowMap[M]=fe,r.directionalShadowMatrix[M]=j.shadow.matrix,I++}r.directional[M]=Q,M++}else if(j.isSpotLight){const Q=e.get(j);Q.position.setFromMatrixPosition(j.matrixWorld),Q.color.copy(Z).multiplyScalar(oe),Q.distance=ie,Q.coneCos=Math.cos(j.angle),Q.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),Q.decay=j.decay,r.spot[w]=Q;const pe=j.shadow;if(j.map&&(r.spotLightMap[z]=j.map,z++,pe.updateMatrices(j),j.castShadow&&F++),r.spotLightMatrix[w]=pe.matrix,j.castShadow){const L=t.get(j);L.shadowIntensity=pe.intensity,L.shadowBias=pe.bias,L.shadowNormalBias=pe.normalBias,L.shadowRadius=pe.radius,L.shadowMapSize=pe.mapSize,r.spotShadow[w]=L,r.spotShadowMap[w]=fe,P++}w++}else if(j.isRectAreaLight){const Q=e.get(j);Q.color.copy(Z).multiplyScalar(oe),Q.halfWidth.set(j.width*.5,0,0),Q.halfHeight.set(0,j.height*.5,0),r.rectArea[S]=Q,S++}else if(j.isPointLight){const Q=e.get(j);if(Q.color.copy(j.color).multiplyScalar(j.intensity),Q.distance=j.distance,Q.decay=j.decay,j.castShadow){const pe=j.shadow,L=t.get(j);L.shadowIntensity=pe.intensity,L.shadowBias=pe.bias,L.shadowNormalBias=pe.normalBias,L.shadowRadius=pe.radius,L.shadowMapSize=pe.mapSize,L.shadowCameraNear=pe.camera.near,L.shadowCameraFar=pe.camera.far,r.pointShadow[A]=L,r.pointShadowMap[A]=fe,r.pointShadowMatrix[A]=j.shadow.matrix,N++}r.point[A]=Q,A++}else if(j.isHemisphereLight){const Q=e.get(j);Q.skyColor.copy(j.color).multiplyScalar(oe),Q.groundColor.copy(j.groundColor).multiplyScalar(oe),r.hemi[_]=Q,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=y;const B=r.hash;(B.directionalLength!==M||B.pointLength!==A||B.spotLength!==w||B.rectAreaLength!==S||B.hemiLength!==_||B.numDirectionalShadows!==I||B.numPointShadows!==N||B.numSpotShadows!==P||B.numSpotMaps!==z||B.numLightProbes!==V)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=S,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=P+z-F,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=V,B.directionalLength=M,B.pointLength=A,B.spotLength=w,B.rectAreaLength=S,B.hemiLength=_,B.numDirectionalShadows=I,B.numPointShadows=N,B.numSpotShadows=P,B.numSpotMaps=z,B.numLightProbes=V,r.version=mw++)}function h(m,x){let v=0,y=0,M=0,A=0,w=0;const S=x.matrixWorldInverse;for(let _=0,I=m.length;_<I;_++){const N=m[_];if(N.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),v++}else if(N.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(S),M++}else if(N.isRectAreaLight){const P=r.rectArea[A];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(S),u.identity(),l.copy(N.matrixWorld),l.premultiply(S),u.extractRotation(l),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),A++}else if(N.isPointLight){const P=r.point[y];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(S),y++}else if(N.isHemisphereLight){const P=r.hemi[w];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(S),w++}}}return{setup:d,setupView:h,state:r}}function Qg(s){const e=new vw(s),t=[],r=[];function a(x){m.camera=x,t.length=0,r.length=0}function l(x){t.push(x)}function u(x){r.push(x)}function d(){e.setup(t)}function h(x){e.setupView(t,x)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:u}}function xw(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let d;return u===void 0?(d=new Qg(s),e.set(a,[d])):l>=u.length?(d=new Qg(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const _w=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yw=`uniform sampler2D shadow_pass;
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
}`;function Sw(s,e,t){let r=new k0;const a=new vt,l=new vt,u=new Zt,d=new XS({depthPacking:nS}),h=new qS,m={},x=t.maxTextureSize,v={[Dr]:Bn,[Bn]:Dr,[qi]:qi},y=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:_w,fragmentShader:yw}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const A=new Ji;A.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ai(A,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=h0;let _=this.type;this.render=function(F,V,B){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const D=s.getRenderTarget(),R=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Rr),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const oe=_!==Wi&&this.type===Wi,ie=_===Wi&&this.type!==Wi;for(let fe=0,Q=F.length;fe<Q;fe++){const pe=F[fe],L=pe.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;a.copy(L.mapSize);const de=L.getFrameExtents();if(a.multiply(de),l.copy(L.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(l.x=Math.floor(x/de.x),a.x=l.x*de.x,L.mapSize.x=l.x),a.y>x&&(l.y=Math.floor(x/de.y),a.y=l.y*de.y,L.mapSize.y=l.y)),L.map===null||oe===!0||ie===!0){const U=this.type!==Wi?{minFilter:$n,magFilter:$n}:{};L.map!==null&&L.map.dispose(),L.map=new Nr(a.x,a.y,U),L.map.texture.name=pe.name+".shadowMap",L.camera.updateProjectionMatrix()}s.setRenderTarget(L.map),s.clear();const ue=L.getViewportCount();for(let U=0;U<ue;U++){const te=L.getViewport(U);u.set(l.x*te.x,l.y*te.y,l.x*te.z,l.y*te.w),Z.viewport(u),L.updateMatrices(pe,U),r=L.getFrustum(),P(V,B,L.camera,pe,this.type)}L.isPointLightShadow!==!0&&this.type===Wi&&I(L,B),L.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(D,R,j)};function I(F,V){const B=e.update(w);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Nr(a.x,a.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(V,null,B,y,w,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(V,null,B,M,w,null)}function N(F,V,B,D){let R=null;const j=B.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(j!==void 0)R=j;else if(R=B.isPointLight===!0?h:d,s.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const Z=R.uuid,oe=V.uuid;let ie=m[Z];ie===void 0&&(ie={},m[Z]=ie);let fe=ie[oe];fe===void 0&&(fe=R.clone(),ie[oe]=fe,V.addEventListener("dispose",z)),R=fe}if(R.visible=V.visible,R.wireframe=V.wireframe,D===Wi?R.side=V.shadowSide!==null?V.shadowSide:V.side:R.side=V.shadowSide!==null?V.shadowSide:v[V.side],R.alphaMap=V.alphaMap,R.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,R.map=V.map,R.clipShadows=V.clipShadows,R.clippingPlanes=V.clippingPlanes,R.clipIntersection=V.clipIntersection,R.displacementMap=V.displacementMap,R.displacementScale=V.displacementScale,R.displacementBias=V.displacementBias,R.wireframeLinewidth=V.wireframeLinewidth,R.linewidth=V.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Z=s.properties.get(R);Z.light=B}return R}function P(F,V,B,D,R){if(F.visible===!1)return;if(F.layers.test(V.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Wi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,F.matrixWorld);const oe=e.update(F),ie=F.material;if(Array.isArray(ie)){const fe=oe.groups;for(let Q=0,pe=fe.length;Q<pe;Q++){const L=fe[Q],de=ie[L.materialIndex];if(de&&de.visible){const ue=N(F,de,D,R);F.onBeforeShadow(s,F,V,B,oe,ue,L),s.renderBufferDirect(B,null,oe,ue,F,L),F.onAfterShadow(s,F,V,B,oe,ue,L)}}}else if(ie.visible){const fe=N(F,ie,D,R);F.onBeforeShadow(s,F,V,B,oe,fe,null),s.renderBufferDirect(B,null,oe,fe,F,null),F.onAfterShadow(s,F,V,B,oe,fe,null)}}const Z=F.children;for(let oe=0,ie=Z.length;oe<ie;oe++)P(Z[oe],V,B,D,R)}function z(F){F.target.removeEventListener("dispose",z);for(const B in m){const D=m[B],R=F.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const Mw={[ef]:tf,[nf]:of,[rf]:af,[no]:sf,[tf]:ef,[of]:nf,[af]:rf,[sf]:no};function Ew(s,e){function t(){let W=!1;const Ee=new Zt;let Ae=null;const Ue=new Zt(0,0,0,0);return{setMask:function(Me){Ae!==Me&&!W&&(s.colorMask(Me,Me,Me,Me),Ae=Me)},setLocked:function(Me){W=Me},setClear:function(Me,ge,Ye,pt,Ut){Ut===!0&&(Me*=pt,ge*=pt,Ye*=pt),Ee.set(Me,ge,Ye,pt),Ue.equals(Ee)===!1&&(s.clearColor(Me,ge,Ye,pt),Ue.copy(Ee))},reset:function(){W=!1,Ae=null,Ue.set(-1,0,0,0)}}}function r(){let W=!1,Ee=!1,Ae=null,Ue=null,Me=null;return{setReversed:function(ge){if(Ee!==ge){const Ye=e.get("EXT_clip_control");ge?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Ee=ge;const pt=Me;Me=null,this.setClear(pt)}},getReversed:function(){return Ee},setTest:function(ge){ge?re(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(ge){Ae!==ge&&!W&&(s.depthMask(ge),Ae=ge)},setFunc:function(ge){if(Ee&&(ge=Mw[ge]),Ue!==ge){switch(ge){case ef:s.depthFunc(s.NEVER);break;case tf:s.depthFunc(s.ALWAYS);break;case nf:s.depthFunc(s.LESS);break;case no:s.depthFunc(s.LEQUAL);break;case rf:s.depthFunc(s.EQUAL);break;case sf:s.depthFunc(s.GEQUAL);break;case of:s.depthFunc(s.GREATER);break;case af:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=ge}},setLocked:function(ge){W=ge},setClear:function(ge){Me!==ge&&(Ee&&(ge=1-ge),s.clearDepth(ge),Me=ge)},reset:function(){W=!1,Ae=null,Ue=null,Me=null,Ee=!1}}}function a(){let W=!1,Ee=null,Ae=null,Ue=null,Me=null,ge=null,Ye=null,pt=null,Ut=null;return{setTest:function(Ct){W||(Ct?re(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(Ct){Ee!==Ct&&!W&&(s.stencilMask(Ct),Ee=Ct)},setFunc:function(Ct,Kn,vn){(Ae!==Ct||Ue!==Kn||Me!==vn)&&(s.stencilFunc(Ct,Kn,vn),Ae=Ct,Ue=Kn,Me=vn)},setOp:function(Ct,Kn,vn){(ge!==Ct||Ye!==Kn||pt!==vn)&&(s.stencilOp(Ct,Kn,vn),ge=Ct,Ye=Kn,pt=vn)},setLocked:function(Ct){W=Ct},setClear:function(Ct){Ut!==Ct&&(s.clearStencil(Ct),Ut=Ct)},reset:function(){W=!1,Ee=null,Ae=null,Ue=null,Me=null,ge=null,Ye=null,pt=null,Ut=null}}}const l=new t,u=new r,d=new a,h=new WeakMap,m=new WeakMap;let x={},v={},y=new WeakMap,M=[],A=null,w=!1,S=null,_=null,I=null,N=null,P=null,z=null,F=null,V=new Lt(0,0,0),B=0,D=!1,R=null,j=null,Z=null,oe=null,ie=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,pe=0;const L=s.getParameter(s.VERSION);L.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(L)[1]),Q=pe>=1):L.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),Q=pe>=2);let de=null,ue={};const U=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),me=new Zt().fromArray(U),Ce=new Zt().fromArray(te);function ke(W,Ee,Ae,Ue){const Me=new Uint8Array(4),ge=s.createTexture();s.bindTexture(W,ge),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<Ae;Ye++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ee,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(Ee+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return ge}const J={};J[s.TEXTURE_2D]=ke(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),re(s.DEPTH_TEST),u.setFunc(no),nt(!1),He(eg),re(s.CULL_FACE),It(Rr);function re(W){x[W]!==!0&&(s.enable(W),x[W]=!0)}function xe(W){x[W]!==!1&&(s.disable(W),x[W]=!1)}function Re(W,Ee){return v[W]!==Ee?(s.bindFramebuffer(W,Ee),v[W]=Ee,W===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ee),W===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ee),!0):!1}function De(W,Ee){let Ae=M,Ue=!1;if(W){Ae=y.get(Ee),Ae===void 0&&(Ae=[],y.set(Ee,Ae));const Me=W.textures;if(Ae.length!==Me.length||Ae[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,Ye=Me.length;ge<Ye;ge++)Ae[ge]=s.COLOR_ATTACHMENT0+ge;Ae.length=Me.length,Ue=!0}}else Ae[0]!==s.BACK&&(Ae[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(Ae)}function mt(W){return A!==W?(s.useProgram(W),A=W,!0):!1}const jt={[is]:s.FUNC_ADD,[Cy]:s.FUNC_SUBTRACT,[Ry]:s.FUNC_REVERSE_SUBTRACT};jt[Py]=s.MIN,jt[Dy]=s.MAX;const O={[Ny]:s.ZERO,[Ly]:s.ONE,[Iy]:s.SRC_COLOR,[Qd]:s.SRC_ALPHA,[By]:s.SRC_ALPHA_SATURATE,[Oy]:s.DST_COLOR,[Uy]:s.DST_ALPHA,[ky]:s.ONE_MINUS_SRC_COLOR,[Jd]:s.ONE_MINUS_SRC_ALPHA,[zy]:s.ONE_MINUS_DST_COLOR,[Fy]:s.ONE_MINUS_DST_ALPHA,[Hy]:s.CONSTANT_COLOR,[Vy]:s.ONE_MINUS_CONSTANT_COLOR,[jy]:s.CONSTANT_ALPHA,[Gy]:s.ONE_MINUS_CONSTANT_ALPHA};function It(W,Ee,Ae,Ue,Me,ge,Ye,pt,Ut,Ct){if(W===Rr){w===!0&&(xe(s.BLEND),w=!1);return}if(w===!1&&(re(s.BLEND),w=!0),W!==Ay){if(W!==S||Ct!==D){if((_!==is||P!==is)&&(s.blendEquation(s.FUNC_ADD),_=is,P=is),Ct)switch(W){case eo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zd:s.blendFunc(s.ONE,s.ONE);break;case tg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ng:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case eo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Zd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case tg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ng:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}I=null,N=null,z=null,F=null,V.set(0,0,0),B=0,S=W,D=Ct}return}Me=Me||Ee,ge=ge||Ae,Ye=Ye||Ue,(Ee!==_||Me!==P)&&(s.blendEquationSeparate(jt[Ee],jt[Me]),_=Ee,P=Me),(Ae!==I||Ue!==N||ge!==z||Ye!==F)&&(s.blendFuncSeparate(O[Ae],O[Ue],O[ge],O[Ye]),I=Ae,N=Ue,z=ge,F=Ye),(pt.equals(V)===!1||Ut!==B)&&(s.blendColor(pt.r,pt.g,pt.b,Ut),V.copy(pt),B=Ut),S=W,D=!1}function ut(W,Ee){W.side===qi?xe(s.CULL_FACE):re(s.CULL_FACE);let Ae=W.side===Bn;Ee&&(Ae=!Ae),nt(Ae),W.blending===eo&&W.transparent===!1?It(Rr):It(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const Ue=W.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ze(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(W){R!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),R=W)}function He(W){W!==by?(re(s.CULL_FACE),W!==j&&(W===eg?s.cullFace(s.BACK):W===wy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),j=W}function At(W){W!==Z&&(Q&&s.lineWidth(W),Z=W)}function ze(W,Ee,Ae){W?(re(s.POLYGON_OFFSET_FILL),(oe!==Ee||ie!==Ae)&&(s.polygonOffset(Ee,Ae),oe=Ee,ie=Ae)):xe(s.POLYGON_OFFSET_FILL)}function dt(W){W?re(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function Ot(W){W===void 0&&(W=s.TEXTURE0+fe-1),de!==W&&(s.activeTexture(W),de=W)}function it(W,Ee,Ae){Ae===void 0&&(de===null?Ae=s.TEXTURE0+fe-1:Ae=de);let Ue=ue[Ae];Ue===void 0&&(Ue={type:void 0,texture:void 0},ue[Ae]=Ue),(Ue.type!==W||Ue.texture!==Ee)&&(de!==Ae&&(s.activeTexture(Ae),de=Ae),s.bindTexture(W,Ee||J[W]),Ue.type=W,Ue.texture=Ee)}function E(){const W=ue[de];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ee(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function he(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ve(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Qe(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function we(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(W){me.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),me.copy(W))}function at(W){Ce.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Ce.copy(W))}function Ke(W,Ee){let Ae=m.get(Ee);Ae===void 0&&(Ae=new WeakMap,m.set(Ee,Ae));let Ue=Ae.get(W);Ue===void 0&&(Ue=s.getUniformBlockIndex(Ee,W.name),Ae.set(W,Ue))}function Pe(W,Ee){const Ue=m.get(Ee).get(W);h.get(Ee)!==Ue&&(s.uniformBlockBinding(Ee,Ue,W.__bindingPointIndex),h.set(Ee,Ue))}function gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},de=null,ue={},v={},y=new WeakMap,M=[],A=null,w=!1,S=null,_=null,I=null,N=null,P=null,z=null,F=null,V=new Lt(0,0,0),B=0,D=!1,R=null,j=null,Z=null,oe=null,ie=null,me.set(0,0,s.canvas.width,s.canvas.height),Ce.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:re,disable:xe,bindFramebuffer:Re,drawBuffers:De,useProgram:mt,setBlending:It,setMaterial:ut,setFlipSided:nt,setCullFace:He,setLineWidth:At,setPolygonOffset:ze,setScissorTest:dt,activeTexture:Ot,bindTexture:it,unbindTexture:E,compressedTexImage2D:b,compressedTexImage3D:G,texImage2D:Qe,texImage3D:we,updateUBOMapping:Ke,uniformBlockBinding:Pe,texStorage2D:ye,texStorage3D:Ve,texSubImage2D:ee,texSubImage3D:he,compressedTexSubImage2D:le,compressedTexSubImage3D:qe,scissor:Ie,viewport:at,reset:gt}}function bw(s,e,t,r,a,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new vt,x=new WeakMap;let v;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(E,b){return M?new OffscreenCanvas(E,b):cc("canvas")}function w(E,b,G){let ee=1;const he=it(E);if((he.width>G||he.height>G)&&(ee=G/Math.max(he.width,he.height)),ee<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const le=Math.floor(ee*he.width),qe=Math.floor(ee*he.height);v===void 0&&(v=A(le,qe));const ye=b?A(le,qe):v;return ye.width=le,ye.height=qe,ye.getContext("2d").drawImage(E,0,0,le,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+le+"x"+qe+")."),ye}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),E;return E}function S(E){return E.generateMipmaps}function _(E){s.generateMipmap(E)}function I(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(E,b,G,ee,he=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le=b;if(b===s.RED&&(G===s.FLOAT&&(le=s.R32F),G===s.HALF_FLOAT&&(le=s.R16F),G===s.UNSIGNED_BYTE&&(le=s.R8)),b===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(le=s.R8UI),G===s.UNSIGNED_SHORT&&(le=s.R16UI),G===s.UNSIGNED_INT&&(le=s.R32UI),G===s.BYTE&&(le=s.R8I),G===s.SHORT&&(le=s.R16I),G===s.INT&&(le=s.R32I)),b===s.RG&&(G===s.FLOAT&&(le=s.RG32F),G===s.HALF_FLOAT&&(le=s.RG16F),G===s.UNSIGNED_BYTE&&(le=s.RG8)),b===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(le=s.RG8UI),G===s.UNSIGNED_SHORT&&(le=s.RG16UI),G===s.UNSIGNED_INT&&(le=s.RG32UI),G===s.BYTE&&(le=s.RG8I),G===s.SHORT&&(le=s.RG16I),G===s.INT&&(le=s.RG32I)),b===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(le=s.RGB8UI),G===s.UNSIGNED_SHORT&&(le=s.RGB16UI),G===s.UNSIGNED_INT&&(le=s.RGB32UI),G===s.BYTE&&(le=s.RGB8I),G===s.SHORT&&(le=s.RGB16I),G===s.INT&&(le=s.RGB32I)),b===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(le=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(le=s.RGBA16UI),G===s.UNSIGNED_INT&&(le=s.RGBA32UI),G===s.BYTE&&(le=s.RGBA8I),G===s.SHORT&&(le=s.RGBA16I),G===s.INT&&(le=s.RGBA32I)),b===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(le=s.R11F_G11F_B10F)),b===s.RGBA){const qe=he?ac:Nt.getTransfer(ee);G===s.FLOAT&&(le=s.RGBA32F),G===s.HALF_FLOAT&&(le=s.RGBA16F),G===s.UNSIGNED_BYTE&&(le=qe===Bt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function P(E,b){let G;return E?b===null||b===ls||b===ra?G=s.DEPTH24_STENCIL8:b===Ai?G=s.DEPTH32F_STENCIL8:b===ia&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ls||b===ra?G=s.DEPTH_COMPONENT24:b===Ai?G=s.DEPTH_COMPONENT32F:b===ia&&(G=s.DEPTH_COMPONENT16),G}function z(E,b){return S(E)===!0||E.isFramebufferTexture&&E.minFilter!==$n&&E.minFilter!==zn?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function F(E){const b=E.target;b.removeEventListener("dispose",F),B(b),b.isVideoTexture&&x.delete(b)}function V(E){const b=E.target;b.removeEventListener("dispose",V),R(b)}function B(E){const b=r.get(E);if(b.__webglInit===void 0)return;const G=E.source,ee=y.get(G);if(ee){const he=ee[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&D(E),Object.keys(ee).length===0&&y.delete(G)}r.remove(E)}function D(E){const b=r.get(E);s.deleteTexture(b.__webglTexture);const G=E.source,ee=y.get(G);delete ee[b.__cacheKey],u.memory.textures--}function R(E){const b=r.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),r.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let he=0;he<b.__webglFramebuffer[ee].length;he++)s.deleteFramebuffer(b.__webglFramebuffer[ee][he]);else s.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)s.deleteFramebuffer(b.__webglFramebuffer[ee]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=E.textures;for(let ee=0,he=G.length;ee<he;ee++){const le=r.get(G[ee]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),u.memory.textures--),r.remove(G[ee])}r.remove(E)}let j=0;function Z(){j=0}function oe(){const E=j;return E>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+a.maxTextures),j+=1,E}function ie(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function fe(E,b){const G=r.get(E);if(E.isVideoTexture&&dt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&G.__version!==E.version){const ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,E,b);return}}else E.isExternalTexture&&(G.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+b)}function Q(E,b){const G=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){J(G,E,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+b)}function pe(E,b){const G=r.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){J(G,E,b);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+b)}function L(E,b){const G=r.get(E);if(E.version>0&&G.__version!==E.version){re(G,E,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+b)}const de={[uf]:s.REPEAT,[yi]:s.CLAMP_TO_EDGE,[df]:s.MIRRORED_REPEAT},ue={[$n]:s.NEAREST,[eS]:s.NEAREST_MIPMAP_NEAREST,[El]:s.NEAREST_MIPMAP_LINEAR,[zn]:s.LINEAR,[ld]:s.LINEAR_MIPMAP_NEAREST,[ss]:s.LINEAR_MIPMAP_LINEAR},U={[sS]:s.NEVER,[dS]:s.ALWAYS,[oS]:s.LESS,[b0]:s.LEQUAL,[aS]:s.EQUAL,[uS]:s.GEQUAL,[lS]:s.GREATER,[cS]:s.NOTEQUAL};function te(E,b){if(b.type===Ai&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===zn||b.magFilter===ld||b.magFilter===El||b.magFilter===ss||b.minFilter===zn||b.minFilter===ld||b.minFilter===El||b.minFilter===ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,de[b.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,de[b.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,de[b.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ue[b.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ue[b.minFilter]),b.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,U[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===$n||b.minFilter!==El&&b.minFilter!==ss||b.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function me(E,b){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",F));const ee=b.source;let he=y.get(ee);he===void 0&&(he={},y.set(ee,he));const le=ie(b);if(le!==E.__cacheKey){he[le]===void 0&&(he[le]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,G=!0),he[le].usedTimes++;const qe=he[E.__cacheKey];qe!==void 0&&(he[E.__cacheKey].usedTimes--,qe.usedTimes===0&&D(b)),E.__cacheKey=le,E.__webglTexture=he[le].texture}return G}function Ce(E,b,G){return Math.floor(Math.floor(E/G)/b)}function ke(E,b,G,ee){const le=E.updateRanges;if(le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,G,ee,b.data);else{le.sort((we,Ie)=>we.start-Ie.start);let qe=0;for(let we=1;we<le.length;we++){const Ie=le[qe],at=le[we],Ke=Ie.start+Ie.count,Pe=Ce(at.start,b.width,4),gt=Ce(Ie.start,b.width,4);at.start<=Ke+1&&Pe===gt&&Ce(at.start+at.count-1,b.width,4)===Pe?Ie.count=Math.max(Ie.count,at.start+at.count-Ie.start):(++qe,le[qe]=at)}le.length=qe+1;const ye=s.getParameter(s.UNPACK_ROW_LENGTH),Ve=s.getParameter(s.UNPACK_SKIP_PIXELS),Qe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let we=0,Ie=le.length;we<Ie;we++){const at=le[we],Ke=Math.floor(at.start/4),Pe=Math.ceil(at.count/4),gt=Ke%b.width,W=Math.floor(Ke/b.width),Ee=Pe,Ae=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),t.texSubImage2D(s.TEXTURE_2D,0,gt,W,Ee,Ae,G,ee,b.data)}E.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ye),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,Qe)}}function J(E,b,G){let ee=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=s.TEXTURE_3D);const he=me(E,b),le=b.source;t.bindTexture(ee,E.__webglTexture,s.TEXTURE0+G);const qe=r.get(le);if(le.version!==qe.__version||he===!0){t.activeTexture(s.TEXTURE0+G);const ye=Nt.getPrimaries(Nt.workingColorSpace),Ve=b.colorSpace===Ar?null:Nt.getPrimaries(b.colorSpace),Qe=b.colorSpace===Ar||ye===Ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let we=w(b.image,!1,a.maxTextureSize);we=Ot(b,we);const Ie=l.convert(b.format,b.colorSpace),at=l.convert(b.type);let Ke=N(b.internalFormat,Ie,at,b.colorSpace,b.isVideoTexture);te(ee,b);let Pe;const gt=b.mipmaps,W=b.isVideoTexture!==!0,Ee=qe.__version===void 0||he===!0,Ae=le.dataReady,Ue=z(b,we);if(b.isDepthTexture)Ke=P(b.format===oa,b.type),Ee&&(W?t.texStorage2D(s.TEXTURE_2D,1,Ke,we.width,we.height):t.texImage2D(s.TEXTURE_2D,0,Ke,we.width,we.height,0,Ie,at,null));else if(b.isDataTexture)if(gt.length>0){W&&Ee&&t.texStorage2D(s.TEXTURE_2D,Ue,Ke,gt[0].width,gt[0].height);for(let Me=0,ge=gt.length;Me<ge;Me++)Pe=gt[Me],W?Ae&&t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Ie,at,Pe.data):t.texImage2D(s.TEXTURE_2D,Me,Ke,Pe.width,Pe.height,0,Ie,at,Pe.data);b.generateMipmaps=!1}else W?(Ee&&t.texStorage2D(s.TEXTURE_2D,Ue,Ke,we.width,we.height),Ae&&ke(b,we,Ie,at)):t.texImage2D(s.TEXTURE_2D,0,Ke,we.width,we.height,0,Ie,at,we.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){W&&Ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Ke,gt[0].width,gt[0].height,we.depth);for(let Me=0,ge=gt.length;Me<ge;Me++)if(Pe=gt[Me],b.format!==oi)if(Ie!==null)if(W){if(Ae)if(b.layerUpdates.size>0){const Ye=Cg(Pe.width,Pe.height,b.format,b.type);for(const pt of b.layerUpdates){const Ut=Pe.data.subarray(pt*Ye/Pe.data.BYTES_PER_ELEMENT,(pt+1)*Ye/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,pt,Pe.width,Pe.height,1,Ie,Ut)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,we.depth,Ie,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Me,Ke,Pe.width,Pe.height,we.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ae&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,we.depth,Ie,at,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Me,Ke,Pe.width,Pe.height,we.depth,0,Ie,at,Pe.data)}else{W&&Ee&&t.texStorage2D(s.TEXTURE_2D,Ue,Ke,gt[0].width,gt[0].height);for(let Me=0,ge=gt.length;Me<ge;Me++)Pe=gt[Me],b.format!==oi?Ie!==null?W?Ae&&t.compressedTexSubImage2D(s.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Ie,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,Me,Ke,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ae&&t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Ie,at,Pe.data):t.texImage2D(s.TEXTURE_2D,Me,Ke,Pe.width,Pe.height,0,Ie,at,Pe.data)}else if(b.isDataArrayTexture)if(W){if(Ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Ke,we.width,we.height,we.depth),Ae)if(b.layerUpdates.size>0){const Me=Cg(we.width,we.height,b.format,b.type);for(const ge of b.layerUpdates){const Ye=we.data.subarray(ge*Me/we.data.BYTES_PER_ELEMENT,(ge+1)*Me/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,we.width,we.height,1,Ie,at,Ye)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ie,at,we.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ke,we.width,we.height,we.depth,0,Ie,at,we.data);else if(b.isData3DTexture)W?(Ee&&t.texStorage3D(s.TEXTURE_3D,Ue,Ke,we.width,we.height,we.depth),Ae&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ie,at,we.data)):t.texImage3D(s.TEXTURE_3D,0,Ke,we.width,we.height,we.depth,0,Ie,at,we.data);else if(b.isFramebufferTexture){if(Ee)if(W)t.texStorage2D(s.TEXTURE_2D,Ue,Ke,we.width,we.height);else{let Me=we.width,ge=we.height;for(let Ye=0;Ye<Ue;Ye++)t.texImage2D(s.TEXTURE_2D,Ye,Ke,Me,ge,0,Ie,at,null),Me>>=1,ge>>=1}}else if(gt.length>0){if(W&&Ee){const Me=it(gt[0]);t.texStorage2D(s.TEXTURE_2D,Ue,Ke,Me.width,Me.height)}for(let Me=0,ge=gt.length;Me<ge;Me++)Pe=gt[Me],W?Ae&&t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ie,at,Pe):t.texImage2D(s.TEXTURE_2D,Me,Ke,Ie,at,Pe);b.generateMipmaps=!1}else if(W){if(Ee){const Me=it(we);t.texStorage2D(s.TEXTURE_2D,Ue,Ke,Me.width,Me.height)}Ae&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,at,we)}else t.texImage2D(s.TEXTURE_2D,0,Ke,Ie,at,we);S(b)&&_(ee),qe.__version=le.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function re(E,b,G){if(b.image.length!==6)return;const ee=me(E,b),he=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+G);const le=r.get(he);if(he.version!==le.__version||ee===!0){t.activeTexture(s.TEXTURE0+G);const qe=Nt.getPrimaries(Nt.workingColorSpace),ye=b.colorSpace===Ar?null:Nt.getPrimaries(b.colorSpace),Ve=b.colorSpace===Ar||qe===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const Qe=b.isCompressedTexture||b.image[0].isCompressedTexture,we=b.image[0]&&b.image[0].isDataTexture,Ie=[];for(let ge=0;ge<6;ge++)!Qe&&!we?Ie[ge]=w(b.image[ge],!0,a.maxCubemapSize):Ie[ge]=we?b.image[ge].image:b.image[ge],Ie[ge]=Ot(b,Ie[ge]);const at=Ie[0],Ke=l.convert(b.format,b.colorSpace),Pe=l.convert(b.type),gt=N(b.internalFormat,Ke,Pe,b.colorSpace),W=b.isVideoTexture!==!0,Ee=le.__version===void 0||ee===!0,Ae=he.dataReady;let Ue=z(b,at);te(s.TEXTURE_CUBE_MAP,b);let Me;if(Qe){W&&Ee&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,gt,at.width,at.height);for(let ge=0;ge<6;ge++){Me=Ie[ge].mipmaps;for(let Ye=0;Ye<Me.length;Ye++){const pt=Me[Ye];b.format!==oi?Ke!==null?W?Ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye,0,0,pt.width,pt.height,Ke,pt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye,gt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye,0,0,pt.width,pt.height,Ke,Pe,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye,gt,pt.width,pt.height,0,Ke,Pe,pt.data)}}}else{if(Me=b.mipmaps,W&&Ee){Me.length>0&&Ue++;const ge=it(Ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,gt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(we){W?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ie[ge].width,Ie[ge].height,Ke,Pe,Ie[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,gt,Ie[ge].width,Ie[ge].height,0,Ke,Pe,Ie[ge].data);for(let Ye=0;Ye<Me.length;Ye++){const Ut=Me[Ye].image[ge].image;W?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye+1,0,0,Ut.width,Ut.height,Ke,Pe,Ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye+1,gt,Ut.width,Ut.height,0,Ke,Pe,Ut.data)}}else{W?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ke,Pe,Ie[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,gt,Ke,Pe,Ie[ge]);for(let Ye=0;Ye<Me.length;Ye++){const pt=Me[Ye];W?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye+1,0,0,Ke,Pe,pt.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ye+1,gt,Ke,Pe,pt.image[ge])}}}S(b)&&_(s.TEXTURE_CUBE_MAP),le.__version=he.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function xe(E,b,G,ee,he,le){const qe=l.convert(G.format,G.colorSpace),ye=l.convert(G.type),Ve=N(G.internalFormat,qe,ye,G.colorSpace),Qe=r.get(b),we=r.get(G);if(we.__renderTarget=b,!Qe.__hasExternalTextures){const Ie=Math.max(1,b.width>>le),at=Math.max(1,b.height>>le);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,le,Ve,Ie,at,b.depth,0,qe,ye,null):t.texImage2D(he,le,Ve,Ie,at,0,qe,ye,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),ze(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,he,we.__webglTexture,0,At(b)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,he,we.__webglTexture,le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(E,b,G){if(s.bindRenderbuffer(s.RENDERBUFFER,E),b.depthBuffer){const ee=b.depthTexture,he=ee&&ee.isDepthTexture?ee.type:null,le=P(b.stencilBuffer,he),qe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=At(b);ze(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,le,b.width,b.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,le,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,le,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,E)}else{const ee=b.textures;for(let he=0;he<ee.length;he++){const le=ee[he],qe=l.convert(le.format,le.colorSpace),ye=l.convert(le.type),Ve=N(le.internalFormat,qe,ye,le.colorSpace),Qe=At(b);G&&ze(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Ve,b.width,b.height):ze(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe,Ve,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ve,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=r.get(b.depthTexture);ee.__renderTarget=b,(!ee.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),fe(b.depthTexture,0);const he=ee.__webglTexture,le=At(b);if(b.depthTexture.format===sa)ze(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0);else if(b.depthTexture.format===oa)ze(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function mt(E){const b=r.get(E),G=E.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==E.depthTexture){const ee=E.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ee){const he=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ee.removeEventListener("dispose",he)};ee.addEventListener("dispose",he),b.__depthDisposeCallback=he}b.__boundDepthTexture=ee}if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const ee=E.texture.mipmaps;ee&&ee.length>0?De(b.__webglFramebuffer[0],E):De(b.__webglFramebuffer,E)}else if(G){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]===void 0)b.__webglDepthbuffer[ee]=s.createRenderbuffer(),Re(b.__webglDepthbuffer[ee],E,!1);else{const he=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer[ee];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,le)}}else{const ee=E.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Re(b.__webglDepthbuffer,E,!1);else{const he=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,le)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function jt(E,b,G){const ee=r.get(E);b!==void 0&&xe(ee.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&mt(E)}function O(E){const b=E.texture,G=r.get(E),ee=r.get(b);E.addEventListener("dispose",V);const he=E.textures,le=E.isWebGLCubeRenderTarget===!0,qe=he.length>1;if(qe||(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=b.version,u.memory.textures++),le){G.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[ye]=[];for(let Ve=0;Ve<b.mipmaps.length;Ve++)G.__webglFramebuffer[ye][Ve]=s.createFramebuffer()}else G.__webglFramebuffer[ye]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let ye=0;ye<b.mipmaps.length;ye++)G.__webglFramebuffer[ye]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(qe)for(let ye=0,Ve=he.length;ye<Ve;ye++){const Qe=r.get(he[ye]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=s.createTexture(),u.memory.textures++)}if(E.samples>0&&ze(E)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ye=0;ye<he.length;ye++){const Ve=he[ye];G.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ye]);const Qe=l.convert(Ve.format,Ve.colorSpace),we=l.convert(Ve.type),Ie=N(Ve.internalFormat,Qe,we,Ve.colorSpace,E.isXRRenderTarget===!0),at=At(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,at,Ie,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,G.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(G.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),te(s.TEXTURE_CUBE_MAP,b);for(let ye=0;ye<6;ye++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ve=0;Ve<b.mipmaps.length;Ve++)xe(G.__webglFramebuffer[ye][Ve],E,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ve);else xe(G.__webglFramebuffer[ye],E,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);S(b)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let ye=0,Ve=he.length;ye<Ve;ye++){const Qe=he[ye],we=r.get(Qe);let Ie=s.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Ie=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ie,we.__webglTexture),te(Ie,Qe),xe(G.__webglFramebuffer,E,Qe,s.COLOR_ATTACHMENT0+ye,Ie,0),S(Qe)&&_(Ie)}t.unbindTexture()}else{let ye=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ye=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ye,ee.__webglTexture),te(ye,b),b.mipmaps&&b.mipmaps.length>0)for(let Ve=0;Ve<b.mipmaps.length;Ve++)xe(G.__webglFramebuffer[Ve],E,b,s.COLOR_ATTACHMENT0,ye,Ve);else xe(G.__webglFramebuffer,E,b,s.COLOR_ATTACHMENT0,ye,0);S(b)&&_(ye),t.unbindTexture()}E.depthBuffer&&mt(E)}function It(E){const b=E.textures;for(let G=0,ee=b.length;G<ee;G++){const he=b[G];if(S(he)){const le=I(E),qe=r.get(he).__webglTexture;t.bindTexture(le,qe),_(le),t.unbindTexture()}}}const ut=[],nt=[];function He(E){if(E.samples>0){if(ze(E)===!1){const b=E.textures,G=E.width,ee=E.height;let he=s.COLOR_BUFFER_BIT;const le=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(E),ye=b.length>1;if(ye)for(let Qe=0;Qe<b.length;Qe++)t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Ve=E.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Qe=0;Qe<b.length;Qe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),ye){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Qe]);const we=r.get(b[Qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,we,0)}s.blitFramebuffer(0,0,G,ee,0,0,G,ee,he,s.NEAREST),h===!0&&(ut.length=0,nt.length=0,ut.push(s.COLOR_ATTACHMENT0+Qe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ut.push(le),nt.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,nt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let Qe=0;Qe<b.length;Qe++){t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Qe]);const we=r.get(b[Qe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,we,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&h){const b=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function At(E){return Math.min(a.maxSamples,E.samples)}function ze(E){const b=r.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function dt(E){const b=u.render.frame;x.get(E)!==b&&(x.set(E,b),E.update())}function Ot(E,b){const G=E.colorSpace,ee=E.format,he=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||G!==so&&G!==Ar&&(Nt.getTransfer(G)===Bt?(ee!==oi||he!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function it(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(m.width=E.naturalWidth||E.width,m.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(m.width=E.displayWidth,m.height=E.displayHeight):(m.width=E.width,m.height=E.height),m}this.allocateTextureUnit=oe,this.resetTextureUnits=Z,this.setTexture2D=fe,this.setTexture2DArray=Q,this.setTexture3D=pe,this.setTextureCube=L,this.rebindTextures=jt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ze}function ww(s,e){function t(r,a=Ar){let l;const u=Nt.getTransfer(a);if(r===Ki)return s.UNSIGNED_BYTE;if(r===Qf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Jf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===x0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===_0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===g0)return s.BYTE;if(r===v0)return s.SHORT;if(r===ia)return s.UNSIGNED_SHORT;if(r===Zf)return s.INT;if(r===ls)return s.UNSIGNED_INT;if(r===Ai)return s.FLOAT;if(r===ao)return s.HALF_FLOAT;if(r===y0)return s.ALPHA;if(r===S0)return s.RGB;if(r===oi)return s.RGBA;if(r===sa)return s.DEPTH_COMPONENT;if(r===oa)return s.DEPTH_STENCIL;if(r===M0)return s.RED;if(r===eh)return s.RED_INTEGER;if(r===E0)return s.RG;if(r===th)return s.RG_INTEGER;if(r===nh)return s.RGBA_INTEGER;if(r===Jl||r===ec||r===tc||r===nc)if(u===Bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Jl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ec)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Jl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ec)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ff||r===hf||r===pf||r===mf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===ff)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===pf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===mf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gf||r===vf||r===xf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===gf||r===vf)return u===Bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===xf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_f||r===yf||r===Sf||r===Mf||r===Ef||r===bf||r===wf||r===Tf||r===Af||r===Cf||r===Rf||r===Pf||r===Df||r===Nf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===_f)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Mf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ef)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Tf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Af)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Df)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lf||r===If||r===kf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Lf)return u===Bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===If)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===kf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Uf||r===Ff||r===Of||r===zf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Uf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Ff)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Of)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ra?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Tw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Aw=`
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

}`;class Cw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new F0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Qi({vertexShader:Tw,fragmentShader:Aw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ai(new as(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rw extends lo{constructor(e,t){super();const r=this;let a=null,l=1,u=null,d="local-floor",h=1,m=null,x=null,v=null,y=null,M=null,A=null;const w=typeof XRWebGLBinding<"u",S=new Cw,_={},I=t.getContextAttributes();let N=null,P=null;const z=[],F=[],V=new vt;let B=null;const D=new xi;D.viewport=new Zt;const R=new xi;R.viewport=new Zt;const j=[D,R],Z=new $S;let oe=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let re=z[J];return re===void 0&&(re=new Dd,z[J]=re),re.getTargetRaySpace()},this.getControllerGrip=function(J){let re=z[J];return re===void 0&&(re=new Dd,z[J]=re),re.getGripSpace()},this.getHand=function(J){let re=z[J];return re===void 0&&(re=new Dd,z[J]=re),re.getHandSpace()};function fe(J){const re=F.indexOf(J.inputSource);if(re===-1)return;const xe=z[re];xe!==void 0&&(xe.update(J.inputSource,J.frame,m||u),xe.dispatchEvent({type:J.type,data:J.inputSource}))}function Q(){a.removeEventListener("select",fe),a.removeEventListener("selectstart",fe),a.removeEventListener("selectend",fe),a.removeEventListener("squeeze",fe),a.removeEventListener("squeezestart",fe),a.removeEventListener("squeezeend",fe),a.removeEventListener("end",Q),a.removeEventListener("inputsourceschange",pe);for(let J=0;J<z.length;J++){const re=F[J];re!==null&&(F[J]=null,z[J].disconnect(re))}oe=null,ie=null,S.reset();for(const J in _)delete _[J];e.setRenderTarget(N),M=null,y=null,v=null,a=null,P=null,ke.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(a,t)),v},this.getFrame=function(){return A},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(N=e.getRenderTarget(),a.addEventListener("select",fe),a.addEventListener("selectstart",fe),a.addEventListener("selectend",fe),a.addEventListener("squeeze",fe),a.addEventListener("squeezestart",fe),a.addEventListener("squeezeend",fe),a.addEventListener("end",Q),a.addEventListener("inputsourceschange",pe),I.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(V),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Re=null,De=null;I.depth&&(De=I.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=I.stencil?oa:sa,Re=I.stencil?ra:ls);const mt={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:l};v=this.getBinding(),y=v.createProjectionLayer(mt),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),P=new Nr(y.textureWidth,y.textureHeight,{format:oi,type:Ki,depthTexture:new U0(y.textureWidth,y.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const xe={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,t,xe),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Nr(M.framebufferWidth,M.framebufferHeight,{format:oi,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await a.requestReferenceSpace(d),ke.setContext(a),ke.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function pe(J){for(let re=0;re<J.removed.length;re++){const xe=J.removed[re],Re=F.indexOf(xe);Re>=0&&(F[Re]=null,z[Re].disconnect(xe))}for(let re=0;re<J.added.length;re++){const xe=J.added[re];let Re=F.indexOf(xe);if(Re===-1){for(let mt=0;mt<z.length;mt++)if(mt>=F.length){F.push(xe),Re=mt;break}else if(F[mt]===null){F[mt]=xe,Re=mt;break}if(Re===-1)break}const De=z[Re];De&&De.connect(xe)}}const L=new se,de=new se;function ue(J,re,xe){L.setFromMatrixPosition(re.matrixWorld),de.setFromMatrixPosition(xe.matrixWorld);const Re=L.distanceTo(de),De=re.projectionMatrix.elements,mt=xe.projectionMatrix.elements,jt=De[14]/(De[10]-1),O=De[14]/(De[10]+1),It=(De[9]+1)/De[5],ut=(De[9]-1)/De[5],nt=(De[8]-1)/De[0],He=(mt[8]+1)/mt[0],At=jt*nt,ze=jt*He,dt=Re/(-nt+He),Ot=dt*-nt;if(re.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ot),J.translateZ(dt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),De[10]===-1)J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const it=jt+dt,E=O+dt,b=At-Ot,G=ze+(Re-Ot),ee=It*O/E*it,he=ut*O/E*it;J.projectionMatrix.makePerspective(b,G,ee,he,it,E),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function U(J,re){re===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(re.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let re=J.near,xe=J.far;S.texture!==null&&(S.depthNear>0&&(re=S.depthNear),S.depthFar>0&&(xe=S.depthFar)),Z.near=R.near=D.near=re,Z.far=R.far=D.far=xe,(oe!==Z.near||ie!==Z.far)&&(a.updateRenderState({depthNear:Z.near,depthFar:Z.far}),oe=Z.near,ie=Z.far),Z.layers.mask=J.layers.mask|6,D.layers.mask=Z.layers.mask&3,R.layers.mask=Z.layers.mask&5;const Re=J.parent,De=Z.cameras;U(Z,Re);for(let mt=0;mt<De.length;mt++)U(De[mt],Re);De.length===2?ue(Z,D,R):Z.projectionMatrix.copy(D.projectionMatrix),te(J,Z,Re)};function te(J,re,xe){xe===null?J.matrix.copy(re.matrixWorld):(J.matrix.copy(xe.matrixWorld),J.matrix.invert(),J.matrix.multiply(re.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(re.projectionMatrix),J.projectionMatrixInverse.copy(re.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Bf*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(y===null&&M===null))return h},this.setFoveation=function(J){h=J,y!==null&&(y.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(J){return _[J]};let me=null;function Ce(J,re){if(x=re.getViewerPose(m||u),A=re,x!==null){const xe=x.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Re=!1;xe.length!==Z.cameras.length&&(Z.cameras.length=0,Re=!0);for(let O=0;O<xe.length;O++){const It=xe[O];let ut=null;if(M!==null)ut=M.getViewport(It);else{const He=v.getViewSubImage(y,It);ut=He.viewport,O===0&&(e.setRenderTargetTextures(P,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(P))}let nt=j[O];nt===void 0&&(nt=new xi,nt.layers.enable(O),nt.viewport=new Zt,j[O]=nt),nt.matrix.fromArray(It.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(It.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(ut.x,ut.y,ut.width,ut.height),O===0&&(Z.matrix.copy(nt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Re===!0&&Z.cameras.push(nt)}const De=a.enabledFeatures;if(De&&De.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&w){v=r.getBinding();const O=v.getDepthInformation(xe[0]);O&&O.isValid&&O.texture&&S.init(O,a.renderState)}if(De&&De.includes("camera-access")&&w){e.state.unbindTexture(),v=r.getBinding();for(let O=0;O<xe.length;O++){const It=xe[O].camera;if(It){let ut=_[It];ut||(ut=new F0,_[It]=ut);const nt=v.getCameraImage(It);ut.sourceTexture=nt}}}}for(let xe=0;xe<z.length;xe++){const Re=F[xe],De=z[xe];Re!==null&&De!==void 0&&De.update(Re,re,m||u)}me&&me(J,re),re.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:re}),A=null}const ke=new O0;ke.setAnimationLoop(Ce),this.setAnimationLoop=function(J){me=J},this.dispose=function(){}}}const Jr=new Zi,Pw=new rn;function Dw(s,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,L0(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function a(S,_,I,N,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(S,_):_.isMeshToonMaterial?(l(S,_),v(S,_)):_.isMeshPhongMaterial?(l(S,_),x(S,_)):_.isMeshStandardMaterial?(l(S,_),y(S,_),_.isMeshPhysicalMaterial&&M(S,_,P)):_.isMeshMatcapMaterial?(l(S,_),A(S,_)):_.isMeshDepthMaterial?l(S,_):_.isMeshDistanceMaterial?(l(S,_),w(S,_)):_.isMeshNormalMaterial?l(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?h(S,_,I,N):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Bn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Bn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const I=e.get(_),N=I.envMap,P=I.envMapRotation;N&&(S.envMap.value=N,Jr.copy(P),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),S.envMapRotation.value.setFromMatrix4(Pw.makeRotationFromEuler(Jr)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function h(S,_,I,N){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*I,S.scale.value=N*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function x(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,I){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,_){_.matcap&&(S.matcap.value=_.matcap)}function w(S,_){const I=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Nw(s,e,t,r){let a={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,N){const P=N.program;r.uniformBlockBinding(I,P)}function m(I,N){let P=a[I.id];P===void 0&&(A(I),P=x(I),a[I.id]=P,I.addEventListener("dispose",S));const z=N.program;r.updateUBOMapping(I,z);const F=e.render.frame;l[I.id]!==F&&(y(I),l[I.id]=F)}function x(I){const N=v();I.__bindingPointIndex=N;const P=s.createBuffer(),z=I.__size,F=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,z,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,P),P}function v(){for(let I=0;I<d;I++)if(u.indexOf(I)===-1)return u.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const N=a[I.id],P=I.uniforms,z=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let F=0,V=P.length;F<V;F++){const B=Array.isArray(P[F])?P[F]:[P[F]];for(let D=0,R=B.length;D<R;D++){const j=B[D];if(M(j,F,D,z)===!0){const Z=j.__offset,oe=Array.isArray(j.value)?j.value:[j.value];let ie=0;for(let fe=0;fe<oe.length;fe++){const Q=oe[fe],pe=w(Q);typeof Q=="number"||typeof Q=="boolean"?(j.__data[0]=Q,s.bufferSubData(s.UNIFORM_BUFFER,Z+ie,j.__data)):Q.isMatrix3?(j.__data[0]=Q.elements[0],j.__data[1]=Q.elements[1],j.__data[2]=Q.elements[2],j.__data[3]=0,j.__data[4]=Q.elements[3],j.__data[5]=Q.elements[4],j.__data[6]=Q.elements[5],j.__data[7]=0,j.__data[8]=Q.elements[6],j.__data[9]=Q.elements[7],j.__data[10]=Q.elements[8],j.__data[11]=0):(Q.toArray(j.__data,ie),ie+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,j.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(I,N,P,z){const F=I.value,V=N+"_"+P;if(z[V]===void 0)return typeof F=="number"||typeof F=="boolean"?z[V]=F:z[V]=F.clone(),!0;{const B=z[V];if(typeof F=="number"||typeof F=="boolean"){if(B!==F)return z[V]=F,!0}else if(B.equals(F)===!1)return B.copy(F),!0}return!1}function A(I){const N=I.uniforms;let P=0;const z=16;for(let V=0,B=N.length;V<B;V++){const D=Array.isArray(N[V])?N[V]:[N[V]];for(let R=0,j=D.length;R<j;R++){const Z=D[R],oe=Array.isArray(Z.value)?Z.value:[Z.value];for(let ie=0,fe=oe.length;ie<fe;ie++){const Q=oe[ie],pe=w(Q),L=P%z,de=L%pe.boundary,ue=L+de;P+=de,ue!==0&&z-ue<pe.storage&&(P+=z-ue),Z.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=P,P+=pe.storage}}}const F=P%z;return F>0&&(P+=z-F),I.__size=P,I.__cache={},this}function w(I){const N={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(N.boundary=4,N.storage=4):I.isVector2?(N.boundary=8,N.storage=8):I.isVector3||I.isColor?(N.boundary=16,N.storage=12):I.isVector4?(N.boundary=16,N.storage=16):I.isMatrix3?(N.boundary=48,N.storage=48):I.isMatrix4?(N.boundary=64,N.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),N}function S(I){const N=I.target;N.removeEventListener("dispose",S);const P=u.indexOf(N.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(a[N.id]),delete a[N.id],delete l[N.id]}function _(){for(const I in a)s.deleteBuffer(a[I]);u=[],a={},l={}}return{bind:h,update:m,dispose:_}}class Lw{constructor(e={}){const{canvas:t=hS(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const A=new Uint32Array(4),w=new Int32Array(4);let S=null,_=null;const I=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let z=!1;this._outputColorSpace=si;let F=0,V=0,B=null,D=-1,R=null;const j=new Zt,Z=new Zt;let oe=null;const ie=new Lt(0);let fe=0,Q=t.width,pe=t.height,L=1,de=null,ue=null;const U=new Zt(0,0,Q,pe),te=new Zt(0,0,Q,pe);let me=!1;const Ce=new k0;let ke=!1,J=!1;const re=new rn,xe=new se,Re=new Zt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function jt(){return B===null?L:1}let O=r;function It(C,Y){return t.getContext(C,Y)}try{const C={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kf}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Me,!1),O===null){const Y="webgl2";if(O=It(Y,C),O===null)throw It(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ut,nt,He,At,ze,dt,Ot,it,E,b,G,ee,he,le,qe,ye,Ve,Qe,we,Ie,at,Ke,Pe,gt;function W(){ut=new jE(O),ut.init(),Ke=new ww(O,ut),nt=new UE(O,ut,e,Ke),He=new Ew(O,ut),nt.reversedDepthBuffer&&y&&He.buffers.depth.setReversed(!0),At=new XE(O),ze=new uw,dt=new bw(O,ut,He,ze,nt,Ke,At),Ot=new OE(P),it=new VE(P),E=new QS(O),Pe=new IE(O,E),b=new GE(O,E,At,Pe),G=new YE(O,b,E,At),we=new qE(O,nt,dt),ye=new FE(ze),ee=new cw(P,Ot,it,ut,nt,Pe,ye),he=new Dw(P,ze),le=new fw,qe=new xw(ut),Qe=new LE(P,Ot,it,He,G,M,h),Ve=new Sw(P,G,nt),gt=new Nw(O,At,nt,He),Ie=new kE(O,ut,At),at=new WE(O,ut,At),At.programs=ee.programs,P.capabilities=nt,P.extensions=ut,P.properties=ze,P.renderLists=le,P.shadowMap=Ve,P.state=He,P.info=At}W();const Ee=new Rw(P,O);this.xr=Ee,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(C){C!==void 0&&(L=C,this.setSize(Q,pe,!1))},this.getSize=function(C){return C.set(Q,pe)},this.setSize=function(C,Y,ae=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=C,pe=Y,t.width=Math.floor(C*L),t.height=Math.floor(Y*L),ae===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(Q*L,pe*L).floor()},this.setDrawingBufferSize=function(C,Y,ae){Q=C,pe=Y,L=ae,t.width=Math.floor(C*ae),t.height=Math.floor(Y*ae),this.setViewport(0,0,C,Y)},this.getCurrentViewport=function(C){return C.copy(j)},this.getViewport=function(C){return C.copy(U)},this.setViewport=function(C,Y,ae,ce){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,Y,ae,ce),He.viewport(j.copy(U).multiplyScalar(L).round())},this.getScissor=function(C){return C.copy(te)},this.setScissor=function(C,Y,ae,ce){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,Y,ae,ce),He.scissor(Z.copy(te).multiplyScalar(L).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(C){He.setScissorTest(me=C)},this.setOpaqueSort=function(C){de=C},this.setTransparentSort=function(C){ue=C},this.getClearColor=function(C){return C.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,ae=!0){let ce=0;if(C){let q=!1;if(B!==null){const be=B.texture.format;q=be===nh||be===th||be===eh}if(q){const be=B.texture.type,Ne=be===Ki||be===ls||be===ia||be===ra||be===Qf||be===Jf,je=Qe.getClearColor(),Fe=Qe.getClearAlpha(),ot=je.r,lt=je.g,Je=je.b;Ne?(A[0]=ot,A[1]=lt,A[2]=Je,A[3]=Fe,O.clearBufferuiv(O.COLOR,0,A)):(w[0]=ot,w[1]=lt,w[2]=Je,w[3]=Fe,O.clearBufferiv(O.COLOR,0,w))}else ce|=O.COLOR_BUFFER_BIT}Y&&(ce|=O.DEPTH_BUFFER_BIT),ae&&(ce|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Qe.dispose(),le.dispose(),qe.dispose(),ze.dispose(),Ot.dispose(),it.dispose(),G.dispose(),Pe.dispose(),gt.dispose(),ee.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",vn),Ee.removeEventListener("sessionend",us),Vn.stop()};function Ae(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const C=At.autoReset,Y=Ve.enabled,ae=Ve.autoUpdate,ce=Ve.needsUpdate,q=Ve.type;W(),At.autoReset=C,Ve.enabled=Y,Ve.autoUpdate=ae,Ve.needsUpdate=ce,Ve.type=q}function Me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ge(C){const Y=C.target;Y.removeEventListener("dispose",ge),Ye(Y)}function Ye(C){pt(C),ze.remove(C)}function pt(C){const Y=ze.get(C).programs;Y!==void 0&&(Y.forEach(function(ae){ee.releaseProgram(ae)}),C.isShaderMaterial&&ee.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,ae,ce,q,be){Y===null&&(Y=De);const Ne=q.isMesh&&q.matrixWorld.determinant()<0,je=Pi(C,Y,ae,ce,q);He.setMaterial(ce,Ne);let Fe=ae.index,ot=1;if(ce.wireframe===!0){if(Fe=b.getWireframeAttribute(ae),Fe===void 0)return;ot=2}const lt=ae.drawRange,Je=ae.attributes.position;let ft=lt.start*ot,kt=(lt.start+lt.count)*ot;be!==null&&(ft=Math.max(ft,be.start*ot),kt=Math.min(kt,(be.start+be.count)*ot)),Fe!==null?(ft=Math.max(ft,0),kt=Math.min(kt,Fe.count)):Je!=null&&(ft=Math.max(ft,0),kt=Math.min(kt,Je.count));const Rt=kt-ft;if(Rt<0||Rt===1/0)return;Pe.setup(q,ce,je,ae,Fe);let Ht,Ft=Ie;if(Fe!==null&&(Ht=E.get(Fe),Ft=at,Ft.setIndex(Ht)),q.isMesh)ce.wireframe===!0?(He.setLineWidth(ce.wireframeLinewidth*jt()),Ft.setMode(O.LINES)):Ft.setMode(O.TRIANGLES);else if(q.isLine){let tt=ce.linewidth;tt===void 0&&(tt=1),He.setLineWidth(tt*jt()),q.isLineSegments?Ft.setMode(O.LINES):q.isLineLoop?Ft.setMode(O.LINE_LOOP):Ft.setMode(O.LINE_STRIP)}else q.isPoints?Ft.setMode(O.POINTS):q.isSprite&&Ft.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)aa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))Ft.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const tt=q._multiDrawStarts,zt=q._multiDrawCounts,Mt=q._multiDrawCount,sn=Fe?E.get(Fe).bytesPerElement:1,li=ze.get(ce).currentProgram.getUniforms();for(let Tn=0;Tn<Mt;Tn++)li.setValue(O,"_gl_DrawID",Tn),Ft.render(tt[Tn]/sn,zt[Tn])}else if(q.isInstancedMesh)Ft.renderInstances(ft,Rt,q.count);else if(ae.isInstancedBufferGeometry){const tt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,zt=Math.min(ae.instanceCount,tt);Ft.renderInstances(ft,Rt,zt)}else Ft.render(ft,Rt)};function Ut(C,Y,ae){C.transparent===!0&&C.side===qi&&C.forceSinglePass===!1?(C.side=Bn,C.needsUpdate=!0,fs(C,Y,ae),C.side=Dr,C.needsUpdate=!0,fs(C,Y,ae),C.side=qi):fs(C,Y,ae)}this.compile=function(C,Y,ae=null){ae===null&&(ae=C),_=qe.get(ae),_.init(Y),N.push(_),ae.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),C!==ae&&C.traverseVisible(function(q){q.isLight&&q.layers.test(Y.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights();const ce=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const be=q.material;if(be)if(Array.isArray(be))for(let Ne=0;Ne<be.length;Ne++){const je=be[Ne];Ut(je,ae,q),ce.add(je)}else Ut(be,ae,q),ce.add(be)}),_=N.pop(),ce},this.compileAsync=function(C,Y,ae=null){const ce=this.compile(C,Y,ae);return new Promise(q=>{function be(){if(ce.forEach(function(Ne){ze.get(Ne).currentProgram.isReady()&&ce.delete(Ne)}),ce.size===0){q(C);return}setTimeout(be,10)}ut.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Ct=null;function Kn(C){Ct&&Ct(C)}function vn(){Vn.stop()}function us(){Vn.start()}const Vn=new O0;Vn.setAnimationLoop(Kn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(C){Ct=C,Ee.setAnimationLoop(C),C===null?Vn.stop():Vn.start()},Ee.addEventListener("sessionstart",vn),Ee.addEventListener("sessionend",us),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(Y),Y=Ee.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,Y,B),_=qe.get(C,N.length),_.init(Y),N.push(_),re.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ce.setFromProjectionMatrix(re,Ci,Y.reversedDepth),J=this.localClippingEnabled,ke=ye.init(this.clippingPlanes,J),S=le.get(C,I.length),S.init(),I.push(S),Ee.enabled===!0&&Ee.isPresenting===!0){const be=P.xr.getDepthSensingMesh();be!==null&&ho(be,Y,-1/0,P.sortObjects)}ho(C,Y,0,P.sortObjects),S.finish(),P.sortObjects===!0&&S.sort(de,ue),mt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,mt&&Qe.addToRenderList(S,C),this.info.render.frame++,ke===!0&&ye.beginShadows();const ae=_.state.shadowsArray;Ve.render(ae,C,Y),ke===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ce=S.opaque,q=S.transmissive;if(_.setupLights(),Y.isArrayCamera){const be=Y.cameras;if(q.length>0)for(let Ne=0,je=be.length;Ne<je;Ne++){const Fe=be[Ne];Lr(ce,q,C,Fe)}mt&&Qe.render(C);for(let Ne=0,je=be.length;Ne<je;Ne++){const Fe=be[Ne];er(S,C,Fe,Fe.viewport)}}else q.length>0&&Lr(ce,q,C,Y),mt&&Qe.render(C),er(S,C,Y);B!==null&&V===0&&(dt.updateMultisampleRenderTarget(B),dt.updateRenderTargetMipmap(B)),C.isScene===!0&&C.onAfterRender(P,C,Y),Pe.resetDefaultState(),D=-1,R=null,N.pop(),N.length>0?(_=N[N.length-1],ke===!0&&ye.setGlobalState(P.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function ho(C,Y,ae,ce){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ce.intersectsSprite(C)){ce&&Re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(re);const Ne=G.update(C),je=C.material;je.visible&&S.push(C,Ne,je,ae,Re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ce.intersectsObject(C))){const Ne=G.update(C),je=C.material;if(ce&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Re.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Re.copy(Ne.boundingSphere.center)),Re.applyMatrix4(C.matrixWorld).applyMatrix4(re)),Array.isArray(je)){const Fe=Ne.groups;for(let ot=0,lt=Fe.length;ot<lt;ot++){const Je=Fe[ot],ft=je[Je.materialIndex];ft&&ft.visible&&S.push(C,Ne,ft,ae,Re.z,Je)}}else je.visible&&S.push(C,Ne,je,ae,Re.z,null)}}const be=C.children;for(let Ne=0,je=be.length;Ne<je;Ne++)ho(be[Ne],Y,ae,ce)}function er(C,Y,ae,ce){const q=C.opaque,be=C.transmissive,Ne=C.transparent;_.setupLightsView(ae),ke===!0&&ye.setGlobalState(P.clippingPlanes,ae),ce&&He.viewport(j.copy(ce)),q.length>0&&Ri(q,Y,ae),be.length>0&&Ri(be,Y,ae),Ne.length>0&&Ri(Ne,Y,ae),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Lr(C,Y,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ce.id]===void 0&&(_.state.transmissionRenderTarget[ce.id]=new Nr(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?ao:Ki,minFilter:ss,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace}));const be=_.state.transmissionRenderTarget[ce.id],Ne=ce.viewport||j;be.setSize(Ne.z*P.transmissionResolutionScale,Ne.w*P.transmissionResolutionScale);const je=P.getRenderTarget(),Fe=P.getActiveCubeFace(),ot=P.getActiveMipmapLevel();P.setRenderTarget(be),P.getClearColor(ie),fe=P.getClearAlpha(),fe<1&&P.setClearColor(16777215,.5),P.clear(),mt&&Qe.render(ae);const lt=P.toneMapping;P.toneMapping=Pr;const Je=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),_.setupLightsView(ce),ke===!0&&ye.setGlobalState(P.clippingPlanes,ce),Ri(C,ae,ce),dt.updateMultisampleRenderTarget(be),dt.updateRenderTargetMipmap(be),ut.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let kt=0,Rt=Y.length;kt<Rt;kt++){const Ht=Y[kt],Ft=Ht.object,tt=Ht.geometry,zt=Ht.material,Mt=Ht.group;if(zt.side===qi&&Ft.layers.test(ce.layers)){const sn=zt.side;zt.side=Bn,zt.needsUpdate=!0,ds(Ft,ae,ce,tt,zt,Mt),zt.side=sn,zt.needsUpdate=!0,ft=!0}}ft===!0&&(dt.updateMultisampleRenderTarget(be),dt.updateRenderTargetMipmap(be))}P.setRenderTarget(je,Fe,ot),P.setClearColor(ie,fe),Je!==void 0&&(ce.viewport=Je),P.toneMapping=lt}function Ri(C,Y,ae){const ce=Y.isScene===!0?Y.overrideMaterial:null;for(let q=0,be=C.length;q<be;q++){const Ne=C[q],je=Ne.object,Fe=Ne.geometry,ot=Ne.group;let lt=Ne.material;lt.allowOverride===!0&&ce!==null&&(lt=ce),je.layers.test(ae.layers)&&ds(je,Y,ae,Fe,lt,ot)}}function ds(C,Y,ae,ce,q,be){C.onBeforeRender(P,Y,ae,ce,q,be),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(P,Y,ae,ce,C,be),q.transparent===!0&&q.side===qi&&q.forceSinglePass===!1?(q.side=Bn,q.needsUpdate=!0,P.renderBufferDirect(ae,Y,ce,q,C,be),q.side=Dr,q.needsUpdate=!0,P.renderBufferDirect(ae,Y,ce,q,C,be),q.side=qi):P.renderBufferDirect(ae,Y,ce,q,C,be),C.onAfterRender(P,Y,ae,ce,q,be)}function fs(C,Y,ae){Y.isScene!==!0&&(Y=De);const ce=ze.get(C),q=_.state.lights,be=_.state.shadowsArray,Ne=q.state.version,je=ee.getParameters(C,q.state,be,Y,ae),Fe=ee.getProgramCacheKey(je);let ot=ce.programs;ce.environment=C.isMeshStandardMaterial?Y.environment:null,ce.fog=Y.fog,ce.envMap=(C.isMeshStandardMaterial?it:Ot).get(C.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,ot===void 0&&(C.addEventListener("dispose",ge),ot=new Map,ce.programs=ot);let lt=ot.get(Fe);if(lt!==void 0){if(ce.currentProgram===lt&&ce.lightsStateVersion===Ne)return ma(C,je),lt}else je.uniforms=ee.getUniforms(C),C.onBeforeCompile(je,P),lt=ee.acquireProgram(je,Fe),ot.set(Fe,lt),ce.uniforms=je.uniforms;const Je=ce.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Je.clippingPlanes=ye.uniform),ma(C,je),ce.needsLights=va(C),ce.lightsStateVersion=Ne,ce.needsLights&&(Je.ambientLightColor.value=q.state.ambient,Je.lightProbe.value=q.state.probe,Je.directionalLights.value=q.state.directional,Je.directionalLightShadows.value=q.state.directionalShadow,Je.spotLights.value=q.state.spot,Je.spotLightShadows.value=q.state.spotShadow,Je.rectAreaLights.value=q.state.rectArea,Je.ltc_1.value=q.state.rectAreaLTC1,Je.ltc_2.value=q.state.rectAreaLTC2,Je.pointLights.value=q.state.point,Je.pointLightShadows.value=q.state.pointShadow,Je.hemisphereLights.value=q.state.hemi,Je.directionalShadowMap.value=q.state.directionalShadowMap,Je.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Je.spotShadowMap.value=q.state.spotShadowMap,Je.spotLightMatrix.value=q.state.spotLightMatrix,Je.spotLightMap.value=q.state.spotLightMap,Je.pointShadowMap.value=q.state.pointShadowMap,Je.pointShadowMatrix.value=q.state.pointShadowMatrix),ce.currentProgram=lt,ce.uniformsList=null,lt}function pa(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=ic.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function ma(C,Y){const ae=ze.get(C);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function Pi(C,Y,ae,ce,q){Y.isScene!==!0&&(Y=De),dt.resetTextureUnits();const be=Y.fog,Ne=ce.isMeshStandardMaterial?Y.environment:null,je=B===null?P.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:so,Fe=(ce.isMeshStandardMaterial?it:Ot).get(ce.envMap||Ne),ot=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,lt=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Je=!!ae.morphAttributes.position,ft=!!ae.morphAttributes.normal,kt=!!ae.morphAttributes.color;let Rt=Pr;ce.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Rt=P.toneMapping);const Ht=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ft=Ht!==void 0?Ht.length:0,tt=ze.get(ce),zt=_.state.lights;if(ke===!0&&(J===!0||C!==R)){const Qt=C===R&&ce.id===D;ye.setState(ce,C,Qt)}let Mt=!1;ce.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==zt.state.version||tt.outputColorSpace!==je||q.isBatchedMesh&&tt.batching===!1||!q.isBatchedMesh&&tt.batching===!0||q.isBatchedMesh&&tt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&tt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&tt.instancing===!1||!q.isInstancedMesh&&tt.instancing===!0||q.isSkinnedMesh&&tt.skinning===!1||!q.isSkinnedMesh&&tt.skinning===!0||q.isInstancedMesh&&tt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&tt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&tt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&tt.instancingMorph===!1&&q.morphTexture!==null||tt.envMap!==Fe||ce.fog===!0&&tt.fog!==be||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==ye.numPlanes||tt.numIntersection!==ye.numIntersection)||tt.vertexAlphas!==ot||tt.vertexTangents!==lt||tt.morphTargets!==Je||tt.morphNormals!==ft||tt.morphColors!==kt||tt.toneMapping!==Rt||tt.morphTargetsCount!==Ft)&&(Mt=!0):(Mt=!0,tt.__version=ce.version);let sn=tt.currentProgram;Mt===!0&&(sn=fs(ce,Y,q));let li=!1,Tn=!1,Ir=!1;const Vt=sn.getUniforms(),An=tt.uniforms;if(He.useProgram(sn.program)&&(li=!0,Tn=!0,Ir=!0),ce.id!==D&&(D=ce.id,Tn=!0),li||R!==C){He.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Vt.setValue(O,"projectionMatrix",C.projectionMatrix),Vt.setValue(O,"viewMatrix",C.matrixWorldInverse);const _n=Vt.map.cameraPosition;_n!==void 0&&_n.setValue(O,xe.setFromMatrixPosition(C.matrixWorld)),nt.logarithmicDepthBuffer&&Vt.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Vt.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Tn=!0,Ir=!0)}if(q.isSkinnedMesh){Vt.setOptional(O,q,"bindMatrix"),Vt.setOptional(O,q,"bindMatrixInverse");const Qt=q.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Vt.setValue(O,"boneTexture",Qt.boneTexture,dt))}q.isBatchedMesh&&(Vt.setOptional(O,q,"batchingTexture"),Vt.setValue(O,"batchingTexture",q._matricesTexture,dt),Vt.setOptional(O,q,"batchingIdTexture"),Vt.setValue(O,"batchingIdTexture",q._indirectTexture,dt),Vt.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&Vt.setValue(O,"batchingColorTexture",q._colorsTexture,dt));const xn=ae.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&we.update(q,ae,sn),(Tn||tt.receiveShadow!==q.receiveShadow)&&(tt.receiveShadow=q.receiveShadow,Vt.setValue(O,"receiveShadow",q.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(An.envMap.value=Fe,An.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&Y.environment!==null&&(An.envMapIntensity.value=Y.environmentIntensity),Tn&&(Vt.setValue(O,"toneMappingExposure",P.toneMappingExposure),tt.needsLights&&ga(An,Ir),be&&ce.fog===!0&&he.refreshFogUniforms(An,be),he.refreshMaterialUniforms(An,ce,L,pe,_.state.transmissionRenderTarget[C.id]),ic.upload(O,pa(tt),An,dt)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(ic.upload(O,pa(tt),An,dt),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Vt.setValue(O,"center",q.center),Vt.setValue(O,"modelViewMatrix",q.modelViewMatrix),Vt.setValue(O,"normalMatrix",q.normalMatrix),Vt.setValue(O,"modelMatrix",q.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Qt=ce.uniformsGroups;for(let _n=0,kr=Qt.length;_n<kr;_n++){const Et=Qt[_n];gt.update(Et,sn),gt.bind(Et,sn)}}return sn}function ga(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function va(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,Y,ae){const ce=ze.get(C);ce.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),ze.get(C.texture).__webglTexture=Y,ze.get(C.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:ae,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const ae=ze.get(C);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0};const gc=O.createFramebuffer();this.setRenderTarget=function(C,Y=0,ae=0){B=C,F=Y,V=ae;let ce=!0,q=null,be=!1,Ne=!1;if(C){const Fe=ze.get(C);if(Fe.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(O.FRAMEBUFFER,null),ce=!1;else if(Fe.__webglFramebuffer===void 0)dt.setupRenderTarget(C);else if(Fe.__hasExternalTextures)dt.rebindTextures(C,ze.get(C.texture).__webglTexture,ze.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Je=C.depthTexture;if(Fe.__boundDepthTexture!==Je){if(Je!==null&&ze.has(Je)&&(C.width!==Je.image.width||C.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(C)}}const ot=C.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Ne=!0);const lt=ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(lt[Y])?q=lt[Y][ae]:q=lt[Y],be=!0):C.samples>0&&dt.useMultisampledRTT(C)===!1?q=ze.get(C).__webglMultisampledFramebuffer:Array.isArray(lt)?q=lt[ae]:q=lt,j.copy(C.viewport),Z.copy(C.scissor),oe=C.scissorTest}else j.copy(U).multiplyScalar(L).floor(),Z.copy(te).multiplyScalar(L).floor(),oe=me;if(ae!==0&&(q=gc),He.bindFramebuffer(O.FRAMEBUFFER,q)&&ce&&He.drawBuffers(C,q),He.viewport(j),He.scissor(Z),He.setScissorTest(oe),be){const Fe=ze.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Fe.__webglTexture,ae)}else if(Ne){const Fe=Y;for(let ot=0;ot<C.textures.length;ot++){const lt=ze.get(C.textures[ot]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ot,lt.__webglTexture,ae,Fe)}}else if(C!==null&&ae!==0){const Fe=ze.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Fe.__webglTexture,ae)}D=-1},this.readRenderTargetPixels=function(C,Y,ae,ce,q,be,Ne,je=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){He.bindFramebuffer(O.FRAMEBUFFER,Fe);try{const ot=C.textures[je],lt=ot.format,Je=ot.type;if(!nt.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-ce&&ae>=0&&ae<=C.height-q&&(C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+je),O.readPixels(Y,ae,ce,q,Ke.convert(lt),Ke.convert(Je),be))}finally{const ot=B!==null?ze.get(B).__webglFramebuffer:null;He.bindFramebuffer(O.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(C,Y,ae,ce,q,be,Ne,je=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe)if(Y>=0&&Y<=C.width-ce&&ae>=0&&ae<=C.height-q){He.bindFramebuffer(O.FRAMEBUFFER,Fe);const ot=C.textures[je],lt=ot.format,Je=ot.type;if(!nt.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ft),O.bufferData(O.PIXEL_PACK_BUFFER,be.byteLength,O.STREAM_READ),C.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+je),O.readPixels(Y,ae,ce,q,Ke.convert(lt),Ke.convert(Je),0);const kt=B!==null?ze.get(B).__webglFramebuffer:null;He.bindFramebuffer(O.FRAMEBUFFER,kt);const Rt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await pS(O,Rt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ft),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,be),O.deleteBuffer(ft),O.deleteSync(Rt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,ae=0){const ce=Math.pow(2,-ae),q=Math.floor(C.image.width*ce),be=Math.floor(C.image.height*ce),Ne=Y!==null?Y.x:0,je=Y!==null?Y.y:0;dt.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,ae,0,0,Ne,je,q,be),He.unbindTexture()};const xa=O.createFramebuffer(),_a=O.createFramebuffer();this.copyTextureToTexture=function(C,Y,ae=null,ce=null,q=0,be=null){be===null&&(q!==0?(aa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=q,q=0):be=0);let Ne,je,Fe,ot,lt,Je,ft,kt,Rt;const Ht=C.isCompressedTexture?C.mipmaps[be]:C.image;if(ae!==null)Ne=ae.max.x-ae.min.x,je=ae.max.y-ae.min.y,Fe=ae.isBox3?ae.max.z-ae.min.z:1,ot=ae.min.x,lt=ae.min.y,Je=ae.isBox3?ae.min.z:0;else{const xn=Math.pow(2,-q);Ne=Math.floor(Ht.width*xn),je=Math.floor(Ht.height*xn),C.isDataArrayTexture?Fe=Ht.depth:C.isData3DTexture?Fe=Math.floor(Ht.depth*xn):Fe=1,ot=0,lt=0,Je=0}ce!==null?(ft=ce.x,kt=ce.y,Rt=ce.z):(ft=0,kt=0,Rt=0);const Ft=Ke.convert(Y.format),tt=Ke.convert(Y.type);let zt;Y.isData3DTexture?(dt.setTexture3D(Y,0),zt=O.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(dt.setTexture2DArray(Y,0),zt=O.TEXTURE_2D_ARRAY):(dt.setTexture2D(Y,0),zt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const Mt=O.getParameter(O.UNPACK_ROW_LENGTH),sn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),li=O.getParameter(O.UNPACK_SKIP_PIXELS),Tn=O.getParameter(O.UNPACK_SKIP_ROWS),Ir=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ht.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ht.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ot),O.pixelStorei(O.UNPACK_SKIP_ROWS,lt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Je);const Vt=C.isDataArrayTexture||C.isData3DTexture,An=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const xn=ze.get(C),Qt=ze.get(Y),_n=ze.get(xn.__renderTarget),kr=ze.get(Qt.__renderTarget);He.bindFramebuffer(O.READ_FRAMEBUFFER,_n.__webglFramebuffer),He.bindFramebuffer(O.DRAW_FRAMEBUFFER,kr.__webglFramebuffer);for(let Et=0;Et<Fe;Et++)Vt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.get(C).__webglTexture,q,Je+Et),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ze.get(Y).__webglTexture,be,Rt+Et)),O.blitFramebuffer(ot,lt,Ne,je,ft,kt,Ne,je,O.DEPTH_BUFFER_BIT,O.NEAREST);He.bindFramebuffer(O.READ_FRAMEBUFFER,null),He.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||ze.has(C)){const xn=ze.get(C),Qt=ze.get(Y);He.bindFramebuffer(O.READ_FRAMEBUFFER,xa),He.bindFramebuffer(O.DRAW_FRAMEBUFFER,_a);for(let _n=0;_n<Fe;_n++)Vt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,xn.__webglTexture,q,Je+_n):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xn.__webglTexture,q),An?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Qt.__webglTexture,be,Rt+_n):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Qt.__webglTexture,be),q!==0?O.blitFramebuffer(ot,lt,Ne,je,ft,kt,Ne,je,O.COLOR_BUFFER_BIT,O.NEAREST):An?O.copyTexSubImage3D(zt,be,ft,kt,Rt+_n,ot,lt,Ne,je):O.copyTexSubImage2D(zt,be,ft,kt,ot,lt,Ne,je);He.bindFramebuffer(O.READ_FRAMEBUFFER,null),He.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else An?C.isDataTexture||C.isData3DTexture?O.texSubImage3D(zt,be,ft,kt,Rt,Ne,je,Fe,Ft,tt,Ht.data):Y.isCompressedArrayTexture?O.compressedTexSubImage3D(zt,be,ft,kt,Rt,Ne,je,Fe,Ft,Ht.data):O.texSubImage3D(zt,be,ft,kt,Rt,Ne,je,Fe,Ft,tt,Ht):C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,be,ft,kt,Ne,je,Ft,tt,Ht.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,be,ft,kt,Ht.width,Ht.height,Ft,Ht.data):O.texSubImage2D(O.TEXTURE_2D,be,ft,kt,Ne,je,Ft,tt,Ht);O.pixelStorei(O.UNPACK_ROW_LENGTH,Mt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,sn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,li),O.pixelStorei(O.UNPACK_SKIP_ROWS,Tn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ir),be===0&&Y.generateMipmaps&&O.generateMipmap(zt),He.unbindTexture()},this.initRenderTarget=function(C){ze.get(C).__webglFramebuffer===void 0&&dt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?dt.setTextureCube(C,0):C.isData3DTexture?dt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?dt.setTexture2DArray(C,0):dt.setTexture2D(C,0),He.unbindTexture()},this.resetState=function(){F=0,V=0,B=null,He.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}}function Iw({mouseForce:s=20,cursorSize:e=100,isViscous:t=!1,viscous:r=30,iterationsViscous:a=32,iterationsPoisson:l=32,dt:u=.014,BFECC:d=!0,resolution:h=.5,isBounce:m=!1,colors:x=["#5227FF","#FF9FFC","#B19EEF"],style:v={},className:y="",autoDemo:M=!0,autoSpeed:A=.5,autoIntensity:w=2.2,takeoverDuration:S=.25,autoResumeDelay:_=1e3,autoRampDuration:I=.6}){const N=et.useRef(null),P=et.useRef(null),z=et.useRef(null),F=et.useRef(null),V=et.useRef(null),B=et.useRef(!0),D=et.useRef(null);return et.useEffect(()=>{if(!N.current)return;function R(it){let E;Array.isArray(it)&&it.length>0?it.length===1?E=[it[0],it[0]]:E=it:E=["#ffffff","#ffffff"];const b=E.length,G=new Uint8Array(b*4);for(let he=0;he<b;he++){const le=new Lt(E[he]);G[he*4+0]=Math.round(le.r*255),G[he*4+1]=Math.round(le.g*255),G[he*4+2]=Math.round(le.b*255),G[he*4+3]=255}const ee=new zS(G,b,1,oi);return ee.magFilter=zn,ee.minFilter=zn,ee.wrapS=yi,ee.wrapT=yi,ee.generateMipmaps=!1,ee.needsUpdate=!0,ee}const j=R(x),Z=new Zt(0,0,0,0);class oe{width=0;height=0;aspect=1;pixelRatio=1;isMobile=!1;breakpoint=768;fboWidth=null;fboHeight=null;time=0;delta=0;container=null;renderer=null;clock=null;init(E){this.container=E,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new Lw({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Lt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new KS,this.clock.start()}resize(){if(!this.container)return;const E=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(E.width)),this.height=Math.max(1,Math.floor(E.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.clock&&(this.delta=this.clock.getDelta(),this.time+=this.delta)}}const ie=new oe;class fe{mouseMoved=!1;coords=new vt;coords_old=new vt;diff=new vt;timer=null;hasUserTimer=null;container=null;_onMouseMove=null;_onTouchStart=null;_onTouchMove=null;_onMouseEnter=null;_onMouseLeave=null;_onTouchEnd=null;isHoverInside=!1;hasUserControl=!1;isAutoActive=!1;autoIntensity=2;takeoverActive=!1;takeoverStartTime=0;takeoverDuration=.25;takeoverFrom=new vt;takeoverTo=new vt;onInteract=null;init(E){this.container=E,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),E.addEventListener("mousemove",this._onMouseMove,!1),E.addEventListener("touchstart",this._onTouchStart,!1),E.addEventListener("touchmove",this._onTouchMove,!1),E.addEventListener("mouseenter",this._onMouseEnter,!1),E.addEventListener("mouseleave",this._onMouseLeave,!1),E.addEventListener("touchend",this._onTouchEnd,!1)}dispose(){this.container&&(this.container.removeEventListener("mousemove",this._onMouseMove,!1),this.container.removeEventListener("touchstart",this._onTouchStart,!1),this.container.removeEventListener("touchmove",this._onTouchMove,!1),this.container.removeEventListener("mouseenter",this._onMouseEnter,!1),this.container.removeEventListener("mouseleave",this._onMouseLeave,!1),this.container.removeEventListener("touchend",this._onTouchEnd,!1))}setCoords(E,b){if(!this.container)return;this.timer&&clearTimeout(this.timer),this.hasUserTimer&&clearTimeout(this.hasUserTimer);const G=this.container.getBoundingClientRect(),ee=(E-G.left)/G.width,he=(b-G.top)/G.height;this.coords.set(ee*2-1,-(he*2-1)),this.mouseMoved=!0,this.hasUserControl=!0,this.timer=setTimeout(()=>{this.mouseMoved=!1},100),this.hasUserTimer=setTimeout(()=>{this.hasUserControl=!1},300)}setNormalized(E,b){this.coords.set(E,b),this.mouseMoved=!0,this.hasUserControl=!0,this.hasUserTimer&&clearTimeout(this.hasUserTimer),this.hasUserTimer=setTimeout(()=>{this.hasUserControl=!1},300)}onDocumentMouseMove(E){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){const b=this.container.getBoundingClientRect(),G=(E.clientX-b.left)/b.width,ee=(E.clientY-b.top)/b.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(G*2-1,-(ee*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.takeoverDuration=Math.min(this.takeoverDuration||.05,.05),this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(E.clientX,E.clientY),this.hasUserControl=!0}onDocumentTouchStart(E){if(E.touches.length===1){const b=E.touches[0];this.onInteract&&this.onInteract(),this.setCoords(b.pageX,b.pageY),this.hasUserControl=!0}}onDocumentTouchMove(E){if(E.touches.length===1){const b=E.touches[0];this.onInteract&&this.onInteract(),this.setCoords(b.pageX,b.pageY)}}onTouchEnd(){this.isHoverInside=!1,this.hasUserControl=!1,this.hasUserTimer&&(clearTimeout(this.hasUserTimer),this.hasUserTimer=null)}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1,this.hasUserControl=!1,this.hasUserTimer&&(clearTimeout(this.hasUserTimer),this.hasUserTimer=null)}update(){if(this.takeoverActive){const E=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(E>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const b=E*E*(3-2*E);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,b)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const Q=new fe;class pe{mouse;manager;enabled;speed;resumeDelay;rampDurationMs;active=!1;current=new vt(0,0);target=new vt;lastTime=performance.now();activationTime=0;margin=.2;_tmpDir=new vt;constructor(E,b,G){this.mouse=E,this.manager=b,this.enabled=G.enabled,this.speed=G.speed,this.resumeDelay=G.resumeDelay||3e3,this.rampDurationMs=(G.rampDuration||0)*1e3,this.pickNewTarget()}pickNewTarget(){const E=Math.random;this.target.set((E()*2-1)*(1-this.margin),(E()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const E=performance.now();this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=E,this.activationTime=E),this.mouse.isAutoActive=!0;let b=(E-this.lastTime)/1e3;this.lastTime=E,b>.2&&(b=.016);const G=this._tmpDir.subVectors(this.target,this.current),ee=G.length();if(ee<.01){this.pickNewTarget();return}G.normalize();let he=1;if(this.rampDurationMs>0){const ye=Math.min(1,(E-this.activationTime)/this.rampDurationMs);he=ye*ye*(3-2*ye)}const le=this.speed*b*he,qe=Math.min(le,ee);this.current.addScaledVector(G,qe),this.mouse.setNormalized(this.current.x,this.current.y)}}const L=`
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
`,U=`
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
`,ke=`
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
`;class xe{props;uniforms;scene;camera;material;geometry;plane;constructor(E){this.props=E||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Eg,this.camera=new uc,this.uniforms&&(this.material=new Gl(this.props.material),this.geometry=new as(2,2),this.plane=new ai(this.geometry,this.material),this.scene.add(this.plane))}update(){ie.renderer.setRenderTarget(this.props.output||null),ie.renderer.render(this.scene,this.camera),ie.renderer.setRenderTarget(null)}}class Re extends xe{line;constructor(E){super({material:{vertexShader:L,fragmentShader:U,uniforms:{boundarySpace:{value:E.cellScale},px:{value:E.cellScale},fboSize:{value:E.fboSize},velocity:{value:E.src.texture},dt:{value:E.dt},isBFECC:{value:!0}}},output:E.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const E=new Ji,b=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);E.setAttribute("position",new Si(b,3));const G=new Gl({vertexShader:de,fragmentShader:U,uniforms:this.uniforms});this.line=new WS(E,G),this.scene.add(this.line)}update({dt:E,isBounce:b,BFECC:G}){this.uniforms.dt.value=E,this.line.visible=b,this.uniforms.isBFECC.value=G,super.update()}}class De extends xe{mouse;constructor(E){super({output:E.dst}),this.init(E)}init(E){super.init();const b=new as(1,1),G=new Gl({vertexShader:ue,fragmentShader:Ce,blending:Zd,depthWrite:!1,uniforms:{px:{value:E.cellScale},force:{value:new vt(0,0)},center:{value:new vt(0,0)},scale:{value:new vt(E.cursor_size,E.cursor_size)}}});this.mouse=new ai(b,G),this.scene.add(this.mouse)}update(E){const b=Q.diff.x/2*E.mouse_force,G=Q.diff.y/2*E.mouse_force,ee=E.cursor_size*E.cellScale.x,he=E.cursor_size*E.cellScale.y,le=Math.min(Math.max(Q.coords.x,-1+ee+E.cellScale.x*2),1-ee-E.cellScale.x*2),qe=Math.min(Math.max(Q.coords.y,-1+he+E.cellScale.y*2),1-he-E.cellScale.y*2),ye=this.mouse.material.uniforms;ye.force.value.set(b,G),ye.center.value.set(le,qe),ye.scale.value.set(E.cursor_size,E.cursor_size),super.update()}}class mt extends xe{constructor(E){super({material:{vertexShader:L,fragmentShader:re,uniforms:{boundarySpace:{value:E.boundarySpace},velocity:{value:E.src.texture},velocity_new:{value:E.dst_.texture},v:{value:E.viscous},px:{value:E.cellScale},dt:{value:E.dt}}},output:E.dst,output0:E.dst_,output1:E.dst}),this.init()}update({viscous:E,iterations:b,dt:G}){let ee,he;this.uniforms.v.value=E;for(let le=0;le<b;le++)le%2===0?(ee=this.props.output0,he=this.props.output1):(ee=this.props.output1,he=this.props.output0),this.uniforms.velocity_new.value=ee.texture,this.props.output=he,this.uniforms.dt.value=G,super.update();return he}}class jt extends xe{constructor(E){super({material:{vertexShader:L,fragmentShader:me,uniforms:{boundarySpace:{value:E.boundarySpace},velocity:{value:E.src.texture},px:{value:E.cellScale},dt:{value:E.dt}}},output:E.dst}),this.init()}update({vel:E}){this.uniforms.velocity.value=E.texture,super.update()}}class O extends xe{constructor(E){super({material:{vertexShader:L,fragmentShader:ke,uniforms:{boundarySpace:{value:E.boundarySpace},pressure:{value:E.dst_.texture},divergence:{value:E.src.texture},px:{value:E.cellScale}}},output:E.dst,output0:E.dst_,output1:E.dst}),this.init()}update({iterations:E}){let b,G;for(let ee=0;ee<E;ee++)ee%2===0?(b=this.props.output0,G=this.props.output1):(b=this.props.output1,G=this.props.output0),this.uniforms.pressure.value=b.texture,this.props.output=G,super.update();return G}}class It extends xe{constructor(E){super({material:{vertexShader:L,fragmentShader:J,uniforms:{boundarySpace:{value:E.boundarySpace},pressure:{value:E.src_p.texture},velocity:{value:E.src_v.texture},px:{value:E.cellScale},dt:{value:E.dt}}},output:E.dst}),this.init()}update({vel:E,pressure:b}){this.uniforms.velocity.value=E.texture,this.uniforms.pressure.value=b.texture,super.update()}}class ut{options;fbos;fboSize;cellScale;boundarySpace;constructor(E={}){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...E},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new vt,this.cellScale=new vt,this.boundarySpace=new vt,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?ao:Ai}createAllFBO(){const b={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:zn,magFilter:zn,wrapS:yi,wrapT:yi};for(let G in this.fbos)this.fbos[G]=new Nr(this.fboSize.x,this.fboSize.y,b)}createShaderPass(){this.advection=new Re({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new De({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new mt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new jt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new O({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new It({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const E=Math.max(1,Math.round(this.options.resolution*ie.width)),b=Math.max(1,Math.round(this.options.resolution*ie.height)),G=1/E,ee=1/b;this.cellScale.set(G,ee),this.fboSize.set(E,b)}resize(){this.calcSize();for(let E in this.fbos)this.fbos[E].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let E=this.fbos.vel_1;this.options.isViscous&&(E=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:E});const b=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:E,pressure:b})}}class nt{simulation;scene;camera;output;constructor(){this.init()}init(){this.simulation=new ut,this.scene=new Eg,this.camera=new uc,this.output=new ai(new as(2,2),new Gl({vertexShader:L,fragmentShader:te,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new vt},palette:{value:j},bgColor:{value:Z}}})),this.scene.add(this.output)}addScene(E){this.scene.add(E)}resize(){this.simulation.resize()}render(){ie.renderer.setRenderTarget(null),ie.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class He{props;lastUserInteraction=performance.now();autoDriver=null;_loop=null;_resize=null;_onVisibility=null;running=!1;output;constructor(E){this.props=E,ie.init(E.$wrapper),Q.init(E.$wrapper),Q.autoIntensity=E.autoIntensity,Q.takeoverDuration=Math.min(E.takeoverDuration||.25,.05),this.lastUserInteraction=performance.now(),Q.onInteract=()=>{this.lastUserInteraction=performance.now()},this.autoDriver=new pe(Q,this,{enabled:E.autoDemo,speed:E.autoSpeed,resumeDelay:E.autoResumeDelay,rampDuration:E.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():B.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ie.renderer.domElement),this.output=new nt}resize(){ie.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),Q.update(),ie.update(),this.output.update()}loop(){this.running&&(this.render(),F.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,F.current&&(cancelAnimationFrame(F.current),F.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),Q.dispose(),ie.renderer){const E=ie.renderer.domElement;E&&E.parentNode&&E.parentNode.removeChild(E),ie.renderer.dispose()}}catch{}}}const At=N.current;At.style.position=At.style.position||"relative",At.style.overflow=At.style.overflow||"hidden";const ze=new He({$wrapper:At,autoDemo:M,autoSpeed:A,autoIntensity:w,takeoverDuration:S,autoResumeDelay:_,autoRampDuration:I});P.current=ze,(()=>{if(!P.current)return;const it=P.current.output?.simulation;if(!it)return;const E=it.options.resolution;Object.assign(it.options,{mouse_force:s,cursor_size:e,isViscous:t,viscous:r,iterations_viscous:a,iterations_poisson:l,dt:u,BFECC:d,resolution:h,isBounce:m}),h!==E&&it.resize()})(),ze.start();const Ot=new ResizeObserver(()=>{P.current&&(D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{P.current&&P.current.resize()}))});return Ot.observe(At),z.current=Ot,()=>{if(F.current&&cancelAnimationFrame(F.current),z.current)try{z.current.disconnect()}catch{}if(V.current)try{V.current.disconnect()}catch{}P.current&&P.current.dispose(),P.current=null}},[d,e,u,m,t,l,a,s,h,r,x,M,A,w,S,_,I]),et.useEffect(()=>{const R=P.current;if(!R)return;const j=R.output?.simulation;if(!j)return;const Z=j.options.resolution;Object.assign(j.options,{mouse_force:s,cursor_size:e,isViscous:t,viscous:r,iterations_viscous:a,iterations_poisson:l,dt:u,BFECC:d,resolution:h,isBounce:m}),R.autoDriver&&(R.autoDriver.enabled=M,R.autoDriver.speed=A,R.autoDriver.resumeDelay=_,R.autoDriver.rampDurationMs=I*1e3,R.autoDriver.mouse&&(R.autoDriver.mouse.autoIntensity=w,R.autoDriver.mouse.takeoverDuration=S)),h!==Z&&j.resize()},[s,e,t,r,a,l,u,d,h,m,M,A,w,S,_,I]),p.jsx("div",{ref:N,className:`liquid-ether-container ${y||""}`,style:v})}function kw(){const[s,e]=et.useState(!1);et.useEffect(()=>{const r=setTimeout(()=>e(!0),20);return()=>clearTimeout(r)},[]);const t=()=>Xi("leistungen");return p.jsxs("section",{id:"home",className:"pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden",children:[p.jsx("style",{children:`
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
        `}),p.jsx("div",{className:"absolute inset-0 z-0",children:p.jsx(Iw,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:24,cursorSize:100,isViscous:!1,viscous:30,autoSpeed:.25,autoIntensity:3,takeoverDuration:.15,autoResumeDelay:500,autoRampDuration:.6})}),p.jsx("div",{className:"container mx-auto text-center relative z-10 "+(s?"animate-words":""),children:p.jsxs("div",{className:"relative max-w-4xl mx-auto mb-6",children:[p.jsx("span",{"aria-hidden":"true",className:"absolute inset-0 mx-auto text-5xl md:text-7xl leading-tight -z-20 pointer-events-none",style:{background:"linear-gradient(90deg, rgba(130,87,229,0.18), rgba(255,121,198,0.14))",WebkitBackgroundClip:"text",color:"transparent",opacity:.95,transform:"scale(1.02)"},children:"Von der Vision zur Website"}),p.jsx("span",{"aria-hidden":"true",className:"absolute inset-0 mx-auto text-5xl md:text-7xl leading-tight -z-10 pointer-events-none",style:{color:"#ffffff",opacity:.12,transform:"scale(1.01)"},children:"Von der Vision zur Website"}),p.jsxs("h1",{className:"relative text-5xl md:text-7xl text-white leading-tight",children:[p.jsx("span",{className:"word delay-1",children:"Von"})," ",p.jsx("span",{className:"word delay-2",children:"der"})," ",p.jsx("span",{className:"word delay-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400",children:"Vision"})," ",p.jsx("span",{className:"word delay-4",children:"zur"})," ",p.jsx("span",{className:"word delay-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400",children:"Website"})]}),p.jsx("p",{className:"text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-6 line line-delay-6",children:"Hochwertiges Webdesign und strategische Umsetzung für Ihren nachhaltigen Unternehmenserfolg"}),p.jsx("div",{className:"flex justify-center items-center mt-6 mb-12",children:p.jsx("a",{href:"/leistungen",onClick:r=>{r.preventDefault(),t()},className:"line line-delay-7 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm font-medium",children:"Meine Leistungen"})})]})}),p.jsxs("div",{onClick:()=>t(),onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),t())},role:"button",tabIndex:0,"aria-label":"Zum Abschnitt Leistungen scrollen",className:`
          absolute z-10 
          bottom-10           
          left-1/2 -translate-x-1/2 
          flex flex-col items-center cursor-pointer`,children:[p.jsx("p",{className:"text-slate-200 text-lg mb-3",children:"Mehr entdecken"}),p.jsx("div",{className:"w-[25px] h-[45px] border-2 border-slate-200 rounded-full relative overflow-hidden",children:p.jsx("div",{style:{backgroundColor:"#7b2cff"},className:"w-1.5 h-1.5 rounded-full absolute top-[5px] left-1/2 -translate-x-1/2 scroll-dot"})})]})]})}function Uw(){const s=[{number:"01",title:"Kostenloses Gespräch",description:"Erzähle mir von deiner Vision und deinen Zielen für deine Webseite.",icon:$_,features:["30 Min. Beratung","Unverbindlich","Individuelle Strategie"]},{number:"02",title:"Kostenloser Entwurf",description:"Ich erstelle einen maßgeschneiderten Entwurf, der deine Marke perfekt repräsentiert.",icon:f0,features:["Design-Konzept","2 Revisionen","Responsive Layout"]},{number:"03",title:"Feinschliff & Go-Live",description:"Ich kümmere mich um die Details und bringe deine neue Website online.",icon:oc,features:["Finalisierung","Testing","Launch Support"]}];return p.jsxs(p.Fragment,{children:[p.jsx("style",{children:`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}),p.jsxs("div",{className:"min-h-screen bg-slate-950 relative overflow-hidden",children:[p.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[p.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"}),p.jsx("div",{className:"absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse",style:{animationDelay:"1s"}}),p.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"})]}),p.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6 py-20",children:[p.jsxs("div",{id:"ablauf",className:"text-center mb-20",children:[p.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-6",children:[p.jsx(My,{className:"w-4 h-4 text-yellow-400"}),p.jsx("span",{className:"text-purple-300 text-sm font-medium",children:"Schnell. Professionell. Transparent."})]}),p.jsxs("h1",{className:"text-5xl md:text-4xl mb-6 text-white font-medium leading-tight",children:["Von der ",p.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient",children:"Idee"})," zur"," ",p.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 animate-gradient",children:"Webseite"})]}),p.jsx("p",{className:"text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed",children:"Deine professionelle Webseite in nur 3 einfachen Schritten"})]}),p.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20",children:s.map((e,t)=>p.jsx("div",{className:"group relative",style:{animationDelay:`${t*150}ms`},children:p.jsxs("div",{className:"relative h-full bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-transform duration-300 hover:shadow-lg hover:-translate-y-2",style:{willChange:"transform"},children:[p.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),p.jsxs("div",{className:"relative flex items-start justify-between mb-6",children:[p.jsx("div",{className:"px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30",children:p.jsxs("span",{className:"text-purple-300 font-medium",children:["Schritt ",e.number]})}),p.jsx("div",{className:"p-3 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:scale-110 transition-transform duration-300",children:p.jsx(e.icon,{className:"w-8 h-8 text-purple-400",strokeWidth:1.5})})]}),p.jsxs("div",{className:"relative space-y-4",children:[p.jsx("h3",{className:"text-white text-2xl font-medium leading-tight",children:e.title}),p.jsx("p",{className:"text-slate-400 leading-relaxed",children:e.description}),p.jsx("ul",{className:"space-y-2 pt-4",children:e.features.map((r,a)=>p.jsxs("li",{className:"flex items-center gap-2 text-slate-300 text-sm",children:[p.jsx("div",{className:"w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0",children:p.jsx(ta,{className:"w-3 h-3 text-purple-400",strokeWidth:3})}),r]},a))})]}),t<s.length-1&&p.jsx("div",{className:"hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20",children:p.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50",children:p.jsx("div",{className:"w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-white"})})})]})},e.number))}),p.jsxs("div",{className:"text-center",children:[p.jsxs("div",{className:"inline-flex flex-col sm:flex-row gap-4 items-center",children:[p.jsxs("button",{className:"group relative px-8 py-4 rounded-full overflow-hidden font-medium",children:[p.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] animate-gradient"}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"}),p.jsxs("span",{className:"relative text-white flex items-center gap-2",children:["Jetzt kostenlos starten",p.jsx(oc,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})]}),p.jsx("button",{onClick:()=>{const e=document.getElementById("kontakt");if(e){const t=document.querySelector("header"),r=t?t.offsetHeight:120,a=e.getBoundingClientRect().top+window.scrollY,l=Math.max(0,a-r-8);window.scrollTo({top:l,behavior:"smooth"});return}window.location.href="/#kontakt"},className:"px-8 py-4 rounded-full border-2 border-slate-700 text-slate-300 hover:border-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm font-medium",children:"Kontakt aufnehmen"})]}),p.jsx("p",{className:"mt-8 text-slate-500 text-sm",children:"✓ Keine versteckten Kosten · ✓ 100% Transparent · ✓ Persönlicher Support"})]})]})]})]})}function Fw(){const[s,e]=et.useState(!1),[t,r]=et.useState(!1),a=()=>{r(!0),e(!0)},l=()=>{r(!1),setTimeout(()=>e(!1),220)},u=()=>{const d=document.getElementById("kontakt");if(d){const h=document.querySelector("header"),m=h?h.offsetHeight:120,x=d.getBoundingClientRect().top+window.scrollY,v=Math.max(0,x-m-16);window.scrollTo({top:v,behavior:"smooth"}),setTimeout(()=>{const y=d.querySelector("textarea, input");y&&typeof y.focus=="function"&&y.focus()},650);return}window.location.href="/#kontakt"};return et.useEffect(()=>{const d=document.getElementById("home")||document.querySelector("header")||document.getElementById("hero"),h=document.getElementById("kontakt");if(!d||!h)return;const m=()=>d.offsetTop+d.offsetHeight,x=()=>h.offsetTop,v=()=>{const _=window.scrollY+window.innerHeight/2,I=m(),N=x();_>=I&&_<N?e(!0):(e(!1),t&&r(!1))},y=()=>v();window.addEventListener("load",y);let M=null;const A=()=>{M&&cancelAnimationFrame(M),M=requestAnimationFrame(()=>{v(),M=null})},w=()=>v();window.addEventListener("scroll",A,{passive:!0}),window.addEventListener("resize",w);const S=new MutationObserver(()=>{v()});return S.observe(document.body,{childList:!0,subtree:!0}),()=>{window.removeEventListener("load",y),window.removeEventListener("scroll",A),window.removeEventListener("resize",w),M&&cancelAnimationFrame(M),S.disconnect()}},[t]),p.jsxs("div",{role:"dialog","aria-label":"KI Assistent",style:{position:"fixed",right:20,bottom:20,zIndex:9999},children:[p.jsx("div",{style:{display:"flex",alignItems:"center",gap:12},children:!t&&p.jsx("button",{onClick:a,"aria-label":"Schreib mir",style:{display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(90deg,#6b21a8,#ff6fb3)",color:"white",width:56,height:56,padding:0,borderRadius:"9999px",boxShadow:"0 12px 30px rgba(0,0,0,0.25)",border:"none",cursor:"pointer",transition:"transform 600ms cubic-bezier(.2,.9,.25,1), box-shadow 300ms ease, opacity 600ms ease",transform:s?"translateX(0)":"translateX(80px)",opacity:s?1:0,pointerEvents:s?"auto":"none"},children:p.jsx(Qm,{className:"w-5 h-5"})})}),p.jsxs("div",{className:`mt-3 w-72 md:w-96 bg-slate-900/95 border border-slate-700/50 rounded-2xl shadow-xl overflow-hidden transform ${t?"translate-x-0 opacity-100":"translate-x-6 opacity-0 pointer-events-none"}`,style:{backdropFilter:"blur(6px)",position:"absolute",right:0,bottom:80,transition:"transform 600ms cubic-bezier(.2,.9,.25,1), opacity 600ms cubic-bezier(.2,.9,.25,1)"},children:[p.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-slate-700/30",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx(Qm,{className:"w-5 h-5 text-purple-400"}),p.jsxs("div",{children:[p.jsx("div",{className:"text-sm text-white font-semibold",children:"Kontakt aufnehmen"}),p.jsx("div",{className:"text-xs text-slate-400"})]})]}),p.jsx("button",{onClick:l,"aria-label":"Schließen",className:"p-1 rounded-md text-slate-300 hover:text-white focus:outline-none",children:p.jsx($f,{className:"w-4 h-4"})})]}),p.jsxs("div",{className:"px-4 py-3",children:[p.jsx("p",{className:"text-sm text-slate-300 mb-3",children:"Hallo! Schreib mir kurz, worum es bei deinem Projekt geht — ich antworte zeitnah."}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{onClick:()=>{u()},className:"flex-1 px-3 py-2 rounded-md bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-purple-500",children:"Nachricht schreiben"}),p.jsx("a",{href:"mailto:oezdens.web@outlook.de",className:"inline-flex items-center justify-center px-3 py-2 rounded-md border border-slate-700 text-sm text-slate-300 hover:text-white hover:border-purple-500",children:"E‑Mail"})]})]})]})]})}function Jg(s,e){if(typeof s=="function")return s(e);s!=null&&(s.current=e)}function Ow(...s){return e=>{let t=!1;const r=s.map(a=>{const l=Jg(a,e);return!t&&typeof l=="function"&&(t=!0),l});if(t)return()=>{for(let a=0;a<r.length;a++){const l=r[a];typeof l=="function"?l():Jg(s[a],null)}}}}function zw(s){const e=Hw(s),t=et.forwardRef((r,a)=>{const{children:l,...u}=r,d=et.Children.toArray(l),h=d.find(jw);if(h){const m=h.props.children,x=d.map(v=>v===h?et.Children.count(m)>1?et.Children.only(null):et.isValidElement(m)?m.props.children:null:v);return p.jsx(e,{...u,ref:a,children:et.isValidElement(m)?et.cloneElement(m,void 0,x):null})}return p.jsx(e,{...u,ref:a,children:l})});return t.displayName=`${s}.Slot`,t}var Bw=zw("Slot");function Hw(s){const e=et.forwardRef((t,r)=>{const{children:a,...l}=t;if(et.isValidElement(a)){const u=Ww(a),d=Gw(l,a.props);return a.type!==et.Fragment&&(d.ref=r?Ow(r,u):u),et.cloneElement(a,d)}return et.Children.count(a)>1?et.Children.only(null):null});return e.displayName=`${s}.SlotClone`,e}var Vw=Symbol("radix.slottable");function jw(s){return et.isValidElement(s)&&typeof s.type=="function"&&"__radixId"in s.type&&s.type.__radixId===Vw}function Gw(s,e){const t={...e};for(const r in e){const a=s[r],l=e[r];/^on[A-Z]/.test(r)?a&&l?t[r]=(...d)=>{const h=l(...d);return a(...d),h}:a&&(t[r]=a):r==="style"?t[r]={...a,...l}:r==="className"&&(t[r]=[a,l].filter(Boolean).join(" "))}return{...s,...t}}function Ww(s){let e=Object.getOwnPropertyDescriptor(s.props,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?s.ref:(e=Object.getOwnPropertyDescriptor(s,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?s.props.ref:s.props.ref||s.ref)}function j0(s){var e,t,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(e=0;e<a;e++)s[e]&&(t=j0(s[e]))&&(r&&(r+=" "),r+=t)}else for(t in s)s[t]&&(r&&(r+=" "),r+=t);return r}function G0(){for(var s,e,t=0,r="",a=arguments.length;t<a;t++)(s=arguments[t])&&(e=j0(s))&&(r&&(r+=" "),r+=e);return r}const e0=s=>typeof s=="boolean"?`${s}`:s===0?"0":s,t0=G0,Xw=(s,e)=>t=>{var r;if(e?.variants==null)return t0(s,t?.class,t?.className);const{variants:a,defaultVariants:l}=e,u=Object.keys(a).map(m=>{const x=t?.[m],v=l?.[m];if(x===null)return null;const y=e0(x)||e0(v);return a[m][y]}),d=t&&Object.entries(t).reduce((m,x)=>{let[v,y]=x;return y===void 0||(m[v]=y),m},{}),h=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((m,x)=>{let{class:v,className:y,...M}=x;return Object.entries(M).every(A=>{let[w,S]=A;return Array.isArray(S)?S.includes({...l,...d}[w]):{...l,...d}[w]===S})?[...m,v,y]:m},[]);return t0(s,u,h,t?.class,t?.className)},sh="-",qw=s=>{const e=$w(s),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=s;return{getClassGroupId:u=>{const d=u.split(sh);return d[0]===""&&d.length!==1&&d.shift(),W0(d,e)||Yw(u)},getConflictingClassGroupIds:(u,d)=>{const h=t[u]||[];return d&&r[u]?[...h,...r[u]]:h}}},W0=(s,e)=>{if(s.length===0)return e.classGroupId;const t=s[0],r=e.nextPart.get(t),a=r?W0(s.slice(1),r):void 0;if(a)return a;if(e.validators.length===0)return;const l=s.join(sh);return e.validators.find(({validator:u})=>u(l))?.classGroupId},n0=/^\[(.+)\]$/,Yw=s=>{if(n0.test(s)){const e=n0.exec(s)[1],t=e?.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},$w=s=>{const{theme:e,classGroups:t}=s,r={nextPart:new Map,validators:[]};for(const a in t)Vf(t[a],r,a,e);return r},Vf=(s,e,t,r)=>{s.forEach(a=>{if(typeof a=="string"){const l=a===""?e:i0(e,a);l.classGroupId=t;return}if(typeof a=="function"){if(Kw(a)){Vf(a(r),e,t,r);return}e.validators.push({validator:a,classGroupId:t});return}Object.entries(a).forEach(([l,u])=>{Vf(u,i0(e,l),t,r)})})},i0=(s,e)=>{let t=s;return e.split(sh).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},Kw=s=>s.isThemeGetter,Zw=s=>{if(s<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,r=new Map;const a=(l,u)=>{t.set(l,u),e++,e>s&&(e=0,r=t,t=new Map)};return{get(l){let u=t.get(l);if(u!==void 0)return u;if((u=r.get(l))!==void 0)return a(l,u),u},set(l,u){t.has(l)?t.set(l,u):a(l,u)}}},jf="!",Gf=":",Qw=Gf.length,Jw=s=>{const{prefix:e,experimentalParseClassName:t}=s;let r=a=>{const l=[];let u=0,d=0,h=0,m;for(let A=0;A<a.length;A++){let w=a[A];if(u===0&&d===0){if(w===Gf){l.push(a.slice(h,A)),h=A+Qw;continue}if(w==="/"){m=A;continue}}w==="["?u++:w==="]"?u--:w==="("?d++:w===")"&&d--}const x=l.length===0?a:a.substring(h),v=eT(x),y=v!==x,M=m&&m>h?m-h:void 0;return{modifiers:l,hasImportantModifier:y,baseClassName:v,maybePostfixModifierPosition:M}};if(e){const a=e+Gf,l=r;r=u=>u.startsWith(a)?l(u.substring(a.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:u,maybePostfixModifierPosition:void 0}}if(t){const a=r;r=l=>t({className:l,parseClassName:a})}return r},eT=s=>s.endsWith(jf)?s.substring(0,s.length-1):s.startsWith(jf)?s.substring(1):s,tT=s=>{const e=Object.fromEntries(s.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const a=[];let l=[];return r.forEach(u=>{u[0]==="["||e[u]?(a.push(...l.sort(),u),l=[]):l.push(u)}),a.push(...l.sort()),a}},nT=s=>({cache:Zw(s.cacheSize),parseClassName:Jw(s),sortModifiers:tT(s),...qw(s)}),iT=/\s+/,rT=(s,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:l}=e,u=[],d=s.trim().split(iT);let h="";for(let m=d.length-1;m>=0;m-=1){const x=d[m],{isExternal:v,modifiers:y,hasImportantModifier:M,baseClassName:A,maybePostfixModifierPosition:w}=t(x);if(v){h=x+(h.length>0?" "+h:h);continue}let S=!!w,_=r(S?A.substring(0,w):A);if(!_){if(!S){h=x+(h.length>0?" "+h:h);continue}if(_=r(A),!_){h=x+(h.length>0?" "+h:h);continue}S=!1}const I=l(y).join(":"),N=M?I+jf:I,P=N+_;if(u.includes(P))continue;u.push(P);const z=a(_,S);for(let F=0;F<z.length;++F){const V=z[F];u.push(N+V)}h=x+(h.length>0?" "+h:h)}return h};function sT(){let s=0,e,t,r="";for(;s<arguments.length;)(e=arguments[s++])&&(t=X0(e))&&(r&&(r+=" "),r+=t);return r}const X0=s=>{if(typeof s=="string")return s;let e,t="";for(let r=0;r<s.length;r++)s[r]&&(e=X0(s[r]))&&(t&&(t+=" "),t+=e);return t};function oT(s,...e){let t,r,a,l=u;function u(h){const m=e.reduce((x,v)=>v(x),s());return t=nT(m),r=t.cache.get,a=t.cache.set,l=d,d(h)}function d(h){const m=r(h);if(m)return m;const x=rT(h,t);return a(h,x),x}return function(){return l(sT.apply(null,arguments))}}const ln=s=>{const e=t=>t[s]||[];return e.isThemeGetter=!0,e},q0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Y0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,aT=/^\d+\/\d+$/,lT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,cT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,uT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,dT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,fT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ks=s=>aT.test(s),yt=s=>!!s&&!Number.isNaN(Number(s)),Tr=s=>!!s&&Number.isInteger(Number(s)),Bd=s=>s.endsWith("%")&&yt(s.slice(0,-1)),Gi=s=>lT.test(s),hT=()=>!0,pT=s=>cT.test(s)&&!uT.test(s),$0=()=>!1,mT=s=>dT.test(s),gT=s=>fT.test(s),vT=s=>!We(s)&&!Xe(s),xT=s=>uo(s,Q0,$0),We=s=>q0.test(s),es=s=>uo(s,J0,pT),Hd=s=>uo(s,ET,yt),r0=s=>uo(s,K0,$0),_T=s=>uo(s,Z0,gT),Yl=s=>uo(s,ev,mT),Xe=s=>Y0.test(s),ea=s=>fo(s,J0),yT=s=>fo(s,bT),s0=s=>fo(s,K0),ST=s=>fo(s,Q0),MT=s=>fo(s,Z0),$l=s=>fo(s,ev,!0),uo=(s,e,t)=>{const r=q0.exec(s);return r?r[1]?e(r[1]):t(r[2]):!1},fo=(s,e,t=!1)=>{const r=Y0.exec(s);return r?r[1]?e(r[1]):t:!1},K0=s=>s==="position"||s==="percentage",Z0=s=>s==="image"||s==="url",Q0=s=>s==="length"||s==="size"||s==="bg-size",J0=s=>s==="length",ET=s=>s==="number",bT=s=>s==="family-name",ev=s=>s==="shadow",wT=()=>{const s=ln("color"),e=ln("font"),t=ln("text"),r=ln("font-weight"),a=ln("tracking"),l=ln("leading"),u=ln("breakpoint"),d=ln("container"),h=ln("spacing"),m=ln("radius"),x=ln("shadow"),v=ln("inset-shadow"),y=ln("text-shadow"),M=ln("drop-shadow"),A=ln("blur"),w=ln("perspective"),S=ln("aspect"),_=ln("ease"),I=ln("animate"),N=()=>["auto","avoid","all","avoid-page","page","left","right","column"],P=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],z=()=>[...P(),Xe,We],F=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto","contain","none"],B=()=>[Xe,We,h],D=()=>[Ks,"full","auto",...B()],R=()=>[Tr,"none","subgrid",Xe,We],j=()=>["auto",{span:["full",Tr,Xe,We]},Tr,Xe,We],Z=()=>[Tr,"auto",Xe,We],oe=()=>["auto","min","max","fr",Xe,We],ie=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],fe=()=>["start","end","center","stretch","center-safe","end-safe"],Q=()=>["auto",...B()],pe=()=>[Ks,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...B()],L=()=>[s,Xe,We],de=()=>[...P(),s0,r0,{position:[Xe,We]}],ue=()=>["no-repeat",{repeat:["","x","y","space","round"]}],U=()=>["auto","cover","contain",ST,xT,{size:[Xe,We]}],te=()=>[Bd,ea,es],me=()=>["","none","full",m,Xe,We],Ce=()=>["",yt,ea,es],ke=()=>["solid","dashed","dotted","double"],J=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],re=()=>[yt,Bd,s0,r0],xe=()=>["","none",A,Xe,We],Re=()=>["none",yt,Xe,We],De=()=>["none",yt,Xe,We],mt=()=>[yt,Xe,We],jt=()=>[Ks,"full",...B()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Gi],breakpoint:[Gi],color:[hT],container:[Gi],"drop-shadow":[Gi],ease:["in","out","in-out"],font:[vT],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Gi],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Gi],shadow:[Gi],spacing:["px",yt],text:[Gi],"text-shadow":[Gi],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ks,We,Xe,S]}],container:["container"],columns:[{columns:[yt,We,Xe,d]}],"break-after":[{"break-after":N()}],"break-before":[{"break-before":N()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:z()}],overflow:[{overflow:F()}],"overflow-x":[{"overflow-x":F()}],"overflow-y":[{"overflow-y":F()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:D()}],"inset-x":[{"inset-x":D()}],"inset-y":[{"inset-y":D()}],start:[{start:D()}],end:[{end:D()}],top:[{top:D()}],right:[{right:D()}],bottom:[{bottom:D()}],left:[{left:D()}],visibility:["visible","invisible","collapse"],z:[{z:[Tr,"auto",Xe,We]}],basis:[{basis:[Ks,"full","auto",d,...B()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[yt,Ks,"auto","initial","none",We]}],grow:[{grow:["",yt,Xe,We]}],shrink:[{shrink:["",yt,Xe,We]}],order:[{order:[Tr,"first","last","none",Xe,We]}],"grid-cols":[{"grid-cols":R()}],"col-start-end":[{col:j()}],"col-start":[{"col-start":Z()}],"col-end":[{"col-end":Z()}],"grid-rows":[{"grid-rows":R()}],"row-start-end":[{row:j()}],"row-start":[{"row-start":Z()}],"row-end":[{"row-end":Z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":oe()}],"auto-rows":[{"auto-rows":oe()}],gap:[{gap:B()}],"gap-x":[{"gap-x":B()}],"gap-y":[{"gap-y":B()}],"justify-content":[{justify:[...ie(),"normal"]}],"justify-items":[{"justify-items":[...fe(),"normal"]}],"justify-self":[{"justify-self":["auto",...fe()]}],"align-content":[{content:["normal",...ie()]}],"align-items":[{items:[...fe(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...fe(),{baseline:["","last"]}]}],"place-content":[{"place-content":ie()}],"place-items":[{"place-items":[...fe(),"baseline"]}],"place-self":[{"place-self":["auto",...fe()]}],p:[{p:B()}],px:[{px:B()}],py:[{py:B()}],ps:[{ps:B()}],pe:[{pe:B()}],pt:[{pt:B()}],pr:[{pr:B()}],pb:[{pb:B()}],pl:[{pl:B()}],m:[{m:Q()}],mx:[{mx:Q()}],my:[{my:Q()}],ms:[{ms:Q()}],me:[{me:Q()}],mt:[{mt:Q()}],mr:[{mr:Q()}],mb:[{mb:Q()}],ml:[{ml:Q()}],"space-x":[{"space-x":B()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":B()}],"space-y-reverse":["space-y-reverse"],size:[{size:pe()}],w:[{w:[d,"screen",...pe()]}],"min-w":[{"min-w":[d,"screen","none",...pe()]}],"max-w":[{"max-w":[d,"screen","none","prose",{screen:[u]},...pe()]}],h:[{h:["screen","lh",...pe()]}],"min-h":[{"min-h":["screen","lh","none",...pe()]}],"max-h":[{"max-h":["screen","lh",...pe()]}],"font-size":[{text:["base",t,ea,es]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Xe,Hd]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Bd,We]}],"font-family":[{font:[yT,We,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,Xe,We]}],"line-clamp":[{"line-clamp":[yt,"none",Xe,Hd]}],leading:[{leading:[l,...B()]}],"list-image":[{"list-image":["none",Xe,We]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Xe,We]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:L()}],"text-color":[{text:L()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ke(),"wavy"]}],"text-decoration-thickness":[{decoration:[yt,"from-font","auto",Xe,es]}],"text-decoration-color":[{decoration:L()}],"underline-offset":[{"underline-offset":[yt,"auto",Xe,We]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:B()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Xe,We]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Xe,We]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:de()}],"bg-repeat":[{bg:ue()}],"bg-size":[{bg:U()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Tr,Xe,We],radial:["",Xe,We],conic:[Tr,Xe,We]},MT,_T]}],"bg-color":[{bg:L()}],"gradient-from-pos":[{from:te()}],"gradient-via-pos":[{via:te()}],"gradient-to-pos":[{to:te()}],"gradient-from":[{from:L()}],"gradient-via":[{via:L()}],"gradient-to":[{to:L()}],rounded:[{rounded:me()}],"rounded-s":[{"rounded-s":me()}],"rounded-e":[{"rounded-e":me()}],"rounded-t":[{"rounded-t":me()}],"rounded-r":[{"rounded-r":me()}],"rounded-b":[{"rounded-b":me()}],"rounded-l":[{"rounded-l":me()}],"rounded-ss":[{"rounded-ss":me()}],"rounded-se":[{"rounded-se":me()}],"rounded-ee":[{"rounded-ee":me()}],"rounded-es":[{"rounded-es":me()}],"rounded-tl":[{"rounded-tl":me()}],"rounded-tr":[{"rounded-tr":me()}],"rounded-br":[{"rounded-br":me()}],"rounded-bl":[{"rounded-bl":me()}],"border-w":[{border:Ce()}],"border-w-x":[{"border-x":Ce()}],"border-w-y":[{"border-y":Ce()}],"border-w-s":[{"border-s":Ce()}],"border-w-e":[{"border-e":Ce()}],"border-w-t":[{"border-t":Ce()}],"border-w-r":[{"border-r":Ce()}],"border-w-b":[{"border-b":Ce()}],"border-w-l":[{"border-l":Ce()}],"divide-x":[{"divide-x":Ce()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Ce()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ke(),"hidden","none"]}],"divide-style":[{divide:[...ke(),"hidden","none"]}],"border-color":[{border:L()}],"border-color-x":[{"border-x":L()}],"border-color-y":[{"border-y":L()}],"border-color-s":[{"border-s":L()}],"border-color-e":[{"border-e":L()}],"border-color-t":[{"border-t":L()}],"border-color-r":[{"border-r":L()}],"border-color-b":[{"border-b":L()}],"border-color-l":[{"border-l":L()}],"divide-color":[{divide:L()}],"outline-style":[{outline:[...ke(),"none","hidden"]}],"outline-offset":[{"outline-offset":[yt,Xe,We]}],"outline-w":[{outline:["",yt,ea,es]}],"outline-color":[{outline:L()}],shadow:[{shadow:["","none",x,$l,Yl]}],"shadow-color":[{shadow:L()}],"inset-shadow":[{"inset-shadow":["none",v,$l,Yl]}],"inset-shadow-color":[{"inset-shadow":L()}],"ring-w":[{ring:Ce()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:L()}],"ring-offset-w":[{"ring-offset":[yt,es]}],"ring-offset-color":[{"ring-offset":L()}],"inset-ring-w":[{"inset-ring":Ce()}],"inset-ring-color":[{"inset-ring":L()}],"text-shadow":[{"text-shadow":["none",y,$l,Yl]}],"text-shadow-color":[{"text-shadow":L()}],opacity:[{opacity:[yt,Xe,We]}],"mix-blend":[{"mix-blend":[...J(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":J()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[yt]}],"mask-image-linear-from-pos":[{"mask-linear-from":re()}],"mask-image-linear-to-pos":[{"mask-linear-to":re()}],"mask-image-linear-from-color":[{"mask-linear-from":L()}],"mask-image-linear-to-color":[{"mask-linear-to":L()}],"mask-image-t-from-pos":[{"mask-t-from":re()}],"mask-image-t-to-pos":[{"mask-t-to":re()}],"mask-image-t-from-color":[{"mask-t-from":L()}],"mask-image-t-to-color":[{"mask-t-to":L()}],"mask-image-r-from-pos":[{"mask-r-from":re()}],"mask-image-r-to-pos":[{"mask-r-to":re()}],"mask-image-r-from-color":[{"mask-r-from":L()}],"mask-image-r-to-color":[{"mask-r-to":L()}],"mask-image-b-from-pos":[{"mask-b-from":re()}],"mask-image-b-to-pos":[{"mask-b-to":re()}],"mask-image-b-from-color":[{"mask-b-from":L()}],"mask-image-b-to-color":[{"mask-b-to":L()}],"mask-image-l-from-pos":[{"mask-l-from":re()}],"mask-image-l-to-pos":[{"mask-l-to":re()}],"mask-image-l-from-color":[{"mask-l-from":L()}],"mask-image-l-to-color":[{"mask-l-to":L()}],"mask-image-x-from-pos":[{"mask-x-from":re()}],"mask-image-x-to-pos":[{"mask-x-to":re()}],"mask-image-x-from-color":[{"mask-x-from":L()}],"mask-image-x-to-color":[{"mask-x-to":L()}],"mask-image-y-from-pos":[{"mask-y-from":re()}],"mask-image-y-to-pos":[{"mask-y-to":re()}],"mask-image-y-from-color":[{"mask-y-from":L()}],"mask-image-y-to-color":[{"mask-y-to":L()}],"mask-image-radial":[{"mask-radial":[Xe,We]}],"mask-image-radial-from-pos":[{"mask-radial-from":re()}],"mask-image-radial-to-pos":[{"mask-radial-to":re()}],"mask-image-radial-from-color":[{"mask-radial-from":L()}],"mask-image-radial-to-color":[{"mask-radial-to":L()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":P()}],"mask-image-conic-pos":[{"mask-conic":[yt]}],"mask-image-conic-from-pos":[{"mask-conic-from":re()}],"mask-image-conic-to-pos":[{"mask-conic-to":re()}],"mask-image-conic-from-color":[{"mask-conic-from":L()}],"mask-image-conic-to-color":[{"mask-conic-to":L()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:de()}],"mask-repeat":[{mask:ue()}],"mask-size":[{mask:U()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Xe,We]}],filter:[{filter:["","none",Xe,We]}],blur:[{blur:xe()}],brightness:[{brightness:[yt,Xe,We]}],contrast:[{contrast:[yt,Xe,We]}],"drop-shadow":[{"drop-shadow":["","none",M,$l,Yl]}],"drop-shadow-color":[{"drop-shadow":L()}],grayscale:[{grayscale:["",yt,Xe,We]}],"hue-rotate":[{"hue-rotate":[yt,Xe,We]}],invert:[{invert:["",yt,Xe,We]}],saturate:[{saturate:[yt,Xe,We]}],sepia:[{sepia:["",yt,Xe,We]}],"backdrop-filter":[{"backdrop-filter":["","none",Xe,We]}],"backdrop-blur":[{"backdrop-blur":xe()}],"backdrop-brightness":[{"backdrop-brightness":[yt,Xe,We]}],"backdrop-contrast":[{"backdrop-contrast":[yt,Xe,We]}],"backdrop-grayscale":[{"backdrop-grayscale":["",yt,Xe,We]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[yt,Xe,We]}],"backdrop-invert":[{"backdrop-invert":["",yt,Xe,We]}],"backdrop-opacity":[{"backdrop-opacity":[yt,Xe,We]}],"backdrop-saturate":[{"backdrop-saturate":[yt,Xe,We]}],"backdrop-sepia":[{"backdrop-sepia":["",yt,Xe,We]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":B()}],"border-spacing-x":[{"border-spacing-x":B()}],"border-spacing-y":[{"border-spacing-y":B()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Xe,We]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[yt,"initial",Xe,We]}],ease:[{ease:["linear","initial",_,Xe,We]}],delay:[{delay:[yt,Xe,We]}],animate:[{animate:["none",I,Xe,We]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[w,Xe,We]}],"perspective-origin":[{"perspective-origin":z()}],rotate:[{rotate:Re()}],"rotate-x":[{"rotate-x":Re()}],"rotate-y":[{"rotate-y":Re()}],"rotate-z":[{"rotate-z":Re()}],scale:[{scale:De()}],"scale-x":[{"scale-x":De()}],"scale-y":[{"scale-y":De()}],"scale-z":[{"scale-z":De()}],"scale-3d":["scale-3d"],skew:[{skew:mt()}],"skew-x":[{"skew-x":mt()}],"skew-y":[{"skew-y":mt()}],transform:[{transform:[Xe,We,"","none","gpu","cpu"]}],"transform-origin":[{origin:z()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:jt()}],"translate-x":[{"translate-x":jt()}],"translate-y":[{"translate-y":jt()}],"translate-z":[{"translate-z":jt()}],"translate-none":["translate-none"],accent:[{accent:L()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:L()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Xe,We]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":B()}],"scroll-mx":[{"scroll-mx":B()}],"scroll-my":[{"scroll-my":B()}],"scroll-ms":[{"scroll-ms":B()}],"scroll-me":[{"scroll-me":B()}],"scroll-mt":[{"scroll-mt":B()}],"scroll-mr":[{"scroll-mr":B()}],"scroll-mb":[{"scroll-mb":B()}],"scroll-ml":[{"scroll-ml":B()}],"scroll-p":[{"scroll-p":B()}],"scroll-px":[{"scroll-px":B()}],"scroll-py":[{"scroll-py":B()}],"scroll-ps":[{"scroll-ps":B()}],"scroll-pe":[{"scroll-pe":B()}],"scroll-pt":[{"scroll-pt":B()}],"scroll-pr":[{"scroll-pr":B()}],"scroll-pb":[{"scroll-pb":B()}],"scroll-pl":[{"scroll-pl":B()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Xe,We]}],fill:[{fill:["none",...L()]}],"stroke-w":[{stroke:[yt,ea,es,Hd]}],stroke:[{stroke:["none",...L()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},TT=oT(wT);function cs(...s){return TT(G0(s))}const AT=Xw("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function CT({className:s,variant:e,size:t,asChild:r=!1,...a}){const l=r?Bw:"button";return p.jsx(l,{"data-slot":"button",className:cs(AT({variant:e,size:t,className:s})),...a})}function Vd({className:s,type:e,...t}){return p.jsx("input",{type:e,"data-slot":"input",className:cs("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","invalid:border-purple-500 invalid:ring-2 invalid:ring-purple-500/40 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",s),...t})}function RT({className:s,...e}){return p.jsx("textarea",{"data-slot":"textarea",className:cs("resize-none border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus:border-purple-500 focus:ring-2 focus:ring-purple-500/40 focus-visible:border-ring focus-visible:ring-ring/50","invalid:border-purple-500 invalid:ring-2 invalid:ring-purple-500/40 aria-invalid:ring-destructive/20 aria-invalid:border-destructive",s),...e})}function jd({className:s,...e}){return p.jsx("div",{"data-slot":"card",className:cs("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",s),...e})}function Gd({className:s,...e}){return p.jsx("div",{"data-slot":"card-header",className:cs("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",s),...e})}function Wd({className:s,...e}){return p.jsx("h4",{"data-slot":"card-title",className:cs("leading-none",s),...e})}function Xd({className:s,...e}){return p.jsx("div",{"data-slot":"card-content",className:cs("px-6 [&:last-child]:pb-6",s),...e})}function PT(){const s=e=>{e.preventDefault(),alert("Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen melden.")};return p.jsxs("section",{id:"kontakt",className:"py-20 px-6",children:[p.jsxs("div",{className:"container mx-auto",children:[p.jsxs("div",{className:"text-center mb-16",children:[p.jsxs("h2",{className:"text-3xl md:text-5xl mb-4 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent",children:[p.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400",children:"Kontakt"})," aufnehmen"]}),p.jsx("p",{className:"text-slate-400 text-lg max-w-2xl mx-auto",children:"Haben Sie ein Projekt im Kopf? Lassen Sie uns darüber sprechen!"})]}),p.jsxs("div",{className:"grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch",children:[p.jsxs("div",{className:"h-full flex flex-col justify-between",children:[p.jsxs(jd,{className:"bg-slate-900/50 border-purple-500/20 p-6 md:p-8 min-h-[220px] md:min-h-[360px]",children:[p.jsxs(Gd,{children:[p.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-2 shadow-lg ring-1 ring-purple-600/20",children:p.jsx(Yf,{className:"w-6 h-6 text-white"})}),p.jsx(Wd,{className:"text-white",children:"E-Mail"})]}),p.jsx(Xd,{children:p.jsx("a",{href:"mailto:oezdens.web@outlook.de",className:"text-slate-300 underline-offset-2 hover:text-white hover:underline",children:"oezdens.web@outlook.de"})})]}),p.jsxs(jd,{className:"bg-slate-900/50 border-purple-500/20 p-6 md:p-8 min-h-[220px] md:min-h-[360px]",children:[p.jsxs(Gd,{children:[p.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-2 shadow-lg ring-1 ring-purple-600/20",children:p.jsx(d0,{className:"w-6 h-6 text-white"})}),p.jsx(Wd,{className:"text-white",children:"Standort"})]}),p.jsx(Xd,{children:p.jsx("p",{className:"text-slate-400",children:"Heilbronn, Deutschland"})})]})]}),p.jsx("div",{className:"lg:col-span-2",children:p.jsxs(jd,{className:"bg-slate-900/50 border-purple-500/20 p-6 md:p-8 min-h-[220px] md:min-h-[360px] h-full",children:[p.jsx(Gd,{children:p.jsx(Wd,{className:"text-white",children:"Nachricht senden"})}),p.jsx(Xd,{children:p.jsxs("form",{onSubmit:s,className:"space-y-6",children:[p.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{htmlFor:"name",className:"text-slate-300",children:"Name"}),p.jsx(Vd,{id:"name",placeholder:"Ihr Name",required:!0,className:"bg-slate-800/50 border border-purple-500/20 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent invalid:border-purple-500 invalid:ring-2 invalid:ring-purple-500/50 transition",onFocus:e=>{const t=e.currentTarget;t.style.borderColor="#7b2cff",t.style.boxShadow="0 0 0 4px rgba(123,44,255,0.18)"},onBlur:e=>{const t=e.currentTarget;t.style.borderColor="",t.style.boxShadow=""}})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{htmlFor:"email",className:"text-slate-300",children:"E-Mail"}),p.jsx(Vd,{id:"email",type:"email",placeholder:"ihre@email.de",required:!0,className:"bg-slate-800/50 border border-purple-500/20 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent invalid:border-purple-500 invalid:ring-2 invalid:ring-purple-500/50 transition",onFocus:e=>{const t=e.currentTarget;t.style.borderColor="#7b2cff",t.style.boxShadow="0 0 0 4px rgba(123,44,255,0.18)"},onBlur:e=>{const t=e.currentTarget;t.style.borderColor="",t.style.boxShadow=""}})]})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{htmlFor:"subject",className:"text-slate-300",children:"Betreff"}),p.jsx(Vd,{id:"subject",placeholder:"Worum geht es?",required:!0,className:"bg-slate-800/50 border border-purple-500/20 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent invalid:border-purple-500 invalid:ring-2 invalid:ring-purple-500/50 transition",onFocus:e=>{const t=e.currentTarget;t.style.borderColor="#7b2cff",t.style.boxShadow="0 0 0 4px rgba(123,44,255,0.18)"},onBlur:e=>{const t=e.currentTarget;t.style.borderColor="",t.style.boxShadow=""}})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{htmlFor:"message",className:"text-slate-300",children:"Nachricht"}),p.jsx(RT,{id:"message",placeholder:"Erzählen Sie mir von Ihrem Projekt...",required:!0,rows:6,className:"bg-slate-800/50 border border-purple-500/20 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent invalid:border-purple-500 invalid:ring-2 invalid:ring-purple-500/50 transition",onFocus:e=>{const t=e.currentTarget;t.style.borderColor="#7b2cff",t.style.boxShadow="0 0 0 4px rgba(123,44,255,0.18)"},onBlur:e=>{const t=e.currentTarget;t.style.borderColor="",t.style.boxShadow=""}})]}),p.jsxs(CT,{type:"submit",className:"w-full rounded-lg py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 border-0 text-white font-semibold shadow-xl transform transition-all duration-150 hover:-translate-y-1",children:[p.jsx(oy,{className:"w-4 h-4 mr-2 text-white"}),"Nachricht senden"]})]})})]})})]})]}),p.jsx(Fw,{})]})}const DT=[{icon:H_,href:"https://www.linkedin.com/in/serhat-%C3%B6zden-958130361/",name:"LinkedIn",target:"_blank",rel:"noopener noreferrer"},{icon:Yf,href:"mailto:oezdens.web@outlook.de",name:"Email"}];function Kl(){const s=new Date().getFullYear();return p.jsx("footer",{className:"bg-slate-950/80 backdrop-blur-md border-t border-purple-500/20 mt-20 pt-12 pb-6",children:p.jsxs("div",{className:"max-w-6xl mx-auto px-6 sm:px-8 lg:px-12",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row gap-8 flex-wrap sm:flex-nowrap justify-between items-start",children:[p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[p.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center",children:p.jsx(qf,{className:"w-5 h-5 text-white"})}),p.jsx("span",{className:"font-bold text-xl text-white",children:"oezdens"})]}),p.jsx("p",{className:"text-slate-400 text-sm",children:"Moderne Webentwicklung & Design, spezialisiert auf reaktive Oberflächen."})]}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Navigation"}),p.jsxs("ul",{className:"space-y-2 text-sm",children:[p.jsx("li",{children:p.jsx("a",{href:"/Startseite",onClick:e=>{e.preventDefault(),Xi("home")},className:"text-slate-400 hover:text-purple-400 transition-colors",children:"Home"})}),p.jsx("li",{children:p.jsx("a",{href:"/leistungen",onClick:e=>{e.preventDefault(),Xi("leistungen")},className:"text-slate-400 hover:text-purple-400 transition-colors",children:"Leistungen"})}),p.jsx("li",{children:p.jsx("a",{href:"/ueber-mich",onClick:e=>{e.preventDefault(),Xi("ueber-mich")},className:"text-slate-400 hover:text-purple-400 transition-colors",children:"Über mich"})}),p.jsx("li",{children:p.jsx("a",{href:"/ablauf",onClick:e=>{e.preventDefault(),Xi("ablauf")},className:"text-slate-400 hover:text-purple-400 transition-colors",children:"Ablauf"})}),p.jsx("li",{children:p.jsx("a",{href:"/preise",onClick:e=>{e.preventDefault(),Xi("preise")},className:"text-slate-400 hover:text-purple-400 transition-colors",children:"Preise"})}),p.jsx("li",{children:p.jsx("a",{href:"/kontakt",onClick:e=>{e.preventDefault(),Xi("kontakt")},className:"text-slate-400 hover:text-purple-400 transition-colors",children:"Kontakt"})})]})]}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Services"}),p.jsxs("ul",{className:"space-y-2 text-sm",children:[p.jsx("li",{children:p.jsx("a",{href:"#",onClick:e=>{e.preventDefault()},className:"text-slate-400 hover:text-purple-400 transition-colors",children:"UI/UX Design"})}),p.jsx("li",{children:p.jsx("a",{href:"#",onClick:e=>{e.preventDefault()},className:"text-slate-400 hover:text-purple-400 transition-colors",children:"Front-end Development"})}),p.jsx("li",{children:p.jsx("a",{href:"#",onClick:e=>{e.preventDefault()},className:"text-slate-400 hover:text-purple-400 transition-colors",children:"SEO Optimierung"})})]})]}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Kontakt"}),p.jsx("a",{href:"/kontakt",onClick:e=>{e.preventDefault(),Xi("kontakt")},className:"inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity text-sm font-medium mb-4",children:"Jetzt Kontakt aufnehmen"}),p.jsx("div",{className:"flex space-x-4",children:DT.map(e=>p.jsx("a",{href:e.href,"aria-label":e.name,className:"text-slate-400 hover:text-purple-400 transition-colors",target:e.target,rel:e.rel,children:p.jsx(e.icon,{className:"w-6 h-6"})},e.name))})]})]}),p.jsx("hr",{className:"my-8 border-purple-500/10"}),p.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500 gap-3",children:[p.jsxs("p",{children:["© ",s," oezdens. Alle Rechte vorbehalten."]}),p.jsxs("div",{className:"flex flex-wrap sm:space-x-4 gap-2 sm:gap-0 items-center justify-center",children:[p.jsx("a",{href:"/impressum",className:"hover:text-purple-400 transition-colors",children:"Impressum"}),p.jsx("a",{href:"/datenschutz",className:"hover:text-purple-400 transition-colors",children:"Datenschutz"}),p.jsx("a",{href:"/barrierefreiheit",className:"hover:text-purple-400 transition-colors",children:"Barrierefreiheit"})]})]})]})})}function o0({checked:s,onChange:e,disabled:t}){const r={position:"relative",display:"inline-flex",width:"44px",height:"24px",borderRadius:"12px",backgroundColor:s?"#db2777":"rgba(148, 163, 184, 0.3)",border:"none",cursor:t?"not-allowed":"pointer",transition:"background-color 0.2s",opacity:t?.5:1,padding:0},a={position:"absolute",top:"2px",left:s?"22px":"2px",width:"20px",height:"20px",borderRadius:"10px",backgroundColor:"#fff",transition:"left 0.2s",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"};return p.jsx("button",{type:"button",style:r,onClick:()=>!t&&e(!s),disabled:t,children:p.jsx("span",{style:a})})}function Zl({children:s,onClick:e,variant:t="primary",style:r}){const[a,l]=et.useState(!1),u={padding:"10px 20px",borderRadius:"8px",cursor:"pointer",fontSize:"14px",fontWeight:"500",transition:"all 0.2s",fontFamily:"inherit",...r},h=t==="primary"?{...u,background:"linear-gradient(90deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%)",color:"#fff",border:"none",boxShadow:a?"0 14px 40px rgba(109,40,217,0.18), 0 6px 20px rgba(124,58,237,0.08)":"0 6px 18px rgba(99,102,241,0.06)",transform:a?"translateY(-2px)":void 0}:{...u,backgroundColor:a?"#1e293b":"transparent",color:a?"#fff":"#e2e8f0",border:"1px solid #475569"};return p.jsx("button",{style:h,onClick:e,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:s})}function NT(){const[s,e]=et.useState(!1),[t,r]=et.useState(!1),[a,l]=et.useState(!1),[u,d]=et.useState({necessary:!0,analytics:!1,marketing:!1,preferences:!1}),[h,m]=et.useState(!1),[x,v]=et.useState(!1),[y,M]=et.useState(!1),[A,w]=et.useState(!1);et.useEffect(()=>{localStorage.getItem("cookieConsent")||setTimeout(()=>{e(!0),m(!0)},100)},[]);const S=()=>{const me={necessary:!0,analytics:!0,marketing:!0,preferences:!0};localStorage.setItem("cookieConsent",JSON.stringify(me)),m(!1),setTimeout(()=>e(!1),300)},_=()=>{const me={necessary:!0,analytics:!1,marketing:!1,preferences:!1};localStorage.setItem("cookieConsent",JSON.stringify(me)),m(!1),setTimeout(()=>e(!1),300)},I=()=>{localStorage.setItem("cookieConsent",JSON.stringify(u)),m(!1),setTimeout(()=>e(!1),300)},N=me=>{me!=="necessary"&&d(Ce=>({...Ce,[me]:!Ce[me]}))};if(!s)return null;const P=[{id:"necessary",name:"Notwendige Cookies",description:"Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.",required:!0},{id:"analytics",name:"Analytische Cookies",description:"Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln.",required:!1},{id:"marketing",name:"Marketing Cookies",description:"Diese Cookies werden verwendet, um Besuchern relevante Werbung und Marketingkampagnen bereitzustellen.",required:!1},{id:"preferences",name:"Präferenz Cookies",description:"Diese Cookies ermöglichen es der Website, sich Ihre Einstellungen zu merken und ein verbessertes, persönlicheres Erlebnis zu bieten.",required:!1}],z={position:"fixed",inset:"0",zIndex:9999,display:"flex",alignItems:"flex-end",justifyContent:"center",padding:"16px",backgroundColor:"rgba(0, 0, 0, 0.5)",opacity:h?1:0,transition:"opacity 0.3s"},F={position:"relative",width:"100%",maxWidth:"672px",backgroundColor:"#0b1220",backgroundImage:"linear-gradient(135deg, rgba(139,92,246,0.06), rgba(124,58,237,0.03))",borderRadius:"16px",boxShadow:"0 20px 40px -10px rgba(16, 24, 40, 0.6), 0 6px 18px rgba(124,58,237,0.06)",overflow:"hidden",margin:"0",transform:h?"translateY(0)":"translateY(150px)",opacity:h?1:0,transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"},V={padding:"14px"},B={display:"flex",alignItems:"flex-start",gap:"16px",marginBottom:"16px"},D={flexShrink:0,width:"32px",height:"32px",backgroundColor:"rgba(219, 39, 119, 0.2)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},R={color:"#fff",fontSize:"16px",fontWeight:"600",marginBottom:"8px",lineHeight:"1.4"},j={color:"#cbd5e1",fontSize:"12px",lineHeight:"1.6"},Z={width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px",borderRadius:"8px",border:"1px solid #334155",backgroundColor:"transparent",cursor:"pointer",marginBottom:"16px",transition:"border-color 0.2s",fontFamily:"inherit",borderColor:x?"#475569":"#334155"},oe={padding:"8px",backgroundColor:"rgba(30, 41, 59, 0.5)",borderRadius:"8px",border:"1px solid #334155",marginBottom:"12px"},ie={display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"16px"},fe={color:"#fff",fontSize:"12px",fontWeight:"500",marginBottom:"4px",display:"flex",alignItems:"center",gap:"8px"},Q={padding:"2px 8px",backgroundColor:"#334155",borderRadius:"4px",fontSize:"12px",color:"#cbd5e1"},pe={color:"#94a3b8",fontSize:"11px",lineHeight:"1.4"},L={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(90px, 1fr))",gap:"8px"},de={backgroundColor:"rgba(2, 6, 23, 0.5)",padding:"10px 12px",display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:"1px solid #1e293b",flexWrap:"wrap",gap:"12px"},ue={color:y?"#cbd5e1":"#94a3b8",fontSize:"14px",textDecoration:"none",transition:"color 0.2s"},U={color:A?"#cbd5e1":"#64748b",backgroundColor:"transparent",border:"none",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center",justifyContent:"center",transition:"color 0.2s"},te={marginBottom:"12px",maxHeight:"160px",overflowY:"auto",paddingRight:"8px"};return p.jsx("div",{style:z,children:p.jsxs("div",{style:F,onClick:me=>me.stopPropagation(),children:[p.jsxs("div",{style:V,children:[p.jsxs("div",{style:B,children:[p.jsx("div",{style:D,children:p.jsx(Kd,{style:{width:"20px",height:"20px",color:"#ec4899"}})}),p.jsxs("div",{style:{flex:1},children:[p.jsx("h2",{style:R,children:"Cookie-Einstellungen"}),p.jsx("p",{style:j,children:"Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern und personalisierte Inhalte bereitzustellen."})]})]}),p.jsxs("button",{style:Z,onClick:()=>{const me=!t;r(me),me&&l(!1)},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[p.jsx("div",{style:{width:"20px",height:"20px",borderRadius:"4px",border:"2px solid #64748b",display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(Kd,{style:{width:"12px",height:"12px",color:"#94a3b8"}})}),p.jsx("span",{style:{color:"#e2e8f0",fontSize:"14px"},children:"Cookie-Details anzeigen"})]}),p.jsx(b_,{style:{width:"20px",height:"20px",color:"#94a3b8",transform:t?"rotate(180deg)":"rotate(0)",transition:"transform 0.2s"}})]}),t&&p.jsx("div",{style:te,children:P.map(me=>p.jsx("div",{style:oe,children:p.jsxs("div",{style:ie,children:[p.jsxs("div",{style:{flex:1},children:[p.jsxs("div",{style:fe,children:[p.jsx("span",{children:me.name}),me.required&&p.jsx("span",{style:Q,children:"Erforderlich"})]}),p.jsx("p",{style:pe,children:me.description})]}),p.jsx(o0,{checked:u[me.id],onChange:()=>N(me.id),disabled:me.required})]})},me.id))}),a&&p.jsxs("div",{style:te,children:[P.map(me=>p.jsx("div",{style:oe,children:p.jsxs("div",{style:ie,children:[p.jsxs("div",{style:{flex:1},children:[p.jsxs("div",{style:fe,children:[p.jsx("span",{children:me.name}),me.required&&p.jsx("span",{style:Q,children:"Erforderlich"})]}),p.jsx("p",{style:pe,children:me.description})]}),p.jsx(o0,{checked:u[me.id],onChange:()=>N(me.id),disabled:me.required})]})},me.id)),p.jsx(Zl,{onClick:I,style:{width:"100%"},children:"Auswahl speichern"})]}),!a&&p.jsxs("div",{style:L,children:[p.jsx(Zl,{onClick:S,children:"Alle akzeptieren"}),p.jsx(Zl,{onClick:()=>{l(!0),r(!1)},variant:"outline",children:"Anpassen"}),p.jsx(Zl,{onClick:_,variant:"outline",children:"Nur notwendige"})]})]}),p.jsxs("div",{style:de,children:[p.jsx("a",{href:"#",style:ue,onMouseEnter:()=>M(!0),onMouseLeave:()=>M(!1),children:"Weitere Informationen in unserer Datenschutzerklärung"}),p.jsx("button",{style:U,onClick:()=>{m(!1),setTimeout(()=>e(!1),300)},onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),children:p.jsx($f,{style:{width:"20px",height:"20px"}})})]})]})})}const LT="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function IT(s){const[e,t]=et.useState(!1),r=()=>{t(!0)},{src:a,alt:l,style:u,className:d,...h}=s;return e?p.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${d??""}`,style:u,children:p.jsx("div",{className:"flex items-center justify-center w-full h-full",children:p.jsx("img",{src:LT,alt:"Error loading image",...h,"data-original-url":a})})}):p.jsx("img",{src:a,alt:l,className:d,style:u,...h,onError:r})}const kT=""+new URL("ich-CFswyXwc.jpg",import.meta.url).href;function UT(){const s=[{number:"30+",label:"Projekte",icon:oc},{number:"9+",label:"Jahre",icon:S_},{number:"100%",label:"Zufriedenheit",icon:my},{number:"24/7",label:"Support",icon:_y}],e=[{title:"Website Entwicklung",icon:qf,description:"Moderne und performante Webseiten mit React, Next.js und neuesten Web-Technologien."},{title:"Mobile-First Design",icon:uy,description:"Responsive Designs, die auf allen Geräten perfekt aussehen und funktionieren."},{title:"UI/UX Design",icon:f0,description:"Ihre Website wird von mir individuell entwickelt. Ich setze alle Ihre Anforderungen zielgenau um, bis Sie zu 100 % zufrieden sind."}],t={animation:"aboutme-float 6s ease-in-out infinite"},r=()=>{const l=document.getElementById("ablauf");if(l){const u=document.querySelector("header"),d=u?u.offsetHeight:120,h=l.getBoundingClientRect().top+window.scrollY,m=Math.max(0,h-d-16);window.scrollTo({top:m,behavior:"smooth"});return}window.location.href="/#ablauf"},a=()=>{const l=document.getElementById("leistungen");if(l){const u=document.querySelector("header"),d=u?u.offsetHeight:120,h=l.getBoundingClientRect().top+window.scrollY,m=Math.max(0,h-d-16);window.scrollTo({top:m,behavior:"smooth"});return}window.location.href="/#leistungen"};return p.jsxs(p.Fragment,{children:[p.jsx("style",{children:`
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
      `}),p.jsxs("div",{className:"min-h-screen bg-slate-950 relative overflow-hidden",children:[p.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[p.jsx("div",{className:"absolute top-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"}),p.jsx("div",{className:"absolute top-40 right-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse",style:{animationDelay:"2s"}}),p.jsx("div",{className:"absolute bottom-40 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse",style:{animationDelay:"4s"}}),p.jsx("div",{className:"absolute bottom-20 right-1/4 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl",style:t})]}),p.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6 py-20",children:[p.jsxs("div",{id:"leistungen",className:"mb-32 md:mb-[30rem]",children:[p.jsxs("div",{className:"text-center mb-16",children:[p.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-6",children:[p.jsx(Jm,{className:"w-4 h-4 text-yellow-400"}),p.jsx("span",{className:"text-purple-300 text-sm",children:"Leistungen"})]}),p.jsxs("h2",{className:"text-4xl md:text-5xl text-white mb-4",children:["Meine ",p.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400",children:"Leistungen"})]})]}),p.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:e.map((l,u)=>p.jsxs("div",{className:"group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-transform duration-300 hover:-translate-y-2",style:{willChange:"transform"},children:[p.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),p.jsxs("div",{className:"relative",children:[p.jsx("div",{className:"mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 group-hover:scale-110 transition-transform duration-300",style:{willChange:"transform"},children:p.jsx(l.icon,{className:"w-8 h-8 text-purple-400",strokeWidth:1.5})}),p.jsx("h3",{className:"text-2xl text-white mb-4",children:l.title}),p.jsx("p",{className:"text-slate-400 leading-relaxed",children:l.description})]})]},u))})]}),p.jsx("div",{id:"ueber-mich",className:"mt-12 md:mt-[10rem] mb-12",children:p.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[p.jsxs("div",{className:"space-y-8",children:[p.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm",children:[p.jsx(Jm,{className:"w-4 h-4 text-yellow-400"}),p.jsx("span",{className:"text-purple-300 text-sm",children:"IT Webentwickler"})]}),p.jsxs("div",{children:[p.jsxs("h1",{className:"text-5xl md:text-7xl mb-6 text-white",children:["Hallo, ich bin"," ",p.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400",children:"dein Entwickler"})]}),p.jsx("p",{className:"text-lg text-slate-400 leading-relaxed mb-6",children:"Als studierter Informatiker mit über 9 Jahren Berufserfahrung und hauptberuflichem Teamleiter verbinde ich fundiertes technisches Know-how in Apps, Automation und KI mit der Kreativität eines leidenschaftlichen Webentwicklers. Mein Ziel ist es, Ihre digitalen Visionen in maßgeschneiderte, hervorragend funktionierende Webseiten umzusetzen, die durch meine effiziente Solo-Struktur wesentlich budgetschonender realisiert werden können als bei einer Agentur."}),p.jsxs("p",{className:"text-lg text-slate-500",children:["Spezialisiert auf ",p.jsx("span",{className:"text-purple-400",children:"React"}),",",p.jsx("span",{className:"text-pink-400",children:" TypeScript"})," und",p.jsx("span",{className:"text-blue-400",children:" moderne Web-Technologien"}),"."]})]}),p.jsxs("div",{className:"flex flex-wrap gap-4",children:[p.jsxs("button",{onClick:()=>r(),className:"group relative px-8 py-4 rounded-full overflow-hidden",children:[p.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%]",style:{animation:"aboutme-gradient-xy 3s ease infinite"}}),p.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"}),p.jsxs("span",{className:"relative text-white flex items-center gap-2",children:["Projekt starten",p.jsx(oc,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})]}),p.jsx("button",{onClick:()=>a(),className:"px-8 py-4 rounded-full border-2 border-slate-700 text-slate-300 hover:border-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm",children:"Meine Leistungen"})]})]}),p.jsxs("div",{className:"relative group",children:[p.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-sm opacity-25 group-hover:opacity-75 transition duration-300"}),p.jsxs("div",{className:"relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-4 overflow-hidden",children:[p.jsx("div",{className:"aspect-square rounded-2xl overflow-hidden",children:p.jsx(IT,{src:kT,alt:"Developer Workspace",className:"w-full h-full object-cover",loading:"lazy"})}),p.jsx("div",{className:"absolute bottom-8 left-8 px-6 py-3 rounded-2xl bg-slate-950/80 backdrop-blur-sm border border-purple-500/30",style:t,children:p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full animate-pulse"}),p.jsx("span",{className:"text-white",children:"Verfügbar für Projekte"})]})})]})]})]})}),p.jsx("div",{children:p.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-6",children:s.map((l,u)=>p.jsxs("div",{className:"group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-transform duration-300 hover:-translate-y-2",style:{willChange:"transform"},children:[p.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),p.jsxs("div",{className:"relative",children:[p.jsx(l.icon,{className:"w-8 h-8 text-purple-400 mb-4",strokeWidth:1.5}),p.jsx("div",{className:"text-4xl text-white mb-2",children:l.number}),p.jsx("div",{className:"text-slate-400",children:l.label})]})]},u))})})]})]})]})}function FT(){const s=[{name:"Standard Webseite",price:"299€",originalPrice:"599€",description:"Perfekt für kleine Unternehmen und Start-ups",features:["Bis zu 6 Seiten","Responsive Design","Kontaktformular","SEO-Optimierung","1 Monat Support","Social Media Integration","Logo Erstellung"],highlighted:!0},{name:"Business Webseite",price:"499€",originalPrice:"999€",description:"Für wachsende Unternehmen mit erweiterten Anforderungen",features:["Bis zu 15 Seiten","Premium Design","CMS Integration","Erweiterte SEO","2 Monate Support","Analytics Dashboard","Newsletter Integration"],highlighted:!1}];return p.jsxs(p.Fragment,{children:[p.jsx("style",{children:`
        @keyframes pricing-gradient-xy {
          0%, 100% { 
            background-position: 0% 50%; 
            transform: scale(1);
          }
          50% { 
            background-position: 100% 50%; 
            transform: scale(1.05);
          }
        }
        
        @keyframes pricing-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes pricing-pulse-delay-2s {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes pricing-pulse-delay-4s {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .pricing-pulse {
          animation: pricing-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .pricing-pulse-delay-2s {
          animation: pricing-pulse-delay-2s 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          animation-delay: 2s;
        }
        
        .pricing-pulse-delay-4s {
          animation: pricing-pulse-delay-4s 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          animation-delay: 4s;
        }
      `}),p.jsxs("div",{id:"preise",style:{minHeight:"100vh",backgroundColor:"#020617",position:"relative",overflow:"hidden"},children:[p.jsxs("div",{style:{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none"},children:[p.jsx("div",{className:"pricing-pulse",style:{position:"absolute",top:"5rem",left:"-5rem",width:"24rem",height:"24rem",backgroundColor:"rgba(168, 85, 247, 0.2)",borderRadius:"9999px",filter:"blur(24px)"}}),p.jsx("div",{className:"pricing-pulse-delay-2s",style:{position:"absolute",top:"10rem",right:"5rem",width:"20rem",height:"20rem",backgroundColor:"rgba(236, 72, 153, 0.2)",borderRadius:"9999px",filter:"blur(24px)"}}),p.jsx("div",{className:"pricing-pulse-delay-4s",style:{position:"absolute",bottom:"10rem",left:"33.333333%",width:"24rem",height:"24rem",backgroundColor:"rgba(59, 130, 246, 0.1)",borderRadius:"9999px",filter:"blur(24px)"}})]}),p.jsx("div",{style:{position:"relative",zIndex:10,maxWidth:"80rem",margin:"0 auto",padding:"5rem 1.5rem"},children:p.jsxs("div",{children:[p.jsxs("div",{style:{textAlign:"center",marginBottom:"4rem"},children:[p.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.5rem 1rem",borderRadius:"9999px",background:"linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))",border:"1px solid rgba(168, 85, 247, 0.3)",backdropFilter:"blur(6px)",marginBottom:"1.5rem"},children:[p.jsx(hy,{style:{width:"1rem",height:"1rem",color:"#facc15"}}),p.jsx("span",{style:{color:"#d8b4fe",fontSize:"0.875rem"},children:"Preisübersicht"})]}),p.jsxs("h2",{style:{fontSize:"clamp(2.25rem, 5vw, 3rem)",color:"white",marginBottom:"1rem"},children:["Transparente ",p.jsx("span",{style:{background:"linear-gradient(to right, #c084fc, #f0abfc)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Preise"})]}),p.jsx("p",{style:{fontSize:"1.25rem",color:"#94a3b8",maxWidth:"42rem",margin:"0 auto"},children:"Ich lege die Karten auf den Tisch. Fair und ohne Haken."})]}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem",maxWidth:"64rem",margin:"0 auto"},children:s.map((e,t)=>p.jsxs("div",{style:{position:"relative",background:"linear-gradient(to bottom right, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8))",backdropFilter:"blur(8px)",border:e.highlighted?"1px solid rgba(168, 85, 247, 0.5)":"1px solid rgba(51, 65, 85, 0.5)",borderRadius:"1.5rem",padding:"1.5rem",transition:"transform 0.3s, box-shadow 0.3s",boxShadow:e.highlighted?"0 25px 50px -12px rgba(168, 85, 247, 0.2)":"none"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-0.5rem)",e.highlighted||(r.currentTarget.style.borderColor="rgba(168, 85, 247, 0.5)")},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0)",e.highlighted||(r.currentTarget.style.borderColor="rgba(51, 65, 85, 0.5)")},children:[e.highlighted&&p.jsx("div",{style:{position:"absolute",top:"-1rem",left:"50%",transform:"translateX(-50%)"},children:p.jsx("div",{style:{padding:"0.5rem 1rem",borderRadius:"9999px",background:"linear-gradient(to right, #9333ea, #ec4899)",color:"white",fontSize:"0.875rem"},children:"Beliebt"})}),p.jsxs("div",{style:{position:"relative"},children:[p.jsxs("div",{style:{marginBottom:"1.5rem"},children:[p.jsx("h3",{style:{fontSize:"1.5rem",color:"white",marginBottom:"0.5rem"},children:e.name}),p.jsx("p",{style:{color:"#94a3b8",fontSize:"0.875rem",marginBottom:"1rem"},children:e.description}),p.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"0.75rem"},children:[p.jsx("span",{style:{fontSize:"2.25rem",background:"linear-gradient(to right, #c084fc, #f0abfc)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:e.price}),p.jsx("span",{style:{color:"#64748b",textDecoration:"line-through",fontSize:"1.125rem"},children:e.originalPrice})]}),p.jsx("p",{style:{fontSize:"0.875rem",color:"#c084fc",marginTop:"0.25rem"},children:"Festpreis - keine versteckten Kosten"})]}),p.jsx("div",{style:{marginBottom:"1.5rem"},children:p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.features.map((r,a)=>p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[p.jsx("div",{style:{flexShrink:0,width:"1.25rem",height:"1.25rem",borderRadius:"9999px",backgroundColor:"rgba(168, 85, 247, 0.2)",display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(ta,{style:{width:"0.75rem",height:"0.75rem",color:"#c084fc",strokeWidth:3}})}),p.jsx("span",{style:{color:"#cbd5e1",fontSize:"0.875rem"},children:r})]},a)),p.jsxs("div",{style:{paddingTop:"0.75rem",borderTop:"1px solid rgba(51, 65, 85, 0.5)",display:"flex",flexDirection:"column",gap:"0.75rem"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[p.jsx("div",{style:{flexShrink:0,width:"1.25rem",height:"1.25rem",borderRadius:"9999px",backgroundColor:"rgba(34, 197, 94, 0.2)",display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(ta,{style:{width:"0.75rem",height:"0.75rem",color:"#4ade80",strokeWidth:3}})}),p.jsx("span",{style:{color:"#cbd5e1",fontSize:"0.875rem"},children:"Impressum (kostenlos)"})]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[p.jsx("div",{style:{flexShrink:0,width:"1.25rem",height:"1.25rem",borderRadius:"9999px",backgroundColor:"rgba(34, 197, 94, 0.2)",display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(ta,{style:{width:"0.75rem",height:"0.75rem",color:"#4ade80",strokeWidth:3}})}),p.jsx("span",{style:{color:"#cbd5e1",fontSize:"0.875rem"},children:"Datenschutz (kostenlos)"})]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[p.jsx("div",{style:{flexShrink:0,width:"1.25rem",height:"1.25rem",borderRadius:"9999px",backgroundColor:"rgba(34, 197, 94, 0.2)",display:"flex",alignItems:"center",justifyContent:"center"},children:p.jsx(ta,{style:{width:"0.75rem",height:"0.75rem",color:"#4ade80",strokeWidth:3}})}),p.jsx("span",{style:{color:"#cbd5e1",fontSize:"0.875rem"},children:"Barrierefreiheit (kostenlos)"})]})]})]})}),p.jsx("button",{onClick:()=>{const r=document.getElementById("kontakt");if(r){const a=document.querySelector("header"),l=a?a.offsetHeight:120,u=r.getBoundingClientRect().top+window.scrollY,d=Math.max(0,u-l-16);window.scrollTo({top:d,behavior:"smooth"});return}window.location.href="/#kontakt"},onMouseEnter:r=>{if(e.highlighted)return;const a=r.currentTarget;a.style.borderColor="rgba(168,85,247,0.9)";const l=a.querySelector("span");l&&(l.style.color="white")},onMouseLeave:r=>{if(e.highlighted)return;const a=r.currentTarget;a.style.borderColor="#334155";const l=a.querySelector("span");l&&(l.style.color="#cbd5e1")},style:{width:"100%",position:"relative",padding:"0.75rem 1.5rem",borderRadius:"9999px",overflow:"hidden",border:e.highlighted?"none":"2px solid #334155",cursor:"pointer",transition:"transform 0.2s ease"},children:e.highlighted?p.jsxs(p.Fragment,{children:[p.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to right, #9333ea, #ec4899, #9333ea)",backgroundSize:"200% 100%",animation:"pricing-gradient-xy 3s ease infinite",pointerEvents:"none"}}),p.jsxs("span",{style:{position:"relative",color:"white",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem"},children:["Jetzt starten",p.jsx(Zm,{style:{width:"1.25rem",height:"1.25rem",transition:"transform 0.3s"}})]})]}):p.jsxs("span",{style:{color:"#cbd5e1",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",transition:"color 0.3s"},children:["Jetzt starten",p.jsx(Zm,{style:{width:"1.25rem",height:"1.25rem",transition:"transform 0.3s"}})]})})]})]},t))}),p.jsx("div",{style:{textAlign:"center",marginTop:"2rem"},children:p.jsx("p",{style:{color:"#94a3b8",fontSize:"0. nine rem"},children:"✓ Gratis-Leistung: Von der Logo-Erstellung bis zur finalen Animation – alle Design-Extras sind ohne Aufpreis enthalten."})})]})})]})]})}function OT(){const s={minHeight:"100vh",backgroundColor:"#0f172a",color:"#f1f5f9",padding:"140px 16px 64px"},e={maxWidth:"896px",margin:"0 auto"},t={marginBottom:"48px",scrollMarginTop:"120px"},r={display:"inline-flex",alignItems:"center",justifyContent:"center",width:"64px",height:"64px",backgroundColor:"rgba(219, 39, 119, 0.2)",borderRadius:"16px",marginBottom:"24px"},a={fontSize:"36px",fontWeight:"700",marginBottom:"16px",color:"#ffffff",lineHeight:"1.2"},l={fontSize:"18px",color:"#94a3b8",lineHeight:"1.6"},u={backgroundColor:"rgba(30, 41, 59, 0.5)",borderRadius:"16px",padding:"32px",border:"1px solid #334155",marginBottom:"32px"},d={fontSize:"24px",fontWeight:"600",marginBottom:"24px",color:"#ffffff",lineHeight:"1.3"},h={fontSize:"18px",fontWeight:"500",marginBottom:"8px",color:"#ffffff",lineHeight:"1.4"},m={color:"#cbd5e1",lineHeight:"1.6",marginBottom:"12px"},x={fontSize:"14px",color:"#cbd5e1",lineHeight:"1.6"},v={display:"flex",alignItems:"flex-start",gap:"16px",marginBottom:"16px"},y={display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",backgroundColor:"rgba(219, 39, 119, 0.2)",borderRadius:"8px",flexShrink:0},M={color:"#cbd5e1",textDecoration:"none",transition:"color 0.2s"},A={color:"#ec4899"},w={color:"#ec4899",textDecoration:"underline",transition:"color 0.2s"},S={marginTop:"48px",textAlign:"center",fontSize:"14px",color:"#64748b"};return et.useEffect(()=>{const _=document.getElementById("page-header");_&&setTimeout(()=>{const I=document.querySelector("header"),N=I?I.offsetHeight:120,P=_.getBoundingClientRect().top+window.scrollY,z=Math.max(0,P-N-16);window.scrollTo({top:z,behavior:"smooth"})},50)},[]),p.jsxs(p.Fragment,{children:[p.jsxs(os,{children:[p.jsx("title",{children:"Impressum — oezdens"}),p.jsx("meta",{name:"description",content:"Impressum von oezdens — Kontaktdaten, Betreiberinformationen und rechtliche Hinweise gemäß §5 TMG."}),p.jsx("link",{rel:"canonical",href:"https://oezdens.com/impressum"})]}),p.jsx("div",{style:s,children:p.jsxs("div",{style:e,children:[p.jsxs("div",{id:"page-header",style:t,children:[p.jsx("div",{style:r,children:p.jsx(ry,{style:{width:"32px",height:"32px",color:"#ec4899"}})}),p.jsx("h1",{style:a,children:"Impressum"}),p.jsx("p",{style:l,children:"Angaben gemäß § 5 TMG"})]}),p.jsxs("div",{children:[p.jsxs("section",{style:u,children:[p.jsx("h2",{style:d,children:"Diensteanbieter / Betreiber"}),p.jsxs("div",{style:m,children:[p.jsx("p",{style:{paddingTop:"8px",marginBottom:"4px",fontWeight:600},children:"Serhat Özden"}),p.jsxs("div",{style:{...v,marginTop:"20px"},children:[p.jsx("div",{style:y,children:p.jsx(d0,{style:{width:"20px",height:"20px",color:"#ec4899"}})}),p.jsxs("div",{style:m,children:[p.jsx("p",{style:{marginBottom:"4px"},children:"Bodemstall 6"}),p.jsx("p",{style:{marginBottom:"4px"},children:"74177 Bad Friedrichshall"}),p.jsx("p",{children:"Deutschland"})]})]}),p.jsxs("div",{style:{...v,marginTop:"20px"},children:[p.jsx("div",{style:y,children:p.jsx(ty,{style:{width:"20px",height:"20px",color:"#ec4899"}})}),p.jsx("a",{href:"tel:+4989123456789",style:M,onMouseEnter:_=>Object.assign(_.currentTarget.style,A),onMouseLeave:_=>Object.assign(_.currentTarget.style,M),children:"+49 (0) 89 / 12 34 56 - 789"})]}),p.jsxs("div",{style:v,children:[p.jsx("div",{style:y,children:p.jsx(Yf,{style:{width:"20px",height:"20px",color:"#ec4899"}})}),p.jsx("a",{href:"mailto:oezdens.web@outlook.de",style:M,onMouseEnter:_=>Object.assign(_.currentTarget.style,A),onMouseLeave:_=>Object.assign(_.currentTarget.style,M),children:"oezdens.web@outlook.de"})]}),p.jsx("h3",{style:{...h,marginTop:"24px"},children:"Steuerliche Angaben"}),p.jsx("p",{style:{marginBottom:"4px"},children:"Steuernummer: **[Ihre Steuernummer hier einfügen]**"}),p.jsx("p",{style:{marginBottom:0},children:"USt-IdNr.: Kleingewerbetreibend, keine USt-IdNr. vorhanden"})]})]}),p.jsxs("section",{style:u,children:[p.jsx("h2",{style:d,children:"Verantwortlich für den Inhalt"}),p.jsxs("div",{style:m,children:[p.jsx("p",{style:{marginBottom:"8px"},children:"gemäß § 55 Abs. 2 RStV:"}),p.jsx("p",{style:{paddingTop:"8px",marginBottom:"4px"},children:"Serhat Özden"}),p.jsx("p",{children:"Bodemstall 6, 74177 Bad Friedrichshall"})]})]}),p.jsxs("section",{style:u,children:[p.jsx("h2",{style:d,children:"EU-Streitschlichtung"}),p.jsxs("div",{style:m,children:[p.jsx("p",{style:{marginBottom:"16px"},children:"Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:"}),p.jsx("a",{href:"https://ec.europa.eu/consumers/odr/",target:"_blank",rel:"noopener noreferrer",style:w,children:"https://ec.europa.eu/consumers/odr/"}),p.jsx("p",{style:{paddingTop:"16px"},children:"Unsere E-Mail-Adresse finden Sie oben im Impressum."})]})]}),p.jsxs("section",{style:u,children:[p.jsx("h2",{style:d,children:"Verbraucherstreitbeilegung / Universalschlichtungsstelle"}),p.jsx("p",{style:m,children:"Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."})]}),p.jsxs("section",{style:u,children:[p.jsx("h2",{style:d,children:"Haftungsausschluss"}),p.jsxs("div",{style:{marginBottom:"24px"},children:[p.jsx("h3",{style:h,children:"Haftung für Inhalte"}),p.jsx("p",{style:x,children:"Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."})]}),p.jsxs("div",{style:{marginBottom:"24px"},children:[p.jsx("h3",{style:h,children:"Haftung für Links"}),p.jsx("p",{style:x,children:"Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich."})]}),p.jsxs("div",{children:[p.jsx("h3",{style:h,children:"Urheberrecht"}),p.jsx("p",{style:x,children:"Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers."})]})]})]}),p.jsx("div",{style:S,children:p.jsx("p",{children:"Stand: Oktober 2025"})})]})})]})}function zT(){const s={minHeight:"100vh",backgroundColor:"#0f172a",color:"#f1f5f9",padding:"140px 16px 64px"},e={maxWidth:"896px",margin:"0 auto"},t={marginBottom:"48px",scrollMarginTop:"120px"},r={display:"inline-flex",alignItems:"center",justifyContent:"center",width:"64px",height:"64px",backgroundColor:"rgba(219, 39, 119, 0.2)",borderRadius:"16px",marginBottom:"24px"},a={fontSize:"36px",fontWeight:"700",marginBottom:"16px",color:"#ffffff",lineHeight:"1.2"},l={fontSize:"18px",color:"#94a3b8",lineHeight:"1.6"},u={backgroundColor:"rgba(30, 41, 59, 0.5)",borderRadius:"16px",padding:"32px",border:"1px solid #334155",marginBottom:"32px"},d={fontSize:"24px",fontWeight:"600",marginBottom:"24px",color:"#ffffff",lineHeight:"1.3",display:"flex",alignItems:"center",gap:"12px"},h={fontSize:"18px",fontWeight:"500",marginBottom:"12px",color:"#ffffff",lineHeight:"1.4"},m={color:"#cbd5e1",lineHeight:"1.6",marginBottom:"16px"},x={paddingLeft:"20px",marginBottom:"16px"},v={color:"#cbd5e1",marginBottom:"8px",lineHeight:"1.6"},y={backgroundColor:"rgba(219, 39, 119, 0.1)",border:"1px solid rgba(219, 39, 119, 0.3)",borderRadius:"8px",padding:"16px",marginBottom:"16px"},M={color:"#ec4899",textDecoration:"underline",transition:"color 0.2s"},A={marginTop:"48px",textAlign:"center",fontSize:"14px",color:"#64748b"};et.useEffect(()=>{const S=document.getElementById("page-header");S&&setTimeout(()=>{const _=document.querySelector("header"),I=_?_.offsetHeight:120,N=S.getBoundingClientRect().top+window.scrollY,P=Math.max(0,N-I-16);window.scrollTo({top:P,behavior:"smooth"})},50)},[]);const w={width:"24px",height:"24px",color:"#ec4899"};return p.jsxs(p.Fragment,{children:[p.jsxs(os,{children:[p.jsx("title",{children:"Datenschutzerklärung — oezdens"}),p.jsx("meta",{name:"description",content:"Datenschutzerklärung von oezdens — Informationen zur Verarbeitung personenbezogener Daten und Ihren Rechten."}),p.jsx("link",{rel:"canonical",href:"https://oezdens.com/datenschutz"})]}),p.jsx("div",{style:s,children:p.jsxs("div",{style:e,children:[p.jsxs("div",{id:"page-header",style:t,children:[p.jsx("div",{style:r,children:p.jsx(ly,{style:{width:"32px",height:"32px",color:"#ec4899"}})}),p.jsx("h1",{style:a,children:"Datenschutzerklärung"}),p.jsx("p",{style:l,children:"Informationen über die Verarbeitung Ihrer personenbezogenen Daten"})]}),p.jsxs("div",{children:[p.jsxs("section",{style:u,children:[p.jsxs("h2",{style:d,children:[p.jsx(j_,{style:w}),"Allgemeine Hinweise"]}),p.jsx("p",{style:m,children:"Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können."}),p.jsx("div",{style:y,children:p.jsxs("p",{style:{color:"#cbd5e1",margin:0},children:[p.jsx("strong",{style:{color:"#ffffff"},children:"Verantwortliche Stelle:"})," Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist **Serhat Özden**. Die vollständigen Kontaktdaten finden Sie im ",p.jsx("a",{href:"/impressum",style:M,children:"Impressum"}),"."]})})]}),p.jsxs("section",{style:u,children:[p.jsxs("h2",{style:d,children:[p.jsx(N_,{style:w}),"Datenerfassung auf dieser Website"]}),p.jsxs("div",{style:{marginBottom:"24px"},children:[p.jsx("h3",{style:h,children:"Wer ist verantwortlich für die Datenerfassung?"}),p.jsx("p",{style:m,children:"Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber **Serhat Özden**. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen."})]}),p.jsxs("div",{style:{marginBottom:"24px"},children:[p.jsx("h3",{style:h,children:"Wie erfassen wir Ihre Daten?"}),p.jsx("p",{style:m,children:"Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben."}),p.jsx("p",{style:m,children:"Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs)."})]}),p.jsxs("div",{children:[p.jsx("h3",{style:h,children:"Wofür nutzen wir Ihre Daten?"}),p.jsx("p",{style:m,children:"Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten und die Sicherheit unserer IT-Systeme zu gewährleisten."})]})]}),p.jsxs("section",{style:u,children:[p.jsxs("h2",{style:d,children:[p.jsx(C_,{style:w}),"Hosting und Content Delivery Networks (CDN)"]}),p.jsx("p",{style:m,children:"Diese Website wird bei **STRATO AG** (Otto-Lilienthal-Straße 1, 31135 Hildesheim, Deutschland) gehostet. Der Hoster verarbeitet in unserem Auftrag alle Daten, die auf dieser Website verarbeitet werden oder über die Website erhoben werden. Dies ist insbesondere zur Bereitstellung der Website, Gewährleistung von Stabilität und Sicherheit erforderlich."}),p.jsx("p",{style:m,children:"Die Nutzung von STRATO erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer technisch einwandfreien und optimierten Bereitstellung unserer Website. Soweit eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar."})]}),p.jsxs("section",{style:u,children:[p.jsxs("h2",{style:d,children:[p.jsx(u0,{style:w}),"Server-Log-Dateien"]}),p.jsx("p",{style:m,children:"Der Provider der Seiten (STRATO) erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:"}),p.jsxs("ul",{style:x,children:[p.jsx("li",{style:v,children:"Browsertyp und Browserversion"}),p.jsx("li",{style:v,children:"Verwendetes Betriebssystem"}),p.jsx("li",{style:v,children:"Referrer URL"}),p.jsx("li",{style:v,children:"Hostname des zugreifenden Rechners"}),p.jsx("li",{style:v,children:"Uhrzeit der Serveranfrage"}),p.jsx("li",{style:v,children:"IP-Adresse"})]}),p.jsx("p",{style:m,children:"Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung der technischen Sicherheit und Optimierung unserer Dienste."})]}),p.jsxs("section",{style:u,children:[p.jsxs("h2",{style:d,children:[p.jsx(Kd,{style:w}),"Cookies"]}),p.jsx("p",{style:m,children:'Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.'}),p.jsxs("div",{style:{marginBottom:"24px"},children:[p.jsx("h3",{style:h,children:"Rechtsgrundlage und Arten von Cookies:"}),p.jsx("p",{style:m,children:"Wir verwenden ausschließlich **technisch notwendige Cookies**, die für den Betrieb unserer Website und die Bereitstellung grundlegender Funktionen erforderlich sind."}),p.jsx("ul",{style:x,children:p.jsxs("li",{style:v,children:[p.jsx("strong",{style:{color:"#ffffff"},children:"Notwendige Cookies:"})," Erforderlich für den Betrieb der Website (z.B. Speicherung Ihrer Login-Daten). Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, da wir ein berechtigtes Interesse an der technisch fehlerfreien Bereitstellung unserer Dienste haben."]})}),p.jsx("p",{style:m,children:"**Wir verwenden keine Cookies zu Analyse-, Marketing- oder Trackingzwecken.**"})]}),p.jsx("p",{style:m,children:"Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein."})]}),p.jsxs("section",{style:u,children:[p.jsxs("h2",{style:d,children:[p.jsx(vy,{style:w}),"Kontaktformular"]}),p.jsx("p",{style:m,children:"Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert."}),p.jsx("p",{style:m,children:"Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist."})]}),p.jsxs("section",{style:u,children:[p.jsx("h2",{style:d,children:"Ihre Rechte"}),p.jsx("p",{style:m,children:"Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten."}),p.jsxs("div",{style:{marginBottom:"24px"},children:[p.jsx("h3",{style:h,children:"Ihre Rechte im Überblick:"}),p.jsxs("ul",{style:x,children:[p.jsxs("li",{style:v,children:[p.jsx("strong",{style:{color:"#ffffff"},children:"Auskunftsrecht:"})," Sie können Auskunft über Ihre bei uns gespeicherten Daten verlangen"]}),p.jsxs("li",{style:v,children:[p.jsx("strong",{style:{color:"#ffffff"},children:"Berichtigungsrecht:"})," Sie können die Berichtigung unrichtiger Daten verlangen"]}),p.jsxs("li",{style:v,children:[p.jsx("strong",{style:{color:"#ffffff"},children:"Löschungsrecht:"})," Sie können die Löschung Ihrer Daten verlangen"]}),p.jsxs("li",{style:v,children:[p.jsx("strong",{style:{color:"#ffffff"},children:"Einschränkung der Verarbeitung:"})," Sie können die Einschränkung der Verarbeitung verlangen"]}),p.jsxs("li",{style:v,children:[p.jsx("strong",{style:{color:"#ffffff"},children:"Datenübertragbarkeit:"})," Sie haben das Recht auf Datenübertragbarkeit"]}),p.jsxs("li",{style:v,children:[p.jsx("strong",{style:{color:"#ffffff"},children:"Widerspruchsrecht:"})," Sie können der Verarbeitung Ihrer Daten widersprechen"]}),p.jsxs("li",{style:v,children:[p.jsx("strong",{style:{color:"#ffffff"},children:"Beschwerderecht:"})," Sie können sich bei einer Aufsichtsbehörde beschweren"]})]})]}),p.jsx("div",{style:y,children:p.jsxs("p",{style:{color:"#cbd5e1",margin:0},children:[p.jsx("strong",{style:{color:"#ffffff"},children:"Kontakt:"})," Für Fragen zum Datenschutz wenden Sie sich bitte an: ",p.jsx("a",{href:"mailto:oezdens.web@outlook.de",style:M,children:"oezdens.web@outlook.de"})]})})]}),p.jsxs("section",{style:u,children:[p.jsx("h2",{style:d,children:"SSL- bzw. TLS-Verschlüsselung"}),p.jsx("p",{style:m,children:"Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung."}),p.jsx("p",{style:m,children:'Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.'})]}),p.jsxs("section",{style:u,children:[p.jsx("h2",{style:d,children:"Speicherdauer"}),p.jsx("p",{style:m,children:"Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt."}),p.jsx("p",{style:m,children:"Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben."})]})]}),p.jsx("div",{style:A,children:p.jsx("p",{children:"Stand: Oktober 2025"})})]})})]})}function BT(){const s={minHeight:"100vh",backgroundColor:"#0f172a",color:"#f1f5f9",padding:"140px 16px 64px"},e={maxWidth:"896px",margin:"0 auto"},t={marginBottom:"48px",scrollMarginTop:"120px"},r={display:"inline-flex",alignItems:"center",justifyContent:"center",width:"64px",height:"64px",backgroundColor:"rgba(219, 39, 119, 0.2)",borderRadius:"16px",marginBottom:"24px"},a={fontSize:"36px",fontWeight:"700",marginBottom:"16px",color:"#ffffff",lineHeight:"1.2"},l={fontSize:"18px",color:"#94a3b8",lineHeight:"1.6"},u={backgroundColor:"rgba(30, 41, 59, 0.5)",borderRadius:"16px",padding:"32px",border:"1px solid #334155",marginBottom:"32px"},d={fontSize:"24px",fontWeight:"600",marginBottom:"24px",color:"#ffffff",lineHeight:"1.3",display:"flex",alignItems:"center",gap:"12px"},h={fontSize:"18px",fontWeight:"500",marginBottom:"12px",color:"#ffffff",lineHeight:"1.4"},m={color:"#cbd5e1",lineHeight:"1.6",marginBottom:"16px"},x={paddingLeft:"20px",marginBottom:"16px"},v={color:"#cbd5e1",marginBottom:"8px",lineHeight:"1.6"},y={backgroundColor:"rgba(219, 39, 119, 0.1)",border:"1px solid rgba(219, 39, 119, 0.3)",borderRadius:"8px",padding:"16px",marginBottom:"16px"},M={backgroundColor:"rgba(15, 23, 42, 0.5)",border:"1px solid #334155",borderRadius:"12px",padding:"20px",marginBottom:"16px"},A={display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"},w={display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",backgroundColor:"rgba(219, 39, 119, 0.2)",borderRadius:"8px",flexShrink:0},S={color:"#ec4899",textDecoration:"underline",transition:"color 0.2s"},_={marginTop:"48px",textAlign:"center",fontSize:"14px",color:"#64748b"};et.useEffect(()=>{const P=document.getElementById("page-header");P&&setTimeout(()=>{const z=document.querySelector("header"),F=z?z.offsetHeight:120,V=P.getBoundingClientRect().top+window.scrollY,B=Math.max(0,V-F-16);window.scrollTo({top:B,behavior:"smooth"})},50)},[]);const I={width:"24px",height:"24px",color:"#ec4899"},N={width:"20px",height:"20px",color:"#ec4899"};return p.jsxs(p.Fragment,{children:[p.jsxs(os,{children:[p.jsx("title",{children:"Barrierefreiheit — oezdens"}),p.jsx("meta",{name:"description",content:"Barrierefreiheit bei oezdens — Informationen zu Maßnahmen, Standards (WCAG 2.1 AA) und Kontakt für Barrierefreiheitsfragen."}),p.jsx("link",{rel:"canonical",href:"https://oezdens.com/barrierefreiheit"})]}),p.jsx("div",{style:s,children:p.jsxs("div",{style:e,children:[p.jsxs("div",{id:"page-header",style:t,children:[p.jsx("div",{style:r,children:p.jsx(x_,{style:{width:"32px",height:"32px",color:"#ec4899"}})}),p.jsx("h1",{style:a,children:"Barrierefreiheit"}),p.jsx("p",{style:l,children:"Unser Engagement für eine zugängliche Website für alle Nutzer"})]}),p.jsxs("div",{children:[p.jsxs("section",{style:u,children:[p.jsxs("h2",{style:d,children:[p.jsx(F_,{style:I}),"Unser Versprechen"]}),p.jsx("p",{style:m,children:"Wir sind bestrebt, unsere Website für alle Menschen zugänglich zu machen, unabhängig von ihren Fähigkeiten oder der verwendeten Technologie. Wir arbeiten kontinuierlich daran, die Benutzerfreundlichkeit und Zugänglichkeit unserer Website zu verbessern und halten uns dabei an die relevanten Standards und Best Practices."}),p.jsx("div",{style:y,children:p.jsxs("p",{style:{color:"#cbd5e1",margin:0},children:[p.jsx("strong",{style:{color:"#ffffff"},children:"Unser Ziel:"})," Wir orientieren uns an den Web Content Accessibility Guidelines (WCAG) 2.1 Level AA, um eine barrierefreie Website zu gewährleisten."]})})]}),p.jsxs("section",{style:u,children:[p.jsxs("h2",{style:d,children:[p.jsx(T_,{style:I}),"Barrierefreiheits-Funktionen"]}),p.jsx("p",{style:m,children:"Unsere Website bietet verschiedene Funktionen, um die Zugänglichkeit zu verbessern:"}),p.jsxs("div",{style:M,children:[p.jsxs("div",{style:A,children:[p.jsx("div",{style:w,children:p.jsx(u0,{style:N})}),p.jsx("h3",{style:{...h,marginBottom:0},children:"Visuelle Barrierefreiheit"})]}),p.jsxs("ul",{style:x,children:[p.jsx("li",{style:v,children:"Hohe Kontrastverhältnisse für bessere Lesbarkeit"}),p.jsx("li",{style:v,children:"Skalierbare Schriftgrößen"}),p.jsx("li",{style:v,children:"Alternative Texte für alle Bilder und Grafiken"}),p.jsx("li",{style:v,children:"Klare und konsistente Navigationsstruktur"}),p.jsx("li",{style:v,children:"Keine ausschließliche Informationsvermittlung durch Farbe"})]})]}),p.jsxs("div",{style:M,children:[p.jsxs("div",{style:A,children:[p.jsx("div",{style:w,children:p.jsx(z_,{style:N})}),p.jsx("h3",{style:{...h,marginBottom:0},children:"Tastaturnavigation"})]}),p.jsxs("ul",{style:x,children:[p.jsx("li",{style:v,children:"Vollständige Bedienbarkeit mit der Tastatur"}),p.jsx("li",{style:v,children:"Sichtbare Fokus-Indikatoren"}),p.jsx("li",{style:v,children:"Logische Tab-Reihenfolge"}),p.jsx("li",{style:v,children:"Skip-Links zum Überspringen von Navigationselementen"})]})]}),p.jsxs("div",{style:M,children:[p.jsxs("div",{style:A,children:[p.jsx("div",{style:w,children:p.jsx(I_,{style:N})}),p.jsx("h3",{style:{...h,marginBottom:0},children:"Screenreader-Kompatibilität"})]}),p.jsxs("ul",{style:x,children:[p.jsx("li",{style:v,children:"Semantisches HTML für bessere Struktur"}),p.jsx("li",{style:v,children:"ARIA-Labels und -Attribute wo erforderlich"}),p.jsx("li",{style:v,children:"Beschreibende Link-Texte"}),p.jsx("li",{style:v,children:"Korrekte Überschriftenhierarchie"})]})]}),p.jsxs("div",{style:M,children:[p.jsxs("div",{style:A,children:[p.jsx("div",{style:w,children:p.jsx(Q_,{style:N})}),p.jsx("h3",{style:{...h,marginBottom:0},children:"Responsive Design"})]}),p.jsxs("ul",{style:x,children:[p.jsx("li",{style:v,children:"Optimiert für verschiedene Bildschirmgrößen"}),p.jsx("li",{style:v,children:"Touch-freundliche Schaltflächen und Bedienelemente"}),p.jsx("li",{style:v,children:"Zoom-Unterstützung bis 200% ohne Funktionsverlust"}),p.jsx("li",{style:v,children:"Lesbare Inhalte auf mobilen Geräten"})]})]})]}),p.jsxs("section",{style:u,children:[p.jsx("h2",{style:d,children:"Konformität mit Standards"}),p.jsx("p",{style:m,children:"Unsere Website wurde unter Berücksichtigung der folgenden Standards entwickelt:"}),p.jsxs("ul",{style:x,children:[p.jsxs("li",{style:v,children:[p.jsx("strong",{style:{color:"#ffffff"},children:"WCAG 2.1 Level AA:"})," Web Content Accessibility Guidelines des W3C"]}),p.jsxs("li",{style:v,children:[p.jsx("strong",{style:{color:"#ffffff"},children:"BITV 2.0:"})," Barrierefreie Informationstechnik-Verordnung"]}),p.jsxs("li",{style:v,children:[p.jsx("strong",{style:{color:"#ffffff"},children:"EN 301 549:"})," Europäischer Standard für digitale Barrierefreiheit"]})]})]}),p.jsxs("section",{style:u,children:[p.jsx("h2",{style:d,children:"Browser- und Technologiekompatibilität"}),p.jsx("p",{style:m,children:"Unsere Website ist mit folgenden Technologien kompatibel:"}),p.jsxs("div",{style:{marginBottom:"24px"},children:[p.jsx("h3",{style:h,children:"Unterstützte Browser:"}),p.jsxs("ul",{style:x,children:[p.jsx("li",{style:v,children:"Google Chrome (aktuelle Version)"}),p.jsx("li",{style:v,children:"Mozilla Firefox (aktuelle Version)"}),p.jsx("li",{style:v,children:"Safari (aktuelle Version)"}),p.jsx("li",{style:v,children:"Microsoft Edge (aktuelle Version)"})]})]}),p.jsxs("div",{children:[p.jsx("h3",{style:h,children:"Unterstützte Screenreader:"}),p.jsxs("ul",{style:x,children:[p.jsx("li",{style:v,children:"JAWS (aktuelle Version)"}),p.jsx("li",{style:v,children:"NVDA (aktuelle Version)"}),p.jsx("li",{style:v,children:"VoiceOver (macOS/iOS)"}),p.jsx("li",{style:v,children:"TalkBack (Android)"})]})]})]}),p.jsxs("section",{style:u,children:[p.jsx("h2",{style:d,children:"Bekannte Einschränkungen"}),p.jsx("p",{style:m,children:"Trotz unserer Bemühungen können einige Bereiche unserer Website möglicherweise noch nicht vollständig barrierefrei sein. Wir arbeiten kontinuierlich an Verbesserungen:"}),p.jsxs("ul",{style:x,children:[p.jsx("li",{style:v,children:"Einige PDF-Dokumente entsprechen möglicherweise noch nicht vollständig den Barrierefreiheitsstandards"}),p.jsx("li",{style:v,children:"Externe eingebettete Inhalte von Drittanbietern sind möglicherweise nicht vollständig barrierefrei"}),p.jsx("li",{style:v,children:"Wir arbeiten an der Verbesserung der Barrierefreiheit älterer Inhalte"})]})]}),p.jsxs("section",{style:u,children:[p.jsx("h2",{style:d,children:"Feedback und Kontakt"}),p.jsx("p",{style:m,children:"Ihre Meinung ist uns wichtig! Wenn Sie auf Barrierefreiheitsprobleme stoßen oder Verbesserungsvorschläge haben, kontaktieren Sie uns bitte:"}),p.jsxs("div",{style:y,children:[p.jsxs("div",{style:{marginBottom:"12px"},children:[p.jsx("strong",{style:{color:"#ffffff"},children:"E-Mail:"}),p.jsx("a",{href:"mailto:oezdens.web@outlook.de",style:{...S,marginLeft:"8px"},children:"oezdens.web@outlook.de"})]}),p.jsxs("div",{style:{marginBottom:"12px"},children:[p.jsx("strong",{style:{color:"#ffffff"},children:"Telefon:"}),p.jsx("span",{style:{color:"#cbd5e1",marginLeft:"8px"},children:"+49 (0) 89 / 12 34 56 - 789"})]})]}),p.jsx("p",{style:m,children:"Wir bemühen uns, alle Anfragen innerhalb von 5 Werktagen zu beantworten."})]}),p.jsxs("section",{style:u,children:[p.jsx("h2",{style:d,children:"Inhalte von Drittanbietern"}),p.jsx("p",{style:m,children:"Einige Inhalte auf unserer Website werden von Drittanbietern bereitgestellt. Wir haben nur begrenzte Kontrolle über die Barrierefreiheit dieser Inhalte, arbeiten aber mit unseren Partnern zusammen, um die bestmögliche Zugänglichkeit sicherzustellen."})]}),p.jsxs("section",{style:u,children:[p.jsx("h2",{style:d,children:"Kontinuierliche Verbesserung"}),p.jsx("p",{style:m,children:"Barrierefreiheit ist ein fortlaufender Prozess. Wir überprüfen und aktualisieren unsere Website regelmäßig, um sicherzustellen, dass sie für alle Nutzer zugänglich bleibt. Zu unseren laufenden Bemühungen gehören:"}),p.jsxs("ul",{style:x,children:[p.jsx("li",{style:v,children:"Regelmäßige Barrierefreiheitstests und Audits"}),p.jsx("li",{style:v,children:"Schulungen für unser Entwicklungsteam"}),p.jsx("li",{style:v,children:"Einbeziehung von Nutzerfeedback in Verbesserungen"}),p.jsx("li",{style:v,children:"Aktualisierung gemäß neuer Standards und Best Practices"})]})]})]}),p.jsx("div",{style:_,children:p.jsx("p",{children:"Stand: Oktober 2025 | Letzte Überprüfung: Oktober 2025"})})]})})]})}function HT(){const s="oezdens — Webentwicklung & IT",e="Professionelle Webentwicklung & IT-Services — moderne Websites, Barrierefreiheit und transparente Preise.";et.useEffect(()=>{const a=window.location.pathname,u={"/Startseite":"home","/leistungen":"leistungen","/ueber-mich":"ueber-mich","/ablauf":"ablauf","/preise":"preise","/kontakt":"kontakt"}[a];u&&setTimeout(()=>{const d=document.getElementById(u);if(d){const h=document.querySelector("header"),m=h?h.offsetHeight:120,x=d.getBoundingClientRect().top+window.scrollY,v=u==="kontakt"?Math.max(0,x-m+8):Math.max(0,x-m-16);window.scrollTo({top:v,behavior:"smooth"})}},100)},[]);const t=p.jsxs(os,{children:[p.jsx("title",{children:s}),p.jsx("meta",{name:"description",content:e}),p.jsx("meta",{property:"og:title",content:s}),p.jsx("meta",{property:"og:description",content:e}),p.jsx("meta",{property:"og:type",content:"website"}),p.jsx("meta",{property:"og:image",content:"https://oezdens.com/assets/ich-CFswyXwc.jpg"}),p.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),p.jsx("link",{rel:"canonical",href:"https://oezdens.com/"}),p.jsx("script",{type:"application/ld+json",children:`{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "oezdens",
        "url": "https://oezdens.com",
        "logo": "https://oezdens.com/assets/ich-CFswyXwc.jpg",
        "sameAs": []
      }`})]}),r=typeof window<"u"?window.location.pathname:"/";return r==="/impressum"?p.jsxs("div",{className:"min-h-screen bg-slate-950 text-white",children:[t,p.jsx(Ml,{}),p.jsx(OT,{}),p.jsx(Kl,{})]}):r==="/datenschutz"?p.jsxs("div",{className:"min-h-screen bg-slate-950 text-white",children:[t,p.jsx(Ml,{}),p.jsx(zT,{}),p.jsx(Kl,{})]}):r==="/barrierefreiheit"?p.jsxs("div",{className:"min-h-screen bg-slate-950 text-white",children:[t,p.jsx(Ml,{}),p.jsx(BT,{}),p.jsx(Kl,{})]}):p.jsxs("div",{className:"min-h-screen bg-slate-950 text-white",children:[t,p.jsx(Ml,{}),p.jsx(kw,{}),p.jsx(UT,{}),p.jsx(Uw,{}),p.jsx(FT,{}),p.jsx(PT,{}),p.jsx(NT,{}),p.jsx(Kl,{})]})}Hx.createRoot(document.getElementById("root")).render(p.jsx(Zs,{children:p.jsx(HT,{})}));
