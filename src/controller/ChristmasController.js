import OutputView from "../View/OutputView.js";
import InputView from "../View/InputView.js";
class ChristmasController {


  async startReservation() {
    try {
      OutputView.printHello();

      const inputDate = await InputView.readDate();
      const orderMenu = await InputView.orderMenu();

      OutputView.printBenefitPreviewConsole(inputDate);
      OutputView.printMenu(orderMenu);

    } catch (error) {
      throw new Error(error);
    }
  }

}

export default ChristmasController;