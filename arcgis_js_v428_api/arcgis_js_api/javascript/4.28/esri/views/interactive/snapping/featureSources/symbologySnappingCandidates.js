// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/lang ../../../../core/LRUCache ../../../../core/promiseUtils ../../../../core/string".split(" "),function(l,x,m,r,t,n){function p(a){switch(a.type){case "vertex":const {objectId:c,target:d}=a;return n.numericHash(`${c}-vertex-${d.x}-${d.y}-${d.z??0}`).toString();case "edge":const {objectId:f,start:e,end:b}=a;return n.numericHash(`${f}-edge-${e.x}-${e.y}-${e.z??0}-to-${b.x}-${b.y}-${b.z??0}`).toString();default:return""}}class u{async fetch(){return[]}notifySymbologyChange(){}}
class v{constructor(a){this._getSymbologyCandidates=a;this._candidatesCache=new r.LRUCache(1024);this._cacheVersion=0}async fetch(a,c){if(0===a.length)return[];const d=[],f=[],e=this._candidatesCache;for(var b of a){var g=p(b),h=e.get(g);if(h)for(var k of h)f.push(m.clone(k));else d.push(b),e.put(g,[],1)}if(0===d.length)return f;b=this._cacheVersion;const {candidates:q,sourceCandidateIndices:w}=await this._getSymbologyCandidates(d,c);t.throwIfAborted(c);if(b!==this._cacheVersion)return this.fetch(a,
c);a=[];({length:c}=q);for(b=0;b<c;++b)g=q[b],h=p(d[w[b]]),k=e.get(h),k.push(g),e.put(h,k,k.length),a.push(m.clone(g));return f.concat(a)}notifySymbologyChange(){this._candidatesCache.clear();this._cacheVersion++}}l.getSymbologySnappingCandidatesFetcher=function(a=!1,c){return a?new v(c):new u};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});