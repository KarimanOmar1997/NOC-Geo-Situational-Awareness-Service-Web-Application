/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import o from"./Content.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";var e;let p=e=class extends o{constructor(t){super(t),this.text=null,this.type="text"}clone(){return new e({text:this.text})}};t([r({type:String,json:{write:!0}})],p.prototype,"text",void 0),t([r({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=e=t([s("esri.popup.content.TextContent")],p);const i=p;export{i as default};
