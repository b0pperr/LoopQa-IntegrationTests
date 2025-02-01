import type { Locator, Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { BasePage, BasePageAssertions } from "./base.page";

export class KanbanBoardPage extends BasePage {
	readonly expect: KanbanBoardPageAssertions;

	readonly _toDoColumn: Locator;
	readonly _inProgressColumn: Locator;
	readonly _doneColumn: Locator;
	readonly _featureTag: Locator;
	readonly _secondFeatureTag: Locator;
	readonly _highPriorityTag: Locator;
	readonly _bugTag: Locator;
	readonly _designTag: Locator;

	constructor(page: Page) {
		super(page);
		this.expect = new KanbanBoardPageAssertions(this);

		this._toDoColumn = page.getByText("To Do").locator("xpath=ancestor::div[1]");
		this._inProgressColumn = page.getByText("In Progress").locator("xpath=ancestor::div[1]");
		this._doneColumn = page.getByText("Done").locator("xpath=ancestor::div[1]");
		this._featureTag = page.getByText("Feature", { exact: true }).first();
		this._secondFeatureTag = page.getByText("Feature", { exact: true }).nth(1);
		this._highPriorityTag = page.getByText("High Priority", { exact: true }).first();
		this._bugTag = page.getByText("Bug", { exact: true }).first();
		this._designTag = page.getByText("Design", { exact: true }).first();
	}
}

class KanbanBoardPageAssertions extends BasePageAssertions {
	constructor(readonly kanbanBoardPage: KanbanBoardPage) {
		super(kanbanBoardPage);
	}
}
