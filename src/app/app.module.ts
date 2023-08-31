import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		MatToolbarModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
