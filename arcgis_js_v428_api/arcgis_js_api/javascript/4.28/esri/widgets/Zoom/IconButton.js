// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../Widget ../Feature/resources ../support/globalCss ../support/legacyIcon ../support/decorators/accessibleHandler ../support/jsxFactory ../support/widgetUtils".split(" "),function(b,c,a,n,p,f,g,h,d,k,l,e,q){a=class extends g{constructor(){super(...arguments);this.enabled=!0;this.icon=this.iconClass=null;
this.title=""}render(){const m=this.enabled?0:-1;return e.tsx("div",{bind:this,class:this.classes(d.globalCss.widgetButton,d.globalCss.widget,{[d.globalCss.disabled]:!this.enabled,[d.globalCss.interactive]:this.enabled}),onclick:this._triggerAction,onkeydown:this._triggerAction,role:"button",tabIndex:m,title:this.title},e.tsx("span",{"aria-hidden":"true",class:this.classes(h.css.icon,this.iconClass??""),role:"presentation"}),e.tsx("span",{class:k.legacyIcon.fontFallbackText},this.title))}_triggerAction(){this.action.call(this)}};
b.__decorate([c.property()],a.prototype,"action",void 0);b.__decorate([c.property()],a.prototype,"enabled",void 0);b.__decorate([c.property()],a.prototype,"iconClass",void 0);b.__decorate([c.property()],a.prototype,"icon",void 0);b.__decorate([c.property()],a.prototype,"title",void 0);b.__decorate([l.accessibleHandler()],a.prototype,"_triggerAction",null);return a=b.__decorate([f.subclass("esri.widgets.IconButton")],a)});