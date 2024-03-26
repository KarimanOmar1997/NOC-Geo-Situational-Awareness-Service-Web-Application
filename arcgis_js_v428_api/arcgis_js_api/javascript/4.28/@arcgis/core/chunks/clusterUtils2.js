/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{x as n}from"./typedArrayUtil.js";import{c as i}from"./MD5.js";import{j as t}from"./visualVariableUtils.js";import{g as e}from"./utils15.js";import{e as l}from"./utils2.js";const o="cluster_count";function a(n,i){return n.split(`cluster_${i}_`).pop()}function r(n,e){const o=function(n){if(!n)return null;const{field:i,valueExpression:e,normalizationField:o,normalizationType:a,normalizationTotal:r}=n;let s=null;if(e)s=e;else if(i){const n=l({normalizationType:a,normalizationField:o,normalizationTotal:r});if(n){const e=n.toLowerCase();if(s=i.toLowerCase()+",norm:"+e,o)s+=","+o.toLowerCase();else if("percent-of-total"===e){let n=r;t(n)&&0!==n||(n=null),s+=","+n}}}return s}(n),a=null!=o?function(n){return i(n)}(o):n.field;return`${e}_${a}`}function s(n,i){return`cluster_${r(n,i)}`}function u(n,i){const t=i.getField(n);return t?.type}function p(n,i){const t="rotation"===i.type?i.rotationType:null,e=i.legendOptions?.title,l=i.field,o=l?u(l,n):null;return{field:l,fieldType:null!=o?o:null,rotationType:t,valueExpression:i.valueExpression,valueExpressionTitle:i.valueExpressionTitle||i.valueExpression&&e,normalizationField:"normalizationField"in i?i.normalizationField:null,vvType:i.type}}function f(n){return n?n.replaceAll('"','\\"'):""}function c(n,i,t){return`\n  var uvInfos = [${function(n){return n.map((n=>`{\n        "value": "${String(n.value)}",\n        "label": "${f(String(n.label))}"\n      }`))}(n).join(", ")}];\n  var predominantType = Text($feature["${i}"]);\n  var label = "${f(t)}";\n\n  for (var i = 0; i < Count(uvInfos); i++) {\n    if (uvInfos[i].value == predominantType) {\n      label = uvInfos[i].label;\n      break;\n    }\n  }\n\n  return label;\n  `}function m(n,i){const t=[r(n,i)];return"date"===n.fieldType&&t.push(n.fieldType.toLowerCase()),n.rotationType&&t.push(n.rotationType.toLowerCase()),t.join("_")}function v(n,i){return{statisticHash:m(n,i),attributeInfo:n,statisticType:i}}function T(i,t,l=!0){const o=[],a=function(n,i){const t="field"in i?i.field:null,e=t?u(t,n):null;return{field:t,fieldType:null!=e?e:null,valueExpression:"valueExpression"in i?i.valueExpression:null,valueExpressionTitle:"valueExpressionTitle"in i?i.valueExpressionTitle:null,normalizationField:"normalizationField"in i?i.normalizationField:null,normalizationType:"normalizationType"in i?i.normalizationType:null,normalizationTotal:"normalizationTotal"in i?i.normalizationTotal:null}}(i,t);"class-breaks"===t.type?o.push(v(a,"avg")):"unique-value"===t.type&&o.push(v(a,"type"));const r=e(t);for(const n of r){const t=p(i,n);o.push(v(t,"avg"))}return l?n(o,((n,i)=>n.statisticHash===i.statisticHash)):o}export{T as a,s as b,o as c,a as d,c as g};
