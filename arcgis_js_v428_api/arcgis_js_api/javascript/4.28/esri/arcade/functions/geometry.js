// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../Dictionary ../executionError ../Feature ../ImmutablePathArray ../ImmutablePointArray ../../chunks/languageUtils ./centroid ../../geometry/Extent ../../geometry/Geometry ../../geometry/Multipoint ../../geometry/Point ../../geometry/Polygon ../../geometry/Polyline ../../geometry/support/coordsUtils ../../geometry/support/jsonUtils".split(" "),function(C,n,e,q,E,F,f,x,G,w,y,r,z,A,I,u){function B(g){return g&&"esri.arcade.Feature"===g.arcadeDeclaredClass}function D(g,h,c,d,b=1){h=h.toLowerCase();
switch(h){case "hasz":return g=g.hasZ,void 0===g?!1:g;case "hasm":return g=g.hasM,void 0===g?!1:g;case "spatialreference":return h=g.spatialReference._arcadeCacheId,void 0===h&&(c=!0,Object.freeze&&Object.isFrozen(g.spatialReference)&&(c=!1),c&&(v++,h=g.spatialReference._arcadeCacheId=v)),g=new n({wkt:g.spatialReference.wkt,wkid:g.spatialReference.wkid}),void 0!==h&&(g._arcadeCacheId="SPREF"+h.toString()),g}switch(g.type){case "extent":switch(h){case "xmin":case "xmax":case "ymin":case "ymax":case "zmin":case "zmax":case "mmin":case "mmax":return g=
g[h],void 0!==g?g:null;case "type":return"Extent"}break;case "polygon":switch(h){case "rings":return h=g.cache._arcadeCacheId,void 0===h&&(v++,h=v,g.cache._arcadeCacheId=h),new E(g.rings,g.spatialReference,!0===g.hasZ,!0===g.hasM,h);case "type":return"Polygon"}break;case "point":switch(h){case "x":case "y":case "z":case "m":return void 0!==g[h]?g[h]:null;case "type":return"Point"}break;case "polyline":switch(h){case "paths":return h=g.cache._arcadeCacheId,void 0===h&&(v++,h=v,g.cache._arcadeCacheId=
h),new E(g.paths,g.spatialReference,!0===g.hasZ,!0===g.hasM,h);case "type":return"Polyline"}break;case "multipoint":switch(h){case "points":return h=g.cache._arcadeCacheId,void 0===h&&(v++,h=v,g.cache._arcadeCacheId=h),new F(g.points,g.spatialReference,!0===g.hasZ,!0===g.hasM,h,1);case "type":return"Multipoint"}}if(1===b)throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidIdentifier,d);return 2===b?{keystate:"notfound"}:null}let v=0;C.geometryMember=D;C.registerFunctions=function(g,h){g.ringisclockwise=
function(c,d){return h(c,d,(b,m,a)=>{f.pcCheck(a,1,1,c,d);b=[];if(null===a[0])return!1;if(f.isArray(a[0]))for(const k of a[0])if(k instanceof r)b.push(k.hasZ?k.hasM?[k.x,k.y,k.z,k.m]:[k.x,k.y,k.z]:[k.x,k.y]);else throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);else if(a[0]instanceof F)b=a[0]._elements;else if(f.isImmutableArray(a[0]))for(const k of a[0].toArray())if(k instanceof r)b.push(k.hasZ?k.hasM?[k.x,k.y,k.z,k.m]:[k.x,k.y,k.z]:[k.x,k.y]);else throw new e.ArcadeExecutionError(c,
e.ExecutionErrorCodes.InvalidParameter,d);else throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);return 3>b.length?!1:I.isClockwise(b)})};g.polygon=function(c,d){return h(c,d,(b,m,a)=>{f.pcCheck(a,1,1,c,d);b=null;if(a[0]instanceof n){if(b=f.fixSpatialReference(q.parseGeometryFromDictionary(a[0]),c.spatialReference),!1===b instanceof z)throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);}else b=a[0]instanceof z?u.fromJSON(a[0].toJSON()):f.fixSpatialReference(new z(JSON.parse(a[0])),
c.spatialReference);if(null!==b&&!1===b.spatialReference.equals(c.spatialReference))throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.WrongSpatialReference,d);return f.fixNullGeometry(b)})};g.polyline=function(c,d){return h(c,d,(b,m,a)=>{f.pcCheck(a,1,1,c,d);b=null;if(a[0]instanceof n){if(b=f.fixSpatialReference(q.parseGeometryFromDictionary(a[0]),c.spatialReference),!1===b instanceof A)throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);}else b=a[0]instanceof A?u.fromJSON(a[0].toJSON()):
f.fixSpatialReference(new A(JSON.parse(a[0])),c.spatialReference);if(null!==b&&!1===b.spatialReference.equals(c.spatialReference))throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.WrongSpatialReference,d);return f.fixNullGeometry(b)})};g.point=function(c,d){return h(c,d,(b,m,a)=>{f.pcCheck(a,1,1,c,d);b=null;if(a[0]instanceof n){if(b=f.fixSpatialReference(q.parseGeometryFromDictionary(a[0]),c.spatialReference),!1===b instanceof r)throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,
d);}else b=a[0]instanceof r?u.fromJSON(a[0].toJSON()):f.fixSpatialReference(new r(JSON.parse(a[0])),c.spatialReference);if(null!==b&&!1===b.spatialReference.equals(c.spatialReference))throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.WrongSpatialReference,d);return f.fixNullGeometry(b)})};g.multipoint=function(c,d){return h(c,d,(b,m,a)=>{f.pcCheck(a,1,1,c,d);b=null;if(a[0]instanceof n){if(b=f.fixSpatialReference(q.parseGeometryFromDictionary(a[0]),c.spatialReference),!1===b instanceof y)throw new e.ArcadeExecutionError(c,
e.ExecutionErrorCodes.InvalidParameter,d);}else b=a[0]instanceof y?u.fromJSON(a[0].toJSON()):f.fixSpatialReference(new y(JSON.parse(a[0])),c.spatialReference);if(null!==b&&!1===b.spatialReference.equals(c.spatialReference))throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.WrongSpatialReference,d);return f.fixNullGeometry(b)})};g.extent=function(c,d){return h(c,d,(b,m,a)=>{a=f.autoCastFeatureToGeometry(a);f.pcCheck(a,1,1,c,d);b=null;a[0]instanceof n?b=f.fixSpatialReference(q.parseGeometryFromDictionary(a[0]),
c.spatialReference):a[0]instanceof r?(b={xmin:a[0].x,ymin:a[0].y,xmax:a[0].x,ymax:a[0].y,spatialReference:a[0].spatialReference.toJSON()},a=a[0],a.hasZ?(b.zmin=a.z,b.zmax=a.z):a.hasM&&(b.mmin=a.m,b.mmax=a.m),b=u.fromJSON(b)):b=a[0]instanceof z?u.fromJSON(a[0].extent?.toJSON()):a[0]instanceof A?u.fromJSON(a[0].extent?.toJSON()):a[0]instanceof y?u.fromJSON(a[0].extent?.toJSON()):a[0]instanceof G?u.fromJSON(a[0].toJSON()):f.fixSpatialReference(new G(JSON.parse(a[0])),c.spatialReference);if(null!==b&&
!1===b.spatialReference.equals(c.spatialReference))throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.WrongSpatialReference,d);return f.fixNullGeometry(b)})};g.geometry=function(c,d){return h(c,d,(b,m,a)=>{f.pcCheck(a,1,1,c,d);b=null;if(null===a[0])return null;b=B(a[0])?f.fixSpatialReference(a[0].geometry(),c.spatialReference):a[0]instanceof n?f.fixSpatialReference(q.parseGeometryFromDictionary(a[0]),c.spatialReference):f.fixSpatialReference(u.fromJSON(JSON.parse(a[0])),c.spatialReference);
if(null!==b&&!1===b.spatialReference.equals(c.spatialReference))throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.WrongSpatialReference,d);return f.fixNullGeometry(b)})};g.setgeometry=function(c,d){return h(c,d,(b,m,a)=>{f.pcCheck(a,2,2,c,d);if(B(a[0])){if(!0===a[0].immutable)throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.Immutable,d);if(a[1]instanceof w||null===a[1])a[0]._geometry=a[1];else throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);}else throw new e.ArcadeExecutionError(c,
e.ExecutionErrorCodes.InvalidParameter,d);return f.voidOperation})};g.feature=function(c,d){return h(c,d,(b,m,a)=>{if(0===a.length)throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.WrongNumberOfParameters,d);b=null;if(1===a.length)if(f.isString(a[0]))b=q.fromJson(JSON.parse(a[0]),c.timeZone);else if(B(a[0]))b=q.createFromArcadeFeature(a[0]);else if(a[0]instanceof w)b=q.createFromGraphicLikeObject(a[0],null,null,c.timeZone);else if(a[0]instanceof n)b=a[0].hasField("geometry")?a[0].field("geometry"):
null,a=a[0].hasField("attributes")?a[0].field("attributes"):null,null!==b&&b instanceof n&&(b=q.parseGeometryFromDictionary(b)),null!==a&&(a=q.parseAttributesFromDictionary(a)),b=q.createFromGraphicLikeObject(b,a,null,c.timeZone);else throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);else if(2===a.length){m=b=null;if(null!==a[0])if(a[0]instanceof w)b=a[0];else if(b instanceof n)b=q.parseGeometryFromDictionary(a[0]);else throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,
d);if(null!==a[1])if(a[1]instanceof n)m=q.parseAttributesFromDictionary(a[1]);else throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);b=q.createFromGraphicLikeObject(b,m,null,c.timeZone)}else{b=null;m={};if(null!==a[0])if(a[0]instanceof w)b=a[0];else if(b instanceof n)b=q.parseGeometryFromDictionary(a[0]);else throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);for(let k=1;k<a.length;k+=2){const p=f.toString(a[k]),l=a[k+1];if(null===l||void 0===l||
f.isString(l)||isNaN(l)||f.isDate(l)||f.isNumber(l)||f.isTime(l)||f.isDateOnly(l)||f.isBoolean(l)){if(f.isFunctionParameter(l)||!1===f.isSimpleType(l))throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);m[p]=l===f.voidOperation?null:l}else throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);}b=q.createFromGraphicLikeObject(b,m,null,c.timeZone)}b._geometry=f.fixSpatialReference(b.geometry(),c.spatialReference);b.immutable=!1;return b})};g.dictionary=
function(c,d){return h(c,d,(b,m,a)=>{if(0===a.length||1===a.length&&null===a[0])return a=new n,a.immutable=!1,a;if(1===a.length&&f.isString(a[0]))try{var k=JSON.parse(a[0]),p=n.convertObjectToArcadeDictionary(k,f.defaultTimeZone(c),!1);p.immutable=!1;return p}catch(l){throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);}if(1===a.length&&a[0]instanceof w)try{const l=a[0].toJSON();l.hasZ=!0===a[0].hasZ;l.hasM=!0===a[0].hasM;const t=n.convertObjectToArcadeDictionary(l,f.defaultTimeZone(c),
!1);t.immutable=!1;return t}catch(l){throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);}if(1===a.length&&f.isFeature(a[0]))try{const l=new n;l.immutable=!1;l.setField("geometry",a[0].geometry());const t=new n;t.immutable=!1;l.setField("attributes",t);for(const H of a[0].keys())t.setField(H,a[0].field(H));return l}catch(l){throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);}if(1===a.length&&a[0]instanceof n)try{const l=new n;l.immutable=!1;for(const t of a[0].keys())l.setField(t,
a[0].field(t));return l}catch(l){throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);}if(2===a.length&&a[0]instanceof n&&f.isBoolean(a[1]))try{if(!0!==a[1]){const l=new n;l.immutable=!1;for(const t of a[0].keys())l.setField(t,a[0].field(t));return l}return a[0].deepClone()}catch(l){throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);}if(0!==a.length%2)throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.WrongNumberOfParameters,d);b={};for(m=0;m<
a.length;m+=2)if(k=f.toString(a[m]),p=a[m+1],null===p||void 0===p||f.isString(p)||isNaN(p)||f.isDate(p)||f.isNumber(p)||f.isBoolean(p)||f.isDateOnly(p)||f.isTime(p)||f.isArray(p)||f.isImmutableArray(p)){if(f.isFunctionParameter(p))throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);b[k]=p===f.voidOperation?null:p}else throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);a=new n(b);a.immutable=!1;return a})};g.haskey=function(c,d){return h(c,d,(b,m,
a)=>{f.pcCheck(a,2,2,c,d);b=f.toString(a[1]);if(B(a[0])||a[0]instanceof n)return a[0].hasField(b);if(a[0]instanceof w)return(a=D(a[0],b,null,null,2))&&"notfound"===a.keystate?!1:!0;throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);})};g.hasvalue=function(c,d){return h(c,d,(b,m,a)=>{f.pcCheck(a,2,2,c,d);if(null===a[0]||null===a[1])return!1;b=f.toString(a[1]);return f.isFeature(a[0])||a[0]instanceof n?a[0].hasField(b)&&null!==a[0].field(b)?!0:!1:a[0]instanceof w?null===D(a[0],
b,null,null,0)?!1:!0:!1})};g.indexof=function(c,d){return h(c,d,(b,m,a)=>{f.pcCheck(a,2,2,c,d);b=a[1];if(f.isArray(a[0])){for(m=0;m<a[0].length;m++)if(f.equalityTest(b,a[0][m]))return m;return-1}if(f.isImmutableArray(a[0])){m=a[0].length();for(let k=0;k<m;k++)if(f.equalityTest(b,a[0].get(k)))return k;return-1}throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);})};g.angle=function(c,d){return h(c,d,(b,m,a)=>{a=f.autoCastFeatureToGeometry(a);f.pcCheck(a,2,3,c,d);if(!(a[0]instanceof
r))throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);if(!(a[1]instanceof r))throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);if(2<a.length&&!(a[2]instanceof r))throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);return 2===a.length?x.angle2D(a[0],a[1]):x.angleBetween2D(a[0],a[1],a[2])})};g.bearing=function(c,d){return h(c,d,(b,m,a)=>{a=f.autoCastFeatureToGeometry(a);f.pcCheck(a,2,3,c,d);if(!(a[0]instanceof r))throw new e.ArcadeExecutionError(c,
e.ExecutionErrorCodes.InvalidParameter,d);if(!(a[1]instanceof r))throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);if(2<a.length&&!(a[2]instanceof r))throw new e.ArcadeExecutionError(c,e.ExecutionErrorCodes.InvalidParameter,d);return 2===a.length?x.bearing2D(a[0],a[1]):x.bearingBetween2D(a[0],a[1],a[2])})};g.isselfintersecting=function(c,d){return h(c,d,(b,m,a)=>{a=f.autoCastFeatureToGeometry(a);f.pcCheck(a,1,1,c,d);b=a[0];if(b instanceof z)return b.isSelfIntersecting;if(b instanceof
A)return b=b.paths,x.pathsSelfIntersecting(b);if(b instanceof y)for(m=b.points,a=0;a<m.length;a++)for(let k=0;k<m.length;k++)if(k!==a){let p=!0;for(let l=0;l<m[a].length;l++)if(m[a][l]!==m[k][l]){p=!1;break}if(!0===p)return!0}return f.isArray(b)||f.isImmutableArray(b)?(b=f.autoCastArrayOfPointsToPolyline(b,c.spatialReference),null!==b&&(b=b.paths),x.pathsSelfIntersecting(b)):!1})}};Object.defineProperty(C,Symbol.toStringTag,{value:"Module"})});