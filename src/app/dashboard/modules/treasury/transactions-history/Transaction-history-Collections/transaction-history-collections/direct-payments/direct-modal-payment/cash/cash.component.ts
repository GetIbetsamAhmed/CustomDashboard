import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.scss'],
})
export class CashComponent {
  @Input() detailsItem;

  ngOnInit(): void {
    console.log(this.detailsItem, 'cash');
  }
}
