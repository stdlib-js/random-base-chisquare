// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import{factory as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-gamma@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function f(){var f,j,g,u,c;if(0===arguments.length)f=p();else if(1===arguments.length&&r(arguments[0]))if(o(g=arguments[0],"prng")){if(!i(g.prng))throw new TypeError(h("0o76u,JI","prng",g.prng));f=p({prng:g.prng})}else f=p(g);else{if(!n(c=arguments[0]))throw new TypeError(h("0o771,NQ",c));if(arguments.length>1){if(!r(g=arguments[1]))throw new TypeError(h("0o72V,FD",g));if(o(g,"prng")){if(!i(g.prng))throw new TypeError(h("0o76u,JI","prng",g.prng));f=p(c/2,.5,{prng:g.prng})}else f=p(c/2,.5,g)}else f=p(c/2,.5)}return u=void 0===c?J:E,j=f.PRNG,e(u,"NAME","chisquare"),g&&g.prng?(e(u,"seed",null),e(u,"seedLength",null),s(u,"state",d(null),m),e(u,"stateLength",null),e(u,"byteLength",null),e(u,"toJSON",d(null))):(t(u,"seed",v),t(u,"seedLength",b),s(u,"state",w,N),t(u,"stateLength",y),t(u,"byteLength",x),e(u,"toJSON",L)),e(u,"PRNG",j),u;function v(){return j.seed}function b(){return j.seedLength}function y(){return j.stateLength}function x(){return j.byteLength}function w(){return j.state}function N(e){j.state=e}function L(){var e={type:"PRNG"};return e.name=u.NAME,e.state=a(j.state),e.params=void 0===c?[]:[c],e}function E(){return f()}function J(e){return l(e)||e<=0?NaN:f(e/2,.5)}}var j=f();e(j,"factory",f);export{j as default,f as factory};
//# sourceMappingURL=index.mjs.map
