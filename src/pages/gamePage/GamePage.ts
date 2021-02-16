/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Game } from "../../game"
import "../gamePage/gamepage.scss"

export default class GamePage {
  render(): void {
    new Game().Awake()
  }
}
