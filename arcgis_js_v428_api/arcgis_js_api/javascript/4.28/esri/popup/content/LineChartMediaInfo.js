// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./mixins/ChartMediaInfo ./support/chartMediaInfoUtils".split(" "),function(c,d,a,k,l,e,f,g){var b;a=b=class extends f{constructor(h){super(h);this.type="line-chart"}clone(){return new b({altText:this.altText,title:this.title,caption:this.caption,value:this.value?this.value.clone():null})}};c.__decorate([d.property({type:["line-chart"],
readOnly:!0,json:{type:["linechart"],read:!1,write:g.chartTypeKebabDict.write}})],a.prototype,"type",void 0);return a=b=c.__decorate([e.subclass("esri.popup.content.LineChartMediaInfo")],a)});