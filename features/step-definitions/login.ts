import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';
import MainPage from '../pageobjects/main.page';



Given('que el usuario está en la pantalla de inicio de sesión', async () => {
    console.log('Validando pantalla de login...');
});

When('intenta iniciar sesión con {string} y {string}', async (email, password) => {
    await LoginPage.login(email, password);
});

Then('el usuario debería ver la pantalla principal', async () => {
    await expect(LoginPage.btnLogin).not.toBeDisplayed();
    await expect(MainPage.txtHelloWorld).toBeDisplayed();
});