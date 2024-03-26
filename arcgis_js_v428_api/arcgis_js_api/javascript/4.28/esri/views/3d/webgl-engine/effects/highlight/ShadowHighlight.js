// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/colorUtils ../../../../../core/mathUtils ../../../../../core/reactiveUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../ViewingMode ../../core/shaderLibrary/shading/ReadShadowMap.glsl ../RenderPlugin ./HighlightDefaults ./ShadowHighlightTechnique ../../lib/RenderSlot".split(" "),
function(d,f,q,g,e,h,z,A,B,r,k,t,u,v,m,l,n,w){d.ShadowHighlight=class extends m.SyncRenderPlugin{constructor(a){super(a);this._maxOpacity=1;this._passParameters=new n.ShadowHighlightPassParameters;this._drawParameters=new v.ReadShadowMapDrawParameters;this._shadowDifference=.2;this._context=null;this.produces=new Map([[w.RenderSlot.SHADOW_HIGHLIGHT,()=>this._isVisible]])}consumes(){return m.ConsumesHighlight}initializeRenderContext(a){this._context=a;this.addHandles([e.watch(()=>this.view.highlightOptions.shadowOpacity,
b=>{this._passParameters.shadowOpacity=b??l.defaultShadowOpacity;this._updateOccludedShadowOpacity();this._updateMaxOpacity()},e.syncAndInitial),e.watch(()=>this.view.highlightOptions.shadowDifference,b=>{this._shadowDifference=b??l.defaultShadowDifference;this._updateOccludedShadowOpacity();this._updateMaxOpacity()},e.syncAndInitial),e.watch(()=>this.view.highlightOptions.shadowColor,b=>{this._passParameters.shadowColor=q.unitRGBAFromColor(b??l.defaultShadowColor);this._updateMaxOpacity()},e.syncAndInitial)])}_updateOccludedShadowOpacity(){this._passParameters.occludedShadowOpacity=
this._passParameters.shadowOpacity*(1-this._shadowDifference)}_updateMaxOpacity(){this._maxOpacity=Math.max(this._passParameters.shadowOpacity,this._passParameters.occludedShadowOpacity)*this._passParameters.shadowColor[3]}uninitializeRenderContext(){this._context=null}enable(){this._context&&null==this._technique&&(this._technique=this._context.techniqueRepository.acquire(n.ShadowHighlightTechnique))}renderNode(a,b,c,x){b=c?.highlight?.colorTexture;if(this._context&&c&&b&&this._isVisible)if(this._technique?.compiled){if(c=
a.bindParameters,c.shadowMap.enabled&&c.linearDepth){a=a.rctx;var y=this._technique;this._passParameters.highlight=b;this._drawParameters.origin=c.camera.center;a.bindFramebuffer(x?.fbo);a.bindTechnique(y,this._passParameters,c).bindDraw(this._drawParameters,c,this._passParameters);a.screen.draw()}}else this._context.requestRender()}updateParameters(a,b){this._passParameters.opacityElevation=1-g.smoothstep(4E4,5E4,a.relativeElevation);a=this.viewingMode===u.ViewingMode.Global?k.normalize(p,a.center):
k.set(p,0,0,1);b=k.dot(a,b);this._passParameters.dayNightTerminator=g.smoothstep(0,1,g.clamp(30*b,0,1));this._isVisible&&this.enable()}get _isVisible(){const {opacityElevation:a,dayNightTerminator:b}=this._passParameters;return.001953125<=this._maxOpacity*a*b}};f.__decorate([h.property()],d.ShadowHighlight.prototype,"_context",void 0);f.__decorate([h.property()],d.ShadowHighlight.prototype,"view",void 0);f.__decorate([h.property()],d.ShadowHighlight.prototype,"viewingMode",void 0);d.ShadowHighlight=
f.__decorate([r.subclass("esri.views.3d.webgl-engine.effects.highlight.ShadowHighlight")],d.ShadowHighlight);const p=t.create();Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});