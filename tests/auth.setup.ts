import { LoginPage } from "../pages/login.page";
import { WebApplicationPage } from "../pages/webapplication.page";
import { test as setup } from "../user-setup";
import path from "path";

const demo_env_AuthFile = path.join(__dirname, "../playwright/.auth/demo_user.json");

let loginPage: LoginPage;
let webApplicationPage: WebApplicationPage;

setup(`authenticate`, async ({ useremail, userpassword, page, baseURL }) => {
	loginPage = new LoginPage(page);
	webApplicationPage = new WebApplicationPage(page);

	await loginPage.navigateTo(baseURL);
	await loginPage.expect.toBeOnLoginPage();
	await loginPage.login(useremail, userpassword);
	await webApplicationPage.expect.toBeOnWebApplicationPage();

	await page.context().storageState({ path: demo_env_AuthFile });
});
