/* FirstToken.sol: https://github.com/AbsoluteVirtueXI/alyra-courses/blob/master/ethereum/3-smart-contract-programming.md
Déployez le contrat FirstToken.sol et passez en paramètre du constructor une adresse dont vous avez le contrôle avant 
le déploiement. Ainsi les Ethers récoltés seront bien envoyés à une adresse dont vous êtes propriétaires. 
Effectuez 1 transaction depuis un second compte pour vérifier que votre contract fonctionne comme convenu.*/

/* 1 Ether transféré : https://rinkeby.etherscan.io/tx/0xc5f755eea56e6ecd287b068e69077e2f82bfe833b01eb8fbde1a180d4931ebc1 */

// SPDX-License-Identifier: MIT                 r
pragma solidity >=0.6.0;

contract FirstToken {
    mapping(address => uint256) public balances;
    address payable wallet;

    event Purchase(
        address indexed _buyer,
        uint256 _amount
    );

    constructor(address payable _wallet) public {
        wallet = _wallet;
    }

    receive() external payable {
        buyToken();
    }

    fallback() external payable {
        wallet.transfer(msg.value);
    }

    function buyToken() public payable{
        // buy a token
        balances[msg.sender] += 1;
        // send ether to the wallet
        wallet.transfer(msg.value);
        emit Purchase(msg.sender, 1);
    }
}