// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/PooledArray","./BufferRange","./DrawCommand"],function(e,g,l,m){function f(){return new g({allocator:a=>a||new m.DrawCommand,deallocator:a=>a})}function h(a,b){const c=a.back();null==c?(a=a.pushNew(),a.first=b.from,a.count=b.numElements):c.first+c.count>=b.from?c.count=b.from-c.first+b.numElements:(a=a.pushNew(),a.first=b.from,a.count=b.numElements)}class k{constructor(){this._numElements=0;this._instances=new Map;this.holes=new g({allocator:a=>a||new l.BufferRange,
deallocator:null});this.hasOccludees=this.hasHighlights=this.hasHiddenInstances=!1;this.drawCommandsDirty=!0;this.drawCommandsDefault=f();this.drawCommandsHighlight=f();this.drawCommandsOccludees=f();this.drawCommandsShadowHighlightRest=f()}get numElements(){return this._numElements}get instances(){return this._instances}addInstance(a,b){this.deleteInstance(a);this._instances.set(a,b);this._numElements+=b.numElements}deleteInstance(a){const b=this._instances.get(a);b&&(this._numElements-=b.numElements,
this._instances.delete(a))}updateInstance(a,b,c){if(a=this._instances.get(a))this._numElements-=a.numElements,a.from=b,a.to=c,this._numElements+=a.numElements}updateDrawState(a){a.isVisible?(a.hasHighlights&&(this.hasHighlights=!0),a.hasOccludees&&(this.hasOccludees=!0)):this.hasHiddenInstances=!0}updateDrawCommands(a){this.drawCommandsDefault.clear();this.drawCommandsHighlight.clear();this.drawCommandsOccludees.clear();this.drawCommandsShadowHighlightRest.clear();this.drawCommandsDirty=!1;if(0!==
this._instances.size)if(this.needsMultipleCommands()){a=Array.from(this._instances.values()).sort((c,d)=>c.from===d.from?c.to-d.to:c.from-d.from);for(var b of a)b.isVisible&&(h(b.hasOccludees?this.drawCommandsOccludees:this.drawCommandsDefault,b),h(b.hasHighlights?this.drawCommandsHighlight:this.drawCommandsShadowHighlightRest,b))}else{const c=this.drawCommandsDefault.pushNew();b=this.holes.front();null!=this.vao&&1===this.holes.length&&b.to===Math.floor(this.vao.byteSize/a)?(c.first=0,c.count=b.from):
(c.first=Infinity,c.count=0,this._instances.forEach(d=>{c.first=Math.min(c.first,d.from);c.count=Math.max(c.count,d.to)}),c.count-=c.first)}}needsMultipleCommands(){return this.hasOccludees||this.hasHighlights||this.hasHiddenInstances}}class n extends k{}e.PerBufferData=k;e.PerVaoData=n;e.hasVao=function(a){return null!=a.vao};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});