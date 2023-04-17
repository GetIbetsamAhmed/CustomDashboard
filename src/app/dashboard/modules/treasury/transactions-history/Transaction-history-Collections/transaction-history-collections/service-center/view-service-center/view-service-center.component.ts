import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderService } from 'src/app/services/header.service';
import { TransactionHistoryService } from '../../../../transaction-history-services/transaction-history.service';
import { ServiceModalPaymentComponent } from '../service-modal-payment/service-modal-payment.component';
import * as _ from 'underscore';

@Component({
  selector: 'app-view-service-center',
  templateUrl: './view-service-center.component.html',
  styleUrls: ['./view-service-center.component.scss'],
})
export class ViewServiceCenterComponent {
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
    this.getServiceCenterDetails(this.collectionId);
    this.headerService.setTitle(
      'Transactions History > Service Center Collection > View Collection Details'
    );
  }

  /**
   * get view details allocation
   */
  getServiceCenterDetails(collectionId) {
    this.TransactionHistoryService.getServiceCenterDetails(
      collectionId
    ).subscribe((response) => {
      console.log(response, 'view details Service Center');

      if (response.isSuccess == true) {
        this.serviceCollectionCenterDetails = response.data;
        this.collectionsPayment = response.data.collections;
        this.totalRecords = response?.info?.totalRecordsCount;
        this.serviceSalesOrderNo =
          this.serviceCollectionCenterDetails?.servicesSalesOrderNo;
        this.getServiceCenterParts(this.serviceSalesOrderNo);
        this.getServiceCenterLabour(this.serviceSalesOrderNo);
        this.getServiceCenterSublet(this.serviceSalesOrderNo);
        this.nameInitials =
          this.serviceCollectionCenterDetails?.customer?.customerName;
        this.newName = this.nameInitials.split(' ');
        console.log(this.newName, 'name');
      }
    });
  }

  //service center parts
  partsList: any;
  partsData: any;
  getServiceCenterParts(id) {
    this.TransactionHistoryService.getServiceCenterParts(
      id,
      this.pageNoParts
    ).subscribe((response) => {
      this.serviceCenterParts = response;
      console.log(this.serviceCenterParts, 'partssss');
      if (response.isSuccess == true) {
        this.partsData = response;
        this.partsList = response?.data;
        this.totalRecordsParts = response?.info?.totalRecordCount;
        this.paginParts = Math.ceil(this.totalRecordsParts / 2);
        this.pagesParts = _.range(this.paginParts);
      }
    });
  }

  //service center labour
  LabourList: any;
  laborData: any;
  getServiceCenterLabour(id) {
    this.TransactionHistoryService.getServiceCenterLabour(
      id,
      this.pageNoLabor
    ).subscribe((response) => {
      console.log(response, 'labours');
      if (response.isSuccess == true) {
        this.laborData = response;
        this.LabourList = response?.data;
        this.totalRecordsLabor = response?.info?.totalRecordCount;
        this.paginLabor = Math.ceil(this.totalRecordsLabor / 2);
        this.pagesLabor = _.range(this.paginLabor);
      }
    });
  }

  //service center sublet
  subletList: any;
  subletData: any;
  getServiceCenterSublet(id) {
    this.TransactionHistoryService.getServiceCenterLabour(
      id,
      this.pageNoSublet
    ).subscribe((response) => {
      console.log(response, 'sublet');
      if (response.isSuccess == true) {
        this.subletData = response;
        this.subletList = response?.data;
        this.totalRecordsSublet = response?.info?.totalRecordCount;
        this.paginSublet = Math.ceil(this.totalRecordsSublet / 2);
        this.pagesSublet = _.range(this.paginSublet);
      }
    });
  }
  openModalPayment() {
    this.TransactionHistoryService.getServiceCenterCollectionPaymentDetails(
      this.collectionId
    ).subscribe((response) => {
      console.log(response, 'payment');
      if (response.isSuccess == true) {
        const modalRef = this.modalService.open(ServiceModalPaymentComponent, {
          size: 'lg',
        });
        modalRef.componentInstance.detailsItem = response.data;
        modalRef.componentInstance.collectionId = this.collectionId;
      }
    });
  }

  /**
   * pagination
   * @param page page no
   */
  setPageSublet(page: number) {
    this.pageNoSublet = page;
    // this.getList();
    this.getServiceCenterSublet(this.serviceSalesOrderNo);
  }
  // parts
  setPageParts(page: number) {
    this.pageNoParts = page;
    // this.getList();
    this.getServiceCenterParts(this.serviceSalesOrderNo);
  }
  //
  labour;
  setPageLabor(page: number) {
    this.pageNoLabor = page;
    // this.getList();
    this.getServiceCenterLabour(this.serviceSalesOrderNo);
  }
}
