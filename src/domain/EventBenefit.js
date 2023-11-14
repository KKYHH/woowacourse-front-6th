import DecemberCalendar from "../utils/decemberCalendar.js";
import ParseOrders from "./ParseOrders.js";
import ParsePrice from "./ParesPrice.js";
import menu from "../utils/Menu.js";

class EventBenefit {

  static christmasDayDiscount(inputDate) {
    const currentDate = parseInt(inputDate);
    const christmasDate = 25;

    if (currentDate >= 1 && currentDate <= christmasDate) {
      const discountAmount = (currentDate - 1) * 100 + 1000;
      return discountAmount;
    };
    return 0;
  };

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
      };
    };
    return discountPerItem;
  };


  static weekendDiscount(inputDate, orderMenu) {
    const currentDate = parseInt(inputDate);
    let discountPerItem = 0;

    if (currentDate % 7 === 1 || currentDate % 7 === 2) {
      const orders = ParseOrders.parse(orderMenu);
      const mainMenuItems = menu.main.items.map(item => item.name);

      if (mainMenuItems.some(item => orders.some(order => order.name === item))) {
        discountPerItem = orders
          .filter(order => mainMenuItems.includes(order.name))
          .reduce((acc, order) => acc + order.count, 0) * 2023;
      };
    };
    return discountPerItem;
  };

  static specialDiscount(inputDate) {
    const currentDate = parseInt(inputDate);
    const isStarDay = DecemberCalendar[currentDate]?.hasStar;

    return isStarDay ? 1000 : 0;
  };

  static giveChampagne(orderMenu) {
    const totalAmount = ParsePrice.calculateTotalPrice(orderMenu);
    let giveChampagneBenefit = 0;

    if (Number(totalAmount.replace(/,/g, '')) > 120000) {
      giveChampagneBenefit = 25000
    }
    return giveChampagneBenefit;
  };


  static eventDiscountDuringPeriod(inputDate, orderMenu) {
    const discountChrismasDay = this.christmasDayDiscount(inputDate);
    const discountWeekday = this.weekdayDiscount(inputDate, orderMenu);
    const discountWeekend = this.weekendDiscount(inputDate, orderMenu);
    const isStarDay = this.specialDiscount(inputDate);
    const isChampagne = this.giveChampagne(orderMenu);

    const totalEventDiscount = discountChrismasDay + discountWeekday + discountWeekend + isStarDay + isChampagne;
    return totalEventDiscount;
  };
};

export default EventBenefit;