// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../Manipulator3D","./GrabbingState","./ManipulatorType"],function(e,f,b,c){class g{constructor(){this.grabbingState=b.GrabbingState.NONE;this.firstSelected=this.zManipulator=null;this.numSelected=0;this.firstGrabbedXY=null}update(h){this.grabbingState=b.GrabbingState.NONE;this.zManipulator=null;this.numSelected=0;this.firstGrabbedXY=this.firstSelected=null;h.forEachManipulator((a,d)=>{d===c.ManipulatorType.TRANSLATE_Z&&(this.zManipulator=a);a instanceof f.Manipulator3D&&(a.selected&&
(0===this.numSelected&&(this.firstSelected=a),this.numSelected++),null==this.firstGrabbedXY&&a.grabbing&&d===c.ManipulatorType.TRANSLATE_XY&&(this.firstGrabbedXY=a));if(a.grabbing)switch(this.grabbingState|=b.GrabbingState.ANY,d){case c.ManipulatorType.TRANSLATE_Z:this.grabbingState|=b.GrabbingState.Z;break;case c.ManipulatorType.TRANSLATE_XY:this.grabbingState|=b.GrabbingState.XY}})}}e.ManipulatorState=g;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});