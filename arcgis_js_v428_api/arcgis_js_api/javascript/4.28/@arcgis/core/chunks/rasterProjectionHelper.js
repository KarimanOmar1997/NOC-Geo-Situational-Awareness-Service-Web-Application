/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import"../geometry.js";import{i as e}from"./typedArrayUtil.js";import t from"../core/Error.js";import{g as n,h as i,N as o,O as s,Y as r,Z as a,_ as l}from"./unitUtils.js";import{isLoaded as c,load as f,project as u,canProjectWithoutEngine as m,getTransformation as x}from"../geometry/projection.js";import h from"../geometry/Extent.js";import p from"../geometry/Polygon.js";import g from"../geometry/Point.js";import y from"../geometry/SpatialReference.js";var d;function M(e,t,n){return!m(e,t,n)}function w(e,n,i){const o=M(e,n,i);if(o&&!c())throw new t("rasterprojectionhelper-project","projection engine is not loaded");return o}!function(e){e[e.None=0]="None",e[e.North=1]="North",e[e.South=2]="South",e[e.Both=3]="Both"}(d||(d={}));const R=(e,t,n,i=0)=>{if(1===n[0])return[0,0];let o=1,s=-1,r=1,a=-1;for(let t=0;t<e.length;t+=2)isNaN(e[t])||(o=o>e[t]?e[t]:o,s=s>e[t]?s:e[t],r=r>e[t+1]?e[t+1]:r,a=a>e[t+1]?a:e[t+1]);const{cols:l,rows:c}=t,f=(s-o)/l/n[0],u=(a-r)/c/n[1],m=2*i;let x=0,h=!1,p=[0,0];for(let t=0;t<l-3;t++){for(let n=0;n<c-3;n++){const i=t*c*2+2*n,o=(e[i]+e[i+4]+e[i+4*c]+e[i+4*c+4])/4,s=(e[i+1]+e[i+5]+e[i+4*c+1]+e[i+4*c+5])/4,r=Math.abs((o-e[i+2*c+2])/f),a=Math.abs((s-e[i+2*c+3])/u);if(r+a>x&&(x=r+a,p=[r,a]),m&&x>m){h=!0;break}}if(h)break}return p},S={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},P=32,b=4,G=b,N=new Map,k=new Map,E=500;async function T(){c()||await f()}function v(e,t,n){return w(e.spatialReference,t),n?x(t,e.spatialReference,e):x(e.spatialReference,t,e)}function C(e,t,i,o=null){const s=e.spatialReference;if(s.equals(t))return e;w(s,t,o);const r=i.center,a=new h({xmin:r.x-e.x/2,xmax:r.x+e.x/2,ymin:r.y-e.y/2,ymax:r.y+e.y/2,spatialReference:s}),l=u(a,t,o),c=q(t);let f;if(null==l||null!=c&&l.width>=c){const i=n(s)/n(t);f={x:e.x*i,y:e.y*i}}else f={x:l.width,y:l.height};return f}function _(e,t=.01){return n(e)?t/n(e):0}function j(e,t,n=null,i=!0){const o=e.spatialReference;if(o.equals(t))return e;w(o,t,n);const s=u(e,t,n);return i&&s?(z([e],[s],o,t),s):s}function z(e,t,n,i){const o=J(n,!0),s=J(i,!0),r=_(n,E),a=_(i,E);if(r&&null!=o&&null!=s)for(let n=0;n<e.length;n++){const i=t[n];if(!i)continue;const{x:l}=e[n],{x:c}=i;c>=s[1]-a&&Math.abs(l-o[0])<r?i.x-=s[1]-s[0]:c<=s[0]+a&&Math.abs(l-o[1])<r&&(i.x+=s[1]-s[0])}}function L(e){const{inSR:t,outSR:n,datumTransformation:i}=e,l=I(t),{points:c,mask:f}=W(e,l);if(!t.isGeographic){const e=t.wkid?o.coordsys(t.wkid):o.fromString(t.isGeographic?s.PE_TYPE_GEOGCS:s.PE_TYPE_PROJCS,t.wkt2||t.wkt);r.projToGeog(e,c.length,c)}if(null!=i&&i.steps.length){let e;const t=179.9955;if(n.isGeographic&&(e=c.map((([e])=>e>t?1:e<-t?-1:0))),i.steps.forEach((e=>{const t=e.wkid?o.geogtran(e.wkid):o.fromString(s.PE_TYPE_GEOGTRAN,e.wkt);a.geogToGeog(t,c.length,c,null,e.isInverse?s.PE_TRANSFORM_2_TO_1:s.PE_TRANSFORM_1_TO_2)})),e)for(let n=0;n<c.length;n++){const i=e[n],o=c[n][0],s=o>t?1:o<-t?-1:0;i&&s&&i!==s&&(c[n][0]=i>0?o+360:o-360)}}if(!n.isGeographic){const e=I(n,!0),t=null!=e&&e.isEnvelope?[e.bbox[1],e.bbox[3]]:[-90,90];!function(e,t){const[n,i]=t;for(let t=0;t<e.length;t++){const o=e[t][1];(o<n||o>i)&&(e[t]=[NaN,NaN])}}(c,t);const i=n.wkid?o.coordsys(n.wkid):o.fromString(n.isGeographic?s.PE_TYPE_GEOGCS:s.PE_TYPE_PROJCS,n.wkt2||n.wkt);r.geogToProj(i,c.length,c)}let u=c;if(f&&c.length!==f.length){u=[];for(let e=0,t=0;e<f.length;e++)f[e]?u.push(c[t++]):u.push([NaN,NaN])}return u}function I(e,t=!1){let n=e.wkid||e.wkt2||e.wkt;if(!n||e.isGeographic)return null;if(n=String(n),N.has(n)){const e=N.get(n);return t?e?.gcs:e?.pcs}const i=e.wkid?o.coordsys(e.wkid):o.fromString(e.isGeographic?s.PE_TYPE_GEOGCS:s.PE_TYPE_PROJCS,e.wkt2||e.wkt),r=O(i,_(e,1e-4)),a=O(i,0,!0);return N.set(n,{pcs:r,gcs:a}),t?a:r}function O(e,t=0,n=!1){const i=l.generate(e),o=n?e.horizonGcsGenerate():e.horizonPcsGenerate();if(!i||!o?.length)return null;let s=!1,r=o.find((e=>1===e.getInclusive()&&1===e.getKind()));if(!r){if(r=o.find((e=>1===e.getInclusive()&&0===e.getKind())),!r)return null;s=!0}const a=n?0:(2===i.getNorthPoleLocation()?1:0)|(2===i.getSouthPoleLocation()?2:0),c=i.isPannableRectangle(),f=r.getCoord();if(s)return{isEnvelope:s,isPannable:c,vertices:f,coef:null,bbox:[f[0][0]-t,f[0][1]-t,f[1][0]+t,f[1][1]+t],poleLocation:a};let u=0;const m=[];let[x,h]=f[0],[p,g]=f[0];for(let e=0,t=f.length;e<t;e++){u++,u===t&&(u=0);const[n,i]=f[e],[o,s]=f[u];if(s===i)m.push([n,o,i,s,2]);else{const e=(o-n)/(s-i||1e-4),t=n-e*i;i<s?m.push([e,t,i,s,0]):m.push([e,t,s,i,1])}x=x<n?x:n,h=h<i?h:i,p=p>n?p:n,g=g>i?g:i}return{isEnvelope:!1,isPannable:c,vertices:f,coef:m,bbox:[x,h,p,g],poleLocation:a}}function W(e,t){const n=[],{cols:i,rows:o,xres:s,yres:r,usePixelCenter:a}=e;let{xmin:l,ymax:c}=e;if(a&&(l+=s/2,c-=r/2),null==t){for(let e=0;e<i;e++)for(let t=0;t<o;t++)n.push([l+s*e,c-r*t]);return{points:n}}const f=new Uint8Array(i*o);if(t.isEnvelope){const{bbox:[e,a,u,m]}=t;for(let x=0,h=0;x<i;x++){const i=l+s*x,p=t.isPannable||i>=e&&i<=u;for(let e=0;e<o;e++,h++){const t=c-r*e;p&&t>=a&&t<=m&&(n.push([i,t]),f[h]=1)}}return{points:n,mask:f}}const u=t.coef,m=[];for(let e=0;e<o;e++){const t=c-r*e,n=[],i=[];for(let e=0;e<u.length;e++){const[o,s,r,a,l]=u[e];if(t===r&&r===a)n.push(o),n.push(s),i.push(2),i.push(2);else if(t>=r&&t<=a){const e=o*t+s;n.push(e),i.push(l)}}let o=n;if(n.length>2){let e=2===i[0]?0:i[0],t=n[0];o=[];for(let s=1;s<i.length;s++)2===i[s]&&s!==i.length-1||(i[s]!==e&&(o.push(0===e?Math.min(t,n[s-1]):Math.max(t,n[s-1])),e=i[s],t=n[s]),s===i.length-1&&o.push(0===i[s]?Math.min(t,n[s]):Math.max(t,n[s])));o.sort(((e,t)=>e-t))}else n[0]>n[1]&&(o=[n[1],n[0]]);m.push(o)}for(let e=0,t=0;e<i;e++){const i=l+s*e;for(let e=0;e<o;e++,t++){const o=c-r*e,s=m[e];if(2===s.length)i>=s[0]&&i<=s[1]&&(n.push([i,o]),f[t]=1);else if(s.length>2){let e=!1;for(let t=0;t<s.length;t+=2)if(i>=s[t]&&i<=s[t+1]){e=!0;break}e&&(n.push([i,o]),f[t]=1)}}}return{points:n,mask:f}}function A(e,t){const n=q(e[0].spatialReference);if(e.length<2||null==n)return e[0];if(t=t??_(e[0].spatialReference),1===(e=e.filter((e=>e.width>t))).length)return e[0];let{xmin:i,xmax:o,ymin:s,ymax:r}=e[0];for(let t=1;t<e.length;t++){const i=e[t];o=i.xmax+n*t,s=Math.min(s,i.ymin),r=Math.max(r,i.ymax)}return new h({xmin:i,xmax:o,ymin:s,ymax:r,spatialReference:e[0].spatialReference})}function B(t,n,i=null,o=!0){const s=t.spatialReference;if(s.equals(n))return t;const r=X(t),a=q(s,!0),l=q(n);if(0===r||null==a||null==l){const e=Y(t,n,i,o);if(null==a&&null!=l&&Math.abs(e.width-l)<_(n)&&c()){const i=I(s);if(null!=i&&i.poleLocation===d.None&&t.width<(i.bbox[2]-i.bbox[0])/2)return function(e,t){const n=q(t);if(null==n)return null;let{xmin:i,ymin:o,xmax:s,ymax:r}=e;const a=e.spatialReference,l=new p({spatialReference:a,rings:[[[i,o],[s,o],[s,r],[i,r],[i,o]]]}),c=u(l,t);if(2!==c.rings.length||!c.rings[0].length||!c.rings[1].length)return null;const{rings:f}=c,m=_(a),x=new h({spatialReference:t});for(let e=0;e<2;e++){i=s=f[e][0][0],o=r=f[e][0][1];for(let t=0;t<f[e].length;t++)i=i>f[e][t][0]?f[e][t][0]:i,s=s<f[e][t][0]?f[e][t][0]:s,o=o>f[e][t][1]?f[e][t][1]:o,r=r<f[e][t][1]?f[e][t][1]:r;if(0===e)x.ymin=o,x.ymax=r,x.xmin=i,x.xmax=s;else if(x.ymin=Math.min(x.ymin,o),x.ymax=Math.max(x.ymax,r),Math.abs(s-n/2)<m)x.xmin=i,x.xmax=x.xmax+n;else{if(!(Math.abs(i+n/2)<m))return null;x.xmax=s+n}}return x}(t,n)||e}return e}const f=t.clone().normalize();if(1===f.length&&t.xmax<a&&t.xmax-a/2>_(s)){const{xmin:e,xmax:n}=t;for(let i=0;i<=r;i++){const o=0===i?e:-a/2,l=i===r?n-a*i:a/2;f[i]=new h({xmin:o,xmax:l,ymin:t.ymin,ymax:t.ymax,spatialReference:s})}}return A(f.map((e=>Y(e,n,i,o))).filter(e))}function F(e,t,n){if("extent"===e.type){const{xmin:t,ymin:n,xmax:i,ymax:o,spatialReference:s}=e;e=new p({rings:[[[t,o],[i,o],[i,n],[t,n],[t,o]]],spatialReference:s})}return e.spatialReference.equals(t)?e:(w(e.spatialReference,t,n),u(e,t,n))}function Y(e,t,n=null,i=!0,o=!0){const s=e.spatialReference;if(s.equals(t)||!t)return e;w(s,t,n);const r=u(e,t,n);if(o&&t.isWebMercator&&r&&(r.ymax=Math.min(20037508.342787,r.ymax),r.ymin=Math.max(-20037508.342787,r.ymin),r.ymin>=r.ymax))return null;if(!i||!r)return r;const a=J(s,!0),l=J(t,!0);if(null==a||null==l)return r;const c=_(s,.001),f=_(s,E),m=_(t,.001);if(Math.abs(r.xmin-l[0])<m&&Math.abs(r.xmax-l[1])<m){const i=Math.abs(e.xmin-a[0]),o=Math.abs(a[1]-e.xmax);if(i<c&&o>f){r.xmin=l[0];const i=[];i.push(new g(e.xmax,e.ymin,s)),i.push(new g(e.xmax,(e.ymin+e.ymax)/2,s)),i.push(new g(e.xmax,e.ymax,s));const o=i.map((e=>j(e,t,n))).filter((e=>!isNaN(e?.x))).map((e=>e.x));r.xmax=Math.max.apply(null,o)}if(o<c&&i>f){r.xmax=l[1];const i=[];i.push(new g(e.xmin,e.ymin,s)),i.push(new g(e.xmin,(e.ymin+e.ymax)/2,s)),i.push(new g(e.xmin,e.ymax,s));const o=i.map((e=>j(e,t,n))).filter((e=>!isNaN(e?.x))).map((e=>e.x));r.xmin=Math.min.apply(null,o)}}else{const e=_(t,.001);Math.abs(r.xmin-l[0])<e&&(r.xmin=l[0]),Math.abs(r.xmax-l[1])<e&&(r.xmax=l[1])}return r}function q(e,t=!1){if(!e)return null;const n=t?20037508.342787:20037508.342788905;return e.isWebMercator?2*n:e.wkid&&e.isGeographic?360:2*S[e.wkid]||null}function J(e,t=!1){if(e.isGeographic)return[-180,180];const n=q(e,t);return null!=n?[-n/2,n/2]:null}function U(e,t,n,i){let o=(e-t)/n;return o-Math.floor(o)!=0?o=Math.floor(o):i&&(o-=1),o}function X(e,t=!1){const n=q(e.spatialReference);if(null==n)return 0;const i=t?0:-n/2,o=_(e.spatialReference),s=!t&&Math.abs(e.xmax-n/2)<o?n/2:e.xmax,r=!t&&Math.abs(e.xmin+n/2)<o?-n/2:e.xmin;return U(s,i,n,!0)-U(r,i,n,!1)}function K(e){const t=e.storageInfo.origin.x,n=q(e.spatialReference,!0);if(null==n)return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const i=n/2,{nativePixelSize:o,storageInfo:s,extent:r}=e,{maximumPyramidLevel:a,blockWidth:l,pyramidScalingFactor:c}=s;let f=o.x;const u=[],m=null!=e.transform&&"gcs-shift"===e.transform.type,x=t+(m?0:i),h=m?n-t:i-t;for(let e=0;e<=a;e++){const e=(r.xmax-t)/f/l,n=e-Math.floor(e)==0?e:Math.ceil(e),i=h/f/l,o=i-Math.floor(i)==0?i:Math.ceil(i),s=Math.floor(x/f/l),a=Math.round(x/f)%l,m=(l-Math.round(h/f)%l)%l;u.push({resolutionX:f,blockWidth:l,datsetColumnCount:n,worldColumnCountFromOrigin:o,leftMargin:a,rightPadding:m,originColumnOffset:s}),f*=c}return{originX:t,halfWorldWidth:i,pyramidsInfo:u,hasGCSSShiftTransform:m}}function D(e){const t=e.isAdaptive&&null==e.spacing;let n=e.spacing||[P,P],i=Z(e),r={cols:i.size[0]+1,rows:i.size[1]+1};const a=i.outofBoundPointCount>0&&i.outofBoundPointCount<i.offsets.length/2;let l=i.outofBoundPointCount===i.offsets.length/2||t&&a?[0,0]:R(i.offsets,r,n,G);const c=(l[0]+l[1])/2,f=e.projectedExtent.spatialReference,u=e.srcBufferExtent.spatialReference;if(t&&(a||c>G)&&(M(f,u,e.datumTransformation)&&(f.isGeographic||I(f)),n=[b,b],i=Z({...e,spacing:n}),r={cols:i.size[0]+1,rows:i.size[1]+1},l=R(i.offsets,r,n,G)),i.error=l,n[0]>1&&(i.coefficients=H(i.offsets,r,a)),e.includeGCSGrid&&!f.isGeographic&&!f.isWebMercator)if(u.isGeographic)i.gcsGrid={offsets:i.offsets,coefficients:i.coefficients,spacing:n};else{const t=I(f);if(null!=t&&!t.isEnvelope){const t=function(e){if(!e||e.isGeographic)return e;const t=String(e.wkid||e.wkt2||e.wkt);let n;return k.has(t)?n=k.get(t):(n=(e.wkid?o.coordsys(e.wkid):o.fromString(s.PE_TYPE_PROJCS,e.wkt2||e.wkt)).getGeogcs().getCode(),k.set(t,n)),new y({wkid:n})}(f),l=B(e.projectedExtent,t),{offsets:c}=Z({...e,srcBufferExtent:l,spacing:n}),u=H(c,r,a);i.gcsGrid={offsets:c,coefficients:u,spacing:n}}}return i}function Z(e){const{projectedExtent:t,srcBufferExtent:n,pixelSize:i,datumTransformation:o,rasterTransform:s}=e,r=t.spatialReference,a=n.spatialReference,l=w(r,a),{xmin:c,ymin:f,xmax:m,ymax:x}=t,h=q(a),p=null!=h&&(e.hasWrapAround||"gcs-shift"===s?.type),y=e.spacing||[P,P],d=y[0]*i.x,M=y[1]*i.y,R=1===y[0],S=Math.ceil((m-c)/d-.1/y[0])+(R?0:1),G=Math.ceil((x-f)/M-.1/y[1])+(R?0:1),N=function(e){const{inSR:t,outSR:n,datumTransformation:i,preferPE:o}=e;if(t.equals(n)){const{points:t}=W(e,null);return t}if(t.isWebMercator&&n.isWGS84||t.isWGS84&&n.isWebMercator)return function(e){const{cols:t,rows:n,xres:i,yres:o,usePixelCenter:s,inSR:r,outSR:a}=e;let{xmin:l,ymax:c}=e;s&&(l+=i/2,c-=o/2);const f=[],m=[],x=Math.max(t,n);for(let e=0;e<x;e++){const s=l+i*Math.min(t,e),x=c-o*Math.min(n,e),h=u(new g({x:s,y:x,spatialReference:r}),a);e<=t&&f.push(h.x),e<=n&&m.push(h.y)}const h=[];for(let e=0;e<t;e++)for(let t=0;t<n;t++)h.push([f[e],m[t]]);return h}(e);if(w(t,n,i)&&o){if(t.isGeographic)return L(e);if(null!=I(t))return L(e)}return function(e){const{points:t}=W(e,null),{inSR:n,outSR:i,datumTransformation:o}=e,s=t.map((e=>new g(e[0],e[1],n))),r=u(s,i,o);return o&&z(s,r,n,i),r.map((e=>e?[e.x,e.y]:[NaN,NaN]))}(e)}({cols:S,rows:G,xmin:c,ymax:x,xres:d,yres:M,inSR:r,outSR:a,datumTransformation:o,preferPE:y[0]<=b,usePixelCenter:R}),k=[];let T,v=0;const C=R?-1:NaN,{xmin:j,xmax:O,ymax:A,width:B,height:F}=n,Y=_(a,E),J=null!=h&&j>0&&O>h/2;let U=!1;if(l){const e=I(r);U=null!=e&&e.poleLocation>0}for(let e=0;e<S;e++){const t=[];for(let n=0;n<G;n++){let i=N[e*G+n];if(p&&i[0]>O&&i[0]>h/2-Y?i[0]-=h:p&&0===e&&i[0]<0&&J&&!s&&(i[0]+=h),!i||isNaN(i[0])||isNaN(i[1]))k.push(C),k.push(C),t.push(null),v++;else{if(s){const e=s.inverseTransform(new g({x:i[0],y:i[1],spatialReference:a}));i=[e.x,e.y]}t.push(i),e>0&&p&&T[n]&&i[0]<T[n][0]&&(i[0]+=h,U&&i[0]>O&&i[0]>h&&(i[0]-=h)),k.push((i[0]-j)/B),k.push((A-i[1])/F)}}T=t}return{offsets:k,error:null,coefficients:null,outofBoundPointCount:v,spacing:y,size:R?[S,G]:[S-1,G-1]}}function H(e,t,n){const{cols:i,rows:o}=t,s=new Float32Array((i-1)*(o-1)*2*6),r=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),a=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let t=0;t<i-1;t++){for(let n=0;n<o-1;n++){let l=t*o*2+2*n;const c=e[l],f=e[l+1],u=e[l+2],m=e[l+3];l+=2*o;const x=e[l],h=e[l+1],p=e[l+2],g=e[l+3];let y=0,d=12*(n*(i-1)+t);for(let e=0;e<3;e++)s[d++]=r[y++]*c+r[y++]*u+r[y++]*p;y=0;for(let e=0;e<3;e++)s[d++]=r[y++]*f+r[y++]*m+r[y++]*g;y=0;for(let e=0;e<3;e++)s[d++]=a[y++]*c+a[y++]*x+a[y++]*p;y=0;for(let e=0;e<3;e++)s[d++]=a[y++]*f+a[y++]*h+a[y++]*g}if(n)for(let e=0;e<s.length;e++)isNaN(s[e])&&(s[e]=-1)}return s}function Q(e){const{spatialReference:t}=e,n=i(t);if(!n)return e;const[o,s]=n.valid,r=s-o;let a=0;if(e.xmin<o){const t=o-e.xmin;a=Math.ceil(t/r)}else if(e.xmin>s){const t=e.xmin-s;a=-Math.ceil(t/r)}return new h({spatialReference:e.spatialReference,xmin:e.xmin+a*r,ymin:e.ymin,xmax:e.xmax+a*r,ymax:e.ymax})}function V(e,t,i){const{storageInfo:o,pixelSize:s}=t;let r=0,a=!1;const{pyramidResolutions:l}=o,c="mixed"===o.tileInfo.format?.toLowerCase()?Math.max(1,Math.min(3,o.tileInfo.dpi/96)):1,f=(e.x+e.y)/2/c;if(null!=l&&l.length){const e=l[l.length-1],o=(e.x+e.y)/2,c=(s.x+s.y)/2;if(f<=c)r=0;else if(f>=o)r=l.length,a=f/o>8;else{let e,t=c;for(let n=1;n<=l.length;n++){if(e=(l[n-1].x+l[n-1].y)/2,f<=e){f===e?r=n:"down"===i?(r=n-1,a=f/t>8):r="up"===i||f-t>e-f||f/t>2?n:n-1;break}t=e}}const u=0===r?s:l[r-1];return a&&Math.min(u.x,u.y)*n(t.spatialReference)>19567&&(a=!1),{pyramidLevel:r,pyramidResolution:new g({x:u.x,y:u.y,spatialReference:t.spatialReference}),excessiveReading:a}}const u=Math.log(e.x/s.x)/Math.LN2,m=Math.log(e.y/s.y)/Math.LN2,x=t.storageInfo.maximumPyramidLevel||0;r="down"===i?Math.floor(Math.min(u,m)):"up"===i?Math.ceil(Math.max(u,m)):Math.round((u+m)/2),r<0?r=0:r>x&&(a=r>x+3,r=x);const h=2**r;return{pyramidLevel:r,pyramidResolution:new g({x:h*t.nativePixelSize.x,y:h*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:a}}function $(e,t){const{pixelSize:n,extent:i}=e,o=v(i,t,!1),s=function(e,t){const n=e.clone().normalize();return 1===n.length?n[0]:A(n,t)}(i,(n.x+n.y)/16);return B(s,t,o)}function ee(e,t,i){const o=i?.tileSize??512,s=i?.alignGlobalDatasetWithAGOL??!0,r=!!i?.limitToSrcResolution,{extent:a,spatialReference:l,pixelSize:c}=e,f=C(new g({x:c.x,y:c.y,spatialReference:l}),t,a);if(null==f)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const u=(f.x+f.y)/2,m=n(t),x=u*m*96*39.37,h=t.isGeographic?256/o*295828763.7958547:256/o*591657527.591555;let p="vector-magdir"===e.dataType||"vector-uv"===e.dataType;const y=$(e,t),d=Math.min(Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2),Math.ceil(Math.log(h/2/x)/Math.LN2));if(!p&&s&&(t.isGeographic||t.isWebMercator)){const n=q(t);if(p=X(y)>0||null!=n&&y.width>n/4,!p&&null!=n){let t=-1;if(d<3)t=2**d*u*o;else if(e.storageInfo){const{maximumPyramidLevel:n=0,pyramidScalingFactor:i=2}=e.storageInfo;t=i**n*u*o}const i=Math.ceil(n/t);p=1===i||2===i&&n/2-y.xmax<t}}let M,w=x;const R=Math.min(2,Math.max(1.414,e.storageInfo?.pyramidScalingFactor||2));if(p){w=h;const e=t.isGeographic?1341104507446289e-21:.29858214164761665,n=e*(96*m*39.37),i=t.isGeographic?4326:3857;M=C(new g({x:e,y:e,spatialReference:{wkid:i}}),l,y),M.x*=w/n,M.y*=w/n}else{M={x:c.x,y:c.y};let e=0;for(;w<.5005*h&&e<d;)e++,w*=R,M.x*=R,M.y*=R;Math.max(w,h)/Math.min(w,h)<=1.001&&(w=h)}const S=[w],P=[{x:M.x,y:M.y}],b=Math.min(70.5310735,x)/1.001;for(;w>=b;)w/=R,M.x/=R,M.y/=R,S.push(w),P.push({x:M.x,y:M.y});if(r){const e=.001*c.x;let t=P.findIndex((t=>t.x>=c.x-e&&t.x<=c.x+e));t>-1?(P.length=t+1,S.length=t+1):(t=P.findIndex((t=>t.x<=c.x+e)),t>0&&(P.length=t,S.length=t))}return{projectedPixelSize:f,scales:S,srcResolutions:P,isCustomTilingScheme:!p}}export{Q as a,X as b,B as c,D as d,K as e,C as f,q as g,F as h,ee as i,$ as j,v as k,T as l,j as p,M as r,V as s};
