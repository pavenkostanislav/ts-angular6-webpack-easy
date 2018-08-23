import { Component } from '@angular/core';
import { AppService } from '../../app-component/app.service';

@Component({
    selector: 'passport-component',
    templateUrl: './passport.component.html',
    styleUrls: ['./passport.component.scss']
})
export class PassportComponent {

	constructor(public sys: AppService) {}
}