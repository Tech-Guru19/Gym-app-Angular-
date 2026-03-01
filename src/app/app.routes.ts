import { Routes } from '@angular/router';
import { Home } from './home/home'
import { Forms } from './forms/forms'
import { Subscription } from './subscription/subscription'
import { Payment } from './payment/payment'

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'Register', component: Forms },
    {path: 'Subscription', component: Subscription},
    {path: 'Payment', component: Payment}
];
