import { test, expect } from "@playwright/test"
import { NavigationPetTypes } from "../page-objects/pet-types"
import { PetTypesModification } from "../page-objects/pet-type-editdelete"

test('Update PetName to Rabbit and Restore back to Cat after Assertions are Performed', async ({ page }) => {

    const navigateTo = new NavigationPetTypes(page)
    const navigateTo1 = new PetTypesModification(page)

    //Login to PetClinic Application
    await page.goto('/')

    //Assertion to check if Login is successful
    await expect(page.locator('.title')).toHaveText('Welcome to Petclinic')

    //Navigate to Pet Types Link
    await navigateTo.petTypeLinkNav()

    //Assertions to check if Pet Types Test is displaying
    await expect(navigateTo1.PetTypeHeader).toHaveText('Pet Types')

    //Wait for few seconds until Table Body with petname is visible to players
    await navigateTo1.PetTableBody.waitFor({ state: 'visible' });

    //Take the Total Counts to use in Loops
    const totalRowNums = await navigateTo1.RowsInPetTableBody.count();

    if (totalRowNums > 0) {

        for (let i = 0; i < totalRowNums; i++) {

            const petName = await navigateTo1.getPetTypeById(i.toString()).inputValue()

            if (petName == 'cat') {

                //Click on Edit Button where Pet Name is Cat
                await navigateTo1.EditButton.nth(i).click();

                await page.waitForTimeout(2000);

                //Verify if Edit Pet Type Text is showing after navigating to Update Petname page
                await expect(navigateTo1.EditBetTypeText).toHaveText('Edit Pet Type')

                break

            }

        }

    }
    else {
        console.log("Please add some Pet Names in the Table")
    }

    //Assertions to wait until the TextBox is available to Update
    await navigateTo1.UpdatePetNameTextBox.waitFor({ state: 'visible' });

    //Click on the Text Box and Update the Petname to Rabbit, .click() is used because value is changed back to Cat after 1 second
    await navigateTo1.UpdatePetNameTextBox.click();
    await navigateTo1.UpdatePetNameTextBox.fill('rabbit');

    await page.waitForTimeout(2000);

    // Click on Update Button 
    await navigateTo1.ClickUpdateButton.click();

    //Wait until Petname containing table is visible 
    await navigateTo1.PetTableBody.waitFor({ state: 'visible' });

    //Aserting to make sure application waits for some mins to make sure updated name is showing
    await expect(navigateTo1.PetTypeHeader).toHaveText('Pet Types')


    // Taking value of the first box in pet name table and assert if matched with Rabbit
    const updatePetname = await navigateTo1.FirstTextBox.inputValue()

    expect(updatePetname).toMatch('rabbit')

    console.log(updatePetname)

    //Taking Total Rows count and Click on Edit Button where rabbit is updated
    const totalRowNums2 = await navigateTo1.RowsInPetTableBody.count();

    if (totalRowNums2 > 0) {

        for (let k = 0; k < totalRowNums2; k++) {

            const petName = await navigateTo1.getPetTypeById(k.toString()).inputValue()

            if (petName == 'rabbit') {

                //Click on Edit Button
                await navigateTo1.EditButton.nth(k).click();

                //Assertion to check if player moved back to Edit Pet Type page
                await expect(navigateTo1.EditBetTypeText).toHaveText('Edit Pet Type')

                break

            }

        }

    }
    else {
        console.log("Please add some Pet Names in the Table")
    }

    //Wait until the Text box is visible
    await navigateTo1.UpdatePetNameTextBox.waitFor({ state: 'visible' });

    await page.waitForTimeout(2000);

    //Click on the Textbox and update the back to cat
    await navigateTo1.UpdatePetNameTextBox.click();
    await navigateTo1.UpdatePetNameTextBox.fill('cat');

    await page.waitForTimeout(2000);

    // Click on Update Button
    await navigateTo1.ClickUpdateButton.click();

    await navigateTo1.PetTableBody.waitFor({ state: 'visible' });

    // Take the value in the first textbox and check if the value is restored back To Cat
    const updatePetname1 = await navigateTo1.FirstTextBox.inputValue()
    expect(updatePetname1).toMatch('cat')

    console.log(updatePetname1)

})