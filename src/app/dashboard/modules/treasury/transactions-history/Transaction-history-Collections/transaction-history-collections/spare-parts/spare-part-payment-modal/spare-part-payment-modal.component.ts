import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CollectService } from 'src/app/dashboard/modules/cashier/collect/services/collect.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-spare-part-payment-modal',
  templateUrl: './spare-part-payment-modal.component.html',
  styleUrls: ['./spare-part-payment-modal.component.scss'],
})
export class SparePartPaymentModalComponent {
  @Input() detailsItem;
  @Input() collectionId;
  @Output() sendtoLoadData = new EventEmitter();

  formGroup: FormGroup;
  details: any;

  isShow: boolean = true;
  items = [1, 2, 1, 2, 1, 2];
  submitted: boolean = false;
  selected: number;
  isLoading: boolean;
  errorMessage: any;

  constructor(
    private collectService: CollectService,
    public sharedService: SharedService,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    console.log(this.detailsItem, 'details spare');
  }
  chooseTab(val: number) {
    this.selected = val;
  }
}
