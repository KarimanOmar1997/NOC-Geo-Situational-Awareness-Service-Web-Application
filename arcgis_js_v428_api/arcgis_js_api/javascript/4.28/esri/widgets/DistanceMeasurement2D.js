// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/promiseUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./Widget ./DistanceMeasurement2D/DistanceMeasurement2DViewModel ./support/globalCss ./support/legacyIcon ./support/MeasurementWidgetContent ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),function(c,l,d,a,B,C,m,n,f,g,p,q,D,h,k){var r=p.legacyIcon.measureLine;
a=class extends n{constructor(b,e){super(b,e);this.iconClass=r;this.messagesCommon=this.messages=this.icon=null;this.viewModel=new f}get active(){return this.viewModel.active}get label(){return this.messages?.widgetLabel??""}set label(b){this._overrideIfSome("label",b)}get unit(){return this.viewModel.unit}set unit(b){this.viewModel.unit=b}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(b){this.viewModel.unitOptions=b}get view(){return this.viewModel.view}set view(b){this.viewModel.view=
b}get visible(){return this.viewModel.visible}set visible(b){this.viewModel.visible=b}render(){const {messages:b,messagesCommon:e,unit:t,unitOptions:u,viewModel:v}=this,{active:w,measurementLabel:x,state:y,supported:z}=v;return k.tsx("div",{"aria-label":this.messages.widgetLabel,class:this.classes("esri-distance-measurement-2d",g.globalCss.widget,g.globalCss.panel),key:this,role:"presentation"},this.visible?k.tsx(q.MeasurementWidgetContent,{active:w,measurementItems:[{key:"distance",title:b.distance,
value:x}],messages:{...b,notApplicable:e.notApplicable},newMeasurementButtonClass:"esri-distance-measurement-2d__clear-button",state:y,supported:z,unit:t,unitOptions:u,onNewMeasurementClick:()=>{l.ignoreAbortErrors(this.viewModel.start())},onUnitChange:A=>{this.unit=A}}):null)}};c.__decorate([d.property({readOnly:!0})],a.prototype,"active",null);c.__decorate([d.property()],a.prototype,"iconClass",void 0);c.__decorate([d.property()],a.prototype,"icon",void 0);c.__decorate([d.property()],a.prototype,
"label",null);c.__decorate([d.property()],a.prototype,"uiStrings",void 0);c.__decorate([d.property(),h.messageBundle("esri/widgets/DistanceMeasurement2D/t9n/DistanceMeasurement2D")],a.prototype,"messages",void 0);c.__decorate([d.property(),h.messageBundle("esri/t9n/common")],a.prototype,"messagesCommon",void 0);c.__decorate([d.property()],a.prototype,"unit",null);c.__decorate([d.property()],a.prototype,"unitOptions",null);c.__decorate([d.property()],a.prototype,"view",null);c.__decorate([d.property({type:f})],
a.prototype,"viewModel",void 0);c.__decorate([d.property({type:Boolean})],a.prototype,"visible",null);return a=c.__decorate([m.subclass("esri.widgets.DistanceMeasurement2D")],a)});