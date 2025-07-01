import {test ,expect} from '@playwright/test';
import { channel } from 'diagnostics_channel';

test.only('Automating Form Submissions @githubAction',async({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc/')

    const newTodo = await page.getByPlaceholder('What needs to be done?')
    await newTodo.fill('John doe');
    await newTodo.press('Enter');
    await newTodo.fill('JJ DoE');
    await newTodo.press('Enter');

    const firstToDo = page.getByTestId('todo-item').nth(0);
    await firstToDo.getByRole('checkbox').check()
    const seconToDo = page.getByTestId('todo-item').nth(1);
    await expect(firstToDo).toHaveClass('completed')
    await expect(seconToDo).not.toHaveClass('completed')
})

test('Handling Form @githubAction',async({page})=>{
     await page.goto('https://demo.playwright.dev/todomvc/')
     await page.fill('[placeholder ="What needs to be done?"]','John Doe');
     await page.locator('[placeholder ="What needs to be done?"]').press('Enter');

     const checkbox = await page.locator('.toggle');
     await checkbox.check();


})