// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../Graphic ../../../core/Accessor ../../../core/reactiveUtils ../../../core/throttle ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../popup/content/AttachmentsContent ../../../popup/content/Content ../../../popup/content/CustomContent ../../../popup/content/ExpressionContent ../../../popup/content/FieldsContent ../../../popup/content/MediaContent ../../../popup/content/RelationshipContent ../../../popup/content/TextContent ../../../popup/ElementExpressionInfo ../FeatureContent/FeatureContentViewModel ../FeatureFields/FeatureFieldsViewModel ../FeatureMedia/FeatureMediaViewModel ../support/arcadeFeatureUtils".split(" "),
function(c,q,b,g,r,e,D,E,F,t,G,H,I,J,u,v,K,w,x,y,z,A,l){b=class extends b{constructor(f){super(f);this.view=this.interceptor=this.contentElementViewModel=this.contentElement=this.graphic=this.expressionInfo=this._abortController=null;this._cancelQuery=()=>{const {_abortController:a}=this;a&&a.abort();this._abortController=null};this._createVM=()=>{var a=this.contentElement?.type;this.contentElementViewModel?.destroy();a="fields"===a?new z:"media"===a?new A:"text"===a?new y:null;this._set("contentElementViewModel",
a)};this._compile=async()=>{this._cancelQuery();const a=new AbortController;this._abortController=a;await this._compileExpression();this._abortController===a&&(this._abortController=null)};this._compileThrottled=r.throttle(this._compile,1,this);this._compileExpression=async()=>{const {expressionInfo:a,graphic:h,interceptor:B,spatialReference:m,map:n,view:C,_abortController:p}=this;if(a&&h&&m&&n){var d=await l.loadArcadeUtils();if(p===this._abortController)if((d=await l.createCompiledExpression({arcadeUtils:d,
expressionInfo:a,graphic:h,interceptor:B,map:n,spatialReference:m,view:C}))&&"esri.arcade.Dictionary"===d.declaredClass){d=await d.castAsJsonAsync(p?.signal);var k=d?.type;d="media"===k?v.fromJSON(d):"text"===k?w.fromJSON(d):"fields"===k?u.fromJSON(d):null;this._set("contentElement",d)}else this._set("contentElement",null)}else this._set("contentElement",null)};this.addHandles([g.watch(()=>[this.expressionInfo,this.graphic,this.map,this.spatialReference,this.view],()=>this._compileThrottled(),g.initial),
g.watch(()=>[this.contentElement],()=>this._createVM(),g.initial)])}initialize(){this.addHandles(this._compileThrottled)}destroy(){this._cancelQuery();this.contentElementViewModel?.destroy();this._set("contentElementViewModel",null);this._set("contentElement",null)}get spatialReference(){return this.view?.spatialReference??null}set spatialReference(f){this._override("spatialReference",f)}get state(){const {_abortController:f,contentElement:a,contentElementViewModel:h}=this;return f?"loading":a||h?
"ready":"disabled"}get map(){return this.view?.map??null}set map(f){this._override("map",f)}};c.__decorate([e.property()],b.prototype,"_abortController",void 0);c.__decorate([e.property({type:x})],b.prototype,"expressionInfo",void 0);c.__decorate([e.property({type:q})],b.prototype,"graphic",void 0);c.__decorate([e.property({readOnly:!0})],b.prototype,"contentElement",void 0);c.__decorate([e.property({readOnly:!0})],b.prototype,"contentElementViewModel",void 0);c.__decorate([e.property()],b.prototype,
"interceptor",void 0);c.__decorate([e.property()],b.prototype,"spatialReference",null);c.__decorate([e.property({readOnly:!0})],b.prototype,"state",null);c.__decorate([e.property()],b.prototype,"map",null);c.__decorate([e.property()],b.prototype,"view",void 0);return b=c.__decorate([t.subclass("esri.widgets.Feature.FeatureExpression.FeatureExpressionViewModel")],b)});