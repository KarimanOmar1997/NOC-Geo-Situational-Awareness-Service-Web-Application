// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../core/Error","../layers/support/Field"],function(l,w,m){function r(a){return Object.keys(a.attributes).map(b=>{const g=a.attributes[b];return"objectid"===b.toLowerCase()||"fid"===b.toLowerCase()?new m({name:b,alias:b,type:"oid"}):"number"===typeof g?new m({name:b,alias:b,type:"double"}):new m({name:b,alias:b,type:"string"})})}function t(a){if(!a.fields){var b=a.features[0];if(b.layer){a.fields=b.layer.fields;const g=Object.keys(b.attributes);b=a.fields.filter(e=>g.includes(e.name));
a.fields=b}else a.fields=r(b)}return a}function u(a){return a.map(({attributes:b})=>b)}function v(a){const {delimiter:b,fields:g=[],outFields:e=[]}=a,h=b||",",d=g.map(n=>n.name);return n=>{let p="";d.filter(k=>e.includes(k)).forEach(k=>{var c=g.find(({name:q})=>q===k);let f=n[k]||"";"date"===c?.type&&(f=(new Date(f)).toString());c?.domain&&"coded-value"===c.domain.type&&(c=c.domain.codedValues.find(q=>f===q.code))&&(f=c.name);"string"===typeof f&&f.includes(h)&&(f=`"${f}"`);p+=`${f}${h}`});return`${p}\r\n`}}
l.attributeToString=v;l.convertFeaturesToCSV=async function(a,{includeGeometry:b=!0,delimiter:g=",",outFields:e=["*"]}={}){a=t(a);if(b&&"point"!==a.geometryType)throw new w("export-csv:invalid-geometries",`the input geometry ${a.geometryType} is not supported, must be point`);var {features:h}=a;if(!h.length)return null;let d=a.fields;const [n]=e;"*"===n&&(e=d.map(c=>c.name));b&&"point"===a.geometryType&&(d.some(c=>"x"===c.name||"y"===c.name)||(d=[...d,new m({name:"lon",alias:"Longitude",type:"double"}),
new m({name:"lat",alias:"Latitude",type:"double"})],e=[...e,"lon","lat"]),h.forEach(c=>{c.attributes.lon=c.geometry.longitude;c.attributes.lat=c.geometry.latitude}));d=d.filter(c=>e.includes(c.name));a=g||",";h=u(h);b=d.map(c=>c.name).join(a);const p=v({delimiter:a,outFields:e||d.map(c=>c.name),fields:d});let k=`${b}${a}\r\n`;h.forEach(c=>{k+=p(c)});return k.replace(new RegExp(`${a}\r\ns*$`,"g"),"")};l.extractAttributes=u;l.extractFieldsFromFeature=r;l.validateFeatureSetFields=t;Object.defineProperty(l,
Symbol.toStringTag,{value:"Module"})});