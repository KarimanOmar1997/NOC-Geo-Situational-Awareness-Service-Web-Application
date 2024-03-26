/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{a as e}from"./asyncUtils.js";import{clone as t}from"../core/lang.js";import{q as r}from"./featureQueryAll.js";import{fixFields as n,unpackFieldNames as i,collectLabelingFields as o,collectFilterFields as s}from"../layers/support/fieldUtils.js";import{_ as a}from"./tslib.es6.js";import l,{S as d}from"../core/Accessor.js";import{L as u}from"./Logger.js";import{r as c}from"./tracking.js";import{property as f}from"../core/accessorSupport/decorators/property.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import"./ensureType.js";import{i as y}from"./typedArrayUtil.js";import{a as g}from"./maybe.js";import{u as m,a as h,i as b}from"./DefinitionExpressionSceneLayerView.js";import{throwIfAbortError as F,throwIfNotAbortError as I}from"../core/promiseUtils.js";import{whenOnce as w}from"../core/reactiveUtils.js";import{project as E,canProjectWithoutEngine as x,isLoaded as _,load as j}from"../geometry/projection.js";import v from"../views/layers/LayerView.js";const A={setAttribute(){},rollback(){},commit(){}};var O;function U(e,r){const n=r.attributes[e.objectIdField];if(null==n)return A;const i=e.sessions.get(n);if(i)return i;const o=t(r.attributes),s=new Set,a=e.i3sOverrides.createInteractiveEditSession(n),l=new Map;let d=O.EDITING;const u={setAttribute(t,i){if(d!==O.EDITING)return;const u=e.fieldsIndex.get(t);if(!u)return;const c=e.attributeStorageInfo.findIndex((e=>e.name===u.name));if(c<0)return;if(!(t in o))throw new Error(`Attribute "${t}" is not an attribute of the edited feature.`);a.setAttribute(c,i);const f=e.attributeStorageInfo[c];let p=!1;s.add(t),e.forEachNode(((t,o)=>{const s=((e,t)=>{const r=l.get(e);if(null==r){const r=t.indexOf(n);return l.set(e,r),r}return r})(t,o);if(-1===s)return;const a=e.getAttributeData(t.index);if(a){const n=a[f.name];n&&(n[s]=i,e.setAttributeData(t.index,a,r),p=!0)}})),p&&e.clearMemCache()},rollback(){if(d===O.EDITING){for(const e of s)this.setAttribute(e,o[e]);a.remove(),d=O.ROLLED_BACK,e.sessions.delete(n)}},commit(){d===O.EDITING&&(a.remove(),d=O.COMMITTED,e.sessions.delete(n))}};return e.sessions.set(n,u),u}function N(e,t,r){const{gidToFeatureInfo:n,oidToFeatureInfo:i,fieldsIndex:o,objectIdField:s,globalIdField:a,featureOrIdentifierList:l}=r;if(!r.featuresResolved&&null!=l){for(const e of l){const t={feature:null,oid:-1,gid:null};if("attributes"in e){t.feature=e;const r=e.attributes;if(null!=r)for(const e in r){if(-1!==t.oid&&null!=t.gid)break;const n=o.normalizeFieldName(e);n===s&&(t.oid=r[e]??-1),n===a&&(t.gid=r[e])}}else t.oid=e.objectId??-1,t.gid=e.globalId;null!=t.gid&&n.set(t.gid,t),-1!==t.oid&&i.set(t.oid,t)}r.featuresResolved=!0}return(-1!==e?i.get(e):null)??(null!=t?n.get(t):null)}function S(e,t,r,n,i=null,o=!0){const s=[],a={gidToFeatureInfo:new Map,oidToFeatureInfo:new Map,featuresResolved:null==r,fieldsIndex:e.fieldsIndex,objectIdField:e.objectIdField,globalIdField:e.globalIdField,featureOrIdentifierList:r};for(const e of t){if(null!=e.error)continue;const t=e.objectId??-1,r=e.globalId,l=(-1===t||o?N(t,r,a):null)??{feature:null,oid:t,gid:r},d={oid:-1===t?l.oid:t,gid:r??l.gid,feature:l.feature,result:e};if(s.push(d),-1===d.oid&&null!=d.gid&&null!=i&&(d.oid=i.get(d.gid)??-1),-1===d.oid&&null!=d.gid){let e=n.get(d.gid);null==e&&(e=[],n.set(d.gid,e)),e.push(d)}}return s}async function L(t,n){const i=new Map,o=S(t,n.addedFeatures,n.edits?.addFeatures,i),s=S(t,n.updatedFeatures,n.edits?.updateFeatures,i),a=S(t,n.deletedFeatures,n.edits?.deleteFeatures,i,n.globalIdToObjectId,!1);return i.size>0&&await async function(t,n){const i=t.i3sOverrides.layer.associatedLayer;if(null==i?.globalIdField)return;const o=i.createQuery(),{objectIdField:s,globalIdField:a}=i;o.where=Array.from(n.keys()).map((e=>`${a}='${e}'`)).join(" OR "),o.returnGeometry=!1,o.outFields=[s,a],o.cacheHint=!1;const l=await e(r(i,o));if(!l.ok)return;const d=l.value.features;for(const e of d){const t=e.attributes[a],r=e.attributes[s];if(null==t||null==r||-1===r)continue;const i=n.get(t);if(null!=i)for(const e of i)e.oid=r}}(t,i),{adds:o.filter((e=>-1!==e.oid)),updates:s.filter((e=>-1!==e.oid)),deletes:a.filter((e=>-1!==e.oid))}}function T(e,t){const r=new Map,n=t.adds,i=t.updates,o=t.deletes;if(n.length>0)for(const e of n){const t=e.oid,n=e.feature;"mesh"===n?.geometry?.type&&r.set(t,n.geometry)}if(i.length>0)for(const e of i){const t=e.oid,n=e.feature;"mesh"===n?.geometry?.type&&r.set(t,n.geometry)}if(o.length>0)for(const e of o)r.set(e.oid,null);for(const[t,n]of r)e.i3sOverrides.updateGeometry(t,n)}function M(e,t){const r=function(e,t){const r=t.updates;if(!r||0===r.length)return new C;const n=new C,i=new Map;for(let t=0;t<e.attributeStorageInfo.length;t++)i.set(e.attributeStorageInfo[t].name,t);return e.forEachNode(((t,i)=>{for(const o of r){if(null==o.feature)continue;const r=o.feature,s=o.oid,a=i.indexOf(s);for(const i in r.attributes){const o=e.fieldsIndex.normalizeFieldName(i),l=D(n,t.index,o),d=r.attributes[i];l.push({featureIndex:a,featureId:s,value:d})}}})),n}(e,t),n=function(e,t){const r=new Map,n=t.adds;if(!n||0===n.length||null==e.globalIdField)return r;for(const e of n){const t=e.oid,n=e.feature;"mesh"===n?.geometry?.type&&r.set(t,n)}return r}(e,t);if(0===r.size&&0===n.size)return;const i=new Map;for(let t=0;t<e.attributeStorageInfo.length;t++)i.set(e.attributeStorageInfo[t].name,t);let o=!1;r.forEach(((t,r)=>{const n=e.getAttributeData(r);let s=!1;t.forEach(((t,r)=>{const a=null!=n?n[r]:null,l=i.get(r);for(const{featureIndex:r,value:n,featureId:i}of t)a&&(a[r]=n,s=!0,o=!0),e.i3sOverrides.updateAttributeValue(i,l,n)})),s&&e.setAttributeData(r,n,null)})),o&&e.clearMemCache();const{fieldsIndex:s,i3sOverrides:a,objectIdField:l,globalIdField:d}=e,u=a.layer.associatedLayer?.infoFor3D,c=new Set(u?[...Object.values(u.assetMapFieldRoles),...Object.values(u.transformFieldRoles)]:[]);for(const[e,t]of n){a.featureAdded(e);const{attributes:r}=t;for(const t in r){if(t!==l&&t!==d&&c.has(t))continue;const n=s.normalizeFieldName(t),o=null!=n?i.get(n):null;if(null==o)continue;const u=r[t];a.updateAttributeValue(e,o,u)}}}function D(e,t,r){const n=function(e,t){const r=e.get(t);if(r)return r;const n=new R;return e.set(t,n),n}(e,t),i=null!=r&&n.get(r);if(i)return i;const o=new Array;return n.set(r,o),o}!function(e){e[e.EDITING=0]="EDITING",e[e.ROLLED_BACK=1]="ROLLED_BACK",e[e.COMMITTED=2]="COMMITTED"}(O||(O={}));const R=Map,C=Map;function q(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return e.outFields?n(t,[...i(t,e.outFields),...r]):n(t,r)}}}}const k=e=>{let t=class extends e{constructor(){super(...arguments),this._numUpdating=0,this._asyncUpdateState=new Map}get updating(){return this._numUpdating>0}autoUpdateAsync(e,t){return function(e,t){const r=()=>{if(!n||i)return t();n.clear(),i=!0;const e=c(n,t);return i=!1,e};let n=new d((()=>{n&&!i&&e(r)})),i=!1;return e(r),{remove:()=>{n&&(n.destroy(),n=null)}}}((t=>this._updateAsync(e,t)),t)}async _updateAsync(e,t){if(!this._startAsyncUpdate(e)){try{const r=await t();this._set(e,r)}catch(t){u.getLogger(this).warn(`Async update of "${String(e)}" failed. Async update functions should not throw exceptions.`)}this._endAsyncUpdate(e)&&this._updateAsync(e,t)}}_startAsyncUpdate(e){const t=this._asyncUpdateState.get(e)??V.None;return t&V.Updating?(this._asyncUpdateState.set(e,t|V.Invalidated),!0):(++this._numUpdating,this._asyncUpdateState.set(e,t|V.Updating),!1)}_endAsyncUpdate(e){--this._numUpdating;const t=(this._asyncUpdateState.get(e)??V.None)&~V.Updating;return t&V.Invalidated?(this._asyncUpdateState.set(e,t&~V.Invalidated),!0):(this._asyncUpdateState.set(e,t),!1)}};return a([f({readOnly:!0})],t.prototype,"updating",null),a([f()],t.prototype,"_numUpdating",void 0),t=a([p("esri.core.AsyncUpdate")],t),t};var V;!function(e){e[e.None=0]="None",e[e.Updating=1]="Updating",e[e.Invalidated=2]="Invalidated"}(V||(V={}));let P=class extends(k(l)){};P=a([p("esri.core.AsyncUpdate")],P);const z="esri.views.3d.layers.support.SceneLayerViewRequiredFields";let G=class extends(k(l)){get layer(){return this.layerView.layer}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:t},rendererFields:r,labelingFields:i,viewFilterFields:o}=this;return n(e,[...t??[],...r??[],...i??[],...o??[]])}constructor(e){super(e)}initialize(){this.addHandles([this.autoUpdateAsync("rendererFields",(async()=>{const{fieldsIndex:e,renderer:t}=this.layer;return t?$((r=>t.collectRequiredFields(r,e))):null})),this.autoUpdateAsync("labelingFields",(async()=>{const{layer:e}=this;return e.labelsVisible?$((t=>o(t,e))):null})),this.autoUpdateAsync("viewFilterFields",(()=>{const{layer:e,filter:t}=this.layerView;return $((r=>s(r,e,t)))}))])}};async function $(e){const t=new Set;try{return await e(t),Array.from(t).sort()}catch(e){return u.getLogger(z).error(e),null}}a([f()],G.prototype,"layerView",void 0),a([f()],G.prototype,"layer",null),a([f()],G.prototype,"requiredFields",null),a([f()],G.prototype,"rendererFields",void 0),a([f()],G.prototype,"labelingFields",void 0),a([f()],G.prototype,"viewFilterFields",void 0),G=a([p(z)],G);const B="esri.views.layers.SceneLayerView",K=u.getLogger(B);let Q=class extends v{constructor(){super(...arguments),this.layer=null,this.filter=null,this._geometryEngine=null,this._projectionEngineLoaded=!1,this._abortController=new AbortController}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){return m(this._layerFilter)}get _layerFilter(){const e=this.layer?.filter;if(null==e||e.geometries.length<1)return null;const t=this._geometryEngine;if(null==t||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return h;const r=e.geometries.at(0).spatialReference,n=e.geometries.toArray().map((e=>{try{e=t.simplify(e)}catch(e){return K.warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."),null}if(null==e)return null;if(e.spatialReference.equals(r))return e;try{return E(e,r)}catch(e){return K.warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."),null}})).filter(y).sort(((e,t)=>e.extent.xmin-t.extent.xmin)),i=new Set,o=new Array,s=new Array;for(let e of n){const r=e.extent.xmin;if(o.length=0,i.forEach((n=>{if(r>=n.extent.xmax)return s.push(n),void i.delete(n);e.extent.ymin<=n.extent.ymax&&e.extent.ymax>=n.extent.ymin&&t.intersects(e,n)&&o.push(n)})),o.length>0){o.push(e);try{e=t.union(o)}catch(e){K.warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");continue}o.pop(),o.forEach((e=>i.delete(e)))}i.add(e)}return i.forEach((e=>s.push(e))),s.length>0?{spatialRelationship:e.spatialRelationship,geometries:s}:null}get _filterNeedsProjectionEngine(){const e=this.layer.filter;if(null==e||e.geometries.length<=1)return!1;const t=e.geometries.at(0).spatialReference;return e.geometries.some((({spatialReference:e})=>!e.equals(t)&&!x(e,t)))}get layerFilterUpdating(){return b(this._layerFilter)}initialize(){const{signal:e}=this._abortController;w((()=>this.destroyed||!this._geometryEngine&&this.layer?.filter?.geometries?.length),e).then((async()=>{F(e),this._geometryEngine=await import("../geometry/geometryEngine.js")})).catch(I),this._projectionEngineLoaded=_(),w((()=>this.destroyed||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine),e).then((async()=>{F(e),await j(),this._projectionEngineLoaded=!0})).catch(I)}destroy(){this._abortController=g(this._abortController)}highlight(e){throw new Error("Not implemented")}queryFeatures(e,t){throw new Error("Not implemented")}queryObjectIds(e,t){throw new Error("Not implemented")}queryFeatureCount(e,t){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,t){throw new Error("Not implemented")}};a([f()],Q.prototype,"layer",void 0),a([f()],Q.prototype,"availableFields",null),a([f()],Q.prototype,"maximumNumberOfFeatures",null),a([f({readOnly:!0})],Q.prototype,"maximumNumberOfFeaturesExceeded",null),a([f()],Q.prototype,"filter",void 0),a([f({readOnly:!0})],Q.prototype,"layerFilter",null),a([f({readOnly:!0})],Q.prototype,"_layerFilter",null),a([f()],Q.prototype,"_geometryEngine",void 0),a([f()],Q.prototype,"_projectionEngineLoaded",void 0),a([f()],Q.prototype,"_filterNeedsProjectionEngine",null),a([f()],Q.prototype,"layerFilterUpdating",null),Q=a([p(B)],Q);const H=Q;export{G as S,M as a,H as b,U as c,q as d,L as n,T as p};
