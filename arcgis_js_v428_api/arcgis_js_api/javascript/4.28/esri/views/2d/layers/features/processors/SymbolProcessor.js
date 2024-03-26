// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../../../chunks/tslib.es6 ../../../../../core/BidiText ../../../../../core/Error ../../../../../core/has ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/accessorSupport/decorators/subclass ../../../../../core/accessorSupport/diffUtils ../../../../../geometry/SpatialReference ../../../engine/webgl/DisplayId ../../../engine/webgl/enums ../../../engine/webgl/mesh/MeshData ../../../engine/webgl/mesh/factories/WGLMeshFactory ../../../engine/webgl/mesh/templates/WGLTemplateStore ../../../engine/webgl/util/Matcher ../textUtils ./BaseProcessor ../support/ResourceManagerProxy".split(" "),
function(B,C,u,P,Q,D,p,R,S,E,v,F,G,H,I,J,K,x,L,M,N){function y(b,a){return(!b.minScale||b.minScale>=a-a/4)&&(!b.maxScale||b.maxScale<=a+a/2)}function z(b){b=b.message;const a={message:{data:{},tileKey:b.tileKey,tileKeyOrigin:b.tileKeyOrigin,version:b.version},transferList:[]};for(const f in b.data){const e=f;var c=b.data[e];a.message.data[e]=null;if(null!=c){var d=c.stride;const g=c.indices.slice(0),k=c.vertices.slice(0),h=c.records.slice(0);c=c.metrics?.slice(0);d={stride:d,indices:g,vertices:k,
records:h,metrics:c};a.transferList.push(g,k,h);a.message.data[e]=d}}return a}u=class extends M{constructor(){super(...arguments);this.type="symbol";this._matchers={feature:null,aggregate:null};this._bufferData=new Map;this._bufferIds=new Map}initialize(){this.addHandles([this.tileStore.on("update",this.onTileUpdate.bind(this))]);this._resourceManagerProxy=new N(this.remoteClient)}destroy(){this._resourceManagerProxy.destroy()}get supportsTileUpdates(){return!0}forEachBufferId(b){this._bufferIds.forEach(a=>
{a.forEach(b)})}async update(b,a){a=a.schema.processors[0];if("symbol"===a.type){var c=v.diff(this._schema,a);if(v.hasDiff(c,"mesh")||v.hasDiff(c,"target"))b.mesh=!0,b.why?.mesh.push("Symbology changed"),this._schema=a,this._factory=this._createFactory(a),this._factory.update(a,this.tileStore.tileScheme.tileInfo)}}onTileMessage(b,a,c,d){p.throwIfAborted(d);return this._onTileData(b,a,c,d)}onTileClear(b,a){a={clear:!0,end:a};this._bufferData.delete(b.key.id);this._bufferIds.delete(b.key.id);return this.remoteClient.invoke("tileRenderer.onTileData",
{tileKey:b.id,data:a})}onTileError(b,a,c){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:b.id,error:a},{signal:c.signal})}onTileUpdate(b){for(const a of b.removed)this._bufferData.has(a.key.id)&&this._bufferData.delete(a.key.id),this._bufferIds.has(a.key.id)&&this._bufferIds.delete(a.key.id);for(const a of b.added)this._bufferData.forEach(c=>{for(const d of c)d.message.tileKey===a.id&&this._updateTileMesh("append",a,z(d),[],!1,!1,null)})}_addBufferData(b,a){this._bufferData.has(b)||
this._bufferData.set(b,[]);this._bufferData.get(b)?.push(z(a))}_createFactory(b){const {geometryType:a,objectIdField:c,fields:d}=this.service;var f=F.fromJSON(this.spatialReference);f={geometryType:a,fields:d,spatialReference:f};const e=new K.WGLTemplateStore((h,l)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",h,l),this.tileStore.tileScheme.tileInfo),{matcher:g,aggregateMatcher:k}=b.mesh;this._store=e;this._matchers.feature=x.createMatcher(g,e,f,this._resourceManagerProxy);this._matchers.aggregate=
k?x.createMatcher(k,e,f,this._resourceManagerProxy):null;return new J.WGLMeshFactory(a,c,e)}async _onTileData(b,a,c,d){p.throwIfAborted(d);const {type:f,addOrUpdate:e,remove:g,clear:k,end:h}=a;var l=!!this._schema.mesh.sortKey;if(!e)return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:b.id,data:{type:f,addOrUpdate:null,remove:g,clear:k,end:h,sort:l}},d);c=this._processFeatures(b,e,c,d,a.status?.version);try{var m=await c;if(null==m)return this.remoteClient.invoke("tileRenderer.onTileData",
{tileKey:b.id,data:{type:f,addOrUpdate:null,remove:g,clear:k,end:h,sort:l}},d);l=[];for(const n of m){m=!1;const q=n.message.bufferIds,w=b.key.id,t=n.message.tileKey;if(w!==t&&null!=q){if(!this.tileStore.get(t)){this._addBufferData(w,n);l.push(n);continue}let r=this._bufferIds.get(t);r||(r=new Set,this._bufferIds.set(t,r));const O=Array.from(q);for(const A of O)if(r.has(A)){m=!0;break}else r.add(A)}m||(this._addBufferData(w,n),l.push(n))}await Promise.all(l.map(n=>{const q=b.key.id===n.message.tileKey;
return this._updateTileMesh(f,b,n,q?a.remove:[],q&&a.end,!!a.clear,d.signal)}))}catch(n){this._handleError(b,n,d)}}async _updateTileMesh(b,a,c,d,f,e,g){const k=c.message.tileKey,h=!!this._schema.mesh.sortKey;k!==a.key.id&&(f=!1);b={type:b,addOrUpdate:c?.message,remove:d,clear:e,end:f,sort:h};c={transferList:c?.transferList??[],signal:g};p.throwIfAborted(c);return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:k,data:b},c)}async _processFeatures(b,a,c,d,f){if(null==a||!a.hasFeatures)return null;
const e={transform:b.transform,hasZ:!1,hasM:!1},g=this._factory,k={viewingMode:"",scale:b.scale},h=await this._matchers.feature,l=await this._matchers.aggregate;p.throwIfAborted(d);const m=this._getLabelInfos(b,a);await g.analyze(a.getCursor(),this._resourceManagerProxy,h,l,e,k);p.throwIfAborted(d);return this._writeFeatureSet(b,a,e,m,g,c,f)}_writeFeatureSet(b,a,c,d,f,e,g){const k=a.getSize(),h=this._schema.mesh.matcher.symbologyType;e=new I.MeshData(b.key.id,{features:k,records:k,metrics:0},h,e,
h!==H.WGLSymbologyType.HEATMAP,g);g={viewingMode:"",scale:b.scale};for(a=a.getCursor();a.next();)try{const l=a.getDisplayId(),m=null!=d?d.get(l):null;f.writeCursor(e,a,c,g,b.level,m,this._resourceManagerProxy)}catch(l){}return e.serialize(b.tileInfoView.tileInfo.isWrappable)}_handleError(b,a,c){return p.isAbortError(a)?Promise.resolve():this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:b.id,error:a.message},{signal:c.signal})}_getLabelingSchemaForScale(b){var a=this._schema.mesh.labels;
if(null==a)return null;if("subtype"===a.type){const c={type:"subtype",classes:{}};let d=!1;for(const f in a.classes){const e=a.classes[f].filter(g=>y(g,b.scale));d=d||!!e.length;c.classes[f]=e}return d?c:null}a=a.classes.filter(c=>y(c,b.scale));return a.length?{type:"simple",classes:a}:null}_getLabels(b,a){if("subtype"===a.type){const c=this.service.subtypeField;D.assertIsSome(c,"Expected to find subtype Field");b=b.readAttribute(c);return null==b?[]:a.classes[b]??[]}return a.classes}_getLabelInfos(b,
a){b=this._getLabelingSchemaForScale(b);if(null==b)return null;const c=new Map;for(a=a.getCursor();a.next();){const f=a.getDisplayId(),e=[],g=G.isAggregateId(f),k=g&&1!==a.readAttribute("cluster_count")?"aggregate":"feature";var d=this._getLabels(a,b);for(const h of d){if(h.target!==k)continue;d=a.getStorage();d=g&&"feature"===k?d.getComputedStringAtIndex(a.readAttribute("referenceId"),h.fieldIndex):d.getComputedStringAtIndex(f,h.fieldIndex);if(!d)continue;d=C.bidiText(d.toString());const l=d[1];
this._store.getMosaicItem(h.symbol,L.codepoints(d[0])).then(m=>{e[h.index]={glyphs:m.glyphMosaicItems??[],rtl:l,index:h.index}})}c.set(f,e)}return c}};return u=B.__decorate([E.subclass("esri.views.2d.layers.features.processors.SymbolProcessor")],u)});