/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isUint32Array = require( '@stdlib/assert-is-uint32array' );
var chisquare = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof chisquare, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to generate pseudorandom number generators', function test( t ) {
	t.equal( typeof chisquare.factory, 'function', 'has `method' );
	t.end();
});

tape( 'attached to the main export is a method to serialize a pseudorandom number generator as JSON', function test( t ) {
	t.equal( typeof chisquare.toJSON, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is the generator name', function test( t ) {
	t.equal( chisquare.NAME, 'chisquare', 'has property' );
	t.end();
});

tape( 'attached to the main export is the underlying PRNG', function test( t ) {
	t.equal( typeof chisquare.PRNG, 'function', 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator seed', function test( t ) {
	t.equal( isUint32Array( chisquare.seed ), true, 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator seed length', function test( t ) {
	t.equal( typeof chisquare.seedLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state', function test( t ) {
	t.equal( isUint32Array( chisquare.state ), true, 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state length', function test( t ) {
	t.equal( typeof chisquare.stateLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state size', function test( t ) {
	t.equal( typeof chisquare.byteLength, 'number', 'has property' );
	t.end();
});

tape( 'the function returns pseudorandom numbers', function test( t ) {
	var r;
	var i;
	for ( i = 0; i < 1e2; i++ ) {
		r = chisquare( 3.0 );
		t.equal( typeof r, 'number', 'returns a number' );
	}
	t.end();
});

tape( 'the function supports setting the generator state', function test( t ) {
	var state;
	var arr;
	var i;

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		chisquare( 2 );
	}
	// Capture the current state:
	state = chisquare.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( chisquare( 2 ) );
	}
	// Set the state:
	chisquare.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( chisquare( 2 ), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});
