// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/maybe ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ./Column ../../support/uriUtils".split(" "),function(h,q,k,e,u,v,r,t,p){e=class extends t{constructor(c){super(c);this.activeEditInfo=null;this.cellValueValidatorFunction=({oldValue:a,value:b})=>a!==b;this.editable=!1;this.inputRenderFunction=({root:a,column:b,rowData:d})=>
{if(!this.activeEditInfo?.updating&&this.editable){var f=this.getCellValue(b,d),g=this.createInputElement({root:a,column:b,rowData:d,value:f});this._set("activeEditInfo",{column:b,input:g,root:a,rowData:d,updating:!0,oldValue:f});b=this.createInputContainer();b.appendChild(g);this.removeCellContent(a);a.appendChild(b);g.focus();g instanceof HTMLInputElement&&g.select();this.grid?.notifyResize()}};this.loadingMessage="";this.inputType="text";this.maxLength=null;this.parseInputValueFunction=({input:a})=>
a.value;this.renderFunction=a=>{const {root:b,column:d,rowData:f}=a;var {activeEditInfo:g}=this;if(!g||!g.updating){var l=this.getCellValue(d,f);g=this.cellValueFormatFunction({column:d,rowData:f,value:l});b.onclick=()=>b.focus();b.ondblclick=()=>this.inputRenderFunction(a);b.ontouchend=()=>this.inputRenderFunction(a);var m=this.grid?.getSlotElementByName(b.slot)?.parentElement;m&&!m.onkeydown&&(m.onkeydown=n=>{"Enter"!==n.key||this.activeEditInfo||this.inputRenderFunction(a);"Escape"===n.key&&this.activeEditInfo&&
this.cancel()});null!=l&&null!=g?b.title=g.toString():b.title&&b.removeAttribute("title");l=p.autoLink(this.messagesURIUtils,g);g?.toString()!==b.innerHTML&&l!==b.innerHTML&&(b.innerHTML=l)}};this.required=!1;this.store=null;this.updateRowItemFunction=({rowData:a,column:b,value:d})=>{q.assertIsSome(a);a.item[b.path]=d};this.updateStoreItemFunction=async({rowData:a,column:b,value:d})=>{q.assertIsSome(a);await this.store?.updateItem({index:a.index,name:b.path,value:d})}}cancel(){var {activeEditInfo:c}=
this;if(c){var {column:a,root:b,rowData:d,oldValue:f}=c;this._set("activeEditInfo",null);c=this.cellValueFormatFunction({column:a,rowData:d,value:f});c=p.autoLink(this.messagesURIUtils,c);b.innerHTML=c;this.grid?.notifyResize()}}createInputContainer(){const c=document.createElement("div");c.classList.add("esri-editor-column__cell-input--container");return c}createInputElement({value:c}){const a=document.createElement("input");a.classList.add("esri-editor-column__cell-input");null!=this.maxLength&&
(a.maxLength=this.maxLength);a.type=this.inputType;a.value=c;a.onblur=()=>{a.onblur=null;this.submit()};return a}async submit(){var {activeEditInfo:c}=this;if(c){var {column:a,input:b,root:d,rowData:f,oldValue:g}=c;c=this.parseInputValueFunction({input:b,column:a,rowData:f});if(this.cellValueValidatorFunction({value:c,oldValue:g,column:a,rowData:f})){d.innerHTML=this.loadingMessage;this.grid?.notifyResize();try{await this.updateStoreItemFunction({rowData:f,column:a,value:c});this.updateRowItemFunction({rowData:f,
column:a,value:c});const l=this.getCellValue(a,f),m=this.cellValueFormatFunction({column:a,rowData:f,value:l});null!=l&&null!=m?d.title=m.toString():d.title&&d.removeAttribute("title");const n=p.autoLink(this.messagesURIUtils,m);d.innerHTML=n;this.emit("value-change",{column:a,rowData:f,value:l});this._set("activeEditInfo",null);this.grid?.notifyResize()}catch(l){this.cancel()}}else this.cancel()}}};h.__decorate([k.property({readOnly:!0})],e.prototype,"activeEditInfo",void 0);h.__decorate([k.property()],
e.prototype,"cellValueValidatorFunction",void 0);h.__decorate([k.property()],e.prototype,"editable",void 0);h.__decorate([k.property()],e.prototype,"inputRenderFunction",void 0);h.__decorate([k.property({constructOnly:!0})],e.prototype,"loadingMessage",void 0);h.__decorate([k.property()],e.prototype,"inputType",void 0);h.__decorate([k.property()],e.prototype,"maxLength",void 0);h.__decorate([k.property()],e.prototype,"parseInputValueFunction",void 0);h.__decorate([k.property()],e.prototype,"renderFunction",
void 0);h.__decorate([k.property()],e.prototype,"required",void 0);h.__decorate([k.property()],e.prototype,"store",void 0);h.__decorate([k.property()],e.prototype,"updateRowItemFunction",void 0);h.__decorate([k.property()],e.prototype,"updateStoreItemFunction",void 0);return e=h.__decorate([r.subclass("esri.widgets.FeatureTable.Grid.EditorColumn")],e)});