import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilitiesService } from '../shared/utility.service';

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
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private router: Router,
    private utilitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
  }

  navigateToMainScreen(val?: string) {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      console.log('invalid');
      
    } else {
      this.utilitiesService.setName(this.form.get('name')?.value);
      this.router.navigate(['gallery']);
    }
   
  }

}
