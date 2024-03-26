/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{q as t}from"./quickselect.js";function i(t,n){if(!(this instanceof i))return new i(t,n);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear()}function n(t,i,n){if(!n)return i.indexOf(t);for(var h=0;h<i.length;h++)if(n(t,i[h]))return h;return-1}function h(t,i){a(t,0,t.children.length,i,t)}function a(t,i,n,h,a){a||(a=u(null)),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(var e,o=i;o<n;o++)e=t.children[o],r(a,t.leaf?h(e):e);return a}function r(t,i){return t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY),t}function e(t,i){return t.minX-i.minX}function o(t,i){return t.minY-i.minY}function s(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function l(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function c(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function u(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function f(i,n,h,a,r){for(var e,o=[n,h];o.length;)(h=o.pop())-(n=o.pop())<=a||(e=n+Math.ceil((h-n)/a/2)*a,t(i,e,n,h,r),o.push(n,e,e,h))}i.prototype={all:function(){return this._all(this.data,[])},search:function(t){var i=this.data,n=[],h=this.toBBox;if(!c(t,i))return n;for(var a,r,e,o,s=[];i;){for(a=0,r=i.children.length;a<r;a++)e=i.children[a],c(t,o=i.leaf?h(e):e)&&(i.leaf?n.push(e):m(t,o)?this._all(e,n):s.push(e));i=s.pop()}return n},collides:function(t){var i=this.data,n=this.toBBox;if(!c(t,i))return!1;for(var h,a,r,e,o=[];i;){for(h=0,a=i.children.length;h<a;h++)if(r=i.children[h],c(t,e=i.leaf?n(r):r)){if(i.leaf||m(t,e))return!0;o.push(r)}i=o.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}var h=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===h.height)this._splitRoot(this.data,h);else{if(this.data.height<h.height){var a=this.data;this.data=h,h=a}this._insert(h,this.data.height-h.height-1,!0)}else this.data=h;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=u([]),this},remove:function(t,i){if(!t)return this;for(var h,a,r,e,o=this.data,s=this.toBBox(t),l=[],c=[];o||l.length;){if(o||(o=l.pop(),a=l[l.length-1],h=c.pop(),e=!0),o.leaf&&-1!==(r=n(t,o.children,i)))return o.children.splice(r,1),l.push(o),this._condense(l),this;e||o.leaf||!m(o,s)?a?(h++,o=a.children[h],e=!1):o=null:(l.push(o),c.push(h),h=0,a=o,o=o.children[0])}return this},toBBox:function(t){return t},compareMinX:e,compareMinY:o,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,i){for(var n=[];t;)t.leaf?i.push.apply(i,t.children):n.push.apply(n,t.children),t=n.pop();return i},_build:function(t,i,n,a){var r,e=n-i+1,o=this._maxEntries;if(e<=o)return h(r=u(t.slice(i,n+1)),this.toBBox),r;a||(a=Math.ceil(Math.log(e)/Math.log(o)),o=Math.ceil(e/Math.pow(o,a-1))),(r=u([])).leaf=!1,r.height=a;var s,l,m,c,x=Math.ceil(e/o),d=x*Math.ceil(Math.sqrt(o));for(f(t,i,n,d,this.compareMinX),s=i;s<=n;s+=d)for(f(t,s,m=Math.min(s+d-1,n),x,this.compareMinY),l=s;l<=m;l+=x)c=Math.min(l+x-1,m),r.children.push(this._build(t,l,c,a-1));return h(r,this.toBBox),r},_chooseSubtree:function(t,i,n,h){for(var a,r,e,o,l,m,c,u,f,x;h.push(i),!i.leaf&&h.length-1!==n;){for(c=u=1/0,a=0,r=i.children.length;a<r;a++)l=s(e=i.children[a]),f=t,x=e,(m=(Math.max(x.maxX,f.maxX)-Math.min(x.minX,f.minX))*(Math.max(x.maxY,f.maxY)-Math.min(x.minY,f.minY))-l)<u?(u=m,c=l<c?l:c,o=e):m===u&&l<c&&(c=l,o=e);i=o||i.children[0]}return i},_insert:function(t,i,n){var h=this.toBBox,a=n?t:h(t),e=[],o=this._chooseSubtree(a,this.data,i,e);for(o.children.push(t),r(o,a);i>=0&&e[i].children.length>this._maxEntries;)this._split(e,i),i--;this._adjustParentBBoxes(a,e,i)},_split:function(t,i){var n=t[i],a=n.children.length,r=this._minEntries;this._chooseSplitAxis(n,r,a);var e=this._chooseSplitIndex(n,r,a),o=u(n.children.splice(e,n.children.length-e));o.height=n.height,o.leaf=n.leaf,h(n,this.toBBox),h(o,this.toBBox),i?t[i-1].children.push(o):this._splitRoot(n,o)},_splitRoot:function(t,i){this.data=u([t,i]),this.data.height=t.height+1,this.data.leaf=!1,h(this.data,this.toBBox)},_chooseSplitIndex:function(t,i,n){var h,r,e,o,l,m,c,u,f,x,d,p,M,X;for(m=c=1/0,h=i;h<=n-i;h++)f=r=a(t,0,h,this.toBBox),x=e=a(t,h,n,this.toBBox),d=Math.max(f.minX,x.minX),p=Math.max(f.minY,x.minY),M=Math.min(f.maxX,x.maxX),X=Math.min(f.maxY,x.maxY),o=Math.max(0,M-d)*Math.max(0,X-p),l=s(r)+s(e),o<m?(m=o,u=h,c=l<c?l:c):o===m&&l<c&&(c=l,u=h);return u},_chooseSplitAxis:function(t,i,n){var h=t.leaf?this.compareMinX:e,a=t.leaf?this.compareMinY:o;this._allDistMargin(t,i,n,h)<this._allDistMargin(t,i,n,a)&&t.children.sort(h)},_allDistMargin:function(t,i,n,h){t.children.sort(h);var e,o,s=this.toBBox,m=a(t,0,i,s),c=a(t,n-i,n,s),u=l(m)+l(c);for(e=i;e<n-i;e++)o=t.children[e],r(m,t.leaf?s(o):o),u+=l(m);for(e=n-i-1;e>=i;e--)o=t.children[e],r(c,t.leaf?s(o):o),u+=l(c);return u},_adjustParentBBoxes:function(t,i,n){for(var h=n;h>=0;h--)r(i[h],t)},_condense:function(t){for(var i,n=t.length-1;n>=0;n--)0===t[n].children.length?n>0?(i=t[n-1].children).splice(i.indexOf(t[n]),1):this.clear():h(t[n],this.toBBox)},_initFormat:function(t){var i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}};export{i as r};
