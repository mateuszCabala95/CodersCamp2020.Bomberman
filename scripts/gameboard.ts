enum BuiltUpState {
  EMPTY = 0,
  BRICK = 1,
  STRONGBRICK = 2,
  INDESTRUCTABLE = 3,
}
enum BombState {
  SAFE = 0,
  WITHINBOMBRANGE = 1,
  WITHBOMB = 2,
}
enum PlayerPresenceState {
  CLEAR = 0,
  ARRIVING = 1,
  BUSY = 2,
  LEAVING = 3,
}

class BoardField {
  builtUpState: BuiltUpState
  bombState: BombState
  playerPresenceState: PlayerPresenceState

  constructor(built: BuiltUpState) {
    this.builtUpState = built
    this.bombState = 0
    this.playerPresenceState = 0
  }
}

class GameBoard {
  constructor() {
    this.boardFields = this.generateBoard()
  }
  boardFields: BoardField[][]
  generateBoard(): BoardField[][] {
    this.boardFields = new Array(11)
      .fill(null)
      .map(() => new Array(17).fill(null))
    for (let i = 0; i < 11; i++) {
      for (let j = 0; j < 17; j++) {
        if (i % 2 === 1 && j % 2 === 1) {
          this.boardFields[i][j] = new BoardField(3)
        }
        if (
          this.boardFields[i][j] == null &&
          ((i < 3 && j == 0) ||
            (j < 3 && i == 0) ||
            (i > 7 && j == 16) ||
            (j > 13 && i == 10))
        ) {
          this.boardFields[i][j] = new BoardField(0)
        }
        const randomizer: number = Math.random()
        if (this.boardFields[i][j] == null && randomizer > 0.95) {
          this.boardFields[i][j] = new BoardField(0)
        } else if (this.boardFields[i][j] == null && randomizer > 0.6) {
          this.boardFields[i][j] = new BoardField(2)
        } else if (this.boardFields[i][j] == null) {
          this.boardFields[i][j] = new BoardField(1)
        }
      }
    }
    return this.boardFields
  }
  changePlayerPresenceState(
    coordinateX: number,
    coordinateY: number,
    newValue: number
  ): void {
    this.boardFields[coordinateX][coordinateY].playerPresenceState = newValue
  }
  changeBombState(
    coordinateX: number,
    coordinateY: number,
    bombRange: number
  ): void {
    this.boardFields[coordinateX][coordinateY].bombState = 2
    for (let i = 1; i <= bombRange; i++) {
      if (this.boardFields[coordinateX - i][coordinateY].builtUpState != 3) {
        this.boardFields[coordinateX - i][coordinateY].bombState = 1
      }
      if (this.boardFields[coordinateX + i][coordinateY].builtUpState != 3) {
        this.boardFields[coordinateX + i][coordinateY].bombState = 1
      }
      if (this.boardFields[coordinateX][coordinateY - i].builtUpState != 3) {
        this.boardFields[coordinateX][coordinateY - i].bombState = 1
      }
      if (this.boardFields[coordinateX][coordinateY + i].builtUpState != 3) {
        this.boardFields[coordinateX][coordinateY + i].bombState = 1
      }
    }
  }
}

export const gameBoard = new GameBoard()

