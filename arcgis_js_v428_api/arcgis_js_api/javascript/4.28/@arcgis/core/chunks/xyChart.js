/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{c as t,d as e}from"./LineSeries.js";export{A as AxisRendererXAm5,a as AxisRendererYAm5,L as LineSeriesAm5,V as ValueAxisAm5,X as XYChartAm5,b as XYCursorAm5}from"./LineSeries.js";import{e as i,X as s,aw as o,m as n,aM as r,ar as h,ay as l,ah as g,aB as d,aC as m}from"./Theme.js";import{a as c}from"./tslib.es6.js";import{R as p}from"./Button2.js";import"./ColorSet.js";import"./DefaultTheme.js";import"./Tick.js";class u extends t{constructor(){super(...arguments),Object.defineProperty(this,"_ph",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_pw",{enumerable:!0,configurable:!0,writable:!0,value:0})}_makeGraphics(t,e){return this.makeColumn(e,t)}_makeFieldNames(){super._makeFieldNames();const t=this.get("xAxis"),e=this.get("yAxis"),i="CategoryAxis",s="ValueAxis";t.isType(i)&&(this.get("openCategoryXField")||(this._xOpenField=this._xField)),t.isType(s)&&(this.get("openValueXField")||(this._xOpenField=this._xField)),e.isType(i)&&(this.get("openCategoryYField")||(this._yOpenField=this._yField)),e.isType(s)&&(this.get("openValueYField")||(this._yOpenField=this._yField))}_prepareChildren(){super._prepareChildren();const t=this.get("xAxis"),e=this.get("yAxis"),i=this.dataItems.length,s=Math.max(0,this.startIndex()-2),a=Math.min(this.endIndex()+2,i-1);if(t.inited&&e.inited)for(let t=s;t<=a;t++){let e=this.dataItems[t];this._createGraphics(e)}}_updateChildren(){const t=this.chart;t&&(this._ph=t.plotContainer.height(),this._pw=t.plotContainer.width());const e=this.get("xAxis"),s=this.get("yAxis"),a=this.get("baseAxis"),o=this.columns.template;this.isDirty("fill")&&null==o.get("fill")&&o.set("fill",this.get("fill")),this.isDirty("stroke")&&null==o.get("stroke")&&o.set("stroke",this.get("stroke"));let n=0,r=0,h=0;i(a.series,(t=>{if(t instanceof u){const e=t.get("stacked");e&&0==h&&r++,!e&&t.get("clustered")&&r++}t===this&&(n=r-1),h++})),this.get("clustered")||(n=0,r=1),0===r&&(r=1,n=0);const l=e.get("renderer"),g=s.get("renderer"),d="cellStartLocation",m="cellEndLocation",c=l.get(d,0),p=l.get(m,1),x=g.get(d,0),_=g.get(m,1);if(this._aLocationX0=c+n/r*(p-c),this._aLocationX1=c+(n+1)/r*(p-c),this._aLocationY0=x+n/r*(_-x),this._aLocationY1=x+(n+1)/r*(_-x),e.inited&&s.inited){if(this._axesDirty||this._valuesDirty||this._stackDirty||this.isDirty("vcx")||this.isDirty("vcy")||this._sizeDirty){const t=this.dataItems.length;let e=Math.max(0,this.startIndex()-2),i=Math.min(this.endIndex()+2,t-1);for(let t=0;t<e;t++)this._toggleColumn(this.dataItems[t],!1);let s=this.dataItems[e];for(let t=e;t<=i;t++){let i=this.dataItems[t];if(null!=i.get("valueX")&&null!=i.get("valueY")){if(s=i,t>0&&e>0)for(let e=t-1;e>=0;e--){let t=this.dataItems[e];if(null!=t.get("valueX")&&null!=t.get("valueY")){s=t;break}}break}this._toggleColumn(i,!1)}for(let t=e;t<=i;t++){let e=this.dataItems[t];this._updateGraphics(e,s),null!=e.get("valueX")&&null!=e.get("valueY")&&(s=e)}for(let e=i+1;e<t;e++)this._toggleColumn(this.dataItems[e],!1)}}else this._skipped=!0;this.updateLegendMarker(this.get("tooltipDataItem")),super._updateChildren()}_createGraphics(t){let e=t.get("graphics");if(!e){e=this._makeGraphics(this.columns,t),t.set("graphics",e),e._setDataItem(t);const i=t.get("legendDataItem");if(i){const t=i.get("markerRectangle");t&&t.setAll({fill:e.get("fill"),stroke:e.get("stroke")})}this.axisRanges.each((e=>{const i=e.container,s=t.get("rangeGraphics",[]);t.set("rangeGraphics",s);const a=this._makeGraphics(e.columns,t);s.push(a),a.setPrivate("list",e.columns),i.children.push(a)}))}}_updateGraphics(t,e){let a=t.get("graphics");const n=this._xField,r=this._yField,h=t.get(n),l=t.get(r);if(null!=h&&null!=l){const h=this._xOpenField,l=this._yOpenField,g=this.get("locationX",t.get("locationX",.5)),d=this.get("locationY",t.get("locationY",.5)),m=this.get("openLocationX",t.get("openLocationX",g)),c=this.get("openLocationY",t.get("openLocationY",d)),p=a.get("width"),u=a.get("height"),x=this.get("stacked"),_=this.get("xAxis"),I=this.get("yAxis"),y=this.get("baseAxis"),f=_.get("start"),P=_.get("end"),b=I.get("start"),v=I.get("end");let D,T,C,w,A=this.get("vcy",1),F=this.get("vcx",1),k=!1,M=!1;if(I.isType("CategoryAxis")&&_.isType("CategoryAxis")){let e=this._aLocationX0+m-.5,i=this._aLocationX1+g-.5;if(p instanceof s){let t=(i-e)*(1-p.value)/2;e+=t,i-=t}if(D=_.getDataItemPositionX(t,h,e,F),T=_.getDataItemPositionX(t,n,i,F),e=this._aLocationY0+c-.5,i=this._aLocationY1+d-.5,u instanceof s){let t=(i-e)*(1-u.value)/2;e+=t,i-=t}C=I.getDataItemPositionY(t,l,e,A),w=I.getDataItemPositionY(t,r,i,A),t.setRaw("point",{x:D+(T-D)/2,y:C+(w-C)/2})}else if(_===y){let e=this._aLocationX0+m-.5,i=this._aLocationX1+g-.5;if(p instanceof s){let t=(i-e)*(1-p.value)/2;e+=t,i-=t}if(D=_.getDataItemPositionX(t,h,e,F),T=_.getDataItemPositionX(t,n,i,F),C=I.getDataItemPositionY(t,r,d,A),this._yOpenField!==this._yField)w=I.getDataItemPositionY(t,l,c,A);else if(x){let e=t.get("stackToItemY");w=e?I.getDataItemPositionY(e,r,c,e.component.get("vcy")):I.basePosition()}else w=I.basePosition();t.setRaw("point",{x:D+(T-D)/2,y:C}),M=!0}else if(I===y){let e=this._aLocationY0+c-.5,i=this._aLocationY1+d-.5;if(u instanceof s){let t=(i-e)*(1-u.value)/2;e+=t,i-=t}if(C=I.getDataItemPositionY(t,l,e,A),w=I.getDataItemPositionY(t,r,i,A),T=_.getDataItemPositionX(t,n,g,F),this._xOpenField!==this._xField)D=_.getDataItemPositionX(t,h,m,F);else if(x){let e=t.get("stackToItemX");D=e?_.getDataItemPositionX(e,n,m,e.component.get("vcx")):_.basePosition()}else D=_.basePosition();k=!0,t.setRaw("point",{x:T,y:C+(w-C)/2})}this._updateSeriesGraphics(t,a,D,T,C,w,k,M),D<f&&T<f||D>P&&T>P||C<b&&w<=b||C>=v&&w>v||o(D)||o(C)?this._toggleColumn(t,!1):this._toggleColumn(t,!0);let X=t.get("rangeGraphics");X&&i(X,(e=>{this._updateSeriesGraphics(t,e,D,T,C,w,k,M)})),this._applyGraphicsStates(t,e)}}_updateSeriesGraphics(t,e,i,s,a,o,r,h){const l=e.get("width"),g=e.get("height"),d=e.get("maxWidth"),m=e.get("maxHeight"),c=this.getPoint(i,a),p=this.getPoint(s,o),u=t.get("point");if(u){const t=this.getPoint(u.x,u.y);u.x=t.x+this._x,u.y=t.y+this._y}if(i=c.x,s=p.x,a=c.y,o=p.y,n(l)){const t=(s-i-l)/2;i+=t,s-=t}if(n(d)&&d<Math.abs(s-i)){const t=(s-i-d)/2;i+=t,s-=t}if(n(g)){const t=(o-a-g)/2;a+=t,o-=t}if(n(m)&&m<Math.abs(o-a)){const t=(o-a-m)/2;a+=t,o-=t}this.get("adjustBulletPosition")&&(r&&(s=Math.min(Math.max(0,s),this._pw),i=Math.min(Math.max(0,i),this._pw)),h&&(a=Math.min(Math.max(0,a),this._ph),o=Math.min(Math.max(0,o),this._ph))),t.setRaw("left",i),t.setRaw("right",s),t.setRaw("top",a),t.setRaw("bottom",o),e.setPrivate("width",s-i),e.setPrivate("height",o-a),e.set("x",i),e.set("y",o-(o-a))}_handleDataSetChange(){super._handleDataSetChange(),i(this._dataItems,(t=>{this._toggleColumn(t,!1)}))}_applyGraphicsStates(t,e){const i=t.get("graphics"),s=i.states.lookup("dropFromOpen"),a=i.states.lookup("riseFromOpen"),o=i.states.lookup("dropFromPrevious"),r=i.states.lookup("riseFromPrevious");if(s||o||a||r){const i=this.get("xAxis"),h=this.get("yAxis"),l=this.get("baseAxis");let g,d,m;l===i&&h.isType("ValueAxis")?(g=t.get(this._yOpenField),d=t.get(this._yField),m=e.get(this._yField)):l===h&&i.isType("ValueAxis")&&(g=t.get(this._xOpenField),d=t.get(this._xField),m=e.get(this._xField)),n(g)&&n(d)&&(d<g?s&&s.apply():a&&a.apply(),n(m)&&(d<m?o&&o.apply():r&&r.apply()))}}disposeDataItem(t){super.disposeDataItem(t);const e=t.get("graphics");e&&(this.columns.removeValue(e),e.dispose());const s=t.get("rangeGraphics");s&&i(s,(t=>{const e=t.getPrivate("list");e&&e.removeValue(t),t.dispose()}))}hideDataItem(t,e){const s=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return c(this,void 0,void 0,(function*(){const a=[s.hideDataItem.call(this,t,e)],o=t.get("graphics");o&&a.push(o.hide(e));const n=t.get("rangeGraphics");n&&i(n,(t=>{a.push(t.hide(e))})),yield Promise.all(a)}))}_toggleColumn(t,e){const s=t.get("graphics");s&&s.setPrivate("visible",e);const a=t.get("rangeGraphics");a&&i(a,(t=>{t.setPrivate("visible",e)}));const o=t.bullets;o&&i(o,(t=>{t.setPrivate("hidden",!e)}))}showDataItem(t,e){const s=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return c(this,void 0,void 0,(function*(){const a=[s.showDataItem.call(this,t,e)],o=t.get("graphics");o&&a.push(o.show(e));const n=t.get("rangeGraphics");n&&i(n,(t=>{a.push(t.show(e))})),yield Promise.all(a)}))}updateLegendMarker(t){let e=this.get("legendDataItem");if(this.get("useLastColorForLegendMarker")&&!t){const e=this.dataItems[this.endIndex()-1];e&&(t=e)}if(e){let s=this.columns.template;if(t){let e=t.get("graphics");e&&(s=e)}const a=e.get("markerRectangle");a&&(e.get("itemContainer").get("disabled")||i(r,(t=>{a.set(t,s.get(t,this.get(t)))})))}}_getTooltipTarget(t){return"bullet"==this.get("seriesTooltipTarget")?super._getTooltipTarget(t):t.get("graphics")||this}}Object.defineProperty(u,"className",{enumerable:!0,configurable:!0,writable:!0,value:"BaseColumnSeries"}),Object.defineProperty(u,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:t.classNames.concat([u.className])});class x extends e{constructor(){super(...arguments),Object.defineProperty(this,"_frequency",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_itemMap",{enumerable:!0,configurable:!0,writable:!0,value:{}})}_afterNew(){this._settings.themeTags=h(this._settings.themeTags,["axis"]),this.fields.push("category"),this.setPrivateRaw("name","category"),this.addTag("category"),super._afterNew()}_prepareChildren(){super._prepareChildren();const t=this.dataItems.length;let e=0;this._valuesDirty&&(this._itemMap={},i(this.dataItems,(t=>{t.setRaw("index",e),this._itemMap[t.get("category")]=t,e++})),this.setPrivateRaw("maxZoomFactor",t)),this.setPrivateRaw("startIndex",Math.max(Math.round(this.get("start",0)*t),0)),this.setPrivateRaw("endIndex",Math.min(Math.round(this.get("end",1)*t),t)),(this._sizeDirty||this._valuesDirty||this.isDirty("start")||this.isDirty("end")||this.isPrivateDirty("endIndex")||this.isPrivateDirty("startIndex")||this.isPrivateDirty("width")||this.isPrivateDirty("height"))&&this.dataItems.length>0&&(this._handleRangeChange(),this._prepareAxisItems(),this._updateAxisRanges())}_handleRangeChange(){i(this.series,(t=>{let e=this.dataItems[this.startIndex()].get("category"),s=this.dataItems[this.endIndex()-1].get("category"),a=t.get("baseAxis"),o=t.get("xAxis"),n=t.get("yAxis");if(o instanceof x&&n instanceof x)t._markDirtyAxes();else if(a===this){let r,h,l=n;if(o===a?(t.get("categoryXField")&&(r="categoryX"),t.get("openCategoryXField")&&(h="openCategoryX")):n===a&&(t.get("categoryYField")&&(r="categoryY"),t.get("openCategoryYField")&&(h="openCategoryY"),l=o),"ValueAxis"==l.className&&(r||h)){let a,o;for(let i=0,s=t.dataItems.length;i<s;i++){let s=t.dataItems[i];if(r&&s.get(r)===e){a=s;break}if(h&&s.get(h)===e){a=s;break}}for(let e=t.dataItems.length-1;e>=0;e--){let i=t.dataItems[e];if(r&&i.get(r)===s){o=i;break}if(h&&i.get(h)===s){o=i;break}}let n=0,l=t.dataItems.length;a&&(n=t.dataItems.indexOf(a)),o&&(l=t.dataItems.indexOf(o)+1),t.setPrivate("startIndex",n),t.setPrivate("endIndex",l);let g=!1;for(let e=n;e<l;e++){const s=t.dataItems[e];if(i(t.__valueXShowFields,(t=>{null!=s.get(t)&&(g=!0)})),i(t.__valueYShowFields,(t=>{null!=s.get(t)&&(g=!0)})),g)break}t.setPrivate("outOfSelection",!g)}t._markDirtyAxes()}}))}_prepareAxisItems(){const t=this.get("renderer"),e=this.dataItems.length;let i=this.startIndex();i>0&&i--;let s=this.endIndex();s<e&&s++;let a=t.axisLength()/Math.max(t.get("minGridDistance"),1/Number.MAX_SAFE_INTEGER),o=Math.max(1,Math.min(e,Math.ceil((s-i)/a)));i=Math.floor(i/o)*o,this._frequency=o;for(let t=0;t<e;t++)this.dataItems[t].hide();let n=this.dataItems[i].get("index",0);for(let t=i;t<s;t+=o){let e=this.dataItems[t];this._createAssets(e,[]),e.isHidden()&&e.show(),this._prepareDataItem(e,n,o),n++}this._updateGhost()}_prepareDataItem(t,e,i){let s=this.get("renderer"),a=t.get("categoryLocation",0),o=t.get("endCategoryLocation",1),r=t.get("index");n(r)||(r=this.categoryToIndex(t.get("category")));let h,l=this.indexToPosition(r,a),g=t.get("endCategory");g?(h=this.categoryToIndex(g),n(h)||(h=r)):h=r;let d,m,c=this.indexToPosition(h,o);d=t.get("isRange")?h:r+this._frequency-1,m=this.indexToPosition(d,o),s.updateLabel(t.get("label"),l,c,i),s.updateGrid(t.get("grid"),l,c),s.updateTick(t.get("tick"),l,c,i),s.updateFill(t.get("axisFill"),l,m),this._processBullet(t),s.updateBullet(t.get("bullet"),l,c);const p=this.get("fillRule");p&&p(t,e)}startIndex(){let t=this.dataItems.length;return Math.min(Math.max(this.getPrivate("startIndex",0),0),t-1)}endIndex(){let t=this.dataItems.length;return Math.max(1,Math.min(this.getPrivate("endIndex",t),t))}baseValue(){}basePosition(){return 0}getX(t){let e=this._itemMap[t];return e?this._settings.renderer.positionToCoordinate(this.indexToPosition(e.get("index",0))):NaN}getY(t){let e=this._itemMap[t];return e?this._settings.renderer.positionToCoordinate(this.indexToPosition(e.get("index",0))):NaN}getDataItemPositionX(t,e,i,s){const a=t.get(e),o=this._itemMap[a];return o?this.indexToPosition(o.get("index",0),i):NaN}getDataItemCoordinateX(t,e,i,s){return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(t,e,i,s))}getDataItemPositionY(t,e,i,s){const a=t.get(e),o=this._itemMap[a];return o?this.indexToPosition(o.get("index",0),i):NaN}getDataItemCoordinateY(t,e,i,s){return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(t,e,i,s))}indexToPosition(t,e){n(e)||(e=.5);let i=this.dataItems.length,s=this.get("startLocation",0);i-=s,i-=1-this.get("endLocation",1);let a=(t+e-s)/i,o=this.dataItems[t];return o&&(a+=o.get("deltaPosition",0)),a}categoryToIndex(t){let e=this._itemMap[t];return e?e.get("index"):NaN}dataItemToPosition(t){return this.indexToPosition(t.get("index"))}roundAxisPosition(t,e){return t+=(.5-e)/this.dataItems.length,this.indexToPosition(this.axisPositionToIndex(t),e)}axisPositionToIndex(t){let e=this.dataItems.length;return l(Math.floor(t*e),0,e-1)}getTooltipText(t,e){const i=this.dataItems[this.axisPositionToIndex(t)];if(i){const t=i.get("label");if(t)return g(t,this.get("tooltipText",""))}}_updateTooltipText(t,e){t._setDataItem(this.dataItems[this.axisPositionToIndex(e)]),t.label.text.markDirtyText()}getSeriesItem(t,e){if(this.dataItems.length>0){let i=this.getPrivate("name")+this.get("renderer").getPrivate("letter"),s=this.axisPositionToIndex(e),a=t.dataItems[s],o=this.dataItems[s],n=o.get("category");if(a&&o&&a.get(i)===n)return a;for(let e=0,s=t.dataItems.length;e<s;e++){let s=t.dataItems[e];if(s.get(i)===n)return s}}}zoomToIndexes(t,e,i){let s=this.dataItems.length;this.zoom(t/s,e/s,i)}zoomToCategories(t,e,i){this.zoomToIndexes(this.categoryToIndex(t),this.categoryToIndex(e)+1,i)}getCellWidthPosition(){return this._frequency/this.dataItems.length/(this.get("end",1)-this.get("start",0))}}Object.defineProperty(x,"className",{enumerable:!0,configurable:!0,writable:!0,value:"CategoryAxis"}),Object.defineProperty(x,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:e.classNames.concat([x.className])});class _ extends u{constructor(){super(...arguments),Object.defineProperty(this,"columns",{enumerable:!0,configurable:!0,writable:!0,value:new d(m.new({}),(()=>p._new(this._root,{position:"absolute",themeTags:h(this.columns.template.get("themeTags",[]),["series","column"])},[this.columns.template])))})}makeColumn(t,e){const i=this.mainContainer.children.push(e.make());return i._setDataItem(t),e.push(i),i}_processAxisRange(t){super._processAxisRange(t),t.columns=new d(m.new({}),(()=>p._new(this._root,{position:"absolute",themeTags:h(t.columns.template.get("themeTags",[]),["series","column"])},[this.columns.template,t.columns.template])))}}Object.defineProperty(_,"className",{enumerable:!0,configurable:!0,writable:!0,value:"ColumnSeries"}),Object.defineProperty(_,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:u.classNames.concat([_.className])});export{x as CategoryAxisAm5,_ as ColumnSeriesAm5};