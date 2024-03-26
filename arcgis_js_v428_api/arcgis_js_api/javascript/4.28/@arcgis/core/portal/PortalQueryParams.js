/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import r from"../core/Accessor.js";import{J as s}from"../chunks/jsonMap.js";import{clone as e}from"../core/lang.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import n from"../geometry/Extent.js";import p from"../geometry/SpatialReference.js";import{project as m}from"../geometry/support/webMercatorUtils.js";import"../chunks/typedArrayUtil.js";import"../core/Handles.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/time.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../chunks/reader.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";var a;const u=new s({avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"});let l=a=class extends r{constructor(t){super(t),this.categories=null,this.disableExtraQuery=!1,this.extent=null,this.filter=null,this.num=10,this.query=null,this.sortField=null,this.start=1}get sortOrder(){return this._get("sortOrder")||"asc"}set sortOrder(t){"asc"!==t&&"desc"!==t||this._set("sortOrder",t)}clone(){return new a({categories:this.categories?e(this.categories):null,disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():null,filter:this.filter,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})}toRequestOptions(t,r){let s=[];this.categories&&(s=this.categories.map((t=>Array.isArray(t)?JSON.stringify(t):t)));let e="";if(this.extent){const t=m(this.extent,p.WGS84);null!=t&&(e=`${t.xmin},${t.ymin},${t.xmax},${t.ymax}`)}let o=this.query;!this.disableExtraQuery&&t.extraQuery&&(o="("+o+")"+t.extraQuery);const i={categories:s,bbox:e,q:o,filter:this.filter,num:this.num,sortField:null,sortOrder:null,start:this.start};return this.sortField&&(i.sortField=this.sortField.split(",").map((t=>u.toJSON(t.trim()))).join(","),i.sortOrder=this.sortOrder),{query:{...r,...i}}}};t([o()],l.prototype,"categories",void 0),t([o()],l.prototype,"disableExtraQuery",void 0),t([o({type:n})],l.prototype,"extent",void 0),t([o()],l.prototype,"filter",void 0),t([o()],l.prototype,"num",void 0),t([o()],l.prototype,"query",void 0),t([o()],l.prototype,"sortField",void 0),t([o()],l.prototype,"sortOrder",null),t([o()],l.prototype,"start",void 0),l=a=t([i("esri.portal.PortalQueryParams")],l);const c=l;export{c as default};