// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../geometry/Extent ../../geometry/SpatialReference".split(" "),function(b,a,c,e,h,k,f,g,d){a=class extends a{constructor(){super(...arguments);this.processSpatialReference=this.processExtent=this.outSpatialReference=null;this.returnZ=this.returnM=this.returnFeatureCollection=!1}};
b.__decorate([c.property({type:d})],a.prototype,"outSpatialReference",void 0);b.__decorate([c.property({type:g})],a.prototype,"processExtent",void 0);b.__decorate([c.property({type:d})],a.prototype,"processSpatialReference",void 0);b.__decorate([c.property({nonNullable:!0})],a.prototype,"returnFeatureCollection",void 0);b.__decorate([c.property({nonNullable:!0})],a.prototype,"returnM",void 0);b.__decorate([c.property({nonNullable:!0})],a.prototype,"returnZ",void 0);a=b.__decorate([f.subclass("esri.rest.geoprocessor.GPOptions")],
a);a.from=e.ensureType(a);return a});