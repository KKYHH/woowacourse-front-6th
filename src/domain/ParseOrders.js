import MENU from "../utils/Menu.js";
import Validator from "../utils/Validator.js";

class ParseOrders {

  static parse(input) {
    const orders = input.split(',');

    return orders.map(order => {
      const [menuName, count] = order.split('-');

      const menuItem = this.findMenuItem(menuName);
      Validator.validateMenuItem(menuItem, menuName);

      const parsedCount = parseInt(count);

      return { name: menuName, count: parsedCount };
    });
  }

  static findMenuItem(menuName) {
    const foundItem = Object.values(MENU).flatMap(category => category.items)
      .find(item => item.name === menuName);

    return foundItem || null;
  }
}

export default ParseOrders;
