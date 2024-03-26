// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/Accessor ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/Point".split(" "),function(b,d,m,c,n,f,t,u,v,p,g,q,h){function r(a){return null!=a?.sourcePoint&&null!=a.mapPoint}d=class extends m{constructor(){super(...arguments);
this.mapPoint=this.sourcePoint=null}};b.__decorate([f.property()],d.prototype,"sourcePoint",void 0);b.__decorate([f.property({type:h})],d.prototype,"mapPoint",void 0);d=b.__decorate([g.subclass("esri.layers.support.ControlPoint")],d);c=class extends c.ClonableMixin(n.JSONSupport){constructor(a){super(a);this.controlPoints=this.frame=null}readControlPoints(a){return a.map(e=>({sourcePoint:{x:e.frameX,y:e.frameY},mapPoint:new h(e.point)}))}writeControlPoints(a,e){null!=a&&r(a[0])&&(e.controlPoints=
a.map(k=>{const l=k.sourcePoint;return{frameX:l.x,frameY:l.y,point:k.mapPoint.toJSON()}}))}};b.__decorate([f.property({type:String})],c.prototype,"frame",void 0);b.__decorate([f.property({type:[d],json:{write:{allowNull:!1,isRequired:!0}}})],c.prototype,"controlPoints",void 0);b.__decorate([p.reader("controlPoints")],c.prototype,"readControlPoints",null);b.__decorate([q.writer("controlPoints")],c.prototype,"writeControlPoints",null);return c=b.__decorate([g.subclass("esri.layers.support.VideoFrame")],
c)});