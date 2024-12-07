import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent { 
  @ViewChild('serviceContainer') serviceContainer!: ElementRef;

  private SCROLL_DISTANCE = 250; // Distance to scroll on each button click

  // Scroll left method
  scrollLeft(): void {
    this.serviceContainer.nativeElement.scrollBy({
      left: -this.SCROLL_DISTANCE,
      behavior: 'smooth',
    });
  }

  // Scroll right method
  scrollRight(): void {
    this.serviceContainer.nativeElement.scrollBy({
      left: this.SCROLL_DISTANCE,
      behavior: 'smooth',
    });
  }
}
