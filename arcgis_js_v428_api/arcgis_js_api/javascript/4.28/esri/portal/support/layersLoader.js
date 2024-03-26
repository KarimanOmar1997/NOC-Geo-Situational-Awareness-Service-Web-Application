// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../core/Error ../../layers/support/arcgisLayerUrl ../../layers/support/fetchService ../../layers/support/LayerLoadContext ../../layers/support/layersCreator ../../layers/support/lazyLayerLoader ../Portal ./jsonContext ./loadUtils ./portalItemUtils ../../renderers/support/styleUtils ../../support/requestPresets".split(" "),function(q,n,x,y,r,z,A,B,t,l,C,D,E){async function F(a,c){const b=a.instance,d=b.portalItem;if(d){var {url:e,title:g}=d,f=t.createForItemRead(d);if("group"===
b.type)return G(b,f,a);e&&b.read({url:e},f);var h=new r.LayerLoadContext;(a=await u(a,h,c))&&b.read(a,f);b.resourceReferences={portalItem:d,paths:f.readResourcePaths??[]};"subtype-group"!==b.type&&b.read({title:g},f);return D.loadStyleRenderer(b,f)}}async function G(a,c,b){const d=a.portalItem;if(a.sourceIsPortalItem){var {title:e,type:g}=d;if("Group Layer"===g){if(!C.hasTypeKeyword(d,"Map"))throw new n("portal:invalid-layer-item-typekeyword","'Group Layer' item without 'Map' type keyword is not supported");
return H(a)}a.read({title:e},c);return I(a,b)}}async function H(a){const c=a.portalItem,b=await c.fetchData("json");if(b){var d=t.createForGroupLayerItemRead(c);a.read(b,d);await z.populateGroupLayer(a,b,{context:d});a.resourceReferences={portalItem:c,paths:d.readResourcePaths??[]}}}async function I(a,c){var {portalItem:b}=a;if(b){var d=b.type,e=c.layerModuleTypeMap;switch(d){case "Feature Service":var g=e.FeatureLayer;break;case "Stream Service":g=e.StreamLayer;break;case "Scene Service":g=e.SceneLayer;
break;case "Feature Collection":g=e.FeatureLayer;break;default:throw new n("portal:unsupported-item-type-as-group",`The item type '${d}' is not supported as a 'IGroupLayer'`);}var f=new r.LayerLoadContext,[h,k]=await Promise.all([g(),u(c,f)]);c=()=>h;if("Feature Service"===d){k=b.url?await l.preprocessFSItemData(k,b.url,f):{};f=l.getSubtypeGroupLayerIds(k);g=l.getOrientedImageryLayerIds(k);d=[];if(f.length||g?.length){f.length&&d.push("SubtypeGroupLayer");g?.length&&d.push("OrientedImageryLayer");
c=[];for(const m of d)c.push((0,e[m])());const J=await Promise.all(c),v=new Map;d.forEach((m,K)=>{v.set(m,J[K])});c=m=>m.layerType?v.get(m.layerType)??h:h}b=await L(b.url);return await p(a,c,k,b)}"Scene Service"===d&&b.url&&(k=await l.populateSceneServiceItemData(b,k,f));return 0<l.getNumLayersAndTables(k)?await p(a,c,k):await M(a,c)}}async function M(a,c){var {portalItem:b}=a;b?.url&&(b=await E.fetchArcGISServiceJSON(b.url))&&p(a,c,{layers:b.layers?.map(l.createSublayerData),tables:b.tables?.map(l.createSublayerData)})}
async function p(a,c,b,d){let e=b.layers||[];const g=b.tables||[];"Feature Collection"===a.portalItem?.type?(e.forEach((f,h)=>{f.id=h;"Table"===f?.layerDefinition?.type&&g.push(f)}),e=e.filter(f=>"Table"!==f?.layerDefinition?.type)):(e.reverse(),g.reverse());e.forEach(f=>{const h=d?.(f);if(h||!d)f=w(a,c(f),b,f,h),a.add(f)});if(g.length){const f=await A.layerLookupMap.FeatureLayer();g.forEach(h=>{const k=d?.(h);if(k||!d)h=w(a,f,b,h,k),a.tables.add(h)})}}function w(a,c,b,d,e){a=a.portalItem;const g=
{portalItem:a.clone(),layerId:d.id};null!=d.url&&(g.url=d.url);c=new c(g);"sourceJSON"in c&&(c.sourceJSON=e);"subtype-group"!==c.type&&(c.sublayerTitleMode="service-name");"Feature Collection"===a.type&&(e={origin:"portal-item",portal:a.portal||B.getDefault()},c.read(d,e),b=b.showLegend,null!=b&&c.read({showLegend:b},e));return c}async function u(a,c,b){if(!1!==a.supportsData){a=a.instance;var d=a.portalItem;if(d){var e=null;try{e=await d.fetchData("json",b)}catch(g){}b="stream"===a.type?!1:"layerId"in
a;return b?(b=null,c=await N(d,e,c),(e?.layers||e?.tables)&&0<c&&(null==a.layerId&&(d=l.getSubtypeGroupLayerIds(e),a.layerId="subtype-group"===a.type?d?.[0]:l.getFirstLayerOrTableId(e)),(b=O(e,a))&&null!=e.showLegend&&(b.showLegend=e.showLegend)),1<c&&"sublayerTitleMode"in a&&"service-name"!==a.sublayerTitleMode&&(a.sublayerTitleMode="item-title-and-service-name"),b):e}}}async function N(a,c,b){if(c?.layers&&c?.tables)return l.getNumLayersAndTables(c);a=x.parse(a.url);if(!a)return 1;b=await b.fetchServiceMetadata(a.url.path).catch(()=>
null);return(c?.layers?.length??b?.layers?.length??0)+(c?.tables?.length??b?.tables?.length??0)}function O(a,c){const {layerId:b}=c;a=a.layers?.find(e=>e.id===b)||a.tables?.find(e=>e.id===b);var d;if(d=a)d="feature"===c.type&&"layerType"in a&&"SubtypeGroupLayer"===a.layerType||"subtype-group"===c.type&&!("layerType"in a)?!1:!0;return d?a:null}async function L(a){({layersJSON:a}=await y.fetchFeatureService(a));if(!a)return null;const c=[...a.layers,...a.tables];return b=>c.find(d=>d.id===b.id)}q.load=
async function(a,c){var b=a.instance.portalItem;if(b?.id){await b.load(c);b=a.instance.portalItem;if(!b?.type||!a.supportedTypes.includes(b.type))throw new n("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:b?.type,expectedType:a.supportedTypes.join(", ")});return F(a,c)}};Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});