/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../Color.js";import o from"../core/Accessor.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import"./projector.js";let s=(t,e,o)=>{for(let i=0,r=e.length;i<r;i++){let r=e[i];Array.isArray(r)?s(t,r,o):null!=r&&!1!==r&&("string"==typeof r&&(r={vnodeSelector:"",properties:void 0,children:void 0,text:r.toString(),domNode:null}),o.push(r))}};function l(t,e,o){if(Array.isArray(e))o=e,e=void 0;else if(e&&("string"==typeof e||e.hasOwnProperty("vnodeSelector"))||o&&("string"==typeof o||o.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");let i,r;return o&&1===o.length&&"string"==typeof o[0]?i=o[0]:o&&(r=[],s(t,o,r),0===r.length&&(r=void 0)),{vnodeSelector:t,properties:e,children:r,text:""===i?void 0:i,domNode:null}}const n={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"};let h=class extends o{get position(){return[this.x,this.y]}set position(t){this._set("x",t[0]),this._set("y",t[1])}get _textShadowColor(){const{textColor:t,backgroundColor:e}=this,o=e.clone();return o.a*=t.a,o}get _textShadow(){const t=this._textShadowColor.toCss(!0);return`0 0 ${this._textShadowSize}px ${t}`}get _padding(){return.5*this.fontSize}get _borderRadius(){return this._padding}constructor(t){super(t),this.x=0,this.y=0,this.text="-",this.fontSize=14,this.anchor="center",this.visible=!0,this.isDecoration=!0,this.backgroundColor=new e([0,0,0,.6]),this.textColor=new e([255,255,255]),this._textShadowSize=1}render(){return l("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?"visible":"hidden",fontSize:this.fontSize+"px",lineHeight:this.fontSize+"px",backgroundColor:this.backgroundColor.toCss(!0),color:this.textColor.toCss(!0),padding:this._padding+"px",borderRadius:this._borderRadius+"px",textShadow:this._textShadow}},[this.text])}renderCanvas(t){if(!this.visible)return;const e=t.font.replace(/^(.*?)px/,"");t.font=`${this.fontSize}px ${e}`;const o=this._padding,i=this._borderRadius,r=t.measureText(this.text).width,s=this.fontSize,l=a[this.anchor];t.textAlign="center",t.textBaseline="middle";const n=r+2*o,h=s+2*o,d=this.x+l.x*n,p=this.y+l.y*h;this._roundedRect(t,d,p,n,h,i),t.fillStyle=this.backgroundColor.toCss(!0),t.fill();const x=this.x+(l.x+.5)*n,c=this.y+(l.y+.5)*h;this._renderTextShadow(t,this.text,x,c),t.fillStyle=this.textColor.toCss(!0),t.fillText(this.text,x,c)}_renderTextShadow(t,e,o,i){t.lineJoin="miter",t.fillStyle=`rgba(${this._textShadowColor.r}, ${this._textShadowColor.g}, ${this._textShadowColor.b}, ${1/d.length})`;const r=this._textShadowSize;for(const[s,l]of d)t.fillText(e,o+r*s,i+r*l)}_roundedRect(t,e,o,i,r,s){t.beginPath(),t.moveTo(e,o+s),t.arcTo(e,o,e+s,o,s),t.lineTo(e+i-s,o),t.arcTo(e+i,o,e+i,o+s,s),t.lineTo(e+i,o+r-s),t.arcTo(e+i,o+r,e+i-s,o+r,s),t.lineTo(e+s,o+r),t.arcTo(e,o+r,e,o+r-s,s),t.closePath()}_cssClasses(){const t={"esri-text-overlay-item":!0};let e;for(e in n)t[n[e]]=this.anchor===e;return t}};t([i()],h.prototype,"x",void 0),t([i()],h.prototype,"y",void 0),t([i()],h.prototype,"position",null),t([i()],h.prototype,"text",void 0),t([i()],h.prototype,"fontSize",void 0),t([i()],h.prototype,"anchor",void 0),t([i()],h.prototype,"visible",void 0),t([i()],h.prototype,"isDecoration",void 0),t([i()],h.prototype,"backgroundColor",void 0),t([i()],h.prototype,"textColor",void 0),t([i()],h.prototype,"_textShadowSize",void 0),t([i()],h.prototype,"_textShadowColor",null),t([i()],h.prototype,"_textShadow",null),t([i()],h.prototype,"_padding",null),t([i()],h.prototype,"_borderRadius",null),h=t([r("esri.views.overlay.TextOverlayItem")],h);const a={bottom:{x:-.5,y:-1,textAlign:"center",textBaseline:"bottom"},"bottom-left":{x:0,y:-1,textAlign:"left",textBaseline:"bottom"},"bottom-right":{x:-1,y:-1,textAlign:"right",textBaseline:"bottom"},center:{x:-.5,y:-.5,textAlign:"center",textBaseline:"middle"},left:{x:0,y:-.5,textAlign:"left",textBaseline:"middle"},right:{x:-1,y:-.5,textAlign:"right",textBaseline:"middle"},top:{x:-.5,y:0,textAlign:"center",textBaseline:"top"},"top-left":{x:0,y:0,textAlign:"left",textBaseline:"top"},"top-right":{x:-1,y:0,textAlign:"right",textBaseline:"top"}},d=[];{const t=16;for(let e=0;e<360;e+=360/t)d.push([Math.cos(Math.PI*e/180),Math.sin(Math.PI*e/180)])}const p=h;export{p as T,l as h};
