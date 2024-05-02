export class Calender{
    constructor(page){
        this.page=page;
        this.calenderButton=page.locator('(//a[@class="wp-block-button__link wp-element-button"])[7]')
        this.selectDates=page.locator('#g1065-selectorenteradate');
        this.nextClick=page.locator('//a[@data-handler="next"]');
        this.currentMonth=page.locator('//span[text()="October"]');
        this.date27=page.locator('//a[@data-date="27"]')
        this.submitBtn= page.locator('(//button[@class="pushbutton-wide"])[1]')
    }
    async calenderBtn(){
        await this.calenderButton.click();
    }
    async selectDate(){
        await this.selectDates.click();
    }
    async submitDate(){
        await this.date27.click();
        await this.submitBtn.click()
    }

}