import menu from "../utils/Menu.js";
import Validator from "../utils/Validator.js";

class ParseOrders {

  static parse(input) {
    const orders = input.split(',');
    Validator.validateMenuFormat(input);

    return orders.map(order => {
      const [menuName, count] = order.split('-');

      const menuItem = this.findMenuItem(menuName);
      Validator.validateMenuItem(menuItem, menuName);

      const parsedCount = parseInt(count);
      Validator.validateOrderCount(parsedCount);

      return { name: menuName, count: parsedCount };
    });
  }

  static findMenuItem(menuName) {
    const foundItem = Object.values(menu).flatMap(category => category.items)
      .find(item => item.name === menuName);

    return foundItem || null;
  }


}

export default ParseOrders;
