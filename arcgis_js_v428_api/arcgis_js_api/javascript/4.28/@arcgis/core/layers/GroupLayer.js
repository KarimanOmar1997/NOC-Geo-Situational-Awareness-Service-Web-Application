/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{C as e}from"../chunks/CollectionFlattener.js";import{l as s}from"../chunks/loadAll.js";import{L as r}from"../chunks/Logger.js";import{M as i}from"../chunks/MultiOriginJSONSupport.js";import{debounce as o,throwIfAbortError as a}from"../core/promiseUtils.js";import{watch as l,syncAndInitial as n,on as p,sync as m}from"../core/reactiveUtils.js";import{property as c}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{g as h}from"../chunks/utils.js";import{r as u}from"../chunks/reader.js";import{subclass as y}from"../core/accessorSupport/decorators/subclass.js";import{w as d}from"../chunks/writer.js";import{O as j}from"../core/Accessor.js";import b from"./Layer.js";import{BlendLayer as k}from"./mixins/BlendLayer.js";import{OperationalLayer as v}from"./mixins/OperationalLayer.js";import{PortalLayer as f}from"./mixins/PortalLayer.js";import{ScaleRangeLayer as g}from"./mixins/ScaleRangeLayer.js";import{l as U}from"../chunks/lazyLayerLoader.js";import L from"../portal/PortalItem.js";import{c as w}from"../chunks/collectionUtils2.js";import{LayersMixin as P}from"../support/LayersMixin.js";import{TablesMixin as O}from"../support/TablesMixin.js";import{W as S}from"../chunks/tagSymbols.js";import{S as I}from"../chunks/interfaces.js";import{b as _}from"../chunks/saveUtils.js";import{g as x}from"../chunks/writeUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/handleUtils.js";import"../core/Handles.js";import"../config.js";import"../core/lang.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../chunks/time.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/asyncUtils.js";import"../core/Loadable.js";import"../core/Promise.js";import"../core/JSONSupport.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/Ellipsoid.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../core/Identifiable.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/colorUtils.js";import"../chunks/utils3.js";import"../chunks/screenUtils.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../chunks/layerContainerType.js";import"../chunks/commonProperties2.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/persistableUrlUtils.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"./support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"../chunks/messages.js";import"../chunks/arcadeOnDemand.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/opacityUtils.js";import"../chunks/layerUtils2.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/collectionUtils.js";import"../chunks/uuid.js";import"../chunks/resourceUtils.js";let M=class extends(k(g(v(f(O(P(i(b)))))))){constructor(t){super(t),this.allLayers=new e({getCollections:()=>[this.layers],getChildrenFunction:t=>"layers"in t?t.layers:null}),this.allTables=w(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=o((async(t,e,s)=>{const{save:r,saveAs:i}=await import("../chunks/groupLayerUtils.js");switch(t){case I.SAVE:return r(this,e);case I.SAVE_AS:return i(this,s,e)}}))}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([l((()=>{let t=this.parent;for(;t&&"parent"in t&&t.parent;)t=t.parent;return t&&S in t}),(t=>{const e="prevent-adding-tables";this.removeHandles(e),t&&(this.tables.removeAll(),this.addHandles(p((()=>this.tables),"before-add",(t=>{t.preventDefault(),r.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")})),e))}),n),l((()=>this.visible),this._onVisibilityChange.bind(this),m)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===j.USER}_writeLayers(t,e,s,r){const i=[];if(!t)return i;t.forEach((t=>{const e=x(t,r.webmap?r.webmap.getLayerJSONFromResourceInfo(t):null,r);e?.layerType&&i.push(e)})),e.layers=i}set portalItem(t){this._set("portalItem",t)}readPortalItem(t,e,s){const{itemId:r,layerType:i}=e;if("GroupLayer"===i&&r)return new L({id:r,portal:s?.portal})}writePortalItem(t,e){t?.id&&(e.itemId=t.id)}set visibilityMode(t){const e=this._get("visibilityMode")!==t;this._set("visibilityMode",t),e&&this._enforceVisibility(t,this.visible)}async beforeSave(){return _(this)}load(t){const e=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:U},t).catch((t=>{if(a(t),this.sourceIsPortalItem)throw t}));return this.addResolvingPromise(e),Promise.resolve(this)}async loadAll(){return s(this,(t=>{t(this.layers,this.tables)}))}async save(t){return this._debouncedSaveOperations(I.SAVE,t)}async saveAs(t,e){return this._debouncedSaveOperations(I.SAVE_AS,e,t)}layerAdded(t){t.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(t):"inherited"===this.visibilityMode&&(t.visible=this.visible),this.hasHandles(t.uid)?console.error(`Layer readded to Grouplayer: uid=${t.uid}`):this.addHandles(l((()=>t.visible),(e=>this._onChildVisibilityChange(t,e)),m),t.uid)}layerRemoved(t){this.removeHandles(t.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(t){this.layers.forEach((e=>{e!==t&&(e.visible=!1)}))}_enforceVisibility(t,e){if(!h(this).initialized)return;const s=this.layers;let r=s.find((t=>t.visible));switch(t){case"exclusive":s.length&&!r&&(r=s.at(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":s.forEach((t=>{t.visible=e}))}}_onVisibilityChange(t){"inherited"===this.visibilityMode&&this.layers.forEach((e=>{e.visible=t}))}_onChildVisibilityChange(t,e){switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(t):this._isAnyLayerVisible()||(t.visible=!0);break;case"inherited":t.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((t=>t.visible))}};t([c({readOnly:!0,dependsOn:[]})],M.prototype,"allLayers",void 0),t([c({readOnly:!0})],M.prototype,"allTables",void 0),t([c({json:{read:!0,write:!0}})],M.prototype,"blendMode",void 0),t([c()],M.prototype,"fullExtent",void 0),t([c({readOnly:!0})],M.prototype,"sourceIsPortalItem",null),t([c({json:{read:!1,write:{ignoreOrigin:!0}}})],M.prototype,"layers",void 0),t([d("layers")],M.prototype,"_writeLayers",null),t([c({type:["GroupLayer"]})],M.prototype,"operationalLayerType",void 0),t([c({json:{origins:{"web-map":{read:!1,write:{overridePolicy(t,e,s){return{enabled:"Group Layer"===t?.type&&s?.initiator!==this}}}},"web-scene":{read:!1,write:!1}}}})],M.prototype,"portalItem",null),t([u("web-map","portalItem",["itemId"])],M.prototype,"readPortalItem",null),t([d("web-map","portalItem",{itemId:{type:String}})],M.prototype,"writePortalItem",null),t([c()],M.prototype,"spatialReference",void 0),t([c({json:{read:!1},readOnly:!0,value:"group"})],M.prototype,"type",void 0),t([c({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(t,e,s)=>{"inherited"!==t&&(e[s]=t)}}}}})],M.prototype,"visibilityMode",null),M=t([y("esri.layers.GroupLayer")],M);const A=M;export{A as default};
