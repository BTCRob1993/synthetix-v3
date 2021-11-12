const fs = require('fs');
const path = require('path');
const { resetHardhatContext } = require('hardhat/plugins-testing');
const { takeSnapshot, restoreSnapshot } = require('@synthetixio/core-js/utils/rpc');

function useEnvironment(fixtureProjectName) {
  let snapshotId;

  beforeEach('loading environment', async function () {
    this.timeout(25000);

    // Set node environments root on the given fixture project root
    process.chdir(_getEnvironmentPath(fixtureProjectName));

    // Load global hardhat environement
    this.hre = require('hardhat');

    // Save a snapshot to be reverted at the end of each test
    snapshotId = await takeSnapshot(this.hre.ethers.provider);

    // Load sample project's initializers, for being able to deploy and set it up
    const createInitializer = _getEnvironmentInitializer(fixtureProjectName);
    const { deploySystem, initSystem } = createInitializer(this.hre);

    // Allow the tests to execute the configured deploy method on the loaded environment
    this.deploySystem = deploySystem;

    // Allow to initialize a deployment from the tests
    this.initSystem = initSystem;
  });

  afterEach('resetting environment', async function () {
    // Reset global loaded hardhat envrironment
    resetHardhatContext();

    // Restore blockchain snapshot to its original state before the test run
    await restoreSnapshot(snapshotId, this.hre.ethers.provider);
  });
}

function _getEnvironmentPath(fixtureProjectName) {
  const pathname = path.join(__dirname, 'fixture-projects', fixtureProjectName);

  if (!fs.existsSync(pathname)) {
    throw new Error(`Invalid fixture project ${fixtureProjectName}`);
  }

  return pathname;
}

function _getEnvironmentInitializer(fixtureProjectName) {
  const initializerPath = `${_getEnvironmentPath(fixtureProjectName)}/test/helpers/initializer`;

  try {
    return require(initializerPath);
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      throw new Error(
        `Sample project didn't define any tests environment initializer helper: ${initializerPath}`
      );
    }

    throw err;
  }
}

module.exports = {
  useEnvironment,
};