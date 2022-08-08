import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
// routes
import { UsersComponent } from './components/users/users.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { NonfoundComponent } from './components/nonfound/nonfound.component';


const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'user/:uuid', component: UserdetailComponent},
  // {path: '**', component: UsersComponent}
  // {path: '**', redirectTo: 'users' }
  {path: '**', component: NonfoundComponent}   // order matters
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
