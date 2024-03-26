/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import s from"../../core/Accessor.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/time.js";let e=class extends s{constructor(r){super(r),this.name=null,this.supportedCategory=null,this.analyzers=[],this.searchProperties=new Map}};r([o()],e.prototype,"name",void 0),r([o()],e.prototype,"supportedCategory",void 0),r([o()],e.prototype,"analyzers",void 0),r([o()],e.prototype,"searchProperties",void 0),e=r([t("esri.rest.knowledgeGraph.SearchIndex")],e);const p=e;export{p as default};
