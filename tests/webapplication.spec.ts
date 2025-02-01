import { test } from "../user-setup";
import { WebApplicationPage } from "../pages/webapplication.page";
import { KanbanBoardPage } from "../pages/kanbanboard.page";

test.describe("LoopQA | Demo", () => {
	let webApplicationPage: WebApplicationPage;
	let kanbanBoardPage: KanbanBoardPage;

	test.beforeEach(async ({ baseURL, page }) => {
		webApplicationPage = new WebApplicationPage(page);
		kanbanBoardPage = new KanbanBoardPage(page);

		await webApplicationPage.navigateTo(baseURL);
		await webApplicationPage.expect.toBeOnWebApplicationPage();
	});

	test("should verify implement user auth task is in the 'to do' column and confirm tags: feature - high priority", { tag: ["@smoke", "@webapplication"] }, async () => {
		await webApplicationPage.expect.childToBeDescendantOfParentDiv(webApplicationPage._implementUserAuthTask, kanbanBoardPage._toDoColumn, "Verifying the Implement User Task is within the To Do column.");
		await webApplicationPage.expect.childToBeDescendantOfParentDiv(kanbanBoardPage._featureTag, webApplicationPage._implementUserAuthTaskDiv, "Verifying the feature tag exists on the Implement User Auth task.");
		await webApplicationPage.expect.childToBeDescendantOfParentDiv(kanbanBoardPage._highPriorityTag, webApplicationPage._implementUserAuthTaskDiv, "Verifying the high priority tag exists on the Implement User Auth task.");
	});

	test("should verify fix navigation bug task is in the 'to do' column and confirm tag: bug", { tag: ["@smoke", "@webapplication"] }, async () => {
		await webApplicationPage.expect.childToBeDescendantOfParentDiv(webApplicationPage._fixNavigationBugTask, kanbanBoardPage._toDoColumn, "Verifying the Fix Navigation Bug task is within the To Do column.");
		await webApplicationPage.expect.childToBeDescendantOfParentDiv(kanbanBoardPage._bugTag, webApplicationPage._fixNavigationBugTaskDiv, "Verifying the bug tag exists on the Fix Navigation Bug task.");
	});

	test("should verify design system updates task is in the 'in progress' column and confirm tag: design", { tag: ["@smoke", "@webapplication"] }, async () => {
		await webApplicationPage.expect.childToBeDescendantOfParentDiv(webApplicationPage._designSytemUpdatesTask, kanbanBoardPage._inProgressColumn, "Verifying the Design System Updates task is within the In Progress column.");
		await webApplicationPage.expect.childToBeDescendantOfParentDiv(kanbanBoardPage._designTag, webApplicationPage._designSytemUpdatesTaskDiv, "Verifying the design tag exists on the Design System Updates task.");
	});
});
