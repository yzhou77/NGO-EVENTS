import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  public event = [];
  public errorMsg;
  public registrationForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder,private apiService: APIService) { }
  public id =parseInt(this.route.snapshot.paramMap.get('id'));;
  public checkid: number = 0;
  public confirmid: number = 0;

  ngOnInit() {
    this.registrationForm = this.fb.group({
      Event_name: ['',],
      First_name: ['',],
      Last_name: ['',],
      Email_id: ['',],
      Contact: ['',],
      Address: ['',],
      Total_adult_qty: ['',],
      Total_child_qty: ['',],
  });
  this.apiService.getEventid(this.id).subscribe(
    (data) => this.event = data,
    (error) => this.errorMsg = error,
    () => console.log('the sequence completed!')
  );
}

  onSubmit() {
    console.log(this.registrationForm);
    console.log(this.registrationForm.value);
    //console.log(this.registrationForm.value.userName);
    //console.log(this.registrationForm.value.password);
    this.apiService.newRegistration(this.registrationForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );
  }

  Confirm() {
    this.checkid = 1;
  }

  FinalConfirm(){
    this.confirmid = 1;
  }
}
