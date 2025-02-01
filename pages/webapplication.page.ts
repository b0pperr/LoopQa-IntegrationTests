import type { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { BasePage, BasePageAssertions } from "./base.page";

export class WebApplicationPage extends BasePage {
	readonly expect: WebApplicationPageAssertions;

	readonly _webApplicationPageHeading: Locator;
	readonly _implementUserAuthTask: Locator;
	readonly _implementUserAuthTaskDiv: Locator;
	readonly _fixNavigationBugTask: Locator;
	readonly _fixNavigationBugTaskDiv: Locator;
	readonly _designSytemUpdatesTask: Locator;
	readonly _designSytemUpdatesTaskDiv: Locator;

	constructor(page: Page) {
		super(page);
		this.expect = new WebApplicationPageAssertions(this);

		this._webApplicationPageHeading = page.getByRole("banner").getByRole("heading", { name: "Web Application" });
		this._implementUserAuthTask = page.getByRole("heading", { name: "Implement user authentication" });
		this._implementUserAuthTaskDiv = page.getByRole("heading", { name: "Implement user authentication" }).locator("xpath=ancestor::div[1]");
		this._fixNavigationBugTask = page.getByRole("heading", { name: "Fix navigation bug" });
		this._fixNavigationBugTaskDiv = page.getByRole("heading", { name: "Fix navigation bug" }).locator("xpath=ancestor::div[1]");
		this._designSytemUpdatesTask = page.getByRole("heading", { name: "Design system updates" });
		this._designSytemUpdatesTaskDiv = page.getByRole("heading", { name: "Design system updates" }).locator("xpath=ancestor::div[1]");
	}
}

class WebApplicationPageAssertions extends BasePageAssertions {
	constructor(readonly webApplicationPage: WebApplicationPage) {
		super(webApplicationPage);
	}

	async toBeOnWebApplicationPage(): Promise<void> {
		await expect(this.webApplicationPage._webApplicationPageHeading, "Verifying user is on the web application page").toBeVisible();
	}
}
