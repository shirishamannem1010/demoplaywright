const {test, expect}=require("@playwright/test");
import { LoginPage } from "./pages/loginPage";
import { Recruiting } from "./pages/recruitingPage";
const data =require("./data/data.json");
require('dotenv').config()

test('Demo Test', async({page})=>{
     const loginPage= new LoginPage(page);
   await loginPage.navigateToLogin();
   await page.waitForTimeout(1000)

   await expect (loginPage.userName).toBeEmpty();
   await page.waitForTimeout(1000)

   await loginPage.enterUserName();
   await page.waitForTimeout(1000)

   await loginPage.enterPassword();
   await page.waitForTimeout(1000)

   await expect(loginPage.loginButton).toBeVisible();
   await loginPage.loginBtn();
   await page.waitForTimeout(1000)

   await expect(loginPage.performanceBtn).toHaveText('Performance');
   await loginPage.performanceButton();
   await page.waitForTimeout(1000)


//    await page.waitForTimeout(5000);
//     await loginPage.userName.fill(data.userName);
//     await page.waitForTimeout(3000);
//     await  loginPage.password.fill(data.password);
//     await page.waitForTimeout(3000);
//     await loginPage.loginBtn.click();
//     await page.waitForTimeout(5000);
//     await loginPage.performanceBtn.click();
//     await page.waitForTimeout(5000);
})
test.skip('Recruitment page Test', async({page})=>{
    const loginPage= new LoginPage(page);
    const recruitPage= new Recruiting(page);
    await loginPage.navigateToLogin();
    await loginPage.enterUserName();
    await loginPage.enterPassword();
    await loginPage.loginBtn();
    await recruitPage.recruitingButton();
    await page.waitForTimeout(1000);
    // await expect(recruitPage.jobtitle).toBeVisible();
    await recruitPage.jobTitle();
    await page.waitForTimeout(1000);
    // await recruitPage.Vacancy();
    await recruitPage.hiringManager();


    // const loginPage=new LoginPage(page);
//    await page.waitForTimeout(5000);
    //  await page.locator('//span[text()="Performance"]').click();
//    await loginPage.performanceBtn.click();
//    await page.getByRole('link', { name: 'Performance' }).click();
//    await page.waitForTimeout(5000);
})  
test('Logout', async ({page})=>{
    const loginPage=new LoginPage(page);
    await loginPage.navigateToLogin();
    await expect (loginPage.userName).toBeEmpty();
    await page.waitForTimeout(1000)
    await loginPage.enterUserName();
    await page.waitForTimeout(1000)
    await loginPage.enterPassword();
    await page.waitForTimeout(1000)
    // await expect(loginPage.loginButton).toBeVisible();
    await loginPage.loginBtn();

    await loginPage.logout();

    await page.waitForTimeout(8000)
})


// const {test, expect}=require("@playwright/test");
// import { LoginPage } from "./pages/loginPage";
// test('Demo Test', async({page})=>{
//     const loginPage= new LoginPage();
//    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     await page.waitForTimeout(5000);

//     await  loginPage.emailId.fill("Admin");
// await page.locator('input[name="username"]').fill("Admin");
// await page.waitForTimeout(3000);
// await page.locator('input[name="password"]').fill("admin123");
// await page.waitForTimeout(3000);
// // await page.locator('//button[text()=' Login ']').click();

// await page.locator('//button[text()=" Login "]').click();
// await page.waitForTimeout(5000);
//    // await expect(page).toHaveTitle('Google');
// })
// test('Home page Test', async({page})=>{
//    // await expect(page).toHaveText('Performance');
    
//    // await page.waitForTimeout(10000);
//    // await page.getByRole('link', { name: 'Performance' }).click();
//    await page.waitForTimeout(5000);
//    // await page.locator('//span[text()="Performance"]').click();
// })
// 