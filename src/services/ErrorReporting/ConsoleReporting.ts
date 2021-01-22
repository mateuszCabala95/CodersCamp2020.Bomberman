import ErrorReporting from "./ErrorReporting"

interface ConsoleMessage {
    renderMessage(): string
}

const instanceOfConsoleMessage = (object: any): object is ConsoleMessage => {
    return object.renderMessage() in object
}

type ConsoleMsgType = string | ConsoleMessage

class ConsoleReporting extends ErrorReporting {
    report(error: ConsoleMsgType) {
        if(typeof error === "string") {
            console.error(error)
        } else if (instanceOfConsoleMessage(error)) {
            console.error(error.renderMessage())
        }
    }
}

export default ConsoleReporting
