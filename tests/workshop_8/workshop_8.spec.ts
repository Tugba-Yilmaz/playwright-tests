import {test ,expect} from '@playwright/test'
import { PageObject } from './page/Page'

test.describe('Sample Test', ()=>{
    let pageObject: PageObject;

    test.beforeEach(async ({browser})=>{
        const page = await browser.newPage()
        pageObject = new PageObject(page);
        await pageObject.open('file:///C:/Users/tuslu/OneDrive/Masa%C3%BCst%C3%BC/playwrightCourse/tests/workshop_8/index.html')
    })

    test.only('Test 1: Fill all inputs',async({page})=>{
        await pageObject.fillFirstName('John');
        await pageObject.fillAge('23');
        await pageObject.checkISStudent();
        await pageObject.applyData();


        expect(await pageObject.text(pageObject.displayFirstName)).toBe('John')
        expect(await pageObject.text(pageObject.displayAge)).toBe('23');
        expect(await pageObject.text(pageObject.displayIsStudent)).toBe('Yes')

    })
})