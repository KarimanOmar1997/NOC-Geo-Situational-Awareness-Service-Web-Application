/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{isPoint as n,isPolyline as t,isPolygon as r,isMultipoint as e,isExtent as u}from"../geometry/support/jsonUtils.js";const o=(n,t,r)=>[t,r],l=(n,t,r)=>[t,r,n[2]],i=(n,t,r)=>[t,r,n[2],n[3]];function s(n){return n?{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:n.tolerance?[n.tolerance,n.tolerance]:[1,1],translate:null!=n.extent?[n.extent.xmin,n.extent.ymax]:[0,0]}:null}function c({scale:n,translate:t},r){return Math.round((r-t[0])/n[0])}function a({scale:n,translate:t},r){return Math.round((t[1]-r)/n[1])}function f(n,t,r){const e=[];let u,o,l,i;for(let s=0;s<r.length;s++){const f=r[s];s>0?(l=c(n,f[0]),i=a(n,f[1]),l===u&&i===o||(e.push(t(f,l-u,i-o)),u=l,o=i)):(u=c(n,f[0]),o=a(n,f[1]),e.push(t(f,u,o)))}return e.length>0?e:null}function h({scale:n,translate:t},r){return r*n[0]+t[0]}function g({scale:n,translate:t},r){return t[1]-r*n[1]}function p(n,t,r){const e=new Array(r.length);if(!r.length)return e;const[u,o]=n.scale;let l=h(n,r[0][0]),i=g(n,r[0][1]);e[0]=t(r[0],l,i);for(let n=1;n<r.length;n++){const s=r[n];l+=s[0]*u,i-=s[1]*o,e[n]=t(s,l,i)}return e}function x(n,t,r){const e=new Array(r.length);for(let u=0;u<r.length;u++)e[u]=p(n,t,r[u]);return e}function m(n,t,r,e,u){return t.x=c(n,r.x),t.y=a(n,r.y),t!==r&&(e&&(t.z=r.z),u&&(t.m=r.m)),t}function y(l,i){return l&&i?n(i)?m(l,{},i,!1,!1):t(i)?function(n,t,r,e,u){const l=function(n,t,r,e){const u=[],l=o;for(let r=0;r<t.length;r++){const e=f(n,l,t[r]);e&&e.length>=2&&u.push(e)}return u.length?u:null}(n,r.paths);return l?(t.paths=l,t):null}(l,{},i):r(i)?function(n,t,r,e,u){const l=function(n,t,r,e){const u=[],l=o;for(let r=0;r<t.length;r++){const e=f(n,l,t[r]);e&&e.length>=3&&u.push(e)}return u.length?u:null}(n,r.rings);return l?(t.rings=l,t):null}(l,{},i):e(i)?function(n,t,r,e,u){return t.points=function(n,t,r,e){return f(n,o,t)}(n,r.points)??[],t}(l,{},i):u(i)?function(n,t,r,e,u){return t.xmin=c(n,r.xmin),t.ymin=a(n,r.ymin),t.xmax=c(n,r.xmax),t.ymax=a(n,r.ymax),t}(l,{},i):null:null}function w(n,t,r,e,u){return null!=r&&(t.points=function(n,t,r,e){return p(n,r?e?i:l:e?l:o,t)}(n,r.points,e,u)),t}function z(n,t,r,e,u){return null==r||(t.x=h(n,r.x),t.y=g(n,r.y),t!==r&&(e&&(t.z=r.z),u&&(t.m=r.m))),t}function P(n,t,r,e,u){return null!=r&&(t.rings=function(n,t,r,e){return x(n,r?e?i:l:e?l:o,t)}(n,r.rings,e,u)),t}function d(n,t,r,e,u){return null!=r&&(t.paths=function(n,t,r,e){return x(n,r?e?i:l:e?l:o,t)}(n,r.paths,e,u)),t}export{P as a,w as b,z as c,y as d,m as q,s as t,d as u};
