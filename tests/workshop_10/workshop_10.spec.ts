import {test,expect} from '@playwright/test';

test.skip('Interact with elements' ,async({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc/');
    await page.goto('https://demo.playwright.dev/todomvc/');

})

test.skip('Screenshot' ,async({page})=>{
    await page.goto('https://demo.playwright.dev/todomvc/');
    await page.screenshot({path: 'fail.png'})
    await page.goto('https://demo.playwright.dev/todomvc/');

})
test.only('Flaky',async({page})=>{
     await page.goto('https://demo.playwright.dev/todomvc/');

     //page.on('response',(response)=>{
      //  console.log(`Received from :4{response.url()}`)
     //})

     const flaky = Math.random()<0.5;
     if(flaky){
        await page.waitForTimeout(1000);
        await page.click('.non-existing-selector');
     }

})