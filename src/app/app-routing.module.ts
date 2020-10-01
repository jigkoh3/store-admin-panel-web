import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () => import("./dashboard/dashboard.module").then(m=>m.DashboardModule)
  },
  {
    path: "sales",
    loadChildren: () => import("./sale/sale.module").then(m=>m.SaleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
