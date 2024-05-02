export class PopUps{
    constructor(page){
        this.page=page;
        this.popupsbtn=page.locator('(//a[@class="wp-block-button__link wp-element-button"])[11]');
        this.alertpopupBtn=page.locator('//b[text()="Alert Popup"]');
        this.confirmpopBtn=page.locator('//b[text()="Confirm Popup"]');
        this.homeLink=page.locator('//a[text()="Home"]');

        this.modalsBtn= page.locator('(//a[@class="wp-block-button__link wp-element-button"])[12]')
        this.simpleModelBtn=page.locator('#simpleModal')
        this.simpleModelClose= page.locator('(//button[@class="pum-close popmake-close"])[2]')
        this.formalModelBtn = page.locator('#formModal');
        this.name = page.locator('#g1051-name');
        this.email = page.locator('#g1051-email');
        this.message= page.locator('#contact-form-comment-g1051-message')
        this.submitformalModel= page.locator('//button[@class="pushbutton-wide"]')
    }
    async popUpButton(){
        await this.popupsbtn.click();
    }
    async alertPopups(){
        await this.alertpopupBtn.click();
    }
    async confirmPopups(){
        await this.confirmpopBtn.click();
        await this.homeLink.click();
    }
    async modelsButton(){
        await this.modalsBtn.click();
    }
    async simpleModelButton(){
        await this.simpleModelBtn.click();
        await this.simpleModelClose.click()
    }
    async formalModelButton(){
        await this.formalModelBtn.click();
    }
    async nameField(){
        await this.name.fill("Shirisha");
    }
    async emailField(){
        await this.email.fill("demo@gmail.com");
    }
    async messageField(){
        await this.message.fill("Hello, How are you Shirisha")
    }
    async submitFormalModel(){
        await this.submitformalModel.click();
    }

}