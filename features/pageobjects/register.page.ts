import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputName () {
        return $('id:com.sourcey.materialloginexample:id/input_name');
    }
    public get inputAddress () {
        return $('id:com.sourcey.materialloginexample:id/input_address');
    }
    public get inputEmail () {
        return $('id:com.sourcey.materialloginexample:id/input_email');
    }
    public get inputNumber () {
        return $('-android uiautomator:new UiSelector().className("android.widget.EditText").instance(3)');
    }
    public get inputPassword () {
        return $('id:com.sourcey.materialloginexample:id/input_password');
    }
    public get inputRepeatPassword () {
        return $('id:com.sourcey.materialloginexample:id/input_reEnterPassword');
    }
    public get btnCreate () {
        return $('id:com.sourcey.materialloginexample:id/btn_signup');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async registerUser (name: string, address: string, email: string, number: string, password: string, repeatPassword: string) {
        await this.inputName.setValue(name);
        await this.inputAddress.setValue(address);
        await this.inputEmail.setValue(email);
        await this.inputNumber.click();
        await this.inputNumber.setValue(number);
        await driver.hideKeyboard()
        await this.inputPassword.setValue(password);
        await this.inputRepeatPassword.setValue(repeatPassword);
        await this.btnCreate.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new RegisterPage();
