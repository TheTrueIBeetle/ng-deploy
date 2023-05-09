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
import { DBTest } from './dbtest/test-component.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { RegistrationFinishComponent } from './registration-finish/registration-finish.component';

@NgModule({
  declarations: [AppComponent, RegistrationComponent, DBTest, MarketplaceComponent, RegistrationFinishComponent],
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

export class AppModule { }