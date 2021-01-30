import ErrorReporting from "./ErrorReporting"

type ReportMsgType = string

export default class ConsoleReporting extends ErrorReporting {
  report(error?: ReportMsgType | Record<string, unknown>): void {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}
