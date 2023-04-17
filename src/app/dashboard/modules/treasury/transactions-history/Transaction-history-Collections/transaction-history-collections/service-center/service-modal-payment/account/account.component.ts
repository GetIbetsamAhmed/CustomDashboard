import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-service-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountServiceComponent {
  @Input() detailsItem;

  ngOnInit(): void {
    console.log(this.detailsItem, 'cash');
  }
}
