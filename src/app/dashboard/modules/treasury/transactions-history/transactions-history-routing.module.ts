import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsHistoryComponent } from './transactions-history.component';
import { ViewDirectPaymentsComponent } from './Transaction-history-Collections/transaction-history-collections/direct-payments/view-direct-payments/view-direct-payments.component';
import { ViewServiceCenterComponent } from './Transaction-history-Collections/transaction-history-collections/service-center/view-service-center/view-service-center.component';
import { ServiceCenterComponent } from './Transaction-history-Collections/transaction-history-collections/service-center/service-center.component';
import { ViewSparePartsComponent } from './Transaction-history-Collections/transaction-history-collections/spare-parts/view-spare-parts/view-spare-parts.component';

const routes: Routes = [
  { path: '', component: TransactionsHistoryComponent },
  { path: 'view-direct-payment/:id', component: ViewDirectPaymentsComponent },
  { path: 'view-service-center/:id', component: ViewServiceCenterComponent },
  { path: 'view-spare-part/:id', component: ViewSparePartsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionsHistoryRoutingModule {}
