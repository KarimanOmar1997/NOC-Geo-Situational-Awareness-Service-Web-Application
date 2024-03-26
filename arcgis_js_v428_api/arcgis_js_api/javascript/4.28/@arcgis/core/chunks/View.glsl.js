/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{p as r}from"./mat4.js";import{a}from"./mat4f64.js";import{s as e}from"./vec3.js";import{Z as i,c as s}from"./vec3f64.js";import{U as o,B as n}from"./ShaderBuilder.js";import{F as t}from"./Float3PassUniform.js";import{F as m}from"./FloatPassUniform.js";import{M as c}from"./Matrix4PassUniform.js";class f extends o{constructor(r,a){super(r,"vec3",n.Draw,((e,i,s,o)=>e.setUniform3fv(r,a(i,s,o))))}}class v extends o{constructor(r,a){super(r,"mat4",n.Draw,((e,i,s)=>e.setUniformMatrix4fv(r,a(i,s))))}}function p(r,a){a.instancedDoublePrecision?r.constants.add("cameraPosition","vec3",i):r.uniforms.add(new f("cameraPosition",((r,a)=>e(x,a.camera.viewInverseTransposeMatrix[3]-r.origin[0],a.camera.viewInverseTransposeMatrix[7]-r.origin[1],a.camera.viewInverseTransposeMatrix[11]-r.origin[2]))))}function w(a,i){if(!i.instancedDoublePrecision)return void a.uniforms.add(new c("proj",((r,a)=>a.camera.projectionMatrix)),new v("view",((a,e)=>r(d,e.camera.viewMatrix,a.origin))),new f("localOrigin",(r=>r.origin)));const s=r=>e(x,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]);a.uniforms.add(new c("proj",((r,a)=>a.camera.projectionMatrix)),new c("view",((a,e)=>r(d,e.camera.viewMatrix,s(e)))),new t("localOrigin",((r,a)=>s(a))))}const d=a(),x=s();function u(r){r.uniforms.add(new c("viewNormal",((r,a)=>a.camera.viewInverseTransposeMatrix)))}function l(r){r.uniforms.add(new m("pixelRatio",((r,a)=>a.camera.pixelRatio/a.overlayStretch)))}export{f as F,v as M,w as a,l as b,p as c,u as d};
