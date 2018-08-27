import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ControlModule } from '../../components/controls.module';
import { ApiService } from '../../services/api.service';
import { ConfigService } from '../../services/config.service';
import { LoginModule } from '../login-component/login.module';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { AppService } from "./app.service";


@NgModule({
    imports: [
        AppRouting,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        LoginModule,
        CommonModule,
        NgbModule,
        ControlModule,
        HttpModule
    ],
    exports: [AppComponent],
    declarations: [AppComponent],
    providers: [
        ConfigService,
        ApiService,
        AppService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }