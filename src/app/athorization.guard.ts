import { CanActivateFn } from '@angular/router';
import { AuthService } from './authService/auth.service';
import { inject } from '@angular/core';

export const athorizationGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService);
  const role = authService.getRole(); 
  if (!role) {
    alert('נא להתחבר'); 
    return false; 
  }
  if (role  === 'מורה להתעמלות' && route.routeConfig?.path === 'registered') {
    alert(' לא מורשה' );
    return false;
  }
  if (role  === 'מזכירת רישום' && route.routeConfig?.path === 'lesson-list') {
    alert(' לא מורשה' );
    return false;
  }
  return true;
};
