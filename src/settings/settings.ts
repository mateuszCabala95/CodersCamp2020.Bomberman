import { Color } from "../utils";

export const Settings = Object.freeze({
    grid: {
        dimension: 8,
        nodeSize: 100,
        nodeOffset: 10,
        color: new Color(245, 245, 245, 1)
    },

    bombs: {
        numberOfBombs: 1
    },

    players: {
        radius: 40,
        colors: {
            a: new Color(187, 222, 251, 1),
            b: new Color(255, 236, 179, 1)
        }
    }

})

