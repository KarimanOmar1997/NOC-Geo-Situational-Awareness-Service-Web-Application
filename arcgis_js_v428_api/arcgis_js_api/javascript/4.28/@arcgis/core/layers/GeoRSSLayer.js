/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import s from"../config.js";import t from"../request.js";import"../symbols.js";import{M as r}from"../chunks/MultiOriginJSONSupport.js";import{throwIfAbortError as e}from"../core/promiseUtils.js";import{getFilename as i}from"../core/urlUtils.js";import{property as m}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{r as l}from"../chunks/reader.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import n from"../geometry/Extent.js";import{i as a}from"../chunks/unitUtils.js";import y from"./Layer.js";import{BlendLayer as c}from"./mixins/BlendLayer.js";import{OperationalLayer as j}from"./mixins/OperationalLayer.js";import{PortalLayer as u}from"./mixins/PortalLayer.js";import{RefreshableLayer as h}from"./mixins/RefreshableLayer.js";import{ScaleRangeLayer as b}from"./mixins/ScaleRangeLayer.js";import{i as k,a as S,u as d}from"../chunks/commonProperties2.js";import g from"../symbols/Symbol.js";import f from"../symbols/SimpleLineSymbol.js";import v from"../symbols/PictureMarkerSymbol.js";import P from"../symbols/SimpleMarkerSymbol.js";import U from"../symbols/SimpleFillSymbol.js";import"../core/lang.js";import"../kernel.js";import"../core/Error.js";import"../chunks/Logger.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../chunks/time.js";import"../symbols/CIMSymbol.js";import"../chunks/enumeration.js";import"../chunks/jsonMap.js";import"../chunks/writer.js";import"./support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/messages.js";import"../chunks/assets.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/Ellipsoid.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../Color.js";import"../chunks/colorUtils.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../core/Clonable.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../core/Identifiable.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/utils3.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../chunks/layerContainerType.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/layerUtils2.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";const D=["atom","xml"],L={base:g,key:"type",typeMap:{"simple-line":f},errorContext:"symbol"},x={base:g,key:"type",typeMap:{"picture-marker":v,"simple-marker":P},errorContext:"symbol"},C={base:g,key:"type",typeMap:{"simple-fill":U},errorContext:"symbol"};let M=class extends(c(h(j(u(b(r(y))))))){constructor(...o){super(...o),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(o,s){return"string"==typeof o?{url:o,...s}:o}readFeatureCollections(o,s){return s.featureCollection.layers.forEach((o=>{const s=o.layerDefinition.drawingInfo.renderer.symbol;s&&"esriSFS"===s.type&&s.outline?.style.includes("esriSFS")&&(s.outline.style="esriSLSSolid")})),s.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const o=this._get("title");return o&&"defaults"!==this.originOf("title")?o:this.url?i(this.url,D)||"GeoRSS":o||""}set title(o){this._set("title",o)}load(o){const s=null!=o?o.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},o).catch(e).then((()=>this._fetchService(s))).then((o=>{this.read(o,{origin:"service"})}))),Promise.resolve(this)}async hasDataChanged(){const o=await this._fetchService();return this.read(o,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(o){const r=this.spatialReference,{data:e}=await t(s.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:a(r)?void 0:r.wkid??JSON.stringify(r)},signal:o});return e}_hasGeometry(o){return this.featureCollections?.some((s=>s.featureSet?.geometryType===o&&s.featureSet.features?.length>0))??!1}};o([m()],M.prototype,"description",void 0),o([m()],M.prototype,"featureCollections",void 0),o([l("service","featureCollections",["featureCollection.layers"])],M.prototype,"readFeatureCollections",null),o([m({type:n,json:{name:"lookAtExtent"}})],M.prototype,"fullExtent",void 0),o([m(k)],M.prototype,"id",void 0),o([m(S)],M.prototype,"legendEnabled",void 0),o([m({types:L,json:{write:!0}})],M.prototype,"lineSymbol",void 0),o([m({type:["show","hide"]})],M.prototype,"listMode",void 0),o([m({types:x,json:{write:!0}})],M.prototype,"pointSymbol",void 0),o([m({types:C,json:{write:!0}})],M.prototype,"polygonSymbol",void 0),o([m({type:["GeoRSS"]})],M.prototype,"operationalLayerType",void 0),o([m(d)],M.prototype,"url",void 0),o([m({json:{origins:{service:{read:{source:"name",reader:o=>o||void 0}}}}})],M.prototype,"title",null),o([m({readOnly:!0,json:{read:!1},value:"geo-rss"})],M.prototype,"type",void 0),M=o([p("esri.layers.GeoRSSLayer")],M);const E=M;export{E as default};