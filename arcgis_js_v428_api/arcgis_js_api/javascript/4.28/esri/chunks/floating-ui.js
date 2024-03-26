// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./index","./dom","./debounce"],function(L,Ka,La,Ma){function M(a,b){return"function"===typeof a?a(b):a}function F(a){return a.split("-")[0]}function C(a){return a.split("-")[1]}function V(a){return"x"===a?"y":"x"}function fa(a){return"y"===a?"height":"width"}function P(a){return["top","bottom"].includes(F(a))?"y":"x"}function na(a,b,c){void 0===c&&(c=!1);const d=C(a),e=V(P(a));a=fa(e);c="x"===e?d===(c?"end":"start")?"right":"left":"start"===d?"bottom":"top";b.reference[a]>b.floating[a]&&
(c=W(c));return[c,W(c)]}function Na(a){const b=W(a);return[X(a),b,X(b)]}function X(a){return a.replace(/start|end/g,b=>Oa[b])}function Pa(a,b,c){const d=["left","right"],e=["right","left"],f=["top","bottom"],g=["bottom","top"];switch(a){case "top":case "bottom":return c?b?e:d:b?d:e;case "left":case "right":return b?f:g;default:return[]}}function Qa(a,b,c,d){const e=C(a);a=Pa(F(a),"start"===c,d);e&&(a=a.map(f=>f+"-"+e),b&&(a=a.concat(a.map(X))));return a}function W(a){return a.replace(/left|right|bottom|top/g,
b=>Ra[b])}function oa(a){return"number"!==typeof a?{top:0,right:0,bottom:0,left:0,...a}:{top:a,right:a,bottom:a,left:a}}function Y(a){return{...a,top:a.y,left:a.x,right:a.x+a.width,bottom:a.y+a.height}}function pa(a,b,c){let {reference:d,floating:e}=a;var f=P(b);a=V(P(b));var g=fa(a),h=F(b);f="y"===f;const l=d.x+d.width/2-e.width/2,k=d.y+d.height/2-e.height/2;g=d[g]/2-e[g]/2;switch(h){case "top":h={x:l,y:d.y-e.height};break;case "bottom":h={x:l,y:d.y+d.height};break;case "right":h={x:d.x+d.width,
y:k};break;case "left":h={x:d.x-e.width,y:k};break;default:h={x:d.x,y:d.y}}switch(C(b)){case "start":h[a]-=g*(c&&f?-1:1);break;case "end":h[a]+=g*(c&&f?-1:1)}return h}async function S(a,b){var c;void 0===b&&(b={});const {x:d,y:e,platform:f,rects:g,elements:h,strategy:l}=a,{boundary:k="clippingAncestors",rootBoundary:p="viewport",elementContext:n="floating",altBoundary:t=!1,padding:u=0}=M(b,a);a=oa(u);var m=h[t?"floating"===n?"reference":"floating":n];b=Y(await f.getClippingRect({element:(null!=(c=
await (null==f.isElement?void 0:f.isElement(m)))?c:1)?m:m.contextElement||await (null==f.getDocumentElement?void 0:f.getDocumentElement(h.floating)),boundary:k,rootBoundary:p,strategy:l}));m="floating"===n?{...g.floating,x:d,y:e}:g.reference;const q=await (null==f.getOffsetParent?void 0:f.getOffsetParent(h.floating));c=await (null==f.isElement?void 0:f.isElement(q))?await (null==f.getScale?void 0:f.getScale(q))||{x:1,y:1}:{x:1,y:1};m=Y(f.convertOffsetParentRelativeRectToViewportRelativeRect?await f.convertOffsetParentRelativeRectToViewportRelativeRect({rect:m,
offsetParent:q,strategy:l}):m);return{top:(b.top-m.top+a.top)/c.y,bottom:(m.bottom-b.bottom+a.bottom)/c.y,left:(b.left-m.left+a.left)/c.x,right:(m.right-b.right+a.right)/c.x}}function Sa(a,b,c){return(a?[...c.filter(d=>C(d)===a),...c.filter(d=>C(d)!==a)]:c.filter(d=>F(d)===d)).filter(d=>a?C(d)===a||(b?X(d)!==d:!1):!0)}function qa(a,b){return{top:a.top-b.height,right:a.right-b.width,bottom:a.bottom-b.height,left:a.left-b.width}}function ra(a){return sa.some(b=>0<=a[b])}async function Ta(a,b){const {placement:c,
platform:d,elements:e}=a;var f=await (null==d.isRTL?void 0:d.isRTL(e.floating)),g=F(c);const h=C(c),l="y"===P(c);g=["left","top"].includes(g)?-1:1;f=f&&l?-1:1;a=M(b,a);let {mainAxis:k,crossAxis:p,alignmentAxis:n}="number"===typeof a?{mainAxis:a,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...a};h&&"number"===typeof n&&(p="end"===h?-1*n:n);return l?{x:p*f,y:k*g}:{x:k*g,y:p*f}}function J(a){return ta(a)?(a.nodeName||"").toLowerCase():"#document"}function A(a){var b;return(null==
a?void 0:null==(b=a.ownerDocument)?void 0:b.defaultView)||window}function G(a){var b;return null==(b=(ta(a)?a.ownerDocument:a.document)||window.document)?void 0:b.documentElement}function ta(a){return a instanceof Node||a instanceof A(a).Node}function H(a){return a instanceof Element||a instanceof A(a).Element}function D(a){return a instanceof HTMLElement||a instanceof A(a).HTMLElement}function ua(a){return"undefined"===typeof ShadowRoot?!1:a instanceof ShadowRoot||a instanceof A(a).ShadowRoot}function T(a){const {overflow:b,
overflowX:c,overflowY:d,display:e}=B(a);return/auto|scroll|overlay|hidden|clip/.test(b+d+c)&&!["inline","contents"].includes(e)}function ha(a){const b=ia(),c=B(a);return"none"!==c.transform||"none"!==c.perspective||(c.containerType?"normal"!==c.containerType:!1)||!b&&(c.backdropFilter?"none"!==c.backdropFilter:!1)||!b&&(c.filter?"none"!==c.filter:!1)||["transform","perspective","filter"].some(d=>(c.willChange||"").includes(d))||["paint","layout","strict","content"].some(d=>(c.contain||"").includes(d))}
function ia(){return"undefined"!==typeof CSS&&CSS.supports?CSS.supports("-webkit-backdrop-filter","none"):!1}function Z(a){return["html","body","#document"].includes(J(a))}function B(a){return A(a).getComputedStyle(a)}function aa(a){return H(a)?{scrollLeft:a.scrollLeft,scrollTop:a.scrollTop}:{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function Q(a){if("html"===J(a))return a;a=a.assignedSlot||a.parentNode||ua(a)&&a.host||G(a);return ua(a)?a.host:a}function va(a){const b=Q(a);return Z(b)?a.ownerDocument?
a.ownerDocument.body:a.body:D(b)&&T(b)?b:va(b)}function U(a,b,c){var d;void 0===b&&(b=[]);void 0===c&&(c=!0);const e=va(a);a=e===(null==(d=a.ownerDocument)?void 0:d.body);d=A(e);return a?b.concat(d,d.visualViewport||[],T(e)?e:[],d.frameElement&&c?U(d.frameElement):[]):b.concat(e,U(e,[],c))}function wa(a){var b=B(a);let c=parseFloat(b.width)||0;b=parseFloat(b.height)||0;var d=D(a);const e=d?a.offsetWidth:c;a=d?a.offsetHeight:b;if(d=ba(c)!==e||ba(b)!==a)c=e,b=a;return{width:c,height:b,$:d}}function ja(a){return H(a)?
a:a.contextElement}function R(a){var b=ja(a);if(!D(b))return{x:1,y:1};a=b.getBoundingClientRect();const {width:c,height:d,$:e}=wa(b);b=(e?ba(a.width):a.width)/c;a=(e?ba(a.height):a.height)/d;b&&Number.isFinite(b)||(b=1);a&&Number.isFinite(a)||(a=1);return{x:b,y:a}}function xa(a){a=A(a);return ia()&&a.visualViewport?{x:a.visualViewport.offsetLeft,y:a.visualViewport.offsetTop}:Ua}function N(a,b,c,d){void 0===b&&(b=!1);void 0===c&&(c=!1);var e=a.getBoundingClientRect(),f=ja(a),g={x:1,y:1};b&&(d?H(d)&&
(g=R(d)):g=R(a));a=c;void 0===a&&(a=!1);a=!d||a&&d!==A(f)?!1:a;b=a?xa(f):{x:0,y:0};a=(e.left+b.x)/g.x;b=(e.top+b.y)/g.y;c=e.width/g.x;e=e.height/g.y;if(f){f=A(f);g=d&&H(d)?A(d):d;let l=f.frameElement;for(;l&&d&&g!==f;){const k=R(l);var h=l.getBoundingClientRect();const p=B(l),n=h.left+(l.clientLeft+parseFloat(p.paddingLeft))*k.x;h=h.top+(l.clientTop+parseFloat(p.paddingTop))*k.y;a*=k.x;b*=k.y;c*=k.x;e*=k.y;a+=n;b+=h;l=A(l).frameElement}}return Y({width:c,height:e,x:a,y:b})}function ya(a){return N(G(a)).left+
aa(a).scrollLeft}function za(a,b,c){if("viewport"===b){b=A(a);var d=G(a);b=b.visualViewport;a=d.clientWidth;d=d.clientHeight;var e=0,f=0;if(b){a=b.width;d=b.height;const g=ia();if(!g||g&&"fixed"===c)e=b.offsetLeft,f=b.offsetTop}c={width:a,height:d,x:e,y:f}}else"document"===b?(f=G(a),c=G(f),e=aa(f),b=f.ownerDocument.body,a=I(c.scrollWidth,c.clientWidth,b.scrollWidth,b.clientWidth),d=I(c.scrollHeight,c.clientHeight,b.scrollHeight,b.clientHeight),f=-e.scrollLeft+ya(f),e=-e.scrollTop,"rtl"===B(b).direction&&
(f+=I(c.clientWidth,b.clientWidth)-a),c={width:a,height:d,x:f,y:e}):H(b)?(a=N(b,!0,"fixed"===c),c=a.top+b.clientTop,a=a.left+b.clientLeft,d=D(b)?R(b):{x:1,y:1},c={width:b.clientWidth*d.x,height:b.clientHeight*d.y,x:a*d.x,y:c*d.y}):(c=xa(a),c={...b,x:b.x-c.x,y:b.y-c.y});return Y(c)}function Aa(a,b){a=Q(a);return a===b||!H(a)||Z(a)?!1:"fixed"===B(a).position||Aa(a,b)}function Va(a,b){var c=b.get(a);if(c)return c;c=U(a,[],!1).filter(g=>H(g)&&"body"!==J(g));let d=null;const e="fixed"===B(a).position;
let f=e?Q(a):a;for(;H(f)&&!Z(f);){const g=B(f),h=ha(f);h||"fixed"!==g.position||(d=null);(e?!h&&!d:!h&&"static"===g.position&&d&&["absolute","fixed"].includes(d.position)||T(f)&&!h&&Aa(a,f))?c=c.filter(l=>l!==f):d=g;f=Q(f)}b.set(a,c);return c}function Ba(a,b){return D(a)&&"fixed"!==B(a).position?b?b(a):a.offsetParent:null}function Ca(a,b){const c=A(a);if(!D(a))return c;let d=Ba(a,b);for(;d&&["table","td","th"].includes(J(d))&&"static"===B(d).position;)d=Ba(d,b);if(d&&("html"===J(d)||"body"===J(d)&&
"static"===B(d).position&&!ha(d)))return c;if(!(b=d))a:{for(a=Q(a);D(a)&&!Z(a);)if(ha(a)){b=a;break a}else a=Q(a);b=null}return b||c}function Wa(a,b){function c(){clearTimeout(f);e&&e.disconnect();e=null}function d(h,l){function k(v){v=v[0].intersectionRatio;if(v!==l){if(!r)return d();v?d(!1,v):f=setTimeout(()=>{d(!1,1E-7)},100)}r=!1}void 0===h&&(h=!1);void 0===l&&(l=1);c();const {left:p,top:n,width:t,height:u}=a.getBoundingClientRect();h||b();if(t&&u){h=ca(n);var m=ca(g.clientWidth-(p+t)),q=ca(g.clientHeight-
(n+u)),w=ca(p);h={rootMargin:-h+"px "+-m+"px "+-q+"px "+-w+"px",threshold:I(0,K(1,l))||1};var r=!0;try{e=new IntersectionObserver(k,{...h,root:g.ownerDocument})}catch(v){e=new IntersectionObserver(k,h)}e.observe(a)}}let e=null,f;const g=G(a);d(!0);return c}function Xa(a,b,c,d){function e(){const r=N(a);!w||r.x===w.x&&r.y===w.y&&r.width===w.width&&r.height===w.height||c();w=r;q=requestAnimationFrame(e)}void 0===d&&(d={});const {ancestorScroll:f=!0,ancestorResize:g=!0,elementResize:h="function"===typeof ResizeObserver,
layoutShift:l="function"===typeof IntersectionObserver,animationFrame:k=!1}=d,p=ja(a),n=f||g?[...(p?U(p):[]),...U(b)]:[];n.forEach(r=>{f&&r.addEventListener("scroll",c,{passive:!0});g&&r.addEventListener("resize",c)});const t=p&&l?Wa(p,c):null;let u=-1,m=null;h&&(m=new ResizeObserver(r=>{[r]=r;r&&r.target===p&&m&&(m.unobserve(b),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{m&&m.observe(b)}));c()}),p&&!k&&m.observe(p),m.observe(b));let q,w=k?N(a):null;k&&e();c();return()=>{n.forEach(r=>{f&&
r.removeEventListener("scroll",c);g&&r.removeEventListener("resize",c)});t&&t();m&&m.disconnect();m=null;k&&cancelAnimationFrame(q)}}function Ya(a){a:{for(var b=a;b;b=ka(b))if(b instanceof Element&&"none"===getComputedStyle(b).display){a=null;break a}for(a=ka(a);a;a=ka(a))if(a instanceof Element&&(b=getComputedStyle(a),"contents"!==b.display&&("static"!==b.position||"none"!==b.filter||"BODY"===a.tagName)))break a;a=null}return a}function ka(a){return a.assignedSlot?a.assignedSlot:a.parentNode instanceof
ShadowRoot?a.parentNode.host:a.parentNode}function Za({placement:a,flipDisabled:b,flipPlacements:c,offsetDistance:d,offsetSkidding:e,arrowEl:f,type:g}){const h=[$a(),ab()];return"menu"===g?[...h,Da({fallbackPlacements:c||"top-start top top-end bottom-start bottom bottom-end".split(" ")})]:"popover"===g||"tooltip"===g?(d=[...h,bb({mainAxis:"number"===typeof d?d:0,crossAxis:"number"===typeof e?e:0})],"auto"===a||"auto-start"===a||"auto-end"===a?d.push(cb({alignment:"auto-start"===a?"start":"auto-end"===
a?"end":null})):b||d.push(Da(c?{fallbackPlacements:c}:{})),f&&d.push(db({element:f})),d):[]}function Ea(a,b,c){c&&b&&(la.get(a)?.(),la.delete(a),da.get(a)?.cancel(),da.delete(a))}const sa=["top","right","bottom","left"],Fa=["start","end"],Ga=sa.reduce((a,b)=>a.concat(b,b+"-"+Fa[0],b+"-"+Fa[1]),[]),K=Math.min,I=Math.max,ba=Math.round,ca=Math.floor,Ra={left:"right",right:"left",bottom:"top",top:"bottom"},Oa={start:"end",end:"start"},eb=async(a,b,c)=>{const {placement:d="bottom",strategy:e="absolute",
middleware:f=[],platform:g}=c;c=f.filter(Boolean);const h=await (null==g.isRTL?void 0:g.isRTL(b));let l=await g.getElementRects({reference:a,floating:b,strategy:e}),{x:k,y:p}=pa(l,d,h),n=d,t={},u=0;for(let m=0;m<c.length;m++){const {name:q,fn:w}=c[m],{x:r,y:v,data:x,reset:y}=await w({x:k,y:p,initialPlacement:d,placement:n,strategy:e,middlewareData:t,rects:l,platform:g,elements:{reference:a,floating:b}});k=null!=r?r:k;p=null!=v?v:p;t={...t,[q]:{...t[q],...x}};y&&50>=u&&(u++,"object"===typeof y&&(y.placement&&
(n=y.placement),y.rects&&(l=!0===y.rects?await g.getElementRects({reference:a,floating:b,strategy:e}):y.rects),{x:k,y:p}=pa(l,n,h)),m=-1)}return{x:k,y:p,placement:n,strategy:e,middlewareData:t}},db=a=>({name:"arrow",options:a,async fn(b){const {x:c,y:d,placement:e,rects:f,platform:g,elements:h,middlewareData:l}=b,{element:k,padding:p=0}=M(a,b)||{};if(null==k)return{};var n=oa(p);b={x:c,y:d};const t=V(P(e));var u=fa(t),m=await g.getDimensions(k),q="y"===t,w=q?"top":"left",r=q?"bottom":"right",v=q?
"clientHeight":"clientWidth",x=f.reference[u]+f.reference[t]-b[t]-f.floating[u];const y=b[t]-f.reference[t],z=await (null==g.getOffsetParent?void 0:g.getOffsetParent(k));(q=z?z[v]:0)&&await (null==g.isElement?void 0:g.isElement(z))||(q=h.floating[v]||f.floating[u]);v=x/2-y/2;x=q/2-m[u]/2-1;w=K(n[w],x);r=K(n[r],x);n=q-m[u]-r;q=q/2-m[u]/2+v;v=I(w,K(q,n));m=(u=!l.arrow&&null!=C(e)&&q!=v&&0>f.reference[u]/2-(q<w?w:r)-m[u]/2)?q<w?q-w:q-n:0;return{[t]:b[t]+m,data:{[t]:v,centerOffset:q-v-m,...(u&&{alignmentOffset:m})},
reset:u}}}),cb=function(a){void 0===a&&(a={});return{name:"autoPlacement",options:a,async fn(b){var c,d,e;const {rects:f,middlewareData:g,placement:h,platform:l,elements:k}=b,{crossAxis:p=!1,alignment:n,allowedPlacements:t=Ga,autoAlignment:u=!0,...m}=M(a,b);var q=void 0!==n||t===Ga?Sa(n||null,u,t):t,w=await S(b,m);b=(null==(c=g.autoPlacement)?void 0:c.index)||0;c=q[b];if(null==c)return{};var r=na(c,f,await (null==l.isRTL?void 0:l.isRTL(k.floating)));if(h!==c)return{reset:{placement:q[0]}};r=[w[F(c)],
w[r[0]],w[r[1]]];w=[...((null==(d=g.autoPlacement)?void 0:d.overflows)||[]),{placement:c,overflows:r}];if(d=q[b+1])return{data:{index:b+1,overflows:w},reset:{placement:d}};d=w.map(v=>{const x=C(v.placement);return[v.placement,x&&p?v.overflows.slice(0,2).reduce((y,z)=>y+z,0):v.overflows[0],v.overflows]}).sort((v,x)=>v[1]-x[1]);q=(null==(e=d.filter(v=>v[2].slice(0,C(v[0])?2:3).every(x=>0>=x))[0])?void 0:e[0])||d[0][0];return q!==h?{data:{index:b+1,overflows:w},reset:{placement:q}}:{}}}},Da=function(a){void 0===
a&&(a={});return{name:"flip",options:a,async fn(b){var c,d;const {placement:e,middlewareData:f,rects:g,initialPlacement:h,platform:l,elements:k}=b,{mainAxis:p=!0,crossAxis:n=!0,fallbackPlacements:t,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:q=!0,...w}=M(a,b);if(null!=(c=f.arrow)&&c.alignmentOffset)return{};c=F(e);var r=F(h)===h;const v=await (null==l.isRTL?void 0:l.isRTL(k.floating));r=t||(r||!q?[W(h)]:Na(h));t||"none"===m||r.push(...Qa(h,q,m,v));r=[h,...r];const x=
await S(b,w),y=[];b=(null==(d=f.flip)?void 0:d.overflows)||[];p&&y.push(x[c]);n&&(d=na(e,g,v),y.push(x[d[0]],x[d[1]]));b=[...b,{placement:e,overflows:y}];if(!y.every(E=>0>=E)){var z,ea;d=((null==(z=f.flip)?void 0:z.index)||0)+1;if(z=r[d])return{data:{index:d,overflows:b},reset:{placement:z}};z=null==(ea=b.filter(E=>0>=E.overflows[0]).sort((E,O)=>E.overflows[1]-O.overflows[1])[0])?void 0:ea.placement;if(!z)switch(u){case "bestFit":var Ha;(ea=null==(Ha=b.map(E=>[E.placement,E.overflows.filter(O=>0<
O).reduce((O,fb)=>O+fb,0)]).sort((E,O)=>E[1]-O[1])[0])?void 0:Ha[0])&&(z=ea);break;case "initialPlacement":z=h}if(e!==z)return{reset:{placement:z}}}return{}}}},ab=function(a){void 0===a&&(a={});return{name:"hide",options:a,async fn(b){var {rects:c}=b;const {strategy:d="referenceHidden",...e}=M(a,b);switch(d){case "referenceHidden":return b=await S(b,{...e,elementContext:"reference"}),c=qa(b,c.reference),{data:{referenceHiddenOffsets:c,referenceHidden:ra(c)}};case "escaped":return b=await S(b,{...e,
altBoundary:!0}),c=qa(b,c.floating),{data:{escapedOffsets:c,escaped:ra(c)}};default:return{}}}}},bb=function(a){void 0===a&&(a=0);return{name:"offset",options:a,async fn(b){const {x:c,y:d}=b;b=await Ta(b,a);return{x:c+b.x,y:d+b.y,data:b}}}},$a=function(a){void 0===a&&(a={});return{name:"shift",options:a,async fn(b){const {x:c,y:d,placement:e}=b,{mainAxis:f=!0,crossAxis:g=!1,limiter:h={fn:m=>{let {x:q,y:w}=m;return{x:q,y:w}}},...l}=M(a,b);var k={x:c,y:d};const p=await S(b,l),n=P(F(e)),t=V(n);let u=
k[t];k=k[n];f&&(u=I(u+p["y"===t?"top":"left"],K(u,u-p["y"===t?"bottom":"right"])));g&&(k=I(k+p["y"===n?"top":"left"],K(k,k-p["y"===n?"bottom":"right"])));b=h.fn({...b,[t]:u,[n]:k});return{...b,data:{x:b.x-c,y:b.y-d}}}}},Ua={x:0,y:0},ma={convertOffsetParentRelativeRectToViewportRelativeRect:function(a){let {rect:b,offsetParent:c,strategy:d}=a;var e=D(c);const f=G(c);if(c===f)return b;a={scrollLeft:0,scrollTop:0};let g={x:1,y:1};var h=0,l=0;if(e||!e&&"fixed"!==d){if("body"!==J(c)||T(f))a=aa(c);D(c)&&
(e=N(c),g=R(c),h=e.x+c.clientLeft,l=e.y+c.clientTop)}return{width:b.width*g.x,height:b.height*g.y,x:b.x*g.x-a.scrollLeft*g.x+h,y:b.y*g.y-a.scrollTop*g.y+l}},getDocumentElement:G,getClippingRect:function(a){let {element:b,boundary:c,rootBoundary:d,strategy:e}=a;a=[...("clippingAncestors"===c?Va(b,this._c):[].concat(c)),d];a=a.reduce((f,g)=>{g=za(b,g,e);f.top=I(g.top,f.top);f.right=K(g.right,f.right);f.bottom=K(g.bottom,f.bottom);f.left=I(g.left,f.left);return f},za(b,a[0],e));return{width:a.right-
a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:Ca,getElementRects:async function(a){let {reference:b,floating:c,strategy:d}=a;a=this.getDimensions;var e=await (this.getOffsetParent||Ca)(c),f=D(e);const g=G(e),h="fixed"===d,l=N(b,!0,h,e);let k={scrollLeft:0,scrollTop:0};var p=0,n=0;if(f||!f&&!h){if("body"!==J(e)||T(g))k=aa(e);f?(f=N(e,!0,h,e),p=f.x+e.clientLeft,n=f.y+e.clientTop):g&&(p=ya(g))}return{reference:{x:l.left+k.scrollLeft-p,y:l.top+k.scrollTop-n,width:l.width,height:l.height},
floating:{x:0,y:0,...(await a(c))}}},getClientRects:function(a){return Array.from(a.getClientRects())},getDimensions:function(a){return wa(a)},getScale:R,isElement:H,isRTL:function(a){return"rtl"===B(a).direction}};(function(){if(Ka.Build.isBrowser){const a=ma.getOffsetParent;ma.getOffsetParent=b=>a(b,Ya)}})();const Ia=async(a,{referenceEl:b,floatingEl:c,overlayPositioning:d="absolute",placement:e,flipDisabled:f,flipPlacements:g,offsetDistance:h,offsetSkidding:l,arrowEl:k,type:p})=>{if(!b||!c)return null;
if("auto"===e||"auto-start"===e||"auto-end"===e)var n=void 0;else n=["left","right"],"rtl"===La.getElementDir(c)&&n.reverse(),n=e.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1]);e={strategy:d,placement:n,middleware:Za({placement:e,flipDisabled:f,flipPlacements:g,offsetDistance:h,offsetSkidding:l,arrowEl:k,type:p})};d=new Map;e={platform:ma,...e};b=eb(b,c,{...e,platform:{...e.platform,_c:d}});const {x:t,y:u,placement:m,strategy:q,middlewareData:w}=await b;if(k&&w.arrow){const {x:r,y:v}=w.arrow;
b=m.split("-")[0];d=null!=r?"left":"top";e=gb[b];"floatingLayout"in a&&(a.floatingLayout="left"===b||"right"===b?"horizontal":"vertical");Object.assign(k.style,{left:"",top:"",bottom:"",right:"",[d]:`${"left"==d?r:v}px`,[b]:"100%",transform:e})}k=(a=w.hide?.referenceHidden?"hidden":null)?"none":null;c.setAttribute("data-placement",m);Object.assign(c.style,{visibility:a,pointerEvents:k,position:q,top:"0",left:"0",transform:`translate(${Math.round(t)}px,${Math.round(u)}px)`})},Ja="top bottom right left top-start top-end bottom-start bottom-end right-start right-end left-start left-end".split(" "),
gb={top:"",left:"rotate(-90deg)",bottom:"rotate(180deg)",right:"rotate(90deg)"},la=new WeakMap,da=new WeakMap,hb=Math.ceil(Math.hypot(4,4));L.FloatingCSS={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"};L.connectFloatingUI=function(a,b,c){c&&b&&(Ea(a,b,c),Object.assign(c.style,{visibility:"hidden",pointerEvents:"none",position:a.overlayPositioning,top:"0",left:"0"}),la.set(a,Xa(b,c,()=>a.reposition())))};L.defaultMenuPlacement="bottom-start";L.defaultOffsetDistance=
hb;L.disconnectFloatingUI=Ea;L.filterComputedPlacements=function(a,b){const c=a.filter(d=>Ja.includes(d));c.length!==a.length&&console.warn(`${b.tagName}: Invalid value found in: flipPlacements. Try any of these: ${Ja.map(d=>`"${d}"`).join(", ").trim()}`,{el:b});return c};L.reposition=async function(a,b,c=!1){if(a.open)return c?(c=da.get(a),c||(c=Ma.debounce(Ia,100,{leading:!0,maxWait:100}),da.set(a,c))):c=Ia,c(a,b)}});