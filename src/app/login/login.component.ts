import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private fb: FormBuilder,
    private apiService: APIService) {this.currentUser = JSON.parse(localStorage.getItem('currentUser'))}

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  myusers = [];
  errorMsg;
  username: string;
  password: string;
  role: string;
  currentUser : any;
  log :number = 0;
  log2: number = 0;

  ngOnInit() {
    this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    })
    this.apiService.getMyusers().subscribe(
      (data) => this.myusers = data,
      (error) => this.errorMsg = error,
      () => console.log('the sequence completed!')
    )};

  onSubmit() {
    this.username = this.loginForm.get('username').value
    this.password = this.loginForm.get('password').value
    for (let i = 0; i < this.myusers.length;i++){
      if (this.username == this.myusers[i].username){
          if (this.password == this.myusers[i].password){
            this.role = this.myusers[i].role
            this.log = 2
              localStorage.setItem('currentUser', JSON.stringify(({username: this.username, password: this.password, role:this.role})));
          }}}
          this.log2 = this.log-1
          if (this.log2 < 0){
            console.log('username or password is incorrect!')
          }else{
          window.location.reload()};
        };
    /*localStorage.setItem('currentUser', this.username)};
    
    /*JSON.stringify(({username: this.username, password: this.password})))
        };*/

  goRegister(){
    this.router.navigate(['register']); 
  }
}
