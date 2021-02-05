import { Entity } from "../utils"
import { Grid } from "../grid"
import { Player } from "../Player"
import { Team } from "../team"
import { GameInputComponent } from "./components"

// let i = 0
export class Game extends Entity {
  private _lastTimestamp = 0
  private _entities: Entity[] = []

  public get Entities(): Entity[] {
    return this._entities
  }

  // private HandleKeyInput(e: KeyboardEvent) {
  //   this.AddComponent(new GameInputComponent())
  //   const grid = new Grid()
  //
  //   switch (e.code) {
  //     case "KeyA":
  //       console.log(e.code + " pressed")
  //       this._entities.length = this._entities.length - 2
  //       --i
  //       if (i < 0 || i > 63) {
  //         ++i
  //         break
  //       }
  //       this._entities.push(grid, new Player(Team.A, grid.Nodes[i]))
  //       for (const entity of this.Entities) {
  //         entity.Awake()
  //       }
  //
  //       window.requestAnimationFrame(() => {
  //         this._lastTimestamp = Date.now()
  //         this.Update()
  //       })
  //       break
  //     case "KeyD":
  //       console.log(e.code + " pressed")
  //       this._entities.length = this._entities.length - 2
  //       ++i
  //       if (i < 0 || i > 63) {
  //         --i
  //         break
  //       }
  //       this._entities.push(grid, new Player(Team.A, grid.Nodes[i]))
  //       for (const entity of this.Entities) {
  //         entity.Awake()
  //       }
  //       window.requestAnimationFrame(() => {
  //         this._lastTimestamp = Date.now()
  //         this.Update()
  //       })
  //       break
  //     case "KeyW":
  //       console.log(e.code + " pressed")
  //       this._entities.length = this._entities.length - 2
  //       i = i - Settings.grid.dimension
  //       if (i < 0 || i > 63) {
  //         i = i + Settings.grid.dimension
  //         break
  //       }
  //       this._entities.push(grid, new Player(Team.A, grid.Nodes[i]))
  //       for (const entity of this.Entities) {
  //         entity.Awake()
  //       }
  //       window.requestAnimationFrame(() => {
  //         this._lastTimestamp = Date.now()
  //         this.Update()
  //       })
  //       break
  //     case "KeyS":
  //       console.log(e.code + " pressed")
  //       this._entities.length = this._entities.length - 2
  //       i = i + Settings.grid.dimension
  //       if (i < 0 || i > 63) {
  //         i = i - Settings.grid.dimension
  //         break
  //       }
  //       this._entities.push(grid, new Player(Team.A, grid.Nodes[i]))
  //       for (const entity of this.Entities) {
  //         entity.Awake()
  //       }
  //       window.requestAnimationFrame(() => {
  //         this._lastTimestamp = Date.now()
  //         this.Update()
  //       })
  //       break
  //     case "Space":
  //       console.log(e.code + " pressed - Bomb")
  //       break
  //   }
  // }

  public Awake(): void {
    this.AddComponent(new GameInputComponent(this))
    super.Awake()
    const grid = new Grid()
    this._entities.push(
      grid,
      new Player(Team.A, grid, 0)
      // new Player(Team.B, grid.Nodes[grid.Nodes.length - 1])
    )

    for (const entity of this.Entities) {
      entity.Awake()
    }

    // document.body.addEventListener("keydown", this.HandleKeyInput.bind(this))

    window.requestAnimationFrame(() => {
      this._lastTimestamp = Date.now()
      this.Update()
    })
  }

  public Update(): void {
    const deltaTime = (Date.now() - this._lastTimestamp) / 1000
    super.Update(deltaTime)

    for (const entity of this.Entities) {
      entity.Update(deltaTime)
    }

    this._lastTimestamp = Date.now()
    window.requestAnimationFrame(() => this.Update())
  }
}
