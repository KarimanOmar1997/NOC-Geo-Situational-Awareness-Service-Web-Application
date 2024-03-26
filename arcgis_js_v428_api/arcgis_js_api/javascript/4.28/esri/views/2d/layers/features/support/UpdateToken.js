// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports"],function(f){class d{constructor(){this.version=0;this.source=!1;this.targets={feature:!1,aggregate:!1};this.storage={filters:!1,data:!1};this.queryFilter=this.mesh=!1;this.why={mesh:[],source:[]}}static create(a){const b=new d;let c;for(c in a){const e=a[c];if("object"===typeof e)for(const h in e){const g=h;b[c][g]=e[g]}b[c]=e}return b}static empty(){return d.create({})}static all(){return d.create({source:!0,targets:{feature:!0,aggregate:!0},storage:{filters:!0,data:!0},mesh:!0})}unset(a){this.version=
a.version;a.source&&(this.source=!1);a.targets.feature&&(this.targets.feature=!1);a.targets.aggregate&&(this.targets.aggregate=!1);a.storage.filters&&(this.storage.filters=!1);a.storage.data&&(this.storage.data=!1);a.mesh&&(this.mesh=!1);a.queryFilter&&(this.queryFilter=!1)}any(){return this.source||this.mesh||this.storage.filters||this.storage.data||this.targets.feature||this.targets.aggregate||this.queryFilter}describe(){let a=0,b="";if(this.mesh){a+=20;b+="-\x3e (20) Mesh needs update\n";for(const c of this.why.mesh)b+=
`    + ${c}\n`}if(this.source){a+=10;b+="-\x3e (10) The source needs update\n";for(const c of this.why.source)b+=`    + ${c}\n`}this.targets.feature&&(a+=5,b+="-\x3e (5) Feature target parameters changed\n");this.storage.filters&&(a+=5,b+="-\x3e (5) Feature filter parameters changed\n");this.targets.aggregate&&(a+=4,b+="-\x3e (4) Aggregate target parameters changed\n");this.storage.data&&(a+=1,b+="-\x3e (1) Texture storage parameters changed");console.debug(`Applying ${5>a?"Fastest":10>a?"Fast":15>
a?"Moderate":20>a?"Slow":"Very Slow"} update of cost ${a}/45 `);console.debug(b)}toJSON(){return{queryFilter:this.queryFilter,source:this.source,targets:this.targets,storage:this.storage,mesh:this.mesh}}}f.UpdateToken=d;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});