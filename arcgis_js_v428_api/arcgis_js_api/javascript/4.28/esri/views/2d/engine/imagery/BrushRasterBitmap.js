// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../../core/maybe ./RasterBitmap ./colorizer/rasterColorizer ./processor/rasterProcessor ../webgl/definitions ../webgl/VertexStream ../webgl/brushes/WGLBrush ../../../webgl/enums ../../../webgl/FramebufferObject ../../../webgl/rasterUtils".split(" "),function(m,v,w,r,t,u,x,k,y,n){class z extends x{constructor(){super(...arguments);this.name="raster";this._quad=null;this._rendererUniformInfos=new Map;this._fbo=null}dispose(){m.disposeMaybe(this._quad);m.disposeMaybe(this._fbo)}prepareState(b){const {context:a,
renderPass:c}=b;b="raster"===c;a.setBlendingEnabled(!b);a.setBlendFunctionSeparate(k.BlendFactor.ONE,k.BlendFactor.ONE_MINUS_SRC_ALPHA,k.BlendFactor.ONE,k.BlendFactor.ONE_MINUS_SRC_ALPHA);a.setColorMask(!0,!0,!0,!0);a.setStencilWriteMask(0);a.setStencilTestEnabled(!b)}draw(b,a){if(v.hasSource(a)&&!a.suspended){var {renderPass:c}=b;if("raster-bitmap"===c)this._drawBitmap(b,a);else{if("raster"===c)return this._process(b,a);this._drawBitmap(b,a,!0)}}}_process(b,a){var {rasterFunction:c}=b;c="Reproject"===
c.name;if(!(c?a.rasterTexture&&a.projected:a.processed)){var {timeline:d,context:e}=b;d.begin(this.name);var f=e.getBoundFramebufferObject(),g=e.getViewport();c||(a.processedTexture=m.disposeMaybe(a.processedTexture));e.setStencilFunction(k.CompareFunction.EQUAL,a.stencilRef,255);a.updateTexture(b);this._initQuad(e);var [l,p]=a.getRasterTextureSize(c),{isStandardRasterTileSize:q,fbo:h}=this._getRasterFBO(e,l,p);r.process(b,this._quad,h,a);q||h.dispose();e.bindFramebuffer(f);e.setViewport(g.x,g.y,
g.width,g.height);d.end(this.name)}}_drawBitmap(b,a,c=!1){const {timeline:d,context:e}=b;d.begin(this.name);e.setStencilFunction(k.CompareFunction.EQUAL,a.stencilRef,255);a.updateTexture(b);if(c&&!a.processedTexture){a.updateProcessedTexture();if(!a.processedTexture){d.end(this.name);return}a.processed=!0}this._initBitmapCommonUniforms(a);var f=a.symbolizerParameters.type;const g=w.getColorizer(f),{requestRender:l,allowDelayedRender:p}=b,{defines:q,program:h}=g.createProgram(b,a,a.projected&&c);p&&
null!=l&&!h.compiled?l():(e.useProgram(h),f=this._getUniformInfos(f,e,h,q),this._quad||(this._quad=new u(e,[0,0,1,0,0,1,1,1])),g.bindTextureAndUniforms(b,h,a,f,c),this._quad.draw(),d.end(this.name))}_initBitmapCommonUniforms(b){if(!b.commonUniforms){const a=n.getBasicGridUniforms(1,[0,0]),{transformGrid:c,width:d,height:e}=b,f=n.getCommonUniforms(c,[d,e],[b.source.width,b.source.height],1,!1);b.commonUniforms={...a,...f,u_coordScale:b.coordScale}}}_getRasterFBO(b,a,c){const d=a===t.tileSize&&c===
t.tileSize;return d?(this._fbo||(this._fbo=this._createNewFBO(b,a,c)),{isStandardRasterTileSize:d,fbo:this._fbo}):{isStandardRasterTileSize:d,fbo:this._createNewFBO(b,a,c)}}_createNewFBO(b,a,c){a=r.createTextureDescriptor(b,a,c);return new y.FramebufferObject(b,a)}_initQuad(b){this._quad||(this._quad=new u(b,[0,0,1,0,0,1,1,1]))}_getUniformInfos(b,a,c,d){b=0<d.length?b+"-"+d.join("-"):b;if(this._rendererUniformInfos.has(b))return this._rendererUniformInfos.get(b);a=n.getUniformLocationInfos(a,c);this._rendererUniformInfos.set(b,
a);return a}}return z});