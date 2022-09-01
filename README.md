<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Chi-square Random Numbers

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Chi-square][chi-square] distributed pseudorandom numbers.



<section class="usage">

## Usage

```javascript
import chisquare from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-chisquare@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-chisquare@esm/index.mjs';
```

#### chisquare( k )

Returns a pseudorandom number drawn from a [chi-square][chi-square] distribution with degrees of freedom `k`.

```javascript
var r = chisquare( 2 );
// returns <number>
```

If `k <= 0` or `k` is `NaN`, the function returns `NaN`.

```javascript
var r = chisquare( -2 );
// returns NaN

r = chisquare( NaN );
// returns NaN
```

#### chisquare.factory( \[k, ]\[options] )

Returns a pseudorandom number generator (PRNG) for generating pseudorandom numbers drawn from a [chi-square][chi-square] distribution.

```javascript
var rand = chisquare.factory();

var r = rand( 5 );
// returns <number>
```

If provided `k`, the returned generator returns random variates from the specified distribution.

```javascript
var rand = chisquare.factory( 1.0 );

var r = rand();
// returns <number>

r = rand();
// returns <number>
```

If not provided `k`, the returned generator requires that `k` be provided at each invocation.

```javascript
var rand = chisquare.factory();

var r = rand( 4 );
// returns <number>

r = rand( 3.14 );
// returns <number>
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs';

var rand = chisquare.factory({
    'prng': minstd.normalized
});

var r = rand( 10 );
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = chisquare.factory({
    'seed': 12345
});

var r1 = rand1( 3 );
// returns <number>

var rand2 = chisquare.factory( 3, {
    'seed': 12345
});

var r2 = rand2();
// returns <number>

var bool = ( r1 === r2 );
// returns true
```

To return a generator having a specific initial state, set the generator `state` option.

```javascript
var rand;
var bool;
var r;
var i;

// Generate pseudorandom numbers, thus progressing the generator state:
for ( i = 0; i < 1000; i++ ) {
    r = chisquare( 3 );
}

// Create a new PRNG initialized to the current state of `chisquare`:
rand = chisquare.factory({
    'state': chisquare.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand( 3 ) === chisquare( 3 ) );
// returns true
```

#### chisquare.NAME

The generator name.

```javascript
var str = chisquare.NAME;
// returns 'chisquare'
```

#### chisquare.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = chisquare.PRNG;
// returns <Function>
```

#### chisquare.seed

The value used to seed `chisquare()`.

```javascript
var rand;
var r;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    r = chisquare( 2.0 );
}

// Generate the same pseudorandom values...
rand = chisquare.factory( 2.0, {
    'seed': chisquare.seed
});
for ( i = 0; i < 100; i++ ) {
    r = rand();
}
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = chisquare.factory({
    'prng': Math.random
});

var seed = rand.seed;
// returns null
```

#### chisquare.seedLength

Length of generator seed.

```javascript
var len = chisquare.seedLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = chisquare.factory({
    'prng': Math.random
});

var len = rand.seedLength;
// returns null
```

#### chisquare.state

Writable property for getting and setting the generator state.

```javascript
var r = chisquare( 2 );
// returns <number>

r = chisquare( 2 );
// returns <number>

// ...

// Get a copy of the current state:
var state = chisquare.state;
// returns <Uint32Array>

r = chisquare( 2 );
// returns <number>

r = chisquare( 2 );
// returns <number>

// Reset the state:
chisquare.state = state;

// Replay the last two pseudorandom numbers:
r = chisquare( 2 );
// returns <number>

r = chisquare( 2 );
// returns <number>

// ...
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = chisquare.factory({
    'prng': Math.random
});

var state = rand.state;
// returns null
```

#### chisquare.stateLength

Length of generator state.

```javascript
var len = chisquare.stateLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = chisquare.factory({
    'prng': Math.random
});

var len = rand.stateLength;
// returns null
```

#### chisquare.byteLength

Size (in bytes) of generator state.

```javascript
var sz = chisquare.byteLength;
// returns <number>
```

If provided a PRNG for uniformly distributed numbers, this value is `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = chisquare.factory({
    'prng': Math.random
});

var sz = rand.byteLength;
// returns null
```

#### chisquare.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = chisquare.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

If provided a PRNG for uniformly distributed numbers, this method returns `null`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var rand = chisquare.factory({
    'prng': Math.random
});

var o = rand.toJSON();
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import chisquare from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-chisquare@esm/index.mjs';

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( chisquare( 1.0 ) );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = chisquare.factory( 5.0, {
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = chisquare.factory( 1.0, {
    'seed': chisquare.seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-base-chisquare.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-base-chisquare

[test-image]: https://github.com/stdlib-js/random-base-chisquare/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-base-chisquare/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-base-chisquare/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-base-chisquare?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-base-chisquare.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-base-chisquare/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-base-chisquare/tree/deno
[umd-url]: https://github.com/stdlib-js/random-base-chisquare/tree/umd
[esm-url]: https://github.com/stdlib-js/random-base-chisquare/tree/esm
[branches-url]: https://github.com/stdlib-js/random-base-chisquare/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-base-chisquare/main/LICENSE

[chi-square]: https://en.wikipedia.org/wiki/Chi-squared_distribution

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32/tree/esm

</section>

<!-- /.links -->
