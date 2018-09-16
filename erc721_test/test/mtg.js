const MTG = artifacts.require('MTG');

require('chai')

contract('test for MTG game', (accounts) => {
  
  let mtgInstance;
  beforeEach(async function(){
    mtgInstance = await MTG.deployed()
  })
  
  describe('MTG test', function(){

    // beforeEach(async function(){
    //   await mtgInstance.mint(accounts[0], firstTokenId)
    //   await mtgInstance.mint(accounts[0], secondTokenId)    
    // })

    describe('balanceOf', function(){
      it('returns the amount of tokens owned by the given address', async function(){            
        await mtgInstance.mint(accounts[0], 1)        
        const balance = await mtgInstance.balanceOf(accounts[0])
        console.log(balance.valueOf())
        assert.equal(balance.valueOf(), 1)
      })
    })

    describe('balanceOf', function(){
      it('returns owner of given token', async function(){        
        await mtgInstance.mint(accounts[0], 2)
        const owner = await mtgInstance.ownerOf(2)
        console.log(owner)
        assert.equal(owner, accounts[0])
      })
    })        
  })
})
