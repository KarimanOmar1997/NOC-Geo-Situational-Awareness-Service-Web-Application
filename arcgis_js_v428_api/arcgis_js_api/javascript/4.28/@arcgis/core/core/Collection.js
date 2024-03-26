/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{A as t}from"./Accessor.js";import s from"./Evented.js";import{m as i}from"../chunks/handleUtils.js";import{clone as r}from"./lang.js";import{O as n}from"../chunks/ObjectPool.js";import{schedule as h}from"./scheduling.js";import{j as o,a as l}from"../chunks/ensureType.js";import{t as a}from"../chunks/tracking.js";import{property as c}from"./accessorSupport/decorators/property.js";import{s as f}from"../chunks/shared.js";import{subclass as m}from"./accessorSupport/decorators/subclass.js";import{S as _}from"../chunks/SimpleObservable.js";import"../chunks/typedArrayUtil.js";import"./Handles.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/ObservableBase.js";import"./Error.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"./promiseUtils.js";import"../chunks/time.js";var u,g;!function(e){e[e.ADD=1]="ADD",e[e.REMOVE=2]="REMOVE",e[e.MOVE=4]="MOVE"}(u||(u={}));class d{constructor(e,t,s,i,r){this.target=e,this.added=t,this.removed=s,this.start=i,this.deleteCount=r}}const p=new n(class{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(e){this.defaultPrevented=!1,this.item=e}},void 0,(e=>{e.item=null,e.target=null,e.defaultPrevented=!1,e.cancellable=!1}));function b(e){return e?e instanceof D?e.toArray():e.length?Array.prototype.slice.apply(e):[]:[]}function v(e){if(e?.length)return e[0]}function E(e,t,s,i){const r=Math.min(e.length-s,t.length-i);let n=0;for(;n<r&&e[s+n]===t[i+n];)n++;return n}function A(e,t,s,i){t&&t.forEach(((t,r,n)=>{e.push(t),A(e,s.call(i,t,r,n),s,i)}))}const y=new Set,C=new Set,O=new Set,j=new Map;let M=0,D=g=class extends s.EventedAccessor{static isCollection(e){return null!=e&&e instanceof g}constructor(e){super(e),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new _,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:M++})}normalizeCtorArgs(e){return e?Array.isArray(e)||e instanceof g?{items:e}:e:{}}destroy(){this._removeAllRaw()}*[Symbol.iterator](){yield*this.items}get items(){return a(this._observable),this._items}set items(e){this._emitBeforeChanges(u.ADD)||(this._splice(0,this.length,b(e)),this._emitAfterChanges(u.ADD))}hasEventListener(e){return"change"===e?this._chgListeners.length>0:this._emitter.hasEventListener(e)}on(e,t){if("change"===e){const e=this._chgListeners,s={removed:!1,callback:t};return e.push(s),this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]}),i((()=>{s.removed=!0,e.splice(e.indexOf(s),1)}))}return this._emitter.on(e,t)}once(e,t){const s="deref"in t?()=>t.deref():()=>t,i=this.on(e,(e=>{s()?.call(null,e),i.remove()}));return i}add(e,t){if(a(this._observable),this._emitBeforeChanges(u.ADD))return this;const s=this.getNextIndex(t??null);return this._splice(s,0,[e]),this._emitAfterChanges(u.ADD),this}addMany(e,t=this._items.length){if(a(this._observable),!e?.length)return this;if(this._emitBeforeChanges(u.ADD))return this;const s=this.getNextIndex(t);return this._splice(s,0,b(e)),this._emitAfterChanges(u.ADD),this}at(e){if(a(this._observable),(e=Math.trunc(e)||0)<0&&(e+=this.length),!(e<0||e>=this.length))return this._items[e]}removeAll(){if(a(this._observable),!this.length||this._emitBeforeChanges(u.REMOVE))return[];const e=this._removeAllRaw();return this._emitAfterChanges(u.REMOVE),e}_removeAllRaw(){return 0===this.length?[]:this._splice(0,this.length)||[]}clone(){return a(this._observable),this._createNewInstance({items:this._items.map(r)})}concat(...e){a(this._observable);const t=e.map(b);return this._createNewInstance({items:this._items.concat(...t)})}drain(e,t){if(a(this._observable),!this.length||this._emitBeforeChanges(u.REMOVE))return;const s=this._splice(0,this.length),i=s.length;for(let r=0;r<i;r++)e.call(t,s[r],r,s);this._emitAfterChanges(u.REMOVE)}every(e,t){return a(this._observable),this._items.every(e,t)}filter(e,t){let s;return a(this._observable),s=2===arguments.length?this._items.filter(e,t):this._items.filter(e),this._createNewInstance({items:s})}find(e,t){return a(this._observable),this._items.find(e,t)}findIndex(e,t){return a(this._observable),this._items.findIndex(e,t)}flatten(e,t){a(this._observable);const s=[];return A(s,this,e,t),new g(s)}forEach(e,t){return a(this._observable),this._items.forEach(e,t)}getItemAt(e){return a(this._observable),this._items[e]}getNextIndex(e){a(this._observable);const t=this.length;return(e=e??t)<0?e=0:e>t&&(e=t),e}includes(e,t=0){return a(this._observable),this._items.includes(e,t)}indexOf(e,t=0){return a(this._observable),this._items.indexOf(e,t)}join(e=","){return a(this._observable),this._items.join(e)}lastIndexOf(e,t=this.length-1){return a(this._observable),this._items.lastIndexOf(e,t)}map(e,t){a(this._observable);const s=this._items.map(e,t);return new g({items:s})}reorder(e,t=this.length-1){a(this._observable);const s=this.indexOf(e);if(-1!==s){if(t<0?t=0:t>=this.length&&(t=this.length-1),s!==t){if(this._emitBeforeChanges(u.MOVE))return e;this._splice(s,1),this._splice(t,0,[e]),this._emitAfterChanges(u.MOVE)}return e}}pop(){if(a(this._observable),!this.length||this._emitBeforeChanges(u.REMOVE))return;const e=v(this._splice(this.length-1,1));return this._emitAfterChanges(u.REMOVE),e}push(...e){return a(this._observable),this._emitBeforeChanges(u.ADD)||(this._splice(this.length,0,e),this._emitAfterChanges(u.ADD)),this.length}reduce(e,t){a(this._observable);const s=this._items;return 2===arguments.length?s.reduce(e,t):s.reduce(e)}reduceRight(e,t){a(this._observable);const s=this._items;return 2===arguments.length?s.reduceRight(e,t):s.reduceRight(e)}remove(e){return a(this._observable),this.removeAt(this.indexOf(e))}removeAt(e){if(a(this._observable),e<0||e>=this.length||this._emitBeforeChanges(u.REMOVE))return;const t=v(this._splice(e,1));return this._emitAfterChanges(u.REMOVE),t}removeMany(e){if(a(this._observable),!e?.length||this._emitBeforeChanges(u.REMOVE))return[];const t=e instanceof g?e.toArray():e,s=this._items,i=[],r=t.length;for(let e=0;e<r;e++){const r=t[e],n=s.indexOf(r);if(n>-1){const r=1+E(t,s,e+1,n+1),h=this._splice(n,r);h&&h.length>0&&i.push.apply(i,h),e+=r-1}}return this._emitAfterChanges(u.REMOVE),i}reverse(){if(a(this._observable),this._emitBeforeChanges(u.MOVE))return this;const e=this._splice(0,this.length);return e&&(e.reverse(),this._splice(0,0,e)),this._emitAfterChanges(u.MOVE),this}shift(){if(a(this._observable),!this.length||this._emitBeforeChanges(u.REMOVE))return;const e=v(this._splice(0,1));return this._emitAfterChanges(u.REMOVE),e}slice(e=0,t=this.length){return a(this._observable),this._createNewInstance({items:this._items.slice(e,t)})}some(e,t){return a(this._observable),this._items.some(e,t)}sort(e){if(a(this._observable),!this.length||this._emitBeforeChanges(u.MOVE))return this;const t=this._splice(0,this.length);return arguments.length?t.sort(e):t.sort(),this._splice(0,0,t),this._emitAfterChanges(u.MOVE),this}splice(e,t,...s){a(this._observable);const i=(t?u.REMOVE:0)|(s.length?u.ADD:0);if(this._emitBeforeChanges(i))return[];const r=this._splice(e,t,s)||[];return this._emitAfterChanges(i),r}toArray(){return a(this._observable),this._items.slice()}toJSON(){return a(this._observable),this.toArray()}toLocaleString(){return a(this._observable),this._items.toLocaleString()}toString(){return a(this._observable),this._items.toString()}unshift(...e){return a(this._observable),!e.length||this._emitBeforeChanges(u.ADD)||(this._splice(0,0,e),this._emitAfterChanges(u.ADD)),this.length}_createNewInstance(e){return new this.constructor(e)}_splice(e,t,s){const i=this._items,r=this.itemType;let n,o;if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=h((()=>this._dispatchChange()))),e<0&&(e+=this.length),t){if(o=i.splice(e,t),this.hasEventListener("before-remove")){const t=p.acquire();t.target=this,t.cancellable=!0;for(let s=0,r=o.length;s<r;s++)n=o[s],t.reset(n),this.emit("before-remove",t),t.defaultPrevented&&(o.splice(s,1),i.splice(e,0,n),e+=1,s-=1,r-=1);p.release(t)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const e=p.acquire();e.target=this,e.cancellable=!1;const t=o.length;for(let s=0;s<t;s++)e.reset(o[s]),this.emit("after-remove",e);p.release(e)}}if(s?.length){if(r){const e=[];for(const t of s){const s=r.ensureType(t);null==s&&null!=t||e.push(s)}s=e}const t=this.hasEventListener("before-add"),n=this.hasEventListener("after-add"),h=e===this.length;if(t||n){const r=p.acquire();r.target=this,r.cancellable=!0;const o=p.acquire();o.target=this,o.cancellable=!1;for(const l of s)t?(r.reset(l),this.emit("before-add",r),r.defaultPrevented||(h?i.push(l):i.splice(e++,0,l),this._set("length",i.length),n&&(o.reset(l),this.emit("after-add",o)))):(h?i.push(l):i.splice(e++,0,l),this._set("length",i.length),o.reset(l),this.emit("after-add",o));p.release(o),p.release(r)}else{if(h)for(const e of s)i.push(e);else i.splice(e,0,...s);this._set("length",i.length)}}if((s?.length||o?.length)&&this._notifyChangeEvent(s,o),this.hasEventListener("after-splice")){const i=new d(this,s,o,e,t);this.emit("after-splice",i)}return o}_emitBeforeChanges(e){let t=!1;if(this.hasEventListener("before-changes")){const s=p.acquire();s.target=this,s.cancellable=!0,s.type=e,this.emit("before-changes",s),t=s.defaultPrevented,p.release(s)}return t}_emitAfterChanges(e){if(this.hasEventListener("after-changes")){const t=p.acquire();t.target=this,t.cancellable=!1,t.type=e,this.emit("after-changes",t),p.release(t)}this._observable.notify()}_notifyChangeEvent(e,t){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:e,removed:t})}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return;const e=this._notifications;this._notifications=null;for(const s of e){const e=s.changes;y.clear(),C.clear(),O.clear();for(const{added:t,removed:s}of e){if(t)if(0===O.size&&0===C.size)for(const e of t)y.add(e);else for(const e of t)C.has(e)?(O.add(e),C.delete(e)):O.has(e)||y.add(e);if(s)if(0===O.size&&0===y.size)for(const e of s)C.add(e);else for(const e of s)y.has(e)?y.delete(e):(O.delete(e),C.add(e))}const i=t.acquire();y.forEach((e=>{i.push(e)}));const r=t.acquire();C.forEach((e=>{r.push(e)}));const n=this._items,h=s.items,o=t.acquire();if(O.forEach((e=>{h.indexOf(e)!==n.indexOf(e)&&o.push(e)})),s.listeners&&(i.length||r.length||o.length)){const e={target:this,added:i,removed:r,moved:o},t=s.listeners.length;for(let i=0;i<t;i++){const t=s.listeners[i];t.removed||t.callback.call(this,e)}}t.release(i),t.release(r),t.release(o)}y.clear(),C.clear(),O.clear()}};D.ofType=t=>{if(!t)return g;if(j.has(t))return j.get(t);let s=null;if("function"==typeof t)s=t.prototype.declaredClass;else if(t.base)s=t.base.prototype.declaredClass;else for(const e in t.typeMap){const i=t.typeMap[e].prototype.declaredClass;s?s+=` | ${i}`:s=i}let i=class extends g{};return e([f({Type:t,ensureType:"function"==typeof t?o(t):l(t)})],i.prototype,"itemType",void 0),i=e([m(`esri.core.Collection<${s}>`)],i),j.set(t,i),i},e([c()],D.prototype,"length",void 0),e([c()],D.prototype,"items",null),D=g=e([m("esri.core.Collection")],D);const V=D;export{u as O,V as default};