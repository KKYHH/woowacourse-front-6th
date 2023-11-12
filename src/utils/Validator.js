import { Console } from '@woowacourse/mission-utils'
import InputView from '../View/InputView.js';

class Validator {

  static dateInput(input) {
    if (input < 1 || input > 31 || isNaN(input)) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  }

}

export default Validator;