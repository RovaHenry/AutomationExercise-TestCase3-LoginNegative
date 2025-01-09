const {By} = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.loginMenu = By.css("[href='/login']");
        this.emailInput = By.css("[data-qa='login-email']");
        this.passwordInput = By.css("[name='password']");
        this.loginInput = By.css("[data-qa='login-button']");
        this.loginHeader = By.css(".login-form > h2");
        this.incorrectPassword = By.xpath("//p[.='Your email or password is incorrect!']");
    }

    async loginButton() {
        await this.driver.findElement(this.loginMenu).click();
    }

    async login(email, password) {
        await this.driver.findElement(this.emailInput).sendKeys(email);
        await this.driver.findElement(this.passwordInput).sendKeys(password);
        await this.driver.findElement(this.loginInput).click();
    }

    async verifyLoginUpHeader() {
        const title = await this.driver.findElement(this.loginHeader).getText();
        return title;
    }
    async verifyIncorrect() {
        const title = await this.driver.findElement(this.incorrectPassword).getText();
        return title;
    }
}

module.exports = LoginPage;