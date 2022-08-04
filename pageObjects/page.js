import { DEFAULT_TIMEOUT } from '../helpers/constants';

export default class Page {
    constructor(selector) {
        this.selector = selector;
    }

    /**
     * Wait for the screen to be visible
     *
     * @param {boolean} isShown
     * @return {boolean}
     **/
    async waitForIsShown(isShown = true) {
        return await $(this.selector).waitForDisplayed(DEFAULT_TIMEOUT, !isShown);
    }

    /**
     * Wait for the element to be displayed
     *
     * @return {boolean}
     **/
    isDisplayed() {
        return $(this.selector).isDisplayed();
    }
}