var m = require('mithril');
var util = require('../util');
var assert = require('../assert');
var arrow = util.arrow;

module.exports = {
  title: 'The pawn',
  subtitle: 'It moves forward only.',
  image: util.assetUrl + 'images/learn/pieces/P.svg',
  intro: "Pawns are weak, but they pack a lot of potential.",
  illustration: m('div.is2d.no-square',
    m('piece.pawn.white')
  ),
  stages: [{
    goal: 'Pawns move one square only.<br><br>But when they reach the other side of the board, they become a stronger piece!',
    fen: '8/8/8/P7/8/8/8/8 w - - 0 1',
    apples: 'f3',
    nbMoves: 4,
    shapes: [arrow('a5a6'),arrow('a6a7'),arrow('a7a8'),arrow('a8f3')]
  }, {
    goal: 'Most of the time, promoting to a queen is the best.<br><br>But sometimes a knight can come in handy!',
    fen: '8/8/8/5P2/8/8/8/8 w - - 0 1',
    apples: 'b6 c4 d7 e5 a8',
    nbMoves: 8
  }, {
    goal: 'Pawns move forward,<br>but capture diagonally!',
    fen: '8/8/8/8/8/4P3/8/8 w - - 0 1',
    apples: 'c6 d5 d7',
    nbMoves: 4,
    shapes: [arrow('e3e4'),arrow('e4d5'),arrow('d5c6'),arrow('c6d7')],
    failure: [assert.pieceNotOn('e3 e4 c6 d5 d7')]
  }, {
    goal: 'Capture, then promote!',
    fen: '8/8/8/8/8/1P6/8/8 w - - 0 1',
    apples: 'b4 b6 c4 c6 c7 d6',
    nbMoves: 8,
  }, {
    goal: 'Capture, then promote!',
    fen: '8/8/8/8/8/3P4/8/8 w - - 0 1',
    apples: 'c4 b5 b6 d5 d7 e6 c8',
    failure: [assert.whitePawnOn('b5 d4 d6 c7')],
    nbMoves: 7
  }, {
    cssClass: 'highlight-2nd-rank'
  }, {
    goal: 'Promote as fast as possible!',
    fen: '8/8/8/8/8/8/6P1/8 w - - 0 1',
    items: {
      a6: 'apple',
      a7: 'apple',
      b6: 'apple',
      b7: 'apple',
      b8: 'apple',
      c7: 'apple',
      c8: 'apple',
      a8: 'flower'
    },
    nbMoves: 13,
    shapes: [arrow('g2g4')]
  }].map(util.toStage),
  complete: 'Congratulations! Pawns have no secrets for you.'
};