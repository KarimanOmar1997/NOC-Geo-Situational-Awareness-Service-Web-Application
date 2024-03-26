// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("require ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/asyncUtils ../../../core/Collection ../../../core/Error ../../../core/handleUtils ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/scheduling ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/decorators/subclass".split(" "),function(k,l,e,u,v,w,x,y,p,f,z,n,A){function t(){const a=f.createResolver();a.promise.catch(()=>{});return a}const m=a=>Object.freeze(Object.defineProperty({__proto__:null,
default:a},Symbol.toStringTag,{value:"Module"}));var h;(function(a){a[a.PENDING=0]="PENDING";a[a.CREATED=1]="CREATED"})(h||(h={}));var g;(function(a){a[a.ADDED=0]="ADDED";a[a.REMOVED=1]="REMOVED"})(g||(g={}));e=class extends e{constructor(a){super(a);this._allAnalysisViews=new v;this._creatingViewCount=0;this._items=new Map;this._scheduledUpdateHandle=null;this._attachedToViewResolver=t();this._analysisModules={"area-measurement":{module:null},dimension:{module:null},"direct-line-measurement":{module:null},
"line-of-sight":{module:null},slice:{module:null}}}destroy(){this._disconnectOwners();this._attachedToViewResolver.reject(f.createAbortError("AnalysisViewManager was destroyed"))}attach(){this._connectOwners();this._attachedToViewResolver.resolve()}detach(){this._disconnectOwners();this._attachedToViewResolver.reject(f.createAbortError());this._attachedToViewResolver=t()}get updating(){return!this.view.ready||0!==this._creatingViewCount||this._allAnalysisViews.some(a=>a.updating)}get testInfo(){return{allAnalysisViews:this._allAnalysisViews}}async whenAnalysisView(a){await this._attachedToViewResolver.promise;
const d=this._items.get(a);if(null==d||d.state.list===g.REMOVED)throw new w("AnalysisViewManager:no-analysisview-for-analysis","The analysis has not been added to view.analyses",{analysis:a});return d.createAnalysisViewTask.promise}_connectOwners(){this.addHandles(this._connectAnalysesCollection(this.view.analyses),"analyses-owner-handles")}_disconnectOwners(){this.removeHandles("analyses-owner-handles");this._update();this._creatingViewCount=0}_connectAnalysesCollection(a){for(const c of a)this._addAnalysis(c);
const d=a.on("after-add",c=>this._addAnalysis(c.item)),b=a.on("after-remove",c=>this._removeAnalysis(c.item));return x.makeHandle(()=>{d.remove();b.remove();for(const c of a)this._removeAnalysis(c)})}_addAnalysis(a){const d=this._items.get(a);if(null==d){const b={state:{view:h.PENDING,list:g.ADDED},analysis:a,view:null,createAnalysisViewTask:null};this._items.set(a,b);b.createAnalysisViewTask=u.createTask(c=>this._createAnalysisViewPromise(b,c))}else d.state.list=g.ADDED}_removeAnalysis(a){a=this._items.get(a);
null==a?y.getLogger(this).error("Trying to remove analysis which was not added"):(a.state.list=g.REMOVED,this._scheduleUpdate())}_scheduleUpdate(){null==this._scheduledUpdateHandle&&(this._scheduledUpdateHandle=z.schedule(()=>this._update()))}_update(){this._scheduledUpdateHandle=p.removeMaybe(this._scheduledUpdateHandle);this._items.forEach(a=>{if(a.state.list===g.REMOVED)switch(this._items.delete(a.analysis),a.state.view){case h.PENDING:a.createAnalysisViewTask=p.abortMaybe(a.createAnalysisViewTask);
break;case h.CREATED:null!=a.view&&(this._allAnalysisViews.remove(a.view),a.view=p.destroyMaybe(a.view),a.createAnalysisViewTask=null)}})}async _createAnalysisViewPromise(a,d){var b=a.analysis;const c=b.type,q=this._analysisModules[c];this._creatingViewCount+=1;if(null==q.module)try{q.module=await this._loadAnalysisModule(c)}catch(r){throw--this._creatingViewCount,r;}if(f.isAborted(d))throw--this._creatingViewCount,f.createAbortError("AnalysisView creation aborted");b=new q.module.default({analysis:b,
view:this.view});try{await b.when()}catch(r){throw--this._creatingViewCount,r;}if(f.isAborted(d))throw--this._creatingViewCount,b.destroy(),f.createAbortError("AnalysisView creation aborted");a.view=b;a.state.view=h.CREATED;this._allAnalysisViews.add(b);--this._creatingViewCount;return b}_loadAnalysisModule(a){switch(a){case "area-measurement":return new Promise((d,b)=>k(["./AreaMeasurementAnalysisView3D"],c=>d(m(c)),b));case "dimension":return new Promise((d,b)=>k(["./DimensionAnalysisView3D"],c=>
d(m(c)),b));case "direct-line-measurement":return new Promise((d,b)=>k(["./DirectLineMeasurementAnalysisView3D"],c=>d(m(c)),b));case "line-of-sight":return new Promise((d,b)=>k(["./LineOfSightAnalysisView3D"],c=>d(m(c)),b));case "slice":return new Promise((d,b)=>k(["./SliceAnalysisView3D"],c=>d(m(c)),b))}}};l.__decorate([n.property()],e.prototype,"updating",null);l.__decorate([n.property({constructOnly:!0})],e.prototype,"view",void 0);l.__decorate([n.property()],e.prototype,"_allAnalysisViews",void 0);
l.__decorate([n.property()],e.prototype,"_creatingViewCount",void 0);return e=l.__decorate([A.subclass("esri.views.3d.analysis.AnalysisViewManager3D")],e)});