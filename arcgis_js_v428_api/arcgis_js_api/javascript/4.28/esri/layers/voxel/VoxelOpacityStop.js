// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,d,c,f,g,h,e){a=class extends a.ClonableMixin(d.JSONSupport){constructor(){super(...arguments);this.opacity=1;this.position=0}};b.__decorate([c.property({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],a.prototype,
"opacity",void 0);b.__decorate([c.property({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"position",void 0);return a=b.__decorate([e.subclass("esri.layers.voxel.VoxelOpacityStop")],a)});