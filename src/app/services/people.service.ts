import { Injectable } from '@angular/core';


import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';


import { People } from '../people';

import { environment } from '../../environments/environment';

@Injectable()
export class PeopleService {

  private people: People[] = [];

  constructor(private http: Http) { }

  getPeople() {
    let peopleUrl = environment.api_url + '/people';
    // For githut deploy
    // return this.http.get(environment.api_url)
    return this.http.get(peopleUrl)
      .map((response: Response) => response.json().map(people => People.fromJSON(people)));
  }

  getPerson(id: number) {
    let personUrl = environment.api_url + '/people/' + id;
    return this.http.get(personUrl)
      .map((response: Response) => People.fromJSON(response.json()));
  }
}
