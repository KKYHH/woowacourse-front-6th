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

        Console.print(`${totalAmount.toLocaleString()}원`);
    },

    printGiftMenu(orderMenu) {
        Console.print(`\n<증정 메뉴>`)
        const totalAmount = ParsePrice.calculateTotalPrice(orderMenu);
        const formattedTotalAmount = Number(totalAmount);

        if (formattedTotalAmount > 120000) {
            Console.print('샴페인 1개')
        }

        if (formattedTotalAmount < 120000) {
            Console.print('없음')
        }
    },

    printGift(orderMenu) {
        const giveChampagne = EventBenefit.giveChampagne(orderMenu);
        if (giveChampagne !== 0) {
            Console.print(`증정 이벤트: -${giveChampagne.toLocaleString()}원`)
            return true
        }
        return false;
    },

    printBenefitChrismas(inputDate) {
        const christmasDayDiscount = EventBenefit.christmasDayDiscount(inputDate);
        if (christmasDayDiscount !== 0) {
            Console.print(`크리스마스 디데이 할인: -${christmasDayDiscount.toLocaleString()}원`);
            return true
        }
        return false;
    },

    printBenefitWeekday(inputDate, orderMenu) {
        const weekdayDiscount = EventBenefit.weekdayDiscount(inputDate, orderMenu);
        if (weekdayDiscount !== 0) {
            Console.print(`평일 할인: -${weekdayDiscount.toLocaleString()}원`)
            return true
        }
        return false;
    },

    printBenefitWeekend(inputDate, orderMenu) {
        const weekendDiscount = EventBenefit.weekendDiscount(inputDate, orderMenu);
        if (weekendDiscount !== 0) {
            Console.print(`주말 할인: -${weekendDiscount.toLocaleString()}원`)
            return true
        }
        return false;
    },

    printBenfitSpecial(inputDate) {
        const specialDiscount = EventBenefit.specialDiscount(inputDate);
        if (specialDiscount !== 0) {
            Console.print(`특별 할인: -${specialDiscount.toLocaleString()}원`)
            return true
        }
        return false;
    },


    printBenefitList(inputDate, orderMenu) {
        Console.print(`\n<혜택 내역>`);
        const hasBenefit = [
            this.printBenefitChrismas(inputDate),
            this.printBenefitWeekday(inputDate, orderMenu),
            this.printBenefitWeekend(inputDate, orderMenu),
            this.printBenfitSpecial(inputDate),
            this.printGift(orderMenu),
        ].some((benefitExists) => benefitExists);

        if (!hasBenefit) {
            Console.print('없음');
        }
    },

    printTotalbenefit(inputDate, orderMenu) {
        const eventDiscountDuringPeriod = EventBenefit.eventDiscountDuringPeriod(inputDate, orderMenu);
        Console.print(`\n<총혜택 금액>\n-${eventDiscountDuringPeriod.toLocaleString()}원`);
    },

    printFinalPayment(inputDate, orderMenu) {
        const finalpayment = EventBenefit.calculateFinalPayment(inputDate, orderMenu);
        Console.print(`\n<할인 후 예상 결제 금액>\n${finalpayment.toLocaleString()}원`);
    }


}

export default OutputView;