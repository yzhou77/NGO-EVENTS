import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyusersComponent } from './myusers/myusers.component';
import { EventsComponent } from './events/events.component';
import { UserviewComponent } from './userview/userview.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent} from './user-delete/user-delete.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventDeleteComponent } from './event-delete/event-delete.component';
import { RegistrationComponent } from './registration/registration.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import { AuthGuard } from './_guards/auth.guard';
import { AuthGuard2 } from './_guards/auth.guard2';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';

const routes: Routes = [{ path:'', redirectTo: '', pathMatch:'full'},
{ path:'login', component: LoginComponent},
{ path:'register', component: RegistComponent},
{ path: 'users', component: MyusersComponent,
children:[
  {path:'add', component: UserAddComponent},
  {path:'edit/:id', component: UserEditComponent},
  {path:'delete/:id',component: UserDeleteComponent}
], 
canActivate: [AuthGuard] 
},
{ path: 'events', component: EventsComponent,
children:[
  {path:'add', component: EventAddComponent},
  {path:'edit/:id', component: EventEditComponent},
  {path:'delete/:id',component: EventDeleteComponent}
],
canActivate: [AuthGuard] 
},
{ path: 'userview', component: UserviewComponent,
 children:[
  {path:'registration/:id', component: RegistrationComponent},
  {path:'details/:id',component:EventDetailsComponent},
  {path:'confirmation/:id',component:ConfirmationComponent}
 ],
 canActivate: [AuthGuard2]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MyusersComponent,
  EventsComponent, UserviewComponent]
