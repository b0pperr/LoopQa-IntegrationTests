import type { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { BasePage, BasePageAssertions } from "./base.page";

export class LoginPage extends BasePage {
	readonly expect: LoginPageAssertions;

	readonly _projectBoardLoginHeader: Locator;
	readonly _usernameInput: Locator;
	readonly _passwordInput: Locator;
	readonly _signInButton: Locator;

	constructor(page: Page) {
		super(page);
		this.expect = new LoginPageAssertions(this);

		this._projectBoardLoginHeader = page.getByRole("heading", { name: "Project Board Login" });
		this._usernameInput = page.getByRole("textbox", { name: "Username" });
		this._passwordInput = page.getByRole("textbox", { name: "Password" });
		this._signInButton = page.getByRole("button", { name: "Sign in" });
	}

	async login(username: string, password: string): Promise<void> {
		await this._usernameInput.fill(username);
		await this._passwordInput.fill(password);
		await this._signInButton.click();
	}
}

class LoginPageAssertions extends BasePageAssertions {
	constructor(readonly loginPage: LoginPage) {
		super(loginPage);
	}

	async toBeOnLoginPage(): Promise<void> {
		await expect(this.loginPage._projectBoardLoginHeader, "Verifying user navigates to log in page").toBeVisible();
	}
}

/*

test('test', async ({ page }) => {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  await expect(page.getByRole('heading', { name: 'Project Board Login' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('password123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
  await expect(page.getByRole('banner').getByRole('heading', { name: 'Web Application' })).toBeVisible();
});
*/
