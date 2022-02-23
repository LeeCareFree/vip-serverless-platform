import{a as W,c as A,b as I,d as C,e as he,A as be,_ as Q,o as Ce}from"./index.534a9533.js";import{r as n,c as S}from"./react-venders.41692bf8.js";import{R as X,L as Y}from"./index.397b35d1.js";var Z=globalThis&&globalThis.__rest||function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)r.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]]);return t},q=n.exports.createContext({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function $(e){var r=e.suffixCls,t=e.tagName,a=e.displayName;return function(o){var c=function(u){var f=n.exports.useContext(W),p=f.getPrefixCls,g=u.prefixCls,O=p(r,g);return n.exports.createElement(o,S({prefixCls:O,tagName:t},u))};return c.displayName=a,c}}var R=function(r){var t=r.prefixCls,a=r.className,o=r.children,c=r.tagName,d=Z(r,["prefixCls","className","children","tagName"]),u=A(t,a);return n.exports.createElement(c,S({className:u},d),o)},Se=function(r){var t,a=n.exports.useContext(W),o=a.direction,c=n.exports.useState([]),d=I(c,2),u=d[0],f=d[1],p=r.prefixCls,g=r.className,O=r.children,N=r.hasSider,_=r.tagName,P=Z(r,["prefixCls","className","children","hasSider","tagName"]),w=A(p,(t={},C(t,"".concat(p,"-has-sider"),typeof N=="boolean"?N:u.length>0),C(t,"".concat(p,"-rtl"),o==="rtl"),t),g),E=n.exports.useMemo(function(){return{siderHook:{addSider:function(y){f(function(h){return[].concat(he(h),[y])})},removeSider:function(y){f(function(h){return h.filter(function(z){return z!==y})})}}}},[]);return n.exports.createElement(q.Provider,{value:E},n.exports.createElement(_,S({className:w},P),O))},Oe=$({suffixCls:"layout",tagName:"section",displayName:"Layout"})(Se),Re=$({suffixCls:"layout-header",tagName:"header",displayName:"Header"})(R),Fe=$({suffixCls:"layout-footer",tagName:"footer",displayName:"Footer"})(R),Me=$({suffixCls:"layout-content",tagName:"main",displayName:"Content"})(R),De=Oe,Ne={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},we=Ne,ee=function(r,t){return n.exports.createElement(be,Q(Q({},r),{},{ref:t,icon:we}))};ee.displayName="BarsOutlined";var _e=n.exports.forwardRef(ee),Pe=function(r){return!isNaN(parseFloat(r))&&isFinite(r)},Ee=Pe,je=globalThis&&globalThis.__rest||function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)r.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(t[a[o]]=e[a[o]]);return t},re={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},Ae=n.exports.createContext({}),$e=function(){var e=0;return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return e+=1,"".concat(r).concat(e)}}(),te=n.exports.forwardRef(function(e,r){var t=e.prefixCls,a=e.className,o=e.trigger,c=e.children,d=e.defaultCollapsed,u=d===void 0?!1:d,f=e.theme,p=f===void 0?"dark":f,g=e.style,O=g===void 0?{}:g,N=e.collapsible,_=N===void 0?!1:N,P=e.reverseArrow,w=P===void 0?!1:P,E=e.width,T=E===void 0?200:E,y=e.collapsedWidth,h=y===void 0?80:y,z=e.zeroWidthTriggerStyle,B=e.breakpoint,k=e.onCollapse,H=e.onBreakpoint,v=je(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),oe=n.exports.useContext(q),F=oe.siderHook,ie=n.exports.useState("collapsed"in v?v.collapsed:u),M=I(ie,2),m=M[0],D=M[1],le=n.exports.useState(!1),V=I(le,2),K=V[0],se=V[1];n.exports.useEffect(function(){"collapsed"in v&&D(v.collapsed)},[v.collapsed]);var U=function(i,s){"collapsed"in v||D(i),k==null||k(i,s)},G=n.exports.useRef();G.current=function(l){se(l.matches),H==null||H(l.matches),m!==l.matches&&U(l.matches,"responsive")},n.exports.useEffect(function(){function l(x){return G.current(x)}var i;if(typeof window!="undefined"){var s=window,j=s.matchMedia;if(j&&B&&B in re){i=j("(max-width: ".concat(re[B],")"));try{i.addEventListener("change",l)}catch{i.addListener(l)}l(i)}}return function(){try{i==null||i.removeEventListener("change",l)}catch{i==null||i.removeListener(l)}}},[]),n.exports.useEffect(function(){var l=$e("ant-sider-");return F.addSider(l),function(){return F.removeSider(l)}},[]);var J=function(){U(!m,"clickTrigger")},ce=n.exports.useContext(W),de=ce.getPrefixCls,ue=function(){var i,s=de("layout-sider",t),j=Ce(v,["collapsed"]),x=m?h:T,b=Ee(x)?"".concat(x,"px"):String(x),L=parseFloat(String(h||0))===0?n.exports.createElement("span",{onClick:J,className:A("".concat(s,"-zero-width-trigger"),"".concat(s,"-zero-width-trigger-").concat(w?"right":"left")),style:z},o||n.exports.createElement(_e,null)):null,pe={expanded:w?n.exports.createElement(X,null):n.exports.createElement(Y,null),collapsed:w?n.exports.createElement(Y,null):n.exports.createElement(X,null)},ve=m?"collapsed":"expanded",me=pe[ve],xe=o!==null?L||n.exports.createElement("div",{className:"".concat(s,"-trigger"),onClick:J,style:{width:b}},o||me):null,ge=S(S({},O),{flex:"0 0 ".concat(b),maxWidth:b,minWidth:b,width:b}),ye=A(s,"".concat(s,"-").concat(p),(i={},C(i,"".concat(s,"-collapsed"),!!m),C(i,"".concat(s,"-has-trigger"),_&&o!==null&&!L),C(i,"".concat(s,"-below"),!!K),C(i,"".concat(s,"-zero-width"),parseFloat(b)===0),i),a);return n.exports.createElement("aside",S({className:ye},j,{style:ge,ref:r}),n.exports.createElement("div",{className:"".concat(s,"-children")},c),_||K&&L?xe:null)},fe=n.exports.useMemo(function(){return{siderCollapsed:m}},[m]);return n.exports.createElement(Ae.Provider,{value:fe},ue())});te.displayName="Sider";var Ve=te;function Te(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ze(e){if(Array.isArray(e))return e}function Be(e,r){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a=[],o=!0,c=!1,d,u;try{for(t=t.call(e);!(o=(d=t.next()).done)&&(a.push(d.value),!(r&&a.length===r));o=!0);}catch(f){c=!0,u=f}finally{try{!o&&t.return!=null&&t.return()}finally{if(c)throw u}}return a}}function ae(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function ke(e,r){if(!!e){if(typeof e=="string")return ae(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ae(e,r)}}function He(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ke(e,r){return ze(e)||Be(e,r)||ke(e,r)||He()}function ne(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,a)}return t}function Ue(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?ne(Object(t),!0).forEach(function(a){Te(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}export{Me as C,Fe as F,Re as H,De as I,Ve as S,ae as _,ke as a,Ue as b,Ke as c,Te as d,Ae as e};