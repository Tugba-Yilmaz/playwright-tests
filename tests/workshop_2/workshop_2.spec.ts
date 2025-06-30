import {test, expect} from '@playwright/test';

test.skip('Automatio Form Submissions',async({page})=>{
    await page.goto('http://demo.playwright.dev/todomvc');
    
    const newToDo = await page.getByPlaceholder('What needs to be done?');

    await newToDo.fill('John Doe');
    await newToDo.press('Enter');
    await newToDo.fill('JJ Doe');
    await newToDo.press('Enter');
    await page.waitForTimeout(3000);
    
    const firstToDo = page.getByTestId('todo-item').nth(0);
    await firstToDo.getByRole('checkbox').check();

    const seconToDo = page.getByTestId('todo-item').nth(1);
    await expect(seconToDo).not.toHaveClass('completed');
    await expect(firstToDo).toHaveClass('completed');


})
test.only('Handling Form',async ({page})=>{

    await page.goto('http://demo.playwright.dev/todomvc');
    const placeholder = '[placeholder="What needs to be done?"]';
    await  page.fill(placeholder,'John Doe');
    await page.locator(placeholder).press('Enter');

    const checkbox = await page.locator('.toggle');
    await checkbox.check();

    await page.waitForTimeout(3000);

})