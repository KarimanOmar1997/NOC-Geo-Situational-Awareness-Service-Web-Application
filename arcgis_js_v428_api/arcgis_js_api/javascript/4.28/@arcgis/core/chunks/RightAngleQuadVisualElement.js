/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{watch as e}from"../core/reactiveUtils.js";import{d as t,c as r}from"./mat4.js";import{a as s}from"./mat4f64.js";import{h as i,p as a,b as o,c as n,e as c,d as u}from"./vec3.js";import{c as d,Z as l}from"./vec3f64.js";import{c as h}from"./vec4.js";import{f as m}from"./vec4f64.js";import{s as _}from"./vector.js";import{m as p}from"./dehydratedPoint.js";import{E as f}from"./EngineVisualElement.js";import{R,d as M}from"./RenderGeometry.js";import{A as O}from"./Attribute.js";import{G as j}from"./Geometry.js";import{c as g}from"./GeometryUtil.js";import{R as D}from"./Material.js";import{V as y}from"./VertexAttribute.js";import{C as z}from"./ColorMaterial.js";import{R as P}from"./TriangleMaterial.js";class v extends f{constructor(e){super(e),this._maxSize=0,this._position=d(),this._up=d(),this._right=d(),this._renderOccluded=D.OccludeAndTransparent,this._color=m(1,0,0,1),this._outlineColor=m(0,0,0,1),this._outlineSize=0,this._size=32,this._outlineRenderOccluded=D.Opaque,this.applyProperties(e)}createObject3DResourceFactory(e){return{view:e,createResources:e=>this._createObject3DResources(e),destroyResources:()=>{},cameraChanged:()=>this._updateTransformObject3D()}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:e=>this._destroyDrapedResources(e)}}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateQuadMaterial())}get color(){return this._color}set color(e){h(this._color,e),this._updateQuadMaterial()}get outlineColor(){return this._outlineColor}set outlineColor(e){h(this._outlineColor,e),this._updateOutlineMaterial()}get outlineSize(){return this._outlineSize}set outlineSize(e){const t=0===this._outlineSize!=(0===e);this._outlineSize=e,t?this.recreateGeometry():this._updateOutlineMaterial()}get size(){return this._size}set size(e){e!==this._size&&(this._size=e,this._updateTransform())}get outlineRenderOccluded(){return this._outlineRenderOccluded}set outlineRenderOccluded(e){this._outlineRenderOccluded=e,this._updateOutlineMaterial()}set geometry({previous:e,center:t,next:r}){this._maxSize=Math.min(i(t,e),i(t,r))/3,a(this._up,o(this._up,e,t)),a(this._right,o(this._right,r,t)),n(this._position,t),this.recreateGeometry()}_createObject3DResources(e){const t=new z(this._quadMaterialParameters),r=0===this._outlineSize?void 0:new P(this._outlineMaterialParameters);return this._createObject3DGeometries(e,t,r),{quadMaterial:t,outlineMaterial:r,forEach:e=>{e(t),r&&e(r)}}}_createObject3DGeometries(e,t,r){if(c(this._up,l)&&c(this._right,l))return;const s=this._createGeometries(t,r);for(const t of s)e.addGeometry(t);this._updateTransformObject3D(e)}_createDrapedResources(){const t=new z(this._quadMaterialParameters),r=0===this._outlineSize?void 0:new P(this._outlineMaterialParameters),s=this._createGeometries(t,r).map((e=>new R(e)));return this._setTransformDraped(s),{quadMaterial:t,outlineMaterial:r,geometries:s,pixelRatioHandle:e((()=>this.view.state.contentPixelRatio),(()=>{this.drapedResources.recreateGeometry()}))}}_destroyDrapedResources(e){e.pixelRatioHandle.remove(),e.geometries=[]}_createGeometries(e,t){const{up:r,right:s,corner:i}=this._getVertices(),a=this._quadGeometryData(r,s,i,e);return t?[a,g(t,[r,i,s])]:[a]}_getVertices(){let e=this._up,t=this._right;const r=u(_.get(),e,t);return this.isDraped&&(e=n(_.get(),e),t=n(_.get(),t),e[2]=0,t[2]=0,r[2]=0),{up:e,right:t,corner:r}}_updateTransform(){this.isDraped?this.drapedResources.recreateGeometry():this._updateTransformObject3D()}_updateTransformObject3D(e=this.object3dResources.object){if(!e)return;const s=this.view.state.camera,i=this._size*s.computeScreenPixelSizeAt(this._position),a=Math.min(this._maxSize,i);t(b,this._position),r(b,b,[a,a,a]),e.transformation=b}_setTransformDraped(e){if(0===e.length)return;const{view:{basemapTerrain:{overlayManager:s},state:{contentPixelRatio:i}}}=this,{_position:a,_size:o}=this,c=n(_.get(),a);c[2]=M;const u=S;u.spatialReference=s.renderer.spatialReference,u.x=c[0],u.y=c[1];const d=o*(this.view.overlayPixelSizeInMapUnits(u)*i),l=Math.min(this._maxSize,d);t(b,c),r(b,b,[l,l,1]);for(const t of e)t.transformation=b}_quadGeometryData(e,t,r,s){return new j(s,[[y.POSITION,new O([0,0,0,...t,...e,...r],[0,1,2,1,2,3],3,!0)]])}get _quadMaterialParameters(){return{color:this._color,forceTransparentMode:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateQuadMaterial(){this.object3dResources.resources?.quadMaterial.setParameters(this._quadMaterialParameters),this.drapedResources.resources?.quadMaterial.setParameters(this._quadMaterialParameters)}get _outlineMaterialParameters(){return{color:this._outlineColor,width:this._outlineSize,renderOccluded:this._outlineRenderOccluded,isDecoration:this.isDecoration}}_updateOutlineMaterial(){this.object3dResources.resources?.outlineMaterial?.setParameters(this._outlineMaterialParameters),this.drapedResources.resources?.outlineMaterial?.setParameters(this._outlineMaterialParameters)}}const b=s(),S=p(0,0,void 0,null);export{v as R};
