import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        AppModule, 
        ServerModule // will expose some tools angular needs to run on the server side
    ],
    bootstrap: [(AppComponent)]
})
export class AppServerModule{}