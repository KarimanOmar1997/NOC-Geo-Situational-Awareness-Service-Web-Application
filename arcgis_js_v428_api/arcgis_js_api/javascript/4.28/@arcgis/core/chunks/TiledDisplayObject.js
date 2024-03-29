/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{s as t,m as s}from"./mat3.js";import{D as i}from"./DisplayObject.js";import{T as e}from"./TileKey2.js";class r extends i{constructor(t,s,i,r,h,o,n=h,a=o){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new e(t),this.resolution=s,this.x=i,this.y=r,this.width=h,this.height=o,this.rangeX=n,this.rangeY=a}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(i){const e=this.resolution/(i.resolution*i.pixelRatio),r=this.transforms.tileMat3,[h,o]=i.toScreenNoRotation([0,0],[this.x,this.y]),n=this.width/this.rangeX*e,a=this.height/this.rangeY*e;t(r,n,0,0,0,a,0,h,o,1),s(this.transforms.dvs,i.displayViewMat3,r)}}export{r as T};
