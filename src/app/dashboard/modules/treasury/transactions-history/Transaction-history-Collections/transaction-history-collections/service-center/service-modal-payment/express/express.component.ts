import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-service-express',
  templateUrl: './express.component.html',
  styleUrls: ['./express.component.scss'],
})
export class ExpressServiceComponent {
  @Input() detailsItem;

  ngOnInit(): void {
    console.log(this.detailsItem, 'vissa');
  }
}
