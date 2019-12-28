import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,private fb: FormBuilder,private apiService: APIService) { }
  public id =parseInt(this.route.snapshot.paramMap.get('id'));;

  ngOnInit() {
  }
  
  Delete(){
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));;
    this.apiService.deleteMyuser(this.id).subscribe((data)=>{
         console.log("success");
    });
    this.Refresh();
  }
  Home(){
    this.router.navigate(['']);
  }
  Refresh(){
    window.location.reload();
  }
}
