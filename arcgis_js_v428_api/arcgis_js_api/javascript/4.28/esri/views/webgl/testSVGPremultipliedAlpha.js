// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../2d/engine/webgl/DefaultVertexAttributeLayouts ./BufferObject ./enums ./FramebufferObject ./Texture ./TextureDescriptor ./VertexArrayObject ./WebGLDriverTestModule".split(" "),function(h,m,n,b,p,q,k,r,t){class u extends t.WebGLDriverTestModule{constructor(c){super();this._rctx=c;this._program=c.programCache.acquire("\n    precision highp float;\n\n    attribute vec2 a_pos;\n    varying vec2 v_uv;\n\n    void main() {\n      v_uv \x3d a_pos;\n      gl_Position \x3d vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ",
"\n    precision highp float;\n\n    varying vec2 v_uv;\n\n    uniform sampler2D u_texture;\n\n    void main() {\n      gl_FragColor \x3d texture2D(u_texture, v_uv);\n    }\n    ",new Map([["a_pos",0]]))}dispose(){super.dispose()}_test(c){const a=this._rctx;if(!a.gl)return c.dispose(),!0;var d=new k.TextureDescriptor(1);d.wrapMode=b.TextureWrapMode.CLAMP_TO_EDGE;d.samplingMode=b.TextureSamplingMode.NEAREST;d=new p.FramebufferObject(a,d);var g=n.BufferObject.createVertex(a,b.Usage.STATIC_DRAW,new Uint16Array([0,
0,1,0,0,1,1,1]));g=new r.VertexArrayObject(a,new Map([["a_pos",0]]),m.Pos2us,{geometry:g});var e=new k.TextureDescriptor;e.samplingMode=b.TextureSamplingMode.LINEAR;e.wrapMode=b.TextureWrapMode.CLAMP_TO_EDGE;e=new q.Texture(a,e,f);a.useProgram(c);a.bindTexture(e,0);c.setUniform1i("u_texture",0);c=a.getBoundFramebufferObject();const {x:v,y:w,width:x,height:y}=a.getViewport();a.bindFramebuffer(d);a.setViewport(0,0,1,1);a.setClearColor(0,0,0,0);a.setBlendingEnabled(!1);a.clearSafe(b.ClearBufferBit.COLOR_BUFFER_BIT);
a.bindVAO(g);a.drawArrays(b.PrimitiveType.TRIANGLE_STRIP,0,4);const l=new Uint8Array(4);d.readPixels(0,0,1,1,b.PixelFormat.RGBA,b.PixelType.UNSIGNED_BYTE,l);g.dispose();d.dispose();e.dispose();a.setViewport(v,w,x,y);a.bindFramebuffer(c);return 255!==l[0]}}const f=new Image;f.src="data:image/svg+xml,%3C%3Fxml version\x3d'1.0' encoding\x3d'UTF-8'%3F%3E%3Csvg width\x3d'5' height\x3d'5' version\x3d'1.1' viewBox\x3d'0 0 5 5' xmlns\x3d'http://www.w3.org/2000/svg'%3E%3Crect width\x3d'5' height\x3d'5' fill\x3d'%23f00' fill-opacity\x3d'.5'/%3E%3C/svg%3E%0A";
f.width=5;f.height=5;f.decode();h.SVGPremultipliedAlpha=u;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});