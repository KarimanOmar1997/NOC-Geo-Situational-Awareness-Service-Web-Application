// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["./bidiEngineTables"],function(h){function v(a,c,g,e,b){var d=a;void 0===c&&(c=b.defInFormat);void 0===g&&(g=b.defOutFormat);void 0===e&&(e=b.defSwap);if(c!==g){var f=c.substring(0,1),m=g.substring(0,1);var k=c.substring(1,4);var n=g.substring(1,4);"C"===k.charAt(0)&&(k=x(d),k="ltr"===k||"rtl"===k?k.toUpperCase():"L"===c.charAt(2)?"LTR":"RTL",c=f+k);"C"===n.charAt(0)&&(k=x(d),"rtl"===k?n="RTL":"ltr"===k?(d=d.split(""),d.reverse(),k=x(d.join("")),n=k.toUpperCase()):n="L"===g.charAt(2)?"LTR":
"RTL",g=m+n)}if(c===g)return a;m=c.substring(0,1);d=c.substring(1,4);f=g.substring(0,1);n=g.substring(1,4);b.inFormat=c;b.outFormat=g;b.swap=e;if("L"===m&&"VLTR"===g){if("LTR"===d)return b.dir=0,u(a,b);if("RTL"===d)return b.dir=1,u(a,b)}if("V"===m&&"V"===f)return b.dir="RTL"===d?1:0,A(a,b);if("L"===m&&"VRTL"===g)return b.dir="LTR"===d?0:1,a=u(a,b),A(a);if("VLTR"===c&&"LLTR"===g)return b.dir=0,u(a,b);if("V"===m&&"L"===f&&d!==n)return a=A(a),"RTL"===d?v(a,"LLTR","VLTR",e,b):v(a,"LRTL","VRTL",e,b);if("VRTL"===
c&&"LRTL"===g)return v(a,"LRTL","VRTL",e,b);"L"===m&&"L"===f&&(c=b.swap,b.swap=c.substr(0,1)+"N","RTL"===d?(b.dir=1,a=u(a,b),b.swap="N"+c.substr(1,2),b.dir=0,a=u(a,b)):(b.dir=0,a=u(a,b),b.swap="N"+c.substr(1,2),a=v(a,"VLTR","LRTL",b.swap,b)));return a}function x(a){return(a=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(a))?"z">=a[0]?"ltr":"rtl":""}function u(a,c){a=a.split("");const g=[];C(a,g,c);if(0!==c.hiLevel&&c.swap.substr(0,1)!==c.swap.substr(1,2))for(let d=
0;d<a.length;d++)if(1===g[d]){var e=d;b:{let f=void 0;var b=a[d];let m=0,k=h.swapTable.length-1;for(;m<=k;)if(f=Math.floor((m+k)/2),b<h.swapTable[f][0])k=f-1;else if(b>h.swapTable[f][0])m=f+1;else{b=h.swapTable[f][1];break b}}a[e]=b}D(2,a,g,c);D(1,a,g,c);y=g;return a.join("")}function C(a,c,g){const e=a.length;var b=g.dir?h.impTabRtl:h.impTabLtr,d=0,f=-1;const m=[],k=[];g.hiLevel=g.dir;g.lastArabic=!1;g.hasUbatAl=!1;g.hasUbatB=!1;g.hasUbatS=!1;for(var n=0;n<e;n++){var l=n,p=a[n].charCodeAt(0);const q=
h.primaryTable[p>>8];m[l]=q<h.tbbase?q:h.unicodeTable[q-h.tbbase][p&255]}for(l=0;l<e;l++){n=L(a,m,k,l,g);k[l]=n;d=b[d][n];p=d&240;d&=15;n=b[d][5];c[l]=n;if(0<p){if(16===p)for(;f<l;f++)c[f]=1;f=-1}if(b[d][6])-1===f&&(f=l);else if(-1<f){for(;f<l;f++)c[f]=n;f=-1}m[l]===h.ubatB&&(c[l]=0);g.hiLevel|=n}if(g.hasUbatS)for(a=0;a<e;a++)if(m[a]===h.ubatS)for(c[a]=g.dir,b=a-1;0<=b;b--)if(m[b]===h.ubatWs)c[b]=g.dir;else break}function A(a,c){a=a.split("");if(c){const g=[];C(a,g,c);y=g}a.reverse();r.reverse();
return a.join("")}function E(a){for(let c=0;c<h.arabicAlefBetIntervalsBegine.length;c++)if(a>=h.arabicAlefBetIntervalsBegine[c]&&a<=h.arabicAlefBetIntervalsEnd[c])return!0;return!1}function F(a,c,g,e){for(;c*g<e&&w(a[c]);)c+=g;return c*g<e&&E(a[c])?!0:!1}function D(a,c,g,e){if(!(e.hiLevel<a))if(1!==a||1!==e.dir||e.hasUbatB){e=c.length;for(var b=0,d,f,m;b<e;){if(g[b]>=a){for(d=b+1;d<e&&g[d]>=a;)d++;for(f=d-1;b<f;b++,f--)m=c[b],c[b]=c[f],c[f]=m,m=r[b],r[b]=r[f],r[f]=m;b=d}b++}}else c.reverse(),r.reverse()}
function L(a,c,g,e,b){return{UBAT_L:()=>{b.lastArabic=!1;return h.ubatL},UBAT_R:()=>{b.lastArabic=!1;return h.ubatR},UBAT_ON:()=>h.ubatOn,UBAT_AN:()=>h.ubatAn,UBAT_EN:()=>b.lastArabic?h.ubatAn:h.ubatEn,UBAT_AL:()=>{b.lastArabic=!0;b.hasUbatAl=!0;return h.ubatR},UBAT_WS:()=>h.ubatOn,UBAT_CS:()=>{let d,f;if(1>e||e+1>=c.length||(d=g[e-1])!==h.ubatEn&&d!==h.ubatAn||(f=c[e+1])!==h.ubatEn&&f!==h.ubatAn)return h.ubatOn;b.lastArabic&&(f=h.ubatAn);return f===d?f:h.ubatOn},UBAT_ES:()=>(0<e?g[e-1]:h.ubatB)===
h.ubatEn&&e+1<c.length&&c[e+1]===h.ubatEn?h.ubatEn:h.ubatOn,UBAT_ET:()=>{if(0<e&&g[e-1]===h.ubatEn)return h.ubatEn;if(b.lastArabic)return h.ubatOn;let d=e+1;const f=c.length;for(;d<f&&c[d]===h.ubatEt;)d++;return d<f&&c[d]===h.ubatEn?h.ubatEn:h.ubatOn},UBAT_NSM:()=>{if("VLTR"===b.inFormat){for(var d=c.length,f=e+1;f<d&&c[f]===h.ubatNsm;)f++;if(f<d&&(d=a[e].charCodeAt(0),f=c[f],(1425<=d&&2303>=d||64286===d)&&(f===h.ubatR||f===h.ubatAl)))return h.ubatR}return 1>e||c[e-1]===h.ubatB?h.ubatOn:g[e-1]},UBAT_B:()=>
{b.lastArabic=!0;b.hasUbatB=!0;return b.dir},UBAT_S:()=>{b.hasUbatS=!0;return h.ubatOn},UBAT_LRE:()=>{b.lastArabic=!1;return h.ubatOn},UBAT_RLE:()=>{b.lastArabic=!1;return h.ubatOn},UBAT_LRO:()=>{b.lastArabic=!1;return h.ubatOn},UBAT_RLO:()=>{b.lastArabic=!1;return h.ubatOn},UBAT_PDF:()=>{b.lastArabic=!1;return h.ubatOn},UBAT_BN:()=>h.ubatOn}[h.typesNames[c[e]]]()}function B(a,c){for(let g=0;g<h.baseForm.length;g++)if(a===h.baseForm[g])return c[g];return a}function w(a){return"\u064b"<=a&&"\u0655">=
a}function G(a){return"L"===a?"LTR":"R"===a?"RTL":"C"===a?"CLR":"D"===a?"CRL":""}function H(a,c){for(let g=0;g<h.aLefTable.length;g++)if(a===h.aLefTable[g])return c[g];return a}function I(a,c,g,e){for(let b=0;b<a.length;b++)if(a[b]>c||!g&&a[b]===c)a[b]+=e}class M{constructor(){this.inputFormat="ILYNN";this.outputFormat="VLNNN";this.sourceToTarget=[];this.targetToSource=[];this.levels=[]}bidiTransform(a,c,g){this.sourceToTarget=[];this.targetToSource=[];if(!a)return"";var e=this.sourceToTarget,b=this.targetToSource,
d=a.length;r=[];y=[];for(var f=0;f<d;f++)e[f]=f,b[f]=f,r[f]=f;if(!this.checkParameters(c,g))return a;c=this.inputFormat;g=this.outputFormat;e=a;e=N;f=G(c.charAt(1));b=G(g.charAt(1));var m="I"===c.charAt(0)?"L":c.charAt(0);d="I"===g.charAt(0)?"L":g.charAt(0);f=m+f;b=d+b;d=c.charAt(2)+g.charAt(2);e.defInFormat=f;e.defOutFormat=b;e.defSwap=d;a=v(a,f,b,d,e);e=!1;if("R"===g.charAt(1))e=!0;else if("C"===g.charAt(1)||"D"===g.charAt(1))e="rtl"===this.checkContextual(a);b=this.sourceToTarget=r;d=Array(b.length);
for(f=0;f<b.length;f++)d[b[f]]=f;z=this.targetToSource=d;if(c.charAt(3)===g.charAt(3))e=a;else if("S"===g.charAt(3))if(c=e,g=!0,0===a.length)e="";else{void 0===c&&(c=!0);void 0===g&&(g=!0);a=String(a);a=a.split("");d=0;e=1;b=a.length;c||(d=a.length-1,e=-1,b=1);var k=d;d=g;var n=0;f=[];for(m=0;k*e<b;k+=e)if(E(a[k])||w(a[k])){var l;if(l="\u0644"===a[k])b:{for(var p=a,q=k+e,t=e,J=b;q*t<J&&w(p[q]);)q+=t;l=" ";if(q*t<J)for(l=p[q],p=0;p<h.aLefTable.length;p++)if(h.aLefTable[p]===l){l=!0;break b}l=!1}if(l){a[k]=
0===n?H(a[k+e],h.lamAlefInialTableFE):H(a[k+e],h.lamAlefMedialTableFE);k+=e;n=a;l=k;p=e;for(q=b;l*p<q&&w(n[l]);)l+=p;l*p<q&&(n[l]=" ");d&&(f[m]=k,m++);n=0}else{l=a[k];if(1===n){p=k;if(F(a,k+e,e,b))b:for(q=a[k],t=0;t<h.baseForm.length;t++){if(q===h.baseForm[t]){q=h.medialForm[t];break b}}else q=B(a[k],h.finalForm);a[p]=q}else!0===F(a,k+e,e,b)?a[k]=B(a[k],h.initialForm):a[k]=B(a[k],h.isolatedForm);w(l)||(n=1);b:{for(p=0;p<h.standAlonForm.length;p++)if(h.standAlonForm[p]===l){l=!0;break b}l=!1}!0===
l&&(n=0)}}else n=0;e=f;b="";for(d=0;d<a.length;d++){if(f=g){b:{for(f=0;f<e.length;f++)if(e[f]===d)break b;f=-1}f=-1<f}f?(I(z,d,!c,-1),r.splice(d,1)):b+=a[d]}e=b}else if(c=a,g=e,a=!0,0===c.length)e="";else for(void 0===a&&(a=!0),void 0===g&&(g=!0),c=String(c),e="",b=c.split(""),d=0;d<c.length;d++)f=!1,"\ufe70"<=b[d]&&"\ufeff">b[d]?(m=c.charCodeAt(d),"\ufef5"<=b[d]&&"\ufefc">=b[d]?(g?(0<d&&a&&" "===b[d-1]?e=e.substring(0,e.length-1)+"\u0644":(e+="\u0644",f=!0),e+=h.aLefTable[(m-65269)/2]):(e+=h.aLefTable[(m-
65269)/2],e+="\u0644",d+1<c.length&&a&&" "===b[d+1]?d++:f=!0),f&&(I(z,d,!0,1),r.splice(d,0,r[d]))):e+=h.feTo06Table[m-65136]):e+=b[d];this.sourceToTarget=r;this.targetToSource=z;this.levels=y;return e}_inputFormatSetter(a){if(!K.test(a))throw Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=a}_outputFormatSetter(a){if(!K.test(a))throw Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.outputFormat=a}checkParameters(a,c){a?this._inputFormatSetter(a):
a=this.inputFormat;c?this._outputFormatSetter(c):c=this.outputFormat;return a===c?!1:!0}checkContextual(a){a=x(a);if("ltr"!==a&&"rtl"!==a){try{a=document.dir.toLowerCase()}catch(c){}"ltr"!==a&&"rtl"!==a&&(a="ltr")}return a}hasBidiChar(a){return O.test(a)}}let r=[],z=[],y=[];const N={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},K=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,
O=/[\u0591-\u06ff\ufb1d-\ufefc]/;return M});