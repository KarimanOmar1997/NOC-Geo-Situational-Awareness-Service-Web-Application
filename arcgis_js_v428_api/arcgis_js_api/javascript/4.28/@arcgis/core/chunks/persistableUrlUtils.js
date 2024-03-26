/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{makeAbsolute as e,makeRelative as r,isAbsolute as t,normalize as o,isDataProtocol as s,changeDomain as n,hasSameOrigin as l,splitPathExtension as a,getAppUrl as u}from"../core/urlUtils.js";function i(t,o){const s=o?.url?.path;if(t&&s&&(t=e(t,s,{preserveProtocolRelative:!0}),o.portalItem&&o.readResourcePaths)){const e=r(t,o.portalItem.itemUrl);null!=e&&h.test(e)&&o.readResourcePaths.push(o.portalItem.resourceFromPath(e).path)}return I(t,o?.portal)}function c(n,l,a=R.YES){if(null==n)return n;!t(n)&&l?.blockedRelativeUrls&&l.blockedRelativeUrls.push(n);let u=e(n);if(l){const e=l.verifyItemRelativeUrls?.rootPath||l.url?.path;if(e){const t=I(e,l.portal),o=I(u,l.portal);u=r(o,t,t),null!=u&&u!==o&&u!==n&&l.verifyItemRelativeUrls&&l.verifyItemRelativeUrls.writtenUrls.push(u)}}return u=d(u,l?.portal),t(u)&&(u=o(u)),l?.resources&&l?.portalItem&&!t(u)&&!s(u)&&a===R.YES&&l.resources.toKeep.push({resource:l.portalItem.resourceFromPath(u),compress:!1}),u}function m(e,r,t){return i(e,t)}function p(e,r,t,o){const s=c(e,o);void 0!==s&&(r[t]=s)}const f=/\/items\/([^\/]+)\/resources\/(.*)/,h=/^\.\/resources\//;function U(e){const r=e?.match(f)??null;return r?.[1]??null}function v(e){const r=e?.match(f)??null;if(null==r)return null;const t=r[2],o=t.lastIndexOf("/");if(-1===o){const{path:e,extension:r}=a(t);return{prefix:null,filename:e,extension:r}}const{path:s,extension:n}=a(t.slice(o+1));return{prefix:t.slice(0,o),filename:s,extension:n}}function d(e,r){return r&&!r.isPortal&&r.urlKey&&r.customBaseUrl?n(e,`${r.urlKey}.${r.customBaseUrl}`,r.portalHostname):e}function I(e,r){if(!r||r.isPortal||!r.urlKey||!r.customBaseUrl)return e;const t=`${r.urlKey}.${r.customBaseUrl}`,o=u();return l(o,`${o.scheme}://${t}`)?n(e,r.portalHostname,t):n(e,t,r.portalHostname)}var R;!function(e){e[e.YES=0]="YES",e[e.NO=1]="NO"}(R||(R={}));const x=Object.freeze(Object.defineProperty({__proto__:null,get MarkKeep(){return R},ensureMainOnlineDomain:d,fromJSON:i,itemIdFromResourceUrl:U,prefixAndFilenameFromResourceUrl:v,read:m,toJSON:c,write:p},Symbol.toStringTag,{value:"Module"}));export{R as M,x as a,d as e,i as f,U as i,v as p,m as r,c as t,p as w};
