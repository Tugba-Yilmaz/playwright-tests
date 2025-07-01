import {test,expect} from '@playwright/test';
 const selectors = {
        firstName: '#firstName',
        age: '#age',
        student: '#isStudent'
    }

test.describe('Variable Declerations and Types',()=>{
   
  test.skip('Declerations and Types',async({page})=>{
    let firstname: string = 'John';
    let age: number= 30;
    let isStudent: boolean =false;
    await page.goto('file:///C:/Users/tuslu/OneDrive/Masa%C3%BCst%C3%BC/playwrightCourse/tests/workshop_7/index.html')

    await page.fill(selectors.firstName, firstname);
    await page.fill(selectors.age, age.toString());
    await page.check('#isStudent');
    await page.click('#applyData')
     
    expect (await page.textContent('#displayFirstName')).toBe(firstname)
    expect(await page.textContent('#displayAge')).toContain(age.toString())
    expect(await page.isChecked('#isStudent')).toBe(true)
  })
})


test.describe('Type Definitions and Interfaces',()=>{

    type User = {
        firstName: string,
        age: number,
        isStudent: boolean,
     };

     let user: User ={
        firstName: 'Hale',
        age:23,
        isStudent:true,
     }

   test.skip('Type Def and Interfaces',async({page})=>{
      await page.goto('file:///C:/Users/tuslu/OneDrive/Masa%C3%BCst%C3%BC/playwrightCourse/tests/workshop_7/index.html')
      await page.fill(selectors.firstName, user.firstName);
      await page.fill(selectors.age, user.age.toString());
      await page.click('#applyData')
      expect (await page.textContent('#displayFirstName')).toBe(user.firstName)
      expect(await page.textContent('#displayAge')).toContain(user.age.toString())
      expect(await page.isChecked('#isStudent')).not.toBe(user.isStudent)

   })

})
