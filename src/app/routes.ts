import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { 
        CreateUserComponent,
        LoginComponent,
        PeopleComponent,
        UserProfileComponent,
        AccountComponent,
        PostComponent
    } from './components/components';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'post',
        pathMatch: 'full'
    },
    {
        path: 'post',
        component: PostComponent
    },
    {
        path: 'register',
        component: CreateUserComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'people',
        component: PeopleComponent
    },
    {
        path: 'user/:id',
        component: UserProfileComponent
    },
    {
        path: 'account',
        component: AccountComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
