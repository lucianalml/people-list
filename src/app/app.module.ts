import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PeopleService } from './services/people.service';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { PeopleDetailComponent } from './components/people/people-detail/people-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PeopleDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
