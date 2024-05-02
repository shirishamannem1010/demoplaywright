//  export class LoginPage{
//     constructor(page, test){
//         this.page= this.page,
//         this.test= this.test,
//         this.emailId=this.page.locator('input[name="username"]');
//         this.password=this.page.locator('input[name="password"]');
//     }
// }
// loginPage.js
const data =require("../data/data.json");
export class LoginPage {
    constructor(page) {
      this.page = page;
      this.url='https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
      this.userName = page.locator('input[name="username"]');
      this.password = page.locator('input[name="password"]');
      this.loginButton=page.locator('//button[text()=" Login "]');
      this.performanceBtn= page.locator('//span[text()="Performance"]');
      this.clickOnDropDown = page.locator("//span[@class='oxd-userdropdown-tab']");
      this.logoutButton = page.locator("//a[text()='Logout']");
    }
    async navigateToLogin() {
        await this.page.goto(this.url);
    }
    async enterUserName(){
        await this.userName.fill(data.userName);
    }
    async enterPassword(){
        await  this.password.fill(data.password);
        
    }
    async loginBtn(){
        await this.loginButton.click();
    }
    async performanceButton(){
        await this.performanceBtn.click();
    }
    async logout(){
        await this.clickOnDropDown.click();
        await this.logoutButton.click();
    }
    
  }

  

