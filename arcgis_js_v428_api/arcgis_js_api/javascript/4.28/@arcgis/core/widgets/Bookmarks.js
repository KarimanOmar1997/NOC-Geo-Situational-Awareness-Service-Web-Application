/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{i as e}from"../chunks/typedArrayUtil.js";import{e as o}from"../core/promiseUtils.js";import{watch as s,initial as i,on as r}from"../core/reactiveUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import{cast as n}from"../core/accessorSupport/decorators/cast.js";import{subclass as d}from"../core/accessorSupport/decorators/subclass.js";import{f as l,c as m}from"../chunks/date.js";import{s as u}from"../chunks/timeZoneUtils.js";import{S as k}from"../chunks/SlideThumbnail.js";import h,{l as c}from"./Widget.js";import p from"../core/Accessor.js";import"../chunks/ensureType.js";import b from"./Bookmarks/BookmarksViewModel.js";import{l as _}from"../chunks/legacyIcon.js";import g from"./FeatureTable/Grid/support/ButtonMenu.js";import B from"./FeatureTable/Grid/support/ButtonMenuItem.js";import{g as v}from"../chunks/globalCss.js";import{H as f}from"../chunks/Heading.js";import{m as E}from"../chunks/widgetUtils.js";import{m as I}from"../chunks/messageBundle.js";import{v as y}from"../chunks/vmEvent.js";import{t as j}from"../chunks/jsxFactory.js";import{S}from"../chunks/sortable.esm.js";import"../chunks/handleUtils.js";import"../core/Error.js";import"../core/lang.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/maybe.js";import"../chunks/asyncUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"../core/Handles.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../chunks/time.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/datetime.js";import"../core/JSONSupport.js";import"../intl.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../chunks/projector.js";import"../chunks/dom.js";import"../chunks/index.js";import"../chunks/jsxWidgetSupport.js";import"../Viewpoint.js";import"../Camera.js";import"../core/Clonable.js";import"../chunks/Cyclical.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../webmap/Bookmark.js";import"../TimeExtent.js";import"../chunks/timeUtils.js";import"../core/Identifiable.js";import"./support/GoTo.js";import"./FeatureTable/Grid/support/ButtonMenuViewModel.js";let w=class extends p{constructor(t){super(t)}get editedBookmark(){const{bookmark:t}=this;return t?this._get("editedBookmark")||t.clone():null}get state(){return this._get("state")}set state(t){this.validationState=void 0,this.loading=void 0,this._set("state",t)}};t([a()],w.prototype,"bookmark",void 0),t([a({readOnly:!0})],w.prototype,"editedBookmark",null),t([a()],w.prototype,"state",null),t([a()],w.prototype,"validationState",void 0),t([a()],w.prototype,"loading",void 0),w=t([d("esri.widgets.Bookmarks.UserState")],w);const T=w,x="esri-bookmarks",A=`${x}__authoring`,U=`${x}__bookmark`,C=`${x}__time-extent`,M={base:x,widgetIcon:_.bookmark,loaderContainer:`${x}__loader-container`,loader:`${x}__loader`,fadeIn:`${x}--fade-in`,bookmarkList:`${x}__list`,bookmarkListSortable:`${x}__list--sortable`,bookmark:U,bookmarkButton:`${U}-button`,bookmarkImageContainer:`${U}-image-container`,bookmarkImageContainerHasImage:`${U}-image-container--has-image`,bookmarkEditButtonContainer:`${U}-edit-button-container`,bookmarkEditButton:`${U}-edit-button`,bookmarkDragHandle:`${x}_bookmark-drag-handle`,bookmarkDragHandleIcon:`${x}_bookmark-drag-handle-icon`,bookmarkIcon:`${U}-icon`,bookmarkImage:`${x}__image`,bookmarkLabel:`${U}-label`,bookmarkName:`${U}-name`,bookmarkTimeExtent:`${U}-time-extent`,bookmarkActive:`${U}--active`,noBookmarksHeader:`${x}__no-bookmarks-heading`,noBookmarksDescription:`${x}__no-bookmarks-description`,addingBookmark:`${x}__adding-bookmark`,addBookmark:`${x}__add-bookmark`,addBookmarkButton:`${x}__add-bookmark-button`,addBookmarkIcon:`${x}__add-bookmark-icon`,authoringCard:`${A}-card`,authoringContainer:`${A}-container`,authoringForm:`${A}-form`,authoringFormAdding:`${A}-form--adding`,authoringLabel:`${A}-label`,authoringLabelStartPadding:`${A}-label--start-padding`,authoringActions:`${A}-actions`,authoringInputInvalid:`${A}-input--invalid`,authoringDeleteButton:`${A}-delete-button`,authoringCancelButton:`${A}-cancel-button`,timeExtentContainer:`${C}-container`,timeExtent:C,timeExtentGroup:`${C}-group`,timeExtentDate:`${C}-date`,timeExtentTime:`${C}-time`},$="data-bookmark-uid",N={addBookmark:!0,thumbnail:!0,time:!0},H=/^https:\/\/.*/i;let D=class extends h{constructor(t,e){super(t,e),this._tooltipReferenceMap=new Map,this._addInputNode=null,this._editInputNode=null,this._urlEditInputNode=null,this._addBookmarkButtonNode=null,this._focusAddBookmarkButton=!1,this._focusEditInputBox=!1,this._focusAddInputBox=!1,this._focusUrlEditInputBox=!1,this._sortable=null,this._sortableNode=null,this._focusSortUid=null,this._selectedSortUid=null,this._sortableSavedItems=[],this._editIncludeTimeExtent=void 0,this._userState=null,this.disabled=!1,this.editingEnabled=!1,this.headingLevel=2,this.iconClass=M.widgetIcon,this.icon=null,this.messages=null,this.messagesCommon=null,this.viewModel=new b,this.visibleElements={...N}}initialize(){this.addHandles([s((()=>this.viewModel?.bookmarks),(()=>this._bookmarksInitialized()),i),s((()=>this.editingEnabled),(()=>this._toggleSorting()),i)])}destroy(){this._destroySortable(),this._editMenu.destroy(),this._tooltipReferenceMap.clear()}loadDependencies(){return c({label:()=>import("../chunks/calcite-label.js"),switch:()=>import("../chunks/calcite-switch.js"),tooltip:()=>import("../chunks/calcite-tooltip.js")})}get _editMenuItems(){const{messages:t,_userState:o}=this,s=o?.editedBookmark?.thumbnail?.url;return[new B({label:t?.menu.refreshThumbnail,iconClass:_.refresh,clickFunction:()=>this._refreshThumbnail()}),new B({label:s&&H.test(s)?t?.menu.editImageUrl:t?.menu.useImageUrl,iconClass:_.link,clickFunction:()=>this._startUseImageUrl()}),s?new B({label:t?.menu.removeThumbnail,iconClass:_.erase,clickFunction:()=>this._removeThumbnail()}):null].filter(e)}get _editMenu(){const{_editMenuItems:t,messages:e,disabled:o}=this,s=this._get("_editMenu");s&&s.destroy();const i=new g({disabled:o,iconClass:_.handleHorizontal,label:e?.menu.label});return i.items=t,i}get defaultCreateOptions(){return this.viewModel.defaultCreateOptions}set defaultCreateOptions(t){this.viewModel.defaultCreateOptions=t}get defaultEditOptions(){return this.viewModel.defaultEditOptions}set defaultEditOptions(t){this.viewModel.defaultEditOptions=t}get bookmarks(){return this.viewModel.bookmarks}set bookmarks(t){this.viewModel.bookmarks=t}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(t){this.viewModel.goToOverride=t}get label(){return this.messages?.widgetLabel??""}set label(t){this._overrideIfSome("label",t)}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}castVisibleElements(t){return{...N,...t}}endAddBookmark(){this._userState=null}goTo(t){return this.viewModel.goTo(t)}render(){const{state:t}=this.viewModel,e="loading"===t?this._renderLoading():this._renderBookmarks();return j("div",{class:this.classes(M.base,v.widget,v.panel,{[v.widgetDisabled]:this.disabled})},e)}startAddBookmark(){this._userState=new T({state:"add"}),this._focusAddInputBox=!0,this.scheduleRender()}_renderBookmarkTooltips(t){return t.toArray().map((t=>this._renderBookmarkTooltip(t)))??[]}_renderBookmarkTooltip(t){const{_tooltipReferenceMap:e,messagesCommon:o}=this,s=this._getBookmarkTitle(t),i=`${o?.dragHandleTitle} ${s}`;return t?j("calcite-tooltip",{key:`tooltip-${t.uid}`,referenceElement:e.get(t.uid)},i):null}_renderLoading(){return j("div",{class:M.loaderContainer,key:"loader",tabIndex:this.disabled?-1:void 0},j("div",{class:M.loader}))}_renderNoBookmarksContainer(){const{messages:t,disabled:e}=this;return j("div",{class:v.empty,key:"no-bookmarks",tabIndex:e?-1:void 0},j("span",{"aria-hidden":"true",class:this.classes(v.noBookmarksIcon,M.widgetIcon)}),j(f,{class:this.classes(v.heading,M.noBookmarksHeader),level:this.headingLevel},t?.noBookmarksHeading),j("p",{class:M.noBookmarksDescription},t?.noBookmarksDescription))}_renderAddBookmarkLoading(){return j("div",{class:M.addingBookmark,key:"adding-bookmark"},j("span",{"aria-hidden":"true",class:this.classes(_.loadingIndicator,v.rotating)}),this.messages?.addingBookmark)}_renderBookmarkItems(t){if(!t)return[];const{_userState:e,editingEnabled:o}=this;return t.map((t=>o&&t&&e&&("edit"===e.state||"edit-thumbnail"===e.state)&&e.bookmark===t?"edit-thumbnail"===e.state?this._renderEditingBookmarkUrl(e.editedBookmark):this._renderEditingBookmark(e.editedBookmark):this._renderBookmark(t))).toArray()}_renderBookmarksContainer(t){const{_userState:e,editingEnabled:o,disabled:s,view:i}=this,r="add"===e?.state,a=i&&o&&!r?this._renderAddBookmarkButton():null,n=o?r&&e.loading?this._renderAddBookmarkLoading():"add"===e?.state?this._renderAddingBookmark():null:null;return[j("ul",{afterCreate:this._sortNodeCreated,afterRemoved:this._destroySortable,"aria-label":this.messages?.widgetLabel,bind:this,class:this.classes(M.bookmarkList,{[M.bookmarkListSortable]:this.editingEnabled}),"data-node-ref":"_sortableNode",key:"bookmark-list",tabIndex:s?-1:void 0},this._renderBookmarkItems(t)),a,n]}_renderAddBookmarkButton(){return this.visibleElements.addBookmark?j("div",{class:M.addBookmark,key:"add-bookmark-item"},j("button",{afterCreate:this._storeAddBookmarkButton,afterUpdate:this._storeAddBookmarkButton,bind:this,class:this.classes(v.button,v.buttonTertiary,M.addBookmarkButton),"data-node-ref":"_addBookmarkButtonNode",disabled:this.disabled,onclick:this.startAddBookmark,type:"button"},j("span",{"aria-hidden":"true",class:this.classes(M.addBookmarkIcon,_.plus)}),this.messages?.addBookmark)):null}_renderBookmarks(){const{bookmarks:t}=this.viewModel,e=t&&t.filter(Boolean),o=e&&e.length,s=o||this.editingEnabled?this._renderBookmarksContainer(e):null;return[o?null:this._renderNoBookmarksContainer(),s,this._renderBookmarkTooltips(t)]}_renderEditContainer(t){const{messagesCommon:e,disabled:o}=this,s=this._getBookmarkTitle(t);return j("div",{class:M.bookmarkEditButtonContainer,key:"edit-container"},j("button",{"aria-label":`${e?.edit} ${s}`,bind:this,class:M.bookmarkEditButton,"data-bookmark":t,disabled:o,onclick:this._showEditBookmarkForm,title:`${e?.edit} ${s}`,type:"button"},j("span",{"aria-hidden":"true",class:_.edit})))}_renderDragHandle(t){const{messagesCommon:e,disabled:o}=this,s=this._getBookmarkTitle(t),i={[$]:t.uid};return j("div",{afterCreate:this._focusDragHandle,afterUpdate:this._focusDragHandle,"aria-label":`${e?.dragHandleTitle} ${s}`,"aria-pressed":this._selectedSortUid===t.uid?"true":"false",bind:this,class:M.bookmarkDragHandle,"data-bookmark":t,key:"drag-handle",onblur:this._dragHandleBlur,onkeydown:this._dragHandleKeydown,role:"button",tabIndex:o?-1:0,...i},j("span",{"aria-hidden":"true",class:this.classes(M.bookmarkDragHandleIcon,_.handleVertical)}))}_renderBookmarkImageIcon(){return j("span",{"aria-hidden":"true",class:this.classes(M.bookmarkIcon,M.widgetIcon)})}_renderBookmarkImage(t){const{visibleElements:e}=this,{thumbnail:o}=t,s=o?.url||"";return e.thumbnail&&s?j("img",{alt:"",class:M.bookmarkImage,src:s}):null}_renderBookmarkTimeSwitch(t){const{messages:e,disabled:o}=this,{timeExtent:s}=t,{view:i}=this.viewModel;return i?.timeExtent??s?j("calcite-label",{layout:"inline-space-between"},e?.includeTimeExtent,j("calcite-switch",{checked:!!s,disabled:o,scale:"s",onCalciteSwitchChange:t=>{this._editIncludeTimeExtent=!!t.target.checked}})):null}_renderBookmarkTimeExtent(t){const{visibleElements:e}=this,{timeExtent:o}=t;return o?j("span",{class:M.timeExtent},[null!=o.start&&j("span",{class:M.timeExtentGroup,key:"start-date-group"},j("span",{class:M.timeExtentDate,key:"start-date"},this._formatDate(o.start)),e.time?j("span",{class:M.timeExtentTime,key:"start-time"},this._formatTime(o.start)):null),null!=o.end&&(null==o.start||o.start.getTime()!==o.end.getTime())&&j("span",{class:M.timeExtentGroup,key:"end-date-group"},j("span",{class:M.timeExtentDate,key:"end-date"},this._formatDate(o.end)),e.time?j("span",{class:M.timeExtentTime,key:"end-time"},this._formatTime(o.end)):null)]):null}_renderBookmarkButton(t){const{disabled:e}=this,{timeExtent:o}=t,{capabilities:s}=this.viewModel,i=this._getBookmarkTitle(t),{thumbnail:r}=t,a=j("div",{class:this.classes(M.bookmarkImageContainer,r?.url?M.bookmarkImageContainerHasImage:null)},this._renderBookmarkImage(t)||this._renderBookmarkImageIcon()),n=s.time&&o?j("span",{class:M.bookmarkTimeExtent,key:"time-extent"},this._renderBookmarkTimeExtent(t)):null;return j("button",{bind:this,class:M.bookmarkButton,"data-bookmark":t,disabled:e,key:"bookmark-button",onclick:this._goToBookmark,type:"button"},a,j("div",{class:M.bookmarkLabel},j("span",{class:M.bookmarkName,key:"bookmark-title"},i),n))}_renderBookmark(t){const{activeBookmark:e}=this.viewModel,o={[M.bookmarkActive]:e===t},s=this.editingEnabled?this._renderEditContainer(t):null,i={[$]:t.uid},r=this.editingEnabled?this._renderDragHandle(t):null;return j("li",{class:this.classes(M.bookmark,o),key:t,...i},r,this._renderBookmarkButton(t),s)}_renderEditingBookmarkName(t){const{messages:e,_userState:o,disabled:s}=this,i="name-required"===o?.validationState;return j("label",{class:this.classes({[M.authoringLabel]:!0,[M.authoringLabelStartPadding]:!!this.visibleElements?.thumbnail})},e?.title,i?j("strong",null,e?.invalidTitle):null,j("input",{afterCreate:this._storeEditInput,afterUpdate:this._focusEditInput,bind:this,class:this.classes(v.input,i?M.authoringInputInvalid:null),"data-bookmark":t,"data-node-ref":"_editInputNode",disabled:s,placeholder:e?.titlePlaceholder,required:!0,type:"text",value:t.name}))}_renderEditingBookmarkUrlActions(){const{messagesCommon:t,disabled:e}=this;return j("div",{class:M.authoringActions},j("input",{bind:this,class:this.classes(v.button,v.buttonTertiary),disabled:e,onclick:this._closeUrlEditBookmarkForm,type:"button",value:t?.back}),j("input",{class:v.button,disabled:e,type:"submit",value:t?.add}))}_renderEditingBookmarkActions(){const{messagesCommon:t,disabled:e}=this,o=this._userState?.bookmark;return j("div",{class:M.authoringActions},j("input",{bind:this,class:this.classes(v.button,v.buttonTertiary,M.authoringDeleteButton),"data-bookmark":o,disabled:e,onclick:this._deleteBookmark,type:"button",value:t?.delete}),j("input",{bind:this,class:this.classes(v.button,v.buttonTertiary),disabled:e,onclick:this._closeEditBookmarkForm,type:"button",value:t?.cancel}),j("input",{class:v.button,disabled:e,type:"submit",value:t?.save}))}_renderEditingBookmarkUrlInput(t){const{messages:e,_userState:o,disabled:s}=this,i=t.thumbnail?.url,r=i&&H.test(i)?i:void 0,a="absolute-url-required"===o?.validationState;return j("label",{class:this.classes({[M.authoringLabel]:!0,[M.authoringLabelStartPadding]:!!this.visibleElements?.thumbnail})},a?j("strong",null,e?.invalidImageUrl):null,j("input",{afterCreate:this._storeUrlEditInput,afterUpdate:this._focusUrlEditInput,bind:this,class:this.classes(v.input,a?M.authoringInputInvalid:null),"data-bookmark":t,"data-node-ref":"_urlEditInputNode",disabled:s,placeholder:e?`https://<${e.imageUrlPlaceholder}>`:void 0,required:!0,title:e?.imageUrlTooltip,type:"text",value:r}))}_renderEditingBookmarkUrl(t){if(!t)return null;const e={[$]:t.uid};return j("li",{class:M.authoringCard,key:"edit-bookmark-url-form",...e},j("form",{bind:this,class:M.authoringForm,disabled:this.disabled,onsubmit:this._editBookmarkUrlSubmit},this._renderEditingBookmarkUrlInput(t),this._renderEditingBookmarkUrlActions()))}_renderEditingBookmark(t){if(!t)return null;const e={[$]:t.uid},{capabilities:o}=this.viewModel,s=o.time?j("div",{class:M.timeExtentContainer,key:"edit-bookmark-time-container"},this._renderBookmarkTimeSwitch(t),this._editIncludeTimeExtent?this._renderBookmarkTimeExtent(t):null):null;return j("li",{class:M.authoringCard,key:"edit-bookmark-form",...e},j("form",{bind:this,class:M.authoringForm,disabled:this.disabled,onsubmit:this._editBookmarkSubmit},j("div",{class:M.authoringContainer},this.visibleElements.thumbnail?j("div",{class:M.bookmarkImageContainer},this._renderBookmarkImage(t),this._editMenu.render()):null,this._renderEditingBookmarkName(t)),s,this._renderEditingBookmarkActions()))}_renderAddingBookmarkName(){const{_userState:t,messages:e,disabled:o}=this,s="name-required"===t?.validationState;return j("label",{class:M.authoringLabel},e?.title,s?j("strong",null,e?.invalidTitle):null,j("input",{afterCreate:this._storeAddInput,afterUpdate:this._focusAddInput,bind:this,class:this.classes(v.input,s?M.authoringInputInvalid:null),"data-node-ref":"_addInputNode",disabled:o,placeholder:e?.titlePlaceholder,required:!0,type:"text",value:""}))}_renderAddingBookmarkActions(){const{messagesCommon:t,disabled:e}=this;return j("div",{class:this.classes(M.authoringActions)},j("input",{bind:this,class:this.classes(v.button,v.buttonTertiary,M.authoringCancelButton),disabled:e,onclick:this._endAddBookmark.bind(this),type:"button",value:t?.cancel}),j("input",{class:v.button,disabled:e,type:"submit",value:t?.add}))}_renderAddingBookmark(){return j("div",{class:M.authoringCard,key:"add-bookmark-form"},j("form",{bind:this,class:this.classes(M.authoringForm,M.authoringFormAdding),onsubmit:this._addBookmarkSubmit},this._renderAddingBookmarkName(),this._renderAddingBookmarkActions()))}_setTooltipReference(t,e){this._tooltipReferenceMap.set(e.uid,t),this.scheduleRender()}_getBookmarkTitle(t){return(t?.name||this.messagesCommon?.untitled)??""}_formatDate(t){return t?l(t,{...m("short-date"),timeZone:this.view?.timeZone??u}):""}_formatTime(t){return t?l(t,{...m("long-time"),timeZone:this.view?.timeZone??u}):""}_dragHandleBlur(){this._selectedSortUid=null,this.scheduleRender()}_dragHandleKeydown(t){const{_sortableSavedItems:e}=this,s=o(t);if(!["ArrowDown","ArrowUp","Escape","Tab"," ","Enter"].includes(s))return;const{_sortable:i,_selectedSortUid:r}=this;if(!i)return;const a=i.toArray(),n=t.target.getAttribute($),d=a.indexOf(n);if(E(s)){const t=r&&r===n;return this._selectedSortUid=t?null:n,this._sortableSavedItems=t?[]:i.toArray(),void this.scheduleRender()}if("Tab"===s)return this._selectedSortUid=null,void this.scheduleRender();if("Escape"===s&&0!==e.length)return t.stopPropagation(),this._selectedSortUid=null,this._updateSortItems(e,i,n),void this.scheduleRender();if(-1===d||!r)return;const l="ArrowUp"===s?d-1:d+1;var m,u,k;l>=a.length||l<=-1||(u=d,k=l,(m=a).splice(k,0,m.splice(u,1)[0]),this._updateSortItems(a,i,n))}_updateSortItems(t,e,o){e.sort(t),this._sortBookmarks(e),this._focusSortUid=o,this._selectedSortUid=o}_focusDragHandle(t){const e=O(t);if(!e)return;this._setTooltipReference(t,e);const{_focusSortUid:o}=this;t&&o&&t.getAttribute($)===o&&(t.focus(),this._focusSortUid=null)}_toggleSorting(){const{_sortable:t,_sortableNode:e,editingEnabled:o,disabled:s}=this;if(e)if(t)t.option("disabled",s||!o);else{const t=S.create(e,{dataIdAttr:$,handle:`.${M.bookmarkDragHandle}`,group:"bookmarks",disabled:s||!o,onSort:()=>this._sortBookmarks(t)});this._sortable=t}}_sortNodeCreated(t){this._sortableNode=t,this._toggleSorting()}_sortBookmarks(t){const{bookmarks:e}=this.viewModel;if(!e)return;const o=t.toArray();e.sort(((t,e)=>{const s=o.indexOf(t.uid),i=o.indexOf(e.uid);return s>i?1:s<i?-1:0}))}_destroySortable(){const{_sortable:t}=this;t&&t.destroy(),this._sortable=null}_endAddBookmark(){this._focusAddBookmarkButton=!0,this.endAddBookmark()}_bookmarksInitialized(){const t="bookmarks-init";this.removeHandles(t),this.addHandles(r((()=>this.viewModel?.bookmarks),"change",(()=>this._bookmarksChanged())),t)}_bookmarksChanged(){const t="bookmarks-change",{bookmarks:e}=this.viewModel;this.removeHandles(t);const o=e.map((t=>s((()=>[t?.name,t?.thumbnail?.url]),(()=>this.scheduleRender()))));this.addHandles(o.toArray(),t),this.scheduleRender()}_showEditBookmarkForm(t){const e=O(t.currentTarget);e&&(this._editIncludeTimeExtent=!!e.timeExtent,this._focusEditInputBox=!0,this._userState=new T({bookmark:e,state:"edit"}),this.viewModel.goTo(e),this.scheduleRender())}_closeUrlEditBookmarkForm(){this._focusEditInputBox=!0,this._userState&&(this._userState.state="edit")}_closeEditBookmarkForm(){this._userState=null}_addBookmarkSubmit(t){t.preventDefault();const{_addInputNode:e,_userState:o}=this;if(!o)return;const s=e?e.value.trim():null;s?(o.loading=!0,this.viewModel.createBookmark().then((t=>{t.name=s,this.viewModel.bookmarks.add(t),this._endAddBookmark()}))):o.validationState="name-required"}async _editBookmarkAndClose(t,e){const{viewModel:o}=this;await o.editBookmark(t,{...o.defaultEditOptions,...e}),this._closeEditBookmarkForm()}_editBookmarkSubmit(t){t.preventDefault();const{_editInputNode:e,_userState:o,_editIncludeTimeExtent:s}=this;if(!o?.bookmark||!o.editedBookmark)return;const i=e&&e.value.trim();i?(o.bookmark.name=i,o.bookmark.thumbnail=o.editedBookmark.thumbnail,s||(o.bookmark.timeExtent=null),this._editBookmarkAndClose(o.bookmark,{takeScreenshot:!1,captureTimeExtent:s})):o.validationState="name-required"}_storeAddBookmarkButton(t){this._addBookmarkButtonNode=t,this._focusAddBookmark()}_storeEditInput(t){this._editInputNode=t,this._focusEditInput()}_storeAddInput(t){this._addInputNode=t,this._focusAddInput()}_storeUrlEditInput(t){this._urlEditInputNode=t,this._focusUrlEditInput()}_focusUrlEditInput(){this._urlEditInputNode&&this._focusUrlEditInputBox&&(this._focusUrlEditInputBox=!1,this._urlEditInputNode.focus())}_focusAddInput(){this._addInputNode&&this._focusAddInputBox&&(this._focusAddInputBox=!1,this._addInputNode.focus())}_focusAddBookmark(){this._addBookmarkButtonNode&&this._focusAddBookmarkButton&&(this._focusAddBookmarkButton=!1,this._addBookmarkButtonNode.focus())}_focusEditInput(){this._editInputNode&&this._focusEditInputBox&&(this._focusEditInputBox=!1,this._editInputNode.focus())}_deleteBookmark(t){const e=O(t.currentTarget);e&&this.viewModel.bookmarks.remove(e)}_goToBookmark(t){const e=O(t.currentTarget);e&&(this.endAddBookmark(),this._closeEditBookmarkForm(),this.viewModel.goTo(e))}async _refreshThumbnail(){const{_userState:t,_editMenu:e,viewModel:o}=this;t&&(t.validationState=void 0,await o.editBookmark(t.editedBookmark,{takeScreenshot:!0,captureViewpoint:!1,captureRotation:!1,captureScale:!1,captureTimeExtent:!1}),e.open=!1,this._focusEditInputBox=!0,this.scheduleRender())}_removeThumbnail(){const{_userState:t,_editMenu:e}=this;t?.editedBookmark&&(t.editedBookmark.thumbnail=null,t.validationState=void 0,e.open=!1,this._focusEditInputBox=!0,this.scheduleRender())}_startUseImageUrl(){this._userState&&(this._userState.state="edit-thumbnail"),this._editMenu.open=!1,this._focusUrlEditInputBox=!0,this.scheduleRender()}_editBookmarkUrlSubmit(t){t.preventDefault();const{_urlEditInputNode:e,_userState:o}=this;if(!e||!o)return;const s=e.value;H.test(s)?(s&&o.editedBookmark&&(o.editedBookmark.thumbnail=new k({url:s})),this._closeUrlEditBookmarkForm()):o.validationState="absolute-url-required"}};function O(t){return t["data-bookmark"]}t([a()],D.prototype,"_editIncludeTimeExtent",void 0),t([a({type:T})],D.prototype,"_userState",void 0),t([a({readOnly:!0})],D.prototype,"_editMenuItems",null),t([a({readOnly:!0})],D.prototype,"_editMenu",null),t([a()],D.prototype,"defaultCreateOptions",null),t([a()],D.prototype,"defaultEditOptions",null),t([a()],D.prototype,"bookmarks",null),t([a()],D.prototype,"disabled",void 0),t([a()],D.prototype,"editingEnabled",void 0),t([a()],D.prototype,"headingLevel",void 0),t([a()],D.prototype,"goToOverride",null),t([a()],D.prototype,"iconClass",void 0),t([a()],D.prototype,"icon",void 0),t([a()],D.prototype,"label",null),t([a(),I("esri/widgets/Bookmarks/t9n/Bookmarks")],D.prototype,"messages",void 0),t([a(),I("esri/t9n/common")],D.prototype,"messagesCommon",void 0),t([a()],D.prototype,"uiStrings",void 0),t([a()],D.prototype,"view",null),t([a({type:b}),y(["select-bookmark","bookmark-edit","bookmark-select"])],D.prototype,"viewModel",void 0),t([a()],D.prototype,"visibleElements",void 0),t([n("visibleElements")],D.prototype,"castVisibleElements",null),t([a()],D.prototype,"endAddBookmark",null),t([a()],D.prototype,"startAddBookmark",null),D=t([d("esri.widgets.Bookmarks")],D);const L=D;export{L as default};
