/*Assignment: 4 Edit Individuals
Test Steps:
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name 
*/

import { chromium, test, expect } from "@playwright/test";

test("Login to Salesforce with valid credential and Create Lead",async()=>{
    const browser = await chromium.launch({headless:false,channel:"chrome"});
    const browserConext = await browser.newContext();
    const page = await browserConext.newPage();
    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("anuja170289@gmail.com");
    await page.fill("#password","Virus@102");
    await page.click("#Login");
    await page.waitForLoadState('load');
    const pageTitle = await page.title();
    const url = page.url();
    console.log(`Page Title is ${pageTitle} and Page URL is ${url}`);
    await page.click("div.slds-icon-waffle");
    await page.click("text=View All");
    await page.click("//p[text()='Individuals']");
    await page.waitForSelector("(//span[text()='Individuals'])[1]");


    await page.fill("input[name='Individual-search-input']", 'Meepaharan');
    await page.click("input[name='Individual-search-input']");
    await page.waitForLoadState('domcontentloaded');

    await page.click("span div[class^='forceVirtualActionMarker'] span");
    await page.click("span div[class^='forceVirtualActionMarker'] span");
    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState('domcontentloaded');
    await page.click("a[title='Edit']");
    await page.waitForLoadState('domcontentloaded');


    await page.locator("div[class^='salutation'] div.uiPopupTrigger a[role='button']").click();
    await page.getByTitle('Mr.').click();

    await page.getByPlaceholder("First Name").fill("Anuja");

    await page.click("button[title='Save']");
    const fName = page.locator("a[title='Anuja Meepaharan']");
    await expect(fName).toContainText('Anuja');
    await page.waitForLoadState('load');

})