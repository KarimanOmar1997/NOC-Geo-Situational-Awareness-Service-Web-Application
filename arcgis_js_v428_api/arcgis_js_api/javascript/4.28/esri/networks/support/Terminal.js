// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,c,f,g,h,d){a=class extends a.JSONSupport{constructor(e){super(e);this.name=this.id=null}};b.__decorate([c.property({type:Number,json:{read:{source:"terminalId"},write:{target:"terminalId"}}})],a.prototype,"id",void 0);b.__decorate([c.property({type:String,
json:{read:{source:"terminalName"},write:{target:"terminalName"}}})],a.prototype,"name",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"isUpstreamTerminal",void 0);return a=b.__decorate([d.subclass("esri.networks.support.Terminal")],a)});