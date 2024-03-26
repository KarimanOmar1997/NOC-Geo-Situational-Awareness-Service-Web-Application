/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import o,{O as t}from"./Accessor.js";import"../chunks/typedArrayUtil.js";import{tryClone as r}from"./lang.js";import"../chunks/Logger.js";import{b as e}from"../chunks/maybe.js";import{g as n}from"../chunks/utils.js";import{subclass as c}from"./accessorSupport/decorators/subclass.js";import"./Handles.js";import"./accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/metadata.js";import"./Error.js";import"../config.js";import"../chunks/handleUtils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"./scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"./promiseUtils.js";import"../chunks/time.js";const i=o=>{let i=class extends o{clone(){const s=n(this);e(s,"unable to clone instance of non-accessor class");const o=s.metadatas,c=s.store,i={},p=new Map;for(const s in o){const e=o[s],n=c?.originOf(s),a=e.clonable;if(e.readOnly||!1===a||n!==t.USER&&n!==t.DEFAULTS&&n!==t.WEB_MAP&&n!==t.WEB_SCENE)continue;const l=this[s];let m=null;m="function"==typeof a?a(l):"reference"===a?l:r(l),null!=l&&null==m||(n===t.DEFAULTS?p.set(s,m):i[s]=m)}const a=new(0,Object.getPrototypeOf(this).constructor)(i);if(p.size){const s=n(a)?.store;if(s)for(const[o,r]of p)s.set(o,r,t.DEFAULTS)}return a}};return i=s([c("esri.core.Clonable")],i),i};let p=class extends(i(o)){};p=s([c("esri.core.Clonable")],p);export{p as Clonable,i as ClonableMixin};
