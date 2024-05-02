export class ImgValidate{
    constructor(page){
        this.page=page;
        this.img1= page.locator('(//img[@alt="LoadRunner logo"])[1]');
        this.carouselBtn= page.locator('//a[text()="Carousels"]');
        this.img2Disable=page.locator('(//img[@class=" sp-no-webp"])[2]');
        this.img2Small= page.locator('(//img[@alt="gear in flow diagram"])[3]')
        this.settingImg= page.locator('(//img[@alt="gear with three options"])[2]')
        this.cloudSmall= page.locator('(//img[@alt="cloud connected devices"])[3]');
        this.cloudImg= page.locator('(//img[@alt="cloud connected devices"])[1]')
    }
    async carousels(){
        await  this.carouselBtn.click();
    }
    async imgdisable(){
    await this.img2Small.click();
    }
    async cloudImgs(){
        await this.cloudSmall.click();
    }
}