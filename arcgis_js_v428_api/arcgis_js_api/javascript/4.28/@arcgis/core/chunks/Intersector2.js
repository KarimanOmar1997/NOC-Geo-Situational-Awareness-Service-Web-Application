/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{j as t}from"./mat4.js";import{a as r,I as s}from"./mat4f64.js";import{g as i,d as e,t as a,q as n,l as o,c as h,p as c}from"./vec3.js";import{a as d,c as l,U as f}from"./vec3f64.js";import{t as u}from"./vec4.js";import{a as m}from"./vec4f64.js";import{c as y,f as p,g}from"./vector.js";import{V as O}from"./ViewingMode.js";import{e as _}from"./boundedPlane.js";import{I as L,g as E}from"./verticalOffsetUtils.js";var v,A;!function(t){t[t.OBJECT=0]="OBJECT",t[t.HUD=1]="HUD",t[t.TERRAIN=2]="TERRAIN",t[t.OVERLAY=3]="OVERLAY",t[t.I3S=4]="I3S",t[t.PCL=5]="PCL",t[t.LOD=6]="LOD",t[t.VOXEL=7]="VOXEL"}(v||(v={}));class T{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.filteredLayerUids=[],this.store=A.ALL}}!function(t){t[t.MIN=0]="MIN",t[t.MINMAX=1]="MINMAX",t[t.ALL=2]="ALL"}(A||(A={}));class j{constructor(t,r,s){this.object=t,this.geometryId=r,this.triangleNr=s}}class I extends j{constructor(t,r,s,i){super(t,r,s),this.center=null!=i?d(i):null}}class b{constructor(t){this.layerUid=t}}class w extends b{constructor(t,r){super(t),this.graphicUid=r}}function M(t){return null!=t?.dist}function N(t){return(r,s,e)=>(i(R,r,s,e),!_(t,R))}function U(t){return M(t)&&t.intersector===v.OBJECT&&!!t.target}function x(t){return M(t)&&t.intersector===v.HUD&&!!t.target&&"center"in t.target&&null!=t.target.center}const R=l(),B=1e-5;class V{constructor(t){this.options=new T,this._results=new D,this.transform=new L,this.tolerance=B,this.verticalOffset=null,this._ray=y(),this._rayEnd=l(),this._rayBeginTransformed=l(),this._rayEndTransformed=l(),this.viewingMode=t??O.Global}get results(){return this._results}get ray(){return this._ray}get rayBegin(){return this._ray.origin}get rayEnd(){return this._rayEnd}reset(t,r,s){this.resetWithRay(p(t,r,this._ray),s)}resetWithRay(t,r){this.camera=r,t!==this._ray&&g(t,this._ray),0!==this.options.verticalOffset?this.viewingMode===O.Local?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,e(this._rayEnd,this._ray.origin,this._ray.direction),this._results.init(this._ray)}intersect(t=null,r,s,i,e){this.point=r,this.filterPredicate=i,this.tolerance=s??B;const a=E(this.verticalOffset);if(t&&t.length>0){const r=e?t=>{e(t)&&this.intersectObject(t)}:t=>{this.intersectObject(t)};for(const s of t){const t=s.getSpatialQueryAccelerator?.();null!=t?(null!=a?t.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,r,a):t.forEachAlongRay(this._ray.origin,this._ray.direction,r),this.options.selectionMode&&this.options.hud&&t.forEachDegenerateObject(r)):s.objects.forAll((t=>r(t)))}}this.sortResults()}intersectObject(t){const r=t.geometries;if(!r)return;const i=t.effectiveTransformation,e=E(this.verticalOffset);for(const n of r){if(!n.visible)continue;const{material:r,id:o}=n;this.transform.setAndInvalidateLazyTransforms(i,n.transformation),a(this._rayBeginTransformed,this.rayBegin,this.transform.inverse),a(this._rayEndTransformed,this.rayEnd,this.transform.inverse);const h=this.transform.transform;null!=e&&(e.objectTransform=this.transform),r.intersect(n,this.transform.transform,this,this._rayBeginTransformed,this._rayEndTransformed,((r,i,e,a,n,c)=>{if(r>=0){if(null!=this.filterPredicate&&!this.filterPredicate(this._ray.origin,this._rayEnd,r))return;const d=a?this._results.hud:this._results,l=a?a=>{const h=new I(t,o,e,c);a.set(v.HUD,h,r,i,s,n)}:s=>s.set(v.OBJECT,{object:t,geometryId:o,triangleNr:e},r,i,h,n);if((null==d.min.drapedLayerOrder||n>=d.min.drapedLayerOrder)&&(null==d.min.dist||r<d.min.dist)&&l(d.min),this.options.store!==A.MIN&&(null==d.max.drapedLayerOrder||n<d.max.drapedLayerOrder)&&(null==d.max.dist||r>d.max.dist)&&l(d.max),this.options.store===A.ALL)if(a){const t=new P(this._ray);l(t),this._results.hud.all.push(t)}else{const t=new G(this._ray);l(t),this._results.all.push(t)}}}))}}sortResults(t=this._results.all){t.sort(((t,r)=>t.dist!==r.dist?(t.dist??0)-(r.dist??0):t.drapedLayerOrder!==r.drapedLayerOrder?(t.drapedLayerOrder??Number.MAX_VALUE)-(r.drapedLayerOrder??Number.MAX_VALUE):(r.drapedLayerGraphicOrder??Number.MIN_VALUE)-(t.drapedLayerGraphicOrder??Number.MIN_VALUE)))}}function C(t){return new V(t)}class D{constructor(){this.min=new G(y()),this.max=new G(y()),this.hud={min:new P(y()),max:new P(y()),all:new Array},this.ground=new G(y()),this.all=[]}init(t){this.min.init(t),this.max.init(t),this.ground.init(t),this.all.length=0,this.hud.min.init(t),this.hud.max.init(t),this.hud.all.length=0}}class G{get ray(){return this._ray}get distanceInRenderSpace(){return null!=this.dist?(n(X,this.ray.direction,this.dist),o(X)):null}getIntersectionPoint(t){return!!M(this)&&(n(X,this.ray.direction,this.dist),e(t,this.ray.origin,X),!0)}getTransformedNormal(t){return h(H,this.normal),H[3]=0,u(H,H,this.transformation),h(t,H),c(t,t)}constructor(t){this.intersector=v.OBJECT,this.normal=l(),this.transformation=r(),this._ray=y(),this.init(t)}init(t){this.dist=null,this.target=null,this.drapedLayerOrder=null,this.drapedLayerGraphicOrder=null,this.intersector=v.OBJECT,g(t,this._ray)}set(r,i,e,a,n,o,c){this.intersector=r,this.dist=e,h(this.normal,a??f),t(this.transformation,n??s),this.target=i,this.drapedLayerOrder=o,this.drapedLayerGraphicOrder=c}copy(r){g(r.ray,this._ray),this.intersector=r.intersector,this.dist=r.dist,this.target=r.target,this.drapedLayerOrder=r.drapedLayerOrder,this.drapedLayerGraphicOrder=r.drapedLayerGraphicOrder,h(this.normal,r.normal),t(this.transformation,r.transformation)}}class P extends G{constructor(){super(...arguments),this.intersector=v.HUD}}function J(t){return new G(t)}const X=l(),H=m();export{w as G,v as I,b as L,A as S,C as a,U as b,x as c,B as d,M as i,J as n,N as s};