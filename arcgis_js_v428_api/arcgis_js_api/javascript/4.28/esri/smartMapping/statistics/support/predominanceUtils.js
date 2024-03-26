// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../support/utils"],function(f,p){function q(a){return`(${a.map(b=>`${b} >= 0`).join(" OR ")})`}function r(a,b){const {returnFieldName:d,defaultValue:g,layer:k}=b;b=[];if(d&&g){var e=a.map(c=>`${c} <= 0`).join(" AND ");b.push(`WHEN ${e} THEN ${g}`)}for(const c of a){e=a.reduce((m,t)=>{c!==t&&m.push(`${c} > ${t}`);return m},[]).join(" AND ");var h=k&&p.isIntegerField(k,c);h=d&&`'${c}'`?`'${c}'`:h?p.castIntegerFieldToFloat(c):c;b.push(`WHEN ${e} THEN ${h}`)}return`CASE ${b.join(" ")} ELSE ${g||
"0"} END`}function l(a){return a&&a.map(b=>`$feature["${b}"];`).join("\n")+"\n"||""}function n(a,b=!1){a=a.map(d=>`"${d}"`);return`\n  var fieldNames = [ ${a.join(", ")} ];\n  var numFields = ${a.length};\n  var maxValueField = null;\n  var maxValue = -Infinity;\n  var value, i, totalValue = null;\n\n  for(i = 0; i < numFields; i++) {\n    value = $feature[fieldNames[i]];\n\n    if(value > 0) {\n      if(value > maxValue) {\n        maxValue = value;\n        maxValueField = fieldNames[i];\n      }\n      else if (value == maxValue) {\n        maxValueField = null;\n      }\n    }\n    ${b?
"\n  if(value !\x3d null \x26\x26 value \x3e\x3d 0) {\n    if (totalValue \x3d\x3d null) { totalValue \x3d 0; }\n    totalValue \x3d totalValue + value;\n  }\n  ":""}\n  }\n  `}function u(a){const b=n(a);return`\n  ${l(a)}\n  ${b}\n  return maxValueField;\n  `}function v(a){const b=l(a);a=a.map(d=>`"${d}"`);return`\n  ${b}\n  var fieldNames = [ ${a.join(", ")} ];\n  var numFields = ${a.length};\n  var value, i, totalValue = null;\n\n  for(i = 0; i < numFields; i++) {\n    value = $feature[fieldNames[i]];\n\n    if(value != null && value >= 0) {\n      if (totalValue == null) { totalValue = 0; }\n      totalValue = totalValue + value;\n    }\n  }\n\n  return totalValue;\n  `}
function w(a){const b=n(a,!0);return`\n  ${l(a)}\n  ${b}\n\n  var strength = null;\n\n  if (maxValueField != null && totalValue > 0) {\n    strength = (maxValue / totalValue) * 100;\n  }\n\n  return strength;\n  `}f.getArcadeForOrderedFields=function(a,b){var d=a.map(e=>e.fieldName);d=l(d);const g=a.map(e=>`{\n    value: Number($feature["${e.fieldName}"]),\n    alias: "${e.label||e.fieldName}"\n    }`),k=[];b&&b.forEach((e,h)=>{k.push(`function getValueForExpr${h}() {\n  ${e.expression} \n}`);g.push(`{\n          value: Number(getValueForExpr${h}()),\n          alias: "${e.title||
e.name}"\n          }`)});return`\n  ${d}\n\n  ${k.length?k.join("\n"):""}\n\n  var groups = [ ${g.join(", ")} ];\n  var numTopValues = Count(groups);\n\n  function getValuesArray(arr){\n    var valuesArray = []\n    for(var i in arr){\n      valuesArray[i] = arr[i].value;\n    }\n    return valuesArray;\n  }\n\n  function findAliases(top5Array, fullArray){\n    var aliases = [];\n    var found = "";\n    for(var i in top5Array){\n      for(var k in fullArray){\n        if(top5Array[i] == fullArray[k].value && Find(fullArray[k].alias, found) == -1){\n          found += fullArray[k].alias;\n          aliases[Count(aliases)] = {\n            alias: fullArray[k].alias,\n            value: top5Array[i]\n          };\n        }\n      }\n    }\n    return aliases;\n  }\n\n  function getTopGroups(groupsArray){\n    var values = getValuesArray(groupsArray);\n    var top5Values = IIF(Max(values) > 0, Top(Reverse(Sort(values)),numTopValues), "no data");\n    var top5Aliases = findAliases(top5Values,groupsArray);\n\n    if(TypeOf(top5Values) == "String"){\n      return top5Values;\n    } else {\n      var content = "";\n      for(var i in top5Aliases){\n        if(top5Aliases[i].value > 0){\n          content += (i+1) + ". " + top5Aliases[i].alias + " (" + Text(top5Aliases[i].value, "#,###") + ")";\n          content += IIF(i < numTopValues-1, TextFormatting.NewLine, "");\n        }\n      }\n    }\n\n    return content;\n  }\n\n  getTopGroups(groups);\n  `};
f.getArcadeForPredominanceMargin=function(a){const b=l(a);a=a.map(d=>`$feature["${d}"]`);return`\n  ${b}\n  var fieldValues = [ ${a.join(", ")} ];\n  var totalValue = Sum(fieldValues);\n  var order = Reverse(Sort(fieldValues));\n  return IIF(totalValue > 0, Round(((order[0] - order[1]) / totalValue) * 100, 2), null);\n  `};f.getArcadeForPredominantCategory=u;f.getArcadeForPredominantCategoryAlias=function(a,b){const d=a.map(c=>c.fieldName),g=l(d),k=a.map(c=>c.label?`"${c.label}"`:`"${c.fieldName}"`),
e=d.map(c=>`Number($feature["${c}"])`),h=[];b&&b.forEach((c,m)=>{h.push(`function getValueForExpr${m}() {\n  ${c.expression} \n}`);e.push(`Number(getValueForExpr${m}())`);k.push(`"${c.title||c.name}"`)});return`\n  ${g}\n\n  ${h.length?h.join("\n"):""}\n\n  var values = [ ${e.join(", ")} ];\n  var aliases = [ ${k.join(", ")} ];\n  var numValues = ${e.length};\n  var maxValueAlias = null;\n  var maxValue = -Infinity;\n  var value, i, totalValue = null;\n\n  for(i = 0; i < numValues; i++) {\n    value = values[i];\n\n    if(value > 0) {\n      if(value > maxValue) {\n        maxValue = value;\n        maxValueAlias = aliases[i];\n      }\n      else if (value == maxValue) {\n        maxValueAlias = "Tie";\n      }\n    }\n  }\n  return maxValueAlias;\n  `};
f.getArcadeForPredominantCategoryValue=function(a){const b=n(a);return`\n  ${l(a)}\n  ${b}\n  return maxValue;\n  `};f.getArcadeForStrengthOfPredominance=w;f.getArcadeForSumOfFields=v;f.getPredominanceExpressions=function(a,b){const d=b.join(" + "),g={sqlExpression:`(${d})`,sqlWhere:q(b)};a={sqlExpression:`(( (${r(b,{layer:a})}) / (${d}) ) * 100)`,sqlWhere:`${q(b)} AND ((${d}) > 0)`};return{predominantCategory:{valueExpression:u(b)},size:{valueExpression:v(b),statisticsQuery:g,histogramQuery:g},opacity:{valueExpression:w(b),
statisticsQuery:a,histogramQuery:a}}};f.getSQLForPredominantCategoryName=function(a){return{expression:r(a,{returnFieldName:!0,defaultValue:"'no_dominant_category'"})}};f.noDominantCategoryField="no_dominant_category";Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});