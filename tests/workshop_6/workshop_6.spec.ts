import { test, expect } from '@playwright/test';

const testData = {
    firstName: 'John',
    lastName:'Doe',
    address:'gjj 808 main',
    number:'98989898908'

    
}

test.describe('User Registration Tests',()=>{
    test.beforeEach(async ({page})=>{
        await page.goto('file:///C:/Users/tuslu/OneDrive/Masa%C3%BCst%C3%BC/playwrightCourse/tests/workshop_6/index.html');

    })
   
    test('Register with valid data',async({page})=>{
    

        await page.fill('#firstName', testData.firstName);
        await page.fill('#lastName', testData.lastName);
        await page.fill('#address',testData.address);
        await page.fill('#number',testData.number);
        await page.click('#register'); //button

        const firstNameText = await page.locator('#displayFirstName').textContent();
        const lastNameText = await page.locator('#displayLastName').textContent();
        const addressText = await page.locator('#displayAddress').textContent();
        const numberText = await page.locator('#displayNumber').textContent();
        await page.waitForTimeout(3000);

        await expect (firstNameText).toEqual(testData.firstName);
        await expect (lastNameText).toEqual(testData.lastName);
        await expect(addressText).toEqual(testData.address);   
        await expect (numberText).toEqual(testData.number);

    });

    test('Register with empty fields',async({page})=>{
        await page.fill('#firstName', testData.firstName);
        await page.fill('#lastName', testData.lastName);
        await page.click('#register');
        const error = await page.locator('#error p').textContent();
        expect(error).toBe('Please fill in all fields.')
    })

    test('Register with all empty fields',async ({page})=>{
        await page.click('#register');
        const error = await page.locator('#error p').textContent()
        expect(error).toBe('Please fill in all fields.')
    })

})