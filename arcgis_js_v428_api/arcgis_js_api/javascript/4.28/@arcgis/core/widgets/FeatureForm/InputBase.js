/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../core/Accessor.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/time.js";let i=class extends e{constructor(t){super(t),this.element=null,this.feature=null,this.layer=null,this.timeZone=null,this.type=null,this.visibilityExpressionExecutor=null}get description(){return this.element?.description}get evaluatedVisibilityExpression(){const{visibilityExpressionExecutor:t}=this;return null!=t?!!t.lastEvaluatedValue:null}get label(){return this.element?.label}get visible(){return null!=this.evaluatedVisibilityExpression?this.evaluatedVisibilityExpression:null!=this.element}};t([s({readOnly:!0})],i.prototype,"description",null),t([s({constructOnly:!0})],i.prototype,"element",void 0),t([s()],i.prototype,"evaluatedVisibilityExpression",null),t([s()],i.prototype,"feature",void 0),t([s()],i.prototype,"label",null),t([s()],i.prototype,"layer",void 0),t([s()],i.prototype,"timeZone",void 0),t([s()],i.prototype,"type",void 0),t([s()],i.prototype,"visible",null),t([s()],i.prototype,"visibilityExpressionExecutor",void 0),i=t([r("esri.widgets.FeatureForm.InputBase")],i);const o=i;export{o as default};