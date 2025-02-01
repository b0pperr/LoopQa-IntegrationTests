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
