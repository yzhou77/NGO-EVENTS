import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

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
  Edit(emp){
    this.id = emp.id
    this.router.navigate(['events/edit/'+this.id]);
  }

  Confirm(emp){
    this.id = emp.id
    this.router.navigate(['events/delete/'+this.id]);
  }
  
  Add(){
    this.router.navigate(['events/add/']); 
  }

  Home(){
    this.router.navigate(['']); 
  }


}
