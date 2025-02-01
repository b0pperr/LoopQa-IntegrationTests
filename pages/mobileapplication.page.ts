import type { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { BasePage, BasePageAssertions } from "./base.page";

export class MobileApplicationPage extends BasePage {
	readonly expect: MobileApplicationPageAssertions;

	readonly _mobileApplicationSidePanelButton: Locator;
	readonly _mobileApplicationPageHeading: Locator;
	readonly _pushNotificationSystemTask: Locator;
	readonly _pushNotificationSystemTaskDiv: Locator;
	readonly _offlineModeTask: Locator;
	readonly _offlineModeTaskDiv: Locator;
	readonly _appIconDesignTask: Locator;
	readonly _appIconDesignTaskDiv: Locator;

	constructor(page: Page) {
		super(page);
		this.expect = new MobileApplicationPageAssertions(this);

		this._mobileApplicationSidePanelButton = page.getByRole("button", { name: "Mobile Application Native" });
		this._mobileApplicationPageHeading = page.getByRole("banner").getByRole("heading", { name: "Mobile Application" });
		this._pushNotificationSystemTask = page.getByRole("heading", { name: "Push notification system" });
		this._pushNotificationSystemTaskDiv = page.getByRole("heading", { name: "Push notification system" }).locator("xpath=ancestor::div[1]");
		this._offlineModeTask = page.getByRole("heading", { name: "Offline mode" });
		this._offlineModeTaskDiv = page.getByRole("heading", { name: "Offline mode" }).locator("xpath=ancestor::div[1]");
		this._appIconDesignTask = page.getByRole("heading", { name: "App icon design" });
		this._appIconDesignTaskDiv = page.getByRole("heading", { name: "App icon design" }).locator("xpath=ancestor::div[1]");
	}

	async clickMobileApplicationButton(): Promise<void> {
		await this._mobileApplicationSidePanelButton.click();
		await this.page.waitForLoadState("domcontentloaded");
	}
}

class MobileApplicationPageAssertions extends BasePageAssertions {
	constructor(readonly mobileApplicationPage: MobileApplicationPage) {
		super(mobileApplicationPage);
	}

	async toBeOnMobileApplicationPage(): Promise<void> {
		await expect(this.mobileApplicationPage._mobileApplicationPageHeading, "Verifying user is on the mobile application page").toBeVisible();
	}
}

/*  
await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
await page.getByText('Username').click();
await page.getByRole('textbox', { name: 'Username' }).fill('admin');
await page.getByRole('textbox', { name: 'Username' }).press('Tab');
await page.getByRole('textbox', { name: 'Password' }).fill('password123');
await page.getByRole('textbox', { name: 'Password' }).press('Enter');
await page.getByRole('button', { name: 'Sign in' }).click();
await expect(page.getByText('To Do (2)Implement user')).toBeVisible();
await expect(page.getByRole('heading', { name: 'To Do (2)' })).toBeVisible();
await expect(page.getByRole('heading', { name: 'Implement user authentication' })).toBeVisible();
await expect(page.getByText('Feature').first()).toBeVisible();
await expect(page.getByText('High Priority').first()).toBeVisible();
await expect(page.getByRole('heading', { name: 'Fix navigation bug' })).toBeVisible();
await expect(page.getByText('Fix navigation bugMenu does')).toBeVisible();
await expect(page.getByText('Bug', { exact: true })).toBeVisible();
await expect(page.getByText('In Progress (1)Design system')).toBeVisible();
await expect(page.getByRole('heading', { name: 'In Progress (1)' })).toBeVisible();
await expect(page.getByText('Design system updatesUpdate')).toBeVisible();
await expect(page.getByRole('heading', { name: 'Design system updates' })).toBeVisible();
await expect(page.getByText('Design', { exact: true })).toBeVisible();
await page.getByRole('button', { name: 'Mobile Application Native' }).click();
await page.getByRole('button', { name: 'Mobile Application Native' }).click();
await expect(page.getByRole('banner').getByRole('heading', { name: 'Mobile Application' })).toBeVisible();
await expect(page.getByText('To Do (1)Push notification')).toBeVisible();
await expect(page.getByRole('heading', { name: 'To Do (1)' })).toBeVisible();
await expect(page.getByRole('heading', { name: 'Push notification system' })).toBeVisible();
await expect(page.locator('div').filter({ hasText: /^Feature$/ }).locator('span')).toBeVisible();
await expect(page.getByText('In Progress (1)Offline')).toBeVisible();
await expect(page.getByRole('heading', { name: 'In Progress (1)' })).toBeVisible();
await expect(page.getByRole('heading', { name: 'Offline mode' })).toBeVisible();
await expect(page.getByText('Feature').nth(1)).toBeVisible();
await expect(page.getByText('High Priority')).toBeVisible();
await expect(page.getByText('Done (1)App icon designCreate')).toBeVisible();
await expect(page.getByRole('heading', { name: 'Done (1)' })).toBeVisible();
await expect(page.getByRole('heading', { name: 'App icon design' })).toBeVisible();
await expect(page.getByText('App icon designCreate app')).toBeVisible();
await expect(page.getByText('Design', { exact: true })).toBeVisible();
*/
