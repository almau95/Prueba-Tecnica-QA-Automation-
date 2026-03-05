import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';

// Importamos tus Page Objects
import LoginPage from '../pageobjects/login.page';
import RegisterPage from '../pageobjects/register.page';
import MainPage from '../pageobjects/main.page';

Given('selecciona la opción para crear una cuenta', async () => {
    await LoginPage.goToSignup();
});

When('completa el registro con {string} {string} {string} {string} {string} {string}',
    async (name, address, email, mobile, pass, repeatPass) => {
        await RegisterPage.registerUser(name, address, email, mobile, pass, repeatPass);
});

Then('el usuario debería ver que el botón de registro ya no está presente', async () => {
    await expect(RegisterPage.btnCreate).not.toBeDisplayed();
    await MainPage.txtHelloWorld.waitForDisplayed({ 
        timeout: 30000, 
        reverse: false 
    });
    
    await expect(MainPage.txtHelloWorld).toBeDisplayed();
    
});