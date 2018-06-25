'use strict';

module.exports = {
  name: 'ember-three',

  included() {
    this._super.included.apply(this, arguments);

    this.import(require.resolve('three').substr(process.cwd().length + 1), {
      using: [{ transformation: 'amd', as: 'three' }],
      prepend: true
    });
  },
};
