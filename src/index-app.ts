import "./index.scss"
import provider from "./services/Provider"
import ConsoleReporting from "./services/ErrorReporting/ConsoleReporting"
import AppResourceProvider from "./services/ResourceProvider"
import MobileDetectionService from "./services/MobileDetection"

const registerDependencyFunc = (): void => {
  provider.provide("errorReporting", new ConsoleReporting())
  provider.provide("resourceProvider", new AppResourceProvider())
  provider.provide("mobileDetection", new MobileDetectionService())
}

const init = (): void => registerDependencyFunc()

export default init()
