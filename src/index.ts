import app from "./index-app"
import Joystick from "./joystick/joystick"
import MainPage from "../src/pages/mainPage/MainPage"
const joy = new Joystick("joyDiv")
import provider from "./services/Provider"

const router = provider.get("router")

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
router.render()

// joy.render()
// new MainPage().render()

export default app
