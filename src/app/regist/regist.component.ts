import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {

  public registrationForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder,private apiService: APIService) { }
  
  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: ['',],
      lastName: ['',],
      email: ['',],
      username: ['',],
      password: ['',],
      role: ['',],
    });
  }

  onSubmit() {
    console.log(this.registrationForm);
    console.log(this.registrationForm.value);
    //console.log(this.registrationForm.value.userName);
    //console.log(this.registrationForm.value.password);
    this.apiService.newMyuser(this.registrationForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );
      this.router.navigate(['']); 
  }


}
