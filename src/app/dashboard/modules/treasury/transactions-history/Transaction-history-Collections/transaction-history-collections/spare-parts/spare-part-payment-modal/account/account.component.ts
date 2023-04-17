import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-spare-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountSpareComponent {
  @Input() detailsItem;

  ngOnInit(): void {
    console.log(this.detailsItem, 'cash');
  }
}
