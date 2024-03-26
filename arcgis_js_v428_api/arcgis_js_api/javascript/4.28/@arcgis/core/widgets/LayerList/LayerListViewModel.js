/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import e from"../../core/Collection.js";import t from"../../core/Evented.js";import{watch as i,initial as r}from"../../core/reactiveUtils.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as a}from"../../core/accessorSupport/decorators/subclass.js";import n from"./ListItem.js";import{e as c,b as l}from"../../chunks/layerListUtils.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/time.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/asyncUtils.js";import"../../core/Identifiable.js";import"../../core/accessorSupport/decorators/cast.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../chunks/ActionSlider.js";import"../../support/actions/ActionToggle.js";import"./ListItemPanel.js";import"../Widget.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/assets.js";import"../../chunks/domUtils.js";import"../../core/Promise.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/dom.js";import"../../chunks/index.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/legacyIcon.js";import"../support/widget.js";import"../../chunks/accessibleHandler.js";import"../../chunks/messageBundle.js";import"../../chunks/vmEvent.js";import"../../chunks/jsxFactory.js";import"../../chunks/themeUtils.js";const m="view-layers",p="map-layers",h="layer-views",d="layer-list-mode",u=e.ofType(n);let j=class extends t.EventedAccessor{constructor(s){super(s),this.checkPublishStatusEnabled=!1,this.listItemCreatedFunction=null,this.operationalItems=new u,this.view=null}initialize(){this.addHandles([i((()=>[this.view,this.view?.ready]),(()=>this._viewHandles()),r),i((()=>[this.listItemCreatedFunction,this.checkPublishStatusEnabled]),(()=>this._recompileList()))],"view")}destroy(){this.view=null,this.operationalItems.removeAll()}get state(){const{view:s}=this;return s?.ready?"ready":s?"loading":"disabled"}triggerAction(s,e){s&&!s.disabled&&this.emit("trigger-action",{action:s,item:e})}moveListItem(s,e,t,i){const r=s?.layer;if(!r)return;const o=this.view?.map?.layers,a=e?c(e):o,n=t?c(t):o;if(!a||!n)return;const{operationalItems:l}=this,m=e?.children||l,p=t?.children||l,h=n.length-i;s.parent=t||null,m.includes(s)&&m.remove(s),a.includes(r)&&a.remove(r),p.includes(s)||p.add(s,h),n.includes(r)||n.add(r,h)}_createLayerViewHandles(s){this.removeHandles(h),this._compileList(),s&&this.addHandles(s.on("change",(()=>this._compileList())),h)}_createMapLayerHandles(s){this.removeHandles(p),this._compileList(),s&&this.addHandles(s.on("change",(()=>this._compileList())),p)}_createListItem(s){const{view:e,listItemCreatedFunction:t,checkPublishStatusEnabled:i}=this;return new n({checkPublishStatusEnabled:i,layer:s,listItemCreatedFunction:t,view:e})}_removeAllItems(){this.operationalItems.removeAll()}_getViewableLayers(s){if(s)return s.filter((s=>"hide"!==l(s)))}_watchLayersListMode(s){this.removeHandles(d),s&&s.forEach((s=>{"listMode"in s&&this.addHandles(i((()=>s.listMode),(()=>this._compileList())),d)}))}_compileList(){const s=this.view?.map?.layers;this._watchLayersListMode(s);const e=this._getViewableLayers(s);e?.length?(this._createNewItems(e),this._removeItems(e),this._sortItems(e)):this._removeAllItems()}_createNewItems(s){const{operationalItems:e}=this;s.forEach((s=>{e.find((e=>e.layer===s))||e.add(this._createListItem(s))}))}_removeItems(s){const{operationalItems:e}=this,t=[];e.forEach((e=>{e&&s&&s.includes(e.layer)||t.push(e)})),e.removeMany(t)}_sortItems(s){const{operationalItems:e}=this;e.sort(((e,t)=>{const i=s.indexOf(e.layer),r=s.indexOf(t.layer);return i>r?-1:i<r?1:0}))}_recompileList(){this._removeAllItems(),this._compileList()}_viewHandles(){const{view:s}=this;this.removeHandles([p,h,m]),this._recompileList(),s&&s.ready&&this.addHandles([i((()=>this.view?.map?.allLayers),(s=>this._createMapLayerHandles(s)),r),i((()=>this.view?.allLayerViews),(s=>this._createLayerViewHandles(s)),r)],m)}};s([o()],j.prototype,"checkPublishStatusEnabled",void 0),s([o()],j.prototype,"listItemCreatedFunction",void 0),s([o({type:u})],j.prototype,"operationalItems",void 0),s([o({readOnly:!0})],j.prototype,"state",null),s([o()],j.prototype,"view",void 0),j=s([a("esri.widgets.LayerList.LayerListViewModel")],j);const y=j;export{y as default};