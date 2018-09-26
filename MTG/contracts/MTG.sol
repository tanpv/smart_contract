/**
  - support minting with image hash
  - 

 */
pragma solidity ^0.4.24;

import 'openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol';
import 'openzeppelin-solidity/contracts/token/ERC721/ERC721Mintable.sol';
import 'openzeppelin-solidity/contracts/token/ERC721/ERC721Burnable.sol';

contract MTG is ERC721Full, ERC721Mintable, ERC721Burnable {
  constructor(string name, string symbol) public
    ERC721Mintable()
    ERC721Full(name, symbol)
  {}
  
}