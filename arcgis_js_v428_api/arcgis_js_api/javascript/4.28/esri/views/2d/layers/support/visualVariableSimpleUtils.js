// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/mathUtils","../../../../renderers/support/lengthUtils","../../../../renderers/visualVariables/support/sizeVariableUtils"],function(l,m,q,g){function n(a,b){switch(b.transformationType){case g.TransformationType.Additive:var c=d(b.minSize,a);return a+(c||b.minDataValue);case g.TransformationType.Constant:return c=b.stops,c=c?.length&&c[0].size,null==c&&(c=b.minSize),d(c,a);case g.TransformationType.ClampedLinear:c=b.minDataValue;var e=b.maxDataValue,h=(a-c)/(e-c),
f=d(b.minSize,a);b=d(b.maxSize,a);a=a<=c?f:a>=e?b:f+h*(b-f);return a;case g.TransformationType.Proportional:return c=a/b.minDataValue,e=d(b.minSize,a),a=d(b.maxSize,a),m.clamp(c*e,e,a);case g.TransformationType.Stops:{const [k,p,r]=t(a,b.cache.ipData);k===p?a=d(b.stops[k].size,a):(c=d(b.stops[k].size,a),a=d(b.stops[p].size,a),a=c+(a-c)*r)}return a;case g.TransformationType.RealWorldSize:return c=q.meterIn[b.valueUnit],e=d(b.minSize,a),h=d(b.maxSize,a),{valueRepresentation:b}=b,f=null,f="area"===b?
2*Math.sqrt(a/u)/c:"radius"===b||"distance"===b?2*a/c:a/c,m.clamp(f,e,h);case g.TransformationType.Identity:return a;case g.TransformationType.Unknown:return null}}function d(a,b){return"number"===typeof a?a:n(b,a)}function t(a,b){if(b){var c=0,e=b.length-1;b.some((h,f)=>{if(a<h)return e=f,!0;c=f;return!1});return[c,e,(a-b[c])/(b[e]-b[c])]}}const u=Math.PI;l.getSizeForValueSimple=n;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});