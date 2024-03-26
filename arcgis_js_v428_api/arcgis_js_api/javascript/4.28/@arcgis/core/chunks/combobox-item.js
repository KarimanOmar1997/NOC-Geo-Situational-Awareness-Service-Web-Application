/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{p as e,H as i,c as t,h as c,a as o}from"./index.js";import{c as s,d as a}from"./conditionalSlot.js";import{w as l}from"./dom.js";import{g as n}from"./guid.js";import{c as r,d,u as m}from"./interactive.js";import{e as b,i as h,f as u}from"./utils22.js";import{d as p}from"./icon.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.2
 */const g="icon",x="icon--active",f="icon--indent",v=e(class extends i{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteComboboxItemChange=t(this,"calciteComboboxItemChange",6),this.itemClickHandler=e=>{e.preventDefault(),this.toggleSelected()},this.disabled=!1,this.selected=!1,this.active=!1,this.ancestors=void 0,this.guid=n(),this.icon=void 0,this.iconFlipRtl=!1,this.textLabel=void 0,this.value=void 0,this.filterDisabled=void 0,this.selectionMode="multiple",this.scale="m"}selectedWatchHandler(){this.calciteComboboxItemChange.emit()}connectedCallback(){this.ancestors=b(this.el),s(this),r(this)}disconnectedCallback(){a(this),d(this)}componentDidRender(){m(this)}toggleSelected(){const e="single-persist"===this.selectionMode;this.disabled||e&&this.selected||(this.selected=!this.selected)}renderIcon(e){return this.icon?c("calcite-icon",{class:{"icon--custom":!!this.icon,[x]:this.icon&&this.selected,[f]:!0},flipRtl:this.iconFlipRtl,icon:this.icon||e,key:"icon",scale:"l"===this.scale?"m":"s"}):null}renderSelectIndicator(e,i){return e?c("span",{class:{[g]:!0,"icon--dot":!0,[f]:!0}}):c("calcite-icon",{class:{[g]:!0,[x]:this.selected,[f]:!0},flipRtl:this.iconFlipRtl,icon:i,key:"indicator",scale:"l"===this.scale?"m":"s"})}renderChildren(){return l(this.el)?c("ul",{key:"default-slot-container"},c("slot",null)):null}render(){const e=h(this.selectionMode),i=e&&!this.disabled,t=e?"dot":"check",s=this.disabled?"circle-disallowed":t,a={label:!0,"label--selected":this.selected,"label--active":this.active,"label--single":e},l=u(this.el);return c(o,{"aria-hidden":"true"},c("div",{class:`container scale--${this.scale}`,style:{"--calcite-combobox-item-spacing-indent-multiplier":`${l}`}},c("li",{class:a,id:this.guid,onClick:this.itemClickHandler},this.renderSelectIndicator(i,s),this.renderIcon(s),c("span",{class:"title"},this.textLabel)),this.renderChildren()))}get el(){return this}static get watchers(){return{selected:["selectedWatchHandler"]}}static get style(){return'@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([hidden]){display:none}[hidden]{display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.625rem;--calcite-combobox-item-spacing-indent:1rem;--calcite-combobox-item-selector-icon-size:1.5rem}.container{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  )}:host(:focus){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host,ul{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),ul:focus{outline:2px solid transparent;outline-offset:2px}.label{position:relative;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:100%;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent;word-wrap:break-word;word-break:break-word;padding-block:var(--calcite-combobox-item-spacing-unit-s);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host([disabled]) .label{cursor:default}.label--selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.label--active{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.label:hover,.label:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration-line:none;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.title{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon{display:inline-flex;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-border-1)}.icon--indent{padding-inline-start:var(--calcite-combobox-item-indent-value)}.icon--custom{margin-block-start:-1px;padding-inline-start:var(--calcite-combobox-item-spacing-unit-l);color:var(--calcite-ui-text-3)}.icon--active{color:var(--calcite-ui-text-1)}.icon--dot{display:flex;justify-content:center;min-inline-size:var(--calcite-combobox-item-selector-icon-size)}.icon--dot:before{text-align:start;content:"•"}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-ui-brand)}:host(:hover[disabled]) .icon{opacity:1}'}},[1,"calcite-combobox-item",{disabled:[516],selected:[1540],active:[516],ancestors:[1040],guid:[513],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],textLabel:[513,"text-label"],value:[8],filterDisabled:[516,"filter-disabled"],selectionMode:[513,"selection-mode"],scale:[1]}]);function w(){"undefined"!=typeof customElements&&["calcite-combobox-item","calcite-icon"].forEach((e=>{switch(e){case"calcite-combobox-item":customElements.get(e)||customElements.define(e,v);break;case"calcite-icon":customElements.get(e)||p()}}))}w();export{v as C,w as d};
