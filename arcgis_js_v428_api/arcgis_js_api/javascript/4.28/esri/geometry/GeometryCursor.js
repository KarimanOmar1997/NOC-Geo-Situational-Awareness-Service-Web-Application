// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../core/lang","./geometryCursorCollectUtils","./support/jsonUtils","../layers/graphics/OptimizedGeometry"],function(r,t,u,g,m){function v(a){if(g.isPolygon(a))a=[a.rings,"esriGeometryPolygon"];else if(g.isPolyline(a))a=[a.paths,"esriGeometryPolyline"];else if(g.isMultipoint(a))a=[[a.points],"esriGeometryMultipoint"];else if(g.isExtent(a))a=[[[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]],"esriGeometryEnvelope"];else if(g.isPoint(a)){const b=[a.x,
a.y];a.z&&b.push(a.z);a.m&&b.push(a.m);a=[[[b]],"esriGeometryPoint"]}else a=[[],"esriGeometryPolyline"];return a}class n{static fromOptimized(a,b,c=!1,d=!1){return(new k).initialize(a,b,c,d,1)}static fromJSON(a,b=!1,c=!1){const [d,e]=v(a);return(new l).initialize(d,e,b,c,1)}static fromOptimizedCIM(a,b,c=!1,d=!1){return(new p).initialize(a,b,c,d,1)}static fromJSONCIM(a,b=!1,c=!1){const [d,e]=v(a);return(new q).initialize(d,e,b,c,1)}static fromFeatureSetReader(a){const b=a.readGeometryForDisplay();
a=a.geometryType;return b&&a?this.fromOptimized(b,a):null}static fromFeatureSetReaderCIM(a){const b=a.readGeometryForDisplay();a=a.geometryType;return b&&a?this.fromOptimizedCIM(b,a):null}static createEmptyOptimized(a,b=!1,c=!1){return(new k).initialize(new m,a,b,c,1)}static createEmptyJSON(a,b=!1,c=!1){return(new l).initialize([],a,b,c,1)}static createEmptyOptimizedCIM(a,b=!1,c=!1){return(new p).initialize(new m,a,b,c,1)}static createEmptyJSONCIM(a,b=!1,c=!1){return(new q).initialize([],a,b,c,1)}asJSON(){const a=
u.collectMultipath(this);return"esriGeometryEnvelope"===this.geometryType?{xmin:a[0][0][0],ymin:a[0][0][1],xmax:a[0][2][0],ymax:a[0][2][1]}:"esriGeometryMultipoint"===this.geometryType?{points:a.flat()}:"esriGeometryPoint"===this.geometryType?{x:a[0][0][0],y:a[0][0][1]}:"esriGeometryPolygon"===this.geometryType?{rings:a}:{paths:a}}getCurrentRingArea(){if(!this||3>this.pathSize)return 0;let a=0,b,c;this.seekPathStart();if(!this.nextPoint())return 0;b=this.x;c=this.y;const d=b,e=c;for(;this.nextPoint();)a+=
(b-this.x)*(c+this.y),b=this.x,c=this.y;return-.5*(a+(b-d)*(c+e))}invertY(){this.yFactor*=-1}}class k extends n{constructor(){super(...arguments);this._end=-1}initialize(a,b,c,d,e){this.hasZ=c;this.hasM=d;this.geometryType=b;this._stride=2+Number(c)+Number(d);this._geometry=a;this._pathIndex=-1;this._pathOffset=0;this._pointOffset=-this._stride;this._end=-1;this.yFactor=e;return this}reset(){this.initialize(this._geometry,this.geometryType,this.hasZ,this.hasM,this.yFactor)}seekPath(a){if(0<=a&&a<
this.totalSize){if(this._pathIndex<a)for(;this._pathIndex<a&&this.nextPath(););else if(this._pathIndex>a)for(;this._pathIndex>a&&this.prevPath(););return!0}return!1}seekPathStart(){this._pointOffset=this._pathOffset-this._stride}seekPathEnd(){this._pointOffset=this._end}seekInPath(a){a=this._pathOffset+a*this._stride;return 0<=a&&a<this._end?(this._pointOffset=a,!0):!1}nextPoint(){return(this._pointOffset+=this._stride)<this._end}prevPoint(){return(this._pointOffset-=this._stride)>=this._pathOffset}nextPath(){0<=
this._pathIndex&&(this._pathOffset+=this._stride*(this._geometry.isPoint?1:this._geometry.lengths[this._pathIndex]));this._pointOffset=this._pathOffset-this._stride;this._end=this._pointOffset+this._stride+this._stride*(this._geometry.isPoint?1:this._geometry.lengths[this._pathIndex+1]);return++this._pathIndex<this.totalSize}prevPath(){this._end=this._pathOffset;this._pathOffset-=this._stride*(this._geometry.isPoint?1:this._geometry.lengths[this._pathIndex-1]);this._pointOffset=this._pathOffset-this._stride;
return 0<=--this._pathIndex}pathLength(){const a=this._end,b=this._stride,c=this._geometry.coords;let d=0;for(let e=this._pathOffset+b;e<a;e+=b){const f=c[e]-c[e-b],h=c[e+1]-c[e-b+1];d+=Math.sqrt(f*f+h*h)}return d}startPath(){this._geometry.lengths.push(0)}pushPath(a){this.startPath();this.pushPoints(a)}pushPoint(a){for(let b=0;b<this._stride;++b)this._geometry.coords.push(a[b]);this._geometry.lengths[this.totalSize-1]++}pushXY(a,b){this._geometry.coords.push(a,b);this._geometry.lengths[this.totalSize-
1]++}pushPoints(a){for(const b of a)for(let c=0;c<this._stride;++c)this._geometry.coords.push(b[c]);this._geometry.lengths[this.totalSize-1]+=a.length}pushCursor(a){a=a.asOptimized();this._geometry.coords.push(...a.coords);this._geometry.lengths.push(...a.lengths)}asOptimized(){const a=this._geometry.clone();if(1!==this.yFactor)for(let b=1;b<a.coords.length;b+=this._stride)a.coords[b]*=this.yFactor;"esriGeometryPoint"===this.geometryType&&(a.lengths.length=0);return a}isClosed(){const a=this._geometry.coords,
b=this._pathOffset,c=this._end-this._stride;for(let d=0;d<this._stride;d++)if(a[b+d]!==a[c+d])return!1;return!0}clone(){return(new k).initialize(this._geometry.clone(),this.geometryType,this.hasZ,this.hasM,this.yFactor)}get totalPoints(){return this._geometry.coords.length/this._stride}get pathSize(){const {lengths:a}=this._geometry;return 0>this._pathIndex||this._pathIndex>a.length-1?0:a[this._pathIndex]}get totalSize(){return this._geometry.lengths.length}get x(){return this._geometry.coords[this._pointOffset]}set x(a){this._geometry.coords[this._pointOffset]=
a}get y(){return this.yFactor*this._geometry.coords[this._pointOffset+1]}set y(a){this._geometry.coords[this._pointOffset+1]=this.yFactor*a}get z(){return this._geometry.coords[this._pointOffset+2]}set z(a){this._geometry.coords[this._pointOffset+2]=a}get m(){return this._geometry.coords[this._pointOffset+(this.hasZ?3:2)]}set m(a){this._geometry.coords[this._pointOffset+3]=a}get pathIndex(){return this._pathIndex}get _coordIndex(){return this._pointOffset/this._stride}}class l extends n{initialize(a,
b,c,d,e){this._paths=a;this.geometryType=b;this.hasZ=c;this.hasM=d;this._pathIndex=this._pointIndex=-1;this.yFactor=e;this._mIndex=this.hasZ?3:2;return this}reset(){this._pathIndex=this._pointIndex=-1}seekPath(a){return 0<=a&&a<this.totalSize?(this._pathIndex=a,this._pointIndex=-1,this._currentPath=this._paths[a],!0):!1}seekPathStart(){this._pointIndex=-1}seekPathEnd(){this._pointIndex=this._currentPath.length}seekInPath(a){return 0<=a&&a<this._currentPath.length?(this._pointIndex=a,this._currentPoint=
this._currentPath[this._pointIndex],!0):!1}nextPoint(){this._currentPoint=this._currentPath[++this._pointIndex];return this._pointIndex<this._currentPath.length}prevPoint(){this._currentPoint=this._currentPath[--this._pointIndex];return 0<=this._pointIndex}nextPath(){this._pointIndex=-1;this._currentPath=this._paths[++this._pathIndex];return this._pathIndex<this.totalSize}prevPath(){this._pointIndex=-1;this._currentPath=this._paths[--this._pathIndex];return 0<=this._pathIndex}pathLength(){const a=
this._currentPath.length,b=this._currentPath;let c=0;for(let e=1;e<a;e++){var d=b[e-1];const f=b[e],h=f[0]-d[0];d=f[1]-d[1];c+=Math.sqrt(h*h+d*d)}return c}startPath(){this._paths.push([])}pushPath(a){this._paths.push(a)}pushPoint(a){this._paths[this.totalSize-1].push(a)}pushXY(a,b){this._paths[this.totalSize-1].push([a,b])}pushPoints(a){this._paths[this.totalSize-1].push(...a)}pushCursor(a){a=u.collectMultipath(a);for(const b of a)this.pushPath(b)}asOptimized(){const a=new m;if("esriGeometryPoint"===
this.geometryType)a.coords.push(...this._paths[0][0]),a.lengths.length=0;else for(const b of this._paths){for(const c of b)a.coords.push(c[0]),a.coords.push(c[1]*this.yFactor),this.hasZ&&a.coords.push(c[2]),this.hasM&&a.coords.push(c[this._mIndex]);a.lengths.push(b.length)}return a}isClosed(){const a=this._currentPath[0],b=this._currentPath[this._currentPath.length-1];for(let c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0}clone(){return(new l).initialize(t.clone(this._paths),this.geometryType,
this.hasZ,this.hasM,this.yFactor)}get totalPoints(){return this._paths.map(a=>a.length).reduce((a,b)=>a+b)}get pathSize(){return 0>this._pathIndex||this._pathIndex>this.totalSize-1?-1:this._paths[this._pathIndex].length}get totalSize(){return this._paths.length}get x(){return this._currentPoint[0]}set x(a){this._currentPoint[0]=a}get y(){return this.yFactor*this._currentPoint[1]}set y(a){this._currentPoint[1]=this.yFactor*a}get z(){return this._currentPoint[2]}set z(a){this._currentPoint[2]=a}get m(){return this._currentPoint[this._mIndex]}set m(a){this._currentPoint[this._mIndex]=
a}get pathIndex(){return this._pathIndex}}class p extends k{initialize(a,b,c,d,e){super.initialize(a,b,c,d,e);this._controlPoints||(this._controlPoints=this._controlPoints=Array(this.totalSize).fill(void 0).map(f=>new Set));return this}startPath(){super.startPath();this._controlPoints.push(new Set)}clone(){const a=(new p).initialize(this._geometry.clone(),this.geometryType,this.hasZ,this.hasM,this.yFactor);a._controlPoints=this._controlPoints;return a}setControlPoint(){this._controlPoints[this.pathIndex].add(this._coordIndex)}getControlPoint(){return this._controlPoints[this.pathIndex].has(this._coordIndex)}setControlPointAt(a){this._controlPoints[this.pathIndex].add(a)}getControlPointAt(a){return this._controlPoints[this.pathIndex].has(a)}}
class q extends l{initialize(a,b,c,d,e){return super.initialize(a,b,c,d,e)}clone(){return(new q).initialize(t.clone(this._paths),this.geometryType,this.hasZ,this.hasM,1)}setControlPoint(){this._paths[this.pathIndex][this._pointIndex][4]=1}getControlPoint(){return 1===this._paths[this.pathIndex][this._pointIndex][4]}setControlPointAt(a){this._paths[this.pathIndex][a][4]=1}getControlPointAt(a){return 1===this._paths[this.pathIndex][a][4]}}r.GeometryCursor=n;Object.defineProperty(r,Symbol.toStringTag,
{value:"Module"})});