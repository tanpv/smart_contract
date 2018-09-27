/**
 * ui support:
 *  - list out cards for specific address ?
 *  - list out on selling cards ? * 
 *  - support for auction ? (transfer as a step inside auction)
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
