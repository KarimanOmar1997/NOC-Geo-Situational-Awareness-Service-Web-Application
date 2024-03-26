// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/vec2 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ../../sketch/constraints ../../sketch/normalizedPoint ../SnappingDomain ../snappingUtils ./SnappingCandidate ../hints/LineSnappingHint ../hints/RightAngleSnappingHint".split(" "),function(c,f,g,h,k,l,m,d,n,e,p){class q extends n.SnappingCandidate{constructor({targetPoint:r,point1:a,point2:b,isDraped:t}){super(r,new k.VerticalCylinderConstraint(l.fromVec3(g.lerp(h.create(),a,b,.5)),.5*f.distance(a,b)),t,m.SnappingDomain.SELF);
this._p1=a;this._p2=b}get hints(){return[new e.LineSnappingHint(d.LineSegmentHintType.REFERENCE,this.targetPoint,this._p1,this.isDraped,this.domain),new e.LineSnappingHint(d.LineSegmentHintType.REFERENCE,this.targetPoint,this._p2,this.isDraped,this.domain),new p.RightAngleSnappingHint(this._p1,this.targetPoint,this._p2,this.isDraped,this.domain)]}}c.RightAngleTriangleSnappingCandidate=q;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});