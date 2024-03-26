// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../../../../core/screenUtils ../../../../../../symbols/cim/utils ../../color ../../definitions ../../number ../../materialKey/MaterialKey ./util ./WGLBaseLineTemplate ./WGLDynamicMeshTemplate ../../util/Result".split(" "),function(q,g,r,h,n,u,p,v,w,x){class t extends v(w){constructor(a,c,m){super(a);this._minMaxZoom=n.i1616to32(Math.round(c*h.minMaxZoomPrecisionFactor),Math.round(m*h.minMaxZoomPrecisionFactor));this._cimLineLayer=a;let k=0;g.isFeatureValueFn(a.width)||(k=.5*q.pt2px(a.width));
this._dynamicPropertyMap.set("_halfWidth",(d,l,e)=>g.isFeatureValueFn(a.width)?.5*q.pt2px(a.width(d,l,e)):k);g.isFeatureValueFn(a.cap)?this._dynamicPropertyMap.set("_capType",a.cap):this._capType=a.cap;g.isFeatureValueFn(a.join)?this._dynamicPropertyMap.set("_joinType",a.join):this._joinType=a.join;const b=a.color;g.isFeatureValueFn(b)?this._dynamicPropertyMap.set("_fillColor",(d,l,e)=>r.premultiplyAlphaRGBA(b(d,l,e))):this._fillColor=b&&r.premultiplyAlphaRGBA(b)||0;const f=a.miterLimit;g.isFeatureValueFn(f)?
this._dynamicPropertyMap.set("_miterLimitCosine",(d,l,e)=>p.getLimitCosine(f(d,l,e))):this._miterLimitCosine=p.getLimitCosine(f);null!=a.effects&&(c=a.effects,g.isFeatureValueFn(c)?this._dynamicPropertyMap.set("_effects",c):this._effects=c);this._scaleFactor=a.scaleFactor||1;this._isDashed=null!=a.dashTemplate;this.tessellationProperties._bitset=(a.colorLocked?h.bitsetGenericLockColor:0)|(a.scaleDash?h.bitsetLineScaleDash:0)|(a.sampleAlphaOnly?h.bitsetGenericConsiderAlphaOnly:0);this._materialKey=
a.materialKey;this._initializeTessellator(!0)}static fromCIMLine(a,c){const [m,k]=p.getMinMaxZoom(a.scaleInfo,c);return new t(a,m,k)}bindFeature(a,c,m){const k=a.readLegacyFeature();this._dynamicPropertyMap.forEach((f,d)=>{this[d]=f(k,c,m)});this._halfWidth*=this._scaleFactor;a=this._materialCache;var b=this._cimLineLayer.materialHash;b=b(k,c,m);b=a.get(b);a=null;b&&x.ok(b.spriteMosaicItem)&&(a=b.spriteMosaicItem);if(a){this._hasPattern=!0;const {rect:f,width:d,height:l}=a;b=f.x+h.spritePadding;const e=
f.y+h.spritePadding,y=b+d,z=e+l;this.tessellationProperties._tl=n.i1616to32(b,e);this.tessellationProperties._br=n.i1616to32(y,z)}else this._hasPattern=!1,this.tessellationProperties._tl=0,this.tessellationProperties._br=0;this.tessellationProperties._fillColor=this._fillColor;this.tessellationProperties._halfWidth=this._halfWidth;this.tessellationProperties.offset=0;this.tessellationProperties._halfReferenceWidth=this.tessellationProperties._halfWidth;b=u.LineMaterialKey.load(this._materialKey);
a&&(b.sdf=a.sdf,b.pattern=!0,b.textureBinding=a.textureBinding);this._materialKey=b.data}}return t});