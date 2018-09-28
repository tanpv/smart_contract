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
		- faucet
			https://github.com/ethereumbook/ethereumbook/blob/develop/code/Solidity/Faucet8.sol
			
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

	- real world ico 
		- https://www.youtube.com/watch?v=2IqsgSyA8BQ&list=PLS5SEs8ZftgULF-lbxy-is9x_7mTMHFIN

	- real world game
		- MTG
			- init minting for owner
			- show up cards for each account
			- setting up auction for sell and buy card
			- https://github.com/OpenZeppelin/openzeppelin-solidity/pull/989/files
		
		- list out all on sale cards

			Sell {
				- price
				- seller
			}

			- array id to sell
			- mapping from id to sell struct

