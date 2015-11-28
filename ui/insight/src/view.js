var m = require('mithril');
var axis = require('./axis');
var filters = require('./filters');
var chart = require('./chart');
var table = require('./table');
var help = require('./help');
var info = require('./info');

module.exports = function(ctrl) {
  return m('div', {
    class: ctrl.vm.loading ? 'loading' : 'ready'
  }, [
    m('div.left', [
      info(ctrl),
      filters(ctrl),
      help(ctrl)
    ]),
    m('header', [
      axis(ctrl),
      m('h2', 'Chess Insights')
    ]),
    chart(ctrl),
    table.vert(ctrl)
  ]);
};