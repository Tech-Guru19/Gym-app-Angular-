import { Routes } from '@angular/router';
import { Home } from './home/home'
import { Forms } from './forms/forms'

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'Register', component: Forms }
];
