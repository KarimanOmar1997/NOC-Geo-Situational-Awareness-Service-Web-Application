// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/Point".split(" "),function(b,a,f,e,g,p,q,h,k,l){var c;a=c=class extends f.JSONSupport{constructor(){super(...arguments);this.rasterId=this.geometries=null}writeGeometry(d,m,r){m.geometries={geometryType:"esriGeometryPoint",
geometries:d.map(n=>n.toJSON())}}clone(){return new c({geometries:this.geometries?.map(d=>d.clone())??[],rasterId:this.rasterId})}};b.__decorate([e.property({type:[l],json:{write:!0}})],a.prototype,"geometries",void 0);b.__decorate([k.writer("geometries")],a.prototype,"writeGeometry",null);b.__decorate([e.property({type:g.Integer,json:{write:!0}})],a.prototype,"rasterId",void 0);return a=c=b.__decorate([h.subclass("esri.rest.support.ImagePixelLocationParameters")],a)});