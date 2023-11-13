import OutputView from "../View/OutputView.js";
import InputView from "../View/InputView.js";
class ChristmasController {


  async startReservation() {
    try {
      OutputView.helloChristmas();
      await InputView.readDate();
      await InputView.orderMenu();
      // console.log(InputView.orderMenu());

    } catch (error) {
      throw new Error(error);
    }
  }

}

export default ChristmasController;