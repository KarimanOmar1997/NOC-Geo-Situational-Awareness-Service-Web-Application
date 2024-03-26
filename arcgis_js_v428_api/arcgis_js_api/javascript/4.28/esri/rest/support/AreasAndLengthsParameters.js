// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../../geometry/Polygon ../../geometry/support/spatialReferenceUtils".split(" "),function(c,a,f,e,q,r,t,g,h,k){const l=new a.JSONMap({preserveShape:"preserve-shape",planar:"planar",geodesic:"geodesic"}),m=new a.JSONMap({esriAcres:"acres",esriHectares:"hectares",
esriSquareMiles:"square-miles",esriSquareKilometers:"square-kilometers",esriSquareMeters:"square-meters",esriSquareFeet:"square-feet",esriSquareYards:"square-yards",esriAres:"ares"}),n=new a.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});a=class extends f.JSONSupport{constructor(b){super(b);this.polygons=this.lengthUnit=this.calculationType=this.areaUnit=null}toJSON(){const b={};if(this.polygons&&0<this.polygons.length){var d=this.polygons.map(p=>
p.toJSON());b.polygons=JSON.stringify(d);b.sr=k.srToRESTValue(this.polygons[0].spatialReference)}this.lengthUnit&&(b.lengthUnit=n.toJSON(this.lengthUnit));this.areaUnit&&(d=m.toJSON(this.areaUnit),b.areaUnit="string"===typeof d?JSON.stringify({areaUnit:d}):d);this.calculationType&&(b.calculationType=l.toJSON(this.calculationType));return b}};c.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"areaUnit",void 0);c.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,
"calculationType",void 0);c.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"lengthUnit",void 0);c.__decorate([e.property({type:[h],json:{write:!0}})],a.prototype,"polygons",void 0);return a=c.__decorate([g.subclass("esri.rest.support.AreasAndLengthsParameters")],a)});