/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import"../geometry.js";import t from"../PopupTemplate.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/DictionaryRenderer.js";import"../renderers/DotDensityRenderer.js";import"../renderers/HeatmapRenderer.js";import"../renderers/PieChartRenderer.js";import"../renderers/Renderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import{read as r,r as s,w as o}from"../renderers/support/jsonUtils.js";import i from"../request.js";import{ClonableMixin as p}from"../core/Clonable.js";import n from"../core/Error.js";import{h as m}from"../chunks/handleUtils.js";import{clone as a}from"../core/lang.js";import{L as l}from"../chunks/Logger.js";import{M as u}from"../chunks/MultiOriginJSONSupport.js";import{debounce as c,throwIfAbortError as d}from"../core/promiseUtils.js";import{property as j}from"../core/accessorSupport/decorators/property.js";import{I as h}from"../chunks/ensureType.js";import{r as y}from"../chunks/reader.js";import{subclass as f}from"../core/accessorSupport/decorators/subclass.js";import{f as b}from"../chunks/typeUtils.js";import k from"./Layer.js";import{A as g}from"../chunks/ArcGISService.js";import{BlendLayer as S}from"./mixins/BlendLayer.js";import{CustomParametersMixin as v}from"./mixins/CustomParametersMixin.js";import{FeatureEffectLayer as I}from"./mixins/FeatureEffectLayer.js";import{FeatureReductionLayer as w}from"./mixins/FeatureReductionLayer.js";import{OperationalLayer as U}from"./mixins/OperationalLayer.js";import{PortalLayer as x}from"./mixins/PortalLayer.js";import{RefreshableLayer as R}from"./mixins/RefreshableLayer.js";import{ScaleRangeLayer as C}from"./mixins/ScaleRangeLayer.js";import{TemporalLayer as D}from"./mixins/TemporalLayer.js";import{l as P,a as L,m as F,c as T,p as V,s as M,u as A}from"../chunks/commonProperties2.js";import{b as E}from"../chunks/featureLayerUtils.js";import O from"./support/Field.js";import{d as _}from"../chunks/fieldProperties.js";import{fixRendererFields as N,fixTimeInfoFields as G}from"./support/fieldUtils.js";import B from"./support/LabelClass.js";import{r as q}from"../chunks/labelingInfo.js";import{JSONSupport as z}from"../core/JSONSupport.js";import"../chunks/typedArrayUtil.js";import{l as J}from"../chunks/styleUtils2.js";import Q from"../rest/support/Query.js";import{createPopupTemplate as W}from"../support/popupUtils.js";import{E as H}from"../chunks/ElevationInfo.js";import{S as $}from"../chunks/interfaces.js";import Z from"../geometry/SpatialReference.js";import K from"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../chunks/time.js";import"../config.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/Ellipsoid.js";import"../chunks/assets.js";import"../core/urlUtils.js";import"../kernel.js";import"../chunks/writer.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../geometry/support/jsonUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../core/sql.js";import"../intl.js";import"../chunks/messages.js";import"../chunks/arcadeOnDemand.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../symbols/support/jsonUtils.js";import"../chunks/layerUtils2.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../chunks/Version.js";import"./support/FieldsIndex.js";import"../chunks/UnknownTimeZone.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../chunks/vec4.js";import"../chunks/vec4f64.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/utils3.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"./support/FeatureEffect.js";import"./support/FeatureFilter.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/DataLayerSource.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/fieldType.js";import"../chunks/FullTextSearch.js";import"../chunks/QuantizationParameters.js";import"../rest/support/StatisticDefinition.js";import"./support/AggregateField.js";import"./support/ExpressionInfo.js";import"../chunks/layerContainerType.js";import"../chunks/FeatureReduction.js";import"./support/FeatureReductionBinning.js";import"../support/timeUtils.js";import"../chunks/unitConversionUtils.js";import"../chunks/featureQueryAll.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"../chunks/labelUtils.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"./support/FeatureReductionCluster.js";import"./support/FeatureReductionSelection.js";import"../chunks/clusterUtils.js";import"../chunks/MD5.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../TimeInterval.js";import"./support/TimeInfo.js";var X;let Y=X=class extends z{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new X({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};e([j({type:Number,json:{write:!0}})],Y.prototype,"age",void 0),e([j({type:Number,json:{write:!0}})],Y.prototype,"ageReceived",void 0),e([j({type:Number,json:{write:!0}})],Y.prototype,"displayCount",void 0),e([j({type:Number,json:{write:!0}})],Y.prototype,"maxObservations",void 0),Y=X=e([f("esri.layers.support.PurgeOptions")],Y);const ee=Y,te=_();function re(e,t){return new n("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}let se=class extends(w(I(S(D(C(R(g(U(x(u(v(p(k))))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new ee,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=Z.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=c((async(e,t,r)=>{const{save:s,saveAs:o}=await import("../chunks/streamLayerUtils.js");switch(e){case $.SAVE:return s(this,t);case $.SAVE_AS:return o(this,r,t)}}))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new n("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(d).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}set renderer(e){N(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,s){t=t.layerDefinition||t;const o=t.drawingInfo?.renderer;if(o){const e=r(o,t,s)||void 0;return e||l.getLogger(this).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:s}),e}return E(t,s)}async connect(e){const[{createConnection:t}]=await Promise.all([import("../chunks/createConnection.js"),this.load()]),r=this.geometryType?b.toJSON(this.geometryType):null,{customParameters:s=null,definitionExpression:o=null,geometryDefinition:i=null,maxReconnectionAttempts:p=0,maxReconnectionInterval:n=20,spatialReference:a=this.spatialReference}=e||this.createConnectionParameters(),l=t(this.parsedUrl,this.spatialReference,a,r,{geometry:i,where:o},p,n,s??void 0),u=m([this.on("send-message-to-socket",(e=>l.sendMessageToSocket(e))),this.on("send-message-to-client",(e=>l.sendMessageToClient(e)))]);return l.once("destroy",u.remove),l}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return W(this,e)}createQuery(){const e=new Q;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let r=null;return this.fields.some((t=>(t.name===e&&(r=t.domain),!!r))),r}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations($.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations($.SAVE_AS,t,e)}write(e,t){const r=t?.messages;return this.webSocketUrl?(r?.push(re(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,t):(r?.push(re(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:t}=await i(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}}else{if(!this.timeInfo?.trackIdField)throw new n("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const e=this.fields.find((e=>"oid"===e.type))?.name;if(!e)throw new n("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=e}if(!this.fields)throw new n("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some((e=>e.name===this.objectIdField))||this.fields.push(new O({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new n("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),N(this.renderer,this.fieldsIndex),G(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),J(this,{origin:"service"})}};e([j({type:String})],se.prototype,"copyright",void 0),e([j({readOnly:!0})],se.prototype,"defaultPopupTemplate",null),e([j({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],se.prototype,"definitionExpression",void 0),e([j({type:String})],se.prototype,"displayField",void 0),e([j({type:H})],se.prototype,"elevationInfo",void 0),e([j({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],se.prototype,"featureReduction",null),e([j(te.fields)],se.prototype,"fields",void 0),e([j(te.fieldsIndex)],se.prototype,"fieldsIndex",void 0),e([j({type:K,json:{name:"layerDefinition.definitionGeometry",write:!0}})],se.prototype,"geometryDefinition",void 0),e([j({type:b.apiValues,json:{read:{reader:b.read}}})],se.prototype,"geometryType",void 0),e([j(P)],se.prototype,"labelsVisible",void 0),e([j({type:[B],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:q},write:!0}})],se.prototype,"labelingInfo",void 0),e([j(L)],se.prototype,"legendEnabled",void 0),e([j({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],se.prototype,"listMode",void 0),e([j({type:h})],se.prototype,"maxReconnectionAttempts",void 0),e([j({type:h})],se.prototype,"maxReconnectionInterval",void 0),e([j(F)],se.prototype,"maxScale",void 0),e([j(T)],se.prototype,"minScale",void 0),e([j({type:String})],se.prototype,"objectIdField",void 0),e([j({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],se.prototype,"operationalLayerType",void 0),e([j({readOnly:!0})],se.prototype,"outFields",void 0),e([j(V)],se.prototype,"popupEnabled",void 0),e([j({type:t,json:{name:"popupInfo",write:!0}})],se.prototype,"popupTemplate",void 0),e([j({type:ee})],se.prototype,"purgeOptions",void 0),e([j({json:{read:!1,write:!1}})],se.prototype,"refreshInterval",void 0),e([j({types:s,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:o,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],se.prototype,"renderer",null),e([y("service","renderer",["drawingInfo.renderer","defaultSymbol"]),y("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],se.prototype,"readRenderer",null),e([j((()=>{const e=a(M);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],se.prototype,"screenSizePerspectiveEnabled",void 0),e([j()],se.prototype,"sourceJSON",void 0),e([j({type:Z,json:{origins:{service:{read:{source:"spatialReference"}}}}})],se.prototype,"spatialReference",void 0),e([j({json:{read:!1}})],se.prototype,"type",void 0),e([j(A)],se.prototype,"url",void 0),e([j({type:Number})],se.prototype,"updateInterval",void 0),e([j({json:{read:!1,write:!1}})],se.prototype,"useViewTime",void 0),e([j({type:String})],se.prototype,"webSocketUrl",void 0),se=e([f("esri.layers.StreamLayer")],se);const oe=se;export{oe as default};
