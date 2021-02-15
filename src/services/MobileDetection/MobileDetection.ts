import { isMobile } from "mobile-device-detect"

export default class MobileDetectionService {
  isMobileDevice(): boolean {
    return isMobile
  }

  phoneOrientation(): string {
    return screen.orientation.type === "landscape-primary"
      ? "landscape"
      : "portrait"
  }
}
