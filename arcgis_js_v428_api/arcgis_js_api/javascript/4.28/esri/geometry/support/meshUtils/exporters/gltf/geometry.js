// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../../Point"],function(r,h,p,v){const w=p.create(),x=p.create(),y=p.create(),k=p.create();r.computeOrigin=function(a){const {vertexSpace:q}=a;if(q.isRelative)return q.getOriginPoint(a.spatialReference);({extent:a}=a);return new v({x:a.xmax-a.width/2,y:a.ymax-a.height/2,z:a.zmin,spatialReference:a.spatialReference})};r.smoothNormals=function(a,q){if(a.components)for(const t of a.components)if(t.faces&&"smooth"===
t.shading){a=t;var l=q;null==l.normal&&(l.normal=new Float32Array(l.position.length));a=a.faces;const {position:d,normal:b}=l;l=a.length/3;for(let m=0;m<l;++m){const e=3*a[3*m],f=3*a[3*m+1],g=3*a[3*m+2];var c=h.set(w,d[e],d[e+1],d[e+2]),n=h.set(x,d[f],d[f+1],d[f+2]);const u=h.set(y,d[g],d[g+1],d[g+2]);n=h.subtract(n,n,c);c=h.subtract(u,u,c);c=h.cross(n,n,c);b[e]+=c[0];b[e+1]+=c[1];b[e+2]+=c[2];b[f]+=c[0];b[f+1]+=c[1];b[f+2]+=c[2];b[g]+=c[0];b[g+1]+=c[1];b[g+2]+=c[2]}for(a=0;a<b.length;a+=3)h.set(k,
b[a],b[a+1],b[a+2]),h.normalize(k,k),b[a]=k[0],b[a+1]=k[1],b[a+2]=k[2]}};Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});