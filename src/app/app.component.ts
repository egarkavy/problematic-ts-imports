import { Component } from '@angular/core';
import { JustService } from 'src/libs/my-lib/src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mytest';

  constructor(justService: JustService) {

  }
}
