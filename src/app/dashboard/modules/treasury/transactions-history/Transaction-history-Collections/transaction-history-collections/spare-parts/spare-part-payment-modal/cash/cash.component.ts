import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spare-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.scss'],
})
export class CashSpareComponent {
  @Input() detailsItem;

  ngOnInit(): void {
    console.log(this.detailsItem, 'cash');
  }
}
