import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

//import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient
    //private authService: AuthService

  ) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/game';

    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });

  }

  onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      const username = this.form.value['username'];
      const password = this.form.value['password'];
      try {
        const param = new HttpParams()
          .set("username", username)
          .set("password", password);
        this.httpClient.post<string>(environment.apiUrl + '/login', param)
          .pipe()
          .subscribe(
            result => {
              if (result === "OK") {
                this.router.navigate(['/general']);
              } else {
                this.loginInvalid = true;
              }
            },
            error => {
              this.router.navigate(['/general']);
            }
          );
      } catch (e) {
        this.router.navigate(['/general']);
      }
    }
  }
}