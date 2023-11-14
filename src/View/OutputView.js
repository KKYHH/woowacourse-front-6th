import { Console } from '@woowacourse/mission-utils'
import ParsePrice from '../domain/ParesPrice.js';
import EventBenefit from '../domain/EventBenefit.js';
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
    },

    printOriginalOrderTotal(orderMenu) {
        Console.print(`\n<할인 전 총주문 금액>`)
        const totalAmount = ParsePrice.calculateTotalPrice(orderMenu);

        Console.print(`${totalAmount}원`);
    },

    printGiftMenu(orderMenu) {
        Console.print(`\n<증정 메뉴>`)
        const totalAmount = ParsePrice.calculateTotalPrice(orderMenu);
        const formattedTotalAmount = Number(totalAmount.replace(/,/g, ''));

        if (formattedTotalAmount > 120000) {
            Console.print('샴페인 1개')
        }

        if (formattedTotalAmount < 120000) {
            Console.print('없음')
        }
    },


    printBenefitList(inputDate) {
        Console.print(`\n<총혜택 금액>`);
        const discountAmount = EventBenefit.christmasDayDiscount(inputDate);
        Console.print(`-${discountAmount}원`);
    }


}

export default OutputView;