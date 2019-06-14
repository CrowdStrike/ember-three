module.exports = {
  normalizeEntityName() {},

  async afterInstall() {
    let peerDependencies = await require('pkg-conf')('peerDependencies');
    return await this.addPackageToProject('three', peerDependencies['three']);
  }
};
