/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import s from"../../TimeExtent.js";import e,{t as o}from"../../TimeInterval.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{r as i}from"../../chunks/reader.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import{fixTimeInfoFields as p}from"../support/fieldUtils.js";import n from"../support/TimeInfo.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/time.js";import"../../chunks/timeUtils.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/writer.js";import"../../core/Clonable.js";import"../../chunks/enumeration.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";const c=c=>{let j=class extends c{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(t,s){const r=s.timeInfo.exportOptions;if(!r)return null;const i=r.timeOffset,m=o.fromJSON(r.timeOffsetUnits);return i&&m?new e({value:i,unit:m}):null}set timeInfo(t){p(t,this.fieldsIndex),this._set("timeInfo",t)}};return t([r({type:s,json:{write:!1}})],j.prototype,"timeExtent",void 0),t([r({type:e})],j.prototype,"timeOffset",void 0),t([i("service","timeOffset",["timeInfo.exportOptions"])],j.prototype,"readOffset",null),t([r({value:null,type:n,json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],j.prototype,"timeInfo",null),t([r({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],j.prototype,"useViewTime",void 0),j=t([m("esri.layers.mixins.TemporalLayer")],j),j};export{c as TemporalLayer};
