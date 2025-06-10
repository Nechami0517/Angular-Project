import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor() { }

  public userList = [
    {
      name: 'יוסי כהן',
      password: 'password123',
      role: 'מורה להתעמלות'
    },
    {
      name: 'שרה לוי',
      password: 'mypassword456',
      role: 'מזכירת רישום'
    },
    {
      name: 'אבי ישראלי',
      password: 'securepass789',
      role: 'מורה להתעמלות'
    },
    {
      name: 'רונית גולדשטין',
      password: 'mypassword101',
      role: 'מזכירת רישום'
    }
  ];
  public getUserList(){
    return this.userList;
  }

}
