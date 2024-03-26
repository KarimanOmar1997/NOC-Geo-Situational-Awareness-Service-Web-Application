// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Accessor ../../core/Logger ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(c,d,g,h,f,e,l,m,n,k){c.InteractiveToolViewModel=class extends g{constructor(a){super(a);this.tool=null;this._loggedUnsupportedErrorOnce=!1;this.logger=h.getLogger(this);null!=a?.visible&&(this.visible=a.visible)}initialize(){this.addHandles(f.watch(()=>
({ready:null!=this.view&&this.view.ready,supported:this.supported}),({ready:a,supported:b})=>{!a||b||this._loggedUnsupportedErrorOnce||(this.logError(this.unsupportedErrorMessage),this._loggedUnsupportedErrorOnce=!0)},f.syncAndInitial))}destroy(){this.removeTool();this.view=null}get active(){return null!=this.tool&&this.tool.active}get disabled(){return null==this.view||!this.view.ready||!this.supported}get supported(){return null==this.view||this.view.type===this.supportedViewType}get view(){return this._get("view")}set view(a){a!==
this.view&&(this.removeTool(),this._set("view",a),this.removeHandles("tools"),null!=a&&this.addHandles(a.tools.on("after-remove",b=>{b.item===this.tool&&this._set("tool",null)}),"tools"))}set visible(a){this._set("visible",a);null!=this.tool&&(this.tool.visible=a)}createTool(a={interactive:!1}){this.removeTool();if(null!=this.view&&this.view.ready&&this.supported){var b=this.constructTool();b.created?(this._set("tool",b),this.view.tools.add(b)):a.interactive?(this._set("tool",b),this.view.addAndActivateTool(b),
f.when(()=>b.created,()=>{b.active&&null!=this.view&&(this.view.activeTool=null)},{initial:!0,once:!0})):b.destroy()}}removeTool(){const a=this.tool;if(null!=a){var b=this.view?.tools;null!=b?b.remove(a):a.destroy();this._set("tool",null)}}logError(...a){this.logger.error(...a)}};d.__decorate([e.property({constructOnly:!0})],c.InteractiveToolViewModel.prototype,"tool",void 0);d.__decorate([e.property()],c.InteractiveToolViewModel.prototype,"active",null);d.__decorate([e.property()],c.InteractiveToolViewModel.prototype,
"disabled",null);d.__decorate([e.property()],c.InteractiveToolViewModel.prototype,"supported",null);d.__decorate([e.property({value:null})],c.InteractiveToolViewModel.prototype,"view",null);d.__decorate([e.property({type:Boolean,value:!0})],c.InteractiveToolViewModel.prototype,"visible",null);c.InteractiveToolViewModel=d.__decorate([k.subclass("esri.widgets.support.InteractiveToolViewModel")],c.InteractiveToolViewModel);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});