// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import{factory as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-gamma@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function f(){var f,j,g,u,c;if(0===arguments.length)f=p();else if(1===arguments.length&&r(arguments[0]))if(o(g=arguments[0],"prng")){if(!i(g.prng))throw new TypeError(h("0Ox7M","prng",g.prng));f=p({prng:g.prng})}else f=p(g);else{if(!n(c=arguments[0]))throw new TypeError(h("0Ox7P",c));if(arguments.length>1){if(!r(g=arguments[1]))throw new TypeError(h("0Ox2h",g));if(o(g,"prng")){if(!i(g.prng))throw new TypeError(h("0Ox7M","prng",g.prng));f=p(c/2,.5,{prng:g.prng})}else f=p(c/2,.5,g)}else f=p(c/2,.5)}return u=void 0===c?O:E,j=f.PRNG,e(u,"NAME","chisquare"),g&&g.prng?(e(u,"seed",null),e(u,"seedLength",null),s(u,"state",d(null),m),e(u,"stateLength",null),e(u,"byteLength",null),e(u,"toJSON",d(null))):(t(u,"seed",b),t(u,"seedLength",v),s(u,"state",w,L),t(u,"stateLength",x),t(u,"byteLength",y),e(u,"toJSON",N)),e(u,"PRNG",j),u;function b(){return j.seed}function v(){return j.seedLength}function x(){return j.stateLength}function y(){return j.byteLength}function w(){return j.state}function L(e){j.state=e}function N(){var e={type:"PRNG"};return e.name=u.NAME,e.state=a(j.state),e.params=void 0===c?[]:[c],e}function E(){return f()}function O(e){return l(e)||e<=0?NaN:f(e/2,.5)}}var j=f();e(j,"factory",f);export{j as default,f as factory};
//# sourceMappingURL=index.mjs.map
