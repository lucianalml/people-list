import { RouterModule, Routes } from '@angular/router';

import { PeopleDetailComponent } from './components/people/people-detail/people-detail.component';

const APP_ROUTES: Routes = [
    { path: 'person/:id', component: PeopleDetailComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
