import type { Page, Locator } from "@playwright/test";
import { expect } from "@playwright/test";

export class BasePage {
	constructor(readonly page: Page) {}

	async navigateTo(path?: string): Promise<void> {
		path ??= "/";
		await this.page.goto("" + path);
		await this.page.waitForLoadState();
	}
}

export class BasePageAssertions {
	constructor(readonly basePage: BasePage) {}

	async childToBeDescendantOfParentDiv(childEl: Locator, parentEl: Locator, testMessage: string) {
		// Ensure the child is visible and exists
		await expect(childEl).toBeVisible();
		await expect(childEl).toBeAttached();

		// Check if the child is a descendant of the parent div
		const parentHandle = await parentEl.elementHandle();

		// Null check for parentHandle
		if (!parentHandle) {
			throw new Error("To Do parent not found.");
		}

		const childHandle = await childEl.elementHandle();

		// Null check for childHandle
		if (!childHandle) {
			throw new Error("Child element not found.");
		}

		// Use a simple parent-child check
		const childElementIsInParentElement = await parentHandle.evaluate((parentEl, childEl) => {
			return parentEl.contains(childEl);
		}, childHandle);

		expect(childElementIsInParentElement, `${testMessage}`).toBe(true);
	}
}
