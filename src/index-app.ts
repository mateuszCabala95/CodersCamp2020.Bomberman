import "./index.scss"
import provider from "./services/Provider"
import ConsoleReporting from "./services/ErrorReporting/ConsoleReporting"
import AppResourceProvider from "./services/ResourceProvider";
import MainPage from "../src/pages/main-page/MainPage"

const registerDependencyFunc = () => {
    provider.provide("errorReporting", new ConsoleReporting())
    provider.provide("resourceProvider", new AppResourceProvider())
    provider.provide("mainPage", new MainPage())
}

const init = (): void => registerDependencyFunc()

export default init()
