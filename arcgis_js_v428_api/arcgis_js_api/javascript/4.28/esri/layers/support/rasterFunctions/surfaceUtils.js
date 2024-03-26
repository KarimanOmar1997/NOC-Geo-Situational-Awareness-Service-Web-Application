// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../PixelBlock","./pixelUtils"],function(D,I,F){function M(a){let {altitude:e,azimuth:b}=a;const {hillshadeType:k,pixelSizePower:q=1,pixelSizeFactor:u=1,scalingType:v,isGCS:h,resolution:t}=a;var l="multi-directional"===k?2*a.zFactor:a.zFactor;const {x:r,y:m}=t;a=l/(8*r);var n=l/(8*m);h&&.001<l&&(a/=E,n/=E);"adjusted"===v&&(h?(a=r*E,n=m*E,a=(l+a**q*u)/(8*a),n=(l+n**q*u)/(8*n)):(a=(l+r**q*u)/(8*r),n=(l+m**q*u)/(8*m)));var g=(90-e)*Math.PI/180;l=Math.cos(g);let d=(360-b+90)*Math.PI/
180,f=Math.sin(g)*Math.cos(d);g=Math.sin(g)*Math.sin(d);const w=[315,270,225,360,180,0],x=[60,60,60,60,60,90];var p=new Float32Array([3,5,3,2,1,4]);const z=p.reduce((y,H)=>y+H);p=p.map(y=>y/z);const B="multi-directional"===k?w.length:1,C=new Float32Array(6),A=new Float32Array(6),c=new Float32Array(6);if("multi-directional"===k)for(let y=0;y<B;y++)e=x[y],b=w[y],g=(90-e)*Math.PI/180,l=Math.cos(g),d=(360-b+90)*Math.PI/180,f=Math.sin(g)*Math.cos(d),g=Math.sin(g)*Math.sin(d),C[y]=l,A[y]=f,c[y]=g;else C.fill(l),
A.fill(f),c.fill(g);return{resolution:t,factor:[a,n],sinZcosA:f,sinZsinA:g,cosZ:l,sinZcosAs:A,sinZsinAs:c,cosZs:C,weights:p,hillshadeType:["traditional","multi-directional"].indexOf(k)}}function J(a,e){const {width:b,height:k}=a;var q=b*k;const u=new Uint8Array(q),v=null!=a.mask;let h;if(v){h=new Uint8Array(a.mask);for(var t=0;t<h.length;t++)h[t]&&(u[t]=1,h[t]=1)}a=a.pixels[0];t=new Float32Array(q);const l=new Float32Array(q);let r=0;if(e){({resolution:m}=e);var m=m?(m.x+m.y)/2:1;r=200*e.zFactor/
(m*m);m=new Float32Array(q)}e=e?.curvatureType;let n;let g;for(q=1;q<k-1;q++){const C=q*b;for(let A=1;A<b-1;A++){const c=C+A;if(!h||0!==h[c]){if(h){if(7>h[c-b-1]+h[c-b]+h[c-b+1]+h[c-1]+h[c+1]+h[c+b-1]+h[c+b]+h[c+b+1]){u[c]=0;continue}var d=h[c-b-1]?a[c-b-1]:a[c];var f=h[c-b]?a[c-b]:a[c];var w=h[c-b+1]?a[c-b+1]:a[c];var x=h[c-1]?a[c-1]:a[c];var p=h[c+1]?a[c+1]:a[c];n=h[c+b-1]?a[c+b-1]:a[c];var z=h[c+b]?a[c+b]:a[c];g=h[c+b+1]?a[c+b+1]:a[c]}else d=a[c-b-1],f=a[c-b],w=a[c-b+1],x=a[c-1],p=a[c+1],n=a[c+
b-1],z=a[c+b],g=a[c+b+1];t[c]=w+p+p+g-(d+x+x+n);l[c]=n+z+z+g-(d+f+f+w);if(null!=m){var B=a[c];const y=.5*(x+p)-B;B=.5*(f+z)-B;"standard"===e?m[c]=-r*(y+B):(d=(-d+w+n-g)/4,x=(-x+p)/2,f=(f-z)/2,z=x*x,p=f*f,(w=z+p)&&(m[c]="profile"===e?r*(y*z+B*p+d*x*f)/w:-r*(y*p+B*z-d*x*f)/w))}}}}return{outMask:v?u:null,dzxs:t,dzys:l,curvatures:m}}function K(a,e,b){for(var k=0;k<b;k++)a[k*e]=a[k*e+1],a[(k+1)*e-1]=a[(k+1)*e-2];for(k=1;k<e-1;k++)a[k]=a[k+e],a[k+(b-1)*e]=a[k+(b-2)*e]}const E=1/111E3;D.aspect=function(a,
e={}){if(!F.isValidPixelBlock(a))return a;var {resolution:b}=e;e=b?1/b.x:1;b=b?1/b.y:1;const {dzxs:k,dzys:q,outMask:u}=J(a),{width:v,height:h}=a,t=new Float32Array(v*h);for(let r=1;r<h-1;r++){const m=r*v;for(let n=1;n<v-1;n++){var l=m+n;if(!u||u[l]){const g=k[l]*e;l=q[l]*b;let d=-1;if(0!==g||0!==l)d=90-57.29578*Math.atan2(l,-g),0>d&&(d+=360),360===d?d=0:360<d&&(d%=360);t[m+n]=d}}}K(t,v,h);return new I({width:v,height:h,pixels:[t],mask:u,pixelType:"f32",validPixelCount:a.validPixelCount,statistics:[{minValue:-1,
maxValue:360}]})};D.calculateHillshadeParams=M;D.curvature=function(a,e){if(!F.isValidPixelBlock(a))return a;const {curvatures:b,outMask:k}=J(a,e),{width:q,height:u}=a;K(b,q,u);a=new I({width:q,height:u,pixels:[b],mask:k,pixelType:"f32",validPixelCount:a.validPixelCount});a.updateStatistics();return a};D.gcsFactor=E;D.hillshade=function(a,e){if(!F.isValidPixelBlock(a))return a;const {factor:b,sinZcosA:k,sinZsinA:q,cosZ:u,sinZcosAs:v,sinZsinAs:h,cosZs:t,weights:l}=M(e),[r,m]=b;e="traditional"===e.hillshadeType;
const {width:n,height:g}=a,d=new Uint8Array(n*g),{dzxs:f,dzys:w,outMask:x}=J(a);for(let z=1;z<g-1;z++){const B=z*n;for(let C=1;C<n-1;C++){const A=B+C;if(!x||x[A]){var p=f[A]*r;const c=w[A]*m,y=Math.sqrt(1+p*p+c*c);let H=0;if(e)p=255*(u+q*c-k*p)/y,0>p&&(p=0),H=p;else{const N=h.length;for(let G=0;G<N;G++){let L=255*(t[G]+h[G]*c-v[G]*p)/y;0>L&&(L=0);H+=L*l[G]}}d[A]=H&255}}}K(d,n,g);return new I({width:n,height:g,pixels:[d],mask:x,pixelType:"u8",validPixelCount:a.validPixelCount,statistics:[{minValue:0,
maxValue:255}]})};D.slope=function(a,e){if(!F.isValidPixelBlock(a))return a;var b=e.zFactor,k=e.pixelSizePower??1,q=e.pixelSizeFactor??1;const u=e.slopeType;var v=e.isGCS;const {x:h,y:t}=e.resolution;e=b/(8*h);let l=b/(8*t);v&&1E-4>Math.abs(b-1)&&(e/=E,l/=E);"adjusted"===u&&(e=(b+h**k*q)/(8*h),l=(b+t**k*q)/(8*t));const {dzxs:r,dzys:m,outMask:n}=J(a),{width:g,height:d}=a;b=new Float32Array(g*d);for(k=1;k<d-1;k++)for(q=k*g,v=1;v<g-1;v++){var f=q+v;if(!n||n[f]){var w=r[f]*e;f=m[f]*l;w=Math.sqrt(w*w+
f*f);b[q+v]="percent-rise"===u?100*w:57.2957795*Math.atan(w)}}K(b,g,d);a=new I({width:g,height:d,pixels:[b],mask:n,pixelType:"f32",validPixelCount:a.validPixelCount});a.updateStatistics();return a};D.tintHillshade=function(a,e,b,k){if(F.isValidPixelBlock(a)&&F.isValidPixelBlock(e)){var {min:q,max:u}=k;k=a.pixels[0];var {pixels:v,mask:h}=e;e=v[0];var t=255.00001/(u-q),l=new Uint8ClampedArray(e.length),r=new Uint8ClampedArray(e.length),m=new Uint8ClampedArray(e.length),n=b.length-1;for(let f=0;f<e.length;f++){if(h&&
0===h[f])continue;var g=Math.floor((e[f]-q)*t);const [w,x]=b[0>g?0:g>n?n:g];var d=k[f];g=d*x;const p=g*(1-Math.abs(w%2-1));d-=g;switch(Math.floor(w)){case 0:l[f]=g+d;r[f]=p+d;m[f]=d;break;case 1:l[f]=p+d;r[f]=g+d;m[f]=d;break;case 2:l[f]=d;r[f]=g+d;m[f]=p+d;break;case 3:l[f]=d;r[f]=p+d;m[f]=g+d;break;case 4:l[f]=p+d;r[f]=d;m[f]=g+d;break;case 5:case 6:l[f]=g+d,r[f]=d,m[f]=p+d}}a.pixels=[l,r,m];a.updateStatistics()}};Object.defineProperty(D,Symbol.toStringTag,{value:"Module"})});