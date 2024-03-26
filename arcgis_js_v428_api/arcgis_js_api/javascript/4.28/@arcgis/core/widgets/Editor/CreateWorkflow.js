/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{watch as s}from"../../core/reactiveUtils.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import{g as i,j as r}from"../../chunks/layerUtils2.js";import{g as p}from"../../chunks/helpMessageUtils.js";import n from"./CreateWorkflowData.js";import{Edits as m}from"./Edits.js";import a from"./Workflow.js";import{a as l,d as c,e as u,h as j,f as d,p as h,g as y,c as k,v as b,u as f}from"../../chunks/workflowUtils.js";import"../../chunks/asyncUtils.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/time.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../request.js";import"../../chunks/UpdatingHandles.js";import"../../Graphic.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/assets.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/diffUtils.js";import"../../chunks/drapedUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/compilerUtils.js";import"../../chunks/styleUtils.js";import"../../symbols/support/jsonUtils.js";import"../../symbols/support/symbolUtils.js";import"../../chunks/utils8.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/utils3.js";import"../../chunks/mat4.js";import"../../chunks/_commonjsHelpers.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils9.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../chunks/previewUtils.js";import"../../chunks/renderUtils.js";import"../../chunks/colorUtils2.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/mat2df32.js";import"../../chunks/mat2d.js";import"../../chunks/jsxFactory.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/previewSymbol3D.js";import"../../chunks/webStyleSymbolUtils.js";import"../../chunks/devEnvironmentUtils.js";import"../../chunks/GraphicState.js";import"../../chunks/hitTestSelectUtils.js";import"../../chunks/templateUtils.js";var w;let g=w=class extends a{constructor(t){super(t),this.type="create"}get shouldShowAttachments(){return!(!this.data?.creationInfo||!this.data.viewModel)&&l(this.data)}get shouldAllowAttachmentEditing(){return this.shouldShowAttachments}get hasPendingEdits(){return!0}get helpMessage(){if("editing-new-feature"!==this.stepId)return;const{creationInfo:t,viewModel:s}=this.data,o=t.layer.geometryType,e=s.sketchViewModel.createGraphic?.geometry;return"mesh"!==o?p(o,e):void 0}get reliesOnOwnerAdminPrivileges(){const{layer:t}=this.data.creationInfo,s=t.capabilities?.operations.supportsAdd,o=i(t)?.operations.supportsAdd;return r(t)&&!t.editingEnabled||!!o&&!s}static create(t,s,o){const e=new w({data:new n({edits:new m,viewModel:t}),onCommit:async t=>{await o(t.creationInfo.layer,{addFeatures:[t.edits.feature]})}});return e._set("steps",this._createWorkflowSteps(e,s)),e}static _createWorkflowSteps(t,o="awaiting-feature-creation-info"){const{data:e}=t,i=new Map,r=c(["awaiting-feature-creation-info","awaiting-feature-to-create","editing-new-feature","adding-attachment","editing-attachment"],o,{"awaiting-feature-creation-info":()=>({id:"awaiting-feature-creation-info",async setUp(){e.creationInfo=null,e.edits.feature=null,e.viewModel.featureTemplatesViewModel.select(null),t.addHandles(e.viewModel.featureTemplatesViewModel.on("select",(({item:t})=>{t&&(e.creationInfo=t,e.viewModel.activeWorkflow?.next())})),this.id)},async tearDown(){t.removeHandles(this.id)}}),"awaiting-feature-to-create":()=>({id:"awaiting-feature-to-create",async setUp(){t.addHandles(await j(e.viewModel.sketchViewModel,e.creationInfo,(t=>{e.edits.feature=t,e.viewModel.activeWorkflow?.next()}),i),this.id)},async tearDown(){t.removeHandles(this.id)}}),"editing-new-feature":()=>({id:"editing-new-feature",async setUp(){const o=e.edits.feature,r=o.sourceLayer,p=e.viewModel,n=p.sketchViewModel,m=d(p.layerInfos,r),a=m?.formTemplate,{spatialReference:l}=p.view;p.featureFormViewModel.set({arcadeEditType:"INSERT",feature:o,formTemplate:a,spatialReference:l}),n.allowDeleteKey=!1,h(p.attachmentsViewModel);const c=y(o);await k({graphic:o,sketchViewModel:n,sourceLayer:r,visualVariables:c,webStyleCache:i});const u=n.on("update",(async t=>{const s=t.graphics[0];if("complete"===t.state)return k({graphic:s,sketchViewModel:n,sourceLayer:r,visualVariables:c,webStyleCache:i});await b(n.view,s,t,c,i);const o=s.attributes;if(null!=c.rotation){const{field:t}=c.rotation;p.featureFormViewModel.setValue(t,o[t])}if(null!=c.size){const{field:t}=c.size;p.featureFormViewModel.setValue(t,o[t])}}));t.addHandles([e.viewModel.featureFormViewModel.on("value-change",(async()=>{e.edits.updateAttributes(e.viewModel.featureFormViewModel.getValues()),o.attributes=e.edits.feature.attributes,"3d"===n.view.type&&await f(o,i)})),u,s((()=>e.viewModel.attachmentsViewModel.mode),(t=>{"add"===t&&e.viewModel.activeWorkflow.go("adding-attachment"),"edit"===t&&e.viewModel.activeWorkflow.go("editing-attachment")}))],this.id)},async tearDown(s){s.canceled&&e.viewModel.sketchViewModel.layer.removeAll(),t.removeHandles(this.id)}}),"adding-attachment":()=>({id:"adding-attachment",parent:"editing-new-feature",async setUp(){},async tearDown(){e.viewModel.attachmentsViewModel.mode="view"}}),"editing-attachment":()=>({id:"editing-attachment",parent:"editing-new-feature",async setUp(){},async tearDown(){e.viewModel.attachmentsViewModel.mode="view"}})});return u(e,r)}};t([o()],g.prototype,"shouldShowAttachments",null),t([o()],g.prototype,"shouldAllowAttachmentEditing",null),t([o()],g.prototype,"hasPendingEdits",null),t([o()],g.prototype,"helpMessage",null),t([o()],g.prototype,"reliesOnOwnerAdminPrivileges",null),g=w=t([e("esri.widgets.Editor.CreateWorkflow")],g);const S=g;export{S as default};
