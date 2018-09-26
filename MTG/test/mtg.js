const MTG = artifacts.require('./MTG.sol')

contract('MTG', accounts => {
  
  let mtgInstance
  const to = accounts[0]
  const tokenId = 1

  beforeEach(async () => {
    mtgInstance = await MTG.new("Magic: The Gathering", "MTG")    
    await mtgInstance.mint(to, tokenId)
  })

  describe('when deploy contract', () => {

    it('check name and symbol', async () => {
      const name = await mtgInstance.name()
      const symbol = await mtgInstance.symbol()      
      assert.equal(name, "Magic: The Gathering", "name should be correct")      
      assert.equal(symbol, "MTG", "symbol should be correct")
    })

  })


  describe('when mint tokens', () => {

    it('check totalsupply', async () => {
      const totalSupply = await mtgInstance.totalSupply()      
      assert.equal(totalSupply, 1, "total supply should be correct")  
    })

    it('check ownerof', async () => {
      const owner = await mtgInstance.ownerOf(tokenId)
      assert.equal(owner, accounts[0])
    })

    it('check tokens belong to each account', async () => {
      
    })
  })
})