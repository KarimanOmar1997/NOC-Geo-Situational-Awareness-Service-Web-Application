// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Color ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./SmartMappingSliderBase ./OpacitySlider/OpacitySliderViewModel ../support/globalCss ../support/legacyIcon ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory".split(" "),function(e,c,k,t,y,z,u,v,w,m,A,B,x,h){var n;const r={trackFillColor:new c([0,121,193])};
c=n=class extends v.SmartMappingSliderBase{constructor(a,b){super(a,b);this.messages=null;this.style={...r};this.viewModel=new w;this._rampFillId=`${this.id}-ramp-fill`;this._bgFillId=`${this.id}-bg-fill`}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get stops(){return this.viewModel.stops}set stops(a){this.viewModel.stops=a}castStyle(a){return{...r,...a}}static fromVisualVariableResult(a,b){const {visualVariable:{stops:f},statistics:d}=a,{avg:g,max:l,
min:p,stddev:q}=d;return new n({max:l,min:p,stops:f,histogramConfig:{average:g,standardDeviation:q,bins:b?b.bins:[]}})}updateFromVisualVariableResult(a,b){const {visualVariable:{stops:f},statistics:d}=a,{avg:g,max:l,min:p,stddev:q}=d;this.set({max:l,min:p,stops:f,histogramConfig:{average:g,standardDeviation:q,bins:b?b.bins:[]}})}render(){const {state:a,label:b,visibleElements:f}=this,d="disabled"===a,g=this.classes("esri-opacity-slider",m.globalCss.widget,m.globalCss.panel,{[m.globalCss.disabled]:d,
["esri-opacity-slider--interactive-track"]:!!f.interactiveTrack});return h.tsx("div",{"aria-label":b,class:g},d?null:this.renderContent(this._renderRamp(),"esri-opacity-slider__slider-container","esri-opacity-slider__histogram-container"))}_renderRamp(){const {_bgFillId:a,_rampFillId:b,style:{trackFillColor:f},viewModel:d,zoomOptions:g}=this,l=d.getStopInfo(f);return h.tsx("div",{class:"esri-opacity-slider__ramp"},h.tsx("svg",{xmlns:"http://www.w3.org/2000/svg"},h.tsx("defs",null,this.renderRampFillDefinition(b,
l),this.renderBackgroundFillDefinition(a)),h.tsx("rect",{fill:`url(#${a})`,height:"100%",width:"100%",x:"0",y:"0"}),h.tsx("rect",{fill:`url(#${b})`,height:"100%",width:"100%",x:"0",y:"0"})),g?this.renderZoomCaps():null)}};e.__decorate([k.property()],c.prototype,"label",null);e.__decorate([k.property(),x.messageBundle("esri/widgets/smartMapping/OpacitySlider/t9n/OpacitySlider")],c.prototype,"messages",void 0);e.__decorate([k.property()],c.prototype,"stops",null);e.__decorate([k.property()],c.prototype,
"style",void 0);e.__decorate([t.cast("style")],c.prototype,"castStyle",null);e.__decorate([k.property()],c.prototype,"viewModel",void 0);return c=n=e.__decorate([u.subclass("esri.widgets.smartMapping.OpacitySlider")],c)});