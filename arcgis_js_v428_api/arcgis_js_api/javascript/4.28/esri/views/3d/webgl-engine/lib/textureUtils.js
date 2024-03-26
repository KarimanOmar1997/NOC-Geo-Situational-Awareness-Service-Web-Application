// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/Error"],function(f,k){function g(a,b,c){if(a instanceof ImageData)return g(h(a),b,c);const d=document.createElement("canvas");d.width=b;d.height=c;d.getContext("2d").drawImage(a,0,0,d.width,d.height);return d}function h(a){const b=document.createElement("canvas");b.width=a.width;b.height=a.height;const c=b.getContext("2d");if(null==c)throw new k("Failed to create 2d context from HTMLCanvasElement");c.putImageData(a,0,0);return b}f.applyTextureResizeModulo=function(a){return 16*
Math.ceil(a/16)};f.downsampleImage=function(a,b){let c=a.width*a.height;if(4096>c)return a instanceof ImageData?h(a):a;let d=a.width,e=a.height;do d=Math.ceil(d/2),e=Math.ceil(e/2),c=d*e;while(1048576<c||null!=b&&(d>b||e>b));return g(a,d,e)};f.ensureImageMaxSize=function(a,b){const c=Math.max(a.width,a.height);if(c<=b)return a;b/=c;return g(a,Math.round(a.width*b),Math.round(a.height*b))};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});