// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../core/mathUtils","../../chunks/vec3f64","./projectors","../support/Ellipsoid"],function(k,p,q,c,l){function m(a,b,d,e){b=e+b;if(b<e/2||d>b)return Number.MAX_VALUE;a=Math.abs(r*a)+Math.asin(d/b);return a>=Math.PI/2?Number.MAX_VALUE:d/Math.cos(a)}const g=q.create(),t=c.createEmptyProjectorCache(),r=p.deg2rad(1);k.projectBoundingSphere=function(a,b,d,e){if(null==b||null==e)return!1;b=c.populateProjectorCache(b,e,t);if(b.projector===c.copy3)return d[0]=a[0],d[1]=a[1],d[2]=a[2],
d[3]=a[3],!0;if(null==b.projector)return!1;const {source:f,dest:h}=b;if(h.spatialReferenceId===c.ProjectionID.WEB_MERCATOR){b=c.projectionTable[f.spatialReferenceId][c.ProjectionID.WGS84];if(null==b)return!1;b(a,0,g,0);c.wgs84ToWebMercator(g,0,d,0);d[3]=m(g[1],a[2],a[3],l.earth.radius);return!0}if(f.spatialReferenceId!==c.ProjectionID.WGS84&&f.spatialReferenceId!==c.ProjectionID.CGCS2000||h.spatialReferenceId!==c.ProjectionID.PLATE_CARREE)b.projector(a,0,d,0),d[3]=a[3]*(f.metersPerUnit??1)/(h.metersPerUnit??
1);else{e=c.projectionTable[c.ProjectionID.SPHERICAL_ECEF][c.ProjectionID.PLATE_CARREE];let n=a[3];null!=c.projectionTable[f.spatialReferenceId][c.ProjectionID.SPHERICAL_ECEF]&&null!=e&&(n=m(a[1],a[2],a[3],l.earth.radius));b.projector(a,0,d,0);d[3]=n}return!0};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});