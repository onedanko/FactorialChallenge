import Page from './page';

const SELECTORS = {
    HEADER: "//h1[contains(@class,'text-center')]",
    INPUT: "//input[@name='number']",
    CALCULATE_BUTTON:"#getFactorial",
    RESULT: "//p[@id='resultDiv' and contains(text(),'textValue')]"
};

class Factorial extends Page {
    constructor() {
        super(SELECTORS.HEADER);
    }

    get input() {
        return $(SELECTORS.INPUT);
    }

    get calculateButton() {
        return $(SELECTORS.CALCULATE_BUTTON);
    }

    getResult(text) {
        let locator = SELECTORS.RESULT;
        locator = locator.replace('textValue', text);
        return $(locator);
    }
}

export default new Factorial();
