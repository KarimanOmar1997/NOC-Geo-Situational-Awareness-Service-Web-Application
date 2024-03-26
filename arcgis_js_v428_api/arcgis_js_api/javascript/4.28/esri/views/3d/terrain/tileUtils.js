// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/PooledArray","./RenderOrder"],function(f,k,q){function h(a,b){b(a);if(!a.isLeaf)for(const c of a.children)h(c,b)}function l(a,b){a=a.lij;b=b.lij;return a[0]-b[0]||a[1]-b[1]||a[2]-b[2]}function r(a,b){const c=b.screenDepth-a.screenDepth;if(0!==c)return c;a=a.lij;b=b.lij;return a[0]-b[0]||a[1]-b[1]||a[2]-b[2]}function t(a,b){const c=a.screenDepth-b.screenDepth;if(0!==c)return c;a=a.lij;b=b.lij;return a[0]-b[0]||a[1]-b[1]||a[2]-b[2]}function m(a,b,c){const d=a.screenDepth,
e=b.screenDepth;return d<e?-c:d>e?c:l(a,b)}function n(a,b,c,d){const e=p(a,d);d=p(b,d);return e===d?m(a,b,c):a?c:-c}function p(a,b){for(const c of b)if(a.intersectsExtent(c))return!0;return!1}function u(a,b){const c=a.distanceToPOI-b.distanceToPOI;if(0!==c)return c;a=a.lij;b=b.lij;return a[0]-b[0]||a[1]-b[1]||a[2]-b[2]}class v{constructor(){this._queue=new k;this.remove=()=>{}}get done(){return 0===this._queue.length&&(!this._last||this._last.isLeaf)}resetOne(a){this._queue.clear();this._queue.push(a);
this._last=void 0}reset(a=null){this._queue.clear();null!=a&&this._queue.pushArray(a);this._last=void 0}skipSubtree(){this._last=void 0}next(){const a=this._last?.children;a?.[0]&&this._queue.pushArray(a);return this._last=this._queue.pop()}}class w{constructor(){this._q=new k}get done(){return 0===this._q.length}reset(a){this._q.clear();if(null!=a)for(this._q.pushArray(a),a=0;a<this._q.length;++a){const b=this._q.data[a];b.isLeaf||this._q.pushArray(b.children)}}next(){return this._q.pop()}}f.IteratorPostorder=
w;f.IteratorPreorder=v;f.compareTiles=m;f.compareTilesByLij=l;f.compareTilesWithStencil=n;f.computeUpsampleInfo=function(a,b,c){let d=1,e=0,g=0;for(;a!==b;)if(d*=.5,e*=.5,g*=.5,a.lij[2]&1&&(e+=.5),0===(a.lij[1]&1)&&(g+=.5),a=a.parent,null==a)throw Error("tile was not a descendant of upsampleTile");c.init(b,e,g,d)};f.fallsWithinLayer=function(a,b,c){if(null==b?.fullExtent)return!1;const d=b.fullExtent,e=a.extent;if(c){if(e[0]<d.xmin||e[1]<d.ymin||e[2]>d.xmax||e[3]>d.ymax)return!1}else if(d.xmin>e[2]||
d.ymin>e[3]||d.xmax<e[0]||d.ymax<e[1])return!1;a=a.surface.tilingScheme.levels[a.level].scale;c=b.minScale;if(0<c&&a>1.00000001*c)return!1;b=b.maxScale;return 0<b&&a<.99999999*b?!1:!0};f.hasLoadableSiblings=function(a){for(let b=0;b<a.length;b++){const c=a[b],d=c.parent;if(d)for(let e=0;4>e;e++){const g=d.children[e];if(g&&g!==c)return!0}}return!1};f.sortTiles=function(a,b,c=null){null==c||0===c.length?a===q.RenderOrder.BACK_TO_FRONT?b.sort(r):b.sort(t):b.sort((d,e)=>n(d,e,a,c))};f.sortTilesByPOI=
function(a,b){const c=a.length;for(let d=0;d<c;++d)a.at(d).updateDistanceToPOI(b);a.sort(u)};f.tilesAreRelated=function(a,b){if(!a||!b||a[0]===b[0])return!1;const c=a[0]<b[0],d=c?a:b;a=c?b:a;b=1<<a[0]-d[0];return Math.floor(a[1]/b)===d[1]&&Math.floor(a[2]/b)===d[2]};f.traverseTilesPreorder=function(a,b){if(Array.isArray(a))for(let c=0;c<a.length;c++)h(a[c],b);else h(a,b)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});