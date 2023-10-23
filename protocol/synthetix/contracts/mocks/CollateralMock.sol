//SPDX-License-Identifier: MIT
pragma solidity >=0.8.11 <0.9.0;

import "@synthetixio/core-contracts/contracts/token/ERC20.sol";

contract CollateralMock is ERC20 {
    function initialize(
        string memory tokenName,
        string memory tokenSymbol,
        uint8 tokenDecimals
    ) public {
        _initialize(tokenName, tokenSymbol, tokenDecimals);
    }

    function burn(uint256 amount) external {
        _burn(ERC2771Context._msgSender(), amount);
    }

    function mint(address recipient, uint256 amount) external {
        _mint(recipient, amount);
    }
}
