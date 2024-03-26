// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/arrayUtils ../../../core/Collection ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../LayerList/ListItem ../../LayerList/support/layerListUtils ./snappingLayerListUtils".split(" "),function(b,c,g,h,d,q,r,k,l,m,n){var f;b.SnappingListItem=f=class extends l{constructor(a){super(a);this.children=new h;this.parent=null}get allChildrenEnabled(){return this.children.every(a=>
a.enabled)??!1}get childLayerIds(){return this.children.map(a=>a.layer.id).toArray()}get enabled(){return null!=this.featureSource?this.featureSource.enabled:!1}get featureSource(){const {layer:a,getFeatureSnappingSources:e}=this;return e().find(p=>p.layer===a)}get hasChildrenEnabled(){return this.children.some(a=>a.enabled)}_initializeChildLayers(a){a&&(a=a.filter(n.isValidSnappingLayer),super._initializeChildLayers(a))}_makeChildren(a){return a.map(e=>m.canDisplayLayer(e)?new f({layer:e,parent:this,
view:this.view,getFeatureSnappingSources:this.getFeatureSnappingSources}):null).filter(g.isSome).reverse()}};c.__decorate([d.property()],b.SnappingListItem.prototype,"allChildrenEnabled",null);c.__decorate([d.property()],b.SnappingListItem.prototype,"children",void 0);c.__decorate([d.property()],b.SnappingListItem.prototype,"childLayerIds",null);c.__decorate([d.property()],b.SnappingListItem.prototype,"enabled",null);c.__decorate([d.property()],b.SnappingListItem.prototype,"featureSource",null);c.__decorate([d.property({constructOnly:!0})],
b.SnappingListItem.prototype,"getFeatureSnappingSources",void 0);c.__decorate([d.property()],b.SnappingListItem.prototype,"hasChildrenEnabled",null);c.__decorate([d.property()],b.SnappingListItem.prototype,"parent",void 0);b.SnappingListItem=f=c.__decorate([k.subclass("esri.widgets.support.SnappingControls.SnappingListItem")],b.SnappingListItem);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});