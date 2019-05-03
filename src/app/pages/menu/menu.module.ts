import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path:'home',
        loadChildren:'../dashboard/dashboard.module#DashboardPageModule'
      },
      {
        path:'account',
        loadChildren:'../account/account.module#AccountPageModule'
      },
      {
        path:'category',
        loadChildren:'../category/category.module#CategoryPageModule'
      },
      {
        path:'help',
        loadChildren:'../help/help.module#HelpPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
