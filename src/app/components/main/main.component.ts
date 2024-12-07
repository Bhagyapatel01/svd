import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { DashboardComponent } from "../../Pages/dashboard/dashboard.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule, DashboardComponent],
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})
export class MainComponent { }