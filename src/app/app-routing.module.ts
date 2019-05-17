import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'record', loadChildren: './record/record.module#RecordPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'stdmember', loadChildren: './stdmember/stdmember.module#StdmemberPageModule' },
  { path: 'listview', loadChildren: './listview/listview.module#ListviewPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
