// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../core/time ../easing ./Definition ./Settings ./apex/Path".split(" "),function(e,d,f,h,g,k){const l={zoom:0,pan:0,rotate:0};e.Animation=class{get time(){return this._time}constructor(a){this._createCamera=a;this._time=d.Milliseconds(0);this.definition=new h.Definition(a);this.path=new k.Path}update(a,b,c){this.definition.update(a,b,c);this.path.update(this.definition,c);this._time=this._applyTimeSettings(d.millisecondsFromSeconds(isFinite(this.path.time)?this.path.time:d.Seconds(0)),
c);this._easing=c.easing??(1E3<=this._time?f.inOutCoastQuad:f.outExpo)}cameraAt(a,b){b=b||this._createCamera();a=Math.min(Math.max(0,a),1);a=this._normalizedEasing(a);a=this.path.interpolateComponentsAt(a,l);b.interpolate(this.definition.source,this.definition.target,a);return b}_normalizedEasing(a){const b=this._easing(0,this._time),c=this._easing(1,this._time);return(this._easing(a,this._time)-b)/(c-b)}_applyTimeSettings(a,b){const c=null!=b.speedFactor?b.speedFactor:1;null!=b.duration?a=b.duration:
null!=b.speedFactor&&(a=d.Milliseconds(a/c));return d.Milliseconds(Math.min(Math.max(null!=b.minDuration?b.minDuration:g.defaultSettings.minDuration/c,a),null!=b.maxDuration?b.maxDuration:g.defaultSettings.maxDuration/c))}};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});