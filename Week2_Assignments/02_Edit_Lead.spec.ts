/*Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/

import {chromium, expect, test} from "@playwright/test";

test("Create Lead",async () => {

    const browser = await chromium.launch({headless:false, channel:"chrome"});
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.waitForLoadState('load');
    await page.getByLabel('Username').fill('Demosalesmanager');
    await page.fill("[name = 'PASSWORD']", 'crmsfa');
    await page.locator(".decorativeSubmit").click();
    await page.waitForLoadState('load');
    await page.getByText("CRM/SFA").click();
    await page.waitForTimeout(10000);
    await page.locator("//a[contains(text(),'Leads')]").click();
    await page.locator("//a[contains(text(),'Create Lead')]").click();
    await page.waitForTimeout(3000);
    await page.fill("#createLeadForm_companyName", "Discover");
    await page.fill("#createLeadForm_firstName", "Amuthananan");
    await page.fill('#createLeadForm_lastName', "Rajanan");
    await page.locator(".smallSubmit").click();
    await page.waitForTimeout(4000);
    let status = (await page.locator("#viewLead_statusId_sp").innerText());
    expect(status).toBe('Assigned');
    await page.getByText("Edit").click();
    await page.locator("#updateLeadForm_companyName").clear();
    await page.fill("#updateLeadForm_companyName", "TCS");
    await page.locator(".smallSubmit").nth(0).click();
    let status1 = (await page.locator("#viewLead_statusId_sp").innerText());
    expect(status).toBe('Assigned');
   
})
