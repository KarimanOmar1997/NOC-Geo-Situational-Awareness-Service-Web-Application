/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../core/Accessor.js";import i from"../../core/Error.js";import{L as s}from"../../chunks/Logger.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../core/lang.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../config.js";import"../../chunks/time.js";let o=class extends e{constructor(t){super(t),this.precision=4,this.thumbsConstrained=!0}set effectiveMax(t){this.setEffectiveMax(t)}set effectiveMin(t){this.setEffectiveMin(t)}set labelFormatFunction(t){this._set("labelFormatFunction",t)}set inputFormatFunction(t){this._set("inputFormatFunction",t)}set inputParseFunction(t){this._set("inputParseFunction",t)}get labels(){const{max:t,min:e,values:i}=this,s=i?.length?i.map(((t,e)=>this.getLabelForValue(t,"value",e))):[];return{max:this.getLabelForValue(t,"max"),min:this.getLabelForValue(e,"min"),values:s}}set max(t){this.setMax(t)}set min(t){this.setMin(t)}get state(){const{max:t,min:e}=this;return null!=t&&null!=e&&t>e?"ready":"disabled"}set values(t){const{max:e,min:i}=this,s=this.values;s&&t&&s.length===t.length&&s.every(((e,i)=>e===t[i]))||(this._set("values",null),t?.length&&(null!=i&&t.some((t=>t<i))&&(this.min=Math.min(...t)),null!=e&&t.some((t=>t>e))&&(this.max=Math.max(...t))),this._set("values",t))}toPrecision(t){return parseFloat(t.toFixed(this.precision))}defaultLabelFormatFunction(t){const{max:e,min:i,precision:s}=this,r=null!=e&&null!=i&&e-i>10?2:s;return parseFloat(t.toFixed(r)).toString()}defaultInputFormatFunction(t){return t.toString()}defaultInputParseFunction(t){return parseFloat(t)}getBounds(){const{effectiveMax:t,effectiveMin:e,max:i,min:s}=this;return{min:null!=e&&null!=s?Math.max(s,e):s,max:null!=t&&null!=i?Math.min(i,t):i}}getBoundsForValueAtIndex(t){const{thumbsConstrained:e,values:i}=this,{min:s,max:r}=this.getBounds();if(e&&i){const e=t-1,n=t+1;return{min:null!=i[e]?i[e]:s,max:null!=i[n]?i[n]:r}}return{min:s,max:r}}getLabelForValue(t,e,i){return null==t?null:this.labelFormatFunction?this.labelFormatFunction(t,e,i):this.defaultLabelFormatFunction(t)}setMax(t){const{max:e,values:i}=this;if(null==t)return void this._set("max",null);if(isNaN(t))return void this._logError("slider:invalid-value","Supplied value for property 'max' is NaN.");const s=this.toPrecision(t);if(e!==s&&(this._set("max",s),i?.length))for(let t=0;t<i.length;t++)s<i[t]&&this.setValue(t,s)}setMin(t){const{min:e,values:i}=this;if(null==t)return void this._set("min",null);if(isNaN(t))return void this._logError("slider:invalid-value","Supplied value for property 'min' is NaN.");const s=this.toPrecision(t);if(e!==s&&(this._set("min",s),i?.length))for(let t=0;t<i.length;t++)s>i[t]&&this.setValue(t,s)}setEffectiveMax(t){if(null==t)return void this._set("effectiveMax",null);if(isNaN(t))return void this._logError("slider:invalid-value","Supplied value for property 'effectiveMax' is NaN.");const e=this.toPrecision(t);this.effectiveMax!==e&&this._set("effectiveMax",this._applyBoundsToValue(e))}setEffectiveMin(t){if(null==t)return void this._set("effectiveMin",null);if(isNaN(t))return void this._logError("slider:invalid-value","Supplied value for property 'effectiveMin' is NaN.");const e=this.toPrecision(t);this.effectiveMin!==e&&this._set("effectiveMin",this._applyBoundsToValue(e))}setValue(t,e){if(isNaN(e))return void this._logError("slider:invalid-value","Supplied value for member of property 'values' is NaN.");const{values:i}=this;if(null==i)return void this._logError("slider:invalid-value","Supplied value for member of property 'values' is null.");const s=i[t],r=this.toPrecision(e);if(s===r)return;const n=[...i];n[t]=r,this._set("values",n),this.notifyChange("labels")}_applyBoundsToValue(t){const{max:e,min:i}=this;return null!=i&&t<i?i:null!=e&&t>e?e:t}_logError(t,e,r){s.getLogger(this).error(new i(t,e,r))}};t([r()],o.prototype,"effectiveMax",null),t([r()],o.prototype,"effectiveMin",null),t([r()],o.prototype,"labelFormatFunction",null),t([r()],o.prototype,"inputFormatFunction",null),t([r()],o.prototype,"inputParseFunction",null),t([r({readOnly:!0})],o.prototype,"labels",null),t([r()],o.prototype,"max",null),t([r()],o.prototype,"min",null),t([r()],o.prototype,"precision",void 0),t([r({readOnly:!0})],o.prototype,"state",null),t([r()],o.prototype,"thumbsConstrained",void 0),t([r()],o.prototype,"values",null),o=t([n("esri.widgets.Slider.SliderViewModel")],o);const l=o;export{l as default};
