export class Accordions{
    constructor(page){
        this.page=page;
        this.accordionsBtn=page.locator('//a[text()="Accordions"]');
        this.textBtn=page.locator('//summary[@class="wp-block-coblocks-accordion-item__title"]');
        
    }
    async accordions(){
        await this.accordionsBtn.click();
        // for opening the text we are clicking that button
        await this.textBtn.click();
               
    }
    async closingText(){
        //for closing that opened text again clicking same button 
        await this.textBtn.click();
    }
}

