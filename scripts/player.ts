import { gameBoard } from "./gameboard"
import Bomb from "./bomb"

enum Directions {
  UP = "W",
  DOWN = "S",
  LEFT = "A",
  RIGHT = "D",
}
class Player {
  constructor() {
    this.bombsAvailable = 1
    this.coordinateX = 0
    this.coordinateY = 0
    this.speed = 3
    this.bombRange = 1
    gameBoard.boardFields[this.coordinateX][
      this.coordinateY
    ].playerPresenceState = 2
  }
  bombsAvailable: number
  coordinateX = 0
  coordinateY = 0
  location: [number, number] = [this.coordinateX, this.coordinateY] //to be fixed
  speed: number
  bombRange: number

  move(dir: Directions): void {
    switch (dir) {
      case "W":
        gameBoard.changePlayerPresenceState(
          this.coordinateX,
          this.coordinateY,
          0
        )
        this.coordinateY--
        gameBoard.changePlayerPresenceState(
          this.coordinateX,
          this.coordinateY,
          2
        )
        break
      case "S":
        gameBoard.changePlayerPresenceState(
          this.coordinateX,
          this.coordinateY,
          0
        )
        this.coordinateY++
        gameBoard.changePlayerPresenceState(
          this.coordinateX,
          this.coordinateY,
          2
        )
        break
      case "A":
        gameBoard.changePlayerPresenceState(
          this.coordinateX,
          this.coordinateY,
          0
        )
        this.coordinateX--
        gameBoard.changePlayerPresenceState(
          this.coordinateX,
          this.coordinateY,
          2
        )
        break
      case "D":
        gameBoard.changePlayerPresenceState(
          this.coordinateX,
          this.coordinateY,
          0
        )
        this.coordinateX++
        gameBoard.changePlayerPresenceState(
          this.coordinateX,
          this.coordinateY,
          2
        )
        break
      default:
        break
    }
  }
  placeBomb(): Bomb {
    const bomb = new Bomb()
    return bomb
  }
}

export const player = new Player()
player.placeBomb()
// console.log(player.placeBomb().location + ' ' + player.placeBomb().range)
