/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{p as e,H as t,c as o,h as a,a as i}from"./index.js";import{c as s,d as n}from"./conditionalSlot.js";import{y as c}from"./dom.js";import{s as r,a as l,c as d}from"./loadable.js";import{c as p,d as h}from"./locale2.js";import{u,c as m,d as g,s as x}from"./t9n.js";import{t as f,E as b}from"./ExpandToggle.js";import{c as y}from"./observers.js";import{d as v}from"./action.js";import{d as w}from"./action-group.js";import{d as j}from"./action-menu.js";import{d as E}from"./icon.js";import{d as k}from"./loader.js";import{d as L}from"./popover2.js";import"./key.js";import"./guid.js";import"./interactive.js";import"./array.js";import"./floating-ui.js";import"./debounce.js";import"./Heading2.js";import"./openCloseComponent.js";import"./FloatingArrow.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.2
 */const T=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionPadToggle=o(this,"calciteActionPadToggle",6),this.mutationObserver=y("mutation",(()=>this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group"))))),this.actionMenuOpenHandler=e=>{if(e.target.menuOpen){const t=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((e=>{t.includes(e)||(e.menuOpen=!1)}))}},this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionPadToggle.emit()},this.setExpandToggleRef=e=>{this.expandToggleEl=e},this.handleDefaultSlotChange=e=>{const t=c(e).filter((e=>e?.matches("calcite-action-group")));this.setGroupLayout(t)},this.handleTooltipSlotChange=e=>{const t=c(e).filter((e=>e?.matches("calcite-tooltip")));this.expandTooltip=t[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.expandTooltip=void 0,this.effectiveLocale="",this.defaultMessages=void 0}expandedHandler(e){f({el:this.el,expanded:e})}layoutHandler(){this.updateGroups()}onMessagesChange(){}effectiveLocaleChange(){u(this,this.effectiveLocale)}connectedCallback(){s(this),p(this),m(this)}disconnectedCallback(){h(this),g(this),n(this)}async componentWillLoad(){r(this);const{el:e,expanded:t}=this;f({el:e,expanded:t}),await x(this)}componentDidLoad(){l(this)}async setFocus(){await d(this),this.el?.focus()}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(e){e.forEach((e=>e.layout=this.layout))}renderBottomActionGroup(){const{expanded:e,expandDisabled:t,messages:o,el:i,position:s,toggleExpand:n,scale:c,layout:r,actionsEndGroupLabel:l}=this,d=t?null:a(b,{collapseText:o.collapse,el:i,expandText:o.expand,expanded:e,position:s,scale:c,toggle:n,tooltip:this.expandTooltip,ref:this.setExpandToggleRef});return d?a("calcite-action-group",{class:"action-group--end",label:l,layout:r,scale:c},a("slot",{name:"expand-tooltip",onSlotchange:this.handleTooltipSlotChange}),d):null}render(){return a(i,{onCalciteActionMenuOpen:this.actionMenuOpenHandler},a("div",{class:"container"},a("slot",{onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup()))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:block}@keyframes in{0%{opacity:0}100%{opacity:1}}:host{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.125rem;--calcite-action-pad-expanded-max-width:auto;background:transparent}:host([expanded][layout=vertical]) .container{max-inline-size:var(--calcite-action-pad-expanded-max-width)}::slotted(calcite-action-group){border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px}.container{display:inline-flex;flex-direction:column;overflow-y:auto;border-radius:0.25rem;background-color:var(--calcite-ui-background);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px}:host([layout=horizontal]) .container{flex-direction:row}:host([layout=horizontal]) .container .action-group--bottom{padding:0px}:host([layout=horizontal]) .container ::slotted(calcite-action-group){border-width:0px;padding:0px;border-inline-end-width:1px}::slotted(calcite-action-group:last-child){border-block-end-width:0px}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-action-pad",{actionsEndGroupLabel:[1,"actions-end-group-label"],expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],expandTooltip:[32],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]}]);function A(){"undefined"!=typeof customElements&&["calcite-action-pad","calcite-action","calcite-action-group","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach((e=>{switch(e){case"calcite-action-pad":customElements.get(e)||customElements.define(e,T);break;case"calcite-action":customElements.get(e)||v();break;case"calcite-action-group":customElements.get(e)||w();break;case"calcite-action-menu":customElements.get(e)||j();break;case"calcite-icon":customElements.get(e)||E();break;case"calcite-loader":customElements.get(e)||k();break;case"calcite-popover":customElements.get(e)||L()}}))}A();const C=T,G=A;export{C as CalciteActionPad,G as defineCustomElement};