import provider from "../Provider"
import MobileDetectionService from "../MobileDetection"

export default class PhoneOrientationService {
  mobile = provider.get<MobileDetectionService>("mobileDetection")

  async forceLandscape(): Promise<void> {
    window.addEventListener("click", () => {
      if (document.documentElement) {
        document.documentElement.requestFullscreen()
        screen.orientation.lock("landscape-primary")
      }
    })
  }
}
