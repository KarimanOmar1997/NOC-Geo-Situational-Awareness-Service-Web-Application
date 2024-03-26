// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/mathUtils","../../../../../chunks/vec3f64","../../../../../geometry/support/aaBoundingBox","../../materials/internal/MaterialUtil"],function(F,L,E,I,M){function N(a,e,b){let c=0,g=Infinity;for(let f=0;3>f;++f){var d=a[f];if(e[f]<d){if(1E-6>=b[f])return!1;c=Math.max(c,(d-e[f])/b[f])}else-1E-6>=b[f]&&(g=Math.min(g,(d-e[f])/b[f]));if(c>g)return!1;d=a[f+3];if(e[f]>d){if(-1E-6<=b[f])return!1;c=Math.max(c,(d-e[f])/b[f])}else 1E-6<=b[f]&&(g=Math.min(g,(d-e[f])/b[f]));
if(c>g)return!1}return!0}function O(a,e,b,c,g,d){let f=c;for(;b<f;){var h=a[b];e[6*h+g+3]<=d?++b:(--f,a[b]=a[f],a[f]=h)}h=b;for(f=c;h<f;)c=a[f-1],e[6*c+g]>=d?--f:(a[f-1]=a[h],a[h]=c,++h);return{next:b,mid:h}}function P(a,e,b,c){if(c<=b)return I.fromValues(NaN,NaN,NaN,NaN,NaN,NaN);var g=6*a[b];for(var d=0;3>d;++d)A[d]=e[g+0+d],B[d]=e[g+3+d];for(b+=1;b<c;++b)for(g=6*a[b],d=0;3>d;++d)A[d]=Math.min(A[d],e[g+0+d]),B[d]=Math.max(B[d],e[g+3+d]);return I.fromValues(A[0],A[1],A[2],B[0],B[1],B[2])}function Q(a){var e=
a[3]-a[0];const b=a[4]-a[1],c=a[5]-a[2];e=e>b?e>c?0:b>c?1:2:b>c?1:c>e?2:0;return{axis:e,midValue:(a[e]+a[e+3])/2}}function R(a,e,b,c,g){b-=e;const d=new Float32Array(6*b);for(let h=0;h<b;++h){var f=3*(h+e);const r=a[f]*g,m=a[f+1]*g;f=a[f+2]*g;for(let n=0;3>n;++n){const l=c[r+n],k=c[m+n],p=c[f+n];d[6*h+n]=Math.min(l,k,p);d[6*h+3+n]=Math.max(l,k,p)}}return d}function S(a,e,b,c){const g=c-b;var d=0;for(var f=b;f<c;++f)for(var h=0;3>h;++h)d=Math.max(e[3*f+h],d);c=65535>=d?new Uint16Array(3*g):new Uint32Array(3*
g);for(d=0;d<g;++d)for(f=3*(a[d]+b),h=0;3>h;++h)c[3*d+h]=e[f+h];return c}class J{constructor(a,e,b,c,g){this.aabb=a;this.axis=e;this.d=b;this.midStartIndex=c;this.rightStartIndex=g}}class C{constructor(a,e,b,c){this.globalTriangleVertexIndices=a;this.firstTriangleIndex=e;this.positions=c;this._rayDirection=E.create();this.bspNodeTree=[];const g=b-e,d=65535>=g?new Uint16Array(g):new Uint32Array(g);this.indices=d;for(let m=0;m<g;++m)d[m]=m;const f=R(a,e,b,c.data,c.stride),h=L.clamp(Math.log2(g/40),
2,10),r=(m,n,l)=>{var k=P(d,f,m,n);const p=n-m;if(40>=p)return m=new J(k,void 0,0,m,n),this.bspNodeTree.push(m),m;const {axis:q,midValue:u}=Q(k),v=O(d,f,m,n,q,u),z=(x,y)=>{if(!(l>h)){var t=y-x;if(!(40>t||t>=.8*p))return r(x,y,l+1)}};k=new J(k,q,u,v.next,v.mid);this.bspNodeTree.push(k);k.leftNode=z(m,v.next);k.rightNode=z(v.mid,n);return k};r(0,g,0);this.triangleVertexIndices=S(d,a,e,b)}intersectRayTriangleRange(a,e){if(!(a>=e)){var b=this.triangleVertexIndices,c=this.positions.data,g=this.positions.stride,
d=this._rayOrigin,f=d[0],h=d[1];d=d[2];var r=this._rayDirection,m=r[0],n=r[1];r=r[2];for(let G=a,H=3*a;G<e;++G){var l=b[H++]*g,k=c[l++],p=c[l++],q=c[l];l=b[H++]*g;var u=c[l++],v=c[l++],z=c[l];l=b[H++]*g;var x=c[l++],y=c[l++];u-=k;v-=p;z-=q;x-=k;y-=p;l=c[l]-q;var t=n*l-y*r,D=r*x-l*m;const K=m*y-x*n;var w=u*t+v*D+z*K;if(!(Math.abs(w)<=Number.EPSILON)){k=f-k;p=h-p;q=d-q;t=k*t+p*D+q*K;if(0<w){if(0>t||t>w)continue}else if(0<t||t<w)continue;D=p*z-v*q;q=q*u-z*k;p=k*v-u*p;k=m*D+n*q+r*p;if(0<w){if(0>k||t+
k>w)continue}else if(0<k||t+k<w)continue;q=(x*D+y*q+l*p)/w;0<=q&&(w=this.indices[G]+this.firstTriangleIndex,u=M.computeNormal(u,v,z,x,y,l,T),this._callback(q,u,w,!1))}}C.numFacesTested+=e-a}}intersectRay(a,e){C.numFacesTested=0;var b=E.fromValues(a.r0[0],a.r0[1],a.r0[2]),c=E.fromValues(a.r1[0],a.r1[1],a.r1[2]);a=c[0]-b[0];const g=c[1]-b[1];c=c[2]-b[2];1E-6>a*a+g*g+c*c||(this._rayOrigin=b,b=this._rayDirection,b[0]=a,b[1]=g,b[2]=c,b=this.triangleVertexIndices.length/3,this._callback=e,this.intersectRayBSP(this.bspNodeTree[0],
0,b))}intersectRayBSP(a,e,b){const c=this._rayOrigin,g=this._rayDirection;if(N(a.aabb,c,g)){var d=a.axis,f=a.d;if(c[d]<f||0>g[d]){const h=a.midStartIndex;if(e<h){const r=a.leftNode;void 0!==r?this.intersectRayBSP(r,e,h):this.intersectRayTriangleRange(e,h)}}this.intersectRayTriangleRange(a.midStartIndex,a.rightStartIndex);if(c[d]>f||0<g[d])e=a.rightStartIndex,e<b&&(a=a.rightNode,void 0!==a?this.intersectRayBSP(a,e,b):this.intersectRayTriangleRange(e,b))}}get estimatedMemoryUsage(){return this.triangleVertexIndices.byteLength+
this.indices.byteLength}}C.numFacesTested=0;const T=E.create(),A=[Infinity,Infinity,Infinity],B=[-Infinity,-Infinity,-Infinity];F.ComponentIntersectionData=C;F.componentMinimalSizeForIntersectionData=200;Object.defineProperty(F,Symbol.toStringTag,{value:"Module"})});