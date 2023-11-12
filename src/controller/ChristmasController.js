import OutputView from "../View/OutputView.js";
import InputView from "../View/InputView.js";
class ChristmasController {


  startReservation() {
    OutputView.helloChristmas();
    InputView.readDate();

  }

}

export default ChristmasController;