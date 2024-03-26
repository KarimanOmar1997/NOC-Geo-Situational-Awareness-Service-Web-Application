/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{e as o}from"../../chunks/enumeration.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import s from"./DeviceLocationFeed.js";import i from"./FeatureFenceParameters.js";import n from"./Geotrigger.js";import p from"./GeotriggerNotificationOptions.js";import{J as c}from"../../chunks/jsonMap.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/Clonable.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";import"../../core/JSONSupport.js";import"./ExpressionInfo.js";import"./FeatureFilter.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/Ellipsoid.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"./FeatureLayerSource.js";const m=new c({enterContainsAndExitDoesNotContain:"enter-contains-and-exit-does-not-contain",enterContainsAndExitDoesNotIntersect:"enter-contains-and-exit-does-not-intersect",enterIntersectsAndExitDoesNotIntersect:"enter-intersects-and-exit-does-not-intersect"}),a=new c({useGeometry:"use-geometry",useGeometryWithAccuracy:"use-geometry-with-accuracy"}),u=new c({enter:"enter",enterOrExit:"enter-or-exit",exit:"exit"});let j=class extends n{constructor(e){super(e),this.enterExitRule="enter-contains-and-exit-does-not-intersect",this.feed=null,this.feedAccuracyMode="use-geometry",this.fenceNotificationRule=null,this.fenceParameters=null,this.name=null,this.notificationOptions=null,this.type="fence"}};e([o(m)],j.prototype,"enterExitRule",void 0),e([t({type:s,json:{write:{isRequired:!0}}})],j.prototype,"feed",void 0),e([o(a)],j.prototype,"feedAccuracyMode",void 0),e([t({type:u.apiValues,json:{type:u.jsonValues,read:u.read,write:{writer:u.write,isRequired:!0}}})],j.prototype,"fenceNotificationRule",void 0),e([t({type:i,json:{write:{isRequired:!0}}})],j.prototype,"fenceParameters",void 0),e([t({type:String,json:{write:!0}})],j.prototype,"name",void 0),e([t({type:p,json:{write:!0}})],j.prototype,"notificationOptions",void 0),e([o({fence:"fence"},{readOnly:!0})],j.prototype,"type",void 0),j=e([r("esri.webdoc.geotriggersInfo.FenceGeotrigger")],j);const l=j;export{l as default};
