// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Error ../../core/Logger ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../layers/support/commonProperties ../../layers/support/FeatureEffect ../../layers/support/FeatureFilter ../../layers/support/fieldUtils ../../layers/support/floorFilterUtils ../../rest/support/Query ../../support/arcadeOnDemand ./support/popupUtils".split(" "),
function(l,u,y,q,n,E,F,G,z,A,B,C,f,w,x,D,r){const v=y.getLogger("esri.views.layers.FeatureLayerView");return h=>{h=class extends h{constructor(...a){super(...a);this._updatingRequiredFieldsPromise=null;this.dataUpdating=!1;this.layer=this.timeExtent=this.filter=null;this.requiredFields=[];this.view=null}initialize(){this.addHandles([q.watch(()=>{const a=this.layer;return[a?.elevationInfo?.featureExpressionInfo,a&&"displayField"in a?a.displayField:null,a&&"timeInfo"in a&&a.timeInfo,a&&"renderer"in
a&&a.renderer,a&&"labelingInfo"in a&&a.labelingInfo,a&&"floorInfo"in a&&a.floorInfo,this.filter,this.featureEffect,this.timeExtent]},()=>this._handleRequiredFieldsChange(),q.syncAndInitial),q.on(()=>this.view?.floors,"change",()=>this._handleRequiredFieldsChange()),q.on(()=>{const a=this.layer;return a&&"sublayers"in a?a.sublayers:null},"change",()=>this._handleRequiredFieldsChange())])}get availableFields(){const {layer:a,layer:{fieldsIndex:b},requiredFields:d}=this;return"outFields"in a&&a.outFields?
f.fixFields(b,[...f.unpackFieldNames(b,a.outFields),...d]):f.fixFields(b,d)}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(a){this._override("featureEffect",a)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(a){v.error("#maximumNumberOfFeatures\x3d","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(a){throw Error("missing implementation");}createQuery(){var a=
{outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};a=null!=this.filter?this.filter.createQuery(a):new x(a);if("feature"===this.layer.type){const b=w.getFloorFilterClause(this);null!=b&&(a.where=a.where?`(${a.where}) AND (${b})`:b)}null!=this.timeExtent&&(a.timeExtent=null!=a.timeExtent?a.timeExtent.intersection(this.timeExtent):this.timeExtent.clone());return a}createAggregateQuery(){return new x({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}queryFeatures(a,
b){throw Error("missing implementation");}queryObjectIds(a,b){throw Error("missing implementation");}queryFeatureCount(a,b){throw Error("missing implementation");}queryExtent(a,b){throw Error("missing implementation");}async fetchPopupFeatures(a,b){if(a=this.validateFetchPopupFeatures(b))throw a;return this.fetchClientPopupFeatures(b)}_loadArcadeModules(a){return a.expressionInfos?.length||Array.isArray(a.content)&&a.content.some(b=>"expression"===b.type)?D.loadArcade():Promise.resolve()}_handleRequiredFieldsChange(){const a=
this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",a);a.then(()=>{this._updatingRequiredFieldsPromise===a&&this._set("_updatingRequiredFieldsPromise",null)})}async _updateRequiredFields(){if(this.layer&&this.view){var a="3d"===this.view.type,{layer:b,layer:{fieldsIndex:d,objectIdField:e}}=this,g="renderer"in b&&b.renderer,k="orderBy"in b&&b.orderBy,m="featureReduction"in b?b.featureReduction:null,c=new Set;g=await Promise.allSettled([g?g.collectRequiredFields(c,d):null,f.collectLabelingFields(c,
b),a?f.collectElevationFields(c,b):null,null!=this.filter?f.collectFilterFields(c,b,this.filter):null,null!=this.featureEffect?f.collectFilterFields(c,b,this.featureEffect.filter):null,m?f.collectFeatureReductionFields(c,b,m):null,k?f.collectOrderByInfos(c,b,k):null]);"timeInfo"in b&&b.timeInfo&&this.timeExtent&&f.collectFields(c,b.fieldsIndex,[b.timeInfo.startField,b.timeInfo.endField]);"feature"===b.type&&(b.floorInfo&&f.collectFields(c,b.fieldsIndex,[b.floorInfo.floorField]),a&&null!=b.infoFor3D&&
(null==b.globalIdField&&v.error("globalIdField missing on 3DObjectFeatureLayer"),f.collectFields(c,b.fieldsIndex,[b.globalIdField])));"subtype-group"===b.type&&(f.collectField(c,d,b.subtypeField),k=b.sublayers.map(p=>Promise.all([p.renderer?.collectRequiredFields(c,d),f.collectLabelingFields(c,p)])),await Promise.allSettled(k));for(const p of g)"rejected"===p.status&&v.error(p.reason);f.collectField(c,d,e);a&&"displayField"in b&&b.displayField&&f.collectField(c,d,b.displayField);a=Array.from(c).sort();
this._set("requiredFields",a)}}validateFetchPopupFeatures(a){if(null==a)return null;for(const b of a.clientGraphics??[]){const d=b.layer;if("popupEnabled"in d&&!d.popupEnabled)return new u("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:d});if(b.isAggregate){const e="featureReduction"in d?d.featureReduction:null;if(!(e&&"popupTemplate"in e&&e.popupEnabled&&e.popupTemplate))return new u("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:d})}else if("popupTemplate"in
d&&!r.getFetchPopupTemplate(d,a))return new u("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:d})}}async fetchClientPopupFeatures(a){const b=null!=a?a.clientGraphics:null;if(!b||0===b.length)return[];const d=Array(b.length),e=new Map,g=await this.createPopupQuery(a);for(let m=0;m<b.length;m++){const c=b[m];if(c.isAggregate){d[m]=c;continue}var k=c.layer;if(!("popupEnabled"in k))continue;const p=f.unpackFieldNames(this.layer.fieldsIndex,g.outFields);k=r.getFetchPopupTemplate(k,
a);if(null==k)continue;const t=await this._loadArcadeModules(k);t&&t.arcadeUtils.hasGeometryOperations(k)||!f.featureHasFields(p,c)?e.set(c.getObjectId(),{graphic:c,index:m}):d[m]=c}if("stream"===this.layer.type||0===e.size)return d.filter(Boolean);g.objectIds=Array.from(e.keys());try{const m=await this.layer.queryFeatures(g);for(const c of m.features){const {graphic:{geometry:p},index:t}=e.get(c.getObjectId());c.geometry||(c.geometry=p);d[t]=c}}catch{}return d.filter(Boolean)}async createPopupQuery(a){const b=
this.layer.createQuery(),d=new Set;var e=!1,g=a?.clientGraphics?a.clientGraphics.map(k=>k.layer):[this.layer];for(const k of g)if("popupEnabled"in k&&(g=r.getFetchPopupTemplate(k,a),null!=g)){e=(e=await this._loadArcadeModules(g))&&e.arcadeUtils.hasGeometryOperations(g);e=!("point"!==this.layer.geometryType&&!e);g=await r.getRequiredFields(this.layer,g);for(const m of g)d.add(m)}b.returnGeometry=e;b.returnZ=e;b.returnM=e;b.outFields=Array.from(d);b.outSpatialReference=this.view.spatialReference;"feature"===
this.layer.type&&(a=w.getFloorFilterClause(this),null!=a&&(b.where=b.where?`(${b.where}) AND (${a})`:a));return b}canResume(){return!super.canResume()||null!=this.timeExtent&&this.timeExtent.isEmpty?!1:!0}};l.__decorate([n.property()],h.prototype,"_updatingRequiredFieldsPromise",void 0);l.__decorate([n.property({readOnly:!0})],h.prototype,"availableFields",null);l.__decorate([n.property({readOnly:!0})],h.prototype,"dataUpdating",void 0);l.__decorate([n.property({type:B})],h.prototype,"featureEffect",
null);l.__decorate([n.property({type:C})],h.prototype,"filter",void 0);l.__decorate([n.property(A.combinedViewLayerTimeExtentProperty)],h.prototype,"timeExtent",void 0);l.__decorate([n.property()],h.prototype,"layer",void 0);l.__decorate([n.property({type:Number})],h.prototype,"maximumNumberOfFeatures",null);l.__decorate([n.property({readOnly:!0,type:Boolean})],h.prototype,"maximumNumberOfFeaturesExceeded",null);l.__decorate([n.property({readOnly:!0})],h.prototype,"requiredFields",void 0);l.__decorate([n.property()],
h.prototype,"suspended",void 0);l.__decorate([n.property()],h.prototype,"view",void 0);return h=l.__decorate([z.subclass("esri.views.layers.FeatureLayerView")],h)}});