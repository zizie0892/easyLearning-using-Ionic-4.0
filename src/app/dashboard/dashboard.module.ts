import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  FormsModule
} from '@angular/forms';
import {
  Routes,
  RouterModule
} from '@angular/router';

import {
  IonicModule
} from '@ionic/angular';

import {
  DashboardPage
} from './dashboard.page';

const routes: Routes = [{
  path: 'tabs',
  component: DashboardPage,
  children: [
    {
      path:'tab1',
      loadChildren:'../category/category.module#CategoryPageModule'
    },
    {
      path:'tab2',
      loadChildren:'../cart/cart.module#CartPageModule' 
    },
    {
      path:'tab3',
      loadChildren:'../account/account.module#AccountPageModule' 
    }
  ]
},
{
  path:'',
  redirectTo:'tabs/tab1',
  pathMatch:'full'
}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}