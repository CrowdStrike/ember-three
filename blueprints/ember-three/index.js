'use strict';

module.exports = {
  normalizeEntityName() {},

  async afterInstall() {
    let { peerDependencies } = require('../../package');
    return await this.addPackageToProject('three', peerDependencies['three']);
  }
};
