import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScrumColumnComponent } from './scrum-column/scrum-column.component';
import { ScrumCardComponent } from './scrum-card/scrum-card.component';
import {CardService} from './card.service';
import { NewCardFormComponent } from './new-card-form/new-card-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditCardFormComponent } from './edit-card-form/edit-card-form.component';
import {CardApiService} from './api/card-api.service';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ScrumColumnComponent,
    ScrumCardComponent,
    NewCardFormComponent,
    EditCardFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [CardService, CardApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
