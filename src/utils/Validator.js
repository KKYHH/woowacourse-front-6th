import ParseOrders from "../domain/ParseOrders.js";
import menu from "./Menu.js";
class Validator {

  static dateInput(input) {
    const inputDate = parseInt(input, 10);
    if (isNaN(inputDate) || inputDate < 1 || inputDate > 31) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  }

  // 메뉴 검증

  // 메뉴는 20개 까지
  static menuInput(input) {
    if (this.totalItemCount(input) > 20) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  }

  static totalItemCount(input) {
    return ParseOrders.parse(input).reduce((total, order) => total + order.count, 0);
  }

  // 메뉴 입력 형식이 다르면 에러
  static validateMenuFormat(input) {
    const menuFormatRegex = /^([a-zA-Z가-힣]+-\d+)(,([a-zA-Z가-힣]+-\d+))*$/;
    if (!menuFormatRegex.test(input)) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.')
    }
  }

  // 메뉴판에 없는 메뉴입력시 에러
  static validateMenuItem(menuItem) {
    if (!menuItem) {
      throw new Error(`[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`);
    }
  }

  // 메뉴가 1개 이상이 아닐시 에러
  static validateOrderCount(parsedCount) {
    if (isNaN(parsedCount) || parsedCount < 1) {
      throw new Error(`[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`);
    }
  }

  // 중복주문시 에러
  static validateDuplicateMenu(orders) {
    const uniqueMenus = new Set();
    const duplicateMenus = new Set();

    orders.forEach(order => {
      if (uniqueMenus.has(order.name)) {
        duplicateMenus.add(order.name);
      } else {
        uniqueMenus.add(order.name);
      }
    });

    if (duplicateMenus.size > 0) {
      throw new Error(`[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`);
    }
  }

  // 음료만 주문시 에러
  static validateBeverageOnly(orders) {
    const isBeverageOnly = orders.every(order => menu.drink.items.some(item => item.name === order.name));
    const isNonEmpty = orders.length > 0;

    if (isBeverageOnly && isNonEmpty) {
      throw new Error(`[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`);
    }
  }

}

export default Validator