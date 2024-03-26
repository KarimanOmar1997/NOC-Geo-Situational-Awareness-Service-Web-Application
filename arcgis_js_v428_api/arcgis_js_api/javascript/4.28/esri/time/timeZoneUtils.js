// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./legacyTimeZoneMap","../chunks/datetime"],function(c,g,h){function k(a,b="system"){return a?"timeZoneIANA"in a?a.timeZoneIANA:l(a,b):b}function m(a){return{timeZoneIANA:a}}function l(a,b="system"){if(!a||!g.legacyTimeZoneMap.has(a.timeZone))return b;b=g.legacyTimeZoneMap.get(a.timeZone);if(a.timeZone.startsWith("UTC")||a.respectsDaylightSaving)return b;a=h.DateTime.local().setZone(b);a=Math.min(a.set({month:1,day:1}).offset,a.set({month:5}).offset);a=0===a?"Etc/UTC":`Etc/GMT${h.FixedOffsetZone.instance(-a).formatOffset(0,
"narrow")}`;return a}const n=Intl.DateTimeFormat().resolvedOptions().timeZone;c.convertLegacyTimeZone=l;c.fromTimeReference=k;c.getTimeZoneComponents=function(a){a="system"===a?n:a;var b=/^(?<area>[\w-]+)(?:\/(?<region>[\w-]+))?\/(?<location>[\w+-]+)$/;if(b.test(a)){b=b.exec(a)?.groups;const {area:e,region:d,location:f}=b;return{area:e,region:d,location:f,timeZone:a}}return{timeZone:a}};c.getTimeZoneFormattingOptions=function(a,b,e,d,f){if(b&&"date"===f)return{timeZone:"UTC",timeZoneName:void 0};
b=d.timeStyle||d.hour;d="unknown"===e;return{timeZone:d?"timestamp-offset"===f?void 0:a??"UTC":e,timeZoneName:d&&b?"shortOffset":void 0}};c.shortTimeZoneName="shortOffset";c.system="system";c.systemTimeZone=n;c.timeZoneProperty=function(a,b=!1){return{json:{read:{source:a,reader(e,d){return d[a]?k(d[a]):null}},write:b?{allowNull:!0,writer(e,d){d[a]=e?m(e):null}}:!1}}};c.toTimeReference=m;c.unknown="unknown";c.utc="UTC";Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});