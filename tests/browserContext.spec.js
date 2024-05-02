require ('dotenv').config
const{test, chromium} = require('@playwright/test');

test('Browser Context', async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1= await context.newPage();
    const page2= await context.newPage();

    await page1.goto('https://practice-automation.com/');

    await page2.goto('https://letcode.in/test');

})

test.only('handling windows', async()=>{

    const browser = await chromium.launch();
    const context= await  browser.newContext();
    const pageOne= await context.newPage()
    const pageTwo= await context.newPage();

    await pageOne.goto('https://practice-automation.com/');
    // const pagePromise= context.waitForEvent('page');

//    const newpageBTn = await pagePromise;
    await pageOne.locator('//a[text()="About"]').click();
})