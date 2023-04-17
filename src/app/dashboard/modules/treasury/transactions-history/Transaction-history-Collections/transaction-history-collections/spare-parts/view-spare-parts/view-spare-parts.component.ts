import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderService } from 'src/app/services/header.service';
import { TransactionHistoryService } from '../../../../transaction-history-services/transaction-history.service';
import * as _ from 'underscore';
import { SparePartPaymentModalComponent } from '../spare-part-payment-modal/spare-part-payment-modal.component';

@Component({
  selector: 'app-view-spare-parts',
  templateUrl: './view-spare-parts.component.html',
  styleUrls: ['./view-spare-parts.component.scss'],
})
export class ViewSparePartsComponent {
  searchText: string = '';
  sort: number = 1;
  totalRecords: number;
  totalRecordsSublet: number;
  pageNoSublet: number = 0;
  paginSublet: number;
  pagesSublet: any[] = [];

  /////
  totalRecordsParts: number;
  pageNoParts: number = 0;
  paginParts: number;
  pagesParts: any[] = [];
  /////
  totalRecordsLabor: number;
  pageNoLabor: number = 0;
  paginLabor: number;
  pagesLabor: any[] = [];
  provideExpenses: any;
  serviceCollectionCenterDetails: any;
  collectionsPayment: any[] = [];
  serviceSalesOrderNo: number;
  search: string;
  nameInitials: any;
  newName: any;
  serviceCenterParts: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private TransactionHistoryService: TransactionHistoryService,
    private modalService: NgbModal,
    public headerService: HeaderService
  ) {}
  collectionId: string;
  ngOnInit(): void {
    this.collectionId = this.route.snapshot.paramMap.get('id');
    this.getSparePartDetails(this.collectionId);
    this.headerService.setTitle(
      'Transactions History > Spare Parts > View Spare Parts Details'
    );
  }

  /**
   * get view details allocation
   */
  oppurtunityId: number;
  getSparePartDetails(collectionId) {
    this.TransactionHistoryService.getSparePartDetails(collectionId).subscribe(
      (response) => {
        console.log(response, 'view details Spare Parts');

        if (response.isSuccess == true) {
          this.serviceCollectionCenterDetails = response.data;
          this.oppurtunityId =
            response?.data?.sparePartsSalesOrderOpportunityNo;
          this.collectionsPayment = response.data.collections;
          this.totalRecords = response?.info?.totalRecordsCount;
          this.serviceSalesOrderNo =
            this.serviceCollectionCenterDetails?.servicesSalesOrderNo;
          this.getServiceCenterParts(this.oppurtunityId);

          this.nameInitials =
            this.serviceCollectionCenterDetails?.customer?.customerName;
          this.newName = this.nameInitials.split(' ');
          console.log(this.newName, 'name');
        }
      }
    );
  }

  //service center parts
  partsList: any;
  partsData: any;
  getServiceCenterParts(id) {
    this.TransactionHistoryService.getSPParts(id, this.pageNoParts).subscribe(
      (response) => {
        this.serviceCenterParts = response;
        console.log(this.serviceCenterParts, 'partssss');
        if (response.isSuccess == true) {
          this.partsData = response;
          this.partsList = response?.data;
          this.totalRecordsParts = response?.info?.totalRecordCount;
          this.paginParts = Math.ceil(this.totalRecordsParts / 2);
          this.pagesParts = _.range(this.paginParts);
        } else {
          this.partsList = [];
        }
      }
    );
  }

  openModalPayment() {
    this.TransactionHistoryService.getSparePartsPaymentDetails(
      this.collectionId
    ).subscribe((response) => {
      console.log(response, 'payment spare');
      if (response.isSuccess == true) {
        const modalRef = this.modalService.open(
          SparePartPaymentModalComponent,
          {
            size: 'lg',
          }
        );
        modalRef.componentInstance.detailsItem = response.data;
        modalRef.componentInstance.collectionId = this.collectionId;
      }
    });
  }

  // parts
  setPageParts(page: number) {
    this.pageNoParts = page;
    // this.getList();
    this.getServiceCenterParts(this.oppurtunityId);
  }
}
