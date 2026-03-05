import { $ } from '@wdio/globals';

class MainPage {

    get txtHelloWorld () { 
        return $('-android uiautomator:new UiSelector().text("Hello world!")'); 
    }

    async isWelcomeMessageDisplayed() {
        return await this.txtHelloWorld.isDisplayed();
    }
}

export default new MainPage();