import { Entity } from "../utils"
import { Player } from "../Player"

export class Bombs extends Entity {
  constructor(public readonly Factory: Player) {
    super()
  }
}
