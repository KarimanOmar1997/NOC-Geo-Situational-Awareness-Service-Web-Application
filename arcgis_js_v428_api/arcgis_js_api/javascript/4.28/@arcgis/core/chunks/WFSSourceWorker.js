/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{c as t}from"./asyncUtils.js";import e from"../core/Error.js";import{L as r}from"./Logger.js";import{throwIfAborted as s,isAbortError as o}from"../core/promiseUtils.js";import{f as i}from"./unitUtils.js";import{c as a,i as p}from"./featureConversionUtils.js";import{F as m}from"./FeatureStore.js";import{c as n,p as l}from"./projectionSupport.js";import{Q as j}from"./QueryEngine.js";import{v as u,c}from"./geojson.js";import{m as y}from"./sourceUtils.js";import{getGetFeatureSpatialReference as g,getFeature as d}from"../layers/ogc/wfsUtils.js";import h from"../layers/support/FieldsIndex.js";import{u as f}from"./timeZoneUtils.js";import"./tslib.es6.js";import"../core/Accessor.js";import"./typedArrayUtil.js";import"../core/Handles.js";import"./maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"../core/lang.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"../config.js";import"../core/accessorSupport/decorators/property.js";import"./ObjectPool.js";import"./ObservableBase.js";import"../core/scheduling.js";import"./nextTick.js";import"./PooledArray.js";import"./time.js";import"./jsonMap.js";import"./Ellipsoid.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"./aaBoundingBox.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./Axis.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./OptimizedGeometry.js";import"../core/Evented.js";import"./BoundsStore.js";import"./PooledRBush.js";import"./quickselect.js";import"./_commonjsHelpers.js";import"./timeSupport.js";import"../geometry/projection.js";import"./SimpleObservable.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"../geometry.js";import"./typeUtils.js";import"./utils6.js";import"./utils7.js";import"./optimizedFeatureQueryEngineAdapter.js";import"./json.js";import"./MemCache.js";import"./LRUCache.js";import"../core/sql/WhereClause.js";import"./TimeOnly.js";import"./UnknownTimeZone.js";import"./datetime.js";import"./locale.js";import"./fieldType.js";import"./QueryEngineCapabilities.js";import"./quantizationUtils.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./messages.js";import"./arcadeOnDemand.js";import"./utils11.js";import"./screenUtils.js";import"./timeUtils.js";import"./heatmapUtils.js";import"./vec4.js";import"./vec4f64.js";import"./utils2.js";import"./basemapUtils.js";import"../Basemap.js";import"../core/Collection.js";import"./shared.js";import"./collectionUtils.js";import"../core/Loadable.js";import"../core/Promise.js";import"./loadAll.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../support/BasemapStyle.js";import"./writeUtils.js";import"./layerUtils2.js";import"./utils3.js";import"./colorUtils.js";import"./mat4.js";import"./generateRendererUtils.js";import"./enumeration.js";import"./SnappingCandidate.js";import"./Scheduler.js";import"../core/reactiveUtils.js";import"../core/signal.js";import"./debugFlags.js";import"./RenderState.js";import"./date2.js";import"./xmlUtils.js";import"./arcgisLayerUrl.js";import"./persistableUrlUtils.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";class _{constructor(){this._queryEngine=null,this._customParameters=null}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(t,r){const{getFeatureUrl:o,getFeatureOutputFormat:i,fields:a,geometryType:p,featureType:l,objectIdField:u,customParameters:c}=t,{spatialReference:y,getFeatureSpatialReference:d}=g(o,l,t.spatialReference);this._featureType=l,this._customParameters=c,this._getFeatureUrl=o,this._getFeatureOutputFormat=i,this._getFeatureSpatialReference=d;try{await n(d,y)}catch{throw new e("unsupported-projection","Projection not supported",{inSpatialReference:d,outSpatialReference:y})}s(r);const _=h.fromLayerJSON({fields:a,dateFieldsTimeReference:a.some((t=>"esriFieldTypeDate"===t.type))?{timeZoneIANA:f}:null}),F=await this._snapshotFeatures({fieldsIndex:_,geometryType:p,objectIdField:u,spatialReference:y},r.signal);return this._queryEngine=new j({fieldsIndex:_,geometryType:p,hasM:!1,hasZ:!1,objectIdField:u,spatialReference:y,timeInfo:null,featureStore:new m({geometryType:p,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(F),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new e("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(s){return this._customParameters=s,this._snapshotTask?.abort(),this._snapshotTask=t((t=>this._snapshotFeatures(this._queryEngine,t))),this._snapshotTask.promise.then((t=>{this._queryEngine.featureStore.clear(),t&&this._queryEngine.featureStore.addMany(t)}),(t=>{this._queryEngine.featureStore.clear(),o(t)||r.getLogger("esri.layers.WFSLayer").error(new e("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:t}))})),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures({objectIdField:t,geometryType:e,spatialReference:r,fieldsIndex:o},m){const n=await d(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:m});u(n,this._getFeatureSpatialReference.wkid),s(m);const j=c(n,{geometryType:e,hasZ:!1,objectIdField:t});if(!i(r,this._getFeatureSpatialReference))for(const t of j)null!=t.geometry&&(t.geometry=a(l(p(t.geometry,e,!1,!1),this._getFeatureSpatialReference,r)));let g=1;for(const e of j){const r={};y(o,r,e.attributes,!0),e.attributes=r,null==r[t]&&(e.objectId=r[t]=g++)}return j}}export{_ as default};
