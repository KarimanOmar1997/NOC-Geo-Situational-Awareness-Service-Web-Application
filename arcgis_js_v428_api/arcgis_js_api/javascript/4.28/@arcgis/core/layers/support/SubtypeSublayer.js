/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../PopupTemplate.js";import r from"../../renderers/ClassBreaksRenderer.js";import"../../renderers/DictionaryRenderer.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/PieChartRenderer.js";import o from"../../renderers/Renderer.js";import s from"../../renderers/SimpleRenderer.js";import i from"../../renderers/UniqueValueRenderer.js";import"../../renderers/support/jsonUtils.js";import{L as n}from"../../chunks/Logger.js";import{ClonableMixin as p}from"../../core/Clonable.js";import"../../chunks/typedArrayUtil.js";import l from"../../core/Error.js";import{IdentifiableMixin as a}from"../../core/Identifiable.js";import{clone as m}from"../../core/lang.js";import u from"../../core/Loadable.js";import{M as d}from"../../chunks/MultiOriginJSONSupport.js";import{s as c}from"../../config.js";import{sqlAnd as y}from"../../core/sql.js";import{property as j}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import{r as h}from"../../chunks/reader.js";import{d as b,subclass as f}from"../../core/accessorSupport/decorators/subclass.js";import{w as g}from"../../chunks/writer.js";import{O as k}from"../../core/Accessor.js";import v from"../../form/FormTemplate.js";import{l as S,a as I,c as w,m as C,p as O}from"../../chunks/commonProperties2.js";import{h as F}from"../../chunks/featureLayerUtils.js";import U from"./FeatureTemplate.js";import{d as D}from"../../chunks/fieldProperties.js";import{fixRendererFields as T}from"./fieldUtils.js";import E from"./LabelClass.js";import{r as x}from"../../chunks/labelingInfo.js";import P from"../../rest/support/Query.js";import{createPopupTemplate as V}from"../../support/popupUtils.js";import{a as L,b as R,c as A}from"../../chunks/defaults.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/handleUtils.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/utils.js";import"../../chunks/metadata.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../core/JSONSupport.js";import"../../core/accessorSupport/decorators/cast.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/jsonMap.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../intl.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../core/Promise.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../chunks/LegendOptions.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/layerUtils2.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../chunks/DictionaryLoader.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../chunks/Version.js";import"./FieldsIndex.js";import"../../chunks/UnknownTimeZone.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils.js";import"../../form/ExpressionInfo.js";import"../../form/elements/GroupElement.js";import"../../form/elements/Element.js";import"../../form/support/elements.js";import"../../form/elements/FieldElement.js";import"../../form/elements/support/inputs.js";import"../../form/elements/inputs/BarcodeScannerInput.js";import"../../form/elements/inputs/TextInput.js";import"../../form/elements/inputs/Input.js";import"../../form/elements/inputs/ComboBoxInput.js";import"../../form/elements/inputs/DatePickerInput.js";import"../../form/elements/inputs/DateTimeOffsetPickerInput.js";import"../../form/elements/inputs/DateTimePickerInput.js";import"../../form/elements/inputs/RadioButtonsInput.js";import"../../form/elements/inputs/SwitchInput.js";import"../../form/elements/inputs/TextAreaInput.js";import"../../form/elements/inputs/TextBoxInput.js";import"../../form/elements/inputs/TimePickerInput.js";import"../../chunks/domains.js";import"./CodedValueDomain.js";import"./Domain.js";import"./InheritedDomain.js";import"./RangeDomain.js";import"../../form/elements/RelationshipElement.js";import"../../TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/layerContainerType.js";import"../../support/timeUtils.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/featureQueryAll.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/RelationshipQuery.js";import"../../chunks/DataLayerSource.js";import"./Field.js";import"../../chunks/fieldType.js";import"../../chunks/labelUtils.js";import"../../chunks/defaultsJSON.js";import"../../chunks/FullTextSearch.js";import"../../chunks/QuantizationParameters.js";import"../../rest/support/StatisticDefinition.js";const M=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],q={key:"type",base:o,errorContext:"renderer",typeMap:{simple:s,"unique-value":i,"class-breaks":r}},B=D(),G=b({types:q});let N=0;function Q(e){const t=e.json.write;return"object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function $(e){switch(e){case"point":case"multipoint":return A.clone();case"polyline":return R.clone();case"polygon":case"multipatch":return L.clone();default:return null}}function H(e,t){return null==e?null:t.subtypes?.find((t=>t.code===e))}function _(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const o={},s=H(e,t);if(null!=s){const{defaultValues:e}=s;for(const t in e)o[t]=e[t]}return o[t.subtypeField]=e,new U({name:"New Feature",drawingTool:r,prototype:{attributes:o}})}const z="esri.layers.support.SubtypeSublayer";let J=class extends(d(p(a(u)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${N++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}writeFieldOverrides(e,t,r){const{fields:o,parent:s}=this;let i;if(o){i=[];let e=0;o.forEach((({name:t,alias:r,editable:o,visible:n})=>{if(!n)return;const p=s?.fields?.find((e=>e.name===t));if(!p)return;const l={name:t};let a=!1;r!==p.alias&&(l.alias=r,a=!0),o!==p.editable&&(l.editable=o,a=!0),i.push(l),a&&e++})),0===e&&i.length===o.length&&(i=null)}else i=m(e);i?.length&&c(r,i,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,o=e?.fields;if(!e||!o?.length)return null;const{subtypes:s,subtypeField:i}=e,n=s?.find((e=>e.code===r)),p=n?.defaultValues,l=n?.domains,a=[];for(const e of o){const o=e.clone(),{name:s}=o,n=t?.find((e=>e.name===s));if(o.visible=!t||!!n,n){const{alias:e,editable:t}=n;e&&(o.alias=e),!1===t&&(o.editable=!1)}const m=p?.[s]??null;o.defaultValue=s===i?r:m;const u=l?.[s]??null;o.domain=s===i?null:u?"inherited"===u.type?o.domain:u.clone():null,a.push(o)}return a}get floorInfo(){return this.parent?.floorInfo}get geometryType(){return this.parent?.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){return this.parent||n.getLogger(z).error(Z("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){T(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?(t=e.geometryType,new s({symbol:$(t)})):null;var t}readRendererFromService(e,t,r){if("Table"===t.type)return null;const o=t.drawingInfo?.renderer,i=G(o,t,r);let n;const{subtypeCode:p}=this;if(null!=p&&function(e,t){return!(!t||"unique-value"!==e?.type||"string"!=typeof e.field||e.field.toLowerCase()!==t.toLowerCase()||e.field2||e.field3||e.valueExpression)}(i,t.subtypeField)){const e=i.uniqueValueInfos?.find((({value:e})=>(e="number"==typeof e?String(e):e)===String(p)));e&&(n=new s({symbol:e.symbol}))}else"simple"!==i?.type||i.visualVariables?.length||(n=i);return n}readRenderer(e,t,r){const o=t?.layerDefinition?.drawingInfo?.renderer;if(!o)return;const s=o.visualVariables?.some((e=>"rotationInfo"!==e.type));return s?void 0:G(o,t,r)||void 0}get spatialReference(){return this.parent?.spatialReference}readTemplatesFromService(e,t){return[_(this.subtypeCode,t)]}readTitleFromService(e,t){const r=H(this.subtypeCode,t);return null!=r?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return!!this.parent?.userHasUpdateItemPrivileges}async addAttachment(e,t){const{parent:r}=this;if(!r)throw Z("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new l("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:o}=this;if(!o)throw Z("updateAttachment");if(e.getAttribute(o.subtypeField)!==this.subtypeCode)throw new l("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return o.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw Z("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new l("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw Z("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:o,title:s}=this;if(r){const{displayField:e,editFieldsInfo:i,objectIdField:n}=r;t={displayField:e,editFieldsInfo:i,fields:o,objectIdField:n,title:s}}return V(t,e)}createQuery(){if(!this.parent)throw Z("createQuery");const e=F(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=y(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return M.some((e=>this.originIdOf(e)===k.USER))}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw Z("queryAttachments");const o=e.clone();return o.where=W(o.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw Z("queryFeatures");const o=P.from(e)??r.createQuery();return null!=e&&(o.where=W(o.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(o,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};e([j({readOnly:!0,json:{read:!1}})],J.prototype,"capabilities",null),e([j({readOnly:!0,json:{read:!1}})],J.prototype,"effectiveCapabilities",null),e([j({json:{write:{ignoreOrigin:!0}}})],J.prototype,"charts",void 0),e([j({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],J.prototype,"editingEnabled",void 0),e([j({type:Boolean,readOnly:!0})],J.prototype,"effectiveEditingEnabled",null),e([j({readOnly:!0,json:{read:!1}})],J.prototype,"elevationInfo",null),e([j({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],J.prototype,"fieldOverrides",void 0),e([g("fieldOverrides")],J.prototype,"writeFieldOverrides",null),e([j({...B.fields,readOnly:!0,json:{read:!1}})],J.prototype,"fields",null),e([j(B.fieldsIndex)],J.prototype,"fieldsIndex",void 0),e([j({readOnly:!0,json:{read:!1}})],J.prototype,"floorInfo",null),e([j({type:v,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],J.prototype,"formTemplate",void 0),e([j({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],J.prototype,"id",void 0),e([j({readOnly:!0,json:{read:!1}})],J.prototype,"geometryType",null),e([j({readOnly:!0,json:{read:!1}})],J.prototype,"type",void 0),e([j(Q(m(S)))],J.prototype,"labelsVisible",void 0),e([j({type:[E],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:x},write:{ignoreOrigin:!0}}})],J.prototype,"labelingInfo",void 0),e([j({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],J.prototype,"layerType",void 0),e([j(Q(m(I)))],J.prototype,"legendEnabled",void 0),e([j({type:["show","hide"]})],J.prototype,"listMode",void 0),e([j((()=>{const e=m(w);return e.json.origins.service.read=!1,Q(e)})())],J.prototype,"minScale",void 0),e([j((()=>{const e=m(C);return e.json.origins.service.read=!1,Q(e)})())],J.prototype,"maxScale",void 0),e([j({readOnly:!0})],J.prototype,"effectiveScaleRange",null),e([j({readOnly:!0,json:{read:!1}})],J.prototype,"objectIdField",null),e([j({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],J.prototype,"opacity",void 0),e([j({clonable:!1})],J.prototype,"parent",void 0),e([j(Q(m(O)))],J.prototype,"popupEnabled",void 0),e([j({type:t,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],J.prototype,"popupTemplate",void 0),e([j({readOnly:!0})],J.prototype,"defaultPopupTemplate",null),e([j({types:q,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],J.prototype,"renderer",null),e([h("service","renderer",["drawingInfo.renderer","subtypeField","type"])],J.prototype,"readRendererFromService",null),e([h("renderer",["layerDefinition.drawingInfo.renderer"])],J.prototype,"readRenderer",null),e([j({readOnly:!0,json:{read:!1}})],J.prototype,"spatialReference",null),e([j({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],J.prototype,"subtypeCode",void 0),e([j({type:[U],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],J.prototype,"templates",void 0),e([h("service","templates",["geometryType","subtypeField","subtypes","type"])],J.prototype,"readTemplatesFromService",null),e([j({type:String,json:{write:{ignoreOrigin:!0}}})],J.prototype,"title",void 0),e([h("service","title",["subtypes"])],J.prototype,"readTitleFromService",null),e([j({readOnly:!0,json:{read:!1}})],J.prototype,"url",null),e([j({readOnly:!0})],J.prototype,"userHasUpdateItemPrivileges",null),e([j({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],J.prototype,"visible",void 0),J=e([f(z)],J);const W=(e,t,r)=>{const o=new RegExp(`${t}\\s*=\\s*\\d+`),s=`${t}=${r}`,i=e??"";return o.test(i)?i.replace(o,s):y(s,i)},Z=e=>new l(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),K=J;export{K as default};
