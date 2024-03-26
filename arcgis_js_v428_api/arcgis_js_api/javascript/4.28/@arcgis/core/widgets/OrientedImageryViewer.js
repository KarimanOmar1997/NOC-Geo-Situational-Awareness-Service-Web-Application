/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{p as t}from"../chunks/a11yUtils.js";import{d as s}from"../core/Accessor.js";import{L as i}from"../chunks/Logger.js";import{watch as r,initial as o}from"../core/reactiveUtils.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import{cast as a}from"../core/accessorSupport/decorators/cast.js";import"../chunks/typedArrayUtil.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import{R as p}from"../layers/ImageryTileLayer.js";import m,{l as c}from"./Widget.js";import u,{d as h,c as d,n as j,a as g,b as y,r as k,s as b,f as v,e as f,g as C,h as M}from"./OrientedImageryViewer/OrientedImageryViewerViewModel.js";import"../chunks/widgetUtils.js";import{m as S}from"../chunks/messageBundle.js";import{t as T}from"../chunks/jsxFactory.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../core/lang.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"../chunks/time.js";import"../chunks/ensureType.js";import"../chunks/asyncUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/JSONSupport.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../chunks/MultiOriginJSONSupport.js";import"../layers/Layer.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/ArcGISService.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/persistableUrlUtils.js";import"../layers/mixins/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/utils3.js";import"../chunks/screenUtils.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../layers/mixins/CustomParametersMixin.js";import"../layers/mixins/ImageryTileMixin.js";import"../rasterRenderers.js";import"../renderers/ClassBreaksRenderer.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../symbols/support/jsonUtils.js";import"../chunks/layerUtils2.js";import"../renderers/FlowRenderer.js";import"../renderers/RasterColormapRenderer.js";import"../renderers/support/ColormapInfo.js";import"../chunks/colorRampUtils.js";import"../chunks/colorUtils2.js";import"../chunks/vec4.js";import"../chunks/vec4f64.js";import"../renderers/RasterShadedReliefRenderer.js";import"../renderers/RasterStretchRenderer.js";import"../chunks/stretchRendererUtils.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../renderers/VectorFieldRenderer.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/simplify.js";import"../chunks/utils6.js";import"../chunks/utils7.js";import"../chunks/vectorFieldUtils.js";import"../layers/support/PixelBlock.js";import"../chunks/pixelRangeUtils.js";import"../chunks/utils8.js";import"../symbols/support/cimSymbolUtils.js";import"../chunks/utils9.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../chunks/commonProperties2.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/layerContainerType.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../layers/support/DimensionalDefinition.js";import"../layers/support/MultidimensionalSubset.js";import"../layers/support/RasterFunction.js";import"../chunks/RasterJobHandler.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../chunks/Queue.js";import"../core/workers/RemoteClient.js";import"../layers/support/TileInfo.js";import"../layers/support/LOD.js";import"../chunks/TileKey.js";import"../layers/support/RasterInfo.js";import"../layers/support/RasterBandInfo.js";import"../layers/support/RasterSensorInfo.js";import"../chunks/multidimensionalUtils.js";import"../chunks/RawBlockCache.js";import"../chunks/rasterProjectionHelper.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/RasterSymbolizer.js";import"../chunks/stretchUtils.js";import"../rest/support/FeatureSet.js";import"../layers/support/Field.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../chunks/rasterFunctionHelper.js";import"../layers/support/rasterFunctionConstants.js";import"../chunks/focalStatUtils.js";import"../chunks/rasterRendererHelper.js";import"../chunks/generateRendererUtils.js";import"../rest/support/ImageHistogramParameters.js";import"../layers/support/MosaicRule.js";import"../chunks/dataUtils.js";import"../layers/mixins/OperationalLayer.js";import"../layers/mixins/PortalLayer.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../layers/mixins/RefreshableLayer.js";import"../layers/mixins/ScaleRangeLayer.js";import"../layers/mixins/TemporalLayer.js";import"../TimeInterval.js";import"../layers/support/TimeInfo.js";import"../chunks/utils10.js";import"../chunks/xmlUtilities.js";import"../chunks/TilemapCache.js";import"../chunks/ByteSizeUnit.js";import"../chunks/fetchRasterInfo.js";import"../support/popupUtils.js";import"../chunks/interfaces.js";import"../chunks/domUtils.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/dom.js";import"../chunks/index.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/legacyIcon.js";import"../layers/GraphicsLayer.js";import"../chunks/GraphicsCollection.js";import"../layers/OrientedImageryLayer.js";import"../layers/FeatureLayer.js";import"../renderers/DictionaryRenderer.js";import"../chunks/DictionaryLoader.js";import"../chunks/Version.js";import"../layers/support/FieldsIndex.js";import"../chunks/UnknownTimeZone.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/support/jsonUtils.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DatePickerInput.js";import"../form/elements/inputs/DateTimeOffsetPickerInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/inputs/TimePickerInput.js";import"../form/elements/RelationshipElement.js";import"../chunks/editsZScale.js";import"../chunks/queryZScale.js";import"../layers/mixins/APIKeyMixin.js";import"../chunks/EditBusLayer.js";import"../layers/mixins/FeatureEffectLayer.js";import"../layers/support/FeatureEffect.js";import"../layers/support/FeatureFilter.js";import"../rest/support/Query.js";import"../chunks/DataLayerSource.js";import"../chunks/FullTextSearch.js";import"../chunks/QuantizationParameters.js";import"../rest/support/StatisticDefinition.js";import"../layers/mixins/FeatureLayerBase.js";import"../geometry/HeightModelInfo.js";import"../chunks/featureLayerUtils.js";import"../chunks/featureQueryAll.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"../layers/support/GeometryFieldsInfo.js";import"../layers/support/LayerFloorInfo.js";import"../layers/support/Relationship.js";import"../chunks/serviceCapabilitiesUtils.js";import"../chunks/jsonUtils2.js";import"../layers/support/Subtype.js";import"../layers/mixins/FeatureReductionLayer.js";import"../layers/support/AggregateField.js";import"../layers/support/ExpressionInfo.js";import"../chunks/FeatureReduction.js";import"../layers/support/FeatureReductionBinning.js";import"../layers/support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../layers/support/FeatureReductionCluster.js";import"../layers/support/FeatureReductionSelection.js";import"../chunks/clusterUtils.js";import"../chunks/MD5.js";import"../layers/mixins/OrderedLayer.js";import"../layers/mixins/PublishableLayer.js";import"../layers/support/PublishingInfo.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../chunks/fieldProperties.js";import"../chunks/labelingInfo.js";import"../chunks/versionUtils.js";import"../chunks/styleUtils2.js";import"../rest/support/TopFeaturesQuery.js";import"../rest/support/TopFilter.js";import"../chunks/requestPresets.js";import"../geometry/Circle.js";import"../geometry/support/geodesicUtils.js";import"../geometry/Mesh.js";import"../chunks/axisAngleDegrees.js";import"../chunks/quat.js";import"../chunks/quatf64.js";import"../geometry/support/MeshComponent.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshTexture.js";import"../chunks/imageUtils.js";import"../geometry/support/MeshTextureTransform.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"../chunks/meshErrors.js";import"../geometry/support/MeshGeoreferencedRelativeVertexSpace.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"../geometry/support/MeshLocalVertexSpace.js";import"../geometry/support/MeshTransform.js";import"../chunks/mat4f64.js";import"../chunks/triangulationUtils.js";import"../chunks/earcut.js";import"../chunks/DoubleArray.js";import"../chunks/Indices.js";import"../chunks/deduplicate.js";import"../chunks/plane.js";import"../chunks/vector.js";import"../chunks/mat3f64.js";import"../chunks/vec2f64.js";import"../chunks/mathUtils2.js";import"../chunks/Attribute.js";import"../chunks/ContentObject.js";import"../chunks/Geometry.js";import"../chunks/basicInterfaces.js";import"../chunks/Util.js";import"../chunks/triangle.js";import"../chunks/lineSegment.js";import"../chunks/VertexAttribute.js";import"../chunks/doublePrecisionUtils.js";import"../chunks/georeference.js";import"../chunks/mat3.js";import"../chunks/spatialReferenceEllipsoidUtils.js";import"../chunks/computeTranslationToOriginAndRotation.js";import"../chunks/vec32.js";import"../chunks/BufferView.js";import"../chunks/vec2.js";import"../chunks/projectPointToVector.js";import"../chunks/External.js";import"../chunks/infoFor3D.js";import"../layers/ElevationLayer.js";import"../layers/mixins/ArcGISCachedService.js";import"../chunks/TileInfoTilemapCache.js";import"../chunks/LercDecoder.js";import"../chunks/WorkerHandle.js";import"../views/MapView.js";import"../Viewpoint.js";import"../Camera.js";import"../chunks/Cyclical.js";import"../chunks/CollectionFlattener.js";import"../views/BreakpointsOwner.js";import"../views/DOMContainer.js";import"../chunks/UpdatingHandles.js";import"../views/PopupView.js";import"../chunks/InputManager.js";import"../chunks/PropertiesPool.js";import"../core/signal.js";import"../views/View.js";import"../Map.js";import"../Basemap.js";import"../chunks/loadAll.js";import"../support/BasemapStyle.js";import"../chunks/writeUtils.js";import"../Ground.js";import"../chunks/editableLayers.js";import"../chunks/basemapUtils.js";import"../chunks/collectionUtils2.js";import"../support/LayersMixin.js";import"../support/TablesMixin.js";import"../views/BasemapView.js";import"../views/Magnifier.js";import"../views/Theme.js";import"../chunks/ViewEvents.js";import"../chunks/IViewEvents.js";import"../chunks/interfaces5.js";import"../chunks/screenUtils2.js";import"../views/input/Input.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/input/gamepad/GamepadInputDevice.js";import"../views/navigation/Navigation.js";import"../views/navigation/gamepad/GamepadSettings.js";import"../chunks/heightModelInfoUtils.js";import"../chunks/ViewingMode.js";import"../chunks/projectionUtils.js";import"../views/ViewAnimation.js";import"../chunks/unitBezier.js";import"../views/2d/ViewState.js";import"../chunks/mat2d.js";import"../chunks/mat2df32.js";import"../chunks/mat2df64.js";import"../chunks/mat3f32.js";import"../chunks/vec2f32.js";import"../chunks/TileInfoView.js";import"../chunks/TileKey2.js";import"../chunks/TileStrategy.js";import"../chunks/QueueProcessor.js";import"../chunks/WebGLRequirements.js";import"../chunks/capabilities2.js";import"../chunks/contextUtils.js";import"../chunks/TileStore.js";import"../chunks/rbush.js";import"../chunks/quickselect.js";import"../chunks/HighlightOptions.js";import"../views/ui/DefaultUI.js";import"../views/ui/UI.js";import"../chunks/themeUtils.js";import"./Attribution.js";import"./Attribution/AttributionViewModel.js";import"../chunks/globalCss.js";import"../chunks/accessibleHandler.js";import"./Compass.js";import"./Compass/CompassViewModel.js";import"./support/GoTo.js";import"./NavigationToggle.js";import"./NavigationToggle/NavigationToggleViewModel.js";import"./Zoom.js";import"../chunks/resources.js";import"./Zoom/ZoomViewModel.js";import"../webmap/background/ColorBackground.js";function I(e,t,s,i){return[[[s-e/Math.SQRT2,i-e/Math.SQRT2],[s+e/Math.SQRT2,i-e/Math.SQRT2],[s+t/Math.SQRT2,i-t/Math.SQRT2],[s-t/Math.SQRT2,i-t/Math.SQRT2]],[[s+e/Math.SQRT2,i-e/Math.SQRT2],[s+e/Math.SQRT2,i+e/Math.SQRT2],[s+t/Math.SQRT2,i+t/Math.SQRT2],[s+t/Math.SQRT2,i-t/Math.SQRT2]],[[s+e/Math.SQRT2,i+e/Math.SQRT2],[s-e/Math.SQRT2,i+e/Math.SQRT2],[s-t/Math.SQRT2,i+t/Math.SQRT2],[s+t/Math.SQRT2,i+t/Math.SQRT2]],[[s-e/Math.SQRT2,i+e/Math.SQRT2],[s-e/Math.SQRT2,i-e/Math.SQRT2],[s-t/Math.SQRT2,i-t/Math.SQRT2],[s-t/Math.SQRT2,i+t/Math.SQRT2]]]}function w(e,t,s){const[i,r,o,n]=e;return`M ${i.join(" ")} A ${t} ${t} 0 0 1 ${r.join(" ")} L ${o.join(" ")} A ${s} ${s} 0 0 0 ${n.join(" ")} Z`}let _=class extends m{constructor(e,t){super(e,t),this.dockEnabled=!1,this.galleryOpened=!1,this.imageEnhancementToolActive=!1,this.navigationToolActive=!1,this.viewModel=new u,this.messagesCommon=null,this.visibleElements={...h},this._navigationTool=null,this._actionItems=new Map,this._galleryController=new AbortController,this._galleryObserver=new IntersectionObserver(this._lazyLoadImage.bind(this)),this._loadImageFromGallery=this._loadImageFromGallery.bind(this),this._registerGalleryItem=this._registerGalleryItem.bind(this),this._unregisterGalleryItem=this._unregisterGalleryItem.bind(this),this._renderViewerContainer=this._renderViewerContainer.bind(this),this._renderViewer=this._renderViewer.bind(this)}initialize(){this.addHandles([r((()=>[this.viewModel?.selectedFeatureAngle,this._navigationTool]),(([e,t])=>{!this.viewModel.updating&&t&&this._updateNavigationTool(t)}),o),r((()=>this.currentCoverageVisible),(e=>this._onCurrentCoverageVisibilityChange(e))),r((()=>this.isAdditionalCoverageVisible),(e=>this._onAdditionalCoverageVisibilityChange(e))),r((()=>this.isAdditionalPointSourcesVisible),(e=>this._onAdditionalCameraLocationsVisibility(e)))])}loadDependencies(){return c({tooltip:()=>import("../chunks/calcite-tooltip.js"),action:()=>import("../chunks/calcite-action.js"),"action-group":()=>import("../chunks/calcite-action-group.js"),"action-bar":()=>import("../chunks/calcite-action-bar.js"),label:()=>import("../chunks/calcite-label.js"),panel:()=>import("../chunks/calcite-panel.js"),slider:()=>import("../chunks/calcite-slider.js")})}destroy(){this._galleryController.abort(),this._galleryObserver.disconnect()}get activeLayer(){return s(i.getLogger(this),"activeLayer",{replacement:"layer"}),this.layer}set activeLayer(e){s(i.getLogger(this),"activeLayer",{replacement:"layer"}),this.layer=e}get currentCoverageVisible(){return this.viewModel.currentCoverageVisible}set currentCoverageVisible(e){this.viewModel.currentCoverageVisible=e}get disabled(){return this.viewModel.disabled}set disabled(e){this.viewModel.disabled=e}get isDocked(){return s(i.getLogger(this),"isDocked",{replacement:"dockEnabled"}),this.dockEnabled}set isDocked(e){s(i.getLogger(this),"isDocked",{replacement:"dockEnabled"}),this.dockEnabled=e}get imageGalleryEnabled(){return this.viewModel.imageGalleryEnabled}get isAdditionalCoverageVisible(){return this.viewModel.isAdditionalCoverageVisible}set isAdditionalCoverageVisible(e){this.viewModel.isAdditionalCoverageVisible=e}get isAdditionalPointSourcesVisible(){return this.viewModel.isAdditionalPointSourcesVisible}set isAdditionalPointSourcesVisible(e){this.viewModel.isAdditionalPointSourcesVisible=e}get mapImageConversionToolState(){return this.viewModel.mapImageConversionToolState}set mapImageConversionToolState(e){this.viewModel.mapImageConversionToolState=e}get layer(){return this.viewModel.layer}set layer(e){this.viewModel.layer=e}get referencePoint(){return this.viewModel.referencePoint??null}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}castVisibleElements(e){return{...h,...e}}async _getThumbnailPixelBlockInternal(e,t){const{level:s,offset:r,size:o}=this._getMaxLevelRasterParameters(e);try{const{pixelBlock:i}=await e.fetchRawPixels(s,r,o,t);return i}catch(e){i.getLogger(this).warn("failed to create canvas with pixeldata",e)}return null}_getMaxLevelRasterParameters(e){const{storageInfo:t,width:s,height:i}=e.rasterInfo,{maximumPyramidLevel:r,pyramidScalingFactor:o}=t,n=o??2;return{level:r,offset:{x:0,y:0},size:{width:Math.ceil(s/n**r),height:Math.ceil(i/n**r)}}}async _getThumbnailPixelBlock(e){const{signal:t}=this._galleryController;try{const s=await p.open({url:e,signal:t});return s?await this._getThumbnailPixelBlockInternal(s,{signal:t}):null}catch(e){i.getLogger(this).error("failed to create thumbnail",e)}return null}_handleBrightnessChange(e){this.viewModel.brightness=e.target.value??0}_handleContrastChange(e){this.viewModel.contrast=e.target.value??0}_handleSharpnessChange(e){this.viewModel.sharpness=e.target.value??0}_lazyLoadImage(e,t){e.forEach((async e=>{if(e.isIntersecting){const s=e.target,i=s.getAttribute("data-src");if(!i)return;const r=await this._getThumbnailPixelBlock(i);if(!r)return;s.width=r.width,s.height=r.height;const o=s.getContext("2d");if(!o)return;const n=o.createImageData(s.width,s.height);n.data.set(r.getAsRGBA()),o.putImageData(n,0,0),t.unobserve(s)}}))}_loadImageFromGallery(e){const{target:t}=e;if(!t)return;const s=t.getAttribute("data-objectid");s&&this.viewModel.selectedFeature?.attributes.objectId!==Number(s)&&(this.viewModel.selectedFeature=this.viewModel.features?.find((({attributes:e})=>e.objectId===Number(s))))}_onAdditionalCoverageVisibilityChange(e){this.viewModel.setAdditionalCoverageVisibility(e)}_onAdditionalCameraLocationsVisibility(e){this.viewModel.setAdditionalCameraLocationsVisibility(e)}_onCurrentCoverageVisibilityChange(e){this.viewModel.setCurrentCoverageVisibility(e)}_registerGalleryItem(e){this._galleryObserver.observe(e)}_resetImageTools(){this.viewModel.sharpness=this.viewModel.brightness=this.viewModel.contrast=0}_resizeNavigationTool(){this._navigationTool?.parentElement?.classList.toggle(d.navigationZoomed)}_storeActionElement(e){this._actionItems.set(e.text,e)}_storeNavigationToolReference(e){this._navigationTool=e}_toggleAdditionalCameraLocations(){this.isAdditionalPointSourcesVisible=!this.isAdditionalPointSourcesVisible}_toggleAdditionalCoverage(){this.isAdditionalCoverageVisible=!this.isAdditionalCoverageVisible}_toggleCurrentCoverage(){this.currentCoverageVisible=!this.currentCoverageVisible}_toggleImageEnhancementToolState(e){e.stopPropagation(),this.imageEnhancementToolActive=!this.imageEnhancementToolActive,this.imageEnhancementToolActive&&(this.galleryOpened&&(this.galleryOpened=!1),this.navigationToolActive&&(this.navigationToolActive=!1))}_toggleImageGallery(e){e.stopPropagation(),this.galleryOpened=!!this.imageGalleryEnabled&&!this.galleryOpened,this.galleryOpened&&(this.imageEnhancementToolActive&&(this.imageEnhancementToolActive=!1),this.navigationToolActive&&(this.navigationToolActive=!1))}_toggleNavigationTool(){this.navigationToolActive=!this.navigationToolActive,this.navigationToolActive&&(this.galleryOpened&&(this.galleryOpened=!1),this.imageEnhancementToolActive&&(this.imageEnhancementToolActive=!1))}_toggleMapImageConversionToolState(){this.mapImageConversionToolState=!this.mapImageConversionToolState}_unregisterGalleryItem(e){this._galleryObserver.unobserve(e)}_updateNavigationTool(e){const{previousFeatureAngle:t,selectedFeatureAngle:s}=this.viewModel,i=(s-t+540)%360-180;e.style.setProperty(j,`${t}deg`),e.style.setProperty(g,`${t+i}deg`)}loadBestImage(e){this.viewModel.loadBestImage(e)}async plotMapPoint(e){return this.viewModel.plotMapPoint(e)}resetImage(){this.viewModel.resetImage()}render(){const{dockEnabled:e,viewModel:{updating:t}}=this;return T("div",{class:this.classes(y,k)},T("calcite-panel",{bind:this,class:e?d.dock:d.float,heading:this.visibleElements.title?this.messages.title:void 0,loading:t},this.visibleElements.coverageMenu?this._renderMenuBarContainer():null,this._renderBody()))}_renderActionTooltips(){return[...this._actionItems].map((([e,t])=>T("calcite-tooltip",{key:e,referenceElement:t},T("span",null,e))))}_renderBody(){return T("div",{class:d.body},this._renderViewerContainer(),this._renderImageGallery(),this._renderImageEnhancementTools(),this._renderNavigation())}_renderImageEnhancementTools(){const{imageEnhancementToolActive:e,viewModel:{brightness:t,contrast:s,sharpness:i}}=this;return e&&T("calcite-panel",{bind:this,class:d.imageEnhancementWrapper,closable:!0,closed:!e,heading:this.messages.imageEnhancement,key:this.messages.imageEnhancement,onCalcitePanelClose:this._toggleImageEnhancementToolState},T("div",{class:d.imageEnhancementTools},T("div",{class:d.imageEnhancementToolContainer},T("calcite-label",null,this.messages.brightness,T("calcite-slider",{bind:this,labelTicks:!0,max:10,min:-10,ticks:5,value:t,onCalciteSliderInput:this._handleBrightnessChange}))),T("div",{class:d.imageEnhancementToolContainer},T("calcite-label",null,this.messages.contrast,T("calcite-slider",{bind:this,labelTicks:!0,max:10,min:-10,ticks:5,value:s,onCalciteSliderInput:this._handleContrastChange}))),T("div",{class:d.imageEnhancementToolContainer},T("calcite-label",null,this.messages.sharpness,T("calcite-slider",{bind:this,labelTicks:!0,max:1,min:0,step:.1,ticks:.5,value:i,onCalciteSliderInput:this._handleSharpnessChange})))),T("calcite-action",{bind:this,icon:"reset",onclick:this._resetImageTools,slot:"header-actions-end",text:this.messagesCommon.reset}))}_renderImageGallery(){const{container:e,galleryOpened:t,imageGalleryEnabled:s,viewModel:{thumbnails:i}}=this;return s&&t&&e&&i?T("calcite-panel",{bind:this,class:d.carousel,closable:!0,closed:!t,heading:this.messages.imageGallery,key:this.messages.imageGallery,onCalcitePanelClose:this._toggleImageGallery},T("div",{class:d.carouselContainer},this._renderThumbnails(i))):null}_renderMapImageConversionTool(){const{mapImageConversionToolState:e,viewModel:{imageLoaded:t}}=this;return T("calcite-action",{active:e,afterCreate:this._storeActionElement,bind:this,disabled:!t,icon:"image-pin",onclick:this._toggleMapImageConversionToolState,text:this.messages.mapImageConversionTool})}_renderNavigation(){const{viewModel:{sectorData:e,features:s,selectedFeature:i,updating:r,navigatorSelectedFeature:o}}=this;if(!s.length||!this.container||!i)return null;let n,a,l,p,m;if(o){const{x:e,y:t,direction:s}=o,[i,r,c,u]=b[s];n=`M ${e} ${t} L ${i} ${r} A ${M[2]} ${M[2]} 0 0 1 ${c} ${u} Z`,a=e,p=t,l=b[s][4],m=b[s][5]}const c=e=>{const t=e.target.dataset?.sector;t&&this.viewModel.handleSectorClick(+t)},u=e=>{const t=e.target.dataset;if(!t)return;const{featureIndexInSector:s,sector:i}=t;s&&i&&this.viewModel.handleFeatureClick({sector:i,featureIndexInSector:+s})},h=e=>{e.removeEventListener("click",u)},j=e?.map((e=>e?.items)).filter(Boolean).flatMap((e=>e?.map((({x:e,y:t,objectID:s,featureIndexInSector:r,sector:o})=>T("circle",{afterRemoved:h,class:this.classes(d.feature,{selected:i.attributes.objectId===s}),cx:e,cy:t,"data-featureIndexInSector":r,"data-sector":o,key:`${d.feature}-${s}`,onclick:u,r:v}))))),g=e=>{e.removeEventListener("click",c)};return this.navigationToolActive&&!r?T("div",{bind:this,class:d.navigationWrapper,key:this.messages.navigationTool},T("svg",{afterCreate:this._storeNavigationToolReference.bind(this),class:t()?f:d.rotateWithAnimation,focusable:"false",height:C,role:"img",width:C,xmlns:"http://www.w3.org/2000/svg"},T("defs",null,T("linearGradient",{gradientUnits:"userSpaceOnUse",id:`${this.id}-coverage-fill`,x1:a,x2:l,y1:p,y2:m},T("stop",{class:d.navigationPathOffset0,offset:0}),T("stop",{class:d.navigationPathOffset1,offset:1}))),T("g",null,T("circle",{class:this.classes(d.sector,d.outerSector),cx:M[3],cy:M[3],onclick:this._resizeNavigationTool.bind(this),r:M[3]}),T("circle",{class:d.sector,cx:M[3],cy:M[3],r:M[2]}),T("circle",{class:d.sector,cx:M[3],cy:M[3],r:M[1]}),T("circle",{class:d.sector,cx:M[3],cy:M[3],r:M[0]}),T("path",{class:d.pointer,d:"M 56.5 6.06217782649107 L 60 0 L 63.5 6.06217782649107 Z",key:`${d.pointer}-west`}),T("path",{class:this.classes(d.pointer,d.north),d:"M 113.93782217350893 56.5 L 120 60 L 113.93782217350893 63.5 Z",key:`${d.pointer}-north`}),T("path",{class:d.pointer,d:"M 56.5 113.93782217350893 L 60 120 L 63.5 113.93782217350893 Z",key:`${d.pointer}-east`}),T("path",{class:d.pointer,d:"M 6.06217782649107 56.5 L 0 60 L 6.06217782649107 63.5 Z",key:`${d.pointer}-south`}),T("path",{class:this.classes(d.sector,d.sectorSeparator),d:"M 23.937554159486076 23.937554159486076 L 96.06244584051393 96.06244584051393 M 23.937554159486076 96.06244584051393 L 96.06244584051393 23.937554159486076",key:d.sectorSeparator}),function(e,t,s){const[i,r,o,n]=[...e,0];return[...I(i,r,t,s).map((e=>w(e,i,r))),...I(r,o,t,s).map((e=>w(e,r,o))),...I(o,n,t,s).map((e=>w(e,o,n)))]}([M[2],M[1],M[0]],M[3],M[3]).map(((t,s)=>T("path",{afterRemoved:g,class:this.classes(d.sector,e?.[s]?.length?d.sectorEnabled:d.sectorDisabled),d:t,"data-sector":`${s}`,key:`${d.sector}-${s}`,onclick:c}))),T("path",{class:this.classes(d.sector,d.sectorCross),d:"M 56.4 56.4 L 63.53 63.53 M 63.53 56.4 L 56.4 63.53",key:d.sectorCross}),j,i.attributes.cameraPitch>=5&&n?T("path",{class:d.selectedFeaturePath,d:n,fill:`url(#${this.id}-coverage-fill)`,key:d.selectedFeaturePath}):null))):null}_renderNavigationTool(){const{imageLoaded:e}=this.viewModel;return T("calcite-action",{active:this.navigationToolActive,afterCreate:this._storeActionElement,bind:this,disabled:!e,icon:"explore",onclick:this._toggleNavigationTool,text:this.messages.navigationTool})}_renderImageEnhancementTool(){const{imageLoaded:e}=this.viewModel;return T("calcite-action",{active:this.imageEnhancementToolActive,afterCreate:this._storeActionElement,bind:this,disabled:!e,icon:"sliders-horizontal",onclick:this._toggleImageEnhancementToolState,text:this.messages.imageEnhancement})}_renderMenuBarContainer(){const{currentCoverageVisible:e,isAdditionalCoverageVisible:t,isAdditionalPointSourcesVisible:s,imageGalleryEnabled:i}=this;return T("calcite-action-bar",{expandDisabled:!0,layout:"horizontal",slot:"action-bar"},T("calcite-action-group",{expanded:!0},T("calcite-action",{active:e,afterCreate:this._storeActionElement,bind:this,class:d.currentCoverage,icon:"trapezoid-area",onclick:this._toggleCurrentCoverage,text:this.messages.currentFootprint}),T("calcite-action",{active:t,afterCreate:this._storeActionElement,bind:this,class:d.addCoverage,icon:"trapezoid-area",onclick:this._toggleAdditionalCoverage,text:this.messages.additionalFootprints}),T("calcite-action",{active:s,afterCreate:this._storeActionElement,bind:this,class:d.addExpPoints,icon:"circle-area",onclick:this._toggleAdditionalCameraLocations,text:this.messages.additionalCameraLocations})),T("calcite-action-group",{layout:"horizontal"},this.visibleElements.mapImageConversionTool?this._renderMapImageConversionTool():null,this.visibleElements.navigationTool?this._renderNavigationTool():null,this.visibleElements.imageEnhancement?this._renderImageEnhancementTool():null),T("calcite-action-group",null,T("calcite-action",{active:this.galleryOpened,afterCreate:this._storeActionElement,bind:this,disabled:!i,icon:"images",onclick:this._toggleImageGallery,text:this.messages.imageGallery,textEnabled:!0})),this._renderActionTooltips())}_renderMessageBox(){const{displayMessage:e}=this.viewModel;return e?T("span",{class:d.messageBox},this.messages[e.key],e?.data):null}_renderThumbnails(e){const{selectedFeature:t}=this.viewModel;return t?T("div",{class:d.carouselContent},e.items.map((({url:e,objectId:s},i)=>T("div",{class:`${d.carouselItemWrapper}${t.attributes.objectId===s?"--selected":""}`,key:`${d.carouselItemWrapper}-${i}`},T("canvas",{afterCreate:this._registerGalleryItem,afterRemoved:this._unregisterGalleryItem,alt:`thumbnail-${s}`,class:d.carouselItem,"data-objectid":`${s}`,"data-src":e,onclick:this._loadImageFromGallery}))))):null}_renderViewerContainer(){return T("div",{class:d.viewerContainer},this._renderViewer(),this._renderMessageBox())}_renderViewer(){const{displayMessage:e}=this.viewModel;return T("div",{afterCreate:this.viewModel.loadViewer,bind:this,class:`${d.viewer}${e?"--hide":""}`})}};e([n()],_.prototype,"activeLayer",null),e([n()],_.prototype,"currentCoverageVisible",null),e([n()],_.prototype,"disabled",null),e([n()],_.prototype,"dockEnabled",void 0),e([n()],_.prototype,"isDocked",null),e([n()],_.prototype,"galleryOpened",void 0),e([n()],_.prototype,"imageEnhancementToolActive",void 0),e([n({readOnly:!0})],_.prototype,"imageGalleryEnabled",null),e([n()],_.prototype,"isAdditionalCoverageVisible",null),e([n()],_.prototype,"isAdditionalPointSourcesVisible",null),e([n()],_.prototype,"mapImageConversionToolState",null),e([n()],_.prototype,"layer",null),e([n()],_.prototype,"navigationToolActive",void 0),e([n({type:u})],_.prototype,"viewModel",void 0),e([n(),S("esri/widgets/OrientedImageryViewer/t9n/OrientedImageryViewer")],_.prototype,"messages",void 0),e([n(),S("esri/t9n/common")],_.prototype,"messagesCommon",void 0),e([n()],_.prototype,"referencePoint",null),e([n()],_.prototype,"view",null),e([n()],_.prototype,"visibleElements",void 0),e([a("visibleElements")],_.prototype,"castVisibleElements",null),e([n()],_.prototype,"_navigationTool",void 0),_=e([l("esri.widgets.OrientedImageryViewer")],_);const x=_;export{x as default};
