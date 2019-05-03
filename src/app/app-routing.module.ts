import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  //{ path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  //{ path: 'category', loadChildren: './pages/category/category.module#CategoryPageModule' },
  //{ path: 'help', loadChildren: './pages/help/help.module#HelpPageModule' },
  //{ path: 'account', loadChildren: './pages/account/account.module#AccountPageModule' },
  //{ path: 'cart', loadChildren: './pages/cart/cart.module#CartPageModule' },
  //{ path: 'home', loadChildren: './home/home.module#HomePageModule' }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }