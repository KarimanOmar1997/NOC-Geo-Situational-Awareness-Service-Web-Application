/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{geometryTypes as r}from"../../geometry.js";import e from"../../TimeExtent.js";import{d as s}from"../../core/Accessor.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{clone as i}from"../../core/lang.js";import{L as n}from"../../chunks/Logger.js";import{property as m}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import{w as c}from"../../chunks/writer.js";import{getJsonType as u,fromJSON as a}from"../../geometry/support/jsonUtils.js";import l from"../../layers/support/MosaicRule.js";import j from"../../layers/support/RasterFunction.js";import h from"../../geometry/Point.js";import"../../geometry/Extent.js";import"../../chunks/typedArrayUtil.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../config.js";import"../../chunks/Ellipsoid.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/Error.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/tracking.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";import"../../geometry/support/webMercatorUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/timeUtils.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../layers/support/DimensionalDefinition.js";import"../../chunks/enumeration.js";var y;let g=y=class extends o{constructor(){super(...arguments),this.geometry=null,this.mosaicRule=null,this.rasterFunction=null,this.pixelSize=null,this.raster=void 0,this.timeExtent=null}writeGeometry(t,r,e){null!=t&&(r.geometryType=u(t),r[e]=t.toJSON())}get renderingRule(){return s(n.getLogger(this),"renderingRule",{replacement:"rasterFunction",version:"4.27",warnOnce:!0}),this._get("rasterFunction")}set renderingRule(t){s(n.getLogger(this),"renderingRule",{replacement:"rasterFunction",version:"4.27",warnOnce:!0}),this._set("rasterFunction",t)}clone(){return new y(i({geometry:this.geometry,mosaicRule:this.mosaicRule,rasterFunction:this.rasterFunction,pixelSize:this.pixelSize,raster:this.raster,timeExtent:this.timeExtent}))}};t([m({types:r,json:{read:a}})],g.prototype,"geometry",void 0),t([c("geometry")],g.prototype,"writeGeometry",null),t([m({type:l,json:{write:!0}})],g.prototype,"mosaicRule",void 0),t([m({type:j})],g.prototype,"renderingRule",null),t([m({type:j,json:{write:!0,name:"renderingRule"}})],g.prototype,"rasterFunction",void 0),t([m({type:h,json:{write:!0}})],g.prototype,"pixelSize",void 0),t([m({json:{write:!0}})],g.prototype,"raster",void 0),t([m({type:e,json:{read:{source:"time"},write:{target:"time"}}})],g.prototype,"timeExtent",void 0),g=y=t([p("esri.rest.support.ImageHistogramParameters")],g);const k=g;export{k as default};