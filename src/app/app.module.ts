import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { NonfoundComponent } from './components/nonfound/nonfound.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserdetailComponent,
    NonfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
