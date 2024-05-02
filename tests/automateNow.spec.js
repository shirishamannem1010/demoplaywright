const {test, expect}=require("@playwright/test");
const data =require("./data/data.json");
const { FormFields} = require("./pages/automateFormFieds");
const{IFrames}=require("./pages/automateiframePage");
const{PopUps}=require("./pages/automatePopUpsPage");
const{Tables}=require("./pages/automateTablePage");
const { Accordions } = require("./pages/automateAccordionspage");
const { ImgValidate } = require("./pages/autoImageValidatePage");
const { Gestures } = require("./pages/automateGesturesPage");
const { Calender } = require("./pages/Calenderpage");
const { WindowOperations } = require("./pages/windowOperationsPage");
require('dotenv').config()

test('automateNow FormFields Test', async({page})=>{
    const formFields= new FormFields(page);
    await formFields.url();
    await formFields.formFields();
    await page.waitForTimeout(1000);
    await formFields.enterName();
    await formFields.favoriteDrinkCheck();
    await formFields.favoriteColorRadio();
    await formFields.siblings();
    await formFields.enterEmailId();
    await formFields.sendMessage();
    await page.waitForTimeout(3000);
    await formFields.submit();
    await page.waitForTimeout(3000);
})

test('Popups Test', async({page})=>{
    const formFields= new FormFields(page);
    await formFields.url();
    const popUps=new PopUps(page);
    await popUps.popUpButton();
    await popUps.alertPopups();
    await page.waitForTimeout(3000)
    page.once('dialog', async (dialog) => {
        console.log('Alert message:', dialog.message());
        await dialog.accept(); // Accept the alert
        // await dialog.dismiss(); // Dismiss the alert
    });
    await popUps.confirmPopups();
    await page.waitForTimeout(3000)
    page.once('dialog', async(dialog)=>{
        console.log('Confirm alert', dialog.message())
        //dismising the dialog 
        await dialog.dismiss()
    })
    await page.waitForTimeout(3000);

    await popUps.modelsButton();
    await popUps.simpleModelButton();
    await popUps.formalModelButton();
    await popUps.nameField();
    await popUps.emailField();
    await popUps.messageField();
    await popUps.submitFormalModel()
    await page.waitForTimeout(5000);
})
test('IFrames Test', async({page})=>{
    const formFields= new FormFields(page);
    const iframes = new IFrames(page);
    await formFields.url();

    // await iframes.iFramesButton();
     
    await iframes.iFrameTwo();
    await page.waitForTimeout(5000);
    await iframes.technicalLink();
    await iframes.about();
    await iframes.events();
    await page.waitForTimeout(3000);
    await iframes.Recording();
    await page.waitForTimeout(3000);
})

test.only('Tables Test', async({page})=>{
    const formFields= new FormFields(page);
    const tables= new Tables(page);
    await formFields.url();
    await tables.tablesBtn();
    // expect (tables.search).toContainText("India");
    await tables.clearSearchText();
    expect (tables.search).toBeEmpty();
    await tables.searchIndia();

})

test('AccordIons Test', async({page})=>{
    const automateNow= new FormFields(page);
    const accordion=new Accordions(page);
    await automateNow.url();
    await accordion.accordions();
    await page.waitForTimeout(5000);
    await accordion.closingText();
})
test("Image Validates", async({page})=>{
    const automateNow= new FormFields(page);
    const imgValidate=new ImgValidate(page);
    await automateNow.url();
    await imgValidate.carousels();
    expect(imgValidate.img1).toBeVisible();
    // expect(imgValidate.img1).toBeFocused();
    // expect(imgValidate.img2Disable).toBeDisabled
    await imgValidate.imgdisable();
    expect (imgValidate.settingImg).toBeVisible();
    await imgValidate.cloudImgs()
    expect(imgValidate.cloudImg).toBeVisible()
    await page.waitForTimeout(3000)
})
test('Gestures Test(Drag and drop)', async({page})=>{
    const automateUrl=new FormFields(page);
    const gestures= new Gestures(page);
    await automateUrl.url();
    await gestures.gestureBtn();
    await page.waitForTimeout(5000);
    //only drag 
    await gestures.onlyDrag();
    await page.waitForTimeout(5000);
    // drag and drop
    await gestures.dragAndDrop();
    await page.waitForTimeout(5000);
})

test('Calender Test(Selecting dates)', async({page})=>{
    const automateNow = new FormFields(page);
    const calender= new Calender(page);
    await automateNow.url();
    await calender.calenderBtn();
    await calender.selectDate();
//   await expect(calender.currentMonth).toBeEditable()
    await page.waitForTimeout(3000);
    // await calender.submitDate()
})
test('Window Operations', async({page})=>{
    const automateNow = new FormFields(page);
    const windowOperations= new WindowOperations(page);
    await automateNow.url();
    await windowOperations.windowOperationsButton();
    await windowOperations.newTab();
    await page.waitForTimeout(5000);
    // await windowOperations.replaceWindow();
    // await windowOperations.newWindow();   
})

// write a method for palindromes to check number is palindrome or not







