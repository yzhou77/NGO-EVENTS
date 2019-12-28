import { Component, OnInit, Input } from '@angular/core';
import { APIService } from './../api.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  @Input() eventname:string;
  @Input() adult_qty:number;
  @Input() adult_price:number;
  @Input() child_qty:number;
  @Input() child_price:number;

  constructor() { }

  ngOnInit() {
  }

}
