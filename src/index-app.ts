import "./index.scss"
import provider from "./services/Provider"
import ConsoleReporting from "./services/ErrorReporting/ConsoleReporting"
import AppResourceProvider from "./services/ResourceProvider"
import MainPage from "./pages/mainPage/MainPage"
import Router from "./services/Router"

const registerDependencyFunc = (): void => {
  provider.provide("errorReporting", new ConsoleReporting())
  provider.provide("resourceProvider", new AppResourceProvider())
  provider.provide("mainPage", new MainPage())
  provider.provide("router", new Router())
}

const init = (): void => registerDependencyFunc()

export default init()
