import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from '@playwright/test'

Given('The user navigates to adactin page', async function() {
   await this.loginPage.navigateTo(); 
});

When('The user enters the valid {string} in the username field', async function(username) {
   await this.loginPage.enterusername(username); 
});

When('The user enters the valid {string} in the password field', async function(password) {
    await this.loginPage.enterPassword(password); 
});

When('The user clicks the loginButton', async function() {
   await this.loginPage.clickLoginButton(); 
});
When('The Navigate to the search hotel page', async function () {
   await expect(this.page).toHaveTitle('Adactin.com - Search Hotel')
   await expect(this.page).toHaveURL(/\/SearchHotel/)
});