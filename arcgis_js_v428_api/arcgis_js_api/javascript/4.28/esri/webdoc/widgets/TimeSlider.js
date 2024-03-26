// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../TimeExtent ../../TimeInterval ../../core/JSONSupport ../../core/lang ../../core/object ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer".split(" "),function(c,g,p,b,q,l,f,t,h,r,k){var m;b=m=class extends b.JSONSupport{constructor(a){super(a);this.fullTimeExtent=this.currentTimeExtent=null;this.loop=
!1;this.stops=this.stopInterval=this.stopDelay=this.numThumbs=this.numStops=null}readCurrentTimeExtent(a){if(a)return new g({start:null!=a[0]?new Date(a[0]):null,end:null!=a[1]?new Date(a[1]):null})}writeCurrentTimeExtent(a,d,e){a&&l.setDeepValue(e,[null!=a.start?a.start.getTime():null,null!=a.end?a.end.getTime():null],d)}readFullTimeExtent(a,d){if(a=d.properties)return new g({start:null!=a.startTime?new Date(a.startTime):null,end:null!=a.endTime?new Date(a.endTime):null})}writeFullTimeExtent(a,d){if(a){d=
d.properties=d.properties||{};var e=a.end;a=a.start;e&&(d.endTime=null!=e?e.getTime():null);a&&(d.startTime=null!=a?a.getTime():null)}}readStopInterval(a,d,e){return a?p.fromJSON({value:a.interval,unit:a.units},e):null}writeStopInterval(a,d,e,n){a&&(a=a.toJSON(n),l.setDeepValue(e,{interval:a.value,units:a.unit},d))}readStops(a){return a?.length?a.map(d=>new Date(d)):null}writeStops(a,d,e){a?.length&&l.setDeepValue(e,a.map(n=>n.getTime()),d)}clone(){return new m(q.clone({currentTimeExtent:this.currentTimeExtent,
fullTimeExtent:this.fullTimeExtent,loop:this.loop,numStops:this.numStops,numThumbs:this.numThumbs,stopDelay:this.stopDelay,stopInterval:this.stopInterval,stops:this.stops}))}};c.__decorate([f.property({type:g,json:{read:{source:"properties.currentTimeExtent"},write:{target:"properties.currentTimeExtent"}}})],b.prototype,"currentTimeExtent",void 0);c.__decorate([h.reader("currentTimeExtent")],b.prototype,"readCurrentTimeExtent",null);c.__decorate([k.writer("currentTimeExtent")],b.prototype,"writeCurrentTimeExtent",
null);c.__decorate([f.property({type:g,json:{read:{source:["properties.endTime","properties.startTime"]},write:{target:{"properties.endTime":{type:Number},"properties.startTime":{type:Number}}}}})],b.prototype,"fullTimeExtent",void 0);c.__decorate([h.reader("fullTimeExtent")],b.prototype,"readFullTimeExtent",null);c.__decorate([k.writer("fullTimeExtent")],b.prototype,"writeFullTimeExtent",null);c.__decorate([f.property({type:Boolean,nonNullable:!0,json:{default:!1,read:{source:"properties.loop"},
write:{target:"properties.loop"}}})],b.prototype,"loop",void 0);c.__decorate([f.property({type:Number,json:{read:{source:"properties.numberOfStops"},write:{target:"properties.numberOfStops",overridePolicy(){var a=!!this.stops?.length;a=!(this.stopInterval||a);return{enabled:a,isRequired:a}}}}})],b.prototype,"numStops",void 0);c.__decorate([f.property({type:[1,2],nonNullable:!0,json:{read:{source:"properties.thumbCount"},write:{target:"properties.thumbCount",isRequired:!0}}})],b.prototype,"numThumbs",
void 0);c.__decorate([f.property({type:Number,nonNullable:!0,json:{read:{source:"properties.thumbMovingRate"},write:{target:"properties.thumbMovingRate",isRequired:!0}}})],b.prototype,"stopDelay",void 0);c.__decorate([f.property({type:p,json:{read:{source:"properties.timeStopInterval"},write:{target:"properties.timeStopInterval",overridePolicy(){const a=!!this.stops?.length;return{enabled:!a,isRequired:!(null!=this.numStops||a)}}}}})],b.prototype,"stopInterval",void 0);c.__decorate([h.reader("stopInterval")],
b.prototype,"readStopInterval",null);c.__decorate([k.writer("stopInterval")],b.prototype,"writeStopInterval",null);c.__decorate([f.property({type:[Date],json:{read:{source:"properties.stops"},write:{target:"properties.stops",overridePolicy(){return{isRequired:null==this.numStops&&!this.stopInterval}}}}})],b.prototype,"stops",void 0);c.__decorate([h.reader("stops")],b.prototype,"readStops",null);c.__decorate([k.writer("stops")],b.prototype,"writeStops",null);return b=m=c.__decorate([r.subclass("esri.webdoc.widgets.TimeSlider")],
b)});