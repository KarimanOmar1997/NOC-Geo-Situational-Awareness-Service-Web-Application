// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/Evented ../../../../../core/maybe ../../../../../core/reactiveUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/accessorSupport/ensureType ../../../../../core/arrayUtils ../../../../../core/has ../../../../../core/accessorSupport/decorators/subclass ../isSupportedGraphicUtils ./isSupportedGraphic ./ReshapeOperation ../../../../interactive/InteractiveToolBase ../../../../interactive/sketch/SketchLabelOptions ../../../../interactive/sketch/SketchTooltipOptions".split(" "),
function(c,d,m,n,f,e,u,v,w,p,q,g,r,t,h,k){c.GraphicReshapeTool=class extends m.EventedMixin(t.InteractiveToolBase){constructor(a){super(a);this._internalGeometryUpdate=!1;this.enableMidpoints=this.enableMoveGraphic=this.enableZVertex=this.enableZShape=!0;this.enableEdgeOffset=!1;this.type="reshape-3d";this.labelOptions=new h;this.tooltipOptions=new k;this.snappingManager=null;this.automaticManipulatorSelection=!1}initialize(){const a=this._reshapeOperation=new r.ReshapeOperation({tool:this});this.addHandles([a.on("reshape",
b=>{"reshape"===b.type&&this._onReshapeGeometryChanged();this.emit("reshape",b)}),a.on("move",b=>{"move"===b.type&&this._onReshapeGeometryChanged();this.emit("move",b)}),a.on("vertex-add",b=>{this._onReshapeGeometryChanged();this.emit("vertex-add",b)}),a.on("vertex-remove",b=>{this._onReshapeGeometryChanged();this.emit("vertex-remove",b)}),a.on("immediate-click",b=>this.emit("immediate-click",b)),this.view.on("pointer-down",["Shift"],b=>b.stopPropagation()),f.watch(()=>this.graphic,()=>this._updateGraphic(),
f.syncAndInitial)]);this.finishToolCreation()}destroy(){this._reshapeOperation=n.destroyMaybe(this._reshapeOperation)}get updating(){return this._reshapeOperation?.updating??!1}_updateGeometry(){const a=g.geometryOfSupportedGraphic(this.graphic);this._reshapeOperation.inputGeometry=null!=a?a.clone():null}_updateGraphic(){this.removeHandles("onGraphicGeometryChange");this._updateGeometry();if(g.isSupportedGraphic(this.graphic)===q.SupportedGraphicResult.SUPPORTED){var a=f.watch(()=>this.graphic?.geometry,
()=>{!1===this._internalGeometryUpdate&&this._updateGeometry()},f.sync);this.addHandles(a,"onGraphicGeometryChange")}}onManipulatorSelectionChanged(){if(this._reshapeOperation)this._reshapeOperation.onManipulatorSelectionChanged()}_updateGeometryInternally(a){this._internalGeometryUpdate=!0;const {graphic:b}=this,{geometry:l}=b;"mesh"===l?.type&&"point"===a.type?(b.geometry=l.centerAt(a),b.notifyGeometryChanged()):b.geometry=a;this._internalGeometryUpdate=!1}_onReshapeGeometryChanged(){const {outputGeometry:a}=
this._reshapeOperation;null!=this.graphic&&a&&this._updateGeometryInternally(a.clone())}get canUndo(){return this._reshapeOperation.canUndo??!1}undo(){null!=this.snappingManager&&this.snappingManager.doneSnapping();const a=this._reshapeOperation.undo(),{outputGeometry:b}=this._reshapeOperation;a&&b&&this._updateGeometryInternally(b.clone())}get canRedo(){return this._reshapeOperation.canRedo??!1}redo(){null!=this.snappingManager&&this.snappingManager.doneSnapping();const a=this._reshapeOperation.redo(),
{outputGeometry:b}=this._reshapeOperation;a&&b&&this._updateGeometryInternally(b.clone())}onInputEvent(a){"key-down"!==a.type||"Delete"!==a.key&&"Backspace"!==a.key||this._reshapeOperation.removeSelectedVertices()}reset(){}get test(){return{snappingManager:this.snappingManager,reshapeOperation:this._reshapeOperation}}};d.__decorate([e.property()],c.GraphicReshapeTool.prototype,"_reshapeOperation",void 0);d.__decorate([e.property({constructOnly:!0,nonNullable:!0})],c.GraphicReshapeTool.prototype,"view",
void 0);d.__decorate([e.property({constructOnly:!0})],c.GraphicReshapeTool.prototype,"graphic",void 0);d.__decorate([e.property({constructOnly:!0,nonNullable:!0})],c.GraphicReshapeTool.prototype,"enableZShape",void 0);d.__decorate([e.property({constructOnly:!0,nonNullable:!0})],c.GraphicReshapeTool.prototype,"enableZVertex",void 0);d.__decorate([e.property({constructOnly:!0,nonNullable:!0})],c.GraphicReshapeTool.prototype,"enableMoveGraphic",void 0);d.__decorate([e.property({constructOnly:!0,nonNullable:!0})],
c.GraphicReshapeTool.prototype,"enableMidpoints",void 0);d.__decorate([e.property({constructOnly:!0,nonNullable:!0})],c.GraphicReshapeTool.prototype,"enableEdgeOffset",void 0);d.__decorate([e.property()],c.GraphicReshapeTool.prototype,"type",void 0);d.__decorate([e.property({constructOnly:!0,type:h})],c.GraphicReshapeTool.prototype,"labelOptions",void 0);d.__decorate([e.property({constructOnly:!0,type:k})],c.GraphicReshapeTool.prototype,"tooltipOptions",void 0);d.__decorate([e.property({constructOnly:!0})],
c.GraphicReshapeTool.prototype,"snappingManager",void 0);d.__decorate([e.property()],c.GraphicReshapeTool.prototype,"updating",null);d.__decorate([e.property()],c.GraphicReshapeTool.prototype,"automaticManipulatorSelection",void 0);c.GraphicReshapeTool=d.__decorate([p.subclass("esri.views.3d.interactive.editingTools.graphicReshape3D.GraphicReshapeTool")],c.GraphicReshapeTool);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});