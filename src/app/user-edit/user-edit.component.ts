import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public user = [];
  public errorMsg;
  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder,private apiService: APIService) { }

  public id =parseInt(this.route.snapshot.paramMap.get('id'));;

  public registrationForm: FormGroup;

  ngOnInit() {
    this.apiService.getMyuserid(this.id).subscribe(
      (data) => this.user = data,
      (error) => this.errorMsg = error,
      () => console.log('the sequence completed!')
    );
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
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));;
    this.apiService.editMyuser(this.id,this.registrationForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );
    window.location.reload();
  }

}
