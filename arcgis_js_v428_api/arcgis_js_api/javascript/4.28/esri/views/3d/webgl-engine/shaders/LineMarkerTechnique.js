// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("require exports ../core/shaderLibrary/ShaderOutput ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/OrderIndependentTransparency ../lib/Program ../lib/StencilUtils ../lib/TransparencyPassType ../lib/VertexAttribute ../../../../chunks/LineMarker.glsl ../../../webgl/renderState".split(" "),function(p,h,l,q,r,f,t,a,u,c,v,d){const m=new Map([[c.VertexAttribute.POSITION,0],[c.VertexAttribute.UV0,1],[c.VertexAttribute.AUXPOS1,2],[c.VertexAttribute.NORMAL,
3],[c.VertexAttribute.COLOR,4],[c.VertexAttribute.COLORFEATUREATTRIBUTE,4],[c.VertexAttribute.SIZE,5],[c.VertexAttribute.SIZEFEATUREATTRIBUTE,5],[c.VertexAttribute.OPACITYFEATUREATTRIBUTE,6]]);class k extends r.ShaderTechnique{initializeProgram(b){return new t.Program(b.rctx,k.shader.get().build(this.configuration),m)}_makePipelineState(b,g){const e=this.configuration,n=b===u.TransparencyPassType.NONE;return d.makePipelineState({blending:e.output===l.ShaderOutput.Color||e.output===l.ShaderOutput.Alpha?
n?f.blendingDefault:f.oitBlending(b):null,depthTest:{func:f.oitDepthTest(b)},depthWrite:n?e.writeDepth?d.defaultDepthWriteParams:null:f.oitDepthWrite(b),colorWrite:d.defaultColorWriteParams,stencilWrite:e.hasOccludees?a.stencilWriteMaskOn:null,stencilTest:e.hasOccludees?g?a.stencilToolMaskBaseParams:a.stencilBaseAllZerosParams:null,polygonOffset:{factor:0,units:-10}})}initializePipeline(){this.configuration.occluder&&(this._occluderPipelineTransparent=d.makePipelineState({blending:f.blendingDefault,
depthTest:a.depthCompareAlways,depthWrite:null,colorWrite:d.defaultColorWriteParams,stencilWrite:null,stencilTest:a.stencilToolTransparentOccluderParams}),this._occluderPipelineOpaque=d.makePipelineState({blending:f.blendingDefault,depthTest:a.depthCompareAlways,depthWrite:null,colorWrite:d.defaultColorWriteParams,stencilWrite:a.stencilWriteMaskOff,stencilTest:a.stencilToolMaskOccluderParams}),this._occluderPipelineMaskWrite=d.makePipelineState({blending:null,depthTest:a.depthCompareLess,depthWrite:null,
colorWrite:null,stencilWrite:a.stencilWriteMaskOn,stencilTest:a.stencilToolMaskBaseParams}));this._occludeePipelineState=this._makePipelineState(this.configuration.transparencyPassType,!0);return this._makePipelineState(this.configuration.transparencyPassType,!1)}getPipeline(b,g,e){return b?this._occludeePipelineState:this.configuration.occluder?e?this._occluderPipelineTransparent:g?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:super.getPipeline()}}k.shader=new q.ReloadableShaderModule(v.LineMarker,
()=>new Promise((b,g)=>p(["./LineMarker.glsl"],b,g)));h.LineMarkerTechnique=k;h.vertexAttributeLocations=m;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});