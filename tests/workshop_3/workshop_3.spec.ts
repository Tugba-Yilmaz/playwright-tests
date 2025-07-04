import {test , expect } from "@playwright/test";

test.skip('Advanced Interactions', async ({page})=>{
    await page.goto('file:///C:/Users/tuslu/OneDrive/Masa%C3%BCst%C3%BC/playwrightCourse/tests/workshop_3/index.html')
    await page.hover('button#hover-me');
    expect(await page.textContent('button#hover-me')).toContain('Text Changed!');

    await page.click('button#context-menu',{button:"right"});
    expect(await page.getByText('Context Menu Appears!').textContent()).toContain('Context Menu Appears!');

    await page.dblclick('button#double-click');
    expect (await page.locator('img').count()).toBe(1);

})

test.skip('Drag and Drop',async ({page})=>{
    await page.goto('file:///C:/Users/tuslu/OneDrive/Masa%C3%BCst%C3%BC/playwrightCourse/tests/workshop_3/index.html')
    
    //await page.dragAndDrop('.drag-source','.drop-target');
    //expect (await page.textContent('.drop-target')).toContain('Success');

    await page.locator('.drag-source').hover();
    await page.mouse.down();
    await page.locator('.drop-target').hover();
    await page.mouse.up();
    expect (await page.textContent('.drop-target')).toContain('Success');


})

test ('Handling iframe' ,async ({page})=>{
     await page.goto('file:///C:/Users/tuslu/OneDrive/Masa%C3%BCst%C3%BC/playwrightCourse/tests/workshop_3/index.html');

    const iframeElement = await page.frame({name:'iframeName'});
    const inputSelector = '#iframe-input';
    if(iframeElement){
        await iframeElement.type(inputSelector,'hello playwright');
        expect(await iframeElement.locator(inputSelector).inputValue()).toContain('hello playwright');
    }else{
        console.error('iframe is not available')
    }
})