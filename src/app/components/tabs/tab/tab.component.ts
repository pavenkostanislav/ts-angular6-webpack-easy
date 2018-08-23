import { Component, Input } from '@angular/core';
@Component({
	selector: 'tab-component',
	templateUrl: './tab.component.html',
	styleUrls: ['./tab.component.scss']
})
export class TabComponent {
	@Input('title') title: string;
	@Input() active: boolean;
	@Input() visible: boolean = true;
	@Input() disabled = false;
}