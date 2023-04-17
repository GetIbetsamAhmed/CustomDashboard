import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-spare-cheque',
  templateUrl: './cheque.component.html',
  styleUrls: ['./cheque.component.scss'],
})
export class ChequeSpareComponent {
  @Input() detailsItem;
  ngOnInit(): void {
    console.log(this.detailsItem, 'cheuqe');
  }
}
