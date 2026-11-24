export default class LoginPage {

    constructor(page) {
        this.page = page
        this.username = this.page.locator('//input[@id="username"]')
        this.password = this.page.locator('//input[@id="password"]')
        this.loginbutton = this.page.locator('//input[@id="login"]')
    }

     async navigateTo() {
        await this.page.goto('https://adactinhotelapp.com/');
        await this.page.waitForTimeout(3000);
        
    }
    async enterusername(username) {
        await this.username.fill(username)
    }
    async enterPassword(password) {
        await this.password.fill(password)
    }
    async clickLoginButton() {
        await this.loginbutton.click()
        await this.page.waitForTimeout(3000)
    }
}