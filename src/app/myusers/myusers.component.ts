import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-myusers',
  templateUrl: './myusers.component.html',
  styleUrls: ['./myusers.component.css']
})
export class MyusersComponent implements OnInit {
  
  public myusers = [];
  public errorMsg;

  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder,private apiService: APIService) { }

  ngOnInit() {
    this.apiService.getMyusers().subscribe(
      (data) => this.myusers = data,
      (error) => this.errorMsg = error,
      () => console.log('the sequence completed!')
    );
  }

  public id;
  Edit(emp){
    this.id = emp.id
    this.router.navigate(['users/edit/'+this.id]);
  }

  Confirm(emp){
    this.id = emp.id
    this.router.navigate(['users/delete/'+this.id]);
  }
  
  Add(){
    this.router.navigate(['users/add/']); 
  }

  Home(){
    this.router.navigate(['']); 
  }
}
