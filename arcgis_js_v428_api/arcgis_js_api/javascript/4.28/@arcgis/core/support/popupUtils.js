/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import t from"../PopupTemplate.js";import{isFieldEditable as o,isRasterPixelValueField as e,getDisplayFieldName as s,isFieldVisibleByDefault as i}from"../layers/support/fieldUtils.js";import r from"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import n from"../popup/content/FieldsContent.js";import"../popup/content/MediaContent.js";import"../popup/content/RelationshipContent.js";import"../popup/content/TextContent.js";import p from"../popup/FieldInfo.js";import m from"../popup/support/FieldInfoFormat.js";import"../chunks/tslib.es6.js";import"../core/Clonable.js";import"../core/Accessor.js";import"../chunks/typedArrayUtil.js";import"../core/Handles.js";import"../chunks/Logger.js";import"../config.js";import"../core/lang.js";import"../chunks/maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/tracking.js";import"../chunks/ensureType.js";import"../core/Error.js";import"../core/accessorSupport/decorators/property.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../core/promiseUtils.js";import"../chunks/time.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/JSONSupport.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../popup/content.js";import"../popup/ElementExpressionInfo.js";import"../chunks/jsonMap.js";import"../chunks/enumeration.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"./actions/ActionBase.js";import"../core/Identifiable.js";import"./actions/ActionButton.js";import"./actions/ActionToggle.js";import"../core/sql.js";import"../intl.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";function c({displayField:o,editFieldsInfo:e,fields:i,objectIdField:p,title:m},c){if(!i)return null;const a=d({editFieldsInfo:e,fields:i,objectIdField:p},c);if(!a.length)return null;const l=function(t){const o=s(t),{titleBase:e}=t;return o?`${e}: {${o.trim()}}`:e??""}({titleBase:m,fields:i,displayField:o}),u=[new n,new r];return new t({title:l,content:u,fieldInfos:a})}function a(o){const{fields:e,featureReduction:s,title:i}=o,r=s.fields;if(!r)return null;const m=function(t,o){return t.map((t=>new p({fieldName:t.name,isEditable:!1,label:t.alias,format:f(t,o),visible:!0})))}(r,e??[]);if(!m.length)return null;const c=[new n];return new t({title:i,content:c,fieldInfos:m})}const l=(t,o)=>o.visibleFieldNames?o.visibleFieldNames.has(t.name):i(t,o);function u(t,o){return"oid"===t.type?-1:"oid"===o.type?1:k(t)?-1:k(o)?1:(t.alias||t.name).toLocaleLowerCase().localeCompare((o.alias||o.name).toLocaleLowerCase())}function j(t,o){return new n({fieldInfos:d(t,o).filter((t=>t.visible))})}function d(t,e){const s=e?.visibleFieldNames;return function(t,o){const e=t;return o&&(t=t.filter((t=>!o.includes(t.type)))),t===e&&(t=t.slice()),t.sort(u),t}(t.fields??[],e?.ignoreFieldTypes||g).map((e=>new p({fieldName:e.name,isEditable:o(e,t),label:e.alias,format:h(e),visible:l(e,{...t,visibleFieldNames:s})})))}function f(t,o){const{onStatisticField:e,onStatisticExpression:s,statisticType:i}=t;if(e){const t=o.find((t=>e===t.name));if(t)return h(t)}return"number"===s?.returnType?new m({digitSeparator:!0,places:2}):"count"===i?new m({digitSeparator:!0,places:0}):null}function h(t){switch(t.type){case"small-integer":case"integer":case"single":return new m({digitSeparator:!0,places:0});case"double":return new m({digitSeparator:!0,places:2});case"string":return e(t.name)?new m({digitSeparator:!0,places:0}):null;default:return null}}function k(t){return"name"===(t.name&&t.name.toLowerCase())||"name"===(t.alias&&t.alias.toLowerCase())}const g=["geometry","blob","raster","guid","xml"];export{d as createFieldInfos,j as createFieldsContent,c as createPopupTemplate,a as createPopupTemplateForFeatureReduction};
