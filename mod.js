// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Math.imul?Math.imul:null;var n="function"==typeof t?t:function(t,n){var u,r;return((u=(65535&(t|=0))>>>0)*(r=(65535&(n|=0))>>>0)>>>0)+((t>>>16>>>0)*r+u*(n>>>16>>>0)<<16>>>0)|0};function u(t,u){return n(t,u)>>>0}export{u as default};
//# sourceMappingURL=mod.js.map
