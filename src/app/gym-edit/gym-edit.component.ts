import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'gymEdit',
  templateUrl: './gym-edit.component.html',
  styleUrls: ['./gym-edit.component.css']
})
export class GymEditComponent implements OnInit {

  gymForm: FormGroup;
  id:string = '';
  code:string = '';
  name:string = '';
  services:string = '';
  owner:string = '';
  
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getGym(this.route.snapshot.params['id']);
    this.gymForm = this.formBuilder.group({
      'code' : [null, Validators.required],
      'name' : [null, Validators.required],
      'services' : [null, Validators.required],
      'owner' : [null, Validators.required]
    });
  }

  getGym(id) {
    this.api.getGym(id).subscribe(data => {
      this.id = data._id;
      this.gymForm.setValue({
        code: data.code,
        name: data.name,
        services: data.services,
        owner: data.owner
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.updateGym(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/gym-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  gymDetails() {
    this.router.navigate(['/gym-details', this.id]);
  }
}
