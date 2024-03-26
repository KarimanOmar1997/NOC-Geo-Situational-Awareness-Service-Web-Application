// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/CloudsComposition.glsl ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/Program ../../webgl/enums ../../webgl/renderState".split(" "),function(f,e,g,h,k,l,m,n,a,c){class d extends k.ShaderTechnique{constructor(b){super(b,new l.ShaderTechniqueConfiguration,()=>
this.destroy())}initializeProgram(b){return new n.Program(b.rctx,d.shader.get().build(),m.Default3D)}initializePipeline(){return c.makePipelineState({blending:c.separateBlendingParams(a.BlendFactor.ONE,a.BlendFactor.ZERO,a.BlendFactor.SRC_ALPHA,a.BlendFactor.ONE),depthTest:{func:a.CompareFunction.LEQUAL},colorWrite:c.defaultColorWriteParams})}}d.shader=new h.ReloadableShaderModule(g.CloudsCompositionShader,()=>new Promise((b,p)=>f(["./CloudsComposition.glsl"],b,p)));e.CloudsCompositionTechnique=d;
Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});