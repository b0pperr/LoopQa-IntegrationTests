import { defineConfig, devices } from "@playwright/test";
import type { TestOptions } from "./user-setup";
export { expect } from "@playwright/test";

// These credentials are being left plain text for demo purposes. In a real environment, I would have these tokenized in the repo then replaced with the real values within a CI/CD pipeline task.
const useremail = "admin";
const userpassword = "password123";

export default defineConfig<TestOptions>({
	testDir: "./tests",
	fullyParallel: true,
	expect: {
		timeout: 10000,
		toHaveScreenshot: {
			threshold: 20,
			maxDiffPixelRatio: 3,
			maxDiffPixels: 100,
		},
	},
	retries: 1,
	reporter: [
		["list", { printSteps: true }],
		["html", { open: "never" }],
	],

	use: {
		headless: true,
		ignoreHTTPSErrors: true,
		screenshot: "only-on-failure",
		trace: "on-first-retry",
	},

	projects: [
		//
		///
		// Demo Environment
		///
		//
		{
			name: "demo_env",
			use: {
				...devices["Desktop Chrome"],
				// Use prepared auth state.
				storageState: "playwright/.auth/demo_user.json",
				baseURL: "https://animated-gingersnap-8cf7f2.netlify.app/",
			},
			dependencies: ["demo_setup"],
		},
		{ name: "demo_setup", testMatch: "auth.setup.ts", use: { ...devices["Desktop Chrome"], baseURL: "https://animated-gingersnap-8cf7f2.netlify.app/", useremail: useremail, userpassword: userpassword } },
		/*
		//
		///
		////
		// Depending on requirements, additional browsers and devices could be added to this projects section such as Edge for example:
		{
			name: "demo_env_edge",
			use: {
				...devices["Desktop Edge"],
				channel: "msedge",
				// Use prepared auth state.
				storageState: "playwright/.auth/demo_user.json",
				baseURL: "https://animated-gingersnap-8cf7f2.netlify.app/",
			},
			dependencies: ["demo_setup"],
		},
		////
		///
		//
		*/
	],
});
