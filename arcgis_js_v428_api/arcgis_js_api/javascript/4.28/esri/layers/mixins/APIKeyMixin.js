// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(b,c,e,g,h,k,f){b.APIKeyMixin=a=>{a=class extends a{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(d){null!=d?this._override("apiKey",d):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};
c.__decorate([e.property({type:String})],a.prototype,"apiKey",null);return a=c.__decorate([f.subclass("esri.layers.mixins.APIKeyMixin")],a)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});