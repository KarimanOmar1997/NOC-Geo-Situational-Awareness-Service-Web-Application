// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./AuthoringInfoClassBreakInfo".split(" "),function(a,b,e,f,c,l,g,h){var d;a.AuthoringInfoFieldInfo=d=class extends e.JSONSupport{constructor(k){super(k);this.label=this.normalizationField=this.field="";this.classBreakInfos=[]}clone(){return new d({field:this.field,normalizationField:this.normalizationField,
label:this.label,classBreakInfos:f.clone(this.classBreakInfos)})}};b.__decorate([c.property({type:String,json:{write:!0}})],a.AuthoringInfoFieldInfo.prototype,"field",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.AuthoringInfoFieldInfo.prototype,"normalizationField",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.AuthoringInfoFieldInfo.prototype,"label",void 0);b.__decorate([c.property({type:[h.AuthoringInfoClassBreakInfo],json:{write:!0}})],a.AuthoringInfoFieldInfo.prototype,
"classBreakInfos",void 0);a.AuthoringInfoFieldInfo=d=b.__decorate([g.subclass("esri.renderers.support.AuthoringInfoFieldInfo")],a.AuthoringInfoFieldInfo);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});