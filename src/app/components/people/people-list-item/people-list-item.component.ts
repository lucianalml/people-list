import { Component, OnInit, Input } from '@angular/core';

import { People } from '../../../people';

@Component({
  selector: 'app-people-list-item',
  templateUrl: './people-list-item.component.html'
})
export class PeopleListItemComponent implements OnInit {

  @Input() people: People;

  constructor() { }

  ngOnInit() {
  }

}
