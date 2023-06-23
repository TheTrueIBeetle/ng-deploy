import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatComponentsModule } from './mat-components/mat-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// custom imports
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile-home/profile-home.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { RegistrationFinishComponent } from './registration/registration-finish/registration-finish.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ProfileComponent,
    MarketplaceComponent,
    RegistrationFinishComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
