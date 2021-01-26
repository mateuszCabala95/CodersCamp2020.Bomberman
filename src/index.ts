const app = require("./index-app")
import Joystick from "./joystick/joystick"

const joy = new Joystick("joyDiv")

joy.render()

setInterval(() => {
    console.log(joy.context)
}, 100)

export default app