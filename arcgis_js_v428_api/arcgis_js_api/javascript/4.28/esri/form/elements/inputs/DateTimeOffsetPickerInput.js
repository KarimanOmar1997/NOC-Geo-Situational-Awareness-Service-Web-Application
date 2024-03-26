// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/reader ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/decorators/writer ./Input".split(" "),function(c,e,b,n,p,f,l,g,m){function h(a){return null!=a?a:null}var k;b=k=class extends m{constructor(a){super(a);this.includeTimeOffset=!0;this.min=this.max=null;this.timeResolution=
"minutes";this.type="datetimeoffset-picker"}readMax(a,d){return h(d.max)}writeMax(a,d){d.max=null!=a?a:null}readMin(a,d){return h(d.min)}writeMin(a,d){d.min=null!=a?a:null}readTimeResolution(a,d){return h(d.timeResolution)}writeTimeResolution(a,d){d.timeResolution=null!=a?a:null}clone(){return new k({includeTimeOffset:this.includeTimeOffset,max:this.max,min:this.min,timeResolution:this.timeResolution})}};c.__decorate([e.property({type:Boolean,json:{write:!0}})],b.prototype,"includeTimeOffset",void 0);
c.__decorate([e.property({type:String,json:{type:String,write:!0}})],b.prototype,"max",void 0);c.__decorate([f.reader("max")],b.prototype,"readMax",null);c.__decorate([g.writer("max")],b.prototype,"writeMax",null);c.__decorate([e.property({type:String,json:{type:String,write:!0}})],b.prototype,"min",void 0);c.__decorate([f.reader("min")],b.prototype,"readMin",null);c.__decorate([g.writer("min")],b.prototype,"writeMin",null);c.__decorate([e.property({type:String,json:{type:String,write:!0}})],b.prototype,
"timeResolution",void 0);c.__decorate([f.reader("timeResolution")],b.prototype,"readTimeResolution",null);c.__decorate([g.writer("timeResolution")],b.prototype,"writeTimeResolution",null);c.__decorate([e.property({type:["datetimeoffset-picker"],json:{read:!1,write:!0}})],b.prototype,"type",void 0);return b=k=c.__decorate([l.subclass("esri.form.elements.inputs.DateTimeOffsetPickerInput")],b)});