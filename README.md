# collectio-hashset

[![npm version](https://badge.fury.io/js/collectio-hashset.svg)](https://www.npmjs.com/package/collectio-hashset)
[![npm downloads](https://img.shields.io/npm/dt/collectio-hashset.svg)](https://www.npmjs.com/package/collectio-hashset)
[![dependencies](https://img.shields.io/david/litichevskiydv/collectio-hashset.svg)](https://www.npmjs.com/package/collectio-hashset)
[![dev dependencies](https://img.shields.io/david/dev/litichevskiydv/collectio-hashset.svg)](https://www.npmjs.com/package/collectio-hashset)
[![Build Status](https://github.com/litichevskiydv/collectio-hashset/actions/workflows/ci.yaml/badge.svg?branch=master)](https://github.com/litichevskiydv/collectio-hashset/actions/workflows/ci.yaml)
[![Coverage Status](https://coveralls.io/repos/github/litichevskiydv/collectio-hashset/badge.svg?branch=master)](https://coveralls.io/github/litichevskiydv/collectio-hashset?branch=master)

# Install

`npm i collectio-hashset`

# Description

Implementation of Set with a configurable equality algorithm

- [`HashSet`](https://github.com/litichevskiydv/collectio-hashset/wiki/HashSet)
  - [`new HashSet(equalityComparer)`](https://github.com/litichevskiydv/collectio-hashset/wiki/constructor)
  - _instance_
    - [`size`](https://github.com/litichevskiydv/collectio-hashset/wiki/size) : <code>number</code>
    - [`add(value)`](https://github.com/litichevskiydv/collectio-hashset/wiki/add) : [<code>HashSet</code>](https://github.com/litichevskiydv/collectio-hashset/wiki/HashSet)
    - [`has(value)`](https://github.com/litichevskiydv/collectio-hashset/wiki/has) : <code>boolean</code>
    - [`delete(value)`](https://github.com/litichevskiydv/collectio-hashset/wiki/delete) : <code>boolean</code>
    - [`clear()`](https://github.com/litichevskiydv/collectio-hashset/wiki/clear) : <code>undefined</code>
    - [`forEach(callback)`](https://github.com/litichevskiydv/collectio-hashset/wiki/forEach) : <code>undefined</code>
    - [`entries()`](https://github.com/litichevskiydv/collectio-hashset/wiki/entries) : <code>Iterable.&lt;[any, any]&gt;</code>
    - [`values()`](https://github.com/litichevskiydv/collectio-hashset/wiki/values) : <code>Iterable.&lt;any&gt;</code>
    - [`[Symbol.iterator]()`](https://github.com/litichevskiydv/collectio-hashset/wiki/Symbol.iterator) : <code>Iterable.&lt;any&gt;</code>
