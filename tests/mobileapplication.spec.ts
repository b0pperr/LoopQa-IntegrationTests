import { test } from "../user-setup";
import { MobileApplicationPage } from "../pages/mobileapplication.page";
import { KanbanBoardPage } from "../pages/kanbanboard.page";

test.describe("LoopQA | Demo", () => {
	let mobileApplicationPage: MobileApplicationPage;
	let kanbanBoardPage: KanbanBoardPage;

	test.beforeEach(async ({ baseURL, page }) => {
		mobileApplicationPage = new MobileApplicationPage(page);
		kanbanBoardPage = new KanbanBoardPage(page);

		await mobileApplicationPage.navigateTo(baseURL);
		await mobileApplicationPage.clickMobileApplicationButton();
		await mobileApplicationPage.expect.toBeOnMobileApplicationPage();
	});

	test("should verify push notification system task is in the 'to do' column and confirm tag: feature", { tag: ["@smoke", "@mobileapplication"] }, async () => {
		await mobileApplicationPage.expect.childToBeDescendantOfParentDiv(mobileApplicationPage._pushNotificationSystemTask, kanbanBoardPage._toDoColumn, "Verifying the Implement User Task is within the To Do column.");
		await mobileApplicationPage.expect.childToBeDescendantOfParentDiv(kanbanBoardPage._featureTag, mobileApplicationPage._pushNotificationSystemTaskDiv, "Verifying the feature tag exists on the Implement User Auth task.");
	});

	test("should verify offline mode task is in the 'in progress' column and confirm tags: feature - high priority", { tag: ["@smoke", "@mobileapplication"] }, async () => {
		await mobileApplicationPage.expect.childToBeDescendantOfParentDiv(mobileApplicationPage._offlineModeTask, kanbanBoardPage._inProgressColumn, "Verifying the Offline Mode task is within the In Progress column.");
		await mobileApplicationPage.expect.childToBeDescendantOfParentDiv(kanbanBoardPage._secondFeatureTag, mobileApplicationPage._offlineModeTaskDiv, "Verifying the feature tag exists on the Offline Mode task.");
		await mobileApplicationPage.expect.childToBeDescendantOfParentDiv(kanbanBoardPage._highPriorityTag, mobileApplicationPage._offlineModeTaskDiv, "Verifying the high priority tag exists on the Offline Mode task.");
	});

	test("should verify app icon designs task is in the 'done' column and confirm tag: design", { tag: ["@smoke", "@mobileapplication"] }, async () => {
		await mobileApplicationPage.expect.childToBeDescendantOfParentDiv(mobileApplicationPage._appIconDesignTask, kanbanBoardPage._doneColumn, "Verifying the App Icon Design task is within the Done column.");
		await mobileApplicationPage.expect.childToBeDescendantOfParentDiv(kanbanBoardPage._designTag, mobileApplicationPage._appIconDesignTaskDiv, "Verifying the design tag exists on the App Icon Design task.");
	});
});
