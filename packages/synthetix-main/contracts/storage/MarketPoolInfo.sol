//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title Stores information for specific actors in a Distribution.
 */
library MarketPoolInfo {
    struct Data {
        /**
         * @dev . Needed to re-add the pool to the distribution when going back in range
         */
        uint128 liquidityAmountD18;
        uint128 unused;
        /**
         * @dev The amount of debt the pool has which hasn't been passed down the debt distribution chain yet
         */
        uint128 pendingDebtD18;
        uint128 unused2;
    }
}