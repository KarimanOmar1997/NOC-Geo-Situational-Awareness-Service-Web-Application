// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../../../../core/BidiText ../../../../../../core/screenUtils ../../../../../../symbols/cim/enums ../../alignmentUtils ../../color ../../definitions ../../number ../../materialKey/MaterialKey ./util ./WGLBaseTextTemplate ./WGLMeshTemplate".split(" "),function(q,f,r,k,d,l,u,v,m,w,x){class n extends w(x){constructor(a,e,b,c,g,p,h,t,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N){super();this._xOffset=f.pt2px(C);this._yOffset=f.pt2px(D);this._decoration=z||"none";this._backgroundColor=L;this._borderLineColor=
M;this._borderLineSize=N;this._color=g;this._haloColor=p;this._haloSize=Math.min(Math.floor(5*f.pt2px(f.toPt(b))),127);this._size=Math.min(Math.round(f.pt2px(e)),127);e=Math.min(Math.round(f.pt2px(c||e)),127);this._referenceSize=Math.round(Math.sqrt(256*e));this._scale=this._size/l.glyphSize;this._angle=B;this._justify=k.getJustification(h||"center");this._xAlignD=k.getXAnchorDirection(h||"center");this._yAlignD=k.getYAnchorDirection(t||"baseline");this._baseline="baseline"===(t||"baseline");this._bitset=
(y===r.Alignment.MAP?1:0)|(A?1:0)<<1;a=v.MaterialKeyBase.load(a);a.sdf=!0;this._materialKey=a.data;this._lineWidth=f.pt2px(E)||512;this._lineHeight=F||1;this._textPlacement=G;this._effects=H;this._isCIM=I??!1;this._minMaxZoom=u.i1616to32(Math.round(J*l.minMaxZoomPrecisionFactor),Math.round(K*l.minMaxZoomPrecisionFactor))}static fromText(a,e){const b=a.font?.size,c=new n(a.materialKey,b,a.haloSize||0,b,a.color&&d.premultiplyAlphaRGBAArray(a.color)||0,a.haloColor&&d.premultiplyAlphaRGBAArray(a.haloColor)||
0,a.horizontalAlignment,a.verticalAlignment,r.Alignment.SCREEN,a.font?.decoration,!1,a.angle||0,a.xoffset||0,a.yoffset||0,a.lineWidth||0,a.lineHeight||0,null,null,!1,m.defaultMinZoom,m.defaultMaxZoom,a.backgroundColor&&d.premultiplyAlphaRGBAArray(a.backgroundColor),a.borderLineColor&&d.premultiplyAlphaRGBAArray(a.borderLineColor),a.borderLineSize),[,g]=q.bidiText(a.text);c.bindTextInfo(e??[],g);c._vertexBoundsScale=a.maxVVSize&&b?a.maxVVSize/b:1;return c}static fromCIMText(a,e,b){var c=a.scaleFactor||
1;const g=a.size*a.sizeRatio*c,[p,h]=m.getMinMaxZoom(a.scaleInfo,b);b=new n(a.materialKey,g,a.outlineSize*a.sizeRatio,a.referenceSize,d.premultiplyAlphaRGBA(a.color),d.premultiplyAlphaRGBA(a.outlineColor),a.horizontalAlignment,a.verticalAlignment,a.alignment,a.decoration,a.colorLocked??!1,a.angle,a.offsetX*a.sizeRatio*c,a.offsetY*a.sizeRatio*c,a.lineWidth||512,1,a.markerPlacement,a.effects,!0,p,h,a.backgroundColor?d.premultiplyAlphaRGBA(a.backgroundColor):void 0,a.borderLineColor?d.premultiplyAlphaRGBA(a.borderLineColor):
void 0,a.borderLineWidth);[,c]=q.bidiText(a.text);b.bindTextInfo(e,c);b._vertexBoundsScale=a.maxVVSize?a.maxVVSize/g:1;return b}}return n});