import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private roleSubject = new BehaviorSubject<string | null>(sessionStorage.getItem('role'));
  role$ = this.roleSubject.asObservable();
  

  setRole(role: string) {
    sessionStorage.setItem('role', role);
    this.roleSubject.next(role);
  }
  getRole(): string | null {
    return sessionStorage.getItem('role'); // קבלת התפקיד מ-sessionStorage
  }
}