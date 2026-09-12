var kx=Object.defineProperty;var Ox=Object.defineProperties;var Fx=Object.getOwnPropertyDescriptors;var Zc=Object.getOwnPropertySymbols;var o_=Object.prototype.hasOwnProperty;var s_=Object.prototype.propertyIsEnumerable;var r_=(t,n,e)=>n in t?kx(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var g=(t,n)=>{for(var e in n||={})o_.call(n,e)&&r_(t,e,n[e]);if(Zc)for(var e of Zc(n))s_.call(n,e)&&r_(t,e,n[e]);return t};var G=(t,n)=>Ox(t,Fx(n));var Px=(t,n)=>{var e={};for(var i in t)o_.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&Zc)for(var i of Zc(t))n.indexOf(i)<0&&s_.call(t,i)&&(e[i]=t[i]);return e};var we$1=(t,n,e)=>new Promise((i,r)=>{var o=c=>{try{a(e.next(c))}catch(l){r(l)}},s=c=>{try{a(e.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(o,s);a((e=e.apply(t,n)).next())});var Pt$1=null;var Qc=!1;var Er$1=1;var Lx=null;var Ye$1=Symbol(`SIGNAL`);function Q(t){let n=Pt$1;return Pt$1=t,n}function Kc(){return Pt$1}var Wi={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:`unknown`,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function qi(t){if(Qc)throw new Error(``);if(Pt$1===null)return;Pt$1.consumerOnSignalRead(t);let n=Pt$1.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=Pt$1.recomputing;if(i&&(e=n!==void 0?n.nextProducer:Pt$1.producers,e!==void 0&&e.producer===t)){Pt$1.producersTail=e,e.lastReadVersion=t.version,e.knownValidAtEpoch=Er$1;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Pt$1&&(!i||r.knownValidAtEpoch===Er$1))return;let o=To(Pt$1),s={producer:t,consumer:Pt$1,nextProducer:e,prevConsumer:void 0,knownValidAtEpoch:Er$1,lastReadVersion:t.version,nextConsumer:void 0};Pt$1.producersTail=s,n!==void 0?n.nextProducer=s:Pt$1.producers=s,o&&d_(t,s)}function a_(){Er$1++}function Nr(t){if(!(To(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Er$1)){if(!t.producerMustRecompute(t)&&!No(t)){xo(t);return}t.producerRecomputeValue(t),xo(t)}}function mh(t){if(t.consumers===void 0)return;let n=Qc;Qc=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||jx(i)}}finally{Qc=n}}function gh(){return Pt$1?.consumerAllowSignalWrites!==!1}function jx(t){t.dirty=!0,mh(t),t.consumerMarkedDirty?.(t)}function xo(t){t.dirty=!1,t.lastCleanEpoch=Er$1}function Di(t){return t&&c_(t),Q(t)}function c_(t){if(t.producersTail?.knownValidAtEpoch===Er$1){let n=t.producers;for(;n!==void 0;)n.knownValidAtEpoch=null,n=n.nextProducer}t.producersTail=void 0,t.recomputing=!0}function Yi(t,n){Q(n),t&&l_(t)}function l_(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(To(t))do e=vh(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function No(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||(Nr(e),i!==e.version))return!0}return!1}function Zi(t){if(To(t)){let n=t.producers;for(;n!==void 0;)n=vh(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function d_(t,n){let e=t.consumersTail,i=To(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)d_(r.producer,r)}function vh(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!To(n)){let o=n.producers;for(;o!==void 0;)o=vh(o)}return e}function To(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Hs$1(t){Lx?.(t)}function Us$1(t,n){return Object.is(t,n)}function zs(t,n){let e=Object.create(Vx);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if(Nr(e),qi(e),e.value===Xn$1)throw e.error;return e.value};return i[Ye$1]=e,Hs$1(e),i}var Ir=Symbol(`UNSET`);var xr=Symbol(`COMPUTING`);var Xn$1=Symbol(`ERRORED`);var Vx=G(g({},Wi),{value:Ir,dirty:!0,error:null,equal:Us$1,kind:`computed`,producerMustRecompute(t){return t.value===Ir||t.value===xr},producerRecomputeValue(t){if(t.value===xr)throw new Error(``);let n=t.value;t.value=xr;let e=Di(t),i,r=!1;try{i=t.computation(),Q(null),r=n!==Ir&&n!==Xn$1&&i!==Xn$1&&t.equal(n,i)}catch(o){i=Xn$1,t.error=o}finally{Yi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function Bx(){throw new Error}var u_=Bx;function f_(t){u_(t)}function bh(t){u_=t}var Hx=null;function _h(t,n){let e=Object.create(Mo);e.value=t,n!==void 0&&(e.equal=n);let i=()=>h_(e);return i[Ye$1]=e,Hs$1(e),[i,s=>Qi(e,s),s=>Xc(e,s)]}function h_(t){return qi(t),t.value}function Qi(t,n){gh()||f_(t),t.equal(t.value,n)||(t.value=n,Ux(t))}function Xc(t,n){gh()||f_(t),Qi(t,n(t.value))}var Mo=G(g({},Wi),{equal:Us$1,value:void 0,kind:`signal`});function Ux(t){t.version++,a_(),mh(t),Hx?.(t)}var yh=G(g({},Wi),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:`effect`});function wh(t){if(t.dirty=!1,t.version>0&&!No(t))return;t.version++;let n=Di(t);try{t.cleanup(),t.fn()}finally{Yi(t,n)}}var Sh;function Jc(){return Sh}function Jn$1(t){let n=Sh;return Sh=t,n}var p_=Symbol(`NotFound`);function Ao(t){return t===p_||t?.name===`ɵNotFound`}function Ch(t,n,e){let i=Object.create(zx);i.source=t,i.computation=n,e!=null&&(i.equal=e);let o=()=>{if(Nr(i),qi(i),i.value===Xn$1)throw i.error;return i.value};return o[Ye$1]=i,Hs$1(i),o}function Dh(t,n){Nr(t),Qi(t,n),xo(t)}function m_(t,n){if(Nr(t),t.value===Xn$1)throw t.error;Xc(t,n),xo(t)}var zx=G(g({},Wi),{value:Ir,dirty:!0,error:null,equal:Us$1,kind:`linkedSignal`,producerMustRecompute(t){return t.value===Ir||t.value===xr},producerRecomputeValue(t){if(t.value===xr)throw new Error(``);let n=t.value;t.value=xr;let e=Di(t),i,r=!1;try{let o=t.source(),s=n!==Ir&&n!==Xn$1,a=s?{source:t.sourceValue,value:n}:void 0;i=t.computation(o,a),t.sourceValue=o,Q(null),r=s&&i!==Xn$1&&t.equal(n,i)}catch(o){i=Xn$1,t.error=o}finally{Yi(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function g_(t){let n=Q(null);try{return t()}finally{Q(n)}}function ae(t){return typeof t==`function`}function Ro(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var el=Ro(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:``,this.name=`UnsubscriptionError`,this.errors=e});function Tr$1(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var fe$1=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(ae(i))try{i()}catch(o){n=o instanceof el?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{v_(o)}catch(s){n=n??[],s instanceof el?n=[...n,...s.errors]:n.push(s)}}if(n)throw new el(n)}}add(n){var e;if(n&&n!==this)if(this.closed)v_(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Tr$1(e,n)}remove(n){let{_finalizers:e}=this;e&&Tr$1(e,n),n instanceof t&&n._removeParent(this)}};fe$1.EMPTY=(()=>{let t=new fe$1;return t.closed=!0,t})();var Eh=fe$1.EMPTY;function tl(t){return t instanceof fe$1||t&&`closed`in t&&ae(t.remove)&&ae(t.add)&&ae(t.unsubscribe)}function v_(t){ae(t)?t():t.unsubscribe()}var Rn$1={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ko={setTimeout(t,n,...e){let{delegate:i}=ko;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=ko;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function nl(t){ko.setTimeout(()=>{let{onUnhandledError:n}=Rn$1;if(n)n(t);else throw t})}function $s$1(){}var b_=Ih(`C`,void 0,void 0);function __(t){return Ih(`E`,void 0,t)}function y_(t){return Ih(`N`,t,void 0)}function Ih(t,n,e){return{kind:t,value:n,error:e}}var Mr=null;function Oo(t){if(Rn$1.useDeprecatedSynchronousErrorHandling){let n=!Mr;if(n&&(Mr={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=Mr;if(Mr=null,e)throw i}}else t()}function w_(t){Rn$1.useDeprecatedSynchronousErrorHandling&&Mr&&(Mr.errorThrown=!0,Mr.error=t)}var Ar$1=class extends fe$1{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,tl(n)&&n.add(this)):this.destination=Wx}static create(n,e,i){return new Ei(n,e,i)}next(n){this.isStopped?Nh(y_(n),this):this._next(n)}error(n){this.isStopped?Nh(__(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Nh(b_,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}};var $x=Function.prototype.bind;function xh(t,n){return $x.call(t,n)}var Th=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){il(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){il(i)}else il(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){il(e)}}};var Ei=class extends Ar$1{constructor(n,e,i){super();let r;if(ae(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&Rn$1.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&xh(n.next,o),error:n.error&&xh(n.error,o),complete:n.complete&&xh(n.complete,o)}):r=n}this.destination=new Th(r)}};function il(t){Rn$1.useDeprecatedSynchronousErrorHandling?w_(t):nl(t)}function Gx(t){throw t}function Nh(t,n){let{onStoppedNotification:e}=Rn$1;e&&ko.setTimeout(()=>e(t,n))}var Wx={closed:!0,next:$s$1,error:Gx,complete:$s$1};var Fo=typeof Symbol==`function`&&Symbol.observable||`@@observable`;function Jt(t){return t}function rl(...t){return Mh(t)}function Mh(t){return t.length===0?Jt:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var X=class t{constructor(n){n&&(this._subscribe=n)}lift(n){let e=new t;return e.source=this,e.operator=n,e}subscribe(n,e,i){let r=Yx(n)?n:new Ei(n,e,i);return Oo(()=>{let{operator:o,source:s}=this;r.add(o?o.call(r,s):s?this._subscribe(r):this._trySubscribe(r))}),r}_trySubscribe(n){try{return this._subscribe(n)}catch(e){n.error(e)}}forEach(n,e){return e=S_(e),new e((i,r)=>{let o=new Ei({next:s=>{try{n(s)}catch(a){r(a),o.unsubscribe()}},error:r,complete:i});this.subscribe(o)})}_subscribe(n){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(n)}[Fo](){return this}pipe(...n){return Mh(n)(this)}toPromise(n){return n=S_(n),new n((e,i)=>{let r;this.subscribe(o=>r=o,o=>i(o),()=>e(r))})}};X.create=t=>new X(t);function S_(t){var n;return(n=t??Rn$1.Promise)!==null&&n!==void 0?n:Promise}function qx(t){return t&&ae(t.next)&&ae(t.error)&&ae(t.complete)}function Yx(t){return t&&t instanceof Ar$1||qx(t)&&tl(t)}function Zx(t){return ae(t?.lift)}function he(t){return n=>{if(Zx(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError(`Unable to lift unknown Observable type`)}}function me(t,n,e,i,r){return new Ah(t,n,e,i,r)}var Ah=class extends Ar$1{constructor(n,e,i,r,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(c){n.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){n.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var C_=Ro(t=>function(){t(this),this.name=`ObjectUnsubscribedError`,this.message=`object unsubscribed`});var I=class extends X{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){let e=new ol(this,this);return e.operator=n,e}_throwIfClosed(){if(this.closed)throw new C_}next(n){Oo(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let e of this.currentObservers)e.next(n)}})}error(n){Oo(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;let{observers:e}=this;for(;e.length;)e.shift().error(n)}})}complete(){Oo(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){let{hasError:e,isStopped:i,observers:r}=this;return e||i?Eh:(this.currentObservers=null,r.push(n),new fe$1(()=>{this.currentObservers=null,Tr$1(r,n)}))}_checkFinalizedStatuses(n){let{hasError:e,thrownError:i,isStopped:r}=this;e?n.error(i):r&&n.complete()}asObservable(){let n=new X;return n.source=this,n}};I.create=(t,n)=>new ol(t,n);var ol=class extends I{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Eh}};var Me$1=class extends I{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var Gs$1={now(){return(Gs$1.delegate||Date).now()},delegate:void 0};var Rr=class extends I{constructor(n=Infinity,e=Infinity,i=Gs$1){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===Infinity,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:s}=this;e||(i.push(n),!r&&i.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let s=0;s<o.length&&!n.closed;s+=i?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<Infinity&&o<i.length&&i.splice(0,i.length-o),!r){let s=e.now(),a=0;for(let c=1;c<i.length&&i[c]<=s;c+=2)a=c;a&&i.splice(0,a+1)}}};var sl=class extends fe$1{constructor(n,e){super()}schedule(n,e=0){return this}};var Ws$1={setInterval(t,n,...e){let{delegate:i}=Ws$1;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Ws$1;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var al=class extends sl{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Ws$1.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Ws$1.clearInterval(e)}execute(n,e){if(this.closed)return new Error(`executing a cancelled action`);this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error(`Scheduled action threw falsy error`)}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Tr$1(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var Rh=(()=>{class t{constructor(e,i=t.now){this.schedulerActionCtor=e,this.now=i}schedule(e,i=0,r){return new this.schedulerActionCtor(this,e).schedule(r,i)}}return t.now=Gs$1.now,t})();var cl=class extends Rh{constructor(n,e=Rh.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var qs$1=new cl(al);var D_=qs$1;var Ge$1=new X(t=>t.complete());function ll(t){return t&&ae(t.schedule)}function kh(t){return t[t.length-1]}function dl(t){return ae(kh(t))?t.pop():void 0}function ei(t){return ll(kh(t))?t.pop():void 0}function E_(t,n){return typeof kh(t)==`number`?t.pop():n}function x_(t,n,e,i){function r(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(d){try{l(i.next(d))}catch(f){s(f)}}function c(d){try{l(i.throw(d))}catch(f){s(f)}}function l(d){d.done?o(d.value):r(d.value).then(a,c)}l((i=i.apply(t,n||[])).next())})}function I_(t){var n=typeof Symbol==`function`&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length==`number`)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?`Object is not iterable.`:`Symbol.iterator is not defined.`)}function kr(t){return this instanceof kr?(this.v=t,this):new kr(t)}function N_(t,n,e){if(!Symbol.asyncIterator)throw new TypeError(`Symbol.asyncIterator is not defined.`);var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator==`function`?AsyncIterator:Object).prototype),a(`next`),a(`throw`),a(`return`,s),r[Symbol.asyncIterator]=function(){return this},r;function s(p){return function(v){return Promise.resolve(v).then(p,f)}}function a(p,v){i[p]&&(r[p]=function(S){return new Promise(function(P,$){o.push([p,S,P,$])>1||c(p,S)})},v&&(r[p]=v(r[p])))}function c(p,v){try{l(i[p](v))}catch(S){h(o[0][3],S)}}function l(p){p.value instanceof kr?Promise.resolve(p.value.v).then(d,f):h(o[0][2],p)}function d(p){c(`next`,p)}function f(p){c(`throw`,p)}function h(p,v){p(v),o.shift(),o.length&&c(o[0][0],o[0][1])}}function T_(t){if(!Symbol.asyncIterator)throw new TypeError(`Symbol.asyncIterator is not defined.`);var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof I_==`function`?I_(t):t[Symbol.iterator](),e={},i(`next`),i(`throw`),i(`return`),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(s){return new Promise(function(a,c){s=t[o](s),r(a,c,s.done,s.value)})}}function r(o,s,a,c){Promise.resolve(c).then(function(l){o({value:l,done:a})},s)}}var ul=(t=>t&&typeof t.length==`number`&&typeof t!=`function`);function fl(t){return ae(t?.then)}function hl(t){return ae(t[Fo])}function pl(t){return Symbol.asyncIterator&&ae(t?.[Symbol.asyncIterator])}function ml(t){return new TypeError(`You provided ${t!==null&&typeof t==`object`?`an invalid object`:`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Qx(){return typeof Symbol!=`function`||!Symbol.iterator?`@@iterator`:Symbol.iterator}var gl=Qx();function vl(t){return ae(t?.[gl])}function bl(t){return N_(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield kr(e.read());if(r)return yield kr(void 0);yield yield kr(i)}}finally{e.releaseLock()}})}function _l(t){return ae(t?.getReader)}function Fe$1(t){if(t instanceof X)return t;if(t!=null){if(hl(t))return Kx(t);if(ul(t))return Xx(t);if(fl(t))return Jx(t);if(pl(t))return M_(t);if(vl(t))return eN(t);if(_l(t))return tN(t)}throw ml(t)}function Kx(t){return new X(n=>{let e=t[Fo]();if(ae(e.subscribe))return e.subscribe(n);throw new TypeError(`Provided object does not correctly implement Symbol.observable`)})}function Xx(t){return new X(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function Jx(t){return new X(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,nl)})}function eN(t){return new X(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function M_(t){return new X(n=>{nN(t,n).catch(e=>n.error(e))})}function tN(t){return M_(bl(t))}function nN(t,n){var e,i,r,o;return x_(this,void 0,void 0,function*(){try{for(e=T_(t);i=yield e.next(),!i.done;){let s=i.value;if(n.next(s),n.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function $t$1(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function yl(t,n=0){return he((e,i)=>{e.subscribe(me(i,r=>$t$1(i,t,()=>i.next(r),n),()=>$t$1(i,t,()=>i.complete(),n),r=>$t$1(i,t,()=>i.error(r),n)))})}function wl(t,n=0){return he((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function A_(t,n){return Fe$1(t).pipe(wl(n),yl(n))}function R_(t,n){return Fe$1(t).pipe(wl(n),yl(n))}function k_(t,n){return new X(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function O_(t,n){return new X(e=>{let i;return $t$1(e,n,()=>{i=t[gl](),$t$1(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){e.error(s);return}o?e.complete():e.next(r)},0,!0)}),()=>ae(i?.return)&&i.return()})}function Sl(t,n){if(!t)throw new Error(`Iterable cannot be null`);return new X(e=>{$t$1(e,n,()=>{let i=t[Symbol.asyncIterator]();$t$1(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function F_(t,n){return Sl(bl(t),n)}function P_(t,n){if(t!=null){if(hl(t))return A_(t,n);if(ul(t))return k_(t,n);if(fl(t))return R_(t,n);if(pl(t))return Sl(t,n);if(vl(t))return O_(t,n);if(_l(t))return F_(t,n)}throw ml(t)}function Ae$1(t,n){return n?P_(t,n):Fe$1(t)}function R(...t){return Ae$1(t,ei(t))}function Or(t,n){let e=ae(t)?t:()=>t,i=r=>r.error(e());return new X(n?r=>n.schedule(i,0,r):i)}function Ys$1(t){return!!t&&(t instanceof X||ae(t.lift)&&ae(t.subscribe))}var Fr=Ro(t=>function(){t(this),this.name=`EmptyError`,this.message=`no elements in sequence`});function L_(t){return t instanceof Date&&!isNaN(t)}function L(t,n){return he((e,i)=>{let r=0;e.subscribe(me(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:iN}=Array;function rN(t,n){return iN(n)?t(...n):t(n)}function Cl(t){return L(n=>rN(t,n))}var{isArray:oN}=Array,{getPrototypeOf:sN,prototype:aN,keys:cN}=Object;function Dl(t){if(t.length===1){let n=t[0];if(oN(n))return{args:n,keys:null};if(lN(n)){let e=cN(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function lN(t){return t&&typeof t==`object`&&sN(t)===aN}function El(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function Po(...t){let n=ei(t),e=dl(t),{args:i,keys:r}=Dl(t);if(i.length===0)return Ae$1([],n);let o=new X(dN(i,n,r?s=>El(r,s):Jt));return e?o.pipe(Cl(e)):o}function dN(t,n,e=Jt){return i=>{j_(n,()=>{let{length:r}=t,o=new Array(r),s=r,a=r;for(let c=0;c<r;c++)j_(n,()=>{let l=Ae$1(t[c],n),d=!1;l.subscribe(me(i,f=>{o[c]=f,d||(d=!0,a--),a||i.next(e(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function j_(t,n,e){t?$t$1(e,t,n):n()}function V_(t,n,e,i,r,o,s,a){let c=[],l=0,d=0,f=!1,h=()=>{f&&!c.length&&!l&&n.complete()},p=S=>l<i?v(S):c.push(S),v=S=>{o&&n.next(S),l++;let P=!1;Fe$1(e(S,d++)).subscribe(me(n,$=>{r?.($),o?p($):n.next($)},()=>{P=!0},void 0,()=>{if(P)try{for(l--;c.length&&l<i;){let $=c.shift();s?$t$1(n,s,()=>v($)):v($)}h()}catch($){n.error($)}}))};return t.subscribe(me(n,p,()=>{f=!0,h()})),()=>{a?.()}}function St(t,n,e=Infinity){return ae(n)?St((i,r)=>L((o,s)=>n(i,o,r,s))(Fe$1(t(i,r))),e):(typeof n==`number`&&(e=n),he((i,r)=>V_(i,r,t,e)))}function ti(t=Infinity){return St(Jt,t)}function B_(){return ti(1)}function Ki(...t){return B_()(Ae$1(t,ei(t)))}function Zs$1(t){return new X(n=>{Fe$1(t()).subscribe(n)})}function Qs$1(...t){let n=dl(t),{args:e,keys:i}=Dl(t),r=new X(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),c=s,l=s;for(let d=0;d<s;d++){let f=!1;Fe$1(e[d]).subscribe(me(o,h=>{f||(f=!0,l--),a[d]=h},()=>c--,void 0,()=>{(!c||!f)&&(l||o.next(i?El(i,a):a),o.complete())}))}});return n?r.pipe(Cl(n)):r}function Ks$1(t=0,n,e=D_){let i=-1;return n!=null&&(ll(n)?e=n:i=n),new X(r=>{let o=L_(t)?+t-e.now():t;o<0&&(o=0);let s=0;return e.schedule(function(){r.closed||(r.next(s++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function ni(...t){let n=ei(t),e=E_(t,Infinity),i=t;return i.length?i.length===1?Fe$1(i[0]):ti(e)(Ae$1(i,n)):Ge$1}function De$1(t,n){return he((e,i)=>{let r=0;e.subscribe(me(i,o=>t.call(n,o,r++)&&i.next(o)))})}function H_(t){return he((n,e)=>{let i=!1,r=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let l=r;r=null,e.next(l)}s&&e.complete()},c=()=>{o=null,s&&e.complete()};n.subscribe(me(e,l=>{i=!0,r=l,o||Fe$1(t(l)).subscribe(o=me(e,a,c))},()=>{s=!0,(!i||!o||o.closed)&&e.complete()}))})}function Il(t,n=qs$1){return H_(()=>Ks$1(t,n))}function Gt$1(t){return he((n,e)=>{let i=null,r=!1,o;i=n.subscribe(me(e,void 0,void 0,s=>{o=Fe$1(t(s,Gt$1(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function hn$1(t,n){return ae(n)?St(t,n,1):St(t,1)}function Ii(t,n=qs$1){return he((e,i)=>{let r=null,o=null,s=null,a=()=>{if(r){r.unsubscribe(),r=null;let l=o;o=null,i.next(l)}};function c(){let l=s+t,d=n.now();if(d<l){r=this.schedule(void 0,l-d),i.add(r);return}a()}e.subscribe(me(i,l=>{o=l,s=n.now(),r||(r=n.schedule(c,t),i.add(r))},()=>{a(),i.complete()},void 0,()=>{o=r=null}))})}function U_(t){return he((n,e)=>{let i=!1;n.subscribe(me(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function Lt$1(t){return t<=0?()=>Ge$1:he((n,e)=>{let i=0;n.subscribe(me(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function Lo(t,n=Jt){return t=t??uN,he((e,i)=>{let r,o=!0;e.subscribe(me(i,s=>{let a=n(s);(o||!t(r,a))&&(o=!1,r=a,i.next(s))}))})}function uN(t,n){return t===n}function z_(t=fN){return he((n,e)=>{let i=!1;n.subscribe(me(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function fN(){return new Fr}function Xi(t){return he((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function xi(t,n){let e=arguments.length>=2;return i=>i.pipe(t?De$1((r,o)=>t(r,o,i)):Jt,Lt$1(1),e?U_(n):z_(()=>new Fr))}function xl(t){return t<=0?()=>Ge$1:he((n,e)=>{let i=[];n.subscribe(me(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function Nl(){return he((t,n)=>{let e,i=!1;t.subscribe(me(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function Xs$1(t={}){let{connector:n=()=>new I,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let s,a,c,l=0,d=!1,f=!1,h=()=>{a?.unsubscribe(),a=void 0},p=()=>{h(),s=c=void 0,d=f=!1},v=()=>{let S=s;p(),S?.unsubscribe()};return he((S,P)=>{l++,!f&&!d&&h();let $=c=c??n();P.add(()=>{l--,l===0&&!f&&!d&&(a=Oh(v,r))}),$.subscribe(P),!s&&l>0&&(s=new Ei({next:J=>$.next(J),error:J=>{f=!0,h(),a=Oh(p,e,J),$.error(J)},complete:()=>{d=!0,h(),a=Oh(p,i),$.complete()}}),Fe$1(S).subscribe(s))})(o)}}function Oh(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new Ei({next:()=>{i.unsubscribe(),t()}});return Fe$1(n(...e)).subscribe(i)}function Tl(t,n,e){let i,r=!1;return t&&typeof t==`object`?{bufferSize:i=Infinity,windowTime:n=Infinity,refCount:r=!1,scheduler:e}=t:i=t??Infinity,Xs$1({connector:()=>new Rr(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function Pr(t){return De$1((n,e)=>t<=e)}function Qe(...t){let n=ei(t);return he((e,i)=>{(n?Ki(t,e,n):Ki(t,e)).subscribe(i)})}function Ze$1(t,n){return he((e,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();e.subscribe(me(i,c=>{r?.unsubscribe();let l=0,d=o++;Fe$1(t(c,d)).subscribe(r=me(i,f=>i.next(n?n(c,f,d,l++):f),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function ge$1(t){return he((n,e)=>{Fe$1(t).subscribe(me(e,()=>e.complete(),$s$1)),!e.closed&&n.subscribe(e)})}function ze(t,n,e){let i=ae(t)||n||e?{next:t,error:n,complete:e}:t;return i?he((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(me(o,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),o.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),o.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),o.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):Jt}var Pl=`https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss`;var w=class extends Error{code;constructor(n,e){super(en(n,e)),this.code=n}};function hN(t){return`NG0${Math.abs(t)}`}function en(t,n){return`${hN(t)}${n?`: `+n:``}`}function Ne$1(t){for(let n in t)if(t[n]===Ne$1)return n;throw Error(``)}function Z_(t,n){for(let e in n)Object.hasOwn(n,e)&&!Object.hasOwn(t,e)&&(t[e]=n[e])}function oa(t){if(typeof t==`string`)return t;if(Array.isArray(t))return`[${t.map(oa).join(`, `)}]`;if(t==null)return``+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return``+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Ll(t,n){return t?n?`${t} ${n}`:t:n||``}var pN=Ne$1({__forward_ref__:Ne$1});function At$1(t){return t.__forward_ref__=At$1,t}function Ct$1(t){return Zh(t)?t():t}function Zh(t){return typeof t==`function`&&Object.hasOwn(t,pN)&&t.__forward_ref__===At$1}function E(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function V(t){return{providers:t.providers||[],imports:t.imports||[]}}function sa(t){return mN(t,jl)}function Qh(t){return sa(t)!==null}function mN(t,n){return Object.hasOwn(t,n)&&t[n]||null}function gN(t){return(t?.[jl]??null)||null}function Ph(t){return t&&Object.hasOwn(t,Al)?t[Al]:null}var jl=Ne$1({ɵprov:Ne$1});var Al=Ne$1({ɵinj:Ne$1});var m=class{_desc;ngMetadataName=`InjectionToken`;ɵprov;constructor(n,e){this._desc=n,this.ɵprov=void 0,typeof e==`number`?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.ɵprov=E({token:this,providedIn:e.providedIn||`root`,factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Kh(t){return t&&!!t.ɵproviders}var aa=Ne$1({ɵcmp:Ne$1});var ca=Ne$1({ɵdir:Ne$1});var Xh=Ne$1({ɵpipe:Ne$1});var Jh=Ne$1({ɵmod:Ne$1});var ta=Ne$1({ɵfac:Ne$1});var Ur=Ne$1({__NG_ELEMENT_ID__:Ne$1});var $_=Ne$1({__NG_ENV_ID__:Ne$1});function Q_(t){return Vl(t,`@NgModule`),t[Jh]||null}function Ai(t){return Vl(t,`@Component`),t[aa]||null}function ep(t){return Vl(t,`@Directive`),t[ca]||null}function K_(t){return Vl(t,`@Pipe`),t[Xh]||null}function Vl(t,n){if(t==null)throw new w(-919,!1)}function zr(t){return typeof t==`string`?t:t==null?``:String(t)}var X_=Ne$1({ngErrorCode:Ne$1});var vN=Ne$1({ngErrorMessage:Ne$1});var bN=Ne$1({ngTokenPath:Ne$1});function tp(t,n){return J_(``,-200,n)}function Bl(t,n){throw new w(-201,!1)}function J_(t,n,e){let i=new w(n,t);return i[X_]=n,i[vN]=t,e&&(i[bN]=e),i}function _N(t){return t[X_]}var Lh;function ey(){return Lh}function jt$1(t){let n=Lh;return Lh=t,n}function np(t,n,e){let i=sa(t);if(i&&i.providedIn==`root`)return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;Bl(t,``)}var tt$1=globalThis;var Lr={};var wN=`__NG_DI_FLAG__`;var jh=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=jr(e)||0;try{return this.injector.get(n,i&8?null:Lr,i)}catch(r){if(Ao(r))return r;throw r}}};function SN(t,n=0){let e=Jc();if(e===void 0)throw new w(-203,!1);if(e===null)return np(t,void 0,n);{let i=CN(n),r=e.retrieve(t,i);if(Ao(r)){if(i.optional)return null;throw r}return r}}function C(t,n=0){return(ey()||SN)(Ct$1(t),n)}function u(t,n){return C(t,jr(n))}function jr(t){return typeof t>`u`||typeof t==`number`?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function CN(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Vh(t){let n=[];for(let e=0;e<t.length;e++){let i=Ct$1(t[e]);if(Array.isArray(i)){if(i.length===0)throw new w(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],c=DN(a);typeof c==`number`?c===-1?r=a.token:o|=c:r=a}n.push(C(r,o))}else n.push(C(i))}return n}function DN(t){return t[wN]}function er$1(t,n){return Object.hasOwn(t,ta)?t[ta]:null}function ty(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function ny(t){return t.flat(Number.POSITIVE_INFINITY)}function Hl(t,n){t.forEach(e=>Array.isArray(e)?Hl(e,n):n(e))}function ip(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function la(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function iy(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function ry(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;)t[r]=t[r-2],r--;t[n]=e,t[n+1]=i}}function Ul(t,n,e){let i=Bo(t,n);return i>=0?t[i|1]=e:(i=~i,ry(t,i,n,e)),i}function zl(t,n){let e=Bo(t,n);if(e>=0)return t[e|1]}function Bo(t,n){return EN(t,n,1)}function EN(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),s=t[o<<e];if(n===s)return o<<e;s>n?r=o:i=o+1}return~(r<<e)}var tr$1={};var Tt$1=[];var nr$1=new m(``);var da=new m(``,-1);var rp=new m(``);var Vo=class{get(n,e=Lr){if(e===Lr){let r=J_(``,-201);throw r.name=`ɵNotFound`,r}return e}};function ii(t){return{ɵproviders:t}}function oy(...t){return{ɵproviders:op(!0,t),ɵfromNgModule:!0}}function op(t,...n){let e=[],i=new Set,r,o=s=>{e.push(s)};return Hl(n,s=>{let a=s;Rl(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&sy(r,o),e}function sy(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];sp(r,o=>{n(o,i)})}}function Rl(t,n,e,i){if(t=Ct$1(t),!t)return!1;let r=null,o=Ph(t),s=!o&&Ai(t);if(!o&&!s){let c=t.ngModule;if(o=Ph(c),o)r=c;else return!1}else{if(s&&!s.standalone)return!1;r=t}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let c=typeof s.dependencies==`function`?s.dependencies():s.dependencies;for(let l of c)Rl(l,n,e,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let l;Hl(o.imports,d=>{Rl(d,n,e,i)&&(l||=[],l.push(d))}),l!==void 0&&sy(l,n)}if(!a){let l=er$1(r)||(()=>new r);n({provide:r,useFactory:l,deps:Tt$1},r),n({provide:rp,useValue:r,multi:!0},r),n({provide:nr$1,useValue:()=>C(r),multi:!0},r)}let c=o.providers;if(c!=null&&!a){let l=t;sp(c,d=>{n(d,l)})}}else return!1;return r!==t&&t.providers!==void 0}function sp(t,n){for(let e of t)Kh(e)&&(e=e.ɵproviders),Array.isArray(e)?sp(e,n):n(e)}var IN=Ne$1({provide:String,useValue:Ne$1});function ay(t){return t!==null&&typeof t==`object`&&IN in t}function xN(t){return!!(t&&t.useExisting)}function NN(t){return!!(t&&t.useFactory)}function Vr(t){return typeof t==`function`}function cy(t){return!!t.useClass}var ua=new m(``);var Ml={};var G_={};var Fh;function Ho(){return Fh===void 0&&(Fh=new Vo),Fh}var Te$1=class{};var Br=class extends Te$1{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,Hh(n,s=>this.processProvider(s)),this.records.set(da,jo(void 0,this)),r.has(`environment`)&&this.records.set(Te$1,jo(void 0,this));let o=this.records.get(ua);o!=null&&typeof o.value==`string`&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(rp,Tt$1,{self:!0}))}retrieve(n,e){let i=jr(e)||0;try{return this.get(n,Lr,i)}catch(r){if(Ao(r))return r;throw r}}destroy(){Js$1(this),this._destroyed=!0;let n=Q(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Q(n)}}onDestroy(n){return Js$1(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Js$1(this);let e=Jn$1(this),i=jt$1(void 0);try{return n()}finally{Jn$1(e),jt$1(i)}}get(n,e=Lr,i){if(Js$1(this),Object.hasOwn(n,$_))return n[$_](this);let r=jr(i),s=Jn$1(this),a=jt$1(void 0);try{if(!(r&4)){let l=this.records.get(n);if(l===void 0){let d=kN(n)&&sa(n);d&&this.injectableDefInScope(d)?l=jo(Bh(n),Ml):l=null,this.records.set(n,l)}if(l!=null)return this.hydrate(n,l,r)}let c=r&2?Ho():this.parent;return e=r&8&&e===Lr?null:e,c.get(n,e)}catch(c){let l=_N(c);throw l===-200||l===-201?new w(l,null):c}finally{jt$1(a),Jn$1(s)}}resolveInjectorInitializers(){let n=Q(null),e=Jn$1(this),i=jt$1(void 0);try{let o=this.get(nr$1,Tt$1,{self:!0});for(let s of o)s()}finally{Jn$1(e),jt$1(i),Q(n)}}toString(){return`R3Injector[...]`}processProvider(n){n=Ct$1(n);let e=Vr(n)?n:Ct$1(n&&n.provide),i=MN(n);if(!Vr(n)&&n.multi===!0){let r=this.records.get(e);r||(r=jo(void 0,Ml,!0),r.factory=()=>Vh(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=Q(null);try{if(e.value===G_)throw tp(``);return e.value===Ml&&(e.value=G_,e.value=e.factory(void 0,i)),typeof e.value==`object`&&e.value&&RN(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{Q(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=Ct$1(n.providedIn);return typeof e==`string`?e===`any`||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Bh(t){let n=sa(t),e=n!==null?n.factory:er$1(t);if(e!==null)return e;if(t instanceof m)throw new w(-204,!1);if(t instanceof Function)return TN(t);throw new w(-204,!1)}function TN(t){if(t.length>0)throw new w(-204,!1);let e=gN(t);return e!==null?()=>e.factory(t):()=>new t}function MN(t){if(ay(t))return jo(void 0,t.useValue);return jo(ap(t),Ml)}function ap(t,n,e){let i;if(Vr(t)){let r=Ct$1(t);return er$1(r)||Bh(r)}else if(ay(t))i=()=>Ct$1(t.useValue);else if(NN(t))i=()=>t.useFactory(...Vh(t.deps||[]));else if(xN(t))i=(r,o)=>C(Ct$1(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=Ct$1(t&&(t.useClass||t.provide));if(AN(t))i=()=>new r(...Vh(t.deps));else return er$1(r)||Bh(r)}return i}function Js$1(t){if(t.destroyed)throw new w(-205,!1)}function jo(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function AN(t){return!!t.deps}function RN(t){return t!==null&&typeof t==`object`&&typeof t.ngOnDestroy==`function`}function kN(t){return typeof t==`function`||typeof t==`object`&&t.ngMetadataName===`InjectionToken`}function Hh(t,n){for(let e of t)Array.isArray(e)?Hh(e,n):e&&Kh(e)?Hh(e.ɵproviders,n):n(e)}function nt$1(t,n){let e;t instanceof Br?(Js$1(t),e=t):e=new jh(t);let r=Jn$1(e),o=jt$1(void 0);try{return n()}finally{Jn$1(r),jt$1(o)}}function cp(){return ey()!==void 0||Jc()!=null}var On$1=0;var Z=1;var te=2;var ft=3;var pn$1=4;var Dt$1=5;var $r=6;var Uo=7;var Ke=8;var ri=9;var Fn$1=10;var Re$1=11;var zo=12;var lp=13;var ir$1=14;var Vt$1=15;var rr$1=16;var Gr=17;var oi=18;var si=19;var dp=20;var Ni=21;var $l=22;var Ti=23;var tn=24;var Wr=25;var ai=26;var He$1=27;var ly=1;var up=6;var qr=7;var fa=8;var Yr=9;var We$1=10;function Ri(t){return Array.isArray(t)&&typeof t[ly]==`object`}function mn$1(t){return Array.isArray(t)&&t[ly]===!0}function fp(t){return(t.flags&4)!==0}function ci(t){return t.componentOffset>-1}function $o(t){return(t.flags&1)===1}function li(t){return!!t.template}function Go(t){return(t[te]&512)!==0}function Zr(t){return(t[te]&256)===256}var Ce=(function(t){return t[t.NONE=0]=`NONE`,t[t.HTML=1]=`HTML`,t[t.STYLE=2]=`STYLE`,t[t.SCRIPT=3]=`SCRIPT`,t[t.URL=4]=`URL`,t[t.RESOURCE_URL=5]=`RESOURCE_URL`,t[t.ATTRIBUTE_NO_BINDING=6]=`ATTRIBUTE_NO_BINDING`,t})(Ce||{});var ea;var Hr=`svg`;var Gl=`math`;var Uh=``;var W_=`*`;var zh=()=>Object.create(null);function ON(){return ea||(ea=zh(),Ji(Ce.HTML,void 0,[[`iframe`,[`srcdoc`]],[`*`,[`innerHTML`,`outerHTML`]]]),Ji(Ce.STYLE,void 0,[[`*`,[`style`]]]),Ji(Ce.URL,void 0,[[`*`,[`formAction`]],[`area`,[`href`]],[`a`,[`href`,`xlink:href`]],[`form`,[`action`]],[`img`,[`src`]],[`video`,[`src`]]]),Ji(Ce.URL,Gl,[[`*`,[`href`,`xlink:href`]]]),Ji(Ce.RESOURCE_URL,void 0,[[`base`,[`href`]],[`embed`,[`src`]],[`frame`,[`src`]],[`iframe`,[`src`]],[`link`,[`href`]],[`object`,[`codebase`,`data`]]]),Ji(Ce.URL,Hr,[[`a`,[`href`,`xlink:href`]]]),Ji(Ce.ATTRIBUTE_NO_BINDING,Hr,[[`animate`,[`attributeName`,`values`,`to`,`from`]],[`set`,[`to`,`attributeName`]],[`animateMotion`,[`attributeName`]],[`animateTransform`,[`attributeName`]]]),Ji(Ce.ATTRIBUTE_NO_BINDING,void 0,[[`unknown`,[`attributeName`,`values`,`to`,`from`,`sandbox`,`allow`,`allowFullscreen`,`referrerPolicy`,`csp`,`fetchPriority`,`credentialless`]],[`iframe`,[`sandbox`,`allow`,`allowFullscreen`,`referrerPolicy`,`csp`,`fetchPriority`,`credentialless`]]]),ea)}function Ji(t,n,e){let i=n??Uh;for(let[r,o]of e){let s=r.toLowerCase();for(let a of o){let c=a.toLowerCase(),l=ea[c]??=zh(),d=l[i]??=zh();d[s]=t}}}function dy(t,n,e){let r=ON()[n.toLowerCase()];if(!r)return Ce.NONE;let o=t.toLowerCase(),s;if(e){let a=r[e];a&&(s=a[o]??a[W_])}if(s===void 0){let a=r[Uh];a&&(s=a[o]??a[W_])}if(s===void 0&&(!e||e===Uh)){let a=r[Hr];a&&(s=a[o])}return s??Ce.NONE}function Et(t){for(;Array.isArray(t);)t=t[On$1];return t}function hp(t,n){return Et(n[t])}function Wt$1(t,n){return Et(n[t.index])}function Wl(t,n){return t.data[n]}function ql(t,n){return t[n]}function pp(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function gn$1(t,n){let e=n[t];return Ri(e)?e:e[On$1]}function uy(t){return(t[te]&4)===4}function Yl(t){return(t[te]&128)===128}function fy(t){return mn$1(t[ft])}function nn$1(t,n){return n==null?null:t[n]}function mp(t){t[Gr]=0}function gp(t){t[te]&1024||(t[te]|=1024,Yl(t)&&Qr(t))}function hy(t,n){for(;t>0;)n=n[ir$1],t--;return n}function ha(t){return!!(t[te]&9216||t[tn]?.dirty)}function Zl(t){t[Fn$1].changeDetectionScheduler?.notify(8),t[te]&64&&(t[te]|=1024),ha(t)&&Qr(t)}function Qr(t){t[Fn$1].changeDetectionScheduler?.notify(0);let n=Mi(t);for(;n!==null&&!(n[te]&8192||(n[te]|=8192,!Yl(n)));)n=Mi(n)}function Ql(t,n){if(Zr(t))throw new w(911,!1);t[Ni]===null&&(t[Ni]=[]),t[Ni].push(n)}function py(t,n){if(t[Ni]===null)return;let e=t[Ni].indexOf(n);e!==-1&&t[Ni].splice(e,1)}function Mi(t){let n=t[ft];return mn$1(n)?n[ft]:n}function vp(t){return t[Uo]??=[]}function bp(t){return t.cleanup??=[]}function my(t,n,e,i){let r=vp(n);r.push(e),t.firstCreatePass&&bp(t).push(i,r.length-1)}var ue$1={lFrame:xy(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var $h=!1;function gy(){return ue$1.lFrame.elementDepthCount}function vy(){ue$1.lFrame.elementDepthCount++}function _p(){ue$1.lFrame.elementDepthCount--}function Kl(){return ue$1.bindingsEnabled}function yp(){return ue$1.skipHydrationRootTNode!==null}function wp(t){return ue$1.skipHydrationRootTNode===t}function Sp(){ue$1.skipHydrationRootTNode=null}function K$1(){return ue$1.lFrame.lView}function Pe$1(){return ue$1.lFrame.tView}function it$1(t){return ue$1.lFrame.contextLView=t,t[Ke]}function rt$1(t){return ue$1.lFrame.contextLView=null,t}function ot$1(){let t=Cp();for(;t!==null&&t.type===64;)t=t.parent;return t}function Cp(){return ue$1.lFrame.currentTNode}function by(){let t=ue$1.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Wo(t,n){let e=ue$1.lFrame;e.currentTNode=t,e.isParent=n}function Dp(){return ue$1.lFrame.isParent}function Ep(){ue$1.lFrame.isParent=!1}function _y(){return ue$1.lFrame.contextLView}function Ip(){return $h}function na(t){let n=$h;return $h=t,n}function pa(){let t=ue$1.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function yy(){return ue$1.lFrame.bindingIndex}function wy(t){return ue$1.lFrame.bindingIndex=t}function or$1(){return ue$1.lFrame.bindingIndex++}function Xl(t){let n=ue$1.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function Sy(){return ue$1.lFrame.inI18n}function Cy(t,n){let e=ue$1.lFrame;e.bindingIndex=e.bindingRootIndex=t,Jl(n)}function Dy(){return ue$1.lFrame.currentDirectiveIndex}function Jl(t){ue$1.lFrame.currentDirectiveIndex=t}function Ey(t){let n=ue$1.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function ed(){return ue$1.lFrame.currentQueryIndex}function ma(t){ue$1.lFrame.currentQueryIndex=t}function FN(t){let n=t[Z];return n.type===2?n.declTNode:n.type===1?t[Dt$1]:null}function xp(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=FN(o),r===null||(o=o[ir$1],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=ue$1.lFrame=Iy();return i.currentTNode=n,i.lView=t,!0}function td(t){let n=Iy(),e=t[Z];ue$1.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function Iy(){let t=ue$1.lFrame,n=t===null?null:t.child;return n===null?xy(t):n}function xy(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function Ny(){let t=ue$1.lFrame;return ue$1.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Np=Ny;function nd(){let t=Ny();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Ty(t){return(ue$1.lFrame.contextLView=hy(t,ue$1.lFrame.contextLView))[Ke]}function Pn$1(){return ue$1.lFrame.selectedIndex}function sr$1(t){ue$1.lFrame.selectedIndex=t}function Kr(){let t=ue$1.lFrame;return Wl(t.tView,t.selectedIndex)}function qo(){ue$1.lFrame.currentNamespace=Hr}function Tp(){return ue$1.lFrame.currentNamespace}var My=!0;function id(){return My}function ga(t){My=t}function Gh(t,n=null,e=null,i){let r=Mp(t,n,e,i);return r.resolveInjectorInitializers(),r}function Mp(t,n=null,e=null,i,r=new Set){return new Br([e||Tt$1,oy(t)],n||Ho(),null,r)}var ie$1=class t{static THROW_IF_NOT_FOUND=Lr;static NULL=new Vo;static create(n,e){if(Array.isArray(n))return Gh({name:``},e,n,``);{let i=n.name??``;return Gh({name:i},n.parent,n.providers,i)}}static ɵprov=E({token:t,providedIn:`any`,factory:()=>C(da)});static __NG_ELEMENT_ID__=-1};var q=new m(``);var Be=class{static __NG_ELEMENT_ID__=PN;static __NG_ENV_ID__=n=>n};var kl=class extends Be{_lView;constructor(n){super(),this._lView=n}get destroyed(){return Zr(this._lView)}onDestroy(n){let e=this._lView;return Ql(e,n),()=>py(e,n)}};function PN(){return new kl(K$1())}var Ap=!1;var Ay=new m(``);var Ln$1=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Me$1(!1);debugTaskTracker=u(Ay,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new X(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static ɵprov=E({token:t,providedIn:`root`,factory:()=>new t})}return t})();var Wh=class extends I{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,cp()&&(this.destroyRef=u(Be,{optional:!0})??void 0,this.pendingTasks=u(Ln$1,{optional:!0})??void 0)}emit(n){let e=Q(null);try{super.next(n)}finally{Q(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),s=i;if(n&&typeof n==`object`){let c=n;r=c.next?.bind(c),o=c.error?.bind(c),s=c.complete?.bind(c)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return n instanceof fe$1&&n.add(a),a}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}};var W$1=Wh;function Ol(...t){}function Rp(t){let n,e;function i(){t=Ol;try{e!==void 0&&typeof cancelAnimationFrame==`function`&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch(r){}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame==`function`&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function Ry(t){return queueMicrotask(()=>t()),()=>{t=Ol}}var kp=`isAngularZone`;var ia=kp+`_ID`;var LN=0;var D=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new W$1(!1);onMicrotaskEmpty=new W$1(!1);onStable=new W$1(!1);onError=new W$1(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=Ap}=n;if(typeof Zone>`u`)throw new w(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,BN(s)}static isInAngularZone(){return typeof Zone<`u`&&Zone.current.get(kp)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new w(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new w(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,s=o.scheduleEventTask(`NgZoneEvent: `+r,n,jN,Ol,Ol);try{return o.runTask(s,e,i)}finally{o.cancelTask(s)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}};var jN={};function Op(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function VN(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Rp(()=>{t.callbackScheduled=!1,qh(t),t.isCheckStableRunning=!0,Op(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),qh(t)}function BN(t){let n=()=>{VN(t)},e=LN++;t._inner=t._inner.fork({name:`angular`,properties:{[kp]:!0,[ia]:e,[ia+e]:!0},onInvokeTask:(i,r,o,s,a,c)=>{if(HN(c))return i.invokeTask(o,s,a,c);try{return q_(t),i.invokeTask(o,s,a,c)}finally{(t.shouldCoalesceEventChangeDetection&&s.type===`eventTask`||t.shouldCoalesceRunChangeDetection)&&n(),Y_(t)}},onInvoke:(i,r,o,s,a,c,l)=>{try{return q_(t),i.invoke(o,s,a,c,l)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!UN(c)&&n(),Y_(t)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change==`microTask`?(t._hasPendingMicrotasks=s.microTask,qh(t),Op(t)):s.change==`macroTask`&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function qh(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function q_(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Y_(t){t._nesting--,Op(t)}var ra=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new W$1;onMicrotaskEmpty=new W$1;onStable=new W$1;onError=new W$1;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function HN(t){return ky(t,`__ignore_ng_zone__`)}function UN(t){return ky(t,`__scheduler_tick__`)}function ky(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var Mt$1=class{_console=console;handleError(n){this._console.error(`ERROR`,n)}};var qt$1=new m(``,{factory:()=>{let t=u(D),n=u(Te$1),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(Mt$1),e.handleError(i))})}}});var Oy={provide:nr$1,useValue:()=>{u(Mt$1,{optional:!0})},multi:!0};function ne$1(t,n){let[e,i,r]=_h(t,n?.equal),o=e;o[Ye$1];return o.set=i,o.update=r,o.asReadonly=rd.bind(o),o}function rd(){let t=this[Ye$1];if(t.readonlyFn===void 0){let n=()=>this();n[Ye$1]=t,t.readonlyFn=n}return t.readonlyFn}var ki=new m(``,{factory:()=>zN});var zN=`ng`;var od=new m(``);var Xr=new m(``,{providedIn:`platform`,factory:()=>`unknown`});var va=new m(``);var ar=new m(``,{factory:()=>u(q).body?.querySelector(`[ngCspNonce]`)?.getAttribute(`ngCspNonce`)||null});var Yo=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=$N}return t})();function $N(){return new Yo(K$1(),ot$1())}var kn$1=class{};var Zo=new m(``,{factory:()=>!0});var sd=new m(``);var ad=(()=>{class t{static ɵprov=E({token:t,providedIn:`root`,factory:()=>new Yh})}return t})();var Yh=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}};var Fl=class{[Ye$1];constructor(n){this[Ye$1]=n}destroy(){this[Ye$1].destroy()}};function Yt$1(t,n){let e=n?.injector??u(ie$1),i=n?.manualCleanup!==!0?e.get(Be):null,r,o=e.get(Yo,null,{optional:!0}),s=e.get(kn$1);return o!==null?(r=Py(o.view,s,t),i instanceof kl&&i._lView===o.view&&(i=null)):r=qN(t,e.get(ad),s),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Fl(r)}var Fy=G(g({},yh),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=na(!1);try{wh(this)}finally{na(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=Q(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],Q(t)}}});var GN=G(g({},Fy),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Zi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}});var WN=G(g({},Fy),{consumerMarkedDirty(){this.view[te]|=8192,Qr(this.view),this.notifier.notify(13)},destroy(){if(Zi(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[Ti]?.delete(this)}});function Py(t,n,e){let i=Object.create(WN);return i.view=t,i.zone=typeof Zone<`u`?Zone.current:null,i.notifier=n,i.fn=Ly(i,e),t[Ti]??=new Set,t[Ti].add(i),i.consumerMarkedDirty(i),i}function qN(t,n,e){let i=Object.create(GN);return i.fn=Ly(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<`u`?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function Ly(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function jn$1(t){return typeof t==`function`&&t[Ye$1]!==void 0}var Jr=(()=>{class t{internalPendingTasks=u(Ln$1);scheduler=u(kn$1);errorHandler=u(qt$1);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();try{e().catch(this.errorHandler).finally(i)}catch(r){this.errorHandler(r),i()}}static ɵprov=E({token:t,providedIn:`root`,factory:()=>new t})}return t})();var kd=Symbol(`InputSignalNode#UNSET`);var Dw=G(g({},Mo),{transformFn:void 0,applyValueToInputSignal(t,n){Qi(t,n)}});function Ta(t){return{toString:t}.toString()}var Ee=(function(t){return t[t.TemplateCreateStart=0]=`TemplateCreateStart`,t[t.TemplateCreateEnd=1]=`TemplateCreateEnd`,t[t.TemplateUpdateStart=2]=`TemplateUpdateStart`,t[t.TemplateUpdateEnd=3]=`TemplateUpdateEnd`,t[t.LifecycleHookStart=4]=`LifecycleHookStart`,t[t.LifecycleHookEnd=5]=`LifecycleHookEnd`,t[t.OutputStart=6]=`OutputStart`,t[t.OutputEnd=7]=`OutputEnd`,t[t.BootstrapApplicationStart=8]=`BootstrapApplicationStart`,t[t.BootstrapApplicationEnd=9]=`BootstrapApplicationEnd`,t[t.BootstrapComponentStart=10]=`BootstrapComponentStart`,t[t.BootstrapComponentEnd=11]=`BootstrapComponentEnd`,t[t.ChangeDetectionStart=12]=`ChangeDetectionStart`,t[t.ChangeDetectionEnd=13]=`ChangeDetectionEnd`,t[t.ChangeDetectionSyncStart=14]=`ChangeDetectionSyncStart`,t[t.ChangeDetectionSyncEnd=15]=`ChangeDetectionSyncEnd`,t[t.AfterRenderHooksStart=16]=`AfterRenderHooksStart`,t[t.AfterRenderHooksEnd=17]=`AfterRenderHooksEnd`,t[t.ComponentStart=18]=`ComponentStart`,t[t.ComponentEnd=19]=`ComponentEnd`,t[t.DeferBlockStateStart=20]=`DeferBlockStateStart`,t[t.DeferBlockStateEnd=21]=`DeferBlockStateEnd`,t[t.DynamicComponentStart=22]=`DynamicComponentStart`,t[t.DynamicComponentEnd=23]=`DynamicComponentEnd`,t[t.HostBindingsUpdateStart=24]=`HostBindingsUpdateStart`,t[t.HostBindingsUpdateEnd=25]=`HostBindingsUpdateEnd`,t})(Ee||{});var vd=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}};function Ew(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var Iw=null;var qe=(()=>{Iw=jy;let t=()=>jy;return t.ngInherit=!0,t})();function rT(){return Iw}function jy(t){return t.type.prototype.ngOnChanges&&(t.setInput=sT),oT}function oT(){let t=xw(this),n=t?.current;if(n){let e=t.previous;if(e===tr$1)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function sT(t,n,e,i,r){let o=this.declaredInputs[i],s=xw(t)||aT(t,{previous:tr$1,current:null}),a=s.current||(s.current={}),c=s.previous,l=c[o];a[o]=new vd(l&&l.currentValue,e,c===tr$1),Ew(t,n,r,e)}var Wp=`__ngSimpleChanges__`;function xw(t){return Object.hasOwn(t,Wp)&&t[Wp]||null}function aT(t,n){return t[Wp]=n}var Vy=[];var ke$1=function(t,n=null,e){for(let i=0;i<Vy.length;i++){let r=Vy[i];r(t,n,e)}};function cT(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let s=rT()(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function Nw(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:d}=t.data[e].type.prototype;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),c&&(t.viewHooks??=[]).push(-e,c),l&&((t.viewHooks??=[]).push(e,l),(t.viewCheckHooks??=[]).push(e,l)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function hd(t,n,e){Tw(t,n,3,e)}function pd(t,n,e,i){(t[te]&3)===e&&Tw(t,n,e,i)}function Fp(t,n){let e=t[te];(e&3)===n&&(e&=16383,e+=1,t[te]=e)}function Tw(t,n,e,i){let r=i!==void 0?t[Gr]&65535:0,o=i??-1,s=n.length-1,a=0;for(let c=r;c<s;c++)if(typeof n[c+1]==`number`){if(a=n[c],i!=null&&a>=i)break}else n[c]<0&&(t[Gr]+=65536),(a<o||o==-1)&&(lT(t,e,n,c),t[Gr]=(t[Gr]&4294901760)+c+2),c++}function By(t,n){ke$1(Ee.LifecycleHookStart,t,n);let e=Q(null);try{n.call(t)}finally{Q(e),ke$1(Ee.LifecycleHookEnd,t,n)}}function lT(t,n,e,i){let r=e[i]<0,o=e[i+1],a=t[r?-e[i]:e[i]];r?t[te]>>14<t[Gr]>>16&&(t[te]&3)===n&&(t[te]+=16384,By(a,o)):By(a,o)}var Ko=-1;var no=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function dT(t){return(t.flags&8)!==0}function uT(t){return(t.flags&16)!==0}function fT(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r==`number`){if(r!==0)break;i++;let o=e[i++],s=e[i++],a=e[i++];t.setAttribute(n,s,a,o)}else{let o=r,s=e[++i];hT(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),i++}}return i}function Mw(t){return t===3||t===4||t===6}function hT(t){return t.charCodeAt(0)===64}function Xo(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r==`number`?e=r:e===0||(e===-1||e===2?Hy(t,e,r,null,n[++i]):Hy(t,e,r,null,null))}}return t}function Hy(t,n,e,i,r){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a==`number`){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a==`number`)break;if(a===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function Aw(t){return t!==Ko}function bd(t){return t&32767}function pT(t){return t>>16}function _d(t,n){let e=pT(t),i=n;for(;e>0;)i=i[ir$1],e--;return i}var qp=!0;function yd(t){let n=qp;return qp=t,n}var Rw=255;var kw=5;var gT=0;var di={};function vT(t,n,e){let i;typeof e==`string`?i=e.charCodeAt(0)||0:Object.hasOwn(e,Ur)&&(i=e[Ur]),i??=e[Ur]=gT++;let r=i&Rw,o=1<<r;n.data[t+(r>>kw)]|=o}function wd(t,n){let e=Ow(t,n);if(e!==-1)return e;let i=n[Z];i.firstCreatePass&&(t.injectorIndex=n.length,Pp(i.data,t),Pp(n,null),Pp(i.blueprint,null));let r=Tm(t,n),o=t.injectorIndex;if(Aw(r)){let s=bd(r),a=_d(r,n),c=a[Z].data;for(let l=0;l<8;l++)n[o+l]=a[s+l]|c[s+l]}return n[o+8]=r,o}function Pp(t,n){t.push(0,0,0,0,0,0,0,0,n)}function Ow(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Tm(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=Vw(r),i===null)return Ko;if(e++,r=r[ir$1],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return Ko}function Yp(t,n,e){vT(t,n,e)}function bT(t,n){if(n===`class`)return t.classes;if(n===`style`)return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(Mw(o))break;if(o===0)r=r+2;else if(typeof o==`number`)for(r++;r<i&&typeof e[r]==`string`;)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function Fw(t,n,e){if(e&8||t!==void 0)return t;Bl(n,`NodeInjector`)}function Pw(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[ri],o=jt$1(void 0);try{return r?r.get(n,i,e&8):np(n,i,e&8)}finally{jt$1(o)}}return Fw(i,n,e)}function Lw(t,n,e,i=0,r){if(t!==null){if(n[te]&2048&&!(i&2)){let s=ST(t,n,e,i,di);if(s!==di)return s}let o=jw(t,n,e,i,di);if(o!==di)return o}return Pw(n,e,i,r)}function jw(t,n,e,i,r){let o=yT(e);if(typeof o==`function`){if(!xp(n,t,i))return i&1?Fw(r,e,i):Pw(n,e,i,r);try{let s;if(s=o(i),s==null&&!(i&8))Bl(e);else return s}finally{Np()}}else if(typeof o==`number`){let s=null,a=Ow(t,n),c=Ko,l=i&1?n[Vt$1][Dt$1]:null;for((a===-1||i&4)&&(c=a===-1?Tm(t,n):n[a+8],c===Ko||!zy(i,!1)?a=-1:(s=n[Z],a=bd(c),n=_d(c,n)));a!==-1;){let d=n[Z];if(Uy(o,a,d.data)){let f=_T(a,n,e,s,i,l);if(f!==di)return f}c=n[a+8],c!==Ko&&zy(i,n[Z].data[a+8]===l)&&Uy(o,a,n)?(s=d,a=bd(c),n=_d(c,n)):a=-1}}return r}function _T(t,n,e,i,r,o){let s=n[Z],a=s.data[t+8],d=md(a,s,e,i==null?ci(a)&&qp:i!=s&&(a.type&3)!==0,r&1&&o===a);return d!==null?Sa(n,s,d,a,r):di}function md(t,n,e,i,r){let o=t.providerIndexes,s=n.data,a=o&1048575,c=t.directiveStart,l=t.directiveEnd,d=o>>20,f=i?a:a+d,h=r?a+d:l;for(let p=f;p<h;p++){let v=s[p];if(p<c&&e===v||p>=c&&v.type===e)return p}if(r){let p=s[c];if(p&&li(p)&&p.type===e)return c}return null}function Sa(t,n,e,i,r){let o=t[e],s=n.data;if(o instanceof no){let a=o;if(a.resolving)throw tp(``);let c=yd(a.canSeeViewProviders);a.resolving=!0;s[e].type||s[e];let f=a.injectImpl?jt$1(a.injectImpl):null;xp(t,i,0);try{o=t[e]=a.factory(void 0,r,s,t,i),n.firstCreatePass&&e>=i.directiveStart&&cT(e,s[e],n)}finally{f!==null&&jt$1(f),yd(c),a.resolving=!1,Np()}}return o}function yT(t){if(typeof t==`string`)return t.charCodeAt(0)||0;let n=Object.hasOwn(t,Ur)?t[Ur]:void 0;return typeof n==`number`?n>=0?n&Rw:wT:n}function Uy(t,n,e){let i=1<<t;return!!(e[n+(t>>kw)]&i)}function zy(t,n){return!(t&2)&&!(t&1&&n)}var cr$1=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return Lw(this._tNode,this._lView,n,jr(i),e)}};function wT(){return new cr$1(ot$1(),K$1())}function ht(t){return Ta(()=>{let n=t.prototype.constructor,e=n[ta]||Zp(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[ta]||Zp(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function Zp(t){return Zh(t)?()=>{let n=Zp(Ct$1(t));return n&&n()}:er$1(t)}function ST(t,n,e,i,r){let o=t,s=n;for(;o!==null&&s!==null&&s[te]&2048&&!Go(s);){let a=jw(o,s,e,i|2,di);if(a!==di)return a;i&=-5;let c=o.parent;if(!c){let l=s[dp];if(l){let d=l.get(e,di,i);if(d!==di)return d}c=Vw(s),s=s[ir$1]}o=c}return r}function Vw(t){let n=t[Z],e=n.type;return e===2?n.declTNode:e===1?t[Dt$1]:null}function Ma(t){return bT(ot$1(),t)}function x$1(t){return{token:t.token,providedIn:t.autoProvided===!1?null:`root`,factory:t.factory,value:void 0}}function CT(){return is$1(ot$1(),K$1())}function is$1(t,n){return new O(Wt$1(t,n))}var O=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=CT}return t})();function Hw(t){return t instanceof O?t.nativeElement:t}function DT(){return this._results[Symbol.iterator]()}var Hn$1=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new I}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=ny(n);(this._changesDetected=!ty(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=DT};function Uw(t){return(t.flags&128)===128}var Mm=(function(t){return t[t.OnPush=0]=`OnPush`,t[t.Eager=1]=`Eager`,t[t.Default=1]=`Default`,t})(Mm||{});var zw=new Map;var ET=0;function IT(){return ET++}function xT(t){zw.set(t[si],t)}function Qp(t){zw.delete(t[si])}var $y=`__ngContext__`;function Jo(t,n){Ri(n)?(t[$y]=n[si],xT(n)):t[$y]=n}function $w(t){return Ww(t[zo])}function Gw(t){return Ww(t[pn$1])}function Ww(t){for(;t!==null&&!mn$1(t);)t=t[pn$1];return t}var Kp;function Am(t){Kp=t}function Rm(){if(Kp!==void 0)return Kp;if(typeof document<`u`)return document;throw new w(210,!1)}var qw=`r`;var Yw=`di`;var km=new m(``);var Zw=!1;var Qw=new m(``,{factory:()=>Zw});var Od=new m(``);var Gy=new WeakMap;function NT(t,n){if(t==null||typeof t!=`object`)return;let e=Gy.get(t);e||(e=new WeakSet,Gy.set(t,e)),e.add(n)}function Fd(t){return(t.flags&32)===32}var AT=()=>null;function Kw(t,n,e=!1){return AT(t,n,e)}function Xw(t,n){let e=t.contentQueries;if(e!==null){let i=Q(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],s=e[r+1];if(s!==-1){let a=t.data[s];ma(o),a.contentQueries(2,n[s],s)}}}finally{Q(i)}}}function Xp(t,n,e){ma(0);let i=Q(null);try{n(t,e)}finally{Q(i)}}function Om(t,n,e){if(fp(n)){let i=Q(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let s=r;s<o;s++){let a=t.data[s];if(a.contentQueries){let c=e[s];a.contentQueries(1,c,s)}}}finally{Q(i)}}}var Un$1=(function(t){return t[t.Emulated=0]=`Emulated`,t[t.None=2]=`None`,t[t.ShadowDom=3]=`ShadowDom`,t[t.ExperimentalIsolatedShadowDom=4]=`ExperimentalIsolatedShadowDom`,t})(Un$1||{});var RT={"http://www.w3.org/2000/svg":Hr,"http://www.w3.org/1998/Math/MathML":Gl};var cd;function kT(){if(cd===void 0&&(cd=null,tt$1.trustedTypes))try{cd=tt$1.trustedTypes.createPolicy(`angular`,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){}return cd}function Pd(t){return kT()?.createHTML(t)||t}var ld;function Jw(){if(ld===void 0&&(ld=null,tt$1.trustedTypes))try{ld=tt$1.trustedTypes.createPolicy(`angular#unsafe-bypass`,{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){}return ld}function Wy(t){return Jw()?.createHTML(t)||t}function qy(t){return Jw()?.createScriptURL(t)||t}var Oi=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Pl})`}};var Jp=class extends Oi{getTypeName(){return`HTML`}};var em=class extends Oi{getTypeName(){return`Style`}};var tm=class extends Oi{getTypeName(){return`Script`}};var nm=class extends Oi{getTypeName(){return`URL`}};var im=class extends Oi{getTypeName(){return`ResourceURL`}};function Zt$1(t){return t instanceof Oi?t.changingThisBreaksApplicationSecurity:t}function hi(t,n){let e=eS(t);if(e!=null&&e!==n){if(e===`ResourceURL`&&n===`URL`)return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${Pl})`)}return e===n}function eS(t){return t instanceof Oi&&t.getTypeName()||null}function Fm(t){return new Jp(t)}function Pm(t){return new em(t)}function Lm(t){return new tm(t)}function jm(t){return new nm(t)}function Vm(t){return new im(t)}function OT(t){let n=new om(t);return FT()?new rm(n):n}var rm=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n=`<body><remove></remove>`+n;try{let e=new window.DOMParser().parseFromString(Pd(n),`text/html`).body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch(e){return null}}};var om=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument(`sanitization-inert`)}getInertBodyElement(n){let e=this.inertDocument.createElement(`template`);return e.innerHTML=Pd(n),e}};function FT(){try{return!!new window.DOMParser().parseFromString(Pd(``),`text/html`)}catch(t){return!1}}var PT=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Aa(t){return t=String(t),t.match(PT)?t:`unsafe:`+t}function Fi(t){let n=Object.create(null);for(let e of t.split(`,`))n[e]=!0;return n}function Ra(...t){let n=Object.create(null);for(let e of t)for(let i in e)Object.hasOwn(e,i)&&(n[i]=!0);return n}var tS=Fi(`area,br,col,hr,img,wbr`);var nS=Fi(`colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr`);var iS=Fi(`rp,rt`);var LT=Ra(iS,nS);var Yy=Ra(tS,Ra(nS,Fi(`address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul`)),Ra(iS,Fi(`a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video`)),LT);var rS=Fi(`background,cite,href,itemtype,longdesc,poster,src,xlink:href`);var UT=Ra(rS,Fi(`abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width`),Fi(`aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext`));var zT=Fi(`script,style,template`);var sm=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=WT(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=GT(e);if(o){e=o;break}e=r.pop()}}return this.buf.join(``)}startElement(n){let e=Zy(n).toLowerCase();if(!Object.hasOwn(Yy,e))return this.sanitizedSomething=!0,!Object.hasOwn(zT,e);this.buf.push(`<`),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),s=o.name,a=s.toLowerCase();if(!Object.hasOwn(UT,a)){this.sanitizedSomething=!0;continue}let c=o.value;rS[a]&&(c=Aa(c)),this.buf.push(` `,s,`="`,Qy(c),`"`)}return this.buf.push(`>`),!0}endElement(n){let e=Zy(n).toLowerCase();Object.hasOwn(Yy,e)&&!Object.hasOwn(tS,e)&&(this.buf.push(`</`),this.buf.push(e),this.buf.push(`>`))}chars(n){this.buf.push(Qy(n))}};function $T(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function GT(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw oS(n);return n}function WT(t){let n=t.firstChild;if(n&&$T(t,n))throw oS(n);return n}function Zy(t){let n=t.nodeName;return typeof n==`string`?n:`FORM`}function oS(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var qT=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g;var YT=/([^\#-~ |!])/g;function Qy(t){return t.replace(/&/g,`&amp;`).replace(qT,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return`&#`+((e-55296)*1024+(i-56320)+65536)+`;`}).replace(YT,function(n){return`&#`+n.charCodeAt(0)+`;`}).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}var dd;function Ld(t,n){let e=null;try{dd=dd||OT(t);let i=n?String(n):``;e=dd.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error(`Failed to sanitize html because the input is unstable`);r--,i=o,o=e.innerHTML,e=dd.getInertBodyElement(i)}while(i!==o);return Pd(new sm().sanitizeChildren(Ky(e)||e))}finally{if(e){let i=Ky(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function Ky(t){return`content`in t&&ZT(t)?t.content:null}function ZT(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName===`TEMPLATE`}var QT=/^>|^->|<!--|-->|--!>|<!-$/g;var KT=/(<|>)/g;var XT=`​$1​`;function JT(t){return t.replace(QT,n=>n.replace(KT,XT))}function eM(t,n){return t.createText(n)}function tM(t,n,e){t.setValue(n,e)}function nM(t,n){return t.createComment(JT(n))}function sS(t,n,e){return t.createElement(n,e)}function eo(t,n,e,i,r){t.insertBefore(n,e,i,r)}function aS(t,n,e){t.appendChild(n,e)}function Xy(t,n,e,i,r){i!==null?eo(t,n,e,i,r):aS(t,n,e)}function cS(t,n,e,i){t.removeChild(null,n,e,i)}function iM(t,n,e){t.setAttribute(n,`style`,e)}function rM(t,n,e){e===``?t.removeAttribute(n,`class`):t.setAttribute(n,`class`,e)}function lS(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&fT(t,n,i),r!==null&&rM(t,n,r),o!==null&&iM(t,n,o)}function oM(t,n=!0){if(t[0]!=`:`)return[null,t];let e=t.indexOf(`:`,1);if(e===-1){if(n)throw new Error(`Unsupported format "${t}" expecting ":namespace:name"`);return[null,t]}return[t.slice(1,e),t.slice(e+1)]}function sM(t,n,e){if(n!==void 0&&e!==void 0&&uS(n,e)!==Ce.HTML)return t;let i=Hm();return i?Wy(i.sanitize(Ce.HTML,t)||``):hi(t,`HTML`)?Wy(Zt$1(t)):Ld(Rm(),zr(t))}function so(t){let n=Hm();return n?n.sanitize(Ce.URL,t)||``:hi(t,`URL`)?Zt$1(t):Aa(zr(t))}function dS(t){let n=Hm();if(n)return qy(n.sanitize(Ce.RESOURCE_URL,t)||``);if(hi(t,`ResourceURL`))return qy(Zt$1(t));throw new w(904,!1)}function aM(t,n){switch(uS(t,n)){case Ce.RESOURCE_URL:return dS;case Ce.URL:return so;default:return null}}function Bm(t,n,e){return aM(n,e)?.(t)??t}function Hm(){let t=K$1();return t&&t[Fn$1].sanitizer}function uS(t,n){let[e,i]=cM(t);return dy(i,n,e)}function cM(t){t=t.toLowerCase();let n=oM(t,!1);if(n[0])return n;let i=Pn$1()===-1?null:Kr(),r=i?.namespace;if(t===`#host`&&i?.type===2){let o=Wt$1(i,K$1());if(o.tagName&&(t=o.tagName.toLowerCase()),r==null){let s=o.namespaceURI;r=s&&RT[s]}}return[r,t]}function lM(t){return t instanceof Function?t():t}function dM(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var fS=`ng-template`;function uM(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]==`string`;r+=2)if(n[r]===`class`&&dM(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(Um(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])==`string`;)if(o.toLowerCase()===e)return!0}return!1}function Um(t){return t.type===4&&t.value!==fS}function fM(t,n,e){return n===(t.type===4&&!e?fS:t.value)}function hM(t,n,e){let i=4,r=t.attrs,o=r!==null?gM(r):0,s=!1;for(let a=0;a<n.length;a++){let c=n[a];if(typeof c==`number`){if(!s&&!Vn$1(i)&&!Vn$1(c))return!1;if(s&&Vn$1(c))continue;s=!1,i=c|i&1;continue}if(!s)if(i&4){if(i=2|i&1,c!==``&&!fM(t,c,e)||c===``&&n.length===1){if(Vn$1(i))return!1;s=!0}}else if(i&8){if(r===null||!uM(t,r,c,e)){if(Vn$1(i))return!1;s=!0}}else{let l=n[++a],d=pM(c,r,Um(t),e);if(d===-1){if(Vn$1(i))return!1;s=!0;continue}if(l!==``){let f;if(d>o?f=``:f=r[d+1].toLowerCase(),i&2&&l!==f){if(Vn$1(i))return!1;s=!0}}}}return Vn$1(i)||s}function Vn$1(t){return(t&1)===0}function pM(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let s=n[r];if(s===t)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++r];for(;typeof a==`string`;)a=n[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return vM(n,t)}function hS(t,n,e=!1){for(let i=0;i<n.length;i++)if(hM(t,n[i],e))return!0;return!1}function mM(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function gM(t){for(let n=0;n<t.length;n++){let e=t[n];if(Mw(e))return n}return t.length}function vM(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i==`number`)return-1;if(i===n)return e;e++}return-1}function bM(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function Jy(t,n){return t?`:not(`+n.trim()+`)`:n}function _M(t){let n=t[0],e=1,i=2,r=``,o=!1;for(;e<t.length;){let s=t[e];if(typeof s==`string`)if(i&2){let a=t[++e];r+=`[`+s+(a.length>0?`="`+a+`"`:``)+`]`}else i&8?r+=`.`+s:i&4&&(r+=` `+s);else r!==``&&!Vn$1(s)&&(n+=Jy(o,r),r=``),i=s,o=o||!Vn$1(i);e++}return r!==``&&(n+=Jy(o,r)),n}function yM(t){return t.map(_M).join(`,`)}function wM(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o==`string`)r===2?o!==``&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!Vn$1(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Bt$1={};var ui=(function(t){return t[t.Important=1]=`Important`,t[t.DashCase=2]=`DashCase`,t})(ui||{});var SM;function zm(t,n){return SM(t,n)}var lr$1=new Set;typeof document<`u`&&document?.documentElement?.getAnimations;var am=new WeakMap;function pS(t){return t?t[ir$1]??t:null}var _a=new WeakSet;function CM(t,n,e){let i=am.get(t);if(!i||i.length===0)return;let r=n.parentNode,o=n.previousSibling,s=pS(e);for(let a=i.length-1;a>=0;a--){let{el:c,declarationView:l}=i[a],d=c.parentNode;c===n?(i.splice(a,1),_a.add(c),c.dispatchEvent(new CustomEvent(`animationend`,{detail:{cancel:!0}}))):o&&c===o?(i.splice(a,1),c.dispatchEvent(new CustomEvent(`animationend`,{detail:{cancel:!0}})),c.parentNode?.removeChild(c)):d&&r&&d!==r&&(s===null||l===null||s===l)&&(i.splice(a,1),c.dispatchEvent(new CustomEvent(`animationend`,{detail:{cancel:!0}})),c.parentNode?.removeChild(c))}}function DM(t,n,e){let i=pS(e),r=am.get(t);r?r.some(o=>o.el===n)||r.push({el:n,declarationView:i}):am.set(t,[{el:n,declarationView:i}])}var jd=(function(t){return t[t.CHANGE_DETECTION=0]=`CHANGE_DETECTION`,t[t.AFTER_NEXT_RENDER=1]=`AFTER_NEXT_RENDER`,t})(jd||{});var zn$1=new m(``);var ew=new Set;function bn$1(t){ew.has(t)||(ew.add(t),performance?.mark?.(`mark_feature_usage`,{detail:{feature:t}}))}var Vd=(()=>{class t{impl=null;execute(){this.impl?.execute()}static ɵprov=E({token:t,providedIn:`root`,factory:()=>new t})}return t})();var $m=[0,1,2,3];var Gm=(()=>{class t{ngZone=u(D);scheduler=u(kn$1);errorHandler=u(Mt$1,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(zn$1,{optional:!0})}execute(){let e=this.sequences.size>0;e&&ke$1(Ee.AfterRenderHooksStart),this.executing=!0;for(let i of $m)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&ke$1(Ee.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[Wr]??=[]).push(e),Qr(i),i[te]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(jd.AFTER_NEXT_RENDER,e):e()}static ɵprov=E({token:t,providedIn:`root`,factory:()=>new t})}return t})();var Ca=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,s=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[Wr];n&&(this.view[Wr]=n.filter(e=>e!==this))}};function bt$1(t,n){let e=n?.injector??u(ie$1);return bn$1(`NgAfterNextRender`),IM(t,e,n,!0)}function EM(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function IM(t,n,e,i){let r=n.get(Vd);r.impl??=n.get(Gm);let o=n.get(zn$1,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(Be):null,a=n.get(Yo,null,{optional:!0}),c=new Ca(r.impl,EM(t),a?.view,i,s,o?.snapshot(null));return r.impl.register(c),c}var Wm=new m(``,{factory:()=>{let t=u(Te$1),n=new Set;return t.onDestroy(()=>n.clear()),{queue:n,isScheduled:!1,scheduler:null,injector:t}}});function mS(t,n,e){let i=t.get(Wm);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function xM(t,n){let e=t.get(Wm);if(Array.isArray(n))for(let i of n)e.queue.delete(i);else e.queue.delete(n)}function NM(t,n){let e=t.get(Wm);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function TM(t,n){for(let[e,i]of n)mS(t,i.animateFns)}function tw(t,n,e,i){let r=t?.[ai]?.enter;n!==null&&r&&r.has(e.index)&&TM(i,r)}function nw(t,n,e,i){try{e.get(da)}catch(s){return i(!1)}let r=t?.[ai];r?.enter?.has(n.index)&&xM(e,r.enter.get(n.index).animateFns);let o=MM(t,n,r);if(o.size===0){let s=!1;if(t){let a=[];Bd(t,n,a),s=a.length>0}if(!s)return i(!1)}t&&lr$1.add(t[si]),mS(e,()=>AM(t,n,r||void 0,o,i),r||void 0)}function MM(t,n,e){let i=new Map,r=e?.leave;if(r&&r.has(n.index)&&i.set(n.index,r.get(n.index)),t&&r)for(let[o,s]of r){if(i.has(o))continue;let c=t[Z].data[o].parent;for(;c;){if(c===n){i.set(o,s);break}c=c.parent}}return i}function AM(t,n,e,i,r){let o=[];if(e&&e.leave)for(let[s]of i){if(!e.leave.has(s))continue;let a=e.leave.get(s);for(let c of a.animateFns){let{promise:l}=c();o.push(l)}e.detachedLeaveAnimationFns=void 0}if(t&&Bd(t,n,o),o.length>0){let s=e||t?.[ai];if(s){let a=s.running;a&&o.push(a),s.running=Promise.allSettled(o),kM(t,s.running,r)}else Promise.allSettled(o).then(()=>{t&&lr$1.delete(t[si]),r(!0)})}else t&&lr$1.delete(t[si]),r(!1)}function Bd(t,n,e){if(n.type&12){let r=t[n.index];if(mn$1(r))for(let o=We$1;o<r.length;o++){let s=r[o];s[Z].type===2&&RM(s,e)}}let i=n.child;for(;i;)Bd(t,i,e),i=i.next}function RM(t,n){let e=t[ai];if(e&&e.leave)for(let r of e.leave.values())for(let o of r.animateFns){let{promise:s}=o();n.push(s)}let i=t[Z].firstChild;for(;i;)Bd(t,i,n),i=i.next}function kM(t,n,e){n.then(()=>{t[ai]?.running===n&&(t[ai].running=void 0,lr$1.delete(t[si])),e(!0)})}function Qo(t,n,e,i,r,o,s,a){if(r!=null){let c,l=!1;mn$1(r)?c=r:Ri(r)&&(l=!0,r=r[On$1]);let d=Et(r);t===0&&i!==null?(tw(a,i,o,e),s==null?aS(n,i,d):eo(n,i,d,s||null,!0)):t===1&&i!==null?(tw(a,i,o,e),eo(n,i,d,s||null,!0),CM(o,d,a)):t===2?(a?.[ai]?.leave?.has(o.index)&&DM(o,d,a),_a.delete(d),nw(a,o,e,f=>{if(_a.has(d)){_a.delete(d);return}cS(n,d,l,f)})):t===3&&(_a.delete(d),nw(a,o,e,()=>{n.destroyNode(d)})),c!=null&&$M(n,t,e,c,o,i,s)}}function OM(t,n){gS(t,n),n[On$1]=null,n[Dt$1]=null}function FM(t,n,e,i,r,o){i[On$1]=r,i[Dt$1]=n,Ud(t,i,e,1,r,o)}function gS(t,n){n[Fn$1].changeDetectionScheduler?.notify(9),Ud(t,n,n[Re$1],2,null,null)}function PM(t){let n=t[zo];if(!n)return Lp(t[Z],t);for(;n;){let e=null;if(Ri(n))e=n[zo];else{let i=n[We$1];i&&(e=i)}if(!e){for(;n&&!n[pn$1]&&n!==t;)Ri(n)&&Lp(n[Z],n),n=n[ft];n===null&&(n=t),Ri(n)&&Lp(n[Z],n),e=n&&n[pn$1]}n=e}}function qm(t,n){let e=t[Yr],i=e.indexOf(n);e.splice(i,1)}function Hd(t,n){if(Zr(n))return;let e=n[Re$1];e.destroyNode&&Ud(t,n,e,3,null,null),PM(n)}function Lp(t,n){if(Zr(n))return;let e=Q(null);try{n[te]&=-129,n[te]|=256,n[tn]&&Zi(n[tn]),jM(t,n),LM(t,n),n[Z].type===1&&n[Re$1].destroy();let i=n[rr$1];if(i!==null&&mn$1(n[ft])){i!==n[ft]&&qm(i,n);let r=n[oi];r!==null&&r.detachView(t)}Qp(n)}finally{Q(e)}}function LM(t,n){let e=t.cleanup,i=n[Uo];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]==`string`){let a=e[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[e[s+1]];e[s].call(a)}i!==null&&(n[Uo]=null);let r=n[Ni];if(r!==null){n[Ni]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=n[Ti];if(o!==null){n[Ti]=null;for(let s of o)s.destroy()}}function jM(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof no)){let o=e[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],c=o[s+1];ke$1(Ee.LifecycleHookStart,a,c);try{c.call(a)}finally{ke$1(Ee.LifecycleHookEnd,a,c)}}else{ke$1(Ee.LifecycleHookStart,r,o);try{o.call(r)}finally{ke$1(Ee.LifecycleHookEnd,r,o)}}}}}function vS(t,n,e){if(n===null)throw new w(510,!1);return VM(t,n.parent,e)}function VM(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[On$1];if(ci(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===Un$1.None||r===Un$1.Emulated)return null}return Wt$1(i,e)}function bS(t,n,e){return HM(t,n,e)}function BM(t,n,e){return t.type&40?Wt$1(t,e):null}var HM=BM;var iw;function Ym(t,n,e,i){let r=vS(t,i,n),o=n[Re$1],a=bS(i.parent||n[Dt$1],i,n);if(r!=null)if(Array.isArray(e))for(let c=0;c<e.length;c++)Xy(o,r,e[c],a,!1);else Xy(o,r,e,a,!1);iw!==void 0&&iw(o,i,n,e,r)}function ya(t,n){if(n!==null){let e=n.type;if(e&3)return Wt$1(n,t);if(e&4)return cm(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return ya(t,i);{let r=t[n.index];return mn$1(r)?cm(-1,r):Et(r)}}else{if(e&128)return ya(t,n.next);if(e&32)return zm(n,t)()||Et(t[n.index]);{let i=_S(t,n);if(i!==null){if(Array.isArray(i))return i[0];return ya(Mi(t[Vt$1]),i)}else return ya(t,n.next)}}}return null}function _S(t,n){if(n!==null){let i=t[Vt$1][Dt$1],r=n.projection;return i.projection[r]}return null}function cm(t,n){let e=We$1+t+1;if(e<n.length){let i=n[e],r=i[Z].firstChild;if(r!==null)return ya(i,r)}return n[qr]}function Zm(t,n,e,i,r,o,s){for(;e!=null;){let a=i[ri];if(e.type===128){e=e.next;continue}let c=i[e.index],l=e.type;if(s&&n===0&&(c&&Jo(Et(c),i),e.flags|=2),!Fd(e))if(l&8)Zm(t,n,e.child,i,r,o,!1),Qo(n,t,a,r,c,e,o,i);else if(l&32){let d=zm(e,i),f;for(;f=d();)Qo(n,t,a,r,f,e,o,i);Qo(n,t,a,r,c,e,o,i)}else l&16?yS(t,n,i,e,r,o):Qo(n,t,a,r,c,e,o,i);e=s?e.projectionNext:e.next}}function Ud(t,n,e,i,r,o){t.type===3?UM(e,i,n,r,o):Zm(e,i,t.firstChild,n,r,o,!1)}function UM(t,n,e,i,r){let s=e[Z].firstChild,a=s.next,c=Et(e[s.index]),l=Et(e[a.index]),d=a.index+1,f=e[d];if(n===1||n===0)i!==null&&(f&&f.hasChildNodes()?eo(t,i,f,r,!0):(eo(t,i,c,r,!0),eo(t,i,l,r,!0)));else if(n===2){if(f||(f=document.createDocumentFragment(),e[d]=f),c&&c.parentNode===f)return;let h=c;for(;h!==null;){let p=h.nextSibling;if(f.appendChild(h),h===l)break;h=p}}}function zM(t,n,e){let i=n[Re$1];yS(i,0,n,e,vS(t,e,n),bS(e.parent||n[Dt$1],e,n))}function yS(t,n,e,i,r,o){let s=e[Vt$1],c=s[Dt$1].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let d=c[l];Qo(n,t,e[ri],r,d,i,o,e)}else{let l=c,d=s[ft];Uw(i)&&(l.flags|=128),Zm(t,n,l,d,r,o,!0)}}function $M(t,n,e,i,r,o,s){let a=i[qr];if(a!==Et(i)&&Qo(n,t,e,o,a,r,s),(i[te]&4)===0)for(let l=We$1;l<i.length;l++){let d=i[l];Ud(d[Z],d,t,n,o,a)}}function GM(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf(`-`)===-1?void 0:ui.DashCase;r==null?t.removeStyle(e,i,o):(typeof r==`string`&&r.endsWith(`!important`)&&(r=r.slice(0,-10),o|=ui.Important),t.setStyle(e,i,r,o))}}function Qm(t,n,e,i,r,o,s,a,c,l,d){let f=He$1+i,h=f+r,p=WM(f,h),v=typeof l==`function`?l():l;return p[Z]={type:t,blueprint:p,template:e,queries:null,viewQuery:a,declTNode:n,data:p.slice().fill(null,f),bindingStartIndex:f,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o==`function`?o():o,pipeRegistry:typeof s==`function`?s():s,firstChild:null,schemas:c,consts:v,incompleteFirstPass:!1,ssrId:d}}function WM(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Bt$1);return e}function qM(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=Qm(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function Km(t,n,e,i,r,o,s,a,c,l,d){let f=n.blueprint.slice();return f[On$1]=r,f[te]=i|1228,(l!==null||t&&t[te]&2048)&&(f[te]|=2048),mp(f),f[ft]=f[ir$1]=t,f[Ke]=e,f[Fn$1]=s||t&&t[Fn$1],f[Re$1]=a||t&&t[Re$1],f[ri]=c||t&&t[ri]||null,f[Dt$1]=o,f[si]=IT(),f[$r]=d,f[dp]=l,f[Vt$1]=n.type==2?t[Vt$1]:f,f}function YM(t,n,e){let i=Wt$1(n,t),r=qM(e),o=t[Fn$1].rendererFactory,s=Xm(t,Km(t,r,null,wS(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=s}function wS(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function SS(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function Xm(t,n){return t[zo]?t[lp][pn$1]=n:t[zo]=n,t[lp]=n,n}function y(t=1){CS(Pe$1(),K$1(),Pn$1()+t,!1)}function CS(t,n,e,i){if(!i)if((n[te]&3)===3){let o=t.preOrderCheckHooks;o!==null&&hd(n,o,e)}else{let o=t.preOrderHooks;o!==null&&pd(n,o,0,e)}sr$1(e)}var ka=(function(t){return t[t.None=0]=`None`,t[t.SignalBased=1]=`SignalBased`,t[t.HasDecoratorInputTransform=2]=`HasDecoratorInputTransform`,t})(ka||{});function io(t,n,e,i){let r=Q(null);try{let[o,s,a]=t.inputs[e],c=null;(s&ka.SignalBased)!==0&&(c=n[o][Ye$1]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(n,i)),t.setInput!==null?t.setInput(n,c,i,e,o):Ew(n,c,o,i)}finally{Q(r)}}function DS(t,n,e,i,r){let o=Pn$1(),s=i&2;try{sr$1(-1),s&&n.length>He$1&&CS(t,n,He$1,!1);ke$1(s?Ee.TemplateUpdateStart:Ee.TemplateCreateStart,r,e),e(i,r)}finally{sr$1(o);ke$1(s?Ee.TemplateUpdateEnd:Ee.TemplateCreateEnd,r,e)}}function zd(t,n,e){eA(t,n,e),(e.flags&64)===64&&tA(t,n,e)}function Oa(t,n,e=Wt$1){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?e(n,t):t[s];t[r++]=a}}}function ZM(t,n,e,i){let o=i.get(Qw,Zw)||e===Un$1.ShadowDom||e===Un$1.ExperimentalIsolatedShadowDom;return t.selectRootElement(n,o)}function XM(t){return t===`class`?`className`:t===`for`?`htmlFor`:t===`formaction`?`formAction`:t===`innerHtml`?`innerHTML`:t===`readonly`?`readOnly`:t===`tabindex`?`tabIndex`:t}function JM(t,n,e,i,r,o){let s=n[Z];if($d(t,s,n,e,i)){ci(t)&&IS(n,t.index);return}t.type&3&&(e=XM(e)),ES(t,n,e,i,r,o)}function ES(t,n,e,i,r,o){if(t.type&3){let s=Wt$1(t,n);i=o!=null?o(i,t.value||``,e):i,r.setProperty(s,e,i)}else t.type&12}function IS(t,n){let e=gn$1(n,t);e[te]&16||(e[te]|=64)}function eA(t,n,e){let i=e.directiveStart,r=e.directiveEnd;ci(e)&&YM(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||wd(e,n);let o=e.initialInputs;for(let s=i;s<r;s++){let a=t.data[s],c=Sa(n,t,s,e);if(Jo(c,n),o!==null&&rA(n,s-i,c,a,e,o),li(a)){let l=gn$1(e.index,n);l[Ke]=Sa(n,t,s,e)}}}function tA(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,s=Dy();try{sr$1(o);for(let a=i;a<r;a++){let c=t.data[a],l=n[a];Jl(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&nA(c,l)}}finally{sr$1(-1),Jl(s)}}function nA(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function Jm(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];hS(n,o.selectors,!1)&&(i??=[],li(o)?i.unshift(o):i.push(o))}return i}function iA(t,n,e,i,r,o){let s=Wt$1(t,n);xS(n[Re$1],s,o,t.value,e,i,r)}function xS(t,n,e,i,r,o,s){if(o==null)s?.(o,i||``,r),t.removeAttribute(n,r,e);else{let a=s==null?zr(o):s(o,i||``,r);t.setAttribute(n,r,a,e)}}function rA(t,n,e,i,r,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let c=s[a],l=s[a+1];io(i,e,c,l)}}function eg(t,n,e,i,r){let o=He$1+e,s=n[Z],a=r(s,n,t,i,e);n[o]=a,Wo(t,!0);let c=t.type===2;return c?(lS(n[Re$1],a,t),(gy()===0||$o(t))&&Jo(a,n),vy()):Jo(a,n),id()&&(!c||!Fd(t))&&Ym(s,n,a,t),t}function tg(t){let n=t;return Dp()?Ep():(n=n.parent,Wo(n,!1)),n}function oA(t,n){let e=t[ri];if(!e)return;let i;try{i=e.get(qt$1,null)}catch(r){i=null}i?.(n)}function $d(t,n,e,i,r){let o=t.inputs?.[i],s=t.hostDirectiveInputs?.[i],a=!1;if(s)for(let c=0;c<s.length;c+=2){let l=s[c],d=s[c+1],f=n.data[l];io(f,e[l],d,r),a=!0}if(o)for(let c of o){let l=e[c],d=n.data[c];io(d,l,i,r),a=!0}return a}function sA(t,n,e,i,r,o){let s=null,a=null,c=null,l=!1,d=t.directiveToIndex.get(i.type);if(typeof d==`number`?s=d:[s,a,c]=d,a!==null&&c!==null&&t.hostDirectiveInputs&&Object.hasOwn(t.hostDirectiveInputs,r)){let f=t.hostDirectiveInputs[r];for(let h=0;h<f.length;h+=2){let p=f[h];if(p>=a&&p<=c){let v=n.data[p],S=f[h+1];io(v,e[p],S,o),l=!0}else if(p>c)break}}return s!==null&&Object.hasOwn(i.inputs,r)&&(io(i,e[s],r,o),l=!0),l}function aA(t,n){let e=gn$1(n,t),i=e[Z];cA(i,e);let r=e[On$1];r!==null&&e[$r]===null&&(e[$r]=Kw(r,e[ri])),ke$1(Ee.ComponentStart);try{ng(i,e,e[Ke])}finally{ke$1(Ee.ComponentEnd,e[Ke])}}function cA(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function ng(t,n,e){td(n);try{let i=t.viewQuery;i!==null&&Xp(1,i,e);let r=t.template;r!==null&&DS(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[oi]?.finishViewCreation(t),t.staticContentQueries&&Xw(t,n),t.staticViewQueries&&Xp(2,t.viewQuery,e);let o=t.components;o!==null&&lA(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[te]&=-5,nd()}}function lA(t,n){for(let e=0;e<n.length;e++)aA(t,n[e])}function Fa(t,n,e,i){let r=Q(null);try{let o=n.tView,c=Km(t,o,e,t[te]&4096?4096:16,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null);c[rr$1]=t[n.index];let d=t[oi];return d!==null&&(c[oi]=d.createEmbeddedView(o)),ng(o,c,e),c}finally{Q(r)}}function es$1(t,n){return!n||n.firstChild===null||Uw(t)}function Da(t,n,e,i,r=!1){if(t.type===3){let o=t.firstChild,s=o.next,a=Et(n[o.index]),c=Et(n[s.index]),l=a;for(;l!==null&&(i.push(l),l!==c);)l=l.nextSibling;return i}for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];if(o!==null)if(mn$1(o)){let a=o[qr];a!==o[On$1]&&i.push(Et(o)),o[te]&4||NS(o,i),i.push(a)}else i.push(Et(o));let s=e.type;if(s&8)Da(t,n,e.child,i);else if(s&32){let a=zm(e,n),c;for(;c=a();)i.push(c)}else if(s&16){let a=_S(n,e);if(Array.isArray(a))i.push(...a);else{let c=Mi(n[Vt$1]);Da(c[Z],c,a,i,!0)}}e=r?e.projectionNext:e.next}return i}function NS(t,n){for(let e=We$1;e<t.length;e++){let i=t[e],r=i[Z].firstChild;r!==null&&Da(i[Z],i,r,n)}}function TS(t){if(t[Wr]!==null){for(let n of t[Wr])n.impl.addSequence(n);t[Wr].length=0}}var MS=[];function dA(t){return t[tn]??uA(t)}function uA(t){let n=MS.pop()??Object.create(hA);return n.lView=t,n}function fA(t){t.lView[tn]!==t&&(t.lView=null,MS.push(t))}var hA=G(g({},Wi),{consumerIsAlwaysLive:!0,kind:`template`,consumerMarkedDirty:t=>{Qr(t.lView)},consumerOnSignalRead(){this.lView[tn]=this}});function pA(t){let n=t[tn]??Object.create(mA);return n.lView=t,n}var mA=G(g({},Wi),{consumerIsAlwaysLive:!0,kind:`template`,consumerMarkedDirty:t=>{let n=Mi(t.lView);for(;n&&!AS(n[Z]);)n=Mi(n);n&&gp(n)},consumerOnSignalRead(){this.lView[tn]=this}});function AS(t){return t.type!==2}function RS(t){if(t[Ti]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[Ti])if(i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()),t[Ti]===null))return;n=e&&!!(t[te]&8192)}}var gA=100;function kS(t,n=0){let i=t[Fn$1].rendererFactory;i.begin?.();try{vA(t,n)}finally{i.end?.()}}function vA(t,n){let e=Ip();try{na(!0),lm(t,n);let i=0;for(;ha(t);){if(i===gA)throw new w(103,!1);i++,lm(t,1)}}finally{na(e)}}function bA(t,n,e,i){if(Zr(n))return;let r=n[te];td(n);let a=!0,c=null,l=null;AS(t)?(l=dA(n),c=Di(l)):Kc()===null?(a=!1,l=pA(n),c=Di(l)):n[tn]&&(Zi(n[tn]),n[tn]=null);try{mp(n),wy(t.bindingStartIndex),e!==null&&DS(t,n,e,2,i);let d=(r&3)===3;if(d){let p=t.preOrderCheckHooks;p!==null&&hd(n,p,null)}else{let p=t.preOrderHooks;p!==null&&pd(n,p,0,null),Fp(n,0)}if(_A(n),RS(n),OS(n,0),t.contentQueries!==null&&Xw(t,n),true)if(d){let p=t.contentCheckHooks;p!==null&&hd(n,p)}else{let p=t.contentHooks;p!==null&&pd(n,p,1),Fp(n,1)}wA(t,n);let f=t.components;f!==null&&PS(n,f,0);let h=t.viewQuery;if(h!==null&&Xp(2,h,i),true)if(d){let p=t.viewCheckHooks;p!==null&&hd(n,p)}else{let p=t.viewHooks;p!==null&&pd(n,p,2),Fp(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[$l]){for(let p of n[$l])p();n[$l]=null}TS(n),n[te]&=-73}catch(d){throw Qr(n),d}finally{l!==null&&(Yi(l,c),a&&fA(l)),nd()}}function OS(t,n){for(let e=$w(t);e!==null;e=Gw(e))for(let i=We$1;i<e.length;i++){let r=e[i];FS(r,n)}}function _A(t){for(let n=$w(t);n!==null;n=Gw(n)){if(!(n[te]&2))continue;let e=n[Yr];for(let i=0;i<e.length;i++){let r=e[i];gp(r)}}}function yA(t,n,e){ke$1(Ee.ComponentStart);let i=gn$1(n,t);try{FS(i,e)}finally{ke$1(Ee.ComponentEnd,i[Ke])}}function FS(t,n){Yl(t)&&lm(t,n)}function lm(t,n){let i=t[Z],r=t[te],o=t[tn],s=!!(n===0&&r&16);if(s||=!!(r&64&&n===0),s||=!!(r&1024),s||=!!(o?.dirty&&No(o)),s||=!1,o&&(o.dirty=!1),t[te]&=-9217,s)bA(i,t,i.template,t[Ke]);else if(r&8192){let a=Q(null);try{RS(t),OS(t,1);let c=i.components;c!==null&&PS(t,c,1),TS(t)}finally{Q(a)}}}function PS(t,n,e){for(let i=0;i<n.length;i++)yA(t,n[i],e)}function wA(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)sr$1(~r);else{let o=r,s=e[++i],a=e[++i];Cy(s,o);let c=n[o];ke$1(Ee.HostBindingsUpdateStart,c);try{a(2,c)}finally{ke$1(Ee.HostBindingsUpdateEnd,c)}}}}finally{sr$1(-1)}}function ig(t,n){let e=Ip()?64:1088;for(t[Fn$1].changeDetectionScheduler?.notify(n);t;){t[te]|=e;let i=Mi(t);if(Go(t)&&!i)return t;t=i}return null}function LS(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function jS(t,n){let e=We$1+n;if(e<t.length)return t[e]}function Pa(t,n,e,i=!0){let r=n[Z];if(SA(r,n,t,e),i){let s=cm(e,t),a=n[Re$1],c=a.parentNode(t[qr]);c!==null&&FM(r,t[Dt$1],a,n,c,s)}let o=n[$r];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function VS(t,n){let e=Ea(t,n);return e!==void 0&&Hd(e[Z],e),e}function Ea(t,n){if(t.length<=We$1)return;let e=We$1+n,i=t[e];if(i){let r=i[rr$1];r!==null&&r!==t&&qm(r,i),n>0&&(t[e-1][pn$1]=i[pn$1]);let o=la(t,We$1+n);OM(i[Z],i);let s=o[oi];s!==null&&s.detachView(o[Z]),i[ft]=null,i[pn$1]=null,i[te]&=-129}return i}function SA(t,n,e,i){let r=We$1+i,o=e.length;i>0&&(e[r-1][pn$1]=n),i<o-We$1?(n[pn$1]=e[r],ip(e,We$1+i,n)):(e.push(n),n[pn$1]=null),n[ft]=e;let s=n[rr$1];s!==null&&e!==s&&BS(s,n);let a=n[oi];a!==null&&a.insertView(t),Zl(n),n[te]|=128}function BS(t,n){let e=t[Yr],i=n[ft];if(Ri(i))t[te]|=2;else{let r=i[ft][Vt$1];n[Vt$1]!==r&&(t[te]|=2)}e===null?t[Yr]=[n]:e.push(n)}var dr$1=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[Z];return Da(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[Ke]}set context(n){this._lView[Ke]=n}get destroyed(){return Zr(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[ft];if(mn$1(n)){let e=n[fa],i=e?e.indexOf(this):-1;i>-1&&(Ea(n,i),la(e,i))}this._attachedToViewContainer=!1}Hd(this._lView[Z],this._lView)}onDestroy(n){Ql(this._lView,n)}markForCheck(){ig(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[te]&=-129}reattach(){Zl(this._lView),this._lView[te]|=128}detectChanges(){this._lView[te]|=1024,kS(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new w(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Go(this._lView),e=this._lView[rr$1];e!==null&&!n&&qm(e,this._lView),gS(this._lView[Z],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new w(902,!1);this._appRef=n;let e=Go(this._lView),i=this._lView[rr$1];i!==null&&!e&&BS(i,this._lView),Zl(this._lView)}};var Rt$1=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=CA;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){return new dr$1(Fa(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r}))}}return t})();function CA(){return Gd(ot$1(),K$1())}function Gd(t,n){return t.type&4?new Rt$1(n,t,is$1(t,n)):null}function rs$1(t,n,e,i,r){let o=t.data[n];if(o===null)o=DA(t,n,e,i,r),Sy()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let s=by();o.injectorIndex=s===null?-1:s.injectorIndex}return Wo(o,!0),o}function DA(t,n,e,i,r){let o=Cp(),s=Dp(),a=s?o:o&&o.parent,c=t.data[n]=IA(t,a,e,n,i,r);return EA(t,c,o,s),c}function EA(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function IA(t,n,e,i,r,o){let s=n?n.injectorIndex:-1,a=0;return yp()&&(a|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,namespace:Tp(),attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function xA(t){let n=t[up]??[],i=t[ft][Re$1],r=[];for(let o of n)o.data[Yw]!==void 0?r.push(o):NA(o,i);t[up]=r}function NA(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[qw];for(;e<r;){let o=i.nextSibling;cS(n,i,!1),i=o,e++}}}var TA=()=>null;var MA=()=>null;function Sd(t,n){return TA(t,n)}function HS(t,n,e){return MA(t,n,e)}var US=class{};var st$1=class{};var Se=class{destroyNode=null;static __NG_ELEMENT_ID__=()=>AA()};function AA(){let t=K$1(),e=gn$1(ot$1().index,t);return(Ri(e)?e:t)[Re$1]}var zS=(()=>{class t{static ɵprov=E({token:t,providedIn:`root`,factory:()=>null})}return t})();function $S(t){return t.debugInfo?.className||t.type.name||null}var gd={};var Cd=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,gd,i);return r!==gd||e===gd?r:this.parentInjector.get(n,e,i)}};function rg(t,n,e){return t[n]=e}function RA(t,n){return t[n]}function vn$1(t,n,e){if(e===Bt$1)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function GS(t,n,e,i){let r=vn$1(t,n,e);return vn$1(t,n+1,i)||r}function to(t,n,e){return function i(r){let o=i.__ngNativeEl__;o!==void 0&&NT(r,o);ig(ci(t)?gn$1(t.index,n):n,5);let a=n[Ke],c=rw(n,a,e,r),l=i.__ngNextListenerFn__;for(;l;)c=rw(n,a,l,r)&&c,l=l.__ngNextListenerFn__;return c}}function rw(t,n,e,i){let r=Q(null);try{return ke$1(Ee.OutputStart,n,e),e(i)!==!1}catch(o){return oA(t,o),!1}finally{ke$1(Ee.OutputEnd,n,e),Q(r)}}function og(t,n,e,i,r,o,s,a){let c=$o(t),l=!1,d=null;if(!i&&c&&(d=OA(n,e,o,t.index)),d!==null){let f=d.__ngLastListenerFn__||d;f.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,l=!0}else{let f=Wt$1(t,e),h=i?i(f):f;i||(a.__ngNativeEl__=f);let p=r.listen(h,o,a);if(!kA(o))WS(i?S=>i(Et(S[t.index])):t.index,n,e,o,a,p,!1)}return l}function kA(t){return t.startsWith(`animation`)||t.startsWith(`transition`)}function OA(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===e&&r[o+1]===i){let a=n[Uo],c=r[o+2];return a&&a.length>c?a[c]:null}typeof s==`string`&&(o+=2)}return null}function WS(t,n,e,i,r,o,s){let a=n.firstCreatePass?bp(n):null,c=vp(e),l=c.length;c.push(r,o),a&&a.push(i,t,l,(l+1)*(s?-1:1))}function ow(t,n,e,i,r){let o=null,s=null,a=null,c=!1,l=t.directiveToIndex.get(e.type);if(typeof l==`number`?o=l:[o,s,a]=l,s!==null&&a!==null&&t.hostDirectiveOutputs&&Object.hasOwn(t.hostDirectiveOutputs,i)){let d=t.hostDirectiveOutputs[i];for(let f=0;f<d.length;f+=2){let h=d[f];if(h>=s&&h<=a)c=!0,Dd(t,n,h,d[f+1],i,r);else if(h>a)break}}return Object.hasOwn(e.outputs,i)&&(c=!0,Dd(t,n,o,i,i,r)),c}function Dd(t,n,e,i,r,o){let s=n[e],a=n[Z],f=s[a.data[e].outputs[i]].subscribe(o);WS(t.index,a,n,r,o,f,!0)}function FA(){PA()}function PA(){let t=K$1(),n=Pe$1(),e=ot$1();if(n.firstCreatePass&&VA(n,e),e.controlDirectiveIndex===-1)return;bn$1(`NgSignalForms`);let i=t[e.controlDirectiveIndex];n.data[e.controlDirectiveIndex].controlDef.create(i,new Ed(t,n,e))}function LA(){jA()}function jA(){let t=K$1(),n=Pe$1(),e=Kr();if(e.controlDirectiveIndex===-1)return;let i=n.data[e.controlDirectiveIndex].controlDef,r=t[e.controlDirectiveIndex];i.update(r,new Ed(t,n,e))}var Ed=class{lView;tView;tNode;hasPassThrough;constructor(n,e,i){this.lView=n,this.tView=e,this.tNode=i,this.hasPassThrough=!!(i.flags&4096)}get customControl(){return this.tNode.customControlIndex!==-1?this.lView[this.tNode.customControlIndex]:void 0}get nativeElement(){return Wt$1(this.tNode,this.lView)}get descriptor(){return`<${this.tNode.value}>`}listenToCustomControlOutput(n,e){let i=this.tView.data[this.tNode.customControlIndex];ow(this.tNode,this.lView,i,n,to(this.tNode,this.lView,e))}listenToCustomControlModel(n){let e=this.tNode.flags&1024?`valueChange`:`checkedChange`,i=this.tView.data[this.tNode.customControlIndex];ow(this.tNode,this.lView,i,e,to(this.tNode,this.lView,n))}listenToDom(n,e){og(this.tNode,this.tView,this.lView,void 0,this.lView[Re$1],n,e,to(this.tNode,this.lView,e))}setInputOnDirectives(n,e,i){let r=this.tNode.inputs?.[n],o=this.tNode.hostDirectiveInputs?.[n];if(!r&&!o)return!1;let s=!1;if(r)for(let a of r){if(a===this.tNode.controlDirectiveIndex)continue;let c=this.lView[a],l=this.tView.data[a];(!i||i(aw(c,l,n)))&&(io(l,c,n,e),s=!0)}if(o)for(let a=0;a<o.length;a+=2){let c=o[a];if(c===this.tNode.controlDirectiveIndex)continue;let l=this.lView[c],d=o[a+1],f=this.tView.data[c];(!i||i(aw(l,f,n)))&&(io(f,l,d,e),s=!0)}return s}setCustomControlModelInput(n){let e=this.tView.data[this.tNode.customControlIndex],i=this.tNode.flags&1024?`value`:`checked`;sA(this.tNode,this.tView,this.lView,e,i,n)}customControlHasInput(n){if(this.tNode.customControlIndex===-1)return!1;let e=this.tView.data[this.tNode.customControlIndex];return(e.signalFormsInputPresence??=this._buildCustomControlInputCache(e))[n]===!0}_buildCustomControlInputCache(n){let e={};for(let i in n.inputs)e[i]=!0;if(n.hostDirectives!==null){let i=[...n.hostDirectives];for(;i.length>0;){let r=i.shift();if(typeof r!=`function`){for(let s in r.inputs)e[r.inputs[s]]=!0;let o=sw(r.directive);o!==null&&i.push(...o);continue}for(let o of r()){if(typeof o==`function`)continue;if(o.inputs)for(let a=0;a<o.inputs.length;a+=2){let c=o.inputs[a+1]||o.inputs[a];e[c]=!0}let s=sw(o.directive);s!==null&&i.push(...s)}}}return e}};function sw(t){return typeof t==`function`&&`ɵdir`in t?t.ɵdir.hostDirectives??null:null}function aw(t,n,e){if(!n.inputs||!Object.hasOwn(n.inputs,e))return;let[i,r]=n.inputs[e];if((r&ka.SignalBased)!==0){let s=t[i][Ye$1];return s.value===kd?void 0:s.value}return t[i]}function VA(t,n,e){for(let r=n.directiveStart;r<n.directiveEnd;r++)if(t.data[r].controlDef){n.controlDirectiveIndex=r;break}if(n.controlDirectiveIndex===-1)return;let i=t.data[n.controlDirectiveIndex].controlDef;if(i.passThroughInput&&(n.inputs?.[i.passThroughInput]?.length??0)>1){n.flags|=4096;return}BA(t,n)}function BA(t,n){for(let e=n.directiveStart;e<n.directiveEnd;e++){let i=t.data[e];if(!(n.directiveToIndex&&!n.directiveToIndex.has(i.type))){if(cw(i,`value`)){n.flags|=1024,n.customControlIndex=e;return}if(cw(i,`checked`)){n.flags|=2048,n.customControlIndex=e;return}}}if(n.hostDirectiveInputs!==null&&n.hostDirectiveOutputs!==null&&n.directiveToIndex!==null){let e=(i,r)=>{let o=n.hostDirectiveInputs[i],s=n.hostDirectiveOutputs[i+`Change`];if(!o||!s)return!1;for(let a=0;a<o.length;a+=2){let c=o[a];for(let l=0;l<s.length;l+=2)if(c===s[l])for(let f of n.directiveToIndex.values()){if(!Array.isArray(f))continue;let[h,p,v]=f;if(c>=p&&c<=v)return n.flags|=r,n.customControlIndex=h,!0}}return!1};if(e(`value`,1024)||e(`checked`,2048))return}}function cw(t,n){return HA(t,n)&&UA(t,n+`Change`)}function HA(t,n){return n in t.inputs}function UA(t,n){return n in t.outputs}var dm=Symbol(`BINDING`);var ao=new m(``);function Id(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a==`number`)o=a;else if(o==1)r=Ll(r,a);else if(o==2){let c=a,l=n[++s];i=Ll(i,c+`: `+l+`;`)}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function A(t,n=0){let e=K$1();if(e===null)return C(t,n);return Lw(ot$1(),e,Ct$1(t),n)}function La(){throw new Error(`invalid`)}function qS(t,n,e,i,r){let o=i===null?null:{"":-1},s=r(t,e);if(s!==null){let a=s,c=null,l=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,c,l]=d.resolveHostDirectives(s);break}GA(t,n,e,a,o,c,l)}o!==null&&i!==null&&zA(e,i,o)}function zA(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new w(-301,!1);i.push(n[r],o)}}function $A(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function GA(t,n,e,i,r,o,s){let a=i.length,c=null;for(let h=0;h<a;h++){let p=i[h];c===null&&li(p)&&(c=p,$A(t,e,h)),Yp(wd(e,n),t,p.type)}KA(e,t.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let h=0;h<a;h++){let p=i[h];p.providersResolver&&p.providersResolver(p)}let l=!1,d=!1,f=SS(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let h=0;h<a;h++){let p=i[h];if(e.mergedAttrs=Xo(e.mergedAttrs,p.hostAttrs),qA(t,e,n,f,p),QA(f,p,r),s!==null&&s.has(p)){let[S,P]=s.get(p);e.directiveToIndex.set(p.type,[f,S+e.directiveStart,P+e.directiveStart])}else(o===null||!o.has(p))&&e.directiveToIndex.set(p.type,f);p.contentQueries!==null&&(e.flags|=4),(p.hostBindings!==null||p.hostAttrs!==null||p.hostVars!==0)&&(e.flags|=64);let v=p.type.prototype;!l&&(v.ngOnChanges||v.ngOnInit||v.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),l=!0),!d&&(v.ngOnChanges||v.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),f++}WA(t,e,o)}function WA(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))lw(0,n,r,i),lw(1,n,r,i),uw(n,i,!1);else{let o=e.get(r);dw(0,n,o,i),dw(1,n,o,i),uw(n,i,!0)}}}function lw(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(Object.hasOwn(r,o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(i),YS(n,o)}}function dw(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(Object.hasOwn(r,o)){let s=r[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),YS(n,s)}}function YS(t,n){n===`class`?t.flags|=8:n===`style`&&(t.flags|=16)}function uw(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||Um(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c==`number`)break;if(!e&&Object.hasOwn(r,c)){let l=r[c];for(let d of l)if(d===n){s??=[],s.push(c,i[a+1]);break}}else if(e&&Object.hasOwn(o,c)){let l=o[c];for(let d=0;d<l.length;d+=2)if(l[d]===n){s??=[],s.push(l[d+1],i[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function qA(t,n,e,i,r){t.data[i]=r;let s=new no(r.factory||(r.factory=er$1(r.type,!0)),li(r),A,null);t.blueprint[i]=s,e[i]=s,YA(t,n,i,SS(t,e,r.hostVars,Bt$1),r)}function YA(t,n,e,i,r){let o=r.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;ZA(s)!=a&&s.push(a),s.push(e,i,o)}}function ZA(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e==`number`&&e<0)return e}return 0}function QA(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;li(n)&&(e[``]=t)}}function KA(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function sg(t,n,e,i,r,o,s,a){let c=n[Z],l=c.consts,f=rs$1(c,t,e,i,nn$1(l,s));return o&&qS(c,n,f,nn$1(l,a),r),f.mergedAttrs=Xo(f.mergedAttrs,f.attrs),f.attrs!==null&&Id(f,f.attrs,!1),f.mergedAttrs!==null&&Id(f,f.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,f),f}function ag(t,n){Nw(t,n),fp(n)&&t.queries.elementEnd(n)}function XA(t,n,e,i,r,o){let s=n.consts,c=rs$1(n,t,e,i,nn$1(s,r));if(c.mergedAttrs=Xo(c.mergedAttrs,c.attrs),o!=null){let l=nn$1(s,o);c.localNames=[];for(let d=0;d<l.length;d+=2)c.localNames.push(l[d],-1)}return c.attrs!==null&&Id(c,c.attrs,!1),c.mergedAttrs!==null&&Id(c,c.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,c),c}var ZS=typeof ShadowRoot<`u`;var JA=typeof Document<`u`;function eR(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&ka.SignalBased)!==0};return r&&(o.transform=r),o})}function tR(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function nR(t,n,e){let i=n instanceof Te$1?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new Cd(e,i):e}function iR(t){let n=t.get(st$1,null);if(n===null)throw new w(407,!1);return{rendererFactory:n,sanitizer:t.get(zS,null),changeDetectionScheduler:t.get(kn$1,null),ngReflect:!1,tracingService:t.get(zn$1,null,{optional:!0})}}function rR(t,n,e){let i=QS(t);return sS(n,i,i===`svg`?Hr:i===`math`?Gl:e)}function oR(t){if((t&&`localName`in t&&typeof t.localName==`string`?t.localName:t?.tagName)?.toLowerCase()===`script`)throw new w(905,!1)}function QS(t){return(t.selectors[0][0]||`div`).toLowerCase()}var ro=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=eR(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=tR(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=yM(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,s,a){ke$1(Ee.DynamicComponentStart);let c=Q(null);try{let l=this.componentDef,d=nR(l,r||this.ngModule,n),f=iR(d),h=f.tracingService;return h&&h.componentCreate?h.componentCreate($S(l),()=>this.createComponentRef(f,d,e,i,o,s,a)):this.createComponentRef(f,d,e,i,o,s,a)}finally{Q(c)}}createComponentRef(n,e,i,r,o,s,a){let c=this.componentDef,l=sR(r,c,s,o),d=n.rendererFactory.createRenderer(null,c),f=r?ZM(d,r,c.encapsulation,e):rR(c,d,a??null);oR(f);let h=e.get(ao,null),p=aR(f,()=>e.get(q,null)??Rm());h&&h.addHost(p);let v=s?.some(fw)||o?.some($=>typeof $!=`function`&&$.bindings.some(fw)),S=Km(null,l,null,512|wS(c),null,null,n,d,e,null,Kw(f,e,!0));h&&ZS&&p instanceof ShadowRoot&&Ql(S,()=>{h.removeHost(p)}),S[He$1]=f,td(S);let P=null;try{let $=sg(He$1,S,2,`#host`,()=>l.directiveRegistry,!0,0);lS(d,f,$),Jo(f,S),zd(l,S,$),Om(l,$,S),ag(l,$),i!==void 0&&lR($,this.ngContentSelectors,i),P=gn$1($.index,S),S[Ke]=P[Ke],ng(l,S,null)}catch($){throw P!==null&&Qp(P),Qp(S),$}finally{ke$1(Ee.DynamicComponentEnd),nd()}return new xd(this.componentType,S,!!v)}};function sR(t,n,e,i){let r=t?[`ng-version`,`22.1.6`]:wM(n.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[dm].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let f=i[d];if(typeof f!=`function`)for(let h of f.bindings){a+=h[dm].requiredVars;let p=d+1;h.create&&(h.targetIdx=p,(o??=[]).push(h)),h.update&&(h.targetIdx=p,(s??=[]).push(h))}}let c=[n];if(i)for(let d of i){let h=ep(typeof d==`function`?d:d.type);c.push(h)}return Qm(0,null,cR(o,s),1,a,c,null,null,null,[r],null)}function aR(t,n){let e=t.getRootNode?.();return JA&&e instanceof Document?e.head:e&&ZS&&e instanceof ShadowRoot?e:n().head}function cR(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function fw(t){let n=t[dm].kind;return n===`input`||n===`twoWay`}var xd=class extends US{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Wl(e[Z],He$1),this.location=is$1(this._tNode,e),this.instance=gn$1(this._tNode.index,e)[Ke],this.hostView=this.changeDetectorRef=new dr$1(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView;$d(i,r[Z],r,n,e);this.previousInputValues.set(n,e);ig(gn$1(i.index,r),1)}get injector(){return new cr$1(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function lR(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var pt=(()=>{class t{static __NG_ELEMENT_ID__=dR}return t})();function dR(){return KS(ot$1(),K$1())}var um=class t extends pt{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return is$1(this._hostTNode,this._hostLView)}get injector(){return new cr$1(this._hostTNode,this._hostLView)}get parentInjector(){let n=Tm(this._hostTNode,this._hostLView);if(Aw(n)){let e=_d(n,this._hostLView),i=bd(n),r=e[Z].data[i+8];return new cr$1(r,e)}else return new cr$1(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=hw(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-We$1}createEmbeddedView(n,e,i){let r,o;typeof i==`number`?r=i:i!=null&&(r=i.index,o=i.injector);let s=Sd(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,r,es$1(this._hostTNode,s)),a}createComponent(n,e,i,r,o,s,a){let c,l=e||{};c=l.index,i=l.injector,r=l.projectableNodes,o=l.environmentInjector||l.ngModuleRef,s=l.directives,a=l.bindings;let d=new ro(Ai(n)),f=i||this.parentInjector;if(!o&&d.ngModule==null){let $=this.parentInjector.get(Te$1,null);$&&(o=$)}let h=Ai(d.componentType??{}),p=Sd(this._lContainer,h?.id??null),v=p?.firstChild??null,S=d.create(f,r,v,o,s,a,this._getHostElementNamespace());return this.insertImpl(S.hostView,c,es$1(this._hostTNode,p)),S}_getHostElementNamespace(){if(this._hostTNode.type&2){let n=this._hostTNode.parent??this._hostLView[Dt$1];return n!==null&&n.type&2&&typeof n.value==`string`&&n.value.toLowerCase()===`foreignobject`?null:n?.namespace??null}return this._hostTNode.namespace}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(fy(r)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let c=r[ft],l=new t(c,c[Dt$1],c[ft]);l.detach(l.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return Pa(s,r,o,i),n.attachToViewContainerRef(),ip(jp(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=hw(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=Ea(this._lContainer,e);i&&(la(jp(this._lContainer),e),Hd(i[Z],i))}detach(n){let e=this._adjustIndex(n,-1),i=Ea(this._lContainer,e);return i&&la(jp(this._lContainer),e)!=null?new dr$1(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function hw(t){return t[fa]}function jp(t){return t[fa]||(t[fa]=[])}function KS(t,n){let e,i=n[t.index];return mn$1(i)?e=i:(e=LS(i,n,null,t),n[t.index]=e,Xm(n,e)),fR(e,n,t,i),new um(e,t,n)}function uR(t,n){let e=t[Re$1],i=e.createComment(``),r=Wt$1(n,t);return eo(e,e.parentNode(r),i,e.nextSibling(r),!1),i}var fR=mR;var hR=()=>!1;function pR(t,n,e){return hR(t,n,e)}function mR(t,n,e,i){if(t[qr])return;let r;e.type&8?r=Et(i):r=uR(n,e),t[qr]=r}var fm=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}};var hm=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)lg(n,e).matches!==null&&this.queries[e].setDirty()}};var Nd=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n==`string`?this.predicate=yR(n):this.predicate=n}};var pm=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}};var mm=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,gR(e,o)),this.matchTNodeWithReadOption(n,e,md(e,n,o,!1,!1))}else i===Rt$1?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,md(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===O||r===pt||r===Rt$1&&e.type&4)this.addMatch(e.index,-2);else{let o=md(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function gR(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function vR(t,n){return t.type&11?is$1(t,n):t.type&4?Gd(t,n):null}function bR(t,n,e,i){return e===-1?vR(n,t):e===-2?_R(t,n,i):Sa(t,t[Z],e,n)}function _R(t,n,e){if(e===O)return is$1(n,t);if(e===Rt$1)return Gd(n,t);if(e===pt)return KS(n,t)}function XS(t,n,e,i){let r=n[oi].queries[i];if(r.matches===null){let o=t.data,s=e.matches,a=[];for(let c=0;s!==null&&c<s.length;c+=2){let l=s[c];if(l<0)a.push(null);else{let d=o[l];a.push(bR(n,d,s[c+1],e.metadata.read))}}r.matches=a}return r.matches}function gm(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let s=XS(t,n,r,e);for(let a=0;a<o.length;a+=2){let c=o[a];if(c>0)i.push(s[a/2]);else{let l=o[a+1],d=n[-c];for(let f=We$1;f<d.length;f++){let h=d[f];h[rr$1]===h[ft]&&gm(h[Z],h,l,i)}if(d[Yr]!==null){let f=d[Yr];for(let h=0;h<f.length;h++){let p=f[h];gm(p[Z],p,l,i)}}}}}return i}function cg(t,n){return t[oi].queries[n].queryList}function JS(t,n,e){let i=new Hn$1((e&4)===4);return my(t,n,i,i.destroy),(n[oi]??=new hm).queries.push(new fm(i))-1}function eC(t,n,e){let i=Pe$1();return i.firstCreatePass&&(nC(i,new Nd(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),JS(i,K$1(),n)}function tC(t,n,e,i){let r=Pe$1();if(r.firstCreatePass){let o=ot$1();nC(r,new Nd(n,e,i),o.index),wR(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return JS(r,K$1(),e)}function yR(t){return t.split(`,`).map(n=>n.trim())}function nC(t,n,e){t.queries===null&&(t.queries=new pm),t.queries.track(new mm(n,e))}function wR(t,n){let e=t.contentQueries||(t.contentQueries=[]);n!==(e.length?e[e.length-1]:-1)&&e.push(t.queries.length-1,n)}function lg(t,n){return t.queries.getByIndex(n)}function iC(t,n){let e=t[Z],i=lg(e,n);return i.crossesNgTemplate?gm(e,t,n,[]):XS(e,t,i,n)}function rC(t,n,e){let i,r=zs(()=>{i._dirtyCounter();let o=SR(i,t);if(n&&o===void 0)throw new w(-951,!1);return o});return i=r[Ye$1],i._dirtyCounter=ne$1(0),i._flatValue=void 0,r}function dg(t){return rC(!0,!1,t)}function ug(t){return rC(!0,!0,t)}function oC(t,n){let e=t[Ye$1];e._lView=K$1(),e._queryIndex=n,e._queryList=cg(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function SR(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[te]&4)return n?void 0:Tt$1;let r=cg(e,i),o=iC(e,i);return r.reset(o,Hw),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}function pi(t){return!!t&&typeof t.then==`function`}function Wd(t){return!!t&&typeof t.subscribe==`function`}var fi=class{};var qd=class{};var Ia=class extends fi{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=Q_(n);this._bootstrapComponents=lM(o.bootstrap),this._r3Injector=Mp(n,e,[{provide:fi,useValue:this},...i],oa(n),new Set([`environment`])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}};var xa=class extends qd{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new Ia(this.moduleType,n,[])}};function sC(t,n,e){return new Ia(t,n,e,!1)}var Td=class extends fi{injector;instance=null;constructor(n){super();let e=new Br([...n.providers,{provide:fi,useValue:this}],n.parent||Ho(),n.debugName,new Set([`environment`]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function os$1(t,n,e=null){return new Td({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var CR=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=op(!1,e.type),r=i.length>0?os$1([i],this._injector,``):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static ɵprov=E({token:t,providedIn:`environment`,factory:()=>new t(C(Te$1))})}return t})();function T(t){return Ta(()=>{let n=aC(t),e=G(g({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection!==Mm.Eager,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(CR).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Un$1.Emulated,styles:t.styles||Tt$1,_:null,schemas:t.schemas||null,tView:null,id:``});n.standalone&&bn$1(`NgStandalone`),cC(e);let i=t.dependencies;return e.directiveDefs=pw(i,DR),e.pipeDefs=pw(i,K_),e.id=xR(e),e})}function DR(t){return Ai(t)||ep(t)}function Y(t){return Ta(()=>({type:t.type,bootstrap:t.bootstrap||Tt$1,declarations:t.declarations||Tt$1,imports:t.imports||Tt$1,exports:t.exports||Tt$1,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function ER(t,n){if(t==null)return tr$1;let e={};for(let i in t)if(Object.hasOwn(t,i)){let r=t[i],o,s,a,c;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,c=r[3]||null):(o=r,s=r,a=ka.None,c=null),e[o]=[i,a,c],n[o]=s}return e}function IR(t){if(t==null)return tr$1;let n={};for(let e in t)Object.hasOwn(t,e)&&(n[t[e]]=e);return n}function M(t){return Ta(()=>{let n=aC(t);return cC(n),n})}function Yd(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function aC(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||tr$1,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Tt$1,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:ER(t.inputs,n),outputs:IR(t.outputs),debugInfo:null}}function cC(t){t.features?.forEach(n=>n(t))}function pw(t,n){return t?()=>{let e=typeof t==`function`?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function xR(t){let n=0,e=typeof t.consts==`function`?``:t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join(`|`))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,`c`+n}var fg=new m(``);function Zd(t){return ii([{provide:fg,multi:!0,useValue:t}])}var hg=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(fg,{optional:!0})??[];injector=u(ie$1);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=nt$1(this.injector,r);if(pi(o))e.push(o);else if(Wd(o)){let s=new Promise((a,c)=>{o.subscribe({complete:a,error:c})});e.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();function Qd(t){return n=>{n.controlDef={create:(e,i)=>{e?.ɵngControlCreate(i)},update:(e,i)=>{e?.ɵngControlUpdate?.(i)},passThroughInput:t}}}function MR(t){return Object.getPrototypeOf(t.prototype).constructor}function _e(t){let n=MR(t.type),e=!0,i=[t];for(;n&&n!==Function.prototype&&n!==Object.prototype;){let r,o=Object.hasOwn(n,aa)?n[aa]:void 0,s=Object.hasOwn(n,ca)?n[ca]:void 0;if(li(t))r=o??s;else{if(o)throw new w(903,!1);r=s}if(r){if(e){i.push(r);let c=t;c.inputs=Vp(t.inputs),c.declaredInputs=Vp(t.declaredInputs),c.outputs=Vp(t.outputs);let l=r.hostBindings;l&&FR(t,l);let d=r.viewQuery,f=r.contentQueries;if(d&&kR(t,d),f&&OR(t,f),AR(t,r),Z_(t.outputs,r.outputs),li(r)&&r.data.animation){let h=t.data;h.animation=(h.animation||[]).concat(r.data.animation)}}let a=r.features;if(a)for(let c=0;c<a.length;c++){let l=a[c];l&&l.ngInherit&&l(t),l===_e&&(e=!1)}}n=Object.getPrototypeOf(n)}RR(i)}function AR(t,n){for(let e in n.inputs){if(!Object.hasOwn(n.inputs,e)||Object.hasOwn(t.inputs,e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function RR(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=Xo(r.hostAttrs,e=Xo(e,r.hostAttrs))}}function Vp(t){return t===tr$1?{}:t===Tt$1?[]:t}function kR(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function OR(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function FR(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function dC(t,n,e,i,r,o,s,a){if(e.firstCreatePass){t.mergedAttrs=Xo(t.mergedAttrs,t.attrs);let d=t.tView=Qm(2,t,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),Wo(t,!1);let c=LR(e,n,t,i);id()&&Ym(e,n,c,t),Jo(c,n);let l=LS(c,n,c,t);n[i+He$1]=l,Xm(n,l),pR(l,t,n)}function PR(t,n,e,i,r,o,s,a,c,l,d){let f=e+He$1,h;return n.firstCreatePass?(h=rs$1(n,f,4,s||null,a||null),Kl()&&qS(n,t,h,nn$1(n.consts,l),Jm),Nw(n,h)):h=n.data[f],dC(h,t,n,e,i,r,o,c),$o(h)&&zd(n,t,h),l!=null&&Oa(t,h,d),h}function ts$1(t,n,e,i,r,o,s,a,c,l,d){let f=e+He$1,h;if(n.firstCreatePass){if(h=rs$1(n,f,4,s||null,a||null),l!=null){let p=nn$1(n.consts,l);h.localNames=[];for(let v=0;v<p.length;v+=2)h.localNames.push(p[v],-1)}}else h=n.data[f];return dC(h,t,n,e,i,r,o,c),l!=null&&Oa(t,h,d),h}function _n$1(t,n,e,i,r,o,s,a){let c=K$1(),l=Pe$1();return PR(c,l,t,n,e,i,r,nn$1(l.consts,o),void 0,s,a),_n$1}function Kd(t,n,e,i,r,o,s,a){let c=K$1(),l=Pe$1();return ts$1(c,l,t,n,e,i,r,nn$1(l.consts,o),void 0,s,a),Kd}var LR=jR;function jR(t,n,e,i){return ga(!0),n[Re$1].createComment(``)}var Xd=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static ɵfac=function(i){return new(i||t)};static ɵprov=E({token:t,factory:t.ɵfac,providedIn:`platform`})}return t})();var Jd=new m(``);var ss$1=new m(``);var mg=new m(`USE_PENDING_TASKS`,{providedIn:`root`,factory:()=>typeof Zone>`u`});var ja=(()=>{class t{_ngZone;registry;_isZoneStable=!0;_callbacks=[];_taskTrackingZone=null;_destroyRef;pendingTasksInternal=u(Ln$1);_usePendingTasks=u(mg);constructor(e,i,r){this._ngZone=e,this.registry=i,cp()&&(this._destroyRef=u(Be,{optional:!0})??void 0),gg||(uC(r),r.addToWindow(i)),this._watchAngularEvents(),e.run(()=>{this._taskTrackingZone=typeof Zone>`u`?null:Zone.current.get(`TaskTrackingZone`)})}_watchAngularEvents(){let e=this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),i,r;this._ngZone.runOutsideAngular(()=>{this._usePendingTasks&&(i=this.pendingTasksInternal.hasPendingTasksObservable.subscribe(()=>{this.isStable()&&this._ngZone.runOutsideAngular(()=>{this._runCallbacksIfReady()})})),r=this._ngZone.onStable.subscribe({next:()=>{D.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})}),this._destroyRef?.onDestroy(()=>{e.unsubscribe(),i?.unsubscribe(),r.unsubscribe()})}isStable(){return this._isZoneStable&&!this._ngZone.hasPendingMacrotasks&&(!this._usePendingTasks||!this.pendingTasksInternal.hasPendingTasks)}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb()}});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(i=>i.updateCb&&i.updateCb(e)?(clearTimeout(i.timeoutId),!1):!0)}}getPendingTasks(){return this._taskTrackingZone?this._taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,i,r){let o=-1;i&&i>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==o),e()},i)),this._callbacks.push({doneCb:e,timeoutId:o,updateCb:r})}whenStable(e,i,r){if(r&&!this._taskTrackingZone)throw new Error(`Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?`);this.addCallback(e,i,r),this._runCallbacksIfReady()}registerApplication(e){this.registry.registerApplication(e,this)}unregisterApplication(e){this.registry.unregisterApplication(e)}findProviders(e,i,r){return[]}static ɵfac=function(i){return new(i||t)(C(D),C(Va),C(ss$1))};static ɵprov=E({token:t,factory:t.ɵfac})}return t})();var Va=(()=>{class t{_applications=new Map;registerApplication(e,i){this._applications.set(e,i)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,i=!0){return gg?.findTestabilityInTree(this,e,i)??null}static ɵfac=function(i){return new(i||t)};static ɵprov=E({token:t,factory:t.ɵfac,providedIn:`platform`})}return t})();function uC(t){gg=t}var gg;var Ba=new m(``);function fC(){bh(()=>{throw new w(600,``)})}var VR=10;function vg(t,n){return Array.isArray(n)?n.reduce(vg,t):g(g({},t),n)}var It$1=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(qt$1);afterRenderManager=u(Vd);zonelessEnabled=u(Zo);rootEffectScheduler=u(ad);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new I;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(Ln$1);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(L(e=>!e))}constructor(){u(zn$1,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(Te$1);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=ie$1.NULL){return this._injector.get(D).run(()=>{if(ke$1(Ee.BootstrapComponentStart),!this._injector.get(hg).done)throw new w(405,``);let a=Ai(e),c=this._injector.get(fi),l=new ro(a,c);this.componentTypes.push(e);let{hostElement:d,directives:f,bindings:h}=BR(i),p=d||l.selector,v=l.create(r,[],p,c.injector,f,h),S=v.location.nativeElement,P=v.injector.get(Jd,null);return P?.registerApplication(S),v.onDestroy(()=>{this.detachView(v.hostView),wa(this.components,v),P?.unregisterApplication(S)}),this._loadComponent(v),ke$1(Ee.BootstrapComponentEnd,v),v})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){ke$1(Ee.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(jd.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw ke$1(Ee.ChangeDetectionEnd),new w(101,!1);let e=Q(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Q(e),this.afterTick.next(),ke$1(Ee.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(st$1,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<VR;){ke$1(Ee.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{ke$1(Ee.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!ha(r))continue;kS(r,i&&!this.zonelessEnabled?0:1),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>ha(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;wa(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Ba,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>wa(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new w(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();function BR(t){return t===void 0||typeof t==`string`||t instanceof Element?{hostElement:t}:t}function wa(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function eu(t,n){let e=K$1();if(vn$1(e,or$1(),n)){let r=Pe$1(),o=Kr();if($d(o,r,e,t,n))ci(o)&&IS(e,o.index);else{let a=Wt$1(o,e);xS(e[Re$1],a,null,o.value,t,n,null)}}return eu}function oe(t,n,e,i){let r=K$1();if(vn$1(r,or$1(),n)){Pe$1();iA(Kr(),r,t,n,e,i)}return oe}var bm=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function Bp(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function HR(t,n,e,i){let r,o,s=0,a=t.length-1;if(Array.isArray(n)){Q(i);let l=n.length-1;for(Q(null);s<=a&&s<=l;){let d=t.at(s),f=n[s],h=Bp(s,d,s,f,e);if(h!==0){h<0&&t.updateValue(s,f),s++;continue}let p=t.at(a),v=n[l],S=Bp(a,p,l,v,e);if(S!==0){S<0&&t.updateValue(a,v),a--,l--;continue}let P=e(s,d),$=e(a,p),J=e(s,f);if(Object.is(J,$)){let ce=e(l,v);Object.is(ce,P)?(t.swap(s,a),t.updateValue(a,v),l--,a--):t.move(a,s),t.updateValue(s,f),s++;continue}if(r??=new Md,o??=gw(t,s,a,e),_m(t,r,s,J))t.updateValue(s,f),s++,a++;else if(o.has(J))r.set(P,t.detach(s)),a--;else{let ce=t.create(s,n[s]);t.attach(s,ce),s++,a++}}for(;s<=l;)mw(t,r,e,s,n[s]),s++}else if(n!=null){Q(i);let l=n[Symbol.iterator]();Q(null);let d=l.next();for(;!d.done&&s<=a;){let f=t.at(s),h=d.value,p=Bp(s,f,s,h,e);if(p!==0)p<0&&t.updateValue(s,h),s++,d=l.next();else{r??=new Md,o??=gw(t,s,a,e);let v=e(s,h);if(_m(t,r,s,v))t.updateValue(s,h),s++,a++,d=l.next();else if(!o.has(v))t.attach(s,t.create(s,h)),s++,a++,d=l.next();else{let S=e(s,f);r.set(S,t.detach(s)),a--}}}for(;!d.done;)mw(t,r,e,t.length,d.value),d=l.next()}for(;s<=a;)t.destroy(t.detach(a--));r?.forEach(l=>{t.destroy(l)})}function _m(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function mw(t,n,e,i,r){if(_m(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function gw(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var Md=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function le(t,n,e,i,r,o,s,a){bn$1(`NgControlFlow`);let c=K$1(),l=Pe$1();return ts$1(c,l,t,n,e,i,r,nn$1(l.consts,o),256,s,a),bg}function bg(t,n,e,i,r,o,s,a){bn$1(`NgControlFlow`);let c=K$1(),l=Pe$1();return ts$1(c,l,t,n,e,i,r,nn$1(l.consts,o),512,s,a),bg}function de$1(t,n){bn$1(`NgControlFlow`);let e=K$1(),i=or$1(),r=e[i]!==Bt$1?e[i]:-1,o=r!==-1?Ad(e,He$1+r):void 0,s=0;if(vn$1(e,i,t)){let a=Q(null);try{if(o!==void 0&&VS(o,s),t!==-1){let c=He$1+t,l=Ad(e,c),d=Cm(e[Z],c),f=HS(l,d,e);Pa(l,Fa(e,d,n,{dehydratedView:f}),s,es$1(d,f))}}finally{Q(a)}}else if(o!==void 0){let a=jS(o,s);a!==void 0&&(a[Ke]=n)}}var ym=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-We$1}};function rn$1(t,n){return n}var wm=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function on$1(t,n,e,i,r,o,s,a,c,l,d,f,h){bn$1(`NgControlFlow`);let p=K$1(),v=Pe$1(),S=c!==void 0,P=K$1(),J=new wm(S,a?s.bind(P[Vt$1][Ke]):s);P[He$1+t]=J,ts$1(p,v,t+1,n,e,i,r,nn$1(v.consts,o),256),S&&ts$1(p,v,t+2,c,l,d,f,nn$1(v.consts,h),512)}var Sm=class extends bm{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-We$1}at(n){return this.getLView(n)[Ke].$implicit}attach(n,e){let i=e[$r];this.needsIndexUpdate||=n!==this.length,Pa(this.lContainer,e,n,es$1(this.templateTNode,i)),UR(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,zR(this.lContainer,n),$R(this.lContainer,n)}create(n,e){let i=Sd(this.lContainer,this.templateTNode.tView.ssrId);return Fa(this.hostLView,this.templateTNode,new ym(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Hd(n[Z],n)}updateValue(n,e){this.getLView(n)[Ke].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[Ke].$index=n}getLView(n){return GR(this.lContainer,n)}};function sn$1(t){let n=Q(null),e=Pn$1();try{let i=K$1(),r=i[Z],o=i[e],s=e+1,a=Ad(i,s);if(o.liveCollection===void 0)o.liveCollection=new Sm(a,i,Cm(r,s));else o.liveCollection.reset();let c=o.liveCollection;if(HR(c,t,o.trackByFn,n),c.updateIndexes(),o.hasEmptyBlock){let l=or$1(),d=c.length===0;if(vn$1(i,l,d)){let f=e+2,h=Ad(i,f);if(d){let p=Cm(r,f),v=HS(h,p,i);Pa(h,Fa(i,p,void 0,{dehydratedView:v}),0,es$1(p,v))}else r.firstUpdatePass&&xA(h),VS(h,0)}}}finally{Q(n)}}function Ad(t,n){return t[n]}function UR(t,n){if(t.length<=We$1)return;let i=t[We$1+n],r=i?i[ai]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[ri];NM(o,r),lr$1.delete(i[si]),r.detachedLeaveAnimationFns=void 0}}function zR(t,n){if(t.length<=We$1)return;let i=t[We$1+n],r=i?i[ai]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function $R(t,n){return Ea(t,n)}function GR(t,n){return jS(t,n)}function Cm(t,n){return Wl(t,n)}function ee$1(t,n,e){let i=K$1();if(vn$1(i,or$1(),n)){Pe$1();JM(Kr(),i,t,n,i[Re$1],e)}return ee$1}function Dm(t,n,e,i,r){$d(n,t,e,r?`class`:`style`,i)}function b(t,n,e,i){let r=K$1(),o=r[Z],s=t+He$1,a=o.firstCreatePass?sg(s,r,2,n,Jm,Kl(),e,i):o.data[s];if(ci(a)){let c=r[Fn$1].tracingService;if(c&&c.componentCreate){let l=o.data[a.directiveStart+a.componentOffset];return c.componentCreate($S(l),()=>(vw(t,n,r,a,i),b))}}return vw(t,n,r,a,i),b}function vw(t,n,e,i,r){if(eg(i,e,t,n,hC),$o(i)){let o=e[Z];zd(o,e,i),Om(o,i,e)}r!=null&&Oa(e,i)}function _$1(){let t=Pe$1(),e=tg(ot$1());return t.firstCreatePass&&ag(t,e),wp(e)&&Sp(),_p(),e.classesWithoutHost!=null&&dT(e)&&Dm(t,e,K$1(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&uT(e)&&Dm(t,e,K$1(),e.stylesWithoutHost,!1),_$1}function be$1(t,n,e,i){return b(t,n,e,i),_$1(),be$1}function Ue$1(t,n,e,i){let r=K$1(),o=r[Z],s=t+He$1,a=o.firstCreatePass?XA(s,o,2,n,e,i):o.data[s];return eg(a,r,t,n,hC),i!=null&&Oa(r,a),Ue$1}function $e$1(){return wp(tg(ot$1()))&&Sp(),_p(),$e$1}function mt$1(t,n,e,i){return Ue$1(t,n,e,i),$e$1(),mt$1}var hC=(t,n,e,i,r)=>(ga(!0),sS(n[Re$1],i,Tp()));function Ha(t,n,e){let i=K$1(),r=i[Z],o=t+He$1,s=r.firstCreatePass?sg(o,i,8,`ng-container`,Jm,Kl(),n,e):r.data[o];if(eg(s,i,t,`ng-container`,WR),$o(s)){let a=i[Z];zd(a,i,s),Om(a,s,i)}return e!=null&&Oa(i,s),Ha}function Ua(){let t=Pe$1(),e=tg(ot$1());return t.firstCreatePass&&ag(t,e),Ua}var WR=(t,n,e,i,r)=>(ga(!0),nM(n[Re$1],``));function yn$1(){return K$1()}function wn$1(t,n,e){let i=K$1();if(vn$1(i,or$1(),n)){Pe$1();ES(Kr(),i,t,n,i[Re$1],e)}return wn$1}var ba=void 0;function qR(t){let n=Math.floor(Math.abs(t)),e=t.toString().replace(/^[^.]*\.?/,``).length;return n===1&&e===0?1:5}var YR=[`en`,[[`a`,`p`],[`AM`,`PM`]],[[`AM`,`PM`]],[[`S`,`M`,`T`,`W`,`T`,`F`,`S`],[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`],[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`]],ba,[[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`]],ba,[[`B`,`A`],[`BC`,`AD`],[`Before Christ`,`Anno Domini`]],0,[6,0],[`M/d/yy`,`MMM d, y`,`MMMM d, y`,`EEEE, MMMM d, y`],[`h:mm a`,`h:mm:ss a`,`h:mm:ss a z`,`h:mm:ss a zzzz`],[`{1}, {0}`,ba,ba,ba],[`.`,`,`,`;`,`%`,`+`,`-`,`E`,`×`,`‰`,`∞`,`NaN`,`:`],[`#,##0.###`,`#,##0%`,`¤#,##0.00`,`#E0`],`USD`,`$`,`US Dollar`,{},`ltr`,qR];var Hp=Object.create(null);function an$1(t){let n=ZR(t),e=bw(n);if(e)return e;let i=n.split(`-`)[0];if(e=bw(i),e)return e;if(i===`en`)return YR;throw new w(701,!1)}function bw(t){if(!(t in Hp)){let n=tt$1.ng&&tt$1.ng.common&&tt$1.ng.common.locales&&tt$1.ng.common.locales[t];return n!==void 0&&(Hp[t]=n),n}return Hp[t]}var at$1={LocaleId:0,DayPeriodsFormat:1,DayPeriodsStandalone:2,DaysFormat:3,DaysStandalone:4,MonthsFormat:5,MonthsStandalone:6,Eras:7,FirstDayOfWeek:8,WeekendRange:9,DateFormat:10,TimeFormat:11,DateTimeFormat:12,NumberSymbols:13,NumberFormats:14,CurrencyCode:15,CurrencySymbol:16,CurrencyName:17,Currencies:18,Directionality:19,PluralCase:20,ExtraData:21};function ZR(t){return t.toLowerCase().replace(/_/g,`-`)}var za=`en-US`;function pC(t){typeof t==`string`&&t.toLowerCase().replace(/_/g,`-`)}function B$1(t,n,e){let i=K$1(),r=Pe$1(),o=ot$1();return KR(r,i,i[Re$1],o,t,n,e),B$1}function tu(t,n,e){let i=K$1(),r=Pe$1(),o=ot$1();return(o.type&3||e)&&og(o,r,i,e,i[Re$1],t,n,to(o,i,n)),tu}function KR(t,n,e,i,r,o,s){let a=!0,c=null;if((i.type&3||s)&&(c??=to(i,n,o),og(i,t,n,s,e,r,o,c)&&(a=!1)),a){let l=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let f=0;f<d.length;f+=2){let h=d[f],p=d[f+1];c??=to(i,n,o),Dd(i,n,h,p,r,c)}if(l&&l.length)for(let f of l)c??=to(i,n,o),Dd(i,n,f,r,r,c)}}function pe$1(t=1){return Ty(t)}function XR(t,n){let e=null,i=mM(t);for(let r=0;r<n.length;r++){let o=n[r];if(o===`*`){e=r;continue}if(i===null?hS(t,o,!0):bM(i,o))return r}return e}function ve$1(t){let n=K$1()[Vt$1][Dt$1];if(!n.projection){let i=n.projection=iy(t?t.length:1,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?XR(o,t):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function H$1(t,n=0,e,i,r,o){let s=K$1(),a=Pe$1(),c=i?t+1:null;c!==null&&ts$1(s,a,c,i,r,o,null,e);let l=rs$1(a,He$1+t,16,null,e||null);l.projection===null&&(l.projection=n),Ep();let f=!s[$r]||yp();s[Vt$1][Dt$1].projection[l.projection]===null&&c!==null?JR(s,a,c):f&&!Fd(l)&&zM(a,s,l)}function JR(t,n,e){let i=He$1+e,r=n.data[i],o=t[i],s=Sd(o,r.tView.ssrId);Pa(o,Fa(t,r,void 0,{dehydratedView:s}),0,es$1(r,s))}function xt$1(t,n,e,i){return tC(t,n,e,i),xt$1}function _t(t,n,e){return eC(t,n,e),_t}function U$1(t){let n=K$1(),e=Pe$1(),i=ed();ma(i+1);let r=lg(e,i);if(t.dirty&&uy(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=iC(n,i);t.reset(o,Hw),t.notifyOnChanges()}return!0}return!1}function z(){return cg(K$1(),ed())}function nu(t,n,e,i,r){return oC(n,tC(t,e,i,r)),nu}function iu(t,n,e,i){return oC(t,eC(n,e,i)),iu}function ru(t=1){ma(ed()+t)}function Pi(t){return ql(_y(),He$1+t)}function ud(t,n){return t<<17|n<<2}function oo(t){return t>>17&32767}function ek(t){return(t&2)==2}function tk(t,n){return t&131071|n<<17}function Em(t){return t|2}function ns$1(t){return(t&131068)>>2}function Up(t,n){return t&-131069|n<<2}function nk(t){return(t&1)===1}function Im(t){return t|1}function ik(t,n,e,i,r,o){let s=o?n.classBindings:n.styleBindings,a=oo(s),c=ns$1(s);t[i]=e;let l=!1,d;if(Array.isArray(e)){let f=e;d=f[1],(d===null||Bo(f,d)>0)&&(l=!0)}else d=e;if(r)if(c!==0){let h=oo(t[a+1]);t[i+1]=ud(h,a),h!==0&&(t[h+1]=Up(t[h+1],i)),t[a+1]=tk(t[a+1],i)}else t[i+1]=ud(a,0),a!==0&&(t[a+1]=Up(t[a+1],i)),a=i;else t[i+1]=ud(c,0),a===0?a=i:t[c+1]=Up(t[c+1],i),c=i;l&&(t[i+1]=Em(t[i+1])),_w(t,d,i,!0),_w(t,d,i,!1),rk(n,d,t,i,o),s=ud(a,c),o?n.classBindings=s:n.styleBindings=s}function rk(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n==`string`&&Bo(o,n)>=0&&(e[i+1]=Im(e[i+1]))}function _w(t,n,e,i){let r=t[e+1],o=n===null,s=i?oo(r):ns$1(r),a=!1;for(;s!==0&&(a===!1||o);){let c=t[s],l=t[s+1];ok(c,n)&&(a=!0,t[s+1]=i?Im(l):Em(l)),s=i?oo(l):ns$1(l)}a&&(t[e+1]=i?Em(r):Im(r))}function ok(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n==`string`?Bo(t,n)>=0:!1}var Bn$1={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function sk(t){return t.substring(Bn$1.key,Bn$1.keyEnd)}function ak(t){return ck(t),mC(t,gC(t,0,Bn$1.textEnd))}function mC(t,n){let e=Bn$1.textEnd;return e===n?-1:(n=Bn$1.keyEnd=lk(t,Bn$1.key=n,e),gC(t,n,e))}function ck(t){Bn$1.key=0,Bn$1.keyEnd=0,Bn$1.value=0,Bn$1.valueEnd=0,Bn$1.textEnd=t.length}function gC(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function lk(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function Sn$1(t,n,e){return vC(t,n,e,!1),Sn$1}function k(t,n){return vC(t,n,null,!0),k}function gt(t){uk(vk,dk,t,!0)}function dk(t,n){for(let e=ak(n);e>=0;e=mC(n,e))Ul(t,sk(n),!0)}function vC(t,n,e,i){let r=K$1(),o=Pe$1(),s=Xl(2);if(o.firstUpdatePass&&_C(o,t,s,i),n!==Bt$1&&vn$1(r,s,n)){let a=o.data[Pn$1()];yC(o,a,r,r[Re$1],t,r[s+1]=_k(n,e),i,s)}}function uk(t,n,e,i){let r=Pe$1(),o=Xl(2);r.firstUpdatePass&&_C(r,null,o,i);let s=K$1();if(e!==Bt$1&&vn$1(s,o,e)){let a=r.data[Pn$1()];if(wC(a,i)&&!bC(r,o)){let c=i?a.classesWithoutHost:a.stylesWithoutHost;c!==null&&(e=Ll(c,e||``)),Dm(r,a,s,e,i)}else bk(r,a,s,s[Re$1],s[o+1],s[o+1]=gk(t,n,e),i,o)}}function bC(t,n){return n>=t.expandoStartIndex}function _C(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[Pn$1()],s=bC(t,e);wC(o,i)&&n===null&&!s&&(n=!1),n=fk(r,o,n,i),ik(r,o,n,e,s,i)}}function fk(t,n,e,i){let r=Ey(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=zp(null,t,n,e,i),e=Na(e,n.attrs,i),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==r)if(e=zp(r,t,n,e,i),o===null){let c=hk(t,n,i);c!==void 0&&Array.isArray(c)&&(c=zp(null,t,n,c[1],i),c=Na(c,n.attrs,i),pk(t,n,i,c))}else o=mk(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function hk(t,n,e){let i=e?n.classBindings:n.styleBindings;if(ns$1(i)!==0)return t[oo(i)]}function pk(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[oo(r)]=i}function mk(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let s=t[o].hostAttrs;i=Na(i,s,e)}return Na(i,n.attrs,e)}function zp(t,n,e,i,r){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],i=Na(i,o.hostAttrs,r),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),i}function Na(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s==`number`?r=s:r===i&&(Array.isArray(t)||(t=t===void 0?[]:[``,t]),Ul(t,s,e?!0:n[++o]))}return t===void 0?null:t}function gk(t,n,e){if(e==null||e===``)return Tt$1;let i=[],r=Zt$1(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r==`object`)for(let o in r)Object.hasOwn(r,o)&&t(i,o,r[o]);else typeof r==`string`&&n(i,r);return i}function vk(t,n,e){let i=String(n);i!==``&&!i.includes(` `)&&Ul(t,i,e)}function bk(t,n,e,i,r,o,s,a){r===Bt$1&&(r=Tt$1);let c=0,l=0,d=0<r.length?r[0]:null,f=0<o.length?o[0]:null;for(;d!==null||f!==null;){let h=c<r.length?r[c+1]:void 0,p=l<o.length?o[l+1]:void 0,v=null,S;d===f?(c+=2,l+=2,h!==p&&(v=f,S=p)):f===null||d!==null&&d<f?(c+=2,v=d):(l+=2,v=f,S=p),v!==null&&yC(t,n,e,i,v,S,s,a),d=c<r.length?r[c]:null,f=l<o.length?o[l]:null}}function yC(t,n,e,i,r,o,s,a){if(!(n.type&3))return;let c=t.data,l=c[a+1];if(!Rd(nk(l)?yw(c,n,e,r,ns$1(l),s):void 0)){Rd(o)||ek(l)&&(o=yw(c,null,e,r,a,s));GM(i,s,hp(Pn$1(),e),r,o)}}function yw(t,n,e,i,r,o){let s=n===null,a;for(;r>0;){let c=t[r],l=Array.isArray(c),d=l?c[1]:c,f=d===null,h=e[r+1];h===Bt$1&&(h=f?Tt$1:void 0);let p=f?zl(h,i):d===i?h:void 0;if(l&&!Rd(p)&&(p=zl(c,i)),Rd(p)&&(a=p,s))return a;let v=t[r+1];r=s?oo(v):ns$1(v)}if(n!==null){let c=o?n.residualClasses:n.residualStyles;c!=null&&(a=zl(c,i))}return a}function Rd(t){return t!==void 0}function _k(t,n){return t==null||t===``||(typeof n==`string`?t=Zt$1(t)+n:typeof t==`object`&&(t=oa(Zt$1(t)))),t}function wC(t,n){return(t.flags&(n?8:16))!==0}function j(t,n=``){let e=K$1(),i=Pe$1(),r=t+He$1,o=i.firstCreatePass?rs$1(i,r,1,n,null):i.data[r],s=yk(i,e,o,n);e[r]=s,id()&&Ym(i,e,s,o),Wo(o,!1)}var yk=(t,n,e,i)=>(ga(!0),eM(n[Re$1],i));function wk(t,n,e,i=``){return vn$1(t,or$1(),e)?n+zr(e)+i:Bt$1}function Sk(t,n,e,i,r,o=``){let a=GS(t,yy(),e,r);return Xl(2),a?n+zr(e)+i+zr(r)+o:Bt$1}function ct(t){return yt(``,t),ct}function yt(t,n,e){let i=K$1(),r=wk(i,t,n,e);return r!==Bt$1&&SC(i,Pn$1(),r),yt}function ou(t,n,e,i,r){let o=K$1(),s=Sk(o,t,n,e,i,r);return s!==Bt$1&&SC(o,Pn$1(),s),ou}function SC(t,n,e){let i=hp(n,t);tM(t[Re$1],i,e)}function ww(t,n,e){let i=Pe$1();i.firstCreatePass&&CC(n,i.data,i.blueprint,li(t),e)}function CC(t,n,e,i,r){if(t=Ct$1(t),Array.isArray(t))for(let o=0;o<t.length;o++)CC(t[o],n,e,i,r);else{let o=Pe$1(),s=K$1(),a=ot$1(),c=Vr(t)?t:Ct$1(t.provide),l=ap(t),d=a.providerIndexes&1048575,f=a.directiveStart,h=a.providerIndexes>>20;if(Vr(t)||!t.multi){let p=new no(l,r,A,null),v=Gp(c,n,r?d:d+h,f);v===-1?(Yp(wd(a,s),o,c),$p(o,t,n.length),n.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(p),s.push(p)):(e[v]=p,s[v]=p)}else{let p=Gp(c,n,d+h,f),v=Gp(c,n,d,d+h),S=p>=0&&e[p],P=v>=0&&e[v];if(r&&!P||!r&&!S){Yp(wd(a,s),o,c);let $=Ek(r?Dk:Ck,e.length,r,i,l,t);!r&&P&&(e[v].providerFactory=$),$p(o,t,n.length,0),n.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push($),s.push($)}else{let $=DC(e[r?v:p],l,!r&&i);$p(o,t,p>-1?p:v,$)}!r&&i&&P&&e[v].componentProviders++}}}function $p(t,n,e,i){let r=Vr(n),o=cy(n);if(r||o){let c=(o?Ct$1(n.useClass):n).prototype.ngOnDestroy;if(c){let l=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=l.indexOf(e);d===-1?l.push(e,[i,c]):l[d+1].push(i,c)}else l.push(e,c)}}}function DC(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function Gp(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function Ck(t,n,e,i,r){return xm(this.multi,[])}function Dk(t,n,e,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,c=Sa(i,i[Z],this.providerFactory.index,r);s=c.slice(0,a),xm(o,s);for(let l=a;l<c.length;l++)s.push(c[l])}else s=[],xm(o,s);return s}function xm(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function Ek(t,n,e,i,r,o){let s=new no(t,e,A,null);return s.multi=[],s.index=n,s.componentProviders=0,DC(s,r,i&&!e),s}function je(t,n){return e=>{e.providersResolver=(i,r)=>ww(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>ww(i,r?r(n):n,!0))}}function _g(t,n){let e=pa()+t,i=K$1();return i[e]===Bt$1?rg(i,e,n()):RA(i,e)}function Li(t,n,e){return IC(K$1(),pa(),t,n,e)}function EC(t,n){let e=t[n];return e===Bt$1?void 0:e}function IC(t,n,e,i,r,o){let s=n+e;return vn$1(t,s,r)?rg(t,s+1,o?i.call(o,r):i(r)):EC(t,s+1)}function Ik(t,n,e,i,r,o,s){let a=n+e;return GS(t,a,r,o)?rg(t,a+2,s?i.call(s,r,o):i(r,o)):EC(t,a+2)}function $n$1(t,n){let e=Pe$1(),i,r=t+He$1;e.firstCreatePass?(i=xk(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=er$1(i.type,!0)),a=jt$1(A);try{let c=yd(!1),l=o();return yd(c),pp(e,K$1(),r,l),l}finally{jt$1(a)}}function xk(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function co(t,n,e){let i=t+He$1,r=K$1(),o=ql(r,i);return xC(r,i)?IC(r,pa(),n,o.transform,e,o):o.transform(e)}function $a(t,n,e,i){let r=t+He$1,o=K$1(),s=ql(o,r);return xC(o,r)?Ik(o,pa(),n,s.transform,e,i,s):s.transform(e,i)}function xC(t,n){return t[Z].data[n].pure}function yg(t,n){return Gd(t,n)}var TC=(()=>{class t{applicationErrorHandler=u(qt$1);appRef=u(It$1);taskService=u(Ln$1);ngZone=u(D);zonelessEnabled=u(Zo);tracing=u(zn$1,{optional:!0});zoneIsDefined=typeof Zone<`u`&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new fe$1;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(ia):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(sd,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:case 2:this.appRef.dirtyFlags|=2;break;case 3:case 4:case 5:case 1:this.appRef.dirtyFlags|=4;break;case 6:this.appRef.dirtyFlags|=2;break;case 12:this.appRef.dirtyFlags|=16;break;case 13:this.appRef.dirtyFlags|=2;break;case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?Ry:Rp;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(ia+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();function MC(){return[{provide:kn$1,useExisting:TC},{provide:D,useClass:ra},{provide:Zo,useValue:!0}]}var wg=(()=>{class t{compileModuleSync(e){return new xa(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();new m(``);function Nk(){return typeof $localize<`u`&&$localize.locale||za}var Ga=new m(``,{factory:()=>u(Ga,{optional:!0,skipSelf:!0})||Nk()});var su=class{destroyed=!1;listeners=null;errorHandler=u(Mt$1,{optional:!0});isEmitting=!1;hasNullListeners=!1;destroyRef=u(Be);constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0,this.listeners=null})}subscribe(n){if(this.destroyed)throw new w(953,!1);return(this.listeners??=[]).push(n),{unsubscribe:()=>{let e=this.listeners?this.listeners.indexOf(n):-1;e>-1&&(this.isEmitting?(this.hasNullListeners=!0,this.listeners[e]=null):this.listeners.splice(e,1))}}}emit(n){if(this.destroyed){console.warn(en(953,!1));return}if(this.listeners===null)return;this.isEmitting=!0;let e=Q(null);try{for(let i of this.listeners)try{i!==null&&i(n)}catch(r){this.errorHandler?.handleError(r)}}finally{this.hasNullListeners&&(this.hasNullListeners=!1,this.listeners&&Tk(this.listeners)),Q(e),this.isEmitting=!1}}};function Tk(t){let n=t.length-1;for(;n>-1;)t[n]===null&&t.splice(n,1),n--}function Xe$1(t,n){return zs(t,n?.equal)}function re(t){return g_(t)}(class t extends Error{_brand;constructor(n){super(n)}static IDLE=new t(`IDLE`);static LOADING=new t(`LOADING`)});var Mk=t=>t;function au(t,n){if(typeof t==`function`)return kC(Ch(t,Mk,n?.equal),n?.debugName,n?.set);else return kC(Ch(t.source,t.computation,t.equal),t.debugName,t.set)}function kC(t,n,e){let i=t[Ye$1],r=t;if(e!==void 0){let o=s=>Dh(i,s);r.set=s=>e(s,o),r.update=s=>e(s(re(t)),o)}else r.set=o=>Dh(i,o),r.update=o=>m_(i,o);return r.asReadonly=rd.bind(t),r}function BC(t,n){let e=Object.create(Dw);e.value=t,e.transformFn=n?.transform;function i(){if(qi(e),e.value===kd)throw new w(-950,null);return e.value}return i[Ye$1]=e,i}var mi=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Ma(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}};var HC=(()=>{let t=new m(``);return t.__NG_ELEMENT_ID__=n=>{let e=ot$1();if(e===null)throw new w(-204,!1);if(e.type&2)return e.value;if(n&8)return null;throw new w(-204,!1)},t})();function Eg(t){return jk(t)?t.default:t}function jk(t){return t&&typeof t==`object`&&`default`in t}function U6(t){return new su}function OC(t,n){return BC(t,n)}function Vk(t){return BC(kd,t)}var lo=(OC.required=Vk,OC);function FC(t,n){return dg(n)}function Bk(t,n){return ug(n)}var qa=(FC.required=Bk,FC);function PC(t,n){return dg(n)}function Hk(t,n){return ug(n)}var UC=(PC.required=Hk,PC);var zC=(()=>{class t{constructor(e){}static ɵfac=function(i){return new(i||t)(C(It$1))};static ɵmod=Y({type:t});static ɵinj=V({})}return t})();var Le=(()=>{class t{static __NG_ELEMENT_ID__=zk}return t})();function zk(t){return $k(ot$1(),K$1(),(t&16)===16)}function $k(t,n,e){if(ci(t)&&!e){let i=gn$1(t.index,n);return new dr$1(i,i)}else if(t.type&175){let i=n[Vt$1];return new dr$1(i,n)}return null}var Gk=(()=>{class t{zone=u(D);changeDetectionScheduler=u(kn$1);applicationRef=u(It$1);applicationErrorHandler=u(qt$1);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(e){this.applicationErrorHandler(e)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var Wk=new m(``,{factory:()=>!1});function qk({ngZoneFactory:t,scheduleInRootZone:n}){return t??=()=>new D(G(g({},$C()),{scheduleInRootZone:n})),[{provide:Zo,useValue:!1},{provide:D,useFactory:t},{provide:nr$1,multi:!0,useFactory:()=>{let e=u(Gk,{optional:!0});return()=>e.initialize()}},{provide:nr$1,multi:!0,useFactory:()=>{let e=u(Yk);return()=>{e.initialize()}}},{provide:sd,useValue:n??Ap}]}function $6(t){let n=t?.scheduleInRootZone,e=qk({ngZoneFactory:()=>{let i=$C(t);return i.scheduleInRootZone=n,i.shouldCoalesceEventChangeDetection&&bn$1(`NgZone_CoalesceEvent`),new D(i)},scheduleInRootZone:n});return ii([{provide:Wk,useValue:!0},e])}function $C(t){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:t?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:t?.runCoalescing??!1}}var Yk=(()=>{class t{subscription=new fe$1;initialized=!1;zone=u(D);pendingTasks=u(Ln$1);initialize(){if(this.initialized)return;this.initialized=!0;let e=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(e=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{D.assertNotInAngularZone(),queueMicrotask(()=>{e!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(e),e=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{D.assertInAngularZone(),e??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();function Zk(t,n,e){let i=new xa(e);return Promise.resolve(i)}var cu=new m(``);var Qk=new m(``);function Wa(t){return!t.moduleRef}function Kk(t){let n=Wa(t)?t.r3Injector:t.moduleRef.injector,e=n.get(D);return e.run(()=>{Wa(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(qt$1),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),Wa(t)){let o=()=>n.destroy(),s=t.platformInjector.get(cu);s.add(o),n.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(cu);s.add(o),t.moduleRef.onDestroy(()=>{wa(t.allPlatformModules,t.moduleRef),r.unsubscribe(),s.delete(o)})}return Jk(i,e,()=>{let o=n.get(Ln$1),s=o.add(),a=n.get(hg);return a.runInitializers(),a.donePromise.then(()=>{if(pC(n.get(Ga,za)||za),!n.get(Qk,!0))return Wa(t)?n.get(It$1):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Wa(t)){let d=n.get(It$1);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return GC?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var GC;function jC(){GC=Xk}function Xk(t,n){let e=t.injector.get(It$1);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach(i=>e.bootstrap(i));else if(t.instance.ngDoBootstrap)t.instance.ngDoBootstrap(e);else throw new w(-403,!1);n.push(t)}function Jk(t,n,e){try{let i=e();return pi(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var WC=(()=>{class t{_injector;_modules=[];_destroyListeners=[];_destroyed=!1;constructor(e){this._injector=e}bootstrapModuleFactory(e,i){let r=[MC(),...i?.applicationProviders??[],Oy],o=sC(e.moduleType,this.injector,r);return jC(),Kk({moduleRef:o,allPlatformModules:this._modules,platformInjector:this.injector})}bootstrapModule(e,i=[]){let r=vg({},i);return jC(),Zk(this.injector,r,e).then(o=>this.bootstrapModuleFactory(o,r))}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new w(404,!1);this._modules.slice().forEach(i=>i.destroy()),this._destroyListeners.forEach(i=>i());let e=this._injector.get(cu,null);e&&(e.forEach(i=>i()),e.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}static ɵfac=function(i){return new(i||t)(C(ie$1))};static ɵprov=E({token:t,factory:t.ɵfac,providedIn:`platform`})}return t})();var Ig=null;function eO(t){if(Ng())throw new w(400,!1);fC(),Ig=t;let n=t.get(WC);return iO(t),n}function xg(t,n,e=[]){let i=`Platform: ${n}`,r=new m(i);return(o=[])=>{let s=Ng();if(!s){let a=[...e,...o,{provide:r,useValue:!0}];s=t?.(a)??eO(tO(a,i))}return nO(r)}}function tO(t=[],n){return ie$1.create({name:n,providers:[{provide:ua,useValue:`platform`},{provide:cu,useValue:new Set([()=>Ig=null])},...t]})}function nO(t){let n=Ng();if(!n)throw new w(-401,!1);return n}function Ng(){return Ig?.get(WC)??null}function iO(t){let n=t.get(od,null);nt$1(t,()=>{n?.forEach(e=>e())})}function F(t){return typeof t==`boolean`?t:t!=null&&t!==`false`}function kt$1(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var Sg=Symbol(`NOT_SET`);var qC=new Set;var rO=G(g({},Mo),{kind:`afterRenderEffectPhase`,consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:Sg,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==Sg&&!No(this))return this.signal;try{for(let r of this.cleanup??qC)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=Di(this),i;try{i=this.userFn.apply(null,n)}finally{Yi(this,e)}return(this.value===Sg||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}});var Cg=class extends Ca{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,s=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(Be),s),this.scheduler=r;for(let a of $m){let c=e[a];if(c===void 0)continue;let l=Object.create(rO);l.sequence=this,l.phase=a,l.userFn=c,l.dirty=!0,l.signal=()=>(qi(l),l.value),l.signal[Ye$1]=l,l.registerCleanupFn=d=>(l.cleanup??=new Set).add(d),this.nodes[a]=l,this.hooks[a]=d=>l.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??qC)e()}finally{Zi(n)}}};function Tg(t,n){let e=n?.injector??u(ie$1),i=e.get(kn$1),r=e.get(Vd),o=e.get(zn$1,null,{optional:!0});r.impl??=e.get(Gm);let s=t;typeof s==`function`&&(s={mixedReadWrite:t});let a=e.get(Yo,null,{optional:!0}),c=new Cg(r.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,i,e,o?.snapshot(null));return r.impl.register(c),c}var YC=xg(null,`core`,[]);function lu(t,n){let e=Ai(t),i=n.elementInjector||Ho();return new ro(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}function Mg(t){let n=Ai(t);if(!n)return null;let e=new ro(n);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}var ZC=null;function cn$1(){return ZC}function Ag(t){ZC??=t}var Ya=class{};var ji=(()=>{class t{historyGo(e){throw new Error(``)}static ɵfac=function(i){return new(i||t)};static ɵprov=E({token:t,factory:()=>u(QC),providedIn:`platform`})}return t})();var Rg=new m(``);var QC=(()=>{class t extends ji{_location;_history;_doc=u(q);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return cn$1().getBaseHref(this._doc)}onPopState(e){let i=cn$1().getGlobalEventTarget(this._doc,`window`);return i.addEventListener(`popstate`,e,!1),()=>i.removeEventListener(`popstate`,e)}onHashChange(e){let i=cn$1().getGlobalEventTarget(this._doc,`window`);return i.addEventListener(`hashchange`,e,!1),()=>i.removeEventListener(`hashchange`,e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static ɵfac=function(i){return new(i||t)};static ɵprov=E({token:t,factory:()=>new t,providedIn:`platform`})}return t})();function du(t,n){return t?n?t.endsWith(`/`)?n.startsWith(`/`)?t+n.slice(1):t+n:n.startsWith(`/`)?t+n:`${t}/${n}`:t:n}function KC(t){let n=t.search(/#|\?|$/);return t[n-1]===`/`?t.slice(0,n-1)+t.slice(n):t}function Gn$1(t){return t&&t[0]!==`?`?`?${t}`:t}var Wn$1=(()=>{class t{historyGo(e){throw new Error(``)}static ɵfac=function(i){return new(i||t)};static ɵprov=E({token:t,factory:()=>u(fu),providedIn:`root`})}return t})();var uu=new m(``);var fu=(()=>{class t extends Wn$1{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(q).location?.origin??``}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return du(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+Gn$1(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+Gn$1(o));this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+Gn$1(o));this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static ɵfac=function(i){return new(i||t)(C(ji),C(uu,8))};static ɵprov=E({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var gi=(()=>{class t{_subject=new I;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=aO(KC(XC(i))),this._locationStrategy.onPopState(r=>{let o={url:this.path(!0),pop:!0,state:r.state,type:r.type};r.hasUAVisualTransition&&(o.hasUAVisualTransition=!0),this._subject.next(o)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=``){return this.path()==this.normalize(e+Gn$1(i))}normalize(e){return t.stripTrailingSlash(sO(this._basePath,XC(e)))}prepareExternalUrl(e){return e&&e[0]!==`/`&&(e=`/`+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i=``,r=null){this._locationStrategy.pushState(r,``,e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Gn$1(i)),r)}replaceState(e,i=``,r=null){this._locationStrategy.replaceState(r,``,e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Gn$1(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e=``,i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=Gn$1;static joinWithSlash=du;static stripTrailingSlash=KC;static ɵfac=function(i){return new(i||t)(C(Wn$1))};static ɵprov=E({token:t,factory:()=>oO(),providedIn:`root`})}return t})();function oO(){return new gi(C(Wn$1))}function sO(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===``||[`/`,`;`,`?`,`#`].includes(e[0])?e:n}function XC(t){return t.replace(/\/index\.html$/,``)}function aO(t){if(new RegExp(`^(https?:)?//`).test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var jg=(()=>{class t extends Wn$1{_platformLocation;_baseHref=``;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let i=this._platformLocation.hash??`#`;return i.length>0?i.substring(1):i}prepareExternalUrl(e){let i=du(this._baseHref,e);return i.length>0?`#`+i:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+Gn$1(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+Gn$1(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static ɵfac=function(i){return new(i||t)(C(ji),C(uu,8))};static ɵprov=E({token:t,factory:t.ɵfac})}return t})();var Ot$1=(function(t){return t[t.Format=0]=`Format`,t[t.Standalone=1]=`Standalone`,t})(Ot$1||{});var Oe$1=(function(t){return t[t.Narrow=0]=`Narrow`,t[t.Abbreviated=1]=`Abbreviated`,t[t.Wide=2]=`Wide`,t[t.Short=3]=`Short`,t})(Oe$1||{});var Qt$1=(function(t){return t[t.Short=0]=`Short`,t[t.Medium=1]=`Medium`,t[t.Long=2]=`Long`,t[t.Full=3]=`Full`,t})(Qt$1||{});var Bi={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function eD(t){return an$1(t)[at$1.LocaleId]}function tD(t,n,e){let i=an$1(t);return Cn$1(Cn$1([i[at$1.DayPeriodsFormat],i[at$1.DayPeriodsStandalone]],n),e)}function nD(t,n,e){let i=an$1(t);return Cn$1(Cn$1([i[at$1.DaysFormat],i[at$1.DaysStandalone]],n),e)}function iD(t,n,e){let i=an$1(t);return Cn$1(Cn$1([i[at$1.MonthsFormat],i[at$1.MonthsStandalone]],n),e)}function rD(t,n){let i=an$1(t)[at$1.Eras];return Cn$1(i,n)}function Za(t,n){return Cn$1(an$1(t)[at$1.DateFormat],n)}function Qa(t,n){return Cn$1(an$1(t)[at$1.TimeFormat],n)}function Ka(t,n){let i=an$1(t)[at$1.DateTimeFormat];return Cn$1(i,n)}function Xa(t,n){let e=an$1(t),i=e[at$1.NumberSymbols][n];if(typeof i>`u`){if(n===Bi.CurrencyDecimal)return e[at$1.NumberSymbols][Bi.Decimal];if(n===Bi.CurrencyGroup)return e[at$1.NumberSymbols][Bi.Group]}return i}function oD(t){if(!t[at$1.ExtraData])throw new w(2303,!1)}function sD(t){let n=an$1(t);return oD(n),(n[at$1.ExtraData][2]||[]).map(i=>typeof i==`string`?kg(i):[kg(i[0]),kg(i[1])])}function aD(t,n,e){let i=an$1(t);oD(i);return Cn$1(Cn$1([i[at$1.ExtraData][0],i[at$1.ExtraData][1]],n)||[],e)||[]}function Cn$1(t,n){for(let e=n;e>-1;e--)if(typeof t[e]<`u`)return t[e];throw new w(2304,!1)}function kg(t){let[n,e]=t.split(`:`);return{hours:+n,minutes:+e}}var lO=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;var hu=Object.create(null);var dO=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;var uO=256;function cD(t,n,e,i){let r=wO(t);fO(n),n=Vi(e,n)||n;let s=[],a;for(;n;)if(a=dO.exec(n),a){s=s.concat(a.slice(1));let d=s.pop();if(!d)break;n=d}else{s.push(n);break}let c=r.getTimezoneOffset();i&&(c=dD(i,c),r=yO(r,i));let l=``;return s.forEach(d=>{let f=bO(d);l+=f?f(r,e,c):d===`''`?`'`:d.replace(/(^'|'$)/g,``).replace(/''/g,`'`)}),l}function fO(t){if(t.length>uO)throw new w(2300,!1)}function bu(t,n,e){let i=new Date(0);return i.setFullYear(t,n,e),i.setHours(0,0,0),i}function Vi(t,n){let e=eD(t);if(hu[e]??=Object.create(null),hu[e][n])return hu[e][n];let i=``;switch(n){case`shortDate`:i=Za(t,Qt$1.Short);break;case`mediumDate`:i=Za(t,Qt$1.Medium);break;case`longDate`:i=Za(t,Qt$1.Long);break;case`fullDate`:i=Za(t,Qt$1.Full);break;case`shortTime`:i=Qa(t,Qt$1.Short);break;case`mediumTime`:i=Qa(t,Qt$1.Medium);break;case`longTime`:i=Qa(t,Qt$1.Long);break;case`fullTime`:i=Qa(t,Qt$1.Full);break;case`short`:let r=Vi(t,`shortTime`),o=Vi(t,`shortDate`);i=pu(Ka(t,Qt$1.Short),[r,o]);break;case`medium`:let s=Vi(t,`mediumTime`),a=Vi(t,`mediumDate`);i=pu(Ka(t,Qt$1.Medium),[s,a]);break;case`long`:let c=Vi(t,`longTime`),l=Vi(t,`longDate`);i=pu(Ka(t,Qt$1.Long),[c,l]);break;case`full`:let d=Vi(t,`fullTime`),f=Vi(t,`fullDate`);i=pu(Ka(t,Qt$1.Full),[d,f]);break}return i&&(hu[e][n]=i),i}function pu(t,n){return n&&(t=t.replace(/\{([^}]+)}/g,function(e,i){return Object.hasOwn(n,i)?n[i]:e})),t}function qn$1(t,n,e=`-`,i,r){let o=``;(t<0||r&&t<=0)&&(r?t=-t+1:(t=-t,o=e));let s=String(t);for(;s.length<n;)s=`0`+s;return i&&(s=s.slice(s.length-n)),o+s}function hO(t,n){return qn$1(t,3).substring(0,n)}function lt$1(t,n,e=0,i=!1,r=!1){return function(o,s){let a=pO(t,o);if((e>0||a>-e)&&(a+=e),t===3)a===0&&e===-12&&(a=12);else if(t===6)return hO(a,n);let c=Xa(s,Bi.MinusSign);return qn$1(a,n,c,i,r)}}function pO(t,n){switch(t){case 0:return n.getFullYear();case 1:return n.getMonth();case 2:return n.getDate();case 3:return n.getHours();case 4:return n.getMinutes();case 5:return n.getSeconds();case 6:return n.getMilliseconds();case 7:return n.getDay();default:throw new w(2301,!1)}}function Ve(t,n,e=Ot$1.Format,i=!1){return function(r,o){return mO(r,o,t,n,e,i)}}function mO(t,n,e,i,r,o){switch(e){case 2:return iD(n,r,i)[t.getMonth()];case 1:return nD(n,r,i)[t.getDay()];case 0:let s=t.getHours(),a=t.getMinutes();if(o){let l=sD(n),d=aD(n,r,i),f=l.findIndex(h=>{if(Array.isArray(h)){let[p,v]=h,S=s>=p.hours&&a>=p.minutes,P=s<v.hours||s===v.hours&&a<v.minutes;if(p.hours<v.hours){if(S&&P)return!0}else if(S||P)return!0}else if(h.hours===s&&h.minutes===a)return!0;return!1});if(f!==-1)return d[f]}return tD(n,r,i)[s<12?0:1];case 3:return rD(n,i)[t.getFullYear()<=0?0:1];default:throw new w(2302,!1)}}function mu(t){return function(n,e,i){let r=-1*i,o=Xa(e,Bi.MinusSign),s=r>0?Math.floor(r/60):Math.ceil(r/60);switch(t){case 0:return(r>=0?`+`:``)+qn$1(s,2,o)+qn$1(Math.abs(r%60),2,o);case 1:return`GMT`+(r>=0?`+`:``)+qn$1(s,1,o);case 2:return`GMT`+(r>=0?`+`:``)+qn$1(s,2,o)+`:`+qn$1(Math.abs(r%60),2,o);case 3:return i===0?`Z`:(r>=0?`+`:``)+qn$1(s,2,o)+`:`+qn$1(Math.abs(r%60),2,o);default:throw new w(2310,!1)}}}var gO=0;var vu=4;function vO(t){let n=bu(t,gO,1).getDay();return bu(t,0,1+(n<=vu?vu:vu+7)-n)}function lD(t){let n=t.getDay(),e=n===0?-3:vu-n;return bu(t.getFullYear(),t.getMonth(),t.getDate()+e)}function Og(t,n=!1){return function(e,i){let r;if(n){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,s=e.getDate();r=1+Math.floor((s+o)/7)}else{let o=lD(e),s=vO(o.getFullYear()),a=o.getTime()-s.getTime();r=1+Math.round(a/6048e5)}return qn$1(r,t,Xa(i,Bi.MinusSign))}}function gu(t,n=!1){return function(e,i){return qn$1(lD(e).getFullYear(),t,Xa(i,Bi.MinusSign),n)}}var Fg=Object.create(null);function bO(t){if(Fg[t])return Fg[t];let n;switch(t){case`G`:case`GG`:case`GGG`:n=Ve(3,Oe$1.Abbreviated);break;case`GGGG`:n=Ve(3,Oe$1.Wide);break;case`GGGGG`:n=Ve(3,Oe$1.Narrow);break;case`y`:n=lt$1(0,1,0,!1,!0);break;case`yy`:n=lt$1(0,2,0,!0,!0);break;case`yyy`:n=lt$1(0,3,0,!1,!0);break;case`yyyy`:n=lt$1(0,4,0,!1,!0);break;case`Y`:n=gu(1);break;case`YY`:n=gu(2,!0);break;case`YYY`:n=gu(3);break;case`YYYY`:n=gu(4);break;case`M`:case`L`:n=lt$1(1,1,1);break;case`MM`:case`LL`:n=lt$1(1,2,1);break;case`MMM`:n=Ve(2,Oe$1.Abbreviated);break;case`MMMM`:n=Ve(2,Oe$1.Wide);break;case`MMMMM`:n=Ve(2,Oe$1.Narrow);break;case`LLL`:n=Ve(2,Oe$1.Abbreviated,Ot$1.Standalone);break;case`LLLL`:n=Ve(2,Oe$1.Wide,Ot$1.Standalone);break;case`LLLLL`:n=Ve(2,Oe$1.Narrow,Ot$1.Standalone);break;case`w`:n=Og(1);break;case`ww`:n=Og(2);break;case`W`:n=Og(1,!0);break;case`d`:n=lt$1(2,1);break;case`dd`:n=lt$1(2,2);break;case`c`:case`cc`:n=lt$1(7,1);break;case`ccc`:n=Ve(1,Oe$1.Abbreviated,Ot$1.Standalone);break;case`cccc`:n=Ve(1,Oe$1.Wide,Ot$1.Standalone);break;case`ccccc`:n=Ve(1,Oe$1.Narrow,Ot$1.Standalone);break;case`cccccc`:n=Ve(1,Oe$1.Short,Ot$1.Standalone);break;case`E`:case`EE`:case`EEE`:n=Ve(1,Oe$1.Abbreviated);break;case`EEEE`:n=Ve(1,Oe$1.Wide);break;case`EEEEE`:n=Ve(1,Oe$1.Narrow);break;case`EEEEEE`:n=Ve(1,Oe$1.Short);break;case`a`:case`aa`:case`aaa`:n=Ve(0,Oe$1.Abbreviated);break;case`aaaa`:n=Ve(0,Oe$1.Wide);break;case`aaaaa`:n=Ve(0,Oe$1.Narrow);break;case`b`:case`bb`:case`bbb`:n=Ve(0,Oe$1.Abbreviated,Ot$1.Standalone,!0);break;case`bbbb`:n=Ve(0,Oe$1.Wide,Ot$1.Standalone,!0);break;case`bbbbb`:n=Ve(0,Oe$1.Narrow,Ot$1.Standalone,!0);break;case`B`:case`BB`:case`BBB`:n=Ve(0,Oe$1.Abbreviated,Ot$1.Format,!0);break;case`BBBB`:n=Ve(0,Oe$1.Wide,Ot$1.Format,!0);break;case`BBBBB`:n=Ve(0,Oe$1.Narrow,Ot$1.Format,!0);break;case`h`:n=lt$1(3,1,-12);break;case`hh`:n=lt$1(3,2,-12);break;case`H`:n=lt$1(3,1);break;case`HH`:n=lt$1(3,2);break;case`m`:n=lt$1(4,1);break;case`mm`:n=lt$1(4,2);break;case`s`:n=lt$1(5,1);break;case`ss`:n=lt$1(5,2);break;case`S`:n=lt$1(6,1);break;case`SS`:n=lt$1(6,2);break;case`SSS`:n=lt$1(6,3);break;case`Z`:case`ZZ`:case`ZZZ`:n=mu(0);break;case`ZZZZZ`:n=mu(3);break;case`O`:case`OO`:case`OOO`:case`z`:case`zz`:case`zzz`:n=mu(1);break;case`OOOO`:case`ZZZZ`:case`zzzz`:n=mu(2);break;default:return null}return Fg[t]=n,n}function dD(t,n){t=t.replace(/:/g,``);let e=Date.parse(`Jan 01, 1970 00:00:00 `+t)/6e4;return isNaN(e)?n:e}function _O(t,n){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+n),t}function yO(t,n,e){let r=t.getTimezoneOffset();return _O(t,-1*(dD(n,r)-r))}function wO(t){if(JC(t))return t;if(typeof t==`number`&&!isNaN(t))return new Date(t);if(typeof t==`string`){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[r,o=1,s=1]=t.split(`-`).map(a=>+a);return bu(r,o-1,s)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let i;if(i=t.match(lO))return SO(i)}let n=new Date(t);if(!JC(n))throw new w(2311,!1);return n}function SO(t){let n=new Date(0),e=0,i=0,r=t[8]?n.setUTCFullYear:n.setFullYear,o=t[8]?n.setUTCHours:n.setHours;t[9]&&(e=Number(t[9]+t[10]),i=Number(t[9]+t[11])),r.call(n,Number(t[1]),Number(t[2])-1,Number(t[3]));let s=Number(t[4]||0)-e,a=Number(t[5]||0)-i,c=Number(t[6]||0),l=Math.floor(parseFloat(`0.`+(t[7]||0))*1e3);return o.call(n,s,a,c,l),n}function JC(t){return t instanceof Date&&!isNaN(t.valueOf())}var Vg=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(ie$1);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector===`outlet`?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static ɵfac=function(i){return new(i||t)(A(pt))};static ɵdir=M({type:t,selectors:[[``,`ngTemplateOutlet`,``]],inputs:{ngTemplateOutletContext:`ngTemplateOutletContext`,ngTemplateOutlet:`ngTemplateOutlet`,ngTemplateOutletInjector:`ngTemplateOutletInjector`},features:[qe]})}return t})();function uD(t,n){return new w(2100,!1)}var Pg=class{createSubscription(n,e,i){return re(()=>n.subscribe({next:e,error:i}))}dispose(n){re(()=>n.unsubscribe())}};var Lg=class{createSubscription(n,e,i){return n.then(r=>e?.(r),r=>i?.(r)),{unsubscribe:()=>{e=null,i=null}}}dispose(n){n.unsubscribe()}};var CO=new Lg;var DO=new Pg;var Ja=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=u(qt$1);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,i=>this._updateLatestValue(e,i),i=>this.applicationErrorHandler(i))}_selectStrategy(e){if(pi(e))return CO;if(Wd(e))return DO;throw uD(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,i){e===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static ɵfac=function(i){return new(i||t)(A(Le,16))};static ɵpipe=Yd({name:`async`,type:t,pure:!1})}return t})();var EO=`mediumDate`;var fD=new m(``);var hD=new m(``);var ec=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,i,r){this.locale=e,this.defaultTimezone=i,this.defaultOptions=r}transform(e,i,r,o){if(e==null||e===``||e!==e)return null;try{let s=i??this.defaultOptions?.dateFormat??EO,a=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return cD(e,s,o||this.locale,a)}catch(s){throw uD(t,s.message)}}static ɵfac=function(i){return new(i||t)(A(Ga,16),A(fD,24),A(hD,24))};static ɵpipe=Yd({name:`date`,type:t,pure:!0})}return t})();var ur$1=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({})}return t})();function tc(t,n){n=encodeURIComponent(n);for(let e of t.split(`;`)){let i=e.indexOf(`=`),[r,o]=i==-1?[e,``]:[e.slice(0,i),e.slice(i+1)];if(r.trim()!==n)continue;let s=o;try{s=decodeURIComponent(o)}catch(a){}return s.length>1&&s[0]===`"`&&s[s.length-1]===`"`&&(s=s.slice(1,-1)),s}return null}var IO=(()=>{class t{build(){return new XMLHttpRequest}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var Bg=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵprov=E({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=C(IO),r},providedIn:`root`})}return t})();var Ug=`browser`;function pD(t){return t===Ug}var zg=(()=>{class t{static ɵprov=E({token:t,providedIn:`root`,factory:()=>new Hg(u(q),window)})}return t})();var Hg=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(G(g({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let i=NO(this.document,n);i&&(this.scrollToElement(i,e),i.focus({preventScroll:!0}))}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch(e){console.warn(en(2400,!1))}}scrollToElement(n,e){let i=n.getBoundingClientRect(),r=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(G(g({},e),{left:r-s[0],top:o-s[1]}))}};function NO(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker==`function`&&t.body&&typeof t.body.attachShadow==`function`){let i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let o=r.shadowRoot;if(o){let s=o.getElementById(n)||o.querySelector(`[name="${CSS.escape(n)}"]`);if(s)return s}r=i.nextNode()}}return null}var ic=class{_doc;constructor(n){this._doc=n}manager};var _u=(()=>{class t extends ic{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static ɵfac=function(i){return new(i||t)(C(q))};static ɵprov=E({token:t,factory:t.ɵfac})}return t})();var Su=new m(``);var qg=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof _u));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof _u);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new w(-5101,!1);return this._eventNameToPlugin.set(e,i),i}static ɵfac=function(i){return new(i||t)(C(Su),C(D))};static ɵprov=E({token:t,factory:t.ɵfac})}return t})();var $g=`ng-app-id`;function mD(t){for(let n of t)n.remove()}function gD(t,n){let e=n.createElement(`style`);return e.textContent=t,e}function TO(t,n,e,i){let r=t.head?.querySelectorAll(`style[${$g}="${n}"],link[${$g}="${n}"]`);if(!r||r.length===0)return!1;for(let o of r)o.removeAttribute($g),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf(`/`)+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]});return!0}function Wg(t,n){let e=n.createElement(`link`);return e.setAttribute(`rel`,`stylesheet`),e.setAttribute(`href`,t),e}var Yg=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,TO(e,i,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,gD);i?.forEach(r=>this.addUsage(r,this.external,Wg))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(mD(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])mD(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,gD(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Wg(i,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let i of[...this.inline.values(),...this.external.values()]){let r=[];for(let o of i.elements)o.parentNode===e?o.remove():r.push(o);i.elements=r}}addElement(e,i){return this.nonce&&i.setAttribute(`nonce`,this.nonce),e.appendChild(i)}static ɵfac=function(i){return new(i||t)(C(q),C(ki),C(ar,8),C(Xr))};static ɵprov=E({token:t,factory:t.ɵfac})}return t})();var Gg={svg:`http://www.w3.org/2000/svg`,xhtml:`http://www.w3.org/1999/xhtml`,xlink:`http://www.w3.org/1999/xlink`,xml:`http://www.w3.org/XML/1998/namespace`,xmlns:`http://www.w3.org/2000/xmlns/`,math:`http://www.w3.org/1998/Math/MathML`};var Zg=/%COMP%/g;var bD=`%COMP%`;var MO=`_nghost-${bD}`;var AO=`_ngcontent-${bD}`;var RO=!0;var kO=new m(``,{factory:()=>RO});var OO=new m(``);function FO(t){return AO.replace(Zg,t)}function PO(t){return MO.replace(Zg,t)}function _D(t,n){return n.map(e=>e.replace(Zg,t))}var Qg=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,i,r,o,s,a,c=null,l=null,d=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=l,this.cssVarNamespace=d??``,this.defaultRenderer=new rc(e,s,a,this.tracingService,this.cssVarNamespace)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof wu?r.applyToHost(e):r instanceof oc&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(i.encapsulation){case Un$1.Emulated:o=new wu(c,l,i,this.appId,d,s,a,f,this.cssVarNamespace);break;case Un$1.ShadowDom:return new yu(c,e,i,s,a,this.nonce,f,this.cssVarNamespace,l);case Un$1.ExperimentalIsolatedShadowDom:return new yu(c,e,i,s,a,this.nonce,f,this.cssVarNamespace);default:o=new oc(c,l,i,d,s,a,f,this.cssVarNamespace);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static ɵfac=function(i){return new(i||t)(C(qg),C(ao),C(ki),C(kO),C(q),C(D),C(ar),C(zn$1,8),C(OO,8))};static ɵprov=E({token:t,factory:t.ɵfac})}return t})();var rc=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r,o=``){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r,this.cssVarNamespace=o}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Gg[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(vD(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){if(n){let r=vD(n)?n.content:n;if(i!=null&&i.parentNode!==r)throw new w(-5106,!1);r.insertBefore(e,i)}}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n==`string`?this.doc.querySelector(n):n;if(!i)throw new w(-5104,!1);return e||(i.textContent=``),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+`:`+e;let o=Gg[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=Gg[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){let o=e.startsWith(`--`);o&&(e=e.replace(`%NS%`,this.cssVarNamespace)),o||r&(ui.DashCase|ui.Important)?n.style.setProperty(e,i,r&ui.Important?`important`:``):n.style[e]=i}removeStyle(n,e,i){let r=e.startsWith(`--`);r&&(e=e.replace(`%NS%`,this.cssVarNamespace)),r||i&ui.DashCase?n.style.removeProperty(e):n.style[e]=``}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n==`string`&&(n=cn$1().getGlobalEventTarget(this.doc,n),!n))throw new w(-5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e===`__ngUnwrap__`)return n;n(e)===!1&&e.preventDefault()}}};function vD(t){return t.tagName===`TEMPLATE`&&t.content!==void 0}var yu=class extends rc{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,s,a,c,l){super(n,r,o,a,c),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:`open`}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=i.styles;d=_D(i.id,d).map(h=>h.replace(/%NS%/g,c));for(let h of d){let p=document.createElement(`style`);s&&p.setAttribute(`nonce`,s),p.textContent=h,this.shadowRoot.appendChild(p)}let f=i.getExternalStyles?.();if(f)for(let h of f){let p=Wg(h,r);s&&p.setAttribute(`nonce`,s),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}};var oc=class extends rc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,s,a,c,l){super(n,o,s,a,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=i.styles,f=l?_D(l,d):d;this.styles=f.map(h=>h.replace(/%NS%/g,c)),this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&lr$1.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}};var wu=class extends oc{contentAttr;hostAttr;constructor(n,e,i,r,o,s,a,c,l){let d=r+`-`+i.id;super(n,e,i,o,s,a,c,l,d),this.contentAttr=FO(d),this.hostAttr=PO(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,``)}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,``),i}};var Cu=class t extends Ya{supportsDOMEvents=!0;static makeCurrent(){Ag(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument(`fakeTitle`)}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e===`window`?window:e===`document`?n:e===`body`?n.body:null}getBaseHref(n){let e=LO();return e==null?null:jO(e)}resetBaseElement(){sc=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return tc(document.cookie,n)}};var sc=null;function LO(){return sc=sc||document.head.querySelector(`base`),sc?sc.getAttribute(`href`):null}function jO(t){return new URL(t,document.baseURI).pathname}var Du=class{addToWindow(n){tt$1.getAngularTestability=(i,r=!0)=>{let o=n.findTestabilityInTree(i,r);if(o==null)throw new w(5103,!1);return o},tt$1.getAllAngularTestabilities=()=>n.getAllTestabilities(),tt$1.getAllAngularRootElements=()=>n.getAllRootElements();let e=i=>{let r=tt$1.getAllAngularTestabilities(),o=r.length,s=function(){o--,o==0&&i()};r.forEach(a=>{a.whenStable(s)})};tt$1.frameworkStabilizers||(tt$1.frameworkStabilizers=[]),tt$1.frameworkStabilizers.push(e)}findTestabilityInTree(n,e,i){if(e==null)return null;return n.getTestability(e)??(i?cn$1().isShadowRoot(e)?this.findTestabilityInTree(n,e.host,!0):this.findTestabilityInTree(n,e.parentElement,!0):null)}};var yD=[`alt`,`control`,`meta`,`shift`];var VO={"\b":`Backspace`,"	":`Tab`,"":`Delete`,"\x1B":`Escape`,Del:`Delete`,Esc:`Escape`,Left:`ArrowLeft`,Right:`ArrowRight`,Up:`ArrowUp`,Down:`ArrowDown`,Menu:`ContextMenu`,Scroll:`ScrollLock`,Win:`OS`};var BO={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};var wD=(()=>{class t extends ic{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let s=t.parseEventName(i),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>cn$1().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let i=e.toLowerCase().split(`.`),r=i.shift();if(i.length===0||!(r===`keydown`||r===`keyup`))return null;let o=t._normalizeKey(i.pop()),s=``,a=i.indexOf(`code`);if(a>-1&&(i.splice(a,1),s=`code.`),yD.forEach(l=>{let d=i.indexOf(l);d>-1&&(i.splice(d,1),s+=l+`.`)}),s+=o,i.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=s,c}static matchEventFullKeyCode(e,i){let r=VO[e.key]||e.key,o=``;return i.indexOf(`code.`)>-1&&(r=e.code,o=`code.`),r==null||!r?!1:(r=r.toLowerCase(),r===` `?r=`space`:r===`.`&&(r=`dot`),yD.forEach(s=>{if(s!==r){let a=BO[s];a(e)&&(o+=s+`.`)}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e===`esc`?`escape`:e}static ɵfac=function(i){return new(i||t)(C(q))};static ɵprov=E({token:t,factory:t.ɵfac})}return t})();function HO(){Cu.makeCurrent()}function UO(){return new Mt$1}function zO(){return Am(document),document}var GO=xg(YC,`browser`,[{provide:Xr,useValue:Ug},{provide:od,useValue:HO,multi:!0},{provide:q,useFactory:zO}]);var WO=[{provide:ss$1,useClass:Du},{provide:Jd,useClass:ja,deps:[D,Va,ss$1]},{provide:ja,useClass:ja,deps:[D,Va,ss$1]}];var qO=[{provide:ua,useValue:`root`},{provide:Mt$1,useFactory:UO},{provide:Su,useClass:_u,multi:!0},{provide:Su,useClass:wD,multi:!0},Qg,{provide:ao,useClass:Yg},{provide:Yg,useExisting:ao},qg,{provide:st$1,useExisting:Qg},[]];var YO=(()=>{class t{constructor(){}static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({providers:[...qO,...WO],imports:[ur$1,zC]})}return t})();var _i=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n==`string`?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(`:`);if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<`u`&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:`a`})}set(n,e){return this.clone({name:n,value:e,op:`s`})}delete(n,e){return this.clone({name:n,value:e,op:`d`})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init();for(let[e,i]of n.headers.entries())this.headers.set(e,i),this.normalizedNames.set(e,n.normalizedNames.get(e))}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case`a`:case`s`:let i=n.value;if(typeof i==`string`&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=n.op===`a`?(this.headers.get(e)||[]).slice():[];r.push(...i),this.headers.set(e,r);break;case`d`:let o=n.value;if(o===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=Array.isArray(o)?o:[o],a=this.headers.get(e);if(!a)return;a=a.filter(c=>s.indexOf(c)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var Iu=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};var xu=class{encodeKey(n){return SD(n)}encodeValue(n){return SD(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function ZO(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,``).split(`&`).forEach(r=>{let o=r.indexOf(`=`),[s,a]=o==-1?[n.decodeKey(r),``]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],c=e.get(s)||[];c.push(a),e.set(s,c)}),e}var QO=/%(\d[a-f0-9])/gi;var KO={40:`@`,"3A":`:`,24:`$`,"2C":`,`,"3B":`;`,"3D":`=`,"3F":`?`,"2F":`/`};function SD(t){return encodeURIComponent(t).replace(QO,(n,e)=>KO[e]??n)}function Eu(t){return`${t}`}var ln$1=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new xu,n.fromString){if(n.fromObject)throw new w(2805,!1);this.map=ZO(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(Eu):[Eu(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:`a`})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:`a`})}):e.push({param:i,value:r,op:`a`})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:`s`})}delete(n,e){return this.clone({param:n,value:e,op:`d`})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+`=`+this.encoder.encodeValue(i)).join(`&`)}).filter(n=>n!==``).join(`&`)}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[n,e]of this.cloneFrom.map.entries())this.map.set(n,e);this.updates.forEach(n=>{switch(n.op){case`a`:case`s`:let e=n.op===`a`?(this.map.get(n.param)||[]).slice():[];e.push(Eu(n.value)),this.map.set(n.param,e);break;case`d`:if(n.value!==void 0){let i=(this.map.get(n.param)||[]).slice(),r=i.indexOf(Eu(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null}}};function XO(t){switch(t){case`DELETE`:case`GET`:case`HEAD`:case`OPTIONS`:case`JSONP`:return!1;default:return!0}}function CD(t){return typeof ArrayBuffer<`u`&&t instanceof ArrayBuffer}function DD(t){return typeof Blob<`u`&&t instanceof Blob}function ED(t){return typeof FormData<`u`&&t instanceof FormData}function JO(t){return typeof URLSearchParams<`u`&&t instanceof URLSearchParams}var ac=`Content-Type`;var Nu=`Accept`;var TD=`text/plain`;var MD=`application/json`;var AD=`${MD}, ${TD}, */*`;var as$1=class t{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType=`json`;method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(XO(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.reportUploadProgress=!!o.reportUploadProgress,this.reportDownloadProgress=!!o.reportDownloadProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout==`number`){if(o.timeout<1||!Number.isInteger(o.timeout))throw new w(2822,``);this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer!==void 0&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new _i,this.context??=new Iu,!this.params)this.params=new ln$1,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e,c=``,l=e.indexOf(`#`);l!==-1&&(c=e.substring(l),a=e.substring(0,l));let d=a.indexOf(`?`),f=d===-1?`?`:d<a.length-1?`&`:``;this.urlWithParams=a+f+s+c}}}serializeBody(){return this.body===null?null:typeof this.body==`string`||CD(this.body)||DD(this.body)||ED(this.body)||JO(this.body)?this.body:this.body instanceof ln$1?this.body.toString():typeof this.body==`object`||typeof this.body==`boolean`||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ED(this.body)?null:DD(this.body)?this.body.type||null:CD(this.body)?null:typeof this.body==`string`?TD:this.body instanceof ln$1?`application/x-www-form-urlencoded;charset=UTF-8`:typeof this.body==`object`||typeof this.body==`number`||typeof this.body==`boolean`?MD:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,c=n.mode||this.mode,l=n.redirect||this.redirect,d=n.credentials||this.credentials,f=n.referrer??this.referrer,h=n.integrity||this.integrity,p=n.referrerPolicy||this.referrerPolicy,v=n.transferCache??this.transferCache,S=n.timeout??this.timeout,P=n.body!==void 0?n.body:this.body,$=n.withCredentials??this.withCredentials,J=n.reportProgress??this.reportProgress,ce=n.reportUploadProgress??this.reportUploadProgress,zt=n.reportDownloadProgress??this.reportDownloadProgress,An=n.headers||this.headers,et=n.params||this.params,Ci=n.context??this.context;return n.setHeaders!==void 0&&(An=Object.keys(n.setHeaders).reduce((Gi,Kn)=>Gi.set(Kn,n.setHeaders[Kn]),An)),n.setParams&&(et=Object.keys(n.setParams).reduce((Gi,Kn)=>Gi.set(Kn,n.setParams[Kn]),et)),new t(e,i,P,{params:et,headers:An,context:Ci,reportProgress:J,reportUploadProgress:ce,reportDownloadProgress:zt,responseType:r,withCredentials:$,transferCache:v,keepalive:o,cache:a,priority:s,timeout:S,mode:c,redirect:l,credentials:d,referrer:f,integrity:h,referrerPolicy:p})}};var bi=(function(t){return t[t.Sent=0]=`Sent`,t[t.UploadProgress=1]=`UploadProgress`,t[t.ResponseHeader=2]=`ResponseHeader`,t[t.DownloadProgress=3]=`DownloadProgress`,t[t.Response=4]=`Response`,t[t.User=5]=`User`,t})(bi||{});var cs=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i=`OK`){this.headers=n.headers||new _i,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}};var cc=class t extends cs{constructor(n={}){super(n)}type=bi.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}};var ls$1=class t extends cs{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=bi.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}};var vi=class extends cs{name=`HttpErrorResponse`;message;error;ok=!1;constructor(n){super(n,0,`Unknown Error`),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||`(unknown url)`}`:this.message=`Http failure response for ${n.url||`(unknown url)`}: ${n.status} ${n.statusText}`,this.error=n.error||null}};var RD=200;var eF=204;var tF=/^\)\]\}',?\n/;var kD=new m(``,{factory:()=>null});var Tu=(()=>{class t{fetchImpl=u(Xg,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=u(D);destroyRef=u(Be);maxResponseSize=u(kD);handle(e){return new X(i=>{let r=new AbortController,o=!1,s={next:c=>{c.type===bi.Response&&(o=!0),i.next(c)},error:c=>{o=!0,i.error(c)},complete:()=>{o=!0,i.complete()}};this.doRequest(e,r.signal,s).then(Jg,c=>s.error(new vi({error:c})));let a;return e.timeout&&(a=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException(`signal timed out`,`TimeoutError`))},e.timeout))),()=>{a!==void 0&&clearTimeout(a),!o&&!r.signal.aborted&&r.abort()}})}doRequest(e,i,r){return we$1(this,null,function*(){let o=this.createRequestInit(e),s;try{let P=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,g({signal:i},o)));nF(P),r.next({type:bi.Sent}),s=yield P}catch(P){r.error(new vi({error:P,status:P.status??0,statusText:P.statusText,url:e.urlWithParams,headers:P.headers}));return}let a=new _i(s.headers),c=s.statusText,l=s.url||e.urlWithParams,d=s.status,f=null,h=e.reportProgress||e.reportDownloadProgress;if(h&&r.next(new cc({headers:a,status:d,statusText:c,url:l})),s.body){let P=s.headers.get(ac)??``,$=s.headers.get(`content-length`),J=$!==null?Number($):NaN;this.maxResponseSize!==null&&Number.isFinite(J)&&J>this.maxResponseSize&&(yield s.body.cancel(),ID(this.maxResponseSize));let ce=[],zt=s.body.getReader(),An=0,et,Ci,Gi=typeof Zone<`u`&&Zone.current,Kn=!1;if(yield this.ngZone.runOutsideAngular(()=>we$1(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield zt.cancel(),Kn=!0;break}let{done:hh,value:ph}=yield zt.read();if(hh)break;if(ce.push(ph),An+=ph.length,this.maxResponseSize!==null&&An>this.maxResponseSize&&(yield zt.cancel(),ID(this.maxResponseSize)),h){Ci=e.responseType===`text`?(Ci??``)+(et??=xD(P)).decode(ph,{stream:!0}):void 0;let i_=()=>r.next({type:bi.DownloadProgress,total:Number.isFinite(J)?J:void 0,loaded:An,partialText:Ci});Gi?Gi.run(i_):i_()}}})),Kn){r.complete();return}let Rx=this.concatChunks(ce,An);try{f=this.parseBody(e,Rx,P,d)}catch(hh){r.error(new vi({error:hh,headers:new _i(s.headers),status:s.status,statusText:s.statusText,url:s.url||e.urlWithParams}));return}}d===0&&(d=f?RD:0);let p=d>=200&&d<300,v=s.redirected,S=s.type;p?(r.next(new ls$1({body:f,headers:a,status:d,statusText:c,url:l,redirected:v,responseType:S})),r.complete()):r.error(new vi({error:f,headers:a,status:d,statusText:c,url:l,redirected:v,responseType:S}))})}parseBody(e,i,r,o){switch(e.responseType){case`json`:let s=new TextDecoder().decode(i).replace(tF,``);if(s===``)return null;try{return JSON.parse(s)}catch(a){if(o<200||o>=300)return s;throw a}case`text`:return xD(r).decode(i);case`blob`:return new Blob([i],{type:r});case`arraybuffer`:return i.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new w(2824,!1);let i={},r;if(r=e.credentials,e.withCredentials&&(r=`include`),e.headers.forEach((o,s)=>i[o]=s.join(`,`)),e.headers.has(Nu)||(i[Nu]=AD),!e.headers.has(ac)){let o=e.detectContentTypeHeader();o!==null&&(i[ac]=o)}return{body:e.serializeBody(),method:e.method,headers:i,credentials:r,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,i){let r=new Uint8Array(i),o=0;for(let s of e)r.set(s,o),o+=s.length;return r}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var Xg=class{};function Jg(){}function nF(t){t.then(Jg,Jg)}function ID(t){throw new w(-2825,!1)}var iF=/charset=\s*["']?([^;"'\s]+)["']?/i;function xD(t){let n=t.match(iF);if(n!==null)try{return new TextDecoder(n[1])}catch(e){}return new TextDecoder}var rF=new m(``,{factory:()=>!0});var oF=`XSRF-TOKEN`;var sF=new m(``,{factory:()=>oF});var aF=`X-XSRF-TOKEN`;var cF=new m(``,{factory:()=>aF});var lF=(()=>{class t{cookieName=u(sF);doc=u(q);lastCookieString=``;lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||``;return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=tc(e,this.cookieName),this.lastCookieString=e),this.lastToken}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var OD=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵprov=E({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=C(lF),r},providedIn:`root`})}return t})();function FD(t,n){if(!u(rF)||t.method===`GET`||t.method===`HEAD`)return n(t);try{let r=u(ji).href,{origin:o}=new URL(r),{origin:s}=new URL(t.url,o);if(o!==s)return n(t)}catch(r){return n(t)}let e=u(OD).getToken(),i=u(cF);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}function PD(t,n){return n(t)}function dF(t,n){return(e,i)=>n.intercept(e,{handle:r=>t(r,i)})}function uF(t,n,e){return(i,r)=>nt$1(e,()=>n(i,o=>t(o,r)))}var Au=new m(``);var tv=new m(``,{factory:()=>[FD]});var LD=new m(``);var nv=new m(``,{factory:()=>!0});function fF(){let t=null;return(n,e)=>{t===null&&(t=(u(Au,{optional:!0})??[]).reduceRight(dF,PD));let i=u(Jr);if(u(nv)){let o=i.add();return t(n,e).pipe(Xi(o))}else return t(n,e)}}var Ru=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵprov=E({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=C(Tu),r},providedIn:`root`})}return t})();var Mu=(()=>{class t{backend;injector;chain=null;pendingTasks=u(Jr);contributeToStability=u(nv);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let r=this.injector.get(ku,null,{skipSelf:!0}),o=r!==null&&this.backend===r,s=this.injector.get(LD,[],o?{self:!0}:void 0),a=Array.from(new Set([...this.injector.get(tv),...s]));this.chain=a.reduceRight((c,l)=>uF(c,l,this.injector),PD)}let i=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return re(()=>i(e,o=>this.backend.handle(o))).pipe(Xi(r))}else return re(()=>i(e,r=>this.backend.handle(r)))}static ɵfac=function(i){return new(i||t)(C(Ru),C(Te$1))};static ɵprov=E({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var ku=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵprov=E({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=C(Mu),r},providedIn:`root`})}return t})();function Kg(t,n){return g({body:n},t)}var fr$1=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof as$1)o=e;else{let c;r.headers instanceof _i?c=r.headers:c=new _i(r.headers);let l;r.params&&(r.params instanceof ln$1?l=r.params:l=new ln$1({fromObject:r.params})),o=new as$1(e,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||`json`,withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=R(o).pipe(hn$1(c=>this.handler.handle(c)));if(e instanceof as$1||r.observe===`events`)return s;let a=s.pipe(De$1(c=>c instanceof ls$1));switch(r.observe||`body`){case`body`:switch(o.responseType){case`arraybuffer`:return a.pipe(L(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new w(2806,!1);return c.body}));case`blob`:return a.pipe(L(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new w(2807,!1);return c.body}));case`text`:return a.pipe(L(c=>{if(c.body!==null&&typeof c.body!=`string`)throw new w(2808,!1);return c.body}));default:return a.pipe(L(c=>c.body))}case`response`:return a;default:throw new w(2809,!1)}}delete(e,i={}){return this.request(`DELETE`,e,i)}get(e,i={}){return this.request(`GET`,e,i)}head(e,i={}){return this.request(`HEAD`,e,i)}jsonp(e,i){return this.request(`JSONP`,e,{params:new ln$1().append(i,`JSONP_CALLBACK`),observe:`body`,responseType:`json`})}options(e,i={}){return this.request(`OPTIONS`,e,i)}patch(e,i,r={}){return this.request(`PATCH`,e,Kg(r,i))}post(e,i,r={}){return this.request(`POST`,e,Kg(r,i))}put(e,i,r={}){return this.request(`PUT`,e,Kg(r,i))}static ɵfac=function(i){return new(i||t)(C(ku))};static ɵprov=E({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var hF=/^\)\]\}',?\n/;var ev=(()=>{class t{xhrFactory;tracingService=u(zn$1,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method===`JSONP`)throw new w(-2800,!1);let i=this.xhrFactory;return R(null).pipe(Ze$1(()=>new X(o=>{let s=i.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((J,ce)=>s.setRequestHeader(J,ce.join(`,`))),e.headers.has(Nu)||s.setRequestHeader(Nu,AD),!e.headers.has(ac)){let J=e.detectContentTypeHeader();J!==null&&s.setRequestHeader(ac,J)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let J=e.responseType.toLowerCase();s.responseType=J!==`json`?J:`text`}let a=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let J=s.statusText||`OK`,ce=new _i(s.getAllResponseHeaders()),zt=s.responseURL||e.url;return c=new cc({headers:ce,status:s.status,statusText:J,url:zt}),c},d=this.maybePropagateTrace(()=>{let{headers:J,status:ce,statusText:zt,url:An}=l(),et=null;ce!==eF&&(et=typeof s.response>`u`?s.responseText:s.response),ce===0&&(ce=et?RD:0);let Ci=ce>=200&&ce<300;if(e.responseType===`json`&&typeof et==`string`){let Gi=et;et=et.replace(hF,``);try{et=et!==``?JSON.parse(et):null}catch(Kn){et=Gi,Ci&&(Ci=!1,et={error:Kn,text:et})}}Ci?(o.next(new ls$1({body:et,headers:J,status:ce,statusText:zt,url:An||void 0})),o.complete()):o.error(new vi({error:et,headers:J,status:ce,statusText:zt,url:An||void 0}))}),f=this.maybePropagateTrace(J=>{let{url:ce}=l(),zt=new vi({error:J,status:s.status||0,statusText:s.statusText||`Unknown Error`,url:ce||void 0});o.error(zt)}),h=f;e.timeout&&(h=this.maybePropagateTrace(J=>{let{url:ce}=l(),zt=new vi({error:new DOMException(`Request timed out`,`TimeoutError`),status:s.status||0,statusText:s.statusText||`Request timeout`,url:ce||void 0});o.error(zt)}));let p=!1,v=this.maybePropagateTrace(J=>{p||(o.next(l()),p=!0);let ce={type:bi.DownloadProgress,loaded:J.loaded};J.lengthComputable&&(ce.total=J.total),e.responseType===`text`&&s.responseText&&(ce.partialText=s.responseText),o.next(ce)}),S=this.maybePropagateTrace(J=>{let ce={type:bi.UploadProgress,loaded:J.loaded};J.lengthComputable&&(ce.total=J.total),o.next(ce)});s.addEventListener(`load`,d),s.addEventListener(`error`,f),s.addEventListener(`timeout`,h),s.addEventListener(`abort`,f);let P=e.reportProgress||e.reportUploadProgress,$=e.reportProgress||e.reportDownloadProgress;return $&&s.addEventListener(`progress`,v),P&&a!==null&&s.upload&&s.upload.addEventListener(`progress`,S),s.send(a),o.next({type:bi.Sent}),()=>{s.removeEventListener(`error`,f),s.removeEventListener(`abort`,f),s.removeEventListener(`load`,d),s.removeEventListener(`timeout`,h),$&&s.removeEventListener(`progress`,v),P&&a!==null&&s.upload&&s.upload.removeEventListener(`progress`,S),s.readyState!==s.DONE&&s.abort()}})))}static ɵfac=function(i){return new(i||t)(C(Bg))};static ɵprov=E({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var Ou=(function(t){return t[t.Interceptors=0]=`Interceptors`,t[t.LegacyInterceptors=1]=`LegacyInterceptors`,t[t.CustomXsrfConfiguration=2]=`CustomXsrfConfiguration`,t[t.NoXsrfProtection=3]=`NoXsrfProtection`,t[t.JsonpSupport=4]=`JsonpSupport`,t[t.RequestsMadeViaParent=5]=`RequestsMadeViaParent`,t[t.Fetch=6]=`Fetch`,t[t.Xhr=7]=`Xhr`,t})(Ou||{});function jD(t,n){return{ɵkind:t,ɵproviders:n}}function iv(...t){let n=[fr$1,Tu,Mu,{provide:ku,useExisting:Mu},{provide:Ru,useFactory:()=>u(Tu)},{provide:tv,useValue:FD,multi:!0}];for(let e of t)n.push(...e.ɵproviders);return ii(n)}var ND=new m(``);function rv(){return jD(Ou.LegacyInterceptors,[{provide:ND,useFactory:fF},{provide:tv,useExisting:ND,multi:!0}])}function ov(){return jD(Ou.Xhr,[ev,{provide:Ru,useExisting:ev}])}var VD=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||``}static ɵfac=function(i){return new(i||t)(C(q))};static ɵprov=E({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var av=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵprov=E({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=C(pF),r},providedIn:`root`})}return t})();var pF=(()=>{class t extends av{_doc=u(q);sanitize(e,i){if(i==null)return null;switch(e){case Ce.NONE:return i;case Ce.HTML:return hi(i,`HTML`)?Zt$1(i):Ld(this._doc,String(i)).toString();case Ce.STYLE:return hi(i,`Style`)?Zt$1(i):i;case Ce.SCRIPT:if(hi(i,`Script`))return Zt$1(i);throw new w(5200,!1);case Ce.URL:return hi(i,`URL`)?Zt$1(i):Aa(String(i));case Ce.RESOURCE_URL:if(hi(i,`ResourceURL`))return Zt$1(i);throw new w(-5201,!1);default:throw new w(5202,!1)}}bypassSecurityTrustHtml(e){return Fm(e)}bypassSecurityTrustStyle(e){return Pm(e)}bypassSecurityTrustScript(e){return Lm(e)}bypassSecurityTrustUrl(e){return jm(e)}bypassSecurityTrustResourceUrl(e){return Vm(e)}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var lc={production:!0,api_url:`https://node-express-conduit.appspot.com/api`};var qD=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty(`disabled`,e)}static ɵfac=function(i){return new(i||t)(A(Se),A(O))};static ɵdir=M({type:t})}return t})();var mF=(()=>{class t extends qD{static ɵfac=(()=>{let e;return function(r){return(e||(e=ht(t)))(r||t)}})();static ɵdir=M({type:t,features:[_e]})}return t})();var fo=new m(``);var gF={provide:fo,useExisting:At$1(()=>YD),multi:!0};function vF(){let t=cn$1()?cn$1().getUserAgent():``;return/android (\d+)/.test(t.toLowerCase())}var bF=new m(``);var YD=(()=>{class t extends qD{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode??=!vF()}writeValue(e){let i=e??``;this.setProperty(`value`,i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static ɵfac=function(i){return new(i||t)(A(Se),A(O),A(bF,8))};static ɵdir=M({type:t,selectors:[[`input`,`formControlName`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControlName`,``,3,`ngNoCva`,``],[`input`,`formControl`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`formControl`,``,3,`ngNoCva`,``],[`input`,`ngModel`,``,3,`type`,`checkbox`,3,`ngNoCva`,``],[`textarea`,`ngModel`,``,3,`ngNoCva`,``],[``,`ngDefaultControl`,``]],hostBindings:function(i,r){i&1&&B$1(`input`,function(s){return r._handleInput(s.target.value)})(`blur`,function(){return r.onTouched()})(`compositionstart`,function(){return r._compositionStart()})(`compositionend`,function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[je([gF]),_e]})}return t})();function fv(t){return t==null||hv(t)===0}function hv(t){return t==null?null:Array.isArray(t)||typeof t==`string`?t.length:t instanceof Set?t.size:null}var ho=new m(``);var Gu=new m(``);var _F=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;var fs$1=class{static min(n){return yF(n)}static max(n){return wF(n)}static required(n){return ZD(n)}static requiredTrue(n){return SF(n)}static email(n){return CF(n)}static minLength(n){return DF(n)}static maxLength(n){return EF(n)}static pattern(n){return IF(n)}static nullValidator(n){return Pu()}static compose(n){return t0(n)}static composeAsync(n){return n0(n)}};function yF(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function wF(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function ZD(t){return fv(t.value)?{required:!0}:null}function SF(t){return t.value===!0?null:{required:!0}}function CF(t){return fv(t.value)||_F.test(t.value)?null:{email:!0}}function DF(t){return n=>{let e=n.value?.length??hv(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function EF(t){return n=>{let e=n.value?.length??hv(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function IF(t){if(!t)return Pu;let n,e;return typeof t==`string`?(e=``,t.charAt(0)!==`^`&&(e+=`^`),e+=t,t.charAt(t.length-1)!==`$`&&(e+=`$`),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(fv(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Pu(t){return null}function QD(t){return t!=null}function KD(t){return pi(t)?Ae$1(t):t}function XD(t){let n={};return t.forEach(e=>{n=e!=null?g(g({},n),e):n}),Object.keys(n).length===0?null:n}function JD(t,n){return n.map(e=>e(t))}function xF(t){return!t.validate}function e0(t){return t.map(n=>xF(n)?n:e=>n.validate(e))}function t0(t){if(!t)return null;let n=t.filter(QD);return n.length==0?null:function(e){return XD(JD(e,n))}}function pv(t){return t!=null?t0(e0(t)):null}function n0(t){if(!t)return null;let n=t.filter(QD);return n.length==0?null:function(e){return Qs$1(JD(e,n).map(KD)).pipe(L(XD))}}function mv(t){return t!=null?n0(e0(t)):null}function HD(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function i0(t){return t._rawValidators}function r0(t){return t._rawAsyncValidators}function cv(t){return t?Array.isArray(t)?t:[t]:[]}function Lu(t,n){return Array.isArray(t)?t.includes(n):t===n}function UD(t,n){let e=cv(n);return cv(t).forEach(r=>{Lu(e,r)||e.push(r)}),e}function zD(t,n){return cv(n).filter(e=>!Lu(t,e))}var ju=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=pv(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=mv(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}};var hr$1=class extends ju{name;get formDirective(){return null}get path(){return null}};var dc=`VALID`;var Fu=`INVALID`;var ds$1=`PENDING`;var uc=`DISABLED`;var pr$1=class{};var Vu=class extends pr$1{value;source;constructor(n,e){super(),this.value=n,this.source=e}};var hc=class extends pr$1{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}};var pc=class extends pr$1{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}};var us$1=class extends pr$1{status;source;constructor(n,e){super(),this.status=n,this.source=e}};var Bu=class extends pr$1{source;constructor(n){super(),this.source=n}};var uo=class extends pr$1{source;constructor(n){super(),this.source=n}};function gv(t){return(Wu(t)?t.validators:t)||null}function NF(t){return Array.isArray(t)?pv(t):t||null}function vv(t,n){return(Wu(n)?n.asyncValidators:t)||null}function TF(t){return Array.isArray(t)?mv(t):t||null}function Wu(t){return t!=null&&!Array.isArray(t)&&typeof t==`object`}function o0(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new w(1e3,``);if(!a0(i,e))throw new w(1001,``)}function s0(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new w(-1002,``)})}var hs$1=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=ne$1(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return re(this.statusReactive)}set status(n){re(()=>this.statusReactive.set(n))}_status=Xe$1(()=>this.statusReactive());statusReactive=ne$1(void 0);get valid(){return this.status===dc}get invalid(){return this.status===Fu}get pending(){return this.status===ds$1}get disabled(){return this.status===uc}get enabled(){return this.status!==uc}errors;get pristine(){return re(this.pristineReactive)}set pristine(n){re(()=>this.pristineReactive.set(n))}_pristine=Xe$1(()=>this.pristineReactive());pristineReactive=ne$1(!0);get dirty(){return!this.pristine}get touched(){return re(this.touchedReactive)}set touched(n){re(()=>this.touchedReactive.set(n))}_touched=Xe$1(()=>this.touchedReactive());touchedReactive=ne$1(!1);get untouched(){return!this.touched}_events=new I;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:`change`}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(UD(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(UD(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(zD(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(zD(n,this._rawAsyncValidators))}hasValidator(n){return Lu(this._rawValidators,n)}hasAsyncValidator(n){return Lu(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(G(g({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new pc(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new pc(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(G(g({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new hc(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new hc(!0,i))}markAsPending(n={}){this.status=ds$1;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new us$1(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(G(g({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=uc,this.errors=null,this._forEachChild(r=>{r.disable(G(g({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Vu(this.value,i)),this._events.next(new us$1(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(G(g({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=dc,this._forEachChild(i=>{i.enable(G(g({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(G(g({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===dc||this.status===ds$1)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Vu(this.value,e)),this._events.next(new us$1(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(G(g({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?uc:dc}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=ds$1,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=KD(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(`.`)),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new us$1(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new W$1,this.statusChanges=new W$1}_calculateStatus(){return this._allControlsDisabled()?uc:this.errors?Fu:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ds$1)?ds$1:this._anyControlsHaveStatus(Fu)?Fu:dc}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new hc(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new pc(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Wu(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=NF(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=TF(this._rawAsyncValidators)}_updateHasRequiredValidator(){re(()=>this._hasRequired.set(this.hasValidator(fs$1.required)))}};function a0(t,n){return Object.hasOwn(t,n)}function MF(t){return t.tagName===`INPUT`||t.tagName===`SELECT`||t.tagName===`TEXTAREA`}function AF(t,n,e,i){switch(e){case`name`:t.setAttribute(n,e,i);break;case`disabled`:case`readonly`:case`required`:i?t.setAttribute(n,e,``):t.removeAttribute(n,e);break;case`max`:case`min`:case`minLength`:case`maxLength`:i!==void 0?t.setAttribute(n,e,i.toString()):t.removeAttribute(n,e);break}}var lv=class{kind;context;control;message;constructor({kind:n,context:e,control:i}){this.kind=n,this.context=e,this.control=i}};var RF=(()=>{class t{_validator=Pu;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let i=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):Pu,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,features:[qe]})}return t})();var kF={provide:ho,useExisting:At$1(()=>c0),multi:!0};var c0=(()=>{class t extends RF{required;inputName=`required`;normalizeInput=F;createValidator=e=>ZD;enabled(e){return e}static ɵfac=(()=>{let e;return function(r){return(e||(e=ht(t)))(r||t)}})();static ɵdir=M({type:t,selectors:[[``,`required`,``,`formControlName`,``,3,`type`,`checkbox`],[``,`required`,``,`formControl`,``,3,`type`,`checkbox`],[``,`required`,``,`ngModel`,``,3,`type`,`checkbox`]],hostVars:1,hostBindings:function(i,r){i&2&&oe(`required`,r._enabled?``:null)},inputs:{required:`required`},standalone:!1,features:[je([kF]),_e]})}return t})();var OF=new m(``);var gc=new m(``,{factory:()=>qu});var qu=`always`;function FF(t,n){return[...n.path,t]}function l0(t,n,e=qu){bv(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e===`always`)&&n.valueAccessor.setDisabledState?.(t.disabled),LF(t,n),VF(t,n),jF(t,n),PF(t,n)}function Hu(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),zu(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Uu(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function PF(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function bv(t,n){let e=i0(t);n.validator!==null?t.setValidators(HD(e,n.validator)):typeof e==`function`&&t.setValidators([e]);let i=r0(t);n.asyncValidator!==null?t.setAsyncValidators(HD(i,n.asyncValidator)):typeof i==`function`&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Uu(n._rawValidators,r),Uu(n._rawAsyncValidators,r)}function zu(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=i0(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=r0(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Uu(n._rawValidators,i),Uu(n._rawAsyncValidators,i),e}function LF(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn===`change`&&d0(t,n)})}function jF(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn===`blur`&&t._pendingChange&&d0(t,n),t.updateOn!==`submit`&&t.markAsTouched()})}function d0(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function VF(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function u0(t,n){bv(t,n)}function BF(t,n){return zu(t,n)}function f0(t,n){if(!Object.hasOwn(t,`model`))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function HF(t){return Object.getPrototypeOf(t.constructor)===mF}function h0(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn===`submit`&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function UF(t,n){if(!n)return null;let e,i,r;return n.forEach(o=>{o.constructor===YD?e=o:HF(o)?i=o:r=o}),r||i||e||null}function zF(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var p0={provide:OF,useFactory:()=>{let t=u(Yn$1,{self:!0});return{setParseErrors:n=>{t.setParseErrorSource(n)},set onReset(n){t.onReset=n}}}};var Yn$1=class extends ju{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof uo&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=UF(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,e,i){super(),this.injector=n,this.renderer=e,this.rawValueAccessors=i,this.injector?.get(Be)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(Le);if(!this.control||!n)return;let e=n.markForCheck.bind(n);this.subscription=new fe$1,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(i=>{i instanceof uo&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.(`ngNoCva`)&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(r=>{this.control?.setValue(r,{emitModelToViewChange:!1}),this.control?.markAsDirty(),this.viewToModelUpdate(r)}),n.listenToCustomControlOutput(`touch`,()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=MF(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(r=>r instanceof c0))}ngControlUpdate(n,e){if(!this.isCustomControlBased)return;let i=this.control,r=this.customControlBindings;Object.is(r.value,i.value)||(r.value=i.value,n.setCustomControlModelInput(i.value)),this.bindControlProperty(n,r,`touched`,i.touched),this.bindControlProperty(n,r,`dirty`,i.dirty),this.bindControlProperty(n,r,`valid`,i.valid),this.bindControlProperty(n,r,`invalid`,i.invalid),this.bindControlProperty(n,r,`pending`,i.pending),this.bindControlProperty(n,r,`disabled`,i.disabled),this.shouldBindRequired&&this.bindControlProperty(n,r,`required`,this.isRequired);let o=i.errors;if(r.errors!==o){r.errors=o;let s=this._convertErrors(o);n.setInputOnDirectives(`errors`,s)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,e,i,r){if(e[i]===r)return;e[i]=r;let o=n.setInputOnDirectives(i,r);this.isNativeFormElement&&!o&&(i===`disabled`||i===`required`)&&this.renderer&&AF(this.renderer,n.nativeElement,i,r)}_convertErrors(n){if(n===null)return[];let e=this.control;return Object.entries(n).map(([i,r])=>new lv({context:r,kind:i,control:e}))}setParseErrorSource(n){if(n===void 0)return;let e=null,i=Xe$1(()=>{let r=n();return r.length===0?null:r.reduce((o,s)=>(o[s.kind]=s,o),{})});this.parseErrorsValidator=(()=>e).bind(this),Yt$1(()=>{e=i(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}};var $u=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var QY=(()=>{class t extends $u{constructor(e){super(e)}static ɵfac=function(i){return new(i||t)(A(Yn$1,2))};static ɵdir=M({type:t,selectors:[[``,`formControlName`,``],[``,`ngModel`,``],[``,`formControl`,``]],hostVars:14,hostBindings:function(i,r){i&2&&k(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)},standalone:!1,features:[_e]})}return t})();var KY=(()=>{class t extends $u{constructor(e){super(e)}static ɵfac=function(i){return new(i||t)(A(hr$1,10))};static ɵdir=M({type:t,selectors:[[``,`formGroupName`,``],[``,`formArrayName`,``],[``,`ngModelGroup`,``],[``,`formGroup`,``],[``,`formArray`,``],[`form`,3,`ngNoForm`,``],[``,`ngForm`,``]],hostVars:16,hostBindings:function(i,r){i&2&&k(`ng-untouched`,r.isUntouched)(`ng-touched`,r.isTouched)(`ng-pristine`,r.isPristine)(`ng-dirty`,r.isDirty)(`ng-valid`,r.isValid)(`ng-invalid`,r.isInvalid)(`ng-pending`,r.isPending)(`ng-submitted`,r.isSubmitted)},standalone:!1,features:[_e]})}return t})();var ps$1=class extends hs$1{constructor(n,e,i){super(gv(e),vv(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this._find(n)||(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){let i=this._find(n);i&&i._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){let r=this._find(n);r&&r._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,e={}){re(()=>{s0(this,!0,n),Object.keys(n).forEach(i=>{o0(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this._find(i);r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,G(g({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new uo(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return a0(this.controls,n)?this.controls[n]:null}};var dv=class extends ps$1{};var $F={provide:hr$1,useExisting:At$1(()=>Yu)};var fc=Promise.resolve();var Yu=(()=>{class t extends hr$1{callSetDisabledState;get submitted(){return re(this.submittedReactive)}_submitted=Xe$1(()=>this.submittedReactive());submittedReactive=ne$1(!1);_directives=new Set;form;ngSubmit=new W$1;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new ps$1({},pv(e),mv(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){fc.then(()=>{e.control=this._findContainer(e.path).registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){fc.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){fc.then(()=>{let i=this._findContainer(e.path),r=new ps$1({});u0(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){fc.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){fc.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),h0(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Bu(this.control)),e?.target?.method===`dialog`}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static ɵfac=function(i){return new(i||t)(A(ho,10),A(Gu,10),A(gc,8))};static ɵdir=M({type:t,selectors:[[`form`,3,`ngNoForm`,``,3,`formGroup`,``,3,`formArray`,``],[`ng-form`],[``,`ngForm`,``]],hostBindings:function(i,r){i&1&&B$1(`submit`,function(s){return r.onSubmit(s)})(`reset`,function(){return r.onReset()})},inputs:{options:[0,`ngFormOptions`,`options`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[je([$F]),_e]})}return t})();function $D(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function GD(t){return typeof t==`object`&&t!==null&&Object.keys(t).length===2&&`value`in t&&`disabled`in t}var mc=class extends hs$1{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(gv(e),vv(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Wu(e)&&(e.nonNullable||e.initialValueIsDefault)&&(GD(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){re(()=>{this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new uo(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){$D(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){$D(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn===`submit`&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){GD(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var JY=mc;var GF=t=>t instanceof mc;var WF=(()=>{class t extends hr$1{callSetDisabledState;get submitted(){return re(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Xe$1(()=>this._submittedReactive());_submittedReactive=ne$1(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),Object.hasOwn(e,`form`)&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(zu(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return e._setupWithForm(i,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){Hu(e.control||null,e,!1),zF(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,h0(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Bu(this.control)),e?.target?.method===`dialog`}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(Hu(i||null,e),GF(r)&&e._setupWithForm(r,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);u0(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&BF(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){bv(this.form,this),this._oldForm&&zu(this._oldForm,this)}_checkFormPresent(){this.form}static ɵfac=function(i){return new(i||t)(A(ho,10),A(Gu,10),A(gc,8))};static ɵdir=M({type:t,features:[_e,qe]})}return t})();var qF={provide:hr$1,useExisting:At$1(()=>Zu)};var Zu=(()=>{class t extends WF{form=null;ngSubmit=new W$1;get control(){return this.form}static ɵfac=(()=>{let e;return function(r){return(e||(e=ht(t)))(r||t)}})();static ɵdir=M({type:t,selectors:[[``,`formGroup`,``]],hostBindings:function(i,r){i&1&&B$1(`submit`,function(s){return r.onSubmit(s)})(`reset`,function(){return r.onReset()})},inputs:{form:[0,`formGroup`,`form`]},outputs:{ngSubmit:`ngSubmit`},exportAs:[`ngForm`],standalone:!1,features:[je([qF]),_e]})}return t})();var eZ=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[`form`,3,`ngNoForm`,``,3,`ngNativeValidate`,``]],hostAttrs:[`novalidate`,``],standalone:!1})}return t})();var uv=class extends hs$1{constructor(n,e,i){super(gv(e),vv(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){Array.isArray(n)?n.forEach(i=>{this.controls.push(i),this._registerControl(i)}):(this.controls.push(n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,i={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,e={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,i={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){re(()=>{s0(this,!1,n),n.forEach((i,r)=>{o0(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(n.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((i,r)=>{i.reset(n[r],G(g({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new uo(this))}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,i)=>i._syncPendingControls()?!0:e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,i)=>{n(e,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};var _v=new m(``);var YF={provide:Yn$1,useExisting:At$1(()=>ZF)};var ZF=(()=>{class t extends Yn$1{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new W$1;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,s,a,c){super(c,a,r),this._ngModelWarningConfig=o,this.callSetDisabledState=s,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){if(this._isControlChanged(e)){let i=e.form.previousValue;i&&(Hu(i,this,!1),this.removeParseErrorsValidator(i)),this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,l0(this.form,this,this.callSetDisabledState)),this.form.updateValueAndValidity({emitEvent:!1})}f0(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&Hu(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return Object.hasOwn(e,`form`)}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){super.ngControlUpdate(e,!0)}static ɵfac=function(i){return new(i||t)(A(ho,10),A(Gu,10),A(fo,10),A(_v,8),A(gc,8),A(Se,8),A(ie$1,8))};static ɵdir=M({type:t,selectors:[[``,`formControl`,``]],inputs:{form:[0,`formControl`,`form`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},exportAs:[`ngForm`],standalone:!1,features:[je([YF,p0]),_e,qe,Qd(null)]})}return t})();var QF={provide:Yn$1,useExisting:At$1(()=>KF)};var KF=(()=>{class t extends Yn$1{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new W$1;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,i,r,o,s,a,c){super(c,a,o),this._ngModelWarningConfig=s,this._parent=e,this._setValidators(i),this._setAsyncValidators(r)}_setupWithForm(e,i){this.control=e,this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,l0(e,this,i))}ngOnChanges(e){this._added||this._setUpControl(),f0(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return FF(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}ɵngControlCreate(e){super.ngControlCreate(e)}ɵngControlUpdate(e){this.isCustomControlBased&&(this._added||this._setUpControl(),super.ngControlUpdate(e,!0))}static ɵfac=function(i){return new(i||t)(A(hr$1,13),A(ho,10),A(Gu,10),A(fo,10),A(_v,8),A(Se,8),A(ie$1,8))};static ɵdir=M({type:t,selectors:[[``,`formControlName`,``]],inputs:{name:[0,`formControlName`,`name`],isDisabled:[0,`disabled`,`isDisabled`],model:[0,`ngModel`,`model`]},outputs:{update:`ngModelChange`},standalone:!1,features:[je([QF,p0]),_e,qe,Qd(null)]})}return t})();var m0=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({})}return t})();function WD(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var XF=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,i=null){let r=this._reduceControls(e),o={};return WD(i)?o=i:i!==null&&(o.validators=i.validator,o.asyncValidators=i.asyncValidator),new ps$1(r,o)}record(e,i=null){return new dv(this._reduceControls(e),i)}control(e,i,r){let o={};return this.useNonNullable?(WD(i)?o=i:(o.validators=i,o.asyncValidators=r),new mc(e,G(g({},o),{nonNullable:!0}))):new mc(e,i,r)}array(e,i,r){return new uv(e.map(s=>this._createControl(s)),i,r)}_reduceControls(e){let i={};return Object.keys(e).forEach(r=>{i[r]=this._createControl(e[r])}),i}_createControl(e){if(e instanceof mc)return e;if(e instanceof hs$1)return e;if(Array.isArray(e)){let i=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(i,r,o)}else return this.control(e)}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var tZ=(()=>{class t extends XF{group(e,i=null){return super.group(e,i)}control(e,i,r){return super.control(e,i,r)}array(e,i,r){return super.array(e,i,r)}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var yv=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:gc,useValue:e.callSetDisabledState??qu}]}}static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({imports:[m0]})}return t})();var wv=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:_v,useValue:e.warnOnNgModelWithFormControl??`always`},{provide:gc,useValue:e.callSetDisabledState??qu}]}}static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({imports:[m0]})}return t})();var se=`primary`;var Nc=Symbol(`RouteTitle`);var Iv=class{params;constructor(n){this.params=n||{}}has(n){return Object.hasOwn(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function mo(t){return new Iv(t)}function Sv(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===`:`)e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function S0(t,n,e){let i=e.path.split(`/`),r=i.indexOf(`**`);if(r===-1){if(i.length>t.length||e.pathMatch===`full`&&(n.hasChildren()||i.length<t.length))return null;let c={},l=t.slice(0,i.length);return Sv(i,l,c)?{consumed:l,posParams:c}:null}if(r!==i.lastIndexOf(`**`))return null;let o=i.slice(0,r),s=i.slice(r+1);if(o.length+s.length>t.length||e.pathMatch===`full`&&n.hasChildren()&&e.path!==`**`)return null;let a={};return!Sv(o,t.slice(0,o.length),a)||!Sv(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function tf(t){return new Promise((n,e)=>{t.pipe(xi()).subscribe({next:i=>n(i),error:i=>e(i)})})}function JF(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!yi(t[e],n[e]))return!1;return!0}function yi(t,n){let e=t?xv(t):void 0,i=n?xv(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!C0(t[r],n[r]))return!1;return!0}function xv(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function C0(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function e1(t){return t.length>0?t[t.length-1]:null}function vo(t){return Ys$1(t)?t:pi(t)?Ae$1(Promise.resolve(t)):R(t)}function D0(t){return Ys$1(t)?tf(t):Promise.resolve(t)}var t1={exact:I0,subset:x0};var E0={exact:n1,subset:i1,ignored:()=>!0};var Uv={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var _s$1={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function zv(t,n,e){let i=t instanceof Ht$1?t:n.parseUrl(t);return Xe$1(()=>Nv(n.lastSuccessfulNavigation()?.finalUrl??new Ht$1,i,g(g({},_s$1),e)))}function Nv(t,n,e){return t1[e.paths](t.root,n.root,e.matrixParams)&&E0[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment===`exact`&&t.fragment!==n.fragment)}function n1(t,n){return yi(t,n)}function I0(t,n,e){if(!po(t.segments,n.segments)||!Xu(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!I0(t.children[i],n.children[i],e))return!1;return!0}function i1(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>C0(t[e],n[e]))}function x0(t,n,e){return N0(t,n,n.segments,e)}function N0(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!po(r,e)||n.hasChildren()||!Xu(r,e,i))}else if(t.segments.length===e.length){if(!po(t.segments,e)||!Xu(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!x0(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!po(t.segments,r)||!Xu(t.segments,r,i)||!t.children[se]?!1:N0(t.children[se],n,o,i)}}function Xu(t,n,e){return n.every((i,r)=>E0[e](t[r].parameters,i.parameters))}var Ht$1=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Ie$1([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=mo(this.queryParams),this._queryParamMap}toString(){return s1.serialize(this)}};var Ie$1=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ju(this)}};var mr$1=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=mo(this.parameters),this._parameterMap}toString(){return M0(this)}};function r1(t,n){return po(t,n)&&t.every((e,i)=>yi(e.parameters,n[i].parameters))}function po(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function o1(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===se&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==se&&(e=e.concat(n(r,i)))}),e}var _r$1=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:()=>new Ui})}return t})();var Ui=class{parse(n){let e=new Mv(n);return new Ht$1(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){return`${`/${vc(n.root,!0)}`}${l1(n.queryParams)}${typeof n.fragment==`string`?`#${a1(n.fragment)}`:``}`}};var s1=new Ui;function Ju(t){return t.segments.map(n=>M0(n)).join(`/`)}function vc(t,n){if(!t.hasChildren())return Ju(t);if(n){let e=t.children[se]?vc(t.children[se],!1):``,i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==se&&i.push(`${r}:${vc(o,!1)}`)}),i.length>0?`${e}(${i.join(`//`)})`:e}else{let e=o1(t,(i,r)=>r===se?[vc(t.children[se],!1)]:[`${r}:${vc(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[se]!=null?`${Ju(t)}/${e[0]}`:`${Ju(t)}/(${e.join(`//`)})`}}function T0(t){return encodeURIComponent(t).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function Qu(t){return T0(t).replace(/%3B/gi,`;`)}function a1(t){return encodeURI(t)}function Tv(t){return T0(t).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function ef(t){return decodeURIComponent(t)}function g0(t){return ef(t.replace(/\+/g,`%20`))}function M0(t){return`${Tv(t.path)}${c1(t.parameters)}`}function c1(t){return Object.entries(t).map(([n,e])=>`;${Tv(n)}=${Tv(e)}`).join(``)}function l1(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Qu(e)}=${Qu(r)}`).join(`&`):`${Qu(e)}=${Qu(i)}`).filter(e=>e);return n.length?`?${n.join(`&`)}`:``}var d1=/^[^\/()?;#]+/;function Cv(t){let n=t.match(d1);return n?n[0]:``}var u1=/^[^\/()?;=#]+/;function f1(t){let n=t.match(u1);return n?n[0]:``}var h1=/^[^=?&#]+/;function p1(t){let n=t.match(h1);return n?n[0]:``}var m1=/^[^&#]+/;function g1(t){let n=t.match(m1);return n?n[0]:``}var Mv=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new Ie$1([],{}):new Ie$1([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional(`?`))do this.parseQueryParam(n);while(this.consumeOptional(`&`));return n}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new w(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let e=[];for(this.peekStartsWith(`(`)||e.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),e.push(this.parseSegment());let i={};this.peekStartsWith(`/(`)&&(this.capture(`/`),i=this.parseParens(!0,n));let r={};return this.peekStartsWith(`(`)&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[se]=new Ie$1(e,i)),r}parseSegment(){let n=Cv(this.remaining);if(n===``&&this.peekStartsWith(`;`))throw new w(4009,!1);return this.capture(n),new mr$1(ef(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(`;`);)this.parseParam(n);return n}parseParam(n){let e=f1(this.remaining);if(!e)return;this.capture(e);let i=``;if(this.consumeOptional(`=`)){let r=Cv(this.remaining);r&&(i=r,this.capture(i))}n[ef(e)]=ef(i)}parseQueryParam(n){let e=p1(this.remaining);if(!e)return;this.capture(e);let i=``;if(this.consumeOptional(`=`)){let s=g1(this.remaining);s&&(i=s,this.capture(i))}let r=g0(e),o=g0(i);if(Object.hasOwn(n,r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(o)}else n[r]=o}parseParens(n,e){let i=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let r=Cv(this.remaining),o=this.remaining[r.length];if(o!==`/`&&o!==`)`&&o!==`;`)throw new w(4010,!1);let s;r.indexOf(`:`)>-1?(s=r.slice(0,r.indexOf(`:`)),this.capture(s),this.capture(`:`)):n&&(s=se);let a=this.parseChildren(e+1);i[s??se]=Object.keys(a).length===1&&a[se]?a[se]:new Ie$1([],a),this.consumeOptional(`//`)}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new w(4011,!1)}};function A0(t){return t.segments.length>0?new Ie$1([],{[se]:t}):t}function R0(t){let n=Object.create(null);for(let[i,r]of Object.entries(t.children)){let o=R0(r);if(i===se&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}return v1(new Ie$1(t.segments,n))}function v1(t){if(t.numberOfChildren===1&&t.children[se]){let n=t.children[se];return new Ie$1(t.segments.concat(n.segments),n.children)}return t}function gr$1(t){return t instanceof Ht$1}function k0(t,n,e=null,i=null,r=new Ui){return F0(O0(t),n,e,i,r)}function O0(t){let n;function e(o){let s={};for(let c of o.children){let l=e(c);s[c.outlet]=l}let a=new Ie$1(o.url,s);return o===t&&(n=a),a}let r=A0(e(t.root));return n??r}function F0(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Dv(o,o,o,e,i,r);let s=b1(n);if(s.toRoot())return Dv(o,o,new Ie$1([],{}),e,i,r);let a=_1(s,o,t),c=a.processChildren?_c(a.segmentGroup,a.index,s.commands):L0(a.segmentGroup,a.index,s.commands);return Dv(o,a.segmentGroup,c,e,i,r)}function nf(t){return typeof t==`object`&&t!=null&&!t.outlets&&!t.segmentPath}function wc(t){return typeof t==`object`&&t!=null&&t.outlets}function v0(t,n,e){t||=`ɵ`;let i=new Ht$1;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function Dv(t,n,e,i,r,o){let s={};for(let[l,d]of Object.entries(i??{}))s[l]=Array.isArray(d)?d.map(f=>v0(l,f,o)):v0(l,d,o);let a;t===n?a=e:a=P0(t,n,e);return new Ht$1(A0(R0(a)),s,r)}function P0(t,n,e){let i=Object.create(null);return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=P0(o,n,e)}),new Ie$1(t.segments,i)}var rf=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&nf(i[0]))throw new w(4003,!1);let r=i.find(wc);if(r&&r!==e1(i))throw new w(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function b1(t){if(typeof t[0]==`string`&&t.length===1&&t[0]===`/`)return new rf(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,s)=>{if(typeof o==`object`&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([c,l])=>{a[c]=typeof l==`string`?l.split(`/`):l}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!=`string`?[...r,o]:s===0?(o.split(`/`).forEach((a,c)=>{c==0&&a===`.`||(c==0&&a===``?e=!0:a===`..`?n++:a!=``&&r.push(a))}),r):[...r,o]},[]);return new rf(e,n,i)}var gs$1=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function _1(t,n,e){if(t.isAbsolute)return new gs$1(n,!0,0);if(!e)return new gs$1(n,!1,NaN);if(e.parent===null)return new gs$1(e,!0,0);let i=nf(t.commands[0])?0:1;return y1(e,e.segments.length-1+i,t.numberOfDoubleDots)}function y1(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new w(4005,!1);r=i.segments.length}return new gs$1(i,!1,r-o)}function w1(t){return wc(t[0])?t[0].outlets:{[se]:t}}function L0(t,n,e){if(t??=new Ie$1([],{}),t.segments.length===0&&t.hasChildren())return _c(t,n,e);let i=S1(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Ie$1(t.segments.slice(0,i.pathIndex),{});return o.children[se]=new Ie$1(t.segments.slice(i.pathIndex),t.children),_c(o,0,r)}else return i.match&&r.length===0?new Ie$1(t.segments,{}):i.match&&!t.hasChildren()?Av(t,n,e):i.match?_c(t,0,r):Av(t,n,e)}function _c(t,n,e){if(e.length===0)return new Ie$1(t.segments,{});{let i=w1(e),r=Object.create(null);if(Object.keys(i).some(o=>o!==se)&&t.children[se]&&t.numberOfChildren===1&&t.children[se].segments.length===0){let o=_c(t.children[se],n,e);return new Ie$1(t.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s==`string`&&(s=[s]),s!==null&&(r[o]=L0(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new Ie$1(t.segments,r)}}function S1(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let s=t.segments[r],a=e[i];if(wc(a))break;let c=`${a}`,l=i<e.length-1?e[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l==`object`&&l.outlets===void 0){if(!_0(c,l,s))return o;i+=2}else{if(!_0(c,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Av(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(wc(o))return new Ie$1(i,C1(o.outlets));if(r===0&&nf(e[0])){let c=t.segments[n];i.push(new mr$1(c.path,b0(e[0]))),r++;continue}let s=wc(o)?o.outlets[se]:`${o}`,a=r<e.length-1?e[r+1]:null;s&&a&&nf(a)?(i.push(new mr$1(s,b0(a))),r+=2):(i.push(new mr$1(s,{})),r++)}return new Ie$1(i,{})}function C1(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i==`string`&&(i=[i]),i!==null&&(n[e]=Av(new Ie$1([],{}),0,i))}),n}function b0(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function _0(t,n,e){return t==e.path&&yi(n,e.parameters)}var vs$1=`imperative`;var vt=(function(t){return t[t.NavigationStart=0]=`NavigationStart`,t[t.NavigationEnd=1]=`NavigationEnd`,t[t.NavigationCancel=2]=`NavigationCancel`,t[t.NavigationError=3]=`NavigationError`,t[t.RoutesRecognized=4]=`RoutesRecognized`,t[t.ResolveStart=5]=`ResolveStart`,t[t.ResolveEnd=6]=`ResolveEnd`,t[t.GuardsCheckStart=7]=`GuardsCheckStart`,t[t.GuardsCheckEnd=8]=`GuardsCheckEnd`,t[t.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,t[t.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,t[t.ChildActivationStart=11]=`ChildActivationStart`,t[t.ChildActivationEnd=12]=`ChildActivationEnd`,t[t.ActivationStart=13]=`ActivationStart`,t[t.ActivationEnd=14]=`ActivationEnd`,t[t.Scroll=15]=`Scroll`,t[t.NavigationSkipped=16]=`NavigationSkipped`,t})(vt||{});var un$1=class{id;url;constructor(n,e){this.id=n,this.url=e}};var vr$1=class extends un$1{type=vt.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i=`imperative`,r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var fn$1=class extends un$1{urlAfterRedirects;type=vt.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var Ft$1=(function(t){return t[t.Redirect=0]=`Redirect`,t[t.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,t[t.NoDataFromResolver=2]=`NoDataFromResolver`,t[t.GuardRejected=3]=`GuardRejected`,t[t.Aborted=4]=`Aborted`,t})(Ft$1||{});var ys$1=(function(t){return t[t.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,t[t.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,t})(ys$1||{});var Dn$1=class extends un$1{reason;code;type=vt.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function j0(t){return t instanceof Dn$1&&(t.code===Ft$1.Redirect||t.code===Ft$1.SupersededByNewNavigation)}var wi=class extends un$1{reason;code;type=vt.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}};var go=class extends un$1{error;target;type=vt.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var Sc=class extends un$1{urlAfterRedirects;state;type=vt.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var of=class extends un$1{urlAfterRedirects;state;type=vt.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var sf=class extends un$1{urlAfterRedirects;state;shouldActivate;type=vt.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var af=class extends un$1{urlAfterRedirects;state;type=vt.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var cf=class extends un$1{urlAfterRedirects;state;type=vt.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var lf=class{route;type=vt.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var df=class{route;type=vt.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var uf=class{snapshot;type=vt.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var ff=class{snapshot;type=vt.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var hf=class{snapshot;type=vt.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var pf=class{snapshot;type=vt.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var ws$1=class{routerEvent;position;anchor;scrollBehavior;type=vt.Scroll;constructor(n,e,i,r){this.routerEvent=n,this.position=e,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}};var Ss$1=class{};var Cc=class{};var Cs$1=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function D1(t){return!(t instanceof Ss$1)&&!(t instanceof Cs$1)&&!(t instanceof Cc)}var mf=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new br$1(this.rootInjector)}resetChildren(){this.children=new br$1(this.rootInjector)}};var br$1=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new mf(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static ɵfac=function(i){return new(i||t)(C(Te$1))};static ɵprov=E({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var gf=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Rv(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=Rv(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=kv(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return kv(n,this._root).map(e=>e.value)}};function Rv(t,n){if(t===n.value)return n;for(let e of n.children){let i=Rv(t,e);if(i)return i}return null}function kv(t,n){if(t===n.value)return[n];for(let e of n.children){let i=kv(t,e);if(i.length)return i.unshift(n),i}return[]}var dn$1=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function ms$1(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Dc=class extends gf{snapshot;constructor(n,e){super(n),this.snapshot=e,Gv(this,n)}toString(){return this.snapshot.toString()}};function V0(t,n){let e=E1(t,n),i=new Me$1([new mr$1(``,{})]),r=new Me$1({}),o=new Me$1({}),c=new zi(i,r,new Me$1({}),new Me$1(``),o,se,t,e.root);return c.snapshot=e.root,new Dc(new dn$1(c,[]),e)}function E1(t,n){return new Ec(``,new dn$1(new Ds$1([],{},{},``,{},se,t,null,{},n),[]))}var zi=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(n,e,i,r,o,s,a,c){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(L(l=>l[Nc]))??R(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(L(n=>mo(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(L(n=>mo(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(n){this._futureSnapshot=n,this.pending?.set(!0)}};var I1=`always`;function $v(t,n,e){let i,{routeConfig:r}=t;return n!==null&&(e===`always`||r?.path===``||!n.component&&!n.routeConfig?.loadComponent)?i={params:g(g({},n.params),t.params),data:g(g({},n.data),t.data),resolve:g(g(g(g({},t.data),n.data),r?.data),t._resolvedData)}:i={params:g({},t.params),data:g({},t.data),resolve:g(g({},t.data),t._resolvedData??{})},r&&H0(r)&&(i.resolve[Nc]=r.title),i}var Ds$1=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[Nc]}constructor(n,e,i,r,o,s,a,c,l,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=c,this._resolve=l,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=mo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=mo(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(i=>i.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var Ec=class extends gf{url;constructor(n,e){super(e),this.url=n,Gv(this,e)}toString(){return B0(this._root)}};function Gv(t,n){n.value._routerState=t,n.children.forEach(e=>Gv(t,e))}function B0(t){let n=t.children.length>0?` { ${t.children.map(B0).join(`, `)} } `:``;return`${t.value}${n}`}function Ev(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,yi(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),yi(n.params,e.params)||t.paramsSubject.next(e.params),JF(n.url,e.url)||t.urlSubject.next(e.url),yi(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Ov(t,n){let e=yi(t.params,n.params)&&r1(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||Ov(t.parent,n.parent))}function H0(t){return typeof t.title==`string`||t.title===null}var U0=new m(``);var Wv=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=se;activateEvents=new W$1;deactivateEvents=new W$1;attachEvents=new W$1;detachEvents=new W$1;routerOutletData=lo();parentContexts=u(br$1);location=u(pt);changeDetector=u(Le);inputBinder=u(Tc,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new w(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new w(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new w(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new w(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Fv(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[qe]})}return t})();var Fv=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===zi?this.route:n===br$1?this.childContexts:n===U0?this.outletData:this.parent.get(n,e)}};var Tc=new m(``);var z0=(()=>{class t{options;feature;outletDataSubscriptions=new Map;outletSeenKeys=new Map;outletEffects=new Map;constructor(e,i=null){this.options=e,this.feature=i,this.options.queryParams??=!0}bindActivatedRouteToOutletComponent(e,i){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e,i)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e),this.outletSeenKeys.delete(e),this.outletEffects.get(e)?.forEach(i=>i.destroy()),this.outletEffects.delete(e)}subscribeToRouteData(e,i){let{activatedRoute:r}=e,o=[],s=[];if(this.feature?.createResourceOutletBindingEffects&&e.activatedComponentRef){let{handledKeys:c,createdEffects:l}=this.feature.createResourceOutletBindingEffects(e.activatedComponentRef,r,i);o.push(...l),s=c}o.length>0&&this.outletEffects.set(e,o);let a=Po([this.options.queryParams?r.queryParams:R({}),r.params,r.data]).pipe(Ze$1(([c,l,d],f)=>(d=g(g(g(g({},c),l),d),r.resources||{}),f===0?R(d):Promise.resolve(d)))).subscribe(c=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==r||r.component===null){this.unsubscribeFromRouteData(e);return}let l=Mg(r.component);if(!l){this.unsubscribeFromRouteData(e);return}let d=this.outletSeenKeys.get(e);d||(d=new Set,this.outletSeenKeys.set(e,d));for(let h of Object.keys(c))d.add(h);let f=this.options.unmatchedInputBehavior??`alwaysUndefined`;for(let{templateName:h}of l.inputs){if(s.includes(h))continue;let p=c[h];(p!==void 0||f===`alwaysUndefined`||d.has(h))&&e.activatedComponentRef.setInput(h,p)}});this.outletDataSubscriptions.set(e,a)}static ɵfac=function(i){La()};static ɵprov=E({token:t,factory:t.ɵfac})}return t})();var qv=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(i,r){i&1&&be$1(0,`router-outlet`)},dependencies:[Wv],encapsulation:2,changeDetection:1})}return t})();function Yv(t){let n=t.children&&t.children.map(Yv),e=n?G(g({},t),{children:n}):g({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==se&&(e.component=qv),e}function x1(t,n,e){let i=new Set;return{newlyCreatedRoutes:i,state:new Dc(Ic(t,n._root,e?e._root:void 0,i),n)}}function Ic(t,n,e,i){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let r=e.value;r._setPending(n.value);return new dn$1(r,N1(t,n,e,i))}else{if(t.shouldAttach(n.value)){let s=t.retrieve(n.value);if(s!==null){let a=s.route;return a.value._setPending(n.value),a.children=n.children.map(c=>Ic(t,c,void 0,i)),a}}let r=T1(n.value);r._setPending(n.value),i.add(r);return new dn$1(r,n.children.map(s=>Ic(t,s,void 0,i)))}}function N1(t,n,e,i){return n.children.map(r=>{for(let o of e.children)if(t.shouldReuseRoute(r.value,o.value.snapshot))return Ic(t,r,o,i);return Ic(t,r,void 0,i)})}function T1(t){return new zi(new Me$1(t.url),new Me$1(t.params),new Me$1(t.queryParams),new Me$1(t.fragment),new Me$1(t.data),t.outlet,t.component,t)}var Es$1=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}};var $0=`ngNavigationCancelingError`;function vf(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=gr$1(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=G0(!1,Ft$1.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function G0(t,n){let e=new Error(`NavigationCancelingError: ${t||``}`);return e[$0]=!0,e.cancellationCode=n,e}function M1(t){return W0(t)&&gr$1(t.url)}function W0(t){return!!t&&t[$0]}var Pv=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),Ev(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=ms$1(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ms$1(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.contexts;i.resetChildren(),this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ms$1(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,e,i){let r=ms$1(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new pf(o.value.snapshot))}),n.children.length&&this.forwardEvent(new ff(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(Ev(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Ev(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,i)}};var bf=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}};var bs$1=class{component;route;constructor(n,e){this.component=n,this.route=e}};function A1(t,n,e){let i=t._root;return bc(i,n?n._root:null,e,[i.value])}function R1(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function xs$1(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t==`function`&&!Qh(t)?t:n.get(t):i}function bc(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ms$1(n);return t.children.forEach(s=>{k1(s,o[s.value.outlet],e,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>yc(a,e.getContext(s),e,r)),r}function k1(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let c=O1(s,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new bf(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?bc(t,n,a?a.children:null,i,r):bc(t,n,e,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new bs$1(a.outlet.component,s))}else s&&yc(n,a,e,r),r.canActivateChecks.push(new bf(i)),o.component?bc(t,null,a?a.children:null,i,r):bc(t,null,e,i,r);return r}function O1(t,n,e){if(typeof e==`function`)return nt$1(n._environmentInjector,()=>e(t,n));switch(e){case`pathParamsChange`:return!po(t.url,n.url);case`pathParamsOrQueryParamsChange`:return!po(t.url,n.url)||!yi(t.queryParams,n.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!Ov(t,n)||!yi(t.queryParams,n.queryParams);default:return!Ov(t,n)}}function yc(t,n,e,i){let r=ms$1(t),o=t.value;Object.entries(r).forEach(([s,a])=>{o.component?n?yc(a,n.children.getContext(s),n.children,i):yc(a,null,null,i):yc(a,e?e.getContext(s):null,e,i)}),o.component?n&&n.outlet&&n.outlet.isActivated?i.canDeactivateChecks.push(new bs$1(n.outlet.component,o)):i.canDeactivateChecks.push(new bs$1(null,o)):i.canDeactivateChecks.push(new bs$1(null,o))}function Mc(t){return typeof t==`function`}function F1(t){return typeof t==`boolean`}function P1(t){return t&&Mc(t.canLoad)}function L1(t){return t&&Mc(t.canActivate)}function j1(t){return t&&Mc(t.canActivateChild)}function V1(t){return t&&Mc(t.canDeactivate)}function B1(t){return t&&Mc(t.canMatch)}function q0(t){return t instanceof Fr||t?.name===`EmptyError`}var Ku=Symbol(`INITIAL_VALUE`);function Is(){return Ze$1(t=>Po(t.map(n=>n.pipe(Lt$1(1),Qe(Ku)))).pipe(L(n=>{for(let e of n)if(e!==!0){if(e===Ku)return Ku;if(e===!1||H1(e))return e}return!0}),De$1(n=>n!==Ku),Lt$1(1)))}function H1(t){return gr$1(t)||t instanceof Es$1}function Y0(t){return t.aborted?R(void 0).pipe(Lt$1(1)):new X(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener(`abort`,e),()=>t.removeEventListener(`abort`,e)})}function Z0(t){return ge$1(Y0(t))}function U1(t){return St(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?R(G(g({},n),{guardsResult:!0})):z1(o,e,i).pipe(St(s=>s&&F1(s)?$1(e,r,t):R(s)),L(s=>G(g({},n),{guardsResult:s})))})}function z1(t,n,e){return Ae$1(t).pipe(St(i=>Z1(i.component,i.route,e,n)),xi(i=>i!==!0,!0))}function $1(t,n,e){return Ae$1(n).pipe(hn$1(i=>Ki(W1(i.route.parent,e),G1(i.route,e),Y1(t,i.path),q1(t,i.route))),xi(i=>i!==!0,!0))}function G1(t,n){return t!==null&&n&&n(new hf(t)),R(!0)}function W1(t,n){return t!==null&&n&&n(new uf(t)),R(!0)}function q1(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return R(!0);return R(e.map(r=>Zs$1(()=>{let o=n._environmentInjector,s=xs$1(r,o);return vo(L1(s)?s.canActivate(n,t):nt$1(o,()=>s(n,t))).pipe(xi())}))).pipe(Is())}function Y1(t,n){let e=n[n.length-1];return R(n.slice(0,n.length-1).reverse().map(o=>R1(o)).filter(o=>o!==null).map(o=>Zs$1(()=>{return R(o.guards.map(a=>{let c=o.node._environmentInjector,l=xs$1(a,c);return vo(j1(l)?l.canActivateChild(e,t):nt$1(c,()=>l(e,t))).pipe(xi())})).pipe(Is())}))).pipe(Is())}function Z1(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return R(!0);return R(r.map(s=>{let a=n._environmentInjector,c=xs$1(s,a);return vo(V1(c)?c.canDeactivate(t,n,e,i):nt$1(a,()=>c(t,n,e,i))).pipe(xi())})).pipe(Is())}function Q1(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return R(!0);return R(o.map(a=>{let c=xs$1(a,t),d=vo(P1(c)?c.canLoad(n,e):nt$1(t,()=>c(n,e)));return r?d.pipe(Z0(r)):d})).pipe(Is(),Q0(i))}function Q0(t){return rl(ze(n=>{if(typeof n!=`boolean`)throw vf(t,n)}),L(n=>n===!0))}function K1(t,n,e,i,r,o){let s=n.canMatch;if(!s||s.length===0)return R(!0);return R(s.map(c=>{let l=xs$1(c,t);return vo(B1(l)?l.canMatch(n,e,r):nt$1(t,()=>l(n,e,r))).pipe(Z0(o))})).pipe(Is(),Q0(i))}var Hi=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}};var xc=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function X1(t){throw new w(4e3,!1)}function J1(t){throw G0(!1,Ft$1.GuardRejected)}var Lv=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}lineralizeSegments(n,e){return we$1(this,null,function*(){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[se])throw X1(`${n.redirectTo}`);r=r.children[se]}})}applyRedirectCommands(n,e,i,r,o){return we$1(this,null,function*(){let s=yield eP(e,r,o);if(s instanceof Ht$1)throw new xc(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,i);if(s[0]===`/`)throw new xc(a);return a})}applyRedirectCreateUrlTree(n,e,i,r){return new Ht$1(this.createSegmentGroup(n,e.root,i,r),this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o==`string`&&o[0]===`:`){let a=o.substring(1);i[r]=e[a]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),s=Object.create(null);return Object.entries(e.children).forEach(([a,c])=>{s[a]=this.createSegmentGroup(n,c,i,r)}),new Ie$1(o,s)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===`:`?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new w(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function eP(t,n,e){if(typeof t==`string`)return Promise.resolve(t);let i=t;return tf(vo(nt$1(e,()=>i(n))))}function tP(t,n){return t.providers&&!t._injector&&(t._injector=os$1(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Zn$1(t){return t.outlet||se}function nP(t,n){let e=t.filter(i=>Zn$1(i)===n);return e.push(...t.filter(i=>Zn$1(i)!==n)),e}var jv={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function K0(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function iP(t,n,e,i,r,o,s){let a=X0(t,n,e);if(!a.matched)return R(a);let c=K0(o(a));return i=tP(n,i),K1(i,n,e,r,c,s).pipe(L(l=>l===!0?a:g({},jv)))}function X0(t,n,e){if(n.path===``)return n.pathMatch===`full`&&(t.hasChildren()||e.length>0)?g({},jv):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||S0)(e,t,n);if(!r)return g({},jv);let o={};Object.entries(r.posParams??{}).forEach(([a,c])=>{o[a]=c.path});let s=r.consumed.length>0?g(g({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function y0(t,n,e,i,r){return e.length>0&&sP(t,e,i,r)?{segmentGroup:new Ie$1(n,oP(i,new Ie$1(e,t.children))),slicedSegments:[]}:e.length===0&&aP(t,e,i)?{segmentGroup:new Ie$1(t.segments,rP(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Ie$1(t.segments,t.children),slicedSegments:e}}function rP(t,n,e,i){let r={};for(let o of e)if(yf(t,n,o)&&!i[Zn$1(o)]){let s=new Ie$1([],{});r[Zn$1(o)]=s}return g(g({},i),r)}function oP(t,n){let e={};e[se]=n;for(let i of t)if(i.path===``&&Zn$1(i)!==se){let r=new Ie$1([],{});e[Zn$1(i)]=r}return e}function sP(t,n,e,i){return e.some(r=>!yf(t,n,r)||!(Zn$1(r)!==se)?!1:!(i!==void 0&&Zn$1(r)===i))}function aP(t,n,e){return e.some(i=>yf(t,n,i))}function yf(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch===`full`?!1:e.path===``}function cP(t,n,e){return n.length===0&&!t.children[e]}var Vv=class{};function lP(t,n,e,i,r,o,s,a){return we$1(this,null,function*(){return new Bv(t,n,e,i,r,s,o,a).recognize()})}var dP=31;var Bv=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,s,a,c){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=c,this.applyRedirects=new Lv(this.urlSerializer,this.urlTree)}noMatchError(n){return new w(4002,`'${n.segmentGroup}'`)}recognize(){return we$1(this,null,function*(){let n=y0(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=yield this.match(n),o=new Ec(``,new dn$1(i,e)),s=k0(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}})}match(n){return we$1(this,null,function*(){let e=new Ds$1([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),se,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,n,se,e),rootSnapshot:e}}catch(i){if(i instanceof xc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Hi?this.noMatchError(i):i}})}processSegmentGroup(n,e,i,r,o){return we$1(this,null,function*(){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let s=yield this.processSegment(n,e,i,i.segments,r,!0,o);return s instanceof dn$1?[s]:[]})}processChildren(n,e,i,r){return we$1(this,null,function*(){let o=[];for(let c of Object.keys(i.children))c===`primary`?o.unshift(c):o.push(c);let s=[];for(let c of o){let l=i.children[c],d=nP(e,c),f=yield this.processSegmentGroup(n,d,l,c,r);s.push(...f)}let a=J0(s);return uP(a),a})}processSegment(n,e,i,r,o,s,a){return we$1(this,null,function*(){for(let c of e)try{return yield this.processSegmentAgainstRoute(c._injector??n,e,c,i,r,o,s,a)}catch(l){if(l instanceof Hi||q0(l))continue;throw l}if(cP(i,r,o))return new Vv;throw new Hi(i)})}processSegmentAgainstRoute(n,e,i,r,o,s,a,c){return we$1(this,null,function*(){if(Zn$1(i)!==s&&(s===se||!yf(r,o,i)))throw new Hi(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,s,c);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,s,c);throw new Hi(r)})}expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,s,a){return we$1(this,null,function*(){let{matched:c,parameters:l,consumedSegments:d,positionalParamSegments:f,remainingSegments:h}=X0(e,r,o);if(!c)throw new Hi(e);typeof r.redirectTo==`string`&&r.redirectTo[0]===`/`&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>dP&&(this.allowRedirects=!1));let p=this.createSnapshot(n,r,o,l,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let v=yield this.applyRedirects.applyRedirectCommands(d,r.redirectTo,f,K0(p),n),S=yield this.applyRedirects.lineralizeSegments(r,v);return this.processSegment(n,i,e,S.concat(h),s,!1,a)})}createSnapshot(n,e,i,r,o){let s=new Ds$1(i,r,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,hP(e),Zn$1(e),e.component??e._loadedComponent??null,e,pP(e),n),a=$v(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}matchSegmentAgainstRoute(n,e,i,r,o,s){return we$1(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=ce=>this.createSnapshot(n,i,ce.consumedSegments,ce.parameters,s),c=yield tf(iP(e,i,r,n,this.urlSerializer,a,this.abortSignal));if(i.path===`**`&&(e.children={}),!c?.matched)throw new Hi(e);n=i._injector??n;let{routes:l}=yield this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:f,consumedSegments:h,remainingSegments:p}=c,v=this.createSnapshot(n,i,h,f,s),{segmentGroup:S,slicedSegments:P}=y0(e,h,p,l,o);if(P.length===0&&S.hasChildren())return new dn$1(v,yield this.processChildren(d,l,S,v));if(l.length===0&&P.length===0)return new dn$1(v,[]);let $=Zn$1(i)===o,J=yield this.processSegment(d,l,S,P,$?se:o,!0,v);return new dn$1(v,J instanceof dn$1?[J]:[])})}getChildConfig(n,e,i){return we$1(this,null,function*(){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield tf(Q1(n,e,i,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw J1(e)}return{routes:[],injector:n}})}};function uP(t){t.sort((n,e)=>n.value.outlet===se?-1:e.value.outlet===se?1:n.value.outlet.localeCompare(e.value.outlet))}function fP(t){let n=t.value.routeConfig;return n&&n.path===``}function J0(t){let n=[],e=new Set;for(let i of t){if(!fP(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=J0(i.children);n.push(new dn$1(i.value,r))}return n.filter(i=>!e.has(i))}function hP(t){return t.data||{}}function pP(t){return t.resolve||{}}function mP(t,n,e,i,r,o,s){return St(a=>we$1(null,null,function*(){let{state:c,tree:l}=yield lP(t,n,e,i,a.extractedUrl,r,o,s);return G(g({},a),{targetSnapshot:c,urlAfterRedirects:l})}))}function gP(t){return St(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return R(n);let r=new Set(i.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let c of eE(a))o.add(c);let s=0;return Ae$1(o).pipe(hn$1(a=>r.has(a)?vP(a,e,t):(a.data=$v(a,a.parent,t).resolve,R(void 0))),ze(()=>s++),xl(1),St(a=>s===o.size?R(n):Ge$1))})}function eE(t){return[t,...t.children.map(e=>eE(e)).flat()]}function vP(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!H0(i)&&(r[Nc]=i.title),Zs$1(()=>(t.data=$v(t,t.parent,e).resolve,bP(r,t,n).pipe(L(o=>(t._resolvedData=o,t.data=g(g({},t.data),o),null)))))}function bP(t,n,e){let i=xv(t);if(i.length===0)return R({});let r={};return Ae$1(i).pipe(St(o=>_P(t[o],n,e).pipe(xi(),ze(s=>{if(s instanceof Es$1)throw vf(new Ui,s);r[o]=s}))),xl(1),L(()=>r),Gt$1(o=>q0(o)?Ge$1:Or(o)))}function _P(t,n,e){let i=n._environmentInjector,r=xs$1(t,i);return vo(r.resolve?r.resolve(n,e):nt$1(i,()=>r(n,e)))}var Zv=new m(``);function Hv(t){return Ze$1(n=>{let e=t(n);return e?Ae$1(e).pipe(L(()=>n)):R(n)})}var Qv=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===se);return i}getResolvedTitleForRoute(e){return e.data[Nc]}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:()=>u(tE)})}return t})();var tE=(()=>{class t extends Qv{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static ɵfac=function(i){return new(i||t)(C(VD))};static ɵprov=E({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var yr$1=new m(``,{factory:()=>({})});var Ns$1=new m(``);var wf=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(wg);loadComponent(e,i){return we$1(this,null,function*(){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=we$1(this,null,function*(){try{let s=yield iE(Eg(yield D0(nt$1(e,()=>i.loadComponent()))));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s,s}finally{this.componentLoaders.delete(i)}});return this.componentLoaders.set(i,r),r})}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=we$1(this,null,function*(){try{let o=yield nE(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}});return this.childrenLoaders.set(i,r),r}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();function nE(t,n,e,i){return we$1(this,null,function*(){let o=yield iE(Eg(yield D0(nt$1(e,()=>t.loadChildren())))),s;o instanceof qd||Array.isArray(o)?s=o:s=yield n.compileModuleAsync(o),i&&i(t);let a,c,d;return Array.isArray(s)?c=s:(a=s.create(e).injector,d=s,c=a.get(Ns$1,[],{optional:!0,self:!0}).flat()),{routes:c.map(Yv),injector:a,factory:d}})}function iE(t){return we$1(this,null,function*(){return t})}var Sf=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:()=>u(yP)})}return t})();var yP=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var Kv=new m(``);var Xv=new m(``);function rE(t,n,e,i){let r=t.get(Xv),o=t.get(q);if(i){r.skipNextTransition=!1;return}if(!o.startViewTransition||r.skipNextTransition)return r.skipNextTransition=!1,new Promise(d=>setTimeout(d));let s,a=new Promise(d=>{s=d}),c=o.startViewTransition(()=>(s(),wP(t)));c.updateCallbackDone.catch(d=>{}),c.ready.catch(d=>{}),c.finished.catch(d=>{});let{onViewTransitionCreated:l}=r;return l&&nt$1(t,()=>l({transition:c,from:n,to:e})),a}function wP(t){return new Promise(n=>{bt$1({read:()=>setTimeout(n)},{injector:t})})}var SP=()=>{};var Jv=new m(``);var Cf=(()=>{class t{currentNavigation=ne$1(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=ne$1(null);events=new I;transitionAbortWithErrorSubject=new I;configLoader=u(wf);environmentInjector=u(Te$1);destroyRef=u(Be);urlSerializer=u(_r$1);rootContexts=u(br$1);location=u(gi);inputBindingEnabled=u(Tc,{optional:!0})!==null;titleStrategy=u(Qv);options=u(yr$1,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||I1;urlHandlingStrategy=u(Sf);createViewTransition=u(Kv,{optional:!0});navigationErrorHandler=u(Jv,{optional:!0});routerResourcesFeature=u(Zv,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>R(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new lf(r)),i=r=>this.events.next(new df(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;re(()=>{this.transitions?.next(G(g({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Me$1(null),this.transitions.pipe(De$1(i=>i!==null),Ze$1(i=>{let r=!0,o=!1,s=new AbortController,a=()=>!o&&this.currentTransition?.id===i.id;return R(i).pipe(Ze$1(c=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,``,Ft$1.SupersededByNewNavigation),Ge$1;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:c.id,initialUrl:c.rawUrl,extractedUrl:c.extractedUrl,targetBrowserUrl:typeof c.extras.browserUrl==`string`?this.urlSerializer.parse(c.extras.browserUrl):c.extras.browserUrl,trigger:c.source,extras:c.extras,previousNavigation:l?G(g({},l),{previousNavigation:null}):null,abort:()=>s.abort(),routesRecognizeHandler:c.routesRecognizeHandler,beforeActivateHandler:c.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=c.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&f!==`reload`)return this.events.next(new wi(c.id,this.urlSerializer.serialize(c.rawUrl),``,ys$1.IgnoredSameUrlNavigation)),c.resolve(!1),Ge$1;if(this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))return R(c).pipe(Ze$1(h=>(this.events.next(new vr$1(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),h.id!==this.navigationId?Ge$1:Promise.resolve(h))),mP(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,s.signal),ze(h=>{i.targetSnapshot=h.targetSnapshot,i.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation.update(p=>(p.finalUrl=h.urlAfterRedirects,p)),this.events.next(new Cc)}),Ze$1(h=>Ae$1(i.routesRecognizeHandler.deferredHandle??R(void 0)).pipe(L(()=>h))),ze(()=>{let h=new Sc(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(h)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)){let{id:h,extractedUrl:p,source:v,restoredState:S,extras:P}=c,$=new vr$1(h,this.urlSerializer.serialize(p),v,S);this.events.next($);let J=V0(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=G(g({},c),{targetSnapshot:J,urlAfterRedirects:p,extras:G(g({},P),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ce=>(ce.finalUrl=p,ce)),R(i)}else return this.events.next(new wi(c.id,this.urlSerializer.serialize(c.extractedUrl),``,ys$1.IgnoredByUrlHandlingStrategy)),c.resolve(!1),Ge$1}),L(c=>{let l=new of(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);return this.events.next(l),this.currentTransition=i=G(g({},c),{guards:A1(c.targetSnapshot,c.currentSnapshot,this.rootContexts)}),i}),U1(c=>this.events.next(c)),Ze$1(c=>{if(i.guardsResult=c.guardsResult,c.guardsResult&&typeof c.guardsResult!=`boolean`)throw vf(this.urlSerializer,c.guardsResult);let l=new sf(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot,!!c.guardsResult);if(this.events.next(l),!a())return Ge$1;if(!c.guardsResult)return this.cancelNavigationTransition(c,``,Ft$1.GuardRejected),Ge$1;if(c.guards.canActivateChecks.length===0)return R(c);let d=new af(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);if(this.events.next(d),!a())return Ge$1;let f=!1;return R(c).pipe(gP(this.paramsInheritanceStrategy),ze({next:()=>{f=!0;let h=new cf(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(h)},complete:()=>{f||this.cancelNavigationTransition(c,``,Ft$1.NoDataFromResolver)}}))}),Hv(c=>{let l=f=>{let h=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let p=f._environmentInjector;h.push(this.configLoader.loadComponent(p,f.routeConfig).then(v=>{f.component=v}))}for(let p of f.children)h.push(...l(p));return h},d=l(c.targetSnapshot.root);return d.length===0?R(c):Ae$1(Promise.all(d).then(()=>c))}),Ze$1(c=>{let{newlyCreatedRoutes:l,state:d}=x1(e.routeReuseStrategy,c.targetSnapshot,c.currentRouterState);return this.currentTransition=i=c=G(g({},c),{targetRouterState:d,newlyCreatedRoutes:l}),this.currentNavigation.update(f=>(f.targetRouterState=d,f)),R(c)}),this.routerResourcesFeature?.setupAndRunResources(s.signal)??(c=>c),Hv(()=>this.afterPreactivation()),Ze$1(()=>{let{currentSnapshot:c,targetSnapshot:l}=i,d=this.createViewTransition?.(this.environmentInjector,c.root,l.root,i.hasUAVisualTransition);return d?Ae$1(d).pipe(L(()=>i)):R(i)}),Lt$1(1),Ze$1(c=>{r=!1,this.events.next(new Ss$1);let l=i.beforeActivateHandler.deferredHandle;return l?Ae$1(l.then(()=>c)):R(c)}),ze(c=>{new Pv(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),c.newlyCreatedRoutes?.clear(),a()&&(oE(c.targetRouterState),o=!0,this.currentNavigation.update(l=>(l.abort=SP,l)),this.lastSuccessfulNavigation.set(re(this.currentNavigation)),this.events.next(new fn$1(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects))),this.titleStrategy?.updateTitle(c.targetRouterState.snapshot),c.resolve(!0))}),ge$1(Y0(s.signal).pipe(De$1(()=>!o&&r),ze(()=>{this.cancelNavigationTransition(i,s.signal.reason+``,Ft$1.Aborted)}))),ze({complete:()=>{o=!0}}),ge$1(this.transitionAbortWithErrorSubject.pipe(ze(c=>{throw c}))),Xi(()=>{s.abort(),o||this.cancelNavigationTransition(i,``,Ft$1.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Gt$1(c=>{if(o=!0,w0(i),this.destroyed)return i.resolve(!1),Ge$1;if(W0(c))this.events.next(new Dn$1(i.id,this.urlSerializer.serialize(i.extractedUrl),c.message,c.cancellationCode)),M1(c)?this.events.next(new Cs$1(c.url,c.navigationBehaviorOptions)):i.resolve(!1);else{let l=new go(i.id,this.urlSerializer.serialize(i.extractedUrl),c,i.targetSnapshot??void 0);try{let d=nt$1(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof Es$1){let{message:f,cancellationCode:h}=vf(this.urlSerializer,d);this.events.next(new Dn$1(i.id,this.urlSerializer.serialize(i.extractedUrl),f,h)),this.events.next(new Cs$1(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),c}catch(d){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(d)}}return Ge$1}))}))}cancelNavigationTransition(e,i,r){w0(e);let o=new Dn$1(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=re(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();function CP(t){return t!==vs$1}function w0(t){for(let n of t.newlyCreatedRoutes??[])n._localInjector?.destroy(),n._localInjector=void 0;oE(t.targetRouterState)}function oE(t){if(!t)return;let n=e=>{e.value.pending?.set(!1),e.children.forEach(n)};n(t._root)}var sE=new m(``);var aE=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:()=>u(DP)})}return t})();var _f=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}};var DP=(()=>{class t extends _f{static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var Df=(()=>{class t{urlSerializer=u(_r$1);options=u(yr$1,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=u(gi);urlHandlingStrategy=u(Sf);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new Ht$1;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,s=r??o;return s instanceof Ht$1?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=V0(null,u(Te$1));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:()=>u(EP)})}return t})();var EP=(()=>{class t extends Df{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type===`popstate`&&setTimeout(()=>{e(i.url,i.state,`popstate`,{replaceUrl:!0},i.hasUAVisualTransition)})})}handleRouterEvent(e,i){e instanceof vr$1?this.updateStateMemento():e instanceof wi?this.commitTransition(i):e instanceof Sc?this.urlUpdateStrategy===`eager`&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Ss$1?(this.commitTransition(i),this.urlUpdateStrategy===`deferred`&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Dn$1&&!j0(e)?this.restoreHistory(i):e instanceof go?this.restoreHistory(i,!0):e instanceof fn$1&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,i){let{extras:r,id:o}=i,{replaceUrl:s,state:a}=r;if(this.location.isCurrentPathEqualTo(e)||s){let c=this.browserPageId,l=g(g({},a),this.generateNgRouterState(o,c,i));this.location.replaceState(e,``,l)}else{let c=g(g({},a),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(e,``,c)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution===`computed`){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i,r){return this.canceledNavigationResolution===`computed`?g({navigationId:e,ɵrouterPageId:i},this.routerUrlState(r)):g({navigationId:e},this.routerUrlState(r))}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();function Ef(t,n){t.events.pipe(De$1(e=>e instanceof fn$1||e instanceof Dn$1||e instanceof go||e instanceof wi),L(e=>e instanceof fn$1||e instanceof wi?0:(e instanceof Dn$1?e.code===Ft$1.Redirect||e.code===Ft$1.SupersededByNewNavigation:!1)?2:1),De$1(e=>e!==2),Lt$1(1)).subscribe(()=>{n()})}var Nt$1=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(Xd);stateManager=u(Df);options=u(yr$1,{optional:!0})||{};pendingTasks=u(Ln$1);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=u(Cf);urlSerializer=u(_r$1);location=u(gi);urlHandlingStrategy=u(Sf);injector=u(Te$1);_events=new I;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(aE);injectorCleanup=u(sE,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=u(Ns$1,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(Tc,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new fe$1;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=re(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Dn$1&&i.code!==Ft$1.Redirect&&i.code!==Ft$1.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof fn$1)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Cs$1){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=g({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy===`eager`||CP(r.source)},s);this.scheduleNavigation(a,vs$1,null,c,r.hasUAVisualTransition,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}D1(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),vs$1,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o,s)=>{this.navigateToSyncWithBrowser(e,r,i,o,s)})}navigateToSyncWithBrowser(e,i,r,o,s){let a=r?.navigationId?r:null,c=r?.ɵrouterUrl??e;if(r?.ɵrouterUrl&&(o=G(g({},o),{browserUrl:e})),r){let d=g({},r);delete d.navigationId,delete d.ɵrouterPageId,delete d.ɵrouterUrl,Object.keys(d).length!==0&&(o.state=d)}let l=this.parseUrl(c);this.scheduleNavigation(l,i,a,o,s).catch(d=>{this.disposed||this.injector.get(qt$1)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return re(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Yv),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:c}=i,l=c?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case`merge`:d=g(g({},this.currentUrlTree.queryParams),o);break;case`preserve`:d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{f=O0(r?r.snapshot:this.routerState.snapshot.root)}catch(h){(typeof e[0]!=`string`||e[0][0]!==`/`)&&(e=[]),f=this.currentUrlTree.root}return F0(f,e,d,l??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=gr$1(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,vs$1,null,i)}navigate(e,i={skipLocationChange:!1}){return IP(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(i){return this.console.warn(en(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(e,i){let r;if(i===!0?r=g({},Uv):i===!1?r=g({},_s$1):r=g(g({},_s$1),i),gr$1(e))return Nv(this.currentUrlTree,e,r);let o=this.parseUrl(e);return Nv(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,s,a){if(this.disposed)return Promise.resolve(!1);let c,l,d;a?(c=a.resolve,l=a.reject,d=a.promise):d=new Promise((h,p)=>{c=h,l=p});let f=this.pendingTasks.add();return Ef(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,hasUAVisualTransition:s,resolve:c,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();function IP(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new w(4008,!1)}var xP=(()=>{class t{router=u(Nt$1);stateManager=u(Df);fragment=ne$1(``);queryParams=ne$1({});path=ne$1(``);serializer=u(_r$1);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof fn$1&&this.updateState()})}updateState(){let{fragment:e,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Ht$1(i)))}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var En$1=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=u(new mi(`href`),{optional:!0});reactiveHref=au(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return re(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return re(this._target)}_target=ne$1(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return re(this._queryParams)}_queryParams=ne$1(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return re(this._fragment)}_fragment=ne$1(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return re(this._queryParamsHandling)}_queryParamsHandling=ne$1(void 0);set state(e){this._state.set(e)}get state(){return re(this._state)}_state=ne$1(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return re(this._info)}_info=ne$1(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return re(this._relativeTo)}_relativeTo=ne$1(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return re(this._preserveFragment)}_preserveFragment=ne$1(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return re(this._skipLocationChange)}_skipLocationChange=ne$1(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return re(this._replaceUrl)}_replaceUrl=ne$1(!1);browserUrl=lo(void 0);isAnchorElement;onChanges=new I;applicationErrorHandler=u(qt$1);options=u(yr$1,{optional:!0});reactiveRouterState=u(xP);constructor(e,i,r,o,s,a){this.router=e,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=s,this.locationStrategy=a;let c=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c===`a`||c===`area`||!!(typeof customElements==`object`&&customElements.get(c)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=ne$1(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(gr$1(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(e,i,r,o,s){let a=this._urlTree();if(a===null||this.isAnchorElement&&(e!==0||i||r||o||s||typeof this.target==`string`&&this.target!=`_self`))return!0;let c=this.browserUrl(),l=g({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},c!==void 0&&{browserUrl:c});return this.router.navigateByUrl(a,l)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,e,i):r.removeAttribute(o,e)}_urlTree=Xe$1(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r===`preserve`||r===`merge`;(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:gr$1(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,i)=>this.computeHref(e)===this.computeHref(i)});get urlTree(){return re(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??``:null}static ɵfac=function(i){return new(i||t)(A(Nt$1),A(zi),Ma(`tabindex`),A(Se),A(O),A(Wn$1))};static ɵdir=M({type:t,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(i,r){i&1&&B$1(`click`,function(s){return r.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),i&2&&oe(`href`,r.reactiveHref(),Bm)(`target`,r._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,F],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,F],replaceUrl:[2,`replaceUrl`,`replaceUrl`,F],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[qe]})}return t})();var tb=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new W$1;link=u(En$1,{optional:!0});constructor(e,i,r,o){this.router=e,this.element=i,this.renderer=r,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(s=>{s instanceof fn$1&&this.update()})}ngAfterContentInit(){R(this.links.changes,R(null)).pipe(ti()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=Ae$1(e).pipe(ti()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(e){if(e==null){this.classes=[];return}let i=Array.isArray(e)?e:e.split(` `);this.classes=i.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||this.routerLinkActiveOptions===null&&!this._isActive||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(i=>{e?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,`aria-current`,this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,`aria-current`),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let i=this.routerLinkActiveOptions;if(i===null)return()=>!1;let r;return i===void 0?r=g({},_s$1):NP(i)?r=i:i.exact??!1?r=g({},Uv):r=g({},_s$1),o=>{let s=o.urlTree;return s?re(zv(s,e,r)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static ɵfac=function(i){return new(i||t)(A(Nt$1),A(O),A(Se),A(Le))};static ɵdir=M({type:t,selectors:[[``,`routerLinkActive`,``]],contentQueries:function(i,r,o){if(i&1&&xt$1(o,En$1,5),i&2){let s;U$1(s=z())&&(r.links=s)}},inputs:{routerLinkActiveOptions:`routerLinkActiveOptions`,ariaCurrentWhenActive:`ariaCurrentWhenActive`,routerLinkActive:`routerLinkActive`},outputs:{isActiveChange:`isActiveChange`},exportAs:[`routerLinkActive`],features:[qe]})}return t})();function NP(t){let n=t;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var Ac=class{};var TP=(()=>{class t{preload(e,i){return i().pipe(Gt$1(()=>R(null)))}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var cE=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,i,r,o){this.router=e,this.injector=i,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(De$1(e=>e instanceof fn$1),hn$1(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,i){let r=[];for(let o of i){o.providers&&!o._injector&&(o._injector=os$1(o.providers,e,``));let s=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(s).injector);let a=o._loadedInjector??s;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(s,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(a,o.children??o._loadedRoutes))}return Ae$1(r).pipe(ti())}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>{if(e.destroyed)return R(null);let r;i.loadChildren&&i.canLoad===void 0?r=Ae$1(this.loader.loadChildren(e,i)):r=R(null);let o=r.pipe(St(s=>s===null?R(void 0):(i._loadedRoutes=s.routes,i._loadedInjector=s.injector,i._loadedNgModuleFactory=s.factory,this.processRoutes(s.injector??e,s.routes))));if(i.loadComponent&&!i._loadedComponent)return Ae$1([o,this.loader.loadComponent(e,i)]).pipe(ti());else return o})}static ɵfac=function(i){return new(i||t)(C(Nt$1),C(Te$1),C(Ac),C(wf))};static ɵprov=E({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var lE=new m(``);var MP=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=vs$1;restoredId=0;store={};isHydrating=u(km,{optional:!0})??!1;urlSerializer=u(_r$1);zone=u(D);viewportScroller=u(zg);transitions=u(Cf);constructor(e){this.options=e,this.options.scrollPositionRestoration||=`disabled`,this.options.anchorScrolling||=`disabled`,this.isHydrating&&u(It$1).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!==`disabled`&&this.viewportScroller.setHistoryScrollRestoration(`manual`),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof vr$1?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof fn$1?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof wi&&e.code===ys$1.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof ws$1)||e.scrollBehavior===`manual`)return;let i={behavior:`instant`};e.position?this.options.scrollPositionRestoration===`top`?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration===`enabled`&&this.viewportScroller.scrollToPosition(e.position,i):e.anchor&&this.options.anchorScrolling===`enabled`?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!==`disabled`&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,i){if(this.isHydrating)return;let r=re(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>we$1(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<`u`&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new ws$1(e,this.lastSource===`popstate`?this.store[this.restoredId]:null,i,r))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static ɵfac=function(i){La()};static ɵprov=E({token:t,factory:t.ɵfac})}return t})();function AP(){return u(Nt$1).routerState.root}function Rc(t,n){return{ɵkind:t,ɵproviders:n}}function RP(){let t=u(ie$1);return n=>{let e=t.get(It$1);if(n!==e.components[0])return;let i=t.get(Nt$1),r=t.get(dE);t.get(nb)===1&&i.initialNavigation(),t.get(hE,null,{optional:!0})?.setUpPreloading(),t.get(lE,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var dE=new m(``,{factory:()=>new I});var nb=new m(``,{factory:()=>1});function uE(){return Rc(2,[{provide:Od,useValue:!0},{provide:nb,useValue:0},Zd(()=>{let n=u(ie$1);return n.get(Rg,Promise.resolve()).then(()=>new Promise(i=>{let r=n.get(Nt$1),o=n.get(dE);Ef(r,()=>{i(!0)}),n.get(Cf).afterPreactivation=()=>(i(!0),o.closed?R(void 0):o),r.initialNavigation()}))})])}function fE(){return Rc(3,[Zd(()=>{u(Nt$1).setUpLocationChangeListener()}),{provide:nb,useValue:2}])}var hE=new m(``);function pE(t){return Rc(0,[{provide:hE,useExisting:cE},{provide:Ac,useExisting:t}])}function mE(t={}){return Rc(8,[{provide:Tc,useFactory:()=>new z0(t,u(Zv,{optional:!0}))}])}function gE(t){bn$1(`NgRouterViewTransitions`);return Rc(9,[{provide:Kv,useValue:rE},{provide:Xv,useValue:g({skipNextTransition:!!t?.skipInitialTransition},t)}])}var vE=[gi,{provide:_r$1,useClass:Ui},Nt$1,br$1,{provide:zi,useFactory:AP},wf];var If=(()=>{class t{constructor(){}static forRoot(e,i){return{ngModule:t,providers:[vE,[],{provide:Ns$1,multi:!0,useValue:e},[],i?.errorHandler?{provide:Jv,useValue:i.errorHandler}:[],{provide:yr$1,useValue:i||{}},i?.useHash?OP():FP(),kP(),i?.preloadingStrategy?pE(i.preloadingStrategy).ɵproviders:[],i?.initialNavigation?PP(i):[],i?.bindToComponentInputs?mE(typeof i.bindToComponentInputs==`object`?i.bindToComponentInputs:{}).ɵproviders:[],i?.enableViewTransitions?gE().ɵproviders:[],LP()]}}static forChild(e){return{ngModule:t,providers:[{provide:Ns$1,multi:!0,useValue:e}]}}static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({})}return t})();function kP(){return{provide:lE,useFactory:()=>{let t=u(zg),n=u(yr$1);return n.scrollOffset&&t.setOffset(n.scrollOffset),new MP(n)}}}function OP(){return{provide:Wn$1,useClass:jg}}function FP(){return{provide:Wn$1,useClass:fu}}function PP(t){return[t.initialNavigation===`disabled`?fE().ɵproviders:[],t.initialNavigation===`enabledBlocking`?uE().ɵproviders:[]]}var eb=new m(``);function LP(){return[{provide:eb,useFactory:RP},{provide:Ba,multi:!0,useExisting:eb}]}var ib;try{ib=typeof Intl<`u`&&Intl.v8BreakIterator}catch(t){ib=!1}var ye=(()=>{class t{_platformId=u(Xr);isBrowser=this._platformId?pD(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||ib)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var Qn$1=(function(t){return t[t.NORMAL=0]=`NORMAL`,t[t.NEGATED=1]=`NEGATED`,t[t.INVERTED=2]=`INVERTED`,t})(Qn$1||{});var xf;var _o;function Nf(){if(_o==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return _o=!1,_o;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)_o=!0;else{let t=Element.prototype.scrollTo;t?_o=!/\{\s*\[native code\]\s*\}/.test(t.toString()):_o=!1}}return _o}function Ts$1(){if(typeof document!=`object`||!document)return Qn$1.NORMAL;if(xf==null){let t=document.createElement(`div`),n=t.style;t.dir=`rtl`,n.width=`1px`,n.overflow=`auto`,n.visibility=`hidden`,n.pointerEvents=`none`,n.position=`absolute`;let e=document.createElement(`div`),i=e.style;i.width=`2px`,i.height=`1px`,t.appendChild(e),document.body.appendChild(t),xf=Qn$1.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,xf=t.scrollLeft===0?Qn$1.NEGATED:Qn$1.INVERTED),t.remove()}return xf}var rb;function bE(){if(rb==null){let t=typeof document<`u`?document.head:null;rb=!!(t&&(t.createShadowRoot||t.attachShadow))}return rb}function ob(t){if(bE()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Kt$1(t){if(t.composedPath)try{return t.composedPath()[0]}catch(n){}return t.target}function sb(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var kc;function _E(){if(kc==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>kc=!0}))}finally{kc=kc||!1}return kc}function Ms$1(t){return _E()?t:!!t.capture}var As$1;var yE=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function ab(){if(As$1)return As$1;if(typeof document!=`object`||!document)return As$1=new Set(yE),As$1;let t=document.createElement(`input`);return As$1=new Set(yE.filter(n=>(t.setAttribute(`type`,n),t.type===n))),As$1}var jP=new m(`cdk-dir-doc`,{providedIn:`root`,factory:()=>u(q)});var VP=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function wE(t){let n=t?.toLowerCase()||``;return n===`auto`&&typeof navigator<`u`&&navigator?.language?VP.test(navigator.language)?`rtl`:`ltr`:n===`rtl`?`rtl`:`ltr`}var Xt$1=(()=>{class t{get value(){return this.valueSignal()}valueSignal=ne$1(`ltr`);change=new W$1;constructor(){let e=u(jP,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(wE(i||r||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var xe$1=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({})}return t})();var BP=[`*`,[[`mat-toolbar-row`]]];var HP=[`*`,`mat-toolbar-row`];var UP=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[`mat-toolbar-row`]],hostAttrs:[1,`mat-toolbar-row`],exportAs:[`matToolbarRow`]})}return t})();var SE=(()=>{class t{_elementRef=u(O);_platform=u(ye);_document=u(q);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`mat-toolbar`]],contentQueries:function(i,r,o){if(i&1&&xt$1(o,UP,5),i&2){let s;U$1(s=z())&&(r._toolbarRows=s)}},hostAttrs:[1,`mat-toolbar`],hostVars:6,hostBindings:function(i,r){i&2&&(gt(r.color?`mat-`+r.color:``),k(`mat-toolbar-multiple-rows`,r._toolbarRows.length>0)(`mat-toolbar-single-row`,r._toolbarRows.length===0))},inputs:{color:`color`},exportAs:[`matToolbar`],ngContentSelectors:HP,decls:2,vars:0,template:function(i,r){i&1&&(ve$1(BP),H$1(0),H$1(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return t})();var cb=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({imports:[xe$1]})}return t})();function Oc(t){return t.buttons===0||t.detail===0}function Fc(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}function wr$1(t,n=0){return CE(t)?Number(t):arguments.length===2?n:0}function CE(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Ut$1(t){return t instanceof O?t.nativeElement:t}var DE=new m(`cdk-input-modality-detector-options`);var EE={ignoreKeys:[18,17,224,91,16]};var IE=650;var lb={passive:!0,capture:!0};var xE=(()=>{class t{_platform=u(ye);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Me$1(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=Kt$1(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<IE||(this._modality.next(Oc(e)?`keyboard`:`mouse`),this._mostRecentTarget=Kt$1(e))};_onTouchstart=e=>{if(Fc(e)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=Kt$1(e)};constructor(){let e=u(D),i=u(q),r=u(DE,{optional:!0});if(this._options=g(g({},EE),r),this.modalityDetected=this._modality.pipe(Pr(1)),this.modalityChanged=this.modalityDetected.pipe(Lo()),this._platform.isBrowser){let o=u(st$1).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,`keydown`,this._onKeydown,lb),o.listen(i,`mousedown`,this._onMousedown,lb),o.listen(i,`touchstart`,this._onTouchstart,lb)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var Pc=(function(t){return t[t.IMMEDIATE=0]=`IMMEDIATE`,t[t.EVENTUAL=1]=`EVENTUAL`,t})(Pc||{});var NE=new m(`cdk-focus-monitor-default-options`);var Tf=Ms$1({passive:!0,capture:!0});var In$1=(()=>{class t{_ngZone=u(D);_platform=u(ye);_inputModalityDetector=u(xE);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(q);_stopInputModalityDetector=new I;constructor(){let e=u(NE,{optional:!0});this._detectionMode=e?.detectionMode||Pc.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=Kt$1(e);for(let r=i;r;r=r.parentElement)e.type===`focus`?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Ut$1(e);if(!this._platform.isBrowser||r.nodeType!==1)return R();let o=ob(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let a={checkChildren:i,subject:new I,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let i=Ut$1(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Ut$1(e);o===this._document.activeElement?this._getClosestElementsInfo(o).forEach(([a,c])=>this._originChanged(a,i,c)):(this._setOrigin(i),typeof o.focus==`function`&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?`mouse`:`program`}_shouldBeAttributedToTouch(e){return this._detectionMode===Pc.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle(`cdk-focused`,!!i),e.classList.toggle(`cdk-touch-focused`,i===`touch`),e.classList.toggle(`cdk-keyboard-focused`,i===`keyboard`),e.classList.toggle(`cdk-mouse-focused`,i===`mouse`),e.classList.toggle(`cdk-program-focused`,i===`program`)}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e===`touch`&&i,this._detectionMode===Pc.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?IE:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=Kt$1(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,Tf),i.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,Tf)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ge$1(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,Tf),i.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,Tf),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!==`mouse`||!i||i===e||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var db=(()=>{class t{_elementRef=u(O);_focusMonitor=u(In$1);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new W$1;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(i=>{this._focusOrigin=i,this.cdkFocusChange.emit(i)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return t})();var Mf=new WeakMap;var dt=(()=>{class t{_appRef;_injector=u(ie$1);_environmentInjector=u(Te$1);load(e){let i=this._appRef=this._appRef||this._injector.get(It$1),r=Mf.get(i);r||(r={loaders:new Set,refs:[]},Mf.set(i,r),i.onDestroy(()=>{Mf.get(i)?.refs.forEach(o=>o.destroy()),Mf.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(lu(e,{environmentInjector:this._environmentInjector})))}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var Rf=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return t})();var Af;function $P(){if(Af===void 0&&(Af=null,typeof window<`u`)){let t=window;if(t.trustedTypes!==void 0)try{Af=t.trustedTypes.createPolicy(`angular#components`,{createHTML:n=>n})}catch(n){console.error(n)}}return Af}function Rs$1(t){return $P()?.createHTML(t)||t}function ks$1(t){return Array.isArray(t)?t:[t]}var TE=new Set;var yo;var Os$1=(()=>{class t{_platform=u(ye);_nonce=u(ar,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):WP}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&GP(e,this._nonce),this._matchMedia(e)}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();function GP(t,n){if(!TE.has(t))try{yo||(yo=document.createElement(`style`),n&&yo.setAttribute(`nonce`,n),yo.setAttribute(`type`,`text/css`),document.head.appendChild(yo)),yo.sheet&&(yo.sheet.insertRule(`@media ${t.replace(/[{}]/g,``)} {body{ }}`,0),TE.add(t))}catch(e){console.error(e)}}function WP(t){return{matches:t===`all`||t===``,media:t,addListener:()=>{},removeListener:()=>{}}}var ub=(()=>{class t{_mediaMatcher=u(Os$1);_zone=u(D);_queries=new Map;_destroySubject=new I;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return ME(ks$1(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let o=Po(ME(ks$1(e)).map(s=>this._registerQuery(s).observable));return o=Ki(o.pipe(Lt$1(1)),o.pipe(Pr(1),Ii(0))),o.pipe(L(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:c,query:l})=>{a.matches=a.matches||c,a.breakpoints[l]=c}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new X(s=>{let a=c=>this._zone.run(()=>s.next(c));return i.addListener(a),()=>{i.removeListener(a)}}).pipe(Qe(i),L(({matches:s})=>({query:e,matches:s})),ge$1(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();function ME(t){return t.map(n=>n.split(`,`)).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function qP(t){if(t.type===`characterData`&&t.target instanceof Comment)return!0;if(t.type===`childList`){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var AE=(()=>{class t{create(e){return typeof MutationObserver>`u`?null:new MutationObserver(e)}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var RE=(()=>{class t{_mutationObserverFactory=u(AE);_observedElements=new Map;_ngZone=u(D);ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=Ut$1(e);return new X(r=>{let s=this._observeElement(i).pipe(L(a=>a.filter(c=>!qP(c))),De$1(a=>!!a.length)).subscribe(a=>{this._ngZone.run(()=>{r.next(a)})});return()=>{s.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new I,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var fb=(()=>{class t{_contentObserver=u(RE);_elementRef=u(O);event=new W$1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=wr$1(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Ii(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,F],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return t})();var kf=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({providers:[AE]})}return t})();var Sr$1=(function(t){return t[t.NONE=0]=`NONE`,t[t.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,t[t.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,t})(Sr$1||{});var kE=`cdk-high-contrast-black-on-white`;var OE=`cdk-high-contrast-white-on-black`;var hb=`cdk-high-contrast-active`;var FE=(()=>{class t{_platform=u(ye);_hasCheckedHighContrastMode=!1;_document=u(q);_breakpointSubscription;constructor(){this._breakpointSubscription=u(ub).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Sr$1.NONE;let e=this._document.createElement(`div`);e.style.backgroundColor=`rgb(1,2,3)`,e.style.position=`absolute`,this._document.body.appendChild(e);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(e):null,o=(r&&r.backgroundColor||``).replace(/ /g,``);switch(e.remove(),o){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return Sr$1.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return Sr$1.BLACK_ON_WHITE}return Sr$1.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(hb,kE,OE),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===Sr$1.BLACK_ON_WHITE?e.add(hb,kE):i===Sr$1.WHITE_ON_BLACK&&e.add(hb,OE)}}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var pb=(()=>{class t{constructor(){u(FE)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({imports:[kf]})}return t})();var YP=200;var Of=class{_letterKeyStream=new I;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new I;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval==`number`?e.debounceInterval:YP;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(ze(e=>this._pressedLetters.push(e)),Ii(n),De$1(()=>this._pressedLetters.length>0),L(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let r=(this._selectedItemIndex+i)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Fs$1(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Ff=class{_items;_activeItemIndex=ne$1(-1);_activeItem=ne$1(null);_wrap=!1;_typeaheadSubscription=fe$1.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Hn$1?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):jn$1(n)&&(this._effectRef=Yt$1(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new I;change=new I;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Of(e,{debounceInterval:typeof n==`number`?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,r=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(r||Fs$1(n,`shiftKey`))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n==`number`?n:e.indexOf(n),r=e[i];this._activeItem.set(r??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let r=(this._activeItemIndex()+n*i+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return jn$1(this._items)?this._items():this._items instanceof Hn$1?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var wo=class extends Ff{_origin=`program`;setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var PE=new Map;var wt$1=class t{_appId=u(ki);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){this._appId!==`ng`&&(n+=this._appId);let i=PE.get(n);return i===void 0?i=0:i++,PE.set(n,i),`${n}${e?t._infix+`-`:``}${i}`}static ɵfac=function(e){return new(e||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})};var jE=` `;function QP(t,n,e){let i=Lf(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(jE)))}function KP(t,n,e){let i=Lf(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(jE)):t.removeAttribute(n)}function Lf(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var VE=`cdk-describedby-message`;var Pf=`cdk-describedby-host`;var gb=0;var BE=(()=>{class t{_platform=u(ye);_document=u(q);_messageRegistry=new Map;_messagesContainer=null;_id=`${gb++}`;constructor(){u(dt).load(Rf),this._id=u(ki)+`-`+gb++}describe(e,i,r){if(!this._canBeDescribed(e,i))return;let o=mb(i,r);typeof i!=`string`?(LE(i,this._id),this._messageRegistry.set(o,{messageElement:i,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(i,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,i,r){if(!i||!this._isElementNode(e))return;let o=mb(i,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof i==`string`){let s=this._messageRegistry.get(o);s&&s.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Pf}="${this._id}"]`);for(let i=0;i<e.length;i++)this._removeCdkDescribedByReferenceIds(e[i]),e[i].removeAttribute(Pf);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,i){let r=this._document.createElement(`div`);LE(r,this._id),r.textContent=e,i&&r.setAttribute(`role`,i),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(mb(e,i),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e=`cdk-describedby-message-container`,i=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<i.length;o++)i[o].remove();let r=this._document.createElement(`div`);r.style.visibility=`hidden`,r.classList.add(e),r.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||r.setAttribute(`platform`,`server`),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let i=Lf(e,`aria-describedby`).filter(r=>r.indexOf(VE)!=0);e.setAttribute(`aria-describedby`,i.join(` `))}_addMessageReference(e,i){let r=this._messageRegistry.get(i);QP(e,`aria-describedby`,r.messageElement.id),e.setAttribute(Pf,this._id),r.referenceCount++}_removeMessageReference(e,i){let r=this._messageRegistry.get(i);r.referenceCount--,KP(e,`aria-describedby`,r.messageElement.id),e.removeAttribute(Pf)}_isElementDescribedByMessage(e,i){let r=Lf(e,`aria-describedby`),o=this._messageRegistry.get(i),s=o&&o.messageElement.id;return!!s&&r.indexOf(s)!=-1}_canBeDescribed(e,i){if(!this._isElementNode(e))return!1;if(i&&typeof i==`object`)return!0;let r=i==null?``:`${i}`.trim(),o=e.getAttribute(`aria-label`);return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();function mb(t,n){return typeof t==`string`?`${n||``}/${t}`:t}function LE(t,n){t.id||(t.id=`${VE}-${n}-${gb++}`)}var XP=new m(`MATERIAL_ANIMATIONS`);var HE=null;function vb(){return u(XP,{optional:!0})?.animationsDisabled||u(va,{optional:!0})===`NoopAnimations`?`di-disabled`:(HE??=u(Os$1).matchMedia(`(prefers-reduced-motion)`).matches,HE?`reduced-motion`:`enabled`)}function ut$1(){return vb()!==`enabled`}function Je$1(t){return t==null?``:typeof t==`string`?t:`${t}px`}function xn$1(t){return t!=null&&`${t}`!=`false`}var Nn$1=(function(t){return t[t.FADING_IN=0]=`FADING_IN`,t[t.VISIBLE=1]=`VISIBLE`,t[t.FADING_OUT=2]=`FADING_OUT`,t[t.HIDDEN=3]=`HIDDEN`,t})(Nn$1||{});var bb=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Nn$1.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}};var UE=Ms$1({passive:!0,capture:!0});var _b=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,UE)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,UE)))}_delegateEventHandler=n=>{let e=Kt$1(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}};var Lc={enterDuration:225,exitDuration:150};var JP=800;var zE=Ms$1({passive:!0,capture:!0});var $E=[`mousedown`,`touchstart`];var GE=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var eL=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return t})();var jc=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new _b;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Ut$1(i)),o&&o.get(dt).load(eL)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=g(g({},Lc),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=i.radius||tL(n,e,r),a=n-r.left,c=e-r.top,l=o.enterDuration,d=document.createElement(`div`);d.classList.add(`mat-ripple-element`),d.style.left=`${a-s}px`,d.style.top=`${c-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),h=f.transitionProperty,p=f.transitionDuration,v=h===`none`||p===`0s`||p===`0s, 0s`||r.width===0&&r.height===0,S=new bb(this,d,i,v);d.style.transform=`scale3d(1, 1, 1)`,S.state=Nn$1.FADING_IN,i.persistent||(this._mostRecentTransientRipple=S);let P=null;return!v&&(l||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let $=()=>{P&&(P.fallbackTimer=null),clearTimeout(ce),this._finishRippleTransition(S)},J=()=>this._destroyRipple(S),ce=setTimeout(J,l+100);d.addEventListener(`transitionend`,$),d.addEventListener(`transitioncancel`,J),P={onTransitionEnd:$,onTransitionCancel:J,fallbackTimer:ce}}),this._activeRipples.set(S,P),(v||!l)&&this._finishRippleTransition(S),S}fadeOutRipple(n){if(n.state===Nn$1.FADING_OUT||n.state===Nn$1.HIDDEN)return;let e=n.element,i=g(g({},Lc),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity=`0`,n.state=Nn$1.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Ut$1(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,$E.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type===`mousedown`?this._onMousedown(n):n.type===`touchstart`?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{GE.forEach(e=>{this._triggerElement.addEventListener(e,this,zE)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Nn$1.FADING_IN?this._startFadeOutTransition(n):n.state===Nn$1.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Nn$1.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Nn$1.HIDDEN,e!==null&&(n.element.removeEventListener(`transitionend`,e.onTransitionEnd),n.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Oc(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+JP;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Fc(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Nn$1.VISIBLE||n.config.terminateOnPointerUp&&n.state===Nn$1.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&($E.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(GE.forEach(e=>n.removeEventListener(e,this,zE)),this._pointerUpEventsRegistered=!1))}};function tL(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var So=new m(`mat-ripple-global-options`);var Co=(()=>{class t{_elementRef=u(O);_animationsDisabled=ut$1();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(D),i=u(ye),r=u(So,{optional:!0}),o=u(ie$1);this._globalOptions=r||{},this._rippleRenderer=new jc(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:g(g(g({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,i,g(g({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,g(g({},this.rippleConfig),e))}static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(i,r){i&2&&k(`mat-ripple-unbounded`,r.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return t})();var nL={capture:!0};var iL=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var yb=`mat-ripple-loader-uninitialized`;var wb=`mat-ripple-loader-class-name`;var WE=`mat-ripple-loader-centered`;var jf=`mat-ripple-loader-disabled`;var Vf=(()=>{class t{_document=u(q);_animationsDisabled=ut$1();_globalRippleOptions=u(So,{optional:!0});_platform=u(ye);_ngZone=u(D);_injector=u(ie$1);_eventCleanups;_hosts=new Map;constructor(){let e=u(st$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>iL.map(i=>e.listen(this._document,i,this._onInteraction,nL)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(yb,this._globalRippleOptions?.namespace??``),(i.className||!e.hasAttribute(wb))&&e.setAttribute(wb,i.className||``),i.centered&&e.setAttribute(WE,``),i.disabled&&e.setAttribute(jf,``)}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(jf,``):e.removeAttribute(jf)}_onInteraction=e=>{let i=Kt$1(e);if(i instanceof HTMLElement){let r=i.closest(`[${yb}="${this._globalRippleOptions?.namespace??``}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(`.mat-ripple`)?.remove();let i=this._document.createElement(`span`);i.classList.add(`mat-ripple`,e.getAttribute(wb)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Lc.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??Lc.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(jf),rippleConfig:{centered:e.hasAttribute(WE),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},c=new jc(a,this._ngZone,i,this._platform,this._injector),l=!a.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:c,hasSetUpEvents:l}),e.removeAttribute(yb)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var Si=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return t})();var rL=[`*`,[[``,`progressIndicator`,``]]];var oL=[`*`,`[progressIndicator]`];function sL(t,n){t&1&&(Ue$1(0,`div`,1),H$1(1,1),$e$1())}var aL=new m(`MAT_BUTTON_CONFIG`);function qE(t){return t==null?void 0:kt$1(t)}var Bf=(()=>{class t{_elementRef=u(O);_ngZone=u(D);_animationsDisabled=ut$1();_config=u(aL,{optional:!0});_focusMonitor=u(In$1);_cleanupClick;_renderer=u(Se);_rippleLoader=u(Vf);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=lo(!1,{transform:F});constructor(){u(dt).load(Si);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e=`program`,i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(i,r){i&2&&(oe(`disabled`,r._getDisabledAttribute())(`aria-disabled`,r._getAriaDisabled())(`tabindex`,r._getTabIndex()),gt(r.color?`mat-`+r.color:``),k(`mat-mdc-button-progress-indicator-shown`,r.showProgress())(`mat-mdc-button-disabled`,r.disabled)(`mat-mdc-button-disabled-interactive`,r.disabledInteractive)(`mat-unthemed`,!r.color)(`_mat-animation-noopable`,r._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,F],disabled:[2,`disabled`,`disabled`,F],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,F],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,F],tabIndex:[2,`tabIndex`,`tabIndex`,qE],_tabindex:[2,`tabindex`,`_tabindex`,qE],showProgress:[1,`showProgress`]}})}return t})();var Vc=(()=>{class t extends Bf{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[_e],ngContentSelectors:oL,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(i,r){i&1&&(ve$1(rL),mt$1(0,`span`,0),H$1(1),le(2,sL,2,0,`div`,1),mt$1(3,`span`,2)(4,`span`,3)),i&2&&(y(2),de$1(r.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return t})();var Hf=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({imports:[xe$1]})}return t})();var ZE=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var QE=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function cL(t,n){t&1&&(Ue$1(0,`div`,2),H$1(1,3),$e$1())}function lL(t,n){t&1&&(Ue$1(0,`div`,2),H$1(1,3),$e$1())}var dL=`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
  border-radius: calc(var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--%NS%mat-fab-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large));
  color: var(--%NS%mat-fab-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--%NS%mat-fab-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--%NS%mat-fab-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-touch-target-size, 48px);
  display: var(--%NS%mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--%NS%mat-fab-small-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium));
  color: var(--%NS%mat-fab-small-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-small-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--%NS%mat-fab-small-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--%NS%mat-fab-small-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-small-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab .mat-focus-indicator::before {
  border-radius: calc(var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-small-touch-target-size, 48px);
  display: var(--%NS%mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--%NS%mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-small-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--%NS%mat-fab-extended-container-elevation-shadow, var(--%NS%mat-sys-level3));
  height: var(--%NS%mat-fab-extended-container-height, 56px);
  border-radius: var(--%NS%mat-fab-extended-container-shape, var(--%NS%mat-sys-corner-large));
  font-family: var(--%NS%mat-fab-extended-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-fab-extended-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-fab-extended-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-fab-extended-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--%NS%mat-fab-extended-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--%NS%mat-fab-extended-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-extended-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`;var YE=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var Uf=(()=>{class t extends Bf{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let e=uL(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?YE.get(this._appearance):null,o=YE.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[_e],ngContentSelectors:QE,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(i,r){i&1&&(ve$1(ZE),mt$1(0,`span`,0),H$1(1),Ue$1(2,`span`,1),H$1(3,1),$e$1(),H$1(4,2),le(5,cL,2,0,`div`,2),mt$1(6,`span`,3)(7,`span`,4)),i&2&&(k(`mdc-button__ripple`,!r._isFab)(`mdc-fab__ripple`,r._isFab),y(5),de$1(r.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return t})();function uL(t){return t.hasAttribute(`mat-raised-button`)?`elevated`:t.hasAttribute(`mat-stroked-button`)?`outlined`:t.hasAttribute(`mat-flat-button`)?`filled`:t.hasAttribute(`mat-button`)?`text`:null}var fL=new m(`mat-mdc-fab-default-options`,{providedIn:`root`,factory:()=>Sb});var Sb={color:`accent`};var KE=(()=>{class t extends Bf{_options=u(fL,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||Sb,this.color=this._options.color||Sb.color}static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`button`,`mat-mini-fab`,``],[`a`,`mat-mini-fab`,``],[`button`,`matMiniFab`,``],[`a`,`matMiniFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mdc-fab--mini`,`mat-mdc-mini-fab`],exportAs:[`matButton`,`matAnchor`],features:[_e],ngContentSelectors:QE,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(i,r){i&1&&(ve$1(ZE),mt$1(0,`span`,0),H$1(1),Ue$1(2,`span`,1),H$1(3,1),$e$1(),H$1(4,2),le(5,lL,2,0,`div`,2),mt$1(6,`span`,3)(7,`span`,4)),i&2&&(k(`mdc-button__ripple`,!r._isFab)(`mdc-fab__ripple`,r._isFab),y(5),de$1(r.showProgress()?5:-1))},styles:[dL],encapsulation:2})}return t})();var Cb=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({imports:[Hf,xe$1]})}return t})();function XE(t){return Error(`Unable to find icon with the name "${t}"`)}function hL(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function JE(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function eI(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var $i=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}};var nI=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=[`material-icons`,`mat-ligature-font`];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace(``,e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace(``,e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new $i(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let s=this._sanitizer.sanitize(Ce.HTML,r);if(!s)throw eI(r);let a=Rs$1(s);return this._addSvgIconConfig(e,i,new $i(``,a,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace(``,e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace(``,e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new $i(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Ce.HTML,i);if(!o)throw eI(i);let s=Rs$1(o);return this._addSvgIconSetConfig(e,new $i(``,s,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Ce.RESOURCE_URL,e);if(!i)throw JE(e);let r=this._cachedIconsByUrl.get(i);return r?R($f(r)):this._loadSvgIconFromConfig(new $i(e,null)).pipe(ze(o=>this._cachedIconsByUrl.set(i,o)),L(o=>$f(o)))}getNamedSvgIcon(e,i=``){let r=tI(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(i);return s?this._getSvgFromIconSetConfigs(e,s):Or(XE(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?R($f(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(L(i=>$f(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return R(r);return Qs$1(i.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Gt$1(a=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(Ce.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(l)),R(null)})))).pipe(L(()=>{let s=this._extractIconWithNameFromAnySet(e,i);if(!s)throw XE(e);return s}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ze(i=>e.svgText=i),L(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?R(null):this._fetchIcon(e).pipe(ze(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute(`id`),s.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(Rs$1(`<svg></svg>`));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(e){let i=this._document.createElement(`DIV`);i.innerHTML=e;let r=i.querySelector(`svg`);if(!r)throw Error(`<svg> tag not found`);return r}_toSvgElement(e){let i=this._svgElementFromString(Rs$1(`<svg></svg>`)),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!==`id`&&i.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute(`fit`,``),e.setAttribute(`height`,`100%`),e.setAttribute(`width`,`100%`),e.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),e.setAttribute(`focusable`,`false`),i&&i.viewBox&&e.setAttribute(`viewBox`,i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw hL();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let s=this._sanitizer.sanitize(Ce.RESOURCE_URL,i);if(!s)throw JE(i);let a=this._inProgressUrlFetches.get(s);if(a)return a;let c=this._httpClient.get(s,{responseType:`text`,withCredentials:o}).pipe(L(l=>Rs$1(l)),Xi(()=>this._inProgressUrlFetches.delete(s)),Xs$1());return this._inProgressUrlFetches.set(s,c),c}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(tI(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return pL(o)?new $i(o.url,null,o.options):new $i(o,null)}}static ɵfac=function(i){return new(i||t)(C(fr$1,8),C(av),C(q,8),C(Mt$1))};static ɵprov=E({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();function $f(t){return t.cloneNode(!0)}function tI(t,n){return t+`:`+n}function pL(t){return!!(t.url&&t.options)}var mL=[`*`];var gL=new m(`MAT_ICON_DEFAULT_OPTIONS`);var vL=new m(`mat-icon-location`,{providedIn:`root`,factory:()=>{let t=u(q),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:``}}});var iI=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var bL=iI.map(t=>`[${t}]`).join(`, `);var _L=/^url\(['"]?#(.*?)['"]?\)$/;var Ps$1=(()=>{class t{_elementRef=u(O);_iconRegistry=u(nI);_location=u(vL);_errorHandler=u(Mt$1);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=fe$1.EMPTY;constructor(){let e=u(new mi(`aria-hidden`),{optional:!0}),i=u(gL,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(e){if(!e)return[``,``];let i=e.split(`:`);switch(i.length){case 1:return[``,i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()===`svg`)&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e==`string`?e.trim().split(` `)[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(bL),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)iI.forEach(s=>{let a=i[o],c=a.getAttribute(s),l=c?c.match(_L):null;if(l){let d=r.get(a);d||(d=[],r.set(a,d)),d.push({name:s,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(Lt$1(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(i,r){i&2&&(oe(`data-mat-icon-type`,r._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,r._svgName||r.fontIcon)(`data-mat-icon-namespace`,r._svgNamespace||r.fontSet)(`fontIcon`,r._usingFontIcon()?r.fontIcon:null),gt(r.color?`mat-`+r.color:``),k(`mat-icon-inline`,r.inline)(`mat-icon-no-color`,r.color!==`primary`&&r.color!==`accent`&&r.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,F],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:mL,decls:1,vars:0,template:function(i,r){i&1&&(ve$1(),H$1(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return t})();var Db=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({imports:[xe$1]})}return t})();var yL=[`*`];var wL=[[[``,`mat-card-avatar`,``],[``,`matCardAvatar`,``]],[[`mat-card-title`],[`mat-card-subtitle`],[``,`mat-card-title`,``],[``,`mat-card-subtitle`,``],[``,`matCardTitle`,``],[``,`matCardSubtitle`,``]],`*`];var SL=[`[mat-card-avatar], [matCardAvatar]`,`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,`*`];var CL=new m(`MAT_CARD_CONFIG`);var rI=(()=>{class t{appearance;constructor(){let e=u(CL,{optional:!0});this.appearance=e?.appearance||`raised`}static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(i,r){i&2&&k(`mat-mdc-card-outlined`,r.appearance===`outlined`)(`mdc-card--outlined`,r.appearance===`outlined`)(`mat-mdc-card-filled`,r.appearance===`filled`)(`mdc-card--filled`,r.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:yL,decls:1,vars:0,template:function(i,r){i&1&&(ve$1(),H$1(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})}return t})();var VJ=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[`mat-card-title`],[``,`mat-card-title`,``],[``,`matCardTitle`,``]],hostAttrs:[1,`mat-mdc-card-title`]})}return t})();var oI=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[`mat-card-content`]],hostAttrs:[1,`mat-mdc-card-content`]})}return t})();var BJ=(()=>{class t{align=`start`;static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[`mat-card-actions`]],hostAttrs:[1,`mat-mdc-card-actions`,`mdc-card__actions`],hostVars:2,hostBindings:function(i,r){i&2&&k(`mat-mdc-card-actions-align-end`,r.align===`end`)},inputs:{align:`align`},exportAs:[`matCardActions`]})}return t})();var HJ=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`mat-card-header`]],hostAttrs:[1,`mat-mdc-card-header`],ngContentSelectors:SL,decls:4,vars:0,consts:[[1,`mat-mdc-card-header-text`]],template:function(i,r){i&1&&(ve$1(wL),H$1(0),Ue$1(1,`div`,0),H$1(2,1),$e$1(),H$1(3,2))},encapsulation:2})}return t})();var Ib=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({imports:[xe$1]})}return t})();var sI=new m(``);var Gf=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}isSignalErrorState(e){if(!e)return!1;let i=e().invalid(),r=e().touched();return i&&r}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var Wf=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,e,i,r,o){this._defaultMatcher=n,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o,e?jn$1(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==n&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(n){if(this.formField&&n?.isSignalErrorState)return n.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,i=this.ngControl?this.ngControl.control:null;return n?.isErrorState(i,e)??!1}};var xb=class{_box;_destroyed=new I;_resizeSubject=new I;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new X(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(De$1(e=>e.some(i=>i.target===n)),Tl({bufferSize:1,refCount:!0}),ge$1(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var qf=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(D);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||`content-box`;return this._observers.has(r)||this._observers.set(r,new xb(r)),this._observers.get(r).observe(e)}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var IL=[`notch`];var xL=[`*`];var aI=[`iconPrefixContainer`];var cI=[`textPrefixContainer`];var lI=[`iconSuffixContainer`];var dI=[`textSuffixContainer`];var NL=[`textField`];var TL=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var ML=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function AL(t,n){t&1&&be$1(0,`span`,21)}function RL(t,n){if(t&1&&(b(0,`label`,20),H$1(1,1),le(2,AL,1,0,`span`,21),_$1()),t&2){let e=pe$1(2);ee$1(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),oe(`for`,e._control.disableAutomaticLabeling?null:e._control.id),y(2),de$1(!e.hideRequiredMarker&&e._control.required?2:-1)}}function kL(t,n){if(t&1&&le(0,RL,3,5,`label`,20),t&2)de$1(pe$1()._hasFloatingLabel()?0:-1)}function OL(t,n){t&1&&be$1(0,`div`,7)}function FL(t,n){}function PL(t,n){if(t&1&&_n$1(0,FL,0,0,`ng-template`,13),t&2){pe$1(2);ee$1(`ngTemplateOutlet`,Pi(1))}}function LL(t,n){if(t&1&&(b(0,`div`,9),le(1,PL,1,1,null,13),_$1()),t&2){let e=pe$1();ee$1(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),y(),de$1(e._forceDisplayInfixLabel()?-1:1)}}function jL(t,n){t&1&&(b(0,`div`,10,2),H$1(2,2),_$1())}function VL(t,n){t&1&&(b(0,`div`,11,3),H$1(2,3),_$1())}function BL(t,n){}function HL(t,n){if(t&1&&_n$1(0,BL,0,0,`ng-template`,13),t&2){pe$1();ee$1(`ngTemplateOutlet`,Pi(1))}}function UL(t,n){t&1&&(b(0,`div`,14,4),H$1(2,4),_$1())}function zL(t,n){t&1&&(b(0,`div`,15,5),H$1(2,5),_$1())}function $L(t,n){t&1&&be$1(0,`div`,16)}function GL(t,n){t&1&&(b(0,`div`,18),H$1(1,6),_$1())}function WL(t,n){if(t&1&&(b(0,`mat-hint`,22),j(1),_$1()),t&2){let e=pe$1(2);ee$1(`id`,e._hintLabelId),y(),ct(e.hintLabel)}}function qL(t,n){if(t&1&&(b(0,`div`,19),le(1,WL,2,2,`mat-hint`,22),H$1(2,7),be$1(3,`div`,23),H$1(4,8),_$1()),t&2){let e=pe$1();y(),de$1(e.hintLabel?1:-1)}}var Nb=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[`mat-label`]]})}return t})();var YL=new m(`MatError`);var Tb=(()=>{class t{align=`start`;id=u(wt$1).getId(`mat-mdc-hint-`);static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(i,r){i&2&&(wn$1(`id`,r.id),oe(`align`,null),k(`mat-mdc-form-field-hint-end`,r.align===`end`))},inputs:{align:`align`,id:`id`}})}return t})();var ZL=new m(`MatPrefix`);var QL=new m(`MatSuffix`);var vI=new m(`FloatingLabelParent`);var uI=(()=>{class t{_elementRef=u(O);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(qf);_ngZone=u(D);_parent=u(vI);_resizeSubscription=new fe$1;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return KL(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(i,r){i&2&&k(`mdc-floating-label--float-above`,r.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return t})();function KL(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var fI=`mdc-line-ripple--active`;var Yf=`mdc-line-ripple--deactivating`;var hI=(()=>{class t{_elementRef=u(O);_cleanupTransitionEnd;constructor(){let e=u(D),i=u(Se);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Yf),e.add(fI)}deactivate(){this._elementRef.nativeElement.classList.add(Yf)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(Yf);e.propertyName===`opacity`&&r&&i.remove(fI,Yf)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return t})();var pI=(()=>{class t{_elementRef=u(O);_ngZone=u(D);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(`.mdc-floating-label`);i?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(i.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width=``:i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(i,r){if(i&1&&_t(IL,5),i&2){let o;U$1(o=z())&&(r._notch=o.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(i,r){i&2&&k(`mdc-notched-outline--notched`,r.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:xL,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(i,r){i&1&&(ve$1(),mt$1(0,`div`,1),Ue$1(1,`div`,2,0),H$1(3),$e$1(),mt$1(4,`div`,3))},encapsulation:2})}return t})();var Mb=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t})}return t})();var Ab=new m(`MatFormField`);var XL=new m(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var mI=`fill`;var JL=`auto`;var gI=`fixed`;var ej=`translateY(-50%)`;var bI=(()=>{class t{_elementRef=u(O);_changeDetectorRef=u(Le);_platform=u(ye);_idGenerator=u(wt$1);_ngZone=u(D);_defaults=u(XL,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=qa(`iconPrefixContainer`);_textPrefixContainerSignal=qa(`textPrefixContainer`);_iconSuffixContainerSignal=qa(`iconSuffixContainer`);_textSuffixContainerSignal=qa(`textSuffixContainer`);_prefixSuffixContainers=Xe$1(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=UC(Nb);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=xn$1(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||JL}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||mI;this._appearanceSignal.set(i)}_appearanceSignal=ne$1(mI);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||gI}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||gI}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new I;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ut$1();constructor(){let e=this._defaults,i=u(Xt$1);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Yt$1(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Xe$1(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let i=this._control,r=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Qe([void 0,void 0]),L(()=>[i.errorState,i.userAriaDescribedBy]),Nl(),De$1(([[o,s],[a,c]])=>o!==a||s!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(ge$1(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),ni(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){Tg({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Xe$1(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(a=>a.align===`start`):null,s=this._hintChildren?this._hintChildren.find(a=>a.align===`end`):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=i?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,l=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${ej} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${s+a}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,s+a+c+l]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`mat-form-field`]],contentQueries:function(i,r,o){if(i&1&&(nu(o,r._labelChild,Nb,5),xt$1(o,Mb,5)(o,ZL,5)(o,QL,5)(o,YL,5)(o,Tb,5)),i&2){ru();let s;U$1(s=z())&&(r._formFieldControl=s.first),U$1(s=z())&&(r._prefixChildren=s),U$1(s=z())&&(r._suffixChildren=s),U$1(s=z())&&(r._errorChildren=s),U$1(s=z())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(iu(r._iconPrefixContainerSignal,aI,5)(r._textPrefixContainerSignal,cI,5)(r._iconSuffixContainerSignal,lI,5)(r._textSuffixContainerSignal,dI,5),_t(NL,5)(aI,5)(cI,5)(lI,5)(dI,5)(uI,5)(pI,5)(hI,5)),i&2){ru(4);let o;U$1(o=z())&&(r._textField=o.first),U$1(o=z())&&(r._iconPrefixContainer=o.first),U$1(o=z())&&(r._textPrefixContainer=o.first),U$1(o=z())&&(r._iconSuffixContainer=o.first),U$1(o=z())&&(r._textSuffixContainer=o.first),U$1(o=z())&&(r._floatingLabel=o.first),U$1(o=z())&&(r._notchedOutline=o.first),U$1(o=z())&&(r._lineRipple=o.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(i,r){i&2&&k(`mat-mdc-form-field-label-always-float`,r._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,r._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,r._hasIconSuffix)(`mat-form-field-invalid`,r._control.errorState)(`mat-form-field-disabled`,r._control.disabled)(`mat-form-field-autofilled`,r._control.autofilled)(`mat-form-field-appearance-fill`,r.appearance==`fill`)(`mat-form-field-appearance-outline`,r.appearance==`outline`)(`mat-form-field-hide-placeholder`,r._hasFloatingLabel()&&!r._shouldLabelFloat())(`mat-primary`,r.color!==`accent`&&r.color!==`warn`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`ng-untouched`,r._shouldForward(`untouched`))(`ng-touched`,r._shouldForward(`touched`))(`ng-pristine`,r._shouldForward(`pristine`))(`ng-dirty`,r._shouldForward(`dirty`))(`ng-valid`,r._shouldForward(`valid`))(`ng-invalid`,r._shouldForward(`invalid`))(`ng-pending`,r._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[je([{provide:Ab,useExisting:t},{provide:vI,useExisting:t}])],ngContentSelectors:ML,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(i,r){if(i&1&&(ve$1(TL),_n$1(0,kL,1,1,`ng-template`,null,0,yg),b(2,`div`,6,1),B$1(`click`,function(s){return r._control.onContainerClick(s)}),le(4,OL,1,0,`div`,7),b(5,`div`,8),le(6,LL,2,2,`div`,9),le(7,jL,3,0,`div`,10),le(8,VL,3,0,`div`,11),b(9,`div`,12),le(10,HL,1,1,null,13),H$1(11),_$1(),le(12,UL,3,0,`div`,14),le(13,zL,3,0,`div`,15),_$1(),le(14,$L,1,0,`div`,16),_$1(),b(15,`div`,17),le(16,GL,2,0,`div`,18)(17,qL,5,1,`div`,19),_$1()),i&2){let o;y(2),k(`mdc-text-field--filled`,!r._hasOutline())(`mdc-text-field--outlined`,r._hasOutline())(`mdc-text-field--no-label`,!r._hasFloatingLabel())(`mdc-text-field--disabled`,r._control.disabled)(`mdc-text-field--invalid`,r._control.errorState),y(2),de$1(!r._hasOutline()&&!r._control.disabled?4:-1),y(2),de$1(r._hasOutline()?6:-1),y(),de$1(r._hasIconPrefix?7:-1),y(),de$1(r._hasTextPrefix?8:-1),y(2),de$1(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),y(2),de$1(r._hasTextSuffix?12:-1),y(),de$1(r._hasIconSuffix?13:-1),y(),de$1(r._hasOutline()?-1:14),y(),k(`mat-mdc-form-field-subscript-dynamic-size`,r.subscriptSizing===`dynamic`);let s=r._getSubscriptMessageType();y(),de$1((o=s)===`error`?16:o===`hint`?17:-1)}},dependencies:[uI,pI,Vg,hI,Tb],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return t})();var SI=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var CI=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function tj(t,n){t&1&&(b(0,`span`,3),H$1(1,1),_$1())}function nj(t,n){t&1&&(b(0,`span`,6),H$1(1,2),_$1())}function ij(t,n){t&1&&(b(0,`span`,3),H$1(1,1),b(2,`span`,7),qo(),b(3,`svg`,8),be$1(4,`path`,9),_$1()()())}function rj(t,n){t&1&&(b(0,`span`,6),H$1(1,2),_$1())}var oj=`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`;var DI=[`*`];var sj=`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`;var Ob=new m(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var _I=new m(`MatChipAvatar`);var yI=new m(`MatChipTrailingIcon`);var wI=new m(`MatChipEdit`);var Rb=new m(`MatChipRemove`);var Fb=new m(`MatChip`);var EI=(()=>{class t{_elementRef=u(O);_parentChip=u(Fb);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){u(dt).load(Si),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(i,r){i&2&&(oe(`disabled`,r._getDisabledAttribute())(`aria-disabled`,r.disabled),k(`mdc-evolution-chip__action--primary`,r._isPrimary)(`mdc-evolution-chip__action--secondary`,!r._isPrimary)(`mdc-evolution-chip__action--trailing`,!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,F],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?-1:kt$1(e)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return t})();var Pb=(()=>{class t extends EI{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let e;return function(r){return(e||(e=ht(t)))(r||t)}})();static ɵdir=M({type:t,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(i,r){i&1&&B$1(`click`,function(s){return r._handleClick(s)})(`keydown`,function(s){return r._handleKeydown(s)}),i&2&&(oe(`tabindex`,r._getTabindex()),k(`mdc-evolution-chip__action--presentational`,!1))},features:[_e]})}return t})();var Zee=(()=>{class t extends Pb{_isPrimary=!1;_handleClick(e){this.disabled||(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&(e.stopPropagation(),e.preventDefault(),this._parentChip.remove())}static ɵfac=(()=>{let e;return function(r){return(e||(e=ht(t)))(r||t)}})();static ɵdir=M({type:t,selectors:[[``,`matChipRemove`,``]],hostAttrs:[`role`,`button`,1,`mat-mdc-chip-remove`,`mat-mdc-chip-trailing-icon`,`mat-focus-indicator`,`mdc-evolution-chip__icon`,`mdc-evolution-chip__icon--trailing`],hostVars:1,hostBindings:function(i,r){i&2&&oe(`aria-hidden`,null)},features:[je([{provide:Rb,useExisting:t}]),_e]})}return t})();var Bc=(()=>{class t{_changeDetectorRef=u(Le);_elementRef=u(O);_tagName=u(HC);_ngZone=u(D);_focusMonitor=u(In$1);_globalRippleOptions=u(So,{optional:!0});_document=u(q);_onFocus=new I;_onBlur=new I;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=ut$1();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=u(wt$1).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new W$1;destroyed=new W$1;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=u(Vf);_injector=u(ie$1);constructor(){let e=u(dt);e.load(Si),e.load(Rf),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=ni(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(i=>{let r=i._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let i=e!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(i,r,o){if(i&1&&xt$1(o,_I,5)(o,wI,5)(o,yI,5)(o,Rb,5)(o,_I,5)(o,yI,5)(o,wI,5)(o,Rb,5),i&2){let s;U$1(s=z())&&(r.leadingIcon=s.first),U$1(s=z())&&(r.editIcon=s.first),U$1(s=z())&&(r.trailingIcon=s.first),U$1(s=z())&&(r.removeIcon=s.first),U$1(s=z())&&(r._allLeadingIcons=s),U$1(s=z())&&(r._allTrailingIcons=s),U$1(s=z())&&(r._allEditIcons=s),U$1(s=z())&&(r._allRemoveIcons=s)}},viewQuery:function(i,r){if(i&1&&_t(Pb,5),i&2){let o;U$1(o=z())&&(r.primaryAction=o.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(i,r){i&1&&B$1(`keydown`,function(s){return r._handleKeydown(s)}),i&2&&(wn$1(`id`,r.id),oe(`role`,r.role)(`aria-label`,r.ariaLabel),gt(`mat-`+(r.color||`primary`)),k(`mdc-evolution-chip`,!r._isBasicChip)(`mdc-evolution-chip--disabled`,r.disabled)(`mdc-evolution-chip--with-trailing-action`,r._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,r.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,r.leadingIcon)(`mdc-evolution-chip--with-avatar`,r.leadingIcon)(`mat-mdc-chip-with-avatar`,r.leadingIcon)(`mat-mdc-chip-highlighted`,r.highlighted)(`mat-mdc-chip-disabled`,r.disabled)(`mat-mdc-basic-chip`,r._isBasicChip)(`mat-mdc-standard-chip`,!r._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,r._hasTrailingIcon())(`_mat-animation-noopable`,r._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,F],highlighted:[2,`highlighted`,`highlighted`,F],disableRipple:[2,`disableRipple`,`disableRipple`,F],disabled:[2,`disabled`,`disabled`,F]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[je([{provide:Fb,useExisting:t}])],ngContentSelectors:CI,decls:8,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(i,r){i&1&&(ve$1(SI),be$1(0,`span`,0),b(1,`span`,1)(2,`span`,2),le(3,tj,2,0,`span`,3),b(4,`span`,4),H$1(5),be$1(6,`span`,5),_$1()()(),le(7,nj,2,0,`span`,6)),i&2&&(y(3),de$1(r.leadingIcon?3:-1),y(4),de$1(r._hasTrailingIcon()?7:-1))},dependencies:[EI],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})}return t})();var aj=(()=>{class t extends Bc{_defaultOptions=u(Ob,{optional:!0});chipListSelectable=!0;_chipListMultiple=!1;_chipListHideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get selectable(){return this._selectable&&this.chipListSelectable}set selectable(e){this._selectable=e,this._changeDetectorRef.markForCheck()}_selectable=!0;get selected(){return this._selected}set selected(e){this._setSelectedState(e,!1,!0)}_selected=!1;get ariaSelected(){return this.selectable?this.selected.toString():null}basicChipAttrName=`mat-basic-chip-option`;selectionChange=new W$1;ngOnInit(){super.ngOnInit(),this.role=`presentation`}select(){this._setSelectedState(!0,!1,!0)}deselect(){this._setSelectedState(!1,!1,!0)}selectViaInteraction(){this._setSelectedState(!0,!0,!0)}toggleSelected(e=!1){return this._setSelectedState(!this.selected,e,!0),this.selected}_handlePrimaryActionInteraction(){this.disabled||(this.focus(),this.selectable&&this.toggleSelected(!0))}_hasLeadingGraphic(){return this.leadingIcon?!0:!this._chipListHideSingleSelectionIndicator||this._chipListMultiple}_setSelectedState(e,i,r){e!==this.selected&&(this._selected=e,r&&this.selectionChange.emit({source:this,isUserInput:i,selected:this.selected}),this._changeDetectorRef.markForCheck())}static ɵfac=(()=>{let e;return function(r){return(e||(e=ht(t)))(r||t)}})();static ɵcmp=T({type:t,selectors:[[`mat-basic-chip-option`],[``,`mat-basic-chip-option`,``],[`mat-chip-option`],[``,`mat-chip-option`,``]],hostAttrs:[1,`mat-mdc-chip`,`mat-mdc-chip-option`],hostVars:37,hostBindings:function(i,r){i&2&&(wn$1(`id`,r.id),oe(`tabindex`,null)(`aria-label`,null)(`aria-description`,null)(`role`,r.role),k(`mdc-evolution-chip`,!r._isBasicChip)(`mdc-evolution-chip--filter`,!r._isBasicChip)(`mdc-evolution-chip--selectable`,!r._isBasicChip)(`mat-mdc-chip-selected`,r.selected)(`mat-mdc-chip-multiple`,r._chipListMultiple)(`mat-mdc-chip-disabled`,r.disabled)(`mat-mdc-chip-with-avatar`,r.leadingIcon)(`mdc-evolution-chip--disabled`,r.disabled)(`mdc-evolution-chip--selected`,r.selected)(`mdc-evolution-chip--selecting`,!r._animationsDisabled)(`mdc-evolution-chip--with-trailing-action`,r._hasTrailingIcon())(`mdc-evolution-chip--with-primary-icon`,r.leadingIcon)(`mdc-evolution-chip--with-primary-graphic`,r._hasLeadingGraphic())(`mdc-evolution-chip--with-avatar`,r.leadingIcon)(`mat-mdc-chip-highlighted`,r.highlighted)(`mat-mdc-chip-with-trailing-icon`,r._hasTrailingIcon()))},inputs:{selectable:[2,`selectable`,`selectable`,F],selected:[2,`selected`,`selected`,F]},outputs:{selectionChange:`selectionChange`},features:[je([{provide:Bc,useExisting:t},{provide:Fb,useExisting:t}]),_e],ngContentSelectors:CI,decls:8,vars:6,consts:[[1,`mat-mdc-chip-focus-overlay`],[`role`,`presentation`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipAction`,``,`role`,`option`,3,`_allowFocusWhenDisabled`],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[`role`,`presentation`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`],[1,`mdc-evolution-chip__checkmark`],[`viewBox`,`-2 -3 30 30`,`focusable`,`false`,`aria-hidden`,`true`,1,`mdc-evolution-chip__checkmark-svg`],[`fill`,`none`,`stroke`,`currentColor`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-evolution-chip__checkmark-path`]],template:function(i,r){i&1&&(ve$1(SI),be$1(0,`span`,0),b(1,`span`,1)(2,`button`,2),le(3,ij,5,0,`span`,3),b(4,`span`,4),H$1(5),be$1(6,`span`,5),_$1()()(),le(7,rj,2,0,`span`,6)),i&2&&(y(2),ee$1(`_allowFocusWhenDisabled`,!0),oe(`aria-description`,r.ariaDescription)(`aria-label`,r.ariaLabel)(`aria-selected`,r.ariaSelected),y(),de$1(r._hasLeadingGraphic()?3:-1),y(4),de$1(r._hasTrailingIcon()?7:-1))},dependencies:[Pb],styles:[oj],encapsulation:2})}return t})();var Lb=(()=>{class t{_elementRef=u(O);_changeDetectorRef=u(Le);_dir=u(Xt$1,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new I;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Hn$1;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Qe(null),Ze$1(()=>ni(...this._chips.map(e))))}_originatesFromChip(e){let i=e.target;for(;i&&i!==this._elementRef.nativeElement;){if(i.classList.contains(`mat-mdc-chip`))return!0;i=i.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Qe(this._chips)).subscribe(e=>{let i=[];e.forEach(r=>r._getActions().forEach(o=>i.push(o))),this._chipActions.reset(i),this._chipActions.notifyOnChanges()}),this._keyManager=new wo(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(ge$1(this._destroyed)).subscribe(({chip:e})=>{let i=e._getSourceAction(document.activeElement);i&&this._keyManager.updateActiveItem(i)}),this._dir?.change.pipe(ge$1(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Qe(null),ge$1(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(ge$1(this._destroyed)).subscribe(e=>{let r=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),s=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),a=o||s;this._isValidIndex(r)&&a&&(this._lastDestroyedFocusedChipIndex=r)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),i=this._chips.toArray()[e];i.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():i.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`mat-chip-set`]],contentQueries:function(i,r,o){if(i&1&&xt$1(o,Bc,5),i&2){let s;U$1(s=z())&&(r._chips=s)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(i,r){i&1&&B$1(`keydown`,function(s){return r._handleKeydown(s)}),i&2&&oe(`role`,r.role)},inputs:{disabled:[2,`disabled`,`disabled`,F],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:kt$1(e)]},ngContentSelectors:DI,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(i,r){i&1&&(ve$1(),Ue$1(0,`div`,0),H$1(1),$e$1())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})}return t})();var kb=class{source;value;constructor(n,e){this.source=n,this.value=e}};var cj={provide:fo,useExisting:At$1(()=>lj),multi:!0};var lj=(()=>{class t extends Lb{_onTouched=()=>{};_onChange=()=>{};_defaultRole=`listbox`;_defaultOptions=u(Ob,{optional:!0});get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._syncListboxProperties()}_multiple=!1;get selected(){let e=this._chips.toArray().filter(i=>i.selected);return this.multiple?e:e[0]}ariaOrientation=`horizontal`;get selectable(){return this._selectable}set selectable(e){this._selectable=e,this._syncListboxProperties()}_selectable=!0;compareWith=(e,i)=>e===i;required=!1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncListboxProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get chipSelectionChanges(){return this._getChipStream(e=>e.selectionChange)}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}get value(){return this._value}set value(e){this._chips&&this._chips.length&&this._setSelectionByValue(e,!1),this._value=e}_value;change=new W$1;_chips=void 0;ngAfterContentInit(){this._chips.changes.pipe(Qe(null),ge$1(this._destroyed)).subscribe(()=>{this.value!==void 0&&Promise.resolve().then(()=>{this._setSelectionByValue(this.value,!1)}),this._syncListboxProperties()}),this.chipBlurChanges.pipe(ge$1(this._destroyed)).subscribe(()=>this._blur()),this.chipSelectionChanges.pipe(ge$1(this._destroyed)).subscribe(e=>{this.multiple||this._chips.forEach(i=>{i!==e.source&&i._setSelectedState(!1,!1,!1)}),e.isUserInput&&this._propagateChanges()})}focus(){if(this.disabled)return;let e=this._getFirstSelectedChip();e&&!e.disabled?e.focus():this._chips.length>0?this._keyManager.setFirstItemActive():this._elementRef.nativeElement.focus()}writeValue(e){e!=null?this.value=e:this.value=void 0}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_setSelectionByValue(e,i=!0){this._clearSelection(),Array.isArray(e)?e.forEach(r=>this._selectValue(r,i)):this._selectValue(e,i)}_blur(){this.disabled||setTimeout(()=>{this.focused||this._markAsTouched()})}_keydown(e){e.keyCode===9&&super._allowFocusEscape()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck()}_propagateChanges(){let e=null;Array.isArray(this.selected)?e=this.selected.map(i=>i.value):e=this.selected?this.selected.value:void 0,this._value=e,this.change.emit(new kb(this,e)),this._onChange(e),this._changeDetectorRef.markForCheck()}_clearSelection(e){this._chips.forEach(i=>{i!==e&&i.deselect()})}_selectValue(e,i){let r=this._chips.find(o=>o.value!=null&&this.compareWith(o.value,e));return r&&(i?r.selectViaInteraction():r.select()),r}_syncListboxProperties(){this._chips&&Promise.resolve().then(()=>{this._chips.forEach(e=>{e._chipListMultiple=this.multiple,e.chipListSelectable=this._selectable,e._chipListHideSingleSelectionIndicator=this.hideSingleSelectionIndicator,e._changeDetectorRef.markForCheck()})})}_getFirstSelectedChip(){return Array.isArray(this.selected)?this.selected.length?this.selected[0]:void 0:this.selected}_skipPredicate(e){return!1}static ɵfac=(()=>{let e;return function(r){return(e||(e=ht(t)))(r||t)}})();static ɵcmp=T({type:t,selectors:[[`mat-chip-listbox`]],contentQueries:function(i,r,o){if(i&1&&xt$1(o,aj,5),i&2){let s;U$1(s=z())&&(r._chips=s)}},hostAttrs:[1,`mdc-evolution-chip-set`,`mat-mdc-chip-listbox`],hostVars:10,hostBindings:function(i,r){i&1&&B$1(`focus`,function(){return r.focus()})(`blur`,function(){return r._blur()})(`keydown`,function(s){return r._keydown(s)}),i&2&&(wn$1(`tabIndex`,r.disabled||r.empty?-1:r.tabIndex),oe(`role`,r.role)(`aria-required`,r.role?r.required:null)(`aria-disabled`,r.disabled.toString())(`aria-multiselectable`,r.multiple)(`aria-orientation`,r.ariaOrientation),k(`mat-mdc-chip-list-disabled`,r.disabled)(`mat-mdc-chip-list-required`,r.required))},inputs:{multiple:[2,`multiple`,`multiple`,F],ariaOrientation:[0,`aria-orientation`,`ariaOrientation`],selectable:[2,`selectable`,`selectable`,F],compareWith:`compareWith`,required:[2,`required`,`required`,F],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,F],value:`value`},outputs:{change:`change`},features:[je([cj]),_e],ngContentSelectors:DI,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(i,r){i&1&&(ve$1(),Ue$1(0,`div`,0),H$1(1),$e$1())},styles:[sj],encapsulation:2})}return t})();var jb=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({providers:[Gf,{provide:Ob,useValue:{separatorKeyCodes:[13]}}],imports:[Hf,xe$1]})}return t})();var Uc=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}};var zc=class extends Uc{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,i,r,o,s){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null,this.directives=s||null}};var Do=class extends Uc{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}};var Vb=class extends Uc{element;constructor(n){super(),this.element=n instanceof O?n.nativeElement:n}};var Zf=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof zc)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Do)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Vb)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var Qf=class extends Zf{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(fi,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||ie$1.NULL,o=r.get(Te$1,i.injector);e=lu(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var II=(()=>{class t extends Do{constructor(){let e=u(Rt$1),i=u(pt);super(e,i)}static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[``,`cdkPortal`,``]],exportAs:[`cdkPortal`],features:[_e]})}return t})();var Bb=(()=>{class t extends Zf{_moduleRef=u(fi,{optional:!0});_document=u(q);_viewContainerRef=u(pt);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new W$1;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment(`dom-portal`);e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static ɵfac=(()=>{let e;return function(r){return(e||(e=ht(t)))(r||t)}})();static ɵdir=M({type:t,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[_e]})}return t})();var xI=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({})}return t})();var uj=20;var Eo=(()=>{class t{_ngZone=u(D);_platform=u(ye);_renderer=u(st$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new I;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=uj){return this._platform.isBrowser?new X(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Il(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):R()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(De$1(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._targetContainsElement(o,e)&&i.push(o)}),i}_targetContainsElement(e,i){let r=Ut$1(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var Hb=(()=>{class t{elementRef=u(O);scrollDispatcher=u(Eo);ngZone=u(D);dir=u(Xt$1,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new I;_renderer=u(Se);_cleanupScroll;_elementScrolled=new I;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value==`rtl`;e.left??=r?e.end:e.start,e.right??=r?e.start:e.end,e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&Ts$1()!=Qn$1.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),Ts$1()==Qn$1.INVERTED?e.left=e.right:Ts$1()==Qn$1.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;Nf()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i=`left`,r=`right`,o=this.elementRef.nativeElement;if(e==`top`)return o.scrollTop;if(e==`bottom`)return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value==`rtl`;return e==`start`?e=s?r:i:e==`end`&&(e=s?i:r),s&&Ts$1()==Qn$1.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&Ts$1()==Qn$1.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return t})();var fj=20;var Cr$1=(()=>{class t{_platform=u(ye);_listeners;_viewportSize=null;_change=new I;_document=u(q);constructor(){let e=u(D),i=u(st$1).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen(`window`,`resize`,r),i.listen(`window`,`orientationchange`,r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect();return{top:-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,left:-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0}}change(e=fj){return e>0?this._change.pipe(Il(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var $c=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({})}return t})();var Ub=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({imports:[xe$1,$c,xe$1,$c]})}return t})();var js$1=[`*`];function hj(t,n){t&1&&H$1(0)}var AI=[`tabListContainer`];var RI=[`tabList`];var kI=[`tabListInner`];var OI=[`nextPaginator`];var FI=[`previousPaginator`];var pj=[`content`];function mj(t,n){}var gj=[`tabBodyWrapper`];var vj=[`tabHeader`];function bj(t,n){}function _j(t,n){if(t&1&&_n$1(0,bj,0,0,`ng-template`,12),t&2){let e=pe$1().$implicit;ee$1(`cdkPortalOutlet`,e.templateLabel)}}function yj(t,n){if(t&1&&j(0),t&2){let e=pe$1().$implicit;ct(e.textLabel)}}function wj(t,n){if(t&1){let e=yn$1();b(0,`div`,7,2),B$1(`click`,function(){let r=it$1(e),o=r.$implicit,s=r.$index,a=pe$1(),c=Pi(1);return rt$1(a._handleClick(o,c,s))})(`cdkFocusChange`,function(r){let o=it$1(e).$index;return rt$1(pe$1()._tabFocusChanged(r,o))}),be$1(2,`span`,8)(3,`div`,9),b(4,`span`,10)(5,`span`,11),le(6,_j,1,1,null,12)(7,yj,1,1),_$1()()()}if(t&2){let e=n.$implicit,i=n.$index,r=Pi(1),o=pe$1();gt(e.labelClass),k(`mdc-tab--active`,o.selectedIndex===i),ee$1(`id`,o._getTabLabelId(e,i))(`disabled`,e.disabled)(`fitInkBarToContent`,o.fitInkBarToContent),oe(`tabIndex`,o._getTabIndex(i))(`aria-posinset`,i+1)(`aria-setsize`,o._tabs.length)(`aria-controls`,o._getTabContentId(i))(`aria-selected`,o.selectedIndex===i)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),y(3),ee$1(`matRippleTrigger`,r)(`matRippleDisabled`,e.disabled||o.disableRipple),y(3),de$1(e.templateLabel?6:7)}}function Sj(t,n){t&1&&H$1(0)}function Cj(t,n){if(t&1){let e=yn$1();b(0,`mat-tab-body`,13),B$1(`_onCentered`,function(){it$1(e);return rt$1(pe$1()._removeTabBodyWrapperHeight())})(`_onCentering`,function(r){it$1(e);return rt$1(pe$1()._setTabBodyWrapperHeight(r))})(`_beforeCentering`,function(r){it$1(e);return rt$1(pe$1()._bodyCentered(r))}),_$1()}if(t&2){let e=n.$implicit,i=n.$index,r=pe$1();gt(e.bodyClass),ee$1(`id`,r._getTabContentId(i))(`content`,e.content)(`position`,e.position)(`animationDuration`,r._bodyAnimationDuration)(`preserveContent`,r.preserveContent),oe(`tabindex`,r.contentTabIndex!=null&&r.selectedIndex===i?r.contentTabIndex:null)(`aria-labelledby`,r._getTabLabelId(e,i))(`aria-hidden`,r.selectedIndex!==i)}}var Dj=new m(`MatTabContent`);var Ej=(()=>{class t{template=u(Rt$1);static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[``,`matTabContent`,``]],features:[je([{provide:Dj,useExisting:t}])]})}return t})();var Ij=new m(`MatTabLabel`);var PI=new m(`MAT_TAB`);var xj=(()=>{class t extends II{_closestTab=u(PI,{optional:!0});static ɵfac=(()=>{let e;return function(r){return(e||(e=ht(t)))(r||t)}})();static ɵdir=M({type:t,selectors:[[``,`mat-tab-label`,``],[``,`matTabLabel`,``]],features:[je([{provide:Ij,useExisting:t}]),_e]})}return t})();var LI=new m(`MAT_TAB_GROUP`);var Nj=(()=>{class t{_viewContainerRef=u(pt);_closestTabGroup=u(LI,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel=``;ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new I;position=null;origin=null;isActive=!1;constructor(){u(dt).load(Si)}ngOnChanges(e){(e.hasOwnProperty(`textLabel`)||e.hasOwnProperty(`disabled`))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Do(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`mat-tab`]],contentQueries:function(i,r,o){if(i&1&&xt$1(o,xj,5)(o,Ej,7,Rt$1),i&2){let s;U$1(s=z())&&(r.templateLabel=s.first),U$1(s=z())&&(r._explicitContent=s.first)}},viewQuery:function(i,r){if(i&1&&_t(Rt$1,7),i&2){let o;U$1(o=z())&&(r._implicitContent=o.first)}},hostAttrs:[`hidden`,``],hostVars:1,hostBindings:function(i,r){i&2&&oe(`id`,null)},inputs:{disabled:[2,`disabled`,`disabled`,F],textLabel:[0,`label`,`textLabel`],ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],labelClass:`labelClass`,bodyClass:`bodyClass`,id:`id`},exportAs:[`matTab`],features:[je([{provide:PI,useExisting:t}]),qe],ngContentSelectors:js$1,decls:1,vars:0,template:function(i,r){i&1&&(ve$1(),Kd(0,hj,1,0,`ng-template`))},encapsulation:2,changeDetection:1})}return t})();var zb=`mdc-tab-indicator--active`;var NI=`mdc-tab-indicator--no-transition`;var Xf=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(r=>r.elementRef.nativeElement===n),i=this._currentItem;if(e!==i&&(i?.deactivateInkBar(),e)){let r=i?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(r),this._currentItem=e}}};var jI=(()=>{class t{_elementRef=u(O);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let i=this._elementRef.nativeElement;if(!e||!i.getBoundingClientRect||!this._inkBarContentElement){i.classList.add(zb);return}let r=i.getBoundingClientRect(),o=e.width/r.width,s=e.left-r.left;i.classList.add(NI),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${s}px) scaleX(${o})`),i.getBoundingClientRect(),i.classList.remove(NI),i.classList.add(zb),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(zb)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,i=this._inkBarElement=e.createElement(`span`),r=this._inkBarContentElement=e.createElement(`span`);i.className=`mdc-tab-indicator`,r.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,i.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,F]}})}return t})();var VI=(()=>{class t extends jI{elementRef=u(O);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static ɵfac=(()=>{let e;return function(r){return(e||(e=ht(t)))(r||t)}})();static ɵdir=M({type:t,selectors:[[``,`matTabLabelWrapper`,``]],hostVars:3,hostBindings:function(i,r){i&2&&(oe(`aria-disabled`,!!r.disabled),k(`mat-mdc-tab-disabled`,r.disabled))},inputs:{disabled:[2,`disabled`,`disabled`,F]},features:[_e]})}return t})();var TI={passive:!0};var Tj=650;var Mj=100;function Kf(t){let n=t+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(n)?`${t}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(n)?n:``}var BI=(()=>{class t{_elementRef=u(O);_changeDetectorRef=u(Le);_viewportRuler=u(Cr$1);_dir=u(Xt$1,{optional:!0});_ngZone=u(D);_platform=u(ye);_sharedResizeObserver=u(qf);_injector=u(ie$1);_renderer=u(Se);_animationsDisabled=ut$1();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new I;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new I;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let i=isNaN(e)?0:e;this._selectedIndex!=i&&(this._selectedIndexChanged=!0,this._selectedIndex=i,this._keyManager&&this._keyManager.updateActiveItem(i))}_selectedIndex=0;selectFocusedIndex=new W$1;indexFocused=new W$1;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),TI),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),TI))}ngAfterContentInit(){let e=this._dir?this._dir.change:R(`ltr`),i=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Ii(32),ge$1(this._destroyed)),r=this._viewportRuler.change(150).pipe(ge$1(this._destroyed)),o=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new wo(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),bt$1(o,{injector:this._injector}),ni(e,r,i,this._items.changes,this._itemsResized()).pipe(ge$1(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),o()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}_itemsResized(){return typeof ResizeObserver!=`function`?Ge$1:this._items.changes.pipe(Qe(this._items),Ze$1(e=>new X(i=>this._ngZone.runOutsideAngular(()=>{let r=new ResizeObserver(o=>i.next(o));return e.forEach(o=>r.observe(o.elementRef.nativeElement)),()=>{r.disconnect()}}))),Pr(1),De$1(e=>e.some(i=>i.contentRect.width>0&&i.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!Fs$1(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let i=this._items.get(this.focusIndex);i&&!i.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let i=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?i.scrollLeft=0:i.scrollLeft=i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,i=this._getLayoutDirection()===`ltr`?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let i=this._tabListContainer.nativeElement.offsetWidth,r=(e==`before`?-1:1)*i/3;return this._scrollTo(this._scrollDistance+r)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let i=this._items?this._items.toArray()[e]:null;if(!i)return;let r=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:o,offsetWidth:s}=i.elementRef.nativeElement,a,c;this._getLayoutDirection()==`ltr`?(a=o,c=a+s):(c=this._tabListInner.nativeElement.offsetWidth-o,a=c-s);let l=this.scrollDistance,d=this.scrollDistance+r;a<l?this.scrollDistance-=l-a:c>d&&(this.scrollDistance+=Math.min(c-d,a-l))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let r=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;r||(this.scrollDistance=0),r!==this._showPaginationControls&&(this._showPaginationControls=r,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&i.button!=null&&i.button!==0||(this._stopInterval(),Ks$1(Tj,Mj).pipe(ge$1(ni(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:r,distance:o}=this._scrollHeader(e);(o===0||o>=r)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,F],selectedIndex:[2,`selectedIndex`,`selectedIndex`,kt$1]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return t})();var Aj=(()=>{class t extends BI{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Xf(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static ɵfac=(()=>{let e;return function(r){return(e||(e=ht(t)))(r||t)}})();static ɵcmp=T({type:t,selectors:[[`mat-tab-header`]],contentQueries:function(i,r,o){if(i&1&&xt$1(o,VI,4),i&2){let s;U$1(s=z())&&(r._items=s)}},viewQuery:function(i,r){if(i&1&&_t(AI,7)(RI,7)(kI,7)(OI,5)(FI,5),i&2){let o;U$1(o=z())&&(r._tabListContainer=o.first),U$1(o=z())&&(r._tabList=o.first),U$1(o=z())&&(r._tabListInner=o.first),U$1(o=z())&&(r._nextPaginator=o.first),U$1(o=z())&&(r._previousPaginator=o.first)}},hostAttrs:[1,`mat-mdc-tab-header`],hostVars:4,hostBindings:function(i,r){i&2&&k(`mat-mdc-tab-header-pagination-controls-enabled`,r._showPaginationControls)(`mat-mdc-tab-header-rtl`,r._getLayoutDirection()==`rtl`)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],disableRipple:[2,`disableRipple`,`disableRipple`,F]},features:[_e],ngContentSelectors:js$1,decls:13,vars:10,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-label-container`,3,`keydown`],[`role`,`tablist`,1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-labels`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(i,r){i&1&&(ve$1(),b(0,`div`,5,0),B$1(`click`,function(){return r._handlePaginatorClick(`before`)})(`mousedown`,function(s){return r._handlePaginatorPress(`before`,s)})(`touchend`,function(){return r._stopInterval()}),be$1(2,`div`,6),_$1(),b(3,`div`,7,1),B$1(`keydown`,function(s){return r._handleKeydown(s)}),b(5,`div`,8,2),B$1(`cdkObserveContent`,function(){return r._onContentChanges()}),b(7,`div`,9,3),H$1(9),_$1()()(),b(10,`div`,10,4),B$1(`mousedown`,function(s){return r._handlePaginatorPress(`after`,s)})(`click`,function(){return r._handlePaginatorClick(`after`)})(`touchend`,function(){return r._stopInterval()}),be$1(12,`div`,6),_$1()),i&2&&(k(`mat-mdc-tab-header-pagination-disabled`,r._disableScrollBefore),ee$1(`matRippleDisabled`,r._disableScrollBefore||r.disableRipple),y(3),k(`_mat-animation-noopable`,r._animationsDisabled),y(2),oe(`aria-label`,r.ariaLabel||null)(`aria-labelledby`,r.ariaLabelledby||null),y(5),k(`mat-mdc-tab-header-pagination-disabled`,r._disableScrollAfter),ee$1(`matRippleDisabled`,r._disableScrollAfter||r.disableRipple))},dependencies:[Co,fb],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})}return t})();var HI=new m(`MAT_TABS_CONFIG`);var MI=(()=>{class t extends Bb{_host=u($b);_ngZone=u(D);_centeringSub=fe$1.EMPTY;_leavingSub=fe$1.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Qe(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static ɵfac=(()=>{let e;return function(r){return(e||(e=ht(t)))(r||t)}})();static ɵdir=M({type:t,selectors:[[``,`matTabBodyHost`,``]],features:[_e]})}return t})();var $b=(()=>{class t{_elementRef=u(O);_dir=u(Xt$1,{optional:!0});_ngZone=u(D);_injector=u(ie$1);_renderer=u(Se);_diAnimationsDisabled=ut$1();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=fe$1.EMPTY;_position;_previousPosition;_onCentering=new W$1;_beforeCentering=new W$1;_afterLeavingCenter=new W$1;_onCentered=new W$1(!0);_portalHost;_contentElement;_content;animationDuration=`500ms`;preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=u(Le);this._dirChangeSubscription=this._dir.change.subscribe(i=>{this._computePositionAnimationState(i),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position===`center`&&(this._setActiveClass(!0),bt$1(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,i=r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove(`mat-tab-body-animating`),r.type===`transitionend`&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,`transitionstart`,r=>{r.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add(`mat-tab-body-animating`),this._transitionStarted())}),this._renderer.listen(e,`transitionend`,i),this._renderer.listen(e,`transitioncancel`,i)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position===`center`;this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position===`center`?this._onCentered.emit():this._previousPosition===`center`&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle(`mat-mdc-tab-body-active`,e)}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e==`ltr`?`left`:`right`:this._positionIndex>0?this._position=e==`ltr`?`right`:`left`:this._position=`center`,this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position===`center`||this._previousPosition===`center`)&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),bt$1(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration===`0ms`||this.animationDuration===`0s`}static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`mat-tab-body`]],viewQuery:function(i,r){if(i&1&&_t(MI,5)(pj,5),i&2){let o;U$1(o=z())&&(r._portalHost=o.first),U$1(o=z())&&(r._contentElement=o.first)}},hostAttrs:[1,`mat-mdc-tab-body`],hostVars:1,hostBindings:function(i,r){i&2&&oe(`inert`,r._position===`center`?null:``)},inputs:{_content:[0,`content`,`_content`],animationDuration:`animationDuration`,preserveContent:`preserveContent`,position:`position`},outputs:{_onCentering:`_onCentering`,_beforeCentering:`_beforeCentering`,_onCentered:`_onCentered`},decls:3,vars:6,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-mdc-tab-body-content`],[`matTabBodyHost`,``]],template:function(i,r){i&1&&(b(0,`div`,1,0),_n$1(2,mj,0,0,`ng-template`,2),_$1()),i&2&&k(`mat-tab-body-content-left`,r._position===`left`)(`mat-tab-body-content-right`,r._position===`right`)(`mat-tab-body-content-can-animate`,r._position===`center`||r._previousPosition===`center`)},dependencies:[MI,Hb],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})}return t})();var Yte=(()=>{class t{_elementRef=u(O);_changeDetectorRef=u(Le);_ngZone=u(D);_tabsSubscription=fe$1.EMPTY;_tabLabelSubscription=fe$1.EMPTY;_tabBodySubscription=fe$1.EMPTY;_diAnimationsDisabled=ut$1();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Hn$1;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition=`above`;get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=e,e&&typeof e==`object`?(this._bodyAnimationDuration=Kf(e.body),this._headerAnimationDuration=Kf(e.header)):this._headerAnimationDuration=this._bodyAnimationDuration=Kf(e)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),e&&i.add(`mat-tabs-with-background`,`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new W$1;focusChange=new W$1;animationDone=new W$1;selectedTabChange=new W$1(!0);_groupId;_isServer=!u(ye).isBrowser;constructor(){let e=u(HI,{optional:!0});this._groupId=u(wt$1).getId(`mat-tab-group-`),this.animationDuration=e&&e.animationDuration?e.animationDuration:`500ms`,this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let i=this._selectedIndex==null;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));let r=this._tabBodyWrapper.nativeElement;r.style.minHeight=r.clientHeight+`px`}Promise.resolve().then(()=>{this._tabs.forEach((r,o)=>r.isActive=o===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight=``)})}this._tabs.forEach((i,r)=>{i.position=r-e,this._selectedIndex!=null&&i.position==0&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let i=this._tabs.toArray(),r;for(let o=0;o<i.length;o++)if(i[o].isActive){this._indexToSelect=this._selectedIndex=o,this._lastFocusedTabIndex=null,r=i[o];break}!r&&i[e]&&Promise.resolve().then(()=>{i[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Qe(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let i=new Gb;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=ni(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,i){return e.id||`${this._groupId}-label-${i}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+`px`,this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+`px`)}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height=``,this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,i,r){i.focusIndex=r,e.disabled||(this.selectedIndex=r)}_getTabIndex(e){return e===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(e,i){e&&e!==`mouse`&&e!==`touch`&&(this._tabHeader.focusIndex=i)}_bodyCentered(e){e&&this._tabBodies?.forEach((i,r)=>i._setActiveClass(r===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration===`0`||this._bodyAnimationDuration===`0ms`}static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`mat-tab-group`]],contentQueries:function(i,r,o){if(i&1&&xt$1(o,Nj,5),i&2){let s;U$1(s=z())&&(r._allTabs=s)}},viewQuery:function(i,r){if(i&1&&_t(gj,5)(vj,5)($b,5),i&2){let o;U$1(o=z())&&(r._tabBodyWrapper=o.first),U$1(o=z())&&(r._tabHeader=o.first),U$1(o=z())&&(r._tabBodies=o)}},hostAttrs:[1,`mat-mdc-tab-group`],hostVars:13,hostBindings:function(i,r){i&2&&(oe(`mat-align-tabs`,r.alignTabs),gt(`mat-`+(r.color||`primary`)),Sn$1(`--%NS%mat-tab-body-animation-duration`,r._bodyAnimationDuration)(`--%NS%mat-tab-header-animation-duration`,r._headerAnimationDuration),k(`mat-mdc-tab-group-dynamic-height`,r.dynamicHeight)(`mat-mdc-tab-group-inverted-header`,r.headerPosition===`below`)(`mat-mdc-tab-group-stretch-tabs`,r.stretchTabs))},inputs:{color:`color`,fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,F],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,F],alignTabs:[0,`mat-align-tabs`,`alignTabs`],dynamicHeight:[2,`dynamicHeight`,`dynamicHeight`,F],selectedIndex:[2,`selectedIndex`,`selectedIndex`,kt$1],headerPosition:`headerPosition`,animationDuration:`animationDuration`,contentTabIndex:[2,`contentTabIndex`,`contentTabIndex`,kt$1],disablePagination:[2,`disablePagination`,`disablePagination`,F],disableRipple:[2,`disableRipple`,`disableRipple`,F],preserveContent:[2,`preserveContent`,`preserveContent`,F],backgroundColor:`backgroundColor`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`]},outputs:{selectedIndexChange:`selectedIndexChange`,focusChange:`focusChange`,animationDone:`animationDone`,selectedTabChange:`selectedTabChange`},exportAs:[`matTabGroup`],features:[je([{provide:LI,useExisting:t}])],ngContentSelectors:js$1,decls:9,vars:8,consts:[[`tabHeader`,``],[`tabBodyWrapper`,``],[`tabNode`,``],[3,`indexFocused`,`selectFocusedIndex`,`selectedIndex`,`disableRipple`,`disablePagination`,`aria-label`,`aria-labelledby`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`id`,`mdc-tab--active`,`class`,`disabled`,`fitInkBarToContent`],[1,`mat-mdc-tab-body-wrapper`],[`role`,`tabpanel`,3,`id`,`class`,`content`,`position`,`animationDuration`,`preserveContent`],[`role`,`tab`,`matTabLabelWrapper`,``,`cdkMonitorElementFocus`,``,1,`mdc-tab`,`mat-mdc-tab`,`mat-focus-indicator`,3,`click`,`cdkFocusChange`,`id`,`disabled`,`fitInkBarToContent`],[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`],[3,`cdkPortalOutlet`],[`role`,`tabpanel`,3,`_onCentered`,`_onCentering`,`_beforeCentering`,`id`,`content`,`position`,`animationDuration`,`preserveContent`]],template:function(i,r){i&1&&(ve$1(),b(0,`mat-tab-header`,3,0),B$1(`indexFocused`,function(s){return r._focusChanged(s)})(`selectFocusedIndex`,function(s){return r.selectedIndex=s}),on$1(2,wj,8,17,`div`,4,rn$1),_$1(),le(4,Sj,1,0),b(5,`div`,5,1),on$1(7,Cj,1,10,`mat-tab-body`,6,rn$1),_$1()),i&2&&(ee$1(`selectedIndex`,r.selectedIndex||0)(`disableRipple`,r.disableRipple)(`disablePagination`,r.disablePagination),eu(`aria-label`,r.ariaLabel)(`aria-labelledby`,r.ariaLabelledby),y(2),sn$1(r._tabs),y(2),de$1(r._isServer?4:-1),y(),k(`_mat-animation-noopable`,r._bodyAnimationsDisabled()),y(2),sn$1(r._tabs))},dependencies:[Aj,VI,db,Co,Bb,$b],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})}return t})();var Gb=class{index;tab};var Rj=(()=>{class t extends BI{_focusedItem=ne$1(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(e){this._fitInkBarToContent.next(e),this._changeDetectorRef.markForCheck()}_fitInkBarToContent=new Me$1(!1);stretchTabs=!0;animationDuration=``;_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let i=this._elementRef.nativeElement.classList;i.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),e&&i.add(`mat-tabs-with-background`,`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=ne$1(!1);color=`primary`;tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let e=u(HI,{optional:!0});super(),this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0}_itemSelected(){}ngAfterContentInit(){this._inkBar=new Xf(this._items),this._items.changes.pipe(Qe(null),ge$1(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(Qe(null),ge$1(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null))}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit()}updateActiveLink(){if(!this._items)return;let e=this._items.toArray();for(let i=0;i<e.length;i++)if(e[i].active){this.selectedIndex=i,this.tabPanel&&(this.tabPanel._activeTabId=e[i].id),this._focusedItem.set(e[i]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1}_getRole(){return this.tabPanel?`tablist`:this._elementRef.nativeElement.getAttribute(`role`)}_hasFocus(e){return this._keyManager?.activeItem===e}static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[``,`mat-tab-nav-bar`,``]],contentQueries:function(i,r,o){if(i&1&&xt$1(o,kj,5),i&2){let s;U$1(s=z())&&(r._items=s)}},viewQuery:function(i,r){if(i&1&&_t(AI,7)(RI,7)(kI,7)(OI,5)(FI,5),i&2){let o;U$1(o=z())&&(r._tabListContainer=o.first),U$1(o=z())&&(r._tabList=o.first),U$1(o=z())&&(r._tabListInner=o.first),U$1(o=z())&&(r._nextPaginator=o.first),U$1(o=z())&&(r._previousPaginator=o.first)}},hostAttrs:[1,`mat-mdc-tab-nav-bar`,`mat-mdc-tab-header`],hostVars:17,hostBindings:function(i,r){i&2&&(oe(`role`,r._getRole()),Sn$1(`--%NS%mat-tab-header-animation-duration`,r.animationDuration),k(`mat-mdc-tab-header-pagination-controls-enabled`,r._showPaginationControls)(`mat-mdc-tab-header-rtl`,r._getLayoutDirection()==`rtl`)(`mat-mdc-tab-nav-bar-stretch-tabs`,r.stretchTabs)(`mat-primary`,r.color!==`warn`&&r.color!==`accent`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`_mat-animation-noopable`,r._animationsDisabled))},inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,F],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,F],animationDuration:[2,`animationDuration`,`animationDuration`,Kf],backgroundColor:`backgroundColor`,disableRipple:[2,`disableRipple`,`disableRipple`,F],color:`color`,tabPanel:`tabPanel`},exportAs:[`matTabNavBar`,`matTabNav`],features:[_e],ngContentSelectors:js$1,decls:13,vars:6,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-link-container`,3,`keydown`],[1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-links`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(i,r){i&1&&(ve$1(),b(0,`div`,5,0),B$1(`click`,function(){return r._handlePaginatorClick(`before`)})(`mousedown`,function(s){return r._handlePaginatorPress(`before`,s)})(`touchend`,function(){return r._stopInterval()}),be$1(2,`div`,6),_$1(),b(3,`div`,7,1),B$1(`keydown`,function(s){return r._handleKeydown(s)}),b(5,`div`,8,2),B$1(`cdkObserveContent`,function(){return r._onContentChanges()}),b(7,`div`,9,3),H$1(9),_$1()()(),b(10,`div`,10,4),B$1(`mousedown`,function(s){return r._handlePaginatorPress(`after`,s)})(`click`,function(){return r._handlePaginatorClick(`after`)})(`touchend`,function(){return r._stopInterval()}),be$1(12,`div`,6),_$1()),i&2&&(k(`mat-mdc-tab-header-pagination-disabled`,r._disableScrollBefore),ee$1(`matRippleDisabled`,r._disableScrollBefore||r.disableRipple),y(10),k(`mat-mdc-tab-header-pagination-disabled`,r._disableScrollAfter),ee$1(`matRippleDisabled`,r._disableScrollAfter||r.disableRipple))},dependencies:[Co,fb],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-links {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-links, .mat-mdc-tab-links.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab-link-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
`],encapsulation:2,changeDetection:1})}return t})();var kj=(()=>{class t extends jI{_tabNavBar=u(Rj);elementRef=u(O);_focusMonitor=u(In$1);_destroyed=new I;_isActive=!1;_tabIndex=Xe$1(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(e){e!==this._isActive&&(this._isActive=e,this._tabNavBar.updateActiveLink())}disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=ne$1(!1);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=u(wt$1).getId(`mat-tab-link-`);constructor(){super(),u(dt).load(Si);let e=u(So,{optional:!0}),i=u(new mi(`tabindex`),{optional:!0});this.rippleConfig=e||{},this.tabIndex=i==null?0:parseInt(i)||0,ut$1()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(ge$1(this._destroyed)).subscribe(r=>{this.fitInkBarToContent=r})}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(this.disabled?e.preventDefault():this._tabNavBar.tabPanel&&(e.keyCode===32&&e.preventDefault(),this.elementRef.nativeElement.click()))}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute(`aria-controls`)}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?`true`:`false`:this.elementRef.nativeElement.getAttribute(`aria-selected`)}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?`page`:null}_getRole(){return this._tabNavBar.tabPanel?`tab`:this.elementRef.nativeElement.getAttribute(`role`)}static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[``,`mat-tab-link`,``],[``,`matTabLink`,``]],hostAttrs:[1,`mdc-tab`,`mat-mdc-tab-link`,`mat-focus-indicator`],hostVars:11,hostBindings:function(i,r){i&1&&B$1(`focus`,function(){return r._handleFocus()})(`keydown`,function(s){return r._handleKeydown(s)}),i&2&&(oe(`aria-controls`,r._getAriaControls())(`aria-current`,r._getAriaCurrent())(`aria-disabled`,r.disabled)(`aria-selected`,r._getAriaSelected())(`id`,r.id)(`tabIndex`,r._tabIndex())(`role`,r._getRole()),k(`mat-mdc-tab-disabled`,r.disabled)(`mdc-tab--active`,r.active))},inputs:{active:[2,`active`,`active`,F],disabled:[2,`disabled`,`disabled`,F],disableRipple:[2,`disableRipple`,`disableRipple`,F],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:kt$1(e)],id:`id`},exportAs:[`matTabLink`],features:[_e],ngContentSelectors:js$1,decls:5,vars:2,consts:[[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`]],template:function(i,r){i&1&&(ve$1(),be$1(0,`span`,0)(1,`div`,1),b(2,`span`,2)(3,`span`,3),H$1(4),_$1()()),i&2&&(y(),ee$1(`matRippleTrigger`,r.elementRef.nativeElement)(`matRippleDisabled`,r.rippleDisabled))},dependencies:[Co],styles:[`.mat-mdc-tab-link {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab-link.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab-link .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab-link:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab-link .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab-link .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab-link:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab-link .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link {
  flex-grow: 1;
}
.mat-mdc-tab-link::before {
  margin: 5px;
}

@media (max-width: 599px) {
  .mat-mdc-tab-link {
    min-width: 72px;
  }
}
`],encapsulation:2})}return t})();var Zte=(()=>{class t{id=u(wt$1).getId(`mat-tab-nav-panel-`);_activeTabId;static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`mat-tab-nav-panel`]],hostAttrs:[`role`,`tabpanel`,1,`mat-mdc-tab-nav-panel`],hostVars:2,hostBindings:function(i,r){i&2&&oe(`aria-labelledby`,r._activeTabId)(`id`,r.id)},inputs:{id:`id`},exportAs:[`matTabNavPanel`],ngContentSelectors:js$1,decls:1,vars:0,template:function(i,r){i&1&&(ve$1(),H$1(0))},encapsulation:2})}return t})();var Wb=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({imports:[xe$1]})}return t})();var Vs$1=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({imports:[kf,bI,xe$1]})}return t})();var Oj=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return t})();var Fj={passive:!0};var UI=(()=>{class t{_platform=u(ye);_ngZone=u(D);_renderer=u(st$1).createRenderer(null,null);_styleLoader=u(dt);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return Ge$1;this._styleLoader.load(Oj);let i=Ut$1(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new I,s=`cdk-text-field-autofilled`,a=l=>{l.animationName===`cdk-text-field-autofill-start`&&!i.classList.contains(s)?(i.classList.add(s),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!0}))):l.animationName===`cdk-text-field-autofill-end`&&i.classList.contains(s)&&(i.classList.remove(s),this._ngZone.run(()=>o.next({target:l.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(i.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(i,`animationstart`,a,Fj)));return this._monitoredElements.set(i,{subject:o,unlisten:c}),o}stopMonitoring(e){let i=Ut$1(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove(`cdk-text-field-autofill-monitored`),i.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var zI=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({})}return t})();var $I=new m(`MAT_INPUT_VALUE_ACCESSOR`);var Pj=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var Lj=new m(`MAT_INPUT_CONFIG`);var Pne=(()=>{class t{_elementRef=u(O);_platform=u(ye);ngControl=u(Yn$1,{optional:!0,self:!0});_autofillMonitor=u(UI);_ngZone=u(D);_formField=u(Ab,{optional:!0});_renderer=u(Se);_uid=u(wt$1).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(Lj,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new I;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=xn$1(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(fs$1.required)??!1}set required(e){this._required=xn$1(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&ab().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=xn$1(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>ab().has(e));constructor(){let e=u(Yu,{optional:!0}),i=u(Zu,{optional:!0}),r=u(Gf),o=u($I,{optional:!0,self:!0}),s=u(sI,{optional:!0,self:!0}),a=this._elementRef.nativeElement,c=a.nodeName.toLowerCase();o?jn$1(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new Wf(r,s||this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=c===`select`,this._isTextarea=c===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&Yt$1(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type===`number`?(i.type=`text`,i.setSelectionRange(0,0),i.type=`number`):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute(`placeholder`,e):i.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){Pj.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute(`aria-describedby`,e.join(` `)):i.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(i,r){i&1&&B$1(`focus`,function(){return r._focusChanged(!0)})(`blur`,function(){return r._focusChanged(!1)})(`input`,function(){return r._onInput()}),i&2&&(wn$1(`id`,r.id)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),oe(`name`,r.name||null)(`readonly`,r._getReadonlyAttribute())(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null)(`aria-invalid`,r.empty&&r.required?null:r.errorState)(`aria-required`,r.required)(`id`,r.id),k(`mat-input-server`,r._isServer)(`mat-mdc-form-field-textarea-control`,r._isInFormField&&r._isTextarea)(`mat-mdc-form-field-input-control`,r._isInFormField)(`mat-mdc-input-disabled-interactive`,r.disabledInteractive)(`mdc-text-field__input`,r._isInFormField)(`mat-mdc-native-select-inline`,r._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,F]},exportAs:[`matInput`],features:[je([{provide:Mb,useExisting:t}]),qe]})}return t})();var qb=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({imports:[Vs$1,Vs$1,zI,xe$1]})}return t})();var GI=(()=>{class t{get vertical(){return this._vertical}set vertical(e){this._vertical=xn$1(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=xn$1(e)}_inset=!1;static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`mat-divider`]],hostAttrs:[`role`,`separator`,1,`mat-divider`],hostVars:7,hostBindings:function(i,r){i&2&&(oe(`aria-orientation`,r.vertical?`vertical`:`horizontal`),k(`mat-divider-vertical`,r.vertical)(`mat-divider-horizontal`,!r.vertical)(`mat-divider-inset`,r.inset))},inputs:{vertical:`vertical`,inset:`inset`},decls:0,vars:0,template:function(i,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return t})();var Yb=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({imports:[xe$1]})}return t})();function Vj(t,n){t&1&&mt$1(0,`div`,2)}var Bj=new m(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var qI=(()=>{class t{_elementRef=u(O);_ngZone=u(D);_changeDetectorRef=u(Le);_renderer=u(Se);_cleanupTransitionEnd;constructor(){let e=vb(),i=u(Bj,{optional:!0});this._isNoopAnimation=e===`di-disabled`,e===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),i&&(i.color&&(this.color=this._defaultColor=i.color),this.mode=i.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;get value(){return this._value}set value(e){this._value=WI(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=WI(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new W$1;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(i,r){i&2&&(oe(`aria-valuenow`,r._isIndeterminate()?null:r.value)(`mode`,r.mode),gt(`mat-`+r.color),k(`_mat-animation-noopable`,r._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!r._isNoopAnimation)(`mdc-linear-progress--indeterminate`,r._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,kt$1],bufferValue:[2,`bufferValue`,`bufferValue`,kt$1],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(i,r){i&1&&(Ue$1(0,`div`,0),mt$1(1,`div`,1),le(2,Vj,1,0,`div`,2),$e$1(),Ue$1(3,`div`,3),mt$1(4,`span`,4),$e$1(),Ue$1(5,`div`,5),mt$1(6,`span`,4),$e$1()),i&2&&(y(),Sn$1(`flex-basis`,r._getBufferBarFlexBasis()),y(),de$1(r.mode===`buffer`?2:-1),y(),Sn$1(`transform`,r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})}return t})();function WI(t,n=0,e=100){return Math.max(n,Math.min(e,t))}var Zb=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({imports:[xe$1]})}return t})();var Uj=[`*`];var YI=(()=>{class t{labelPosition=`after`;static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(i,r){i&2&&k(`mdc-form-field--align-end`,r.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:Uj,decls:1,vars:0,template:function(i,r){i&1&&(ve$1(),H$1(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return t})();var zj=[`switch`];var $j=[`*`];function Gj(t,n){t&1&&(b(0,`span`,11),qo(),b(1,`svg`,13),be$1(2,`path`,14),_$1(),b(3,`svg`,15),be$1(4,`path`,16),_$1()())}var Wj=new m(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var Jf=class{source;checked;constructor(n,e){this.source=n,this.checked=e}};var qj=(()=>{class t{_elementRef=u(O);_focusMonitor=u(In$1);_changeDetectorRef=u(Le);defaults=u(Wj);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Jf(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=ut$1();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new W$1;toggleChange=new W$1;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){u(dt).load(Si);let e=u(new mi(`tabindex`),{optional:!0}),i=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=i.color||`accent`,this.id=this._uniqueId=u(wt$1).getId(`mat-mdc-slide-toggle-`),this.hideIcon=i.hideIcon??!1,this.disabledInteractive=i.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Jf(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`mat-slide-toggle`]],viewQuery:function(i,r){if(i&1&&_t(zj,5),i&2){let o;U$1(o=z())&&(r._switchElement=o.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(i,r){i&2&&(wn$1(`id`,r.id),oe(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),gt(r.color?`mat-`+r.color:``),k(`mat-mdc-slide-toggle-focused`,r._focused)(`mat-mdc-slide-toggle-checked`,r.checked)(`mat-slide-toggle-full-width`,r.fullWidth)(`_mat-animation-noopable`,r._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,F],color:`color`,disabled:[2,`disabled`,`disabled`,F],fullWidth:[2,`fullWidth`,`fullWidth`,F],disableRipple:[2,`disableRipple`,`disableRipple`,F],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:kt$1(e)],checked:[2,`checked`,`checked`,F],hideIcon:[2,`hideIcon`,`hideIcon`,F],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,F]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[je([{provide:fo,useExisting:At$1(()=>t),multi:!0},{provide:ho,useExisting:t,multi:!0}]),qe],ngContentSelectors:$j,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(i,r){if(i&1&&(ve$1(),b(0,`div`,1)(1,`button`,2,0),B$1(`click`,function(){return r._handleClick()}),be$1(3,`div`,3)(4,`span`,4),b(5,`span`,5)(6,`span`,6)(7,`span`,7),be$1(8,`span`,8),_$1(),b(9,`span`,9),be$1(10,`span`,10),_$1(),le(11,Gj,5,0,`span`,11),_$1()()(),b(12,`label`,12),B$1(`click`,function(s){return s.stopPropagation()}),H$1(13),_$1()()),i&2){let o=Pi(2);ee$1(`labelPosition`,r.labelPosition),y(),k(`mdc-switch--selected`,r.checked)(`mdc-switch--unselected`,!r.checked)(`mdc-switch--checked`,r.checked)(`mdc-switch--disabled`,r.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,r.disabledInteractive),ee$1(`tabIndex`,r.disabled&&!r.disabledInteractive?-1:r.tabIndex)(`disabled`,r.disabled&&!r.disabledInteractive),oe(`id`,r.buttonId)(`name`,r.name)(`aria-label`,r.ariaLabel)(`aria-labelledby`,r._getAriaLabelledBy())(`aria-describedby`,r.ariaDescribedby)(`aria-required`,r.required||null)(`aria-checked`,r.checked)(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null),y(9),ee$1(`matRippleTrigger`,o)(`matRippleDisabled`,r.disableRipple||r.disabled)(`matRippleCentered`,!0),y(),de$1(r.hideIcon?-1:11),y(),ee$1(`for`,r.buttonId),oe(`id`,r._labelId)}},dependencies:[Co,YI],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})}return t})();var Qb=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({imports:[qj,xe$1]})}return t})();var ZI=Nf();function nx(t){return new eh(t.get(Cr$1),t.get(q))}var eh=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||``,this._previousHTMLStyles.top=n.style.top||``,n.style.left=Je$1(-this._previousScrollPosition.left),n.style.top=Je$1(-this._previousScrollPosition.top),n.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||``,s=r.scrollBehavior||``;this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove(`cdk-global-scrollblock`),ZI&&(i.scrollBehavior=r.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),ZI&&(i.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function ix(t,n){return new th(t.get(Eo),t.get(D),t.get(Cr$1),n)}var th=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(De$1(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Gc=class{enable(){}disable(){}attach(){}};function Xb(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return i||r||o||s})}function QI(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return i||r||o||s})}function ch(t,n){return new nh(t.get(Eo),t.get(Cr$1),t.get(D),n)}var nh=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();Xb(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var rx=(()=>{class t{_injector=u(ie$1);noop=()=>new Gc;close=e=>ix(this._injector,e);block=()=>nx(this._injector);reposition=e=>ch(this._injector,e);static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var ih=class{positionStrategy;scrollStrategy=new Gc;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var rh=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var ox=(()=>{class t{_attachedOverlays=[];_document=u(q);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var sx=(()=>{class t extends ox{_ngZone=u(D);_renderer=u(st$1).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var ax=(()=>{class t extends ox{_platform=u(ye);_ngZone=u(D);_renderer=u(st$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,`pointerdown`,this._pointerDownListener,r),o.listen(i,`click`,this._clickListener,r),o.listen(i,`auxclick`,this._clickListener,r),o.listen(i,`contextmenu`,this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Kt$1(e)};_clickListener=e=>{let i=Kt$1(e),r=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],c=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,c))){if(KI(a.overlayElement,i)||KI(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();function KI(t,n){let e=typeof ShadowRoot<`u`&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var cx=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return t})();var lx=(()=>{class t{_platform=u(ye);_containerElement;_document=u(q);_styleLoader=u(dt);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||sb()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement(`div`);i.classList.add(e),sb()?i.setAttribute(`platform`,`test`):this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(cx)}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var Jb=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents=`none`,n.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function e_(t){return t&&t.nodeType===1}var Kb=new Set;var oh=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new I;_attachments=new I;_detachments=new I;_positionStrategy;_scrollStrategy;_locationChanges=fe$1.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new I;_outsidePointerEvents=new I;_afterNextRenderRef;constructor(n,e,i,r,o,s,a,c,l,d=!1,f,h){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=d,this._injector=f,this._renderer=h,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),Kb.add(this),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=bt$1(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),Kb.delete(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,Kb.delete(this)}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=g(g({},this._config),n),this._updateElementSize()}setDirection(n){this._config=G(g({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n==`string`?n:n.value:`ltr`}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Je$1(this._config.width),n.height=Je$1(this._config.height),n.minWidth=Je$1(this._config.minWidth),n.minHeight=Je$1(this._config.minHeight),n.maxWidth=Je$1(this._config.maxWidth),n.maxHeight=Je$1(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?``:`none`}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;e_(n)?n.after(this._host):n?.type===`parent`?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(n){}}_attachBackdrop(){let n=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new Jb(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=ks$1(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=bt$1(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}};var XI=`cdk-overlay-connected-position-bounding-box`;var Yj=/([A-Za-z%]+)$/;function lh(t,n){return new sh(n,t.get(Cr$1),t.get(q),t.get(ye),t.get(lx))}var sh=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new I;_resizeSubscription=fe$1.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(XI),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],s;for(let a of this._preferredPositions){let c=this._getOriginPoint(n,r,a),l=this._getOverlayPoint(c,e,a),d=this._getOverlayFit(l,e,i,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(d,l,i)){o.push({position:a,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:l,originPoint:c,position:a,overlayRect:e})}if(o.length){let a=null,c=-1;for(let l of o){let d=l.boundingBoxRect.width*l.boundingBoxRect.height*(l.position.weight||1);d>c&&(c=d,a=l)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Io(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(XI),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof O?this._origin.nativeElement:e_(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX==`center`)r=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;r=i.originX==`start`?s:a}e.left<0&&(r-=e.left);let o;return i.originY==`center`?o=n.top+n.height/2:o=i.originY==`top`?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX==`center`?r=-e.width/2:i.overlayX===`start`?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY==`center`?o=-e.height/2:o=i.overlayY==`top`?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=ex(e),{x:s,y:a}=n,c=this._getOffset(r,`x`),l=this._getOffset(r,`y`);c&&(s+=c),l&&(a+=l);let d=0-s,f=s+o.width-i.width,h=0-a,p=a+o.height-i.height,v=this._subtractOverflows(o.width,d,f),S=this._subtractOverflows(o.height,h,p),P=v*S;return{visibleArea:P,isCompletelyWithinViewport:o.width*o.height===P,fitsInViewportVertically:S===o.height,fitsInViewportHorizontally:v==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,s=JI(this._overlayRef.getConfig().minHeight),a=JI(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||s!=null&&s<=r,l=n.fitsInViewportHorizontally||a!=null&&a<=o;return c&&l}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=ex(e),o=this._viewportRect,s=Math.max(n.x+r.width-o.width,0),a=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-i.top-n.y,0),l=Math.max(o.left-i.left-n.x,0),d=0,f=0;return r.width<=o.width?d=l||-s:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?f=c||-a:f=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:f},{x:n.x+d,y:n.y+f}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!Zj(this._lastScrollVisibility,i)){let r=new rh(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX===`center`?i=`center`:this._isRtl()?i=n.overlayX===`start`?`right`:`left`:i=n.overlayX===`start`?`left`:`right`;for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,s,a;if(e.overlayY===`top`)s=n.y,o=i.height-s+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)a=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-a+this._getViewportMarginTop();else{let p=Math.min(i.bottom-n.y+i.top,n.y),v=this._lastBoundingBoxSize.height;o=p*2,s=n.y-p,o>v&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-v/2)}let c=e.overlayX===`start`&&!r||e.overlayX===`end`&&r,l=e.overlayX===`end`&&!r||e.overlayX===`start`&&r,d,f,h;if(l)h=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(c)f=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let p=Math.min(i.right-n.x+i.left,n.x),v=this._lastBoundingBoxSize.width;d=p*2,f=n.x-p,d>v&&!this._isInitialRender&&!this._growAfterOpen&&(f=n.x-v/2)}return{top:s,left:f,bottom:a,right:h,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left=`0`,r.bottom=r.right=`auto`,r.maxHeight=r.maxWidth=``,r.width=r.height=`100%`;else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=Je$1(i.width),r.height=Je$1(i.height),r.top=Je$1(i.top)||`auto`,r.bottom=Je$1(i.bottom)||`auto`,r.left=Je$1(i.left)||`auto`,r.right=Je$1(i.right)||`auto`,e.overlayX===`center`?r.alignItems=`center`:r.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?r.justifyContent=`center`:r.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,o&&(r.maxHeight=Je$1(o)),s&&(r.maxWidth=Je$1(s))}this._lastBoundingBoxSize=i,Io(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Io(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){Io(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();Io(i,this._getExactOverlayY(e,n,d)),Io(i,this._getExactOverlayX(e,n,d))}else i.position=`static`;let a=``,c=this._getOffset(e,`x`),l=this._getOffset(e,`y`);c&&(a+=`translateX(${c}px) `),l&&(a+=`translateY(${l}px)`),i.transform=a.trim(),s.maxHeight&&(r?i.maxHeight=Je$1(s.maxHeight):o&&(i.maxHeight=``)),s.maxWidth&&(r?i.maxWidth=Je$1(s.maxWidth):o&&(i.maxWidth=``)),Io(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:``,bottom:``},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY===`bottom`)r.bottom=`${this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)}px`;else r.top=Je$1(o.y);return r}_getExactOverlayX(n,e,i){let r={left:``,right:``},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let s;if(this._isRtl()?s=n.overlayX===`end`?`left`:`right`:s=n.overlayX===`end`?`right`:`left`,s===`right`)r.right=`${this._document.documentElement.clientWidth-(o.x+this._overlayRect.width)}px`;else r.left=Je$1(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:QI(n,i),isOriginOutsideView:Xb(n,i),isOverlayClipped:QI(e,i),isOverlayOutsideView:Xb(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e===`x`?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&ks$1(n).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof O)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();n&&(e.style.display=`block`);let i=e.getBoundingClientRect();return n&&(e.style.display=``),i}};function Io(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function JI(t){if(typeof t!=`number`&&t!=null){let[n,e]=t.split(Yj);return!e||e===`px`?parseFloat(n):null}return t||null}function ex(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function Zj(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var tx=`cdk-global-overlay-wrapper`;function dx(t){return new ah}var ah=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(tx),this._isDisposed=!1}top(n=``){return this._bottomOffset=``,this._topOffset=n,this._alignItems=`flex-start`,this}left(n=``){return this._xOffset=n,this._xPosition=`left`,this}bottom(n=``){return this._topOffset=``,this._bottomOffset=n,this._alignItems=`flex-end`,this}right(n=``){return this._xOffset=n,this._xPosition=`right`,this}start(n=``){return this._xOffset=n,this._xPosition=`start`,this}end(n=``){return this._xOffset=n,this._xPosition=`end`,this}width(n=``){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=``){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=``){return this.left(n),this._xPosition=`center`,this}centerVertically(n=``){return this.top(n),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:r,height:o,maxWidth:s,maxHeight:a}=this._overlayRef.getConfig(),c=(r===`100%`||r===`100vw`)&&(!s||s===`100%`||s===`100vw`),l=(o===`100%`||o===`100vh`)&&(!a||a===`100%`||a===`100vh`),d=this._xPosition,f=this._xOffset,h=this._overlayRef.getConfig().direction===`rtl`,p=``,v=``,S=``;c?S=`flex-start`:d===`center`?(S=`center`,h?v=f:p=f):h?d===`left`||d===`end`?(S=`flex-end`,p=f):(d===`right`||d===`start`)&&(S=`flex-start`,v=f):d===`left`||d===`start`?(S=`flex-start`,p=f):(d===`right`||d===`end`)&&(S=`flex-end`,v=f),n.position=this._cssPosition,n.marginLeft=c?`0`:p,n.marginTop=l?`0`:this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?`0`:v,e.justifyContent=S,e.alignItems=l?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(tx),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position=``,this._overlayRef=null,this._isDisposed=!0}};var ux=(()=>{class t{_injector=u(ie$1);global(){return dx()}flexibleConnectedTo(e){return lh(this._injector,e)}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var fx=new m(`OVERLAY_DEFAULT_CONFIG`);function dh(t,n){t.get(dt).load(cx);let e=t.get(lx),i=t.get(q),r=t.get(wt$1),o=t.get(It$1),s=t.get(Xt$1),a=t.get(Se,null,{optional:!0})||t.get(st$1).createRenderer(null,null),c=new ih(n),l=t.get(fx,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||s.value,!i.body||!(`showPopover`in i.body)?c.usePopover=!1:c.usePopover=n?.usePopover??l;let d=i.createElement(`div`),f=i.createElement(`div`);d.id=r.getId(`cdk-overlay-`),d.classList.add(`cdk-overlay-pane`),f.appendChild(d),c.usePopover&&(f.setAttribute(`popover`,`manual`),f.classList.add(`cdk-overlay-popover`));let h=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return e_(h)?h.after(f):h?.type===`parent`?h.element.appendChild(f):e.getContainerElement().appendChild(f),new oh(new Qf(d,o,t),f,d,c,t.get(D),t.get(sx),i,t.get(gi),t.get(ax),n?.disableAnimations??t.get(va,null,{optional:!0})===`NoopAnimations`,t.get(Te$1),a)}var hx=(()=>{class t{scrollStrategies=u(rx);_positionBuilder=u(ux);_injector=u(ie$1);create(e){return dh(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(i){return new(i||t)};static ɵprov=x$1({token:t,factory:t.ɵfac})}return t})();var t_=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({providers:[hx],imports:[xe$1,xI,Ub,Ub]})}return t})();var Kj=[`tooltip`];var Xj=20;var Jj=new m(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let t=u(ie$1);return()=>ch(t,{scrollThrottle:Xj})}});var eV=new m(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var px=`tooltip-panel`;var tV={passive:!0};var nV=8;var iV=8;var rV=24;var oV=200;var Wc=(()=>{class t{_elementRef=u(O);_ngZone=u(D);_platform=u(ye);_ariaDescriber=u(BE);_focusMonitor=u(In$1);_dir=u(Xt$1);_injector=u(ie$1);_viewContainerRef=u(pt);_mediaMatcher=u(Os$1);_document=u(q);_renderer=u(Se);_animationsDisabled=ut$1();_defaultOptions=u(eV,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=mx;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=xn$1(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let i=xn$1(e);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=wr$1(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=wr$1(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let i=this._message;this._message=e!=null?String(e).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new I;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=nV}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ge$1(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(i);this._detach(),this._portal=this._portal||new zc(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(ge$1(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(e):(i._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&s._origin instanceof O)return this._overlayRef;this._detach()}let i=this._injector.get(Eo).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${px}`,o=lh(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation(`global`);return o.positionChanges.pipe(ge$1(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=dh(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(Jj)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ge$1(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ge$1(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ge$1(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ge$1(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let i=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();i.withPositions([this._addOffset(g(g({},r.main),o.main)),this._addOffset(g(g({},r.fallback),o.fallback))])}_addOffset(e){let i=iV,r=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-i:e.originY===`bottom`?e.offsetY=i:e.originX===`start`?e.offsetX=r?-i:i:e.originX===`end`&&(e.offsetX=r?i:-i),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,i=this.position,r;i==`above`||i==`below`?r={originX:`center`,originY:i==`above`?`top`:`bottom`}:i==`before`||i==`left`&&e||i==`right`&&!e?r={originX:`start`,originY:`center`}:(i==`after`||i==`right`&&e||i==`left`&&!e)&&(r={originX:`end`,originY:`center`});let{x:o,y:s}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,i=this.position,r;i==`above`?r={overlayX:`center`,overlayY:`bottom`}:i==`below`?r={overlayX:`center`,overlayY:`top`}:i==`before`||i==`left`&&e||i==`right`&&!e?r={overlayX:`end`,overlayY:`center`}:(i==`after`||i==`right`&&e||i==`left`&&!e)&&(r={overlayX:`start`,overlayY:`center`});let{x:o,y:s}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),bt$1(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,i){return this.position===`above`||this.position===`below`?i===`top`?i=`bottom`:i===`bottom`&&(i=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:i}}_updateCurrentPositionClass(e){let{overlayY:i,originX:r,originY:o}=e,s;if(i===`center`?this._dir&&this._dir.value===`rtl`?s=r===`end`?`left`:`right`:s=r===`start`?`left`:`right`:s=i===`bottom`&&o===`top`?`above`:`below`,s!==this._currentPosition){let a=this._overlayRef;if(a){let c=`${this._cssClassPrefix}-${px}-`;a.removePanelClass(c+this._currentPosition),a.addPanelClass(c+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let i=e.targetTouches?.[0],r=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let i;e.x!==void 0&&e.y!==void 0&&(i=e),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let i=e.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;i!==r&&!r.contains(i)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,e),this._addListener(`touchcancel`,e)}}}_addListener(e,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,i,tV))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let i=this._elementRef.nativeElement,r=i.style;(e===`on`||i.nodeName!==`INPUT`&&i.nodeName!==`TEXTAREA`)&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect=`none`),(e===`on`||!i.draggable)&&(r.webkitUserDrag=`none`),r.touchAction=`none`,r.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||bt$1({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type===`keydown`?this._isTooltipVisible()&&e.keyCode===27&&!Fs$1(e):!0;static ɵfac=function(i){return new(i||t)};static ɵdir=M({type:t,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(i,r){i&2&&k(`mat-mdc-tooltip-disabled`,r.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return t})();var mx=(()=>{class t{_changeDetectorRef=u(Le);_elementRef=u(O);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=ut$1();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new I;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>rV&&e.width>=oV}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let i=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(i.classList.remove(e?o:r),i.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let s=getComputedStyle(i);(s.getPropertyValue(`animation-duration`)===`0s`||s.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(i.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function(i){return new(i||t)};static ɵcmp=T({type:t,selectors:[[`mat-tooltip-component`]],viewQuery:function(i,r){if(i&1&&_t(Kj,7),i&2){let o;U$1(o=z())&&(r._tooltip=o.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(i,r){i&1&&B$1(`mouseleave`,function(s){return r._handleMouseLeave(s)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(i,r){i&1&&(Ue$1(0,`div`,1,0),tu(`animationend`,function(s){return r._handleAnimationEnd(s)}),Ue$1(2,`div`,2),j(3),$e$1()()),i&2&&(gt(r.tooltipClass),k(`mdc-tooltip--multiline`,r._isMultiline),y(3),ct(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return t})();var n_=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Y({type:t});static ɵinj=V({imports:[pb,t_,xe$1,$c]})}return t})();var Dr=(()=>{class t{getToken(){return window.localStorage.jwtToken}saveToken(e){window.localStorage.jwtToken=e}destroyToken(){window.localStorage.removeItem(`jwtToken`)}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵprov=E({token:t,factory:t.ɵfac})}}return t})();var Tn$1=(()=>{class t{constructor(e,i){this.http=e,this.jwtService=i}formatErrors(e){return Or(e.error)}get(e,i=new ln$1){return this.http.get(`${lc.api_url}${e}`,{params:i}).pipe(Gt$1(this.formatErrors))}put(e,i={}){return this.http.put(`${lc.api_url}${e}`,JSON.stringify(i)).pipe(Gt$1(this.formatErrors))}post(e,i={}){return this.http.post(`${lc.api_url}${e}`,JSON.stringify(i)).pipe(Gt$1(this.formatErrors))}delete(e){return this.http.delete(`${lc.api_url}${e}`).pipe(Gt$1(this.formatErrors))}static{this.ɵfac=function(i){return new(i||t)(C(fr$1),C(Dr))}}static{this.ɵprov=E({token:t,factory:t.ɵfac})}}return t})();function sV(t){return t.title.toLowerCase().includes(`checkpoint ledger`)}var Bs$1=(()=>{class t{constructor(e){this.apiService=e}query(e){let i={};return Object.entries(e.filters).forEach(([r,o])=>{i[r]=String(o)}),this.apiService.get(`/articles`+(e.type===`feed`?`/feed`:``),new ln$1({fromObject:i})).pipe(L(r=>{let o=r.articles.filter(s=>!sV(s));return{articles:o,articlesCount:o.length?r.articlesCount:0}}))}get(e){return this.apiService.get(`/articles/`+e).pipe(L(i=>i.article))}destroy(e){return this.apiService.delete(`/articles/`+e)}save(e){return e.slug?this.apiService.put(`/articles/`+e.slug,{article:e}).pipe(L(i=>i.article)):this.apiService.post(`/articles/`,{article:e}).pipe(L(i=>i.article))}favorite(e){return this.apiService.post(`/articles/`+e+`/favorite`)}unfavorite(e){return this.apiService.delete(`/articles/`+e+`/favorite`)}static{this.ɵfac=function(i){return new(i||t)(C(Tn$1))}}static{this.ɵprov=E({token:t,factory:t.ɵfac})}}return t})();var Mn$1=(()=>{class t{constructor(e,i,r){this.apiService=e,this.http=i,this.jwtService=r,this.currentUserSubject=new Me$1({}),this.currentUser=this.currentUserSubject.asObservable().pipe(Lo()),this.isAuthenticatedSubject=new Rr(1),this.isAuthenticated=this.isAuthenticatedSubject.asObservable()}populate(){this.jwtService.getToken()?this.apiService.get(`/user`).subscribe(e=>this.setAuth(e.user),e=>this.purgeAuth()):this.purgeAuth()}setAuth(e){this.jwtService.saveToken(e.token),this.currentUserSubject.next(e),this.isAuthenticatedSubject.next(!0)}purgeAuth(){this.jwtService.destroyToken(),this.currentUserSubject.next({}),this.isAuthenticatedSubject.next(!1)}attemptAuth(e,i){let r=e===`login`?`/login`:``;return this.apiService.post(`/users`+r,{user:i}).pipe(L(o=>(this.setAuth(o.user),o)))}getCurrentUser(){return this.currentUserSubject.value}update(e){return this.apiService.put(`/user`,{user:e}).pipe(L(i=>(this.currentUserSubject.next(i.user),i.user)))}static{this.ɵfac=function(i){return new(i||t)(C(Tn$1),C(fr$1),C(Dr))}}static{this.ɵprov=E({token:t,factory:t.ɵfac})}}return t})();var bx=(()=>{class t{constructor(e,i){this.router=e,this.userService=i}canActivate(e,i){return this.userService.isAuthenticated.pipe(Lt$1(1))}static{this.ɵfac=function(i){return new(i||t)(C(Nt$1),C(Mn$1))}}static{this.ɵprov=E({token:t,factory:t.ɵfac})}}return t})();var _x=(()=>{class t{constructor(e){this.apiService=e}add(e,i){return this.apiService.post(`/articles/${e}/comments`,{comment:{body:i}}).pipe(L(r=>r.comment))}getAll(e){return this.apiService.get(`/articles/${e}/comments`).pipe(L(i=>i.comments))}destroy(e,i){return this.apiService.delete(`/articles/${i}/comments/${e}`)}static{this.ɵfac=function(i){return new(i||t)(C(Tn$1))}}static{this.ɵprov=E({token:t,factory:t.ɵfac})}}return t})();var uh=(()=>{class t{constructor(e){this.apiService=e}get(e){return this.apiService.get(`/profiles/`+e).pipe(L(i=>i.profile))}follow(e){return this.apiService.post(`/profiles/`+e+`/follow`)}unfollow(e){return this.apiService.delete(`/profiles/`+e+`/follow`)}static{this.ɵfac=function(i){return new(i||t)(C(Tn$1))}}static{this.ɵprov=E({token:t,factory:t.ɵfac})}}return t})();var yx=(()=>{class t{constructor(e){this.apiService=e}getAll(){return this.apiService.get(`/tags`).pipe(L(e=>e.tags))}static{this.ɵfac=function(i){return new(i||t)(C(Tn$1))}}static{this.ɵprov=E({token:t,factory:t.ɵfac})}}return t})();var fh=`data:image/svg+xml,`+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect width="128" height="128" fill="#bdbdbd"/><circle cx="64" cy="48" r="24" fill="#fff"/><ellipse cx="64" cy="112" rx="40" ry="32" fill="#fff"/></svg>`);var wx=[{key:`azure`,label:`Azure`,primary:`#1565c0`,secondary:`#00bcd4`},{key:`violet`,label:`Violet`,primary:`#7c4dff`,secondary:`#ff4081`},{key:`rose`,label:`Rose`,primary:`#e91e63`,secondary:`#ff9800`},{key:`green`,label:`Green`,primary:`#2e7d32`,secondary:`#8bc34a`},{key:`orange`,label:`Orange`,primary:`#e65100`,secondary:`#ffc107`}];var Sx=(()=>{class t{constructor(){this.darkKey=`dark-theme`,this.paletteKey=`theme-palette`,this.darkMode=new Me$1(this.loadDark()),this.palette=new Me$1(this.loadPalette()),this.isDarkMode$=this.darkMode.asObservable(),this.palette$=this.palette.asObservable(),this.palettes=wx,this.applyDark(this.darkMode.value),this.applyPalette(this.palette.value)}toggleDark(){let e=!this.darkMode.value;this.darkMode.next(e),this.applyDark(e),localStorage.setItem(this.darkKey,JSON.stringify(e))}setPalette(e){this.palette.next(e),this.applyPalette(e),localStorage.setItem(this.paletteKey,e)}loadDark(){let e=localStorage.getItem(this.darkKey);return e!==null?JSON.parse(e):window.matchMedia(`(prefers-color-scheme: dark)`).matches}loadPalette(){return localStorage.getItem(this.paletteKey)||`azure`}applyDark(e){document.body.classList.toggle(`dark-theme`,e)}applyPalette(e){wx.forEach(i=>document.body.classList.remove(`theme-`+i.key)),document.body.classList.add(`theme-`+e)}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵprov=E({token:t,factory:t.ɵfac,providedIn:`root`})}}return t})();var Cx=(()=>{class t{constructor(e){this.jwtService=e}intercept(e,i){let r={"Content-Type":`application/json`,Accept:`application/json`},o=this.jwtService.getToken();o&&(r.Authorization=`Token ${o}`);let s=e.clone({setHeaders:r});return i.handle(s)}static{this.ɵfac=function(i){return new(i||t)(C(Dr))}}static{this.ɵprov=E({token:t,factory:t.ɵfac})}}return t})();var ooe=(()=>{class t{static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵmod=Y({type:t})}static{this.ɵinj=V({providers:[{provide:Au,useClass:Cx,multi:!0},Tn$1,Bs$1,bx,_x,Dr,uh,yx,Mn$1],imports:[ur$1]})}}return t})();var lV=[`*`];var Dx=t=>[`/profile`,t];var Ex=(()=>{class t{onImgError(e){e.target.src=fh}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵcmp=T({type:t,selectors:[[`app-article-meta`]],inputs:{article:`article`},standalone:!1,ngContentSelectors:lV,decls:10,vars:12,consts:[[1,`article-meta-row`],[3,`routerLink`],[3,`error`,`src`],[1,`meta-info`],[1,`author-name`,3,`routerLink`],[1,`article-date`]],template:function(i,r){i&1&&(ve$1(),b(0,`div`,0)(1,`a`,1)(2,`img`,2),B$1(`error`,function(s){return r.onImgError(s)}),_$1()(),b(3,`div`,3)(4,`a`,4),j(5),_$1(),b(6,`div`,5),j(7),$n$1(8,`date`),_$1()(),H$1(9),_$1()),i&2&&(y(),ee$1(`routerLink`,Li(8,Dx,r.article.author.username)),y(),ee$1(`src`,r.article.author.image,so),y(2),ee$1(`routerLink`,Li(10,Dx,r.article.author.username)),y(),yt(` `,r.article.author.username,` `),y(2),yt(` `,$a(8,5,r.article.createdAt,`longDate`),` `))},dependencies:[En$1,ec],encapsulation:2})}}return t})();var uV=[`*`];var Ix=(()=>{class t{constructor(e,i,r){this.articlesService=e,this.router=i,this.userService=r,this.toggle=new W$1,this.isSubmitting=ne$1(!1)}toggleFavorite(){this.isSubmitting.set(!0),this.userService.isAuthenticated.pipe(hn$1(e=>e?this.article.favorited?this.articlesService.unfavorite(this.article.slug).pipe(ze(i=>{this.isSubmitting.set(!1),this.toggle.emit(!1)},i=>this.isSubmitting.set(!1))):this.articlesService.favorite(this.article.slug).pipe(ze(i=>{this.isSubmitting.set(!1),this.toggle.emit(!0)},i=>this.isSubmitting.set(!1))):(this.router.navigateByUrl(`/login`),R(null)))).subscribe()}static{this.ɵfac=function(i){return new(i||t)(A(Bs$1),A(Nt$1),A(Mn$1))}}static{this.ɵcmp=T({type:t,selectors:[[`app-favorite-button`]],inputs:{article:`article`},outputs:{toggle:`toggle`},standalone:!1,ngContentSelectors:uV,decls:5,vars:3,consts:[[`mat-icon-button`,``,`matTooltip`,`Favorite`,3,`click`,`disabled`,`color`],[2,`font-size`,`0.85rem`]],template:function(i,r){i&1&&(ve$1(),b(0,`button`,0),B$1(`click`,function(){return r.toggleFavorite()}),b(1,`mat-icon`),j(2),_$1()(),b(3,`span`,1),H$1(4),_$1()),i&2&&(ee$1(`disabled`,r.isSubmitting())(`color`,r.article.favorited?`warn`:``),y(2),ct(r.article.favorited?`favorite`:`favorite_border`))},dependencies:[Vc,Ps$1,Wc],encapsulation:2})}}return t})();var hV=t=>[`/article`,t];function pV(t,n){if(t&1&&(b(0,`mat-chip`,7),j(1),_$1()),t&2){let e=n.$implicit;y(),yt(` `,e,` `)}}var xx=(()=>{class t{onToggleFavorite(e){this.article=G(g({},this.article),{favorited:e,favoritesCount:this.article.favoritesCount+(e?1:-1)})}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵcmp=T({type:t,selectors:[[`app-article-preview`]],inputs:{article:`article`},standalone:!1,decls:16,vars:8,consts:[[1,`article-card`],[3,`article`],[3,`toggle`,`article`],[3,`routerLink`],[1,`article-description`],[1,`article-footer`],[1,`read-more`],[`disabled`,``,1,`tag-chip`]],template:function(i,r){i&1&&(b(0,`mat-card`,0)(1,`mat-card-content`)(2,`app-article-meta`,1)(3,`app-favorite-button`,2),B$1(`toggle`,function(s){return r.onToggleFavorite(s)}),j(4),_$1()(),b(5,`a`,3)(6,`h3`),j(7),_$1(),b(8,`p`,4),j(9),_$1(),b(10,`div`,5)(11,`span`,6),j(12,`Read more...`),_$1(),b(13,`mat-chip-set`),on$1(14,pV,2,1,`mat-chip`,7,rn$1),_$1()()()()()),i&2&&(y(2),ee$1(`article`,r.article),y(),ee$1(`article`,r.article),y(),yt(` `,r.article.favoritesCount,` `),y(),ee$1(`routerLink`,Li(6,hV,r.article.slug)),y(2),ct(r.article.title),y(2),ct(r.article.description),y(5),sn$1(r.article.tagList))},dependencies:[En$1,rI,oI,Bc,Lb,Ex,Ix],encapsulation:2})}}return t})();function gV(t,n){if(t&1&&be$1(0,`app-article-preview`,0),t&2){let e=n.$implicit;ee$1(`article`,e)}}function vV(t,n){t&1&&(b(0,`div`,1),be$1(1,`mat-progress-bar`,4),_$1())}function bV(t,n){t&1&&(b(0,`div`,2),j(1,` No articles are here... yet. `),_$1())}function _V(t,n){if(t&1){let e=yn$1();b(0,`button`,6),B$1(`click`,function(){let r=it$1(e).$implicit;return rt$1(pe$1(3).setPageTo(r))}),j(1),_$1()}if(t&2){let e=n.$implicit;ee$1(`color`,e===pe$1(2).currentPage?`primary`:``),y(),yt(` `,e,` `)}}function yV(t,n){if(t&1&&(b(0,`div`,3),on$1(1,_V,2,2,`button`,5,rn$1),_$1()),t&2){let e=pe$1();y(),sn$1(e.totalPages)}}function wV(t,n){if(t&1&&(on$1(0,gV,1,1,`app-article-preview`,0,rn$1),le(2,vV,2,0,`div`,1),le(3,bV,2,0,`div`,2),le(4,yV,3,0,`div`,3)),t&2){let e=n;sn$1(e.results),y(2),de$1(e.loading?2:-1),y(),de$1(!e.loading&&!e.results.length?3:-1),y(),de$1(!e.loading&&e.totalPages.length>1?4:-1)}}var Toe=(()=>{class t{constructor(e){this.articlesService=e,this.request=new Me$1(null),this.view=this.request.pipe(De$1(i=>i!==null),Ze$1(i=>this.load(i)))}set config(e){e&&this.request.next({config:e,page:1})}setPageTo(e){let i=this.request.value;i&&this.request.next(G(g({},i),{page:e}))}load({config:e,page:i}){let r=this.limit?G(g({},e.filters),{limit:this.limit,offset:this.limit*(i-1)}):e.filters;return this.articlesService.query(G(g({},e),{filters:r})).pipe(L(o=>({loading:!1,currentPage:i,results:o.articles,totalPages:Array.from(new Array(Math.ceil(o.articlesCount/this.limit)),(s,a)=>a+1)})),Qe({loading:!0,currentPage:i,results:[],totalPages:[]}))}static{this.ɵfac=function(i){return new(i||t)(A(Bs$1))}}static{this.ɵcmp=T({type:t,selectors:[[`app-article-list`]],inputs:{limit:`limit`,config:`config`},standalone:!1,decls:2,vars:3,consts:[[3,`article`],[2,`padding`,`24px 0`],[2,`padding`,`24px 0`,`text-align`,`center`,`opacity`,`0.6`],[1,`pagination-row`],[`mode`,`indeterminate`],[`mat-mini-fab`,``,2,`margin`,`2px`,3,`color`],[`mat-mini-fab`,``,2,`margin`,`2px`,3,`click`,`color`]],template:function(i,r){if(i&1&&(le(0,wV,5,3),$n$1(1,`async`)),i&2){let o;de$1((o=co(1,1,r.view))?0:-1,o)}},dependencies:[KE,qI,xx,Ja],styles:[`[_nghost-%COMP%]{display:block}`]})}}return t})();var Uoe=(()=>{class t{constructor(e,i,r){this.profilesService=e,this.router=i,this.userService=r,this.toggle=new W$1,this.isSubmitting=ne$1(!1)}toggleFollowing(){this.isSubmitting.set(!0),this.userService.isAuthenticated.pipe(hn$1(e=>e?this.profile.following?this.profilesService.unfollow(this.profile.username).pipe(ze(i=>{this.isSubmitting.set(!1),this.toggle.emit(!1)},i=>this.isSubmitting.set(!1))):this.profilesService.follow(this.profile.username).pipe(ze(i=>{this.isSubmitting.set(!1),this.toggle.emit(!0)},i=>this.isSubmitting.set(!1))):(this.router.navigateByUrl(`/login`),R(null)))).subscribe()}static{this.ɵfac=function(i){return new(i||t)(A(uh),A(Nt$1),A(Mn$1))}}static{this.ɵcmp=T({type:t,selectors:[[`app-follow-button`]],inputs:{profile:`profile`},outputs:{toggle:`toggle`},standalone:!1,decls:4,vars:5,consts:[[`mat-stroked-button`,``,3,`click`,`disabled`,`color`]],template:function(i,r){i&1&&(b(0,`button`,0),B$1(`click`,function(){return r.toggleFollowing()}),b(1,`mat-icon`),j(2),_$1(),j(3),_$1()),i&2&&(ee$1(`disabled`,r.isSubmitting())(`color`,r.profile.following?`primary`:``),y(2),ct(r.profile.following?`person_remove`:`person_add`),y(),ou(` `,r.profile.following?`Unfollow`:`Follow`,` `,r.profile.username,`
`))},dependencies:[Uf,Ps$1],encapsulation:2})}}return t})();function SV(t,n){if(t&1&&(b(0,`li`),j(1),_$1()),t&2){let e=n.$implicit;y(),yt(` `,e,` `)}}function CV(t,n){if(t&1&&(b(0,`ul`,0),on$1(1,SV,2,1,`li`,null,rn$1),_$1()),t&2){let e=pe$1();y(),sn$1(e.errorList)}}var qoe=(()=>{class t{constructor(){this.formattedErrors=[]}set errors(e){this.formattedErrors=Object.keys(e.errors||{}).map(i=>`${i} ${e.errors[i]}`)}get errorList(){return this.formattedErrors}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵcmp=T({type:t,selectors:[[`app-list-errors`]],inputs:{errors:`errors`},standalone:!1,decls:1,vars:1,consts:[[1,`error-list`]],template:function(i,r){i&1&&le(0,CV,3,0,`ul`,0),i&2&&de$1(r.errorList?0:-1)},encapsulation:2})}}return t})();var Nx=(()=>{class t{constructor(e,i,r,o){this.templateRef=e,this.userService=i,this.viewContainer=r,this.changeDetector=o}ngOnInit(){this.userService.isAuthenticated.subscribe(e=>{e&&this.condition||!e&&!this.condition?this.viewContainer.createEmbeddedView(this.templateRef):this.viewContainer.clear(),this.changeDetector.markForCheck()})}set appShowAuthed(e){this.condition=e}static{this.ɵfac=function(i){return new(i||t)(A(Rt$1),A(Mn$1),A(pt),A(Le))}}static{this.ɵdir=M({type:t,selectors:[[``,`appShowAuthed`,``]],inputs:{appShowAuthed:`appShowAuthed`},standalone:!1})}}return t})();var EV=[cb,Cb,Db,Ib,jb,Wb,Vs$1,qb,Yb,Zb,Qb,n_];var Sse=(()=>{class t{static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵmod=Y({type:t})}static{this.ɵinj=V({providers:[iv(ov(),rv())],imports:[ur$1,yv,wv,If,EV,ur$1,yv,wv,If,cb,Cb,Db,Ib,jb,Wb,Vs$1,qb,Yb,Zb,Qb,n_]})}}return t})();var Dse=(()=>{class t{constructor(){this.today=Date.now()}static{this.ɵfac=function(i){return new(i||t)}}static{this.ɵcmp=T({type:t,selectors:[[`app-layout-footer`]],standalone:!1,decls:10,vars:4,consts:[[1,`container`],[`routerLink`,`/`,2,`font-weight`,`700`],[`href`,`https://hamidihamza.com`]],template:function(i,r){i&1&&(b(0,`footer`)(1,`div`,0)(2,`a`,1),j(3,`forum`),_$1(),b(4,`span`),j(5),$n$1(6,`date`),b(7,`a`,2),j(8,`Hamza HAMIDI`),_$1(),j(9,`. Code licensed under MIT. `),_$1()()()),i&2&&(y(5),yt(` © `,$a(6,1,r.today,`yyyy`),`. A project customized by `))},dependencies:[En$1,ec],encapsulation:2})}}return t})();function Tx(t,n){let i=!n?.manualCleanup?n?.injector?.get(Be)??u(Be):null,r=IV(n?.equal),o;n?.requireSync?o=ne$1({kind:0},{equal:r}):o=ne$1({kind:1,value:n?.initialValue},{equal:r});let s,a=t.subscribe({next:c=>o.set({kind:1,value:c}),error:c=>{o.set({kind:2,error:c}),s?.()},complete:()=>{s?.()}});if(n?.requireSync&&o().kind===0)throw new w(601,!1);return s=i?.onDestroy(a.unsubscribe.bind(a)),Xe$1(()=>{let c=o();switch(c.kind){case 1:return c.value;case 2:throw c.error;case 0:throw new w(601,!1)}},{equal:n?.equal})}function IV(t=Object.is){return(n,e)=>n.kind===1&&e.kind===1&&t(n.value,e.value)}var Mx={name:`ang2-forum`,version:`22.2.0`,license:`MIT`,scripts:{ng:`ng`,start:`ng serve`,build:`ng build --configuration production --base-href ./ `,test:`ng test`,lint:`ng lint`},engines:{node:`^22.22.3 || ^24.15.0 || ^26.0.0`},private:!0,dependencies:{"@angular/animations":`^22.1.6`,"@angular/cdk":`^22.1.6`,"@angular/common":`^22.1.6`,"@angular/compiler":`^22.1.6`,"@angular/core":`^22.1.6`,"@angular/forms":`^22.1.6`,"@angular/material":`^22.1.6`,"@angular/platform-browser":`^22.1.6`,"@angular/platform-browser-dynamic":`^22.1.6`,"@angular/router":`^22.1.6`,marked:`^4.0.10`,rxjs:`^7.8.2`,tslib:`^2.0.0`,"zone.js":`~0.15.1`},devDependencies:{"@analogjs/vite-plugin-angular":`^2.7.2`,"@analogjs/vitest-angular":`^2.7.2`,"@angular/build":`^22.1.8`,"@angular/cli":`^22.1.8`,"@angular/compiler-cli":`^22.1.6`,"@types/marked":`^4.0.1`,"angular-eslint":`^22.5.0`,eslint:`^10.10.0`,jsdom:`^26.1.0`,typescript:`~6.0.3`,"typescript-eslint":`^8.70.0`,vitest:`^4.1.11`}};var NV=()=>({exact:!0});var Ax=t=>[`/profile`,t];function TV(t,n){t&1&&(Ha(0),b(1,`a`,17),j(2,`Home`),_$1(),b(3,`a`,18),j(4,`Sign in`),_$1(),b(5,`a`,19),j(6,`Sign up`),_$1(),Ua())}function MV(t,n){if(t&1){let e=yn$1();b(0,`img`,25),B$1(`error`,function(r){it$1(e);return rt$1(pe$1(2).onImgError(r))}),_$1()}if(t&2)ee$1(`src`,pe$1(2).currentUser().image,so)}function AV(t,n){if(t&1&&(Ha(0),b(1,`a`,20),j(2,`Home`),_$1(),b(3,`a`,21)(4,`mat-icon`),j(5,`edit`),_$1(),j(6,` New Article `),_$1(),b(7,`a`,22)(8,`mat-icon`),j(9,`settings`),_$1(),j(10,` Settings `),_$1(),b(11,`a`,23),le(12,MV,1,1,`img`,24),j(13),_$1(),Ua()),t&2){let e=pe$1();y(),ee$1(`routerLinkActiveOptions`,_g(4,NV)),y(10),ee$1(`routerLink`,Li(5,Ax,e.currentUser().username)),y(),de$1(e.currentUser().image?12:-1),y(),yt(` `,e.currentUser().username,` `)}}function RV(t,n){if(t&1){let e=yn$1();b(0,`div`,26),B$1(`click`,function(){it$1(e);let r=pe$1();return rt$1(r.panelOpen=!1)}),_$1()}}function kV(t,n){if(t&1){let e=yn$1();b(0,`div`,27)(1,`img`,28),B$1(`error`,function(r){it$1(e);return rt$1(pe$1().onImgError(r))}),_$1(),b(2,`div`,29),j(3),_$1(),b(4,`div`,30)(5,`a`,31),B$1(`click`,function(){it$1(e);let r=pe$1();return rt$1(r.panelOpen=!1)}),b(6,`mat-icon`),j(7,`person`),_$1(),j(8,` Profile `),_$1(),b(9,`a`,32),B$1(`click`,function(){it$1(e);let r=pe$1();return rt$1(r.panelOpen=!1)}),b(10,`mat-icon`),j(11,`settings`),_$1(),j(12,` Settings `),_$1(),b(13,`a`,33),B$1(`click`,function(){it$1(e);let r=pe$1();return rt$1(r.panelOpen=!1)}),b(14,`mat-icon`),j(15,`edit`),_$1(),j(16,` New Article `),_$1()()()}if(t&2){let e=pe$1();y(),ee$1(`src`,e.currentUser().image,so),y(2),ct(e.currentUser().username),y(2),ee$1(`routerLink`,Li(3,Ax,e.currentUser().username))}}function OV(t,n){if(t&1){let e=yn$1();b(0,`div`,27)(1,`div`,30)(2,`a`,34),B$1(`click`,function(){it$1(e);let r=pe$1();return rt$1(r.panelOpen=!1)}),b(3,`mat-icon`),j(4,`login`),_$1(),j(5,` Sign in `),_$1(),b(6,`a`,35),B$1(`click`,function(){it$1(e);let r=pe$1();return rt$1(r.panelOpen=!1)}),b(7,`mat-icon`),j(8,`person_add`),_$1(),j(9,` Sign up `),_$1()()()}}function FV(t,n){if(t&1){let e=yn$1();b(0,`button`,12),$n$1(1,`async`),B$1(`click`,function(){let r=it$1(e).$implicit;return rt$1(pe$1().themeService.setPalette(r.key))}),b(2,`span`,36),be$1(3,`span`,37)(4,`span`,37),_$1(),b(5,`span`,13),j(6),_$1()()}if(t&2){let e=n.$implicit;k(`active`,co(1,7,pe$1().themeService.palette$)===e.key),y(3),Sn$1(`background`,e.primary),y(),Sn$1(`background`,e.secondary),y(2),ct(e.label)}}var jse=(()=>{class t{constructor(e,i){this.userService=e,this.themeService=i,this.currentUser=Tx(this.userService.currentUser,{initialValue:{}}),this.panelOpen=!1,this.appVersion=Mx.version}onImgError(e){e.target.src=fh}static{this.ɵfac=function(i){return new(i||t)(A(Mn$1),A(Sx))}}static{this.ɵcmp=T({type:t,selectors:[[`app-layout-header`]],standalone:!1,decls:38,vars:14,consts:[[`color`,`primary`],[`routerLink`,`/`,1,`toolbar-nav-link`,2,`font-weight`,`700`,`font-size`,`1.3rem`],[1,`spacer`],[4,`appShowAuthed`],[`mat-icon-button`,``,`matTooltip`,`Menu`,3,`click`],[1,`theme-panel-backdrop`],[1,`theme-panel`],[1,`theme-panel-header`],[`mat-icon-button`,``,3,`click`],[`class`,`panel-user`,4,`appShowAuthed`],[1,`theme-panel-section`],[1,`theme-panel-label`],[1,`palette-option`,3,`click`],[1,`palette-name`],[1,`palette-grid`],[1,`palette-option`,3,`active`],[1,`panel-footer`],[`mat-button`,``,`routerLink`,`/`,1,`toolbar-nav-link`],[`mat-button`,``,`routerLink`,`/login`,`routerLinkActive`,`active`,1,`toolbar-nav-link`],[`mat-button`,``,`routerLink`,`/register`,`routerLinkActive`,`active`,1,`toolbar-nav-link`],[`mat-button`,``,`routerLink`,`/`,`routerLinkActive`,`active`,1,`toolbar-nav-link`,3,`routerLinkActiveOptions`],[`mat-button`,``,`routerLink`,`/editor`,`routerLinkActive`,`active`,1,`toolbar-nav-link`],[`mat-button`,``,`routerLink`,`/settings`,`routerLinkActive`,`active`,1,`toolbar-nav-link`],[`mat-button`,``,`routerLinkActive`,`active`,1,`toolbar-nav-link`,3,`routerLink`],[1,`user-pic-small`,3,`src`],[1,`user-pic-small`,3,`error`,`src`],[1,`theme-panel-backdrop`,3,`click`],[1,`panel-user`],[1,`panel-avatar`,3,`error`,`src`],[1,`panel-username`],[1,`panel-user-links`],[`mat-button`,``,3,`click`,`routerLink`],[`mat-button`,``,`routerLink`,`/settings`,3,`click`],[`mat-button`,``,`routerLink`,`/editor`,3,`click`],[`mat-button`,``,`routerLink`,`/login`,3,`click`],[`mat-button`,``,`routerLink`,`/register`,3,`click`],[1,`palette-swatch`],[1,`swatch-half`]],template:function(i,r){i&1&&(b(0,`mat-toolbar`,0)(1,`a`,1),j(2,`forum`),_$1(),be$1(3,`span`,2),_n$1(4,TV,7,0,`ng-container`,3)(5,AV,14,7,`ng-container`,3),b(6,`button`,4),B$1(`click`,function(){return r.panelOpen=!r.panelOpen}),b(7,`mat-icon`),j(8,`menu`),_$1()()(),le(9,RV,1,0,`div`,5),b(10,`div`,6)(11,`div`,7)(12,`button`,8),B$1(`click`,function(){return r.panelOpen=!1}),b(13,`mat-icon`),j(14,`close`),_$1()()(),_n$1(15,kV,17,5,`div`,9)(16,OV,10,0,`div`,9),be$1(17,`mat-divider`),b(18,`div`,10)(19,`div`,11),j(20,`Appearance`),_$1(),b(21,`button`,12),B$1(`click`,function(){return r.themeService.toggleDark()}),b(22,`mat-icon`),j(23),$n$1(24,`async`),_$1(),b(25,`span`,13),j(26),$n$1(27,`async`),_$1()()(),be$1(28,`mat-divider`),b(29,`div`,10)(30,`div`,11),j(31,`Color`),_$1(),b(32,`div`,14),on$1(33,FV,7,9,`button`,15,rn$1),_$1()(),b(35,`div`,16)(36,`span`),j(37),_$1()()()),i&2&&(y(4),ee$1(`appShowAuthed`,!1),y(),ee$1(`appShowAuthed`,!0),y(4),de$1(r.panelOpen?9:-1),y(),k(`open`,r.panelOpen),y(5),ee$1(`appShowAuthed`,!0),y(),ee$1(`appShowAuthed`,!1),y(7),ct(co(24,10,r.themeService.isDarkMode$)?`light_mode`:`dark_mode`),y(3),ct(co(27,12,r.themeService.isDarkMode$)?`Light mode`:`Dark mode`),y(7),sn$1(r.themeService.palettes),y(4),yt(`Forum v`,r.appVersion))},dependencies:[En$1,tb,Nx,SE,Uf,Vc,Ps$1,GI,Wc,Ja],encapsulation:2})}}return t})();var _=(function(n){return n[n.State=0]=`State`,n[n.Transition=1]=`Transition`,n[n.Sequence=2]=`Sequence`,n[n.Group=3]=`Group`,n[n.Animate=4]=`Animate`,n[n.Keyframes=5]=`Keyframes`,n[n.Style=6]=`Style`,n[n.Trigger=7]=`Trigger`,n[n.Reference=8]=`Reference`,n[n.AnimateChild=9]=`AnimateChild`,n[n.AnimateRef=10]=`AnimateRef`,n[n.Query=11]=`Query`,n[n.Stagger=12]=`Stagger`,n})(_||{});var x=`*`;function nn(n,e=null){return{type:_.Sequence,steps:n,options:e}}function Tt(n){return{type:_.Style,styles:n,offset:null}}var ie=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(e=0,t=0){this.totalTime=e+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){let t=e==`start`?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}};var ve=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(e){this.players=e;let t=0,i=0,s=0,r=this.players.length;r==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++t==r&&this._onFinish()}),o.onDestroy(()=>{++i==r&&this._onDestroy()}),o.onStart(()=>{++s==r&&this._onStart()})}),this.totalTime=this.players.reduce((o,a)=>Math.max(o,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){let t=e*this.totalTime;this.players.forEach(i=>{let s=i.totalTime?Math.min(1,t/i.totalTime):1;i.setPosition(s)})}getPosition(){let e=this.players.reduce((t,i)=>t===null||i.totalTime>t.totalTime?i:t,null);return e!=null?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){let t=e==`start`?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}};var Ne=`!`;function sn(n){return new w(3e3,!1)}function hs(){return new w(3100,!1)}function ms(){return new w(3101,!1)}function ds(n){return new w(3001,!1)}function fs(n){return new w(3003,!1)}function ps(n){return new w(3004,!1)}function on(n,e){return new w(3005,!1)}function an(){return new w(3006,!1)}function ln(){return new w(3007,!1)}function un(n,e){return new w(3008,!1)}function cn(n){return new w(3002,!1)}function hn(n,e,t,i,s){return new w(3010,!1)}function mn(){return new w(3011,!1)}function dn(){return new w(3012,!1)}function fn(){return new w(3200,!1)}function pn(){return new w(3202,!1)}function gn(){return new w(3013,!1)}function yn(n){return new w(3014,!1)}function _n(n){return new w(3015,!1)}function Sn(n){return new w(3016,!1)}function En(n,e){return new w(3404,!1)}function gs(n){return new w(3502,!1)}function vn(n){return new w(3503,!1)}function Tn(){return new w(3300,!1)}function bn(n){return new w(3504,!1)}function wn(n){return new w(3301,!1)}function An(n,e){return new w(3302,!1)}function Cn(n){return new w(3303,!1)}function Nn(n,e){return new w(3400,!1)}function Pn(n){return new w(3401,!1)}function Mn(n){return new w(3402,!1)}function Dn(n,e){return new w(3505,!1)}function ne(n){switch(n.length){case 0:return new ie;case 1:return n[0];default:return new ve(n)}}function Ct(n,e,t=new Map,i=new Map){let s=[],r=[],o=-1,a=null;if(e.forEach(l=>{let u=l.get(`offset`),h=u==o,c=h&&a||new Map;l.forEach((S,y)=>{let d=y,g=S;if(y!==`offset`)switch(d=n.normalizePropertyName(d,s),g){case Ne:g=t.get(y);break;case x:g=i.get(y);break;default:g=n.normalizeStyleValue(y,d,g,s);break}c.set(d,g)}),h||r.push(c),a=c,o=u}),s.length)throw gs(s);return r}function Ue(n,e,t,i){switch(e){case`start`:n.onStart(()=>i(t&&bt(t,`start`,n)));break;case`done`:n.onDone(()=>i(t&&bt(t,`done`,n)));break;case`destroy`:n.onDestroy(()=>i(t&&bt(t,`destroy`,n)));break}}function bt(n,e,t){let i=t.totalTime,s=!!t.disabled,r=$e(n.element,n.triggerName,n.fromState,n.toState,e||n.phaseName,i??n.totalTime,s),o=n._data;return o!=null&&(r._data=o),r}function $e(n,e,t,i,s=``,r=0,o){return{element:n,triggerName:e,fromState:t,toState:i,phaseName:s,totalTime:r,disabled:!!o}}function K(n,e,t){let i=n.get(e);return i||n.set(e,i=t),i}function Nt(n){let e=n.indexOf(`:`);return[n.substring(1,e),n.slice(e+1)]}var ys=typeof document>`u`?null:document.documentElement;function Ge(n){let e=n.parentNode||n.host||null;return e===ys?null:e}function _s(n){return n.substring(1,6)==`ebkit`}var de=null;var rn=!1;function Fn(n){de||(de=Ss()||{},rn=de.style?`WebkitAppearance`in de.style:!1);let e=!0;return de.style&&!_s(n)&&(e=n in de.style,!e&&rn&&(e=`Webkit`+n.charAt(0).toUpperCase()+n.slice(1)in de.style)),e}function Ss(){return typeof document<`u`?document.body:null}function Pt(n,e){for(;e;){if(e===n)return!0;e=Ge(e)}return!1}function Mt(n,e,t){if(t)return Array.from(n.querySelectorAll(e));let i=n.querySelector(e);return i?[i]:[]}var Es=1e3;var Dt=`{{`;var vs=`}}`;var Ft=`ng-enter`;var xe=`ng-leave`;var Pe=`ng-trigger`;var Me=`.ng-trigger`;var kt=`ng-animating`;var He=`.ng-animating`;function ee(n){if(typeof n==`number`)return n;let e=n.match(/^(-?[\.\d]+)(m?s)/);return!e||e.length<2?0:wt(parseFloat(e[1]),e[2])}function wt(n,e){return e===`s`?n*Es:n}function De(n,e,t){return typeof n==`object`&&n!==null&&Object.hasOwn(n,`duration`)?n:bs(n,e,t)}var Ts=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function bs(n,e,t){let i,s=0,r=``;if(typeof n==`string`){let o=n.match(Ts);if(o===null)return e.push(sn(n)),{duration:0,delay:0,easing:``};i=wt(parseFloat(o[1]),o[2]);let a=o[3];a!=null&&(s=wt(parseFloat(a),o[4]));let l=o[5];l&&(r=l)}else i=n;if(!t){let o=!1,a=e.length;i<0&&(e.push(hs()),o=!0),s<0&&(e.push(ms()),o=!0),o&&e.splice(a,0,sn(n))}return{duration:i,delay:s,easing:r}}function kn(n){return n.length?n[0]instanceof Map?n:n.map(e=>new Map(Object.entries(e))):[]}function H(n,e,t){e.forEach((i,s)=>{let r=We(s);t&&!t.has(s)&&t.set(s,n.style[r]),n.style[r]=i})}function ue(n,e){e.forEach((t,i)=>{let s=We(i);n.style[s]=``})}function Te(n){return Array.isArray(n)?n.length==1?n[0]:nn(n):n}function Rn(n,e,t){let i=e.params||{},s=Rt(n);s.length&&s.forEach(r=>{Object.hasOwn(i,r)||t.push(ds(r))})}var At=new RegExp(`${Dt}\\s*(.+?)\\s*${vs}`,`g`);function Rt(n){let e=[];if(typeof n==`string`){let t;for(;t=At.exec(n);)e.push(t[1]);At.lastIndex=0}return e}function be(n,e,t){let i=`${n}`,s=i.replace(At,(r,o)=>{let a=e[o];return a??(t.push(fs(o)),a=``),a.toString()});return s==i?n:s}var ws=/-+([a-z0-9])/g;function We(n){return n.replace(ws,(...e)=>e[1].toUpperCase())}function On(n,e){return n===0||e===0}function In(n,e,t){if(t.size&&e.length){let i=e[0],s=[];if(t.forEach((r,o)=>{i.has(o)||s.push(o),i.set(o,r)}),s.length)for(let r=1;r<e.length;r++){let o=e[r];s.forEach(a=>o.set(a,Ye(n,a)))}}return e}function B(n,e,t){switch(e.type){case _.Trigger:return n.visitTrigger(e,t);case _.State:return n.visitState(e,t);case _.Transition:return n.visitTransition(e,t);case _.Sequence:return n.visitSequence(e,t);case _.Group:return n.visitGroup(e,t);case _.Animate:return n.visitAnimate(e,t);case _.Keyframes:return n.visitKeyframes(e,t);case _.Style:return n.visitStyle(e,t);case _.Reference:return n.visitReference(e,t);case _.AnimateChild:return n.visitAnimateChild(e,t);case _.AnimateRef:return n.visitAnimateRef(e,t);case _.Query:return n.visitQuery(e,t);case _.Stagger:return n.visitStagger(e,t);default:throw ps(e.type)}}function Ye(n,e){return window.getComputedStyle(n)[e]}var Yt=(()=>{class n{validateStyleProperty(t){return Fn(t)}containsElement(t,i){return Pt(t,i)}getParentElement(t){return Ge(t)}query(t,i,s){return Mt(t,i,s)}computeStyle(t,i,s){return s||``}animate(t,i,s,r,o,a=[],l){return new ie(s,r)}static ɵfac=function(i){return new(i||n)};static ɵprov=E({token:n,factory:n.ɵfac})}return n})();var pe=class{static NOOP=new Yt};var ge=class{};var As=new Set([`width`,`height`,`minWidth`,`minHeight`,`maxWidth`,`maxHeight`,`left`,`top`,`bottom`,`right`,`fontSize`,`outlineWidth`,`outlineOffset`,`paddingTop`,`paddingLeft`,`paddingBottom`,`paddingRight`,`marginTop`,`marginLeft`,`marginBottom`,`marginRight`,`borderRadius`,`borderWidth`,`borderTopWidth`,`borderLeftWidth`,`borderRightWidth`,`borderBottomWidth`,`textIndent`,`perspective`]);var tt=class extends ge{normalizePropertyName(e,t){return We(e)}normalizeStyleValue(e,t,i,s){let r=``,o=i.toString().trim();if(As.has(t)&&i!==0&&i!==`0`)if(typeof i==`number`)r=`px`;else{let a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&s.push(on(e,i))}return o+r}};var it=`*`;function Cs(n,e){let t=[];return typeof n==`string`?n.split(/\s*,\s*/).forEach(i=>Ns(i,t,e)):t.push(n),t}function Ns(n,e,t){if(n[0]==`:`){let l=Ps(n,t);if(typeof l==`function`){e.push(l);return}n=l}let i=n.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return t.push(_n(n)),e;let s=i[1],r=i[2],o=i[3];e.push(Ln(s,o));let a=s==it&&o==it;r[0]==`<`&&!a&&e.push(Ln(o,s))}function Ps(n,e){switch(n){case`:enter`:return`void => *`;case`:leave`:return`* => void`;case`:increment`:return(t,i)=>parseFloat(i)>parseFloat(t);case`:decrement`:return(t,i)=>parseFloat(i)<parseFloat(t);default:return e.push(Sn(n)),`* => *`}}var Xe=new Set([`true`,`1`]);var Ze=new Set([`false`,`0`]);function Ln(n,e){let t=Xe.has(n)||Ze.has(n),i=Xe.has(e)||Ze.has(e);return(s,r)=>{let o=n==it||n==s,a=e==it||e==r;return!o&&t&&typeof s==`boolean`&&(o=s?Xe.has(n):Ze.has(n)),!a&&i&&typeof r==`boolean`&&(a=r?Xe.has(e):Ze.has(e)),o&&a}}var Gn=`:self`;var Ms=new RegExp(`s*${Gn}s*,?`,`g`);function xn(n,e,t,i){return new Bt(n).build(e,t,i)}var zn=``;var Bt=class{_driver;constructor(e){this._driver=e}build(e,t,i){let s=new jt(t);return this._resetContextStyleTimingState(s),B(this,Te(e),s)}_resetContextStyleTimingState(e){e.currentQuerySelector=zn,e.collectedStyles=new Map,e.collectedStyles.set(zn,new Map),e.currentTime=0}visitTrigger(e,t){let i=t.queryCount=0,s=t.depCount=0,r=[],o=[];return e.name.charAt(0)==`@`&&t.errors.push(an()),e.definitions.forEach(a=>{if(this._resetContextStyleTimingState(t),a.type==_.State){let l=a,u=l.name;u.toString().split(/\s*,\s*/).forEach(h=>{l.name=h,r.push(this.visitState(l,t))}),l.name=u}else if(a.type==_.Transition){let l=this.visitTransition(a,t);i+=l.queryCount,s+=l.depCount,o.push(l)}else t.errors.push(ln())}),{type:_.Trigger,name:e.name,states:r,transitions:o,queryCount:i,depCount:s,options:null}}visitState(e,t){let i=this.visitStyle(e.styles,t),s=e.options&&e.options.params||null;if(i.containsDynamicStyles){let r=new Set,o=s||{};i.styles.forEach(a=>{a instanceof Map&&a.forEach(l=>{Rt(l).forEach(u=>{Object.hasOwn(o,u)||r.add(u)})})}),r.size&&t.errors.push(un(e.name,[...r.values()]))}return{type:_.State,name:e.name,style:i,options:s?{params:s}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;let i=B(this,Te(e.animation),t),s=Cs(e.expr,t.errors);return{type:_.Transition,matchers:s,animation:i,queryCount:t.queryCount,depCount:t.depCount,options:fe(e.options)}}visitSequence(e,t){return{type:_.Sequence,steps:e.steps.map(i=>B(this,i,t)),options:fe(e.options)}}visitGroup(e,t){let i=t.currentTime,s=0,r=e.steps.map(o=>{t.currentTime=i;let a=B(this,o,t);return s=Math.max(s,t.currentTime),a});return t.currentTime=s,{type:_.Group,steps:r,options:fe(e.options)}}visitAnimate(e,t){let i=Rs(e.timings,t.errors);t.currentAnimateTimings=i;let s,r=e.styles?e.styles:Tt({});if(r.type==_.Keyframes)s=this.visitKeyframes(r,t);else{let o=e.styles,a=!1;if(!o){a=!0;let u={};i.easing&&(u.easing=i.easing),o=Tt(u)}t.currentTime+=i.duration+i.delay;let l=this.visitStyle(o,t);l.isEmptyStep=a,s=l}return t.currentAnimateTimings=null,{type:_.Animate,timings:i,style:s,options:null}}visitStyle(e,t){let i=this._makeStyleAst(e,t);return this._validateStyleAst(i,t),i}_makeStyleAst(e,t){let i=[],s=Array.isArray(e.styles)?e.styles:[e.styles];for(let a of s)typeof a==`string`?a===x?i.push(a):t.errors.push(cn(a)):i.push(new Map(Object.entries(a)));let r=!1,o=null;return i.forEach(a=>{if(a instanceof Map&&(a.has(`easing`)&&(o=a.get(`easing`),a.delete(`easing`)),!r)){for(let l of a.values())if(l.toString().indexOf(Dt)>=0){r=!0;break}}}),{type:_.Style,styles:i,easing:o,offset:e.offset,containsDynamicStyles:r,options:null}}_validateStyleAst(e,t){let i=t.currentAnimateTimings,s=t.currentTime,r=t.currentTime;i&&r>0&&(r-=i.duration+i.delay),e.styles.forEach(o=>{typeof o!=`string`&&o.forEach((a,l)=>{let u=t.collectedStyles.get(t.currentQuerySelector),h=u.get(l),c=!0;h&&(r!=s&&r>=h.startTime&&s<=h.endTime&&(t.errors.push(hn(l,h.startTime,h.endTime,r,s)),c=!1),r=h.startTime),c&&u.set(l,{startTime:r,endTime:s}),t.options&&Rn(a,t.options,t.errors)})})}visitKeyframes(e,t){let i={type:_.Keyframes,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push(mn()),i;let s=1,r=0,o=[],a=!1,l=!1,u=0,h=e.steps.map(N=>{let P=this._makeStyleAst(N,t),k=P.offset!=null?P.offset:ks(P.styles),D=0;return k!=null&&(r++,D=P.offset=k),l=l||D<0||D>1,a=a||D<u,u=D,o.push(D),P});l&&t.errors.push(dn()),a&&t.errors.push(fn());let c=e.steps.length,S=0;r>0&&r<c?t.errors.push(pn()):r==0&&(S=s/(c-1));let y=c-1,d=t.currentTime,g=t.currentAnimateTimings,T=g.duration;return h.forEach((N,P)=>{let k=S>0?P==y?1:S*P:o[P],D=k*T;t.currentTime=d+g.delay+D,g.duration=D,this._validateStyleAst(N,t),N.offset=k,i.styles.push(N)}),i}visitReference(e,t){return{type:_.Reference,animation:B(this,Te(e.animation),t),options:fe(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:_.AnimateChild,options:fe(e.options)}}visitAnimateRef(e,t){return{type:_.AnimateRef,animation:this.visitReference(e.animation,t),options:fe(e.options)}}visitQuery(e,t){let i=t.currentQuerySelector,s=e.options||{};t.queryCount++,t.currentQuery=e;let[r,o]=Ds(e.selector);t.currentQuerySelector=i.length?i+` `+r:r,K(t.collectedStyles,t.currentQuerySelector,new Map);let a=B(this,Te(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=i,{type:_.Query,selector:r,limit:s.limit||0,optional:!!s.optional,includeSelf:o,animation:a,originalSelector:e.selector,options:fe(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push(gn());let i=e.timings===`full`?{duration:0,delay:0,easing:`full`}:De(e.timings,t.errors,!0);return{type:_.Stagger,animation:B(this,Te(e.animation),t),timings:i,options:null}}};function Ds(n){let e=!!n.split(/\s*,\s*/).find(t=>t==Gn);return e&&(n=n.replace(Ms,``)),n=n.replace(/@\*/g,Me).replace(/@\w+/g,t=>Me+`-`+t.slice(1)).replace(/:animating/g,He),[n,e]}function Fs(n){return n?g({},n):null}var jt=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(e){this.errors=e}};function ks(n){if(typeof n==`string`)return null;let e=null;if(Array.isArray(n))n.forEach(t=>{if(t instanceof Map&&t.has(`offset`)){let i=t;e=parseFloat(i.get(`offset`)),i.delete(`offset`)}});else if(n instanceof Map&&n.has(`offset`)){let t=n;e=parseFloat(t.get(`offset`)),t.delete(`offset`)}return e}function Rs(n,e){if(typeof n==`object`&&n!==null&&Object.hasOwn(n,`duration`))return n;if(typeof n==`number`){let r=De(n,e).duration;return Ot(r,0,``)}let t=n;if(t.split(/\s+/).some(r=>r.charAt(0)==`{`&&r.charAt(1)==`{`)){let r=Ot(0,0,``);return r.dynamic=!0,r.strValue=t,r}let s=De(t,e);return Ot(s.duration,s.delay,s.easing)}function fe(n){return n?(n=g({},n),n.params&&(n.params=Fs(n.params))):n={},n}function Ot(n,e,t){return{duration:n,delay:e,easing:t}}function Xt(n,e,t,i,s,r,o=null,a=!1){return{type:1,element:n,keyframes:e,preStyleProps:t,postStyleProps:i,duration:s,delay:r,totalTime:s+r,easing:o,subTimeline:a}}var ke=class{_map=new Map;get(e){return this._map.get(e)||[]}append(e,t){let i=this._map.get(e);i||this._map.set(e,i=[]),i.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}};var Os=1;var Ls=new RegExp(`:enter`,`g`);var Ks=new RegExp(`:leave`,`g`);function Hn(n,e,t,i,s,r=new Map,o=new Map,a,l,u=[]){return new qt().buildKeyframes(n,e,t,i,s,r,o,a,l,u)}var qt=class{buildKeyframes(e,t,i,s,r,o,a,l,u,h=[]){u=u||new ke;let c=new Qt(e,t,u,s,r,h,[]);c.options=l;let S=l.delay?ee(l.delay):0;c.currentTimeline.delayNextStep(S),c.currentTimeline.setStyles([o],null,c.errors,l),B(this,i,c);let y=c.timelines.filter(d=>d.containsAnimation());if(y.length&&a.size){let d;for(let g=y.length-1;g>=0;g--){let T=y[g];if(T.element===t){d=T;break}}d&&!d.allowOnlyTimelineStyles()&&d.setStyles([a],null,c.errors,l)}return y.length?y.map(d=>d.buildKeyframes()):[Xt(t,[],[],[],0,S,``,!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){let i=t.subInstructions.get(t.element);if(i){let s=t.createSubContext(e.options),r=t.currentTimeline.currentTime,o=this._visitSubInstructions(i,s,s.options);r!=o&&t.transformIntoNewTimeline(o)}t.previousNode=e}visitAnimateRef(e,t){let i=t.createSubContext(e.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([e.options,e.animation.options],t,i),this.visitReference(e.animation,i),t.transformIntoNewTimeline(i.currentTimeline.currentTime),t.previousNode=e}_applyAnimationRefDelays(e,t,i){for(let s of e){let r=s?.delay;if(r){let o=typeof r==`number`?r:ee(be(r,s?.params??{},t.errors));i.delayNextStep(o)}}}_visitSubInstructions(e,t,i){let r=t.currentTimeline.currentTime,o=i.duration!=null?ee(i.duration):null,a=i.delay!=null?ee(i.delay):null;return o!==0&&e.forEach(l=>{let u=t.appendInstructionToTimeline(l,o,a);r=Math.max(r,u.duration+u.delay)}),r}visitReference(e,t){t.updateOptions(e.options,!0),B(this,e.animation,t),t.previousNode=e}visitSequence(e,t){let i=t.subContextCount,s=t,r=e.options;if(r&&(r.params||r.delay)&&(s=t.createSubContext(r),s.transformIntoNewTimeline(),r.delay!=null)){s.previousNode.type==_.Style&&(s.currentTimeline.snapshotCurrentStyles(),s.previousNode=nt);let o=ee(r.delay);s.delayNextStep(o)}e.steps.length&&(e.steps.forEach(o=>B(this,o,s)),s.currentTimeline.applyStylesToKeyframe(),s.subContextCount>i&&s.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){let i=[],s=t.currentTimeline.currentTime,r=e.options&&e.options.delay?ee(e.options.delay):0;e.steps.forEach(o=>{let a=t.createSubContext(e.options);r&&a.delayNextStep(r),B(this,o,a),s=Math.max(s,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(o=>t.currentTimeline.mergeTimelineCollectedStyles(o)),t.transformIntoNewTimeline(s),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){let i=e.strValue;return De(t.params?be(i,t.params,t.errors):i,t.errors)}else return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){let i=t.currentAnimateTimings=this._visitTiming(e.timings,t),s=t.currentTimeline;i.delay&&(t.incrementTime(i.delay),s.snapshotCurrentStyles());let r=e.style;r.type==_.Keyframes?this.visitKeyframes(r,t):(t.incrementTime(i.duration),this.visitStyle(r,t),s.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){let i=t.currentTimeline,s=t.currentAnimateTimings;!s&&i.hasCurrentStyleProperties()&&i.forwardFrame();let r=s&&s.easing||e.easing;e.isEmptyStep?i.applyEmptyStep(r):i.setStyles(e.styles,r,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){let i=t.currentAnimateTimings,s=t.currentTimeline.duration,r=i.duration,a=t.createSubContext().currentTimeline;a.easing=i.easing,e.styles.forEach(l=>{let u=l.offset||0;a.forwardTime(u*r),a.setStyles(l.styles,l.easing,t.errors,t.options),a.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(a),t.transformIntoNewTimeline(s+r),t.previousNode=e}visitQuery(e,t){let i=t.currentTimeline.currentTime,s=e.options||{},r=s.delay?ee(s.delay):0;r&&(t.previousNode.type===_.Style||i==0&&t.currentTimeline.hasCurrentStyleProperties())&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=nt);let o=i,a=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!s.optional,t.errors);t.currentQueryTotal=a.length;let l=null;a.forEach((u,h)=>{t.currentQueryIndex=h;let c=t.createSubContext(e.options,u);r&&c.delayNextStep(r),u===t.element&&(l=c.currentTimeline),B(this,e.animation,c),c.currentTimeline.applyStylesToKeyframe();let S=c.currentTimeline.currentTime;o=Math.max(o,S)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(o),l&&(t.currentTimeline.mergeTimelineCollectedStyles(l),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){let i=t.parentContext,s=t.currentTimeline,r=e.timings,o=Math.abs(r.duration),a=o*(t.currentQueryTotal-1),l=o*t.currentQueryIndex;switch(r.duration<0?`reverse`:r.easing){case`reverse`:l=a-l;break;case`full`:l=i.currentStaggerTime;break}let h=t.currentTimeline;l&&h.delayNextStep(l);let c=h.currentTime;B(this,e.animation,t),t.previousNode=e,i.currentStaggerTime=s.currentTime-c+(s.startTime-i.currentTimeline.startTime)}};var nt={};var Qt=class n{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=nt;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(e,t,i,s,r,o,a,l){this._driver=e,this.element=t,this.subInstructions=i,this._enterClassName=s,this._leaveClassName=r,this.errors=o,this.timelines=a,this.currentTimeline=l||new st(this._driver,t,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;let i=e,s=this.options;i.duration!=null&&(s.duration=ee(i.duration)),i.delay!=null&&(s.delay=ee(i.delay));let r=i.params;if(r){let o=s.params;o||(o=this.options.params={}),Object.keys(r).forEach(a=>{(!t||!Object.hasOwn(o,a))&&(o[a]=be(r[a],o,this.errors))})}}_copyOptions(){let e={};if(this.options){let t=this.options.params;if(t){let i=e.params={};Object.keys(t).forEach(s=>{i[s]=t[s]})}}return e}createSubContext(e=null,t,i){let s=t||this.element,r=new n(this._driver,s,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(s,i||0));return r.previousNode=this.previousNode,r.currentAnimateTimings=this.currentAnimateTimings,r.options=this._copyOptions(),r.updateOptions(e),r.currentQueryIndex=this.currentQueryIndex,r.currentQueryTotal=this.currentQueryTotal,r.parentContext=this,this.subContextCount++,r}transformIntoNewTimeline(e){return this.previousNode=nt,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,i){let s={duration:t??e.duration,delay:this.currentTimeline.currentTime+(i??0)+e.delay,easing:``},r=new Vt(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,s,e.stretchStartingKeyframe);return this.timelines.push(r),s}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,i,s,r,o){let a=[];if(s&&a.push(this.element),e.length>0){e=e.replace(Ls,`.`+this._enterClassName),e=e.replace(Ks,`.`+this._leaveClassName);let l=i!=1,u=this._driver.query(this.element,e,l);i!==0&&(u=i<0?u.slice(u.length+i,u.length):u.slice(0,i)),a.push(...u)}return!r&&a.length==0&&o.push(yn(t)),a}};var st=class n{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(e,t,i,s){this._driver=e,this.element=t,this.startTime=i,this._elementTimelineStylesLookup=s,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(e){let t=this._keyframes.size===1&&this._pendingStyles.size;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new n(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=Os,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles.set(e,t),this._globalTimelineStyles.set(e,t),this._styleSummary.set(e,{time:this.currentTime,value:t})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&this._previousKeyframe.set(`easing`,e);for(let[t,i]of this._globalTimelineStyles)this._backFill.set(t,i||x),this._currentKeyframe.set(t,x);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,i,s){t&&this._previousKeyframe.set(`easing`,t);let r=s&&s.params||{},o=Bs(e,this._globalTimelineStyles);for(let[a,l]of o){let u=be(l,r,i);this._pendingStyles.set(a,u),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??x),this._updateStyle(a,u)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((e,t)=>{this._currentKeyframe.set(t,e)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((e,t)=>{this._currentKeyframe.has(t)||this._currentKeyframe.set(t,e)}))}snapshotCurrentStyles(){for(let[e,t]of this._localTimelineStyles)this._pendingStyles.set(e,t),this._updateStyle(e,t)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){e._styleSummary.forEach((t,i)=>{let s=this._styleSummary.get(i);(!s||t.time>s.time)&&this._updateStyle(i,t.value)})}buildKeyframes(){this.applyStylesToKeyframe();let e=new Set,t=new Set,i=this._keyframes.size===1&&this.duration===0,s=[];this._keyframes.forEach((a,l)=>{let u=new Map([...this._backFill,...a]);u.forEach((h,c)=>{h===Ne?e.add(c):h===x&&t.add(c)}),i||u.set(`offset`,l/this.duration),s.push(u)});let r=[...e.values()],o=[...t.values()];if(i){let a=s[0],l=new Map(a);a.set(`offset`,0),l.set(`offset`,1),s=[a,l]}return Xt(this.element,s,r,o,this.duration,this.startTime,this.easing,!1)}};var Vt=class extends st{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(e,t,i,s,r,o,a=!1){super(e,t,o.delay),this.keyframes=i,this.preStyleProps=s,this.postStyleProps=r,this._stretchStartingKeyframe=a,this.timings={duration:o.duration,delay:o.delay,easing:o.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:i,easing:s}=this.timings;if(this._stretchStartingKeyframe&&t){let r=[],o=i+t,a=t/o,l=new Map(e[0]);l.set(`offset`,0),r.push(l);let u=new Map(e[0]);u.set(`offset`,Kn(a)),r.push(u);let h=e.length-1;for(let c=1;c<=h;c++){let S=new Map(e[c]),y=S.get(`offset`),d=t+y*i;S.set(`offset`,Kn(d/o)),r.push(S)}i=o,t=0,s=``,e=r}return Xt(this.element,e,this.preStyleProps,this.postStyleProps,i,t,s,!0)}};function Kn(n,e=3){let t=Math.pow(10,e-1);return Math.round(n*t)/t}function Bs(n,e){let t=new Map,i;return n.forEach(s=>{if(s===`*`){i??=e.keys();for(let r of i)t.set(r,x)}else for(let[r,o]of s)t.set(r,o)}),t}function Bn(n,e,t,i,s,r,o,a,l,u,h,c,S){return{type:0,element:n,triggerName:e,isRemovalTransition:s,fromState:t,fromStyles:r,toState:i,toStyles:o,timelines:a,queriedElements:l,preStyleProps:u,postStyleProps:h,totalTime:c,errors:S}}var It={};var rt=class{_triggerName;ast;_stateStyles;constructor(e,t,i){this._triggerName=e,this.ast=t,this._stateStyles=i}match(e,t,i,s){return js(this.ast.matchers,e,t,i,s)}buildStyles(e,t,i){let s=this._stateStyles.get(`*`);return e!==void 0&&(s=this._stateStyles.get(e?.toString())||s),s?s.buildStyles(t,i):new Map}build(e,t,i,s,r,o,a,l,u,h){let c=[],S=this.ast.options&&this.ast.options.params||It,y=a&&a.params||It,d=this.buildStyles(i,y,c),g=l&&l.params||It,T=this.buildStyles(s,g,c),N=new Set,P=new Map,k=new Map,D=s===`void`,ye={params:Wn(g,S),delay:this.ast.options?.delay},Y=h?[]:Hn(e,t,this.ast.animation,r,o,d,T,ye,u,c),R=0;return Y.forEach(O=>{R=Math.max(O.duration+O.delay,R)}),c.length?Bn(t,this._triggerName,i,s,D,d,T,[],[],P,k,R,c):(Y.forEach(O=>{let ce=O.element,_e=K(P,ce,new Set);O.preStyleProps.forEach(he=>_e.add(he));let Jt=K(k,ce,new Set);O.postStyleProps.forEach(he=>Jt.add(he)),ce!==t&&N.add(ce)}),Bn(t,this._triggerName,i,s,D,d,T,Y,[...N.values()],P,k,R))}};function js(n,e,t,i,s){return n.some(r=>r(e,t,i,s))}function Wn(n,e){let t=g({},e);return Object.entries(n).forEach(([i,s])=>{s!=null&&(t[i]=s)}),t}var Ut=class{styles;defaultParams;normalizer;constructor(e,t,i){this.styles=e,this.defaultParams=t,this.normalizer=i}buildStyles(e,t){let i=new Map,s=Wn(e,this.defaultParams);return this.styles.styles.forEach(r=>{typeof r!=`string`&&r.forEach((o,a)=>{o&&(o=be(o,s,t));let l=this.normalizer.normalizePropertyName(a,t);o=this.normalizer.normalizeStyleValue(a,l,o,t),i.set(a,o)})}),i}};function qs(n,e,t){return new $t(n,e,t)}var $t=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(e,t,i){this.name=e,this.ast=t,this._normalizer=i,t.states.forEach(s=>{let r=s.options&&s.options.params||{};this.states.set(s.name,new Ut(s.style,r,i))}),jn(this.states,`true`,`1`),jn(this.states,`false`,`0`),t.transitions.forEach(s=>{this.transitionFactories.push(new rt(e,s,this.states))}),this.fallbackTransition=Qs(e,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,i,s){return this.transitionFactories.find(o=>o.match(e,t,i,s))||null}matchStyles(e,t,i){return this.fallbackTransition.buildStyles(e,t,i)}};function Qs(n,e,t){let i=[(o,a)=>!0],s={type:_.Sequence,steps:[],options:null};return new rt(n,{type:_.Transition,animation:s,matchers:i,options:null,queryCount:0,depCount:0},e)}function jn(n,e,t){n.has(e)?n.has(t)||n.set(t,n.get(e)):n.has(t)&&n.set(e,n.get(t))}var Vs=new ke;var Gt=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(e,t,i){this.bodyNode=e,this._driver=t,this._normalizer=i}register(e,t){let i=[],r=xn(this._driver,t,i,[]);if(i.length)throw vn(i);this._animations.set(e,r)}_buildPlayer(e,t,i){let s=e.element,r=Ct(this._normalizer,e.keyframes,t,i);return this._driver.animate(s,r,e.duration,e.delay,e.easing,[],!0)}create(e,t,i={}){let s=[],r=this._animations.get(e),o,a=new Map;if(r?(o=Hn(this._driver,t,r,Ft,xe,new Map,new Map,i,Vs,s),o.forEach(h=>{let c=K(a,h.element,new Map);h.postStyleProps.forEach(S=>c.set(S,null))})):(s.push(Tn()),o=[]),s.length)throw bn(s);a.forEach((h,c)=>{h.forEach((S,y)=>{h.set(y,this._driver.computeStyle(c,y,x))})});let u=ne(o.map(h=>{let c=a.get(h.element);return this._buildPlayer(h,new Map,c)}));return this._playersById.set(e,u),u.onDestroy(()=>this.destroy(e)),this.players.push(u),u}destroy(e){let t=this._getPlayer(e);t.destroy(),this._playersById.delete(e);let i=this.players.indexOf(t);i>=0&&this.players.splice(i,1)}_getPlayer(e){let t=this._playersById.get(e);if(!t)throw wn(e);return t}listen(e,t,i,s){let r=$e(t,``,``,``);return Ue(this._getPlayer(e),i,r,s),()=>{}}command(e,t,i,s){if(i==`register`){this.register(e,s[0]);return}if(i==`create`){let o=s[0]||{};this.create(e,t,o);return}let r=this._getPlayer(e);switch(i){case`play`:r.play();break;case`pause`:r.pause();break;case`reset`:r.reset();break;case`restart`:r.restart();break;case`finish`:r.finish();break;case`init`:r.init();break;case`setPosition`:r.setPosition(parseFloat(s[0]));break;case`destroy`:this.destroy(e);break}}};var qn=`ng-animate-queued`;var Us=`.ng-animate-queued`;var Lt=`ng-animate-disabled`;var $s=`.ng-animate-disabled`;var Gs=`ng-star-inserted`;var xs=`.ng-star-inserted`;var Hs=[];var Yn={namespaceId:``,setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1};var Ws={namespaceId:``,setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0};var W=`__ng_removed`;var Re=class{namespaceId;value;options;get params(){return this.options.params}constructor(e,t=``){this.namespaceId=t;let i=e&&Object.hasOwn(e,`value`),s=i?e.value:e;if(this.value=Xs(s),i){let r=e,{value:o}=r,a=Px(r,[`value`]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(e){let t=e.params;if(t){let i=this.options.params;Object.keys(t).forEach(s=>{i[s]??(i[s]=t[s])})}}};var Fe=`void`;var zt=new Re(Fe);var xt=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(e,t,i){this.id=e,this.hostElement=t,this._engine=i,this._hostClassName=`ng-tns-`+e,U(t,this._hostClassName)}listen(e,t,i,s){if(!this._triggers.has(t))throw An(i,t);if(i==null||i.length==0)throw Cn(t);if(!Zs(i))throw Nn(i,t);let r=K(this._elementListeners,e,[]),o={name:t,phase:i,callback:s};r.push(o);let a=K(this._engine.statesByElement,e,new Map);return a.has(t)||(U(e,Pe),U(e,Pe+`-`+t),a.set(t,zt)),()=>{this._engine.afterFlush(()=>{let l=r.indexOf(o);l>=0&&r.splice(l,1),this._triggers.has(t)||a.delete(t)})}}register(e,t){return this._triggers.has(e)?!1:(this._triggers.set(e,t),!0)}_getTrigger(e){let t=this._triggers.get(e);if(!t)throw Pn(e);return t}trigger(e,t,i,s=!0){let r=this._getTrigger(t),o=new Oe(this.id,t,e),a=this._engine.statesByElement.get(e);a||(U(e,Pe),U(e,Pe+`-`+t),this._engine.statesByElement.set(e,a=new Map));let l=a.get(t),u=new Re(i,this.id);if(!(i&&Object.hasOwn(i,`value`))&&l&&u.absorbOptions(l.options),a.set(t,u),l||(l=zt),!(u.value===Fe)&&l.value===u.value){if(!tr(l.params,u.params)){let g=[],T=r.matchStyles(l.value,l.params,g),N=r.matchStyles(u.value,u.params,g);g.length?this._engine.reportError(g):this._engine.afterFlush(()=>{ue(e,T),H(e,N)})}return}let S=K(this._engine.playersByElement,e,[]);S.forEach(g=>{g.namespaceId==this.id&&g.triggerName==t&&g.queued&&g.destroy()});let y=r.matchTransition(l.value,u.value,e,u.params),d=!1;if(!y){if(!s)return;y=r.fallbackTransition,d=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:y,fromState:l,toState:u,player:o,isFallbackTransition:d}),d||(U(e,qn),o.onStart(()=>{we(e,qn)})),o.onDone(()=>{let g=this.players.indexOf(o);g>=0&&this.players.splice(g,1);let T=this._engine.playersByElement.get(e);if(T){let N=T.indexOf(o);N>=0&&T.splice(N,1)}}),this.players.push(o),S.push(o),o}deregister(e){this._triggers.delete(e),this._engine.statesByElement.forEach(t=>t.delete(e)),this._elementListeners.forEach((t,i)=>{this._elementListeners.set(i,t.filter(s=>s.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);let t=this._engine.playersByElement.get(e);t&&(t.forEach(i=>i.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){let i=this._engine.driver.query(e,Me,!0);i.forEach(s=>{if(s[W])return;let r=this._engine.fetchNamespacesByElement(s);r.size?r.forEach(o=>o.triggerLeaveAnimation(s,t,!1,!0)):this.clearElementCache(s)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(s=>this.clearElementCache(s)))}triggerLeaveAnimation(e,t,i,s){let r=this._engine.statesByElement.get(e),o=new Map;if(r){let a=[];if(r.forEach((l,u)=>{if(o.set(u,l.value),this._triggers.has(u)){let h=this.trigger(e,u,Fe,s);h&&a.push(h)}}),a.length)return this._engine.markElementAsRemoved(this.id,e,!0,t,o),i&&ne(a).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){let t=this._elementListeners.get(e),i=this._engine.statesByElement.get(e);if(t&&i){let s=new Set;t.forEach(r=>{let o=r.name;if(s.has(o))return;s.add(o);let l=this._triggers.get(o).fallbackTransition,u=i.get(o)||zt,h=new Re(Fe),c=new Oe(this.id,o,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:o,transition:l,fromState:u,toState:h,player:c,isFallbackTransition:!0})})}}removeNode(e,t){let i=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let s=!1;if(i.totalAnimations){let r=i.players.length?i.playersByQueriedElement.get(e):[];if(r&&r.length)s=!0;else{let o=e;for(;o=o.parentNode;)if(i.statesByElement.get(o)){s=!0;break}}}if(this.prepareLeaveAnimationListeners(e),s)i.markElementAsRemoved(this.id,e,!1,t);else{let r=e[W];(!r||r===Yn)&&(i.afterFlush(()=>this.clearElementCache(e)),i.destroyInnerAnimations(e),i._onRemovalComplete(e,t))}}insertNode(e,t){U(e,this._hostClassName)}drainQueuedTransitions(e){let t=[];return this._queue.forEach(i=>{let s=i.player;if(s.destroyed)return;let r=i.element,o=this._elementListeners.get(r);o&&o.forEach(a=>{if(a.name==i.triggerName){let l=$e(r,i.triggerName,i.fromState.value,i.toState.value);l._data=e,Ue(i.player,a.phase,l,a.callback)}}),s.markedForDestroy?this._engine.afterFlush(()=>{s.destroy()}):t.push(i)}),this._queue=[],t.sort((i,s)=>{let r=i.transition.ast.depCount,o=s.transition.ast.depCount;return r==0||o==0?r-o:this._engine.driver.containsElement(i.element,s.element)?1:-1})}destroy(e){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}};var Ht=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(e,t)=>{};_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}constructor(e,t,i){this.bodyNode=e,this.driver=t,this._normalizer=i}get queuedPlayers(){let e=[];return this._namespaceList.forEach(t=>{t.players.forEach(i=>{i.queued&&e.push(i)})}),e}createNamespace(e,t){let i=new xt(e,t,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,t)?this._balanceNamespaceList(i,t):(this.newHostElements.set(t,i),this.collectEnterElement(t)),this._namespaceLookup[e]=i}_balanceNamespaceList(e,t){let i=this._namespaceList,s=this.namespacesByHostElement;if(i.length-1>=0){let o=!1,a=this.driver.getParentElement(t);for(;a;){let l=s.get(a);if(l){let u=i.indexOf(l);i.splice(u+1,0,e),o=!0;break}a=this.driver.getParentElement(a)}o||i.unshift(e)}else i.push(e);return s.set(t,e),e}register(e,t){let i=this._namespaceLookup[e];return i||(i=this.createNamespace(e,t)),i}registerTrigger(e,t,i){let s=this._namespaceLookup[e];s&&s.register(t,i)&&this.totalAnimations++}destroy(e,t){e&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(e);this.namespacesByHostElement.delete(i.hostElement);let s=this._namespaceList.indexOf(i);s>=0&&this._namespaceList.splice(s,1),i.destroy(t),delete this._namespaceLookup[e]}))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){let t=new Set,i=this.statesByElement.get(e);if(i){for(let s of i.values())if(s.namespaceId){let r=this._fetchNamespace(s.namespaceId);r&&t.add(r)}}return t}trigger(e,t,i,s){if(Je(t)){let r=this._fetchNamespace(e);if(r)return r.trigger(t,i,s),!0}return!1}insertNode(e,t,i,s){if(!Je(t))return;let r=t[W];if(r&&r.setForRemoval){r.setForRemoval=!1,r.setForMove=!0;let o=this.collectedLeaveElements.indexOf(t);o>=0&&this.collectedLeaveElements.splice(o,1)}if(e){let o=this._fetchNamespace(e);o&&o.insertNode(t,i)}s&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),U(e,Lt)):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),we(e,Lt))}removeNode(e,t,i){if(Je(t)){let s=e?this._fetchNamespace(e):null;s?s.removeNode(t,i):this.markElementAsRemoved(e,t,!1,i);let r=this.namespacesByHostElement.get(t);r&&r.id!==e&&r.removeNode(t,i)}else this._onRemovalComplete(t,i)}markElementAsRemoved(e,t,i,s,r){this.collectedLeaveElements.push(t),t[W]={namespaceId:e,setForRemoval:s,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:r}}listen(e,t,i,s,r){return Je(t)?this._fetchNamespace(e).listen(t,i,s,r):()=>{}}_buildInstruction(e,t,i,s,r){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,i,s,e.fromState.options,e.toState.options,t,r)}destroyInnerAnimations(e){let t=this.driver.query(e,Me,!0);t.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(t=this.driver.query(e,He,!0),t.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(e){let t=this.playersByElement.get(e);t&&t.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(e){let t=this.playersByQueriedElement.get(e);t&&t.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return ne(this.players).onDone(()=>e());e()})}processLeaveNode(e){let t=e[W];if(t&&t.setForRemoval){if(e[W]=Yn,t.namespaceId){this.destroyInnerAnimations(e);let i=this._fetchNamespace(t.namespaceId);i&&i.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}e.classList?.contains(Lt)&&this.markElementAsDisabled(e,!1),this.driver.query(e,$s,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,s)=>this._balanceNamespaceList(i,s)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let s=this.collectedEnterElements[i];U(s,Gs)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{t=this._flushAnimations(i,e)}finally{for(let s=0;s<i.length;s++)i[s]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let s=this.collectedLeaveElements[i];this.processLeaveNode(s)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],t.length?ne(t).onDone(()=>{i.forEach(s=>s())}):i.forEach(s=>s())}}reportError(e){throw Mn(e)}_flushAnimations(e,t){let i=new ke,s=[],r=new Map,o=[],a=new Map,l=new Map,u=new Map,h=new Set;this.disabledNodes.forEach(m=>{h.add(m);let f=this.driver.query(m,Us,!0);for(let p=0;p<f.length;p++)h.add(f[p])});let c=this.bodyNode,S=Array.from(this.statesByElement.keys()),y=Un(S,this.collectedEnterElements),d=new Map,g=0;y.forEach((m,f)=>{let p=Ft+g++;d.set(f,p),m.forEach(E=>U(E,p))});let T=[],N=new Set,P=new Set;for(let m=0;m<this.collectedLeaveElements.length;m++){let f=this.collectedLeaveElements[m],p=f[W];p&&p.setForRemoval&&(T.push(f),N.add(f),p.hasAnimation?this.driver.query(f,xs,!0).forEach(E=>N.add(E)):P.add(f))}let k=new Map,D=Un(S,Array.from(N));D.forEach((m,f)=>{let p=xe+g++;k.set(f,p),m.forEach(E=>U(E,p))}),e.push(()=>{y.forEach((m,f)=>{let p=d.get(f);m.forEach(E=>we(E,p))}),D.forEach((m,f)=>{let p=k.get(f);m.forEach(E=>we(E,p))}),T.forEach(m=>{this.processLeaveNode(m)})});let ye=[],Y=[];for(let m=this._namespaceList.length-1;m>=0;m--)this._namespaceList[m].drainQueuedTransitions(t).forEach(p=>{let E=p.player,M=p.element;if(ye.push(E),this.collectedEnterElements.length){let F=M[W];if(F&&F.setForMove){if(F.previousTriggersValues&&F.previousTriggersValues.has(p.triggerName)){let me=F.previousTriggersValues.get(p.triggerName),V=this.statesByElement.get(p.element);if(V&&V.has(p.triggerName)){let Le=V.get(p.triggerName);Le.value=me,V.set(p.triggerName,Le)}}E.destroy();return}}let X=!c||!this.driver.containsElement(c,M),j=k.get(M),se=d.get(M),b=this._buildInstruction(p,i,se,j,X);if(b.errors&&b.errors.length){Y.push(b);return}if(X){E.onStart(()=>ue(M,b.fromStyles)),E.onDestroy(()=>H(M,b.toStyles)),s.push(E);return}if(p.isFallbackTransition){E.onStart(()=>ue(M,b.fromStyles)),E.onDestroy(()=>H(M,b.toStyles)),s.push(E);return}let ii=[];b.timelines.forEach(F=>{F.stretchStartingKeyframe=!0,this.disabledNodes.has(F.element)||ii.push(F)}),b.timelines=ii,i.append(M,b.timelines);let cs={instruction:b,player:E,element:M};o.push(cs),b.queriedElements.forEach(F=>K(a,F,[]).push(E)),b.preStyleProps.forEach((F,me)=>{if(F.size){let V=l.get(me);V||l.set(me,V=new Set),F.forEach((Le,ft)=>V.add(ft))}}),b.postStyleProps.forEach((F,me)=>{let V=u.get(me);V||u.set(me,V=new Set),F.forEach((Le,ft)=>V.add(ft))})});if(Y.length){let m=[];Y.forEach(f=>{m.push(Dn(f.triggerName,f.errors))}),ye.forEach(f=>f.destroy()),this.reportError(m)}let R=new Map,O=new Map;o.forEach(m=>{let f=m.element;i.has(f)&&(O.set(f,f),this._beforeAnimationBuild(m.player.namespaceId,m.instruction,R))}),s.forEach(m=>{let f=m.element;this._getPreviousPlayers(f,!1,m.namespaceId,m.triggerName,null).forEach(E=>{K(R,f,[]).push(E),E.destroy()})});let ce=T.filter(m=>$n(m,l,u)),_e=new Map;Vn(_e,this.driver,P,u,x).forEach(m=>{$n(m,l,u)&&ce.push(m)});let he=new Map;y.forEach((m,f)=>{Vn(he,this.driver,new Set(m),l,Ne)}),ce.forEach(m=>{let f=_e.get(m),p=he.get(m);_e.set(m,new Map([...f?.entries()??[],...p?.entries()??[]]))});let dt=[],ei=[],ti={};o.forEach(m=>{let{element:f,player:p,instruction:E}=m;if(i.has(f)){if(h.has(f)){p.onDestroy(()=>H(f,E.toStyles)),p.disabled=!0,p.overrideTotalTime(E.totalTime),s.push(p);return}let M=ti;if(O.size>1){let j=f,se=[];for(;j=j.parentNode;){let b=O.get(j);if(b){M=b;break}se.push(j)}se.forEach(b=>O.set(b,M))}let X=this._buildAnimation(p.namespaceId,E,R,r,he,_e);if(p.setRealPlayer(X),M===ti)dt.push(p);else{let j=this.playersByElement.get(M);j&&j.length&&(p.parentPlayer=ne(j)),s.push(p)}}else ue(f,E.fromStyles),p.onDestroy(()=>H(f,E.toStyles)),ei.push(p),h.has(f)&&s.push(p)}),ei.forEach(m=>{let f=r.get(m.element);if(f&&f.length){let p=ne(f);m.setRealPlayer(p)}}),s.forEach(m=>{m.parentPlayer?m.syncPlayerEvents(m.parentPlayer):m.destroy()});for(let m=0;m<T.length;m++){let f=T[m],p=f[W];if(we(f,xe),p&&p.hasAnimation)continue;let E=[];if(a.size){let X=a.get(f);X&&X.length&&E.push(...X);let j=this.driver.query(f,He,!0);for(let se=0;se<j.length;se++){let b=a.get(j[se]);b&&b.length&&E.push(...b)}}let M=E.filter(X=>!X.destroyed);M.length?Js(this,f,M):this.processLeaveNode(f)}return T.length=0,dt.forEach(m=>{this.players.push(m),m.onDone(()=>{m.destroy();let f=this.players.indexOf(m);this.players.splice(f,1)}),m.play()}),dt}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,i,s,r){let o=[];if(t){let a=this.playersByQueriedElement.get(e);a&&(o=a)}else{let a=this.playersByElement.get(e);if(a){let l=!r||r==Fe;a.forEach(u=>{u.queued||!l&&u.triggerName!=s||o.push(u)})}}return(i||s)&&(o=o.filter(a=>!(i&&i!=a.namespaceId||s&&s!=a.triggerName))),o}_beforeAnimationBuild(e,t,i){let s=t.triggerName,r=t.element,o=t.isRemovalTransition?void 0:e,a=t.isRemovalTransition?void 0:s;for(let l of t.timelines){let u=l.element,h=u!==r,c=K(i,u,[]);this._getPreviousPlayers(u,h,o,a,t.toState).forEach(y=>{let d=y.getRealPlayer();d.beforeDestroy&&d.beforeDestroy(),y.destroy(),c.push(y)})}ue(r,t.fromStyles)}_buildAnimation(e,t,i,s,r,o){let a=t.triggerName,l=t.element,u=[],h=new Set,c=new Set,S=t.timelines.map(d=>{let g=d.element;h.add(g);let T=g[W];if(T&&T.removedBeforeQueried)return new ie(d.duration,d.delay);let N=g!==l,P=er((i.get(g)||Hs).map(R=>R.getRealPlayer())).filter(R=>{let O=R;return O.element?O.element===g:!1}),k=r.get(g),D=o.get(g),ye=Ct(this._normalizer,d.keyframes,k,D),Y=this._buildPlayer(d,ye,P);if(d.subTimeline&&s&&c.add(g),N){let R=new Oe(e,a,g);R.setRealPlayer(Y),u.push(R)}return Y});u.forEach(d=>{K(this.playersByQueriedElement,d.element,[]).push(d),d.onDone(()=>Ys(this.playersByQueriedElement,d.element,d))}),h.forEach(d=>U(d,kt));let y=ne(S);return y.onDestroy(()=>{h.forEach(d=>we(d,kt)),H(l,t.toStyles)}),c.forEach(d=>{K(s,d,[]).push(y)}),y}_buildPlayer(e,t,i){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,i):new ie(e.duration,e.delay)}};var Oe=class{namespaceId;triggerName;element;_player=new ie;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(e,t,i){this.namespaceId=e,this.triggerName=t,this.element=i}setRealPlayer(e){this._containsRealPlayer||(this._player=e,this._queuedCallbacks.forEach((t,i)=>{t.forEach(s=>Ue(e,i,void 0,s))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){let t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback(`start`)),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){K(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent(`done`,e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent(`start`,e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent(`destroy`,e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){let t=this._player;t.triggerCallback&&t.triggerCallback(e)}};function Ys(n,e,t){let i=n.get(e);if(i){if(i.length){let s=i.indexOf(t);i.splice(s,1)}i.length==0&&n.delete(e)}return i}function Xs(n){return n??null}function Je(n){return n&&n.nodeType===1}function Zs(n){return n==`start`||n==`done`}function Qn(n,e){let t=n.style.display;return n.style.display=e??`none`,t}function Vn(n,e,t,i,s){let r=[];t.forEach(l=>r.push(Qn(l)));let o=[];i.forEach((l,u)=>{let h=new Map;l.forEach(c=>{let S=e.computeStyle(u,c,s);h.set(c,S),(!S||S.length==0)&&(u[W]=Ws,o.push(u))}),n.set(u,h)});let a=0;return t.forEach(l=>Qn(l,r[a++])),o}function Un(n,e){let t=new Map;if(n.forEach(a=>t.set(a,[])),e.length==0)return t;let i=1,s=new Set(e),r=new Map;function o(a){if(!a)return i;let l=r.get(a);if(l)return l;let u=a.parentNode;return t.has(u)?l=u:s.has(u)?l=i:l=o(u),r.set(a,l),l}return e.forEach(a=>{let l=o(a);l!==i&&t.get(l).push(a)}),t}function U(n,e){n.classList?.add(e)}function we(n,e){n.classList?.remove(e)}function Js(n,e,t){ne(t).onDone(()=>n.processLeaveNode(e))}function er(n){let e=[];return Xn(n,e),e}function Xn(n,e){for(let t=0;t<n.length;t++){let i=n[t];i instanceof ve?Xn(i.players,e):e.push(i)}}function tr(n,e){let t=Object.keys(n),i=Object.keys(e);if(t.length!=i.length)return!1;for(let s=0;s<t.length;s++){let r=t[s];if(!Object.hasOwn(e,r)||n[r]!==e[r])return!1}return!0}function $n(n,e,t){let i=t.get(n);if(!i)return!1;let s=e.get(n);return s?i.forEach(r=>s.add(r)):e.set(n,i),t.delete(n),!0}var Ae=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(e,t)=>{};constructor(e,t,i){this._driver=t,this._normalizer=i,this._transitionEngine=new Ht(e.body,t,i),this._timelineEngine=new Gt(e.body,t,i),this._transitionEngine.onRemovalComplete=(s,r)=>this.onRemovalComplete(s,r)}registerTrigger(e,t,i,s,r){let o=e+`-`+s,a=this._triggerCache[o];if(!a){let l=[],h=xn(this._driver,r,l,[]);if(l.length)throw En(s,l);a=qs(s,h,this._normalizer),this._triggerCache[o]=a}this._transitionEngine.registerTrigger(t,s,a)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,i,s){this._transitionEngine.insertNode(e,t,i,s)}onRemove(e,t,i){this._transitionEngine.removeNode(e,t,i)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,i,s){if(i.charAt(0)==`@`){let[r,o]=Nt(i),a=s;this._timelineEngine.command(r,t,o,a)}else this._transitionEngine.trigger(e,t,i,s)}listen(e,t,i,s,r){if(i.charAt(0)==`@`){let[o,a]=Nt(i);return this._timelineEngine.listen(o,t,a,r)}return this._transitionEngine.listen(e,t,i,s,r)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(e){this._transitionEngine.afterFlushAnimationsDone(e)}};function ir(n,e){let t=null,i=null;return Array.isArray(e)&&e.length?(t=Kt(e[0]),e.length>1&&(i=Kt(e[e.length-1]))):e instanceof Map&&(t=Kt(e)),t||i?new nr(n,t,i):null}var nr=(()=>{class n{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(t,i,s){this._element=t,this._startStyles=i,this._endStyles=s;let r=n.initialStylesByElement.get(t);r||n.initialStylesByElement.set(t,r=new Map),this._initialStyles=r}start(){this._state<1&&(this._startStyles&&H(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(H(this._element,this._initialStyles),this._endStyles&&(H(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(n.initialStylesByElement.delete(this._element),this._startStyles&&(ue(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(ue(this._element,this._endStyles),this._endStyles=null),H(this._element,this._initialStyles),this._state=3)}}return n})();function Kt(n){let e=null;return n.forEach((t,i)=>{sr(i)&&(e=e||new Map,e.set(i,t))}),e}function sr(n){return n===`display`||n===`position`}var ot=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(e,t,i,s){this.element=e,this.keyframes=t,this.options=i,this._specialStyles=s,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let e=this.keyframes,t=this._triggerWebAnimation(this.element,e,this.options);if(!t)return this._onFinish(),null;this.domPlayer=t,this._finalKeyframe=e.length?e[e.length-1]:new Map;let i=()=>this._onFinish();return t.addEventListener(`finish`,i),this.onDestroy(()=>{t.removeEventListener(`finish`,i)}),t}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(e){let t=[];return e.forEach(i=>{t.push(Object.fromEntries(i))}),t}_triggerWebAnimation(e,t,i){let s=this._convertKeyframesToObject(t);try{return e.animate(s,i)}catch(r){return null}}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){let e=this._buildPlayer();e&&(this.hasStarted()||(this._onStartFns.forEach(t=>t()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),e.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=e*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let e=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,s)=>{s!==`offset`&&e.set(s,this._finished?i:Ye(this.element,s))}),this.currentSnapshot=e}triggerCallback(e){let t=e===`start`?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}};var at=class{validateStyleProperty(e){return!0}validateAnimatableStyleProperty(e){return!0}containsElement(e,t){return Pt(e,t)}getParentElement(e){return Ge(e)}query(e,t,i){return Mt(e,t,i)}computeStyle(e,t,i){return Ye(e,t)}animate(e,t,i,s,r,o=[]){let l={duration:i,delay:s,fill:s==0?`both`:`forwards`};r&&(l.easing=r);let u=new Map,h=o.filter(y=>y instanceof ot);On(i,s)&&h.forEach(y=>{y.currentSnapshot.forEach((d,g)=>u.set(g,d))});let c=kn(t).map(y=>new Map(y));c=In(e,c,u);let S=ir(e,c);return new ot(e,c,l,S)}};var et=`@`;var Zn=`@.disabled`;var lt=class{namespaceId;delegate;engine;_onDestroy;ɵtype=0;constructor(e,t,i,s){this.namespaceId=e,this.delegate=t,this.engine=i,this._onDestroy=s}get data(){return this.delegate.data}destroyNode(e){this.delegate.destroyNode?.(e)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,i,s=!0){this.delegate.insertBefore(e,t,i),this.engine.onInsert(this.namespaceId,t,e,s)}removeChild(e,t,i,s){if(s){this.delegate.removeChild(e,t,i,s);return}this.parentNode(t)&&this.engine.onRemove(this.namespaceId,t,this.delegate)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,i,s){this.delegate.setAttribute(e,t,i,s)}removeAttribute(e,t,i){this.delegate.removeAttribute(e,t,i)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,i,s){this.delegate.setStyle(e,t,i,s)}removeStyle(e,t,i){this.delegate.removeStyle(e,t,i)}setProperty(e,t,i){t.charAt(0)==et&&t==Zn?this.disableAnimations(e,!!i):this.delegate.setProperty(e,t,i)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,i,s){return this.delegate.listen(e,t,i,s)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}};var Wt=class extends lt{factory;constructor(e,t,i,s,r){super(t,i,s,r),this.factory=e,this.namespaceId=t}setProperty(e,t,i){t.charAt(0)==et?t.charAt(1)==`.`&&t==Zn?(i=i===void 0?!0:!!i,this.disableAnimations(e,i)):this.engine.process(this.namespaceId,e,t.slice(1),i):this.delegate.setProperty(e,t,i)}listen(e,t,i,s){if(t.charAt(0)==et){let r=rr(e),o=t.slice(1),a=``;return o.charAt(0)!=et&&([o,a]=or(o)),this.engine.listen(this.namespaceId,r,o,a,l=>{let u=l._data||-1;this.factory.scheduleListenerCallback(u,i,l)})}return this.delegate.listen(e,t,i,s)}};function rr(n){switch(n){case`body`:return document.body;case`document`:return document;case`window`:return window;default:return n}}function or(n){let e=n.indexOf(`.`);return[n.substring(0,e),n.slice(e+1)]}var ut=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(e,t,i){this.delegate=e,this.engine=t,this._zone=i,t.onRemovalComplete=(s,r)=>{r?.removeChild(null,s)}}createRenderer(e,t){let s=this.delegate.createRenderer(e,t);if(!e||!t?.data?.animation){let u=this._rendererCache,h=u.get(s);if(!h){let c=()=>u.delete(s);h=new lt(``,s,this.engine,c),u.set(s,h)}return h}let r=t.id,o=t.id+`-`+this._currentId;this._currentId++,this.engine.register(o,e);let a=u=>{Array.isArray(u)?u.forEach(a):this.engine.registerTrigger(r,o,e,u.name,u)};return t.data.animation.forEach(a),new Wt(this,o,s,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,i){if(e>=0&&e<this._microtaskId){this._zone.run(()=>t(i));return}let s=this._animationCallbacksBuffer;s.length==0&&queueMicrotask(()=>{this._zone.run(()=>{s.forEach(r=>{let[o,a]=r;o(a)}),this._animationCallbacksBuffer=[]})}),s.push([t,i])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(e){this.engine.flush(),this.delegate.componentReplaced?.(e)}};var lr=(()=>{class n extends Ae{constructor(t,i,s){super(t,i,s)}ngOnDestroy(){this.flush()}static ɵfac=function(i){return new(i||n)(C(q),C(pe),C(ge))};static ɵprov=E({token:n,factory:n.ɵfac})}return n})();function ur(){return new tt}function cr(){return new ut(u(Qg),u(Ae),u(D))}var es=[{provide:ge,useFactory:ur},{provide:Ae,useClass:lr},{provide:st$1,useFactory:cr}];var hr=[{provide:pe,useClass:Yt},{provide:va,useValue:`NoopAnimations`},...es];var Jn=[{provide:pe,useFactory:()=>new at},{provide:va,useFactory:()=>`BrowserAnimations`},...es];var ts=(()=>{class n{static withConfig(t){return{ngModule:n,providers:t.disableAnimations?hr:Jn}}static ɵfac=function(i){return new(i||n)};static ɵmod=Y({type:n});static ɵinj=V({providers:Jn,imports:[YO]})}return n})();var is=(()=>{class n{constructor(t){this.userService=t}ngOnInit(){this.userService.populate()}static{this.ɵfac=function(i){return new(i||n)(A(Mn$1))}}static{this.ɵcmp=T({type:n,selectors:[[`app-root`]],standalone:!1,decls:3,vars:0,template:function(i,s){i&1&&be$1(0,`app-layout-header`)(1,`router-outlet`)(2,`app-layout-footer`)},dependencies:[Wv,Dse,jse],encapsulation:2})}}return n})();var mr=()=>[`/login`];var dr=()=>[`/register`];function fr(n,e){n&1&&(b(0,`a`,4),j(1,`Have an account?`),_$1()),n&2&&ee$1(`routerLink`,_g(1,mr))}function pr(n,e){n&1&&(b(0,`a`,4),j(1,`Need an account?`),_$1()),n&2&&ee$1(`routerLink`,_g(1,dr))}function gr(n,e){n&1&&(b(0,`mat-form-field`,8)(1,`mat-label`),j(2,`Username`),_$1(),be$1(3,`input`,13),FA(),_$1()),n&2&&(y(3),LA())}var Zt=(()=>{class n{constructor(t,i,s,r){this.route=t,this.router=i,this.userService=s,this.fb=r,this.authType=``,this.title=``,this.errors=ne$1({errors:{}}),this.isSubmitting=ne$1(!1),this.authForm=this.fb.group({email:[``,fs$1.required],password:[``,fs$1.required]})}ngOnInit(){this.route.url.subscribe(t=>{this.authType=t[t.length-1].path,this.title=this.authType===`login`?`Sign in`:`Sign up`,this.authType===`register`&&this.authForm.addControl(`username`,new JY)})}submitForm(){this.isSubmitting.set(!0),this.errors.set({errors:{}});let t=this.authForm.value;this.userService.attemptAuth(this.authType,t).subscribe({next:()=>this.router.navigateByUrl(`/`),error:i=>{this.errors.set(i),this.isSubmitting.set(!1)}})}static{this.ɵfac=function(i){return new(i||n)(A(zi),A(Nt$1),A(Mn$1),A(tZ))}}static{this.ɵcmp=T({type:n,selectors:[[`app-auth-page`]],standalone:!1,decls:23,vars:9,consts:[[1,`auth-page`],[1,`container`],[1,`form-container`],[1,`auth-link`],[3,`routerLink`],[3,`errors`],[3,`ngSubmit`,`formGroup`],[3,`disabled`],[`appearance`,`outline`],[`matInput`,``,`formControlName`,`email`,`type`,`email`],[`matInput`,``,`formControlName`,`password`,`type`,`password`],[1,`form-actions`],[`mat-raised-button`,``,`color`,`primary`,`type`,`submit`,3,`disabled`],[`matInput`,``,`formControlName`,`username`,`type`,`text`]],template:function(i,s){i&1&&(b(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`h1`),j(4),_$1(),b(5,`p`,3),le(6,fr,2,2,`a`,4),le(7,pr,2,2,`a`,4),_$1(),be$1(8,`app-list-errors`,5),b(9,`form`,6),B$1(`ngSubmit`,function(){return s.submitForm()}),b(10,`fieldset`,7),le(11,gr,4,0,`mat-form-field`,8),b(12,`mat-form-field`,8)(13,`mat-label`),j(14,`Email`),_$1(),be$1(15,`input`,9),FA(),_$1(),b(16,`mat-form-field`,8)(17,`mat-label`),j(18,`Password`),_$1(),be$1(19,`input`,10),FA(),_$1(),b(20,`div`,11)(21,`button`,12),j(22),_$1()()()()()()()),i&2&&(y(4),ct(s.title),y(2),de$1(s.authType===`register`?6:-1),y(),de$1(s.authType===`login`?7:-1),y(),ee$1(`errors`,s.errors()),y(),ee$1(`formGroup`,s.authForm),y(),ee$1(`disabled`,s.isSubmitting()),y(),de$1(s.authType===`register`?11:-1),y(4),LA(),y(4),LA(),y(2),ee$1(`disabled`,!s.authForm.valid),y(),yt(` `,s.title,` `))},dependencies:[eZ,YD,QY,KY,Zu,KF,qoe,En$1,Uf,bI,Nb,Pne],encapsulation:2})}}return n})();var Ie=(()=>{class n{constructor(t,i){this.router=t,this.userService=i}canActivate(t,i){return this.userService.isAuthenticated.pipe(Lt$1(1),L(s=>!s))}static{this.ɵfac=function(i){return new(i||n)(C(Nt$1),C(Mn$1))}}static{this.ɵprov=E({token:n,factory:n.ɵfac})}}return n})();var yr=[{path:`login`,component:Zt,canActivate:[Ie]},{path:`register`,component:Zt,canActivate:[Ie]}];var ns=(()=>{class n{static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵmod=Y({type:n})}static{this.ɵinj=V({imports:[If.forChild(yr),If]})}}return n})();var ss=(()=>{class n{static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵmod=Y({type:n})}static{this.ɵinj=V({providers:[Ie],imports:[Sse,ns]})}}return n})();function _r(n,e){n&1&&(b(0,`div`,14)(1,`div`,2)(2,`h1`),j(3,`forum`),_$1(),b(4,`p`),j(5,`A place to share your Angular knowledge.`),_$1()()())}function Sr(n,e){n&1&&be$1(0,`mat-tab`,15)}function Er(n,e){if(n&1&&be$1(0,`mat-tab`,8),n&2)ee$1(`label`,`# `+pe$1().listConfig().filters.tag)}function vr(n,e){if(n&1){let t=yn$1();b(0,`mat-chip`,18),B$1(`click`,function(){let s=it$1(t).$implicit;return rt$1(pe$1(2).setListTo(`all`,{tag:s}))}),j(1),_$1()}if(n&2){let t=e.$implicit;y(),yt(` `,t,` `)}}function Tr(n,e){n&1&&(b(0,`p`,17),j(1,` No tags are here... yet. `),_$1())}function br(n,e){if(n&1&&(b(0,`mat-chip-listbox`),on$1(1,vr,2,1,`mat-chip`,16,rn$1),_$1(),le(3,Tr,2,0,`p`,17)),n&2){let t=e;y(),sn$1(t),y(2),de$1(t.length===0?3:-1)}}function wr(n,e){n&1&&(b(0,`div`,13),be$1(1,`mat-progress-bar`,19),_$1())}var rs=(()=>{class n{constructor(t,i,s){this.router=t,this.tagsService=i,this.userService=s,this.isAuthenticated=Tx(this.userService.isAuthenticated,{initialValue:!1}),this.tags=this.tagsService.getAll(),this.listConfig=au({source:this.isAuthenticated,computation:r=>({type:r?`feed`:`all`,filters:{}})}),this.selectedTab=au({source:this.isAuthenticated,computation:()=>0})}onTabChange(t){let i=t.tab.textLabel;i===`Your Feed`?this.setListTo(`feed`):i===`Global Feed`&&this.setListTo(`all`)}setListTo(t=``,i={}){if(t===`feed`&&!this.isAuthenticated()){this.router.navigateByUrl(`/login`);return}this.listConfig.set({type:t,filters:i}),this.selectedTab.set(this.tabIndexFor(t,i))}tabIndexFor(t,i){return this.isAuthenticated()?t===`feed`&&!Object.keys(i).length?0:t===`all`&&!Object.keys(i).length?1:2:Object.keys(i).length?1:0}static{this.ɵfac=function(i){return new(i||n)(A(Nt$1),A(yx),A(Mn$1))}}static{this.ɵcmp=T({type:n,selectors:[[`app-home-page`]],standalone:!1,decls:19,vars:9,consts:[[1,`home-page`],[`class`,`banner`,4,`appShowAuthed`],[1,`container`],[1,`feed-layout`],[1,`feed-main`],[3,`selectedTabChange`,`selectedIndex`],[`label`,`Your Feed`,4,`appShowAuthed`],[`label`,`Global Feed`],[3,`label`],[3,`limit`,`config`],[1,`feed-sidebar`],[1,`sidebar-card`],[2,`font-size`,`1rem`],[2,`padding`,`8px 0`],[1,`banner`],[`label`,`Your Feed`],[1,`tag-chip`],[2,`opacity`,`0.6`,`font-size`,`0.9rem`],[1,`tag-chip`,3,`click`],[`mode`,`indeterminate`]],template:function(i,s){if(i&1&&(b(0,`div`,0),_n$1(1,_r,6,0,`div`,1),b(2,`div`,2)(3,`div`,3)(4,`div`,4)(5,`mat-tab-group`,5),B$1(`selectedTabChange`,function(o){return s.onTabChange(o)}),_n$1(6,Sr,1,0,`mat-tab`,6),be$1(7,`mat-tab`,7),le(8,Er,1,1,`mat-tab`,8),_$1(),be$1(9,`app-article-list`,9),_$1(),b(10,`div`,10)(11,`mat-card`,11)(12,`mat-card-header`)(13,`mat-card-title`,12),j(14,`Popular Tags`),_$1()(),b(15,`mat-card-content`),le(16,br,4,1),$n$1(17,`async`),bg(18,wr,2,0,`div`,13),_$1()()()()()()),i&2){let r;y(),ee$1(`appShowAuthed`,!1),y(4),ee$1(`selectedIndex`,s.selectedTab()),y(),ee$1(`appShowAuthed`,!0),y(2),de$1(s.listConfig().filters.tag?8:-1),y(),ee$1(`limit`,10)(`config`,s.listConfig()),y(7),de$1((r=co(17,7,s.tags))?16:18,r)}},dependencies:[Toe,Nx,rI,oI,HJ,VJ,Bc,lj,Nj,Yte,qI,Ja],styles:[`.tag-chip[_ngcontent-%COMP%]{cursor:pointer}`]})}}return n})();var mt=(()=>{class n{constructor(t,i){this.router=t,this.userService=i}resolve(t,i){return this.userService.isAuthenticated.pipe(Lt$1(1))}static{this.ɵfac=function(i){return new(i||n)(C(Nt$1),C(Mn$1))}}static{this.ɵprov=E({token:n,factory:n.ɵfac})}}return n})();var Ar=[{path:``,component:rs,resolve:{isAuthenticated:mt}}];var os=(()=>{class n{static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵmod=Y({type:n})}static{this.ɵinj=V({imports:[If.forChild(Ar),If]})}}return n})();var as=(()=>{class n{static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵmod=Y({type:n})}static{this.ɵinj=V({providers:[mt],imports:[Sse,os]})}}return n})();var Cr=[{path:`settings`,loadChildren:()=>import(`./chunk-DYfhrhpf.js`).then(n=>n.SettingsModule)},{path:`profile`,loadChildren:()=>import(`./chunk-B2kMoqz7.js`).then(n=>n.ProfileModule)},{path:`editor`,loadChildren:()=>import(`./chunk-CLkc2rJb.js`).then(n=>n.EditorModule)},{path:`article`,loadChildren:()=>import(`./chunk-L3ZxRPi6.js`).then(n=>n.ArticleModule)}];var ls=(()=>{class n{static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵmod=Y({type:n})}static{this.ɵinj=V({imports:[If.forRoot(Cr,{preloadingStrategy:TP}),If]})}}return n})();var us=(()=>{class n{static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵmod=Y({type:n,bootstrap:[is]})}static{this.ɵinj=V({imports:[YO,ts,ooe,Sse,as,ss,ls]})}}return n})();lc.production;GO().bootstrapModule(us,{applicationProviders:[$6()]}).then(n=>console.log(`Bootstrap success`)).catch(n=>console.error(n));export{Ze$1 as $,Nx as A,qoe as At,U6 as B,y as Bt,L as C,le as Ct,Mn$1 as D,on$1 as Dt,Li as E,oI as Et,Rj as F,sn$1 as Ft,Wc as G,Uoe as H,yt as Ht,Sse as I,so as It,Y as J,Wv as K,T as L,tZ as Lt,Pne as M,rn$1 as Mt,Ps$1 as N,rt$1 as Nt,Nb as O,ou as Ot,QY as P,sM as Pt,ZF as Q,Toe as R,tb as Rt,KY as S,kj as St,Lb as T,ne$1 as Tt,V as U,zi as Ut,Uf as V,yn$1 as Vt,Vc as W,Yd as X,YD as Y,Yu as Z,If as _,ee$1 as _t,BJ as a,_n$1 as at,Ja as b,it$1 as bt,C as c,b as ct,Ex as d,bx as dt,Zee as et,FA as f,co as ft,Gt$1 as g,ec as gt,Ge$1 as h,eZ as ht,B$1 as i,_g as it,Pi as j,rI as jt,Nt$1 as k,pe$1 as kt,E as l,bI as lt,GI as m,de$1 as mt,$n$1 as n,Zu as nt,Bc as o,_x as ot,G as p,ct as pt,Xe$1 as q,A as r,_$1 as rt,Bs$1 as s,au as st,$a as t,Zte as tt,En$1 as u,be$1 as ut,Ix as v,fh as vt,LA as w,lo as wt,KF as x,j as xt,JY as y,g as yt,Tx as z,uh as zt};