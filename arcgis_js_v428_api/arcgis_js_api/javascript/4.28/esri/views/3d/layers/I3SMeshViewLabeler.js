// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../symbols ../../../core/Accessor ../../../core/arrayUtils ../../../core/lang ../../../core/mathUtils ../../../core/maybe ../../../core/reactiveUtils ../../../core/uid ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/diffUtils ../../../geometry/projection/projectBuffer ../../../geometry/support/aaBoundingBox ../../../geometry/support/DoubleArray ../../../layers/graphics/dehydratedPoint ./graphics/Graphics3DCore ./graphics/Graphics3DScaleVisibility ./i3s/I3SGeometryUtil ../support/LimitGraphicsMap ../webgl-engine/lib/UpdatePolicy ../../../symbols/PointSymbol3D".split(" "),
function(k,g,A,B,C,v,y,D,E,n,Q,F,G,H,u,I,J,K,L,w,M,N,O){class z{constructor(a,b){this.meta=a;this.index=b}}class P{constructor(a,b){this.graphic=a;this.geometry=b;this.components=[];this.overridesDirty=!1}}g=class extends A{get updating(){return this._graphicsCore?.updating??!1}constructor(a){super(a);this.loadedGraphics=new M.LimitGraphicsMap(5E4);this.slicePlaneEnabled=!1;this._renderingInfo={symbol:new O};this._featuresMap=new Map}initialize(){const a=this.view.basemapTerrain;this._graphicsCore=
new K.Graphics3DCore({owner:this,layer:this.layer,preferredUpdatePolicy:N.UpdatePolicy.ASYNC,elevationFeatureExpressionEnabled:!1,graphicSymbolSupported:!1,getRenderingInfoWithoutRenderer:!0,hasZ:!0,hasM:!1,componentFactories:{deconflictor:b=>this.view.deconflictor.addGraphicsOwner(b),labeler:(b,d)=>this.view.labeler.addGraphicsOwner(b,d,{emptySymbolLabelSupported:!0,elevationInfoOverride:{mode:"absolute-height",offset:0},disablePlacement:{logEntityDescription:"3D Object Scene Layer features"}}),
scaleVisibility:(b,d)=>new L.Graphics3DScaleVisibility({graphicsCoreOwner:this,layer:this.layer,queryGraphicUIDsInExtent:d,graphicsCore:b,basemapTerrain:a,layerScaleEnabled:!1})}});this._graphicsCore.initializePromise.then(()=>this._graphicsCore.startCreateGraphics()).catch(()=>{});this.addHandles(D.watch(()=>this.layer.labelingInfo,(b,d)=>{G.diff(b,d)&&this._graphicsCore.updateLabelingInfo()}))}destroy(){this._graphicsCore=y.destroyMaybe(this._graphicsCore);this.loadedGraphics=y.destroyMaybe(this.loadedGraphics);
this.view=null}addNodeMeta(a,b){let d=0;const c=a.filteredIds,e=this.view.spatialReference,l=[];for(let h=0;h<a.featureIds.length;h++){const p=a.featureIds[h];var q=null==c;c&&d<c.length&&p===c[d]&&(q=!0,d++);if(!this._enabledForFeatureInNode(a,h))continue;var f=this._featuresMap.get(p);if(f){f.components.push(new z(a,h));this._updateLabelPosition(p);continue}const x=b(h,a);f=J.makeDehydratedPoint(0,0,0,e);q={objectId:p,uid:E.generateUID(),attributes:x,visible:q,geometry:f};f=new P(q,f);f.components.push(new z(a,
h));this._featuresMap.set(p,f);this._updateLabelGeometry(p);l.push(q)}this.loadedGraphics.addMany(l)}updateLabelPositions(a){const b=this.view.renderCoordsHelper;this._forEachGraphic(a,(d,c,e)=>{c=this._graphicsCore.getGraphics3DGraphicById(c.uid);null!=c&&this._updateLabelGeometry(a.featureIds[d])&&c.alignWithAbsoluteElevation(e.z??0,b,!1)})}setNodeMetaAttributes(a,b){const d=[];this._forEachGraphic(a,(c,e)=>{c=b(c,a);C.equalsShallow(e.attributes,c)||(e.attributes=c,d.push(e.uid))});this._graphicsCore.updateLabelingInfo(d)}applyFilterChange(a){this._forEachFeature(a,
(b,d,c)=>{if(this._enabledForFeatureInNode(a,b))b=d.graphic,d=b.visible,d!==c&&(b.visible=c,t.graphic=b,t.property="visible",t.oldValue=d,t.newValue=c,this._graphicsCore.graphicUpdateHandler(t));else switch(c=a.featureIds[b],this._removeFeature(d,a,b)){case m.REMOVED:this.loadedGraphics.removeManyByObjectId([c]);break;case m.MODIFIED:this._updateLabelPosition(c)}})}removeNodeMeta(a){const b=[];this._forEachGraphic(a,d=>{const c=a.featureIds[d],e=this._featuresMap.get(c);if(e)switch(this._removeFeature(e,
a,d)){case m.MODIFIED:this._updateLabelPosition(c);break;case m.REMOVED:b.push(c)}});this.loadedGraphics.removeManyByObjectId(b)}_removeFeature(a,b,d){const c=a.components.length;B.filterInPlace(a.components,e=>!(e.meta===b&&e.index===d));return 0===a.components.length?(this._featuresMap.delete(b.featureIds[d]),m.REMOVED):c!==a.components.length?m.MODIFIED:m.UNMODIFIED}getRenderingInfo(){return this._renderingInfo}notifyGraphicGeometryChanged(){}notifyGraphicVisibilityChanged(){}_updateLabelPosition(a){const b=
this._featuresMap.get(a);b&&this._updateLabelGeometry(a)&&(this.loadedGraphics.removeManyByObjectId([a]),this.loadedGraphics.addMany([b.graphic]))}_updateLabelGeometry(a){a=this._featuresMap.get(a);if(!a)return!1;const b=a.geometry,d=this.view.spatialReference,c=this.view.renderCoordsHelper,e=b.x,l=b.y,q=b.z??0,f=I.newDoubleArray(a.components.length*w.boundingBoxCornersPointsStride);let h=0;for(const {meta:p,index:x}of a.components)w.boundingBoxCornerPoints(x,this.collection,p.objectHandle,f,h),h+=
w.boundingBoxCornersPointsStride;H.projectBuffer(f,c.spatialReference,0,f,d,0,f.length/3);u.set(r,u.negativeInfinity);u.expandWithBuffer(r,f);b.x=(r[0]+r[3])/2;b.y=(r[1]+r[4])/2;b.z=r[5];return!v.floatEqualUlp(b.x,e)||!v.floatEqualUlp(b.y,l)||!v.floatEqualUlp(b.z,q)}_forEachGraphic(a,b){this._forEachFeature(a,(d,{graphic:c,geometry:e},l)=>{this._enabledForFeatureInNode(a,d)&&b(d,c,e,l)})}_forEachFeature(a,b){let d=0;for(let c=0;c<a.featureIds.length;c++){const e=this._featuresMap.get(a.featureIds[c]);
let l=null==a.filteredIds;a.filteredIds&&a.filteredIds[d]===a.featureIds[c]&&(l=!0,d++);e&&b(c,e,l)}}_enabledForFeatureInNode(a,b){return 0>a.node.index||!this.overrides?.featureHasGeometryChanges(a.featureIds[b])}get updatePolicy(){return this._graphicsCore.effectiveUpdatePolicy}get usedMemory(){return this._graphicsCore.usedMemory}get unloadedMemoryEstimate(){return this._graphicsCore.unprocessedMemoryEstimate}get test(){return{graphicsCore:this._graphicsCore}}};k.__decorate([n.property()],g.prototype,
"view",void 0);k.__decorate([n.property()],g.prototype,"layer",void 0);k.__decorate([n.property()],g.prototype,"collection",void 0);k.__decorate([n.property()],g.prototype,"loadedGraphics",void 0);k.__decorate([n.property()],g.prototype,"overrides",void 0);k.__decorate([n.property()],g.prototype,"updating",null);k.__decorate([n.property()],g.prototype,"slicePlaneEnabled",void 0);k.__decorate([n.property()],g.prototype,"_graphicsCore",void 0);g=k.__decorate([F.subclass("esri.views.3d.layers.I3SMeshViewLabeler")],
g);const t={graphic:null,property:null,oldValue:null,newValue:null};var m;(function(a){a[a.UNMODIFIED=0]="UNMODIFIED";a[a.MODIFIED=1]="MODIFIED";a[a.REMOVED=2]="REMOVED"})(m||(m={}));const r=u.create();return g});