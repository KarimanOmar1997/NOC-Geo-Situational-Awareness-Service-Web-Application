// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../utils","../support/SuggestionCandidate","../support/SuggestLocationsParameters"],function(e,f,c,g,h){function k(a){({data:a}=a);if(!a)return[];({suggestions:a}=a);return a?a.map(b=>new g(b)):[]}e.suggestLocations=async function(a,b,d){a=c.parseUrl(a);b=h.from(b);b={...b.toJSON(),f:"json"};b=c.encode({...a.query,...b});d=c.asValidOptions(b,d);return f(`${a.path}/suggest`,d).then(k)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});