import { Locator, Page } from "@playwright/test";
import { step } from "../helpers/test-step-decorator"

export class NavigationPetTypes {

    private readonly page: Page
    readonly PetTypesLink: Locator


    constructor(page: Page) {
        this.page = page
        this.PetTypesLink = page.getByRole('link', { name: 'Pet Types' })
    }

    @step
    async petTypeLinkNav() {
        await this.PetTypesLink.click()
    }

}