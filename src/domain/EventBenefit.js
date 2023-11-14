import DecemberCalendar from "../utils/decemberCalendar.js";

class EventBenefit {

  static christmasDayDiscount(inputDate) {
    const currentDate = parseInt(inputDate);
    const christmasDate = 25;

    if (currentDate >= 1 && currentDate <= christmasDate) {
      const discountAmount = (currentDate - 1) * 100 + 1000;
      return discountAmount;
    }
  }

  weekdayDiscount() {

  }
  weekendDiscount() {

  }
  specialDiscount() {

  }
  eventDiscountDuringPeriod() {

  }
}

export default EventBenefit;