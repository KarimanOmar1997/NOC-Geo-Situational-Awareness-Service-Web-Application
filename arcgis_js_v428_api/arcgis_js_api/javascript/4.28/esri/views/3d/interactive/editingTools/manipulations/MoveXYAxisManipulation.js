// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../Color ../../../../../core/Evented ../../../../../core/Handles ../../../../../core/handleUtils ../../../../../core/maybe ../../../../../core/reactiveUtils ../../../../../chunks/mat4 ../../../../../chunks/mat4f64 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64 ../../../../../geometry/support/vectorStacks ../../../../../support/elevationInfoUtils ../../Manipulator3D ../../RenderObject ../dragEventPipeline3D ../ManipulatorType ./config ./Manipulation ./moveUtils ../../../webgl-engine/lib/basicInterfaces ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/lib/Material ../../../webgl-engine/materials/ColorMaterial ../../../../interactive/dragEventPipeline ../../../../interactive/interfaces".split(" "),
function(v,C,D,E,F,G,w,g,H,r,x,f,I,J,y,K,z,m,L,M,N,A,O,P,q,B){class Q extends L.Manipulation{constructor(a){super();this._handles=new E;this._arrowManipulatorInfos=[];this._angle=0;this._scale=1;this._radius=m.discRadius;this._updateAfterDrag=!1;this.events=new D;this._tool=a.tool;this._view=a.view;this._opaqueMaterial=this._createMaterial();this._transparentMaterial=this._createMaterial(.5);null!=a.radius&&(this._radius=a.radius);this._createManipulators();this.forEachManipulator(b=>this._tool.manipulators.add(b))}set orthogonalAvailable(a){3<=
this._arrowManipulatorInfos.length&&(this._arrowManipulatorInfos[1].manipulator.available=a,this._arrowManipulatorInfos[3].manipulator.available=a)}destroy(){this._handles=G.destroyMaybe(this._handles);this.forEachManipulator(a=>{this._tool.manipulators.remove(a);a.destroy()});this._view=this._tool=null;this._arrowManipulatorInfos.length=0}forEachManipulator(a){for(const {manipulator:b}of this._arrowManipulatorInfos)a(b,z.ManipulatorType.TRANSLATE_XY)}createGraphicDragPipeline(a,b,c){const d=b.graphic,
e=I.getGraphicEffectiveElevationInfo(d),h=d.geometry.spatialReference;return M.createGraphicMoveDragPipeline(d,c,k=>this.createDragPipeline((l,n,p,t,u)=>{({steps:n,cancel:p}=a(l,n,p,t,u));return k(l,n,p)},e,h,d),this._view.state.viewingMode)}createDragPipeline(a,b,c,d){return F.handlesGroup(this._arrowManipulatorInfos.map(({manipulator:e},h)=>q.createManipulatorDragEventPipeline(e,(k,l,n,p,t)=>{l=l.next(u=>({...u,manipulatorType:z.ManipulatorType.TRANSLATE_XY})).next(q.dragAtLocation(this._view,k.elevationAlignedLocation)).next(K.screenToMapXYAtLocation(this._view,
k.elevationAlignedLocation,b,c,d)).next(q.constrainToMapAxis(k.location,this.angle+(h+1)*Math.PI*.5)).next(q.addScreenDelta());a(k,l,n,p,t)})))}get angle(){return this._angle}set angle(a){this._angle=a;this.dragging?this._updateAfterDrag=!0:this._updateManipulatorTransform()}get displayScale(){return this._scale}set displayScale(a){this._scale=a;this._updateManipulatorTransform()}get radius(){return this._radius}set radius(a){this._radius!==a&&(this._radius=a,this._updateManipulators())}_updateManipulators(){for(let a=
0;a<this._arrowManipulatorInfos.length;a++)this._updateArrowManipulator(this._arrowManipulatorInfos[a],a);this._updateManipulatorTransform()}_updateArrowManipulator({manipulator:a,transform:b},c){var d=this._radius/m.discRadius,e=m.discTranslateArrowSize*d;const h=e*Math.sqrt(3)/2;e=A.createExtrudedTriangle(this._opaqueMaterial,h,e/2,e/2,m.discHeight);A.transformInPlace(e,g.fromTranslation(f.sm4d.get(),r.set(f.sv3d.get(),0,-h/3,0)));a.renderObjects=[new y.RenderObject(e,B.ManipulatorStateFlags.Focused),
new y.RenderObject(e.instantiate({material:this._transparentMaterial}),B.ManipulatorStateFlags.Unfocused)];a.radius=h/3*2.4;a=g.fromZRotation(f.sm4d.get(),c*Math.PI/2);d=g.fromTranslation(f.sm4d.get(),r.set(f.sv3d.get(),0,m.discTranslateArrowOffset*d,0));g.multiply(b,a,d)}_createManipulators(){for(let a=0;4>a;a++){const b=this._createArrowManipulator(a);this._arrowManipulatorInfos.push(b)}this._updateManipulatorTransform()}_updateManipulatorTransform(){var a=this.angle;a=g.fromRotation(f.sm4d.get(),
a,x.fromValues(0,0,1));if(null!=a){var b=g.fromScaling(f.sm4d.get(),r.set(f.sv3d.get(),this.displayScale,this.displayScale,this.displayScale));a=g.multiply(f.sm4d.get(),b,a);for(const c of this._arrowManipulatorInfos)b=g.multiply(f.sm4d.get(),a,c.transform),c.manipulator.modelTransform=b}}_createArrowManipulator(a){const b=new J.Manipulator3D({view:this._view,autoScaleRenderObjects:!1,worldOriented:!0,focusMultiplier:1,touchMultiplier:1,collisionType:{type:"disc",direction:x.fromValues(0,0,1)}}),
c={manipulator:b,transform:H.create()};this._updateArrowManipulator(c,a);this._handles.add(b.events.on("drag",d=>{this._updateAfterDrag&&"end"===d.action&&!this.dragging&&(this._updateManipulatorTransform(),this._updateAfterDrag=!1)}));return c}_createMaterial(a=1){const b=new P.ColorMaterial({cullFace:N.CullFaceOptions.Back,renderOccluded:O.RenderOccludedFlag.Transparent,isDecoration:!0});this._handles.add(w.watch(()=>C.toUnitRGBA(this._view.effectiveTheme.accentColor),c=>{c[3]*=a;b.setParameters({color:c})},
w.initial));return b}get test(){return{arrowManipulators:this._arrowManipulatorInfos.map(({manipulator:a})=>a)}}}v.MoveXYAxisManipulation=Q;Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});