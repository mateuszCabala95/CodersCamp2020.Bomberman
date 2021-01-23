import GameBoard from "./canvas"
import BoardField from "./canvas"

 
enum Directions {
    UP = 'W'
    DOWN = 'S'
    LEFT = 'A'
    RIGHT = 'D'
}
class Player {
    constructor() {
        this.bombsAvailable = 1;
        this.coordinateX = 0;
        this.coordinateY = 0;
    }
    bombsAvailable:number;
    coordinateX:number;
    coordinateY:number;
    location:[number,number] = [this.coordinateX,this.coordinateY]
    speed:number = 3;
    move(dir:Directions) {
        switch (dir) {
            case 'W':
                this.coordinateY--
                break;
            case 'S':
                this.coordinateY++
                break;
            case 'A':
                this.coordinateX--
                break;
            case 'D':
                this.coordinateX++
                break;
            default: 
                break;
        }
    }