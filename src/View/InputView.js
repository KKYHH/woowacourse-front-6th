import { Console } from '@woowacourse/mission-utils'
import Validator from '../utils/Validator.js';
import ParseOrders from '../domain/ParseOrders.js';

const InputView = {

    async readDate() {
        try {
            const input = await Console.readLineAsync(`12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n`);
            Validator.dateInput(input);
            return input;
        }
        catch (error) {
            throw new Error(error)
        }
    },

    async orderMenu() {
        try {
            const input = await Console.readLineAsync(`주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n`);
            const orders = ParseOrders.parse(input);
            Validator.menuInput(input);
            Validator.validateDuplicateMenu(orders);
            Validator.validateBeverageOnly(orders);
            orders.forEach(order => Validator.validateMenuItem(order.name));
            orders.forEach(order => Validator.validateOrderCount(order.count));
            return input;

        } catch (error) {
            throw new Error(error)
        }
    }

}

export default InputView;