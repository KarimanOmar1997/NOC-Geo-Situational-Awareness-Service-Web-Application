// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/Error"],function(d,k,m){function e(){return Promise.all([new Promise((a,b)=>d(["./webglDeps"],a,b)),new Promise((a,b)=>d(["./mapViewDeps"],a,b))])}const f=a=>Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"})),h=()=>e().then(()=>new Promise((a,b)=>d(["./layers/TileLayerView2D"],c=>a(f(c)),b))),g=()=>e().then(()=>new Promise((a,b)=>d(["./layers/FeatureLayerView2D"],c=>a(f(c)),b))),l={"base-dynamic":()=>e().then(()=>
new Promise((a,b)=>d(["./layers/BaseDynamicLayerView2D"],c=>a(f(c)),b))),"base-tile":h,"bing-maps":h,csv:g,"geo-rss":()=>e().then(()=>new Promise((a,b)=>d(["./layers/GeoRSSLayerView2D"],c=>a(f(c)),b))),feature:g,geojson:g,graphics:()=>e().then(()=>new Promise((a,b)=>d(["./layers/GraphicsLayerView2D"],c=>a(f(c)),b))),group:()=>e().then(()=>new Promise((a,b)=>d(["./layers/GroupLayerView2D"],c=>a(f(c)),b))),imagery:()=>e().then(()=>new Promise((a,b)=>d(["./layers/ImageryLayerView2D"],c=>a(f(c)),b))),
"imagery-tile":()=>e().then(()=>new Promise((a,b)=>d(["./layers/ImageryTileLayerView2D"],c=>a(f(c)),b))),kml:()=>e().then(()=>new Promise((a,b)=>d(["./layers/KMLLayerView2D"],c=>a(f(c)),b))),"knowledge-graph":()=>e().then(()=>new Promise((a,b)=>d(["./layers/KnowledgeGraphLayerView2D"],c=>a(f(c)),b))),"link-chart":()=>e().then(()=>new Promise((a,b)=>d(["./layers/KnowledgeGraphLayerView2D"],c=>a(f(c)),b))),"knowledge-graph-sublayer":g,"map-image":()=>e().then(()=>new Promise((a,b)=>d(["./layers/MapImageLayerView2D"],
c=>a(f(c)),b))),"map-notes":()=>e().then(()=>new Promise((a,b)=>d(["./layers/MapNotesLayerView2D"],c=>a(f(c)),b))),media:()=>e().then(()=>new Promise((a,b)=>d(["./layers/MediaLayerView2D"],c=>a(f(c)),b))),"ogc-feature":()=>e().then(()=>new Promise((a,b)=>d(["./layers/OGCFeatureLayerView2D"],c=>a(f(c)),b))),"open-street-map":h,"oriented-imagery":g,route:()=>e().then(()=>new Promise((a,b)=>d(["./layers/RouteLayerView2D"],c=>a(f(c)),b))),stream:()=>e().then(()=>new Promise((a,b)=>d(["./layers/StreamLayerView2D"],
c=>a(f(c)),b))),"subtype-group":()=>e().then(()=>new Promise((a,b)=>d(["./layers/SubtypeGroupLayerView2D"],c=>a(f(c)),b))),tile:h,"vector-tile":()=>e().then(()=>new Promise((a,b)=>d(["./layers/VectorTileLayerView2D"],c=>a(f(c)),b))),video:()=>e().then(()=>new Promise((a,b)=>d(["./layers/VideoLayerView2D"],c=>a(f(c)),b))),wcs:()=>e().then(()=>new Promise((a,b)=>d(["./layers/ImageryTileLayerView2D"],c=>a(f(c)),b))),"web-tile":h,wfs:g,wms:()=>e().then(()=>new Promise((a,b)=>d(["./layers/WMSLayerView2D"],
c=>a(f(c)),b))),wmts:()=>e().then(()=>new Promise((a,b)=>d(["./layers/WMTSLayerView2D"],c=>a(f(c)),b))),"line-of-sight":null,"base-elevation":null,"building-scene":null,dimension:null,elevation:null,"integrated-mesh":null,"point-cloud":null,voxel:null,scene:null,unknown:null,unsupported:null};k.layerView2DImporter={hasLayerViewModule:a=>null!=l[a.type],importLayerView:a=>{var b=l[a.type];if(null==b)throw a=a.declaredClass?a.declaredClass.slice(a.declaredClass.lastIndexOf(".")+1):"Unknown",b=a.replaceAll(/([a-z])([A-Z])/g,
"$1-$2").toLowerCase(),new m(`${b}:view-not-supported`,`${a} is not supported in 2D`);return b(a)}};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});