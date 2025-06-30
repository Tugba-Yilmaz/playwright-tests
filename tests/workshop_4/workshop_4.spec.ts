import { test, expect } from '@playwright/test';

test.skip('Handling Alert', async ({ page }) => {
  await page.goto('file:///C:/Users/tuslu/OneDrive/Masa%C3%BCst%C3%BC/playwrightCourse/tests/workshop_4/index.html');
  let alertMessage = ''; 

  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toBe('alert');
    alertMessage = dialog.message();  
  //  await page.waitForTimeout(3000); 
    await dialog.accept();
  });

  await page.click('#show-alert');
  //await page.waitForTimeout(3000); 
 expect(alertMessage).toBe('This is a simple alert.');
});

test.skip('Confirm Alert',async ({page})=>{
   await page.goto('file:///C:/Users/tuslu/OneDrive/Masa%C3%BCst%C3%BC/playwrightCourse/tests/workshop_4/index.html');
   let alertMessage = ''; 
   page.on('dialog',async(dialog)=>{
    alertMessage = dialog.message();
   await  page.waitForTimeout(4000);
    await dialog.dismiss();
   })

   await page.click('#show-confirm');
   expect(alertMessage).toBe('You clicked Cancel.');
   
})

test('Handling POP-UPs',async ({page})=>{
    await page.goto('file:///C:/Users/tuslu/OneDrive/Masa%C3%BCst%C3%BC/playwrightCourse/tests/workshop_4/index.html');
   const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('#open-popup'),
   ]);

   await popup.waitForLoadState();

  /* if(popup.url()==='example url'){

   }
  */
   await popup.close();
})