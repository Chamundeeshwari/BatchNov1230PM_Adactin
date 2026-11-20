import { Given, When, Then } from "@cucumber/cucumber";

Given('User navigating to the adactin demo application', async function () {
    await this.loginPage.navigateTo();
});