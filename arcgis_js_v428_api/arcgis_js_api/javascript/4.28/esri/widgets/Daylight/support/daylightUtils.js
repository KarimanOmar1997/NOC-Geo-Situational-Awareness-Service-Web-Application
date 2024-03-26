// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/timeUtils"],function(c,p){function h(a,d,b){d=l(d,b);const {dayOfMonth:f,month:e}=r[d];a=new Date(a.getTime());a.setMonth(e,f);return a}function l(a,d){return d===c.Hemisphere.NORTHERN?a:q(a)}function q(a){a=m.indexOf(a);return m[(a+2)%4]}c.Hemisphere=void 0;(function(a){a[a.NORTHERN=0]="NORTHERN";a[a.SOUTHERN=1]="SOUTHERN"})(c.Hemisphere||(c.Hemisphere={}));const r={spring:{dayOfMonth:20,month:2},summer:{dayOfMonth:21,month:5},fall:{dayOfMonth:23,month:8},winter:{dayOfMonth:21,
month:11}},m=["spring","summer","fall","winter"];c.calculatePlaySpeed=function(a,d,b){if(null==a||null==d||isNaN(a.getTime())&&isNaN(d.getTime()))return 3E5;b=b.getTime();a=a.getTime();d=d.getTime();const f=a-36E5,e=a+36E5,g=d-48E5,n=d+24E5;let k=3E5;if(b>=f&&b<=e)k=12E5>=b-f?18E5-(b-f)/12E5*16E5:6E5>=e-b?3E5-(e-b)/12E5*2E5:2E5;else if(b>=g&&b<=n)k=6E5>=b-g?3E5-(b-g)/12E5*2E5:12E5>=n-b?18E5-(n-b)/12E5*16E5:2E5;else if(b<a||b>d)k=18E5;return k};c.dateTimeToSliderPos=function(a){return p.timeSinceUTCMidnight(a,
"minutes")};c.flipSeasonHemisphere=q;c.getNorthernHemisphereSeason=l;c.getSeasonDate=h;c.getSeasonFromDate=function(a,d){const b=a.getTime(),f=h(a,"spring",c.Hemisphere.NORTHERN).getTime(),e=h(a,"summer",c.Hemisphere.NORTHERN).getTime(),g=h(a,"fall",c.Hemisphere.NORTHERN).getTime();a=h(a,"winter",c.Hemisphere.NORTHERN).getTime();return l(b>=f&&b<e?"spring":b>=e&&b<g?"summer":b>=g&&b<a?"fall":"winter",d)};c.orderedSeasons=m;c.sliderPosToDateTime=function(a,d){return p.makeUTCTime(a,d,"minutes")};Object.defineProperty(c,
Symbol.toStringTag,{value:"Module"})});