/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../../core/JSONSupport.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ensureType.js";import"../../../chunks/typedArrayUtil.js";import{e as t}from"../../../chunks/enumeration.js";import{subclass as e}from"../../../core/accessorSupport/decorators/subclass.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../core/lang.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObjectPool.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../chunks/PooledArray.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/time.js";import"../../../chunks/jsonMap.js";var n;let c=n=class extends o{constructor(r){super(r),this.type="sunny",this.cloudCover=.5}clone(){return new n({cloudCover:this.cloudCover})}};r([t({sunny:"sunny"})],c.prototype,"type",void 0),r([s({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],c.prototype,"cloudCover",void 0),c=n=r([e("esri.views.3d.environment.SunnyWeather")],c);const i=c;export{i as default};
