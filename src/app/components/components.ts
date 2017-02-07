import { Component } from '@angular/core';
import { CreateUserComponent } from './create-user/create-user.component'; 
import { UserDropDownComponent } from './user-dropdown/user-dropdown.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

export const COMPONENTS: Component[] = [
    CreateUserComponent,
    UserDropDownComponent,
    NavbarComponent,
    LoginComponent
];

export * from './create-user/create-user.component'; 
export * from './user-dropdown/user-dropdown.component';
export * from './navbar/navbar.component';
export * from './login/login.component';