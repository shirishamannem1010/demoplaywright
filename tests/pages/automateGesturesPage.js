export class Gestures{
    constructor(page){
        this.page=page;
        this.gestureButton= page.locator('//a[text()="Gestures"]');
        this.moveFrom =page.locator('//div[@id="moveMe"]')
        this.moveTo= page.locator('//div[@style="top: 45px; left: 841px;"]');

        this.dragFrom=page.locator('(//div[@ondrop="drop(event)"])[1]');
        this.dragToElement=page.locator('(//div[@ondrop="drop(event)"])[2]');

    }
    async gestureBtn(){
     await   this.gestureButton.click();
    }
    async onlyDrag(){
        //await this.moveFrom.dragTo(this.moveTo);
        const srcMove=await this.moveFrom.boundingBox();
        // await this.page.mouse.move(srcMove.x+srcMove.width/2, srcMove.y+srcMove.width/2)
        await this.page.mouse.move(400,400);
        await this.page.mouse.down();
    }
    async dragAndDrop(){
        await this.dragFrom.dragTo(this.dragToElement);
    }



}