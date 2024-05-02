export class WindowOperations{
    constructor(page){
        this.page=page
        this.windowOperationBtn= page.locator('(//a[@class="wp-block-button__link wp-element-button"])[8]')
        this.newTabBtn = page.locator('//button[@onclick="newTab()"]');
        this.replaceWindowBtn= page.locator('//button[@onclick="newWindowSelf()"]')
        this.newWindowBtn=page.locator('//button[@onclick="newWindow()"]');
   
    }
    async windowOperationsButton(){
        await this.windowOperationBtn.click();
    }
    async newTab(){
        await this.newTabBtn.click();
    }
    async replaceWindow(){
        await this.replaceWindowBtn.click();
    }
    async newWindow(){
        await this.newWindowBtn.click();
    }

}