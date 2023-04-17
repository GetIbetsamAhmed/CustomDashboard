import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-spare-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['./visa.component.scss'],
})
export class VisaSpareComponent {
  @Input() detailsItem;

  ngOnInit(): void {
    console.log(this.detailsItem, 'vissa');
  }
}
