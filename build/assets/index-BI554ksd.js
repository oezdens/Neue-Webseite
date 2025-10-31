(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();var Ru={exports:{}},ko={},Pu={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function R0(){if(Gp)return xt;Gp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,b={};function y(I,ne,Ae){this.props=I,this.context=ne,this.refs=b,this.updater=Ae||M}y.prototype.isReactComponent={},y.prototype.setState=function(I,ne){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ne,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=y.prototype;function k(I,ne,Ae){this.props=I,this.context=ne,this.refs=b,this.updater=Ae||M}var N=k.prototype=new g;N.constructor=k,T(N,y.prototype),N.isPureReactComponent=!0;var P=Array.isArray,H=Object.prototype.hasOwnProperty,O={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function V(I,ne,Ae){var Ce,Ue={},Q=null,ie=null;if(ne!=null)for(Ce in ne.ref!==void 0&&(ie=ne.ref),ne.key!==void 0&&(Q=""+ne.key),ne)H.call(ne,Ce)&&!z.hasOwnProperty(Ce)&&(Ue[Ce]=ne[Ce]);var ve=arguments.length-2;if(ve===1)Ue.children=Ae;else if(1<ve){for(var Re=Array(ve),De=0;De<ve;De++)Re[De]=arguments[De+2];Ue.children=Re}if(I&&I.defaultProps)for(Ce in ve=I.defaultProps,ve)Ue[Ce]===void 0&&(Ue[Ce]=ve[Ce]);return{$$typeof:s,type:I,key:Q,ref:ie,props:Ue,_owner:O.current}}function R(I,ne){return{$$typeof:s,type:I.type,key:ne,ref:I.ref,props:I.props,_owner:I._owner}}function C(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function G(I){var ne={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ae){return ne[Ae]})}var Z=/\/+/g;function le(I,ne){return typeof I=="object"&&I!==null&&I.key!=null?G(""+I.key):ne.toString(36)}function ue(I,ne,Ae,Ce,Ue){var Q=typeof I;(Q==="undefined"||Q==="boolean")&&(I=null);var ie=!1;if(I===null)ie=!0;else switch(Q){case"string":case"number":ie=!0;break;case"object":switch(I.$$typeof){case s:case e:ie=!0}}if(ie)return ie=I,Ue=Ue(ie),I=Ce===""?"."+le(ie,0):Ce,P(Ue)?(Ae="",I!=null&&(Ae=I.replace(Z,"$&/")+"/"),ue(Ue,ne,Ae,"",function(De){return De})):Ue!=null&&(C(Ue)&&(Ue=R(Ue,Ae+(!Ue.key||ie&&ie.key===Ue.key?"":(""+Ue.key).replace(Z,"$&/")+"/")+I)),ne.push(Ue)),1;if(ie=0,Ce=Ce===""?".":Ce+":",P(I))for(var ve=0;ve<I.length;ve++){Q=I[ve];var Re=Ce+le(Q,ve);ie+=ue(Q,ne,Ae,Re,Ue)}else if(Re=x(I),typeof Re=="function")for(I=Re.call(I),ve=0;!(Q=I.next()).done;)Q=Q.value,Re=Ce+le(Q,ve++),ie+=ue(Q,ne,Ae,Re,Ue);else if(Q==="object")throw ne=String(I),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ie}function de(I,ne,Ae){if(I==null)return I;var Ce=[],Ue=0;return ue(I,Ce,"","",function(Q){return ne.call(Ae,Q,Ue++)}),Ce}function te(I){if(I._status===-1){var ne=I._result;ne=ne(),ne.then(function(Ae){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ae)},function(Ae){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ae)}),I._status===-1&&(I._status=0,I._result=ne)}if(I._status===1)return I._result.default;throw I._result}var fe={current:null},D={transition:null},he={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:D,ReactCurrentOwner:O};function ce(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:de,forEach:function(I,ne,Ae){de(I,function(){ne.apply(this,arguments)},Ae)},count:function(I){var ne=0;return de(I,function(){ne++}),ne},toArray:function(I){return de(I,function(ne){return ne})||[]},only:function(I){if(!C(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},xt.Component=y,xt.Fragment=n,xt.Profiler=a,xt.PureComponent=k,xt.StrictMode=r,xt.Suspense=m,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,xt.act=ce,xt.cloneElement=function(I,ne,Ae){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Ce=T({},I.props),Ue=I.key,Q=I.ref,ie=I._owner;if(ne!=null){if(ne.ref!==void 0&&(Q=ne.ref,ie=O.current),ne.key!==void 0&&(Ue=""+ne.key),I.type&&I.type.defaultProps)var ve=I.type.defaultProps;for(Re in ne)H.call(ne,Re)&&!z.hasOwnProperty(Re)&&(Ce[Re]=ne[Re]===void 0&&ve!==void 0?ve[Re]:ne[Re])}var Re=arguments.length-2;if(Re===1)Ce.children=Ae;else if(1<Re){ve=Array(Re);for(var De=0;De<Re;De++)ve[De]=arguments[De+2];Ce.children=ve}return{$$typeof:s,type:I.type,key:Ue,ref:Q,props:Ce,_owner:ie}},xt.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},xt.createElement=V,xt.createFactory=function(I){var ne=V.bind(null,I);return ne.type=I,ne},xt.createRef=function(){return{current:null}},xt.forwardRef=function(I){return{$$typeof:f,render:I}},xt.isValidElement=C,xt.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:te}},xt.memo=function(I,ne){return{$$typeof:p,type:I,compare:ne===void 0?null:ne}},xt.startTransition=function(I){var ne=D.transition;D.transition={};try{I()}finally{D.transition=ne}},xt.unstable_act=ce,xt.useCallback=function(I,ne){return fe.current.useCallback(I,ne)},xt.useContext=function(I){return fe.current.useContext(I)},xt.useDebugValue=function(){},xt.useDeferredValue=function(I){return fe.current.useDeferredValue(I)},xt.useEffect=function(I,ne){return fe.current.useEffect(I,ne)},xt.useId=function(){return fe.current.useId()},xt.useImperativeHandle=function(I,ne,Ae){return fe.current.useImperativeHandle(I,ne,Ae)},xt.useInsertionEffect=function(I,ne){return fe.current.useInsertionEffect(I,ne)},xt.useLayoutEffect=function(I,ne){return fe.current.useLayoutEffect(I,ne)},xt.useMemo=function(I,ne){return fe.current.useMemo(I,ne)},xt.useReducer=function(I,ne,Ae){return fe.current.useReducer(I,ne,Ae)},xt.useRef=function(I){return fe.current.useRef(I)},xt.useState=function(I){return fe.current.useState(I)},xt.useSyncExternalStore=function(I,ne,Ae){return fe.current.useSyncExternalStore(I,ne,Ae)},xt.useTransition=function(){return fe.current.useTransition()},xt.version="18.3.1",xt}var Wp;function uf(){return Wp||(Wp=1,Pu.exports=R0()),Pu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function P0(){if(Xp)return ko;Xp=1;var s=uf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,m,p){var v,_={},x=null,M=null;p!==void 0&&(x=""+p),m.key!==void 0&&(x=""+m.key),m.ref!==void 0&&(M=m.ref);for(v in m)r.call(m,v)&&!l.hasOwnProperty(v)&&(_[v]=m[v]);if(f&&f.defaultProps)for(v in m=f.defaultProps,m)_[v]===void 0&&(_[v]=m[v]);return{$$typeof:e,type:f,key:x,ref:M,props:_,_owner:a.current}}return ko.Fragment=n,ko.jsx=u,ko.jsxs=u,ko}var jp;function D0(){return jp||(jp=1,Ru.exports=P0()),Ru.exports}var U=D0(),ll={},Du={exports:{}},In={},Lu={exports:{}},Nu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function L0(){return Yp||(Yp=1,(function(s){function e(D,he){var ce=D.length;D.push(he);e:for(;0<ce;){var I=ce-1>>>1,ne=D[I];if(0<a(ne,he))D[I]=he,D[ce]=ne,ce=I;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var he=D[0],ce=D.pop();if(ce!==he){D[0]=ce;e:for(var I=0,ne=D.length,Ae=ne>>>1;I<Ae;){var Ce=2*(I+1)-1,Ue=D[Ce],Q=Ce+1,ie=D[Q];if(0>a(Ue,ce))Q<ne&&0>a(ie,Ue)?(D[I]=ie,D[Q]=ce,I=Q):(D[I]=Ue,D[Ce]=ce,I=Ce);else if(Q<ne&&0>a(ie,ce))D[I]=ie,D[Q]=ce,I=Q;else break e}}return he}function a(D,he){var ce=D.sortIndex-he.sortIndex;return ce!==0?ce:D.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var m=[],p=[],v=1,_=null,x=3,M=!1,T=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(D){for(var he=n(p);he!==null;){if(he.callback===null)r(p);else if(he.startTime<=D)r(p),he.sortIndex=he.expirationTime,e(m,he);else break;he=n(p)}}function P(D){if(b=!1,N(D),!T)if(n(m)!==null)T=!0,te(H);else{var he=n(p);he!==null&&fe(P,he.startTime-D)}}function H(D,he){T=!1,b&&(b=!1,g(V),V=-1),M=!0;var ce=x;try{for(N(he),_=n(m);_!==null&&(!(_.expirationTime>he)||D&&!G());){var I=_.callback;if(typeof I=="function"){_.callback=null,x=_.priorityLevel;var ne=I(_.expirationTime<=he);he=s.unstable_now(),typeof ne=="function"?_.callback=ne:_===n(m)&&r(m),N(he)}else r(m);_=n(m)}if(_!==null)var Ae=!0;else{var Ce=n(p);Ce!==null&&fe(P,Ce.startTime-he),Ae=!1}return Ae}finally{_=null,x=ce,M=!1}}var O=!1,z=null,V=-1,R=5,C=-1;function G(){return!(s.unstable_now()-C<R)}function Z(){if(z!==null){var D=s.unstable_now();C=D;var he=!0;try{he=z(!0,D)}finally{he?le():(O=!1,z=null)}}else O=!1}var le;if(typeof k=="function")le=function(){k(Z)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,de=ue.port2;ue.port1.onmessage=Z,le=function(){de.postMessage(null)}}else le=function(){y(Z,0)};function te(D){z=D,O||(O=!0,le())}function fe(D,he){V=y(function(){D(s.unstable_now())},he)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,te(H))},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(m)},s.unstable_next=function(D){switch(x){case 1:case 2:case 3:var he=3;break;default:he=x}var ce=x;x=he;try{return D()}finally{x=ce}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(D,he){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var ce=x;x=D;try{return he()}finally{x=ce}},s.unstable_scheduleCallback=function(D,he,ce){var I=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?I+ce:I):ce=I,D){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=ce+ne,D={id:v++,callback:he,priorityLevel:D,startTime:ce,expirationTime:ne,sortIndex:-1},ce>I?(D.sortIndex=ce,e(p,D),n(m)===null&&D===n(p)&&(b?(g(V),V=-1):b=!0,fe(P,ce-I))):(D.sortIndex=ne,e(m,D),T||M||(T=!0,te(H))),D},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(D){var he=x;return function(){var ce=x;x=he;try{return D.apply(this,arguments)}finally{x=ce}}}})(Nu)),Nu}var qp;function N0(){return qp||(qp=1,Lu.exports=L0()),Lu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function I0(){if($p)return In;$p=1;var s=uf(),e=N0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function x(t){return m.call(_,t)?!0:m.call(v,t)?!1:p.test(t)?_[t]=!0:(v[t]=!0,!1)}function M(t,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,c){if(i===null||typeof i>"u"||M(t,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(t,i,o,c,d,h,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new b(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function k(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,k);y[i]=new b(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,k);y[i]=new b(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,k);y[i]=new b(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function N(t,i,o,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,d,c)&&(o=null),c||d===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?t.setAttributeNS(c,i,o):t.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),O=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),G=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),D=Symbol.iterator;function he(t){return t===null||typeof t!="object"?null:(t=D&&t[D]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Object.assign,I;function ne(t){if(I===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ae=!1;function Ce(t,i){if(!t||Ae)return"";Ae=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var c=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){c=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){c=ee}t()}}catch(ee){if(ee&&c&&typeof ee.stack=="string"){for(var d=ee.stack.split(`
`),h=c.stack.split(`
`),w=d.length-1,L=h.length-1;1<=w&&0<=L&&d[w]!==h[L];)L--;for(;1<=w&&0<=L;w--,L--)if(d[w]!==h[L]){if(w!==1||L!==1)do if(w--,L--,0>L||d[w]!==h[L]){var B=`
`+d[w].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=w&&0<=L);break}}}finally{Ae=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ne(t):""}function Ue(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=Ce(t.type,!1),t;case 11:return t=Ce(t.type.render,!1),t;case 1:return t=Ce(t.type,!0),t;default:return""}}function Q(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case z:return"Fragment";case O:return"Portal";case R:return"Profiler";case V:return"StrictMode";case le:return"Suspense";case ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case G:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case Z:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case de:return i=t.displayName||null,i!==null?i:Q(t.type)||"Memo";case te:i=t._payload,t=t._init;try{return Q(t(i))}catch{}}return null}function ie(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Q(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Re(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function De(t){var i=Re(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){c=""+w,h.call(this,w)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ht(t){t._valueTracker||(t._valueTracker=De(t))}function Bt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return t&&(c=Re(t)?t.checked?"true":"false":t.value),t=c,t!==o?(i.setValue(t),!0):!1}function F(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pt(t,i){var o=i.checked;return ce({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function lt(t,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=ve(i.value!=null?i.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function tt(t,i){i=i.checked,i!=null&&N(t,"checked",i,!1)}function Ve(t,i){tt(t,i);var o=ve(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ze(t,i.type,o):i.hasOwnProperty("defaultValue")&&ze(t,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Et(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ze(t,i,o){(i!=="number"||F(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var ct=Array.isArray;function Ut(t,i,o,c){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&c&&(t[o].defaultSelected=!0)}else{for(o=""+ve(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function nt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ce({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function S(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(ct(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:ve(o)}}function E(t,i){var o=ve(i.value),c=ve(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function W(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function J(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?J(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oe,Ye=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,c,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(oe=oe||document.createElement("div"),oe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=oe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function xe(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qe=["Webkit","ms","Moz","O"];Object.keys(He).forEach(function(t){Qe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),He[i]=He[t]})});function we(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||He.hasOwnProperty(t)&&He[t]?(""+i).trim():i+"px"}function Ie(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=we(o,i[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,d):t[o]=d}}var ot=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(t,i){if(i){if(ot[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Pe(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pt=null;function X(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Me=null,be=null,Fe=null;function Se(t){if(t=Mo(t)){if(typeof Me!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ea(i),Me(t.stateNode,t.type,i))}}function me(t){be?Fe?Fe.push(t):Fe=[t]:be=t}function qe(){if(be){var t=be,i=Fe;if(Fe=be=null,Se(t),i)for(t=0;t<i.length;t++)Se(i[t])}}function ft(t,i){return t(i)}function Lt(){}var wt=!1;function Yn(t,i,o){if(wt)return t(i,o);wt=!0;try{return ft(t,i,o)}finally{wt=!1,(be!==null||Fe!==null)&&(Lt(),qe())}}function pn(t,i){var o=t.stateNode;if(o===null)return null;var c=Ea(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ss=!1;if(f)try{var zn={};Object.defineProperty(zn,"passive",{get:function(){ss=!0}}),window.addEventListener("test",zn,zn),window.removeEventListener("test",zn,zn)}catch{ss=!1}function ro(t,i,o,c,d,h,w,L,B){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(o,ee)}catch(_e){this.onError(_e)}}var $i=!1,Pr=null,Ti=!1,os=null,as={onError:function(t){$i=!0,Pr=t}};function na(t,i,o,c,d,h,w,L,B){$i=!1,Pr=null,ro.apply(as,arguments)}function ia(t,i,o,c,d,h,w,L,B){if(na.apply(this,arguments),$i){if($i){var ee=Pr;$i=!1,Pr=null}else throw Error(n(198));Ti||(Ti=!0,os=ee)}}function bi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function ra(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function sa(t){if(bi(t)!==t)throw Error(n(188))}function Ql(t){var i=t.alternate;if(!i){if(i=bi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,c=i;;){var d=o.return;if(d===null)break;var h=d.alternate;if(h===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===o)return sa(d),t;if(h===c)return sa(d),i;h=h.sibling}throw Error(n(188))}if(o.return!==c.return)o=d,c=h;else{for(var w=!1,L=d.child;L;){if(L===o){w=!0,o=d,c=h;break}if(L===c){w=!0,c=d,o=h;break}L=L.sibling}if(!w){for(L=h.child;L;){if(L===o){w=!0,o=h,c=d;break}if(L===c){w=!0,c=h,o=d;break}L=L.sibling}if(!w)throw Error(n(189))}}if(o.alternate!==c)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function oa(t){return t=Ql(t),t!==null?aa(t):null}function aa(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=aa(t);if(i!==null)return i;t=t.sibling}return null}var A=e.unstable_scheduleCallback,q=e.unstable_cancelCallback,se=e.unstable_shouldYield,ae=e.unstable_requestPaint,Y=e.unstable_now,Ee=e.unstable_getCurrentPriorityLevel,Le=e.unstable_ImmediatePriority,Ge=e.unstable_UserBlockingPriority,ke=e.unstable_NormalPriority,st=e.unstable_LowPriority,at=e.unstable_IdlePriority,Je=null,ut=null;function Dt(t){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Je,t,void 0,(t.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:et,Ot=Math.log,Nt=Math.LN2;function et(t){return t>>>=0,t===0?32:31-(Ot(t)/Nt|0)|0}var Ft=64,yt=4194304;function en(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ri(t,i){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,h=t.pingedLanes,w=o&268435455;if(w!==0){var L=w&~d;L!==0?c=en(L):(h&=w,h!==0&&(c=en(h)))}else w=o&~d,w!==0?c=en(w):h!==0&&(c=en(h));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)o=31-Tt(i),d=1<<o,c|=t[o],i&=~d;return c}function En(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dr(t,i){for(var o=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,h=t.pendingLanes;0<h;){var w=31-Tt(h),L=1<<w,B=d[w];B===-1?((L&o)===0||(L&c)!==0)&&(d[w]=En(L,i)):B<=i&&(t.expiredLanes|=L),h&=~L}}function zt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wn(){var t=Ft;return Ft<<=1,(Ft&4194240)===0&&(Ft=64),t}function mn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function $t(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Tt(i),t[i]=o}function gn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-Tt(o),h=1<<d;i[d]=0,c[d]=-1,t[d]=-1,o&=~h}}function Lr(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var c=31-Tt(o),d=1<<c;d&i|t[c]&i&&(t[c]|=i),o&=~d}}var St=0;function Sf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Mf,Jl,Ef,wf,Tf,ec=!1,la=[],Ki=null,Zi=null,Qi=null,so=new Map,oo=new Map,Ji=[],Zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bf(t,i){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":so.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(i.pointerId)}}function ao(t,i,o,c,d,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:h,targetContainers:[d]},i!==null&&(i=Mo(i),i!==null&&Jl(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Qg(t,i,o,c,d){switch(i){case"focusin":return Ki=ao(Ki,t,i,o,c,d),!0;case"dragenter":return Zi=ao(Zi,t,i,o,c,d),!0;case"mouseover":return Qi=ao(Qi,t,i,o,c,d),!0;case"pointerover":var h=d.pointerId;return so.set(h,ao(so.get(h)||null,t,i,o,c,d)),!0;case"gotpointercapture":return h=d.pointerId,oo.set(h,ao(oo.get(h)||null,t,i,o,c,d)),!0}return!1}function Af(t){var i=Nr(t.target);if(i!==null){var o=bi(i);if(o!==null){if(i=o.tag,i===13){if(i=ra(o),i!==null){t.blockedOn=i,Tf(t.priority,function(){Ef(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ca(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=nc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);pt=c,o.target.dispatchEvent(c),pt=null}else return i=Mo(o),i!==null&&Jl(i),t.blockedOn=o,!1;i.shift()}return!0}function Cf(t,i,o){ca(t)&&o.delete(i)}function Jg(){ec=!1,Ki!==null&&ca(Ki)&&(Ki=null),Zi!==null&&ca(Zi)&&(Zi=null),Qi!==null&&ca(Qi)&&(Qi=null),so.forEach(Cf),oo.forEach(Cf)}function lo(t,i){t.blockedOn===i&&(t.blockedOn=null,ec||(ec=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Jg)))}function co(t){function i(d){return lo(d,t)}if(0<la.length){lo(la[0],t);for(var o=1;o<la.length;o++){var c=la[o];c.blockedOn===t&&(c.blockedOn=null)}}for(Ki!==null&&lo(Ki,t),Zi!==null&&lo(Zi,t),Qi!==null&&lo(Qi,t),so.forEach(i),oo.forEach(i),o=0;o<Ji.length;o++)c=Ji[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<Ji.length&&(o=Ji[0],o.blockedOn===null);)Af(o),o.blockedOn===null&&Ji.shift()}var ls=P.ReactCurrentBatchConfig,ua=!0;function ev(t,i,o,c){var d=St,h=ls.transition;ls.transition=null;try{St=1,tc(t,i,o,c)}finally{St=d,ls.transition=h}}function tv(t,i,o,c){var d=St,h=ls.transition;ls.transition=null;try{St=4,tc(t,i,o,c)}finally{St=d,ls.transition=h}}function tc(t,i,o,c){if(ua){var d=nc(t,i,o,c);if(d===null)xc(t,i,c,da,o),bf(t,c);else if(Qg(d,t,i,o,c))c.stopPropagation();else if(bf(t,c),i&4&&-1<Zg.indexOf(t)){for(;d!==null;){var h=Mo(d);if(h!==null&&Mf(h),h=nc(t,i,o,c),h===null&&xc(t,i,c,da,o),h===d)break;d=h}d!==null&&c.stopPropagation()}else xc(t,i,c,null,o)}}var da=null;function nc(t,i,o,c){if(da=null,t=X(c),t=Nr(t),t!==null)if(i=bi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=ra(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return da=t,null}function Rf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ee()){case Le:return 1;case Ge:return 4;case ke:case st:return 16;case at:return 536870912;default:return 16}default:return 16}}var er=null,ic=null,fa=null;function Pf(){if(fa)return fa;var t,i=ic,o=i.length,c,d="value"in er?er.value:er.textContent,h=d.length;for(t=0;t<o&&i[t]===d[t];t++);var w=o-t;for(c=1;c<=w&&i[o-c]===d[h-c];c++);return fa=d.slice(t,1<c?1-c:void 0)}function ha(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function pa(){return!0}function Df(){return!1}function Bn(t){function i(o,c,d,h,w){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=h,this.target=w,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?pa:Df,this.isPropagationStopped=Df,this}return ce(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=pa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=pa)},persist:function(){},isPersistent:pa}),i}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=Bn(cs),uo=ce({},cs,{view:0,detail:0}),nv=Bn(uo),sc,oc,fo,ma=ce({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(sc=t.screenX-fo.screenX,oc=t.screenY-fo.screenY):oc=sc=0,fo=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),Lf=Bn(ma),iv=ce({},ma,{dataTransfer:0}),rv=Bn(iv),sv=ce({},uo,{relatedTarget:0}),ac=Bn(sv),ov=ce({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),av=Bn(ov),lv=ce({},cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cv=Bn(lv),uv=ce({},cs,{data:0}),Nf=Bn(uv),dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=hv[t])?!!i[t]:!1}function lc(){return pv}var mv=ce({},uo,{key:function(t){if(t.key){var i=dv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ha(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(t){return t.type==="keypress"?ha(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ha(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gv=Bn(mv),vv=ce({},ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=Bn(vv),_v=ce({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),xv=Bn(_v),yv=ce({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sv=Bn(yv),Mv=ce({},ma,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ev=Bn(Mv),wv=[9,13,27,32],cc=f&&"CompositionEvent"in window,ho=null;f&&"documentMode"in document&&(ho=document.documentMode);var Tv=f&&"TextEvent"in window&&!ho,Uf=f&&(!cc||ho&&8<ho&&11>=ho),Ff=" ",kf=!1;function Of(t,i){switch(t){case"keyup":return wv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function bv(t,i){switch(t){case"compositionend":return zf(i);case"keypress":return i.which!==32?null:(kf=!0,Ff);case"textInput":return t=i.data,t===Ff&&kf?null:t;default:return null}}function Av(t,i){if(us)return t==="compositionend"||!cc&&Of(t,i)?(t=Pf(),fa=ic=er=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Uf&&i.locale!=="ko"?null:i.data;default:return null}}var Cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Cv[t.type]:i==="textarea"}function Vf(t,i,o,c){me(c),i=ya(i,"onChange"),0<i.length&&(o=new rc("onChange","change",null,o,c),t.push({event:o,listeners:i}))}var po=null,mo=null;function Rv(t){sh(t,0)}function ga(t){var i=ms(t);if(Bt(i))return t}function Pv(t,i){if(t==="change")return i}var Hf=!1;if(f){var uc;if(f){var dc="oninput"in document;if(!dc){var Gf=document.createElement("div");Gf.setAttribute("oninput","return;"),dc=typeof Gf.oninput=="function"}uc=dc}else uc=!1;Hf=uc&&(!document.documentMode||9<document.documentMode)}function Wf(){po&&(po.detachEvent("onpropertychange",Xf),mo=po=null)}function Xf(t){if(t.propertyName==="value"&&ga(mo)){var i=[];Vf(i,mo,t,X(t)),Yn(Rv,i)}}function Dv(t,i,o){t==="focusin"?(Wf(),po=i,mo=o,po.attachEvent("onpropertychange",Xf)):t==="focusout"&&Wf()}function Lv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ga(mo)}function Nv(t,i){if(t==="click")return ga(i)}function Iv(t,i){if(t==="input"||t==="change")return ga(i)}function Uv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var si=typeof Object.is=="function"?Object.is:Uv;function go(t,i){if(si(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!m.call(i,d)||!si(t[d],i[d]))return!1}return!0}function jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yf(t,i){var o=jf(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=i&&c>=i)return{node:o,offset:i-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=jf(o)}}function qf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?qf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function $f(){for(var t=window,i=F();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=F(t.document)}return i}function fc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Fv(t){var i=$f(),o=t.focusedElem,c=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&qf(o.ownerDocument.documentElement,o)){if(c!==null&&fc(o)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,h=Math.min(c.start,d);c=c.end===void 0?h:Math.min(c.end,d),!t.extend&&h>c&&(d=c,c=h,h=d),d=Yf(o,h);var w=Yf(o,c);d&&w&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),h>c?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kv=f&&"documentMode"in document&&11>=document.documentMode,ds=null,hc=null,vo=null,pc=!1;function Kf(t,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;pc||ds==null||ds!==F(c)||(c=ds,"selectionStart"in c&&fc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),vo&&go(vo,c)||(vo=c,c=ya(hc,"onSelect"),0<c.length&&(i=new rc("onSelect","select",null,i,o),t.push({event:i,listeners:c}),i.target=ds)))}function va(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var fs={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionend:va("Transition","TransitionEnd")},mc={},Zf={};f&&(Zf=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function _a(t){if(mc[t])return mc[t];if(!fs[t])return t;var i=fs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Zf)return mc[t]=i[o];return t}var Qf=_a("animationend"),Jf=_a("animationiteration"),eh=_a("animationstart"),th=_a("transitionend"),nh=new Map,ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,i){nh.set(t,i),l(i,[t])}for(var gc=0;gc<ih.length;gc++){var vc=ih[gc],Ov=vc.toLowerCase(),zv=vc[0].toUpperCase()+vc.slice(1);tr(Ov,"on"+zv)}tr(Qf,"onAnimationEnd"),tr(Jf,"onAnimationIteration"),tr(eh,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(th,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function rh(t,i,o){var c=t.type||"unknown-event";t.currentTarget=o,ia(c,i,void 0,t),t.currentTarget=null}function sh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],d=c.event;c=c.listeners;e:{var h=void 0;if(i)for(var w=c.length-1;0<=w;w--){var L=c[w],B=L.instance,ee=L.currentTarget;if(L=L.listener,B!==h&&d.isPropagationStopped())break e;rh(d,L,ee),h=B}else for(w=0;w<c.length;w++){if(L=c[w],B=L.instance,ee=L.currentTarget,L=L.listener,B!==h&&d.isPropagationStopped())break e;rh(d,L,ee),h=B}}}if(Ti)throw t=os,Ti=!1,os=null,t}function Ht(t,i){var o=i[Tc];o===void 0&&(o=i[Tc]=new Set);var c=t+"__bubble";o.has(c)||(oh(i,t,2,!1),o.add(c))}function _c(t,i,o){var c=0;i&&(c|=4),oh(o,t,c,i)}var xa="_reactListening"+Math.random().toString(36).slice(2);function xo(t){if(!t[xa]){t[xa]=!0,r.forEach(function(o){o!=="selectionchange"&&(Bv.has(o)||_c(o,!1,t),_c(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[xa]||(i[xa]=!0,_c("selectionchange",!1,i))}}function oh(t,i,o,c){switch(Rf(i)){case 1:var d=ev;break;case 4:d=tv;break;default:d=tc}o=d.bind(null,i,o,t),d=void 0,!ss||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function xc(t,i,o,c,d){var h=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var L=c.stateNode.containerInfo;if(L===d||L.nodeType===8&&L.parentNode===d)break;if(w===4)for(w=c.return;w!==null;){var B=w.tag;if((B===3||B===4)&&(B=w.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;w=w.return}for(;L!==null;){if(w=Nr(L),w===null)return;if(B=w.tag,B===5||B===6){c=h=w;continue e}L=L.parentNode}}c=c.return}Yn(function(){var ee=h,_e=X(o),ye=[];e:{var ge=nh.get(t);if(ge!==void 0){var Oe=rc,We=t;switch(t){case"keypress":if(ha(o)===0)break e;case"keydown":case"keyup":Oe=gv;break;case"focusin":We="focus",Oe=ac;break;case"focusout":We="blur",Oe=ac;break;case"beforeblur":case"afterblur":Oe=ac;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=xv;break;case Qf:case Jf:case eh:Oe=av;break;case th:Oe=Sv;break;case"scroll":Oe=nv;break;case"wheel":Oe=Ev;break;case"copy":case"cut":case"paste":Oe=cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=If}var $e=(i&4)!==0,Kt=!$e&&t==="scroll",$=$e?ge!==null?ge+"Capture":null:ge;$e=[];for(var j=ee,K;j!==null;){K=j;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,$!==null&&(Te=pn(j,$),Te!=null&&$e.push(yo(j,Te,K)))),Kt)break;j=j.return}0<$e.length&&(ge=new Oe(ge,We,null,o,_e),ye.push({event:ge,listeners:$e}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Oe=t==="mouseout"||t==="pointerout",ge&&o!==pt&&(We=o.relatedTarget||o.fromElement)&&(Nr(We)||We[Ai]))break e;if((Oe||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Oe?(We=o.relatedTarget||o.toElement,Oe=ee,We=We?Nr(We):null,We!==null&&(Kt=bi(We),We!==Kt||We.tag!==5&&We.tag!==6)&&(We=null)):(Oe=null,We=ee),Oe!==We)){if($e=Lf,Te="onMouseLeave",$="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&($e=If,Te="onPointerLeave",$="onPointerEnter",j="pointer"),Kt=Oe==null?ge:ms(Oe),K=We==null?ge:ms(We),ge=new $e(Te,j+"leave",Oe,o,_e),ge.target=Kt,ge.relatedTarget=K,Te=null,Nr(_e)===ee&&($e=new $e($,j+"enter",We,o,_e),$e.target=K,$e.relatedTarget=Kt,Te=$e),Kt=Te,Oe&&We)t:{for($e=Oe,$=We,j=0,K=$e;K;K=hs(K))j++;for(K=0,Te=$;Te;Te=hs(Te))K++;for(;0<j-K;)$e=hs($e),j--;for(;0<K-j;)$=hs($),K--;for(;j--;){if($e===$||$!==null&&$e===$.alternate)break t;$e=hs($e),$=hs($)}$e=null}else $e=null;Oe!==null&&ah(ye,ge,Oe,$e,!1),We!==null&&Kt!==null&&ah(ye,Kt,We,$e,!0)}}e:{if(ge=ee?ms(ee):window,Oe=ge.nodeName&&ge.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ge.type==="file")var Ze=Pv;else if(Bf(ge))if(Hf)Ze=Iv;else{Ze=Lv;var it=Dv}else(Oe=ge.nodeName)&&Oe.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ze=Nv);if(Ze&&(Ze=Ze(t,ee))){Vf(ye,Ze,o,_e);break e}it&&it(t,ge,ee),t==="focusout"&&(it=ge._wrapperState)&&it.controlled&&ge.type==="number"&&ze(ge,"number",ge.value)}switch(it=ee?ms(ee):window,t){case"focusin":(Bf(it)||it.contentEditable==="true")&&(ds=it,hc=ee,vo=null);break;case"focusout":vo=hc=ds=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,Kf(ye,o,_e);break;case"selectionchange":if(kv)break;case"keydown":case"keyup":Kf(ye,o,_e)}var rt;if(cc)e:{switch(t){case"compositionstart":var dt="onCompositionStart";break e;case"compositionend":dt="onCompositionEnd";break e;case"compositionupdate":dt="onCompositionUpdate";break e}dt=void 0}else us?Of(t,o)&&(dt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(dt="onCompositionStart");dt&&(Uf&&o.locale!=="ko"&&(us||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&us&&(rt=Pf()):(er=_e,ic="value"in er?er.value:er.textContent,us=!0)),it=ya(ee,dt),0<it.length&&(dt=new Nf(dt,t,null,o,_e),ye.push({event:dt,listeners:it}),rt?dt.data=rt:(rt=zf(o),rt!==null&&(dt.data=rt)))),(rt=Tv?bv(t,o):Av(t,o))&&(ee=ya(ee,"onBeforeInput"),0<ee.length&&(_e=new Nf("onBeforeInput","beforeinput",null,o,_e),ye.push({event:_e,listeners:ee}),_e.data=rt))}sh(ye,i)})}function yo(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ya(t,i){for(var o=i+"Capture",c=[];t!==null;){var d=t,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=pn(t,o),h!=null&&c.unshift(yo(t,h,d)),h=pn(t,i),h!=null&&c.push(yo(t,h,d))),t=t.return}return c}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ah(t,i,o,c,d){for(var h=i._reactName,w=[];o!==null&&o!==c;){var L=o,B=L.alternate,ee=L.stateNode;if(B!==null&&B===c)break;L.tag===5&&ee!==null&&(L=ee,d?(B=pn(o,h),B!=null&&w.unshift(yo(o,B,L))):d||(B=pn(o,h),B!=null&&w.push(yo(o,B,L)))),o=o.return}w.length!==0&&t.push({event:i,listeners:w})}var Vv=/\r\n?/g,Hv=/\u0000|\uFFFD/g;function lh(t){return(typeof t=="string"?t:""+t).replace(Vv,`
`).replace(Hv,"")}function Sa(t,i,o){if(i=lh(i),lh(t)!==i&&o)throw Error(n(425))}function Ma(){}var yc=null,Sc=null;function Mc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,Gv=typeof clearTimeout=="function"?clearTimeout:void 0,ch=typeof Promise=="function"?Promise:void 0,Wv=typeof queueMicrotask=="function"?queueMicrotask:typeof ch<"u"?function(t){return ch.resolve(null).then(t).catch(Xv)}:Ec;function Xv(t){setTimeout(function(){throw t})}function wc(t,i){var o=i,c=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){t.removeChild(d),co(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);co(i)}function nr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function uh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ps=Math.random().toString(36).slice(2),_i="__reactFiber$"+ps,So="__reactProps$"+ps,Ai="__reactContainer$"+ps,Tc="__reactEvents$"+ps,jv="__reactListeners$"+ps,Yv="__reactHandles$"+ps;function Nr(t){var i=t[_i];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Ai]||o[_i]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=uh(t);t!==null;){if(o=t[_i])return o;t=uh(t)}return i}t=o,o=t.parentNode}return null}function Mo(t){return t=t[_i]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ea(t){return t[So]||null}var bc=[],gs=-1;function ir(t){return{current:t}}function Gt(t){0>gs||(t.current=bc[gs],bc[gs]=null,gs--)}function Vt(t,i){gs++,bc[gs]=t.current,t.current=i}var rr={},vn=ir(rr),Rn=ir(!1),Ir=rr;function vs(t,i){var o=t.type.contextTypes;if(!o)return rr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in o)d[h]=i[h];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Pn(t){return t=t.childContextTypes,t!=null}function wa(){Gt(Rn),Gt(vn)}function dh(t,i,o){if(vn.current!==rr)throw Error(n(168));Vt(vn,i),Vt(Rn,o)}function fh(t,i,o){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,ie(t)||"Unknown",d));return ce({},o,c)}function Ta(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Ir=vn.current,Vt(vn,t),Vt(Rn,Rn.current),!0}function hh(t,i,o){var c=t.stateNode;if(!c)throw Error(n(169));o?(t=fh(t,i,Ir),c.__reactInternalMemoizedMergedChildContext=t,Gt(Rn),Gt(vn),Vt(vn,t)):Gt(Rn),Vt(Rn,o)}var Ci=null,ba=!1,Ac=!1;function ph(t){Ci===null?Ci=[t]:Ci.push(t)}function qv(t){ba=!0,ph(t)}function sr(){if(!Ac&&Ci!==null){Ac=!0;var t=0,i=St;try{var o=Ci;for(St=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}Ci=null,ba=!1}catch(d){throw Ci!==null&&(Ci=Ci.slice(t+1)),A(Le,sr),d}finally{St=i,Ac=!1}}return null}var _s=[],xs=0,Aa=null,Ca=0,qn=[],$n=0,Ur=null,Ri=1,Pi="";function Fr(t,i){_s[xs++]=Ca,_s[xs++]=Aa,Aa=t,Ca=i}function mh(t,i,o){qn[$n++]=Ri,qn[$n++]=Pi,qn[$n++]=Ur,Ur=t;var c=Ri;t=Pi;var d=32-Tt(c)-1;c&=~(1<<d),o+=1;var h=32-Tt(i)+d;if(30<h){var w=d-d%5;h=(c&(1<<w)-1).toString(32),c>>=w,d-=w,Ri=1<<32-Tt(i)+d|o<<d|c,Pi=h+t}else Ri=1<<h|o<<d|c,Pi=t}function Cc(t){t.return!==null&&(Fr(t,1),mh(t,1,0))}function Rc(t){for(;t===Aa;)Aa=_s[--xs],_s[xs]=null,Ca=_s[--xs],_s[xs]=null;for(;t===Ur;)Ur=qn[--$n],qn[$n]=null,Pi=qn[--$n],qn[$n]=null,Ri=qn[--$n],qn[$n]=null}var Vn=null,Hn=null,Wt=!1,oi=null;function gh(t,i){var o=Jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function vh(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Vn=t,Hn=nr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Vn=t,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ur!==null?{id:Ri,overflow:Pi}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Jn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Vn=t,Hn=null,!0):!1;default:return!1}}function Pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dc(t){if(Wt){var i=Hn;if(i){var o=i;if(!vh(t,i)){if(Pc(t))throw Error(n(418));i=nr(o.nextSibling);var c=Vn;i&&vh(t,i)?gh(c,o):(t.flags=t.flags&-4097|2,Wt=!1,Vn=t)}}else{if(Pc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Wt=!1,Vn=t}}}function _h(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vn=t}function Ra(t){if(t!==Vn)return!1;if(!Wt)return _h(t),Wt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Mc(t.type,t.memoizedProps)),i&&(i=Hn)){if(Pc(t))throw xh(),Error(n(418));for(;i;)gh(t,i),i=nr(i.nextSibling)}if(_h(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Hn=nr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Hn=null}}else Hn=Vn?nr(t.stateNode.nextSibling):null;return!0}function xh(){for(var t=Hn;t;)t=nr(t.nextSibling)}function ys(){Hn=Vn=null,Wt=!1}function Lc(t){oi===null?oi=[t]:oi.push(t)}var $v=P.ReactCurrentBatchConfig;function Eo(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var c=o.stateNode}if(!c)throw Error(n(147,t));var d=c,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(w){var L=d.refs;w===null?delete L[h]:L[h]=w},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Pa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function yh(t){var i=t._init;return i(t._payload)}function Sh(t){function i($,j){if(t){var K=$.deletions;K===null?($.deletions=[j],$.flags|=16):K.push(j)}}function o($,j){if(!t)return null;for(;j!==null;)i($,j),j=j.sibling;return null}function c($,j){for($=new Map;j!==null;)j.key!==null?$.set(j.key,j):$.set(j.index,j),j=j.sibling;return $}function d($,j){return $=hr($,j),$.index=0,$.sibling=null,$}function h($,j,K){return $.index=K,t?(K=$.alternate,K!==null?(K=K.index,K<j?($.flags|=2,j):K):($.flags|=2,j)):($.flags|=1048576,j)}function w($){return t&&$.alternate===null&&($.flags|=2),$}function L($,j,K,Te){return j===null||j.tag!==6?(j=Eu(K,$.mode,Te),j.return=$,j):(j=d(j,K),j.return=$,j)}function B($,j,K,Te){var Ze=K.type;return Ze===z?_e($,j,K.props.children,Te,K.key):j!==null&&(j.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===te&&yh(Ze)===j.type)?(Te=d(j,K.props),Te.ref=Eo($,j,K),Te.return=$,Te):(Te=el(K.type,K.key,K.props,null,$.mode,Te),Te.ref=Eo($,j,K),Te.return=$,Te)}function ee($,j,K,Te){return j===null||j.tag!==4||j.stateNode.containerInfo!==K.containerInfo||j.stateNode.implementation!==K.implementation?(j=wu(K,$.mode,Te),j.return=$,j):(j=d(j,K.children||[]),j.return=$,j)}function _e($,j,K,Te,Ze){return j===null||j.tag!==7?(j=Wr(K,$.mode,Te,Ze),j.return=$,j):(j=d(j,K),j.return=$,j)}function ye($,j,K){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Eu(""+j,$.mode,K),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case H:return K=el(j.type,j.key,j.props,null,$.mode,K),K.ref=Eo($,null,j),K.return=$,K;case O:return j=wu(j,$.mode,K),j.return=$,j;case te:var Te=j._init;return ye($,Te(j._payload),K)}if(ct(j)||he(j))return j=Wr(j,$.mode,K,null),j.return=$,j;Pa($,j)}return null}function ge($,j,K,Te){var Ze=j!==null?j.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ze!==null?null:L($,j,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case H:return K.key===Ze?B($,j,K,Te):null;case O:return K.key===Ze?ee($,j,K,Te):null;case te:return Ze=K._init,ge($,j,Ze(K._payload),Te)}if(ct(K)||he(K))return Ze!==null?null:_e($,j,K,Te,null);Pa($,K)}return null}function Oe($,j,K,Te,Ze){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return $=$.get(K)||null,L(j,$,""+Te,Ze);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case H:return $=$.get(Te.key===null?K:Te.key)||null,B(j,$,Te,Ze);case O:return $=$.get(Te.key===null?K:Te.key)||null,ee(j,$,Te,Ze);case te:var it=Te._init;return Oe($,j,K,it(Te._payload),Ze)}if(ct(Te)||he(Te))return $=$.get(K)||null,_e(j,$,Te,Ze,null);Pa(j,Te)}return null}function We($,j,K,Te){for(var Ze=null,it=null,rt=j,dt=j=0,cn=null;rt!==null&&dt<K.length;dt++){rt.index>dt?(cn=rt,rt=null):cn=rt.sibling;var At=ge($,rt,K[dt],Te);if(At===null){rt===null&&(rt=cn);break}t&&rt&&At.alternate===null&&i($,rt),j=h(At,j,dt),it===null?Ze=At:it.sibling=At,it=At,rt=cn}if(dt===K.length)return o($,rt),Wt&&Fr($,dt),Ze;if(rt===null){for(;dt<K.length;dt++)rt=ye($,K[dt],Te),rt!==null&&(j=h(rt,j,dt),it===null?Ze=rt:it.sibling=rt,it=rt);return Wt&&Fr($,dt),Ze}for(rt=c($,rt);dt<K.length;dt++)cn=Oe(rt,$,dt,K[dt],Te),cn!==null&&(t&&cn.alternate!==null&&rt.delete(cn.key===null?dt:cn.key),j=h(cn,j,dt),it===null?Ze=cn:it.sibling=cn,it=cn);return t&&rt.forEach(function(pr){return i($,pr)}),Wt&&Fr($,dt),Ze}function $e($,j,K,Te){var Ze=he(K);if(typeof Ze!="function")throw Error(n(150));if(K=Ze.call(K),K==null)throw Error(n(151));for(var it=Ze=null,rt=j,dt=j=0,cn=null,At=K.next();rt!==null&&!At.done;dt++,At=K.next()){rt.index>dt?(cn=rt,rt=null):cn=rt.sibling;var pr=ge($,rt,At.value,Te);if(pr===null){rt===null&&(rt=cn);break}t&&rt&&pr.alternate===null&&i($,rt),j=h(pr,j,dt),it===null?Ze=pr:it.sibling=pr,it=pr,rt=cn}if(At.done)return o($,rt),Wt&&Fr($,dt),Ze;if(rt===null){for(;!At.done;dt++,At=K.next())At=ye($,At.value,Te),At!==null&&(j=h(At,j,dt),it===null?Ze=At:it.sibling=At,it=At);return Wt&&Fr($,dt),Ze}for(rt=c($,rt);!At.done;dt++,At=K.next())At=Oe(rt,$,dt,At.value,Te),At!==null&&(t&&At.alternate!==null&&rt.delete(At.key===null?dt:At.key),j=h(At,j,dt),it===null?Ze=At:it.sibling=At,it=At);return t&&rt.forEach(function(C0){return i($,C0)}),Wt&&Fr($,dt),Ze}function Kt($,j,K,Te){if(typeof K=="object"&&K!==null&&K.type===z&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case H:e:{for(var Ze=K.key,it=j;it!==null;){if(it.key===Ze){if(Ze=K.type,Ze===z){if(it.tag===7){o($,it.sibling),j=d(it,K.props.children),j.return=$,$=j;break e}}else if(it.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===te&&yh(Ze)===it.type){o($,it.sibling),j=d(it,K.props),j.ref=Eo($,it,K),j.return=$,$=j;break e}o($,it);break}else i($,it);it=it.sibling}K.type===z?(j=Wr(K.props.children,$.mode,Te,K.key),j.return=$,$=j):(Te=el(K.type,K.key,K.props,null,$.mode,Te),Te.ref=Eo($,j,K),Te.return=$,$=Te)}return w($);case O:e:{for(it=K.key;j!==null;){if(j.key===it)if(j.tag===4&&j.stateNode.containerInfo===K.containerInfo&&j.stateNode.implementation===K.implementation){o($,j.sibling),j=d(j,K.children||[]),j.return=$,$=j;break e}else{o($,j);break}else i($,j);j=j.sibling}j=wu(K,$.mode,Te),j.return=$,$=j}return w($);case te:return it=K._init,Kt($,j,it(K._payload),Te)}if(ct(K))return We($,j,K,Te);if(he(K))return $e($,j,K,Te);Pa($,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,j!==null&&j.tag===6?(o($,j.sibling),j=d(j,K),j.return=$,$=j):(o($,j),j=Eu(K,$.mode,Te),j.return=$,$=j),w($)):o($,j)}return Kt}var Ss=Sh(!0),Mh=Sh(!1),Da=ir(null),La=null,Ms=null,Nc=null;function Ic(){Nc=Ms=La=null}function Uc(t){var i=Da.current;Gt(Da),t._currentValue=i}function Fc(t,i,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===o)break;t=t.return}}function Es(t,i){La=t,Nc=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Dn=!0),t.firstContext=null)}function Kn(t){var i=t._currentValue;if(Nc!==t)if(t={context:t,memoizedValue:i,next:null},Ms===null){if(La===null)throw Error(n(308));Ms=t,La.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return i}var kr=null;function kc(t){kr===null?kr=[t]:kr.push(t)}function Eh(t,i,o,c){var d=i.interleaved;return d===null?(o.next=o,kc(i)):(o.next=d.next,d.next=o),i.interleaved=o,Di(t,c)}function Di(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var or=!1;function Oc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ar(t,i,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(bt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Di(t,o)}return d=c.interleaved,d===null?(i.next=i,kc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Di(t,o)}function Na(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Lr(t,o)}}function Th(t,i){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?d=h=w:h=h.next=w,o=o.next}while(o!==null);h===null?d=h=i:h=h.next=i}else d=h=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ia(t,i,o,c){var d=t.updateQueue;or=!1;var h=d.firstBaseUpdate,w=d.lastBaseUpdate,L=d.shared.pending;if(L!==null){d.shared.pending=null;var B=L,ee=B.next;B.next=null,w===null?h=ee:w.next=ee,w=B;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,L=_e.lastBaseUpdate,L!==w&&(L===null?_e.firstBaseUpdate=ee:L.next=ee,_e.lastBaseUpdate=B))}if(h!==null){var ye=d.baseState;w=0,_e=ee=B=null,L=h;do{var ge=L.lane,Oe=L.eventTime;if((c&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Oe,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var We=t,$e=L;switch(ge=i,Oe=o,$e.tag){case 1:if(We=$e.payload,typeof We=="function"){ye=We.call(Oe,ye,ge);break e}ye=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=$e.payload,ge=typeof We=="function"?We.call(Oe,ye,ge):We,ge==null)break e;ye=ce({},ye,ge);break e;case 2:or=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,ge=d.effects,ge===null?d.effects=[L]:ge.push(L))}else Oe={eventTime:Oe,lane:ge,tag:L.tag,payload:L.payload,callback:L.callback,next:null},_e===null?(ee=_e=Oe,B=ye):_e=_e.next=Oe,w|=ge;if(L=L.next,L===null){if(L=d.shared.pending,L===null)break;ge=L,L=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(_e===null&&(B=ye),d.baseState=B,d.firstBaseUpdate=ee,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);Br|=w,t.lanes=w,t.memoizedState=ye}}function bh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var wo={},xi=ir(wo),To=ir(wo),bo=ir(wo);function Or(t){if(t===wo)throw Error(n(174));return t}function zc(t,i){switch(Vt(bo,i),Vt(To,t),Vt(xi,wo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=pe(i,t)}Gt(xi),Vt(xi,i)}function ws(){Gt(xi),Gt(To),Gt(bo)}function Ah(t){Or(bo.current);var i=Or(xi.current),o=pe(i,t.type);i!==o&&(Vt(To,t),Vt(xi,o))}function Bc(t){To.current===t&&(Gt(xi),Gt(To))}var Xt=ir(0);function Ua(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Vc=[];function Hc(){for(var t=0;t<Vc.length;t++)Vc[t]._workInProgressVersionPrimary=null;Vc.length=0}var Fa=P.ReactCurrentDispatcher,Gc=P.ReactCurrentBatchConfig,zr=0,jt=null,tn=null,an=null,ka=!1,Ao=!1,Co=0,Kv=0;function _n(){throw Error(n(321))}function Wc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!si(t[o],i[o]))return!1;return!0}function Xc(t,i,o,c,d,h){if(zr=h,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Fa.current=t===null||t.memoizedState===null?e0:t0,t=o(c,d),Ao){h=0;do{if(Ao=!1,Co=0,25<=h)throw Error(n(301));h+=1,an=tn=null,i.updateQueue=null,Fa.current=n0,t=o(c,d)}while(Ao)}if(Fa.current=Ba,i=tn!==null&&tn.next!==null,zr=0,an=tn=jt=null,ka=!1,i)throw Error(n(300));return t}function jc(){var t=Co!==0;return Co=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?jt.memoizedState=an=t:an=an.next=t,an}function Zn(){if(tn===null){var t=jt.alternate;t=t!==null?t.memoizedState:null}else t=tn.next;var i=an===null?jt.memoizedState:an.next;if(i!==null)an=i,tn=t;else{if(t===null)throw Error(n(310));tn=t,t={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},an===null?jt.memoizedState=an=t:an=an.next=t}return an}function Ro(t,i){return typeof i=="function"?i(t):i}function Yc(t){var i=Zn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=tn,d=c.baseQueue,h=o.pending;if(h!==null){if(d!==null){var w=d.next;d.next=h.next,h.next=w}c.baseQueue=d=h,o.pending=null}if(d!==null){h=d.next,c=c.baseState;var L=w=null,B=null,ee=h;do{var _e=ee.lane;if((zr&_e)===_e)B!==null&&(B=B.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),c=ee.hasEagerState?ee.eagerState:t(c,ee.action);else{var ye={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};B===null?(L=B=ye,w=c):B=B.next=ye,jt.lanes|=_e,Br|=_e}ee=ee.next}while(ee!==null&&ee!==h);B===null?w=c:B.next=L,si(c,i.memoizedState)||(Dn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=B,o.lastRenderedState=c}if(t=o.interleaved,t!==null){d=t;do h=d.lane,jt.lanes|=h,Br|=h,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function qc(t){var i=Zn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=o.dispatch,d=o.pending,h=i.memoizedState;if(d!==null){o.pending=null;var w=d=d.next;do h=t(h,w.action),w=w.next;while(w!==d);si(h,i.memoizedState)||(Dn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,c]}function Ch(){}function Rh(t,i){var o=jt,c=Zn(),d=i(),h=!si(c.memoizedState,d);if(h&&(c.memoizedState=d,Dn=!0),c=c.queue,$c(Lh.bind(null,o,c,t),[t]),c.getSnapshot!==i||h||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,Po(9,Dh.bind(null,o,c,d,i),void 0,null),ln===null)throw Error(n(349));(zr&30)!==0||Ph(o,i,d)}return d}function Ph(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Dh(t,i,o,c){i.value=o,i.getSnapshot=c,Nh(i)&&Ih(t)}function Lh(t,i,o){return o(function(){Nh(i)&&Ih(t)})}function Nh(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!si(t,o)}catch{return!0}}function Ih(t){var i=Di(t,1);i!==null&&ui(i,t,1,-1)}function Uh(t){var i=yi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},i.queue=t,t=t.dispatch=Jv.bind(null,jt,t),[i.memoizedState,t]}function Po(t,i,o,c){return t={tag:t,create:i,destroy:o,deps:c,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,i.lastEffect=t)),t}function Fh(){return Zn().memoizedState}function Oa(t,i,o,c){var d=yi();jt.flags|=t,d.memoizedState=Po(1|i,o,void 0,c===void 0?null:c)}function za(t,i,o,c){var d=Zn();c=c===void 0?null:c;var h=void 0;if(tn!==null){var w=tn.memoizedState;if(h=w.destroy,c!==null&&Wc(c,w.deps)){d.memoizedState=Po(i,o,h,c);return}}jt.flags|=t,d.memoizedState=Po(1|i,o,h,c)}function kh(t,i){return Oa(8390656,8,t,i)}function $c(t,i){return za(2048,8,t,i)}function Oh(t,i){return za(4,2,t,i)}function zh(t,i){return za(4,4,t,i)}function Bh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Vh(t,i,o){return o=o!=null?o.concat([t]):null,za(4,4,Bh.bind(null,i,t),o)}function Kc(){}function Hh(t,i){var o=Zn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(o.memoizedState=[t,i],t)}function Gh(t,i){var o=Zn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(t=t(),o.memoizedState=[t,i],t)}function Wh(t,i,o){return(zr&21)===0?(t.baseState&&(t.baseState=!1,Dn=!0),t.memoizedState=o):(si(o,i)||(o=wn(),jt.lanes|=o,Br|=o,t.baseState=!0),i)}function Zv(t,i){var o=St;St=o!==0&&4>o?o:4,t(!0);var c=Gc.transition;Gc.transition={};try{t(!1),i()}finally{St=o,Gc.transition=c}}function Xh(){return Zn().memoizedState}function Qv(t,i,o){var c=dr(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},jh(t))Yh(i,o);else if(o=Eh(t,i,o,c),o!==null){var d=bn();ui(o,t,c,d),qh(o,i,c)}}function Jv(t,i,o){var c=dr(t),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(jh(t))Yh(i,d);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var w=i.lastRenderedState,L=h(w,o);if(d.hasEagerState=!0,d.eagerState=L,si(L,w)){var B=i.interleaved;B===null?(d.next=d,kc(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}o=Eh(t,i,d,c),o!==null&&(d=bn(),ui(o,t,c,d),qh(o,i,c))}}function jh(t){var i=t.alternate;return t===jt||i!==null&&i===jt}function Yh(t,i){Ao=ka=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function qh(t,i,o){if((o&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Lr(t,o)}}var Ba={readContext:Kn,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},e0={readContext:Kn,useCallback:function(t,i){return yi().memoizedState=[t,i===void 0?null:i],t},useContext:Kn,useEffect:kh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Oa(4194308,4,Bh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Oa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Oa(4,2,t,i)},useMemo:function(t,i){var o=yi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var c=yi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=Qv.bind(null,jt,t),[c.memoizedState,t]},useRef:function(t){var i=yi();return t={current:t},i.memoizedState=t},useState:Uh,useDebugValue:Kc,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=Uh(!1),i=t[0];return t=Zv.bind(null,t[1]),yi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var c=jt,d=yi();if(Wt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),ln===null)throw Error(n(349));(zr&30)!==0||Ph(c,i,o)}d.memoizedState=o;var h={value:o,getSnapshot:i};return d.queue=h,kh(Lh.bind(null,c,h,t),[t]),c.flags|=2048,Po(9,Dh.bind(null,c,h,o,i),void 0,null),o},useId:function(){var t=yi(),i=ln.identifierPrefix;if(Wt){var o=Pi,c=Ri;o=(c&~(1<<32-Tt(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Co++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Kv++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},t0={readContext:Kn,useCallback:Hh,useContext:Kn,useEffect:$c,useImperativeHandle:Vh,useInsertionEffect:Oh,useLayoutEffect:zh,useMemo:Gh,useReducer:Yc,useRef:Fh,useState:function(){return Yc(Ro)},useDebugValue:Kc,useDeferredValue:function(t){var i=Zn();return Wh(i,tn.memoizedState,t)},useTransition:function(){var t=Yc(Ro)[0],i=Zn().memoizedState;return[t,i]},useMutableSource:Ch,useSyncExternalStore:Rh,useId:Xh,unstable_isNewReconciler:!1},n0={readContext:Kn,useCallback:Hh,useContext:Kn,useEffect:$c,useImperativeHandle:Vh,useInsertionEffect:Oh,useLayoutEffect:zh,useMemo:Gh,useReducer:qc,useRef:Fh,useState:function(){return qc(Ro)},useDebugValue:Kc,useDeferredValue:function(t){var i=Zn();return tn===null?i.memoizedState=t:Wh(i,tn.memoizedState,t)},useTransition:function(){var t=qc(Ro)[0],i=Zn().memoizedState;return[t,i]},useMutableSource:Ch,useSyncExternalStore:Rh,useId:Xh,unstable_isNewReconciler:!1};function ai(t,i){if(t&&t.defaultProps){i=ce({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Zc(t,i,o,c){i=t.memoizedState,o=o(c,i),o=o==null?i:ce({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Va={isMounted:function(t){return(t=t._reactInternals)?bi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var c=bn(),d=dr(t),h=Li(c,d);h.payload=i,o!=null&&(h.callback=o),i=ar(t,h,d),i!==null&&(ui(i,t,d,c),Na(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var c=bn(),d=dr(t),h=Li(c,d);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=ar(t,h,d),i!==null&&(ui(i,t,d,c),Na(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=bn(),c=dr(t),d=Li(o,c);d.tag=2,i!=null&&(d.callback=i),i=ar(t,d,c),i!==null&&(ui(i,t,c,o),Na(i,t,c))}};function $h(t,i,o,c,d,h,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,h,w):i.prototype&&i.prototype.isPureReactComponent?!go(o,c)||!go(d,h):!0}function Kh(t,i,o){var c=!1,d=rr,h=i.contextType;return typeof h=="object"&&h!==null?h=Kn(h):(d=Pn(i)?Ir:vn.current,c=i.contextTypes,h=(c=c!=null)?vs(t,d):rr),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Va,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=h),i}function Zh(t,i,o,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==t&&Va.enqueueReplaceState(i,i.state,null)}function Qc(t,i,o,c){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},Oc(t);var h=i.contextType;typeof h=="object"&&h!==null?d.context=Kn(h):(h=Pn(i)?Ir:vn.current,d.context=vs(t,h)),d.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Zc(t,i,h,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Va.enqueueReplaceState(d,d.state,null),Ia(t,o,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,i){try{var o="",c=i;do o+=Ue(c),c=c.return;while(c);var d=o}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:d,digest:null}}function Jc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function eu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var i0=typeof WeakMap=="function"?WeakMap:Map;function Qh(t,i,o){o=Li(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){qa||(qa=!0,mu=c),eu(t,i)},o}function Jh(t,i,o){o=Li(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){eu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){eu(t,i),typeof c!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),o}function ep(t,i,o){var c=t.pingCache;if(c===null){c=t.pingCache=new i0;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),t=v0.bind(null,t,i,o),i.then(t,t))}function tp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function np(t,i,o,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Li(-1,1),i.tag=2,ar(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var r0=P.ReactCurrentOwner,Dn=!1;function Tn(t,i,o,c){i.child=t===null?Mh(i,null,o,c):Ss(i,t.child,o,c)}function ip(t,i,o,c,d){o=o.render;var h=i.ref;return Es(i,d),c=Xc(t,i,o,c,h,d),o=jc(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ni(t,i,d)):(Wt&&o&&Cc(i),i.flags|=1,Tn(t,i,c,d),i.child)}function rp(t,i,o,c,d){if(t===null){var h=o.type;return typeof h=="function"&&!Mu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,sp(t,i,h,c,d)):(t=el(o.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&d)===0){var w=h.memoizedProps;if(o=o.compare,o=o!==null?o:go,o(w,c)&&t.ref===i.ref)return Ni(t,i,d)}return i.flags|=1,t=hr(h,c),t.ref=i.ref,t.return=i,i.child=t}function sp(t,i,o,c,d){if(t!==null){var h=t.memoizedProps;if(go(h,c)&&t.ref===i.ref)if(Dn=!1,i.pendingProps=c=h,(t.lanes&d)!==0)(t.flags&131072)!==0&&(Dn=!0);else return i.lanes=t.lanes,Ni(t,i,d)}return tu(t,i,o,c,d)}function op(t,i,o){var c=i.pendingProps,d=c.children,h=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(As,Gn),Gn|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Vt(As,Gn),Gn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:o,Vt(As,Gn),Gn|=c}else h!==null?(c=h.baseLanes|o,i.memoizedState=null):c=o,Vt(As,Gn),Gn|=c;return Tn(t,i,d,o),i.child}function ap(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function tu(t,i,o,c,d){var h=Pn(o)?Ir:vn.current;return h=vs(i,h),Es(i,d),o=Xc(t,i,o,c,h,d),c=jc(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ni(t,i,d)):(Wt&&c&&Cc(i),i.flags|=1,Tn(t,i,o,d),i.child)}function lp(t,i,o,c,d){if(Pn(o)){var h=!0;Ta(i)}else h=!1;if(Es(i,d),i.stateNode===null)Ga(t,i),Kh(i,o,c),Qc(i,o,c,d),c=!0;else if(t===null){var w=i.stateNode,L=i.memoizedProps;w.props=L;var B=w.context,ee=o.contextType;typeof ee=="object"&&ee!==null?ee=Kn(ee):(ee=Pn(o)?Ir:vn.current,ee=vs(i,ee));var _e=o.getDerivedStateFromProps,ye=typeof _e=="function"||typeof w.getSnapshotBeforeUpdate=="function";ye||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(L!==c||B!==ee)&&Zh(i,w,c,ee),or=!1;var ge=i.memoizedState;w.state=ge,Ia(i,c,w,d),B=i.memoizedState,L!==c||ge!==B||Rn.current||or?(typeof _e=="function"&&(Zc(i,o,_e,c),B=i.memoizedState),(L=or||$h(i,o,L,c,ge,B,ee))?(ye||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),w.props=c,w.state=B,w.context=ee,c=L):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,wh(t,i),L=i.memoizedProps,ee=i.type===i.elementType?L:ai(i.type,L),w.props=ee,ye=i.pendingProps,ge=w.context,B=o.contextType,typeof B=="object"&&B!==null?B=Kn(B):(B=Pn(o)?Ir:vn.current,B=vs(i,B));var Oe=o.getDerivedStateFromProps;(_e=typeof Oe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(L!==ye||ge!==B)&&Zh(i,w,c,B),or=!1,ge=i.memoizedState,w.state=ge,Ia(i,c,w,d);var We=i.memoizedState;L!==ye||ge!==We||Rn.current||or?(typeof Oe=="function"&&(Zc(i,o,Oe,c),We=i.memoizedState),(ee=or||$h(i,o,ee,c,ge,We,B)||!1)?(_e||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,We,B),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,We,B)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=We),w.props=c,w.state=We,w.context=B,c=ee):(typeof w.componentDidUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),c=!1)}return nu(t,i,o,c,h,d)}function nu(t,i,o,c,d,h){ap(t,i);var w=(i.flags&128)!==0;if(!c&&!w)return d&&hh(i,o,!1),Ni(t,i,h);c=i.stateNode,r0.current=i;var L=w&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&w?(i.child=Ss(i,t.child,null,h),i.child=Ss(i,null,L,h)):Tn(t,i,L,h),i.memoizedState=c.state,d&&hh(i,o,!0),i.child}function cp(t){var i=t.stateNode;i.pendingContext?dh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&dh(t,i.context,!1),zc(t,i.containerInfo)}function up(t,i,o,c,d){return ys(),Lc(d),i.flags|=256,Tn(t,i,o,c),i.child}var iu={dehydrated:null,treeContext:null,retryLane:0};function ru(t){return{baseLanes:t,cachePool:null,transitions:null}}function dp(t,i,o){var c=i.pendingProps,d=Xt.current,h=!1,w=(i.flags&128)!==0,L;if((L=w)||(L=t!==null&&t.memoizedState===null?!1:(d&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Vt(Xt,d&1),t===null)return Dc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,t=c.fallback,h?(c=i.mode,h=i.child,w={mode:"hidden",children:w},(c&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=w):h=tl(w,c,0,null),t=Wr(t,c,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=ru(o),i.memoizedState=iu,t):su(i,w));if(d=t.memoizedState,d!==null&&(L=d.dehydrated,L!==null))return s0(t,i,w,c,L,d,o);if(h){h=c.fallback,w=i.mode,d=t.child,L=d.sibling;var B={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=hr(d,B),c.subtreeFlags=d.subtreeFlags&14680064),L!==null?h=hr(L,h):(h=Wr(h,w,o,null),h.flags|=2),h.return=i,c.return=i,c.sibling=h,i.child=c,c=h,h=i.child,w=t.child.memoizedState,w=w===null?ru(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},h.memoizedState=w,h.childLanes=t.childLanes&~o,i.memoizedState=iu,c}return h=t.child,t=h.sibling,c=hr(h,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=c,i.memoizedState=null,c}function su(t,i){return i=tl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Ha(t,i,o,c){return c!==null&&Lc(c),Ss(i,t.child,null,o),t=su(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function s0(t,i,o,c,d,h,w){if(o)return i.flags&256?(i.flags&=-257,c=Jc(Error(n(422))),Ha(t,i,w,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=c.fallback,d=i.mode,c=tl({mode:"visible",children:c.children},d,0,null),h=Wr(h,d,w,null),h.flags|=2,c.return=i,h.return=i,c.sibling=h,i.child=c,(i.mode&1)!==0&&Ss(i,t.child,null,w),i.child.memoizedState=ru(w),i.memoizedState=iu,h);if((i.mode&1)===0)return Ha(t,i,w,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var L=c.dgst;return c=L,h=Error(n(419)),c=Jc(h,c,void 0),Ha(t,i,w,c)}if(L=(w&t.childLanes)!==0,Dn||L){if(c=ln,c!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|w))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,Di(t,d),ui(c,t,d,-1))}return Su(),c=Jc(Error(n(421))),Ha(t,i,w,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=_0.bind(null,t),d._reactRetry=i,null):(t=h.treeContext,Hn=nr(d.nextSibling),Vn=i,Wt=!0,oi=null,t!==null&&(qn[$n++]=Ri,qn[$n++]=Pi,qn[$n++]=Ur,Ri=t.id,Pi=t.overflow,Ur=i),i=su(i,c.children),i.flags|=4096,i)}function fp(t,i,o){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Fc(t.return,i,o)}function ou(t,i,o,c,d){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=o,h.tailMode=d)}function hp(t,i,o){var c=i.pendingProps,d=c.revealOrder,h=c.tail;if(Tn(t,i,c.children,o),c=Xt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fp(t,o,i);else if(t.tag===19)fp(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Vt(Xt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Ua(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),ou(i,!1,d,o,h);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Ua(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}ou(i,!0,o,null,h);break;case"together":ou(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ga(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ni(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Br|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=hr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=hr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function o0(t,i,o){switch(i.tag){case 3:cp(i),ys();break;case 5:Ah(i);break;case 1:Pn(i.type)&&Ta(i);break;case 4:zc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Vt(Da,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Vt(Xt,Xt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?dp(t,i,o):(Vt(Xt,Xt.current&1),t=Ni(t,i,o),t!==null?t.sibling:null);Vt(Xt,Xt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(t.flags&128)!==0){if(c)return hp(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Vt(Xt,Xt.current),c)break;return null;case 22:case 23:return i.lanes=0,op(t,i,o)}return Ni(t,i,o)}var pp,au,mp,gp;pp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},au=function(){},mp=function(t,i,o,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,Or(xi.current);var h=null;switch(o){case"input":d=Pt(t,d),c=Pt(t,c),h=[];break;case"select":d=ce({},d,{value:void 0}),c=ce({},c,{value:void 0}),h=[];break;case"textarea":d=nt(t,d),c=nt(t,c),h=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Ma)}Ke(o,c);var w;o=null;for(ee in d)if(!c.hasOwnProperty(ee)&&d.hasOwnProperty(ee)&&d[ee]!=null)if(ee==="style"){var L=d[ee];for(w in L)L.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?h||(h=[]):(h=h||[]).push(ee,null));for(ee in c){var B=c[ee];if(L=d?.[ee],c.hasOwnProperty(ee)&&B!==L&&(B!=null||L!=null))if(ee==="style")if(L){for(w in L)!L.hasOwnProperty(w)||B&&B.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in B)B.hasOwnProperty(w)&&L[w]!==B[w]&&(o||(o={}),o[w]=B[w])}else o||(h||(h=[]),h.push(ee,o)),o=B;else ee==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,L=L?L.__html:void 0,B!=null&&L!==B&&(h=h||[]).push(ee,B)):ee==="children"?typeof B!="string"&&typeof B!="number"||(h=h||[]).push(ee,""+B):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(B!=null&&ee==="onScroll"&&Ht("scroll",t),h||L===B||(h=[])):(h=h||[]).push(ee,B))}o&&(h=h||[]).push("style",o);var ee=h;(i.updateQueue=ee)&&(i.flags|=4)}},gp=function(t,i,o,c){o!==c&&(i.flags|=4)};function Do(t,i){if(!Wt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function xn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=o,i}function a0(t,i,o){var c=i.pendingProps;switch(Rc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return Pn(i.type)&&wa(),xn(i),null;case 3:return c=i.stateNode,ws(),Gt(Rn),Gt(vn),Hc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Ra(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,oi!==null&&(_u(oi),oi=null))),au(t,i),xn(i),null;case 5:Bc(i);var d=Or(bo.current);if(o=i.type,t!==null&&i.stateNode!=null)mp(t,i,o,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return xn(i),null}if(t=Or(xi.current),Ra(i)){c=i.stateNode,o=i.type;var h=i.memoizedProps;switch(c[_i]=i,c[So]=h,t=(i.mode&1)!==0,o){case"dialog":Ht("cancel",c),Ht("close",c);break;case"iframe":case"object":case"embed":Ht("load",c);break;case"video":case"audio":for(d=0;d<_o.length;d++)Ht(_o[d],c);break;case"source":Ht("error",c);break;case"img":case"image":case"link":Ht("error",c),Ht("load",c);break;case"details":Ht("toggle",c);break;case"input":lt(c,h),Ht("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},Ht("invalid",c);break;case"textarea":S(c,h),Ht("invalid",c)}Ke(o,h),d=null;for(var w in h)if(h.hasOwnProperty(w)){var L=h[w];w==="children"?typeof L=="string"?c.textContent!==L&&(h.suppressHydrationWarning!==!0&&Sa(c.textContent,L,t),d=["children",L]):typeof L=="number"&&c.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&Sa(c.textContent,L,t),d=["children",""+L]):a.hasOwnProperty(w)&&L!=null&&w==="onScroll"&&Ht("scroll",c)}switch(o){case"input":ht(c),Et(c,h,!0);break;case"textarea":ht(c),W(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=Ma)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=J(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=w.createElement(o,{is:c.is}):(t=w.createElement(o),o==="select"&&(w=t,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):t=w.createElementNS(t,o),t[_i]=i,t[So]=c,pp(t,i,!1,!1),i.stateNode=t;e:{switch(w=Pe(o,c),o){case"dialog":Ht("cancel",t),Ht("close",t),d=c;break;case"iframe":case"object":case"embed":Ht("load",t),d=c;break;case"video":case"audio":for(d=0;d<_o.length;d++)Ht(_o[d],t);d=c;break;case"source":Ht("error",t),d=c;break;case"img":case"image":case"link":Ht("error",t),Ht("load",t),d=c;break;case"details":Ht("toggle",t),d=c;break;case"input":lt(t,c),d=Pt(t,c),Ht("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=ce({},c,{value:void 0}),Ht("invalid",t);break;case"textarea":S(t,c),d=nt(t,c),Ht("invalid",t);break;default:d=c}Ke(o,d),L=d;for(h in L)if(L.hasOwnProperty(h)){var B=L[h];h==="style"?Ie(t,B):h==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ye(t,B)):h==="children"?typeof B=="string"?(o!=="textarea"||B!=="")&&xe(t,B):typeof B=="number"&&xe(t,""+B):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?B!=null&&h==="onScroll"&&Ht("scroll",t):B!=null&&N(t,h,B,w))}switch(o){case"input":ht(t),Et(t,c,!1);break;case"textarea":ht(t),W(t);break;case"option":c.value!=null&&t.setAttribute("value",""+ve(c.value));break;case"select":t.multiple=!!c.multiple,h=c.value,h!=null?Ut(t,!!c.multiple,h,!1):c.defaultValue!=null&&Ut(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=Ma)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(t&&i.stateNode!=null)gp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(o=Or(bo.current),Or(xi.current),Ra(i)){if(c=i.stateNode,o=i.memoizedProps,c[_i]=i,(h=c.nodeValue!==o)&&(t=Vn,t!==null))switch(t.tag){case 3:Sa(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sa(c.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[_i]=i,i.stateNode=c}return xn(i),null;case 13:if(Gt(Xt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Wt&&Hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)xh(),ys(),i.flags|=98560,h=!1;else if(h=Ra(i),c!==null&&c.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[_i]=i}else ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xn(i),h=!1}else oi!==null&&(_u(oi),oi=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Xt.current&1)!==0?nn===0&&(nn=3):Su())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return ws(),au(t,i),t===null&&xo(i.stateNode.containerInfo),xn(i),null;case 10:return Uc(i.type._context),xn(i),null;case 17:return Pn(i.type)&&wa(),xn(i),null;case 19:if(Gt(Xt),h=i.memoizedState,h===null)return xn(i),null;if(c=(i.flags&128)!==0,w=h.rendering,w===null)if(c)Do(h,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=Ua(t),w!==null){for(i.flags|=128,Do(h,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)h=o,t=c,h.flags&=14680066,w=h.alternate,w===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=w.childLanes,h.lanes=w.lanes,h.child=w.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=w.memoizedProps,h.memoizedState=w.memoizedState,h.updateQueue=w.updateQueue,h.type=w.type,t=w.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Vt(Xt,Xt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Y()>Cs&&(i.flags|=128,c=!0,Do(h,!1),i.lanes=4194304)}else{if(!c)if(t=Ua(w),t!==null){if(i.flags|=128,c=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Do(h,!0),h.tail===null&&h.tailMode==="hidden"&&!w.alternate&&!Wt)return xn(i),null}else 2*Y()-h.renderingStartTime>Cs&&o!==1073741824&&(i.flags|=128,c=!0,Do(h,!1),i.lanes=4194304);h.isBackwards?(w.sibling=i.child,i.child=w):(o=h.last,o!==null?o.sibling=w:i.child=w,h.last=w)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Y(),i.sibling=null,o=Xt.current,Vt(Xt,c?o&1|2:o&1),i):(xn(i),null);case 22:case 23:return yu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function l0(t,i){switch(Rc(i),i.tag){case 1:return Pn(i.type)&&wa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ws(),Gt(Rn),Gt(vn),Hc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Bc(i),null;case 13:if(Gt(Xt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ys()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Gt(Xt),null;case 4:return ws(),null;case 10:return Uc(i.type._context),null;case 22:case 23:return yu(),null;case 24:return null;default:return null}}var Wa=!1,yn=!1,c0=typeof WeakSet=="function"?WeakSet:Set,Be=null;function bs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Yt(t,i,c)}else o.current=null}function lu(t,i,o){try{o()}catch(c){Yt(t,i,c)}}var vp=!1;function u0(t,i){if(yc=ua,t=$f(),fc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var w=0,L=-1,B=-1,ee=0,_e=0,ye=t,ge=null;t:for(;;){for(var Oe;ye!==o||d!==0&&ye.nodeType!==3||(L=w+d),ye!==h||c!==0&&ye.nodeType!==3||(B=w+c),ye.nodeType===3&&(w+=ye.nodeValue.length),(Oe=ye.firstChild)!==null;)ge=ye,ye=Oe;for(;;){if(ye===t)break t;if(ge===o&&++ee===d&&(L=w),ge===h&&++_e===c&&(B=w),(Oe=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Oe}o=L===-1||B===-1?null:{start:L,end:B}}else o=null}o=o||{start:0,end:0}}else o=null;for(Sc={focusedElem:t,selectionRange:o},ua=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var $e=We.memoizedProps,Kt=We.memoizedState,$=i.stateNode,j=$.getSnapshotBeforeUpdate(i.elementType===i.type?$e:ai(i.type,$e),Kt);$.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Yt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return We=vp,vp=!1,We}function Lo(t,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var h=d.destroy;d.destroy=void 0,h!==void 0&&lu(i,o,h)}d=d.next}while(d!==c)}}function Xa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function cu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function _p(t){var i=t.alternate;i!==null&&(t.alternate=null,_p(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[_i],delete i[So],delete i[Tc],delete i[jv],delete i[Yv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function xp(t){return t.tag===5||t.tag===3||t.tag===4}function yp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||xp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uu(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ma));else if(c!==4&&(t=t.child,t!==null))for(uu(t,i,o),t=t.sibling;t!==null;)uu(t,i,o),t=t.sibling}function du(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(du(t,i,o),t=t.sibling;t!==null;)du(t,i,o),t=t.sibling}var dn=null,li=!1;function lr(t,i,o){for(o=o.child;o!==null;)Sp(t,i,o),o=o.sibling}function Sp(t,i,o){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Je,o)}catch{}switch(o.tag){case 5:yn||bs(o,i);case 6:var c=dn,d=li;dn=null,lr(t,i,o),dn=c,li=d,dn!==null&&(li?(t=dn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):dn.removeChild(o.stateNode));break;case 18:dn!==null&&(li?(t=dn,o=o.stateNode,t.nodeType===8?wc(t.parentNode,o):t.nodeType===1&&wc(t,o),co(t)):wc(dn,o.stateNode));break;case 4:c=dn,d=li,dn=o.stateNode.containerInfo,li=!0,lr(t,i,o),dn=c,li=d;break;case 0:case 11:case 14:case 15:if(!yn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var h=d,w=h.destroy;h=h.tag,w!==void 0&&((h&2)!==0||(h&4)!==0)&&lu(o,i,w),d=d.next}while(d!==c)}lr(t,i,o);break;case 1:if(!yn&&(bs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(L){Yt(o,i,L)}lr(t,i,o);break;case 21:lr(t,i,o);break;case 22:o.mode&1?(yn=(c=yn)||o.memoizedState!==null,lr(t,i,o),yn=c):lr(t,i,o);break;default:lr(t,i,o)}}function Mp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new c0),i.forEach(function(c){var d=x0.bind(null,t,c);o.has(c)||(o.add(c),c.then(d,d))})}}function ci(t,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var h=t,w=i,L=w;e:for(;L!==null;){switch(L.tag){case 5:dn=L.stateNode,li=!1;break e;case 3:dn=L.stateNode.containerInfo,li=!0;break e;case 4:dn=L.stateNode.containerInfo,li=!0;break e}L=L.return}if(dn===null)throw Error(n(160));Sp(h,w,d),dn=null,li=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(ee){Yt(d,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ep(i,t),i=i.sibling}function Ep(t,i){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ci(i,t),Si(t),c&4){try{Lo(3,t,t.return),Xa(3,t)}catch($e){Yt(t,t.return,$e)}try{Lo(5,t,t.return)}catch($e){Yt(t,t.return,$e)}}break;case 1:ci(i,t),Si(t),c&512&&o!==null&&bs(o,o.return);break;case 5:if(ci(i,t),Si(t),c&512&&o!==null&&bs(o,o.return),t.flags&32){var d=t.stateNode;try{xe(d,"")}catch($e){Yt(t,t.return,$e)}}if(c&4&&(d=t.stateNode,d!=null)){var h=t.memoizedProps,w=o!==null?o.memoizedProps:h,L=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&tt(d,h),Pe(L,w);var ee=Pe(L,h);for(w=0;w<B.length;w+=2){var _e=B[w],ye=B[w+1];_e==="style"?Ie(d,ye):_e==="dangerouslySetInnerHTML"?Ye(d,ye):_e==="children"?xe(d,ye):N(d,_e,ye,ee)}switch(L){case"input":Ve(d,h);break;case"textarea":E(d,h);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var Oe=h.value;Oe!=null?Ut(d,!!h.multiple,Oe,!1):ge!==!!h.multiple&&(h.defaultValue!=null?Ut(d,!!h.multiple,h.defaultValue,!0):Ut(d,!!h.multiple,h.multiple?[]:"",!1))}d[So]=h}catch($e){Yt(t,t.return,$e)}}break;case 6:if(ci(i,t),Si(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,h=t.memoizedProps;try{d.nodeValue=h}catch($e){Yt(t,t.return,$e)}}break;case 3:if(ci(i,t),Si(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{co(i.containerInfo)}catch($e){Yt(t,t.return,$e)}break;case 4:ci(i,t),Si(t);break;case 13:ci(i,t),Si(t),d=t.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(pu=Y())),c&4&&Mp(t);break;case 22:if(_e=o!==null&&o.memoizedState!==null,t.mode&1?(yn=(ee=yn)||_e,ci(i,t),yn=ee):ci(i,t),Si(t),c&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!_e&&(t.mode&1)!==0)for(Be=t,_e=t.child;_e!==null;){for(ye=Be=_e;Be!==null;){switch(ge=Be,Oe=ge.child,ge.tag){case 0:case 11:case 14:case 15:Lo(4,ge,ge.return);break;case 1:bs(ge,ge.return);var We=ge.stateNode;if(typeof We.componentWillUnmount=="function"){c=ge,o=ge.return;try{i=c,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch($e){Yt(c,o,$e)}}break;case 5:bs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){bp(ye);continue}}Oe!==null?(Oe.return=ge,Be=Oe):bp(ye)}_e=_e.sibling}e:for(_e=null,ye=t;;){if(ye.tag===5){if(_e===null){_e=ye;try{d=ye.stateNode,ee?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=ye.stateNode,B=ye.memoizedProps.style,w=B!=null&&B.hasOwnProperty("display")?B.display:null,L.style.display=we("display",w))}catch($e){Yt(t,t.return,$e)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=ee?"":ye.memoizedProps}catch($e){Yt(t,t.return,$e)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ci(i,t),Si(t),c&4&&Mp(t);break;case 21:break;default:ci(i,t),Si(t)}}function Si(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(xp(o)){var c=o;break e}o=o.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(xe(d,""),c.flags&=-33);var h=yp(t);du(t,h,d);break;case 3:case 4:var w=c.stateNode.containerInfo,L=yp(t);uu(t,L,w);break;default:throw Error(n(161))}}catch(B){Yt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function d0(t,i,o){Be=t,wp(t)}function wp(t,i,o){for(var c=(t.mode&1)!==0;Be!==null;){var d=Be,h=d.child;if(d.tag===22&&c){var w=d.memoizedState!==null||Wa;if(!w){var L=d.alternate,B=L!==null&&L.memoizedState!==null||yn;L=Wa;var ee=yn;if(Wa=w,(yn=B)&&!ee)for(Be=d;Be!==null;)w=Be,B=w.child,w.tag===22&&w.memoizedState!==null?Ap(d):B!==null?(B.return=w,Be=B):Ap(d);for(;h!==null;)Be=h,wp(h),h=h.sibling;Be=d,Wa=L,yn=ee}Tp(t)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,Be=h):Tp(t)}}function Tp(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:yn||Xa(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!yn)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ai(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&bh(i,h,c);break;case 3:var w=i.updateQueue;if(w!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}bh(i,w,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&o.focus();break;case"img":B.src&&(o.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&co(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}yn||i.flags&512&&cu(i)}catch(ge){Yt(i,i.return,ge)}}if(i===t){Be=null;break}if(o=i.sibling,o!==null){o.return=i.return,Be=o;break}Be=i.return}}function bp(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Be=o;break}Be=i.return}}function Ap(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Xa(4,i)}catch(B){Yt(i,o,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(B){Yt(i,d,B)}}var h=i.return;try{cu(i)}catch(B){Yt(i,h,B)}break;case 5:var w=i.return;try{cu(i)}catch(B){Yt(i,w,B)}}}catch(B){Yt(i,i.return,B)}if(i===t){Be=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Be=L;break}Be=i.return}}var f0=Math.ceil,ja=P.ReactCurrentDispatcher,fu=P.ReactCurrentOwner,Qn=P.ReactCurrentBatchConfig,bt=0,ln=null,Zt=null,fn=0,Gn=0,As=ir(0),nn=0,No=null,Br=0,Ya=0,hu=0,Io=null,Ln=null,pu=0,Cs=1/0,Ii=null,qa=!1,mu=null,cr=null,$a=!1,ur=null,Ka=0,Uo=0,gu=null,Za=-1,Qa=0;function bn(){return(bt&6)!==0?Y():Za!==-1?Za:Za=Y()}function dr(t){return(t.mode&1)===0?1:(bt&2)!==0&&fn!==0?fn&-fn:$v.transition!==null?(Qa===0&&(Qa=wn()),Qa):(t=St,t!==0||(t=window.event,t=t===void 0?16:Rf(t.type)),t)}function ui(t,i,o,c){if(50<Uo)throw Uo=0,gu=null,Error(n(185));$t(t,o,c),((bt&2)===0||t!==ln)&&(t===ln&&((bt&2)===0&&(Ya|=o),nn===4&&fr(t,fn)),Nn(t,c),o===1&&bt===0&&(i.mode&1)===0&&(Cs=Y()+500,ba&&sr()))}function Nn(t,i){var o=t.callbackNode;Dr(t,i);var c=ri(t,t===ln?fn:0);if(c===0)o!==null&&q(o),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(o!=null&&q(o),i===1)t.tag===0?qv(Rp.bind(null,t)):ph(Rp.bind(null,t)),Wv(function(){(bt&6)===0&&sr()}),o=null;else{switch(Sf(c)){case 1:o=Le;break;case 4:o=Ge;break;case 16:o=ke;break;case 536870912:o=at;break;default:o=ke}o=kp(o,Cp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Cp(t,i){if(Za=-1,Qa=0,(bt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Rs()&&t.callbackNode!==o)return null;var c=ri(t,t===ln?fn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=Ja(t,c);else{i=c;var d=bt;bt|=2;var h=Dp();(ln!==t||fn!==i)&&(Ii=null,Cs=Y()+500,Hr(t,i));do try{m0();break}catch(L){Pp(t,L)}while(!0);Ic(),ja.current=h,bt=d,Zt!==null?i=0:(ln=null,fn=0,i=nn)}if(i!==0){if(i===2&&(d=zt(t),d!==0&&(c=d,i=vu(t,d))),i===1)throw o=No,Hr(t,0),fr(t,c),Nn(t,Y()),o;if(i===6)fr(t,c);else{if(d=t.current.alternate,(c&30)===0&&!h0(d)&&(i=Ja(t,c),i===2&&(h=zt(t),h!==0&&(c=h,i=vu(t,h))),i===1))throw o=No,Hr(t,0),fr(t,c),Nn(t,Y()),o;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Gr(t,Ln,Ii);break;case 3:if(fr(t,c),(c&130023424)===c&&(i=pu+500-Y(),10<i)){if(ri(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){bn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Ec(Gr.bind(null,t,Ln,Ii),i);break}Gr(t,Ln,Ii);break;case 4:if(fr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var w=31-Tt(c);h=1<<w,w=i[w],w>d&&(d=w),c&=~h}if(c=d,c=Y()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*f0(c/1960))-c,10<c){t.timeoutHandle=Ec(Gr.bind(null,t,Ln,Ii),c);break}Gr(t,Ln,Ii);break;case 5:Gr(t,Ln,Ii);break;default:throw Error(n(329))}}}return Nn(t,Y()),t.callbackNode===o?Cp.bind(null,t):null}function vu(t,i){var o=Io;return t.current.memoizedState.isDehydrated&&(Hr(t,i).flags|=256),t=Ja(t,i),t!==2&&(i=Ln,Ln=o,i!==null&&_u(i)),t}function _u(t){Ln===null?Ln=t:Ln.push.apply(Ln,t)}function h0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],h=d.getSnapshot;d=d.value;try{if(!si(h(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(t,i){for(i&=~hu,i&=~Ya,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Tt(i),c=1<<o;t[o]=-1,i&=~c}}function Rp(t){if((bt&6)!==0)throw Error(n(327));Rs();var i=ri(t,0);if((i&1)===0)return Nn(t,Y()),null;var o=Ja(t,i);if(t.tag!==0&&o===2){var c=zt(t);c!==0&&(i=c,o=vu(t,c))}if(o===1)throw o=No,Hr(t,0),fr(t,i),Nn(t,Y()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Gr(t,Ln,Ii),Nn(t,Y()),null}function xu(t,i){var o=bt;bt|=1;try{return t(i)}finally{bt=o,bt===0&&(Cs=Y()+500,ba&&sr())}}function Vr(t){ur!==null&&ur.tag===0&&(bt&6)===0&&Rs();var i=bt;bt|=1;var o=Qn.transition,c=St;try{if(Qn.transition=null,St=1,t)return t()}finally{St=c,Qn.transition=o,bt=i,(bt&6)===0&&sr()}}function yu(){Gn=As.current,Gt(As)}function Hr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Gv(o)),Zt!==null)for(o=Zt.return;o!==null;){var c=o;switch(Rc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&wa();break;case 3:ws(),Gt(Rn),Gt(vn),Hc();break;case 5:Bc(c);break;case 4:ws();break;case 13:Gt(Xt);break;case 19:Gt(Xt);break;case 10:Uc(c.type._context);break;case 22:case 23:yu()}o=o.return}if(ln=t,Zt=t=hr(t.current,null),fn=Gn=i,nn=0,No=null,hu=Ya=Br=0,Ln=Io=null,kr!==null){for(i=0;i<kr.length;i++)if(o=kr[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,h=o.pending;if(h!==null){var w=h.next;h.next=d,c.next=w}o.pending=c}kr=null}return t}function Pp(t,i){do{var o=Zt;try{if(Ic(),Fa.current=Ba,ka){for(var c=jt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}ka=!1}if(zr=0,an=tn=jt=null,Ao=!1,Co=0,fu.current=null,o===null||o.return===null){nn=1,No=i,Zt=null;break}e:{var h=t,w=o.return,L=o,B=i;if(i=fn,L.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ee=B,_e=L,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Oe=tp(w);if(Oe!==null){Oe.flags&=-257,np(Oe,w,L,h,i),Oe.mode&1&&ep(h,ee,i),i=Oe,B=ee;var We=i.updateQueue;if(We===null){var $e=new Set;$e.add(B),i.updateQueue=$e}else We.add(B);break e}else{if((i&1)===0){ep(h,ee,i),Su();break e}B=Error(n(426))}}else if(Wt&&L.mode&1){var Kt=tp(w);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),np(Kt,w,L,h,i),Lc(Ts(B,L));break e}}h=B=Ts(B,L),nn!==4&&(nn=2),Io===null?Io=[h]:Io.push(h),h=w;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var $=Qh(h,B,i);Th(h,$);break e;case 1:L=B;var j=h.type,K=h.stateNode;if((h.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(cr===null||!cr.has(K)))){h.flags|=65536,i&=-i,h.lanes|=i;var Te=Jh(h,L,i);Th(h,Te);break e}}h=h.return}while(h!==null)}Np(o)}catch(Ze){i=Ze,Zt===o&&o!==null&&(Zt=o=o.return);continue}break}while(!0)}function Dp(){var t=ja.current;return ja.current=Ba,t===null?Ba:t}function Su(){(nn===0||nn===3||nn===2)&&(nn=4),ln===null||(Br&268435455)===0&&(Ya&268435455)===0||fr(ln,fn)}function Ja(t,i){var o=bt;bt|=2;var c=Dp();(ln!==t||fn!==i)&&(Ii=null,Hr(t,i));do try{p0();break}catch(d){Pp(t,d)}while(!0);if(Ic(),bt=o,ja.current=c,Zt!==null)throw Error(n(261));return ln=null,fn=0,nn}function p0(){for(;Zt!==null;)Lp(Zt)}function m0(){for(;Zt!==null&&!se();)Lp(Zt)}function Lp(t){var i=Fp(t.alternate,t,Gn);t.memoizedProps=t.pendingProps,i===null?Np(t):Zt=i,fu.current=null}function Np(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=a0(o,i,Gn),o!==null){Zt=o;return}}else{if(o=l0(o,i),o!==null){o.flags&=32767,Zt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nn=6,Zt=null;return}}if(i=i.sibling,i!==null){Zt=i;return}Zt=i=t}while(i!==null);nn===0&&(nn=5)}function Gr(t,i,o){var c=St,d=Qn.transition;try{Qn.transition=null,St=1,g0(t,i,o,c)}finally{Qn.transition=d,St=c}return null}function g0(t,i,o,c){do Rs();while(ur!==null);if((bt&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(gn(t,h),t===ln&&(Zt=ln=null,fn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||$a||($a=!0,kp(ke,function(){return Rs(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=Qn.transition,Qn.transition=null;var w=St;St=1;var L=bt;bt|=4,fu.current=null,u0(t,o),Ep(o,t),Fv(Sc),ua=!!yc,Sc=yc=null,t.current=o,d0(o),ae(),bt=L,St=w,Qn.transition=h}else t.current=o;if($a&&($a=!1,ur=t,Ka=d),h=t.pendingLanes,h===0&&(cr=null),Dt(o.stateNode),Nn(t,Y()),i!==null)for(c=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(qa)throw qa=!1,t=mu,mu=null,t;return(Ka&1)!==0&&t.tag!==0&&Rs(),h=t.pendingLanes,(h&1)!==0?t===gu?Uo++:(Uo=0,gu=t):Uo=0,sr(),null}function Rs(){if(ur!==null){var t=Sf(Ka),i=Qn.transition,o=St;try{if(Qn.transition=null,St=16>t?16:t,ur===null)var c=!1;else{if(t=ur,ur=null,Ka=0,(bt&6)!==0)throw Error(n(331));var d=bt;for(bt|=4,Be=t.current;Be!==null;){var h=Be,w=h.child;if((Be.flags&16)!==0){var L=h.deletions;if(L!==null){for(var B=0;B<L.length;B++){var ee=L[B];for(Be=ee;Be!==null;){var _e=Be;switch(_e.tag){case 0:case 11:case 15:Lo(8,_e,h)}var ye=_e.child;if(ye!==null)ye.return=_e,Be=ye;else for(;Be!==null;){_e=Be;var ge=_e.sibling,Oe=_e.return;if(_p(_e),_e===ee){Be=null;break}if(ge!==null){ge.return=Oe,Be=ge;break}Be=Oe}}}var We=h.alternate;if(We!==null){var $e=We.child;if($e!==null){We.child=null;do{var Kt=$e.sibling;$e.sibling=null,$e=Kt}while($e!==null)}}Be=h}}if((h.subtreeFlags&2064)!==0&&w!==null)w.return=h,Be=w;else e:for(;Be!==null;){if(h=Be,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Lo(9,h,h.return)}var $=h.sibling;if($!==null){$.return=h.return,Be=$;break e}Be=h.return}}var j=t.current;for(Be=j;Be!==null;){w=Be;var K=w.child;if((w.subtreeFlags&2064)!==0&&K!==null)K.return=w,Be=K;else e:for(w=j;Be!==null;){if(L=Be,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Xa(9,L)}}catch(Ze){Yt(L,L.return,Ze)}if(L===w){Be=null;break e}var Te=L.sibling;if(Te!==null){Te.return=L.return,Be=Te;break e}Be=L.return}}if(bt=d,sr(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Je,t)}catch{}c=!0}return c}finally{St=o,Qn.transition=i}}return!1}function Ip(t,i,o){i=Ts(o,i),i=Qh(t,i,1),t=ar(t,i,1),i=bn(),t!==null&&($t(t,1,i),Nn(t,i))}function Yt(t,i,o){if(t.tag===3)Ip(t,t,o);else for(;i!==null;){if(i.tag===3){Ip(i,t,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(cr===null||!cr.has(c))){t=Ts(o,t),t=Jh(i,t,1),i=ar(i,t,1),t=bn(),i!==null&&($t(i,1,t),Nn(i,t));break}}i=i.return}}function v0(t,i,o){var c=t.pingCache;c!==null&&c.delete(i),i=bn(),t.pingedLanes|=t.suspendedLanes&o,ln===t&&(fn&o)===o&&(nn===4||nn===3&&(fn&130023424)===fn&&500>Y()-pu?Hr(t,0):hu|=o),Nn(t,i)}function Up(t,i){i===0&&((t.mode&1)===0?i=1:(i=yt,yt<<=1,(yt&130023424)===0&&(yt=4194304)));var o=bn();t=Di(t,i),t!==null&&($t(t,i,o),Nn(t,o))}function _0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Up(t,o)}function x0(t,i){var o=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Up(t,o)}var Fp;Fp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Rn.current)Dn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Dn=!1,o0(t,i,o);Dn=(t.flags&131072)!==0}else Dn=!1,Wt&&(i.flags&1048576)!==0&&mh(i,Ca,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ga(t,i),t=i.pendingProps;var d=vs(i,vn.current);Es(i,o),d=Xc(null,i,c,t,d,o);var h=jc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(c)?(h=!0,Ta(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Oc(i),d.updater=Va,i.stateNode=d,d._reactInternals=i,Qc(i,c,t,o),i=nu(null,i,c,!0,h,o)):(i.tag=0,Wt&&h&&Cc(i),Tn(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Ga(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=S0(c),t=ai(c,t),d){case 0:i=tu(null,i,c,t,o);break e;case 1:i=lp(null,i,c,t,o);break e;case 11:i=ip(null,i,c,t,o);break e;case 14:i=rp(null,i,c,ai(c.type,t),o);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ai(c,d),tu(t,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ai(c,d),lp(t,i,c,d,o);case 3:e:{if(cp(i),t===null)throw Error(n(387));c=i.pendingProps,h=i.memoizedState,d=h.element,wh(t,i),Ia(i,c,null,o);var w=i.memoizedState;if(c=w.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=Ts(Error(n(423)),i),i=up(t,i,c,o,d);break e}else if(c!==d){d=Ts(Error(n(424)),i),i=up(t,i,c,o,d);break e}else for(Hn=nr(i.stateNode.containerInfo.firstChild),Vn=i,Wt=!0,oi=null,o=Mh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ys(),c===d){i=Ni(t,i,o);break e}Tn(t,i,c,o)}i=i.child}return i;case 5:return Ah(i),t===null&&Dc(i),c=i.type,d=i.pendingProps,h=t!==null?t.memoizedProps:null,w=d.children,Mc(c,d)?w=null:h!==null&&Mc(c,h)&&(i.flags|=32),ap(t,i),Tn(t,i,w,o),i.child;case 6:return t===null&&Dc(i),null;case 13:return dp(t,i,o);case 4:return zc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=Ss(i,null,c,o):Tn(t,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ai(c,d),ip(t,i,c,d,o);case 7:return Tn(t,i,i.pendingProps,o),i.child;case 8:return Tn(t,i,i.pendingProps.children,o),i.child;case 12:return Tn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,h=i.memoizedProps,w=d.value,Vt(Da,c._currentValue),c._currentValue=w,h!==null)if(si(h.value,w)){if(h.children===d.children&&!Rn.current){i=Ni(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){w=h.child;for(var B=L.firstContext;B!==null;){if(B.context===c){if(h.tag===1){B=Li(-1,o&-o),B.tag=2;var ee=h.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?B.next=B:(B.next=_e.next,_e.next=B),ee.pending=B}}h.lanes|=o,B=h.alternate,B!==null&&(B.lanes|=o),Fc(h.return,o,i),L.lanes|=o;break}B=B.next}}else if(h.tag===10)w=h.type===i.type?null:h.child;else if(h.tag===18){if(w=h.return,w===null)throw Error(n(341));w.lanes|=o,L=w.alternate,L!==null&&(L.lanes|=o),Fc(w,o,i),w=h.sibling}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===i){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}Tn(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Es(i,o),d=Kn(d),c=c(d),i.flags|=1,Tn(t,i,c,o),i.child;case 14:return c=i.type,d=ai(c,i.pendingProps),d=ai(c.type,d),rp(t,i,c,d,o);case 15:return sp(t,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ai(c,d),Ga(t,i),i.tag=1,Pn(c)?(t=!0,Ta(i)):t=!1,Es(i,o),Kh(i,c,d),Qc(i,c,d,o),nu(null,i,c,!0,t,o);case 19:return hp(t,i,o);case 22:return op(t,i,o)}throw Error(n(156,i.tag))};function kp(t,i){return A(t,i)}function y0(t,i,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,i,o,c){return new y0(t,i,o,c)}function Mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function S0(t){if(typeof t=="function")return Mu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Z)return 11;if(t===de)return 14}return 2}function hr(t,i){var o=t.alternate;return o===null?(o=Jn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function el(t,i,o,c,d,h){var w=2;if(c=t,typeof t=="function")Mu(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case z:return Wr(o.children,d,h,i);case V:w=8,d|=8;break;case R:return t=Jn(12,o,i,d|2),t.elementType=R,t.lanes=h,t;case le:return t=Jn(13,o,i,d),t.elementType=le,t.lanes=h,t;case ue:return t=Jn(19,o,i,d),t.elementType=ue,t.lanes=h,t;case fe:return tl(o,d,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:w=10;break e;case G:w=9;break e;case Z:w=11;break e;case de:w=14;break e;case te:w=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Jn(w,o,i,d),i.elementType=t,i.type=c,i.lanes=h,i}function Wr(t,i,o,c){return t=Jn(7,t,c,i),t.lanes=o,t}function tl(t,i,o,c){return t=Jn(22,t,c,i),t.elementType=fe,t.lanes=o,t.stateNode={isHidden:!1},t}function Eu(t,i,o){return t=Jn(6,t,null,i),t.lanes=o,t}function wu(t,i,o){return i=Jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function M0(t,i,o,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Tu(t,i,o,c,d,h,w,L,B){return t=new M0(t,i,o,L,B),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Jn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oc(h),t}function E0(t,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:t,containerInfo:i,implementation:o}}function Op(t){if(!t)return rr;t=t._reactInternals;e:{if(bi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Pn(o))return fh(t,o,i)}return i}function zp(t,i,o,c,d,h,w,L,B){return t=Tu(o,c,!0,t,d,h,w,L,B),t.context=Op(null),o=t.current,c=bn(),d=dr(o),h=Li(c,d),h.callback=i??null,ar(o,h,d),t.current.lanes=d,$t(t,d,c),Nn(t,c),t}function nl(t,i,o,c){var d=i.current,h=bn(),w=dr(d);return o=Op(o),i.context===null?i.context=o:i.pendingContext=o,i=Li(h,w),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=ar(d,i,w),t!==null&&(ui(t,d,w,h),Na(t,d,w)),w}function il(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function bu(t,i){Bp(t,i),(t=t.alternate)&&Bp(t,i)}function w0(){return null}var Vp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Au(t){this._internalRoot=t}rl.prototype.render=Au.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));nl(t,i,null,null)},rl.prototype.unmount=Au.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Vr(function(){nl(null,t,null,null)}),i[Ai]=null}};function rl(t){this._internalRoot=t}rl.prototype.unstable_scheduleHydration=function(t){if(t){var i=wf();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Ji.length&&i!==0&&i<Ji[o].priority;o++);Ji.splice(o,0,t),o===0&&Af(t)}};function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function T0(t,i,o,c,d){if(d){if(typeof c=="function"){var h=c;c=function(){var ee=il(w);h.call(ee)}}var w=zp(i,c,t,0,null,!1,!1,"",Hp);return t._reactRootContainer=w,t[Ai]=w.current,xo(t.nodeType===8?t.parentNode:t),Vr(),w}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var L=c;c=function(){var ee=il(B);L.call(ee)}}var B=Tu(t,0,!1,null,null,!1,!1,"",Hp);return t._reactRootContainer=B,t[Ai]=B.current,xo(t.nodeType===8?t.parentNode:t),Vr(function(){nl(i,B,o,c)}),B}function ol(t,i,o,c,d){var h=o._reactRootContainer;if(h){var w=h;if(typeof d=="function"){var L=d;d=function(){var B=il(w);L.call(B)}}nl(i,w,t,d)}else w=T0(o,i,t,d,c);return il(w)}Mf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=en(i.pendingLanes);o!==0&&(Lr(i,o|1),Nn(i,Y()),(bt&6)===0&&(Cs=Y()+500,sr()))}break;case 13:Vr(function(){var c=Di(t,1);if(c!==null){var d=bn();ui(c,t,1,d)}}),bu(t,1)}},Jl=function(t){if(t.tag===13){var i=Di(t,134217728);if(i!==null){var o=bn();ui(i,t,134217728,o)}bu(t,134217728)}},Ef=function(t){if(t.tag===13){var i=dr(t),o=Di(t,i);if(o!==null){var c=bn();ui(o,t,i,c)}bu(t,i)}},wf=function(){return St},Tf=function(t,i){var o=St;try{return St=t,i()}finally{St=o}},Me=function(t,i,o){switch(i){case"input":if(Ve(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==t&&c.form===t.form){var d=Ea(c);if(!d)throw Error(n(90));Bt(c),Ve(c,d)}}}break;case"textarea":E(t,o);break;case"select":i=o.value,i!=null&&Ut(t,!!o.multiple,i,!1)}},ft=xu,Lt=Vr;var b0={usingClientEntryPoint:!1,Events:[Mo,ms,Ea,me,qe,xu]},Fo={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A0={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=oa(t),t===null?null:t.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||w0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{Je=al.inject(A0),ut=al}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b0,In.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cu(i))throw Error(n(200));return E0(t,i,null,o)},In.createRoot=function(t,i){if(!Cu(t))throw Error(n(299));var o=!1,c="",d=Vp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Tu(t,1,!1,null,null,o,!1,c,d),t[Ai]=i.current,xo(t.nodeType===8?t.parentNode:t),new Au(i)},In.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=oa(i),t=t===null?null:t.stateNode,t},In.flushSync=function(t){return Vr(t)},In.hydrate=function(t,i,o){if(!sl(i))throw Error(n(200));return ol(null,t,i,!0,o)},In.hydrateRoot=function(t,i,o){if(!Cu(t))throw Error(n(405));var c=o!=null&&o.hydratedSources||null,d=!1,h="",w=Vp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),i=zp(i,null,t,1,o??null,d,!1,h,w),t[Ai]=i.current,xo(t),c)for(t=0;t<c.length;t++)o=c[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new rl(i)},In.render=function(t,i,o){if(!sl(i))throw Error(n(200));return ol(null,t,i,!1,o)},In.unmountComponentAtNode=function(t){if(!sl(t))throw Error(n(40));return t._reactRootContainer?(Vr(function(){ol(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1},In.unstable_batchedUpdates=xu,In.unstable_renderSubtreeIntoContainer=function(t,i,o,c){if(!sl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ol(t,i,o,!1,c)},In.version="18.3.1-next-f1338f8080-20240426",In}var Kp;function U0(){if(Kp)return Du.exports;Kp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Du.exports=I0(),Du.exports}var Zp;function F0(){if(Zp)return ll;Zp=1;var s=U0();return ll.createRoot=s.createRoot,ll.hydrateRoot=s.hydrateRoot,ll}var k0=F0(),It=uf();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),z0=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Qp=s=>{const e=z0(s);return e.charAt(0).toUpperCase()+e.slice(1)},sg=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var B0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=It.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:u,...f},m)=>It.createElement("svg",{ref:m,...B0,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:sg("lucide",a),...f},[...u.map(([p,v])=>It.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=(s,e)=>{const n=It.forwardRef(({className:r,...a},l)=>It.createElement(V0,{ref:l,iconNode:e,className:sg(`lucide-${O0(Qp(s))}`,`lucide-${s}`,r),...a}));return n.displayName=Qp(s),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],G0=hn("check",H0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],X0=hn("circle-check",W0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],og=hn("code-xml",j0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],q0=hn("github",Y0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],K0=hn("globe",$0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]],Q0=hn("heart-handshake",Z0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],e_=hn("linkedin",J0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],ag=hn("mail",t_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],i_=hn("map-pin",n_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],s_=hn("message-circle",r_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],lg=hn("palette",o_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],md=hn("rocket",a_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],c_=hn("send",l_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],d_=hn("smartphone",u_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 8h7",key:"kbo1nt"}],["path",{d:"M8 12h6",key:"ikassy"}],["path",{d:"M11 16h5",key:"oq65wt"}]],h_=hn("square-chart-gantt",f_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],m_=hn("star",p_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],v_=hn("zap",g_);function __(){const[s,e]=It.useState("home"),n=r=>{const a=document.getElementById(r);a&&(a.scrollIntoView({behavior:"smooth"}),e(r))};return U.jsx("header",{className:"fixed top-0 left-0 w-full z-50 flex justify-center items-center py-4 bg-transparent",children:U.jsxs("div",{className:"w-[98%] max-w-7xl bg-slate-950/30 backdrop-blur-2xl border border-purple-500/20 rounded-full px-8 py-3.5 shadow-xl flex items-center justify-between",children:[U.jsxs("div",{className:"flex items-center gap-2",children:[U.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center",children:U.jsx(og,{className:"w-5 h-5"})}),U.jsx("span",{className:"font-bold text-lg",children:"oezdens"})]}),U.jsxs("nav",{className:"flex items-center gap-14 text-sm",children:[U.jsxs("button",{onClick:()=>n("home"),className:`relative group pb-1 transition-all duration-300 ${s==="home"?"text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold":"text-slate-300 hover:text-white"}`,children:["Home",U.jsx("span",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${s==="home"?"w-full":"w-0 group-hover:w-full"}`})]}),U.jsxs("button",{onClick:()=>n("ablauf"),className:`relative group pb-1 transition-all duration-300 ${s==="ablauf"?"text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold":"text-slate-300 hover:text-white"}`,children:["Ablauf",U.jsx("span",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${s==="ablauf"?"w-full":"w-0 group-hover:w-full"}`})]}),U.jsxs("button",{onClick:()=>n("leistungen"),className:`relative group pb-1 transition-all duration-300 ${s==="leistungen"?"text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold":"text-slate-300 hover:text-white"}`,children:["Leistungen",U.jsx("span",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${s==="leistungen"?"w-full":"w-0 group-hover:w-full"}`})]}),U.jsxs("button",{onClick:()=>n("ueber-mich"),className:`relative group pb-1 transition-all duration-300 ${s==="ueber-mich"?"text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold":"text-slate-300 hover:text-white"}`,children:["Über mich",U.jsx("span",{className:`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${s==="ueber-mich"?"w-full":"w-0 group-hover:w-full"}`})]}),U.jsx("a",{href:"#contact",className:"bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-1.5 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm font-medium",children:"Contact"})]})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const df="180",x_=0,Jp=1,y_=2,cg=1,S_=2,Vi=3,Ar=0,kn=1,Hi=2,Tr=0,js=1,gd=2,em=3,tm=4,M_=5,es=100,E_=101,w_=102,T_=103,b_=104,A_=200,C_=201,R_=202,P_=203,vd=204,_d=205,D_=206,L_=207,N_=208,I_=209,U_=210,F_=211,k_=212,O_=213,z_=214,xd=0,yd=1,Sd=2,qs=3,Md=4,Ed=5,wd=6,Td=7,ug=0,B_=1,V_=2,br=0,H_=1,G_=2,W_=3,X_=4,j_=5,Y_=6,q_=7,dg=300,$s=301,Ks=302,bd=303,Ad=304,$l=306,Cd=1e3,gi=1001,Rd=1002,jn=1003,$_=1004,cl=1005,Fn=1006,Iu=1007,ns=1008,Xi=1009,fg=1010,hg=1011,jo=1012,ff=1013,rs=1014,Ei=1015,Js=1016,hf=1017,pf=1018,Yo=1020,pg=35902,mg=35899,gg=1021,vg=1022,ni=1023,qo=1026,$o=1027,_g=1028,mf=1029,xg=1030,gf=1031,vf=1033,Fl=33776,kl=33777,Ol=33778,zl=33779,Pd=35840,Dd=35841,Ld=35842,Nd=35843,Id=36196,Ud=37492,Fd=37496,kd=37808,Od=37809,zd=37810,Bd=37811,Vd=37812,Hd=37813,Gd=37814,Wd=37815,Xd=37816,jd=37817,Yd=37818,qd=37819,$d=37820,Kd=37821,Zd=36492,Qd=36494,Jd=36495,ef=36283,tf=36284,nf=36285,rf=36286,K_=3200,Z_=3201,Q_=0,J_=1,Mr="",ti="srgb",Zs="srgb-linear",Gl="linear",kt="srgb",Ps=7680,nm=519,ex=512,tx=513,nx=514,yg=515,ix=516,rx=517,sx=518,ox=519,im=35044,rm="300 es",wi=2e3,Wl=2001;class eo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=Math.PI/180,sf=180/Math.PI;function Zo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[n&63|128]+Sn[n>>8&255]+"-"+Sn[n>>16&255]+Sn[n>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function Mt(s,e,n){return Math.max(e,Math.min(n,s))}function ax(s,e){return(s%e+e)%e}function Fu(s,e,n){return(1-n)*s+n*e}function Oo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,n=0){mt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,u,f){let m=r[a+0],p=r[a+1],v=r[a+2],_=r[a+3];const x=l[u+0],M=l[u+1],T=l[u+2],b=l[u+3];if(f===0){e[n+0]=m,e[n+1]=p,e[n+2]=v,e[n+3]=_;return}if(f===1){e[n+0]=x,e[n+1]=M,e[n+2]=T,e[n+3]=b;return}if(_!==b||m!==x||p!==M||v!==T){let y=1-f;const g=m*x+p*M+v*T+_*b,k=g>=0?1:-1,N=1-g*g;if(N>Number.EPSILON){const H=Math.sqrt(N),O=Math.atan2(H,g*k);y=Math.sin(y*O)/H,f=Math.sin(f*O)/H}const P=f*k;if(m=m*y+x*P,p=p*y+M*P,v=v*y+T*P,_=_*y+b*P,y===1-f){const H=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=H,p*=H,v*=H,_*=H}}e[n]=m,e[n+1]=p,e[n+2]=v,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,a,l,u){const f=r[a],m=r[a+1],p=r[a+2],v=r[a+3],_=l[u],x=l[u+1],M=l[u+2],T=l[u+3];return e[n]=f*T+v*_+m*M-p*x,e[n+1]=m*T+v*x+p*_-f*M,e[n+2]=p*T+v*M+f*x-m*_,e[n+3]=v*T-f*_-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,m=Math.sin,p=f(r/2),v=f(a/2),_=f(l/2),x=m(r/2),M=m(a/2),T=m(l/2);switch(u){case"XYZ":this._x=x*v*_+p*M*T,this._y=p*M*_-x*v*T,this._z=p*v*T+x*M*_,this._w=p*v*_-x*M*T;break;case"YXZ":this._x=x*v*_+p*M*T,this._y=p*M*_-x*v*T,this._z=p*v*T-x*M*_,this._w=p*v*_+x*M*T;break;case"ZXY":this._x=x*v*_-p*M*T,this._y=p*M*_+x*v*T,this._z=p*v*T+x*M*_,this._w=p*v*_-x*M*T;break;case"ZYX":this._x=x*v*_-p*M*T,this._y=p*M*_+x*v*T,this._z=p*v*T-x*M*_,this._w=p*v*_+x*M*T;break;case"YZX":this._x=x*v*_+p*M*T,this._y=p*M*_+x*v*T,this._z=p*v*T-x*M*_,this._w=p*v*_-x*M*T;break;case"XZY":this._x=x*v*_-p*M*T,this._y=p*M*_-x*v*T,this._z=p*v*T+x*M*_,this._w=p*v*_+x*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],u=n[1],f=n[5],m=n[9],p=n[2],v=n[6],_=n[10],x=r+f+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-m)*M,this._y=(l-p)*M,this._z=(u-a)*M}else if(r>f&&r>_){const M=2*Math.sqrt(1+r-f-_);this._w=(v-m)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(l+p)/M}else if(f>_){const M=2*Math.sqrt(1+f-r-_);this._w=(l-p)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+_-r-f);this._w=(u-a)/M,this._x=(l+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,u=e._w,f=n._x,m=n._y,p=n._z,v=n._w;return this._x=r*v+u*f+a*p-l*m,this._y=a*v+u*m+l*f-r*p,this._z=l*v+u*p+r*m-a*f,this._w=u*v-r*f-a*m-l*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,u=this._w;let f=u*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=a,this._z=l,this;const m=1-f*f;if(m<=Number.EPSILON){const M=1-n;return this._w=M*u+n*this._w,this._x=M*r+n*this._x,this._y=M*a+n*this._y,this._z=M*l+n*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,f),_=Math.sin((1-n)*v)/p,x=Math.sin(n*v)/p;return this._w=u*_+this._w*x,this._x=r*_+this._x*x,this._y=a*_+this._y*x,this._z=l*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,n=0,r=0){re.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(sm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(sm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,u=e.y,f=e.z,m=e.w,p=2*(u*a-f*r),v=2*(f*n-l*a),_=2*(l*r-u*n);return this.x=n+m*p+u*_-f*v,this.y=r+m*v+f*p-l*_,this.z=a+m*_+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,u=n.x,f=n.y,m=n.z;return this.x=a*m-l*f,this.y=l*u-r*m,this.z=r*f-a*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ku.copy(this).projectOnVector(e),this.sub(ku)}reflect(e){return this.sub(ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ku=new re,sm=new Qo;class gt{constructor(e,n,r,a,l,u,f,m,p){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,u,f,m,p)}set(e,n,r,a,l,u,f,m,p){const v=this.elements;return v[0]=e,v[1]=a,v[2]=f,v[3]=n,v[4]=l,v[5]=m,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,u=r[0],f=r[3],m=r[6],p=r[1],v=r[4],_=r[7],x=r[2],M=r[5],T=r[8],b=a[0],y=a[3],g=a[6],k=a[1],N=a[4],P=a[7],H=a[2],O=a[5],z=a[8];return l[0]=u*b+f*k+m*H,l[3]=u*y+f*N+m*O,l[6]=u*g+f*P+m*z,l[1]=p*b+v*k+_*H,l[4]=p*y+v*N+_*O,l[7]=p*g+v*P+_*z,l[2]=x*b+M*k+T*H,l[5]=x*y+M*N+T*O,l[8]=x*g+M*P+T*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],v=e[8];return n*u*v-n*f*p-r*l*v+r*f*m+a*l*p-a*u*m}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],v=e[8],_=v*u-f*p,x=f*m-v*l,M=p*l-u*m,T=n*_+r*x+a*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=_*b,e[1]=(a*p-v*r)*b,e[2]=(f*r-a*u)*b,e[3]=x*b,e[4]=(v*n-a*m)*b,e[5]=(a*l-f*n)*b,e[6]=M*b,e[7]=(r*m-p*n)*b,e[8]=(u*n-r*l)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,u,f){const m=Math.cos(l),p=Math.sin(l);return this.set(r*m,r*p,-r*(m*u+p*f)+u+e,-a*p,a*m,-a*(-p*u+m*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Ou.makeScale(e,n)),this}rotate(e){return this.premultiply(Ou.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ou.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ou=new gt;function Sg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lx(){const s=Xl("canvas");return s.style.display="block",s}const om={};function Ko(s){s in om||(om[s]=!0,console.warn(s))}function cx(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const am=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lm=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ux(){const s={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===kt&&(a.r=Gi(a.r),a.g=Gi(a.g),a.b=Gi(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===kt&&(a.r=Ys(a.r),a.g=Ys(a.g),a.b=Ys(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Mr?Gl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Ko("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Ko("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Zs]:{primaries:e,whitePoint:r,transfer:Gl,toXYZ:am,fromXYZ:lm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:am,fromXYZ:lm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),s}const Ct=ux();function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ds;class dx{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ds===void 0&&(Ds=Xl("canvas")),Ds.width=e.width,Ds.height=e.height;const a=Ds.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Ds}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Gi(l[u]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Gi(n[r]/255)*255):n[r]=Gi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fx=0;class _f{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Zo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(zu(a[u].image)):l.push(zu(a[u]))}else l=zu(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function zu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hx=0;const Bu=new re;class Cn extends eo{constructor(e=Cn.DEFAULT_IMAGE,n=Cn.DEFAULT_MAPPING,r=gi,a=gi,l=Fn,u=ns,f=ni,m=Xi,p=Cn.DEFAULT_ANISOTROPY,v=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Zo(),this.name="",this.source=new _f(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bu).x}get height(){return this.source.getSize(Bu).y}get depth(){return this.source.getSize(Bu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cd:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case Rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cd:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case Rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=dg;Cn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,n=0,r=0,a=1){qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const m=e.elements,p=m[0],v=m[4],_=m[8],x=m[1],M=m[5],T=m[9],b=m[2],y=m[6],g=m[10];if(Math.abs(v-x)<.01&&Math.abs(_-b)<.01&&Math.abs(T-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+b)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(p+1)/2,P=(M+1)/2,H=(g+1)/2,O=(v+x)/4,z=(_+b)/4,V=(T+y)/4;return N>P&&N>H?N<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(N),a=O/r,l=z/r):P>H?P<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),r=O/a,l=V/a):H<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(H),r=z/l,a=V/l),this.set(r,a,l,n),this}let k=Math.sqrt((y-T)*(y-T)+(_-b)*(_-b)+(x-v)*(x-v));return Math.abs(k)<.001&&(k=1),this.x=(y-T)/k,this.y=(_-b)/k,this.z=(x-v)/k,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this.w=Mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this.w=Mt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class px extends eo{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n);const a={width:e,height:n,depth:r.depth},l=new Cn(a);this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new _f(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends px{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Mg extends Cn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=jn,this.minFilter=jn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mx extends Cn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=jn,this.minFilter=jn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(e=new re(1/0,1/0,1/0),n=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,di):di.fromBufferAttribute(l,u),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ul.copy(r.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),dl.subVectors(this.max,zo),Ls.subVectors(e.a,zo),Ns.subVectors(e.b,zo),Is.subVectors(e.c,zo),mr.subVectors(Ns,Ls),gr.subVectors(Is,Ns),Xr.subVectors(Ls,Is);let n=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Xr.z,Xr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Xr.z,0,-Xr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Xr.y,Xr.x,0];return!Vu(n,Ls,Ns,Is,dl)||(n=[1,0,0,0,1,0,0,0,1],!Vu(n,Ls,Ns,Is,dl))?!1:(fl.crossVectors(mr,gr),n=[fl.x,fl.y,fl.z],Vu(n,Ls,Ns,Is,dl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ui=[new re,new re,new re,new re,new re,new re,new re,new re],di=new re,ul=new Jo,Ls=new re,Ns=new re,Is=new re,mr=new re,gr=new re,Xr=new re,zo=new re,dl=new re,fl=new re,jr=new re;function Vu(s,e,n,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){jr.fromArray(s,l);const f=a.x*Math.abs(jr.x)+a.y*Math.abs(jr.y)+a.z*Math.abs(jr.z),m=e.dot(jr),p=n.dot(jr),v=r.dot(jr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>f)return!1}return!0}const gx=new Jo,Bo=new re,Hu=new re;class Kl{constructor(e=new re,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):gx.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const n=Bo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Bo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(Hu)),this.expandByPoint(Bo.copy(e.center).sub(Hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fi=new re,Gu=new re,hl=new re,vr=new re,Wu=new re,pl=new re,Xu=new re;class Eg{constructor(e=new re,n=new re(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,n),Fi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Gu.copy(e).add(n).multiplyScalar(.5),hl.copy(n).sub(e).normalize(),vr.copy(this.origin).sub(Gu);const l=e.distanceTo(n)*.5,u=-this.direction.dot(hl),f=vr.dot(this.direction),m=-vr.dot(hl),p=vr.lengthSq(),v=Math.abs(1-u*u);let _,x,M,T;if(v>0)if(_=u*m-f,x=u*f-m,T=l*v,_>=0)if(x>=-T)if(x<=T){const b=1/v;_*=b,x*=b,M=_*(_+u*x+2*f)+x*(u*_+x+2*m)+p}else x=l,_=Math.max(0,-(u*x+f)),M=-_*_+x*(x+2*m)+p;else x=-l,_=Math.max(0,-(u*x+f)),M=-_*_+x*(x+2*m)+p;else x<=-T?(_=Math.max(0,-(-u*l+f)),x=_>0?-l:Math.min(Math.max(-l,-m),l),M=-_*_+x*(x+2*m)+p):x<=T?(_=0,x=Math.min(Math.max(-l,-m),l),M=x*(x+2*m)+p):(_=Math.max(0,-(u*l+f)),x=_>0?l:Math.min(Math.max(-l,-m),l),M=-_*_+x*(x+2*m)+p);else x=u>0?-l:l,_=Math.max(0,-(u*x+f)),M=-_*_+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(Gu).addScaledVector(hl,x),M}intersectSphere(e,n){Fi.subVectors(e.center,this.origin);const r=Fi.dot(this.direction),a=Fi.dot(Fi)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=r-u,m=r+u;return m<0?null:f<0?this.at(m,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,u,f,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),v>=0?(l=(e.min.y-x.y)*v,u=(e.max.y-x.y)*v):(l=(e.max.y-x.y)*v,u=(e.min.y-x.y)*v),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),_>=0?(f=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(f=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),r>m||f>a)||((f>r||r!==r)&&(r=f),(m<a||a!==a)&&(a=m),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,n,r,a,l){Wu.subVectors(n,e),pl.subVectors(r,e),Xu.crossVectors(Wu,pl);let u=this.direction.dot(Xu),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;vr.subVectors(this.origin,e);const m=f*this.direction.dot(pl.crossVectors(vr,pl));if(m<0)return null;const p=f*this.direction.dot(Wu.cross(vr));if(p<0||m+p>u)return null;const v=-f*vr.dot(Xu);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,n,r,a,l,u,f,m,p,v,_,x,M,T,b,y){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,u,f,m,p,v,_,x,M,T,b,y)}set(e,n,r,a,l,u,f,m,p,v,_,x,M,T,b,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=l,g[5]=u,g[9]=f,g[13]=m,g[2]=p,g[6]=v,g[10]=_,g[14]=x,g[3]=M,g[7]=T,g[11]=b,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Us.setFromMatrixColumn(e,0).length(),l=1/Us.setFromMatrixColumn(e,1).length(),u=1/Us.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),m=Math.cos(a),p=Math.sin(a),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const x=u*v,M=u*_,T=f*v,b=f*_;n[0]=m*v,n[4]=-m*_,n[8]=p,n[1]=M+T*p,n[5]=x-b*p,n[9]=-f*m,n[2]=b-x*p,n[6]=T+M*p,n[10]=u*m}else if(e.order==="YXZ"){const x=m*v,M=m*_,T=p*v,b=p*_;n[0]=x+b*f,n[4]=T*f-M,n[8]=u*p,n[1]=u*_,n[5]=u*v,n[9]=-f,n[2]=M*f-T,n[6]=b+x*f,n[10]=u*m}else if(e.order==="ZXY"){const x=m*v,M=m*_,T=p*v,b=p*_;n[0]=x-b*f,n[4]=-u*_,n[8]=T+M*f,n[1]=M+T*f,n[5]=u*v,n[9]=b-x*f,n[2]=-u*p,n[6]=f,n[10]=u*m}else if(e.order==="ZYX"){const x=u*v,M=u*_,T=f*v,b=f*_;n[0]=m*v,n[4]=T*p-M,n[8]=x*p+b,n[1]=m*_,n[5]=b*p+x,n[9]=M*p-T,n[2]=-p,n[6]=f*m,n[10]=u*m}else if(e.order==="YZX"){const x=u*m,M=u*p,T=f*m,b=f*p;n[0]=m*v,n[4]=b-x*_,n[8]=T*_+M,n[1]=_,n[5]=u*v,n[9]=-f*v,n[2]=-p*v,n[6]=M*_+T,n[10]=x-b*_}else if(e.order==="XZY"){const x=u*m,M=u*p,T=f*m,b=f*p;n[0]=m*v,n[4]=-_,n[8]=p*v,n[1]=x*_+b,n[5]=u*v,n[9]=M*_-T,n[2]=T*_-M,n[6]=f*v,n[10]=b*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vx,e,_x)}lookAt(e,n,r){const a=this.elements;return Wn.subVectors(e,n),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),_r.crossVectors(r,Wn),_r.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),_r.crossVectors(r,Wn)),_r.normalize(),ml.crossVectors(Wn,_r),a[0]=_r.x,a[4]=ml.x,a[8]=Wn.x,a[1]=_r.y,a[5]=ml.y,a[9]=Wn.y,a[2]=_r.z,a[6]=ml.z,a[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,u=r[0],f=r[4],m=r[8],p=r[12],v=r[1],_=r[5],x=r[9],M=r[13],T=r[2],b=r[6],y=r[10],g=r[14],k=r[3],N=r[7],P=r[11],H=r[15],O=a[0],z=a[4],V=a[8],R=a[12],C=a[1],G=a[5],Z=a[9],le=a[13],ue=a[2],de=a[6],te=a[10],fe=a[14],D=a[3],he=a[7],ce=a[11],I=a[15];return l[0]=u*O+f*C+m*ue+p*D,l[4]=u*z+f*G+m*de+p*he,l[8]=u*V+f*Z+m*te+p*ce,l[12]=u*R+f*le+m*fe+p*I,l[1]=v*O+_*C+x*ue+M*D,l[5]=v*z+_*G+x*de+M*he,l[9]=v*V+_*Z+x*te+M*ce,l[13]=v*R+_*le+x*fe+M*I,l[2]=T*O+b*C+y*ue+g*D,l[6]=T*z+b*G+y*de+g*he,l[10]=T*V+b*Z+y*te+g*ce,l[14]=T*R+b*le+y*fe+g*I,l[3]=k*O+N*C+P*ue+H*D,l[7]=k*z+N*G+P*de+H*he,l[11]=k*V+N*Z+P*te+H*ce,l[15]=k*R+N*le+P*fe+H*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],u=e[1],f=e[5],m=e[9],p=e[13],v=e[2],_=e[6],x=e[10],M=e[14],T=e[3],b=e[7],y=e[11],g=e[15];return T*(+l*m*_-a*p*_-l*f*x+r*p*x+a*f*M-r*m*M)+b*(+n*m*M-n*p*x+l*u*x-a*u*M+a*p*v-l*m*v)+y*(+n*p*_-n*f*M-l*u*_+r*u*M+l*f*v-r*p*v)+g*(-a*f*v-n*m*_+n*f*x+a*u*_-r*u*x+r*m*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],v=e[8],_=e[9],x=e[10],M=e[11],T=e[12],b=e[13],y=e[14],g=e[15],k=_*y*p-b*x*p+b*m*M-f*y*M-_*m*g+f*x*g,N=T*x*p-v*y*p-T*m*M+u*y*M+v*m*g-u*x*g,P=v*b*p-T*_*p+T*f*M-u*b*M-v*f*g+u*_*g,H=T*_*m-v*b*m-T*f*x+u*b*x+v*f*y-u*_*y,O=n*k+r*N+a*P+l*H;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/O;return e[0]=k*z,e[1]=(b*x*l-_*y*l-b*a*M+r*y*M+_*a*g-r*x*g)*z,e[2]=(f*y*l-b*m*l+b*a*p-r*y*p-f*a*g+r*m*g)*z,e[3]=(_*m*l-f*x*l-_*a*p+r*x*p+f*a*M-r*m*M)*z,e[4]=N*z,e[5]=(v*y*l-T*x*l+T*a*M-n*y*M-v*a*g+n*x*g)*z,e[6]=(T*m*l-u*y*l-T*a*p+n*y*p+u*a*g-n*m*g)*z,e[7]=(u*x*l-v*m*l+v*a*p-n*x*p-u*a*M+n*m*M)*z,e[8]=P*z,e[9]=(T*_*l-v*b*l-T*r*M+n*b*M+v*r*g-n*_*g)*z,e[10]=(u*b*l-T*f*l+T*r*p-n*b*p-u*r*g+n*f*g)*z,e[11]=(v*f*l-u*_*l-v*r*p+n*_*p+u*r*M-n*f*M)*z,e[12]=H*z,e[13]=(v*b*a-T*_*a+T*r*x-n*b*x-v*r*y+n*_*y)*z,e[14]=(T*f*a-u*b*a-T*r*m+n*b*m+u*r*y-n*f*y)*z,e[15]=(u*_*a-v*f*a+v*r*m-n*_*m-u*r*x+n*f*x)*z,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,u=e.x,f=e.y,m=e.z,p=l*u,v=l*f;return this.set(p*u+r,p*f-a*m,p*m+a*f,0,p*f+a*m,v*f+r,v*m-a*u,0,p*m-a*f,v*m+a*u,l*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,u=n._y,f=n._z,m=n._w,p=l+l,v=u+u,_=f+f,x=l*p,M=l*v,T=l*_,b=u*v,y=u*_,g=f*_,k=m*p,N=m*v,P=m*_,H=r.x,O=r.y,z=r.z;return a[0]=(1-(b+g))*H,a[1]=(M+P)*H,a[2]=(T-N)*H,a[3]=0,a[4]=(M-P)*O,a[5]=(1-(x+g))*O,a[6]=(y+k)*O,a[7]=0,a[8]=(T+N)*z,a[9]=(y-k)*z,a[10]=(1-(x+b))*z,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Us.set(a[0],a[1],a[2]).length();const u=Us.set(a[4],a[5],a[6]).length(),f=Us.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],fi.copy(this);const p=1/l,v=1/u,_=1/f;return fi.elements[0]*=p,fi.elements[1]*=p,fi.elements[2]*=p,fi.elements[4]*=v,fi.elements[5]*=v,fi.elements[6]*=v,fi.elements[8]*=_,fi.elements[9]*=_,fi.elements[10]*=_,n.setFromRotationMatrix(fi),r.x=l,r.y=u,r.z=f,this}makePerspective(e,n,r,a,l,u,f=wi,m=!1){const p=this.elements,v=2*l/(n-e),_=2*l/(r-a),x=(n+e)/(n-e),M=(r+a)/(r-a);let T,b;if(m)T=l/(u-l),b=u*l/(u-l);else if(f===wi)T=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(f===Wl)T=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,l,u,f=wi,m=!1){const p=this.elements,v=2/(n-e),_=2/(r-a),x=-(n+e)/(n-e),M=-(r+a)/(r-a);let T,b;if(m)T=1/(u-l),b=u/(u-l);else if(f===wi)T=-2/(u-l),b=-(u+l)/(u-l);else if(f===Wl)T=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Us=new re,fi=new Jt,vx=new re(0,0,0),_x=new re(1,1,1),_r=new re,ml=new re,Wn=new re,cm=new Jt,um=new Qo;class ji{constructor(e=0,n=0,r=0,a=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],m=a[1],p=a[5],v=a[9],_=a[2],x=a[6],M=a[10];switch(n){case"XYZ":this._y=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return um.setFromEuler(this),this.setFromQuaternion(um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class wg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xx=0;const dm=new re,Fs=new Qo,ki=new Jt,gl=new re,Vo=new re,yx=new re,Sx=new Qo,fm=new re(1,0,0),hm=new re(0,1,0),pm=new re(0,0,1),mm={type:"added"},Mx={type:"removed"},ks={type:"childadded",child:null},ju={type:"childremoved",child:null};class On extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new re,n=new ji,r=new Qo,a=new re(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Jt},normalMatrix:{value:new gt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,n){return Fs.setFromAxisAngle(e,n),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(fm,e)}rotateY(e){return this.rotateOnAxis(hm,e)}rotateZ(e){return this.rotateOnAxis(pm,e)}translateOnAxis(e,n){return dm.copy(e).applyQuaternion(this.quaternion),this.position.add(dm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fm,e)}translateY(e){return this.translateOnAxis(hm,e)}translateZ(e){return this.translateOnAxis(pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?gl.copy(e):gl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Vo,gl,this.up):ki.lookAt(gl,Vo,this.up),this.quaternion.setFromRotationMatrix(ki),a&&(ki.extractRotation(a.matrixWorld),Fs.setFromRotationMatrix(ki),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mm),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Mx),ju.child=e,this.dispatchEvent(ju),ju.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mm),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,yx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,Sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];l(e.shapes,_)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(l(e.materials,this.material[m]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];a.animations.push(l(e.animations,m))}}if(n){const f=u(e.geometries),m=u(e.materials),p=u(e.textures),v=u(e.images),_=u(e.shapes),x=u(e.skeletons),M=u(e.animations),T=u(e.nodes);f.length>0&&(r.geometries=f),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=a,r;function u(f){const m=[];for(const p in f){const v=f[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}On.DEFAULT_UP=new re(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new re,Oi=new re,Yu=new re,zi=new re,Os=new re,zs=new re,gm=new re,qu=new re,$u=new re,Ku=new re,Zu=new qt,Qu=new qt,Ju=new qt;class mi{constructor(e=new re,n=new re,r=new re){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),hi.subVectors(e,n),a.cross(hi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){hi.subVectors(a,n),Oi.subVectors(r,n),Yu.subVectors(e,n);const u=hi.dot(hi),f=hi.dot(Oi),m=hi.dot(Yu),p=Oi.dot(Oi),v=Oi.dot(Yu),_=u*p-f*f;if(_===0)return l.set(0,0,0),null;const x=1/_,M=(p*m-f*v)*x,T=(u*v-f*m)*x;return l.set(1-M-T,T,M)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,n,r,a,l,u,f,m){return this.getBarycoord(e,n,r,a,zi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,zi.x),m.addScaledVector(u,zi.y),m.addScaledVector(f,zi.z),m)}static getInterpolatedAttribute(e,n,r,a,l,u){return Zu.setScalar(0),Qu.setScalar(0),Ju.setScalar(0),Zu.fromBufferAttribute(e,n),Qu.fromBufferAttribute(e,r),Ju.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Zu,l.x),u.addScaledVector(Qu,l.y),u.addScaledVector(Ju,l.z),u}static isFrontFacing(e,n,r,a){return hi.subVectors(r,n),Oi.subVectors(e,n),hi.cross(Oi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),hi.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return mi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return mi.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let u,f;Os.subVectors(a,r),zs.subVectors(l,r),qu.subVectors(e,r);const m=Os.dot(qu),p=zs.dot(qu);if(m<=0&&p<=0)return n.copy(r);$u.subVectors(e,a);const v=Os.dot($u),_=zs.dot($u);if(v>=0&&_<=v)return n.copy(a);const x=m*_-v*p;if(x<=0&&m>=0&&v<=0)return u=m/(m-v),n.copy(r).addScaledVector(Os,u);Ku.subVectors(e,l);const M=Os.dot(Ku),T=zs.dot(Ku);if(T>=0&&M<=T)return n.copy(l);const b=M*p-m*T;if(b<=0&&p>=0&&T<=0)return f=p/(p-T),n.copy(r).addScaledVector(zs,f);const y=v*T-M*_;if(y<=0&&_-v>=0&&M-T>=0)return gm.subVectors(l,a),f=(_-v)/(_-v+(M-T)),n.copy(a).addScaledVector(gm,f);const g=1/(y+b+x);return u=b*g,f=x*g,n.copy(r).addScaledVector(Os,u).addScaledVector(zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},vl={h:0,s:0,l:0};function ed(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Rt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,n),this}setRGB(e,n,r,a=Ct.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ct.colorSpaceToWorking(this,a),this}setHSL(e,n,r,a=Ct.workingColorSpace){if(e=ax(e,1),n=Mt(n,0,1),r=Mt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=ed(u,l,e+1/3),this.g=ed(u,l,e),this.b=ed(u,l,e-1/3)}return Ct.colorSpaceToWorking(this,a),this}setStyle(e,n=ti){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ti){const r=Tg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Ct.workingToColorSpace(Mn.copy(this),e),Math.round(Mt(Mn.r*255,0,255))*65536+Math.round(Mt(Mn.g*255,0,255))*256+Math.round(Mt(Mn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ct.workingColorSpace){Ct.workingToColorSpace(Mn.copy(this),n);const r=Mn.r,a=Mn.g,l=Mn.b,u=Math.max(r,a,l),f=Math.min(r,a,l);let m,p;const v=(f+u)/2;if(f===u)m=0,p=0;else{const _=u-f;switch(p=v<=.5?_/(u+f):_/(2-u-f),u){case r:m=(a-l)/_+(a<l?6:0);break;case a:m=(l-r)/_+2;break;case l:m=(r-a)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,n=Ct.workingColorSpace){return Ct.workingToColorSpace(Mn.copy(this),n),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ti){Ct.workingToColorSpace(Mn.copy(this),e);const n=Mn.r,r=Mn.g,a=Mn.b;return e!==ti?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+n,xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(xr),e.getHSL(vl);const r=Fu(xr.h,vl.h,n),a=Fu(xr.s,vl.s,n),l=Fu(xr.l,vl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Rt;Rt.NAMES=Tg;let Ex=0;class ea extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=Zo(),this.name="",this.type="Material",this.blending=js,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vd,this.blendDst=_d,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vd&&(r.blendSrc=this.blendSrc),this.blendDst!==_d&&(r.blendDst=this.blendDst),this.blendEquation!==es&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const f in l){const m=l[f];delete m.metadata,u.push(m)}return u}if(n){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bg extends ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new re,_l=new mt;let wx=0;class vi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wx++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=im,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)_l.fromBufferAttribute(this,n),_l.applyMatrix3(e),this.setXY(n,_l.x,_l.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix3(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Oo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Oo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Oo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Oo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Oo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array),a=Un(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array),a=Un(a,this.array),l=Un(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==im&&(e.usage=this.usage),e}}class Ag extends vi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Cg extends vi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Wi extends vi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Tx=0;const ei=new Jt,td=new On,Bs=new re,Xn=new Jo,Ho=new Jo,un=new re;class qi extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sg(e)?Cg:Ag)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new gt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,n,r){return ei.makeTranslation(e,n,r),this.applyMatrix4(ei),this}scale(e,n,r){return ei.makeScale(e,n,r),this.applyMatrix4(ei),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Wi(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];Ho.setFromBufferAttribute(f),this.morphTargetsRelative?(un.addVectors(Xn.min,Ho.min),Xn.expandByPoint(un),un.addVectors(Xn.max,Ho.max),Xn.expandByPoint(un)):(Xn.expandByPoint(Ho.min),Xn.expandByPoint(Ho.max))}Xn.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)un.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(un));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],m=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)un.fromBufferAttribute(f,p),m&&(Bs.fromBufferAttribute(e,p),un.add(Bs)),a=Math.max(a,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],m=[];for(let V=0;V<r.count;V++)f[V]=new re,m[V]=new re;const p=new re,v=new re,_=new re,x=new mt,M=new mt,T=new mt,b=new re,y=new re;function g(V,R,C){p.fromBufferAttribute(r,V),v.fromBufferAttribute(r,R),_.fromBufferAttribute(r,C),x.fromBufferAttribute(l,V),M.fromBufferAttribute(l,R),T.fromBufferAttribute(l,C),v.sub(p),_.sub(p),M.sub(x),T.sub(x);const G=1/(M.x*T.y-T.x*M.y);isFinite(G)&&(b.copy(v).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(G),y.copy(_).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(G),f[V].add(b),f[R].add(b),f[C].add(b),m[V].add(y),m[R].add(y),m[C].add(y))}let k=this.groups;k.length===0&&(k=[{start:0,count:e.count}]);for(let V=0,R=k.length;V<R;++V){const C=k[V],G=C.start,Z=C.count;for(let le=G,ue=G+Z;le<ue;le+=3)g(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const N=new re,P=new re,H=new re,O=new re;function z(V){H.fromBufferAttribute(a,V),O.copy(H);const R=f[V];N.copy(R),N.sub(H.multiplyScalar(H.dot(R))).normalize(),P.crossVectors(O,R);const G=P.dot(m[V])<0?-1:1;u.setXYZW(V,N.x,N.y,N.z,G)}for(let V=0,R=k.length;V<R;++V){const C=k[V],G=C.start,Z=C.count;for(let le=G,ue=G+Z;le<ue;le+=3)z(e.getX(le+0)),z(e.getX(le+1)),z(e.getX(le+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const a=new re,l=new re,u=new re,f=new re,m=new re,p=new re,v=new re,_=new re;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),b=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,T),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),v.subVectors(u,l),_.subVectors(a,l),v.cross(_),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,y),f.add(v),m.add(v),p.add(v),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=n.count;x<M;x+=3)a.fromBufferAttribute(n,x+0),l.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),v.subVectors(u,l),_.subVectors(a,l),v.cross(_),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)un.fromBufferAttribute(e,n),un.normalize(),e.setXYZ(n,un.x,un.y,un.z)}toNonIndexed(){function e(f,m){const p=f.array,v=f.itemSize,_=f.normalized,x=new p.constructor(m.length*v);let M=0,T=0;for(let b=0,y=m.length;b<y;b++){f.isInterleavedBufferAttribute?M=m[b]*f.data.stride+f.offset:M=m[b]*v;for(let g=0;g<v;g++)x[T++]=p[M++]}return new vi(x,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qi,r=this.index.array,a=this.attributes;for(const f in a){const m=a[f],p=e(m,r);n.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const m=[],p=l[f];for(let v=0,_=p.length;v<_;v++){const x=p[v],M=e(x,r);m.push(M)}n.morphAttributes[f]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,m=u.length;f<m;f++){const p=u[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const a={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];v.push(M.toJSON(e.data))}v.length>0&&(a[m]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const v=a[p];this.setAttribute(p,v.clone(n))}const l=e.morphAttributes;for(const p in l){const v=[],_=l[p];for(let x=0,M=_.length;x<M;x++)v.push(_[x].clone(n));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vm=new Jt,Yr=new Eg,xl=new Kl,_m=new re,yl=new re,Sl=new re,Ml=new re,nd=new re,El=new re,xm=new re,wl=new re;class ii extends On{constructor(e=new qi,n=new bg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){El.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const v=f[m],_=l[m];v!==0&&(nd.fromBufferAttribute(_,e),u?El.addScaledVector(nd,v):El.addScaledVector(nd.sub(n),v))}n.add(El)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xl.copy(r.boundingSphere),xl.applyMatrix4(l),Yr.copy(e.ray).recast(e.near),!(xl.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(xl,_m)===null||Yr.origin.distanceToSquared(_m)>(e.far-e.near)**2))&&(vm.copy(l).invert(),Yr.copy(e.ray).applyMatrix4(vm),!(r.boundingBox!==null&&Yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Yr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,u=this.material,f=l.index,m=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,x=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,b=x.length;T<b;T++){const y=x[T],g=u[y.materialIndex],k=Math.max(y.start,M.start),N=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let P=k,H=N;P<H;P+=3){const O=f.getX(P),z=f.getX(P+1),V=f.getX(P+2);a=Tl(this,g,e,r,p,v,_,O,z,V),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,M.start),b=Math.min(f.count,M.start+M.count);for(let y=T,g=b;y<g;y+=3){const k=f.getX(y),N=f.getX(y+1),P=f.getX(y+2);a=Tl(this,u,e,r,p,v,_,k,N,P),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(m!==void 0)if(Array.isArray(u))for(let T=0,b=x.length;T<b;T++){const y=x[T],g=u[y.materialIndex],k=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let P=k,H=N;P<H;P+=3){const O=P,z=P+1,V=P+2;a=Tl(this,g,e,r,p,v,_,O,z,V),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let y=T,g=b;y<g;y+=3){const k=y,N=y+1,P=y+2;a=Tl(this,u,e,r,p,v,_,k,N,P),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function bx(s,e,n,r,a,l,u,f){let m;if(e.side===kn?m=r.intersectTriangle(u,l,a,!0,f):m=r.intersectTriangle(a,l,u,e.side===Ar,f),m===null)return null;wl.copy(f),wl.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(wl);return p<n.near||p>n.far?null:{distance:p,point:wl.clone(),object:s}}function Tl(s,e,n,r,a,l,u,f,m,p){s.getVertexPosition(f,yl),s.getVertexPosition(m,Sl),s.getVertexPosition(p,Ml);const v=bx(s,e,n,r,yl,Sl,Ml,xm);if(v){const _=new re;mi.getBarycoord(xm,yl,Sl,Ml,_),a&&(v.uv=mi.getInterpolatedAttribute(a,f,m,p,_,new mt)),l&&(v.uv1=mi.getInterpolatedAttribute(l,f,m,p,_,new mt)),u&&(v.normal=mi.getInterpolatedAttribute(u,f,m,p,_,new re),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:f,b:m,c:p,normal:new re,materialIndex:0};mi.getNormal(yl,Sl,Ml,x.normal),v.face=x,v.barycoord=_}return v}class ta extends qi{constructor(e=1,n=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const m=[],p=[],v=[],_=[];let x=0,M=0;T("z","y","x",-1,-1,r,n,e,u,l,0),T("z","y","x",1,-1,r,n,-e,u,l,1),T("x","z","y",1,1,e,r,n,a,u,2),T("x","z","y",1,-1,e,r,-n,a,u,3),T("x","y","z",1,-1,e,n,r,a,l,4),T("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(m),this.setAttribute("position",new Wi(p,3)),this.setAttribute("normal",new Wi(v,3)),this.setAttribute("uv",new Wi(_,2));function T(b,y,g,k,N,P,H,O,z,V,R){const C=P/z,G=H/V,Z=P/2,le=H/2,ue=O/2,de=z+1,te=V+1;let fe=0,D=0;const he=new re;for(let ce=0;ce<te;ce++){const I=ce*G-le;for(let ne=0;ne<de;ne++){const Ae=ne*C-Z;he[b]=Ae*k,he[y]=I*N,he[g]=ue,p.push(he.x,he.y,he.z),he[b]=0,he[y]=0,he[g]=O>0?1:-1,v.push(he.x,he.y,he.z),_.push(ne/z),_.push(1-ce/V),fe+=1}}for(let ce=0;ce<V;ce++)for(let I=0;I<z;I++){const ne=x+I+de*ce,Ae=x+I+de*(ce+1),Ce=x+(I+1)+de*(ce+1),Ue=x+(I+1)+de*ce;m.push(ne,Ae,Ue),m.push(Ae,Ce,Ue),D+=6}f.addGroup(M,D,R),M+=D,x+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function An(s){const e={};for(let n=0;n<s.length;n++){const r=Qs(s[n]);for(const a in r)e[a]=r[a]}return e}function Ax(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Rg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const Cx={clone:Qs,merge:An};var Rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rx,this.fragmentShader=Px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=Ax(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?n.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[a]={type:"m4",value:u.toArray()}:n.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class jl extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new re,ym=new mt,Sm=new mt;class pi extends jl{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sf*2*Math.atan(Math.tan(Uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,n){return this.getViewBounds(e,ym,Sm),n.subVectors(Sm,ym)}setViewOffset(e,n,r,a,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Uu*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/m,n-=u.offsetY*r/p,a*=u.width/m,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Vs=-90,Hs=1;class Dx extends On{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new pi(Vs,Hs,e,n);a.layers=this.layers,this.add(a);const l=new pi(Vs,Hs,e,n);l.layers=this.layers,this.add(l);const u=new pi(Vs,Hs,e,n);u.layers=this.layers,this.add(u);const f=new pi(Vs,Hs,e,n);f.layers=this.layers,this.add(f);const m=new pi(Vs,Hs,e,n);m.layers=this.layers,this.add(m);const p=new pi(Vs,Hs,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,u,f,m]=n;for(const p of n)this.remove(p);if(e===wi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Wl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,m,p,v]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,u),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,m),e.setRenderTarget(r,4,a),e.render(n,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(_,x,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Pg extends Cn{constructor(e=[],n=$s,r,a,l,u,f,m,p,v){super(e,n,r,a,l,u,f,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lx extends Cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Pg(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ta(5,5,5),l=new Yi({name:"CubemapFromEquirect",uniforms:Qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Tr});l.uniforms.tEquirect.value=n;const u=new ii(a,l),f=n.minFilter;return n.minFilter===ns&&(n.minFilter=Fn),new Dx(1,10,this).update(e,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,a);e.setRenderTarget(l)}}class bl extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nx={type:"move"};class id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,u=null;const f=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const b of e.hand.values()){const y=n.getJointPose(b,r),g=this._getHandJoint(p,b);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=v.position.distanceTo(_.position),M=.02,T=.005;p.inputState.pinching&&x>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Nx)))}return f!==null&&(f.visible=a!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new bl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Mm extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ix extends Cn{constructor(e=null,n=1,r=1,a,l,u,f,m,p=jn,v=jn,_,x){super(null,u,f,m,p,v,a,l,_,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rd=new re,Ux=new re,Fx=new gt;class Qr{constructor(e=new re(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=rd.subVectors(r,n).cross(Ux.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(rd),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Fx.getNormalMatrix(e),a=this.coplanarPoint(rd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Kl,kx=new mt(.5,.5),Al=new re;class Dg{constructor(e=new Qr,n=new Qr,r=new Qr,a=new Qr,l=new Qr,u=new Qr){this.planes=[e,n,r,a,l,u]}set(e,n,r,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=wi,r=!1){const a=this.planes,l=e.elements,u=l[0],f=l[1],m=l[2],p=l[3],v=l[4],_=l[5],x=l[6],M=l[7],T=l[8],b=l[9],y=l[10],g=l[11],k=l[12],N=l[13],P=l[14],H=l[15];if(a[0].setComponents(p-u,M-v,g-T,H-k).normalize(),a[1].setComponents(p+u,M+v,g+T,H+k).normalize(),a[2].setComponents(p+f,M+_,g+b,H+N).normalize(),a[3].setComponents(p-f,M-_,g-b,H-N).normalize(),r)a[4].setComponents(m,x,y,P).normalize(),a[5].setComponents(p-m,M-x,g-y,H-P).normalize();else if(a[4].setComponents(p-m,M-x,g-y,H-P).normalize(),n===wi)a[5].setComponents(p+m,M+x,g+y,H+P).normalize();else if(n===Wl)a[5].setComponents(m,x,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);const n=kx.distanceTo(e.center);return qr.radius=.7071067811865476+n,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Al.x=a.normal.x>0?e.max.x:e.min.x,Al.y=a.normal.y>0?e.max.y:e.min.y,Al.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ox extends ea{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yl=new re,ql=new re,Em=new Jt,Go=new Eg,Cl=new Kl,sd=new re,wm=new re;class zx extends On{constructor(e=new qi,n=new Ox){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,l=n.count;a<l;a++)Yl.fromBufferAttribute(n,a-1),ql.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Yl.distanceTo(ql);e.setAttribute("lineDistance",new Wi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Cl.copy(r.boundingSphere),Cl.applyMatrix4(a),Cl.radius+=l,e.ray.intersectsSphere(Cl)===!1)return;Em.copy(a).invert(),Go.copy(e.ray).applyMatrix4(Em);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const M=Math.max(0,u.start),T=Math.min(v.count,u.start+u.count);for(let b=M,y=T-1;b<y;b+=p){const g=v.getX(b),k=v.getX(b+1),N=Rl(this,e,Go,m,g,k,b);N&&n.push(N)}if(this.isLineLoop){const b=v.getX(T-1),y=v.getX(M),g=Rl(this,e,Go,m,b,y,T-1);g&&n.push(g)}}else{const M=Math.max(0,u.start),T=Math.min(x.count,u.start+u.count);for(let b=M,y=T-1;b<y;b+=p){const g=Rl(this,e,Go,m,b,b+1,b);g&&n.push(g)}if(this.isLineLoop){const b=Rl(this,e,Go,m,T-1,M,T-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Rl(s,e,n,r,a,l,u){const f=s.geometry.attributes.position;if(Yl.fromBufferAttribute(f,a),ql.fromBufferAttribute(f,l),n.distanceSqToSegment(Yl,ql,sd,wm)>r)return;sd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(sd);if(!(p<e.near||p>e.far))return{distance:p,point:wm.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const Tm=new re,bm=new re;class Bx extends zx{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,l=n.count;a<l;a+=2)Tm.fromBufferAttribute(n,a),bm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+Tm.distanceTo(bm);e.setAttribute("lineDistance",new Wi(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lg extends Cn{constructor(e,n,r=rs,a,l,u,f=jn,m=jn,p,v=qo,_=1){if(v!==qo&&v!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:_};super(x,a,l,u,f,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _f(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ng extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class is extends qi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,u=n/2,f=Math.floor(r),m=Math.floor(a),p=f+1,v=m+1,_=e/f,x=n/m,M=[],T=[],b=[],y=[];for(let g=0;g<v;g++){const k=g*x-u;for(let N=0;N<p;N++){const P=N*_-l;T.push(P,-k,0),b.push(0,0,1),y.push(N/f),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let k=0;k<f;k++){const N=k+p*g,P=k+p*(g+1),H=k+1+p*(g+1),O=k+1+p*g;M.push(N,P,O),M.push(P,H,O)}this.setIndex(M),this.setAttribute("position",new Wi(T,3)),this.setAttribute("normal",new Wi(b,3)),this.setAttribute("uv",new Wi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pl extends Yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vx extends ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=K_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hx extends ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Gx extends jl{constructor(e=-1,n=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=a+n,m=a-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,m=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Wx extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Xx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Am(s,e,n,r){const a=jx(r);switch(n){case gg:return s*e;case _g:return s*e/a.components*a.byteLength;case mf:return s*e/a.components*a.byteLength;case xg:return s*e*2/a.components*a.byteLength;case gf:return s*e*2/a.components*a.byteLength;case vg:return s*e*3/a.components*a.byteLength;case ni:return s*e*4/a.components*a.byteLength;case vf:return s*e*4/a.components*a.byteLength;case Fl:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ol:case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dd:case Nd:return Math.max(s,16)*Math.max(e,8)/4;case Pd:case Ld:return Math.max(s,8)*Math.max(e,8)/2;case Id:case Ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Xd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case qd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case $d:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Zd:case Qd:case Jd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ef:case tf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case nf:case rf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jx(s){switch(s){case Xi:case fg:return{byteLength:1,components:1};case jo:case hg:case Js:return{byteLength:2,components:1};case hf:case pf:return{byteLength:2,components:4};case rs:case ff:case Ei:return{byteLength:4,components:1};case pg:case mg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:df}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=df);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ig(){let s=null,e=!1,n=null,r=null;function a(l,u){n(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function Yx(s){const e=new WeakMap;function n(f,m){const p=f.array,v=f.usage,_=p.byteLength,x=s.createBuffer();s.bindBuffer(m,x),s.bufferData(m,p,v),f.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,m,p){const v=m.array,_=m.updateRanges;if(s.bindBuffer(p,f),_.length===0)s.bufferSubData(p,0,v);else{_.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<_.length;M++){const T=_[x],b=_[M];b.start<=T.start+T.count+1?T.count=Math.max(T.count,b.start+b.count-T.start):(++x,_[x]=b)}_.length=x+1;for(let M=0,T=_.length;M<T;M++){const b=_[M];s.bufferSubData(p,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(s.deleteBuffer(m.buffer),e.delete(f))}function u(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,n(f,m));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,m),p.version=f.version}}return{get:a,remove:l,update:u}}var qx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$x=`#ifdef USE_ALPHAHASH
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
#endif`,Kx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ey=`#ifdef USE_AOMAP
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
#endif`,ty=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ny=`#ifdef USE_BATCHING
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
#endif`,iy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ry=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ay=`#ifdef USE_IRIDESCENCE
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
#endif`,ly=`#ifdef USE_BUMPMAP
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
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,py=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,my=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vy=`#define PI 3.141592653589793
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
} // validated`,_y=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xy=`vec3 transformedNormal = objectNormal;
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
#endif`,yy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,My=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ey=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ty=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,by=`#ifdef USE_ENVMAP
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
#endif`,Ay=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cy=`#ifdef USE_ENVMAP
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
#endif`,Ry=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ly=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ny=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uy=`#ifdef USE_GRADIENTMAP
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
}`,Fy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ky=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zy=`uniform bool receiveShadow;
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
#endif`,By=`#ifdef USE_ENVMAP
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
#endif`,Vy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xy=`PhysicalMaterial material;
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
#endif`,jy=`struct PhysicalMaterial {
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
}`,Yy=`
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
#endif`,qy=`#if defined( RE_IndirectDiffuse )
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
#endif`,$y=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ky=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iS=`#if defined( USE_POINTS_UV )
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
#endif`,rS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cS=`#ifdef USE_MORPHTARGETS
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
#endif`,uS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gS=`#ifdef USE_NORMALMAP
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
#endif`,vS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_S=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ES=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LS=`float getShadowMask() {
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
}`,NS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IS=`#ifdef USE_SKINNING
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
#endif`,US=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FS=`#ifdef USE_SKINNING
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
#endif`,kS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,VS=`#ifdef USE_TRANSMISSION
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
#endif`,HS=`#ifdef USE_TRANSMISSION
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
#endif`,GS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qS=`uniform sampler2D t2D;
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
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`#include <common>
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
}`,eM=`#if DEPTH_PACKING == 3200
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
}`,tM=`#define DISTANCE
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
}`,nM=`#define DISTANCE
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
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`uniform float scale;
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
}`,oM=`uniform vec3 diffuse;
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
}`,aM=`#include <common>
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
}`,lM=`uniform vec3 diffuse;
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
}`,cM=`#define LAMBERT
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
}`,uM=`#define LAMBERT
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
}`,dM=`#define MATCAP
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
}`,fM=`#define MATCAP
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
}`,hM=`#define NORMAL
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
}`,pM=`#define NORMAL
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
}`,mM=`#define PHONG
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
}`,gM=`#define PHONG
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
}`,vM=`#define STANDARD
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
}`,_M=`#define STANDARD
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
}`,xM=`#define TOON
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
}`,yM=`#define TOON
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
}`,SM=`uniform float size;
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
}`,MM=`uniform vec3 diffuse;
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
}`,EM=`#include <common>
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
}`,wM=`uniform vec3 color;
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
}`,TM=`uniform float rotation;
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
}`,bM=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:qx,alphahash_pars_fragment:$x,alphamap_fragment:Kx,alphamap_pars_fragment:Zx,alphatest_fragment:Qx,alphatest_pars_fragment:Jx,aomap_fragment:ey,aomap_pars_fragment:ty,batching_pars_vertex:ny,batching_vertex:iy,begin_vertex:ry,beginnormal_vertex:sy,bsdfs:oy,iridescence_fragment:ay,bumpmap_pars_fragment:ly,clipping_planes_fragment:cy,clipping_planes_pars_fragment:uy,clipping_planes_pars_vertex:dy,clipping_planes_vertex:fy,color_fragment:hy,color_pars_fragment:py,color_pars_vertex:my,color_vertex:gy,common:vy,cube_uv_reflection_fragment:_y,defaultnormal_vertex:xy,displacementmap_pars_vertex:yy,displacementmap_vertex:Sy,emissivemap_fragment:My,emissivemap_pars_fragment:Ey,colorspace_fragment:wy,colorspace_pars_fragment:Ty,envmap_fragment:by,envmap_common_pars_fragment:Ay,envmap_pars_fragment:Cy,envmap_pars_vertex:Ry,envmap_physical_pars_fragment:By,envmap_vertex:Py,fog_vertex:Dy,fog_pars_vertex:Ly,fog_fragment:Ny,fog_pars_fragment:Iy,gradientmap_pars_fragment:Uy,lightmap_pars_fragment:Fy,lights_lambert_fragment:ky,lights_lambert_pars_fragment:Oy,lights_pars_begin:zy,lights_toon_fragment:Vy,lights_toon_pars_fragment:Hy,lights_phong_fragment:Gy,lights_phong_pars_fragment:Wy,lights_physical_fragment:Xy,lights_physical_pars_fragment:jy,lights_fragment_begin:Yy,lights_fragment_maps:qy,lights_fragment_end:$y,logdepthbuf_fragment:Ky,logdepthbuf_pars_fragment:Zy,logdepthbuf_pars_vertex:Qy,logdepthbuf_vertex:Jy,map_fragment:eS,map_pars_fragment:tS,map_particle_fragment:nS,map_particle_pars_fragment:iS,metalnessmap_fragment:rS,metalnessmap_pars_fragment:sS,morphinstance_vertex:oS,morphcolor_vertex:aS,morphnormal_vertex:lS,morphtarget_pars_vertex:cS,morphtarget_vertex:uS,normal_fragment_begin:dS,normal_fragment_maps:fS,normal_pars_fragment:hS,normal_pars_vertex:pS,normal_vertex:mS,normalmap_pars_fragment:gS,clearcoat_normal_fragment_begin:vS,clearcoat_normal_fragment_maps:_S,clearcoat_pars_fragment:xS,iridescence_pars_fragment:yS,opaque_fragment:SS,packing:MS,premultiplied_alpha_fragment:ES,project_vertex:wS,dithering_fragment:TS,dithering_pars_fragment:bS,roughnessmap_fragment:AS,roughnessmap_pars_fragment:CS,shadowmap_pars_fragment:RS,shadowmap_pars_vertex:PS,shadowmap_vertex:DS,shadowmask_pars_fragment:LS,skinbase_vertex:NS,skinning_pars_vertex:IS,skinning_vertex:US,skinnormal_vertex:FS,specularmap_fragment:kS,specularmap_pars_fragment:OS,tonemapping_fragment:zS,tonemapping_pars_fragment:BS,transmission_fragment:VS,transmission_pars_fragment:HS,uv_pars_fragment:GS,uv_pars_vertex:WS,uv_vertex:XS,worldpos_vertex:jS,background_vert:YS,background_frag:qS,backgroundCube_vert:$S,backgroundCube_frag:KS,cube_vert:ZS,cube_frag:QS,depth_vert:JS,depth_frag:eM,distanceRGBA_vert:tM,distanceRGBA_frag:nM,equirect_vert:iM,equirect_frag:rM,linedashed_vert:sM,linedashed_frag:oM,meshbasic_vert:aM,meshbasic_frag:lM,meshlambert_vert:cM,meshlambert_frag:uM,meshmatcap_vert:dM,meshmatcap_frag:fM,meshnormal_vert:hM,meshnormal_frag:pM,meshphong_vert:mM,meshphong_frag:gM,meshphysical_vert:vM,meshphysical_frag:_M,meshtoon_vert:xM,meshtoon_frag:yM,points_vert:SM,points_frag:MM,shadow_vert:EM,shadow_frag:wM,sprite_vert:TM,sprite_frag:bM},Ne={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Mi={basic:{uniforms:An([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:An([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Rt(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:An([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:An([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:An([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Rt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:An([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:An([Ne.points,Ne.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:An([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:An([Ne.common,Ne.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:An([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:An([Ne.sprite,Ne.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:An([Ne.common,Ne.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:An([Ne.lights,Ne.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Mi.physical={uniforms:An([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Dl={r:0,b:0,g:0},$r=new ji,AM=new Jt;function CM(s,e,n,r,a,l,u){const f=new Rt(0);let m=l===!0?0:1,p,v,_=null,x=0,M=null;function T(N){let P=N.isScene===!0?N.background:null;return P&&P.isTexture&&(P=(N.backgroundBlurriness>0?n:e).get(P)),P}function b(N){let P=!1;const H=T(N);H===null?g(f,m):H&&H.isColor&&(g(H,1),P=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(N,P){const H=T(P);H&&(H.isCubeTexture||H.mapping===$l)?(v===void 0&&(v=new ii(new ta(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Qs(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(O,z,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),$r.copy(P.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),v.material.uniforms.envMap.value=H,v.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(AM.makeRotationFromEuler($r)),v.material.toneMapped=Ct.getTransfer(H.colorSpace)!==kt,(_!==H||x!==H.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,_=H,x=H.version,M=s.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new ii(new is(2,2),new Yi({name:"BackgroundMaterial",uniforms:Qs(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(H.colorSpace)!==kt,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||x!==H.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,_=H,x=H.version,M=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function g(N,P){N.getRGB(Dl,Rg(s)),r.buffers.color.setClear(Dl.r,Dl.g,Dl.b,P,u)}function k(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(N,P=1){f.set(N),m=P,g(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,g(f,m)},render:b,addToRenderList:y,dispose:k}}function RM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,u=!1;function f(C,G,Z,le,ue){let de=!1;const te=_(le,Z,G);l!==te&&(l=te,p(l.object)),de=M(C,le,Z,ue),de&&T(C,le,Z,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,P(C,G,Z,le),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function v(C){return s.deleteVertexArray(C)}function _(C,G,Z){const le=Z.wireframe===!0;let ue=r[C.id];ue===void 0&&(ue={},r[C.id]=ue);let de=ue[G.id];de===void 0&&(de={},ue[G.id]=de);let te=de[le];return te===void 0&&(te=x(m()),de[le]=te),te}function x(C){const G=[],Z=[],le=[];for(let ue=0;ue<n;ue++)G[ue]=0,Z[ue]=0,le[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:le,object:C,attributes:{},index:null}}function M(C,G,Z,le){const ue=l.attributes,de=G.attributes;let te=0;const fe=Z.getAttributes();for(const D in fe)if(fe[D].location>=0){const ce=ue[D];let I=de[D];if(I===void 0&&(D==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),D==="instanceColor"&&C.instanceColor&&(I=C.instanceColor)),ce===void 0||ce.attribute!==I||I&&ce.data!==I.data)return!0;te++}return l.attributesNum!==te||l.index!==le}function T(C,G,Z,le){const ue={},de=G.attributes;let te=0;const fe=Z.getAttributes();for(const D in fe)if(fe[D].location>=0){let ce=de[D];ce===void 0&&(D==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),D==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor));const I={};I.attribute=ce,ce&&ce.data&&(I.data=ce.data),ue[D]=I,te++}l.attributes=ue,l.attributesNum=te,l.index=le}function b(){const C=l.newAttributes;for(let G=0,Z=C.length;G<Z;G++)C[G]=0}function y(C){g(C,0)}function g(C,G){const Z=l.newAttributes,le=l.enabledAttributes,ue=l.attributeDivisors;Z[C]=1,le[C]===0&&(s.enableVertexAttribArray(C),le[C]=1),ue[C]!==G&&(s.vertexAttribDivisor(C,G),ue[C]=G)}function k(){const C=l.newAttributes,G=l.enabledAttributes;for(let Z=0,le=G.length;Z<le;Z++)G[Z]!==C[Z]&&(s.disableVertexAttribArray(Z),G[Z]=0)}function N(C,G,Z,le,ue,de,te){te===!0?s.vertexAttribIPointer(C,G,Z,ue,de):s.vertexAttribPointer(C,G,Z,le,ue,de)}function P(C,G,Z,le){b();const ue=le.attributes,de=Z.getAttributes(),te=G.defaultAttributeValues;for(const fe in de){const D=de[fe];if(D.location>=0){let he=ue[fe];if(he===void 0&&(fe==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),fe==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),he!==void 0){const ce=he.normalized,I=he.itemSize,ne=e.get(he);if(ne===void 0)continue;const Ae=ne.buffer,Ce=ne.type,Ue=ne.bytesPerElement,Q=Ce===s.INT||Ce===s.UNSIGNED_INT||he.gpuType===ff;if(he.isInterleavedBufferAttribute){const ie=he.data,ve=ie.stride,Re=he.offset;if(ie.isInstancedInterleavedBuffer){for(let De=0;De<D.locationSize;De++)g(D.location+De,ie.meshPerAttribute);C.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let De=0;De<D.locationSize;De++)y(D.location+De);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let De=0;De<D.locationSize;De++)N(D.location+De,I/D.locationSize,Ce,ce,ve*Ue,(Re+I/D.locationSize*De)*Ue,Q)}else{if(he.isInstancedBufferAttribute){for(let ie=0;ie<D.locationSize;ie++)g(D.location+ie,he.meshPerAttribute);C.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ie=0;ie<D.locationSize;ie++)y(D.location+ie);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let ie=0;ie<D.locationSize;ie++)N(D.location+ie,I/D.locationSize,Ce,ce,I*Ue,I/D.locationSize*ie*Ue,Q)}}else if(te!==void 0){const ce=te[fe];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(D.location,ce);break;case 3:s.vertexAttrib3fv(D.location,ce);break;case 4:s.vertexAttrib4fv(D.location,ce);break;default:s.vertexAttrib1fv(D.location,ce)}}}}k()}function H(){V();for(const C in r){const G=r[C];for(const Z in G){const le=G[Z];for(const ue in le)v(le[ue].object),delete le[ue];delete G[Z]}delete r[C]}}function O(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const Z in G){const le=G[Z];for(const ue in le)v(le[ue].object),delete le[ue];delete G[Z]}delete r[C.id]}function z(C){for(const G in r){const Z=r[G];if(Z[C.id]===void 0)continue;const le=Z[C.id];for(const ue in le)v(le[ue].object),delete le[ue];delete Z[C.id]}}function V(){R(),u=!0,l!==a&&(l=a,p(l.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:V,resetDefaultState:R,dispose:H,releaseStatesOfGeometry:O,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:y,disableUnusedAttributes:k}}function PM(s,e,n){let r;function a(p){r=p}function l(p,v){s.drawArrays(r,p,v),n.update(v,r,1)}function u(p,v,_){_!==0&&(s.drawArraysInstanced(r,p,v,_),n.update(v,r,_))}function f(p,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let M=0;for(let T=0;T<_;T++)M+=v[T];n.update(M,r,1)}function m(p,v,_,x){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)u(p[T],v[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,x,0,_);let T=0;for(let b=0;b<_;b++)T+=v[b]*x[b];n.update(T,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function DM(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(z){return!(z!==ni&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const V=z===Js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Xi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ei&&!V)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),k=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=T>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:b,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:k,maxVaryings:N,maxFragmentUniforms:P,vertexTextures:H,maxSamples:O}}function LM(s){const e=this;let n=null,r=0,a=!1,l=!1;const u=new Qr,f=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||r!==0||a;return a=x,r=_.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,x){n=v(_,x,0)},this.setState=function(_,x,M){const T=_.clippingPlanes,b=_.clipIntersection,y=_.clipShadows,g=s.get(_);if(!a||T===null||T.length===0||l&&!y)l?v(null):p();else{const k=l?0:r,N=k*4;let P=g.clippingState||null;m.value=P,P=v(T,x,N,M);for(let H=0;H!==N;++H)P[H]=n[H];g.clippingState=P,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=k}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,x,M,T){const b=_!==null?_.length:0;let y=null;if(b!==0){if(y=m.value,T!==!0||y===null){const g=M+b*4,k=x.matrixWorldInverse;f.getNormalMatrix(k),(y===null||y.length<g)&&(y=new Float32Array(g));for(let N=0,P=M;N!==b;++N,P+=4)u.copy(_[N]).applyMatrix4(k,f),u.normal.toArray(y,P),y[P+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function NM(s){let e=new WeakMap;function n(u,f){return f===bd?u.mapping=$s:f===Ad&&(u.mapping=Ks),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===bd||f===Ad)if(e.has(u)){const m=e.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const p=new Lx(m.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",a),n(p.texture,u.mapping)}else return null}}return u}function a(u){const f=u.target;f.removeEventListener("dispose",a);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Xs=4,Cm=[.125,.215,.35,.446,.526,.582],ts=20,od=new Gx,Rm=new Rt;let ad=null,ld=0,cd=0,ud=!1;const Jr=(1+Math.sqrt(5))/2,Gs=1/Jr,Pm=[new re(-Jr,Gs,0),new re(Jr,Gs,0),new re(-Gs,0,Jr),new re(Gs,0,Jr),new re(0,Jr,-Gs),new re(0,Jr,Gs),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)],IM=new re;class Dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,l={}){const{size:u=256,position:f=IM}=l;ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,a,m,f),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,ld,cd),this._renderer.xr.enabled=ud,e.scissorTest=!1,Ll(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$s||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Js,format:ni,colorSpace:Zs,depthBuffer:!1},a=Lm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UM(l)),this._blurMaterial=FM(l,e,n)}return a}_compileMaterial(e){const n=new ii(this._lodPlanes[0],e);this._renderer.compile(n,od)}_sceneToCubeUV(e,n,r,a,l){const m=new pi(90,1,n,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(Rm),_.toneMapping=br,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null));const b=new bg({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),y=new ii(new ta,b);let g=!1;const k=e.background;k?k.isColor&&(b.color.copy(k),e.background=null,g=!0):(b.color.copy(Rm),g=!0);for(let N=0;N<6;N++){const P=N%3;P===0?(m.up.set(0,p[N],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+v[N],l.y,l.z)):P===1?(m.up.set(0,0,p[N]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+v[N],l.z)):(m.up.set(0,p[N],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+v[N]));const H=this._cubeSize;Ll(a,P*H,N>2?H:0,H,H),_.setRenderTarget(a),g&&_.render(y,m),_.render(e,m)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=M,_.autoClear=x,e.background=k}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===$s||e.mapping===Ks;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Im()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nm());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new ii(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const m=this._cubeSize;Ll(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(u,od)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Pm[(a-l-1)%Pm.length];this._blur(e,l-1,l,u,f)}n.autoClear=r}_blur(e,n,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,u,f){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new ii(this._lodPlanes[a],p),x=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*ts-1),b=l/T,y=isFinite(l)?1+Math.floor(v*b):ts;y>ts&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ts}`);const g=[];let k=0;for(let z=0;z<ts;++z){const V=z/b,R=Math.exp(-V*V/2);g.push(R),z===0?k+=R:z<y&&(k+=2*R)}for(let z=0;z<g.length;z++)g[z]=g[z]/k;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=u==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:N}=this;x.dTheta.value=T,x.mipInt.value=N-r;const P=this._sizeLods[a],H=3*P*(a>N-Xs?a-N+Xs:0),O=4*(this._cubeSize-P);Ll(n,H,O,3*P,2*P),m.setRenderTarget(n),m.render(_,od)}}function UM(s){const e=[],n=[],r=[];let a=s;const l=s-Xs+1+Cm.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);n.push(f);let m=1/f;u>s-Xs?m=Cm[u-s+Xs-1]:u===0&&(m=0),r.push(m);const p=1/(f-2),v=-p,_=1+p,x=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,T=6,b=3,y=2,g=1,k=new Float32Array(b*T*M),N=new Float32Array(y*T*M),P=new Float32Array(g*T*M);for(let O=0;O<M;O++){const z=O%3*2/3-1,V=O>2?0:-1,R=[z,V,0,z+2/3,V,0,z+2/3,V+1,0,z,V,0,z+2/3,V+1,0,z,V+1,0];k.set(R,b*T*O),N.set(x,y*T*O);const C=[O,O,O,O,O,O];P.set(C,g*T*O)}const H=new qi;H.setAttribute("position",new vi(k,b)),H.setAttribute("uv",new vi(N,y)),H.setAttribute("faceIndex",new vi(P,g)),e.push(H),a>Xs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Lm(s,e,n){const r=new Cr(s,e,n);return r.texture.mapping=$l,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ll(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function FM(s,e,n){const r=new Float32Array(ts),a=new re(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:xf(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Nm(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xf(),fragmentShader:`

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
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Im(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function xf(){return`

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
	`}function kM(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const m=f.mapping,p=m===bd||m===Ad,v=m===$s||m===Ks;if(p||v){let _=e.get(f);const x=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new Dm(s)),_=p?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const M=f.image;return p&&M&&M.height>0||v&&M&&a(M)?(n===null&&(n=new Dm(s)),_=p?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function a(f){let m=0;const p=6;for(let v=0;v<p;v++)f[v]!==void 0&&m++;return m===p}function l(f){const m=f.target;m.removeEventListener("dispose",l);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function OM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Ko("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function zM(s,e,n,r){const a={},l=new WeakMap;function u(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",u),delete a[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(_,x){return a[x.id]===!0||(x.addEventListener("dispose",u),a[x.id]=!0,n.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER)}function p(_){const x=[],M=_.index,T=_.attributes.position;let b=0;if(M!==null){const k=M.array;b=M.version;for(let N=0,P=k.length;N<P;N+=3){const H=k[N+0],O=k[N+1],z=k[N+2];x.push(H,O,O,z,z,H)}}else if(T!==void 0){const k=T.array;b=T.version;for(let N=0,P=k.length/3-1;N<P;N+=3){const H=N+0,O=N+1,z=N+2;x.push(H,O,O,z,z,H)}}else return;const y=new(Sg(x)?Cg:Ag)(x,1);y.version=b;const g=l.get(_);g&&e.remove(g),l.set(_,y)}function v(_){const x=l.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:m,getWireframeAttribute:v}}function BM(s,e,n){let r;function a(x){r=x}let l,u;function f(x){l=x.type,u=x.bytesPerElement}function m(x,M){s.drawElements(r,M,l,x*u),n.update(M,r,1)}function p(x,M,T){T!==0&&(s.drawElementsInstanced(r,M,l,x*u,T),n.update(M,r,T))}function v(x,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,x,0,T);let y=0;for(let g=0;g<T;g++)y+=M[g];n.update(y,r,1)}function _(x,M,T,b){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)p(x[g]/u,M[g],b[g]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,l,x,0,b,0,T);let g=0;for(let k=0;k<T;k++)g+=M[k]*b[k];n.update(g,r,1)}}this.setMode=a,this.setIndex=f,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function VM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function HM(s,e,n){const r=new WeakMap,a=new qt;function l(u,f,m){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let x=r.get(f);if(x===void 0||x.count!==_){let C=function(){V.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var M=C;x!==void 0&&x.texture.dispose();const T=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],k=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let P=0;T===!0&&(P=1),b===!0&&(P=2),y===!0&&(P=3);let H=f.attributes.position.count*P,O=1;H>e.maxTextureSize&&(O=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const z=new Float32Array(H*O*4*_),V=new Mg(z,H,O,_);V.type=Ei,V.needsUpdate=!0;const R=P*4;for(let G=0;G<_;G++){const Z=g[G],le=k[G],ue=N[G],de=H*O*4*G;for(let te=0;te<Z.count;te++){const fe=te*R;T===!0&&(a.fromBufferAttribute(Z,te),z[de+fe+0]=a.x,z[de+fe+1]=a.y,z[de+fe+2]=a.z,z[de+fe+3]=0),b===!0&&(a.fromBufferAttribute(le,te),z[de+fe+4]=a.x,z[de+fe+5]=a.y,z[de+fe+6]=a.z,z[de+fe+7]=0),y===!0&&(a.fromBufferAttribute(ue,te),z[de+fe+8]=a.x,z[de+fe+9]=a.y,z[de+fe+10]=a.z,z[de+fe+11]=ue.itemSize===4?a.w:1)}}x={count:_,texture:V,size:new mt(H,O)},r.set(f,x),f.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const b=f.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",b),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function GM(s,e,n,r){let a=new WeakMap;function l(m){const p=r.render.frame,v=m.geometry,_=e.get(m,v);if(a.get(_)!==p&&(e.update(_),a.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),a.get(m)!==p&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),a.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return _}function u(){a=new WeakMap}function f(m){const p=m.target;p.removeEventListener("dispose",f),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:u}}const Ug=new Cn,Um=new Lg(1,1),Fg=new Mg,kg=new mx,Og=new Pg,Fm=[],km=[],Om=new Float32Array(16),zm=new Float32Array(9),Bm=new Float32Array(4);function to(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=Fm[a];if(l===void 0&&(l=new Float32Array(a),Fm[a]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=n,s[u].toArray(l,f)}return l}function sn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function on(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Zl(s,e){let n=km[e];n===void 0&&(n=new Int32Array(e),km[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function WM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function XM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;s.uniform2fv(this.addr,e),on(n,e)}}function jM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(sn(n,e))return;s.uniform3fv(this.addr,e),on(n,e)}}function YM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;s.uniform4fv(this.addr,e),on(n,e)}}function qM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(sn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),on(n,e)}else{if(sn(n,r))return;Bm.set(r),s.uniformMatrix2fv(this.addr,!1,Bm),on(n,r)}}function $M(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(sn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),on(n,e)}else{if(sn(n,r))return;zm.set(r),s.uniformMatrix3fv(this.addr,!1,zm),on(n,r)}}function KM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(sn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),on(n,e)}else{if(sn(n,r))return;Om.set(r),s.uniformMatrix4fv(this.addr,!1,Om),on(n,r)}}function ZM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function QM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;s.uniform2iv(this.addr,e),on(n,e)}}function JM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;s.uniform3iv(this.addr,e),on(n,e)}}function eE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;s.uniform4iv(this.addr,e),on(n,e)}}function tE(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function nE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(sn(n,e))return;s.uniform2uiv(this.addr,e),on(n,e)}}function iE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(sn(n,e))return;s.uniform3uiv(this.addr,e),on(n,e)}}function rE(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(sn(n,e))return;s.uniform4uiv(this.addr,e),on(n,e)}}function sE(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Um.compareFunction=yg,l=Um):l=Ug,n.setTexture2D(e||l,a)}function oE(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||kg,a)}function aE(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Og,a)}function lE(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Fg,a)}function cE(s){switch(s){case 5126:return WM;case 35664:return XM;case 35665:return jM;case 35666:return YM;case 35674:return qM;case 35675:return $M;case 35676:return KM;case 5124:case 35670:return ZM;case 35667:case 35671:return QM;case 35668:case 35672:return JM;case 35669:case 35673:return eE;case 5125:return tE;case 36294:return nE;case 36295:return iE;case 36296:return rE;case 35678:case 36198:case 36298:case 36306:case 35682:return sE;case 35679:case 36299:case 36307:return oE;case 35680:case 36300:case 36308:case 36293:return aE;case 36289:case 36303:case 36311:case 36292:return lE}}function uE(s,e){s.uniform1fv(this.addr,e)}function dE(s,e){const n=to(e,this.size,2);s.uniform2fv(this.addr,n)}function fE(s,e){const n=to(e,this.size,3);s.uniform3fv(this.addr,n)}function hE(s,e){const n=to(e,this.size,4);s.uniform4fv(this.addr,n)}function pE(s,e){const n=to(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function mE(s,e){const n=to(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function gE(s,e){const n=to(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function vE(s,e){s.uniform1iv(this.addr,e)}function _E(s,e){s.uniform2iv(this.addr,e)}function xE(s,e){s.uniform3iv(this.addr,e)}function yE(s,e){s.uniform4iv(this.addr,e)}function SE(s,e){s.uniform1uiv(this.addr,e)}function ME(s,e){s.uniform2uiv(this.addr,e)}function EE(s,e){s.uniform3uiv(this.addr,e)}function wE(s,e){s.uniform4uiv(this.addr,e)}function TE(s,e,n){const r=this.cache,a=e.length,l=Zl(n,a);sn(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let u=0;u!==a;++u)n.setTexture2D(e[u]||Ug,l[u])}function bE(s,e,n){const r=this.cache,a=e.length,l=Zl(n,a);sn(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let u=0;u!==a;++u)n.setTexture3D(e[u]||kg,l[u])}function AE(s,e,n){const r=this.cache,a=e.length,l=Zl(n,a);sn(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let u=0;u!==a;++u)n.setTextureCube(e[u]||Og,l[u])}function CE(s,e,n){const r=this.cache,a=e.length,l=Zl(n,a);sn(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let u=0;u!==a;++u)n.setTexture2DArray(e[u]||Fg,l[u])}function RE(s){switch(s){case 5126:return uE;case 35664:return dE;case 35665:return fE;case 35666:return hE;case 35674:return pE;case 35675:return mE;case 35676:return gE;case 5124:case 35670:return vE;case 35667:case 35671:return _E;case 35668:case 35672:return xE;case 35669:case 35673:return yE;case 5125:return SE;case 36294:return ME;case 36295:return EE;case 36296:return wE;case 35678:case 36198:case 36298:case 36306:case 35682:return TE;case 35679:case 36299:case 36307:return bE;case 35680:case 36300:case 36308:case 36293:return AE;case 36289:case 36303:case 36311:case 36292:return CE}}class PE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=cE(n.type)}}class DE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=RE(n.type)}}class LE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,n[f.id],r)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function Vm(s,e){s.seq.push(e),s.map[e.id]=e}function NE(s,e,n){const r=s.name,a=r.length;for(dd.lastIndex=0;;){const l=dd.exec(r),u=dd.lastIndex;let f=l[1];const m=l[2]==="]",p=l[3];if(m&&(f=f|0),p===void 0||p==="["&&u+2===a){Vm(n,p===void 0?new PE(f,s,e):new DE(f,s,e));break}else{let _=n.map[f];_===void 0&&(_=new LE(f),Vm(n,_)),n=_}}}class Bl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),u=e.getUniformLocation(n,l.name);NE(l,u,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,u=n.length;l!==u;++l){const f=n[l],m=r[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in n&&r.push(u)}return r}}function Hm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const IE=37297;let UE=0;function FE(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=a;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${n[u]}`)}return r.join(`
`)}const Gm=new gt;function kE(s){Ct._getMatrix(Gm,Ct.workingColorSpace,s);const e=`mat3( ${Gm.elements.map(n=>n.toFixed(4))} )`;switch(Ct.getTransfer(s)){case Gl:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Wm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+FE(s.getShaderSource(e),f)}else return l}function OE(s,e){const n=kE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function zE(s,e){let n;switch(e){case H_:n="Linear";break;case G_:n="Reinhard";break;case W_:n="Cineon";break;case X_:n="ACESFilmic";break;case Y_:n="AgX";break;case q_:n="Neutral";break;case j_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Nl=new re;function BE(){Ct.getLuminanceCoefficients(Nl);const s=Nl.x.toFixed(4),e=Nl.y.toFixed(4),n=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function HE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function GE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return n}function Xo(s){return s!==""}function Xm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WE=/^[ \t]*#include +<([\w\d./]+)>/gm;function of(s){return s.replace(WE,jE)}const XE=new Map;function jE(s,e){let n=vt[e];if(n===void 0){const r=XE.get(e);if(r!==void 0)n=vt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return of(n)}const YE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ym(s){return s.replace(YE,qE)}function qE(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function qm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function $E(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===cg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===S_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function KE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $s:case Ks:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function QE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ug:e="ENVMAP_BLENDING_MULTIPLY";break;case B_:e="ENVMAP_BLENDING_MIX";break;case V_:e="ENVMAP_BLENDING_ADD";break}return e}function JE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function ew(s,e,n,r){const a=s.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const m=$E(n),p=KE(n),v=ZE(n),_=QE(n),x=JE(n),M=VE(n),T=HE(l),b=a.createProgram();let y,g,k=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Xo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Xo).join(`
`),g.length>0&&(g+=`
`)):(y=[qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),g=[qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==br?"#define TONE_MAPPING":"",n.toneMapping!==br?vt.tonemapping_pars_fragment:"",n.toneMapping!==br?zE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,OE("linearToOutputTexel",n.outputColorSpace),BE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xo).join(`
`)),u=of(u),u=Xm(u,n),u=jm(u,n),f=of(f),f=Xm(f,n),f=jm(f,n),u=Ym(u),f=Ym(f),n.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const N=k+y+u,P=k+g+f,H=Hm(a,a.VERTEX_SHADER,N),O=Hm(a,a.FRAGMENT_SHADER,P);a.attachShader(b,H),a.attachShader(b,O),n.index0AttributeName!==void 0?a.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function z(G){if(s.debug.checkShaderErrors){const Z=a.getProgramInfoLog(b)||"",le=a.getShaderInfoLog(H)||"",ue=a.getShaderInfoLog(O)||"",de=Z.trim(),te=le.trim(),fe=ue.trim();let D=!0,he=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(D=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,b,H,O);else{const ce=Wm(a,H,"vertex"),I=Wm(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+de+`
`+ce+`
`+I)}else de!==""?console.warn("THREE.WebGLProgram: Program Info Log:",de):(te===""||fe==="")&&(he=!1);he&&(G.diagnostics={runnable:D,programLog:de,vertexShader:{log:te,prefix:y},fragmentShader:{log:fe,prefix:g}})}a.deleteShader(H),a.deleteShader(O),V=new Bl(a,b),R=GE(a,b)}let V;this.getUniforms=function(){return V===void 0&&z(this),V};let R;this.getAttributes=function(){return R===void 0&&z(this),R};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(b,IE)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=UE++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=H,this.fragmentShader=O,this}let tw=0;class nw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new iw(e),n.set(e,r)),r}}class iw{constructor(e){this.id=tw++,this.code=e,this.usedTimes=0}}function rw(s,e,n,r,a,l,u){const f=new wg,m=new nw,p=new Set,v=[],_=a.logarithmicDepthBuffer,x=a.vertexTextures;let M=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(R){return p.add(R),R===0?"uv":`uv${R}`}function y(R,C,G,Z,le){const ue=Z.fog,de=le.geometry,te=R.isMeshStandardMaterial?Z.environment:null,fe=(R.isMeshStandardMaterial?n:e).get(R.envMap||te),D=fe&&fe.mapping===$l?fe.image.height:null,he=T[R.type];R.precision!==null&&(M=a.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const ce=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,I=ce!==void 0?ce.length:0;let ne=0;de.morphAttributes.position!==void 0&&(ne=1),de.morphAttributes.normal!==void 0&&(ne=2),de.morphAttributes.color!==void 0&&(ne=3);let Ae,Ce,Ue,Q;if(he){const wt=Mi[he];Ae=wt.vertexShader,Ce=wt.fragmentShader}else Ae=R.vertexShader,Ce=R.fragmentShader,m.update(R),Ue=m.getVertexShaderID(R),Q=m.getFragmentShaderID(R);const ie=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),Re=le.isInstancedMesh===!0,De=le.isBatchedMesh===!0,ht=!!R.map,Bt=!!R.matcap,F=!!fe,Pt=!!R.aoMap,lt=!!R.lightMap,tt=!!R.bumpMap,Ve=!!R.normalMap,Et=!!R.displacementMap,ze=!!R.emissiveMap,ct=!!R.metalnessMap,Ut=!!R.roughnessMap,nt=R.anisotropy>0,S=R.clearcoat>0,E=R.dispersion>0,W=R.iridescence>0,J=R.sheen>0,pe=R.transmission>0,oe=nt&&!!R.anisotropyMap,Ye=S&&!!R.clearcoatMap,xe=S&&!!R.clearcoatNormalMap,He=S&&!!R.clearcoatRoughnessMap,Qe=W&&!!R.iridescenceMap,we=W&&!!R.iridescenceThicknessMap,Ie=J&&!!R.sheenColorMap,ot=J&&!!R.sheenRoughnessMap,Ke=!!R.specularMap,Pe=!!R.specularColorMap,pt=!!R.specularIntensityMap,X=pe&&!!R.transmissionMap,Me=pe&&!!R.thicknessMap,be=!!R.gradientMap,Fe=!!R.alphaMap,Se=R.alphaTest>0,me=!!R.alphaHash,qe=!!R.extensions;let ft=br;R.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ft=s.toneMapping);const Lt={shaderID:he,shaderType:R.type,shaderName:R.name,vertexShader:Ae,fragmentShader:Ce,defines:R.defines,customVertexShaderID:Ue,customFragmentShaderID:Q,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:De,batchingColor:De&&le._colorsTexture!==null,instancing:Re,instancingColor:Re&&le.instanceColor!==null,instancingMorph:Re&&le.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Zs,alphaToCoverage:!!R.alphaToCoverage,map:ht,matcap:Bt,envMap:F,envMapMode:F&&fe.mapping,envMapCubeUVHeight:D,aoMap:Pt,lightMap:lt,bumpMap:tt,normalMap:Ve,displacementMap:x&&Et,emissiveMap:ze,normalMapObjectSpace:Ve&&R.normalMapType===J_,normalMapTangentSpace:Ve&&R.normalMapType===Q_,metalnessMap:ct,roughnessMap:Ut,anisotropy:nt,anisotropyMap:oe,clearcoat:S,clearcoatMap:Ye,clearcoatNormalMap:xe,clearcoatRoughnessMap:He,dispersion:E,iridescence:W,iridescenceMap:Qe,iridescenceThicknessMap:we,sheen:J,sheenColorMap:Ie,sheenRoughnessMap:ot,specularMap:Ke,specularColorMap:Pe,specularIntensityMap:pt,transmission:pe,transmissionMap:X,thicknessMap:Me,gradientMap:be,opaque:R.transparent===!1&&R.blending===js&&R.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Se,alphaHash:me,combine:R.combine,mapUv:ht&&b(R.map.channel),aoMapUv:Pt&&b(R.aoMap.channel),lightMapUv:lt&&b(R.lightMap.channel),bumpMapUv:tt&&b(R.bumpMap.channel),normalMapUv:Ve&&b(R.normalMap.channel),displacementMapUv:Et&&b(R.displacementMap.channel),emissiveMapUv:ze&&b(R.emissiveMap.channel),metalnessMapUv:ct&&b(R.metalnessMap.channel),roughnessMapUv:Ut&&b(R.roughnessMap.channel),anisotropyMapUv:oe&&b(R.anisotropyMap.channel),clearcoatMapUv:Ye&&b(R.clearcoatMap.channel),clearcoatNormalMapUv:xe&&b(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&b(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&b(R.iridescenceMap.channel),iridescenceThicknessMapUv:we&&b(R.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&b(R.sheenColorMap.channel),sheenRoughnessMapUv:ot&&b(R.sheenRoughnessMap.channel),specularMapUv:Ke&&b(R.specularMap.channel),specularColorMapUv:Pe&&b(R.specularColorMap.channel),specularIntensityMapUv:pt&&b(R.specularIntensityMap.channel),transmissionMapUv:X&&b(R.transmissionMap.channel),thicknessMapUv:Me&&b(R.thicknessMap.channel),alphaMapUv:Fe&&b(R.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Ve||nt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!de.attributes.uv&&(ht||Fe),fog:!!ue,useFog:R.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:ve,skinning:le.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ft,decodeVideoTexture:ht&&R.map.isVideoTexture===!0&&Ct.getTransfer(R.map.colorSpace)===kt,decodeVideoTextureEmissive:ze&&R.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(R.emissiveMap.colorSpace)===kt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Hi,flipSided:R.side===kn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:qe&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&R.extensions.multiDraw===!0||De)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Lt.vertexUv1s=p.has(1),Lt.vertexUv2s=p.has(2),Lt.vertexUv3s=p.has(3),p.clear(),Lt}function g(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const G in R.defines)C.push(G),C.push(R.defines[G]);return R.isRawShaderMaterial===!1&&(k(C,R),N(C,R),C.push(s.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function k(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function N(R,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),C.gradientMap&&f.enable(22),R.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reversedDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),R.push(f.mask)}function P(R){const C=T[R.type];let G;if(C){const Z=Mi[C];G=Cx.clone(Z.uniforms)}else G=R.uniforms;return G}function H(R,C){let G;for(let Z=0,le=v.length;Z<le;Z++){const ue=v[Z];if(ue.cacheKey===C){G=ue,++G.usedTimes;break}}return G===void 0&&(G=new ew(s,C,R,l),v.push(G)),G}function O(R){if(--R.usedTimes===0){const C=v.indexOf(R);v[C]=v[v.length-1],v.pop(),R.destroy()}}function z(R){m.remove(R)}function V(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:P,acquireProgram:H,releaseProgram:O,releaseShaderCache:z,programs:v,dispose:V}}function sw(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function a(u,f,m){s.get(u)[f]=m}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function ow(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function $m(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Km(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function u(_,x,M,T,b,y){let g=s[e];return g===void 0?(g={id:_.id,object:_,geometry:x,material:M,groupOrder:T,renderOrder:_.renderOrder,z:b,group:y},s[e]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=M,g.groupOrder=T,g.renderOrder=_.renderOrder,g.z=b,g.group=y),e++,g}function f(_,x,M,T,b,y){const g=u(_,x,M,T,b,y);M.transmission>0?r.push(g):M.transparent===!0?a.push(g):n.push(g)}function m(_,x,M,T,b,y){const g=u(_,x,M,T,b,y);M.transmission>0?r.unshift(g):M.transparent===!0?a.unshift(g):n.unshift(g)}function p(_,x){n.length>1&&n.sort(_||ow),r.length>1&&r.sort(x||$m),a.length>1&&a.sort(x||$m)}function v(){for(let _=e,x=s.length;_<x;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:f,unshift:m,finish:v,sort:p}}function aw(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new Km,s.set(r,[u])):a>=l.length?(u=new Km,l.push(u)):u=l[a],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function lw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new re,color:new Rt};break;case"SpotLight":n={position:new re,direction:new re,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new re,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new re,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new re,halfWidth:new re,halfHeight:new re};break}return s[e.id]=n,n}}}function cw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let uw=0;function dw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fw(s){const e=new lw,n=cw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new re);const a=new re,l=new Jt,u=new Jt;function f(p){let v=0,_=0,x=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let M=0,T=0,b=0,y=0,g=0,k=0,N=0,P=0,H=0,O=0,z=0;p.sort(dw);for(let R=0,C=p.length;R<C;R++){const G=p[R],Z=G.color,le=G.intensity,ue=G.distance,de=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=Z.r*le,_+=Z.g*le,x+=Z.b*le;else if(G.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(G.sh.coefficients[te],le);z++}else if(G.isDirectionalLight){const te=e.get(G);if(te.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const fe=G.shadow,D=n.get(G);D.shadowIntensity=fe.intensity,D.shadowBias=fe.bias,D.shadowNormalBias=fe.normalBias,D.shadowRadius=fe.radius,D.shadowMapSize=fe.mapSize,r.directionalShadow[M]=D,r.directionalShadowMap[M]=de,r.directionalShadowMatrix[M]=G.shadow.matrix,k++}r.directional[M]=te,M++}else if(G.isSpotLight){const te=e.get(G);te.position.setFromMatrixPosition(G.matrixWorld),te.color.copy(Z).multiplyScalar(le),te.distance=ue,te.coneCos=Math.cos(G.angle),te.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),te.decay=G.decay,r.spot[b]=te;const fe=G.shadow;if(G.map&&(r.spotLightMap[H]=G.map,H++,fe.updateMatrices(G),G.castShadow&&O++),r.spotLightMatrix[b]=fe.matrix,G.castShadow){const D=n.get(G);D.shadowIntensity=fe.intensity,D.shadowBias=fe.bias,D.shadowNormalBias=fe.normalBias,D.shadowRadius=fe.radius,D.shadowMapSize=fe.mapSize,r.spotShadow[b]=D,r.spotShadowMap[b]=de,P++}b++}else if(G.isRectAreaLight){const te=e.get(G);te.color.copy(Z).multiplyScalar(le),te.halfWidth.set(G.width*.5,0,0),te.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=te,y++}else if(G.isPointLight){const te=e.get(G);if(te.color.copy(G.color).multiplyScalar(G.intensity),te.distance=G.distance,te.decay=G.decay,G.castShadow){const fe=G.shadow,D=n.get(G);D.shadowIntensity=fe.intensity,D.shadowBias=fe.bias,D.shadowNormalBias=fe.normalBias,D.shadowRadius=fe.radius,D.shadowMapSize=fe.mapSize,D.shadowCameraNear=fe.camera.near,D.shadowCameraFar=fe.camera.far,r.pointShadow[T]=D,r.pointShadowMap[T]=de,r.pointShadowMatrix[T]=G.shadow.matrix,N++}r.point[T]=te,T++}else if(G.isHemisphereLight){const te=e.get(G);te.skyColor.copy(G.color).multiplyScalar(le),te.groundColor.copy(G.groundColor).multiplyScalar(le),r.hemi[g]=te,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=x;const V=r.hash;(V.directionalLength!==M||V.pointLength!==T||V.spotLength!==b||V.rectAreaLength!==y||V.hemiLength!==g||V.numDirectionalShadows!==k||V.numPointShadows!==N||V.numSpotShadows!==P||V.numSpotMaps!==H||V.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=b,r.rectArea.length=y,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=k,r.directionalShadowMap.length=k,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=k,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=P+H-O,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=z,V.directionalLength=M,V.pointLength=T,V.spotLength=b,V.rectAreaLength=y,V.hemiLength=g,V.numDirectionalShadows=k,V.numPointShadows=N,V.numSpotShadows=P,V.numSpotMaps=H,V.numLightProbes=z,r.version=uw++)}function m(p,v){let _=0,x=0,M=0,T=0,b=0;const y=v.matrixWorldInverse;for(let g=0,k=p.length;g<k;g++){const N=p[g];if(N.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),_++}else if(N.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),u.identity(),l.copy(N.matrixWorld),l.premultiply(y),u.extractRotation(l),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),T++}else if(N.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),x++}else if(N.isHemisphereLight){const P=r.hemi[b];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(y),b++}}}return{setup:f,setupView:m,state:r}}function Zm(s){const e=new fw(s),n=[],r=[];function a(v){p.camera=v,n.length=0,r.length=0}function l(v){n.push(v)}function u(v){r.push(v)}function f(){e.setup(n)}function m(v){e.setupView(n,v)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:m,pushLight:l,pushShadow:u}}function hw(s){let e=new WeakMap;function n(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new Zm(s),e.set(a,[f])):l>=u.length?(f=new Zm(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const pw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mw=`uniform sampler2D shadow_pass;
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
}`;function gw(s,e,n){let r=new Dg;const a=new mt,l=new mt,u=new qt,f=new Vx({depthPacking:Z_}),m=new Hx,p={},v=n.maxTextureSize,_={[Ar]:kn,[kn]:Ar,[Hi]:Hi},x=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:pw,fragmentShader:mw}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new qi;T.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ii(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cg;let g=this.type;this.render=function(O,z,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const R=s.getRenderTarget(),C=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Tr),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const le=g!==Vi&&this.type===Vi,ue=g===Vi&&this.type!==Vi;for(let de=0,te=O.length;de<te;de++){const fe=O[de],D=fe.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;a.copy(D.mapSize);const he=D.getFrameExtents();if(a.multiply(he),l.copy(D.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/he.x),a.x=l.x*he.x,D.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/he.y),a.y=l.y*he.y,D.mapSize.y=l.y)),D.map===null||le===!0||ue===!0){const I=this.type!==Vi?{minFilter:jn,magFilter:jn}:{};D.map!==null&&D.map.dispose(),D.map=new Cr(a.x,a.y,I),D.map.texture.name=fe.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();const ce=D.getViewportCount();for(let I=0;I<ce;I++){const ne=D.getViewport(I);u.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),Z.viewport(u),D.updateMatrices(fe,I),r=D.getFrustum(),P(z,V,D.camera,fe,this.type)}D.isPointLightShadow!==!0&&this.type===Vi&&k(D,V),D.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(R,C,G)};function k(O,z){const V=e.update(b);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Cr(a.x,a.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(z,null,V,x,b,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(z,null,V,M,b,null)}function N(O,z,V,R){let C=null;const G=V.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)C=G;else if(C=V.isPointLight===!0?m:f,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Z=C.uuid,le=z.uuid;let ue=p[Z];ue===void 0&&(ue={},p[Z]=ue);let de=ue[le];de===void 0&&(de=C.clone(),ue[le]=de,z.addEventListener("dispose",H)),C=de}if(C.visible=z.visible,C.wireframe=z.wireframe,R===Vi?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:_[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,V.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Z=s.properties.get(C);Z.light=V}return C}function P(O,z,V,R,C){if(O.visible===!1)return;if(O.layers.test(z.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===Vi)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,O.matrixWorld);const le=e.update(O),ue=O.material;if(Array.isArray(ue)){const de=le.groups;for(let te=0,fe=de.length;te<fe;te++){const D=de[te],he=ue[D.materialIndex];if(he&&he.visible){const ce=N(O,he,R,C);O.onBeforeShadow(s,O,z,V,le,ce,D),s.renderBufferDirect(V,null,le,ce,O,D),O.onAfterShadow(s,O,z,V,le,ce,D)}}}else if(ue.visible){const de=N(O,ue,R,C);O.onBeforeShadow(s,O,z,V,le,de,null),s.renderBufferDirect(V,null,le,de,O,null),O.onAfterShadow(s,O,z,V,le,de,null)}}const Z=O.children;for(let le=0,ue=Z.length;le<ue;le++)P(Z[le],z,V,R,C)}function H(O){O.target.removeEventListener("dispose",H);for(const V in p){const R=p[V],C=O.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const vw={[xd]:yd,[Sd]:wd,[Md]:Td,[qs]:Ed,[yd]:xd,[wd]:Sd,[Td]:Md,[Ed]:qs};function _w(s,e){function n(){let X=!1;const Me=new qt;let be=null;const Fe=new qt(0,0,0,0);return{setMask:function(Se){be!==Se&&!X&&(s.colorMask(Se,Se,Se,Se),be=Se)},setLocked:function(Se){X=Se},setClear:function(Se,me,qe,ft,Lt){Lt===!0&&(Se*=ft,me*=ft,qe*=ft),Me.set(Se,me,qe,ft),Fe.equals(Me)===!1&&(s.clearColor(Se,me,qe,ft),Fe.copy(Me))},reset:function(){X=!1,be=null,Fe.set(-1,0,0,0)}}}function r(){let X=!1,Me=!1,be=null,Fe=null,Se=null;return{setReversed:function(me){if(Me!==me){const qe=e.get("EXT_clip_control");me?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Me=me;const ft=Se;Se=null,this.setClear(ft)}},getReversed:function(){return Me},setTest:function(me){me?ie(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(me){be!==me&&!X&&(s.depthMask(me),be=me)},setFunc:function(me){if(Me&&(me=vw[me]),Fe!==me){switch(me){case xd:s.depthFunc(s.NEVER);break;case yd:s.depthFunc(s.ALWAYS);break;case Sd:s.depthFunc(s.LESS);break;case qs:s.depthFunc(s.LEQUAL);break;case Md:s.depthFunc(s.EQUAL);break;case Ed:s.depthFunc(s.GEQUAL);break;case wd:s.depthFunc(s.GREATER);break;case Td:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Fe=me}},setLocked:function(me){X=me},setClear:function(me){Se!==me&&(Me&&(me=1-me),s.clearDepth(me),Se=me)},reset:function(){X=!1,be=null,Fe=null,Se=null,Me=!1}}}function a(){let X=!1,Me=null,be=null,Fe=null,Se=null,me=null,qe=null,ft=null,Lt=null;return{setTest:function(wt){X||(wt?ie(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(wt){Me!==wt&&!X&&(s.stencilMask(wt),Me=wt)},setFunc:function(wt,Yn,pn){(be!==wt||Fe!==Yn||Se!==pn)&&(s.stencilFunc(wt,Yn,pn),be=wt,Fe=Yn,Se=pn)},setOp:function(wt,Yn,pn){(me!==wt||qe!==Yn||ft!==pn)&&(s.stencilOp(wt,Yn,pn),me=wt,qe=Yn,ft=pn)},setLocked:function(wt){X=wt},setClear:function(wt){Lt!==wt&&(s.clearStencil(wt),Lt=wt)},reset:function(){X=!1,Me=null,be=null,Fe=null,Se=null,me=null,qe=null,ft=null,Lt=null}}}const l=new n,u=new r,f=new a,m=new WeakMap,p=new WeakMap;let v={},_={},x=new WeakMap,M=[],T=null,b=!1,y=null,g=null,k=null,N=null,P=null,H=null,O=null,z=new Rt(0,0,0),V=0,R=!1,C=null,G=null,Z=null,le=null,ue=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,fe=0;const D=s.getParameter(s.VERSION);D.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(D)[1]),te=fe>=1):D.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),te=fe>=2);let he=null,ce={};const I=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),Ae=new qt().fromArray(I),Ce=new qt().fromArray(ne);function Ue(X,Me,be,Fe){const Se=new Uint8Array(4),me=s.createTexture();s.bindTexture(X,me),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<be;qe++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,Fe,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(Me+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return me}const Q={};Q[s.TEXTURE_2D]=Ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=Ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=Ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=Ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ie(s.DEPTH_TEST),u.setFunc(qs),tt(!1),Ve(Jp),ie(s.CULL_FACE),Pt(Tr);function ie(X){v[X]!==!0&&(s.enable(X),v[X]=!0)}function ve(X){v[X]!==!1&&(s.disable(X),v[X]=!1)}function Re(X,Me){return _[X]!==Me?(s.bindFramebuffer(X,Me),_[X]=Me,X===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Me),X===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function De(X,Me){let be=M,Fe=!1;if(X){be=x.get(Me),be===void 0&&(be=[],x.set(Me,be));const Se=X.textures;if(be.length!==Se.length||be[0]!==s.COLOR_ATTACHMENT0){for(let me=0,qe=Se.length;me<qe;me++)be[me]=s.COLOR_ATTACHMENT0+me;be.length=Se.length,Fe=!0}}else be[0]!==s.BACK&&(be[0]=s.BACK,Fe=!0);Fe&&s.drawBuffers(be)}function ht(X){return T!==X?(s.useProgram(X),T=X,!0):!1}const Bt={[es]:s.FUNC_ADD,[E_]:s.FUNC_SUBTRACT,[w_]:s.FUNC_REVERSE_SUBTRACT};Bt[T_]=s.MIN,Bt[b_]=s.MAX;const F={[A_]:s.ZERO,[C_]:s.ONE,[R_]:s.SRC_COLOR,[vd]:s.SRC_ALPHA,[U_]:s.SRC_ALPHA_SATURATE,[N_]:s.DST_COLOR,[D_]:s.DST_ALPHA,[P_]:s.ONE_MINUS_SRC_COLOR,[_d]:s.ONE_MINUS_SRC_ALPHA,[I_]:s.ONE_MINUS_DST_COLOR,[L_]:s.ONE_MINUS_DST_ALPHA,[F_]:s.CONSTANT_COLOR,[k_]:s.ONE_MINUS_CONSTANT_COLOR,[O_]:s.CONSTANT_ALPHA,[z_]:s.ONE_MINUS_CONSTANT_ALPHA};function Pt(X,Me,be,Fe,Se,me,qe,ft,Lt,wt){if(X===Tr){b===!0&&(ve(s.BLEND),b=!1);return}if(b===!1&&(ie(s.BLEND),b=!0),X!==M_){if(X!==y||wt!==R){if((g!==es||P!==es)&&(s.blendEquation(s.FUNC_ADD),g=es,P=es),wt)switch(X){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gd:s.blendFunc(s.ONE,s.ONE);break;case em:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case em:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}k=null,N=null,H=null,O=null,z.set(0,0,0),V=0,y=X,R=wt}return}Se=Se||Me,me=me||be,qe=qe||Fe,(Me!==g||Se!==P)&&(s.blendEquationSeparate(Bt[Me],Bt[Se]),g=Me,P=Se),(be!==k||Fe!==N||me!==H||qe!==O)&&(s.blendFuncSeparate(F[be],F[Fe],F[me],F[qe]),k=be,N=Fe,H=me,O=qe),(ft.equals(z)===!1||Lt!==V)&&(s.blendColor(ft.r,ft.g,ft.b,Lt),z.copy(ft),V=Lt),y=X,R=!1}function lt(X,Me){X.side===Hi?ve(s.CULL_FACE):ie(s.CULL_FACE);let be=X.side===kn;Me&&(be=!be),tt(be),X.blending===js&&X.transparent===!1?Pt(Tr):Pt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const Fe=X.stencilWrite;f.setTest(Fe),Fe&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ze(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function tt(X){C!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),C=X)}function Ve(X){X!==x_?(ie(s.CULL_FACE),X!==G&&(X===Jp?s.cullFace(s.BACK):X===y_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),G=X}function Et(X){X!==Z&&(te&&s.lineWidth(X),Z=X)}function ze(X,Me,be){X?(ie(s.POLYGON_OFFSET_FILL),(le!==Me||ue!==be)&&(s.polygonOffset(Me,be),le=Me,ue=be)):ve(s.POLYGON_OFFSET_FILL)}function ct(X){X?ie(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function Ut(X){X===void 0&&(X=s.TEXTURE0+de-1),he!==X&&(s.activeTexture(X),he=X)}function nt(X,Me,be){be===void 0&&(he===null?be=s.TEXTURE0+de-1:be=he);let Fe=ce[be];Fe===void 0&&(Fe={type:void 0,texture:void 0},ce[be]=Fe),(Fe.type!==X||Fe.texture!==Me)&&(he!==be&&(s.activeTexture(be),he=be),s.bindTexture(X,Me||Q[X]),Fe.type=X,Fe.texture=Me)}function S(){const X=ce[he];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function W(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function J(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ye(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qe(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(X){Ae.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Ae.copy(X))}function ot(X){Ce.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Ce.copy(X))}function Ke(X,Me){let be=p.get(Me);be===void 0&&(be=new WeakMap,p.set(Me,be));let Fe=be.get(X);Fe===void 0&&(Fe=s.getUniformBlockIndex(Me,X.name),be.set(X,Fe))}function Pe(X,Me){const Fe=p.get(Me).get(X);m.get(Me)!==Fe&&(s.uniformBlockBinding(Me,Fe,X.__bindingPointIndex),m.set(Me,Fe))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},he=null,ce={},_={},x=new WeakMap,M=[],T=null,b=!1,y=null,g=null,k=null,N=null,P=null,H=null,O=null,z=new Rt(0,0,0),V=0,R=!1,C=null,G=null,Z=null,le=null,ue=null,Ae.set(0,0,s.canvas.width,s.canvas.height),Ce.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ie,disable:ve,bindFramebuffer:Re,drawBuffers:De,useProgram:ht,setBlending:Pt,setMaterial:lt,setFlipSided:tt,setCullFace:Ve,setLineWidth:Et,setPolygonOffset:ze,setScissorTest:ct,activeTexture:Ut,bindTexture:nt,unbindTexture:S,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:Qe,texImage3D:we,updateUBOMapping:Ke,uniformBlockBinding:Pe,texStorage2D:xe,texStorage3D:He,texSubImage2D:J,texSubImage3D:pe,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ye,scissor:Ie,viewport:ot,reset:pt}}function xw(s,e,n,r,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new mt,v=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(S,E){return M?new OffscreenCanvas(S,E):Xl("canvas")}function b(S,E,W){let J=1;const pe=nt(S);if((pe.width>W||pe.height>W)&&(J=W/Math.max(pe.width,pe.height)),J<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const oe=Math.floor(J*pe.width),Ye=Math.floor(J*pe.height);_===void 0&&(_=T(oe,Ye));const xe=E?T(oe,Ye):_;return xe.width=oe,xe.height=Ye,xe.getContext("2d").drawImage(S,0,0,oe,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+oe+"x"+Ye+")."),xe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),S;return S}function y(S){return S.generateMipmaps}function g(S){s.generateMipmap(S)}function k(S){return S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?s.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(S,E,W,J,pe=!1){if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let oe=E;if(E===s.RED&&(W===s.FLOAT&&(oe=s.R32F),W===s.HALF_FLOAT&&(oe=s.R16F),W===s.UNSIGNED_BYTE&&(oe=s.R8)),E===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(oe=s.R8UI),W===s.UNSIGNED_SHORT&&(oe=s.R16UI),W===s.UNSIGNED_INT&&(oe=s.R32UI),W===s.BYTE&&(oe=s.R8I),W===s.SHORT&&(oe=s.R16I),W===s.INT&&(oe=s.R32I)),E===s.RG&&(W===s.FLOAT&&(oe=s.RG32F),W===s.HALF_FLOAT&&(oe=s.RG16F),W===s.UNSIGNED_BYTE&&(oe=s.RG8)),E===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(oe=s.RG8UI),W===s.UNSIGNED_SHORT&&(oe=s.RG16UI),W===s.UNSIGNED_INT&&(oe=s.RG32UI),W===s.BYTE&&(oe=s.RG8I),W===s.SHORT&&(oe=s.RG16I),W===s.INT&&(oe=s.RG32I)),E===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),W===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),W===s.UNSIGNED_INT&&(oe=s.RGB32UI),W===s.BYTE&&(oe=s.RGB8I),W===s.SHORT&&(oe=s.RGB16I),W===s.INT&&(oe=s.RGB32I)),E===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),W===s.UNSIGNED_INT&&(oe=s.RGBA32UI),W===s.BYTE&&(oe=s.RGBA8I),W===s.SHORT&&(oe=s.RGBA16I),W===s.INT&&(oe=s.RGBA32I)),E===s.RGB&&(W===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(oe=s.R11F_G11F_B10F)),E===s.RGBA){const Ye=pe?Gl:Ct.getTransfer(J);W===s.FLOAT&&(oe=s.RGBA32F),W===s.HALF_FLOAT&&(oe=s.RGBA16F),W===s.UNSIGNED_BYTE&&(oe=Ye===kt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function P(S,E){let W;return S?E===null||E===rs||E===Yo?W=s.DEPTH24_STENCIL8:E===Ei?W=s.DEPTH32F_STENCIL8:E===jo&&(W=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===rs||E===Yo?W=s.DEPTH_COMPONENT24:E===Ei?W=s.DEPTH_COMPONENT32F:E===jo&&(W=s.DEPTH_COMPONENT16),W}function H(S,E){return y(S)===!0||S.isFramebufferTexture&&S.minFilter!==jn&&S.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?E.mipmaps.length:1}function O(S){const E=S.target;E.removeEventListener("dispose",O),V(E),E.isVideoTexture&&v.delete(E)}function z(S){const E=S.target;E.removeEventListener("dispose",z),C(E)}function V(S){const E=r.get(S);if(E.__webglInit===void 0)return;const W=S.source,J=x.get(W);if(J){const pe=J[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&R(S),Object.keys(J).length===0&&x.delete(W)}r.remove(S)}function R(S){const E=r.get(S);s.deleteTexture(E.__webglTexture);const W=S.source,J=x.get(W);delete J[E.__cacheKey],u.memory.textures--}function C(S){const E=r.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),r.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let pe=0;pe<E.__webglFramebuffer[J].length;pe++)s.deleteFramebuffer(E.__webglFramebuffer[J][pe]);else s.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)s.deleteFramebuffer(E.__webglFramebuffer[J]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=S.textures;for(let J=0,pe=W.length;J<pe;J++){const oe=r.get(W[J]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),u.memory.textures--),r.remove(W[J])}r.remove(S)}let G=0;function Z(){G=0}function le(){const S=G;return S>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+a.maxTextures),G+=1,S}function ue(S){const E=[];return E.push(S.wrapS),E.push(S.wrapT),E.push(S.wrapR||0),E.push(S.magFilter),E.push(S.minFilter),E.push(S.anisotropy),E.push(S.internalFormat),E.push(S.format),E.push(S.type),E.push(S.generateMipmaps),E.push(S.premultiplyAlpha),E.push(S.flipY),E.push(S.unpackAlignment),E.push(S.colorSpace),E.join()}function de(S,E){const W=r.get(S);if(S.isVideoTexture&&ct(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&W.__version!==S.version){const J=S.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(W,S,E);return}}else S.isExternalTexture&&(W.__webglTexture=S.sourceTexture?S.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+E)}function te(S,E){const W=r.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&W.__version!==S.version){Q(W,S,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+E)}function fe(S,E){const W=r.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&W.__version!==S.version){Q(W,S,E);return}n.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+E)}function D(S,E){const W=r.get(S);if(S.version>0&&W.__version!==S.version){ie(W,S,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+E)}const he={[Cd]:s.REPEAT,[gi]:s.CLAMP_TO_EDGE,[Rd]:s.MIRRORED_REPEAT},ce={[jn]:s.NEAREST,[$_]:s.NEAREST_MIPMAP_NEAREST,[cl]:s.NEAREST_MIPMAP_LINEAR,[Fn]:s.LINEAR,[Iu]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR},I={[ex]:s.NEVER,[ox]:s.ALWAYS,[tx]:s.LESS,[yg]:s.LEQUAL,[nx]:s.EQUAL,[sx]:s.GEQUAL,[ix]:s.GREATER,[rx]:s.NOTEQUAL};function ne(S,E){if(E.type===Ei&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===Iu||E.magFilter===cl||E.magFilter===ns||E.minFilter===Fn||E.minFilter===Iu||E.minFilter===cl||E.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(S,s.TEXTURE_WRAP_S,he[E.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,he[E.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,he[E.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,ce[E.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,ce[E.minFilter]),E.compareFunction&&(s.texParameteri(S,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(S,s.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===jn||E.minFilter!==cl&&E.minFilter!==ns||E.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(S,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ae(S,E){let W=!1;S.__webglInit===void 0&&(S.__webglInit=!0,E.addEventListener("dispose",O));const J=E.source;let pe=x.get(J);pe===void 0&&(pe={},x.set(J,pe));const oe=ue(E);if(oe!==S.__cacheKey){pe[oe]===void 0&&(pe[oe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,W=!0),pe[oe].usedTimes++;const Ye=pe[S.__cacheKey];Ye!==void 0&&(pe[S.__cacheKey].usedTimes--,Ye.usedTimes===0&&R(E)),S.__cacheKey=oe,S.__webglTexture=pe[oe].texture}return W}function Ce(S,E,W){return Math.floor(Math.floor(S/W)/E)}function Ue(S,E,W,J){const oe=S.updateRanges;if(oe.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,W,J,E.data);else{oe.sort((we,Ie)=>we.start-Ie.start);let Ye=0;for(let we=1;we<oe.length;we++){const Ie=oe[Ye],ot=oe[we],Ke=Ie.start+Ie.count,Pe=Ce(ot.start,E.width,4),pt=Ce(Ie.start,E.width,4);ot.start<=Ke+1&&Pe===pt&&Ce(ot.start+ot.count-1,E.width,4)===Pe?Ie.count=Math.max(Ie.count,ot.start+ot.count-Ie.start):(++Ye,oe[Ye]=ot)}oe.length=Ye+1;const xe=s.getParameter(s.UNPACK_ROW_LENGTH),He=s.getParameter(s.UNPACK_SKIP_PIXELS),Qe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let we=0,Ie=oe.length;we<Ie;we++){const ot=oe[we],Ke=Math.floor(ot.start/4),Pe=Math.ceil(ot.count/4),pt=Ke%E.width,X=Math.floor(Ke/E.width),Me=Pe,be=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),n.texSubImage2D(s.TEXTURE_2D,0,pt,X,Me,be,W,J,E.data)}S.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,xe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,He),s.pixelStorei(s.UNPACK_SKIP_ROWS,Qe)}}function Q(S,E,W){let J=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=s.TEXTURE_3D);const pe=Ae(S,E),oe=E.source;n.bindTexture(J,S.__webglTexture,s.TEXTURE0+W);const Ye=r.get(oe);if(oe.version!==Ye.__version||pe===!0){n.activeTexture(s.TEXTURE0+W);const xe=Ct.getPrimaries(Ct.workingColorSpace),He=E.colorSpace===Mr?null:Ct.getPrimaries(E.colorSpace),Qe=E.colorSpace===Mr||xe===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let we=b(E.image,!1,a.maxTextureSize);we=Ut(E,we);const Ie=l.convert(E.format,E.colorSpace),ot=l.convert(E.type);let Ke=N(E.internalFormat,Ie,ot,E.colorSpace,E.isVideoTexture);ne(J,E);let Pe;const pt=E.mipmaps,X=E.isVideoTexture!==!0,Me=Ye.__version===void 0||pe===!0,be=oe.dataReady,Fe=H(E,we);if(E.isDepthTexture)Ke=P(E.format===$o,E.type),Me&&(X?n.texStorage2D(s.TEXTURE_2D,1,Ke,we.width,we.height):n.texImage2D(s.TEXTURE_2D,0,Ke,we.width,we.height,0,Ie,ot,null));else if(E.isDataTexture)if(pt.length>0){X&&Me&&n.texStorage2D(s.TEXTURE_2D,Fe,Ke,pt[0].width,pt[0].height);for(let Se=0,me=pt.length;Se<me;Se++)Pe=pt[Se],X?be&&n.texSubImage2D(s.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,Ie,ot,Pe.data):n.texImage2D(s.TEXTURE_2D,Se,Ke,Pe.width,Pe.height,0,Ie,ot,Pe.data);E.generateMipmaps=!1}else X?(Me&&n.texStorage2D(s.TEXTURE_2D,Fe,Ke,we.width,we.height),be&&Ue(E,we,Ie,ot)):n.texImage2D(s.TEXTURE_2D,0,Ke,we.width,we.height,0,Ie,ot,we.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Me&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Ke,pt[0].width,pt[0].height,we.depth);for(let Se=0,me=pt.length;Se<me;Se++)if(Pe=pt[Se],E.format!==ni)if(Ie!==null)if(X){if(be)if(E.layerUpdates.size>0){const qe=Am(Pe.width,Pe.height,E.format,E.type);for(const ft of E.layerUpdates){const Lt=Pe.data.subarray(ft*qe/Pe.data.BYTES_PER_ELEMENT,(ft+1)*qe/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,ft,Pe.width,Pe.height,1,Ie,Lt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Pe.width,Pe.height,we.depth,Ie,Pe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,Ke,Pe.width,Pe.height,we.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?be&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Pe.width,Pe.height,we.depth,Ie,ot,Pe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Se,Ke,Pe.width,Pe.height,we.depth,0,Ie,ot,Pe.data)}else{X&&Me&&n.texStorage2D(s.TEXTURE_2D,Fe,Ke,pt[0].width,pt[0].height);for(let Se=0,me=pt.length;Se<me;Se++)Pe=pt[Se],E.format!==ni?Ie!==null?X?be&&n.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,Ie,Pe.data):n.compressedTexImage2D(s.TEXTURE_2D,Se,Ke,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?be&&n.texSubImage2D(s.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,Ie,ot,Pe.data):n.texImage2D(s.TEXTURE_2D,Se,Ke,Pe.width,Pe.height,0,Ie,ot,Pe.data)}else if(E.isDataArrayTexture)if(X){if(Me&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,Ke,we.width,we.height,we.depth),be)if(E.layerUpdates.size>0){const Se=Am(we.width,we.height,E.format,E.type);for(const me of E.layerUpdates){const qe=we.data.subarray(me*Se/we.data.BYTES_PER_ELEMENT,(me+1)*Se/we.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,we.width,we.height,1,Ie,ot,qe)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Ie,ot,we.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Ke,we.width,we.height,we.depth,0,Ie,ot,we.data);else if(E.isData3DTexture)X?(Me&&n.texStorage3D(s.TEXTURE_3D,Fe,Ke,we.width,we.height,we.depth),be&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Ie,ot,we.data)):n.texImage3D(s.TEXTURE_3D,0,Ke,we.width,we.height,we.depth,0,Ie,ot,we.data);else if(E.isFramebufferTexture){if(Me)if(X)n.texStorage2D(s.TEXTURE_2D,Fe,Ke,we.width,we.height);else{let Se=we.width,me=we.height;for(let qe=0;qe<Fe;qe++)n.texImage2D(s.TEXTURE_2D,qe,Ke,Se,me,0,Ie,ot,null),Se>>=1,me>>=1}}else if(pt.length>0){if(X&&Me){const Se=nt(pt[0]);n.texStorage2D(s.TEXTURE_2D,Fe,Ke,Se.width,Se.height)}for(let Se=0,me=pt.length;Se<me;Se++)Pe=pt[Se],X?be&&n.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ie,ot,Pe):n.texImage2D(s.TEXTURE_2D,Se,Ke,Ie,ot,Pe);E.generateMipmaps=!1}else if(X){if(Me){const Se=nt(we);n.texStorage2D(s.TEXTURE_2D,Fe,Ke,Se.width,Se.height)}be&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,ot,we)}else n.texImage2D(s.TEXTURE_2D,0,Ke,Ie,ot,we);y(E)&&g(J),Ye.__version=oe.version,E.onUpdate&&E.onUpdate(E)}S.__version=E.version}function ie(S,E,W){if(E.image.length!==6)return;const J=Ae(S,E),pe=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+W);const oe=r.get(pe);if(pe.version!==oe.__version||J===!0){n.activeTexture(s.TEXTURE0+W);const Ye=Ct.getPrimaries(Ct.workingColorSpace),xe=E.colorSpace===Mr?null:Ct.getPrimaries(E.colorSpace),He=E.colorSpace===Mr||Ye===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Qe=E.isCompressedTexture||E.image[0].isCompressedTexture,we=E.image[0]&&E.image[0].isDataTexture,Ie=[];for(let me=0;me<6;me++)!Qe&&!we?Ie[me]=b(E.image[me],!0,a.maxCubemapSize):Ie[me]=we?E.image[me].image:E.image[me],Ie[me]=Ut(E,Ie[me]);const ot=Ie[0],Ke=l.convert(E.format,E.colorSpace),Pe=l.convert(E.type),pt=N(E.internalFormat,Ke,Pe,E.colorSpace),X=E.isVideoTexture!==!0,Me=oe.__version===void 0||J===!0,be=pe.dataReady;let Fe=H(E,ot);ne(s.TEXTURE_CUBE_MAP,E);let Se;if(Qe){X&&Me&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,pt,ot.width,ot.height);for(let me=0;me<6;me++){Se=Ie[me].mipmaps;for(let qe=0;qe<Se.length;qe++){const ft=Se[qe];E.format!==ni?Ke!==null?X?be&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe,0,0,ft.width,ft.height,Ke,ft.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe,pt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?be&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe,0,0,ft.width,ft.height,Ke,Pe,ft.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe,pt,ft.width,ft.height,0,Ke,Pe,ft.data)}}}else{if(Se=E.mipmaps,X&&Me){Se.length>0&&Fe++;const me=nt(Ie[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,pt,me.width,me.height)}for(let me=0;me<6;me++)if(we){X?be&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ie[me].width,Ie[me].height,Ke,Pe,Ie[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,pt,Ie[me].width,Ie[me].height,0,Ke,Pe,Ie[me].data);for(let qe=0;qe<Se.length;qe++){const Lt=Se[qe].image[me].image;X?be&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe+1,0,0,Lt.width,Lt.height,Ke,Pe,Lt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe+1,pt,Lt.width,Lt.height,0,Ke,Pe,Lt.data)}}else{X?be&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ke,Pe,Ie[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,pt,Ke,Pe,Ie[me]);for(let qe=0;qe<Se.length;qe++){const ft=Se[qe];X?be&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe+1,0,0,Ke,Pe,ft.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,qe+1,pt,Ke,Pe,ft.image[me])}}}y(E)&&g(s.TEXTURE_CUBE_MAP),oe.__version=pe.version,E.onUpdate&&E.onUpdate(E)}S.__version=E.version}function ve(S,E,W,J,pe,oe){const Ye=l.convert(W.format,W.colorSpace),xe=l.convert(W.type),He=N(W.internalFormat,Ye,xe,W.colorSpace),Qe=r.get(E),we=r.get(W);if(we.__renderTarget=E,!Qe.__hasExternalTextures){const Ie=Math.max(1,E.width>>oe),ot=Math.max(1,E.height>>oe);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?n.texImage3D(pe,oe,He,Ie,ot,E.depth,0,Ye,xe,null):n.texImage2D(pe,oe,He,Ie,ot,0,Ye,xe,null)}n.bindFramebuffer(s.FRAMEBUFFER,S),ze(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,pe,we.__webglTexture,0,Et(E)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,pe,we.__webglTexture,oe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(S,E,W){if(s.bindRenderbuffer(s.RENDERBUFFER,S),E.depthBuffer){const J=E.depthTexture,pe=J&&J.isDepthTexture?J.type:null,oe=P(E.stencilBuffer,pe),Ye=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=Et(E);ze(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xe,oe,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,oe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,oe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ye,s.RENDERBUFFER,S)}else{const J=E.textures;for(let pe=0;pe<J.length;pe++){const oe=J[pe],Ye=l.convert(oe.format,oe.colorSpace),xe=l.convert(oe.type),He=N(oe.internalFormat,Ye,xe,oe.colorSpace),Qe=Et(E);W&&ze(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,He,E.width,E.height):ze(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe,He,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,He,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(S,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,S),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=r.get(E.depthTexture);J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),de(E.depthTexture,0);const pe=J.__webglTexture,oe=Et(E);if(E.depthTexture.format===qo)ze(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(E.depthTexture.format===$o)ze(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function ht(S){const E=r.get(S),W=S.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==S.depthTexture){const J=S.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const pe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",pe)};J.addEventListener("dispose",pe),E.__depthDisposeCallback=pe}E.__boundDepthTexture=J}if(S.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const J=S.texture.mipmaps;J&&J.length>0?De(E.__webglFramebuffer[0],S):De(E.__webglFramebuffer,S)}else if(W){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=s.createRenderbuffer(),Re(E.__webglDepthbuffer[J],S,!1);else{const pe=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,oe)}}else{const J=S.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Re(E.__webglDepthbuffer,S,!1);else{const pe=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,oe)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(S,E,W){const J=r.get(S);E!==void 0&&ve(J.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&ht(S)}function F(S){const E=S.texture,W=r.get(S),J=r.get(E);S.addEventListener("dispose",z);const pe=S.textures,oe=S.isWebGLCubeRenderTarget===!0,Ye=pe.length>1;if(Ye||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=E.version,u.memory.textures++),oe){W.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[xe]=[];for(let He=0;He<E.mipmaps.length;He++)W.__webglFramebuffer[xe][He]=s.createFramebuffer()}else W.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let xe=0;xe<E.mipmaps.length;xe++)W.__webglFramebuffer[xe]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Ye)for(let xe=0,He=pe.length;xe<He;xe++){const Qe=r.get(pe[xe]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=s.createTexture(),u.memory.textures++)}if(S.samples>0&&ze(S)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let xe=0;xe<pe.length;xe++){const He=pe[xe];W.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[xe]);const Qe=l.convert(He.format,He.colorSpace),we=l.convert(He.type),Ie=N(He.internalFormat,Qe,we,He.colorSpace,S.isXRRenderTarget===!0),ot=Et(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,Ie,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,W.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(W.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){n.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),ne(s.TEXTURE_CUBE_MAP,E);for(let xe=0;xe<6;xe++)if(E.mipmaps&&E.mipmaps.length>0)for(let He=0;He<E.mipmaps.length;He++)ve(W.__webglFramebuffer[xe][He],S,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,He);else ve(W.__webglFramebuffer[xe],S,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);y(E)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ye){for(let xe=0,He=pe.length;xe<He;xe++){const Qe=pe[xe],we=r.get(Qe);let Ie=s.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Ie=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ie,we.__webglTexture),ne(Ie,Qe),ve(W.__webglFramebuffer,S,Qe,s.COLOR_ATTACHMENT0+xe,Ie,0),y(Qe)&&g(Ie)}n.unbindTexture()}else{let xe=s.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(xe=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(xe,J.__webglTexture),ne(xe,E),E.mipmaps&&E.mipmaps.length>0)for(let He=0;He<E.mipmaps.length;He++)ve(W.__webglFramebuffer[He],S,E,s.COLOR_ATTACHMENT0,xe,He);else ve(W.__webglFramebuffer,S,E,s.COLOR_ATTACHMENT0,xe,0);y(E)&&g(xe),n.unbindTexture()}S.depthBuffer&&ht(S)}function Pt(S){const E=S.textures;for(let W=0,J=E.length;W<J;W++){const pe=E[W];if(y(pe)){const oe=k(S),Ye=r.get(pe).__webglTexture;n.bindTexture(oe,Ye),g(oe),n.unbindTexture()}}}const lt=[],tt=[];function Ve(S){if(S.samples>0){if(ze(S)===!1){const E=S.textures,W=S.width,J=S.height;let pe=s.COLOR_BUFFER_BIT;const oe=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ye=r.get(S),xe=E.length>1;if(xe)for(let Qe=0;Qe<E.length;Qe++)n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const He=S.texture.mipmaps;He&&He.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Qe=0;Qe<E.length;Qe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[Qe]);const we=r.get(E[Qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,we,0)}s.blitFramebuffer(0,0,W,J,0,0,W,J,pe,s.NEAREST),m===!0&&(lt.length=0,tt.length=0,lt.push(s.COLOR_ATTACHMENT0+Qe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(lt.push(oe),tt.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,tt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let Qe=0;Qe<E.length;Qe++){n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[Qe]);const we=r.get(E[Qe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Qe,s.TEXTURE_2D,we,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&m){const E=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Et(S){return Math.min(a.maxSamples,S.samples)}function ze(S){const E=r.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ct(S){const E=u.render.frame;v.get(S)!==E&&(v.set(S,E),S.update())}function Ut(S,E){const W=S.colorSpace,J=S.format,pe=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||W!==Zs&&W!==Mr&&(Ct.getTransfer(W)===kt?(J!==ni||pe!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function nt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(p.width=S.naturalWidth||S.width,p.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(p.width=S.displayWidth,p.height=S.displayHeight):(p.width=S.width,p.height=S.height),p}this.allocateTextureUnit=le,this.resetTextureUnits=Z,this.setTexture2D=de,this.setTexture2DArray=te,this.setTexture3D=fe,this.setTextureCube=D,this.rebindTextures=Bt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ze}function yw(s,e){function n(r,a=Mr){let l;const u=Ct.getTransfer(a);if(r===Xi)return s.UNSIGNED_BYTE;if(r===hf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===pf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===pg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===mg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===fg)return s.BYTE;if(r===hg)return s.SHORT;if(r===jo)return s.UNSIGNED_SHORT;if(r===ff)return s.INT;if(r===rs)return s.UNSIGNED_INT;if(r===Ei)return s.FLOAT;if(r===Js)return s.HALF_FLOAT;if(r===gg)return s.ALPHA;if(r===vg)return s.RGB;if(r===ni)return s.RGBA;if(r===qo)return s.DEPTH_COMPONENT;if(r===$o)return s.DEPTH_STENCIL;if(r===_g)return s.RED;if(r===mf)return s.RED_INTEGER;if(r===xg)return s.RG;if(r===gf)return s.RG_INTEGER;if(r===vf)return s.RGBA_INTEGER;if(r===Fl||r===kl||r===Ol||r===zl)if(u===kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Fl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Fl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pd||r===Dd||r===Ld||r===Nd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Pd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Dd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ld)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Id||r===Ud||r===Fd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Id||r===Ud)return u===kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Fd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kd||r===Od||r===zd||r===Bd||r===Vd||r===Hd||r===Gd||r===Wd||r===Xd||r===jd||r===Yd||r===qd||r===$d||r===Kd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===kd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Od)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===zd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$d)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zd||r===Qd||r===Jd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Zd)return u===kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ef||r===tf||r===nf||r===rf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===ef)return l.COMPRESSED_RED_RGTC1_EXT;if(r===tf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===rf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const Sw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mw=`
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

}`;class Ew{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Ng(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Yi({vertexShader:Sw,fragmentShader:Mw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ii(new is(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ww extends eo{constructor(e,n){super();const r=this;let a=null,l=1,u=null,f="local-floor",m=1,p=null,v=null,_=null,x=null,M=null,T=null;const b=typeof XRWebGLBinding<"u",y=new Ew,g={},k=n.getContextAttributes();let N=null,P=null;const H=[],O=[],z=new mt;let V=null;const R=new pi;R.viewport=new qt;const C=new pi;C.viewport=new qt;const G=[R,C],Z=new Wx;let le=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=H[Q];return ie===void 0&&(ie=new id,H[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=H[Q];return ie===void 0&&(ie=new id,H[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=H[Q];return ie===void 0&&(ie=new id,H[Q]=ie),ie.getHandSpace()};function de(Q){const ie=O.indexOf(Q.inputSource);if(ie===-1)return;const ve=H[ie];ve!==void 0&&(ve.update(Q.inputSource,Q.frame,p||u),ve.dispatchEvent({type:Q.type,data:Q.inputSource}))}function te(){a.removeEventListener("select",de),a.removeEventListener("selectstart",de),a.removeEventListener("selectend",de),a.removeEventListener("squeeze",de),a.removeEventListener("squeezestart",de),a.removeEventListener("squeezeend",de),a.removeEventListener("end",te),a.removeEventListener("inputsourceschange",fe);for(let Q=0;Q<H.length;Q++){const ie=O[Q];ie!==null&&(O[Q]=null,H[Q].disconnect(ie))}le=null,ue=null,y.reset();for(const Q in g)delete g[Q];e.setRenderTarget(N),M=null,x=null,_=null,a=null,P=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(V),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(a,n)),_},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(N=e.getRenderTarget(),a.addEventListener("select",de),a.addEventListener("selectstart",de),a.addEventListener("selectend",de),a.addEventListener("squeeze",de),a.addEventListener("squeezestart",de),a.addEventListener("squeezeend",de),a.addEventListener("end",te),a.addEventListener("inputsourceschange",fe),k.xrCompatible!==!0&&await n.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(z),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Re=null,De=null;k.depth&&(De=k.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=k.stencil?$o:qo,Re=k.stencil?Yo:rs);const ht={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:l};_=this.getBinding(),x=_.createProjectionLayer(ht),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new Cr(x.textureWidth,x.textureHeight,{format:ni,type:Xi,depthTexture:new Lg(x.textureWidth,x.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:k.stencil,colorSpace:e.outputColorSpace,samples:k.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const ve={antialias:k.antialias,alpha:!0,depth:k.depth,stencil:k.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,n,ve),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Cr(M.framebufferWidth,M.framebufferHeight,{format:ni,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:k.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await a.requestReferenceSpace(f),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function fe(Q){for(let ie=0;ie<Q.removed.length;ie++){const ve=Q.removed[ie],Re=O.indexOf(ve);Re>=0&&(O[Re]=null,H[Re].disconnect(ve))}for(let ie=0;ie<Q.added.length;ie++){const ve=Q.added[ie];let Re=O.indexOf(ve);if(Re===-1){for(let ht=0;ht<H.length;ht++)if(ht>=O.length){O.push(ve),Re=ht;break}else if(O[ht]===null){O[ht]=ve,Re=ht;break}if(Re===-1)break}const De=H[Re];De&&De.connect(ve)}}const D=new re,he=new re;function ce(Q,ie,ve){D.setFromMatrixPosition(ie.matrixWorld),he.setFromMatrixPosition(ve.matrixWorld);const Re=D.distanceTo(he),De=ie.projectionMatrix.elements,ht=ve.projectionMatrix.elements,Bt=De[14]/(De[10]-1),F=De[14]/(De[10]+1),Pt=(De[9]+1)/De[5],lt=(De[9]-1)/De[5],tt=(De[8]-1)/De[0],Ve=(ht[8]+1)/ht[0],Et=Bt*tt,ze=Bt*Ve,ct=Re/(-tt+Ve),Ut=ct*-tt;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ut),Q.translateZ(ct),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),De[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const nt=Bt+ct,S=F+ct,E=Et-Ut,W=ze+(Re-Ut),J=Pt*F/S*nt,pe=lt*F/S*nt;Q.projectionMatrix.makePerspective(E,W,J,pe,nt,S),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function I(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let ie=Q.near,ve=Q.far;y.texture!==null&&(y.depthNear>0&&(ie=y.depthNear),y.depthFar>0&&(ve=y.depthFar)),Z.near=C.near=R.near=ie,Z.far=C.far=R.far=ve,(le!==Z.near||ue!==Z.far)&&(a.updateRenderState({depthNear:Z.near,depthFar:Z.far}),le=Z.near,ue=Z.far),Z.layers.mask=Q.layers.mask|6,R.layers.mask=Z.layers.mask&3,C.layers.mask=Z.layers.mask&5;const Re=Q.parent,De=Z.cameras;I(Z,Re);for(let ht=0;ht<De.length;ht++)I(De[ht],Re);De.length===2?ce(Z,R,C):Z.projectionMatrix.copy(R.projectionMatrix),ne(Q,Z,Re)};function ne(Q,ie,ve){ve===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(ve.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=sf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(Q){return g[Q]};let Ae=null;function Ce(Q,ie){if(v=ie.getViewerPose(p||u),T=ie,v!==null){const ve=v.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Re=!1;ve.length!==Z.cameras.length&&(Z.cameras.length=0,Re=!0);for(let F=0;F<ve.length;F++){const Pt=ve[F];let lt=null;if(M!==null)lt=M.getViewport(Pt);else{const Ve=_.getViewSubImage(x,Pt);lt=Ve.viewport,F===0&&(e.setRenderTargetTextures(P,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(P))}let tt=G[F];tt===void 0&&(tt=new pi,tt.layers.enable(F),tt.viewport=new qt,G[F]=tt),tt.matrix.fromArray(Pt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Pt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(lt.x,lt.y,lt.width,lt.height),F===0&&(Z.matrix.copy(tt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Re===!0&&Z.cameras.push(tt)}const De=a.enabledFeatures;if(De&&De.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){_=r.getBinding();const F=_.getDepthInformation(ve[0]);F&&F.isValid&&F.texture&&y.init(F,a.renderState)}if(De&&De.includes("camera-access")&&b){e.state.unbindTexture(),_=r.getBinding();for(let F=0;F<ve.length;F++){const Pt=ve[F].camera;if(Pt){let lt=g[Pt];lt||(lt=new Ng,g[Pt]=lt);const tt=_.getCameraImage(Pt);lt.sourceTexture=tt}}}}for(let ve=0;ve<H.length;ve++){const Re=O[ve],De=H[ve];Re!==null&&De!==void 0&&De.update(Re,ie,p||u)}Ae&&Ae(Q,ie),ie.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ie}),T=null}const Ue=new Ig;Ue.setAnimationLoop(Ce),this.setAnimationLoop=function(Q){Ae=Q},this.dispose=function(){}}}const Kr=new ji,Tw=new Jt;function bw(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Rg(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,k,N,P){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(y,g):g.isMeshToonMaterial?(l(y,g),_(y,g)):g.isMeshPhongMaterial?(l(y,g),v(y,g)):g.isMeshStandardMaterial?(l(y,g),x(y,g),g.isMeshPhysicalMaterial&&M(y,g,P)):g.isMeshMatcapMaterial?(l(y,g),T(y,g)):g.isMeshDepthMaterial?l(y,g):g.isMeshDistanceMaterial?(l(y,g),b(y,g)):g.isMeshNormalMaterial?l(y,g):g.isLineBasicMaterial?(u(y,g),g.isLineDashedMaterial&&f(y,g)):g.isPointsMaterial?m(y,g,k,N):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===kn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===kn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const k=e.get(g),N=k.envMap,P=k.envMapRotation;N&&(y.envMap.value=N,Kr.copy(P),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),y.envMapRotation.value.setFromMatrix4(Tw.makeRotationFromEuler(Kr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function u(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function f(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,k,N){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*k,y.scale.value=N*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function v(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function _(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,k){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===kn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=k.texture,y.transmissionSamplerSize.value.set(k.width,k.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,g){g.matcap&&(y.matcap.value=g.matcap)}function b(y,g){const k=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(k.matrixWorld),y.nearDistance.value=k.shadow.camera.near,y.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Aw(s,e,n,r){let a={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(k,N){const P=N.program;r.uniformBlockBinding(k,P)}function p(k,N){let P=a[k.id];P===void 0&&(T(k),P=v(k),a[k.id]=P,k.addEventListener("dispose",y));const H=N.program;r.updateUBOMapping(k,H);const O=e.render.frame;l[k.id]!==O&&(x(k),l[k.id]=O)}function v(k){const N=_();k.__bindingPointIndex=N;const P=s.createBuffer(),H=k.__size,O=k.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,H,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,P),P}function _(){for(let k=0;k<f;k++)if(u.indexOf(k)===-1)return u.push(k),k;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(k){const N=a[k.id],P=k.uniforms,H=k.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let O=0,z=P.length;O<z;O++){const V=Array.isArray(P[O])?P[O]:[P[O]];for(let R=0,C=V.length;R<C;R++){const G=V[R];if(M(G,O,R,H)===!0){const Z=G.__offset,le=Array.isArray(G.value)?G.value:[G.value];let ue=0;for(let de=0;de<le.length;de++){const te=le[de],fe=b(te);typeof te=="number"||typeof te=="boolean"?(G.__data[0]=te,s.bufferSubData(s.UNIFORM_BUFFER,Z+ue,G.__data)):te.isMatrix3?(G.__data[0]=te.elements[0],G.__data[1]=te.elements[1],G.__data[2]=te.elements[2],G.__data[3]=0,G.__data[4]=te.elements[3],G.__data[5]=te.elements[4],G.__data[6]=te.elements[5],G.__data[7]=0,G.__data[8]=te.elements[6],G.__data[9]=te.elements[7],G.__data[10]=te.elements[8],G.__data[11]=0):(te.toArray(G.__data,ue),ue+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(k,N,P,H){const O=k.value,z=N+"_"+P;if(H[z]===void 0)return typeof O=="number"||typeof O=="boolean"?H[z]=O:H[z]=O.clone(),!0;{const V=H[z];if(typeof O=="number"||typeof O=="boolean"){if(V!==O)return H[z]=O,!0}else if(V.equals(O)===!1)return V.copy(O),!0}return!1}function T(k){const N=k.uniforms;let P=0;const H=16;for(let z=0,V=N.length;z<V;z++){const R=Array.isArray(N[z])?N[z]:[N[z]];for(let C=0,G=R.length;C<G;C++){const Z=R[C],le=Array.isArray(Z.value)?Z.value:[Z.value];for(let ue=0,de=le.length;ue<de;ue++){const te=le[ue],fe=b(te),D=P%H,he=D%fe.boundary,ce=D+he;P+=he,ce!==0&&H-ce<fe.storage&&(P+=H-ce),Z.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=P,P+=fe.storage}}}const O=P%H;return O>0&&(P+=H-O),k.__size=P,k.__cache={},this}function b(k){const N={boundary:0,storage:0};return typeof k=="number"||typeof k=="boolean"?(N.boundary=4,N.storage=4):k.isVector2?(N.boundary=8,N.storage=8):k.isVector3||k.isColor?(N.boundary=16,N.storage=12):k.isVector4?(N.boundary=16,N.storage=16):k.isMatrix3?(N.boundary=48,N.storage=48):k.isMatrix4?(N.boundary=64,N.storage=64):k.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",k),N}function y(k){const N=k.target;N.removeEventListener("dispose",y);const P=u.indexOf(N.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(a[N.id]),delete a[N.id],delete l[N.id]}function g(){for(const k in a)s.deleteBuffer(a[k]);u=[],a={},l={}}return{bind:m,update:p,dispose:g}}class Cw{constructor(e={}){const{canvas:n=lx(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const T=new Uint32Array(4),b=new Int32Array(4);let y=null,g=null;const k=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=br,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let H=!1;this._outputColorSpace=ti;let O=0,z=0,V=null,R=-1,C=null;const G=new qt,Z=new qt;let le=null;const ue=new Rt(0);let de=0,te=n.width,fe=n.height,D=1,he=null,ce=null;const I=new qt(0,0,te,fe),ne=new qt(0,0,te,fe);let Ae=!1;const Ce=new Dg;let Ue=!1,Q=!1;const ie=new Jt,ve=new re,Re=new qt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Bt(){return V===null?D:1}let F=r;function Pt(A,q){return n.getContext(A,q)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${df}`),n.addEventListener("webglcontextlost",be,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",Se,!1),F===null){const q="webgl2";if(F=Pt(q,A),F===null)throw Pt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let lt,tt,Ve,Et,ze,ct,Ut,nt,S,E,W,J,pe,oe,Ye,xe,He,Qe,we,Ie,ot,Ke,Pe,pt;function X(){lt=new OM(F),lt.init(),Ke=new yw(F,lt),tt=new DM(F,lt,e,Ke),Ve=new _w(F,lt),tt.reversedDepthBuffer&&x&&Ve.buffers.depth.setReversed(!0),Et=new VM(F),ze=new sw,ct=new xw(F,lt,Ve,ze,tt,Ke,Et),Ut=new NM(P),nt=new kM(P),S=new Yx(F),Pe=new RM(F,S),E=new zM(F,S,Et,Pe),W=new GM(F,E,S,Et),we=new HM(F,tt,ct),xe=new LM(ze),J=new rw(P,Ut,nt,lt,tt,Pe,xe),pe=new bw(P,ze),oe=new aw,Ye=new hw(lt),Qe=new CM(P,Ut,nt,Ve,W,M,m),He=new gw(P,W,tt),pt=new Aw(F,Et,tt,Ve),Ie=new PM(F,lt,Et),ot=new BM(F,lt,Et),Et.programs=J.programs,P.capabilities=tt,P.extensions=lt,P.properties=ze,P.renderLists=oe,P.shadowMap=He,P.state=Ve,P.info=Et}X();const Me=new ww(P,F);this.xr=Me,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=lt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=lt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(A){A!==void 0&&(D=A,this.setSize(te,fe,!1))},this.getSize=function(A){return A.set(te,fe)},this.setSize=function(A,q,se=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=A,fe=q,n.width=Math.floor(A*D),n.height=Math.floor(q*D),se===!0&&(n.style.width=A+"px",n.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(te*D,fe*D).floor()},this.setDrawingBufferSize=function(A,q,se){te=A,fe=q,D=se,n.width=Math.floor(A*se),n.height=Math.floor(q*se),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,q,se,ae){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,q,se,ae),Ve.viewport(G.copy(I).multiplyScalar(D).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,q,se,ae){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,q,se,ae),Ve.scissor(Z.copy(ne).multiplyScalar(D).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(A){Ve.setScissorTest(Ae=A)},this.setOpaqueSort=function(A){he=A},this.setTransparentSort=function(A){ce=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,se=!0){let ae=0;if(A){let Y=!1;if(V!==null){const Ee=V.texture.format;Y=Ee===vf||Ee===gf||Ee===mf}if(Y){const Ee=V.texture.type,Le=Ee===Xi||Ee===rs||Ee===jo||Ee===Yo||Ee===hf||Ee===pf,Ge=Qe.getClearColor(),ke=Qe.getClearAlpha(),st=Ge.r,at=Ge.g,Je=Ge.b;Le?(T[0]=st,T[1]=at,T[2]=Je,T[3]=ke,F.clearBufferuiv(F.COLOR,0,T)):(b[0]=st,b[1]=at,b[2]=Je,b[3]=ke,F.clearBufferiv(F.COLOR,0,b))}else ae|=F.COLOR_BUFFER_BIT}q&&(ae|=F.DEPTH_BUFFER_BIT),se&&(ae|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",be,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),Qe.dispose(),oe.dispose(),Ye.dispose(),ze.dispose(),Ut.dispose(),nt.dispose(),W.dispose(),Pe.dispose(),pt.dispose(),J.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",pn),Me.removeEventListener("sessionend",ss),zn.stop()};function be(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const A=Et.autoReset,q=He.enabled,se=He.autoUpdate,ae=He.needsUpdate,Y=He.type;X(),Et.autoReset=A,He.enabled=q,He.autoUpdate=se,He.needsUpdate=ae,He.type=Y}function Se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function me(A){const q=A.target;q.removeEventListener("dispose",me),qe(q)}function qe(A){ft(A),ze.remove(A)}function ft(A){const q=ze.get(A).programs;q!==void 0&&(q.forEach(function(se){J.releaseProgram(se)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,se,ae,Y,Ee){q===null&&(q=De);const Le=Y.isMesh&&Y.matrixWorld.determinant()<0,Ge=bi(A,q,se,ae,Y);Ve.setMaterial(ae,Le);let ke=se.index,st=1;if(ae.wireframe===!0){if(ke=E.getWireframeAttribute(se),ke===void 0)return;st=2}const at=se.drawRange,Je=se.attributes.position;let ut=at.start*st,Dt=(at.start+at.count)*st;Ee!==null&&(ut=Math.max(ut,Ee.start*st),Dt=Math.min(Dt,(Ee.start+Ee.count)*st)),ke!==null?(ut=Math.max(ut,0),Dt=Math.min(Dt,ke.count)):Je!=null&&(ut=Math.max(ut,0),Dt=Math.min(Dt,Je.count));const Tt=Dt-ut;if(Tt<0||Tt===1/0)return;Pe.setup(Y,ae,Ge,se,ke);let Ot,Nt=Ie;if(ke!==null&&(Ot=S.get(ke),Nt=ot,Nt.setIndex(Ot)),Y.isMesh)ae.wireframe===!0?(Ve.setLineWidth(ae.wireframeLinewidth*Bt()),Nt.setMode(F.LINES)):Nt.setMode(F.TRIANGLES);else if(Y.isLine){let et=ae.linewidth;et===void 0&&(et=1),Ve.setLineWidth(et*Bt()),Y.isLineSegments?Nt.setMode(F.LINES):Y.isLineLoop?Nt.setMode(F.LINE_LOOP):Nt.setMode(F.LINE_STRIP)}else Y.isPoints?Nt.setMode(F.POINTS):Y.isSprite&&Nt.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Ko("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const et=Y._multiDrawStarts,Ft=Y._multiDrawCounts,yt=Y._multiDrawCount,en=ke?S.get(ke).bytesPerElement:1,ri=ze.get(ae).currentProgram.getUniforms();for(let En=0;En<yt;En++)ri.setValue(F,"_gl_DrawID",En),Nt.render(et[En]/en,Ft[En])}else if(Y.isInstancedMesh)Nt.renderInstances(ut,Tt,Y.count);else if(se.isInstancedBufferGeometry){const et=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ft=Math.min(se.instanceCount,et);Nt.renderInstances(ut,Tt,Ft)}else Nt.render(ut,Tt)};function Lt(A,q,se){A.transparent===!0&&A.side===Hi&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,as(A,q,se),A.side=Ar,A.needsUpdate=!0,as(A,q,se),A.side=Hi):as(A,q,se)}this.compile=function(A,q,se=null){se===null&&(se=A),g=Ye.get(se),g.init(q),N.push(g),se.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),A!==se&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const ae=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ee=Y.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){const Ge=Ee[Le];Lt(Ge,se,Y),ae.add(Ge)}else Lt(Ee,se,Y),ae.add(Ee)}),g=N.pop(),ae},this.compileAsync=function(A,q,se=null){const ae=this.compile(A,q,se);return new Promise(Y=>{function Ee(){if(ae.forEach(function(Le){ze.get(Le).currentProgram.isReady()&&ae.delete(Le)}),ae.size===0){Y(A);return}setTimeout(Ee,10)}lt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let wt=null;function Yn(A){wt&&wt(A)}function pn(){zn.stop()}function ss(){zn.start()}const zn=new Ig;zn.setAnimationLoop(Yn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(A){wt=A,Me.setAnimationLoop(A),A===null?zn.stop():zn.start()},Me.addEventListener("sessionstart",pn),Me.addEventListener("sessionend",ss),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(q),q=Me.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,q,V),g=Ye.get(A,N.length),g.init(q),N.push(g),ie.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ce.setFromProjectionMatrix(ie,wi,q.reversedDepth),Q=this.localClippingEnabled,Ue=xe.init(this.clippingPlanes,Q),y=oe.get(A,k.length),y.init(),k.push(y),Me.enabled===!0&&Me.isPresenting===!0){const Ee=P.xr.getDepthSensingMesh();Ee!==null&&ro(Ee,q,-1/0,P.sortObjects)}ro(A,q,0,P.sortObjects),y.finish(),P.sortObjects===!0&&y.sort(he,ce),ht=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ht&&Qe.addToRenderList(y,A),this.info.render.frame++,Ue===!0&&xe.beginShadows();const se=g.state.shadowsArray;He.render(se,A,q),Ue===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ae=y.opaque,Y=y.transmissive;if(g.setupLights(),q.isArrayCamera){const Ee=q.cameras;if(Y.length>0)for(let Le=0,Ge=Ee.length;Le<Ge;Le++){const ke=Ee[Le];Pr(ae,Y,A,ke)}ht&&Qe.render(A);for(let Le=0,Ge=Ee.length;Le<Ge;Le++){const ke=Ee[Le];$i(y,A,ke,ke.viewport)}}else Y.length>0&&Pr(ae,Y,A,q),ht&&Qe.render(A),$i(y,A,q);V!==null&&z===0&&(ct.updateMultisampleRenderTarget(V),ct.updateRenderTargetMipmap(V)),A.isScene===!0&&A.onAfterRender(P,A,q),Pe.resetDefaultState(),R=-1,C=null,N.pop(),N.length>0?(g=N[N.length-1],Ue===!0&&xe.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,k.pop(),k.length>0?y=k[k.length-1]:y=null};function ro(A,q,se,ae){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ce.intersectsSprite(A)){ae&&Re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ie);const Le=W.update(A),Ge=A.material;Ge.visible&&y.push(A,Le,Ge,se,Re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ce.intersectsObject(A))){const Le=W.update(A),Ge=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Re.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Re.copy(Le.boundingSphere.center)),Re.applyMatrix4(A.matrixWorld).applyMatrix4(ie)),Array.isArray(Ge)){const ke=Le.groups;for(let st=0,at=ke.length;st<at;st++){const Je=ke[st],ut=Ge[Je.materialIndex];ut&&ut.visible&&y.push(A,Le,ut,se,Re.z,Je)}}else Ge.visible&&y.push(A,Le,Ge,se,Re.z,null)}}const Ee=A.children;for(let Le=0,Ge=Ee.length;Le<Ge;Le++)ro(Ee[Le],q,se,ae)}function $i(A,q,se,ae){const Y=A.opaque,Ee=A.transmissive,Le=A.transparent;g.setupLightsView(se),Ue===!0&&xe.setGlobalState(P.clippingPlanes,se),ae&&Ve.viewport(G.copy(ae)),Y.length>0&&Ti(Y,q,se),Ee.length>0&&Ti(Ee,q,se),Le.length>0&&Ti(Le,q,se),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Pr(A,q,se,ae){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ae.id]===void 0&&(g.state.transmissionRenderTarget[ae.id]=new Cr(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?Js:Xi,minFilter:ns,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Ee=g.state.transmissionRenderTarget[ae.id],Le=ae.viewport||G;Ee.setSize(Le.z*P.transmissionResolutionScale,Le.w*P.transmissionResolutionScale);const Ge=P.getRenderTarget(),ke=P.getActiveCubeFace(),st=P.getActiveMipmapLevel();P.setRenderTarget(Ee),P.getClearColor(ue),de=P.getClearAlpha(),de<1&&P.setClearColor(16777215,.5),P.clear(),ht&&Qe.render(se);const at=P.toneMapping;P.toneMapping=br;const Je=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),g.setupLightsView(ae),Ue===!0&&xe.setGlobalState(P.clippingPlanes,ae),Ti(A,se,ae),ct.updateMultisampleRenderTarget(Ee),ct.updateRenderTargetMipmap(Ee),lt.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Dt=0,Tt=q.length;Dt<Tt;Dt++){const Ot=q[Dt],Nt=Ot.object,et=Ot.geometry,Ft=Ot.material,yt=Ot.group;if(Ft.side===Hi&&Nt.layers.test(ae.layers)){const en=Ft.side;Ft.side=kn,Ft.needsUpdate=!0,os(Nt,se,ae,et,Ft,yt),Ft.side=en,Ft.needsUpdate=!0,ut=!0}}ut===!0&&(ct.updateMultisampleRenderTarget(Ee),ct.updateRenderTargetMipmap(Ee))}P.setRenderTarget(Ge,ke,st),P.setClearColor(ue,de),Je!==void 0&&(ae.viewport=Je),P.toneMapping=at}function Ti(A,q,se){const ae=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Ee=A.length;Y<Ee;Y++){const Le=A[Y],Ge=Le.object,ke=Le.geometry,st=Le.group;let at=Le.material;at.allowOverride===!0&&ae!==null&&(at=ae),Ge.layers.test(se.layers)&&os(Ge,q,se,ke,at,st)}}function os(A,q,se,ae,Y,Ee){A.onBeforeRender(P,q,se,ae,Y,Ee),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(P,q,se,ae,A,Ee),Y.transparent===!0&&Y.side===Hi&&Y.forceSinglePass===!1?(Y.side=kn,Y.needsUpdate=!0,P.renderBufferDirect(se,q,ae,Y,A,Ee),Y.side=Ar,Y.needsUpdate=!0,P.renderBufferDirect(se,q,ae,Y,A,Ee),Y.side=Hi):P.renderBufferDirect(se,q,ae,Y,A,Ee),A.onAfterRender(P,q,se,ae,Y,Ee)}function as(A,q,se){q.isScene!==!0&&(q=De);const ae=ze.get(A),Y=g.state.lights,Ee=g.state.shadowsArray,Le=Y.state.version,Ge=J.getParameters(A,Y.state,Ee,q,se),ke=J.getProgramCacheKey(Ge);let st=ae.programs;ae.environment=A.isMeshStandardMaterial?q.environment:null,ae.fog=q.fog,ae.envMap=(A.isMeshStandardMaterial?nt:Ut).get(A.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,st===void 0&&(A.addEventListener("dispose",me),st=new Map,ae.programs=st);let at=st.get(ke);if(at!==void 0){if(ae.currentProgram===at&&ae.lightsStateVersion===Le)return ia(A,Ge),at}else Ge.uniforms=J.getUniforms(A),A.onBeforeCompile(Ge,P),at=J.acquireProgram(Ge,ke),st.set(ke,at),ae.uniforms=Ge.uniforms;const Je=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=xe.uniform),ia(A,Ge),ae.needsLights=sa(A),ae.lightsStateVersion=Le,ae.needsLights&&(Je.ambientLightColor.value=Y.state.ambient,Je.lightProbe.value=Y.state.probe,Je.directionalLights.value=Y.state.directional,Je.directionalLightShadows.value=Y.state.directionalShadow,Je.spotLights.value=Y.state.spot,Je.spotLightShadows.value=Y.state.spotShadow,Je.rectAreaLights.value=Y.state.rectArea,Je.ltc_1.value=Y.state.rectAreaLTC1,Je.ltc_2.value=Y.state.rectAreaLTC2,Je.pointLights.value=Y.state.point,Je.pointLightShadows.value=Y.state.pointShadow,Je.hemisphereLights.value=Y.state.hemi,Je.directionalShadowMap.value=Y.state.directionalShadowMap,Je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Je.spotShadowMap.value=Y.state.spotShadowMap,Je.spotLightMatrix.value=Y.state.spotLightMatrix,Je.spotLightMap.value=Y.state.spotLightMap,Je.pointShadowMap.value=Y.state.pointShadowMap,Je.pointShadowMatrix.value=Y.state.pointShadowMatrix),ae.currentProgram=at,ae.uniformsList=null,at}function na(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Bl.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function ia(A,q){const se=ze.get(A);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function bi(A,q,se,ae,Y){q.isScene!==!0&&(q=De),ct.resetTextureUnits();const Ee=q.fog,Le=ae.isMeshStandardMaterial?q.environment:null,Ge=V===null?P.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Zs,ke=(ae.isMeshStandardMaterial?nt:Ut).get(ae.envMap||Le),st=ae.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,at=!!se.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Je=!!se.morphAttributes.position,ut=!!se.morphAttributes.normal,Dt=!!se.morphAttributes.color;let Tt=br;ae.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Tt=P.toneMapping);const Ot=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Nt=Ot!==void 0?Ot.length:0,et=ze.get(ae),Ft=g.state.lights;if(Ue===!0&&(Q===!0||A!==C)){const $t=A===C&&ae.id===R;xe.setState(ae,A,$t)}let yt=!1;ae.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Ft.state.version||et.outputColorSpace!==Ge||Y.isBatchedMesh&&et.batching===!1||!Y.isBatchedMesh&&et.batching===!0||Y.isBatchedMesh&&et.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&et.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&et.instancing===!1||!Y.isInstancedMesh&&et.instancing===!0||Y.isSkinnedMesh&&et.skinning===!1||!Y.isSkinnedMesh&&et.skinning===!0||Y.isInstancedMesh&&et.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&et.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&et.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&et.instancingMorph===!1&&Y.morphTexture!==null||et.envMap!==ke||ae.fog===!0&&et.fog!==Ee||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==xe.numPlanes||et.numIntersection!==xe.numIntersection)||et.vertexAlphas!==st||et.vertexTangents!==at||et.morphTargets!==Je||et.morphNormals!==ut||et.morphColors!==Dt||et.toneMapping!==Tt||et.morphTargetsCount!==Nt)&&(yt=!0):(yt=!0,et.__version=ae.version);let en=et.currentProgram;yt===!0&&(en=as(ae,q,Y));let ri=!1,En=!1,Dr=!1;const zt=en.getUniforms(),wn=et.uniforms;if(Ve.useProgram(en.program)&&(ri=!0,En=!0,Dr=!0),ae.id!==R&&(R=ae.id,En=!0),ri||C!==A){Ve.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(F,"projectionMatrix",A.projectionMatrix),zt.setValue(F,"viewMatrix",A.matrixWorldInverse);const gn=zt.map.cameraPosition;gn!==void 0&&gn.setValue(F,ve.setFromMatrixPosition(A.matrixWorld)),tt.logarithmicDepthBuffer&&zt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&zt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,En=!0,Dr=!0)}if(Y.isSkinnedMesh){zt.setOptional(F,Y,"bindMatrix"),zt.setOptional(F,Y,"bindMatrixInverse");const $t=Y.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),zt.setValue(F,"boneTexture",$t.boneTexture,ct))}Y.isBatchedMesh&&(zt.setOptional(F,Y,"batchingTexture"),zt.setValue(F,"batchingTexture",Y._matricesTexture,ct),zt.setOptional(F,Y,"batchingIdTexture"),zt.setValue(F,"batchingIdTexture",Y._indirectTexture,ct),zt.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&zt.setValue(F,"batchingColorTexture",Y._colorsTexture,ct));const mn=se.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&we.update(Y,se,en),(En||et.receiveShadow!==Y.receiveShadow)&&(et.receiveShadow=Y.receiveShadow,zt.setValue(F,"receiveShadow",Y.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(wn.envMap.value=ke,wn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&q.environment!==null&&(wn.envMapIntensity.value=q.environmentIntensity),En&&(zt.setValue(F,"toneMappingExposure",P.toneMappingExposure),et.needsLights&&ra(wn,Dr),Ee&&ae.fog===!0&&pe.refreshFogUniforms(wn,Ee),pe.refreshMaterialUniforms(wn,ae,D,fe,g.state.transmissionRenderTarget[A.id]),Bl.upload(F,na(et),wn,ct)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Bl.upload(F,na(et),wn,ct),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&zt.setValue(F,"center",Y.center),zt.setValue(F,"modelViewMatrix",Y.modelViewMatrix),zt.setValue(F,"normalMatrix",Y.normalMatrix),zt.setValue(F,"modelMatrix",Y.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const $t=ae.uniformsGroups;for(let gn=0,Lr=$t.length;gn<Lr;gn++){const St=$t[gn];pt.update(St,en),pt.bind(St,en)}}return en}function ra(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function sa(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,q,se){const ae=ze.get(A);ae.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),ze.get(A.texture).__webglTexture=q,ze.get(A.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:se,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const se=ze.get(A);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0};const Ql=F.createFramebuffer();this.setRenderTarget=function(A,q=0,se=0){V=A,O=q,z=se;let ae=!0,Y=null,Ee=!1,Le=!1;if(A){const ke=ze.get(A);if(ke.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(F.FRAMEBUFFER,null),ae=!1;else if(ke.__webglFramebuffer===void 0)ct.setupRenderTarget(A);else if(ke.__hasExternalTextures)ct.rebindTextures(A,ze.get(A.texture).__webglTexture,ze.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Je=A.depthTexture;if(ke.__boundDepthTexture!==Je){if(Je!==null&&ze.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(A)}}const st=A.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Le=!0);const at=ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(at[q])?Y=at[q][se]:Y=at[q],Ee=!0):A.samples>0&&ct.useMultisampledRTT(A)===!1?Y=ze.get(A).__webglMultisampledFramebuffer:Array.isArray(at)?Y=at[se]:Y=at,G.copy(A.viewport),Z.copy(A.scissor),le=A.scissorTest}else G.copy(I).multiplyScalar(D).floor(),Z.copy(ne).multiplyScalar(D).floor(),le=Ae;if(se!==0&&(Y=Ql),Ve.bindFramebuffer(F.FRAMEBUFFER,Y)&&ae&&Ve.drawBuffers(A,Y),Ve.viewport(G),Ve.scissor(Z),Ve.setScissorTest(le),Ee){const ke=ze.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,ke.__webglTexture,se)}else if(Le){const ke=q;for(let st=0;st<A.textures.length;st++){const at=ze.get(A.textures[st]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+st,at.__webglTexture,se,ke)}}else if(A!==null&&se!==0){const ke=ze.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ke.__webglTexture,se)}R=-1},this.readRenderTargetPixels=function(A,q,se,ae,Y,Ee,Le,Ge=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke){Ve.bindFramebuffer(F.FRAMEBUFFER,ke);try{const st=A.textures[Ge],at=st.format,Je=st.type;if(!tt.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ae&&se>=0&&se<=A.height-Y&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ge),F.readPixels(q,se,ae,Y,Ke.convert(at),Ke.convert(Je),Ee))}finally{const st=V!==null?ze.get(V).__webglFramebuffer:null;Ve.bindFramebuffer(F.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(A,q,se,ae,Y,Ee,Le,Ge=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(ke=ke[Le]),ke)if(q>=0&&q<=A.width-ae&&se>=0&&se<=A.height-Y){Ve.bindFramebuffer(F.FRAMEBUFFER,ke);const st=A.textures[Ge],at=st.format,Je=st.type;if(!tt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ut),F.bufferData(F.PIXEL_PACK_BUFFER,Ee.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ge),F.readPixels(q,se,ae,Y,Ke.convert(at),Ke.convert(Je),0);const Dt=V!==null?ze.get(V).__webglFramebuffer:null;Ve.bindFramebuffer(F.FRAMEBUFFER,Dt);const Tt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await cx(F,Tt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ut),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ee),F.deleteBuffer(ut),F.deleteSync(Tt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,se=0){const ae=Math.pow(2,-se),Y=Math.floor(A.image.width*ae),Ee=Math.floor(A.image.height*ae),Le=q!==null?q.x:0,Ge=q!==null?q.y:0;ct.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,se,0,0,Le,Ge,Y,Ee),Ve.unbindTexture()};const oa=F.createFramebuffer(),aa=F.createFramebuffer();this.copyTextureToTexture=function(A,q,se=null,ae=null,Y=0,Ee=null){Ee===null&&(Y!==0?(Ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=Y,Y=0):Ee=0);let Le,Ge,ke,st,at,Je,ut,Dt,Tt;const Ot=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(se!==null)Le=se.max.x-se.min.x,Ge=se.max.y-se.min.y,ke=se.isBox3?se.max.z-se.min.z:1,st=se.min.x,at=se.min.y,Je=se.isBox3?se.min.z:0;else{const mn=Math.pow(2,-Y);Le=Math.floor(Ot.width*mn),Ge=Math.floor(Ot.height*mn),A.isDataArrayTexture?ke=Ot.depth:A.isData3DTexture?ke=Math.floor(Ot.depth*mn):ke=1,st=0,at=0,Je=0}ae!==null?(ut=ae.x,Dt=ae.y,Tt=ae.z):(ut=0,Dt=0,Tt=0);const Nt=Ke.convert(q.format),et=Ke.convert(q.type);let Ft;q.isData3DTexture?(ct.setTexture3D(q,0),Ft=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ct.setTexture2DArray(q,0),Ft=F.TEXTURE_2D_ARRAY):(ct.setTexture2D(q,0),Ft=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const yt=F.getParameter(F.UNPACK_ROW_LENGTH),en=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ri=F.getParameter(F.UNPACK_SKIP_PIXELS),En=F.getParameter(F.UNPACK_SKIP_ROWS),Dr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ot.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ot.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,st),F.pixelStorei(F.UNPACK_SKIP_ROWS,at),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Je);const zt=A.isDataArrayTexture||A.isData3DTexture,wn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const mn=ze.get(A),$t=ze.get(q),gn=ze.get(mn.__renderTarget),Lr=ze.get($t.__renderTarget);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,gn.__webglFramebuffer),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,Lr.__webglFramebuffer);for(let St=0;St<ke;St++)zt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.get(A).__webglTexture,Y,Je+St),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.get(q).__webglTexture,Ee,Tt+St)),F.blitFramebuffer(st,at,Le,Ge,ut,Dt,Le,Ge,F.DEPTH_BUFFER_BIT,F.NEAREST);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||ze.has(A)){const mn=ze.get(A),$t=ze.get(q);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,oa),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,aa);for(let gn=0;gn<ke;gn++)zt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mn.__webglTexture,Y,Je+gn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mn.__webglTexture,Y),wn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$t.__webglTexture,Ee,Tt+gn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,$t.__webglTexture,Ee),Y!==0?F.blitFramebuffer(st,at,Le,Ge,ut,Dt,Le,Ge,F.COLOR_BUFFER_BIT,F.NEAREST):wn?F.copyTexSubImage3D(Ft,Ee,ut,Dt,Tt+gn,st,at,Le,Ge):F.copyTexSubImage2D(Ft,Ee,ut,Dt,st,at,Le,Ge);Ve.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else wn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Ft,Ee,ut,Dt,Tt,Le,Ge,ke,Nt,et,Ot.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(Ft,Ee,ut,Dt,Tt,Le,Ge,ke,Nt,Ot.data):F.texSubImage3D(Ft,Ee,ut,Dt,Tt,Le,Ge,ke,Nt,et,Ot):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ee,ut,Dt,Le,Ge,Nt,et,Ot.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ee,ut,Dt,Ot.width,Ot.height,Nt,Ot.data):F.texSubImage2D(F.TEXTURE_2D,Ee,ut,Dt,Le,Ge,Nt,et,Ot);F.pixelStorei(F.UNPACK_ROW_LENGTH,yt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,en),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ri),F.pixelStorei(F.UNPACK_SKIP_ROWS,En),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Dr),Ee===0&&q.generateMipmaps&&F.generateMipmap(Ft),Ve.unbindTexture()},this.initRenderTarget=function(A){ze.get(A).__webglFramebuffer===void 0&&ct.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ct.setTextureCube(A,0):A.isData3DTexture?ct.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ct.setTexture2DArray(A,0):ct.setTexture2D(A,0),Ve.unbindTexture()},this.resetState=function(){O=0,z=0,V=null,Ve.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ct._getUnpackColorSpace()}}function Rw({mouseForce:s=20,cursorSize:e=100,isViscous:n=!1,viscous:r=30,iterationsViscous:a=32,iterationsPoisson:l=32,dt:u=.014,BFECC:f=!0,resolution:m=.5,isBounce:p=!1,colors:v=["#5227FF","#FF9FFC","#B19EEF"],style:_={},className:x="",autoDemo:M=!0,autoSpeed:T=.5,autoIntensity:b=2.2,takeoverDuration:y=.25,autoResumeDelay:g=1e3,autoRampDuration:k=.6}){const N=It.useRef(null),P=It.useRef(null),H=It.useRef(null),O=It.useRef(null),z=It.useRef(null),V=It.useRef(!0),R=It.useRef(null);return It.useEffect(()=>{if(!N.current)return;function C(nt){let S;Array.isArray(nt)&&nt.length>0?nt.length===1?S=[nt[0],nt[0]]:S=nt:S=["#ffffff","#ffffff"];const E=S.length,W=new Uint8Array(E*4);for(let pe=0;pe<E;pe++){const oe=new Rt(S[pe]);W[pe*4+0]=Math.round(oe.r*255),W[pe*4+1]=Math.round(oe.g*255),W[pe*4+2]=Math.round(oe.b*255),W[pe*4+3]=255}const J=new Ix(W,E,1,ni);return J.magFilter=Fn,J.minFilter=Fn,J.wrapS=gi,J.wrapT=gi,J.generateMipmaps=!1,J.needsUpdate=!0,J}const G=C(v),Z=new qt(0,0,0,0);class le{width=0;height=0;aspect=1;pixelRatio=1;isMobile=!1;breakpoint=768;fboWidth=null;fboHeight=null;time=0;delta=0;container=null;renderer=null;clock=null;init(S){this.container=S,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new Cw({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Rt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new Xx,this.clock.start()}resize(){if(!this.container)return;const S=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(S.width)),this.height=Math.max(1,Math.floor(S.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.clock&&(this.delta=this.clock.getDelta(),this.time+=this.delta)}}const ue=new le;class de{mouseMoved=!1;coords=new mt;coords_old=new mt;diff=new mt;timer=null;hasUserTimer=null;container=null;_onMouseMove=null;_onTouchStart=null;_onTouchMove=null;_onMouseEnter=null;_onMouseLeave=null;_onTouchEnd=null;isHoverInside=!1;hasUserControl=!1;isAutoActive=!1;autoIntensity=2;takeoverActive=!1;takeoverStartTime=0;takeoverDuration=.25;takeoverFrom=new mt;takeoverTo=new mt;onInteract=null;init(S){this.container=S,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),S.addEventListener("mousemove",this._onMouseMove,!1),S.addEventListener("touchstart",this._onTouchStart,!1),S.addEventListener("touchmove",this._onTouchMove,!1),S.addEventListener("mouseenter",this._onMouseEnter,!1),S.addEventListener("mouseleave",this._onMouseLeave,!1),S.addEventListener("touchend",this._onTouchEnd,!1)}dispose(){this.container&&(this.container.removeEventListener("mousemove",this._onMouseMove,!1),this.container.removeEventListener("touchstart",this._onTouchStart,!1),this.container.removeEventListener("touchmove",this._onTouchMove,!1),this.container.removeEventListener("mouseenter",this._onMouseEnter,!1),this.container.removeEventListener("mouseleave",this._onMouseLeave,!1),this.container.removeEventListener("touchend",this._onTouchEnd,!1))}setCoords(S,E){if(!this.container)return;this.timer&&clearTimeout(this.timer),this.hasUserTimer&&clearTimeout(this.hasUserTimer);const W=this.container.getBoundingClientRect(),J=(S-W.left)/W.width,pe=(E-W.top)/W.height;this.coords.set(J*2-1,-(pe*2-1)),this.mouseMoved=!0,this.hasUserControl=!0,this.timer=setTimeout(()=>{this.mouseMoved=!1},100),this.hasUserTimer=setTimeout(()=>{this.hasUserControl=!1},300)}setNormalized(S,E){this.coords.set(S,E),this.mouseMoved=!0,this.hasUserControl=!0,this.hasUserTimer&&clearTimeout(this.hasUserTimer),this.hasUserTimer=setTimeout(()=>{this.hasUserControl=!1},300)}onDocumentMouseMove(S){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){const E=this.container.getBoundingClientRect(),W=(S.clientX-E.left)/E.width,J=(S.clientY-E.top)/E.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(W*2-1,-(J*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.takeoverDuration=Math.min(this.takeoverDuration||.05,.05),this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(S.clientX,S.clientY),this.hasUserControl=!0}onDocumentTouchStart(S){if(S.touches.length===1){const E=S.touches[0];this.onInteract&&this.onInteract(),this.setCoords(E.pageX,E.pageY),this.hasUserControl=!0}}onDocumentTouchMove(S){if(S.touches.length===1){const E=S.touches[0];this.onInteract&&this.onInteract(),this.setCoords(E.pageX,E.pageY)}}onTouchEnd(){this.isHoverInside=!1,this.hasUserControl=!1,this.hasUserTimer&&(clearTimeout(this.hasUserTimer),this.hasUserTimer=null)}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1,this.hasUserControl=!1,this.hasUserTimer&&(clearTimeout(this.hasUserTimer),this.hasUserTimer=null)}update(){if(this.takeoverActive){const S=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(S>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const E=S*S*(3-2*S);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,E)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const te=new de;class fe{mouse;manager;enabled;speed;resumeDelay;rampDurationMs;active=!1;current=new mt(0,0);target=new mt;lastTime=performance.now();activationTime=0;margin=.2;_tmpDir=new mt;constructor(S,E,W){this.mouse=S,this.manager=E,this.enabled=W.enabled,this.speed=W.speed,this.resumeDelay=W.resumeDelay||3e3,this.rampDurationMs=(W.rampDuration||0)*1e3,this.pickNewTarget()}pickNewTarget(){const S=Math.random;this.target.set((S()*2-1)*(1-this.margin),(S()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const S=performance.now();this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=S,this.activationTime=S),this.mouse.isAutoActive=!0;let E=(S-this.lastTime)/1e3;this.lastTime=S,E>.2&&(E=.016);const W=this._tmpDir.subVectors(this.target,this.current),J=W.length();if(J<.01){this.pickNewTarget();return}W.normalize();let pe=1;if(this.rampDurationMs>0){const xe=Math.min(1,(S-this.activationTime)/this.rampDurationMs);pe=xe*xe*(3-2*xe)}const oe=this.speed*E*pe,Ye=Math.min(oe,J);this.current.addScaledVector(W,Ye),this.mouse.setNormalized(this.current.x,this.current.y)}}const D=`
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
`,he=`
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
`,ce=`
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
`,I=`
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
`,ne=`
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
`,Ae=`
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
`,Q=`
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
`,ie=`
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
`;class ve{props;uniforms;scene;camera;material;geometry;plane;constructor(S){this.props=S||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Mm,this.camera=new jl,this.uniforms&&(this.material=new Pl(this.props.material),this.geometry=new is(2,2),this.plane=new ii(this.geometry,this.material),this.scene.add(this.plane))}update(){ue.renderer.setRenderTarget(this.props.output||null),ue.renderer.render(this.scene,this.camera),ue.renderer.setRenderTarget(null)}}class Re extends ve{line;constructor(S){super({material:{vertexShader:D,fragmentShader:I,uniforms:{boundarySpace:{value:S.cellScale},px:{value:S.cellScale},fboSize:{value:S.fboSize},velocity:{value:S.src.texture},dt:{value:S.dt},isBFECC:{value:!0}}},output:S.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const S=new qi,E=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);S.setAttribute("position",new vi(E,3));const W=new Pl({vertexShader:he,fragmentShader:I,uniforms:this.uniforms});this.line=new Bx(S,W),this.scene.add(this.line)}update({dt:S,isBounce:E,BFECC:W}){this.uniforms.dt.value=S,this.line.visible=E,this.uniforms.isBFECC.value=W,super.update()}}class De extends ve{mouse;constructor(S){super({output:S.dst}),this.init(S)}init(S){super.init();const E=new is(1,1),W=new Pl({vertexShader:ce,fragmentShader:Ce,blending:gd,depthWrite:!1,uniforms:{px:{value:S.cellScale},force:{value:new mt(0,0)},center:{value:new mt(0,0)},scale:{value:new mt(S.cursor_size,S.cursor_size)}}});this.mouse=new ii(E,W),this.scene.add(this.mouse)}update(S){const E=te.diff.x/2*S.mouse_force,W=te.diff.y/2*S.mouse_force,J=S.cursor_size*S.cellScale.x,pe=S.cursor_size*S.cellScale.y,oe=Math.min(Math.max(te.coords.x,-1+J+S.cellScale.x*2),1-J-S.cellScale.x*2),Ye=Math.min(Math.max(te.coords.y,-1+pe+S.cellScale.y*2),1-pe-S.cellScale.y*2),xe=this.mouse.material.uniforms;xe.force.value.set(E,W),xe.center.value.set(oe,Ye),xe.scale.value.set(S.cursor_size,S.cursor_size),super.update()}}class ht extends ve{constructor(S){super({material:{vertexShader:D,fragmentShader:ie,uniforms:{boundarySpace:{value:S.boundarySpace},velocity:{value:S.src.texture},velocity_new:{value:S.dst_.texture},v:{value:S.viscous},px:{value:S.cellScale},dt:{value:S.dt}}},output:S.dst,output0:S.dst_,output1:S.dst}),this.init()}update({viscous:S,iterations:E,dt:W}){let J,pe;this.uniforms.v.value=S;for(let oe=0;oe<E;oe++)oe%2===0?(J=this.props.output0,pe=this.props.output1):(J=this.props.output1,pe=this.props.output0),this.uniforms.velocity_new.value=J.texture,this.props.output=pe,this.uniforms.dt.value=W,super.update();return pe}}class Bt extends ve{constructor(S){super({material:{vertexShader:D,fragmentShader:Ae,uniforms:{boundarySpace:{value:S.boundarySpace},velocity:{value:S.src.texture},px:{value:S.cellScale},dt:{value:S.dt}}},output:S.dst}),this.init()}update({vel:S}){this.uniforms.velocity.value=S.texture,super.update()}}class F extends ve{constructor(S){super({material:{vertexShader:D,fragmentShader:Ue,uniforms:{boundarySpace:{value:S.boundarySpace},pressure:{value:S.dst_.texture},divergence:{value:S.src.texture},px:{value:S.cellScale}}},output:S.dst,output0:S.dst_,output1:S.dst}),this.init()}update({iterations:S}){let E,W;for(let J=0;J<S;J++)J%2===0?(E=this.props.output0,W=this.props.output1):(E=this.props.output1,W=this.props.output0),this.uniforms.pressure.value=E.texture,this.props.output=W,super.update();return W}}class Pt extends ve{constructor(S){super({material:{vertexShader:D,fragmentShader:Q,uniforms:{boundarySpace:{value:S.boundarySpace},pressure:{value:S.src_p.texture},velocity:{value:S.src_v.texture},px:{value:S.cellScale},dt:{value:S.dt}}},output:S.dst}),this.init()}update({vel:S,pressure:E}){this.uniforms.velocity.value=S.texture,this.uniforms.pressure.value=E.texture,super.update()}}class lt{options;fbos;fboSize;cellScale;boundarySpace;constructor(S={}){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...S},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new mt,this.cellScale=new mt,this.boundarySpace=new mt,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Js:Ei}createAllFBO(){const E={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Fn,magFilter:Fn,wrapS:gi,wrapT:gi};for(let W in this.fbos)this.fbos[W]=new Cr(this.fboSize.x,this.fboSize.y,E)}createShaderPass(){this.advection=new Re({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new De({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new ht({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Bt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new F({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Pt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const S=Math.max(1,Math.round(this.options.resolution*ue.width)),E=Math.max(1,Math.round(this.options.resolution*ue.height)),W=1/S,J=1/E;this.cellScale.set(W,J),this.fboSize.set(S,E)}resize(){this.calcSize();for(let S in this.fbos)this.fbos[S].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let S=this.fbos.vel_1;this.options.isViscous&&(S=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:S});const E=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:S,pressure:E})}}class tt{simulation;scene;camera;output;constructor(){this.init()}init(){this.simulation=new lt,this.scene=new Mm,this.camera=new jl,this.output=new ii(new is(2,2),new Pl({vertexShader:D,fragmentShader:ne,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new mt},palette:{value:G},bgColor:{value:Z}}})),this.scene.add(this.output)}addScene(S){this.scene.add(S)}resize(){this.simulation.resize()}render(){ue.renderer.setRenderTarget(null),ue.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Ve{props;lastUserInteraction=performance.now();autoDriver=null;_loop=null;_resize=null;_onVisibility=null;running=!1;output;constructor(S){this.props=S,ue.init(S.$wrapper),te.init(S.$wrapper),te.autoIntensity=S.autoIntensity,te.takeoverDuration=Math.min(S.takeoverDuration||.25,.05),this.lastUserInteraction=performance.now(),te.onInteract=()=>{this.lastUserInteraction=performance.now()},this.autoDriver=new fe(te,this,{enabled:S.autoDemo,speed:S.autoSpeed,resumeDelay:S.autoResumeDelay,rampDuration:S.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():V.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ue.renderer.domElement),this.output=new tt}resize(){ue.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),te.update(),ue.update(),this.output.update()}loop(){this.running&&(this.render(),O.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,O.current&&(cancelAnimationFrame(O.current),O.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),te.dispose(),ue.renderer){const S=ue.renderer.domElement;S&&S.parentNode&&S.parentNode.removeChild(S),ue.renderer.dispose()}}catch{}}}const Et=N.current;Et.style.position=Et.style.position||"relative",Et.style.overflow=Et.style.overflow||"hidden";const ze=new Ve({$wrapper:Et,autoDemo:M,autoSpeed:T,autoIntensity:b,takeoverDuration:y,autoResumeDelay:g,autoRampDuration:k});P.current=ze,(()=>{if(!P.current)return;const nt=P.current.output?.simulation;if(!nt)return;const S=nt.options.resolution;Object.assign(nt.options,{mouse_force:s,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:a,iterations_poisson:l,dt:u,BFECC:f,resolution:m,isBounce:p}),m!==S&&nt.resize()})(),ze.start();const Ut=new ResizeObserver(()=>{P.current&&(R.current&&cancelAnimationFrame(R.current),R.current=requestAnimationFrame(()=>{P.current&&P.current.resize()}))});return Ut.observe(Et),H.current=Ut,()=>{if(O.current&&cancelAnimationFrame(O.current),H.current)try{H.current.disconnect()}catch{}if(z.current)try{z.current.disconnect()}catch{}P.current&&P.current.dispose(),P.current=null}},[f,e,u,p,n,l,a,s,m,r,v,M,T,b,y,g,k]),It.useEffect(()=>{const C=P.current;if(!C)return;const G=C.output?.simulation;if(!G)return;const Z=G.options.resolution;Object.assign(G.options,{mouse_force:s,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:a,iterations_poisson:l,dt:u,BFECC:f,resolution:m,isBounce:p}),C.autoDriver&&(C.autoDriver.enabled=M,C.autoDriver.speed=T,C.autoDriver.resumeDelay=g,C.autoDriver.rampDurationMs=k*1e3,C.autoDriver.mouse&&(C.autoDriver.mouse.autoIntensity=b,C.autoDriver.mouse.takeoverDuration=y)),m!==Z&&G.resize()},[s,e,n,r,a,l,u,f,m,p,M,T,b,y,g,k]),U.jsx("div",{ref:N,className:`liquid-ether-container ${x||""}`,style:_})}function Pw(){const s=()=>{document.getElementById("leistungen")?.scrollIntoView({behavior:"smooth"})};return U.jsxs("section",{id:"home",className:"pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden",children:[U.jsx("style",{children:`
          /* Scroll-Indikator Animation (unverändert) */
          @keyframes scrollAnimation {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            50% {
              transform: translateY(20px);
              opacity: 1;
            }
            100% {
              transform: translateY(30px);
              opacity: 0;
            }
          }
          .animate-scroll-custom {
            animation: scrollAnimation 2s infinite ease-in-out;
          }

          /* NEUE Animation für das "Öffnen" */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Hilfsklassen für die Animation mit Verzögerung */
          .animate-fade-in-up-1 {
            opacity: 0; /* Standardmäßig unsichtbar */
            animation: fadeInUp 0.8s ease-out 0.2s forwards; /* 0.2s Verzögerung */
          }
          .animate-fade-in-up-2 {
            opacity: 0;
            animation: fadeInUp 0.8s ease-out 0.4s forwards; /* 0.4s Verzögerung */
          }
          .animate-fade-in-up-3 {
            opacity: 0;
            animation: fadeInUp 0.8s ease-out 0.6s forwards; /* 0.6s Verzögerung */
          }
        `}),U.jsx("div",{className:"absolute inset-0 z-0",children:U.jsx(Rw,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:24,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.25,autoIntensity:3,takeoverDuration:.15,autoResumeDelay:500,autoRampDuration:.6})}),U.jsxs("div",{className:"container mx-auto text-center relative z-10",children:[U.jsx("h1",{className:"text-5xl md:text-7xl mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent max-w-4xl mx-auto leading-tight animate-fade-in-up-1",children:"We Build Digital Experiences."}),U.jsx("p",{className:"text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up-2",children:"Hochwertiges Webdesign und strategische Umsetzung für Ihren nachhaltigen Unternehmenserfolg"}),U.jsx("div",{className:"flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 animate-fade-in-up-3",children:U.jsx("a",{href:"#leistungen",onClick:e=>{e.preventDefault(),s()},className:"bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm font-medium",children:"Meine Leistungen"})})]}),U.jsxs("div",{className:`
          absolute z-10 
          bottom-10           
          left-1/2 -translate-x-1/2 
          flex flex-col items-center`,children:[U.jsx("p",{className:"text-slate-200 text-lg mb-3",children:"Mehr entdecken"}),U.jsx("div",{className:"w-[25px] h-[45px] border-2 border-slate-200 rounded-full relative overflow-hidden",children:U.jsx("div",{className:"w-1.5 h-1.5 bg-slate-400 rounded-full absolute top-[5px] left-1/2 -translate-x-1/2 animate-scroll-custom"})})]})]})}function zg(s){var e,n,r="";if(typeof s=="string"||typeof s=="number")r+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(e=0;e<a;e++)s[e]&&(n=zg(s[e]))&&(r&&(r+=" "),r+=n)}else for(n in s)s[n]&&(r&&(r+=" "),r+=n);return r}function Bg(){for(var s,e,n=0,r="",a=arguments.length;n<a;n++)(s=arguments[n])&&(e=zg(s))&&(r&&(r+=" "),r+=e);return r}const yf="-",Dw=s=>{const e=Nw(s),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=s;return{getClassGroupId:u=>{const f=u.split(yf);return f[0]===""&&f.length!==1&&f.shift(),Vg(f,e)||Lw(u)},getConflictingClassGroupIds:(u,f)=>{const m=n[u]||[];return f&&r[u]?[...m,...r[u]]:m}}},Vg=(s,e)=>{if(s.length===0)return e.classGroupId;const n=s[0],r=e.nextPart.get(n),a=r?Vg(s.slice(1),r):void 0;if(a)return a;if(e.validators.length===0)return;const l=s.join(yf);return e.validators.find(({validator:u})=>u(l))?.classGroupId},Qm=/^\[(.+)\]$/,Lw=s=>{if(Qm.test(s)){const e=Qm.exec(s)[1],n=e?.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},Nw=s=>{const{theme:e,classGroups:n}=s,r={nextPart:new Map,validators:[]};for(const a in n)af(n[a],r,a,e);return r},af=(s,e,n,r)=>{s.forEach(a=>{if(typeof a=="string"){const l=a===""?e:Jm(e,a);l.classGroupId=n;return}if(typeof a=="function"){if(Iw(a)){af(a(r),e,n,r);return}e.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(([l,u])=>{af(u,Jm(e,l),n,r)})})},Jm=(s,e)=>{let n=s;return e.split(yf).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Iw=s=>s.isThemeGetter,Uw=s=>{if(s<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const a=(l,u)=>{n.set(l,u),e++,e>s&&(e=0,r=n,n=new Map)};return{get(l){let u=n.get(l);if(u!==void 0)return u;if((u=r.get(l))!==void 0)return a(l,u),u},set(l,u){n.has(l)?n.set(l,u):a(l,u)}}},lf="!",cf=":",Fw=cf.length,kw=s=>{const{prefix:e,experimentalParseClassName:n}=s;let r=a=>{const l=[];let u=0,f=0,m=0,p;for(let T=0;T<a.length;T++){let b=a[T];if(u===0&&f===0){if(b===cf){l.push(a.slice(m,T)),m=T+Fw;continue}if(b==="/"){p=T;continue}}b==="["?u++:b==="]"?u--:b==="("?f++:b===")"&&f--}const v=l.length===0?a:a.substring(m),_=Ow(v),x=_!==v,M=p&&p>m?p-m:void 0;return{modifiers:l,hasImportantModifier:x,baseClassName:_,maybePostfixModifierPosition:M}};if(e){const a=e+cf,l=r;r=u=>u.startsWith(a)?l(u.substring(a.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:u,maybePostfixModifierPosition:void 0}}if(n){const a=r;r=l=>n({className:l,parseClassName:a})}return r},Ow=s=>s.endsWith(lf)?s.substring(0,s.length-1):s.startsWith(lf)?s.substring(1):s,zw=s=>{const e=Object.fromEntries(s.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const a=[];let l=[];return r.forEach(u=>{u[0]==="["||e[u]?(a.push(...l.sort(),u),l=[]):l.push(u)}),a.push(...l.sort()),a}},Bw=s=>({cache:Uw(s.cacheSize),parseClassName:kw(s),sortModifiers:zw(s),...Dw(s)}),Vw=/\s+/,Hw=(s,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:a,sortModifiers:l}=e,u=[],f=s.trim().split(Vw);let m="";for(let p=f.length-1;p>=0;p-=1){const v=f[p],{isExternal:_,modifiers:x,hasImportantModifier:M,baseClassName:T,maybePostfixModifierPosition:b}=n(v);if(_){m=v+(m.length>0?" "+m:m);continue}let y=!!b,g=r(y?T.substring(0,b):T);if(!g){if(!y){m=v+(m.length>0?" "+m:m);continue}if(g=r(T),!g){m=v+(m.length>0?" "+m:m);continue}y=!1}const k=l(x).join(":"),N=M?k+lf:k,P=N+g;if(u.includes(P))continue;u.push(P);const H=a(g,y);for(let O=0;O<H.length;++O){const z=H[O];u.push(N+z)}m=v+(m.length>0?" "+m:m)}return m};function Gw(){let s=0,e,n,r="";for(;s<arguments.length;)(e=arguments[s++])&&(n=Hg(e))&&(r&&(r+=" "),r+=n);return r}const Hg=s=>{if(typeof s=="string")return s;let e,n="";for(let r=0;r<s.length;r++)s[r]&&(e=Hg(s[r]))&&(n&&(n+=" "),n+=e);return n};function Ww(s,...e){let n,r,a,l=u;function u(m){const p=e.reduce((v,_)=>_(v),s());return n=Bw(p),r=n.cache.get,a=n.cache.set,l=f,f(m)}function f(m){const p=r(m);if(p)return p;const v=Hw(m,n);return a(m,v),v}return function(){return l(Gw.apply(null,arguments))}}const rn=s=>{const e=n=>n[s]||[];return e.isThemeGetter=!0,e},Gg=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Wg=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Xw=/^\d+\/\d+$/,jw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Yw=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,qw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,$w=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Kw=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ws=s=>Xw.test(s),_t=s=>!!s&&!Number.isNaN(Number(s)),Sr=s=>!!s&&Number.isInteger(Number(s)),fd=s=>s.endsWith("%")&&_t(s.slice(0,-1)),Bi=s=>jw.test(s),Zw=()=>!0,Qw=s=>Yw.test(s)&&!qw.test(s),Xg=()=>!1,Jw=s=>$w.test(s),e1=s=>Kw.test(s),t1=s=>!Xe(s)&&!je(s),n1=s=>no(s,qg,Xg),Xe=s=>Gg.test(s),Zr=s=>no(s,$g,Qw),hd=s=>no(s,a1,_t),eg=s=>no(s,jg,Xg),i1=s=>no(s,Yg,e1),Il=s=>no(s,Kg,Jw),je=s=>Wg.test(s),Wo=s=>io(s,$g),r1=s=>io(s,l1),tg=s=>io(s,jg),s1=s=>io(s,qg),o1=s=>io(s,Yg),Ul=s=>io(s,Kg,!0),no=(s,e,n)=>{const r=Gg.exec(s);return r?r[1]?e(r[1]):n(r[2]):!1},io=(s,e,n=!1)=>{const r=Wg.exec(s);return r?r[1]?e(r[1]):n:!1},jg=s=>s==="position"||s==="percentage",Yg=s=>s==="image"||s==="url",qg=s=>s==="length"||s==="size"||s==="bg-size",$g=s=>s==="length",a1=s=>s==="number",l1=s=>s==="family-name",Kg=s=>s==="shadow",c1=()=>{const s=rn("color"),e=rn("font"),n=rn("text"),r=rn("font-weight"),a=rn("tracking"),l=rn("leading"),u=rn("breakpoint"),f=rn("container"),m=rn("spacing"),p=rn("radius"),v=rn("shadow"),_=rn("inset-shadow"),x=rn("text-shadow"),M=rn("drop-shadow"),T=rn("blur"),b=rn("perspective"),y=rn("aspect"),g=rn("ease"),k=rn("animate"),N=()=>["auto","avoid","all","avoid-page","page","left","right","column"],P=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],H=()=>[...P(),je,Xe],O=()=>["auto","hidden","clip","visible","scroll"],z=()=>["auto","contain","none"],V=()=>[je,Xe,m],R=()=>[Ws,"full","auto",...V()],C=()=>[Sr,"none","subgrid",je,Xe],G=()=>["auto",{span:["full",Sr,je,Xe]},Sr,je,Xe],Z=()=>[Sr,"auto",je,Xe],le=()=>["auto","min","max","fr",je,Xe],ue=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],de=()=>["start","end","center","stretch","center-safe","end-safe"],te=()=>["auto",...V()],fe=()=>[Ws,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...V()],D=()=>[s,je,Xe],he=()=>[...P(),tg,eg,{position:[je,Xe]}],ce=()=>["no-repeat",{repeat:["","x","y","space","round"]}],I=()=>["auto","cover","contain",s1,n1,{size:[je,Xe]}],ne=()=>[fd,Wo,Zr],Ae=()=>["","none","full",p,je,Xe],Ce=()=>["",_t,Wo,Zr],Ue=()=>["solid","dashed","dotted","double"],Q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ie=()=>[_t,fd,tg,eg],ve=()=>["","none",T,je,Xe],Re=()=>["none",_t,je,Xe],De=()=>["none",_t,je,Xe],ht=()=>[_t,je,Xe],Bt=()=>[Ws,"full",...V()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Bi],breakpoint:[Bi],color:[Zw],container:[Bi],"drop-shadow":[Bi],ease:["in","out","in-out"],font:[t1],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Bi],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Bi],shadow:[Bi],spacing:["px",_t],text:[Bi],"text-shadow":[Bi],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Ws,Xe,je,y]}],container:["container"],columns:[{columns:[_t,Xe,je,f]}],"break-after":[{"break-after":N()}],"break-before":[{"break-before":N()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:H()}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:z()}],"overscroll-x":[{"overscroll-x":z()}],"overscroll-y":[{"overscroll-y":z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:R()}],"inset-x":[{"inset-x":R()}],"inset-y":[{"inset-y":R()}],start:[{start:R()}],end:[{end:R()}],top:[{top:R()}],right:[{right:R()}],bottom:[{bottom:R()}],left:[{left:R()}],visibility:["visible","invisible","collapse"],z:[{z:[Sr,"auto",je,Xe]}],basis:[{basis:[Ws,"full","auto",f,...V()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[_t,Ws,"auto","initial","none",Xe]}],grow:[{grow:["",_t,je,Xe]}],shrink:[{shrink:["",_t,je,Xe]}],order:[{order:[Sr,"first","last","none",je,Xe]}],"grid-cols":[{"grid-cols":C()}],"col-start-end":[{col:G()}],"col-start":[{"col-start":Z()}],"col-end":[{"col-end":Z()}],"grid-rows":[{"grid-rows":C()}],"row-start-end":[{row:G()}],"row-start":[{"row-start":Z()}],"row-end":[{"row-end":Z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":le()}],"auto-rows":[{"auto-rows":le()}],gap:[{gap:V()}],"gap-x":[{"gap-x":V()}],"gap-y":[{"gap-y":V()}],"justify-content":[{justify:[...ue(),"normal"]}],"justify-items":[{"justify-items":[...de(),"normal"]}],"justify-self":[{"justify-self":["auto",...de()]}],"align-content":[{content:["normal",...ue()]}],"align-items":[{items:[...de(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...de(),{baseline:["","last"]}]}],"place-content":[{"place-content":ue()}],"place-items":[{"place-items":[...de(),"baseline"]}],"place-self":[{"place-self":["auto",...de()]}],p:[{p:V()}],px:[{px:V()}],py:[{py:V()}],ps:[{ps:V()}],pe:[{pe:V()}],pt:[{pt:V()}],pr:[{pr:V()}],pb:[{pb:V()}],pl:[{pl:V()}],m:[{m:te()}],mx:[{mx:te()}],my:[{my:te()}],ms:[{ms:te()}],me:[{me:te()}],mt:[{mt:te()}],mr:[{mr:te()}],mb:[{mb:te()}],ml:[{ml:te()}],"space-x":[{"space-x":V()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":V()}],"space-y-reverse":["space-y-reverse"],size:[{size:fe()}],w:[{w:[f,"screen",...fe()]}],"min-w":[{"min-w":[f,"screen","none",...fe()]}],"max-w":[{"max-w":[f,"screen","none","prose",{screen:[u]},...fe()]}],h:[{h:["screen","lh",...fe()]}],"min-h":[{"min-h":["screen","lh","none",...fe()]}],"max-h":[{"max-h":["screen","lh",...fe()]}],"font-size":[{text:["base",n,Wo,Zr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,je,hd]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",fd,Xe]}],"font-family":[{font:[r1,Xe,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,je,Xe]}],"line-clamp":[{"line-clamp":[_t,"none",je,hd]}],leading:[{leading:[l,...V()]}],"list-image":[{"list-image":["none",je,Xe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",je,Xe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:D()}],"text-color":[{text:D()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Ue(),"wavy"]}],"text-decoration-thickness":[{decoration:[_t,"from-font","auto",je,Zr]}],"text-decoration-color":[{decoration:D()}],"underline-offset":[{"underline-offset":[_t,"auto",je,Xe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:V()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",je,Xe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",je,Xe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:he()}],"bg-repeat":[{bg:ce()}],"bg-size":[{bg:I()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Sr,je,Xe],radial:["",je,Xe],conic:[Sr,je,Xe]},o1,i1]}],"bg-color":[{bg:D()}],"gradient-from-pos":[{from:ne()}],"gradient-via-pos":[{via:ne()}],"gradient-to-pos":[{to:ne()}],"gradient-from":[{from:D()}],"gradient-via":[{via:D()}],"gradient-to":[{to:D()}],rounded:[{rounded:Ae()}],"rounded-s":[{"rounded-s":Ae()}],"rounded-e":[{"rounded-e":Ae()}],"rounded-t":[{"rounded-t":Ae()}],"rounded-r":[{"rounded-r":Ae()}],"rounded-b":[{"rounded-b":Ae()}],"rounded-l":[{"rounded-l":Ae()}],"rounded-ss":[{"rounded-ss":Ae()}],"rounded-se":[{"rounded-se":Ae()}],"rounded-ee":[{"rounded-ee":Ae()}],"rounded-es":[{"rounded-es":Ae()}],"rounded-tl":[{"rounded-tl":Ae()}],"rounded-tr":[{"rounded-tr":Ae()}],"rounded-br":[{"rounded-br":Ae()}],"rounded-bl":[{"rounded-bl":Ae()}],"border-w":[{border:Ce()}],"border-w-x":[{"border-x":Ce()}],"border-w-y":[{"border-y":Ce()}],"border-w-s":[{"border-s":Ce()}],"border-w-e":[{"border-e":Ce()}],"border-w-t":[{"border-t":Ce()}],"border-w-r":[{"border-r":Ce()}],"border-w-b":[{"border-b":Ce()}],"border-w-l":[{"border-l":Ce()}],"divide-x":[{"divide-x":Ce()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Ce()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Ue(),"hidden","none"]}],"divide-style":[{divide:[...Ue(),"hidden","none"]}],"border-color":[{border:D()}],"border-color-x":[{"border-x":D()}],"border-color-y":[{"border-y":D()}],"border-color-s":[{"border-s":D()}],"border-color-e":[{"border-e":D()}],"border-color-t":[{"border-t":D()}],"border-color-r":[{"border-r":D()}],"border-color-b":[{"border-b":D()}],"border-color-l":[{"border-l":D()}],"divide-color":[{divide:D()}],"outline-style":[{outline:[...Ue(),"none","hidden"]}],"outline-offset":[{"outline-offset":[_t,je,Xe]}],"outline-w":[{outline:["",_t,Wo,Zr]}],"outline-color":[{outline:D()}],shadow:[{shadow:["","none",v,Ul,Il]}],"shadow-color":[{shadow:D()}],"inset-shadow":[{"inset-shadow":["none",_,Ul,Il]}],"inset-shadow-color":[{"inset-shadow":D()}],"ring-w":[{ring:Ce()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:D()}],"ring-offset-w":[{"ring-offset":[_t,Zr]}],"ring-offset-color":[{"ring-offset":D()}],"inset-ring-w":[{"inset-ring":Ce()}],"inset-ring-color":[{"inset-ring":D()}],"text-shadow":[{"text-shadow":["none",x,Ul,Il]}],"text-shadow-color":[{"text-shadow":D()}],opacity:[{opacity:[_t,je,Xe]}],"mix-blend":[{"mix-blend":[...Q(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Q()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[_t]}],"mask-image-linear-from-pos":[{"mask-linear-from":ie()}],"mask-image-linear-to-pos":[{"mask-linear-to":ie()}],"mask-image-linear-from-color":[{"mask-linear-from":D()}],"mask-image-linear-to-color":[{"mask-linear-to":D()}],"mask-image-t-from-pos":[{"mask-t-from":ie()}],"mask-image-t-to-pos":[{"mask-t-to":ie()}],"mask-image-t-from-color":[{"mask-t-from":D()}],"mask-image-t-to-color":[{"mask-t-to":D()}],"mask-image-r-from-pos":[{"mask-r-from":ie()}],"mask-image-r-to-pos":[{"mask-r-to":ie()}],"mask-image-r-from-color":[{"mask-r-from":D()}],"mask-image-r-to-color":[{"mask-r-to":D()}],"mask-image-b-from-pos":[{"mask-b-from":ie()}],"mask-image-b-to-pos":[{"mask-b-to":ie()}],"mask-image-b-from-color":[{"mask-b-from":D()}],"mask-image-b-to-color":[{"mask-b-to":D()}],"mask-image-l-from-pos":[{"mask-l-from":ie()}],"mask-image-l-to-pos":[{"mask-l-to":ie()}],"mask-image-l-from-color":[{"mask-l-from":D()}],"mask-image-l-to-color":[{"mask-l-to":D()}],"mask-image-x-from-pos":[{"mask-x-from":ie()}],"mask-image-x-to-pos":[{"mask-x-to":ie()}],"mask-image-x-from-color":[{"mask-x-from":D()}],"mask-image-x-to-color":[{"mask-x-to":D()}],"mask-image-y-from-pos":[{"mask-y-from":ie()}],"mask-image-y-to-pos":[{"mask-y-to":ie()}],"mask-image-y-from-color":[{"mask-y-from":D()}],"mask-image-y-to-color":[{"mask-y-to":D()}],"mask-image-radial":[{"mask-radial":[je,Xe]}],"mask-image-radial-from-pos":[{"mask-radial-from":ie()}],"mask-image-radial-to-pos":[{"mask-radial-to":ie()}],"mask-image-radial-from-color":[{"mask-radial-from":D()}],"mask-image-radial-to-color":[{"mask-radial-to":D()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":P()}],"mask-image-conic-pos":[{"mask-conic":[_t]}],"mask-image-conic-from-pos":[{"mask-conic-from":ie()}],"mask-image-conic-to-pos":[{"mask-conic-to":ie()}],"mask-image-conic-from-color":[{"mask-conic-from":D()}],"mask-image-conic-to-color":[{"mask-conic-to":D()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:he()}],"mask-repeat":[{mask:ce()}],"mask-size":[{mask:I()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",je,Xe]}],filter:[{filter:["","none",je,Xe]}],blur:[{blur:ve()}],brightness:[{brightness:[_t,je,Xe]}],contrast:[{contrast:[_t,je,Xe]}],"drop-shadow":[{"drop-shadow":["","none",M,Ul,Il]}],"drop-shadow-color":[{"drop-shadow":D()}],grayscale:[{grayscale:["",_t,je,Xe]}],"hue-rotate":[{"hue-rotate":[_t,je,Xe]}],invert:[{invert:["",_t,je,Xe]}],saturate:[{saturate:[_t,je,Xe]}],sepia:[{sepia:["",_t,je,Xe]}],"backdrop-filter":[{"backdrop-filter":["","none",je,Xe]}],"backdrop-blur":[{"backdrop-blur":ve()}],"backdrop-brightness":[{"backdrop-brightness":[_t,je,Xe]}],"backdrop-contrast":[{"backdrop-contrast":[_t,je,Xe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",_t,je,Xe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[_t,je,Xe]}],"backdrop-invert":[{"backdrop-invert":["",_t,je,Xe]}],"backdrop-opacity":[{"backdrop-opacity":[_t,je,Xe]}],"backdrop-saturate":[{"backdrop-saturate":[_t,je,Xe]}],"backdrop-sepia":[{"backdrop-sepia":["",_t,je,Xe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":V()}],"border-spacing-x":[{"border-spacing-x":V()}],"border-spacing-y":[{"border-spacing-y":V()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",je,Xe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[_t,"initial",je,Xe]}],ease:[{ease:["linear","initial",g,je,Xe]}],delay:[{delay:[_t,je,Xe]}],animate:[{animate:["none",k,je,Xe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[b,je,Xe]}],"perspective-origin":[{"perspective-origin":H()}],rotate:[{rotate:Re()}],"rotate-x":[{"rotate-x":Re()}],"rotate-y":[{"rotate-y":Re()}],"rotate-z":[{"rotate-z":Re()}],scale:[{scale:De()}],"scale-x":[{"scale-x":De()}],"scale-y":[{"scale-y":De()}],"scale-z":[{"scale-z":De()}],"scale-3d":["scale-3d"],skew:[{skew:ht()}],"skew-x":[{"skew-x":ht()}],"skew-y":[{"skew-y":ht()}],transform:[{transform:[je,Xe,"","none","gpu","cpu"]}],"transform-origin":[{origin:H()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Bt()}],"translate-x":[{"translate-x":Bt()}],"translate-y":[{"translate-y":Bt()}],"translate-z":[{"translate-z":Bt()}],"translate-none":["translate-none"],accent:[{accent:D()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:D()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",je,Xe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":V()}],"scroll-mx":[{"scroll-mx":V()}],"scroll-my":[{"scroll-my":V()}],"scroll-ms":[{"scroll-ms":V()}],"scroll-me":[{"scroll-me":V()}],"scroll-mt":[{"scroll-mt":V()}],"scroll-mr":[{"scroll-mr":V()}],"scroll-mb":[{"scroll-mb":V()}],"scroll-ml":[{"scroll-ml":V()}],"scroll-p":[{"scroll-p":V()}],"scroll-px":[{"scroll-px":V()}],"scroll-py":[{"scroll-py":V()}],"scroll-ps":[{"scroll-ps":V()}],"scroll-pe":[{"scroll-pe":V()}],"scroll-pt":[{"scroll-pt":V()}],"scroll-pr":[{"scroll-pr":V()}],"scroll-pb":[{"scroll-pb":V()}],"scroll-pl":[{"scroll-pl":V()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",je,Xe]}],fill:[{fill:["none",...D()]}],"stroke-w":[{stroke:[_t,Wo,Zr,hd]}],stroke:[{stroke:["none",...D()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},u1=Ww(c1);function Rr(...s){return u1(Bg(s))}function Er({className:s,...e}){return U.jsx("div",{"data-slot":"card",className:Rr("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",s),...e})}function Vl({className:s,...e}){return U.jsx("div",{"data-slot":"card-header",className:Rr("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",s),...e})}function Hl({className:s,...e}){return U.jsx("h4",{"data-slot":"card-title",className:Rr("leading-none",s),...e})}function d1({className:s,...e}){return U.jsx("p",{"data-slot":"card-description",className:Rr("text-muted-foreground",s),...e})}function wr({className:s,...e}){return U.jsx("div",{"data-slot":"card-content",className:Rr("px-6 [&:last-child]:pb-6",s),...e})}const f1=[{icon:K0,title:"Website Entwicklung",description:"Moderne, responsive Websites mit den neuesten Technologien und Best Practices."},{icon:d_,title:"Mobile-First Design",description:"Perfekte Darstellung auf allen Geräten - von Smartphone bis Desktop."},{icon:lg,title:"UI/UX Design",description:"Ansprechendes Design, das Ihre Marke perfekt in Szene setzt."}];function h1(){return U.jsx("section",{id:"leistungen",className:"pt-8 pb-20 px-6",children:U.jsxs("div",{className:"container mx-auto",children:[U.jsxs("div",{className:"text-center mb-16",children:[U.jsx("h2",{className:`
              text-5xl md:text-6xl lg:text-7xl 
              mb-6 
              text-transparent bg-clip-text 
              leading-tight
              animate-gradient-text 
            `,style:{fontSize:"4rem",fontWeight:600,letterSpacing:"-2px",lineHeight:"1.2em"},children:"Meine Leistungen"}),U.jsx("p",{className:"text-slate-400 text-base md:text-lg max-w-2xl mx-auto",children:"Von der strategischen Beratung bis zur präzisen Umsetzung: Das biete ich Ihnen!"})]}),U.jsx("div",{className:"max-w-6xl mx-auto",children:U.jsx("div",{className:"flex flex-row gap-6 justify-center items-stretch flex-wrap",children:f1.map((s,e)=>{const n=s.icon;return U.jsxs(Er,{className:"bg-slate-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10 flex flex-col h-full w-full max-w-xs min-w-[260px]",children:[U.jsxs(Vl,{children:[U.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center mb-4",children:U.jsx(n,{className:"w-7 h-7 text-white"})}),U.jsx(Hl,{className:"text-white",children:s.title})]}),U.jsx(wr,{children:U.jsx(d1,{className:"text-slate-400",children:s.description})})]},e)})})})]})})}function p1(){const s=[{number:"01",title:"Kostenloses Gespräch",description:"Erzähle uns von deiner Vision und deinen Zielen für deine Webseite.",icon:s_,features:["30 Min. Beratung","Unverbindlich","Individuelle Strategie"]},{number:"02",title:"Kostenloser Entwurf",description:"Wir erstellen einen maßgeschneiderten Entwurf, der deine Marke perfekt repräsentiert.",icon:lg,features:["Design-Konzept","2 Revisionen","Responsive Layout"]},{number:"03",title:"Feinschliff & Go-Live",icon:md,features:["Finalisierung","Testing","Launch Support"]}];return U.jsxs(U.Fragment,{children:[U.jsx("style",{children:`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}),U.jsxs("div",{id:"ablauf",className:"min-h-screen bg-slate-950 relative overflow-hidden",children:[U.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[U.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"}),U.jsx("div",{className:"absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse",style:{animationDelay:"1s"}}),U.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"})]}),U.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-6 py-20",children:[U.jsxs("div",{className:"text-center mb-20",children:[U.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-6",children:[U.jsx(v_,{className:"w-4 h-4 text-yellow-400"}),U.jsx("span",{className:"text-purple-300 text-sm font-medium",children:"Schnell. Professionell. Transparent."})]}),U.jsxs("h1",{className:"text-5xl md:text-4xl mb-6 text-white font-medium leading-tight",children:["Von der ",U.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient",children:"Idee"})," zur"," ",U.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 animate-gradient",children:"Webseite"})]}),U.jsx("p",{className:"text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed",children:"Deine professionelle Webseite in nur 3 einfachen Schritten"})]}),U.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20",children:s.map((e,n)=>U.jsx("div",{className:"group relative",style:{animationDelay:`${n*150}ms`},children:U.jsxs("div",{className:"relative h-full bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2",children:[U.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),U.jsxs("div",{className:"relative flex items-start justify-between mb-6",children:[U.jsx("div",{className:"px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30",children:U.jsxs("span",{className:"text-purple-300 font-medium",children:["Schritt ",e.number]})}),U.jsx("div",{className:"p-3 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:scale-110 transition-transform duration-300",children:U.jsx(e.icon,{className:"w-8 h-8 text-purple-400",strokeWidth:1.5})})]}),U.jsxs("div",{className:"relative space-y-4",children:[U.jsx("h3",{className:"text-white text-2xl font-medium leading-tight",children:e.title}),U.jsx("p",{className:"text-slate-400 leading-relaxed",children:e.description}),U.jsx("ul",{className:"space-y-2 pt-4",children:e.features.map((r,a)=>U.jsxs("li",{className:"flex items-center gap-2 text-slate-300 text-sm",children:[U.jsx("div",{className:"w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0",children:U.jsx(G0,{className:"w-3 h-3 text-purple-400",strokeWidth:3})}),r]},a))})]}),n<s.length-1&&U.jsx("div",{className:"hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20",children:U.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50",children:U.jsx("div",{className:"w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-8 border-l-white"})})})]})},e.number))}),U.jsxs("div",{className:"text-center",children:[U.jsxs("div",{className:"inline-flex flex-col sm:flex-row gap-4 items-center",children:[U.jsxs("button",{className:"group relative px-8 py-4 rounded-full overflow-hidden font-medium",children:[U.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_100%] animate-gradient"}),U.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"}),U.jsxs("span",{className:"relative text-white flex items-center gap-2",children:["Jetzt kostenlos starten",U.jsx(md,{className:"w-5 h-5 group-hover:translate-x-1 transition-transform"})]})]}),U.jsx("button",{className:"px-8 py-4 rounded-full border-2 border-slate-700 text-slate-300 hover:border-purple-500 hover:text-white transition-all duration-300 backdrop-blur-sm font-medium",children:"Mehr erfahren"})]}),U.jsx("p",{className:"mt-8 text-slate-500 text-sm",children:"✓ Keine versteckten Kosten · ✓ 100% Transparent · ✓ Persönlicher Support"})]})]})]})]})}const m1=["React, Next.js, TypeScript Experte","Responsive & moderne Designs","SEO-optimierte Websites","Persönliche Betreuung & Support"];function g1(){return U.jsx("section",{id:"ueber-mich",className:"py-24 px-6 bg-slate-900/30",children:U.jsx("div",{className:"container mx-auto max-w-6xl",children:U.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center mx-auto",children:[U.jsxs("div",{children:[U.jsx("h2",{className:"text-4xl md:text-5xl font-semibold tracking-tighter mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent",children:"Über mich"}),U.jsx("p",{className:"text-slate-400 text-base leading-relaxed mb-6",children:"Als studierter Informatiker mit über 10 Jahren Berufserfahrung und hauptberuflichem Teamleiter verbinde ich fundiertes technisches Know-how in Apps, Automation und KI mit der Kreativität eines leidenschaftlichen Webentwicklers, um Ihre digitalen Visionen in maßgeschneiderte, hervorragend funktionierende Webseiten umzusetzen, die garantiert 50% günstiger sind als Agenturen"}),U.jsx("p",{className:"text-slate-400 text-base leading-relaxed mb-8",children:"Jedes Projekt ist einzigartig, und ich nehme mir die Zeit, Ihre spezifischen Anforderungen zu verstehen und maßgeschneiderte Lösungen zu entwickeln, die Ihre Erwartungen übertreffen."}),U.jsx("div",{className:"space-y-4",children:m1.map((s,e)=>U.jsxs("div",{className:"flex items-center gap-3",children:[U.jsx(X0,{className:"w-5 h-5 text-purple-500 flex-shrink-0"}),U.jsx("span",{className:"text-slate-200",children:s})]},e))})]}),U.jsxs("div",{className:"grid grid-cols-2 gap-6 [perspective:1000px]",children:[U.jsxs(Er,{className:"group relative overflow-hidden bg-gradient-to-br from-purple-600/20 to-purple-500/20 border border-purple-500/30 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-3xl hover:shadow-purple-500/40 hover:border-purple-500/80 [transform-style:preserve-3d] hover:rotate-x-3",children:[U.jsx("div",{className:"absolute inset-0 bg-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse-slow z-0"}),U.jsxs(wr,{className:"pt-6 text-center relative z-10",children:[U.jsx(h_,{className:"w-10 h-10 text-purple-400 mb-4 mx-auto transition-all duration-300 group-hover:text-purple-200 group-hover:scale-110"}),U.jsx("div",{className:"text-4xl mb-2 font-bold text-white",children:"10+"}),U.jsx("div",{className:"text-slate-400",children:"Jahre Erfahrung"})]})]}),U.jsxs(Er,{className:"group relative overflow-hidden bg-gradient-to-br from-purple-500/20 to-purple-400/20 border border-purple-400/30 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-3xl hover:shadow-purple-500/40 hover:border-purple-400/80 [transform-style:preserve-3d] hover:rotate-x-3",children:[U.jsx("div",{className:"absolute inset-0 bg-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse-slow z-0"}),U.jsxs(wr,{className:"pt-6 text-center relative z-10",children:[U.jsx(md,{className:"w-10 h-10 text-purple-400 mb-4 mx-auto transition-all duration-300 group-hover:text-purple-200 group-hover:scale-110"}),U.jsx("div",{className:"text-4xl mb-2 font-bold text-white",children:"35+"}),U.jsx("div",{className:"text-slate-400",children:"Projekte"})]})]}),U.jsxs(Er,{className:"group relative overflow-hidden bg-gradient-to-br from-purple-700/20 to-purple-600/20 border border-purple-600/30 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-3xl hover:shadow-purple-500/40 hover:border-purple-600/80 [transform-style:preserve-3d] hover:rotate-x-3",children:[U.jsx("div",{className:"absolute inset-0 bg-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse-slow z-0"}),U.jsxs(wr,{className:"pt-6 text-center relative z-10",children:[U.jsx(m_,{className:"w-10 h-10 text-purple-400 mb-4 mx-auto transition-all duration-300 group-hover:text-purple-200 group-hover:scale-110"}),U.jsx("div",{className:"text-4xl mb-2 font-bold text-white",children:"30+"}),U.jsx("div",{className:"text-slate-400",children:"Zufriedene Kunden"})]})]}),U.jsxs(Er,{className:"group relative overflow-hidden bg-gradient-to-br from-purple-600/20 to-purple-700/20 border border-purple-500/30 transition-all duration-500 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-3xl hover:shadow-purple-500/40 hover:border-purple-500/80 [transform-style:preserve-3d] hover:rotate-x-3",children:[U.jsx("div",{className:"absolute inset-0 bg-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse-slow z-0"}),U.jsxs(wr,{className:"pt-6 text-center relative z-10",children:[U.jsx(Q0,{className:"w-10 h-10 text-purple-400 mb-4 mx-auto transition-all duration-300 group-hover:text-purple-200 group-hover:scale-110"}),U.jsx("div",{className:"text-4xl mb-2 font-bold text-white",children:"100%"}),U.jsx("div",{className:"text-slate-400",children:"Engagement"})]})]})]})]})})})}function ng(s,e){if(typeof s=="function")return s(e);s!=null&&(s.current=e)}function v1(...s){return e=>{let n=!1;const r=s.map(a=>{const l=ng(a,e);return!n&&typeof l=="function"&&(n=!0),l});if(n)return()=>{for(let a=0;a<r.length;a++){const l=r[a];typeof l=="function"?l():ng(s[a],null)}}}}function _1(s){const e=y1(s),n=It.forwardRef((r,a)=>{const{children:l,...u}=r,f=It.Children.toArray(l),m=f.find(M1);if(m){const p=m.props.children,v=f.map(_=>_===m?It.Children.count(p)>1?It.Children.only(null):It.isValidElement(p)?p.props.children:null:_);return U.jsx(e,{...u,ref:a,children:It.isValidElement(p)?It.cloneElement(p,void 0,v):null})}return U.jsx(e,{...u,ref:a,children:l})});return n.displayName=`${s}.Slot`,n}var x1=_1("Slot");function y1(s){const e=It.forwardRef((n,r)=>{const{children:a,...l}=n;if(It.isValidElement(a)){const u=w1(a),f=E1(l,a.props);return a.type!==It.Fragment&&(f.ref=r?v1(r,u):u),It.cloneElement(a,f)}return It.Children.count(a)>1?It.Children.only(null):null});return e.displayName=`${s}.SlotClone`,e}var S1=Symbol("radix.slottable");function M1(s){return It.isValidElement(s)&&typeof s.type=="function"&&"__radixId"in s.type&&s.type.__radixId===S1}function E1(s,e){const n={...e};for(const r in e){const a=s[r],l=e[r];/^on[A-Z]/.test(r)?a&&l?n[r]=(...f)=>{const m=l(...f);return a(...f),m}:a&&(n[r]=a):r==="style"?n[r]={...a,...l}:r==="className"&&(n[r]=[a,l].filter(Boolean).join(" "))}return{...s,...n}}function w1(s){let e=Object.getOwnPropertyDescriptor(s.props,"ref")?.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?s.ref:(e=Object.getOwnPropertyDescriptor(s,"ref")?.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?s.props.ref:s.props.ref||s.ref)}const ig=s=>typeof s=="boolean"?`${s}`:s===0?"0":s,rg=Bg,T1=(s,e)=>n=>{var r;if(e?.variants==null)return rg(s,n?.class,n?.className);const{variants:a,defaultVariants:l}=e,u=Object.keys(a).map(p=>{const v=n?.[p],_=l?.[p];if(v===null)return null;const x=ig(v)||ig(_);return a[p][x]}),f=n&&Object.entries(n).reduce((p,v)=>{let[_,x]=v;return x===void 0||(p[_]=x),p},{}),m=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((p,v)=>{let{class:_,className:x,...M}=v;return Object.entries(M).every(T=>{let[b,y]=T;return Array.isArray(y)?y.includes({...l,...f}[b]):{...l,...f}[b]===y})?[...p,_,x]:p},[]);return rg(s,u,m,n?.class,n?.className)},b1=T1("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function A1({className:s,variant:e,size:n,asChild:r=!1,...a}){const l=r?x1:"button";return U.jsx(l,{"data-slot":"button",className:Rr(b1({variant:e,size:n,className:s})),...a})}function pd({className:s,type:e,...n}){return U.jsx("input",{type:e,"data-slot":"input",className:Rr("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",s),...n})}function C1({className:s,...e}){return U.jsx("textarea",{"data-slot":"textarea",className:Rr("resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),...e})}function R1(){const s=e=>{e.preventDefault(),alert("Vielen Dank für Ihre Nachricht! Ich werde mich bald bei Ihnen melden.")};return U.jsx("section",{id:"kontakt",className:"py-20 px-6",children:U.jsxs("div",{className:"container mx-auto",children:[U.jsxs("div",{className:"text-center mb-16",children:[U.jsx("h2",{className:"text-3xl md:text-5xl mb-4 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent",children:"Kontakt aufnehmen"}),U.jsx("p",{className:"text-slate-400 text-lg max-w-2xl mx-auto",children:"Haben Sie ein Projekt im Kopf? Lassen Sie uns darüber sprechen!"})]}),U.jsxs("div",{className:"grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto",children:[U.jsxs("div",{className:"space-y-6",children:[U.jsxs(Er,{className:"bg-slate-900/50 border-purple-500/20",children:[U.jsxs(Vl,{children:[U.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center mb-2",children:U.jsx(ag,{className:"w-6 h-6"})}),U.jsx(Hl,{className:"text-white",children:"E-Mail"})]}),U.jsx(wr,{children:U.jsx("p",{className:"text-slate-400",children:"info@webdev-pro.de"})})]}),U.jsxs(Er,{className:"bg-slate-900/50 border-purple-500/20",children:[U.jsxs(Vl,{children:[U.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center mb-2",children:U.jsx(i_,{className:"w-6 h-6"})}),U.jsx(Hl,{className:"text-white",children:"Standort"})]}),U.jsx(wr,{children:U.jsx("p",{className:"text-slate-400",children:"Heilbronn, Deutschland"})})]})]}),U.jsx("div",{className:"lg:col-span-2",children:U.jsxs(Er,{className:"bg-slate-900/50 border-purple-500/20",children:[U.jsx(Vl,{children:U.jsx(Hl,{className:"text-white",children:"Nachricht senden"})}),U.jsx(wr,{children:U.jsxs("form",{onSubmit:s,className:"space-y-6",children:[U.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[U.jsxs("div",{className:"space-y-2",children:[U.jsx("label",{htmlFor:"name",className:"text-slate-300",children:"Name"}),U.jsx(pd,{id:"name",placeholder:"Ihr Name",required:!0,className:"bg-slate-800/50 border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-500/50"})]}),U.jsxs("div",{className:"space-y-2",children:[U.jsx("label",{htmlFor:"email",className:"text-slate-300",children:"E-Mail"}),U.jsx(pd,{id:"email",type:"email",placeholder:"ihre@email.de",required:!0,className:"bg-slate-800/50 border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-500/50"})]})]}),U.jsxs("div",{className:"space-y-2",children:[U.jsx("label",{htmlFor:"subject",className:"text-slate-300",children:"Betreff"}),U.jsx(pd,{id:"subject",placeholder:"Worum geht es?",required:!0,className:"bg-slate-800/50 border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-500/50"})]}),U.jsxs("div",{className:"space-y-2",children:[U.jsx("label",{htmlFor:"message",className:"text-slate-300",children:"Nachricht"}),U.jsx(C1,{id:"message",placeholder:"Erzählen Sie mir von Ihrem Projekt...",required:!0,rows:6,className:"bg-slate-800/50 border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-500/50"})]}),U.jsxs(A1,{type:"submit",className:"w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 border-0",children:[U.jsx(c_,{className:"w-4 h-4 mr-2"}),"Nachricht senden"]})]})})]})})]})]})})}const P1=[{icon:q0,href:"#",name:"GitHub"},{icon:e_,href:"#",name:"LinkedIn"},{icon:ag,href:"#",name:"Email"}];function D1(){const s=new Date().getFullYear();return U.jsx("footer",{className:"bg-slate-950/80 backdrop-blur-md border-t border-purple-500/20 mt-20 pt-12 pb-6",children:U.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[U.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[U.jsxs("div",{children:[U.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[U.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center",children:U.jsx(og,{className:"w-5 h-5 text-white"})}),U.jsx("span",{className:"font-bold text-xl text-white",children:"oezdens"})]}),U.jsx("p",{className:"text-slate-400 text-sm max-w-[200px]",children:"Moderne Webentwicklung & Design, spezialisiert auf reaktive Oberflächen."})]}),U.jsxs("div",{children:[U.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Navigation"}),U.jsxs("ul",{className:"space-y-2 text-sm",children:[U.jsx("li",{children:U.jsx("a",{href:"#home",className:"text-slate-400 hover:text-purple-400 transition-colors",children:"Home"})}),U.jsx("li",{children:U.jsx("a",{href:"#leistungen",className:"text-slate-400 hover:text-purple-400 transition-colors",children:"Leistungen"})}),U.jsx("li",{children:U.jsx("a",{href:"#ueber-mich",className:"text-slate-400 hover:text-purple-400 transition-colors",children:"Über mich"})})]})]}),U.jsxs("div",{children:[U.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Services"}),U.jsxs("ul",{className:"space-y-2 text-sm",children:[U.jsx("li",{children:U.jsx("a",{href:"#",className:"text-slate-400 hover:text-purple-400 transition-colors",children:"UI/UX Design"})}),U.jsx("li",{children:U.jsx("a",{href:"#",className:"text-slate-400 hover:text-purple-400 transition-colors",children:"Front-end Development"})}),U.jsx("li",{children:U.jsx("a",{href:"#",className:"text-slate-400 hover:text-purple-400 transition-colors",children:"SEO Optimierung"})})]})]}),U.jsxs("div",{children:[U.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Kontakt"}),U.jsx("a",{href:"#contact",className:"inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity text-sm font-medium mb-4",children:"Jetzt Kontakt aufnehmen"}),U.jsx("div",{className:"flex space-x-4",children:P1.map(e=>U.jsx("a",{href:e.href,"aria-label":e.name,className:"text-slate-400 hover:text-purple-400 transition-colors",children:U.jsx(e.icon,{className:"w-6 h-6"})},e.name))})]})]}),U.jsx("hr",{className:"my-8 border-purple-500/10"}),U.jsxs("div",{className:"flex justify-between items-center text-sm text-slate-500",children:[U.jsxs("p",{children:["© ",s," oezdens. Alle Rechte vorbehalten."]}),U.jsxs("div",{className:"flex space-x-4",children:[U.jsx("a",{href:"#",className:"hover:text-purple-400 transition-colors",children:"Impressum"}),U.jsx("a",{href:"#",className:"hover:text-purple-400 transition-colors",children:"Datenschutz"})]})]})]})})}function L1(){return U.jsx(U.Fragment,{})}function N1(){return U.jsxs("div",{className:"min-h-screen bg-slate-950 text-white",children:[U.jsx(__,{}),U.jsx(Pw,{}),U.jsx(p1,{}),U.jsx(h1,{}),U.jsx(g1,{}),U.jsx(R1,{}),U.jsx(L1,{}),U.jsx(D1,{})]})}k0.createRoot(document.getElementById("root")).render(U.jsx(N1,{}));
