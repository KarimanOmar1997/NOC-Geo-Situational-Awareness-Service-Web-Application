"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8356,9914],{40167:(e,t,r)=>{r.d(t,{A:()=>V,B:()=>h,C:()=>U,D:()=>j,E:()=>G,F:()=>W,G:()=>k,H:()=>q,I:()=>z,J:()=>H,a:()=>A,b:()=>P,c:()=>d,d:()=>a,e:()=>p,f:()=>Z,g:()=>T,h:()=>B,i:()=>E,j:()=>g,k:()=>O,l:()=>b,m:()=>m,n:()=>S,o:()=>_,p:()=>w,q:()=>L,r:()=>M,s:()=>C,t:()=>x,u:()=>R,v:()=>F,w:()=>v,x:()=>N,y:()=>I,z:()=>Y});var n=r(47880),s=r(72836),f=r(7200);class i{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=9;const f=this.TypedArrayConstructor;void 0===n&&(n=9*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<9;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let e=0;e<9;++e)n[f++]=s[i++]}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=9;class u{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=16;const f=this.TypedArrayConstructor;void 0===n&&(n=16*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)t[e]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let e=0;e<16;e++)this.typedBuffer[r++]=t[e]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let e=0;e<16;++e)n[f++]=s[i++]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=16;class o{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===n&&(n=f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.stride=n,this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}o.ElementCount=1;class c{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=2;const f=this.TypedArrayConstructor;void 0===n&&(n=2*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,n.f)(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=s[i++],n[f]=s[i]}get buffer(){return this.typedBuffer.buffer}}c.ElementCount=2;class y{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=3;const f=this.TypedArrayConstructor;void 0===n&&(n=3*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,s.s)(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=n}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=s[i++],n[f++]=s[i++],n[f]=s[i]}get buffer(){return this.typedBuffer.buffer}}y.ElementCount=3;class l{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.start=r,this.elementCount=4;const f=this.TypedArrayConstructor;void 0===n&&(n=4*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,f.s)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=n,this.typedBuffer[e]=s}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=s[i++],n[f++]=s[i++],n[f++]=s[i++],n[f]=s[i]}get buffer(){return this.typedBuffer.buffer}}l.ElementCount=4;class a extends o{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f32";class p extends c{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class h extends y{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(h,e,t)}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f32";class d extends l{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(d,e,t)}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="f32";class T extends i{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f32";class b extends i{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class B extends u{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f32";class m extends u{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class E extends o{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f64";class g extends c{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f64";class A extends y{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class O extends l{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="f64";class S extends o{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="u8";class _ extends c{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(_,e,t)}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="u8";class w extends y{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u8";class P extends l{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u8";class L extends o{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u16";class M extends c{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="u16";class C extends y{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u16";class x extends l{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u16";class R extends o{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="u32";class F extends c{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u32";class v extends y{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="u32";class N extends l{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u32";class I extends o{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="i8";class Y extends c{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="i8";class V extends y{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class U extends l{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i8";class j extends o{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i16";class Z extends c{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(Z,e,t)}static fromTypedArray(e,t){return new Z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Z.ElementType="i16";class G extends y{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i16";class W extends l{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(W,e,t)}static fromTypedArray(e,t){return new W(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}W.ElementType="i16";class k extends o{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i32";class q extends c{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i32";class z extends y{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i32";class H extends l{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32"},89914:(e,t,r)=>{r.d(t,{S:()=>s});var n=r(62062);class s extends n.O{notify(){const e=this._observers;if(e&&e.length>0){const t=e.slice();for(const e of t)e.onInvalidated(),e.onCommitted()}}}},34987:(e,t,r)=>{r.d(t,{a:()=>y,b:()=>h,c:()=>o,d:()=>a,e:()=>l,f:()=>c,g:()=>p,u:()=>d});var n=r(82426),s=r(35861),f=r(45087),i=r(72836),u=r(66106);function o(e=d){return[e[0],e[1],e[2],e[3]]}function c(e,t,r=o()){return(0,i.c)(r,e),r[3]=t,r}function y(e,t,r=o()){return(0,s.s)(T,e,h(e)),(0,s.s)(b,t,h(t)),(0,s.m)(T,b,T),f=r,i=(0,n.r)((0,s.g)(r,T)),f[3]=i,f;var f,i}function l(e,t,r,n=o()){return c(u.d,e,B),c(u.e,t,m),c(u.U,r,E),y(B,m,B),y(B,E,n),n}function a(e){return e}function p(e){return e[3]}function h(e){return(0,n.d)(e[3])}const d=[0,0,1,0],T=(0,f.a)(),b=(0,f.a)();o();const B=o(),m=o(),E=o()},13814:(e,t,r)=>{r.d(t,{c:()=>c});var n=r(82426),s=r(65775),f=r(66106),i=r(50626),u=r(53785);function o(e,t,r){const n=Math.sin(e),s=Math.cos(e),f=Math.sin(t),i=Math.cos(t),u=r;return u[0]=-n,u[4]=-f*s,u[8]=i*s,u[12]=0,u[1]=s,u[5]=-f*n,u[9]=i*n,u[13]=0,u[2]=0,u[6]=i,u[10]=f,u[14]=0,u[3]=0,u[7]=0,u[11]=0,u[15]=1,u}function c(e,t,r,n){if(null==e||null==n)return!1;const f=(0,i.c)(e,i.s),c=(0,i.c)(n,i.d);if(f===c&&!y(c)&&(f!==i.P.UNKNOWN||(0,u.f)(e,n)))return(0,s.d)(r,t),!0;if(y(c)){const e=i.e[f][i.P.LON_LAT],n=i.e[i.P.LON_LAT][c];return null!=e&&null!=n&&(e(t,0,a,0),n(a,0,p,0),o(l*a[0],l*a[1],r),r[12]=p[0],r[13]=p[1],r[14]=p[2],!0)}if((c===i.P.WEB_MERCATOR||c===i.P.PLATE_CARREE)&&(f===i.P.WGS84||f===i.P.CGCS2000&&c===i.P.PLATE_CARREE||f===i.P.SPHERICAL_ECEF||f===i.P.WEB_MERCATOR)){const e=i.e[f][i.P.LON_LAT],n=i.e[i.P.LON_LAT][c];return null!=e&&null!=n&&(e(t,0,a,0),n(a,0,p,0),f===i.P.SPHERICAL_ECEF?function(e,t,r){o(e,t,r),(0,s.t)(r,r)}(l*a[0],l*a[1],r):(0,s.g)(r),r[12]=p[0],r[13]=p[1],r[14]=p[2],!0)}return!1}function y(e){return e===i.P.SPHERICAL_ECEF||e===i.P.SPHERICAL_MARS_PCPF||e===i.P.SPHERICAL_MOON_PCPF}const l=(0,n.d)(1),a=(0,f.c)(),p=(0,f.c)()},84017:(e,t,r)=>{r.r(t),r.d(t,{a:()=>L,b:()=>w,c:()=>R,d:()=>M,e:()=>P,f:()=>F,g:()=>W,h:()=>z,i:()=>O,j:()=>q,k:()=>x,l:()=>J,m:()=>k,n:()=>re,p:()=>$,t:()=>C,u:()=>H,v:()=>S});var n=r(53785),s=r(16912),f=r(65775),i=r(57532),u=r(72836),o=r(66106),c=r(26923),y=r(1623),l=r(57257),a=r(13814),p=r(50626),h=r(97987),d=r(66705),T=r(46961),b=r(45274),B=r(45003),m=r(79641),E=r(92143),g=r(35132),A=r(40167);function O(e,t){return e.isGeographic||e.isWebMercator&&(t?.geographic??!0)}function S(e,t,r){const n=!e.isGeoreferenced;null!=r?.geographic&&r.geographic!==n&&E.L.getLogger(t).warnOnce(`Specifying the 'geographic' parameter (${r.geographic}) for a Mesh vertex space of type "${e.type}" is not supported. This parameter will be ignored.`)}const _=E.L.getLogger("esri.geometry.support.meshUtils.normalProjection");function w(e,t,r,n,s){return N(n)?(v(Y.TO_PCPF,A.B.fromTypedArray(e),A.a.fromTypedArray(t),A.a.fromTypedArray(r),n,A.B.fromTypedArray(s)),s):(_.error("Cannot convert spatial reference to PCPF"),s)}function P(e,t,r,n,s){return N(n)?(v(Y.FROM_PCPF,A.B.fromTypedArray(e),A.a.fromTypedArray(t),A.a.fromTypedArray(r),n,A.B.fromTypedArray(s)),s):(_.error("Cannot convert to spatial reference from PCPF"),s)}function L(e,t,r){return(0,p.p)(e,t,0,r,(0,l.g)(t),0,e.length/3),r}function M(e,t,r){return(0,p.p)(e,(0,l.g)(r),0,t,r,0,e.length/3),t}function C(e,t,r){return(0,c.n)(G,r),(0,m.t)(t,e,G),(0,c.i)(G)||(0,m.n)(t,t),t}function x(e,t,r){if((0,c.n)(G,r),(0,m.t)(t,e,G,4),(0,c.i)(G)||(0,m.n)(t,t,4),e!==t)for(let r=3;r<e.length;r+=4)t[r]=e[r];return t}function R(e,t,r,n,s){if(!N(n))return _.error("Cannot convert spatial reference to PCPF"),s;v(Y.TO_PCPF,A.B.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),A.a.fromTypedArray(t),A.a.fromTypedArray(r),n,A.B.fromTypedArray(s,4*Float32Array.BYTES_PER_ELEMENT));for(let t=3;t<e.length;t+=4)s[t]=e[t];return s}function F(e,t,r,n,s){if(!N(n))return _.error("Cannot convert to spatial reference from PCPF"),s;v(Y.FROM_PCPF,A.B.fromTypedArray(e,16),A.a.fromTypedArray(t),A.a.fromTypedArray(r),n,A.B.fromTypedArray(s,16));for(let t=3;t<e.length;t+=4)s[t]=e[t];return s}function v(e,t,r,n,s,f){if(!t)return;const i=r.count,o=(0,l.g)(s);if(I(s))for(let r=0;r<i;r++)n.getVec(r,U),t.getVec(r,j),(0,a.c)(o,U,Z,o),(0,c.f)(G,Z),e===Y.FROM_PCPF&&(0,c.t)(G,G),(0,u.r)(j,j,G),f.setVec(r,j);else for(let s=0;s<i;s++){n.getVec(s,U),t.getVec(s,j),(0,a.c)(o,U,Z,o),(0,c.f)(G,Z);const i=(0,g.mZ)(r.get(s,1));let y=Math.cos(i);e===Y.TO_PCPF&&(y=1/y),G[0]*=y,G[1]*=y,G[2]*=y,G[3]*=y,G[4]*=y,G[5]*=y,e===Y.FROM_PCPF&&(0,c.t)(G,G),(0,u.r)(j,j,G),(0,u.p)(j,j),f.setVec(s,j)}return f}function N(e){return I(e)||function(e){return e.isWebMercator}(e)}function I(e){return e.isWGS84||(0,n.Q)(e)||(0,n.v)(e)||(0,n.w)(e)}var Y,V;(V=Y||(Y={}))[V.TO_PCPF=0]="TO_PCPF",V[V.FROM_PCPF=1]="FROM_PCPF";const U=(0,o.c)(),j=(0,o.c)(),Z=(0,i.a)(),G=(0,s.a)();function W(e,t,r){return O(t.spatialReference,r)?function(e,t,r){const n=t.spatialReference,s=K(t,r,X),f=new Float64Array(e.position.length),i=function(e,t,r,n){return(0,m.a)(n,e,t),M(n,new Float64Array(e.length),r)}(e.position,s,n,f),u=(0,c.n)(te,s),o=function(e,t,r,n,s){if(null==r)return null;const f=new Float32Array(r.length);return(0,m.t)(f,r,n),P(f,e,t,s,f),f}(i,f,e.normal,u,n),y=function(e,t,r,n,s){if(null==r)return null;const f=new Float32Array(r.length);(0,m.t)(f,r,n,4);for(let e=3;e<f.length;e+=4)f[e]=r[e];return F(f,e,t,s,f),f}(i,f,e.tangent,u,n);return{position:i,normal:o,tangent:y}}(e,t,r):function(e,t,r){const n=new Float64Array(e.position.length),s=e.position,f=t.x,i=t.y,u=t.z??0,o=Q(r?r.unit:null,t.spatialReference);for(let e=0;e<s.length;e+=3)n[e]=s[e]*o+f,n[e+1]=s[e+1]*o+i,n[e+2]=s[e+2]*o+u;return{position:n,normal:e.normal,tangent:e.tangent}}(e,t,r)}function k(e,t=i.I){const{position:r,normal:n,tangent:s}=e;return{position:(0,m.a)(new Float64Array(r.length),r,t),normal:null!=n?C(n,new Float32Array(n.length),t):null,tangent:null!=s?x(s,new Float32Array(s.length),t):null}}function q(e,t,r,n){const{position:s,normal:f,tangent:i}=e;return t.isRelative?W(k(e,r?.localMatrix),t.getOriginPoint(n),{geographic:!t.isGeoreferenced}):{position:s,normal:f,tangent:i}}function z(e,t,r){if(r?.useTransform){const{position:n,normal:s,tangent:f}=e,{x:i,y:u,z:c}=t,y=(0,o.f)(i,u,c??0);return{vertexAttributes:{position:n,normal:s,tangent:f},vertexSpace:r.geographic??1?new b.Z({origin:y}):new d.Z({origin:y}),transform:new B.Z}}return{vertexAttributes:W(e,t,r),vertexSpace:new T.Z,transform:null}}function H(e,t,r){return O(t.spatialReference,r)?function(e,t,r){const n=t.spatialReference;K(t,r,X);const s=(0,f.i)(ee,X),i=new Float64Array(e.position.length),u=function(e,t,r,n){const s=L(e,t,n),f=new Float64Array(s.length);return(0,m.a)(f,s,r),f}(e.position,n,s,i),o=(0,c.n)(te,s),y=function(e,t,r,n,s){if(null==e)return null;const f=w(e,t,r,n,new Float32Array(e.length));return(0,m.t)(f,f,s),f}(e.normal,e.position,i,n,o),l=function(e,t,r,n,s){if(null==e)return null;const f=R(e,t,r,n,new Float32Array(e.length));return(0,m.t)(f,f,s,4),f}(e.tangent,e.position,i,n,o);return{position:u,normal:y,tangent:l}}(e,t,r):D(e,t,r)}function J(e,t,r,n,s){if(!t.isRelative)return H(e,n,s);const{spatialReference:f}=n,i=q(e,t,r,f);return n.equals(t.getOriginPoint(f))?D(i,n,s):H(i,n,s)}function $({positions:e,transform:t,vertexSpace:r,inSpatialReference:n,outSpatialReference:s,outPositions:c,localMode:d}){const T=r.isRelative?r.origin:o.Z,b=r.isRelative?t?.localMatrix??i.I:i.I;if(r.isGeoreferenced){const t=c??(0,h.n)(e.length);if((0,f.b)(b,i.I)?(0,h.c)(t,e):(0,m.a)(t,e,b),!(0,u.e)(T,o.Z)){const[e,r,n]=T;for(let s=0;s<t.length;s+=3)t[s]+=e,t[s+1]+=r,t[s+2]+=n}return(0,p.p)(t,n,0,t,s,0,t.length/3),t}let B=n;const E=(0,l.g)(n);B=s.isWebMercator&&d||!(0,y.canProjectWithoutEngine)(n,E)?B:E,(0,a.c)(n,T,X,B),(0,f.m)(X,X,b);const g=c??(0,h.n)(e.length);return(0,m.a)(g,e,X),(0,p.p)(g,B,0,g,s,0,g.length/3),g}function D(e,t,r){const n=new Float64Array(e.position.length),s=e.position,f=t.x,i=t.y,u=t.z??0,o=Q(r?r.unit:null,t.spatialReference);for(let e=0;e<s.length;e+=3)n[e]=(s[e]-f)/o,n[e+1]=(s[e+1]-i)/o,n[e+2]=(s[e+2]-u)/o;return{position:n,normal:e.normal,tangent:e.tangent}}function K(e,t,r){(0,a.c)(e.spatialReference,[e.x,e.y,e.z??0],r,(0,l.g)(e.spatialReference));const n=Q(t?t.unit:null,e.spatialReference);return(0,f.c)(r,r,[n,n,n]),r}function Q(e,t){if(null==e)return 1;const r=(0,n.R)(t);return 1/(0,n.x)(r,"meters",e)}const X=(0,i.a)(),ee=(0,i.a)(),te=(0,s.a)(),re=Object.freeze(Object.defineProperty({__proto__:null,applyTransform:k,georeference:W,georeferenceApplyTransform:q,georeferenceByTransform:z,project:$,ungeoreference:H,ungeoreferenceByTransform:J},Symbol.toStringTag,{value:"Module"}))},26923:(e,t,r)=>{r.d(t,{b:()=>u,c:()=>o,f:()=>s,i:()=>l,m:()=>c,n:()=>y,s:()=>f,t:()=>i});var n=r(29794);function s(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e}function f(e,t,r,n,s,f,i,u,o,c){return e[0]=t,e[1]=r,e[2]=n,e[3]=s,e[4]=f,e[5]=i,e[6]=u,e[7]=o,e[8]=c,e}function i(e,t){if(e===t){const r=t[1],n=t[2],s=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=n,e[7]=s}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e}function u(e,t){const r=t[0],n=t[1],s=t[2],f=t[3],i=t[4],u=t[5],o=t[6],c=t[7],y=t[8],l=y*i-u*c,a=-y*f+u*o,p=c*f-i*o;let h=r*l+n*a+s*p;return h?(h=1/h,e[0]=l*h,e[1]=(-y*n+s*c)*h,e[2]=(u*n-s*i)*h,e[3]=a*h,e[4]=(y*r-s*o)*h,e[5]=(-u*r+s*f)*h,e[6]=p*h,e[7]=(-c*r+n*o)*h,e[8]=(i*r-n*f)*h,e):null}function o(e,t){const r=t[0],n=t[1],s=t[2],f=t[3],i=t[4],u=t[5],o=t[6],c=t[7],y=t[8];return e[0]=i*y-u*c,e[1]=s*c-n*y,e[2]=n*u-s*i,e[3]=u*o-f*y,e[4]=r*y-s*o,e[5]=s*f-r*u,e[6]=f*c-i*o,e[7]=n*o-r*c,e[8]=r*i-n*f,e}function c(e,t,r){const n=t[0],s=t[1],f=t[2],i=t[3],u=t[4],o=t[5],c=t[6],y=t[7],l=t[8],a=r[0],p=r[1],h=r[2],d=r[3],T=r[4],b=r[5],B=r[6],m=r[7],E=r[8];return e[0]=a*n+p*i+h*c,e[1]=a*s+p*u+h*y,e[2]=a*f+p*o+h*l,e[3]=d*n+T*i+b*c,e[4]=d*s+T*u+b*y,e[5]=d*f+T*o+b*l,e[6]=B*n+m*i+E*c,e[7]=B*s+m*u+E*y,e[8]=B*f+m*o+E*l,e}function y(e,t){const r=t[0],n=t[1],s=t[2],f=t[3],i=t[4],u=t[5],o=t[6],c=t[7],y=t[8],l=t[9],a=t[10],p=t[11],h=t[12],d=t[13],T=t[14],b=t[15],B=r*u-n*i,m=r*o-s*i,E=r*c-f*i,g=n*o-s*u,A=n*c-f*u,O=s*c-f*o,S=y*d-l*h,_=y*T-a*h,w=y*b-p*h,P=l*T-a*d,L=l*b-p*d,M=a*b-p*T;let C=B*M-m*L+E*P+g*w-A*_+O*S;return C?(C=1/C,e[0]=(u*M-o*L+c*P)*C,e[1]=(o*w-i*M-c*_)*C,e[2]=(i*L-u*w+c*S)*C,e[3]=(s*L-n*M-f*P)*C,e[4]=(r*M-s*w+f*_)*C,e[5]=(n*w-r*L-f*S)*C,e[6]=(d*O-T*A+b*g)*C,e[7]=(T*E-h*O-b*m)*C,e[8]=(h*A-d*E+b*B)*C,e):null}function l(e){const t=(0,n.g)(),r=e[0],s=e[1],f=e[2],i=e[3],u=e[4],o=e[5],c=e[6],y=e[7],l=e[8];return Math.abs(1-(r*r+i*i+c*c))<=t&&Math.abs(1-(s*s+u*u+y*y))<=t&&Math.abs(1-(f*f+o*o+l*l))<=t}},35861:(e,t,r)=>{r.d(t,{a:()=>c,c:()=>l,e:()=>a,f:()=>y,g:()=>u,m:()=>o,s:()=>i});var n=r(66106),s=r(29794),f=(r(72836),r(7200));function i(e,t,r){r*=.5;const n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e}function u(e,t){const r=2*Math.acos(t[3]),n=Math.sin(r/2);return n>(0,s.g)()?(e[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n):(e[0]=1,e[1]=0,e[2]=0),r}function o(e,t,r){const n=t[0],s=t[1],f=t[2],i=t[3],u=r[0],o=r[1],c=r[2],y=r[3];return e[0]=n*y+i*u+s*c-f*o,e[1]=s*y+i*o+f*u-n*c,e[2]=f*y+i*c+n*o-s*u,e[3]=i*y-n*u-s*o-f*c,e}function c(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function y(e,t,r,n){const s=.5*Math.PI/180;t*=s,r*=s,n*=s;const f=Math.sin(t),i=Math.cos(t),u=Math.sin(r),o=Math.cos(r),c=Math.sin(n),y=Math.cos(n);return e[0]=f*o*y-i*u*c,e[1]=i*u*y+f*o*c,e[2]=i*o*c-f*u*y,e[3]=i*o*y+f*u*c,e}const l=f.c,a=f.a;(0,n.c)(),(0,n.f)(1,0,0),(0,n.f)(0,1,0)},57257:(e,t,r)=>{r.d(t,{g:()=>o});var n=r(53785),s=r(60947);const f=new s.Z(n.T),i=new s.Z(n.t),u=new s.Z(n.u);function o(e){return e&&((0,n.v)(e)||(0,n.f)(e,i))?i:e&&((0,n.w)(e)||(0,n.f)(e,u))?u:f}new s.Z(n.s)},47880:(e,t,r)=>{function n(e,t,r){return e[0]=t,e[1]=r,e}function s(e,t){const r=t[0]-e[0],n=t[1]-e[1];return Math.sqrt(r*r+n*n)}function f(e,t,r,n){const s=t[0],f=t[1];return e[0]=s+n*(r[0]-s),e[1]=f+n*(r[1]-f),e}function i(e,t,r){const n=t[0],s=t[1];return e[0]=r[0]*n+r[2]*s+r[4],e[1]=r[1]*n+r[3]*s+r[5],e}function u(e,t,r,n){const s=t[0]-r[0],f=t[1]-r[1],i=Math.sin(n),u=Math.cos(n);return e[0]=s*u-f*i+r[0],e[1]=s*i+f*u+r[1],e}r.d(t,{e:()=>s,f:()=>n,l:()=>f,r:()=>u,t:()=>i}),r(29794)},46961:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(29768),s=r(66122),f=r(12047),i=(r(92143),r(91306),r(48578),r(60991),r(59465)),u=r(17533);r(21972),r(34250),r(66396),r(22723),r(76506),r(86656),r(31450),r(379),r(62062),r(6540),r(6906),r(79456),r(50406),r(57251);let o=class extends((0,s.J)(f.wq)){constructor(){super({}),this.type="georeferenced",this.isRelative=!1,this.isGeoreferenced=!0}};(0,n._)([(0,i.e)({georeferenced:"georeferenced"},{readOnly:!0})],o.prototype,"type",void 0),o=(0,n._)([(0,u.j)("esri.geometry.support.MeshGeoreferencedVertexSpace")],o);const c=o},45003:(e,t,r)=>{r.d(t,{Z:()=>b});var n,s=r(29768),f=r(12047),i=r(34250),u=(r(91306),r(48578),r(17533)),o=r(65775),c=r(57532),y=r(35861),l=r(45087),a=r(72836),p=r(66106),h=r(34987);r(21972),r(92143),r(31450),r(76506),r(86656),r(66396),r(22723),r(379),r(62062),r(6540),r(6906),r(79456),r(50406),r(60991),r(29794),r(7200),r(82426);let d=n=class extends f.wq{constructor(e){super(e),this.translation=(0,p.c)(),this.rotationAxis=(0,p.g)(h.u),this.rotationAngle=0,this.scale=(0,p.f)(1,1,1)}get rotation(){return(0,h.f)(this.rotationAxis,this.rotationAngle)}set rotation(e){this.rotationAxis=(0,p.a)((0,h.d)(e)),this.rotationAngle=(0,h.g)(e)}get localMatrix(){const e=(0,c.a)();return(0,y.s)(T,(0,h.d)(this.rotation),(0,h.b)(this.rotation)),(0,o.a)(e,T,this.translation,this.scale),e}get localMatrixInverse(){return(0,o.i)((0,c.a)(),this.localMatrix)}applyLocal(e,t){return(0,a.t)(t,e,this.localMatrix)}applyLocalInverse(e,t){return(0,a.t)(t,e,this.localMatrixInverse)}equals(e){return this===e||null!=e&&(0,o.e)(this.localMatrix,e.localMatrix)}clone(){const e={translation:(0,p.a)(this.translation),rotationAxis:(0,p.a)(this.rotationAxis),rotationAngle:this.rotationAngle,scale:(0,p.a)(this.scale)};return new n(e)}};(0,s._)([(0,i.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"translation",void 0),(0,s._)([(0,i.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"rotationAxis",void 0),(0,s._)([(0,i.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"rotationAngle",void 0),(0,s._)([(0,i.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"scale",void 0),(0,s._)([(0,i.Cb)()],d.prototype,"rotation",null),(0,s._)([(0,i.Cb)()],d.prototype,"localMatrix",null),(0,s._)([(0,i.Cb)()],d.prototype,"localMatrixInverse",null),d=n=(0,s._)([(0,u.j)("esri.geometry.support.MeshTransform")],d);const T=(0,l.a)(),b=d}}]);