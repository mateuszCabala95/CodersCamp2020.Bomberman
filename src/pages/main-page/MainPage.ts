import "./main-page.scss"

export default class MainPage{


  render = ():void => {
    const body = document.querySelector("body")
    body!.innerHTML = "<p>Hello Word</p>"
  }

}
