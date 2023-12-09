/*Test Steps:
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created
*/

import { chromium, test } from "@playwright/test";

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
    await page.click("//p[text()='Sales']");
    await page.waitForSelector("//a/span[text()='Leads']");
    await page.click("//a/span[text()='Leads']");
    await page.click('text="New"');
    await page.waitForLoadState('load');
    await page.click("button[name='salutation']");
    await page.waitForSelector("//span[text()='Mr.']");
    await page.click("//span[text()='Ms.']");

    await page.fill("[name='firstName']", "Rathina");
    await page.fill("[name='lastName']", "Sekar");
    await page.fill("[name='Company']", "TCS");
    await page.fill("[name='Title']","Testing Analyst");

    await page.click("//button[text()='Save']");
          
 })