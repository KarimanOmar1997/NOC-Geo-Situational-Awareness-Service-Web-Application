// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/Error ../../../../core/lang ../../../../core/Logger ./LEPCC ../../webgl-engine/lib/VertexAttribute".split(" "),function(h,n,M,N,D,u){function y(a,b){const c={byteOffset:0,byteCount:0,fields:Object.create(null)};let e=0;for(let f=0;f<b.length;f++){const g=b[f],d=g.valueType||g.type;c.fields[g.property]=(0,E[d])(a,e);e+=v[d].BYTES_PER_ELEMENT}c.byteCount=e;return c}function F(a,b,c){return z(a,b,c).map(e=>(e=e?Date.parse(e):null)&&!Number.isNaN(e)?e:null)}function z(a,
b,c){const e=[];let f,g=0,d;for(d=0;d<a;d+=1){f=b[d];if(0<f){var l=e,p=l.push,q=c,r=g,x=f-1;let t="",m=0;for(;m<x;){var k=q[r+m];if(128>k)t+=String.fromCharCode(k),m++;else if(192<=k&&224>k){if(m+1>=x)throw new n("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");t+=String.fromCharCode((k&31)<<6|q[r+m+1]&63);m+=2}else if(224<=k&&240>k){if(m+2>=x)throw new n("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");t+=String.fromCharCode((k&15)<<12|
(q[r+m+1]&63)<<6|q[r+m+2]&63);m+=3}else if(240<=k&&248>k){if(m+3>=x)throw new n("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");k=(k&7)<<18|(q[r+m+1]&63)<<12|(q[r+m+2]&63)<<6|q[r+m+3]&63;t=65536<=k?t+String.fromCharCode((k-65536>>10)+55296,(k&1023)+56320):t+String.fromCharCode(k);m+=4}else throw new n("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");}p.call(l,t);if(0!==c[g+f-1])throw new n("string-array-error","Invalid string array: missing null termination.");
}else e.push(null);g+=f}return e}function A(a,b){return new v[b.valueType](a,b.byteOffset,b.count*b.valuesPerElement)}function G(a,b){return new Uint8Array(a,b.byteOffset,b.byteCount)}function H(a,b,c){a=null!=b.header?y(a,b.header):{byteOffset:0,byteCount:0,fields:{count:c}};c={header:a,byteOffset:a.byteCount,byteCount:0,entries:Object.create(null)};let e=a.byteCount;for(let f=0;f<b.ordering.length;f++){const g=b.ordering[f],d=M.clone(b[g]);d.count=a.fields.count??0;if("String"===d.valueType){d.byteOffset=
e;d.byteCount=a.fields[g+"ByteCount"];if("UTF-8"!==d.encoding)throw new n("unsupported-encoding","Unsupported String encoding.",{encoding:d.encoding});if(d.timeEncoding&&"ECMA_ISO8601"!==d.timeEncoding)throw new n("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:d.timeEncoding});}else if(B(d.valueType)){const l=w(d.valueType);e+=0!==e%l?l-e%l:0;d.byteOffset=e;d.byteCount=l*d.valuesPerElement*d.count}else throw new n("unsupported-value-type","Unsupported binary valueType",{valueType:d.valueType});
e+=d.byteCount??0;c.entries[g]=d}c.byteCount=e-c.byteOffset;return c}function I(a,b,c){b!==a&&C.error(`Invalid ${c} buffer size\n expected: ${a}, actual: ${b})`);if(b<a)throw new n("buffer-too-small","Binary buffer is too small",{expectedSize:a,actualSize:b});}function J(a){return{isDraco:!1,isLegacy:!1,color:null!=a.color,normal:null!=a.normal,uv0:null!=a.uv0,uvRegion:null!=a.uvRegion,featureIndex:null!=a.faceRange&&null!=a.featureId}}function K(a){const b={isDraco:!1,isLegacy:!0,color:!1,normal:!1,
uv0:!1,uvRegion:!1,featureIndex:!1};for(const c of a.ordering)if(a.vertexAttributes[c])switch(c){case "normal":b.normal=!0;break;case "color":b.color=!0;break;case "uv0":b.uv0=!0;break;case "region":b.uvRegion=!0}a.featureAttributes&&a.featureAttributeOrder&&(b.featureIndex=!0);return b}function L(a){const b={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const c of a)switch(c){case "normal":b.normal=!0;break;case "uv0":b.uv0=!0;break;case "color":b.color=!0;break;
case "uv-region":b.uvRegion=!0;break;case "feature-index":b.featureIndex=!0}return b}function B(a){return v.hasOwnProperty(a)}function w(a){return B(a)?v[a].BYTES_PER_ELEMENT:0}const C=N.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader"),O={position:u.VertexAttribute.POSITION,normal:u.VertexAttribute.NORMAL,color:u.VertexAttribute.COLOR,uv0:u.VertexAttribute.UV0,region:u.VertexAttribute.UVREGION},v={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,
UInt32:Uint32Array,Int32:Int32Array},E={Float32:(a,b)=>(new DataView(a,0)).getFloat32(b,!0),Float64:(a,b)=>(new DataView(a,0)).getFloat64(b,!0),UInt8:(a,b)=>(new DataView(a,0)).getUint8(b),Int8:(a,b)=>(new DataView(a,0)).getInt8(b),UInt16:(a,b)=>(new DataView(a,0)).getUint16(b,!0),Int16:(a,b)=>(new DataView(a,0)).getInt16(b,!0),UInt32:(a,b)=>(new DataView(a,0)).getUint32(b,!0),Int32:(a,b)=>(new DataView(a,0)).getInt32(b,!0)};h.createAttributeDataIndex=H;h.createGeometryDescriptor=function(a,b){return a&&
a.compressedAttributes&&"draco"===a.compressedAttributes.encoding?L(a.compressedAttributes.attributes):a?J(a):K(b)};h.createGeometryDescriptorForDraco=L;h.createGeometryDescriptorFromDefinition=J;h.createGeometryDescriptorFromSchema=K;h.createGeometryIndexFromSchema=function(a,b){var c=y(a,b&&b.header);let e=c.byteCount;const f={isDraco:!1,header:c,byteOffset:c.byteCount,byteCount:0,vertexAttributes:{}};c=c.fields;var g=null!=c.vertexCount?c.vertexCount:c.count;for(var d of b.ordering){if(!b.vertexAttributes[d])continue;
const p={...b.vertexAttributes[d],byteOffset:e,count:g};f.vertexAttributes[O[d]||"_"+d]=p;e+=w(p.valueType)*p.valuesPerElement*g}d=c.faceCount;if(b.faces&&d){f.faces={};for(var l of b.ordering)b.faces[l]&&(g={...b.faces[l],byteOffset:e,count:d},f.faces[l]=g,e+=w(g.valueType)*g.valuesPerElement*d)}l=c.featureCount;if(b.featureAttributes&&b.featureAttributeOrder&&l){f.featureAttributes={};for(const p of b.featureAttributeOrder)b.featureAttributes[p]&&(c={...b.featureAttributes[p],byteOffset:e,count:l},
f.featureAttributes[p]=c,d="UInt64"===c.valueType?8:w(c.valueType),e+=d*c.valuesPerElement*l)}I(e,a.byteLength,"geometry");f.byteCount=e-f.byteOffset;return f};h.createRawView=G;h.createTypedView=A;h.getBytesPerValue=w;h.isValueType=B;h.readBinaryAttribute=function(a,b,c){if("lepcc-rgb"===a.encoding)return D.decodeRGB(b);if("lepcc-intensity"===a.encoding)return D.decodeIntensity(b);if(null!=a.encoding&&""!==a.encoding)throw new n("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");
a["attributeByteCounts "]&&!a.attributeByteCounts&&(C.warn("Warning: Trailing space in 'attributeByteCounts '."),a.attributeByteCounts=a["attributeByteCounts "]);"ObjectIds"===a.ordering[0]&&a.hasOwnProperty("objectIds")&&(C.warn("Warning: Case error in objectIds"),a.ordering[0]="objectIds");c=H(b,a,c);I(c.byteOffset+c.byteCount,b.byteLength,"attribute");if(a=c.entries.attributeValues||c.entries.objectIds){if("String"===a.valueType){c=c.entries.attributeByteCounts;const e=A(b,c);b=G(b,a);return a.timeEncoding?
F(c.count,e,b):z(c.count,e,b)}return A(b,a)}throw new n("bad-attribute-storage-info","Bad attributeStorageInfo specification.");};h.readDateStringArray=F;h.readHeader=y;h.readStringArray=z;h.valueType2ArrayBufferReader=E;h.valueType2TypedArrayClassMap=v;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});