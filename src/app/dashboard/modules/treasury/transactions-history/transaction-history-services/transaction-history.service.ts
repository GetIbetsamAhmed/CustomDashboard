import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionHistoryService {
  apiUrl = this.sharedService.getUrl;
  constructor(private http: HttpClient, public sharedService: SharedService) {}

  GetTreasuryExpensesReport(
    searchText: string,
    sort: number,
    pageNo: number,
    lookupId?: number,
    branches?: string,
    registerName?: string,
    registerNo?: string,
    employee?: string
  ): Observable<any> {
    return this.http.get<any>(
      this.apiUrl +
        `PettyCash/GetTreasuryExpensesReport?Search=${searchText}&Sort=${sort}&PageNo=${pageNo}&PageSize=6&ExpenseCategoryId=${
          lookupId ? lookupId : ''
        }&Branches=${branches}&RegisterName=${registerName}&RegisterId=${registerNo}&CreatedBy=${employee}`,

      this.sharedService.getHeaders()
    );
  }

  /**
   * get category
   */
  GetCategory(): Observable<any> {
    return this.http.get<any>(
      this.apiUrl + `Lookups/GetLookups?lookupTypeId=12`,

      this.sharedService.getHeaders()
    );
  }

  /**
   * register Name
   */
  GetRegisterName(): Observable<any> {
    return this.http.get<any>(
      this.apiUrl + `Register/GetRegisters?Status=2001`,

      this.sharedService.getHeaders()
    );
  }

  /**
   * Branches
   */
  GetBranches(): Observable<any> {
    return this.http.get<any>(
      this.apiUrl + `Branches/GetBranches?Status=2001&sort=1`,

      this.sharedService.getHeaders()
    );
  }

  /**
   * employees
   */
  GetEmployees(): Observable<any> {
    return this.http.get<any>(
      this.apiUrl + `User/GetUsers?RoleId=1&Status=2001&Invitation=2004`,

      this.sharedService.getHeaders()
    );
  }
  /**
   * get Collected Amount
   */
  getCollectedAmount(): Observable<any> {
    return this.http.get<any>(
      this.apiUrl + `Treasury/GetCollectedAmounts`,

      this.sharedService.getHeaders()
    );
  }
  /**
   * get Direct Payment List
   */

  GetDirectPaymentCollection(
    searchText: string,
    sort: number,
    pageNo: number,
    CustomerSearch?: string,
    branches?: string,
    registerName?: string,
    registerNo?: string,
    employee?: string,
    payments?: string,
    startDate?: string,
    endDate?: string
  ): Observable<any> {
    return this.http.get<any>(
      this.apiUrl +
        `Treasury/GetDirectPaymentCollections?CashCard=${searchText}&Customer=${CustomerSearch}&Sort=${sort}&PageNo=${pageNo}&PageSize=6&CollectionType=${payments}&Branches=${branches}&RegisterName=${registerName}&RegisterId=${registerNo}&CollectedByEmployee=${employee}&CollectionDateFrom=${
          startDate ? startDate : ''
        }&CollectionDateTo=${endDate ? endDate : ''}`,

      this.sharedService.getHeaders()
    );
  }

  // get direct payment details
  getDirectPaymentDetails(id): Observable<any> {
    return this.http.get<any>(
      this.apiUrl +
        `Treasury/GetDirectPaymentCollectionDetails?CollectionId=${id}`,

      this.sharedService.getHeaders()
    );
  }

  // direct payment collection payment details

  getDirectPaymentCollectionPaymentDetails(id): Observable<any> {
    return this.http.get<any>(
      this.apiUrl +
        `Treasury/GetDirectPaymentCollectionPaymentDetails?CollectionId=${id}`,

      this.sharedService.getHeaders()
    );
  }

  /**
   * get Service Collection List
   */

  GetServiceCenterCollection(
    searchText: string,
    sort: number,
    pageNo: number,
    CustomerSearch?: string,
    branches?: string,
    registerName?: string,
    registerNo?: string,
    employee?: string,
    payments?: string,
    startDate?: string,
    endDate?: string
  ): Observable<any> {
    return this.http.get<any>(
      this.apiUrl +
        `Treasury/GetServicesCollections?CashCard=${searchText}&Customer=${CustomerSearch}&Sort=${sort}&PageNo=${pageNo}&PageSize=6&CollectionType=${payments}&Branches=${branches}&RegisterName=${registerName}&RegisterId=${registerNo}&CollectedByEmployee=${employee}&CollectionDateFrom=${
          startDate ? startDate : ''
        }&CollectionDateTo=${endDate ? endDate : ''}`,

      this.sharedService.getHeaders()
    );
  }

  // get direct payment details
  getServiceCenterDetails(id): Observable<any> {
    return this.http.get<any>(
      this.apiUrl + `Treasury/GetServicesCollectionDetails?CollectionId=${id}`,

      this.sharedService.getHeaders()
    );
  }

  //get service center parts

  getServiceCenterParts(id, pageNo): Observable<any> {
    return this.http.get<any>(
      this.apiUrl +
        `SalesOrders/GetServicesSalesOrderSpareparts?servicesSalesOrderNo=${id}&PageNo=${pageNo}&PageSize=2`,

      this.sharedService.getHeaders()
    );
  }

  //get service center labour

  getServiceCenterLabour(id, pageNo): Observable<any> {
    return this.http.get<any>(
      this.apiUrl +
        `SalesOrders/GetServicesSalesOrderLabors?servicesSalesOrderNo=${id}&PageNo=${pageNo}&PageSize=2`,

      this.sharedService.getHeaders()
    );
  }

  //get service center Sublet

  getServiceCenterSublet(id, pageNo): Observable<any> {
    return this.http.get<any>(
      this.apiUrl +
        `SalesOrders/GetServicesSalesOrderSublets?servicesSalesOrderNo=${id}&PageNo=${pageNo}&PageSize=2`,

      this.sharedService.getHeaders()
    );
  }
  //modal API payment
  getServiceCenterCollectionPaymentDetails(id): Observable<any> {
    return this.http.get<any>(
      this.apiUrl + `Treasury/GetServicesCollectionPayments?CollectionId=${id}`,

      this.sharedService.getHeaders()
    );
  }

  ////Spare Parts

  /**
   * get Service Collection List
   */

  GetSparePartsCollection(
    searchText: string,
    sort: number,
    pageNo: number,
    CustomerSearch?: string,
    branches?: string,
    registerName?: string,
    registerNo?: string,
    employee?: string,
    payments?: string,
    startDate?: string,
    endDate?: string
  ): Observable<any> {
    return this.http.get<any>(
      this.apiUrl +
        `Treasury/GetSparePartsCollections?CashCard=${searchText}&Customer=${CustomerSearch}&Sort=${sort}&PageNo=${pageNo}&PageSize=6&CollectionType=${payments}&Branches=${branches}&RegisterName=${registerName}&RegisterId=${registerNo}&CollectedByEmployee=${employee}&CollectionDateFrom=${
          startDate ? startDate : ''
        }&CollectionDateTo=${endDate ? endDate : ''}`,

      this.sharedService.getHeaders()
    );
  }

  // get spare parts details
  getSparePartDetails(id): Observable<any> {
    return this.http.get<any>(
      this.apiUrl +
        `Treasury/GetSparePartscollectionDetails?CollectionId=${id}`,

      this.sharedService.getHeaders()
    );
  }

  //get sapre parts view table

  getSPParts(id, pageNo): Observable<any> {
    return this.http.get<any>(
      this.apiUrl +
        `SalesOrders/GetSparePartsSalesOrderSpareparts?sparePartsSalesOrderOpportunityId=${id}&PageNo=${pageNo}&PageSize=2`,

      this.sharedService.getHeaders()
    );
  }

  //modal API payment
  getSparePartsPaymentDetails(id): Observable<any> {
    return this.http.get<any>(
      this.apiUrl +
        `Treasury/GetSparePartsCollectionPayments?CollectionId=${id}`,

      this.sharedService.getHeaders()
    );
  }
}
