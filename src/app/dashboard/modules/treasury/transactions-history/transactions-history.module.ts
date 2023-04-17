import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsHistoryComponent } from './transactions-history.component';
import { TransactionsHistoryRoutingModule } from './transactions-history-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransactionHistoryModalComponent } from './transaction-history-modal/transaction-history-modal.component';
import { HistoryModalImageComponent } from './history-modal-image/history-modal-image.component';
import { TransactionHistoryCollectionsComponent } from './Transaction-history-Collections/transaction-history-collections/transaction-history-collections.component';
import { TransactionHistoryExpensesComponent } from './transaction-history-expenses/transaction-history-expenses/transaction-history-expenses.component';
import { DirectPaymentsComponent } from './Transaction-history-Collections/transaction-history-collections/direct-payments/direct-payments.component';
import { ViewDirectPaymentsComponent } from './Transaction-history-Collections/transaction-history-collections/direct-payments/view-direct-payments/view-direct-payments.component';
import { ServiceCenterComponent } from './Transaction-history-Collections/transaction-history-collections/service-center/service-center.component';
import { ViewServiceCenterComponent } from './Transaction-history-Collections/transaction-history-collections/service-center/view-service-center/view-service-center.component';
import { SparePartsComponent } from './Transaction-history-Collections/transaction-history-collections/spare-parts/spare-parts.component';
import { DirectModalPaymentComponent } from './Transaction-history-Collections/transaction-history-collections/direct-payments/direct-modal-payment/direct-modal-payment.component';
import { VisaComponent } from './Transaction-history-Collections/transaction-history-collections/direct-payments/direct-modal-payment/visa/visa.component';
import { MasterComponent } from './Transaction-history-Collections/transaction-history-collections/direct-payments/direct-modal-payment/master/master.component';
import { ExpressComponent } from './Transaction-history-Collections/transaction-history-collections/direct-payments/direct-modal-payment/express/express.component';
import { ChequeComponent } from './Transaction-history-Collections/transaction-history-collections/direct-payments/direct-modal-payment/cheque/cheque.component';
import { AccountComponent } from './Transaction-history-Collections/transaction-history-collections/direct-payments/direct-modal-payment/account/account.component';
import { CashComponent } from './Transaction-history-Collections/transaction-history-collections/direct-payments/direct-modal-payment/cash/cash.component';
import { ServiceModalPaymentComponent } from './Transaction-history-Collections/transaction-history-collections/service-center/service-modal-payment/service-modal-payment.component';
import { VisaServiceComponent } from './Transaction-history-Collections/transaction-history-collections/service-center/service-modal-payment/visa/visa.component';
import { MasterSeriveComponent } from './Transaction-history-Collections/transaction-history-collections/service-center/service-modal-payment/master/master.component';
import { ExpressServiceComponent } from './Transaction-history-Collections/transaction-history-collections/service-center/service-modal-payment/express/express.component';
import { ChequeServiceComponent } from './Transaction-history-Collections/transaction-history-collections/service-center/service-modal-payment/cheque/cheque.component';
import { CashServiceComponent } from './Transaction-history-Collections/transaction-history-collections/service-center/service-modal-payment/cash/cash.component';
import { AccountServiceComponent } from './Transaction-history-Collections/transaction-history-collections/service-center/service-modal-payment/account/account.component';
import { ViewSparePartsComponent } from './Transaction-history-Collections/transaction-history-collections/spare-parts/view-spare-parts/view-spare-parts.component';
import { SparePartPaymentModalComponent } from './Transaction-history-Collections/transaction-history-collections/spare-parts/spare-part-payment-modal/spare-part-payment-modal.component';
import { AccountSpareComponent } from './Transaction-history-Collections/transaction-history-collections/spare-parts/spare-part-payment-modal/account/account.component';
import { CashSpareComponent } from './Transaction-history-Collections/transaction-history-collections/spare-parts/spare-part-payment-modal/cash/cash.component';
import { ChequeSpareComponent } from './Transaction-history-Collections/transaction-history-collections/spare-parts/spare-part-payment-modal/cheque/cheque.component';
import { ExpressSpareComponent } from './Transaction-history-Collections/transaction-history-collections/spare-parts/spare-part-payment-modal/express/express.component';
import { MasterSpareComponent } from './Transaction-history-Collections/transaction-history-collections/spare-parts/spare-part-payment-modal/master/master.component';
import { VisaSpareComponent } from './Transaction-history-Collections/transaction-history-collections/spare-parts/spare-part-payment-modal/visa/visa.component';
// import { AccountServiceComponent } from './Transaction-history-Collections/transaction-history-collections/service-center/service-modal-payment/account/account.component';

@NgModule({
  declarations: [
    TransactionsHistoryComponent,
    TransactionHistoryModalComponent,
    HistoryModalImageComponent,
    TransactionHistoryCollectionsComponent,
    TransactionHistoryExpensesComponent,
    DirectPaymentsComponent,
    ViewDirectPaymentsComponent,
    ServiceCenterComponent,
    ViewServiceCenterComponent,
    SparePartsComponent,
    DirectModalPaymentComponent,
    VisaComponent,
    MasterComponent,
    ExpressComponent,
    ChequeComponent,
    AccountComponent,
    CashComponent,
    ServiceModalPaymentComponent,
    VisaServiceComponent,
    MasterSeriveComponent,
    ExpressServiceComponent,
    ChequeServiceComponent,
    CashServiceComponent,
    AccountServiceComponent,
    ViewSparePartsComponent,
    SparePartPaymentModalComponent,
    VisaSpareComponent,
    MasterSpareComponent,
    ExpressSpareComponent,
    ChequeSpareComponent,
    CashSpareComponent,
    AccountSpareComponent,
    // AccountServiceComponent,
  ],
  imports: [CommonModule, TransactionsHistoryRoutingModule, SharedModule],
})
export class TransactionsHistoryModule {}
