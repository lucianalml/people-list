import { Component, OnInit } from '@angular/core';

import { People } from '../../../people';
import { PeopleService } from '../../../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people: People[] ;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeople().subscribe(
        (data: People[]) => {
          this.people = data;
          console.log(this.people);
        }
      );
    
  }
}
