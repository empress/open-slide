import { module, test } from 'qunit';

import { setupTest } from 'dummy/tests/helpers';

module('Unit | Model | slides', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('slides', {});
    assert.ok(model);
  });
});
