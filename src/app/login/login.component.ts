import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { UserListService } from '../usersListService/user-list.service';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../authService/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, RouterOutlet, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private userListService: UserListService, private router: Router,private authService: AuthService) { } 
  userName: string = '';
  password: string = '';
  
  
  private userList : any[] = [];
  
  loginForm = this.fb.group({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  login() {
    console.log('Username:', this.userName);
    console.log('Password:', this.password);
    const user = this.userList.find(user => user.name === this.userName && user.password === this.password);
    if(user == null){
      alert('שם משתמש או סיסמא לא נכונים');
    }
    else{
      if(user.role === 'מורה להתעמלות'){
        sessionStorage.setItem('role', user.role);
        this.authService.setRole(user.role);
        this.router.navigate(['lesson-list']);
        alert('מורה להתעמלות' + user.name);
      }
      else if(user.role === 'מזכירת רישום'){
        sessionStorage.setItem('role', user.role);
        this.authService.setRole(user.role);
        this.router.navigate(['registered']);
        alert('מזכירת רישום' + user.name);
      }
    }
  }
  
  ngOnInit(): void {
    this.userList = this.userListService.getUserList();
    
    this.loginForm.get('userName')?.valueChanges.subscribe(value => {
      this.userName = value || '';
    });

    this.loginForm.get('password')?.valueChanges.subscribe(value => {
      this.password = value || '';
    });
  }
}
