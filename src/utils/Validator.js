import ParseOrders from "../domain/ParseOrders.js";
import menu from "./Menu.js";
class Validator {

  static dateInput(input) {
    if (input < 1 || input > 31 || isNaN(input)) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  }

  // 메뉴 검증

  static menuInput(input) {
    if (this.totalItemCount(input) > 20) {
      throw new Error('[ERROR] 한 번에 최대 20개까지만 주문할 수 있습니다. 다시 입력해 주세요.');
    }
  }

  static totalItemCount(input) {
    return ParseOrders.parse(input).reduce((total, order) => total + order.count, 0);
  }

  static validateMenuFormat(input) {
    const menuFormatRegex = /^([a-zA-Z가-힣]+-\d+)(,([a-zA-Z가-힣]+-\d+))*$/;
    if (!menuFormatRegex.test(input)) {
      throw new Error('[ERROR] 메뉴 입력 형식이 올바르지 않습니다. 다시 입력해 주세요.')
    }
  }

  static validateMenuItem(menuItem) {
    if (!menuItem) {
      throw new Error(`[ERROR] 메뉴에 존재하지 않습니다. 다시 입력해 주세요.`);
    }
  }

  static validateOrderCount(parsedCount) {
    if (isNaN(parsedCount) || parsedCount < 1) {
      throw new Error(`[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`);
    }
  }

  static async validateDuplicateMenu(orders) {
    const uniqueMenus = new Set();

    await Promise.all(orders.map(async (order) => {
      if (uniqueMenus.has(order.name)) {
        throw new Error(`[ERROR] 중복 주문입니다. 다시 입력해 주세요.`);
      }
      uniqueMenus.add(order.name);
    }));
  }

  static validateBeverageOnly(orders) {
    const isBeverageOnly = orders.every(order => menu.drink.items.some(item => item.name === order.name));

    if (isBeverageOnly && orders.length > 0) {
      throw new Error(`[ERROR] 음료만 주문할 수 없습니다. 다시 입력해 주세요.`);
    }
  }



}

export default Validator