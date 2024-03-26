/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../TimeExtent.js";import s from"../../core/Accessor.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import i from"../../geometry/Extent.js";import p from"../../geometry/SpatialReference.js";import{U as n}from"../../chunks/unitUtils.js";import{JSONSupport as m}from"../../core/JSONSupport.js";import{s as l,k as a}from"../../chunks/layerUtils2.js";import"../../chunks/timeUtils.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/locale.js";import"../../chunks/handleUtils.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/time.js";import"../../geometry/Geometry.js";import"../../chunks/Ellipsoid.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";let c=class extends m{};t([o({type:Boolean,json:{write:!0}})],c.prototype,"timeDataCumulative",void 0),t([o({type:Number,json:{write:!0}})],c.prototype,"timeOffset",void 0),t([o({type:String,json:{write:!0}})],c.prototype,"timeOffsetUnits",void 0),t([o({type:Boolean,json:{write:!0}})],c.prototype,"useTime",void 0),c=t([r("esri.layers.support.LayerTimeOptions")],c);const h=c;let u=class extends s{constructor(t){super(t),this.extent=null,this.width=null,this.height=null,this.dpi=null,this.format=null,this.imageSpatialReference=null,this.layerDefinitions=[],this.layerOption=null,this.layerIds=null,this.transparent=!0,this.timeExtent=null,this.layerTimeOptions=null}toJSON(){let t,e=this.extent;if(e=e&&e.clone()._normalize(!0),this.timeExtent){const e=this.timeExtent.toJSON(),{start:s,end:o}=e;null==s&&null==o||(t=s===o?""+s:`${s??"null"},${o??"null"}`)}const s=this.layerOption,o=n(e?.spatialReference),r=this.imageSpatialReference,i={dpi:this.dpi,format:this.format,transparent:this.transparent,size:null!==this.width&&null!==this.height?this.width+","+this.height:null,bbox:e?e.xmin+","+e.ymin+","+e.xmax+","+e.ymax:null,bboxSR:o,layers:s?s+":"+(this.layerIds??[]).join(","):null,layerDefs:l(this.layerDefinitions),layerTimeOptions:a(this.layerTimeOptions??[]),imageSR:r?n(r):o,time:t},p={};return Object.keys(i).filter((t=>null!=i[t])).forEach((t=>p[t]=i[t])),p}};t([o({type:i})],u.prototype,"extent",void 0),t([o()],u.prototype,"width",void 0),t([o()],u.prototype,"height",void 0),t([o()],u.prototype,"dpi",void 0),t([o()],u.prototype,"format",void 0),t([o({type:p})],u.prototype,"imageSpatialReference",void 0),t([o()],u.prototype,"layerDefinitions",void 0),t([o()],u.prototype,"layerOption",void 0),t([o()],u.prototype,"layerIds",void 0),t([o()],u.prototype,"transparent",void 0),t([o({type:e})],u.prototype,"timeExtent",void 0),t([o({type:[h]})],u.prototype,"layerTimeOptions",void 0),u=t([r("esri.rest.support.ImageParameters")],u);const y=u;export{y as default};
