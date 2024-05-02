
export class Recruiting{
    constructor(page){
        //span[text()='Recruitment']
        this.page= page,
        this.recruitingbtn=page.locator('//span[text()="Recruitment"]'),
        this.jobtitle=page.locator('(//div[text()="-- Select --"])[1]'),
        this.selectJobTitle=page.locator('//span[text()="Content Specialist"]');
        this.vacancy=page.locator('(//div[text()="-- Select --"])[2]');
        this.selectVacancy=page.locator('//span[text()="Junior Account Assistant"]');



    }

    async recruitingButton(){
        await this.recruitingbtn.click();
    }
    async jobTitle(){
        await this.jobtitle.click();
        await this.selectJobTitle.click();
    }
    async Vacancy(){
        await this.vacancy.click();
        // await expect(this.selectVacancy).toContainText('Account');
        await this.selectVacancy.click();
    }
    async hiringManager(){
        await this.page.getByText('-- Select --').nth(1).click();
        await this.page.getByRole('option', { name: 'Associate IT Manager' }).locator('span').click();
        await this.page.getByText('-- Select --').nth(1).click();
        await this.page.getByRole('option', { name: 'Nithin P' }).click();
        await this.page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
        await this.page.getByText('Shortlisted').click();
    }
}


// await page.getByRole('option', { name: 'AdminD' }).click();
// await page.getByText('-- Select --').first().click();
// await page.getByRole('option', { name: 'Software Engineer' }).locator('span').click();