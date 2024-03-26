// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ./index ./dom ./guid ./interactive ./loadable ./locale ./observers ./t9n ./icon ./loader".split(" "),function(q,b,l,v,m,n,r,w,h,x,y){function t(){"undefined"!==typeof customElements&&["calcite-action","calcite-icon","calcite-loader"].forEach(a=>{switch(a){case "calcite-action":customElements.get(a)||customElements.define(a,u);break;case "calcite-icon":customElements.get(a)||x.defineCustomElement();break;case "calcite-loader":customElements.get(a)||y.defineCustomElement()}})}const u=
b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();this.mutationObserver=w.createObserver("mutation",()=>b.forceUpdate(this));this.guid=`calcite-action-${v.guid()}`;this.indicatorId=`${this.guid}-indicator`;this.buttonId=`${this.guid}-button`;this.handleTooltipSlotChange=a=>{if(a=a.target.assignedElements({flatten:!0}).filter(c=>c?.matches("calcite-tooltip"))[0])a.referenceElement=this.buttonEl};this.active=!1;this.alignment=void 0;this.appearance=
"solid";this.disabled=this.compact=!1;this.icon=void 0;this.indicator=this.iconFlipRtl=!1;this.label=void 0;this.loading=!1;this.scale="m";this.text=void 0;this.textEnabled=!1;this.messageOverrides=this.messages=void 0;this.effectiveLocale="";this.defaultMessages=void 0}onMessagesChange(){}effectiveLocaleChange(){h.updateMessages(this,this.effectiveLocale)}connectedCallback(){m.connectInteractive(this);r.connectLocalized(this);h.connectMessages(this);this.mutationObserver?.observe(this.el,{childList:!0,
subtree:!0})}async componentWillLoad(){n.setUpLoadableComponent(this);b.Build.isBrowser&&await h.setUpMessages(this)}componentDidLoad(){n.setComponentLoaded(this)}disconnectedCallback(){m.disconnectInteractive(this);r.disconnectLocalized(this);h.disconnectMessages(this);this.mutationObserver?.disconnect()}componentDidRender(){m.updateHostInteraction(this)}async setFocus(){await n.componentFocusable(this);this.buttonEl?.focus()}renderTextContainer(){const {text:a,textEnabled:c}=this,d={["text-container"]:!0,
["text-container--visible"]:c};return a?b.h("div",{class:d,key:"text-container"},a):null}renderIndicatorText(){const {indicator:a,messages:c,indicatorId:d,buttonId:f}=this;return b.h("div",{"aria-labelledby":f,"aria-live":"polite",class:"indicator-text",id:d,role:"region"},a?c.indicator:null)}renderIconContainer(){const {loading:a,icon:c,scale:d,el:f,iconFlipRtl:p}=this;var e="l"===d?"m":"s",g=a?b.h("calcite-loader",{inline:!0,label:this.messages.loading,scale:"l"===d?"l":"m"}):null;e=c?b.h("calcite-icon",
{flipRtl:p,icon:c,scale:e}):null;e=(g=g||e)||f.children?.length;const k=b.h("div",{class:{["slot-container"]:!0,["slot-container--hidden"]:a}},b.h("slot",null));return e?b.h("div",{"aria-hidden":"true",class:"icon-container",key:"icon-container"},g,k):null}render(){const {active:a,compact:c,disabled:d,loading:f,textEnabled:p,label:e,text:g,indicator:k,indicatorId:z,buttonId:A,messages:B}=this,C=`${e||g}${k?` (${B.indicator})`:""}`,D={button:!0,["button--text-visible"]:p,["button--compact"]:c};return b.h(b.Host,
null,b.h("button",{"aria-busy":l.toAriaBoolean(f),"aria-controls":k?z:null,"aria-disabled":l.toAriaBoolean(d),"aria-label":C,"aria-pressed":l.toAriaBoolean(a),class:D,disabled:d,id:A,ref:E=>this.buttonEl=E},this.renderIconContainer(),this.renderTextContainer()),b.h("slot",{name:"tooltip",onSlotchange:this.handleTooltipSlotChange}),this.renderIndicatorText())}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return':host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent;--calcite-action-indicator-color:var(--calcite-ui-brand)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.button{position:relative;margin:0px;display:flex;inline-size:auto;cursor:pointer;align-items:center;justify-content:flex-start;border-style:none;background-color:var(--calcite-ui-foreground-1);fill:var(--calcite-ui-text-3);font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-3);outline-color:transparent;text-align:unset;flex:1 0 auto}.button:hover{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}.button:focus{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.button:active{background-color:var(--calcite-ui-foreground-3)}.button .icon-container{pointer-events:none;margin:0px;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1rem}.button .text-container{margin:0px;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:margin;transition-property:inline-size}.button .text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1;margin-inline-end:1rem}:host([scale\x3ds]) .button{padding-inline:0.5rem;padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale\x3ds]) .button--text-visible .icon-container{margin-inline-end:0.5rem}:host([scale\x3dm]) .button{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale\x3dm]) .button--text-visible .icon-container{margin-inline-end:0.75rem}:host([scale\x3dl]) .button{padding:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal)}:host([scale\x3dl]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment\x3dcenter]) .button{justify-content:center}:host([alignment\x3dend]) .button{justify-content:flex-end}:host([alignment\x3dcenter]) .button .text-container--visible,:host([alignment\x3dend]) .button .text-container--visible{flex:0 1 auto}:host([scale\x3ds][compact]) .button,:host([scale\x3dm][compact]) .button,:host([scale\x3dl][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{background-color:var(--calcite-ui-foreground-3);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}:host([active]) .button:active{background-color:var(--calcite-ui-foreground-1)}:host([appearance\x3dtransparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([appearance\x3dtransparent]) .button:hover,:host([appearance\x3dtransparent]) .button:focus{background-color:transparent;box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset}:host([active][appearance\x3dtransparent]) .button,:host([active][appearance\x3dtransparent]) .button:hover,:host([active][appearance\x3dtransparent]) .button:focus{background-color:var(--calcite-ui-foreground-3);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}:host([appearance\x3dtransparent][loading]) .button,:host([appearance\x3dtransparent][disabled]) .button{background-color:transparent}:host([loading]) .button,:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-ui-foreground-1)}:host([loading]) .button .text-container,:host([loading]) .button:hover .text-container,:host([loading]) .button:focus .text-container{opacity:var(--calcite-ui-opacity-disabled)}:host([loading]) calcite-loader[inline]{color:var(--calcite-ui-text-3);margin-inline-end:0px}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;background-color:var(--calcite-ui-foreground-1);opacity:var(--calcite-ui-opacity-disabled)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{background-color:var(--calcite-ui-foreground-3);opacity:var(--calcite-ui-opacity-disabled)}:host([indicator]) .button::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;border-width:2px;background-color:var(--calcite-action-indicator-color);border-color:var(--calcite-ui-foreground-1);inset-block-end:0.75rem;inset-inline-end:0.75rem}:host([indicator]) .button--text-visible::after{inset-block-end:auto}:host([indicator]) .button:hover::after,:host([indicator]) .button:focus::after{border-color:var(--calcite-ui-foreground-1)}:host([indicator][scale\x3ds]) .button::after{inset-block-end:0.25rem;inset-inline-end:0.25rem}:host([indicator][scale\x3ds]) .button--text-visible::after{inset-block-end:auto;inset-inline-end:0.5rem}:host([indicator][active]) .button::after{border-color:var(--calcite-ui-foreground-3)}.indicator-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}'}},
[1,"calcite-action",{active:[516],alignment:[513],appearance:[513],compact:[516],disabled:[516],icon:[1],iconFlipRtl:[516,"icon-flip-rtl"],indicator:[516],label:[1],loading:[516],scale:[513],text:[1],textEnabled:[516,"text-enabled"],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]}]);t();q.Action=u;q.defineCustomElement=t});