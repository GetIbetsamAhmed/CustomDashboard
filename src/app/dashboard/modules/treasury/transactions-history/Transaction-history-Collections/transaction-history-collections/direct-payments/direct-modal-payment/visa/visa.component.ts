import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.scss'],
})
export class VisaComponent {
  @Input() detailsItem;

  ngOnInit(): void {
    console.log(this.detailsItem, 'vissa');
  }
}
