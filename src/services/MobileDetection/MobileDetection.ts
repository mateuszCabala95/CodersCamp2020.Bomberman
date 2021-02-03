import { isMobile } from "mobile-device-detect"

export default class MobileDetectionService {
  isMobileDevice = (): boolean => !!isMobile

  phoneOrientation(): string {
    return screen.orientation.type === "landscape-primary"
      ? "landscape"
      : "portrait"
  }

  logEvent(): void {
    window.addEventListener("orientationchange", () =>
      alert(screen.orientation.type)
    )
  }
}
