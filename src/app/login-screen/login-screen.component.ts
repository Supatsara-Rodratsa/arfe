import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void => *', animate(1000)),
      transition('* => void', animate(0)),
    ]),
  ]
})
export class LoginScreenComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  navigateToMainScreen() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      console.log('invalid');
      
    } else {
      this.router.navigate(['gallery']);
    }
   
  }

}
