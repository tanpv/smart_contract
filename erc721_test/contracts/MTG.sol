/**
  imiplement
    - prepare some ipfs url for mtg
    - store price of each token (why need this ?)
    - implement auction
      https://github.com/satansdeer/gradient-token-tutorial/blob/master/contracts/TokenAuction.sol

  test
    - study the science of testing
 */

pragma solidity ^0.4.23;

import 'openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol';
import 'openzeppelin-solidity/contracts/token/ERC721/ERC721Mintable.sol';
import 'openzeppelin-solidity/contracts/token/ERC721/ERC721Burnable.sol';

contract MTG is ERC721Full, ERC721Mintable, ERC721Burnable {

  constructor ()
    ERC721Mintable ()
    ERC721Full ("MTG", "MTG")
    public
  {
    
  }

}