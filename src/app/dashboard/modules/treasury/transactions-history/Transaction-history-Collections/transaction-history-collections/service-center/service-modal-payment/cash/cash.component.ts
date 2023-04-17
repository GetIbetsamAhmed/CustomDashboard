import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.scss'],
})
export class CashServiceComponent {
  @Input() detailsItem;

  ngOnInit(): void {
    console.log(this.detailsItem, 'cash');
  }
}
