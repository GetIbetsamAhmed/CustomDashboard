import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPayDoneComponent } from 'src/app/dashboard/modules/cashier/collect/modal-payment/modal-pay-done/modal-pay-done.component';
import { CollectService } from 'src/app/dashboard/modules/cashier/collect/services/collect.service';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-direct-modal-payment',
  templateUrl: './direct-modal-payment.component.html',
  styleUrls: ['./direct-modal-payment.component.scss'],
})
export class DirectModalPaymentComponent {
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
    console.log(this.detailsItem, 'details');
  }
  chooseTab(val: number) {
    this.selected = val;
  }
}
