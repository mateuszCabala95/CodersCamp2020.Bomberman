enum BuiltUpState {
    EMPTY = 0,
    BRICK = 1,
    STRONGBRICK = 2,
    INDESTRUCTABLE = 3
  }
  enum BombState {
    SAFE = 0,
    WITHINBOMBRANGE = 1,
    WITHBOMB = 2
  }
  enum PlayerPresenceState {
    CLEAR = 0,
    ARRIVING = 1,
    BUSY = 2,
    LEAVING = 3
  }
  class BoardField {
    builtUpState: BuiltUpState;
    bombState: BombState;
    playerPresenceState: PlayerPresenceState;
  
    constructor(built: BuiltUpState) {
      this.builtUpState = built;
      this.bombState = 0;
      this.playerPresenceState = 0;
    }
  }
  
  class GameBoard {
    constructor() {
      this.generateBoard();
    }
    boardPrint = new Array(11).fill(null).map(() => new Array(17).fill(null));
  
    generateBoard() {
      const array2d = new Array(11).fill(null).map(() => new Array(17).fill(null));
      for (let i:number = 0; i < 11; i++) {
        for (let j:number = 0; j < 17; j++) {
          if (i % 2 === 1 && j % 2 === 1) {
            array2d[i][j] = new BoardField(3);
            this.boardPrint[i][j] = array2d[i][j].builtUpState;
            console.log(i + ' ' + j + ' should be 3 :' +  array2d[i][j].builtUpState + this.boardPrint[i][j])
          } 
          if (array2d[i][j] == null && (
            (i < 3 && j == 0) ||
            (j < 3 && i == 0) ||
            (i > 7 && j == 16) ||
            (j > 13 && i == 10) )
          ) {
            array2d[i][j] = new BoardField(0);
            this.boardPrint[i][j] = array2d[i][j].builtUpState;
            console.log(i + ' ' + j + ' should be 0:' +  array2d[i][j].builtUpState + this.boardPrint[i][j])
          }
          let randomizer:number = Math.random();
          if (array2d[i][j] == null && randomizer > 0.95) {
            array2d[i][j] = new BoardField(0);
            this.boardPrint[i][j] = array2d[i][j].builtUpState;
            console.log(i + ' ' + j +' should be 0 :' +  array2d[i][j].builtUpState + this.boardPrint[i][j])
          } else if (array2d[i][j] == null && randomizer > 0.6) {
            array2d[i][j] = new BoardField(2);
            this.boardPrint[i][j] = array2d[i][j].builtUpState;
            console.log(i + ' ' + j +' should be 2 :' +  array2d[i][j].builtUpState + this.boardPrint[i][j])
          } else if (array2d[i][j] == null) {
            array2d[i][j] = new BoardField(1);
            this.boardPrint[i][j] = array2d[i][j].builtUpState;
            console.log(i + ' ' + j +' should be 1:' +  array2d[i][j].builtUpState + this.boardPrint[i][j])
          }
        }             
      }
      return array2d;     
    }
  }
  
  const gameBoard = new GameBoard();
  for (let i = 0; i < 11; i++) {
    console.log(gameBoard.boardPrint[i]);
  }