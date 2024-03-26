// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../core/maybe ../../../chunks/mat4 ../../../chunks/mat4f64 ./AtmosphereType ../../../chunks/SimpleAtmosphere.glsl ./SimpleAtmosphereTechnique ./SimpleAtmosphereTechniqueConfiguration ./resources/SimpleAtmosphereTexture ../support/buffer/glUtil ../support/buffer/InterleavedLayout ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/GeometryUtil ../webgl-engine/lib/VertexArrayObject ../webgl-engine/lib/VertexAttribute ../../webgl/BufferObject ../../webgl/enums ../../webgl/Texture ../../webgl/TextureDescriptor ../../webgl/Util".split(" "),
function(k,p,q,r,t,u,v,l,w,x,y,z,A,B,C,D,f,E,F,G){class H{constructor(b,a){this.type=t.AtmosphereType.Local;this._configuration=new l.SimpleAtmosphereTechniqueConfiguration;this._passParameters=new u.SimpleAtmospherePassParameters;this._configuration.geometry=l.SimpleAtmosphereGeometry.Cylinder;this._technique=a.techniqueRepository.acquire(v.SimpleAtmosphereTechnique,this._configuration);b=a.renderContext.rctx;this._vao=this._createVertexArrayObject(b);this._vaoCount=G.vertexCount(this._vao,"geometry");
a=new F.TextureDescriptor;a.wrapMode=f.TextureWrapMode.CLAMP_TO_EDGE;a.flipped=!0;a.width=1;a.height=512;this._passParameters.texture=new E.Texture(b,a,w.earthAtmosphereTextureSimple)}destroy(){this._passParameters.texture=p.disposeMaybe(this._passParameters.texture);this._vao.dispose();this._technique.release()}render(b){const a=b.rctx,e=a.bindTechnique(this._technique,this._passParameters,b.bindParameters);var d=m;q.copy(d,b.bindParameters.camera.viewMatrix);d[12]=0;d[13]=0;d[14]=0;d[15]=1;e.setUniformMatrix4fv("view",
m);a.bindVAO(this._vao);e.assertCompatibleVertexAttributeLocations(this._vao);a.drawArrays(f.PrimitiveType.TRIANGLES,0,this._vaoCount)}renderHaze(){return!1}_createVertexArrayObject(b){var a=A.createPolySphereData(1,2,!1);const {data:e,indices:d}=a[0][1];a=n.createBuffer(d.length);const g=a.position;for(let c=0;c<d.length;++c){const h=3*d[0===c%3?c+2:2===c%3?c-2:c];g.set(c,0,e[h]);g.set(c,1,e[h+1]);g.set(c,2,e[h+2])}return new B.VertexArrayObject(b,z.Default3D,{geometry:x.glLayout(n)},{geometry:D.BufferObject.createVertex(b,
f.Usage.STATIC_DRAW,a.buffer)})}}const m=r.create(),n=y.newLayout().vec3f(C.VertexAttribute.POSITION);k.LocalAtmosphere=H;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});