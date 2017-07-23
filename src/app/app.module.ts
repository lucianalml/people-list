import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { routing } from './app.routing';

import { PeopleService } from './services/people.service';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { PeopleDetailComponent } from './components/people/people-detail/people-detail.component';
import { PeopleListItemComponent } from './components/people/people-list-item/people-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PeopleDetailComponent,
    PeopleListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
