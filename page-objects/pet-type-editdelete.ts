import { Locator, Page } from "@playwright/test";
import { step } from "../helpers/test-step-decorator"

export class PetTypesModification {

    private readonly page: Page
    readonly PetTypeHeader: Locator
    readonly PetTableBody : Locator
    readonly RowsInPetTableBody : Locator
    readonly EditButton : Locator
    readonly EditBetTypeText : Locator
    readonly UpdatePetNameTextBox : Locator
    readonly ClickUpdateButton : Locator
    readonly FirstTextBox : Locator


    constructor(page: Page) {
        this.page = page
        this.PetTypeHeader = page.locator('.container.xd-container h2')
        this.PetTableBody = page.locator('#pettypes tbody')
        this.RowsInPetTableBody = page.locator('#pettypes tbody tr')
        this.EditButton = page.getByRole('button', { name: 'Edit' })
        this.EditBetTypeText = page.locator('.container.xd-container h2')
        this.UpdatePetNameTextBox = page.locator('#name')
        this.ClickUpdateButton = page.getByRole('button', { name: 'Update' })
        this.FirstTextBox = page.locator('[id="0"]')
    }

     getPetTypeById(id: string): Locator {
        return this.page.locator(`[id="${id}"]`);
    }

}