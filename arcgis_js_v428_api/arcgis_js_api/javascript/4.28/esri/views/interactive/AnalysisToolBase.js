// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/reactiveUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ./InteractiveToolBase".split(" "),function(a,b,d,e,h,k,l,f,g){a.AnalysisToolBase=class extends g.InteractiveToolBase{constructor(c){super(c)}initialize(){this.addHandles(d.watch(()=>this.analysisViewData.visible,c=>this.visible=c,d.syncAndInitial))}deactivate(){this.onDeactivate();
this.created||this.analysis.clear()}resetCreated(){this._set("created",!1)}};b.__decorate([e.property({constructOnly:!0})],a.AnalysisToolBase.prototype,"analysis",void 0);b.__decorate([e.property()],a.AnalysisToolBase.prototype,"analysisViewData",void 0);a.AnalysisToolBase=b.__decorate([f.subclass("esri.views.interactive.AnalysisToolBase")],a.AnalysisToolBase);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});