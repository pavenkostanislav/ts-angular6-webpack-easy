import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/views/app-component/app.module';
 
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);