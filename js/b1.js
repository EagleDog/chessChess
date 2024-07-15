


var position = {
  d6: 'bK',
  d4: 'wP',
  e4: 'wK'
}

var ruyLopez = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'

var config1 = {
  orientation: 'black',
  position: ruyLopez,
  draggable: true,
  sparePieces: true,
  dropOffBoard: 'snapback', // this is the default
  dropOffBoard: 'trash'
}
var config2 = {
  orientation: 'white',
  position: ruyLopez,
  draggable: true,
  sparePieces: true,
  dropOffBoard: 'trash'
}
// var board1 = ChessBoard('board1', 'start')
// var board1 = ChessBoard('board1', position)
var board1 = ChessBoard('board1', config1)


// var board2 = ChessBoard('board2', 'start')
var board2 = ChessBoard('board2', config2)

var config3 = {
  draggable: true,
  dropOffBoard: 'trash',
  sparePieces: true
}

var config4 = {

}
var config5 = {

}
var config6 = {

}
var config7 = {

}
