import { afterEach, beforeEach, clearStore, describe, logStore, test } from 'matchstick-as';

import handleAccountCreatedTest from './handleAccountCreated';
import handleCollateralConfiguredTest from './handleCollateralConfigured';
import handleCollateralDepositTest from './handleCollateralDeposit';
import handleCollateralWithdrawnTest from './handleCollateralWithdrawn';
import handleDelegationUpdatedTest from './handleDelegationUpdated';
import handleLiquidationTest from './handleLiquidation';
import handleMarketCreatedTest from './handleMarketCreated';
import handleMarketDepositsTest from './handleMarketDeposits';
import handleMarketWithdrawalsTest from './handleMarketWithdrawals';
import getISOWeekNumberTest from './getISOWeekNumber';
import marketSnapshotByDayTest from './marketSnapshotByDay';
import marketSnapshotByWeekTest from './marketSnapshotByWeek';
import handleNominatedPoolOwnerTest from './handleNominatedPoolOwner';
import handlePermissionGrantedTest from './handlePermissionGranted';
import handlePermissionRevokedTest from './handlePermissionRevoked';
import handlePoolConfigurationSetTest from './handlePoolConfigurationSet';
import handlePoolCreatedTest from './handlePoolCreated';
import handlePoolNameUpdatedTest from './handlePoolNameUpdated';
import handlePoolNominationRenouncedTest from './handlePoolNominationRenounced';
import handlePoolNominationRevokedTest from './handlePoolNominationRevoked';
import handlePoolOwnershipAcceptedTest from './handlePoolOwnershipAccepted';
import handleRewardsClaimedTest from './handleRewardsClaimed';
import handleRewardsDistributedTest from './handleRewardsDistributed';
import handleUSDBurnedTest from './handleUSDBurned';
import handleUSDMintedTest from './handleUSDMinted';
import handleVaultLiquidationTest from './handleVaultLiquidation';

describe('CoreProxy', () => {
  beforeEach(() => {
    clearStore();
  });

  afterEach(() => {
    logStore();
  });

  test('handleAccountCreated', handleAccountCreatedTest);
  test('handleCollateralConfigured', handleCollateralConfiguredTest);
  test('handleCollateralDeposit', handleCollateralDepositTest);
  test('handleCollateralWithdrawn', handleCollateralWithdrawnTest);
  test('handleDelegationUpdated', handleDelegationUpdatedTest);
  test('handleLiquidation', handleLiquidationTest);
  test('handleMarketCreated', handleMarketCreatedTest);
  test('handleMarketDeposits', handleMarketDepositsTest);
  test('handleMarketWithdrawals', handleMarketWithdrawalsTest);
  test('getISOWeekNumber', getISOWeekNumberTest);
  test('marketSnapshotByDay', marketSnapshotByDayTest);
  test('marketSnapshotByWeek', marketSnapshotByWeekTest);
  test('handleNominatedPoolOwner', handleNominatedPoolOwnerTest);
  test('handlePermissionGranted', handlePermissionGrantedTest);
  test('handlePermissionRevoked', handlePermissionRevokedTest);
  test('handlePoolConfigurationSet', handlePoolConfigurationSetTest);
  test('handlePoolCreated', handlePoolCreatedTest);
  test('handlePoolNameUpdated', handlePoolNameUpdatedTest);
  test('handlePoolNominationRenounced', handlePoolNominationRenouncedTest);
  test('handlePoolNominationRevoked', handlePoolNominationRevokedTest);
  test('handlePoolOwnershipAccepted', handlePoolOwnershipAcceptedTest);
  test('handleRewardsClaimed', handleRewardsClaimedTest);
  test('handleRewardsDistributed', handleRewardsDistributedTest);
  test('handleUSDBurned', handleUSDBurnedTest);
  test('handleUSDMinted', handleUSDMintedTest);
  test('handleVaultLiquidation  ', handleVaultLiquidationTest);
});
