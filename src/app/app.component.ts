import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NGOAPI';
  currentUser : any;
  myusers = [];
  errorMsg;
  
  constructor(private route: ActivatedRoute, private router: Router,
    fb: FormBuilder,private apiService: APIService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'))};

  ngOnInit() {
    this.apiService.getMyusers().subscribe(
      (data) => this.myusers = data,
      (error) => this.errorMsg = error,
      () => console.log('the sequence completed!')
    );
  }
  
  Home(){
    this.router.navigate(['']); 
  }

  Logout(){
    localStorage.removeItem('currentUser');
    window.location.reload();
  }

  goLogin(){
    this.router.navigate(['login']); 
  }

  goRegister(){
    this.router.navigate(['register']); 
  }
}
