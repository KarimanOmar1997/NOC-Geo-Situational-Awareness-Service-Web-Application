// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../TimeInterval ../core/arrayUtils ../core/compilerUtils ../core/reactiveUtils ../core/timeUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/subclass ../intl/date ../time/timeZoneUtils ./Slider ./Widget ./support/componentsUtils ./support/globalCss ./support/legacyIcon ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/decorators/vmEvent ./support/jsxFactory ./support/widgetUtils ../support/themeUtils ./TimeSlider/css ./TimeSlider/TimeSliderViewModel".split(" "),
function(N,e,O,Y,Z,G,P,f,d,aa,B,Q,ba,ca,da,n,x,H,R,ea,c,fa,ha,b,I){const ia=[{minor:{value:100,unit:"milliseconds"},major:{value:1,unit:"seconds"},format:{second:"numeric"}},{minor:{value:500,unit:"milliseconds"},major:{value:5,unit:"seconds"},format:{second:"numeric"}},{minor:{value:1,unit:"seconds"},major:{value:20,unit:"seconds"},format:{minute:"numeric",second:"numeric"}},{minor:{value:2,unit:"seconds"},major:{value:30,unit:"seconds"},format:{minute:"numeric",second:"numeric"}},{minor:{value:10,
unit:"seconds"},major:{value:1,unit:"minutes"},format:{minute:"numeric"}},{minor:{value:15,unit:"seconds"},major:{value:5,unit:"minutes"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:1,unit:"minutes"},major:{value:20,unit:"minutes"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:5,unit:"minutes"},major:{value:2,unit:"hours"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:15,unit:"minutes"},major:{value:6,unit:"hours"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:1,
unit:"hours"},major:{value:1,unit:"days"},format:{day:"numeric",month:"short"}},{minor:{value:6,unit:"hours"},major:{value:1,unit:"weeks"},format:{day:"numeric",month:"short"}},{minor:{value:1,unit:"days"},major:{value:1,unit:"months"},format:{month:"long"}},{minor:{value:2,unit:"days"},major:{value:1,unit:"months"},format:{month:"short"}},{minor:{value:3,unit:"days"},major:{value:1,unit:"months"},format:{month:"short"}},{minor:{value:4,unit:"days"},major:{value:3,unit:"months"},format:{month:"short",
year:"numeric"}},{minor:{value:1,unit:"weeks"},major:{value:1,unit:"years"},format:{year:"numeric"}},{minor:{value:1,unit:"months"},major:{value:1,unit:"years"},format:{year:"numeric"}},{minor:{value:2,unit:"months"},major:{value:2,unit:"years"},format:{year:"numeric"}},{minor:{value:1,unit:"years"},major:{value:1,unit:"decades"},format:{year:"numeric"}},{minor:{value:2,unit:"years"},major:{value:5,unit:"decades"},format:{year:"numeric"}},{minor:{value:5,unit:"decades"},major:{value:10,unit:"centuries"},
format:{era:"short",year:"numeric"}},{minor:{value:1,unit:"centuries"},major:{value:10,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:2,unit:"centuries"},major:{value:20,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:5,unit:"centuries"},major:{value:50,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:10,unit:"centuries"},major:{value:100,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:20,unit:"centuries"},major:{value:200,
unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:50,unit:"centuries"},major:{value:500,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:100,unit:"centuries"},major:{value:1E3,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:200,unit:"centuries"},major:{value:1E3,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:500,unit:"centuries"},major:{value:5E3,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:1E3,
unit:"centuries"},major:{value:1E4,unit:"centuries"},format:{era:"short",year:"numeric"}}];d=class extends ca{constructor(a,g){super(a,g);this._ignoreNextSliderUpdate=!1;this._slider=new ba({precision:0,visibleElements:{rangeLabels:!1},rangeLabelInputsEnabled:!1,thumbsConstrained:!1});this._tickFormat=null;this.disabled=!1;this.iconClass=b.css.widgetIcon;this.tickConfigs=this.messagesCommon=this.messages=this.labelFormatFunction=this.icon=null;this.timeVisible=!1;this.viewModel=new I}initialize(){this.addHandles([G.watch(()=>
this._slider.values,a=>{this._ignoreNextSliderUpdate?this._ignoreNextSliderUpdate=!1:(a=this.viewModel.valuesToTimeExtent(a),null!=this.timeExtent?null!=a?this.timeExtent.equals(a)||(this.timeExtent=a):this.timeExtent=null:null!=a&&(this.timeExtent=a))}),G.watch(()=>this.effectiveStops,()=>this._updateSliderSteps(),G.initial)])}loadDependencies(){return da.loadCalciteComponents({action:()=>new Promise((a,g)=>N(["../chunks/calcite-action"],a,g)),"action-menu":()=>new Promise((a,g)=>N(["../chunks/calcite-action-menu"],
a,g))})}destroy(){this._slider.destroy();this._tickFormat=null}get _dateFormat(){return this._getIntlOptions("short-date")}get _timeFormat(){return this._getIntlOptions("long-time")}get actions(){return this.viewModel.actions}set actions(a){this.viewModel.actions=a}get effectiveStops(){return this.viewModel.effectiveStops}get fullTimeExtent(){return this.viewModel.fullTimeExtent}set fullTimeExtent(a){this.viewModel.fullTimeExtent=a}get interactive(){return!(this.disabled||"disabled"===this.viewModel.state||
this.timeZone===Q.unknown)}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}set layout(a){["auto","compact","wide"].includes(a)||(a="auto");this._set("layout",a)}get loop(){return this.viewModel.loop}set loop(a){this.viewModel.loop=a}get mode(){return this.viewModel.mode}set mode(a){this.viewModel.mode=a}get playRate(){return this.viewModel.playRate}set playRate(a){this.viewModel.playRate=a}get stops(){return this.viewModel.stops}set stops(a){this.viewModel.stops=
a}get tickFormats(){const {timeZone:a}=this;return ia.map(({minor:g,major:t,format:y})=>({minor:new O(g),major:new O(t),format:{...y,timeZone:a}}))}get timeExtent(){return this.viewModel.timeExtent}set timeExtent(a){this.viewModel.timeExtent=a}get timeZone(){return this.viewModel.view?.timeZone??Q.system}set timeZone(a){this._overrideIfSome("timeZone",a)}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}static async getPropertiesFromWebMap(a,g){return I.getPropertiesFromWebMap(a,
g)}next(){return this.viewModel.next()}play(){return this.viewModel.play()}previous(){return this.viewModel.previous()}stop(){return this.viewModel.stop()}render(){const {_slider:a,actions:g,domNode:t,effectiveStops:y,fullTimeExtent:l,interactive:q,messages:J,messagesCommon:p,mode:S,tickConfigs:K,timeExtent:h,timeVisible:C,viewModel:{state:T,timeExtentValues:L}}=this;if(null!=l){const {start:r,end:U}=l;if(null!=r&&null!=U){var k=r.getTime(),u=U.getTime(),w=a.min!==k||a.max!==u;w&&(a.min=k,a.max=u);
if(null!=K)a.tickConfigs!==K&&(a.tickConfigs=K);else{const ja=(u-k)/(a.trackElement?.offsetWidth||400),z=this.tickFormats.find(A=>A.minor.toMilliseconds()>3*ja)??this.tickFormats.at(-1);if(k=this._tickFormat!==z&&null!=z)this._tickFormat=z;if(w||k)w={mode:"position",values:this._getTickPositions(z.minor),labelsVisible:!1,tickCreatedFunction:(A,M)=>{M?.classList.add(b.css.sliderMinorTick)}},k={mode:"position",values:this._getTickPositions(z.major),labelsVisible:!0,tickCreatedFunction:(A,M)=>{M?.classList.add(b.css.sliderMajorTick)},
labelFormatFunction:A=>B.formatDate(A,z.format)},a.tickConfigs=[w,k]}}}if(w=null==this.fullTimeExtent?.start||null==this.fullTimeExtent.end||null==this.timeExtent||this.timeExtent.isAllTime||this.timeExtent.isEmpty||null!=this.timeExtent.start&&(this.timeExtent.start<this.fullTimeExtent.start||this.timeExtent.start>this.fullTimeExtent.end)||null!=this.timeExtent.end&&(this.timeExtent.end>this.fullTimeExtent.end||this.timeExtent.end<this.fullTimeExtent.start))switch(this._ignoreNextSliderUpdate=!0,
S){case "time-window":a.values=[a.min,a.max];break;case "instant":case "cumulative-from-end":a.values=[a.min];break;case "cumulative-from-start":a.values=[a.max]}else null!=L?Y.equals(a.values,L)||(a.values=L):a.values=null;a.disabled=!q;u="ready"===T;var v="playing"===T,m=w||!q||null==y||0===y.length;k="auto"===this.layout?858>t.clientWidth?"compact":"wide":this.layout;u=c.tsx("div",{class:b.css.animation},c.tsx("button",{"aria-disabled":m?"true":"false","aria-label":v?p.control.stop:p.control.play,
bind:this,class:this.classes(n.globalCss.widgetButton,b.css.animationButton,m&&n.globalCss.buttonDisabled),disabled:m,onclick:this._playOrStopClick,title:v?p.control.stop:p.control.play,type:"button"},c.tsx("div",{class:this.classes((u||m)&&x.legacyIcon.play,v&&x.legacyIcon.pause)})));var D=null!=this.labelFormatFunction?c.tsx("div",{afterCreate:this._createLabel,afterUpdate:this._createLabel,bind:this,class:b.css.timeExtentDate,"data-date":h?[h.start,h.end]:null,"data-layout":k,"data-type":"extent",
key:"extent"}):null==h||null!=h&&h.isAllTime?[c.tsx("div",{class:this.classes(b.css.warning,x.legacyIcon.noticeTriangle)}),c.tsx("div",{class:b.css.warningText,key:"warning-text"},J.noTimeExtent)]:h.isEmpty?[c.tsx("div",{class:this.classes(b.css.warning,x.legacyIcon.noticeTriangle)}),c.tsx("div",{class:b.css.warningText,key:"warning-text"},J.emptyTimeExtent)]:[null!=h.start&&c.tsx("div",{class:b.css.timeExtentGroup,key:"start-date-group"},c.tsx("div",{class:b.css.timeExtentDate,key:"start-date"},
this._formatDate(h.start)),C?c.tsx("div",{class:b.css.timeExtentTime,key:"start-time"},this._formatTime(h.start)):null),null!=h.start&&null!=h.end&&h.start.getTime()!==h.end.getTime()&&c.tsx("div",{class:b.css.timeExtentSeparator,key:"separator"},"\u2013"),null!=h.end&&(null==h.start||h.start.getTime()!==h.end.getTime())&&c.tsx("div",{class:b.css.timeExtentGroup,key:"end-date-group"},c.tsx("div",{class:b.css.timeExtentDate,key:"end-date"},this._formatDate(h.end)),C?c.tsx("div",{class:b.css.timeExtentTime,
key:"end-time"},this._formatTime(h.end)):null)];D=c.tsx("div",{class:this.classes(b.css.timeExtent,!q&&n.globalCss.buttonDisabled)},[D]);var E=null!=this.labelFormatFunction?c.tsx("div",{afterCreate:this._createLabel,afterUpdate:this._createLabel,bind:this,class:b.css.minDate,"data-date":l?.start,"data-layout":k,"data-type":"min",key:"min-date"}):null!=l?.start&&[c.tsx("div",{class:b.css.minDate,key:"min-date"},this._formatDate(l.start)),C&&c.tsx("div",{class:b.css.minTime,key:"min-time"},this._formatTime(l.start))];
E=c.tsx("div",{class:this.classes(b.css.min,!q&&n.globalCss.buttonDisabled)},[E]);const V=c.tsx("div",{class:b.css.slider},a.render());var F=null!=this.labelFormatFunction?c.tsx("div",{afterCreate:this._createLabel,afterUpdate:this._createLabel,bind:this,class:b.css.maxDate,"data-date":l?.end,"data-layout":k,"data-type":"max",key:"max-date"}):null!=l?.end&&[c.tsx("div",{class:b.css.maxDate,key:"max-date"},this._formatDate(l.end)),C&&c.tsx("div",{class:b.css.maxTime,key:"max-time"},this._formatTime(l.end))];
F=c.tsx("div",{class:this.classes(b.css.max,!q&&n.globalCss.buttonDisabled)},[F]);const W=c.tsx("div",{class:b.css.previous},c.tsx("button",{"aria-disabled":m?"true":"false","aria-label":p.pagination.previous,bind:this,class:this.classes(n.globalCss.widgetButton,b.css.previousButton,(v||m)&&n.globalCss.buttonDisabled),disabled:m,onclick:this._previousClick,title:p.pagination.previous,type:"button"},c.tsx("div",{class:x.legacyIcon.reverse})));v=c.tsx("div",{class:b.css.next},c.tsx("button",{"aria-disabled":m?
"true":"false","aria-label":p.pagination.next,bind:this,class:this.classes(n.globalCss.widgetButton,b.css.nextButton,(v||m)&&n.globalCss.buttonDisabled),disabled:m,onclick:this._nextClick,title:p.pagination.next,type:"button"},c.tsx("div",{class:x.legacyIcon.forward})));const X=(m=0<g?.length)&&c.tsx("div",{class:b.css.actions,title:p.options},c.tsx("calcite-action-menu",{class:b.css.actionsButton,label:p.options},g.toArray().map(r=>c.tsx("calcite-action",{bind:this,icon:r.icon,id:r.id,onclick:()=>
this.viewModel.triggerAction(r),text:r.title,textEnabled:!0}))));return c.tsx("div",{afterCreate:r=>{this.addHandles(fa.onResize(r,()=>this.scheduleRender()))},"aria-label":J.widgetLabel,class:this.classes(b.css.timeSlider,n.globalCss.widget,`${b.css.timeSliderMode}${S}`,`${b.css.timeSliderLayout}${k}`,!q&&n.globalCss.disabled,w&&b.css.timeSliderOutOfBounds,m&&b.css.hasActions,ha.getCalciteThemeClass())},"wide"===k&&c.tsx("div",{class:b.css.timeSliderRow},c.tsx("div",{class:b.css.playbackControls},
[u,D,E,V,F,W,v]),X),"compact"===k&&[c.tsx("div",{class:b.css.timeSliderRow,key:"time-slider-row-1"},[D,X]),c.tsx("div",{class:b.css.timeSliderRow,key:"time-slider-row-2"},[V]),c.tsx("div",{class:b.css.timeSliderRow,key:"time-slider-row-3"},[E,W,u,v,F])])}updateWebDocument(a){this.viewModel?.updateWebDocument(a)}_createLabel(a){if(null!=this.labelFormatFunction){var g=a.getAttribute("data-type"),t=a.getAttribute("data-layout");this.labelFormatFunction(a["data-date"],g,a,t)}}_formatDate(a){return B.formatDate(a,
this._dateFormat)}_formatTime(a){return B.formatDate(a,this._timeFormat)}_getIntlOptions(a){const {timeZone:g}=this;return{...B.convertDateFormatToIntlOptions(a),timeZone:g}}_getTickPositions(a){var {fullTimeExtent:g}=this;if(null==g?.start||null==g.end)return[];const {start:t,end:y}=g;g=[];const {value:l,unit:q}=a;for(a=P.truncateDate(t,q,this.timeZone);a.getTime()<=y.getTime();)a.getTime()>=t.getTime()&&g.push(a.getTime()),a=P.offsetDate(a,l,q,this.timeZone);return g}_updateSliderSteps(){this._slider.steps=
null!=this.effectiveStops&&0<this.effectiveStops.length?this.effectiveStops.map(a=>a.getTime()):null}_playOrStopClick(){switch(this.viewModel.state){case "ready":this.viewModel.play();break;case "playing":this.viewModel.stop();break;case "disabled":break;default:Z.neverReached(this.viewModel.state)}}_previousClick(){this.viewModel.previous()}_nextClick(){this.viewModel.next()}};e.__decorate([f.property()],d.prototype,"_dateFormat",null);e.__decorate([f.property()],d.prototype,"_timeFormat",null);
e.__decorate([f.property()],d.prototype,"actions",null);e.__decorate([f.property()],d.prototype,"disabled",void 0);e.__decorate([f.property()],d.prototype,"effectiveStops",null);e.__decorate([f.property()],d.prototype,"fullTimeExtent",null);e.__decorate([f.property()],d.prototype,"iconClass",void 0);e.__decorate([f.property()],d.prototype,"icon",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"interactive",null);e.__decorate([f.property()],d.prototype,"label",null);e.__decorate([f.property()],
d.prototype,"labelFormatFunction",void 0);e.__decorate([f.property({value:"auto"})],d.prototype,"layout",null);e.__decorate([f.property()],d.prototype,"loop",null);e.__decorate([f.property(),R.messageBundle("esri/widgets/TimeSlider/t9n/TimeSlider")],d.prototype,"messages",void 0);e.__decorate([f.property(),R.messageBundle("esri/t9n/common")],d.prototype,"messagesCommon",void 0);e.__decorate([f.property()],d.prototype,"mode",null);e.__decorate([f.property()],d.prototype,"playRate",null);e.__decorate([f.property()],
d.prototype,"stops",null);e.__decorate([f.property()],d.prototype,"tickConfigs",void 0);e.__decorate([f.property()],d.prototype,"tickFormats",null);e.__decorate([f.property()],d.prototype,"timeExtent",null);e.__decorate([f.property({nonNullable:!0})],d.prototype,"timeVisible",void 0);e.__decorate([f.property()],d.prototype,"timeZone",null);e.__decorate([f.property()],d.prototype,"view",null);e.__decorate([f.property({type:I}),ea.vmEvent("trigger-action")],d.prototype,"viewModel",void 0);e.__decorate([H.accessibleHandler()],
d.prototype,"_playOrStopClick",null);e.__decorate([H.accessibleHandler()],d.prototype,"_previousClick",null);e.__decorate([H.accessibleHandler()],d.prototype,"_nextClick",null);return d=e.__decorate([aa.subclass("esri.widgets.TimeSlider")],d)});