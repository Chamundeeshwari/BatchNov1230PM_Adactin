export default class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(){
        await this.page.goto('https://adactinhotelapp.com/');
        await this.page.waitForTimeout(10000);
    }
}