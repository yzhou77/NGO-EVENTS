import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  public event = [];
  public errorMsg;
  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder,private apiService: APIService) { }

  public id =parseInt(this.route.snapshot.paramMap.get('id'));;

  public registrationForm: FormGroup;

  ngOnInit() {
    this.apiService.getEventid(this.id).subscribe(
      (data) => this.event = data,
      (error) => this.errorMsg = error,
      () => console.log('the sequence completed!')
    );
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
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));;
    this.apiService.editEvent(this.id,this.registrationForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );
      window.location.reload()
  }
}
