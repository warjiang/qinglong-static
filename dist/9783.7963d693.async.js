var R=Object.assign;(self.webpackChunk=self.webpackChunk||[]).push([[9783],{19783:function(qt,Oe,_){"use strict";_.d(Oe,{SV:function(){return It},ZP:function(){return kt},_m:function(){return G}});function we(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function ae(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ce(Object(r),!0).forEach(function(n){we(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function je(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,c;for(c=0;c<n.length;c++)i=n[c],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function Ee(e,t){if(e==null)return{};var r=je(e,t),n,i;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function Pe(e,t){return Re(e)||Se(e,t)||Ce(e,t)||Te()}function Re(e){if(Array.isArray(e))return e}function Se(e,t){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,i=!1,c=void 0;try{for(var s=e[Symbol.iterator](),h;!(n=(h=s.next()).done)&&(r.push(h.value),!(t&&r.length===t));n=!0);}catch(p){i=!0,c=p}finally{try{!n&&s.return!=null&&s.return()}finally{if(i)throw c}}return r}}function Ce(e,t){if(!!e){if(typeof e=="string")return ue(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ue(e,t)}}function ue(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Te(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?se(Object(r),!0).forEach(function(n){_e(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ie(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return t.reduceRight(function(i,c){return c(i)},n)}}function I(e){return function t(){for(var r=this,n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return i.length>=e.length?e.apply(this,i):function(){for(var s=arguments.length,h=new Array(s),p=0;p<s;p++)h[p]=arguments[p];return t.apply(r,[].concat(i,h))}}}function N(e){return{}.toString.call(e).includes("Object")}function Ae(e){return!Object.keys(e).length}function A(e){return typeof e=="function"}function De(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function xe(e,t){return N(t)||E("changeType"),Object.keys(t).some(function(r){return!De(e,r)})&&E("changeField"),t}function Le(e){A(e)||E("selectorType")}function ke(e){A(e)||N(e)||E("handlerType"),N(e)&&Object.values(e).some(function(t){return!A(t)})&&E("handlersType")}function Ue(e){e||E("initialIsRequired"),N(e)||E("initialType"),Ae(e)&&E("initialContent")}function qe(e,t){throw new Error(e[t]||e.default)}var Ne={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},E=I(qe)(Ne),V={changes:xe,selector:Le,handler:ke,initial:Ue};function Ve(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};V.initial(e),V.handler(t);var r={current:e},n=I(We)(r,t),i=I(He)(r),c=I(V.changes)(e),s=I(Fe)(r);function h(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(C){return C};return V.selector(m),m(r.current)}function p(m){Ie(n,i,c,s)(m)}return[h,p]}function Fe(e,t){return A(t)?t(e.current):t}function He(e,t){return e.current=le(le({},e.current),t),t}function We(e,t,r){return A(t)?t(e.current):Object.keys(r).forEach(function(n){var i;return(i=t[n])===null||i===void 0?void 0:i.call(t,e.current[n])}),r}var ze={create:Ve},Be=ze,Ke={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}},Ge=Ke;function Ye(e){return function t(){for(var r=this,n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return i.length>=e.length?e.apply(this,i):function(){for(var s=arguments.length,h=new Array(s),p=0;p<s;p++)h[p]=arguments[p];return t.apply(r,[].concat(i,h))}}}var Ze=Ye;function Je(e){return{}.toString.call(e).includes("Object")}var Qe=Je;function Xe(e){return e||de("configIsRequired"),Qe(e)||de("configType"),e.urls?($e(),{paths:{vs:e.urls.monacoBase}}):e}function $e(){console.warn(fe.deprecation)}function et(e,t){throw new Error(e[t]||e.default)}var fe={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},de=Ze(et)(fe),tt={config:Xe},rt=tt,nt=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(i){return r.reduceRight(function(c,s){return s(c)},i)}},ot=nt;function pe(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],pe(e[r],t[r]))}),ae(ae({},e),t)}var it=pe,ct={type:"cancelation",msg:"operation is manually canceled"};function at(e){var t=!1,r=new Promise(function(n,i){e.then(function(c){return t?i(ct):n(c)}),e.catch(i)});return r.cancel=function(){return t=!0},r}var B=at,ut=Be.create({config:Ge,resolve:null,reject:null,monaco:null}),ge=Pe(ut,2),D=ge[0],K=ge[1];function st(e){var t=rt.config(e),r=t.monaco,n=Ee(t,["monaco"]);K(function(i){return{config:it(i.config,n),monaco:r}})}function lt(){var e=D(function(t){var r=t.monaco;return{monaco:r}});if(e.monaco){if(e.monaco)return B(Promise.resolve(e.monaco))}else{if(window.monaco&&window.monaco.editor)return ve(window.monaco),B(Promise.resolve(window.monaco));ot(ft,pt)(gt)}return B(ht)}function ft(e){return document.body.appendChild(e)}function dt(e){var t=document.createElement("script");return e&&(t.src=e),t}function pt(e){var t=D(function(n){var i=n.config,c=n.reject;return{config:i,reject:c}}),r=dt("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function gt(){var e=D(function(r){var n=r.config,i=r.resolve,c=r.reject;return{config:n,resolve:i,reject:c}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){ve(r),e.resolve(r)},function(r){e.reject(r)})}function ve(e){D().monaco||K({monaco:e})}function vt(){return D(function(e){var t=e.monaco;return t})}var ht=new Promise(function(e,t){return K({resolve:e,reject:t})}),mt={config:st,init:lt,__getMonacoInstance:vt},G=mt,a=_(12924),S=_.n(a),bt=_(40507),o=_.n(bt);function Y(){return Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Y.apply(this,arguments)}const yt={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};function Mt({content:e}){return S().createElement("div",{style:yt},e)}var Ot=Mt,Z={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function he({width:e,height:t,isEditorReady:r,loading:n,_ref:i,className:c,wrapperProps:s}){return S().createElement("section",Y({style:R(R({},Z.wrapper),{width:e,height:t})},s),!r&&S().createElement(Ot,{content:n}),S().createElement("div",{ref:i,style:R(R({},Z.fullWidth),!r&&Z.hide),className:c}))}he.propTypes={width:o().oneOfType([o().number,o().string]).isRequired,height:o().oneOfType([o().number,o().string]).isRequired,loading:o().oneOfType([o().element,o().string]).isRequired,isEditorReady:o().bool.isRequired,className:o().string,wrapperProps:o().object};var wt=he,jt=(0,a.memo)(wt),me=jt;function Et(e){(0,a.useEffect)(e,[])}var be=Et;function Pt(e,t,r=!0){const n=(0,a.useRef)(!0);(0,a.useEffect)(n.current||!r?()=>{n.current=!1}:e,t)}var w=Pt;function x(){}function F(e,t,r,n){return Rt(e,n)||St(e,t,r,n)}function Rt(e,t){return e.editor.getModel(ye(e,t))}function St(e,t,r,n){return e.editor.createModel(t,r,n&&ye(e,n))}function ye(e,t){return e.Uri.parse(t)}function Ct(e){return e===void 0}function J({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:i,originalModelPath:c,modifiedModelPath:s,keepCurrentOriginalModel:h,keepCurrentModifiedModel:p,theme:m,loading:C,options:j,height:X,width:$,className:ee,wrapperProps:te,beforeMount:re,onMount:ne}){const[M,L]=(0,a.useState)(!1),[P,g]=(0,a.useState)(!0),O=(0,a.useRef)(null),b=(0,a.useRef)(null),W=(0,a.useRef)(null),y=(0,a.useRef)(ne),u=(0,a.useRef)(re);be(()=>{const l=G.init();return l.then(v=>(b.current=v)&&g(!1)).catch(v=>(v==null?void 0:v.type)!=="cancelation"&&console.error("Monaco initialization: error:",v)),()=>O.current?oe():l.cancel()}),w(()=>{const l=O.current.getModifiedEditor();l.getOption(b.current.editor.EditorOption.readOnly)?l.setValue(t):t!==l.getValue()&&(l.executeEdits("",[{range:l.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),l.pushUndoStop())},[t],M),w(()=>{O.current.getModel().original.setValue(e)},[e],M),w(()=>{const{original:l,modified:v}=O.current.getModel();b.current.editor.setModelLanguage(l,n||r),b.current.editor.setModelLanguage(v,i||r)},[r,n,i],M),w(()=>{b.current.editor.setTheme(m)},[m],M),w(()=>{O.current.updateOptions(j)},[j],M);const k=(0,a.useCallback)(()=>{u.current(b.current);const l=F(b.current,e,n||r,c),v=F(b.current,t,i||r,s);O.current.setModel({original:l,modified:v})},[r,t,i,e,n,c,s]),z=(0,a.useCallback)(()=>{O.current=b.current.editor.createDiffEditor(W.current,R({automaticLayout:!0},j)),k(),b.current.editor.setTheme(m),L(!0)},[j,m,k]);(0,a.useEffect)(()=>{M&&y.current(O.current,b.current)},[M]),(0,a.useEffect)(()=>{!P&&!M&&z()},[P,M,z]);function oe(){const l=O.current.getModel();if(!h){var v;(v=l.original)===null||v===void 0||v.dispose()}if(!p){var U;(U=l.modified)===null||U===void 0||U.dispose()}O.current.dispose()}return S().createElement(me,{width:$,height:X,isEditorReady:M,loading:C,_ref:W,className:ee,wrapperProps:te})}J.propTypes={original:o().string,modified:o().string,language:o().string,originalLanguage:o().string,modifiedLanguage:o().string,originalModelPath:o().string,modifiedModelPath:o().string,keepCurrentOriginalModel:o().bool,keepCurrentModifiedModel:o().bool,theme:o().string,loading:o().oneOfType([o().element,o().string]),options:o().object,width:o().oneOfType([o().number,o().string]),height:o().oneOfType([o().number,o().string]),className:o().string,wrapperProps:o().object,beforeMount:o().func,onMount:o().func},J.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:x,onMount:x};var Tt=J,_t=(0,a.memo)(Tt),It=_t;function Vt(){const[e,t]=useState(loader.__getMonacoInstance());return useMount(()=>{let r;return e||(r=loader.init(),r.then(n=>{t(n)})),()=>{var n;return(n=r)===null||n===void 0?void 0:n.cancel()}}),e}var Ft=null;function At(e){const t=(0,a.useRef)();return(0,a.useEffect)(()=>{t.current=e},[e]),t.current}var Dt=At;const H=new Map;function Q({defaultValue:e,defaultLanguage:t,defaultPath:r,value:n,language:i,path:c,theme:s,line:h,loading:p,options:m,overrideServices:C,saveViewState:j,keepCurrentModel:X,width:$,height:ee,className:te,wrapperProps:re,beforeMount:ne,onMount:M,onChange:L,onValidate:P}){const[g,O]=(0,a.useState)(!1),[b,W]=(0,a.useState)(!0),y=(0,a.useRef)(null),u=(0,a.useRef)(null),k=(0,a.useRef)(null),z=(0,a.useRef)(M),oe=(0,a.useRef)(ne),l=(0,a.useRef)(null),v=(0,a.useRef)(n),U=Dt(c);be(()=>{const f=G.init();return f.then(d=>(y.current=d)&&W(!1)).catch(d=>(d==null?void 0:d.type)!=="cancelation"&&console.error("Monaco initialization: error:",d)),()=>u.current?Ut():f.cancel()}),w(()=>{const f=F(y.current,e||n,t||i,c);f!==u.current.getModel()&&(j&&H.set(U,u.current.saveViewState()),u.current.setModel(f),j&&u.current.restoreViewState(H.get(c)))},[c],g),w(()=>{u.current.updateOptions(m)},[m],g),w(()=>{u.current.getOption(y.current.editor.EditorOption.readOnly)?u.current.setValue(n):n!==u.current.getValue()&&(u.current.executeEdits("",[{range:u.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),u.current.pushUndoStop())},[n],g),w(()=>{y.current.editor.setModelLanguage(u.current.getModel(),i)},[i],g),w(()=>{Ct(h)||u.current.revealLine(h)},[h],g),w(()=>{y.current.editor.setTheme(s)},[s],g);const Me=(0,a.useCallback)(()=>{oe.current(y.current);const f=c||r,d=F(y.current,n||e,t||i,f);u.current=y.current.editor.create(k.current,R({model:d,automaticLayout:!0},m),C),j&&u.current.restoreViewState(H.get(f)),y.current.editor.setTheme(s),O(!0)},[e,t,r,n,i,c,m,C,j,s]);(0,a.useEffect)(()=>{g&&z.current(u.current,y.current)},[g]),(0,a.useEffect)(()=>{!b&&!g&&Me()},[b,g,Me]),v.current=n,(0,a.useEffect)(()=>{if(g&&L){var f,d;(f=l.current)===null||f===void 0||f.dispose(),l.current=(d=u.current)===null||d===void 0?void 0:d.onDidChangeModelContent(q=>{const T=u.current.getValue();v.current!==T&&L(T,q)})}},[g,L]),(0,a.useEffect)(()=>{if(g){const f=y.current.editor.onDidChangeMarkers(d=>{var q;const T=(q=u.current.getModel())===null||q===void 0?void 0:q.uri;if(T&&d.find(ie=>ie.path===T.path)){const ie=y.current.editor.getModelMarkers({resource:T});P==null||P(ie)}});return()=>{f==null||f.dispose()}}},[g,P]);function Ut(){var f;if((f=l.current)===null||f===void 0||f.dispose(),X)j&&H.set(c,u.current.saveViewState());else{var d;(d=u.current.getModel())===null||d===void 0||d.dispose()}u.current.dispose()}return S().createElement(me,{width:$,height:ee,isEditorReady:g,loading:p,_ref:k,className:te,wrapperProps:re})}Q.propTypes={defaultValue:o().string,defaultPath:o().string,defaultLanguage:o().string,value:o().string,language:o().string,path:o().string,theme:o().string,line:o().number,loading:o().oneOfType([o().element,o().string]),options:o().object,overrideServices:o().object,saveViewState:o().bool,keepCurrentModel:o().bool,width:o().oneOfType([o().number,o().string]),height:o().oneOfType([o().number,o().string]),className:o().string,wrapperProps:o().object,beforeMount:o().func,onMount:o().func,onChange:o().func,onValidate:o().func},Q.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:x,onMount:x,onValidate:x};var xt=Q,Lt=(0,a.memo)(xt),kt=Lt}}]);
