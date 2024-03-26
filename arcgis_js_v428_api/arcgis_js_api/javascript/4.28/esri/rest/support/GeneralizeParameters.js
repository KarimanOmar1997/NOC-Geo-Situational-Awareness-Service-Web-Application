// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/arrayUtils ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/has ../../core/accessorSupport/decorators/subclass ../../geometry/support/jsonUtils".split(" "),function(c,f,a,d,g,m,h,k){a=class extends a.JSONSupport{constructor(b){super(b);this.maxDeviation=this.geometries=this.deviationUnit=null}};c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"deviationUnit",void 0);
c.__decorate([d.property({json:{read:{reader:b=>b?b.map(e=>k.fromJSON(e)).filter(f.isSome):null},write:{writer:(b,e)=>{e.geometries=b?.map(l=>l.toJSON())??null}}}})],a.prototype,"geometries",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"maxDeviation",void 0);a=c.__decorate([h.subclass("esri.rest.support.GeneralizeParameters")],a);a.from=g.ensureType(a);return a});