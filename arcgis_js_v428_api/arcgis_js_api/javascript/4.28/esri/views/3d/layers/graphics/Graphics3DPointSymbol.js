// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/asyncUtils ../../../../core/maybe ../../../../core/promiseUtils ./Graphics3DCalloutSymbolLayerFactory ./Graphics3DLineCalloutSymbolLayer ./Graphics3DSymbol".split(" "),function(d,e,f,g,h,k,l){class m extends l.Graphics3DSymbol{constructor(a,b,c){super(a,b,c);this._calloutSymbolLayer=null;this.symbol.hasVisibleCallout()&&(this._calloutSymbolLayer=h.make(this.symbol,b))}async doLoad(a){const b=this._calloutSymbolLayer?e.result(this._calloutSymbolLayer.load()):null;try{await super.doLoad(a),
g.throwIfAborted(a)}catch(c){throw this._calloutSymbolLayer?.abortLoad(),c;}b&&await b}destroy(){super.destroy();this._calloutSymbolLayer=f.destroyMaybe(this._calloutSymbolLayer)}createGraphics3DGraphic(a,b){b=super.createGraphics3DGraphic(a,b);null!=this._calloutSymbolLayer&&null!=b&&(a=this._createCalloutGraphic(a))&&b.setCalloutGraphic(a);return b}globalPropertyChanged(a,b){return super.globalPropertyChanged(a,b)?this._calloutSymbolLayer?this._calloutSymbolLayer.globalPropertyChanged(a,b,c=>c.calloutLayer):
!0:!1}updateGeometry(a,b){const c=super.updateGeometry(a,b);return c&&this._calloutSymbolLayer&&(a=a.calloutLayer)?this._calloutSymbolLayer.updateGeometry(a,b):c}_createCalloutGraphic(a){const b=a.renderingInfo;a.renderingInfo=new k.LineCalloutSymbolLayerRenderingInfo(b.renderer,b.symbol);return this._calloutSymbolLayer.createGraphics3DGraphic(a)}}d.Graphics3DPointSymbol=m;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});