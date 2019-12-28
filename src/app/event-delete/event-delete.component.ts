import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-event-delete',
  templateUrl: './event-delete.component.html',
  styleUrls: ['./event-delete.component.css']
})
export class EventDeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder,private apiService: APIService) { }
  public id =parseInt(this.route.snapshot.paramMap.get('id'));;

  ngOnInit() {
  }
  
  Delete(){
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));;
    this.apiService.deleteEvent(this.id).subscribe((data)=>{
         console.log("success");
    });
    this.Home();
  }
  Home(){
    this.router.navigate(['']);
  }
  Refresh(){
    window.location.reload();
  }
  goEvent(){
    this.router.navigate(['events']);
  }
}
