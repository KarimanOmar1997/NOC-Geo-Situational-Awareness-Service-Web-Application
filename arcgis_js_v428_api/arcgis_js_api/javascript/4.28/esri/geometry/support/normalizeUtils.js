// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../config ../../core/Error ../../core/Logger ../Polygon ../Polyline ./normalizeUtilsCommon ./spatialReferenceUtils ./webMercatorUtils ../../rest/geometryService/cut ../../rest/geometryService/simplify".split(" "),function(w,H,I,J,z,A,r,x,y,K,L){function B(a){const b=[];let c=0,e=0;for(let f=0;f<a.length;f++){const g=a[f];let k=null;for(let h=0;h<g.length;h++)k=g[h],b.push(k),0===h?e=c=k[0]:(c=Math.min(c,k[0]),e=Math.max(e,k[0]));k&&b.push([(c+e)/2,0])}return b}function C(a,b){if(!(a instanceof
A||a instanceof z))throw D.error("straightLineDensify: the input geometry is neither polyline nor polygon"),new I("straightLineDensify: the input geometry is neither polyline nor polygon");var c=r.getGeometryParts(a);const e=[];for(const g of c){c=[];e.push(c);c.push([g[0][0],g[0][1]]);for(let k=0;k<g.length-1;k++){const h=g[k][0],l=g[k][1],d=g[k+1][0],m=g[k+1][1];var f=Math.sqrt((d-h)*(d-h)+(m-l)*(m-l));const p=(m-l)/f,q=(d-h)/f,t=f/b;if(1<t){for(let n=1;n<=t-1;n++){const u=n*b;c.push([q*u+h,p*u+
l])}f=(f+Math.floor(t-1)*b)/2;c.push([q*f+h,p*f+l])}c.push([d,m])}}return"polygon"===a.type?new z({rings:e,spatialReference:a.spatialReference}):new A({paths:e,spatialReference:a.spatialReference})}function E(a,b,c){b&&(a=C(a,1E6),a=y.webMercatorToGeographic(a,!0));c&&(a=r.updatePolyGeometry(a,c));return a}function F(a,b,c){if(Array.isArray(a)){var e=a[0];e>b?(c=r.offsetMagnitude(e,b),a[0]=e+-2*c*b):e<c&&(b=r.offsetMagnitude(e,c),a[0]=e+-2*b*c)}else e=a.x,e>b?(c=r.offsetMagnitude(e,b),a=a.clone().offset(-2*
c*b,0)):e<c&&(b=r.offsetMagnitude(e,c),a=a.clone().offset(-2*b*c,0));return a}function M(a,b){let c=-1;for(let e=0;e<b.cutIndexes.length;e++){const f=b.cutIndexes[e],g=b.geometries[e],k=r.getGeometryParts(g);for(let h=0;h<k.length;h++){const l=k[h];l.some(d=>{if(180>d[0])return!0;d=0;for(var m=0;m<l.length;m++){var p=l[m][0];d=p>d?p:d}d=Number(d.toFixed(9));d=-360*r.offsetMagnitude(d,180);for(m=0;m<l.length;m++)p=g.getPoint(h,m),g.setPoint(h,m,p.clone().offset(d,0));return!0})}if(f===c)if("polygon"===
a[0].type)for(const h of r.getGeometryParts(g))a[f]=a[f].addRing(h);else{if("polyline"===a[0].type)for(const h of r.getGeometryParts(g))a[f]=a[f].addPath(h)}else c=f,a[f]=g}return a}async function G(a,b,c){if(!Array.isArray(a))return G([a],b);b&&"string"!==typeof b&&D.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");var e="string"===typeof b?b:b?.url??H.geometryServiceUrl;let f,g,k;let h=0;var l=[];b=[];for(var d of a)if(null==d)b.push(d);else{if(!m){var m=
d.spatialReference;var p=x.getInfo(m);var q=(f=m.isWebMercator)?102100:4326;g=r.cutParams[q].maxX;k=r.cutParams[q].minX;var t=r.cutParams[q].plus180Line;q=r.cutParams[q].minus180Line}if(p)if("mesh"===d.type)b.push(d);else if("point"===d.type)b.push(F(d.clone(),g,k));else if("multipoint"===d.type){var n=d.clone();n.points=n.points.map(u=>F(u,g,k));b.push(n)}else if("extent"===d.type)n=d.clone()._normalize(!1,!1,p),b.push(n.rings?new z(n):n);else if(d.extent){n=d.extent;const u=2*r.offsetMagnitude(n.xmin,
k)*g;let v=0===u?d.clone():r.updatePolyGeometry(d.clone(),u);n.offset(u,0);n.intersects(t)&&n.xmax!==g?(h=n.xmax>h?n.xmax:h,v=E(v,f),l.push(v),b.push("cut")):n.intersects(q)&&n.xmin!==k?(h=2*n.xmax*g>h?2*n.xmax*g:h,v=E(v,f,360),l.push(v),b.push("cut")):b.push(v)}else b.push(d.clone());else b.push(d)}m=r.offsetMagnitude(h,g);p=-90;t=m;for(d=new A;0<m;)q=-180+360*m,d.addPath([[q,p],[q,-1*p]]),p*=-1,m--;if(0<l.length&&0<t){m=await K.cut(e,l,d,c);m=M(l,m);p=[];l=[];for(t=0;t<b.length;t++)d=b[t],"cut"!==
d?l.push(d):(d=m.shift(),q=a[t],null!=q&&"polygon"===q.type&&q.rings&&1<q.rings.length&&d.rings.length>=q.rings.length?(p.push(d),l.push("simplify")):l.push(f?y.geographicToWebMercator(d):d));if(!p.length)return l;b=await L.simplify(e,p,c);a=[];for(c=0;c<l.length;c++)e=l[c],"simplify"!==e?a.push(e):a.push(f?y.geographicToWebMercator(b.shift()):b.shift());return a}a=[];for(c=0;c<b.length;c++)e=b[c],"cut"!==e?a.push(e):(e=l.shift(),a.push(!0===f?y.geographicToWebMercator(e):e));return a}const D=J.getLogger("esri.geometry.support.normalizeUtils");
w.getClosestDenormalizedXToReference=function(a,b,c){c=x.getInfo(c);if(null==c)return a;const [e,f]=c.valid;c=2*f;let g=0,k=0;b>f?g=Math.ceil(Math.abs(b-f)/c):b<e&&(g=-Math.ceil(Math.abs(b-e)/c));a>f?k=Math.ceil(Math.abs(a-f)/c):a<e&&(k=-Math.ceil(Math.abs(a-e)/c));a+=(g-k)*c;b=a-b;b>f?a-=c:b<e&&(a+=c);return a};w.getDenormalizedExtent=function(a){if(!a)return null;const b=a.extent;if(!b)return null;var c=a.spatialReference&&x.getInfo(a.spatialReference);if(!c)return b;const [e,f]=c.valid;({width:c}=
b);let {xmin:g,xmax:k}=b;[g,k]=[k,g];if("extent"===a.type||0===c||c<=f||c>2*f||g<e||k>f)return b;let h;switch(a.type){case "polygon":if(1<a.rings.length)h=B(a.rings);else return b;break;case "polyline":if(1<a.paths.length)h=B(a.paths);else return b;break;case "multipoint":h=a.points}a=b.clone();for(let l=0;l<h.length;l++){let d=h[l][0];0>d?(d+=f,k=Math.max(d,k)):(d-=f,g=Math.min(d,g))}a.xmin=g;a.xmax=k;return a.width<c?(a.xmin-=f,a.xmax-=f,a):b};w.normalizeCentralMeridian=G;w.normalizeMapX=function(a,
b){if(b=x.getInfo(b)){const [c,e]=b.valid;b=e-c;if(a<c)for(;a<c;)a+=b;if(a>e)for(;a>e;)a-=b}return a};w.straightLineDensify=C;Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});