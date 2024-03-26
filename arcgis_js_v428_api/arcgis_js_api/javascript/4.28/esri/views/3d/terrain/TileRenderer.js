// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../core/maybe ../../../chunks/vec2 ../../../chunks/vec2f64 ../../../layers/support/layerUtils ../support/StreamDataLoader ./BlendLayersTechnique ./interfaces ./ITile ./LayerClass ./terrainUtils ./TextureFader ./TextureReference ./TileCompositor ./TileRenderInfo ./TileTexture ./TileUpdate ../webgl-engine/core/shaderLibrary/output/BlendOptions ../webgl-engine/core/shaderLibrary/terrain/TileBackground.glsl ../webgl-engine/lib/glUtil3D ../../webgl/enums ../../webgl/Texture ../../webgl/TextureDescriptor".split(" "),
function(M,S,T,U,z,ba,ca,V,w,A,r,N,O,da,ea,G,H,W,l,fa,D,F,ha){function P(a,c,b){h.layerIndex=c;h.vtlNeighborInfos.clear();const d=a.layerInfo[A.LayerClass.MAP][c];T.set(h.offset,0,0);h.tile=a;h.scale=1;h.sourceLod=a.lij;h.sourceLayerInfo=d;h.isVTLBackground=b;if(d.data)return b&&a.forEachLoadedNeighbor((p,t)=>{if(p.level===a.level){var u=p.layerInfo[A.LayerClass.MAP][c];if(r.isVectorTilePerLayerInfo(u)&&d.data!==u.data){var m=h.vtlNeighborInfos.pushNew();m.offset=v[t];m.sourceLod=p.lij;m.sourceLayerInfo=
u}}}),h;const e=d.upsampleInfo;return e?(b=e.tile.layerInfo[A.LayerClass.MAP][c],h.tile=e.tile,T.copy(h.offset,e.offset),h.scale=e.scale,h.sourceLod=e.tile.lij,h.sourceLayerInfo=b,h):b?h:null}function X(a){let c="normal"!==a.blendMode;z.isGroupLayer(a.parent)&&(c=X(a.parent)||c);return c}function Y(a,c){z.isGroupLayer(a.parent)&&Y(a.parent,c);const b=a.uid;if(null!=b&&""!==b){const d=I.get(b);d?d.start=c:I.set(b,new Z(c,c,a.blendMode,a.opacity,l.BlendLayersOutput.Composite,1))}}class Z{constructor(a,
c,b,d,e,p){this.start=a;this.end=c;this.blendMode=b;this.opacity=d;this.output=e;this.baseOpacity=p}}class ia{constructor(a,c,b,d){this._rctx=a;this.tileSize=c;this._techniques=b;this._cache=d;this._passParameters=new ca.BlendLayersPassParameters;this._backgroundColor=this._backgroundTexture=null;this._backgroundDirty=!1;this._maxAnisotropy=this._rctx.parameters.maxMaxAnisotropy;this._composition=new da.TileCompositor(this._rctx,this._techniques);this._ensureBackgroundTexture(this.tileSize)}dispose(){this._composition=
S.disposeMaybe(this._composition);this._backgroundTexture=S.releaseMaybe(this._backgroundTexture)}get backgroundIsGrid(){return null==this._backgroundColor}get backgroundColor(){return this._backgroundColor}updateTileTexture(a,c){if(a.renderData){var b=a.surface,d=b.baseOpacity,e=0,p=0,t=this.tileSize,u=!1,m=!1,B=b.view.state.contentPixelRatio,q=!1;I.clear();E.length=0;for(var x=a.layerInfo[A.LayerClass.MAP],k=0,C=null;k<x.length;k++){const f=b.layerViewByIndex(k,A.LayerClass.MAP);var g=f.layer.opacity;
const J=f.fullOpacity;m=m||z.isBaseLayer(f.layer);if(r.isBlendableLayerView(f)){var n="normal"!==f.layer.blendMode;if(z.isGroupLayer(f.layer.parent)){var y=f.layer.parent.uid;null!=y&&""!==y&&(n=X(f.layer.parent)||n)}n&&(q=n,u=!1)}if(0!==g||q){if(++p,g=r.isVectorTileLayerView(f),n=P(a,k,g))x[k].pendingUpdates&=~(H.TileUpdate.TEXTURE_NOFADING&H.TileUpdate.TEXTURE_FADING),z.isGroupLayer(f.layer.parent)&&(y=f.layer.parent.uid,null!=y&&""!==y&&Y(f.layer.parent,k)),g?t=Math.max(t,this.tileSize*B):1===
d&&1===J&&(f.isOpaque||this._dataToTexture(n)&&n.sourceLayerInfo.data.descriptor.isOpaque)&&(u=!0),++e,null===C&&(C=k)}else x[k].pendingUpdates&=~(H.TileUpdate.TEXTURE_NOFADING&H.TileUpdate.TEXTURE_FADING)}b=t/this.tileSize;0===e||null===C?this._useBackgroundTexture(a,p):(1!==e||q||!this._useLayerTexture(a,C))&&this._composeMapLayers(a,c,k-1,m,t,b,!u||q,I,q)}}_ensureBackgroundTexture(a){null==this._backgroundTexture&&(this._backgroundTexture=this._buildTexture(a,!1),this._backgroundDirty=!0);this._backgroundDirty&&
(this._composition.bind(a),this._passParameters.offset=U.ZEROS,this._passParameters.scale=1,this._passParameters.opacity=1,this.backgroundColor&&(this._passParameters.backgroundColor=this.backgroundColor),this._composition.drawBackground(this._passParameters,null!=this.backgroundColor),this._composition.copyFBOToTexture(this._backgroundTexture),this._composition.unbind(),this._backgroundDirty=!1);return this._backgroundTexture}_useBackgroundTexture(a,c){const b=this._ensureBackgroundTexture(this.tileSize);
let d=N.ActivationTime.Immediate;if(a.surface.view.layerViewManager.updating||0<c)d=N.ActivationTime.Delayed;c=a.renderData;null==c.textureReference&&(d=N.ActivationTime.Immediate);c.setTextureReference(new O.TextureReference(b,V.TextureUpdate.FADING,aa,a.surface.baseOpacity,0,1),d)}_useLayerTexture(a,c){var b=a.surface.layerViewByIndex(c,A.LayerClass.MAP),d=z.isBaseLayer(b.layer);const e=d?a.surface.baseOpacity:1;d=d?1:a.surface.baseOpacity;b=b.fullOpacity;c=P(a,c,!1);return this._dataToTexture(c)?
(a.renderData.setTextureReference(new O.TextureReference(c.sourceLayerInfo.data,V.TextureUpdate.FADING,c,e,d,b)),!0):!1}_composeMapLayers(a,c,b,d,e,p,t,u,m){this._composition.ensureBuffer(e);const B=a.surface.baseOpacity;let q=!1,x=D.TextureSamplingMode.LINEAR_MIPMAP_LINEAR,k=!1,C=0;for(let f=b;0<=f;f--){b=a.surface.layerViewByIndex(f,A.LayerClass.MAP);var g=r.isVectorTileLayerView(b);g=P(a,f,g);const J=b.layer.opacity;if(!g||0===J&&!m)continue;const K=!z.isBaseLayer(b.layer)&&!q;K&&(q=!0);let Q=
!1;u.forEach(L=>{L.start===f&&(L.output=d?l.BlendLayersOutput.Composite:t&&K?this.backgroundIsGrid?l.BlendLayersOutput.GridComposite:l.BlendLayersOutput.ColorComposite:l.BlendLayersOutput.Composite,L.baseOpacity=K?B:1,E.push(L),this._composition.openGroup(e),Q=!0)});this._passParameters.baseOpacity=K&&!Q&&1>B?B:1;const R=1>this._passParameters.baseOpacity?l.BaseOpacityMode.Required:l.BaseOpacityMode.NotRequired;var n=0===C;n=Q?l.BlendLayersOutput.GroupBackgroundComposite:t&&n?this.backgroundIsGrid?
l.BlendLayersOutput.GridComposite:l.BlendLayersOutput.ColorComposite:l.BlendLayersOutput.Composite;b=W.blendModeFromString[r.isBlendableLayerView(b)?b.layer.blendMode:"normal"];this._passParameters.opacity=J;r.isVectorTileRenderInfo(g)?k=this._composition.drawVectorData(this._passParameters,n,e,b,R,g,p,this.tileSize,k):r.isImageryTileRenderInfo(g)?(this._composition.drawImageryTileData(this._passParameters,n,e,b,R,g),this._hasNearestInterpolation(g)&&(x=D.TextureSamplingMode.NEAREST)):this._dataToTexture(g)&&
(this._passParameters.texture=g.sourceLayerInfo.data.texture,this._passParameters.offset=g.offset,this._passParameters.scale=g.scale,this._composition.drawRasterData(this._passParameters,n,e,b,R));for(;0<E.length&&E[E.length-1].end===f;)b=E.pop(),this._passParameters.baseOpacity=b.baseOpacity,g=1>this._passParameters.baseOpacity?l.BaseOpacityMode.Required:l.BaseOpacityMode.NotRequired,this._passParameters.opacity=b.opacity,this._passParameters.offset=U.ZEROS,this._passParameters.scale=1,this._composition.drawGroup(this._passParameters,
b.output,e,W.blendModeFromString[b.blendMode],g);C++}a=a.renderData;const y=m||q&&1>B;m=a.ensureTexture(e,y,()=>this._buildTexture(e,y,x));this._composition.copyFBOToTexture(m);this._composition.unbind();a.setTextureReference(new O.TextureReference(m,c,aa,q?1:B,0,1))}_hasNearestInterpolation(a){a=a.sourceLayerInfo.data;return a.source?"nearest"===a.interpolation:!1}_dataToTexture(a){if(r.isRasterTileRenderInfo(a)){const c=a.sourceLayerInfo;c.data=this._buildTexture(c.data,!0);a.tile.setMemoryDirty()}return r.isTextureTileRenderInfo(a)}setBackground(a){this._backgroundColor!==
a&&(this._backgroundColor=a,this._backgroundDirty=!0)}_buildTexture(a,c,b=D.TextureSamplingMode.LINEAR_MIPMAP_LINEAR){if(null==a)return null;const d=new ha.TextureDescriptor;d.wrapMode=D.TextureWrapMode.CLAMP_TO_EDGE;d.samplingMode=b;d.maxAnisotropy=this._maxAnisotropy;d.preMultiplyAlpha=!0;d.flipped=!0;d.hasMipmap=!0;c||(d.pixelFormat=D.PixelFormat.RGB);c=this._rctx;let e;if("number"===typeof a)d.width=d.height=a,(e=this._cache.pop(`${a} ${d.pixelFormat}`))?e.retain():e=new G(new F.Texture(c,d),
this._cache);else if(ba.isImageWithType(a))d.isOpaque=a.isOpaque,d.isOpaque&&(d.pixelFormat=D.PixelFormat.RGB),(e=this._cache.pop(`${a} ${d.pixelFormat}`))?(e.retain(),e.texture.setData(a.image)):e=new G(new F.Texture(c,d,a.image),this._cache),a.release();else try{d.width=a.width,d.height=a.height,e=new G(new F.Texture(c,d,a))}catch(p){e=new G(fa.createEmptyTexture(c)),console.warn("TileRenderer: failed to execute 'texImage2D', cross-origin image may not be loaded.")}a=c.bindTexture(e.texture,F.Texture.TEXTURE_UNIT_FOR_UPDATES);
e.generateMipmap();c.bindTexture(a,F.Texture.TEXTURE_UNIT_FOR_UPDATES);return e}get test(){return{backgroundTexture:this._backgroundTexture}}}const I=new Map,E=[],h=new ea.TileRenderInfo,aa={offset:[0,0],scale:1},v=[];v[w.NeighborIndex.NORTH]=[0,-1];v[w.NeighborIndex.NORTH_EAST]=[-1,-1];v[w.NeighborIndex.EAST]=[-1,0];v[w.NeighborIndex.SOUTH_EAST]=[-1,1];v[w.NeighborIndex.SOUTH]=[0,1];v[w.NeighborIndex.SOUTH_WEST]=[1,1];v[w.NeighborIndex.WEST]=[1,0];v[w.NeighborIndex.NORTH_WEST]=[1,-1];M.GroupInfo=
Z;M.TileRenderer=ia;Object.defineProperty(M,Symbol.toStringTag,{value:"Module"})});