// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/vec3f64","../shaderLibrary/ShaderOutput","../shaderLibrary/attributes/VertexNormal.glsl"],function(a,e,f,d){class c extends d.VertexNormalPassParameters{constructor(){super(...arguments);this.origin=this.slicePlaneLocalOrigin=e.create();this.modelTransformation=null}}class g extends d.VertexNormalDrawParameters{}a.RenderPassIdentifier=void 0;(function(b){b[b.Material=0]="Material";b[b.ShadowMap=1]="ShadowMap";b[b.Highlight=2]="Highlight"})(a.RenderPassIdentifier||
(a.RenderPassIdentifier={}));class h extends c{constructor(){super(...arguments);this.identifier=a.RenderPassIdentifier.Material;this.output=f.ShaderOutput.Color;this.transparent=!1}}class k extends c{constructor(){super(...arguments);this.identifier=a.RenderPassIdentifier.ShadowMap}}class l extends c{constructor(){super(...arguments);this.identifier=a.RenderPassIdentifier.Highlight}}a.DrawParameters=g;a.HighlightPassParameters=l;a.MaterialPassParameters=h;a.PassParameters=c;a.ShadowMapPassParameters=
k;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});