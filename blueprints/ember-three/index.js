module.exports = {
  normalizeEntityName() {},

  afterInstall() {
    return require('pkg-conf')('peerDependencies').then(peerDependencies => {
      return this.addPackageToProject('three', peerDependencies['three']);
    });
  }
};
