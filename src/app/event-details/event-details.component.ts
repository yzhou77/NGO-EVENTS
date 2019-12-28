import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  public event = [];
  public errorMsg;
  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder,private apiService: APIService) { }

  public id =parseInt(this.route.snapshot.paramMap.get('id'));;

  ngOnInit() {
    this.apiService.getEventid(this.id).subscribe(
      (data) => this.event = data,
      (error) => this.errorMsg = error,
      () => console.log('the sequence completed!')
    );
  }

  Registration(){
      this.router.navigate(['userview/registration/'+this.id]);
    }
}
