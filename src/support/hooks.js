import { Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from '@playwright/test';
import LoginPage from "../pages/adactin.login.js";
setDefaultTimeout(30000);

Before(async function () {

    // initializing the variables

    this.browser = null;
    this.context = null;
    this.page = null;
    this.loginPage = null;

    // Creating the instances

    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    // Creating the page object
    this.loginPage = new LoginPage(this.page)
});


After(async function () {

    await this.page.close();
    await this.context.close();
    await this.browser.close();
})