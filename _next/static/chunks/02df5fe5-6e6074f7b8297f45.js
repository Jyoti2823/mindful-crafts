"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[445],{9745:function(e,t,n){n.d(t,{$:function(){return sP},A:function(){return sW},B:function(){return s_},C:function(){return tt},D:function(){return sf},F:function(){return sw},H:function(){return sJ},N:function(){return F},Q:function(){return sd},R:function(){return z},U:function(){return _},W:function(){return sL},X:function(){return t9},Y:function(){return sS},Z:function(){return sM},_:function(){return g},a:function(){return x},a2:function(){return ss},a6:function(){return sg},aX:function(){return sE},ac:function(){return sa},an:function(){return e8},b:function(){return O},b1:function(){return sX},c:function(){return eL},d:function(){return b},e:function(){return I},f:function(){return t_},g:function(){return sR},h:function(){return sU},i:function(){return te},j:function(){return sK},k:function(){return tS},l:function(){return tC},n:function(){return tI},o:function(){return tb},p:function(){return X},q:function(){return tE},r:function(){return eQ},s:function(){return eN},t:function(){return e6},u:function(){return tw},v:function(){return G},w:function(){return W},y:function(){return J},z:function(){return sT}});var r,i,s,a,o=n(1480),l=n(9074),u=n(6552),c=n(3693),h=n(4575);n(357);var d=n(6300).Buffer;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}f.UNAUTHENTICATED=new f(null),f.GOOGLE_CREDENTIALS=new f("google-credentials-uid"),f.FIRST_PARTY=new f("first-party-uid"),f.MOCK_USER=new f("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let m="12.14.0";function g(e){m=e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let p=new c.Yd("@firebase/firestore");function y(){return p.logLevel}function v(e,...t){if(p.logLevel<=c.in.DEBUG){let n=t.map(T);p.debug(`Firestore (${m}): ${e}`,...n)}}function w(e,...t){if(p.logLevel<=c.in.ERROR){let n=t.map(T);p.error(`Firestore (${m}): ${e}`,...n)}}function E(e,...t){if(p.logLevel<=c.in.WARN){let n=t.map(T);p.warn(`Firestore (${m}): ${e}`,...n)}}function T(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,S(e,r,n)}function S(e,t,n){let r=`FIRESTORE (${m}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(e){r+=" CONTEXT: "+n}throw w(r),Error(r)}function C(e,t,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,e||S(t,i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class k{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(f.UNAUTHENTICATED))}shutdown(){}}class D{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class x{constructor(e){this.t=e,this.currentUser=f.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){C(void 0===this.o,42304);let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new A;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new A,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new A)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(C("string"==typeof t.accessToken,31837,{l:t}),new N(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return C(null===e||"string"==typeof e,2055,{h:e}),new f(e)}}class V{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=f.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);let e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class R{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new V(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(f.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class L{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,o.rh)(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){C(void 0===this.o,3512);let n=e=>{null!=e.error&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let n=e.token!==this.m;return this.m=e.token,v("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.V.getImmediate({optional:!0});e?r(e):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new L(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(C("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new L(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let e=0;e<40;e++)n[e]=Math.floor(256*Math.random());return n}(0);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function P(e,t){return e<t?-1:e>t?1:0}function M(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.charAt(r),i=t.charAt(r);if(n!==i)return U(n)===U(i)?P(n,i):U(n)?1:-1}return P(e.length,t.length)}function U(e){let t=e.charCodeAt(0);return t>=55296&&t<=57343}function q(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let B="__name__";class ${constructor(e,t,n){void 0===t?t=0:t>e.length&&_(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&_(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===$.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof $?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=$.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return P(e.length,t.length)}static compareSegments(e,t){let n=$.isNumericId(e),r=$.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?$.extractNumericId(e).compare($.extractNumericId(t)):M(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return u.z8.fromString(e.substring(4,e.length-2))}}class z extends ${construct(e,t,n){return new z(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let n of e){if(n.indexOf("//")>=0)throw new b(I.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new z(t)}static emptyPath(){return new z([])}}let K=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class j extends ${construct(e,t,n){return new j(e,t,n)}static isValidIdentifier(e){return K.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),j.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===B}static keyField(){return new j([B])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new b(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new b(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new b(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new b(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new j(t)}static emptyPath(){return new j([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(z.fromString(e))}static fromName(e){return new G(z.fromString(e).popFirst(5))}static empty(){return new G(z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===z.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new z(e.slice()))}}function Q(e){if(!G.isDocumentKey(e))throw new b(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function H(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function W(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof e?"a function":_(12329,{type:typeof e})}function J(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new b(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=W(e);throw new b(I.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e,t){let n={typeString:e};return t&&(n.value=t),n}function Y(e,t){let n;if(!H(e))throw new b(I.INVALID_ARGUMENT,"JSON must be an object");for(let r in t)if(t[r]){let i=t[r].typeString,s="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}let a=e[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==s&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new b(I.INVALID_ARGUMENT,n);return!0}class Z{static now(){return Z.fromMillis(Date.now())}static fromDate(e){return Z.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new Z(t,Math.floor((e-1e3*t)*1e6))}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new b(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new b(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?P(this.nanoseconds,e.nanoseconds):P(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Z._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Y(e,Z._jsonSchema))return new Z(e.seconds,e.nanoseconds)}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Z._jsonSchemaVersion="firestore/timestamp/1.0",Z._jsonSchema={type:X("string",Z._jsonSchemaVersion),seconds:X("number"),nanoseconds:X("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Z(0,0))}static max(){return new ee(new Z(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}class et{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}et.UNKNOWN_ID=-1;class en{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new en(ee.min(),G.empty(),-1)}static max(){return new en(ee.max(),G.empty(),-1)}}class er{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(e){if(e.code!==I.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&_(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new es((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof es?t:es.resolve(t)}catch(e){return es.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):es.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):es.reject(t)}static resolve(e){return new es((t,n)=>{t(e)})}static reject(e){return new es((t,n)=>{n(e)})}static waitFor(e){return new es((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=es.resolve(!1);for(let n of e)t=t.next(e=>e?es.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new es((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new es((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}}function ea(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ue&&this.ue(e),e}}function el(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ec(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function eh(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}eo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t){this.comparator=e,this.root=t||em.EMPTY}insert(e,t){return new ed(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,em.BLACK,null,null))}remove(e){return new ed(this.comparator,this.root.remove(e,this.comparator).copy(null,null,em.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ef(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ef(this.root,e,this.comparator,!1)}getReverseIterator(){return new ef(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ef(this.root,e,this.comparator,!0)}}class ef{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class em{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:em.RED,this.left=null!=r?r:em.EMPTY,this.right=null!=i?i:em.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new em(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return em.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return em.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,em.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,em.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw _(27949);return e+(this.isRed()?0:1)}}em.EMPTY=null,em.RED=!0,em.BLACK=!1,em.EMPTY=new class{constructor(){this.size=0}get key(){throw _(57766)}get value(){throw _(16141)}get color(){throw _(16727)}get left(){throw _(29726)}get right(){throw _(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new em(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.comparator=e,this.data=new ed(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ep(this.data.getIterator())}getIteratorFrom(e){return new ep(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof eg)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new eg(this.comparator);return t.data=e,t}}class ep{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e){this.fields=e,e.sort(j.comparator)}static empty(){return new ey([])}unionWith(e){let t=new eg(j.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new ey(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return q(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.binaryString=e}static fromBase64String(e){return new ew(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ev("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new ew(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return P(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ew.EMPTY_BYTE_STRING=new ew("");let eE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eT(e){if(C(!!e,39018),"string"==typeof e){let t=0,n=eE.exec(e);if(C(!!n,46558,{timestamp:e}),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:e_(e.seconds),nanos:e_(e.nanos)}}function e_(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function eS(e){return"string"==typeof e?ew.fromBase64String(e):ew.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eC="server_timestamp",eI="__type__",eb="__previous_value__",eA="__local_write_time__";function eN(e){return(e?.mapValue?.fields||{})[eI]?.stringValue===eC}function ek(e){let t=e.mapValue.fields[eb];return eN(t)?ek(t):t}function eD(e){let t=eT(e.mapValue.fields[eA].timestampValue);return new Z(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,t,n,r,i,s,a,o,l,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l,this.isUsingEmulator=u,this.apiKey=c}}let eV="(default)";class eR{constructor(e,t){this.projectId=e,this.database=t||eV}static empty(){return new eR("","")}get isDefaultDatabase(){return this.database===eV}isEqual(e){return e instanceof eR&&e.projectId===this.projectId&&e.database===this.database}}function eL(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new b(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eR(e.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eO="__type__",eF="__max__",eP={mapValue:{fields:{__type__:{stringValue:eF}}}},eM="__vector__",eU="value";function eq(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eN(e)?4:e2(e)?9007199254740991:e0(e)?10:11:_(28295,{value:e})}function eB(e,t){if(e===t)return!0;let n=eq(e);if(n!==eq(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eD(e).isEqual(eD(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=eT(e.timestampValue),r=eT(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return eS(e.bytesValue).isEqual(eS(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return e_(e.geoPointValue.latitude)===e_(t.geoPointValue.latitude)&&e_(e.geoPointValue.longitude)===e_(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return e_(e.integerValue)===e_(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=e_(e.doubleValue),r=e_(t.doubleValue);return n===r?el(n)===el(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return q(e.arrayValue.values||[],t.arrayValue.values||[],eB);case 10:case 11:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(eu(n)!==eu(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!eB(n[e],r[e])))return!1;return!0}(e,t);default:return _(52216,{left:e})}}function e$(e,t){return void 0!==(e.values||[]).find(e=>eB(e,t))}function ez(e,t){if(e===t)return 0;let n=eq(e),r=eq(t);if(n!==r)return P(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return P(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=e_(e.integerValue||e.doubleValue),r=e_(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return eK(e.timestampValue,t.timestampValue);case 4:return eK(eD(e),eD(t));case 5:return M(e.stringValue,t.stringValue);case 6:return function(e,t){let n=eS(e),r=eS(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=P(n[e],r[e]);if(0!==t)return t}return P(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=P(e_(e.latitude),e_(t.latitude));return 0!==n?n:P(e_(e.longitude),e_(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return ej(e.arrayValue,t.arrayValue);case 10:return function(e,t){let n=e.fields||{},r=t.fields||{},i=n[eU]?.arrayValue,s=r[eU]?.arrayValue,a=P(i?.values?.length||0,s?.values?.length||0);return 0!==a?a:ej(i,s)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===eP.mapValue&&t===eP.mapValue)return 0;if(e===eP.mapValue)return 1;if(t===eP.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=M(r[e],s[e]);if(0!==t)return t;let a=ez(n[r[e]],i[s[e]]);if(0!==a)return a}return P(r.length,s.length)}(e.mapValue,t.mapValue);default:throw _(23264,{he:n})}}function eK(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return P(e,t);let n=eT(e),r=eT(t),i=P(n.seconds,r.seconds);return 0!==i?i:P(n.nanos,r.nanos)}function ej(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=ez(n[e],r[e]);if(t)return t}return P(n.length,r.length)}function eG(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=eT(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?eS(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,G.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,`geo(${n.latitude},${n.longitude})`):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=eG(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+=`${i}:${eG(e.fields[i])}`;return n+"}"}(e.mapValue):_(61005,{value:e})}function eQ(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function eH(e){return!!e&&"integerValue"in e}function eW(e){return eH(e)||!!e&&"doubleValue"in e}function eJ(e){return!!e&&"arrayValue"in e}function eX(e){return!!e&&"nullValue"in e}function eY(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eZ(e){return!!e&&"mapValue"in e}function e0(e){return(e?.mapValue?.fields||{})[eO]?.stringValue===eM}function e1(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){let t={mapValue:{fields:{}}};return ec(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=e1(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=e1(e.arrayValue.values[n]);return t}return{...e}}function e2(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===eF}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(e){this.value=e}static empty(){return new e4({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!eZ(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=e1(t)}setAll(e){let t=j.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=e1(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());eZ(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return eB(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];eZ(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(ec(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new e4(e1(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new e3(e,0,ee.min(),ee.min(),ee.min(),e4.empty(),0)}static newFoundDocument(e,t,n,r){return new e3(e,1,t,ee.min(),n,r,0)}static newNoDocument(e,t){return new e3(e,2,t,ee.min(),ee.min(),e4.empty(),0)}static newUnknownDocument(e,t){return new e3(e,3,t,ee.min(),ee.min(),e4.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(ee.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=e4.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=e4.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof e3&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new e3(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e,t){this.position=e,this.inclusive=t}}function e9(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?G.comparator(G.fromName(a.referenceValue),n.key):ez(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function e5(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!eB(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e8{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e7{}class te extends e7{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new ti(e,t,n):"array-contains"===t?new tl(e,n):"in"===t?new tu(e,n):"not-in"===t?new tc(e,n):"array-contains-any"===t?new th(e,n):new te(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ts(e,n):new ta(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(ez(t,this.value)):null!==t&&eq(this.value)===eq(t)&&this.matchesComparison(ez(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return _(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tt extends e7{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new tt(e,t)}matches(e){return tn(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function tn(e){return"and"===e.op}function tr(e){for(let t of e.filters)if(t instanceof tt)return!1;return!0}class ti extends te{constructor(e,t,n){super(e,t,n),this.key=G.fromName(n.referenceValue)}matches(e){let t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class ts extends te{constructor(e,t){super(e,"in",t),this.keys=to("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ta extends te{constructor(e,t){super(e,"not-in",t),this.keys=to("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function to(e,t){return(t.arrayValue?.values||[]).map(e=>G.fromName(e.referenceValue))}class tl extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eJ(t)&&e$(t.arrayValue,this.value)}}class tu extends te{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&e$(this.value.arrayValue,t)}}class tc extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(e$(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!e$(this.value.arrayValue,t)}}class th extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eJ(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>e$(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.Te=null}}function tf(e,t=null,n=[],r=[],i=null,s=null,a=null){return new td(e,t,n,r,i,s,a)}function tm(e){if(null===e.Te){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof te)return t.field.canonicalString()+t.op.toString()+eG(t.value);if(tr(t)&&tn(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return`${t.op}(${n})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>eG(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>eG(e)).join(",")),e.Te=t}return e.Te}function tg(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof te?n instanceof te&&t.op===n.op&&t.field.isEqual(n.field)&&eB(t.value,n.value):t instanceof tt?n instanceof tt&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void _(19439)}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!e5(e.startAt,t.startAt)&&e5(e.endAt,t.endAt)}function tp(e){return G.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function tv(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function tw(e){return null!==e.collectionGroup}function tE(e){if(null===e.Ie){let t;e.Ie=[];let n=new Set;for(let t of e.explicitOrderBy)e.Ie.push(t),n.add(t.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new eg(j.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{n.has(t.canonicalString())||t.isKeyField()||e.Ie.push(new e8(t,r))}),n.has(j.keyField().canonicalString())||e.Ie.push(new e8(j.keyField(),r))}return e.Ie}function tT(e){return e.Ee||(e.Ee=function(e,t){if("F"===e.limitType)return tf(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new e8(e.field,t)});let n=e.endAt?new e6(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new e6(e.startAt.position,e.startAt.inclusive):null;return tf(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,tE(e))),e.Ee}function t_(e,t){let n=e.filters.concat([t]);return new ty(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function tS(e,t){let n=e.explicitOrderBy.concat([t]);return new ty(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}function tC(e,t,n){return new ty(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function tI(e,t){return new ty(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}function tb(e,t){return new ty(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}function tA(e,t){return tg(tT(e),tT(t))&&e.limitType===t.limitType}function tN(e){return`${tm(tT(e))}|lt:${e.limitType}`}function tk(e){var t;let n;return`Query(target=${n=(t=tT(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof te?`${t.field.canonicalString()} ${t.op} ${eG(t.value)}`:t instanceof tt?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eG(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eG(e)).join(",")),`Target(${n})`}; limitType=${e.limitType})`}function tD(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):G.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of tE(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=e9(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,tE(e),t))&&(!e.endAt||!!function(e,t,n){let r=e9(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,tE(e),t))}function tx(e){return(t,n)=>{let r=!1;for(let i of tE(e)){let e=function(e,t,n){let r=e.field.isKeyField()?G.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ez(r,i):_(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return _(19790,{direction:e.dir})}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ec(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return eh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tR=new ed(G.comparator),tL=new ed(G.comparator);function tO(...e){let t=tL;for(let n of e)t=t.insert(n.key,n);return t}function tF(e){let t=tL;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function tP(){return new tV(e=>e.toString(),(e,t)=>e.isEqual(t))}let tM=new ed(G.comparator),tU=new eg(G.comparator);function tq(...e){let t=tU;for(let n of e)t=t.add(n);return t}let tB=new eg(P);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t$(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:el(t)?"-0":t}}function tz(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tK{constructor(){this._=void 0}}function tj(e,t){return e instanceof tY?eW(t)?t:{integerValue:0}:null}class tG extends tK{}class tQ extends tK{constructor(e){super(),this.elements=e}}function tH(e,t){let n=t4(t);for(let t of e.elements)n.some(e=>eB(e,t))||n.push(t);return{arrayValue:{values:n}}}class tW extends tK{constructor(e){super(),this.elements=e}}function tJ(e,t){let n=t4(t);for(let t of e.elements)n=n.filter(e=>!eB(e,t));return{arrayValue:{values:n}}}class tX extends tK{constructor(e,t){super(),this.serializer=e,this.Ae=t}}class tY extends tX{}class tZ extends tX{}class t0 extends tX{}function t1(e,t,n){if(!eW(t))return e.Ae;let r=n(t2(t),t2(e.Ae));return eH(t)&&eH(e.Ae)?tz(r):t$(e.serializer,r)}function t2(e){return e_(e.integerValue||e.doubleValue)}function t4(e){return eJ(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(e,t){this.field=e,this.transform=t}}class t6{constructor(e,t){this.version=e,this.transformResults=t}}class t9{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new t9}static exists(e){return new t9(void 0,e)}static updateTime(e){return new t9(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function t5(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class t8{}function t7(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new no(e.key,t9.none()):new nn(e.key,e.data,t9.none());{let n=e.data,r=e4.empty(),i=new eg(j.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new nr(e.key,r,new ey(i.toArray()),t9.none())}}function ne(e,t,n,r){return e instanceof nn?function(e,t,n,r){if(!t5(e.precondition,t))return n;let i=e.value.clone(),s=na(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof nr?function(e,t,n,r){if(!t5(e.precondition,t))return n;let i=na(e.fieldTransforms,r,t),s=t.data;return(s.setAll(ni(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):t5(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function nt(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&q(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof tQ&&r instanceof tQ||n instanceof tW&&r instanceof tW?q(n.elements,r.elements,eB):n instanceof tY&&r instanceof tY||n instanceof tZ&&r instanceof tZ||n instanceof t0&&r instanceof t0?eB(n.Ae,r.Ae):n instanceof tG&&r instanceof tG)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class nn extends t8{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class nr extends t8{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ni(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function ns(e,t,n){let r=new Map;C(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let s=0;s<n.length;s++){var i;let a=e[s],o=a.transform,l=t.data.field(a.field);r.set(a.field,(i=n[s],o instanceof tQ?tH(o,l):o instanceof tW?tJ(o,l):i))}return r}function na(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof tG?function(e,t){let n={fields:{[eI]:{stringValue:eC},[eA]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&eN(t)&&(t=ek(t)),t&&(n.fields[eb]=t),{mapValue:n}}(t,s):e instanceof tQ?tH(e,s):e instanceof tW?tJ(e,s):e instanceof tY?function(e,t){let n=tj(e,t),r=t2(n)+t2(e.Ae);return eH(n)&&eH(e.Ae)?tz(r):t$(e.serializer,r)}(e,s):e instanceof tZ?t1(e,s,Math.min):e instanceof t0?t1(e,s,Math.max):void 0)}return r}class no extends t8{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nl extends t8{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof nn?function(e,t,n){let r=e.value.clone(),i=ns(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof nr?function(e,t,n){if(!t5(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=ns(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(ni(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=ne(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=ne(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=tP();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=t7(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(ee.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tq())}isEqual(e){return this.batchId===e.batchId&&q(this.mutations,e.mutations,(e,t)=>nt(e,t))&&q(this.baseMutations,e.baseMutations,(e,t)=>nt(e,t))}}class nc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){C(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=tM,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new nc(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,t){this.count=e,this.unchangedNames=t}}function nf(e){if(void 0===e)return w("GRPC error has no .code"),I.UNKNOWN;switch(e){case r.OK:return I.OK;case r.CANCELLED:return I.CANCELLED;case r.UNKNOWN:return I.UNKNOWN;case r.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case r.INTERNAL:return I.INTERNAL;case r.UNAVAILABLE:return I.UNAVAILABLE;case r.UNAUTHENTICATED:return I.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case r.NOT_FOUND:return I.NOT_FOUND;case r.ALREADY_EXISTS:return I.ALREADY_EXISTS;case r.PERMISSION_DENIED:return I.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case r.ABORTED:return I.ABORTED;case r.OUT_OF_RANGE:return I.OUT_OF_RANGE;case r.UNIMPLEMENTED:return I.UNIMPLEMENTED;case r.DATA_LOSS:return I.DATA_LOSS;default:return _(39323,{code:e})}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nm=new u.z8([4294967295,4294967295],0);function ng(e){let t=(new TextEncoder).encode(e),n=new u.V8;return n.update(t),new Uint8Array(n.digest())}function np(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new u.z8([n,r],0),new u.z8([i,s],0)]}class ny{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new nv(`Invalid padding: ${t}`);if(n<0||e.length>0&&0===this.hashCount)throw new nv(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new nv(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=u.z8.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(u.z8.fromNumber(n)));return 1===r.compare(nm)&&(r=new u.z8([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.ge)return!1;let[t,n]=np(ng(e));for(let e=0;e<this.hashCount;e++){let r=this.ye(t,n,e);if(!this.we(r))return!1}return!0}static create(e,t,n){let r=new ny(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.ge)return;let[t,n]=np(ng(e));for(let e=0;e<this.hashCount;e++){let r=this.ye(t,n,e);this.Se(r)}}Se(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class nv extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,nE.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new nw(ee.min(),r,new ed(P),tR,tq())}}class nE{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new nE(n,t,tq(),tq(),tq())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class n_{constructor(e,t){this.targetId=e,this.Ce=t}}class nS{constructor(e,t,n=ew.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class nC{constructor(e){this.targetId=e,this.ve=0,this.Fe=nN(),this.Me=ew.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=tq(),t=tq(),n=tq();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:_(38017,{changeType:i})}}),new nE(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=nN()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,C(this.ve>=0,3241,{ve:this.ve,targetId:this.targetId})}Qe(){this.Oe=!0,this.xe=!0}}let nI="WatchChangeAggregator";class nb{constructor(e){this.Ge=e,this.ze=new Map,this.je=tR,this.Je=nA(),this.He=nA(),this.Ze=new ed(P)}Xe(e){for(let t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(let t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{let n=this.ze.get(t);if(n)switch(e.state){case 0:this.nt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Le(e.resumeToken));break;default:_(56790,{state:e.state})}else v(nI,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((e,n)=>{this.nt(n)&&t(n)})}it(e){let t=e.targetId,n=e.Ce.count,r=this.st(t);if(r){let i=r.target;if(tp(i)){if(0===n){let e=new G(i.path);this.et(t,e,e3.newNoDocument(e,ee.min()))}else C(1===n,20013,{expectedCount:n})}else{let r=this.ot(t);if(r!==n){let n=this._t(e),i=n?this.ut(n,e,r):1;0!==i&&(this.rt(t),this.Ze=this.Ze.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}_t(e){let t,n;let r=e.Ce.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=eS(i).toUint8Array()}catch(e){if(e instanceof ev)return E("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new ny(t,s,a)}catch(e){return E(e instanceof nv?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.ge?null:n}ut(e,t,n){return t.Ce.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){let n=this.Ge.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Ge.lt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.et(t,n,null),r++)}),r}Pt(e){let t=new Map;this.ze.forEach((n,r)=>{let i=this.st(r);if(i){if(n.current&&tp(i.target)){let t=new G(i.target.path);this.Tt(t).has(r)||this.It(r,t)||this.et(r,t,e3.newNoDocument(t,e))}n.Be&&(t.set(r,n.ke()),n.qe())}});let n=tq();this.He.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.st(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.je.forEach((t,n)=>n.setReadTime(e));let r=new nw(e,t,this.Ze,this.je,n);return this.je=tR,this.Je=nA(),this.He=nA(),this.Ze=new ed(P),r}Ye(e,t){let n=this.ze.get(e);if(!n||!this.nt(e))return void v(nI,`addDocumentToTarget received document for unknown inactive target (${e})`);let r=this.It(e,t.key)?2:0;n.Ke(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Tt(t.key).add(e)),this.He=this.He.insert(t.key,this.Et(t.key).add(e))}et(e,t,n){let r=this.ze.get(e);r&&this.nt(e)?(this.It(e,t)?r.Ke(t,1):r.Ue(t),this.He=this.He.insert(t,this.Et(t).delete(e)),this.He=this.He.insert(t,this.Et(t).add(e)),n&&(this.je=this.je.insert(t,n))):v(nI,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ze.delete(e)}ot(e){let t=this.ze.get(e);if(!t)return 0;let n=t.ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){let t=this.ze.get(e);t||(v(nI,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new nC(e),this.ze.set(e,t)),t.$e()}Et(e){let t=this.He.get(e);return t||(t=new eg(P),this.He=this.He.insert(e,t)),t}Tt(e){let t=this.Je.get(e);return t||(t=new eg(P),this.Je=this.Je.insert(e,t)),t}nt(e){let t=null!==this.st(e);return t||v(nI,"Detected inactive target",e),t}st(e){let t=this.ze.get(e);return void 0===t||t.Ne?null:this.Ge.Rt(e)}rt(e){this.ze.set(e,new nC(e)),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function nA(){return new ed(G.comparator)}function nN(){return new ed(G.comparator)}let nk={asc:"ASCENDING",desc:"DESCENDING"},nD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nx={and:"AND",or:"OR"};class nV{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function nR(e,t){return e.useProto3Json||null==t?t:{value:t}}function nL(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nO(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function nF(e){return C(!!e,49232),ee.fromTimestamp(function(e){let t=eT(e);return new Z(t.seconds,t.nanos)}(e))}function nP(e,t){return nM(e,t).canonicalString()}function nM(e,t){let n=new z(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?n:n.child(t)}function nU(e){let t=z.fromString(e);return C(nH(t),10190,{key:t.toString()}),t}function nq(e,t){return nP(e.databaseId,t.path)}function nB(e,t){let n=nU(t);if(n.get(1)!==e.databaseId.projectId)throw new b(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new b(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new G(nK(n))}function n$(e,t){return nP(e.databaseId,t)}function nz(e){return new z(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function nK(e){return C(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function nj(e,t,n){return{name:nq(e,t),fields:n.value.mapValue.fields}}function nG(e){return{fieldPath:e.canonicalString()}}function nQ(e){return j.fromServerFormat(e.fieldPath)}function nH(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}function nW(e){return!!e&&"function"==typeof e._toProto&&"ProtoValue"===e._protoValueType}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ{constructor(e,t,n,r,i=ee.min(),s=ee.min(),a=ew.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new nJ(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new nJ(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nJ(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nJ(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nX{constructor(e){this.gt=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nY{constructor(){}bt(e,t){this.Dt(e,t),t.Ct()}Dt(e,t){if("nullValue"in e)this.vt(t,5);else if("booleanValue"in e)this.vt(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.vt(t,15),t.Ft(e_(e.integerValue));else if("doubleValue"in e){let n=e_(e.doubleValue);isNaN(n)?this.vt(t,13):(this.vt(t,15),el(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.vt(t,20),"string"==typeof n&&(n=eT(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.vt(t,30),t.Nt(eS(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.vt(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?e2(e)?this.vt(t,Number.MAX_SAFE_INTEGER):e0(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):_(19022,{Kt:e})}xt(e,t){this.vt(t,25),this.Ut(e,t)}Ut(e,t){t.Mt(e)}kt(e,t){let n=e.fields||{};for(let e of(this.vt(t,55),Object.keys(n)))this.xt(e,t),this.Dt(n[e],t)}Lt(e,t){let n=e.fields||{};this.vt(t,53);let r=n[eU].arrayValue?.values?.length||0;this.vt(t,15),t.Ft(e_(r)),this.xt(eU,t),this.Dt(n[eU],t)}qt(e,t){let n=e.values||[];for(let e of(this.vt(t,50),n))this.Dt(e,t)}Bt(e,t){this.vt(t,37),G.fromName(e).path.forEach(e=>{this.vt(t,60),this.Ut(e,t)})}vt(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}nY.$t=new nY;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nZ{constructor(){this.Sn=new n0}addToCollectionParentIndex(e,t){return this.Sn.add(t),es.resolve()}getCollectionParents(e,t){return es.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return es.resolve()}deleteFieldIndex(e,t){return es.resolve()}deleteAllFieldIndexes(e){return es.resolve()}createTargetIndexes(e,t){return es.resolve()}getDocumentsMatchingTarget(e,t){return es.resolve(null)}getIndexType(e,t){return es.resolve(0)}getFieldIndexes(e,t){return es.resolve([])}getNextCollectionGroupToUpdate(e){return es.resolve(null)}getMinOffset(e,t){return es.resolve(en.min())}getMinOffsetFromCollectionGroup(e,t){return es.resolve(en.min())}updateCollectionGroup(e,t,n){return es.resolve()}updateIndexEntries(e,t){return es.resolve()}}class n0{constructor(){this.index={}}add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new eg(z.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new eg(z.comparator)).toArray()}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n1={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class n2{static withCacheSize(e){return new n2(e,n2.DEFAULT_COLLECTION_PERCENTILE,n2.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */n2.DEFAULT_COLLECTION_PERCENTILE=10,n2.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,n2.DEFAULT=new n2(41943040,n2.DEFAULT_COLLECTION_PERCENTILE,n2.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),n2.DISABLED=new n2(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e){this.ir=e}next(){return this.ir+=2,this.ir}static sr(){return new n4(0)}static _r(){return new n4(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n3="LruGarbageCollector";function n6([e,t],[n,r]){let i=P(e,n);return 0===i?P(t,r):i}class n9{constructor(e){this.hr=e,this.buffer=new eg(n6),this.Pr=0}Tr(){return++this.Pr}Ir(e){let t=[e,this.Tr()];if(this.buffer.size<this.hr)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>n6(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class n5{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Er=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Rr(6e4)}stop(){this.Er&&(this.Er.cancel(),this.Er=null)}get started(){return null!==this.Er}Rr(e){v(n3,`Garbage collection scheduled in ${e}ms`),this.Er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ea(e)?v(n3,"Ignoring IndexedDB error during garbage collection: ",e):await ei(e)}await this.Rr(3e5)})}}class n8{constructor(e,t){this.Ar=e,this.params=t}calculateTargetCount(e,t){return this.Ar.Vr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return es.resolve(eo.ce);let n=new n9(t);return this.Ar.forEachTarget(e,e=>n.Ir(e.sequenceNumber)).next(()=>this.Ar.dr(e,e=>n.Ir(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Ar.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Ar.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(v("LruGarbageCollector","Garbage collection skipped; disabled"),es.resolve(n1)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(v("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),n1):this.mr(e,t))}getCacheSize(e){return this.Ar.getCacheSize(e)}mr(e,t){let n,r,i,s,a,o,l;let u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(v("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(l=Date.now(),y()<=c.in.DEBUG&&v("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${r} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(o-a)+"ms\n"+`	Removed ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-u}ms`),es.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n7{constructor(){this.changes=new tV(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,e3.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?es.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&ne(n.mutation,e,ey.empty(),Z.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tq()).next(()=>t))}getLocalViewOfDocuments(e,t,n=tq()){let r=tP();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=tO();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=tP();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,tq()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=tR,s=tP(),a=tP();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof nr)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),ne(a.mutation,t,a.mutation.getFieldMask(),Z.now())):s.set(t.key,ey.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>a.set(e,new re(t,s.get(e)??null))),a))}recalculateAndSaveOverlays(e,t){let n=tP(),r=new ed((e,t)=>e-t),i=tq();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||ey.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||tq()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=tP();l.forEach(e=>{if(!i.has(e)){let r=t7(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return es.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return G.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):tw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):es.resolve(tP()),a=-1,o=i;return s.next(t=>es.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?es.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,tq())).next(e=>({batchId:a,changes:tF(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next(e=>{let t=tO();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=tO();return this.indexManager.getCollectionParents(e,i).next(a=>es.forEach(a,a=>{let o=new ty(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,e3.newInvalidDocument(r)))});let n=tO();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&ne(s.mutation,r,ey.empty(),Z.now()),tD(t,r)&&(n=n.insert(e,r))}),n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.serializer=e,this.Or=new Map,this.Nr=new Map}getBundleMetadata(e,t){return es.resolve(this.Or.get(t))}saveBundleMetadata(e,t){return this.Or.set(t.id,{id:t.id,version:t.version,createTime:nF(t.createTime)}),es.resolve()}getNamedQuery(e,t){return es.resolve(this.Nr.get(t))}saveNamedQuery(e,t){return this.Nr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=nU(e);return 4===t.length?z.emptyPath():nK(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){C(1===s,65062);let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=nQ(e.unaryFilter.field);return te.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=nQ(e.unaryFilter.field);return te.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=nQ(e.unaryFilter.field);return te.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=nQ(e.unaryFilter.field);return te.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _(61313);default:return _(60726)}}(t):void 0!==t.fieldFilter?te.create(nQ(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _(58110);default:return _(50506)}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?tt.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return _(1026)}}(t.compositeFilter.op)):_(30097,{filter:t})}(e);return n instanceof tt&&tr(t=n)&&tn(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new e8(nQ(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let c=null;i.startAt&&(c=function(e){let t=!!e.before;return new e6(e.values||[],t)}(i.startAt));let h=null;return i.endAt&&(h=function(e){let t=!e.before;return new e6(e.values||[],t)}(i.endAt)),new ty(r,a,l,o,u,"F",c,h)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?tC(t,t.limit,"L"):t}(t.bundledQuery),readTime:nF(t.readTime)}),es.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.overlays=new ed(G.comparator),this.Br=new Map}getOverlay(e,t){return es.resolve(this.overlays.get(t))}getOverlays(e,t){let n=tP();return es.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.wt(e,t,r)}),es.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.Br.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Br.delete(n)),es.resolve()}getOverlaysForCollection(e,t,n){let r=tP(),i=t.length+1,s=new G(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return es.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ed((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=tP(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=tP(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return es.resolve(a)}wt(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.Br.get(r.largestBatchId).delete(n.key);this.Br.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new nh(t,n));let i=this.Br.get(t);void 0===i&&(i=tq(),this.Br.set(t,i)),this.Br.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.sessionToken=ew.EMPTY_BYTE_STRING}getSessionToken(e){return es.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,es.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.Lr=new eg(ra.kr),this.qr=new eg(ra.Kr)}isEmpty(){return this.Lr.isEmpty()}addReference(e,t){let n=new ra(e,t);this.Lr=this.Lr.add(n),this.qr=this.qr.add(n)}Ur(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.$r(new ra(e,t))}Wr(e,t){e.forEach(e=>this.removeReference(e,t))}Qr(e){let t=new G(new z([])),n=new ra(t,e),r=new ra(t,e+1),i=[];return this.qr.forEachInRange([n,r],e=>{this.$r(e),i.push(e.key)}),i}Gr(){this.Lr.forEach(e=>this.$r(e))}$r(e){this.Lr=this.Lr.delete(e),this.qr=this.qr.delete(e)}zr(e){let t=new G(new z([])),n=new ra(t,e),r=new ra(t,e+1),i=tq();return this.qr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new ra(e,0),n=this.Lr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class ra{constructor(e,t){this.key=e,this.jr=t}static kr(e,t){return G.comparator(e.key,t.key)||P(e.jr,t.jr)}static Kr(e,t){return P(e.jr,t.jr)||G.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Xn=1,this.Jr=new eg(ra.kr)}checkEmpty(e){return es.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.Xn;this.Xn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new nu(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.Jr=this.Jr.add(new ra(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return es.resolve(s)}lookupMutationBatch(e,t){return es.resolve(this.Hr(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Zr(t+1),r=n<0?0:n;return es.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return es.resolve(0===this.mutationQueue.length?-1:this.Xn-1)}getAllMutationBatches(e){return es.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new ra(t,0),r=new ra(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([n,r],e=>{let t=this.Hr(e.jr);i.push(t)}),es.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new eg(P);return t.forEach(e=>{let t=new ra(e,0),r=new ra(e,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([t,r],e=>{n=n.add(e.jr)})}),es.resolve(this.Xr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;G.isDocumentKey(i)||(i=i.child(""));let s=new ra(new G(i),0),a=new eg(P);return this.Jr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.jr)),!0)},s),es.resolve(this.Xr(a))}Xr(e){let t=[];return e.forEach(e=>{let n=this.Hr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){C(0===this.Yr(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Jr;return es.forEach(t.mutations,r=>{let i=new ra(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Jr=n})}tr(e){}containsKey(e,t){let n=new ra(t,0),r=this.Jr.firstAfterOrEqual(n);return es.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,es.resolve()}Yr(e,t){return this.Zr(e)}Zr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Hr(e){let t=this.Zr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this.ei=e,this.docs=new ed(G.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ei(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return es.resolve(n?n.document.mutableCopy():e3.newInvalidDocument(t))}getEntries(e,t){let n=tR;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():e3.newInvalidDocument(e))}),es.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=tR,s=t.path,a=new G(s.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=G.comparator(e.documentKey,t.documentKey))?n:P(e.largestBatchId,t.largestBatchId)}(new en(a.readTime,a.key,-1),n)||(r.has(a.key)||tD(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return es.resolve(i)}getAllFromCollectionGroup(e,t,n,r){_(9500)}ti(e,t){return es.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new ru(this)}getSize(e){return es.resolve(this.size)}}class ru extends n7{constructor(e){super(),this.Fr=e}applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Fr.addEntry(e,r)):this.Fr.removeEntry(n)}),es.waitFor(t)}getFromCache(e,t){return this.Fr.getEntry(e,t)}getAllFromCache(e,t){return this.Fr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this.persistence=e,this.ni=new tV(e=>tm(e),tg),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.ri=0,this.ii=new rs,this.targetCount=0,this.si=n4.sr()}forEachTarget(e,t){return this.ni.forEach((e,n)=>t(n)),es.resolve()}getLastRemoteSnapshotVersion(e){return es.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return es.resolve(this.ri)}allocateTargetId(e){return this.highestTargetId=this.si.next(),es.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ri&&(this.ri=t),es.resolve()}cr(e){this.ni.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.si=new n4(t),this.highestTargetId=t),e.sequenceNumber>this.ri&&(this.ri=e.sequenceNumber)}addTargetData(e,t){return this.cr(t),this.targetCount+=1,es.resolve()}updateTargetData(e,t){return this.cr(t),es.resolve()}removeTargetData(e,t){return this.ni.delete(t.target),this.ii.Qr(t.targetId),this.targetCount-=1,es.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.ni.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.ni.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),es.waitFor(i).next(()=>r)}getTargetCount(e){return es.resolve(this.targetCount)}getTargetData(e,t){let n=this.ni.get(t)||null;return es.resolve(n)}addMatchingKeys(e,t,n){return this.ii.Ur(t,n),es.resolve()}removeMatchingKeys(e,t,n){this.ii.Wr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),es.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ii.Qr(t),es.resolve()}getMatchingKeysForTargetId(e,t){let n=this.ii.zr(t);return es.resolve(n)}containsKey(e,t){return es.resolve(this.ii.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t){this.oi={},this.overlays={},this._i=new eo(0),this.ai=!1,this.ai=!0,this.ui=new ri,this.referenceDelegate=e(this),this.ci=new rc(this),this.indexManager=new nZ,this.remoteDocumentCache=new rl(e=>this.referenceDelegate.li(e)),this.serializer=new nX(t),this.hi=new rn(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ai=!1,Promise.resolve()}get started(){return this.ai}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rr,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.oi[e.toKey()];return n||(n=new ro(t,this.referenceDelegate),this.oi[e.toKey()]=n),n}getGlobalsCache(){return this.ui}getTargetCache(){return this.ci}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.hi}runTransaction(e,t,n){v("MemoryPersistence","Starting transaction:",e);let r=new rd(this._i.next());return this.referenceDelegate.Pi(),n(r).next(e=>this.referenceDelegate.Ti(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ii(e,t){return es.or(Object.values(this.oi).map(n=>()=>n.containsKey(e,t)))}}class rd extends er{constructor(e){super(),this.currentSequenceNumber=e}}class rf{constructor(e){this.persistence=e,this.Ei=new rs,this.Ri=null}static Ai(e){return new rf(e)}get Vi(){if(this.Ri)return this.Ri;throw _(60996)}addReference(e,t,n){return this.Ei.addReference(n,t),this.Vi.delete(n.toString()),es.resolve()}removeReference(e,t,n){return this.Ei.removeReference(n,t),this.Vi.add(n.toString()),es.resolve()}markPotentiallyOrphaned(e,t){return this.Vi.add(t.toString()),es.resolve()}removeTarget(e,t){this.Ei.Qr(t.targetId).forEach(e=>this.Vi.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Vi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Pi(){this.Ri=new Set}Ti(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return es.forEach(this.Vi,n=>{let r=G.fromPath(n);return this.di(e,r).next(e=>{e||t.removeEntry(r,ee.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.di(e,t).next(e=>{e?this.Vi.delete(t.toString()):this.Vi.add(t.toString())})}li(e){return 0}di(e,t){return es.or([()=>es.resolve(this.Ei.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class rm{constructor(e,t){this.persistence=e,this.mi=new tV(e=>(function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let n=t,r=e.length;for(let t=0;t<r;t++){let r=e.charAt(t);switch(r){case"\0":n+="\x01\x10";break;case"\x01":n+="\x01\x11";break;default:n+=r}}return n}(e.get(n),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new n8(this,t)}static Ai(e,t){return new rm(e,t)}Pi(){}Ti(e){return es.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Vr(e){let t=this.gr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}gr(e){let t=0;return this.dr(e,e=>{t++}).next(()=>t)}dr(e,t){return es.forEach(this.mi,(n,r)=>this.yr(e,n,r).next(e=>e?es.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0,r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ti(e,r=>this.yr(e,r,t).next(e=>{e||(n++,i.removeEntry(r,ee.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.mi.set(t,e.currentSequenceNumber),es.resolve()}removeTarget(e,t){let n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.mi.set(n,e.currentSequenceNumber),es.resolve()}removeReference(e,t,n){return this.mi.set(n,e.currentSequenceNumber),es.resolve()}updateLimboDocument(e,t){return this.mi.set(t,e.currentSequenceNumber),es.resolve()}li(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(eq(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let n=ek(t);return n?16+e(n):16;case 5:return 2*t.stringValue.length;case 6:return eS(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,n)=>t+e(n),0);case 10:case 11:var r;let i;return r=t.mapValue,i=0,ec(r.fields,(t,n)=>{i+=t.length+e(n)}),i;default:throw _(13486,{value:t})}}(e.data.value)),t}yr(e,t,n){return es.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.mi.get(t);return es.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ps=n,this.Ts=r}static Is(e,t){let n=tq(),r=tq();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new rg(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(){this.Es=!1,this.Rs=!1,this.As=100,this.Vs=(0,l.G6)()?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}((0,l.z$)())>0?6:4}initialize(e,t){this.ds=e,this.indexManager=t,this.Es=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.fs(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.gs(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new rp;return this.ps(e,t,n).next(r=>{if(i.result=r,this.Rs)return this.ys(e,t,n,r.size)})}).next(()=>i.result)}ys(e,t,n,r){return n.documentReadCount<this.As?(y()<=c.in.DEBUG&&v("QueryEngine","SDK will not create cache indexes for query:",tk(t),"since it only creates cache indexes for collection contains","more than or equal to",this.As,"documents"),es.resolve()):(y()<=c.in.DEBUG&&v("QueryEngine","Query:",tk(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Vs*r?(y()<=c.in.DEBUG&&v("QueryEngine","The SDK decides to create cache indexes for query:",tk(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tT(t))):es.resolve())}fs(e,t){if(tv(t))return es.resolve(null);let n=tT(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=tT(t=tC(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=tq(...r);return this.ds.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.ws(t,r);return this.Ss(t,s,i,n.readTime)?this.fs(e,tC(t,null,"F")):this.bs(e,s,t,n)}))})))}gs(e,t,n,r){return tv(t)||r.isEqual(ee.min())?es.resolve(null):this.ds.getDocuments(e,n).next(i=>{let s=this.ws(t,i);return this.Ss(t,s,n,r)?es.resolve(null):(y()<=c.in.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),tk(t)),this.bs(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new en(ee.fromTimestamp(1e9===r?new Z(n+1,0):new Z(n,r)),G.empty(),-1)}(r,0)).next(e=>e))})}ws(e,t){let n=new eg(tx(e));return t.forEach((t,r)=>{tD(e,r)&&(n=n.add(r))}),n}Ss(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ps(e,t,n){return y()<=c.in.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",tk(t)),this.ds.getDocumentsMatchingQuery(e,t,en.min(),n)}bs(e,t,n,r){return this.ds.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rv="LocalStore";class rw{constructor(e,t,n,r){this.persistence=e,this.Ds=t,this.serializer=r,this.Cs=new ed(P),this.vs=new tV(e=>tm(e),tg),this.Fs=new Map,this.Ms=e.getRemoteDocumentCache(),this.ci=e.getTargetCache(),this.hi=e.getBundleCache(),this.xs(n)}xs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rt(this.Ms,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ms.setIndexManager(this.indexManager),this.Ds.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Cs))}}async function rE(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.xs(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=tq();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({Os:e,removedBatchIds:i,addedBatchIds:s}))})})}function rT(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ci.getLastRemoteSnapshotVersion(t))}async function r_(e,t,n){let r=e.Cs.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!ea(e))throw e;v(rv,`Failed to update sequence numbers for target ${t}: ${e}`)}e.Cs=e.Cs.remove(t),e.vs.delete(r.target)}function rS(e,t,n){let r=ee.min(),i=tq();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.vs.get(n);return void 0!==r?es.resolve(e.Cs.get(r)):e.ci.getTargetData(t,n)})(e,s,tT(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.ci.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Ds.getDocumentsMatchingQuery(s,t,n?r:ee.min(),n?i:tq())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.Fs.get(r)||ee.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.Fs.set(r,s),{documents:n,Ls:i}}))}class rC{constructor(){this.activeTargetIds=tB}Ws(e){this.activeTargetIds=this.activeTargetIds.add(e)}Qs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}$s(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class rI{constructor(){this.Co=new rC,this.vo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Co.Ws(e),this.vo[e]||"not-current"}updateQueryState(e,t,n){this.vo[e]=t}removeLocalQueryTarget(e){this.Co.Qs(e)}isLocalQueryTarget(e){return this.Co.activeTargetIds.has(e)}clearQueryState(e){delete this.vo[e]}getAllActiveQueryTargets(){return this.Co.activeTargetIds}isActiveQueryTarget(e){return this.Co.activeTargetIds.has(e)}start(){return this.Co=new rC,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{Fo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rA="ConnectivityMonitor";class rN{constructor(){this.Mo=()=>this.xo(),this.Oo=()=>this.No(),this.Bo=[],this.Lo()}Fo(e){this.Bo.push(e)}shutdown(){window.removeEventListener("online",this.Mo),window.removeEventListener("offline",this.Oo)}Lo(){window.addEventListener("online",this.Mo),window.addEventListener("offline",this.Oo)}xo(){for(let e of(v(rA,"Network connectivity changed: AVAILABLE"),this.Bo))e(0)}No(){for(let e of(v(rA,"Network connectivity changed: UNAVAILABLE"),this.Bo))e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rk=null;function rD(){return null===rk?rk=268435456+Math.round(2147483648*Math.random()):rk++,"0x"+rk.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rx="RestConnection",rV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class rR{get ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Ko=`projects/${n}/databases/${r}`,this.Uo=this.databaseId.database===eV?`project_id=${n}`:`project_id=${n}&database_id=${r}`}$o(e,t,n,r,i){let s=rD(),a=this.Wo(e,t.toUriEncodedString());v(rx,`Sending RPC '${e}' ${s}:`,a,n);let o={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Uo};this.Qo(o,r,i);let{host:u}=new URL(a),c=(0,l.Xx)(u);return this.Go(e,a,o,n,c).then(t=>(v(rx,`Received RPC '${e}' ${s}: `,t),t),t=>{throw E(rx,`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t})}zo(e,t,n,r,i,s){return this.$o(e,t,n,r,i)}Qo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+m,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Wo(e,t){let n=rV[e],r=`${this.qo}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e){this.jo=e.jo,this.Jo=e.Jo}Ho(e){this.Zo=e}Xo(e){this.Yo=e}e_(e){this.t_=e}onMessage(e){this.n_=e}close(){this.Jo()}send(e){this.jo(e)}r_(){this.Zo()}i_(){this.Yo()}s_(e){this.t_(e)}o_(e){this.n_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rO="WebChannelConnection",rF=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};class rP extends rR{constructor(e){super(e),this.__=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static a_(){rP.u_||(rF((0,h.FJ)(),h.ju.STAT_EVENT,e=>{e.stat===h.kN.PROXY?v(rO,"STAT_EVENT: detected buffering proxy"):e.stat===h.kN.NOPROXY&&v(rO,"STAT_EVENT: detected no buffering proxy")}),rP.u_=!0)}Go(e,t,n,r,i){let s=rD();return new Promise((i,a)=>{let o=new h.JJ;o.setWithCredentials(!0),o.listenOnce(h.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case h.jK.NO_ERROR:let t=o.getResponseJson();v(rO,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case h.jK.TIMEOUT:v(rO,`RPC '${e}' ${s} timed out`),a(new b(I.DEADLINE_EXCEEDED,"Request time out"));break;case h.jK.HTTP_ERROR:let n=o.getStatus();if(v(rO,`RPC '${e}' ${s} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=e?.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(t)>=0?t:I.UNKNOWN}(t.status);a(new b(e,t.message))}else a(new b(I.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new b(I.UNAVAILABLE,"Connection failed."));break;default:_(9055,{c_:e,streamId:s,l_:o.getLastErrorCode(),h_:o.getLastError()})}}finally{v(rO,`RPC '${e}' ${s} completed.`)}});let l=JSON.stringify(r);v(rO,`RPC '${e}' ${s} sending request:`,r),o.send(t,"POST",l,n,15)})}P_(e,t,n){let i=rD(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Qo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;let u=s.join("");v(rO,`Creating RPC '${e}' stream ${i}: ${u}`,o);let c=a.createWebChannel(u,o);this.T_(c);let d=!1,f=!1,m=new rL({jo:t=>{f?v(rO,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(d||(v(rO,`Opening RPC '${e}' stream ${i} transport.`),c.open(),d=!0),v(rO,`RPC '${e}' stream ${i} sending:`,t),c.send(t))},Jo:()=>c.close()});return rF(c,h.ii.EventType.OPEN,()=>{f||(v(rO,`RPC '${e}' stream ${i} transport opened.`),m.r_())}),rF(c,h.ii.EventType.CLOSE,()=>{f||(f=!0,v(rO,`RPC '${e}' stream ${i} transport closed`),m.s_(),this.I_(c))}),rF(c,h.ii.EventType.ERROR,t=>{f||(f=!0,E(rO,`RPC '${e}' stream ${i} transport errored. Name:`,t.name,"Message:",t.message),m.s_(new b(I.UNAVAILABLE,"The operation could not be completed")))}),rF(c,h.ii.EventType.MESSAGE,t=>{if(!f){let n=t.data[0];C(!!n,16349);let s=n?.error||n[0]?.error;if(s){v(rO,`RPC '${e}' stream ${i} received error:`,s);let t=s.status,n=function(e){let t=r[e];if(void 0!==t)return nf(t)}(t),a=s.message;"NOT_FOUND"===t&&a.includes("database")&&a.includes("does not exist")&&a.includes(this.databaseId.database)&&E(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),void 0===n&&(n=I.INTERNAL,a="Unknown error status: "+t+" with message "+s.message),f=!0,m.s_(new b(n,a)),c.close()}else v(rO,`RPC '${e}' stream ${i} received:`,n),m.o_(n)}}),rP.a_(),setTimeout(()=>{m.i_()},0),m}terminate(){this.__.forEach(e=>e.close()),this.__=[]}T_(e){this.__.push(e)}I_(e){this.__=this.__.filter(t=>t===e)}Qo(e,t,n){super.Qo(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return(0,h.UE)()}}function rM(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rU(e){return new nV(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rP.u_=!1;class rq{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Di=e,this.timerId=t,this.E_=n,this.R_=r,this.A_=i,this.V_=0,this.d_=null,this.m_=Date.now(),this.reset()}reset(){this.V_=0}f_(){this.V_=this.A_}g_(e){this.cancel();let t=Math.floor(this.V_+this.p_()),n=Math.max(0,Date.now()-this.m_),r=Math.max(0,t-n);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.d_=this.Di.enqueueAfterDelay(this.timerId,r,()=>(this.m_=Date.now(),e())),this.V_*=this.R_,this.V_<this.E_&&(this.V_=this.E_),this.V_>this.A_&&(this.V_=this.A_)}y_(){null!==this.d_&&(this.d_.skipDelay(),this.d_=null)}cancel(){null!==this.d_&&(this.d_.cancel(),this.d_=null)}p_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rB="PersistentStream";class r${constructor(e,t,n,r,i,s,a,o){this.Di=e,this.w_=n,this.S_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.b_=0,this.D_=null,this.C_=null,this.stream=null,this.v_=0,this.F_=new rq(e,t)}M_(){return 1===this.state||5===this.state||this.x_()}x_(){return 2===this.state||3===this.state}start(){this.v_=0,4!==this.state?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&null===this.D_&&(this.D_=this.Di.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}async close(e,t){this.q_(),this.K_(),this.F_.cancel(),this.b_++,4!==e?this.F_.reset():t&&t.code===I.RESOURCE_EXHAUSTED?(w(t.toString()),w("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===I.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.e_(t)}U_(){}auth(){this.state=1;let e=this.W_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.b_===t&&this.Q_(e,n)},t=>{e(()=>{let e=new b(I.UNKNOWN,"Fetching auth token failed: "+t.message);return this.G_(e)})})}Q_(e,t){let n=this.W_(this.b_);this.stream=this.z_(e,t),this.stream.Ho(()=>{n(()=>this.listener.Ho())}),this.stream.Xo(()=>{n(()=>(this.state=2,this.C_=this.Di.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.Xo()))}),this.stream.e_(e=>{n(()=>this.G_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.v_?this.j_(e):this.onNext(e))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return v(rB,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Di.enqueueAndForget(()=>this.b_===e?t():(v(rB,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rz extends r${constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:_(39313,{state:r}),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(C(void 0===i||"string"==typeof i,58123),ew.fromBase64String(i||"")):(C(void 0===i||i instanceof d||i instanceof Uint8Array,16193),ew.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new nS(s,a,o,l&&new b(void 0===l.code?I.UNKNOWN:nf(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=nB(e,r.document.name),s=nF(r.document.updateTime),a=r.document.createTime?nF(r.document.createTime):ee.min(),o=new e4({mapValue:{fields:r.document.fields}}),l=e3.newFoundDocument(i,s,a,o);n=new nT(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=nB(e,r.document),s=r.readTime?nF(r.readTime):ee.min(),a=e3.newNoDocument(i,s);n=new nT([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=nB(e,r.document);n=new nT([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return _(11601,{At:t});{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new nd(r,i);n=new n_(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return ee.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?ee.min():t.readTime?nF(t.readTime):ee.min()}(e);return this.listener.J_(t,n)}H_(e){let t={};t.database=nz(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=tp(r)?{documents:{documents:[n$(e,r.path)]}}:{query:function(e,t){var n,r;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=n$(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof te?function(e){if("=="===e.op){if(eY(e.value))return{unaryFilter:{field:nG(e.field),op:"IS_NAN"}};if(eX(e.value))return{unaryFilter:{field:nG(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eY(e.value))return{unaryFilter:{field:nG(e.field),op:"IS_NOT_NAN"}};if(eX(e.value))return{unaryFilter:{field:nG(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nG(e.field),op:nD[e.op],value:e.value}}}(t):t instanceof tt?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:nx[t.op],filters:n}}}(t):_(54877,{filter:t})}(tt.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:nG(e.field),direction:nk[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=nR(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(s.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),{dt:s,parent:i}}(e,r).dt}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=nO(e,t.resumeToken);let r=nR(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(ee.min())>0){n.readTime=nL(e,t.snapshotVersion.toTimestamp());let r=nR(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.k_(t)}Z_(e){let t={};t.database=nz(this.serializer),t.removeTarget=e,this.k_(t)}}class rK extends r${constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get X_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.X_&&this.Y_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return C(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,C(!e.writeResults||0===e.writeResults.length,55816),this.listener.ea()}onNext(e){var t,n;C(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(C(void 0!==n,14353),t.map(e=>{let t;return(t=e.updateTime?nF(e.updateTime):nF(n)).isEqual(ee.min())&&(t=nF(n)),new t6(t,e.transformResults||[])})):[]),i=nF(e.commitTime);return this.listener.ta(i,r)}na(){let e={};e.database=nz(this.serializer),this.k_(e)}Y_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof nn)r={update:nj(e,t.key,t.value)};else if(t instanceof no)r={delete:nq(e,t.key)};else if(t instanceof nr)r={update:nj(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof nl))return _(16599,{Vt:t.type});r={verify:nq(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof tG)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tQ)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof tW)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tY)return{fieldPath:t.field.canonicalString(),increment:n.Ae};if(n instanceof tZ)return{fieldPath:t.field.canonicalString(),minimum:n.Ae};if(n instanceof t0)return{fieldPath:t.field.canonicalString(),maximum:n.Ae};throw _(20930,{transform:t.transform})})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:nL(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:_(27497)),r})(this.serializer,e))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{}class rG extends rj{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new b(I.FAILED_PRECONDITION,"The client has already been terminated.")}$o(e,t,n,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.$o(e,nM(t,n),r,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new b(I.UNKNOWN,e.toString())})}zo(e,t,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.zo(e,nM(t,n),r,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new b(I.UNKNOWN,e.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class rQ{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){0===this.sa&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){"Online"===this.state?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,"Online"===e&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(w(t),this._a=!1):v("OnlineStateTracker",t)}ha(){null!==this.oa&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rH="RemoteStore";class rW{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Map,this.Ea=new Map,this.Ra=new n4(1e3),this.Aa=new n4(1001),this.Va=new Set,this.da=[],this.ma=i,this.ma.Fo(e=>{n.enqueueAndForget(async()=>{r6(this)&&(v(rH,"Restarting streams for network reachability change."),await async function(e){e.Va.add(4),await rX(e),e.fa.set("Unknown"),e.Va.delete(4),await rJ(e)}(this))})}),this.fa=new rQ(n,r)}}async function rJ(e){if(r6(e))for(let t of e.da)await t(!0)}async function rX(e){for(let t of e.da)await t(!1)}function rY(e,t){return e.Ia.get(t)||void 0}function rZ(e,t){let n=rY(e,t.targetId);if(void 0!==n&&e.Ta.has(n))return;let r=function(e,t){let n=rY(e,t);void 0!==n&&e.Ea.delete(n);let r=t%2!=0?e.Aa.next():e.Ra.next();return e.Ia.set(t,r),e.Ea.set(r,t),r}(e,t.targetId);v(rH,"remoteStoreListen mapping SDK target ID to remote",t.targetId,r);let i=new nJ(t.target,r,t.purpose,t.sequenceNumber,t.snapshotVersion,t.lastLimboFreeSnapshotVersion,t.resumeToken);e.Ta.set(r,i),r3(e)?r4(e):id(e).x_()&&r1(e,i)}function r0(e,t){let n=id(e),r=rY(e,t);v(rH,"remoteStoreUnlisten removing mapping of SDK target ID to remote",t,r),e.Ta.delete(r),e.Ia.delete(t),e.Ea.delete(r),n.x_()&&r2(e,r),0===e.Ta.size&&(n.x_()?n.B_():r6(e)&&e.fa.set("Unknown"))}function r1(e,t){if(e.ga.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ee.min())>0){let n=e.Ea.get(t.targetId);if(void 0===n)return void v(rH,"SDK target ID not found for remote ID: "+t.targetId);let r=e.remoteSyncer.getRemoteKeysForTarget(n).size;t=t.withExpectedCount(r)}id(e).H_(t)}function r2(e,t){e.ga.$e(t),id(e).Z_(t)}function r4(e){e.ga=new nb({getRemoteKeysForTarget:t=>{let n=e.Ea.get(t);return void 0!==n?e.remoteSyncer.getRemoteKeysForTarget(n):tq()},Rt:t=>e.Ta.get(t)||null,lt:()=>e.datastore.serializer.databaseId}),id(e).start(),e.fa.aa()}function r3(e){return r6(e)&&!id(e).M_()&&e.Ta.size>0}function r6(e){return 0===e.Va.size}async function r9(e){e.fa.set("Online")}async function r5(e){e.Ta.forEach((t,n)=>{r1(e,t)})}async function r8(e,t){e.ga=void 0,r3(e)?(e.fa.la(t),r4(e)):e.fa.set("Unknown")}async function r7(e,t,n){if(e.fa.set("Online"),t instanceof nS&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds){if(e.Ta.has(r)){let t=e.Ea.get(r);void 0!==t&&(await e.remoteSyncer.rejectListen(t,n),e.Ia.delete(t),e.Ea.delete(r)),e.Ta.delete(r)}e.ga.removeTarget(r)}}(e,t)}catch(n){v(rH,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ie(e,n)}else if(t instanceof nT?e.ga.Xe(t):t instanceof n_?e.ga.it(t):e.ga.tt(t),!n.isEqual(ee.min()))try{let t=await rT(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.ga.Pt(t);n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.Ta.get(r);i&&e.Ta.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.Ta.get(t);if(!r)return;e.Ta.set(t,r.withResumeToken(ew.EMPTY_BYTE_STRING,r.snapshotVersion)),r2(e,t);let i=new nJ(r.target,t,n,r.sequenceNumber);r1(e,i)});let r=function(e,t){let n=new Map;t.targetChanges.forEach((t,r)=>{let i=e.Ea.get(r);void 0!==i&&n.set(i,t)});let r=new ed(P);return t.targetMismatches.forEach((t,n)=>{let i=e.Ea.get(t);void 0!==i&&(r=r.insert(i,n))}),new nw(t.snapshotVersion,n,r,t.documentUpdates,t.resolvedLimboDocuments)}(e,n);return e.remoteSyncer.applyRemoteEvent(r)}(e,n)}catch(t){v(rH,"Failed to raise snapshot:",t),await ie(e,t)}}async function ie(e,t,n){if(!ea(t))throw t;e.Va.add(1),await rX(e),e.fa.set("Offline"),n||(n=()=>rT(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v(rH,"Retrying IndexedDB access"),await n(),e.Va.delete(1),await rJ(e)})}function it(e,t){return t().catch(n=>ie(e,n,t))}async function ir(e){let t=im(e),n=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:-1;for(;r6(e)&&e.Pa.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.Pa.length&&t.B_();break}n=r.batchId,function(e,t){e.Pa.push(t);let n=im(e);n.x_()&&n.X_&&n.Y_(t.mutations)}(e,r)}catch(t){await ie(e,t)}ii(e)&&is(e)}function ii(e){return r6(e)&&!im(e).M_()&&e.Pa.length>0}function is(e){im(e).start()}async function ia(e){im(e).na()}async function io(e){let t=im(e);for(let n of e.Pa)t.Y_(n.mutations)}async function il(e,t,n){let r=e.Pa.shift(),i=nc.from(r,t,n);await it(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await ir(e)}async function iu(e,t){t&&im(e).X_&&await async function(e,t){var n;if(function(e){switch(e){case I.OK:return _(64938);case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0;default:return _(15467,{code:e})}}(n=t.code)&&n!==I.ABORTED){let n=e.Pa.shift();im(e).N_(),await it(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await ir(e)}}(e,t),ii(e)&&is(e)}async function ic(e,t){e.asyncQueue.verifyOperationInProgress(),v(rH,"RemoteStore received new credentials");let n=r6(e);e.Va.add(3),await rX(e),n&&e.fa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Va.delete(3),await rJ(e)}async function ih(e,t){t?(e.Va.delete(2),await rJ(e)):t||(e.Va.add(2),await rX(e),e.fa.set("Unknown"))}function id(e){var t,n,r;return e.pa||(e.pa=(t=e.datastore,n=e.asyncQueue,r={Ho:r9.bind(null,e),Xo:r5.bind(null,e),e_:r8.bind(null,e),J_:r7.bind(null,e)},t.ia(),new rz(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.da.push(async t=>{t?(e.pa.N_(),r3(e)?r4(e):e.fa.set("Unknown")):(await e.pa.stop(),e.ga=void 0)})),e.pa}function im(e){var t,n,r;return e.ya||(e.ya=(t=e.datastore,n=e.asyncQueue,r={Ho:()=>Promise.resolve(),Xo:ia.bind(null,e),e_:iu.bind(null,e),ea:io.bind(null,e),ta:il.bind(null,e)},t.ia(),new rK(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.da.push(async t=>{t?(e.ya.N_(),await ir(e)):(await e.ya.stop(),e.Pa.length>0&&(v(rH,`Stopping write stream with ${e.Pa.length} pending writes`),e.Pa=[]))})),e.ya}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new A,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new ig(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new b(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ip(e,t){if(w("AsyncQueue",`${t}: ${e}`),ea(e))return new b(I.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{static emptySet(e){return new iy(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||G.comparator(t.key,n.key):(e,t)=>G.comparator(e.key,t.key),this.keyedMap=tO(),this.sortedSet=new ed(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof iy)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new iy;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.wa=new ed(G.comparator)}track(e){let t=e.doc.key,n=this.wa.get(t);n?0!==e.type&&3===n.type?this.wa=this.wa.insert(t,e):3===e.type&&1!==n.type?this.wa=this.wa.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.wa=this.wa.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.wa=this.wa.remove(t):1===e.type&&2===n.type?this.wa=this.wa.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.wa=this.wa.insert(t,{type:2,doc:e.doc}):_(63341,{At:e,Sa:n}):this.wa=this.wa.insert(t,e)}ba(){let e=[];return this.wa.inorderTraversal((t,n)=>{e.push(n)}),e}}class iw{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new iw(e,t,iy.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tA(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this.Da=void 0,this.Ca=[]}va(){return this.Ca.some(e=>e.Fa())}}class iT{constructor(){this.queries=i_(),this.onlineState="Unknown",this.Ma=new Set}terminate(){!function(e,t){let n=e.queries;e.queries=i_(),n.forEach((e,n)=>{for(let e of n.Ca)e.onError(t)})}(this,new b(I.ABORTED,"Firestore shutting down"))}}function i_(){return new tV(e=>tN(e),tA)}async function iS(e,t){let n=3,r=t.query,i=e.queries.get(r);i?!i.va()&&t.Fa()&&(n=2):(i=new iE,n=t.Fa()?0:1);try{switch(n){case 0:i.Da=await e.onListen(r,!0);break;case 1:i.Da=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(n){let e=ip(n,`Initialization of query '${tk(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.Ca.push(t),t.xa(e.onlineState),i.Da&&t.Oa(i.Da)&&iA(e)}async function iC(e,t){let n=t.query,r=3,i=e.queries.get(n);if(i){let e=i.Ca.indexOf(t);e>=0&&(i.Ca.splice(e,1),0===i.Ca.length?r=t.Fa()?0:1:!i.va()&&t.Fa()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function iI(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.Ca)e.Oa(r)&&(n=!0);i.Da=r}}n&&iA(e)}function ib(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.Ca)e.onError(n);e.queries.delete(t)}function iA(e){e.Ma.forEach(e=>{e.next()})}(a=s||(s={})).Na="default",a.Cache="cache";class iN{constructor(e,t,n){this.query=e,this.Ba=t,this.La=!1,this.ka=null,this.onlineState="Unknown",this.options=n||{}}Oa(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new iw(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.La?this.qa(e)&&(this.Ba.next(e),t=!0):this.Ka(e,this.onlineState)&&(this.Ua(e),t=!0),this.ka=e,t}onError(e){this.Ba.error(e)}xa(e){this.onlineState=e;let t=!1;return this.ka&&!this.La&&this.Ka(this.ka,e)&&(this.Ua(this.ka),t=!0),t}Ka(e,t){return!(e.fromCache&&this.Fa())||(!this.options.$a||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}qa(e){if(e.docChanges.length>0)return!0;let t=this.ka&&this.ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Ua(e){e=iw.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.La=!0,this.Ba.next(e)}Fa(){return this.options.source!==s.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.key=e}}class iD{constructor(e){this.key=e}}class ix{constructor(e,t){this.query=e,this.eu=t,this.tu=null,this.hasCachedResults=!1,this.current=!1,this.nu=tq(),this.mutatedKeys=tq(),this.ru=tx(e),this.iu=new iy(this.ru)}get su(){return this.eu}ou(e,t){let n=t?t._u:new iv,r=t?t.iu:this.iu,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),c=tD(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.au(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.ru(c,o)>0||l&&0>this.ru(c,l))&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{iu:s,_u:n,Ss:a,mutatedKeys:i}}au(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){let i=this.iu;this.iu=e.iu,this.mutatedKeys=e.mutatedKeys;let s=e._u.ba();s.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _(20277,{At:e})}};return n(e)-n(t)})(e.type,t.type)||this.ru(e.doc,t.doc)),this.uu(n),r=r??!1;let a=t&&!r?this.cu():[],o=0===this.nu.size&&this.current&&!r?1:0,l=o!==this.tu;return(this.tu=o,0!==s.length||l)?{snapshot:new iw(this.query,e.iu,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),lu:a}:{lu:a}}xa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({iu:this.iu,_u:new iv,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{lu:[]}}hu(e){return!this.eu.has(e)&&!!this.iu.has(e)&&!this.iu.get(e).hasLocalMutations}uu(e){e&&(e.addedDocuments.forEach(e=>this.eu=this.eu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.eu=this.eu.delete(e)),this.current=e.current)}cu(){if(!this.current)return[];let e=this.nu;this.nu=tq(),this.iu.forEach(e=>{this.hu(e.key)&&(this.nu=this.nu.add(e.key))});let t=[];return e.forEach(e=>{this.nu.has(e)||t.push(new iD(e))}),this.nu.forEach(n=>{e.has(n)||t.push(new ik(n))}),t}Pu(e){this.eu=e.Ls,this.nu=tq();let t=this.ou(e.documents);return this.applyChanges(t,!0)}Tu(){return iw.fromInitialDocuments(this.query,this.iu,this.mutatedKeys,0===this.tu,this.hasCachedResults)}}let iV="SyncEngine";class iR{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class iL{constructor(e){this.key=e,this.Iu=!1}}class iO{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Eu={},this.Ru=new tV(e=>tN(e),tA),this.Au=new Map,this.Vu=new Set,this.du=new ed(G.comparator),this.mu=new Map,this.fu=new rs,this.gu={},this.pu=new Map,this.yu=n4._r(),this.onlineState="Unknown",this.wu=void 0}get isPrimaryClient(){return!0===this.wu}}async function iF(e,t,n=!0){let r;let i=i4(e),s=i.Ru.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Tu()):r=await iM(i,t,n,!0),r}async function iP(e,t){let n=i4(e);await iM(n,t,!0,!1)}async function iM(e,t,n,r){var i,s;let a;let o=await (i=e.localStore,s=tT(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.ci.getTargetData(e,s).next(n=>n?(t=n,es.resolve(t)):i.ci.allocateTargetId(e).next(n=>(t=new nJ(s,n,"TargetPurposeListen",e.currentSequenceNumber),i.ci.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.Cs.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.Cs=i.Cs.insert(e.targetId,e),i.vs.set(s,e.targetId)),e})),l=o.targetId,u=e.sharedClientState.addLocalQueryTarget(l,n);return r&&(a=await iU(e,t,l,"current"===u,o.resumeToken)),e.isPrimaryClient&&n&&rZ(e.remoteStore,o),a}async function iU(e,t,n,r,i){e.Su=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ou(n);i.Ss&&(i=await rS(e.localStore,t.query,!1).then(({documents:e})=>t.view.ou(e,i)));let s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return iY(e,t.targetId,o.lu),o.snapshot})(e,t,n,r);let s=await rS(e.localStore,t,!0),a=new ix(t,s.Ls),o=a.ou(s.documents),l=nE.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);iY(e,n,u.lu);let c=new iR(t,n,a);return e.Ru.set(t,c),e.Au.has(n)?e.Au.get(n).push(t):e.Au.set(n,[t]),u.snapshot}async function iq(e,t,n){let r=e.Ru.get(t),i=e.Au.get(r.targetId);if(i.length>1)return e.Au.set(r.targetId,i.filter(e=>!tA(e,t))),void e.Ru.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await r_(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),n&&r0(e.remoteStore,r.targetId),iJ(e,r.targetId)}).catch(ei)):(iJ(e,r.targetId),await r_(e.localStore,r.targetId,!0))}async function iB(e,t){let n=e.Ru.get(t),r=e.Au.get(n.targetId);e.isPrimaryClient&&1===r.length&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),r0(e.remoteStore,n.targetId))}async function i$(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=iG.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iQ.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=Z.now(),s=t.reduce((e,t)=>e.add(t.key),tq());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=tR,l=tq();return e.Ms.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=tj(r.transform,e||null);null!=i&&(null===n&&(n=e4.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new nr(e.key,t,function e(t){let n=[];return ec(t.fields,(t,r)=>{let i=new j([t]);if(eZ(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new ey(n)}(t.value.mapValue),t9.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:tF(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.gu[i.currentUser.toKey()])||(e=new ed(P)),e=e.insert(r,n),i.gu[i.currentUser.toKey()]=e,await i0(i,s.changes),await ir(i.remoteStore)}catch(t){let e=ip(t,"Failed to persist write");n.reject(e)}}async function iz(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.Cs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.Ms.newChangeBuffer({trackRemovals:!0});r=e.Cs;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=r.get(a);if(!l)return;u.push(e.ci.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.ci.addMatchingKeys(i,s.addedDocuments,a)));let c=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(ew.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,n)),r=r.insert(a,c),o=c,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.ci.updateTargetData(i,c))});let c=tR,h=tq();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),u.push((s=t.documentUpdates,a=tq(),o=tq(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=tR;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(ee.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):v(rv,"Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{Ns:t,Bs:o}})).next(e=>{c=e.Ns,h=e.Bs})),!n.isEqual(ee.min())){let t=e.ci.getLastRemoteSnapshotVersion(i).next(t=>e.ci.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(t)}return es.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(t=>(e.Cs=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.mu.get(n);r&&(C(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?r.Iu=!0:t.modifiedDocuments.size>0?C(r.Iu,14607):t.removedDocuments.size>0&&(C(r.Iu,42227),r.Iu=!1))}),await i0(e,n,t)}catch(e){await ei(e)}}function iK(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.Ru.forEach((e,n)=>{let r=n.view.xa(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.Ca)e.xa(t)&&(n=!0)}),n&&iA(r),i.length&&e.Eu.J_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function ij(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.mu.get(t),i=r&&r.key;if(i){let n=new ed(G.comparator);n=n.insert(i,e3.newNoDocument(i,ee.min()));let r=tq().add(i),s=new nw(ee.min(),new Map,new ed(P),n,r);await iz(e,s),e.du=e.du.remove(i),e.mu.delete(t),iZ(e)}else await r_(e.localStore,t,!1).then(()=>iJ(e,t,n)).catch(ei)}async function iG(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n.Ms.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=es.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);C(null!==s,48541),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=tq();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});iW(e,r,null),iH(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await i0(e,i)}catch(e){await ei(e)}}async function iQ(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(C(null!==t,37113),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});iW(e,t,n),iH(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await i0(e,i)}catch(e){await ei(e)}}function iH(e,t){(e.pu.get(t)||[]).forEach(e=>{e.resolve()}),e.pu.delete(t)}function iW(e,t,n){let r=e.gu[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.gu[e.currentUser.toKey()]=r}}function iJ(e,t,n=null){for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.Au.get(t)))e.Ru.delete(r),n&&e.Eu.bu(r,n);e.Au.delete(t),e.isPrimaryClient&&e.fu.Qr(t).forEach(t=>{e.fu.containsKey(t)||iX(e,t)})}function iX(e,t){e.Vu.delete(t.path.canonicalString());let n=e.du.get(t);null!==n&&(r0(e.remoteStore,n),e.du=e.du.remove(t),e.mu.delete(n),iZ(e))}function iY(e,t,n){for(let r of n)r instanceof ik?(e.fu.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Vu.has(r)||(v(iV,"New document in limbo: "+n),e.Vu.add(r),iZ(e))}(e,r)):r instanceof iD?(v(iV,"Document no longer in limbo: "+r.key),e.fu.removeReference(r.key,t),e.fu.containsKey(r.key)||iX(e,r.key)):_(19791,{Du:r})}function iZ(e){for(;e.Vu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){let t=e.Vu.values().next().value;e.Vu.delete(t);let n=new G(z.fromString(t)),r=e.yu.next();e.mu.set(r,new iL(n)),e.du=e.du.insert(n,r),rZ(e.remoteStore,new nJ(tT(new ty(n.path)),r,"TargetPurposeLimboResolution",eo.ce))}}async function i0(e,t,n){let r=[],i=[],s=[];e.Ru.isEmpty()||(e.Ru.forEach((a,o)=>{s.push(e.Su(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient){let r=t?!t.fromCache:n?.targetChanges.get(o.targetId)?.current;e.sharedClientState.updateQueryState(o.targetId,r?"current":"not-current")}if(t){r.push(t);let e=rg.Is(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Eu.J_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>es.forEach(t,t=>es.forEach(t.Ps,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>es.forEach(t.Ts,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!ea(e))throw e;v(rv,"Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.Cs.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.Cs=e.Cs.insert(t,i)}}}(e.localStore,i))}async function i1(e,t){var n;if(!e.currentUser.isEqual(t)){v(iV,"User change. New user:",t.toKey());let r=await rE(e.localStore,t);e.currentUser=t,n="'waitForPendingWrites' promise is rejected due to a user change.",e.pu.forEach(e=>{e.forEach(e=>{e.reject(new b(I.CANCELLED,n))})}),e.pu.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await i0(e,r.Os)}}function i2(e,t){let n=e.mu.get(t);if(n&&n.Iu)return tq().add(n.key);{let n=tq(),r=e.Au.get(t);if(!r)return n;for(let t of r){let r=e.Ru.get(t);n=n.unionWith(r.view.su)}return n}}function i4(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=iz.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=i2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ij.bind(null,e),e.Eu.J_=iI.bind(null,e.eventManager),e.Eu.bu=ib.bind(null,e.eventManager),e}class i3{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rU(e.databaseInfo.databaseId),this.sharedClientState=this.Fu(e),this.persistence=this.Mu(e),await this.persistence.start(),this.localStore=this.xu(e),this.gcScheduler=this.Ou(e,this.localStore),this.indexBackfillerScheduler=this.Nu(e,this.localStore)}Ou(e,t){return null}Nu(e,t){return null}xu(e){var t;return t=this.persistence,new rw(t,new ry,e.initialUser,this.serializer)}Mu(e){return new rh(rf.Ai,this.serializer)}Fu(e){return new rI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}i3.provider={build:()=>new i3};class i6 extends i3{constructor(e){super(),this.cacheSizeBytes=e}Ou(e,t){return C(this.persistence.referenceDelegate instanceof rm,46915),new n5(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Mu(e){let t=void 0!==this.cacheSizeBytes?n2.withCacheSize(this.cacheSizeBytes):n2.DEFAULT;return new rh(e=>rm.Ai(e,t),this.serializer)}}class i9{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>iK(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=i1.bind(null,this.syncEngine),await ih(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new iT}createDatastore(e){let t=rU(e.databaseInfo.databaseId),n=new rP(e.databaseInfo);return new rG(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new rW(t,this.datastore,e.asyncQueue,e=>iK(this.syncEngine,e,0),rN.v()?new rN:new rb)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new iO(e,t,n,r,i,s);return a&&(o.wu=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){v(rH,"RemoteStore shutting down."),e.Va.add(5),await rX(e),e.ma.shutdown(),e.fa.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}i9.provider={build:()=>new i9};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Lu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Lu(this.observer.error,e):w("Uncaught Error in snapshot listener:",e.toString()))}ku(){this.muted=!0}Lu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i8="FirestoreClient";class i7{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=f.UNAUTHENTICATED,this.clientId=F.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async e=>{v(i8,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(v(i8,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new A;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=ip(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function se(e,t){e.asyncQueue.verifyOperationInProgress(),v(i8,"Initializing OfflineComponentProvider");let n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await rE(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function st(e,t){e.asyncQueue.verifyOperationInProgress();let n=await sn(e);v(i8,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>ic(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>ic(t.remoteStore,n)),e._onlineComponents=t}async function sn(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){v(i8,"Using user provided OfflineComponentProvider");try{await se(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;E("Error using user provided cache. Falling back to memory cache: "+t),await se(e,new i3)}}else v(i8,"Using default OfflineComponentProvider"),await se(e,new i6(void 0))}return e._offlineComponents}async function sr(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(v(i8,"Using user provided OnlineComponentProvider"),await st(e,e._uninitializedComponentsProvider._online)):(v(i8,"Using default OnlineComponentProvider"),await st(e,new i9))),e._onlineComponents}async function si(e){let t=await sr(e),n=t.eventManager;return n.onListen=iF.bind(null,t.syncEngine),n.onUnlisten=iq.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=iP.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=iB.bind(null,t.syncEngine),n}function ss(e,t,n={}){let r=new A;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new i5({next:o=>{s.ku(),t.enqueueAndForget(()=>iC(e,a));let l=o.docs.has(n);!l&&o.fromCache?i.reject(new b(I.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&o.fromCache&&r&&"server"===r.source?i.reject(new b(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),a=new iN(new ty(n.path),s,{includeMetadataChanges:!0,$a:!0});return iS(e,a)})(await si(e),e.asyncQueue,t,n,r)),r.promise}function sa(e,t){let n=new A;return e.asyncQueue.enqueueAndForget(async()=>i$(await sr(e).then(e=>e.syncEngine),t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sl=new Map,su="firestore.googleapis.com";class sc{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new b(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=su,this.ssl=!0}else this.host=e.host,this.ssl=e.ssl??!0;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new b(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new b(I.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=so(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new b(I.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new b(I.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new b(I.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sh{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new b(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new b(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sc(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new k;switch(e.type){case"firstParty":return new R(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new b(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=sl.get(e);t&&(v("ComponentProvider","Removing Datastore"),sl.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new sd(this.firestore,e,this._query)}}class sf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sm(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sf(this.firestore,e,this._key)}toJSON(){return{type:sf._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Y(t,sf._jsonSchema))return new sf(e,n||null,new G(z.fromString(t.referencePath)))}}sf._jsonSchemaVersion="firestore/documentReference/1.0",sf._jsonSchema={type:X("string",sf._jsonSchemaVersion),referencePath:X("string")};class sm extends sd{constructor(e,t,n){super(e,t,new ty(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new sf(this.firestore,null,new G(e))}withConverter(e){return new sm(this.firestore,e,this._path)}}function sg(e,t,...n){if(e=(0,l.m9)(e),1==arguments.length&&(t=F.newId()),/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,n){if(!n)throw new b(I.INVALID_ARGUMENT,`Function doc() cannot be called with an empty ${t}.`)}(0,"path",t),e instanceof sh){let r=z.fromString(t,...n);return Q(r),new sf(e,null,new G(r))}{if(!(e instanceof sf||e instanceof sm))throw new b(I.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=e._path.child(z.fromString(t,...n));return Q(r),new sf(e.firestore,e instanceof sm?e.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sp="AsyncQueue";class sy{constructor(e=Promise.resolve()){this.nc=[],this.rc=!1,this.sc=[],this.oc=null,this._c=!1,this.ac=!1,this.uc=[],this.F_=new rq(this,"async_queue_retry"),this.cc=()=>{let e=rM();e&&v(sp,"Visibility state changed to "+e.visibilityState),this.F_.y_()},this.lc=e;let t=rM();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.cc)}get isShuttingDown(){return this.rc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.hc(),this.Pc(e)}enterRestrictedMode(e){if(!this.rc){this.rc=!0,this.ac=e||!1;let t=rM();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.cc)}}enqueue(e){if(this.hc(),this.rc)return new Promise(()=>{});let t=new A;return this.Pc(()=>this.rc&&this.ac?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.nc.push(e),this.Tc()))}async Tc(){if(0!==this.nc.length){try{await this.nc[0](),this.nc.shift(),this.F_.reset()}catch(e){if(!ea(e))throw e;v(sp,"Operation failed with retryable error: "+e)}this.nc.length>0&&this.F_.g_(()=>this.Tc())}}Pc(e){let t=this.lc.then(()=>(this._c=!0,e().catch(e=>{throw this.oc=e,this._c=!1,w("INTERNAL UNHANDLED ERROR: ",sv(e)),e}).then(e=>(this._c=!1,e))));return this.lc=t,t}enqueueAfterDelay(e,t,n){this.hc(),this.uc.indexOf(e)>-1&&(t=0);let r=ig.createAndSchedule(this,e,t,n,e=>this.Ic(e));return this.sc.push(r),r}hc(){this.oc&&_(47125,{Ec:sv(this.oc)})}verifyOperationInProgress(){}async Rc(){let e;do e=this.lc,await e;while(e!==this.lc)}Ac(e){for(let t of this.sc)if(t.timerId===e)return!0;return!1}Vc(e){return this.Rc().then(()=>{for(let t of(this.sc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.sc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Rc()})}dc(e){this.uc.push(e)}Ic(e){let t=this.sc.indexOf(e);this.sc.splice(t,1)}}function sv(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class sw extends sh{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new sy,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new sy(e),this._firestoreClient=void 0,await e}}}function sE(e,t){let n="object"==typeof e?e:(0,o.Mq)(),r=(0,o.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||eV});if(!r._initialized){let e=(0,l.P0)("firestore");e&&function(e,t,n,r={}){e=J(e,sh);let i=(0,l.Xx)(t),s=e._getSettings(),a={...s,emulatorOptions:e._getEmulatorOptions()},o=`${t}:${n}`;i&&(0,l.Uo)(`https://${o}`),s.host!==su&&s.host!==o&&E("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let u={...s,host:o,ssl:i,emulatorOptions:r};if(!(0,l.vZ)(u,a)&&(e._setSettings(u),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=f.MOCK_USER;else{t=(0,l.Sg)(r.mockUserToken,e._app?.options.projectId);let i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new b(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new f(i)}e._authCredentials=new D(new N(t,n))}}(r,...e)}return r}function sT(e){if(e._terminated)throw new b(I.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r,i;let s=e._freezeSettings(),a=(t=e._databaseId,n=e._app?.options.appId||"",r=e._persistenceKey,i=e._app?.options.apiKey,new ex(t,n,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,so(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i));e._componentsProvider||s.localCache?._offlineComponentProvider&&s.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new i7(e._authCredentials,e._appCheckCredentials,e._queue,a,e._componentsProvider&&function(e){let t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this._byteString=e}static fromBase64String(e){try{return new s_(ew.fromBase64String(e))}catch(e){throw new b(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new s_(ew.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:s_._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Y(e,s_._jsonSchema))return s_.fromBase64String(e.bytes)}}s_._jsonSchemaVersion="firestore/bytes/1.0",s_._jsonSchema={type:X("string",s_._jsonSchemaVersion),bytes:X("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new b(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new j(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new b(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new b(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return P(this._lat,e._lat)||P(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sI._jsonSchemaVersion}}static fromJSON(e){if(Y(e,sI._jsonSchema))return new sI(e.latitude,e.longitude)}}sI._jsonSchemaVersion="firestore/geoPoint/1.0",sI._jsonSchema={type:X("string",sI._jsonSchemaVersion),latitude:X("number"),longitude:X("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:sb._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Y(e,sb._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new sb(e.vectorValues);throw new b(I.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}sb._jsonSchemaVersion="firestore/vectorValue/1.0",sb._jsonSchema={type:X("string",sb._jsonSchemaVersion),vectorValues:X("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sA=/^__.*__$/;class sN{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new nr(e,this.data,this.fieldMask,t,this.fieldTransforms):new nn(e,this.data,t,this.fieldTransforms)}}class sk{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new nr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function sD(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _(40011,{dataSource:e})}}class sx{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.mc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new sx({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}gc(e){let t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.yc(e),n}wc(e){let t=this.path?.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(),n}Sc(e){return this.i({path:void 0,arrayElement:!0})}bc(e){return sQ(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}mc(){if(this.path)for(let e=0;e<this.path.length;e++)this.yc(this.path.get(e))}yc(e){if(0===e.length)throw this.bc("Document fields must not be empty");if(sD(this.dataSource)&&sA.test(e))throw this.bc('Document fields cannot begin and end with "__"')}}class sV{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||rU(e)}V(e,t,n,r=!1){return new sx({dataSource:e,methodName:t,targetDoc:n,path:j.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sR(e){let t=e._freezeSettings(),n=rU(e._databaseId);return new sV(e._databaseId,!!t.ignoreUndefinedProperties,n)}function sL(e,t,n,r,i,s={}){let a,o;let l=e.V(s.merge||s.mergeFields?2:0,t,n,i);sz("Data must be an object, but it was:",l,r);let u=sB(r,l);if(s.merge)a=new ey(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let r of s.mergeFields){let i=sK(t,r,n);if(!l.contains(i))throw new b(I.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);sH(e,i)||e.push(i)}a=new ey(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new sN(new e4(u),a,o)}class sO extends sC{_toFieldTransform(e){if(2!==e.dataSource)throw 1===e.dataSource?e.bc(`${this._methodName}() can only appear at the top level of your update data`):e.bc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sO}}class sF extends sC{_toFieldTransform(e){return new t3(e.path,new tG)}isEqual(e){return e instanceof sF}}function sP(e,t,n,r){let i=e.V(1,t,n);sz("Data must be an object, but it was:",i,r);let s=[],a=e4.empty();return ec(r,(e,r)=>{let o=sG(t,e,n);r=(0,l.m9)(r);let u=i.wc(o);if(r instanceof sO)s.push(o);else{let e=sq(r,u);null!=e&&(s.push(o),a.set(o,e))}}),new sk(a,new ey(s),i.fieldTransforms)}function sM(e,t,n,r,i,s){let a=e.V(1,t,n),o=[sK(t,r,n)],u=[i];if(s.length%2!=0)throw new b(I.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(sK(t,s[e])),u.push(s[e+1]);let c=[],h=e4.empty();for(let e=o.length-1;e>=0;--e)if(!sH(c,o[e])){let t=o[e],n=u[e];n=(0,l.m9)(n);let r=a.wc(t);if(n instanceof sO)c.push(t);else{let e=sq(n,r);null!=e&&(c.push(t),h.set(t,e))}}return new sk(h,new ey(c),a.fieldTransforms)}function sU(e,t,n,r=!1){return sq(n,e.V(r?4:3,t))}function sq(e,t){if(s$(e=(0,l.m9)(e)))return sz("Unsupported field value:",t,e),sB(e,t);if(e instanceof sC)return function(e,t){if(!sD(t.dataSource))throw t.bc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.bc(`${e._methodName}() is not currently supported inside arrays`);let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&4!==t.dataSource)throw t.bc("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=sq(i,t.Sc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){var n,r,i,s;if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!el(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?tz(r):t$(n,r);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=Z.fromDate(e);return{timestampValue:nL(t.serializer,n)}}if(e instanceof Z){let n=new Z(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:nL(t.serializer,n)}}if(e instanceof sI)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof s_)return{bytesValue:nO(t.serializer,e._byteString)};if(e instanceof sf){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.bc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:nP(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof sb)return{mapValue:{fields:{[eO]:{stringValue:eM},[eU]:{arrayValue:{values:((s=e)instanceof sb?s.toArray():s).map(e=>{if("number"!=typeof e)throw t.bc("VectorValues must only contain numeric values.");return t$(t.serializer,e)})}}}}};if(nW(e))return e._toProto(t.serializer);throw t.bc(`Unsupported field value: ${W(e)}`)}(e,t)}function sB(e,t){let n={};return eh(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ec(e,(e,r)=>{let i=sq(r,t.gc(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function s$(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Z||e instanceof sI||e instanceof s_||e instanceof sf||e instanceof sC||e instanceof sb||nW(e))}function sz(e,t,n){if(!s$(n)||!H(n)){let r=W(n);throw"an object"===r?t.bc(e+" a custom object"):t.bc(e+" "+r)}}function sK(e,t,n){if((t=(0,l.m9)(t))instanceof sS)return t._internalPath;if("string"==typeof t)return sG(e,t);throw sQ("Field path arguments must be of type string or ",e,!1,void 0,n)}let sj=RegExp("[~\\*/\\[\\]]");function sG(e,t,n){if(t.search(sj)>=0)throw sQ(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new sS(...t.split("."))._internalPath}catch(r){throw sQ(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function sQ(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new b(I.INVALID_ARGUMENT,o+e+l)}function sH(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sW{convertValue(e,t="none"){switch(eq(e)){case 0:return null;case 1:return e.booleanValue;case 2:return e_(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(eS(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw _(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let n={};return ec(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){return new sb(e.fields?.[eU].arrayValue?.values?.map(e=>e_(e.doubleValue)))}convertGeoPoint(e){return new sI(e_(e.latitude),e_(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=ek(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(eD(e));default:return null}}convertTimestamp(e){let t=eT(e);return new Z(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=z.fromString(e);C(nH(n),9688,{name:e});let r=new eR(n.get(1),n.get(3)),i=new G(n.popFirst(5));return r.isEqual(t)||w(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sJ extends sW{constructor(e){super(),this.firestore=e}convertBytes(e){return new s_(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new sf(this.firestore,null,t)}}function sX(){return new sF("serverTimestamp")}}}]);