const MTG = artifacts.require('./MTG.sol')

contract('MTG', accounts => {
  
  let mtgInstance  
  const to = accounts[0]
  const tokenId1 = 1
  const tokenId2 = 2
  const tokenURI1 = "QmaJmzqteDHV8cFzGEjvUo8veyxDfPn5pHw57MAXE2mLXL"
  const tokenURI2 = "QmXDv5aVtjdyrTkZMW8eXSNBUS64yFWQgd4kncmFJtm2VY"

  beforeEach(async () => {
    mtgInstance = await MTG.new("Magic: The Gathering", "MTG")    
    await mtgInstance.mintWithTokenURI(to, tokenId1, tokenURI1)
    await mtgInstance.mintWithTokenURI(to, tokenId2, tokenURI2)
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
      assert.equal(totalSupply, 2, "total supply should be correct")  
    })

    it('check ownerof', async () => {
      let owner = await mtgInstance.ownerOf(tokenId1)
      assert.equal(owner, accounts[0])

      owner = await mtgInstance.ownerOf(tokenId2)
      assert.equal(owner, accounts[0])
    })

    it('check account balance', async () => {
      const balance = await mtgInstance.balanceOf(accounts[0])
      assert.equal(balance, 2)

      for(let i = 0; i < balance; i ++) {
        let tokenId = await mtgInstance.tokenOfOwnerByIndex(accounts[0], i)
        console.log(tokenId)
        
        let tokenURI = await mtgInstance.tokenURI(tokenId)
        console.log(tokenURI)
      }
    })
  })
})