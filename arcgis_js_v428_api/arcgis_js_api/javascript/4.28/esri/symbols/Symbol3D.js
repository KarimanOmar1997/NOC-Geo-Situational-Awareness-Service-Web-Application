// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/Collection ../core/collectionUtils ../core/Logger ../core/urlUtils ../core/Warning ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../portal/Portal ../chunks/persistableUrlUtils ./ExtrudeSymbol3DLayer ./FillSymbol3DLayer ./IconSymbol3DLayer ./LineSymbol3DLayer ./ObjectSymbol3DLayer ./PathSymbol3DLayer ./Symbol ./Symbol3DLayer ./TextSymbol3DLayer ./WaterSymbol3DLayer ./support/StyleOrigin ./support/Thumbnail".split(" "),
function(d,l,m,u,h,n,e,v,p,J,w,x,y,z,q,A,B,C,D,E,F,b,r,G,H,k,I){const t={icon:C,object:E,line:D,path:F,fill:B,extrude:A,text:G,water:H};p=l.ofType({base:r,key:"type",typeMap:t,errorContext:"symbol-layer"});b=class extends b{constructor(a){super(a);this.type=this.thumbnail=this.styleOrigin=null;this._set("symbolLayers",new ((this.__accessor__&&this.__accessor__.metadatas&&this.__accessor__.metadatas.symbolLayers)?.type||l))}get color(){return null}set color(a){this.constructed&&u.getLogger(this).error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.")}set symbolLayers(a){m.referenceSetter(a,
this._get("symbolLayers"))}readStyleOrigin(a,f,c){if(a.styleUrl&&a.name)return f=q.fromJSON(a.styleUrl,c),new k({styleUrl:f,name:a.name});if(a.styleName&&a.name)return new k({portal:c?.portal||z.getDefault(),styleName:a.styleName,name:a.name});c?.messages&&c.messages.push(new n("symbol3d:incomplete-style-origin","Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property",{context:c,definition:a}))}writeStyleOrigin(a,f,c,g){a.styleUrl&&a.name?(c=q.toJSON(a.styleUrl,g),h.isAbsolute(c)&&
(c=h.normalize(c)),f.styleOrigin={styleUrl:c,name:a.name}):a.styleName&&a.name&&(a.portal&&g?.portal&&!h.hasSamePortal(a.portal.restUrl,g.portal.restUrl)?g?.messages&&g.messages.push(new n("symbol:cross-portal","The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.",{symbol:this})):f.styleOrigin={styleName:a.styleName,name:a.name})}normalizeCtorArgs(a){return a instanceof r||a&&t[a.type]?{symbolLayers:[a]}:Array.isArray(a)?{symbolLayers:a}:
a}};d.__decorate([e.property({json:{read:!1,write:!1}})],b.prototype,"color",null);d.__decorate([e.property({type:p,nonNullable:!0,json:{write:!0}}),v.cast(m.castForReferenceSetter)],b.prototype,"symbolLayers",null);d.__decorate([e.property({type:k})],b.prototype,"styleOrigin",void 0);d.__decorate([w.reader("styleOrigin")],b.prototype,"readStyleOrigin",null);d.__decorate([y.writer("styleOrigin",{"styleOrigin.styleUrl":{type:String},"styleOrigin.styleName":{type:String},"styleOrigin.name":{type:String}})],
b.prototype,"writeStyleOrigin",null);d.__decorate([e.property({type:I.Thumbnail,json:{read:!1}})],b.prototype,"thumbnail",void 0);d.__decorate([e.property({type:["point-3d","line-3d","polygon-3d","mesh-3d","label-3d"],readOnly:!0})],b.prototype,"type",void 0);return b=d.__decorate([x.subclass("esri.symbols.Symbol3D")],b)});