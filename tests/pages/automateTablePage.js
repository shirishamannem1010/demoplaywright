export class Tables{
    constructor(page){
        this.page=page;
        this.tables=page.locator('(//a[@class="wp-block-button__link wp-element-button"])[3]');
        this.dropdown=page.locator('//select[@name="tablepress-1_length"]');
        this.select50=page.locator('//option[@value="50"]');
        this.search=page.locator('(//input[@type="search"])[1]')
    }
    async tablesBtn(){
        await this.tables.click();
        await this.dropdown.click();
        await this.dropdown.selectOption("50");
        await this.search.fill("Pakistan");
    }
    async clearSearchText(){
        await this.search.clear();
    }
    async   searchIndia(){
        await this.search.fill("India");
    }
}