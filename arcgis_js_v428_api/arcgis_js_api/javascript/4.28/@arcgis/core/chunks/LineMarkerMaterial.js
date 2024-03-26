/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{s as e,o as t,t as r}from"./vec3.js";import{c as s}from"./vec3f64.js";import{n as i}from"./InterleavedLayout.js";import{S as a}from"./ShaderOutput.js";import{G as n}from"./GLTextureMaterial.js";import{a as o,R as l}from"./Material.js";import{R as c}from"./RenderSlot.js";import{V as h}from"./VertexAttribute.js";import{V as p}from"./FloatsPassUniform.js";import{R as u,S as m,P as d}from"./Program2.js";import{c as T,o as _,a as f,b as A}from"./OrderIndependentTransparency.js";import{s as E,a as g,b as O,d as S,c as P,e as R,f as v,g as I}from"./DefaultBufferWriter.js";import{T as L}from"./TransparencyPassType.js";import{L as C}from"./LineMarker.glsl.js";import{m as b,d as U,a as y}from"./renderState2.js";import{f as D,a as N,L as w}from"./MarkerSizing.glsl.js";import{C as M}from"./RibbonLine.glsl.js";const k=new Map([[h.POSITION,0],[h.UV0,1],[h.AUXPOS1,2],[h.NORMAL,3],[h.COLOR,4],[h.COLORFEATUREATTRIBUTE,4],[h.SIZE,5],[h.SIZEFEATUREATTRIBUTE,5],[h.OPACITYFEATUREATTRIBUTE,6]]);class j extends m{initializeProgram(e){return new d(e.rctx,j.shader.get().build(this.configuration),k)}_makePipelineState(e,t){const r=this.configuration,s=e===L.NONE;return b({blending:r.output===a.Color||r.output===a.Alpha?s?T:_(e):null,depthTest:{func:f(e)},depthWrite:s?r.writeDepth?U:null:A(e),colorWrite:y,stencilWrite:r.hasOccludees?E:null,stencilTest:r.hasOccludees?t?g:O:null,polygonOffset:{factor:0,units:-10}})}initializePipeline(){return this.configuration.occluder&&(this._occluderPipelineTransparent=b({blending:T,depthTest:S,depthWrite:null,colorWrite:y,stencilWrite:null,stencilTest:P}),this._occluderPipelineOpaque=b({blending:T,depthTest:S,depthWrite:null,colorWrite:y,stencilWrite:R,stencilTest:v}),this._occluderPipelineMaskWrite=b({blending:null,depthTest:I,depthWrite:null,colorWrite:null,stencilWrite:E,stencilTest:g})),this._occludeePipelineState=this._makePipelineState(this.configuration.transparencyPassType,!0),this._makePipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e,t,r){return e?this._occludeePipelineState:this.configuration.occluder?r?this._occluderPipelineTransparent:t?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:super.getPipeline()}}j.shader=new u(C,(()=>import("./LineMarker.glsl.js").then((e=>e.L))));class W extends o{constructor(e){super(e,new x),this._vertexAttributeLocations=k,this._configuration=new D,this._layout=this.createLayout()}getConfiguration(e,t){return this._configuration.output=e,this._configuration.space=t.slot===c.DRAPED_MATERIAL?N.Draped:this.parameters.worldSpace?N.World:N.Screen,this._configuration.hideOnShortSegments=this.parameters.hideOnShortSegments,this._configuration.hasCap=this.parameters.cap!==M.BUTT,this._configuration.anchor=this.parameters.anchor,this._configuration.hasTip=this.parameters.hasTip,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.occluder=this.parameters.renderOccluded===l.OccludeAndTransparentStencil,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}intersect(){}createLayout(){const e=i().vec3f(h.POSITION).vec2f(h.UV0).vec3f(h.AUXPOS1);return this.parameters.worldSpace&&e.vec3f(h.NORMAL),this.parameters.vvSize?e.f32(h.SIZEFEATUREATTRIBUTE):e.f32(h.SIZE),this.parameters.vvColor?e.f32(h.COLORFEATUREATTRIBUTE):e.vec4f(h.COLOR),this.parameters.vvOpacity&&e.f32(h.OPACITYFEATUREATTRIBUTE),e}createBufferWriter(){return new F(this._layout,this.parameters)}produces(e,t){return!(t!==a.Color&&t!==a.Alpha&&t!==a.Highlight&&t!==a.Depth||e!==c.DRAPED_MATERIAL&&(this.parameters.renderOccluded===l.OccludeAndTransparentStencil?e!==c.OPAQUE_MATERIAL&&e!==c.OCCLUDER_MATERIAL&&e!==c.TRANSPARENT_OCCLUDER_MATERIAL:t===a.Color||t===a.Alpha?e!==(this.parameters.writeDepth?c.TRANSPARENT_MATERIAL:c.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL):e!==c.OPAQUE_MATERIAL))}createGLMaterial(e){return new B(e)}}class B extends n{constructor(){super(...arguments),this._markerPrimitive=null}dispose(){super.dispose(),this._markerTextureRepository.release(this._markerPrimitive),this._markerPrimitive=null}_updateParameters(e){const t=this._material.parameters.markerPrimitive;return t!==this._markerPrimitive&&(this._material.setParameters({markerTexture:this._markerTextureRepository.swap(t,this._markerPrimitive)}),this._markerPrimitive=t),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(j,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==a.Color&&this._output!==a.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class x extends p{constructor(){super(...arguments),this.width=0,this.color=[1,1,1,1],this.markerPrimitive="arrow",this.placement="end",this.cap=M.BUTT,this.anchor=w.Center,this.hasTip=!1,this.worldSpace=!1,this.hideOnShortSegments=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.hasOccludees=!1,this.markerTexture=null}}class F{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t}elementCount(){return"begin-end"===this._parameters.placement?12:6}write(s,i,a,n,o){const l=a.attributes.get(h.POSITION).data,c=l.length/3;let p=[1,0,0];const u=a.attributes.get(h.NORMAL);this._parameters.worldSpace&&null!=u&&(p=u.data);let m=1,d=0;this._parameters.vvSize?d=a.attributes.get(h.SIZEFEATUREATTRIBUTE).data[0]:a.attributes.has(h.SIZE)&&(m=a.attributes.get(h.SIZE).data[0]);let T=[1,1,1,1],_=0;this._parameters.vvColor?_=a.attributes.get(h.COLORFEATUREATTRIBUTE).data[0]:a.attributes.has(h.COLOR)&&(T=a.attributes.get(h.COLOR).data);let f=0;this._parameters.vvOpacity&&(f=a.attributes.get(h.OPACITYFEATUREATTRIBUTE).data[0]);const A=new Float32Array(n.buffer);let E=o*(this.vertexBufferLayout.stride/4);const g=(e,t,r,s)=>{if(A[E++]=e[0],A[E++]=e[1],A[E++]=e[2],A[E++]=r[0],A[E++]=r[1],A[E++]=t[0],A[E++]=t[1],A[E++]=t[2],this._parameters.worldSpace&&(A[E++]=p[0],A[E++]=p[1],A[E++]=p[2]),this._parameters.vvSize?A[E++]=d:A[E++]=m,this._parameters.vvColor)A[E++]=_;else{const e=Math.min(4*s,T.length-4);A[E++]=T[e],A[E++]=T[e+1],A[E++]=T[e+2],A[E++]=T[e+3]}this._parameters.vvOpacity&&(A[E++]=f)};let O;!function(e){e[e.ASCENDING=1]="ASCENDING",e[e.DESCENDING=-1]="DESCENDING"}(O||(O={}));const S=(i,a)=>{const n=e(G,l[3*i],l[3*i+1],l[3*i+2]),o=z;let h=i+a;do{e(o,l[3*h],l[3*h+1],l[3*h+2]),h+=a}while(t(n,o)&&h>=0&&h<c);s&&(r(n,n,s),r(o,o,s)),g(n,o,[-1,-1],i),g(n,o,[1,-1],i),g(n,o,[1,1],i),g(n,o,[-1,-1],i),g(n,o,[1,1],i),g(n,o,[-1,1],i)},P=this._parameters.placement;"begin"!==P&&"begin-end"!==P||S(0,O.ASCENDING),"end"!==P&&"begin-end"!==P||S(c-1,O.DESCENDING)}}const G=s(),z=s();export{W as L};
