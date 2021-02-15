import { Game } from "../../game"
import { IComponent } from "../../../utils"
import { Player } from "../../../Player"

import { Settings } from "../../../settings"
export class GameInputComponent implements IComponent {
  public Entity: Game

  constructor(game: Game) {
    this.Entity = game
  }

  public Awake(): void {
    document.body.addEventListener("keydown", this.HandleKeyInput.bind(this))
  }

  private HandleKeyInput(e: KeyboardEvent): void {
    const locomotionKeys: Map<string, [number, number]> = new Map([
      ["ArrowUp", [0, -1]],
      ["ArrowDown", [0, 1]],
      ["ArrowRight", [1, 0]],
      ["ArrowLeft", [-1, 0]],
      ["KeyW", [0, -1]],
      ["KeyS", [0, 1]],
      ["KeyD", [1, 0]],
      ["KeyA", [-1, 0]],
    ])

    const bombKeys: Set<string> = new Set(["Space"])
    const bombKeys2: Set<string> = new Set(["KeyE"])

    const playerEntities = this.Entity.Entities.filter(
      (x) => x instanceof Player
    ) as Player[]

    if (locomotionKeys.has(e.code)) {
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      const [x, y] = locomotionKeys.get(e.code)!

      if (playerEntities[1]) {
        const playerBKeys = ["KeyW", "KeyS", "KeyD", "KeyA"]

        if (playerBKeys.includes(e.code)) {
          setTimeout(
            () => playerEntities[1].Move(x, y),
            Settings.movement.delay
          )
        } else {
          setTimeout(
            () => playerEntities[0].Move(x, y),
            Settings.movement.delay
          )
        }
      } else {
        setTimeout(() => playerEntities[0].Move(x, y), Settings.movement.delay)
      }
    } else if (bombKeys.has(e.code)) {
      playerEntities[0].SetBomb()
    } else if (bombKeys2.has(e.code)) {
      playerEntities[1].SetBomb()
    } else {
      return
    }

    window.requestAnimationFrame(() => {
      this.Entity.Update()
    })
  }

  public Update(): void {
    // @todo
  }
}
