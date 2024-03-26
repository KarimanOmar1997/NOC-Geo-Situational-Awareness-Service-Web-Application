/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import r from"../core/Accessor.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import{g as o,a as c}from"../chunks/locale.js";import"../core/Handles.js";import"../chunks/Logger.js";import"../config.js";import"../core/lang.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/time.js";const a=new Set(["ar","bs","ca","hr","cs","da","nl","en","et","fi","fr","de","el","he","hu","id","it","ja","ko","lv","lt","nb","pl","ro","ru","sr","es","sv","th","tr","uk","vi"]);let i=class extends r{constructor(s){super(s),this.id=null,this.language=null,this.serviceUrl="https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/webmaps"}getLanguageParamValue(){if(this.language)return this.language;const s=o().toLowerCase();switch(s){case"pt-br":return"pt-BR";case"pt-pt":return"pt-PT";case"zh-cn":return"zh-CN";case"zh-hk":return"zh-HK";case"zh-tw":return"zh-TW"}const r=c(s);return"pt"===r?"pt-BR":r&&a.has(r)?r:"global"}};s([t()],i.prototype,"id",void 0),s([t()],i.prototype,"language",void 0),s([t()],i.prototype,"serviceUrl",void 0),i=s([e("esri.support.BasemapStyle")],i);const p=i;export{p as default};
