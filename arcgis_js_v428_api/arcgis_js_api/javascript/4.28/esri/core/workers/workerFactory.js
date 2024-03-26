// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../assets ../../config ../../intl ../../kernel ../has ../Logger ../urlUtils ./loaderConfig ./utils ./WorkerFallback ../../intl/locale ../../support/revision".split(" "),function(r,E,g,F,y,b,z,h,n,t,k,u,v){async function w(c){return new Promise(p=>{function e(a){(a=t.receiveMessage(a))&&a.type===A&&(c.removeEventListener("message",e),c.removeEventListener("error",d),p(c))}function d(a){a.preventDefault();c.removeEventListener("message",e);c.removeEventListener("error",d);q.warn("Failed to create Worker. Fallback to execute module in main thread",
a);c=new k;c.addEventListener("message",e);c.addEventListener("error",d)}c.addEventListener("message",e);c.addEventListener("error",d)})}const q=z.getLogger("esri.core.workers.workerFactory"),{HANDSHAKE:A}=t.MessageType;let l,m,B=0;r.createWorker=async function(){if(!b("esri-workers"))return w(new k);if(!l&&!m)try{var c=["let globalId\x3d0;const outgoing\x3dnew Map,configuration\x3dJSON.parse(",');self.esriConfig\x3dconfiguration.esriConfig;const workerPath\x3dself.esriConfig.workers.workerPath,HANDSHAKE\x3d0,OPEN\x3d1,OPENED\x3d2,RESPONSE\x3d3,INVOKE\x3d4,ABORT\x3d5;function createAbortError(){const e\x3dnew Error("Aborted");return e.name\x3d"AbortError",e}function receiveMessage(e){return e\x26\x26e.data?"string"\x3d\x3dtypeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t\x3dr\x26\x26r.signal,n\x3dglobalId++;return new Promise(((r,s)\x3d\x3e{if(t){if(t.aborted)return s(createAbortError());t.addEventListener("abort",(()\x3d\x3e{outgoing.get(n)\x26\x26(outgoing.delete(n),self.postMessage({type:ABORT,jobId:n}),s(createAbortError()))}))}outgoing.set(n,{resolve:r,reject:s}),self.postMessage({type:INVOKE,jobId:n,methodName:e,abortable:null!\x3dt,data:o})}))}let workerRevisionChecked\x3d!1;function checkWorkerRevision(e){if(!workerRevisionChecked\x26\x26e.kernelInfo){workerRevisionChecked\x3d!0;const{revision:o,fullVersion:r}\x3dconfiguration.kernelInfo,{revision:t,fullVersion:n,version:s}\x3de.kernelInfo;esriConfig.assetsPath!\x3d\x3desriConfig.defaultAssetsPath\x26\x26o!\x3d\x3dt\x26\x26console.warn(`Version mismatch detected between ArcGIS Maps SDK for JavaScript modules and assets. For more information visit https://bit.ly/3QnsuSo.\\nModules version: ${r}\\nAssets version: ${n??s}\\nAssets path: ${esriConfig.assetsPath}`)}}function messageHandler(e){const o\x3dreceiveMessage(e);if(!o)return;const r\x3do.jobId;switch(o.type){case OPEN:let n;function t(e){const o\x3dn.connect(e);self.postMessage({type:OPENED,jobId:r,data:o},[o])}"function"\x3d\x3dtypeof define\x26\x26define.amd?require([workerPath],(e\x3d\x3e{n\x3de.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e\x3d\x3ee||new Promise((e\x3d\x3e{require([o.modulePath],e)})))).then(t)})):"System"in self\x26\x26"function"\x3d\x3dtypeof System.import?System.import(workerPath).then((e\x3d\x3e(n\x3de.default,checkWorkerRevision(n),n.loadWorker(o.modulePath)))).then((e\x3d\x3ee||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((e\x3d\x3e{n\x3de.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e\x3d\x3ee||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),n\x3dself.RemoteClient.default||self.RemoteClient,checkWorkerRevision(n),n.loadWorker(o.modulePath).then(t));break;case RESPONSE:if(outgoing.has(r)){const s\x3doutgoing.get(r);outgoing.delete(r),o.error?s.reject(JSON.parse(o.error)):s.resolve(o.data)}}}self.dojoConfig\x3dconfiguration.loaderConfig,esriConfig.workers.loaderUrl\x26\x26(self.importScripts(esriConfig.workers.loaderUrl),"function"\x3d\x3dtypeof require\x26\x26"function"\x3d\x3dtypeof require.config\x26\x26require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});'],
p=c.join;let a;if(null!=g["default"]){const x={...g};delete x["default"];a=JSON.parse(JSON.stringify(x))}else a=JSON.parse(JSON.stringify(g));a.assetsPath=h.makeAbsolute(a.assetsPath);a.defaultAssetsPath=a.defaultAssetsPath?h.makeAbsolute(a.defaultAssetsPath):void 0;a.request.interceptors=[];a.log.interceptors=[];a.locale=u.getLocale();a.has={"esri-csp-restrictions":b("esri-csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":b("esri-2d-update-debug"),"esri-2d-log-updating":b("esri-2d-log-updating"),
"featurelayer-pbf":b("featurelayer-pbf"),"featurelayer-simplify-thresholds":b("featurelayer-simplify-thresholds"),"featurelayer-simplify-payload-size-factors":b("featurelayer-simplify-payload-size-factors"),"featurelayer-simplify-mobile-factor":b("featurelayer-simplify-mobile-factor"),"esri-atomics":b("esri-atomics"),"esri-shared-array-buffer":b("esri-shared-array-buffer"),"esri-tiles-debug":b("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":b("esri-workers-arraybuffer-transfer"),"feature-polyline-generalization-factor":b("feature-polyline-generalization-factor"),
"host-webworker":1};a.workers.loaderUrl?a.workers.loaderUrl=h.makeAbsolute(a.workers.loaderUrl):n.defaultLoaderUrl&&(a.workers.loaderUrl=n.defaultLoaderUrl);a.workers.workerPath=a.workers.workerPath?h.makeAbsolute(a.workers.workerPath):"esri/core/workers/RemoteClient";a.workers.useDynamicImport=!1;const f=g.workers.loaderConfig,C=n.loaderConfig({baseUrl:f?.baseUrl,locale:u.getLocale(),has:{"csp-restrictions":1,"dojo-test-sniff":0,"host-webworker":1,...f?.has},map:{...f?.map},paths:{...f?.paths},packages:f?.packages||
[]});var e=JSON.stringify({esriConfig:a,loaderConfig:C,kernelInfo:{buildDate:v.buildDate,fullVersion:y.fullVersion,revision:v.commitHash}});const D=p.call(c,`'${e}'`);l=URL.createObjectURL(new Blob([D],{type:"text/javascript"}))}catch(a){m=a||{}}let d;if(l)try{d=new Worker(l,{name:`esri-worker-${B++}`})}catch(a){q.warn("Failed to create Worker. Fallback to execute module in main thread",m),d=new k}else q.warn("Failed to create Worker. Fallback to execute module in main thread",m),d=new k;return w(d)};
Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});