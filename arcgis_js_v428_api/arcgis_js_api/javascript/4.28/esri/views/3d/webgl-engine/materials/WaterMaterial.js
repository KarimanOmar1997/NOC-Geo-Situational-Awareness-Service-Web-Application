// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/time ../../../../chunks/vec2f64 ../../../../chunks/vec3f64 ../../../../chunks/vec4f64 ../core/shaderLibrary/ShaderOutput ../lib/AnimationTimer ../lib/Material ../lib/OrderIndependentTransparency ../lib/RenderSlot ./DefaultBufferWriter ./DefaultLayouts ./TriangleMaterial ./WaterGLMaterial ./WaterTechnique".split(" "),function(e,h,k,l,m,n,d,p,q,r,c,t,f,u,v,w){class x extends u.TriangleMaterial{constructor(a){super(a,new g);this._configuration=new w.WaterTechniqueConfiguration;
this._animation=new p.AnimationTimer}getConfiguration(a,b){this._configuration.output=a;this._configuration.writeDepth=this.parameters.writeDepth;this._configuration.receiveShadows=this.parameters.receiveShadows;this._configuration.hasSlicePlane=this.parameters.hasSlicePlane;this._configuration.transparent=this.parameters.transparent;this._configuration.hasScreenSpaceReflections=this.parameters.hasScreenSpaceReflections;this._configuration.hasCloudsReflections=this.parameters.hasCloudsReflections;
this._configuration.isDraped=this.parameters.isDraped;this._configuration.transparencyPassType=b.transparencyPassType;this._configuration.enableOffset=b.camera.relativeElevation<r.OITPolygonOffsetLimit;this._configuration.multipassEnabled=b.multipassEnabled;this._configuration.cullAboveGround=b.multipassTerrain.cullAboveGround;return this._configuration}update(a){this._animation.enabled=35E3>Math.sqrt(this.parameters.waveTextureRepeat/this.parameters.waveStrength)*Math.min(a.camera.relativeElevation,
a.camera.distance);a=this._animation.advance(a);this.setParameters({timeElapsed:k.secondsFromMilliseconds(this._animation.time)*this.parameters.animationSpeed},!1);return this._animation.enabled&&a}produces(a,b){switch(b){case d.ShaderOutput.Normal:return a===c.RenderSlot.DRAPED_WATER;case d.ShaderOutput.Color:if(this.parameters.isDraped)return a===c.RenderSlot.DRAPED_MATERIAL;break;case d.ShaderOutput.Alpha:break;case d.ShaderOutput.Highlight:case d.ShaderOutput.ObjectAndLayerIdColor:return a===
c.RenderSlot.OPAQUE_MATERIAL||a===c.RenderSlot.DRAPED_MATERIAL;default:return!1}b=c.RenderSlot.OPAQUE_MATERIAL;this.parameters.transparent&&(b=this.parameters.writeDepth?c.RenderSlot.TRANSPARENT_MATERIAL:c.RenderSlot.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL);return a===b}createGLMaterial(a){return new v.WaterGLMaterial(a)}createBufferWriter(){return new t.DefaultBufferWriter(h("enable-feature:objectAndLayerId-rendering")?f.PositionUVLayoutObjectAndLayerId:f.PositionUVLayout)}get test(){return{animationEnabled:this._animation.enabled}}}
class g extends q.MaterialParameters{constructor(){super(...arguments);this.waveStrength=.06;this.waveTextureRepeat=32;this.waveDirection=l.fromValues(1,0);this.waveVelocity=.05;this.flowStrength=.015;this.flowOffset=-.5;this.animationSpeed=.35;this.timeElapsed=0;this.color=n.fromValues(0,0,0,0);this.writeDepth=this.transparent=!0;this.isDraped=this.hasSlicePlane=!1;this.receiveShadows=!0;this.hasCloudsReflections=this.hasScreenSpaceReflections=!1;this.origin=m.create();this.modelTransformation=null}}
e.WaterMaterial=x;e.WaterMaterialParameters=g;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});