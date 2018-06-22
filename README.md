ember-three
==============================================================================

[![npm version](https://badge.fury.io/js/ember-three.svg)](https://badge.fury.io/js/ember-three)
[![Build Status](https://travis-ci.org/CrowdStrike/ember-three.svg?branch=master)](https://travis-ci.org/CrowdStrike/ember-three)

Ember.js three.js shim

Installation
------------------------------------------------------------------------------

```
ember install ember-three
```


Usage
------------------------------------------------------------------------------

```js
import Controller from '@ember/controller';
import THREE from 'three';

export default Controller.extend({
  THREE
});
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-three`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
