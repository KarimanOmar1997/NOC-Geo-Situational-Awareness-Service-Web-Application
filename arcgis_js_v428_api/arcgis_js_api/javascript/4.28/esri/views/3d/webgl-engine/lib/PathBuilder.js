// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/typedArrayUtil","../../../../geometry/support/FloatArray","../../../../geometry/support/Indices"],function(q,u,n,p){class v{constructor(d,c,f,a,g,b={}){this.path=d;this.profile=c;this.extruder=f;this.startCap=a;this.endCap=g;this.options=b;this._extrusionVertexCount=0;a=this.path.vertices.length-2;this.numExtrusionProfiles=f.numProfilesPerJoin()*a+2;this.numVerticesTotal=c.vertices.length*this.numExtrusionProfiles;this.startCap.vertexBufferStart=this.numVerticesTotal;
this.numVerticesTotal+=this.startCap.numVertices;this.endCap.vertexBufferStart=this.numVerticesTotal;this.numVerticesTotal+=this.endCap.numVertices;this.pathVertexData=p.newIntArray(1*this.numVerticesTotal);this.profileRightAxes=n.newFloatArray(4*this.numVerticesTotal);this.profileUpAxes=n.newFloatArray(4*this.numVerticesTotal);this.profileVertexAndNormals=n.newFloatArray(4*this.numVerticesTotal);this.positions=n.floatSubArray(d.positions,d.offset,3*d.vertices.length);this._rebuildGeometry();this.buildTopology()}get usedMemory(){return u.estimateSize(this.pathVertexData,
this.profileRightAxes,this.profileUpAxes,this.profileVertexAndNormals)+this.path.usedMemory+this.profile.usedMemory}emitVertex(d,c,f,a,g){const b=4*this._extrusionVertexCount;this.profileRightAxes[b]=c.right[0];this.profileRightAxes[b+1]=c.right[1];this.profileRightAxes[b+2]=c.right[2];this.profileUpAxes[b]=c.up[0];this.profileUpAxes[b+1]=c.up[1];this.profileUpAxes[b+2]=c.up[2];this.profileVertexAndNormals[b]=f[0];this.profileVertexAndNormals[b+1]=f[1];this.profileVertexAndNormals[b+2]=a[0];this.profileVertexAndNormals[b+
3]=a[1];this.pathVertexData[this._extrusionVertexCount]=d;g?(d=this.path.vertices[d],c=d.maxStretchDistance,this.profileRightAxes[b+3]=d.rotationRight[0]*c,this.profileUpAxes[b+3]=d.rotationRight[1]*c):(this.profileRightAxes[b+3]=0,this.profileUpAxes[b+3]=0);++this._extrusionVertexCount}emitCapVertex(d,c,f,a,g,b){const e=4*this._extrusionVertexCount;this.profileRightAxes[e]=c.right[0];this.profileRightAxes[e+1]=c.right[1];this.profileRightAxes[e+2]=c.right[2];this.profileRightAxes[e+3]=g;this.profileUpAxes[e]=
c.up[0];this.profileUpAxes[e+1]=c.up[1];this.profileUpAxes[e+2]=c.up[2];this.profileUpAxes[e+3]=b;this.profileVertexAndNormals[e]=f[0];this.profileVertexAndNormals[e+1]=f[1];this.profileVertexAndNormals[e+2]=a[0];this.profileVertexAndNormals[e+3]=a[1];this.pathVertexData[this._extrusionVertexCount]=d;++this._extrusionVertexCount}_rebuildGeometry(){this._extrusionVertexCount=0;const {positions:d,offset:c,vertices:f}=this.path;this.positions=n.floatSubArray(d,c,3*f.length);let a=0;const g=(e,h,k,l,
m)=>this.emitCapVertex(a,e,h,k,l,m),b=(e,h,k,l)=>this.emitVertex(a,e,h,k,l);this.startCap.rebuildConnectingProfileGeometry(f[a],this.profile,g);for(a=1;a<f.length-1;++a)this.extruder.extrude(f[a],this.profile,b);this.endCap.rebuildConnectingProfileGeometry(f[a],this.profile,g);a=0;this.startCap.rebuildCapGeometry(f[a],g);a=f.length-1;this.endCap.rebuildCapGeometry(f[a],g)}buildTopology(){const d=this.profile.vertices.length,c=this.profile.numSegments,f=this.numExtrusionProfiles-1;var a=c*f*6;this.startCap.indexBufferStart=
a;this.startCap.firstProfileVertexIndex=0;a+=this.startCap.numIndices;this.endCap.indexBufferStart=a;this.endCap.firstProfileVertexIndex=d*(this.numExtrusionProfiles-1);const g=[],b=[],e=[];a=(h,k,l)=>{g.push(h);g.push(k);g.push(l);b.push(h);b.push(k);b.push(l);e.push(this.pathVertexData[h]);e.push(this.pathVertexData[k]);e.push(this.pathVertexData[l])};for(let h=0;h<c;++h){const k=this.profile.indices[2*h],l=this.profile.indices[2*h+1];for(let m=0;m<f;++m){const r=m*d+k,t=(m+1)*d+l,w=m*d+l;a(r,(m+
1)*d+k,t);a(r,t,w)}}this.startCap.buildTopology(this.path.vertices[0],a);this.endCap.buildTopology(this.path.vertices[this.path.vertices.length-1],a);this.vertexIndices=p.compactIndices(g);this.normalIndices=p.compactIndices(b);this.pathVertexIndices=p.compactIndices(e)}onPathChanged(){this._rebuildGeometry()}}q.PathBuilder=v;Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});