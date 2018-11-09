import { module, test } from 'qunit';
import THREE from 'three';

module('Acceptance | application', function() {
  test('import works', function(assert) {
    assert.ok(THREE.REVISION);
  });
});
