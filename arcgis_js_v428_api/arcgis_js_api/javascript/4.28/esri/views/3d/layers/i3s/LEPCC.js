// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/Error"],function(q,k){function v(a,c,b){return{identifier:String.fromCharCode.apply(null,new Uint8Array(a,b+p.identifierOffset,p.identifierLength)),version:c.getUint16(b+p.versionOffset,!0),checksum:c.getUint32(b+p.checksumOffset,!0)}}function r(a,c,b){const l=[];c=w(a,c,l);const g=[];for(let d=0;d<l.length;d++){g.length=0;c=w(a,c,g);for(let e=0;e<g.length;e++)b.push(g[e]+l[d])}return c}function w(a,c,b){var l=new DataView(a,c),g=l.getUint8(0);const d=g&31;var e=
!!(g&32),m=(g&192)>>6;g=0;if(0===m)g=l.getUint32(1,!0),c+=5;else if(1===m)g=l.getUint16(1,!0),c+=3;else if(2===m)g=l.getUint8(1),c+=2;else throw new k("lepcc-decode-error","Bad count type");if(e)throw new k("lepcc-decode-error","LUT not implemented");a=new Uint8Array(a,c,Math.ceil(g*d/8));m=e=l=0;const h=-1>>>32-d;for(let f=0;f<g;f++){for(;e<d;)l|=a[m]<<e,e+=8,m+=1;b[f]=l&h;l>>>=d;e-=d;32<e+d&&(l|=a[m-1]>>8-e)}return c+m}const p={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,
byteCount:16};q.decodeIntensity=function(a){const c=new DataView(a,0);var b=0;const {identifier:l,version:g}=v(a,c,b);b+=p.byteCount;if("Intensity "!==l)throw new k("lepcc-decode-error","Bad identifier");if(1<g)throw new k("lepcc-decode-error","Unknown version");var d=b;var e=c.getUint32(d+0,!0);var m=c.getUint32(d+4,!0);var h=c.getUint32(d+8,!0);var f=c.getUint16(d+12,!0);var n=c.getUint8(d+14);c.getUint8(d+15);b+=16;if(m*2**32+e!==a.byteLength)throw new k("lepcc-decode-error","Bad size");e=new Uint16Array(h);
if(8===n){if(h+b!==a.byteLength)throw new k("lepcc-decode-error","Bad size");a=new Uint8Array(a,b,h);for(b=0;b<h;b++)e[b]=a[b]*f}else if(16===n){if(2*h+b!==a.byteLength)throw new k("lepcc-decode-error","Bad size");a=new Uint16Array(a,b,h);for(b=0;b<h;b++)e[b]=a[b]*f}else{n=[];if(w(a,b,n)!==a.byteLength)throw new k("lepcc-decode-error","Bad size");for(a=0;a<h;a++)e[a]=n[a]*f}return e};q.decodeRGB=function(a){var c=new DataView(a,0),b=0;const {identifier:l,version:g}=v(a,c,b);b+=p.byteCount;if("ClusterRGB"!==
l)throw new k("lepcc-decode-error","Bad identifier");if(1<g)throw new k("lepcc-decode-error","Unknown version");var d=b;var e=c.getUint32(d+0,!0);var m=c.getUint32(d+4,!0);var h=c.getUint32(d+8,!0);var f=c.getUint16(d+12,!0);var n=c.getUint8(d+14);d=c.getUint8(d+15);b+=16;if(m*2**32+e!==a.byteLength)throw new k("lepcc-decode-error","Bad size");if((2===n||1===n)&&0===d){if(3*f+h+b!==a.byteLength||256<f)throw new k("lepcc-decode-error","Bad count");c=new Uint8Array(a,b,3*f);b=new Uint8Array(a,b+3*f,
h);a=new Uint8Array(3*h);for(f=0;f<h;f++)e=b[f],a[3*f]=c[3*e],a[3*f+1]=c[3*e+1],a[3*f+2]=c[3*e+2];return a}if(0===n&&0===d){if(3*h+b!==a.byteLength||0!==f)throw new k("lepcc-decode-error","Bad count");return(new Uint8Array(a,b)).slice()}if(2>=n&&1===d){if(b+3!==a.byteLength||1!==f)throw new k("lepcc-decode-error","Bad count");a=c.getUint8(b);f=c.getUint8(b+1);b=c.getUint8(b+2);c=new Uint8Array(3*h);for(e=0;e<h;e++)c[3*e]=a,c[3*e+1]=f,c[3*e+2]=b;return c}throw new k("lepcc-decode-error","Bad method "+
n+","+d);};q.decodeXYZ=function(a){var c=new DataView(a,0),b=0;const {identifier:l,version:g}=v(a,c,b);b+=p.byteCount;if("LEPCC     "!==l)throw new k("lepcc-decode-error","Bad identifier");if(1<g)throw new k("lepcc-decode-error","Unknown version");var d=b;var e=c.getUint32(d+0,!0);var m=c.getUint32(d+4,!0);var h=c.getFloat64(d+8,!0);var f=c.getFloat64(d+16,!0);var n=c.getFloat64(d+24,!0);var C=c.getFloat64(d+32,!0);var D=c.getFloat64(d+40,!0);var E=c.getFloat64(d+48,!0);var x=c.getFloat64(d+56,!0);
var y=c.getFloat64(d+64,!0);var z=c.getFloat64(d+72,!0);var t=c.getUint32(d+80,!0);c.getUint32(d+84,!0);b+=88;if(m*2**32+e!==a.byteLength)throw new k("lepcc-decode-error","Bad size");e=new Float64Array(3*t);m=[];t=[];c=[];d=[];b=r(a,b,m);b=r(a,b,t);b=r(a,b,c);b=r(a,b,d);if(b!==a.byteLength)throw new k("lepcc-decode-error","Bad length");b=a=0;for(let u=0;u<m.length;u++){b+=m[u];let A=0;for(let B=0;B<t[u];B++){A+=c[a];const F=d[a];e[3*a]=Math.min(C,h+2*x*A);e[3*a+1]=Math.min(D,f+2*y*b);e[3*a+2]=Math.min(E,
n+2*z*F);a++}}return{errorX:x,errorY:y,errorZ:z,result:e}};Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});