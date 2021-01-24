import { Entity } from "../utils";
import { Team } from "../team";
import { Bombs } from "../bombs";
import { Settings } from "../settings";
import { PlayerDrawComponent} from "../team";

export class Player extends Entity {
    private _bombs: Bombs[] = []

    constructor(public readonly Team: Team) {
        super()
    }

    public Awake(): void {
        this.AddComponent(new PlayerDrawComponent())

        super.Awake()
        // this.PrepareBombs()
    }

    public Update(deltaTime: number): void {
        super.Update(deltaTime)

        this._bombs.map(bombs => bombs.Update(deltaTime))
    }

    private PrepareBombs(): void {
        const numberOfBombs = Settings.bombs.numberOfBombs

        for (let i = 0; i < numberOfBombs; i++) {
            const bomb = new Bombs(this)
            this._bombs.push(bomb)
            bomb.Awake()
        }
    }

}