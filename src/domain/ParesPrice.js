
import ParseOrders from "./ParseOrders.js";

class ParsePrice {
  static calculateTotalPrice(orderMenu) {
    const orders = ParseOrders.parse(orderMenu);
    let totalAmount = 0;

    orders.forEach(order => {
      const menuItem = ParseOrders.findMenuItem(order.name);
      if (menuItem) {
        totalAmount += menuItem.price * order.count;
      }
    });

    return totalAmount.toLocaleString();
  }
}


export default ParsePrice;