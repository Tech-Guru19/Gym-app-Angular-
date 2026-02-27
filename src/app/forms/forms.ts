import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
isLogin = false; 

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  activeTab: 'signup' | 'signin' = 'signup';
  showPassword = false;

  signupData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  signinData = {
    email: '',
    password: '',
    remember: false
  };

  onSignUp() {
    console.log('Sign Up submitted:', this.signupData);
  }

  onSignIn() {
    console.log('Sign In submitted:', this.signinData);
  }
}
