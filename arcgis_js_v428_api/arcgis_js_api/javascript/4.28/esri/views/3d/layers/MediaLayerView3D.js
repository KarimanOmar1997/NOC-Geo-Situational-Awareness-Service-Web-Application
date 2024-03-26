// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Error ../../../core/handleUtils ../../../core/perspectiveUtils ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../chunks/mat3f64 ../../../geometry/support/aaBoundingRect ../../../layers/support/MediaElementView ./interfaces ./LayerView3D ../terrain/OverlayRenderer ../webgl-engine/lib/Attribute ../webgl-engine/lib/Geometry ../webgl-engine/lib/ModelDirtyTypes ../webgl-engine/lib/RenderGeometry ../webgl-engine/lib/Texture ../webgl-engine/lib/UpdatePolicy ../webgl-engine/lib/VertexAttribute ../webgl-engine/materials/ImageMaterial ../../layers/LayerView ../../webgl/enums".split(" "),
function(p,y,q,z,u,v,w,g,O,P,A,B,C,D,E,F,m,r,G,n,H,I,J,h,K,L,x){g=class extends F.LayerView3D(L){constructor(){super(...arguments);this.type="media-3d";this.drapeSourceType=E.DrapeSourceType.RasterImage;this.updatePolicy=J.UpdatePolicy.ASYNC;this._uidToElement=new Map;this._renderedElements=new Map;this._lastDrapingExtent=null;this._update=u.debounce(async(a,b,c)=>{a=await this._collectMediaElements(a,b,c);this._synchronizeRenderElements(a)},0)}initialize(){this._renderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this);
const a=()=>this._updateWithLastDrapingExtent();this.addHandles([q.makeHandle(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this)),v.on(()=>this.layer.effectiveSource,"change",a),v.on(()=>this.layer.effectiveSource,"refresh",a)]);this._updatingHandles.add(()=>this.suspended,a)}setDrapingExtent(a,b){this._lastDrapingExtent={overlays:a,spatialReference:b};this._updateWithLastDrapingExtent()}getHit(a){return(a=this._uidToElement.get(a))?{type:"media",element:a,layer:this.layer}:null}_updateWithLastDrapingExtent(){if(null==
this._lastDrapingExtent||this.suspended)this._renderer&&this._synchronizeRenderElements(new Set);else{var {overlays:a,spatialReference:b}=this._lastDrapingExtent;this._updatingHandles.addPromise(this._update(a,b).catch(()=>{}))}}async _collectMediaElements(a,b,c){const d=this.layer.effectiveSource;return null==d?new Set:new Set((await Promise.all(a.map(e=>d.queryElements(C.toExtent(e.extent,b),{signal:c})))).flat())}_synchronizeRenderElements(a){this._synchronizeRenderElementsRemove(a);this._synchronizeRenderElementsAdd(a)}_synchronizeRenderElementsRemove(a){const b=
new Set,c=[];this._renderedElements.forEach((d,e)=>{a.has(e)||(b.add(e),null!=d.renderData&&c.push(d.renderData.renderGeometry),this._removeElement(e,d))});this._renderer.removeGeometries(c,n.DirtyOperation.REMOVE)}_synchronizeRenderElementsAdd(a){for(const b of a)this._renderedElements.has(b)||this._createRenderElement(b)}_removeElement(a,{renderData:b,handle:c}){this._destroyRenderData(b);this._renderedElements.delete(a);this._uidToElement.delete(a.uid);c.remove()}async _createRenderElement(a){const b=
new D.MediaElementView({spatialReference:this.view.spatialReference,element:a}),c={renderData:null,handle:q.handlesGroup([this._updatingHandles.add(()=>a.opacity,d=>{null!=c.renderData&&c.renderData.material.setParameters({opacity:d})}),this._updatingHandles.add(()=>b.coords,()=>{null!=c.renderData?this._updateGeometry(b,c,c.renderData):this._initializeRenderData(b,c)}),this._updatingHandles.add(()=>a.content,()=>this._initializeRenderData(b,c)),q.destroyHandle(b)])};this._renderedElements.set(a,
c);this._uidToElement.set(a.uid,a);this._updatingHandles.addPromise(a.load().catch(()=>{}));this._initializeRenderData(b,c)}_initializeRenderData(a,b){const {coords:c,element:d}=a,{contentWidth:e,contentHeight:M}=d;if(null==c||null==d.content)b.renderData=this._destroyRenderData(b.renderData);else if(null==b.renderData){a=this._createTexture(d.content);var k=a.load(this.view._stage.renderView.renderingContext);this.view._stage.add(a);u.isPromiseLike(k)&&this._updatingHandles.addPromise(k);k=new K.ImageMaterial({initTextureTransparent:!0,
textureId:a.id,opacity:d.opacity,transparent:!0,perspectiveInterpolation:!0});var f=this._getPositionAttributeArray(c),N=this._getPerspectiveDivideAttributeArray(f,e,M),t=[0,1,2,0,2,3];f=new G.Geometry(k,[[h.VertexAttribute.POSITION,new r.Attribute(f,t,3,!0)],[h.VertexAttribute.UV0,new r.Attribute([0,0,1,0,1,1,0,1],t,2,!0)],[h.VertexAttribute.PERSPECTIVEDIVIDE,new r.Attribute(N,t,1,!0)]]);f=new H.RenderGeometry(f,{layerUid:this.layer.uid,graphicUid:d.uid});this._renderer.addGeometries([f],n.DirtyOperation.ADD);
b.renderData={renderGeometry:f,texture:a,material:k}}}_updateGeometry(a,b,c){const {coords:d,element:e}=a;null==d||null==e.content?b.renderData=this._destroyRenderData(b.renderData):(a=this._getPositionAttributeArray(d),c.renderGeometry.geometry.setAttributeData(h.VertexAttribute.POSITION,a),a=this._getPerspectiveDivideAttributeArray(a,e.contentWidth,e.contentHeight),c.renderGeometry.geometry.setAttributeData(h.VertexAttribute.PERSPECTIVEDIVIDE,a),this._renderer.modifyGeometries([c.renderGeometry],
n.DirtyState.GEOMETRY))}_getPositionAttributeArray(a){const [b,c,d,e]=a.rings[0];return[b[0],b[1],m.drapedZ,e[0],e[1],m.drapedZ,d[0],d[1],m.drapedZ,c[0],c[1],m.drapedZ]}_getPerspectiveDivideAttributeArray(a,b,c){z.getProjectiveTransform(l,[0,0,b,0,b,c,0,c],[a[0],a[1],a[3],a[4],a[6],a[7],a[9],a[10]]);a=l[6]/l[8]*b;c*=l[7]/l[8];return[1,1+a,1+a+c,1+c]}_destroyRenderData(a){if(null==a)return null;const b=a.texture;b.unload();this.view._stage.remove(b);this._renderer.removeGeometries([a.renderGeometry],
n.DirtyOperation.REMOVE);return null}_createTexture(a){const b=a instanceof HTMLImageElement?a.naturalWidth:a.width,c=a instanceof HTMLImageElement?a.naturalHeight:a.height;if("getFrame"in a)throw new y("media-layer-view-3d","animation is not supported");return new I.Texture(a,{wrap:{s:x.TextureWrapMode.CLAMP_TO_EDGE,t:x.TextureWrapMode.CLAMP_TO_EDGE},preMultiplyAlpha:!0,width:b,height:c,mipmap:!0,updateCallback:()=>this.view.basemapTerrain.overlayManager.setDrawTexturesDirty()})}get test(){const a=
this;return{get numberOfElements(){return a._renderedElements.size}}}};p.__decorate([w.property({readOnly:!0})],g.prototype,"type",void 0);p.__decorate([w.property()],g.prototype,"layer",void 0);g=p.__decorate([A.subclass("esri.views.3d.layers.MediaLayerView3D")],g);const l=B.create();return g});