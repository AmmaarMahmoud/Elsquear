import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'user',pathMatch:'full'},
  {
    path: 'user', loadChildren: ()=> import('./usermanagment/usermanagment.module').then(m=>m.UsermanagmentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
