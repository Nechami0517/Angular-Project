import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { RegisteredComponent } from './registered/registered.component';
import { athorizationGuard } from './athorization.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'lesson-list', component: LessonListComponent, canActivate: [athorizationGuard], },
    { path: 'registered', component: RegisteredComponent, canActivate: [athorizationGuard],},
    { path: '', redirectTo: 'login', pathMatch: 'full' } 
];

