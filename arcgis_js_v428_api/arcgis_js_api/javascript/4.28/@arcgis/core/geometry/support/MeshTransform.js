/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import{a as i,i as a,e}from"../../chunks/mat4.js";import{a as n}from"../../chunks/mat4f64.js";import{s as l}from"../../chunks/quat.js";import{a as c}from"../../chunks/quatf64.js";import{t as p}from"../../chunks/vec3.js";import{c as m,g as u,f as h,a as j}from"../../chunks/vec3f64.js";import{f as k,d as g,g as y,b as f,u as x}from"../../chunks/axisAngleDegrees.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/time.js";import"../../chunks/common.js";import"../../chunks/vec4.js";import"../../chunks/mathUtils.js";var A;let b=A=class extends o{constructor(t){super(t),this.translation=m(),this.rotationAxis=u(x),this.rotationAngle=0,this.scale=h(1,1,1)}get rotation(){return k(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=j(g(t)),this.rotationAngle=y(t)}get localMatrix(){const t=n();return l(d,g(this.rotation),f(this.rotation)),i(t,d,this.translation,this.scale),t}get localMatrixInverse(){return a(n(),this.localMatrix)}applyLocal(t,o){return p(o,t,this.localMatrix)}applyLocalInverse(t,o){return p(o,t,this.localMatrixInverse)}equals(t){return this===t||null!=t&&e(this.localMatrix,t.localMatrix)}clone(){const t={translation:j(this.translation),rotationAxis:j(this.rotationAxis),rotationAngle:this.rotationAngle,scale:j(this.scale)};return new A(t)}};t([s({type:[Number],nonNullable:!0,json:{write:!0}})],b.prototype,"translation",void 0),t([s({type:[Number],nonNullable:!0,json:{write:!0}})],b.prototype,"rotationAxis",void 0),t([s({type:Number,nonNullable:!0,json:{write:!0}})],b.prototype,"rotationAngle",void 0),t([s({type:[Number],nonNullable:!0,json:{write:!0}})],b.prototype,"scale",void 0),t([s()],b.prototype,"rotation",null),t([s()],b.prototype,"localMatrix",null),t([s()],b.prototype,"localMatrixInverse",null),b=A=t([r("esri.geometry.support.MeshTransform")],b);const d=c(),v=b;export{v as default};