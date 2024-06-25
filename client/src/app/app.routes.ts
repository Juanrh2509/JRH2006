import { Routes } from '@angular/router';

import { VehicleComponent } from './components/vehicle/vehicle.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/vehicles',
    pathMatch: 'full'
  },
  {
    path: 'vehicles',
    component: VehicleComponent
  },
];
