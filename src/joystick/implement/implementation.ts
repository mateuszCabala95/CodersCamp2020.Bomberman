import Joystick from "../joystick"
import provider from "../../services/Provider"
import MobileDetectionService from "../../services/MobileDetection/MobileDetection"

export class Implementation {
  private joy: Joystick = new Joystick("joyDiv")
  private mobile: MobileDetectionService = provider.get<MobileDetectionService>(
    "mobileDetection"
  )
  private buttonsColletion = document.getElementsByClassName(
    "player__start"
  ) as HTMLCollectionOf<HTMLButtonElement>
  private buttonsArray = Array.from(this.buttonsColletion)

  showJoystkick() {
    console.log(this.buttonsArray)
    // this.buttonsArray.forEach((element : HTMLButtonElement) => {
    //     console.log(element)
    // })
    // this.button.addEventListener("click", () => {

    // if(this.mobile.isMobileDevice()){
    //     this.joy.render()

    // }
    // })
  }
}
