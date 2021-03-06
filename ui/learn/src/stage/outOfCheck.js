var m = require('mithril');
var util = require('../util');
var assert = require('../assert');
var arrow = util.arrow;

var imgUrl = util.assetUrl + 'images/learn/bolt-shield.svg';

var oneMove = 'Escape with the king<br>or block the attack!';

module.exports = {
  key: 'outOfCheck',
  title: 'Out of check',
  subtitle: 'Defend your king',
  image: imgUrl,
  intro: 'You are in check! You must escape or block the attack.',
  illustration: m('img.bg', {
    src: imgUrl
  }),
  levels: [{
    goal: 'Escape with the king!',
    fen: '8/8/8/4q3/8/8/8/4K3 w - - 0 1',
    shapes: [arrow('e5e1', 'red'), arrow('e1f1')]
  }, {
    goal: 'The king cannot escape,<br>but you can block the attack!',
    fen: '8/7r/6r1/8/R7/7K/8/8 w - - 0 1',
  }, {
    goal: 'You can get out of check<br>by taking the attacking piece.',
    fen: '8/8/8/3b4/8/4N3/KBn5/1R6 w - - 0 1',
  }, {
    goal: 'This knight is checking<br>through your defenses!',
    fen: '4q3/8/8/8/8/5nb1/3PPP2/3QKBNr w - - 0 1',
  }, {
    goal: oneMove,
    fen: '8/8/7p/2q5/5n2/1N1KP2r/3R4/8 w - - 0 1',
  }, {
    goal: oneMove,
    fen: '8/6b1/8/8/q4P2/2KN4/3P4/8 w - - 0 1',
  }].map(function(l, i) {
    l.detectCapture = false;
    l.nbMoves = 1;
    return util.toLevel(l, i);
  }),
  complete: 'Congratulations! You checked your opponent, forcing them to defend their king!'
};
