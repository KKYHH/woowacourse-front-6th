import OutputView from "../View/OutputView.js";
import InputView from "../View/InputView.js";

class EventController {

  async inputReservation() {
    try {
      OutputView.printHello();
      const inputDate = await InputView.readDate();
      const orderMenu = await InputView.orderMenu();
      OutputView.printBenefitPreviewConsole(inputDate);
      OutputView.printMenu(orderMenu);
      OutputView.printOriginalOrderTotal(orderMenu);

    } catch (error) {
      throw new Error(error);
    }
  }

  outputReservation() {

  }
}

export default EventController;