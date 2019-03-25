import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GymComponent } from './gym/gym.component';
import { GymDetailComponent } from './gym-detail/gym-detail.component';
import { GymCreateComponent } from './gym-create/gym-create.component';
import { GymEditComponent } from './gym-edit/gym-edit.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

const appRoutes: Routes = [
  {
    path: 'gyms',
    component: GymComponent,
    data: { title: 'gym List' }
  },
  {
    path: 'gym-details/:id',
    component: GymDetailComponent,
    data: { title: 'gym Details' }
  },
  {
    path: 'gym-create',
    component: GymCreateComponent,
    data: { title: 'Create gym' }
  },
  {
    path: 'gym-edit/:id',
    component: GymEditComponent,
    data: { title: 'Edit gym' }
  },
  { path: '',
    redirectTo: '/gyms',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GymComponent,
    GymDetailComponent,
    GymCreateComponent,
    GymEditComponent
  ],
  imports: [
	RouterModule.forRoot(appRoutes),
	  BrowserModule,
	  FormsModule,
	  ReactiveFormsModule,
	  HttpClientModule,
	  BrowserAnimationsModule,
	  MatInputModule,
	  MatTableModule,
	  MatPaginatorModule,
	  MatSortModule,
	  MatProgressSpinnerModule,
	  MatIconModule,
	  MatButtonModule,
	  MatCardModule,
	  MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
