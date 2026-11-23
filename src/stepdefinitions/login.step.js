import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from '@playwright/test'

Given('The user navigates to adactin page', async function() {
   await this.page.goto('https://adactinhotelapp.com/');
});

When('The user enters the valid {string} in the username field', async function(username) {
   await this.loginPage.enterusername(username); // username ah ulla anuppitom
});

When('The user enters the valid {string} in the password field', async function(password) {
    await this.loginPage.enterPassword(password); // password ah ulla anuppitom, small p
});

When('The user clicks the loginButton', async function() {
   await this.loginPage.clickLoginButton(); // Page file la iruka peru thaan
});