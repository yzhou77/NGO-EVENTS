import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APIService } from './api.service';
import { MyusersComponent } from './myusers/myusers.component';
import { EventsComponent } from './events/events.component';
import { UserviewComponent } from './userview/userview.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserAddComponent } from './user-add/user-add.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventDeleteComponent } from './event-delete/event-delete.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { RegistrationComponent } from './registration/registration.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import { AuthGuard } from './_guards/auth.guard';
import { AuthGuard2 } from './_guards/auth.guard2';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';


import { HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend


@NgModule({
  declarations: [
    AppComponent,
    MyusersComponent,
    EventsComponent,
    UserviewComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserAddComponent,
    EventAddComponent,
    EventDeleteComponent,
    EventEditComponent,
    RegistrationComponent,
    EventDetailsComponent,
    ConfirmationComponent,
    LoginComponent,
    RegistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [APIService, AuthGuard, AuthGuard2
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
