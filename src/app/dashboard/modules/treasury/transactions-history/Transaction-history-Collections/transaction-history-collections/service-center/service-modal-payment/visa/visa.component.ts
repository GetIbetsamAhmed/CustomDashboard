import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-service-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.scss'],
})
export class VisaServiceComponent {
  @Input() detailsItem;

  ngOnInit(): void {
    console.log(this.detailsItem, 'vissa');
  }
}
