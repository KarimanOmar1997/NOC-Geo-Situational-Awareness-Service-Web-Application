/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import o from"../../core/Collection.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/time.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";const e=e=>{let i=class extends e{constructor(...s){super(...s),this.analysis=null,this.tool=null,this.selectedDimension=null,this.interactive=!1,this.visible=null}get results(){return new o}createLengthDimensions(s){throw new Error("Method not implemented.")}};return s([t({constructOnly:!0})],i.prototype,"view",void 0),s([t({constructOnly:!0,nonNullable:!0})],i.prototype,"analysis",void 0),s([t()],i.prototype,"tool",void 0),s([t({readOnly:!0})],i.prototype,"results",null),s([t()],i.prototype,"selectedDimension",void 0),s([t()],i.prototype,"interactive",void 0),s([t()],i.prototype,"visible",void 0),i=s([r("esri.views.analysis.DimensionAnalysisView")],i),i};export{e as default};
