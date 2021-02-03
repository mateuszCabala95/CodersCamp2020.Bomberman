import "./index.scss"
import provider from "./services/Provider"
import ConsoleReporting from "./services/ErrorReporting/ConsoleReporting"
import AppResourceProvider from "./services/ResourceProvider"
import Router from "./services/Router"
import MobileDetectionService from "./services/MobileDetection"

const registerDependencyFunc = (): void => {
  provider.provide("errorReporting", new ConsoleReporting())
  provider.provide("resourceProvider", new AppResourceProvider())
  provider.provide("router", new Router())
  provider.provide("mobileDetection", new MobileDetectionService())
}

const init = (): void => {
  registerDependencyFunc()
  const router = provider.get<Router>("router")
  router.render()
}

export default init()
