import {gameBoard} from "./gameboard"
import {player} from "./player"


export default class Bomb {
    constructor() {
        this.location = player.location
        this.range = player.bombRange
        gameBoard.changeBombState(player.location[0], player.location[1], player.bombRange)
    }
    location:[number,number];
    range:number

}