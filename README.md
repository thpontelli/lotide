# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @thpontelli/lotide`

**Require it:**

`const _ = require('@thpontelli/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element of an array.
* `tail(array)`: returns all elements of an array except the first one.
* `middle(array)`: returns the middle element(s) of an array.
* `assertArraysEqual(actual, expected)`: assert with two arrays are equal.
* `eqArrays(array1, array2)`: returns true or false when comparing arrays.
* `assertEqual(actual, expected)`: assert if two simple objects are equal.
* `eqObjects(object1, object2)`: returns true or false when comparing objects.
* `takeUntil(array, callback)`: returns a part of an array until it finds an expression defined in the callback function.
* `assertObjectsEqual(actual, expected)`: assert if two complex objects are equal.
* `findKey(obj, callback)`: returns a key of an object.
* `letterPositions(sentence)`: returns the positions a letter has in a string.
* `countLetters(sentence)`: retunrs the number of letter in a string.
* `findKeyByValue(obj, val)`: returns a key based on a value.
* `map(array, callback)`: apply a filter based on an expression defined in the callback function.
* `without(source, itemsToRemove)`: remove items from an array.
* `countOnly(allItems, itemsToCount)`: counts the occurance of an item in an array.
* `flatten(array)`: it converts an array of arrays in a simple array.
* `reverse(string)`: reverse a string.

