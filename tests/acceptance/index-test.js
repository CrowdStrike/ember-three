import { module, test } from 'qunit';
import THREE from 'three';

module('Acceptance | index', function() {
  test('import works', function(assert) {
    assert.ok(THREE.REVISION);
  });
});
