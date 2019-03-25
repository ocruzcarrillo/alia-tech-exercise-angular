import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'gymComponent',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css']
})
export class GymComponent implements OnInit {
  
  Gyms: any;
  displayedColumns = ['code', 'name', 'services'];
  dataSource = new GymDataSource(this.api);
  
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getGyms()
      .subscribe(res => {
        console.log(res);
        this.Gyms = res;
      }, err => {
        console.log(err);
      });
  }
}

export class GymDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getGyms();
  }

  disconnect() {

  }
}
