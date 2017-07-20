import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { People } from '../people';

import { environment } from '../../environments/environment';

@Injectable()
export class PeopleService {

  private people: People[] = [];

  constructor(private http: Http) { }

  getPeople() {
    return this.http.get(environment.api_url)
      .map((response: Response) => response.json().map(people => People.fromJSON(people)));
  }
}
