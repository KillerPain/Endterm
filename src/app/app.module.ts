import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule, MatButtonModule, MatListModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { PhonesComponent } from './phones/phones.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ContactsListComponent,
    PhonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: [FormComponent]
})
export class AppModule { }
