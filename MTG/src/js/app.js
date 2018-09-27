/**
 * ui support:
 *  - support minting card for contract owner (mint on demand)
 *  - list out cards for specific address 
 *  - list out cards on selling card
 *  - support sell
 *  - support buy 
 */

App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {


    return App.initContract();
  },

  initContract: function() {

    
    return App.bindEvents();
  },

  bindEvents: function() {
    // $(document).on('click', '.btn-adopt', App.handleAdopt);
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
