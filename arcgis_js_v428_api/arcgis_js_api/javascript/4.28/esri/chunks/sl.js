// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./calcite-input-time-picker"],function(f,h){function e(c,a,k,b){var d=c+" ";switch(k){case "s":return a||b?"nekaj sekund":"nekaj sekundami";case "m":return a?"ena minuta":"eno minuto";case "mm":return 2==c%100?d+(a||b?"minuti":"minutama"):3==c%100||4==c%100?d+(a||b?"minute":"minutami"):d+(a||b?"minut":"minutami");case "h":return a?"ena ura":"eno uro";case "hh":return 2==c%100?d+(a||b?"uri":"urama"):3==c%100||4==c%100?d+(a||b?"ure":"urami"):d+(a||b?"ur":"urami");case "d":return a||
b?"en dan":"enim dnem";case "dd":return 2==c%100?d+(a||b?"dneva":"dnevoma"):d+(a||b?"dni":"dnevi");case "M":return a||b?"en mesec":"enim mesecem";case "MM":return 2==c%100?d+(a||b?"meseca":"mesecema"):3==c%100||4==c%100?d+(a||b?"mesece":"meseci"):d+(a||b?"mesecev":"meseci");case "y":return a||b?"eno leto":"enim letom";case "yy":return 2==c%100?d+(a||b?"leti":"letoma"):3==c%100||4==c%100?d+(a||b?"leta":"leti"):d+(a||b?"let":"leti")}}var g={name:"sl",weekdays:"nedelja ponedeljek torek sreda \u010detrtek petek sobota".split(" "),
months:"januar februar marec april maj junij julij avgust september oktober november december".split(" "),weekStart:1,weekdaysShort:"ned. pon. tor. sre. \u010det. pet. sob.".split(" "),monthsShort:"jan. feb. mar. apr. maj. jun. jul. avg. sep. okt. nov. dec.".split(" "),weekdaysMin:"ne po to sr \u010de pe so".split(" "),ordinal:function(c){return c+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"\u010dez %s",
past:"pred %s",s:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e}};h.d.locale(g,null,!0);f.default=g;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});