const data=require("../data/data.json")
export class FormFields{
    constructor(page){
        this.page=page;
        this.automateNowUrl='https://practice-automation.com/';
        this.formFieldsBtn=page.locator('(//a[@class="wp-block-button__link wp-element-button"])[6]');
        this.nameField=page.locator('(//input[@class="name  grunion-field"])[1]');
        this.favoriteDrink=page.locator('(//input[@name="g1103-whatisyourfavoritedrink[]"])[1]');
        this.favoriteColor=page.locator('input[value="Yellow"]');
        this.haveSiblings=page.locator('//span[@class="ui-selectmenu-text"]');
        this.selectSibling=page.locator('#ui-id-2');
        this.email=page.locator('#email');
        this.messages=page.locator('#contact-form-comment-message');
        this.submitbtn=page.locator('(//button[@class="pushbutton-wide"])[1]');
        // this.goback=page.locator('//a[text()="Go back"]');
        this.homeLink=page.locator('//a[text()="Home"]');

        this.name="shirisha";
        this.emailId="demo@gmail.com";
        this.message="Hi, How are you?"
    }
    async url(){
        await this.page.goto(this.automateNowUrl);
    }
    async formFields(){
        await this.formFieldsBtn.click();
    }
    async enterName(){
        await this.nameField.fill(this.name);

    }
    async favoriteDrinkCheck(){
        await this.favoriteDrink.check();
    }
    async favoriteColorRadio(){
        await this.favoriteColor.check()
    }
    async siblings(){
        await this.haveSiblings.click();
        await this.selectSibling.click();
    }
    async enterEmailId(){
        await this.email.fill(this.emailId);
    }
    async sendMessage(){
        await this.messages.fill(this.message);
    }
    async submit(){
        await this.submitbtn.click();
        // await this.goback.click();
        await this.homeLink.click();
    }

}





