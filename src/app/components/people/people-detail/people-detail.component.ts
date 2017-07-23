import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { People } from '../../../people';
import { PeopleService } from '../../../services/people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html'
})
export class PeopleDetailComponent implements OnInit {

  private person: People;
  private id: number;
  private sub: any;

  constructor(private route: ActivatedRoute, 
    private peopleService: PeopleService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      this.sub = this.peopleService.getPerson(this.id).subscribe(
            (data: People) => {
              this.person = data;
              console.log(this.person);
            }
          );
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
