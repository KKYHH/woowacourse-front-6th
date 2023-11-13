import { Console } from '@woowacourse/mission-utils'
import InputView from './InputView.js';

const OutputView = {

    printHello() {
        Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다');
    },

    printBenefitPreviewConsole(inputDate) {
        Console.print(`12월 ${inputDate}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);
    },

    printMenu(orderMenu) {
        Console.print(`\n<주문 메뉴>`)
        const printMenuAlignment = orderMenu.split(',');

        printMenuAlignment.forEach(item => {
            const [menu, count] = item.split('-');
            const itemCount = count.trim() === '1' ? '1개' : `${count.trim()}개`;
            Console.print(`${menu.trim()} ${itemCount}`);
        });
    }
}

export default OutputView;