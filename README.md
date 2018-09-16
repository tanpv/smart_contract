toc
	- primer solidity (demo with faucet contract)
		- array
			- delete item in array
		- mapping
			- naming
			- multiple dimension mapping
		- predefine
			- msg.sender
		- function
			- internal, external
			- private, public
			- view
			- constructor
		- class
			- inheritance
			- interface
			
	- token standards with openzepplin
		- erc20
			- ico idea
			- structure
			- write test
			
		- erc721
			- non-fungible and collectible idea
			- structure
				- erc721.sol
			- write test
	
	- why they using this ?

	- real world ico 
		- https://www.youtube.com/watch?v=2IqsgSyA8BQ&list=PLS5SEs8ZftgULF-lbxy-is9x_7mTMHFIN

	- real world game
		- https://www.youtube.com/watch?v=T_Cjb5qNhiI
		- perfect tutorial
		- https://github.com/satansdeer/gradient-token
		- https://github.com/PacktPublishing/Ethereum-Cookbook














































smart contract
	- end result
		- faucet
		https://github.com/ethereumbook/ethereumbook/blob/develop/code/Solidity/Faucet8.sol
		- election
		https://github.com/dappuniversity/election/blob/master/contracts/Election.sol


		- erc20
		https://github.com/dappuniversity/token_sale/blob/master/contracts/DappToken.sol
		https://github.com/dappuniversity/token_sale/blob/master/contracts/DappTokenSale.sol


		- erc721
		https://medium.com/blockchannel/walking-through-the-erc721-full-implementation-72ad72735f3c

		- openzeplin
		https://www.youtube.com/watch?v=W8pytsIMe8A
	
		
		https://github.com/leanthebean/mtg/blob/master/smart_contracts/contracts/MTG.sol













	
	- externally owned accounts (EOAs) and contract account
	- life cycle of a smart contract
		- write smart contract in high level language
		- compile smart contract to bytecode
		- deploy contract to blockchain by contract creation transaction
		- each deployed contract will be assigned a address
		- contracts only run if they are called by a transaction
	- compiling smart contract with solidity compiler
	- ethereum contract application binary interface
	- select solidity compiler and language version
	- solidity programming
		- data type
		- predefined global variables and functions
			- message call context
			- transaction context
			- block context
		- address object
		- build in function
		- contract definition
			- interface
			- library
			- function
		- contract constructor and self destruct
		- function modifiers
		- contract inheritance
		- error handling
		- events
		- catching events
		- calling other contracts
			- creating a new instance
			- raw call, delegatecall
	











































Ethereum Solidity Smart Contract Bootcamp
every thing you need to know about smart contract

Structure:
	- fundamental
	- standard smart contract explaine and implement
		- erc20
		- erc721
		- erc1155 --> https://blog.enjincoin.io/erc-1155-the-crypto-item-standard-ac9cf1c5a226
	- security
	- openzeplin library



Smart Contracts Code and Security Issue
	- https://github.com/ethereumbook/ethereumbook/blob/develop/smart-contracts.asciidoc

Smart Contracts Lib
	- openzeplin, very large of library on smart contract

Smart Contracts Examples
	- faucet smart contract
		https://github.com/ethereumbook/ethereumbook/blob/develop/code/Solidity/Faucet8.sol
	- erc-721 token
		https://medium.com/blockchannel/walking-through-the-erc721-full-implementation-72ad72735f3c
	- erc-20 token
		https://theethereum.wiki/w/index.php/ERC20_Token_Standard
		https://github.com/dappuniversity/token_sale/tree/master/contracts
	- erc-1155
		https://blog.enjincoin.io/erc-1155-the-crypto-item-standard-ac9cf1c5a226

Tutorial
	https://blog.zeppelin.solutions/the-hitchhikers-guide-to-smart-contracts-in-ethereum-848f08001f05
	https://openzeppelin.org/api/docs/next-steps.html
	https://blog.zeppelin.solutions/designing-the-architecture-for-your-ethereum-application-9cec086f8317
	https://blog.zeppelin.solutions/onward-with-ethereum-smart-contract-security-97a827e47702
	https://hackernoon.com/5-erc-standards-every-ethereum-developer-should-know-about-c1ea79d3483e
	https://medium.com/@blockchain101/calling-the-function-of-another-contract-in-solidity-f9edfa921f4c

invole to openzeplin

attach and defend technical
create and analysis


