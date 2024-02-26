/*! For license information please see 371.f56b312e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmentoria_react=self.webpackChunkmentoria_react||[]).push([[371],{6371:(e,t,r)=>{r.r(t),r.d(t,{NestedAppAuthController:()=>B});var n=r(9848),o=r(471),i=r(1392),s=r(8648),c=r(2859),a=r(8439),u=r(7056),d=r(385),p=r(4012),l=r(1670),h=r(2989),A=r(7118),g=r(5788),E=r(6823);const v="USER_INTERACTION_REQUIRED",C="USER_CANCEL",m="NO_NETWORK",k="TRANSIENT_ERROR",w="PERSISTENT_ERROR",I="DISABLED",T="ACCOUNT_UNAVAILABLE",f="NESTED_APP_AUTH_UNAVAILABLE";class R{constructor(e,t,r,n){this.clientId=e,this.clientCapabilities=t,this.crypto=r,this.logger=n}toNaaTokenRequest(e){var t;let r;r=void 0===e.extraQueryParameters?new Map:new Map(Object.entries(e.extraQueryParameters));const n=(new a.W).addClientCapabilitiesToClaims(e.claims,this.clientCapabilities);return{platformBrokerId:null===(t=e.account)||void 0===t?void 0:t.homeAccountId,clientId:this.clientId,authority:e.authority,scope:e.scopes.join(" "),correlationId:void 0!==e.correlationId?e.correlationId:this.crypto.createNewGuid(),claims:u.$.isEmptyObj(n)?void 0:n,state:e.state,authenticationScheme:e.authenticationScheme||d.IO.BEARER,extraParameters:r}}fromNaaTokenResponse(e,t,r){if(!t.token.id_token||!t.token.access_token)throw(0,p.SB)(l.Bh);const n=new Date(1e3*(r+(t.token.expires_in||0))),o=h.My(t.token.id_token,this.crypto.base64Decode),i=this.fromNaaAccountInfo(t.account,o),s=t.token.scope||e.scope;return{authority:t.token.authority||i.environment,uniqueId:i.localAccountId,tenantId:i.tenantId,scopes:s.split(" "),account:i,idToken:t.token.id_token,idTokenClaims:o,accessToken:t.token.access_token,fromCache:!0,expiresOn:n,tokenType:e.authenticationScheme||d.IO.BEARER,correlationId:e.correlationId,extExpiresOn:n,state:e.state}}fromNaaAccountInfo(e,t){const r=t||e.idTokenClaims,n=e.localAccountId||(null===r||void 0===r?void 0:r.oid)||(null===r||void 0===r?void 0:r.sub)||"",o=e.tenantId||(null===r||void 0===r?void 0:r.tid)||"",i=e.homeAccountId||"".concat(n,".").concat(o),s=e.username||(null===r||void 0===r?void 0:r.preferred_username)||"",c=e.name||(null===r||void 0===r?void 0:r.name);return{homeAccountId:i,environment:e.environment,tenantId:o,username:s,localAccountId:n,name:c,idToken:e.idToken,idTokenClaims:r}}fromBridgeError(e){if(!function(e){return void 0!==e.status}(e))return new E.lR("unknown_error","An unknown error occurred");switch(e.status){case C:return new p.eB(l.fn);case m:return new p.eB(l.l7);case T:return new p.eB(l.rk);case I:return new p.eB(l.CN);case f:return new p.eB(e.code||l.CN,e.description);case k:case w:return new A.g(e.code,e.description);case v:return new g.CB(e.code,e.description);default:return new E.lR(e.code,e.description)}}}const y={code:"unsupported_method",desc:"The PKCE code challenge and verifier could not be generated."};class U extends E.lR{constructor(e,t){super(e,t),Object.setPrototypeOf(this,U.prototype),this.name="NestedAppAuthError"}static createUnsupportedError(){return new U(y.code,y.desc)}}var N=r(1182),S=r(7498);class B{constructor(e){this.operatingContext=e;const t=this.operatingContext.getBridgeProxy();if(void 0===t)throw new Error("unexpected: bridgeProxy is undefined");this.bridgeProxy=t,this.config=e.getConfig(),this.logger=this.operatingContext.getLogger(),this.performanceClient=this.config.telemetry.client,this.browserCrypto=e.isBrowserEnvironment()?new c.M(this.logger,this.performanceClient):n.j,this.eventHandler=new N.J(this.logger,this.browserCrypto),this.nestedAppAuthAdapter=new R(this.config.auth.clientId,this.config.auth.clientCapabilities,this.browserCrypto,this.logger)}getBrowserStorage(){throw U.createUnsupportedError()}getEventHandler(){return this.eventHandler}static async createController(e){const t=new B(e);return Promise.resolve(t)}initialize(){return Promise.resolve()}async acquireTokenInteractive(e){this.eventHandler.emitEvent(S.B.ACQUIRE_TOKEN_START,s.X8.Popup,e);const t=this.performanceClient.startMeasurement(o.MX.AcquireTokenPopup,e.correlationId);null===t||void 0===t||t.add({nestedAppAuthRequest:!0});try{const r=this.nestedAppAuthAdapter.toNaaTokenRequest(e),n=i._C(),o=await this.bridgeProxy.getTokenInteractive(r),c=this.nestedAppAuthAdapter.fromNaaTokenResponse(r,o,n);return this.operatingContext.setActiveAccount(c.account),this.eventHandler.emitEvent(S.B.ACQUIRE_TOKEN_SUCCESS,s.X8.Popup,c),t.add({accessTokenSize:c.accessToken.length,idTokenSize:c.idToken.length}),t.end({success:!0,requestId:c.requestId}),c}catch(r){const e=this.nestedAppAuthAdapter.fromBridgeError(r);throw this.eventHandler.emitEvent(S.B.ACQUIRE_TOKEN_FAILURE,s.X8.Popup,null,r),t.end({errorCode:e.errorCode,subErrorCode:e.subError,success:!1}),e}}async acquireTokenSilentInternal(e){this.eventHandler.emitEvent(S.B.ACQUIRE_TOKEN_START,s.X8.Silent,e);const t=this.performanceClient.startMeasurement(o.MX.SsoSilent,e.correlationId);null===t||void 0===t||t.increment({visibilityChangeCount:0}),null===t||void 0===t||t.add({nestedAppAuthRequest:!0});try{const r=this.nestedAppAuthAdapter.toNaaTokenRequest(e),n=i._C(),o=await this.bridgeProxy.getTokenSilent(r),c=this.nestedAppAuthAdapter.fromNaaTokenResponse(r,o,n);return this.operatingContext.setActiveAccount(c.account),this.eventHandler.emitEvent(S.B.ACQUIRE_TOKEN_SUCCESS,s.X8.Silent,c),null===t||void 0===t||t.add({accessTokenSize:c.accessToken.length,idTokenSize:c.idToken.length}),null===t||void 0===t||t.end({success:!0,requestId:c.requestId}),c}catch(r){const e=this.nestedAppAuthAdapter.fromBridgeError(r);throw this.eventHandler.emitEvent(S.B.ACQUIRE_TOKEN_FAILURE,s.X8.Silent,null,r),null===t||void 0===t||t.end({errorCode:e.errorCode,subErrorCode:e.subError,success:!1}),e}}async acquireTokenPopup(e){return this.acquireTokenInteractive(e)}acquireTokenRedirect(e){throw U.createUnsupportedError()}async acquireTokenSilent(e){return this.acquireTokenSilentInternal(e)}acquireTokenByCode(e){throw U.createUnsupportedError()}acquireTokenNative(e,t,r){throw U.createUnsupportedError()}acquireTokenByRefreshToken(e,t){throw U.createUnsupportedError()}addEventCallback(e){return this.eventHandler.addEventCallback(e)}removeEventCallback(e){this.eventHandler.removeEventCallback(e)}addPerformanceCallback(e){throw U.createUnsupportedError()}removePerformanceCallback(e){throw U.createUnsupportedError()}enableAccountStorageEvents(){throw U.createUnsupportedError()}disableAccountStorageEvents(){throw U.createUnsupportedError()}getAccount(e){throw U.createUnsupportedError()}getAccountByHomeId(e){const t=this.operatingContext.getActiveAccount();return void 0!==t&&t.homeAccountId===e?this.nestedAppAuthAdapter.fromNaaAccountInfo(t):null}getAccountByLocalId(e){const t=this.operatingContext.getActiveAccount();return void 0!==t&&t.localAccountId===e?this.nestedAppAuthAdapter.fromNaaAccountInfo(t):null}getAccountByUsername(e){const t=this.operatingContext.getActiveAccount();return void 0!==t&&t.username===e?this.nestedAppAuthAdapter.fromNaaAccountInfo(t):null}getAllAccounts(){const e=this.operatingContext.getActiveAccount();return void 0!==e?[this.nestedAppAuthAdapter.fromNaaAccountInfo(e)]:[]}handleRedirectPromise(e){throw U.createUnsupportedError()}loginPopup(e){if(void 0!==e)return this.acquireTokenInteractive(e);throw U.createUnsupportedError()}loginRedirect(e){throw U.createUnsupportedError()}logout(e){throw U.createUnsupportedError()}logoutRedirect(e){throw U.createUnsupportedError()}logoutPopup(e){throw U.createUnsupportedError()}ssoSilent(e){return this.acquireTokenSilentInternal(e)}getTokenCache(){throw U.createUnsupportedError()}getLogger(){return this.logger}setLogger(e){this.logger=e}setActiveAccount(e){this.logger.warning("nestedAppAuth does not support setActiveAccount")}getActiveAccount(){const e=this.operatingContext.getActiveAccount();return void 0!==e?this.nestedAppAuthAdapter.fromNaaAccountInfo(e):null}initializeWrapperLibrary(e,t){}setNavigationClient(e){this.logger.warning("setNavigationClient is not supported in nested app auth")}getConfiguration(){return this.config}isBrowserEnv(){return this.operatingContext.isBrowserEnvironment()}getBrowserCrypto(){return this.browserCrypto}getPerformanceClient(){throw U.createUnsupportedError()}getRedirectResponse(){throw U.createUnsupportedError()}preflightBrowserEnvironmentCheck(e,t){throw U.createUnsupportedError()}async clearCache(e){throw U.createUnsupportedError()}async hydrateCache(e,t){throw U.createUnsupportedError()}}}}]);
//# sourceMappingURL=371.f56b312e.chunk.js.map