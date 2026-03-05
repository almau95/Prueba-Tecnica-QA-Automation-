import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputEmail () {
        return $('id:com.sourcey.materialloginexample:id/input_email');
    }
    public get inputPassword () {
        return $('id:com.sourcey.materialloginexample:id/input_password');
    }
    public get btnLogin () {
        return $('id:com.sourcey.materialloginexample:id/btn_login');
    }
    public get linkSignup () { 
        return $('id:com.sourcey.materialloginexample:id/link_signup'); 
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (email: string, password: string) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    public async goToSignup () {
        await this.linkSignup.click();
    }
}

export default new LoginPage();
