/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Accessor.js";import{d as s}from"./maybe.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import{e as o,s as l}from"./vec2.js";import{Q as n}from"./QueueProcessor.js";import{c as h,j as a}from"./aaBoundingRect.js";import{a as c}from"./TileInfoView.js";import{T as u}from"./TileKey2.js";const d=new Set,f=[],p=new Map,y=[0,0];let _=class extends t{constructor(e){super(e),this._keyToItem=new Map,this.concurrency=6,this.strategy="scale-first",this.tileInfoView=null}initialize(){const{concurrency:e,process:t,strategy:s}=this;this._queue=new n({concurrency:e,process:(e,s)=>{const i=this._keyToItem.get(e);return t(i,{signal:s})},peeker:"scale-first"===s?e=>this._peekByScaleFirst(e):e=>this._peekByCenterFirst(e)})}destroy(){this.clear(),this._queue=s(this._queue)}get length(){return this._queue?this._queue.length:0}get onGoingCount(){return this._keyToItem.size}abort(e){const t="string"==typeof e?e:e.id;this._queue.abort(t)}clear(){this._queue.clear(),this._keyToItem.clear()}has(e){return"string"==typeof e?this._keyToItem.has(e):this._keyToItem.has(e.id)}isOngoing(e){const t="string"==typeof e?e:e.id;return this.has(t)&&this._queue.isOngoing(t)}pause(){this._queue.pause()}push(e){const t=e.key.id;if(this._queue.has(t))return this._queue.get(t);const s=this._queue.push(t),i=()=>{this._keyToItem.delete(t)};return this._keyToItem.set(t,e),s.then(i,i),s}reset(){this._queue.reset()}resume(){this._queue.resume()}_peekByScaleFirst(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView;let s=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY;e.forEach((e=>{const t=this._keyToItem.get(e),r=this.tileInfoView.getTileScale(t.key);p.has(r)||(p.set(r,[]),s=Math.max(r,s),i=Math.min(r,i)),p.get(r).push(t.key),d.add(r)}));let r=this.state.scale;var o,l;p.has(r)||(l=d,(o=f).length=0,l.forEach((e=>o.push(e))),f.sort(((e,t)=>e-t)),r=f.reduce(((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e),f[0])),r=Math.min(r,s),r=Math.max(r,i);const n=p.get(r),h=t.getClosestInfoForScale(r),a=h.getColumnForX(this.state.center[0]),c=h.getRowForY(this.state.center[1]);return n.sort(((e,t)=>{const s=h.denormalizeCol(e.col,e.world),i=h.denormalizeCol(t.col,t.world);return Math.sqrt((a-s)*(a-s)+(c-e.row)*(c-e.row))-Math.sqrt((a-i)*(a-i)+(c-t.row)*(c-t.row))})),d.clear(),p.clear(),n[0].id}_peekByCenterFirst(e){if(!this.state)return e.values().next().value;const t=this.tileInfoView,s=this.state.center;let i,r=Number.POSITIVE_INFINITY;return e.forEach((e=>{const l=this._keyToItem.get(e);t.getTileCoords(y,l.key);const n=o(y,s);n<r&&(r=n,i=l.key)})),i.id}};e([i({constructOnly:!0})],_.prototype,"concurrency",void 0),e([i({constructOnly:!0})],_.prototype,"process",void 0),e([i()],_.prototype,"state",void 0),e([i({constructOnly:!0})],_.prototype,"strategy",void 0),e([i({constructOnly:!0})],_.prototype,"tileInfoView",void 0),_=e([r("esri.views.2d.tiling.TileQueue")],_);const I=_;class m{constructor(e,t,s){this.maxSize=e,this._tileInfoView=t,this._removedFunc=s,this._tilePerId=new Map,this._tileKeysPerLevel=[]}clear(){this._tilePerId.clear(),this._tileKeysPerLevel=[]}has(e){return this._tilePerId.has(e)}get(e){return this._tilePerId.get(e)}pop(e){const t=this._tilePerId.get(e);if(!t)return;const s=t.key.level,i=this._tileKeysPerLevel[s];g(this._tilePerId,e);for(let t=0;t<i.length;t++)if(i[t].id===e){i.splice(t,1);break}return t.visible=!0,t}add(e){e.visible=!1;const t=e.key,s=t.id;if(this._tilePerId.has(s))return;this._tilePerId.set(s,e);const i=t.level;this._tileKeysPerLevel[i]||(this._tileKeysPerLevel[i]=[]),this._tileKeysPerLevel[i].push(t)}prune(e,t,s){let i=this._tilePerId.size;if(i<=this.maxSize)return;let r=this._tileKeysPerLevel.length-1;for(;i>this.maxSize&&r>=0;)r!==e&&(i=this._pruneAroundCenterTile(i,t,s,r)),r--;i>this.maxSize&&(i=this._pruneAroundCenterTile(i,t,s,e))}_pruneAroundCenterTile(e,t,s,i){const r=this._tileKeysPerLevel[i];if(!r||0===r.length)return e;const{size:o,origin:n}=this._tileInfoView.tileInfo,h=s*o[0],a=s*o[1],c=[0,0],u=[0,0];for(r.sort(((e,s)=>(c[0]=n.x+h*(e.col+.5),c[1]=n.y-a*(e.row+.5),u[0]=n.x+h*(s.col+.5),u[1]=n.y-a*(s.row+.5),l(c,t)-l(u,t))));r.length>0;){const t=r.pop();if(this._removeTile(t.id),--e===this.maxSize)break}return e}_removeTile(e){const t=this._tilePerId.get(e);this._removedFunc&&t&&this._removedFunc(t),g(this._tilePerId,e)}}function g(e,t){e.delete(t)}const v=new u(0,0,0,0),T=new Map,k=[],P=[];class w{constructor(e){this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,null!=e.resampling&&(this.resampling=e.resampling),e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),null!=e.buffer&&(this.buffer=e.buffer),e.cacheSize&&(this._tileCache=new m(e.cacheSize,this.tileInfoView,(e=>{this.releaseTile(e)})))}destroy(){this.tileIndex.clear()}update(e){const{resampling:t,tileIndex:s}=this,{scale:i,center:r,resolution:o}=e.state,{minScale:l,maxScale:n}=this.tileInfoView,h=!e.stationary&&i>this._previousScale;if(this._previousScale=i,!t&&(i>l||i<n))return this.tiles.length=0,void this.clear();const a=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.resampling,this.coveragePolicy);if(!a)return this.tiles.length=0,void this.clear();const{spans:u,lodInfo:d}=a,{level:f}=d;this.tiles.length=0,s.forEach((e=>e.visible=!0));let p=0,y=0;if(u.length>0)for(const{row:e,colFrom:t,colTo:i}of u)for(let r=t;r<=i;r++){p++;const t=v.set(f,e,d.normalizeCol(r),d.getWorldForColumn(r)).id;let i=s.get(t);if(i)i.isReady?(T.set(t,i),y++):h||this._addParentTile(t,T);else{if(this._tileCache?.has(t)){if(i=this._tileCache.pop(t),this.tileIndex.set(t,i),i.isReady){T.set(t,i),y++;continue}}else i=this.acquireTile(v),this.tileIndex.set(t,i);h||this._addParentTile(t,T)}}const _=y===p;for(const[e,t]of s){if(T.has(e))continue;v.set(e);const s=this.tileInfoView.intersects(a,v),i="purge"===this.cachePolicy?v.level!==f:v.level>f;!s||!h&&_?!i&&s||k.push(t):t.isReady?i&&"purge"===this.cachePolicy&&this._hasReadyAncestor(v,f)?k.push(t):P.push(t):i&&k.push(t)}for(const e of P)e.isReady&&T.set(e.key.id,e);for(const e of k)this._tileCache?this._tileCache.add(e):this.releaseTile(e),s.delete(e.key.id);for(const e of T.values())this.tiles.push(e);for(const e of s.values())T.has(e.key.id)||(e.visible=!1);this._tileCache?.prune(f,r,o),c.pool.release(a),P.length=0,k.length=0,T.clear()}clear(){const{tileIndex:e}=this;for(const t of e.values())this.releaseTile(t);e.clear()}refresh(e){for(const t of this.tileIndex.values())this.tiles.includes(t)?e(t):k.push(t);for(const e of k)this.releaseTile(e),this.tileIndex.delete(e.key.id);this._tileCache?.clear()}updateCacheSize(e){this._tileCache&&(this._tileCache.maxSize=e)}_addParentTile(e,t){let s=e,i=null;for(;s=this.tileInfoView.getTileParentId(s),s;)if(this.tileIndex.has(s)){if(i=this.tileIndex.get(s),i?.isReady){t.has(i.key.id)||t.set(i.key.id,i);break}}else if(this._tileCache?.has(s)&&(i=this._tileCache.pop(s),this.tileIndex.set(s,i),i?.isReady)){t.has(i.key.id)||t.set(i.key.id,i);break}}_hasReadyAncestor(e,t){const s=h();this.tileInfoView.getTileBounds(s,e,!0);for(const i of this.tileIndex.values())if(i.isReady&&i.key.level>=t&&i.key.level<e.level){const e=h();if(this.tileInfoView.getTileBounds(e,i.key,!0),a(e,s))return!0}return!1}}export{I as T,w as a};
