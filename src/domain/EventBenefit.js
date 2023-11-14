import DecemberCalendar from "../utils/decemberCalendar.js";
import ParseOrders from "./ParseOrders.js";
import menu from "../utils/Menu.js";

class EventBenefit {

  static christmasDayDiscount(inputDate) {
    const currentDate = parseInt(inputDate);
    const christmasDate = 25;

    if (currentDate >= 1 && currentDate <= christmasDate) {
      const discountAmount = (currentDate - 1) * 100 + 1000;
      return discountAmount;
    }
    return 0;
  }

  static weekdayDiscount(inputDate, orderMenu) {
    const currentDate = parseInt(inputDate);
    // const dayOfWeek = DecemberCalendar[currentDate].day;
    let discountPerItem = 0;

    if (currentDate % 7 !== 1 && currentDate % 7 !== 2) {
      const orders = ParseOrders.parse(orderMenu);
      const dessertMenuItems = menu.dessert.items.map(item => item.name);

      if (dessertMenuItems.some(item => orders.some(order => order.name === item))) {
        discountPerItem = orders
          .filter(order => dessertMenuItems.includes(order.name))
          .reduce((acc, order) => acc + order.count, 0) * 2023;
      }
    }
    return discountPerItem;
  }


  weekendDiscount() {

  }
  specialDiscount() {

  }
  eventDiscountDuringPeriod() {

  }
}

export default EventBenefit;