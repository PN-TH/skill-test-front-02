import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './Pages/user/user.component';
import { UserDetailComponent } from './Pages/user-detail/user-detail.component';


const routes: Routes = [
  { 
    path: '',
    component: UserComponent 
  },  
  {
    path: 'home',
    component: UserComponent 
  },
  {
    path: "user/:id",
    component: UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
