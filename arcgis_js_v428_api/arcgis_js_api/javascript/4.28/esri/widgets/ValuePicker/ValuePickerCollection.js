// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Collection ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass ../support/widgetUtils ../support/jsxFactory ./ValuePickerBaseComponent".split(" "),function(b,g,d,a,m,n,h,p,k,l){a=class extends l{constructor(c,e){super(c,e);this.collection=null;this.type="collection"}get canNext(){return this.collection?.length&&this.viewModel?this.collection.at(-1)!==
this.viewModel.values?.[0]:!1}get canPlay(){return null!=this.viewModel&&!!this.collection?.length}get canPrevious(){return this.collection?.length&&this.viewModel?this.collection.at(0)!==this.viewModel.values?.[0]:!1}render(){return k.tsx("div",null)}animate(c){this._step(1,c)}next(){this._step(1)}previous(){this._step(-1)}_step(c,e=!1){if(this.viewModel&&this.collection?.length)if(this.viewModel.values)if(this.collection.includes(this.viewModel.values[0])){var f=this.collection.indexOf(this.viewModel.values[0])+
c;0>f||f>=this.collection.length?this.viewModel.loop||e?this.viewModel.values=[this.collection.at(1===c?0:-1)]:"playing"===this.viewModel.state&&this.viewModel.pause():this.viewModel.values=[this.collection.at(f)]}else this.viewModel.values=[this.collection.at(0)];else this.viewModel.values=[this.collection.at(0)]}};b.__decorate([d.property()],a.prototype,"canNext",null);b.__decorate([d.property()],a.prototype,"canPlay",null);b.__decorate([d.property()],a.prototype,"canPrevious",null);b.__decorate([d.property({type:g})],
a.prototype,"collection",void 0);b.__decorate([d.property()],a.prototype,"type",void 0);return a=b.__decorate([h.subclass("esri.widgets.ValuePicker.ValuePickerCollection")],a)});