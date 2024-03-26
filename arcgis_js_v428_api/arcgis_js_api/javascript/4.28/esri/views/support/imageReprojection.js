// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../request ../../geometry/Point ../../geometry/projection ../../layers/support/rasterFunctions/rasterProjectionHelper ../2d/engine/Bitmap ../2d/engine/webgl/VertexStream ../2d/engine/webgl/shaders/MaterialPrograms ../webgl/enums ../webgl/FramebufferObject ../webgl/rasterUtils ../webgl/RenderingContext ../webgl/Texture ../webgl/TextureDescriptor".split(" "),function(l,v,m,w,n,p,x,y,h,z,A,B,C,q){class f{constructor(a){this._ownsRctx=!1;if(a)this._ownsRctx=!1,this._rctx=a;else{if(f._instance)return f._instanceRefCount++,
f._instance;f._instanceRefCount=1;f._instance=this;this._ownsRctx=!0;a=document.createElement("canvas").getContext("webgl");a.getExtension("OES_texture_float");this._rctx=new B.RenderingContext(a,{})}a=y.createProgramTemplate("raster/reproject","raster/reproject",new Map([["a_position",0]]),{applyProjection:!0,bilinear:!1,bicubic:!1});this._program=this._rctx.programCache.acquire(a.shaders.vertexShader,a.shaders.fragmentShader,a.attributes);this._rctx.useProgram(this._program);this._program.setUniform1f("u_opacity",
1);this._program.setUniform1i("u_image",0);this._program.setUniform1i("u_flipY",0);this._program.setUniform1i("u_transformGrid",1);this._quad=new x(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(a,b,e=!1){const c=w.project(a.extent,b);var g=new m({x:(a.extent.xmax-a.extent.xmin)/a.texture.descriptor.width,y:(a.extent.ymax-a.extent.ymin)/a.texture.descriptor.height,spatialReference:a.extent.spatialReference});const {x:D,y:E}=n.projectResolution(g,b,a.extent);var d=(D+E)/2;b=Math.round((c.xmax-c.xmin)/
d);g=Math.round((c.ymax-c.ymin)/d);d=(c.width/b+c.height/g)/2;d=new m({x:d,y:d,spatialReference:c.spatialReference});const k=n.getProjectionOffsetGrid({projectedExtent:c,srcBufferExtent:a.extent,pixelSize:d,hasWrapAround:!0,spacing:[16,16]}),r=A.createTransformTexture(this._rctx,k);d=new q.TextureDescriptor(b,g);d.wrapMode=h.TextureWrapMode.CLAMP_TO_EDGE;d=new z.FramebufferObject(this._rctx,d);this._rctx.bindFramebuffer(d);this._rctx.setViewport(0,0,b,g);this._rctx.useProgram(this._program);this._rctx.bindTexture(a.texture,
0);this._rctx.bindTexture(r,1);this._quad.bind();const {width:F=0,height:G=0}=a.texture.descriptor;this._program.setUniform2f("u_srcImageSize",F,G);this._program.setUniform2fv("u_transformSpacing",k.spacing);this._program.setUniform2fv("u_transformGridSize",k.size);this._program.setUniform2f("u_targetImageSize",b,g);this._quad.draw();this._quad.unbind();this._rctx.useProgram(null);this._rctx.bindFramebuffer(null);r.dispose();if(e){const {width:t,height:u}=d;a=new ImageData(t??0,u??0);d.readPixels(0,
0,t??0,u??0,h.PixelFormat.RGBA,h.PixelType.UNSIGNED_BYTE,a.data);e=d.detachColorTexture(h.ColorAttachment.COLOR_ATTACHMENT0);d.dispose();return{texture:e,extent:c,imageData:a}}a=d.detachColorTexture(h.ColorAttachment.COLOR_ATTACHMENT0);d.dispose();return{texture:a,extent:c}}reprojectBitmapData(a,b){var e=p.isImageSource(a.bitmapData)?p.rasterize(a.bitmapData):a.bitmapData;const c=new q.TextureDescriptor;c.wrapMode=h.TextureWrapMode.CLAMP_TO_EDGE;c.width=a.bitmapData.width;c.height=a.bitmapData.height;
e=new C.Texture(this._rctx,c,e);a=this.reprojectTexture({texture:e,extent:a.extent},b,!0);a.texture.dispose();b=document.createElement("canvas");e=a.imageData;b.width=e.width;b.height=e.height;b.getContext("2d").putImageData(e,0,0);return{bitmapData:b,extent:a.extent}}async loadAndReprojectBitmapData(a,b,e){a=(await v(a,{responseType:"image"})).data;const c=document.createElement("canvas");c.width=a.width;c.height=a.height;const g=c.getContext("2d");g.drawImage(a,0,0);a=g.getImageData(0,0,c.width,
c.height);if(b.spatialReference.equals(e))return{bitmapData:a,extent:b};b=this.reprojectBitmapData({bitmapData:a,extent:b},e);return{bitmapData:b.bitmapData,extent:b.extent}}destroy(){this._ownsRctx?(f._instanceRefCount--,0===f._instanceRefCount&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),f._instance=null)):(this._quad.dispose(),this._program.dispose())}}f._instanceRefCount=0;l.ImageReprojector=f;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});