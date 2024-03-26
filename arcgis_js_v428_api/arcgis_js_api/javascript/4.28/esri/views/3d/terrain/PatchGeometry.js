// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../core/maybe ../../../chunks/vec3 ../../../geometry/support/aaBoundingBox ./terrainUtils ../webgl-engine/lib/Normals".split(" "),function(f,l,m,n,p,h){function k(a,c,d,b){a.setValues(c,16384*d,16384*b)}class q{constructor(){this.vertexAttributes=this.indices=null;this.boundingBox=n.empty();this.numVerticesPerSide=this.indexCount=0;this.uvRange=[0,0,1,1];this.outerEdges=[null,null,null,null];this.innerEdges=[null,null,null,null]}release(){this.vertexAttributes=l.releaseMaybe(this.vertexAttributes);
this.indices=null}}class r{constructor(a,c,d,b,e){this.attributes=a;this.localOrigin=c;this.index0=d;this.stride=b;this.count=e}getVertexIndex(a){return this.getAttributeIndex(a)}getAttributeIndex(a){p.internalAssert(0<=a&&a<this.count);return this.index0+this.stride*a}_getVertexRaw(a,c){this.attributes.position.getVec(a,c)}getVertexPos(a,c){this._getVertexRaw(this.getAttributeIndex(c),a);m.add(a,a,this.localOrigin)}getNormal(a,c){const {typedBuffer:d,typedBufferStride:b}=this.attributes.normalCompressed;
h.decompressNormal(a,d,this.getAttributeIndex(c),b)}_setNormal(a,c,d,b){const {typedBuffer:e,typedBufferStride:g}=this.attributes.normalCompressed;h.compressNormal(e,a,c,d,b,g)}_setUV(a,c,d){k(this.attributes.uv0,a,c,d)}setNormalFromValues(a,c,d,b){this._setNormal(this.getAttributeIndex(a),c,d,b)}setVertexFromValuesRawPositionUV(a,c,d,b,e,g){a=this.getAttributeIndex(a);this.attributes.position.setValues(a,c,d,b);this._setUV(a,e,g)}setVertexFromValuesRawPositionUVNormal(a,c,d,b,e,g,t,u,v){a=this.getAttributeIndex(a);
this.attributes.position.setValues(a,c,d,b);this._setUV(a,e,g);this._setNormal(a,t,u,v)}}f.EdgeDescriptor=r;f.PatchGeometry=q;f.encodeUVInBuffer=k;f.minMaxBoundingBox=function(a,c,d,b){a<b[0]?b[0]=a:a>b[3]&&(b[3]=a);c<b[1]?b[1]=c:c>b[4]&&(b[4]=c);d<b[2]?b[2]=d:d>b[5]&&(b[5]=d)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});