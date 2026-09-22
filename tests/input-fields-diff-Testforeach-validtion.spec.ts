import { test, expect } from '@playwright/test'
import { NavigationPetTypes } from '../page-objects/pet-types';
import { PetTypesModification } from '../page-objects/pet-type-editdelete';


test.describe.serial('Update Pet Type', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('Home page is opened and Welcome message is displayed', async ({ page }) => {
    await expect(page.locator('.title')).toHaveText('Welcome to Petclinic')
  });

  test('Pet Types Link Click', async ({ page }) => {
    const navigateTo = new NavigationPetTypes(page)

    await navigateTo.petTypeLinkNav()
  })

  test('Pet Types Page is Opened and Pet Types Text is showing', async ({ page }) => {

    const navigateTo = new NavigationPetTypes(page)
    const navigateTo1 = new PetTypesModification(page)

    await navigateTo.petTypeLinkNav()

    await expect(navigateTo1.PetTypeHeader).toHaveText('Pet Types')

  })

  test('Check if Edit button is Clickable for Cat PetName', async ({ page }) => {

    const navigateTo = new NavigationPetTypes(page)
    const navigateTo1 = new PetTypesModification(page)

    await navigateTo.petTypeLinkNav()

    await navigateTo1.PetTableBody.waitFor({ state: 'visible' });

    const totalRowNums = await navigateTo1.RowsInPetTableBody.count();

    if (totalRowNums > 0) {

      for (let i = 0; i < totalRowNums; i++) {

        const petName = await navigateTo1.getPetTypeById(i.toString()).inputValue()

        if (petName == 'cat') {

          await navigateTo1.EditButton.nth(i).click();
          break

        }

      }

    }
    else {
      console.log("Please add some Pet Names in the Table")
    }

  })

  test('Edit Pet Type Page is Opened and Edit Pet Type Text is showing', async ({ page }) => {

    const navigateTo = new NavigationPetTypes(page)
    const navigateTo1 = new PetTypesModification(page)

    await navigateTo.petTypeLinkNav()

    await navigateTo1.PetTableBody.waitFor({ state: 'visible' });

    const totalRowNums = await navigateTo1.RowsInPetTableBody.count();

    if (totalRowNums > 0) {

      for (let i = 0; i < totalRowNums; i++) {

        const petName = await navigateTo1.getPetTypeById(i.toString()).inputValue()

        if (petName == 'cat') {

          await navigateTo1.EditButton.nth(i).click();

          await expect(navigateTo1.EditBetTypeText).toHaveText('Edit Pet Type')

          break

        }

      }

    }
    else {
      console.log("Please add some Pet Names in the Table")
    }

  })

  test('Update PetName from Cat to Rabbit and Click Update', async ({ page }) => {

    const navigateTo = new NavigationPetTypes(page)
    const navigateTo1 = new PetTypesModification(page)

    await navigateTo.petTypeLinkNav()

    await navigateTo1.PetTableBody.waitFor({ state: 'visible' });

    const totalRowNums = await navigateTo1.RowsInPetTableBody.count();

    if (totalRowNums > 0) {

      for (let i = 0; i < totalRowNums; i++) {

        const petName = await navigateTo1.getPetTypeById(i.toString()).inputValue()

        if (petName == 'cat') {

          await navigateTo1.EditButton.nth(i).click();

          await page.waitForTimeout(2000);

          await expect(navigateTo1.EditBetTypeText).toHaveText('Edit Pet Type')

          break

        }

      }

    }
    else {
      console.log("Please add some Pet Names in the Table")
    }

    await navigateTo1.UpdatePetNameTextBox.waitFor({ state: 'visible' });

    await page.waitForTimeout(2000);

    await navigateTo1.UpdatePetNameTextBox.click();

    await navigateTo1.UpdatePetNameTextBox.fill('rabbit');

    await page.waitForTimeout(2000);

    await navigateTo1.ClickUpdateButton.click();

    await expect(navigateTo1.PetTypeHeader).toHaveText('Pet Types')

  })

  test('Value of the First textbox is changed to Rabbit', async ({ page }) => {

    const navigateTo = new NavigationPetTypes(page)
    const navigateTo1 = new PetTypesModification(page)

    await navigateTo.petTypeLinkNav()

    await navigateTo1.PetTableBody.waitFor({ state: 'visible' });

    const totalRowNums1 = await navigateTo1.RowsInPetTableBody.count();

    const updatePetname = await navigateTo1.FirstTextBox.inputValue()

    expect(updatePetname).toMatch('rabbit')

    console.log(updatePetname)

  })

  test('Click On Edit for Rabbit and Go to Edit Pet Type page', async ({ page }) => {

    const navigateTo = new NavigationPetTypes(page)
    const navigateTo1 = new PetTypesModification(page)

    await navigateTo.petTypeLinkNav()

    await navigateTo1.PetTableBody.waitFor({ state: 'visible' });

    const totalRowNums = await navigateTo1.RowsInPetTableBody.count();

    if (totalRowNums > 0) {

      for (let i = 0; i < totalRowNums; i++) {

        const petName = await navigateTo1.getPetTypeById(i.toString()).inputValue()

        if (petName == 'rabbit') {

          await navigateTo1.EditButton.nth(i).click();

          await page.waitForTimeout(2000);

          await expect(navigateTo1.EditBetTypeText).toHaveText('Edit Pet Type')

          break

        }

      }

    }
    else {
      console.log("Please add some Pet Names in the Table")
    }


  })

  test('Update PetName from Rabbit to Cat again and Click Update', async ({ page }) => {

    const navigateTo = new NavigationPetTypes(page)
    const navigateTo1 = new PetTypesModification(page)

    await navigateTo.petTypeLinkNav()

    await navigateTo1.PetTableBody.waitFor({ state: 'visible' });

    const totalRowNums = await navigateTo1.RowsInPetTableBody.count();

    if (totalRowNums > 0) {

      for (let i = 0; i < totalRowNums; i++) {

        const petName = await navigateTo1.getPetTypeById(i.toString()).inputValue()

        if (petName == 'rabbit') {

          await navigateTo1.EditButton.nth(i).click();

          await page.waitForTimeout(2000);

          await expect(navigateTo1.EditBetTypeText).toHaveText('Edit Pet Type')

          break

        }

      }

    }
    else {
      console.log("Please add some Pet Names in the Table")
    }

    await navigateTo1.UpdatePetNameTextBox.waitFor({ state: 'visible' });

    await page.waitForTimeout(2000);

    await navigateTo1.UpdatePetNameTextBox.click();

    await navigateTo1.UpdatePetNameTextBox.fill('cat');

    await page.waitForTimeout(2000);

    await navigateTo1.ClickUpdateButton.click();

    await navigateTo1.PetTableBody.waitFor({ state: 'visible' });

    await expect(navigateTo1.PetTypeHeader).toHaveText('Pet Types')

  })

  test('Value of the First Text Box is checked to be cat', async ({ page }) => {

    const navigateTo = new NavigationPetTypes(page)
    const navigateTo1 = new PetTypesModification(page)

    await navigateTo.petTypeLinkNav()

    await navigateTo1.PetTableBody.waitFor({ state: 'visible' });

    const updatePetname = await navigateTo1.FirstTextBox.inputValue()

    expect(updatePetname).toMatch('cat')

    console.log(updatePetname)

  })



})

