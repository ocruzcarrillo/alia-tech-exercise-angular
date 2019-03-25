import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'gymCreate',
  templateUrl: './gym-create.component.html',
  styleUrls: ['./gym-create.component.css']
})
export class GymCreateComponent implements OnInit {

  gymForm: FormGroup;
  code:string='';
  name:string='';
  services:string='';
  owner:string='';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.gymForm = this.formBuilder.group({
      'code' : [null, Validators.required],
      'name' : [null, Validators.required],
      'services' : [null, Validators.required],
      'owner' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.postGym(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/gym-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
