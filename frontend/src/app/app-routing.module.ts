import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile-home/profile-home.component';
import { RegistrationFinishComponent } from './registration/registration-finish/registration-finish.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: RegistrationComponent, title: 'register' },
  { path: 'register', component: RegistrationComponent, title: 'register' },
  { path: 'login', component: LoginComponent, title: 'login' },
  { path: 'profile', component: ProfileComponent, title: 'profile' },
  {
    path: 'registration-finish',
    component: RegistrationFinishComponent,
    title: 'finish account setup',
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent,
    title: 'marketplace',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
