// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../intl ../core/events ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./Widget ./FloorFilter/css ./FloorFilter/FloorFilterViewModel ./support/globalCss ./support/Heading ./support/legacyIcon ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory ../intl/substitute".split(" "),function(n,m,z,A,p,E,F,G,B,C,g,w,k,t,l,q,x,e,
y){const D=new Set(["ArrowUp","ArrowDown","End","Home"]);m=class extends C{constructor(a,b){super(a,b);this._activeMenu=null;this._activeMenuIndex={levels:-1,menuItems:-1};this._searchInput=this._sitesListNode=this._levelsListNode=this._facilitiesListNode=this._baseNode=null;this.viewModel=new w;this.messagesCommon=this.messages=null;this.headingLevel=2;this._resizeObserver=new ResizeObserver(()=>this.scheduleRender());this.addHandles(A.watch(()=>this._searchInput,()=>this._focusSearch()))}destroy(){this._resizeObserver?.disconnect()}get enabled(){return this.viewModel.enabled}set enabled(a){this.viewModel.enabled=
a}get longNames(){return this.viewModel.longNames}set longNames(a){this.viewModel.longNames=a}get minimized(){return this.viewModel.minimized}set minimized(a){this.viewModel.minimized=a}get pinnedLevels(){return this.viewModel.pinnedLevels}set pinnedLevels(a){this.viewModel.pinnedLevels=a}get site(){return this.viewModel.site}set site(a){this.viewModel.site=a}get facility(){return this.viewModel.facility}set facility(a){this.viewModel.facility=a}get level(){return this.viewModel.level}set level(a){this.viewModel.level=
a}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(a){this.viewModel.goToOverride=a}updateWebDocument(a){return this.viewModel.updateWebDocument(a)}render(){var {longNames:a}=this;a=a&&this.viewModel.isNormalMode?"expanded":"collapsed";var b=this._renderButtons();const d=this._renderFilterMenu(),f=e.tsx("div",{class:this.classes(g.css.separator)});var c=this._getComponentPosition();const h=this._getPosition(c),
r="top-right"===c||"bottom-right"===c,u="top-left"===c||"bottom-left"===c,v=q.isRTL(this.container);c=v&&u||!v&&r?d:b;b=v&&u||!v&&r?b:d;return e.tsx("div",{afterCreate:this._afterBaseNodeCreate,class:this.classes(g.css.floorFilter,k.globalCss.widget,`${g.css.floorFilterLayout}${a}`,`${g.css.floorFilterPosition}${h}`),key:"floor-filter-menu"},c,this.viewModel?.filterMenuOpen?f:null,b)}_renderButtons(){const a=this._getComponentPosition(),b=[];"top"===this._getPosition(a)?(b.push(this._renderBrowseButton()),
b.push(this._renderLevelButtons()),b.push(this._renderCloseLevelsButton()),b.push(this._renderZoomButton()),b.push(this._renderCollapseToggleButton())):(b.push(this._renderCollapseToggleButton()),b.push(this._renderZoomButton()),b.push(this._renderCloseLevelsButton()),b.push(this._renderLevelButtons()),b.push(this._renderBrowseButton()));return e.tsx("div",{class:this.classes(k.globalCss.widget,g.css.buttonContainer),key:"button-container"},b)}_renderBrowseButton(){const {longNames:a,messages:b}=
this;return e.tsx("button",{"aria-expanded":this.viewModel.filterMenuOpen.toString(),"aria-label":b.buttons.browse,bind:this,class:this.classes(k.globalCss.widget,k.globalCss.widgetButton,k.globalCss.interactive,("loading"===this.viewModel.state||"disabled"===this.viewModel.state)&&k.globalCss.buttonDisabled,g.css.browseButton,this.viewModel?.filterMenuOpen&&k.globalCss.widgetButtonActive),key:"browse-button",onclick:this._toggleFilterMenu,title:b.buttons.browse,type:"button"},e.tsx("div",{class:this.classes(g.css.buttonInfo)},
e.tsx("span",{class:this.classes(l.legacyIcon.icon,l.legacyIcon.urbanModel)}),e.tsx("span",{class:this.classes(g.css.buttonLabel)},a&&this.viewModel.isNormalMode?b.buttons.browse:null)))}_renderLevelButtons(){if(!this.viewModel?.filterFeatures?.levels?.levelsInfo||!this.facility)return null;const {facility:a,messagesCommon:b,messages:d}=this;var f=this.viewModel?.getFacility(a);const c=(this.viewModel?.getFacilityLevels(a)).map(h=>this._renderLevelButton(h));if(!c.length)return null;f=f&&y.substitute(d.selector.levelsLabel,
{name:`"${f.name}"`});if(this._isWebScene(this.view?.map)&&1<c?.length){const h=this._renderLevelButton({id:`all--${a}`,facilityId:a,shortName:b.all,longName:b.all,levelNumber:null,verticalOrder:null});c.push(h)}return e.tsx("ul",{afterCreate:q.storeNode,"aria-label":f,bind:this,class:this.classes(g.css.levelsContainer),"data-id":"levels","data-node-ref":"_levelsListNode",key:"levels-button-container",onkeydown:this._handleListKeydown},c)}_renderLevelButton(a){var {longNames:b}=this;const {shortName:d,
longName:f,id:c}=a;a=this.level===c;b=b&&this.viewModel.isNormalMode?f:d;return this.viewModel.isNormalMode||a||this.viewModel.levelsExpanded?e.tsx("li",{key:`levels--${c}`},e.tsx("button",{bind:this,class:this.classes(k.globalCss.widgetButton,a?k.globalCss.widgetButtonActive:null,k.globalCss.interactive,g.css.levelButton),"data-id":c,"data-list-id":"levels",onclick:this._levelSelected,onfocus:this._onItemFocus,type:"button"},b)):null}_renderCloseLevelsButton(){if(!this.level||this.viewModel.isNormalMode||
!this.viewModel.levelsExpanded)return null;const {messagesCommon:a}=this;return e.tsx("button",{"aria-label":a.close,bind:this,class:this.classes(k.globalCss.widget,k.globalCss.widgetButton,k.globalCss.interactive,g.css.closeLevelsButton),key:"close-levels-button",onclick:this._closeLevels,title:a.close,type:"button"},e.tsx("div",{class:this.classes(g.css.buttonInfo)},e.tsx("span",{class:this.classes(l.legacyIcon.icon,l.legacyIcon.close)})))}_renderZoomButton(){const {longNames:a,messages:b,facility:d,
site:f}=this,c=this.viewModel?.filterMenuType,h=this.viewModel?.filterMenuOpen,r=this.viewModel?.getSite(f),u=this.viewModel?.getFacility(d);return e.tsx("button",{"aria-label":b.buttons.zoomTo,bind:this,class:this.classes(k.globalCss.widget,k.globalCss.widgetButton,("site"===c&&h?!r:!u)&&k.globalCss.buttonDisabled,k.globalCss.interactive,0<this.viewModel?.getFacilityLevels(d).length?g.css.zoomButtonLevels:g.css.zoomButton),key:"zoom-button",onclick:this._zoomToClicked,title:b.buttons.zoomTo,type:"button"},
e.tsx("div",{class:this.classes(g.css.buttonInfo)},e.tsx("span",{class:this.classes(l.legacyIcon.icon,l.legacyIcon.zoomToObject)}),e.tsx("span",{class:this.classes(g.css.buttonLabel)},a&&this.viewModel.isNormalMode?b.buttons.zoomTo:null)))}_renderCollapseToggleButton(){const {longNames:a,messagesCommon:b}=this,d=this.classes(l.legacyIcon.icon,a?l.legacyIcon.collapse:l.legacyIcon.expand),f=a?b.collapse:b.expand;return e.tsx("button",{"aria-label":f,bind:this,class:this.classes(k.globalCss.widget,k.globalCss.widgetButton,
k.globalCss.interactive,g.css.minimizeToggleButton),key:"minimize-toggle-button",onclick:this._toggleCollapsed,title:f,type:"button"},e.tsx("div",{class:this.classes(g.css.buttonInfo)},e.tsx("span",{class:d}),e.tsx("span",{class:this.classes(g.css.buttonLabel)},a&&this.viewModel.isNormalMode?b.collapse:null)))}_renderFilterMenu(){return this.viewModel?.filterMenuOpen?"site"===this.viewModel?.filterMenuType?this._renderSiteFilterMenu():"facility"===this.viewModel?.filterMenuType?this._renderFacilityFilterMenu():
null:null}_renderSiteFilterMenu(){const {messages:a,messagesCommon:b}=this;var d=this.site?this.viewModel?.getSite(this.site)?.name:a.selector.selectSite;d=e.tsx("div",{class:this.classes(`${g.css.filterMenuHeader}`),key:"filter-menu-site-header"},e.tsx("div",{class:this.classes(g.css.filterMenuHeaderTextGroup)},e.tsx(t.Heading,{class:this.classes(g.css.filterMenuHeaderText),level:this.headingLevel},d)),e.tsx("button",{bind:this,class:this.classes(l.legacyIcon.icon,l.legacyIcon.close),onclick:this._closeClicked,
title:b.close,type:"button"}));const f=this._renderSearchInput(),c=this._renderSiteItems();return e.tsx("div",{class:this.classes(g.css.filterMenu),key:"filter-menu-site"},d,f,c)}_renderFacilityFilterMenu(){const {messages:a,messagesCommon:b,site:d}=this;var f=this.viewModel?.getSite(d)?.name,c=this.facility&&this.viewModel?.getFacility(this.facility)?.name||a.selector.selectFacility,h=this.viewModel.hasMultipleSites?e.tsx("button",{bind:this,class:this.classes(g.css.filterMenuHeaderBack),onclick:this._backClicked,
title:b.back,type:"button"},e.tsx("span",{class:this.classes(q.isRTL(this.container)?l.legacyIcon.right:l.legacyIcon.left)})):null;f=this.viewModel.hasMultipleSites?e.tsx(t.Heading,{class:this.classes(g.css.filterMenuHeaderSubtext),level:t.incrementHeadingLevel(this.headingLevel)},f):null;c=e.tsx("div",{class:this.classes(g.css.filterMenuHeader),key:"filter-menu-site-header"},h,e.tsx("div",{class:this.classes(g.css.filterMenuHeaderTextGroup)},e.tsx(t.Heading,{class:this.classes(g.css.filterMenuHeaderText),
level:this.headingLevel},c),f),e.tsx("button",{bind:this,class:this.classes(l.legacyIcon.icon,l.legacyIcon.close),onclick:this._closeClicked,title:b.close,type:"button"}));h=this._renderSearchInput();f=this._renderFacilityItems();return e.tsx("div",{class:this.classes(g.css.filterMenu),key:"filter-menu-facility"},c,h,f)}_renderSearchInput(){const {messagesCommon:a}=this;return e.tsx("div",{class:this.classes(g.css.filterMenuSearch),key:"filter-menu-search"},e.tsx("span",{class:this.classes(l.legacyIcon.icon,
l.legacyIcon.search)}),e.tsx("input",{afterCreate:q.storeNode,bind:this,class:this.classes(g.css.filterMenuSearchInput),"data-node-ref":"_searchInput",key:"filter-menu-search__input",oninput:this._onSearchChange,onpaste:this._onSearchChange,placeholder:a.search,value:this.viewModel.searchTerm??void 0}))}_renderBlueCircle(){return e.tsx("span",{class:this.classes(g.css.selectedItemCircle),key:"floor-filter__selected-item-circle"})}_renderSiteItems(){if(!this.viewModel?.filterFeatures?.sites?.sitesInfo)return null;
const {messages:a}=this,b=this.viewModel.filterSites(this.viewModel.filterFeatures.sites.sitesInfo).map(f=>this._renderSiteItem(f)),d=0===b.length&&this.viewModel?.searchTerm&&e.tsx("div",{class:this.classes(k.globalCss.empty)},a.noResults);return e.tsx("ul",{afterCreate:q.storeNode,"aria-label":a.selector.sitesLabel,bind:this,class:this.classes(g.css.filterMenuItems),"data-id":"sites","data-node-ref":"_sitesListNode",key:"filter-menu-items--sites",onkeydown:this._handleListKeydown,tabIndex:-1},b,
d)}_renderSiteItem(a){const {name:b,id:d}=a;a=this.site===d;return e.tsx("li",{key:`filter-menu-site--${d}`},e.tsx("button",{bind:this,class:this.classes(g.css.filterMenuSite),"data-id":d,"data-list-id":"sites",onclick:this._siteSelected,onfocus:this._onItemFocus,type:"button"},a?this._renderBlueCircle():null,e.tsx("span",{class:this.classes(a?g.css.filterMenuSelectedItem:g.css.filterMenuItemName)},b),e.tsx("span",{class:this.classes(q.isRTL(this.container)?l.legacyIcon.left:l.legacyIcon.right)})))}_renderFacilityItems(){if(!this.viewModel?.filterFeatures?.facilities?.facilitiesInfo)return null;
const {messages:a,site:b}=this;var d=this.viewModel.getSite(b);const f=this.viewModel.filterFacilities(this.viewModel.filterFeatures.facilities.facilitiesInfo).map(h=>this._renderFacilityItem(h)),c=0===f.length&&this.viewModel?.searchTerm&&e.tsx("div",{class:this.classes(k.globalCss.empty)},a.noResults);d=d?y.substitute(a.selector.siteFacilitiesLabel,{name:`"${d.name}"`}):a.selector.facilitiesLabel;return e.tsx("ul",{afterCreate:q.storeNode,"aria-label":d,bind:this,class:this.classes(g.css.filterMenuItems),
"data-id":"facilities","data-node-ref":"_facilitiesListNode",key:"filter-menu-items--facilities",onkeydown:this._handleListKeydown,tabIndex:-1},f,c)}_renderFacilityItem(a){const {name:b,id:d}=a;a=this.facility===d;return e.tsx("li",{key:`filter-menu-facility--${d}`},e.tsx("button",{bind:this,class:this.classes(g.css.filterMenuFacility),"data-id":d,"data-list-id":"facilities",onclick:this._facilitySelected,onfocus:this._onItemFocus,type:"button"},a?this._renderBlueCircle():null,e.tsx("span",{class:this.classes(a?
g.css.filterMenuSelectedItem:g.css.filterMenuItemName)},b)))}_afterBaseNodeCreate(a){this._baseNode&&this._resizeObserver?.unobserve(this._baseNode);this._baseNode=a;this._resizeObserver?.observe(this._baseNode)}_toggleCollapsed(){this.longNames=!this.longNames}_toggleFilterMenu(){this.viewModel.filterMenuOpen=!(this.viewModel?.filterMenuOpen??!1)}_setFilterMenuType(a){this.viewModel.filterMenuType=a}_zoomToClicked(){if(this.site&&"site"===this.viewModel?.filterMenuType&&this.viewModel?.filterMenuOpen){var a=
this.viewModel?.getSite(this.site);this.viewModel.goTo(a)}else this.facility?(a=this.viewModel?.getFacility(this.facility),this.viewModel.goTo(a)):this.site&&(a=this.viewModel?.getSite(this.site),this.viewModel.goTo(a))}_onSearchChange(a){a=a.target;""===a.value?this.viewModel.searchTerm=null:a.value&&this.viewModel?.searchTerm!==a.value&&(this.viewModel.searchTerm=a.value)}_closeClicked(){this.viewModel.searchTerm=null;this.viewModel.filterMenuOpen=!1}_backClicked(){this._setFilterMenuType("site");
this.viewModel.searchTerm=null}_siteSelected(a){a=a.currentTarget.getAttribute("data-id");const b=this.viewModel.getSite(a);let d=!1;this.site!==a&&(this.level=this.facility=null,d=!0,this.viewModel.levelsExpanded=!1);this.site=a;this.viewModel.searchTerm=null;this._setFilterMenuType("facility");this.viewModel.goTo(b);d&&this.viewModel.setFloors(null)}_facilitySelected(a){a=a.currentTarget.getAttribute("data-id");var b=this.viewModel.getFacility(a),d=!1;this.facility!==a&&(this.level="base-floors"===
this.viewModel.filterMode?(d=this.viewModel?.getBaseLevel(b))?d.id:null:null,d=!0,this.viewModel.levelsExpanded=!1);this.facility=a;this.viewModel.goTo(b);d&&(b=this.viewModel.getLevel(this.level),this.viewModel.setFloors(b));!this.viewModel.isNormalMode&&1<this.viewModel.getFacilityLevels(a)?.length&&(this.viewModel.levelsExpanded=!0);setTimeout(()=>this._focusActiveLevel(),50)}_levelSelected(a){this.level=a.currentTarget.getAttribute("data-id")}_closeLevels(){this.viewModel.levelsExpanded=!1}_isWebScene(a){return"esri.WebScene"===
a?.declaredClass}_getComponentPosition(){return null!=this.container?this.view?.ui?.getPosition(this.container):null}_getPosition(a){switch(a){case "bottom-right":case "bottom-left":return"bottom";default:return"top"}}_handleListKeydown(a){var b=a.currentTarget.getAttribute("data-id");let d=null;"sites"===b||"facilities"===b?(this._activeMenu!==b&&(this._activeMenuIndex.menuItems=-1),this._activeMenu=b,d="menuItems"):"levels"===b&&(d="levels");var f="sites"===b?this._sitesListNode:"facilities"===
b?this._facilitiesListNode:"levels"===b?this._levelsListNode:null;b=z.eventKey(a);const c="Tab"===b,h=D.has(b);h&&a.preventDefault();(f=f?.getElementsByTagName("li"))&&0!==f.length&&(h||c)&&this._handleItemNavigation(b,a.shiftKey,f,c,d)}_handleItemNavigation(a,b,d,f,c){if(c){this._activeMenuIndex[c]===d.length&&this._activeMenuIndex[c]--;-1===this._activeMenuIndex[c]&&this._activeMenuIndex[c]++;var h=this._activeMenuIndex[c];switch(a){case "Home":this._activeMenuIndex[c]=0;break;case "End":this._activeMenuIndex[c]=
d.length-1;break;case "ArrowUp":this._activeMenuIndex[c]=0>=this._activeMenuIndex[c]?d.length-1:this._activeMenuIndex[c]-1;break;case "ArrowDown":this._activeMenuIndex[c]=this._activeMenuIndex[c]===d.length-1?0:this._activeMenuIndex[c]+1}"Tab"===a&&b&&0<=this._activeMenuIndex[c]&&this._activeMenuIndex[c]--;"Tab"===a&&!b&&this._activeMenuIndex[c]<d.length&&this._activeMenuIndex[c]++;h!==this._activeMenuIndex[c]&&-1<this._activeMenuIndex[c]&&this._activeMenuIndex[c]<d.length&&!f&&(a=d[this._activeMenuIndex[c]].getElementsByTagName("button"),
(1===a?.length?a[0]:null)?.focus())}}_focusSearch(){this._searchInput?.focus()}_focusActiveLevel(){const {level:a}=this;var b=this._levelsListNode;const d=b?.getElementsByTagName("li");if(a&&b&&d){b=this._facilitiesListNode?.getElementsByTagName("li");this._activeMenuIndex.menuItems=b?b.length-1:-1;b=[];for(let f=0;f<d.length;f++){const c=d[f].getElementsByTagName("button");1===c?.length&&b.push(c[0])}b.forEach((f,c)=>{f.getAttribute("data-id")===a&&(f.focus(),this._activeMenuIndex.levels=c)})}}_onItemFocus(a){var b=
a.currentTarget;a=b.getAttribute("data-list-id");const d=b.getAttribute("data-id");if(b="sites"===a?this._sitesListNode:"facilities"===a?this._facilitiesListNode:"levels"===a?this._levelsListNode:null)if(b=b?.getElementsByTagName("li")){var f=[];Array.from(b).forEach(h=>{h=h.getElementsByTagName("button");1===h?.length&&f.push(h[0])});b=null;switch(a){case "sites":case "facilities":b="menuItems";break;case "levels":b="levels"}if(b){var c=b;f.forEach((h,r)=>{h.getAttribute("data-id")===d&&this._activeMenuIndex[c]!==
r&&(this._activeMenuIndex[c]=r)})}}}};n.__decorate([p.property()],m.prototype,"_searchInput",void 0);n.__decorate([p.property()],m.prototype,"enabled",null);n.__decorate([p.property()],m.prototype,"longNames",null);n.__decorate([p.property()],m.prototype,"minimized",null);n.__decorate([p.property()],m.prototype,"pinnedLevels",null);n.__decorate([p.property()],m.prototype,"site",null);n.__decorate([p.property()],m.prototype,"facility",null);n.__decorate([p.property()],m.prototype,"level",null);n.__decorate([p.property()],
m.prototype,"view",null);n.__decorate([p.property({type:w})],m.prototype,"viewModel",void 0);n.__decorate([p.property(),x.messageBundle("esri/widgets/FloorFilter/t9n/FloorFilter")],m.prototype,"messages",void 0);n.__decorate([p.property(),x.messageBundle("esri/t9n/common")],m.prototype,"messagesCommon",void 0);n.__decorate([p.property()],m.prototype,"goToOverride",null);n.__decorate([p.property()],m.prototype,"headingLevel",void 0);return m=n.__decorate([B.subclass("esri.widgets.FloorFilter")],m)});