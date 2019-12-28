import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

  public events = [];
  public errorMsg;

  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder,private apiService: APIService) { }
  
  ngOnInit() {
    this.apiService.getEvents().subscribe(
      (data) => this.events = data,
      (error) => this.errorMsg = error,
      () => console.log('the sequence completed!')
    );
  }

  public id;
  Details(emp){
    this.id = emp.id
    this.router.navigate(['userview/details/'+this.id]);
  }
}
