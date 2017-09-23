import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComartComponent } from './comart/comart.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'comart', component: ComartComponent },
    { path: 'wallet', component: WalletComponent },
];

export const Routing = RouterModule.forRoot(routes);