/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{B as t}from"./BidiEngine.js";import{d as e}from"./screenUtils.js";import{f as s,m as i,t as h,r as n}from"./mat2d.js";import{c as r,t as a}from"./mat2df32.js";import{f as o,t as c}from"./vec2.js";import{f,c as d}from"./vec2f32.js";import{V as l}from"./alignmentUtils.js";import{i as m}from"./number.js";import{R as u}from"./Rect.js";const g=new t;function x(t){if(null==t)return["",!1];if(!g.hasBidiChar(t))return[t,!1];let e;return e="rtl"===g.checkContextual(t)?"IDNNN":"ICNNN",[g.bidiTransform(t,e,"VLYSN"),!0]}class _{constructor(t,e,s,i){this.center=f(t,e),this.centerT=d(),this.halfWidth=s/2,this.halfHeight=i/2,this.width=s,this.height=i}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t}set y(t){this.center[1]=t}clone(){return new _(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t,e=4){const s=Math.abs(t.centerT[0]-this.centerT[0]),i=Math.abs(t.centerT[1]-this.centerT[1]),h=(t.halfWidth+this.halfWidth+e)/s,n=(t.halfHeight+this.halfHeight+e)/i,r=Math.min(h,n);return Math.log2(r)}extend(t){const e=Math.min(this.xmin,t.xmin),s=Math.min(this.ymin,t.ymin),i=Math.max(this.xmax,t.xmax)-e,h=Math.max(this.ymax,t.ymax)-s,n=e+i/2,r=s+h/2;this.width=i,this.height=h,this.halfWidth=i/2,this.halfHeight=h/2,this.x=n,this.y=r}static deserialize(t){const e=t.readF32(),s=t.readF32(),i=t.readInt32(),h=t.readInt32();return new _(e,s,i,h)}}const p=Math.PI/180;class w{constructor(t,e,s,i){this._rotationT=r(),this._xBounds=0,this._yBounds=0,this.minZoom=0,this.maxZoom=255,this._bounds=null;const h=s.rect,n=new Float32Array(8);t*=i,e*=i;const a=s.code?h.width*i:s.metrics.width,o=s.code?h.height*i:s.metrics.height;this.width=a,this.height=o,n[0]=t,n[1]=e,n[2]=t+a,n[3]=e,n[4]=t,n[5]=e+o,n[6]=t+a,n[7]=e+o,this._data=n,this._setTextureCoords(h),this._scale=i,this._mosaic=s,this.x=t,this.y=e,this.maxOffset=Math.max(t+a,e+o)}get mosaic(){return this._mosaic}set angle(t){this._angle=t,s(this._rotationT,-t),this._setOffsets(this._data)}get angle(){return this._angle}get xTopLeft(){return this._data[0]}get yTopLeft(){return this._data[1]}get xBottomRight(){return this._data[6]}get yBottomRight(){return this._data[7]}get texcoords(){return this._texcoords}get textureBinding(){return this._mosaic.textureBinding}get offsets(){return this._offsets||this._setOffsets(this._data),this._offsets}get char(){return String.fromCharCode(this._mosaic.code)}get code(){return this._mosaic.code}get bounds(){if(!this._bounds){const{height:t,width:e}=this._mosaic.metrics,s=e*this._scale,h=Math.abs(t)*this._scale,n=new Float32Array(8);n[0]=this.x,n[1]=this.y,n[2]=this.x+s,n[3]=this.y,n[4]=this.x,n[5]=this.y+h,n[6]=this.x+s,n[7]=this.y+h;const o=i(r(),this._rotationT,this._transform);a(n,n,o);let c=1/0,f=1/0,d=0,l=0;for(let t=0;t<4;t++){const e=n[2*t],s=n[2*t+1];c=Math.min(c,e),f=Math.min(f,s),d=Math.max(d,e),l=Math.max(l,s)}const m=d-c,u=l-f,g=c+m/2,x=f+u/2;this._bounds=new _(g,x,m,u)}return this._bounds}setTransform(t){this._transform=t,this._offsets=null}_setOffsets(t){this._offsets||(this._offsets={upperLeft:0,upperRight:0,lowerLeft:0,lowerRight:0});const e=this._offsets,s=new Float32Array(8),h=i(r(),this._rotationT,this._transform);a(s,t,h),e.upperLeft=m(8*s[0],8*s[1]),e.upperRight=m(8*s[2],8*s[3]),e.lowerLeft=m(8*s[4],8*s[5]),e.lowerRight=m(8*s[6],8*s[7])}_setTextureCoords({x:t,y:e,width:s,height:i}){this._texcoords={upperLeft:m(t,e),upperRight:m(t+s,e),lowerLeft:m(t,e+i),lowerRight:m(t+s,e+i)}}}const y=(t,e)=>({code:0,page:0,sdf:!0,rect:new u(0,0,11,8),textureBinding:e,metrics:{advance:0,height:4,width:t,left:0,top:0}});function M(t,e){return t.forEach((t=>c(t,t,e))),{upperLeft:m(8*t[0][0],8*t[0][1]),upperRight:m(8*t[1][0],8*t[1][1]),lowerLeft:m(8*t[2][0],8*t[2][1]),lowerRight:m(8*t[3][0],8*t[3][1])}}class b{constructor(t,e,s){this._rotation=0,this._decorate(t,e,s),this.glyphs=t,this.bounds=this._createBounds(t),this.isMultiline=e.length>1,this._hasRotation=0!==s.angle,this._transform=this._createGlyphTransform(this.bounds,s),this._borderLineSize=s.borderLineSize,(s.borderLineSize||s.hasBackground)&&([this.bounds,this.background]=this.shapeBackground(this._transform));for(const e of t)e.setTransform(this._transform)}setRotation(t){if(0===t&&0===this._rotation)return;this._rotation=t;const e=this._transform,h=s(r(),t);i(e,h,e);for(const t of this.glyphs)t.setTransform(this._transform)}_decorate(t,e,s){if(!s.decoration||"none"===s.decoration||!t.length)return;const i=s.scale,h="underline"===s.decoration?30:20,n=t[0].textureBinding;for(const s of e){const e=s.startX*i,r=s.startY*i,a=(s.width+s.glyphWidthEnd)*i;t.push(new w(e,r+h*i,y(a,n),1))}}shapeBackground(t){const{xmin:s,ymin:i,xmax:h,ymax:n,x:r,y:a,width:o,height:c}=this.bounds,f=Math.min(o,c)+16-1.5,d=(1.5+Math.min(e(this._borderLineSize||0),f))/2,l=this._borderLineSize?d:0,m=[s-8,i-8],u=[h+8,i-8],g=[s-8,n+8],x=[h+8,n+8],p=M([[m[0]-d,m[1]-d],[u[0]+d,u[1]-d],[m[0]+l,m[1]+l],[u[0]-l,u[1]+l]],t),w=M([[g[0]+l,g[1]-l],[x[0]-l,x[1]-l],[g[0]-d,g[1]+d],[x[0]+d,x[1]+d]],t),y=M([[m[0]-d,m[1]-d],[m[0]+l,m[1]+l],[g[0]-d,g[1]+d],[g[0]+l,g[1]-l]],t),b=M([[u[0]-l,u[1]+l],[u[0]+d,u[1]-d],[x[0]-l,x[1]-l],[x[0]+d,x[1]+d]],t),T={main:M([m,u,g,x],t),top:p,bot:w,left:y,right:b};return[new _(r,a,o+2*d,c+2*d),T]}get boundsT(){const t=this.bounds,e=o(d(),t.x,t.y);if(c(e,e,this._transform),this._hasRotation){const s=Math.max(t.width,t.height);return new _(e[0],e[1],s,s)}return new _(e[0],e[1],t.width,t.height)}_createBounds(t){let e=1/0,s=1/0,i=0,h=0;for(const n of t)e=Math.min(e,n.xTopLeft),s=Math.min(s,n.yTopLeft),i=Math.max(i,n.xBottomRight),h=Math.max(h,n.yBottomRight);const n=i-e,r=h-s;return new _(e+n/2,s+r/2,n,r)}_createGlyphTransform(t,e){const s=p*e.angle,i=r(),a=d();return h(i,i,o(a,e.xOffset,-e.yOffset)),e.isCIM?n(i,i,s):(h(i,i,o(a,t.x,t.y)),n(i,i,s),h(i,i,o(a,-t.x,-t.y))),i}}class T{constructor(t,e,s,i,h,n){this.glyphWidthEnd=0,this.startX=0,this.startY=0,this.start=Math.max(0,Math.min(e,s)),this.end=Math.max(0,Math.max(e,s)),this.end<t.length&&(this.glyphWidthEnd=t[this.end].metrics.width),this.width=i,this.yMin=h,this.yMax=n}}const B=t=>10===t,L=t=>32===t;function R(t,e,s){const i=s.scale,h=new Array,n=function(t,e,s){const i=new Array,h=1/s.scale,n=s.maxLineWidth*h,r=e?t.length-1:0,a=e?-1:t.length,o=e?-1:1;let c=r,f=0,d=0,l=c,m=l,u=0,g=1/0,x=0;for(;c!==a;){const{code:e,metrics:s}=t[c],h=Math.abs(s.top);if(B(e)||L(e)||(g=Math.min(g,h),x=Math.max(x,h+s.height)),B(e))c!==r&&(i.push(new T(t,l,c-o,f,g,x)),g=1/0,x=0),f=0,l=c+o,m=c+o,d=0;else if(L(e))m=c+o,d=0,u=s.advance,f+=s.advance;else if(f>n){if(m!==l){const e=m-2*o;f-=u,i.push(new T(t,l,e,f-d,g,x)),g=1/0,x=0,l=m,f=d}else i.push(new T(t,l,c-o,f,g,x)),g=1/0,x=0,l=c,m=c,f=0;f+=s.advance,d+=s.advance}else f+=s.advance,d+=s.advance;c+=o}const _=new T(t,l,c-o,f,g,x);return _.start>=0&&_.end<t.length&&i.push(_),i}(t,e,s),r=function(t,e){let s=0;for(let e=0;e<t.length;e++){const{width:i}=t[e];s=Math.max(i,s)}const i="underline"===e.decoration?4:0,h=t[0].yMin;return{x:0,y:h,height:t[t.length-1].yMax+e.lineHeight*(t.length-1)+i-h,width:s}}(n,s),{vAlign:a,hAlign:o}=s,c=a===l.Baseline?1:0,f=c?0:a-1,d=(1-c)*-r.y+f*(r.height/2)+-26*(c?1:0);for(let e=0;e<n.length;e++){const{start:r,end:a,width:c}=n[e];let f=-1*(o+1)*(c/2)-3;const l=e*s.lineHeight+d-3;n[e].startX=f,n[e].startY=l;for(let e=r;e<=a;e++){const s=t[e];if(B(s.code))continue;const n=new w(f+s.metrics.left,l-s.metrics.top,s,i);f+=s.metrics.advance,h.push(n)}}return new b(h,n,s)}export{x as b,R as s};
