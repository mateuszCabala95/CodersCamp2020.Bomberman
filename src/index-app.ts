import "./index.scss"
import provider from "./services/Provider"
import ConsoleReporting from "./services/ErrorReporting/ConsoleReporting"
import AppResourceProvider from "./services/ResourceProvider"
<<<<<<< HEAD
import Router from "./services/Router"
=======
import MobileDetectionService from "./services/MobileDetection"
>>>>>>> acad92c (Rebasing conflicts resolved)

const registerDependencyFunc = (): void => {
  provider.provide("errorReporting", new ConsoleReporting())
  provider.provide("resourceProvider", new AppResourceProvider())
<<<<<<< HEAD
  provider.provide("router", new Router())
=======
  provider.provide("mobileDetection", new MobileDetectionService())
>>>>>>> acad92c (Rebasing conflicts resolved)
}

const init = (): void => {
  registerDependencyFunc()
  const router = provider.get<Router>("router")
  router.render()
}

export default init()
