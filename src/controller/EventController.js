import OutputView from "../View/OutputView.js";
import InputView from "../View/InputView.js";

class EventController {
  async startReservation() {
    const inputDate = await InputView.readDate();
    const orderMenu = await InputView.orderMenu();
    OutputView.printMenu(inputDate, orderMenu);
    OutputView.printOriginalOrderTotal(orderMenu);
    OutputView.printGiftMenu(orderMenu);
    OutputView.printBenefitList(inputDate, orderMenu);
    OutputView.printTotalbenefit(inputDate, orderMenu);
    OutputView.printFinalPayment(inputDate, orderMenu);
    OutputView.printEventBadges(inputDate, orderMenu);
  }
}

export default EventController;