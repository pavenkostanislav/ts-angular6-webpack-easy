import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SysService } from "./services/sys.service";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent
    ],
    exports: [
        AppComponent
    ],
    providers: [SysService],
    bootstrap: [AppComponent]
})
export class AppModule { }