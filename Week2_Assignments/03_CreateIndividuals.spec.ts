/*
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name
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
    await page.click("//p[text()='Individuals']");
    await page.waitForSelector("(//span[text()='Individuals'])[1]");
    await page.click("//div[text()='New']");
    await page.waitForLoadState('load');
    await page.fill("input[placeholder='Last Name']","Meepaharan");
    await page.click("//button[@title='Save']/span[text()='Save']");
    //await page.locator("//div/span[contains(text(),'Raji']").isVisible();

    //const IndividualName = "//div/span[contains(text(),'"+'Raji'+"')]";
    //console.log("Actual Locator is : "+IndividualName);

    await page.locator("//div/span[contains(text(),'Meepaharan')]").isVisible();
})

