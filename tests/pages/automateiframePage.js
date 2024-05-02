export class IFrames {
    constructor(page) {
        this.page = page;
        this.iframeBtn = page.locator('(//a[@class="wp-block-button__link wp-element-button"])[16]');
        this.iframe2 = page.frameLocator('#frame1');
        // this.loginBtn=this.iframe1.locator('//button[text()="Login"]');
        // this.emailField=this.iframe1.locator('//input[@class="input-InputIdentityFlowValue form-control"]')
        // this.firstName=this.iframe1.locator('#InputFirstName');
        // this.lastName=this.iframe1.locator('#InputLastName');
        // this.newPassword=this.iframe1.locator('//input[@class="input-password-new form-control is-invalid"]');
        
        
        this.email="shirishamannem20@gmail.com"
        this.firstName="shirisha";
        this.lastName="mannem";
        this.password="Shirisha@"; 

        this.blog=this.iframe2.locator('(//span[text()="Blog"])[1]');
        this.blog2018=this.iframe2.locator('//span[text()="2018"]');
        this.technical=this.iframe2.locator('//span[text()="technical"]')
        this.detectHref=this.iframe2.locator('(//a[text()="How to delete your master branch"])[1]')
        this.nextBtn=this.iframe2.locator('(//a[@class="selenium-button selenium text-uppercase fw-bold"])[2]');
        this.downloadsBtn=this.iframe2.locator('//span[text()="Downloads"]');
        this.aboutLink=this.iframe2.locator('(//a[@class="nav-link dropdown-toggle"])[1]');
        this.event=this.iframe2.locator('//a[text()="Events"]');
        this.learnmore=this.iframe2.locator('(//a[@class="selenium-button selenium text-uppercase fw-bold"])[2]');
        this.letsgo=this.iframe2.locator(`//a[text()="Let's Go!"]`)
        // this.seleniumrecording='//a[@href="https://youtu.be/nT9kzY-q2WA"]';
        this.seleniumrecording=(newTab) => newTab.locator('//a[@href="https://youtu.be/nT9kzY-q2WA"]');
    }
    // async iFramesButton() {
    //     await this.iframeBtn.click();
    //     // await this.iframe1.waitForLoadState('domcontentloaded');
    //     await this.loginBtn.click(); 
    //     // await this.emailField.waitFor({ state: 'visible' });
    //     await this.page.waitForTimeout(5000);
    //     await this.emailField.fill(this.email);
    //     await this.firstName.fill(this.firstName);
    //     await this.lastName.fill(this.lastName);
    //     await this.newPassword.fill(this.password);
    //     // await this.page.waitForTimeout(5000)

    // }
    async iFrameTwo(){
        await this.iframeBtn.click();
        await this.page.evaluate(() => {
            window.scrollBy(0, 200);
        });
        await this.blog.click();
        await this.blog2018.click();
    }
    async technicalLink(){
        await this.technical.click();
        await this.detectHref.click();
        await this.nextBtn.click();
    }
    async downloads(){
        await this.downloadsBtn.click();
    }
    async about(){
        await this.aboutLink.click();
        await this.event.click();
    }
    async events(){
        await this.learnmore.click();
        await this.letsgo.click();
    }
    async Recording() {
        // await this.letsgo.click();
    
        const [newPage] = await Promise.all([

            this.page.waitForEvent('popup'),
    
            this.letsgo.click(),
    
        ]);
        await this.seleniumrecording(newPage).click();
    }
    
}
