// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../geometry ../../../Graphic ../../../core/Collection ../../../core/Error ../../../core/has ../../../core/Loadable ../../../core/Logger ../../../core/Promise ../../../core/workers/workers ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/shared ../../../core/accessorSupport/decorators/subclass ../../../rest/query/operations/editsZScale ../../../rest/query/operations/queryZScale ../../../rest/support/FeatureSet ../../../geometry/Extent ../../../geometry/Polygon ../../../geometry/support/typeUtils".split(" "),
function(k,n,L,v,y,r,z,A,t,B,C,q,D,M,E,F,G,w,H,I,J,x){let K=0;k.MemorySource=class extends A.LoadableMixin(B.EsriPromiseMixin(y)){constructor(a){super(a);this._idToClientGraphic=null;this.type="memory"}load(a){this.addResolvingPromise(this._startWorker(null!=a?a.signal:null));return Promise.resolve(this)}destroy(){this._connection?.close();this._connection=null}get _workerGeometryType(){const a=this.layer?.geometryType;return a?this._geometryTypeRequiresClientGraphicMapping(a)?"polygon":a:null}applyEdits(a){return this.load().then(()=>
this._applyEdits(a))}openPorts(){return this.load().then(()=>this._connection.openPorts())}async queryFeatures(a,b={}){await this.load(b);b=await this._connection.invoke("queryFeatures",a?a.toJSON():null,b);w.applyFeatureSetZUnitScaling(a,this.layer.spatialReference,b);a=H.fromJSON(b);if(!this._requiresClientGraphicMapping())return a;b=this.layer.objectIdField;for(const c of a.features){const e=this._idToClientGraphic.get(c.attributes[b]);e&&(c.geometry=e.geometry)}a.geometryType=this.layer.geometryType;
return a}async queryFeaturesJSON(a,b={}){if(this._requiresClientGraphicMapping())throw new r("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)");await this.load(b);b=await this._connection.invoke("queryFeatures",a?a.toJSON():null,b);w.applyFeatureSetZUnitScaling(a,this.layer.spatialReference,b);return b}queryFeatureCount(a,b={}){return this.load(b).then(()=>this._connection.invoke("queryFeatureCount",a?a.toJSON():null,b))}queryObjectIds(a,
b={}){return this.load(b).then(()=>this._connection.invoke("queryObjectIds",a?a.toJSON():null,b))}queryExtent(a,b={}){return this.load(b).then(()=>this._connection.invoke("queryExtent",a?a.toJSON():null,b)).then(c=>({count:c.count,extent:I.fromJSON(c.extent)}))}querySnapping(a,b={}){return this.load(b).then(()=>this._connection.invoke("querySnapping",a,b))}async _applyEdits(a){if(!this._connection)throw new r("feature-layer-source:edit-failure","Memory source not loaded");const b=this.layer.objectIdField;
let c=null;const e=[],m=[];await Promise.all([this._prepareClientMapping(a.addFeatures,null),this._prepareClientMapping(a.updateFeatures,null)]);const g=d=>"objectId"in d&&null!=d.objectId?d.objectId:"attributes"in d&&null!=d.attributes[b]?d.attributes[b]:null;a.addFeatures&&(c=this._prepareAddFeatures(a.addFeatures));if(a.deleteFeatures)for(var f of a.deleteFeatures){const d=g(f);null!=d&&e.push(d)}f=a.updateFeatures&&this._idToClientGraphic?new Map:null;if(a.updateFeatures)for(const d of a.updateFeatures)m.push(this._serializeFeature(d)),
f&&(a=g(d),null!=a&&f.set(a,d));G.unapplyEditsZUnitScaling(c?c.features:null,m,this.layer.spatialReference);const {fullExtent:l,featureEditResults:h}=await this._connection.invoke("applyEdits",{adds:c?c.features:[],updates:m,deletes:e});this.fullExtent=l;c&&c.finish(h.uidToObjectId);this._updateClientGraphicIds(f,h);return this._createEditsResult(h)}async _prepareClientMapping(a,b){if("mesh"===this._layerOrSourceGeometryType&&null!=a){var c=[];for(const {geometry:e}of a)null==e||"mesh"!==e.type||
e.hasExtent||e.loaded||c.push(e.load({signal:b}));c.length&&await Promise.all(c)}}_updateClientGraphicIds(a,b){if(this._idToClientGraphic){if(a)for(const c of b.updateResults){if(!c.success)continue;const e=a.get(c.objectId);null!=e&&this._addIdToClientGraphic(e)}for(const c of b.deleteResults)c.success&&this._idToClientGraphic.delete(c.objectId)}}_createEditsResult(a){return{addFeatureResults:a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:a.updateResults?
a.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(a){const b=!0===a.success?null:a.error||{code:void 0,description:void 0};return{objectId:a.objectId,globalId:a.globalId,error:b?new r("feature-layer-source:edit-failure",b.description,{code:b.code}):null}}_prepareAddFeatures(a){const b=new Map,
c=Array(a.length);let e=null;for(let g=0;g<a.length;g++){const f=a[g],l=this._serializeFeature(f);e||null==f.geometry||(e=f.geometry.type);c[g]=l;b.set(`${l.uid}`,f)}const m=this;return{features:c,inferredGeometryType:e,finish(g){const f=m.sourceJSON.objectIdField;for(const l in g){const h=g[l],d=b.get(l);d&&(d.attributes||(d.attributes={}),-1===h?delete d.attributes[f]:d.attributes[f]=h,m._addIdToClientGraphic(d))}}}}_addIdToClientGraphic(a){if(this._idToClientGraphic){var b=this.sourceJSON.objectIdField;
b=a.attributes?.[b];null!=b&&this._idToClientGraphic.set(b,a)}}get _layerOrSourceGeometryType(){return this.layer?.geometryType??this.sourceJSON?.geometryType}_requiresClientGraphicMapping(){return this._geometryTypeRequiresClientGraphicMapping(this._layerOrSourceGeometryType)}_geometryRequiresClientGraphicMapping(a){return this._geometryTypeRequiresClientGraphicMapping(a.type)}_geometryTypeRequiresClientGraphicMapping(a){return"mesh"===a||"multipatch"===a||"extent"===a}_serializeFeature(a){const {attributes:b}=
a;a=this._geometryForSerialization(a);const c=(K++).toString();return a?{uid:c,geometry:a.toJSON(),attributes:b}:{uid:c,attributes:b}}_geometryForSerialization(a){({geometry:a}=a);return null==a?null:this._geometryRequiresClientGraphicMapping(a)?a.extent?J.fromExtent(a.extent):null:a}async _startWorker(a){this._connection=await C.open("MemorySourceWorker",{strategy:z("feature-layers-workers")?"dedicated":"local",signal:a,registryTarget:this});const {fields:b,spatialReference:c,objectIdField:e,hasM:m,
hasZ:g,timeInfo:f,dateFieldsTimeZone:l}=this.layer;var h="defaults"===this.layer.originOf("spatialReference");await this._prepareClientMapping(this.items,a);const d=this._prepareAddFeatures(this.items);this.addHandles(this.on("before-changes",u=>{t.getLogger(this).error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead");u.preventDefault()}));h={features:d.features,fields:b?.map(u=>u.toJSON()),geometryType:x.typeKebabDictionary.toJSON(this._workerGeometryType),
hasM:"mesh"!==this._layerOrSourceGeometryType&&m,hasZ:"mesh"===this._layerOrSourceGeometryType||g,objectIdField:e,spatialReference:h?null:c&&c.toJSON(),timeInfo:f?.toJSON()??null,dateFieldsTimeZone:l};a=await this._connection.invoke("load",h,{signal:a});for(var p of a.warnings)t.getLogger(this.layer).warn("#load()",`${p.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:p});a.featureErrors.length&&t.getLogger(this.layer).warn("#load()",`Encountered ${a.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||
"no title"}', id: '${this.layer.id??"no id"}')`,{errors:a.featureErrors});p=a.layerDefinition;this._geometryTypeRequiresClientGraphicMapping(d.inferredGeometryType)&&(p.geometryType=x.typeKebabDictionary.toJSON(d.inferredGeometryType));this.sourceJSON=p;this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map);d.finish(a.assignedObjectIds)}};n.__decorate([E.shared({Type:v,ensureType:D.ensureType(v)})],k.MemorySource.prototype,"itemType",void 0);n.__decorate([q.property()],k.MemorySource.prototype,
"type",void 0);n.__decorate([q.property({constructOnly:!0})],k.MemorySource.prototype,"layer",void 0);n.__decorate([q.property({readOnly:!0})],k.MemorySource.prototype,"_workerGeometryType",null);n.__decorate([q.property()],k.MemorySource.prototype,"sourceJSON",void 0);k.MemorySource=n.__decorate([F.subclass("esri.layers.graphics.sources.MemorySource")],k.MemorySource);Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});