// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/screenUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec3f64 ../../../../../geometry/support/axisAngle ../../../../../chunks/sphere ../../../camera/constraintUtils ../../../camera/constraintUtils/InteractionType ./MomentumController ../../utils/navigationUtils".split(" "),
function(b,c,l,d,r,t,u,m,h,k,n,p,f,q,g){b.ZoomSphericalMomentumController=class extends q.MomentumController{set screenCenter(a){this._set("screenCenter",l.createScreenPointArray(a[0],a[1]))}set sceneCenter(a){this._set("sceneCenter",h.clone(a))}constructor(a){super(a);this.interactionType=f.InteractionType.ZOOM;this.radius=0;this._tmpSceneCenter=h.create();this._tmpZoomAxisAngle=k.create();this._sphere=n.create()}initialize(){this._sphere[3]=this.radius}momentumStep(a,e){a=this.momentum.valueDelta(0,
a);g.applyZoomOnSphere(this._sphere,e,a);this.constraintOptions.interactionType=f.InteractionType.ZOOM;p.applyAll(this.view,e,this.constraintOptions);g.sphereOrPlanePointFromScreenPoint(this._sphere,e,this.screenCenter,this._tmpSceneCenter);k.fromPoints(this.sceneCenter,this._tmpSceneCenter,this._tmpZoomAxisAngle);g.applyRotation(e,this._sphere,this._tmpZoomAxisAngle);this.constraintOptions.interactionType=f.InteractionType.PAN}};c.__decorate([d.property({constructOnly:!0})],b.ZoomSphericalMomentumController.prototype,
"momentum",void 0);c.__decorate([d.property({constructOnly:!0})],b.ZoomSphericalMomentumController.prototype,"screenCenter",null);c.__decorate([d.property({constructOnly:!0})],b.ZoomSphericalMomentumController.prototype,"sceneCenter",null);c.__decorate([d.property({constructOnly:!0})],b.ZoomSphericalMomentumController.prototype,"radius",void 0);b.ZoomSphericalMomentumController=c.__decorate([m.subclass("esri.views.3d.state.controllers.momentum.ZoomSphericalMomentumController")],b.ZoomSphericalMomentumController);
Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});