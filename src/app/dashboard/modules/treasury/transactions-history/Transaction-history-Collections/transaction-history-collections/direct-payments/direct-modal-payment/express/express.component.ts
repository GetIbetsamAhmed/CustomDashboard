import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-express',
  templateUrl: './express.component.html',
  styleUrls: ['./express.component.scss'],
})
export class ExpressComponent {
  @Input() detailsItem;

  ngOnInit(): void {
    console.log(this.detailsItem, 'vissa');
  }
}
