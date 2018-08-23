import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
	selector: 'tabs-component',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.scss']

})
export class TabsComponent implements AfterContentInit {

	@ContentChildren(TabComponent)
	tabs: QueryList<TabComponent>;
	_tabs: TabComponent[];

	ngAfterContentInit() {
		// get all active tabs
		let activeTabs = this.tabs.filter((tab) => tab.active);

		// if there is no active tab set, activate the first
		if (activeTabs.length === 0) {
			this.selectTab(this.tabs.toArray()[0]);
		}
	}

	selectTab(tab: TabComponent) {
		if (!tab) {
			return;
		}

		if (tab.disabled) {
			return;
		}

		// deactivate all tabs
		this.tabs.forEach(tab => tab.active = false);
		// activate the tab the user has clicked on.
		tab.active = true;
	}
}
