import { Component, ElementRef, OnInit } from '@angular/core';
import { APIService } from './../api.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  public registrationForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder,private apiService: APIService) { }
  
  ngOnInit() {
    this.registrationForm = this.fb.group({
    Event_id: ['',],
    Event_name: ['',],
    Event_description: ['',],
    Event_category: ['',],
    Event_start_date : ['',],
    Event_end_date: ['',],
    Event_start_time: ['',],
    Event_end_time: ['',],
    Event_location: ['',],
    Allow_registration: ['',],
    //Event_image: ['',],
    Adult_ticket_price:['',],
    Child_ticket_price: ['',],
  });
}

 onSubmit() {
    console.log(this.registrationForm);
    console.log(this.registrationForm.value);
    //console.log(this.registrationForm.value.userName);
    //console.log(this.registrationForm.value.password);
    this.apiService.newEvent(this.registrationForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );
  } 


  onFileChange(event) {
    if(event.target.files.length > 0) {
      let file = event.target.files[0];
      this.registrationForm.get('Event_image').setValue(file);
    }
  }
  Refresh(){
    window.location.reload();
  }
}
