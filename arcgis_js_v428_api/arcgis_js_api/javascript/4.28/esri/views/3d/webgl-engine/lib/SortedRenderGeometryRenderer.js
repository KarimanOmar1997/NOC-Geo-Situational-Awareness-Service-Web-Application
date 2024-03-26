// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/PooledArray ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec2f64 ../../terrain/Intersector ./ChangeSet ./Intersector ./IntersectorInterfaces ./ModelDirtyTypes ./rendererUtils ../materials/renderers/MergedRenderer".split(" "),function(g,k,u,
t,l,F,G,H,v,w,x,y,z,q,m,A,B){function C(a,b,d,f,c,e,h){const n=new x.OverlayTarget(e,h,b);b=p=>{p.set(q.IntersectorType.OVERLAY,n,a.dist,a.normal,a.transformation,d,f)};(null==c.results.min.drapedLayerOrder||d>=c.results.min.drapedLayerOrder)&&(null==c.results.min.dist||c.results.ground.dist<=c.results.min.dist)&&b(c.results.min);c.options.store!==q.StoreResults.MIN&&(null==c.results.max.drapedLayerOrder||d<c.results.max.drapedLayerOrder)&&(null==c.results.max.dist||c.results.ground.dist>c.results.max.dist)&&
b(c.results.max);c.options.store===q.StoreResults.ALL&&(e=z.newIntersectorResult(c.ray),b(e),c.results.all.push(e))}g.SortedRenderGeometryRenderer=class extends u{constructor(a){super(a);this._pending=new D;this._changes=new y.ChangeSet;this._materialRenderers=new t;this._sortedMaterialRenderers=new t;this._geometries=new Map;this._hasWater=this._hasHighlights=!1}destroy(){this._changes.prune();this._materialRenderers.forAll(a=>a.dispose());this._materialRenderers.clear();this._sortedMaterialRenderers.clear();
this._geometries.clear();this._pending.clear()}get updating(){return!this._pending.empty||0<this._changes.updates.length}get rctx(){return this.rendererContext.rctx}get _materialRepository(){return this.rendererContext.materialRepository}get _localOriginFactory(){return this.rendererContext.localOriginFactory}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return this._materialRenderers.some(a=>a.rendersOccluded)}get isEmpty(){return!this.updating&&
0===this._materialRenderers.length&&0===this._geometries.size}getMemoryForMaterial(a){return null==a?0:this._materialRenderers.find(b=>b.material===a)?.usedMemory??0}commitChanges(){if(!this.updating)return!1;this._processAddsRemoves();let a=!1,b=!1,d=!1;A.splitRenderGeometryChangeSetByMaterial(this._changes).forEach((f,c)=>{var e=this._materialRenderers.find(p=>p.material===c);!e&&0<f.adds.length&&(e=new B.MergedRenderer({material:c}),e.initializeRenderContext(this.rendererContext.pluginContext,
this._materialRepository),this._materialRenderers.push(e),d=b=a=!0);if(e){var h=b||e.hasHighlights,n=d||e.hasWater;e.modify(f);b=b||h!==e.hasHighlights;d=d||n!==e.hasWater;e.isEmpty&&(this._materialRenderers.removeUnordered(e),e.dispose(),a=!0)}});this._changes.clear();a&&this._updateSortedMaterialRenderers();b&&(this._hasHighlights=this._materialRenderers.some(f=>f.hasHighlights));d&&(this._hasWater=this._materialRenderers.some(f=>f.hasWater));this.notifyChange("updating");return!0}addGeometries(a,
b){if(0!==a.length){var d=this._validateRenderGeometries(a);for(var f of d)this._geometries.set(f.id,f);f=this._pending.empty;for(const c of d)this._pending.adds.add(c);f&&this.notifyChange("updating");b===m.DirtyOperation.UPDATE&&this._notifyGraphicGeometryChanged(a)}}removeGeometries(a,b){const d=this._pending.empty,f=this._pending.adds;for(const c of a)f.has(c)?(this._pending.removed.add(c),f.delete(c)):this._pending.removed.has(c)||this._pending.removes.add(c),this._geometries.delete(c.id);d&&
!this._pending.empty&&this.notifyChange("updating");b===m.DirtyOperation.UPDATE&&this._notifyGraphicGeometryChanged(a)}modifyGeometries(a,b){const d=0===this._changes.updates.length;for(const f of a){const c=this._changes.updates.pushNew();c.renderGeometry=this._validateRenderGeometry(f);c.updateType=b}d&&0<this._changes.updates.length&&this.notifyChange("updating");switch(b){case m.DirtyState.TRANSFORMATION:case m.DirtyState.GEOMETRY:return this._notifyGraphicGeometryChanged(a);case m.DirtyState.VISIBILITY:return this._notifyGraphicVisibilityChanged(a)}}updateAnimation(a){let b=
!1;this._sortedMaterialRenderers.forAll(d=>b=d.updateAnimation(a)||b);return b}shouldRender(a){return this._sortedMaterialRenderers.some(b=>b.prepareTechnique(a))}render(a){this._sortedMaterialRenderers.forAll(b=>{const d=b.prepareTechnique(a);null!=d&&b.renderNode(a,d)})}intersect(a,b,d,f,c){this._geometries.forEach(e=>{if(!f||f(e)){this._intersectRenderGeometry(e,d,b,0,a,c);var h=this.rendererContext.longitudeCyclical;h&&(e.boundingSphere[0]-e.boundingSphere[3]<h.min&&this._intersectRenderGeometry(e,
d,b,h.range,a,c),e.boundingSphere[0]+e.boundingSphere[3]>h.max&&this._intersectRenderGeometry(e,d,b,-h.range,a,c));c++}});return c}_updateSortedMaterialRenderers(){this._sortedMaterialRenderers.clear();this._materialRenderers.forAll((a,b)=>{a.priority=b;this._sortedMaterialRenderers.push(a)});this._sortedMaterialRenderers.sort((a,b)=>b.material.renderPriority===a.material.renderPriority?a.priority-b.priority:b.material.renderPriority-a.material.renderPriority)}_processAddsRemoves(){this._changes.adds.clear();
this._changes.removes.clear();this._changes.adds.pushArray(Array.from(this._pending.adds));this._changes.removes.pushArray(Array.from(this._pending.removes));for(let a=0;a<this._changes.updates.length;)this._pending.has(this._changes.updates.data[a].renderGeometry)?this._changes.updates.removeUnorderedIndex(a):a++;this._pending.clear()}_intersectRenderGeometry(a,b,d,f,c,e){if(a.visible){var h=0;f+=a.transformation[12];h=a.transformation[13];r[0]=d[0]-f;r[1]=d[1]-h;a.screenToWorldRatio=this.rendererContext.screenToWorldRatio;
a.material.intersectDraped(a,null,c,r,(n,p,E)=>{C(b,E,a.material.renderPriority,e,c,a.layerUid,a.graphicUid)},b)}}_notifyGraphicGeometryChanged(a){if(null!=this.drapeSource.notifyGraphicGeometryChanged)for(const d of a)if(a=d.graphicUid,null!=a&&a!==b){this.drapeSource.notifyGraphicGeometryChanged(a);var b=a}}_notifyGraphicVisibilityChanged(a){if(null!=this.drapeSource.notifyGraphicVisibilityChanged)for(const d of a)if(a=d.graphicUid,null!=a&&a!==b){this.drapeSource.notifyGraphicVisibilityChanged(a);
var b=a}}_validateRenderGeometries(a){for(const b of a)this._validateRenderGeometry(b);return a}_validateRenderGeometry(a){null==a.localOrigin&&(a.localOrigin=this._localOriginFactory.getOrigin(a.boundingSphere));return a}get test(){return{sortedMaterialRenderers:this._sortedMaterialRenderers}}};k.__decorate([l.property()],g.SortedRenderGeometryRenderer.prototype,"drapeSource",void 0);k.__decorate([l.property()],g.SortedRenderGeometryRenderer.prototype,"updating",null);k.__decorate([l.property()],
g.SortedRenderGeometryRenderer.prototype,"rctx",null);k.__decorate([l.property({constructOnly:!0})],g.SortedRenderGeometryRenderer.prototype,"rendererContext",void 0);k.__decorate([l.property()],g.SortedRenderGeometryRenderer.prototype,"_materialRepository",null);k.__decorate([l.property()],g.SortedRenderGeometryRenderer.prototype,"_localOriginFactory",null);k.__decorate([l.property({readOnly:!0})],g.SortedRenderGeometryRenderer.prototype,"isEmpty",null);k.__decorate([l.property()],g.SortedRenderGeometryRenderer.prototype,
"_materialRenderers",void 0);k.__decorate([l.property()],g.SortedRenderGeometryRenderer.prototype,"_geometries",void 0);g.SortedRenderGeometryRenderer=k.__decorate([v.subclass("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],g.SortedRenderGeometryRenderer);class D{constructor(){this.adds=new Set;this.removes=new Set;this.removed=new Set}get empty(){return 0===this.adds.size&&0===this.removes.size&&0===this.removed.size}has(a){return this.adds.has(a)||this.removes.has(a)||this.removed.has(a)}clear(){this.adds.clear();
this.removes.clear();this.removed.clear()}}const r=w.create();Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});