// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/mathUtils ../../../../chunks/mat2 ../../../../chunks/mat2f64 ../../../../chunks/vec2 ../../../../chunks/vec2f64 ../../../../chunks/vec3 ../../../../chunks/vec3f64 ./PathExtruder ./PathGeometry".split(" "),function(r,l,A,B,t,v,a,d,C,w){class u{constructor(){this.vLeft=d.create();this.vRight=d.create();this.vMinSiblingLength=0;this.frame=new C.Frame2D}setFrameFromUpVector(b){a.copy(this.frame.up,b);a.add(m,this.vLeft,this.vRight);a.normalize(m,m);a.scale(x,this.frame.up,
a.dot(m,this.frame.up));a.subtract(p,m,x);a.normalize(p,p);a.cross(this.frame.right,p,this.frame.up)}get foldingAngle(){return Math.PI-this.rotationAngle}}class D extends u{get rotationFrameUp(){return this.frame.up}get rotationRight(){return v.UNIT_X}get rotationAngle(){a.scale(f,this.frame.up,a.dot(this.frame.up,this.vLeft));a.subtract(f,this.vLeft,f);a.negate(f,f);a.normalize(f,f);a.scale(h,this.frame.up,a.dot(this.frame.up,this.vRight));a.subtract(h,this.vRight,h);a.normalize(h,h);a.cross(q,this.rotationFrameUp,
this.vLeft);return Math.sign(a.dot(q,this.vRight))*(Math.PI-l.acosClamped(a.dot(f,h)))}get maxStretchDistance(){return Math.abs(this.vMinSiblingLength/Math.cos(.5*this.foldingAngle))}applyMiterStretch(b,e){var c=this.rotationAngle;if(0>=Math.abs(c))return e;c=l.reciprocalClamped(Math.cos(.5*c));return t.set(b,(1+(c-1))*e[0],e[1])}}class E extends u{get rotationFrameUp(){const b=Math.sign(a.dot(this.frame.right,this.vRight));a.cross(n,this.vRight,this.vLeft);a.scale(n,n,b);return a.normalize(n,n)}get rotationRight(){var b=
this.rotationFrameUp,e=a.dot(b,this.frame.up);b=a.dot(b,this.frame.right);a.scale(k,this.frame.up,-b);a.scale(y,this.frame.right,e);a.add(k,k,y);a.normalize(k,k);e=this.frame;b=k;t.set(z,a.dot(b,e.right),a.dot(b,e.up));return z}get rotationAngle(){const b=Math.sign(a.dot(this.frame.right,this.vRight));a.negate(q,this.vLeft);return-b*(Math.PI-l.acosClamped(a.dot(q,this.vRight)))}get maxStretchDistance(){return Math.abs(this.vMinSiblingLength*l.reciprocalClamped(Math.cos(.5*this.foldingAngle)))}applyMiterStretch(b,
e){var c=this.rotationAngle;if(0===Math.abs(c))return e;c=l.reciprocalClamped(Math.cos(.5*c));const g=this.rotationRight;c=A.set(F,1+(c-1)*g[0]*g[0],(c-1)*g[0]*g[1],(c-1)*g[0]*g[1],1+(c-1)*g[1]*g[1]);return t.transformMat2(b,e,c)}}const n=d.create(),z=v.create(),k=d.create(),y=d.create(),q=d.create(),f=d.create(),h=d.create(),x=d.create(),m=d.create(),p=d.create(),F=B.create();r.PathVertex=u;r.newPathVertex=function(b){switch(b){case w.UpVectorAlignment.World:return new D;case w.UpVectorAlignment.Path:return new E}};
Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});