import { test, expect } from '@playwright/test';
test.skip('Open new window and navigate back',async ({context, page})=>{
    await page.goto('file:///C:/Users/tuslu/OneDrive/Masa%C3%BCst%C3%BC/playwrightCourse/tests/workshop_5/index.html');

    const pagePromise = context.waitForEvent('page');
    await page.click('#openNewWindow');
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    console.log(await newPage.title());
    await expect(newPage.getByRole('heading',{name: 'Welcome to the New Page'})).toBeVisible();

});

test.skip("Add Cookie",async ({page})=>{
    await page.goto('file:///C:/Users/tuslu/OneDrive/Masa%C3%BCst%C3%BC/playwrightCourse/tests/workshop_5/index.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('file:///C:/Users/tuslu/OneDrive/Masa%C3%BCst%C3%BC/playwrightCourse/tests/workshop_5/index.html');
    const sessionCookie = cookies.find(cookies => cookies.name === 'session');
    console.log('Session cookie', sessionCookie);
    await expect(sessionCookie).toBeDefined();
})

test.only('Delete cookies',async ({page})=>{
    await page.goto('file:///C:/Users/tuslu/OneDrive/Masa%C3%BCst%C3%BC/playwrightCourse/tests/workshop_5/index.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('file:///C:/Users/tuslu/OneDrive/Masa%C3%BCst%C3%BC/playwrightCourse/tests/workshop_5/index.html');
    const sessionCookie = cookies.find(cookies => cookies.name === 'session');
    console.log('Session cookie', sessionCookie);

    await page.click('#deleteCookie');
    const deletedCookiess = await page.context().cookies('file:///C:/Users/tuslu/OneDrive/Masa%C3%BCst%C3%BC/playwrightCourse/tests/workshop_5/index.html');
    const deletedSessionCookie = deletedCookiess.find(cookies => cookies.name === 'session');
    console.log('Session cookie', deletedSessionCookie);
    await expect (deletedSessionCookie).toBeUndefined();

})