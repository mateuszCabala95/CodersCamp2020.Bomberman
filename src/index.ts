import app from "./index-app"
import Joystick from "./joystick/joystick"

const joy = new Joystick("joyDiv")
joy.render()

export default app
