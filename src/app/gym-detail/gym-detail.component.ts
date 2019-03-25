import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'gymDetail',
  templateUrl: './gym-detail.component.html',
  styleUrls: ['./gym-detail.component.css']
})
export class GymDetailComponent implements OnInit {

  gym = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getGymDetails(this.route.snapshot.params['id']);
  }

  getGymDetails(id) {
    this.api.getGym(id)
      .subscribe(data => {
        console.log(data);
        this.gym = data;
      });
  }

  deleteGym(id) {
    this.api.deleteGym(id)
      .subscribe(res => {
          this.router.navigate(['/gyms']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
