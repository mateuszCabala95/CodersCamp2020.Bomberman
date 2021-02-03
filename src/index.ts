import app from "./index-app"
import provider from "./services/Provider"
import Joystick from "./joystick/joystick"
import MobileDetectionService from "./services/MobileDetection"

const joy = new Joystick("joyDiv")
const mobile = provider.get<MobileDetectionService>("mobileDetection")
joy.render()
alert("Is mobile device: " + mobile.isMobileDevice())
mobile.logEvent()

export default app
