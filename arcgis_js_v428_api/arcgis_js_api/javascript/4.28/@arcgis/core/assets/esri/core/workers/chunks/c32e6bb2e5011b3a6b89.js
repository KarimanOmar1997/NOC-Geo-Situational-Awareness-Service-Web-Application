"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6646],{46646:(t,e,o)=>{o.r(e),o.d(e,{default:()=>y});var i,r=o(29768),s=(o(74569),o(12047)),n=o(76506),d=o(34250),p=o(91306),l=o(17533),u=o(2906),a=o(69218),h=o(60947);o(21801),o(92143),o(31450),o(48578),o(73796),o(97714),o(21972),o(86656),o(66396),o(22723),o(379),o(62062),o(6540),o(6906),o(79456),o(50406),o(60991),o(53785),o(57251),o(89623),o(73173),o(82058),o(88762),o(32101),o(91597),o(86787),o(35132),o(84069),o(44567),o(89034),o(98380),o(92482),o(82426),o(72836),o(66106),o(29794),o(92896),o(22781),o(32422),o(59465),o(97546),o(9801),o(53523),o(42911),o(46826),o(45433),o(54732);let c=i=class extends s.wq{constructor(t){super(t),this.cacheHint=void 0,this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,this.start>0&&null==this.where&&(e.definitionExpression="1=1")}clone(){return new i((0,n.d9)({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};(0,r._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],c.prototype,"cacheHint",void 0),(0,r._)([(0,d.Cb)({type:a.D,json:{write:!0}})],c.prototype,"dynamicDataSource",void 0),(0,r._)([(0,d.Cb)({type:String,json:{write:!0}})],c.prototype,"gdbVersion",void 0),(0,r._)([(0,d.Cb)({type:Number,json:{write:!0}})],c.prototype,"geometryPrecision",void 0),(0,r._)([(0,d.Cb)({type:Date})],c.prototype,"historicMoment",void 0),(0,r._)([(0,u.w)("historicMoment")],c.prototype,"_writeHistoricMoment",null),(0,r._)([(0,d.Cb)({type:Number,json:{write:!0}})],c.prototype,"maxAllowableOffset",void 0),(0,r._)([(0,d.Cb)({type:[Number],json:{write:!0}})],c.prototype,"objectIds",void 0),(0,r._)([(0,d.Cb)({type:[String],json:{write:!0}})],c.prototype,"orderByFields",void 0),(0,r._)([(0,d.Cb)({type:[String],json:{write:!0}})],c.prototype,"outFields",void 0),(0,r._)([(0,d.Cb)({type:h.Z,json:{read:{source:"outSR"},write:{target:"outSR"}}})],c.prototype,"outSpatialReference",void 0),(0,r._)([(0,d.Cb)({json:{write:!0}})],c.prototype,"relationshipId",void 0),(0,r._)([(0,d.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],c.prototype,"start",void 0),(0,r._)([(0,u.w)("start"),(0,u.w)("num")],c.prototype,"writeStart",null),(0,r._)([(0,d.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],c.prototype,"num",void 0),(0,r._)([(0,d.Cb)({json:{write:!0}})],c.prototype,"returnGeometry",void 0),(0,r._)([(0,d.Cb)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],c.prototype,"returnM",void 0),(0,r._)([(0,d.Cb)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],c.prototype,"returnZ",void 0),(0,r._)([(0,d.Cb)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],c.prototype,"where",void 0),c=i=(0,r._)([(0,l.j)("esri.rest.support.RelationshipQuery")],c),c.from=(0,p.j)(c);const y=c}}]);