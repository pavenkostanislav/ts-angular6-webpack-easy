import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ControlModule } from '../../components/controls.module';
import { AppService } from "./app.service";
import { LoginModule } from '../login-component/login.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        LoginModule,
        CommonModule,
        NgbModule,
        ControlModule
    ],
    exports: [AppComponent],
    declarations: [AppComponent],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule { }