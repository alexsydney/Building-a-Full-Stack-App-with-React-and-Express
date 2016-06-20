'use strict';

var dispatcher = require('./../dispatcher');

module.exports = {
  add: function(item){
    dispatcher.dispatch({
      payload:item,
      type:"grocery-item:add"
    })
  },
  buy: function(item){
    dispatcher.dispatch({
      payload:item,
      type:"grocery-item:buy"
    })
  },
  delete: function(item){
    dispatcher.dispatch({
      payload:item,
      type:"grocery-item:delete"
    })
  },
  unbuy: function(item){
    dispatcher.dispatch({
      payload:item,
      type:"grocery-item:unbuy"
    })
  }
}
