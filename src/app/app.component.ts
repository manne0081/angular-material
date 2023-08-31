import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // standalone: true,
    // imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})

export class AppComponent {
 	  title = 'angular-material';
}
